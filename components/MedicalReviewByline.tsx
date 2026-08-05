import Link from 'next/link';
import { BadgeCheck, CalendarCheck } from 'lucide-react';

/**
 * Visible "medically reviewed by" byline.
 *
 * WHY THIS EXISTS
 * ---------------
 * Every page on this site is YMYL (Your Money or Your Life) health content.
 * Google's Search Quality Rater Guidelines treat *visible* author and reviewer
 * attribution — not just JSON-LD — as a primary trust signal for medical pages,
 * and `MedicalWebPage.lastReviewed` is one of the few health-specific schema
 * properties Google documents explicitly.
 *
 * Until now only /blog/<slug> carried author + reviewedBy attribution. The 36
 * money pages and 24 service pages — i.e. every page that actually competes for
 * commercial-intent medical queries — had none. This component closes that gap.
 *
 * The matching `MedicalWebPage` JSON-LD is emitted by the ROUTE, not here, so we
 * do not repeat the FAQPage/BreadcrumbList duplicate-schema mistake. Keep it
 * that way: one node, one emitter.
 *
 * `reviewedOn` should be a real YYYY-MM-DD date from CONTENT_LAST_REVISED in
 * lib/site.ts. Never let it drift to `new Date()` — a page that claims to be
 * reviewed today on every build is an obviously automated signal and Google
 * discounts it, exactly as it does an always-today sitemap `lastmod`.
 */
export default function MedicalReviewByline({
  reviewedOn,
  className = '',
}: {
  /** YYYY-MM-DD. Pull from CONTENT_LAST_REVISED in lib/site.ts. */
  reviewedOn: string;
  className?: string;
}) {
  const reviewedLabel = new Date(`${reviewedOn}T00:00:00Z`).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });

  return (
    <div className={`rounded-xl border border-primary/15 bg-primary/[0.04] px-4 py-3 ${className}`}>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="flex items-center gap-2 font-sans text-sm text-ink-muted">
          <BadgeCheck size={16} className="flex-shrink-0 text-primary" aria-hidden="true" />
          <span>
            Written and medically reviewed by{' '}
            <Link
              href="/about-dr-sanjana"
              className="font-semibold text-primary underline-offset-2 hover:underline"
              rel="author"
            >
              Dr. Sanjana L
            </Link>
            <span className="text-ink-muted">
              {' '}
              — MBBS, MS (OBG) Gold Medalist (RGUHS), FMAS · Consultant Obstetrician &amp;
              Gynaecologist, 10+ years
            </span>
          </span>
        </p>
        <p className="flex items-center gap-2 font-sans text-xs text-ink-muted/90">
          <CalendarCheck size={14} className="flex-shrink-0 text-primary" aria-hidden="true" />
          Last reviewed{' '}
          <time dateTime={reviewedOn} className="font-medium">
            {reviewedLabel}
          </time>
        </p>
      </div>
      <p className="mt-2 font-sans text-xs leading-relaxed text-ink-muted/80">
        This page is for general information and does not replace a consultation. Individual
        advice depends on your history and examination.
      </p>
    </div>
  );
}
