import { db } from "../../../lib/db";
import { posts } from "../../../db/schema";
import { and, desc, eq, isNotNull } from "drizzle-orm";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getPostTheme } from "../../../lib/actualites-theme";
import ReadingProgress from "./ReadingProgress";
import { ShareButton, CopyLinkButton } from "./ShareButtons";
import Breadcrumbs from "../../../components/ui/Breadcrumbs";
import { createOgImage, SITE_URL } from "../../../lib/seo";

function getArticleSeo(post) {
  return {
    title: post.seoTitle || post.title,
    description:
      post.seoDescription ||
      post.excerpt ||
      "Découvrez les conseils et analyses B2B de Suzali Conseil.",
  };
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const [post] = await db
    .select()
    .from(posts)
    .where(eq(posts.slug, slug))
    .limit(1);

  if (!post) {
    return {
      title: "Article non trouvé | Suzali Conseil",
    };
  }

  const seo = getArticleSeo(post);
  const canonical = `${SITE_URL}/actualites/${slug}`;
  const image = post.coverImageUrl
    ? { url: post.coverImageUrl, alt: seo.title }
    : createOgImage(seo.title, post.topic === "digital" ? "digital" : "commercial");
  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonical,
      siteName: "Suzali Conseil",
      locale: "fr_FR",
      type: "article",
      publishedTime: post.publishedAt || post.createdAt,
      modifiedTime: post.updatedAt || post.publishedAt || post.createdAt,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [image.url],
    },
  };
}

