import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin, Phone, Calendar } from 'lucide-react';
import { blogPosts, blogCategories } from '@/lib/blog';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import BreadcrumbNav from '@/components/BreadcrumbNav';

export const metadata: Metadata = {
  title: "Women's Health Blog by Dr. Sanjana L | Gynaecologist in HSR Layout, Attibele & South Bangalore",
  description:
    "Expert health articles on pregnancy, fertility, PCOS, menopause, endometriosis & cervical cancer screening by Dr. Sanjana L — trusted gynaecologist in HSR Layout, Attibele, Sarjapura & South Bangalore.",
  keywords: [
    "women's health blog Bangalore",
    "gynaecologist blog HSR Layout",
    "pregnancy tips Bangalore",
    "PCOS treatment blog",
    "fertility after 35 India",
    "cervical cancer screening Bangalore",
    "menopause management India",
    "endometriosis treatment Bangalore",
    "Dr Sanjana L blog",
    "Health Nest blog",
  ],
  openGraph: {
    title: "Women's Health Blog | Dr. Sanjana L — Health Nest, HSR Layout & Attibele Bangalore",
    description: "Expert articles on pregnancy, fertility, PCOS, endometriosis, menopause & more by Dr. Sanjana L, gynaecologist in HSR Layout & Attibele, Bangalore.",
    url: "https://healthnest.in/blog",
    type: "website",
  },
};

