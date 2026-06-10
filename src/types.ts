/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  priceMonthly: number;
  priceAnnualDiscounted: number;
  isPopular?: boolean;
  ctaText: string;
  features: string[];
}

export interface StepGuide {
  number: number;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export interface TabInsight {
  id: string;
  label: string;
  title: string;
  description: string;
  metric1Value: string;
  metric1Label: string;
  metric2Value: string;
  metric2Label: string;
  imageUrl: string;
  imageAlt: string;
}

export interface ServerBriefingCard {
  tableNumber: string;
  guestName: string;
  partySize: number;
  mainCourse: string;
  preferences: string[];
  winePairing: string;
  upsellHint: string;
  status: 'Ready' | 'In Progress' | 'Served';
}

export interface MenuSyncItem {
  id: string;
  name: string;
  stock: number;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
  lastSynced: string;
}
