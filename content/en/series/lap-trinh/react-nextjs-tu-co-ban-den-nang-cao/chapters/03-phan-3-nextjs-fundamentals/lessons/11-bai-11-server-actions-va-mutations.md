---
id: 019d8b40-d304-7001-b005-reactnx000304
title: 'Lesson 11: Server Actions & Mutations'
slug: bai-11-server-actions-va-mutations
description: >-
  Server Actions, "use server". Form actions, progressive enhancement.
  Optimistic updates, useActionState. Error handling, revalidation after
  mutation.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 11
section_title: 'Part 3: Next.js Fundamentals'
course:
  id: 019d8b40-d100-7001-b005-reactnx000001
  title: 'React & Next.js: From Basics to Advanced'
  slug: react-nextjs-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9529" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9529)"/>

  <!-- Decorations -->
  <g>
    <circle cx="764" cy="202" r="22" fill="#f472b6" opacity="0.07"/>
    <circle cx="928" cy="86" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="1092" cy="230" r="36" fill="#f472b6" opacity="0.11"/>
    <circle cx="756" cy="114" r="28" fill="#f472b6" opacity="0.13"/>
    <circle cx="920" cy="258" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="122" x2="1100" y2="202" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="152" x2="1050" y2="222" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="954.0429399400242,103.5 954.0429399400242,140.5 922,159 889.9570600599758,140.5 889.9570600599758,103.50000000000001 922,85" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">💻 Programming — Lesson 11</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 11: Server Actions & Mutations</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">React & Next.js: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: Next.js Fundamentals</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-server-actions"><strong>1. What are Server Actions?</strong></h2>

<p>Server Actions are async functions running on the server, called from the client via form or event handler. Replace API routes for mutations.</p>

<pre><code class="language-tsx">// actions.ts
'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { db } from '@/lib/db';

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;

  await db.post.create({
    data: { title, content },
  });

  revalidatePath('/posts');
  redirect('/posts');
}
</code></pre>

<h2 id="2-form-actions"><strong>2. Form Actions</strong></h2>

<pre><code class="language-tsx">// Server Component — no JS needed on client
import { createPost } from './actions';

export default function NewPostPage() {
  return (
    &lt;form action={createPost}&gt;
      &lt;input name="title" required placeholder="Tiêu đề" /&gt;
      &lt;textarea name="content" required placeholder="Nội dung" /&gt;
      &lt;button type="submit"&gt;Tạo bài viết&lt;/button&gt;
    &lt;/form&gt;
  );
}
</code></pre>

<h2 id="3-useActionState"><strong>3. useActionState</strong></h2>

<pre><code class="language-tsx">'use client';
import { useActionState } from 'react';
import { createPost } from './actions';

type State = {
  errors?: { title?: string; content?: string };
  message?: string;
};

export function PostForm() {
  const [state, formAction, isPending] = useActionState&lt;State, FormData&gt;(
    createPost,
    { errors: {}, message: '' }
  );

  return (
    &lt;form action={formAction}&gt;
      &lt;input name="title" /&gt;
      {state.errors?.title && &lt;p className="text-red-500"&gt;{state.errors.title}&lt;/p&gt;}

      &lt;textarea name="content" /&gt;
      {state.errors?.content && &lt;p className="text-red-500"&gt;{state.errors.content}&lt;/p&gt;}

      &lt;button type="submit" disabled={isPending}&gt;
        {isPending ? 'Đang tạo...' : 'Tạo bài viết'}
      &lt;/button&gt;

      {state.message && &lt;p&gt;{state.message}&lt;/p&gt;}
    &lt;/form&gt;
  );
}
</code></pre>

<h2 id="4-validation"><strong>4. Validation with Zod</strong></h2>

<pre><code class="language-tsx">// actions.ts
'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';

const PostSchema = z.object({
  title: z.string().min(3, 'Tiêu đề ít nhất 3 ký tự').max(100),
  content: z.string().min(10, 'Nội dung ít nhất 10 ký tự'),
});

export async function createPost(prevState: State, formData: FormData) {
  const parsed = PostSchema.safeParse({
    title: formData.get('title'),
    content: formData.get('content'),
  });

  if (!parsed.success) {
    return {
      errors: parsed.error.flatten().fieldErrors,
      message: 'Validation failed',
    };
  }

  try {
    await db.post.create({ data: parsed.data });
    revalidatePath('/posts');
    return { message: 'Tạo thành công!' };
  } catch {
    return { message: 'Có lỗi xảy ra' };
  }
}
</code></pre>

<h2 id="5-optimistic-updates"><strong>5. Optimistic Updates</strong></h2>

<pre><code class="language-tsx">'use client';
import { useOptimistic } from 'react';
import { toggleLike } from './actions';

export function LikeButton({ liked, count }: { liked: boolean; count: number }) {
  const [optimistic, addOptimistic] = useOptimistic(
    { liked, count },
    (state, newLiked: boolean) => ({
      liked: newLiked,
      count: newLiked ? state.count + 1 : state.count - 1,
    })
  );

  return (
    &lt;form action={async () => {
      addOptimistic(!optimistic.liked);
      await toggleLike();
    }}&gt;
      &lt;button type="submit"&gt;
        {optimistic.liked ? '❤️' : '🤍'} {optimistic.count}
      &lt;/button&gt;
    &lt;/form&gt;
  );
}
</code></pre>

<h2 id="6-delete-actions"><strong>6. Delete & Inline Actions</strong></h2>

<pre><code class="language-tsx">// Inline server action with bind
import { deletePost } from './actions';

export default async function PostList() {
  const posts = await db.post.findMany();

  return (
    &lt;ul&gt;
      {posts.map(post => {
        const deleteWithId = deletePost.bind(null, post.id);
        return (
          &lt;li key={post.id}&gt;
            {post.title}
            &lt;form action={deleteWithId}&gt;
              &lt;button type="submit"&gt;Xóa&lt;/button&gt;
            &lt;/form&gt;
          &lt;/li&gt;
        );
      })}
    &lt;/ul&gt;
  );
}
</code></pre>

<h2 id="7-so-sanh"><strong>7. Compare Server Actions vs API Routes</strong></h2>

<table>
<thead><tr><th>Features</th><th>Server Actions</th><th>API Routes</th></tr></thead>
<tbody>
<tr><td>Progressive enhancement</td><td>✅ Works without JS</td><td>❌ Requires JS</td></tr>
<tr><td>Type safety</td><td>✅ End-to-end</td><td>⚠️ Manual</td></tr>
<tr><td>Revalidation</td><td>✅ Built-in</td><td>⚠️ Manual</td></tr>
<tr><td>Use cases</td><td>Mutations from UI</td><td>External API, webhooks</td></tr>
</tbody>
</table>

<p>Next article: <strong>Authentication with NextAuth.js</strong> — login, authorization, session management.</p>
