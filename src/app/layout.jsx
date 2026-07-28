import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  // Variable font: Jakarta ships 200–800. There is no 900 weight.
  weight: ["400", "500", "600", "700", "800"],
});

import LayoutSwitcher from "../components/layout/LayoutSwitcher";
import { getMegaMenuData } from "../lib/data";
import { BookingProvider } from "../context/BookingContext";
import { SITE_URL } from "../lib/seo";

const baseUrl = SITE_URL;

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
    <html lang="fr">
      <head>
        {/* Runs before first paint: marks the document as JS-capable so the
            scroll-reveal styles may hide content they are able to reveal again. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add("js")`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${jakarta.variable} antialiased font-sans bg-[#F9FAFB] text-[#0D332B]`}
      >
        <BookingProvider>
          <LayoutSwitcher services={services}>{children}</LayoutSwitcher>
        </BookingProvider>
      </body>
    </html>
  );
}
