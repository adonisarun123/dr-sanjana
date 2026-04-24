import type { Metadata } from 'next';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Clock,
  Calendar,
  CheckCircle2,
  Star,
  ArrowRight,
  Stethoscope,
  Baby,
  HeartPulse,
  Microscope,
  Shield,
  Scissors,
  Users,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import FAQAccordion from '@/components/FAQAccordion';
import { SITE_URL } from '@/lib/site';

/* ──────────────────────────── SEO META ──────────────────────────── */

export const metadata: Metadata = {
  title:
    'Best Gynaecologist in Attibele | Dr. Sanjana L — Raghava Hospital',
  description:
    'Looking for the best gynaecologist in Attibele? Dr. Sanjana L (MBBS, MS OBG, Gold Medalist) at Raghava Multispeciality Hospital offers expert pregnancy care, normal delivery, PCOS treatment, fertility support & laparoscopic surgery in Attibele, Bangalore.',
  keywords: [
    'best gynaecologist in Attibele',
    'gynaecologist Attibele',
    'lady gynaecologist Attibele',
    'obstetrician Attibele',
    'pregnancy doctor Attibele',
    'normal delivery doctor Attibele',
    'PCOS treatment Attibele',
    'fertility specialist Attibele',
    'delivery hospital near Attibele',
    'gynaecologist near Chandapura',
    'gynaecologist near Hosur',
    'gynaecologist near Jigani',
    'Raghava Hospital Attibele gynaecologist',
  ],
  alternates: {
    canonical: `${SITE_URL}/attibele-gynaecologist`,
  },
  openGraph: {
    title:
      'Best Gynaecologist in Attibele | Dr. Sanjana L — Raghava Hospital',
    description:
      'Dr. Sanjana L at Raghava Multispeciality Hospital, Attibele — 10+ years experienced gynaecologist & obstetrician. Expert pregnancy care, PCOS treatment, fertility & laparoscopic surgery.',
    url: `${SITE_URL}/attibele-gynaecologist`,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Health Nest',
  },
};

/* ──────────────────────────── DATA ──────────────────────────── */

const services = [
  {
    icon: Baby,
    title: 'Pregnancy Care',
    desc: 'Complete prenatal care from first trimester to delivery — routine check-ups, ultrasound guidance, nutrition counselling and birth planning.',
    href: '/services/pregnancy-care',
  },
  {
    icon: HeartPulse,
    title: 'Normal & Painless Delivery',
    desc: 'Evidence-based support for safe vaginal deliveries including painless delivery with epidural anaesthesia at Raghava Hospital, Attibele.',
    href: '/services/painless-delivery',
  },
  {
    icon: Shield,
    title: 'High-Risk Pregnancy',
    desc: 'Specialist management for gestational diabetes, preeclampsia, twin pregnancies, advanced maternal age and previous complicated deliveries.',
    href: '/services/high-risk-pregnancy',
  },
  {
    icon: Microscope,
    title: 'PCOS / PCOD Treatment',
    desc: 'Holistic hormonal management, lifestyle guidance, weight management and fertility support for polycystic ovary conditions.',
    href: '/services/pcos-pcod-treatment',
  },
  {
    icon: Stethoscope,
    title: 'Fertility Treatment',
    desc: 'Comprehensive fertility evaluation, ovulation induction, IUI guidance and IVF counselling for couples trying to conceive.',
    href: '/services/fertility-treatment',
  },
  {
    icon: Scissors,
    title: 'Laparoscopic Surgery',
    desc: 'Minimally invasive keyhole surgery for ovarian cysts, fibroids, endometriosis and ectopic pregnancies with faster recovery.',
    href: '/services/laparoscopic-surgery',
  },
];

