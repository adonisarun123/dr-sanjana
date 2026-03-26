'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { Phone, User, MessageSquare, Send } from 'lucide-react';

const schema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number'),
  concern: z.string().min(1, 'Please select your concern'),
  source: z.string().optional(),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  utm_term: z.string().optional(),
  utm_content: z.string().optional(),
  honeypot: z.string().max(0, 'Bot detected'),
});

type FormData = z.infer<typeof schema>;

function FormFields() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  useEffect(() => {
    // Capture UTM parameters from URL
    if (searchParams) {
      setValue('utm_source', searchParams.get('utm_source') || '');
      setValue('utm_medium', searchParams.get('utm_medium') || '');
      setValue('utm_campaign', searchParams.get('utm_campaign') || '');
      setValue('utm_term', searchParams.get('utm_term') || '');
      setValue('utm_content', searchParams.get('utm_content') || '');
      setValue('source', searchParams.get('source') || 'Google Ads Landing Page');
    }
  }, [searchParams, setValue]);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate submission (integrate with your lead management system / email here)
    console.log('Lead Captured with UTMs:', data);
    await new Promise((r) => setTimeout(r, 1500));
    router.push('/thank-you');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Honeypot to prevent bot spam */}
      <input type="text" {...register('honeypot')} className="hidden" tabIndex={-1} aria-hidden="true" />
      
      {/* Hidden trackers */}
      <input type="hidden" {...register('utm_source')} />
      <input type="hidden" {...register('utm_medium')} />
      <input type="hidden" {...register('utm_campaign')} />
      <input type="hidden" {...register('utm_term')} />
      <input type="hidden" {...register('utm_content')} />
      <input type="hidden" {...register('source')} />

      <div>
        <label className="block text-sm font-semibold mb-1 text-gray-700">Full Name*</label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            {...register('fullName')}
            className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.fullName ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-purple-100 outline-none transition-all`}
            placeholder="Your name"
          />
        </div>
        {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1 text-gray-700">Phone Number*</label>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            {...register('phone')}
            type="tel"
            className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-purple-100 outline-none transition-all`}
            placeholder="10-digit mobile number"
          />
        </div>
        {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1 text-gray-700">Service Required*</label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <select
            {...register('concern')}
            className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.concern ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-purple-100 outline-none appearance-none transition-all`}
          >
            <option value="">Select a service</option>
            <option value="Pregnancy Care">Pregnancy Care</option>
            <option value="Infertility">Infertility / IVF Support</option>
            <option value="PCOS / PCOD">PCOS / PCOD Treatment</option>
            <option value="Laparoscopy">Laparoscopic Surgery</option>
            <option value="Other">General Consultation</option>
          </select>
        </div>
        {errors.concern && <p className="text-xs text-red-500 mt-1">{errors.concern.message}</p>}
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
      <p className="text-[10px] text-center text-gray-500 mt-4 leading-relaxed">
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
