import Link from 'next/link';
import { MessageCircle, Phone, Calendar } from 'lucide-react';

/** HSR Layout clinic line (+91-9449031003) — primary contact; same digits as WhatsApp. */
const HSR_CLINIC_PHONE_E164 = '919449031003';
const WHATSAPP_NUMBER = HSR_CLINIC_PHONE_E164;
const WHATSAPP_MESSAGE = encodeURIComponent('Hello, I would like to book an appointment with Dr. Sanjana L at Health Nest (HSR Layout) / Raghava Hospital (Attibele).');

export default function FloatingButtons() {
  return (
    <>
      {/* WhatsApp Float */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle size={26} color="white" fill="white" />
      </a>

      {/* Mobile Sticky CTA Bar */}
      <div className="mobile-cta-bar" aria-label="Quick contact options">
        <a
          href={`tel:+${HSR_CLINIC_PHONE_E164}`}
          className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl font-semibold text-sm"
          style={{
            background: 'rgba(139,94,131,0.1)',
            color: '#8B5E83',
            fontFamily: 'DM Sans, sans-serif',
          }}
          aria-label="Call Health Nest"
        >
          <Phone size={16} />
          Call Us
        </a>
        <Link
          href="/book-appointment"
          className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl font-semibold text-sm text-white"
          style={{
            background: 'linear-gradient(135deg, #8B5E83, #6B4563)',
            fontFamily: 'DM Sans, sans-serif',
          }}
          aria-label="Book appointment"
        >
          <Calendar size={16} />
          Book Now
        </Link>
      </div>
    </>
  );
}
