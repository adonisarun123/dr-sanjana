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
  title: 'Best Gynaecologist in HSR Layout | Dr. Sanjana L — Health Nest',
  description:
    'Looking for the best gynaecologist in HSR Layout? Dr. Sanjana L (MBBS, MS OBG, Gold Medalist) at Health Nest, Sector 2 offers expert pregnancy care, normal & painless delivery, PCOS treatment, fertility support and laparoscopic surgery in HSR Layout, Bangalore.',
  keywords: [
    'best gynaecologist in HSR Layout',
    'gynaecologist HSR Layout',
    'lady gynaecologist HSR Layout',
    'female gynaecologist HSR Layout',
    'obstetrician HSR Layout',
    'pregnancy doctor HSR Layout',
    'normal delivery doctor HSR Layout',
    'PCOS treatment HSR Layout',
    'fertility specialist HSR Layout',
    'gynaecologist HSR Layout Sector 2',
    'gynaecologist near Agara',
    'gynaecologist near Koramangala',
    'gynaecologist near BTM Layout',
    'gynaecologist near Bommanahalli',
  ],
  alternates: {
    canonical: `${SITE_URL}/hsr-layout-gynaecologist`,
  },
  openGraph: {
    title: 'Best Gynaecologist in HSR Layout | Dr. Sanjana L — Health Nest',
    description:
      'Dr. Sanjana L at Health Nest, HSR Layout Sector 2 — 10+ years experienced gynaecologist & obstetrician. Expert pregnancy care, PCOS treatment, fertility & laparoscopic surgery.',
    url: `${SITE_URL}/hsr-layout-gynaecologist`,
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
    desc: 'Complete prenatal care from first trimester to delivery — routine check-ups, ultrasound guidance, nutrition counselling and birth planning at Health Nest, HSR Layout.',
    href: '/services/pregnancy-care',
  },
  {
    icon: HeartPulse,
    title: 'Normal & Painless Delivery',
    desc: 'Evidence-based support for safe vaginal deliveries, including painless delivery with epidural anaesthesia and a strong normal-delivery-first approach.',
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
    desc: 'Holistic hormonal management, lifestyle guidance, weight support and fertility care for polycystic ovary conditions.',
    href: '/pcos-treatment-hsr-layout',
  },
  {
    icon: Stethoscope,
    title: 'Fertility Treatment',
    desc: 'Comprehensive fertility evaluation, ovulation induction, IUI guidance and IVF counselling for couples trying to conceive.',
    href: '/fertility-ivf-treatment-hsr-layout',
  },
  {
    icon: Scissors,
    title: 'Laparoscopic Surgery',
    desc: 'Minimally invasive keyhole surgery for ovarian cysts, fibroids, endometriosis and ectopic pregnancies with faster recovery.',
    href: '/laparoscopic-surgery-hsr-layout',
  },
];

