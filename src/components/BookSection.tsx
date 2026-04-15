import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen } from "lucide-react";

const BookSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="book" className="section-padding relative overflow-hidden">
      <div className="neon-line w-full mb-16" />
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto glass-panel rounded-3xl p-8 md:p-12 text-center border border-primary/20 relative"
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-primary text-primary-foreground text-sm font-display tracking-widest rounded-full animate-float">
            SPECIAL OFFER
          </div>
          
          <div className="flex flex-col items-center gap-8 pt-4">
            <div className="relative">
              <BookOpen className="w-20 h-20 text-primary" />
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Own My <span className="text-gradient">Book</span>
            </h2>
            
            <div className="space-y-4">
              <p className="font-arabic text-2xl md:text-3xl text-foreground font-bold leading-relaxed">
                📖لشراء كتاب درب نفسك 500ج بدل٩٠٠
              </p>
              <p className="font-body text-muted-foreground text-base md:text-lg">
                The ultimate guide to transform your physique and mindset.
              </p>
            </div>
            
            <a
              href="https://wa.me/201226249344"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 font-arabic text-lg tracking-wider bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-all duration-300 shadow-neon"
            >
              اطلب كتابك الآن
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookSection;
