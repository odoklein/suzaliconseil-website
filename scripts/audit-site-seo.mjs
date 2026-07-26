import fs from "node:fs/promises";
import * as cheerio from "cheerio";

const baseUrl = (process.env.SEO_AUDIT_BASE_URL || "http://localhost:3000").replace(
  /\/$/,
  "",
);
const canonicalOrigin = "https://suzaliconseil.com";

async function fetchText(pathname, redirect = "follow") {
  const response = await fetch(`${baseUrl}${pathname}`, { redirect });
  return { response, text: await response.text() };
}

function localPath(url) {
  const parsed = new URL(url, canonicalOrigin);
  return `${parsed.pathname}${parsed.search}`;
}

const sitemapResponse = await fetchText("/sitemap.xml");
if (!sitemapResponse.response.ok) {
  throw new Error(`Unable to load sitemap: ${sitemapResponse.response.status}`);
}

const sitemapXml = cheerio.load(sitemapResponse.text, { xmlMode: true });
const sitemapPaths = sitemapXml("url > loc")
  .map((_, element) => localPath(sitemapXml(element).text()))
  .get();

const pages = [];
const failures = [];
const links = [];

for (const pathname of sitemapPaths) {
  const { response, text } = await fetchText(pathname);
  const $ = cheerio.load(text);
  const title = $("title").first().text().trim();
  const description = $('meta[name="description"]').attr("content")?.trim() || "";
  const canonical = $('link[rel="canonical"]').attr("href") || "";
  const og = {
    title: $('meta[property="og:title"]').attr("content") || "",
    description: $('meta[property="og:description"]').attr("content") || "",
    url: $('meta[property="og:url"]').attr("content") || "",
    image: $('meta[property="og:image"]').attr("content") || "",
    type: $('meta[property="og:type"]').attr("content") || "",
    siteName: $('meta[property="og:site_name"]').attr("content") || "",
  };
  const h1Count = $("h1").length;
  const canonicalPath = canonical ? localPath(canonical) : "";
  const pageFailures = [];

  if (response.status !== 200) pageFailures.push(`HTTP ${response.status}`);
  if (title.length < 45 || title.length > 60) {
    pageFailures.push(`title length ${title.length}`);
  }
  if (description.length < 130 || description.length > 160) {
    pageFailures.push(`description length ${description.length}`);
  }
  if (!canonical || canonicalPath !== pathname) {
    pageFailures.push(`canonical mismatch: ${canonical || "missing"}`);
  }
  if (Object.values(og).some((value) => !value)) {
    pageFailures.push("incomplete Open Graph metadata");
  }
  if (og.url !== canonical) pageFailures.push("Open Graph URL differs from canonical");
  if (h1Count !== 1) pageFailures.push(`H1 count ${h1Count}`);

  $("a[href]").each((_, element) => {
    const href = $(element).attr("href");
    if (!href || /^(mailto:|tel:|#|javascript:)/i.test(href)) return;
    const parsed = new URL(href, canonicalOrigin);
    if (parsed.origin !== canonicalOrigin) return;
    links.push({ from: pathname, to: `${parsed.pathname}${parsed.search}` });
  });

  pages.push({
    route: pathname,
    status: response.status,
    title,
    titleLength: title.length,
    descriptionLength: description.length,
    canonical,
    og,
    h1Count,
    failures: pageFailures,
  });
  failures.push(...pageFailures.map((issue) => ({ route: pathname, issue })));
}

const uniqueTargets = [...new Set(links.map((link) => link.to))];
for (const target of uniqueTargets) {
  const { response } = await fetchText(target, "manual");
  if (response.status >= 300) {
    failures.push({
      route: target,
      issue: `internal link resolves with HTTP ${response.status}`,
    });
  }
}

const incoming = Object.fromEntries(
  sitemapPaths.map((pathname) => [
    pathname,
    new Set(links.filter((link) => link.to === pathname).map((link) => link.from))
      .size,
  ]),
);

for (const [route, count] of Object.entries(incoming)) {
  if (route.startsWith("/services/") && count < 3) {
    failures.push({ route, issue: `only ${count} incoming internal links` });
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  baseUrl,
  sitemapPaths,
  pages,
  incoming,
  failures,
};

await fs.mkdir(".seo-audit", { recursive: true });
await fs.writeFile(
  ".seo-audit/site-seo-report.json",
  `${JSON.stringify(report, null, 2)}\n`,
);

console.log(
  `${pages.length} pages crawled, ${links.length} internal links, ${failures.length} failures.`,
);
if (failures.length) {
  for (const failure of failures) {
    console.error(`- ${failure.route}: ${failure.issue}`);
  }
  process.exitCode = 1;
}
