import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Hero Banner
import banner from "@/assets/champs-intro.jpg";

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

      {/* Authority Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-panel p-8 md:p-16 rounded-3xl text-center max-w-5xl mx-auto border border-primary/10 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full -z-10" />
            
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 text-gradient uppercase tracking-tighter">
              مش أي حد يقدر يوصلك للبطولات
            </h2>
            
            <div className="space-y-6 font-arabic text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              <p>
                الفرق مش في التمرين بس<br />
                الفرق في النظام… في التوجيه… في التفاصيل اللي محدش بيشوفها
              </p>
              
              <p className="text-primary font-bold text-xl md:text-2xl">
                النظام الصح + الالتزام = نتيجة حقيقية
              </p>
              
              <p>
                هنا بنشتغل بهدف واحد<br />
                إنك تنافس… وتكسب
              </p>
              
              <p>
                مش بنجهزك تتمرن<br />
                بنجهزك تقف قدام لجنة تحكيم… وتكون جاهز
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section (Gallery) */}
      <section id="results" className="py-24 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-4">
            <span className="text-gradient glow-text uppercase">شوف النتائج بنفسك</span>
          </h2>
          <div className="space-y-2 font-arabic text-lg md:text-xl text-muted-foreground tracking-widest max-w-3xl mx-auto">
            <p>كل صورة هنا وراها قصة</p>
            <p>تعب يومي | التزام صارم | ونظام معمول مخصوص علشان يوصل للستيدج</p>
            <p className="pt-4">مفيش تجميل… مفيش وعود فاضية… فيه شغل ونتيجة واضحة قدامك</p>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {champions.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
              viewport={{ once: true }}
              className="group relative cursor-pointer"
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative overflow-hidden rounded-2xl neon-border aspect-[1040/1350] bg-card">
                    <img
                      src={src}
                      alt="بطل حصل على ميدالية"
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <span className="font-display text-xs tracking-[0.3em] bg-primary/80 px-6 py-3 rounded-full text-white shadow-neon-sm border border-white/10">
                        VIEW CHAMP
                      </span>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
                  <img
                    src={src}
                    alt="بطل حصل على ميدالية"
                    className="w-full h-auto rounded-lg shadow-2xl border border-white/10"
                  />
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Emotional Hook Section */}
      <section className="py-24 bg-[#050505] relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-12 text-gradient leading-tight">
              لو حلمك تقف على المسرح…<br />
              لو نفسك تمسك ميدالية بإيدك
            </h2>
            <p className="font-arabic text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
              لو عايز تبص لنفسك وتقول أنا عملتها… يبقى انت في المكان الصح
            </p>
            <div className="h-px w-24 bg-primary mx-auto mb-8" />
            <p className="font-arabic text-2xl md:text-3xl text-primary font-bold">
              السؤال مش هل تقدر… السؤال: هتبدأ إمتى؟
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-8 md:p-12 rounded-3xl text-center max-w-4xl mx-auto border border-white/5"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 text-gradient">
            النتائج دي مش صدفة
          </h2>
          <div className="space-y-6 font-arabic text-lg md:text-xl text-muted-foreground">
            <p>
              دي خبرة سنين… متابعة مستمرة… وتعديل في كل تفصيلة لحد ما توصل لأفضل نسخة منك
            </p>
            <p>
              كل بطل شفته فوق كان في يوم من الأيام لسه بيبدأ
            </p>
            <p className="text-foreground font-bold">
              والفرق الوحيد إنه قرر يكمل
            </p>
          </div>
        </motion.div>
      </section>

      {/* Claim Your Legacy (CTA) */}
      <section className="py-32 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel py-20 px-8 rounded-3xl border border-primary/20 bg-primary/5 text-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full -z-10 transition-transform duration-1000 group-hover:scale-110" />
          
          <h2 className="text-4xl md:text-7xl font-display font-bold mb-8">
            دورك جاي… <span className="text-gradient glow-text">جاهز تبدأ؟</span>
          </h2>
          
          <p className="font-arabic text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            متستناش الوقت المثالي… مفيش وقت مثالي<br />
            فيه قرار… وإنت تاخده دلوقتي
          </p>
          
          <a
            href="https://www.easykash.net/Ahmed%20Shadoow/pay"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 font-arabic text-xl tracking-wider bg-primary text-primary-foreground rounded-xl hover:scale-105 transition-all duration-300 shadow-neon uppercase"
          >
            اشترك الآن وابدأ رحلتك
          </a>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
};

export default HallOfFame;
