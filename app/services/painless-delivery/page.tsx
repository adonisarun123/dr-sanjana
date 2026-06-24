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
  HeartHandshake,
  Baby,
  HeartPulse,
  Shield,
  Stethoscope,
  Sparkles,
  Users,
  AlertCircle,
  Activity,
  Smile,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import FAQAccordion from '@/components/FAQAccordion';
import { getLocationServicesForService } from '@/lib/locationServices';
import { SITE_URL } from '@/lib/site';

const nearbyPages = getLocationServicesForService('painless-delivery');

/* ──────────────────────────── SEO META ──────────────────────────── */

export const metadata: Metadata = {
  title:
    'Painless Delivery in HSR Layout & Attibele — Dr. Sanjana L | Health Nest',
  description:
    'Safe, comfortable painless delivery (epidural labour analgesia) in HSR Layout, Attibele, Sarjapura & Electronic City. Dr. Sanjana L (MS OBG, Gold Medalist) offers evidence-based labour pain management at Health Nest & Raghava Hospital.',
  keywords: [
    'painless delivery HSR Layout',
    'painless delivery Attibele',
    'painless delivery doctor Sarjapura',
    'painless delivery doctor Electronic City',
    'painless normal delivery Bangalore South',
    'epidural delivery HSR Layout',
    'labour pain management HSR Layout',
    'labour pain management Attibele',
    'epidural anaesthesia Bangalore',
    'painless delivery hospital near me',
    'best painless delivery doctor Bangalore',
  ],
  alternates: {
    canonical: `${SITE_URL}/services/painless-delivery`,
  },
  openGraph: {
    title:
      'Painless Delivery in HSR Layout & Attibele — Dr. Sanjana L | Health Nest',
    description:
      'Comfortable, evidence-based painless delivery with epidural labour analgesia. Dr. Sanjana L offers safe painless normal delivery at Health Nest (HSR Layout) and Raghava Hospital (Attibele).',
    url: `${SITE_URL}/services/painless-delivery`,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Health Nest',
  },
};

/* ──────────────────────────── DATA ──────────────────────────── */

const benefits = [
  {
    icon: HeartHandshake,
    title: 'Effective pain relief',
    desc: 'A modern low-dose epidural blocks the sharp pain of contractions while keeping you alert. Most women rate relief as excellent within 10–20 minutes of placement.',
  },
  {
    icon: Activity,
    title: 'Calmer, controlled labour',
    desc: 'Less pain means lower stress hormones, steadier blood pressure and a calmer environment for both you and your baby through the long hours of labour.',
  },
  {
    icon: Sparkles,
    title: 'Energy saved for pushing',
    desc: 'When the second stage arrives, you are not exhausted from hours of pain. That conserved energy often helps active, focused pushing when it matters most.',
  },
  {
    icon: Shield,
    title: 'Safe for mother and baby',
    desc: 'Decades of obstetric data show epidural anaesthesia is one of the safest forms of pain relief in childbirth, with only a tiny fraction of medication reaching the baby.',
  },
  {
    icon: Baby,
    title: 'Awake for every moment',
    desc: 'You stay fully conscious, see your baby being born, and can do skin-to-skin and breastfeeding within minutes — just like an unmedicated vaginal delivery.',
  },
  {
    icon: Stethoscope,
    title: 'Useful in long or induced labours',
    desc: 'For first-time mums, induced labour, or labour that stretches into the night, painless delivery can be the difference between a positive birth and an exhausting one.',
  },
];

const procedureSteps = [
  {
    title: 'Birth planning consultation',
    desc: 'During your antenatal visits, Dr. Sanjana reviews your medical history, blood reports and preferences. She explains natural coping methods, partial pain relief and full epidural options so you can decide in advance.',
  },
  {
    title: 'Admission and active labour',
    desc: 'When you arrive at Health Nest (HSR Layout) or Raghava Hospital (Attibele), the team confirms cervical dilation, fetal heart rate and contraction pattern. The epidural is typically offered once you are in established active labour.',
  },
  {
    title: 'Epidural placement by anaesthetist',
    desc: 'A trained obstetric anaesthetist cleans the lower back and inserts a thin catheter between two vertebrae. Placement takes about 10–15 minutes while you sit forward or lie on your side. Most women feel only a brief sting from the local anaesthetic.',
  },
  {
    title: 'Pain relief begins',
    desc: 'A test dose is given first. Pain relief usually starts within 10–20 minutes. You will feel pressure from contractions but not the sharp pain. Top-ups are given through the catheter as labour progresses, sometimes via a patient-controlled pump.',
  },
  {
    title: 'Continuous monitoring',
    desc: 'Your blood pressure, oxygen and the baby\'s heart rate are tracked closely. Dr. Sanjana checks dilation regularly and adjusts the labour plan if needed.',
  },
  {
    title: 'Pushing and birth',
    desc: 'When the cervix is fully dilated, the dose is fine-tuned so you can feel pressure and push effectively. Most painless deliveries end in a normal vaginal birth with the mother awake, calm and ready to hold her baby.',
  },
  {
    title: 'After delivery',
    desc: 'The catheter is removed soon after birth. Sensation in the legs returns over a few hours. Skin-to-skin contact and early breastfeeding are encouraged whenever medically safe.',
  },
];

