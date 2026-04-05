---
id: 019e2a10-a116-7a01-b001-f1a2b3c4d516
title: 'Bài 16: Fault Tolerance — Circuit Breaker, Retry, Bulkhead'
slug: bai-16-fault-tolerance-circuit-breaker-retry-bulkhead
description: >-
  SmallRye Fault Tolerance: @Retry, @Timeout, @CircuitBreaker,
  @Bulkhead, @Fallback — bảo vệ services khỏi cascading failures.
duration_minutes: 90
is_free: false
video_url: null
sort_order: 15
section_title: "Phần 5: Resilience & Observability"
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: "Quarkus Microservices: Từ Cơ bản đến Production"
  slug: quarkus-microservices-tu-co-ban-den-production
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9037" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9037)"/>

  <!-- Decorations -->
  <g>
    <circle cx="860" cy="210" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="620" cy="270" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="880" cy="70" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="640" cy="130" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="900" cy="190" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="230" x2="1100" y2="310" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="260" x2="1050" y2="330" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1051.650635094611,217.5 1051.650635094611,242.5 1030,255 1008.349364905389,242.5 1008.349364905389,217.5 1030,205" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">💻 Lập trình — Bài 15</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 16: Fault Tolerance — Circuit Breaker,</tspan>
      <tspan x="60" dy="42">Retry, Bulkhead</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Quarkus Microservices: Từ Cơ bản đến Production</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 5: Resilience &amp; Observability</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Trong microservices, khi một service bị chậm hoặc down, nó có thể kéo theo toàn bộ hệ thống (**cascading failure**). SmallRye Fault Tolerance (MicroProfile Fault Tolerance) cung cấp các pattern để bảo vệ: **Retry**, **Timeout**, **Circuit Breaker**, **Bulkhead**, và **Fallback**.

## Dependency

```xml
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-smallrye-fault-tolerance</artifactId>
</dependency>
```

## @Retry — Tự động thử lại

```java
import org.eclipse.microprofile.faulttolerance.Retry;

@ApplicationScoped
public class OrderService {

    @Inject @RestClient
    ProductServiceClient productClient;

    @Retry(maxRetries = 3,
           delay = 500,           // 500ms giữa các lần retry
           jitter = 200,          // ±200ms random delay
           retryOn = {IOException.class,
                      WebApplicationException.class},
           abortOn = {ResourceNotFoundException.class})
    public ProductInfo getProduct(Long productId) {
        return productClient.getById(productId);
    }
}
```

### Exponential Backoff

```java
@Retry(maxRetries = 4,
       delay = 1000,
       maxDuration = 30000)
@ExponentialBackoff(factor = 2, maxDelay = 10000)
// Retry: 1s → 2s → 4s → 8s (max 10s)
public ProductInfo getProductWithBackoff(Long id) {
    return productClient.getById(id);
}
```

## @Timeout — Giới hạn thời gian

```java
import org.eclipse.microprofile.faulttolerance.Timeout;

@Timeout(value = 5, unit = ChronoUnit.SECONDS)
public ProductInfo getProduct(Long id) {
    // Nếu > 5s → throw TimeoutException
    return productClient.getById(id);
}
```

### Kết hợp Retry + Timeout

```java
@Retry(maxRetries = 3, delay = 1000)
@Timeout(5000)  // Mỗi lần try tối đa 5s
public ProductInfo getProductReliable(Long id) {
    return productClient.getById(id);
}
// Worst case: 3 retries × 5s timeout + 3 × 1s delay = 18s max
```

## @CircuitBreaker — Ngắt mạch

Circuit Breaker ngăn chặn cascading failures bằng cách "ngắt" calls đến service bị lỗi:

```
     ┌─────────┐    failures > threshold    ┌──────┐
     │ CLOSED  │ ──────────────────────────> │ OPEN │
     │(normal) │                             │(fail)│
     └─────────┘                             └──┬───┘
          ^                                     │
          │        ┌────────────┐               │
          │        │ HALF-OPEN  │ <─────────────┘
          └────────│ (testing)  │  after delay
    success        └────────────┘
```

