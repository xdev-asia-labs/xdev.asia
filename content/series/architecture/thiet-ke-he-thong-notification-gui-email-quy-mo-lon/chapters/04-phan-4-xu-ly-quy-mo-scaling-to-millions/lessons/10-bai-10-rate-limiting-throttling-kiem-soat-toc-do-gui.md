---
id: 019e7a10-a110-7001-d001-f1e2d3c4b510
title: "Bài 10: Rate Limiting & Throttling — Kiểm soát tốc độ gửi"
slug: bai-10-rate-limiting-throttling-kiem-soat-toc-do-gui
description: >-
  Tại sao cần rate limiting cho email system. Token bucket, sliding window,
  leaky bucket. Multi-level throttling theo provider, domain, IP. Adaptive
  rate limiting dựa trên bounce rate. Redis-based distributed limiter.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 10
section_title: "Phần 4: Xử lý quy mô — Scaling to Millions"
course:
  id: 019e7a10-a100-7001-d001-f1e2d3c4b5a6
  title: "Thiết kế Hệ thống Notification gửi hàng triệu Email"
  slug: thiet-ke-he-thong-notification-gui-email-quy-mo-lon
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5449" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5449)"/>

  <!-- Decorations -->
  <g>
    <circle cx="927" cy="271" r="10" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="754" cy="178" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="1081" cy="85" r="12" fill="#a78bfa" opacity="0.08"/>
    <circle cx="908" cy="252" r="13" fill="#a78bfa" opacity="0.09"/>
    <circle cx="735" cy="159" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="121" x2="1100" y2="201" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="151" x2="1050" y2="221" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1052.1769145362398,203 1052.1769145362398,239 1021,257 989.8230854637602,239 989.8230854637602,203 1021,185" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🏗️ Kiến trúc — Bài 10</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 10: Rate Limiting &amp; Throttling — Kiểm</tspan>
      <tspan x="60" dy="42">soát tốc độ gửi</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Thiết kế Hệ thống Notification gửi hàng triệu Email</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 4: Xử lý quy mô — Scaling to Millions</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Một hệ thống có thể render và enqueue hàng triệu email chưa chắc đã có thể gửi chúng an toàn. Điểm nghẽn thực sự thường nằm ở **tốc độ gửi hợp lệ**: giới hạn từ ESP, reputation của domain/IP, và khả năng hấp thụ của downstream systems.

Bài này tập trung vào lớp điều tiết lưu lượng, nơi quyết định chiến dịch 10 triệu email sẽ thành công hay tự đẩy cả domain vào spam folder.

---

## 1. Vì sao rate limiting là bắt buộc?

### Các giới hạn thực tế

| Nguồn giới hạn | Ví dụ | Hậu quả nếu vượt ngưỡng |
|----------------|-------|-------------------------|
| ESP send quota | SES 200 email/giây mặc định | `ThrottlingException`, queue backlog |
| Domain reputation | Domain mới gửi đột ngột 1M email | Spam placement tăng mạnh |
| IP reputation | Dedicated IP chưa warm-up | Bounce và complaint tăng |
| ISP limits | Gmail, Yahoo throttling theo domain | Deferred delivery, soft bounce |
| Internal systems | Worker quá nhiều, DB update quá dày | CPU cao, lock contention |

### Mục tiêu của throttling layer

- Bảo vệ reputation của sender.
- Bảo vệ email providers khỏi traffic burst.
- Ưu tiên transactional email hơn marketing email.
- Duy trì throughput ổn định thay vì spike ngắn rồi sập.
- Giữ queue backlog trong phạm vi kiểm soát.

---

## 2. Các thuật toán phổ biến

### So sánh nhanh

| Thuật toán | Điểm mạnh | Điểm yếu | Phù hợp cho |
|------------|-----------|----------|-------------|
| Fixed Window | Dễ implement | Burst ở ranh giới window | Counter đơn giản |
| Sliding Window | Chính xác hơn | Tốn state hơn | Per-domain limits |
| Leaky Bucket | Output đều | Hơi cứng với traffic burst hợp lệ | Smoothing traffic |
| Token Bucket | Cho phép burst có kiểm soát | Cần đồng bộ state | ESP/API throttling |

### Khuyến nghị cho email system

- Dùng **token bucket** cho giới hạn theo provider và theo IP pool.
- Dùng **sliding window** cho complaint rate, bounce rate, open rate theo campaign/domain.
- Dùng **priority-aware scheduler** để email quan trọng không bị marketing chiếm hết quota.

---

## 3. Kiến trúc multi-level throttling

```
Campaign Queue
    │
    ▼
Priority Scheduler
    │
    ├── Check provider quota (SES / SendGrid / Mailgun)
    ├── Check domain quota (gmail.com / yahoo.com / outlook.com)
    ├── Check IP pool quota
    ├── Check campaign quota
    └── Check suppression / reputation guard
    │
    ▼
Dispatch Queue
    │
    ▼
Workers -> ESP
```

### Thứ tự kiểm tra hợp lý

1. Kiểm tra suppression list và bounce history.
2. Kiểm tra priority class của message.
3. Kiểm tra quota theo provider.
4. Kiểm tra quota theo recipient domain.
5. Kiểm tra quota theo sender IP / dedicated IP pool.
6. Nếu fail, reschedule thay vì drop.

### Priority policy ví dụ

| Priority | Use case | SLA | Quy tắc |
|----------|----------|-----|---------|
| critical | OTP, reset password | < 30s | Luôn có reserved capacity |
| high | Order confirmation | < 2 phút | Không bị block bởi marketing |
| normal | Product updates | < 15 phút | Chia sẻ quota động |
| low | Newsletter, drip campaign | Theo schedule | Bị cắt trước khi reputation xấu |

