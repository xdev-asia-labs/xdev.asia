---
id: 019c9617-fc17-7017-a017-fc1700000017
title: 'Bài 17: Unit Testing với JUnit 5 & Mockito'
slug: bai-17-unit-testing-junit5-mockito
description: >-
  JUnit Jupiter 6 trong Spring Boot 4. Mockito — mock, stub, verify. Test service
  layer, repository layer. AssertJ assertions. Test coverage best practices.
duration_minutes: 120
is_free: false
video_url: null
sort_order: 16
section_title: "Phần 5: Testing & Chất lượng Code"
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: "Spring Boot 4: Từ Cơ bản đến Nâng cao"
  slug: spring-boot-tu-co-ban-den-nang-cao
---

## Giới thiệu

Testing là kỹ năng bắt buộc cho mọi developer chuyên nghiệp. Spring Boot 4 sử dụng JUnit Jupiter 6 và tích hợp sẵn Mockito, AssertJ để viết unit test dễ dàng, đáng tin cậy.

---

## 1. Testing Pyramid

```
        ╱  E2E Tests  ╲         ← Ít nhất, chậm nhất
       ╱ Integration    ╲
      ╱   Tests          ╲
     ╱ Unit Tests          ╲    ← Nhiều nhất, nhanh nhất
    ╱──────────────────────╲
```

- **Unit Tests**: Test 1 class/method isolated, mock dependencies
- **Integration Tests**: Test nhiều component cùng nhau, real DB
- **E2E Tests**: Test full flow từ HTTP request → response

---

## 2. JUnit Jupiter 6 Basics

### 2.1 Annotations chính

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

### 2.2 Parameterized Tests

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

## 3. Mockito — Mock Dependencies

### 3.1 Setup với @ExtendWith

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

### 3.2 Stubbing — Định nghĩa hành vi cho mock

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

### 3.3 Verify — Kiểm tra mock được gọi đúng

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

### 3.4 Argument Capture

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

## 4. AssertJ — Fluent Assertions

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

## 5. Test Service Layer Pattern

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

## Tóm tắt

- Unit test theo pattern Given-When-Then, dùng @Mock và @InjectMocks để isolate dependencies
- JUnit Jupiter 6: @ParameterizedTest, @DisplayName, assertions API
- Mockito: when().thenReturn() cho stubbing, verify() kiểm tra interactions, ArgumentCaptor bắt tham số
- AssertJ: fluent assertions cho collections, exceptions, soft assertions

## Bài tập

1. Viết unit tests cho ProductService: test CRUD operations, mock repository, verify đủ scenarios (found, not found, validation error)
2. Viết parameterized test cho price calculator: nhiều input/output combinations
3. Test OrderService.createOrder(): verify order saved, event published, stock decreased. Test rollback khi product not found
