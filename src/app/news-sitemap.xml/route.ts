export const dynamic = "force-static";

import { getAllPosts } from "@/lib/data";
import { localizedPath, LOCALES, type Locale } from "@/lib/i18n/config";

const SITE_URL = "https://xdev.asia";
const NEWS_LANGUAGE: Record<Locale, string> = {
  vi: "vi",
  en: "en",
  ja: "ja",
  "zh-tw": "zh-TW",
};

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  // Google News sitemap should only include articles from the last 2 days
  const twoDaysAgo = new Date();
  twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

  const recentLocalizedPosts = LOCALES.flatMap((locale) =>
    getAllPosts(locale)
      .filter((post) => {
        if (!post.published_at) return false;
        return new Date(post.published_at) >= twoDaysAgo;
      })
      .map((post) => ({ locale, post }))
  )
    .sort(
      (a, b) =>
        new Date(b.post.published_at || 0).getTime() -
        new Date(a.post.published_at || 0).getTime()
    )
    // Google News sitemap limit: 1000 URLs.
    .slice(0, 1000);

  const urlEntries = recentLocalizedPosts
    .map(({ locale, post }) => {
      const pubDate = post.published_at
        ? new Date(post.published_at).toISOString()
        : new Date().toISOString();
      const loc = `${SITE_URL}${localizedPath(locale, `/blog/${post.slug}/`)}`;

      return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <news:news>
      <news:publication>
        <news:name>xDev Asia</news:name>
        <news:language>${NEWS_LANGUAGE[locale]}</news:language>
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
