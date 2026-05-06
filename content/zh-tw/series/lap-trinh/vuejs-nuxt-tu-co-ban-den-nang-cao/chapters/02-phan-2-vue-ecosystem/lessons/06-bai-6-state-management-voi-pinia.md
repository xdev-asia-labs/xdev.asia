---
id: 019d8b40-h202-7001-b009-vuenuxt000202
title: 第 6 課：使用 Pinia 進行狀態管理
slug: bai-6-state-management-voi-pinia
description: Pinia 與 Vuex。定義Store、狀態、getter、操作。儲存組合、插件。持久狀態、開發工具整合。商店模式，模組化商店。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 6
section_title: 第 2 部分：Vue 生態系統
course:
  id: 019d8b40-h100-7001-b009-vuenuxt000001
  title: Vue.js 和 Nuxt：從基礎到高級
  slug: vuejs-nuxt-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4663" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4663)"/>

  <!-- Decorations -->
  <g>
    <circle cx="628" cy="114" r="16" fill="#fbbf24" opacity="0.09"/>
    <circle cx="656" cy="142" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="684" cy="170" r="24" fill="#fbbf24" opacity="0.07"/>
    <circle cx="712" cy="198" r="28" fill="#fbbf24" opacity="0.11"/>
    <circle cx="740" cy="226" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="94" x2="1100" y2="174" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="124" x2="1050" y2="194" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1019.1147367097487,179.5 1019.1147367097487,208.5 994,223 968.8852632902513,208.5 968.8852632902513,179.5 994,165" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">💻 程式設計 — 第 6 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 6 課：使用 Pinia 進行狀態管理</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Vue.js 和 Nuxt：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：Vue 生態系統</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-setup"><strong>1. Pinia設定</strong></h2>

<pre><code class="language-ts">// main.ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)
app.use(createPinia())
app.mount('#app')
</code></pre>

<h2 id="2-define-store"><strong>2. 商店的定義</strong></h2>

<pre><code class="language-ts">// stores/useAuthStore.ts
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// Setup syntax (recommended)
export const useAuthStore = defineStore('auth', () => {
  // State
  const user = ref&lt;User | null&gt;(null)
  const token = ref&lt;string | null&gt;(null)
  const isLoading = ref(false)

  // Getters
  const isAuthenticated = computed(() => !!token.value)
  const isAdmin = computed(() => user.value?.role === 'admin')

  // Actions
  async function login(email: string, password: string) {
    isLoading.value = true
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      })
      const data = await res.json()
      user.value = data.user
      token.value = data.token
    } finally {
      isLoading.value = false
    }
  }

  function logout() {
    user.value = null
    token.value = null
  }

  return { user, token, isLoading, isAuthenticated, isAdmin, login, logout }
})
</code></pre>

<h2 id="3-usage"><strong>3. 使用商店</strong></h2>

<pre><code class="language-vue">&lt;script setup lang="ts"&gt;
import { useAuthStore } from '@/stores/useAuthStore'
import { storeToRefs } from 'pinia'

const authStore = useAuthStore()

// ⚠️ Cần storeToRefs để giữ reactivity khi destructure
const { user, isAuthenticated, isLoading } = storeToRefs(authStore)

// Actions có thể destructure trực tiếp
const { login, logout } = authStore
&lt;/script&gt;

&lt;template&gt;
  &lt;div v-if="isAuthenticated"&gt;
    &lt;p&gt;Xin chào, {{ user?.name }}&lt;/p&gt;
    &lt;button @click="logout"&gt;Đăng xuất&lt;/button&gt;
  &lt;/div&gt;
  &lt;div v-else&gt;
    &lt;button @click="login('demo@test.com', '123')" :disabled="isLoading"&gt;
      {{ isLoading ? 'Đang đăng nhập...' : 'Đăng nhập' }}
    &lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre>

<h2 id="4-store-composition"><strong>4. 店鋪構成</strong></h2>

<pre><code class="language-ts">// stores/useCartStore.ts
export const useCartStore = defineStore('cart', () => {
  const authStore = useAuthStore() // Sử dụng store khác

  const items = ref&lt;CartItem[]&gt;([])

  const total = computed(() =>
    items.value.reduce((sum, item) => sum + item.price * item.qty, 0)
  )

  async function checkout() {
    if (!authStore.isAuthenticated) {
      throw new Error('Please login first')
    }
    await fetch('/api/checkout', {
      method: 'POST',
      headers: { Authorization: `Bearer ${authStore.token}` },
      body: JSON.stringify({ items: items.value }),
    })
    items.value = []
  }

  return { items, total, checkout }
})
</code></pre>

<h2 id="5-plugins"><strong>5. Pinia 插件</strong></h2>

<pre><code class="language-ts">// plugins/piniaPersistedState.ts
import { watch } from 'vue'
import type { PiniaPluginContext } from 'pinia'

export function persistedState({ store }: PiniaPluginContext) {
  const key = `pinia-${store.$id}`

  // Restore state from localStorage
  const saved = localStorage.getItem(key)
  if (saved) {
    store.$patch(JSON.parse(saved))
  }

  // Persist on change
  watch(
    () => store.$state,
    (state) => {
      localStorage.setItem(key, JSON.stringify(state))
    },
    { deep: true }
  )
}

// main.ts
const pinia = createPinia()
pinia.use(persistedState)
</code></pre>

<h2 id="6-options-syntax"><strong>6. 選項語法（替代）</strong></h2>

<pre><code class="language-ts">export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  getters: {
    doubled: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})
</code></pre>

<p>下一篇： <strong>可組合和可重複使用邏輯</strong> — 自訂可組合項，VueUse。</p>
