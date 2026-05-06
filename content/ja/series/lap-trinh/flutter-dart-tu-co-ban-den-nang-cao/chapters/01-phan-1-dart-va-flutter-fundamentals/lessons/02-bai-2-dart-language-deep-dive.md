---
id: 019d8b40-e102-7001-b006-flutter000102
title: 'レッスン 2: Dart 言語の詳細'
slug: bai-2-dart-language-deep-dive
description: >-
  変数、型、null 安全性、late キーワード。関数、クロージャ、拡張機能。クラス、ミックスイン、抽象クラス。コレクション
  (リスト、セット、マップ)、パターン マッチング、レコード。非同期/待機、先物、ストリーム。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: 'パート 1: ダーツとフラッターの基礎'
course:
  id: 019d8b40-e100-7001-b006-flutter000001
  title: 'フラッター＆ダーツ: 基本から上級まで'
  slug: flutter-dart-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2329" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2329)"/>

  <!-- Decorations -->
  <g>
    <circle cx="988" cy="174" r="16" fill="#fbbf24" opacity="0.09"/>
    <circle cx="876" cy="222" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="764" cy="270" r="24" fill="#fbbf24" opacity="0.07"/>
    <circle cx="652" cy="58" r="28" fill="#fbbf24" opacity="0.11"/>
    <circle cx="1040" cy="106" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="74" x2="1100" y2="154" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="104" x2="1050" y2="174" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1049.1147367097487,209.5 1049.1147367097487,238.5 1024,253 998.8852632902513,238.5 998.8852632902513,209.5 1024,195" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">💻 プログラミング — レッスン 2</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 2: Dart 言語の詳細</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">フラッター＆ダーツ: 基本から上級まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: ダーツとフラッターの基礎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-types"><strong>1. 変数とヌル安全性</strong></h2>

<pre><code class="language-dart">// Type inference
var name = 'Flutter';           // String
final age = 25;                 // Immutable (runtime)
const pi = 3.14;                // Immutable (compile-time)

// Null safety
String? nullableName;           // Có thể null
String nonNullable = 'Hello';   // Không thể null
late String lazyInit;           // Khởi tạo sau

// Null-aware operators
String display = nullableName ?? 'Default';
int? length = nullableName?.length;
nullableName ??= 'Fallback';
</code></pre>

<h2 id="2-classes"><strong>2. クラスとミックスイン</strong></h2>

<pre><code class="language-dart">class Product {
  final String name;
  final double price;
  final String? description;

  const Product({required this.name, required this.price, this.description});

  Product copyWith({String? name, double? price}) {
    return Product(name: name ?? this.name, price: price ?? this.price);
  }
}

// Mixin
mixin Loggable {
  void log(String message) => print('[${runtimeType}] $message');
}

// Abstract class
abstract class Repository<T> {
  Future<List<T>> getAll();
  Future<T?> getById(String id);
}

class ProductRepository extends Repository<Product> with Loggable {
  @override
  Future<List<Product>> getAll() async {
    log('Fetching all products');
    return [];
  }

  @override
  Future<Product?> getById(String id) async => null;
}
</code></pre>

<h2 id="3-collections"><strong>3. コレクションとパターンマッチング</strong></h2>

<pre><code class="language-dart">// Collections
final list = [1, 2, 3];
final set = {1, 2, 3};
final map = {'key': 'value', 'name': 'Dart'};

// Spread & collection if/for
final combined = [...list, if (true) 4, for (var i in [5, 6]) i];

// Records (Dart 3)
(String, int) userInfo = ('John', 25);
({String name, int age}) namedRecord = (name: 'John', age: 25);

// Pattern matching
switch (shape) {
  case Circle(radius: var r) when r > 0:
    print('Circle with radius $r');
  case Rectangle(width: var w, height: var h):
    print('Rectangle $w x $h');
}
</code></pre>

<h2 id="4-async"><strong>4. 非同期/待機とストリーム</strong></h2>

<pre><code class="language-dart">// Future
Future&lt;String&gt; fetchData() async {
  final response = await http.get(Uri.parse('https://api.example.com/data'));
  return response.body;
}

// Stream
Stream&lt;int&gt; countStream(int max) async* {
  for (var i = 0; i < max; i++) {
    await Future.delayed(Duration(seconds: 1));
    yield i;
  }
}

// Listen
countStream(5).listen((value) => print(value));
</code></pre>

<p>次の記事: <strong>ウィジェットツリーと基本ウィジェット</strong>。</p>
