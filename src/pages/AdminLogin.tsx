import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { motion } from "framer-motion";
import { Lock, Mail, Loader2, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Canvas } from "@react-three/fiber";
import ParticleField from "@/components/ParticleField";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      toast.success("Welcome back, Captain!");
      navigate("/admin/dashboard");
    } catch (error) {
      const err = error as Error;
      toast.error(err.message || "Invalid login credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden px-4">
      {/* Back to Home Button */}
      <div className="absolute top-8 left-8 z-20">
        <Link to="/">
          <Button variant="ghost" className="text-muted-foreground hover:text-white gap-2 font-display text-xs tracking-widest transition-colors">
            <Home className="w-4 h-4" />
            BACK TO HOME
          </Button>
        </Link>
      </div>

      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10 animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md z-10"
      >
        <div className="glass-panel p-8 rounded-2xl neon-border relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          
          <div className="text-center mb-8">
            <h1 className="text-3xl font-display font-bold mb-2">
              Admin <span className="text-gradient">Access</span>
            </h1>
            <p className="text-muted-foreground font-body text-sm">
              Enter your credentials to manage the shadow realm.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-display tracking-wider text-muted-foreground ml-1">EMAIL</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/50" />
                <Input
                  type="email"
                  placeholder="coach@ahmedshadow.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background/50 border-border/50 pl-10 h-12 focus:ring-primary/20"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-display tracking-wider text-muted-foreground ml-1">PASSWORD</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/50" />
                <Input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-background/50 border-border/50 pl-10 h-12 focus:ring-primary/20"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-display tracking-widest transition-all shadow-lg shadow-primary/20"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                "AUTHENTICATE"
              )}
            </Button>
          </form>
        </div>

        <p className="text-center mt-6 text-xs text-muted-foreground font-body uppercase tracking-[0.2em]">
          Restricted Area • Authorized Personnel Only
        </p>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
