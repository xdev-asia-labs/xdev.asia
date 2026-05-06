---
id: 019d8b40-d604-7001-b005-reactnx000604
title: 'レッスン 22: 本番環境のベスト プラクティスとモニタリング'
slug: bai-22-production-best-practices-va-monitoring
description: エラー追跡 (セントリー)。ロギングのベストプラクティス。ヘルスチェック、正常なシャットダウン。セキュリティヘッダー。レート制限、監視ダッシュボード。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 22
section_title: 'パート 6: テスト、展開、実稼働'
course:
  id: 019d8b40-d100-7001-b005-reactnx000001
  title: 'React と Next.js: 基本から高度まで'
  slug: react-nextjs-tu-co-ban-den-nang-cao
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">💻 プログラミング — レッスン 22</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 22: 本番環境のベスト プラクティスと</tspan>
      <tspan x="60" dy="42">モニタリング</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">React と Next.js: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 6: テスト、展開、実稼働</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-sentry"><strong>1. Sentry によるエラー追跡</strong></h2>

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

<h2 id="2-logging"><strong>2. ロギングのベストプラクティス</strong></h2>

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

<h2 id="3-security"><strong>3. セキュリティヘッダー</strong></h2>

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

<h2 id="4-health-check"><strong>4. ヘルスチェック</strong></h2>

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

<h2 id="5-rate-limiting"><strong>5. レート制限</strong></h2>

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

<h2 id="6-checklist"><strong>6. 制作チェックリスト</strong></h2>

<table>
<thead><tr><th>カテゴリ</th><th>アイテム</th><th>ステータス</th></tr></thead>
<tbody>
<tr><td>セキュリティ</td><td>設定されたセキュリティヘッダー</td><td>☐</td></tr>
<tr><td>セキュリティ</td><td>CSRF 保護 (サーバー アクション)</td><td>☐</td></tr>
<tr><td>セキュリティ</td><td>レート制限が有効になっています</td><td>☐</td></tr>
<tr><td>セキュリティ</td><td>環境変数が検証されました</td><td>☐</td></tr>
<tr><td>パフォーマンス</td><td>最適化された画像 (次/画像)</td><td>☐</td></tr>
<tr><td>パフォーマンス</td><td>フォントの最適化 (次へ/フォント)</td><td>☐</td></tr>
<tr><td>パフォーマンス</td><td>バンドルの分析と最適化</td><td>☐</td></tr>
<tr><td>モニタリング</td><td>エラー追跡 (セントリー)</td><td>☐</td></tr>
<tr><td>モニタリング</td><td>構造化されたロギング</td><td>☐</td></tr>
<tr><td>モニタリング</td><td>ヘルスチェックエンドポイント</td><td>☐</td></tr>
<tr><td>デプロイ</td><td>Docker のマルチステージ ビルド</td><td>☐</td></tr>
<tr><td>デプロイ</td><td>CI/CD パイプライン</td><td>☐</td></tr>
<tr><td>デプロイ</td><td>CI でのデータベースの移行</td><td>☐</td></tr>
<tr><td>SEO</td><td>サイトマップとrobots.txt</td><td>☐</td></tr>
<tr><td>SEO</td><td>OpenGraph と構造化データ</td><td>☐</td></tr>
</tbody>
</table>

<p>🎉 <strong>おめでとうございます！</strong> React & Next.js コースの基本から上級までを完了しました。知識を実際のプロジェクトに応用してください。</p>
