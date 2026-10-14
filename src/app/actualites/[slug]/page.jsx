import { db } from "../../../lib/db";
import { posts } from "../../../db/schema";
import { and, desc, eq, isNotNull } from "drizzle-orm";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { getPostTheme } from "../../../lib/actualites-theme";
import { getRelatedServices } from "../../../lib/article-services";
import { TRANSACTIONAL_SERVICES } from "../../../lib/transactional-services";
import ReadingProgress from "./ReadingProgress";
import { ShareButton, CopyLinkButton } from "./ShareButtons";
import { PageHero, SectionHead, LedgerList, FaqList } from "../../../components/kit";
import MagneticButton from "../../../components/ui/MagneticButton";
import CoverImage from "../_components/CoverImage";
import ArticleRow from "../_components/ArticleRow";
import { createOgImage, SITE_URL } from "../../../lib/seo";

// Prérend les articles publiés au build : sans ça chaque vue tape Neon et la
// page part en rendu dynamique (aucun en-tête x-nextjs-prerender, ~1 s de TTFB
// contre ~300 ms sur les pages services). Les articles créés ensuite par le
// cron restent servis à la demande (dynamicParams est actif par défaut).
export async function generateStaticParams() {
  try {
    const published = await db
      .select({ slug: posts.slug })
      .from(posts)
      .where(isNotNull(posts.publishedAt));

    return published.map(({ slug }) => ({ slug }));
  } catch (error) {
    console.error("generateStaticParams actualites a échoué:", error);
    return [];
  }
}

// Titres des pages services transactionnelles, tels qu'ils s'affichent dans la
// SERP. Un article dont le seoTitle (+ « | Suzali Conseil ») les reprend à
// l'identique crée un doublon de <title> entre /actualites/… et /services/….
const SERVICE_TITLES = new Set(
  Object.values(TRANSACTIONAL_SERVICES).map((service) => service.title.toLowerCase()),
);

function getArticleSeo(post) {
  const seoTitle =
    post.seoTitle && !SERVICE_TITLES.has(`${post.seoTitle} | Suzali Conseil`.toLowerCase())
      ? post.seoTitle
      : null;

  return {
    title: seoTitle || post.title,
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
  const relatedServices = getRelatedServices(slug, theme, post.targetKeyword);
  const faq = Array.isArray(post.faq) ? post.faq.filter((f) => f?.question && f?.answer) : [];

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

  const faqJsonLd =
    faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }
      : null;

  const safeContent =
    typeof post.content === "string"
      ? post.content
          .replace(/<h1(\s[^>]*)?>/gi, "<h2$1>")
          .replace(/<\/h1>/gi, "</h2>")
      : "";

  const rawDate = post.publishedAt || post.createdAt;
  const isoDate = rawDate ? new Date(rawDate).toISOString() : undefined;
  const sectionLabel = theme === "digital" ? "Digital & Tech" : "Commercial & Stratégie";

  return (
    <article className="w-full bg-[#F6F7F4] font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <ReadingProgress />

      {/* Reading mode: a shorter stage and a smaller title than a landing hero. */}
      <PageHero
        title={post.title}
        breadcrumbs={[
          { label: "Actualités", href: "/actualites" },
          { label: post.title, href: `/actualites/${slug}` },
        ]}
        meta={
          <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
            {dateStr && <time dateTime={isoDate}>{dateStr}</time>}
            {dateStr && <span aria-hidden="true">·</span>}
            <span>{readTime} min de lecture</span>
            <span aria-hidden="true">·</span>
            <span>{sectionLabel}</span>
          </span>
        }
        className="[&_h1]:max-w-[22ch] [&_h1]:text-[clamp(2.1rem,4.2vw,3.8rem)] [&_h1]:leading-[1.03] lg:[&_.hero-stage>div:last-child]:min-h-[440px]"
      />

      {/* The text: one column at a reading measure. */}
      <section className="w-full px-4 pb-24 pt-14 sm:px-6 md:pb-32 md:pt-20">
        <div className="mx-auto w-full max-w-[68ch] text-lg">
          {excerptText && (
            <p className="text-[1.3rem] font-medium leading-[1.5] tracking-[-0.02em] text-[#0D332B] md:text-[1.45rem]">
              {excerptText}
            </p>
          )}

          {post.coverImageUrl && (
            <CoverImage
              src={post.coverImageUrl}
              alt={post.title}
              priority
              hideOnError
              sizes="(max-width: 768px) 100vw, 720px"
              className="mt-12 aspect-[16/9] rounded-[18px]"
            />
          )}

          <style dangerouslySetInnerHTML={{ __html: ARTICLE_CSS }} />
          <div
            className="article-content prose prose-lg mt-12 w-full max-w-none prose-headings:font-heading"
            dangerouslySetInnerHTML={{ __html: safeContent }}
          />

          {/* Share + category */}
          <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-[#0D332B]/14 pt-6">
            <div className="flex items-center gap-2">
              <span className="mr-2 text-sm font-medium text-[#4E605B]">Partager</span>
              <ShareButton network="linkedin" slug={slug} title={post.title} />
              <ShareButton network="twitter" slug={slug} title={post.title} />
              <CopyLinkButton slug={slug} />
            </div>
            <span className="text-sm font-medium text-[#4E605B]">
              {theme === "digital" ? "Digital" : "Commercial"}
            </span>
          </div>

          {/* A quiet next step at the end of the reading; the footer carries the full closing CTA. */}
          <div className="mt-16 rounded-[22px] border border-[#0D332B]/12 bg-[#FCFDFC] p-7 md:p-10">
            <h2 className="font-heading text-[1.7rem] font-semibold leading-tight tracking-[-0.035em] text-[#0D332B] md:text-[2rem]">
              Besoin d&apos;aller plus loin ?
            </h2>
            <p className="mt-3 max-w-[52ch] text-base leading-relaxed text-[#4E605B] md:text-[17px]">
              Nos experts sont à votre disposition pour discuter de vos enjeux
              spécifiques et construire une stratégie sur-mesure.
            </p>
            <MagneticButton href="/contact" variant="ink" className="mt-7 w-full sm:w-auto">
              <span className="inline-flex items-center gap-2">
                Prendre contact
                <ArrowRight size={16} aria-hidden="true" />
              </span>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* Services associés: internal links, as a ledger. */}
      <section className="w-full border-t border-[#0D332B]/10 bg-[#FCFDFC] py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <SectionHead
            size="md"
            title="Services associés"
            intro="Découvrez les accompagnements Suzali Conseil liés à ce sujet."
            introClassName="md:text-lg"
            className="lg:col-span-5"
          />
          <LedgerList
            className="lg:col-span-7"
            items={relatedServices.map((service) => ({
              title: service.label,
              href: service.href,
            }))}
          />
        </div>
      </section>

      {/* FAQ — le JSON-LD FAQPage correspondant est émis plus haut, à partir
          du même tableau post.faq, pour que balisage et rendu ne divergent
          jamais. */}
      {faq.length > 0 && (
        <FaqList
          items={faq.map((item) => ({ question: item.question, answer: item.answer }))}
          jsonLd={false}
          contactLink={false}
        />
      )}

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="w-full border-t border-[#0D332B]/10 bg-[#FCFDFC] py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHead size="md" title="Articles similaires" />
            <ul className="mt-12 border-t border-[#0D332B]/14 md:mt-16">
              {related.map((r, index) => {
                const rDate = r.publishedAt || r.createdAt;
                return (
                  <ArticleRow
                    key={r.id}
                    href={`/actualites/${r.slug}`}
                    title={r.title}
                    excerpt={
                      typeof r.excerpt === "string"
                        ? r.excerpt.replace(/<[^>]+>/g, "").trim().slice(0, 160)
                        : ""
                    }
                    date={
                      rDate
                        ? new Date(rDate).toLocaleDateString("fr-FR", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })
                        : ""
                    }
                    dateTime={rDate ? new Date(rDate).toISOString() : undefined}
                    category={r.topic === "digital" ? "Digital" : "Commercial"}
                    headingAs="h3"
                    index={index}
                  />
                );
              })}
            </ul>
          </div>
        </section>
      )}
    </article>
  );
}

