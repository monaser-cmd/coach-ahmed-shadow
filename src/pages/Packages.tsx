import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface Package {
  id: string;
  name: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  is_popular: boolean;
}

const localPackages: Package[] = [
  {
    id: "basic",
    name: "Basic",
    price: "1500",
    duration: "1 Month",
    description: "Perfect for those starting their fitness journey.",
    features: ["Training Program", "Nutrition Plan", "Weekly Check-ins", "WhatsApp Support"],
    is_popular: false
  },
  {
    id: "pro",
    name: "Pro",
    price: "3500",
    duration: "3 Months",
    description: "Our most popular choice for consistent results.",
    features: ["Customized Training", "Dynamic Nutrition", "Priority Support", "Supplement Guide", "Video Form Check"],
    is_popular: true
  },
  {
    id: "elite",
    name: "Elite",
    price: "6000",
    duration: "6 Months",
    description: "Full transformation for dedicated athletes.",
    features: ["Everything in Pro", "1-on-1 Strategy Calls", "Contest Prep Option", "Life-time Access"],
    is_popular: false
  }
];

const Packages = () => {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const { data, error } = await supabase
          .from("packages")
          .select("*")
          .order("price", { ascending: true });
        
        if (!error && data && data.length > 0) {
          setPackages(data);
        } else {
          setPackages(localPackages);
        }
      } catch (err) {
        console.error("Failed to fetch packages:", err);
        setPackages(localPackages);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  return (
    <main className="bg-transparent min-h-screen pt-24">
      <Navbar />
      
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-4">
            <span className="text-gradient glow-text uppercase">Packages</span>
          </h1>
          <p className="text-muted-foreground font-body text-lg tracking-widest uppercase">
            CHOOSE YOUR TRANSFORMATION PATH
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-12 h-12 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative rounded-3xl p-8 flex flex-col backdrop-blur-xl ${
                  pkg.is_popular
                    ? "neon-border bg-primary/5 scale-105 z-10"
                    : "glass-panel bg-background/20"
                }`}
              >
                {pkg.is_popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1 bg-primary text-primary-foreground text-xs font-display tracking-[0.2em] rounded-full shadow-[0_0_20px_rgba(255,0,0,0.4)]">
                    RECOMMENDED
                  </span>
                )}
                
                <h3 className="font-display text-3xl font-bold text-center mb-6 uppercase tracking-wider">{pkg.name}</h3>
                
                <div className="text-center mb-8 bg-background/40 py-6 rounded-2xl border border-primary/10">
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-5xl font-display font-bold text-gradient">{pkg.price}</span>
                    <span className="text-muted-foreground font-display text-xl uppercase tracking-tighter">LE</span>
                  </div>
                  <p className="text-primary/70 font-display text-sm mt-2 tracking-[0.2em] uppercase">PER {pkg.duration}</p>
                </div>

                <p className="font-body text-muted-foreground text-center mb-8 h-12">
                  {pkg.description}
                </p>

                <ul className="space-y-4 mb-10 flex-1">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 font-body text-sm text-foreground/80">
                      <div className="mt-1 bg-primary/20 rounded-full p-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={`block text-center px-8 py-4 font-display text-sm tracking-[0.3em] rounded-xl transition-all uppercase ${
                    pkg.is_popular
                      ? "bg-primary text-primary-foreground hover:shadow-[0_0_30px_rgba(255,0,0,0.4)]"
                      : "neon-border hover:bg-primary/10"
                  }`}
                >
                  ENROLL NOW
                </a>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
};

export default Packages;
