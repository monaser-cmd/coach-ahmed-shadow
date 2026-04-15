import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center max-w-lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-8xl md:text-9xl font-display font-bold mb-4">
            <span className="text-gradient glow-text">404</span>
          </h1>
          <p className="text-2xl md:text-3xl font-display text-foreground mb-4 uppercase tracking-widest">
            Signal Lost
          </p>
          <div className="w-16 h-1 bg-primary mx-auto mb-8 neon-line" />
          <p className="text-muted-foreground font-body text-lg mb-10 leading-relaxed">
            The coordinates you've entered lead to the void. Retreat to the main terminal to re-establish your connection.
          </p>
          <Button 
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-display tracking-[0.2em] px-8 h-14 rounded-xl shadow-[0_0_20px_rgba(255,0,0,0.3)]"
          >
            <a href="/">RE-ESTABLISH CONNECTION</a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
