---
id: 019d8b40-d404-7001-b005-reactnx000404
title: 'Bài 15: Internationalization & SEO'
slug: bai-15-internationalization-va-seo
description: >-
  Next.js i18n routing, next-intl. Dynamic metadata API.
  OpenGraph, Twitter cards. JSON-LD structured data.
  Sitemap, robots.txt generation.
duration_minutes: 100
is_free: true
video_url: null
sort_order: 15
section_title: "Phần 4: Next.js Advanced"
course:
  id: 019d8b40-d100-7001-b005-reactnx000001
  title: 'React & Next.js: Từ Cơ bản đến Nâng cao'
  slug: react-nextjs-tu-co-ban-den-nang-cao
---

<h2 id="1-i18n-routing"><strong>1. i18n Routing</strong></h2>

<pre><code class="language-ts">// middleware.ts
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: ['/', '/(vi|en)/:path*'],
};
</code></pre>

<pre><code class="language-ts">// i18n/routing.ts
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['vi', 'en'],
  defaultLocale: 'vi',
});
</code></pre>

<pre><code class="language-ts">// i18n/request.ts
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
</code></pre>

<h2 id="2-translations"><strong>2. Translation Files</strong></h2>

<pre><code class="language-json">// messages/vi.json
{
  "HomePage": {
    "title": "Chào mừng đến với website",
    "description": "Nền tảng học lập trình"
  },
  "Navigation": {
    "home": "Trang chủ",
    "blog": "Blog",
    "about": "Giới thiệu"
  }
}
</code></pre>

<pre><code class="language-tsx">// Sử dụng trong component
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    &lt;div&gt;
      &lt;h1&gt;{t('title')}&lt;/h1&gt;
      &lt;p&gt;{t('description')}&lt;/p&gt;
    &lt;/div&gt;
  );
}
</code></pre>

<h2 id="3-metadata"><strong>3. Dynamic Metadata API</strong></h2>

<pre><code class="language-tsx">import type { Metadata } from 'next';

// Static metadata
export const metadata: Metadata = {
  title: 'Trang chủ | xDev',
  description: 'Nền tảng học lập trình',
  openGraph: {
    title: 'xDev',
    description: 'Nền tảng học lập trình',
    images: ['/images/og-image.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'xDev',
    description: 'Nền tảng học lập trình',
    images: ['/images/og-image.jpg'],
  },
};

// Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: Promise&lt;{ slug: string }&gt;;
}): Promise&lt;Metadata&gt; {
  const { slug } = await params;
  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.image],
      type: 'article',
      publishedTime: post.createdAt,
      authors: [post.author.name],
    },
  };
}
</code></pre>

<h2 id="4-json-ld"><strong>4. JSON-LD Structured Data</strong></h2>

<pre><code class="language-tsx">export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.createdAt,
    author: {
      '@type': 'Person',
      name: post.author.name,
    },
  };

  return (
    &lt;&gt;
      &lt;script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      /&gt;
      &lt;article&gt;
        &lt;h1&gt;{post.title}&lt;/h1&gt;
      &lt;/article&gt;
    &lt;/&gt;
  );
}
</code></pre>

<h2 id="5-sitemap"><strong>5. Sitemap & Robots</strong></h2>

<pre><code class="language-ts">// app/sitemap.ts
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise&lt;MetadataRoute.Sitemap&gt; {
  const posts = await db.post.findMany({
    where: { published: true },
    select: { slug: true, updatedAt: true },
  });

  return [
    { url: 'https://xdev.asia', lastModified: new Date(), priority: 1 },
    { url: 'https://xdev.asia/blog', lastModified: new Date(), priority: 0.8 },
    ...posts.map(post => ({
      url: `https://xdev.asia/blog/${post.slug}`,
      lastModified: post.updatedAt,
      priority: 0.6,
    })),
  ];
}

// app/robots.ts
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: '/api/' },
    ],
    sitemap: 'https://xdev.asia/sitemap.xml',
  };
}
</code></pre>

<p>Bài tiếp theo: <strong>File Upload & Image Optimization</strong> — upload files, next/image, responsive images.</p>
