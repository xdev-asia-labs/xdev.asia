---
id: 019e2a10-a108-7a01-b001-f1a2b3c4d508
title: 第8課：訂單服務－訂單管理
slug: bai-8-order-service-quan-ly-don-hang
description: 建立訂單服務：訂單聚合、訂單狀態（狀態機）、基本 Saga 模式、產品服務整合。
duration_minutes: 120
is_free: false
video_url: null
sort_order: 7
section_title: 第 2 部分：設計微服務架構
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: Quarkus 微服務：從基礎知識到生產
  slug: quarkus-microservices-tu-co-ban-den-production
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9225" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9225)"/>

  <!-- Decorations -->
  <g>
    <circle cx="995" cy="155" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="890" cy="110" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="785" cy="65" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="680" cy="280" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="1075" cy="235" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="185" x2="1100" y2="265" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="215" x2="1050" y2="285" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1069.6410161513775,215 1069.6410161513775,255 1035,275 1000.3589838486224,255 1000.3589838486224,215 1035,195" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">💻 程式設計 — 第 7 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第8課：訂單服務－訂單管理</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Quarkus 微服務：從基礎知識到生產</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：設計微服務架構</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

訂單服務是電子商務的核心——產品服務（檢查庫存）、支付服務（付款）和通知服務（發送通知）在此協調。本文使用狀態機構建立訂單聚合來管理訂單生命週期。

## 訂單聚合

### 實體類別

```java
@Entity
@Table(name = "orders")
public class Order extends PanacheEntity {

    @Column(name = "order_number", unique = true, nullable = false)
    public String orderNumber;

    @Column(name = "customer_id", nullable = false)
    public String customerId; // Keycloak user ID

    @Column(name = "customer_email")
    public String customerEmail;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    public OrderStatus status = OrderStatus.CREATED;

    @OneToMany(mappedBy = "order",
               cascade = CascadeType.ALL,
               orphanRemoval = true)
    public List<OrderItem> items = new ArrayList<>();

    @Embedded
    @AttributeOverrides({
        @AttributeOverride(name = "amount",
            column = @Column(name = "total_amount")),
        @AttributeOverride(name = "currency",
            column = @Column(name = "total_currency"))
    })
    public Money totalAmount;

    @Column(name = "payment_id")
    public String paymentId;

    @Column(columnDefinition = "TEXT")
    public String notes;

    @Column(name = "created_at", updatable = false)
    public LocalDateTime createdAt;

    @Column(name = "updated_at")
    public LocalDateTime updatedAt;

    @Column(name = "paid_at")
    public LocalDateTime paidAt;

    @PrePersist
    void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = createdAt;
        orderNumber = generateOrderNumber();
    }

    @PreUpdate
    void onUpdate() {
        updatedAt = LocalDateTime.now();
    }

    // === Domain Methods ===

    public void addItem(Long productId, String productName,
                        Money unitPrice, int quantity) {
        OrderItem item = new OrderItem();
        item.productId = productId;
        item.productName = productName;
        item.unitPrice = unitPrice;
        item.quantity = quantity;
        item.order = this;
        this.items.add(item);
        recalculateTotal();
    }

    public void confirm() {
        assertStatus(OrderStatus.CREATED);
        this.status = OrderStatus.CONFIRMED;
    }

    public void markPaid(String paymentId) {
        assertStatus(OrderStatus.CONFIRMED);
        this.status = OrderStatus.PAID;
        this.paymentId = paymentId;
        this.paidAt = LocalDateTime.now();
    }

    public void ship() {
        assertStatus(OrderStatus.PAID);
        this.status = OrderStatus.SHIPPED;
    }

    public void deliver() {
        assertStatus(OrderStatus.SHIPPED);
        this.status = OrderStatus.DELIVERED;
    }

    public void cancel(String reason) {
        if (status == OrderStatus.SHIPPED
                || status == OrderStatus.DELIVERED) {
            throw new BusinessException(400,
                "Cannot cancel shipped/delivered order");
        }
        this.status = OrderStatus.CANCELLED;
        this.notes = reason;
    }

    private void recalculateTotal() {
        BigDecimal total = items.stream()
            .map(item -> item.unitPrice.amount()
                .multiply(BigDecimal.valueOf(item.quantity)))
            .reduce(BigDecimal.ZERO, BigDecimal::add);
        this.totalAmount = Money.vnd(total);
    }

    private void assertStatus(OrderStatus expected) {
        if (this.status != expected) {
            throw new BusinessException(400,
                "Order status must be " + expected
                + " but is " + this.status);
        }
    }

    private String generateOrderNumber() {
        return "ORD-" + LocalDate.now()
            .format(DateTimeFormatter.BASIC_ISO_DATE)
            + "-" + UUID.randomUUID().toString()
            .substring(0, 8).toUpperCase();
    }
}
```

