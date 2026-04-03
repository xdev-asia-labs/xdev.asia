---
id: 019e2a10-a106-7a01-b001-f1a2b3c4d506
title: 'Bài 6: Domain-Driven Design & Database per Service'
slug: bai-6-domain-driven-design-database-per-service
description: >-
  Áp dụng DDD: Bounded Context, Aggregate Root, Value Object vào thiết kế
  microservices. Database per Service pattern. Flyway migration.
duration_minutes: 100
is_free: false
video_url: null
sort_order: 5
section_title: "Phần 2: Thiết kế Microservices Architecture"
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: "Quarkus Microservices: Từ Cơ bản đến Production"
  slug: quarkus-microservices-tu-co-ban-den-production
---

## Giới thiệu

Domain-Driven Design (DDD) giúp phân tách hệ thống phức tạp thành các **Bounded Context** rõ ràng — mỗi context trở thành một microservice. Kết hợp với **Database per Service** pattern, mỗi service có database riêng, đảm bảo loose coupling và independent deployability.

## Bounded Context & Context Map

### E-Commerce Domain decomposition

```
┌─────────────────────────────────────────────────────┐
│                  E-Commerce Platform                 │
├──────────┬──────────┬──────────┬────────┬───────────┤
│ Product  │  Order   │ Payment  │  User  │Notification│
│ Context  │ Context  │ Context  │Context │  Context   │
├──────────┼──────────┼──────────┼────────┼───────────┤
│•Product  │•Order    │•Payment  │•User   │•Notification│
│•Category │•OrderItem│•Refund   │•Role   │•Template  │
│•Inventory│•Cart     │•Invoice  │•Profile│•Channel   │
│•Review   │          │          │        │           │
└──────────┴──────────┴──────────┴────────┴───────────┘
```

### Context Mapping — mối quan hệ giữa các services

| Upstream          | Downstream    | Relationship         |
|-------------------|---------------|----------------------|
| Product Service   | Order Service | Customer-Supplier    |
| Order Service     | Payment Service | Customer-Supplier  |
| Payment Service   | Notification  | Event Publisher      |
| Order Service     | Notification  | Event Publisher      |
| User (Keycloak)   | All Services  | Conformist (OIDC)    |

## Aggregate Root Pattern

### Product Aggregate

```java
@Entity
@Table(name = "products")
public class Product extends PanacheEntity {
    // === Aggregate Root ===

    @Column(nullable = false)
    public String name;

    public String description;

    @Embedded
    public Money price;  // Value Object

    @Embedded
    public StockInfo stock;  // Value Object

    @Column(nullable = false)
    public String status; // DRAFT, ACTIVE, DISCONTINUED

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    public Category category;

    @OneToMany(mappedBy = "product",
               cascade = CascadeType.ALL,
               orphanRemoval = true)
    public List<ProductImage> images = new ArrayList<>();

    // === Domain Methods ===

    public void activate() {
        if (this.price == null || this.price.amount()
                .compareTo(BigDecimal.ZERO) <= 0) {
            throw new BusinessException(400,
                "Sản phẩm cần có giá > 0 để kích hoạt");
        }
        this.status = "ACTIVE";
    }

    public void reduceStock(int quantity) {
        if (this.stock.available() < quantity) {
            throw new BusinessException(400,
                "Không đủ tồn kho: cần " + quantity
                + ", còn " + this.stock.available());
        }
        this.stock = this.stock.reduce(quantity);
    }

    public void addImage(String url, int sortOrder) {
        ProductImage image = new ProductImage();
        image.url = url;
        image.sortOrder = sortOrder;
        image.product = this;
        this.images.add(image);
    }
}
```

### Value Objects

```java
import jakarta.persistence.Embeddable;
import java.math.BigDecimal;
import java.util.Currency;

@Embeddable
public record Money(
    @Column(name = "price_amount", precision = 12, scale = 2)
    BigDecimal amount,

    @Column(name = "price_currency", length = 3)
    String currency
) {
    public Money {
        if (amount != null && amount.compareTo(BigDecimal.ZERO) < 0) {
            throw new IllegalArgumentException(
                "Amount cannot be negative");
        }
        if (currency == null) currency = "VND";
    }

    public static Money vnd(BigDecimal amount) {
        return new Money(amount, "VND");
    }

    public Money add(Money other) {
        assertSameCurrency(other);
        return new Money(amount.add(other.amount), currency);
    }

    public Money multiply(int quantity) {
        return new Money(
            amount.multiply(BigDecimal.valueOf(quantity)), currency);
    }

    private void assertSameCurrency(Money other) {
        if (!this.currency.equals(other.currency)) {
            throw new IllegalArgumentException(
                "Cannot operate on different currencies");
        }
    }
}

@Embeddable
public record StockInfo(
    @Column(name = "stock_available")
    int available,

    @Column(name = "stock_reserved")
    int reserved
) {
    public int total() { return available + reserved; }

    public StockInfo reduce(int quantity) {
        return new StockInfo(available - quantity, reserved);
    }

    public StockInfo reserve(int quantity) {
        return new StockInfo(available - quantity,
                             reserved + quantity);
    }
}
```

