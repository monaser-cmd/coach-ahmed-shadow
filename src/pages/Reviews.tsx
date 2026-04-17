import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

// Import all images from the reviews folder using Vite's glob import
const imageModules = import.meta.glob("/src/assets/images/reviews/*.jpg", { eager: true });

// Convert the object to an array and sort numerically by filename
const reviewImages = Object.keys(imageModules)
  .sort((a, b) => {
    const aNum = parseInt(a.match(/(\d+)\.jpg$/)?.[1] || "0");
    const bNum = parseInt(b.match(/(\d+)\.jpg$/)?.[1] || "0");
    return aNum - bNum;
  })
  .map((key) => (imageModules[key] as any).default);

const Reviews = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="bg-transparent min-h-screen pt-24">
      <Navbar />

      {/* Page Header */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-4">
            <span className="text-gradient glow-text">آراء ونتائج العملاء</span>
          </h1>
          <p className="text-muted-foreground font-arabic text-lg md:text-xl tracking-wider mb-8">
            نماذج حقيقية من التحول قبل وبعد مع كابتن أحمد شادي
          </p>
        </motion.div>

        {/* Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto glass-panel p-8 rounded-2xl neon-border border-primary/20 text-center mb-20"
        >
          <h2 className="font-arabic text-2xl md:text-4xl font-bold text-foreground">
            أكثر من 3000 عميل حققوا نتائج حقيقية 🖤
          </h2>
        </motion.div>

        {/* Reviews Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviewImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
              viewport={{ once: true }}
              className="group relative cursor-pointer"
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative overflow-hidden rounded-2xl neon-border aspect-video bg-card">
                    <img
                      src={img}
                      alt="نتيجة عميل قبل وبعد"
                      loading="lazy"
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-3xl border-none bg-transparent p-0 shadow-none">
                  <img
                    src={img}
                    alt="نتيجة عميل قبل وبعد"
                    className="w-full h-auto rounded-lg"
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
          <h2 className="text-3xl md:text-5xl font-arabic font-bold mb-8 text-foreground">
            ابدأ رحلتك الآن وكن من قصص النجاح القادمة
          </h2>
          <a
            href="/packages"
            className="inline-block px-12 py-5 font-arabic text-xl tracking-wider bg-primary text-primary-foreground rounded-xl hover:scale-105 transition-all duration-300 shadow-neon"
          >
            اشترك الآن
          </a>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
};

export default Reviews;
