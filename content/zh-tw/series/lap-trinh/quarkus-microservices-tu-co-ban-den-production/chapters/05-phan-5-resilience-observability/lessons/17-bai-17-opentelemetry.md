---
id: 019e2a10-a117-7a01-b001-f1a2b3c4d517
title: 第 17 課：OpenTelemetry — 分散式追蹤與指標
slug: bai-17-opentelemetry-distributed-tracing-metrics
description: Quarkus OpenTelemetry 整合、Jaeger/Tempo 分散式追蹤、Micrometer 指標、自訂跨度、Grafana 儀表板。
duration_minutes: 100
is_free: false
video_url: null
sort_order: 16
section_title: 第 5 部分：彈性和可觀察性
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: Quarkus 微服務：從基礎知識到生產
  slug: quarkus-microservices-tu-co-ban-den-production
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1156" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1156)"/>

  <!-- Decorations -->
  <g>
    <circle cx="992" cy="286" r="10" fill="#f87171" opacity="0.11"/>
    <circle cx="884" cy="198" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="776" cy="110" r="12" fill="#f87171" opacity="0.13"/>
    <circle cx="668" cy="282" r="28" fill="#f87171" opacity="0.09"/>
    <circle cx="1060" cy="194" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="166" x2="1100" y2="246" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="196" x2="1050" y2="266" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="951.507041555162,95.5 951.507041555162,136.5 916,157 880.492958444838,136.5 880.492958444838,95.50000000000001 916,75" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">💻 程式設計 — 第 16 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 17 課：OpenTelemetry — 分散式</tspan>
      <tspan x="60" dy="42">追蹤與指標</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Quarkus 微服務：從基礎知識到生產</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：彈性和可觀察性</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

可觀察性 = **追蹤** + **指標** + **日誌記錄**。在微服務中，一個請求會遍歷多個服務——OpenTelemetry (OTel) 自動收集分散式跟踪，從而允許在整個系統中追蹤請求旅程。

## 可觀察性的三大支柱

```
┌─────────────────────────────────────────────────┐
│                 Observability                    │
├────────────────┬────────────────┬────────────────┤
│   Tracing      │   Metrics      │   Logging      │
│ (Request flow) │ (Aggregated)   │ (Events)       │
├────────────────┼────────────────┼────────────────┤
│ Jaeger/Tempo   │ Prometheus     │ Loki/ELK       │
│ Zipkin         │ Grafana        │ Fluentd        │
└────────────────┴────────────────┴────────────────┘
           ↑ All powered by OpenTelemetry
```

## 分散式追蹤設置

### 依賴關係

```xml
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-opentelemetry</artifactId>
</dependency>
```

### 配置

```properties
# application.properties
quarkus.otel.enabled=true
quarkus.otel.exporter.otlp.endpoint=http://localhost:4317
quarkus.otel.exporter.otlp.protocol=grpc

# Service name (quan trọng cho tracing)
quarkus.otel.resource.attributes=service.name=product-service,service.version=1.0.0

# Sample rate (1.0 = 100%, production nên giảm)
quarkus.otel.traces.sampler=parentbased_traceidratio
quarkus.otel.traces.sampler.arg=1.0
%prod.quarkus.otel.traces.sampler.arg=0.1

# Propagation
quarkus.otel.propagators=tracecontext,baggage
```

### 自動偵測

Quarkus OTel 自動追蹤：
- REST 端點（傳入請求）
- REST 用戶端（撥出電話）
- gRPC 伺服器/客戶端
- 卡夫卡生產者/消費者
- JDBC/Hibernate 查詢
- CDI 豆

### 在 Jaeger 中查看痕跡

```yaml
# docker-compose.yml
services:
  jaeger:
    image: jaegertracing/all-in-one:1.53
    ports:
      - "16686:16686"  # Jaeger UI
      - "4317:4317"    # OTLP gRPC
      - "4318:4318"    # OTLP HTTP
    environment:
      COLLECTOR_OTLP_ENABLED: true
```

訪問： `http://localhost:16686` → 選擇服務 → 看痕跡

## 自訂跨度

```java
import io.opentelemetry.api.trace.Tracer;
import io.opentelemetry.api.trace.Span;
import io.opentelemetry.api.trace.StatusCode;
import io.opentelemetry.instrumentation.annotations.WithSpan;
import io.opentelemetry.instrumentation.annotations.SpanAttribute;

@ApplicationScoped
public class ProductService {

    @Inject
    Tracer tracer;

    // Annotation-based
    @WithSpan("ProductService.findById")
    public ProductDTO getById(
            @SpanAttribute("product.id") Long id) {
        Product product = productRepo.findByIdOptional(id)
            .orElseThrow(() ->
                new ResourceNotFoundException("Product", id));
        return ProductDTO.from(product);
    }

    // Programmatic
    public List<ProductDTO> search(String keyword) {
        Span span = tracer.spanBuilder("product.search")
            .setAttribute("search.keyword", keyword)
            .startSpan();

        try (var scope = span.makeCurrent()) {
            List<Product> results =
                productRepo.searchFullText(keyword);

            span.setAttribute("search.results.count",
                results.size());

            return results.stream()
                .map(ProductDTO::from).toList();
        } catch (Exception e) {
            span.setStatus(StatusCode.ERROR,
                e.getMessage());
            span.recordException(e);
            throw e;
        } finally {
            span.end();
        }
    }
}
```

## 追蹤上下文傳播

當訂單服務呼叫產品服務時，追蹤 ID 會自動傳播：

