---
id: 019d8b40-h304-7001-b009-vuenuxt000304
title: 'Lesson 12: Middleware, Plugins & Modules'
slug: bai-12-middleware-plugins-va-modules
description: >-
  Route middleware, server middleware. Nuxt plugins, lifecycle. Nuxt modules
  ecosystem (@nuxtjs/i18n, @nuxt/image, @nuxt/content). Custom module
  development.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 12
section_title: 'Part 3: Nuxt 3 Fundamentals'
course:
  id: 019d8b40-h100-7001-b009-vuenuxt000001
  title: 'Vue.js & Nuxt: From Basics to Advanced'
  slug: vuejs-nuxt-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6296" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6296)"/>

  <!-- Decorations -->
  <g>
    <circle cx="832" cy="286" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="1064" cy="198" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="796" cy="110" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="1028" cy="282" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="760" cy="194" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="86" x2="1100" y2="166" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="116" x2="1050" y2="186" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1021.507041555162,165.5 1021.507041555162,206.5 986,227 950.492958444838,206.5 950.492958444838,165.5 986,145" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">💻 Programming — Lesson 12</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 12: Middleware, Plugins & Modules</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Vue.js & Nuxt: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: Nuxt 3 Fundamentals</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-route-middleware"><strong>1. Route Middleware</strong></h2>

<pre><code class="language-ts">// middleware/auth.ts — named middleware
export default defineNuxtRouteMiddleware((to, from) => {
  const { loggedIn } = useUserSession()

  if (!loggedIn.value) {
    return navigateTo('/login', { redirectCode: 301 })
  }
})

// middleware/admin.ts
export default defineNuxtRouteMiddleware((to) => {
  const { user } = useUserSession()

  if (user.value?.role !== 'admin') {
    return abortNavigation({
      statusCode: 403,
      message: 'Không có quyền truy cập',
    })
  }
})
</code></pre>

<pre><code class="language-vue">&lt;!-- pages/dashboard.vue — apply middleware --&gt;
&lt;script setup lang="ts"&gt;
definePageMeta({
  middleware: ['auth'], // Named middleware
})
&lt;/script&gt;

&lt;!-- pages/admin.vue — multiple middleware --&gt;
&lt;script setup lang="ts"&gt;
definePageMeta({
  middleware: ['auth', 'admin'],
})
&lt;/script&gt;
</code></pre>

<pre><code class="language-ts">// middleware/01.global.ts — runs on every route
export default defineNuxtRouteMiddleware((to, from) => {
  console.log(`Navigate: ${from.path} → ${to.path}`)
})
</code></pre>

<h2 id="2-plugins"><strong>2. Nuxt Plugins</strong></h2>

<pre><code class="language-ts">// plugins/api.ts
export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const api = $fetch.create({
    baseURL: config.public.apiBase,
    onRequest({ options }) {
      const token = useCookie('token')
      if (token.value) {
        options.headers.set('Authorization', `Bearer ${token.value}`)
      }
    },
    onResponseError({ response }) {
      if (response.status === 401) {
        navigateTo('/login')
      }
    },
  })

  return {
    provide: {
      api, // Available as useNuxtApp().$api
    },
  }
})
</code></pre>

<pre><code class="language-ts">// plugins/dayjs.client.ts — client-only plugin
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/vi'

export default defineNuxtPlugin(() => {
  dayjs.extend(relativeTime)
  dayjs.locale('vi')

  return {
    provide: {
      dayjs,
    },
  }
})
</code></pre>

<h2 id="3-modules"><strong>3. Nuxt Modules Ecosystem</strong></h2>

<table>
<thead><tr><th>Module</th><th>Function</th></tr></thead>
<tbody>
<tr><td>@nuxtjs/tailwindcss</td><td>Tailwind CSS integration</td></tr>
<tr><td>@pinia/nuxt</td><td>Pinia state management</td></tr>
<tr><td>@nuxt/image</td><td>Image optimization</td></tr>
<tr><td>@nuxt/content</td><td>File-based CMS</td></tr>
<tr><td>@nuxtjs/i18n</td><td>Internationalization</td></tr>
<tr><td>@sidebase/nuxt-auth</td><td>Authentication</td></tr>
<tr><td>nuxt-auth-utils</td><td>OAuth helpers</td></tr>
<tr><td>@nuxt/fonts</td><td>Font optimization</td></tr>
<tr><td>@nuxt/scripts</td><td>Third-party scripts</td></tr>
</tbody>
</table>

<pre><code class="language-ts">// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/image',
    '@nuxtjs/i18n',
  ],

  i18n: {
    locales: [
      { code: 'vi', file: 'vi.json' },
      { code: 'en', file: 'en.json' },
    ],
    defaultLocale: 'vi',
    langDir: 'locales/',
  },

  image: {
    quality: 80,
    format: ['webp', 'avif'],
  },
})
</code></pre>

<h2 id="4-custom-module"><strong>4. Custom Modules</strong></h2>

<pre><code class="language-ts">// modules/analytics/index.ts
import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'my-analytics',
    configKey: 'analytics',
  },
  defaults: {
    trackingId: '',
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // Add runtime plugin
    addPlugin(resolver.resolve('./runtime/plugin'))

    // Add composable
    nuxt.options.alias['#analytics'] = resolver.resolve('./runtime/composables')
  },
})
</code></pre>

<p>Next article: <strong>Authentication & Authorization</strong> — OAuth, sessions, RBAC.</p>