```java
import org.eclipse.microprofile.faulttolerance.CircuitBreaker;

@CircuitBreaker(
    requestVolumeThreshold = 20,  // Window: 20 requests
    failureRatio = 0.5,           // Mở khi 50% fail
    delay = 10,                   // Đợi 10s trước khi thử lại
    delayUnit = ChronoUnit.SECONDS,
    successThreshold = 3)         // Đóng lại sau 3 success
@Fallback(fallbackMethod = "getProductFallback")
public ProductInfo getProduct(Long id) {
    return productClient.getById(id);
}

// Fallback khi circuit OPEN hoặc call fail
public ProductInfo getProductFallback(Long id) {
    // Trả về cached data hoặc default
    return cachedProducts.getOrDefault(id,
        new ProductInfo(id, "Product Unavailable",
            BigDecimal.ZERO, "VND"));
}
```

## @Bulkhead — Giới hạn concurrent calls

Ngăn service bị quá tải bởi quá nhiều concurrent requests:

```java
import org.eclipse.microprofile.faulttolerance.Bulkhead;

@Bulkhead(value = 10,             // Max 10 concurrent calls
          waitingTaskQueue = 5)    // Max 5 queued
@Timeout(5000)
public ProductInfo getProduct(Long id) {
    return productClient.getById(id);
}
// Nếu > 15 (10 running + 5 queued) → BulkheadException
```

## @Fallback — Giá trị thay thế

```java
import org.eclipse.microprofile.faulttolerance.Fallback;

// Method-level fallback
@Fallback(fallbackMethod = "getProductFallback")
@Retry(maxRetries = 2)
@Timeout(3000)
public ProductInfo getProduct(Long id) {
    return productClient.getById(id);
}

private ProductInfo getProductFallback(Long id) {
    Log.warnf("Fallback for product %d", id);
    // Trả về từ local cache
    return productCache.get(id);
}

// Handler class fallback
@Fallback(value = ProductFallbackHandler.class)
public ProductInfo getProduct2(Long id) {
    return productClient.getById(id);
}

public class ProductFallbackHandler
        implements FallbackHandler<ProductInfo> {
    @Override
    public ProductInfo handle(ExecutionContext context) {
        // Log error, return default
        return new ProductInfo(
            0L, "Unavailable", BigDecimal.ZERO, "VND");
    }
}
```

## Thứ tự thực thi khi kết hợp Annotations

Khi dùng nhiều annotations cùng lúc, thứ tự thực thi:

```
Request → Bulkhead → CircuitBreaker → Retry → Timeout → Method → Fallback
                                                                      ↑
                                                              (on any failure)
```

```
Ví dụ thực tế với getProduct():
┌─────────────────────────────────────────────────────────┐
│ ① Bulkhead: Có slot trống?                              │
│   ├─ YES → tiếp tục                                    │
│   └─ NO  → BulkheadException → ⑥ Fallback              │
│                                                         │
│ ② CircuitBreaker: CLOSED?                               │
│   ├─ CLOSED → tiếp tục                                 │
│   ├─ HALF-OPEN → cho 1 request thử                     │
│   └─ OPEN  → CircuitBreakerOpenException → ⑥ Fallback  │
│                                                         │
│ ③ Retry: lần thử thứ mấy? (max 3)                      │
│   ├─ Lần 1 → gọi method                                │
│   └─ Fail → đợi delay → retry lần 2, 3...              │
│                                                         │
│ ④ Timeout: method chạy < 5s?                            │
│   ├─ YES → trả kết quả                                 │
│   └─ NO  → TimeoutException → ③ Retry thử lại          │
│                                                         │
│ ⑤ Method: productClient.getById(id)                     │
│                                                         │
│ ⑥ Fallback: khi tất cả retries fail                     │
│   → getProductFallback(id)                              │
└─────────────────────────────────────────────────────────┘
```

## Kết hợp tất cả — Real-world Pattern

