---
id: 019d8b40-i502-7001-b010-laravel000502
title: 'Bài 18: Inertia.js & Vue/React Integration'
slug: bai-18-inertiajs-va-vue-react
description: >-
  Inertia.js monolith architecture. Laravel + Vue/React SPA.
  Shared data, form helpers, file uploads. Server-side rendering.
  Inertia vs Livewire vs traditional SPA.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 18
section_title: "Phần 5: Modern Full-Stack"
course:
  id: 019d8b40-i100-7001-b010-laravel000001
  title: 'Laravel: Từ Cơ bản đến Nâng cao'
  slug: laravel-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6985" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6985)"/>

  <!-- Decorations -->
  <g>
    <circle cx="867" cy="131" r="10" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="634" cy="78" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="901" cy="285" r="12" fill="#a78bfa" opacity="0.08"/>
    <circle cx="668" cy="232" r="13" fill="#a78bfa" opacity="0.09"/>
    <circle cx="935" cy="179" r="14" fill="#a78bfa" opacity="0.1"/>
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
    <polygon points="1022.1769145362398,173 1022.1769145362398,209 991,227 959.8230854637602,209 959.8230854637602,173 991,155" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">💻 Lập trình — Bài 18</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 18: Inertia.js &amp; Vue/React Integration</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Laravel: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 5: Modern Full-Stack</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-setup"><strong>1. Inertia.js Setup</strong></h2>

<pre><code class="language-bash">composer require inertiajs/inertia-laravel
npm install @inertiajs/vue3
</code></pre>

<pre><code class="language-php">// Controller — trả về Inertia response
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        return Inertia::render('Products/Index', [
            'products' => Product::with('category')->paginate(20),
            'filters' => request()->only(['search', 'category']),
        ]);
    }

    public function store(StoreProductRequest $request)
    {
        Product::create($request->validated());
        return redirect()->route('products.index')
            ->with('success', 'Sản phẩm đã được tạo!');
    }
}
</code></pre>

<h2 id="2-vue-pages"><strong>2. Vue Pages</strong></h2>

<pre><code class="language-vue">&lt;!-- resources/js/Pages/Products/Index.vue --&gt;
&lt;script setup&gt;
import { Head, Link, router } from '@inertiajs/vue3';
import { ref, watch } from 'vue';

const props = defineProps({
    products: Object,
    filters: Object,
});

const search = ref(props.filters.search ?? '');

watch(search, (value) => {
    router.get('/products', { search: value }, {
        preserveState: true,
        replace: true,
    });
});
&lt;/script&gt;

&lt;template&gt;
    &lt;Head title="Sản phẩm" /&gt;
    &lt;input v-model="search" placeholder="Tìm kiếm..." /&gt;
    &lt;div v-for="product in products.data" :key="product.id"&gt;
        &lt;Link :href="`/products/${product.slug}`"&gt;
            {{ product.name }} - {{ product.price }}đ
        &lt;/Link&gt;
    &lt;/div&gt;
&lt;/template&gt;
</code></pre>

<h2 id="3-forms"><strong>3. Inertia Forms</strong></h2>

<pre><code class="language-vue">&lt;script setup&gt;
import { useForm } from '@inertiajs/vue3';

const form = useForm({
    name: '',
    price: 0,
    description: '',
    image: null,
});

function submit() {
    form.post('/products', {
        forceFormData: true,
        onSuccess: () => form.reset(),
    });
}
&lt;/script&gt;

&lt;template&gt;
    &lt;form @submit.prevent="submit"&gt;
        &lt;input v-model="form.name" /&gt;
        &lt;span v-if="form.errors.name"&gt;{{ form.errors.name }}&lt;/span&gt;
        &lt;button :disabled="form.processing"&gt;Lưu&lt;/button&gt;
    &lt;/form&gt;
&lt;/template&gt;
</code></pre>

<h2 id="4-shared-data"><strong>4. Shared Data</strong></h2>

<pre><code class="language-php">// Middleware HandleInertiaRequests
public function share(Request $request): array
{
    return [
        ...parent::share($request),
        'auth' => ['user' => $request->user()],
        'flash' => ['success' => $request->session()->get('success')],
    ];
}
</code></pre>

<h2 id="5-comparison"><strong>5. Livewire vs Inertia</strong></h2>

<table>
<thead><tr><th>Tính năng</th><th>Livewire</th><th>Inertia</th></tr></thead>
<tbody>
<tr><td>Frontend</td><td>Blade + Alpine.js</td><td>Vue/React</td></tr>
<tr><td>SPA Feel</td><td>Tốt</td><td>Rất tốt</td></tr>
<tr><td>Learning curve</td><td>Thấp</td><td>Trung bình</td></tr>
<tr><td>JS ecosystem</td><td>Hạn chế</td><td>Đầy đủ</td></tr>
<tr><td>SSR</td><td>Tự động</td><td>Cần setup</td></tr>
</tbody>
</table>

<p>Bài tiếp theo: <strong>Testing trong Laravel</strong>.</p>
