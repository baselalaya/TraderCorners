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
import InteractiveCursor from "@/components/interactive-cursor";
import ScrollProgress from "@/components/scroll-progress";

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

      
      <ScrollProgress />
      <InteractiveCursor />
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
