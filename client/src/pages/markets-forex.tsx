import Header from "@/components/header";
import Footer from "@/components/footer";
import RelatedMarkets from "@/components/related-markets";
import MarketLayout from "@/components/market-layout";

export default function MarketsForex() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <MarketLayout
        title="Forex Trading"
        description="Trade the global foreign exchange market with tight spreads, fast execution and access to major, minor and exotic currency pairs. The FX market runs 24/5 across Sydney, Tokyo, London and New York sessions."
        highlights={[
          {
            title: "Why Trade Forex",
            items: (
              <ul className="list-disc list-inside space-y-1">
                <li>Deep liquidity and tight spreads</li>
                <li>Responsible leverage and risk tools</li>
                <li>24/5 market across sessions</li>
              </ul>
            )
          },
          { title: "Popular Pairs", items: <p>EUR/USD, GBP/USD, USD/JPY, AUD/USD, USD/CHF</p> },
          { title: "Typical Costs", items: <p>Variable spreads from 0.x pips; overnight swap may apply.</p> }
        ]}
        details={[
          {
            title: "Key Considerations",
            items: (
              <ul className="list-disc list-inside">
                <li>Rate decisions, CPI, NFP impact FX</li>
                <li>Session overlaps increase volatility</li>
                <li>Use stops and proper position sizing</li>
              </ul>
            )
          },
          {
            title: "Strategies",
            items: (
              <ul className="list-disc list-inside">
                <li>Trend following on majors</li>
                <li>Range trading in quieter hours</li>
                <li>Event-driven macro releases</li>
              </ul>
            )
          }
        ]}
        related={<RelatedMarkets title="Related Forex Pairs" group="forex" symbols={["EUR/USD","GBP/USD","USD/JPY","AUD/USD"]} />}
      />
      <Footer />
    </div>
  );
}
