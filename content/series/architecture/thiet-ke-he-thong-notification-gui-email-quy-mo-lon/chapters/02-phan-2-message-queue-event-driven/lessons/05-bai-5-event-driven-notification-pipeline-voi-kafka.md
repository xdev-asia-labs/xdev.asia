---
id: 019e7a10-a105-7001-d001-f1e2d3c4b505
title: "Bài 5: Event-Driven Notification Pipeline với Kafka"
slug: bai-5-event-driven-notification-pipeline-voi-kafka
description: >-
  Thiết kế event schema cho notification events. Topic design, Kafka Connect, Stream processing, Event sourcing. Hands-on xây dựng complete pipeline.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 5
section_title: "Phần 2: Message Queue & Event-Driven Architecture"
course:
  id: 019e7a10-a100-7001-d001-f1e2d3c4b5a6
  title: "Thiết kế Hệ thống Notification gửi hàng triệu Email"
  slug: thiet-ke-he-thong-notification-gui-email-quy-mo-lon
---

## Giới thiệu

Ở bài trước, bạn đã hiểu Message Queue là xương sống. Bây giờ, chúng ta sẽ xây dựng **complete event-driven pipeline** — từ notification request đến delivery tracking, tất cả qua Kafka events.

---

## 1. Event Schema Design

### Notification Request Event

```json
{
  "event_id": "evt_019e7a10-0001",
  "event_type": "NotificationRequested",
  "timestamp": "2026-04-01T10:00:00.000Z",
  "version": "1.0",
  "source": "notification-api",
  "data": {
    "campaign_id": "camp_flash_sale_april",
    "template_id": "tmpl_flash_sale_v2",
    "priority": "high",
    "schedule_type": "immediate",
    "recipient_segment": "active_users_30d",
    "metadata": {
      "created_by": "user_12345",
      "tags": ["marketing", "flash-sale"]
    }
  }
}
```

### Email Send Event

```json
{
  "event_id": "evt_019e7a10-0002",
  "event_type": "EmailSendRequested",
  "timestamp": "2026-04-01T10:00:01.000Z",
  "version": "1.0",
  "correlation_id": "camp_flash_sale_april",
  "data": {
    "message_id": "msg_019e7a10-abc1",
    "campaign_id": "camp_flash_sale_april",
    "recipient": {
      "email": "user@example.com",
      "name": "Nguyen Van A",
      "variables": {
        "first_name": "A",
        "discount_code": "FLASH30",
        "product_url": "https://shop.example.com/sale"
      }
    },
    "template_id": "tmpl_flash_sale_v2",
    "priority": "high"
  }
}
```

### Email Delivery Status Events

```json
// Sent
{
  "event_type": "EmailSent",
  "data": {
    "message_id": "msg_019e7a10-abc1",
    "provider": "ses",
    "provider_message_id": "ses_0105-1234-abcd",
    "sent_at": "2026-04-01T10:00:05.000Z"
  }
}

// Delivered
{
  "event_type": "EmailDelivered",
  "data": {
    "message_id": "msg_019e7a10-abc1",
    "delivered_at": "2026-04-01T10:00:08.000Z"
  }
}

// Bounced
{
  "event_type": "EmailBounced",
  "data": {
    "message_id": "msg_019e7a10-abc1",
    "bounce_type": "permanent",      // permanent | transient
    "bounce_subtype": "general",
    "diagnostic_code": "550 5.1.1 User unknown",
    "bounced_at": "2026-04-01T10:00:10.000Z"
  }
}

// Complained (user marked as spam)
{
  "event_type": "EmailComplained",
  "data": {
    "message_id": "msg_019e7a10-abc1",
    "feedback_type": "abuse",
    "complained_at": "2026-04-01T12:00:00.000Z"
  }
}
```

---

## 2. Complete Pipeline Architecture

