---
id: 019d8b40-i103-7001-b010-laravel000103
title: 'Bài 3: Blade Templates & Frontend'
slug: bai-3-blade-templates-va-frontend
description: >-
  Blade syntax, components, layouts. Blade directives, custom
  directives. Asset bundling (Vite). Tailwind CSS integration.
  Anonymous components, dynamic components.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 3
section_title: "Phần 1: Laravel Fundamentals"
course:
  id: 019d8b40-i100-7001-b010-laravel000001
  title: 'Laravel: Từ Cơ bản đến Nâng cao'
  slug: laravel-tu-co-ban-den-nang-cao
---

<h2 id="1-blade-syntax"><strong>1. Blade Syntax</strong></h2>

<pre><code class="language-blade">{{-- Hiển thị data (auto-escaped) --}}
&lt;h1&gt;{{ $product->name }}&lt;/h1&gt;
&lt;p&gt;{!! $product->html_description !!}&lt;/p&gt;

{{-- Conditionals --}}
@if($products->count() > 0)
    @foreach($products as $product)
        &lt;div&gt;{{ $product->name }} - {{ number_format($product->price) }}đ&lt;/div&gt;
    @endforeach
@else
    &lt;p&gt;Không có sản phẩm nào.&lt;/p&gt;
@endif

{{-- Auth directives --}}
@auth
    &lt;p&gt;Xin chào, {{ auth()->user()->name }}&lt;/p&gt;
@endauth

@guest
    &lt;a href="/login"&gt;Đăng nhập&lt;/a&gt;
@endguest
</code></pre>

<h2 id="2-layouts"><strong>2. Layouts & Components</strong></h2>

<pre><code class="language-blade">{{-- resources/views/layouts/app.blade.php --}}
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;@yield('title') - My App&lt;/title&gt;
    @vite(['resources/css/app.css', 'resources/js/app.js'])
&lt;/head&gt;
&lt;body&gt;
    &lt;x-header /&gt;
    &lt;main&gt;{{ $slot }}&lt;/main&gt;
    &lt;x-footer /&gt;
&lt;/body&gt;
&lt;/html&gt;

{{-- resources/views/products/index.blade.php --}}
&lt;x-app-layout&gt;
    @section('title', 'Sản phẩm')
    &lt;h1&gt;Danh sách sản phẩm&lt;/h1&gt;
    @foreach($products as $product)
        &lt;x-product-card :product="$product" /&gt;
    @endforeach
    {{ $products->links() }}
&lt;/x-app-layout&gt;
</code></pre>

<h2 id="3-components"><strong>3. Blade Components</strong></h2>

<pre><code class="language-php">// app/View/Components/ProductCard.php
namespace App\View\Components;

use Illuminate\View\Component;

class ProductCard extends Component
{
    public function __construct(
        public readonly Product $product,
        public bool $showPrice = true,
    ) {}

    public function render()
    {
        return view('components.product-card');
    }
}
</code></pre>

<pre><code class="language-blade">{{-- resources/views/components/product-card.blade.php --}}
&lt;div {{ $attributes->merge(['class' => 'card p-4 rounded-lg shadow']) }}&gt;
    &lt;h3&gt;{{ $product->name }}&lt;/h3&gt;
    @if($showPrice)
        &lt;p class="text-lg font-bold"&gt;{{ number_format($product->price) }}đ&lt;/p&gt;
    @endif
    {{ $slot }}
&lt;/div&gt;
</code></pre>

<h2 id="4-vite"><strong>4. Vite & Tailwind CSS</strong></h2>

<pre><code class="language-javascript">// vite.config.js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
});
</code></pre>

<p>Bài tiếp theo: <strong>Eloquent ORM & Relationships</strong>.</p>
