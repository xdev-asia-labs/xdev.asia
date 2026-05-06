---
id: 019d8b40-h104-7001-b009-vuenuxt000104
title: 第 4 課：指令、渲染圖和範本參考
slug: bai-4-directives-rendering-va-template-refs
description: >-
  v-if、v-for、v-show、v-bind、v-on。自訂指令。模板參考，nextTick。渲染函數，JSX。傳送、懸疑、KeepAlive。動態/非同步組件。
duration_minutes: 100
is_free: true
video_url: null
sort_order: 4
section_title: 第 1 部分：Vue.js 基礎知識
course:
  id: 019d8b40-h100-7001-b009-vuenuxt000001
  title: Vue.js 和 Nuxt：從基礎到高級
  slug: vuejs-nuxt-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2098" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2098)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1085" cy="285" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="1070" cy="110" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="1055" cy="195" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="1040" cy="280" r="13" fill="#fb923c" opacity="0.05"/>
    <circle cx="1025" cy="105" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="155" x2="1100" y2="235" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="185" x2="1050" y2="255" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="980.9807621135332,140 980.9807621135332,170 955,185 929.0192378864668,170 929.0192378864668,140 955,125" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">💻 程式設計 — 第 4 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 4 課：指令、渲染圖和模板</tspan>
      <tspan x="60" dy="42">參考文獻</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Vue.js 和 Nuxt：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：Vue.js 基礎知識</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-directives"><strong>1. 內建指令</strong></h2>

<pre><code class="language-vue">&lt;template&gt;
  &lt;!-- v-show vs v-if --&gt;
  &lt;div v-show="isVisible"&gt;Toggle display (CSS)&lt;/div&gt;
  &lt;div v-if="isLoggedIn"&gt;Welcome!&lt;/div&gt;
  &lt;div v-else&gt;Please login&lt;/div&gt;

  &lt;!-- v-for with key --&gt;
  &lt;div v-for="(item, index) in items" :key="item.id"&gt;
    {{ index }}: {{ item.name }}
  &lt;/div&gt;

  &lt;!-- v-bind shorthand --&gt;
  &lt;div :class="{ active: isActive, 'text-bold': isBold }"&gt;...&lt;/div&gt;
  &lt;div :style="{ color: textColor, fontSize: size + 'px' }"&gt;...&lt;/div&gt;
  &lt;component v-bind="dynamicProps" /&gt;

  &lt;!-- v-on modifiers --&gt;
  &lt;form @submit.prevent="handleSubmit"&gt;...&lt;/form&gt;
  &lt;button @click.stop="handleClick"&gt;Stop propagation&lt;/button&gt;
  &lt;input @keydown.enter.exact="submit" /&gt;
  &lt;div @click.self="handleSelf"&gt;Only direct clicks&lt;/div&gt;
&lt;/template&gt;
</code></pre>

<h2 id="2-custom-directives"><strong>2. 自訂指令</strong></h2>

<pre><code class="language-ts">// directives/vFocus.ts
import type { Directive } from 'vue'

export const vFocus: Directive = {
  mounted(el: HTMLElement) {
    el.focus()
  },
}

// directives/vClickOutside.ts
export const vClickOutside: Directive = {
  mounted(el, binding) {
    el._clickOutside = (event: Event) => {
      if (!el.contains(event.target as Node)) {
        binding.value(event)
      }
    }
    document.addEventListener('click', el._clickOutside)
  },
  unmounted(el) {
    document.removeEventListener('click', el._clickOutside)
  },
}
</code></pre>

<pre><code class="language-vue">&lt;script setup lang="ts"&gt;
import { vFocus } from '@/directives/vFocus'
import { vClickOutside } from '@/directives/vClickOutside'

function closeDropdown() {
  isOpen.value = false
}
&lt;/script&gt;

&lt;template&gt;
  &lt;input v-focus placeholder="Auto focused" /&gt;
  &lt;div v-click-outside="closeDropdown"&gt;Dropdown content&lt;/div&gt;
&lt;/template&gt;
</code></pre>

<h2 id="3-template-refs"><strong>3. 模板參考</strong></h2>

<pre><code class="language-vue">&lt;script setup lang="ts"&gt;
import { ref, onMounted, nextTick } from 'vue'

const inputRef = ref&lt;HTMLInputElement | null&gt;(null)
const containerRef = ref&lt;HTMLDivElement | null&gt;(null)

onMounted(() => {
  inputRef.value?.focus()
})

async function addItem() {
  items.value.push(newItem)
  // DOM chưa update — cần nextTick
  await nextTick()
  containerRef.value?.scrollTo({ top: containerRef.value.scrollHeight })
}
&lt;/script&gt;

&lt;template&gt;
  &lt;input ref="inputRef" /&gt;
  &lt;div ref="containerRef" class="scroll-container"&gt;...&lt;/div&gt;
&lt;/template&gt;
</code></pre>

<h2 id="4-teleport"><strong>4. 傳送</strong></h2>

<pre><code class="language-vue">&lt;!-- Modal.vue — render outside component tree --&gt;
&lt;script setup lang="ts"&gt;
defineProps&lt;{ isOpen: boolean }&gt;()
defineEmits&lt;{ (e: 'close'): void }&gt;()
&lt;/script&gt;

&lt;template&gt;
  &lt;Teleport to="body"&gt;
    &lt;div v-if="isOpen" class="modal-overlay" @click.self="$emit('close')"&gt;
      &lt;div class="modal-content"&gt;
        &lt;slot /&gt;
        &lt;button @click="$emit('close')"&gt;Đóng&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/Teleport&gt;
&lt;/template&gt;
</code></pre>

<h2 id="5-keep-alive"><strong>5. KeepAlive 和動態組件</strong></h2>

<pre><code class="language-vue">&lt;script setup lang="ts"&gt;
import { shallowRef } from 'vue'
import TabA from './TabA.vue'
import TabB from './TabB.vue'
import TabC from './TabC.vue'

const currentTab = shallowRef(TabA)
const tabs = [
  { label: 'Tab A', component: TabA },
  { label: 'Tab B', component: TabB },
  { label: 'Tab C', component: TabC },
]
&lt;/script&gt;

&lt;template&gt;
  &lt;div class="tabs"&gt;
    &lt;button
      v-for="tab in tabs"
      :key="tab.label"
      @click="currentTab = tab.component"
    &gt;
      {{ tab.label }}
    &lt;/button&gt;
  &lt;/div&gt;

  &lt;!-- KeepAlive caches component state --&gt;
  &lt;KeepAlive :max="5"&gt;
    &lt;component :is="currentTab" /&gt;
  &lt;/KeepAlive&gt;
&lt;/template&gt;
</code></pre>

<h2 id="6-suspense"><strong>6. 懸念</strong></h2>

<pre><code class="language-vue">&lt;template&gt;
  &lt;Suspense&gt;
    &lt;template #default&gt;
      &lt;AsyncComponent /&gt;
    &lt;/template&gt;
    &lt;template #fallback&gt;
      &lt;div&gt;Loading...&lt;/div&gt;
    &lt;/template&gt;
  &lt;/Suspense&gt;
&lt;/template&gt;
</code></pre>

<p>下一篇： <strong>Vue 路由器深入探究</strong> — 路由、守衛、延遲載入。</p>
