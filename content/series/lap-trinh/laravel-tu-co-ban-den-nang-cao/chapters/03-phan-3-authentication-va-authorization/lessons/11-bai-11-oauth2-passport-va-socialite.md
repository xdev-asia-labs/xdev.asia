---
id: 019d8b40-i303-7001-b010-laravel000303
title: 'Bài 11: OAuth2, Passport & Socialite'
slug: bai-11-oauth2-passport-va-socialite
description: >-
  Laravel Passport (OAuth2 server). Socialite (Google, GitHub,
  Facebook login). Account linking, custom providers.
  JWT vs Passport tokens. API scopes.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 11
section_title: "Phần 3: Authentication & Authorization"
course:
  id: 019d8b40-i100-7001-b010-laravel000001
  title: 'Laravel: Từ Cơ bản đến Nâng cao'
  slug: laravel-tu-co-ban-den-nang-cao
---

<h2 id="1-socialite"><strong>1. Laravel Socialite</strong></h2>

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

<h2 id="2-passport"><strong>2. Laravel Passport</strong></h2>

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

<h2 id="3-comparison"><strong>3. Sanctum vs Passport</strong></h2>

<table>
<thead><tr><th>Tính năng</th><th>Sanctum</th><th>Passport</th></tr></thead>
<tbody>
<tr><td>SPA Auth</td><td>✅</td><td>✅</td></tr>
<tr><td>API Tokens</td><td>✅ (đơn giản)</td><td>✅ (OAuth2 full)</td></tr>
<tr><td>OAuth2 Server</td><td>❌</td><td>✅</td></tr>
<tr><td>Third-party apps</td><td>❌</td><td>✅</td></tr>
<tr><td>Độ phức tạp</td><td>Thấp</td><td>Cao</td></tr>
</tbody>
</table>

<p>Bài tiếp theo: <strong>Security Best Practices</strong>.</p>
