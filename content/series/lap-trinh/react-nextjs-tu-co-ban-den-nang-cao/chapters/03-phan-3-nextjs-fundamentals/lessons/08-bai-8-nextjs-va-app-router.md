---
id: 019d8b40-d301-7001-b005-reactnx000301
title: 'Bài 8: Next.js & App Router'
slug: bai-8-nextjs-va-app-router
description: >-
  Next.js là gì, tại sao dùng Next.js. App Router vs Pages Router.
  File-based routing, layouts, templates, loading, error boundaries.
  Project structure chuẩn.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 8
section_title: "Phần 3: Next.js Fundamentals"
course:
  id: 019d8b40-d100-7001-b005-reactnx000001
  title: 'React & Next.js: Từ Cơ bản đến Nâng cao'
  slug: react-nextjs-tu-co-ban-den-nang-cao
---

<h2 id="1-nextjs-la-gi"><strong>1. Next.js là gì?</strong></h2>

<p>Next.js là React framework cho production, cung cấp SSR, SSG, file-based routing, API routes, và nhiều tính năng khác out-of-the-box. Được phát triển bởi Vercel.</p>

<table>
<thead><tr><th>Feature</th><th>React (Vite)</th><th>Next.js</th></tr></thead>
<tbody>
<tr><td>Rendering</td><td>Client-side only</td><td>SSR, SSG, ISR, Streaming</td></tr>
<tr><td>Routing</td><td>React Router (manual)</td><td>File-based (built-in)</td></tr>
<tr><td>SEO</td><td>Poor (SPA)</td><td>Excellent (SSR/SSG)</td></tr>
<tr><td>API</td><td>Separate backend</td><td>Route Handlers (built-in)</td></tr>
<tr><td>Image/Font</td><td>Manual optimization</td><td>next/image, next/font</td></tr>
<tr><td>Deployment</td><td>Any static host</td><td>Vercel, Docker, any Node.js host</td></tr>
</tbody>
</table>

<h2 id="2-setup"><strong>2. Setup</strong></h2>

<pre><code class="language-bash">npx create-next-app@latest my-app --typescript --tailwind --app --src-dir
cd my-app
npm run dev
</code></pre>

<h2 id="3-app-router"><strong>3. App Router — File-based Routing</strong></h2>

<pre><code class="language-text">src/app/
├── layout.tsx          ← Root layout (required)
├── page.tsx            ← Home page (/)
├── loading.tsx         ← Loading UI
├── error.tsx           ← Error UI
├── not-found.tsx       ← 404 page
├── globals.css
│
├── about/
│   └── page.tsx        ← /about
│
├── blog/
│   ├── page.tsx        ← /blog
│   └── [slug]/
│       └── page.tsx    ← /blog/:slug (dynamic)
│
├── dashboard/
│   ├── layout.tsx      ← Nested layout
│   ├── page.tsx        ← /dashboard
│   ├── settings/
│   │   └── page.tsx    ← /dashboard/settings
│   └── [...catchAll]/
│       └── page.tsx    ← /dashboard/anything/else
│
└── (marketing)/        ← Route group (no URL segment)
    ├── layout.tsx
    ├── pricing/
    │   └── page.tsx    ← /pricing
    └── features/
        └── page.tsx    ← /features
</code></pre>

<h2 id="4-layouts"><strong>4. Layouts</strong></h2>

<pre><code class="language-tsx">// src/app/layout.tsx — Root Layout
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: { default: 'My App', template: '%s | My App' },
  description: 'My awesome Next.js application',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    &lt;html lang="vi"&gt;
      &lt;body className={inter.className}&gt;
        &lt;Header /&gt;
        &lt;main&gt;{children}&lt;/main&gt;
        &lt;Footer /&gt;
      &lt;/body&gt;
    &lt;/html&gt;
  );
}

// src/app/dashboard/layout.tsx — Nested Layout
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    &lt;div className="flex"&gt;
      &lt;Sidebar /&gt;
      &lt;div className="flex-1"&gt;{children}&lt;/div&gt;
    &lt;/div&gt;
  );
}
</code></pre>

<h2 id="5-pages"><strong>5. Pages</strong></h2>

<pre><code class="language-tsx">// src/app/page.tsx — Home page
export default function HomePage() {
  return &lt;h1&gt;Welcome to My App&lt;/h1&gt;;
}

// src/app/blog/[slug]/page.tsx — Dynamic route
interface Props {
  params: Promise&lt;{ slug: string }&gt;;
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound(); // → not-found.tsx

  return (
    &lt;article&gt;
      &lt;h1&gt;{post.title}&lt;/h1&gt;
      &lt;div dangerouslySetInnerHTML={{ __html: post.content }} /&gt;
    &lt;/article&gt;
  );
}

// Generate static params for SSG
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map(post =&gt; ({ slug: post.slug }));
}
</code></pre>

<h2 id="6-loading-error"><strong>6. Loading & Error UI</strong></h2>

<pre><code class="language-tsx">// src/app/dashboard/loading.tsx
export default function Loading() {
  return &lt;div className="animate-pulse"&gt;Loading dashboard...&lt;/div&gt;;
}

// src/app/dashboard/error.tsx
'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () =&gt; void;
}) {
  useEffect(() =&gt; {
    console.error(error);
  }, [error]);

  return (
    &lt;div&gt;
      &lt;h2&gt;Something went wrong!&lt;/h2&gt;
      &lt;button onClick={reset}&gt;Try again&lt;/button&gt;
    &lt;/div&gt;
  );
}
</code></pre>

<h2 id="7-navigation"><strong>7. Navigation</strong></h2>

<pre><code class="language-tsx">import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

// Link component (prefetching built-in)
&lt;Link href="/about"&gt;About&lt;/Link&gt;
&lt;Link href={`/blog/${post.slug}`}&gt;{post.title}&lt;/Link&gt;
&lt;Link href="/dashboard" prefetch={false}&gt;Dashboard&lt;/Link&gt;

// Programmatic navigation
'use client';
function SearchForm() {
  const router = useRouter();
  const pathname = usePathname();

  const handleSubmit = (query: string) =&gt; {
    router.push(`/search?q=${query}`);
    // router.replace('/dashboard'); // Replace history
    // router.back(); // Go back
    // router.refresh(); // Re-fetch server components
  };
}
</code></pre>

<p>Bài tiếp theo: <strong>Server Components & Client Components</strong> — RSC, "use client", boundaries, và composition patterns.</p>
