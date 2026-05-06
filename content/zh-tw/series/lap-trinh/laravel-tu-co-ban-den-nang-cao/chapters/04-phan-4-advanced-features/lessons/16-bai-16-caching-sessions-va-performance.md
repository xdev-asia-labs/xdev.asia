---
id: 019d8b40-i404-7001-b010-laravel000404
title: 第 16 課：快取、會話和效能
slug: bai-16-caching-sessions-va-performance
description: >-
  快取驅動程式（Redis、Memcached、檔案）。快取標籤，原子鎖。會話管理。 N+1查詢預防，查詢監控。 Laravel
  調試欄、望遠鏡。辛烷（Swoole/FrankenPHP）。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 16
section_title: 第 4 部分：進階功能
course:
  id: 019d8b40-i100-7001-b010-laravel000001
  title: Laravel：從基礎到高級
  slug: laravel-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-524" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-524)"/>

  <!-- Decorations -->
  <g>
    <circle cx="945" cy="125" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="790" cy="70" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="635" cy="275" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="980" cy="220" r="33" fill="#fb923c" opacity="0.05"/>
    <circle cx="825" cy="165" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="135" x2="1100" y2="215" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="165" x2="1050" y2="235" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="960.9807621135332,120 960.9807621135332,150 935,165 909.0192378864668,150 909.0192378864668,120.00000000000001 935,105" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">💻 程式設計 — 第 16 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 16 課：快取、會話和效能</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Laravel：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：進階功能</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-caching"><strong>1. 快取</strong></h2>

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

<h2 id="2-n1-prevention"><strong>2. N+1查詢預防</strong></h2>

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

<h2 id="3-telescope"><strong>3.Laravel 望遠鏡與調試欄</strong></h2>

<pre><code class="language-bash">composer require laravel/telescope --dev
php artisan telescope:install

composer require barryvdh/laravel-debugbar --dev
</code></pre>

<h2 id="4-octane"><strong>4.Laravel 辛烷</strong></h2>

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

<h2 id="5-optimization"><strong>5. 生產優化</strong></h2>

<pre><code class="language-bash">php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan event:cache
php artisan icons:cache
php artisan optimize
</code></pre>

<p>下一篇： <strong>Livewire — 全端組件</strong>。</p>
