import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import coachImg from "@/assets/coach-portrait.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const About = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible.",
    });
  };

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

            <div className="relative rounded-2xl overflow-hidden neon-border max-w-md">
              <img
                src={coachImg}
                alt="Coach Ahmed Shady"
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="sticky top-32"
          >
            <div className="glass-panel p-8 rounded-3xl neon-border bg-background/20 backdrop-blur-xl">
              <h2 className="text-3xl font-display font-bold mb-6 text-gradient">START YOUR JOURNEY</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-primary/70 font-display">Full Name</label>
                  <Input 
                    placeholder="Enter your name" 
                    className="bg-background/40 border-primary/20 focus:border-primary transition-all rounded-lg h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-primary/70 font-display">Email Address</label>
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="bg-background/40 border-primary/20 focus:border-primary transition-all rounded-lg h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-primary/70 font-display">Your Goals</label>
                  <Textarea 
                    placeholder="Describe your fitness goals..." 
                    className="bg-background/40 border-primary/20 focus:border-primary transition-all rounded-lg min-h-[120px]"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full h-14 bg-primary text-primary-foreground font-display tracking-widest text-lg hover:shadow-[0_0_20px_rgba(255,0,0,0.5)] transition-all animate-pulse-glow"
                >
                  SEND MESSAGE
                </Button>
              </form>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
