"use client";
import React from "react";
import TradingViewTickerTape, { type Ticker } from "./TradingViewTickerTape";
import CryptoPriceStrip from "./CryptoPriceStrip";

type Props = {
  tvSymbols?: Ticker[];
  className?: string;
};

const defaultSymbols: Ticker[] = [
  { proName: "NASDAQ:AAPL", title: "AAPL" },
  { proName: "NASDAQ:MSFT", title: "MSFT" },
  { proName: "NASDAQ:TSLA", title: "TSLA" },
  { proName: "BINANCE:BTCUSDT", title: "BTC/USDT" },
  { proName: "BINANCE:ETHUSDT", title: "ETH/USDT" },
  { proName: "FX:EURUSD", title: "EUR/USD" },
];

const MarketPricesSection: React.FC<Props> = ({ tvSymbols = defaultSymbols, className = "" }) => {
  return (
    <section className={"w-full py-6 md:py-8 " + className} aria-labelledby="market-prices-heading">
      <h2 id="market-prices-heading" className="sr-only md:not-sr-only text-lg font-semibold text-neutral-100 mb-2">
        Market Prices
      </h2>
      <div className="flex flex-col gap-4">
        <TradingViewTickerTape symbols={tvSymbols} colorTheme="dark" transparent={false} />
        <CryptoPriceStrip ids={["bitcoin", "ethereum"]} className="" />
        <p className="text-xs text-neutral-500">Prices may be delayed · For information only.</p>
      </div>
    </section>
  );
};

export default MarketPricesSection;

