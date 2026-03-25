import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Youtube } from 'lucide-react';

const serviceLinks = [
  { label: 'Pregnancy Care', href: '/services/pregnancy-care' },
  { label: 'High-Risk Pregnancy', href: '/services/high-risk-pregnancy' },
  { label: 'Normal Delivery', href: '/services/normal-delivery' },
  { label: 'Fertility Treatment', href: '/services/fertility-treatment' },
  { label: 'PCOS & PCOD', href: '/services/pcos-pcod-treatment' },
  { label: 'Laparoscopic Surgery', href: '/services/laparoscopic-surgery' },
  { label: 'All Services →', href: '/services' },
];

const quickLinks = [
  { label: 'About Dr. Sanjana', href: '/about-dr-sanjana' },
  { label: 'Patient Stories', href: '/patient-stories' },
  { label: 'Health Blog', href: '/blog' },
  { label: 'Book Appointment', href: '/book-appointment' },
  { label: 'Contact', href: '/contact' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#1C1C2E', color: '#E8E0DB' }} role="contentinfo">
      <div className="container-hn" style={{ padding: '0.5rem' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #8B5E83, #6B4563)' }}
              >
                <span className="text-white font-bold text-sm" style={{ fontFamily: 'Playfair Display, serif' }}>HN</span>
              </div>
              <div>
                <p className="font-bold text-lg leading-tight text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Health Nest
                </p>
                <p className="text-xs leading-tight" style={{ color: '#9B9B9B' }}>Dr. Sanjana L · OB-GYN</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: '#9B9B9B', fontFamily: 'DM Sans, sans-serif' }}>
              Trusted gynaecology & obstetrics care in HSR Layout, Bangalore. 15+ years of compassionate women&apos;s healthcare.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:bg-purple-900"
                style={{ background: 'rgba(255,255,255,0.08)' }}
                aria-label="Health Nest on Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:bg-purple-900"
                style={{ background: 'rgba(255,255,255,0.08)' }}
                aria-label="Health Nest on Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:bg-purple-900"
                style={{ background: 'rgba(255,255,255,0.08)' }}
                aria-label="Health Nest on YouTube"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>Services</h3>
            <ul className="space-y-4" role="list">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-purple-300"
                    style={{ color: '#9B9B9B', fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>Quick Links</h3>
            <ul className="space-y-4" role="list">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-purple-300"
                    style={{ color: '#9B9B9B', fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>Contact Us</h3>
            <ul className="space-y-5" role="list">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#C9A7C7' }} />
                <div>
                  <p className="text-sm font-semibold text-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>Health Nest Hospital</p>
                  <p className="text-sm" style={{ color: '#9B9B9B', fontFamily: 'DM Sans, sans-serif' }}>
                    1162, 24th Main Rd, Sector 2<br />HSR Layout, Bangalore
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#C9A7C7' }} />
                <div>
                  <p className="text-sm font-semibold text-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>Raghava Hospital</p>
                  <p className="text-sm" style={{ color: '#9B9B9B', fontFamily: 'DM Sans, sans-serif' }}>
                    39, Sarjapura - Attibele Rd<br />Attibele, Bangalore
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#C9A7C7' }} />
                <div className="flex flex-col gap-1">
                  <a href="tel:+919449031003" className="text-sm transition-colors hover:text-purple-300" style={{ color: '#9B9B9B', fontFamily: 'DM Sans, sans-serif' }}>+91-9449031003 (HSR)</a>
                  <a href="tel:+919980031006" className="text-sm transition-colors hover:text-purple-300" style={{ color: '#9B9B9B', fontFamily: 'DM Sans, sans-serif' }}>+91-9980031006 (Attibele)</a>
                </div>
              </li>
              <li className="flex items-center gap-3 mt-2">
                <Mail size={16} className="flex-shrink-0" style={{ color: '#C9A7C7' }} />
                <a
                  href="mailto:info@healthnest.in"
                  className="text-sm transition-colors hover:text-purple-300"
                  style={{ color: '#9B9B9B', fontFamily: 'DM Sans, sans-serif' }}
                >
                  info@healthnest.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <p className="text-xs" style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif' }}>
            © 2026 Health Nest. All rights reserved. | Reg. No: 124759
          </p>
          <p className="text-xs" style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif' }}>
            Dr. Sanjana L — MBBS, MS (Obstetrics & Gynaecology) | HSR Layout, Bangalore
          </p>
        </div>
      </div>
    </footer>
  );
}
