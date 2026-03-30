export const dynamic = "force-static";

import { getAllPosts, getAllSeries, getSettings } from "@/lib/data";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const settings = getSettings();
  const siteUrl = settings.site_url || "https://xdev.asia";
  const siteName = settings.site_name || "xDev Asia";
  const siteDescription = settings.site_description || "";

  const posts = getAllPosts();
  const series = getAllSeries();

  // Combine and sort by published_at
  const items = [
    ...posts.map((post) => ({
      title: post.title,
      link: `${siteUrl}/blog/${post.slug}/`,
      description: post.excerpt || "",
      pubDate: post.published_at
        ? new Date(post.published_at).toUTCString()
        : new Date().toUTCString(),
      category: post.category?.name || "",
      author: post.author?.name || "",
    })),
    ...series.map((s) => ({
      title: s.title,
      link: `${siteUrl}/series/${s.category?.slug || "uncategorized"}/${s.slug}/`,
      description: s.description || "",
      pubDate: s.published_at
        ? new Date(s.published_at).toUTCString()
        : new Date().toUTCString(),
      category: s.category?.name || "",
      author: s.author?.name || "",
    })),
  ].sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

  const rssItems = items
    .map(
      (item) => `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${escapeXml(item.link)}</link>
      <description>${escapeXml(item.description)}</description>
      <pubDate>${item.pubDate}</pubDate>${item.category ? `\n      <category>${escapeXml(item.category)}</category>` : ""}${item.author ? `\n      <dc:creator>${escapeXml(item.author)}</dc:creator>` : ""}
      <guid isPermaLink="true">${escapeXml(item.link)}</guid>
    </item>`
    )
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(siteName)}</title>
    <link>${escapeXml(siteUrl)}</link>
    <description>${escapeXml(siteDescription)}</description>
    <language>vi</language>
    <atom:link href="${escapeXml(siteUrl)}/feed.xml/" rel="self" type="application/rss+xml"/>
${rssItems}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