### 訂單項實體

```java
@Entity
@Table(name = "order_items")
public class OrderItem extends PanacheEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id", nullable = false)
    public Order order;

    @Column(name = "product_id", nullable = false)
    public Long productId;

    @Column(name = "product_name", nullable = false)
    public String productName;

    @Embedded
    @AttributeOverrides({
        @AttributeOverride(name = "amount",
            column = @Column(name = "unit_price_amount")),
        @AttributeOverride(name = "currency",
            column = @Column(name = "unit_price_currency"))
    })
    public Money unitPrice;

    @Column(nullable = false)
    public int quantity;

    public BigDecimal getSubtotal() {
        return unitPrice.amount()
            .multiply(BigDecimal.valueOf(quantity));
    }
}
```

### OrderStatus 列舉

```java
public enum OrderStatus {
    CREATED,     // Mới tạo, chưa xác nhận
    CONFIRMED,   // Đã xác nhận (stock reserved)
    PAID,        // Đã thanh toán
    SHIPPED,     // Đang giao hàng
    DELIVERED,   // Đã giao thành công
    CANCELLED;   // Đã hủy

    public boolean canTransitionTo(OrderStatus next) {
        return switch (this) {
            case CREATED -> next == CONFIRMED || next == CANCELLED;
            case CONFIRMED -> next == PAID || next == CANCELLED;
            case PAID -> next == SHIPPED || next == CANCELLED;
            case SHIPPED -> next == DELIVERED;
            case DELIVERED, CANCELLED -> false;
        };
    }
}
```

## 訂單服務層

```java
@ApplicationScoped
public class OrderService {

    @Inject
    OrderRepository orderRepo;

    @Inject
    @RestClient
    ProductServiceClient productClient;

    @Transactional
    public OrderDTO createOrder(String customerId,
                                CreateOrderRequest request) {
        Order order = new Order();
        order.customerId = customerId;
        order.customerEmail = request.email();

        // Fetch product info từ Product Service
        for (var item : request.items()) {
            ProductInfo product =
                productClient.getById(item.productId());

            order.addItem(
                product.id(),
                product.name(),
                Money.vnd(product.price()),
                item.quantity()
            );
        }

        orderRepo.persist(order);
        return OrderDTO.from(order);
    }

    @Transactional
    public OrderDTO confirmOrder(Long orderId) {
        Order order = findOrder(orderId);

        // Reserve stock trong Product Service
        for (OrderItem item : order.items) {
            productClient.reserveStock(
                item.productId, item.quantity);
        }

        order.confirm();
        return OrderDTO.from(order);
    }

    @Transactional
    public OrderDTO cancelOrder(Long orderId, String reason) {
        Order order = findOrder(orderId);

        // Release reserved stock nếu đã confirm
        if (order.status == OrderStatus.CONFIRMED
                || order.status == OrderStatus.PAID) {
            for (OrderItem item : order.items) {
                productClient.releaseStock(
                    item.productId, item.quantity);
            }
        }

        order.cancel(reason);
        return OrderDTO.from(order);
    }

    public PagedResult<OrderListDTO> listByCustomer(
            String customerId, int page, int size) {
        PanacheQuery<Order> query = orderRepo
            .find("customerId = ?1",
                  Sort.by("createdAt").descending(), customerId)
            .page(Page.of(page, size));

        return new PagedResult<>(
            query.list().stream()
                .map(OrderListDTO::from).toList(),
            query.count(), page, size, query.pageCount());
    }

    private Order findOrder(Long id) {
        return orderRepo.findByIdOptional(id)
            .orElseThrow(() ->
                new ResourceNotFoundException("Order", id));
    }
}
```

## REST 用戶端 — 呼叫產品服務

