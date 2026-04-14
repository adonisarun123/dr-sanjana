import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle2, AlertCircle, ArrowRight, Calendar } from 'lucide-react';
import { services, getServiceBySlug, getRelatedServices } from '@/lib/services';
import { SITE_URL } from '@/lib/site';
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
    location: { '@id': `${SITE_URL}/#organization` },
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
        <section className="bg-gradient-hero pt-[100px] pb-[50px]">
          <div className="container-hn">
            <BreadcrumbNav
              crumbs={[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: service.shortTitle },
              ]}
            />
            <div className="mt-4 max-w-3xl">
              <span className="mb-4 inline-block rounded-full bg-primary/12 px-3 py-1 font-sans text-xs font-semibold text-primary">
                {service.category}
              </span>
              <h1 className="mb-4 font-display text-4xl font-bold text-ink md:text-5xl">
                {service.title}
              </h1>
              <div className="accent-line" />
              <p className="mb-6 font-sans text-lg leading-[1.7] text-ink-muted">{service.description}</p>
              <Link href="/book-appointment" className="btn-primary">
                <Calendar size={18} /> Book Appointment
              </Link>
            </div>
          </div>
        </section>

        <section className="section-sm bg-white">
          <div className="container-hn">
            <div className="at-a-glance mx-auto max-w-4xl">
              <h2 className="mb-4 font-sans text-xl font-bold text-ink">
                At a Glance — {service.shortTitle}
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">Specialty</p>
                  <p className="text-sm text-ink-muted">{service.category} — HSR Layout & Attibele</p>
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">Specialist</p>
                  <p className="text-sm text-ink-muted">
                    Dr. Sanjana L · Qualification: MBBS MS ( OBG) Gold Medalist FRM ( RGUHS) FMAS · 10+ years experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container-hn pb-32">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="space-y-10 lg:col-span-2">
              <div>
                <h2 className="mb-4 font-display text-2xl font-bold text-ink">Overview</h2>
                <div className="accent-line" />
                <div className="readable-service-overview space-y-4 font-sans leading-[1.8] text-ink-muted">
                  {service.overview
                    .split(/\n{2,}/)
                    .map((block) => block.trim())
                    .filter(Boolean)
                    .map((block, i) => (
                      <p key={i} className="m-0 max-w-[68ch]">
                        {block}
                      </p>
                    ))}
                </div>
              </div>

              <div>
                <h2 className="mb-4 font-display text-2xl font-bold text-ink">What to Expect</h2>
                <div className="accent-line" />
                <ul className="space-y-3">
                  {service.whatToExpect.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark text-xs font-bold text-white">
                        {i + 1}
                      </div>
                      <p className="pt-1 font-sans text-sm leading-relaxed text-ink-muted">{step}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-accent/30 bg-accent/10 p-6">
                <div className="mb-4 flex items-center gap-2">
                  <AlertCircle size={20} className="text-accent" />
                  <h2 className="font-sans text-xl font-bold text-ink">When Should You See Dr. Sanjana?</h2>
                </div>
                <ul className="space-y-2">
                  {service.whenToSeeDoctor.map((sign, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="mt-0.5 flex-shrink-0 text-secondary" />
                      <span className="font-sans text-sm text-ink-muted">{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="mb-4 font-display text-2xl font-bold text-ink">
                  Why Choose Dr. Sanjana for {service.shortTitle}?
                </h2>
                <div className="accent-line" />
                <div className="grid gap-4 sm:grid-cols-2">
                  {service.whyChooseDrSanjana.map((reason, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-xl border border-border bg-cream p-4"
                    >
                      <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                      <p className="font-sans text-sm text-ink">{reason}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="mb-4 font-display text-2xl font-bold text-ink">Frequently Asked Questions</h2>
                <div className="accent-line" />
                <FAQAccordion faqs={service.faqs} />
              </div>
            </div>

            <div className="space-y-6">
              <div className="sticky top-24 rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-6 text-center text-white">
                <p className="mb-2 font-display text-lg font-bold">Book for {service.shortTitle}</p>
                <p className="mb-4 font-sans text-sm text-white/80">Dr. Sanjana L · HSR Layout & Attibele</p>
                <p className="mb-4 text-xs text-white/60">200+ patients trust Dr. Sanjana</p>
                <Link href="/book-appointment" className="btn-white w-full justify-center">
                  <Calendar size={16} /> Book Now
                </Link>
                <a href="tel:+919449031003" className="btn-outline-white mt-3 w-full justify-center text-sm">
                  Call Clinic
                </a>
              </div>

              {related.length > 0 && (
                <div className="rounded-2xl border border-border bg-white p-5">
                  <h3 className="mb-4 font-sans font-semibold text-ink">Related Services</h3>
                  <ul className="space-y-2">
                    {related.map((r) => (
                      <li key={r.slug}>
                        <Link
                          href={`/services/${r.slug}`}
                          className="flex items-center gap-2 rounded-lg p-2 font-sans text-sm text-ink-muted transition-colors hover:bg-purple-50"
                        >
                          <ArrowRight size={14} className="flex-shrink-0 text-primary" />
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
