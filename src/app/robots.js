import { SITE_URL } from "../lib/seo";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      // /api/og sert les images Open Graph : les robots de LinkedIn et X
      // respectent robots.txt et n'afficheraient pas l'aperçu si elles étaient
      // bloquées avec le reste de /api/. La règle la plus précise l'emporte.
      allow: ["/", "/api/og"],
      disallow: [
        "/api/", // Block API routes
        "/admin/", // Block admin dashboard
        "/portal/", // Block client portal
        "/private/", // Block any private folders if they exist
      ],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
