import Header from "@/components/header";
import Footer from "@/components/footer";
import RelatedMarkets from "@/components/related-markets";
import MarketLayout from "@/components/market-layout";
import { QuotesProvider } from "@/providers/QuotesProvider";

export default function MarketsStocks() {
  return (
    <QuotesProvider>
    <div className="min-h-screen flex flex-col">
      <Header />
      <MarketLayout
        title="Stock Markets"
        description="Trade global equities and indices with competitive commissions, fast execution and powerful tools. Access US, EU and APAC shares and major indices."
        highlights={[
          {
            title: "What You Get",
            items: (
              <ul className="list-disc list-inside space-y-1">
                <li>Wide symbol coverage and corporate actions</li>
                <li>Pre/after-market trading on select venues</li>
                <li>Advanced order types and risk controls</li>
              </ul>
            )
          },
          { title: "Costs", items: <p>Commission per share or % of notional; exchange/regulatory fees may apply.</p> },
          { title: "Sessions", items: <p>Regular hours by exchange; extended hours for select US equities.</p> }
        ]}
        details={[
          {
            title: "Drivers",
            items: (
              <ul className="list-disc list-inside">
                <li>Earnings, guidance and corporate news</li>
                <li>Macro data, rates and sector rotation</li>
                <li>Liquidity and market microstructure</li>
              </ul>
            )
          },
          {
            title: "Common Strategies",
            items: (
              <ul className="list-disc list-inside">
                <li>Trend and breakout trading</li>
                <li>Earnings momentum and gap plays</li>
                <li>Index ETFs for diversified exposure</li>
              </ul>
            )
          }
        ]}
        // Show popular US stocks and major indices
        related={<RelatedMarkets title="Trending Stocks & Indices" group="forex" symbols={["AAPL","MSFT","NVDA","AMZN","TSLA","^GSPC","^NDX","^DJI"]} />}
      />
      <Footer />
    </div>
    </QuotesProvider>
  );
}
