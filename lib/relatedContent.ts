// lib/relatedContent.ts
//
// Maps a blog post to the service × location "money pages" most relevant to it.
//
// Why this exists: as of Aug 2026 not one of the 43 blog posts linked to any of
// the 24 money pages. The posts collectively carry ~250 internal links, almost
// all pointing at /book-appointment and /about-dr-sanjana. That is the site's
// largest pool of unused internal link equity — the informational content earns
// the traffic, but passed none of it to the pages built to convert.
//
// The mapping is keyword-driven rather than hand-curated so it stays correct as
// posts and money pages are added, with no per-post maintenance.

import type { BlogPost } from './blog';
import { locationServices, type LocationService } from './locationServices';

/**
 * Keyword → canonical service slug. A post matches a service when any keyword
 * appears in its title, tags or category (all lower-cased, substring match).
 *
 * Deliberately excludes `pregnancy-care`: it is the fallback serviceSlug for the
 * lady-gynaecologist page, and surfacing that on every pregnancy article would
 * be noise rather than a relevant next step.
 */
const SERVICE_KEYWORDS: { serviceSlug: string; keywords: string[] }[] = [
  {
    serviceSlug: 'normal-delivery',
    keywords: ['normal delivery', 'vaginal birth', 'vbac', 'labour', 'labor', 'delivery cost', 'birth plan', 'third trimester'],
  },
  {
    serviceSlug: 'painless-delivery',
    keywords: ['painless delivery', 'epidural', 'labour pain', 'pain relief'],
  },
  {
    serviceSlug: 'cesarean-delivery',
    keywords: ['c-section', 'caesarean', 'cesarean'],
  },
  {
    serviceSlug: 'high-risk-pregnancy',
    keywords: [
      'high risk', 'high-risk', 'gestational diabetes', 'preeclampsia', 'pre-eclampsia',
      'twin', 'thyroid in pregnancy', 'anomaly scan', 'ectopic', 'miscarriage',
      'second trimester',
    ],
  },
  {
    serviceSlug: 'pcos-pcod-treatment',
    keywords: ['pcos', 'pcod', 'irregular period', 'insulin resistance', 'polycystic', 'heavy period', 'menorrhagia'],
  },
  {
    serviceSlug: 'ivf-iui',
    keywords: ['fertility', 'ivf', 'iui', 'conceive', 'egg freezing', 'ovulation', 'trying to get pregnant'],
  },
  {
    serviceSlug: 'laparoscopic-surgery',
    keywords: ['fibroid', 'ovarian cyst', 'endometriosis', 'laparoscop', 'keyhole', 'hysteroscopy'],
  },
];

/**
 * A keyword in the TITLE is worth far more than one buried in the tag list.
 *
 * Without this weighting, "Uterine Fibroids — When Surgery Is Needed" ranked
 * PCOS above laparoscopic surgery, because its tags happened to mention both
 * "heavy periods" and "irregular periods" while "fibroid" appeared only once.
 * Titles state what an article is actually about; tags are a grab-bag.
 */
const TITLE_WEIGHT = 3;
const TAG_WEIGHT = 1;

/** Canonical service slugs a post is topically related to, strongest first. */
export function getServiceSlugsForPost(post: BlogPost): string[] {
  const title = post.title.toLowerCase();
  const tagText = [post.category, ...post.tags].join(' ').toLowerCase();

  return SERVICE_KEYWORDS.map(({ serviceSlug, keywords }) => ({
    serviceSlug,
    score: keywords.reduce(
      (n, kw) => n + (title.includes(kw) ? TITLE_WEIGHT : 0) + (tagText.includes(kw) ? TAG_WEIGHT : 0),
      0
    ),
  }))
    .filter(entry => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(entry => entry.serviceSlug);
}

/**
 * Money pages to surface on a blog post, capped at `limit`.
 *
 * Spreads results across localities rather than returning four variants of the
 * same service in four suburbs — a reader who came for a PCOS article is better
 * served by "PCOS in HSR Layout" plus a fertility page than by the same PCOS
 * page repeated. Returns [] when nothing matches, so the caller renders nothing.
 */
export function getRelatedMoneyPages(post: BlogPost, limit = 4): LocationService[] {
  const serviceSlugs = getServiceSlugsForPost(post);
  if (serviceSlugs.length === 0) return [];

  const picked: LocationService[] = [];
  const usedLocalities = new Set<string>();

  // Pass 1 — one page per matched service, each in a different locality.
  for (const serviceSlug of serviceSlugs) {
    if (picked.length >= limit) break;
    const candidate = locationServices.find(
      ls => ls.serviceSlug === serviceSlug && !usedLocalities.has(ls.locality)
    );
    if (candidate) {
      picked.push(candidate);
      usedLocalities.add(candidate.locality);
    }
  }

  // Pass 2 — top up from the same matched services, allowing repeat localities.
  for (const serviceSlug of serviceSlugs) {
    if (picked.length >= limit) break;
    for (const ls of locationServices) {
      if (picked.length >= limit) break;
      if (ls.serviceSlug === serviceSlug && !picked.some(p => p.slug === ls.slug)) {
        picked.push(ls);
      }
    }
  }

  return picked.slice(0, limit);
}
