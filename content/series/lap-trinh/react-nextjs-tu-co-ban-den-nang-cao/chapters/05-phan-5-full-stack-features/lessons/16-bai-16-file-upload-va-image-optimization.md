---
id: 019d8b40-d501-7001-b005-reactnx000501
title: 'Bài 16: File Upload & Image Optimization'
slug: bai-16-file-upload-va-image-optimization
description: >-
  File upload với Server Actions. next/image component, responsive images.
  Cloud storage (S3, Cloudinary). Image optimization strategies.
duration_minutes: 100
is_free: true
video_url: null
sort_order: 16
section_title: "Phần 5: Full-Stack Features"
course:
  id: 019d8b40-d100-7001-b005-reactnx000001
  title: 'React & Next.js: Từ Cơ bản đến Nâng cao'
  slug: react-nextjs-tu-co-ban-den-nang-cao
---

<h2 id="1-upload-server-action"><strong>1. File Upload với Server Action</strong></h2>

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

<h2 id="5-s3-upload"><strong>5. Upload lên S3</strong></h2>

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

<p>Bài tiếp theo: <strong>Real-time & WebSockets</strong> — tương tác thời gian thực.</p>
