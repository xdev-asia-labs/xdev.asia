---
id: 019e4a33-d426-7b20-c001-b1c2d3e4f526
title: "Bài 26: Full-Stack Observability — Logs, Metrics & Traces"
slug: bai-26-full-stack-observability-logs-metrics-traces
description: >-
  3 pillars of Observability: Logs, Metrics, Traces. OpenTelemetry setup cho Node.js/React. Distributed tracing: trace request từ Micro Frontend qua API Gateway đến Microservices. Grafana stack: Loki, Prometheus, Tempo.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 26
section_title: "Phần 9: Observability & Production Readiness"
course:
  id: 019e4a33-d400-7b20-c001-b1c2d3e4f5a8
  title: "Thiết kế hệ thống Microservices & Micro Frontend — Từ cơ bản đến Production"
  slug: thiet-ke-he-thong-microservices-micro-frontend
---

## Giới thiệu

Trong kiến trúc distributed, debug bằng `console.log` không khả thi. Khi 1 request đi qua 5 services, bạn cần **observability** để biết request đi đâu, mất bao lâu, và fail ở đâu.


![3 trụ cột Observability — Logs, Metrics, Traces](/storage/uploads/2026/04/mfe-ms-diagram-bai26-observability.png)

---

## 1. Three Pillars of Observability

```
┌─────────────────────────────────────────────┐
│              Observability                  │
├──────────────┬──────────────┬───────────────┤
│    Logs      │   Metrics    │   Traces      │
│              │              │               │
│ What happened│ How system   │ Request flow  │
│ (events)     │ performs     │ across svcs   │
│              │ (numbers)    │ (journey)     │
│              │              │               │
│ Loki/ELK     │ Prometheus   │ Tempo/Jaeger  │
└──────────────┴──────────────┴───────────────┘
```

---

## 2. Distributed Tracing

### 2.1 Trace một request end-to-end

```
User clicks "Place Order" trên frontend:

Trace ID: abc-123-def
├── Span 1: Shell App → POST /api/orders (200ms)
│   ├── Span 2: API Gateway → route to Order Service (5ms)
│   │   ├── Span 3: Order Service → validate (10ms)
│   │   ├── Span 4: Order Service → call Product Service (50ms)
│   │   │   └── Span 5: Product Service → DB query (15ms)
│   │   ├── Span 6: Order Service → call Payment Service (100ms)
│   │   │   └── Span 7: Payment Service → Stripe API (80ms)
│   │   └── Span 8: Order Service → publish OrderPlaced event (5ms)
│   └── Span 9: API Gateway → response (5ms)
└── Total: 200ms

→ Bottleneck: Payment Service → Stripe API (80ms) = 40% total
```

### 2.2 OpenTelemetry Setup (Node.js)

```javascript
// tracing.js - Setup OpenTelemetry
const { NodeSDK } = require('@opentelemetry/sdk-node');
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');

const sdk = new NodeSDK({
  traceExporter: new OTLPTraceExporter({
    url: 'http://otel-collector:4318/v1/traces',
  }),
  instrumentations: [
    getNodeAutoInstrumentations({
      '@opentelemetry/instrumentation-http': { enabled: true },
      '@opentelemetry/instrumentation-express': { enabled: true },
      '@opentelemetry/instrumentation-pg': { enabled: true },
    }),
  ],
  serviceName: 'product-service',
});

sdk.start();
```

---

## 3. Metrics (Prometheus)

### 3.1 Key Metrics (RED Method)

| Metric | What | Alert When |
|--------|------|-----------|
| **Rate** | Requests per second | Sudden drop |
| **Errors** | Error rate (5xx) | > 1% |
| **Duration** | Latency (p50, p95, p99) | p99 > 2s |

### 3.2 Custom Metrics

```javascript
const { meter } = require('@opentelemetry/api');

const orderCounter = meter.createCounter('orders_created_total', {
  description: 'Total orders created',
});

const orderDuration = meter.createHistogram('order_processing_duration_ms', {
  description: 'Order processing time',
});

// Usage
orderCounter.add(1, { status: 'success', payment_method: 'stripe' });
orderDuration.record(duration, { service: 'order-service' });
```

---

## 4. Structured Logging (Loki)

```javascript
// Structured JSON logs
const logger = require('pino')({
  level: 'info',
});

app.use((req, res, next) => {
  const traceId = req.headers['x-trace-id'] || generateTraceId();
  req.log = logger.child({
    traceId,
    service: 'product-service',
    requestId: req.id,
  });
  next();
});

// Usage
req.log.info({ productId: '123', action: 'getProduct' }, 'Product fetched');
req.log.error({ error: err.message, stack: err.stack }, 'Product not found');
```

---

## 5. Grafana Stack

```
┌──────────────────────────────────────────┐
│              Grafana UI                  │
│  Dashboards │ Alerts │ Explore │ Traces  │
├──────────┬──────────┬────────────────────┤
│  Loki    │Prometheus│     Tempo          │
│  (Logs)  │(Metrics) │    (Traces)        │
├──────────┴──────────┴────────────────────┤
│         OpenTelemetry Collector          │
│  Receives → Processes → Exports          │
├──────────────────────────────────────────┤
│         Applications                     │
│  Microservices → OTLP → Collector        │
│  MFE → Web Vitals → Collector            │
└──────────────────────────────────────────┘
```

---

## 6. Frontend Observability (Micro Frontend)

```javascript
// Web Vitals tracking
import { onLCP, onFID, onCLS } from 'web-vitals';

onLCP((metric) => {
  sendToCollector('web_vitals_lcp', metric.value, {
    mfe: 'product-mfe',
    page: window.location.pathname,
  });
});

// Error tracking
window.addEventListener('error', (event) => {
  sendToCollector('frontend_error', {
    message: event.message,
    stack: event.error?.stack,
    mfe: detectMFE(event.filename),
  });
});
```

---

## Tóm tắt

| Pillar | Tool | Purpose |
|--------|------|---------|
| **Logs** | Loki + Pino | What happened (structured JSON) |
| **Metrics** | Prometheus | How system performs (RED method) |
| **Traces** | Tempo + OTEL | Request flow across services |
| **Frontend** | Web Vitals | Core Web Vitals per MFE |
| **Dashboards** | Grafana | Unified visualization |

---

**Bài tiếp theo:** [Bài 27: Performance Optimization — Frontend & Backend](/series/thiet-ke-he-thong-microservices-micro-frontend/bai-27-performance-optimization-frontend-backend)
