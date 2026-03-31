---
id: 019d8b40-e601-7001-b006-flutter000601
title: 'Bài 19: Testing trong Flutter'
slug: bai-19-testing-trong-flutter
description: >-
  Unit testing với test package. Widget testing, finder, matcher.
  Integration testing. Mocking với mocktail/mockito. Golden tests.
  Test coverage, CI integration.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 19
section_title: "Phần 6: Testing, CI/CD & Production"
course:
  id: 019d8b40-e100-7001-b006-flutter000001
  title: 'Flutter & Dart: Từ Cơ bản đến Nâng cao'
  slug: flutter-dart-tu-co-ban-den-nang-cao
---

<h2 id="1-unit-test"><strong>1. Unit Testing</strong></h2>

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

<h2 id="2-widget-test"><strong>2. Widget Testing</strong></h2>

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

<h2 id="3-bloc-test"><strong>3. Testing Bloc/Cubit</strong></h2>

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

<h2 id="4-integration"><strong>4. Integration Testing</strong></h2>

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

<p>Bài tiếp theo: <strong>Performance & Debugging</strong>.</p>
