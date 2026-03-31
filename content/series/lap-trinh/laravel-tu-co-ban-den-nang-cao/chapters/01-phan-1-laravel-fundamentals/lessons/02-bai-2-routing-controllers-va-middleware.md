---
id: 019d8b40-i102-7001-b010-laravel000102
title: 'Bài 2: Routing, Controllers & Middleware'
slug: bai-2-routing-controllers-va-middleware
description: >-
  Route types (GET, POST, PUT, DELETE), route parameters.
  Resource controllers, invokable controllers. Middleware,
  middleware groups. Route model binding, rate limiting.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 2
section_title: "Phần 1: Laravel Fundamentals"
course:
  id: 019d8b40-i100-7001-b010-laravel000001
  title: 'Laravel: Từ Cơ bản đến Nâng cao'
  slug: laravel-tu-co-ban-den-nang-cao
---

<h2 id="1-routing"><strong>1. Routing</strong></h2>

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

<h2 id="2-controllers"><strong>2. Controllers</strong></h2>

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

<h2 id="3-resource"><strong>3. Resource Controller</strong></h2>

<pre><code class="language-bash">php artisan make:controller ProductController --resource --model=Product
</code></pre>

<pre><code class="language-php">// index, create, store, show, edit, update, destroy
Route::resource('products', ProductController::class);

// API only (no create, edit)
Route::apiResource('products', ProductController::class);
</code></pre>

<h2 id="4-middleware"><strong>4. Middleware</strong></h2>

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

<h2 id="5-rate-limiting"><strong>5. Rate Limiting</strong></h2>

<pre><code class="language-php">// bootstrap/app.php
use Illuminate\Cache\RateLimiting\Limit;

RateLimiter::for('api', function (Request $request) {
    return Limit::perMinute(60)->by($request->user()?->id ?: $request->ip());
});
</code></pre>

<p>Bài tiếp theo: <strong>Blade Templates & Frontend</strong>.</p>
