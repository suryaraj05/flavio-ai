import { motion } from 'motion/react';
import { FILTER_PILLS } from '@/data/insightsDemo';

const SPRING = { type: 'spring' as const, stiffness: 450, damping: 28 };

type InsightFiltersProps = {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  tableSearch: string;
  onTableSearchChange: (value: string) => void;
};

export default function InsightFilters({
  activeFilter,
  onFilterChange,
  tableSearch,
  onTableSearchChange,
}: InsightFiltersProps) {
  return (
    <div className="space-y-2 px-2.5 pt-1">
      <div className="no-scrollbar flex gap-1.5 overflow-x-auto pb-1">
        {FILTER_PILLS.map((pill) => {
          const isActive = activeFilter === pill;
          return (
            <motion.button
              key={pill}
              type="button"
              onClick={() => onFilterChange(pill)}
              whileHover={{ scale: 1.06, y: -1 }}
              whileTap={{ scale: 0.94 }}
              transition={SPRING}
              layout
              className={`shrink-0 rounded-full px-2.5 py-1 text-[8px] font-medium transition-colors duration-200 ${
                isActive
                  ? 'bg-[#334155] text-white shadow-sm'
                  : 'bg-white text-slate-500 ring-1 ring-slate-100 hover:ring-slate-200'
              }`}
            >
              {pill}
            </motion.button>
          );
        })}
      </div>
      <motion.input
        type="text"
        value={tableSearch}
        onChange={(e) => onTableSearchChange(e.target.value)}
        placeholder="Table #"
        whileFocus={{ scale: 1.01 }}
        transition={SPRING}
        className="w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-[9px] text-slate-700 placeholder:text-slate-400 transition-shadow duration-200 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/25"
      />
    </div>
  );
}
