---
id: 019e7a10-a106-7001-d001-f1e2d3c4b506
title: "Bài 6: Priority Queue và Scheduling Engine"
slug: bai-6-priority-queue-va-scheduling-engine
description: >-
  Multi-priority queue design, delayed/scheduled email delivery, cron-based vs event-based scheduling, time-zone aware sending, Redis Sorted Set cho scheduling.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 6
section_title: "Phần 2: Message Queue & Event-Driven Architecture"
course:
  id: 019e7a10-a100-7001-d001-f1e2d3c4b5a6
  title: "Thiết kế Hệ thống Notification gửi hàng triệu Email"
  slug: thiet-ke-he-thong-notification-gui-email-quy-mo-lon
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-90" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-90)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1032" cy="66" r="20" fill="#f87171" opacity="0.11"/>
    <circle cx="964" cy="78" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="896" cy="90" r="32" fill="#f87171" opacity="0.13"/>
    <circle cx="828" cy="102" r="8" fill="#f87171" opacity="0.09"/>
    <circle cx="760" cy="114" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="86" x2="1100" y2="166" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="116" x2="1050" y2="186" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="971.507041555162,115.5 971.507041555162,156.5 936,177 900.492958444838,156.5 900.492958444838,115.50000000000001 936,95" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🏗️ Kiến trúc — Bài 6</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 6: Priority Queue và Scheduling Engine</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Thiết kế Hệ thống Notification gửi hàng triệu Email</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 2: Message Queue &amp; Event-Driven Architecture</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Không phải tất cả email đều có cùng mức ưu tiên, và không phải lúc nào cũng gửi ngay. Bài này sẽ giúp bạn thiết kế **Priority Queue** để đảm bảo OTP luôn đến trước marketing email, và **Scheduling Engine** để gửi email đúng thời điểm tối ưu.

---

## 1. Multi-Level Priority System

### Priority Levels

```
┌─────────────────────────────────────────────┐
│ CRITICAL (P0) — SLA: < 10 giây              │
│ OTP, Password Reset, Security Alerts         │
│ Resources: Dedicated workers + ESP pool      │
├─────────────────────────────────────────────┤
│ HIGH (P1) — SLA: < 1 phút                   │
│ Order Confirmation, Payment Receipt          │
│ Resources: Shared priority pool              │
├─────────────────────────────────────────────┤
│ NORMAL (P2) — SLA: < 15 phút                │
│ Marketing Campaign, Promotions               │
│ Resources: Standard worker pool              │
├─────────────────────────────────────────────┤
│ LOW (P3) — SLA: < 1 giờ                     │
│ Weekly Digest, Newsletter, Reports           │
│ Resources: Background workers                │
└─────────────────────────────────────────────┘
```

### Implementation với Separate Topics

```python
class PriorityRouter:
    TOPIC_MAP = {
        'critical': 'email-send-p0',
        'high': 'email-send-p1',
        'normal': 'email-send-p2',
        'low': 'email-send-p3',
    }

    WORKER_CONFIG = {
        'critical': {
            'min_workers': 5,
            'max_workers': 20,
            'poll_interval_ms': 10,     # Poll rất nhanh
            'batch_size': 1,             # Process từng cái một
        },
        'high': {
            'min_workers': 5,
            'max_workers': 30,
            'poll_interval_ms': 50,
            'batch_size': 10,
        },
        'normal': {
            'min_workers': 10,
            'max_workers': 100,
            'poll_interval_ms': 100,
            'batch_size': 100,
        },
        'low': {
            'min_workers': 2,
            'max_workers': 20,
            'poll_interval_ms': 500,
            'batch_size': 500,
        },
    }

    async def route(self, message: dict):
        priority = message.get('priority', 'normal')
        topic = self.TOPIC_MAP[priority]
        await self.kafka.produce(topic, message)
```

---

## 2. Scheduling Engine

### Use Cases

1. **Scheduled Campaign**: "Gửi flash sale email lúc 9h sáng thứ 2"
2. **Timezone-aware**: "Gửi lúc 9h sáng theo timezone của từng user"
3. **Recurring**: "Gửi weekly digest mỗi thứ 6 lúc 17h"
4. **Delayed**: "Gửi reminder sau 24h nếu user chưa complete action"

