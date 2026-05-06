---
id: 019d8b40-i203-7001-b010-laravel000203
title: 'レッスン 7: API リソースと応答'
slug: bai-7-api-resources-va-response
description: >-
  API リソース クラス、リソース コレクション。条件付き属性、関係。ページネーション、ラッピング。 JSON 応答、カスタム応答マクロ。 API
  のバージョン管理。
duration_minutes: 100
is_free: true
video_url: null
sort_order: 7
section_title: 'パート 2: データベースと検証'
course:
  id: 019d8b40-i100-7001-b010-laravel000001
  title: 'Laravel: 基本から上級まで'
  slug: laravel-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8993" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8993)"/>

  <!-- Decorations -->
  <g>
    <circle cx="943" cy="199" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="786" cy="82" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="629" cy="225" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="972" cy="108" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="815" cy="251" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="89" x2="1100" y2="169" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="119" x2="1050" y2="189" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1027.1051177665154,167 1027.1051177665154,211 989,233 950.8948822334847,211 950.8948822334847,167 989,145" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">💻 プログラミング — レッスン 7</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 7: API リソースと応答</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Laravel: 基本から上級まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: データベースと検証</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-api-resource"><strong>1. APIリソース</strong></h2>

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

<h2 id="2-collection"><strong>2. リソースの収集</strong></h2>

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

<h2 id="3-responses"><strong>3. JSON 応答</strong></h2>

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

<h2 id="4-api-versioning"><strong>4. API のバージョン管理</strong></h2>

<pre><code class="language-php">// routes/api.php
Route::prefix('v1')->group(function () {
    Route::apiResource('products', V1\ProductController::class);
});

Route::prefix('v2')->group(function () {
    Route::apiResource('products', V2\ProductController::class);
});
</code></pre>

<p>次の記事: <strong>ファイルストレージとメディア</strong>。</p>
