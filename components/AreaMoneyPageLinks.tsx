import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getLocationServicesForLocalities } from '@/lib/locationServices';

interface AreaMoneyPageLinksProps {
  /** Localities whose money pages should be surfaced, e.g. ['Attibele']. */
  localities: string[];
  /** Section heading. */
  heading: string;
  /** Optional intro line under the heading. */
  intro?: string;
  /** Background colour for the section. */
  background?: string;
}

/**
 * Links a /<area>-gynaecologist hub page *down* to the service × location money
 * pages that serve the same area.
 *
 * Money pages already link up to their hub via `hubHref`. Without this block the
 * relationship is one-way, so the hub's authority never flows to the pages that
 * actually convert.
 */
export default function AreaMoneyPageLinks({
  localities,
  heading,
  intro,
  background = '#FFF8F0',
}: AreaMoneyPageLinksProps) {
  const pages = getLocationServicesForLocalities(localities);
  if (pages.length === 0) return null;

  return (
    <section className="section-padding" style={{ background }}>
      <div className="container-hn">
        <div className="text-center mb-10">
          <h2
            className="text-2xl md:text-3xl font-bold mb-3"
            style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#2D2D2D' }}
          >
            {heading}
          </h2>
          <div className="accent-line mx-auto" />
          {intro && (
            <p className="mx-auto max-w-2xl text-base font-sans text-ink-muted m-0">{intro}</p>
          )}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pages.map(page => (
            <Link
              key={page.slug}
              href={`/${page.slug}`}
              className="group flex flex-col rounded-2xl p-5 transition-shadow hover:shadow-md"
              style={{ background: '#FFFFFF', border: '1px solid #E8E0DB' }}
            >
              <span
                className="mb-2 inline-block self-start rounded-full px-2.5 py-0.5 text-xs font-semibold"
                style={{ background: 'rgba(139,94,131,0.12)', color: '#8B5E83' }}
              >
                {page.category} · {page.locality}
              </span>
              <h3
                className="mb-2 text-base font-bold"
                style={{ color: '#2D2D2D', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
              >
                {page.shortTitle}
              </h3>
              <p
                className="mb-4 flex-1 text-sm leading-relaxed m-0"
                style={{ color: '#6B6B6B', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
              >
                {page.description}
              </p>
              <span
                className="inline-flex items-center gap-1.5 text-sm font-semibold group-hover:underline"
                style={{ color: '#8B5E83' }}
              >
                Learn more <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
