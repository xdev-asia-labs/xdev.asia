---
id: 019d8b40-i501-7001-b010-laravel000501
title: 'Bài 17: Livewire — Full-Stack Components'
slug: bai-17-livewire-full-stack-components
description: >-
  Livewire 3, wire:model, wire:click. Component lifecycle, reactive
  properties. File uploads, pagination. Lazy loading, polling.
  Alpine.js integration. SPA-like experience.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 17
section_title: "Phần 5: Modern Full-Stack"
course:
  id: 019d8b40-i100-7001-b010-laravel000001
  title: 'Laravel: Từ Cơ bản đến Nâng cao'
  slug: laravel-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8660" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8660)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1003" cy="219" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="906" cy="282" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="809" cy="85" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="712" cy="148" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="615" cy="211" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="169" x2="1100" y2="249" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="199" x2="1050" y2="269" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1057.1051177665154,197 1057.1051177665154,241 1019,263 980.8948822334847,241 980.8948822334847,197 1019,175" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">💻 Lập trình — Bài 17</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 17: Livewire — Full-Stack Components</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Laravel: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 5: Modern Full-Stack</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-setup"><strong>1. Livewire 3 Setup</strong></h2>

<pre><code class="language-bash">composer require livewire/livewire
php artisan make:livewire ProductSearch
</code></pre>

<h2 id="2-component"><strong>2. Livewire Component</strong></h2>

<pre><code class="language-php">namespace App\Livewire;

use Livewire\Component;
use Livewire\WithPagination;
use Livewire\Attributes\Url;

class ProductSearch extends Component
{
    use WithPagination;

    #[Url]
    public string $search = '';
    public string $category = '';
    public string $sortBy = 'created_at';

    public function updatedSearch()
    {
        $this->resetPage();
    }

    public function render()
    {
        $products = Product::query()
            ->when($this->search, fn ($q) => $q->where('name', 'like', "%{$this->search}%"))
            ->when($this->category, fn ($q) => $q->where('category_id', $this->category))
            ->orderByDesc($this->sortBy)
            ->paginate(20);

        return view('livewire.product-search', compact('products'));
    }
}
</code></pre>

<pre><code class="language-blade">{{-- resources/views/livewire/product-search.blade.php --}}
&lt;div&gt;
    &lt;input wire:model.live.debounce.300ms="search" placeholder="Tìm kiếm..." /&gt;

    &lt;select wire:model.live="category"&gt;
        &lt;option value=""&gt;Tất cả&lt;/option&gt;
        @foreach($categories as $cat)
            &lt;option value="{{ $cat->id }}"&gt;{{ $cat->name }}&lt;/option&gt;
        @endforeach
    &lt;/select&gt;

    @foreach($products as $product)
        &lt;x-product-card :product="$product" /&gt;
    @endforeach

    {{ $products->links() }}
&lt;/div&gt;
</code></pre>

<h2 id="3-actions"><strong>3. Actions & Events</strong></h2>

<pre><code class="language-php">class Cart extends Component
{
    public array $items = [];

    public function addToCart(int $productId)
    {
        $product = Product::findOrFail($productId);
        $this->items[] = $product->toArray();
        $this->dispatch('cart-updated', count: count($this->items));
    }

    public function removeItem(int $index)
    {
        unset($this->items[$index]);
        $this->items = array_values($this->items);
    }
}
</code></pre>

<h2 id="4-file-upload"><strong>4. File Upload</strong></h2>

<pre><code class="language-php">use Livewire\WithFileUploads;

class AvatarUpload extends Component
{
    use WithFileUploads;

    public $photo;

    public function save()
    {
        $this->validate(['photo' => 'image|max:2048']);
        $path = $this->photo->store('avatars', 'public');
        auth()->user()->update(['avatar' => $path]);
    }
}
</code></pre>

<h2 id="5-alpine"><strong>5. Alpine.js Integration</strong></h2>

<pre><code class="language-blade">&lt;div x-data="{ open: false }"&gt;
    &lt;button @click="open = !open"&gt;Toggle&lt;/button&gt;
    &lt;div x-show="open" x-transition&gt;
        &lt;livewire:product-details :product="$product" /&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre>

<p>Bài tiếp theo: <strong>Inertia.js & Vue/React Integration</strong>.</p>
