import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-gradient-hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
        <div className="container-hn text-center py-20">
          <p className="text-8xl font-bold gradient-text mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>404</p>
          <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#2D2D2D' }}>
            Page Not Found
          </h1>
          <p className="mb-8" style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif' }}>
            The page you are looking for does not exist or has been moved.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/" className="btn-primary">Go to Home</Link>
            <Link href="/services" className="btn-secondary">View Services</Link>
            <Link href="/book-appointment" className="btn-secondary">Book Appointment</Link>
          </div>
        </div>
      </main>
    </>
  );
}
