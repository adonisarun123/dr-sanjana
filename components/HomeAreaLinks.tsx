import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { AREA_HUBS } from '@/lib/site';
import { locationServices } from '@/lib/locationServices';

/**
 * Homepage "care near you" block.
 *
 * Until Aug 2026 the homepage linked to zero area hubs and zero money pages —
 * the site's highest-authority page passed nothing to the pages that actually
 * convert. This surfaces both, grouped by locality, in a compact link list.
 */
export default function HomeAreaLinks() {
  // Group money pages by locality, preserving array order within each group.
  const byLocality = new Map<string, typeof locationServices>();
  for (const page of locationServices) {
    const existing = byLocality.get(page.locality);
    if (existing) existing.push(page);
    else byLocality.set(page.locality, [page]);
  }

  // Most-covered localities first, so the strongest clusters lead.
  const localities = [...byLocality.entries()].sort((a, b) => b[1].length - a[1].length);

  return (
    <section className="section" style={{ background: '#FFF8F0' }}>
      <div className="container-hn">
        <div className="text-center mb-10">
          <p className="section-label mb-2">Care Near You</p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#2D2D2D' }}
          >
            Find Dr. Sanjana in Your Area
          </h2>
          <div className="accent-line mx-auto" />
          <p className="mx-auto max-w-2xl text-base font-sans text-ink-muted m-0">
            Health Nest in HSR Layout and Raghava Multispeciality Hospital in Attibele serve
            families across South Bangalore. Pick your area, or jump straight to the treatment
            you are looking for.
          </p>
        </div>

        {/* Area hubs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2.5">
          {AREA_HUBS.map(hub => (
            <Link
              key={hub.href}
              href={hub.href}
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-colors hover:bg-purple-50"
              style={{ background: '#FFFFFF', border: '1px solid #E8E0DB', color: '#8B5E83' }}
            >
              <MapPin size={14} />
              {hub.short}
            </Link>
          ))}
        </div>

        {/* Money pages grouped by locality */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {localities.map(([locality, pages]) => (
            <div
              key={locality}
              className="rounded-2xl p-5"
              style={{ background: '#FFFFFF', border: '1px solid #E8E0DB' }}
            >
              <h3
                className="mb-3 flex items-center gap-2 text-base font-bold"
                style={{ color: '#2D2D2D', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
              >
                <MapPin size={15} style={{ color: '#8B5E83' }} />
                {locality}
              </h3>
              <ul className="space-y-2">
                {pages.map(page => (
                  <li key={page.slug}>
                    <Link
                      href={`/${page.slug}`}
                      className="inline-flex items-start gap-1.5 text-sm hover:underline"
                      style={{
                        color: '#6B6B6B',
                        fontFamily: 'var(--font-body), system-ui, sans-serif',
                      }}
                    >
                      <ArrowRight
                        size={13}
                        className="mt-1 flex-shrink-0"
                        style={{ color: '#8B5E83' }}
                      />
                      {page.shortTitle.replace(/\s*—.*$/, '')}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
