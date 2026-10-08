import "./globals.css";

import Script from "next/script";
import { Sora, Geist_Mono } from "next/font/google";
import LayoutSwitcher from "../components/layout/LayoutSwitcher";
import { getMegaMenuData } from "../lib/data";
import { BookingProvider } from "../context/BookingContext";
import { SITE_URL } from "../lib/seo";

const baseUrl = SITE_URL;

// Self-hosted at build time by next/font: no third-party request, and the
// size-adjusted fallback keeps layout stable while the webfont swaps in.
const sora = Sora({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-sora",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Suzali Conseil | Conseil Stratégique & Digital",
    template: "%s | Suzali Conseil",
  },
  description:
    "Cabinet de conseil spécialisé en performance commerciale, génération de leads B2B et transformation digitale en France. Accompagnement sur-mesure pour votre croissance.",
  keywords: [
    "conseil stratégie",
    "management commercial",
    "transformation digitale",
    "génération de leads b2b",
    "prospection commerciale",
    "agence seo",
    "développement web",
  ],
  authors: [{ name: "Suzali Conseil" }],
  creator: "Suzali Conseil",
  publisher: "Suzali Conseil",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Suzali Conseil | Conseil Stratégique & Digital",
    description:
      "Cabinet de conseil en stratégie, management commercial et transformation digitale.",
    url: baseUrl,
    siteName: "Suzali Conseil",
    images: [
      {
        url: "/og-image.jpg", // Make sure this exists or I will create a placeholder notice
        width: 1200,
        height: 630,
        alt: "Suzali Conseil - Conseil & Digital",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suzali Conseil | Cabinet de Conseil",
    description:
      "Performance commerciale et transformation digitale pour votre entreprise.",
    site: "@suzaliconseil",
    images: ["/og-image.jpg"],
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
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "Suzali Conseil",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/icon.svg`,
        width: 192,
        height: 192,
      },
      sameAs: ["https://www.linkedin.com/company/suzali-conseil"],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+33757902479",
        contactType: "customer service",
        areaServed: {
          "@type": "Country",
          name: "France",
        },
        availableLanguage: "fr",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: baseUrl,
      name: "Suzali Conseil",
      publisher: {
        "@id": `${baseUrl}/#organization`,
      },
      inLanguage: "fr-FR",
    },
  ],
};

export default async function RootLayout({ children }) {
  const services = await getMegaMenuData();

  return (
    <html
      lang="fr"
      className={`${sora.variable} ${geistMono.variable}`}
      // The js-flag script below adds a "js" class before hydration.
      suppressHydrationWarning
    >
      <body className="bg-[#F9FAFB] font-sans text-[#0D332B] antialiased">
        {/* Runs before first paint: marks the document as JS-capable so the
            scroll-reveal styles may hide content they are able to reveal again.
            Placed in <body>, not <head>, because React 19 treats <head> as a
            singleton and never hydrates script tags rendered inside it. */}
        <Script id="js-flag" strategy="beforeInteractive">
          {`document.documentElement.classList.add("js")`}
        </Script>
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(jsonLd)}
        </Script>
        <BookingProvider>
          <LayoutSwitcher services={services}>{children}</LayoutSwitcher>
        </BookingProvider>
      </body>
    </html>
  );
}
