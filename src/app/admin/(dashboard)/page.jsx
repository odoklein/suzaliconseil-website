import { db } from "../../../lib/db";
import {
  posts,
  contentGeneratorSettings,
  leads,
  contacts,
} from "../../../db/schema";
import { desc, eq, and, gte, lte, count } from "drizzle-orm";
import AdminDashboard from "./AdminDashboard";

export default async function AdminPage({ searchParams }) {
  const sp = await searchParams;
  const page = parseInt(sp?.page || "1", 10);
  const pageSize = 10;
  const offset = (page - 1) * pageSize;

  const filters = [];
  if (sp?.source && sp.source !== "all")
    filters.push(eq(posts.source, sp.source));
  if (sp?.topic && sp.topic !== "all") filters.push(eq(posts.topic, sp.topic));
  if (sp?.startDate) filters.push(gte(posts.createdAt, new Date(sp.startDate)));
  if (sp?.endDate)
    filters.push(lte(posts.createdAt, new Date(sp.endDate + "T23:59:59")));

  // Get total filtered count
  const [countRes] = await db
    .select({ count: count() })
    .from(posts)
    .where(and(...filters));
  const totalItems = countRes?.count || 0;
  const totalPages = Math.ceil(totalItems / pageSize);

  // Get paginated posts
  const [settings] = await db.select().from(contentGeneratorSettings).limit(1);
  const allPosts = await db
    .select({
      id: posts.id,
      title: posts.title,
      slug: posts.slug,
      seoTitle: posts.seoTitle,
      seoDescription: posts.seoDescription,
      publishedAt: posts.publishedAt,
      createdAt: posts.createdAt,
      source: posts.source,
      topic: posts.topic,
    })
    .from(posts)
    .where(and(...filters))
    .orderBy(desc(posts.createdAt))
    .limit(pageSize)
    .offset(offset);

  const allLeads = await db
    .select()
    .from(leads)
    .orderBy(desc(leads.createdAt))
    .limit(100);

  const allContacts = await db
    .select()
    .from(contacts)
    .orderBy(desc(contacts.createdAt))
    .limit(100);

  return (
    <AdminDashboard
      settings={settings || null}
      posts={allPosts}
      leads={allLeads}
      contacts={allContacts}
      pagination={{
        totalItems,
        totalPages,
        currentPage: page,
        pageSize,
      }}
      currentFilters={{
        source: sp?.source || "all",
        topic: sp?.topic || "all",
        startDate: sp?.startDate || "",
        endDate: sp?.endDate || "",
      }}
    />
  );
}
