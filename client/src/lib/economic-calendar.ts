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

const MOCK_EVENTS: EconomicEvent[] = [
  {
    id: "1",
    dateTime: new Date().toISOString(),
    country: "US",
    flag: "🇺🇸",
    impact: "high",
    category: "Employment",
    title: "Nonfarm Payrolls (Sep)",
    previous: "+165k",
    forecast: "+175k",
    actual: undefined,
    unit: "jobs",
    detail: "Monthly change in the number of employed people, excluding the farming industry.",
    sourceUrl: "https://www.bls.gov/"
  },
  {
    id: "2",
    dateTime: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
    country: "EU",
    flag: "🇪🇺",
    impact: "medium",
    category: "CPI",
    title: "Eurozone CPI YoY (Flash)",
    previous: "2.6%",
    forecast: "2.5%",
    unit: "%",
    detail: "Consumer price inflation year-over-year flash estimate.",
    sourceUrl: "https://ec.europa.eu/eurostat/"
  },
  {
    id: "3",
    dateTime: new Date(Date.now() + 26 * 60 * 60 * 1000).toISOString(),
    country: "GB",
    flag: "🇬🇧",
    impact: "low",
    category: "PMI",
    title: "Manufacturing PMI (Final)",
    previous: "49.8",
    forecast: "50.1",
    unit: "index",
    detail: "Purchasing Managers' Index for manufacturing sector.",
    sourceUrl: "https://www.markiteconomics.com/"
  }
];

export async function fetchEconomicEvents(params: FetchParams): Promise<EconomicEvent[]> {
  const from = new Date(params.from);
  const to = new Date(params.to);
  const inRange = (d: Date) => d >= from && d <= to;
  return MOCK_EVENTS.filter(e => {
    const dt = new Date(e.dateTime);
    if (!inRange(dt)) return false;
    if (params.countries && params.countries.length && !params.countries.includes(e.country)) return false;
    if (params.impacts && params.impacts.length && !params.impacts.includes(e.impact)) return false;
    if (params.categories && params.categories.length && !params.categories.includes(e.category)) return false;
    return true;
  }).sort((a, b) => new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime());
}

