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
