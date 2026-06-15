import { motion, type MotionStyle } from 'motion/react';
import phoneBlank from '@/assets/phone-blank.png';
import { PHONE_SCREEN_INSETS } from '@/data/insightsDemo';
import InsightsPhoneDemo from './insights/InsightsPhoneDemo';

type HeroPhoneMockupProps = {
  variant?: 'desktop' | 'mobile';
  style?: MotionStyle;
  className?: string;
  initial?: { opacity?: number; x?: number; y?: number };
  animate?: { opacity?: number; x?: number; y?: number };
  transition?: { duration?: number; delay?: number; ease?: string };
};

export default function HeroPhoneMockup({
  variant = 'desktop',
  style,
  className = '',
  initial,
  animate,
  transition,
}: HeroPhoneMockupProps) {
  const isDesktop = variant === 'desktop';

  const sizeClass = isDesktop
    ? 'h-[min(94vh,920px)] max-h-[920px] w-auto'
    : 'h-auto w-full max-w-[300px]';

  return (
    <motion.div
      style={style}
      initial={initial}
      animate={animate}
      transition={transition}
      className={`relative inline-block ${className}`}
    >
      {/* Hand + phone body — behind the demo */}
      <img
        src={phoneBlank}
        alt=""
        aria-hidden
        className={`relative z-0 block ${sizeClass} pointer-events-none select-none object-contain object-bottom drop-shadow-2xl ${isDesktop ? 'origin-bottom-right' : ''}`}
        draggable={false}
      />

      {/* Interactive demo — in front, held by the hand */}
      <div
        className="absolute z-10"
        style={{
          top: PHONE_SCREEN_INSETS.top,
          left: PHONE_SCREEN_INSETS.left,
          width: PHONE_SCREEN_INSETS.width,
          height: PHONE_SCREEN_INSETS.height,
        }}
        role="application"
        aria-label="Flavio Insights interactive demo"
      >
        <div className="relative h-full w-full">
          <div className="relative flex h-full flex-col overflow-hidden rounded-[1.1rem] border-[2.5px] border-[#1a1a1c] bg-[#0a0a0a] shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset,0_10px_36px_rgba(0,0,0,0.55)]">
            {/* Dynamic Island */}
            <div
              className="pointer-events-none absolute left-1/2 top-[5px] z-20 h-[4px] w-[26%] min-w-[20px] max-w-[34px] -translate-x-1/2 rounded-full bg-black ring-1 ring-white/[0.05]"
              aria-hidden
            />

            <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-[0.9rem] bg-[#F8FAFC]">
              <InsightsPhoneDemo />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
