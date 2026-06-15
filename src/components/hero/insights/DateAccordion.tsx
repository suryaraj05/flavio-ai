import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { DATE_ACCORDIONS } from '@/data/insightsDemo';

const SPRING = { type: 'spring' as const, stiffness: 400, damping: 30 };

type DateAccordionProps = {
  expandedId: string | null;
  onToggle: (id: string) => void;
};

export default function DateAccordion({ expandedId, onToggle }: DateAccordionProps) {
  return (
    <div className="space-y-0 px-2.5 pt-2">
      {DATE_ACCORDIONS.map((entry) => {
        const isOpen = expandedId === entry.id;
        return (
          <div key={entry.id} className="border-b border-slate-100 last:border-0">
            <motion.button
              type="button"
              onClick={() => onToggle(entry.id)}
              whileHover={{ backgroundColor: 'rgba(248,250,252,0.9)' }}
              whileTap={{ scale: 0.99 }}
              transition={SPRING}
              className="flex w-full items-center justify-between rounded-md px-1 py-2"
            >
              <span className="text-[8px] font-semibold text-[#1E3A5F]">{entry.date}</span>
              <div className="flex items-center gap-1.5">
                <span className="rounded-full bg-slate-100 px-1.5 py-0.5 text-[6px] text-slate-500">
                  {entry.insightCount} insight{entry.insightCount > 1 ? 's' : ''}
                </span>
                <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={SPRING}>
                  <ChevronDown className="h-3 w-3 text-slate-400" />
                </motion.span>
              </div>
            </motion.button>
            <AnimatePresence initial={false}>
              {isOpen && entry.summary && (
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={SPRING}
                  className="overflow-hidden px-1 pb-2 text-[7px] leading-relaxed text-slate-500"
                >
                  {entry.summary}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
