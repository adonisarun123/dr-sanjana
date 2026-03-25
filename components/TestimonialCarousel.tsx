'use client';
import { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/lib/testimonials';

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 4500);
    return () => clearInterval(t);
  }, [paused, next]);

  const getVisible = () => {
    const indices = [];
    for (let i = 0; i < 3; i++) {
      indices.push((current + i) % testimonials.length);
    }
    return indices;
  };

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Desktop: 3 cards */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        {getVisible().map((idx) => {
          const t = testimonials[idx];
          return (
            <div key={t.id} className="testimonial-card">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #8B5E83, #2A6B5A)' }}
                  aria-hidden="true"
                >
                  {t.initial}
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: '#2D2D2D', fontFamily: 'DM Sans, sans-serif' }}>{t.name}</p>
                  <p className="text-xs" style={{ color: '#9B9B9B' }}>{t.service}</p>
                </div>
                <div
                  className="ml-auto text-xs font-medium px-2 py-1 rounded-full"
                  style={{ background: 'rgba(139,94,131,0.08)', color: '#8B5E83' }}
                >
                  {t.source}
                </div>
              </div>
              <div className="flex gap-0.5 mb-3" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#6B6B6B', fontFamily: 'DM Sans, sans-serif' }}>
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
          );
        })}
      </div>

      {/* Mobile: single card */}
      <div className="md:hidden">
        <div className="testimonial-card">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #8B5E83, #2A6B5A)' }}
            >
              {testimonials[current].initial}
            </div>
            <div>
              <p className="font-semibold text-sm" style={{ color: '#2D2D2D' }}>{testimonials[current].name}</p>
              <p className="text-xs" style={{ color: '#9B9B9B' }}>{testimonials[current].service}</p>
            </div>
          </div>
          <div className="flex gap-0.5 mb-3">
            {Array.from({ length: testimonials[current].rating }).map((_, i) => (
              <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />
            ))}
          </div>
          <p className="text-sm leading-relaxed" style={{ color: '#6B6B6B' }}>
            &ldquo;{testimonials[current].quote}&rdquo;
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors hover:bg-purple-50"
          style={{ borderColor: '#E8E0DB', color: '#8B5E83' }}
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="rounded-full transition-all"
              style={{
                width: i === current ? '24px' : '8px',
                height: '8px',
                background: i === current ? '#8B5E83' : '#E8E0DB',
              }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors hover:bg-purple-50"
          style={{ borderColor: '#E8E0DB', color: '#8B5E83' }}
          aria-label="Next testimonial"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
