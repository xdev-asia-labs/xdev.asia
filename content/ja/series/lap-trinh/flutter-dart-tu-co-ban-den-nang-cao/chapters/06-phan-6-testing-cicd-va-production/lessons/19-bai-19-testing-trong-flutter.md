---
id: 019d8b40-e601-7001-b006-flutter000601
title: 'レッスン 19: Flutter でのテスト'
slug: bai-19-testing-trong-flutter
description: >-
  テストパッケージを使用した単体テスト。ウィジェットのテスト、ファインダー、マッチャー。統合テスト。モクテル/モクトで嘲笑する。黄金のテスト。テストカバレッジ、CI統合。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 19
section_title: 'パート 6: テスト、CI/CD、本番環境'
course:
  id: 019d8b40-e100-7001-b006-flutter000001
  title: 'フラッター＆ダーツ: 基本から上級まで'
  slug: flutter-dart-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8574" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8574)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1026" cy="228" r="14" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="952" cy="34" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="878" cy="100" r="20" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="804" cy="166" r="8" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="730" cy="232" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="248" x2="1100" y2="328" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="278" x2="1050" y2="348" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="985.2390923627308,126.5 985.2390923627308,169.5 948,191 910.7609076372692,169.5 910.7609076372692,126.50000000000001 948,105" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">💻 プログラミング — レッスン 19</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 19: Flutter でのテスト</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">フラッター＆ダーツ: 基本から上級まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 6: テスト、CI/CD、本番環境</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-unit-test"><strong>1.単体テスト</strong></h2>

<pre><code class="language-dart">// test/product_repository_test.dart
import 'package:mocktail/mocktail.dart';
import 'package:test/test.dart';

class MockApiClient extends Mock implements ApiClient {}

void main() {
  late ProductRepository repository;
  late MockApiClient mockApi;

  setUp(() {
    mockApi = MockApiClient();
    repository = ProductRepository(mockApi);
  });

  group('getProducts', () {
    test('should return list of products on success', () async {
      final products = [Product(id: '1', name: 'Laptop', price: 999)];
      when(() => mockApi.getProducts()).thenAnswer((_) async => products);

      final result = await repository.getProducts();

      expect(result, isA&lt;Right&gt;());
      result.fold(
        (failure) => fail('Should not be failure'),
        (data) => expect(data, equals(products)),
      );
      verify(() => mockApi.getProducts()).called(1);
    });

    test('should return ServerFailure on exception', () async {
      when(() => mockApi.getProducts()).thenThrow(ServerException('Server error'));

      final result = await repository.getProducts();

      expect(result, isA&lt;Left&gt;());
      result.fold(
        (failure) => expect(failure, isA&lt;ServerFailure&gt;()),
        (_) => fail('Should be failure'),
      );
    });
  });
}
</code></pre>

<h2 id="2-widget-test"><strong>2. ウィジェットのテスト</strong></h2>

<pre><code class="language-dart">// test/widgets/product_card_test.dart
import 'package:flutter_test/flutter_test.dart';

void main() {
  testWidgets('ProductCard displays product info', (tester) async {
    final product = Product(id: '1', name: 'Laptop', price: 999);

    await tester.pumpWidget(
      MaterialApp(
        home: Scaffold(body: ProductCard(product: product)),
      ),
    );

    expect(find.text('Laptop'), findsOneWidget);
    expect(find.text('\$999.00'), findsOneWidget);
  });

  testWidgets('ProductCard tap navigates to detail', (tester) async {
    final product = Product(id: '1', name: 'Laptop', price: 999);
    var tapped = false;

    await tester.pumpWidget(
      MaterialApp(
        home: Scaffold(
          body: ProductCard(
            product: product,
            onTap: () => tapped = true,
          ),
        ),
      ),
    );

    await tester.tap(find.byType(ProductCard));
    await tester.pumpAndSettle();

    expect(tapped, isTrue);
  });
}
</code></pre>

<h2 id="3-bloc-test"><strong>3. テストブロック/キュービット</strong></h2>

<pre><code class="language-dart">import 'package:bloc_test/bloc_test.dart';

class MockGetProducts extends Mock implements GetProducts {}

void main() {
  late ProductBloc bloc;
  late MockGetProducts mockGetProducts;

  setUp(() {
    mockGetProducts = MockGetProducts();
    bloc = ProductBloc(getProducts: mockGetProducts);
  });

  blocTest&lt;ProductBloc, ProductState&gt;(
    'emits [Loading, Loaded] when FetchProducts is added',
    build: () {
      when(() => mockGetProducts(any()))
          .thenAnswer((_) async => Right([Product(id: '1', name: 'Laptop', price: 999)]));
      return bloc;
    },
    act: (bloc) => bloc.add(FetchProducts()),
    expect: () => [
      const ProductLoading(),
      isA&lt;ProductLoaded&gt;(),
    ],
  );
}
</code></pre>

<h2 id="4-integration"><strong>4. 結合テスト</strong></h2>

<pre><code class="language-dart">// integration_test/app_test.dart
import 'package:integration_test/integration_test.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  IntegrationTestWidgetsFlutterBinding.ensureInitialized();

  testWidgets('Full login flow', (tester) async {
    await tester.pumpWidget(const MyApp());
    await tester.pumpAndSettle();

    // Nhập email
    await tester.enterText(find.byKey(const Key('email_field')), 'user@test.com');
    // Nhập password
    await tester.enterText(find.byKey(const Key('password_field')), 'password123');
    // Tap login
    await tester.tap(find.byKey(const Key('login_button')));
    await tester.pumpAndSettle();

    // Verify navigation to home
    expect(find.text('Home'), findsOneWidget);
  });
}
</code></pre>

<pre><code class="language-bash"># Run tests
flutter test
flutter test --coverage
flutter test integration_test/
</code></pre>

<p>次の記事: <strong>パフォーマンスとデバッグ</strong>。</p>
