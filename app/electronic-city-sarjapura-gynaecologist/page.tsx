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

/* ──────────────────────────── SEO META ──────────────────────────── */

export const metadata: Metadata = {
  title:
    'Best Gynaecologist near Electronic City & Sarjapura — Dr. Sanjana L',
  description:
    'Looking for the best gynaecologist near Electronic City or Sarjapura Road? Dr. Sanjana L (MBBS, MS OBG, Gold Medalist) offers expert pregnancy care, normal delivery, PCOS treatment, fertility support & laparoscopic surgery at Health Nest HSR Layout and Raghava Hospital Attibele — both within easy reach.',
  keywords: [
    'best gynaecologist in Electronic City',
    'best gynaecologist in Sarjapura',
    'gynaecologist near Sarjapura Road',
    'pregnancy doctor Electronic City',
    'pregnancy doctor Sarjapura Road',
    'fertility specialist Sarjapura',
    'PCOS treatment Electronic City',
    'fertility treatment Electronic City',
    'maternity hospital near Electronic City',
    'gynaecologist near Dommasandra',
    'gynaecologist near Begur',
    'gynaecologist near Kudlu Gate',
    'lady gynaecologist Electronic City Bangalore',
  ],
  alternates: {
    canonical: 'https://healthnest.in/electronic-city-sarjapura-gynaecologist',
  },
  openGraph: {
    title:
      'Best Gynaecologist near Electronic City & Sarjapura — Dr. Sanjana L',
    description:
      'Dr. Sanjana L — 10+ years experienced gynaecologist & obstetrician near Electronic City & Sarjapura. Expert pregnancy care, PCOS treatment, fertility & laparoscopic surgery at Health Nest HSR Layout.',
    url: 'https://healthnest.in/electronic-city-sarjapura-gynaecologist',
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
    desc: 'Complete prenatal care from your first positive test to safe delivery — routine check-ups, anomaly scans, nutrition counselling and birth planning.',
    href: '/services/pregnancy-care',
  },
  {
    icon: HeartPulse,
    title: 'Normal & Painless Delivery',
    desc: 'Evidence-based support for safe vaginal deliveries, including painless delivery with epidural pain management for a comfortable birthing experience.',
    href: '/services/painless-delivery',
  },
  {
    icon: Shield,
    title: 'High-Risk Pregnancy',
    desc: 'Expert management for gestational diabetes, preeclampsia, twin pregnancies, advanced maternal age and pregnancies with prior complications.',
    href: '/services/high-risk-pregnancy',
  },
  {
    icon: Microscope,
    title: 'PCOS / PCOD Treatment',
    desc: 'Comprehensive hormonal management, lifestyle modification, weight loss support and fertility guidance for polycystic ovary conditions.',
    href: '/services/pcos-pcod-treatment',
  },
  {
    icon: Stethoscope,
    title: 'Fertility Treatment',
    desc: 'Thorough fertility evaluation, ovulation tracking, IUI guidance, IVF counselling and treatment for couples trying to conceive.',
    href: '/services/fertility-treatment',
  },
  {
    icon: Scissors,
    title: 'Laparoscopic Surgery',
    desc: 'Minimally invasive keyhole surgery for ovarian cysts, fibroids, endometriosis and ectopic pregnancies — faster recovery, smaller scars.',
    href: '/services/laparoscopic-surgery',
  },
];

