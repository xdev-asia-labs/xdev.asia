---
id: 019d8b40-e202-7001-b006-flutter000202
title: 'Bài 6: State Management với Riverpod'
slug: bai-6-state-management-voi-riverpod
description: >-
  Provider vs Riverpod vs Bloc. Riverpod 2.0: Provider,
  StateProvider, StateNotifierProvider, FutureProvider,
  StreamProvider. Auto-dispose, family modifier. Code generation.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 6
section_title: "Phần 2: Navigation & State Management"
course:
  id: 019d8b40-e100-7001-b006-flutter000001
  title: 'Flutter & Dart: Từ Cơ bản đến Nâng cao'
  slug: flutter-dart-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9814" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9814)"/>

  <!-- Decorations -->
  <g>
    <circle cx="814" cy="92" r="22" fill="#f472b6" opacity="0.07"/>
    <circle cx="1028" cy="286" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="742" cy="220" r="36" fill="#f472b6" opacity="0.11"/>
    <circle cx="956" cy="154" r="28" fill="#f472b6" opacity="0.13"/>
    <circle cx="670" cy="88" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="72" x2="1100" y2="152" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="102" x2="1050" y2="172" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="945.3826859021799,108.5 945.3826859021799,135.5 922,149 898.6173140978201,135.5 898.6173140978201,108.5 922,95" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">💻 Lập trình — Bài 6</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 6: State Management với Riverpod</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Flutter &amp; Dart: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 2: Navigation &amp; State Management</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-setup"><strong>1. Riverpod Setup</strong></h2>

<pre><code class="language-yaml">dependencies:
  flutter_riverpod: ^2.5.0
  riverpod_annotation: ^2.3.0

dev_dependencies:
  riverpod_generator: ^2.4.0
  build_runner: ^2.4.0
</code></pre>

<pre><code class="language-dart">void main() {
  runApp(const ProviderScope(child: MyApp()));
}
</code></pre>

<h2 id="2-providers"><strong>2. Provider Types</strong></h2>

<pre><code class="language-dart">// Simple provider
final greetingProvider = Provider&lt;String&gt;((ref) => 'Hello Riverpod!');

// StateProvider — simple state
final counterProvider = StateProvider&lt;int&gt;((ref) => 0);

// FutureProvider — async data
final productsProvider = FutureProvider&lt;List&lt;Product&gt;&gt;((ref) async {
  final repository = ref.watch(productRepositoryProvider);
  return repository.getAll();
});

// StreamProvider
final messagesProvider = StreamProvider&lt;List&lt;Message&gt;&gt;((ref) {
  return ref.watch(chatServiceProvider).messagesStream;
});

// StateNotifierProvider — complex state
class CartNotifier extends StateNotifier&lt;List&lt;CartItem&gt;&gt; {
  CartNotifier() : super([]);

  void add(Product product) {
    state = [...state, CartItem(product: product, quantity: 1)];
  }

  void remove(String productId) {
    state = state.where((item) => item.product.id != productId).toList();
  }

  double get total => state.fold(0, (sum, item) => sum + item.product.price * item.quantity);
}

final cartProvider = StateNotifierProvider&lt;CartNotifier, List&lt;CartItem&gt;&gt;((ref) {
  return CartNotifier();
});
</code></pre>

<h2 id="3-consuming"><strong>3. Consuming Providers</strong></h2>

<pre><code class="language-dart">class ProductListPage extends ConsumerWidget {
  const ProductListPage({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final asyncProducts = ref.watch(productsProvider);

    return asyncProducts.when(
      data: (products) => ListView.builder(
        itemCount: products.length,
        itemBuilder: (context, index) => ProductCard(product: products[index]),
      ),
      loading: () => const CircularProgressIndicator(),
      error: (error, stack) => Text('Error: $error'),
    );
  }
}
</code></pre>

<h2 id="4-family-autodispose"><strong>4. Family & AutoDispose</strong></h2>

<pre><code class="language-dart">// Family — parameterized provider
final productByIdProvider = FutureProvider.family&lt;Product, String&gt;((ref, id) async {
  return ref.watch(productRepositoryProvider).getById(id);
});

// AutoDispose — cleanup khi không còn listener
final searchProvider = FutureProvider.autoDispose.family&lt;List&lt;Product&gt;, String&gt;((ref, query) async {
  ref.keepAlive(); // Giữ cache cho đến khi dispose thủ công
  return ref.watch(productRepositoryProvider).search(query);
});
</code></pre>

<p>Bài tiếp theo: <strong>Bloc Pattern & Cubit</strong>.</p>
