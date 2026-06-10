import { QrCode, Sparkles } from 'lucide-react';
import guestQrFlow from '@/assets/guest-qr-flow.png';
import horizontalLiveMenu from '@/assets/horizontal-live-menu.png';

function DarkPlaceholder({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl border border-dashed border-white/25 bg-white/5 text-center text-xs font-medium text-white/45 ${className}`}
      aria-hidden
    >
      {label}
    </div>
  );
}

function LightPlaceholder({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl border border-dashed border-outline-soft bg-white/70 text-center text-xs font-medium text-outline-neutral ${className}`}
      aria-hidden
    >
      {label}
    </div>
  );
}

export default function FeaturesBento() {
  return (
    <section className="bg-white py-24" id="features">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <p className="text-center font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-secondary-sage md:text-xs">
          Core Intelligence
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-center font-serif text-3xl font-semibold leading-tight text-primary-forest md:text-4xl lg:text-[2.75rem]">
          Powerful features and clear insights for smarter operations
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-[auto_auto_auto]">
          {/* 1 · Tall left */}
          <article className="bento-card flex min-h-[380px] flex-col bg-primary-forest p-6 text-white md:row-span-2">
            <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-secondary-container-lime">
              <Sparkles className="h-5 w-5" />
            </span>
            <h3 className="font-serif text-2xl font-semibold leading-snug sm:text-3xl">
              Three questions. One perfect moment.
            </h3>
            <p className="mt-2 text-sm text-white/65">
              Mood, craving, and energy — captured before your menu loads.
            </p>
            <div className="relative mx-auto mt-6 flex w-full max-w-[260px] flex-1 items-end justify-center overflow-hidden rounded-2xl bg-white/10 p-2">
              <img
                src={guestQrFlow}
                alt="Flavio guest QR and table management flow"
                className="w-full rounded-xl object-contain shadow-lg"
                loading="lazy"
              />
            </div>
          </article>

          {/* 2 · Wide top */}
          <article className="bento-card flex min-h-[220px] flex-col bg-background-ivory border border-outline-soft p-6 md:col-span-2 md:min-h-[260px] lg:flex-row lg:items-stretch lg:gap-8">
            <div className="flex flex-1 items-stretch overflow-hidden rounded-2xl border border-outline-soft bg-white shadow-sm">
              <img
                src={horizontalLiveMenu}
                alt="Flavio live menu and orders dashboard"
                className="h-full w-full min-h-[160px] object-cover object-left-top"
                loading="lazy"
              />
            </div>
            <div className="mt-6 flex flex-1 flex-col justify-center lg:mt-0 lg:max-w-[45%]">
              <h3 className="font-serif text-2xl font-semibold text-primary-forest sm:text-3xl">
                Live Menu Sync
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-on-surface-secondary">
                Sold-out dishes are suppressed instantly across every server tablet.
              </p>
            </div>
          </article>

          {/* 3 · Middle center */}
          <article className="bento-card flex min-h-[200px] flex-col bg-primary-forest p-6 text-white lg:flex-row lg:items-center lg:gap-6">
            <div className="flex-1">
              <h3 className="font-serif text-xl font-semibold sm:text-2xl">Server Intelligence</h3>
              <p className="mt-2 text-sm text-white/65">
                Dish, tone, and one complimentary touch — on your team&apos;s phone.
              </p>
            </div>
            <div className="mt-4 flex flex-1 flex-col gap-2 sm:mt-0">
              <DarkPlaceholder label="Dish to suggest" className="min-h-[64px]" />
              <DarkPlaceholder label="Tone & personal touch" className="min-h-[64px]" />
            </div>
          </article>

          {/* 4 · Middle right */}
          <article className="bento-card flex min-h-[200px] flex-col items-center justify-center border border-outline-soft bg-background-ivory p-6 text-center">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-secondary-sage">
              Performance uplift
            </span>
            <p className="mt-2 font-serif text-4xl font-bold text-primary-forest">£340</p>
            <p className="mt-1 max-w-[180px] text-sm text-on-surface-secondary">
              average monthly uplift per table
            </p>
            <div className="mt-5 flex -space-x-2">
              {['#fcd34d', '#86efac', '#f9a8d4', '#93c5fd', '#c4b5fd'].map((c, i) => (
                <span
                  key={i}
                  className="h-9 w-9 rounded-full border-2 border-background-ivory"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </article>

          {/* 5 · Wide bottom */}
          <article className="bento-card flex min-h-[200px] flex-col bg-primary-forest p-6 text-white md:col-span-2 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <div className="max-w-md">
              <h3 className="font-serif text-xl font-semibold sm:text-2xl">Plugs Into Existing QR</h3>
              <p className="mt-2 text-sm text-white/65">
                No new hardware. AI sits invisibly over your current digital menu.
              </p>
            </div>
            <div className="mt-6 flex shrink-0 items-center gap-4 rounded-2xl bg-primary-dark/80 p-5 lg:mt-0">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-secondary-container-lime">
                <QrCode className="h-6 w-6" />
              </span>
              <div>
                <p className="font-serif text-lg font-semibold">POS layer active</p>
                <p className="text-xs text-white/55">Live feedback loop</p>
              </div>
            </div>
          </article>

          {/* 6 · Bottom right */}
          <article className="bento-card flex min-h-[200px] flex-col border border-outline-soft bg-background-ivory p-6 lg:flex-row lg:items-center lg:gap-6">
            <div className="flex-1">
              <h3 className="font-serif text-xl font-semibold text-primary-forest sm:text-2xl">
                Track Your ROI With Ease
              </h3>
              <p className="mt-2 text-sm text-on-surface-secondary">
                Forecast uplift by tables and average cover spend.
              </p>
            </div>
            <div className="mt-4 flex flex-1 items-center justify-center lg:mt-0">
              <div className="rounded-2xl border border-outline-soft bg-white p-4 shadow-sm">
                <p className="text-xs text-outline-neutral">Est. monthly uplift</p>
                <p className="mt-1 font-serif text-2xl font-bold text-primary-forest">£6,800</p>
                <p className="mt-1 text-[10px] text-emerald-700">20 tables · £65 avg cover</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
