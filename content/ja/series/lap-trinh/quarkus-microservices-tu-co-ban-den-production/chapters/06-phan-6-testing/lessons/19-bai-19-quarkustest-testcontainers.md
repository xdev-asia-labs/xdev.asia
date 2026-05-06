---
id: 019e2a10-a119-7a01-b001-f1a2b3c4d519
title: 'レッスン 19: @QuarkusTest とテストコンテナ'
slug: bai-19-quarkustest-testcontainers
description: >-
  単体テスト、@QuarkusTest との統合テスト、Dev Services は PostgreSQL/Kafka/Keycloak コンテナー、REST
  保証、@InjectMock、@QuarkusTestResource を自動的に提供します。
duration_minutes: 100
is_free: false
video_url: null
sort_order: 18
section_title: 'パート 6: テスト'
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: 'Quarkus マイクロサービス: 基本から運用まで'
  slug: quarkus-microservices-tu-co-ban-den-production
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-375" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-375)"/>

  <!-- Decorations -->
  <g>
    <circle cx="849" cy="37" r="32" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="1098" cy="126" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="847" cy="215" r="26" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="1096" cy="44" r="23" fill="#818cf8" opacity="0.13"/>
    <circle cx="845" cy="133" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="127" x2="1100" y2="207" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="157" x2="1050" y2="227" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="963.3730669589464,106 963.3730669589464,148 927,169 890.6269330410536,148 890.6269330410536,106.00000000000001 927,85" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">💻 プログラミング — レッスン 18</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 19: @QuarkusTest とテストコンテナ</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Quarkus マイクロサービス: 基本から運用まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 6: テスト</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

Quarkus テスト エコシステムには、統合テスト (フル CDI コンテナ) 用の **@QuarkusTest**、データベース/メッセージ ブローカーを自動的に提供する **Dev Services**、HTTP テスト用の **REST-assured**、モック用の **@InjectMock** が含まれます。この記事では、マイクロサービスのテスト戦略について説明します。

## マイクロサービスのテスト ピラミッド

```
          ┌─────────┐
          │  E2E    │  ← Ít nhất (slow, flaky)
         ┌┴─────────┴┐
         │ Contract  │  ← Consumer-Driven (Bài 20)
        ┌┴───────────┴┐
        │ Integration │  ← @QuarkusTest (DB, Kafka, REST)
       ┌┴─────────────┴┐
       │   Unit Tests   │  ← Nhiều nhất (fast, isolated)
       └────────────────┘
```

## 依存関係

```xml
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-junit5</artifactId>
    <scope>test</scope>
</dependency>
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-junit5-mockito</artifactId>
    <scope>test</scope>
</dependency>
<dependency>
    <groupId>io.rest-assured</groupId>
    <artifactId>rest-assured</artifactId>
    <scope>test</scope>
</dependency>
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-test-security</artifactId>
    <scope>test</scope>
</dependency>
```

## 単体テスト — プレーンな JUnit