## Database per Service

### Multi-module Maven structure

```
ecommerce-platform/
├── pom.xml                          # Parent POM
├── product-service/
│   ├── pom.xml
│   └── src/main/resources/
│       ├── application.properties   # DB: product_db
│       └── db/migration/            # Flyway cho product_db
├── order-service/
│   ├── pom.xml
│   └── src/main/resources/
│       ├── application.properties   # DB: order_db
│       └── db/migration/            # Flyway cho order_db
├── payment-service/
│   ├── pom.xml
│   └── src/main/resources/
│       ├── application.properties   # DB: payment_db
│       └── db/migration/
└── notification-service/
    ├── pom.xml
    └── src/main/resources/
        ├── application.properties   # DB: notification_db
        └── db/migration/
```

### Cấu hình DB riêng cho mỗi service

```properties
# product-service/application.properties
quarkus.application.name=product-service
quarkus.http.port=8081

%prod.quarkus.datasource.db-kind=postgresql
%prod.quarkus.datasource.jdbc.url=jdbc:postgresql://${DB_HOST}:5432/product_db
%prod.quarkus.datasource.username=${DB_USERNAME}
%prod.quarkus.datasource.password=${DB_PASSWORD}
```

```properties
# order-service/application.properties
quarkus.application.name=order-service
quarkus.http.port=8082

%prod.quarkus.datasource.db-kind=postgresql
%prod.quarkus.datasource.jdbc.url=jdbc:postgresql://${DB_HOST}:5432/order_db
%prod.quarkus.datasource.username=${DB_USERNAME}
%prod.quarkus.datasource.password=${DB_PASSWORD}
```

## Flyway Database Migration

### Dependency

```xml
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-flyway</artifactId>
</dependency>
```

### Cấu hình

```properties
# Flyway chạy tự động khi start
quarkus.flyway.migrate-at-start=true
quarkus.flyway.baseline-on-migrate=true

# Production: KHÔNG dùng hibernate auto-generation
%prod.quarkus.hibernate-orm.database.generation=validate
```

### Migration files

```sql
-- src/main/resources/db/migration/V1.0.0__create_products_table.sql
CREATE TABLE categories (
    id          BIGSERIAL PRIMARY KEY,
    name        VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    status      VARCHAR(20) DEFAULT 'ACTIVE',
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products (
    id              BIGSERIAL PRIMARY KEY,
    name            VARCHAR(255) NOT NULL,
    description     TEXT,
    price_amount    NUMERIC(12,2) NOT NULL,
    price_currency  VARCHAR(3) DEFAULT 'VND',
    stock_available INT NOT NULL DEFAULT 0,
    stock_reserved  INT NOT NULL DEFAULT 0,
    category_id     BIGINT REFERENCES categories(id),
    status          VARCHAR(20) DEFAULT 'DRAFT',
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_products_category ON products(category_id);
CREATE INDEX idx_products_status ON products(status);
```

```sql
-- V1.1.0__add_product_images.sql
CREATE TABLE product_images (
    id          BIGSERIAL PRIMARY KEY,
    product_id  BIGINT NOT NULL REFERENCES products(id)
                ON DELETE CASCADE,
    url         VARCHAR(500) NOT NULL,
    sort_order  INT DEFAULT 0,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_product_images_product
    ON product_images(product_id);
```

```sql
-- V1.2.0__add_full_text_search.sql
ALTER TABLE products
    ADD COLUMN search_vector tsvector;

CREATE INDEX idx_products_search
    ON products USING gin(search_vector);

CREATE OR REPLACE FUNCTION update_product_search_vector()
RETURNS trigger AS $$
BEGIN
    NEW.search_vector :=
        to_tsvector('english',
            COALESCE(NEW.name, '') || ' ' ||
            COALESCE(NEW.description, ''));
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_products_search_vector
    BEFORE INSERT OR UPDATE ON products
    FOR EACH ROW EXECUTE FUNCTION update_product_search_vector();
```

## Anti-corruption Layer

Khi Order Service cần thông tin Product, **không query trực tiếp product_db**. Thay vào đó, dùng REST Client hoặc Event:

```java
// order-service: Product representation (không phải Product entity)
public record ProductInfo(
    Long productId,
    String name,
    BigDecimal price,
    String currency
) {}

// Anti-corruption layer: translate external data
@ApplicationScoped
public class ProductAdapter {

    @Inject
    @RestClient
    ProductServiceClient productClient;

    public ProductInfo getProduct(Long productId) {
        // Call Product Service REST API
        var external = productClient.getById(productId);
        // Map sang internal representation
        return new ProductInfo(
            external.id(),
            external.name(),
            external.price(),
            "VND"
        );
    }
}
```

