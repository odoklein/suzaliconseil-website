import { SITE_URL } from "../lib/seo";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
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
