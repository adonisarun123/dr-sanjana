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
  Smile,
  Baby,
  HeartPulse,
  HeartHandshake,
  Shield,
  Stethoscope,
  Sparkles,
  Users,
  AlertCircle,
  Activity,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import FAQAccordion from '@/components/FAQAccordion';
import { getLocationServicesForService } from '@/lib/locationServices';
import { SITE_URL } from '@/lib/site';

const nearbyPages = getLocationServicesForService('normal-delivery');

/* ──────────────────────────── SEO META ──────────────────────────── */

export const metadata: Metadata = {
  title:
    'Normal Delivery Doctor in HSR Layout, Attibele & South Bangalore — Dr. Sanjana L | Health Nest',
  description:
    'Looking for a trusted normal delivery doctor in HSR Layout, Attibele or South Bangalore? Dr. Sanjana L (MS OBG, Gold Medalist) offers safe, supportive vaginal delivery at Health Nest (HSR Layout) and Raghava Multispeciality Hospital (Attibele) — with painless delivery, low caesarean rate and 24×7 obstetric cover.',
  keywords: [
    'normal delivery doctor HSR Layout',
    'normal delivery doctor Attibele',
    'normal delivery doctor South Bangalore',
    'normal delivery cost HSR Layout',
    'normal delivery cost Attibele',
    'best hospital for normal delivery Attibele',
    'best hospital for normal delivery Sarjapura Road',
    'vaginal delivery doctor Attibele',
    'vaginal delivery doctor HSR Layout',
    'normal delivery hospital HSR Layout',
    'painless normal delivery Bangalore South',
  ],
  alternates: {
    canonical: `${SITE_URL}/services/normal-delivery`,
  },
  openGraph: {
    title:
      'Normal Delivery Doctor in HSR Layout, Attibele & South Bangalore — Dr. Sanjana L',
    description:
      'Safe, supportive vaginal delivery by Dr. Sanjana L at Health Nest (HSR Layout) and Raghava Multispeciality Hospital (Attibele). Birth planning, painless delivery, low caesarean rate.',
    url: `${SITE_URL}/services/normal-delivery`,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Health Nest',
  },
};

/* ──────────────────────────── DATA ──────────────────────────── */

const benefits = [
  {
    icon: Sparkles,
    title: 'Faster recovery',
    desc: 'Most mothers walk within hours of a normal delivery and go home in 24–48 hours, returning to daily routines far quicker than after a caesarean.',
  },
  {
    icon: Baby,
    title: 'Better start for baby',
    desc: 'Babies born vaginally receive helpful microbes from the birth canal that support a stronger immune system and gut development in early life.',
  },
  {
    icon: HeartHandshake,
    title: 'Easier breastfeeding',
    desc: 'Without surgical recovery, skin-to-skin and the first feed usually happen within minutes, helping milk supply establish early and reliably.',
  },
  {
    icon: Shield,
    title: 'Lower surgical risk',
    desc: 'No abdominal surgery means lower risk of bleeding, infection, blood clots, anaesthesia complications and adhesions in future pregnancies.',
  },
  {
    icon: Activity,
    title: 'Better future pregnancies',
    desc: 'A history of normal delivery generally makes future pregnancies and births safer, with fewer placental and surgical complications.',
  },
  {
    icon: HeartPulse,
    title: 'Shorter hospital stay',
    desc: 'A typical uncomplicated normal delivery requires a 24–48 hour stay versus 3–5 days for a caesarean — meaningful for cost and family comfort.',
  },
];

