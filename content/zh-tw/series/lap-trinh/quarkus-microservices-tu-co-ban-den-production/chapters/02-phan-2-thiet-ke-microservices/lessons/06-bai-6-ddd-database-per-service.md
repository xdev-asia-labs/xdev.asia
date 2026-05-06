---
id: 019e2a10-a106-7a01-b001-f1a2b3c4d506
title: 第 6 課：領域驅動設計和每個服務的資料庫
slug: bai-6-domain-driven-design-database-per-service
description: 將 DDD：有界上下文、聚合根、值物件應用於微服務設計。每個服務模式的資料庫。遷徙遷徙。
duration_minutes: 100
is_free: false
video_url: null
sort_order: 5
section_title: 第 2 部分：設計微服務架構
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: Quarkus 微服務：從基礎知識到生產
  slug: quarkus-microservices-tu-co-ban-den-production
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4140" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4140)"/>

  <!-- Decorations -->
  <g>
    <circle cx="928" cy="254" r="26" fill="#fbbf24" opacity="0.09"/>
    <circle cx="756" cy="242" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="1084" cy="230" r="14" fill="#fbbf24" opacity="0.07"/>
    <circle cx="912" cy="218" r="8" fill="#fbbf24" opacity="0.11"/>
    <circle cx="740" cy="206" r="32" fill="#fbbf24" opacity="0.05"/>
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
    <line x1="600" y1="194" x2="1100" y2="274" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="224" x2="1050" y2="294" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1069.1147367097487,229.5 1069.1147367097487,258.5 1044,273 1018.8852632902513,258.5 1018.8852632902513,229.5 1044,215" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">💻 程式設計 — 第 5 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 6 课：领域驱动设计和数据库</tspan>
      <tspan x="60" dy="42">服務</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Quarkus 微服務：從基礎知識到生產</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：設計微服務架構</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

領域驅動設計 (DDD) 有助於將複雜的系統分離成清晰的**有界上下文**——每個上下文都成為一個微服務。結合 **Database per Service** 模式，每個服務都有自己的資料庫，確保鬆散耦合和獨立的可部署性。

## 有界上下文和上下文映射

### 電商域名分解

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

### 上下文映射——服务之间的关系

|上游|下游|關係式 |
|-------------------|----------------------------|---------------------|
|产品服务 |订购服务 |客户-供应商|
|订购服务 |支付服务 |客户-供应商|
|支付服务 |通知 |活动发布者 |
|订购服务 |通知 |活动发布者 |
|用戶（Keycloak）|所有服務 |墨守成規者 (OIDC) |

## 聚合根模式

### 產品聚合

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

### 值對象

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

## 每个服务的数据库

### 多模組Maven結構

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

### 为每个服务配置单独的数据库

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

## Flyway 資料庫遷移

### 依賴關係

```xml
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-flyway</artifactId>
</dependency>
```

### 配置

```properties
# Flyway chạy tự động khi start
quarkus.flyway.migrate-at-start=true
quarkus.flyway.baseline-on-migrate=true

# Production: KHÔNG dùng hibernate auto-generation
%prod.quarkus.hibernate-orm.database.generation=validate
```

### 遷移文件

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

## 反腐敗層

當Order Service需要Product資訊時，**不要直接查詢product_db**。相反，使用 REST 客户端或事件：

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

## 实体 vs 值对象 — 何时使用什么？

|特点|实体|值对象 |
|------------|------|--------------|
| **身分** |擁有唯一的ID |沒有 ID，使用 | 進行比較值
| **可變性** |可以改變狀態 |不可變（Java 記錄）|
| **生命週期** |有自己的生命週期 |屬於實體 |
| **堅持** | `@Entity` — 私人餐桌 | `@Embeddable` — 与实体相同的表 |
| **範例** |產品、訂單、使用者 |金錢、地址、庫存資訊 |

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

## 領域事件－限界上下文之間的通信

### 为什么我们需要领域事件？

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

### 定義領域事件

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

### 电子商务中的事件流

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

## 資料一致性 — 最終一致性與 Saga 預覽

### 問題：沒有分散式事務

每個服務的資料庫 = **不能使用兩階段提交**。相反：

|圖案|說明 |何時使用 |
|--------|--------|--------------|
| **最終一致性** |資料「最終」將透過事件保持一致 |通知、分析、快取 |
| **傳奇（編舞）** |每個服務發布事件，其他服務做出反應 |簡單，服務很少（~3） |
| **傳奇（編曲）** |有一個協調器來協調序列 |複雜，步驟多|
| **寄件匣圖案** |透過交易將事件寫入資料庫，輪詢到 Kafka |保證至少一次交付 |

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

> **Saga 和寄件匣模式詳細資訊**：第 15 課（Kafka 事件驅動）將全面實施。

## DDD 聚合規則摘要

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

## 練習

1. 將電子商務領域分析為有界上下文，繪製情境圖
2. 創建 `Product` 具有值物件的聚合根 (`Money`, `StockInfo`, `Address`）
3. 實作域方法： `activate()`, `reduceStock()`, `addImage()`
4. 使用以下命令建立多模組 Maven 項目 `product-service` 和 `order-service`
5. 為產品資料庫架構編寫 Flyway 遷移（V1.0.0 → V1.2.0）
6. 在訂單服務中創建反腐敗層
7.領域事件的定義： `OrderCreatedEvent`, `PaymentCompletedEvent`, `StockReservedEvent`
8. 繪製訂單建立→付款→通知的事件流程圖
9. 比較實體與值物件－何時使用 `@Entity` 與 `@Embeddable` 記錄？

## 總結

- **有界上下文** = 1個微服務，每個上下文都有自己的語言（Ubiquitous Language）
- **聚合根**確保業務不變性，包含域邏輯，僅透過根存取子項
- **值物件**（記錄）用於不可變域概念（金錢、地址、股票資訊）
- **實體 vs 值物件**：實體有 ID + 生命週期，值物件以值進行比較
- **每個服務都有資料庫** — 每個服務都有自己的資料庫，透過 API/事件進行通信
- **Flyway** 管理資料庫模式版本控制，自動執行遷移
- **反腐敗層**防止領域模型被外部概念“感染”
- **域事件**用於服務之間的鬆散耦合 - 發布事件而不是直接呼叫它們
- **Saga 模式**（編排/編排）用於服務之間的資料一致性

下一篇：建立完整的產品服務和訂單服務。
