---
id: 019d8b40-e102-7001-b006-flutter000102
title: 'Bài 2: Dart Language Deep Dive'
slug: bai-2-dart-language-deep-dive
description: >-
  Variables, types, null safety, late keyword. Functions, closures,
  extensions. Classes, mixins, abstract classes. Collections
  (List, Set, Map), pattern matching, records. Async/await, Futures, Streams.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: "Phần 1: Dart & Flutter Fundamentals"
course:
  id: 019d8b40-e100-7001-b006-flutter000001
  title: 'Flutter & Dart: Từ Cơ bản đến Nâng cao'
  slug: flutter-dart-tu-co-ban-den-nang-cao
---

<h2 id="1-types"><strong>1. Variables & Null Safety</strong></h2>

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

<h2 id="2-classes"><strong>2. Classes & Mixins</strong></h2>

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

<h2 id="3-collections"><strong>3. Collections & Pattern Matching</strong></h2>

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

<h2 id="4-async"><strong>4. Async/Await & Streams</strong></h2>

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

<p>Bài tiếp theo: <strong>Widget Tree & Basic Widgets</strong>.</p>
