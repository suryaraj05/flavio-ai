/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PricingPlan, StepGuide, TabInsight, ServerBriefingCard, MenuSyncItem } from './types';
import step01 from '@/assets/steps/step-01.png';
import step02 from '@/assets/steps/step-02.png';
import step03 from '@/assets/steps/step-03.png';

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'ai-basic',
    name: 'AI Basic',
    description: 'Small independent venues',
    priceMonthly: 15,
    priceAnnualDiscounted: 12,
    ctaText: 'Claim 3 Months Free',
    features: [
      'Up to 10 tables',
      '1 restaurant location',
      'Email support'
    ]
  },
  {
    id: 'ai-medium',
    name: 'AI Medium',
    description: 'Growing single-site restaurants',
    priceMonthly: 25,
    priceAnnualDiscounted: 20,
    isPopular: true,
    ctaText: 'Claim 3 Months Free',
    features: [
      'Up to 20 tables',
      'Up to 3 restaurant locations',
      'Priority email & chat support'
    ]
  },
  {
    id: 'ai-advanced',
    name: 'AI Advanced',
    description: 'Established large-format venues',
    priceMonthly: 35,
    priceAnnualDiscounted: 28,
    ctaText: 'Claim 3 Months Free',
    features: [
      'Up to 30 tables',
      'Up to 5 restaurant locations',
      'Dedicated account manager'
    ]
  },
  {
    id: 'custom',
    name: 'Custom',
    description: 'Franchises & multi-site chains',
    priceMonthly: 0,
    priceAnnualDiscounted: 0,
    isCustom: true,
    ctaText: 'Talk to Our Team',
    features: [
      'Unlimited tables',
      'Unlimited franchise locations',
      'SLA-backed priority support'
    ]
  }
];

export const STEP_GUIDES: StepGuide[] = [
  {
    number: 1,
    tagline: '2-minute setup',
    title: 'Register and link your menu',
    description: 'Connect your existing QR menu or POS in minutes — no dev team, no hardware, no disruption. Live from the very first scan.',
    imageUrl: step01,
    imageAlt: 'Flavio dashboard on laptop and mobile — restaurant overview with orders and insights'
  },
  {
    number: 2,
    tagline: 'No app. No friction.',
    title: 'Guests scan, share mood, and order',
    description: 'Few quick questions — mood, craving, energy — answered before the menu loads. Invisible to guests, invaluable to your team.',
    imageUrl: step02,
    imageAlt: 'Guest scanning QR and selecting mood on smartphone at restaurant table'
  },
  {
    number: 3,
    tagline: 'Real-time, table by table',
    title: 'AI briefs your floor team instantly',
    description: 'Staff receive a personalised card on their handheld: the right dish, the right tone, one precision upsell — for that exact guest, right now.',
    imageUrl: step03,
    imageAlt: 'Waiter reviewing AI guest insight card with table briefing on handheld device'
  }
];

