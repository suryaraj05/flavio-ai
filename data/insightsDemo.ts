export type MoodSegment = {
  label: string;
  count: number;
  color: string;
};

export type RoleInsight = {
  role: 'Chef' | 'Manager' | 'Waiter';
  emoji: string;
  text: string;
};

export type DateAccordionEntry = {
  id: string;
  date: string;
  insightCount: number;
  summary?: string;
};

export type SurveyOption = {
  label: string;
  count: number;
  percent: number;
};

export type SurveyQuestion = {
  id: string;
  number: number;
  question: string;
  totalResponses: number;
  color: string;
  barColor: string;
  options: SurveyOption[];
};

export const MOOD_SEGMENTS: MoodSegment[] = [
  { label: 'Need care', count: 7, color: '#E11D48' },
  { label: 'Together', count: 4, color: '#F59E0B' },
  { label: 'Quick bite', count: 3, color: '#64748B' },
  { label: 'Food Lover', count: 1, color: '#F97316' },
  { label: 'Need a break', count: 1, color: '#334155' },
];

export const MOOD_BREAKDOWN_ORDER = [
  'Need care',
  'Together',
  'Quick bite',
  'Food Lover',
  'Need a break',
] as const;

export const FILTER_PILLS = ['All', 'Together', 'Quick bite', 'Food Lover'] as const;

export const TODAY_INSIGHT = {
  table: 'Table 4',
  tag: 'Food Lover',
  timeAgo: '5 hours ago',
  timestamp: 'Mon, Jun 15, 4:44 PM',
  guestProfile:
    'This person is settling in for some quiet personal time with an eye toward wholesome flavors.',
  chefNote:
    'The guest ordered Fish & Chips. Prioritise getting these dishes out hot, well-seasoned, and properly portioned — adjust prep timing for the full order.',
};

export const ROLE_INSIGHTS: RoleInsight[] = [
  {
    role: 'Chef',
    emoji: '👨‍🍳',
    text: TODAY_INSIGHT.chefNote,
  },
  {
    role: 'Manager',
    emoji: '👤',
    text: 'Confirm all menu items meet plant-based standards and alert staff to any ingredient questions from the table.',
  },
  {
    role: 'Waiter',
    emoji: '✋',
    text: 'Suggest options emphasizing fresh produce and subtle sweets while checking in gently on any adjustments needed.',
  },
];

export const DATE_ACCORDIONS: DateAccordionEntry[] = [
  { id: 'jun-6', date: 'Saturday, Jun 6, 2026', insightCount: 1, summary: 'Table 2 served Fish & Chips — kitchen timing aligned.' },
  { id: 'jun-4', date: 'Thursday, Jun 4, 2026', insightCount: 1, summary: 'Celebration table flagged for dessert upsell.' },
  { id: 'may-25', date: 'Monday, May 25, 2026', insightCount: 2, summary: 'Two tables requested gluten-free alternatives.' },
  { id: 'may-20', date: 'Tuesday, May 20, 2026', insightCount: 1, summary: 'Quick bite segment peaked at lunch service.' },
  { id: 'may-19', date: 'Monday, May 19, 2026', insightCount: 1, summary: 'Guest mood mix shifted toward comfort food.' },
  { id: 'may-5', date: 'Monday, May 5, 2026', insightCount: 1, summary: 'Server briefing improved cover time by 8%.' },
  { id: 'apr-25', date: 'Saturday, Apr 25, 2026', insightCount: 1, summary: 'Weekend rush — need care segment elevated.' },
  { id: 'apr-19', date: 'Sunday, Apr 19, 2026', insightCount: 1, summary: 'Sunday roast upsell performed above average.' },
  { id: 'apr-16', date: 'Thursday, Apr 16, 2026', insightCount: 1, summary: 'New QR flow captured 12 mood check-ins.' },
];

