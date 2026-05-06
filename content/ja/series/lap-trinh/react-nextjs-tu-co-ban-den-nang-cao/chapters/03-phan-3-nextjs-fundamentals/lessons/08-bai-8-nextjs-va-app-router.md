---
id: 019d8b40-d301-7001-b005-reactnx000301
title: 'レッスン 8: Next.js と App Router'
slug: bai-8-nextjs-va-app-router
description: >-
  Next.js とは何か、なぜ Next.js
  を使用するのか。アプリルーターとページルーター。ファイルベースのルーティング、レイアウト、テンプレート、読み込み、エラー境界。標準的なプロジェクト構造。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 8
section_title: 'パート 3: Next.js の基礎'
course:
  id: 019d8b40-d100-7001-b005-reactnx000001
  title: 'React と Next.js: 基本から高度まで'
  slug: react-nextjs-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-518" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-518)"/>

  <!-- Decorations -->
  <g>
    <circle cx="930" cy="100" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="760" cy="210" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1090" cy="60" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="920" cy="170" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="280" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="240" x2="1100" y2="320" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="270" x2="1050" y2="340" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1070.3108891324553,222.5 1070.3108891324553,257.5 1040,275 1009.6891108675446,257.5 1009.6891108675446,222.5 1040,205" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">💻 プログラミング — レッスン 8</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 8: Next.js と App Router</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">React と Next.js: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: Next.js の基礎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-nextjs-la-gi"><strong>1. Next.js とは何ですか?</strong></h2>

<p>Next.js は実稼働用の React フレームワークであり、SSR、SSG、ファイルベースのルーティング、API ルート、その他多くのすぐに使用できる機能を提供します。ヴェルセル社が開発した。</p>

<table>
<thead><tr><th>特長</th><th>反応 (ヴァイト)</th><th>Next.js</th></tr></thead>
<tbody>
<tr><td>レンダリング</td><td>クライアント側のみ</td><td>SSR、SSG、ISR、ストリーミング</td></tr>
<tr><td>ルーティング</td><td>React Router (マニュアル)</td><td>ファイルベース (組み込み)</td></tr>
<tr><td>SEO</td><td>悪い (SPA)</td><td>優秀(SSR/SSG)</td></tr>
<tr><td>API</td><td>個別のバックエンド</td><td>ルート ハンドラー (組み込み)</td></tr>
<tr><td>画像・フォント</td><td>手動による最適化</td><td>次/画像、次/フォント</td></tr>
<tr><td>導入</td><td>任意の静的ホスト</td><td>Vercel、Docker、任意の Node.js ホスト</td></tr>
</tbody>
</table>

<h2 id="2-setup"><strong>2. セットアップ</strong></h2>

<pre><code class="language-bash">npx create-next-app@latest my-app --typescript --tailwind --app --src-dir
cd my-app
npm run dev
</code></pre>

<h2 id="3-app-router"><strong>3. App Router — ファイルベースのルーティング</strong></h2>

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

<h2 id="4-layouts"><strong>4. レイアウト</strong></h2>

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

<h2 id="5-pages"><strong>5. ページ</strong></h2>

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

<h2 id="6-loading-error"><strong>6. 読み込みとエラー UI</strong></h2>

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

<h2 id="7-navigation"><strong>7. ナビゲーション</strong></h2>

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

<p>次の記事: <strong>サーバーコンポーネントとクライアントコンポーネント</strong> — RSC、「クライアントの使用」、境界、および構成パターン。</p>
