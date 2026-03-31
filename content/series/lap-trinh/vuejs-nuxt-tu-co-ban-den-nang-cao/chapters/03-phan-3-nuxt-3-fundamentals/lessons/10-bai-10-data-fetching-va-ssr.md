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