```
                    ┌─────────────────────────────────────────────────┐
                    │           EVENT-DRIVEN PIPELINE                  │
                    │                                                  │
 API Request ──────▶│  ┌──────────┐    ┌──────────────────────┐       │
                    │  │Notification│──▶│ notification-requests │      │
                    │  │ Service   │    │      (Topic)          │      │
                    │  └──────────┘    └──────────┬───────────┘       │
                    │                             │                    │
                    │                    ┌────────▼─────────┐          │
                    │                    │  Fan-Out Service  │          │
                    │                    │  (Stream Proc.)   │          │
                    │                    └────────┬─────────┘          │
                    │                             │                    │
                    │                    ┌────────▼─────────┐          │
                    │                    │   email-send      │          │
                    │                    │    (Topic)        │          │
                    │                    └────────┬─────────┘          │
                    │                             │                    │
                    │              ┌──────────────┼──────────────┐     │
                    │              ▼              ▼              ▼     │
                    │         ┌────────┐    ┌────────┐    ┌────────┐  │
                    │         │Worker 1│    │Worker 2│    │Worker N│  │
                    │         └───┬────┘    └───┬────┘    └───┬────┘  │
                    │             │             │             │        │
                    │             └──────┬──────┘             │        │
                    │                    │                     │        │
                    │           ┌────────▼─────────┐          │        │
                    │           │  email-status     │◀─────────┘        │
                    │           │   (Topic)        │                   │
                    │           └────────┬─────────┘                   │
                    │                    │                              │
                    │         ┌──────────▼───────────┐                 │
                    │         │  Status Aggregator    │                 │
                    │         │  (Stream Processing)  │                 │
                    │         └──────────┬───────────┘                 │
                    │                    │                              │
                    │         ┌──────────▼───────────┐                 │
                    │         │  campaign-analytics   │                 │
                    │         │      (Topic)          │                 │
                    │         └──────────────────────┘                 │
                    │                                                  │
 ESP Webhooks ─────▶│  ┌─────────────────────────┐                    │
                    │  │  email-webhook (Topic)   │                    │
                    │  └────────────┬────────────┘                    │
                    │               │                                  │
                    │    ┌──────────▼────────────┐                    │
                    │    │ Webhook Processor      │                    │
                    │    │ (bounce, complaint,    │                    │
                    │    │  delivery, open, click)│                    │
                    │    └──────────┬────────────┘                    │
                    │               │                                  │
                    │    ┌──────────▼────────────┐                    │
                    │    │ email-status (Topic)   │ (merge with       │
                    │    └──────────────────────┘   worker status)    │
                    └─────────────────────────────────────────────────┘
```

---

## 3. Kafka Connect — Data Integration

### Source Connector: Database → Kafka

```json
{
  "name": "campaign-source",
  "config": {
    "connector.class": "io.debezium.connector.postgresql.PostgresConnector",
    "database.hostname": "postgres",
    "database.port": "5432",
    "database.user": "notification_cdc",
    "database.password": "${secrets:postgres_password}",
    "database.dbname": "notifications",
    "table.include.list": "public.campaigns,public.outbox",
    "topic.prefix": "cdc",
    "slot.name": "notification_slot",
    "plugin.name": "pgoutput"
  }
}
```

### Sink Connector: Kafka → Analytics DB

```json
{
  "name": "analytics-sink",
  "config": {
    "connector.class": "io.confluent.connect.jdbc.JdbcSinkConnector",
    "topics": "campaign-analytics",
    "connection.url": "jdbc:postgresql://analytics-db:5432/analytics",
    "connection.user": "analytics_writer",
    "connection.password": "${secrets:analytics_password}",
    "auto.create": true,
    "insert.mode": "upsert",
    "pk.mode": "record_value",
    "pk.fields": "campaign_id,metric_window"
  }
}
```

---

## 4. Stream Processing — Real-time Aggregation

### Campaign Progress Tracker

```python
# Using Faust (Python stream processing library)
import faust

app = faust.App(
    'email-status-aggregator',
    broker='kafka://kafka-1:9092',
    store='rocksdb://',
)

class CampaignStats(faust.Record):
    campaign_id: str
    total_sent: int = 0
    total_delivered: int = 0
    total_bounced: int = 0
    total_complained: int = 0
    total_opened: int = 0
    total_clicked: int = 0

# State store cho campaign stats
campaign_stats = app.Table(
    'campaign-stats',
    default=CampaignStats,
    partitions=8,
)

email_status_topic = app.topic('email-status', value_type=dict)

@app.agent(email_status_topic)
async def process_status(events):
    async for event in events:
        campaign_id = event['campaign_id']
        event_type = event['event_type']

        stats = campaign_stats[campaign_id]

        if event_type == 'EmailSent':
            stats.total_sent += 1
        elif event_type == 'EmailDelivered':
            stats.total_delivered += 1
        elif event_type == 'EmailBounced':
            stats.total_bounced += 1
            # Auto-suppress hard bounces
            if event['bounce_type'] == 'permanent':
                await suppress_email(event['recipient'])
        elif event_type == 'EmailComplained':
            stats.total_complained += 1
            await suppress_email(event['recipient'])
        elif event_type == 'EmailOpened':
            stats.total_opened += 1
        elif event_type == 'EmailClicked':
            stats.total_clicked += 1

        campaign_stats[campaign_id] = stats

        # Check if campaign complete
        campaign = await get_campaign(campaign_id)
        if stats.total_sent + stats.total_bounced >= campaign.total_count:
            await publish_campaign_completed(campaign_id, stats)
```

