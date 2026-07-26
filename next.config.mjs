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