```java
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class ProductTest {

    @Test
    void testActivateProduct() {
        Product product = new Product();
        product.name = "Test";
        product.price = Money.vnd(new BigDecimal("100000"));
        product.stock = new StockInfo(10, 0);

        product.activate();

        assertEquals("ACTIVE", product.status);
    }

    @Test
    void testActivateProductWithoutPrice() {
        Product product = new Product();
        product.name = "Test";
        product.price = null;
        product.stock = new StockInfo(10, 0);

        BusinessException ex = assertThrows(
            BusinessException.class,
            () -> product.activate());
        assertTrue(ex.getMessage().contains("giá > 0"));
    }

    @Test
    void testReduceStock() {
        Product product = new Product();
        product.stock = new StockInfo(10, 0);

        product.reduceStock(3);

        assertEquals(7, product.stock.available());
    }

    @Test
    void testReduceStockInsufficient() {
        Product product = new Product();
        product.stock = new StockInfo(2, 0);

        assertThrows(BusinessException.class,
            () -> product.reduceStock(5));
    }
}

class MoneyTest {

    @Test
    void testAdd() {
        Money a = Money.vnd(new BigDecimal("100000"));
        Money b = Money.vnd(new BigDecimal("50000"));

        Money result = a.add(b);

        assertEquals(new BigDecimal("150000"), result.amount());
    }

    @Test
    void testDifferentCurrency() {
        Money vnd = Money.vnd(new BigDecimal("100000"));
        Money usd = new Money(new BigDecimal("5"), "USD");

        assertThrows(IllegalArgumentException.class,
            () -> vnd.add(usd));
    }
}

class OrderStatusTest {

    @Test
    void testValidTransitions() {
        assertTrue(OrderStatus.CREATED
            .canTransitionTo(OrderStatus.CONFIRMED));
        assertTrue(OrderStatus.CONFIRMED
            .canTransitionTo(OrderStatus.PAID));
        assertTrue(OrderStatus.PAID
            .canTransitionTo(OrderStatus.SHIPPED));
    }

    @Test
    void testInvalidTransitions() {
        assertFalse(OrderStatus.DELIVERED
            .canTransitionTo(OrderStatus.CANCELLED));
        assertFalse(OrderStatus.CREATED
            .canTransitionTo(OrderStatus.PAID));
    }
}
```

## 統合テスト — @QuarkusTest

```java
import io.quarkus.test.junit.QuarkusTest;
import io.restassured.RestAssured;
import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.*;

@QuarkusTest
class ProductResourceTest {

    @Test
    void testListProducts() {
        given()
            .when().get("/api/v1/products")
            .then()
                .statusCode(200)
                .body("$.size()", greaterThanOrEqualTo(0));
    }

    @Test
    void testGetProductNotFound() {
        given()
            .when().get("/api/v1/products/99999")
            .then()
                .statusCode(404)
                .contentType("application/problem+json")
                .body("title", equalTo("Resource Not Found"));
    }

    @Test
    @TestSecurity(user = "seller1", roles = "seller")
    void testCreateProduct() {
        given()
            .contentType("application/json")
            .body("""
                {
                  "name": "Integration Test Product",
                  "description": "Test description",
                  "price": 250000,
                  "categoryId": 1,
                  "stockQuantity": 100
                }
                """)
            .when().post("/api/v1/products")
            .then()
                .statusCode(201)
                .header("Location", containsString("/api/v1/products/"))
                .body("name", equalTo("Integration Test Product"))
                .body("price", equalTo(250000));
    }

    @Test
    @TestSecurity(user = "customer1", roles = "customer")
    void testCreateProductForbidden() {
        given()
            .contentType("application/json")
            .body("""
                {"name": "Test", "price": 100,
                 "stockQuantity": 1, "categoryId": 1}
                """)
            .when().post("/api/v1/products")
            .then()
                .statusCode(403);
    }

    @Test
    void testValidation() {
        given()
            .contentType("application/json")
            .body("""
                {
                  "name": "",
                  "price": -100,
                  "stockQuantity": -1
                }
                """)
            .when().post("/api/v1/products")
            .then()
                .statusCode(400)
                .body("errors.size()", greaterThan(0))
                .body("errors.field",
                    hasItems("name", "price"));
    }
}
```

## @InjectMock — CDI Bean をモックする

```java
@QuarkusTest
class OrderServiceTest {

    @InjectMock
    @RestClient
    ProductServiceClient productClient;

    @Inject
    OrderService orderService;

    @Test
    @TestSecurity(user = "customer1", roles = "customer")
    @Transactional
    void testCreateOrder() {
        // Mock Product Service response
        when(productClient.getById(1L))
            .thenReturn(new ProductInfo(
                1L, "Laptop",
                new BigDecimal("25000000"), "VND"));

        when(productClient.checkStock(1L, 2))
            .thenReturn(new StockResult(true, 10));

        // Create order
        CreateOrderRequest request = new CreateOrderRequest(
            "customer1@xdev.asia",
            List.of(new OrderItemRequest(1L, 2)));

        OrderDTO order = orderService.createOrder(
            "user-123", request);

        assertNotNull(order);
        assertEquals("CREATED", order.status());
        assertEquals(new BigDecimal("50000000"),
            order.totalAmount());

        verify(productClient, times(1)).getById(1L);
    }
}
```

