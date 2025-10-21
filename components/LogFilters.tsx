"use client";

interface LogFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const FILTERS = ["ALL", "RUN", "LIFT", "HYBRID", "COLD", "NIGHT"];

export default function LogFilters({ activeFilter, onFilterChange }: LogFiltersProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {FILTERS.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`
            system-text px-4 py-2 text-xs sm:text-sm
            border transition-colors duration-100
            ${
              activeFilter === filter
                ? "border-steel/80 bg-steel/10 text-white"
                : "border-graphite/60 text-steel/70 hover:border-steel/40 hover:text-steel"
            }
          `}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
