---
id: 019d8b40-h401-7001-b009-vuenuxt000401
title: 'Bài 13: Authentication & Authorization'
slug: bai-13-authentication-va-authorization
description: >-
  nuxt-auth-utils, sidebase/nuxt-auth. JWT, OAuth2 (Google, GitHub).
  Session management, cookie-based auth. Protected routes, RBAC.
  Lucia Auth integration.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 13
section_title: "Phần 4: Nuxt Advanced & Full-Stack"
course:
  id: 019d8b40-h100-7001-b009-vuenuxt000001
  title: 'Vue.js & Nuxt: Từ Cơ bản đến Nâng cao'
  slug: vuejs-nuxt-tu-co-ban-den-nang-cao
---

<h2 id="1-nuxt-auth-utils"><strong>1. nuxt-auth-utils</strong></h2>

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

<h2 id="2-session"><strong>2. Session Management</strong></h2>

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

<h2 id="3-credentials"><strong>3. Credentials Login</strong></h2>

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

<h2 id="4-protected"><strong>4. Protected Routes</strong></h2>

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

<h2 id="5-middleware-auth"><strong>5. Auth Middleware</strong></h2>

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

<p>Bài tiếp theo: <strong>Database & ORM trong Nuxt</strong> — Drizzle ORM, migrations, CRUD.</p>