## Dev Services を使用したデータベースのテスト

```java
@QuarkusTest
@TestTransaction  // Auto-rollback sau mỗi test
class ProductRepositoryTest {

    @Inject
    ProductRepository productRepo;

    @Test
    void testPersistAndFind() {
        Product product = new Product();
        product.name = "Test Product";
        product.price = Money.vnd(new BigDecimal("100000"));
        product.stock = new StockInfo(50, 0);
        product.status = "ACTIVE";
        productRepo.persist(product);

        assertNotNull(product.id);

        Optional<Product> found =
            productRepo.findByIdOptional(product.id);
        assertTrue(found.isPresent());
        assertEquals("Test Product", found.get().name);
    }

    @Test
    void testFindActive() {
        // Seed test data
        createProduct("Active 1", "ACTIVE");
        createProduct("Active 2", "ACTIVE");
        createProduct("Inactive", "INACTIVE");

        PanacheQuery<Product> query =
            productRepo.findActive(null, null,
                Sort.by("name"));
        List<Product> results = query.list();

        assertTrue(results.stream()
            .allMatch(p -> "ACTIVE".equals(p.status)));
    }

    private void createProduct(String name, String status) {
        Product p = new Product();
        p.name = name;
        p.price = Money.vnd(BigDecimal.TEN);
        p.stock = new StockInfo(10, 0);
        p.status = status;
        productRepo.persist(p);
    }
}
```

## @QuarkusTestProfile — カスタム テスト プロファイル

```java
public class MockExternalServicesProfile
        implements QuarkusTestProfile {

    @Override
    public Map<String, String> getConfigOverrides() {
        return Map.of(
            "quarkus.rest-client.product-service.url",
            "http://localhost:${quarkus.http.test-port}",
            "quarkus.log.level", "DEBUG"
        );
    }

    @Override
    public Set<Class<?>> getEnabledAlternatives() {
        return Set.of(MockProductServiceClient.class);
    }
}

@QuarkusTest
@TestProfile(MockExternalServicesProfile.class)
class OrderServiceWithMockTest {
    // Tests using mock profile...
}
```

## テスト データ ビルダー パターン

```java
public class TestDataBuilder {

    public static Product.ProductBuilder aProduct() {
        return Product.ProductBuilder.builder()
            .name("Test Product " + UUID.randomUUID()
                .toString().substring(0, 8))
            .price(Money.vnd(new BigDecimal("100000")))
            .stock(new StockInfo(50, 0))
            .status("ACTIVE");
    }

    public static CreateOrderRequest anOrderRequest() {
        return new CreateOrderRequest(
            "test@xdev.asia",
            List.of(new OrderItemRequest(1L, 1)));
    }
}
```

## 演習

1. ドメイン モデルの単体テストを作成します。 `Product`、 `Order`、 `Money`、 `OrderStatus`
2. 統合テストを作成する `ProductResource` CRUDエンドポイント
3. 使用する `@InjectMock` Order Service をテストするときに Product Service を模擬する
4. テスト検証エラーは正しい問題の詳細形式を返します。
5. セキュリティをテストします。 `@TestSecurity` 認証済み/禁止されたシナリオの場合
6.作成 `@TestTransaction` リポジトリ層のテスト

## 概要

- ドメイン ロジック (エンティティ、値オブジェクト) の **単体テスト** - コンテナは必要ありません
- **`@QuarkusTest`** 統合テスト用 — フル CDI コンテナ + Dev Services
- **REST 保証** — 流暢な HTTP テスト (`given().when().then()`）
- **`@InjectMock`** — モック CDI Bean (REST クライアント、外部サービス)
- **`@TestSecurity`** — モック OIDC 認証/認可
- **`@TestTransaction`** — 各テスト後のデータベース変更の自動ロールバック
- Dev Services は PostgreSQL、Kafka、Redis、Keycloak コンテナを自動的にプロビジョニングします

次の記事: コントラクト テスト — サービス間の API 互換性の確保。
