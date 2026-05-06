---
id: 019e2a10-a113-7a01-b001-f1a2b3c4d513
title: 第 13 課：REST 用戶端 — 服務之間的同步通訊
slug: bai-13-rest-client-giao-tiep-dong-bo
description: MicroProfile REST 用戶端、類型安全性的 REST 呼叫、異常處理、逾時配置、回應快取和重試策略。
duration_minutes: 90
is_free: false
video_url: null
sort_order: 12
section_title: 第 4 部分：服務間通信
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: Quarkus 微服務：從基礎知識到生產
  slug: quarkus-microservices-tu-co-ban-den-production
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2847" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2847)"/>

  <!-- Decorations -->
  <g>
    <circle cx="767" cy="251" r="20" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="934" cy="238" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="601" cy="225" r="32" fill="#a78bfa" opacity="0.08"/>
    <circle cx="768" cy="212" r="23" fill="#a78bfa" opacity="0.09"/>
    <circle cx="935" cy="199" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="141" x2="1100" y2="221" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="171" x2="1050" y2="241" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1072.1769145362398,223 1072.1769145362398,259 1041,277 1009.8230854637602,259 1009.8230854637602,223 1041,205" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">💻 程式設計 — 第 12 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 13 課：REST 用戶端 — 同步通信</tspan>
      <tspan x="60" dy="42">服務之間</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Quarkus 微服務：從基礎知識到生產</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：服務間通信</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

在微服務中，服務需要相互通訊。 **同步通訊**（REST 用戶端）適用於請求-回應模式 - 當服務 A 需要立即從服務 B 取得資料。 Quarkus 提供了 **MicroProfile REST 用戶端**，可協助呼叫類型安全的 REST API，就像呼叫本機方法一樣。

## MicroProfile REST 用戶端

### 依賴關係

```xml
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-rest-client-jackson</artifactId>
</dependency>
```

### 宣告 REST 用戶端接口

```java
import org.eclipse.microprofile.rest.client.inject.RegisterRestClient;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import java.util.List;

@RegisterRestClient(configKey = "product-service")
@Path("/api/v1/products")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public interface ProductServiceClient {

    @GET
    List<ProductInfo> list(
        @QueryParam("page") int page,
        @QueryParam("size") int size);

    @GET @Path("/{id}")
    ProductInfo getById(@PathParam("id") Long id);

    @POST @Path("/{id}/reserve-stock")
    StockResult reserveStock(
        @PathParam("id") Long id,
        @QueryParam("quantity") int quantity);

    @POST @Path("/{id}/release-stock")
    void releaseStock(
        @PathParam("id") Long id,
        @QueryParam("quantity") int quantity);

    @GET @Path("/{id}/check-stock")
    StockInfo checkStock(
        @PathParam("id") Long id,
        @QueryParam("quantity") int quantity);
}
```

### 配置

```properties
# application.properties
quarkus.rest-client.product-service.url=http://localhost:8081
quarkus.rest-client.product-service.scope=jakarta.inject.Singleton

# Timeouts
quarkus.rest-client.product-service.connect-timeout=5000
quarkus.rest-client.product-service.read-timeout=10000

# Override URL cho mỗi environment
%dev.quarkus.rest-client.product-service.url=http://localhost:8081
%prod.quarkus.rest-client.product-service.url=http://product-service:8080
```

### 在服務中使用

```java
@ApplicationScoped
public class OrderService {

    @Inject
    @RestClient
    ProductServiceClient productClient;

    @Transactional
    public OrderDTO createOrder(String customerId,
                                CreateOrderRequest request) {
        Order order = new Order();
        order.customerId = customerId;

        for (var item : request.items()) {
            // Gọi Product Service
            ProductInfo product =
                productClient.getById(item.productId());

            if (product == null) {
                throw new BusinessException(400,
                    "Product " + item.productId() + " not found");
            }

            order.addItem(product.id(), product.name(),
                Money.vnd(product.price()), item.quantity());
        }

        order.persist();
        return OrderDTO.from(order);
    }
}
```

