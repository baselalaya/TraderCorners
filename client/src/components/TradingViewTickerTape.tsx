"use client";
import React from "react";

export type Ticker = { proName: string; title?: string };

type Props = {
  symbols: Ticker[];
  colorTheme?: "light" | "dark";
  transparent?: boolean;
  locale?: string;
  className?: string;
};

const TradingViewTickerTape: React.FC<Props> = ({
  symbols,
  colorTheme = "dark",
  transparent = false,
  locale = "en",
  className = "",
}) => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    setLoaded(false);
    const container = containerRef.current;
    if (!container) return;
    container.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.onload = () => setLoaded(true);
    script.onerror = () => setLoaded(true); // stop skeleton on error too
    const config = {
      symbols,
      showSymbolLogo: true,
      displayMode: "adaptive",
      colorTheme,
      isTransparent: transparent,
      locale,
    } as const;
    script.innerHTML = JSON.stringify(config);
    container.appendChild(script);

    return () => {
      if (container) container.innerHTML = "";
    };
  }, [symbols, colorTheme, transparent, locale]);

  return (
    <div className={className} aria-label="Market ticker tape">
      {!loaded && (
        <div className="w-full h-12 animate-pulse rounded-md bg-neutral-800/60" aria-hidden>
          <span className="sr-only">Loading market ticker…</span>
        </div>
      )}
      <div ref={containerRef} className={!loaded ? "hidden" : ""} />
    </div>
  );
};

export default TradingViewTickerTape;

