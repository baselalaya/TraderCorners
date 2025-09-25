import { useEffect, useMemo, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { fetchEconomicEvents, Impact, Category, EconomicEvent } from "@/lib/economic-calendar";
import CalendarFilters from "@/components/calendar/filters";
import EventsTable from "@/components/calendar/events-table";
import { motion } from "framer-motion";

function isoDate(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate()).toISOString();
}

export default function EconomicCalendarPage() {
  const [datePreset, setDatePreset] = useState("week");
  const [tz, setTz] = useState<string>(() => localStorage.getItem("tc_tz") || "UTC");
  // Defaults: High/Medium and US/EU
  const [impacts, setImpacts] = useState<Record<Impact, boolean>>({ low: false, medium: true, high: true });
  const [countries, setCountries] = useState<string[]>(["US","EU"]);
  const [categories, setCategories] = useState<string[]>(["GDP","CPI","PMI","Employment"]);
  const [events, setEvents] = useState<EconomicEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { localStorage.setItem("tc_tz", tz); }, [tz]);

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
    setLoading(true);
    const data = await fetchEconomicEvents({
      from: range.from,
      to: range.to,
      countries,
      impacts: (Object.keys(impacts) as Impact[]).filter(k => impacts[k]),
      categories: categories as Category[],
      tz
    });
    setEvents(data);
    setLoading(false);
  };

  useEffect(() => { load(); /* eslint-disable-next-line */ }, [range.from, range.to]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20 text-foreground">
      <Header />

      <main className="container mx-auto px-6 py-28 md:py-32 flex-1">
        <section className="mb-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border border-border/50 bg-card/60 backdrop-blur-xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -top-6 -right-6 w-40 h-40 rounded-full bg-primary/10 blur-2xl" />
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">Economic Calendar</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">Filter global macroeconomic events by date, country, impact and category. Times shown in your selected timezone.</p>
          </motion.div>
        </section>

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
