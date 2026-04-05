---
id: 019d8b40-d401-7001-b005-reactnx000401
title: 'Bài 12: Authentication với NextAuth.js'
slug: bai-12-authentication-voi-nextauthjs
description: >-
  NextAuth.js (Auth.js) setup. OAuth providers (Google, GitHub).
  Credentials provider, JWT vs Session. Middleware protection,
  role-based access control.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 12
section_title: "Phần 4: Next.js Advanced"
course:
  id: 019d8b40-d100-7001-b005-reactnx000001
  title: 'React & Next.js: Từ Cơ bản đến Nâng cao'
  slug: react-nextjs-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3513" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3513)"/>

  <!-- Decorations -->
  <g>
    <circle cx="861" cy="253" r="14" fill="#34d399" opacity="0.08"/>
    <circle cx="622" cy="154" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="883" cy="55" r="20" fill="#34d399" opacity="0.14"/>
    <circle cx="644" cy="216" r="23" fill="#34d399" opacity="0.07"/>
    <circle cx="905" cy="117" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="103" x2="1100" y2="183" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="133" x2="1050" y2="203" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="935.9089653438086,84 935.9089653438086,122 903,141 870.0910346561914,122 870.0910346561914,84.00000000000001 903,65" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">💻 Lập trình — Bài 12</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 12: Authentication với NextAuth.js</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">React &amp; Next.js: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 4: Next.js Advanced</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-setup-authjs"><strong>1. Setup Auth.js (NextAuth v5)</strong></h2>

<pre><code class="language-bash">npm install next-auth@beta
</code></pre>

<pre><code class="language-ts">// auth.ts
import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import GitHub from 'next-auth/providers/github';
import Credentials from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { db } from '@/lib/db';
import bcrypt from 'bcryptjs';

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHub({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const user = await db.user.findUnique({
          where: { email: credentials.email as string },
        });
        if (!user?.hashedPassword) return null;
        const valid = await bcrypt.compare(
          credentials.password as string,
          user.hashedPassword
        );
        return valid ? user : null;
      },
    }),
  ],
  session: { strategy: 'jwt' },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.sub!;
      session.user.role = token.role as string;
      return session;
    },
  },
});
</code></pre>

<h2 id="2-route-handler"><strong>2. Route Handler</strong></h2>

<pre><code class="language-ts">// app/api/auth/[...nextauth]/route.ts
import { handlers } from '@/auth';
export const { GET, POST } = handlers;
</code></pre>

<h2 id="3-middleware"><strong>3. Middleware Protection</strong></h2>

<pre><code class="language-ts">// middleware.ts
import { auth } from '@/auth';

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const isAuthPage = req.nextUrl.pathname.startsWith('/auth');
  const isProtected = req.nextUrl.pathname.startsWith('/dashboard');

  if (isProtected && !isLoggedIn) {
    return Response.redirect(new URL('/auth/login', req.nextUrl));
  }

  if (isAuthPage && isLoggedIn) {
    return Response.redirect(new URL('/dashboard', req.nextUrl));
  }
});

export const config = {
  matcher: ['/dashboard/:path*', '/auth/:path*'],
};
</code></pre>

<h2 id="4-server-component"><strong>4. Sử dụng trong Server Component</strong></h2>

<pre><code class="language-tsx">import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const session = await auth();

  if (!session) redirect('/auth/login');

  return (
    &lt;div&gt;
      &lt;h1&gt;Xin chào, {session.user?.name}&lt;/h1&gt;
      &lt;p&gt;Role: {session.user?.role}&lt;/p&gt;
      &lt;img src={session.user?.image || ''} alt="Avatar" /&gt;
    &lt;/div&gt;
  );
}
</code></pre>

<h2 id="5-client-component"><strong>5. Sử dụng trong Client Component</strong></h2>

<pre><code class="language-tsx">'use client';
import { useSession, signIn, signOut } from 'next-auth/react';

export function AuthButton() {
  const { data: session, status } = useSession();

  if (status === 'loading') return &lt;div&gt;Loading...&lt;/div&gt;;

  if (session) {
    return (
      &lt;div&gt;
        &lt;span&gt;{session.user?.name}&lt;/span&gt;
        &lt;button onClick={() => signOut()}&gt;Đăng xuất&lt;/button&gt;
      &lt;/div&gt;
    );
  }

  return (
    &lt;div&gt;
      &lt;button onClick={() => signIn('google')}&gt;Google&lt;/button&gt;
      &lt;button onClick={() => signIn('github')}&gt;GitHub&lt;/button&gt;
    &lt;/div&gt;
  );
}
</code></pre>

<h2 id="6-rbac"><strong>6. Role-Based Access Control</strong></h2>

<pre><code class="language-tsx">// lib/auth-utils.ts
import { auth } from '@/auth';

export async function requireRole(role: string) {
  const session = await auth();
  if (!session || session.user?.role !== role) {
    throw new Error('Unauthorized');
  }
  return session;
}

// app/admin/page.tsx
import { requireRole } from '@/lib/auth-utils';

export default async function AdminPage() {
  const session = await requireRole('admin');
  return &lt;div&gt;Admin Dashboard — {session.user?.name}&lt;/div&gt;;
}
</code></pre>

<h2 id="7-login-form"><strong>7. Login Form với Server Action</strong></h2>

<pre><code class="language-tsx">'use server';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

export async function loginAction(prevState: any, formData: FormData) {
  try {
    await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirectTo: '/dashboard',
    });
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: 'Email hoặc mật khẩu không đúng' };
    }
    throw error;
  }
}
</code></pre>

<p>Bài tiếp theo: <strong>Middleware, API Routes & Route Handlers</strong> — xử lý request/response nâng cao.</p>
