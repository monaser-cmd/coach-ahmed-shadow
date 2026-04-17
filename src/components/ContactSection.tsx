import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { supabase } from "@/lib/supabase";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [whatsappUrl, setWhatsappUrl] = useState("https://wa.me/");

  useEffect(() => {
    const fetchSettings = async () => {
      const { data } = await supabase.from("site_settings").select("*").eq("key", "whatsapp").single();
      if (data) {
        const pureNumber = data.value.replace(/\D/g, '');
        setWhatsappUrl(`https://wa.me/${pureNumber}`);
      }
    };
    fetchSettings();
  }, []);

  return (
    <section id="contact" className="section-padding relative">
      <div className="neon-line w-full mb-16" />
      <div className="container mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-sm tracking-[0.2em] text-primary uppercase mb-3">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Shadow</span>
          </h2>
          <p className="font-display text-xl text-muted-foreground mb-10">Online Coach</p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground font-display text-base tracking-wider rounded-lg hover:opacity-90 transition-all animate-pulse-glow"
          >
            <MessageCircle className="w-5 h-5" />
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

