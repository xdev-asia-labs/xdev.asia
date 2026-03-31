---
id: 019d8b40-i304-7001-b010-laravel000304
title: 'Bài 12: Security Best Practices'
slug: bai-12-security-best-practices
description: >-
  CSRF protection, XSS prevention. SQL injection, mass assignment
  protection. Rate limiting, encryption. CORS configuration.
  HTTPS enforcement, security headers. OWASP cho Laravel.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 12
section_title: "Phần 3: Authentication & Authorization"
course:
  id: 019d8b40-i100-7001-b010-laravel000001
  title: 'Laravel: Từ Cơ bản đến Nâng cao'
  slug: laravel-tu-co-ban-den-nang-cao
---

<h2 id="1-csrf-xss"><strong>1. CSRF & XSS Prevention</strong></h2>

<pre><code class="language-blade">{{-- CSRF token tự động --}}
&lt;form method="POST"&gt;
    @csrf
    ...
&lt;/form&gt;

{{-- XSS — Blade auto-escapes --}}
{{ $userInput }}           {{-- Đã escape --}}
{!! $trustedHtml !!}       {{-- Raw — chỉ dùng với dữ liệu tin cậy --}}
</code></pre>

<h2 id="2-sql-injection"><strong>2. SQL Injection & Mass Assignment</strong></h2>

<pre><code class="language-php">// Eloquent & Query Builder tự động parameterize
Product::where('name', $input)->get(); // ✅ Safe

// Raw query — dùng bindings
DB::select('SELECT * FROM products WHERE name = ?', [$input]); // ✅

// Mass assignment protection
class Product extends Model
{
    protected $fillable = ['name', 'price', 'description'];
    // HOẶC
    protected $guarded = ['id', 'is_admin'];
}
</code></pre>

<h2 id="3-encryption"><strong>3. Encryption & Hashing</strong></h2>

<pre><code class="language-php">use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Hash;

// Encryption (two-way)
$encrypted = Crypt::encryptString('sensitive data');
$decrypted = Crypt::decryptString($encrypted);

// Hashing (one-way — cho passwords)
$hashed = Hash::make('password');
Hash::check('password', $hashed); // true
</code></pre>

<h2 id="4-security-headers"><strong>4. Security Headers & HTTPS</strong></h2>

<pre><code class="language-php">// Middleware
class SecurityHeaders
{
    public function handle($request, Closure $next)
    {
        $response = $next($request);
        $response->headers->set('X-Content-Type-Options', 'nosniff');
        $response->headers->set('X-Frame-Options', 'DENY');
        $response->headers->set('X-XSS-Protection', '1; mode=block');
        $response->headers->set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
        return $response;
    }
}

// Force HTTPS
// AppServiceProvider
if (app()->isProduction()) {
    URL::forceScheme('https');
}
</code></pre>

<h2 id="5-rate-limiting"><strong>5. Rate Limiting</strong></h2>

<pre><code class="language-php">RateLimiter::for('login', function (Request $request) {
    return [
        Limit::perMinute(5)->by($request->ip()),
        Limit::perMinute(10)->by($request->input('email')),
    ];
});

Route::post('/login', [AuthController::class, 'login'])->middleware('throttle:login');
</code></pre>

<p>Bài tiếp theo: <strong>Queues & Jobs</strong>.</p>
