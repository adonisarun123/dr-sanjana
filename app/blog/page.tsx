import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { blogPosts, blogCategories } from '@/lib/blog';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import BreadcrumbNav from '@/components/BreadcrumbNav';

export const metadata: Metadata = {
  title: "Women's Health Blog | Dr. Sanjana L — Health Nest, Bangalore",
  description:
    "Expert health articles on pregnancy, fertility, gynaecology & women's wellness by Dr. Sanjana L, HSR Layout Bangalore.",
};

const categoryColors: Record<string, string> = {
  'Pregnancy': '#8B5E83',
  'Fertility': '#2A6B5A',
  "Women's Health": '#E8A87C',
  'Gynaecology Tips': '#5E7B8B',
  'Nutrition': '#8B6B2A',
  'FAQs': '#6B5E8B',
};

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="bg-gradient-hero" style={{ paddingTop: '100px', paddingBottom: '40px' }}>
          <div className="container-hn">
            <BreadcrumbNav crumbs={[{ label: 'Home', href: '/' }, { label: 'Health Blog' }]} />
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-3" style={{ fontFamily: 'Playfair Display, serif', color: '#2D2D2D' }}>
              Health & Wellness Blog
            </h1>
            <div className="accent-line" />
            <p style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif' }}>
              Expert articles on women&apos;s health by Dr. Sanjana L, Gynaecologist at Health Nest, HSR Layout, Bangalore.
            </p>
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

            {/* More posts CTA */}
            <div className="mt-12 text-center p-8 rounded-3xl" style={{ background: '#FFF8F0', border: '1px solid #E8E0DB' }}>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif', color: '#2D2D2D' }}>More Articles Coming Soon</h3>
              <p className="text-sm mb-4" style={{ color: '#6B6B6B' }}>Dr. Sanjana regularly publishes expert health guidance. Bookmark this page or follow Health Nest on social media for updates.</p>
              <Link href="/contact" className="btn-primary">Get in Touch</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
