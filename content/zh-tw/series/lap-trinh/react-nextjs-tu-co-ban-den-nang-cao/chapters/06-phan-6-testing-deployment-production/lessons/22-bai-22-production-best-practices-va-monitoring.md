---
id: 019d8b40-d604-7001-b005-reactnx000604
title: 第 22 課：生產最佳實務與監控
slug: bai-22-production-best-practices-va-monitoring
description: 錯誤跟踪（哨兵）。記錄最佳實踐。健康檢查，優雅關閉。安全標頭。速率限制、監控儀表板。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 22
section_title: 第 6 部分：測試、部署和生產
course:
  id: 019d8b40-d100-7001-b005-reactnx000001
  title: React 和 Next.js：從基礎到高級
  slug: react-nextjs-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4387" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4387)"/>

  <!-- Decorations -->
  <g>
    <circle cx="870" cy="260" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="640" cy="250" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="910" cy="240" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="680" cy="230" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="950" cy="220" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="60" x2="1100" y2="140" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="90" x2="1050" y2="160" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="940.3108891324554,92.5 940.3108891324554,127.5 910,145 879.6891108675446,127.5 879.6891108675446,92.50000000000001 910,75" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">💻 程式設計 — 第 22 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 22 課：生產最佳實務 &</tspan>
      <tspan x="60" dy="42">監控</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">React 和 Next.js：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 6 部分：測試、部署和生產</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-sentry"><strong>1. 使用 Sentry 進行錯誤追蹤</strong></h2>

<pre><code class="language-bash">npx @sentry/wizard@latest -i nextjs
</code></pre>

<pre><code class="language-ts">// sentry.client.config.ts
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 0.1, // 10% of transactions
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  integrations: [
    Sentry.replayIntegration(),
    Sentry.feedbackIntegration({ colorScheme: 'system' }),
  ],
});
</code></pre>

<pre><code class="language-tsx">// app/global-error.tsx
'use client';
import * as Sentry from '@sentry/nextjs';
import { useEffect } from 'react';

export default function GlobalError({ error, reset }: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    &lt;html&gt;
      &lt;body&gt;
        &lt;h2&gt;Đã xảy ra lỗi!&lt;/h2&gt;
        &lt;button onClick={reset}&gt;Thử lại&lt;/button&gt;
      &lt;/body&gt;
    &lt;/html&gt;
  );
}
</code></pre>

<h2 id="2-logging"><strong>2. 日誌記錄最佳實踐</strong></h2>

<pre><code class="language-ts">// lib/logger.ts
import pino from 'pino';

export const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  transport: process.env.NODE_ENV === 'development'
    ? { target: 'pino-pretty' }
    : undefined,
  formatters: {
    level(label) { return { level: label }; },
  },
  base: {
    env: process.env.NODE_ENV,
    service: 'nextjs-app',
  },
});

// Sử dụng
logger.info({ userId: '123', action: 'login' }, 'User logged in');
logger.error({ err: error, requestId }, 'Request failed');
</code></pre>

<h2 id="3-security"><strong>3. 安全標頭</strong></h2>

<pre><code class="language-ts">// next.config.ts
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';",
  },
];

const config = {
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
};
</code></pre>

<h2 id="4-health-check"><strong>4. 健康檢查</strong></h2>

<pre><code class="language-ts">// app/api/health/route.ts
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  try {
    // Check database
    await db.$queryRaw`SELECT 1`;

    return NextResponse.json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      checks: {
        database: 'ok',
        memory: process.memoryUsage(),
      },
    });
  } catch (error) {
    return NextResponse.json(
      { status: 'unhealthy', error: 'Database connection failed' },
      { status: 503 }
    );
  }
}

// app/api/ready/route.ts — Kubernetes readiness probe
export async function GET() {
  // Check all external dependencies
  const checks = await Promise.allSettled([
    db.$queryRaw`SELECT 1`,
    fetch(process.env.REDIS_URL + '/ping'),
  ]);

  const allHealthy = checks.every(c => c.status === 'fulfilled');
  return NextResponse.json(
    { ready: allHealthy },
    { status: allHealthy ? 200 : 503 }
  );
}
</code></pre>

<h2 id="5-rate-limiting"><strong>5. 速率限制</strong></h2>

<pre><code class="language-ts">// middleware.ts — Simple rate limiting
import { NextRequest, NextResponse } from 'next/server';

const rateLimit = new Map&lt;string, { count: number; resetTime: number }&gt;();

export function middleware(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  const ip = request.headers.get('x-forwarded-for') || 'unknown';
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute
  const maxRequests = 100;

  const record = rateLimit.get(ip);

  if (!record || now > record.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + windowMs });
    return NextResponse.next();
  }

  if (record.count >= maxRequests) {
    return NextResponse.json(
      { error: 'Too many requests' },
      { status: 429, headers: { 'Retry-After': '60' } }
    );
  }

  record.count++;
  return NextResponse.next();
}
</code></pre>

<h2 id="6-checklist"><strong>6. 生產檢查表</strong></h2>

<table>
<thead><tr><th>類別</th><th>專案</th><th>狀態</th></tr></thead>
<tbody>
<tr><td>安全性</td><td>配置的安全標頭</td><td>⑨</td></tr>
<tr><td>安全性</td><td>CSRF 保護（伺服器操作）</td><td>⑨</td></tr>
<tr><td>安全性</td><td>已啟用速率限制</td><td>⑨</td></tr>
<tr><td>安全性</td><td>環境變數已驗證</td><td>⑨</td></tr>
<tr><td>效能</td><td>優化影像（下一張/影像）</td><td>⑨</td></tr>
<tr><td>效能</td><td>優化字體（下一個/字體）</td><td>⑨</td></tr>
<tr><td>效能</td><td>捆綁包分析與最佳化</td><td>⑨</td></tr>
<tr><td>監控</td><td>錯誤跟踪（哨兵）</td><td>⑨</td></tr>
<tr><td>監控</td><td>結構化日誌記錄</td><td>⑨</td></tr>
<tr><td>監控</td><td>健康檢查端點</td><td>⑨</td></tr>
<tr><td>部署</td><td>Docker 多階段建置</td><td>⑨</td></tr>
<tr><td>部署</td><td>CI/CD 管道</td><td>⑨</td></tr>
<tr><td>部署</td><td>CI 中的資料庫遷移</td><td>⑨</td></tr>
<tr><td>搜尋引擎優化</td><td>網站地圖和 robots.txt</td><td>⑨</td></tr>
<tr><td>搜尋引擎優化</td><td>OpenGraph 和結構化數據</td><td>⑨</td></tr>
</tbody>
</table>

<p>🎉 <strong>恭喜！</strong> 您已完成從基礎到進階的 React 和 Next.js 課程。將您的知識應用到實際項目中！</p>
