---
id: 019e7a10-a114-7001-d001-f1e2d3c4b514
title: "Bài 14: Monitoring, Metrics & Alerting"
slug: bai-14-monitoring-metrics-alerting
description: >-
  Key metrics cho notification platform, Prometheus và Grafana dashboard,
  distributed tracing với OpenTelemetry, queue depth monitoring, worker health
  checks, SLA tracking và runbook cho incidents phổ biến.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 14
section_title: "Phần 5: Deliverability, Monitoring & Production"
course:
  id: 019e7a10-a100-7001-d001-f1e2d3c4b5a6
  title: "Thiết kế Hệ thống Notification gửi hàng triệu Email"
  slug: thiet-ke-he-thong-notification-gui-email-quy-mo-lon
---

## Giới thiệu

Không có metrics, một chiến dịch 10 triệu email chỉ là một cú ném niềm tin vào bóng tối. Hệ thống notification production phải trả lời được ngay lập tức các câu hỏi: đang gửi nhanh đến đâu, kẹt ở đâu, provider nào lỗi, chiến dịch nào sắp vỡ SLA.

---

## 1. Quan sát hệ thống theo từng lớp

### Bốn lớp metrics chính

| Lớp | Ví dụ metric |
|-----|--------------|
| Business | emails sent, delivered, complaints, campaign ETA |
| Application | render latency, send latency, retry count |
| Queue | consumer lag, queue depth, DLQ size |
| Infrastructure | CPU, memory, network, pod restarts |

### Anti-pattern cần tránh

- Chỉ nhìn CPU/RAM mà không nhìn queue lag.
- Chỉ nhìn `sent_count` mà không nhìn delivery/bounce/complaint.
- Không gắn metric với `provider`, `campaign_type`, `recipient_domain`.

---

## 2. Bộ metrics cốt lõi cho email platform

### Business metrics

| Metric | Ý nghĩa |
|--------|---------|
| `emails_requested_total` | tổng số email được yêu cầu gửi |
| `emails_sent_total` | số email đã accepted bởi provider |
| `emails_delivered_total` | số email delivery confirmed |
| `emails_bounced_total` | bounce theo loại |
| `emails_complained_total` | complaint spam |
| `campaign_eta_seconds` | ETA hoàn thành chiến dịch |

### Application metrics

| Metric | Labels nên có |
|--------|----------------|
| `template_render_seconds` | template_id, locale |
| `provider_send_seconds` | provider, priority |
| `retry_attempt_total` | error_class, provider |
| `throttle_decision_total` | limit_type, result |
| `worker_batch_duration_seconds` | worker_group |

### Queue metrics

| Metric | Ý nghĩa |
|--------|---------|
| `queue_depth` | tổng pending jobs |
| `consumer_lag` | mức backlog so với producer |
| `retry_queue_depth` | số job đang đợi retry |
| `dlq_messages_total` | số lượng đi vào DLQ |

---

## 3. Prometheus instrumentation

### Ví dụ metric definitions

```python
from prometheus_client import Counter, Histogram, Gauge

emails_sent_total = Counter(
    'emails_sent_total',
    'Total emails accepted by provider',
    ['provider', 'priority', 'campaign_type']
)

provider_send_seconds = Histogram(
    'provider_send_seconds',
    'Latency of provider send API',
    ['provider'],
    buckets=(0.05, 0.1, 0.25, 0.5, 1, 2, 5, 10)
)

queue_depth = Gauge(
    'queue_depth',
    'Current queue depth',
    ['queue_name']
)
```

### Lưu ý khi dùng labels

- Chỉ thêm labels có cardinality kiểm soát được.
- Không gắn email address hay `message_id` vào metric labels.
- Với campaign, thường nên aggregate theo `campaign_type` hoặc campaign top-N, không phải tất cả campaigns cùng lúc.

---

## 4. Dashboard nên hiển thị gì?

### Dashboard điều hành chiến dịch

- Send rate hiện tại theo provider.
- Delivery rate và bounce rate theo domain.
- ETA hoàn thành campaign.
- Queue backlog và retry backlog.
- Complaint rate theo 5 phút.

### Dashboard cho on-call engineer

