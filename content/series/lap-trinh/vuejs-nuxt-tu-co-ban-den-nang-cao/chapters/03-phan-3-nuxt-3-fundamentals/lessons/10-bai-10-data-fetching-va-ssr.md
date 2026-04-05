---
id: 019d8b40-h302-7001-b009-vuenuxt000302
title: 'Bài 10: Data Fetching & SSR'
slug: bai-10-data-fetching-va-ssr
description: >-
  useFetch, useAsyncData, $fetch. SSR vs CSR vs SSG vs ISR.
  Hydration, payload optimization. useLazyFetch, refresh/execute.
  Error handling, loading states.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 10
section_title: "Phần 3: Nuxt 3 Fundamentals"
course:
  id: 019d8b40-h100-7001-b009-vuenuxt000001
  title: 'Vue.js & Nuxt: Từ Cơ bản đến Nâng cao'
  slug: vuejs-nuxt-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-429" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-429)"/>

  <!-- Decorations -->
  <g>
    <circle cx="787" cy="71" r="20" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="974" cy="258" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="661" cy="185" r="32" fill="#a78bfa" opacity="0.08"/>
    <circle cx="848" cy="112" r="23" fill="#a78bfa" opacity="0.09"/>
    <circle cx="1035" cy="39" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="101" x2="1100" y2="181" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="131" x2="1050" y2="201" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="982.1769145362398,133 982.1769145362398,169 951,187 919.8230854637602,169 919.8230854637602,133 951,115" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">💻 Lập trình — Bài 10</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 10: Data Fetching &amp; SSR</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Vue.js &amp; Nuxt: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 3: Nuxt 3 Fundamentals</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-usefetch"><strong>1. useFetch</strong></h2>

<pre><code class="language-vue">&lt;script setup lang="ts"&gt;
interface Post {
  id: string
  title: string
  content: string
}

// Basic usage — SSR-friendly
const { data: posts, status, error, refresh } = await useFetch&lt;Post[]&gt;('/api/posts')

// With options
const { data: post } = await useFetch&lt;Post&gt;(`/api/posts/${slug}`, {
  pick: ['title', 'content'], // Only transfer these fields
  transform: (data) => ({
    ...data,
    title: data.title.toUpperCase(),
  }),
})

// With query params
const page = ref(1)
const { data } = await useFetch('/api/posts', {
  query: { page, limit: 10 }, // Reactive — auto-refetch
  watch: [page], // Watch for changes
})
&lt;/script&gt;

&lt;template&gt;
  &lt;div v-if="status === 'pending'"&gt;Loading...&lt;/div&gt;
  &lt;div v-else-if="error"&gt;Error: {{ error.message }}&lt;/div&gt;
  &lt;div v-else&gt;
    &lt;div v-for="post in posts" :key="post.id"&gt;{{ post.title }}&lt;/div&gt;
    &lt;button @click="refresh()"&gt;Refresh&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre>

<h2 id="2-useasyncdata"><strong>2. useAsyncData</strong></h2>

<pre><code class="language-vue">&lt;script setup lang="ts"&gt;
// Khi cần custom fetching logic
const { data: user } = await useAsyncData('user', () => {
  return $fetch('/api/user/me')
})

// Multiple parallel fetches
const [{ data: posts }, { data: categories }] = await Promise.all([
  useFetch('/api/posts'),
  useFetch('/api/categories'),
])

// Cached key — dedup requests
const { data } = await useAsyncData(
  `post-${slug}`, // Unique key
  () => $fetch(`/api/posts/${slug}`),
  { dedupe: 'cancel' } // Cancel previous request
)
&lt;/script&gt;
</code></pre>

<h2 id="3-lazy"><strong>3. Lazy Fetching</strong></h2>

<pre><code class="language-vue">&lt;script setup lang="ts"&gt;
// useLazyFetch — không block navigation, render ngay
const { data, pending } = useLazyFetch('/api/posts')

// useLazyAsyncData
const { data: comments, pending: loadingComments } = useLazyAsyncData(
  'comments',
  () => $fetch(`/api/posts/${slug}/comments`)
)
&lt;/script&gt;

&lt;template&gt;
  &lt;div&gt;
    &lt;div v-if="pending"&gt;Loading posts...&lt;/div&gt;
    &lt;div v-else v-for="post in data" :key="post.id"&gt;{{ post.title }}&lt;/div&gt;

    &lt;!-- Comments load separately --&gt;
    &lt;div v-if="loadingComments"&gt;Loading comments...&lt;/div&gt;
    &lt;div v-else v-for="c in comments" :key="c.id"&gt;{{ c.text }}&lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre>

<h2 id="4-rendering-modes"><strong>4. Rendering Modes</strong></h2>

<table>
<thead><tr><th>Mode</th><th>Mô tả</th><th>Config</th></tr></thead>
<tbody>
<tr><td>SSR</td><td>Server-side rendering (default)</td><td><code>ssr: true</code></td></tr>
<tr><td>CSR</td><td>Client-side only</td><td><code>ssr: false</code></td></tr>
<tr><td>SSG</td><td>Static site generation</td><td><code>npx nuxi generate</code></td></tr>
<tr><td>ISR</td><td>Incremental static + revalidation</td><td>Route rules</td></tr>
<tr><td>SWR</td><td>Stale-while-revalidate</td><td>Route rules</td></tr>
</tbody>
</table>

<pre><code class="language-ts">// nuxt.config.ts — Hybrid rendering
export default defineNuxtConfig({
  routeRules: {
    '/': { prerender: true },                    // SSG
    '/blog/**': { isr: 3600 },                   // ISR — revalidate 1h
    '/dashboard/**': { ssr: false },             // CSR only
    '/api/**': { cors: true },                   // API CORS
    '/admin/**': { ssr: false, robots: false },  // CSR + no index
  },
})
</code></pre>

<h2 id="5-dollar-fetch"><strong>5. $fetch — Direct HTTP</strong></h2>

<pre><code class="language-ts">// $fetch — dùng trong event handlers, không trong setup
async function deletePost(id: string) {
  await $fetch(`/api/posts/${id}`, {
    method: 'DELETE',
  })
  await refreshNuxtData('posts') // Refresh cached data
}

// POST
const result = await $fetch('/api/posts', {
  method: 'POST',
  body: { title: 'New Post', content: '...' },
})
</code></pre>

<p>Bài tiếp theo: <strong>Nitro Server Engine & API Routes</strong> — server routes, middleware, database.</p>
