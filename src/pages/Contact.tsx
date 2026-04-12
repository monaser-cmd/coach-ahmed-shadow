import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { MessageCircle, Mail, Instagram, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Transmission Received",
      description: "Establishing secure link. We'll respond shortly.",
    });
  };

  return (
    <main className="bg-transparent min-h-screen pt-24">
      <Navbar />
      
      <section className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <h1 className="text-5xl md:text-8xl font-display font-bold mb-4">
                <span className="text-gradient glow-text uppercase tracking-tighter">Connect</span>
              </h1>
              <p className="text-primary/70 font-display tracking-[0.3em] uppercase">Ready for deployment?</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <ContactInfoCard 
                icon={<MessageCircle className="w-6 h-6" />}
                title="WhatsApp"
                value="+20 123 456 7890"
                link="https://wa.me/"
              />
              <ContactInfoCard 
                icon={<Instagram className="w-6 h-6" />}
                title="Instagram"
                value="@ahmedshady10"
                link="https://instagram.com/"
              />
              <ContactInfoCard 
                icon={<Mail className="w-6 h-6" />}
                title="Email"
                value="coach@ahmedshadow.com"
                link="mailto:coach@ahmedshadow.com"
              />
              <ContactInfoCard 
                icon={<MapPin className="w-6 h-6" />}
                title="Base"
                value="Cairo, Egypt"
              />
            </div>

            <div className="glass-panel p-6 rounded-2xl neon-border border-primary/20">
              <p className="font-body text-muted-foreground italic">
                "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it."
              </p>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="sticky top-32"
          >
            <div className="glass-panel p-8 rounded-3xl neon-border bg-background/20 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[80px] -mr-16 -mt-16" />
              
              <h2 className="text-3xl font-display font-bold mb-8 text-gradient uppercase tracking-widest text-center">Inquiry Terminal</h2>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-primary/70 font-display ml-1">Full Name</label>
                  <Input 
                    placeholder="IDENTIFY YOURSELF" 
                    className="bg-background/40 border-primary/20 focus:border-primary transition-all rounded-xl h-14 font-display text-sm tracking-widest placeholder:text-muted-foreground/30"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-primary/70 font-display ml-1">Email Address</label>
                  <Input 
                    type="email" 
                    placeholder="COMMUNICATION FREQUENCY" 
                    className="bg-background/40 border-primary/20 focus:border-primary transition-all rounded-xl h-14 font-display text-sm tracking-widest placeholder:text-muted-foreground/30"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-primary/70 font-display ml-1">Objective</label>
                  <Textarea 
                    placeholder="DEFINE YOUR GOALS..." 
                    className="bg-background/40 border-primary/20 focus:border-primary transition-all rounded-xl min-h-[120px] font-display text-sm tracking-widest placeholder:text-muted-foreground/30"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full h-16 bg-primary text-primary-foreground font-display tracking-[0.4em] text-lg hover:shadow-[0_0_30px_rgba(255,0,0,0.5)] transition-all animate-pulse-glow border-none"
                >
                  TRANSMIT
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

const ContactInfoCard = ({ icon, title, value, link }: any) => {
  const CardContent = (
    <div className="glass-panel p-6 rounded-2xl neon-border border-primary/10 hover:border-primary/40 transition-all group">
      <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1 font-display">{title}</p>
      <p className="font-display text-sm tracking-wider">{value}</p>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        {CardContent}
      </a>
    );
  }

  return CardContent;
};

export default Contact;
