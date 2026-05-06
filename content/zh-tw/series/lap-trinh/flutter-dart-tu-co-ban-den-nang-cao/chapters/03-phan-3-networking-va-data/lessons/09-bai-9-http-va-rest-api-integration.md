---
id: 019d8b40-e301-7001-b006-flutter000301
title: 第 9 課：HTTP 和 REST API 集成
slug: bai-9-http-va-rest-api-integration
description: Dio HTTP 用戶端、攔截器、重試。使用 json_serialized/freezed 進行 JSON 序列化。儲存庫模式，錯誤處理。分頁，無限滾動。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 9
section_title: 第 3 部分：網路與數據
course:
  id: 019d8b40-e100-7001-b006-flutter000001
  title: Flutter 和 Dart：從基礎到高級
  slug: flutter-dart-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5116" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5116)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1004" cy="102" r="22" fill="#f472b6" opacity="0.07"/>
    <circle cx="908" cy="126" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="812" cy="150" r="36" fill="#f472b6" opacity="0.11"/>
    <circle cx="716" cy="174" r="28" fill="#f472b6" opacity="0.13"/>
    <circle cx="620" cy="198" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="142" x2="1100" y2="222" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="172" x2="1050" y2="242" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1074.0429399400243,223.5 1074.0429399400243,260.5 1042,279 1009.9570600599758,260.5 1009.9570600599758,223.5 1042,205" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">💻 程式設計 — 第 9 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 9 課：HTTP 和 REST API 集成</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Flutter 和 Dart：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：網路與數據</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-dio"><strong>1.Dio HTTP客戶端</strong></h2>

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

<h2 id="2-models"><strong>2.JSON序列化</strong></h2>

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

<h2 id="3-repository"><strong>3. 儲存庫模式</strong></h2>

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

<h2 id="4-pagination"><strong>4. Riverpod 無限滾動</strong></h2>

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

<p>下一篇： <strong>本地儲存&離線優先</strong>。</p>