export const TAB_INSIGHTS: TabInsight[] = [
  {
    id: 'revenue',
    label: 'AI Guest Analysis',
    title: 'The first AI that reads your guest before they order',
    description: "Flavio's AI reads each guest's mood and cravings at the exact moment they browse your digital menu. Your floor team receives a precision upsell briefing before taking the order — driving incremental revenue per cover without pressure, scripts, or guesswork.",
    metric1Value: '+18%',
    metric1Label: 'Average Uplift Per Cover',
    metric2Value: '£340',
    metric2Label: 'Avg Monthly Per Table',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUs9S6HWa7BVgYeeMSpH5iOF7GjmJTBtIpNKpT0DOzpuZeKQ43me862JcpZ76KjBJ4iJLvDvoL6uHCTrR87ubv0NyaigHUEyzF0UoABqA_rDh5qHqygw1oNOdDSYXly6vkiYcx2cadZoAqSXz_flltGqy68FJ_QehZPYvGer1L8PhNXDCCAr-FI78YmPDudRuucya0c3R5qrQ7TDT4OSGSpwdsvpMBfp6ubIH8QyTZw6xi-kdwXmfHTQgo_FtIatUBBWqRuVgtlw',
    imageAlt: 'Flavio revenue uplift dashboard showing weekly upsell performance across tables'
  },
  {
    id: 'guest-insights',
    label: 'Guest Insights',
    title: 'Know your guests before they even order',
    description: 'Every scan builds a richer profile — dietary preferences, mood patterns, flavour affinities, and spending tendencies. Your team walks to each table already briefed, turning first-time visitors into regulars and regulars into advocates.',
    metric1Value: '28%',
    metric1Label: 'More Return Visits',
    metric2Value: '4.2x',
    metric2Label: 'Higher Guest Lifetime Value',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Restaurant team reviewing guest preference data on a tablet during service prep'
  },
  {
    id: 'operations',
    label: 'Operations',
    title: 'Seamless service from menu link to table',
    description: 'Live menu sync suppresses sold-out dishes across every server device the instant stock runs out. AI-driven demand forecasting reduces kitchen waste and prep time, so your team delivers every service with clarity, confidence, and zero scrambling.',
    metric1Value: '18%',
    metric1Label: 'Reduction in Food Waste',
    metric2Value: '15 min',
    metric2Label: 'Avg Wait Time Saved Per Table',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Efficient kitchen and floor service running with AI-powered menu and staff coordination'
  }
];

export const SERVER_BRIEFINGS: ServerBriefingCard[] = [
  {
    tableNumber: '12',
    guestName: 'Lady Beatrice Cavendish',
    partySize: 4,
    mainCourse: 'Seared Wild Sea Bass',
    preferences: ['Gluten-Free', 'High acidity sauces', 'Allergy: Walnuts'],
    winePairing: 'Puligny-Montrachet 1er Cru',
    upsellHint: 'Suggest the Truffle Butter Glazed Asparagus spears side and recommend the dairy-free Sorbet Selection.',
    status: 'Ready'
  },
  {
    tableNumber: '7',
    guestName: 'Richard Sterling',
    partySize: 2,
    mainCourse: 'Dry-Aged Tomahawk Steak',
    preferences: ['Medium-Rare', 'Enjoys mature Cabernet Sauvignon', 'No garlic of any kind'],
    winePairing: 'Château Margaux 2012',
    upsellHint: 'Propose pairing with the bone marrow sauce and the triple-cooked hand-cut beef fat chips.',
    status: 'In Progress'
  },
  {
    tableNumber: '4',
    guestName: 'Julian & Claire Vance',
    partySize: 2,
    mainCourse: 'Fresh Truffle Rigatoni',
    preferences: ['Vegan options only', 'No mushrooms for Claire', 'Likes crisp floral whites'],
    winePairing: 'San Vincenzo Garganega Blanco',
    upsellHint: 'Upsell the hand-pressed Sicilian Olive starter and suggest the vegan Meyer lemon curd dessert.',
    status: 'Ready'
  },
  {
    tableNumber: '18',
    guestName: 'The Hargreaves Party',
    partySize: 6,
    mainCourse: 'Roasted Gressingham Duck Breast',
    preferences: ['Celebrating 10th anniversary', 'Preference for berry reductions', 'Loves vintage Champagne'],
    winePairing: 'Dom Pérignon Vintage 2015',
    upsellHint: 'Offer congratulations, push the premium Heritage Port wine flight to cap the evening.',
    status: 'Served'
  }
];

export const INITIAL_MENU_ITEMS: MenuSyncItem[] = [
  {
    id: 'item-1',
    name: 'Seared Wild Sea Bass',
    stock: 14,
    status: 'In Stock',
    lastSynced: '2 mins ago'
  },
  {
    id: 'item-2',
    name: 'Château Margaux 2012',
    stock: 2,
    status: 'Low Stock',
    lastSynced: 'Just now'
  },
  {
    id: 'item-3',
    name: 'Fresh Truffle Rigatoni',
    stock: 0,
    status: 'Out of Stock',
    lastSynced: '5 mins ago'
  },
  {
    id: 'item-4',
    name: 'Truffle Glazed Asparagus',
    stock: 25,
    status: 'In Stock',
    lastSynced: '10 mins ago'
  }
];
