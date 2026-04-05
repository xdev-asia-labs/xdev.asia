---
id: 019e7a10-a102-7001-d001-f1e2d3c4b502
title: "Bài 2: Kiến trúc tổng quan — High-Level Design"
slug: bai-2-kien-truc-tong-quan-high-level-design
description: >-
  Thiết kế kiến trúc high-level cho notification system: API Gateway, Notification Service, Message Queue, Worker Pool, Email Provider. Data flow từ trigger đến inbox.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: "Phần 1: Nền tảng — Hiểu bài toán Notification quy mô lớn"
course:
  id: 019e7a10-a100-7001-d001-f1e2d3c4b5a6
  title: "Thiết kế Hệ thống Notification gửi hàng triệu Email"
  slug: thiet-ke-he-thong-notification-gui-email-quy-mo-lon
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1164" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1164)"/>

  <!-- Decorations -->
  <g>
    <circle cx="670" cy="260" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="740" cy="250" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="810" cy="240" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="880" cy="230" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="950" cy="220" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="160" x2="1100" y2="240" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="190" x2="1050" y2="260" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="990.3108891324554,142.5 990.3108891324554,177.5 960,195 929.6891108675446,177.5 929.6891108675446,142.5 960,125" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🏗️ Kiến trúc — Bài 2</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 2: Kiến trúc tổng quan — High-Level</tspan>
      <tspan x="60" dy="42">Design</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Thiết kế Hệ thống Notification gửi hàng triệu Email</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 1: Nền tảng — Hiểu bài toán Notification quy mô lớn</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Ở bài trước, bạn đã hiểu bài toán gửi triệu email. Bây giờ, chúng ta sẽ **thiết kế kiến trúc tổng quan** — bản blue print cho toàn bộ hệ thống. Đây là bước quan trọng nhất trong system design.

---

## 1. High-Level Architecture

### Tổng quan các thành phần

```
┌─────────────┐     ┌──────────────────┐     ┌─────────────────┐
│   Client     │────▶│   API Gateway    │────▶│  Notification   │
│  (Web/API)   │     │  (Rate Limit,    │     │    Service      │
│              │     │   Auth, Route)   │     │  (Validate,     │
└─────────────┘     └──────────────────┘     │   Enqueue)      │
                                              └────────┬────────┘
                                                       │
                                              ┌────────▼────────┐
                                              │  Message Queue   │
                                              │  (Kafka/SQS)    │
                                              │                  │
                                              │  ┌────────────┐  │
                                              │  │ Priority Q  │  │
                                              │  │ Critical    │  │
                                              │  │ High        │  │
                                              │  │ Normal      │  │
                                              │  │ Low         │  │
                                              │  └────────────┘  │
                                              └────────┬────────┘
                                                       │
                                              ┌────────▼────────┐
                                              │   Worker Pool    │
                                              │   (N workers)    │
                                              │                  │
                                              │  ┌──┐┌──┐┌──┐   │
                                              │  │W1││W2││W3│...│
                                              │  └──┘└──┘└──┘   │
                                              └────────┬────────┘
                                                       │
                              ┌─────────────────┬──────┴───────┐
                              ▼                 ▼              ▼
                     ┌──────────────┐  ┌──────────────┐ ┌────────────┐
                     │  Amazon SES  │  │  SendGrid    │ │  Mailgun   │
                     │  (Primary)   │  │  (Secondary) │ │  (Backup)  │
                     └──────┬───────┘  └──────┬───────┘ └─────┬──────┘
                            │                 │               │
                            └─────────┬───────┘               │
                                      ▼                       │
                              ┌──────────────┐                │
                              │  Webhook     │◀───────────────┘
                              │  Receiver    │
                              └──────┬───────┘
                                     │
                              ┌──────▼───────┐
                              │  Status      │
                              │  Tracker     │
                              └──────┬───────┘
                                     │
                              ┌──────▼───────┐
                              │  Analytics   │
                              │  Dashboard   │
                              └──────────────┘
```

---

## 2. Các thành phần chi tiết

### 2.1 API Gateway

