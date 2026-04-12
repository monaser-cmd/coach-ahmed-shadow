import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Transformations = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <section className="section-padding pt-32">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 text-right">
            <span className="text-gradient glow-text">TRANSFORMATIONS</span>
          </h1>
          <div className="glass-panel p-8 rounded-2xl neon-border max-w-3xl ml-auto">
            <p className="font-body text-lg text-muted-foreground leading-relaxed text-right">
              Explore the results of hard work and consistency.
              Witness the incredible physical and mental transformations achieved by my clients.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Transformations;
