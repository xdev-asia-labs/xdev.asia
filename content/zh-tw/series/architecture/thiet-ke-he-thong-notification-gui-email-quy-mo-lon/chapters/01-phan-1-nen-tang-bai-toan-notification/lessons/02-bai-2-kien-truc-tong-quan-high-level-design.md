---
id: 019e7a10-a102-7001-d001-f1e2d3c4b502
title: 第 2 課：通用架構 — 高層設計
slug: bai-2-kien-truc-tong-quan-high-level-design
description: >-
  設計通知系統的高層架構：API Gateway、Notification Service、Message Queue、Worker Pool、Email
  Provider。数据从触发器流向收件箱。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: 第 1 部分：基礎 — 了解大規模通知問題
course:
  id: 019e7a10-a100-7001-d001-f1e2d3c4b5a6
  title: 設計一個通知系統來發送數百萬封電子郵件
  slug: thiet-ke-he-thong-notification-gui-email-quy-mo-lon
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🏗️ 建築 — 第 2 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 2 課：架構概述 — 高層</tspan>
      <tspan x="60" dy="42">設計</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">設計一個通知系統來發送數百萬封電子郵件</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：基礎 — 了解大規模通知問題</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

在上一課中，您了解了發送數百萬封電子郵件的問題。現在，我們將**設計整體架構**—整個系統的藍圖。這是系統設計中最重要的一步。

---

## 1. 高層架構

### 元件概述

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

## 2. 詳細元件

### 2.1 API網關

負責：
- **身份驗證**：API 金鑰/OAuth2 驗證
- **速率限制**：限制每個客戶端的請求速率
- **請求驗證**：架構驗證
- **路由**：路由到正確的服務

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

### 2.2 通知服務

核心業務邏輯：

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

### 2.3 訊息佇列（Kafka）

主題設計：

```
email-send              # Main send queue
  ├── partition-0       # Critical priority
  ├── partition-1       # High priority
  ├── partition-2..N    # Normal priority
email-status            # Delivery status events
email-dlq               # Dead letter queue
email-webhook           # ESP webhook events
```

### 2.4 工作池

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

## 3. 資料庫架構設計

### 核心表

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

## 4. 資料流：從觸發器到收件匣

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

## 5. 冪等性 — 只送一次

### 問題

Worker 在發送電子郵件後但在提交偏移之前崩潰 → Kafka 重新交付 → 電子郵件發送兩次。

### 解決方案：冪等性金鑰

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

## 6. 關注點分離

|組件|責任|縮放 |
|------------|--------------|------|
| API閘道|身分驗證、速率限制、路由 |橫向、無國籍|
|通知服務|業務邏輯、排隊 |橫向、無國籍|
|訊息佇列|緩衝、排序、耐用性|卡夫卡分區 |
|工人池 |渲染、發送、重試 |水平，自動縮放|
|狀態追蹤器 |更新交貨狀態 |水平、非同步 |
|分析|聚合指標|批量處理 |

---

## 總結

您現在擁有完整的藍圖：
- **6 個主要組成部分** 以及每個組成部分的職責
- **通知系統的資料庫架構**
- **資料流**從觸發器到收件匣的端到端
- **冪等性**確保只發送一次

**下一篇文章：** 深入研究大型電子郵件系統的重要設計模式。
