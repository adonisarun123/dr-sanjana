import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone, Calendar, Star, Baby, HeartPulse, Flower2, Activity,
  Scissors, ShieldCheck, ArrowRight, MapPin, Clock, Award, Users, Languages, CheckCircle2
} from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import FloatingButtons from '@/components/FloatingButtons';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Best Gynaecologist in HSR Layout & Attibele | Dr. Sanjana L - Health Nest',
  description:
    'Dr. Sanjana L (MBBS MS ( OBG) Gold Medalist FRM ( RGUHS) FMAS) — 10 plus years experienced gynaecologist & obstetrician serving HSR Layout, Attibele, Sarjapura and South Bangalore. Expert care for pregnancy, fertility and laparoscopy.',
  alternates: { canonical: '/' },
  openGraph: { url: '/' },
};

const homeServices = [
  {
    icon: Baby,
    title: 'Pregnancy Care',
    description: 'Comprehensive prenatal support from conception through safe delivery.',
    href: '/services/pregnancy-care',
  },
  {
    icon: HeartPulse,
    title: 'High-Risk Pregnancy',
    description: 'Expert management of complex pregnancies with vigilant monitoring.',
    href: '/services/high-risk-pregnancy',
  },
  {
    icon: Flower2,
    title: 'Fertility Treatment',
    description: 'Compassionate fertility evaluation, IUI support and IVF guidance.',
    href: '/services/fertility-treatment',
  },
  {
    icon: Activity,
    title: 'PCOS & PCOD',
    description: 'Holistic hormonal management, lifestyle support and fertility care.',
    href: '/services/pcos-pcod-treatment',
  },
  {
    icon: Scissors,
    title: 'Laparoscopic Surgery',
    description: 'Minimally invasive keyhole surgery for cysts, fibroids, endometriosis.',
    href: '/services/laparoscopic-surgery',
  },
  {
    icon: ShieldCheck,
    title: 'Cervical Cancer Screening',
    description: 'Pap smear and HPV testing for early detection and prevention.',
    href: '/services/cervical-cancer-screening',
  },
];

const homeFaqs = [
  {
    q: 'Who is the best gynaecologist in HSR Layout & Attibele, Bangalore?',
    a: 'Dr. Sanjana L at Health Nest is one of the most trusted gynaecologists in HSR Layout & Attibele, Bangalore, with 10 plus years of experience in obstetrics and gynaecology. She holds MBBS MS ( OBG) Gold Medalist FRM ( RGUHS) FMAS qualifications (Registration No: 124759) and is known for her compassionate, patient-centred approach.',
  },
  {
    q: 'What services does Health Nest clinic offer?',
    a: 'Health Nest offers a comprehensive range of gynaecological and obstetric services including pregnancy care, high-risk pregnancy management, normal and caesarean delivery, fertility treatment (IUI/IVF), PCOS/PCOD management, laparoscopic surgery, hysteroscopy, cervical cancer screening, menopause management, and adolescent gynaecology.',
  },
  {
    q: 'Does Dr. Sanjana L perform normal deliveries?',
    a: 'Yes, Dr. Sanjana L supports and facilitates normal (vaginal) deliveries for eligible patients. She provides birth planning, labour support, and evidence-based pain management, and is experienced in both normal and caesarean deliveries.',
  },
  {
    q: 'What is the consultation fee at Health Nest (HSR Layout) & Raghava Hospital (Attibele)?',
    a: 'Please contact Health Nest/Raghava Hospital directly at +91-9449031003 or via the booking form for current consultation fees. The clinic offers both in-person and online consultations.',
  },
  {
    q: 'Is online consultation available with Dr. Sanjana L?',
    a: 'Yes, Dr. Sanjana L offers online video consultations for follow-up visits, second opinions, and initial discussion of concerns. Book through the website or call the clinic to schedule an online appointment.',
  },
  {
    q: 'Where is Health Nest clinic located?',
    a: 'Health Nest has two primary consultation centers: HSR Layout (near Agara Lake, accessible from Koramangala & BTM Layout) and Raghava Hospital, Attibele (serving Sarjapura, Electronic City, Chandapura, and Hosur). Street parking is available at both locations.',
  },
];

