/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PricingPlan, StepGuide, TabInsight, ServerBriefingCard, MenuSyncItem } from './types';

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'essential',
    name: 'Essential',
    description: 'Perfect for single boutique venues',
    priceMonthly: 49,
    priceAnnualDiscounted: 39,
    ctaText: 'Get Started Free',
    features: [
      'Up to 500 covers/mo',
      'Basic upselling recommendations',
      'Standard guest preference capture',
      'Daily performance digest via email',
      'Standard analytics dashboard'
    ]
  },
  {
    id: 'growth',
    name: 'Growth',
    description: 'For serious high-growth hospitality groups',
    priceMonthly: 120,
    priceAnnualDiscounted: 96,
    isPopular: true,
    ctaText: 'Start 14-Day Free Trial',
    features: [
      'Unlimited cover tracking',
      'Advanced AI guest profiling & segments',
      'Real-time server digital briefing cards',
      'Multi-device waitstaff integration',
      'Live menu sync with custom inventory alerts',
      'Weekly automated ROI reporting'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For high-volume multi-location chains',
    priceMonthly: 499,
    priceAnnualDiscounted: 399,
    ctaText: 'Contact Sales',
    features: [
      'Multi-location regional management',
      'Custom API & POS custom legacy integration',
      'Custom machine learning models per brand',
      'SLA-backed priority support',
      'Dedicated account manager',
      'On-site staff training sessions'
    ]
  }
];

export const STEP_GUIDES: StepGuide[] = [
  {
    number: 1,
    title: 'Link Your Menu',
    description: 'Sync your existing POS and QR menu in under 5 minutes. No technical or engineering team required.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgMTBBF5Xi-FNQBCR0OVJ0a_i85zuJw0ToQqd9LrbtSjR36qSAnIhMYMjrI68BveSoqNG6tTRUXERyeQkeHcSFZ_5RpanIoyyWKKGwcwCLmgga28KDnQKj6n4vWefzwqc94YfSJM5bXTLi8zrnzw1Wwh2Fx6mlNaS1I4-YxOIINtQo4Cj2HFUaBZuRLyL5K7Q0n5J174rzFqdPObMHY8fFf9AfjEEt5TzuDsJAXpTEHbvgAhj5Ptoa3Xwy-yHM93Zci59aqKzZbA',
    imageAlt: 'Restaurateur linking menu data seamlessly on a premium laptop layout'
  },
  {
    number: 2,
    title: 'Guests Share Tastes',
    description: 'As guests browse your digital menu on their phones, Flavio gently captures preference details to tailors suggestions.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlQaeYyxF6EOqZOSjBKzgesRJev14NWyuwjZFOUk_9SAyGtrer_bo3uZNp2wWQKIw4al2ERTUGKLrMF-6SZNW7ah_62lYJdiTbcHaBV7Wc1AeGOi4SPCvV4Udv7TbDH6JzQN5p02tWT-PSFPfUAxtM3wGy50Svb3xwtWp-_EiFwKR0ro58XHH4pEzbfaOMRrKJpFMio6qVwDzPJ0RH3xLJXSfyiWPUh70s2LD3RZrYyxs9kz33JZGOvYH1mXq8r2-aZsd2L8HbeQ',
    imageAlt: 'Polished smartphone interface showing sensory taste preference options'
  },
  {
    number: 3,
    title: 'AI Powers Service',
    description: 'Your floor staff receives instant, highly accurate upselling briefs on their handhelds, growing covers organically.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATJDm81zsoQYduiB8xOSez4oP-UooHYdNWpeH3qmv_FC28Vw0xAHQ6gUjFFY6iJCT89TXME2AXnCekIX13kVgV-tkhmPkyxWh4JFYgGTjHLxN4f7bfT0dGmIn6s4S7NMShKe9fBNUvQAfMwgaSqFf48PEkx2PcasqSs6p8lIARXkNahF-YEpDBJm8cLR3ln-AEx6Ghf0MxFBtMepWyW_LjewKx1TQCvW6G4bXgLgl49uBFXKygXzmd3MPRyVQakaFArCNoj9IiRw',
    imageAlt: 'Waitstaff reviewing a smart briefing table recommendation on the server view'
  }
];

export const TAB_INSIGHTS: TabInsight[] = [
  {
    id: 'revenue',
    label: 'Revenue',
    title: 'Connect your financial accounts',
    description: "Securely connect your bank accounts, cards, and POS terminals to access a unified overview of your restaurant's financial heartbeat, tracking peak hourly traffic and profit margins.",
    metric1Value: '12%',
    metric1Label: 'Average Revenue Increase',
    metric2Value: '£2.4k',
    metric2Label: 'Avg Monthly Table Uplift',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUs9S6HWa7BVgYeeMSpH5iOF7GjmJTBtIpNKpT0DOzpuZeKQ43me862JcpZ76KjBJ4iJLvDvoL6uHCTrR87ubv0NyaigHUEyzF0UoABqA_rDh5qHqygw1oNOdDSYXly6vkiYcx2cadZoAqSXz_flltGqy68FJ_QehZPYvGer1L8PhNXDCCAr-FI78YmPDudRuucya0c3R5qrQ7TDT4OSGSpwdsvpMBfp6ubIH8QyTZw6xi-kdwXmfHTQgo_FtIatUBBWqRuVgtlw',
    imageAlt: 'Unified dashboard showcasing weekly restaurant revenue uplifts and interactive ROI visualizations'
  },
  {
    id: 'retention',
    label: 'Retention',
    title: 'Understand guest behavior & loyalty',
    description: 'Determine which guests return and why. Monitor customer frequency, preferred seating areas, favorite ingredients, and loyalty rates automatically without complex card systems.',
    metric1Value: '28%',
    metric1Label: 'More Return Visits',
    metric2Value: '4.2x',
    metric2Label: 'Higher Lifetime Value',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Waitstaff interacting with returning regular customers in a high-end setup'
  },
  {
    id: 'operations',
    label: 'Operations',
    title: 'Optimize kitchen flow & stock levels',
    description: 'Eliminate waste and reduce prep times: our predictive AI maps incoming guest trends to preemptively manage inventory, syncing directly with the POS to limit service friction.',
    metric1Value: '18%',
    metric1Label: 'Decrease in Food Waste',
    metric2Value: '15m',
    metric2Label: 'Average Table Wait Reduction',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Highly efficient kitchen brigade cooking to precise demand forecasts'
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
