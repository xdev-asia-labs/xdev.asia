---
id: 019d8b40-i204-7001-b010-laravel000204
title: 'Lesson 8: File Storage & Media'
slug: bai-8-file-storage-va-media
description: >-
  Filesystem abstraction (local, S3, GCS). File upload, validation. Spatie Media
  Library. Image manipulation (Intervention Image). Temporary URLs, streaming
  downloads.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 8
section_title: 'Part 2: Database & Validation'
course:
  id: 019d8b40-i100-7001-b010-laravel000001
  title: 'Laravel: From Basics to Advanced'
  slug: laravel-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4356" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4356)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1039" cy="67" r="32" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="978" cy="166" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="917" cy="265" r="26" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="856" cy="104" r="23" fill="#818cf8" opacity="0.13"/>
    <circle cx="795" cy="203" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="197" x2="1100" y2="277" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="227" x2="1050" y2="297" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1074.712812921102,231 1074.712812921102,263 1047,279 1019.287187078898,263 1019.287187078898,231 1047,215" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">💻 Programming — Lesson 8</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 8: File Storage & Media</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Laravel: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Database & Validation</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-filesystem"><strong>1. Filesystem</strong></h2>

<pre><code class="language-php">use Illuminate\Support\Facades\Storage;

// Upload
$path = $request->file('avatar')->store('avatars', 'public');

// S3 config (config/filesystems.php)
's3' => [
    'driver' => 's3',
    'key' => env('AWS_ACCESS_KEY_ID'),
    'secret' => env('AWS_SECRET_ACCESS_KEY'),
    'region' => env('AWS_DEFAULT_REGION'),
    'bucket' => env('AWS_BUCKET'),
],

// Sử dụng
Storage::disk('s3')->put('path/file.jpg', $contents);
$url = Storage::disk('s3')->url('path/file.jpg');
$tempUrl = Storage::disk('s3')->temporaryUrl('path/file.jpg', now()->addMinutes(30));
</code></pre>

<h2 id="2-upload"><strong>2. File Upload</strong></h2>

<pre><code class="language-php">public function upload(Request $request)
{
    $request->validate([
        'file' => 'required|file|max:10240', // 10MB
        'image' => 'nullable|image|dimensions:min_width=100,max_width=2000',
    ]);

    $file = $request->file('file');
    $path = $file->storeAs(
        'uploads/' . now()->format('Y/m'),
        $file->hashName(),
        'public'
    );

    return response()->json(['url' => Storage::url($path)]);
}
</code></pre>

<h2 id="3-spatie-media"><strong>3. Spatie Media Library</strong></h2>

<pre><code class="language-bash">composer require spatie/laravel-medialibrary
php artisan vendor:publish --provider="Spatie\MediaLibrary\MediaLibraryServiceProvider" --tag="medialibrary-migrations"
</code></pre>

<pre><code class="language-php">use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Product extends Model implements HasMedia
{
    use InteractsWithMedia;

    public function registerMediaConversions(?Media $media = null): void
    {
        $this->addMediaConversion('thumb')
            ->width(300)->height(300)
            ->sharpen(10);

        $this->addMediaConversion('preview')
            ->width(800)->height(600);
    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('images')->useDisk('s3');
        $this->addMediaCollection('documents')->singleFile();
    }
}

// Sử dụng
$product->addMediaFromRequest('image')->toMediaCollection('images');
$url = $product->getFirstMediaUrl('images', 'thumb');
</code></pre>

<h2 id="4-image-manipulation"><strong>4. Intervention Image</strong></h2>

<pre><code class="language-php">use Intervention\Image\Laravel\Facades\Image;

$image = Image::read($request->file('photo'))
    ->resize(800, null, function ($constraint) {
        $constraint->aspectRatio();
        $constraint->upsize();
    })
    ->toWebp(quality: 80);

Storage::put('photos/optimized.webp', $image);
</code></pre>

<p>Next article: <strong>Authentication — Sanctum & Fortify</strong>.</p>
