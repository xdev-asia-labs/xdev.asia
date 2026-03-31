---
id: 019d8b40-d303-7001-b005-reactnx000303
title: 'Bài 10: Data Fetching & Caching'
slug: bai-10-data-fetching-va-caching
description: >-
  Server-side data fetching, fetch API caching. Static vs dynamic rendering,
  ISR. Parallel data fetching, waterfall prevention.
  unstable_cache, revalidation.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 10
section_title: "Phần 3: Next.js Fundamentals"
course:
  id: 019d8b40-d100-7001-b005-reactnx000001
  title: 'React & Next.js: Từ Cơ bản đến Nâng cao'
  slug: react-nextjs-tu-co-ban-den-nang-cao
---

<h2 id="1-server-data-fetching"><strong>1. Server-side Data Fetching</strong></h2>

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

<h2 id="2-caching-strategies"><strong>2. Caching Strategies</strong></h2>

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

<h2 id="3-parallel-fetching"><strong>3. Parallel Data Fetching</strong></h2>

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

<h2 id="4-database-direct"><strong>4. Direct Database Access</strong></h2>

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

<h2 id="5-unstable-cache"><strong>5. unstable_cache</strong></h2>

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

<h2 id="6-static-vs-dynamic"><strong>6. Static vs Dynamic Rendering</strong></h2>

<table>
<thead><tr><th>Rendering</th><th>Khi nào</th><th>Cache</th></tr></thead>
<tbody>
<tr><td>Static</td><td>No dynamic data, no cookies/headers</td><td>Build time, CDN</td></tr>
<tr><td>Dynamic</td><td>cookies(), headers(), searchParams</td><td>Request time</td></tr>
<tr><td>ISR</td><td>Static + revalidate</td><td>Build time + periodic refresh</td></tr>
</tbody>
</table>

<pre><code class="language-tsx">// Force dynamic rendering
export const dynamic = 'force-dynamic';
// Or: export const revalidate = 0;

// Force static
export const dynamic = 'force-static';
</code></pre>

<p>Bài tiếp theo: <strong>Server Actions & Mutations</strong> — "use server", form actions, optimistic updates.</p>
