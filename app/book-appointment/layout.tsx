import { SITE_URL } from '@/lib/site';

const bookAppointmentPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${SITE_URL}/book-appointment#webpage`,
  url: `${SITE_URL}/book-appointment`,
  name: 'Book an appointment — Dr. Sanjana L | Health Nest',
  description:
    'Request an in-person or online consultation at Health Nest (HSR Layout) or Raghava Multispeciality Hospital (Attibele).',
  isPartOf: { '@id': `${SITE_URL}/#website` },
  about: { '@id': `${SITE_URL}/#physician` },
  potentialAction: {
    '@type': 'ReserveAction',
    name: 'Submit appointment request',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/book-appointment`,
    },
  },
};

export default function BookAppointmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookAppointmentPageSchema) }}
      />
      {children}
    </>
  );
}
