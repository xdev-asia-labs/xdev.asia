---
id: 019c9617-fc17-7017-a017-fc1700000017
title: 'レッスン 17: JUnit 5 と Mockito を使用した単体テスト'
slug: bai-17-unit-testing-junit5-mockito
description: >-
  Spring Boot 4 の JUnit Jupiter 6。Mockito — モック、スタブ、検証。サービス層、リポジトリ層をテストします。
  AssertJ アサーション。テストカバレッジのベストプラクティス。
duration_minutes: 120
is_free: false
video_url: null
sort_order: 16
section_title: 'パート 5: テストとコードの品質'
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: 'Spring Boot 4: 基本から上級まで'
  slug: spring-boot-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5704" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5704)"/>

  <!-- Decorations -->
  <g>
    <circle cx="930" cy="60" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="760" cy="70" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1090" cy="80" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="920" cy="90" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="100" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="240" x2="1100" y2="320" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="270" x2="1050" y2="340" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="970.3108891324554,122.5 970.3108891324554,157.5 940,175 909.6891108675446,157.5 909.6891108675446,122.50000000000001 940,105" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">💻 プログラミング — レッスン 16</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 17: JUnit 5 と Mockito を使用した単体テスト</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Spring Boot 4: 基本から上級まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 5: テストとコードの品質</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

テストはすべてのプロの開発者にとって必須のスキルです。 Spring Boot 4 は JUnit Jupiter 6 を使用し、Mockito と AssertJ を統合して単体テストを簡単かつ確実に作成します。

---

## 1. ピラミッドのテスト

```
        ╱  E2E Tests  ╲         ← Ít nhất, chậm nhất
       ╱ Integration    ╲
      ╱   Tests          ╲
     ╱ Unit Tests          ╲    ← Nhiều nhất, nhanh nhất
    ╱──────────────────────╲
```

- **単体テスト**: テスト 1 クラス/メソッドの分離、疑似依存関係
- **統合テスト**: 複数のコンポーネントを一緒にテストします。実際の DB
- **E2E テスト**: HTTP リクエストからレスポンスまでの完全なフローをテストします。

---

## 2. JUnit Jupiter 6 の基本

### 2.1 主な注釈

```java
class ProductServiceTest {

    @BeforeAll
    static void setUpAll() { /* Chạy 1 lần trước tất cả tests */ }

    @BeforeEach
    void setUp() { /* Chạy trước MỖI test */ }

    @Test
    @DisplayName("Should create product successfully")
    void shouldCreateProduct() { }

    @Test
    @Disabled("Not implemented yet")
    void futureFeature() { }

    @AfterEach
    void tearDown() { /* Chạy sau MỖI test */ }

    @AfterAll
    static void tearDownAll() { /* Chạy 1 lần sau tất cả tests */ }
}
```

### 2.2 パラメータ化されたテスト

```java
@ParameterizedTest
@ValueSource(strings = {"", " ", "   "})
@DisplayName("Should reject blank product name")
void shouldRejectBlankName(String name) {
    var request = new CreateProductRequest(name, BigDecimal.TEN, "Category");
    assertThrows(ConstraintViolationException.class,
        () -> productService.create(request));
}

@ParameterizedTest
@CsvSource({
    "100, 10, 90",
    "200, 50, 150",
    "0, 0, 0"
})
void shouldCalculateDiscount(int price, int discount, int expected) {
    assertEquals(expected, calculator.applyDiscount(price, discount));
}
```

---

## 3. Mockito — 依存関係をモックする

### 3.1 @ExtendWith を使用したセットアップ

```java
@ExtendWith(MockitoExtension.class)
class ProductServiceTest {

    @Mock
    private ProductRepository productRepository;

    @Mock
    private CategoryRepository categoryRepository;

    @InjectMocks
    private ProductService productService;
}
```

### 3.2 スタブ化 — モックの動作を定義する

```java
@Test
@DisplayName("Should return product when found by ID")
void shouldReturnProductWhenFound() {
    // Given
    Long productId = 1L;
    Product product = Product.builder()
        .id(productId)
        .name("Spring Boot Book")
        .price(new BigDecimal("450000"))
        .build();

    when(productRepository.findById(productId))
        .thenReturn(Optional.of(product));

    // When
    ProductResponse result = productService.getProduct(productId);

    // Then
    assertThat(result.id()).isEqualTo(productId);
    assertThat(result.name()).isEqualTo("Spring Boot Book");
    assertThat(result.price()).isEqualByComparingTo("450000");
}
```

