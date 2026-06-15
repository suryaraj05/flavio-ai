import { motion } from 'motion/react';
import { MOOD_SEGMENTS } from '@/data/insightsDemo';

const SIZE = 100;
const STROKE = 18;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function DonutChart() {
  const total = MOOD_SEGMENTS.reduce((sum, s) => sum + s.count, 0);
  let offset = 0;

  return (
    <div className="relative mx-auto flex h-[100px] w-[100px] items-center justify-center">
      <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`} className="-rotate-90">
        {MOOD_SEGMENTS.map((segment, i) => {
          const fraction = segment.count / total;
          const dash = fraction * CIRCUMFERENCE;
          const gap = CIRCUMFERENCE - dash;
          const currentOffset = offset;
          offset += dash;

          return (
            <motion.circle
              key={segment.label}
              cx={SIZE / 2}
              cy={SIZE / 2}
              r={RADIUS}
              fill="none"
              stroke={segment.color}
              strokeWidth={STROKE}
              strokeDasharray={`${dash} ${gap}`}
              strokeDashoffset={-currentOffset}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            />
          );
        })}
      </svg>
    </div>
  );
}
