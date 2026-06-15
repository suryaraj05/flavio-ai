import { motion } from 'motion/react';
import DonutChart from './charts/DonutChart';
import AnimatedBar from './charts/AnimatedBar';
import { MOOD_SEGMENTS, MOOD_BREAKDOWN_ORDER } from '@/data/insightsDemo';

const maxCount = Math.max(...MOOD_SEGMENTS.map((s) => s.count));

const CARD_SPRING = { type: 'spring' as const, stiffness: 380, damping: 26 };

export default function MoodMixSection() {
  const segmentMap = Object.fromEntries(MOOD_SEGMENTS.map((s) => [s.label, s]));

  return (
    <div className="space-y-2.5 px-2.5 pt-2.5">
      <motion.div
        whileHover={{ y: -2, boxShadow: '0 6px 20px rgba(37,99,235,0.08)' }}
        transition={CARD_SPRING}
        className="rounded-xl border border-slate-100 bg-white p-2.5 shadow-sm"
      >
        <h3 className="mb-2 text-[10px] font-bold text-[#1E3A5F]">Guest mood mix</h3>
        <DonutChart />
        <div className="mt-2 flex flex-wrap justify-center gap-x-2 gap-y-1">
          {MOOD_SEGMENTS.map((segment) => (
            <motion.span
              key={segment.label}
              whileHover={{ scale: 1.05 }}
              className="flex cursor-default items-center gap-1 text-[7px] text-slate-500"
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: segment.color }}
              />
              {segment.label} ({segment.count})
            </motion.span>
          ))}
        </div>
      </motion.div>

      <motion.div
        whileHover={{ y: -2, boxShadow: '0 6px 20px rgba(37,99,235,0.08)' }}
        transition={CARD_SPRING}
        className="rounded-xl border border-slate-100 bg-white p-2.5 shadow-sm"
      >
        <h3 className="mb-2 text-[10px] font-bold text-[#1E3A5F]">Mood breakdown</h3>
        <div className="space-y-1.5">
          {MOOD_BREAKDOWN_ORDER.map((label) => {
            const segment = segmentMap[label];
            if (!segment) return null;
            const widthPercent = (segment.count / maxCount) * 100;
            return (
              <div key={label} className="flex items-center gap-1.5">
                <span className="w-[52px] shrink-0 truncate text-[7px] text-slate-500">{label}</span>
                <div className="flex-1">
                  <AnimatedBar percent={widthPercent} color={segment.color} height={8} />
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-1 flex justify-between px-[58px] text-[6px] text-slate-300">
          <span>0</span>
          <span>4</span>
          <span>8</span>
        </div>
      </motion.div>
    </div>
  );
}
