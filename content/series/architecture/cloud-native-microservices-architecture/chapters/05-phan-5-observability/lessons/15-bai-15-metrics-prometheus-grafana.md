---
id: 019d8a22-c315-7a10-b001-a1b2c3d4e515
title: "Bài 15: Metrics — Prometheus & Grafana"
slug: bai-15-metrics-prometheus-grafana
description: >-
  RED Method, USE Method, Prometheus architecture, PromQL cơ bản,
  ServiceMonitor trong Kubernetes, Grafana dashboard design,
  alerting rules và Alertmanager configuration.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 15
section_title: "Phần 5: Observability — Ba trụ cột"
course:
  id: 019d8a22-c300-7a10-b001-a1b2c3d4e5f7
  title: "Cloud Native Microservices Architecture"
  slug: cloud-native-microservices-architecture
---

## Giới thiệu

Trong hệ thống microservices, bạn không thể "nhìn vào bên trong" một service đang chạy như debug truyền thống. **Metrics** là nền tảng đầu tiên của Observability — cung cấp dữ liệu số đo lường tình trạng và hiệu năng hệ thống theo thời gian.

**Prometheus + Grafana** là bộ đôi tiêu chuẩn de-facto trong cloud native ecosystem cho metrics collection và visualization.

---

## 1. Các phương pháp đo lường

### 1.1 RED Method — Cho Services

**RED Method** của Tom Wilkie tập trung vào ba chỉ số quan trọng nhất cho mỗi service:

```
R — Rate     : Số lượng request service xử lý mỗi giây
E — Errors   : Tỷ lệ phần trăm request thất bại
D — Duration : Thời gian phân phối (latency percentiles)
```

Ví dụ dashboard cho Order Service:

```
┌─────────────────────────────────────────────────────────┐
│                  Order Service — RED                    │
├──────────────────┬──────────────────┬───────────────────┤
│ Rate             │ Error Rate       │ Duration (p99)    │
│ 1,247 req/s      │ 0.3%             │ 145ms             │
│ ↑ +12% vs 1h ago│ ↓ Normal         │ → Within SLO      │
└──────────────────┴──────────────────┴───────────────────┘
```

### 1.2 USE Method — Cho Resources

**USE Method** của Brendan Gregg cho infrastructure resources:

```
U — Utilization : Tỷ lệ thời gian resource đang busy (%)
S — Saturation  : Mức độ "hàng đợi" extra work (queue length)
E — Errors      : Số lượng lỗi từ resource
```

Áp dụng cho từng resource:

| Resource | Utilization | Saturation | Errors |
|----------|-------------|------------|--------|
| CPU | `rate(cpu_seconds[5m])` | Load average > cores | Machine check errors |
| Memory | `1 - mem_free/mem_total` | Swap rate, OOM kills | |
| Disk I/O | `rate(disk_io_time[5m])` | Disk queue length | I/O errors |
| Network | `rate(net_bytes[5m]) / capacity` | Packet drops/retransmit | NIC errors |

### 1.3 Golden Signals — Cho End-to-End

Google SRE định nghĩa **Four Golden Signals**:

1. **Latency** — Thời gian xử lý request (phân biệt success vs error latency)
2. **Traffic** — Demand trên hệ thống (requests/sec, concurrent users)
3. **Errors** — Request failure rate (explicit 5xx, implicit wrong data)
4. **Saturation** — Mức độ đầy của system resources

---

## 2. Prometheus Architecture

### 2.1 Tổng quan

```
┌─────────────────────────────────────────────────────────────┐
│                      Prometheus Server                      │
│                                                             │
│  ┌──────────────┐   ┌──────────────┐   ┌────────────────┐  │
│  │ Retrieval    │   │ TSDB         │   │ HTTP Server    │  │
│  │ (Scraper)    │   │ (Time-Series │   │ (Query/API)    │  │
│  │              │   │  Database)   │   │                │  │
│  └──────┬───────┘   └──────────────┘   └────────┬───────┘  │
│         │                                        │          │
└─────────┼────────────────────────────────────────┼──────────┘
          │ /metrics scrape                        │ PromQL
          ▼                                        ▼
 ┌──────────────────┐                    ┌─────────────────┐
 │ Targets:         │                    │   Grafana       │
 │ - App /metrics   │                    │   Alertmanager  │
 │ - Node Exporter  │                    │   Other clients │
 │ - cAdvisor       │                    └─────────────────┘
 │ - kube-state-mts │
 └──────────────────┘
```

**Pull-based model**: Prometheus chủ động scrape metrics từ targets mỗi 15-30 giây. Khác với push-based (InfluxDB, StatsD).

### 2.2 Metric Types

```python
# Counter — Chỉ tăng, dùng cho counts và rates
http_requests_total{method="POST", status="200"} 1027

# Gauge — Tăng giảm tự do, dùng cho current values
memory_usage_bytes 153344000
active_connections 42

# Histogram — Phân phối latency, tạo buckets tự động
http_request_duration_seconds_bucket{le="0.1"} 8521
http_request_duration_seconds_bucket{le="0.5"} 9812
http_request_duration_seconds_sum 1234.6789
http_request_duration_seconds_count 9987

# Summary — Như Histogram nhưng tính percentile phía client
http_request_duration_seconds{quantile="0.99"} 0.145
```

