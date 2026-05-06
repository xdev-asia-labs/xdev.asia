---
id: 019d8b40-h201-7001-b009-vuenuxt000201
title: 'レッスン 5: Vue ルーターの詳細'
slug: bai-5-vue-router-deep-dive
description: >-
  Vue Router 4、ルート定義、動的ルート。ナビゲーション ガード
  (beforeEach、beforeRouteEnter)。遅延読み込み、ネストされたルート。スクロール動作、ルートメタ、ルート遷移。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 5
section_title: 'パート 2: Vue エコシステム'
course:
  id: 019d8b40-h100-7001-b009-vuenuxt000001
  title: 'Vue.js と Nuxt: 基本から高度まで'
  slug: vuejs-nuxt-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7288" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7288)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1007" cy="111" r="10" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="914" cy="138" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="821" cy="165" r="12" fill="#a78bfa" opacity="0.08"/>
    <circle cx="728" cy="192" r="13" fill="#a78bfa" opacity="0.09"/>
    <circle cx="635" cy="219" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="61" x2="1100" y2="141" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="91" x2="1050" y2="161" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="992.1769145362398,143 992.1769145362398,179 961,197 929.8230854637602,179 929.8230854637602,143 961,125" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">💻 プログラミング — レッスン 5</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 5: Vue ルーターの詳細</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Vue.js と Nuxt: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: Vue エコシステム</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-setup"><strong>1.ルーターのセットアップ</strong></h2>

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

<h2 id="2-dynamic-routes"><strong>2. 動的ルート</strong></h2>

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

<h2 id="3-guards"><strong>3. ナビゲーションガード</strong></h2>

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

<h2 id="4-transitions"><strong>4. ルート遷移</strong></h2>

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

<p>次の記事: <strong>Pinia による状態管理</strong> — ストア、ゲッター、アクション、プラグイン。</p>