/* Article typography: ink on paper, Sora, lime underlines on links (they are
   the actionable thing in a text). No coloured left borders on quotes. */
const ARTICLE_CSS = `
.article-content { color: rgb(13 51 43 / 0.9); }
.article-content p, .article-content li { color: rgb(13 51 43 / 0.88); font-size: 1.125rem; line-height: 1.8; }
.article-content h2 { color: #0D332B; margin-top: 3.25rem; margin-bottom: 1.1rem; font-size: clamp(1.6rem, 2.6vw, 2rem); line-height: 1.1; letter-spacing: -0.035em; }
.article-content h3 { color: #0D332B; margin-top: 2.25rem; margin-bottom: 0.9rem; font-size: 1.35rem; line-height: 1.2; letter-spacing: -0.03em; }
.article-content strong { color: #0D332B; }
.article-content a { color: #0D332B; font-weight: 500; text-decoration: underline; text-decoration-color: #B0FF5B; text-decoration-thickness: 2px; text-underline-offset: 4px; transition: text-decoration-color 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
.article-content a:hover { text-decoration-color: #0D332B; }
.article-content blockquote {
  border: 1px solid rgb(13 51 43 / 0.12);
  background-color: #FCFDFC;
  color: #0D332B;
  font-style: normal;
  font-weight: 500;
  padding: 1.25rem 1.5rem;
  border-radius: 12px;
  margin: 2rem 0;
}
.article-content blockquote p::before, .article-content blockquote p::after { content: none; }
.article-content ul, .article-content ol { margin: 1.5rem 0; padding-left: 1.5rem; }
.article-content li { margin-bottom: 0.5rem; }
.article-content li::marker { color: rgb(13 51 43 / 0.45); }
.article-content p + p { margin-top: 1.5rem; }
.article-content hr { border-color: rgb(13 51 43 / 0.14); }
.article-content th, .article-content td { border-color: rgb(13 51 43 / 0.14); }
`;
