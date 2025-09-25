import { Link } from "wouter";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Markets() {
  const cards = [
    { href: "/markets/forex", title: "Forex Trading", desc: "Trade major, minor and exotic FX pairs with tight spreads and deep liquidity." },
    { href: "/markets/crypto", title: "Cryptocurrency", desc: "Access leading crypto pairs with 24/7 pricing and robust risk controls." },
    { href: "/markets/stocks", title: "Stock Markets", desc: "Go long or short global shares and indices with competitive commissions." },
    { href: "/markets/commodities", title: "Commodities", desc: "Trade energy, metals and softs with transparent pricing and reliable execution." },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20 text-foreground">
      <Header />
      <main className="container mx-auto px-6 py-28 md:py-32 flex-1">
        <section className="mb-10 md:mb-14">
          <div className="rounded-3xl border border-border/50 bg-card/60 backdrop-blur-xl p-8 md:p-12">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Markets</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Explore the asset classes available on TraderCorners. Learn key characteristics, trading sessions, common strategies, and typical costs before you place your first trade.
            </p>
          </div>
        </section>
        <section>
          <div className="grid gap-5 md:grid-cols-2">
            {cards.map((c) => (
              <Link key={c.href} href={c.href} className="block group">
                <div className="h-full rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm p-6 md:p-8 hover:border-primary/40 hover:bg-card/60 transition-colors">
                  <h2 className="font-display text-2xl md:text-3xl font-semibold mb-2 group-hover:text-foreground">
                    {c.title}
                  </h2>
                  <p className="text-muted-foreground">{c.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
