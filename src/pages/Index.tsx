import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import PortfolioSection from "@/components/PortfolioSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import ExitPopup from "@/components/ExitPopup";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const popupTimer = setTimeout(() => {
      if (!hasShownPopup) {
        setShowExitPopup(true);
        setHasShownPopup(true);
      }
    }, 150000);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(popupTimer);
    };
  }, [hasShownPopup]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation isScrolled={isScrolled} />
      <HeroSection />
      <ProblemSolutionSection />
      <PortfolioSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactFormSection />
      <Footer />
      <FloatingButton />
      <ExitPopup open={showExitPopup} onOpenChange={setShowExitPopup} />
    </div>
  );
};

export default Index;