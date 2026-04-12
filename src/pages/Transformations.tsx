import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { supabase } from "@/lib/supabase";

interface Transformation {
  id: string;
  title: string;
  description: string;
}

const Transformations = () => {
  const [items, setItems] = useState<Transformation[]>([]);
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  
  // Map scroll progress to camera Y position (from top to bottom of the wall)
  // Matching the spacing of 7 in TransformationsSector.tsx
  const cameraY = useTransform(scrollYProgress, [0, 1], [0, -(items.length - 1) * 7]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from("transformations")
          .select("id, title, description")
          .order("created_at", { ascending: false });
        
        if (!error && data && data.length > 0) {
          setItems(data);
        } else {
          // Match the 9 local images in TransformationsSector.tsx
          setItems(Array.from({ length: 9 }).map((_, i) => ({
            id: `local-${i}`,
            title: `Transformation ${i + 1}`,
            description: "Witness the incredible physical and mental transformations achieved by my clients."
          })));
        }
      } catch (err) {
        console.error("Failed to fetch transformations:", err);
        // Fallback to local items on error
        setItems(Array.from({ length: 9 }).map((_, i) => ({
          id: `local-${i}`,
          title: `Transformation ${i + 1}`,
          description: "Witness the incredible physical and mental transformations achieved by my clients."
        })));
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <Loader2 className="w-12 h-12 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <main className="bg-transparent min-h-[400vh]">
      <Navbar />
      
      {/* Sticky Header */}
      <div className="fixed top-32 right-8 z-10 pointer-events-none">
        <h1 className="text-5xl md:text-8xl font-display font-bold text-right">
          <span className="text-gradient glow-text uppercase tracking-tighter">Results</span>
        </h1>
        <p className="text-primary/70 font-display tracking-[0.3em] text-right mt-2">SCROLL TO EXPLORE</p>
      </div>

      {/* Content Overlays */}
      <div className="container mx-auto px-4">
        {items.map((item, index) => (
          <section 
            key={item.id} 
            className="h-screen flex items-center justify-start pointer-events-none"
          >
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ margin: "-100px" }}
              className="glass-panel p-8 rounded-2xl neon-border max-w-md pointer-events-auto backdrop-blur-md"
            >
              <span className="text-primary font-display text-sm tracking-widest mb-2 block uppercase">
                Phase {index + 1}
              </span>
              <h2 className="text-3xl font-display font-bold mb-4 text-gradient uppercase">
                {item.title}
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          </section>
        ))}
      </div>

      <CameraScroller y={cameraY} />

      <div className="h-screen flex items-center justify-center">
        <p className="font-display text-primary animate-pulse tracking-widest uppercase">Shadow Transformation Program</p>
      </div>
      
      <Footer />
    </main>
  );
};

const CameraScroller = ({ y }: { y: any }) => {
  useEffect(() => {
    return y.onChange((latest: number) => {
      window.dispatchEvent(new CustomEvent("camera-scroll-y", { detail: latest }));
    });
  }, [y]);

  return null;
};

export default Transformations;
