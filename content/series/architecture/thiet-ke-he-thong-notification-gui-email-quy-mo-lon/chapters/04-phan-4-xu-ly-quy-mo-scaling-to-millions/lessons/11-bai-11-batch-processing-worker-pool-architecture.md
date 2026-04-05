---
id: 019e7a10-a111-7001-d001-f1e2d3c4b511
title: "Bài 11: Batch Processing & Worker Pool Architecture"
slug: bai-11-batch-processing-worker-pool-architecture
description: >-
  Chunking strategy, worker pool design, dynamic scaling, graceful shutdown,
  batch database operations, memory-efficient processing, progress tracking và
  resumable campaigns.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 11
section_title: "Phần 4: Xử lý quy mô — Scaling to Millions"
course:
  id: 019e7a10-a100-7001-d001-f1e2d3c4b5a6
  title: "Thiết kế Hệ thống Notification gửi hàng triệu Email"
  slug: thiet-ke-he-thong-notification-gui-email-quy-mo-lon
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7447" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7447)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1066" cy="208" r="34" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="1032" cy="94" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="998" cy="240" r="30" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="964" cy="126" r="28" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="930" cy="272" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="168" x2="1100" y2="248" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="198" x2="1050" y2="268" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1055.2390923627308,196.5 1055.2390923627308,239.5 1018,261 980.7609076372692,239.5 980.7609076372692,196.5 1018,175" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🏗️ Kiến trúc — Bài 11</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 11: Batch Processing &amp; Worker Pool</tspan>
      <tspan x="60" dy="42">Architecture</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Thiết kế Hệ thống Notification gửi hàng triệu Email</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 4: Xử lý quy mô — Scaling to Millions</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Rate limiting giúp gửi đúng tốc độ, nhưng muốn xử lý **triệu recipients** hiệu quả thì phải chia nhỏ công việc, phân phối đều cho worker, và đảm bảo có thể resume khi sự cố xảy ra giữa chiến dịch.

Bài này đi vào kiến trúc worker pool và batch orchestration cho production workloads.

---

## 1. Vì sao không xử lý từng email một?

Nếu mỗi recipient là một job riêng biệt ngay từ đầu, hệ thống sẽ đối mặt với:

- Queue quá lớn, topic backlog khổng lồ.
- DB lookup lặp lại nhiều lần.
- Overhead serialize/deser cho từng message.
- Progress tracking rời rạc, khó resume.

### Hướng tiếp cận hợp lý

1. Tạo **campaign snapshot** của recipients.
2. Chia snapshot thành **batches ổn định**.
3. Mỗi batch được gán vào worker pool.
4. Trong batch, worker render và gửi theo quota hiện tại.
5. Cập nhật progress định kỳ, không update DB sau từng email nếu không cần.

---

## 2. Chunking strategy cho danh sách recipients

### Tiêu chí chọn batch size

| Batch size | Ưu điểm | Nhược điểm | Khi dùng |
|------------|---------|------------|----------|
| 100 | Dễ retry, độ mịn cao | Overhead queue lớn | Transactional bursts |
| 500 | Cân bằng | Cần quản lý progress tốt | Phổ biến nhất |
| 1,000 | Hiệu quả hơn cho bulk APIs | Retry đắt hơn | Marketing campaigns |
| 5,000+ | Tối ưu network call | Khó resume chính xác | Dùng cho preprocessing |

### Khuyến nghị

- Với API bulk như SES/SendGrid, tạo **logical batch** 500-1000 recipients.
- Với SMTP hoặc template render nặng, giữ batch nhỏ hơn 200-500.
- Nếu personalization phức tạp, batch nên nhỏ để tránh memory spike.

### Snapshot recipients

```sql
CREATE TABLE campaign_recipients_snapshot (
  campaign_id TEXT NOT NULL,
  recipient_id BIGINT NOT NULL,
  email TEXT NOT NULL,
  locale TEXT,
  timezone TEXT,
  template_variables JSONB,
  batch_no INT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  PRIMARY KEY (campaign_id, recipient_id)
);

CREATE INDEX idx_campaign_batch_status
  ON campaign_recipients_snapshot (campaign_id, batch_no, status);
```

Snapshot giúp chiến dịch không bị thay đổi giữa chừng khi user segment ở hệ thống nguồn cập nhật liên tục.

---

## 3. Worker pool architecture

```
Campaign Planner
    │
    ├── Create recipient snapshot
    ├── Split to batch jobs
    └── Publish batch jobs
         │
         ▼
   Batch Queue / Topic
         │
         ├── Worker Group A: critical
         ├── Worker Group B: high
         └── Worker Group C: bulk marketing
                │
                ▼
          Send Adapter Layer
                │
                ▼
         ESP / SMTP / Webhooks
```

### Tách worker theo workload

| Worker group | Loại traffic | Số lượng | Đặc điểm |
|--------------|--------------|----------|----------|
| critical-workers | OTP, reset password | ít nhưng luôn sẵn | latency thấp |
| standard-workers | transactional bình thường | trung bình | ổn định |
| bulk-workers | marketing campaign | co giãn mạnh | throughput cao |

Tách riêng worker group giúp marketing campaign không gây starvation cho luồng giao dịch quan trọng.

---

## 4. Fetch dữ liệu theo cách tiết kiệm memory

### Sai lầm phổ biến

```python
recipients = db.query("SELECT * FROM recipients WHERE campaign_id = ?", campaign_id)
for recipient in recipients:
    process(recipient)
```

