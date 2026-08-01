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
import AreaMoneyPageLinks from '@/components/AreaMoneyPageLinks';
import { SITE_URL } from '@/lib/site';

/* ──────────────────────────── SEO META ──────────────────────────── */

export const metadata: Metadata = {
  title: 'Best Gynaecologist near Bommasandra | Dr. Sanjana L — Raghava Hospital',
  description:
    'Looking for the best gynaecologist near Bommasandra? Dr. Sanjana L (MBBS, MS OBG, Gold Medalist) at Raghava Multispeciality Hospital, Attibele offers expert pregnancy care, normal & painless delivery, PCOS treatment, fertility support and laparoscopic surgery — a short drive from Bommasandra.',
  keywords: [
    'best gynaecologist near Bommasandra',
    'gynaecologist Bommasandra',
    'lady gynaecologist Bommasandra',
    'obstetrician Bommasandra',
    'pregnancy doctor Bommasandra',
    'normal delivery doctor Bommasandra',
    'maternity hospital near Bommasandra',
    'delivery hospital near Bommasandra',
    'PCOS treatment Bommasandra',
    'fertility specialist near Bommasandra',
    'gynaecologist near Hebbagodi',
    'gynaecologist near Bommasandra Industrial Area',
  ],
  alternates: {
    canonical: `${SITE_URL}/bommasandra-gynaecologist`,
  },
  openGraph: {
    title: 'Best Gynaecologist near Bommasandra | Dr. Sanjana L — Raghava Hospital',
    description:
      'Dr. Sanjana L at Raghava Multispeciality Hospital, Attibele — 10+ years experienced gynaecologist a short drive from Bommasandra. Expert pregnancy care, normal delivery, PCOS treatment & more.',
    url: `${SITE_URL}/bommasandra-gynaecologist`,
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
    desc: 'Complete prenatal care from first trimester to delivery — routine check-ups, ultrasound guidance, nutrition counselling and birth planning close to Bommasandra.',
    href: '/services/pregnancy-care',
  },
  {
    icon: HeartPulse,
    title: 'Normal & Painless Delivery',
    desc: 'Safe vaginal deliveries with a normal-delivery-first approach and epidural painless delivery available at Raghava Hospital, a short drive from Bommasandra.',
    href: '/painless-delivery-bommasandra',
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
    desc: 'Holistic hormonal management, lifestyle guidance, weight support and fertility care for polycystic ovary conditions.',
    href: '/services/pcos-pcod-treatment',
  },
  {
    icon: Stethoscope,
    title: 'Fertility Treatment',
    desc: 'Comprehensive fertility evaluation, ovulation induction and IUI guidance for couples trying to conceive.',
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
    q: 'Who is the best gynaecologist near Bommasandra?',
    a: 'Dr. Sanjana L consults at Raghava Multispeciality Hospital on the Sarjapura–Attibele Road, a short drive from Bommasandra. She is a trusted lady obstetrician and gynaecologist for the area.\n\nShe is MBBS, MS (OBG) Gold Medalist (RGUHS), and FMAS-trained, with 10 plus years of experience. She supports pregnancy, normal and painless birth, PCOS care, fertility, and keyhole surgery.\n\nTimings: Mon–Sat, 9 AM–9 PM. She also consults at Health Nest, HSR Layout.',
  },
  {
    q: 'Where can I have a normal or painless delivery near Bommasandra?',
    a: 'Dr. Sanjana L supports normal and painless (epidural) deliveries at Raghava Multispeciality Hospital, Attibele, a short drive from Bommasandra, with 24/7 anaesthesia and newborn back-up.\n\nSee our dedicated pages for normal delivery and painless delivery near Bommasandra, or call +91-9980031006 to plan your birth.',
  },
  {
    q: 'How far is the hospital from Bommasandra?',
    a: 'Raghava Hospital is on the Sarjapura–Attibele Road, typically 10–15 minutes from most of Bommasandra depending on traffic — much closer than city-centre maternity hospitals.\n\nIt is easy to reach from Hebbagodi, the Bommasandra Industrial Area and Electronic City South.',
  },
  {
    q: 'Is there a lady (female) gynaecologist near Bommasandra?',
    a: 'Yes. Dr. Sanjana L is a woman gynaecologist at Raghava Hospital. Visits are private and respectful, and she speaks English, Hindi, Kannada, and Telugu.\n\nMany patients come from Bommasandra, Hebbagodi, Anekal, Chandapura and Jigani.',
  },
  {
    q: 'What are the consulting hours and phone number?',
    a: 'Monday to Saturday: 9:00 AM to 9:00 PM at Raghava Hospital, Attibele. Sunday: by appointment only.\n\nCall +91-9980031006 or use the website booking form.',
  },
  {
    q: 'Does Dr. Sanjana perform C-sections if needed?',
    a: 'Yes. She supports normal (vaginal) birth wherever possible and performs caesarean birth when it is medically right for you and your baby.\n\nThe unit has 24/7 anaesthesia, operative and newborn back-up for both routine and many high-risk cases.',
  },
  {
    q: 'Can I consult Dr. Sanjana online if I live near Bommasandra?',
    a: 'Yes. Video visits work well for follow-up, second opinions, and many non-urgent questions.\n\nBook on the Health Nest website or call +91-9980031006.',
  },
];