### 2.3 Exposition Format

Mỗi service expose metrics tại `/metrics` endpoint:

```java
// Spring Boot — thêm dependency
// actuator + micrometer-registry-prometheus

// Sau đó endpoint tự động có:
// GET /actuator/prometheus
```

```go
// Go — prometheus/client_golang
import "github.com/prometheus/client_golang/prometheus"
import "github.com/prometheus/client_golang/prometheus/promauto"

var (
    httpRequestsTotal = promauto.NewCounterVec(
        prometheus.CounterOpts{
            Name: "http_requests_total",
            Help: "Total HTTP requests",
        },
        []string{"method", "path", "status"},
    )

    httpDuration = promauto.NewHistogramVec(
        prometheus.HistogramOpts{
            Name:    "http_request_duration_seconds",
            Buckets: prometheus.DefBuckets,
        },
        []string{"method", "path"},
    )
)
```

---

## 3. Kubernetes Integration

### 3.1 kube-prometheus-stack

Cách đơn giản nhất: cài bộ `kube-prometheus-stack` Helm chart — bao gồm Prometheus, Grafana, Alertmanager và các exporter cần thiết:

```bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update

helm upgrade --install kube-prometheus-stack \
  prometheus-community/kube-prometheus-stack \
  --namespace monitoring \
  --create-namespace \
  --set grafana.adminPassword=<your-password> \
  --set prometheus.prometheusSpec.retention=15d
```

### 3.2 ServiceMonitor

`ServiceMonitor` là CRD (Custom Resource Definition) cho Prometheus Operator — định nghĩa cách scrape metrics từ service:

```yaml
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: order-service
  namespace: services-prod
  labels:
    # Phải match với selector của Prometheus
    release: kube-prometheus-stack
spec:
  namespaceSelector:
    matchNames:
      - services-prod
  selector:
    matchLabels:
      app: order-service
  endpoints:
    - port: http
      path: /actuator/prometheus
      interval: 15s
      scrapeTimeout: 10s
```

### 3.3 PodMonitor

Khi service không có Kubernetes Service (chỉ có Pod trực tiếp):

```yaml
apiVersion: monitoring.coreos.com/v1
kind: PodMonitor
metadata:
  name: worker-pods
spec:
  selector:
    matchLabels:
      app: async-worker
  podMetricsEndpoints:
    - port: metrics
      path: /metrics
      interval: 30s
```

---

## 4. PromQL — Prometheus Query Language

### 4.1 Cú pháp cơ bản

```promql
# Instant vector — giá trị tại thời điểm hiện tại
http_requests_total

# Range vector — giá trị trong khoảng thời gian
http_requests_total[5m]

# Filtering bằng labels
http_requests_total{job="order-service", status=~"5.."}

# Operators
http_requests_total{status=~"5.."} / http_requests_total  # ratio
```

### 4.2 Functions quan trọng

```promql
# rate() — tốc độ thay đổi per second (dùng cho Counter)
rate(http_requests_total[5m])

# irate() — instant rate (nhạy hơn với spike ngắn)
irate(http_requests_total[5m])

# increase() — tổng tăng trong khoảng thời gian
increase(http_requests_total[1h])

# histogram_quantile() — percentile từ Histogram
histogram_quantile(0.99, rate(http_request_duration_seconds_bucket[5m]))

# sum() với by/without
sum(rate(http_requests_total[5m])) by (service)

# topk()
topk(5, rate(http_requests_total[5m]))
```

### 4.3 Các query thực tế

```promql
# Error rate (5xx) cho tất cả services
sum(rate(http_requests_total{status=~"5.."}[5m])) by (service)
/
sum(rate(http_requests_total[5m])) by (service)

# p99 latency theo service
histogram_quantile(
  0.99,
  sum(rate(http_request_duration_seconds_bucket[5m])) by (service, le)
)

# CPU usage trên các pods
sum(rate(container_cpu_usage_seconds_total{container!=""}[5m])) by (pod, namespace)

# Memory usage (bytes)
sum(container_memory_rss{container!=""}) by (pod, namespace)

# Pod restart count
kube_pod_container_status_restarts_total{namespace="services-prod"}

# Service availability (based on successful requests)
1 - (
  sum(rate(http_requests_total{status=~"5.."}[5m])) by (service)
  /
  sum(rate(http_requests_total[5m])) by (service)
)
```

---

## 5. Grafana Dashboard

### 5.1 Cấu trúc Dashboard tốt

Nguyên tắc thiết kế dashboard:

```
Level 1 — Overview (Top Row)
  Tổng quan toàn bộ hệ thống:
  - Total request rate
  - Overall error rate
  - System availability
  - Active alerts count

Level 2 — Service Overview
  Metrics per service:
  - Rate, Errors, Duration (RED)
  - Service status

Level 3 — Drill-down
  Chi tiết khi có vấn đề:
  - Request breakdown by endpoint
  - Latency percentiles (p50, p95, p99)
  - Error messages
  - Dependencies
```

