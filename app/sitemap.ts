import { MetadataRoute } from 'next';
import { services } from '@/lib/services';
import { locationServices } from '@/lib/locationServices';
import { blogPosts } from '@/lib/blog';
import { SITE_URL, CONTENT_LAST_REVISED } from '@/lib/site';

// NOTE: lastModified must NOT be `new Date()`. Doing so made every non-blog URL
// report "modified today" on every build, which teaches search engines to
// ignore this sitemap's lastmod entirely. Dates come from CONTENT_LAST_REVISED
// (bumped by hand when content actually changes) and, for posts, from the post's
// own `updated ?? date`.

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;

  const staticRevised = new Date(CONTENT_LAST_REVISED.static);
  const hubsRevised = new Date(CONTENT_LAST_REVISED.hubs);
  const servicesRevised = new Date(CONTENT_LAST_REVISED.services);
  const moneyRevised = new Date(CONTENT_LAST_REVISED.moneyPages);

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: staticRevised, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/about-dr-sanjana`, lastModified: staticRevised, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services`, lastModified: servicesRevised, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/patient-stories`, lastModified: staticRevised, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: staticRevised, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/book-appointment`, lastModified: staticRevised, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: staticRevised, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified: staticRevised, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/privacy-policy`, lastModified: staticRevised, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/llms.txt`, lastModified: staticRevised, changeFrequency: 'yearly', priority: 0.2 },
  ];

  const locationPages: MetadataRoute.Sitemap = [
    '/hsr-layout-gynaecologist',
    '/bommasandra-gynaecologist',
    '/chandapura-gynaecologist',
    '/anekal-gynaecologist',
    '/jigani-gynaecologist',
    '/attibele-gynaecologist',
    '/electronic-city-sarjapura-gynaecologist',
    '/chandapura-hosur-road-gynaecologist',
  ].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: hubsRevised,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const servicePages: MetadataRoute.Sitemap = services.map(service => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: servicesRevised,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const locationServicePages: MetadataRoute.Sitemap = locationServices.map(ls => ({
    url: `${baseUrl}/${ls.slug}`,
    lastModified: moneyRevised,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updated ?? post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...locationPages,
    ...servicePages,
    ...locationServicePages,
    ...blogPages,
  ];
}
