/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RefreshCw, Minus, Plus, AlertTriangle, ShieldCheck, Database } from 'lucide-react';
import { INITIAL_MENU_ITEMS } from '../data';
import { MenuSyncItem } from '../types';

export default function InteractiveMenuSync() {
  const [items, setItems] = useState<MenuSyncItem[]>(INITIAL_MENU_ITEMS);
  const [isSyncing, setIsSyncing] = useState<boolean>(false);

  const updateStock = (id: string, amount: number) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newStock = Math.max(0, item.stock + amount);
          let newStatus: 'In Stock' | 'Low Stock' | 'Out of Stock' = 'In Stock';
          if (newStock === 0) newStatus = 'Out of Stock';
          else if (newStock <= 3) newStatus = 'Low Stock';

          return {
            ...item,
            stock: newStock,
            status: newStatus,
            lastSynced: 'Just now'
          };
        }
        return item;
      })
    );
  };

  const triggerManualSync = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      setItems((prev) =>
        prev.map((item) => ({
          ...item,
          lastSynced: 'Synced with POS just now'
        }))
      );
    }, 850);
  };

  // Find if any item is out of stock to show AI response
  const outOfStockItems = items.filter((item) => item.status === 'Out of Stock');

  return (
    <div className="w-full bg-white border border-outline-soft rounded-xl p-5 shadow-sm space-y-4">
      {/* Header Controls */}
      <div className="flex justify-between items-center pb-3 border-b border-outline-soft">
        <div className="flex items-center gap-2">
          <Database className="w-4.5 h-4.5 text-primary-forest" />
          <span className="font-serif text-sm font-bold text-primary-forest">Kitchen POS Sync</span>
        </div>
        <button
          onClick={triggerManualSync}
          disabled={isSyncing}
          className="text-[11px] font-mono hover:text-primary-forest text-outline-neutral flex items-center gap-1 bg-background-ivory px-2.5 py-1 rounded-full border border-outline-soft hover:bg-white transition-all cursor-pointer"
        >
          <RefreshCw className={`w-3 h-3 ${isSyncing ? 'animate-spin' : ''}`} />
          {isSyncing ? 'Syncing...' : 'Sync POS'}
        </button>
      </div>

      {/* Dynamic Alerts based on stock level */}
      <div className="min-h-[56px] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {outOfStockItems.length > 0 ? (
            <motion.div
              key="alert-state"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex gap-2.5 text-amber-800"
            >
              <AlertTriangle className="w-4.5 h-4.5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-[12px] leading-relaxed font-sans font-medium">
                <span className="font-bold">Flavio AI Active Redirect: </span>
                {outOfStockItems.map(item => item.name).join(', ')} is currently{' '}
                <span className="font-bold text-amber-900">Sold out</span>. Suggestions
                have been suppressed instantly across all servers' tablets to defend the kitchen menu.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="safe-state"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 flex gap-2.5 text-emerald-800"
            >
              <ShieldCheck className="w-4.5 h-4.5 text-emerald-600 shrink-0 mt-0.5" />
              <p className="text-[12px] leading-relaxed font-sans font-medium">
                <span className="font-bold">AI Stock Flow Stable:</span> All digital menu items are available in stock. Waitstaff prompts are optimized for high-margin push items.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Menu Stock Slider List */}
      <div className="space-y-2.5 font-sans">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-2.5 rounded-lg border border-outline-soft bg-background-ivory/50"
          >
            <div>
              <span className="text-xs font-serif font-bold text-primary-forest block">
                {item.name}
              </span>
              <span className="text-[10px] text-outline-neutral font-mono">{item.lastSynced}</span>
            </div>

            <div className="flex items-center gap-3">
              {/* Status Badge */}
              <span
                className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full ${
                  item.status === 'In Stock'
                    ? 'bg-emerald-100 text-emerald-800'
                    : item.status === 'Low Stock'
                    ? 'bg-amber-100 text-amber-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {item.status}
              </span>

              {/* Adjust Stock Controls */}
              <div className="flex items-center border border-outline-soft rounded-full bg-white bg-opacity-70">
                <button
                  type="button"
                  onClick={() => updateStock(item.id, -1)}
                  className="w-7 h-7 flex items-center justify-center text-outline-neutral hover:text-primary-forest hover:bg-background-ivory rounded-full transition-colors font-bold cursor-pointer"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-6 text-center text-xs font-mono font-bold text-primary-forest">
                  {item.stock}
                </span>
                <button
                  type="button"
                  onClick={() => updateStock(item.id, 1)}
                  className="w-7 h-7 flex items-center justify-center text-outline-neutral hover:text-primary-forest hover:bg-background-ivory rounded-full transition-colors font-bold cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
