import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { motion } from "framer-motion";
import { Session } from "@supabase/supabase-js";
import { 
  LogOut, 
  LayoutDashboard, 
  Users, 
  Package as PackageIcon, 
  Link as LinkIcon,
  Plus,
  Trash2,
  Save,
  Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

interface Package {
  id: string;
  name: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  is_popular: boolean;
}

interface Transformation {
  id: string;
  image_url: string;
  created_at: string;
}

const AdminDashboard = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [packages, setPackages] = useState<Package[]>([]);
  const [updatingPackage, setUpdatingPackage] = useState<string | null>(null);
  const [siteSettings, setSiteSettings] = useState<Record<string, string>>({});
  const [updatingLink, setUpdatingLink] = useState<string | null>(null);
  const [transformations, setTransformations] = useState<Transformation[]>([]);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate("/admin");
      } else {
        setSession(session);
        fetchPackages();
        fetchSiteSettings();
        fetchTransformations();
      }
      setLoading(false);
    });
  }, [navigate]);

  const fetchTransformations = async () => {
    const { data, error } = await supabase
      .from("transformations")
      .select("*")
      .order("created_at", { ascending: false });
    
    if (!error && data) {
      setTransformations(data);
    }
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("transformations")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from("transformations")
        .getPublicUrl(filePath);

      const { error: dbError } = await supabase
        .from("transformations")
        .insert({ image_url: publicUrl });

      if (dbError) throw dbError;

      toast.success("Transformation added!");
      fetchTransformations();
    } catch (error) {
      const err = error as Error;
      toast.error("Upload failed: " + err.message);
    } finally {
      setUploading(false);
    }
  };

  const handleDeleteTransformation = async (id: string, url: string) => {
    try {
      const fileName = url.split("/").pop();
      if (fileName) {
        await supabase.storage.from("transformations").remove([fileName]);
      }

      const { error } = await supabase
        .from("transformations")
        .delete()
        .eq("id", id);

      if (error) throw error;

      toast.success("Deleted successfully");
      fetchTransformations();
    } catch (error) {
      const err = error as Error;
      toast.error("Delete failed: " + err.message);
    }
  };

  const fetchSiteSettings = async () => {
    const { data, error } = await supabase
      .from("site_settings")
      .select("*");
    
    if (!error && data) {
      const settings = data.reduce((acc: Record<string, string>, curr) => {
        acc[curr.key] = curr.value;
        return acc;
      }, {});      setSiteSettings(settings);
    }
  };

  const handleUpdateSetting = async (key: string, value: string) => {
    setUpdatingLink(key);
    const { error } = await supabase
      .from("site_settings")
      .upsert({ key, value }, { onConflict: "key" });

    if (error) {
      toast.error("Update failed: " + error.message);
    } else {
      toast.success(`${key} updated!`);
      fetchSiteSettings();
    }
    setUpdatingLink(null);
  };

  const fetchPackages = async () => {
    const { data, error } = await supabase
      .from("packages")
      .select("*")
      .order("price", { ascending: true });
    
    if (error) {
      toast.error("Error fetching packages");
    } else {
      setPackages(data || []);
    }
  };

  const handleUpdatePackage = async (pkg: Package) => {
    setUpdatingPackage(pkg.id);
    const { error } = await supabase
      .from("packages")
      .update({
        name: pkg.name,
        price: pkg.price,
        duration: pkg.duration,
        description: pkg.description,
      })
      .eq("id", pkg.id);

    if (error) {
      toast.error("Update failed: " + error.message);
    } else {
      toast.success(`${pkg.name} package updated!`);
      fetchPackages();
    }
    setUpdatingPackage(null);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("Logged out successfully");
    navigate("/admin");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/30 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center neon-border">
              <LayoutDashboard className="text-primary w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-display font-bold tracking-tight">
                SHADOW <span className="text-gradient">CMS</span>
              </h1>
              <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em]">Management Terminal</p>
            </div>
          </div>
          <Button 
            variant="ghost" 
            onClick={handleLogout}
            className="text-muted-foreground hover:text-primary hover:bg-primary/10"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <Tabs defaultValue="transformations" className="space-y-12">
          <div className="flex justify-center">
            <TabsList className="glass-panel p-1 h-auto bg-card/20 border-border/50">
              <TabsTrigger value="transformations" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 px-6 rounded-lg font-display text-xs tracking-widest uppercase transition-all">
                <Users className="w-4 h-4 mr-2" />
                Transformations
              </TabsTrigger>
              <TabsTrigger value="packages" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 px-6 rounded-lg font-display text-xs tracking-widest uppercase transition-all">
                <PackageIcon className="w-4 h-4 mr-2" />
                Packages
              </TabsTrigger>
              <TabsTrigger value="links" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 px-6 rounded-lg font-display text-xs tracking-widest uppercase transition-all">
                <LinkIcon className="w-4 h-4 mr-2" />
                Global Links
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Transformations Tab */}
          <TabsContent value="transformations">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-display font-bold">Client <span className="text-gradient">Transformations</span></h2>
                  <p className="text-muted-foreground text-sm mt-1">Add or remove results from the carousel.</p>
                </div>
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    disabled={uploading}
                  />
                  <Button className="bg-primary hover:bg-primary/90" disabled={uploading}>
                    {uploading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Plus className="w-4 h-4 mr-2" />}
                    Upload New
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {transformations.length === 0 && !uploading && (
                  <div className="col-span-full py-20 text-center glass-panel rounded-2xl border-dashed border-2 border-border/50">
                    <p className="text-muted-foreground">No transformations uploaded yet.</p>
                  </div>
                )}
                
                {transformations.map((item) => (
                  <div key={item.id} className="group relative glass-panel rounded-xl overflow-hidden neon-border aspect-square">
                    <img 
                      src={item.image_url} 
                      alt="Transformation" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <Button 
                        size="icon" 
                        variant="destructive" 
                        className="h-8 w-8"
                        onClick={() => handleDeleteTransformation(item.id, item.image_url)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          {/* Packages Tab */}
          <TabsContent value="packages">
             <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6 max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-display font-bold">Pricing <span className="text-gradient">Control</span></h2>
                  <p className="text-muted-foreground text-sm mt-1">Update package prices and descriptions.</p>
                </div>
                {packages.length > 0 && (
                  <Button 
                    variant="outline" 
                    className="border-primary/30 text-primary hover:bg-primary/10 text-xs font-display tracking-widest uppercase"
                    onClick={async () => {
                      if (confirm("This will delete all current packages and reset them to the 5 latest offers. Continue?")) {
                        const { error: deleteError } = await supabase.from("packages").delete().neq("id", "00000000-0000-0000-0000-000000000000");
                        if (deleteError) {
                          toast.error("Delete failed: " + deleteError.message);
                          return;
                        }
                        const initialPackages = [
                          { name: "باقة الشهر", price: "700", duration: "1 Month", description: "📌700 في الشهر", features: ["متابعة يومية", "نظام غذائي مخصص", "نظام تدريبي مخصص"], is_popular: false },
                          { name: "باقة الشهرين", price: "1050", duration: "2 Months", description: "📌1050 في الشهرين", features: ["متابعة يومية", "نظام غذائي مخصص", "نظام تدريبي مخصص", "تحديثات أسبوعية"], is_popular: false },
                          { name: "عرض ال٣شهور", price: "1400", duration: "3 Months", description: "📌1400 ف عرض ال٣شهور وده بدل 1950ج", features: ["متابعة يومية", "نظام غذائي مخصص", "نظام تدريبي مخصص", "تحديثات أسبوعية", "أفضل قيمة"], is_popular: true },
                          { name: "عرض ال٦شهور", price: "1999", duration: "6 Months", description: "📌 1999 عرض خاااص لل٦شهور", features: ["متابعة يومية", "نظام غذائي مخصص", "نظام تدريبي مخصص", "تحديثات أسبوعية", "تحول كامل"], is_popular: false },
                          { name: "عرض الصحاب", price: "2300", duration: "For 2 People", description: "و تقدر تشترك في عرض الصحاب 2300 ج لو انتوا اتنين مع بعض اخوات او صحاب", features: ["لشخصين", "متابعة يومية", "نظام غذائي مخصص", "نظام تدريبي مخصص"], is_popular: false }
                        ];
                        const { error: insertError } = await supabase.from("packages").insert(initialPackages);
                        if (insertError) {
                          toast.error("Reset failed: " + insertError.message);
                        } else {
                          toast.success("Successfully reset to current offers!");
                          fetchPackages();
                        }
                      }
                    }}
                  >
                    Reset to Latest Offers
                  </Button>
                )}
              </div>

              {packages.length === 0 && (
                <div className="text-center py-12 glass-panel rounded-2xl border-dashed border-2 border-border/50">
                  <p className="text-muted-foreground">No packages found in database.</p>
                  <Button 
                    variant="outline" 
                    className="mt-4 border-primary/50 text-primary hover:bg-primary/10"
                    onClick={async () => {
                      const initialPackages = [
                        { name: "باقة الشهر", price: "700", duration: "1 Month", description: "📌700 في الشهر", features: ["متابعة يومية", "نظام غذائي مخصص", "نظام تدريبي مخصص"], is_popular: false },
                        { name: "باقة الشهرين", price: "1050", duration: "2 Months", description: "📌1050 في الشهرين", features: ["متابعة يومية", "نظام غذائي مخصص", "نظام تدريبي مخصص", "تحديثات أسبوعية"], is_popular: false },
                        { name: "عرض ال٣شهور", price: "1400", duration: "3 Months", description: "📌1400 ف عرض ال٣شهور وده بدل 1950ج", features: ["متابعة يومية", "نظام غذائي مخصص", "نظام تدريبي مخصص", "تحديثات أسبوعية", "أفضل قيمة"], is_popular: true },
                        { name: "عرض ال٦شهور", price: "1999", duration: "6 Months", description: "📌 1999 عرض خاااص لل٦شهور", features: ["متابعة يومية", "نظام غذائي مخصص", "نظام تدريبي مخصص", "تحديثات أسبوعية", "تحول كامل"], is_popular: false },
                        { name: "عرض الصحاب", price: "2300", duration: "For 2 People", description: "و تقدر تشترك في عرض الصحاب 2300 ج لو انتوا اتنين مع بعض اخوات او صحاب", features: ["لشخصين", "متابعة يومية", "نظام غذائي مخصص", "نظام تدريبي مخصص"], is_popular: false }
                      ];
                      await supabase.from("packages").insert(initialPackages);
                      fetchPackages();
                    }}
                  >
                    Seed Initial Data
                  </Button>
                </div>
              )}

              <div className="grid gap-6">
                {packages.map((pkg) => (
                  <div key={pkg.id} className="glass-panel p-6 rounded-2xl neon-border flex flex-col md:flex-row gap-6 items-center">
                    <div className="flex-1 w-full space-y-4 text-right">
                      <div className="flex items-center justify-between flex-row-reverse">
                        <h3 className="font-arabic font-bold text-lg">{pkg.name} Package</h3>
                        {pkg.is_popular && <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded-full border border-primary/30">POPULAR</span>}
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase tracking-widest text-muted-foreground block">Name (اسم الباقة)</label>
                          <input 
                            className="w-full bg-background/50 border border-border/50 rounded-lg p-2 text-sm font-arabic focus:outline-none focus:border-primary transition-colors text-right" 
                            value={pkg.name}
                            onChange={(e) => {
                              const newPackages = packages.map(p => p.id === pkg.id ? { ...p, name: e.target.value } : p);
                              setPackages(newPackages);
                            }}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase tracking-widest text-muted-foreground block text-left">Price (LE)</label>
                          <input 
                            className="w-full bg-background/50 border border-border/50 rounded-lg p-2 text-sm focus:outline-none focus:border-primary transition-colors text-left" 
                            value={pkg.price}
                            onChange={(e) => {
                              const newPackages = packages.map(p => p.id === pkg.id ? { ...p, price: e.target.value } : p);
                              setPackages(newPackages);
                            }}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase tracking-widest text-muted-foreground block text-left">Duration</label>
                          <input 
                            className="w-full bg-background/50 border border-border/50 rounded-lg p-2 text-sm focus:outline-none focus:border-primary transition-colors text-left" 
                            value={pkg.duration}
                            onChange={(e) => {
                              const newPackages = packages.map(p => p.id === pkg.id ? { ...p, duration: e.target.value } : p);
                              setPackages(newPackages);
                            }}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-muted-foreground block">Description (الوصف)</label>
                        <textarea 
                          className="w-full bg-background/50 border border-border/50 rounded-lg p-2 text-sm font-arabic focus:outline-none focus:border-primary transition-colors h-24 resize-none text-right" 
                          value={pkg.description}
                          onChange={(e) => {
                            const newPackages = packages.map(p => p.id === pkg.id ? { ...p, description: e.target.value } : p);
                            setPackages(newPackages);
                          }}
                        />
                      </div>
                    </div>
                    <Button 
                      disabled={updatingPackage === pkg.id}
                      onClick={() => handleUpdatePackage(pkg)}
                      className="w-full md:w-auto bg-primary/20 text-primary border border-primary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 min-w-[120px]"
                    >
                      {updatingPackage === pkg.id ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <>
                          <Save className="w-4 h-4 mr-2" />
                          Update
                        </>
                      )}
                    </Button>
                  </div>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          {/* Links Tab */}
          <TabsContent value="links">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto glass-panel p-8 rounded-2xl neon-border space-y-8"
            >
              <div className="text-center">
                <h2 className="text-3xl font-display font-bold">Social <span className="text-gradient">Command</span></h2>
                <p className="text-muted-foreground text-sm mt-1">Global links for footer and contact buttons.</p>
              </div>

              <div className="space-y-6">
                {[
                  { label: "Instagram", key: "instagram" },
                  { label: "Facebook", key: "facebook" },
                  { label: "TikTok", key: "tiktok" },
                  { label: "WhatsApp", key: "whatsapp" },
                ].map((link) => (
                  <div key={link.key} className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-muted-foreground ml-1">{link.label}</label>
                    <div className="flex gap-3">
                      <input 
                        className="flex-1 bg-background/50 border border-border/50 rounded-lg p-3 text-sm focus:outline-none focus:border-primary transition-colors" 
                        value={siteSettings[link.key] || ""} 
                        onChange={(e) => setSiteSettings({ ...siteSettings, [link.key]: e.target.value })}
                        placeholder={`Enter ${link.label} URL`}
                      />
                      <Button 
                        variant="secondary" 
                        size="icon" 
                        className="shrink-0"
                        disabled={updatingLink === link.key}
                        onClick={() => handleUpdateSetting(link.key, siteSettings[link.key])}
                      >
                        {updatingLink === link.key ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboard;
