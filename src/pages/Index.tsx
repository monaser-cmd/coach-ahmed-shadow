import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TransformationsSection from "@/components/TransformationsSection";
import PackagesSection from "@/components/PackagesSection";
import InternationalPricingSection from "@/components/InternationalPricingSection";
import NotesSection from "@/components/NotesSection";
import PaymentSection from "@/components/PaymentSection";
import BookSection from "@/components/BookSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <main className="bg-transparent min-h-screen">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <PackagesSection />
    <InternationalPricingSection />
    <TransformationsSection />
    <NotesSection />
    <PaymentSection />
    <BookSection />
    <ContactSection />
    <Footer />
  </main>
);

export default Index;
