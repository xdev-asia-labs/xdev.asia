---
id: 019d8b40-i103-7001-b010-laravel000103
title: 'Lesson 3: Blade Templates & Frontend'
slug: bai-3-blade-templates-va-frontend
description: >-
  Blade syntax, components, layouts. Blade directives, custom directives. Asset
  bundling (Vite). Tailwind CSS integration. Anonymous components, dynamic
  components.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 3
section_title: 'Part 1: Laravel Fundamentals'
course:
  id: 019d8b40-i100-7001-b010-laravel000001
  title: 'Laravel: From Basics to Advanced'
  slug: laravel-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5827" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5827)"/>

  <!-- Decorations -->
  <g>
    <circle cx="786" cy="208" r="34" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="972" cy="94" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="658" cy="240" r="30" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="844" cy="126" r="28" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="1030" cy="272" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="128" x2="1100" y2="208" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="158" x2="1050" y2="228" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="965.2390923627308,106.5 965.2390923627308,149.5 928,171 890.7609076372692,149.5 890.7609076372692,106.50000000000001 928,85" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">💻 Programming — Lesson 3</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 3: Blade Templates & Frontend</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Laravel: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: Laravel Fundamentals</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

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

<p>Next article: <strong>Eloquent ORM & Relationships</strong>.</p>
