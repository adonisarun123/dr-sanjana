import type { Metadata } from 'next';
import Image from 'next/image';
import { Phone, Star, Award, CheckCircle2, ShieldCheck, MapPin, Clock, Calendar } from 'lucide-react';
import LPForm from '@/components/LPForm';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Best Gynaecologist in HSR Layout & Attibele | Dr. Sanjana L - Health Nest',
  description: 'Top-rated gynaecologist Dr. Sanjana L (MBBS MS ( OBG) Gold Medalist FRM ( RGUHS) FMAS) offers expert pregnancy care and fertility support for HSR Layout, Attibele, Sarjapura & South Bangalore areas. Book a callback today.',
};

export default function LPLandingPage() {
  return (
    <div className="min-h-screen bg-white text-[#2D2D2D] font-sans">
      {/* MINIMAL HEADER - No distracting links to keep focus on conversion */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 py-3">
        <div className="container-hn flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/dr-sanjana-icon.png" alt="Dr. Sanjana L" width={40} height={40} className="rounded-full" />
            <div>
              <p className="font-bold text-base leading-tight" style={{ fontFamily: 'Playfair Display, serif', color: '#8B5E83' }}>Dr. Sanjana L</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Health Nest & Raghava Multispeciality</p>
            </div>
          </div>
          <a href="tel:+919449031003" className="flex items-center gap-2 bg-[#8B5E83]/10 px-4 py-2 rounded-full text-[#8B5E83] font-bold text-sm transition-all hover:bg-[#8B5E83]/20">
            <Phone size={16} />
            <span className="hidden sm:inline">+91-9449031003</span>
            <span className="sm:hidden">Call Now</span>
          </a>
        </div>
      </header>

      <main>
        {/* HERO SECTION WITH FORM - Above the fold conversion unit */}
        <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-gradient-hero">
          <div className="container-hn relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Value Proposition & Social Proof */}
              <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2A6B5A]/10 text-[#2A6B5A] rounded-full text-xs font-bold uppercase tracking-widest mx-auto lg:mx-0">
                  <ShieldCheck size={14} /> 
                  Trusted by 5000+ Happy Patients
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Top-Rated <span className="text-[#8B5E83]">Gynaecology & Pregnancy</span> Care near you
                </h1>
                
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Expert care for women in <strong>HSR Layout, Attibele, Sarjapura, Electronic City</strong> & nearby South Bangalore areas. Consult with <strong>Dr. Sanjana L</strong> — Gold Medalist Gynaecologist.
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                  {[
                    { label: '10+ Years Exp.', icon: Award },
                    { label: '4.9/5 Rating', icon: Star },
                    { label: 'Gold Medalist', icon: CheckCircle2 },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm border border-gray-100">
                      <item.icon size={18} className="text-[#E8A87C]" />
                      <span className="text-sm font-semibold text-gray-700">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: High Conversion Lead Form */}
              <div id="callback-form" className="lg:col-span-5">
                <div className="bg-white rounded-[2.5rem] p-8 shadow-2xl border border-gray-50 relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-md">
                    Fast Response Guaranteed
                  </div>
                  <h2 className="text-2xl font-bold mb-2 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>Request a Callback</h2>
                  <p className="text-center text-gray-400 text-sm mb-6 font-medium">Get your health queries answered today</p>
                  
                  <LPForm />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* TRUST SIGNALS / ASSOCIATIONS */}
        <section className="py-10 border-y border-gray-50 bg-white">
          <div className="container-hn">
            <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-8">Professional Associations & Trust</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="text-2xl font-bold text-gray-400 font-serif italic">RGUHS Gold Medalist</span>
              <span className="text-2xl font-bold text-gray-400 font-serif italic">FOGSI Member</span>
              <span className="text-2xl font-bold text-gray-400 font-serif italic">FMAS Certified</span>
            </div>
          </div>
        </section>

        {/* EXPERTISE SECTION */}
        <section className="py-24 bg-white">
          <div className="container-hn">
            <div className="text-center mb-16">
              <p className="text-[#8B5E83] font-bold text-sm tracking-widest uppercase mb-3">Our Expertise</p>
              <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>Comprehensive Care for Every Woman</h2>
              <div className="w-16 h-1 bg-[#8B5E83] mx-auto mt-6 rounded-full" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  title: 'High-Risk Pregnancy',
                  desc: 'Specialized management for complex pregnancies with vigilant monitoring and care.',
                  icon: '👶'
                },
                { 
                  title: 'Fertility & IVF Support',
                  desc: 'Compassionate assistance and medical evaluation for your journey to motherhood.',
                  icon: '✨'
                },
                { 
                  title: 'PCOS & PCOD Management',
                  desc: 'Holistic hormonal management, lifestyle support, and targeted fertility care.',
                  icon: '🔬'
                },
                { 
                  title: 'Laparoscopic Surgery',
                  desc: 'Minimally invasive keyhole surgery for cysts, fibroids, and endometriosis.',
                  icon: '✂️'
                },
                { 
                  title: 'Normal Delivery',
                  desc: 'Supporting natural, evidence-based birthing experiences with full safety.',
                  icon: '🤰'
                },
                { 
                  title: 'Cervical Screening',
                  desc: 'Early detection through Pap smears and HPV testing for complete prevention.',
                  icon: '🛡️'
                }
              ].map((benefit, i) => (
                <div key={i} className="group p-8 rounded-3xl bg-[#FFF8F0] border border-transparent hover:border-[#8B5E83]/20 hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>{benefit.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS - Social Proof */}
        <section className="py-24 bg-[#1C1C2E] text-white">
          <div className="container-hn">
            <div className="text-center mb-16">
              <div className="flex justify-center gap-1 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} fill="#F59E0B" className="text-[#F59E0B]" size={20} />)}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>1000+ Happy Patients</h2>
              <p className="text-gray-400 max-w-xl mx-auto">Hear from women who experienced compassionate care and clinical excellence with Dr. Sanjana.</p>
            </div>
            
            <TestimonialCarousel />
          </div>
        </section>

        {/* LOCATIONS & WORKING HOURS */}
        <section className="py-24 bg-white">
          <div className="container-hn">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Visit Our Clinics</h2>
                <p className="text-gray-500 mb-8 max-w-md leading-relaxed">
                  Easily accessible for residents of HSR Layout, Attibele, Sarjapura, Electronic City, Chandapura, and surrounding South Bangalore neighborhoods.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-all">
                    <MapPin className="text-[#8B5E83] flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold text-gray-800">Health Nest (HSR Layout)</h4>
                      <p className="text-sm text-gray-500 mt-1 leading-relaxed">1162, 24th Main Rd, Sector 2, HSR Layout, Bangalore</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-all">
                    <MapPin className="text-[#8B5E83] flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold text-gray-800">Raghava Multispeciality (Attibele)</h4>
                      <p className="text-sm text-gray-500 mt-1 leading-relaxed">39, Sarjapura - Attibele Rd, Attibele, Bangalore</p>
                    </div>
                  </div>
                </div>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                    <Clock className="text-[#2A6B5A]" size={20} />
                    <span className="text-sm font-semibold">8 AM – 9 PM (Mon-Sat)</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                    <Calendar className="text-[#2A6B5A]" size={20} />
                    <span className="text-sm font-semibold">Sundays on Appointment</span>
                  </div>
                </div>
              </div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[550px] bg-gray-100">
                 <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/20 to-transparent h-1/4" />
              </div>
            </div>
          </div>
        </section>


        {/* FINAL CONVERSION STRIP */}
        <section className="py-20 bg-gradient-to-r from-[#8B5E83] to-[#6B4563]">
          <div className="container-hn text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10" style={{ fontFamily: 'Playfair Display, serif' }}>Ready to Start Your Health Journey?</h2>
            <div className="flex flex-wrap justify-center gap-5">
               <a href="#callback-form" className="px-10 py-4 bg-white text-[#8B5E83] rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-transform">Request a Callback</a>
               <a href="tel:+919449031003" className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors flex items-center gap-2">
                 <Phone size={20} /> Call Now: +91-9449031003
               </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* STICKY MOBILE CTA - Crucial for Google Ads LP */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/95 backdrop-blur-sm border-t flex gap-3 shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
         <a href="tel:+919449031003" className="flex-1 flex items-center justify-center gap-2 bg-white border-2 border-[#8B5E83] text-[#8B5E83] py-4 rounded-xl font-bold text-sm">
            <Phone size={18} /> Call
         </a>
         <a href="#callback-form" className="flex-[2] flex items-center justify-center gap-2 bg-[#8B5E83] text-white py-4 rounded-xl font-bold shadow-lg text-sm">
            Request Callback
         </a>
      </div>
    </div>
  );
}
