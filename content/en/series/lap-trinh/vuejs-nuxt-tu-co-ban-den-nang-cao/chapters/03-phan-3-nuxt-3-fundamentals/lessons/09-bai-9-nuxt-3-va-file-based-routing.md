---
id: 019d8b40-h301-7001-b009-vuenuxt000301
title: 'Lesson 9: Nuxt 3 & File-based Routing'
slug: bai-9-nuxt-3-va-file-based-routing
description: >-
  Nuxt 3 overview, auto-imports, file-based routing. Layouts, pages, error
  handling. nuxt.config.ts, runtime config. Nuxt DevTools. Directory structure.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 9
section_title: 'Part 3: Nuxt 3 Fundamentals'
course:
  id: 019d8b40-h100-7001-b009-vuenuxt000001
  title: 'Vue.js & Nuxt: From Basics to Advanced'
  slug: vuejs-nuxt-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3230" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3230)"/>

  <!-- Decorations -->
  <g>
    <circle cx="800" cy="170" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1000" cy="130" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="700" cy="90" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="900" cy="50" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="600" cy="270" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="50" x2="1100" y2="130" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="80" x2="1050" y2="150" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="971.650635094611,137.5 971.650635094611,162.5 950,175 928.349364905389,162.5 928.349364905389,137.5 950,125" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">💻 Programming — Lesson 9</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 9: Nuxt 3 & File-based Routing</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Vue.js & Nuxt: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: Nuxt 3 Fundamentals</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-setup"><strong>1. Create Nuxt 3 Project</strong></h2>

<pre><code class="language-bash">npx nuxi@latest init my-nuxt-app
cd my-nuxt-app
npm install
npm run dev
</code></pre>

<h2 id="2-structure"><strong>2. Directory Structure</strong></h2>

<pre><code class="language-text">my-nuxt-app/
├── app.vue            # Root component
├── nuxt.config.ts     # Nuxt configuration
├── pages/             # File-based routing
│   ├── index.vue      # /
│   ├── about.vue      # /about
│   └── blog/
│       ├── index.vue  # /blog
│       └── [slug].vue # /blog/:slug
├── components/        # Auto-imported components
├── composables/       # Auto-imported composables
├── layouts/           # Layout components
├── middleware/         # Route middleware
├── plugins/           # Nuxt plugins
├── server/            # Server routes (Nitro)
│   ├── api/
│   └── middleware/
├── public/            # Static files
├── assets/            # Build assets
└── utils/             # Auto-imported utilities
</code></pre>

<h2 id="3-routing"><strong>3. File-based Routing</strong></h2>

<pre><code class="language-text">pages/
├── index.vue              → /
├── about.vue              → /about
├── blog/
│   ├── index.vue          → /blog
│   └── [slug].vue         → /blog/:slug
├── users/
│   ├── [id]/
│   │   ├── index.vue      → /users/:id
│   │   └── edit.vue       → /users/:id/edit
├── [[...slug]].vue        → catch-all (404)
</code></pre>

<pre><code class="language-vue">&lt;!-- pages/blog/[slug].vue --&gt;
&lt;script setup lang="ts"&gt;
const route = useRoute()
const slug = route.params.slug as string

const { data: post } = await useFetch(`/api/posts/${slug}`)
&lt;/script&gt;

&lt;template&gt;
  &lt;article v-if="post"&gt;
    &lt;h1&gt;{{ post.title }}&lt;/h1&gt;
    &lt;div v-html="post.content" /&gt;
  &lt;/article&gt;
&lt;/template&gt;
</code></pre>

<h2 id="4-layouts"><strong>4. Layouts</strong></h2>

<pre><code class="language-vue">&lt;!-- layouts/default.vue --&gt;
&lt;template&gt;
  &lt;div class="min-h-screen"&gt;
    &lt;AppHeader /&gt;
    &lt;main class="container mx-auto px-4 py-8"&gt;
      &lt;slot /&gt;
    &lt;/main&gt;
    &lt;AppFooter /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;!-- layouts/dashboard.vue --&gt;
&lt;template&gt;
  &lt;div class="flex"&gt;
    &lt;Sidebar /&gt;
    &lt;main class="flex-1 p-6"&gt;
      &lt;slot /&gt;
    &lt;/main&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;!-- pages/dashboard.vue — use specific layout --&gt;
&lt;script setup lang="ts"&gt;
definePageMeta({
  layout: 'dashboard',
})
&lt;/script&gt;
</code></pre>

<h2 id="5-config"><strong>5. nuxt.config.ts</strong></h2>

<pre><code class="language-ts">// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/image',
  ],

  runtimeConfig: {
    // Server-only (process.env)
    databaseUrl: process.env.DATABASE_URL,
    jwtSecret: process.env.JWT_SECRET,

    // Public (exposed to client)
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api',
      appName: 'My App',
    },
  },

  app: {
    head: {
      title: 'My Nuxt App',
      meta: [
        { name: 'description', content: 'Ứng dụng Nuxt 3' },
      ],
    },
  },

  compatibilityDate: '2025-01-01',
})
</code></pre>

<h2 id="6-auto-imports"><strong>6. Auto-imports</strong></h2>

<pre><code class="language-vue">&lt;script setup lang="ts"&gt;
// Không cần import — tất cả auto-imported!
const route = useRoute()           // vue-router
const config = useRuntimeConfig()  // nuxt
const { data } = await useFetch('/api/data') // nuxt

// Components trong /components/ cũng auto-imported
// Composables trong /composables/ cũng auto-imported
// Utils trong /utils/ cũng auto-imported
&lt;/script&gt;
</code></pre>

<h2 id="7-error"><strong>7. Error Handling</strong></h2>

<pre><code class="language-vue">&lt;!-- error.vue — Global error page --&gt;
&lt;script setup lang="ts"&gt;
const props = defineProps&lt;{
  error: { statusCode: number; message: string }
}&gt;()

function handleClear() {
  clearError({ redirect: '/' })
}
&lt;/script&gt;

&lt;template&gt;
  &lt;div class="text-center py-20"&gt;
    &lt;h1 class="text-6xl font-bold"&gt;{{ error.statusCode }}&lt;/h1&gt;
    &lt;p&gt;{{ error.message }}&lt;/p&gt;
    &lt;button @click="handleClear"&gt;Về trang chủ&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre>

<p>Next article: <strong>Data Fetching & SSR</strong> — useFetch, useAsyncData, rendering modes.</p>