```java
import org.eclipse.microprofile.rest.client.inject.RegisterRestClient;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;

@RegisterRestClient(configKey = "product-service")
@Path("/api/v1/products")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public interface ProductServiceClient {

    @GET
    @Path("/{id}")
    ProductInfo getById(@PathParam("id") Long id);

    @POST
    @Path("/{id}/reserve-stock")
    void reserveStock(@PathParam("id") Long id,
                      @QueryParam("quantity") int quantity);

    @POST
    @Path("/{id}/release-stock")
    void releaseStock(@PathParam("id") Long id,
                      @QueryParam("quantity") int quantity);
}
```

```properties
# application.properties
quarkus.rest-client.product-service.url=http://localhost:8081
quarkus.rest-client.product-service.scope=jakarta.inject.Singleton
```

## 訂購 REST 資源

```java
@Path("/api/v1/orders")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Tag(name = "Orders")
public class OrderResource {

    @Inject
    OrderService orderService;

    @Inject
    JsonWebToken jwt; // Keycloak token (bài sau)

    @POST
    public Response create(@Valid CreateOrderRequest request) {
        String customerId = jwt.getSubject();
        OrderDTO order = orderService.createOrder(
            customerId, request);
        return Response.created(
            URI.create("/api/v1/orders/" + order.id()))
            .entity(order).build();
    }

    @GET
    public Response listMyOrders(
            @QueryParam("page") @DefaultValue("0") int page,
            @QueryParam("size") @DefaultValue("20") int size) {
        String customerId = jwt.getSubject();
        var result = orderService.listByCustomer(
            customerId, page, size);
        return Response.ok(result.items())
            .header("X-Total-Count", result.totalItems())
            .build();
    }

    @POST @Path("/{id}/confirm")
    public OrderDTO confirm(@PathParam("id") Long id) {
        return orderService.confirmOrder(id);
    }

    @POST @Path("/{id}/cancel")
    public OrderDTO cancel(@PathParam("id") Long id,
                           CancelOrderRequest request) {
        return orderService.cancelOrder(id, request.reason());
    }
}
```

## 訂單服務的 Flyway 遷移

```sql
-- V1.0.0__create_orders_tables.sql
CREATE TABLE orders (
    id              BIGSERIAL PRIMARY KEY,
    order_number    VARCHAR(30) UNIQUE NOT NULL,
    customer_id     VARCHAR(100) NOT NULL,
    customer_email  VARCHAR(255),
    status          VARCHAR(20) NOT NULL DEFAULT 'CREATED',
    total_amount    NUMERIC(14,2) NOT NULL DEFAULT 0,
    total_currency  VARCHAR(3) DEFAULT 'VND',
    payment_id      VARCHAR(100),
    notes           TEXT,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    paid_at         TIMESTAMP
);

CREATE TABLE order_items (
    id                  BIGSERIAL PRIMARY KEY,
    order_id            BIGINT NOT NULL REFERENCES orders(id)
                        ON DELETE CASCADE,
    product_id          BIGINT NOT NULL,
    product_name        VARCHAR(255) NOT NULL,
    unit_price_amount   NUMERIC(12,2) NOT NULL,
    unit_price_currency VARCHAR(3) DEFAULT 'VND',
    quantity            INT NOT NULL CHECK (quantity > 0)
);

CREATE INDEX idx_orders_customer ON orders(customer_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_created ON orders(created_at DESC);
CREATE INDEX idx_order_items_order ON order_items(order_id);
```

## 練習

1.使用Order Aggregate（Order + OrderItem）建立Order Service項目
2. 透過驗證轉換實現 OrderStatus 的狀態機
3. 建立REST客戶端呼叫Product Service查詢庫存
4. 實現建立訂單、確認、取消的端點
5. 編寫訂單模式的Flyway遷移
6. 測試流程：建立→確認→（模擬）付款→出貨→交付

## 總結

- **訂單聚合**管理訂單項，確保整體計算一致性
- **狀態機** (`canTransitionTo()`) 控制訂單生命週期
- **REST 客戶端** (`@RegisterRestClient`) 致電產品服務以預訂/釋放庫存
- **域方法** (`confirm()`, `markPaid()`, `cancel()`) 包含業務邏輯
- 服務層協調領域邏輯與外部服務調用

下一篇：支付服務和通知服務。
