import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import type { LocationService } from '@/lib/locationServices';

interface RelatedMoneyPagesProps {
  pages: LocationService[];
  /** Optional heading override. */
  heading?: string;
}

/**
 * "Related treatment" block for blog posts — links an informational article to
 * the service × location pages that match its topic.
 *
 * Renders nothing when there is no topical match, so an article never gets an
 * irrelevant treatment link stapled to the end of it.
 */
export default function RelatedMoneyPages({
  pages,
  heading = 'Related treatments with Dr. Sanjana',
}: RelatedMoneyPagesProps) {
  if (pages.length === 0) return null;

  return (
    <aside
      className="mt-10 rounded-2xl p-6"
      style={{ background: '#FFF8F0', border: '1px solid #E8E0DB' }}
      aria-label={heading}
    >
      <h2
        className="mb-1 text-lg font-bold"
        style={{ color: '#2D2D2D', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
      >
        {heading}
      </h2>
      <p className="mb-4 text-sm m-0" style={{ color: '#6B6B6B' }}>
        If you are looking for care rather than just information, these pages cover what the
        treatment involves and where Dr. Sanjana provides it.
      </p>
      <ul className="grid gap-3 sm:grid-cols-2">
        {pages.map(page => (
          <li key={page.slug}>
            <Link
              href={`/${page.slug}`}
              className="group flex h-full flex-col rounded-xl p-4 transition-shadow hover:shadow-sm"
              style={{ background: '#FFFFFF', border: '1px solid #E8E0DB' }}
            >
              <span
                className="mb-1.5 inline-flex items-center gap-1 text-xs font-semibold"
                style={{ color: '#8B5E83' }}
              >
                <MapPin size={12} />
                {page.locality}
              </span>
              <span
                className="mb-2 text-sm font-bold"
                style={{ color: '#2D2D2D', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
              >
                {page.shortTitle.replace(/\s*—.*$/, '')}
              </span>
              <span
                className="inline-flex items-center gap-1 text-xs font-semibold group-hover:underline"
                style={{ color: '#8B5E83' }}
              >
                Read more <ArrowRight size={12} />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
