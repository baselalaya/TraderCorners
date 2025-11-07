export type Impact = "low" | "medium" | "high";
export type Category = "GDP" | "CPI" | "PMI" | "Employment" | "Rates" | "Other";

export interface EconomicEvent {
  id: string;
  dateTime: string; // ISO string in UTC
  country: string; // e.g., US, EU, GB, JP
  flag?: string; // optional emoji or asset path
  impact: Impact;
  category: Category;
  title: string;
  previous?: string;
  forecast?: string;
  actual?: string;
  unit?: string;
  detail?: string;
  sourceUrl?: string;
}

export interface FetchParams {
  from: string; // ISO date string (inclusive)
  to: string;   // ISO date string (inclusive)
  countries?: string[];
  impacts?: Impact[];
  categories?: Category[];
  tz?: string; // IANA tz name for display (not used in mock)
}

// Simple country flag map
const FLAG_MAP: Record<string, string> = {
  US: "🇺🇸",
  EU: "🇪🇺",
  GB: "🇬🇧",
  JP: "🇯🇵",
  CH: "🇨🇭",
  CN: "🇨🇳",
  AU: "🇦🇺",
  NZ: "🇳🇿",
  CA: "🇨🇦",
};

export async function fetchEconomicEvents(params: FetchParams): Promise<EconomicEvent[]> {
  const base = import.meta.env.VITE_TE_API_BASE || "https://api.tradingeconomics.com";
  const key = import.meta.env.VITE_TE_API_KEY;
  if (!key) {
    // No key: return empty list to keep UI stable
    return [];
  }

  // Build query
  const q = new URLSearchParams();
  q.set("d1", params.from.split("T")[0]);
  q.set("d2", params.to.split("T")[0]);
  // Optional filters: importance takes values 1,2,3 (low, med, high)
  if (params.impacts && params.impacts.length) {
    const map: Record<Impact, string> = { low: "1", medium: "2", high: "3" };
    q.set("importance", params.impacts.map(i => map[i]).join(","));
  }
  if (params.countries && params.countries.length) {
    q.set("country", params.countries.join(","));
  }
  const url = `${base}/calendar?${q.toString()}&c=${encodeURIComponent(key)}`;

  const res = await fetch(url);
  if (!res.ok) {
    console.error("TE calendar fetch failed", res.status, await res.text());
    return [];
  }
  const data = await res.json();

  // Normalize to EconomicEvent
  const events: EconomicEvent[] = (Array.isArray(data) ? data : []).map((e: any, idx: number) => {
    const country: string = e.Country || e.CountryCode || e.Category || "";
    const importance: Impact = e.Importance === 3 ? "high" : e.Importance === 2 ? "medium" : "low";
    const category: Category = (e.Category || "Other") as Category;
    const previous = e.Previous?.toString();
    const forecast = e.Forecast?.toString();
    const actual = e.Actual?.toString();
    const unit = e.Unit || undefined;
    return {
      id: e.ID?.toString() || `${e.EventID || idx}`,
      dateTime: e.Date || e.DateUtc || e.DateLastUpdate || new Date().toISOString(),
      country,
      flag: FLAG_MAP[country] || undefined,
      impact: importance,
      category,
      title: e.Event || e.Title || "Economic Event",
      previous,
      forecast,
      actual,
      unit,
      detail: e.Notes || e.Reference || undefined,
      sourceUrl: e.Link || e.URL || undefined,
    };
  });

  // Local category filter if provided
  const filtered = events.filter(e => {
    if (params.categories && params.categories.length && !params.categories.includes(e.category)) return false;
    return true;
  });

  return filtered.sort((a, b) => new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime());
}
