---
id: 019d8b40-d304-7001-b005-reactnx000304
title: 'Bài 11: Server Actions & Mutations'
slug: bai-11-server-actions-va-mutations
description: >-
  Server Actions, "use server". Form actions, progressive enhancement.
  Optimistic updates, useActionState. Error handling, revalidation sau mutation.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 11
section_title: "Phần 3: Next.js Fundamentals"
course:
  id: 019d8b40-d100-7001-b005-reactnx000001
  title: 'React & Next.js: Từ Cơ bản đến Nâng cao'
  slug: react-nextjs-tu-co-ban-den-nang-cao
---

<h2 id="1-server-actions"><strong>1. Server Actions là gì?</strong></h2>

<p>Server Actions là các hàm async chạy trên server, được gọi từ client thông qua form hoặc event handler. Thay thế API routes cho mutations.</p>

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

<h2 id="4-validation"><strong>4. Validation với Zod</strong></h2>

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

<h2 id="7-so-sanh"><strong>7. So sánh Server Actions vs API Routes</strong></h2>

<table>
<thead><tr><th>Feature</th><th>Server Actions</th><th>API Routes</th></tr></thead>
<tbody>
<tr><td>Progressive enhancement</td><td>✅ Works without JS</td><td>❌ Requires JS</td></tr>
<tr><td>Type safety</td><td>✅ End-to-end</td><td>⚠️ Manual</td></tr>
<tr><td>Revalidation</td><td>✅ Built-in</td><td>⚠️ Manual</td></tr>
<tr><td>Use case</td><td>Mutations từ UI</td><td>External API, webhooks</td></tr>
</tbody>
</table>

<p>Bài tiếp theo: <strong>Authentication với NextAuth.js</strong> — đăng nhập, phân quyền, session management.</p>