const faqs: { q: string; a: string }[] = [
  {
    q: 'Who is the best gynaecologist near Electronic City, Bangalore?',
    a: 'Dr. Sanjana L at Health Nest, HSR Layout is one of the most trusted gynaecologists serving women from Electronic City and surrounding areas. With over 10 years of clinical experience, an MS (OBG) Gold Medal from RGUHS, and FMAS certification, she provides comprehensive gynaecology and obstetric care. Health Nest in HSR Layout is only 15–20 minutes from Electronic City Phase 1 and Phase 2.',
  },
  {
    q: 'How far is Health Nest HSR Layout from Electronic City?',
    a: 'Health Nest clinic in HSR Layout is approximately 8–10 km from Electronic City Phase 1 and Phase 2, which translates to roughly 15–25 minutes by car depending on traffic. For patients closer to the Attibele side of Electronic City, Raghava Multispeciality Hospital on Sarjapura–Attibele Road (about 15 km) is an alternative option where Dr. Sanjana also consults.',
  },
  {
    q: 'Is there a good gynaecologist near Sarjapura Road?',
    a: 'Yes. Dr. Sanjana L consults at Health Nest, HSR Layout — which is conveniently located for residents along Sarjapura Road, Dommasandra, Carmelaram and Harlur. She offers a complete range of gynaecology services including pregnancy care, PCOS treatment, fertility support, laparoscopic surgery and more. Consultations are available Monday to Saturday, and she speaks English, Hindi, Kannada and Telugu.',
  },
  {
    q: 'What gynaecology services are available near Electronic City?',
    a: 'At Health Nest (HSR Layout) and Raghava Hospital (Attibele), Dr. Sanjana L provides pregnancy care, normal and painless delivery, caesarean delivery, high-risk pregnancy management, PCOS/PCOD treatment, fertility evaluation and treatment (IUI/IVF guidance), laparoscopic surgery, hysteroscopy, menstrual disorder management, cervical cancer screening, contraception counselling, and menopause care.',
  },
  {
    q: 'Can I consult Dr. Sanjana for PCOS treatment near Electronic City?',
    a: 'Absolutely. PCOS and PCOD are among Dr. Sanjana\'s core specialities. She provides holistic management including hormonal evaluation, ultrasound assessment, medication, lifestyle and diet guidance, weight management support, and fertility treatment if needed. Her clinic at Health Nest, HSR Layout is a short drive from Electronic City.',
  },
  {
    q: 'Does Dr. Sanjana offer pregnancy care for women in Sarjapura and Dommasandra?',
    a: 'Yes. Many of Dr. Sanjana\'s patients come from Sarjapura Road, Dommasandra, Carmelaram, and surrounding areas. She provides complete prenatal care including regular check-ups, all necessary scans, nutrition advice, high-risk pregnancy management, and safe delivery services. You can choose to visit Health Nest (HSR Layout) or Raghava Hospital (Attibele) based on what is more convenient.',
  },
  {
    q: 'What are the consulting hours for Dr. Sanjana at HSR Layout?',
    a: 'Dr. Sanjana L consults at Health Nest, HSR Layout from Monday to Saturday, 8:00 AM to 9:00 PM. Sunday consultations are available by appointment. You can book by calling +91-9449031003 or through the online appointment form on our website.',
  },
  {
    q: 'Is online consultation available for patients in Electronic City?',
    a: 'Yes. Dr. Sanjana L offers teleconsultation and video consultations for follow-ups, second opinions, and non-emergency gynaecology queries. This is especially convenient for working professionals in Electronic City who may find it difficult to visit during office hours. Book online via the Health Nest website.',
  },
];

const nearbyAreas = [
  'Electronic City Phase 1',
  'Electronic City Phase 2',
  'Sarjapura Road',
  'Dommasandra',
  'Carmelaram',
  'Kudlu Gate',
  'Begur',
  'Hosa Road',
];

const travelTimes = [
  { from: 'Electronic City Phase 1', time: '15–20 min', distance: '~8 km', clinic: 'Health Nest, HSR Layout' },
  { from: 'Electronic City Phase 2', time: '20–25 min', distance: '~10 km', clinic: 'Health Nest, HSR Layout' },
  { from: 'Sarjapura Road', time: '10–15 min', distance: '~5 km', clinic: 'Health Nest, HSR Layout' },
  { from: 'Dommasandra', time: '15–20 min', distance: '~8 km', clinic: 'Health Nest, HSR Layout' },
  { from: 'Kudlu Gate / Begur', time: '10–15 min', distance: '~4 km', clinic: 'Health Nest, HSR Layout' },
  { from: 'South Electronic City', time: '20–25 min', distance: '~12 km', clinic: 'Raghava Hospital, Attibele' },
];

/* ──────────────────────────── SCHEMAS ──────────────────────────── */

