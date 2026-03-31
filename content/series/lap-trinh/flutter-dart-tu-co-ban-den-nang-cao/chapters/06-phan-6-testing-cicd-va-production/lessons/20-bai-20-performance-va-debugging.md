---
id: 019d8b40-e602-7001-b006-flutter000602
title: 'Bài 20: Performance & Debugging'
slug: bai-20-performance-va-debugging
description: >-
  DevTools: Timeline, Memory, Network. Widget rebuild optimization.
  const constructors, RepaintBoundary. Image caching, lazy loading.
  Isolates cho heavy computation. Tree shaking, deferred loading.
duration_minutes: 100
is_free: true
video_url: null
sort_order: 20
section_title: "Phần 6: Testing, CI/CD & Production"
course:
  id: 019d8b40-e100-7001-b006-flutter000001
  title: 'Flutter & Dart: Từ Cơ bản đến Nâng cao'
  slug: flutter-dart-tu-co-ban-den-nang-cao
---

<h2 id="1-devtools"><strong>1. Flutter DevTools</strong></h2>

<pre><code class="language-bash"># Mở DevTools
flutter run --profile
# Hoặc từ IDE: Open Flutter DevTools
</code></pre>

<table>
<thead><tr><th>Tab</th><th>Chức năng</th></tr></thead>
<tbody>
<tr><td>Widget Inspector</td><td>Xem widget tree, properties</td></tr>
<tr><td>Timeline</td><td>Frame rendering, jank detection</td></tr>
<tr><td>Memory</td><td>Memory leaks, allocation tracking</td></tr>
<tr><td>Network</td><td>HTTP requests monitoring</td></tr>
<tr><td>Performance</td><td>CPU profiling, flame chart</td></tr>
</tbody>
</table>

<h2 id="2-rebuild"><strong>2. Tối ưu Widget Rebuild</strong></h2>

<pre><code class="language-dart">// ✅ Dùng const constructor
const SizedBox(height: 16);
const Text('Static text');

// ✅ RepaintBoundary cho phần tử animate nặng
RepaintBoundary(
  child: AnimatedWidget(...),
);

// ✅ Tách widget nhỏ thay vì build method lớn
class ProductPrice extends StatelessWidget {
  final double price;
  const ProductPrice({super.key, required this.price});

  @override
  Widget build(BuildContext context) {
    return Text('\$${price.toStringAsFixed(2)}',
      style: Theme.of(context).textTheme.titleLarge);
  }
}

// ✅ Sử dụng selector để giảm rebuild
ref.watch(cartProvider.select((cart) => cart.length)); // Chỉ rebuild khi length thay đổi

// ✅ ListView.builder thay vì Column + map
ListView.builder(
  itemCount: items.length,
  itemBuilder: (_, i) => ItemWidget(item: items[i]),
);
</code></pre>

<h2 id="3-isolates"><strong>3. Isolates cho Heavy Computation</strong></h2>

<pre><code class="language-dart">// compute() — simple isolate
Future&lt;List&lt;Product&gt;&gt; parseProducts(String jsonString) async {
  return compute(_parseJson, jsonString);
}

List&lt;Product&gt; _parseJson(String json) {
  final data = jsonDecode(json) as List;
  return data.map((e) => Product.fromJson(e)).toList();
}

// Isolate.run — Dart 2.19+
final result = await Isolate.run(() {
  // Heavy computation
  return processLargeData(data);
});
</code></pre>

<h2 id="4-image"><strong>4. Image Optimization</strong></h2>

<pre><code class="language-dart">// CachedNetworkImage
CachedNetworkImage(
  imageUrl: product.imageUrl,
  placeholder: (_, __) => const Shimmer(),
  errorWidget: (_, __, ___) => const Icon(Icons.error),
  memCacheWidth: 300, // Resize in memory
);

// Precache images
Future&lt;void&gt; precacheImages(BuildContext context) async {
  for (final url in imageUrls) {
    await precacheImage(CachedNetworkImageProvider(url), context);
  }
}

// Deferred loading — chia code thành chunks
import 'package:my_app/heavy_feature.dart' deferred as heavy;

Future&lt;void&gt; loadFeature() async {
  await heavy.loadLibrary();
  heavy.showHeavyWidget();
}
</code></pre>

<p>Bài tiếp theo: <strong>CI/CD & App Signing</strong>.</p>
