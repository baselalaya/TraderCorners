import React from "react";
import { useQuotes } from "@/providers/QuotesProvider";

type Props = { symbols?: string[] };

const DEFAULTS = [
  "EURUSD",
  "GBPUSD",
  "USDJPY",
  "AUDUSD",
  "USDCHF",
  "USDCAD",
  "NZDUSD",
  "EURJPY",
  "BTCUSD",
  "ETHUSD",
  "SOLUSD",
];

export default function HeroPriceTicket({ symbols = DEFAULTS }: Props) {
  const quotes = useQuotes();
  const prevRef = React.useRef<Record<string, number>>({});
  const [flash, setFlash] = React.useState<Record<string, number>>({});

  const items = symbols.map((s) => {
    const key = s.toUpperCase().replace("/", "");
    const q = (quotes as any)[key];
    const price = Number(q?.price);
    const prev = prevRef.current[key];
    const dir = Number.isFinite(price) && Number.isFinite(prev) ? (price as number) - (prev as number) : 0;
    if (Number.isFinite(price)) {
      if (Number.isFinite(prev) && price !== prev) {
        setFlash((f) => ({ ...f, [key]: Date.now() }));
      }
      prevRef.current[key] = price as number;
    }
    return { key, price: Number.isFinite(price) ? price : null, dir };
  });

  return (
    <div className="absolute inset-x-0 bottom-0 z-10">
      <div className="relative border-t border-white/10 backdrop-blur-lg bg-black shadow-[0_-12px_30px_-12px_rgba(0,0,0,0.6)]">
        {/* inner highlight bevel */}
        <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10 [mask-image:linear-gradient(to_top,rgba(255,255,255,0.08),transparent)]" />
        {/* edge vignettes */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black/30 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black/30 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-3 group">
          <div className="flex-1 overflow-hidden no-scrollbar">
            {/* seamless marquee: duplicate row inside a scrolling track */}
            <div className="min-w-full">
              <div className="marquee-track flex items-center gap-2 min-w-max motion-reduce:animate-none" role="list" aria-label="Live prices">
                {[0,1].map((dup) => (
                  <div key={dup} className="flex items-center gap-8">
                    {items.map(({ key, price, dir }) => (
                      <div
                        key={`${dup}-${key}`}
                        role="listitem"
                        className={`relative px-3 py-2 rounded-lg border text-sm flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_18px_-8px_rgba(0,0,0,0.6)] opacity-0 animate-[fadeIn_400ms_ease-out_forwards] 
                          ${dir >= 0 ? "border-emerald-300/20 bg-emerald-400/5 text-emerald-100/90" : "border-red-300/20 bg-red-400/5 text-red-100/90"}
                        `}
                      >
                        {/* top sheen */}
                        <span className="pointer-events-none absolute inset-0 before:absolute before:inset-0 before:[mask-image:linear-gradient(to_bottom,rgba(255,255,255,0.5),transparent)] before:opacity-[0.08]" aria-hidden />
                        <span className="font-semibold tracking-tight text-white/90 text-[0.92rem]">{toLabel(key)}</span>
                        <span className={`h-3 w-px ${dir >= 0 ? "bg-emerald-300/30" : "bg-red-300/30"}`} aria-hidden />
                        <span className={`relative font-mono text-white text-[1rem] leading-none ${flash[key] ? "glow" : ""}`}>
                          {price != null ? formatPrice(price, key) : "—"}
                          {flash[key] && (
                            <span className="pointer-events-none absolute -inset-1 rounded-md ring-1 ring-primary/20 blur-[1px]" aria-hidden />
                          )}
                        </span>
                        {price != null && (
                          <span className={`w-2 h-2 rounded-full ${dir >= 0 ? "bg-emerald-300" : "bg-red-300"}`} aria-hidden />
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* <div className="hidden md:block text-xs text-neutral-300">Prices may be delayed · For information only.</div> */}
        </div>
      </div>
    </div>
  );
}

function toLabel(sym: string) {
  if (sym.includes("/")) return sym;
  if (sym.length === 6) return `${sym.slice(0,3)}/${sym.slice(3)}`;
  return sym;
}

function formatPrice(n: number, sym: string) {
  const isJPY = sym.endsWith("JPY");
  return new Intl.NumberFormat(undefined, { minimumFractionDigits: isJPY ? 2 : 4, maximumFractionDigits: isJPY ? 3 : 5 }).format(n);
}

// marquee keyframes
// Tailwind can't define arbitrary keyframes inline in TS; rely on utility if present.
// Provide a fallback by injecting a style tag once.
let injected = false;
if (typeof document !== 'undefined' && !injected) {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes marquee { 0% { transform: translateX(0) } 100% { transform: translateX(-50%) } }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(2px) } to { opacity: 1; transform: translateY(0) } }
    @keyframes glow-kf { 0% { box-shadow: 0 0 0 rgba(255,255,255,0) } 30% { box-shadow: 0 0 12px rgba(255,255,255,0.35) } 100% { box-shadow: 0 0 0 rgba(255,255,255,0) } }
    .marquee-track { animation: marquee 16s linear infinite; will-change: transform; }
    .group:hover .marquee-track { animation-play-state: paused; }
    .glow { animation: glow-kf 600ms ease-out; }
    @media (prefers-reduced-motion: reduce) { .marquee-track { animation: none; } }
  `;
  document.head.appendChild(style);
  injected = true;
}