const nearbyAreas = [
  'Bommasandra',
  'Hebbagodi',
  'Bommasandra Industrial Area',
  'Anekal',
  'Chandapura',
  'Electronic City (South)',
  'Jigani',
  'Attibele',
];

/* ──────────────────────────── SCHEMAS ──────────────────────────── */

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Dr. Sanjana L — Gynaecologist near Bommasandra (Raghava Hospital, Attibele)',
  description:
    'Best gynaecologist near Bommasandra offering pregnancy care, normal and painless delivery, PCOS treatment, fertility support and laparoscopic surgery at Raghava Multispeciality Hospital, Attibele.',
  url: `${SITE_URL}/bommasandra-gynaecologist`,
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
    { '@type': 'City', name: 'Bommasandra' },
    { '@type': 'City', name: 'Hebbagodi' },
    { '@type': 'City', name: 'Anekal' },
    { '@type': 'City', name: 'Chandapura' },
    { '@type': 'City', name: 'Electronic City, Bangalore' },
    { '@type': 'City', name: 'Jigani' },
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
      name: 'Gynaecologist near Bommasandra',
      item: `${SITE_URL}/bommasandra-gynaecologist`,
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

export default function BommasandraGynaecologistPage() {
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
                { label: 'Gynaecologist near Bommasandra' },
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
                  Bommasandra &middot; Hebbagodi &middot; Anekal &middot; Jigani
                </span>

                <h1
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight"
                  style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#2D2D2D' }}
                >
                  Best Gynaecologist near Bommasandra —{' '}
                  <span style={{ color: '#8B5E83' }}>Dr. Sanjana L</span>
                </h1>

                <div className="accent-line" />

                <p
                  className="text-base md:text-lg mb-4 leading-relaxed max-w-[68ch]"
                  style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                >
                  Dr. Sanjana L is a <strong>lady obstetrician and gynaecologist</strong> at{' '}
                  <strong>Raghava Multispeciality Hospital, Attibele</strong> — a short drive from
                  Bommasandra. She has 10 plus years of experience, is an{' '}
                  <strong>MS (OBG) Gold Medalist (RGUHS)</strong> and holds <strong>FMAS</strong>{' '}
                  (keyhole surgery) training.
                </p>
                <p
                  className="text-base mb-6 leading-relaxed max-w-[68ch]"
                  style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                >
                  She cares for women from Bommasandra, Hebbagodi, the industrial area, Anekal and
                  Chandapura. Common reasons for visits include <strong>pregnancy check-ups</strong>,{' '}
                  <strong>normal and painless delivery</strong>, <strong>PCOS</strong>,{' '}
                  <strong>fertility support</strong>, and <strong>laparoscopic surgery</strong>.
                  Consults are in English, Hindi, Kannada, or Telugu.
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
                  <a href="tel:+919980031006" className="btn-outline flex items-center gap-2">
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
                      title="Raghava Multispeciality Hospital — near Bommasandra"
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

        {/* ─── ABOUT ─── */}
        <section className="section-padding" style={{ background: '#FFFFFF' }}>
          <div className="container-hn max-w-4xl">
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#2D2D2D' }}
            >
              Why Women near Bommasandra Trust Dr. Sanjana L
            </h2>
            <div className="accent-line" />

            <div
              className="space-y-4 max-w-[68ch]"
              style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif', lineHeight: 1.8 }}
            >
              <p>
                Bommasandra sits right beside the Sarjapura–Attibele Road, so families here have a
                well-equipped maternity and gynaecology unit close by. Dr. Sanjana L consults at{' '}
                <strong>Raghava Multispeciality Hospital</strong> — no long drive into the city for
                trusted care.
              </p>
              <p>
                She listens, explains results in plain language, and reviews options with you before
                deciding anything. That approach has earned the trust of{' '}
                <strong>thousands of women</strong> across the southern belt.
              </p>
              <p>
                She treats both routine and complex cases — first pregnancies, high-risk pregnancy,
                PCOS, fibroids, ovarian cysts, endometriosis, fertility concerns and menopause. Visits
                are offered in <strong>English, Hindi, Kannada, and Telugu</strong>.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {[
                'MBBS, MS (Obstetrics & Gynaecology) — Gold Medalist, RGUHS',
                'FMAS — Fellowship in Minimal Access Surgery',
                '10+ years of clinical experience in obstetrics & gynaecology',
                'A female (lady) gynaecologist you can speak to openly',
                '24/7 anaesthesia, operative & newborn back-up at Raghava Hospital',
                'A short drive from Bommasandra, Hebbagodi & Anekal',
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

        {/* ─── SERVICES ─── */}
        <section className="section-padding" style={{ background: '#FFF8F0' }}>
          <div className="container-hn">
            <div className="text-center mb-12">
              <h2
                className="text-2xl md:text-3xl font-bold mb-3"
                style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#2D2D2D' }}
              >
                Gynaecology Services for Bommasandra Families
              </h2>
              <div className="accent-line mx-auto" />
              <div className="mx-auto max-w-2xl space-y-3 text-base font-sans text-ink-muted">
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
                  <span className="text-sm font-semibold flex items-center gap-1" style={{ color: '#8B5E83' }}>
                    Learn More <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-10 max-w-3xl mx-auto text-center">
              <p
                className="text-sm leading-relaxed"
                style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
              >
                <strong style={{ color: '#2D2D2D' }}>Popular near Bommasandra:</strong>{' '}
                <Link href="/normal-delivery-bommasandra" className="hover:underline" style={{ color: '#8B5E83' }}>
                  Normal Delivery near Bommasandra
                </Link>
                {', '}
                <Link href="/painless-delivery-bommasandra" className="hover:underline" style={{ color: '#8B5E83' }}>
                  Painless Delivery near Bommasandra
                </Link>
                {', '}
                <Link href="/maternity-package-cost-attibele" className="hover:underline" style={{ color: '#8B5E83' }}>
                  Maternity Package &amp; Cost
                </Link>
                {', '}
                <Link href="/services/uterine-fibroids-treatment" className="hover:underline" style={{ color: '#8B5E83' }}>
                  Uterine Fibroids
                </Link>
                {', '}
                <Link href="/services/ovarian-cyst-treatment" className="hover:underline" style={{ color: '#8B5E83' }}>
                  Ovarian Cysts
                </Link>
                {', and '}
                <Link href="/services/cesarean-delivery" className="hover:underline" style={{ color: '#8B5E83' }}>
                  Caesarean Delivery
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ─── MONEY PAGES FOR THIS AREA ─── */}
        <AreaMoneyPageLinks
          localities={['Bommasandra', 'Attibele']}
          heading={'Treatment & Delivery Guides in Bommasandra'}
          intro="Dr. Sanjana consults at Raghava Multispeciality Hospital, Attibele, serving Bommasandra and Hebbagodi. These guides cover what each treatment involves and how to book."
          background="#FFF8F0"
        />

        {/* ─── AREAS SERVED ─── */}
        <section className="section-padding" style={{ background: '#FFFFFF' }}>
          <div className="container-hn max-w-4xl">
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#2D2D2D' }}
            >
              Serving Women across Bommasandra and Nearby Areas
            </h2>
            <div className="accent-line" />

            <div className="text-base mb-6 leading-relaxed max-w-[68ch] space-y-3" style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
              <p className="m-0">
                Raghava Multispeciality Hospital is on the Sarjapura–Attibele Road, an easy drive from
                Bommasandra, Hebbagodi and the industrial area.
              </p>
              <p className="m-0">
                If you want a <strong>maternity hospital near Bommasandra</strong>, a{' '}
                <strong>lady gynaecologist near Hebbagodi</strong>, or a{' '}
                <strong>delivery hospital near Anekal</strong>, Dr. Sanjana L is often just minutes
                away.
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
                <Link href="/hsr-layout-gynaecologist" className="font-semibold text-primary hover:underline">
                  Health Nest, HSR Layout
                </Link>{' '}
                and at{' '}
                <Link href="/attibele-gynaecologist" className="font-semibold text-primary hover:underline">
                  Raghava Hospital, Attibele
                </Link>
                .
              </p>
              <p className="m-0">
                She also welcomes patients from{' '}
                <Link href="/chandapura-gynaecologist" className="font-semibold text-primary hover:underline">
                  Chandapura
                </Link>{' '}
                and{' '}
                <Link href="/electronic-city-sarjapura-gynaecologist" className="font-semibold text-primary hover:underline">
                  Electronic City &amp; Sarjapura
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="section-padding" style={{ background: '#FFF8F0' }}>
          <div className="container-hn max-w-3xl">
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#2D2D2D' }}
            >
              Frequently Asked Questions — Gynaecologist near Bommasandra
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
              Looking for a Trusted Gynaecologist near Bommasandra?
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
