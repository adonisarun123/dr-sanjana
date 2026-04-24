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
 *   NEXT_PUBLIC_GADS_ID                  Google Ads tag ID. Default: AW-18058250699
 *   NEXT_PUBLIC_GADS_CONVERSION_LABEL    Conversion label for the "Lead" action.
 *                                         Get this from Google Ads → Tools →
 *                                         Conversions → New conversion (Lead).
 *                                         Looks like:  AbC1dEf2gHi3
 *   NEXT_PUBLIC_GA4_ID                   Optional GA4 measurement ID (G-XXXXXXX).
 *                                         When set, page_view + custom events
 *                                         are also reported to GA4.
 */

export const GADS_ID =
  process.env.NEXT_PUBLIC_GADS_ID || 'AW-18058250699';
export const GADS_CONVERSION_LABEL =
  process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL || '';
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
