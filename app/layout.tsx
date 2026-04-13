import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { SITE_URL, SITE_NAME, PHYSICIAN_FULL_NAME } from "@/lib/site";

const ogImagePath = "/og-image.jpg";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#8B5E83",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
    url: SITE_URL,
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

const rootStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      description:
        "Obstetrics and gynaecology care in HSR Layout and Attibele, Bengaluru — pregnancy, delivery, fertility, minimally invasive surgery, and preventive women's health.",
      url: SITE_URL,
      telephone: "+91-9449031003",
      email: "info@healthnest.in",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-9449031003",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi", "Kannada", "Telugu"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+91-9980031006",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi", "Kannada", "Telugu"],
        },
      ],
      address: [
        {
          "@type": "PostalAddress",
          name: "Health Nest Hospital (HSR Layout)",
          streetAddress: "1162, 24th Main Rd, Sector 2, HSR Layout",
          addressLocality: "Bengaluru",
          addressRegion: "Karnataka",
          postalCode: "560102",
          addressCountry: "IN",
        },
        {
          "@type": "PostalAddress",
          name: "Raghava Multispeciality Hospital (Attibele)",
          streetAddress: "39, Sarjapura - Attibele Rd, opposite Syndicate Bank",
          addressLocality: "Attibele, Bengaluru",
          addressRegion: "Karnataka",
          postalCode: "562107",
          addressCountry: "IN",
        },
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
      image: `${SITE_URL}${ogImagePath}`,
      employee: { "@id": `${SITE_URL}/#physician` },
      medicalSpecialty: ["Obstetrics", "Gynecology"],
      areaServed: [
        { "@type": "City", name: "Bengaluru" },
        { "@type": "City", name: "Attibele" },
        { "@type": "AdministrativeArea", name: "South Bengaluru" },
        { "@type": "City", name: "Electronic City" },
        { "@type": "City", name: "Sarjapura" },
        { "@type": "City", name: "Chandapura" },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "200",
        bestRating: "5",
      },
    },
    {
      "@type": "Physician",
      "@id": `${SITE_URL}/#physician`,
      name: PHYSICIAN_FULL_NAME,
      alternateName: "Dr Sanjana L",
      image: `${SITE_URL}/dr-sanjana-hero.png`,
      url: `${SITE_URL}/about-dr-sanjana`,
      telephone: "+91-9449031003",
      email: "info@healthnest.in",
      identifier: "124759",
      medicalSpecialty: "Obstetrics and Gynaecology",
      qualification: "MBBS MS (OBG) Gold Medalist, FRM (RGUHS), FMAS",
      jobTitle: "Obstetrician and Gynaecologist",
      availableLanguage: ["English", "Hindi", "Kannada", "Telugu"],
      yearsOfExperience: 10,
      worksFor: { "@id": `${SITE_URL}/#organization` },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "200",
        bestRating: "5",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: `${SITE_NAME} — ${PHYSICIAN_FULL_NAME}`,
      inLanguage: "en-IN",
      publisher: { "@id": `${SITE_URL}/#organization` },
      about: { "@id": `${SITE_URL}/#physician` },
      potentialAction: {
        "@type": "ReserveAction",
        name: "Book an appointment",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/book-appointment`,
        },
      },
    },
  ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(rootStructuredData) }}
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
