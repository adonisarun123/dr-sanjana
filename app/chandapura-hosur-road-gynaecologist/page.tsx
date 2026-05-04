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
  Navigation,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import FAQAccordion from '@/components/FAQAccordion';
import { SITE_URL } from '@/lib/site';

/* ──────────────────────────── SEO META ──────────────────────────── */

export const metadata: Metadata = {
  title: 'Gynaecologist near Chandapura, Hosur Road & Anekal | Dr. Sanjana L',
  description:
    'Looking for the best gynaecologist near Chandapura, Hosur Road or Anekal? Dr. Sanjana L (MBBS, MS OBG, Gold Medalist) at Raghava Multispeciality Hospital, Attibele offers expert pregnancy care, normal delivery, PCOS treatment, fertility support & laparoscopic surgery — just 10 minutes from Chandapura Junction.',
  keywords: [
    'best gynaecologist in Chandapura',
    'best gynaecologist near Hosur Road Bangalore',
    'best gynaecologist Anekal',
    'delivery hospital near Chandapura',
    'delivery hospital near Hosur Road',
    'maternity hospital near Chandapura',
    'gynaecologist near Jigani',
    'gynaecologist near Hosur',
    'normal delivery doctor Chandapura',
    'pregnancy doctor Chandapura',
    'lady gynaecologist Chandapura',
    'PCOS treatment Chandapura',
    'fertility specialist near Hosur Road',
  ],
  alternates: {
    canonical: `${SITE_URL}/chandapura-hosur-road-gynaecologist`,
  },
  openGraph: {
    title: 'Gynaecologist near Chandapura, Hosur Road & Anekal | Dr. Sanjana L',
    description:
      'Dr. Sanjana L at Raghava Multispeciality Hospital, Attibele — 10+ years experienced gynaecologist near Chandapura & Hosur Road. Expert pregnancy care, normal delivery, PCOS treatment & more.',
    url: `${SITE_URL}/chandapura-hosur-road-gynaecologist`,
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
    desc: 'Complete prenatal care from your first positive test to safe delivery — routine check-ups, ultrasound guidance, nutrition counselling and personalised birth planning.',
    href: '/services/pregnancy-care',
  },
  {
    icon: HeartPulse,
    title: 'Normal & Painless Delivery',
    desc: 'Safe, evidence-based vaginal deliveries with painless delivery (epidural) options available at Raghava Multispeciality Hospital, Attibele.',
    href: '/services/painless-delivery',
  },
  {
    icon: Shield,
    title: 'High-Risk Pregnancy',
    desc: 'Specialist management for gestational diabetes, preeclampsia, twin pregnancies, advanced maternal age and prior complicated deliveries.',
    href: '/services/high-risk-pregnancy',
  },
  {
    icon: Microscope,
    title: 'PCOS / PCOD Treatment',
    desc: 'Comprehensive hormonal evaluation, medication, lifestyle and diet guidance, weight management support and fertility treatment for PCOS/PCOD.',
    href: '/services/pcos-pcod-treatment',
  },
  {
    icon: Stethoscope,
    title: 'Fertility Treatment',
    desc: 'Thorough fertility evaluation, ovulation tracking, IUI guidance and IVF counselling for couples trying to conceive.',
    href: '/services/fertility-treatment',
  },
  {
    icon: Scissors,
    title: 'Laparoscopic Surgery',
    desc: 'Minimally invasive keyhole surgery for ovarian cysts, fibroids, endometriosis and ectopic pregnancies — faster healing, smaller scars.',
    href: '/services/laparoscopic-surgery',
  },
];

