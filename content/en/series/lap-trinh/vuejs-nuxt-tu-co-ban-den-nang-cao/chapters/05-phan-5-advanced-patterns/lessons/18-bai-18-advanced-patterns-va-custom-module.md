---
id: 019d8b40-h502-7001-b009-vuenuxt000502
title: 'Lesson 18: Advanced Patterns & Custom Module'
slug: bai-18-advanced-patterns-va-custom-module
description: >-
  Renderless components, higher-order components. Vue virtual DOM, render
  functions. Creating Nuxt modules, kit utilities. Nuxt layers, extending Nuxt
  applications.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 18
section_title: 'Part 5: Advanced Patterns'
course:
  id: 019d8b40-h100-7001-b009-vuenuxt000001
  title: 'Vue.js & Nuxt: From Basics to Advanced'
  slug: vuejs-nuxt-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-540" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-540)"/>

  <!-- Decorations -->
  <g>
    <circle cx="804" cy="122" r="32" fill="#f472b6" opacity="0.07"/>
    <circle cx="1008" cy="66" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="712" cy="270" r="26" fill="#f472b6" opacity="0.11"/>
    <circle cx="916" cy="214" r="8" fill="#f472b6" opacity="0.13"/>
    <circle cx="620" cy="158" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="242" x2="1100" y2="322" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="272" x2="1050" y2="342" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="974.0429399400242,123.5 974.0429399400242,160.5 942,179 909.9570600599758,160.5 909.9570600599758,123.50000000000001 942,105" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">💻 Programming — Lesson 18</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 18: Advanced Patterns & Custom Module</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Vue.js & Nuxt: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 5: Advanced Patterns</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-renderless"><strong>1. Renderless Components</strong></h2>

<pre><code class="language-vue">&lt;!-- components/FetchData.vue — renderless --&gt;
&lt;script setup lang="ts" generic="T"&gt;
import { ref, watchEffect } from 'vue'

const props = defineProps&lt;{ url: string }&gt;()

const data = ref&lt;T | null&gt;(null)
const error = ref&lt;Error | null&gt;(null)
const loading = ref(true)

watchEffect(async () => {
  loading.value = true
  try {
    const res = await fetch(props.url)
    data.value = await res.json()
  } catch (e) {
    error.value = e as Error
  } finally {
    loading.value = false
  }
})
&lt;/script&gt;

&lt;template&gt;
  &lt;slot :data="data" :error="error" :loading="loading" /&gt;
&lt;/template&gt;

&lt;!-- Usage --&gt;
&lt;FetchData url="/api/users" v-slot="{ data: users, loading }"&gt;
  &lt;div v-if="loading"&gt;Loading...&lt;/div&gt;
  &lt;ul v-else&gt;
    &lt;li v-for="user in users" :key="user.id"&gt;{{ user.name }}&lt;/li&gt;
  &lt;/ul&gt;
&lt;/FetchData&gt;
</code></pre>

<h2 id="2-render-functions"><strong>2. Render Functions</strong></h2>

<pre><code class="language-ts">import { h, defineComponent } from 'vue'

// Render function component
export const DynamicHeading = defineComponent({
  props: {
    level: { type: Number, required: true, validator: (v: number) => v >= 1 && v <= 6 },
  },
  setup(props, { slots }) {
    return () => h(`h${props.level}`, {
      class: 'heading',
    }, slots.default?.())
  },
})

// Functional component
export function SmartLink(props: { href: string }, { slots }: any) {
  const isExternal = props.href.startsWith('http')

  if (isExternal) {
    return h('a', {
      href: props.href,
      target: '_blank',
      rel: 'noopener noreferrer',
    }, slots.default?.())
  }

  return h(resolveComponent('NuxtLink'), { to: props.href }, slots.default?.())
}
</code></pre>

<h2 id="3-hoc"><strong>3. Higher-Order Components</strong></h2>

<pre><code class="language-ts">// composables/withAuth.ts
import { defineComponent, h } from 'vue'

export function withAuth(WrappedComponent: any) {
  return defineComponent({
    setup(props, { attrs, slots }) {
      const { loggedIn } = useUserSession()

      return () => {
        if (!loggedIn.value) {
          return h('div', { class: 'auth-required' }, 'Vui lòng đăng nhập')
        }
        return h(WrappedComponent, { ...props, ...attrs }, slots)
      }
    },
  })
}

// Usage
const ProtectedDashboard = withAuth(Dashboard)
</code></pre>

<h2 id="4-custom-module"><strong>4. Creating Nuxt Module</strong></h2>

<pre><code class="language-ts">// modules/analytics/index.ts
import { defineNuxtModule, addPlugin, addServerHandler, createResolver } from '@nuxt/kit'

export interface ModuleOptions {
  trackingId: string
  debug?: boolean
}

export default defineNuxtModule&lt;ModuleOptions&gt;({
  meta: {
    name: 'my-analytics',
    configKey: 'analytics',
    compatibility: { nuxt: '>=3.0.0' },
  },
  defaults: {
    trackingId: '',
    debug: false,
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // Validate config
    if (!options.trackingId) {
      console.warn('[analytics] trackingId is required')
      return
    }

    // Add runtime config
    nuxt.options.runtimeConfig.public.analytics = {
      trackingId: options.trackingId,
      debug: options.debug,
    }

    // Add client plugin
    addPlugin(resolver.resolve('./runtime/plugin.client'))

    // Add server route
    addServerHandler({
      route: '/api/analytics/track',
      handler: resolver.resolve('./runtime/server/track.post'),
    })

    // Add composable
    addImports({
      name: 'useAnalytics',
      from: resolver.resolve('./runtime/composables/useAnalytics'),
    })
  },
})
</code></pre>

<h2 id="5-layers"><strong>5. Nuxt Layers</strong></h2>

<pre><code class="language-ts">// nuxt.config.ts — extend from layers
export default defineNuxtConfig({
  extends: [
    './layers/base',           // Local layer
    'github:org/shared-layer', // Remote layer
  ],
})

// layers/base/nuxt.config.ts
export default defineNuxtConfig({
  components: [{ path: './components', prefix: 'Base' }],
  css: ['./assets/base.css'],
})
</code></pre>

<p>Next article: <strong>Testing Vue & Nuxt</strong> — Vitest, Vue Test Utils, Playwright.</p>