const eligibility = [
  'Singleton or twin pregnancy at term (usually 37 weeks or more)',
  'Established active labour with regular, painful contractions',
  'Normal blood clotting profile and no active spinal infection',
  'No severe deformity of the spine that prevents safe needle placement',
  'Cooperative and able to lie still for 10–15 minutes during placement',
  'Willing to have continuous fetal and maternal monitoring',
];

const cautions = [
  'Severe back deformity, recent spinal surgery or active spine infection',
  'Bleeding disorders or low platelet count',
  'Active sepsis or very unstable blood pressure',
  'Very advanced labour where the baby is about to be born within minutes',
  'Allergy to local anaesthetic agents (rare)',
];

const faqs: { q: string; a: string }[] = [
  {
    q: 'What exactly is painless delivery and how does the epidural work?',
    a: 'Painless delivery is a normal vaginal birth supported by epidural labour analgesia. A trained anaesthetist places a very thin catheter into the epidural space of your lower back. A low dose of local anaesthetic is delivered through this catheter and bathes the nerves that carry pain signals from the uterus and birth canal.\n\nYou stay fully conscious. You can move your legs (with a little weakness), feel pressure from contractions, and push when the time comes — but the sharp, exhausting pain is significantly reduced or removed. Top-up doses can be added as labour progresses.',
  },
  {
    q: 'Is painless delivery safe for me and my baby?',
    a: 'Yes. Epidural labour analgesia is one of the most studied pain-relief methods in modern obstetrics. The medication acts mostly in the lower back and only a very tiny amount reaches the bloodstream and the baby — far less than pain-relief injections given into a vein or muscle.\n\nWith continuous monitoring, qualified anaesthetists, and an experienced obstetrician like Dr. Sanjana L, painless delivery is considered safe for both mother and baby in eligible pregnancies.',
  },
  {
    q: 'Will I still be able to push the baby out?',
    a: 'Yes. Modern low-dose "walking epidurals" are designed to keep your pelvic muscles working. When you reach full dilation, the dose is adjusted so you can feel pressure with each contraction and push effectively.\n\nDr. Sanjana and the labour-room nurses guide your breathing and pushing. Most painless deliveries end in a normal vaginal birth, with the baby placed on your chest within seconds.',
  },
  {
    q: 'Does an epidural increase my chance of a C-section?',
    a: 'No. Large studies and reviews show that a well-managed low-dose epidural does not significantly increase the overall risk of caesarean section. It can slightly lengthen the pushing stage but does not change the final mode of delivery for most women.\n\nIn long, painful labours, an epidural often allows the mother to rest, dilate fully and avoid the exhaustion that itself can lead to surgical delivery.',
  },
  {
    q: 'When during labour can I ask for the epidural?',
    a: 'It is best to discuss painless delivery during your antenatal visits so the team is ready. On the day, the epidural is usually offered once you are in established active labour with regular contractions and a few centimetres of cervical dilation.\n\nThere is a point in very advanced labour, when the baby is almost about to be born, where placing an epidural is no longer practical. That is why early discussion and timely admission matter.',
  },
  {
    q: 'How long does the epidural take to work?',
    a: 'After the catheter is placed and the test dose is given, most women feel meaningful relief within 10–20 minutes. Full effect builds over 20–30 minutes. The relief is then maintained with low-dose top-ups or a continuous infusion until birth.',
  },
  {
    q: 'What are the possible side effects of an epidural?',
    a: 'Common, temporary side effects include a brief drop in blood pressure (managed with IV fluids), heaviness or numbness in the legs, mild itching, and shivering. A small number of women may have a post-dural-puncture headache, which is treatable.\n\nSerious complications such as infection, bleeding around the spine or nerve injury are very rare. Dr. Sanjana and the anaesthetist will explain all risks and consent before the procedure.',
  },
  {
    q: 'Can I have painless delivery if I am being induced?',
    a: 'Yes. In fact, induced labour is often more painful than spontaneous labour because contractions can be stronger and closer together. Painless delivery is commonly used during induction and works very well alongside oxytocin or balloon induction protocols.',
  },
  {
    q: 'How much does painless delivery cost in HSR Layout and Attibele?',
    a: 'The cost depends on the hospital, room category, length of labour and whether any extra interventions are needed. Health Nest (HSR Layout) and Raghava Multispeciality Hospital (Attibele) both keep painless delivery packages transparent and reasonable.\n\nPlease call +91-9449031003 (HSR Layout) or +91-9980031006 (Attibele) for the latest package details. The team will share an estimate at your antenatal consultation.',
  },
  {
    q: 'Can I breastfeed and do skin-to-skin right after a painless delivery?',
    a: 'Absolutely. Because you are awake and alert, skin-to-skin and the first breastfeed usually happen in the first hour of life — exactly the same as in an unmedicated vaginal delivery. This early bonding is encouraged whenever the baby is medically stable.',
  },
];

