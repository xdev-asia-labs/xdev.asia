---
id: 019e2a10-a106-7a01-b001-f1a2b3c4d506
title: 'レッスン 6: サービスごとのドメイン駆動設計とデータベース'
slug: bai-6-domain-driven-design-database-per-service
description: 'DDD: 境界コンテキスト、集約ルート、値オブジェクトをマイクロサービス設計に適用します。サービスごとのデータベースパターン。フライウェイの移行。'
duration_minutes: 100
is_free: false
video_url: null
sort_order: 5
section_title: 'パート 2: マイクロサービス アーキテクチャの設計'
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: 'Quarkus マイクロサービス: 基本から運用まで'
  slug: quarkus-microservices-tu-co-ban-den-production
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">💻 プログラミング — レッスン 5</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 6: ドメイン駆動設計とデータベース</tspan>
      <tspan x="60" dy="42">サービス</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Quarkus マイクロサービス: 基本から運用まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: マイクロサービス アーキテクチャの設計</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

ドメイン駆動設計 (DDD) は、複雑なシステムを明確な **境界されたコンテキスト** に分離するのに役立ちます。各コンテキストはマイクロサービスになります。 **サービスごとのデータベース** パターンと組み合わせると、各サービスが独自のデータベースを持ち、疎結合と独立した導入可能性が保証されます。

## 境界付きコンテキストとコンテキスト マップ

### 電子商取引ドメインの分解

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

### コンテキスト マッピング — サービス間の関係

|上流 |下流 |関係 |
|---------------------|---------------|----------|
|製品サービス |注文サービス |顧客とサプライヤー |
|注文サービス |決済サービス |顧客とサプライヤー |
|決済サービス |お知らせ |イベント発行者 |
|注文サービス |お知らせ |イベント発行者 |
|ユーザー (Keycloak) |すべてのサービス |適合者 (OIDC) |

## 集約ルート パターン

### 製品集合体

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

### 値オブジェクト

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

## サービスごとのデータベース

### マルチモジュール Maven 構造

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

### サービスごとに個別の DB を構成する

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

## Flyway データベースの移行

### 依存関係

```xml
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-flyway</artifactId>
</dependency>
```

### 構成

```properties
# Flyway chạy tự động khi start
quarkus.flyway.migrate-at-start=true
quarkus.flyway.baseline-on-migrate=true

# Production: KHÔNG dùng hibernate auto-generation
%prod.quarkus.hibernate-orm.database.generation=validate
```

### 移行ファイル

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

## 破損防止層

Order Service が製品情報を必要とする場合、**product_db を直接クエリしないでください**。代わりに、REST クライアントまたはイベントを使用してください。

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

## エンティティと値オブジェクト — いつ何を使用するか?

|特長 |エンティティ |値オブジェクト |
|----------|----------|--------------|
| **アイデンティティ** |一意の ID を持つ | ID を使用しない場合は、 | を使用して比較します。値
| **可変性** |状態を変更できます |不変 (Java レコード) |
| **ライフサイクル** |独自のライフサイクルを持つ |エンティティに属します |
| **永続性** | `@Entity` — プライベートテーブル | `@Embeddable` — エンティティと同じテーブル |
| **例** |製品、注文、ユーザー |お金、住所、株式情報 |

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

## ドメイン イベント — 境界のあるコンテキスト間の通信

### ドメイン イベントが必要なのはなぜですか?

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

### ドメインイベントを定義する

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

### Eコマースにおけるイベントの流れ

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

## データの整合性 — 最終的な整合性とサーガ プレビュー

### 問題: 分散トランザクションがありません

サービスごとのデータベース = **2 フェーズ コミットは使用できません**。代わりに:

|パターン |説明 |いつ使用するか |
|--------|--------|--------------|
| **最終的な整合性** |データはイベントを通じて「最終的に」整合性が保たれます。通知、分析、キャッシュ |
| **サーガ (振付)** |各サービスがイベントを発行すると、他のサービスが反応します。シンプルでサービスが少ない (~3) |
| **佐賀 (オーケストレーション)** |シーケンスを調整するオーケストレーターがあります |複雑で多くの手順 |
| **送信トレイのパターン** |トランザクションを使用してイベントを DB に書き込み、Kafka にポーリングします。少なくとも 1 回の配信を保証 |

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

> **Saga および Outbox パターンの詳細**: レッスン 15 (Kafka イベント駆動型) が完全に実装されます。

## DDD 集計ルールの概要

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

## 演習

1. Eコマースドメインを境界のあるコンテキストに分析し、コンテキストマップを描画します
2.作成 `Product` 値オブジェクトを含む集計ルート (`Money`、 `StockInfo`、 `Address`）
3. ドメイン メソッドを実装します。 `activate()`、 `reduceStock()`、 `addImage()`
4. マルチモジュール Maven プロジェクトを作成します。 `product-service` そして `order-service`
5. 製品データベース スキーマの Flyway 移行の書き込み (V1.0.0 → V1.2.0)
6. オーダーサービスに破損防止レイヤーを作成する
7. ドメインイベントの定義: `OrderCreatedEvent`、 `PaymentCompletedEvent`、 `StockReservedEvent`
8. 注文作成→決済→通知のイベントフロー図を描く
9. エンティティと値オブジェクトの比較 — いつ使用するか `@Entity` 対 `@Embeddable` 記録？

## 概要

- **境界のあるコンテキスト** = 1 つのマイクロサービス、各コンテキストには独自の言語 (ユビキタス言語) があります。
- **集約ルート** はビジネスの不変性を保証し、ドメイン ロジックを含み、ルートのみを介して子にアクセスします
- 不変ドメイン概念 (Money、Address、StockInfo) の **Value オブジェクト** (レコード)
- **エンティティと値オブジェクト**: エンティティには ID + ライフサイクルがあり、値オブジェクトは値によって比較されます。
- **サービスごとのデータベース** - 各サービスには独自の DB があり、API/イベント経由で通信します。
- **Flyway** はデータベース スキーマのバージョン管理を管理し、移行を自動的に実行します
- **破損防止レイヤー** は、ドメイン モデルが外部の概念に「感染」するのを防ぎます。
- **ドメイン イベント** によるサービス間の疎結合 - イベントを直接呼び出すのではなく発行します
- **サーガ パターン** (コレオグラフィー/オーケストレーション) によるサービス間のデータの一貫性

次の記事: 完全な製品サービスと注文サービスの構築。