## Entity vs Value Object — Khi nào dùng gì?

| Đặc điểm | Entity | Value Object |
|-----------|--------|--------------|
| **Identity** | Có ID duy nhất | Không có ID, so sánh bằng giá trị |
| **Mutability** | Có thể thay đổi state | Immutable (Java record) |
| **Lifecycle** | Có lifecycle riêng | Thuộc về Entity |
| **Persistence** | `@Entity` — bảng riêng | `@Embeddable` — cùng bảng với Entity |
| **Ví dụ** | Product, Order, User | Money, Address, StockInfo |

```java
// Entity — có identity, mutable
@Entity
public class Order extends PanacheEntity {
    public Long id;  // Identity
    public String status;  // State changes
}

// Value Object — no identity, immutable
@Embeddable
public record Address(
    String street, String city,
    String province, String postalCode
) {
    // So sánh bằng giá trị, không phải ID
    // Java record tự generate equals/hashCode
}

// Khi nào tạo Value Object mới?
// → Nếu 2 objects có cùng giá trị = cùng 1 thing
// VD: Money(100_000, "VND") == Money(100_000, "VND")
//     Address("123 ABC", "HCM") == Address("123 ABC", "HCM")
```

## Domain Events — Giao tiếp giữa Bounded Contexts

### Tại sao cần Domain Events?

```
Scenario: Customer đặt hàng thành công
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ❌ Cách sai: Order Service gọi trực tiếp
     Order → call Product.reduceStock()
     Order → call Payment.createPayment()
     Order → call Notification.sendEmail()
     → Tight coupling, nếu 1 service down = toàn bộ fail

  ✅ Cách đúng: Publish domain event
     Order → publish "OrderCreated" event
     Product Service → subscribe → reduceStock()
     Payment Service → subscribe → createPayment()
     Notification   → subscribe → sendEmail()
     → Loose coupling, mỗi subscriber xử lý độc lập
```

### Định nghĩa Domain Events

```java
// === Base Event ===
public abstract class DomainEvent {
    private final String eventId = UUID.randomUUID().toString();
    private final Instant occurredAt = Instant.now();
    private final String eventType;
    private final String aggregateId;

    protected DomainEvent(String eventType,
                          String aggregateId) {
        this.eventType = eventType;
        this.aggregateId = aggregateId;
    }

    // getters...
}

// === Concrete Events ===
public class OrderCreatedEvent extends DomainEvent {
    private final Long orderId;
    private final String customerId;
    private final List<OrderItemData> items;
    private final BigDecimal totalAmount;

    public OrderCreatedEvent(Long orderId,
                             String customerId,
                             List<OrderItemData> items,
                             BigDecimal totalAmount) {
        super("ORDER_CREATED", orderId.toString());
        this.orderId = orderId;
        this.customerId = customerId;
        this.items = items;
        this.totalAmount = totalAmount;
    }

    public record OrderItemData(
        Long productId,
        int quantity,
        BigDecimal unitPrice
    ) {}
}

public class PaymentCompletedEvent extends DomainEvent {
    private final Long paymentId;
    private final Long orderId;
    private final BigDecimal amount;
    private final String paymentMethod;

    public PaymentCompletedEvent(Long paymentId,
                                 Long orderId,
                                 BigDecimal amount,
                                 String paymentMethod) {
        super("PAYMENT_COMPLETED", paymentId.toString());
        this.paymentId = paymentId;
        this.orderId = orderId;
        this.amount = amount;
        this.paymentMethod = paymentMethod;
    }
}

public class StockReservedEvent extends DomainEvent {
    private final Long productId;
    private final int quantity;
    private final Long orderId;

    public StockReservedEvent(Long productId,
                              int quantity,
                              Long orderId) {
        super("STOCK_RESERVED", productId.toString());
        this.productId = productId;
        this.quantity = quantity;
        this.orderId = orderId;
    }
}
```

### Event Flow trong E-Commerce

```
  Order Service              Product Service
  ─────────────              ───────────────
  createOrder()
       │
       ▼
  publish OrderCreatedEvent ──┐
       │                      │
       ▼                      ▼
  Status: CREATED        subscribe: reserveStock()
                               │
                               ▼
                         publish StockReservedEvent ──┐
                                                      │
  Payment Service                                     │
  ───────────────                                     │
       │◀─────────────────────────────────────────────┘
       ▼
  subscribe: createPayment()
       │
       ▼
  VNPay callback → payment success
       │
       ▼
  publish PaymentCompletedEvent ──┐
                                  │
  Order Service                   │
       │◀─────────────────────────┘
       ▼
  subscribe: confirmOrder()
       │
       ▼
  Status: CONFIRMED
       │
       ▼
  publish OrderConfirmedEvent ──┐
                                │
  Notification Service          │
       │◀───────────────────────┘
       ▼
  subscribe: sendOrderConfirmationEmail()
```

