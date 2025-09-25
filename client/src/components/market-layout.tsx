import { ReactNode } from "react";
import { motion } from "framer-motion";

type Stat = { title: string; items: ReactNode };

interface MarketLayoutProps {
  title: string;
  description: string;
  highlights: Stat[];
  details: Stat[];
  related: ReactNode;
}

export default function MarketLayout({ title, description, highlights, details, related }: MarketLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20 text-foreground">
      <main className="container mx-auto px-6 py-28 md:py-32 flex-1">
        <section className="mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-border/50 bg-card/60 backdrop-blur-xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute -top-6 -right-6 w-40 h-40 rounded-full bg-primary/10 blur-2xl" />
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              {description}
            </p>
          </motion.div>
        </section>

        <section className="grid gap-6 md:grid-cols-3 mb-12">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm p-6 hover:bg-card/60 transition-colors"
            >
              <h3 className="font-semibold mb-2">{h.title}</h3>
              <div className="text-sm text-muted-foreground leading-relaxed">
                {h.items}
              </div>
            </motion.div>
          ))}
        </section>

        <section className="grid gap-6 md:grid-cols-2 mb-10">
          {details.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm p-6"
            >
              <h3 className="text-xl font-semibold mb-3">{d.title}</h3>
              <div className="text-muted-foreground space-y-1 text-sm">
                {d.items}
              </div>
            </motion.div>
          ))}
        </section>

        {related}
      </main>
    </div>
  );
}

