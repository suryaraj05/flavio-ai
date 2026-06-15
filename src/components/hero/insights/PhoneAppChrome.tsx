import type { ReactNode, WheelEvent } from 'react';
import {
  LayoutGrid,
  User,
  UtensilsCrossed,
  QrCode,
  Brain,
  ClipboardList,
  MessageSquare,
  LogOut,
} from 'lucide-react';
import { motion } from 'motion/react';
import { BOTTOM_NAV_ITEMS } from '@/data/insightsDemo';

const ICONS = {
  grid: LayoutGrid,
  user: User,
  utensils: UtensilsCrossed,
  qr: QrCode,
  brain: Brain,
  clipboard: ClipboardList,
  message: MessageSquare,
} as const;

const SPRING = { type: 'spring' as const, stiffness: 420, damping: 32 };

type PhoneAppChromeProps = {
  activeNav: string;
  onNavChange: (id: string) => void;
  children: ReactNode;
};

export default function PhoneAppChrome({ activeNav, onNavChange, children }: PhoneAppChromeProps) {
  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div className="flex h-full min-h-0 flex-col bg-[#F8FAFC] font-sans text-[#1E293B]">
      <header className="flex shrink-0 items-center justify-between border-b border-slate-100 bg-white px-2.5 py-2">
        <div className="flex items-center gap-1.5">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#2563EB]">
            <UtensilsCrossed className="h-3 w-3 text-white" strokeWidth={2.5} />
          </span>
          <span className="text-[11px] font-bold text-[#1E293B]">Flavio</span>
        </div>
        <div className="flex items-center gap-2 text-[8px] text-slate-400">
          <span>Dashboard</span>
          <span className="flex items-center gap-0.5">
            <LogOut className="h-2.5 w-2.5" />
            Logout
          </span>
        </div>
      </header>

      <div
        data-phone-scroll
        onWheel={handleWheel}
        className="phone-scroll no-scrollbar min-h-0 flex-1 overflow-y-auto overscroll-y-contain"
      >
        {children}
      </div>

      <nav className="flex shrink-0 items-center justify-between border-t border-slate-100 bg-white px-1 py-1.5">
        {BOTTOM_NAV_ITEMS.map(({ id, label, icon }) => {
          const Icon = ICONS[icon];
          const isActive = activeNav === id;
          return (
            <motion.button
              key={id}
              type="button"
              onClick={() => onNavChange(id)}
              whileHover={{ scale: 1.08, y: -1 }}
              whileTap={{ scale: 0.9 }}
              transition={SPRING}
              className="flex flex-1 flex-col items-center gap-0.5 px-0.5"
            >
              <Icon
                className={`h-3.5 w-3.5 transition-colors duration-200 ${isActive ? 'text-[#2563EB]' : 'text-slate-400'}`}
                strokeWidth={isActive ? 2.25 : 1.75}
              />
              <span
                className={`text-[6px] leading-none transition-colors duration-200 ${isActive ? 'font-semibold text-[#2563EB]' : 'text-slate-400'}`}
              >
                {label}
              </span>
            </motion.button>
          );
        })}
      </nav>
    </div>
  );
}
