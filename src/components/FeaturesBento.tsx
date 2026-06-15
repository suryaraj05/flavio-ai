import { QrCode, Sparkles, TrendingUp, Check } from 'lucide-react';
import { motion } from 'motion/react';
import guestQrFlow from '@/assets/guest-qr-flow.png';
import horizontalLiveMenu from '@/assets/horizontal-live-menu.png';

// Fixed bar heights so SSR and client match
const BAR_HEIGHTS = [32, 50, 41, 68, 57, 80, 72];

/**
 * Color concept — "A restaurant evening in three acts"
 *
 * Dark tier:  rust (#6B2215) → terracotta (#A85235) → near-black (#180A08)
 * Light tier: ivory (#F7EDE0) → white + gold accent → harvest cream (#EDD5BA)
 *
 * Each dark card is one shade warmer/deeper than the last.
 * Each light card responds with a matching warm tone.
 * Gold (#C4955A) is the unifying accent thread across all 6 cards.
 */

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

          {/* ── 1 · Tall left — Guest AI · RUST ───────────────────────── */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0 }}
            className="bento-card flex min-h-[400px] flex-col rounded-2xl bg-primary-forest p-6 text-white md:row-span-2"
          >
            <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-secondary-container-lime">
              <Sparkles className="h-5 w-5" />
            </span>
            <h3 className="font-serif text-2xl font-semibold leading-snug sm:text-[1.65rem]">
              Three questions. One perfect moment.
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">
              Mood, craving, and energy — captured before your menu loads.
            </p>
            <div className="relative mx-auto mt-6 flex w-full max-w-[240px] flex-1 items-end justify-center overflow-hidden rounded-2xl bg-white/10 p-2">
              <img
                src={guestQrFlow}
                alt="Flavio guest QR and table management flow"
                className="w-full rounded-xl object-contain shadow-lg"
                loading="lazy"
              />
            </div>
          </motion.article>

          {/* ── 2 · Wide top — Live Menu Sync · IVORY ────────────────── */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="bento-card flex min-h-[220px] flex-col rounded-2xl border border-outline-soft bg-background-ivory p-5 md:col-span-2 md:min-h-[240px] lg:flex-row lg:items-stretch lg:gap-6"
          >
            <div className="flex flex-1 items-stretch overflow-hidden rounded-xl border border-outline-soft bg-white shadow-sm">
              <img
                src={horizontalLiveMenu}
                alt="Flavio live menu and orders dashboard"
                className="h-full w-full min-h-[140px] object-cover object-left-top"
                loading="lazy"
              />
            </div>
            <div className="mt-5 flex flex-1 flex-col justify-center lg:mt-0 lg:max-w-[42%]">
              {/* Gold accent thread */}
              <span className="mb-2 inline-block h-0.5 w-6 rounded-full bg-secondary-container-lime" />
              <h3 className="font-serif text-xl font-semibold text-primary-forest sm:text-2xl">
                Live Menu Sync
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-on-surface-secondary">
                Sold-out dishes suppressed instantly across every server tablet — no calls, no confusion.
              </p>
            </div>
          </motion.article>

          {/* ── 3 · Middle center — Server Intelligence · TERRACOTTA ──── */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="bento-card flex min-h-[200px] flex-col rounded-2xl bg-secondary-sage p-5 text-white"
          >
            <h3 className="font-serif text-xl font-semibold">Server Intelligence</h3>
            <p className="mt-1 text-xs text-white/60">
              Personalised briefing to every server's handheld.
            </p>
            <div className="mt-4 space-y-2">
              <div className="rounded-xl bg-white/15 px-3 py-2.5">
                <p className="mb-1 font-mono text-[9px] uppercase tracking-wider text-white/40">
                  Table 12 · 4 guests
                </p>
                <p className="text-xs font-medium text-white">
                  Suggest: Seared Sea Bass with truffle butter
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-xl border border-white/15 bg-white/10 px-3 py-2.5">
                  <p className="mb-1 font-mono text-[9px] uppercase tracking-wider text-white/40">Tone</p>
                  <p className="text-[11px] text-white">Warm & celebratory</p>
                </div>
                {/* Gold upsell cell — the accent thread */}
                <div className="rounded-xl border border-secondary-container-lime/30 bg-secondary-container-lime/20 px-3 py-2.5">
                  <p className="mb-1 font-mono text-[9px] uppercase tracking-wider text-white/40">Upsell</p>
                  <p className="text-[11px] font-semibold text-secondary-container-lime">Asparagus side</p>
                </div>
              </div>
            </div>
          </motion.article>

          {/* ── 4 · Middle right — £340 stat · WHITE + GOLD ──────────── */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.24 }}
            className="bento-card flex min-h-[200px] flex-col rounded-2xl border border-secondary-container-lime/25 bg-white p-5"
          >
            <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-secondary-container-lime">
              Performance uplift
            </span>
            <p className="mt-2 font-serif text-4xl font-bold leading-none text-primary-dark">£340</p>
            <p className="mt-1 text-xs text-on-surface-secondary">avg monthly uplift per table</p>
            {/* Gold bar chart */}
            <div className="mt-auto pt-4">
              <div className="flex h-10 items-end gap-[3px]">
                {BAR_HEIGHTS.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{
                      height: `${h}%`,
                      backgroundColor:
                        i === BAR_HEIGHTS.length - 1
                          ? '#C4955A'
                          : 'rgba(196,149,90,0.22)',
                    }}
                  />
                ))}
              </div>
              <div className="mt-2.5 flex items-center gap-1.5">
                <TrendingUp className="h-3 w-3 text-secondary-container-lime" />
                <span className="font-mono text-[9px] font-bold text-secondary-container-lime">
                  +12% this month
                </span>
              </div>
            </div>
          </motion.article>

          {/* ── 5 · Wide bottom — QR Integration · NEAR-BLACK ────────── */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.32 }}
            className="bento-card flex min-h-[200px] flex-col rounded-2xl bg-primary-dark p-5 text-white md:col-span-2 lg:flex-row lg:items-center lg:justify-between lg:gap-8"
          >
            <div className="max-w-sm">
              <h3 className="font-serif text-xl font-semibold sm:text-2xl">
                Plugs Into Your Existing QR
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">
                No new hardware. AI sits invisibly over your current digital menu.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Any QR menu', 'POS connected', 'Zero hardware'].map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.07] px-3 py-1 text-[11px] text-white/70"
                  >
                    <Check className="h-3 w-3 shrink-0 text-secondary-container-lime" />
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            {/* Gold-on-dark widget — accent thread */}
            <div className="mt-5 flex shrink-0 items-center gap-4 rounded-2xl border border-secondary-container-lime/20 bg-secondary-container-lime/10 p-4 lg:mt-0">
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

          {/* ── 6 · Bottom right — ROI · HARVEST CREAM ───────────────── */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.4 }}
            className="bento-card flex min-h-[200px] flex-col rounded-2xl border border-[#D4B898] bg-[#EDD5BA] p-5"
          >
            <h3 className="font-serif text-xl font-semibold text-primary-dark">
              Track Your ROI
            </h3>
            <p className="mt-1 text-xs text-on-surface-secondary">
              Forecast uplift by table count and average cover.
            </p>
            <div className="mt-4 flex-1 overflow-hidden rounded-xl border border-[#D4B898] bg-white/70 shadow-sm backdrop-blur-sm">
              {[
                { label: 'Tables', value: '20' },
                { label: 'Avg Cover', value: '£65' },
                { label: 'Est. Monthly Uplift', value: '£6,800', highlight: true },
              ].map(({ label, value, highlight }, i) => (
                <div
                  key={label}
                  className={`flex items-center justify-between px-4 py-3 ${i < 2 ? 'border-b border-[#D4B898]/50' : ''} ${highlight ? 'bg-primary-forest/[0.06]' : ''}`}
                >
                  <span className="font-mono text-[9px] uppercase tracking-wider text-outline-neutral">
                    {label}
                  </span>
                  <span className={`font-serif text-lg font-bold ${highlight ? 'text-primary-forest' : 'text-primary-dark'}`}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </motion.article>

        </div>
      </div>
    </section>
  );
}
