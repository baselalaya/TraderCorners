import Header from "@/components/header";
import Footer from "@/components/footer";
import RelatedMarkets from "@/components/related-markets";
import MarketLayout from "@/components/market-layout";
import { QuotesProvider } from "@/providers/QuotesProvider";

export default function MarketsCommodities() {
  return (
    <QuotesProvider>
    <div className="min-h-screen flex flex-col">
      <Header />
      <MarketLayout
        title="Commodities"
        description="Trade energies, metals and agricultural commodities with transparent pricing and reliable execution. Access Gold, WTI Crude, Brent and Silver with professional-grade tools."
        highlights={[
          { title: "Sectors", items: <p>Precious metals, energy, and soft commodities.</p> },
          { title: "Costs", items: <p>Variable spreads plus overnight financing where applicable.</p> },
          { title: "Volatility", items: <p>Driven by supply/demand, geopolitics and macro data.</p> }
        ]}
        details={[
          {
            title: "Market Drivers",
            items: (
              <ul className="list-disc list-inside">
                <li>Inventory reports and OPEC decisions</li>
                <li>USD strength and real rates for metals</li>
                <li>Weather and seasonality for softs</li>
              </ul>
            )
          },
          {
            title: "Trading Approaches",
            items: (
              <ul className="list-disc list-inside">
                <li>Trend following on energy products</li>
                <li>Mean reversion on range-bound metals</li>
                <li>Event-driven around inventories</li>
              </ul>
            )
          }
        ]}
        related={<RelatedMarkets title="Related Commodities" group="commodities" symbols={["GOLD","SILVER","CRUDE OIL"]} />}
      />
      <Footer />
    </div>
    </QuotesProvider>
  );
}
