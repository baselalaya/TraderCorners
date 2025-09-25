import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type Props = {
  datePreset: string;
  onDatePreset: (v: string) => void;
  tz: string;
  onTz: (v: string) => void;
  impacts: Record<"low"|"medium"|"high", boolean>;
  onImpacts: (k: "low"|"medium"|"high", v: boolean) => void;
  countries: string[];
  allCountries: string[];
  onCountries: (list: string[]) => void;
  categories: string[];
  allCategories: string[];
  onCategories: (list: string[]) => void;
  onApply: () => void;
};

export default function CalendarFilters({ datePreset, onDatePreset, tz, onTz, impacts, onImpacts, countries, allCountries, onCountries, categories, allCategories, onCategories, onApply }: Props) {
  const timezones = useMemo(() => ["UTC", "America/New_York", "Europe/London", "Asia/Tokyo"], []);

  const toggleInList = (list: string[], v: string) => list.includes(v) ? list.filter(x => x !== v) : [...list, v];

  return (
    <div className="rounded-3xl border border-border/50 bg-card/60 backdrop-blur-xl p-4 md:p-6 mb-6">
      <div className="flex flex-col md:flex-row md:items-end gap-4">
        <div className="flex items-center gap-2">
          {[
            { k: "today", l: "Today" },
            { k: "week", l: "This Week" },
            { k: "month", l: "This Month" },
          ].map(p => (
            <Button key={p.k} variant={datePreset === p.k ? undefined : "outline"} onClick={() => onDatePreset(p.k)}>
              {p.l}
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-3 md:ml-auto">
          <div className="flex items-center gap-2">
            <label className="text-sm text-muted-foreground">Impact</label>
            {(["low","medium","high"] as const).map(k => (
              <label key={k} className={`inline-flex items-center gap-1 px-2 py-1 rounded-md border ${k==='high'?'border-red-300 text-red-600 bg-red-50':k==='medium'?'border-amber-300 text-amber-700 bg-amber-50':'border-muted text-muted-foreground bg-muted'}`}>
                <Checkbox checked={impacts[k]} onCheckedChange={(v) => onImpacts(k, Boolean(v))} />
                <span className="text-xs capitalize">{k}</span>
              </label>
            ))}
          </div>

          <Select value={tz} onValueChange={onTz}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Timezone" />
            </SelectTrigger>
            <SelectContent>
              {timezones.map(z => <SelectItem key={z} value={z}>{z}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-xl border border-border/50 bg-card/40 p-3">
          <div className="text-sm font-medium mb-2">Countries</div>
          <div className="flex flex-wrap gap-2">
            {allCountries.map(c => (
              <button key={c} className={`px-3 py-1 rounded-full text-sm border ${countries.includes(c)?'bg-primary text-white border-primary':'bg-background border-border'}`} onClick={() => onCountries(toggleInList(countries, c))}>{c}</button>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-border/50 bg-card/40 p-3">
          <div className="text-sm font-medium mb-2">Categories</div>
          <div className="flex flex-wrap gap-2">
            {allCategories.map(c => (
              <button key={c} className={`px-3 py-1 rounded-full text-sm border ${categories.includes(c)?'bg-primary text-white border-primary':'bg-background border-border'}`} onClick={() => onCategories(toggleInList(categories, c))}>{c}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        <Button onClick={onApply} className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">Apply Filters</Button>
      </div>
    </div>
  );
}

