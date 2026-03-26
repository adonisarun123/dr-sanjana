'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Calendar, Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Pregnancy Care', href: '/services/pregnancy-care' },
      { label: 'High-Risk Pregnancy', href: '/services/high-risk-pregnancy' },
      { label: 'Normal Delivery', href: '/services/normal-delivery' },
      { label: 'Fertility Treatment', href: '/services/fertility-treatment' },
      { label: 'PCOS & PCOD', href: '/services/pcos-pcod-treatment' },
      { label: 'Laparoscopic Surgery', href: '/services/laparoscopic-surgery' },
      { label: 'View All Services →', href: '/services' },
    ],
  },
  { label: 'About', href: '/about-dr-sanjana' },
  { label: 'Patient Stories', href: '/patient-stories' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300`}
      style={{ backgroundColor: scrolled ? '#F4D6CA' : 'transparent', boxShadow: scrolled ? '0 2px 12px rgba(0,0,0,0.08)' : 'none' }}
      role="banner"
    >
      <div className="container-hn">
        <nav
          className="flex items-center justify-between py-3"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" aria-label="Health Nest Home">
            <Image
              src="/dr-sanjana-icon.png"
              alt="Health Nest - Clinic Symbol"
              width={56}
              height={56}
              className="h-10 w-10 md:h-12 md:w-12 object-contain mix-blend-multiply"
              priority
            />
            <div>
              <p className="font-bold text-lg leading-tight" style={{ fontFamily: 'Playfair Display, serif', color: '#8B5E83' }}>
                Dr. Sanjana L
              </p>
              <p className="text-xs leading-tight" style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif' }}>
                Health Nest & Raghava Multispeciality Hospital
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navLinks.map((link) =>
              link.children ? (
                <li key={link.href} className="relative group">
                  <button
                    className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-purple-50"
                    style={{ color: '#2D2D2D', fontFamily: 'DM Sans, sans-serif' }}
                    aria-haspopup="true"
                    aria-expanded={servicesOpen}
                    onClick={() => setServicesOpen(!servicesOpen)}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {link.label}
                    <ChevronDown size={14} />
                  </button>
                  <div
                    className={`absolute top-full left-0 w-56 bg-white rounded-2xl shadow-xl border py-2 transition-all duration-200 ${
                      servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}
                    style={{ borderColor: '#E8E0DB' }}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm transition-colors hover:bg-purple-50"
                        style={{ color: '#2D2D2D', fontFamily: 'DM Sans, sans-serif' }}
                        onClick={() => setServicesOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-purple-50 block"
                    style={{ color: '#2D2D2D', fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919449031003"
              className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-purple-700"
              style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif' }}
              aria-label="Call Health Nest"
            >
              <Phone size={15} />
              <span>+91-9449031003</span>
            </a>
            <Link href="/book-appointment" className="btn-primary text-sm py-2 px-5">
              <Calendar size={15} />
              Book Appointment
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg transition-colors"
            style={{ color: '#8B5E83' }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden border-t transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ backgroundColor: '#F4D6CA', borderColor: '#E8E0DB' }}
      >
        <div className="container-hn py-4">
          <ul className="space-y-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block px-4 py-3 rounded-xl text-sm font-medium transition-colors hover:bg-purple-50"
                  style={{ color: '#2D2D2D', fontFamily: 'DM Sans, sans-serif' }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <ul className="ml-4 mt-1 space-y-1">
                    {link.children.slice(0, 5).map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block px-4 py-2 rounded-lg text-sm transition-colors hover:bg-purple-50"
                          style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif' }}
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3 px-4">
            <a href="tel:+919449031003" className="btn-secondary w-full justify-center">
              <Phone size={15} /> Call Us (+91-9449031003)
            </a>
            <Link href="/book-appointment" className="btn-primary w-full justify-center" onClick={() => setMobileOpen(false)}>
              <Calendar size={15} /> Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
