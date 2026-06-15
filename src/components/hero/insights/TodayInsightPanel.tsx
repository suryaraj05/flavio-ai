import { AnimatePresence, motion } from 'motion/react';
import { ChevronUp, UtensilsCrossed } from 'lucide-react';
import { TODAY_INSIGHT } from '@/data/insightsDemo';

type TodayInsightPanelProps = {
  expanded: boolean;
  onToggle: () => void;
};

const SPRING = { type: 'spring' as const, stiffness: 400, damping: 30 };

export default function TodayInsightPanel({ expanded, onToggle }: TodayInsightPanelProps) {
  return (
    <div className="px-2.5 pt-2">
      <motion.button
        type="button"
        onClick={onToggle}
        whileHover={{ backgroundColor: 'rgba(248,250,252,0.8)' }}
        whileTap={{ scale: 0.99 }}
        transition={SPRING}
        className="flex w-full items-center justify-between rounded-md px-1 py-1"
      >
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] font-bold text-[#1E3A5F]">Today</span>
          <span className="rounded-full bg-slate-100 px-1.5 py-0.5 text-[7px] text-slate-500">
            1 insight
          </span>
        </div>
        <motion.span animate={{ rotate: expanded ? 0 : 180 }} transition={SPRING}>
          <ChevronUp className="h-3.5 w-3.5 text-slate-400" />
        </motion.span>
      </motion.button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={SPRING}
            className="overflow-hidden"
          >
            <motion.div
              whileHover={{ boxShadow: '0 4px 16px rgba(234,88,12,0.1)' }}
              transition={SPRING}
              className="mt-1 rounded-xl border border-orange-100 border-l-[3px] border-l-orange-400 bg-white p-2 shadow-sm"
            >
              <div className="mb-1.5 flex items-start justify-between gap-1">
                <div className="flex items-center gap-1">
                  <UtensilsCrossed className="h-3 w-3 text-orange-500" />
                  <span className="text-[9px] font-bold text-[#1E3A5F]">{TODAY_INSIGHT.table}</span>
                  <span className="rounded-full bg-orange-100 px-1.5 py-0.5 text-[6px] font-medium text-orange-600">
                    {TODAY_INSIGHT.tag}
                  </span>
                </div>
                <span className="text-[6px] text-orange-400">{TODAY_INSIGHT.timeAgo}</span>
              </div>
              <p className="mb-2 text-[7px] text-slate-400">{TODAY_INSIGHT.timestamp}</p>

              <div className="mb-1.5 rounded-lg bg-orange-50/80 p-2">
                <span className="mb-1 inline-flex items-center gap-0.5 rounded-full bg-orange-200/60 px-1.5 py-0.5 text-[6px] font-medium text-orange-700">
                  👤 Guest profile
                </span>
                <p className="text-[7px] leading-relaxed text-slate-600">
                  {TODAY_INSIGHT.guestProfile}
                </p>
              </div>

              <div className="rounded-lg bg-orange-50/80 p-2">
                <span className="mb-1 inline-flex items-center gap-0.5 rounded-full bg-orange-200/60 px-1.5 py-0.5 text-[6px] font-medium text-orange-700">
                  👨‍🍳 Chef
                </span>
                <p className="text-[7px] leading-relaxed text-slate-600">{TODAY_INSIGHT.chefNote}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
