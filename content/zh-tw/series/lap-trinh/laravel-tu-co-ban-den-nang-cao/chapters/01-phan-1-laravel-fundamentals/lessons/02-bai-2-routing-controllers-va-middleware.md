---
id: 019d8b40-i102-7001-b010-laravel000102
title: 第 2 課：路由、控制器與中介軟體
slug: bai-2-routing-controllers-va-middleware
description: 路由類型（GET、POST、PUT、DELETE）、路由參數。資源控制器、可呼叫控制器。中間件、中間件組。路由模型綁定、速率限制。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 2
section_title: 第 1 部分：Laravel 基礎知識
course:
  id: 019d8b40-i100-7001-b010-laravel000001
  title: Laravel：從基礎到高級
  slug: laravel-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7282" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7282)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1089" cy="217" r="22" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="1078" cy="106" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="1067" cy="255" r="36" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="1056" cy="144" r="13" fill="#818cf8" opacity="0.13"/>
    <circle cx="1045" cy="33" r="20" fill="#818cf8" opacity="0.1"/>
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
    <line x1="600" y1="147" x2="1100" y2="227" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="177" x2="1050" y2="247" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1033.3730669589463,176 1033.3730669589463,218 997,239 960.6269330410536,218 960.6269330410536,176 997,155" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">💻 程式設計 — 第 2 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 2 課：路由、控制器與中介軟體</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Laravel：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：Laravel 基礎知識</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-routing"><strong>1. 路由</strong></h2>

<pre><code class="language-php">// routes/web.php
use App\Http\Controllers\ProductController;

Route::get('/', fn () => view('welcome'));

// Route parameters
Route::get('/products/{product}', [ProductController::class, 'show']);
Route::get('/categories/{category}/products', [ProductController::class, 'byCategory']);

// Optional parameters
Route::get('/search/{query?}', [ProductController::class, 'search']);

// Named routes
Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

// Route groups
Route::prefix('api/v1')->middleware('auth:sanctum')->group(function () {
    Route::apiResource('products', ProductController::class);
    Route::apiResource('orders', OrderController::class);
});
</code></pre>

<h2 id="2-controllers"><strong>2. 控制器</strong></h2>

<pre><code class="language-php">namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::with('category')
            ->where('is_active', true)
            ->paginate(20);

        return view('products.index', compact('products'));
    }

    public function show(Product $product) // Route model binding
    {
        return view('products.show', compact('product'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
        ]);

        $product = Product::create($validated);
        return redirect()->route('products.show', $product);
    }
}
</code></pre>

<h2 id="3-resource"><strong>3. 資源控制器</strong></h2>

<pre><code class="language-bash">php artisan make:controller ProductController --resource --model=Product
</code></pre>

<pre><code class="language-php">// index, create, store, show, edit, update, destroy
Route::resource('products', ProductController::class);

// API only (no create, edit)
Route::apiResource('products', ProductController::class);
</code></pre>

<h2 id="4-middleware"><strong>4. 中介軟體</strong></h2>

<pre><code class="language-php">namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class EnsureIsAdmin
{
    public function handle(Request $request, Closure $next)
    {
        if ($request->user()?->role !== 'admin') {
            abort(403, 'Unauthorized');
        }
        return $next($request);
    }
}

// bootstrap/app.php (Laravel 11)
->withMiddleware(function (Middleware $middleware) {
    $middleware->alias([
        'admin' => EnsureIsAdmin::class,
    ]);
})

// Sử dụng
Route::middleware('admin')->group(function () {
    Route::get('/admin/dashboard', ...);
});
</code></pre>

<h2 id="5-rate-limiting"><strong>5. 速率限制</strong></h2>

<pre><code class="language-php">// bootstrap/app.php
use Illuminate\Cache\RateLimiting\Limit;

RateLimiter::for('api', function (Request $request) {
    return Limit::perMinute(60)->by($request->user()?->id ?: $request->ip());
});
</code></pre>

<p>下一篇： <strong>刀片模板和前端</strong>。</p>