const nearbyAreas = [
  'HSR Layout',
  'Sector 1, 2, 3, 7',
  'Sarjapura Road',
  'Bellandur',
  'Koramangala',
  'BTM Layout',
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
  name: 'Painless Delivery (Epidural Labour Analgesia)',
  alternateName: ['Painless Normal Delivery', 'Epidural Delivery', 'Labour Pain Management'],
  description:
    'Painless delivery is a normal vaginal birth supported by epidural labour analgesia. Offered by Dr. Sanjana L at Health Nest (HSR Layout) and Raghava Multispeciality Hospital (Attibele) for eligible pregnancies in South Bangalore.',
  procedureType: 'Obstetrics',
  bodyLocation: 'Lumbar epidural space',
  preparation:
    'Antenatal consultation, blood tests including coagulation profile, anaesthetic review.',
  followup:
    'Continuous fetal and maternal monitoring during labour. Postnatal recovery review and breastfeeding support by Dr. Sanjana L.',
  howPerformed:
    'A trained obstetric anaesthetist places a thin catheter into the lumbar epidural space. Low-dose local anaesthetic is delivered as boluses or continuous infusion to provide pain relief during labour, while the mother remains awake and able to push.',
  url: `${SITE_URL}/services/painless-delivery`,
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
      name: 'Painless Delivery',
      item: `${SITE_URL}/services/painless-delivery`,
    },
  ],
};

/* ──────────────────────────── PAGE ──────────────────────────── */

