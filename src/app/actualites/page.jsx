import ActualitesView from "./ActualitesView";
import { getPosts } from "../../lib/actualites";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Guides de prospection et croissance B2B | Suzali Conseil",
  description:
    "Consultez nos guides pratiques sur la prospection commerciale, la génération de leads, l’automatisation et la croissance des entreprises B2B.",
  path: "/actualites",
});

export default async function ActualitesPage() {
  let posts = [];
  try {
    posts = await getPosts();
  } catch (error) {
    console.error("Failed to fetch posts for server component:", error);
  }
  return <ActualitesView posts={posts} />;
}
