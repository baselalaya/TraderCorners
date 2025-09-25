import { useMemo, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type AccountCurrency = "USD" | "EUR" | "GBP" | "JPY";

const PAIRS = ["EURUSD","GBPUSD","USDJPY","USDCHF","USDCAD","AUDUSD","NZDUSD"] as const;
type Pair = typeof PAIRS[number];

function pipValue(pair: Pair, lotSize: number, account: AccountCurrency, price: number): number {
  // Standard FX pip value approximation for a standard lot = 100k notional
  // For pairs quoted in USD (xxxUSD), pip = 0.0001 * 100000 = $10 per lot
  // For JPY (xxxJPY), pip = 0.01 * 100000 = JPY 1000 per lot -> convert to USD via price if needed
  const isJPY = pair.endsWith("JPY");
  const basePip = isJPY ? 0.01 : 0.0001;
  const notional = 100000 * lotSize; // standardization
  // Pip value in quote currency
  const pipInQuote = basePip * notional;
  // Convert to account currency using simple rules (if needed). For brevity, assume account == USD.
  if (account === "USD") {
    if (pair.endsWith("USD")) return pipInQuote; // already USD
    if (pair === "USDJPY") return pipInQuote / price; // JPY -> USD
    if (pair === "USDCHF") return pipInQuote / price; // CHF -> USD
    if (pair === "USDCAD") return pipInQuote / price; // CAD -> USD
    // pairs like EURUSD return as USD already
  }
  return pipInQuote; // fallback (demo)
}

function marginRequired(lots: number, leverage: number, price: number): number {
  // Margin = Notional / Leverage; Notional ~ 100k * lots in quote-currency terms; simplified using price for base USD pairs
  const notional = 100000 * lots;
  return notional / leverage;
}

function swapCost(lots: number, days: number, pointsPerDay: number): number {
  // Very simplified swap: points per day per lot * days
  return pointsPerDay * days * lots;
}

export default function FxCalculatorPage() {
  const [pair, setPair] = useState<Pair>("EURUSD");
  const [lots, setLots] = useState(1);
  const [leverage, setLeverage] = useState(100);
  const [account, setAccount] = useState<AccountCurrency>("USD");
  const [price, setPrice] = useState(1.085);
  const [stopPips, setStopPips] = useState(20);
  const [takePips, setTakePips] = useState(40);

  const results = useMemo(() => {
    const pv = pipValue(pair, lots, account, price);
    const margin = marginRequired(lots, leverage, price);
    const stopLoss = pv * stopPips;
    const takeProfit = pv * takePips;
    const swapLong = swapCost(lots, 1, -3); // demo constants
    const swapShort = swapCost(lots, 1, 1.5);
    return { pv, margin, stopLoss, takeProfit, swapLong, swapShort };
  }, [pair, lots, leverage, account, price, stopPips, takePips]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20 text-foreground">
      <Header />
      <main className="container mx-auto px-6 py-28 md:py-32 flex-1">
        <section className="mb-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border border-border/50 bg-card/60 backdrop-blur-xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -top-6 -right-6 w-40 h-40 rounded-full bg-primary/10 blur-2xl" />
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">FX Calculator</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">Estimate pip value, margin, and P/L scenarios for popular FX pairs. This tool is for illustration; actual results depend on market conditions.</p>
          </motion.div>
        </section>

        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 bg-card/50 backdrop-blur-xl border border-border/50">
            <CardHeader>
              <CardTitle>Inputs</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-muted-foreground">Symbol</label>
                <Select value={pair} onValueChange={(v) => setPair(v as Pair)}>
                  <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {PAIRS.map(p => <SelectItem key={p} value={p}>{p}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Account Currency</label>
                <Select value={account} onValueChange={(v) => setAccount(v as AccountCurrency)}>
                  <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {["USD","EUR","GBP","JPY"].map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Lots</label>
                <Input type="number" min={0.01} step={0.01} value={lots} onChange={(e) => setLots(Number(e.target.value))} />
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Leverage</label>
                <Input type="number" min={1} step={1} value={leverage} onChange={(e) => setLeverage(Number(e.target.value))} />
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Market Price</label>
                <Input type="number" step={0.0001} value={price} onChange={(e) => setPrice(Number(e.target.value))} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm text-muted-foreground">Stop (pips)</label>
                  <Input type="number" min={1} step={1} value={stopPips} onChange={(e) => setStopPips(Number(e.target.value))} />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">Take (pips)</label>
                  <Input type="number" min={1} step={1} value={takePips} onChange={(e) => setTakePips(Number(e.target.value))} />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-xl border border-border/50">
              <CardHeader><CardTitle>Results</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Pip Value</span><span className="font-medium">{results.pv.toFixed(2)} {account}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Margin Required</span><span className="font-medium">{results.margin.toFixed(2)} {account}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Stop Loss (approx)</span><span className="font-medium">{results.stopLoss.toFixed(2)} {account}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Take Profit (approx)</span><span className="font-medium">{results.takeProfit.toFixed(2)} {account}</span></div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-xl border border-border/50">
              <CardHeader><CardTitle>Overnight Swap (Illustrative)</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Long (1 day)</span><span className="font-medium">{results.swapLong.toFixed(2)} {account}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Short (1 day)</span><span className="font-medium">{results.swapShort.toFixed(2)} {account}</span></div>
              </CardContent>
            </Card>
          </div>
        </div>

        <p className="text-xs text-muted-foreground mt-6">Disclaimer: This calculator provides estimates only and does not constitute financial advice. Actual trading results vary due to spreads, commissions, swaps, and market conditions.</p>
      </main>
      <Footer />
    </div>
  );
}

