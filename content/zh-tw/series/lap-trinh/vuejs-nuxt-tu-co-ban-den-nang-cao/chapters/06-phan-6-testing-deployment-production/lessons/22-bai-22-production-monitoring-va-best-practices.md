---
id: 019d8b40-h604-7001-b009-vuenuxt000604
title: 第 22 課：生產監控與最佳實踐
slug: bai-22-production-monitoring-va-best-practices
description: 錯誤追蹤（哨兵）、分析。結構化日誌記錄、健康檢查。安全最佳實務（CORS、CSP、XSS）。 Monorepo 附有 pnpm 工作區、共用套件。設計系統。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 22
section_title: 第 6 部分：測試、部署和生產
course:
  id: 019d8b40-h100-7001-b009-vuenuxt000001
  title: Vue.js 和 Nuxt：從基礎到高級
  slug: vuejs-nuxt-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3838" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3838)"/>

  <!-- Decorations -->
  <g>
    <circle cx="862" cy="116" r="10" fill="#f87171" opacity="0.11"/>
    <circle cx="624" cy="58" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="886" cy="260" r="12" fill="#f87171" opacity="0.13"/>
    <circle cx="648" cy="202" r="28" fill="#f87171" opacity="0.09"/>
    <circle cx="910" cy="144" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="76" x2="1100" y2="156" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="106" x2="1050" y2="176" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1002.8467875173176,160.5 1002.8467875173176,191.5 976,207 949.1532124826824,191.5 949.1532124826824,160.5 976,145" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">💻 程式設計 — 第 22 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 22 課：生產監控與最佳</tspan>
      <tspan x="60" dy="42">實踐</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Vue.js 和 Nuxt：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 6 部分：測試、部署和生產</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-sentry"><strong>1. 使用 Sentry 進行錯誤追蹤</strong></h2>

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

<h2 id="2-logging"><strong>2. 結構化日誌記錄</strong></h2>

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

<h2 id="3-health-checks"><strong>3. 健康檢查</strong></h2>

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

<h2 id="4-security"><strong>4. 安全最佳實踐</strong></h2>

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

<h2 id="5-monorepo"><strong>5. Monorepo 與 pnpm 工作區</strong></h2>

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

<h2 id="6-design-system"><strong>6. 設計系統</strong></h2>

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

<h2 id="7-checklist"><strong>7. 生產檢查表</strong></h2>

<table>
<thead><tr><th>類別</th><th>清單</th></tr></thead>
<tbody>
<tr><td>安全性</td><td>CSP 標頭、CSRF、速率限制、輸入驗證</td></tr>
<tr><td>效能</td><td>Lighthouse ≥ 90，bundle < 200KB，影像最佳化</td></tr>
<tr><td>監控</td><td>哨兵、健康檢查、正常運作時間監控</td></tr>
<tr><td>搜尋引擎優化</td><td>元標記、sitemap.xml、robots.txt、結構化數據</td></tr>
<tr><td>持續整合/持續交付</td><td>自動化測試、暫存環境、回溯計劃</td></tr>
<tr><td>備份</td><td>資料庫備份、環境機密輪調、災難復原</td></tr>
</tbody>
</table>

<p>🎉 完成該系列 <strong>Vue.js 和 Nuxt：從基礎到高級</strong>！</p>