const categoryColors: Record<string, string> = {
  'Pregnancy': '#8B5E83',
  'Fertility': '#2A6B5A',
  "Women's Health": '#E8A87C',
  'Gynaecology Tips': '#5E7B8B',
  'Nutrition': '#8B6B2A',
  'Preventive Care': '#6B5E8B',
  'FAQs': '#6B5E8B',
};

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  // CollectionPage structured data for AEO
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: "Women's Health Blog — Dr. Sanjana L, Health Nest Bangalore",
    description: "Expert health articles on pregnancy, fertility, PCOS, menopause, endometriosis and cervical cancer screening by Dr. Sanjana L, gynaecologist in HSR Layout and Attibele, Bangalore.",
    url: 'https://healthnest.in/blog',
    publisher: {
      '@type': 'MedicalBusiness',
      name: 'Health Nest',
      url: 'https://healthnest.in',
      address: [
        {
          '@type': 'PostalAddress',
          streetAddress: 'HSR Layout, near Agara Lake',
          addressLocality: 'Bangalore',
          addressRegion: 'Karnataka',
          postalCode: '560102',
          addressCountry: 'IN',
        },
        {
          '@type': 'PostalAddress',
          streetAddress: 'Raghava Hospital, Attibele',
          addressLocality: 'Bangalore',
          addressRegion: 'Karnataka',
          postalCode: '562107',
          addressCountry: 'IN',
        },
      ],
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: blogPosts.length,
      itemListElement: blogPosts.map((post, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `https://healthnest.in/blog/${post.slug}`,
        name: post.title,
      })),
    },
  };

  // BreadcrumbList schema for AEO
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://healthnest.in' },
      { '@type': 'ListItem', position: 2, name: 'Health Blog', item: 'https://healthnest.in/blog' },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main id="main-content">
        <section className="bg-gradient-hero" style={{ paddingTop: '100px', paddingBottom: '40px' }}>
          <div className="container-hn">
            <BreadcrumbNav crumbs={[{ label: 'Home', href: '/' }, { label: 'Health Blog' }]} />
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-3" style={{ fontFamily: 'Playfair Display, serif', color: '#2D2D2D' }}>
              Women&apos;s Health &amp; Wellness Blog
            </h1>
            <div className="accent-line" />
            <p className="text-lg mb-2" style={{ color: '#4A4A4A', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7 }}>
              Evidence-based health articles on pregnancy, fertility, PCOS, endometriosis, menopause, and preventive gynaecology by <strong>Dr. Sanjana L</strong> — trusted gynaecologist in HSR Layout &amp; Attibele, Bangalore.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-3 text-sm" style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif' }}>
              <span className="flex items-center gap-1"><MapPin size={14} style={{ color: '#8B5E83' }} /> HSR Layout &bull; Attibele &bull; Sarjapura &bull; Electronic City &bull; Koramangala</span>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: '#FFFFFF' }}>
          <div className="container-hn">
            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-10">
              <span className="px-4 py-1.5 rounded-full text-sm font-medium" style={{ background: 'rgba(139,94,131,0.12)', color: '#8B5E83' }}>All</span>
              {blogCategories.map((cat) => (
                <span key={cat} className="px-4 py-1.5 rounded-full text-sm font-medium border cursor-pointer hover:bg-purple-50 transition-colors" style={{ borderColor: '#E8E0DB', color: '#6B6B6B' }}>
                  {cat}
                </span>
              ))}
            </div>

            {/* Featured post */}
            <div className="mb-10">
              <Link href={`/blog/${featured.slug}`} className="card block group" style={{ textDecoration: 'none' }}>
                <div className="grid md:grid-cols-2 gap-0">
                  <div
                    className="rounded-l-2xl md:rounded-r-none rounded-t-2xl md:rounded-t-2xl flex items-center justify-center p-10"
                    style={{ background: 'linear-gradient(135deg, rgba(139,94,131,0.15), rgba(42,107,90,0.1))', minHeight: '260px' }}
                  >
                    <h2 className="text-2xl font-bold text-center" style={{ fontFamily: 'Playfair Display, serif', color: '#2D2D2D' }}>
                      {featured.title}
                    </h2>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                      <span
                        className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={{ background: `${categoryColors[featured.category] || '#8B5E83'}18`, color: categoryColors[featured.category] || '#8B5E83' }}
                      >
                        ✦ Featured · {featured.category}
                      </span>
                      <span className="text-xs" style={{ color: '#9B9B9B' }}>{featured.readTime} min read</span>
                    </div>
                    <p className="mb-4" style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7 }}>
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: 'linear-gradient(135deg, #8B5E83, #2A6B5A)' }}>SL</div>
                      <div>
                        <p className="text-sm font-semibold" style={{ color: '#2D2D2D' }}>{featured.author}</p>
                        <p className="text-xs" style={{ color: '#9B9B9B' }}>{new Date(featured.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm font-semibold flex items-center gap-1" style={{ color: '#8B5E83' }}>
                      Read Article <ArrowRight size={14} />
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Rest of posts */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="card block group" style={{ textDecoration: 'none' }}>
                  <div
                    className="h-36 rounded-t-2xl flex items-center justify-center p-6"
                    style={{ background: `linear-gradient(135deg, ${categoryColors[post.category] || '#8B5E83'}15, ${categoryColors[post.category] || '#8B5E83'}08)` }}
                  >
                    <h2 className="text-base font-bold text-center leading-snug" style={{ fontFamily: 'Playfair Display, serif', color: '#2D2D2D' }}>
                      {post.title}
                    </h2>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={{ background: `${categoryColors[post.category] || '#8B5E83'}18`, color: categoryColors[post.category] || '#8B5E83' }}
                      >
                        {post.category}
                      </span>
                      <span className="text-xs" style={{ color: '#9B9B9B' }}>{post.readTime} min read</span>
                    </div>
                    <p className="text-sm leading-relaxed mb-3" style={{ color: '#6B6B6B' }}>{post.excerpt}</p>
                    <p className="text-sm font-semibold" style={{ color: '#8B5E83' }}>Read more →</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Local SEO content block */}
            <div className="mt-14 p-8 rounded-3xl" style={{ background: '#FFF8F0', border: '1px solid #E8E0DB' }}>
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#2D2D2D' }}>
                Trusted Women&apos;s Health Information for South Bangalore
              </h2>
              <p className="mb-4" style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7 }}>
                Dr. Sanjana L writes these health articles based on her 10-plus years of clinical experience treating women across South Bangalore. Whether you are searching for reliable pregnancy advice, PCOS treatment guidance, fertility tips after 35, endometriosis management, or menopause support — these evidence-based articles are written specifically for women in HSR Layout, Attibele, Sarjapura, Electronic City, Koramangala, BTM Layout, Chandapura, and Hosur.
              </p>
              <p className="mb-6" style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7 }}>
                Health Nest is located in HSR Layout (near Agara Lake) and at Raghava Hospital, Attibele. Dr. Sanjana consults in English, Hindi, Kannada, and Telugu.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/book-appointment" className="btn-primary">
                  <Calendar size={18} /> Book Appointment
                </Link>
                <a href="tel:+919449031003" className="btn-secondary">
                  <Phone size={18} /> Call Clinic
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