Chịu trách nhiệm:
- **Authentication**: API key / OAuth2 validation
- **Rate Limiting**: Giới hạn request rate per client
- **Request Validation**: Schema validation
- **Routing**: Route đến đúng service

```json
// POST /api/v1/notifications/email
{
  "campaign_id": "camp_2026_flash_sale",
  "template_id": "tmpl_flash_sale_v2",
  "recipients": {
    "type": "segment",
    "segment_id": "seg_active_users_30d"
  },
  "schedule": {
    "type": "immediate"  // hoặc "scheduled", "recurring"
  },
  "priority": "high",
  "metadata": {
    "utm_source": "email",
    "utm_campaign": "flash_sale_april"
  }
}
```

### 2.2 Notification Service

Core business logic:

```python
class NotificationService:
    def create_campaign(self, request):
        # 1. Validate request
        self.validate(request)

        # 2. Resolve recipients
        recipients = self.recipient_service.resolve(request.recipients)
        # → Returns: List[RecipientInfo] with email, name, preferences

        # 3. Check suppression list
        recipients = self.suppression_service.filter(recipients)
        # → Remove: unsubscribed, bounced, complained

        # 4. Create campaign record
        campaign = self.db.create_campaign(
            id=generate_ulid(),
            total_recipients=len(recipients),
            status="QUEUED",
            template_id=request.template_id,
        )

        # 5. Enqueue messages (chunked)
        for chunk in chunked(recipients, size=1000):
            self.queue.publish(
                topic="email-send",
                messages=[
                    {
                        "campaign_id": campaign.id,
                        "recipient": r,
                        "template_id": request.template_id,
                        "priority": request.priority,
                    }
                    for r in chunk
                ],
                partition_key=request.priority,
            )

        # 6. Return campaign ID for tracking
        return {"campaign_id": campaign.id, "queued": len(recipients)}
```

### 2.3 Message Queue (Kafka)

Topic design:

```
email-send              # Main send queue
  ├── partition-0       # Critical priority
  ├── partition-1       # High priority
  ├── partition-2..N    # Normal priority
email-status            # Delivery status events
email-dlq               # Dead letter queue
email-webhook           # ESP webhook events
```

### 2.4 Worker Pool

```python
class EmailWorker:
    def __init__(self):
        self.template_engine = TemplateEngine()
        self.rate_limiter = RateLimiter()
        self.email_provider = MultiProviderClient()

    async def process(self, message):
        # 1. Rate limit check
        await self.rate_limiter.acquire(
            provider=self.email_provider.current,
            domain=message.recipient.domain
        )

        # 2. Render template
        html = self.template_engine.render(
            template_id=message.template_id,
            context=message.recipient.to_dict()
        )

        # 3. Send email
        result = await self.email_provider.send(
            to=message.recipient.email,
            subject=message.subject,
            html=html,
            headers=message.tracking_headers
        )

        # 4. Publish status
        await self.status_publisher.publish({
            "message_id": message.id,
            "status": result.status,
            "provider": result.provider,
            "timestamp": now()
        })
```

---

## 3. Database Schema Design

### Core Tables

