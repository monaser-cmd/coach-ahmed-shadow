import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    <main className="bg-[#050505] min-h-screen pt-24" dir="rtl">
      <Navbar />
      
      {/* Hero Section */}
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

      <Footer />
    </main>
  );
};

export default Course;
