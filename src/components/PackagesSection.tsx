import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Basic",
    price: "400",
    duration: "30 DAYS",
    description: "Just one month ,, Its not enough to reach your goal",
    features: ["Special Diet", "Training Plan", "Save money", "More useful"],
    popular: false,
  },
  {
    name: "Pro",
    price: "550",
    duration: "45 DAYS",
    description: "A month and a half is enough to feel the change",
    features: ["Special Diet", "Training Plan", "Save money", "More useful"],
    popular: true,
  },
  {
    name: "Premium",
    price: "850",
    duration: "90 DAYS",
    description: "Three months of work to reach the goal",
    features: ["Special Diet", "Training Plan", "Save money", "More useful"],
    popular: false,
  },
];

const PackagesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="packages" className="section-padding relative">
      <div className="neon-line w-full mb-16" />
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.2em] text-primary uppercase mb-3">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Choose Your <span className="text-gradient">Package</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className={`relative rounded-2xl p-6 flex flex-col ${
                pkg.popular
                  ? "neon-border bg-card scale-105"
                  : "glass-panel"
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-display tracking-wider rounded-full">
                  POPULAR
                </span>
              )}
              <h3 className="font-display text-2xl font-bold text-center mb-4">{pkg.name}</h3>
              <div className="text-center mb-4">
                <span className="text-4xl font-display font-bold text-gradient">{pkg.price}</span>
                <span className="text-muted-foreground font-body text-sm ml-1">LE</span>
                <p className="text-muted-foreground font-body text-xs mt-1">/{pkg.duration}</p>
              </div>
              <p className="font-body text-muted-foreground text-sm text-center mb-6">{pkg.description}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 font-body text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center px-6 py-3 font-display text-sm tracking-wider rounded-lg transition-all ${
                  pkg.popular
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "neon-border text-foreground hover:bg-primary/10"
                }`}
              >
                Contact
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
