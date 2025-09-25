import Header from "@/components/header";
import Footer from "@/components/footer";
import RelatedMarkets from "@/components/related-markets";
import MarketLayout from "@/components/market-layout";

export default function MarketsCrypto() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <MarketLayout
        title="Cryptocurrency"
        description="Trade leading crypto pairs with 24/7 pricing, institutional-grade connectivity and robust risk controls. Access BTC, ETH and more with transparent pricing and advanced charting."
        highlights={[
          {
            title: "Highlights",
            items: (
              <ul className="list-disc list-inside space-y-1">
                <li>Market open 24/7</li>
                <li>Pairs like BTC/USD, ETH/USD</li>
                <li>Volatility for active strategies</li>
              </ul>
            )
          },
          { title: "Risk Factors", items: <p>High volatility, weekend gaps, funding/financing on leverage.</p> },
          { title: "Common Costs", items: <p>Variable spreads; overnight funding where applicable.</p> }
        ]}
        details={[
          {
            title: "What Moves Crypto",
            items: (
              <ul className="list-disc list-inside">
                <li>On-chain flows and network upgrades</li>
                <li>Regulatory headlines and ETF flows</li>
                <li>Macro liquidity and risk sentiment</li>
              </ul>
            )
          },
          {
            title: "Approaches",
            items: (
              <ul className="list-disc list-inside">
                <li>Momentum on breakouts</li>
                <li>Mean reversion in ranges</li>
                <li>Risk-managed swing trading</li>
              </ul>
            )
          }
        ]}
        related={<RelatedMarkets title="Related Crypto Pairs" group="crypto" symbols={["BTC/USD","ETH/USD"]} />}
      />
      <Footer />
    </div>
  );
}