const faqs: { q: string; a: string }[] = [
  {
    q: 'Who is the best gynaecologist in HSR Layout?',
    a: 'Dr. Sanjana L sees patients at Health Nest, HSR Layout Sector 2. She is a trusted lady obstetrician and gynaecologist for the area.\n\nShe is MBBS, MS (OBG) Gold Medalist (RGUHS), and FMAS-trained, with 10 plus years of experience. She supports pregnancy, normal and painless birth, PCOS care, fertility, and keyhole surgery.\n\nTimings at HSR Layout: Mon–Sat, 10 AM–8 PM. She also consults at Raghava Multispeciality Hospital, Attibele.',
  },
  {
    q: 'Is there a lady (female) gynaecologist in HSR Layout?',
    a: 'Yes. Dr. Sanjana L is a woman gynaecologist at Health Nest on 24th Main Road, HSR Layout Sector 2.\n\nMany women prefer a female doctor for gynaecology care. Visits are private, unhurried and respectful. She speaks English, Hindi, Kannada, and Telugu.',
  },
  {
    q: 'What gynaecology services are available at Health Nest, HSR Layout?',
    a: 'You can book pregnancy visits, scans, and birth planning. Dr. Sanjana supports normal birth, painless birth with epidural when suitable, and caesarean birth when needed.\n\nShe also treats PCOS/PCOD, fibroids, ovarian cysts, endometriosis, period problems, fertility concerns, and menopause, and performs laparoscopy, hysteroscopy, cervical screening, and contraception advice.',
  },
  {
    q: 'What are the consulting hours for Dr. Sanjana L at HSR Layout?',
    a: 'Monday to Saturday: 10:00 AM to 8:00 PM at Health Nest, HSR Layout.\n\nSunday: by appointment only.\n\nCall +91-9449031003 or use the website booking form.',
  },
  {
    q: 'How do I reach Health Nest from Koramangala, BTM Layout or Bommanahalli?',
    a: 'Address: 1162, 24th Main Road, Sector 2, HSR Layout, Bengaluru 560102.\n\nIt is central to all HSR sectors and a short drive from Agara, Koramangala, BTM Layout, Bommanahalli and Sarjapur Road. Parking is available, and buses and cabs serve the area well.',
  },
  {
    q: 'Does Dr. Sanjana perform normal deliveries and C-sections for HSR Layout patients?',
    a: 'Yes. She supports normal (vaginal) birth and caesarean birth when clinically right for you and your baby, with a normal-delivery-first approach.\n\nPainless labour with epidural is available when suitable, with anaesthesia and newborn support on hand.',
  },
  {
    q: 'What is the consultation fee for Dr. Sanjana L at HSR Layout?',
    a: 'Fees are kept fair for patients.\n\nCall +91-9449031003 for the latest consultation fee. If you book online, the team can confirm the cost before you visit.',
  },
  {
    q: 'Can I consult Dr. Sanjana online if I live in HSR Layout?',
    a: 'Yes. Video visits work well for follow-up, second opinions, and many non-urgent questions.\n\nBook on the Health Nest website or call +91-9449031003.',
  },
];

const nearbyAreas = [
  'HSR Layout Sector 1',
  'HSR Layout Sector 2',
  'Agara',
  'Bommanahalli',
  'Koramangala',
  'BTM Layout',
  'Sarjapur Road',
  'Bellandur',
];

/* ──────────────────────────── SCHEMAS ──────────────────────────── */

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Dr. Sanjana L — Gynaecologist at Health Nest, HSR Layout',
  description:
    'Best gynaecologist in HSR Layout offering pregnancy care, normal and painless delivery, PCOS treatment, fertility support and laparoscopic surgery at Health Nest, Sector 2.',
  url: `${SITE_URL}/hsr-layout-gynaecologist`,
  telephone: '+91-9449031003',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1162, 24th Main Rd, Sector 2, HSR Layout',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560102',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '12.9141',
    longitude: '77.6455',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday'],
      opens: '10:00',
      closes: '20:00',
      description: 'By Appointment Only',
    },
  ],
  priceRange: '$$',
  image: `${SITE_URL}/dr-sanjana-hero.png`,
  areaServed: [
    { '@type': 'City', name: 'HSR Layout, Bengaluru' },
    { '@type': 'City', name: 'Agara' },
    { '@type': 'City', name: 'Bommanahalli' },
    { '@type': 'City', name: 'Koramangala' },
    { '@type': 'City', name: 'BTM Layout' },
    { '@type': 'City', name: 'Sarjapur Road' },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '200',
    bestRating: '5',
  },
  hasMap: 'https://maps.google.com/?q=Health+Nest+HSR+Layout+Bangalore',
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
      name: 'Gynaecologist in HSR Layout',
      item: `${SITE_URL}/hsr-layout-gynaecologist`,
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

