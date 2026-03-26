import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://healthnest.in"),
  title: {
    default: "Best Gynaecologist in HSR Layout Bangalore | Dr. Sanjana L - Health Nest",
    template: "%s | Health Nest",
  },
  description:
    "Dr. Sanjana L (MBBS, MS) — 15+ yrs experienced gynaecologist & obstetrician in HSR Layout, Bangalore. Book appointment at Health Nest clinic for pregnancy care, fertility, laparoscopy & more.",
  keywords: [
    "gynaecologist in HSR Layout Bangalore",
    "best gynecologist near me HSR Layout",
    "lady gynecologist HSR Layout",
    "obstetrician Bangalore",
    "Dr Sanjana L",
    "Health Nest",
    "pregnancy care Bangalore",
    "PCOS treatment HSR Layout",
  ],
  authors: [{ name: "Dr. Sanjana L" }],
  creator: "Health Nest",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://healthnest.in",
    siteName: "Health Nest",
    title: "Best Gynaecologist in HSR Layout Bangalore | Dr. Sanjana L",
    description:
      "Dr. Sanjana L — 10 plus years of trusted gynaecology & obstetrics care in HSR Layout, Bangalore.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Health Nest - Dr. Sanjana L, Gynaecologist HSR Layout Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Gynaecologist in HSR Layout Bangalore | Dr. Sanjana L",
    description: "Dr. Sanjana L — 10 plus years of trusted gynaecology care in HSR Layout.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

const medicalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Health Nest",
  description: "Gynaecology & Obstetrics clinic in HSR Layout, Bangalore led by Dr. Sanjana L",
  url: "https://healthnest.in",
  telephone: "+91-XXXXXXXXXX",
  email: "info@healthnest.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "HSR Layout",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    postalCode: "560102",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "12.9116",
    longitude: "77.6389",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  priceRange: "₹₹",
  image: "https://healthnest.in/images/clinic-exterior.jpg",
  sameAs: [],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
    bestRating: "5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusinessSchema) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
