---
id: 019d8b40-d303-7001-b005-reactnx000303
title: 第 10 課：資料取得與快取
slug: bai-10-data-fetching-va-caching
description: 伺服器端資料獲取，fetch API 快取。靜態與動態渲染，ISR。並行資料取得、瀑布預防。不穩定_緩存，重新驗證。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 10
section_title: 第 3 部分：Next.js 基礎知識
course:
  id: 019d8b40-d100-7001-b005-reactnx000001
  title: React 和 Next.js：從基礎到高級
  slug: react-nextjs-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6251" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6251)"/>

  <!-- Decorations -->
  <g>
    <circle cx="790" cy="220" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="980" cy="110" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="670" cy="260" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="860" cy="150" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1050" cy="40" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="120" x2="1100" y2="200" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="150" x2="1050" y2="220" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="950.3108891324554,102.5 950.3108891324554,137.5 920,155 889.6891108675446,137.5 889.6891108675446,102.50000000000001 920,85" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">💻 程式設計 — 第 10 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 10 課：資料取得與快取</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">React 和 Next.js：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：Next.js 基礎知識</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-server-data-fetching"><strong>1. 服務端資料獲取</strong></h2>

<pre><code class="language-tsx">// Async Server Component — fetch directly
export default async function PostsPage() {
  const posts = await fetch('https://api.example.com/posts', {
    next: { revalidate: 3600 }, // ISR: revalidate every hour
  }).then(res => res.json());

  return (
    &lt;div&gt;
      {posts.map((post: Post) => (
        &lt;PostCard key={post.id} post={post} /&gt;
      ))}
    &lt;/div&gt;
  );
}
</code></pre>

<h2 id="2-caching-strategies"><strong>2. 快取策略</strong></h2>

<pre><code class="language-tsx">// Static (cached forever until redeployed)
const data = await fetch('https://api.example.com/data', {
  cache: 'force-cache', // Default behavior
});

// Dynamic (no cache, fresh every request)
const data = await fetch('https://api.example.com/data', {
  cache: 'no-store',
});

// ISR (revalidate after N seconds)
const data = await fetch('https://api.example.com/data', {
  next: { revalidate: 60 }, // Revalidate every 60 seconds
});

// Tag-based revalidation
const data = await fetch('https://api.example.com/posts', {
  next: { tags: ['posts'] },
});

// Revalidate by tag (from Server Action or Route Handler)
import { revalidateTag, revalidatePath } from 'next/cache';
revalidateTag('posts');       // Invalidate all fetches with 'posts' tag
revalidatePath('/blog');      // Invalidate specific path
</code></pre>

<h2 id="3-parallel-fetching"><strong>3. 並行資料獲取</strong></h2>

<pre><code class="language-tsx">// ❌ Waterfall — sequential fetching
export default async function Dashboard() {
  const user = await fetchUser();        // 500ms
  const orders = await fetchOrders();    // 500ms
  const analytics = await fetchAnalytics(); // 500ms
  // Total: 1500ms 😱
}

// ✅ Parallel — concurrent fetching
export default async function Dashboard() {
  const [user, orders, analytics] = await Promise.all([
    fetchUser(),        // 500ms
    fetchOrders(),      // 500ms ← concurrent
    fetchAnalytics(),   // 500ms ← concurrent
  ]);
  // Total: 500ms 🚀
}

// ✅ Streaming — each section loads independently
export default function Dashboard() {
  return (
    &lt;div&gt;
      &lt;Suspense fallback={&lt;Skeleton /&gt;}&gt;
        &lt;UserInfo /&gt;
      &lt;/Suspense&gt;
      &lt;Suspense fallback={&lt;Skeleton /&gt;}&gt;
        &lt;OrderList /&gt;
      &lt;/Suspense&gt;
      &lt;Suspense fallback={&lt;Skeleton /&gt;}&gt;
        &lt;Analytics /&gt;
      &lt;/Suspense&gt;
    &lt;/div&gt;
  );
}
</code></pre>

<h2 id="4-database-direct"><strong>4. 直接資料庫訪問</strong></h2>

<pre><code class="language-tsx">import { db } from '@/lib/db';

// Truy vấn database trực tiếp trong Server Component
async function UserList() {
  const users = await db.user.findMany({
    where: { isActive: true },
    orderBy: { createdAt: 'desc' },
    take: 10,
  });

  return (
    &lt;ul&gt;
      {users.map(user =&gt; (
        &lt;li key={user.id}&gt;{user.name}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}
</code></pre>

<h2 id="5-unstable-cache"><strong>5.不穩定緩存</strong></h2>

<pre><code class="language-tsx">import { unstable_cache } from 'next/cache';

const getCachedUser = unstable_cache(
  async (userId: string) => {
    return db.user.findUnique({ where: { id: userId } });
  },
  ['user'], // Cache key prefix
  {
    revalidate: 3600, // 1 hour
    tags: ['user'],   // Tag for manual revalidation
  }
);

// Usage in Server Component
export default async function Profile({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const user = await getCachedUser(id);

  return &lt;div&gt;{user?.name}&lt;/div&gt;;
}
</code></pre>

<h2 id="6-static-vs-dynamic"><strong>6. 靜態渲染與動態渲染</strong></h2>

<table>
<thead><tr><th>渲染</th><th>當</th><th>快取</th></tr></thead>
<tbody>
<tr><td>靜態</td><td>沒有動態數據，沒有 cookie/標頭</td><td>建置時間、CDN</td></tr>
<tr><td>動態</td><td>cookies(), headers(), searchParams</td><td>請求時間</td></tr>
<tr><td>情報監視與偵察</td><td>靜態+重新驗證</td><td>建置時間+定期刷新</td></tr>
</tbody>
</table>

<pre><code class="language-tsx">// Force dynamic rendering
export const dynamic = 'force-dynamic';
// Or: export const revalidate = 0;

// Force static
export const dynamic = 'force-static';
</code></pre>

<p>下一篇： <strong>伺服器操作和突變</strong> —“使用伺服器”，表單操作，樂觀更新。</p>
