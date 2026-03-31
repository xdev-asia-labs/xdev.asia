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
