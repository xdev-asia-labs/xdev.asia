---
id: 019d8a21-c110-7001-d001-e1f2a3b4c523
title: "Bài 23: Observability - Monitoring, Logging & Tracing"
slug: bai-23-observability-monitoring-logging-tracing
description: >-
  Three Pillars of Observability: Metrics, Logs, Traces.
  Prometheus + Grafana monitoring stack. Centralized logging
  (ELK/EFK). Distributed tracing (Jaeger, OpenTelemetry).
  Alerting strategies. SLI/SLO/SLA revisited. Observability
  cho microservices.
duration_minutes: 160
is_free: false
video_url: null
sort_order: 23
section_title: "Phần 6: Reliability, Security & Observability"
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: "System Architecture: From Zero to Hero"
  slug: system-architecture-from-zero-to-hero
---

## Giới thiệu

Monitoring cho biết **CÁI GÌ** đang sai. Observability cho biết **TẠI SAO** nó sai. Trong hệ thống distributed, observability là critical — bạn không thể fix cái bạn không thể thấy.

---

## 1. Three Pillars of Observability

```
┌────────────────────────────────────────────────────┐
│                 OBSERVABILITY                       │
│                                                     │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐      │
│  │ METRICS  │    │  LOGS    │    │ TRACES   │      │
│  │          │    │          │    │          │      │
│  │ What is  │    │ What     │    │ Where is │      │
│  │ happening│    │ happened │    │ the time │      │
│  │ now?     │    │ exactly? │    │ spent?   │      │
│  │          │    │          │    │          │      │
│  │Prometheus│    │ELK/Loki │    │Jaeger/   │      │
│  │Grafana   │    │Fluentd  │    │Zipkin    │      │
│  └──────────┘    └──────────┘    └──────────┘      │
│                                                     │
│  Numbers         Text Events     Request Flow       │
│  Time-series     Structured      Cross-service      │
│  Aggregatable    Searchable      Latency breakdown  │
└────────────────────────────────────────────────────┘
```

---

## 2. Metrics (Prometheus + Grafana)

### 2.1 Metric Types

```
Counter: Giá trị chỉ tăng
  http_requests_total{method="GET", status="200"} = 15234
  Use: Request count, error count, bytes transferred

Gauge: Giá trị lên xuống
  memory_usage_bytes = 1073741824
  Use: Temperature, queue size, active connections

Histogram: Phân phối giá trị
  http_request_duration_seconds_bucket{le="0.1"} = 5000
  http_request_duration_seconds_bucket{le="0.5"} = 8000
  http_request_duration_seconds_bucket{le="1.0"} = 9500
  Use: Latency percentiles, request sizes

Summary: Tương tự histogram, pre-calculated percentiles
  http_request_duration_seconds{quantile="0.99"} = 0.45
```

### 2.2 RED Method (for services)

```
Rate:    Requests per second
Errors:  Errors per second
Duration: Latency distribution

Dashboard:
  ┌─────────────────────────────────────┐
  │ Service: Order API                   │
  │                                      │
  │ Rate:     523 req/s  [▓▓▓▓▓░░░░░]   │
  │ Errors:   0.3%       [▓░░░░░░░░░]   │
  │ Duration: p50=12ms   p99=145ms       │
  │           [graph ~~~~~~~~~~~~~~~~~~~~│
  └─────────────────────────────────────┘
```

### 2.3 USE Method (for resources)

```
Utilization: % resource busy
Saturation:  Work queued/waiting
Errors:      Error count

CPU:    Utilization 75%, Saturation (load avg) 2.3, Errors 0
Memory: Utilization 82%, Saturation (swap) 100MB, Errors 0
Disk:   Utilization 60%, Saturation (I/O wait) 5%, Errors 2
Network: Utilization 30%, Saturation (TCP retransmit) 0.1%
```

### 2.4 Prometheus Architecture

