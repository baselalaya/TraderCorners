import { useEffect, useMemo, useRef, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import { fetchEconomicEvents, Impact, Category, EconomicEvent } from "@/lib/economic-calendar";
import CalendarFilters from "@/components/calendar/filters";
import EventsTable from "@/components/calendar/events-table";
import { motion } from "framer-motion";

function isoDate(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate()).toISOString();
}

export default function EconomicCalendarPage() {
  const [datePreset, setDatePreset] = useState("week");
  const [tz, setTz] = useState<string>(() => {
    try { return localStorage.getItem("tc_tz") || "UTC"; } catch { return "UTC"; }
  });
  // Defaults: High/Medium and US/EU
  const [impacts, setImpacts] = useState<Record<Impact, boolean>>({ low: false, medium: true, high: true });
  const [countries, setCountries] = useState<string[]>(["US","EU"]);
  const [categories, setCategories] = useState<string[]>(["GDP","CPI","PMI","Employment"]);
  const [events, setEvents] = useState<EconomicEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const inflight = useRef<AbortController | null>(null);

  useEffect(() => { try { localStorage.setItem("tc_tz", tz); } catch {} }, [tz]);

  const range = useMemo(() => {
    const now = new Date();
    if (datePreset === "today") return { from: isoDate(now), to: isoDate(now) };
    if (datePreset === "month") {
      const from = new Date(now.getFullYear(), now.getMonth(), 1);
      const to = new Date(now.getFullYear(), now.getMonth() + 1, 0);
      return { from: isoDate(from), to: isoDate(to) };
    }
    // week default: past 2 days to +5 days
    const from = new Date(now.getTime() - 2 * 86400000);
    const to = new Date(now.getTime() + 5 * 86400000);
    return { from: isoDate(from), to: isoDate(to) };
  }, [datePreset]);

  const load = async () => {
    // abort any in-flight request
    try { inflight.current?.abort(); } catch {}
    const ac = new AbortController();
    inflight.current = ac;
    setLoading(true);
    setError(null);
    try {
      const hasKey = Boolean(import.meta.env.VITE_TE_API_KEY);
      if (hasKey) {
        const data = await fetchEconomicEvents({
          from: range.from,
          to: range.to,
          countries,
          impacts: (Object.keys(impacts) as Impact[]).filter(k => impacts[k]),
          categories: categories as Category[],
          tz
        }, ac);
        setEvents(Array.isArray(data) ? data : []);
      } else {
        // Local fallback dataset so page stays functional without an API key
        const seed = Date.now() % 3;
        const base = new Date();
        const pool: EconomicEvent[] = [
          { id: 'gdp-us', country: 'US', title: 'GDP QoQ (Prel.)', category: 'GDP' as any, impact: 'high' as any, datetime: new Date(base).toISOString(), actual: null, forecast: '2.1%', previous: '2.3%' },
          { id: 'cpi-eu', country: 'EU', title: 'CPI YoY', category: 'CPI' as any, impact: 'medium' as any, datetime: new Date(base.getTime()+seed*86400000).toISOString(), actual: null, forecast: '2.6%', previous: '2.9%' },
          { id: 'nfp-us', country: 'US', title: 'Nonfarm Payrolls', category: 'Employment' as any, impact: 'high' as any, datetime: new Date(base.getTime()+2*86400000).toISOString(), actual: null, forecast: '175k', previous: '199k' },
          { id: 'pmi-gb', country: 'GB', title: 'Manufacturing PMI', category: 'PMI' as any, impact: 'low' as any, datetime: new Date(base.getTime()+3*86400000).toISOString(), actual: null, forecast: '49.8', previous: '49.5' },
        ];
        const fromTs = new Date(range.from).getTime();
        const toTs = new Date(range.to).getTime();
        const allowedImpacts = new Set((Object.keys(impacts) as Impact[]).filter(k => impacts[k]));
        const allowedCats = new Set(categories as Category[]);
        const allowedCountries = new Set(countries);
        const filtered = pool.filter(ev => {
          const t = new Date(ev.datetime).getTime();
          return t >= fromTs && t <= toTs &&
            allowedCountries.has(ev.country) &&
            allowedImpacts.has(ev.impact as Impact) &&
            allowedCats.has(ev.category as Category);
        });
        setEvents(filtered);
      }
    } catch (e: any) {
      if (e?.name !== 'AbortError') setError('Failed to load events. Please try again.');
    } finally {
      setLoading(false);
      if (inflight.current === ac) inflight.current = null;
    }
  };

  useEffect(() => { load(); /* eslint-disable-next-line */ }, [range.from, range.to]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20 text-foreground">
      <SEO page="economicCalendar" />
      <Header />

      <main className="container mx-auto px-6 py-28 md:py-32 flex-1">
        {/* Key notice removed; fallback data is used if VITE_TE_API_KEY is missing */}
        <section className="mb-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border border-border/50 bg-card/60 backdrop-blur-xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -top-6 -right-6 w-40 h-40 rounded-full bg-primary/10 blur-2xl" />
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">Economic Calendar</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">Filter global macroeconomic events by date, country, impact and category. Times shown in your selected timezone.</p>
          </motion.div>
        </section>

        {error && (
          <div className="mb-4 p-4 rounded-xl border border-red-300 bg-red-50 text-red-800 text-sm">
            {error}
          </div>
        )}

        <CalendarFilters
          datePreset={datePreset}
          onDatePreset={setDatePreset}
          tz={tz}
          onTz={setTz}
          impacts={impacts}
          onImpacts={(k, v) => setImpacts(prev => ({ ...prev, [k]: v }))}
          countries={countries}
          allCountries={["US","EU","GB","JP","AU","CA","NZ","CH"]}
          onCountries={setCountries}
          categories={categories}
          allCategories={["GDP","CPI","PMI","Employment","Rates","Other"]}
          onCategories={setCategories}
          onApply={load}
        />

        {loading ? (
          <div className="rounded-3xl border border-border/50 bg-card/60 backdrop-blur-xl p-10 text-center text-muted-foreground">Loading events…</div>
        ) : (
          <EventsTable data={events} tz={tz} />
        )}
      </main>

      <Footer />
    </div>
  );
}