export default function PainlessDeliveryPage() {
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
                { label: 'Services', href: '/services' },
                { label: 'Painless Delivery' },
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
                  HSR Layout · Attibele · Sarjapura · Electronic City
                </span>

                <h1
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight"
                  style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#2D2D2D' }}
                >
                  Painless Delivery in HSR Layout &amp; Attibele —{' '}
                  <span style={{ color: '#8B5E83' }}>Dr. Sanjana L</span>
                </h1>

                <div className="accent-line" />

                <p
                  className="text-base md:text-lg mb-4 leading-relaxed max-w-[68ch]"
                  style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                >
                  <strong>Painless delivery</strong> is a safe, evidence-based way to manage labour pain
                  using <strong>epidural anaesthesia</strong>. Dr. Sanjana L offers{' '}
                  <strong>painless normal delivery in Bangalore South</strong> at Health Nest
                  (HSR Layout) and Raghava Multispeciality Hospital (Attibele) — with continuous
                  monitoring, trained obstetric anaesthetists, and a calm, supportive labour
                  environment.
                </p>
                <p
                  className="text-base mb-6 leading-relaxed max-w-[68ch]"
                  style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                >
                  As a trusted <strong>painless delivery doctor for Sarjapura</strong> and
                  <strong> Electronic City</strong>, Dr. Sanjana helps you stay awake, in control, and
                  ready to hold your baby the moment they arrive — without the exhaustion of
                  unmanaged labour pain.
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
                    <Calendar size={18} /> Book Birth Planning Visit
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
                    Where Dr. Sanjana Conducts Painless Deliveries
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
                          Labour & Delivery: 24×7 cover
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

        {/* ─── WHAT IS PAINLESS DELIVERY ─── */}
        <section className="section-padding" style={{ background: '#FFFFFF' }}>
          <div className="container-hn max-w-4xl">
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#2D2D2D' }}
            >
              What Is Painless Delivery?
            </h2>
            <div className="accent-line" />

            <div
              className="space-y-4 max-w-[68ch]"
              style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif', lineHeight: 1.8 }}
            >
              <p>
                Painless delivery — sometimes called <strong>painless normal delivery</strong> or
                <strong> epidural delivery</strong> — is a vaginal birth supported by{' '}
                <strong>epidural labour analgesia</strong>. A trained obstetric anaesthetist places a
                very thin catheter into the epidural space of your lower back. A low dose of local
                anaesthetic is then delivered through that catheter to numb the nerves carrying pain
                signals from the uterus and birth canal.
              </p>
              <p>
                The aim is simple: <strong>significantly reduce or remove the sharp pain of
                contractions</strong> while keeping you awake, alert and in control of your birth.
                You will still feel pressure, you will still push, and you will still meet your baby
                the moment they are born — only without the exhausting, overwhelming pain.
              </p>
              <p>
                For many women across <strong>HSR Layout, Sarjapura, Bellandur, Electronic City and
                Attibele</strong>, painless delivery is the bridge between wanting a normal vaginal
                birth and being able to enjoy that experience instead of dreading it. Dr. Sanjana L
                discusses it in detail during your <Link href="/services/pregnancy-care" className="font-semibold hover:underline" style={{ color: '#8B5E83' }}>antenatal pregnancy care</Link> visits, so the
                decision is unhurried and well-informed.
              </p>
              <p>
                Painless delivery is one form of <strong>labour pain management in HSR Layout</strong>
                {' '}and <strong>labour pain management in Attibele</strong>. Other options — breathing
                techniques, position changes, warm showers, IV pain relief — are also offered, and you
                can layer them with the epidural as you prefer.
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
                Why Mothers in South Bangalore Choose Painless Delivery
              </h2>
              <div className="accent-line mx-auto" />
              <p className="mx-auto max-w-2xl text-base font-sans text-ink-muted">
                A modern epidural is not about removing the experience of birth — it is about removing
                the fear of pain so you can be present for it.
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

        {/* ─── HOW THE PROCEDURE WORKS ─── */}
        <section className="section-padding" style={{ background: '#FFFFFF' }}>
          <div className="container-hn max-w-4xl">
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#2D2D2D' }}
            >
              How Painless Delivery Works — Step by Step
            </h2>
            <div className="accent-line" />

            <p
              className="text-base mb-8 leading-relaxed max-w-[68ch]"
              style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
            >
              From your first antenatal visit to your baby&apos;s first cry, here is what to expect when
              you choose painless delivery with Dr. Sanjana L.
            </p>

            <ol className="space-y-5">
              {procedureSteps.map((s, i) => (
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
                    >
                      {s.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ─── ELIGIBILITY & SAFETY ─── */}
        <section className="section-padding" style={{ background: '#FFF8F0' }}>
          <div className="container-hn max-w-5xl">
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#2D2D2D' }}
            >
              Is Painless Delivery Right for You?
            </h2>
            <div className="accent-line" />

            <p
              className="text-base mb-8 leading-relaxed max-w-[68ch]"
              style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
            >
              Most women with an uncomplicated, term pregnancy are good candidates. Dr. Sanjana
              reviews your scans, blood reports and history and works with the obstetric anaesthetist
              to confirm eligibility.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div
                className="p-6 rounded-2xl border"
                style={{ background: '#FFFFFF', borderColor: '#E8E0DB' }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 size={20} style={{ color: '#2A6B5A' }} />
                  <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-body), system-ui, sans-serif', color: '#2D2D2D' }}>
                    You are usually eligible if&hellip;
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
                    Extra caution may be needed if&hellip;
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
                  These are not automatic refusals — many situations can be managed with the right
                  planning. A frank antenatal review with Dr. Sanjana is the best way to know.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── WHY DR. SANJANA ─── */}
        <section className="section-padding" style={{ background: '#FFFFFF' }}>
          <div className="container-hn max-w-4xl">
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#2D2D2D' }}
            >
              Why Choose Dr. Sanjana L for Painless Delivery
            </h2>
            <div className="accent-line" />

            <div
              className="space-y-4 max-w-[68ch]"
              style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif', lineHeight: 1.8 }}
            >
              <p>
                Dr. Sanjana L is an <strong>MS (OBG) Gold Medalist (RGUHS)</strong> with{' '}
                <strong>10 plus years of experience</strong> conducting both routine and high-risk
                deliveries. She believes that pain relief in labour is a personal choice — not a
                default — and her job is to give you the information, the safety and the support to
                make that choice well.
              </p>
              <p>
                At <strong>Health Nest, HSR Layout</strong>, she partners with experienced obstetric
                anaesthetists to offer painless delivery in a calm, modern labour room with
                continuous fetal monitoring. At <strong>Raghava Multispeciality Hospital, Attibele</strong>,
                the same standard of care is available with a 24×7 anaesthesia team — making it one of
                the few accessible <strong>painless delivery options for Sarjapura, Electronic City,
                Chandapura and Hosur Road</strong> families.
              </p>
              <p>
                Antenatal visits in English, Hindi, Kannada and Telugu mean every woman — and every
                partner — fully understands what is being planned. Birth plans are honoured wherever
                medically possible.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {[
                'MBBS, MS (OBG) — Gold Medalist, RGUHS',
                'FMAS — Fellowship in Minimal Access Surgery',
                'FRM (RGUHS) — Reproductive Medicine training',
                '10+ years in obstetrics & high-risk pregnancy',
                'Partners with trained obstetric anaesthetists at both units',
                'Multilingual: English, Hindi, Kannada, Telugu',
                'Two locations: Health Nest (HSR Layout) & Raghava Hospital (Attibele)',
                'Patient-centred, evidence-based birth planning',
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

        {/* ─── AREAS SERVED ─── */}
        <section className="section-padding" style={{ background: '#FFF8F0' }}>
          <div className="container-hn max-w-4xl">
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#2D2D2D' }}
            >
              Painless Delivery for Families across South Bangalore
            </h2>
            <div className="accent-line" />

            <div className="text-base mb-6 leading-relaxed max-w-[68ch] space-y-3" style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
              <p className="m-0">
                Whether you are a <strong>painless delivery doctor in Sarjapura</strong> away from your
                home, looking for a <strong>painless delivery doctor in Electronic City</strong>, or
                want a comfortable birth at a hospital near HSR Layout, both of Dr. Sanjana&apos;s
                practice locations are easy to reach.
              </p>
              <p className="m-0">
                Health Nest sits in the heart of HSR Layout — minutes from Bellandur, Koramangala, BTM
                and Sarjapura Road. Raghava Hospital, on the Sarjapura–Attibele Road, serves Attibele,
                Chandapura, Anekal, Bommasandra and the southern stretch of Hosur Road.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
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
          </div>
        </section>

        {/* ─── RELATED SERVICES ─── */}
        <section className="section-padding" style={{ background: '#FFFFFF' }}>
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
                  icon: Smile,
                  title: 'Normal Delivery',
                  desc: 'Safe, supportive vaginal birth with experienced guidance. Painless delivery is one option within our normal-birth pathway.',
                  href: '/services/normal-delivery',
                },
                {
                  icon: Baby,
                  title: 'Pregnancy Care',
                  desc: 'Comprehensive antenatal care — scans, screening, nutrition and birth planning — from your first trimester onwards.',
                  href: '/services/pregnancy-care',
                },
                {
                  icon: HeartPulse,
                  title: 'High-Risk Pregnancy',
                  desc: 'Specialist management for gestational diabetes, preeclampsia, twins and other complex pregnancies — many still suitable for painless delivery.',
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
        <section className="section-padding" style={{ background: '#FFF8F0' }}>
          <div className="container-hn max-w-3xl">
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#2D2D2D' }}
            >
              Painless Delivery — Frequently Asked Questions
            </h2>
            <div className="accent-line" />
            <FAQAccordion faqs={faqs} />
          </div>
        </section>

        {/* ─── AVAILABLE NEAR YOU ─── */}
        {nearbyPages.length > 0 && (
          <section className="section-sm bg-cream">
            <div className="container-hn">
              <h2 className="mb-2 font-display text-2xl font-bold text-ink">
                Painless Delivery — Available Near You
              </h2>
              <div className="accent-line" />
              <p className="mb-6 max-w-2xl font-sans text-sm text-ink-muted">
                Looking for painless (epidural) delivery in your area? Explore care close to home.
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
              Plan Your Painless Delivery with Dr. Sanjana L
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
