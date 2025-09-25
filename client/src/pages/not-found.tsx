import { motion } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SEO from "@/components/seo";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20 text-foreground">
      {/* 404 meta with neutral indexing */}
      <SEO
        page="home"
        titleOverride="Page Not Found | Trader Corners"
        descriptionOverride="Sorry, this page doesn’t exist. Explore platforms, account types, tools, and more."
        pathOverride="/404"
      />
      <Header />
      <main className="container mx-auto px-6 py-28 md:py-32 flex-1">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-semibold text-primary backdrop-blur-sm mb-6">
            404 – Page Not Found
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4">We couldn't find that page</h1>
          <p className="text-muted-foreground mb-8">
            The link may be broken or the page may have been moved. Try one of these helpful links:
          </p>

          <div className="grid gap-3 sm:grid-cols-2 max-w-xl mx-auto text-left">
            <a href="/" className="group p-4 rounded-xl border border-border/50 hover:border-primary/40 bg-card/50 hover:bg-card/70 transition-all">
              <div className="font-semibold">Home</div>
              <div className="text-sm text-muted-foreground">Start from our homepage</div>
            </a>
            <a href="/platforms" className="group p-4 rounded-xl border border-border/50 hover:border-primary/40 bg-card/50 hover:bg-card/70 transition-all">
              <div className="font-semibold">Platforms</div>
              <div className="text-sm text-muted-foreground">MT5, WebTrader and Mobile Apps</div>
            </a>
            <a href="/accounts" className="group p-4 rounded-xl border border-border/50 hover:border-primary/40 bg-card/50 hover:bg-card/70 transition-all">
              <div className="font-semibold">Account Types</div>
              <div className="text-sm text-muted-foreground">Basic, Premium, Institutional</div>
            </a>
            <a href="/economic-calendar" className="group p-4 rounded-xl border border-border/50 hover:border-primary/40 bg-card/50 hover:bg-card/70 transition-all">
              <div className="font-semibold">Economic Calendar</div>
              <div className="text-sm text-muted-foreground">Track key global events</div>
            </a>
            <a href="/fx-calculator" className="group p-4 rounded-xl border border-border/50 hover:border-primary/40 bg-card/50 hover:bg-card/70 transition-all">
              <div className="font-semibold">FX Calculator</div>
              <div className="text-sm text-muted-foreground">Pip value, margin and risk</div>
            </a>
            <a href="/about" className="group p-4 rounded-xl border border-border/50 hover:border-primary/40 bg-card/50 hover:bg-card/70 transition-all">
              <div className="font-semibold">About</div>
              <div className="text-sm text-muted-foreground">Learn about Trader Corners</div>
            </a>
          </div>

          <div className="mt-10">
            <a
              href="https://my.tradercorners.com/en/register/account-types"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Open an Account
            </a>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
