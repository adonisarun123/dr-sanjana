import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Clock, Calendar, User, MapPin, Phone } from 'lucide-react';
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
    keywords: post.tags,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://healthnest.in/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: ['Dr. Sanjana L'],
      tags: post.tags,
      siteName: 'Health Nest',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
    },
    alternates: {
      canonical: `https://healthnest.in/blog/${post.slug}`,
    },
  };
}

// Extract FAQ pairs from blog content for FAQPage schema
function extractFAQs(content: string): { question: string; answer: string }[] {
  const faqs: { question: string; answer: string }[] = [];
  const lines = content.split('\n');
  let inFAQ = false;
  let currentQuestion = '';
  let currentAnswer = '';

  for (const line of lines) {
    const trimmed = line.trim();
    // Detect FAQ section header
    if (trimmed.toLowerCase().includes('frequently asked questions') || trimmed.toLowerCase().includes('faq')) {
      inFAQ = true;
      continue;
    }
    if (inFAQ) {
      if (trimmed.startsWith('### ')) {
        // Save previous FAQ if exists
        if (currentQuestion && currentAnswer) {
          faqs.push({ question: currentQuestion, answer: currentAnswer.trim() });
        }
        currentQuestion = trimmed.slice(4);
        currentAnswer = '';
      } else if (trimmed.startsWith('## ') && currentQuestion) {
        // New H2 section means FAQ block ended
        if (currentQuestion && currentAnswer) {
          faqs.push({ question: currentQuestion, answer: currentAnswer.trim() });
        }
        inFAQ = false;
        currentQuestion = '';
        currentAnswer = '';
      } else if (currentQuestion && trimmed) {
        currentAnswer += (currentAnswer ? ' ' : '') + trimmed;
      }
    }
  }
  // Capture last FAQ
  if (currentQuestion && currentAnswer) {
    faqs.push({ question: currentQuestion, answer: currentAnswer.trim() });
  }
  return faqs;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const faqs = extractFAQs(post.content);

  // MedicalWebPage + Article structured data for AEO
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: post.title,
    headline: post.title,
    description: post.excerpt,
    url: `https://healthnest.in/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Physician',
      name: 'Dr. Sanjana L',
      jobTitle: 'Obstetrician & Gynaecologist',
      medicalSpecialty: 'Obstetrics and Gynaecology',
      qualification: 'MBBS, MS (OB-GYN)',
      worksFor: {
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
    },
    publisher: {
      '@type': 'Organization',
      name: 'Health Nest',
      url: 'https://healthnest.in',
      logo: {
        '@type': 'ImageObject',
        url: 'https://healthnest.in/logo.png',
      },
    },
    keywords: post.tags.join(', '),
    articleSection: post.category,
    wordCount: post.content.split(/\s+/).length,
    inLanguage: 'en-IN',
    isAccessibleForFree: true,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://healthnest.in/blog/${post.slug}`,
    },
  };

  // BreadcrumbList schema for AEO / rich results
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://healthnest.in' },
      { '@type': 'ListItem', position: 2, name: 'Health Blog', item: 'https://healthnest.in/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://healthnest.in/blog/${post.slug}` },
    ],
  };

  // FAQPage schema for AEO — enables "People Also Ask" and AI snippet eligibility
  const faqSchema = faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null;

  // Related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);
  // Fill remaining with other posts
  const otherPosts = blogPosts
    .filter(p => p.slug !== post.slug && p.category !== post.category)
    .slice(0, Math.max(0, 3 - relatedPosts.length));
  const sidebarPosts = [...relatedPosts, ...otherPosts].slice(0, 3);

  // Enhanced markdown-to-HTML (headings, bold, italic, lists, numbered lists, tables)
  const renderContent = (content: string) => {
    const lines = content.trim().split('\n');
    const result: string[] = [];
    let inList = false;
    let inOrderedList = false;
    let inTable = false;

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed) {
        if (inList) { result.push('</ul>'); inList = false; }
        if (inOrderedList) { result.push('</ol>'); inOrderedList = false; }
        if (inTable) { result.push('</tbody></table></div>'); inTable = false; }
        continue;
      }
      if (trimmed.startsWith('### ')) {
        if (inList) { result.push('</ul>'); inList = false; }
        if (inOrderedList) { result.push('</ol>'); inOrderedList = false; }
        const headingText = trimmed.slice(4);
        const headingId = headingText.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        result.push(`<h3 id="${headingId}" style="font-family:'Playfair Display',serif;font-size:1.25rem;font-weight:600;color:#2D2D2D;margin-top:1.75rem;margin-bottom:0.5rem">${headingText}</h3>`);
      } else if (trimmed.startsWith('## ')) {
        if (inList) { result.push('</ul>'); inList = false; }
        if (inOrderedList) { result.push('</ol>'); inOrderedList = false; }
        const headingText = trimmed.slice(3);
        const headingId = headingText.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        result.push(`<h2 id="${headingId}" style="font-family:'Playfair Display',serif;font-size:1.75rem;font-weight:700;color:#2D2D2D;margin-top:2.5rem;margin-bottom:0.75rem">${headingText}</h2>`);
      } else if (trimmed.startsWith('- ')) {
        if (inOrderedList) { result.push('</ol>'); inOrderedList = false; }
        if (!inList) { result.push('<ul style="margin:0.75rem 0 1rem 1.5rem;list-style:disc">'); inList = true; }
        result.push(`<li style="font-size:1rem;line-height:1.7;color:#6B6B6B;margin-bottom:0.4rem">${trimmed.slice(2).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</li>`);
      } else if (/^\d+\.\s/.test(trimmed)) {
        if (inList) { result.push('</ul>'); inList = false; }
        if (!inOrderedList) { result.push('<ol style="margin:0.75rem 0 1rem 1.5rem;list-style:decimal">'); inOrderedList = true; }
        const listContent = trimmed.replace(/^\d+\.\s/, '');
        result.push(`<li style="font-size:1rem;line-height:1.7;color:#6B6B6B;margin-bottom:0.4rem">${listContent.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</li>`);
      } else if (trimmed.startsWith('|')) {
        if (inList) { result.push('</ul>'); inList = false; }
        if (inOrderedList) { result.push('</ol>'); inOrderedList = false; }
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
        if (inOrderedList) { result.push('</ol>'); inOrderedList = false; }
        if (inTable) { result.push('</tbody></table></div>'); inTable = false; }
        const formatted = trimmed
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .replace(/\*(.*?)\*/g, '<em>$1</em>');
        result.push(`<p style="font-size:1.0625rem;line-height:1.8;color:#6B6B6B;margin-bottom:1.25rem">${formatted}</p>`);
      }
    }
    if (inList) result.push('</ul>');
    if (inOrderedList) result.push('</ol>');
    if (inTable) result.push('</tbody></table></div>');
    return result.join('\n');
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
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
                <span className="flex items-center gap-1"><MapPin size={14} /> HSR Layout &amp; Attibele, Bangalore</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: '#FFFFFF' }}>
          <div className="container-hn">
            <div className="grid lg:grid-cols-3 gap-10">
              <article className="lg:col-span-2">
                {/* Excerpt / TL;DR block — optimised for AI answer engines */}
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

                {/* Author bio with E-E-A-T signals */}
                <div className="mt-10 pt-6" style={{ borderTop: '1px solid #E8E0DB' }}>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0" style={{ background: 'linear-gradient(135deg, #8B5E83, #2A6B5A)' }}>SL</div>
                    <div>
                      <p className="font-bold text-lg" style={{ fontFamily: 'DM Sans, sans-serif', color: '#2D2D2D' }}>Dr. Sanjana L</p>
                      <p className="text-sm mb-1" style={{ color: '#6B6B6B' }}>MBBS, MS (OB-GYN) &bull; RGUHS Gold Medalist &bull; FMAS</p>
                      <p className="text-sm mb-2" style={{ color: '#6B6B6B' }}>Gynaecologist &amp; Obstetrician at Health Nest, HSR Layout &amp; Raghava Hospital, Attibele, Bangalore</p>
                      <p className="text-sm" style={{ color: '#6B6B6B', lineHeight: 1.6 }}>
                        Dr. Sanjana L has over 10 years of experience in obstetrics and gynaecology. She is known for her compassionate, patient-centred approach and consults in English, Hindi, Kannada, and Telugu. She serves patients from HSR Layout, Attibele, Sarjapura, Electronic City, Koramangala, BTM Layout, Chandapura, and Hosur.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="badge text-xs">{tag}</span>
                  ))}
                </div>

                <Link href="/blog" className="mt-8 flex items-center gap-2 text-sm font-semibold" style={{ color: '#8B5E83' }}>
                  <ArrowLeft size={16} /> Back to all articles
                </Link>
              </article>

              {/* Sidebar */}
              <aside>
                <div className="sticky top-24 space-y-5">
                  {/* CTA */}
                  <div className="rounded-2xl p-6" style={{ background: 'linear-gradient(135deg, #8B5E83, #6B4563)' }}>
                    <p className="text-white font-bold text-lg mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Consult Dr. Sanjana</p>
                    <p className="text-white/80 text-sm mb-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>Health Nest, HSR Layout &amp; Attibele</p>
                    <p className="text-white/70 text-xs mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      Serving Sarjapura, Electronic City, Koramangala, BTM Layout, Chandapura &amp; Hosur
                    </p>
                    <Link href="/book-appointment" className="btn-white w-full justify-center mb-2">
                      <Calendar size={16} /> Book Appointment
                    </Link>
                    <a href="tel:+919449031003" className="flex items-center justify-center gap-2 text-white/90 text-sm font-medium mt-2 hover:text-white transition-colors">
                      <Phone size={14} /> Call: +91-9449031003
                    </a>
                  </div>

                  {/* Related Articles */}
                  {sidebarPosts.length > 0 && (
                    <div className="rounded-2xl p-5" style={{ background: '#FFF8F0', border: '1px solid #E8E0DB' }}>
                      <p className="font-semibold mb-4" style={{ fontFamily: 'DM Sans, sans-serif', color: '#2D2D2D' }}>Related Articles</p>
                      <div className="space-y-3">
                        {sidebarPosts.map(related => (
                          <Link
                            key={related.slug}
                            href={`/blog/${related.slug}`}
                            className="block p-3 rounded-xl transition-all hover:bg-white hover:shadow-sm"
                            style={{ textDecoration: 'none' }}
                          >
                            <p className="text-sm font-semibold mb-1" style={{ color: '#2D2D2D', lineHeight: 1.4 }}>{related.title}</p>
                            <div className="flex items-center gap-2">
                              <span className="text-xs" style={{ color: '#8B5E83' }}>{related.category}</span>
                              <span className="text-xs" style={{ color: '#9B9B9B' }}>{related.readTime} min read</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <Link href="/blog" className="mt-3 flex items-center gap-1 text-sm font-semibold" style={{ color: '#8B5E83' }}>
                        View All Articles <ArrowRight size={14} />
                      </Link>
                    </div>
                  )}

                  {/* Location block for local SEO */}
                  <div className="rounded-2xl p-5" style={{ background: '#FFFFFF', border: '1px solid #E8E0DB' }}>
                    <p className="font-semibold mb-3" style={{ fontFamily: 'DM Sans, sans-serif', color: '#2D2D2D' }}>Clinic Locations</p>
                    <div className="space-y-3 text-sm" style={{ color: '#6B6B6B' }}>
                      <div className="flex items-start gap-2">
                        <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: '#8B5E83' }} />
                        <div>
                          <p className="font-semibold" style={{ color: '#2D2D2D' }}>Health Nest, HSR Layout</p>
                          <p>Near Agara Lake, Bangalore 560102</p>
                          <p className="text-xs mt-0.5" style={{ color: '#9B9B9B' }}>Accessible from Koramangala, BTM Layout</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: '#2A6B5A' }} />
                        <div>
                          <p className="font-semibold" style={{ color: '#2D2D2D' }}>Raghava Hospital, Attibele</p>
                          <p>Attibele, Bangalore 562107</p>
                          <p className="text-xs mt-0.5" style={{ color: '#9B9B9B' }}>Serving Sarjapura, Electronic City, Chandapura, Hosur</p>
                        </div>
                      </div>
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
