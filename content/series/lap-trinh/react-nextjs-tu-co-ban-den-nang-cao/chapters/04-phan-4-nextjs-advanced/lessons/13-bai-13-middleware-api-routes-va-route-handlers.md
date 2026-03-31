---
id: 019d8b40-d402-7001-b005-reactnx000402
title: 'Bài 13: Middleware, API Routes & Route Handlers'
slug: bai-13-middleware-api-routes-va-route-handlers
description: >-
  Next.js Middleware deep dive. Route Handlers (GET, POST, PUT, DELETE).
  Request/Response helpers. Rate limiting, CORS.
  Streaming responses, webhooks.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 13
section_title: "Phần 4: Next.js Advanced"
course:
  id: 019d8b40-d100-7001-b005-reactnx000001
  title: 'React & Next.js: Từ Cơ bản đến Nâng cao'
  slug: react-nextjs-tu-co-ban-den-nang-cao
---

<h2 id="1-middleware"><strong>1. Middleware Deep Dive</strong></h2>

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

<h2 id="2-route-handlers"><strong>2. Route Handlers</strong></h2>

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

<h2 id="3-dynamic-route"><strong>3. Dynamic Route Handlers</strong></h2>

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

<h2 id="4-cors"><strong>4. CORS Configuration</strong></h2>

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

<h2 id="5-streaming"><strong>5. Streaming Response</strong></h2>

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

<h2 id="6-webhooks"><strong>6. Webhooks</strong></h2>

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

<p>Bài tiếp theo: <strong>Database Integration & Prisma</strong> — ORM, migrations, relations, queries.</p>
