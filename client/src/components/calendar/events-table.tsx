import { useMemo, useState } from "react";
import { EconomicEvent } from "@/lib/economic-calendar";
import { motion, AnimatePresence } from "framer-motion";

function formatDay(dateIso: string, tz?: string) {
  const d = new Date(dateIso);
  return d.toLocaleDateString(undefined, { weekday: "long", month: "short", day: "numeric" });
}

function formatTime(dateIso: string, tz?: string) {
  const d = new Date(dateIso);
  return d.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });
}

type Props = {
  data: EconomicEvent[];
  tz?: string;
};

export default function EventsTable({ data, tz }: Props) {
  const [open, setOpen] = useState<string | null>(null);

  const grouped = useMemo(() => {
    const map = new Map<string, EconomicEvent[]>();
    data.forEach(e => {
      const key = new Date(e.dateTime).toDateString();
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(e);
    });
    return Array.from(map.entries()).sort((a,b) => new Date(a[0]).getTime() - new Date(b[0]).getTime());
  }, [data]);

  if (!data.length) {
    return (
      <div className="rounded-3xl border border-border/50 bg-card/60 backdrop-blur-xl p-10 text-center text-muted-foreground">
        No events match the selected filters.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {grouped.map(([day, items]) => (
        <section key={day}>
          <div className="sticky top-20 z-10 -mx-2 px-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-background/90 border border-border px-3 py-1 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary" />
              {formatDay(items[0].dateTime, tz)}
            </div>
          </div>

          <div className="mt-3 rounded-2xl overflow-hidden border border-border/60">
            <div className="grid grid-cols-[100px_80px_1fr_1fr_1fr] text-xs uppercase tracking-wide text-muted-foreground bg-muted/40 px-4 py-2">
              <div>Time</div>
              <div>Impact</div>
              <div>Event</div>
              <div className="text-right">Forecast</div>
              <div className="text-right">Actual</div>
            </div>

            {items.map(ev => (
              <div key={ev.id} className="border-t border-border/50">
                <button className="w-full grid grid-cols-[100px_80px_1fr_1fr_1fr] items-center gap-2 px-4 py-3 hover:bg-card/60 text-sm text-foreground text-left" onClick={() => setOpen(open === ev.id ? null : ev.id)}>
                  <div className="font-mono text-muted-foreground">{formatTime(ev.dateTime, tz)}</div>
                  <div>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${ev.impact==='high'?'bg-red-500/15 text-red-600 border-red-500/30':ev.impact==='medium'?'bg-amber-400/15 text-amber-700 border-amber-400/30':'bg-muted text-muted-foreground border-border'}`}>{ev.impact}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg leading-none">{ev.flag ?? ''}</span>
                    <span className="text-xs text-muted-foreground">{ev.country}</span>
                    <span className="font-medium">{ev.title}</span>
                  </div>
                  <div className="text-right text-muted-foreground">{ev.forecast ?? "—"}</div>
                  <div className="text-right font-semibold">{ev.actual ?? "—"}</div>
                </button>

                <AnimatePresence initial={false}>
                  {open === ev.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-4 pb-4 text-sm bg-background/60"
                    >
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="md:col-span-2">
                          <div className="text-muted-foreground">{ev.detail || "No additional details available."}</div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-xs text-muted-foreground uppercase">Category</div>
                          <div className="font-medium">{ev.category}</div>
                          {ev.sourceUrl && (
                            <a className="inline-block mt-2 text-primary text-sm hover:underline" href={ev.sourceUrl} target="_blank" rel="noreferrer">Source</a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

