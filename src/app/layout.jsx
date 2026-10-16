import "./globals.css";

import Script from "next/script";
import { Sora, Geist_Mono } from "next/font/google";
import LayoutSwitcher from "../components/layout/LayoutSwitcher";
import { getMegaMenuData } from "../lib/data";
import { BookingProvider } from "../context/BookingContext";
import { DEFAULT_OG_IMAGE, SITE_URL } from "../lib/seo";
import { organizationSchema, websiteSchema } from "../lib/structured-data";
import JsonLd from "../components/seo/JsonLd";

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

// Valeurs par défaut, utilisées seulement par les pages sans métadonnées
// propres (404). Pas de canonical ici : hérité, il pointait la 404 et toute
// page oubliée vers l'accueil. Chaque page déclare le sien (lib/seo.js).
export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Agence de prospection B2B en France | Suzali Conseil",
    template: "%s | Suzali Conseil",
  },
  description:
    "Suzali Conseil, agence de prospection B2B : génération de leads, prise de rendez-vous qualifiés et acquisition digitale en France. Réservez un appel.",
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
    title: "Agence de prospection B2B en France | Suzali Conseil",
    description:
      "Génération de leads, prise de rendez-vous qualifiés et acquisition digitale pour les entreprises B2B en France.",
    siteName: "Suzali Conseil",
    images: [DEFAULT_OG_IMAGE],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agence de prospection B2B en France | Suzali Conseil",
    description:
      "Génération de leads, prise de rendez-vous qualifiés et acquisition digitale pour les entreprises B2B en France.",
    images: [DEFAULT_OG_IMAGE.url],
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

export default async function RootLayout({ children }) {
  const services = await getMegaMenuData();

  return (
    <html
      lang="fr"
      className={`${sora.variable} ${geistMono.variable}`}
      // The js-flag script below adds a "js" class before hydration.
      suppressHydrationWarning
    >
      <body className="bg-[#F6F7F4] font-sans text-[#0D332B] antialiased">
        <div
          hidden
          dangerouslySetInnerHTML={{
            __html: `<!--
THESIS: The homepage is the agenda Suzali fills. It refuses the agency default of pastel cards, blurred blobs and pill labels; proof is shown as a pipeline at work.
OWN-WORLD: Deep green #0d332b chapters alternating with paper #f6f7f4; lime #b0ff5b only for what is booked, active or actionable. Hairline time grids, status chips, ledgers of links, Sora display at -0.045em, Geist Mono for times and prices.
STORY: A B2B decision-maker sees meetings landing in a week, understands the two poles, follows the method, checks proof and prices, then books a call.
FIRST VIEWPORT: Headline left at ~5.5rem with the two CTAs under it; the SuzaLink board right, filling Mon-Fri as leads go Contacté to RDV planifié.
FORM: Established-world elevation (no concept roll: brand palette and type are commitments in PRODUCT.md). Lenis smooth scroll, scroll-linked method rail, pinned horizontal projects track.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`,
          }}
        />
        {/* Runs before first paint: marks the document as JS-capable so the
            scroll-reveal styles may hide content they are able to reveal again.
            Placed in <body>, not <head>, because React 19 treats <head> as a
            singleton and never hydrates script tags rendered inside it. */}
        <Script id="js-flag" strategy="beforeInteractive">
          {`document.documentElement.classList.add("js")`}
        </Script>
        {/* Organisation et site, sur toutes les pages : les pages services
            et articles y renvoient par @id. */}
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <BookingProvider>
          <LayoutSwitcher services={services}>{children}</LayoutSwitcher>
        </BookingProvider>
      </body>
    </html>
  );
}