### Architecture

```
┌──────────────┐     ┌────────────────┐     ┌──────────────┐
│  Schedule    │────▶│  Redis Sorted  │────▶│  Scheduler   │
│  API         │     │  Set (ZSET)    │     │  Worker      │
│              │     │                │     │              │
│ POST /schedule│    │ Score = Unix   │     │ Poll every   │
│ {time, data} │     │ timestamp      │     │ 1 second     │
└──────────────┘     └────────────────┘     └──────┬───────┘
                                                    │
                                            ┌───────▼──────┐
                                            │ Kafka Topic  │
                                            │ email-send   │
                                            └──────────────┘
```

### Redis Sorted Set Implementation

```python
import redis
import json
import time

class SchedulingEngine:
    SCHEDULE_KEY = "email:schedule"

    def __init__(self):
        self.redis = redis.Redis(host='localhost', port=6379, db=0)
        self.kafka = KafkaProducer()

    async def schedule(self, message: dict, send_at: datetime):
        """Schedule an email for future delivery"""
        score = send_at.timestamp()  # Unix timestamp as score
        member = json.dumps({
            'id': message['id'],
            'data': message,
            'scheduled_at': send_at.isoformat(),
        })
        self.redis.zadd(self.SCHEDULE_KEY, {member: score})

    async def schedule_timezone_aware(
        self, campaign_id: str, recipients: list, local_time: str
    ):
        """Schedule email at local_time in each recipient's timezone"""
        for recipient in recipients:
            tz = recipient.get('timezone', 'Asia/Ho_Chi_Minh')
            local_dt = parse_time(local_time, tz)
            utc_dt = local_dt.astimezone(UTC)

            await self.schedule(
                message={
                    'campaign_id': campaign_id,
                    'recipient': recipient,
                },
                send_at=utc_dt,
            )

    async def poll_and_dispatch(self):
        """Background worker: check for due emails every second"""
        while True:
            now = time.time()

            # Get all messages due for delivery
            # ZRANGEBYSCORE: score <= now
            due_messages = self.redis.zrangebyscore(
                self.SCHEDULE_KEY,
                '-inf',
                now,
                start=0,
                num=1000,  # Process max 1000 per tick
            )

            if due_messages:
                pipe = self.redis.pipeline()
                for raw in due_messages:
                    message = json.loads(raw)

                    # Publish to Kafka for immediate delivery
                    await self.kafka.produce(
                        'email-send',
                        message['data'],
                    )

                    # Remove from schedule
                    pipe.zrem(self.SCHEDULE_KEY, raw)

                pipe.execute()

            await asyncio.sleep(1)  # Poll every second
```

---

## 3. Recurring Schedule với Cron

```python
from croniter import croniter

class RecurringScheduler:
    async def create_recurring(
        self,
        schedule_id: str,
        cron_expression: str,
        campaign_template: dict,
    ):
        """
        Examples:
        - "0 9 * * 1"     → Mỗi thứ 2 lúc 9h
        - "0 17 * * 5"    → Mỗi thứ 6 lúc 17h
        - "0 8 1 * *"     → Ngày 1 hàng tháng lúc 8h
        """
        await self.db.insert('recurring_schedules', {
            'id': schedule_id,
            'cron_expression': cron_expression,
            'campaign_template': campaign_template,
            'is_active': True,
            'last_run_at': None,
            'next_run_at': self._next_run(cron_expression),
        })

    def _next_run(self, cron_expr: str) -> datetime:
        cron = croniter(cron_expr, datetime.utcnow())
        return cron.get_next(datetime)

    async def check_recurring(self):
        """Run every minute via system cron or scheduler"""
        now = datetime.utcnow()
        due_schedules = await self.db.query(
            "SELECT * FROM recurring_schedules "
            "WHERE is_active = true AND next_run_at <= %s",
            [now]
        )

        for schedule in due_schedules:
            # Create campaign from template
            campaign = await self.create_campaign(
                schedule.campaign_template
            )

            # Update next run
            await self.db.update('recurring_schedules', {
                'id': schedule.id,
                'last_run_at': now,
                'next_run_at': self._next_run(schedule.cron_expression),
            })
```

