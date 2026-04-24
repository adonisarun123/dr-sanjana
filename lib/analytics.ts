/**
 * Analytics layer for Health Nest.
 *
 * Single entry point for every event we send to Google Ads / GA4 / GTM.
 * Pushes to `window.dataLayer` (so a future GTM container would Just Work)
 * AND calls `window.gtag('event', ...)` so the events flow into all
 * destinations the gtag.js loader is configured with.
 *
 * Configuration via NEXT_PUBLIC_* env vars (so they're inlined at build time
 * and available on the client):
 *
 *   NEXT_PUBLIC_GADS_ID                       Google Ads tag ID. Default: AW-18058250699
 *   NEXT_PUBLIC_GADS_CONVERSION_LABEL         Conversion label for the "Lead" (form) action.
 *                                              Get from Google Ads → Tools → Conversions →
 *                                              New conversion (Lead). Looks like: AbC1dEf2gHi3
 *   NEXT_PUBLIC_GADS_PHONE_CONVERSION_LABEL   Conversion label for "Phone clicks" action.
 *                                              Create a separate conversion action of type
 *                                              "Phone calls → Calls from a website" (or
 *                                              "Clicks on your number on a mobile website").
 *   NEXT_PUBLIC_GADS_PHONE_FORWARDING_NUMBER  E.164 number to enable Google Forwarding
 *                                              Number (Dynamic Number Insertion). When set,
 *                                              this number is replaced on-page with a
 *                                              Google-issued tracking number for Ads visitors,
 *                                              and qualified call duration is reported back.
 *                                              Example: "+919449031003"
 *   NEXT_PUBLIC_GA4_ID                        Optional GA4 measurement ID (G-XXXXXXX).
 *                                              When set, page_view + custom events also
 *                                              flow to GA4.
 */

export const GADS_ID =
  process.env.NEXT_PUBLIC_GADS_ID || 'AW-18058250699';
export const GADS_CONVERSION_LABEL =
  process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL || '';
export const GADS_PHONE_CONVERSION_LABEL =
  process.env.NEXT_PUBLIC_GADS_PHONE_CONVERSION_LABEL || '';
export const GADS_PHONE_FORWARDING_NUMBER =
  process.env.NEXT_PUBLIC_GADS_PHONE_FORWARDING_NUMBER || '';
export const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || '';

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Recommended event names we use across the site. Use string literals to keep
 *  the surface stable and easy to wire up in GA4 / GTM downstream. */
export type AnalyticsEvent =
  | 'page_view'
  | 'scroll_depth'
  | 'cta_click'
  | 'phone_click'
  | 'phone_call_conversion'
  | 'whatsapp_click'
  | 'outbound_click'
  | 'lead_form_view'
  | 'lead_form_field_focus'
  | 'lead_form_submit_attempt'
  | 'lead_form_submit_success'
  | 'lead_form_submit_error'
  | 'generate_lead'
  | 'view_item';

export type EventParams = Record<
  string,
  string | number | boolean | undefined | null
>;

/** Push an event to dataLayer + gtag. SSR-safe (no-op on the server). */
export function track(event: AnalyticsEvent, params: EventParams = {}): void {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });

  if (typeof window.gtag === 'function') {
    window.gtag('event', event, params);
  }
}

/** Track a page view. Called automatically on SPA route changes. */
export function trackPageView(pagePath: string): void {
  if (typeof window === 'undefined') return;

  if (typeof window.gtag === 'function') {
    if (GA4_ID) {
      window.gtag('config', GA4_ID, { page_path: pagePath });
    }
    window.gtag('config', GADS_ID, { page_path: pagePath });
  }

  track('page_view', {
    page_path: pagePath,
    page_location: window.location.href,
    page_title: document.title,
  });
}

/**
 * Fire the Google Ads "Lead" conversion + GA4 `generate_lead` event.
 * Call this on form submission success.
 *
 * If NEXT_PUBLIC_GADS_CONVERSION_LABEL is unset, the Ads conversion is skipped
 * (events still flow to GA4 / dataLayer). Make sure to set it once you've
 * created the conversion action in your Ads account, otherwise smart-bidding
 * has nothing to optimize toward.
 */
export function trackLeadConversion(meta: {
  value?: number;
  currency?: string;
  transaction_id?: string;
  service?: string;
  center?: string;
} = {}): void {
  if (typeof window === 'undefined') return;

  const value = meta.value ?? 1;
  const currency = meta.currency ?? 'INR';
  const transaction_id = meta.transaction_id ?? '';

  // Google Ads conversion (only when label is configured)
  if (GADS_CONVERSION_LABEL && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: `${GADS_ID}/${GADS_CONVERSION_LABEL}`,
      value,
      currency,
      transaction_id,
    });
  }

  // GA4 / GTM recommended event for lead generation
  track('generate_lead', {
    currency,
    value,
    transaction_id,
    service: meta.service,
    center: meta.center,
  });
}

/**
 * Fire the Google Ads "Phone clicks" / "Calls from a website" conversion plus
 * a GA4 phone_call_conversion event. Wired into the global click delegation
 * for every `tel:` link so each call attempt is counted.
 *
 * Skipped silently when NEXT_PUBLIC_GADS_PHONE_CONVERSION_LABEL is unset, so
 * no unattributed conversions get fired before the Ads action exists.
 */
export function trackPhoneCallConversion(meta: {
  phone?: string;
  source?: string;
  value?: number;
  currency?: string;
} = {}): void {
  if (typeof window === 'undefined') return;

  const value = meta.value ?? 1;
  const currency = meta.currency ?? 'INR';

  if (GADS_PHONE_CONVERSION_LABEL && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: `${GADS_ID}/${GADS_PHONE_CONVERSION_LABEL}`,
      value,
      currency,
    });
  }

  // GA4 / GTM-friendly event: not a reserved name, so it shows up clean
  // alongside the auto-fired `phone_click` event from click delegation.
  track('phone_call_conversion', {
    phone: meta.phone,
    source: meta.source,
    currency,
    value,
  });
}

/**
 * Enable Google Forwarding Number (GFN) — Dynamic Number Insertion.
 *
 * When NEXT_PUBLIC_GADS_PHONE_FORWARDING_NUMBER is set, this tells gtag to
 * swap that displayed number with a Google-issued tracking number whenever
 * the visitor arrived from a Google Ads click. Google then measures call
 * duration and reports qualifying calls back as conversions.
 *
 * Requires:
 *   1. NEXT_PUBLIC_GADS_PHONE_CONVERSION_LABEL set (the Ads phone-call action)
 *   2. NEXT_PUBLIC_GADS_PHONE_FORWARDING_NUMBER set to the displayed number
 *
 * Must be called AFTER the gtag.js loader has registered window.gtag.
 */
export function configurePhoneTracking(): void {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag !== 'function') return;
  if (!GADS_PHONE_CONVERSION_LABEL) return;
  if (!GADS_PHONE_FORWARDING_NUMBER) return;

  window.gtag('config', `${GADS_ID}/${GADS_PHONE_CONVERSION_LABEL}`, {
    phone_conversion_number: GADS_PHONE_FORWARDING_NUMBER,
  });
}
