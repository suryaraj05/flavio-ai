const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';

async function postJson<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error((data as { message?: string }).message || 'Something went wrong. Please try again.');
  }
  return data as T;
}

export type PlanOnboardingPayload = {
  name: string;
  email: string;
  phone?: string;
  restaurantName: string;
  city: string;
  pincode: string;
  planName: string;
  planPriceLabel: string;
  isAnnualBilling: boolean;
  planFeatures: string[];
};

export type DemoBookingPayload = {
  name: string;
  email: string;
  restaurantName: string;
  demoDate: string;
  demoTime: string;
};

export function submitPlanOnboarding(payload: PlanOnboardingPayload) {
  return postJson<{ id: string; message: string }>('/public/plan-onboarding', payload);
}

export function submitDemoBooking(payload: DemoBookingPayload) {
  return postJson<{ id: string; message: string }>('/public/demo-booking', payload);
}
