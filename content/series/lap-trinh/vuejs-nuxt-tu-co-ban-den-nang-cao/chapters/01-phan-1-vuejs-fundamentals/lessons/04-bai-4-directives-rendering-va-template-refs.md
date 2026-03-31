---
id: 019d8b40-h104-7001-b009-vuenuxt000104
title: 'Bài 4: Directives, Rendering & Template Refs'
slug: bai-4-directives-rendering-va-template-refs
description: >-
  v-if, v-for, v-show, v-bind, v-on. Custom directives. Template refs,
  nextTick. Render functions, JSX. Teleport, Suspense, KeepAlive.
  Dynamic/async components.
duration_minutes: 100
is_free: true
video_url: null
sort_order: 4
section_title: "Phần 1: Vue.js Fundamentals"
course:
  id: 019d8b40-h100-7001-b009-vuenuxt000001
  title: 'Vue.js & Nuxt: Từ Cơ bản đến Nâng cao'
  slug: vuejs-nuxt-tu-co-ban-den-nang-cao
---

<h2 id="1-directives"><strong>1. Built-in Directives</strong></h2>

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

<h2 id="2-custom-directives"><strong>2. Custom Directives</strong></h2>

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

<h2 id="3-template-refs"><strong>3. Template Refs</strong></h2>

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

<h2 id="4-teleport"><strong>4. Teleport</strong></h2>

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

<h2 id="5-keep-alive"><strong>5. KeepAlive & Dynamic Components</strong></h2>

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

<h2 id="6-suspense"><strong>6. Suspense</strong></h2>

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

<p>Bài tiếp theo: <strong>Vue Router Deep Dive</strong> — routing, guards, lazy loading.</p>
