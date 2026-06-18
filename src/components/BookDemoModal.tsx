/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ArrowRight, Sparkles, Loader2 } from 'lucide-react';
import { submitDemoBooking } from '../lib/api';

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EMPTY_FORM = {
  name: '',
  email: '',
  restaurant: '',
};

function todayIsoDate() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function formatDisplayDate(isoDate: string) {
  const d = new Date(`${isoDate}T12:00:00`);
  return d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
}

function formatDisplayTime(time24: string) {
  const [h, m] = time24.split(':').map(Number);
  if (Number.isNaN(h) || Number.isNaN(m)) return time24;
  const period = h >= 12 ? 'PM' : 'AM';
  const hour12 = h % 12 || 12;
  return `${hour12}:${String(m).padStart(2, '0')} ${period} BST`;
}

export default function BookDemoModal({ isOpen, onClose }: BookDemoModalProps) {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [demoDate, setDemoDate] = useState('');
  const [demoTime, setDemoTime] = useState('11:00');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const minDate = useMemo(() => todayIsoDate(), []);

  useEffect(() => {
    if (!isOpen) {
      setFormData(EMPTY_FORM);
      setDemoDate('');
      setDemoTime('11:00');
      setSubmitted(false);
      setSubmitting(false);
      setError('');
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.restaurant || !demoDate || !demoTime) return;

    setSubmitting(true);
    setError('');
    try {
      await submitDemoBooking({
        name: formData.name,
        email: formData.email,
        restaurantName: formData.restaurant,
        demoDate,
        demoTime,
      });
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to book demo');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
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
                Private Consultation
              </span>
              <h3 className="mt-1 font-serif text-2xl font-semibold">Schedule a Flavio AI Demo</h3>
              <p className="mt-1 font-sans text-xs text-white/80">
                See how top-tier UK restaurant groups uplift revenue across multi-venue footprints.
              </p>
            </div>

            <div className="p-6">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form-view"
                    onSubmit={handleSubmit}
                    className="space-y-4 font-sans text-xs text-on-surface-dark"
                  >
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
                        Work Email Address *
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

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div className="space-y-1">
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-primary-forest">
                          Demo Date (BST) *
                        </label>
                        <input
                          type="date"
                          required
                          min={minDate}
                          value={demoDate}
                          onChange={(e) => setDemoDate(e.target.value)}
                          className="w-full rounded border border-outline-soft bg-white px-3 py-2 text-xs outline-none transition-all focus:ring-1 focus:ring-primary-forest"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-primary-forest">
                          Demo Time (BST) *
                        </label>
                        <input
                          type="time"
                          required
                          min="09:00"
                          max="17:00"
                          step="900"
                          value={demoTime}
                          onChange={(e) => setDemoTime(e.target.value)}
                          className="w-full rounded border border-outline-soft bg-white px-3 py-2 text-xs outline-none transition-all focus:ring-1 focus:ring-primary-forest"
                        />
                      </div>
                    </div>

                    {error && <p className="text-[11px] font-medium text-red-600">{error}</p>}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="mt-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-secondary-sage py-3 text-sm font-bold tracking-wider text-white transition-colors hover:bg-primary-forest disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>Booking...</span>
                        </>
                      ) : (
                        <>
                          <span>Secure Invitation</span>
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-view"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-5 py-8 text-center"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary-container-lime text-primary-forest">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-serif text-xl font-bold text-primary-forest">
                        Invitation Booked Flawlessly!
                      </h4>
                      <p className="mx-auto max-w-sm text-xs leading-relaxed text-on-surface-secondary">
                        We&apos;ve received your demo request for{' '}
                        <span className="font-bold text-primary-forest">{formatDisplayDate(demoDate)}</span> at{' '}
                        <span className="font-bold text-primary-forest">{formatDisplayTime(demoTime)}</span>.
                        A confirmation will be sent to{' '}
                        <span className="font-bold text-primary-forest">{formData.email}</span>.
                      </p>
                    </div>

                    <div className="mx-auto max-w-xs space-y-1 rounded border border-outline-soft bg-background-ivory p-4 text-left text-xs">
                      <div className="mb-1 flex items-center gap-1.5 font-bold text-primary-forest">
                        <Sparkles className="h-3.5 w-3.5 text-secondary-sage" />
                        <span>Flavio Briefing Confirmed</span>
                      </div>
                      <p className="text-[11px] text-on-surface-secondary">
                        Our team will reach out within one business day to confirm your slot.
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