export default async function ActualiteDetailPage({ params }) {
  const { slug } = await params;

  const [post] = await db
    .select()
    .from(posts)
    .where(eq(posts.slug, slug))
    .limit(1);

  if (!post) {
    notFound();
  }

  const dateStr = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : post.createdAt
      ? new Date(post.createdAt).toLocaleDateString("fr-FR", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : "";

  const excerptText =
    typeof post.excerpt === "string"
      ? post.excerpt.replace(/<[^>]+>/g, "").trim()
      : post.excerpt || "";

  const contentPlain =
    typeof post.content === "string"
      ? post.content.replace(/<[^>]+>/g, " ").trim()
      : "";
  const wordCount = contentPlain.split(/\s+/).length;
  const readTime = Math.max(3, Math.ceil(wordCount / 200));

  const theme =
    post.topic === "digital" || getPostTheme(post) === "digital"
      ? "digital"
      : "commercial";

  const relatedPosts = await db
    .select({
      id: posts.id,
      title: posts.title,
      slug: posts.slug,
      excerpt: posts.excerpt,
      coverImageUrl: posts.coverImageUrl,
      publishedAt: posts.publishedAt,
      createdAt: posts.createdAt,
      topic: posts.topic,
    })
    .from(posts)
    .where(
      and(
        eq(posts.topic, post.topic || "commercial"),
        isNotNull(posts.publishedAt),
      ),
    )
    .orderBy(desc(posts.createdAt))
    .limit(4);

  const related = relatedPosts.filter((r) => r.slug !== slug).slice(0, 3);
  const relatedServices = theme === "digital"
    ? [
        { href: "/services/digital/seo-acquisition", label: "SEO et acquisition digitale" },
        { href: "/services/digital/developpement-automatisation", label: "Développement et automatisation" },
      ]
    : [
        { href: "/services/generation-leads-b2b", label: "Génération de leads B2B" },
        { href: "/services/teleprospection-b2b", label: "Téléprospection B2B" },
      ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/actualites/${slug}`,
    },
    headline: post.title,
    description: excerptText,
    image:
      post.coverImageUrl ||
      createOgImage(post.title, theme).url,
    datePublished: post.publishedAt || post.createdAt,
    dateModified: post.updatedAt || post.publishedAt || post.createdAt,
    author: {
      "@type": "Organization",
      name: "Suzali Conseil",
    },
    wordCount: post.content ? post.content.split(/\s+/).length : 0,
    articleSection: theme === "digital" ? "Digital & Tech" : "Commercial & Stratégie",
  };

  const accentColor =
    theme === "digital"
      ? { heading: "#0369a1", strong: "#0c4a6e", link: "#0284c7", blockquoteBorder: "#0ea5e9", blockquoteBg: "#f0f9ff", blockquoteText: "#0c4a6e" }
      : { heading: "#065f46", strong: "#064e3b", link: "#059669", blockquoteBorder: "#10b981", blockquoteBg: "#ecfdf5", blockquoteText: "#064e3b" };
  const safeContent =
    typeof post.content === "string"
      ? post.content
          .replace(/<h1(\s[^>]*)?>/gi, "<h2$1>")
          .replace(/<\/h1>/gi, "</h2>")
      : "";

  return (
    <article className="min-h-screen w-full bg-[#FAFAFA] font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ReadingProgress theme={theme} />

      {/* Sticky Navbar */}
      <nav className="w-full bg-white/90 backdrop-blur-xl border-b border-gray-100/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="pt-6">
            <Breadcrumbs 
              items={[
                { label: "Actualités", href: "/actualites" },
                { label: post.title, href: `/actualites/${slug}` }
              ]} 
            />
          </div>
          <Link
            href="/"
            className="text-xl font-heading font-extrabold text-[#0D332B] hidden sm:block tracking-tight"
          >
            SUZALI
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative w-full min-h-[55vh] flex items-end overflow-hidden bg-gray-900">
        {post.coverImageUrl ? (
          <Image
            src={post.coverImageUrl}
            alt={post.title}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        ) : (
          <div
            className={`absolute inset-0 bg-gradient-to-br ${theme === "digital" ? "from-[#0c4a6e] via-[#0369a1] to-[#0ea5e9]" : "from-[#0D332B] via-[#1a4d42] to-[#2d7a6a]"}`}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

        <div className="relative z-10 w-full px-4 md:px-8 pb-14 pt-40">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span
                className={`inline-block px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest text-white border border-white/20 backdrop-blur-xl ${theme === "digital" ? "bg-sky-500/30" : "bg-emerald-500/30"}`}
              >
                {theme === "digital"
                  ? "Digital & Tech"
                  : "Commercial & Stratégie"}
              </span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] mb-6 max-w-3xl">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-white/70 text-sm font-medium">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white/80"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <time dateTime={dateStr}>{dateStr}</time>
              </div>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white/80"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span>{readTime} min de lecture</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full bg-white">
        <div className="w-full max-w-4xl px-4 py-14 md:px-8 md:py-20 mx-auto">
          {excerptText && (
            <p className="text-xl md:text-2xl font-light leading-relaxed mb-14 text-gray-500 border-l-4 pl-6 italic"
               style={{ borderColor: accentColor.blockquoteBorder }}>
              {excerptText}
            </p>
          )}

          <style
            dangerouslySetInnerHTML={{
              __html: `
            .article-content p, .article-content li { color: #374151; font-size: 1.125rem; line-height: 1.85; }
            .article-content h2 { color: ${accentColor.heading}; margin-top: 3rem; margin-bottom: 1.25rem; font-size: 1.75rem; }
            .article-content h3 { color: ${accentColor.heading}; margin-top: 2rem; margin-bottom: 1rem; font-size: 1.35rem; }
            .article-content strong { color: ${accentColor.strong}; }
            .article-content a { color: ${accentColor.link}; text-decoration: underline; text-decoration-color: ${accentColor.link}40; text-underline-offset: 3px; transition: text-decoration-color 0.2s; }
            .article-content a:hover { text-decoration-color: ${accentColor.link}; }
            .article-content blockquote {
              border-left: 4px solid ${accentColor.blockquoteBorder};
              color: ${accentColor.blockquoteText};
              background-color: ${accentColor.blockquoteBg};
              padding: 1.25rem 1.5rem;
              border-radius: 0 0.75rem 0.75rem 0;
              margin: 2rem 0;
            }
            .article-content ul, .article-content ol { margin: 1.5rem 0; padding-left: 1.5rem; }
            .article-content li { margin-bottom: 0.5rem; }
            .article-content p + p { margin-top: 1.5rem; }
          `,
            }}
          />
          <div
            className="prose max-w-none w-full prose-lg article-content prose-headings:font-heading prose-headings:font-bold"
            dangerouslySetInnerHTML={{ __html: safeContent }}
          />

          {/* Share + Tags */}
          <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-gray-400 mr-2">
                Partager
              </span>
              <ShareButton
                network="linkedin"
                slug={slug}
                title={post.title}
                theme={theme}
              />
              <ShareButton
                network="twitter"
                slug={slug}
                title={post.title}
                theme={theme}
              />
              <CopyLinkButton slug={slug} theme={theme} />
            </div>
            <span
              className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${theme === "digital" ? "bg-sky-50 text-sky-700 border border-sky-100" : "bg-emerald-50 text-emerald-700 border border-emerald-100"}`}
            >
              {theme === "digital" ? "Digital" : "Commercial"}
            </span>
          </div>
        </div>
      </div>

      <section className="w-full bg-white py-12 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading text-2xl font-extrabold text-gray-900 mb-3">
            Services associés
          </h2>
          <p className="text-gray-600 mb-5">
            Découvrez les accompagnements Suzali Conseil liés à ce sujet.
          </p>
          <div className="flex flex-wrap gap-3">
            {relatedServices.map((service) => (
              <Link key={service.href} href={service.href} className="inline-flex rounded-xl border border-[#0D332B]/15 px-4 py-3 font-semibold text-[#0D332B] hover:bg-[#0D332B] hover:text-white transition-colors">
                {service.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="w-full bg-[#FAFAFA] py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div
            className={`relative rounded-3xl p-10 md:p-14 text-center overflow-hidden ${theme === "digital" ? "bg-gradient-to-br from-[#0c4a6e] to-[#0284c7]" : "bg-gradient-to-br from-[#0D332B] to-[#1a4d42]"}`}
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-[-30%] right-[-20%] w-[60%] h-[60%] rounded-full bg-white/[0.04] blur-3xl" />
              <div className="absolute bottom-[-20%] left-[-15%] w-[50%] h-[50%] rounded-full bg-white/[0.03] blur-2xl" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-white mb-4">
                Besoin d&apos;aller plus loin ?
              </h3>
              <p className="text-white/70 mb-8 text-lg max-w-xl mx-auto leading-relaxed">
                Nos experts sont à votre disposition pour discuter de vos enjeux
                spécifiques et construire une stratégie sur-mesure.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-[#0D332B] font-bold text-base transition-all hover:scale-105 hover:shadow-xl shadow-lg"
              >
                Prendre contact
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      {related.length > 0 && (
        <div className="w-full bg-white py-16 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="font-heading text-2xl font-extrabold text-gray-900 mb-8">
              Articles similaires
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {related.map((r) => {
                const rTheme =
                  r.topic === "digital" ? "digital" : "commercial";
                const rDate = r.publishedAt || r.createdAt;
                return (
                  <Link
                    key={r.id}
                    href={`/actualites/${r.slug}`}
                    className="group bg-[#FAFAFA] rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      {r.coverImageUrl ? (
                        <Image
                          src={r.coverImageUrl}
                          alt={r.title || ""}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${rTheme === "digital" ? "from-[#0c4a6e] to-[#0ea5e9]" : "from-[#0D332B] to-[#2d7a6a]"}`}
                        />
                      )}
                    </div>
                    <div className="p-5">
                      <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider mb-2">
                        {rDate
                          ? new Date(rDate).toLocaleDateString("fr-FR", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })
                          : ""}
                      </p>
                      <h4 className="font-heading text-base font-bold text-gray-900 leading-snug line-clamp-2 group-hover:text-[#0D332B] transition-colors">
                        {r.title}
                      </h4>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

