---
id: 019d8b40-h604-7001-b009-vuenuxt000604
title: 'Bài 22: Production Monitoring & Best Practices'
slug: bai-22-production-monitoring-va-best-practices
description: >-
  Error tracking (Sentry), analytics. Structured logging, health checks.
  Security best practices (CORS, CSP, XSS). Monorepo với pnpm workspace,
  shared packages. Design system.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 22
section_title: "Phần 6: Testing, Deployment & Production"
course:
  id: 019d8b40-h100-7001-b009-vuenuxt000001
  title: 'Vue.js & Nuxt: Từ Cơ bản đến Nâng cao'
  slug: vuejs-nuxt-tu-co-ban-den-nang-cao
---

<h2 id="1-sentry"><strong>1. Error Tracking với Sentry</strong></h2>

<pre><code class="language-bash">npm i @sentry/vue @sentry/node
</code></pre>

<pre><code class="language-ts">// plugins/sentry.client.ts
import * as Sentry from '@sentry/vue'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  Sentry.init({
    app: nuxtApp.vueApp,
    dsn: config.public.sentryDsn,
    environment: config.public.env,
    integrations: [
      Sentry.browserTracingIntegration({
        router: useRouter(),
      }),
      Sentry.replayIntegration(),
    ],
    tracesSampleRate: 0.1,
    replaysSessionSampleRate: 0.05,
  })
})

// server/plugins/sentry.ts
import * as Sentry from '@sentry/node'

export default defineNitroPlugin((nitro) => {
  Sentry.init({
    dsn: useRuntimeConfig().sentryDsn,
    tracesSampleRate: 0.2,
  })

  nitro.hooks.hook('error', (error) => {
    Sentry.captureException(error)
  })
})
</code></pre>

<h2 id="2-logging"><strong>2. Structured Logging</strong></h2>

<pre><code class="language-ts">// server/utils/logger.ts
import { consola, createConsola } from 'consola'

export const logger = createConsola({
  level: process.env.NODE_ENV === 'production' ? 3 : 4,
  formatOptions: {
    date: true,
    colors: process.env.NODE_ENV !== 'production',
  },
})

// Sử dụng
logger.info('User logged in', { userId: user.id, ip: getRequestIP(event) })
logger.error('Payment failed', { orderId, error: err.message })
</code></pre>

<h2 id="3-health-checks"><strong>3. Health Checks</strong></h2>

<pre><code class="language-ts">// server/api/health.get.ts
export default defineEventHandler(async () => {
  const checks = {
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    checks: {} as Record&lt;string, string&gt;,
  }

  // Database check
  try {
    await db.execute(sql`SELECT 1`)
    checks.checks.database = 'ok'
  } catch {
    checks.checks.database = 'error'
    checks.status = 'degraded'
  }

  // Redis check
  try {
    await redis.ping()
    checks.checks.redis = 'ok'
  } catch {
    checks.checks.redis = 'error'
    checks.status = 'degraded'
  }

  return checks
})
</code></pre>

<h2 id="4-security"><strong>4. Security Best Practices</strong></h2>

<pre><code class="language-ts">// nuxt.config.ts
export default defineNuxtConfig({
  security: {
    headers: {
      contentSecurityPolicy: {
        'default-src': ["'self'"],
        'script-src': ["'self'", "'nonce-{{nonce}}'"],
        'style-src': ["'self'", "'unsafe-inline'"],
        'img-src': ["'self'", 'data:', 'https:'],
      },
      xFrameOptions: 'DENY',
      xContentTypeOptions: 'nosniff',
      referrerPolicy: 'strict-origin-when-cross-origin',
    },
    corsHandler: {
      origin: ['https://myapp.com'],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
    },
    rateLimiter: {
      tokensPerInterval: 100,
      interval: 60000,
    },
  },
})

// server/middleware/csrf.ts
export default defineEventHandler((event) => {
  if (['POST', 'PUT', 'DELETE'].includes(event.method)) {
    const token = getHeader(event, 'x-csrf-token')
    const sessionToken = getCookie(event, 'csrf-token')
    if (!token || token !== sessionToken) {
      throw createError({ statusCode: 403, message: 'Invalid CSRF token' })
    }
  }
})
</code></pre>

<h2 id="5-monorepo"><strong>5. Monorepo với pnpm Workspace</strong></h2>

<pre><code class="language-yaml"># pnpm-workspace.yaml
packages:
  - 'apps/*'
  - 'packages/*'
</code></pre>

<pre><code class="language-bash"># Cấu trúc
monorepo/
├── pnpm-workspace.yaml
├── apps/
│   ├── web/          # Nuxt app chính
│   └── admin/        # Nuxt admin panel
├── packages/
│   ├── ui/           # Shared Vue components
│   ├── utils/        # Shared utilities
│   └── config/       # Shared configs (eslint, tsconfig)
</code></pre>

<pre><code class="language-json">// packages/ui/package.json
{
  "name": "@myapp/ui",
  "exports": {
    ".": "./src/index.ts",
    "./components/*": "./src/components/*.vue"
  }
}

// apps/web/package.json
{
  "dependencies": {
    "@myapp/ui": "workspace:*",
    "@myapp/utils": "workspace:*"
  }
}
</code></pre>

<h2 id="6-design-system"><strong>6. Design System</strong></h2>

<pre><code class="language-vue">&lt;!-- packages/ui/src/components/BaseButton.vue --&gt;
&lt;script setup lang="ts"&gt;
interface Props {
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps&lt;Props&gt;(), {
  variant: 'primary',
  size: 'md',
  loading: false,
  disabled: false,
})

const emit = defineEmits&lt;{ click: [event: MouseEvent] }&gt;()

const classes = computed(() => [
  'btn',
  `btn-${props.variant}`,
  `btn-${props.size}`,
  { 'btn-loading': props.loading },
])
&lt;/script&gt;

&lt;template&gt;
  &lt;button
    :class="classes"
    :disabled="disabled || loading"
    @click="emit('click', $event)"
  &gt;
    &lt;span v-if="loading" class="spinner" /&gt;
    &lt;slot /&gt;
  &lt;/button&gt;
&lt;/template&gt;
</code></pre>

<h2 id="7-checklist"><strong>7. Production Checklist</strong></h2>

<table>
<thead><tr><th>Hạng mục</th><th>Checklist</th></tr></thead>
<tbody>
<tr><td>Security</td><td>CSP headers, CSRF, rate limiting, input validation</td></tr>
<tr><td>Performance</td><td>Lighthouse ≥ 90, bundle &lt; 200KB, image optimization</td></tr>
<tr><td>Monitoring</td><td>Sentry, health checks, uptime monitoring</td></tr>
<tr><td>SEO</td><td>Meta tags, sitemap.xml, robots.txt, structured data</td></tr>
<tr><td>CI/CD</td><td>Automated tests, staging environment, rollback plan</td></tr>
<tr><td>Backup</td><td>Database backup, env secrets rotation, disaster recovery</td></tr>
</tbody>
</table>

<p>🎉 Hoàn thành series <strong>Vue.js & Nuxt: Từ Cơ bản đến Nâng cao</strong>!</p>
