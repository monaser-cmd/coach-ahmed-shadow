import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Packages = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <section className="section-padding pt-32 text-center">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">
            <span className="text-gradient glow-text">PACKAGES</span>
          </h1>
          <div className="glass-panel p-8 rounded-2xl neon-border max-w-3xl mx-auto">
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Choose the package that fits your goals and let's start your journey today.
              I offer specialized coaching for all levels of fitness and experience.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Packages;
