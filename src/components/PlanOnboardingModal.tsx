import { useEffect, useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ArrowRight, Sparkles, Check } from 'lucide-react';
import type { PricingPlan } from '../types';

type PlanOnboardingModalProps = {
  isOpen: boolean;
  onClose: () => void;
  plan: PricingPlan | null;
  isAnnualBilling: boolean;
};

const EMPTY_FORM = {
  name: '',
  email: '',
  phone: '',
  restaurant: '',
  city: '',
  pincode: '',
};

export default function PlanOnboardingModal({
  isOpen,
  onClose,
  plan,
  isAnnualBilling,
}: PlanOnboardingModalProps) {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setFormData(EMPTY_FORM);
      setSubmitted(false);
    }
  }, [isOpen]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.restaurant || !formData.city || !formData.pincode) {
      return;
    }
    setSubmitted(true);
  };

  const planPriceLabel = (() => {
    if (!plan) return '';
    if (plan.isCustom) return 'Custom pricing';
    const price = isAnnualBilling ? plan.priceAnnualDiscounted : plan.priceMonthly;
    const formatted = Math.ceil(price);
    return `£${formatted}/month${isAnnualBilling ? ' · billed annually' : ''}`;
  })();

  return (
    <AnimatePresence>
      {isOpen && plan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-primary-dark/70 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-xl border border-outline-soft bg-background-ivory shadow-2xl"
          >
            <div className="relative bg-primary-forest p-6 text-white">
              <button
                type="button"
                onClick={onClose}
                className="absolute right-6 top-6 cursor-pointer text-white/70 transition-colors hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
              <span className="font-mono text-[10px] uppercase tracking-widest text-secondary-container-lime">
                Plan onboarding
              </span>
              <h3 className="mt-1 font-serif text-2xl font-semibold">Start with Flavio AI</h3>
              <p className="mt-1 font-sans text-xs text-white/80">
                Tell us about your restaurant and we&apos;ll get your account set up.
              </p>
            </div>

            <div className="p-6">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="plan-form"
                    onSubmit={handleSubmit}
                    className="space-y-4 font-sans text-xs text-on-surface-dark"
                  >
                    <div className="rounded-lg border border-outline-soft bg-white px-4 py-3">
                      <p className="font-mono text-[9px] font-bold uppercase tracking-wider text-outline-neutral">
                        Selected plan
                      </p>
                      <p className="mt-1 font-serif text-lg font-bold text-primary-forest">{plan.name}</p>
                      <p className="text-[11px] text-on-surface-secondary">{plan.description}</p>
                      <p className="mt-1 font-mono text-[10px] font-bold text-secondary-sage">{planPriceLabel}</p>
                      <ul className="mt-3 space-y-2 border-t border-outline-soft pt-3">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-[11px] text-on-surface-dark">
                            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-secondary-sage" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-primary-forest">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sir Marcus Vance"
                        className="w-full rounded border border-outline-soft bg-white px-3 py-2 text-xs outline-none transition-all focus:ring-1 focus:ring-primary-forest"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-primary-forest">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. marcus@theivyrestaurants.co.uk"
                        className="w-full rounded border border-outline-soft bg-white px-3 py-2 text-xs outline-none transition-all focus:ring-1 focus:ring-primary-forest"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-primary-forest">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +44 7700 900123"
                        className="w-full rounded border border-outline-soft bg-white px-3 py-2 text-xs outline-none transition-all focus:ring-1 focus:ring-primary-forest"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="col-span-2 space-y-1">
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-primary-forest">
                          Restaurant Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.restaurant}
                          onChange={(e) => setFormData({ ...formData, restaurant: e.target.value })}
                          placeholder="e.g. The Ivy London"
                          className="w-full rounded border border-outline-soft bg-white px-3 py-2 text-xs outline-none transition-all focus:ring-1 focus:ring-primary-forest"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-primary-forest">
                          City *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          placeholder="e.g. London"
                          className="w-full rounded border border-outline-soft bg-white px-3 py-2 text-xs outline-none transition-all focus:ring-1 focus:ring-primary-forest"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-primary-forest">
                          Pincode *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.pincode}
                          onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                          placeholder="e.g. SW1A 1AA"
                          className="w-full rounded border border-outline-soft bg-white px-3 py-2 text-xs outline-none transition-all focus:ring-1 focus:ring-primary-forest"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="mt-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-secondary-sage py-3 text-sm font-bold tracking-wider text-white transition-colors hover:bg-primary-forest"
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="plan-success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-5 py-8 text-center"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary-container-lime text-primary-forest">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-serif text-xl font-bold text-primary-forest">
                        You&apos;re on the list!
                      </h4>
                      <p className="mx-auto max-w-sm text-xs leading-relaxed text-on-surface-secondary">
                        We&apos;ve received your request for the{' '}
                        <span className="font-bold text-primary-forest">{plan.name}</span> plan. A
                        confirmation will be sent to{' '}
                        <span className="font-bold text-primary-forest">{formData.email}</span>.
                      </p>
                    </div>

                    <div className="mx-auto max-w-xs space-y-1 rounded border border-outline-soft bg-background-ivory p-4 text-left text-xs">
                      <div className="mb-1 flex items-center gap-1.5 font-bold text-primary-forest">
                        <Sparkles className="h-3.5 w-3.5 text-secondary-sage" />
                        <span>What happens next</span>
                      </div>
                      <p className="text-[11px] text-on-surface-secondary">
                        Our team will review your details and reach out within one business day to
                        complete onboarding.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={onClose}
                      className="mt-4 cursor-pointer rounded-full bg-primary-forest px-8 py-2.5 font-bold text-white transition-all hover:bg-secondary-sage"
                    >
                      Done
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
