---
id: 019d8b40-i602-7001-b010-laravel000602
title: 第 20 課：簡潔的架構和包
slug: bai-20-clean-architecture-va-packages
description: 儲存庫模式、服務層、操作類別。領域驅動設計基礎知識。創建 Laravel 包。基於模組的結構（nwidart/laravel-modules）。堅實的原則。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 20
section_title: 第 6 部分：測試、Docker 和生產
course:
  id: 019d8b40-i100-7001-b010-laravel000001
  title: Laravel：從基礎到高級
  slug: laravel-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6092" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6092)"/>

  <!-- Decorations -->
  <g>
    <circle cx="631" cy="243" r="24" fill="#34d399" opacity="0.08"/>
    <circle cx="662" cy="54" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="693" cy="125" r="10" fill="#34d399" opacity="0.14"/>
    <circle cx="724" cy="196" r="33" fill="#34d399" opacity="0.07"/>
    <circle cx="755" cy="267" r="26" fill="#34d399" opacity="0.1"/>
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
    <line x1="600" y1="213" x2="1100" y2="293" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="243" x2="1050" y2="313" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1037.2487113059642,199 1037.2487113059642,227 1013,241 988.7512886940357,227 988.7512886940357,199 1013,185" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">💻 程式設計 — 第 20 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 20 課：簡潔的架構和包</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Laravel：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 6 部分：測試、Docker 和生產</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-service-layer"><strong>1.服務層</strong></h2>

<pre><code class="language-php">namespace App\Services;

class ProductService
{
    public function __construct(
        private readonly ProductRepository $repository,
    ) {}

    public function create(array $data): Product
    {
        $product = $this->repository->create($data);

        if (isset($data['tags'])) {
            $product->tags()->sync($data['tags']);
        }

        event(new ProductCreated($product));
        Cache::tags(['products'])->flush();

        return $product;
    }
}

// Controller
class ProductController extends Controller
{
    public function store(StoreProductRequest $request, ProductService $service)
    {
        $product = $service->create($request->validated());
        return new ProductResource($product);
    }
}
</code></pre>

<h2 id="2-action-classes"><strong>2. 動作類</strong></h2>

<pre><code class="language-php">namespace App\Actions;

class CreateOrder
{
    public function __construct(
        private readonly PaymentService $payment,
    ) {}

    public function execute(User $user, array $items): Order
    {
        return DB::transaction(function () use ($user, $items) {
            $order = $user->orders()->create([
                'total' => collect($items)->sum(fn ($i) => $i['price'] * $i['quantity']),
            ]);

            foreach ($items as $item) {
                $order->items()->create($item);
                Product::where('id', $item['product_id'])->decrement('stock', $item['quantity']);
            }

            $this->payment->charge($order);
            return $order;
        });
    }
}
</code></pre>

<h2 id="3-repository"><strong>3. 儲存庫模式</strong></h2>

<pre><code class="language-php">interface ProductRepositoryInterface
{
    public function findBySlug(string $slug): ?Product;
    public function getActive(int $perPage = 20): LengthAwarePaginator;
}

class EloquentProductRepository implements ProductRepositoryInterface
{
    public function findBySlug(string $slug): ?Product
    {
        return Product::with('category')->where('slug', $slug)->first();
    }

    public function getActive(int $perPage = 20): LengthAwarePaginator
    {
        return Product::where('is_active', true)->paginate($perPage);
    }
}

// AppServiceProvider
$this->app->bind(ProductRepositoryInterface::class, EloquentProductRepository::class);
</code></pre>

<h2 id="4-modules"><strong>4. 基於模組的結構</strong></h2>

<pre><code class="language-text">app/
├── Modules/
│   ├── Product/
│   │   ├── Actions/
│   │   ├── Models/
│   │   ├── Services/
│   │   ├── Http/Controllers/
│   │   ├── Http/Requests/
│   │   ├── Http/Resources/
│   │   └── routes.php
│   ├── Order/
│   └── User/
</code></pre>

<p>下一篇： <strong>Docker 和 CI/CD</strong>。</p>