const labourSteps = [
  {
    title: 'Birth-planning visit (32–34 weeks)',
    desc: 'Dr. Sanjana reviews your scans, blood reports and preferences, walks you through pain-relief options including <a href="/services/painless-delivery">painless delivery with epidural</a>, and agrees a birth plan that you and your partner are confident about.',
  },
  {
    title: 'Early labour at home',
    desc: 'Mild, irregular contractions may begin hours or days before active labour. Stay relaxed, hydrate, eat lightly, walk gently. Call the clinic if your waters break, you have heavy bleeding, you notice reduced fetal movements, or contractions are intense.',
  },
  {
    title: 'Admission and active labour',
    desc: 'You are admitted when contractions are regular and painful (the 5-1-1 rule). The labour-room team confirms cervical dilation, fetal heart rate and contraction pattern. You are free to walk, change positions, use a birthing ball or warm shower for comfort.',
  },
  {
    title: 'Pain management — your choice',
    desc: 'Use breathing techniques, position changes, IV pain relief or an epidural. Dr. Sanjana respects your choice and can layer methods. Painless delivery is available at both clinics with trained obstetric anaesthetists when you want it.',
  },
  {
    title: 'Pushing and birth',
    desc: 'When the cervix is fully dilated, you push with each contraction. Dr. Sanjana and the labour-room nurses guide your breath and body. Most first vaginal births take 1–3 hours of pushing; subsequent births are usually faster.',
  },
  {
    title: 'Skin-to-skin and first feed',
    desc: 'The baby is placed on your chest immediately after birth, the cord is clamped after pulsation, and breastfeeding begins within the first hour wherever medically safe.',
  },
  {
    title: 'Recovery and discharge',
    desc: 'You are observed for 24–48 hours. Stitches (if any) heal quickly. You go home with a clear plan for postnatal recovery, breastfeeding support and your baby’s first vaccinations.',
  },
];

const eligibility = [
  'Singleton, head-down baby at term (37–42 weeks)',
  'Healthy, well-grown baby with normal heart-rate tracings',
  'No major placental issues (low-lying placenta, placenta previa)',
  'Mother medically stable — no severe pre-eclampsia or uncontrolled diabetes',
  'No previous classical caesarean or major uterine surgery (VBAC may still be possible after a single low-segment caesarean)',
  'You are open to evidence-based labour interventions if needed for safety',
];

const cautions = [
  'Breech, transverse or unstable fetal presentation at 37+ weeks',
  'Placenta previa or vasa previa on third-trimester scan',
  'Active maternal heart disease, severe pre-eclampsia or uncontrolled blood sugar',
  'Active genital herpes infection at the time of labour',
  'Prior classical (vertical) caesarean or major uterine surgery',
  'Twin pregnancy with a non-vertex first baby (case-by-case)',
];

const costFactors = [
  'Type of delivery (uncomplicated normal vs assisted vaginal)',
  'Hospital and room category — general, semi-private, private or deluxe',
  'Choice of pain relief (without anaesthesia, IV pain relief, or epidural)',
  'Length of labour and any clinically necessary interventions',
  'Newborn nursery or special-care needs, if any',
  'Pre-delivery investigations and post-delivery medication',
];

