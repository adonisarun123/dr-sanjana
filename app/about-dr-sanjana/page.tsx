import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Calendar, Award, BookOpen, Users, Languages } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'About Dr. Sanjana L — Obstetrician & Gynaecologist, HSR Layout & Attibele',
  description:
    'Meet Dr. Sanjana L — MBBS, MS OB-GYN with 10 plus years experience. Trusted women\'s health specialist at Health Nest & Raghava Multispeciality Hospital.',
};

const physicianSchema = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: 'Dr. Sanjana L',
  description: 'Obstetrician & Gynaecologist with 10 plus years experience in HSR Layout & Attibele, Bangalore',
  medicalSpecialty: 'Obstetrics and Gynaecology',
  qualification: 'MBBS MS ( OBG) Gold Medalist FRM ( RGUHS) FMAS',
  yearsOfExperience: 8,
  availableLanguage: ['English', 'Hindi', 'Kannada', 'Telugu'],
  identifier: '124759',
  worksFor: { '@type': 'MedicalBusiness', name: 'Health Nest' },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'HSR Layout',
    addressLocality: 'Bangalore',
    addressRegion: 'Karnataka',
    postalCode: '560102',
    addressCountry: 'IN',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '200',
    bestRating: '5',
  },
};

const qualifications = [
  { year: '2004', title: 'MBBS', institution: 'Bangalore Medical College', desc: 'Foundation of medical knowledge and clinical training.' },
  { year: '2008', title: 'MS — Obstetrics & Gynaecology', institution: 'Postgraduate Medical Studies, Bangalore', desc: 'Specialisation in women\'s reproductive health, surgery, and obstetrics.' },
  { year: '2009', title: 'Clinical Practice Begins', institution: 'HSR Layout, Bangalore', desc: 'Commenced independent gynaecology practice serving South Bangalore.' },
  { year: '2015+', title: 'Health Nest Founded', institution: 'HSR Layout, Bangalore', desc: 'Established Health Nest as a dedicated women\'s health clinic in the community.' },
  { year: '2026', title: '10 plus Years & 5000+ Patients', institution: 'Ongoing', desc: 'Continued commitment to compassionate, evidence-based women\'s healthcare.' },
];

const specialisations = [
  'High-Risk Pregnancy Management', 'Normal & Caesarean Delivery', 'Laparoscopic Surgery',
  'Hysteroscopy', 'Fertility Evaluation', 'IUI & IVF Co-management', 'PCOS & PCOD Treatment',
  'Endometriosis', 'Fibroids & Ovarian Cysts', 'Menstrual Disorders', 'Menopause Management',
  'Prenatal Screening', 'Postnatal Care', 'Cervical Cancer Screening', 'Adolescent Gynaecology',
  'Urogynaecology', 'Contraception Counselling',
];

