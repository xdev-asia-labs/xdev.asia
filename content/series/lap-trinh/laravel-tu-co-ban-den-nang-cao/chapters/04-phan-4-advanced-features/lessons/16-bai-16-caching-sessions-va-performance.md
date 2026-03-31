---
id: 019d8b40-i404-7001-b010-laravel000404
title: 'Bài 16: Caching, Sessions & Performance'
slug: bai-16-caching-sessions-va-performance
description: >-
  Cache drivers (Redis, Memcached, file). Cache tags, atomic locks.
  Session management. N+1 query prevention, query monitoring.
  Laravel Debugbar, Telescope. Octane (Swoole/FrankenPHP).
duration_minutes: 120
is_free: true
video_url: null
sort_order: 16
section_title: "Phần 4: Advanced Features"
course:
  id: 019d8b40-i100-7001-b010-laravel000001
  title: 'Laravel: Từ Cơ bản đến Nâng cao'
  slug: laravel-tu-co-ban-den-nang-cao
---

<h2 id="1-caching"><strong>1. Caching</strong></h2>

<pre><code class="language-php">use Illuminate\Support\Facades\Cache;

// Basic
Cache::put('key', $value, now()->addHours(1));
$value = Cache::get('key', 'default');
Cache::forget('key');

// Remember pattern
$products = Cache::remember('products:featured', 3600, function () {
    return Product::with('category')->where('is_featured', true)->get();
});

// Cache tags (Redis/Memcached)
Cache::tags(['products'])->put('products:all', $products, 3600);
Cache::tags(['products'])->flush();

// Atomic locks
$lock = Cache::lock('processing-order-' . $orderId, 10);
if ($lock->get()) {
    try {
        // Process order
    } finally {
        $lock->release();
    }
}
</code></pre>

<h2 id="2-n1-prevention"><strong>2. N+1 Query Prevention</strong></h2>

<pre><code class="language-php">// AppServiceProvider
use Illuminate\Database\Eloquent\Model;

Model::preventLazyLoading(!app()->isProduction());
Model::preventSilentlyDiscardingAttributes(!app()->isProduction());

// Eager load
Product::with(['category', 'tags'])->paginate(20);

// Subquery
Product::addSelect([
    'latest_review' => Review::select('body')
        ->whereColumn('product_id', 'products.id')
        ->latest()
        ->limit(1),
])->get();
</code></pre>

<h2 id="3-telescope"><strong>3. Laravel Telescope & Debugbar</strong></h2>

<pre><code class="language-bash">composer require laravel/telescope --dev
php artisan telescope:install

composer require barryvdh/laravel-debugbar --dev
</code></pre>

<h2 id="4-octane"><strong>4. Laravel Octane</strong></h2>

<pre><code class="language-bash">composer require laravel/octane
php artisan octane:install --server=frankenphp
php artisan octane:start --workers=4
</code></pre>

<pre><code class="language-php">// Concurrent tasks
use Laravel\Octane\Facades\Octane;

[$products, $categories] = Octane::concurrently([
    fn () => Product::all(),
    fn () => Category::all(),
]);
</code></pre>

<h2 id="5-optimization"><strong>5. Production Optimization</strong></h2>

<pre><code class="language-bash">php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan event:cache
php artisan icons:cache
php artisan optimize
</code></pre>

<p>Bài tiếp theo: <strong>Livewire — Full-Stack Components</strong>.</p>
