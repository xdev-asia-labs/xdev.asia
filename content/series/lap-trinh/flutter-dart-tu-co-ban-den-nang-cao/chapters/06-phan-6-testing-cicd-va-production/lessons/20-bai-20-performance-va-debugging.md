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

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2963" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2963)"/>

  <!-- Decorations -->
  <g>
    <circle cx="881" cy="233" r="24" fill="#34d399" opacity="0.08"/>
    <circle cx="662" cy="214" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="943" cy="195" r="10" fill="#34d399" opacity="0.14"/>
    <circle cx="724" cy="176" r="33" fill="#34d399" opacity="0.07"/>
    <circle cx="1005" cy="157" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="63" x2="1100" y2="143" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="93" x2="1050" y2="163" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1045.9089653438086,194 1045.9089653438086,232 1013,251 980.0910346561914,232 980.0910346561914,194 1013,175" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">💻 Lập trình — Bài 20</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 20: Performance &amp; Debugging</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Flutter &amp; Dart: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 6: Testing, CI/CD &amp; Production</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

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