### 3.3 検証 — モックが正しく呼び出されたことを確認する

```java
@Test
@DisplayName("Should delete product and evict cache")
void shouldDeleteProduct() {
    // Given
    Long productId = 1L;
    when(productRepository.existsById(productId)).thenReturn(true);

    // When
    productService.deleteProduct(productId);

    // Then
    verify(productRepository).deleteById(productId);
    verify(productRepository, times(1)).existsById(productId);
    verify(productRepository, never()).findById(any());
}
```

### 3.4 引数のキャプチャ

```java
@Test
void shouldSaveProductWithCorrectData() {
    // Given
    var request = new CreateProductRequest("Book", new BigDecimal("100"), "Education");

    ArgumentCaptor<Product> productCaptor = ArgumentCaptor.forClass(Product.class);
    when(productRepository.save(any(Product.class)))
        .thenAnswer(inv -> {
            Product p = inv.getArgument(0);
            p.setId(1L);
            return p;
        });

    // When
    productService.create(request);

    // Then
    verify(productRepository).save(productCaptor.capture());
    Product savedProduct = productCaptor.getValue();
    assertThat(savedProduct.getName()).isEqualTo("Book");
    assertThat(savedProduct.getPrice()).isEqualByComparingTo("100");
}
```

---

## 4. AssertJ — 流暢なアサーション

```java
// Collection assertions
assertThat(products)
    .hasSize(3)
    .extracting(ProductResponse::name)
    .containsExactly("A", "B", "C");

// Exception assertions
assertThatThrownBy(() -> productService.getProduct(999L))
    .isInstanceOf(ResourceNotFoundException.class)
    .hasMessageContaining("Product")
    .hasMessageContaining("999");

// Soft assertions — báo tất cả lỗi cùng lúc
SoftAssertions.assertSoftly(softly -> {
    softly.assertThat(result.id()).isEqualTo(1L);
    softly.assertThat(result.name()).isEqualTo("Book");
    softly.assertThat(result.price()).isPositive();
});
```

---

## 5. サービス層パターンのテスト

```java
@ExtendWith(MockitoExtension.class)
class OrderServiceTest {

    @Mock private OrderRepository orderRepository;
    @Mock private ProductRepository productRepository;
    @Mock private ApplicationEventPublisher eventPublisher;
    @InjectMocks private OrderService orderService;

    @Test
    void shouldCreateOrderAndPublishEvent() {
        // Given
        var request = new CreateOrderRequest(1L, List.of(
            new OrderItemRequest(1L, 2),
            new OrderItemRequest(2L, 1)
        ));

        when(productRepository.findById(1L))
            .thenReturn(Optional.of(product(1L, "A", 100)));
        when(productRepository.findById(2L))
            .thenReturn(Optional.of(product(2L, "B", 200)));
        when(orderRepository.save(any(Order.class)))
            .thenAnswer(inv -> {
                Order o = inv.getArgument(0);
                o.setId(1L);
                return o;
            });

        // When
        OrderResponse result = orderService.createOrder(request);

        // Then
        assertThat(result).isNotNull();
        verify(orderRepository).save(any(Order.class));
        verify(eventPublisher).publishEvent(any(OrderCreatedEvent.class));
    }

    private Product product(Long id, String name, int price) {
        return Product.builder()
            .id(id).name(name).price(new BigDecimal(price))
            .build();
    }
}
```

---

## 概要

- 単体テストは、Given-When-Then パターンに従い、@Mock と @InjectMocks を使用して依存関係を分離します。
- JUnit Jupiter 6: @ParameterizedTest、@DisplayName、アサーション API
- Mockito: when().thenReturn() でスタブ化、verify() で相互作用をチェック、ArgumentCaptor でパラメータをキャプチャ
- AssertJ: コレクション、例外、ソフト アサーションの流暢なアサーション

## 演習

1. ProductService の単体テストを作成します。CRUD 操作をテストし、リポジトリを模擬し、十分なシナリオ (見つかった、見つからなかった、検証エラー) を検証します。
2. 価格計算ツールのパラメーター化されたテストを作成します: 多くの入力/出力の組み合わせ
3. OrderService.createOrder() をテストします。注文が保存され、イベントが発行され、在庫が減少したことを確認します。製品が見つからない場合のロールバックのテスト
