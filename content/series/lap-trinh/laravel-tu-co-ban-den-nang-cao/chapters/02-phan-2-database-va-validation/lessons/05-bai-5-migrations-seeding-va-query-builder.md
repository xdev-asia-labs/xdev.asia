---
id: 019d8b40-i201-7001-b010-laravel000201
title: 'Bài 5: Migrations, Seeding & Query Builder'
slug: bai-5-migrations-seeding-va-query-builder
description: >-
  Database migrations, schema builder. Factory (model factories),
  seeders. Query Builder, raw queries, pagination. Database
  transactions, database testing.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 5
section_title: "Phần 2: Database & Validation"
course:
  id: 019d8b40-i100-7001-b010-laravel000001
  title: 'Laravel: Từ Cơ bản đến Nâng cao'
  slug: laravel-tu-co-ban-den-nang-cao
---

<h2 id="1-migrations"><strong>1. Migrations</strong></h2>

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

<h2 id="2-factories"><strong>2. Model Factories</strong></h2>

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

<h2 id="3-seeders"><strong>3. Seeders</strong></h2>

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

<h2 id="4-query-builder"><strong>4. Query Builder</strong></h2>

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

<p>Bài tiếp theo: <strong>Validation & Form Requests</strong>.</p>
