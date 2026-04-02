export const dynamic = "force-static";

import { getAllPosts } from "@/lib/data";

export function GET() {
  const posts = getAllPosts().slice(0, 20);

  const items = posts.map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    featured_image: p.featured_image,
    category: p.category?.name || null,
    category_slug: p.category?.slug || null,
    published_at: p.published_at,
  }));

  return Response.json(items, {
    headers: {
      "Cache-Control": "public, max-age=3600",
    },
  });
}
