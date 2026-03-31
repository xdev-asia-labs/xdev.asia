---
id: 019d8b40-i203-7001-b010-laravel000203
title: 'Bài 7: API Resources & Response'
slug: bai-7-api-resources-va-response
description: >-
  API Resource classes, Resource Collections. Conditional attributes,
  relationships. Pagination, wrapping. JSON responses, custom
  response macros. API versioning.
duration_minutes: 100
is_free: true
video_url: null
sort_order: 7
section_title: "Phần 2: Database & Validation"
course:
  id: 019d8b40-i100-7001-b010-laravel000001
  title: 'Laravel: Từ Cơ bản đến Nâng cao'
  slug: laravel-tu-co-ban-den-nang-cao
---

<h2 id="1-api-resource"><strong>1. API Resource</strong></h2>

<pre><code class="language-bash">php artisan make:resource ProductResource
php artisan make:resource ProductCollection --collection
</code></pre>

<pre><code class="language-php">namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'price' => $this->price,
            'formatted_price' => number_format($this->price) . 'đ',
            'category' => new CategoryResource($this->whenLoaded('category')),
            'tags' => TagResource::collection($this->whenLoaded('tags')),
            'review_count' => $this->whenCounted('reviews'),
            'avg_rating' => $this->when($this->avg_rating !== null, $this->avg_rating),
            'created_at' => $this->created_at->toISOString(),
        ];
    }
}
</code></pre>

<h2 id="2-collection"><strong>2. Resource Collection</strong></h2>

<pre><code class="language-php">class ProductCollection extends ResourceCollection
{
    public function toArray($request): array
    {
        return [
            'data' => $this->collection,
            'meta' => [
                'total' => $this->total(),
                'per_page' => $this->perPage(),
            ],
        ];
    }
}

// Controller
public function index()
{
    $products = Product::with('category')
        ->withCount('reviews')
        ->paginate(20);

    return new ProductCollection($products);
}

public function show(Product $product)
{
    $product->load(['category', 'tags', 'reviews.user']);
    return new ProductResource($product);
}
</code></pre>

<h2 id="3-responses"><strong>3. JSON Responses</strong></h2>

<pre><code class="language-php">// Success
return response()->json(['message' => 'Created'], 201);

// Error
return response()->json(['error' => 'Not Found'], 404);

// Custom response macro
// AppServiceProvider
Response::macro('success', function ($data = null, $message = 'OK', $code = 200) {
    return response()->json([
        'success' => true,
        'message' => $message,
        'data' => $data,
    ], $code);
});

return response()->success($product, 'Product created', 201);
</code></pre>

<h2 id="4-api-versioning"><strong>4. API Versioning</strong></h2>

<pre><code class="language-php">// routes/api.php
Route::prefix('v1')->group(function () {
    Route::apiResource('products', V1\ProductController::class);
});

Route::prefix('v2')->group(function () {
    Route::apiResource('products', V2\ProductController::class);
});
</code></pre>

<p>Bài tiếp theo: <strong>File Storage & Media</strong>.</p>
