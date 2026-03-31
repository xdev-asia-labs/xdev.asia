---
id: 019d8b40-h301-7001-b009-vuenuxt000301
title: 'Bài 9: Nuxt 3 & File-based Routing'
slug: bai-9-nuxt-3-va-file-based-routing
description: >-
  Nuxt 3 overview, auto-imports, file-based routing. Layouts, pages,
  error handling. nuxt.config.ts, runtime config. Nuxt DevTools.
  Directory structure.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 9
section_title: "Phần 3: Nuxt 3 Fundamentals"
course:
  id: 019d8b40-h100-7001-b009-vuenuxt000001
  title: 'Vue.js & Nuxt: Từ Cơ bản đến Nâng cao'
  slug: vuejs-nuxt-tu-co-ban-den-nang-cao
---

<h2 id="1-setup"><strong>1. Tạo Nuxt 3 Project</strong></h2>

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

<p>Bài tiếp theo: <strong>Data Fetching & SSR</strong> — useFetch, useAsyncData, rendering modes.</p>
