import { motion } from 'motion/react';
import { ROLE_INSIGHTS } from '@/data/insightsDemo';

const SPRING = { type: 'spring' as const, stiffness: 380, damping: 26 };

export default function RoleInsightCards() {
  return (
    <div className="space-y-1.5 px-2.5 pt-2">
      {ROLE_INSIGHTS.map((insight, i) => (
        <motion.div
          key={insight.role}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ ...SPRING, delay: i * 0.05 }}
          whileHover={{ x: 2, boxShadow: '0 4px 14px rgba(234,88,12,0.12)' }}
          className="cursor-default rounded-lg border border-orange-100 border-l-[3px] border-l-orange-400 bg-orange-50/50 p-2"
        >
          <span className="mb-1 inline-flex items-center gap-0.5 rounded-full bg-orange-200/70 px-1.5 py-0.5 text-[6px] font-semibold text-orange-800">
            {insight.emoji} {insight.role}
          </span>
          <p className="text-[7px] leading-relaxed text-slate-600">{insight.text}</p>
        </motion.div>
      ))}
    </div>
  );
}
