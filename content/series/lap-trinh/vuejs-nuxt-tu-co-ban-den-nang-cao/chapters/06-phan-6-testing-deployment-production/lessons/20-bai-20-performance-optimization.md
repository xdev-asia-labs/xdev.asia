---
id: 019d8b40-h602-7001-b009-vuenuxt000602
title: 'Bài 20: Performance Optimization'
slug: bai-20-performance-optimization
description: >-
  Bundle analysis, tree shaking. Code splitting, component lazy loading.
  Payload optimization, caching strategies. Vue DevTools performance tab.
  Lighthouse, Core Web Vitals.
duration_minutes: 100
is_free: true
video_url: null
sort_order: 20
section_title: "Phần 6: Testing, Deployment & Production"
course:
  id: 019d8b40-h100-7001-b009-vuenuxt000001
  title: 'Vue.js & Nuxt: Từ Cơ bản đến Nâng cao'
  slug: vuejs-nuxt-tu-co-ban-den-nang-cao
---

<h2 id="1-bundle-analysis"><strong>1. Bundle Analysis</strong></h2>

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

<h2 id="2-lazy-components"><strong>2. Lazy Loading Components</strong></h2>

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

<h2 id="3-image-optimization"><strong>3. Image Optimization</strong></h2>

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

<h2 id="4-payload-optimization"><strong>4. Payload Optimization</strong></h2>

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

<h2 id="5-caching"><strong>5. Caching Strategies</strong></h2>

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

<h2 id="6-core-web-vitals"><strong>6. Core Web Vitals</strong></h2>

<table>
<thead><tr><th>Metric</th><th>Tốt</th><th>Kỹ thuật tối ưu</th></tr></thead>
<tbody>
<tr><td>LCP</td><td>&lt; 2.5s</td><td>Preload hero image, SSR, font-display: swap</td></tr>
<tr><td>INP</td><td>&lt; 200ms</td><td>Debounce input, web workers, virtualize lists</td></tr>
<tr><td>CLS</td><td>&lt; 0.1</td><td>Set width/height trên img, skeleton UI</td></tr>
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

<h2 id="7-virtual-scroll"><strong>7. Virtual Scrolling</strong></h2>

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

<p>Bài tiếp theo: <strong>Deployment & Hosting</strong> — Vercel, Cloudflare, Docker, CI/CD.</p>
