---
id: 019d8b40-d602-7001-b005-reactnx000602
title: 'Lesson 20: Performance Optimization'
slug: bai-20-performance-optimization
description: >-
  Core Web Vitals optimization. React.lazy, dynamic imports. Bundle analysis,
  tree shaking. Memoization patterns. Image/font optimization, CDN strategies.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 20
section_title: 'Part 6: Testing, Deployment & Production'
course:
  id: 019d8b40-d100-7001-b005-reactnx000001
  title: 'React & Next.js: From Basics to Advanced'
  slug: react-nextjs-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1977" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1977)"/>

  <!-- Decorations -->
  <g>
    <circle cx="674" cy="232" r="32" fill="#f472b6" opacity="0.07"/>
    <circle cx="748" cy="126" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="822" cy="280" r="26" fill="#f472b6" opacity="0.11"/>
    <circle cx="896" cy="174" r="8" fill="#f472b6" opacity="0.13"/>
    <circle cx="970" cy="68" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="52" x2="1100" y2="132" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="82" x2="1050" y2="152" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1025.38268590218,188.5 1025.38268590218,215.5 1002,229 978.6173140978201,215.5 978.6173140978201,188.5 1002,175" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">💻 Programming — Lesson 20</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 20: Performance Optimization</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">React & Next.js: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 6: Testing, Deployment & Production</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-core-web-vitals"><strong>1. Core Web Vitals</strong></h2>

<table>
<thead><tr><th>Metric</th><th>Description</th><th>Good</th><th>How to improve</th></tr></thead>
<tbody>
<tr><td>LCP</td><td>Largest Contentful Paint</td><td>< 2.5s</td><td>Priority images, preload fonts</td></tr>
<tr><td>INP</td><td>Interaction to Next Paint</td><td>< 200ms</td><td>Reduce JS, use transitions</td></tr>
<tr><td>CLS</td><td>Cumulative Layout Shift</td><td>< 0.1</td><td>Set image sizes, avoid FOUT</td></tr>
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

<p>Next article: <strong>Docker & CI/CD</strong> — containerization, GitHub Actions, Vercel deployment.</p>