const faqs: { q: string; a: string }[] = [
  {
    q: 'Who is the best gynaecologist in Attibele?',
    a: 'Dr. Sanjana L sees patients at Raghava Multispeciality Hospital, Attibele. She is a trusted obstetrician and gynaecologist for the area.\n\nShe is MBBS, MS (OBG) Gold Medalist (RGUHS), and FMAS-trained, with 10 plus years of experience. She supports pregnancy, normal birth, PCOS care, fertility, and keyhole surgery.\n\nTimings at Attibele: Mon–Sat, 9 AM–9 PM. She also consults at Health Nest, HSR Layout.',
  },
  {
    q: 'What gynaecology services are available at Raghava Hospital, Attibele?',
    a: 'You can book pregnancy visits, scans, and birth planning. Dr. Sanjana supports normal birth, painless birth with epidural when suitable, and caesarean birth when needed.\n\nShe also treats high-risk pregnancy, PCOS/PCOD, fertility concerns, period problems, and offers laparoscopy, hysteroscopy, cervical screening, and contraception advice.',
  },
  {
    q: 'Is there a lady gynaecologist available near Attibele?',
    a: 'Yes. Dr. Sanjana L is a woman gynaecologist at Raghava Hospital on Sarjapura–Attibele Road.\n\nVisits are private and respectful. She speaks English, Hindi, Kannada, and Telugu. Many patients come from Attibele, Chandapura, Jigani, Anekal, and Hosur Road.',
  },
  {
    q: 'What are the consulting hours for Dr. Sanjana L at Attibele?',
    a: 'Monday to Saturday: 9:00 AM to 9:00 PM at Raghava Hospital, Attibele.\n\nSunday: by appointment only.\n\nCall +91-9980031006 or use the website booking form.',
  },
  {
    q: 'How do I reach Raghava Hospital from Chandapura or Hosur Road?',
    a: 'Address: 39, Sarjapura–Attibele Road, opposite Syndicate Bank, Attibele, Bengaluru 562107.\n\nIt is about 10 km from Chandapura Junction. Use Hosur Road and Attibele–Sarjapura Road. Parking is available. Buses and cabs serve the area.',
  },
  {
    q: 'What is the consultation fee for Dr. Sanjana L at Attibele?',
    a: 'Fees are set to stay fair for patients.\n\nCall +91-9980031006 for the latest consultation fee. If you book online, the team can confirm costs before you visit.',
  },
  {
    q: 'Does Dr. Sanjana perform normal deliveries and C-sections at Attibele?',
    a: 'Yes. She performs normal (vaginal) birth and caesarean birth at Raghava Hospital when clinically right for you and your baby.\n\nPainless labour with epidural is available when suitable. The unit has labour and newborn support for many high-risk cases.',
  },
  {
    q: 'Can I consult Dr. Sanjana online if I live near Attibele?',
    a: 'Yes. Video visits work well for follow-up, second opinions, and many non-urgent questions.\n\nBook on the Health Nest website or call +91-9980031006.',
  },
];

const nearbyAreas = [
  'Chandapura',
  'Jigani',
  'Anekal',
  'Hosur Road',
  'Bommasandra',
  'Electronic City (South)',
  'Sarjapura Road',
  'Dommasandra',
];

/* ──────────────────────────── SCHEMAS ──────────────────────────── */

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Dr. Sanjana L — Gynaecologist at Raghava Multispeciality Hospital, Attibele',
  description:
    'Best gynaecologist in Attibele offering pregnancy care, normal delivery, PCOS treatment, fertility support and laparoscopic surgery at Raghava Multispeciality Hospital.',
  url: `${SITE_URL}/attibele-gynaecologist`,
  telephone: '+91-9980031006',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '39, Sarjapura - Attibele Rd, opposite Syndicate Bank',
    addressLocality: 'Attibele, Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '562107',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '12.7803654',
    longitude: '77.7707144',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '21:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday'],
      opens: '09:00',
      closes: '21:00',
      description: 'By Appointment Only',
    },
  ],
  priceRange: '$$',
  image: `${SITE_URL}/dr-sanjana-hero.png`,
  areaServed: [
    { '@type': 'City', name: 'Attibele' },
    { '@type': 'City', name: 'Chandapura' },
    { '@type': 'City', name: 'Jigani' },
    { '@type': 'City', name: 'Anekal' },
    { '@type': 'City', name: 'Hosur Road, Bangalore' },
    { '@type': 'City', name: 'Bommasandra' },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '200',
    bestRating: '5',
  },
  hasMap: 'https://www.google.com/maps/place/Raghava+Multispeciality+Hospital/@12.7803654,77.7707144,17z',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: SITE_URL,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Gynaecologist in Attibele',
      item: `${SITE_URL}/attibele-gynaecologist`,
    },
  ],
};

/* ──────────────────────────── PAGE ──────────────────────────── */

