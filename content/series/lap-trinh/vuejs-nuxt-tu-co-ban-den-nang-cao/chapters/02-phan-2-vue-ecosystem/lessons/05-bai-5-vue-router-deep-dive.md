---
id: 019d8b40-h201-7001-b009-vuenuxt000201
title: 'Bài 5: Vue Router Deep Dive'
slug: bai-5-vue-router-deep-dive
description: >-
  Vue Router 4, route definitions, dynamic routes. Navigation guards
  (beforeEach, beforeRouteEnter). Lazy loading, nested routes.
  Scroll behavior, route meta, route transitions.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 5
section_title: "Phần 2: Vue Ecosystem"
course:
  id: 019d8b40-h100-7001-b009-vuenuxt000001
  title: 'Vue.js & Nuxt: Từ Cơ bản đến Nâng cao'
  slug: vuejs-nuxt-tu-co-ban-den-nang-cao
---

<h2 id="1-setup"><strong>1. Router Setup</strong></h2>

<pre><code class="language-ts">// router/index.ts
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/Home.vue'),
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('@/pages/Blog.vue'),
      children: [
        {
          path: ':slug',
          name: 'blog-detail',
          component: () => import('@/pages/BlogDetail.vue'),
          props: true,
        },
      ],
    },
    {
      path: '/dashboard',
      component: () => import('@/layouts/DashboardLayout.vue'),
      meta: { requiresAuth: true },
      children: [
        { path: '', name: 'dashboard', component: () => import('@/pages/Dashboard.vue') },
        { path: 'settings', name: 'settings', component: () => import('@/pages/Settings.vue') },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/pages/NotFound.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

export default router
</code></pre>

<h2 id="2-dynamic-routes"><strong>2. Dynamic Routes</strong></h2>

<pre><code class="language-vue">&lt;!-- pages/BlogDetail.vue --&gt;
&lt;script setup lang="ts"&gt;
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// Với props: true
const props = defineProps&lt;{ slug: string }&gt;()

// Hoặc từ route params
const slug = route.params.slug as string

// Query params
const page = route.query.page as string // ?page=2

// Programmatic navigation
function goToPost(id: string) {
  router.push({ name: 'blog-detail', params: { slug: id } })
}

function goBack() {
  router.back()
}
&lt;/script&gt;
</code></pre>

<h2 id="3-guards"><strong>3. Navigation Guards</strong></h2>

<pre><code class="language-ts">// Global guard
router.beforeEach(async (to, from) => {
  const authStore = useAuthStore()

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return { name: 'login', query: { redirect: to.fullPath } }
  }

  if (to.meta.requiresAdmin && authStore.user?.role !== 'admin') {
    return { name: 'forbidden' }
  }
})

// Per-route guard
{
  path: '/admin',
  beforeEnter: (to, from) => {
    const auth = useAuthStore()
    if (auth.user?.role !== 'admin') return false
  },
}
</code></pre>

<pre><code class="language-vue">&lt;!-- In-component guard --&gt;
&lt;script setup lang="ts"&gt;
import { onBeforeRouteLeave } from 'vue-router'

const hasUnsavedChanges = ref(false)

onBeforeRouteLeave((to, from) => {
  if (hasUnsavedChanges.value) {
    return window.confirm('Bạn có thay đổi chưa lưu. Rời khỏi trang?')
  }
})
&lt;/script&gt;
</code></pre>

<h2 id="4-transitions"><strong>4. Route Transitions</strong></h2>

<pre><code class="language-vue">&lt;template&gt;
  &lt;RouterView v-slot="{ Component, route }"&gt;
    &lt;Transition :name="route.meta.transition || 'fade'" mode="out-in"&gt;
      &lt;component :is="Component" :key="route.path" /&gt;
    &lt;/Transition&gt;
  &lt;/RouterView&gt;
&lt;/template&gt;

&lt;style&gt;
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from { transform: translateX(100%); }
.slide-leave-to { transform: translateX(-100%); }
&lt;/style&gt;
</code></pre>

<p>Bài tiếp theo: <strong>State Management với Pinia</strong> — stores, getters, actions, plugins.</p>