```
┌─────────────┐         ┌──────────────┐
│ App Server  │◄─scrape─│  Prometheus  │
│ /metrics    │         │  Server      │
└─────────────┘         │              │
                        │ TSDB storage │
┌─────────────┐         │ PromQL query │
│ Database    │◄─scrape─│ Alert rules  │
│ Exporter    │         └──────┬───────┘
└─────────────┘                │
                        ┌──────▼───────┐
┌─────────────┐         │ Alertmanager │──► PagerDuty
│ Node        │◄─scrape─│              │──► Slack
│ Exporter    │         └──────────────┘
└─────────────┘                │
                        ┌──────▼───────┐
                        │   Grafana    │
                        │ Dashboards   │
                        └──────────────┘
```

---

## 3. Logging

### 3.1 Structured Logging

```
❌ Unstructured:
  "User 123 placed order 456 for $100.00"
  → Khó parse, search, aggregate

✅ Structured (JSON):
  {
    "timestamp": "2024-01-15T10:30:00Z",
    "level": "info",
    "service": "order-service",
    "trace_id": "abc123",
    "user_id": "123",
    "order_id": "456",
    "amount": 100.00,
    "message": "Order placed successfully"
  }
  → Dễ search, filter, aggregate
  → Correlate với traces (trace_id)
```

### 3.2 Log Levels

```
FATAL:   App sắp crash, cần intervention ngay
ERROR:   Operation failed, nhưng app vẫn chạy
WARN:    Sắp có vấn đề (disk 90%, high latency)
INFO:    Business events quan trọng
DEBUG:   Chi tiết cho troubleshooting
TRACE:   Rất chi tiết (function entry/exit)

Production: INFO + WARN + ERROR + FATAL
Debug mode: + DEBUG
Never in production: TRACE (quá nhiều data)
```

### 3.3 Centralized Logging (ELK)

```
┌─────────┐  ┌─────────┐  ┌─────────┐
│ App 1   │  │ App 2   │  │ App 3   │
│ stdout  │  │ stdout  │  │ stdout  │
└────┬────┘  └────┬────┘  └────┬────┘
     │            │            │
     ▼            ▼            ▼
┌─────────────────────────────────────┐
│ Fluentd / Filebeat / Vector        │ ← Collect & ship
└────────────────┬────────────────────┘
                 ▼
┌────────────────────────────────────┐
│ Elasticsearch / Loki              │ ← Store & index
└────────────────┬───────────────────┘
                 ▼
┌────────────────────────────────────┐
│ Kibana / Grafana                  │ ← Search & visualize
└────────────────────────────────────┘

Query example (Kibana):
  service:"order-service" AND level:"error" AND user_id:"123"
  → Tìm tất cả errors của user 123 trong order service
```

---

## 4. Distributed Tracing

### 4.1 Tại sao cần Tracing?

```
Request: GET /api/orders/123

Monolith: 1 log file, dễ theo dõi

Microservices:
  API Gateway → Order Service → User Service
                              → Inventory Service
                              → Payment Service

  "Request chậm 5 giây. Service nào gây ra?"
  
  Không có tracing → Phải check logs từng service
  Có tracing → Thấy ngay bottleneck
```

### 4.2 Trace Structure

```
Trace ID: abc-123 (toàn bộ request flow)

  ┌────────────────────────────────────────────────┐
  │ Span: API Gateway (500ms total)                │
  │ ├── Span: Order Service (450ms)                │
  │ │   ├── Span: DB Query (50ms)                  │
  │ │   ├── Span: User Service (30ms)              │
  │ │   ├── Span: Inventory Service (350ms) ← SLOW!│
  │ │   │   └── Span: DB Query (340ms) ← ROOT CAUSE│
  │ │   └── Span: Payment Service (15ms)           │
  │ └── Span: Response Serialization (5ms)         │
  └────────────────────────────────────────────────┘

Context Propagation:
  Trace ID + Span ID passed via HTTP headers
  traceparent: 00-abc123-span456-01
```

### 4.3 OpenTelemetry

