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

    let timeoutId: NodeJS.Timeout;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShownPopup && window.scrollY > 100) {
        timeoutId = setTimeout(() => {
          setShowExitPopup(true);
          setHasShownPopup(true);
        }, 300);
      }
    };

    const handleMouseEnter = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
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