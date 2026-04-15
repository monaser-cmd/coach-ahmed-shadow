import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const InternationalPricingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="international-pricing" className="section-padding relative overflow-hidden">
      <div className="neon-line w-full mb-16" />
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto neon-border bg-card/50 rounded-3xl p-8 md:p-12 text-center relative"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
          
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
            International <span className="text-gradient">Pricing</span>
          </h2>
          
          <div className="space-y-6">
            <p className="font-arabic text-xl md:text-2xl text-foreground font-bold leading-relaxed">
              ✨️السعر من خارج مصر✨️
            </p>
            <p className="font-arabic text-lg md:text-xl text-muted-foreground leading-relaxed">
              سواء مصريين او أجانب
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              {[
                { duration: "الشهر", price: "50$" },
                { duration: "الشهرين", price: "70$" },
                { duration: "ال٣شهور", price: "110$" },
                { duration: "ال٦ شهور", price: "170$" },
              ].map((item, i) => (
                <div key={i} className="glass-panel p-4 rounded-xl border border-primary/10">
                  <p className="font-arabic text-sm text-muted-foreground mb-1">{item.duration}</p>
                  <p className="font-display text-2xl font-bold text-primary">{item.price}</p>
                </div>
              ))}
            </div>
            
            <p className="font-arabic text-base md:text-lg text-primary/80 font-medium leading-relaxed bg-primary/5 p-4 rounded-lg border border-primary/20">
              غير مسموح الاشتراك في باقات عروض الطلاب اللي بالسعر المصري لمن بالخارج
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InternationalPricingSection;
