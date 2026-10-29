import { readFileSync } from "node:fs";

function loadJson(relativePath) {
  try {
    return JSON.parse(readFileSync(new URL(relativePath, import.meta.url), "utf8"));
  } catch {
    return {};
  }
}

// Ancien slug d'article -> nouveau slug, alimenté par scripts/migrate-post-slugs.mjs.
// Lu au build : après une migration, il faut committer ce fichier et redéployer.
const slugRedirects = loadJson("./src/data/slug-redirects.json");

// Articles fusionnés dans un autre : slug fusionné -> slug de l'article cible, ou chemin d'une page (« /services/... »).
// À remplir à la main quand l'article cible est EN LIGNE (voir docs/slug-migration-runbook.md).
const articleMerges = loadJson("./src/data/article-merges.json");

// Une fusion mal saisie casserait le site en silence : on fait échouer le build.
for (const [from, to] of Object.entries(articleMerges)) {
  if (from === to) {
    throw new Error(`article-merges.json : « ${from} » pointe vers lui-même.`);
  }
  if (articleMerges[to]) {
    throw new Error(
      `article-merges.json : la cible « ${to} » est elle-même fusionnée vers « ${articleMerges[to]} ». Pointez directement vers l'article final.`,
    );
  }
}

/**
 * Slug final d'un article : migration des slugs PUIS fusion, chacune en une
 * seule étape, de sorte que toute ancienne URL (suffixée, WordPress...) mène à
 * l'article cible en UN saut, sans chaîne de redirections.
 */
function finalArticleSlug(slug) {
  const migrated = slugRedirects[slug] ?? slug;
  return articleMerges[migrated] ?? articleMerges[slug] ?? migrated;
}

/** Destination d'une fusion : un article (slug) ou une page du site (chemin commençant par « / »). */
function articleDestination(finalSlug) {
  return finalSlug.startsWith("/") ? finalSlug : `/actualites/${finalSlug}`;
}

/** Réécrit la destination d'une redirection existante vers le slug final. */
function remapArticleDestination(redirect) {
  const prefix = "/actualites/";
  if (!redirect.destination.startsWith(prefix)) return redirect;
  const slug = redirect.destination.slice(prefix.length);
  const finalSlug = finalArticleSlug(slug);
  return finalSlug === slug ? redirect : { ...redirect, destination: articleDestination(finalSlug) };
}
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
    const configured = [
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
      // URLs WordPress sans équivalent (archives, taxonomies, auteurs, flux) :
      // Google les a encore en mémoire et recevait un 404.
      {
        source: "/category/:path*",
        destination: "/actualites",
        permanent: true,
      },
      {
        source: "/tag/:path*",
        destination: "/actualites",
        permanent: true,
      },
      {
        source: "/author/:path*",
        destination: "/equipe",
        permanent: true,
      },
      {
        source: "/feed/:path*",
        destination: "/actualites",
        permanent: true,
      },
    ];

    // Anciens slugs migrés (suffixe retiré) et articles fusionnés : toujours vers le slug FINAL.
    const toRule = (from) => ({
      source: `/actualites/${from}`,
      destination: articleDestination(finalArticleSlug(from)),
      permanent: true,
    });
    // L'ancienne forme /blog/<slug> est aussi redirigée directement (sinon : deux sauts).
    const mergeRules = Object.keys(articleMerges).flatMap((from) => [
      toRule(from),
      { ...toRule(from), source: `/blog/${from}` },
    ]);
    const migrationRules = Object.keys(slugRedirects).map(toRule);

    // Une source ne peut apparaître qu'une fois. Une entrée de article-merges.json prime sur
    // une règle écrite à la main plus haut (c'est ainsi qu'on repointe, par exemple, l'ancienne
    // URL « combien coûte la génération de leads b2b » vers le futur article prix).
    const bySource = new Map();
    for (const rule of [...mergeRules, ...configured.map(remapArticleDestination), ...migrationRules]) {
      if (!bySource.has(rule.source)) bySource.set(rule.source, rule);
    }
    return [...bySource.values()];
  },
};

export default nextConfig;
