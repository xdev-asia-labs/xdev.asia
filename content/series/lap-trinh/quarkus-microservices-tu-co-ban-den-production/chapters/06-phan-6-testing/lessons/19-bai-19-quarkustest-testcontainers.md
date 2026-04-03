---
id: 019e2a10-a119-7a01-b001-f1a2b3c4d519
title: 'Bài 19: @QuarkusTest & Testcontainers'
slug: bai-19-quarkustest-testcontainers
description: >-
  Unit testing, integration testing với @QuarkusTest, Dev Services
  tự động cung cấp PostgreSQL/Kafka/Keycloak containers, REST-assured,
  @InjectMock, @QuarkusTestResource.
duration_minutes: 100
is_free: false
video_url: null
sort_order: 18
section_title: "Phần 6: Testing"
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: "Quarkus Microservices: Từ Cơ bản đến Production"
  slug: quarkus-microservices-tu-co-ban-den-production
---

## Giới thiệu

Quarkus testing ecosystem gồm: **@QuarkusTest** cho integration test (full CDI container), **Dev Services** tự động cung cấp databases/message brokers, **REST-assured** cho HTTP testing, và **@InjectMock** cho mocking. Bài này hướng dẫn test strategy cho microservices.

## Test Pyramid cho Microservices

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

## Dependencies

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

## Unit Tests — Plain JUnit

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

## Integration Tests — @QuarkusTest

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

## @InjectMock — Mock CDI Beans

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

## Database Testing với Dev Services

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

## @QuarkusTestProfile — Custom Test Profiles

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

## Test Data Builder Pattern

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

## Bài tập

1. Viết Unit Tests cho domain models: `Product`, `Order`, `Money`, `OrderStatus`
2. Viết Integration Tests cho `ProductResource` CRUD endpoints
3. Sử dụng `@InjectMock` mock Product Service khi test Order Service
4. Test validation errors trả về đúng format Problem Details
5. Test security: `@TestSecurity` cho authenticated/forbidden scenarios
6. Tạo `@TestTransaction` tests cho Repository layer

## Tổng kết

- **Unit Tests** cho domain logic (entities, value objects) — không cần container
- **`@QuarkusTest`** cho integration tests — full CDI container + Dev Services
- **REST-assured** — fluent HTTP testing (`given().when().then()`)
- **`@InjectMock`** — mock CDI beans (REST Client, external services)
- **`@TestSecurity`** — mock OIDC authentication/authorization
- **`@TestTransaction`** — auto-rollback database changes sau mỗi test
- Dev Services tự động cung cấp PostgreSQL, Kafka, Redis, Keycloak containers

Bài tiếp theo: Contract Testing — đảm bảo API compatibility giữa services.
