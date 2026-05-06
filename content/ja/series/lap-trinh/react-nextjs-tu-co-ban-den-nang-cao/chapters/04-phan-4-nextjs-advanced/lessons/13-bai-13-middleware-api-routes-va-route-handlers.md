---
id: 019d8b40-d402-7001-b005-reactnx000402
title: 'レッスン 13: ミドルウェア、API ルート、ルート ハンドラー'
slug: bai-13-middleware-api-routes-va-route-handlers
description: >-
  Next.js ミドルウェアの詳細。ルート ハンドラー
  (GET、POST、PUT、DELETE)。リクエスト/レスポンスヘルパー。レート制限、CORS。ストリーミング応答、Webhook。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 13
section_title: 'パート 4: Next.js の上級者向け'
course:
  id: 019d8b40-d100-7001-b005-reactnx000001
  title: 'React と Next.js: 基本から高度まで'
  slug: react-nextjs-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4508" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4508)"/>

  <!-- Decorations -->
  <g>
    <circle cx="694" cy="232" r="12" fill="#f472b6" opacity="0.07"/>
    <circle cx="788" cy="126" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="882" cy="280" r="16" fill="#f472b6" opacity="0.11"/>
    <circle cx="976" cy="174" r="18" fill="#f472b6" opacity="0.13"/>
    <circle cx="1070" cy="68" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="212" x2="1100" y2="292" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="242" x2="1050" y2="312" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="985.3826859021799,148.5 985.3826859021799,175.5 962,189 938.6173140978201,175.5 938.6173140978201,148.5 962,135" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">💻 プログラミング — レッスン 13</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 13: ミドルウェア、API ルートおよびルート</tspan>
      <tspan x="60" dy="42">ハンドラー</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">React と Next.js: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: Next.js の上級者向け</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-middleware"><strong>1. ミドルウェアの詳細</strong></h2>

<pre><code class="language-ts">// middleware.ts — runs BEFORE every matched route
import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Read & modify headers
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-request-id', crypto.randomUUID());

  // Redirect
  if (request.nextUrl.pathname === '/old-page') {
    return NextResponse.redirect(new URL('/new-page', request.url));
  }

  // Rewrite (URL stays same, content from different path)
  if (request.nextUrl.pathname.startsWith('/api/v1')) {
    return NextResponse.rewrite(
      new URL(request.nextUrl.pathname.replace('/v1', '/v2'), request.url)
    );
  }

  // Continue with modified headers
  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
</code></pre>

<h2 id="2-route-handlers"><strong>2. ルートハンドラー</strong></h2>

<pre><code class="language-ts">// app/api/posts/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '10');

  const posts = await db.post.findMany({
    skip: (page - 1) * limit,
    take: limit,
    orderBy: { createdAt: 'desc' },
  });

  return NextResponse.json({ data: posts, page, limit });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const post = await db.post.create({
    data: {
      title: body.title,
      content: body.content,
    },
  });

  return NextResponse.json(post, { status: 201 });
}
</code></pre>

<h2 id="3-dynamic-route"><strong>3. 動的ルートハンドラー</strong></h2>

<pre><code class="language-ts">// app/api/posts/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise&lt;{ id: string }&gt; }
) {
  const { id } = await params;
  const post = await db.post.findUnique({ where: { id } });

  if (!post) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  return NextResponse.json(post);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise&lt;{ id: string }&gt; }
) {
  const { id } = await params;
  const body = await request.json();
  const post = await db.post.update({
    where: { id },
    data: body,
  });
  return NextResponse.json(post);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise&lt;{ id: string }&gt; }
) {
  const { id } = await params;
  await db.post.delete({ where: { id } });
  return new NextResponse(null, { status: 204 });
}
</code></pre>

<h2 id="4-cors"><strong>4. CORS の設定</strong></h2>

<pre><code class="language-ts">// middleware.ts hoặc route handler
const corsHeaders = {
  'Access-Control-Allow-Origin': 'https://example.com',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders });
}

export async function GET(request: NextRequest) {
  const data = { message: 'Hello' };
  return NextResponse.json(data, { headers: corsHeaders });
}
</code></pre>

<h2 id="5-streaming"><strong>5. ストリーミング応答</strong></h2>

<pre><code class="language-ts">// app/api/stream/route.ts
export async function GET() {
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      for (let i = 0; i &lt; 10; i++) {
        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify({ count: i })}\n\n`)
        );
        await new Promise(r => setTimeout(r, 1000));
      }
      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    },
  });
}
</code></pre>

<h2 id="6-webhooks"><strong>6. Webhook</strong></h2>

<pre><code class="language-ts">// app/api/webhooks/stripe/route.ts
import { headers } from 'next/headers';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
  const body = await request.text();
  const headersList = await headers();
  const signature = headersList.get('stripe-signature')!;

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  switch (event.type) {
    case 'checkout.session.completed':
      // Handle successful payment
      break;
    case 'invoice.payment_failed':
      // Handle failed payment
      break;
  }

  return NextResponse.json({ received: true });
}
</code></pre>

<p>次の記事: <strong>データベース統合と Prisma</strong> — ORM、移行、関係、クエリ。</p>
