---
id: 019d8b40-h304-7001-b009-vuenuxt000304
title: 'Bài 12: Middleware, Plugins & Modules'
slug: bai-12-middleware-plugins-va-modules
description: >-
  Route middleware, server middleware. Nuxt plugins, lifecycle.
  Nuxt modules ecosystem (@nuxtjs/i18n, @nuxt/image, @nuxt/content).
  Custom module development.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 12
section_title: "Phần 3: Nuxt 3 Fundamentals"
course:
  id: 019d8b40-h100-7001-b009-vuenuxt000001
  title: 'Vue.js & Nuxt: Từ Cơ bản đến Nâng cao'
  slug: vuejs-nuxt-tu-co-ban-den-nang-cao
---

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
<thead><tr><th>Module</th><th>Chức năng</th></tr></thead>
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

<h2 id="4-custom-module"><strong>4. Custom Module</strong></h2>

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

<p>Bài tiếp theo: <strong>Authentication & Authorization</strong> — OAuth, session, RBAC.</p>
