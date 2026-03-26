import Link from 'next/link';
import { CheckCircle2, Phone, ArrowLeft, Calendar } from 'lucide-react';

export const metadata = {
  title: 'Thank You - Health Nest',
  robots: 'noindex, nofollow',
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F0] flex items-center justify-center p-4">
      <div className="max-w-xl w-full bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-gray-50 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-50 rounded-full mb-8">
          <CheckCircle2 className="text-green-500" size={40} />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          Thank You!
        </h1>
        
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Your request has been received. Our team will contact you shortly on the provided number to discuss your consultation.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 italic transition-all hover:shadow-md">
             <Phone className="text-[#8B5E83] mx-auto mb-2" size={20} />
             <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Follow up on</p>
             <p className="font-bold text-[#8B5E83]">+91-9449031003</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 italic transition-all hover:shadow-md">
             <Calendar className="text-[#2A6B5A] mx-auto mb-2" size={20} />
             <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Clinic Hours</p>
             <p className="font-bold text-[#2A6B5A]">8 AM – 9 PM</p>
          </div>
        </div>

        <div className="space-y-4">
          <Link href="/" className="inline-flex items-center gap-2 text-[#8B5E83] font-bold hover:underline">
            <ArrowLeft size={18} />
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
