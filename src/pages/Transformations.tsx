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
  const { scrollYProgress } = useScroll();
  
  // Map scroll progress to camera Y position (from top to bottom of the wall)
  // The wall is centered at 0, spacing is 6.
  // totalHeight = (items.length - 1) * 6
  const cameraY = useTransform(scrollYProgress, [0, 1], [0, -(items.length - 1) * 6]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("transformations")
        .select("id, title, description")
        .order("created_at", { ascending: false });
      
      if (!error && data) {
        setItems(data);
      } else {
        setItems([
          { id: "1", title: "Transformation 1", description: "12 Weeks" },
          { id: "2", title: "Transformation 2", description: "6 Months" },
          { id: "3", title: "Transformation 3", description: "1 Year" },
        ]);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="bg-transparent min-h-[300vh]">
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
              className="glass-panel p-8 rounded-2xl neon-border max-w-md pointer-events-auto backdrop-blur-md"
            >
              <span className="text-primary font-display text-sm tracking-widest mb-2 block">
                CASE {index + 1}
              </span>
              <h2 className="text-3xl font-display font-bold mb-4 text-gradient uppercase">
                {item.title}
              </h2>
              <p className="font-body text-lg text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          </section>
        ))}
      </div>

      {/* Helper component to inject camera Y into SceneManager via global state or effect */}
      <CameraScroller y={cameraY} />

      <div className="h-screen flex items-center justify-center">
        <p className="font-display text-primary animate-pulse tracking-widest">END OF TRANSFORMATIONS</p>
      </div>
      
      <Footer />
    </main>
  );
};

// Internal component to sync Framer Motion value to Three.js camera
import { useThree } from "@react-three/fiber";

const CameraScroller = ({ y }: { y: any }) => {
  // This needs to be inside the Canvas, but Transformations.tsx is outside.
  // We can use a custom event or a shared store. 
  // Let's use a custom event for simplicity in this implementation.
  useEffect(() => {
    return y.onChange((latest: number) => {
      window.dispatchEvent(new CustomEvent("camera-scroll-y", { detail: latest }));
    });
  }, [y]);

  return null;
};

export default Transformations;
