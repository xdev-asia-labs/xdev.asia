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
