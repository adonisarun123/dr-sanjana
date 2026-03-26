import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, ArrowRight, Calendar } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Health Nest — Gynaecologist HSR Layout Bangalore | Dr. Sanjana L',
  description:
    'Contact Health Nest in HSR Layout, Bangalore. Get directions, clinic hours, and contact Dr. Sanjana L for gynaecology & obstetrics appointments.',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="bg-gradient-hero" style={{ paddingTop: '100px', paddingBottom: '40px' }}>
          <div className="container-hn">
            <BreadcrumbNav crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-3" style={{ fontFamily: 'Playfair Display, serif', color: '#2D2D2D' }}>
              Find Us
            </h1>
            <div className="accent-line" />
            <p style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif' }}>
              Health Nest & Raghava Multispeciality Hospital · Bangalore
            </p>
          </div>
        </section>

        <section className="section" style={{ background: '#FFFFFF' }}>
          <div className="container-hn">
            {/* TOP: Contact Form */}
            <div className="max-w-4xl mx-auto mb-20">
              <ContactForm />
            </div>

            {/* MIDDLE: Locations & Maps */}
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif', color: '#2D2D2D' }}>
                Our Clinic Locations
              </h2>
              <p style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif' }}>
                Visit us at any of our specialized branches across Bangalore.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-10">
              {/* Location 1: Health Nest */}
              <div className="space-y-6">
                <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100" style={{ height: '300px' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9!2d77.6389!3d12.9116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sHealth+Nest+HSR+Layout!5e0!3m2!1sen!2sin!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Health Nest Hospital Location Map"
                  />
                </div>
                <div className="p-6 rounded-2xl" style={{ background: '#FFF8F0', border: '1px solid #E8E0DB' }}>
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2" style={{ color: '#8B5E83', fontFamily: 'DM Sans, sans-serif' }}>
                    <MapPin size={20} /> Health Nest Hospital (HSR Layout)
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold" style={{ color: '#2D2D2D' }}>Address:</p>
                      <p className="text-sm" style={{ color: '#6B6B6B', lineHeight: 1.6 }}>1162, 24th Main Rd, Sector 2, HSR Layout<br/>Bengaluru, Karnataka 560102</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={16} style={{ color: '#2A6B5A' }} />
                      <a href="tel:+919449031003" className="text-sm font-medium hover:text-purple-700" style={{ color: '#2D2D2D' }}>+91-9449031003</a>
                    </div>
                    <a href="https://maps.google.com/?q=Health+Nest+HSR+Layout+Bangalore" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold inline-flex items-center gap-1" style={{ color: '#8B5E83' }}>
                      Get Directions <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Location 2: Raghava */}
              <div className="space-y-6">
                <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100" style={{ height: '300px' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15563.854086055577!2d77.7656209!3d12.7808269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6de0be4a49c9%3A0xe7580b3ebc0fa4cc!2sRaghava%20Multispeciality%20Hospital!5e0!3m2!1sen!2sin!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Raghava Multispeciality Hospital Location Map"
                  />
                </div>
                <div className="p-6 rounded-2xl" style={{ background: '#FFF8F0', border: '1px solid #E8E0DB' }}>
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2" style={{ color: '#8B5E83', fontFamily: 'DM Sans, sans-serif' }}>
                    <MapPin size={20} /> Raghava Multispeciality Hospital
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold" style={{ color: '#2D2D2D' }}>Address:</p>
                      <p className="text-sm" style={{ color: '#6B6B6B', lineHeight: 1.6 }}>39, Sarjapura - Attibele Rd, opposite Syndicate Bank<br/>Attibele, Bengaluru, Karnataka 562107</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={16} style={{ color: '#2A6B5A' }} />
                      <a href="tel:+919980031006" className="text-sm font-medium hover:text-purple-700" style={{ color: '#2D2D2D' }}>+91-9980031006</a>
                    </div>
                    <a href="https://maps.google.com/?q=Raghava+Multispeciality+Hospital+Attibele" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold inline-flex items-center gap-1" style={{ color: '#8B5E83' }}>
                      Get Directions <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* BOTTOM: General Info */}
            <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
              <div className="p-8 rounded-2xl border border-gray-100 text-center" style={{ background: 'linear-gradient(to bottom, #FFFFFF, #FFF8F0)' }}>
                <Mail size={32} className="mx-auto mb-3" style={{ color: '#E8A87C' }} />
                <p className="text-lg font-bold mb-1" style={{ color: '#2D2D2D', fontFamily: 'Playfair Display, serif' }}>Email Us</p>
                <a href="mailto:info@healthnest.in" className="text-sm break-all hover:text-purple-700" style={{ color: '#6B6B6B' }}>info@healthnest.in</a>
              </div>
              <div className="p-8 rounded-2xl border border-gray-100 text-center" style={{ background: 'linear-gradient(to bottom, #FFFFFF, rgba(42,107,90,0.05))' }}>
                <Clock size={32} className="mx-auto mb-3" style={{ color: '#2A6B5A' }} />
                <p className="text-lg font-bold mb-1" style={{ color: '#2D2D2D', fontFamily: 'Playfair Display, serif' }}>Working Hours</p>
                <p className="text-sm" style={{ color: '#6B6B6B' }}>Mon–Sat: 8 AM – 9 PM<br/>Sunday: On Appointment</p>
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
