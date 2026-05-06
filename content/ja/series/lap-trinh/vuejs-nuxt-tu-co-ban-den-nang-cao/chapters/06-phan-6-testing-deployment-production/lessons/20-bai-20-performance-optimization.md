---
id: 019d8b40-h602-7001-b009-vuenuxt000602
title: 'レッスン 20: パフォーマンスの最適化'
slug: bai-20-performance-optimization
description: >-
  バンドル分析、ツリーシェイク。コード分​​割、コンポーネントの遅延読み込み。ペイロードの最適化、キャッシュ戦略。 Vue DevTools のパフォーマンス
  タブ。ライトハウス、コアウェブバイタル。
duration_minutes: 100
is_free: true
video_url: null
sort_order: 20
section_title: 'パート 6: テスト、展開、実稼働'
course:
  id: 019d8b40-h100-7001-b009-vuenuxt000001
  title: 'Vue.js と Nuxt: 基本から高度まで'
  slug: vuejs-nuxt-tu-co-ban-den-nang-cao
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">💻 プログラミング — レッスン 20</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 20: パフォーマンスの最適化</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Vue.js と Nuxt: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 6: テスト、展開、実稼働</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-bundle-analysis"><strong>1. バンドル分析</strong></h2>

<pre><code class="language-ts">// nuxt.config.ts
export default defineNuxtConfig({
  build: {
    analyze: true, // Bật webpack-bundle-analyzer
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor-ui': ['@headlessui/vue', '@heroicons/vue'],
            'vendor-charts': ['chart.js', 'vue-chartjs'],
          },
        },
      },
    },
  },
})
</code></pre>

<pre><code class="language-bash"># Phân tích bundle
npx nuxi analyze

# Kiểm tra bundle size
npx nuxi build --analyze
</code></pre>

<h2 id="2-lazy-components"><strong>2. コンポーネントの遅延読み込み</strong></h2>

<pre><code class="language-vue">&lt;script setup&gt;
// Lazy load component — tự động code-split
const HeavyChart = defineAsyncComponent(() =>
  import('~/components/HeavyChart.vue')
)

// Nuxt auto-import: prefix "Lazy"
// &lt;LazyHeavyChart /&gt; sẽ tự code-split
&lt;/script&gt;

&lt;template&gt;
  &lt;div&gt;
    &lt;!-- Chỉ load khi visible --&gt;
    &lt;LazyHeavyChart v-if="showChart" /&gt;

    &lt;!-- Lazy load với Suspense --&gt;
    &lt;Suspense&gt;
      &lt;template #default&gt;
        &lt;HeavyChart :data="chartData" /&gt;
      &lt;/template&gt;
      &lt;template #fallback&gt;
        &lt;div class="skeleton h-64"&gt;&lt;/div&gt;
      &lt;/template&gt;
    &lt;/Suspense&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre>

<h2 id="3-image-optimization"><strong>3. 画像の最適化</strong></h2>

<pre><code class="language-vue">&lt;template&gt;
  &lt;!-- Nuxt Image — tự động optimize --&gt;
  &lt;NuxtImg
    src="/images/hero.jpg"
    width="800"
    height="400"
    format="webp"
    quality="80"
    loading="lazy"
    placeholder
    sizes="sm:100vw md:50vw lg:800px"
  /&gt;

  &lt;!-- NuxtPicture — responsive format --&gt;
  &lt;NuxtPicture
    src="/images/banner.jpg"
    format="avif,webp"
    :img-attrs="{ class: 'rounded-lg' }"
  /&gt;
&lt;/template&gt;
</code></pre>

<h2 id="4-payload-optimization"><strong>4. ペイロードの最適化</strong></h2>

<pre><code class="language-ts">// Giảm payload size khi SSR
export default defineNuxtConfig({
  experimental: {
    payloadExtraction: true, // Tách payload riêng file
  },
})

// composables/useOptimizedFetch.ts
export function useOptimizedFetch&lt;T&gt;(url: string) {
  return useFetch&lt;T&gt;(url, {
    // Chỉ pick fields cần thiết
    transform: (data: any[]) => data.map(({ id, title, slug }) => ({
      id, title, slug,
    })),
    // Cache key để deduplicate
    key: url,
  })
}
</code></pre>

<h2 id="5-caching"><strong>5. キャッシュ戦略</strong></h2>

<pre><code class="language-ts">// server/api/products.get.ts — Route caching
export default defineCachedEventHandler(async (event) => {
  const products = await db.select().from(productsTable)
  return products
}, {
  maxAge: 60 * 10,      // Cache 10 phút
  staleMaxAge: 60 * 60, // Stale 1 giờ
  swr: true,            // Stale-while-revalidate
  name: 'products-list',
  getKey: (event) => getQuery(event).category as string || 'all',
})

// nuxt.config.ts — ISR
export default defineNuxtConfig({
  routeRules: {
    '/': { isr: 60 },
    '/blog/**': { isr: 3600 },
    '/api/**': { cors: true, headers: { 'cache-control': 'max-age=60' } },
    '/admin/**': { ssr: false },
  },
})
</code></pre>

<h2 id="6-core-web-vitals"><strong>6. 主要なウェブの重要事項</strong></h2>

<table>
<thead><tr><th>メトリック</th><th>良い</th><th>最適なテクニック</th></tr></thead>
<tbody>
<tr><td>LCP</td><td>< 2.5秒</td><td>ヒーロー画像、SSR、フォント表示のプリロード: 入れ替え</td></tr>
<tr><td>INP</td><td>< 200ms</td><td>入力のデバウンス、Web ワーカー、リストの仮想化</td></tr>
<tr><td>CLS</td><td>< 0.1</td><td>画像、スケルトンUIの幅/高さを設定します</td></tr>
</tbody>
</table>

<pre><code class="language-ts">// plugins/web-vitals.client.ts
import { onCLS, onINP, onLCP } from 'web-vitals'

export default defineNuxtPlugin(() => {
  onLCP(sendToAnalytics)
  onINP(sendToAnalytics)
  onCLS(sendToAnalytics)
})

function sendToAnalytics(metric: any) {
  navigator.sendBeacon('/api/analytics/vitals', JSON.stringify({
    name: metric.name,
    value: metric.value,
    id: metric.id,
  }))
}
</code></pre>

<h2 id="7-virtual-scroll"><strong>7. 仮想スクロール</strong></h2>

<pre><code class="language-vue">&lt;script setup&gt;
import { useVirtualList } from '@vueuse/core'

const allItems = ref(Array.from({ length: 10000 }, (_, i) => ({
  id: i,
  title: `Item ${i}`,
})))

const { list, containerProps, wrapperProps } = useVirtualList(allItems, {
  itemHeight: 48,
  overscan: 10,
})
&lt;/script&gt;

&lt;template&gt;
  &lt;div v-bind="containerProps" class="h-96 overflow-auto"&gt;
    &lt;div v-bind="wrapperProps"&gt;
      &lt;div v-for="{ data } in list" :key="data.id" class="h-12 px-4 flex items-center"&gt;
        {{ data.title }}
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre>

<p>次の記事: <strong>導入とホスティング</strong> — Vercel、Cloudflare、Docker、CI/CD。</p>