export default function AttibeleGynaecologistPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      <main id="main-content">
        {/* ─── HERO SECTION ─── */}
        <section
          className="bg-gradient-hero"
          style={{ paddingTop: '100px', paddingBottom: '60px' }}
        >
          <div className="container-hn">
            <BreadcrumbNav
              crumbs={[
                { label: 'Home', href: '/' },
                { label: 'Gynaecologist in Attibele' },
              ]}
            />

            <div className="mt-6 grid lg:grid-cols-12 gap-10 items-start">
              {/* Left — Main Content */}
              <div className="lg:col-span-7">
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4"
                  style={{
                    background: 'rgba(42,107,90,0.12)',
                    color: '#2A6B5A',
                    fontFamily: 'var(--font-body), system-ui, sans-serif',
                  }}
                >
                  Attibele &middot; Chandapura &middot; Jigani &middot; Anekal
                </span>

                <h1
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight"
                  style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#2D2D2D' }}
                >
                  Best Gynaecologist in Attibele —{' '}
                  <span style={{ color: '#8B5E83' }}>Dr. Sanjana L</span>
                </h1>

                <div className="accent-line" />

                <p
                  className="text-base md:text-lg mb-4 leading-relaxed max-w-[68ch]"
                  style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                >
                  Dr. Sanjana L is an <strong>obstetrician and gynaecologist</strong> at{' '}
                  <strong>Raghava Multispeciality Hospital, Attibele</strong>. She has 10 plus years of
                  experience. She is an <strong>MS (OBG) Gold Medalist (RGUHS)</strong> and holds{' '}
                  <strong>FMAS</strong> (keyhole surgery) training.
                </p>
                <p
                  className="text-base mb-6 leading-relaxed max-w-[68ch]"
                  style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                >
                  She cares for women from Attibele, Chandapura, Jigani, Anekal, and Hosur Road. Common
                  reasons for visits include <strong>pregnancy check-ups</strong>,{' '}
                  <strong>normal delivery</strong>, <strong>PCOS</strong>, <strong>fertility support</strong>,
                  and <strong>laparoscopic surgery</strong>. Consults are in English, Hindi, Kannada, or
                  Telugu.
                </p>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {[
                    { icon: Star, label: '4.9/5 Rating' },
                    { icon: Users, label: '5000+ Patients' },
                    { icon: Shield, label: 'Gold Medalist (RGUHS)' },
                  ].map((badge, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl border"
                      style={{
                        background: '#FFFFFF',
                        borderColor: '#E8E0DB',
                        fontFamily: 'var(--font-body), system-ui, sans-serif',
                      }}
                    >
                      <badge.icon size={16} style={{ color: '#E8A87C' }} />
                      <span className="text-sm font-semibold" style={{ color: '#2D2D2D' }}>
                        {badge.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4">
                  <Link href="/book-appointment" className="btn-primary">
                    <Calendar size={18} /> Book Appointment
                  </Link>
                  <a
                    href="tel:+919980031006"
                    className="btn-outline flex items-center gap-2"
                  >
                    <Phone size={18} /> Call: +91-9980031006
                  </a>
                </div>
              </div>

              {/* Right — Clinic Card */}
              <div className="lg:col-span-5">
                <div
                  className="rounded-2xl p-6 sticky top-24"
                  style={{ background: '#FFFFFF', border: '1px solid #E8E0DB' }}
                >
                  <h2
                    className="text-lg font-bold mb-4"
                    style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#2D2D2D' }}
                  >
                    Raghava Multispeciality Hospital
                  </h2>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin size={18} className="mt-0.5 flex-shrink-0" style={{ color: '#8B5E83' }} />
                      <p className="text-sm" style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
                        39, Sarjapura – Attibele Rd, opposite Syndicate Bank, Attibele, Bengaluru,
                        Karnataka 562107
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={18} className="flex-shrink-0" style={{ color: '#8B5E83' }} />
                      <a
                        href="tel:+919980031006"
                        className="text-sm font-semibold hover:underline"
                        style={{ color: '#2A6B5A', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                      >
                        +91-9980031006
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock size={18} className="mt-0.5 flex-shrink-0" style={{ color: '#8B5E83' }} />
                      <div className="text-sm" style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
                        <p className="font-semibold" style={{ color: '#2D2D2D' }}>
                          Mon – Sat: 9:00 AM – 9:00 PM
                        </p>
                        <p>Sunday: By Appointment</p>
                      </div>
                    </div>
                  </div>

                  {/* Google Map Embed */}
                  <div className="mt-5 rounded-xl overflow-hidden" style={{ height: '200px' }}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.6!2d77.7707144!3d12.7803654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae7193012f5045%3A0xaeb4c2023a37fea6!2sRaghava%20Multispeciality%20Hospital!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Raghava Multispeciality Hospital Attibele Location"
                    />
                  </div>

                  <div className="mt-5 space-y-3">
                    <Link
                      href="/book-appointment"
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white font-semibold text-sm"
                      style={{
                        background: 'linear-gradient(135deg, #8B5E83, #6B4563)',
                        fontFamily: 'var(--font-body), system-ui, sans-serif',
                      }}
                    >
                      <Calendar size={16} /> Book Appointment
                    </Link>
                    <a
                      href="https://www.google.com/maps/place/Raghava+Multispeciality+Hospital/@12.7803654,77.7707144,17z"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border font-semibold text-sm"
                      style={{
                        borderColor: '#E8E0DB',
                        color: '#2A6B5A',
                        fontFamily: 'var(--font-body), system-ui, sans-serif',
                      }}
                    >
                      <MapPin size={16} /> Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── ABOUT DR. SANJANA IN ATTIBELE ─── */}
        <section className="section-padding" style={{ background: '#FFFFFF' }}>
          <div className="container-hn max-w-4xl">
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#2D2D2D' }}
            >
              Why Women in Attibele Trust Dr. Sanjana L
            </h2>
            <div className="accent-line" />

            <div
              className="space-y-4 max-w-[68ch]"
              style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif', lineHeight: 1.8 }}
            >
              <p>
                Many women in South Bangalore want a skilled, approachable gynaecologist near Attibele.
                Dr. Sanjana L sees patients at <strong>Raghava Multispeciality Hospital</strong> on
                Sarjapura–Attibele Road. Care here matches what she offers at Health Nest, HSR Layout.
              </p>
              <p>
                She listens, explains results in plain language, and reviews options with you. That
                style has helped her earn trust from <strong>5,000 plus women</strong> across the
                region.
              </p>
              <p>
                She treats both routine and complex cases. That includes first pregnancies, some
                high-risk pregnancies, PCOS in younger patients, and menopause support. Visits are
                offered in <strong>English, Hindi, Kannada, and Telugu</strong>.
              </p>
            </div>

            {/* Key credentials */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {[
                'MBBS, MS (Obstetrics & Gynaecology) — Gold Medalist, RGUHS',
                'FMAS — Fellowship in Minimal Access Surgery',
                '10+ years of clinical experience in obstetrics & gynaecology',
                'Multilingual: English, Hindi, Kannada, Telugu',
                'Available at two locations: HSR Layout & Attibele',
                'Expert in both routine care and high-risk pregnancy management',
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-xl"
                  style={{ background: '#FFF8F0', border: '1px solid #E8E0DB' }}
                >
                  <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#8B5E83' }} />
                  <p className="text-sm" style={{ color: '#2D2D2D', fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SERVICES OFFERED IN ATTIBELE ─── */}
        <section className="section-padding" style={{ background: '#FFF8F0' }}>
          <div className="container-hn">
            <div className="text-center mb-12">
              <h2
                className="text-2xl md:text-3xl font-bold mb-3"
                style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#2D2D2D' }}
              >
                Gynaecology Services Available in Attibele
              </h2>
              <div className="accent-line mx-auto" />
              <div
                className="mx-auto max-w-2xl space-y-3 text-base font-sans text-ink-muted"
              >
                <p className="m-0">Dr. Sanjana L runs a full women&apos;s health clinic at Raghava Multispeciality Hospital, Attibele.</p>
                <p className="m-0">You can book routine visits, pregnancy care, birth planning, and keyhole surgery when needed.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((svc, i) => (
                <Link
                  key={i}
                  href={svc.href}
                  className="group block p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg"
                  style={{ background: '#FFFFFF', borderColor: '#E8E0DB' }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                    style={{ background: 'rgba(139,94,131,0.1)' }}
                  >
                    <svc.icon size={22} style={{ color: '#8B5E83' }} />
                  </div>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ fontFamily: 'var(--font-body), system-ui, sans-serif', color: '#2D2D2D' }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-3"
                    style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                  >
                    {svc.desc}
                  </p>
                  <span
                    className="text-sm font-semibold flex items-center gap-1"
                    style={{ color: '#8B5E83' }}
                  >
                    Learn More <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>

            {/* Additional services list */}
            <div className="mt-10 max-w-3xl mx-auto text-center">
              <p
                className="text-sm leading-relaxed"
                style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
              >
                <strong style={{ color: '#2D2D2D' }}>Also available at Attibele:</strong>{' '}
                <Link href="/services/cesarean-delivery" className="hover:underline" style={{ color: '#8B5E83' }}>
                  Caesarean Delivery
                </Link>
                {', '}
                <Link href="/services/hysteroscopy" className="hover:underline" style={{ color: '#8B5E83' }}>
                  Hysteroscopy
                </Link>
                {', '}
                <Link href="/services/menstrual-disorders" className="hover:underline" style={{ color: '#8B5E83' }}>
                  Menstrual Disorder Treatment
                </Link>
                {', '}
                <Link href="/services/prenatal-screening" className="hover:underline" style={{ color: '#8B5E83' }}>
                  Prenatal Screening
                </Link>
                {', '}
                <Link href="/services/postnatal-care" className="hover:underline" style={{ color: '#8B5E83' }}>
                  Postnatal Care
                </Link>
                {', '}
                <Link href="/services/cervical-cancer-screening" className="hover:underline" style={{ color: '#8B5E83' }}>
                  Cervical Cancer Screening
                </Link>
                {', '}
                <Link href="/services/contraception-counselling" className="hover:underline" style={{ color: '#8B5E83' }}>
                  Contraception Counselling
                </Link>
                {', '}
                <Link href="/services/menopause-management" className="hover:underline" style={{ color: '#8B5E83' }}>
                  Menopause Management
                </Link>
                {', and '}
                <Link href="/services/adolescent-gynaecology" className="hover:underline" style={{ color: '#8B5E83' }}>
                  Adolescent Gynaecology
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ─── AREAS SERVED ─── */}
        <section className="section-padding" style={{ background: '#FFFFFF' }}>
          <div className="container-hn max-w-4xl">
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#2D2D2D' }}
            >
              Serving Women across Attibele and Nearby Areas
            </h2>
            <div className="accent-line" />

            <div className="text-base mb-6 leading-relaxed max-w-[68ch] space-y-3" style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
              <p className="m-0">
                Raghava Multispeciality Hospital sits on Sarjapura–Attibele Road. It is easy to reach
                from nearby towns.
              </p>
              <p className="m-0">
                If you want a <strong>gynaecologist near Chandapura</strong>,{' '}
                <strong>gynaecologist near Jigani</strong>, or a <strong>delivery hospital near Attibele</strong>,
                Dr. Sanjana L is often just a short drive away.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {nearbyAreas.map((area, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 p-3 rounded-xl text-sm font-medium"
                  style={{
                    background: '#FFF8F0',
                    border: '1px solid #E8E0DB',
                    color: '#2D2D2D',
                    fontFamily: 'var(--font-body), system-ui, sans-serif',
                  }}
                >
                  <MapPin size={14} style={{ color: '#8B5E83', flexShrink: 0 }} />
                  {area}
                </div>
              ))}
            </div>

            <div className="mt-6 max-w-[68ch] space-y-2 text-sm leading-relaxed font-sans text-ink-muted">
              <p className="m-0">
                She also consults at{' '}
                <Link href="/" className="font-semibold text-primary hover:underline">
                  Health Nest, HSR Layout
                </Link>
                . That gives South Bangalore two sites for care.
              </p>
              <p className="m-0">
                She welcomes patients from{' '}
                <Link href="/electronic-city-sarjapura-gynaecologist" className="font-semibold text-primary hover:underline">
                  Electronic City, Sarjapura &amp; Dommasandra
                </Link>{' '}
                and from{' '}
                <Link href="/chandapura-hosur-road-gynaecologist" className="font-semibold text-primary hover:underline">
                  Chandapura, Hosur Road &amp; Anekal
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ─── FAQ SECTION ─── */}
        <section className="section-padding" style={{ background: '#FFF8F0' }}>
          <div className="container-hn max-w-3xl">
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#2D2D2D' }}
            >
              Frequently Asked Questions — Gynaecologist in Attibele
            </h2>
            <div className="accent-line" />
            <FAQAccordion faqs={faqs} />
          </div>
        </section>

        {/* ─── CTA STRIP ─── */}
        <section
          className="py-16"
          style={{ background: 'linear-gradient(135deg, #8B5E83, #6B4563)' }}
        >
          <div className="container-hn text-center">
            <h2
              className="text-2xl md:text-3xl font-bold text-white mb-3"
              style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
            >
              Looking for a Trusted Gynaecologist in Attibele?
            </h2>
            <div className="mx-auto mb-8 max-w-xl space-y-2 font-sans text-white/80">
              <p className="m-0">Book with Dr. Sanjana L at Raghava Multispeciality Hospital, Attibele.</p>
              <p className="m-0">Expect clear advice and kind support, close to home.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/book-appointment"
                className="px-8 py-3.5 bg-white rounded-xl font-semibold text-sm shadow-lg hover:scale-105 transition-transform"
                style={{ color: '#8B5E83', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
              >
                Book Appointment Online
              </Link>
              <a
                href="tel:+919980031006"
                className="px-8 py-3.5 border-2 border-white rounded-xl text-white font-semibold text-sm hover:bg-white/10 transition-colors flex items-center gap-2"
                style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
              >
                <Phone size={16} /> Call +91-9980031006
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
