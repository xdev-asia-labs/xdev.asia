---
id: 019e7a10-a112-7001-d001-f1e2d3c4b512
title: "Bài 12: Retry, Dead Letter Queue & Error Handling"
slug: bai-12-retry-dead-letter-queue-error-handling
description: >-
  Retry strategies, exponential backoff, jitter, dead letter queue design,
  error classification, poison message handling, compensation logic và alerting.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 12
section_title: "Phần 4: Xử lý quy mô — Scaling to Millions"
course:
  id: 019e7a10-a100-7001-d001-f1e2d3c4b5a6
  title: "Thiết kế Hệ thống Notification gửi hàng triệu Email"
  slug: thiet-ke-he-thong-notification-gui-email-quy-mo-lon
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3687" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3687)"/>

  <!-- Decorations -->
  <g>
    <circle cx="990" cy="140" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="880" cy="90" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="770" cy="40" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="660" cy="250" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1050" cy="200" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="120" x2="1100" y2="200" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="150" x2="1050" y2="220" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1050.3108891324553,202.5 1050.3108891324553,237.5 1020,255 989.6891108675446,237.5 989.6891108675446,202.5 1020,185" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🏗️ Kiến trúc — Bài 12</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 12: Retry, Dead Letter Queue &amp; Error</tspan>
      <tspan x="60" dy="42">Handling</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Thiết kế Hệ thống Notification gửi hàng triệu Email</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 4: Xử lý quy mô — Scaling to Millions</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Ở quy mô lớn, lỗi không còn là ngoại lệ mà là trạng thái mặc định của hệ thống. SMTP timeout, provider 429, DNS lookup chậm, webhook không về, database lock contention, payload lỗi dữ liệu. Muốn production-ready, bạn phải thiết kế error handling như một phần trung tâm của kiến trúc.

---

## 1. Phân loại lỗi trước khi nói đến retry

Retry chỉ hiệu quả khi lỗi là tạm thời. Nếu lỗi là vĩnh viễn mà vẫn retry, bạn đang tạo retry storm.

### Error taxonomy

| Nhóm lỗi | Ví dụ | Có retry? | Hành động |
|----------|-------|------------|-----------|
| Transient infrastructure | network timeout, DNS timeout | Có | exponential backoff |
| Provider throttling | HTTP 429, SMTP 421 | Có | giảm tốc + retry |
| Temporary mailbox issues | mailbox full, greylisting | Có giới hạn | retry chậm |
| Permanent recipient failure | user unknown, invalid domain | Không | mark bounced |
| Content/policy failure | blocked content, policy violation | Không | move to manual review |
| Internal bug | null field, bad template render | Không ngay | isolate, DLQ |

### Rule quan trọng

- Retry theo **loại lỗi**, không retry theo cảm tính.
- Lưu error code gốc từ provider để đủ dữ liệu phân loại.
- Định nghĩa mapping rõ ràng từ provider error sang error class nội bộ.

---

## 2. Retry policy hợp lý

### Ví dụ policy matrix

| Error class | Max retries | Delay policy |
|-------------|-------------|--------------|
| network_timeout | 5 | 5s, 15s, 30s, 60s, 120s |
| provider_throttled | 8 | 10s + jitter, gắn với adaptive throttling |
| soft_bounce | 3 | 15m, 1h, 6h |
| rendering_failure | 0 | đi thẳng DLQ |
| invalid_recipient | 0 | mark permanent failure |

### Exponential backoff with jitter

```python
import random

def next_retry_delay(base_seconds: int, attempt: int, max_seconds: int = 3600) -> int:
    delay = min(base_seconds * (2 ** (attempt - 1)), max_seconds)
    jitter = random.randint(0, max(1, delay // 4))
    return delay + jitter

for attempt in range(1, 6):
    print(attempt, next_retry_delay(5, attempt))
```

Jitter giúp các worker không cùng lúc retry một lỗi và tạo thêm spike lên provider.

---

## 3. Retry queue và scheduled reprocessing

### Vì sao không đẩy lại ngay queue chính?

Nếu job fail và lập tức quay lại queue chính, worker có thể bốc lại ngay tức thì, dẫn đến vòng lặp nóng vô ích. Retry cần có **thời gian chờ có chủ đích**.

### Mô hình phổ biến

```
send-queue
   │ success
   ├──────────────▶ sent-status
   │
   │ transient failure
   ▼
retry-scheduler
   │
   ├── retry in 5s
   ├── retry in 1m
   └── retry in 15m
   │
   ▼
send-queue
   │
   └── after max retry -> DLQ
```

### Redis Sorted Set cho delayed retry

```python
def schedule_retry(redis_client, message_id: str, payload: dict, retry_at_epoch: int):
    redis_client.zadd(
        'email:retry:zset',
        {json.dumps({'message_id': message_id, 'payload': payload}): retry_at_epoch}
    )
```

Một scheduler riêng sẽ poll các item đến hạn và republish vào queue chính.

---

## 4. Dead Letter Queue thiết kế như thế nào?

DLQ không phải là bãi rác. Nó là khu cách ly để điều tra, sửa và reprocess có kiểm soát.

### Khi nào message vào DLQ?

