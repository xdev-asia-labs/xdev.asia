export const dynamic = "force-static";

import { getAllPosts } from "@/lib/data";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const siteUrl = "https://xdev.asia";
  const posts = getAllPosts();

  // Google News sitemap should only include articles from the last 2 days
  const twoDaysAgo = new Date();
  twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

  const recentPosts = posts.filter((post) => {
    if (!post.published_at) return false;
    return new Date(post.published_at) >= twoDaysAgo;
  });

  const urlEntries = recentPosts
    .map((post) => {
      const pubDate = post.published_at
        ? new Date(post.published_at).toISOString()
        : new Date().toISOString();

      return `  <url>
    <loc>${escapeXml(`${siteUrl}/blog/${post.slug}/`)}</loc>
    <news:news>
      <news:publication>
        <news:name>xDev Asia</news:name>
        <news:language>vi</news:language>
      </news:publication>
      <news:publication_date>${pubDate}</news:publication_date>
      <news:title>${escapeXml(post.title)}</news:title>
    </news:news>
  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${urlEntries}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