const physicianSchema = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: 'Dr. Sanjana L',
  description:
    'Obstetrician & Gynaecologist with 10+ years experience serving Electronic City, Sarjapura Road, Dommasandra and South Bangalore',
  medicalSpecialty: 'Obstetrics and Gynaecology',
  qualification: 'MBBS, MS (Obstetrics & Gynaecology), Gold Medalist RGUHS, FMAS',
  yearsOfExperience: 10,
  availableLanguage: ['English', 'Hindi', 'Kannada', 'Telugu'],
  worksFor: [
    {
      '@type': 'MedicalBusiness',
      name: 'Health Nest',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1162, 24th Main Rd, Sector 2, HSR Layout',
        addressLocality: 'Bangalore',
        addressRegion: 'Karnataka',
        postalCode: '560102',
        addressCountry: 'IN',
      },
      telephone: '+91-9449031003',
    },
    {
      '@type': 'MedicalBusiness',
      name: 'Raghava Multispeciality Hospital',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '39, Sarjapura - Attibele Rd, opposite Syndicate Bank',
        addressLocality: 'Attibele, Bengaluru',
        addressRegion: 'Karnataka',
        postalCode: '562107',
        addressCountry: 'IN',
      },
      telephone: '+91-9980031006',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '200',
    bestRating: '5',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Dr. Sanjana L — Gynaecologist near Electronic City & Sarjapura',
  description:
    'Best gynaecologist near Electronic City and Sarjapura Road offering pregnancy care, normal delivery, PCOS treatment, fertility support and laparoscopic surgery at Health Nest, HSR Layout.',
  url: 'https://healthnest.in/electronic-city-sarjapura-gynaecologist',
  telephone: '+91-9449031003',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1162, 24th Main Rd, Sector 2, HSR Layout',
    addressLocality: 'Bangalore',
    addressRegion: 'Karnataka',
    postalCode: '560102',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '12.9116',
    longitude: '77.6389',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '21:00',
    },
  ],
  priceRange: '$$',
  image: 'https://healthnest.in/dr-sanjana-hero.png',
  areaServed: [
    { '@type': 'City', name: 'Electronic City, Bangalore' },
    { '@type': 'City', name: 'Sarjapura' },
    { '@type': 'City', name: 'Dommasandra' },
    { '@type': 'City', name: 'Carmelaram' },
    { '@type': 'City', name: 'Kudlu Gate' },
    { '@type': 'City', name: 'Begur' },
    { '@type': 'City', name: 'Hosa Road' },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '200',
    bestRating: '5',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://healthnest.in',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Gynaecologist near Electronic City & Sarjapura',
      item: 'https://healthnest.in/electronic-city-sarjapura-gynaecologist',
    },
  ],
};

/* ──────────────────────────── PAGE ──────────────────────────── */