### 5.2 Dashboard as Code

Lưu dashboard dưới dạng JSON vào Git:

```yaml
# Grafana ConfigMap trong Kubernetes
apiVersion: v1
kind: ConfigMap
metadata:
  name: order-service-dashboard
  namespace: monitoring
  labels:
    grafana_dashboard: "1"  # Auto-discovered bởi Grafana sidecar
data:
  order-service.json: |
    {
      "title": "Order Service",
      "uid": "order-service",
      "panels": [ ... ]
    }
```

---

## 6. Alerting

### 6.1 PrometheusRule

Định nghĩa alerting rules:

```yaml
apiVersion: monitoring.coreos.com/v1
kind: PrometheusRule
metadata:
  name: order-service-alerts
  namespace: services-prod
  labels:
    release: kube-prometheus-stack
spec:
  groups:
    - name: order-service.rules
      interval: 30s
      rules:
        # Error rate cao
        - alert: HighErrorRate
          expr: |
            sum(rate(http_requests_total{service="order-service", status=~"5.."}[5m]))
            /
            sum(rate(http_requests_total{service="order-service"}[5m]))
            > 0.05
          for: 2m
          labels:
            severity: critical
            team: backend
          annotations:
            summary: "High error rate on order-service"
            description: "Error rate {{ $value | humanizePercentage }} > 5%"

        # Latency cao
        - alert: HighLatency
          expr: |
            histogram_quantile(0.99,
              sum(rate(http_request_duration_seconds_bucket{service="order-service"}[5m]))
              by (le)
            ) > 1.0
          for: 5m
          labels:
            severity: warning
          annotations:
            summary: "High p99 latency on order-service"
            description: "p99 latency is {{ $value | humanizeDuration }}"

        # Pod down
        - alert: PodDown
          expr: |
            kube_deployment_status_replicas_available{
              namespace="services-prod",
              deployment="order-service"
            } < kube_deployment_spec_replicas{
              namespace="services-prod",
              deployment="order-service"
            }
          for: 1m
          labels:
            severity: critical
          annotations:
            summary: "Order service pod(s) down"
```

### 6.2 Alertmanager

Alertmanager nhận alerts từ Prometheus và gửi notifications:

```yaml
# alertmanager.yaml
global:
  slack_api_url: 'https://hooks.slack.com/services/...'

route:
  group_by: ['alertname', 'service']
  group_wait: 30s
  group_interval: 5m
  repeat_interval: 1h
  receiver: 'default'
  routes:
    - match:
        severity: critical
      receiver: 'pagerduty-critical'
      continue: true
    - match:
        severity: warning
      receiver: 'slack-warnings'

receivers:
  - name: 'default'
    slack_configs:
      - channel: '#alerts'
        text: '{{ .CommonAnnotations.summary }}'

  - name: 'pagerduty-critical'
    pagerduty_configs:
      - service_key: '<key>'

  - name: 'slack-warnings'
    slack_configs:
      - channel: '#alerts-warning'
        send_resolved: true
```

---

## 7. SLI / SLO / SLA

Kết hợp metrics với **Service Level Objectives**:

```yaml
# SLO Definition
service: order-service
slo:
  # 99.9% requests thành công trong 30 ngày
  - name: availability
    target: 99.9%
    indicator:
      ratio:
        good_events: http_requests_total{status!~"5.."}
        total_events: http_requests_total

  # 95% requests hoàn thành trong 200ms
  - name: latency
    target: 95%
    indicator:
      ratio:
        good_events: http_request_duration_seconds_bucket{le="0.2"}
        total_events: http_request_duration_seconds_count
```

**Error Budget**:
- SLO 99.9% → Error Budget = 0.1% = 43.8 phút/tháng
- Khi hết error budget → freeze feature deployment, focus on reliability

---

## 8. Best Practices

**Đặt tên metrics đúng chuẩn:**
```
# Format: <namespace>_<subsystem>_<name>_<unit>
http_request_duration_seconds
database_queries_total
cache_hit_ratio
background_jobs_processed_total
```

**Cardinality Control:**
```
# ĐÚNG — cardinality thấp, controllable labels
http_requests_total{method, status_code, service}

# SAI — cardinality explode làm Prometheus OOM
http_requests_total{user_id, request_id, ip_address}
```

**Recording Rules** để pre-compute expensive queries:
```yaml
groups:
  - name: recording_rules
    rules:
      - record: job:http_requests_total:rate5m
        expr: sum(rate(http_requests_total[5m])) by (job)
```

---

## Tóm tắt

| Khái niệm | Mục đích |
|-----------|---------|
| RED Method | Đo lường health của từng service |
| USE Method | Đo lường health của infrastructure resource |
| ServiceMonitor | Tích hợp Prometheus với Kubernetes |
| PromQL | Query và tính toán metrics |
| PrometheusRule | Định nghĩa alerting rules |
| Alertmanager | Route và gửi notifications |
| SLO/SLI | Định lượng reliability targets |

**Bài tiếp theo**: Logging — Structured Logging, Loki & ELK Stack
