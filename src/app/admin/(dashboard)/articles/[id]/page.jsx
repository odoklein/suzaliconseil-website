import { notFound } from "next/navigation";
import Link from "next/link";
import { eq } from "drizzle-orm";
import { db } from "../../../../../lib/db";
import { posts } from "../../../../../db/schema";
import EditArticleForm from "./EditArticleForm";

export const metadata = { title: "Modifier un article", robots: { index: false, follow: false } };

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

// Accès protégé par le layout (dashboard) : sans session, redirection vers /admin/login.
export default async function EditArticlePage({ params }) {
  const { id } = await params;
  if (!UUID.test(id)) notFound();

  const [post] = await db
    .select({
      id: posts.id,
      title: posts.title,
      slug: posts.slug,
      excerpt: posts.excerpt,
      content: posts.content,
      faq: posts.faq,
      publishedAt: posts.publishedAt,
    })
    .from(posts)
    .where(eq(posts.id, id))
    .limit(1);
  if (!post) notFound();

  const faq = Array.isArray(post.faq)
    ? post.faq.filter((item) => item && item.question && item.answer)
    : [];

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div className="space-y-1">
        <Link href="/admin" className="text-xs font-semibold text-emerald-700 hover:text-emerald-900">
          ← Retour aux articles
        </Link>
        <h1 className="font-heading text-xl font-bold text-gray-900">{post.title}</h1>
        <p className="text-xs text-gray-500">
          Adresse : /actualites/{post.slug}
          {post.publishedAt ? (
            <>
              {" · "}
              <a
                href={`/actualites/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-emerald-700 hover:text-emerald-900"
              >
                Voir l&apos;article en ligne
              </a>
            </>
          ) : (
            " · brouillon"
          )}
        </p>
        <p className="text-xs text-gray-400">
          L&apos;adresse ne change jamais ici (une adresse modifiée casserait les liens existants).
          Le titre et la description SEO se modifient depuis la liste des articles.
        </p>
      </div>
      <EditArticleForm
        postId={post.id}
        title={post.title}
        excerpt={post.excerpt || ""}
        content={post.content}
        faq={faq}
      />
    </div>
  );
}
