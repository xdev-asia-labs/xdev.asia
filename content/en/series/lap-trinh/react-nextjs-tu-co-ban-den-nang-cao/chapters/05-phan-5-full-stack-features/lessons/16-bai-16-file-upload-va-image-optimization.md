---
id: 019d8b40-d501-7001-b005-reactnx000501
title: 'Lesson 16: File Upload & Image Optimization'
slug: bai-16-file-upload-va-image-optimization
description: >-
  File upload with Server Actions. next/image component, responsive images.
  Cloud storage (S3, Cloudinary). Image optimization strategies.
duration_minutes: 100
is_free: true
video_url: null
sort_order: 16
section_title: 'Part 5: Full-Stack Features'
course:
  id: 019d8b40-d100-7001-b005-reactnx000001
  title: 'React & Next.js: From Basics to Advanced'
  slug: react-nextjs-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6934" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6934)"/>

  <!-- Decorations -->
  <g>
    <circle cx="931" cy="263" r="34" fill="#34d399" opacity="0.08"/>
    <circle cx="762" cy="254" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="1093" cy="245" r="30" fill="#34d399" opacity="0.14"/>
    <circle cx="924" cy="236" r="13" fill="#34d399" opacity="0.07"/>
    <circle cx="755" cy="227" r="26" fill="#34d399" opacity="0.1"/>
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
    <line x1="600" y1="113" x2="1100" y2="193" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="143" x2="1050" y2="213" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="937.2487113059643,99 937.2487113059643,127 913,141 888.7512886940357,127 888.7512886940357,99 913,85" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">💻 Programming — Lesson 16</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 16: File Upload & Image Optimization</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">React & Next.js: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 5: Full-Stack Features</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-upload-server-action"><strong>1. File Upload with Server Action</strong></h2>

<pre><code class="language-tsx">// actions/upload.ts
'use server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import crypto from 'crypto';

export async function uploadFile(formData: FormData) {
  const file = formData.get('file') as File;
  if (!file || file.size === 0) {
    return { error: 'Chưa chọn file' };
  }

  // Validate file type
  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
  if (!allowedTypes.includes(file.type)) {
    return { error: 'Chỉ cho phép JPEG, PNG, WebP' };
  }

  // Validate size (max 5MB)
  if (file.size > 5 * 1024 * 1024) {
    return { error: 'File tối đa 5MB' };
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Generate unique filename
  const ext = path.extname(file.name);
  const filename = `${crypto.randomUUID()}${ext}`;
  const uploadDir = path.join(process.cwd(), 'public/uploads');

  await mkdir(uploadDir, { recursive: true });
  await writeFile(path.join(uploadDir, filename), buffer);

  return { url: `/uploads/${filename}` };
}
</code></pre>

<h2 id="2-upload-form"><strong>2. Upload Form Component</strong></h2>

<pre><code class="language-tsx">'use client';
import { useState, useRef } from 'react';
import { uploadFile } from '@/actions/upload';

export function UploadForm() {
  const [preview, setPreview] = useState&lt;string | null&gt;(null);
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef&lt;HTMLInputElement&gt;(null);

  const handleChange = (e: React.ChangeEvent&lt;HTMLInputElement&gt;) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (formData: FormData) => {
    setUploading(true);
    const result = await uploadFile(formData);
    setUploading(false);

    if (result.error) {
      alert(result.error);
    } else {
      alert(`Uploaded: ${result.url}`);
    }
  };

  return (
    &lt;form action={handleSubmit}&gt;
      &lt;input
        ref={inputRef}
        type="file"
        name="file"
        accept="image/*"
        onChange={handleChange}
      /&gt;
      {preview && &lt;img src={preview} alt="Preview" width={200} /&gt;}
      &lt;button type="submit" disabled={uploading}&gt;
        {uploading ? 'Đang upload...' : 'Upload'}
      &lt;/button&gt;
    &lt;/form&gt;
  );
}
</code></pre>

<h2 id="3-next-image"><strong>3. next/image Component</strong></h2>

<pre><code class="language-tsx">import Image from 'next/image';

// Local image — tự động optimize
&lt;Image
  src="/images/hero.jpg"
  alt="Hero"
  width={1200}
  height={630}
  priority // Preload for LCP image
/&gt;

// Remote image — cần config domain
&lt;Image
  src="https://cdn.example.com/photo.jpg"
  alt="Photo"
  width={800}
  height={600}
  quality={80}
  placeholder="blur"
  blurDataURL="data:image/..."
/&gt;

// Fill mode — responsive container
&lt;div className="relative w-full h-64"&gt;
  &lt;Image
    src="/images/banner.jpg"
    alt="Banner"
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-cover"
  /&gt;
&lt;/div&gt;
</code></pre>

<h2 id="4-next-config"><strong>4. Image Config</strong></h2>

<pre><code class="language-ts">// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.example.com',
      },
      {
        protocol: 'https',
        hostname: '*.amazonaws.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
};

export default nextConfig;
</code></pre>

<h2 id="5-s3-upload"><strong>5. Upload to S3</strong></h2>

<pre><code class="language-ts">// lib/s3.ts
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const s3 = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function getPresignedUrl(filename: string, contentType: string) {
  const key = `uploads/${Date.now()}-${filename}`;
  const command = new PutObjectCommand({
    Bucket: process.env.S3_BUCKET!,
    Key: key,
    ContentType: contentType,
  });

  const url = await getSignedUrl(s3, command, { expiresIn: 600 });
  return { url, key };
}
</code></pre>

<p>Next article: <strong>Real-time & WebSockets</strong> — real-time interaction.</p>