const faqs: { q: string; a: string }[] = [
  {
    q: 'Who is the best gynaecologist near Chandapura, Bangalore?',
    a: 'Dr. Sanjana L consults at Raghava Multispeciality Hospital, Attibele. It is a short drive from Chandapura and Hosur Road.\n\nShe has 10 plus years of experience. She is MS (OBG) Gold Medalist (RGUHS) and FMAS-trained. She covers pregnancy, birth, PCOS, fertility, and keyhole surgery.',
  },
  {
    q: 'How far is Raghava Hospital, Attibele from Chandapura?',
    a: 'The hospital is on Sarjapura–Attibele Road. From Chandapura Junction it is about 8–10 km.\n\nMost days that is a 10–15 minute drive. There is parking on site.',
  },
  {
    q: 'Is there a delivery hospital near Chandapura or Hosur Road?',
    a: 'Yes. Raghava Hospital in Attibele has a labour suite and newborn support.\n\nDr. Sanjana attends normal birth, painless birth with epidural when suitable, and caesarean birth when needed.',
  },
  {
    q: 'What gynaecology services are available near Hosur Road?',
    a: 'From Hosur Road you can reach Raghava Hospital, Attibele quickly.\n\nServices include pregnancy care, normal and painless birth, caesarean birth, high-risk pregnancy, PCOS/PCOD care, fertility tests, laparoscopy, hysteroscopy, period problems, cervical screening, contraception advice, and menopause care.',
  },
  {
    q: 'Can I see Dr. Sanjana for PCOS treatment near Chandapura?',
    a: 'Yes. PCOS and PCOD care is a core part of her practice.\n\nShe orders the right blood tests and scans. She plans medicines, food and activity steps, weight support, and fertility help if you need it.\n\nThe Attibele site is a short trip from Chandapura.',
  },
  {
    q: 'What are the consulting hours at Raghava Hospital for Dr. Sanjana?',
    a: 'Monday to Saturday: 9:00 AM to 9:00 PM at Raghava Hospital, Attibele.\n\nSunday: by appointment.\n\nCall +91-9980031006 or use the online form.',
  },
  {
    q: 'Does Dr. Sanjana also consult in HSR Layout?',
    a: 'Yes. She also works at Health Nest, HSR Layout (Mon–Sat, 8 AM–9 PM).\n\nThat can suit people who work in central Bangalore.\n\nFor HSR bookings call +91-9449031003.',
  },
  {
    q: 'Is online consultation available for patients near Chandapura?',
    a: 'Yes. Video visits suit follow-ups, second opinions, and many non-urgent issues.\n\nThey help if travel is hard or time is tight.\n\nBook on the website or call +91-9980031006.',
  },
];

const nearbyAreas = [
  'Chandapura',
  'Anekal',
  'Hosur Road',
  'Jigani',
  'Bommasandra',
  'Hebbagodi',
  'Huskur',
  'Hosur (Tamil Nadu)',
];

const travelTimes = [
  { from: 'Chandapura Junction', time: '10–15 min', distance: '~8 km', clinic: 'Raghava Hospital, Attibele' },
  { from: 'Anekal Town', time: '12–18 min', distance: '~10 km', clinic: 'Raghava Hospital, Attibele' },
  { from: 'Hosur Road (Silk Board side)', time: '25–35 min', distance: '~20 km', clinic: 'Health Nest, HSR Layout' },
  { from: 'Jigani Industrial Area', time: '15–20 min', distance: '~12 km', clinic: 'Raghava Hospital, Attibele' },
  { from: 'Bommasandra', time: '15–20 min', distance: '~10 km', clinic: 'Raghava Hospital, Attibele' },
  { from: 'Hosur, Tamil Nadu', time: '20–25 min', distance: '~15 km', clinic: 'Raghava Hospital, Attibele' },
];

/* ──────────────────────────── SCHEMAS ──────────────────────────── */

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Dr. Sanjana L — Gynaecologist near Chandapura, Hosur Road & Anekal',
  description:
    'Best gynaecologist near Chandapura and Hosur Road offering pregnancy care, normal delivery, PCOS treatment, fertility support and laparoscopic surgery at Raghava Multispeciality Hospital, Attibele.',
  url: `${SITE_URL}/chandapura-hosur-road-gynaecologist`,
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
    { '@type': 'City', name: 'Chandapura' },
    { '@type': 'City', name: 'Anekal' },
    { '@type': 'City', name: 'Hosur Road, Bangalore' },
    { '@type': 'City', name: 'Jigani' },
    { '@type': 'City', name: 'Bommasandra' },
    { '@type': 'City', name: 'Hebbagodi' },
    { '@type': 'City', name: 'Hosur, Tamil Nadu' },
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
      name: 'Gynaecologist near Chandapura, Hosur Road & Anekal',
      item: `${SITE_URL}/chandapura-hosur-road-gynaecologist`,
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: a,
    },
  })),
};