const usps = [
  {
    icon: '💜',
    title: 'Personalised Care',
    description: 'Every consultation is tailored to your unique health needs, history, and concerns.',
  },
  {
    icon: '🔬',
    title: 'Advanced Technology',
    description: 'State-of-the-art diagnostic tools and minimally invasive surgical techniques.',
  },
  {
    icon: '🗣️',
    title: 'Multilingual',
    description: 'Consultations in English, Hindi, Kannada, and Telugu for your comfort.',
  },
  {
    icon: '📍',
    title: 'Convenient Location',
    description: 'Centrally located in HSR Layout & Attibele — easily accessible from Sarjapura, Electronic City and South Bangalore.',
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* ─── HERO SECTION ─── */}
        <section
          className="bg-gradient-hero relative overflow-hidden"
          style={{ paddingTop: '140px', paddingBottom: '100px' }}
        >
          {/* Background decorative elements */}
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30 pointer-events-none translate-x-1/3 -translate-y-1/3"
            style={{ background: 'radial-gradient(circle, #C9A7C7 0%, transparent 70%)' }}
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none -translate-x-1/3 translate-y-1/3"
            style={{ background: 'radial-gradient(circle, #2A6B5A 0%, transparent 70%)' }}
            aria-hidden="true"
          />

          <div className="container-hn relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Column: Text & CTA */}
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 border border-white/80 shadow-sm mb-6 backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#2A6B5A', fontFamily: 'DM Sans, sans-serif' }}>
                    Accepting New Patients
                  </span>
                </div>
                
                <h1
                  className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#1C1C2E' }}
                >
                  Compassionate <br/>
                  <span className="gradient-text italic opacity-90">Women&apos;s Health</span> <br/>
                  Care in HSR & Attibele
                </h1>
                
                <p
                  className="text-lg md:text-xl mb-8"
                  style={{ color: '#4A4A4A', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.6 }}
                >
                  Pregnancy care, fertility support, and advanced gynaecology by <strong>Dr. Sanjana L</strong> — all under one roof at Health Nest, Bangalore.
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-10">
                  <Link href="/book-appointment" className="btn-primary" style={{ padding: '0.875rem 2rem', fontSize: '1.05rem' }}>
                    <Calendar size={20} />
                    Book Appointment
                  </Link>
                  <a href="tel:+919449031003" className="btn-white" style={{ padding: '0.875rem 2rem', fontSize: '1.05rem' }}>
                    <Phone size={20} />
                    Call Clinic
                  </a>
                </div>

                {/* Mobile-only Trust Badges (Hidden on large screens because they float on the image) */}
                <div className="flex lg:hidden flex-wrap gap-3 mt-8">
                  <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-xl shadow-sm border border-gray-100">
                    <Award size={18} style={{ color: '#8B5E83' }} />
                    <span className="text-sm font-semibold text-gray-800">10 plus years Exp.</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-xl shadow-sm border border-gray-100">
                    <Star size={18} style={{ color: '#F59E0B', fill: '#F59E0B' }} />
                    <span className="text-sm font-semibold text-gray-800">4.9/5 Rating</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Premium Image Layout */}
              <div className="hidden lg:block relative perspective-1000">
                {/* Main Image Container */}
                <div className="relative z-10 w-full max-w-[500px] ml-auto">
                  <div 
                    className="relative rounded-[2rem] overflow-hidden shadow-2xl"
                    style={{ aspectRatio: '4/5', transform: 'rotateY(-5deg) rotateX(2deg)', transformStyle: 'preserve-3d', transition: 'transform 0.5s ease' }}
                  >
                    <Image
                      src="/dr-sanjana-hero.png"
                      alt="Dr. Sanjana - Health Nest"
                      width={500}
                      height={625}
                      priority
                      sizes="(max-width: 1024px) 0px, 500px"
                      className="w-full h-full object-cover object-top"
                    />
                    {/* Inner elegant gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C2E]/60 via-transparent to-transparent" />
                    
                    {/* Name block inside image */}
                    <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl backdrop-blur-md bg-white/20 border border-white/30 text-white shadow-lg">
                      <p className="text-2xl font-bold mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>Dr. Sanjana L</p>
                      <p className="text-sm font-medium opacity-90" style={{ fontFamily: 'DM Sans, sans-serif' }}>Qualification: MBBS MS ( OBG) Gold Medalist FRM ( RGUHS) FMAS</p>
                      <div className="flex items-center gap-2 mt-3 pt-3 border-t border-white/20">
                        <CheckCircle2 size={14} className="text-green-300" />
                        <span className="text-xs">RGUHS Gold Medalist</span>
                      </div>
                    </div>
                  </div>

                  {/* Floating Glassmorphic Badge 1 */}
                  <div 
                    className="absolute -left-12 top-20 z-20 p-4 rounded-2xl backdrop-blur-xl bg-white/80 border border-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center gap-4 animate-bounce-slow"
                    style={{ animation: 'float 6s ease-in-out infinite' }}
                  >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'rgba(139,94,131,0.1)' }}>
                      <Award size={24} style={{ color: '#8B5E83' }} />
                    </div>
                    <div>
                      <p className="text-xl font-bold leading-none mb-1" style={{ color: '#1C1C2E', fontFamily: 'Playfair Display, serif' }}>10 plus years</p>
                      <p className="text-sm font-medium" style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif' }}>Trusted Experience</p>
                    </div>
                  </div>

                  {/* Floating Glassmorphic Badge 2 */}
                  <div 
                    className="absolute -right-8 bottom-32 z-20 p-4 rounded-2xl backdrop-blur-xl bg-white/80 border border-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center gap-3 animate-bounce-slow"
                    style={{ animation: 'float 8s ease-in-out infinite reverse' }}
                  >
                    <div className="flex -space-x-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                          <img
                            src={`https://i.pravatar.cc/100?img=${i + 10}`}
                            alt=""
                            width={40}
                            height={40}
                            loading="lazy"
                            decoding="async"
                            fetchPriority="low"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="flex items-center gap-1 mb-0.5">
                        <Star size={14} style={{ color: '#F59E0B', fill: '#F59E0B' }} />
                        <span className="text-sm font-bold" style={{ color: '#1C1C2E' }}>4.9/5</span>
                      </div>
                      <p className="text-xs font-medium" style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif' }}>5000+ Happy Patients</p>
                    </div>
                  </div>

                  {/* Decorative element behind image */}
                  <div className="absolute -inset-4 bg-gradient-to-tr from-[#8B5E83]/20 to-[#2A6B5A]/20 rounded-[2.5rem] -z-10 blur-2xl" />
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* ─── SERVICES SECTION ─── */}
        <section className="section" style={{ background: '#FFFFFF' }}>
          <div className="container-hn">
            <div className="text-center mb-12">
              <p className="section-label mb-2">Our Services</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#2D2D2D' }}>
                Comprehensive Women&apos;s Healthcare
              </h2>
              <div className="accent-line-center" />
              <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif' }}>
                From first pregnancy to menopause and every milestone in between, Health Nest provides expert care for every stage of a woman&apos;s life.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {homeServices.map((service) => (
                <Link key={service.href} href={service.href} className="service-card group">
                  <div className="service-icon">
                    <service.icon size={24} />
                  </div>
                  <h3
                    className="text-lg font-semibold mb-2 transition-colors group-hover:text-purple-700"
                    style={{ fontFamily: 'DM Sans, sans-serif', color: '#2D2D2D' }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#6B6B6B' }}>
                    {service.description}
                  </p>
                  <span className="text-sm font-semibold flex items-center gap-1" style={{ color: '#8B5E83' }}>
                    Learn More <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/services" className="btn-secondary">
                View All Services <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* ─── ABOUT QUICK INTRO ─── */}
        <section className="section bg-gradient-hero">
          <div className="container-hn">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Visual */}
              <div
                className="rounded-3xl p-10 flex flex-col items-center justify-center text-center gap-6"
                style={{
                  minHeight: '350px',
                  background: 'linear-gradient(160deg, #1C1235 0%, #3D2A5A 40%, #1A3A4A 100%)',
                  boxShadow: '0 20px 60px rgba(28,18,53,0.35)',
                }}
              >
                <div className="w-24 h-24 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.12)', border: '2px solid rgba(255,255,255,0.25)' }}>
                  <span className="text-white font-bold text-3xl" style={{ fontFamily: 'Playfair Display, serif' }}>SL</span>
                </div>
                <div className="text-white">
                  <p className="text-2xl font-bold mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>Dr. Sanjana L</p>
                  <p className="text-sm opacity-75" style={{ fontFamily: 'DM Sans, sans-serif' }}>Qualification: MBBS MS ( OBG) Gold Medalist FRM ( RGUHS) FMAS</p>
                  <p className="text-sm opacity-75" style={{ fontFamily: 'DM Sans, sans-serif' }}>Reg. No: 124759</p>
                </div>
                <div className="grid grid-cols-2 gap-3 w-full">
                  {[
                    { n: '10+', l: 'Years' },
                    { n: '5000+', l: 'Patients' },
                    { n: '4.9★', l: 'Rating' },
                    { n: '4', l: 'Languages' },
                  ].map(({ n, l }) => (
                    <div key={l} className="rounded-xl p-3 text-white" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}>
                      <p className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>{n}</p>
                      <p className="text-sm opacity-70">{l}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Text */}
              <div>
                <p className="section-label mb-2">About Dr. Sanjana</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif', color: '#2D2D2D' }}>
                  Your Trusted Partner in Women&apos;s Health
                </h2>
                <div className="accent-line" />
                <p className="mb-4" style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7 }}>
                  Dr. Sanjana L is an experienced Obstetrician and Gynaecologist with over 10 plus years of practice in Bangalore. Holding an MBBS and MS in Obstetrics & Gynaecology, she has dedicated her career to empowering women through compassionate, evidence-based healthcare.
                </p>
                <p className="mb-6" style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7 }}>
                  At Health Nest (HSR Layout) and Raghava Hospital (Attibele), Dr. Sanjana believes that every woman deserves personalised care delivered with dignity, warmth, and clinical excellence. She consults in English, Hindi, Kannada, and Telugu, ensuring every patient feels heard and understood.
                </p>
                <ul className="space-y-2 mb-8">
                  {[
                    'Specialised in high-risk pregnancy & laparoscopic surgery',
                    'Gold Medalist - Obstetrics & Gynaecology',
                    'Member of FOGSI (Federation of OB/GYN Societies of India)',
                    'Offers both in-person & online consultations',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 size={17} className="mt-0.5 flex-shrink-0" style={{ color: '#2A6B5A' }} />
                      <span className="text-sm" style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif' }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/about-dr-sanjana" className="btn-primary">
                  Read Full Profile <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── WHY CHOOSE US ─── */}
        <section className="section" style={{ background: '#FFFFFF' }}>
          <div className="container-hn">
            <div className="text-center mb-12">
              <p className="section-label mb-2">Why Health Nest</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif', color: '#2D2D2D' }}>
                The Health Nest Difference
              </h2>
              <div className="accent-line-center" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {usps.map((usp) => (
                <div
                  key={usp.title}
                  className="text-center p-6 rounded-2xl border transition-all hover:shadow-lg hover:-translate-y-1"
                  style={{ borderColor: '#E8E0DB', background: '#FFF8F0' }}
                >
                  <div className="text-4xl mb-4" role="img" aria-label={usp.title}>{usp.icon}</div>
                  <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'DM Sans, sans-serif', color: '#2D2D2D' }}>{usp.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif' }}>{usp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── TESTIMONIALS ─── */}
        <section className="section bg-gradient-hero">
          <div className="container-hn">
            <div className="text-center mb-12">
              <p className="section-label mb-2">Patient Stories</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif', color: '#2D2D2D' }}>
                What Our Patients Say
              </h2>
              <div className="accent-line-center" />
              <div className="flex items-center justify-center gap-1 mt-2">
                {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="#F59E0B" color="#F59E0B" />)}
                <span className="ml-2 text-sm font-semibold" style={{ color: '#2D2D2D', fontFamily: 'DM Sans, sans-serif' }}>4.9</span>
                <span className="text-sm" style={{ color: '#6B6B6B' }}>· 200+ Trusted Reviews on Google</span>
              </div>
            </div>
            <TestimonialCarousel />
            <div className="text-center mt-10">
              <Link href="/patient-stories" className="btn-secondary">
                Read All Stories <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* ─── BLOG PREVIEW ─── */}
        <section className="section" style={{ background: '#FFFFFF' }}>
          <div className="container-hn">
            <div className="text-center mb-12">
              <p className="section-label mb-2">Health Articles</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif', color: '#2D2D2D' }}>
                Expert Health Tips from Dr. Sanjana
              </h2>
              <div className="accent-line-center" />
              <p className="text-base max-w-2xl mx-auto" style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif' }}>
                Evidence-based articles on pregnancy, fertility, PCOS, and women&apos;s health for patients in HSR Layout, Attibele, Sarjapura &amp; South Bangalore.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  href: '/blog/pcos-vs-pcod-difference',
                  category: 'Fertility',
                  title: 'PCOS vs PCOD: Key Differences, Symptoms & Treatment',
                  excerpt: 'Are PCOS and PCOD the same? Dr. Sanjana explains the critical differences, diagnosis, fertility impact, and latest treatment options.',
                  readTime: 10,
                  date: 'March 10, 2026',
                  color: '#2A6B5A',
                },
                {
                  href: '/blog/normal-delivery-vs-c-section',
                  category: 'Pregnancy',
                  title: 'Normal Delivery vs C-Section: Benefits, Risks & How to Decide',
                  excerpt: 'Should you aim for normal delivery or C-section? Benefits, risks, VBAC options, and expert guidance from Dr. Sanjana L.',
                  readTime: 11,
                  date: 'March 15, 2026',
                  color: '#8B5E83',
                },
                {
                  href: '/blog/fertility-after-35-getting-pregnant',
                  category: 'Fertility',
                  title: 'Fertility After 35: What Every Woman Should Know',
                  excerpt: 'How age affects fertility, essential tests like AMH, tips to improve your chances, and when to seek IUI or IVF treatment.',
                  readTime: 10,
                  date: 'March 20, 2026',
                  color: '#E8A87C',
                },
              ].map((post) => (
                <Link key={post.href} href={post.href} className="card block group" style={{ textDecoration: 'none' }}>
                  <div
                    className="h-40 rounded-t-2xl flex items-center justify-center p-6"
                    style={{ background: `linear-gradient(135deg, ${post.color}22, ${post.color}11)` }}
                  >
                    <h3
                      className="text-base font-semibold text-center leading-snug transition-colors group-hover:text-purple-700"
                      style={{ fontFamily: 'Playfair Display, serif', color: '#2D2D2D' }}
                    >
                      {post.title}
                    </h3>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={{ background: `${post.color}18`, color: post.color }}
                      >
                        {post.category}
                      </span>
                      <span className="text-xs" style={{ color: '#9B9B9B' }}>{post.readTime} min read</span>
                      <span className="text-xs" style={{ color: '#9B9B9B' }}>{post.date}</span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif' }}>
                      {post.excerpt}
                    </p>
                    <p className="mt-3 text-sm font-semibold" style={{ color: '#8B5E83' }}>Read Article →</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/blog" className="btn-secondary">View All 8 Articles <ArrowRight size={16} /></Link>
            </div>
          </div>
        </section>

        {/* ─── FAQ SECTION ─── */}
        <section className="section bg-gradient-hero">
          <div className="container-hn">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <p className="section-label mb-2">FAQ</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif', color: '#2D2D2D' }}>
                  Frequently Asked Questions
                </h2>
                <div className="accent-line-center" />
              </div>
              <FAQAccordion faqs={homeFaqs} />
              <div className="text-center mt-8">
                <Link href="/faq" className="btn-secondary">See All FAQs <ArrowRight size={16} /></Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA STRIP ─── */}
        <section
          className="py-20 md:py-28"
          style={{ background: 'linear-gradient(135deg, #8B5E83, #6B4563)' }}
        >
          <div className="container-hn text-center">
            <h2
              className="text-2xl md:text-3xl font-bold text-white mb-3"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Ready to Book Your Visit?
            </h2>
            <p className="text-white/80 mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              200+ women trust Dr. Sanjana L with their health every month. Join them today.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/book-appointment" className="btn-white">
                <Calendar size={18} /> Book Appointment
              </Link>
              <a href="tel:+919449031003" className="btn-outline-white">
                <Phone size={18} /> Call: +91-9449031003
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
