/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
    },
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          }
        ]
      }
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2592000, // 30 days
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.amazonaws.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.suzaliconseil.com",
          },
        ],
        destination: "https://suzaliconseil.com/:path*",
        permanent: true,
      },
      {
        source: "/blog/:slug*",
        destination: "/actualites/:slug*",
        permanent: true,
      },
      {
        source: "/actualites/5-strategies-efficaces-pour-automatiser-vos-workflows-de-prospection-2",
        destination: "/actualites/5-strategies-efficaces-pour-automatiser-vos-workflows-de-prospection",
        permanent: true,
      },
      {
        source: "/wp-content/:path*",
        destination: "/assets/:path*",
        permanent: true,
      },
      // Articles de l'ancien site absents de la base après migration.
      // Ils sont toujours indexés par Google (impressions constatées dans la
      // Search Console sur 28 j) et renvoyaient un 404 : le 301 www -> non-www
      // les envoyait vers une URL inexistante. Cible = l'équivalent le plus
      // proche en intention de recherche.
      {
        source: "/actualites/combien-coute-la-generation-de-leads-b2b-le-guide-suzali-mn8n0mlp",
        destination: "/offres",
        permanent: true,
      },
      {
        source: "/actualites/kpi-prospection-commerciale-mesurez-l-efficacite-b2b-mo2n9l4c",
        destination: "/actualites/kpi-prospection-commerciale-mesurer-et-piloter-la-performance-mocznw1b",
        permanent: true,
      },
      {
        source: "/actualites/les-kpi-prospection-commerciale-essentiels-pour-le-b2b-mmomuh03",
        destination: "/actualites/kpi-prospection-commerciale-mesurer-et-piloter-la-performance-mocznw1b",
        permanent: true,
      },
      {
        source: "/actualites/comment-generer-des-leads-b2b-en-france-le-guide-expert-mmlryr4j",
        destination: "/services/generation-leads-b2b",
        permanent: true,
      },
      {
        source: "/actualites/externaliser-sa-prospection-commerciale-b2b-croissance-assuree-mn2x90bz",
        destination: "/actualites/pourquoi-externaliser-sa-prospection-commerciale-b2b-mojth973",
        permanent: true,
      },
      {
        source: "/actualites/pourquoi-externaliser-sa-prospection-commerciale-b2b-le-guide-complet-mmymxhud",
        destination: "/actualites/pourquoi-externaliser-sa-prospection-commerciale-b2b-mojth973",
        permanent: true,
      },
      {
        source: "/actualites/agence-digitale-b2b-france-levier-de-croissance-strategique-mnfs7ocq",
        destination: "/services/digital",
        permanent: true,
      },
      {
        source: "/actualites/boostez-votre-croissance-agence-prospection-pour-startup-saas-mncxbxlw",
        destination: "/services/commercial",
        permanent: true,
      },
      {
        source: "/actualites/prospection-commerciale-pme-methodes-et-leviers-performants-moqyogfj",
        destination: "/actualites/prospection-commerciale-pme-les-strategies-incontournables-mmix31os",
        permanent: true,
      },
      // Example of old service page redirect if slug changed:
      // {
      //   source: '/old-service-page',
      //   destination: '/services/commercial',
      //   permanent: true,
      // }
    ];
  },
};

export default nextConfig;
