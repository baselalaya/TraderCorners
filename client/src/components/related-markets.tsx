import { marketData } from "@/lib/market-data";
import { motion } from "framer-motion";

type MarketGroup = keyof typeof marketData;

type Props = {
  title: string;
  group: MarketGroup;
  symbols?: string[]; // optional subset filter
};

export default function RelatedMarkets({ title, group, symbols }: Props) {
  const data = marketData[group].filter((item) =>
    symbols && symbols.length > 0 ? symbols.includes(item.symbol) : true
  );

  if (!data.length) return null;

  return (
    <section className="mt-12">
      <div className="rounded-3xl border border-border/50 bg-card/60 backdrop-blur-xl p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-display text-2xl md:text-3xl font-semibold">{title}</h3>
        </div>
        <div className="grid gap-3">
          {data.map((item, index) => (
            <motion.div
              key={item.symbol}
              className="group relative bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl p-4 md:p-6 hover:bg-card/60 hover:border-primary/30 transition-all duration-300"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center text-sm md:text-base font-bold text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-display font-semibold text-base md:text-lg">{item.symbol}</div>
                    <div className="text-xs text-muted-foreground">{group.charAt(0).toUpperCase() + group.slice(1)}</div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 items-center text-right">
                  <div>
                    <div className="text-xs text-muted-foreground">Price</div>
                    <div className="font-mono font-bold">{item.price}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">24h</div>
                    <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${
                      item.isPositive ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'
                    }`}>
                      <span className="text-xs">{item.isPositive ? '↗' : '↘'}</span>
                      {item.change}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Volume</div>
                    <div className="font-medium">{item.volume}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

