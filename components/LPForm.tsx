'use client';
import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { Phone, User, MessageSquare, Send, MapPin } from 'lucide-react';
import { track, trackLeadConversion } from '@/lib/analytics';

const schema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number'),
  concern: z.string().min(1, 'Please select your concern'),
  center: z.string().min(1, 'Please select a clinic center'),
  source: z.string().optional(),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  utm_term: z.string().optional(),
  utm_content: z.string().optional(),
  sourceUrl: z.string().optional(),
  honeypot: z.string().max(0, 'Bot detected'),
});

type FormData = z.infer<typeof schema>;

function FormFields() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const hasTrackedFocus = useRef(false);
  const hasTrackedView = useRef(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setValue('sourceUrl', window.location.href);
    }

    if (searchParams) {
      setValue('utm_source', searchParams.get('utm_source') || '');
      setValue('utm_medium', searchParams.get('utm_medium') || '');
      setValue('utm_campaign', searchParams.get('utm_campaign') || '');
      setValue('utm_term', searchParams.get('utm_term') || '');
      setValue('utm_content', searchParams.get('utm_content') || '');
      setValue('source', searchParams.get('source') || 'Google Ads Landing Page');
    }
  }, [searchParams, setValue]);

  // Fire `lead_form_view` once when the form first scrolls into view.
  useEffect(() => {
    const node = formRef.current;
    if (!node || hasTrackedView.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !hasTrackedView.current) {
            hasTrackedView.current = true;
            track('lead_form_view', { form_id: 'lp_callback' });
            observer.disconnect();
          }
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Engagement signal: first time any field receives focus.
  const handleFirstFocus = (fieldName: string) => {
    if (hasTrackedFocus.current) return;
    hasTrackedFocus.current = true;
    track('lead_form_field_focus', {
      form_id: 'lp_callback',
      field: fieldName,
    });
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    track('lead_form_submit_attempt', {
      form_id: 'lp_callback',
      service: data.concern,
      center: data.center,
    });

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Submission failed');

      const json = (await response.json().catch(() => ({}))) as {
        success?: boolean;
        id?: string | number;
      };

      const leadId = json.id ? String(json.id) : '';
      try {
        sessionStorage.setItem('lastLeadId', leadId);
      } catch {
        /* private mode etc. — ignore */
      }

      track('lead_form_submit_success', {
        form_id: 'lp_callback',
        service: data.concern,
        center: data.center,
        lead_id: leadId,
      });
      trackLeadConversion({
        transaction_id: leadId,
        service: data.concern,
        center: data.center,
      });

      router.push('/thank-you');
    } catch (error) {
      console.error('Error:', error);
      track('lead_form_submit_error', {
        form_id: 'lp_callback',
        message: error instanceof Error ? error.message : 'unknown',
      });
      alert('Something went wrong. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Wrap each registered field so we can intercept first focus without losing
  // react-hook-form's onChange / onBlur handlers.
  const fieldName = (name: keyof FormData) => {
    const props = register(name);
    return {
      ...props,
      onFocus: () => handleFirstFocus(name),
    };
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Honeypot to prevent bot spam — display:none already removes it from the
          accessibility tree, so aria-hidden on a focusable element is unnecessary
          (and triggers a Lighthouse a11y warning). */}
      <input type="text" {...register('honeypot')} className="hidden" tabIndex={-1} autoComplete="off" />
      
      {/* Hidden trackers */}
      <input type="hidden" {...register('utm_source')} />
      <input type="hidden" {...register('utm_medium')} />
      <input type="hidden" {...register('utm_campaign')} />
      <input type="hidden" {...register('utm_term')} />
      <input type="hidden" {...register('utm_content')} />
      <input type="hidden" {...register('source')} />
      <input type="hidden" {...register('sourceUrl')} />

      <div>
        <label htmlFor="lp-fullName" className="block text-sm font-semibold mb-1 text-gray-700">Full Name*</label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} aria-hidden="true" />
          <input
            id="lp-fullName"
            {...fieldName('fullName')}
            aria-invalid={errors.fullName ? 'true' : 'false'}
            aria-describedby={errors.fullName ? 'lp-fullName-err' : undefined}
            autoComplete="name"
            className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.fullName ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-purple-100 outline-none transition-colors`}
            placeholder="Your name"
          />
        </div>
        {errors.fullName && <p id="lp-fullName-err" className="text-xs text-red-600 mt-1">{errors.fullName.message}</p>}
      </div>

      <div>
        <label htmlFor="lp-phone" className="block text-sm font-semibold mb-1 text-gray-700">Phone Number*</label>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} aria-hidden="true" />
          <input
            id="lp-phone"
            {...fieldName('phone')}
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            aria-invalid={errors.phone ? 'true' : 'false'}
            aria-describedby={errors.phone ? 'lp-phone-err' : undefined}
            className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-purple-100 outline-none transition-colors`}
            placeholder="10-digit mobile number"
          />
        </div>
        {errors.phone && <p id="lp-phone-err" className="text-xs text-red-600 mt-1">{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor="lp-center" className="block text-sm font-semibold mb-1 text-gray-700">Select Clinic Center*</label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} aria-hidden="true" />
          <select
            id="lp-center"
            {...fieldName('center')}
            aria-invalid={errors.center ? 'true' : 'false'}
            aria-describedby={errors.center ? 'lp-center-err' : undefined}
            className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 border-[#8B5E83] bg-white focus:ring-2 focus:ring-purple-100 outline-none appearance-none transition-colors`}
            style={{ fontWeight: '500' }}
          >
            <option value="">-- Choose between HSR Layout & Attibele --</option>
            <option value="HSR Layout">Health Nest (HSR Layout)</option>
            <option value="Attibele">Raghava Hospital (Attibele)</option>
          </select>
        </div>
        {errors.center && <p id="lp-center-err" className="text-xs text-red-600 mt-1">{errors.center.message}</p>}
      </div>

      <div>
        <label htmlFor="lp-concern" className="block text-sm font-semibold mb-1 text-gray-700">Service Required*</label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} aria-hidden="true" />
          <select
            id="lp-concern"
            {...fieldName('concern')}
            aria-invalid={errors.concern ? 'true' : 'false'}
            aria-describedby={errors.concern ? 'lp-concern-err' : undefined}
            className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.concern ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-purple-100 outline-none appearance-none transition-colors`}
          >
            <option value="">Select a service</option>
            <option value="Pregnancy Care">Pregnancy Care</option>
            <option value="Infertility">Infertility / IVF Support</option>
            <option value="PCOS / PCOD">PCOS / PCOD Treatment</option>
            <option value="Laparoscopy">Laparoscopic Surgery</option>
            <option value="Other">General Consultation</option>
          </select>
        </div>
        {errors.concern && <p id="lp-concern-err" className="text-xs text-red-600 mt-1">{errors.concern.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-[#8B5E83] to-[#6B4563] text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 mt-2"
      >
        {isSubmitting ? (
           <span className="flex items-center gap-2">
             <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
             Sending Request...
           </span>
        ) : (
          <>
            Get a FREE Callback
            <Send size={18} />
          </>
        )}
      </button>
      <p className="text-[11px] text-center text-gray-600 mt-4 leading-relaxed">
        By submitting this form, you agree to receive a callback for medical consultation. Your data remains strictly confidential.
      </p>
    </form>
  );
}

export default function LPForm() {
  return (
    <Suspense fallback={<div className="h-[300px] flex items-center justify-center text-gray-400">Loading secure form...</div>}>
      <FormFields />
    </Suspense>
  );
}
