---
id: 019e2a10-a113-7a01-b001-f1a2b3c4d513
title: 'Bài 13: REST Client — Giao tiếp đồng bộ giữa Services'
slug: bai-13-rest-client-giao-tiep-dong-bo
description: >-
  MicroProfile REST Client, type-safe REST calls, exception handling,
  timeout configuration, response caching, và retry policies.
duration_minutes: 90
is_free: false
video_url: null
sort_order: 12
section_title: "Phần 4: Inter-service Communication"
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: "Quarkus Microservices: Từ Cơ bản đến Production"
  slug: quarkus-microservices-tu-co-ban-den-production
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">💻 Lập trình — Bài 12</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 13: REST Client — Giao tiếp đồng bộ</tspan>
      <tspan x="60" dy="42">giữa Services</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Quarkus Microservices: Từ Cơ bản đến Production</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 4: Inter-service Communication</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Trong microservices, services cần giao tiếp với nhau. **Synchronous communication** (REST Client) phù hợp cho request-response pattern — khi service A cần dữ liệu ngay lập tức từ service B. Quarkus cung cấp **MicroProfile REST Client** giúp gọi REST API type-safe, giống như gọi method local.

## MicroProfile REST Client

### Dependency

```xml
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-rest-client-jackson</artifactId>
</dependency>
```

### Khai báo REST Client Interface

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

### Cấu hình

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

### Sử dụng trong Service

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

## Exception Handling cho REST Client

### Response Exception Mapper

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

### Register trên Client

```java
@RegisterRestClient(configKey = "product-service")
@RegisterProvider(ProductServiceExceptionMapper.class)
@Path("/api/v1/products")
public interface ProductServiceClient {
    // ...
}
```

## Request/Response Logging

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

## Headers & Custom Interceptors

### Thêm Custom Headers

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

## Programmatic REST Client

Khi cần tạo client dynamically (URL thay đổi):

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

## Multipart & File Upload

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

## Async/Reactive REST Client (Mutiny)

Quarkus hỗ trợ Reactive REST Client với **Mutiny** — non-blocking calls phù hợp cho high-concurrency (**không** block thread trong khi chờ response):

### Reactive Interface

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

### Sử dụng Reactive Client

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

> **Khi nào dùng Reactive?** Khi service cần gọi nhiều downstream services song song hoặc cần high throughput. Với request-response đơn giản, blocking client đủ tốt.

## Service Discovery với Stork

Thay vì hardcode URL, dùng **Stork** để service discovery + client-side load balancing:

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

### Kubernetes DNS (không cần Consul)

```properties
# Kubernetes service discovery
quarkus.stork.product-service.service-discovery.type=kubernetes
quarkus.stork.product-service.service-discovery.k8s-namespace=ecommerce
```

## Testing REST Client với WireMock

```xml
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-junit5-mockito</artifactId>
    <scope>test</scope>
</dependency>
```

### Mock REST Client với @InjectMock

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

1. Tạo `ProductServiceClient` interface với REST Client annotations
2. Thêm `ResponseExceptionMapper` xử lý 404, 400, 503
3. Implement logging filter cho REST Client calls
4. Thêm `X-Correlation-ID` header propagation
5. Gọi Product Service từ Order Service khi tạo order
6. Tạo Reactive REST Client — gọi song song check stock cho nhiều products
7. Tạo WireMock test cho: success, product not found, service down
8. Implement Programmatic Client (`RestClientBuilder`) cho dynamic URL
9. (Nâng cao) Tích hợp Stork service discovery với Consul/Kubernetes

## Tổng kết

- **MicroProfile REST Client** — type-safe, declarative HTTP calls giữa services
- **`@RegisterRestClient`** + `@RestClient` inject — giống CDI injection
- **`ResponseExceptionMapper`** chuyển HTTP errors thành meaningful exceptions
- **Client Filters** cho logging, header propagation, authentication
- **Timeout configuration** trong `application.properties`
- **Async/Reactive** (`Uni<T>`, `Multi<T>`) — non-blocking, gọi nhiều services song song
- **Stork** — service discovery + client-side load balancing (Consul, Kubernetes DNS)
- **Programmatic client** (`RestClientBuilder`) cho dynamic URLs
- **Testing** — `@InjectMock @RestClient` với Mockito cho unit tests

Bài tiếp theo: gRPC — Communication hiệu suất cao.
