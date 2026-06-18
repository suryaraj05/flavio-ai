import { motion, type MotionStyle } from 'motion/react';
import phoneBlank from '@/assets/phone-blank.png';
import {
  PHONE_SCREEN_INSETS,
  PHONE_SCREEN_INSETS_MOBILE,
} from '@/data/insightsDemo';
import InsightsPhoneDemo from './insights/InsightsPhoneDemo';

/** Set true when re-enabling the in-phone interactive demo */
const SHOW_INTERACTIVE_DEMO = false;

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
  const insets = isDesktop ? PHONE_SCREEN_INSETS : PHONE_SCREEN_INSETS_MOBILE;

  const sizeClass = isDesktop
    ? 'h-[min(96vh,980px)] w-auto max-w-none translate-y-[7%]'
    : 'h-auto w-full max-w-[280px]';

  return (
    <motion.div
      style={style}
      initial={initial}
      animate={animate}
      transition={transition}
      className={`relative flex h-full items-end justify-end ${className}`}
    >
      {/* Hand + phone body — behind the demo */}
      <img
        src={phoneBlank}
        alt=""
        aria-hidden
        className={`relative z-0 block ${sizeClass} pointer-events-none select-none object-bottom drop-shadow-2xl`}
        draggable={false}
      />

      {/* Interactive demo — hidden for now; phone-blank.png is shown alone */}
      {SHOW_INTERACTIVE_DEMO && (
      <div
        className="absolute z-10 overflow-hidden"
        style={{
          top: insets.top,
          left: insets.left,
          width: insets.width,
          height: insets.height,
        }}
        role="application"
        aria-label="Tavora Bites Insights interactive demo"
      >
        <div className="relative box-border h-full w-full">
          <div
            className={`relative box-border flex h-full w-full flex-col overflow-hidden bg-[#000000] shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset] ${
              isDesktop
                ? 'rounded-[1.05rem] border-[2px] border-[#000000]'
                : 'rounded-[0.8rem] border border-[#000000]'
            }`}
          >
            {/* Dynamic Island */}
            <div
              className="pointer-events-none absolute left-1/2 top-[4px] z-20 h-[3px] w-[24%] min-w-[18px] max-w-[30px] -translate-x-1/2 rounded-full bg-black ring-1 ring-white/[0.04]"
              aria-hidden
            />

            <div
              className={`relative box-border flex min-h-0 flex-1 flex-col overflow-hidden bg-[#F8FAFC] ${
                isDesktop ? 'rounded-[0.88rem]' : 'rounded-[0.68rem]'
              }`}
            >
              <InsightsPhoneDemo />
            </div>
          </div>
        </div>
      </div>
      )}
    </motion.div>
  );
}
