import { useEffect } from "react";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import MarketsSection from "@/components/markets-section";

import PlatformsSection from "@/components/platforms-section";
import AccountsSection from "@/components/accounts-section";
import EducationSection from "@/components/education-section";
import SecuritySection from "@/components/security-section";
import MobileAppSection from "@/components/mobile-app-section";
import FAQSection from "@/components/faq-section";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -150px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".scroll-reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Floating Background Elements */}
      <div className="floating-element w-32 h-32 top-20 left-10" style={{ animationDelay: "0s" }} />
      <div className="floating-element w-24 h-24 top-1/2 right-20" style={{ animationDelay: "2s" }} />
      <div className="floating-element w-40 h-40 bottom-20 left-1/4" style={{ animationDelay: "4s" }} />
      <div className="floating-element w-28 h-28 top-1/3 right-1/3" style={{ animationDelay: "6s" }} />
      <div className="floating-element w-36 h-36 bottom-1/3 right-10" style={{ animationDelay: "8s" }} />
      
      <Header />
      <HeroSection />
      <FeaturesSection />
      <MarketsSection />
      <PlatformsSection />
      <AccountsSection />
      <EducationSection />
      <SecuritySection />
      <MobileAppSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
