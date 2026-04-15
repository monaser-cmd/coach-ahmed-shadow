import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Hero Banner
import banner from "@/assets/images/Champs and Medals/champ-banner.webp";

// Champion Images
import c1 from "@/assets/images/Champs and Medals/Champ-1.webp";
import c2 from "@/assets/images/Champs and Medals/Champ-2.webp";
import c3 from "@/assets/images/Champs and Medals/Champ-3.webp";
import c4 from "@/assets/images/Champs and Medals/Champ-4.webp";
import c5 from "@/assets/images/Champs and Medals/Champ-5.webp";
import c6 from "@/assets/images/Champs and Medals/Champ-6.webp";
import c7 from "@/assets/images/Champs and Medals/Champ-7.webp";
import c8 from "@/assets/images/Champs and Medals/Champ-8.webp";
import c9 from "@/assets/images/Champs and Medals/Champ-9.webp";
import c10 from "@/assets/images/Champs and Medals/Champ-10.webp";
import c11 from "@/assets/images/Champs and Medals/Champ-11.webp";
import c12 from "@/assets/images/Champs and Medals/Champ-12.webp";
import c13 from "@/assets/images/Champs and Medals/Champ-13.webp";
import c14 from "@/assets/images/Champs and Medals/Champ-14.webp";
import c15 from "@/assets/images/Champs and Medals/Champ-15.webp";
import c16 from "@/assets/images/Champs and Medals/Champ-16.webp";
import c17 from "@/assets/images/Champs and Medals/Champ-17.webp";
import c18 from "@/assets/images/Champs and Medals/Champ-18.webp";
import c19 from "@/assets/images/Champs and Medals/Champ-19.webp";
import c20 from "@/assets/images/Champs and Medals/Champ-20.webp";
import c21 from "@/assets/images/Champs and Medals/Champ-21.webp";
import c22 from "@/assets/images/Champs and Medals/Champ-22.webp";
import c23 from "@/assets/images/Champs and Medals/Champ-23.webp";
import c24 from "@/assets/images/Champs and Medals/Champ-24.webp";

const champions = [
  c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, 
  c11, c12, c13, c14, c15, c16, c17, c18, 
  c19, c20, c21, c22, c23, c24
];

const HallOfFame = () => {
  return (
    <main className="bg-[#050505] min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Background Layer */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img 
            src={banner} 
            className="w-full h-full object-cover" 
            alt="Champions Background" 
          />
          <div className="absolute inset-0 z-20">
            <Canvas
              camera={{ position: [0, 0, 8], fov: 60 }}
              gl={{ antialias: true, alpha: true }}
              style={{ background: "transparent" }}
            >
              <ambientLight intensity={0.1} />
              <pointLight position={[5, 5, 5]} color="#ff3333" intensity={2} />
              <ParticleField count={800} />
            </Canvas>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-[#050505] z-30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-40 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-6"
          >
            مش مجرد تدريب… <span className="text-gradient glow-text">دي صناعة أبطال</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-arabic text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            هنا مفيش لعب<br />
            هنا بنحول المجهود لبطولات… وبنصنع فرق حقيقية على أرض الواقع
            <br /><br />
            أبطال حقيقيين بدأوا من الصفر<br />
            ودلوقتي واقفين على المسرح
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="#results"
              className="inline-flex items-center justify-center px-8 py-4 font-display text-sm tracking-wider bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all animate-pulse-glow"
            >
              ابدأ رحلتك دلوقتي
            </a>
          </motion.div>
        </div>
      </section>

      {/* Placeholder for next sections */}
      <div id="results" />

      <Footer />
    </main>
  );
};

export default HallOfFame;
