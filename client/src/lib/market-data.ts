export interface MarketItem {
  symbol: string;
  icon: string;
  price: string;
  change: string;
  isPositive: boolean;
  volume: string;
}

export interface MarketData {
  forex: MarketItem[];
  crypto: MarketItem[];
  commodities: MarketItem[];
}

export const marketData: MarketData = {
  forex: [
    {
      symbol: "EUR/USD",
      icon: "€/$",
      price: "1.0842",
      change: "-0.8%",
      isPositive: false,
      volume: "$2.1B",
    },
    {
      symbol: "GBP/USD",
      icon: "£/$",
      price: "1.2745",
      change: "+0.3%",
      isPositive: true,
      volume: "$1.8B",
    },
    {
      symbol: "USD/JPY",
      icon: "$/¥",
      price: "149.82",
      change: "+0.5%",
      isPositive: true,
      volume: "$1.5B",
    },
    {
      symbol: "AUD/USD",
      icon: "A/$",
      price: "0.6621",
      change: "-0.2%",
      isPositive: false,
      volume: "$950M",
    },
  ],
  crypto: [
    {
      symbol: "BTC/USD",
      icon: "₿",
      price: "$42,851.20",
      change: "+2.4%",
      isPositive: true,
      volume: "$18.2B",
    },
    {
      symbol: "ETH/USD",
      icon: "Ξ",
      price: "$2,651.80",
      change: "+3.1%",
      isPositive: true,
      volume: "$12.1B",
    },
    {
      symbol: "ADA/USD",
      icon: "₳",
      price: "$0.4821",
      change: "+5.7%",
      isPositive: true,
      volume: "$850M",
    },
    {
      symbol: "SOL/USD",
      icon: "◎",
      price: "$98.45",
      change: "+1.9%",
      isPositive: true,
      volume: "$2.3B",
    },
  ],
  commodities: [
    {
      symbol: "GOLD",
      icon: "Au",
      price: "$2,048.30",
      change: "+1.2%",
      isPositive: true,
      volume: "$4.1B",
    },
    {
      symbol: "SILVER",
      icon: "Ag",
      price: "$24.85",
      change: "+0.8%",
      isPositive: true,
      volume: "$890M",
    },
    {
      symbol: "CRUDE OIL",
      icon: "🛢️",
      price: "$71.24",
      change: "-1.5%",
      isPositive: false,
      volume: "$3.2B",
    },
    {
      symbol: "NATURAL GAS",
      icon: "⚡",
      price: "$2.89",
      change: "+2.1%",
      isPositive: true,
      volume: "$1.1B",
    },
  ],
};
