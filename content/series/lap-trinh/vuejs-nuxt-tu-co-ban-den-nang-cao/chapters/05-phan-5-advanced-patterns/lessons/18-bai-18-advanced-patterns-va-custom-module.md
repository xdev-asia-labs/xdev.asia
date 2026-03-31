---
id: 019d8b40-h502-7001-b009-vuenuxt000502
title: 'Bài 18: Advanced Patterns & Custom Module'
slug: bai-18-advanced-patterns-va-custom-module
description: >-
  Renderless components, higher-order components. Vue virtual DOM,
  render functions. Creating Nuxt modules, kit utilities.
  Nuxt layers, extending Nuxt applications.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 18
section_title: "Phần 5: Advanced Patterns"
course:
  id: 019d8b40-h100-7001-b009-vuenuxt000001
  title: 'Vue.js & Nuxt: Từ Cơ bản đến Nâng cao'
  slug: vuejs-nuxt-tu-co-ban-den-nang-cao
---

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

<p>Bài tiếp theo: <strong>Testing Vue & Nuxt</strong> — Vitest, Vue Test Utils, Playwright.</p>