```java
@ApplicationScoped
public class ResilientProductClient {

    @Inject @RestClient
    ProductServiceClient productClient;

    @Inject
    ProductCache productCache;

    @Retry(maxRetries = 3, delay = 500, jitter = 200,
           retryOn = IOException.class)
    @CircuitBreaker(requestVolumeThreshold = 20,
                    failureRatio = 0.5,
                    delay = 10, delayUnit = ChronoUnit.SECONDS)
    @Bulkhead(value = 20, waitingTaskQueue = 10)
    @Timeout(5000)
    @Fallback(fallbackMethod = "getProductFallback")
    public ProductInfo getProduct(Long id) {
        ProductInfo product = productClient.getById(id);
        // Cập nhật cache khi thành công
        productCache.put(id, product);
        return product;
    }

    public ProductInfo getProductFallback(Long id) {
        Log.warnf("Using cached product for id: %d", id);
        ProductInfo cached = productCache.get(id);
        if (cached != null) return cached;

        throw new ServiceUnavailableException(
            "Product Service unavailable "
            + "and no cached data for product " + id);
    }
}
```

## @RateLimit — Giới hạn request rate (Quarkus 3.x)

```java
import io.smallrye.faulttolerance.api.RateLimit;
import java.time.temporal.ChronoUnit;

// Giới hạn 100 requests / 1 phút
@RateLimit(value = 100,
           window = 1, windowUnit = ChronoUnit.MINUTES)
@Fallback(fallbackMethod = "rateLimitedFallback")
public ProductInfo getProduct(Long id) {
    return productClient.getById(id);
}

public ProductInfo rateLimitedFallback(Long id) {
    throw new WebApplicationException(
        "Rate limit exceeded. Try again later.", 429);
}
```

## Cascading Failure — Ví dụ thực tế

Giả sử Payment Service bị chậm (DB overload):

```
┌──────────┐     ┌──────────┐     ┌──────────┐
│  Client  │────>│  Order   │────>│ Payment  │ ← DB chậm (30s response)
│ Browser  │     │ Service  │     │ Service  │
└──────────┘     └──────────┘     └──────────┘
     │                │
     │  Thread pool   │ Tất cả threads blocked
     │  cạn kiệt!     │ chờ Payment response
     │                ▼
     │           Order Service
     │           KHÔNG THỂ xử lý
     │           request mới
     └────> 503 Service Unavailable
```

**Không có Fault Tolerance**: Order Service chết theo Payment Service (cascading failure).

**Có Fault Tolerance**:

```java
@ApplicationScoped
public class ResilientPaymentClient {

    @Inject @RestClient
    PaymentServiceClient paymentClient;

    @Timeout(3000)          // Không chờ quá 3s
    @CircuitBreaker(
        requestVolumeThreshold = 10,
        failureRatio = 0.5,
        delay = 30,
        delayUnit = ChronoUnit.SECONDS)
    @Bulkhead(value = 5)   // Max 5 concurrent calls
    @Fallback(fallbackMethod = "paymentFallback")
    public PaymentResult processPayment(
            PaymentRequest request) {
        return paymentClient.process(request);
    }

    public PaymentResult paymentFallback(
            PaymentRequest request) {
        Log.warnf("Payment Service unavailable, "
            + "queuing payment for order %s",
            request.orderId());

        // Gửi vào Kafka queue để retry sau
        paymentQueue.send(request);

        return new PaymentResult(
            request.orderId(),
            "PENDING",
            "Payment queued for processing");
    }
}
```

Kết quả:
- **Timeout 3s** → không block thread 30s
- **Circuit Breaker** → sau 5/10 failures, ngắt luôn → fail fast
- **Bulkhead 5** → chỉ 5 threads gọi Payment, còn lại phục vụ request khác
- **Fallback** → queue vào Kafka, retry background → user không bị block

## Metrics Integration

SmallRye Fault Tolerance tự động expose metrics khi có `quarkus-micrometer`:

```xml
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-micrometer-registry-prometheus</artifactId>
</dependency>
```

Metrics tự động có sẵn tại `/q/metrics`:

