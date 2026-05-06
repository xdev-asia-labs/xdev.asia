---
id: 019d8b40-h401-7001-b009-vuenuxt000401
title: 'レッスン 13: 認証と認可'
slug: bai-13-authentication-va-authorization
description: >-
  nuxt-auth-utils、サイドベース/nuxt-auth。 JWT、OAuth2 (Google、GitHub)。セッション管理、Cookie
  ベースの認証。保護されたルート、RBAC。 Lucia認証が統合されました。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 13
section_title: 'パート 4: Nuxt アドバンストおよびフルスタック'
course:
  id: 019d8b40-h100-7001-b009-vuenuxt000001
  title: 'Vue.js と Nuxt: 基本から高度まで'
  slug: vuejs-nuxt-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5231" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5231)"/>

  <!-- Decorations -->
  <g>
    <circle cx="988" cy="174" r="36" fill="#fbbf24" opacity="0.09"/>
    <circle cx="876" cy="222" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="764" cy="270" r="34" fill="#fbbf24" opacity="0.07"/>
    <circle cx="652" cy="58" r="18" fill="#fbbf24" opacity="0.11"/>
    <circle cx="1040" cy="106" r="32" fill="#fbbf24" opacity="0.05"/>
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
    <line x1="600" y1="174" x2="1100" y2="254" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="204" x2="1050" y2="274" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="999.1147367097487,159.5 999.1147367097487,188.5 974,203 948.8852632902513,188.5 948.8852632902513,159.5 974,145" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">💻 プログラミング — レッスン 13</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 13: 認証と認可</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Vue.js と Nuxt: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: Nuxt アドバンストおよびフルスタック</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-nuxt-auth-utils"><strong>1.nuxt-auth-utils</strong></h2>

<pre><code class="language-bash">npx nuxi module add nuxt-auth-utils
</code></pre>

<pre><code class="language-ts">// server/routes/auth/github.get.ts
export default defineOAuthGitHubEventHandler({
  config: {
    emailRequired: true,
  },
  async onSuccess(event, { user, tokens }) {
    await setUserSession(event, {
      user: {
        id: user.id.toString(),
        name: user.login,
        email: user.email,
        avatar: user.avatar_url,
      },
    })
    return sendRedirect(event, '/dashboard')
  },
  onError(event, error) {
    console.error('GitHub OAuth error:', error)
    return sendRedirect(event, '/login?error=oauth')
  },
})

// server/routes/auth/google.get.ts
export default defineOAuthGoogleEventHandler({
  async onSuccess(event, { user }) {
    await setUserSession(event, {
      user: {
        id: user.sub,
        name: user.name,
        email: user.email,
        avatar: user.picture,
      },
    })
    return sendRedirect(event, '/dashboard')
  },
})
</code></pre>

<h2 id="2-session"><strong>2. セッション管理</strong></h2>

<pre><code class="language-vue">&lt;script setup lang="ts"&gt;
const { loggedIn, user, session, clear } = useUserSession()
&lt;/script&gt;

&lt;template&gt;
  &lt;div v-if="loggedIn"&gt;
    &lt;img :src="user?.avatar" :alt="user?.name" class="w-8 h-8 rounded-full" /&gt;
    &lt;span&gt;{{ user?.name }}&lt;/span&gt;
    &lt;button @click="clear()"&gt;Đăng xuất&lt;/button&gt;
  &lt;/div&gt;
  &lt;div v-else&gt;
    &lt;a href="/auth/github"&gt;Login with GitHub&lt;/a&gt;
    &lt;a href="/auth/google"&gt;Login with Google&lt;/a&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre>

<h2 id="3-credentials"><strong>3. 認証情報によるログイン</strong></h2>

<pre><code class="language-ts">// server/api/auth/login.post.ts
import bcrypt from 'bcryptjs'

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event)

  const user = await db.query.users.findFirst({
    where: eq(users.email, email),
  })

  if (!user || !await bcrypt.compare(password, user.hashedPassword)) {
    throw createError({ statusCode: 401, message: 'Email hoặc mật khẩu sai' })
  }

  await setUserSession(event, {
    user: { id: user.id, name: user.name, email: user.email, role: user.role },
  })

  return { success: true }
})
</code></pre>

<h2 id="4-protected"><strong>4. 保護されたルート</strong></h2>

<pre><code class="language-ts">// server/utils/auth.ts
export async function requireAuth(event: H3Event) {
  const session = await getUserSession(event)
  if (!session.user) {
    throw createError({ statusCode: 401, message: 'Unauthorized' })
  }
  return session.user
}

export async function requireRole(event: H3Event, role: string) {
  const user = await requireAuth(event)
  if (user.role !== role) {
    throw createError({ statusCode: 403, message: 'Forbidden' })
  }
  return user
}

// server/api/admin/users.get.ts
export default defineEventHandler(async (event) => {
  await requireRole(event, 'admin')
  return db.query.users.findMany()
})
</code></pre>

<h2 id="5-middleware-auth"><strong>5. 認証ミドルウェア</strong></h2>

<pre><code class="language-ts">// middleware/auth.ts
export default defineNuxtRouteMiddleware((to) => {
  const { loggedIn } = useUserSession()

  if (!loggedIn.value) {
    return navigateTo(`/login?redirect=${to.fullPath}`)
  }
})

// middleware/guest.ts — redirect if already logged in
export default defineNuxtRouteMiddleware(() => {
  const { loggedIn } = useUserSession()

  if (loggedIn.value) {
    return navigateTo('/dashboard')
  }
})
</code></pre>

<pre><code class="language-ts">// nuxt.config.ts
export default defineNuxtConfig({
  runtimeConfig: {
    session: {
      maxAge: 60 * 60 * 24 * 7, // 7 days
    },
    oauth: {
      github: {
        clientId: '',
        clientSecret: '',
      },
      google: {
        clientId: '',
        clientSecret: '',
      },
    },
  },
})
</code></pre>

<p>次の記事: <strong>Nuxt のデータベースと ORM</strong> — 霧雨の ORM、移行、CRUD。</p>