- Quá số lần retry.
- Payload hỏng hoặc vi phạm schema.
- Template render lỗi lặp lại.
- Provider trả về lỗi policy/permanent failure nhưng vẫn cần audit.
- Unknown error class chưa có mapping an toàn.

### Nội dung cần giữ trong DLQ message

```json
{
  "message_id": "msg_019e7a10_dead1",
  "campaign_id": "camp_flash_sale_april",
  "recipient": "bad-user@example.com",
  "error_class": "rendering_failure",
  "error_code": "TEMPLATE_VARIABLE_MISSING",
  "error_message": "variable first_name is required",
  "attempt_count": 3,
  "last_failed_at": "2026-04-01T14:00:00Z",
  "original_payload": {
    "template_id": "flash_sale_v2",
    "variables": {"discount_code": "FLASH30"}
  }
}
```

### Nguyên tắc vận hành DLQ

- DLQ phải searchable theo campaign, provider, error class.
- Có dashboard top error types.
- Reprocess chỉ được phép qua tool/flow kiểm soát.
- Không tự động re-drive toàn bộ DLQ nếu chưa hiểu nguyên nhân gốc.

---

## 5. Poison message và isolation

Poison message là message khiến worker crash hoặc fail lặp vô hạn. Nếu không cô lập, nó sẽ phá toàn bộ consumer group.

### Cách xử lý

1. Giới hạn số lần attempt rất thấp cho unknown/internal errors.
2. Bọc bước parse/render/send trong boundary rõ ràng.
3. Ghi `error_class = poison_message` nếu worker fail nhiều lần trên cùng payload.
4. Chuyển sang DLQ và cảnh báo kỹ sư trực ca.

### Defensive validation trước khi gửi

```python
def validate_job(job):
    required_fields = ['message_id', 'recipient', 'template_id', 'campaign_id']
    missing = [field for field in required_fields if not job.get(field)]
    if missing:
        raise ValueError(f"Missing required fields: {missing}")

    if '@' not in job['recipient']['email']:
        raise ValueError('Invalid recipient email')

    return True
```

Validation sớm giúp chặn lỗi trước khi nó đi sâu hơn vào pipeline.

---

## 6. Circuit breaker cho external providers

Khi provider đang lỗi diện rộng, retry liên tục chỉ làm tình hình tệ hơn.

### State machine đơn giản

| State | Ý nghĩa | Hành động |
|-------|---------|-----------|
| closed | provider bình thường | gửi bình thường |
| open | provider lỗi vượt ngưỡng | dừng traffic, chuyển failover |
| half-open | thử lại ít traffic | đánh giá phục hồi |

### Pseudocode

```python
class CircuitBreaker:
    def __init__(self, failure_threshold=10, recovery_seconds=60):
        self.failure_threshold = failure_threshold
        self.recovery_seconds = recovery_seconds
        self.failures = 0
        self.state = 'closed'

    def on_success(self):
        self.failures = 0
        self.state = 'closed'

    def on_failure(self):
        self.failures += 1
        if self.failures >= self.failure_threshold:
            self.state = 'open'
```

Circuit breaker phải gắn với **provider failover strategy**, nếu không mở breaker xong mà không có đường thay thế thì queue vẫn chỉ đứng yên.

---

## 7. Compensation logic và trạng thái nhất quán

Một email có thể đã được provider nhận, nhưng worker fail trước khi update DB. Nếu không có compensation, bạn sẽ không biết email đã gửi hay chưa.

### Cách xử lý

- Gắn `message_id` nội bộ vào metadata gửi provider.
- Nhận webhook hoặc callback để reconcile trạng thái.
- Có job reconciliation định kỳ: so sánh outbound log với provider events.
- Với trạng thái không chắc chắn, đánh dấu `unknown` thay vì giả định thất bại.

### Trạng thái nội bộ đề xuất

```text
pending -> processing -> sent_to_provider -> delivered
                           │
                           ├-> deferred
                           ├-> bounced_permanent
                           ├-> bounced_transient
                           └-> failed_internal
```

---

## 8. Alerting và runbook tối thiểu

### Cảnh báo nên có

- Tỷ lệ messages vào DLQ tăng đột biến.
- Một error class chiếm trên 20% trong 5 phút.
- Circuit breaker mở với provider chính.
- Retry queue backlog tăng nhưng throughput giảm.
- Unknown error code mới xuất hiện.

### Runbook ngắn cho on-call

1. Xác định lỗi thuộc provider, data, hay code deploy mới.
2. Kiểm tra có cần pause campaign hay failover provider.
3. Xem top error class và vài payload mẫu trong DLQ.
4. Chỉ re-drive sau khi xác thực root cause đã được xử lý.

---

## Tổng kết

Retry và DLQ không phải phụ kiện thêm vào sau. Chúng là cơ chế bắt buộc để hệ thống chịu lỗi mà không tạo chaos. Thiết kế tốt phải biết phân loại lỗi, retry có chiến lược, cô lập poison message, và để lại đủ dấu vết cho việc điều tra.

**Bài tiếp theo:** Chúng ta chuyển từ khả năng gửi sang khả năng vào inbox, tức deliverability với SPF, DKIM, DMARC và quản trị reputation.