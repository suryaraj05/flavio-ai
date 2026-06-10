/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Calculator, ShieldCheck, Coins } from 'lucide-react';

export default function ROISimulator() {
  const [tables, setTables] = useState<number>(20);
  const [averageCheck, setAverageCheck] = useState<number>(65);

  const baseUpliftPerTable = 340; // in £GBP
  // Uplift scales with table count and average customer spend relative to baseline spent of £65
  const spendMultiplier = averageCheck / 65;
  const estimatedMonthlyUplift = Math.round(tables * baseUpliftPerTable * spendMultiplier);
  const estimatedAnnualUplift = estimatedMonthlyUplift * 12;

  // Compare with subscription cost - e.g. Growth planar (£120/mo) * 12 = £1,440
  const annualCost = 120 * 12;
  const netProfit = Math.max(0, estimatedAnnualUplift - annualCost);
  const roiMultiplier = annualCost > 0 ? (estimatedAnnualUplift / annualCost).toFixed(1) : '24.5';

  return (
    <div className="w-full bg-primary-dark/95 text-white rounded-xl p-5 border border-white/10 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-white/15">
        <div className="flex items-center gap-2">
          <Calculator className="w-4 h-4 text-emerald-400" />
          <span className="font-serif text-sm font-bold tracking-tight text-white/95">
            ROI Forecast Calculator
          </span>
        </div>
        <div className="bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1">
          <TrendingUp className="w-3 h-3" />
          Estimate
        </div>
      </div>

      {/* Control Sliders */}
      <div className="space-y-4 font-sans text-xs">
        {/* Tables count */}
        <div className="space-y-1.5 animate-fade-in">
          <div className="flex justify-between">
            <span className="text-white/60 font-medium">Number of Active Tables:</span>
            <span className="font-mono text-secondary-container-lime font-bold text-sm">
              {tables} Tables
            </span>
          </div>
          <input
            type="range"
            min="5"
            max="120"
            step="5"
            value={tables}
            onChange={(e) => setTables(Number(e.target.value))}
            className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-emerald-400"
          />
          <div className="flex justify-between text-[9px] text-white/45 font-mono">
            <span>5 tables</span>
            <span>120 tables</span>
          </div>
        </div>

        {/* Avg Check count */}
        <div className="space-y-1.5">
          <div className="flex justify-between">
            <span className="text-white/60 font-medium">Avg Cover Bill Spend:</span>
            <span className="font-mono text-secondary-container-lime font-bold text-sm">
              £{averageCheck}
            </span>
          </div>
          <input
            type="range"
            min="20"
            max="180"
            step="5"
            value={averageCheck}
            onChange={(e) => setAverageCheck(Number(e.target.value))}
            className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-emerald-400"
          />
          <div className="flex justify-between text-[9px] text-white/45 font-mono">
            <span>£20 base</span>
            <span>£180 high-end</span>
          </div>
        </div>
      </div>

      {/* outputs metrics bar */}
      <div className="bg-white/5 border border-white/5 rounded-lg p-3.5 space-y-3">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="text-[10px] font-mono tracking-wider text-white/40 uppercase block mb-0.5">
              Est. Monthly Uplift
            </span>
            <span className="font-serif text-2xl font-bold text-emerald-300">
              £{estimatedMonthlyUplift.toLocaleString()}
            </span>
          </div>
          <div>
            <span className="text-[10px] font-mono tracking-wider text-white/40 uppercase block mb-0.5">
              Est. Annual Uplift
            </span>
            <span className="font-serif text-2xl font-bold text-emerald-300">
              £{estimatedAnnualUplift.toLocaleString()}
            </span>
          </div>
        </div>

        {/* ROI comparison */}
        <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] text-white/80">
          <div className="flex items-center gap-1.5">
            <Coins className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              Return multiplier:{' '}
              <span className="text-emerald-400 font-mono font-bold">{roiMultiplier}x</span>
            </span>
          </div>
          <span className="text-emerald-300/80 font-mono text-[10px]">
            Net profit £{netProfit.toLocaleString()}/yr
          </span>
        </div>
      </div>

      {/* Tiny disclaimer */}
      <p className="text-[10px] text-white/35 font-sans leading-tight text-center">
        *Based on real trials of the Growth tier (£120/mo subscription). Actual returns may vary slightly by seasonality.
      </p>
    </div>
  );
}
