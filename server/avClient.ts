import fetch from "node-fetch";

export type AVNormalized = {
  symbol: string; // EURUSD
  bid: number;
  ask: number;
  price: number;
  ts: number;
};

const AV_KEY = process.env.ALPHA_VANTAGE_API_KEY as string;
const AV_BASE = "https://www.alphavantage.co/query";

function normSymbol(pair: string) {
  return pair.replaceAll("/", "");
}

async function fetchPair(from: string, to: string): Promise<AVNormalized | null> {
  const url = `${AV_BASE}?function=CURRENCY_EXCHANGE_RATE&from_currency=${encodeURIComponent(from)}&to_currency=${encodeURIComponent(to)}&apikey=${AV_KEY}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`AV ${from}${to} failed ${res.status}`);
  const json = await res.json();
  const data = json && json["Realtime Currency Exchange Rate"]; 
  if (!data) return null;
  const rateStr = data["5. Exchange Rate"] || data["Exchangerate"];
  const bidStr = data["8. Bid Price"] || data["Bid Price"]; // may be undefined on free tier
  const askStr = data["9. Ask Price"] || data["Ask Price"]; // may be undefined on free tier
  const price = Number(rateStr);
  const bid = Number(bidStr ?? price);
  const ask = Number(askStr ?? price);
  if (!Number.isFinite(price)) return null;
  const fromCode = data["1. From_Currency Code"] || from;
  const toCode = data["3. To_Currency Code"] || to;
  return {
    symbol: normSymbol(`${fromCode}/${toCode}`),
    bid,
    ask,
    price: (bid + ask) / 2 || price,
    ts: Date.now(),
  };
}

export async function fetchAVSnapshot(symbols: string[]): Promise<AVNormalized[]> {
  const tasks = symbols.map((s) => {
    const [base, quote] = s.split("/");
    return fetchPair(base, quote);
  });
  const results = await Promise.allSettled(tasks);
  const out: AVNormalized[] = [];
  for (const r of results) {
    if (r.status === "fulfilled" && r.value) out.push(r.value);
  }
  return out;
}

