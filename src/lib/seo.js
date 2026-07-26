const SITE_URL = "https://suzaliconseil.com";
const SITE_NAME = "Suzali Conseil";

function normalizePath(path = "/") {
  if (!path || path === "/") return "/";
  return `/${path.replace(/^\/+|\/+$/g, "")}`;
}

function createOgImage(title, theme = "commercial") {
  return {
    url: `${SITE_URL}/api/og?title=${encodeURIComponent(title)}&theme=${theme}`,
    width: 1200,
    height: 630,
    alt: `${title} — ${SITE_NAME}`,
  };
}

const DEFAULT_OG_IMAGE = createOgImage(SITE_NAME);

export function createPageMetadata({
  title,
  description,
  path,
  type = "website",
  keywords,
  theme = "commercial",
  robots,
}) {
  const normalizedPath = normalizePath(path);
  const canonical =
    normalizedPath === "/" ? SITE_URL : `${SITE_URL}${normalizedPath}`;
  const image = createOgImage(title, theme);

  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      images: [image],
      locale: "fr_FR",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
    ...(robots ? { robots } : {}),
  };
}

export {
  createOgImage,
  DEFAULT_OG_IMAGE,
  normalizePath,
  SITE_NAME,
  SITE_URL,
};
