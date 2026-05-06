---
id: 019d8b40-i301-7001-b010-laravel000301
title: 'レッスン 9: 認証 — 聖域と強化'
slug: bai-9-authentication-sanctum-va-fortify
description: >-
  Laravel Sanctum (SPA 認証、API トークン)。 Fortify
  (登録、ログイン、メール認証、2FA)。パスワードのハッシュ化、覚えておいてください。カスタム ガード、マルチ認証。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 9
section_title: 'パート 3: 認証と認可'
course:
  id: 019d8b40-i100-7001-b010-laravel000001
  title: 'Laravel: 基本から上級まで'
  slug: laravel-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1581" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1581)"/>

  <!-- Decorations -->
  <g>
    <circle cx="759" cy="47" r="32" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="918" cy="226" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="1077" cy="145" r="26" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="736" cy="64" r="23" fill="#818cf8" opacity="0.13"/>
    <circle cx="895" cy="243" r="20" fill="#818cf8" opacity="0.1"/>
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
    <line x1="600" y1="57" x2="1100" y2="137" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="87" x2="1050" y2="157" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="984.712812921102,141 984.712812921102,173 957,189 929.287187078898,173 929.287187078898,141 957,125" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">💻 プログラミング — レッスン 9</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 9: 認証 — 聖域と強化</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Laravel: 基本から上級まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: 認証と認可</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-sanctum"><strong>1. ララベルの聖域</strong></h2>

<pre><code class="language-bash">composer require laravel/sanctum
php artisan install:api
</code></pre>

<pre><code class="language-php">// User model
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens;
}

// Login & issue token
public function login(Request $request)
{
    $credentials = $request->validate([
        'email' => 'required|email',
        'password' => 'required',
    ]);

    if (!Auth::attempt($credentials)) {
        throw ValidationException::withMessages([
            'email' => ['Thông tin đăng nhập không chính xác.'],
        ]);
    }

    $user = Auth::user();
    $token = $user->createToken('api', ['products:read', 'orders:write']);

    return response()->json([
        'token' => $token->plainTextToken,
        'user' => new UserResource($user),
    ]);
}

// Protect routes
Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('products', ProductController::class);
    Route::post('/logout', function (Request $request) {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Logged out']);
    });
});
</code></pre>

<h2 id="2-spa-auth"><strong>2. SPA認証</strong></h2>

<pre><code class="language-php">// config/sanctum.php
'stateful' => explode(',', env('SANCTUM_STATEFUL_DOMAINS', 'localhost:3000')),

// config/cors.php
'supports_credentials' => true,
</code></pre>

<h2 id="3-fortify"><strong>3. Laravel Fortify (2FA)</strong></h2>

<pre><code class="language-php">use Laravel\Fortify\Fortify;

// FortifyServiceProvider
Fortify::loginView(fn () => view('auth.login'));
Fortify::registerView(fn () => view('auth.register'));

// Enable 2FA
'features' => [
    Features::registration(),
    Features::emailVerification(),
    Features::twoFactorAuthentication(['confirm' => true]),
],
</code></pre>

<h2 id="4-multi-auth"><strong>4. マルチ認証 (ガード)</strong></h2>

<pre><code class="language-php">// config/auth.php
'guards' => [
    'web' => ['driver' => 'session', 'provider' => 'users'],
    'admin' => ['driver' => 'session', 'provider' => 'admins'],
],
'providers' => [
    'users' => ['driver' => 'eloquent', 'model' => User::class],
    'admins' => ['driver' => 'eloquent', 'model' => Admin::class],
],

// Route
Route::middleware('auth:admin')->prefix('admin')->group(function () {
    Route::get('/dashboard', [AdminController::class, 'dashboard']);
});
</code></pre>

<p>次の記事: <strong>認可 — ゲートとポリシー</strong>。</p>
