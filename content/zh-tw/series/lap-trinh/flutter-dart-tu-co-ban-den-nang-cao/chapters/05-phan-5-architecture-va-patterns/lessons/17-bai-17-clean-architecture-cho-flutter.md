---
id: 019d8b40-e501-7001-b006-flutter000501
title: 第 17 課：Flutter 的簡潔架構
slug: bai-17-clean-architecture-cho-flutter
description: 乾淨的架構層：域、資料、表示。用例、儲存庫、實體。使用 get_it/injectable 進行依賴注入。功能優先與層優先資料夾結構。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 17
section_title: 第 5 部分：架構與模式
course:
  id: 019d8b40-e100-7001-b006-flutter000001
  title: Flutter 和 Dart：從基礎到高級
  slug: flutter-dart-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4818" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4818)"/>

  <!-- Decorations -->
  <g>
    <circle cx="735" cy="55" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="870" cy="150" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="1005" cy="245" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="640" cy="80" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="775" cy="175" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="105" x2="1100" y2="185" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="135" x2="1050" y2="205" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1039.6410161513775,185 1039.6410161513775,225 1005,245 970.3589838486224,225 970.3589838486224,185 1005,165" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">💻 程式設計 — 第 17 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 17 課：Flutter 的簡潔架構</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Flutter 和 Dart：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：架構與模式</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-structure"><strong>1. 簡潔的架構</strong></h2>

<pre><code class="language-text">lib/
├── core/
│   ├── error/           # Failures, Exceptions
│   ├── usecases/        # Base UseCase abstract
│   ├── network/         # Network info
│   └── di/              # Dependency injection
├── features/
│   └── product/
│       ├── domain/
│       │   ├── entities/       # Product entity
│       │   ├── repositories/   # Abstract repository
│       │   └── usecases/       # GetProducts, CreateProduct
│       ├── data/
│       │   ├── models/         # ProductModel extends Product
│       │   ├── datasources/    # Remote & Local datasource
│       │   └── repositories/   # Repository implementation
│       └── presentation/
│           ├── bloc/           # ProductBloc
│           ├── pages/          # ProductListPage
│           └── widgets/        # ProductCard
</code></pre>

<h2 id="2-domain"><strong>2. 領域層</strong></h2>

<pre><code class="language-dart">// Entity
class Product {
  final String id;
  final String name;
  final double price;
  const Product({required this.id, required this.name, required this.price});
}

// Repository interface
abstract class ProductRepository {
  Future&lt;Either&lt;Failure, List&lt;Product&gt;&gt;&gt; getProducts();
  Future&lt;Either&lt;Failure, Product&gt;&gt; getProductById(String id);
  Future&lt;Either&lt;Failure, void&gt;&gt; createProduct(Product product);
}

// Use Case
abstract class UseCase&lt;Type, Params&gt; {
  Future&lt;Either&lt;Failure, Type&gt;&gt; call(Params params);
}

class GetProducts implements UseCase&lt;List&lt;Product&gt;, NoParams&gt; {
  final ProductRepository repository;
  GetProducts(this.repository);

  @override
  Future&lt;Either&lt;Failure, List&lt;Product&gt;&gt;&gt; call(NoParams params) {
    return repository.getProducts();
  }
}

// Failure
abstract class Failure {
  final String message;
  const Failure(this.message);
}
class ServerFailure extends Failure { const ServerFailure(super.message); }
class CacheFailure extends Failure { const CacheFailure(super.message); }
</code></pre>

<h2 id="3-data"><strong>3.資料層</strong></h2>

<pre><code class="language-dart">// Model
class ProductModel extends Product {
  const ProductModel({required super.id, required super.name, required super.price});

  factory ProductModel.fromJson(Map&lt;String, dynamic&gt; json) => ProductModel(
    id: json['id'], name: json['name'], price: (json['price'] as num).toDouble(),
  );
  Map&lt;String, dynamic&gt; toJson() => {'id': id, 'name': name, 'price': price};
}

// Repository implementation
class ProductRepositoryImpl implements ProductRepository {
  final ProductRemoteDataSource remoteDataSource;
  final ProductLocalDataSource localDataSource;
  final NetworkInfo networkInfo;

  ProductRepositoryImpl({
    required this.remoteDataSource,
    required this.localDataSource,
    required this.networkInfo,
  });

  @override
  Future&lt;Either&lt;Failure, List&lt;Product&gt;&gt;&gt; getProducts() async {
    if (await networkInfo.isConnected) {
      try {
        final products = await remoteDataSource.getProducts();
        await localDataSource.cacheProducts(products);
        return Right(products);
      } on ServerException catch (e) {
        return Left(ServerFailure(e.message));
      }
    } else {
      try {
        final products = await localDataSource.getCachedProducts();
        return Right(products);
      } on CacheException {
        return Left(const CacheFailure('No cached data'));
      }
    }
  }
}
</code></pre>

<h2 id="4-di"><strong>4. 使用 get_it 進行依賴注入</strong></h2>

<pre><code class="language-dart">final sl = GetIt.instance;

Future&lt;void&gt; initDependencies() async {
  // Bloc
  sl.registerFactory(() => ProductBloc(getProducts: sl()));

  // Use Cases
  sl.registerLazySingleton(() => GetProducts(sl()));

  // Repository
  sl.registerLazySingleton&lt;ProductRepository&gt;(() => ProductRepositoryImpl(
    remoteDataSource: sl(),
    localDataSource: sl(),
    networkInfo: sl(),
  ));

  // Data Sources
  sl.registerLazySingleton&lt;ProductRemoteDataSource&gt;(
    () => ProductRemoteDataSourceImpl(dio: sl()),
  );

  // External
  sl.registerLazySingleton(() => Dio());
}
</code></pre>

<p>下一篇： <strong>程式碼產生和凍結</strong>。</p>
