---
id: 019d8b40-h202-7001-b009-vuenuxt000202
title: 'Bài 6: State Management với Pinia'
slug: bai-6-state-management-voi-pinia
description: >-
  Pinia vs Vuex. defineStore, state, getters, actions. Store
  composition, plugins. Persisted state, devtools integration.
  Store patterns, modular stores.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 6
section_title: "Phần 2: Vue Ecosystem"
course:
  id: 019d8b40-h100-7001-b009-vuenuxt000001
  title: 'Vue.js & Nuxt: Từ Cơ bản đến Nâng cao'
  slug: vuejs-nuxt-tu-co-ban-den-nang-cao
---

<h2 id="1-setup"><strong>1. Pinia Setup</strong></h2>

<pre><code class="language-ts">// main.ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)
app.use(createPinia())
app.mount('#app')
</code></pre>

<h2 id="2-define-store"><strong>2. Định nghĩa Store</strong></h2>

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

<h2 id="3-usage"><strong>3. Sử dụng Store</strong></h2>

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

<h2 id="4-store-composition"><strong>4. Store Composition</strong></h2>

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

<h2 id="5-plugins"><strong>5. Pinia Plugins</strong></h2>

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

<h2 id="6-options-syntax"><strong>6. Options Syntax (Alternative)</strong></h2>

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

<p>Bài tiếp theo: <strong>Composables & Reusable Logic</strong> — custom composables, VueUse.</p>
