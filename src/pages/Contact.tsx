import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const Contact = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <section className="section-padding pt-32">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">
            <span className="text-gradient glow-text">CONTACT</span>
          </h1>
          <ContactSection />
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Contact;