export default function ElectronicCitySarjapuraGynaecologistPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
      />
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
                { label: 'Gynaecologist near Electronic City & Sarjapura' },
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
                    fontFamily: 'DM Sans, sans-serif',
                  }}
                >
                  Electronic City &middot; Sarjapura &middot; Dommasandra &middot; Kudlu Gate
                </span>

                <h1
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#2D2D2D' }}
                >
                  Best Gynaecologist near Electronic City &amp; Sarjapura —{' '}
                  <span style={{ color: '#8B5E83' }}>Dr. Sanjana L</span>
                </h1>

                <div className="accent-line" />

                <p
                  className="text-base md:text-lg mb-6 leading-relaxed"
                  style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif' }}
                >
                  Women in <strong>Electronic City, Sarjapura Road, and Dommasandra</strong> now have
                  access to expert gynaecological care just a short drive away. Dr. Sanjana L is a
                  senior <strong>obstetrician and gynaecologist</strong> with over 10 years of
                  experience, an <strong>MS (OBG) Gold Medal from RGUHS</strong>, and FMAS
                  certification in minimally invasive surgery. She practises at{' '}
                  <strong>Health Nest, HSR Layout</strong> (15–20 minutes from Electronic City Phase 1
                  and 2) and <strong>Raghava Multispeciality Hospital, Attibele</strong>.
                </p>
                <p
                  className="text-base mb-6 leading-relaxed"
                  style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif' }}
                >
                  Whether you are looking for a trusted{' '}
                  <strong>pregnancy doctor near Electronic City</strong>, need{' '}
                  <strong>PCOS treatment on Sarjapura Road</strong>, or are searching for a{' '}
                  <strong>fertility specialist near Dommasandra</strong> — Dr. Sanjana provides
                  personalised, evidence-based care in English, Hindi, Kannada, and Telugu.
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
                        fontFamily: 'DM Sans, sans-serif',
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
                    href="tel:+919449031003"
                    className="btn-outline flex items-center gap-2"
                  >
                    <Phone size={18} /> Call: +91-9449031003
                  </a>
                </div>
              </div>

              {/* Right — Two Clinic Cards */}
              <div className="lg:col-span-5 space-y-5">
                {/* HSR Layout Clinic */}
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
                    style={{ fontFamily: 'Playfair Display, serif', color: '#2D2D2D' }}
                  >
                    Health Nest — HSR Layout
                  </h2>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#8B5E83' }} />
                      <p className="text-sm" style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif' }}>
                        1162, 24th Main Rd, Sector 2, HSR Layout, Bangalore 560102
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={16} className="flex-shrink-0" style={{ color: '#8B5E83' }} />
                      <a
                        href="tel:+919449031003"
                        className="text-sm font-semibold hover:underline"
                        style={{ color: '#2A6B5A', fontFamily: 'DM Sans, sans-serif' }}
                      >
                        +91-9449031003
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#8B5E83' }} />
                      <div className="text-sm" style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif' }}>
                        <p className="font-semibold" style={{ color: '#2D2D2D' }}>
                          Mon – Sat: 8:00 AM – 9:00 PM
                        </p>
                        <p>Sunday: By Appointment</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Navigation size={16} className="flex-shrink-0" style={{ color: '#8B5E83' }} />
                      <p className="text-sm" style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif' }}>
                        ~15–20 min from Electronic City Phase 1 &amp; 2
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <Link
                      href="/book-appointment"
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white font-semibold text-sm"
                      style={{
                        background: 'linear-gradient(135deg, #8B5E83, #6B4563)',
                        fontFamily: 'DM Sans, sans-serif',
                      }}
                    >
                      <Calendar size={16} /> Book Appointment
                    </Link>
                  </div>
                </div>

                {/* Attibele Clinic */}
                <div
                  className="rounded-2xl p-5"
                  style={{ background: '#FFFFFF', border: '1px solid #E8E0DB' }}
                >
                  <h3
                    className="text-base font-bold mb-2"
                    style={{ fontFamily: 'DM Sans, sans-serif', color: '#2D2D2D' }}
                  >
                    Also available at: Raghava Hospital, Attibele
                  </h3>
                  <div className="flex items-start gap-2">
                    <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: '#8B5E83' }} />
                    <p className="text-xs" style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif' }}>
                      39, Sarjapura – Attibele Rd, Attibele 562107 &middot;{' '}
                      <a href="tel:+919980031006" className="font-semibold hover:underline" style={{ color: '#2A6B5A' }}>
                        +91-9980031006
                      </a>
                    </p>
                  </div>
                  <Link
                    href="/attibele-gynaecologist"
                    className="text-xs font-semibold mt-2 inline-flex items-center gap-1"
                    style={{ color: '#8B5E83' }}
                  >
                    View Attibele clinic details <ArrowRight size={12} />
                  </Link>
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
              style={{ fontFamily: 'Playfair Display, serif', color: '#2D2D2D' }}
            >
              How to Reach Dr. Sanjana from Electronic City &amp; Sarjapura
            </h2>
            <div className="accent-line" />

            <p
              className="text-base mb-8 leading-relaxed"
              style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif' }}
            >
              Health Nest in HSR Layout is the closest clinic for most residents of Electronic City
              and Sarjapura Road. For patients in South Electronic City or areas closer to Attibele,
              Raghava Multispeciality Hospital is an equally convenient option.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
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
              style={{ fontFamily: 'Playfair Display, serif', color: '#2D2D2D' }}
            >
              Why Women from Electronic City &amp; Sarjapura Choose Dr. Sanjana L
            </h2>
            <div className="accent-line" />

            <div className="space-y-4" style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.8 }}>
              <p>
                Electronic City and Sarjapura Road are home to thousands of working women and young
                families — yet finding a skilled, approachable gynaecologist nearby has historically
                been a challenge. Dr. Sanjana L at Health Nest bridges this gap with world-class
                women&apos;s healthcare just 15–20 minutes from your doorstep.
              </p>
              <p>
                Her patient-first approach means she takes the time to listen, explain diagnoses
                clearly, walk you through every treatment option, and ensure you feel confident in
                every decision about your health. This philosophy — combined with her Gold Medal
                credentials and extensive surgical experience — has made her the gynaecologist of
                choice for over <strong>5,000 women</strong> across South Bangalore.
              </p>
              <p>
                Whether you are an IT professional in Electronic City planning your first pregnancy,
                a young mother on Sarjapura Road dealing with postpartum concerns, or a teenager in
                Dommasandra experiencing irregular periods — Dr. Sanjana provides the same meticulous,
                compassionate care tailored to your individual needs and life stage.
              </p>
            </div>

            {/* Key credentials */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {[
                'MBBS, MS (Obstetrics & Gynaecology) — Gold Medalist, RGUHS',
                'FMAS — Fellowship in Minimal Access Surgery',
                '10+ years of clinical experience in obstetrics & gynaecology',
                'Multilingual: English, Hindi, Kannada, Telugu',
                'Two convenient locations: HSR Layout (15 min) & Attibele',
                'Trusted by 5,000+ patients across South Bangalore',
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-xl"
                  style={{ background: '#FFFFFF', border: '1px solid #E8E0DB' }}
                >
                  <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#8B5E83' }} />
                  <p className="text-sm" style={{ color: '#2D2D2D', fontFamily: 'DM Sans, sans-serif' }}>
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
                style={{ fontFamily: 'Playfair Display, serif', color: '#2D2D2D' }}
              >
                Gynaecology Services for Electronic City &amp; Sarjapura Residents
              </h2>
              <div className="accent-line mx-auto" />
              <p
                className="text-base max-w-2xl mx-auto"
                style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif' }}
              >
                Dr. Sanjana L offers comprehensive women&apos;s healthcare — from routine check-ups
                to advanced surgical procedures — at Health Nest, HSR Layout and Raghava Hospital,
                Attibele.
              </p>
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
                    style={{ fontFamily: 'DM Sans, sans-serif', color: '#2D2D2D' }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-3"
                    style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif' }}
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
                style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif' }}
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
              style={{ fontFamily: 'Playfair Display, serif', color: '#2D2D2D' }}
            >
              Serving Women across Electronic City, Sarjapura &amp; Nearby Areas
            </h2>
            <div className="accent-line" />

            <p
              className="text-base mb-6 leading-relaxed"
              style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif' }}
            >
              Whether you are searching for a <strong>gynaecologist near Dommasandra</strong>, a{' '}
              <strong>maternity hospital near Electronic City</strong>, or a{' '}
              <strong>fertility clinic near Sarjapura Road</strong> — Dr. Sanjana L&apos;s clinics
              are conveniently located to serve patients from across this fast-growing corridor of
              South Bangalore.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {nearbyAreas.map((area, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 p-3 rounded-xl text-sm font-medium"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E8E0DB',
                    color: '#2D2D2D',
                    fontFamily: 'DM Sans, sans-serif',
                  }}
                >
                  <MapPin size={14} style={{ color: '#8B5E83', flexShrink: 0 }} />
                  {area}
                </div>
              ))}
            </div>

            <p
              className="text-sm mt-6 leading-relaxed"
              style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif' }}
            >
              Dr. Sanjana also serves patients from{' '}
              <Link href="/attibele-gynaecologist" className="font-semibold hover:underline" style={{ color: '#8B5E83' }}>
                Attibele, Chandapura &amp; Anekal
              </Link>{' '}
              at Raghava Multispeciality Hospital — giving women across South Bangalore two convenient
              clinic locations.
            </p>
          </div>
        </section>

        {/* ─── FAQ SECTION ─── */}
        <section className="section-padding" style={{ background: '#FFFFFF' }}>
          <div className="container-hn max-w-3xl">
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: 'Playfair Display, serif', color: '#2D2D2D' }}
            >
              Frequently Asked Questions — Gynaecologist near Electronic City &amp; Sarjapura
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
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Expert Gynaecology Care — Just Minutes from Electronic City
            </h2>
            <p
              className="text-white/80 max-w-xl mx-auto mb-8"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Book a consultation with Dr. Sanjana L at Health Nest, HSR Layout. Compassionate,
              world-class women&apos;s healthcare within easy reach of your home or office.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/book-appointment"
                className="px-8 py-3.5 bg-white rounded-xl font-semibold text-sm shadow-lg hover:scale-105 transition-transform"
                style={{ color: '#8B5E83', fontFamily: 'DM Sans, sans-serif' }}
              >
                Book Appointment Online
              </Link>
              <a
                href="tel:+919449031003"
                className="px-8 py-3.5 border-2 border-white rounded-xl text-white font-semibold text-sm hover:bg-white/10 transition-colors flex items-center gap-2"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
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