const faqs: { q: string; a: string }[] = [
  {
    q: 'Who is the best normal delivery doctor in HSR Layout?',
    a: 'Dr. Sanjana L at Health Nest, HSR Layout, is widely trusted for normal (vaginal) delivery in South Bangalore. She is MBBS, MS (Obstetrics & Gynaecology) Gold Medalist (RGUHS) and FMAS-trained, with 10 plus years of experience supporting first-time and repeat mothers through safe vaginal births.\n\nShe maintains a low primary caesarean rate by offering <a href="/services/pregnancy-care">structured antenatal care</a>, comprehensive birth planning, freedom of movement in labour, and <a href="/services/painless-delivery">painless delivery with epidural</a> when wanted — three things that consistently increase the chance of a normal delivery.',
  },
  {
    q: 'Is Dr. Sanjana also a normal delivery doctor in Attibele?',
    a: 'Yes. Dr. Sanjana conducts deliveries at Raghava Multispeciality Hospital, Attibele — making her one of the most accessible normal delivery doctors in Attibele, Sarjapura Road, Chandapura, Hosur Road, Anekal and surrounding South Bangalore neighbourhoods.\n\nThe Attibele unit has 24×7 obstetric, anaesthesia and neonatal cover, the option of painless delivery, and a calm labour-room environment that supports active vaginal birth.',
  },
  {
    q: 'What is the cost of normal delivery in HSR Layout?',
    a: 'The cost of normal delivery in HSR Layout depends on the room category, length of labour, pain-relief choice (with or without epidural), and any post-delivery investigations. Health Nest keeps its normal delivery packages transparent and reasonable for South Bangalore families.\n\nFor the latest package details and a personalised estimate, please call **+91-9449031003**. Most major cashless insurance plans are accepted.',
  },
  {
    q: 'What is the cost of normal delivery in Attibele?',
    a: 'Normal delivery cost at Raghava Multispeciality Hospital, Attibele varies by room category and the level of care needed. Packages are designed to be affordable for families across Attibele, Sarjapura Road, Chandapura, Hosur Road and Anekal.\n\nCall **+91-9980031006** for the current package rates and an itemised estimate. Many insurance schemes and Ayushman Bharat are accepted.',
  },
  {
    q: 'Which is the best hospital for normal delivery in Attibele?',
    a: 'Raghava Multispeciality Hospital is one of the most trusted hospitals for normal delivery in Attibele. With Dr. Sanjana L as your obstetrician, you get a low primary caesarean rate, calm modern labour rooms, painless delivery on request, 24×7 anaesthesia and neonatal cover, and a multidisciplinary team familiar with both routine and high-risk pregnancies.',
  },
  {
    q: 'Which is the best hospital for normal delivery on Sarjapura Road?',
    a: 'For families on Sarjapura Road, Dr. Sanjana L offers two strong options — Health Nest in HSR Layout (a short drive via Sarjapura Road or Bellandur) and Raghava Multispeciality Hospital in Attibele (along the Sarjapura–Attibele Road).\n\nBoth are well-equipped for safe normal delivery and serve the Sarjapura Road catchment, including Bellandur, Wipro Junction, Dommasandra and Carmelaram.',
  },
  {
    q: 'Am I a candidate for normal delivery?',
    a: 'Most healthy women carrying a single, head-down, well-grown baby at term are candidates for normal delivery. Eligibility is confirmed in the third trimester after reviewing your scans, your medical history, the baby\'s position and growth, and your overall fitness.\n\nWomen with one previous low-segment caesarean may still be eligible for a vaginal birth after caesarean (VBAC) at Health Nest — Dr. Sanjana will assess this individually.',
  },
  {
    q: 'How long does normal delivery take?',
    a: 'For first-time mothers, total labour usually lasts 12–18 hours from the start of regular contractions, with about 1–3 hours of active pushing. Subsequent deliveries are typically faster — often 6–10 hours total.\n\nEvery labour is unique. Continuous monitoring and Dr. Sanjana\'s presence ensure your progress is reviewed at each stage and any deviation is acted on immediately.',
  },
  {
    q: 'Will I need an episiotomy?',
    a: 'Not necessarily. Routine episiotomy is no longer recommended worldwide. At Health Nest and Raghava Hospital, Dr. Sanjana follows a "selective episiotomy" approach — performing one only when clinically required, such as when the baby needs to be delivered urgently or there is a high risk of severe perineal tearing.\n\nPerineal massage in the last 4–6 weeks of pregnancy and good labour positioning can reduce the need further.',
  },
  {
    q: 'Can I have painless normal delivery?',
    a: 'Absolutely. <a href="/services/painless-delivery">Painless delivery using epidural anaesthesia</a> is widely used for normal vaginal birth at both Health Nest (HSR Layout) and Raghava Hospital (Attibele). The epidural significantly reduces labour pain while keeping you awake, mobile and fully able to push and meet your baby straight after birth.\n\nIt does not increase the chance of caesarean and is one of the safest forms of pain relief in modern obstetrics.',
  },
  {
    q: 'What if labour starts at night or on a Sunday?',
    a: 'Both Health Nest and Raghava Multispeciality Hospital provide 24×7 labour-room cover, including nights, weekends and public holidays. Dr. Sanjana is available on call for her registered antenatal patients.\n\nIf you are in established labour, head straight to the hospital and the team will inform Dr. Sanjana — there is no need to wait for OPD hours.',
  },
  {
    q: 'How is a normal delivery in South Bangalore different from one in central Bangalore?',
    a: 'Clinically, the standard of care is identical. The big difference is convenience. As a normal delivery doctor in South Bangalore, Dr. Sanjana sees patients at HSR Layout and Attibele — short drives for families in Koramangala, BTM Layout, Sarjapura Road, Bellandur, Electronic City, Chandapura, Hosur Road and Anekal.\n\nThat means quicker arrivals when labour starts, easier follow-up visits, and a calmer experience overall — without compromising on outcomes.',
  },
];

const nearbyAreas = [
  'HSR Layout',
  'Sector 1, 2, 3, 7',
  'Koramangala',
  'BTM Layout',
  'Sarjapura Road',
  'Bellandur',
  'Electronic City',
  'Attibele',
  'Chandapura',
  'Hosur Road',
  'Bommasandra',
  'Anekal',
];

/* ──────────────────────────── SCHEMAS ──────────────────────────── */

const medicalProcedureSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name: 'Normal (Vaginal) Delivery',
  alternateName: ['Vaginal Birth', 'Normal Childbirth', 'Painless Normal Delivery'],
  description:
    'Safe, supportive normal (vaginal) delivery by Dr. Sanjana L at Health Nest (HSR Layout) and Raghava Multispeciality Hospital (Attibele), Bangalore. Includes structured antenatal care, birth planning, optional epidural pain relief, and a low primary caesarean approach.',
  procedureType: 'Obstetrics',
  preparation:
    'Antenatal care, fetal growth scans, blood tests, birth-planning consultation in the third trimester.',
  followup:
    'Postnatal recovery monitoring, perineal care, breastfeeding support and newborn vaccinations under Dr. Sanjana L.',
  howPerformed:
    'Spontaneous or induced labour managed in a modern labour room with continuous fetal and maternal monitoring. Mothers may walk, change positions and use breathing, IV pain relief or epidural anaesthesia. Pushing is supported by the obstetrician and nurses, ending in a vaginal birth followed by immediate skin-to-skin contact.',
  url: `${SITE_URL}/services/normal-delivery`,
  // Reference the canonical physician entity defined in the root layout @graph
  // (by @id) instead of redefining it inline — this avoids a duplicate Physician
  // node and keeps a single authoritative entity for search engines and AI.
  performer: { '@id': `${SITE_URL}/#physician` },
  relevantSpecialty: ['Gynecologic', 'Obstetric'],
  location: [
    {
      '@type': 'MedicalClinic',
      name: 'Health Nest, HSR Layout',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1162, 24th Main Rd, Sector 2, HSR Layout',
        addressLocality: 'Bengaluru',
        addressRegion: 'Karnataka',
        postalCode: '560102',
        addressCountry: 'IN',
      },
      telephone: '+91-9449031003',
    },
    {
      '@type': 'Hospital',
      name: 'Raghava Multispeciality Hospital, Attibele',
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
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Normal Delivery',
      item: `${SITE_URL}/services/normal-delivery`,
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.a.replace(/<[^>]+>/g, ''),
    },
  })),
};

/* ──────────────────────────── PAGE ──────────────────────────── */

