---
id: 019d8b40-i201-7001-b010-laravel000201
title: 'レッスン 5: 移行、シード、クエリ ビルダー'
slug: bai-5-migrations-seeding-va-query-builder
description: >-
  データベースの移行、スキーマ ビルダー。工場（モデル工場）、播種機。クエリ ビルダー、生のクエリ、ページネーション。データベース
  トランザクション、データベース テスト。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 5
section_title: 'パート 2: データベースと検証'
course:
  id: 019d8b40-i100-7001-b010-laravel000001
  title: 'Laravel: 基本から上級まで'
  slug: laravel-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5499" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5499)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1067" cy="171" r="20" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="1034" cy="218" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="1001" cy="265" r="32" fill="#a78bfa" opacity="0.08"/>
    <circle cx="968" cy="52" r="23" fill="#a78bfa" opacity="0.09"/>
    <circle cx="935" cy="99" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="141" x2="1100" y2="221" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="171" x2="1050" y2="241" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1072.1769145362398,223 1072.1769145362398,259 1041,277 1009.8230854637602,259 1009.8230854637602,223 1041,205" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">💻 プログラミング — レッスン 5</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 5: 移行、シード、クエリ ビルダー</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Laravel: 基本から上級まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: データベースと検証</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-migrations"><strong>1. 移行</strong></h2>

<pre><code class="language-php">use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            $table->decimal('price', 10, 2);
            $table->integer('stock')->default(0);
            $table->foreignId('category_id')->constrained()->cascadeOnDelete();
            $table->boolean('is_active')->default(true);
            $table->json('metadata')->nullable();
            $table->timestamps();
            $table->softDeletes();

            $table->index(['category_id', 'is_active']);
            $table->fullText('name');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
</code></pre>

<pre><code class="language-bash">php artisan make:migration add_discount_to_products --table=products
php artisan migrate
php artisan migrate:rollback --step=1
php artisan migrate:fresh --seed  # Drop all & re-run
</code></pre>

<h2 id="2-factories"><strong>2. モデル工場</strong></h2>

<pre><code class="language-php">namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    public function definition(): array
    {
        return [
            'name' => fake()->sentence(3),
            'slug' => fake()->unique()->slug(),
            'description' => fake()->paragraphs(2, true),
            'price' => fake()->randomFloat(2, 10, 1000),
            'stock' => fake()->numberBetween(0, 100),
            'category_id' => Category::factory(),
            'is_active' => true,
        ];
    }

    public function inactive(): static
    {
        return $this->state(fn () => ['is_active' => false]);
    }
}

// Sử dụng
Product::factory()->count(50)->create();
Product::factory()->inactive()->create();
</code></pre>

<h2 id="3-seeders"><strong>3.シーダー</strong></h2>

<pre><code class="language-php">class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([CategorySeeder::class]);
        Product::factory()->count(100)->create();
        User::factory()->count(10)->create();
    }
}
</code></pre>

<h2 id="4-query-builder"><strong>4. クエリビルダー</strong></h2>

<pre><code class="language-php">use Illuminate\Support\Facades\DB;

$results = DB::table('products')
    ->join('categories', 'products.category_id', '=', 'categories.id')
    ->select('products.*', 'categories.name as category_name')
    ->where('products.is_active', true)
    ->whereBetween('price', [100, 500])
    ->orderByDesc('created_at')
    ->paginate(20);

// Transactions
DB::transaction(function () {
    $order = Order::create([...]);
    foreach ($items as $item) {
        $order->items()->create($item);
        Product::where('id', $item['product_id'])->decrement('stock', $item['quantity']);
    }
});
</code></pre>

<p>次の記事: <strong>検証とフォームリクエスト</strong>。</p>
