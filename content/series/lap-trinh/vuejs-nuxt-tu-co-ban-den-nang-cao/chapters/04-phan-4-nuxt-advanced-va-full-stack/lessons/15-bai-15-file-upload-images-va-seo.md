---
id: 019d8b40-h403-7001-b009-vuenuxt000403
title: 'Bài 15: File Upload, Images & SEO'
slug: bai-15-file-upload-images-va-seo
description: >-
  File upload handling, S3 storage. @nuxt/image, responsive images,
  lazy loading. SEO với useSeoMeta, useHead. Sitemap, OG tags,
  structured data (JSON-LD).
duration_minutes: 100
is_free: true
video_url: null
sort_order: 15
section_title: "Phần 4: Nuxt Advanced & Full-Stack"
course:
  id: 019d8b40-h100-7001-b009-vuenuxt000001
  title: 'Vue.js & Nuxt: Từ Cơ bản đến Nâng cao'
  slug: vuejs-nuxt-tu-co-ban-den-nang-cao
---

<h2 id="1-upload"><strong>1. File Upload</strong></h2>

<pre><code class="language-ts">// server/api/upload.post.ts
export default defineEventHandler(async (event) => {
  const files = await readMultipartFormData(event)
  if (!files || files.length === 0) {
    throw createError({ statusCode: 400, message: 'No file uploaded' })
  }

  const file = files[0]
  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp']

  if (!allowedTypes.includes(file.type || '')) {
    throw createError({ statusCode: 400, message: 'Invalid file type' })
  }

  if (file.data.length > 5 * 1024 * 1024) {
    throw createError({ statusCode: 400, message: 'File too large (max 5MB)' })
  }

  const filename = `${Date.now()}-${file.filename}`

  // NuxtHub Blob (Cloudflare R2)
  const blob = await hubBlob().put(filename, file.data, {
    contentType: file.type,
  })

  return { url: blob.pathname }
})
</code></pre>

<h2 id="2-nuxt-image"><strong>2. @nuxt/image</strong></h2>

<pre><code class="language-vue">&lt;template&gt;
  &lt;!-- Basic --&gt;
  &lt;NuxtImg
    src="/images/hero.jpg"
    alt="Hero"
    width="800"
    height="400"
    loading="lazy"
    format="webp"
  /&gt;

  &lt;!-- Responsive sizes --&gt;
  &lt;NuxtImg
    src="/images/banner.jpg"
    sizes="sm:100vw md:50vw lg:400px"
    quality="80"
    placeholder
  /&gt;

  &lt;!-- Picture element with multiple formats --&gt;
  &lt;NuxtPicture
    src="/images/photo.jpg"
    format="avif,webp"
    sizes="sm:100vw md:50vw"
    quality="80"
  /&gt;
&lt;/template&gt;
</code></pre>

<h2 id="3-seo"><strong>3. SEO với useSeoMeta</strong></h2>

<pre><code class="language-vue">&lt;script setup lang="ts"&gt;
// Static SEO
useSeoMeta({
  title: 'Trang chủ | xDev',
  ogTitle: 'xDev - Nền tảng học lập trình',
  description: 'Học lập trình miễn phí với các khóa học chất lượng',
  ogDescription: 'Học lập trình miễn phí',
  ogImage: '/images/og-default.jpg',
  twitterCard: 'summary_large_image',
})
&lt;/script&gt;
</code></pre>

<pre><code class="language-vue">&lt;!-- Dynamic SEO --&gt;
&lt;script setup lang="ts"&gt;
const { data: post } = await useFetch(`/api/posts/${slug}`)

useSeoMeta({
  title: () => post.value?.title,
  ogTitle: () => post.value?.title,
  description: () => post.value?.description,
  ogImage: () => post.value?.image,
  ogType: 'article',
  articlePublishedTime: () => post.value?.createdAt,
})

// useHead for full control
useHead({
  script: [
    {
      type: 'application/ld+json',
      textContent: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.value?.title,
        image: post.value?.image,
        datePublished: post.value?.createdAt,
      }),
    },
  ],
})
&lt;/script&gt;
</code></pre>

<h2 id="4-sitemap"><strong>4. Sitemap Generation</strong></h2>

<pre><code class="language-bash">npx nuxi module add @nuxtjs/sitemap
</code></pre>

<pre><code class="language-ts">// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/sitemap'],
  sitemap: {
    sources: ['/api/__sitemap__/urls'],
  },
  site: {
    url: 'https://xdev.asia',
  },
})

// server/api/__sitemap__/urls.ts
export default defineSitemapEventHandler(async () => {
  const posts = await db.select({ slug: schema.posts.slug, updatedAt: schema.posts.updatedAt })
    .from(schema.posts)
    .where(eq(schema.posts.published, true))

  return posts.map(post => ({
    loc: `/blog/${post.slug}`,
    lastmod: post.updatedAt,
    priority: 0.7,
  }))
})
</code></pre>

<p>Bài tiếp theo: <strong>Real-time, WebSockets & i18n</strong> — tương tác thời gian thực và đa ngôn ngữ.</p>