```
[Browser] → [Order Service] → [Product Service] → [PostgreSQL]
  │              │                    │                  │
  │    Trace: abc123                 │                  │
  │    Span: order-create            │                  │
  │              │                    │                  │
  │              │── REST Client ─→  │                  │
  │              │   traceparent:     │                  │
  │              │   abc123           │                  │
  │              │                    │── DB Query ─→   │
  │              │                    │   Span: SELECT   │
```

## 千分尺指標

### 依賴關係

```xml
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-micrometer-registry-prometheus</artifactId>
</dependency>
```

### 內建指標

Quarkus 公開了自己的指標 `/q/metrics`：

```bash
curl http://localhost:8081/q/metrics

# HTTP metrics
http_server_requests_seconds_count{method="GET",uri="/api/v1/products",status="200"} 150
http_server_requests_seconds_sum{method="GET",uri="/api/v1/products",status="200"} 12.5

# JVM metrics
jvm_memory_used_bytes{area="heap"} 134217728
jvm_threads_live_threads 25

# DB Connection Pool
agroal_active_count{datasource="default"} 5
agroal_available_count{datasource="default"} 15
```

### 自訂指標

```java
import io.micrometer.core.instrument.MeterRegistry;
import io.micrometer.core.instrument.Counter;
import io.micrometer.core.instrument.Timer;
import io.micrometer.core.instrument.Gauge;

@ApplicationScoped
public class ProductService {

    private final Counter productCreatedCounter;
    private final Counter productViewCounter;
    private final Timer searchTimer;

    @Inject
    public ProductService(MeterRegistry registry,
                          ProductRepository productRepo) {
        this.productCreatedCounter = Counter.builder(
                "products.created.total")
            .description("Total products created")
            .register(registry);

        this.productViewCounter = Counter.builder(
                "products.views.total")
            .description("Total product views")
            .tag("type", "detail")
            .register(registry);

        this.searchTimer = Timer.builder("products.search.time")
            .description("Product search duration")
            .register(registry);

        // Gauge — current value
        Gauge.builder("products.active.count",
                productRepo, repo -> repo.count("status", "ACTIVE"))
            .description("Number of active products")
            .register(registry);
    }

    public ProductDTO getById(Long id) {
        productViewCounter.increment();
        // ...
    }

    @Transactional
    public ProductDTO create(CreateProductRequest req) {
        // ...
        productCreatedCounter.increment();
        return ProductDTO.from(product);
    }

    public List<ProductDTO> search(String keyword) {
        return searchTimer.record(() -> {
            // actual search logic
            return productRepo.searchFullText(keyword)
                .stream().map(ProductDTO::from).toList();
        });
    }
}
```

### 定時註釋

```java
import io.micrometer.core.annotation.Timed;
import io.micrometer.core.annotation.Counted;

@Timed(value = "order.creation.time",
       description = "Time to create an order")
@Counted(value = "order.created.count",
         description = "Orders created")
@Transactional
public OrderDTO createOrder(CreateOrderRequest request) {
    // ...
}
```

## Prometheus + Grafana 堆疊

```yaml
# docker-compose.yml
services:
  prometheus:
    image: prom/prometheus:v2.49.0
    ports: ["9090:9090"]
    volumes:
      - ./monitoring/prometheus.yml:/etc/prometheus/prometheus.yml

  grafana:
    image: grafana/grafana:10.3.0
    ports: ["3001:3000"]
    environment:
      GF_SECURITY_ADMIN_PASSWORD: admin
    volumes:
      - ./monitoring/grafana/dashboards:/var/lib/grafana/dashboards
      - ./monitoring/grafana/provisioning:/etc/grafana/provisioning
```

### 普羅米修斯.yml

```yaml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'product-service'
    metrics_path: /q/metrics
    static_configs:
      - targets: ['host.docker.internal:8081']

  - job_name: 'order-service'
    metrics_path: /q/metrics
    static_configs:
      - targets: ['host.docker.internal:8082']

  - job_name: 'payment-service'
    metrics_path: /q/metrics
    static_configs:
      - targets: ['host.docker.internal:8083']
```

## 結構化日誌記錄 — JSON

```properties
# JSON logging cho production
%prod.quarkus.log.console.json=true
%prod.quarkus.log.console.json.additional-field.service.value=product-service
%prod.quarkus.log.console.json.additional-field.environment.value=${ENV:dev}

# Correlation via Trace ID
quarkus.log.console.format=%d{HH:mm:ss} %-5p traceId=%X{traceId} [%c{2.}] (%t) %s%e%n
```

## 練習

1.新增OpenTelemetry擴展，配置匯出到Jaeger
2. 建立自訂跨度 `@WithSpan` 和程式化追蹤器
3. 新增千分尺指標：計數器、計時器、儀表
4. 使用 Docker Compose 部署 Prometheus + Grafana 堆疊
5. 建立一個 Grafana 儀表板，顯示：請求率、錯誤率、延遲（RED 指標）
6. 建立分散式跟踪，遍歷：訂單服務→產品服務→資料庫

## 總結

- **OpenTelemetry** — 分散式追蹤、自動檢測的標準
- **Jaeger/Tempo** 視覺化痕跡 - 查看跨服務的請求旅程
- **`@WithSpan`** + 程式化 `Tracer` 對於自訂跨度
- **千分尺**公開指標 `/q/metrics` → 普羅米修斯刮擦
- **RED Metrics**：速率、錯誤、持續時間 — 最重要的儀表板
- **結構化 JSON 日誌記錄** + 用於日誌聚合的追蹤 ID 關聯

下一篇文章：快取、運行狀況檢查和 API 閘道。
