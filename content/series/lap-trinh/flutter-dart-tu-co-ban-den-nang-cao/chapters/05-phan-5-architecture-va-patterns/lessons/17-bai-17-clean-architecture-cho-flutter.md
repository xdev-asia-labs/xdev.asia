---
id: 019d8b40-e501-7001-b006-flutter000501
title: 'Bài 17: Clean Architecture cho Flutter'
slug: bai-17-clean-architecture-cho-flutter
description: >-
  Clean Architecture layers: Domain, Data, Presentation. Use Cases,
  Repositories, Entities. Dependency injection với get_it/injectable.
  Feature-first vs Layer-first folder structure.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 17
section_title: "Phần 5: Architecture & Patterns"
course:
  id: 019d8b40-e100-7001-b006-flutter000001
  title: 'Flutter & Dart: Từ Cơ bản đến Nâng cao'
  slug: flutter-dart-tu-co-ban-den-nang-cao
---

<h2 id="1-structure"><strong>1. Cấu trúc Clean Architecture</strong></h2>

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

<h2 id="2-domain"><strong>2. Domain Layer</strong></h2>

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

<h2 id="3-data"><strong>3. Data Layer</strong></h2>

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

<h2 id="4-di"><strong>4. Dependency Injection với get_it</strong></h2>

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

<p>Bài tiếp theo: <strong>Code Generation & Freezed</strong>.</p>
