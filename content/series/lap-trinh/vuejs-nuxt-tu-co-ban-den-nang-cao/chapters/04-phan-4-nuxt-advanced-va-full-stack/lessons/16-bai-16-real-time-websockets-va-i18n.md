---
id: 019d8b40-h404-7001-b009-vuenuxt000404
title: 'Bài 16: Real-time, WebSockets & i18n'
slug: bai-16-real-time-websockets-va-i18n
description: >-
  WebSocket integration, Socket.IO. Server-Sent Events, polling.
  @nuxtjs/i18n, locale routing, message formatting. @nuxt/content
  cho CMS. PWA support.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 16
section_title: "Phần 4: Nuxt Advanced & Full-Stack"
course:
  id: 019d8b40-h100-7001-b009-vuenuxt000001
  title: 'Vue.js & Nuxt: Từ Cơ bản đến Nâng cao'
  slug: vuejs-nuxt-tu-co-ban-den-nang-cao
---

<h2 id="1-sse"><strong>1. Server-Sent Events</strong></h2>

<pre><code class="language-ts">// server/api/events.get.ts
export default defineEventHandler(async (event) => {
  setResponseHeaders(event, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
  })

  const body = new ReadableStream({
    start(controller) {
      const encoder = new TextEncoder()
      const interval = setInterval(() => {
        const data = JSON.stringify({ time: new Date().toISOString() })
        controller.enqueue(encoder.encode(`data: ${data}\n\n`))
      }, 3000)

      event.node.req.on('close', () => {
        clearInterval(interval)
        controller.close()
      })
    },
  })

  return new Response(body)
})
</code></pre>

<pre><code class="language-vue">&lt;!-- Composable for SSE --&gt;
&lt;script setup lang="ts"&gt;
const messages = ref&lt;string[]&gt;([])

onMounted(() => {
  const source = new EventSource('/api/events')
  source.onmessage = (event) => {
    messages.value.push(JSON.parse(event.data))
  }
  onUnmounted(() => source.close())
})
&lt;/script&gt;
</code></pre>

<h2 id="2-websocket"><strong>2. WebSocket với Nitro</strong></h2>

<pre><code class="language-ts">// server/routes/_ws.ts (Nitro experimental WebSocket)
export default defineWebSocketHandler({
  open(peer) {
    console.log('Connected:', peer.id)
    peer.subscribe('chat')
  },
  message(peer, message) {
    const data = JSON.parse(message.text())
    peer.publish('chat', JSON.stringify({
      user: peer.id,
      text: data.text,
      timestamp: new Date().toISOString(),
    }))
  },
  close(peer) {
    console.log('Disconnected:', peer.id)
  },
})
</code></pre>

<pre><code class="language-ts">// nuxt.config.ts — enable experimental WebSocket
export default defineNuxtConfig({
  nitro: {
    experimental: {
      websocket: true,
    },
  },
})
</code></pre>

<h2 id="3-i18n"><strong>3. @nuxtjs/i18n</strong></h2>

<pre><code class="language-bash">npx nuxi module add @nuxtjs/i18n
</code></pre>

<pre><code class="language-ts">// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n'],
  i18n: {
    locales: [
      { code: 'vi', name: 'Tiếng Việt', file: 'vi.json' },
      { code: 'en', name: 'English', file: 'en.json' },
    ],
    defaultLocale: 'vi',
    langDir: 'locales/',
    strategy: 'prefix_except_default', // /en/about, /about (vi)
  },
})
</code></pre>

<pre><code class="language-json">// locales/vi.json
{
  "nav": {
    "home": "Trang chủ",
    "blog": "Blog",
    "about": "Giới thiệu"
  },
  "welcome": "Chào mừng {name}!",
  "items": "Không có item | 1 item | {count} items"
}
</code></pre>

<pre><code class="language-vue">&lt;script setup lang="ts"&gt;
const { t, locale, locales, setLocale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
&lt;/script&gt;

&lt;template&gt;
  &lt;nav&gt;
    &lt;NuxtLink :to="localePath('/')"&gt;{{ t('nav.home') }}&lt;/NuxtLink&gt;
    &lt;NuxtLink :to="localePath('/blog')"&gt;{{ t('nav.blog') }}&lt;/NuxtLink&gt;
  &lt;/nav&gt;

  &lt;p&gt;{{ t('welcome', { name: 'Duy' }) }}&lt;/p&gt;
  &lt;p&gt;{{ t('items', 5) }}&lt;/p&gt;

  &lt;!-- Language switcher --&gt;
  &lt;div&gt;
    &lt;NuxtLink
      v-for="loc in locales"
      :key="loc.code"
      :to="switchLocalePath(loc.code)"
    &gt;
      {{ loc.name }}
    &lt;/NuxtLink&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre>

<h2 id="4-nuxt-content"><strong>4. @nuxt/content</strong></h2>

<pre><code class="language-bash">npx nuxi module add @nuxt/content
</code></pre>

<pre><code class="language-vue">&lt;!-- pages/blog/[...slug].vue --&gt;
&lt;script setup lang="ts"&gt;
const route = useRoute()
const { data: page } = await useAsyncData(
  route.path,
  () => queryContent(route.path).findOne()
)
&lt;/script&gt;

&lt;template&gt;
  &lt;article&gt;
    &lt;h1&gt;{{ page?.title }}&lt;/h1&gt;
    &lt;ContentRenderer :value="page!" /&gt;
  &lt;/article&gt;
&lt;/template&gt;
</code></pre>

<p>Bài tiếp theo: <strong>Animations & Transitions</strong> — Vue Transition, GSAP, page transitions.</p>
