---
id: 019d8b40-i601-7001-b010-laravel000601
title: 'Bài 19: Testing trong Laravel'
slug: bai-19-testing-trong-laravel
description: >-
  PHPUnit, Pest testing framework. Feature tests, unit tests.
  Database testing, factories. HTTP tests, mocking.
  Browser testing (Laravel Dusk). Code coverage.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 19
section_title: "Phần 6: Testing, Docker & Production"
course:
  id: 019d8b40-i100-7001-b010-laravel000001
  title: 'Laravel: Từ Cơ bản đến Nâng cao'
  slug: laravel-tu-co-ban-den-nang-cao
---

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

<p>Bài tiếp theo: <strong>Clean Architecture & Packages</strong>.</p>
