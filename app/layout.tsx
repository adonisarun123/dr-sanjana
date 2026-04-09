import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl = "https://healthnest.in";
const ogImagePath = "/og-image.jpg";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#8B5E83",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Best Gynaecologist in HSR Layout & Attibele | Dr. Sanjana L",
    template: "%s | Dr. Sanjana L",
  },
  description:
    "Dr. Sanjana L (MBBS MS ( OBG) Gold Medalist FRM ( RGUHS) FMAS) — 10 plus years experienced gynaecologist & obstetrician serving HSR Layout, Attibele, Sarjapura and South Bangalore. Expert care for pregnancy, fertility and laparoscopy.",
  keywords: [
    "gynaecologist in HSR Layout Bangalore",
    "best gynaecologist in Attibele",
    "obstetrician in Sarjapura",
    "gynecologist near Electronic City",
    "Dr Sanjana L",
    "Health Nest Bangalore",
    "pregnancy care Attibele",
    "PCOS treatment Bangalore",
    "lady gynaecologist Hosur Road",
    "Raghava Hospital Attibele",
  ],
  authors: [{ name: "Dr. Sanjana L" }],
  creator: "Health Nest",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Health Nest",
    title: "Best Gynaecologist in HSR Layout & Attibele | Dr. Sanjana L",
    description:
      "Dr. Sanjana L — 10 plus years of trusted gynaecology & obstetrics care in HSR Layout, Attibele, and Sarjapura Bangalore.",
    images: [
      {
        url: ogImagePath,
        width: 1200,
        height: 630,
        alt: "Health Nest - Dr. Sanjana L, Gynaecologist HSR Layout & Attibele Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Gynaecologist in HSR Layout & Attibele | Dr. Sanjana L",
    description: "Dr. Sanjana L — 10 plus years of trusted gynaecology care in HSR Layout & Attibele.",
    images: [ogImagePath],
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
};

const medicalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Health Nest",
  description: "Gynaecology & Obstetrics clinic in HSR Layout & Attibele, Bangalore led by Dr. Sanjana L",
  url: siteUrl,
  telephone: "+91-9449031003",
  email: "info@healthnest.in",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "HSR Layout",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      postalCode: "560102",
      addressCountry: "IN",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Attibele",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      postalCode: "562107",
      addressCountry: "IN",
    }
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: "12.9116",
    longitude: "77.6389",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "21:00",
    },
  ],
  priceRange: "₹₹",
  image: `${siteUrl}${ogImagePath}`,
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
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18058250699"
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18058250699');
          `}
        </Script>
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
