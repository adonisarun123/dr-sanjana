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

export const ORGANIZATION_SAME_AS: readonly string[] = [
  SITE_URL,
  PHYSICIAN_LINKEDIN_URL,
  'https://g.page/r/HealthNestHSRLayout/review',
  'https://maps.google.com/?q=Health+Nest+HSR+Layout+Bangalore',
  'https://www.google.com/maps/place/Raghava+Multispeciality+Hospital/@12.7803654,77.7707144,17z',
];

export const PHYSICIAN_SAME_AS: readonly string[] = [
  `${SITE_URL}/about-dr-sanjana`,
  PHYSICIAN_LINKEDIN_URL,
  'https://g.page/r/HealthNestHSRLayout/review',
];

/** E.164 country + number, no + (HSR line; same as WhatsApp). */
export const HSR_CLINIC_PHONE_E164 = '919449031003' as const;

const WHATSAPP_PREFILL_MESSAGE =
  'Hello, I would like to book an appointment with Dr. Sanjana L at Health Nest (HSR Layout) / Raghava Hospital (Attibele).';

/**
 * WhatsApp deep link. Prefer api.whatsapp.com over wa.me: many SEO crawlers get HTTP 429 on wa.me
 * while api.whatsapp.com/send typically returns 200 for the same user-facing flow.
 */
export const WHATSAPP_CHAT_URL = `https://api.whatsapp.com/send?phone=${HSR_CLINIC_PHONE_E164}&text=${encodeURIComponent(
  WHATSAPP_PREFILL_MESSAGE
)}` as const;