---

## 4. Distributed rate limiter với Redis

### Token bucket model

```python
import time
import redis

class RedisTokenBucket:
    def __init__(self, client: redis.Redis, key: str, rate: int, burst: int):
        self.client = client
        self.key = key
        self.rate = rate
        self.burst = burst

    def allow(self, tokens: int = 1) -> bool:
        now_ms = int(time.time() * 1000)
        script = """
        local key = KEYS[1]
        local now_ms = tonumber(ARGV[1])
        local rate = tonumber(ARGV[2])
        local burst = tonumber(ARGV[3])
        local requested = tonumber(ARGV[4])

        local data = redis.call('HMGET', key, 'tokens', 'updated_at')
        local tokens = tonumber(data[1])
        local updated_at = tonumber(data[2])

        if tokens == nil then
          tokens = burst
          updated_at = now_ms
        end

        local elapsed = math.max(0, now_ms - updated_at)
        local refill = (elapsed / 1000.0) * rate
        tokens = math.min(burst, tokens + refill)

        local allowed = 0
        if tokens >= requested then
          tokens = tokens - requested
          allowed = 1
        end

        redis.call('HMSET', key, 'tokens', tokens, 'updated_at', now_ms)
        redis.call('PEXPIRE', key, 60000)
        return allowed
        """

        result = self.client.eval(script, 1, self.key, now_ms, self.rate, self.burst, tokens)
        return result == 1
```

### Các key nên theo dõi

```text
rate:provider:ses
rate:provider:sendgrid
rate:domain:gmail.com
rate:domain:yahoo.com
rate:ip-pool:warm-01
rate:campaign:camp_flash_sale_april
```

Điểm quan trọng là limiter phải được **share giữa tất cả workers**, nếu không mỗi worker đều tưởng mình còn quota và hệ thống sẽ vượt ngưỡng ngay lập tức.

---

## 5. Adaptive throttling dựa trên tín hiệu deliverability

Tốc độ gửi không nên cố định. Nó phải phản ứng với tín hiệu từ thực tế.

### Tín hiệu cần theo dõi

| Signal | Ý nghĩa | Hành động |
|--------|---------|-----------|
| Soft bounce tăng | ISP đang defer traffic | Giảm 20-40% send rate |
| Complaint rate tăng | Nội dung/list quality xấu | Giảm mạnh, pause campaign |
| Open rate giảm bất thường | Spam placement tăng | Giảm tốc, đổi IP/domain mix |
| Queue delay quá cao | Hệ thống thiếu worker/quota | Tăng worker hoặc kéo dài ETA |

### Policy engine ví dụ

```python
def compute_send_rate(base_rate, metrics):
    rate = base_rate

    if metrics.soft_bounce_rate > 0.03:
        rate *= 0.7

    if metrics.complaint_rate > 0.001:
        rate *= 0.5

    if metrics.provider_throttling_rate > 0.05:
        rate *= 0.8

    if metrics.critical_queue_depth > 1000:
        rate = max(rate, metrics.reserve_for_critical)

    return max(int(rate), 10)
```

### Nguyên tắc

- Marketing traffic là nơi phải hy sinh đầu tiên.
- Transactional traffic nên có quota reserve cố định.
- Không giảm quota về 0 ngay lập tức trừ khi complaint spike rất cao hoặc ESP yêu cầu pause.

---

## 6. IP warming và domain warm-up

Một sai lầm phổ biến là domain/IP mới nhưng gửi full load ngay ngày đầu.

### Lộ trình warm-up mẫu cho dedicated IP mới

| Ngày | Tối đa email/ngày | Đối tượng |
|------|-------------------|-----------|
| 1 | 5,000 | Users engaged cao |
| 2 | 10,000 | Segment sạch, recent active |
| 3 | 20,000 | Mở rộng nhẹ |
| 4 | 40,000 | Bắt đầu mixed traffic |
| 5 | 80,000 | Giữ theo complaint/bounce |
| 6 | 160,000 | Tiếp tục scale |
| 7+ | Theo reputation | Chỉ tăng nếu metrics ổn |

### Guardrails khi warm-up

- Chỉ gửi đến recipients đã opt-in rõ ràng.
- Ưu tiên segment có open/click rate tốt.
- Không reuse list cũ chất lượng thấp.
- Theo dõi Gmail Postmaster Tools và Microsoft SNDS nếu có.

---

## 7. Failure modes thường gặp

### Khi thiết kế limiter sai

1. **Local limiter per worker**: tổng throughput vượt quota dù từng worker đều "đúng".
2. **Không reserve capacity**: OTP bị chậm vì campaign marketing đang ăn hết token.
3. **Throttle theo provider nhưng quên domain**: ESP vẫn nhận, nhưng Gmail bắt đầu defer.
4. **Retry vô hạn**: throttle bị khuếch đại do retry storm.

### Checklist production

- Có quota theo provider, domain, IP, campaign.
- Có reserve cho critical traffic.
- Có cơ chế pause campaign thủ công.
- Có adaptive throttling dựa trên feedback loop.
- Có dashboard hiển thị send rate hiện tại và quota còn lại.

---

## Tổng kết

Rate limiting không chỉ là bài toán kỹ thuật mà là lớp bảo vệ sống còn cho deliverability. Hệ thống tốt phải biết gửi nhanh khi được phép, giảm tốc khi có tín hiệu xấu, và luôn ưu tiên traffic quan trọng nhất.

**Bài tiếp theo:** Chúng ta sẽ tổ chức batch processing và worker pool để xử lý hàng triệu recipients hiệu quả mà không làm cạn memory hay nghẽn database.