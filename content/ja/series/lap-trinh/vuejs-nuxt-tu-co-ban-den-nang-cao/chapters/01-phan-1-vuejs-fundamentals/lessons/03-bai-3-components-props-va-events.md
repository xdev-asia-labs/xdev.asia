---
id: 019d8b40-h103-7001-b009-vuenuxt000103
title: 'レッスン 3: コンポーネント、プロップ、イベント'
slug: bai-3-components-props-va-events
description: >-
  コンポーネントの登録、プロパティの検証。 v-model、カスタム イベント、エミット。スロット
  (デフォルト、名前付き、スコープ付き)。コンポーネントのライフサイクル フックを提供/挿入します。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 3
section_title: 'パート 1: Vue.js の基礎'
course:
  id: 019d8b40-h100-7001-b009-vuenuxt000001
  title: 'Vue.js と Nuxt: 基本から高度まで'
  slug: vuejs-nuxt-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9182" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9182)"/>

  <!-- Decorations -->
  <g>
    <circle cx="920" cy="250" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="740" cy="150" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1060" cy="50" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="880" cy="210" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="700" cy="110" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="110" x2="1100" y2="190" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="140" x2="1050" y2="210" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1031.650635094611,197.5 1031.650635094611,222.5 1010,235 988.349364905389,222.5 988.349364905389,197.5 1010,185" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">💻 プログラミング — レッスン 3</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 3: コンポーネント、プロップ、イベント</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Vue.js と Nuxt: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: Vue.js の基礎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-component"><strong>1. コンポーネントの登録</strong></h2>

<pre><code class="language-vue">&lt;!-- UserCard.vue --&gt;
&lt;script setup lang="ts"&gt;
interface Props {
  name: string
  email: string
  avatar?: string
  role?: 'admin' | 'user' | 'editor'
}

const props = withDefaults(defineProps&lt;Props&gt;(), {
  role: 'user',
})
&lt;/script&gt;

&lt;template&gt;
  &lt;div class="user-card"&gt;
    &lt;img :src="props.avatar || '/default-avatar.png'" :alt="props.name" /&gt;
    &lt;h3&gt;{{ props.name }}&lt;/h3&gt;
    &lt;p&gt;{{ props.email }}&lt;/p&gt;
    &lt;span class="badge"&gt;{{ props.role }}&lt;/span&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre>

<pre><code class="language-vue">&lt;!-- Parent.vue — sử dụng component --&gt;
&lt;script setup lang="ts"&gt;
import UserCard from './UserCard.vue'
&lt;/script&gt;

&lt;template&gt;
  &lt;UserCard name="Duy Tran" email="duy@xdev.asia" role="admin" /&gt;
&lt;/template&gt;
</code></pre>

<h2 id="2-v-model"><strong>2. v-model とカスタム イベント</strong></h2>

<pre><code class="language-vue">&lt;!-- SearchInput.vue --&gt;
&lt;script setup lang="ts"&gt;
const model = defineModel&lt;string&gt;()
// Vue 3.4+ — defineModel replaces props + emit pattern

const emit = defineEmits&lt;{
  (e: 'search', query: string): void
}&gt;()

function handleSearch() {
  if (model.value) {
    emit('search', model.value)
  }
}
&lt;/script&gt;

&lt;template&gt;
  &lt;div class="search"&gt;
    &lt;input v-model="model" placeholder="Tìm kiếm..." @keydown.enter="handleSearch" /&gt;
    &lt;button @click="handleSearch"&gt;🔍&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;!-- Parent --&gt;
&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
const query = ref('')
&lt;/script&gt;

&lt;template&gt;
  &lt;SearchInput v-model="query" @search="handleSearch" /&gt;
&lt;/template&gt;
</code></pre>

<h2 id="3-slots"><strong>3. スロット</strong></h2>

<pre><code class="language-vue">&lt;!-- Card.vue --&gt;
&lt;template&gt;
  &lt;div class="card"&gt;
    &lt;!-- Named slots --&gt;
    &lt;div class="card-header"&gt;
      &lt;slot name="header"&gt;Default Header&lt;/slot&gt;
    &lt;/div&gt;

    &lt;div class="card-body"&gt;
      &lt;slot&gt;Default content&lt;/slot&gt;
    &lt;/div&gt;

    &lt;div class="card-footer"&gt;
      &lt;slot name="footer" /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;!-- Usage --&gt;
&lt;Card&gt;
  &lt;template #header&gt;
    &lt;h2&gt;Tiêu đề&lt;/h2&gt;
  &lt;/template&gt;

  &lt;p&gt;Nội dung chính&lt;/p&gt;

  &lt;template #footer&gt;
    &lt;button&gt;Submit&lt;/button&gt;
  &lt;/template&gt;
&lt;/Card&gt;
</code></pre>

<h2 id="4-scoped-slots"><strong>4. スコープ付きスロット</strong></h2>

<pre><code class="language-vue">&lt;!-- DataTable.vue --&gt;
&lt;script setup lang="ts" generic="T"&gt;
defineProps&lt;{
  items: T[]
  columns: { key: keyof T; label: string }[]
}&gt;()
&lt;/script&gt;

&lt;template&gt;
  &lt;table&gt;
    &lt;thead&gt;
      &lt;tr&gt;
        &lt;th v-for="col in columns" :key="String(col.key)"&gt;{{ col.label }}&lt;/th&gt;
        &lt;th&gt;Actions&lt;/th&gt;
      &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
      &lt;tr v-for="(item, index) in items" :key="index"&gt;
        &lt;td v-for="col in columns" :key="String(col.key)"&gt;
          &lt;slot :name="String(col.key)" :value="item[col.key]" :item="item"&gt;
            {{ item[col.key] }}
          &lt;/slot&gt;
        &lt;/td&gt;
        &lt;td&gt;
          &lt;slot name="actions" :item="item" /&gt;
        &lt;/td&gt;
      &lt;/tr&gt;
    &lt;/tbody&gt;
  &lt;/table&gt;
&lt;/template&gt;
</code></pre>

<h2 id="5-provide-inject"><strong>5. 提供/注入</strong></h2>

<pre><code class="language-vue">&lt;!-- Parent — provide --&gt;
&lt;script setup lang="ts"&gt;
import { provide, ref } from 'vue'

const theme = ref&lt;'light' | 'dark'&gt;('light')
const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

provide('theme', { theme, toggleTheme })
&lt;/script&gt;

&lt;!-- Deep child — inject --&gt;
&lt;script setup lang="ts"&gt;
import { inject } from 'vue'

const { theme, toggleTheme } = inject('theme')!
&lt;/script&gt;

&lt;template&gt;
  &lt;button @click="toggleTheme"&gt;
    Current: {{ theme }}
  &lt;/button&gt;
&lt;/template&gt;
</code></pre>

<h2 id="6-lifecycle"><strong>6. ライフサイクルフック</strong></h2>

<pre><code class="language-vue">&lt;script setup lang="ts"&gt;
import { onMounted, onUnmounted, onUpdated } from 'vue'

onMounted(() => {
  console.log('Component mounted — DOM ready')
  window.addEventListener('resize', handleResize)
})

onUpdated(() => {
  console.log('Component updated')
})

onUnmounted(() => {
  console.log('Component unmounted — cleanup')
  window.removeEventListener('resize', handleResize)
})
&lt;/script&gt;
</code></pre>

<p>次の記事: <strong>ディレクティブ、レンダリング、テンプレート参照</strong> — カスタム ディレクティブ、レンダリング関数、テレポート。</p>
