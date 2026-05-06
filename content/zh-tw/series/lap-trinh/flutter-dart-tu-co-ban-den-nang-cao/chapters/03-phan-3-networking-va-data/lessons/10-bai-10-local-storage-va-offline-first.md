---
id: 019d8b40-e302-7001-b006-flutter000302
title: 第 10 課：本地儲存和離線優先
slug: bai-10-local-storage-va-offline-first
description: SharedPreferences、Hive、Isar 資料庫。 SQL 的漂移（停泊）。離線優先架構，同步策略。快取管理。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 10
section_title: 第 3 部分：網路與數據
course:
  id: 019d8b40-e100-7001-b006-flutter000001
  title: Flutter 和 Dart：從基礎到高級
  slug: flutter-dart-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8213" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8213)"/>

  <!-- Decorations -->
  <g>
    <circle cx="753" cy="129" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="906" cy="162" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="1059" cy="195" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="712" cy="228" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="865" cy="261" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="119" x2="1100" y2="199" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="149" x2="1050" y2="219" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1048.444863728671,202 1048.444863728671,236 1019,253 989.555136271329,236 989.555136271329,202 1019,185" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">💻 程式設計 — 第 10 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 10 課：本地儲存和離線優先</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Flutter 和 Dart：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：網路與數據</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-shared-preferences"><strong>1. 共享首選項</strong></h2>

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

<h2 id="2-hive"><strong>2. Hive——NoSQL本地資料庫</strong></h2>

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

<h2 id="3-drift"><strong>3. Drift－類型安全的 SQL</strong></h2>

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

<h2 id="4-offline-first"><strong>4. 離線優先架構</strong></h2>

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

<p>下一篇： <strong>Firebase 集成</strong>。</p>
