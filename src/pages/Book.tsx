import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Book Asset
import bookImg from "@/assets/images/Book/shadow-book.webp";

const Book = () => {
  const neonColor = "#EFB41A";
  const neonGlow = `0 0 20px ${neonColor}44, 0 0 40px ${neonColor}22`;

  const features = [
    "١٢ نظام تمرين مختلف",
    "فيديوهات توضيحية لكل تمرين",
    "تصحيح وضعيات التمرين",
    "أنظمة غذائية من 1500 لـ 4000 سعر",
  ];

  return (
    <main className="bg-[#050505] min-h-screen pt-24 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">
          {/* Left: Book Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative group"
          >
            <div 
              className="absolute inset-0 blur-3xl rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"
              style={{ backgroundColor: neonColor }}
            />
            <img
              src={bookImg}
              alt="صورة كتاب درب نفسك"
              className="relative z-10 w-full max-w-lg mx-auto transform transition-transform duration-500 group-hover:scale-105"
              style={{ filter: `drop-shadow(0 0 15px ${neonColor}66)` }}
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-right"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
              كتاب <span style={{ color: neonColor, textShadow: neonGlow }}>شـادو</span>
            </h1>
            <p className="font-arabic text-lg md:text-xl text-muted-foreground mb-10 leading-loose">
              يحتوي علي انظمة تمرين تقدر تستمر عليها ٣ سنين بدون ما تحتاج لمدرب .
              <br />
              لان معاك ١٢ نظام تمرين مختلفين 
              <br />
              وبالاضافه الي تصحيح لوضعيات تمرينك 
              <br />
              والكتاب مرفق بفيديوهات توضيحية اضغط علي اسم التمرين هيفتح فيديو 
              <br />
              ويحتوي الكتاب علي انظمه غذائية جاهزة من اول ١٥٠٠ سعر حراري الي ٤٠٠٠ سعر 
              <br />
              تقدر تستخدم عدد منهم حسب احتياجك
            </p>
            <Button
              className="px-12 py-8 text-xl font-display rounded-xl transition-all duration-300 hover:scale-105"
              style={{ 
                backgroundColor: neonColor, 
                color: "#000",
                boxShadow: `0 0 20px ${neonColor}66`
              }}
            >
              اشتري الآن
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Highlight Section */}
      <section className="py-24 bg-[#080808]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="p-8 bg-card/50 border-primary/10 hover:border-[#EFB41A]/50 transition-colors duration-500 text-center glass-panel"
                  style={{ borderColor: `${neonColor}22` }}
                >
                  <p className="font-arabic text-xl font-bold">{feature}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Section */}
      <section className="py-24 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass-panel py-20 rounded-3xl border text-center max-w-5xl mx-auto overflow-hidden relative"
          style={{ borderColor: `${neonColor}33` }}
        >
          <div 
            className="absolute inset-0 opacity-5"
            style={{ backgroundColor: neonColor }}
          />
          <h2 className="text-2xl md:text-4xl font-arabic font-bold px-8 leading-relaxed relative z-10">
            "معاك نظام كامل تقدر تعتمد عليه سنين بدون الحاجة لمدرب"
          </h2>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-32 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
            ابدأ دلوقتي واستثمر في نفسك
          </h2>
          <Button
            className="px-16 py-10 text-2xl font-display rounded-2xl transition-all duration-500 hover:scale-110 shadow-neon"
            style={{ 
              backgroundColor: neonColor, 
              color: "#000",
              boxShadow: `0 0 30px ${neonColor}88`
            }}
          >
            اشتري الكتاب الآن
          </Button>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
};

export default Book;
