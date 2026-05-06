---
id: 019d8b40-i304-7001-b010-laravel000304
title: 'レッスン 12: セキュリティのベスト プラクティス'
slug: bai-12-security-best-practices
description: >-
  CSRF 保護、XSS 防止。 SQL インジェクション、一括割り当て保護。レート制限、暗号化。 CORS 構成。 HTTPS の強制、セキュリティ
  ヘッダー。 Laravel の OWASP。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 12
section_title: 'パート 3: 認証と認可'
course:
  id: 019d8b40-i100-7001-b010-laravel000001
  title: 'Laravel: 基本から上級まで'
  slug: laravel-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2624" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2624)"/>

  <!-- Decorations -->
  <g>
    <circle cx="901" cy="73" r="24" fill="#34d399" opacity="0.08"/>
    <circle cx="702" cy="174" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="1003" cy="275" r="10" fill="#34d399" opacity="0.14"/>
    <circle cx="804" cy="116" r="33" fill="#34d399" opacity="0.07"/>
    <circle cx="605" cy="217" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="223" x2="1100" y2="303" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="253" x2="1050" y2="323" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="955.9089653438086,104 955.9089653438086,142 923,161 890.0910346561914,142 890.0910346561914,104.00000000000001 923,85" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">💻 プログラミング — レッスン 12</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 12: セキュリティのベスト プラクティス</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Laravel: 基本から上級まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: 認証と認可</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-csrf-xss"><strong>1. CSRF および XSS の防止</strong></h2>

<pre><code class="language-blade">{{-- CSRF token tự động --}}
&lt;form method="POST"&gt;
    @csrf
    ...
&lt;/form&gt;

{{-- XSS — Blade auto-escapes --}}
{{ $userInput }}           {{-- Đã escape --}}
{!! $trustedHtml !!}       {{-- Raw — chỉ dùng với dữ liệu tin cậy --}}
</code></pre>

<h2 id="2-sql-injection"><strong>2. SQL インジェクションと一括代入</strong></h2>

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

<h2 id="3-encryption"><strong>3. 暗号化とハッシュ</strong></h2>

<pre><code class="language-php">use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Hash;

// Encryption (two-way)
$encrypted = Crypt::encryptString('sensitive data');
$decrypted = Crypt::decryptString($encrypted);

// Hashing (one-way — cho passwords)
$hashed = Hash::make('password');
Hash::check('password', $hashed); // true
</code></pre>

<h2 id="4-security-headers"><strong>4. セキュリティヘッダーとHTTPS</strong></h2>

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

<h2 id="5-rate-limiting"><strong>5. レート制限</strong></h2>

<pre><code class="language-php">RateLimiter::for('login', function (Request $request) {
    return [
        Limit::perMinute(5)->by($request->ip()),
        Limit::perMinute(10)->by($request->input('email')),
    ];
});

Route::post('/login', [AuthController::class, 'login'])->middleware('throttle:login');
</code></pre>

<p>次の記事: <strong>キューとジョブ</strong>。</p>
