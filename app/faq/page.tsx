import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'FAQs — Health Nest Gynaecology Clinic, HSR Layout Bangalore',
  description:
    'Common questions about gynaecology services, pregnancy care, fees & appointments at Health Nest with Dr. Sanjana L.',
};

const allFaqs = [
  {
    category: 'About Dr. Sanjana & Health Nest',
    faqs: [
      { q: 'Who is Dr. Sanjana L?', a: 'Dr. Sanjana L is an experienced Obstetrician and Gynaecologist (MBBS, MS OB-GYN) with over 15 years of practice. She is based at Health Nest clinic in HSR Layout, Bangalore, and is known for her compassionate, patient-centred approach. Medical Registration No: 124759.' },
      { q: 'What languages does Dr. Sanjana consult in?', a: 'Dr. Sanjana L consults in English, Hindi, Kannada, and Telugu, making her accessible to a diverse range of patients across Bangalore and beyond.' },
      { q: 'Is online consultation available?', a: 'Yes, online video consultations are available for follow-up visits, second opinions, and initial discussions. Book through the website or call the clinic.' },
      { q: 'Where is Health Nest located?', a: 'Health Nest is in HSR Layout, Bangalore, Karnataka — 560102. It is conveniently located near Agara Lake, Silk Board, and Koramangala and easily accessible from South Bangalore.' },
      { q: 'What are the clinic hours?', a: 'The clinic is open Monday to Saturday, 9:00 AM – 6:00 PM. The clinic is closed on Sundays.' },
    ],
  },
  {
    category: 'Pregnancy & Delivery',
    faqs: [
      { q: 'When should I book my first prenatal appointment?', a: 'Ideally as soon as you get a positive pregnancy test — typically between weeks 6–8. Early visits help confirm healthy development and establish your personalised care plan.' },
      { q: 'Does Dr. Sanjana do normal (vaginal) deliveries?', a: 'Yes. Dr. Sanjana supports and facilitates normal deliveries for eligible women. She provides birth planning consultations, labour support, and pain management options.' },
      { q: 'What qualifies a pregnancy as high-risk?', a: 'Factors include gestational diabetes, hypertension, preeclampsia, multiple pregnancies (twins/triplets), advanced maternal age (35+), prior complicated deliveries, or chronic health conditions.' },
      { q: 'What prenatal tests are recommended?', a: 'In the first trimester: blood group, CBC, blood sugar, thyroid, dating scan, and nuchal translucency screening. In the second trimester: anomaly scan (18–22 weeks) and glucose tolerance test. Dr. Sanjana will guide you on all required tests.' },
    ],
  },
  {
    category: 'Fertility & PCOS',
    faqs: [
      { q: 'When should a couple seek fertility help?', a: 'If under 35 and trying for 12 months without success, or over 35 and trying for 6 months. Women with known conditions like PCOS or endometriosis can seek help even earlier.' },
      { q: 'What is PCOS and how is it treated?', a: 'PCOS (Polycystic Ovary Syndrome) is a hormonal disorder affecting ovulation, causing irregular periods, acne, hair growth, and weight issues. Treatment involves lifestyle changes, hormonal therapy, and fertility support if needed.' },
      { q: 'Does Health Nest offer IVF?', a: 'Dr. Sanjana offers fertility evaluation, IUI procedures, and co-management and referral for IVF with trusted fertility centres in Bangalore.' },
    ],
  },
  {
    category: 'Surgery & Procedures',
    faqs: [
      { q: 'What is laparoscopic surgery and is it safe?', a: 'Laparoscopy is minimally invasive surgery using a camera through tiny incisions. It is used for ovarian cysts, fibroids, endometriosis, and tubal conditions. It is safe, carries lower risks than open surgery, and offers faster recovery (1–2 weeks).' },
      { q: 'What conditions is hysteroscopy used for?', a: 'Hysteroscopy diagnoses and treats conditions inside the uterus — including polyps, fibroids, adhesions (Ashermans syndrome), uterine septum, and repeated miscarriage evaluation.' },
    ],
  },
  {
    category: 'General Gynaecology',
    faqs: [
      { q: 'How often should I have a Pap smear?', a: 'Every 3 years for women aged 21–65. If combined with an HPV test, every 5 years for women aged 30–65. Dr. Sanjana will personalise the screening schedule for you.' },
      { q: 'Are painful periods normal?', a: 'Mild cramping is normal. Severe pain that limits your daily activities is not normal and may indicate endometriosis, adenomyosis, or fibroids. Please consult Dr. Sanjana.' },
      { q: 'What does menopause management involve?', a: 'Assessment of symptoms, bone density review, discussion of Hormone Replacement Therapy (HRT) risks and benefits, non-hormonal alternatives, and cardiovascular / bone health guidance.' },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="bg-gradient-hero" style={{ paddingTop: '100px', paddingBottom: '40px' }}>
          <div className="container-hn">
            <BreadcrumbNav crumbs={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]} />
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-3" style={{ fontFamily: 'Playfair Display, serif', color: '#2D2D2D' }}>
              Frequently Asked Questions
            </h1>
            <div className="accent-line" />
            <p className="max-w-2xl" style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif' }}>
              Common questions about Dr. Sanjana L, Health Nest clinic, pregnancy care, fertility, and women&apos;s health. Can&apos;t find your answer?{' '}
              <Link href="/contact" style={{ color: '#8B5E83', fontWeight: 600 }}>Contact us →</Link>
            </p>
          </div>
        </section>

        <section className="section" style={{ background: '#FFFFFF' }}>
          <div className="container-hn">
            <div className="max-w-3xl mx-auto space-y-12">
              {allFaqs.map((group) => (
                <div key={group.category}>
                  <h2 className="text-2xl font-bold mb-5" style={{ fontFamily: 'Playfair Display, serif', color: '#2D2D2D' }}>
                    {group.category}
                  </h2>
                  <FAQAccordion faqs={group.faqs} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-sm" style={{ background: 'linear-gradient(135deg, #8B5E83, #6B4563)' }}>
          <div className="container-hn text-center">
            <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
              Still Have Questions?
            </h2>
            <p className="text-white/80 mb-5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Book a consultation with Dr. Sanjana L and get personalised answers.
            </p>
            <Link href="/book-appointment" className="btn-white">Book Appointment</Link>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
