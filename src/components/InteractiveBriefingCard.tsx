/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, Wine, Utensils, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';
import { SERVER_BRIEFINGS } from '../data';
import { ServerBriefingCard } from '../types';

export default function InteractiveBriefingCard() {
  const [selectedTableIdx, setSelectedTableIdx] = useState<number>(0);
  const currentCard = SERVER_BRIEFINGS[selectedTableIdx];

  return (
    <div className="w-full flex flex-col md:flex-row gap-6 items-stretch">
      {/* Table Selectors */}
      <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0 scroll-smooth md:w-1/3">
        {SERVER_BRIEFINGS.map((brief, idx) => (
          <button
            key={brief.tableNumber}
            onClick={() => setSelectedTableIdx(idx)}
            className={`flex-none text-left px-5 py-3.5 rounded-lg border transition-all duration-300 flex items-center justify-between gap-3 min-w-[120px] cursor-pointer ${
              selectedTableIdx === idx
                ? 'bg-secondary-container-lime border-secondary-sage text-primary-forest font-bold shadow-md shadow-primary-forest/5'
                : 'bg-white/10 border-white/20 text-white hover:bg-white/15'
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs opacity-75">T-</span>
              <span className="text-lg font-serif">{brief.tableNumber}</span>
            </div>
            <span
              className={`w-2 h-2 rounded-full ${
                brief.status === 'Ready'
                  ? 'bg-emerald-400'
                  : brief.status === 'In Progress'
                  ? 'bg-amber-400'
                  : 'bg-indigo-300'
              }`}
            />
          </button>
        ))}
      </div>

      {/* Dynamic Digital Briefing Card */}
      <div className="flex-1 bg-white/5 border border-white/25 rounded-xl p-6 relative overflow-hidden backdrop-blur-sm shadow-xl flex flex-col justify-between">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCard.tableNumber}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {/* Header Status */}
            <div className="flex justify-between items-center pb-3 border-b border-white/15">
              <span className="font-mono tracking-widest text-[10px] text-white/50 uppercase">
                Interactive Server Briefing
              </span>
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/15">
                <span className={`w-2 h-2 rounded-full ${
                  currentCard.status === 'Ready'
                    ? 'bg-emerald-400 animate-pulse'
                    : currentCard.status === 'In Progress'
                    ? 'bg-amber-400'
                    : 'bg-indigo-300'
                }`} />
                <span className="text-[11px] font-mono text-white/90 uppercase">
                  {currentCard.status}
                </span>
              </div>
            </div>

            {/* Guest Identifier */}
            <div>
              <div className="flex items-baseline gap-2">
                <h4 className="text-xl font-serif text-white font-medium">
                  {currentCard.guestName}
                </h4>
                <div className="flex items-center gap-1 text-white/60 font-sans text-xs bg-white/10 px-2 py-0.5 rounded">
                  <Users className="w-3 h-3" />
                  <span>{currentCard.partySize} covers</span>
                </div>
              </div>
              <p className="text-[11px] font-mono tracking-wider text-secondary-container-lime/90 mt-1 uppercase">
                Guest profile loaded via QR scan
              </p>
            </div>

            {/* Preferences / Allergies */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-white/50 block">Registered preferences:</span>
              <div className="flex flex-wrap gap-1.5">
                {currentCard.preferences.map((pref) => {
                  const isAllergy = pref.toLowerCase().includes('allergy') || pref.toLowerCase().includes('no ');
                  return (
                    <span
                      key={pref}
                      className={`text-xs px-2.5 py-1 rounded-full flex items-center gap-1.5 border ${
                        isAllergy
                          ? 'bg-red-950/40 text-red-300 border-red-800/40 font-semibold'
                          : 'bg-white/10 text-white border-white/10'
                      }`}
                    >
                      {isAllergy ? (
                        <AlertCircle className="w-3.5 h-3.5 shrink-0 text-red-400" />
                      ) : (
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-400" />
                      )}
                      {pref}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Food, Wine, Upselling Cues */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white/5 rounded-lg p-3.5 border border-white/5 flex gap-3">
                <Utensils className="w-5 h-5 text-secondary-container-lime shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white/50 block">Target course:</span>
                  <span className="text-sm font-sans font-medium text-white block">{currentCard.mainCourse}</span>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-3.5 border border-white/5 flex gap-3">
                <Wine className="w-5 h-5 text-secondary-container-lime shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white/50 block">AI Wine Pair suggestion:</span>
                  <span className="text-sm font-sans font-medium text-white block italic text-secondary-container-lime/95">
                    {currentCard.winePairing}
                  </span>
                </div>
              </div>
            </div>

            {/* Smart Upsell Banner */}
            <div className="bg-secondary-container-lime/10 border border-secondary-container-lime/30 rounded-lg p-4 flex gap-3 text-white/90">
              <Sparkles className="w-5 h-5 text-secondary-container-lime shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-secondary-container-lime font-bold block mb-1">
                  Waitstaff Prompt & Cue
                </span>
                <p className="text-xs text-white leading-relaxed font-sans font-medium">
                  "{currentCard.upsellHint}"
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Action Button */}
        <div className="mt-4 pt-3 text-[11px] font-sans text-center text-white/40 border-t border-white/5">
          Give feedback: Tap another table above to refresh Flavio's AI recommendations
        </div>
      </div>
    </div>
  );
}
