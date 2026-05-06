---
id: 019d8a21-c110-7001-d001-e1f2a3b4c523
title: 'レッスン 23: 可観測性 - モニタリング、ロギング、トレース'
slug: bai-23-observability-monitoring-logging-tracing
description: >-
  可観測性の 3 つの柱: メトリクス、ログ、トレース。 Prometheus + Grafana 監視スタック。集中ログ
  (ELK/EFK)。分散トレーシング (Jaeger、OpenTelemetry)。アラート戦略。 SLI/SLO/SLA
  を再検討します。マイクロサービスの可観測性。
duration_minutes: 160
is_free: false
video_url: null
sort_order: 23
section_title: 'パート 6: 信頼性、セキュリティ、可観測性'
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 'システムアーキテクチャ: ゼロからヒーローへ'
  slug: system-architecture-from-zero-to-hero
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3756" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3756)"/>

  <!-- Decorations -->
  <g>
    <circle cx="848" cy="274" r="26" fill="#fbbf24" opacity="0.09"/>
    <circle cx="1096" cy="182" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="844" cy="90" r="14" fill="#fbbf24" opacity="0.07"/>
    <circle cx="1092" cy="258" r="8" fill="#fbbf24" opacity="0.11"/>
    <circle cx="840" cy="166" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="54" x2="1100" y2="134" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="84" x2="1050" y2="154" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="979.1147367097487,139.5 979.1147367097487,168.5 954,183 928.8852632902513,168.5 928.8852632902513,139.5 954,125" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🏗️ アーキテクチャ — レッスン 23</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 23: 可観測性 - モニタリング、</tspan>
      <tspan x="60" dy="42">ロギングとトレース</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">システムアーキテクチャ: ゼロからヒーローへ</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 6: 信頼性、セキュリティ、可観測性</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

監視により、**何が**起こっているのかがわかります。可観測性により、それが間違っている**理由**がわかります。分散システムでは可観測性が重要です。目に見えないものは修正できません。

---

## 1. 可観測性の 3 つの柱

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

## 2. メトリクス (Prometheus + Grafana)

### 2.1 メトリクスの種類

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

### 2.2 RED メソッド (サービス用)

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

### 2.3 USEメソッド(リソース用)

```
Utilization: % resource busy
Saturation:  Work queued/waiting
Errors:      Error count

CPU:    Utilization 75%, Saturation (load avg) 2.3, Errors 0
Memory: Utilization 82%, Saturation (swap) 100MB, Errors 0
Disk:   Utilization 60%, Saturation (I/O wait) 5%, Errors 2
Network: Utilization 30%, Saturation (TCP retransmit) 0.1%
```

### 2.4 プロメテウスのアーキテクチャ

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

## 3. ロギング

### 3.1 構造化ロギング

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

### 3.2 ログレベル

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

### 3.3 集中ログ (ELK)

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

## 4. 分散トレーシング

### 4.1 なぜトレースが必要なのでしょうか?

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

### 4.2 トレース構造

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

## 5. アラート

### 5.1 アラートの設計

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

### 5.2 オンコールのベストプラクティス

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

## 6. 可観測性ダッシュボード

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

## 概要

|柱 |ツール |目的 |
|----------|----------|----------|
|メトリクス |プロメテウス + グラファナ |今何が起こっているのか |
|ログ |エルク / ロキ |何が起こったのか（詳細） |
|痕跡 |イェーガー / テンポ |どこに時間を費やしているのか |
|アラート |アラートマネージャー / PagerDuty |いつ行動を起こすべきか |

---

## 演習

1. **監視設定:** マイクロサービス: API ゲートウェイ、ユーザー、注文、支払い、通知。各サービスについて、監視すべき最も重要な 5 つの指標をリストします。 RED メソッドを使用します。

2. **トレース分析:** トレースは、API ゲートウェイ (2 秒) → 注文 (1.8 秒) → DB (50 ミリ秒) → 支払い (1.7 秒) → 外部 API (1.5 秒) を示します。ボトルネックを特定します。最適化する 3 つの方法を提案します。

3. **アラートの設計:** 電子商取引用のアラート システムを設計します。 3 つの P1、3 つの P2、3 つの P3 アラートの定義。各アラート: 条件、しきい値、エスカレーション、ランブックの概要。
