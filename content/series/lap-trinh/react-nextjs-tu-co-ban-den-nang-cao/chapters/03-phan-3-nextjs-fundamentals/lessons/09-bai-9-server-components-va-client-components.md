---
id: 019d8b40-d302-7001-b005-reactnx000302
title: 'Bài 9: Server Components & Client Components'
slug: bai-9-server-components-va-client-components
description: >-
  React Server Components (RSC), "use client" directive. Server vs Client
  component boundaries. Streaming, Suspense, loading states.
  Composition patterns.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 9
section_title: "Phần 3: Next.js Fundamentals"
course:
  id: 019d8b40-d100-7001-b005-reactnx000001
  title: 'React & Next.js: Từ Cơ bản đến Nâng cao'
  slug: react-nextjs-tu-co-ban-den-nang-cao
---

<h2 id="1-server-vs-client"><strong>1. Server Components vs Client Components</strong></h2>

<table>
<thead><tr><th>Feature</th><th>Server Component (default)</th><th>Client Component ("use client")</th></tr></thead>
<tbody>
<tr><td>Rendering</td><td>Server only</td><td>Server (SSR) + Client (hydration)</td></tr>
<tr><td>JavaScript bundle</td><td>0 KB (no JS sent)</td><td>Included in bundle</td></tr>
<tr><td>Data fetching</td><td>Direct DB/API access</td><td>useEffect, TanStack Query</td></tr>
<tr><td>State/Effects</td><td>❌ No useState/useEffect</td><td>✅ Full hooks support</td></tr>
<tr><td>Event handlers</td><td>❌ No onClick, onChange</td><td>✅ Full event support</td></tr>
<tr><td>Browser APIs</td><td>❌ No window, document</td><td>✅ Full browser access</td></tr>
<tr><td>Secrets/env</td><td>✅ Safe to use</td><td>❌ Exposed to client</td></tr>
</tbody>
</table>

<h2 id="2-khi-nao-dung"><strong>2. Khi nào dùng gì?</strong></h2>

<pre><code class="language-text">Server Component (default):     Client Component ("use client"):
✅ Static content               ✅ useState, useEffect
✅ Data fetching                 ✅ onClick, onChange
✅ Access database/API           ✅ Browser APIs
✅ Sensitive logic               ✅ Custom hooks with state
✅ Large dependencies            ✅ Third-party libs (charts, editors)
</code></pre>

<h2 id="3-patterns"><strong>3. Composition Patterns</strong></h2>

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

<h2 id="4-streaming-suspense"><strong>4. Streaming & Suspense</strong></h2>

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

<h2 id="5-serialization"><strong>5. Serialization Rules</strong></h2>

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

<p>Bài tiếp theo: <strong>Data Fetching & Caching</strong> — server-side fetching, ISR, revalidation, và caching strategies.</p>
