import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import coachImg from "@/assets/coach-portrait-2.jpeg";

const About = () => {
  return (
    <main className="bg-transparent min-h-screen pt-24">
      <Navbar />
      
      <section className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold">
              <span className="text-gradient glow-text uppercase tracking-tighter">Ahmed Shady</span>
            </h1>
            
            <div className="glass-panel p-8 rounded-2xl neon-border relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary/50 group-hover:bg-primary transition-colors duration-500" />
              <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
                I'm Ahmed Shady. I've been in bodybuilding for some years now. I have experience and I participated in tournaments.
                Let me help you achieve your fitness goals. I've helped a lot of people before, and you can see the transformations in my clients.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl neon-border relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary/50 group-hover:bg-primary transition-colors duration-500" />
              <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
                My mission is to help you achieve the transformation you've always dreamed of through science-based training and nutrition.
                Whether you're looking to compete or just want to feel better in your own skin, I'm here to guide you every step of the way.
              </p>
            </div>
          </motion.div>

          {/* Photo Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden neon-border shadow-[0_0_50px_rgba(255,0,0,0.2)]">
              <img
                src={coachImg}
                alt="Coach Ahmed Shady"
                className="w-full h-auto object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
