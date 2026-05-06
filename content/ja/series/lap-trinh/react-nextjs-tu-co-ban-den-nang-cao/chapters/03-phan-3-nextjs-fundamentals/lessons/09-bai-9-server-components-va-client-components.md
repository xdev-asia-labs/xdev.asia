---
id: 019d8b40-d302-7001-b005-reactnx000302
title: 'レッスン 9: サーバー コンポーネントとクライアント コンポーネント'
slug: bai-9-server-components-va-client-components
description: >-
  React Server Components
  (RSC)、「クライアントを使用する」ディレクティブ。サーバーとクライアントのコンポーネントの境界。ストリーミング、サスペンス、読み込み状態。構成パターン。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 9
section_title: 'パート 3: Next.js の基礎'
course:
  id: 019d8b40-d100-7001-b005-reactnx000001
  title: 'React と Next.js: 基本から高度まで'
  slug: react-nextjs-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2791" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2791)"/>

  <!-- Decorations -->
  <g>
    <circle cx="878" cy="104" r="16" fill="#fbbf24" opacity="0.09"/>
    <circle cx="656" cy="42" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="934" cy="240" r="24" fill="#fbbf24" opacity="0.07"/>
    <circle cx="712" cy="178" r="28" fill="#fbbf24" opacity="0.11"/>
    <circle cx="990" cy="116" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="244" x2="1100" y2="324" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="274" x2="1050" y2="344" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1027.7749907475932,174.5 1027.7749907475932,213.5 994,233 960.2250092524068,213.5 960.2250092524068,174.5 994,155" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">💻 プログラミング — レッスン 9</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 9: サーバー コンポーネントとクライアント</tspan>
      <tspan x="60" dy="42">コンポーネント</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">React と Next.js: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: Next.js の基礎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-server-vs-client"><strong>1. サーバーコンポーネントとクライアントコンポーネント</strong></h2>

<table>
<thead><tr><th>特長</th><th>サーバーコンポーネント (デフォルト)</th><th>クライアントコンポーネント (「クライアントを使用する」)</th></tr></thead>
<tbody>
<tr><td>レンダリング</td><td>サーバーのみ</td><td>サーバー(SSR) + クライアント(ハイドレーション)</td></tr>
<tr><td>JavaScript バンドル</td><td>0 KB (JS は送信されません)</td><td>バンドルに含まれるもの</td></tr>
<tr><td>データの取得</td><td>DB/APIへの直接アクセス</td><td>useEffect、TanStack クエリ</td></tr>
<tr><td>状態/効果</td><td>❌ useState/useEffect なし</td><td>✅ フルフックサポート</td></tr>
<tr><td>イベントハンドラー</td><td>❌ onClick、onChange はありません</td><td>✅ イベントのフルサポート</td></tr>
<tr><td>ブラウザAPI</td><td>❌ 窓や書類がない</td><td>✅ フルブラウザアクセス</td></tr>
<tr><td>シークレット/環境</td><td>✅ 安全に使用できます</td><td>❌ クライアントに公開される</td></tr>
</tbody>
</table>

<h2 id="2-khi-nao-dung"><strong>2. いつ何を使用するのですか?</strong></h2>

<pre><code class="language-text">Server Component (default):     Client Component ("use client"):
✅ Static content               ✅ useState, useEffect
✅ Data fetching                 ✅ onClick, onChange
✅ Access database/API           ✅ Browser APIs
✅ Sensitive logic               ✅ Custom hooks with state
✅ Large dependencies            ✅ Third-party libs (charts, editors)
</code></pre>

<h2 id="3-patterns"><strong>3. 構成パターン</strong></h2>

<pre><code class="language-tsx">// ✅ Pattern 1: Server Component wraps Client Component
// app/dashboard/page.tsx (Server Component)
import { InteractiveChart } from './InteractiveChart';

export default async function Dashboard() {
  const data = await fetchAnalytics(); // Server-side data fetching

  return (
    &lt;div&gt;
      &lt;h1&gt;Dashboard&lt;/h1&gt;
      &lt;InteractiveChart data={data} /&gt; {/* Pass serializable data */}
    &lt;/div&gt;
  );
}

// InteractiveChart.tsx
'use client';
export function InteractiveChart({ data }: { data: ChartData[] }) {
  const [filter, setFilter] = useState('all');
  // Interactive client-side logic
  return &lt;div&gt;{/* chart */}&lt;/div&gt;;
}
</code></pre>

<pre><code class="language-tsx">// ✅ Pattern 2: Children pattern (Server inside Client)
// ClientLayout.tsx
'use client';
export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    &lt;div className="flex"&gt;
      &lt;Sidebar open={sidebarOpen} onToggle={() =&gt; setSidebarOpen(!sidebarOpen)} /&gt;
      &lt;main&gt;{children}&lt;/main&gt; {/* children can be Server Components! */}
    &lt;/div&gt;
  );
}

// page.tsx (Server Component)
import { ClientLayout } from './ClientLayout';

export default async function Page() {
  const data = await fetchData(); // Server-side

  return (
    &lt;ClientLayout&gt;
      &lt;ServerContent data={data} /&gt; {/* Server component as children */}
    &lt;/ClientLayout&gt;
  );
}
</code></pre>

<pre><code class="language-tsx">// ❌ Anti-pattern: Importing Server Component INTO Client Component
'use client';
import ServerComponent from './ServerComponent'; // ⚠️ Becomes client component!

// ✅ Fix: Pass as children or props
</code></pre>

<h2 id="4-streaming-suspense"><strong>4. ストリーミングとサスペンス</strong></h2>

<pre><code class="language-tsx">import { Suspense } from 'react';

export default function Dashboard() {
  return (
    &lt;div&gt;
      &lt;h1&gt;Dashboard&lt;/h1&gt;

      {/* Mỗi Suspense boundary stream independently */}
      &lt;Suspense fallback={&lt;CardSkeleton /&gt;}&gt;
        &lt;RevenueChart /&gt; {/* Async server component */}
      &lt;/Suspense&gt;

      &lt;Suspense fallback={&lt;TableSkeleton /&gt;}&gt;
        &lt;RecentOrders /&gt; {/* Async server component */}
      &lt;/Suspense&gt;

      &lt;Suspense fallback={&lt;ListSkeleton /&gt;}&gt;
        &lt;TopProducts /&gt; {/* Async server component */}
      &lt;/Suspense&gt;
    &lt;/div&gt;
  );
}

// Async Server Component
async function RevenueChart() {
  const data = await fetchRevenue(); // Can take 2-3 seconds
  return &lt;Chart data={data} /&gt;;
}

async function RecentOrders() {
  const orders = await fetchRecentOrders(); // Independent fetch
  return &lt;OrderTable orders={orders} /&gt;;
}
</code></pre>

<h2 id="5-serialization"><strong>5. シリアル化ルール</strong></h2>

<pre><code class="language-tsx">// Server → Client props must be serializable:
// ✅ string, number, boolean, null, undefined
// ✅ Array, plain Object
// ✅ Date (serialized as string)
// ❌ Functions (cannot pass onClick from server)
// ❌ Class instances
// ❌ Symbols
// ❌ DOM nodes

// ✅ OK
&lt;ClientComponent data={jsonData} count={42} /&gt;

// ❌ Error
&lt;ClientComponent onClick={() =&gt; {}} ref={myRef} /&gt;
</code></pre>

<p>次の記事: <strong>データのフェッチとキャッシュ</strong> — サーバー側のフェッチ、ISR、再検証、およびキャッシュ戦略。</p>
