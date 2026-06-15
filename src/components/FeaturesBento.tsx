import { QrCode, Sparkles, TrendingUp, Check } from 'lucide-react';
import { motion } from 'motion/react';
import guestQrFlow from '@/assets/guest-qr-flow.png';
import horizontalLiveMenu from '@/assets/horizontal-live-menu.png';

const BAR_HEIGHTS = [32, 50, 41, 68, 57, 80, 72];

const ROI_ROWS = [
  { label: 'Tables', value: '20' },
  { label: 'Avg Cover', value: '£65' },
  { label: 'Est. Monthly Uplift', value: '£6,800', highlight: true },
];

/** Shared spring config for card hover lift */
const CARD_SPRING = { type: 'spring' as const, stiffness: 380, damping: 28 };

export default function FeaturesBento() {
  return (
    <section className="bg-white py-20 md:py-28" id="features">
      <div className="mx-auto max-w-6xl px-5 md:px-10 lg:px-16">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-secondary-sage md:text-xs">
            Core Intelligence
          </p>
          <h2 className="mt-4 max-w-3xl font-serif text-3xl font-semibold leading-tight text-primary-forest md:text-4xl lg:text-[2.75rem]">
            Powerful features and clear insights for smarter operations
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-[auto_auto_auto]">

          {/* ── 1 · Tall left — Guest AI
              Base: near-black · Glow: rust from bottom-left ──────── */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0 }}
            whileHover={{ y: -6, transition: CARD_SPRING }}
            className="group flex min-h-[400px] flex-col overflow-hidden rounded-2xl p-6 text-white md:row-span-2 cursor-default"
            style={{
              background:
                'radial-gradient(ellipse at 15% 90%, rgba(107,34,21,0.85) 0%, #180A08 58%)',
              boxShadow: '0 4px 24px rgba(24,10,8,0.18)',
            }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-secondary-container-lime"
            >
              <Sparkles className="h-5 w-5" />
            </motion.span>

            <h3 className="font-serif text-2xl font-semibold leading-snug sm:text-[1.65rem]">
              Three questions. One perfect moment.
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/55">
              Mood, craving, and energy — captured before your menu loads.
            </p>

            <div className="relative mx-auto mt-6 flex w-full max-w-[240px] flex-1 items-end justify-center overflow-hidden rounded-2xl bg-white/10 p-2">
              <img
                src={guestQrFlow}
                alt="Flavio guest QR and table management flow"
                className="w-full rounded-xl object-contain shadow-lg transition-transform duration-700 group-hover:scale-[1.04]"
                loading="lazy"
              />
            </div>
          </motion.article>

          {/* ── 2 · Wide top — Live Menu Sync
              Base: ivory · Clean image + text layout ────────────── */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            whileHover={{ y: -6, transition: CARD_SPRING }}
            className="group flex min-h-[220px] flex-col overflow-hidden rounded-2xl border border-outline-soft bg-background-ivory p-5 md:col-span-2 md:min-h-[240px] lg:flex-row lg:items-stretch lg:gap-5 cursor-default"
            style={{ boxShadow: '0 2px 12px rgba(24,10,8,0.06)' }}
          >
            <div className="flex flex-1 items-stretch overflow-hidden rounded-xl border border-outline-soft bg-white shadow-sm">
              <img
                src={horizontalLiveMenu}
                alt="Flavio live menu and orders dashboard"
                className="h-full w-full min-h-[140px] object-cover object-left-top transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <div className="mt-5 flex flex-1 flex-col justify-center lg:mt-0 lg:max-w-[42%]">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 24 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="mb-3 block h-0.5 rounded-full bg-secondary-container-lime"
              />
              <h3 className="font-serif text-xl font-semibold text-primary-forest sm:text-2xl">
                Live Menu Sync
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-on-surface-secondary">
                Sold-out dishes suppressed instantly across every server tablet — no calls, no confusion.
              </p>
            </div>
          </motion.article>

          {/* ── 3 · Middle center — Server Intelligence
              Base: near-black · Glow: terracotta from top-right ─── */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.16 }}
            whileHover={{ y: -6, transition: CARD_SPRING }}
            className="flex min-h-[200px] flex-col overflow-hidden rounded-2xl p-5 text-white cursor-default"
            style={{
              background:
                'radial-gradient(ellipse at 85% 10%, rgba(168,82,53,0.75) 0%, #180A08 58%)',
              boxShadow: '0 4px 24px rgba(24,10,8,0.18)',
            }}
          >
            <h3 className="font-serif text-xl font-semibold">Server Intelligence</h3>
            <p className="mt-1 text-xs text-white/55">
              Personalised briefing to every server's handheld.
            </p>

            {/* Briefing rows — staggered slide-in */}
            <div className="mt-4 space-y-2">
              <motion.div
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.28 }}
                className="rounded-xl bg-white/12 px-3 py-2.5 ring-1 ring-white/10"
              >
                <p className="mb-1 font-mono text-[9px] uppercase tracking-wider text-white/35">
                  Table 12 · 4 guests
                </p>
                <p className="text-xs font-medium text-white">
                  Suggest: Seared Sea Bass with truffle butter
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.42 }}
                className="grid grid-cols-2 gap-2"
              >
                <div className="rounded-xl bg-white/10 px-3 py-2.5 ring-1 ring-white/10">
                  <p className="mb-1 font-mono text-[9px] uppercase tracking-wider text-white/35">Tone</p>
                  <p className="text-[11px] text-white/90">Warm & celebratory</p>
                </div>
                <div className="rounded-xl bg-secondary-container-lime/15 px-3 py-2.5 ring-1 ring-secondary-container-lime/25">
                  <p className="mb-1 font-mono text-[9px] uppercase tracking-wider text-white/35">Upsell</p>
                  <p className="text-[11px] font-semibold text-secondary-container-lime">Asparagus side</p>
                </div>
              </motion.div>
            </div>
          </motion.article>

          {/* ── 4 · Middle right — £340 stat
              Base: white · Gold accent bar chart ────────────────── */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.24 }}
            whileHover={{ y: -6, transition: CARD_SPRING }}
            className="flex min-h-[200px] flex-col overflow-hidden rounded-2xl border border-outline-soft bg-white p-5 cursor-default"
            style={{
              boxShadow: '0 2px 12px rgba(24,10,8,0.06)',
              background: 'linear-gradient(160deg, #ffffff 60%, rgba(196,149,90,0.06) 100%)',
            }}
          >
            <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-secondary-container-lime">
              Performance uplift
            </span>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2, type: 'spring', stiffness: 300 }}
              className="mt-2 font-serif text-4xl font-bold leading-none text-primary-dark"
            >
              £340
            </motion.p>
            <p className="mt-1 text-xs text-on-surface-secondary">avg monthly uplift per table</p>

            {/* Animated gold bar chart */}
            <div className="mt-auto pt-4">
              <div className="flex h-10 items-end gap-[3px]">
                {BAR_HEIGHTS.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.3 + i * 0.055, ease: 'easeOut' }}
                    className="flex-1 rounded-sm"
                    style={{
                      backgroundColor:
                        i === BAR_HEIGHTS.length - 1
                          ? '#C4955A'
                          : 'rgba(196,149,90,0.22)',
                    }}
                  />
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.75 }}
                className="mt-2.5 flex items-center gap-1.5"
              >
                <TrendingUp className="h-3 w-3 text-secondary-container-lime" />
                <span className="font-mono text-[9px] font-bold text-secondary-container-lime">
                  +12% this month
                </span>
              </motion.div>
            </div>
          </motion.article>

          {/* ── 5 · Wide bottom — QR Integration
              Base: near-black · Glow: rust sweep from right ──────── */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.32 }}
            whileHover={{ y: -6, transition: CARD_SPRING }}
            className="group flex min-h-[200px] flex-col overflow-hidden rounded-2xl p-5 text-white md:col-span-2 lg:flex-row lg:items-center lg:justify-between lg:gap-8 cursor-default"
            style={{
              background:
                'linear-gradient(115deg, #180A08 45%, rgba(107,34,21,0.6) 100%)',
              boxShadow: '0 4px 24px rgba(24,10,8,0.22)',
            }}
          >
            <div className="max-w-sm">
              <h3 className="font-serif text-xl font-semibold sm:text-2xl">
                Plugs Into Your Existing QR
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">
                No new hardware. AI sits invisibly over your current digital menu.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Any QR menu', 'POS connected', 'Zero hardware'].map((badge, i) => (
                  <motion.span
                    key={badge}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.35 + i * 0.1 }}
                    whileHover={{ backgroundColor: 'rgba(255,255,255,0.12)', transition: { duration: 0.15 } }}
                    className="inline-flex cursor-default items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.07] px-3 py-1 text-[11px] text-white/70"
                  >
                    <Check className="h-3 w-3 shrink-0 text-secondary-container-lime" />
                    {badge}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Gold-on-dark status widget */}
            <div className="mt-5 flex shrink-0 items-center gap-4 rounded-2xl border border-secondary-container-lime/20 bg-secondary-container-lime/10 p-4 transition-colors duration-200 hover:bg-secondary-container-lime/15 lg:mt-0">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary-container-lime/20 text-secondary-container-lime">
                <QrCode className="h-5 w-5" />
              </span>
              <div>
                <p className="font-serif text-base font-semibold text-secondary-container-lime">
                  POS layer active
                </p>
                <div className="mt-1 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-secondary-container-lime" />
                  <p className="text-xs text-white/40">Live feedback loop</p>
                </div>
              </div>
            </div>
          </motion.article>

          {/* ── 6 · Bottom right — ROI
              Base: ivory · Metric table with stagger ────────────── */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.4 }}
            whileHover={{ y: -6, transition: CARD_SPRING }}
            className="flex min-h-[200px] flex-col overflow-hidden rounded-2xl border border-outline-soft bg-background-ivory p-5 cursor-default"
            style={{ boxShadow: '0 2px 12px rgba(24,10,8,0.06)' }}
          >
            <h3 className="font-serif text-xl font-semibold text-primary-dark">
              Track Your ROI
            </h3>
            <p className="mt-1 text-xs text-on-surface-secondary">
              Forecast uplift by table count and average cover.
            </p>

            <div className="mt-4 flex-1 overflow-hidden rounded-xl border border-outline-soft bg-white shadow-sm">
              {ROI_ROWS.map(({ label, value, highlight }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                  className={`flex items-center justify-between px-4 py-3 transition-colors duration-150 hover:bg-primary-forest/[0.04] ${
                    i < 2 ? 'border-b border-outline-soft' : ''
                  } ${highlight ? 'bg-primary-forest/[0.03]' : ''}`}
                >
                  <span className="font-mono text-[9px] uppercase tracking-wider text-outline-neutral">
                    {label}
                  </span>
                  <span
                    className={`font-serif text-lg font-bold ${
                      highlight ? 'text-primary-forest' : 'text-primary-dark'
                    }`}
                  >
                    {value}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.article>

        </div>
      </div>
    </section>
  );
}
