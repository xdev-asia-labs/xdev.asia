---
id: 019e2a10-a114-7a01-b001-f1a2b3c4d514
title: 'レッスン 14: gRPC — 高性能通信'
slug: bai-14-grpc-communication-hieu-suat-cao
description: >-
  Protobuf を使用した gRPC、Quarkus での gRPC サーバー/クライアントの作成、ストリーミング、期限、REST と gRPC
  のパフォーマンスの比較。
duration_minutes: 100
is_free: false
video_url: null
sort_order: 13
section_title: 'パート 4: サービス間通信'
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: 'Quarkus マイクロサービス: 基本から運用まで'
  slug: quarkus-microservices-tu-co-ban-den-production
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">💻 プログラミング — レッスン 13</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 14: gRPC — 高性能通信</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Quarkus マイクロサービス: 基本から運用まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: サービス間通信</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

gRPC (Google リモート プロシージャ コール) は、バイナリのシリアル化に **プロトコル バッファ** (Protobuf) を使用し、トランスポートに **HTTP/2** を使用します。 REST/JSON と比較して、gRPC はシリアル化と帯域幅の点で 5 ～ 10 倍高速です。 Quarkus は、gRPC と自動コード生成を統合します。 `.proto` ファイル。

## REST の代わりに gRPC を使用するのはどのような場合ですか?

|基準 | REST/JSON | gRPC/プロトバッファ |
|----------|-----------|------|
| **パフォーマンス** |遅い (テキストベース) | 5 ～ 10 倍高速 |
| **ペイロードサイズ** |大 (JSON 冗長) |小 (バイナリ) |
| **契約** | OpenAPI (オプション) |プロトバッファ (必須) |
| **ストリーミング** | WebSocket/SSE |内蔵（4パターン）｜
| **ブラウザのサポート** |ネイティブ | gRPC-Web プロキシが必要 |
| **デバッグ** |簡単（カール、ポストマン） |難しい（別途ツールが必要） |
| **適切** |パブリック API、Web アプリ |内部サービス |

**電子商取引プロジェクトの場合**: 内部サービス間では gRPC、外部/フロントエンドでは REST。

## Quarkus で gRPC をセットアップする

### 依存関係

```xml
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-grpc</artifactId>
</dependency>
```

### プロトバッファの定義

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

### gRPC サーバーの実装

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

### gRPC サーバーを構成する

```properties
# gRPC server port
quarkus.grpc.server.port=9000

# Cùng host với REST (dev)
quarkus.grpc.server.use-separate-server=true

# TLS (production)
%prod.quarkus.grpc.server.ssl.certificate=server.crt
%prod.quarkus.grpc.server.ssl.key=server.key
```

## オーダーサービスの gRPC クライアント

### 依存関係

```xml
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-grpc</artifactId>
</dependency>
```

### プロトファイルをコピー

まとめる `.proto` ファイルに入れる `order-service/src/main/proto/`。

### クライアント構成

```properties
# application.properties
quarkus.grpc.clients.product-grpc.host=localhost
quarkus.grpc.clients.product-grpc.port=9000
```

### gRPC クライアントを使用する

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

## gRPC 例外処理

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

## gRPC 期限 (タイムアウト)

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

## 演習

1.作成 `product_service.proto` GetProduct、CheckStock、ReserveStock RPC を使用
2.実装する `ProductGrpcServiceImpl` 製品サービスで
3. Order Service に Product Service という名前の gRPC クライアントを作成します。
4. ListProducts のサーバー ストリーミングを実装する
5. ステータス コードを使用した gRPC 例外処理を追加します。
6. REST 呼び出しと gRPC 呼び出しの間の応答時間を比較します (ベンチマーク)

## 概要

- **gRPC** は Protobuf バイナリ シリアル化を使用します - REST/JSON より 5 ～ 10 倍高速です
- **`.proto` file** — コントラクトファーストの自動コード生成
- **`@GrpcService`** — アノテーションサーバー実装
- **`@GrpcClient`** — gRPC クライアント スタブを挿入する
- **4 パターン**: 単項、サーバー ストリーミング、クライアント ストリーミング、双方向
- 内部通信には gRPC、外部/パブリック API には REST

次の記事: Apache Kafka — イベント駆動型アーキテクチャ。
