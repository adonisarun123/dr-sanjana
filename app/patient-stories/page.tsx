import type { Metadata } from 'next';
import Link from 'next/link';
import { Star, ExternalLink } from 'lucide-react';
import { testimonials } from '@/lib/testimonials';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import BreadcrumbNav from '@/components/BreadcrumbNav';

export const metadata: Metadata = {
  title: 'Patient Stories & Reviews | Health Nest - Dr. Sanjana L, Bangalore',
  description:
    'Read what patients say about Dr. Sanjana L at Health Nest, HSR Layout, Bangalore. Real reviews from Google Trust.',
};

export default function PatientStoriesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="bg-gradient-hero" style={{ paddingTop: '100px', paddingBottom: '40px' }}>
          <div className="container-hn">
            <BreadcrumbNav crumbs={[{ label: 'Home', href: '/' }, { label: 'Patient Stories' }]} />
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-3" style={{ fontFamily: 'Playfair Display, serif', color: '#2D2D2D' }}>
              Patient Stories
            </h1>
            <div className="accent-line" />
            <div className="flex items-center gap-2 mb-3">
              {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="#F59E0B" color="#F59E0B" />)}
              <span className="font-bold text-lg ml-1" style={{ color: '#2D2D2D', fontFamily: 'DM Sans, sans-serif' }}>4.9</span>
              <span style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif' }}>· 200+ Trusted Google Reviews</span>
            </div>
            <p style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif' }}>
              Real stories from real patients — the trust that 5,000+ women have placed in Dr. Sanjana L at Health Nest.
            </p>
          </div>
        </section>

        <section className="section" style={{ background: '#FFFFFF' }}>
          <div className="container-hn">
            {/* Overall rating card */}
            <div
              className="rounded-3xl p-8 mb-12 text-center"
              style={{ background: 'linear-gradient(135deg, rgba(139,94,131,0.06), rgba(42,107,90,0.04))', border: '1px solid #E8E0DB' }}
            >
              <div className="flex justify-center gap-1 mb-2">
                {[1,2,3,4,5].map(i => <Star key={i} size={28} fill="#F59E0B" color="#F59E0B" />)}
              </div>
              <p className="text-5xl font-bold mb-1" style={{ fontFamily: 'Playfair Display, serif', color: '#8B5E83' }}>4.9</p>
              <p className="font-medium mb-1" style={{ color: '#2D2D2D', fontFamily: 'DM Sans, sans-serif' }}>Average Rating</p>
              <p className="text-sm mb-5" style={{ color: '#6B6B6B' }}>Based on 200+ Verified Google Reviews</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href="https://g.page/r/HealthNestHSRLayout/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                >
                  Rate us on Google
                </a>
              </div>
            </div>

            {/* Testimonial grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {testimonials.map((t) => (
                <div key={t.id} className="testimonial-card flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #8B5E83, #2A6B5A)' }}
                      aria-hidden="true"
                    >
                      {t.initial}
                    </div>
                    <div>
                      <p className="font-semibold" style={{ color: '#2D2D2D', fontFamily: 'DM Sans, sans-serif' }}>{t.name}</p>
                      <p className="text-xs" style={{ color: '#9B9B9B' }}>{t.service}</p>
                    </div>
                    <span
                      className="ml-auto text-xs font-medium px-2 py-1 rounded-full"
                      style={{ background: 'rgba(139,94,131,0.08)', color: '#8B5E83' }}
                    >
                      {t.source}
                    </span>
                  </div>
                  <div className="flex gap-0.5 mb-3" aria-label={`${t.rating} stars`}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif' }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
              ))}
            </div>

            {/* Share experience CTA */}
            <div className="rounded-3xl p-8 text-center" style={{ background: '#FFF8F0', border: '1px solid #E8E0DB' }}>
              <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif', color: '#2D2D2D' }}>
                Share Your Experience
              </h2>
              <p className="mb-5" style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif' }}>
                Your story helps other women make informed decisions about their health. Take 2 minutes to share your experience with Dr. Sanjana L.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href="https://g.page/r/HealthNestHSRLayout/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Write a Google Review
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-sm" style={{ background: 'linear-gradient(135deg, #8B5E83, #6B4563)' }}>
          <div className="container-hn text-center">
            <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
              Join 5000+ Women Who Trust Dr. Sanjana
            </h2>
            <p className="text-white/80 mb-5" style={{ fontFamily: 'DM Sans, sans-serif' }}>Book your appointment at Health Nest, HSR Layout today.</p>
            <Link href="/book-appointment" className="btn-white">Book Appointment</Link>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
