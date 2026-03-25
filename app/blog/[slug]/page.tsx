import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import { blogPosts, getBlogPostBySlug } from '@/lib/blog';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import BreadcrumbNav from '@/components/BreadcrumbNav';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: post.metaTitle,
    description: post.metaDescription,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Physician',
      name: 'Dr. Sanjana L',
      medicalSpecialty: 'Obstetrics and Gynaecology',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Health Nest',
      url: 'https://healthnest.in',
    },
    datePublished: post.date,
    keywords: post.tags.join(', '),
  };

  // Simple markdown-to-HTML (headings, bold, lists, tables)
  const renderContent = (content: string) => {
    const lines = content.trim().split('\n');
    const result: string[] = [];
    let inList = false;
    let inTable = false;

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed) {
        if (inList) { result.push('</ul>'); inList = false; }
        if (inTable) { result.push('</tbody></table>'); inTable = false; }
        continue;
      }
      if (trimmed.startsWith('### ')) {
        result.push(`<h3 style="font-family:'Playfair Display',serif;font-size:1.25rem;font-weight:600;color:#2D2D2D;margin-top:1.75rem;margin-bottom:0.5rem">${trimmed.slice(4)}</h3>`);
      } else if (trimmed.startsWith('## ')) {
        result.push(`<h2 style="font-family:'Playfair Display',serif;font-size:1.75rem;font-weight:700;color:#2D2D2D;margin-top:2.5rem;margin-bottom:0.75rem">${trimmed.slice(3)}</h2>`);
      } else if (trimmed.startsWith('- ')) {
        if (!inList) { result.push('<ul style="margin:0.75rem 0 1rem 1.5rem;list-style:disc">'); inList = true; }
        result.push(`<li style="font-size:1rem;line-height:1.7;color:#6B6B6B;margin-bottom:0.4rem">${trimmed.slice(2).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</li>`);
      } else if (trimmed.startsWith('|')) {
        if (!inTable) {
          result.push('<div style="overflow-x:auto;margin:1.5rem 0"><table style="width:100%;border-collapse:collapse;font-size:0.9rem"><thead>');
          inTable = true;
          const headers = trimmed.split('|').filter(h => h.trim() && !h.match(/^[-| ]+$/));
          if (headers.length) {
            result.push(`<tr>${headers.map(h => `<th style="padding:0.6rem 0.75rem;background:#F3EDF5;color:#8B5E83;font-weight:600;border:1px solid #E8E0DB;text-align:left">${h.trim()}</th>`).join('')}</tr>`);
            result.push('</thead><tbody>');
          }
        } else if (!trimmed.match(/^\|[-| ]+\|$/)) {
          const cells = trimmed.split('|').filter(c => c.trim());
          if (cells.length) {
            result.push(`<tr>${cells.map(c => `<td style="padding:0.6rem 0.75rem;border:1px solid #E8E0DB;color:#6B6B6B">${c.trim()}</td>`).join('')}</tr>`);
          }
        }
      } else {
        if (inList) { result.push('</ul>'); inList = false; }
        if (inTable) { result.push('</tbody></table></div>'); inTable = false; }
        const formatted = trimmed
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .replace(/\*(.*?)\*/g, '<em>$1</em>');
        result.push(`<p style="font-size:1.0625rem;line-height:1.8;color:#6B6B6B;margin-bottom:1.25rem">${formatted}</p>`);
      }
    }
    if (inList) result.push('</ul>');
    if (inTable) result.push('</tbody></table></div>');
    return result.join('\n');
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />
      <main id="main-content">
        <section className="bg-gradient-hero" style={{ paddingTop: '100px', paddingBottom: '40px' }}>
          <div className="container-hn">
            <BreadcrumbNav crumbs={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: post.category }]} />
            <div className="max-w-3xl mt-6">
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4"
                style={{ background: 'rgba(139,94,131,0.12)', color: '#8B5E83' }}
              >
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-5" style={{ fontFamily: 'Playfair Display, serif', color: '#2D2D2D' }}>
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm" style={{ color: '#9B9B9B', fontFamily: 'DM Sans, sans-serif' }}>
                <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                <span className="flex items-center gap-1"><Calendar size={14} /> {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime} min read</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: '#FFFFFF' }}>
          <div className="container-hn">
            <div className="grid lg:grid-cols-3 gap-10">
              <article className="lg:col-span-2">
                <p
                  className="text-lg mb-8 p-5 rounded-2xl"
                  style={{ color: '#2D2D2D', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7, background: '#FFF8F0', borderLeft: '4px solid #8B5E83' }}
                >
                  {post.excerpt}
                </p>
                <div
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                  dangerouslySetInnerHTML={{ __html: renderContent(post.content) }}
                />
                <div className="mt-10 pt-6" style={{ borderTop: '1px solid #E8E0DB' }}>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl" style={{ background: 'linear-gradient(135deg, #8B5E83, #2A6B5A)' }}>SL</div>
                    <div>
                      <p className="font-bold" style={{ fontFamily: 'DM Sans, sans-serif', color: '#2D2D2D' }}>Dr. Sanjana L</p>
                      <p className="text-sm" style={{ color: '#6B6B6B' }}>MBBS, MS (OB-GYN) · Gynaecologist at Health Nest, HSR Layout, Bangalore</p>
                    </div>
                  </div>
                </div>
                <Link href="/blog" className="mt-8 flex items-center gap-2 text-sm font-semibold" style={{ color: '#8B5E83' }}>
                  <ArrowLeft size={16} /> Back to all articles
                </Link>
              </article>

              {/* Sidebar */}
              <aside>
                <div className="sticky top-24 space-y-5">
                  <div className="rounded-2xl p-6" style={{ background: 'linear-gradient(135deg, #8B5E83, #6B4563)' }}>
                    <p className="text-white font-bold text-lg mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>See Dr. Sanjana</p>
                    <p className="text-white/80 text-sm mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>Book a consultation at Health Nest, HSR Layout.</p>
                    <Link href="/book-appointment" className="btn-white w-full justify-center">Book Now</Link>
                  </div>
                  <div className="rounded-2xl p-5" style={{ background: '#FFF8F0', border: '1px solid #E8E0DB' }}>
                    <p className="font-semibold mb-3" style={{ fontFamily: 'DM Sans, sans-serif', color: '#2D2D2D' }}>Tags</p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map(tag => (
                        <span key={tag} className="badge text-xs">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
