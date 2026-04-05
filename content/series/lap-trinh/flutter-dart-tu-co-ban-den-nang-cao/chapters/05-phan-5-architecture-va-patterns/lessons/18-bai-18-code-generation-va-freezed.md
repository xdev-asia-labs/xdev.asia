---
id: 019d8b40-e502-7001-b006-flutter000502
title: 'Bài 18: Code Generation & Freezed'
slug: bai-18-code-generation-va-freezed
description: >-
  build_runner workflow. Freezed cho immutable data classes, union types.
  json_serializable với custom converters. auto_route, injectable.
  Code generation best practices.
duration_minutes: 100
is_free: true
video_url: null
sort_order: 18
section_title: "Phần 5: Architecture & Patterns"
course:
  id: 019d8b40-e100-7001-b006-flutter000001
  title: 'Flutter & Dart: Từ Cơ bản đến Nâng cao'
  slug: flutter-dart-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6815" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6815)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1091" cy="143" r="24" fill="#34d399" opacity="0.08"/>
    <circle cx="1082" cy="94" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="1073" cy="45" r="10" fill="#34d399" opacity="0.14"/>
    <circle cx="1064" cy="256" r="33" fill="#34d399" opacity="0.07"/>
    <circle cx="1055" cy="207" r="26" fill="#34d399" opacity="0.1"/>
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
    <line x1="600" y1="93" x2="1100" y2="173" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="123" x2="1050" y2="193" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1067.2487113059642,229 1067.2487113059642,257 1043,271 1018.7512886940357,257 1018.7512886940357,229 1043,215" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">💻 Lập trình — Bài 18</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 18: Code Generation &amp; Freezed</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Flutter &amp; Dart: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 5: Architecture &amp; Patterns</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-freezed"><strong>1. Freezed — Immutable Data Classes</strong></h2>

<pre><code class="language-yaml">dependencies:
  freezed_annotation: ^2.4.0
  json_annotation: ^4.8.0

dev_dependencies:
  freezed: ^2.5.0
  json_serializable: ^6.7.0
  build_runner: ^2.4.0
</code></pre>

<pre><code class="language-dart">import 'package:freezed_annotation/freezed_annotation.dart';
part 'product.freezed.dart';
part 'product.g.dart';

@freezed
class Product with _$Product {
  const factory Product({
    required String id,
    required String name,
    required double price,
    @Default('') String description,
    @JsonKey(name: 'image_url') String? imageUrl,
    @Default([]) List&lt;String&gt; tags,
  }) = _Product;

  factory Product.fromJson(Map&lt;String, dynamic&gt; json) => _$ProductFromJson(json);
}

// Sử dụng — immutable copyWith
final product = Product(id: '1', name: 'Laptop', price: 999);
final updated = product.copyWith(price: 899); // Immutable update
</code></pre>

<h2 id="2-union"><strong>2. Freezed Union Types — Sealed Classes</strong></h2>

<pre><code class="language-dart">@freezed
sealed class ApiResult&lt;T&gt; with _$ApiResult&lt;T&gt; {
  const factory ApiResult.success(T data) = ApiSuccess;
  const factory ApiResult.error(String message, {int? statusCode}) = ApiError;
  const factory ApiResult.loading() = ApiLoading;
}

// Pattern matching
final result = await repository.getProducts();
result.when(
  success: (data) => state = ProductLoaded(data),
  error: (message, statusCode) => state = ProductError(message),
  loading: () => state = const ProductLoading(),
);

// maybeWhen — xử lý một số case
result.maybeWhen(
  success: (data) => showProducts(data),
  orElse: () => showPlaceholder(),
);
</code></pre>

<h2 id="3-injectable"><strong>3. Injectable — DI Code Generation</strong></h2>

<pre><code class="language-dart">// Đánh dấu với annotations
@injectable
class ProductRepository {
  final ApiClient _api;
  final ProductCache _cache;

  ProductRepository(this._api, this._cache);
}

@lazySingleton
class ApiClient {
  final Dio _dio;
  ApiClient(this._dio);
}

@module
abstract class RegisterModule {
  @lazySingleton
  Dio get dio => Dio(BaseOptions(baseUrl: 'https://api.example.com'));
}

// Generated — injection.config.dart
@InjectableInit()
void configureDependencies() => getIt.init();
</code></pre>

<h2 id="4-build-runner"><strong>4. Build Runner Workflow</strong></h2>

<pre><code class="language-bash"># One-time build
dart run build_runner build --delete-conflicting-outputs

# Watch mode — auto-rebuild
dart run build_runner watch --delete-conflicting-outputs

# Clean generated files
dart run build_runner clean
</code></pre>

<table>
<thead><tr><th>Package</th><th>Mục đích</th><th>Generated files</th></tr></thead>
<tbody>
<tr><td>freezed</td><td>Immutable classes, unions</td><td>*.freezed.dart</td></tr>
<tr><td>json_serializable</td><td>JSON serialization</td><td>*.g.dart</td></tr>
<tr><td>injectable</td><td>DI registration</td><td>injection.config.dart</td></tr>
<tr><td>auto_route</td><td>Router generation</td><td>*.gr.dart</td></tr>
<tr><td>riverpod_generator</td><td>Riverpod providers</td><td>*.g.dart</td></tr>
</tbody>
</table>

<p>Bài tiếp theo: <strong>Testing trong Flutter</strong>.</p>
