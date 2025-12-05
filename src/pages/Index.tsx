import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PrivacySection } from "@/components/PrivacySection";
import { HowIWorkSection } from "@/components/HowIWorkSection";
import { WhoIWorkWithSection } from "@/components/WhoIWorkWithSection";
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
        <PrivacySection />
        <HowIWorkSection />
        <WhoIWorkWithSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
