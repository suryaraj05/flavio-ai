/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, CheckCircle2, Clock, GlassWater, ArrowRight, Sparkles } from 'lucide-react';

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookDemoModal({ isOpen, onClose }: BookDemoModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    restaurant: '',
    covers: '100-300',
    tableCount: '1-10'
  });
  const [submitted, setSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState('Monday, June 8');
  const [selectedTime, setSelectedTime] = useState('11:00 AM BST');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.restaurant) return;
    setSubmitted(true);
  };

  const dates = ['Monday, June 8', 'Tuesday, June 9', 'Wednesday, June 10'];
  const times = ['10:00 AM BST', '11:00 AM BST', '2:00 PM BST', '4:00 PM BST'];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-primary-dark/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative bg-background-ivory w-full max-w-lg rounded-xl overflow-hidden shadow-2xl border border-outline-soft z-10"
          >
            {/* Header branding */}
            <div className="bg-primary-forest text-white p-6 relative">
              <button
                type="button"
                onClick={onClose}
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <span className="text-[10px] font-mono tracking-widest text-secondary-container-lime uppercase">
                Private Consultation
              </span>
              <h3 className="text-2xl font-serif mt-1 font-semibold">
                Schedule a Flavio AI Demo
              </h3>
              <p className="text-white/80 text-xs font-sans mt-1">
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
                      <label className="block font-bold text-primary-forest uppercase tracking-wider text-[10px]">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sir Marcus Vance"
                        className="w-full bg-white border border-outline-soft rounded px-3 py-2 text-xs focus:ring-1 focus:ring-primary-forest outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block font-bold text-primary-forest uppercase tracking-wider text-[10px]">
                        Work Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. marcus@theivyrestaurants.co.uk"
                        className="w-full bg-white border border-outline-soft rounded px-3 py-2 text-xs focus:ring-1 focus:ring-primary-forest outline-none transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="block font-bold text-primary-forest uppercase tracking-wider text-[10px]">
                          Restaurant Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.restaurant}
                          onChange={(e) => setFormData({ ...formData, restaurant: e.target.value })}
                          placeholder="e.g. The Ivy London"
                          className="w-full bg-white border border-outline-soft rounded px-3 py-2 text-xs focus:ring-1 focus:ring-primary-forest outline-none transition-all"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="block font-bold text-primary-forest uppercase tracking-wider text-[10px]">
                          Number of Tables
                        </label>
                        <select
                          value={formData.tableCount}
                          onChange={(e) => setFormData({ ...formData, tableCount: e.target.value })}
                          className="w-full bg-white border border-outline-soft rounded px-3 py-2 text-xs focus:ring-1 focus:ring-primary-forest outline-none transition-all"
                        >
                          <option value="1-10">1 – 10 tables</option>
                          <option value="11-20">11 – 20 tables</option>
                          <option value="21-30">21 – 30 tables</option>
                          <option value="30+">30+ tables</option>
                        </select>
                      </div>
                    </div>

                    {/* Date picker mock */}
                    <div className="space-y-1">
                      <label className="block font-bold text-primary-forest uppercase tracking-wider text-[10px] mb-1">
                        Select Demo Date (BST)
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {dates.map((d) => (
                          <button
                            type="button"
                            key={d}
                            onClick={() => setSelectedDate(d)}
                            className={`py-2 px-1 text-center rounded border transition-colors cursor-pointer ${
                              selectedDate === d
                                ? 'bg-primary-forest text-white border-primary-forest font-bold'
                                : 'bg-white border-outline-soft hover:bg-background-ivory text-on-surface-dark'
                            }`}
                          >
                            <Calendar className="w-3.5 h-3.5 mx-auto mb-1 opacity-70" />
                            <span className="text-[9px] block whitespace-nowrap">{d}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Time picker mock */}
                    <div className="space-y-1">
                      <label className="block font-bold text-primary-forest uppercase tracking-wider text-[10px] mb-1">
                        Select Slot Time
                      </label>
                      <div className="grid grid-cols-4 gap-2">
                        {times.map((t) => (
                          <button
                            type="button"
                            key={t}
                            onClick={() => setSelectedTime(t)}
                            className={`py-1.5 px-0.5 text-center rounded border transition-colors cursor-pointer ${
                              selectedTime === t
                                ? 'bg-primary-forest text-white border-primary-forest font-bold'
                                : 'bg-white border-outline-soft hover:bg-background-ivory text-on-surface-dark'
                            }`}
                          >
                            <Clock className="w-3 h-3 mx-auto mb-0.5 opacity-60" />
                            <span className="text-[9px] block pr-0.5 select-none">{t}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-secondary-sage text-white py-3 rounded-full font-bold text-sm tracking-wider hover:bg-primary-forest transition-colors flex items-center justify-center gap-2 cursor-pointer mt-2"
                    >
                      <span>Secure Invitation</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-view"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 space-y-5"
                  >
                    <div className="w-16 h-16 bg-secondary-container-lime rounded-full flex items-center justify-center text-primary-forest mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xl font-serif font-bold text-primary-forest">
                        Invitation Booked Flawlessly!
                      </h4>
                      <p className="text-xs text-on-surface-secondary max-w-sm mx-auto leading-relaxed">
                        A calendar confirmation and calendar link has been dispatched to{' '}
                        <span className="font-bold text-primary-forest">{formData.email}</span> for{' '}
                        <span className="font-bold text-primary-forest">{selectedDate}</span> at{' '}
                        <span className="font-bold text-primary-forest">{selectedTime}</span>.
                      </p>
                    </div>

                    <div className="bg-background-ivory p-4 rounded border border-outline-soft text-left text-xs space-y-1 max-w-xs mx-auto">
                      <div className="flex items-center gap-1.5 font-bold text-primary-forest mb-1">
                        <Sparkles className="w-3.5 h-3.5 text-secondary-sage" />
                        <span>Flavio Briefing Confirmed</span>
                      </div>
                      <p className="text-on-surface-secondary text-[11px]">
                        <strong>Host:</strong> Alistair Macleod (Lead Restaurateur Architect)
                      </p>
                      <p className="text-on-surface-secondary text-[11px]">
                        <strong>Format:</strong> 15-minute video sync & demo platform view.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        onClose();
                      }}
                      className="bg-primary-forest text-white px-8 py-2.5 rounded-full font-bold hover:bg-secondary-sage transition-all mt-4 cursor-pointer"
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
