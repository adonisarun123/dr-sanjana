This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Analytics

The site ships with a single analytics layer (`lib/analytics.ts` + `components/Analytics.tsx`) that pushes to `window.dataLayer` and to `gtag`. Out of the box it tracks:

| Event | Where it fires | Useful for |
|---|---|---|
| `page_view` | Every SPA route change | GA4 / Google Ads page-view |
| `scroll_depth` (25/50/75/100) | While scrolling any page | Engagement / drop-off |
| `cta_click` | Click on any element with `data-analytics="..."` | All marked CTAs (header_call, navbar_book, whatsapp_float, etc.) |
| `phone_click` | Click on any `tel:` link | Call attribution |
| `phone_call_conversion` + Google Ads `conversion` | Click on any `tel:` link (when `NEXT_PUBLIC_GADS_PHONE_CONVERSION_LABEL` is set) | Smart Bidding for calls |
| `whatsapp_click` | Click on any `wa.me` / `api.whatsapp.com` / `chat.whatsapp.com` link | WhatsApp attribution |
| `outbound_click` | Click on any cross-origin `http(s)` link | Exit tracking |
| `lead_form_view` | Lead form 50% in viewport | Form discovery |
| `lead_form_field_focus` | First focus on any field | Engagement signal |
| `lead_form_submit_attempt` | Submit button clicked (validation may still fail) | Funnel |
| `lead_form_submit_success` | API returned 200 | Funnel |
| `lead_form_submit_error` | API call failed | Bug detection |
| `generate_lead` + Google Ads `conversion` | On submit success **and** on `/thank-you` mount (deduped via `transaction_id`) | Smart-Bidding optimization |

To wire up Google Ads conversions and (optional) GA4, set these in `.env.local` / Vercel project env vars:

```bash
# Google Ads — required
NEXT_PUBLIC_GADS_ID="AW-18058250699"                          # already the default

# Form-submit conversion (Lead)
NEXT_PUBLIC_GADS_CONVERSION_LABEL="AbC1dEf2gHi3"

# Phone-call conversion (clicks on tel: links)
NEXT_PUBLIC_GADS_PHONE_CONVERSION_LABEL="ZyXw9876vUtS"

# OPTIONAL: enable Google Forwarding Numbers (Dynamic Number Insertion).
# When set, the displayed number on Ads-sourced sessions is replaced with a
# Google-issued tracking number; Google then reports qualified call duration
# back to your Ads account. Number must be in E.164 format and must match the
# tel: links rendered on the page.
NEXT_PUBLIC_GADS_PHONE_FORWARDING_NUMBER="+919449031003"

# Optional: enable GA4 in parallel
NEXT_PUBLIC_GA4_ID="G-XXXXXXXXXX"
```

### Call tracking setup (Google Ads)

1. **Form-fill conversion** — Ads → Tools → Conversions → New → *Website* → category *Submit lead form*. Save the label into `NEXT_PUBLIC_GADS_CONVERSION_LABEL`.
2. **Phone-click conversion** — Ads → Tools → Conversions → New → *Phone calls* → *Calls from a website* (preferred) or *Clicks on your number on a mobile website*. Save the label into `NEXT_PUBLIC_GADS_PHONE_CONVERSION_LABEL`. Every `tel:` click on the site will now fire this conversion automatically — no per-link wiring needed.
3. **(Optional) Google Forwarding Number** — if you chose *Calls from a website* in step 2, also set `NEXT_PUBLIC_GADS_PHONE_FORWARDING_NUMBER` to the displayed number (E.164, e.g. `+919449031003`). For Ads-sourced sessions, Google will swap that number on-page with a tracking number and measure call duration; calls longer than the threshold you configured in Ads count as conversions.

Until the labels are set, the analytics events (`phone_click`, `lead_form_submit_success`, etc.) still flow to GA4 / `dataLayer`, but the Google Ads `conversion` events are suppressed to prevent unattributed firings.

To track a brand-new CTA, add `data-analytics="some_id"` to the element — the global click delegation in `<Analytics />` picks it up automatically; no per-component wiring required.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