export default function HSRLayoutGynaecologistPage() {
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
                { label: 'Gynaecologist in HSR Layout' },
              ]}
            />

            <div className="mt-6 grid lg:grid-cols-12 gap-10 items-start">
              {/* Left — Main Content */}
              <div className="lg:col-span-7">
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4"
                  style={{
                    background: 'rgba(139,94,131,0.12)',
                    color: '#8B5E83',
                    fontFamily: 'var(--font-body), system-ui, sans-serif',
                  }}
                >
                  HSR Layout &middot; Agara &middot; Koramangala &middot; BTM Layout
                </span>

                <h1
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight"
                  style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#2D2D2D' }}
                >
                  Best Gynaecologist in HSR Layout —{' '}
                  <span style={{ color: '#8B5E83' }}>Dr. Sanjana L</span>
                </h1>

                <div className="accent-line" />

                <p
                  className="text-base md:text-lg mb-4 leading-relaxed max-w-[68ch]"
                  style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                >
                  Dr. Sanjana L is a <strong>lady obstetrician and gynaecologist</strong> at{' '}
                  <strong>Health Nest, HSR Layout Sector 2</strong>. She has 10 plus years of
                  experience. She is an <strong>MS (OBG) Gold Medalist (RGUHS)</strong> and holds{' '}
                  <strong>FMAS</strong> (keyhole surgery) training.
                </p>
                <p
                  className="text-base mb-6 leading-relaxed max-w-[68ch]"
                  style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                >
                  She cares for women across HSR Layout and nearby Agara, Bommanahalli, Koramangala,
                  BTM Layout and Sarjapur Road. Common reasons for visits include{' '}
                  <strong>pregnancy check-ups</strong>, <strong>normal and painless delivery</strong>,{' '}
                  <strong>PCOS</strong>, <strong>fertility support</strong>, and{' '}
                  <strong>laparoscopic surgery</strong>. Consults are in English, Hindi, Kannada, or
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
                  <a href="tel:+919449031003" className="btn-outline flex items-center gap-2">
                    <Phone size={18} /> Call: +91-9449031003
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
                    Health Nest — HSR Layout
                  </h2>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin size={18} className="mt-0.5 flex-shrink-0" style={{ color: '#8B5E83' }} />
                      <p className="text-sm" style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
                        1162, 24th Main Rd, Sector 2, HSR Layout, Bengaluru, Karnataka 560102
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={18} className="flex-shrink-0" style={{ color: '#8B5E83' }} />
                      <a
                        href="tel:+919449031003"
                        className="text-sm font-semibold hover:underline"
                        style={{ color: '#2A6B5A', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                      >
                        +91-9449031003
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock size={18} className="mt-0.5 flex-shrink-0" style={{ color: '#8B5E83' }} />
                      <div className="text-sm" style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
                        <p className="font-semibold" style={{ color: '#2D2D2D' }}>
                          Mon – Sat: 10:00 AM – 8:00 PM
                        </p>
                        <p>Sunday: By Appointment</p>
                      </div>
                    </div>
                  </div>

                  {/* Google Map Embed */}
                  <div className="mt-5 rounded-xl overflow-hidden" style={{ height: '200px' }}>
                    <iframe
                      src="https://maps.google.com/maps?q=Health%20Nest%20HSR%20Layout%20Sector%202%20Bengaluru&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Health Nest HSR Layout Location"
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
                      href="https://maps.google.com/?q=Health+Nest+HSR+Layout+Bangalore"
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

        {/* ─── ABOUT DR. SANJANA IN HSR LAYOUT ─── */}
        <section className="section-padding" style={{ background: '#FFFFFF' }}>
          <div className="container-hn max-w-4xl">
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#2D2D2D' }}
            >
              Why Women in HSR Layout Trust Dr. Sanjana L
            </h2>
            <div className="accent-line" />

            <div
              className="space-y-4 max-w-[68ch]"
              style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif', lineHeight: 1.8 }}
            >
              <p>
                Health Nest sits in the heart of <strong>HSR Layout Sector 2</strong>, on 24th Main
                Road. For women across HSR and the neighbouring areas, it means an experienced lady
                gynaecologist is close by — no long drive across the city for trusted women&apos;s
                healthcare.
              </p>
              <p>
                Dr. Sanjana L listens, explains results in plain language, and reviews the options
                with you before deciding anything. That approach has earned the trust of{' '}
                <strong>200 plus reviewing patients</strong> and thousands more across South Bangalore.
              </p>
              <p>
                She treats both routine and complex cases — first pregnancies, high-risk pregnancy,
                PCOS, fibroids, ovarian cysts, endometriosis, fertility concerns and menopause. Visits
                are offered in <strong>English, Hindi, Kannada, and Telugu</strong>, in a private and
                unhurried setting.
              </p>
            </div>

            {/* Key credentials */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {[
                'MBBS, MS (Obstetrics & Gynaecology) — Gold Medalist, RGUHS',
                'FMAS — Fellowship in Minimal Access Surgery',
                '10+ years of clinical experience in obstetrics & gynaecology',
                'A female (lady) gynaecologist you can speak to openly',
                'Two locations: HSR Layout Sector 2 & Attibele',
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

            {/* Lady gynaecologist highlight */}
            <div
              className="mt-8 rounded-2xl p-6"
              style={{ background: 'rgba(139,94,131,0.06)', border: '1px solid #E8E0DB' }}
            >
              <p className="text-sm leading-relaxed m-0" style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
                Prefer a female doctor? Dr. Sanjana is a{' '}
                <Link href="/lady-gynaecologist-hsr-layout" className="font-semibold hover:underline" style={{ color: '#8B5E83' }}>
                  lady gynaecologist in HSR Layout
                </Link>{' '}
                — many women find it easier to discuss intimate health concerns with a woman doctor.
              </p>
            </div>
          </div>
        </section>

        {/* ─── SERVICES OFFERED IN HSR LAYOUT ─── */}
        <section className="section-padding" style={{ background: '#FFF8F0' }}>
          <div className="container-hn">
            <div className="text-center mb-12">
              <h2
                className="text-2xl md:text-3xl font-bold mb-3"
                style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#2D2D2D' }}
              >
                Gynaecology Services in HSR Layout
              </h2>
              <div className="accent-line mx-auto" />
              <div className="mx-auto max-w-2xl space-y-3 text-base font-sans text-ink-muted">
                <p className="m-0">Dr. Sanjana L runs a full women&apos;s health clinic at Health Nest, HSR Layout Sector 2.</p>
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

            {/* Additional services list */}
            <div className="mt-10 max-w-3xl mx-auto text-center">
              <p
                className="text-sm leading-relaxed"
                style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
              >
                <strong style={{ color: '#2D2D2D' }}>Also available in HSR Layout:</strong>{' '}
                <Link href="/services/uterine-fibroids-treatment" className="hover:underline" style={{ color: '#8B5E83' }}>
                  Uterine Fibroids Treatment
                </Link>
                {', '}
                <Link href="/services/ovarian-cyst-treatment" className="hover:underline" style={{ color: '#8B5E83' }}>
                  Ovarian Cyst Treatment
                </Link>
                {', '}
                <Link href="/services/endometriosis-treatment" className="hover:underline" style={{ color: '#8B5E83' }}>
                  Endometriosis Treatment
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

        {/* ─── MONEY PAGES FOR THIS AREA ─── */}
        <AreaMoneyPageLinks
          localities={['HSR Layout']}
          heading={'Treatments & Delivery Care in HSR Layout'}
          intro="Detailed guides to the care Dr. Sanjana provides at Health Nest, Sector 2 — what to expect, who it suits and how to book."
          background="#FFFFFF"
        />

        {/* ─── AREAS SERVED ─── */}
        <section className="section-padding" style={{ background: '#FFFFFF' }}>
          <div className="container-hn max-w-4xl">
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#2D2D2D' }}
            >
              Serving Women across HSR Layout and Nearby Areas
            </h2>
            <div className="accent-line" />

            <div className="text-base mb-6 leading-relaxed max-w-[68ch] space-y-3" style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
              <p className="m-0">
                Health Nest is on 24th Main Road in HSR Layout Sector 2, central to all the HSR
                sectors and easy to reach from the surrounding neighbourhoods.
              </p>
              <p className="m-0">
                If you want a <strong>gynaecologist near Agara</strong>, a{' '}
                <strong>lady gynaecologist near Koramangala or BTM Layout</strong>, or a{' '}
                <strong>pregnancy doctor near Bommanahalli</strong>, Dr. Sanjana L is often just a
                short drive away.
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
                <Link href="/attibele-gynaecologist" className="font-semibold text-primary hover:underline">
                  Raghava Multispeciality Hospital, Attibele
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
              Frequently Asked Questions — Gynaecologist in HSR Layout
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
              Looking for a Trusted Gynaecologist in HSR Layout?
            </h2>
            <div className="mx-auto mb-8 max-w-xl space-y-2 font-sans text-white/80">
              <p className="m-0">Book with Dr. Sanjana L at Health Nest, HSR Layout Sector 2.</p>
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
                href="tel:+919449031003"
                className="px-8 py-3.5 border-2 border-white rounded-xl text-white font-semibold text-sm hover:bg-white/10 transition-colors flex items-center gap-2"
                style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
              >
                <Phone size={16} /> Call +91-9449031003
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