Với vài triệu bản ghi, cách này dễ làm worker ăn hàng GB RAM.

### Streaming/pagination đúng hơn

```python
def fetch_batch(db, campaign_id: str, batch_no: int, limit: int = 500):
    return db.fetch_all(
        """
        SELECT recipient_id, email, locale, timezone, template_variables
        FROM campaign_recipients_snapshot
        WHERE campaign_id = %s
          AND batch_no = %s
          AND status IN ('pending', 'retry')
        ORDER BY recipient_id
        LIMIT %s
        """,
        (campaign_id, batch_no, limit),
    )

def process_batch(batch_job):
    rows = fetch_batch(db, batch_job.campaign_id, batch_job.batch_no)
    rendered = [render_email(row) for row in rows]
    send_results = email_provider.send_bulk(rendered)
    persist_results(batch_job.campaign_id, batch_job.batch_no, send_results)
```

### Quy tắc vận hành

- Chỉ giữ một batch trong memory tại một thời điểm.
- Render xong gửi ngay, không tích lũy toàn campaign trong RAM.
- Ghi trạng thái theo batch hoặc micro-batch để giảm write amplification.

---

## 5. Dynamic scaling với Kubernetes

### HPA dựa trên queue depth

```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: bulk-email-workers
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: bulk-email-workers
  minReplicas: 4
  maxReplicas: 80
  metrics:
    - type: External
      external:
        metric:
          name: kafka_consumer_lag
          selector:
            matchLabels:
              consumer_group: bulk-workers
        target:
          type: AverageValue
          averageValue: "5000"
```

### Không nên autoscale chỉ dựa trên CPU

CPU thấp chưa chắc queue khỏe. Worker có thể đang idle vì bị rate limiter khóa hoặc vì provider chậm phản hồi. Queue lag, pending batches, average send latency mới là các tín hiệu gần nghiệp vụ hơn.

---

## 6. Graceful shutdown và resumable processing

Worker gửi email mà bị kill giữa chừng là chuyện bình thường khi deploy hoặc autoscale. Thiết kế phải tính trước.

### Nguyên tắc

1. Worker nhận batch job.
2. Đánh dấu batch là `processing` với lease timeout.
3. Trong lúc xử lý, heartbeat định kỳ.
4. Nếu worker chết, lease hết hạn và batch quay lại hàng đợi.
5. Gửi email phải idempotent theo `message_id`.

### Lease table ví dụ

```sql
CREATE TABLE batch_leases (
  campaign_id TEXT NOT NULL,
  batch_no INT NOT NULL,
  worker_id TEXT NOT NULL,
  leased_until TIMESTAMPTZ NOT NULL,
  heartbeat_at TIMESTAMPTZ NOT NULL,
  PRIMARY KEY (campaign_id, batch_no)
);
```

### Tránh duplicate gửi mail

- Mỗi recipient/message phải có `message_id` ổn định.
- Ghi log outbound với unique constraint theo `message_id`.
- Khi retry hoặc reclaim lease, check outbound state trước khi gửi lại.

---

## 7. Progress tracking cho campaign lớn

### Những số liệu cần nhìn thấy theo thời gian thực

| Metric | Ý nghĩa |
|--------|---------|
| total_recipients | Tổng số recipients trong snapshot |
| queued_batches | Batch đang chờ xử lý |
| processing_batches | Batch đang chạy |
| sent_count | Email đã gửi tới ESP |
| delivered_count | Email đã delivery confirmed |
| failed_count | Fail vĩnh viễn |
| eta_minutes | Ước lượng hoàn thành |

### Aggregate state table

```sql
CREATE TABLE campaign_progress (
  campaign_id TEXT PRIMARY KEY,
  total_recipients BIGINT NOT NULL,
  sent_count BIGINT NOT NULL DEFAULT 0,
  failed_count BIGINT NOT NULL DEFAULT 0,
  processing_batches INT NOT NULL DEFAULT 0,
  queued_batches INT NOT NULL DEFAULT 0,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

### ETA đơn giản

```text
ETA = remaining_recipients / effective_send_rate_per_second
```

`effective_send_rate` phải là tốc độ thực nhận từ metrics, không phải tốc độ lý thuyết trên giấy.

---

## 8. Các tối ưu thực chiến

### Optimization checklist

- Gom DB writes bằng batch update thay vì update từng row.
- Cache template compile result.
- Tách rendering CPU-bound khỏi sending IO-bound nếu cần.
- Dùng gzip/compression cho payload lớn giữa services.
- Không nhét toàn bộ template variables nặng vào queue nếu có thể chỉ gửi reference.

### Khi nào nên tách riêng rendering service?

- Template quá phức tạp hoặc personalization dùng nhiều dữ liệu phụ.
- Cần A/B testing, localization, content validation riêng.
- Worker sending cần giữ cực gọn để scale tuyến tính.

---

## Tổng kết

Batch processing và worker pool là lớp biến một danh sách triệu recipients thành các đơn vị công việc có thể kiểm soát, retry, resume và autoscale. Nếu thiết kế đúng, chiến dịch lớn sẽ vận hành như nhiều bài toán nhỏ độc lập thay vì một khối rủi ro khổng lồ.

**Bài tiếp theo:** Chúng ta sẽ xử lý các tình huống fail, từ retry chiến lược đến Dead Letter Queue và quy trình reprocessing an toàn.