import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const currentPackages = [
  {
    id: "1",
    name: "باقة الشهر",
    price: "700",
    duration: "1 Month",
    description: "📌700 في الشهر",
    features: ["متابعة يومية", "نظام غذائي مخصص", "نظام تدريبي مخصص"],
    is_popular: false
  },
  {
    id: "2",
    name: "باقة الشهرين",
    price: "1050",
    duration: "2 Months",
    description: "📌1050 في الشهرين",
    features: ["متابعة يومية", "نظام غذائي مخصص", "نظام تدريبي مخصص", "تحديثات أسبوعية"],
    is_popular: false
  },
  {
    id: "3",
    name: "عرض ال٣شهور",
    price: "1400",
    duration: "3 Months",
    description: "📌1400 ف عرض ال٣شهور وده بدل 1950ج",
    features: ["متابعة يومية", "نظام غذائي مخصص", "نظام تدريبي مخصص", "تحديثات أسبوعية", "أفضل قيمة"],
    is_popular: true
  },
  {
    id: "4",
    name: "عرض ال٦شهور",
    price: "1999",
    duration: "6 Months",
    description: "📌 1999 عرض خاااص لل٦شهور",
    features: ["متابعة يومية", "نظام غذائي مخصص", "نظام تدريبي مخصص", "تحديثات أسبوعية", "تحول كامل"],
    is_popular: false
  },
  {
    id: "5",
    name: "عرض الصحاب",
    price: "2300",
    duration: "For 2 People",
    description: "و تقدر تشترك في عرض الصحاب 2300 ج لو انتوا اتنين مع بعض اخوات او صحاب",
    features: ["لشخصين", "متابعة يومية", "نظام غذائي مخصص", "نظام تدريبي مخصص"],
    is_popular: false
  }
];

const Packages = () => {
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
          <p className="text-muted-foreground font-body text-lg tracking-widest uppercase mb-8">
            CHOOSE YOUR TRANSFORMATION PATH
          </p>
          
          <div className="max-w-2xl mx-auto glass-panel p-6 rounded-xl border border-primary/20">
            <p className="font-arabic text-lg md:text-xl text-foreground leading-relaxed whitespace-pre-line">
              ✨️ عروض خدمات شادو✨️
              {"\n"}رقمي واتساب ومحفظة كاش 01226249344
              {"\n"}العروض بمناسبة تجاوزي عدد ال2000عميل🖤
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {currentPackages.map((pkg, i) => (
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
                  MOST POPULAR
                </span>
              )}
              
              <h3 className="font-arabic text-3xl font-bold text-center mb-6 tracking-wider">{pkg.name}</h3>
              
              <div className="text-center mb-8 bg-background/40 py-6 rounded-2xl border border-primary/10">
                <div className="flex items-center justify-center gap-1">
                  <span className="text-5xl font-display font-bold text-gradient">{pkg.price}</span>
                  <span className="text-muted-foreground font-display text-xl uppercase tracking-tighter">LE</span>
                </div>
                <p className="text-primary/70 font-display text-sm mt-2 tracking-[0.2em] uppercase">PER {pkg.duration}</p>
              </div>

              <p className="font-arabic text-muted-foreground text-center mb-8 leading-relaxed">
                {pkg.description}
              </p>

              <ul className="space-y-4 mb-10 flex-1">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 font-arabic text-sm text-foreground/80 justify-end text-right">
                    <span className="flex-1">{feature}</span>
                    <div className="mt-1 bg-primary/20 rounded-full p-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/201226249344"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center px-8 py-4 font-arabic text-sm tracking-[0.1em] rounded-xl transition-all uppercase ${
                  pkg.is_popular
                    ? "bg-primary text-primary-foreground hover:shadow-[0_0_30px_rgba(255,0,0,0.4)]"
                    : "neon-border hover:bg-primary/10"
                }`}
              >
                اشترك الآن
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Packages;