```
OpenTelemetry (OTel): Vendor-neutral observability framework

┌─────────────────────────────────────┐
│ Application                         │
│ ┌─────────────────────────────────┐ │
│ │ OTel SDK                        │ │
│ │ Auto-instrumentation            │ │
│ │ (HTTP, DB, gRPC, messaging)     │ │
│ └──────────────┬──────────────────┘ │
└────────────────┼────────────────────┘
                 │ OTLP (protocol)
                 ▼
┌─────────────────────────────────────┐
│ OTel Collector                      │
│ Receive → Process → Export          │
└──────────┬──────────┬───────────────┘
           │          │
     ┌─────▼───┐  ┌───▼──────┐
     │ Jaeger  │  │Prometheus│
     │(traces) │  │(metrics) │
     └─────────┘  └──────────┘

Ưu điểm: Instrument once, export anywhere
```

---

## 5. Alerting

### 5.1 Alert Design

```
✅ Tốt:
  - Alert trên SYMPTOMS (user-facing impact)
  - "Error rate > 1% trong 5 phút"
  - "P99 latency > 2 giây"
  
❌ Xấu:
  - Alert trên CAUSES (noisy)
  - "CPU > 80%" (có thể bình thường)
  - "1 instance down" (auto-scaling xử lý)

Alert Severity:
  P1 (Critical): Revenue impact, data loss
    → Page on-call IMMEDIATELY
  P2 (High): Degraded performance, partial outage
    → Page during business hours
  P3 (Medium): Non-critical issue
    → Slack notification, fix next business day
  P4 (Low): Informational
    → Ticket, fix when convenient
```

### 5.2 On-Call Best Practices

```
1. Runbooks cho mỗi alert
2. Escalation path rõ ràng
3. Post-incident review (blameless)
4. Alert fatigue prevention:
   - Mỗi alert phải actionable
   - Review alert hàng tháng (remove noisy ones)
   - Max 5-10 pages/week
5. Rotation: 1 tuần on-call, ít nhất 2 người trong pool
```

---

## 6. Observability Dashboard

```
┌─────────────────────────────────────────────────────┐
│ System Overview                                      │
│                                                       │
│ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐  │
│ │ Requests/s   │ │ Error Rate   │ │ P99 Latency  │  │
│ │    1,234     │ │   0.12%      │ │   145ms      │  │
│ │ ▓▓▓▓▓▓▓░░░  │ │ ▓░░░░░░░░░  │ │ ▓▓▓░░░░░░░  │  │
│ └──────────────┘ └──────────────┘ └──────────────┘  │
│                                                       │
│ ┌──────────────────────────────────────────────────┐ │
│ │ Service Health Map                                │ │
│ │ API Gateway [✅] → Order [✅] → Payment [⚠️]     │ │
│ │                  → User [✅]  → Email [❌]        │ │
│ └──────────────────────────────────────────────────┘ │
│                                                       │
│ ┌──────────────────────────────────────────────────┐ │
│ │ Recent Alerts                                     │ │
│ │ 🔴 P1: Payment latency > 2s (10 min ago)         │ │
│ │ 🟡 P3: Email service connection timeout           │ │
│ └──────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────┘
```

---

## Tổng kết

| Pillar | Tool | Purpose |
|--------|------|---------|
| Metrics | Prometheus + Grafana | What is happening now |
| Logs | ELK / Loki | What happened (details) |
| Traces | Jaeger / Tempo | Where is time spent |
| Alerts | Alertmanager / PagerDuty | When to take action |

---

## Bài tập

1. **Monitoring Setup:** Microservices: API Gateway, User, Order, Payment, Notification. Cho mỗi service, liệt kê 5 metrics quan trọng nhất cần monitor. Dùng RED method.

2. **Tracing Analysis:** Trace cho thấy: API Gateway (2s) → Order (1.8s) → DB (50ms) → Payment (1.7s) → External API (1.5s). Identify bottleneck. Đề xuất 3 cách optimize.

3. **Alert Design:** Thiết kế alerting system cho e-commerce. Định nghĩa 3 P1, 3 P2, 3 P3 alerts. Cho mỗi alert: condition, threshold, escalation, runbook summary.
