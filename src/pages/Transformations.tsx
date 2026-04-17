import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabase";
import { Loader2, Star, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Import local transformation images
import featuredT from "@/assets/images/featured Transformation/featured-Transformation.jpeg";
import t1 from "@/assets/transform-1.jpeg";
import t2 from "@/assets/transform-2.jpeg";
import t3 from "@/assets/transform-3.jpeg";
import t4 from "@/assets/transform-4.jpeg";
import t5 from "@/assets/transform-5.jpeg";
import t6 from "@/assets/transform-6.jpeg";
import t7 from "@/assets/transform-7.jpeg";
import t8 from "@/assets/transform-8.jpeg";
import t9 from "@/assets/transform-9.jpeg";

const localTransformations = [t1, t2, t3, t4, t5, t6, t7, t8, t9];

const Transformations = () => {
  const [items, setItems] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from("transformations")
          .select("image_url")
          .order("created_at", { ascending: false });
        
        if (!error && data && data.length > 0) {
          // Combine dynamic images from Supabase with local ones
          const dynamicImages = data.map(t => t.image_url);
          setItems([...dynamicImages, ...localTransformations]);
        } else {
          setItems(localTransformations);
        }
      } catch (err) {
        console.error("Failed to fetch transformations:", err);
        setItems(localTransformations);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <Loader2 className="w-12 h-12 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <main className="bg-transparent min-h-screen pt-24">
      <Navbar />
      
      <section className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-4">
            <span className="text-gradient glow-text uppercase">Results</span>
          </h1>
          <p className="text-muted-foreground font-arabic text-lg md:text-xl tracking-widest mb-8">
            نتائج تحول العملاء - نماذج حقيقية من التغيير الجسدي والذهني مع برنامج شادو
          </p>
        </motion.div>

        {/* Featured Transformation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24 max-w-5xl mx-auto"
        >
          <div className="relative group overflow-hidden rounded-3xl neon-border bg-card shadow-[0_0_50px_rgba(255,0,0,0.1)]">
            <div className="absolute top-6 left-6 z-20 flex items-center gap-2 bg-primary/90 px-4 py-2 rounded-full backdrop-blur-md shadow-lg animate-pulse-glow">
              <Award className="w-5 h-5 text-white" />
              <span className="font-display text-[10px] tracking-[0.2em] text-white uppercase font-bold">Featured Result</span>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-[400px] lg:h-[600px] overflow-hidden">
                <img
                  src={featuredT}
                  alt="Featured transformation"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center bg-card/50 backdrop-blur-sm relative">
                <Star className="absolute top-12 right-12 w-24 h-24 text-primary/5 opacity-20" />
                <h3 className="text-3xl lg:text-4xl font-arabic font-bold mb-6 text-foreground leading-tight">
                  تحول جذري وشامل <br />
                  <span className="text-gradient">قصة نجاح مميزة</span>
                </h3>
                <p className="text-muted-foreground font-arabic text-lg leading-relaxed mb-8">
                  الالتزام والاستمرارية مع نظام شادو العلمي هو المفتاح لتحقيق هذه النتائج المبهرة. هذا التحول هو مثال حي على أن المستحيل ممكن مع التوجيه الصحيح والإرادة القوية.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm font-arabic text-foreground/80">نظام غذائي مخصص 100%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm font-arabic text-foreground/80">برنامج تدريبي مكثف</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm font-arabic text-foreground/80">متابعة يومية دقيقة</span>
                  </div>
                </div>
                <div className="mt-10">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-primary hover:bg-primary/90 text-white font-display tracking-widest px-8 h-12 rounded-xl">
                        FULL VIEW
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
                      <img
                        src={featuredT}
                        alt="Featured transformation full"
                        className="w-full h-auto rounded-lg shadow-2xl"
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Transformations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {items.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
              viewport={{ once: true }}
              className="group relative cursor-pointer"
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative overflow-hidden rounded-2xl neon-border aspect-square bg-card">
                    <img
                      src={src}
                      alt={`Client transformation ${index + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="font-display text-xs tracking-[0.3em] bg-primary/80 px-4 py-2 rounded-full text-white backdrop-blur-sm">
                        VIEW RESULT
                      </span>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
                  <img
                    src={src}
                    alt={`Client transformation ${index + 1}`}
                    className="w-full h-auto rounded-lg shadow-2xl"
                  />
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-32 text-center py-20 glass-panel rounded-3xl border border-primary/10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full -z-10" />
          <h2 className="text-3xl md:text-5xl font-arabic font-bold mb-8 text-foreground uppercase tracking-tighter">
            READY FOR YOUR <span className="text-gradient">TRANSFORMATION?</span>
          </h2>
          <a
            href="/packages"
            className="inline-block px-12 py-5 font-arabic text-xl tracking-wider bg-primary text-primary-foreground rounded-xl hover:scale-105 transition-all duration-300 shadow-neon uppercase"
          >
            Start Your Journey
          </a>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
};

export default Transformations;
