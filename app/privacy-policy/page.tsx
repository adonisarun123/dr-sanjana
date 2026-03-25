import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export const metadata: Metadata = {
  title: 'Privacy Policy | Health Nest - Dr. Sanjana L',
  description: 'Privacy policy for Health Nest clinic website operated by Dr. Sanjana L in HSR Layout, Bangalore.',
  robots: { index: false },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="bg-gradient-hero" style={{ paddingTop: '100px', paddingBottom: '40px' }}>
          <div className="container-hn">
            <h1 className="text-4xl font-bold mt-4 mb-3" style={{ fontFamily: 'Playfair Display, serif', color: '#2D2D2D' }}>
              Privacy Policy
            </h1>
            <div className="accent-line" />
            <p style={{ color: '#6B6B6B' }}>Last updated: March 2026</p>
          </div>
        </section>
        <section className="section" style={{ background: '#FFFFFF' }}>
          <div className="container-hn max-w-3xl">
            <div className="prose-hn space-y-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              <h2>About This Policy</h2>
              <p>Health Nest (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is the practice of Dr. Sanjana L, located in HSR Layout, Bangalore, Karnataka, India. This Privacy Policy explains how we collect, use, and protect your information when you use our website at healthnest.in or contact us.</p>

              <h2>Information We Collect</h2>
              <p>We collect information you provide directly to us:</p>
              <ul>
                <li>Name, phone number, and email address submitted via our appointment booking form or contact forms.</li>
                <li>Brief description of your health concern (voluntary, used only to tailor your appointment).</li>
                <li>Technical data including browser type, IP address, and pages visited (collected via analytics tools).</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Confirm and manage your appointment requests.</li>
                <li>Respond to your enquiries.</li>
                <li>Improve our website and services.</li>
                <li>Send appointment reminders (where contact details are provided).</li>
              </ul>

              <h2>Data Sharing</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. Your data may be shared only with service providers who assist us in operating the website (such as email delivery services), all of whom are required to keep your information confidential.</p>

              <h2>Health Information</h2>
              <p>Any health-related information you submit through our website forms is treated with the highest level of confidentiality, consistent with applicable Indian healthcare privacy laws and medical ethics obligations.</p>

              <h2>Cookies</h2>
              <p>We use essential cookies to ensure the website functions correctly, and analytics cookies (via Google Analytics) to understand how visitors use our site. You may disable cookies through your browser settings.</p>

              <h2>Data Security</h2>
              <p>We implement appropriate security measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>

              <h2>Your Rights</h2>
              <p>You have the right to access, correct, or request deletion of your personal data. To exercise these rights, please contact us at info@healthnest.in or call +91-XXXX-XXXXXX.</p>

              <h2>Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact:</p>
              <p>Health Nest · Dr. Sanjana L · HSR Layout, Bangalore, Karnataka 560102 · Email: info@healthnest.in</p>
            </div>
            <div className="mt-10">
              <Link href="/" className="btn-primary">Return to Home</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
