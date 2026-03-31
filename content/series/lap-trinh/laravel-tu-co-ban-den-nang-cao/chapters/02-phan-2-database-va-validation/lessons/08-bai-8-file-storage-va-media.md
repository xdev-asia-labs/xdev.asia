---
id: 019d8b40-i204-7001-b010-laravel000204
title: 'Bài 8: File Storage & Media'
slug: bai-8-file-storage-va-media
description: >-
  Filesystem abstraction (local, S3, GCS). File upload, validation.
  Spatie Media Library. Image manipulation (Intervention Image).
  Temporary URLs, streaming downloads.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 8
section_title: "Phần 2: Database & Validation"
course:
  id: 019d8b40-i100-7001-b010-laravel000001
  title: 'Laravel: Từ Cơ bản đến Nâng cao'
  slug: laravel-tu-co-ban-den-nang-cao
---

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

<p>Bài tiếp theo: <strong>Authentication — Sanctum & Fortify</strong>.</p>
