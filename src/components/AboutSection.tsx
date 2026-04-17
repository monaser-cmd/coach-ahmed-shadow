import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import coachImg from "@/assets/coach-portrait-2.jpeg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="neon-line w-full mb-16" />
      <div ref={ref} className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="relative rounded-2xl overflow-hidden neon-border max-w-md">
            <img
              src={coachImg}
              alt="Coach Ahmed Shadow"
              loading="lazy"
              width={800}
              height={1024}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-body text-sm tracking-[0.2em] text-primary uppercase mb-3">About me</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Online <span className="text-gradient">Coach</span>
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg">
            I'm Ahmed Shady I've been in bodybuilding for some years now I have experience and I participated in tournaments let me help you I've helped a lot of people before you can see the transformations in my clients
          </p>
          <a
            href="#contact"
            className="inline-flex items-center mt-8 px-6 py-3 font-display text-sm tracking-wider bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