---

## 4. Smart Send Time Optimization

### Concept

Thay vì gửi cùng lúc cho tất cả, gửi vào thời điểm **mỗi user hay mở email nhất**.

```python
class SendTimeOptimizer:
    async def get_optimal_time(self, user_id: str) -> int:
        """Trả về giờ tối ưu (0-23) dựa trên lịch sử open"""

        # Query email open history
        opens = await self.analytics.query(
            "SELECT EXTRACT(HOUR FROM opened_at) as hour, COUNT(*) as cnt "
            "FROM email_events "
            "WHERE recipient_id = %s AND event_type = 'opened' "
            "AND opened_at > NOW() - INTERVAL '90 days' "
            "GROUP BY hour ORDER BY cnt DESC LIMIT 1",
            [user_id]
        )

        if opens:
            return opens[0]['hour']

        # Fallback: industry best practices
        # Theo SendGrid data: 10h sáng local time
        return 10

    async def schedule_optimized(self, campaign_id: str, recipients: list):
        for recipient in recipients:
            optimal_hour = await self.get_optimal_time(recipient['id'])
            tz = recipient.get('timezone', 'Asia/Ho_Chi_Minh')

            # Schedule at optimal hour in user's timezone
            send_at = next_occurrence(optimal_hour, tz)
            await self.scheduler.schedule(
                message={'campaign_id': campaign_id, 'recipient': recipient},
                send_at=send_at,
            )
```

---

## 5. Distributed Scheduling — Avoiding Duplicates

### Problem

Multiple scheduler instances → cùng messages bị dispatch 2 lần.

### Solution: Redis Distributed Lock

```python
class DistributedScheduler:
    LOCK_KEY = "scheduler:lock"
    LOCK_TTL = 30  # seconds

    async def poll_with_lock(self):
        while True:
            # Try to acquire lock
            acquired = self.redis.set(
                self.LOCK_KEY,
                self.instance_id,
                nx=True,
                ex=self.LOCK_TTL,
            )

            if acquired:
                try:
                    await self.poll_and_dispatch()
                finally:
                    # Release lock
                    # Lua script: only delete if we own the lock
                    self.redis.eval(
                        """
                        if redis.call("get", KEYS[1]) == ARGV[1] then
                            return redis.call("del", KEYS[1])
                        else
                            return 0
                        end
                        """,
                        1, self.LOCK_KEY, self.instance_id
                    )
            else:
                # Another instance is processing
                pass

            await asyncio.sleep(1)
```

---

## 6. Schedule Dashboard API

```python
# GET /api/v1/schedules
# Response:
{
    "schedules": [
        {
            "id": "sched_001",
            "campaign_id": "camp_weekly_digest",
            "type": "recurring",
            "cron": "0 17 * * 5",
            "next_run": "2026-04-05T17:00:00Z",
            "last_run": "2026-03-29T17:00:00Z",
            "status": "active",
            "pending_count": 0
        },
        {
            "id": "sched_002",
            "campaign_id": "camp_flash_sale",
            "type": "scheduled",
            "scheduled_at": "2026-04-02T09:00:00Z",
            "status": "pending",
            "pending_count": 5000000
        }
    ],
    "queue_snapshot": {
        "critical": {"pending": 12, "processing": 5},
        "high": {"pending": 230, "processing": 45},
        "normal": {"pending": 1500000, "processing": 2000},
        "low": {"pending": 50000, "processing": 100}
    }
}
```

---

## Tổng kết

- **4 mức priority** với dedicated resources cho critical emails
- **Scheduling Engine** dùng Redis Sorted Set — simple & reliable
- **Timezone-aware** và **send time optimization** cho UX tốt nhất
- **Distributed lock** ngăn duplicate dispatch

**Bài tiếp theo:** SMTP Deep Dive — hiểu email delivery từ gốc rễ.