export default function NormalDeliveryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalProcedureSchema) }}
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
        {/* ─── HERO ─── */}
        <section
          className="bg-gradient-hero"
          style={{ paddingTop: '100px', paddingBottom: '60px' }}
        >
          <div className="container-hn">
            <BreadcrumbNav
              crumbs={[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: 'Normal Delivery' },
              ]}
            />

            <div className="mt-6 grid lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7">
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4"
                  style={{
                    background: 'rgba(139,94,131,0.12)',
                    color: '#8B5E83',
                    fontFamily: 'var(--font-body), system-ui, sans-serif',
                  }}
                >
                  HSR Layout · Attibele · Sarjapura Road · South Bangalore
                </span>

                <h1
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight"
                  style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#2D2D2D' }}
                >
                  Normal Delivery Doctor in HSR Layout, Attibele &amp; South Bangalore —{' '}
                  <span style={{ color: '#8B5E83' }}>Dr. Sanjana L</span>
                </h1>

                <div className="accent-line" />

                <p
                  className="text-base md:text-lg mb-4 leading-relaxed max-w-[68ch]"
                  style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                >
                  A safe, well-supported <strong>vaginal delivery</strong> remains the best birth
                  experience for most healthy mothers and babies. Dr. Sanjana L is a trusted{' '}
                  <strong>normal delivery doctor in HSR Layout, Attibele</strong> and across{' '}
                  <strong>South Bangalore</strong> — with a low primary caesarean rate, calm
                  evidence-based labour rooms, and the option of{' '}
                  <Link href="/services/painless-delivery" className="font-semibold hover:underline" style={{ color: '#8B5E83' }}>
                    painless delivery with epidural
                  </Link>
                  {' '}whenever you want it.
                </p>
                <p
                  className="text-base mb-6 leading-relaxed max-w-[68ch]"
                  style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                >
                  Care is offered at Health Nest (HSR Layout) and Raghava Multispeciality Hospital
                  (Attibele) — short drives for families in Koramangala, Sarjapura Road, Bellandur,
                  Electronic City, Chandapura, Hosur Road and Anekal.
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {[
                    { icon: Star, label: '4.9/5 Rating' },
                    { icon: Users, label: '200+ Mothers Cared For' },
                    { icon: Shield, label: 'MS OBG Gold Medalist (RGUHS)' },
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

                <div className="flex flex-wrap gap-4">
                  <Link href="/book-appointment" className="btn-primary">
                    <Calendar size={18} /> Book Birth-Planning Visit
                  </Link>
                  <a
                    href="tel:+919449031003"
                    className="btn-outline flex items-center gap-2"
                  >
                    <Phone size={18} /> Call: +91-9449031003
                  </a>
                </div>
              </div>

              {/* Right — Info Card */}
              <div className="lg:col-span-5">
                <div
                  className="rounded-2xl p-6 sticky top-24"
                  style={{ background: '#FFFFFF', border: '1px solid #E8E0DB' }}
                >
                  <h2
                    className="text-lg font-bold mb-1"
                    style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#2D2D2D' }}
                  >
                    Where Dr. Sanjana Conducts Normal Deliveries
                  </h2>
                  <p
                    className="text-xs mb-5"
                    style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                  >
                    Two trusted units across South Bangalore.
                  </p>

                  <div className="space-y-5">
                    <div>
                      <p className="text-sm font-bold mb-2" style={{ color: '#8B5E83', fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
                        Health Nest — HSR Layout
                      </p>
                      <div className="flex items-start gap-2 mb-2">
                        <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: '#8B5E83' }} />
                        <p className="text-xs leading-relaxed" style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
                          1162, 24th Main Rd, Sector 2, HSR Layout, Bengaluru 560102
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone size={14} style={{ color: '#8B5E83' }} />
                        <a
                          href="tel:+919449031003"
                          className="text-xs font-semibold hover:underline"
                          style={{ color: '#2A6B5A', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                        >
                          +91-9449031003
                        </a>
                      </div>
                    </div>

                    <div className="h-px" style={{ background: '#E8E0DB' }} />

                    <div>
                      <p className="text-sm font-bold mb-2" style={{ color: '#8B5E83', fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
                        Raghava Hospital — Attibele
                      </p>
                      <div className="flex items-start gap-2 mb-2">
                        <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: '#8B5E83' }} />
                        <p className="text-xs leading-relaxed" style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
                          39, Sarjapura – Attibele Rd, opposite Syndicate Bank, Attibele 562107
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone size={14} style={{ color: '#8B5E83' }} />
                        <a
                          href="tel:+919980031006"
                          className="text-xs font-semibold hover:underline"
                          style={{ color: '#2A6B5A', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                        >
                          +91-9980031006
                        </a>
                      </div>
                    </div>

                    <div className="h-px" style={{ background: '#E8E0DB' }} />

                    <div className="flex items-start gap-2">
                      <Clock size={14} className="mt-0.5 flex-shrink-0" style={{ color: '#8B5E83' }} />
                      <div className="text-xs" style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
                        <p className="font-semibold" style={{ color: '#2D2D2D' }}>
                          Labour &amp; Delivery: 24×7 cover
                        </p>
                        <p>OPD: Mon–Sat, 9 AM – 9 PM</p>
                      </div>
                    </div>
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
                      <Calendar size={16} /> Book Antenatal Visit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── WHAT IS NORMAL DELIVERY ─── */}
        <section className="section-padding" style={{ background: '#FFFFFF' }}>
          <div className="container-hn max-w-4xl">
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#2D2D2D' }}
            >
              What Is Normal Delivery?
            </h2>
            <div className="accent-line" />

            <div
              className="space-y-4 max-w-[68ch]"
              style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif', lineHeight: 1.8 }}
            >
              <p>
                A normal delivery — also called a <strong>vaginal delivery</strong> — is a birth
                in which the baby is born through the birth canal, with or without epidural pain
                relief, and without surgery. For most healthy mothers carrying a single,
                head-down, well-grown baby at term, it is the safest and most beneficial way to
                give birth.
              </p>
              <p>
                As a <strong>vaginal delivery doctor in HSR Layout and Attibele</strong>, Dr.
                Sanjana L practises evidence-based, low-intervention obstetrics — meaning
                inductions, episiotomies and caesareans are used only when they are genuinely the
                safer choice. The goal is a calm, supported labour in which you feel listened to
                and confident, not rushed.
              </p>
              <p>
                Care is anchored in detailed <Link href="/services/pregnancy-care" className="font-semibold hover:underline" style={{ color: '#8B5E83' }}>antenatal pregnancy care</Link>,
                a clear birth plan by 32–34 weeks, the option of{' '}
                <Link href="/services/painless-delivery" className="font-semibold hover:underline" style={{ color: '#8B5E83' }}>painless delivery</Link>{' '}
                when desired, and proactive management of any condition that could complicate
                vaginal birth — including those handled in our{' '}
                <Link href="/services/high-risk-pregnancy" className="font-semibold hover:underline" style={{ color: '#8B5E83' }}>
                  high-risk pregnancy programme
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ─── BENEFITS ─── */}
        <section className="section-padding" style={{ background: '#FFF8F0' }}>
          <div className="container-hn">
            <div className="text-center mb-12">
              <h2
                className="text-2xl md:text-3xl font-bold mb-3"
                style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#2D2D2D' }}
              >
                Why Normal Delivery Is Worth Planning For
              </h2>
              <div className="accent-line mx-auto" />
              <p className="mx-auto max-w-2xl text-base font-sans text-ink-muted">
                When clinically possible, a vaginal birth offers real, measurable advantages for
                both mother and baby — and for future pregnancies too.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg"
                  style={{ background: '#FFFFFF', borderColor: '#E8E0DB' }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: 'rgba(139,94,131,0.1)' }}
                  >
                    <b.icon size={22} style={{ color: '#8B5E83' }} />
                  </div>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ fontFamily: 'var(--font-body), system-ui, sans-serif', color: '#2D2D2D' }}
                  >
                    {b.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                  >
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PROCESS / WHAT TO EXPECT ─── */}
        <section className="section-padding" style={{ background: '#FFFFFF' }}>
          <div className="container-hn max-w-4xl">
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#2D2D2D' }}
            >
              The Normal Delivery Process — Step by Step
            </h2>
            <div className="accent-line" />

            <p
              className="text-base mb-8 leading-relaxed max-w-[68ch]"
              style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
            >
              From your birth-planning visit in the third trimester to your discharge with the
              baby, here is exactly what to expect when you choose a normal delivery with Dr.
              Sanjana L.
            </p>

            <ol className="space-y-5">
              {labourSteps.map((s, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div
                    className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                    style={{ background: 'linear-gradient(135deg, #8B5E83, #6B4563)' }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <h3
                      className="text-base font-bold mb-1"
                      style={{ fontFamily: 'var(--font-body), system-ui, sans-serif', color: '#2D2D2D' }}
                    >
                      {s.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed max-w-[64ch]"
                      style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                      dangerouslySetInnerHTML={{ __html: s.desc }}
                    />
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ─── ELIGIBILITY ─── */}
        <section className="section-padding" style={{ background: '#FFF8F0' }}>
          <div className="container-hn max-w-5xl">
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#2D2D2D' }}
            >
              Are You a Candidate for Normal Delivery?
            </h2>
            <div className="accent-line" />

            <p
              className="text-base mb-8 leading-relaxed max-w-[68ch]"
              style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
            >
              Most healthy women with an uncomplicated pregnancy are good candidates. Dr. Sanjana
              confirms eligibility in the third trimester after reviewing your scans, blood
              reports, baby&apos;s position and overall fitness.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div
                className="p-6 rounded-2xl border"
                style={{ background: '#FFFFFF', borderColor: '#E8E0DB' }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 size={20} style={{ color: '#2A6B5A' }} />
                  <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-body), system-ui, sans-serif', color: '#2D2D2D' }}>
                    Usually a good candidate if&hellip;
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {eligibility.map((e, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="mt-0.5 flex-shrink-0" style={{ color: '#2A6B5A' }} />
                      <span className="text-sm" style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
                        {e}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="p-6 rounded-2xl border"
                style={{ background: '#FFFFFF', borderColor: '#E8A87C' }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <AlertCircle size={20} style={{ color: '#E8A87C' }} />
                  <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-body), system-ui, sans-serif', color: '#2D2D2D' }}>
                    A planned caesarean may be safer if&hellip;
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {cautions.map((c, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <AlertCircle size={15} className="mt-0.5 flex-shrink-0" style={{ color: '#E8A87C' }} />
                      <span className="text-sm" style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
                        {c}
                      </span>
                    </li>
                  ))}
                </ul>
                <p
                  className="text-xs mt-4 leading-relaxed"
                  style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                >
                  Each situation is reviewed individually. Many of these conditions can still be
                  managed safely with careful planning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── COST FACTORS ─── */}
        <section className="section-padding" style={{ background: '#FFFFFF' }}>
          <div className="container-hn max-w-4xl">
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#2D2D2D' }}
            >
              Normal Delivery Cost in HSR Layout &amp; Attibele
            </h2>
            <div className="accent-line" />

            <div className="space-y-4 max-w-[68ch]" style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif', lineHeight: 1.8 }}>
              <p>
                <strong>Normal delivery cost in HSR Layout</strong> at Health Nest, and{' '}
                <strong>normal delivery cost in Attibele</strong> at Raghava Multispeciality
                Hospital, are designed to be transparent and reasonable for South Bangalore
                families. Both clinics accept most major cashless insurance plans, and Raghava
                Hospital also accepts Ayushman Bharat where eligible.
              </p>
              <p>The final package depends on a small number of clear factors:</p>
            </div>

            <ul className="grid sm:grid-cols-2 gap-4 mt-6">
              {costFactors.map((f, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl"
                  style={{ background: '#FFF8F0', border: '1px solid #E8E0DB' }}
                >
                  <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#8B5E83' }} />
                  <span className="text-sm" style={{ color: '#2D2D2D', fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div
                className="rounded-2xl p-5"
                style={{ background: '#FFFFFF', border: '1px solid #E8E0DB' }}
              >
                <p className="text-sm font-bold mb-2" style={{ color: '#8B5E83', fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
                  Health Nest, HSR Layout
                </p>
                <p className="text-sm mb-3" style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif', lineHeight: 1.7 }}>
                  Call for the latest normal delivery package and a personalised estimate. Cashless
                  insurance accepted.
                </p>
                <a
                  href="tel:+919449031003"
                  className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
                  style={{ color: '#2A6B5A', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                >
                  <Phone size={14} /> +91-9449031003
                </a>
              </div>
              <div
                className="rounded-2xl p-5"
                style={{ background: '#FFFFFF', border: '1px solid #E8E0DB' }}
              >
                <p className="text-sm font-bold mb-2" style={{ color: '#8B5E83', fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
                  Raghava Hospital, Attibele
                </p>
                <p className="text-sm mb-3" style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif', lineHeight: 1.7 }}>
                  Call for the current normal delivery package. Most insurance and Ayushman Bharat
                  accepted.
                </p>
                <a
                  href="tel:+919980031006"
                  className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
                  style={{ color: '#2A6B5A', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                >
                  <Phone size={14} /> +91-9980031006
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── WHY DR SANJANA ─── */}
        <section className="section-padding" style={{ background: '#FFF8F0' }}>
          <div className="container-hn max-w-4xl">
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#2D2D2D' }}
            >
              Why Choose Dr. Sanjana L for Your Normal Delivery
            </h2>
            <div className="accent-line" />

            <div
              className="space-y-4 max-w-[68ch]"
              style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif', lineHeight: 1.8 }}
            >
              <p>
                Dr. Sanjana L is an <strong>MS (OBG) Gold Medalist (RGUHS)</strong> with{' '}
                <strong>10 plus years of experience</strong> conducting normal and high-risk
                deliveries. She is one of the few obstetricians in the area equally comfortable
                with active vaginal birth, painless delivery, VBAC and complex obstetric
                interventions when those are clinically right.
              </p>
              <p>
                As a trusted <strong>normal delivery doctor in HSR Layout</strong> and{' '}
                <strong>vaginal delivery doctor in Attibele</strong>, she keeps her primary
                caesarean rate low through detailed antenatal planning, freedom of movement in
                labour, and respect for the mother&apos;s preferences. Antenatal visits are
                offered in English, Hindi, Kannada and Telugu so every woman — and her partner —
                fully understands what is being planned.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {[
                'MBBS, MS (OBG) — Gold Medalist, RGUHS',
                'FMAS — Fellowship in Minimal Access Surgery',
                '10+ years in obstetrics & high-risk pregnancy',
                'Low primary caesarean rate; supports VBAC where eligible',
                'Painless delivery with epidural at both clinics',
                'Multilingual: English, Hindi, Kannada, Telugu',
                '24×7 obstetric, anaesthesia & neonatal cover',
                'Two locations: HSR Layout & Attibele',
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

        {/* ─── AREAS SERVED ─── */}
        <section className="section-padding" style={{ background: '#FFFFFF' }}>
          <div className="container-hn max-w-5xl">
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#2D2D2D' }}
            >
              Normal Delivery for Families across South Bangalore
            </h2>
            <div className="accent-line" />

            <div className="text-base mb-6 leading-relaxed max-w-[68ch] space-y-3" style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
              <p className="m-0">
                Dr. Sanjana L is one of the most accessible{' '}
                <strong>normal delivery doctors in South Bangalore</strong>. Health Nest sits in
                the heart of HSR Layout — a short drive from Sarjapura Road, Bellandur, Koramangala
                and BTM. Raghava Hospital, on the Sarjapura–Attibele Road, serves Attibele,
                Chandapura, Anekal, Bommasandra and the southern stretch of Hosur Road.
              </p>
              <p className="m-0">
                Whether you need the <strong>best hospital for normal delivery in Attibele</strong>,
                a <strong>vaginal delivery doctor on Sarjapura Road</strong>, or a calm,
                low-intervention birth team near HSR Layout, both units are equipped for safe,
                supported normal delivery.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
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
          </div>
        </section>

        {/* ─── RELATED SERVICES ─── */}
        <section className="section-padding" style={{ background: '#FFF8F0' }}>
          <div className="container-hn max-w-5xl">
            <h2
              className="text-2xl md:text-3xl font-bold mb-3 text-center"
              style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#2D2D2D' }}
            >
              Related Pregnancy &amp; Birth Services
            </h2>
            <div className="accent-line mx-auto mb-10" />

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: HeartHandshake,
                  title: 'Painless Delivery',
                  desc: 'Comfortable, evidence-based labour with epidural anaesthesia. Available for normal vaginal birth at both Health Nest and Raghava Hospital.',
                  href: '/services/painless-delivery',
                },
                {
                  icon: Baby,
                  title: 'Pregnancy Care',
                  desc: 'Comprehensive antenatal care from your first scan to birth planning — the foundation of a safe normal delivery.',
                  href: '/services/pregnancy-care',
                },
                {
                  icon: HeartPulse,
                  title: 'High-Risk Pregnancy',
                  desc: 'Specialist management for gestational diabetes, preeclampsia, twins and complex pregnancies — many still suitable for normal delivery.',
                  href: '/services/high-risk-pregnancy',
                },
              ].map((svc, i) => (
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
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="section-padding" style={{ background: '#FFFFFF' }}>
          <div className="container-hn max-w-3xl">
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#2D2D2D' }}
            >
              Normal Delivery — Frequently Asked Questions
            </h2>
            <div className="accent-line" />
            <FAQAccordion faqs={faqs} schema={false} />
          </div>
        </section>

        {/* ─── AVAILABLE NEAR YOU ─── */}
        {nearbyPages.length > 0 && (
          <section className="section-sm bg-cream">
            <div className="container-hn">
              <h2 className="mb-2 font-display text-2xl font-bold text-ink">
                Normal Delivery — Available Near You
              </h2>
              <div className="accent-line" />
              <p className="mb-6 max-w-2xl font-sans text-sm text-ink-muted">
                Looking for a normal delivery doctor in your area? Explore care close to home.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {nearbyPages.map((lp) => (
                  <Link
                    key={lp.slug}
                    href={`/${lp.slug}`}
                    className="flex items-center justify-between gap-3 rounded-xl border border-border bg-white p-4 transition-colors hover:border-primary/40 hover:bg-purple-50"
                  >
                    <span className="font-sans text-sm font-semibold text-ink">
                      {lp.shortTitle}
                    </span>
                    <ArrowRight size={16} className="flex-shrink-0 text-primary" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

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
              Plan Your Normal Delivery with Dr. Sanjana L
            </h2>
            <div className="mx-auto mb-8 max-w-xl space-y-2 font-sans text-white/80">
              <p className="m-0">
                Book a birth-planning visit at Health Nest (HSR Layout) or Raghava Hospital
                (Attibele).
              </p>
              <p className="m-0">
                Walk in with questions. Walk out with a plan that fits you and your baby.
              </p>
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
                <Phone size={16} /> Call HSR Layout
              </a>
              <a
                href="tel:+919980031006"
                className="px-8 py-3.5 border-2 border-white rounded-xl text-white font-semibold text-sm hover:bg-white/10 transition-colors flex items-center gap-2"
                style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
              >
                <Phone size={16} /> Call Attibele
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
