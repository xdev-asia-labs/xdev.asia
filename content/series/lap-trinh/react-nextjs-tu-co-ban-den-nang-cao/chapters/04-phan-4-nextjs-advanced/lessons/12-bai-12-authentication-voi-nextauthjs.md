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
