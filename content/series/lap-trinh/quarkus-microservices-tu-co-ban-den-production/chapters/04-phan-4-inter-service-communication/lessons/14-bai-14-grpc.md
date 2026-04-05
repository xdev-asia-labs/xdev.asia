---
id: 019e2a10-a114-7a01-b001-f1a2b3c4d514
title: 'Bài 14: gRPC — Communication hiệu suất cao'
slug: bai-14-grpc-communication-hieu-suat-cao
description: >-
  gRPC với Protobuf, tạo gRPC server/client trong Quarkus,
  streaming, deadline, so sánh REST vs gRPC performance.
duration_minutes: 100
is_free: false
video_url: null
sort_order: 13
section_title: "Phần 4: Inter-service Communication"
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: "Quarkus Microservices: Từ Cơ bản đến Production"
  slug: quarkus-microservices-tu-co-ban-den-production
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2372" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2372)"/>

  <!-- Decorations -->
  <g>
    <circle cx="862" cy="256" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="624" cy="158" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="886" cy="60" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="648" cy="222" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="910" cy="124" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="176" x2="1100" y2="256" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="206" x2="1050" y2="276" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="952.8467875173176,110.5 952.8467875173176,141.5 926,157 899.1532124826824,141.5 899.1532124826824,110.50000000000001 926,95" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">💻 Lập trình — Bài 13</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 14: gRPC — Communication hiệu suất cao</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Quarkus Microservices: Từ Cơ bản đến Production</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 4: Inter-service Communication</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

gRPC (Google Remote Procedure Call) sử dụng **Protocol Buffers** (Protobuf) cho binary serialization và **HTTP/2** cho transport. So với REST/JSON, gRPC nhanh hơn 5-10x về serialization và bandwidth. Quarkus tích hợp gRPC với code generation tự động từ `.proto` files.

## Khi nào dùng gRPC thay REST?

| Tiêu chí | REST/JSON | gRPC/Protobuf |
|----------|-----------|---------------|
| **Performance** | Chậm hơn (text-based) | Nhanh hơn 5-10x |
| **Payload size** | Lớn (JSON verbose) | Nhỏ (binary) |
| **Contract** | OpenAPI (optional) | Protobuf (bắt buộc) |
| **Streaming** | WebSocket/SSE | Built-in (4 patterns) |
| **Browser support** | Native | Cần gRPC-Web proxy |
| **Debugging** | Dễ (curl, Postman) | Khó (cần tools riêng) |
| **Phù hợp** | Public API, Web App | Internal services |

**Trong E-Commerce project**: gRPC cho internal service-to-service, REST cho external/frontend.

## Setup gRPC trong Quarkus

### Dependencies

```xml
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-grpc</artifactId>
</dependency>
```

### Protobuf Definition

```protobuf
// src/main/proto/product_service.proto
syntax = "proto3";

option java_multiple_files = true;
option java_package = "com.xdev.ecommerce.product.grpc";

package product;

service ProductGrpcService {
  // Unary RPC
  rpc GetProduct (GetProductRequest) returns (ProductResponse);
  rpc CheckStock (CheckStockRequest) returns (StockResponse);
  rpc ReserveStock (ReserveStockRequest) returns (StockResponse);

  // Server Streaming
  rpc ListProducts (ListProductsRequest)
      returns (stream ProductResponse);

  // Client Streaming (batch import)
  rpc BatchUpdateStock (stream UpdateStockRequest)
      returns (BatchStockResponse);
}

message GetProductRequest {
  int64 product_id = 1;
}

message ProductResponse {
  int64 id = 1;
  string name = 2;
  string description = 3;
  string price_amount = 4;  // BigDecimal as string
  string currency = 5;
  int32 stock_available = 6;
  string category_name = 7;
  string status = 8;
}

message CheckStockRequest {
  int64 product_id = 1;
  int32 quantity = 2;
}

message StockResponse {
  bool available = 1;
  int32 current_stock = 2;
  string message = 3;
}

message ReserveStockRequest {
  int64 product_id = 1;
  int32 quantity = 2;
  string order_id = 3;
}

message ListProductsRequest {
  string category = 1;
  int32 page = 2;
  int32 size = 3;
}

message UpdateStockRequest {
  int64 product_id = 1;
  int32 quantity_change = 2;  // positive = add, negative = reduce
}

message BatchStockResponse {
  int32 success_count = 1;
  int32 failure_count = 2;
  repeated string errors = 3;
}
```

