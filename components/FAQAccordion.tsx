'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
  schema?: boolean;
}

export default function FAQAccordion({ faqs, schema = true }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = schema ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  } : null;

  return (
    <div>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div key={i} className="faq-item">
            <button
              className="faq-trigger"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              aria-expanded={openIndex === i}
              aria-controls={`faq-answer-${i}`}
              id={`faq-question-${i}`}
            >
              <span className="pr-4 text-left" style={{ fontFamily: 'DM Sans, sans-serif' }}>{faq.q}</span>
              <ChevronDown
                size={18}
                className="flex-shrink-0 transition-transform duration-300"
                style={{
                  color: '#8B5E83',
                  transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </button>
            <div
              id={`faq-answer-${i}`}
              role="region"
              aria-labelledby={`faq-question-${i}`}
              className="overflow-hidden transition-all duration-300"
              style={{ maxHeight: openIndex === i ? '500px' : '0' }}
            >
              <p className="faq-content">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
