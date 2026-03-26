'use client';
import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link';
import { Calendar, Phone, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import BreadcrumbNav from '@/components/BreadcrumbNav';

const schema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number'),
  email: z.string().email('Enter a valid email').optional().or(z.literal('')),
  preferredDate: z.string().min(1, 'Please select a date'),
  preferredTime: z.string().min(1, 'Please select a time slot'),
  visitType: z.string().min(1, 'Please select visit type'),
  center: z.string().min(1, 'Please select a clinic center'),
  service: z.string().optional(),
  description: z.string().optional(),
  referral: z.string().optional(),
  source: z.string().optional(),
  sourceUrl: z.string().optional(),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  honeypot: z.string().max(0, 'Bot detected'),
});

type FormData = z.infer<typeof schema>;

const services = [
  'Pregnancy Care', 'High-Risk Pregnancy', 'Normal Delivery', 'Caesarean Delivery',
  'Fertility Treatment', 'IVF & IUI', 'PCOS & PCOD', 'Laparoscopic Surgery',
  'Hysteroscopy', 'Menstrual Disorders', 'Menopause Management', 'Prenatal Screening',
  'Postnatal Care', 'Cervical Cancer Screening', 'Contraception Counselling',
  'Urogynaecology', 'Adolescent Gynaecology', 'Other / General Consultation',
];

const today = new Date().toISOString().split('T')[0];
const nextYearDate = new Date();
nextYearDate.setFullYear(nextYearDate.getFullYear() + 1);
const maxDate = nextYearDate.toISOString().split('T')[0];

function AppointmentForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setValue('sourceUrl', window.location.href);
    }
    if (searchParams) {
      setValue('utm_source', searchParams.get('utm_source') || '');
      setValue('utm_medium', searchParams.get('utm_medium') || '');
      setValue('utm_campaign', searchParams.get('utm_campaign') || '');
      setValue('source', 'Appointment Booking Page');
    }
  }, [searchParams, setValue]);

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Submission failed');
      
      router.push('/thank-you');
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again or call us directly.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-3xl p-8"
      style={{ background: '#FFF8F0', border: '1px solid #E8E0DB' }}
      aria-label="Book appointment form"
      noValidate
    >
      {/* Honeypot */}
      <input type="text" {...register('honeypot')} style={{ display: 'none' }} tabIndex={-1} aria-hidden="true" />
      <input type="hidden" {...register('source')} />
      <input type="hidden" {...register('sourceUrl')} />
      <input type="hidden" {...register('utm_source')} />
      <input type="hidden" {...register('utm_medium')} />
      <input type="hidden" {...register('utm_campaign')} />

      <div className="grid md:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <label className="form-label" htmlFor="fullName">Full Name <span aria-hidden="true">*</span></label>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            className={`form-input${errors.fullName ? ' error' : ''}`}
            placeholder="Your full name"
            {...register('fullName')}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
            aria-required="true"
          />
          {errors.fullName && <p id="fullName-error" className="text-xs mt-1" style={{ color: '#EF4444' }}>{errors.fullName.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="form-label" htmlFor="phone">Phone Number <span aria-hidden="true">*</span></label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            className={`form-input${errors.phone ? ' error' : ''}`}
            placeholder="10-digit mobile number"
            {...register('phone')}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            aria-required="true"
          />
          {errors.phone && <p id="phone-error" className="text-xs mt-1" style={{ color: '#EF4444' }}>{errors.phone.message}</p>}
        </div>

        {/* Center Selection (Moved to Top for Visibility) */}
        <div className="md:col-span-2">
          <label className="form-label" htmlFor="center">Select Clinic Center <span aria-hidden="true">*</span></label>
          <select 
            id="center" 
            className={`form-input${errors.center ? ' error' : ''}`} 
            style={{ border: '2px solid #8B5E83', background: '#fff' }}
            {...register('center')} 
            aria-required="true"
          >
            <option value="">-- Choose between HSR Layout & Attibele --</option>
            <option value="HSR Layout">Health Nest (HSR Layout)</option>
            <option value="Attibele">Raghava Hospital (Attibele)</option>
          </select>
          {errors.center && <p className="text-xs mt-1" style={{ color: '#EF4444' }}>{errors.center.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="form-label" htmlFor="email">Email <span className="text-gray-400">(Optional)</span></label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className="form-input"
            placeholder="your@email.com"
            {...register('email')}
          />
        </div>

        {/* Date */}
        <div>
          <label className="form-label" htmlFor="preferredDate">Preferred Date <span aria-hidden="true">*</span></label>
          <input
            id="preferredDate"
            type="date"
            min={today}
            max={maxDate}
            className={`form-input${errors.preferredDate ? ' error' : ''}`}
            {...register('preferredDate')}
            aria-required="true"
          />
          {errors.preferredDate && <p className="text-xs mt-1" style={{ color: '#EF4444' }}>{errors.preferredDate.message}</p>}
        </div>
        {/* Time Slot */}
        <div>
          <label className="form-label" htmlFor="preferredTime">Preferred Time Slot <span aria-hidden="true">*</span></label>
          <select id="preferredTime" className={`form-input${errors.preferredTime ? ' error' : ''}`} {...register('preferredTime')} aria-required="true">
            <option value="">Select a time slot</option>
            <option value="morning">Morning: 8:00 AM – 12:00 PM</option>
            <option value="afternoon">Afternoon: 12:00 PM – 4:00 PM</option>
            <option value="evening">Evening: 4:00 PM – 9:00 PM</option>
          </select>
          {errors.preferredTime && <p className="text-xs mt-1" style={{ color: '#EF4444' }}>{errors.preferredTime.message}</p>}
        </div>

        {/* Visit Type */}
        <div>
          <label className="form-label" htmlFor="visitType">Type of Visit <span aria-hidden="true">*</span></label>
          <select id="visitType" className={`form-input${errors.visitType ? ' error' : ''}`} {...register('visitType')} aria-required="true">
            <option value="">Select visit type</option>
            <option value="first">First Visit</option>
            <option value="followup">Follow-up</option>
            <option value="prenatal">Prenatal Check-up</option>
            <option value="emergency">Emergency / Urgent</option>
            <option value="online">Online Consultation</option>
          </select>
          {errors.visitType && <p id="visitType-error" className="text-xs mt-1" style={{ color: '#EF4444' }}>{errors.visitType.message}</p>}
        </div>

        {/* Service */}
        <div className="md:col-span-2">
          <label className="form-label" htmlFor="service">Service Interested In</label>
          <select id="service" className="form-input" {...register('service')}>
            <option value="">Select a service (optional)</option>
            {services.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="form-label" htmlFor="description">Brief Description of Your Concern</label>
          <textarea
            id="description"
            rows={3}
            className="form-input resize-none"
            placeholder="Briefly describe your symptoms or reason for visit (optional)"
            {...register('description')}
          />
        </div>

        {/* Referral */}
        <div>
          <label className="form-label" htmlFor="referral">How Did You Hear About Us?</label>
          <select id="referral" className="form-input" {...register('referral')}>
            <option value="">Select an option</option>
            <option value="google">Google Search</option>
            <option value="referral">Doctor / Friend Referral</option>
            <option value="social">Social Media</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-xs mb-4" style={{ color: '#9B9B9B', fontFamily: 'DM Sans, sans-serif' }}>
          By submitting, you agree that Health Nest may contact you to confirm your appointment. Your details will not be shared with third parties.
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full justify-center"
          aria-label="Submit appointment request"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Submitting...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Calendar size={18} /> Request Appointment
            </span>
          )}
        </button>
      </div>
    </form>
  );
}

export default function BookAppointmentPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="bg-gradient-hero" style={{ paddingTop: '100px', paddingBottom: '40px' }}>
          <div className="container-hn">
            <BreadcrumbNav crumbs={[{ label: 'Home', href: '/' }, { label: 'Book Appointment' }]} />
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-3" style={{ fontFamily: 'Playfair Display, serif', color: '#2D2D2D' }}>
              Book an Appointment
            </h1>
            <div className="accent-line" />
            <p style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif' }}>
              Dr. Sanjana L · Health Nest & Raghava Multispeciality Hospital | 10+ Years Experience
            </p>
          </div>
        </section>

        <section className="section" style={{ background: '#FFFFFF' }}>
          <div className="container-hn">
            <div className="grid lg:grid-cols-3 gap-10">
              {/* Form */}
              <div className="lg:col-span-2">
                <Suspense fallback={<div className="p-12 text-center text-gray-400">Loading appointment form...</div>}>
                  <AppointmentForm />
                </Suspense>
              </div>

              {/* Sidebar */}
              <div className="space-y-5">
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[550px] bg-gray-100">
                  <Image 
                    src="/dr-sanjana-hero.png" 
                    fill
                    className="object-cover" 
                    alt="Dr. Sanjana L - Top Gynaecologist in Bangalore"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/20 to-transparent h-1/4" />
                </div>
                <div className="rounded-2xl p-5" style={{ background: '#FFF8F0', border: '1px solid #E8E0DB' }}>
                  <h3 className="font-bold mb-3" style={{ fontFamily: 'DM Sans, sans-serif', color: '#2D2D2D' }}>Call to Book</h3>
                  <a href="tel:+919449031003" className="btn-primary w-full justify-center">
                    <Phone size={16} /> +91-9449031003
                  </a>
                  <p className="text-xs mt-3 text-center" style={{ color: '#9B9B9B' }}>Mon–Sat · 8 AM – 9 PM | Sun · On Appointment</p>
                </div>
                <div className="rounded-2xl p-5" style={{ background: '#FFF8F0', border: '1px solid #E8E0DB' }}>
                  <h3 className="font-bold mb-3" style={{ fontFamily: 'DM Sans, sans-serif', color: '#2D2D2D' }}>Why Health Nest?</h3>
                  {[
                    '10 plus years of expertise',
                    'In-person & online consultations',
                    'English, Hindi, Kannada, Telugu',
                    '200+ trusted reviews',
                    'Reg. No: 124759',
                  ].map(item => (
                    <div key={item} className="flex items-center gap-2 mb-2">
                      <CheckCircle size={14} style={{ color: '#2A6B5A', flexShrink: 0 }} />
                      <span className="text-sm" style={{ color: '#6B6B6B' }}>{item}</span>
                    </div>
                  ))}
                </div>
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
