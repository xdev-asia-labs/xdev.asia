---
id: 019e2a10-a117-7a01-b001-f1a2b3c4d517
title: 'Bài 17: OpenTelemetry — Distributed Tracing & Metrics'
slug: bai-17-opentelemetry-distributed-tracing-metrics
description: >-
  Quarkus OpenTelemetry integration, distributed tracing với Jaeger/Tempo,
  Micrometer metrics, custom spans, Grafana dashboards.
duration_minutes: 100
is_free: false
video_url: null
sort_order: 16
section_title: "Phần 5: Resilience & Observability"
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: "Quarkus Microservices: Từ Cơ bản đến Production"
  slug: quarkus-microservices-tu-co-ban-den-production
---

## Giới thiệu

Observability = **Tracing** + **Metrics** + **Logging**. Trong microservices, một request đi qua nhiều services — OpenTelemetry (OTel) tự động thu thập distributed traces, cho phép theo dõi request journey qua toàn bộ hệ thống.

## Three Pillars of Observability

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

## Distributed Tracing Setup

### Dependencies

```xml
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-opentelemetry</artifactId>
</dependency>
```

### Cấu hình

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

### Tự động instrumented

Quarkus OTel tự động trace:
- REST endpoints (incoming requests)
- REST Client (outgoing calls)
- gRPC server/client
- Kafka producer/consumer
- JDBC/Hibernate queries
- CDI beans

### Xem traces trong Jaeger

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

Truy cập: `http://localhost:16686` → Chọn service → Xem traces

## Custom Spans

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

## Trace Context Propagation

Khi Order Service gọi Product Service, trace ID tự động propagate:

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

## Micrometer Metrics

### Dependency

```xml
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-micrometer-registry-prometheus</artifactId>
</dependency>
```

### Built-in Metrics

Quarkus tự expose metrics tại `/q/metrics`:

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

### Custom Metrics

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

### Timed Annotation

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

## Prometheus + Grafana Stack

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

### prometheus.yml

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

## Structured Logging — JSON

```properties
# JSON logging cho production
%prod.quarkus.log.console.json=true
%prod.quarkus.log.console.json.additional-field.service.value=product-service
%prod.quarkus.log.console.json.additional-field.environment.value=${ENV:dev}

# Correlation via Trace ID
quarkus.log.console.format=%d{HH:mm:ss} %-5p traceId=%X{traceId} [%c{2.}] (%t) %s%e%n
```

## Bài tập

1. Thêm OpenTelemetry extension, cấu hình export to Jaeger
2. Tạo custom spans với `@WithSpan` và programmatic Tracer
3. Thêm Micrometer metrics: Counter, Timer, Gauge
4. Deploy Prometheus + Grafana stack với Docker Compose
5. Tạo Grafana dashboard hiển thị: request rate, error rate, latency (RED metrics)
6. Tạo distributed trace đi qua: Order Service → Product Service → DB

## Tổng kết

- **OpenTelemetry** — standard cho distributed tracing, tự động instrument
- **Jaeger/Tempo** visualize traces — thấy request journey across services
- **`@WithSpan`** + programmatic `Tracer` cho custom spans
- **Micrometer** expose metrics tại `/q/metrics` → Prometheus scrape
- **RED Metrics**: Rate, Errors, Duration — dashboard quan trọng nhất
- **Structured JSON Logging** + trace ID correlation cho log aggregation

Bài tiếp theo: Caching, Health Checks & API Gateway.
