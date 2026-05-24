import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Analytics from "@/components/Analytics";
import "./globals.css";

// Google Tag Manager container ID. Defaults to the production container; can
// be overridden per environment via NEXT_PUBLIC_GTM_ID. All custom events the
// site fires (phone_click, lead_form_submit_success, etc.) push to the same
// `window.dataLayer` GTM listens on, so any tag configured inside GTM picks
// them up automatically — no extra wiring per tag.
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-MXWJFJKG";
import {
  SITE_URL,
  SITE_NAME,
  PHYSICIAN_FULL_NAME,
  DEFAULT_OG_IMAGE_PATH,
  ORGANIZATION_SAME_AS,
  PHYSICIAN_SAME_AS,
  PRIMARY_PRACTICE_ADDRESS,
} from "@/lib/site";

// Self-hosted Google Fonts via next/font — eliminates the render-blocking
// stylesheet round-trip and serves the woff2 files from the same origin.
// Italic faces are intentionally NOT loaded: every `italic` Tailwind class in
// the app is applied to elements that use the browser default serif stack or
// gradient text, so dropping italic faces halves the woff2 payload with no
// visual regression.
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display",
  display: "swap",
  preload: true,
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
  preload: true,
});

const ogImagePath = DEFAULT_OG_IMAGE_PATH;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#8B5E83",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Best Gynaecologist in HSR Layout & Attibele | Dr. Sanjana L",
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
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
      sameAs: [...ORGANIZATION_SAME_AS],
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
      location: [
        {
          "@type": "Place",
          "@id": `${SITE_URL}/#location-hsr`,
          name: "Health Nest Hospital (HSR Layout)",
          telephone: "+91-9449031003",
          hasMap: "https://maps.google.com/?q=Health+Nest+HSR+Layout+Bangalore",
          address: {
            "@type": "PostalAddress",
            streetAddress: "1162, 24th Main Rd, Sector 2, HSR Layout",
            addressLocality: "Bengaluru",
            addressRegion: "Karnataka",
            postalCode: "560102",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "12.9116",
            longitude: "77.6389",
          },
        },
        {
          "@type": "Place",
          "@id": `${SITE_URL}/#location-attibele`,
          name: "Raghava Multispeciality Hospital — Dr. Sanjana L",
          telephone: "+91-9980031006",
          hasMap:
            "https://www.google.com/maps/place/Raghava+Multispeciality+Hospital/@12.7803654,77.7707144,17z",
          address: {
            "@type": "PostalAddress",
            streetAddress: "39, Sarjapura - Attibele Rd, opposite Syndicate Bank",
            addressLocality: "Attibele, Bengaluru",
            addressRegion: "Karnataka",
            postalCode: "562107",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "12.7803654",
            longitude: "77.7707144",
          },
        },
      ],
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
      // Multi-typed so Google validates against both Person (jobTitle, worksFor)
      // and Physician/MedicalBusiness (medical-specific properties + LocalBusiness).
      "@type": ["Person", "Physician"],
      "@id": `${SITE_URL}/#physician`,
      name: PHYSICIAN_FULL_NAME,
      alternateName: "Dr Sanjana L",
      image: `${SITE_URL}/dr-sanjana-hero.png`,
      url: `${SITE_URL}/about-dr-sanjana`,
      telephone: "+91-9449031003",
      email: "info@healthnest.in",
      sameAs: [...PHYSICIAN_SAME_AS],
      identifier: "124759",
      jobTitle: "Obstetrician and Gynaecologist",
      description:
        "Obstetrician and gynaecologist (MBBS MS OBG Gold Medalist, FRM RGUHS, FMAS). Over 10 years of clinical experience. Consults in English, Hindi, Kannada, and Telugu.",
      knowsLanguage: ["English", "Hindi", "Kannada", "Telugu"],
      medicalSpecialty: ["Gynecologic", "Obstetric"],
      // Required by Google's LocalBusiness rich-result validation because
      // Physician inherits from MedicalBusiness > LocalBusiness.
      address: PRIMARY_PRACTICE_ADDRESS,
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
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        {/* Google Tag Manager — loaded as high in <head> as Next.js allows. */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(rootStructuredData) }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) — must be the first child inside <body>. */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