/* ──────────────────────────── PAGE ──────────────────────────── */

export default function ChandapuraHosurRoadGynaecologistPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
                { label: 'Gynaecologist near Chandapura, Hosur Road & Anekal' },
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
                  Chandapura &middot; Hosur Road &middot; Anekal &middot; Jigani
                </span>

                <h1
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight"
                  style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#2D2D2D' }}
                >
                  Best Gynaecologist near Chandapura, Hosur Road &amp; Anekal —{' '}
                  <span style={{ color: '#8B5E83' }}>Dr. Sanjana L</span>
                </h1>

                <div className="accent-line" />

                <p
                  className="text-base md:text-lg mb-4 leading-relaxed max-w-[68ch]"
                  style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                >
                  If you live near <strong>Chandapura, Hosur Road, Anekal, or Jigani</strong>, you can
                  see a senior <strong>obstetrician and gynaecologist</strong> without a long commute.
                  Dr. Sanjana L has 10 plus years of experience. She is an <strong>MS (OBG) Gold
                  Medalist (RGUHS)</strong> and is <strong>FMAS</strong>-trained.
                </p>
                <p
                  className="text-base mb-6 leading-relaxed max-w-[68ch]"
                  style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                >
                  She consults at <strong>Raghava Multispeciality Hospital, Attibele</strong>. From
                  Chandapura Junction that is often about <strong>10–15 minutes</strong> on
                  Sarjapura–Attibele Road. She supports <strong>normal delivery</strong>,{' '}
                  <strong>high-risk pregnancy</strong>, <strong>PCOS care</strong>, and more. Languages:
                  English, Hindi, Kannada, Telugu.
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
              <div className="lg:col-span-5 space-y-5">
                {/* Raghava Hospital - Primary */}
                <div
                  className="rounded-2xl p-6 sticky top-24"
                  style={{ background: '#FFFFFF', border: '1px solid #E8E0DB' }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider"
                      style={{ background: 'rgba(42,107,90,0.12)', color: '#2A6B5A' }}
                    >
                      Nearest Clinic
                    </div>
                  </div>
                  <h2
                    className="text-lg font-bold mb-3"
                    style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#2D2D2D' }}
                  >
                    Raghava Multispeciality Hospital
                  </h2>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#8B5E83' }} />
                      <p className="text-sm" style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
                        39, Sarjapura – Attibele Rd, opposite Syndicate Bank, Attibele, Bengaluru,
                        Karnataka 562107
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={16} className="flex-shrink-0" style={{ color: '#8B5E83' }} />
                      <a
                        href="tel:+919980031006"
                        className="text-sm font-semibold hover:underline"
                        style={{ color: '#2A6B5A', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                      >
                        +91-9980031006
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#8B5E83' }} />
                      <div className="text-sm" style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
                        <p className="font-semibold" style={{ color: '#2D2D2D' }}>
                          Mon – Sat: 9:00 AM – 9:00 PM
                        </p>
                        <p>Sunday: By Appointment</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Navigation size={16} className="flex-shrink-0" style={{ color: '#8B5E83' }} />
                      <p className="text-sm" style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
                        ~10–15 min from Chandapura Junction
                      </p>
                    </div>
                  </div>

                  {/* Google Map Embed */}
                  <div className="mt-4 rounded-xl overflow-hidden" style={{ height: '180px' }}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.6!2d77.7707144!3d12.7803654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae7193012f5045%3A0xaeb4c2023a37fea6!2sRaghava%20Multispeciality%20Hospital!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                      width="100%"
                      height="180"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Raghava Multispeciality Hospital Attibele — near Chandapura & Hosur Road"
                    />
                  </div>

                  <div className="mt-4 space-y-2">
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

                {/* HSR Layout Clinic - Alternative */}
                <div
                  className="rounded-2xl p-5"
                  style={{ background: '#FFFFFF', border: '1px solid #E8E0DB' }}
                >
                  <h3
                    className="text-base font-bold mb-2"
                    style={{ fontFamily: 'var(--font-body), system-ui, sans-serif', color: '#2D2D2D' }}
                  >
                    Also available at: Health Nest, HSR Layout
                  </h3>
                  <div className="flex items-start gap-2">
                    <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: '#8B5E83' }} />
                    <p className="text-xs" style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
                      1162, 24th Main Rd, Sector 2, HSR Layout, Bangalore 560102 &middot;{' '}
                      <a href="tel:+919449031003" className="font-semibold hover:underline" style={{ color: '#2A6B5A' }}>
                        +91-9449031003
                      </a>
                    </p>
                  </div>
                  <p className="text-xs mt-1" style={{ color: '#9B9B9B', fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
                    Convenient for patients who work in central Bangalore
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── PROXIMITY / TRAVEL TIMES ─── */}
        <section className="section-padding" style={{ background: '#FFFFFF' }}>
          <div className="container-hn max-w-4xl">
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#2D2D2D' }}
            >
              How to Reach Dr. Sanjana from Chandapura, Hosur Road &amp; Anekal
            </h2>
            <div className="accent-line" />

            <p
              className="text-base mb-8 leading-relaxed"
              style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
            >
              Raghava Multispeciality Hospital in Attibele is the nearest clinic for residents of
              Chandapura, Anekal, Jigani and areas along Hosur Road. The hospital sits on the main
              Sarjapura–Attibele Road, opposite Syndicate Bank, with ample parking.
              For patients closer to central Bangalore, Health Nest in HSR Layout is an alternative.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm" style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
                <thead>
                  <tr style={{ background: '#FFF8F0' }}>
                    <th className="text-left p-3 font-semibold rounded-tl-xl" style={{ color: '#2D2D2D' }}>
                      Your Location
                    </th>
                    <th className="text-left p-3 font-semibold" style={{ color: '#2D2D2D' }}>
                      Nearest Clinic
                    </th>
                    <th className="text-center p-3 font-semibold" style={{ color: '#2D2D2D' }}>
                      Distance
                    </th>
                    <th className="text-center p-3 font-semibold rounded-tr-xl" style={{ color: '#2D2D2D' }}>
                      Drive Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {travelTimes.map((row, i) => (
                    <tr
                      key={i}
                      className="border-b"
                      style={{ borderColor: '#E8E0DB' }}
                    >
                      <td className="p-3 font-medium" style={{ color: '#2D2D2D' }}>
                        {row.from}
                      </td>
                      <td className="p-3" style={{ color: '#6B6B6B' }}>
                        {row.clinic}
                      </td>
                      <td className="p-3 text-center" style={{ color: '#6B6B6B' }}>
                        {row.distance}
                      </td>
                      <td className="p-3 text-center">
                        <span
                          className="px-2 py-1 rounded-full text-xs font-semibold"
                          style={{ background: 'rgba(42,107,90,0.1)', color: '#2A6B5A' }}
                        >
                          {row.time}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── ABOUT DR. SANJANA ─── */}
        <section className="section-padding" style={{ background: '#FFF8F0' }}>
          <div className="container-hn max-w-4xl">
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#2D2D2D' }}
            >
              Why Families near Chandapura &amp; Hosur Road Choose Dr. Sanjana L
            </h2>
            <div className="accent-line" />

            <div
              className="space-y-4 max-w-[68ch]"
              style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif', lineHeight: 1.8 }}
            >
              <p>
                The Chandapura–Hosur Road–Anekal area is growing fast. Many families still travel far
                for women&apos;s health care. Dr. Sanjana L at <strong>Raghava Hospital, Attibele</strong>{' '}
                offers the same clinical standard as her HSR Layout practice.
              </p>
              <p>
                She listens, explains tests in simple words, and reviews options with you. First
                pregnancies, complex gynaecology, and teen health questions are all welcome.
              </p>
              <p>
                She has cared for <strong>5,000 plus patients</strong> and holds a strong{' '}
                <strong>4.9/5 Google</strong> rating. Consults run in{' '}
                <strong>English, Hindi, Kannada, and Telugu</strong>.
              </p>
            </div>

            {/* Key credentials */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {[
                'MBBS, MS (Obstetrics & Gynaecology) — Gold Medalist, RGUHS',
                'FMAS — Fellowship in Minimal Access Surgery',
                '10+ years of clinical experience in obstetrics & gynaecology',
                'Multilingual: English, Hindi, Kannada, Telugu',
                'Fully equipped labour ward & neonatal care at Attibele',
                'Also available at Health Nest, HSR Layout',
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-xl"
                  style={{ background: '#FFFFFF', border: '1px solid #E8E0DB' }}
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

        {/* ─── SERVICES ─── */}
        <section className="section-padding" style={{ background: '#FFFFFF' }}>
          <div className="container-hn">
            <div className="text-center mb-12">
              <h2
                className="text-2xl md:text-3xl font-bold mb-3"
                style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#2D2D2D' }}
              >
                Gynaecology Services for Chandapura, Hosur Road &amp; Anekal Residents
              </h2>
              <div className="accent-line mx-auto" />
              <div className="mx-auto max-w-2xl space-y-3 text-base font-sans text-ink-muted">
                <p className="m-0">Dr. Sanjana L sees women at Raghava Multispeciality Hospital, Attibele.</p>
                <p className="m-0">You can book routine visits, pregnancy care, birth planning, and keyhole surgery when needed.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((svc, i) => (
                <Link
                  key={i}
                  href={svc.href}
                  className="group block p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg"
                  style={{ background: '#FFF8F0', borderColor: '#E8E0DB' }}
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

            {/* Additional services */}
            <div className="mt-10 max-w-3xl mx-auto text-center">
              <p
                className="text-sm leading-relaxed"
                style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
              >
                <strong style={{ color: '#2D2D2D' }}>Also available:</strong>{' '}
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
        <section className="section-padding" style={{ background: '#FFF8F0' }}>
          <div className="container-hn max-w-4xl">
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#2D2D2D' }}
            >
              Serving Women across Chandapura, Hosur Road &amp; Surrounding Areas
            </h2>
            <div className="accent-line" />

            <div className="mb-6 max-w-[68ch] space-y-3 text-base leading-relaxed font-sans text-ink-muted">
              <p className="m-0">
                Raghava Multispeciality Hospital, Attibele, is easy to reach from Chandapura, Hosur Road, and Jigani.
              </p>
              <p className="m-0">
                It works well if you want a <strong>gynaecologist near Jigani</strong>, a{' '}
                <strong>maternity hospital near Chandapura</strong>, or a <strong>delivery unit near Hosur Road</strong>.
                Patients also travel from Hosur, Tamil Nadu.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {nearbyAreas.map((area, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 p-3 rounded-xl text-sm font-medium"
                  style={{
                    background: '#FFFFFF',
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
                She also sees patients from{' '}
                <Link href="/attibele-gynaecologist" className="font-semibold text-primary hover:underline">
                  Attibele
                </Link>
                .
              </p>
              <p className="m-0">
                She covers{' '}
                <Link href="/electronic-city-sarjapura-gynaecologist" className="font-semibold text-primary hover:underline">
                  Electronic City, Sarjapura &amp; Dommasandra
                </Link>{' '}
                from her HSR and Attibele sites.
              </p>
            </div>
          </div>
        </section>

        {/* ─── FAQ SECTION ─── */}
        <section className="section-padding" style={{ background: '#FFFFFF' }}>
          <div className="container-hn max-w-3xl">
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#2D2D2D' }}
            >
              Frequently Asked Questions — Gynaecologist near Chandapura &amp; Hosur Road
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
              Trusted Gynaecology Care — Close to Chandapura &amp; Hosur Road
            </h2>
            <div className="mx-auto mb-8 max-w-xl space-y-2 font-sans text-white/80">
              <p className="m-0">Book with Dr. Sanjana L at Raghava Multispeciality Hospital, Attibele.</p>
              <p className="m-0">Clear advice and kind support, a short drive from Chandapura and Hosur Road.</p>
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
