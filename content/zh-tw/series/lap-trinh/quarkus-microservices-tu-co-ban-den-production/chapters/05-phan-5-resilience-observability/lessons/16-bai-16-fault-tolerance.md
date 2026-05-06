---
id: 019e2a10-a116-7a01-b001-f1a2b3c4d516
title: 第 16 課：容錯 — 斷路器、重試、隔板
slug: bai-16-fault-tolerance-circuit-breaker-retry-bulkhead
description: >-
  SmallRye 容錯：@Retry、@Timeout、@CircuitBreaker、@Bulkhead、@Fallback —
  保護服務免受級聯故障的影響。
duration_minutes: 90
is_free: false
video_url: null
sort_order: 15
section_title: 第 5 部分：彈性和可觀察性
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: Quarkus 微服務：從基礎知識到生產
  slug: quarkus-microservices-tu-co-ban-den-production
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">💻 程式設計 — 第 15 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 16 課：容錯 — 斷路器、</tspan>
      <tspan x="60" dy="42">重試，隔板</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Quarkus 微服務：從基礎知識到生產</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：彈性和可觀察性</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

在微服務中，當服務速度變慢或故障時，它可能會拖累整個系統（**級聯故障**）。 SmallRye 容錯（MicroProfile 容錯）提供保護模式：**重試**、**逾時**、**斷路器**、**Bulkhead** 和 **回退**。

## 依賴關係

```xml
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-smallrye-fault-tolerance</artifactId>
</dependency>
```

## @Retry — 自動重試

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

### 指數退避

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

## @Timeout — 時間限制

```java
import org.eclipse.microprofile.faulttolerance.Timeout;

@Timeout(value = 5, unit = ChronoUnit.SECONDS)
public ProductInfo getProduct(Long id) {
    // Nếu > 5s → throw TimeoutException
    return productClient.getById(id);
}
```

### 結合重試 + 逾時

```java
@Retry(maxRetries = 3, delay = 1000)
@Timeout(5000)  // Mỗi lần try tối đa 5s
public ProductInfo getProductReliable(Long id) {
    return productClient.getById(id);
}
// Worst case: 3 retries × 5s timeout + 3 × 1s delay = 18s max
```

## @CircuitBreaker — 斷路器

斷路器透過「中斷」對失敗服務的呼叫來防止級聯故障：

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

## @Bulkhead — 限制並發調用

防止服務因過多並發請求而過載：

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

## @Fallback — 替換值

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

## 組合Annotation時的執行順序

同時使用多個註解時，執行順序：

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

## 結合一切 — 真實世界模式

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

## @RateLimit — 請求速率限制 (Quarkus 3.x)

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

## 級聯故障－現實生活中的例子

假設支付服務很慢（資料庫過載）：

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

**無容錯**：訂單服務因支付服務而終止（級聯故障）。

**具有容錯能力**：

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

結果：
- **超時3秒** → 30秒內不阻塞線程
- **斷路器** → 5/10 次失敗後，立即斷開 → 快速失敗
- **Bulkhead 5** → 只有 5 個執行緒呼叫 Payment，其餘執行緒服務其他請求
- **回退** → 佇列進入 Kafka，重試後台 → 使用者未被阻止

## 指標集成

SmallRye 容錯會在可用時自動公開指標 `quarkus-micrometer`：

```xml
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-micrometer-registry-prometheus</artifactId>
</dependency>
```

自動化指標可在 `/q/metrics`：

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

### Grafana 儀表板查詢範例

```promql
# Circuit Breaker open rate
rate(ft_circuitbreaker_opened_total[5m])

# Retry success rate
rate(ft_retry_calls_total{retryResult="valueReturned"}[5m])
/ rate(ft_retry_calls_total[5m])

# P95 bulkhead execution time
ft_bulkhead_runningDuration_seconds{quantile="0.95"}
```

## 透過 application.properties 配置

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

## 測試容錯能力

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

## 練習

1.添加 `@Retry` + `@Timeout` 用於產品服務 REST 用戶端調用
2. 實施 `@CircuitBreaker` 回退返回快取數據
3. 添加 `@Bulkhead` 限制對產品服務的並發調用
4. 創建 `ResilientProductClient` 帶有所有圖案的包裝
5. 創建 `ResilientPaymentClient` 使用後備隊列進入 Kafka
6. 透過覆蓋配置 `application.properties`
7. 新增 Micrometer 指標 — 驗證指標 `/q/metrics`
8. 測試：類比產品服務停機 → 驗證重試 → 電路開路 → 回退
9.（進階）為容錯指標建立 Grafana 儀表板

## 總結

- **`@Retry`** — 自動重試、指數退避支持
- **`@Timeout`** - 限制處理時間，防止線程被阻塞
- **`@CircuitBreaker`** — 當服務失敗太多時斷路（關閉→開啟→半開啟）
- **`@Bulkhead`**——限制並發調用，避免資源耗盡
- **`@Fallback`** — 當全部失敗或佇列重試時返回快取/預設數據
- **`@RateLimit`** — 限制請求率（請求/視窗）
- **執行順序**：Bulkhead → 斷路器 → 重試 → 逾時 → 方法 → 回退
- **級聯故障預防** — 結合了逾時 + 斷路器 + 隔板
- **指標** — 透過 Micrometer/Prometheus 自動公開
- **配置覆蓋**已通過 `application.properties` — 無需更改程式碼

下一篇文章：OpenTelemetry — 分散式追蹤和指標。