export const SURVEY_QUESTIONS: SurveyQuestion[] = [
  {
    id: 'q1',
    number: 1,
    question: 'What best describes you right now?',
    totalResponses: 13,
    color: '#3B82F6',
    barColor: '#93C5FD',
    options: [
      { label: 'Drained', count: 4, percent: 31 },
      { label: 'Restless', count: 3, percent: 23 },
      { label: 'Cheerful', count: 3, percent: 23 },
      { label: 'Indifferent', count: 2, percent: 15 },
      { label: 'Calm', count: 1, percent: 8 },
    ],
  },
  {
    id: 'q2',
    number: 2,
    question: 'How has your day been?',
    totalResponses: 13,
    color: '#16A34A',
    barColor: '#86EFAC',
    options: [
      { label: 'Normal Day', count: 5, percent: 38 },
      { label: 'Tough Day', count: 5, percent: 38 },
      { label: 'Long Day', count: 2, percent: 15 },
      { label: 'Special Day', count: 1, percent: 8 },
    ],
  },
  {
    id: 'q3',
    number: 3,
    question: 'How charged are you?',
    totalResponses: 16,
    color: '#D97706',
    barColor: '#FCD34D',
    options: [
      { label: 'Medium', count: 8, percent: 50 },
      { label: 'Low', count: 4, percent: 25 },
      { label: 'High', count: 4, percent: 25 },
    ],
  },
  {
    id: 'q4',
    number: 4,
    question: 'How many are you?',
    totalResponses: 2,
    color: '#1E293B',
    barColor: '#64748B',
    options: [
      { label: '2', count: 1, percent: 50 },
      { label: 'Solo', count: 1, percent: 50 },
    ],
  },
  {
    id: 'q5',
    number: 5,
    question: "What's the occasion?",
    totalResponses: 16,
    color: '#0D9488',
    barColor: '#5EEAD4',
    options: [
      { label: 'Casual', count: 11, percent: 69 },
      { label: 'Date', count: 3, percent: 19 },
      { label: 'Celebration', count: 2, percent: 13 },
    ],
  },
  {
    id: 'q6',
    number: 6,
    question: 'What sounds good right now?',
    totalResponses: 16,
    color: '#EA580C',
    barColor: '#FDBA74',
    options: [
      { label: 'Sweet', count: 5, percent: 31 },
      { label: 'Comfort Food', count: 4, percent: 25 },
      { label: 'Spicy', count: 4, percent: 25 },
      { label: 'Savory', count: 1, percent: 6 },
      { label: 'Light', count: 1, percent: 6 },
      { label: 'Heavy', count: 1, percent: 6 },
    ],
  },
  {
    id: 'q7',
    number: 7,
    question: 'Dietary preference?',
    totalResponses: 16,
    color: '#475569',
    barColor: '#94A3B8',
    options: [
      { label: 'Vegetarian', count: 7, percent: 44 },
      { label: 'Vegan', count: 4, percent: 25 },
      { label: 'None', count: 3, percent: 19 },
      { label: 'Gluten Free', count: 2, percent: 13 },
    ],
  },
];

export const BOTTOM_NAV_ITEMS = [
  { id: 'overview', label: 'Overview', icon: 'grid' },
  { id: 'profile', label: 'Profile', icon: 'user' },
  { id: 'menu', label: 'Menu', icon: 'utensils' },
  { id: 'tables', label: 'Tables & QR', icon: 'qr' },
  { id: 'insights', label: 'Insights', icon: 'brain' },
  { id: 'orders', label: 'Orders', icon: 'clipboard' },
  { id: 'feedback', label: 'Feedback', icon: 'message' },
] as const;

export const DEMO_RESTAURANT_NAME = 'Tavora Bites';

export const PHONE_SCREEN_INSETS = {
  top: '15.33%',
  left: '17.44%',
  width: '44.87%',
  height: '67.19%',
  radius: '1.15rem',
} as const;

/** Tighter fit for hero mobile — keeps UI inside the phone frame */
export const PHONE_SCREEN_INSETS_MOBILE = {
  top: '16.6%',
  left: '19.2%',
  width: '42.4%',
  height: '64.8%',
  radius: '0.85rem',
} as const;
