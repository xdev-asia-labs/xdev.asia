---
id: 019e2a10-a117-7a01-b001-f1a2b3c4d517
title: 'レッスン 17: OpenTelemetry — 分散トレースとメトリクス'
slug: bai-17-opentelemetry-distributed-tracing-metrics
description: >-
  Quarkus OpenTelemetry 統合、Jaeger/Tempo による分散トレーシング、Micrometer メトリクス、カスタム
  スパン、Grafana ダッシュボード。
duration_minutes: 100
is_free: false
video_url: null
sort_order: 16
section_title: 'パート 5: 回復力と可観測性'
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: 'Quarkus マイクロサービス: 基本から運用まで'
  slug: quarkus-microservices-tu-co-ban-den-production
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">💻 プログラミング — レッスン 16</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 17: OpenTelemetry — 分散</tspan>
      <tspan x="60" dy="42">トレースとメトリクス</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Quarkus マイクロサービス: 基本から運用まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 5: 回復力と可観測性</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

可観測性 = **トレース** + **メトリクス** + **ロギング**。マイクロサービスでは、リクエストは複数のサービスを横断します。OpenTelemetry (OTel) は分散トレースを自動的に収集し、リクエストの過程をシステム全体で追跡できるようにします。

## 可観測性の 3 つの柱

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

## 分散トレーシングのセットアップ

### 依存関係

```xml
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-opentelemetry</artifactId>
</dependency>
```

### 構成

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

### 自動的に計測される

Quarkus OTel は以下を自動的にトレースします。
- REST エンドポイント (受信リクエスト)
- REST クライアント (発信)
- gRPC サーバー/クライアント
- Kafka プロデューサー/コンシューマー
- JDBC/Hibernate クエリ
- CDI Bean

### イェーガーで痕跡を確認

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

アクセス: `http://localhost:16686` → サービスを選択 → トレースを表示

## カスタム スパン

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

## トレースコンテキストの伝播

Order Service が Product Service を呼び出すと、トレース ID が自動的に伝播されます。

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

## マイクロメーターのメトリクス

### 依存関係

```xml
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-micrometer-registry-prometheus</artifactId>
</dependency>
```

### 組み込みメトリクス

Quarkus は独自のメトリクスを次の場所で公開しています。 `/q/metrics`:

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

### カスタムメトリクス

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

### 時間指定の注釈

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

## プロメテウス + グラファナ スタック

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

### プロメテウス.yml

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

## 構造化ログ - JSON

```properties
# JSON logging cho production
%prod.quarkus.log.console.json=true
%prod.quarkus.log.console.json.additional-field.service.value=product-service
%prod.quarkus.log.console.json.additional-field.environment.value=${ENV:dev}

# Correlation via Trace ID
quarkus.log.console.format=%d{HH:mm:ss} %-5p traceId=%X{traceId} [%c{2.}] (%t) %s%e%n
```

## 演習

1. OpenTelemetry 拡張機能を追加し、Jaeger へのエクスポートを構成します
2. カスタム スパンを作成します。 `@WithSpan` およびプログラマティックトレーサー
3. マイクロメーターのメトリクスを追加: カウンター、タイマー、ゲージ
4. Docker Compose を使用して Prometheus + Grafana スタックをデプロイする
5. リクエスト レート、エラー レート、レイテンシ (RED メトリクス) を表示する Grafana ダッシュボードを作成します。
6. 注文サービス → 製品サービス → DB を経由する分散トレースを作成します。

## 概要

- **OpenTelemetry** — 分散トレーシング、自動インストルメンテーションの標準
- **Jaeger/Tempo** トレースを視覚化します — サービス間のリクエストの過程を確認します
- **`@WithSpan`** + プログラマティック `Tracer` カスタムスパンの場合
- **Micrometer** は次の場所でメトリクスを公開します `/q/metrics` →プロメテウス削り
- **RED メトリクス**: レート、エラー、期間 - 最も重要なダッシュボード
- **構造化された JSON ログ** + ログ集約のためのトレース ID の関連付け

次の記事: キャッシュ、ヘルスチェック、API ゲートウェイ。