## REST 用戶端的例外處理

### 回應異常映射器

```java
import org.eclipse.microprofile.rest.client.ext.ResponseExceptionMapper;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.WebApplicationException;

@Provider
public class ProductServiceExceptionMapper
        implements ResponseExceptionMapper<RuntimeException> {

    @Override
    public RuntimeException toThrowable(Response response) {
        int status = response.getStatus();

        return switch (status) {
            case 404 -> new ResourceNotFoundException(
                "Product", "unknown");
            case 400 -> {
                String body = response.readEntity(String.class);
                yield new BusinessException(400, body);
            }
            case 503 -> new ServiceUnavailableException(
                "Product Service is unavailable");
            default -> new WebApplicationException(
                "Product Service error: " + status, status);
        };
    }

    @Override
    public boolean handles(int status, jakarta.ws.rs.core.MultivaluedMap headers) {
        return status >= 400;
    }
}
```

### 在客戶端註冊

```java
@RegisterRestClient(configKey = "product-service")
@RegisterProvider(ProductServiceExceptionMapper.class)
@Path("/api/v1/products")
public interface ProductServiceClient {
    // ...
}
```

## 請求/回應記錄

```java
import jakarta.ws.rs.client.ClientRequestContext;
import jakarta.ws.rs.client.ClientRequestFilter;
import jakarta.ws.rs.client.ClientResponseContext;
import jakarta.ws.rs.client.ClientResponseFilter;
import io.quarkus.logging.Log;

@Provider
public class RestClientLoggingFilter
        implements ClientRequestFilter, ClientResponseFilter {

    @Override
    public void filter(ClientRequestContext request) {
        Log.infof("→ REST Client: %s %s",
            request.getMethod(), request.getUri());
    }

    @Override
    public void filter(ClientRequestContext request,
                       ClientResponseContext response) {
        Log.infof("← REST Client: %s %s → %d",
            request.getMethod(), request.getUri(),
            response.getStatus());
    }
}
```

## 標頭和自訂攔截器

### 新增自訂標頭

```java
import jakarta.ws.rs.client.ClientRequestContext;
import jakarta.ws.rs.client.ClientRequestFilter;

@Provider
public class CorrelationIdFilter
        implements ClientRequestFilter {

    @Inject
    io.vertx.core.http.HttpServerRequest serverRequest;

    @Override
    public void filter(ClientRequestContext ctx) {
        // Propagate correlation ID
        String correlationId = serverRequest
            .getHeader("X-Correlation-ID");
        if (correlationId == null) {
            correlationId = UUID.randomUUID().toString();
        }
        ctx.getHeaders().putSingle(
            "X-Correlation-ID", correlationId);

        // Thêm service identifier
        ctx.getHeaders().putSingle(
            "X-Source-Service", "order-service");
    }
}
```

## 編排程式 REST 用戶端

當需要動態建立客戶端時（URL改變）：

```java
import org.eclipse.microprofile.rest.client.RestClientBuilder;
import java.net.URI;

@ApplicationScoped
public class DynamicServiceCaller {

    public ProductInfo getProduct(String serviceUrl,
                                  Long productId) {
        ProductServiceClient client = RestClientBuilder
            .newBuilder()
            .baseUri(URI.create(serviceUrl))
            .connectTimeout(5, TimeUnit.SECONDS)
            .readTimeout(10, TimeUnit.SECONDS)
            .register(ProductServiceExceptionMapper.class)
            .build(ProductServiceClient.class);

        return client.getById(productId);
    }
}
```

## 分段和檔案上傳

```java
import org.jboss.resteasy.reactive.PartType;
import org.jboss.resteasy.reactive.RestForm;
import jakarta.ws.rs.core.MediaType;

// Client interface
@RegisterRestClient(configKey = "storage-service")
@Path("/api/v1/files")
public interface StorageServiceClient {

    @POST
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    FileUploadResult upload(
        @RestForm("file") java.io.File file,
        @RestForm("folder") String folder);
}
```