```
# Retry metrics
ft_retry_calls_total{method="getProduct",retried="true",retryResult="valueReturned"} 42
ft_retry_calls_total{method="getProduct",retried="true",retryResult="maxRetriesReached"} 3
ft_retry_retries_total{method="getProduct"} 86

# Circuit Breaker metrics
ft_circuitbreaker_state_total{method="getProduct",state="closed"} 95.0
ft_circuitbreaker_state_total{method="getProduct",state="open"} 3.0
ft_circuitbreaker_state_total{method="getProduct",state="halfOpen"} 2.0
ft_circuitbreaker_opened_total{method="getProduct"} 2

# Bulkhead metrics
ft_bulkhead_executionsRunning{method="getProduct"} 3
ft_bulkhead_executionsWaiting{method="getProduct"} 1
ft_bulkhead_runningDuration_seconds{method="getProduct",quantile="0.95"} 0.234

# Timeout metrics
ft_timeout_calls_total{method="getProduct",timedOut="true"} 5
ft_timeout_calls_total{method="getProduct",timedOut="false"} 195
```

### Grafana Dashboard Query ví dụ

```promql
# Circuit Breaker open rate
rate(ft_circuitbreaker_opened_total[5m])

# Retry success rate
rate(ft_retry_calls_total{retryResult="valueReturned"}[5m])
/ rate(ft_retry_calls_total[5m])

# P95 bulkhead execution time
ft_bulkhead_runningDuration_seconds{quantile="0.95"}
```

## Cấu hình qua application.properties

```properties
# Override annotations qua config
com.xdev.ecommerce.order.ResilientProductClient/getProduct/Retry/maxRetries=5
com.xdev.ecommerce.order.ResilientProductClient/getProduct/Timeout/value=3000
com.xdev.ecommerce.order.ResilientProductClient/getProduct/CircuitBreaker/delay=15000

# Global defaults
Retry/maxRetries=3
Timeout/value=5000
CircuitBreaker/failureRatio=0.5
```

## Testing Fault Tolerance

```java
@QuarkusTest
class ResilientProductClientTest {

    @InjectMock
    @RestClient
    ProductServiceClient productClient;

    @Inject
    ResilientProductClient resilientClient;

    @Test
    void testRetryOnFailure() {
        // First two calls fail, third succeeds
        when(productClient.getById(1L))
            .thenThrow(new IOException("timeout"))
            .thenThrow(new IOException("timeout"))
            .thenReturn(new ProductInfo(1L, "Test",
                BigDecimal.TEN, "VND"));

        ProductInfo result = resilientClient.getProduct(1L);
        assertEquals("Test", result.name());

        // Verify 3 calls made
        verify(productClient, times(3)).getById(1L);
    }

    @Test
    void testFallbackWhenAllRetriesFail() {
        when(productClient.getById(1L))
            .thenThrow(new IOException("down"));

        // Should return fallback (cached or throw)
        // ...
    }
}
```

## Bài tập

1. Thêm `@Retry` + `@Timeout` cho Product Service REST Client calls
2. Implement `@CircuitBreaker` với fallback trả về cached data
3. Thêm `@Bulkhead` giới hạn concurrent calls đến Product Service
4. Tạo `ResilientProductClient` wrapper với tất cả patterns
5. Tạo `ResilientPaymentClient` với fallback queue vào Kafka
6. Override config qua `application.properties`
7. Thêm Micrometer metrics — verify metrics tại `/q/metrics`
8. Test: mock Product Service down → verify retry → circuit open → fallback
9. (Nâng cao) Tạo Grafana dashboard cho Fault Tolerance metrics

## Tổng kết

- **`@Retry`** — tự động thử lại, hỗ trợ exponential backoff
- **`@Timeout`** — giới hạn thời gian xử lý, ngăn thread bị block
- **`@CircuitBreaker`** — ngắt mạch khi service fail quá nhiều (CLOSED → OPEN → HALF-OPEN)
- **`@Bulkhead`** — giới hạn concurrent calls, tránh resource exhaustion
- **`@Fallback`** — trả về cached/default data khi tất cả fail, hoặc queue retry
- **`@RateLimit`** — giới hạn request rate (requests/window)
- **Thứ tự thực thi**: Bulkhead → CircuitBreaker → Retry → Timeout → Method → Fallback
- **Cascading Failure Prevention** — kết hợp Timeout + CircuitBreaker + Bulkhead
- **Metrics** — tự động expose qua Micrometer/Prometheus
- **Config override** qua `application.properties` — không cần thay đổi code

Bài tiếp theo: OpenTelemetry — Distributed Tracing & Metrics.
