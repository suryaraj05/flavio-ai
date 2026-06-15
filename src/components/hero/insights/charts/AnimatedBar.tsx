import { motion, useReducedMotion } from 'motion/react';

type AnimatedBarProps = {
  percent: number;
  color: string;
  trackColor?: string;
  height?: number;
};

export default function AnimatedBar({
  percent,
  color,
  trackColor = '#F1F5F9',
  height = 6,
}: AnimatedBarProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="w-full overflow-hidden rounded-full"
      style={{ height, backgroundColor: trackColor }}
    >
      <motion.div
        className="h-full rounded-full"
        style={{ backgroundColor: color }}
        initial={{ width: reduceMotion ? `${percent}%` : '0%' }}
        whileInView={{ width: `${percent}%` }}
        viewport={{ once: true }}
        transition={{ duration: reduceMotion ? 0 : 0.55, ease: 'easeOut' }}
      />
    </div>
  );
}
