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
