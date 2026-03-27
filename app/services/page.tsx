import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Baby, HeartPulse, Smile, Stethoscope, Flower2, Microscope,
  Scissors, Search, Activity, Calendar as CalendarIcon, Sun, ScanLine,
  Heart, ShieldCheck, Shield, Droplets, UserRound
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import BreadcrumbNav from '@/components/BreadcrumbNav';

export const metadata: Metadata = {
  title: 'Gynaecology & Obstetrics Services | HSR Layout & Attibele Bangalore',
  description:
    'Comprehensive women’s healthcare services at Health Nest (HSR Layout) and Raghava Hospital (Attibele). Dr. Sanjana L offers pregnancy care, high-risk obstetrics, fertility, and laparoscopic surgery for patients across South Bangalore and Hosur.',
};

const allServices = [
  { slug: 'pregnancy-care', icon: Baby, title: 'Pregnancy Care', desc: 'Comprehensive prenatal support from conception to delivery.', category: 'Obstetrics' },
  { slug: 'high-risk-pregnancy', icon: HeartPulse, title: 'High-Risk Pregnancy', desc: 'Expert care for gestational diabetes, preeclampsia, and complex pregnancies.', category: 'Obstetrics' },
  { slug: 'normal-delivery', icon: Smile, title: 'Normal Delivery', desc: 'Safe, supportive vaginal delivery with experienced guidance.', category: 'Obstetrics' },
  { slug: 'cesarean-delivery', icon: Stethoscope, title: 'Caesarean Delivery', desc: 'Skilled C-section surgery when medically indicated or planned.', category: 'Obstetrics' },
  { slug: 'prenatal-screening', icon: ScanLine, title: 'Prenatal Screening', desc: 'Comprehensive antenatal tests for healthy fetal development.', category: 'Obstetrics' },
  { slug: 'postnatal-care', icon: Heart, title: 'Postnatal Care', desc: 'Post-delivery recovery, breastfeeding and newborn care support.', category: 'Obstetrics' },
  { slug: 'fertility-treatment', icon: Flower2, title: 'Fertility Treatment', desc: 'Compassionate fertility evaluation and treatment support.', category: 'Fertility' },
  { slug: 'ivf-iui', icon: Microscope, title: 'IVF & IUI', desc: 'Advanced assisted reproductive technology guidance and co-management.', category: 'Fertility' },
  { slug: 'laparoscopic-surgery', icon: Scissors, title: 'Laparoscopic Surgery', desc: 'Minimally invasive keyhole surgery for fibroids, cysts, endometriosis.', category: 'Surgery' },
  { slug: 'hysteroscopy', icon: Search, title: 'Hysteroscopy', desc: 'Diagnostic and operative hysteroscopy for uterine conditions.', category: 'Surgery' },
  { slug: 'pcos-pcod-treatment', icon: Activity, title: 'PCOS & PCOD', desc: 'Holistic hormonal management and lifestyle support.', category: 'Gynaecology' },
  { slug: 'menstrual-disorders', icon: CalendarIcon, title: 'Menstrual Disorders', desc: 'Diagnosis and treatment for irregular, painful, or heavy periods.', category: 'Gynaecology' },
  { slug: 'menopause-management', icon: Sun, title: 'Menopause Management', desc: 'Supportive care for symptom relief and long-term health.', category: 'Gynaecology' },
  { slug: 'contraception-counselling', icon: ShieldCheck, title: 'Contraception Counselling', desc: 'Personalised guidance on the right contraceptive for your lifestyle.', category: 'Gynaecology' },
  { slug: 'cervical-cancer-screening', icon: Shield, title: 'Cervical Cancer Screening', desc: 'Pap smear and HPV testing for early detection and prevention.', category: 'Gynaecology' },
  { slug: 'urogynaecology', icon: Droplets, title: 'Urogynaecology', desc: 'Treatment for urinary incontinence and pelvic organ prolapse.', category: 'Gynaecology' },
  { slug: 'adolescent-gynaecology', icon: UserRound, title: 'Adolescent Gynaecology', desc: 'Sensitive gynaecological care for young girls and teenagers.', category: 'Gynaecology' },
];

const categories = ['Obstetrics', 'Fertility', 'Surgery', 'Gynaecology'];

const categoryColors: Record<string, string> = {
  Obstetrics: '#8B5E83',
  Fertility: '#2A6B5A',
  Surgery: '#E8A87C',
  Gynaecology: '#5E7B8B',
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="bg-gradient-hero" style={{ paddingTop: '100px', paddingBottom: '40px' }}>
          <div className="container-hn">
            <BreadcrumbNav crumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]} />
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-3" style={{ fontFamily: 'Playfair Display, serif', color: '#2D2D2D' }}>
              Our Services
            </h1>
            <div className="accent-line" />
            <p className="text-lg max-w-2xl" style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif' }}>
              Comprehensive gynaecology and obstetrics care at Health Nest (HSR Layout) and Raghava Hospital (Attibele), Bangalore — delivered by Dr. Sanjana L with compassion, expertise, and clinical excellence.
            </p>
          </div>
        </section>

        <section className="section" style={{ background: '#FFFFFF' }}>
          <div className="container-hn">
            {categories.map((cat) => (
              <div key={cat} className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#2D2D2D' }}>{cat}</h2>
                  <div className="flex-1 h-px" style={{ background: '#E8E0DB' }} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {allServices.filter(s => s.category === cat).map((service) => (
                    <Link key={service.slug} href={`/services/${service.slug}`} className="service-card group">
                      <div className="service-icon" style={{ color: categoryColors[cat] }}>
                        <service.icon size={24} />
                      </div>
                      <h3 className="text-base font-semibold mb-2 transition-colors group-hover:text-purple-700" style={{ fontFamily: 'DM Sans, sans-serif', color: '#2D2D2D' }}>
                        {service.title}
                      </h3>
                      <p className="text-sm leading-relaxed mb-3" style={{ color: '#6B6B6B' }}>{service.desc}</p>
                      <span className="text-sm font-semibold" style={{ color: categoryColors[cat] }}>Learn More →</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-sm" style={{ background: 'linear-gradient(135deg, #8B5E83, #6B4563)' }}>
          <div className="container-hn text-center">
            <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
              Not Sure Which Service You Need?
            </h2>
            <p className="text-white/80 mb-5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Book a general consultation and Dr. Sanjana will guide you to the right care.
            </p>
            <Link href="/book-appointment" className="btn-white">Book Consultation</Link>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
