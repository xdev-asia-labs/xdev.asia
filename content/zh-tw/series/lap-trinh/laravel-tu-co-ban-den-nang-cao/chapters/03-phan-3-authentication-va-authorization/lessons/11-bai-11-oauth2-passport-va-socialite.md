---
id: 019d8b40-i303-7001-b010-laravel000303
title: 第 11 課：OAuth2、護照和社交名流
slug: bai-11-oauth2-passport-va-socialite
description: >-
  Laravel Passport（OAuth2 伺服器）。社群名流（Google、GitHub、Facebook 登入）。帳戶連結、自訂提供者。 JWT 與
  Passport 令牌。 API 範圍。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 11
section_title: 第 3 部分：身份驗證和授權
course:
  id: 019d8b40-i100-7001-b010-laravel000001
  title: Laravel：從基礎到高級
  slug: laravel-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-998" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-998)"/>

  <!-- Decorations -->
  <g>
    <circle cx="734" cy="192" r="12" fill="#f472b6" opacity="0.07"/>
    <circle cx="868" cy="246" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="1002" cy="40" r="16" fill="#f472b6" opacity="0.11"/>
    <circle cx="636" cy="94" r="18" fill="#f472b6" opacity="0.13"/>
    <circle cx="770" cy="148" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="132" x2="1100" y2="212" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="162" x2="1050" y2="232" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="955.3826859021799,118.5 955.3826859021799,145.5 932,159 908.6173140978201,145.5 908.6173140978201,118.5 932,105" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">💻 程式設計 — 第 11 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 11 課：OAuth2、護照和社交名流</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Laravel：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：身份驗證和授權</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-socialite"><strong>1.Laravel 社交名流</strong></h2>

<pre><code class="language-bash">composer require laravel/socialite
</code></pre>

<pre><code class="language-php">// config/services.php
'google' => [
    'client_id' => env('GOOGLE_CLIENT_ID'),
    'client_secret' => env('GOOGLE_CLIENT_SECRET'),
    'redirect' => env('APP_URL') . '/auth/google/callback',
],

// Routes
Route::get('/auth/{provider}/redirect', [SocialAuthController::class, 'redirect']);
Route::get('/auth/{provider}/callback', [SocialAuthController::class, 'callback']);

// Controller
use Laravel\Socialite\Facades\Socialite;

class SocialAuthController extends Controller
{
    public function redirect(string $provider)
    {
        return Socialite::driver($provider)->redirect();
    }

    public function callback(string $provider)
    {
        $socialUser = Socialite::driver($provider)->user();

        $user = User::updateOrCreate(
            ['email' => $socialUser->getEmail()],
            [
                'name' => $socialUser->getName(),
                'provider' => $provider,
                'provider_id' => $socialUser->getId(),
                'avatar' => $socialUser->getAvatar(),
            ],
        );

        Auth::login($user, remember: true);
        return redirect('/dashboard');
    }
}
</code></pre>

<h2 id="2-passport"><strong>2.Laravel 護照</strong></h2>

<pre><code class="language-bash">composer require laravel/passport
php artisan passport:install
</code></pre>

<pre><code class="language-php">// User model
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens;
}

// config/auth.php
'guards' => [
    'api' => ['driver' => 'passport', 'provider' => 'users'],
],

// Scopes
Passport::tokensCan([
    'read-products' => 'Xem sản phẩm',
    'write-products' => 'Thêm/sửa sản phẩm',
    'manage-orders' => 'Quản lý đơn hàng',
]);

// Middleware
Route::middleware(['auth:api', 'scope:write-products'])->group(function () {
    Route::post('/products', [ProductController::class, 'store']);
});
</code></pre>

<h2 id="3-comparison"><strong>3. 聖堂 vs 護照</strong></h2>

<table>
<thead><tr><th>特點</th><th>聖所</th><th>護照</th></tr></thead>
<tbody>
<tr><td>SPA授權</td><td>✅</td><td>✅</td></tr>
<tr><td>API令牌</td><td>✅（簡單）</td><td>✅（OAuth2 完整）</td></tr>
<tr><td>OAuth2伺服器</td><td>❌</td><td>✅</td></tr>
<tr><td>第三方應用程式</td><td>❌</td><td>✅</td></tr>
<tr><td>複雜性</td><td>低</td><td>高</td></tr>
</tbody>
</table>

<p>下一篇： <strong>安全最佳實踐</strong>。</p>