## 非同步/反應式 REST 用戶端 (Mutiny)

Quarkus 透過 **Mutiny** 支援響應式 REST 用戶端 — 適用於高並發的非阻塞呼叫（**在等待回應時不會**阻塞執行緒）：

### 反應式接口

```java
@RegisterRestClient(configKey = "product-service")
@Path("/api/v1/products")
@Produces(MediaType.APPLICATION_JSON)
public interface ProductServiceReactiveClient {

    // Trả về Uni<T> — single async result
    @GET @Path("/{id}")
    Uni<ProductInfo> getById(@PathParam("id") Long id);

    // Trả về Multi<T> — stream of results
    @GET
    Multi<ProductInfo> listAll();

    // Uni<Response> — khi cần check status code
    @POST @Path("/{id}/reserve-stock")
    Uni<Response> reserveStock(
        @PathParam("id") Long id,
        @QueryParam("quantity") int quantity);
}
```

### 使用反應式客戶端

```java
@ApplicationScoped
public class OrderService {

    @Inject @RestClient
    ProductServiceReactiveClient productClient;

    // Non-blocking: gọi nhiều services song song
    public Uni<OrderDTO> createOrderReactive(
            String customerId, CreateOrderRequest request) {

        // Gọi song song: check stock cho tất cả items
        List<Uni<ProductInfo>> productCalls = request.items()
            .stream()
            .map(item -> productClient.getById(item.productId()))
            .toList();

        return Uni.combine().all().unis(productCalls)
            .with(results -> {
                // Tất cả products đã load xong
                @SuppressWarnings("unchecked")
                List<ProductInfo> products =
                    (List<ProductInfo>) (List<?>) results;

                Order order = new Order();
                order.customerId = customerId;

                for (int i = 0; i < products.size(); i++) {
                    ProductInfo product = products.get(i);
                    int qty = request.items().get(i).quantity();
                    order.addItem(product.id(), product.name(),
                        Money.vnd(product.price()), qty);
                }

                order.persist();
                return OrderDTO.from(order);
            });
    }

    // Chain reactive calls
    public Uni<OrderDTO> processOrder(Long orderId) {
        return Order.<Order>findById(orderId)
            .onItem().ifNull()
                .failWith(new ResourceNotFoundException(
                    "Order", orderId))
            .flatMap(order ->
                // Reserve stock cho từng item
                reserveAllStock(order)
                    .replaceWith(order))
            .map(OrderDTO::from);
    }

    private Uni<Void> reserveAllStock(Order order) {
        List<Uni<Response>> reservations = order.items.stream()
            .map(item -> productClient.reserveStock(
                item.productId, item.quantity))
            .toList();

        return Uni.combine().all().unis(reservations)
            .discardItems();
    }
}
```

> **何時使用Reactive？ ** 當服務需要並行呼叫多個下游服務或需要高吞吐量時。對於簡單的請求-回應，阻塞客戶端就足夠了。

## 使用 Stork 進行服務發現

不要對 URL 進行硬編碼，而是使用 **Stork** 進行服務發現 + 用戶端負載平衡：

```xml
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-smallrye-stork</artifactId>
</dependency>
<!-- Consul backend -->
<dependency>
    <groupId>io.smallrye.stork</groupId>
    <artifactId>stork-service-discovery-consul</artifactId>
</dependency>
```

```properties
# application.properties
# Stork service discovery
quarkus.stork.product-service.service-discovery.type=consul
quarkus.stork.product-service.service-discovery.consul-host=localhost
quarkus.stork.product-service.service-discovery.consul-port=8500

# Load balancing strategy
quarkus.stork.product-service.load-balancer.type=round-robin

# REST Client dùng stork:// scheme
quarkus.rest-client.product-service.url=stork://product-service
```

