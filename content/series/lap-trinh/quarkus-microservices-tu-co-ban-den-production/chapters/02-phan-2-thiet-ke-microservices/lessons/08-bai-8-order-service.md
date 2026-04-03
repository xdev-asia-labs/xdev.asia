---
id: 019e2a10-a108-7a01-b001-f1a2b3c4d508
title: 'Bài 8: Order Service — Quản lý đơn hàng'
slug: bai-8-order-service-quan-ly-don-hang
description: >-
  Xây dựng Order Service: Order Aggregate, trạng thái đơn hàng (State Machine),
  Saga pattern cơ bản, tích hợp Product Service.
duration_minutes: 120
is_free: false
video_url: null
sort_order: 7
section_title: "Phần 2: Thiết kế Microservices Architecture"
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: "Quarkus Microservices: Từ Cơ bản đến Production"
  slug: quarkus-microservices-tu-co-ban-den-production
---

## Giới thiệu

Order Service là trung tâm của E-Commerce — nơi phối hợp Product Service (kiểm tra stock), Payment Service (thanh toán), và Notification Service (gửi thông báo). Bài này xây dựng Order Aggregate với State Machine quản lý vòng đời đơn hàng.

## Order Aggregate

### Entity classes

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

### OrderItem Entity

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

### OrderStatus Enum

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

## Order Service Layer

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

## REST Client — Gọi Product Service

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

## Order REST Resource

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

## Flyway Migration cho Order Service

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

## Bài tập

1. Tạo Order Service project với Order Aggregate (Order + OrderItem)
2. Implement State Machine cho OrderStatus với validation transitions
3. Tạo REST Client gọi Product Service để kiểm tra stock
4. Implement endpoint tạo order, confirm, cancel
5. Viết Flyway migration cho order schema
6. Test flow: Create → Confirm → (mock) Pay → Ship → Deliver

## Tổng kết

- **Order Aggregate** quản lý OrderItems, đảm bảo total calculation consistency
- **State Machine** (`canTransitionTo()`) kiểm soát vòng đời đơn hàng
- **REST Client** (`@RegisterRestClient`) gọi Product Service để reserve/release stock
- **Domain Methods** (`confirm()`, `markPaid()`, `cancel()`) chứa business logic
- Service layer phối hợp giữa domain logic và external service calls

Bài tiếp theo: Payment Service & Notification Service.
