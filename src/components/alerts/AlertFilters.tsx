import { Search } from "lucide-react";

interface AlertFiltersProps {
  search: string;
  setSearch: (value: string) => void;
  severity: string;
  setSeverity: (value: string) => void;
}

const filters = [
  "all",
  "critical",
  "high",
  "medium",
  "low",
];

export default function AlertFilters({
  search,
  setSearch,
  severity,
  setSeverity,
}: AlertFiltersProps) {
  return (
    <div className="space-y-5">

      <div className="relative">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
        />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search alerts..."
          className="w-full rounded-xl border border-slate-800 bg-slate-900 py-3 pl-11 pr-4 text-white outline-none focus:border-red-500"
        />

      </div>

      <div className="flex flex-wrap gap-3">

        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setSeverity(item)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              severity === item
                ? "bg-red-500 text-white"
                : "border border-slate-700 bg-slate-900 hover:bg-slate-800"
            }`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}

      </div>

    </div>
  );
}