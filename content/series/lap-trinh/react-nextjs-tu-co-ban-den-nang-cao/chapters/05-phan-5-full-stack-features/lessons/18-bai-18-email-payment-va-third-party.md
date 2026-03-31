---
id: 019d8b40-d503-7001-b005-reactnx000503
title: 'Bài 18: Email, Payment & Third-party Integration'
slug: bai-18-email-payment-va-third-party
description: >-
  Gửi email với Resend & React Email. Stripe payment integration.
  Checkout flow, subscription. Third-party SDK patterns.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 18
section_title: "Phần 5: Full-Stack Features"
course:
  id: 019d8b40-d100-7001-b005-reactnx000001
  title: 'React & Next.js: Từ Cơ bản đến Nâng cao'
  slug: react-nextjs-tu-co-ban-den-nang-cao
---

<h2 id="1-resend"><strong>1. Email với Resend</strong></h2>

<pre><code class="language-bash">npm install resend @react-email/components
</code></pre>

<pre><code class="language-tsx">// emails/welcome.tsx — React Email template
import { Html, Head, Body, Container, Heading, Text, Button } from '@react-email/components';

export function WelcomeEmail({ name, url }: { name: string; url: string }) {
  return (
    &lt;Html&gt;
      &lt;Head /&gt;
      &lt;Body style={{ fontFamily: 'sans-serif' }}&gt;
        &lt;Container&gt;
          &lt;Heading&gt;Chào mừng, {name}!&lt;/Heading&gt;
          &lt;Text&gt;Cảm ơn bạn đã đăng ký tài khoản.&lt;/Text&gt;
          &lt;Button href={url} style={{ background: '#0070f3', color: '#fff', padding: '12px 24px' }}&gt;
            Xác nhận email
          &lt;/Button&gt;
        &lt;/Container&gt;
      &lt;/Body&gt;
    &lt;/Html&gt;
  );
}
</code></pre>

<pre><code class="language-ts">// lib/email.ts
import { Resend } from 'resend';
import { WelcomeEmail } from '@/emails/welcome';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWelcomeEmail(email: string, name: string) {
  await resend.emails.send({
    from: 'noreply@xdev.asia',
    to: email,
    subject: `Chào mừng ${name} đến với xDev!`,
    react: WelcomeEmail({ name, url: `https://xdev.asia/verify?email=${email}` }),
  });
}
</code></pre>

<h2 id="2-stripe-setup"><strong>2. Stripe Payment Setup</strong></h2>

<pre><code class="language-bash">npm install stripe @stripe/stripe-js @stripe/react-stripe-js
</code></pre>

<pre><code class="language-ts">// lib/stripe.ts
import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
});
</code></pre>

<h2 id="3-checkout"><strong>3. Checkout Flow</strong></h2>

<pre><code class="language-ts">// app/api/checkout/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { auth } from '@/auth';

export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { priceId } = await request.json();

  const checkoutSession = await stripe.checkout.sessions.create({
    customer_email: session.user?.email!,
    mode: 'payment', // or 'subscription'
    payment_method_types: ['card'],
    line_items: [
      { price: priceId, quantity: 1 },
    ],
    success_url: `${process.env.NEXT_PUBLIC_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/payment/cancel`,
    metadata: {
      userId: session.user?.id!,
    },
  });

  return NextResponse.json({ url: checkoutSession.url });
}
</code></pre>

<pre><code class="language-tsx">// Client — Redirect to Stripe Checkout
'use client';

export function CheckoutButton({ priceId }: { priceId: string }) {
  const handleCheckout = async () => {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ priceId }),
    });
    const { url } = await res.json();
    window.location.href = url;
  };

  return (
    &lt;button onClick={handleCheckout}&gt;
      Mua ngay
    &lt;/button&gt;
  );
}
</code></pre>

<h2 id="4-webhook"><strong>4. Stripe Webhook</strong></h2>

<pre><code class="language-ts">// app/api/webhooks/stripe/route.ts
import { stripe } from '@/lib/stripe';
import { headers } from 'next/headers';
import { db } from '@/lib/db';

export async function POST(request: Request) {
  const body = await request.text();
  const headersList = await headers();
  const signature = headersList.get('stripe-signature')!;

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch {
    return new Response('Invalid signature', { status: 400 });
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object;
      await db.order.create({
        data: {
          userId: session.metadata?.userId!,
          stripeSessionId: session.id,
          amount: session.amount_total! / 100,
          status: 'completed',
        },
      });
      break;
    }
    case 'invoice.payment_failed': {
      const invoice = event.data.object;
      // Handle failed subscription payment
      break;
    }
  }

  return new Response('OK');
}
</code></pre>

<h2 id="5-subscription"><strong>5. Subscription Management</strong></h2>

<pre><code class="language-ts">// Server Action — manage subscription
'use server';
import { stripe } from '@/lib/stripe';
import { auth } from '@/auth';
import { db } from '@/lib/db';

export async function createCustomerPortal() {
  const session = await auth();
  if (!session) throw new Error('Unauthorized');

  const user = await db.user.findUnique({
    where: { id: session.user?.id },
  });

  const portalSession = await stripe.billingPortal.sessions.create({
    customer: user!.stripeCustomerId!,
    return_url: `${process.env.NEXT_PUBLIC_URL}/settings/billing`,
  });

  return { url: portalSession.url };
}
</code></pre>

<p>Bài tiếp theo: <strong>Testing React & Next.js</strong> — unit test, integration test, E2E.</p>
