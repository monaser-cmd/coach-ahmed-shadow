import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Info } from "lucide-react";

const NotesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const notes = [
    "1️⃣بتبعت صورة تحويل اشتراكك فببعتلك استمارة تكمل بياناتك من وزن وصور ومقاسات و بنبداء ع طول رجاء الالتزام وعدم المجادلة ف الانظمة + بعد التزامك بنزل صور التحول بتاعتك قبل وبعد الفورمة ضمن شغلي ولو ليك رغبه تنزل بدون وجهك مفيش مشاكل",
    "2️⃣لا يوجد استرداد الاشتراك تحت اي ظرف او ايقاف متابعة مؤقت الاشتراك للجادين فقط وتم تبليغك عشان لو مش مناسبك ممنوع منعا باتا اظهار اي اعذار او ظروف في مسألة الاسترداد ومش باخد حق انظمة وابعت باق"
  ];

  return (
    <section id="notes" className="section-padding relative">
      <div className="neon-line w-full mb-16" />
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-10">
            <Info className="w-8 h-8 text-primary animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-display font-bold">Important <span className="text-gradient">Notes</span></h2>
          </div>

          <div className="glass-panel p-8 md:p-12 rounded-3xl border border-primary/10 space-y-8">
            <p className="font-arabic text-3xl font-bold text-center text-primary mb-8">☣️ :-</p>
            
            {notes.map((note, index) => (
              <div key={index} className="flex gap-4 p-6 rounded-2xl bg-primary/5 border border-primary/10 text-right">
                <p className="font-arabic text-lg md:text-xl text-foreground/90 leading-relaxed flex-1">
                  {note}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NotesSection;
