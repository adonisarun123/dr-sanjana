import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export const metadata: Metadata = {
  title: 'Thank You | Health Nest',
  description: 'Thank you for contacting Health Nest. We will get back to you shortly.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-[80vh] flex flex-col justify-center bg-gradient-hero">
        <section className="container-hn py-32">
          <div className="max-w-2xl mx-auto text-center" style={{ background: '#FFF8F0', border: '1px solid #E8E0DB', borderRadius: '24px', padding: '4rem 2rem' }}>
            <CheckCircle size={64} className="mx-auto mb-6" style={{ color: '#2A6B5A' }} />
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#2D2D2D' }}>
              Thank You!
            </h1>
            <p className="text-lg mb-8" style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif' }}>
              Your request has been successfully submitted. Our team at Health Nest will review your details and get back to you shortly to confirm your appointment or answer your query.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="btn-primary justify-center">
                Return to Home
              </Link>
              <Link href="/blog" className="btn-secondary justify-center">
                Read our Health Blog <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