### gRPC Server Implementation

```java
import io.quarkus.grpc.GrpcService;
import io.smallrye.mutiny.Multi;
import io.smallrye.mutiny.Uni;

@GrpcService
public class ProductGrpcServiceImpl
        implements ProductGrpcService {

    @Inject
    ProductRepository productRepo;

    @Override
    public Uni<ProductResponse> getProduct(
            GetProductRequest request) {
        return Uni.createFrom().item(() -> {
            Product product = productRepo
                .findByIdOptional(request.getProductId())
                .orElseThrow(() -> new StatusRuntimeException(
                    Status.NOT_FOUND.withDescription(
                        "Product " + request.getProductId()
                        + " not found")));

            return toResponse(product);
        });
    }

    @Override
    public Uni<StockResponse> checkStock(
            CheckStockRequest request) {
        return Uni.createFrom().item(() -> {
            Product product = productRepo
                .findByIdOptional(request.getProductId())
                .orElseThrow(() -> new StatusRuntimeException(
                    Status.NOT_FOUND));

            boolean available =
                product.stock.available() >= request.getQuantity();

            return StockResponse.newBuilder()
                .setAvailable(available)
                .setCurrentStock(product.stock.available())
                .setMessage(available
                    ? "Stock available"
                    : "Insufficient stock")
                .build();
        });
    }

    @Override
    @Transactional
    public Uni<StockResponse> reserveStock(
            ReserveStockRequest request) {
        return Uni.createFrom().item(() -> {
            Product product = productRepo
                .findByIdOptional(request.getProductId())
                .orElseThrow(() -> new StatusRuntimeException(
                    Status.NOT_FOUND));

            product.reserveStock(request.getQuantity());

            return StockResponse.newBuilder()
                .setAvailable(true)
                .setCurrentStock(product.stock.available())
                .setMessage("Stock reserved for order "
                    + request.getOrderId())
                .build();
        });
    }

    @Override
    public Multi<ProductResponse> listProducts(
            ListProductsRequest request) {
        return Multi.createFrom().items(() -> {
            var query = productRepo.findActive(
                request.getCategory(), null,
                Sort.by("createdAt").descending());

            return query.page(Page.of(
                    request.getPage(), request.getSize()))
                .list().stream()
                .map(this::toResponse);
        });
    }

    private ProductResponse toResponse(Product p) {
        return ProductResponse.newBuilder()
            .setId(p.id)
            .setName(p.name)
            .setDescription(
                p.description != null ? p.description : "")
            .setPriceAmount(
                p.price != null
                    ? p.price.amount().toPlainString() : "0")
            .setCurrency(
                p.price != null ? p.price.currency() : "VND")
            .setStockAvailable(
                p.stock != null ? p.stock.available() : 0)
            .setCategoryName(
                p.category != null ? p.category.name : "")
            .setStatus(p.status)
            .build();
    }
}
```

### Cấu hình gRPC Server

```properties
# gRPC server port
quarkus.grpc.server.port=9000

# Cùng host với REST (dev)
quarkus.grpc.server.use-separate-server=true

# TLS (production)
%prod.quarkus.grpc.server.ssl.certificate=server.crt
%prod.quarkus.grpc.server.ssl.key=server.key
```

## gRPC Client trong Order Service

### Dependency

```xml
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-grpc</artifactId>
</dependency>
```