### Windowed Metrics

```python
# Real-time throughput metrics (1-minute windows)
@app.agent(email_status_topic)
async def throughput_metrics(events):
    async for event in events.group_by(
        lambda e: e['provider'],
        name='provider-throughput'
    ):
        window_key = f"{event['provider']}:{current_minute()}"
        await metrics_store.increment(window_key)

        count = await metrics_store.get(window_key)
        if count > RATE_LIMIT_THRESHOLD:
            await alert_rate_limit_approaching(event['provider'], count)
```

---

## 5. Event Sourcing cho Audit Trail

### Email Lifecycle Events

```
msg_019e7a10-abc1:
  ├── t0: EmailSendRequested  (from notification service)
  ├── t1: EmailQueued         (acknowledged by queue)
  ├── t2: EmailPickedUp       (worker consumed)
  ├── t3: TemplateRendered    (HTML generated)
  ├── t4: RateLimitWaited     (waited 200ms for rate limit)
  ├── t5: EmailSent           (ESP accepted)
  ├── t6: EmailDelivered      (ESP webhook: delivered)
  ├── t7: EmailOpened         (tracking pixel loaded)
  └── t8: EmailClicked        (tracking link clicked)
```

### Event Store

```python
class EmailEventStore:
    async def append(self, message_id: str, event: dict):
        await self.kafka.produce(
            topic='email-events',
            key=message_id,
            value={
                'message_id': message_id,
                'event_type': event['type'],
                'timestamp': datetime.utcnow().isoformat(),
                'data': event['data'],
            }
        )

    async def get_history(self, message_id: str) -> list:
        """Replay all events for a specific email"""
        events = []
        # Read from compacted topic or query event store DB
        async for event in self.read_events(message_id):
            events.append(event)
        return events
```

---

## 6. Hands-on: Docker Compose Setup

```yaml
version: '3.8'
services:
  zookeeper:
    image: confluentinc/cp-zookeeper:7.6.0
    environment:
      ZOOKEEPER_CLIENT_PORT: 2181

  kafka:
    image: confluentinc/cp-kafka:7.6.0
    depends_on: [zookeeper]
    ports: ["9092:9092"]
    environment:
      KAFKA_BROKER_ID: 1
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://kafka:9092
      KAFKA_NUM_PARTITIONS: 12
      KAFKA_DEFAULT_REPLICATION_FACTOR: 1
      KAFKA_LOG_RETENTION_HOURS: 168  # 7 days

  kafka-ui:
    image: provectuslabs/kafka-ui:latest
    ports: ["8080:8080"]
    environment:
      KAFKA_CLUSTERS_0_NAME: notification
      KAFKA_CLUSTERS_0_BOOTSTRAPSERVERS: kafka:9092

  redis:
    image: redis:7-alpine
    ports: ["6379:6379"]

  postgres:
    image: postgres:16-alpine
    ports: ["5432:5432"]
    environment:
      POSTGRES_DB: notifications
      POSTGRES_USER: notification_user
      POSTGRES_PASSWORD: secure_password
    volumes:
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql
```

### Create Topics

```bash
# Create topics with appropriate partitions
kafka-topics --create --topic email-send \
  --partitions 12 --replication-factor 3 \
  --bootstrap-server kafka:9092

kafka-topics --create --topic email-status \
  --partitions 6 --replication-factor 3 \
  --bootstrap-server kafka:9092

kafka-topics --create --topic email-dlq \
  --partitions 3 --replication-factor 3 \
  --config retention.ms=-1 \
  --bootstrap-server kafka:9092

kafka-topics --create --topic email-webhook \
  --partitions 4 --replication-factor 3 \
  --bootstrap-server kafka:9092
```

---

## Tổng kết

Bạn đã xây dựng complete event-driven pipeline:
- **Event Schema** chuẩn hóa cho mọi notification events
- **Multi-topic architecture** tách biệt send, status, webhook, DLQ
- **Stream Processing** cho real-time aggregation
- **Event Sourcing** cho complete audit trail

**Bài tiếp theo:** Priority Queue và Scheduling Engine — gửi email đúng thời điểm, đúng ưu tiên.