```java
// Client interface — không thay đổi gì!
@RegisterRestClient(configKey = "product-service")
@Path("/api/v1/products")
public interface ProductServiceClient {
    @GET @Path("/{id}")
    ProductInfo getById(@PathParam("id") Long id);
}
// Stork tự động resolve URL từ Consul
```

### Kubernetes DNS（不需要Consul）

```properties
# Kubernetes service discovery
quarkus.stork.product-service.service-discovery.type=kubernetes
quarkus.stork.product-service.service-discovery.k8s-namespace=ecommerce
```

## 使用 WireMock 測試 REST 用戶端

```xml
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-junit5-mockito</artifactId>
    <scope>test</scope>
</dependency>
```

### 使用 @InjectMock 模擬 REST 用戶端

```java
@QuarkusTest
class OrderServiceTest {

    @InjectMock
    @RestClient
    ProductServiceClient productClient;

    @Inject
    OrderService orderService;

    @Test
    void testCreateOrder() {
        // Mock product response
        when(productClient.getById(1L))
            .thenReturn(new ProductInfo(
                1L, "Laptop", 25_000_000L, "VND",
                "ACTIVE", new StockInfo(50, 0)));

        when(productClient.getById(2L))
            .thenReturn(new ProductInfo(
                2L, "Mouse", 500_000L, "VND",
                "ACTIVE", new StockInfo(100, 0)));

        CreateOrderRequest request = new CreateOrderRequest(
            List.of(
                new OrderItemRequest(1L, 1),
                new OrderItemRequest(2L, 2)));

        OrderDTO result = orderService.createOrder(
            "user-123", request);

        assertEquals(26_000_000L, result.totalAmount());
        assertEquals(2, result.items().size());

        verify(productClient).getById(1L);
        verify(productClient).getById(2L);
    }

    @Test
    void testProductNotFound() {
        when(productClient.getById(999L))
            .thenThrow(new ResourceNotFoundException(
                "Product", 999L));

        assertThrows(BusinessException.class,
            () -> orderService.createOrder("user-123",
                new CreateOrderRequest(List.of(
                    new OrderItemRequest(999L, 1)))));
    }

    @Test
    void testProductServiceDown() {
        when(productClient.getById(anyLong()))
            .thenThrow(new ProcessingException(
                "Connection refused"));

        assertThrows(ProcessingException.class,
            () -> orderService.createOrder("user-123",
                new CreateOrderRequest(List.of(
                    new OrderItemRequest(1L, 1)))));
    }
}
```
```

## Bài tập

1. Tạo `產品服務客戶` interface với REST Client annotations
2. Thêm `響應異常映射器` xử lý 404, 400, 503
3. Implement logging filter cho REST Client calls
4. Thêm `X-相關性ID` header propagation
5. Gọi Product Service từ Order Service khi tạo order
6. Tạo Reactive REST Client — gọi song song check stock cho nhiều products
7. Tạo WireMock test cho: success, product not found, service down
8. Implement Programmatic Client (`RestClientBuilder`) cho dynamic URL
9. (Nâng cao) Tích hợp Stork service discovery với Consul/Kubernetes

## Tổng kết

- **MicroProfile REST Client** — type-safe, declarative HTTP calls giữa services
- **`@RegisterRestClient`** + `@RestClient` inject — giống CDI injection
- **`響應異常映射器`** chuyển HTTP errors thành meaningful exceptions
- **Client Filters** cho logging, header propagation, authentication
- **Timeout configuration** trong `應用程式屬性`
- **Async/Reactive** (`大學<T>`, `多<T>`) — non-blocking, gọi nhiều services song song
- **Stork** — service discovery + client-side load balancing (Consul, Kubernetes DNS)
- **Programmatic client** (`RestClientBuilder`) cho dynamic URLs
- **Testing** — `@InjectMock @RestClient` 與 Mockito 進行單元測試

下一篇文章：gRPC — 高效能通訊。
