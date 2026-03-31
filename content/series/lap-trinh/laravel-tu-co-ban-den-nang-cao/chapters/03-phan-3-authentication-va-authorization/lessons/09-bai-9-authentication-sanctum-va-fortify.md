---
id: 019d8b40-i301-7001-b010-laravel000301
title: 'Bài 9: Authentication — Sanctum & Fortify'
slug: bai-9-authentication-sanctum-va-fortify
description: >-
  Laravel Sanctum (SPA auth, API tokens). Fortify (registration,
  login, email verification, 2FA). Password hashing, remember me.
  Custom guards, multi-auth.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 9
section_title: "Phần 3: Authentication & Authorization"
course:
  id: 019d8b40-i100-7001-b010-laravel000001
  title: 'Laravel: Từ Cơ bản đến Nâng cao'
  slug: laravel-tu-co-ban-den-nang-cao
---

<h2 id="1-sanctum"><strong>1. Laravel Sanctum</strong></h2>

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

<h2 id="2-spa-auth"><strong>2. SPA Authentication</strong></h2>

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

<h2 id="4-multi-auth"><strong>4. Multi-Auth (Guards)</strong></h2>

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

<p>Bài tiếp theo: <strong>Authorization — Gates & Policies</strong>.</p>
