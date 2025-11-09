import { useEffect } from "react";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import MarketsSection from "@/components/markets-section";
import MarketPricesSection from "@/components/MarketPricesSection";
import { QuotesProvider } from "@/providers/QuotesProvider";
import AccountTypesSection from "@/components/account-types-section";
import TradingProductsSection from "@/components/trading-products-section";
import FAQSection from "@/components/faq-section";
import Footer from "@/components/footer";
import InteractiveCursor from "@/components/interactive-cursor";
import ScrollProgress from "@/components/scroll-progress";
import SEO from "@/components/seo";

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
      <SEO page="home" />

      
      <ScrollProgress />
      <InteractiveCursor />
      <QuotesProvider>
        <Header />
        <HeroSection />
        {/* <MarketPricesSection /> */}
        {/* <MarketsSection /> */}
        <AccountTypesSection />
        <TradingProductsSection />
        <FAQSection />
        <Footer />
      </QuotesProvider>
    </div>
  );
}
