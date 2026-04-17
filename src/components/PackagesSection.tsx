import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Check, 
  Dumbbell, 
  Apple, 
  Video, 
  Activity, 
  ClipboardList, 
  BookOpen, 
  MessageCircle, 
  Clock, 
  UserCheck 
} from "lucide-react";

const serviceFeatures = [
  {
    icon: <Apple className="w-6 h-6 text-primary" />,
    title: "ملف تغذية مخصوص",
    description: "تصميم ملف تغذية مخصوص ليومك وحسب احتياجك الفعلي لضمان أفضل نتائج"
  },
  {
    icon: <Dumbbell className="w-6 h-6 text-primary" />,
    title: "برنامج تدريبي مخصص",
    description: "تمرين مناسب لمستواك وعمرك التدريبي، سواء كنت مبتدئ أو محترف"
  },
  {
    icon: <Video className="w-6 h-6 text-primary" />,
    title: "تصحيح الأداء",
    description: "ملف متخصص لتصحيح أداء التمارين لضمان التمرين بأمان وفعالية"
  },
  {
    icon: <Activity className="w-6 h-6 text-primary" />,
    title: "ملف إطالات احترافي",
    description: "ملف استريتشات مقدم من دكتور علاج طبيعي لمرونة أفضل وسرعة استشفاء"
  },
  {
    icon: <ClipboardList className="w-6 h-6 text-primary" />,
    title: "جدول متابعة (Follow-up)",
    description: "ملف متواجد بيه جدول متابعة دقيق لتسهيل رحلتك وقياس تطورك"
  },
  {
    icon: <BookOpen className="w-6 h-6 text-primary" />,
    title: "كتاب وصفات صحية",
    description: "مجموعة من الوصفات اللذيذة للأكل الصحي عشان تزهقش من الدايت"
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-primary" />,
    title: "متابعة واتساب مجانية",
    description: "خدمة المتابعة على الواتساب مجانًا بعد شراء الأنظمة للإجابة على استفساراتك"
  },
  {
    icon: <Clock className="w-6 h-6 text-primary" />,
    title: "سرعة في الرد",
    description: "رد سريع خلال 24 ساعة (بمعدل 1-2 مرة يومياً) مع إجازة يوم واحد أسبوعياً"
  },
  {
    icon: <UserCheck className="w-6 h-6 text-primary" />,
    title: "تحفيز مستمر",
    description: "بسأل عليك باستمرار كل أسبوع لو غيبت لرفع مستوى التحفيز والالتزام"
  }
];

const packages = [
  // ... (unchanged)
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
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
            Choose Your <span className="text-gradient">Package</span>
          </h2>
          
          <div className="max-w-2xl mx-auto glass-panel p-6 rounded-xl border border-primary/20 mb-12">
            <p className="font-arabic text-lg md:text-xl text-foreground leading-relaxed whitespace-pre-line">
              ✨️ عروض خدمات شادو ✨️
              {"\n"}رقمي واتساب ومحفظة كاش 01226249344
              {"\n"}العروض بمناسبة تجاوزي عدد ال3000 عميل 🖤
              {"\n"}<span className="text-primary font-bold">خدمة المتابعة علي واتساب مجاناً بعد شراء الانظمة</span>
            </p>
          </div>
        </motion.div>

        {/* New Service Features Grid */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
              مميزات <span className="text-gradient">خدمة التدريب الأونلاين</span>
            </h3>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-8" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {serviceFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -5, borderColor: "rgba(38, 188, 196, 0.3)" }}
                className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center group transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h4 className="font-arabic text-lg font-bold mb-2 text-foreground">{feature.title}</h4>
                <p className="font-arabic text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className={`relative rounded-2xl p-6 flex flex-col ${
                pkg.is_popular
                  ? "neon-border bg-card scale-105 z-10"
                  : "glass-panel"
              }`}
            >
              {pkg.is_popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-display tracking-wider rounded-full">
                  MOST POPULAR
                </span>
              )}
              <h3 className="font-arabic text-2xl font-bold text-center mb-4">{pkg.name}</h3>
              <div className="text-center mb-4">
                <span className="text-4xl font-display font-bold text-gradient">{pkg.price}</span>
                <span className="text-muted-foreground font-body text-sm ml-1">LE</span>
                <p className="text-muted-foreground font-body text-xs mt-1">/{pkg.duration}</p>
              </div>
              <p className="font-arabic text-muted-foreground text-sm text-center mb-6 leading-relaxed">
                {pkg.description}
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 font-arabic text-sm text-muted-foreground justify-end text-right">
                    <span className="flex-1">{f}</span>
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  </li>
                ))}
              </ul>
              <a
                href="https://www.easykash.net/Ahmed%20Shadoow/pay"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center px-6 py-3 font-arabic text-sm tracking-wider rounded-lg transition-all ${
                  pkg.is_popular
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "neon-border text-foreground hover:bg-primary/10"
                }`}
              >
                اشترك الآن
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
