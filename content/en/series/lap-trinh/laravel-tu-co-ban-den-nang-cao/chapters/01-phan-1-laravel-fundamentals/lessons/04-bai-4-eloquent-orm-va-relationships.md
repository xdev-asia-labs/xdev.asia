---
id: 019d8b40-i104-7001-b010-laravel000104
title: 'Lesson 4: Eloquent ORM & Relationships'
slug: bai-4-eloquent-orm-va-relationships
description: >-
  Eloquent models, mass assignment, soft deletes. Relationships (hasOne,
  hasMany, belongsTo, belongsToMany, morphMany). Eager loading, query scopes,
  accessors/mutators. Casts.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 4
section_title: 'Part 1: Laravel Fundamentals'
course:
  id: 019d8b40-i100-7001-b010-laravel000001
  title: 'Laravel: From Basics to Advanced'
  slug: laravel-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2439" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2439)"/>

  <!-- Decorations -->
  <g>
    <circle cx="870" cy="120" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="640" cy="150" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="910" cy="180" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="680" cy="210" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="950" cy="240" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="60" x2="1100" y2="140" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="90" x2="1050" y2="160" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="990.3108891324554,142.5 990.3108891324554,177.5 960,195 929.6891108675446,177.5 929.6891108675446,142.5 960,125" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">💻 Programming — Lesson 4</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 4: Eloquent ORM & Relationships</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Laravel: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: Laravel Fundamentals</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-eloquent-model"><strong>1. Eloquent Model</strong></h2>

<pre><code class="language-php">namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Product extends Model
{
    use SoftDeletes;

    protected $fillable = ['name', 'slug', 'description', 'price', 'stock', 'category_id'];

    protected function casts(): array
    {
        return [
            'price' => 'decimal:2',
            'is_active' => 'boolean',
            'metadata' => 'array',
            'published_at' => 'datetime',
        ];
    }

    // Accessor (Laravel 11)
    protected function formattedPrice(): Attribute
    {
        return Attribute::make(
            get: fn () => number_format($this->price) . 'đ',
        );
    }
}
</code></pre>

<h2 id="2-relationships"><strong>2. Relationships</strong></h2>

<pre><code class="language-php">class Product extends Model
{
    // One-to-Many
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    // Many-to-Many
    public function tags()
    {
        return $this->belongsToMany(Tag::class)->withTimestamps();
    }

    // Has One Through
    public function brandCountry()
    {
        return $this->hasOneThrough(Country::class, Brand::class);
    }

    // Polymorphic
    public function images()
    {
        return $this->morphMany(Image::class, 'imageable');
    }
}

// Sử dụng
$product->category->name;
$product->tags()->attach([1, 2, 3]);
$product->tags()->sync([1, 2]);
</code></pre>

<h2 id="3-eager-loading"><strong>3. Eager Loading</strong></h2>

<pre><code class="language-php">// N+1 prevention
$products = Product::with(['category', 'tags', 'reviews.user'])->get();

// Conditional eager loading
$products = Product::with(['reviews' => function ($query) {
    $query->where('rating', '>=', 4)->latest()->limit(5);
}])->get();

// Lazy eager loading
$products = Product::all();
$products->load('category');

// Prevent N+1 (development)
// AppServiceProvider
Model::preventLazyLoading(!app()->isProduction());
</code></pre>

<h2 id="4-scopes"><strong>4. Query Scopes</strong></h2>

<pre><code class="language-php">class Product extends Model
{
    // Local scope
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopePriceRange($query, float $min, float $max)
    {
        return $query->whereBetween('price', [$min, $max]);
    }
}

// Sử dụng
$products = Product::active()->priceRange(100, 500)->paginate(20);
</code></pre>

<p>Next article: <strong>Migrations, Seeding & Query Builder</strong>.</p>