## Data Consistency — Eventual Consistency & Saga Preview

### Vấn đề: không có distributed transactions

Database per Service = **không dùng được 2-Phase Commit**. Thay vào đó:

| Pattern | Mô tả | Khi nào dùng |
|---------|--------|--------------|
| **Eventual Consistency** | Data sẽ consistent "cuối cùng" qua events | Notification, analytics, caching |
| **Saga (Choreography)** | Mỗi service publish event, service khác react | Đơn giản, ít services (~3) |
| **Saga (Orchestration)** | Có Orchestrator điều phối sequence | Phức tạp, nhiều steps |
| **Outbox Pattern** | Write event vào DB cùng transaction, poll ra Kafka | Đảm bảo at-least-once delivery |

```
Saga Choreography cho Order Flow:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Order        Product       Payment      Notification
  ─────        ───────       ───────      ────────────
  Create ──▶ Reserve ──▶ Charge ──▶ Notify
  Order       Stock         Payment       Email

  Nếu Payment fail:
  ─────────────────
  Create ──▶ Reserve ──▶ Charge ──▶ ❌
  Order       Stock      (FAIL)
                │
                ▼
             Release ◀── PaymentFailed
             Stock        (Compensating Action)
                │
                ▼
  Cancel ◀── StockReleased
  Order
```

> **Chi tiết Saga & Outbox Pattern**: Bài 15 (Kafka Event-Driven) sẽ implement đầy đủ.

## DDD Aggregate Rules Summary

```
┌─────────────────────────────────────────────────────┐
│              DDD AGGREGATE RULES                    │
│                                                     │
│  1. Mỗi Aggregate có 1 Root Entity                 │
│     → Order là root, OrderItem là child             │
│                                                     │
│  2. Truy cập child entities qua Root only           │
│     ✅ order.addItem(product, qty)                  │
│     ❌ orderItemRepo.save(item)                     │
│                                                     │
│  3. Domain logic trong Aggregate, không ở Service   │
│     ✅ order.cancel(reason)                         │
│     ❌ orderService.cancelOrder(orderId, reason)    │
│                                                     │
│  4. 1 Transaction = 1 Aggregate                     │
│     → Không update Order + Product trong 1 TX       │
│     → Dùng Domain Event thay thế                    │
│                                                     │
│  5. Reference giữa Aggregates bằng ID, không FK     │
│     ✅ order.customerId (String)                    │
│     ❌ order.customer (User entity — wrong!)        │
│                                                     │
│  6. Aggregate size nên nhỏ                          │
│     → Product + ProductImage = OK                   │
│     → Product + Category + Review = TOO BIG         │
└─────────────────────────────────────────────────────┘
```

## Bài tập

1. Phân tích E-Commerce domain thành Bounded Contexts, vẽ Context Map
2. Tạo `Product` Aggregate Root với Value Objects (`Money`, `StockInfo`, `Address`)
3. Implement domain methods: `activate()`, `reduceStock()`, `addImage()`
4. Tạo multi-module Maven project với `product-service` và `order-service`
5. Viết Flyway migrations cho Product database schema (V1.0.0 → V1.2.0)
6. Tạo Anti-corruption Layer trong Order Service
7. Định nghĩa Domain Events: `OrderCreatedEvent`, `PaymentCompletedEvent`, `StockReservedEvent`
8. Vẽ Event Flow diagram cho order creation → payment → notification
9. So sánh Entity vs Value Object — khi nào dùng `@Entity` vs `@Embeddable` record?

## Tổng kết

- **Bounded Context** = 1 microservice, mỗi context có ngôn ngữ riêng (Ubiquitous Language)
- **Aggregate Root** đảm bảo business invariants, chứa domain logic, access children qua root only
- **Value Objects** (records) cho immutable domain concepts (Money, Address, StockInfo)
- **Entity vs Value Object**: Entity có ID + lifecycle, Value Object so sánh bằng giá trị
- **Database per Service** — mỗi service có DB riêng, giao tiếp qua API/Events
- **Flyway** quản lý database schema versioning, chạy migration tự động
- **Anti-corruption Layer** ngăn domain model bị "nhiễm" bởi external concepts
- **Domain Events** cho loose coupling giữa services — publish event thay vì gọi trực tiếp
- **Saga Pattern** (Choreography/Orchestration) cho data consistency giữa services

Bài tiếp theo: Xây dựng Product Service & Order Service hoàn chỉnh.
