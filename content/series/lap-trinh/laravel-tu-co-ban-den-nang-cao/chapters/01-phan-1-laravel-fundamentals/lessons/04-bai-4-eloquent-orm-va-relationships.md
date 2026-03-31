---
id: 019d8b40-i104-7001-b010-laravel000104
title: 'Bài 4: Eloquent ORM & Relationships'
slug: bai-4-eloquent-orm-va-relationships
description: >-
  Eloquent models, mass assignment, soft deletes. Relationships
  (hasOne, hasMany, belongsTo, belongsToMany, morphMany).
  Eager loading, query scopes, accessors/mutators. Casts.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 4
section_title: "Phần 1: Laravel Fundamentals"
course:
  id: 019d8b40-i100-7001-b010-laravel000001
  title: 'Laravel: Từ Cơ bản đến Nâng cao'
  slug: laravel-tu-co-ban-den-nang-cao
---

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

<p>Bài tiếp theo: <strong>Migrations, Seeding & Query Builder</strong>.</p>
