import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CreditCard } from "lucide-react";

const PaymentSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="payment" className="section-padding relative overflow-hidden">
      <div className="neon-line w-full mb-16" />
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto neon-border bg-card/80 rounded-3xl p-8 md:p-12 text-center"
        >
          <div className="flex flex-col items-center gap-6">
            <CreditCard className="w-12 h-12 text-primary" />
            <h2 className="text-3xl md:text-4xl font-display font-bold">Payment <span className="text-gradient">Methods</span></h2>
            
            <p className="font-arabic text-xl md:text-2xl text-foreground font-bold leading-relaxed max-w-2xl">
              والتحويل اورانج كاش او انستا باي رقمي 01226249344 وابعت اسكرين
            </p>
            
            <div className="flex gap-4 items-center justify-center flex-wrap">
              {["Orange Cash", "InstaPay"].map((method, i) => (
                <span key={i} className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-display tracking-wider uppercase">
                  {method}
                </span>
              ))}
            </div>
            
            <a
              href="https://wa.me/201226249344"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-8 py-4 font-arabic text-lg tracking-wider bg-primary text-primary-foreground rounded-xl hover:scale-105 transition-all duration-300 shadow-neon"
            >
              ابعت سكرين التحويل هنا
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PaymentSection;
