/** Canonical site origin for metadata, JSON-LD, and llms.txt. */
export const SITE_URL = 'https://www.drsanjanal.in' as const;

export const SITE_NAME = 'Health Nest';
export const PHYSICIAN_FULL_NAME = 'Dr. Sanjana L';

/** Default Open Graph / article image path (site root-relative). */
export const DEFAULT_OG_IMAGE_PATH = '/og-image.jpg' as const;

/** sameAs URLs for MedicalBusiness / Physician JSON-LD (site, LinkedIn, Google listings). */
/** Dr. Sanjana L — official LinkedIn profile (footer + JSON-LD sameAs). */
export const PHYSICIAN_LINKEDIN_URL =
  'https://www.linkedin.com/in/dr-sanjana-lakshmikanth-588281141' as const;

/**
 * `sameAs` means "a URL that unambiguously identifies THIS entity" — it is an
 * identity assertion, not a list of useful links.
 *
 * Two entries were removed in Aug 2026 because they asserted things that are
 * not true of the Health Nest organization:
 *
 *   1. `.../maps/place/Raghava+Multispeciality+Hospital/...` — Raghava is a
 *      separate, third-party hospital where Dr. Sanjana consults. Listing its
 *      Maps place here told Google "Health Nest IS Raghava Multispeciality
 *      Hospital", merging two distinct businesses into one entity. The Attibele
 *      relationship is already modelled correctly in app/layout.tsx as a `Place`
 *      node under the organization's `location`, with that same Maps URL as
 *      `hasMap` — which is the accurate predicate.
 *
 *   2. `maps.google.com/?q=Health+Nest+HSR+Layout+Bangalore` — a search-results
 *      query string, not a stable entity URL. It identifies nothing; it just
 *      runs a search. Also already present as `hasMap` on the HSR Place node.
 *
 * Only add a URL here if it is a canonical profile FOR Health Nest itself:
 * the Google Business Profile short link, Practo/Justdial/Lybrate clinic
 * listings, the clinic's own Instagram/Facebook page. Do NOT add another
 * business's listing, and do NOT add search or directions URLs.
 */
export const ORGANIZATION_SAME_AS: readonly string[] = [
  SITE_URL,
  PHYSICIAN_LINKEDIN_URL,
  'https://g.page/r/HealthNestHSRLayout/review',
];

export const PHYSICIAN_SAME_AS: readonly string[] = [
  `${SITE_URL}/about-dr-sanjana`,
  PHYSICIAN_LINKEDIN_URL,
  'https://g.page/r/HealthNestHSRLayout/review',
];

/**
 * The 8 `/<area>-gynaecologist` hub pages, in one place so the footer, homepage
 * and any future navigation stay in sync. Previously the footer listed only 3,
 * which left /jigani-gynaecologist with zero inbound internal links.
 */
export const AREA_HUBS: readonly { label: string; short: string; href: string }[] = [
  { label: 'Gynaecologist in HSR Layout', short: 'HSR Layout', href: '/hsr-layout-gynaecologist' },
  { label: 'Gynaecologist in Attibele', short: 'Attibele', href: '/attibele-gynaecologist' },
  {
    label: 'Near Electronic City & Sarjapura',
    short: 'Electronic City & Sarjapura',
    href: '/electronic-city-sarjapura-gynaecologist',
  },
  {
    label: 'Near Chandapura & Hosur Road',
    short: 'Chandapura & Hosur Road',
    href: '/chandapura-hosur-road-gynaecologist',
  },
  { label: 'Gynaecologist in Bommasandra', short: 'Bommasandra', href: '/bommasandra-gynaecologist' },
  { label: 'Gynaecologist in Chandapura', short: 'Chandapura', href: '/chandapura-gynaecologist' },
  { label: 'Gynaecologist in Anekal', short: 'Anekal', href: '/anekal-gynaecologist' },
  { label: 'Gynaecologist in Jigani', short: 'Jigani', href: '/jigani-gynaecologist' },
];

/**
 * When each group of pages was last substantively revised (YYYY-MM-DD).
 *
 * `app/sitemap.ts` previously used `new Date()` for every non-blog URL, so all
 * 68 of them claimed "modified today" on every single build. Google discounts
 * `lastmod` when it is obviously automated, which cost the sitemap its value as
 * a freshness signal.
 *
 * BUMP THESE BY HAND when you meaningfully change the corresponding content.
 * An inaccurate-but-stable date is far better than an always-today one.
 */
export const CONTENT_LAST_REVISED = {
  /** Home, about, services index, contact, FAQ, etc. */
  static: '2026-08-01',
  /** The 8 /<area>-gynaecologist hub pages. */
  hubs: '2026-08-01',
  /** lib/services.ts — the /services/<slug> pages. */
  services: '2026-07-17',
  /** lib/locationServices.ts — the service × location money pages. */
  moneyPages: '2026-08-01',
} as const;

/** E.164 country + number, no + (HSR line; same as WhatsApp). */
export const HSR_CLINIC_PHONE_E164 = '919449031003' as const;

/**
 * Primary practice address (HSR Layout) used in JSON-LD nodes that require
 * `address` per Google's rich-result validation (LocalBusiness/Physician).
 */
export const PRIMARY_PRACTICE_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: '1162, 24th Main Rd, Sector 2, HSR Layout',
  addressLocality: 'Bengaluru',
  addressRegion: 'Karnataka',
  postalCode: '560102',
  addressCountry: 'IN',
} as const;

const WHATSAPP_PREFILL_MESSAGE =
  'Hello, I would like to book an appointment with Dr. Sanjana L at Health Nest (HSR Layout) / Raghava Hospital (Attibele).';

/**
 * WhatsApp deep link. Prefer api.whatsapp.com over wa.me: many SEO crawlers get HTTP 429 on wa.me
 * while api.whatsapp.com/send typically returns 200 for the same user-facing flow.
 */
export const WHATSAPP_CHAT_URL = `https://api.whatsapp.com/send?phone=${HSR_CLINIC_PHONE_E164}&text=${encodeURIComponent(
  WHATSAPP_PREFILL_MESSAGE
)}` as const;
