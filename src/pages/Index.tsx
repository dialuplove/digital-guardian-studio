import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { HowIWorkSection } from "@/components/HowIWorkSection";
import { ScamDefenseSection } from "@/components/ScamDefenseSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <HowIWorkSection />
        <ScamDefenseSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
