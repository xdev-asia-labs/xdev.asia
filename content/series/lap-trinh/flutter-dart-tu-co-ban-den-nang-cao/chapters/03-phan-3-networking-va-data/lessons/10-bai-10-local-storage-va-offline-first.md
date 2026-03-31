---
id: 019d8b40-e302-7001-b006-flutter000302
title: 'Bài 10: Local Storage & Offline First'
slug: bai-10-local-storage-va-offline-first
description: >-
  SharedPreferences, Hive, Isar database. Drift (moor) cho SQL.
  Offline-first architecture, sync strategies. Cache management.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 10
section_title: "Phần 3: Networking & Data"
course:
  id: 019d8b40-e100-7001-b006-flutter000001
  title: 'Flutter & Dart: Từ Cơ bản đến Nâng cao'
  slug: flutter-dart-tu-co-ban-den-nang-cao
---

<h2 id="1-shared-preferences"><strong>1. SharedPreferences</strong></h2>

<pre><code class="language-dart">class SettingsService {
  Future&lt;void&gt; setThemeMode(ThemeMode mode) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setInt('theme_mode', mode.index);
  }

  Future&lt;ThemeMode&gt; getThemeMode() async {
    final prefs = await SharedPreferences.getInstance();
    final index = prefs.getInt('theme_mode') ?? 0;
    return ThemeMode.values[index];
  }
}
</code></pre>

<h2 id="2-hive"><strong>2. Hive — NoSQL Local Database</strong></h2>

<pre><code class="language-dart">@HiveType(typeId: 0)
class CachedProduct extends HiveObject {
  @HiveField(0)
  final String id;
  @HiveField(1)
  final String name;
  @HiveField(2)
  final double price;
  @HiveField(3)
  final DateTime cachedAt;

  CachedProduct({required this.id, required this.name, required this.price, required this.cachedAt});
}

// Sử dụng
Future&lt;void&gt; main() async {
  await Hive.initFlutter();
  Hive.registerAdapter(CachedProductAdapter());
  await Hive.openBox&lt;CachedProduct&gt;('products');
  runApp(const MyApp());
}

class ProductCache {
  final Box&lt;CachedProduct&gt; _box = Hive.box('products');

  List&lt;CachedProduct&gt; getAll() => _box.values.toList();

  Future&lt;void&gt; saveAll(List&lt;CachedProduct&gt; products) async {
    await _box.clear();
    for (final p in products) {
      await _box.put(p.id, p);
    }
  }

  bool isStale(Duration maxAge) {
    if (_box.isEmpty) return true;
    final oldest = _box.values.first.cachedAt;
    return DateTime.now().difference(oldest) > maxAge;
  }
}
</code></pre>

<h2 id="3-drift"><strong>3. Drift — Type-safe SQL</strong></h2>

<pre><code class="language-dart">@DriftDatabase(tables: [Products, Orders])
class AppDatabase extends _$AppDatabase {
  AppDatabase() : super(_openConnection());

  @override
  int get schemaVersion => 1;

  Future&lt;List&lt;Product&gt;&gt; getAllProducts() => select(products).get();

  Stream&lt;List&lt;Product&gt;&gt; watchProducts() => select(products).watch();

  Future&lt;void&gt; insertProduct(ProductsCompanion product) =>
      into(products).insert(product);
}

class Products extends Table {
  TextColumn get id => text()();
  TextColumn get name => text().withLength(min: 1, max: 255)();
  RealColumn get price => real()();
  DateTimeColumn get createdAt => dateTime().withDefault(currentDateAndTime)();

  @override
  Set&lt;Column&gt; get primaryKey => {id};
}
</code></pre>

<h2 id="4-offline-first"><strong>4. Offline-First Architecture</strong></h2>

<pre><code class="language-dart">class OfflineFirstRepository {
  final ApiClient _api;
  final ProductCache _cache;
  final ConnectivityService _connectivity;

  OfflineFirstRepository(this._api, this._cache, this._connectivity);

  Future&lt;List&lt;Product&gt;&gt; getProducts() async {
    if (await _connectivity.isOnline) {
      try {
        final products = await _api.getProducts();
        await _cache.saveAll(products);
        return products;
      } catch (_) {
        return _cache.getAll(); // Fallback to cache
      }
    }
    return _cache.getAll(); // Offline — trả cache
  }
}
</code></pre>

<p>Bài tiếp theo: <strong>Firebase Integration</strong>.</p>
