---
id: 019d8b40-h203-7001-b009-vuenuxt000203
title: 'レッスン 7: コンポーザブルと再利用可能なロジック'
slug: bai-7-composables-va-reusable-logic
description: >-
  カスタム コンポーザブル、VueUse ライブラリ。
  useAsyncState、useFetch、useLocalStorage。構成可能なパターン、共有状態。コンポーザブルによる依存関係の注入。
duration_minutes: 100
is_free: true
video_url: null
sort_order: 7
section_title: 'パート 2: Vue エコシステム'
course:
  id: 019d8b40-h100-7001-b009-vuenuxt000001
  title: 'Vue.js と Nuxt: 基本から高度まで'
  slug: vuejs-nuxt-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4043" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4043)"/>

  <!-- Decorations -->
  <g>
    <circle cx="894" cy="132" r="12" fill="#f472b6" opacity="0.07"/>
    <circle cx="688" cy="166" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="982" cy="200" r="16" fill="#f472b6" opacity="0.11"/>
    <circle cx="776" cy="234" r="18" fill="#f472b6" opacity="0.13"/>
    <circle cx="1070" cy="268" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="212" x2="1100" y2="292" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="242" x2="1050" y2="312" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="985.3826859021799,148.5 985.3826859021799,175.5 962,189 938.6173140978201,175.5 938.6173140978201,148.5 962,135" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">💻 プログラミング — レッスン 7</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 7: コンポーザブルと再利用可能なロジック</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Vue.js と Nuxt: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: Vue エコシステム</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-composable"><strong>1. コンポーザブルとは何ですか?</strong></h2>

<p>Composable は、Composition API を使用してステートフル ロジックをカプセル化して再利用する関数です。規則: で始まる名前を付けます。 <code>使う</code>。</p>

<pre><code class="language-ts">// composables/useFetch.ts
import { ref, watchEffect, type Ref } from 'vue'

export function useFetch&lt;T&gt;(url: string | Ref&lt;string&gt;) {
  const data = ref&lt;T | null&gt;(null)
  const error = ref&lt;Error | null&gt;(null)
  const isLoading = ref(false)

  async function execute() {
    isLoading.value = true
    error.value = null
    try {
      const rawUrl = typeof url === 'string' ? url : url.value
      const res = await fetch(rawUrl)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      data.value = await res.json()
    } catch (e) {
      error.value = e as Error
    } finally {
      isLoading.value = false
    }
  }

  watchEffect(() => { execute() })

  return { data, error, isLoading, refresh: execute }
}
</code></pre>

<h2 id="2-usage"><strong>2. コンポーザブルを使用する</strong></h2>

<pre><code class="language-vue">&lt;script setup lang="ts"&gt;
import { useFetch } from '@/composables/useFetch'

interface Post {
  id: string
  title: string
}

const { data: posts, isLoading, error, refresh } = useFetch&lt;Post[]&gt;('/api/posts')
&lt;/script&gt;

&lt;template&gt;
  &lt;div v-if="isLoading"&gt;Loading...&lt;/div&gt;
  &lt;div v-else-if="error"&gt;Error: {{ error.message }}&lt;/div&gt;
  &lt;div v-else&gt;
    &lt;button @click="refresh"&gt;Refresh&lt;/button&gt;
    &lt;div v-for="post in posts" :key="post.id"&gt;{{ post.title }}&lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre>

<h2 id="3-common"><strong>3. 一般的なコンポーザブル</strong></h2>

<pre><code class="language-ts">// composables/useLocalStorage.ts
import { ref, watch } from 'vue'

export function useLocalStorage&lt;T&gt;(key: string, defaultValue: T) {
  const stored = localStorage.getItem(key)
  const data = ref&lt;T&gt;(stored ? JSON.parse(stored) : defaultValue)

  watch(data, (newVal) => {
    localStorage.setItem(key, JSON.stringify(newVal))
  }, { deep: true })

  return data
}

// composables/useDebounce.ts
import { ref, watch, type Ref } from 'vue'

export function useDebounce&lt;T&gt;(value: Ref&lt;T&gt;, delay = 300) {
  const debounced = ref(value.value) as Ref&lt;T&gt;

  let timeout: ReturnType&lt;typeof setTimeout&gt;
  watch(value, (newVal) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      debounced.value = newVal
    }, delay)
  })

  return debounced
}

// composables/useMediaQuery.ts
import { ref, onMounted, onUnmounted } from 'vue'

export function useMediaQuery(query: string) {
  const matches = ref(false)

  let mediaQuery: MediaQueryList

  onMounted(() => {
    mediaQuery = window.matchMedia(query)
    matches.value = mediaQuery.matches
    mediaQuery.addEventListener('change', handler)
  })

  function handler(e: MediaQueryListEvent) {
    matches.value = e.matches
  }

  onUnmounted(() => {
    mediaQuery?.removeEventListener('change', handler)
  })

  return matches
}
</code></pre>

<h2 id="4-vueuse"><strong>4. VueUseライブラリ</strong></h2>

<pre><code class="language-bash">npm install @vueuse/core
</code></pre>

<pre><code class="language-vue">&lt;script setup lang="ts"&gt;
import {
  useDark,
  useToggle,
  useLocalStorage,
  useWindowSize,
  useIntersectionObserver,
  onClickOutside,
} from '@vueuse/core'

// Dark mode
const isDark = useDark()
const toggleDark = useToggle(isDark)

// Persistent state
const settings = useLocalStorage('settings', { theme: 'light', lang: 'vi' })

// Window size
const { width, height } = useWindowSize()

// Intersection observer
const target = ref(null)
const isVisible = ref(false)
useIntersectionObserver(target, ([entry]) => {
  isVisible.value = entry.isIntersecting
})

// Click outside
const dropdown = ref(null)
onClickOutside(dropdown, () => { isOpen.value = false })
&lt;/script&gt;
</code></pre>

<h2 id="5-patterns"><strong>5. 構成可能なパターン</strong></h2>

<pre><code class="language-ts">// Pattern: Shared state across components
// composables/useSharedCounter.ts
const globalCount = ref(0) // Shared state

export function useSharedCounter() {
  function increment() { globalCount.value++ }
  function decrement() { globalCount.value-- }
  return { count: globalCount, increment, decrement }
}
</code></pre>

<p>次の記事: <strong>フォーム、検証、スタイル設定</strong> — VeeValidate、Tailwind CSS、コンポーネント ライブラリ。</p>
