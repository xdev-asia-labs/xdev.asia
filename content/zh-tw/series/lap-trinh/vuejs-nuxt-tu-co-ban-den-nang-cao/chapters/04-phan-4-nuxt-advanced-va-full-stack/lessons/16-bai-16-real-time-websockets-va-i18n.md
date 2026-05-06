---
id: 019d8b40-h404-7001-b009-vuenuxt000404
title: 第 16 課：即時、WebSocket 和 i18n
slug: bai-16-real-time-websockets-va-i18n
description: >-
  WebSocket 集成，Socket.IO。伺服器發送的事件，輪詢。 @nuxtjs/i18n，區域設定路由，訊息格式。 @nuxt/CMS 的內容。
  PWA 支援。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 16
section_title: 第 4 部分：Nuxt 高級和全端
course:
  id: 019d8b40-h100-7001-b009-vuenuxt000001
  title: Vue.js 和 Nuxt：從基礎到高級
  slug: vuejs-nuxt-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8474" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8474)"/>

  <!-- Decorations -->
  <g>
    <circle cx="723" cy="39" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="846" cy="42" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="969" cy="45" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="1092" cy="48" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="715" cy="51" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="229" x2="1100" y2="309" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="259" x2="1050" y2="329" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="967.1051177665153,107 967.1051177665153,151 929,173 890.8948822334847,151 890.8948822334847,107.00000000000001 929,85" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">💻 程式設計 — 第 16 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 16 課：即時、WebSocket 和 i18n</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Vue.js 和 Nuxt：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：Nuxt 高級和全端</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-sse"><strong>1. 伺服器發送的事件</strong></h2>

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

<h2 id="2-websocket"><strong>2.帶有 Nitro 的 WebSocket</strong></h2>

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

<h2 id="3-i18n"><strong>3.@nuxtjs/i18n</strong></h2>

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

<h2 id="4-nuxt-content"><strong>4.@nuxt/內容</strong></h2>

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

<p>下一篇： <strong>動畫和過渡</strong> — Vue 轉換、GSAP、頁面轉換。</p>
