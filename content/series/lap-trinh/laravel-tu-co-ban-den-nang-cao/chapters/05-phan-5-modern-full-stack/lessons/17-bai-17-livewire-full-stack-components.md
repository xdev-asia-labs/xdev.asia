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