### Copy proto file

Đặt cùng `.proto` file vào `order-service/src/main/proto/`.

### Cấu hình Client

```properties
# application.properties
quarkus.grpc.clients.product-grpc.host=localhost
quarkus.grpc.clients.product-grpc.port=9000
```

### Sử dụng gRPC Client

```java
import io.quarkus.grpc.GrpcClient;

@ApplicationScoped
public class OrderService {

    @GrpcClient("product-grpc")
    ProductGrpcService productGrpc;

    @Transactional
    public OrderDTO createOrder(String customerId,
                                CreateOrderRequest request) {
        Order order = new Order();
        order.customerId = customerId;

        for (var item : request.items()) {
            // gRPC call thay REST
            ProductResponse product = productGrpc
                .getProduct(GetProductRequest.newBuilder()
                    .setProductId(item.productId())
                    .build())
                .await().indefinitely();

            // Check stock qua gRPC
            StockResponse stock = productGrpc
                .checkStock(CheckStockRequest.newBuilder()
                    .setProductId(item.productId())
                    .setQuantity(item.quantity())
                    .build())
                .await().indefinitely();

            if (!stock.getAvailable()) {
                throw new BusinessException(400,
                    stock.getMessage());
            }

            order.addItem(product.getId(), product.getName(),
                Money.vnd(new BigDecimal(
                    product.getPriceAmount())),
                item.quantity());
        }

        // Reserve stock
        for (OrderItem oi : order.items) {
            productGrpc.reserveStock(
                ReserveStockRequest.newBuilder()
                    .setProductId(oi.productId)
                    .setQuantity(oi.quantity)
                    .setOrderId(order.orderNumber)
                    .build())
                .await().indefinitely();
        }

        order.persist();
        return OrderDTO.from(order);
    }
}
```

## gRPC Exception Handling

```java
import io.grpc.StatusRuntimeException;
import io.grpc.Status;

try {
    ProductResponse product = productGrpc
        .getProduct(request)
        .await().indefinitely();
} catch (StatusRuntimeException e) {
    switch (e.getStatus().getCode()) {
        case NOT_FOUND ->
            throw new ResourceNotFoundException(
                "Product", productId);
        case UNAVAILABLE ->
            throw new ServiceUnavailableException(
                "Product Service unavailable");
        case DEADLINE_EXCEEDED ->
            throw new BusinessException(504,
                "Product Service timeout");
        default ->
            throw new RuntimeException(
                "gRPC error: " + e.getStatus());
    }
}
```

## gRPC Deadline (Timeout)

```java
import java.time.Duration;
import io.smallrye.mutiny.Uni;

ProductResponse product = productGrpc
    .getProduct(request)
    .ifNoItem().after(Duration.ofSeconds(5))
    .fail()
    .onFailure(TimeoutException.class)
    .recoverWithItem(() -> {
        // Fallback hoặc cached response
        return ProductResponse.getDefaultInstance();
    })
    .await().indefinitely();
```

## Bài tập

1. Tạo `product_service.proto` với GetProduct, CheckStock, ReserveStock RPCs
2. Implement `ProductGrpcServiceImpl` trong Product Service
3. Tạo gRPC client trong Order Service gọi Product Service
4. Implement Server Streaming cho ListProducts
5. Thêm gRPC exception handling với Status codes
6. So sánh response time giữa REST và gRPC calls (benchmark)

## Tổng kết

- **gRPC** dùng Protobuf binary serialization — nhanh hơn REST/JSON 5-10x
- **`.proto` file** — contract-first, code generation tự động
- **`@GrpcService`** — annotate server implementation
- **`@GrpcClient`** — inject gRPC client stub
- **4 patterns**: Unary, Server Streaming, Client Streaming, Bidirectional
- gRPC cho internal communication, REST cho external/public APIs

Bài tiếp theo: Apache Kafka — Event-Driven Architecture.
