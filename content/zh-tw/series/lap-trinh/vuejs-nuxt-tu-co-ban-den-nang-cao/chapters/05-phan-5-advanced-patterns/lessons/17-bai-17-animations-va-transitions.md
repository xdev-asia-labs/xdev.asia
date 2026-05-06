---
id: 019d8b40-h501-7001-b009-vuenuxt000501
title: 第 17 課：動畫與過渡
slug: bai-17-animations-va-transitions
description: Vue 過渡，過渡組。頁面轉換、佈局轉換。 GSAP、Motion One 整合。查看轉換 API。滾動驅動的動畫。
duration_minutes: 100
is_free: true
video_url: null
sort_order: 17
section_title: 第 5 部分：進階模式
course:
  id: 019d8b40-h100-7001-b009-vuenuxt000001
  title: Vue.js 和 Nuxt：從基礎到高級
  slug: vuejs-nuxt-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-642" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-642)"/>

  <!-- Decorations -->
  <g>
    <circle cx="794" cy="252" r="32" fill="#f472b6" opacity="0.07"/>
    <circle cx="988" cy="66" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="682" cy="140" r="26" fill="#f472b6" opacity="0.11"/>
    <circle cx="876" cy="214" r="8" fill="#f472b6" opacity="0.13"/>
    <circle cx="1070" cy="288" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="112" x2="1100" y2="192" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="142" x2="1050" y2="212" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="935.3826859021799,98.5 935.3826859021799,125.5 912,139 888.6173140978201,125.5 888.6173140978201,98.5 912,85" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">💻 程式設計 — 第 17 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 17 課：動畫與過渡</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Vue.js 和 Nuxt：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：進階模式</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-transition"><strong>1.Vue 過渡</strong></h2>

<pre><code class="language-vue">&lt;script setup lang="ts"&gt;
const isVisible = ref(true)
&lt;/script&gt;

&lt;template&gt;
  &lt;button @click="isVisible = !isVisible"&gt;Toggle&lt;/button&gt;

  &lt;Transition name="fade"&gt;
    &lt;div v-if="isVisible" class="box"&gt;Fade content&lt;/div&gt;
  &lt;/Transition&gt;

  &lt;Transition name="slide" mode="out-in"&gt;
    &lt;div :key="currentTab"&gt;{{ currentTab }}&lt;/div&gt;
  &lt;/Transition&gt;
&lt;/template&gt;

&lt;style&gt;
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.slide-enter-active, .slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from {
  transform: translateX(30px);
  opacity: 0;
}
.slide-leave-to {
  transform: translateX(-30px);
  opacity: 0;
}
&lt;/style&gt;
</code></pre>

<h2 id="2-transition-group"><strong>2. 過渡組</strong></h2>

<pre><code class="language-vue">&lt;script setup lang="ts"&gt;
const items = ref([1, 2, 3, 4, 5])

function addItem() {
  const num = Math.max(...items.value) + 1
  items.value.splice(Math.floor(Math.random() * items.value.length), 0, num)
}

function removeItem(item: number) {
  items.value = items.value.filter(i => i !== item)
}
&lt;/script&gt;

&lt;template&gt;
  &lt;button @click="addItem"&gt;Add&lt;/button&gt;
  &lt;TransitionGroup name="list" tag="ul"&gt;
    &lt;li v-for="item in items" :key="item" @click="removeItem(item)"&gt;
      {{ item }}
    &lt;/li&gt;
  &lt;/TransitionGroup&gt;
&lt;/template&gt;

&lt;style&gt;
.list-enter-active, .list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from, .list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.list-move {
  transition: transform 0.5s ease;
}
.list-leave-active {
  position: absolute;
}
&lt;/style&gt;
</code></pre>

<h2 id="3-page-transitions"><strong>3. 頁面轉換（Nuxt）</strong></h2>

<pre><code class="language-ts">// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
})
</code></pre>

<pre><code class="language-css">/* assets/css/transitions.css */
.page-enter-active, .page-leave-active {
  transition: all 0.3s;
}
.page-enter-from, .page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.layout-enter-active, .layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from, .layout-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</code></pre>

<pre><code class="language-vue">&lt;!-- Per-page custom transition --&gt;
&lt;script setup lang="ts"&gt;
definePageMeta({
  pageTransition: {
    name: 'rotate',
    mode: 'out-in',
  },
})
&lt;/script&gt;
</code></pre>

<h2 id="4-gsap"><strong>4.GSAP集成</strong></h2>

<pre><code class="language-vue">&lt;script setup lang="ts"&gt;
import gsap from 'gsap'

const boxRef = ref&lt;HTMLElement | null&gt;(null)

onMounted(() => {
  if (boxRef.value) {
    gsap.from(boxRef.value, {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: 'power3.out',
    })
  }
})

// Stagger animation
function animateList() {
  gsap.from('.list-item', {
    y: 50,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: 'power2.out',
  })
}
&lt;/script&gt;

&lt;template&gt;
  &lt;div ref="boxRef" class="box"&gt;Animated box&lt;/div&gt;
&lt;/template&gt;
</code></pre>

<h2 id="5-view-transitions"><strong>5.視圖轉換API</strong></h2>

<pre><code class="language-ts">// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    viewTransition: true, // Enable View Transitions API
  },
})
</code></pre>

<pre><code class="language-vue">&lt;template&gt;
  &lt;!-- Assign transition name --&gt;
  &lt;img
    :src="post.image"
    :style="{ viewTransitionName: `post-image-${post.id}` }"
  /&gt;
  &lt;h1 :style="{ viewTransitionName: `post-title-${post.id}` }"&gt;
    {{ post.title }}
  &lt;/h1&gt;
&lt;/template&gt;
</code></pre>

<p>下一篇： <strong>進階模式和自訂模組</strong> — 無渲染、渲染函數、自訂模組。</p>
