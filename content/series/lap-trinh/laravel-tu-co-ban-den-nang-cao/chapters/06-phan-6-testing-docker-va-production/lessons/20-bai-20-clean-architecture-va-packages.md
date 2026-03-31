---
id: 019d8b40-i602-7001-b010-laravel000602
title: 'Bài 20: Clean Architecture & Packages'
slug: bai-20-clean-architecture-va-packages
description: >-
  Repository pattern, Service layer, Action classes. Domain-Driven
  Design basics. Creating Laravel packages. Module-based structure
  (nwidart/laravel-modules). SOLID principles.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 20
section_title: "Phần 6: Testing, Docker & Production"
course:
  id: 019d8b40-i100-7001-b010-laravel000001
  title: 'Laravel: Từ Cơ bản đến Nâng cao'
  slug: laravel-tu-co-ban-den-nang-cao
---

<h2 id="1-service-layer"><strong>1. Service Layer</strong></h2>

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

<h2 id="2-action-classes"><strong>2. Action Classes</strong></h2>

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

<h2 id="3-repository"><strong>3. Repository Pattern</strong></h2>

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

<h2 id="4-modules"><strong>4. Module-based Structure</strong></h2>

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

<p>Bài tiếp theo: <strong>Docker & CI/CD</strong>.</p>
