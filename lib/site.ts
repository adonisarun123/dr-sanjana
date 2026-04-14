/** Canonical site origin for metadata, JSON-LD, and llms.txt. */
export const SITE_URL = 'https://www.drsanjanal.in' as const;

export const SITE_NAME = 'Health Nest';
export const PHYSICIAN_FULL_NAME = 'Dr. Sanjana L';

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
