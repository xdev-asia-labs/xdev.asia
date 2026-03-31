---
id: 019d8b40-e301-7001-b006-flutter000301
title: 'Bài 9: HTTP & REST API Integration'
slug: bai-9-http-va-rest-api-integration
description: >-
  Dio HTTP client, interceptors, retry. JSON serialization với
  json_serializable/freezed. Repository pattern, error handling.
  Pagination, infinite scroll.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 9
section_title: "Phần 3: Networking & Data"
course:
  id: 019d8b40-e100-7001-b006-flutter000001
  title: 'Flutter & Dart: Từ Cơ bản đến Nâng cao'
  slug: flutter-dart-tu-co-ban-den-nang-cao
---

<h2 id="1-dio"><strong>1. Dio HTTP Client</strong></h2>

<pre><code class="language-yaml">dependencies:
  dio: ^5.4.0
  json_annotation: ^4.8.0
  retrofit: ^4.1.0

dev_dependencies:
  json_serializable: ^6.7.0
  retrofit_generator: ^8.1.0
  build_runner: ^2.4.0
</code></pre>

<pre><code class="language-dart">class ApiClient {
  late final Dio _dio;

  ApiClient({required String baseUrl, String? token}) {
    _dio = Dio(BaseOptions(
      baseUrl: baseUrl,
      connectTimeout: const Duration(seconds: 10),
      receiveTimeout: const Duration(seconds: 15),
      headers: {'Content-Type': 'application/json'},
    ));

    _dio.interceptors.addAll([
      LogInterceptor(requestBody: true, responseBody: true),
      InterceptorsWrapper(
        onRequest: (options, handler) {
          if (token != null) options.headers['Authorization'] = 'Bearer $token';
          handler.next(options);
        },
        onError: (error, handler) {
          if (error.response?.statusCode == 401) {
            // Refresh token logic
          }
          handler.next(error);
        },
      ),
    ]);
  }
}
</code></pre>

<h2 id="2-models"><strong>2. JSON Serialization</strong></h2>

<pre><code class="language-dart">import 'package:json_annotation/json_annotation.dart';
part 'product.g.dart';

@JsonSerializable()
class Product {
  final String id;
  final String name;
  final double price;
  @JsonKey(name: 'created_at')
  final DateTime createdAt;
  @JsonKey(name: 'image_url')
  final String? imageUrl;

  const Product({
    required this.id,
    required this.name,
    required this.price,
    required this.createdAt,
    this.imageUrl,
  });

  factory Product.fromJson(Map&lt;String, dynamic&gt; json) => _$ProductFromJson(json);
  Map&lt;String, dynamic&gt; toJson() => _$ProductToJson(this);
}
</code></pre>

<h2 id="3-repository"><strong>3. Repository Pattern</strong></h2>

<pre><code class="language-dart">class ProductRepository {
  final Dio _dio;

  ProductRepository(this._dio);

  Future&lt;List&lt;Product&gt;&gt; getProducts({int page = 1, int limit = 20}) async {
    try {
      final response = await _dio.get('/products', queryParameters: {
        'page': page,
        'limit': limit,
      });
      return (response.data['data'] as List)
          .map((json) => Product.fromJson(json))
          .toList();
    } on DioException catch (e) {
      throw ApiException.fromDioError(e);
    }
  }
}

class ApiException implements Exception {
  final String message;
  final int? statusCode;

  ApiException(this.message, {this.statusCode});

  factory ApiException.fromDioError(DioException e) {
    return switch (e.type) {
      DioExceptionType.connectionTimeout => ApiException('Kết nối timeout'),
      DioExceptionType.receiveTimeout => ApiException('Server phản hồi chậm'),
      _ => ApiException(e.response?.data?['message'] ?? 'Lỗi không xác định',
          statusCode: e.response?.statusCode),
    };
  }
}
</code></pre>

<h2 id="4-pagination"><strong>4. Infinite Scroll với Riverpod</strong></h2>

<pre><code class="language-dart">class ProductListNotifier extends StateNotifier&lt;AsyncValue&lt;List&lt;Product&gt;&gt;&gt; {
  final ProductRepository _repo;
  int _page = 1;
  bool _hasMore = true;

  ProductListNotifier(this._repo) : super(const AsyncLoading()) {
    loadMore();
  }

  Future&lt;void&gt; loadMore() async {
    if (!_hasMore) return;
    try {
      final products = await _repo.getProducts(page: _page);
      _hasMore = products.length == 20;
      _page++;
      state = AsyncData([
        ...state.valueOrNull ?? [],
        ...products,
      ]);
    } catch (e, st) {
      state = AsyncError(e, st);
    }
  }
}

// UI — NotificationListener
NotificationListener&lt;ScrollNotification&gt;(
  onNotification: (notification) {
    if (notification.metrics.pixels >= notification.metrics.maxScrollExtent - 200) {
      ref.read(productListProvider.notifier).loadMore();
    }
    return false;
  },
  child: ListView.builder(
    itemCount: products.length,
    itemBuilder: (_, i) => ProductCard(product: products[i]),
  ),
);
</code></pre>

<p>Bài tiếp theo: <strong>Local Storage & Offline First</strong>.</p>
