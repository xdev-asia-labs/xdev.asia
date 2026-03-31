---
id: 019d8b40-d602-7001-b005-reactnx000602
title: 'Bài 20: Performance Optimization'
slug: bai-20-performance-optimization
description: >-
  Core Web Vitals optimization. React.lazy, dynamic imports.
  Bundle analysis, tree shaking. Memoization patterns.
  Image/font optimization, CDN strategies.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 20
section_title: "Phần 6: Testing, Deployment & Production"
course:
  id: 019d8b40-d100-7001-b005-reactnx000001
  title: 'React & Next.js: Từ Cơ bản đến Nâng cao'
  slug: react-nextjs-tu-co-ban-den-nang-cao
---

<h2 id="1-core-web-vitals"><strong>1. Core Web Vitals</strong></h2>

<table>
<thead><tr><th>Metric</th><th>Mô tả</th><th>Good</th><th>Cách cải thiện</th></tr></thead>
<tbody>
<tr><td>LCP</td><td>Largest Contentful Paint</td><td>&lt; 2.5s</td><td>Priority images, preload fonts</td></tr>
<tr><td>INP</td><td>Interaction to Next Paint</td><td>&lt; 200ms</td><td>Reduce JS, use transitions</td></tr>
<tr><td>CLS</td><td>Cumulative Layout Shift</td><td>&lt; 0.1</td><td>Set image sizes, avoid FOUT</td></tr>
</tbody>
</table>

<h2 id="2-dynamic-import"><strong>2. Dynamic Imports & Code Splitting</strong></h2>

<pre><code class="language-tsx">import dynamic from 'next/dynamic';

// Lazy load heavy component
const CodeEditor = dynamic(() => import('@/components/CodeEditor'), {
  loading: () => &lt;div&gt;Loading editor...&lt;/div&gt;,
  ssr: false, // Client-only component
});

// Conditional dynamic import
const AdminPanel = dynamic(() => import('@/components/AdminPanel'));

export default function Page({ isAdmin }: { isAdmin: boolean }) {
  return (
    &lt;div&gt;
      &lt;CodeEditor /&gt;
      {isAdmin && &lt;AdminPanel /&gt;}
    &lt;/div&gt;
  );
}
</code></pre>

<h2 id="3-memoization"><strong>3. Memoization Patterns</strong></h2>

<pre><code class="language-tsx">import { memo, useMemo, useCallback } from 'react';

// memo — skip re-render if props unchanged
const ExpensiveList = memo(function ExpensiveList({ items }: { items: Item[] }) {
  return (
    &lt;ul&gt;
      {items.map(item =&gt; &lt;li key={item.id}&gt;{item.name}&lt;/li&gt;)}
    &lt;/ul&gt;
  );
});

// useMemo — cache expensive computation
function Dashboard({ data }: { data: number[] }) {
  const stats = useMemo(() => ({
    total: data.reduce((a, b) => a + b, 0),
    average: data.reduce((a, b) => a + b, 0) / data.length,
    max: Math.max(...data),
  }), [data]);

  return &lt;div&gt;Total: {stats.total}&lt;/div&gt;;
}

// useCallback — stable function reference
function Parent() {
  const handleClick = useCallback((id: string) => {
    console.log('Clicked:', id);
  }, []);

  return &lt;ExpensiveChild onClick={handleClick} /&gt;;
}
</code></pre>

<h2 id="4-bundle-analysis"><strong>4. Bundle Analysis</strong></h2>

<pre><code class="language-bash">npm install -D @next/bundle-analyzer
</code></pre>

<pre><code class="language-ts">// next.config.ts
import withBundleAnalyzer from '@next/bundle-analyzer';

const config = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})({
  // ...other config
});

export default config;
</code></pre>

<pre><code class="language-bash"># Analyze bundle
ANALYZE=true npm run build
</code></pre>

<h2 id="5-font-optimization"><strong>5. Font Optimization</strong></h2>

<pre><code class="language-tsx">// app/layout.tsx
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  variable: '--font-inter',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    &lt;html lang="vi" className={`${inter.variable} ${mono.variable}`}&gt;
      &lt;body className="font-sans"&gt;{children}&lt;/body&gt;
    &lt;/html&gt;
  );
}
</code></pre>

<h2 id="6-caching"><strong>6. Caching Headers</strong></h2>

<pre><code class="language-ts">// next.config.ts
const config = {
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/api/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, s-maxage=60, stale-while-revalidate=300' },
        ],
      },
    ];
  },
};
</code></pre>

<h2 id="7-react-compiler"><strong>7. React Compiler (Experimental)</strong></h2>

<pre><code class="language-ts">// next.config.ts
const config = {
  experimental: {
    reactCompiler: true, // Auto-memoize components
  },
};
</code></pre>

<p>Bài tiếp theo: <strong>Docker & CI/CD</strong> — containerization, GitHub Actions, Vercel deployment.</p>