- Top error classes trong 15 phút gần nhất.
- Circuit breaker state của từng provider.
- Worker pod restarts.
- DB latency, Redis latency.
- Webhook ingestion lag.

### Dashboard cho deliverability owner

- Open/click trends theo domain.
- Hard bounce/complaint theo segment.
- IP warming progress.
- Domain reputation indicators.

---

## 5. Alerting: cảnh báo ít nhưng đúng

### Ví dụ alert rules

```yaml
groups:
  - name: notification-alerts
    rules:
      - alert: NotificationDLQSpike
        expr: increase(dlq_messages_total[5m]) > 200
        for: 10m
        labels:
          severity: page
        annotations:
          summary: "DLQ spike detected"

      - alert: ProviderThrottleRateHigh
        expr: rate(retry_attempt_total{error_class="provider_throttled"}[5m]) > 20
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "Provider throttling rate is high"

      - alert: CriticalQueueBacklog
        expr: queue_depth{queue_name="critical-email"} > 1000
        for: 2m
        labels:
          severity: page
        annotations:
          summary: "Critical email backlog exceeded threshold"
```

### Nguyên tắc alerting

- Page chỉ khi có rủi ro SLA hoặc data loss.
- Warning khi cần quan sát nhưng chưa cần đánh thức on-call.
- Alert phải dẫn tới một hành động rõ ràng, không chỉ thông báo chung chung.

---

## 6. Distributed tracing với OpenTelemetry

Một email đi qua nhiều hop: API -> queue -> worker -> provider -> webhook -> analytics. Nếu không có trace, rất khó nối câu chuyện của một message khi có incident.

### Propagate correlation identifiers

```python
from opentelemetry import trace

tracer = trace.get_tracer(__name__)

def enqueue_email(job):
    with tracer.start_as_current_span("enqueue_email") as span:
        span.set_attribute("campaign.id", job.campaign_id)
        span.set_attribute("message.id", job.message_id)
        span.set_attribute("priority", job.priority)
        publish_to_queue(job)
```

### Các field nên propagate

- `trace_id`
- `campaign_id`
- `message_id`
- `provider`
- `recipient_domain`

Trace không thay thế metrics, nhưng cực kỳ hữu ích để phân tích một lỗi cụ thể hoặc latency outlier.

---

## 7. SLO/SLA cho notification system

### Ví dụ SLO thực tế

| Loại traffic | SLO |
|--------------|-----|
| OTP / password reset | 99% gửi tới provider trong < 15 giây |
| Order confirmation | 99% trong < 2 phút |
| Marketing campaign | 95% hoàn thành trong ETA cam kết |

### Error budget mindset

Nếu marketing workload đang tiêu thụ quá nhiều error budget của hệ thống, bạn phải giảm ưu tiên hoặc kéo dài thời gian chạy campaign. SLO giúp team ra quyết định bằng dữ liệu thay vì tranh luận cảm tính.

---

## 8. Runbook cho các sự cố phổ biến

### Incident: queue backlog tăng mạnh

1. Kiểm tra provider throttling rate.
2. Kiểm tra autoscaler có scale lên không.
3. Kiểm tra Redis limiter có khóa quá chặt không.
4. Nếu là marketing campaign, cân nhắc giảm send rate hoặc pause.

### Incident: complaint rate tăng bất thường

1. Xác định campaign nào đang gây spike.
2. Pause campaign đó trước.
3. Kiểm tra segment và nội dung email.
4. Giảm throughput toàn domain nếu ảnh hưởng rộng.

### Incident: delivery giảm nhưng sent vẫn cao

1. Kiểm tra webhooks có bị mất hoặc chậm không.
2. Kiểm tra mailbox provider-specific issues.
3. So sánh theo domain: Gmail hay Outlook bị ảnh hưởng riêng?
4. Kiểm tra reputation dashboards.

---

## Tổng kết

Monitoring tốt giúp bạn thấy hệ thống notification dưới góc nhìn vận hành thật: throughput, quality, SLA và risk. Metrics đúng sẽ rút ngắn thời gian điều tra, giảm false alarm và cho phép scale chiến dịch với sự tự tin cao hơn nhiều.

**Bài tiếp theo:** Chúng ta khép lại series bằng một case study production, triển khai hệ thống gửi 10 triệu email end-to-end trên hạ tầng thực tế.