const aboutFaqs = [
  {
    q: 'What are Dr. Sanjana L\'s qualifications?',
    a: 'Dr. Sanjana L holds an MBBS and an MS in Obstetrics & Gynaecology (Medical Registration No: 124759). She has over 15 years of experience in the field and practises at Health Nest, HSR Layout, Bangalore.',
  },
  {
    q: 'Does Dr. Sanjana L offer online consultations?',
    a: 'Yes, Dr. Sanjana offers online video consultations for follow-up visits, second opinions, and initial consultations for non-emergency concerns. You can book online through the Health Nest website or call the clinic.',
  },
  {
    q: 'What languages does Dr. Sanjana L speak?',
    a: 'Dr. Sanjana L consults in English, Hindi, Kannada, and Telugu, making her accessible to a wide range of patients across Bangalore and beyond.',
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
      />
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section
          className="bg-gradient-hero relative overflow-hidden"
          style={{ paddingTop: '120px', paddingBottom: '60px' }}
        >
          <div className="container-hn">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Profile visual */}
              <div
                className="rounded-3xl p-12 flex flex-col items-center text-center gap-6"
                style={{ background: 'linear-gradient(135deg, #8B5E83, #2A6B5A)' }}
              >
                <div className="w-32 h-32 rounded-full overflow-hidden border-[3px] border-white/30 shadow-xl bg-[#1C1C2E]">
                  <img
                    src="/dr-sanjana-hero.png"
                    alt="Dr. Sanjana L"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="text-white">
                  <h1 className="text-3xl font-bold mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>Dr. Sanjana L</h1>
                  <p className="text-white/80 text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>MBBS, MS (Obstetrics & Gynaecology)</p>
                  <p className="text-white/60 text-xs mt-1">Reg. No: 124759</p>
                </div>
                <div className="grid grid-cols-2 gap-3 w-full">
                  {[
                    { icon: Award, label: '10 plus Years Experience' },
                    { icon: Users, label: '5000+ Patients' },
                    { icon: BookOpen, label: 'MBBS, MS OB-GYN' },
                    { icon: Languages, label: '4 Languages' },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="bg-white/15 rounded-xl p-3 flex items-center gap-2">
                      <Icon size={16} className="text-white/80 flex-shrink-0" />
                      <span className="text-xs text-white/90">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bio */}
              <div>
                <p className="section-label mb-2">About the Doctor</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#2D2D2D' }}>
                  A Trusted Name in Women&apos;s Healthcare
                </h2>
                <div className="accent-line" />
                <p className="mb-4" style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.8 }}>
                  Dr. Sanjana L is a highly experienced Obstetrician and Gynaecologist based at Health Nest & Raghava Multispeciality Hospital. With over 10 plus years of dedicated practice and more than 5,000 patients cared for, she has established herself as one of the most trusted gynaecologists in South Bangalore.
                </p>
                <p className="mb-4" style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.8 }}>
                  Holding an MBBS and a postgraduate MS in Obstetrics & Gynaecology, Dr. Sanjana combines deep clinical expertise with genuine warmth and empathy. She is known for her calm, patient-first approach — taking the time to truly listen, explain, and support each woman on her unique health journey.
                </p>
                <p className="mb-6" style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.8 }}>
                  Whether you are navigating your first pregnancy, managing a hormonal condition, seeking fertility guidance, or simply overdue for a routine check-up, Dr. Sanjana&apos;s door at Health Nest is always open. She consults in English, Hindi, Kannada, and Telugu, ensuring every patient feels understood.
                </p>
                <Link href="/book-appointment" className="btn-primary">
                  <Calendar size={18} /> Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="section" style={{ background: '#FFFFFF' }}>
          <div className="container-hn">
            <div className="max-w-3xl mx-auto text-center">
              <p className="section-label mb-2">Philosophy of Care</p>
              <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#2D2D2D' }}>
                &ldquo;Every woman deserves care delivered with dignity, warmth, and clinical excellence.&rdquo;
              </h2>
              <div className="accent-line-center" />
              <p style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.8 }}>
                Dr. Sanjana L believes that gynaecological care goes beyond treating conditions — it is about empowering women to understand their bodies, make informed choices, and live healthier, more confident lives. She fosters an environment where no question is too small and no concern is dismissed. At Health Nest, you are always the priority.
              </p>
            </div>
          </div>
        </section>

        {/* Qualifications Timeline */}
        <section className="section bg-gradient-hero">
          <div className="container-hn">
            <div className="text-center mb-12">
              <p className="section-label mb-2">Education & Experience</p>
              <h2 className="text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#2D2D2D' }}>
                Qualifications & Journey
              </h2>
              <div className="accent-line-center" />
            </div>
            <div className="max-w-2xl mx-auto space-y-6">
              {qualifications.map((q, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #8B5E83, #6B4563)' }}
                    >
                      {i + 1}
                    </div>
                    {i < qualifications.length - 1 && (
                      <div className="w-0.5 flex-1 mt-2" style={{ background: '#E8E0DB' }} />
                    )}
                  </div>
                  <div className="pb-6">
                    <p className="text-xs font-semibold mb-1" style={{ color: '#8B5E83', fontFamily: 'DM Sans, sans-serif' }}>{q.year}</p>
                    <h3 className="text-lg font-semibold mb-1" style={{ fontFamily: 'DM Sans, sans-serif', color: '#2D2D2D' }}>{q.title}</h3>
                    <p className="text-sm font-medium mb-1" style={{ color: '#6B6B6B' }}>{q.institution}</p>
                    <p className="text-sm" style={{ color: '#9B9B9B' }}>{q.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialisations */}
        <section className="section" style={{ background: '#FFFFFF' }}>
          <div className="container-hn">
            <div className="text-center mb-10">
              <p className="section-label mb-2">Areas of Expertise</p>
              <h2 className="text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#2D2D2D' }}>
                Specialisations
              </h2>
              <div className="accent-line-center" />
            </div>
            <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
              {specialisations.map((s) => (
                <span
                  key={s}
                  className="px-4 py-2 rounded-full text-sm font-medium border"
                  style={{ borderColor: '#C9A7C7', color: '#8B5E83', background: 'rgba(139,94,131,0.06)', fontFamily: 'DM Sans, sans-serif' }}
                >
                  <CheckCircle2 size={13} className="inline mr-1.5" style={{ color: '#2A6B5A' }} />
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section bg-gradient-hero">
          <div className="container-hn max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#2D2D2D' }}>
                Questions About Dr. Sanjana?
              </h2>
              <div className="accent-line-center" />
            </div>
            <FAQAccordion faqs={aboutFaqs} />
          </div>
        </section>

        {/* CTA */}
        <section className="section-sm" style={{ background: 'linear-gradient(135deg, #8B5E83, #6B4563)' }}>
          <div className="container-hn text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ready to Meet Dr. Sanjana?
            </h2>
            <p className="text-white/80 mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Book your appointment at Health Nest, HSR Layout today.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/book-appointment" className="btn-white">
                <Calendar size={18} /> Book Appointment
              </Link>
              <Link href="/services" className="btn-outline-white">
                View Services <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
