import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle2, AlertCircle, ArrowRight, Calendar, MapPin, Phone, Clock } from 'lucide-react';
import {
  locationServices,
  getLocationServiceBySlug,
  getClinic,
} from '@/lib/locationServices';
import { getServiceBySlug } from '@/lib/services';
import { SITE_URL } from '@/lib/site';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import FAQAccordion from '@/components/FAQAccordion';

interface Props {
  params: Promise<{ locationService: string }>;
}

// Only the curated money-page slugs defined in lib/locationServices.ts resolve
// (22 as of Aug 2026). Any other top-level slug that isn't a real static folder
// will 404 rather than render an empty page.
export const dynamicParams = false;

export async function generateStaticParams() {
  return locationServices.map(ls => ({ locationService: ls.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locationService } = await params;
  const page = getLocationServiceBySlug(locationService);
  if (!page) return { title: 'Page Not Found' };
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: { canonical: `${SITE_URL}/${page.slug}` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `${SITE_URL}/${page.slug}`,
      type: 'website',
      locale: 'en_IN',
      siteName: 'Health Nest',
    },
    twitter: {
      card: 'summary_large_image',
      title: page.metaTitle,
      description: page.metaDescription,
    },
  };
}

export default async function LocationServicePage({ params }: Props) {
  const { locationService } = await params;
  const page = getLocationServiceBySlug(locationService);
  if (!page) notFound();

  const clinic = getClinic(page.clinic);
  const service = getServiceBySlug(page.serviceSlug);

  /* ── JSON-LD ──────────────────────────────────────────────────────────── */
  const procedureSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: page.shortTitle,
    description: page.description,
    procedureType: page.category,
    // Tie procedure to the specific clinic node + the physician for E-E-A-T.
    location: { '@id': `${SITE_URL}/${clinic.locationId}` },
    performer: { '@id': `${SITE_URL}/#physician` },
    relevantSpecialty: ['Gynecologic', 'Obstetric'],
    howPerformed: page.whatToExpect.join('. '),
    areaServed: page.nearbyAreas.map(name => ({ '@type': 'Place', name })),
    inLanguage: 'en-IN',
    url: `${SITE_URL}/${page.slug}`,
  };

  // NOTE: BreadcrumbList and FAQPage JSON-LD are intentionally NOT emitted here.
  // <BreadcrumbNav> and <FAQAccordion> each emit their own schema from the same
  // source data. Emitting them here as well produced duplicate, conflicting
  // FAQPage/BreadcrumbList blocks on every money page, which risks Google
  // dropping the FAQ rich result entirely.

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema) }}
      />
      <Navbar />
      <main id="main-content">
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="bg-gradient-hero pt-[100px] pb-[50px]">
          <div className="container-hn">
            <BreadcrumbNav
              crumbs={[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: page.shortTitle },
              ]}
            />
            <div className="mt-4 max-w-3xl">
              <span className="mb-4 inline-block rounded-full bg-primary/12 px-3 py-1 font-sans text-xs font-semibold text-primary">
                {page.category} · {page.locality}
              </span>
              <h1 className="mb-4 font-display text-4xl font-bold text-ink md:text-5xl">
                {page.title}
              </h1>
              <div className="accent-line" />
              <p className="mb-6 font-sans text-lg leading-[1.7] text-ink-muted">
                {page.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/book-appointment" className="btn-primary">
                  <Calendar size={18} /> Book Appointment
                </Link>
                <a
                  href={`tel:${clinic.phoneE164}`}
                  className="btn-secondary"
                  data-analytics="locservice_hero_call"
                >
                  <Phone size={18} /> {clinic.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── At a Glance ───────────────────────────────────────────────── */}
        <section className="section-sm bg-white">
          <div className="container-hn">
            <div className="at-a-glance mx-auto max-w-4xl">
              <h2 className="mb-4 font-sans text-xl font-bold text-ink">
                At a Glance — {page.shortTitle}
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">
                    Where
                  </p>
                  <p className="flex items-start gap-2 text-sm text-ink-muted">
                    <MapPin size={15} className="mt-0.5 flex-shrink-0 text-primary" />
                    {clinic.name} — {clinic.address}
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">
                    Specialist
                  </p>
                  <p className="text-sm text-ink-muted">
                    Dr. Sanjana L · MBBS, MS (OBG) Gold Medalist (RGUHS), FMAS · 10+ years
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">
                    Timings
                  </p>
                  <p className="flex items-center gap-2 text-sm text-ink-muted">
                    <Clock size={15} className="flex-shrink-0 text-primary" />
                    {clinic.hours}
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">
                    Areas Served
                  </p>
                  <p className="text-sm text-ink-muted">{page.nearbyAreas.join(', ')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Body ──────────────────────────────────────────────────────── */}
        <section className="section">
          <div className="container-hn">
            <div className="grid gap-10 lg:grid-cols-3">
              <div className="space-y-10 lg:col-span-2">
                {/* Overview */}
                <div>
                  <h2 className="mb-4 font-display text-2xl font-bold text-ink">Overview</h2>
                  <div className="accent-line" />
                  <div className="readable-service-overview space-y-4 font-sans leading-[1.8] text-ink-muted">
                    {page.overview
                      .split(/\n{2,}/)
                      .map(block => block.trim())
                      .filter(Boolean)
                      .map((block, i) => (
                        <p key={i} className="m-0 max-w-[68ch]">
                          {block}
                        </p>
                      ))}
                  </div>
                </div>

                {/* What to Expect */}
                <div>
                  <h2 className="mb-4 font-display text-2xl font-bold text-ink">
                    What to Expect
                  </h2>
                  <div className="accent-line" />
                  <ul className="space-y-3">
                    {page.whatToExpect.map((step, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark text-xs font-bold text-white">
                          {i + 1}
                        </div>
                        <p className="pt-1 font-sans text-sm leading-relaxed text-ink-muted">
                          {step}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Why choose */}
                <div>
                  <h2 className="mb-4 font-display text-2xl font-bold text-ink">
                    Why Choose Dr. Sanjana for {page.shortTitle}?
                  </h2>
                  <div className="accent-line" />
                  <div className="grid gap-4 sm:grid-cols-2">
                    {page.whyChoose.map((reason, i) => (
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

                {/* Deeper-dive link to canonical service page */}
                {service && (
                  <div className="rounded-2xl border border-accent/30 bg-accent/10 p-6">
                    <div className="mb-2 flex items-center gap-2">
                      <AlertCircle size={20} className="text-accent" />
                      <h2 className="font-sans text-lg font-bold text-ink">
                        Want the full clinical detail?
                      </h2>
                    </div>
                    <p className="mb-4 font-sans text-sm text-ink-muted">
                      Read the complete guide to {service.shortTitle.toLowerCase()} — process,
                      eligibility, recovery and FAQs.
                    </p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-primary hover:underline"
                    >
                      Read about {service.shortTitle} <ArrowRight size={14} />
                    </Link>
                  </div>
                )}

                {/* FAQs */}
                <div>
                  <h2 className="mb-4 font-display text-2xl font-bold text-ink">
                    Frequently Asked Questions
                  </h2>
                  <div className="accent-line" />
                  <FAQAccordion faqs={page.faqs} />
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div className="sticky top-24 space-y-6">
                  <div className="rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-6 text-center text-white">
                    <p className="mb-2 font-display text-lg font-bold">
                      Book for {page.shortTitle}
                    </p>
                    <p className="mb-4 font-sans text-sm text-white/80">
                      Dr. Sanjana L · {clinic.name}
                    </p>
                    <p className="mb-4 text-xs text-white/60">
                      200+ patients trust Dr. Sanjana
                    </p>
                    <Link href="/book-appointment" className="btn-white w-full justify-center">
                      <Calendar size={16} /> Book Now
                    </Link>
                    <a
                      href={`tel:${clinic.phoneE164}`}
                      className="btn-outline-white mt-3 w-full justify-center text-sm"
                      data-analytics="locservice_sidebar_call"
                    >
                      <Phone size={15} /> Call Clinic
                    </a>
                  </div>

                  {/* Area hub link */}
                  <div className="rounded-2xl border border-border bg-white p-5">
                    <h3 className="mb-3 font-sans font-semibold text-ink">In your area</h3>
                    <Link
                      href={page.hubHref}
                      className="flex items-center gap-2 rounded-lg p-2 font-sans text-sm text-ink-muted transition-colors hover:bg-purple-50"
                    >
                      <ArrowRight size={14} className="flex-shrink-0 text-primary" />
                      {page.hubLabel}
                    </Link>
                    {service && (
                      <Link
                        href={`/services/${service.slug}`}
                        className="flex items-center gap-2 rounded-lg p-2 font-sans text-sm text-ink-muted transition-colors hover:bg-purple-50"
                      >
                        <ArrowRight size={14} className="flex-shrink-0 text-primary" />
                        {service.shortTitle} (full guide)
                      </Link>
                    )}
                    <Link
                      href="/services"
                      className="flex items-center gap-2 rounded-lg p-2 font-sans text-sm text-ink-muted transition-colors hover:bg-purple-50"
                    >
                      <ArrowRight size={14} className="flex-shrink-0 text-primary" />
                      All services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Closing CTA strip ─────────────────────────────────────────── */}
        <section
          className="py-16"
          style={{ background: 'linear-gradient(135deg, #8B5E83, #6B4563)' }}
        >
          <div className="container-hn text-center text-white">
            <h2 className="mb-3 font-display text-2xl font-bold md:text-3xl">
              {page.shortTitle} — Book with Dr. Sanjana L
            </h2>
            <p className="mx-auto mb-6 max-w-2xl font-sans text-white/85">
              Serving {page.nearbyAreas.slice(0, 4).join(', ')} and across South Bangalore.
              Call or book online today.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/book-appointment" className="btn-white">
                <Calendar size={18} /> Book Appointment
              </Link>
              <a
                href={`tel:${clinic.phoneE164}`}
                className="btn-outline-white"
                data-analytics="locservice_footer_call"
              >
                <Phone size={18} /> {clinic.phoneDisplay}
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
