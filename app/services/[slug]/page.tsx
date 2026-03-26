import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle2, AlertCircle, ArrowRight, Calendar } from 'lucide-react';
import { services, getServiceBySlug, getRelatedServices } from '@/lib/services';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import FAQAccordion from '@/components/FAQAccordion';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: 'Service Not Found' };
  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getRelatedServices(service.relatedSlugs);

  const medicalProcedureSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: service.shortTitle,
    description: service.overview,
    procedureType: service.category,
    body: {
      '@type': 'MedicalOrganization',
      name: 'Health Nest',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bangalore',
        addressRegion: 'Karnataka',
        addressCountry: 'IN',
      },
    },
    followup: 'Follow-up care and monitoring provided by Dr. Sanjana L',
    howPerformed: service.whatToExpect.join('. '),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalProcedureSchema) }}
      />
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-hero" style={{ paddingTop: '100px', paddingBottom: '50px' }}>
          <div className="container-hn">
            <BreadcrumbNav
              crumbs={[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: service.shortTitle },
              ]}
            />
            <div className="mt-4 max-w-3xl">
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4"
                style={{ background: 'rgba(139,94,131,0.12)', color: '#8B5E83', fontFamily: 'DM Sans, sans-serif' }}
              >
                {service.category}
              </span>
              <h1
                className="text-4xl md:text-5xl font-bold mb-4"
                style={{ fontFamily: 'Playfair Display, serif', color: '#2D2D2D' }}
              >
                {service.title}
              </h1>
              <div className="accent-line" />
              <p className="text-lg mb-6" style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7 }}>
                {service.description}
              </p>
              <Link href="/book-appointment" className="btn-primary">
                <Calendar size={18} /> Book Appointment
              </Link>
            </div>
          </div>
        </section>

        {/* At a Glance */}
        <section className="section-sm" style={{ background: '#FFFFFF' }}>
          <div className="container-hn">
            <div className="at-a-glance max-w-4xl mx-auto">
              <h2 className="text-xl font-bold mb-4" style={{ fontFamily: 'DM Sans, sans-serif', color: '#2D2D2D' }}>
                At a Glance — {service.shortTitle}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-semibold mb-2 uppercase tracking-wide" style={{ color: '#8B5E83' }}>Specialty</p>
                  <p className="text-sm" style={{ color: '#6B6B6B' }}>{service.category} — Health Nest, HSR Layout, Bangalore</p>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-2 uppercase tracking-wide" style={{ color: '#8B5E83' }}>Specialist</p>
                  <p className="text-sm" style={{ color: '#6B6B6B' }}>Dr. Sanjana L, MBBS, MS (OB-GYN) · 10+ years experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container-hn" style={{ paddingBottom: '8rem' }}>
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Overview */}
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#2D2D2D' }}>
                  Overview
                </h2>
                <div className="accent-line" />
                <p style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.8 }}>
                  {service.overview}
                </p>
              </div>

              {/* What to Expect */}
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#2D2D2D' }}>
                  What to Expect
                </h2>
                <div className="accent-line" />
                <ul className="space-y-3">
                  {service.whatToExpect.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5"
                        style={{ background: 'linear-gradient(135deg, #8B5E83, #6B4563)' }}
                      >
                        {i + 1}
                      </div>
                      <p className="text-sm leading-relaxed pt-1" style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif' }}>{step}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* When to See Doctor */}
              <div
                className="rounded-2xl p-6"
                style={{ background: 'rgba(232,168,124,0.08)', border: '1px solid rgba(232,168,124,0.3)' }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <AlertCircle size={20} style={{ color: '#E8A87C' }} />
                  <h2 className="text-xl font-bold" style={{ fontFamily: 'DM Sans, sans-serif', color: '#2D2D2D' }}>
                    When Should You See Dr. Sanjana?
                  </h2>
                </div>
                <ul className="space-y-2">
                  {service.whenToSeeDoctor.map((sign, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="mt-0.5 flex-shrink-0" style={{ color: '#2A6B5A' }} />
                      <span className="text-sm" style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif' }}>{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why Choose Dr Sanjana */}
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#2D2D2D' }}>
                  Why Choose Dr. Sanjana for {service.shortTitle}?
                </h2>
                <div className="accent-line" />
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.whyChooseDrSanjana.map((reason, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-xl"
                      style={{ background: '#FFF8F0', border: '1px solid #E8E0DB' }}
                    >
                      <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#8B5E83' }} />
                      <p className="text-sm" style={{ color: '#2D2D2D', fontFamily: 'DM Sans, sans-serif' }}>{reason}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#2D2D2D' }}>
                  Frequently Asked Questions
                </h2>
                <div className="accent-line" />
                <FAQAccordion faqs={service.faqs} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Book CTA */}
              <div
                className="rounded-2xl p-6 text-center sticky top-24"
                style={{ background: 'linear-gradient(135deg, #8B5E83, #6B4563)', color: 'white' }}
              >
                <p className="text-lg font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Book for {service.shortTitle}
                </p>
                <p className="text-sm text-white/80 mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Dr. Sanjana L · Health Nest · HSR Layout
                </p>
                <p className="text-xs text-white/60 mb-4">200+ patients trust Dr. Sanjana</p>
                <Link href="/book-appointment" className="btn-white w-full justify-center">
                  <Calendar size={16} /> Book Now
                </Link>
                <a href="tel:+91XXXXXXXXXX" className="btn-outline-white w-full justify-center mt-3 text-sm">
                  Call Clinic
                </a>
              </div>

              {/* Related Services */}
              {related.length > 0 && (
                <div className="rounded-2xl p-5" style={{ border: '1px solid #E8E0DB', background: 'white' }}>
                  <h3 className="font-semibold mb-4" style={{ fontFamily: 'DM Sans, sans-serif', color: '#2D2D2D' }}>
                    Related Services
                  </h3>
                  <ul className="space-y-2">
                    {related.map((r) => (
                      <li key={r.slug}>
                        <Link
                          href={`/services/${r.slug}`}
                          className="flex items-center gap-2 text-sm p-2 rounded-lg transition-colors hover:bg-purple-50"
                          style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif' }}
                        >
                          <ArrowRight size={14} style={{ color: '#8B5E83', flexShrink: 0 }} />
                          {r.shortTitle}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
