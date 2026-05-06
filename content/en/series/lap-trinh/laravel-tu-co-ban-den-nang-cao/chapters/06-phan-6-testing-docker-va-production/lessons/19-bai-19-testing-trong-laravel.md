---
id: 019d8b40-i601-7001-b010-laravel000601
title: 'Lesson 19: Testing in Laravel'
slug: bai-19-testing-trong-laravel
description: >-
  PHPUnit, Pest testing framework. Feature tests, unit tests. Database testing,
  factories. HTTP testing, mocking. Browser testing (Laravel Dusk). Code
  coverage.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 19
section_title: 'Part 6: Testing, Docker & Production'
course:
  id: 019d8b40-i100-7001-b010-laravel000001
  title: 'Laravel: From Basics to Advanced'
  slug: laravel-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7934" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7934)"/>

  <!-- Decorations -->
  <g>
    <circle cx="965" cy="145" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="830" cy="270" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="695" cy="135" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="1060" cy="260" r="33" fill="#fb923c" opacity="0.05"/>
    <circle cx="925" cy="125" r="8" fill="#fb923c" opacity="0.1"/>
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
    <line x1="600" y1="195" x2="1100" y2="275" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="225" x2="1050" y2="295" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1020.9807621135332,180 1020.9807621135332,210 995,225 969.0192378864668,210 969.0192378864668,180 995,165" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">💻 Programming — Lesson 19</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 19: Testing in Laravel</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Laravel: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 6: Testing, Docker & Production</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-pest"><strong>1. Pest Testing Framework</strong></h2>

<pre><code class="language-bash">composer require pestphp/pest --dev
php artisan pest:install
</code></pre>

<pre><code class="language-php">// tests/Feature/ProductTest.php
use App\Models\Product;
use App\Models\User;

test('can list products', function () {
    Product::factory()->count(5)->create();

    $response = $this->getJson('/api/products');

    $response->assertOk()
        ->assertJsonCount(5, 'data');
});

test('authenticated user can create product', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)
        ->postJson('/api/products', [
            'name' => 'New Product',
            'slug' => 'new-product',
            'price' => 99.99,
            'category_id' => Category::factory()->create()->id,
        ]);

    $response->assertCreated();
    $this->assertDatabaseHas('products', ['name' => 'New Product']);
});

test('guest cannot create product', function () {
    $this->postJson('/api/products', [])
        ->assertUnauthorized();
});
</code></pre>

<h2 id="2-http-tests"><strong>2. HTTP Tests</strong></h2>

<pre><code class="language-php">test('product validation', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->postJson('/api/products', ['name' => ''])
        ->assertUnprocessable()
        ->assertJsonValidationErrors(['name', 'price']);
});

test('can update product', function () {
    $product = Product::factory()->create();
    $user = User::factory()->create();

    $this->actingAs($user)
        ->putJson("/api/products/{$product->id}", ['name' => 'Updated'])
        ->assertOk();

    expect($product->fresh()->name)->toBe('Updated');
});

test('can delete product', function () {
    $product = Product::factory()->create();

    $this->actingAs(User::factory()->admin()->create())
        ->deleteJson("/api/products/{$product->id}")
        ->assertNoContent();

    $this->assertSoftDeleted('products', ['id' => $product->id]);
});
</code></pre>

<h2 id="3-mocking"><strong>3. Mocking</strong></h2>

<pre><code class="language-php">use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Notification;

test('order sends notification', function () {
    Notification::fake();

    $user = User::factory()->create();
    $order = Order::factory()->for($user)->create();

    Notification::assertSentTo($user, OrderShipped::class);
});

test('sends welcome email', function () {
    Mail::fake();

    $user = User::factory()->create();

    Mail::assertQueued(WelcomeMail::class, function ($mail) use ($user) {
        return $mail->hasTo($user->email);
    });
});
</code></pre>

<h2 id="4-coverage"><strong>4. Code Coverage</strong></h2>

<pre><code class="language-bash">php artisan test --coverage --min=80
php artisan test --parallel
</code></pre>

<p>Next article: <strong>Clean Architecture & Packages</strong>.</p>