```sql
-- Campaigns
CREATE TABLE campaigns (
    id          UUID PRIMARY KEY,
    name        VARCHAR(255) NOT NULL,
    template_id UUID NOT NULL REFERENCES templates(id),
    status      VARCHAR(20) DEFAULT 'DRAFT',
    priority    VARCHAR(10) DEFAULT 'normal',
    total_count INTEGER DEFAULT 0,
    sent_count  INTEGER DEFAULT 0,
    failed_count INTEGER DEFAULT 0,
    scheduled_at TIMESTAMPTZ,
    started_at  TIMESTAMPTZ,
    completed_at TIMESTAMPTZ,
    created_at  TIMESTAMPTZ DEFAULT NOW(),
    created_by  UUID NOT NULL
);

-- Individual email records
CREATE TABLE email_messages (
    id          UUID PRIMARY KEY,
    campaign_id UUID REFERENCES campaigns(id),
    recipient   VARCHAR(255) NOT NULL,
    status      VARCHAR(20) DEFAULT 'QUEUED',
    provider    VARCHAR(50),
    provider_id VARCHAR(255),
    retry_count INTEGER DEFAULT 0,
    sent_at     TIMESTAMPTZ,
    delivered_at TIMESTAMPTZ,
    opened_at   TIMESTAMPTZ,
    clicked_at  TIMESTAMPTZ,
    bounced_at  TIMESTAMPTZ,
    error_message TEXT,
    created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Partitioned by date for performance
CREATE INDEX idx_email_messages_campaign ON email_messages(campaign_id);
CREATE INDEX idx_email_messages_status ON email_messages(status);
CREATE INDEX idx_email_messages_recipient ON email_messages(recipient);

-- Suppression list
CREATE TABLE suppressions (
    email       VARCHAR(255) PRIMARY KEY,
    reason      VARCHAR(50) NOT NULL, -- 'bounce', 'complaint', 'unsubscribe'
    source      VARCHAR(100),
    created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Templates
CREATE TABLE templates (
    id          UUID PRIMARY KEY,
    name        VARCHAR(255) NOT NULL,
    subject     VARCHAR(500) NOT NULL,
    html_body   TEXT NOT NULL,
    text_body   TEXT,
    variables   JSONB DEFAULT '[]',
    version     INTEGER DEFAULT 1,
    is_active   BOOLEAN DEFAULT true,
    created_at  TIMESTAMPTZ DEFAULT NOW()
);
```

---

## 4. Data Flow: Từ Trigger đến Inbox

```
1. Client gửi API request
   │
2. API Gateway: auth, rate limit, validate
   │
3. Notification Service:
   │  ├─ Resolve recipients (query database/segment service)
   │  ├─ Filter suppression list
   │  ├─ Create campaign record
   │  └─ Enqueue messages to Kafka (chunked by 1000)
   │
4. Kafka: buffer messages, distribute to partitions
   │
5. Worker Pool (N consumers):
   │  ├─ Consume from Kafka
   │  ├─ Rate limit check (per provider, per domain)
   │  ├─ Render template with recipient data
   │  ├─ Send via Email Provider (SES/SendGrid)
   │  └─ Publish status to email-status topic
   │
6. Email Provider → recipient's mail server
   │
7. Webhook callbacks: delivered, opened, clicked, bounced
   │
8. Status Tracker: update email_messages table
   │
9. Analytics: aggregate metrics, update dashboard
```

---

## 5. Idempotency — Gửi đúng 1 lần

### Vấn đề

Worker crash sau khi gửi email nhưng trước khi commit offset → Kafka re-deliver → email gửi 2 lần.

### Giải pháp: Idempotency Key

```python
async def process_with_idempotency(self, message):
    idempotency_key = f"{message.campaign_id}:{message.recipient.email}"

    # Check if already processed
    if await self.redis.exists(f"sent:{idempotency_key}"):
        logger.info(f"Skipping duplicate: {idempotency_key}")
        return

    # Send email
    result = await self.send_email(message)

    # Mark as processed (TTL 7 days)
    await self.redis.set(
        f"sent:{idempotency_key}",
        result.provider_id,
        ex=7 * 86400
    )
```

---

## 6. Separation of Concerns

| Component | Responsibility | Scaling |
|-----------|---------------|---------|
| API Gateway | Auth, rate limit, routing | Horizontal, stateless |
| Notification Service | Business logic, enqueue | Horizontal, stateless |
| Message Queue | Buffer, ordering, durability | Kafka partitions |
| Worker Pool | Render, send, retry | Horizontal, auto-scale |
| Status Tracker | Update delivery status | Horizontal, async |
| Analytics | Aggregate metrics | Batch processing |

---

## Tổng kết

Bạn đã có bản blue print hoàn chỉnh:
- **6 thành phần chính** và responsibility của mỗi component
- **Database schema** cho notification system
- **Data flow** end-to-end từ trigger đến inbox
- **Idempotency** đảm bảo gửi đúng 1 lần

**Bài tiếp theo:** Deep dive vào Design Patterns quan trọng cho hệ thống email quy mô lớn.
