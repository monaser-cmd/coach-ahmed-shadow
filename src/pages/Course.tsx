import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import courseVideo from "@/assets/Course intro/course intro.mp4";

const Course = () => {
  const [whatsappUrl, setWhatsappUrl] = useState("https://wa.me/yournumber");

  useEffect(() => {
    const fetchSettings = async () => {
      const { data } = await supabase.from("site_settings").select("*").eq("key", "whatsapp").single();
      if (data) setWhatsappUrl(data.value);
    };
    fetchSettings();
  }, []);

  return (
    <main className="bg-[#050505] min-h-screen pt-24 font-arabic" dir="rtl">
      <Navbar />
      
      {/* 1. Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4 text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#26bcc4]/10 text-[#26bcc4] text-sm font-medium mb-6 border border-[#26bcc4]/20">
            كورس تغذية احترافي
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            تعلّم تصميم أنظمة غذائية فعلية وابدأ كـ <span className="text-[#26bcc4]">Nutrition Coach</span> محترف من الصفر
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            مش بس هتعرف "إيه"… هتعرف "إزاي تتصرف مع أي حالة"
          </p>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-[#26bcc4] text-black font-bold rounded-xl shadow-[0_0_20px_rgba(38,188,196,0.3)] hover:scale-105 transition-transform"
          >
            احجز الكورس الآن
          </a>
        </motion.div>
      </section>

      {/* 2. Video Section */}
      <section className="py-10 container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto rounded-3xl overflow-hidden border-2 border-[#26bcc4]/30 shadow-[0_0_30px_rgba(38,188,196,0.1)]"
        >
          <video 
            src={courseVideo} 
            controls 
            className="w-full aspect-video object-cover"
          />
        </motion.div>
      </section>

      {/* 3. Problem Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-red-500 font-medium tracking-[0.2em] uppercase mb-2">المشكلة</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">ليه معظم الناس بتفشل في مجال التغذية؟</h2>
            <div className="h-1 w-20 bg-red-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "بتدي أنظمة غذائية عشوائية ومش بتجيب نتائج",
              "مش فاهم السعرات والماكروز بشكل عملي، بس حافظهم",
              "عملائك بيشتكوا من ثبات الوزن ومش عارف تعمل إيه",
              "تايه بين الأنظمة (كيتو – لو كارب – كارب سايكل) ومش عارف تختار الصح",
              "مش واثق في نفسك ككوتش لأنك مش فاهم 'ليه' كل حاجة"
            ].map((point, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, borderColor: "rgba(239, 68, 68, 0.4)" }}
                className="p-6 rounded-2xl bg-[#050505] border border-red-500/10 transition-all group"
              >
                <p className="text-gray-300 text-lg flex gap-3 leading-relaxed text-right">
                  <span className="text-red-500 font-bold shrink-0">✕</span> {point}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 max-w-3xl mx-auto p-8 rounded-2xl bg-[#26bcc4]/5 border-r-4 border-[#26bcc4] text-center"
          >
            <p className="text-white text-xl font-medium leading-relaxed">
              المشكلة مش إنك مش بتحاول كفاية… المشكلة إنك ما اتعلمتش النظام الصح اللي يخليك تتصرف بثقة مع أي حالة
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. Modules Section */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#26bcc4] font-medium tracking-[0.2em] uppercase mb-2">محتوى الكورس</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">من الأساسيات للمستوى الاحترافي</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "حساب السعرات والماكروز", body: "بدقة وبشكل عملي حسب هدف كل عميل" },
            { title: "تصميم نظام غذائي كامل", body: "من الصفر لأي حالة — تخسيس أو تضخيم أو صيانة" },
            { title: "المياه والملح والفيتامينات", body: "احتياجات الجسم الفعلية واللي بيغفل عنها الكوتشيز" },
            { title: "المستوى المتقدم", body: "كيتو، PSMF، Carb Cycling، Refeed — بالتطبيق" },
            { title: "مقاومة الإنسولين", body: "تفهمها وتتعامل معاها احترافياً" },
            { title: "ثبات الوزن", body: "السبب الحقيقي وإزاي تكسره لعملائك" }
          ].map((m, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, borderColor: "rgba(38, 188, 196, 0.4)" }}
              className="p-8 rounded-3xl bg-[#0a0a0a] border border-[#26bcc4]/10 hover:shadow-[0_0_20px_rgba(38,188,196,0.05)] transition-all group"
            >
              <h3 className="text-xl font-bold text-[#26bcc4] mb-4 transition-all">{m.title}</h3>
              <p className="text-gray-400 leading-relaxed text-lg text-right">{m.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Result Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#26bcc4] font-medium tracking-[0.2em] uppercase mb-2">النتيجة</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">إيه اللي هيتغير بعد الكورس؟</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-3xl bg-[#050505] border border-gray-800 text-center relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 blur-3xl -z-10" />
              <span className="text-5xl font-bold text-gray-700 block mb-6">قبل</span>
              <p className="text-gray-400 text-xl leading-relaxed">بتجرب وبتغلط وعملائك مش واثقين فيك</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-3xl bg-[#050505] border border-[#26bcc4]/30 text-center relative overflow-hidden group shadow-[0_0_30px_rgba(38,188,196,0.05)]"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#26bcc4]/10 blur-3xl -z-10" />
              <span className="text-5xl font-bold text-[#26bcc4] block mb-6 glow-cyan">بعد</span>
              <p className="text-white text-xl leading-relaxed">فاهم ليه كل قرار وبتصمم بثقة وعملائك بيجيبوا نتائج</p>
            </motion.div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "بتصمم أنظمة غذائية مخصوصة مش copy-paste",
                "قادر تتعامل مع الحالات الصعبة (ثبات وزن، مقاومة إنسولين)",
                "عندك خدمة إضافية تزود بيها دخلك لو مدرب أصلاً",
                "واثق في نفسك ومش بتتهاود في أسعارك"
              ].map((item, i) => (
                <motion.div 
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-[#050505] border border-[#26bcc4]/5 text-right"
                >
                  <div className="w-6 h-6 rounded-full bg-[#26bcc4]/20 flex items-center justify-center shrink-0">
                    <span className="text-[#26bcc4] text-xs">✓</span>
                  </div>
                  <span className="text-gray-300 text-lg">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. For Who Section */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">لمين الكورس ده؟</h2>
          <p className="text-gray-400 text-lg">الكورس ده مناسب ليك لو...</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {[
            "عايز تبدأ شغل كـ Nutrition Coach وعايز تبدأ صح من أول يوم",
            "مدرب شخصي وعايز تزود دخلك بإضافة خدمة التغذية",
            "مهتم بتغذيتك الشخصية وعايز تفهم جسمك صح",
            "جربت قبل كده وفشلت وعايز تبدأ على أساس صح"
          ].map((text, i) => (
            <motion.div 
              key={text}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 flex items-center gap-4 group hover:bg-[#26bcc4]/5 hover:border-[#26bcc4]/20 transition-all text-right"
            >
              <div className="w-2 h-2 rounded-full bg-[#26bcc4] shrink-0" />
              <p className="text-gray-300 text-lg">{text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto p-8 rounded-3xl bg-red-500/5 border border-red-500/20 text-center"
        >
          <p className="text-red-400 text-lg leading-relaxed">
            مش مناسب لو بتدور على كورس "نظري بحت" من غير تطبيق — ده كورس عملي، هتطلع منه تشتغل مباشرة
          </p>
        </motion.div>
      </section>

      {/* 7. Certification Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#26bcc4] font-medium tracking-[0.2em] uppercase mb-2">الشهادة</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">مش بس كورس — دليل على مستواك</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "امتحان تقييمي", sub: "بعد إنهاء الكورس" },
              { title: "شهادة إتمام", sub: "تثبت مستواك الاحترافي" },
              { title: "تطبيق عملي", sub: "مش حفظ — فهم وتصرف" }
            ].map((item, i) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-3xl bg-[#050505] border border-white/5 text-center group hover:border-[#26bcc4]/20 transition-all"
              >
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#26bcc4] transition-colors">{item.title}</h3>
                <p className="text-gray-400">{item.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#26bcc4]/5 blur-[120px] rounded-full -z-10" />
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FAEEDA]/10 text-[#FAEEDA] text-sm font-medium mb-8 border border-[#FAEEDA]/20">
              الأماكن محدودة — الدفعة بتتقفل بعد اكتمال العدد
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              ابدأ رحلتك الآن وكن من <span className="text-gradient">قصص النجاح</span> القادمة
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto text-right md:text-center">
              بدل ما تشتري كورسات تغذية متفرقة وتتوه في المعلومات — كل حاجة هنا متكاملة ومرتبة من الصفر للاحتراف
            </p>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-5 bg-[#26bcc4] text-black font-bold text-xl rounded-2xl shadow-[0_0_40px_rgba(38,188,196,0.3)] hover:scale-105 transition-all"
            >
              احجز مكانك الآن ←
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Course;
