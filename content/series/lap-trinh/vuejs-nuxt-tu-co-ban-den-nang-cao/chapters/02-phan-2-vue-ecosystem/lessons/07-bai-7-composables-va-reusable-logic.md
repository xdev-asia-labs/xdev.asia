---
id: 019d8b40-h203-7001-b009-vuenuxt000203
title: 'Bài 7: Composables & Reusable Logic'
slug: bai-7-composables-va-reusable-logic
description: >-
  Custom composables, VueUse library. useAsyncState, useFetch,
  useLocalStorage. Composable patterns, shared state. Dependency
  injection với composables.
duration_minutes: 100
is_free: true
video_url: null
sort_order: 7
section_title: "Phần 2: Vue Ecosystem"
course:
  id: 019d8b40-h100-7001-b009-vuenuxt000001
  title: 'Vue.js & Nuxt: Từ Cơ bản đến Nâng cao'
  slug: vuejs-nuxt-tu-co-ban-den-nang-cao
---

<h2 id="1-composable"><strong>1. Composable là gì?</strong></h2>

<p>Composable là function sử dụng Composition API để đóng gói và tái sử dụng logic có stateful. Convention: đặt tên bắt đầu bằng <code>use</code>.</p>

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

<h2 id="2-usage"><strong>2. Sử dụng Composable</strong></h2>

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

<h2 id="3-common"><strong>3. Composables thông dụng</strong></h2>

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

<h2 id="4-vueuse"><strong>4. VueUse Library</strong></h2>

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

<h2 id="5-patterns"><strong>5. Composable Patterns</strong></h2>

<pre><code class="language-ts">// Pattern: Shared state across components
// composables/useSharedCounter.ts
const globalCount = ref(0) // Shared state

export function useSharedCounter() {
  function increment() { globalCount.value++ }
  function decrement() { globalCount.value-- }
  return { count: globalCount, increment, decrement }
}
</code></pre>

<p>Bài tiếp theo: <strong>Forms, Validation & Styling</strong> — VeeValidate, Tailwind CSS, component libraries.</p>
