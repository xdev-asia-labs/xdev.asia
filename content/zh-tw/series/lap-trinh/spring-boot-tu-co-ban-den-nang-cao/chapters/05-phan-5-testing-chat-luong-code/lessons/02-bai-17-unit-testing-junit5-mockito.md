---
id: 019c9617-fc17-7017-a017-fc1700000017
title: 第 17 課：使用 JUnit 5 和 Mockito 進行單元測試
slug: bai-17-unit-testing-junit5-mockito
description: >-
  Spring Boot 4 中的 JUnit Jupiter 6。 Mockito — 模擬、存根、驗證。測試服務層、儲存庫層。 AssertJ
  斷言。測試覆蓋率最佳實踐。
duration_minutes: 120
is_free: false
video_url: null
sort_order: 16
section_title: 第 5 部分：測試和程式碼質量
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: Spring Boot 4：從基礎到高級
  slug: spring-boot-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">💻 程式設計 — 第 16 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 17 課：使用 JUnit 5 和 Mockito 進行單元測試</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Spring Boot 4：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：測試和程式碼質量</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

測驗是每個專業開發人員的必備技能。 Spring Boot 4 使用 JUnit Jupiter 6 並整合 Mockito 和 AssertJ 來輕鬆可靠地編寫單元測試。

---

## 1. 測試金字塔

```
        ╱  E2E Tests  ╲         ← Ít nhất, chậm nhất
       ╱ Integration    ╲
      ╱   Tests          ╲
     ╱ Unit Tests          ╲    ← Nhiều nhất, nhanh nhất
    ╱──────────────────────╲
```

- **單元測試**：測試 1 個類別/方法隔離，模擬依賴關係
- **整合測試**：一起測試多個元件，真實的資料庫
- **E2E 測試**：測試從 HTTP 請求 → 回應的完整流程

---

## 2.JUnit Jupiter 6 基礎知識

### 2.1 主要註釋

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

### 2.2 參數化測試

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

## 3. Mockito — 模擬依賴項

### 3.1 使用@ExtendWith 設定

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

### 3.2 存根 — 定義模擬行為

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

### 3.3 驗證－檢查模擬是否被正確調用

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

### 3.4 參數捕獲

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

## 4. AssertJ — 流暢的斷言

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

## 5. 測試服務層模式

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

## 總結

- 單元測試遵循Given-When-Then模式，使用@Mock和@InjectMocks來隔離依賴關係
- JUnit Jupiter 6：@ParameterizedTest、@DisplayName、斷言 API
- Mockito：when().thenReturn()用於存根，verify()檢查交互，ArgumentCaptor捕獲參數
- AssertJ：集合、異常、軟斷言的流暢斷言

## 練習

1.為ProductService編寫單元測試：測試CRUD操作、模擬儲存庫、驗證足夠的場景（找到、找不到、驗證錯誤）
2. 為價格計算器編寫參數化測試：多種輸入/輸出組合
3. 測試 OrderService.createOrder()：驗證訂單已儲存、事件已發布、庫存已減少。未找到產品時測試回滾
