---
id: 019e7a10-a103-7001-d001-f1e2d3c4b503
title: 'レッスン 3: 大規模電子メール システムの設計パターン'
slug: bai-3-design-patterns-cho-email-system-quy-mo-lon
description: >-
  ファンアウト パターン、プロデューサー/コンシューマー パターン、優先キュー パターン。通知ワークフローのサーキット ブレーカー、バルクヘッド、送信ボックス
  パターン、サーガ パターン。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 3
section_title: 'パート 1: 基礎 — 大規模な通知問題を理解する'
course:
  id: 019e7a10-a100-7001-d001-f1e2d3c4b5a6
  title: 数百万の電子メールを送信する通知システムを設計する
  slug: thiet-ke-he-thong-notification-gui-email-quy-mo-lon
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4014" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4014)"/>

  <!-- Decorations -->
  <g>
    <circle cx="922" cy="116" r="20" fill="#f87171" opacity="0.11"/>
    <circle cx="744" cy="58" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="1066" cy="260" r="32" fill="#f87171" opacity="0.13"/>
    <circle cx="888" cy="202" r="8" fill="#f87171" opacity="0.09"/>
    <circle cx="710" cy="144" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="56" x2="1100" y2="136" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="86" x2="1050" y2="156" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="932.8467875173176,90.5 932.8467875173176,121.5 906,137 879.1532124826824,121.5 879.1532124826824,90.50000000000001 906,75" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🏗️ アーキテクチャ — レッスン 3</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 3: 電子メール システムの設計パターン</tspan>
      <tspan x="60" dy="42">大規模な</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">数百万の電子メールを送信する通知システムを設計する</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: 基礎 — 大規模な通知問題を理解する</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

大規模な電子メール システムの設計は、単にコードを記述するだけではなく、適切な **設計パターン**を適用して、システムの信頼性、拡張性、保守性を高めることが重要です。この記事では、最も重要な 6 つのパターンについて説明します。

---

## 1. ファンアウトパターン

### 数学の問題

1,000 万人の受信者に送信されるキャンペーン → 1,000 万の個別メッセージに**ファンアウト**する必要があります。

### 実装

```
Campaign Created (1 event)
    │
    ▼
Fan-Out Service
    │
    ├──▶ Batch 1: recipients[0:1000]     → 1000 messages to Queue
    ├──▶ Batch 2: recipients[1000:2000]   → 1000 messages to Queue
    ├──▶ Batch 3: recipients[2000:3000]   → 1000 messages to Queue
    │    ...
    └──▶ Batch 10000: recipients[9999000:10000000] → 1000 messages
```

```python
class FanOutService:
    BATCH_SIZE = 1000

    async def fan_out_campaign(self, campaign_id: str):
        campaign = await self.db.get_campaign(campaign_id)
        segment = await self.segment_service.get(campaign.segment_id)

        # Stream recipients in batches (không load tất cả vào memory)
        async for batch in segment.stream_recipients(batch_size=self.BATCH_SIZE):
            # Filter suppressed emails
            active = await self.suppression_service.filter_batch(batch)

            # Enqueue batch
            messages = [
                EmailMessage(
                    campaign_id=campaign_id,
                    recipient=r,
                    template_id=campaign.template_id,
                    priority=campaign.priority,
                )
                for r in active
            ]
            await self.queue.publish_batch("email-send", messages)

            # Update progress
            await self.db.increment_campaign_queued(
                campaign_id, len(messages)
            )
```

### 重要なポイント

- **ストリーミング、すべてをロードしない**: カーソル/ページネーションを使用して受信者をストリーミングします
- **バッチ公開**: 個別の公開ではなく、バッチ商品をキューに送信します。
- **進行状況の追跡**: ファンアウトの進行状況を更新します

---

## 2. 生産者と消費者のパターン

### デザイン

```
Producers (Notification Services)
    │
    ▼
┌──────────────────────────────────┐
│         Message Queue            │
│  ┌─────┐ ┌─────┐ ┌─────┐       │
│  │ P0  │ │ P1  │ │ P2  │  ...  │
│  └─────┘ └─────┘ └─────┘       │
└──────────────┬───────────────────┘
               │
    ┌──────────┼──────────┐
    ▼          ▼          ▼
┌────────┐ ┌────────┐ ┌────────┐
│Worker 1│ │Worker 2│ │Worker 3│  ... (Consumer Group)
└────────┘ └────────┘ └────────┘
```

### コンシューマグループの構成

```yaml
# Kafka consumer config
consumer:
  group_id: email-workers
  auto_offset_reset: earliest
  enable_auto_commit: false  # Manual commit sau khi send thành công
  max_poll_records: 100      # Process 100 messages per poll
  session_timeout_ms: 30000
  heartbeat_interval_ms: 10000
```

### スケーリングルール

```
Throughput target: 2000 emails/giây
Single worker capacity: ~100 emails/giây
Workers needed: 2000 / 100 = 20 workers

Kafka partitions >= Workers count
→ 24 partitions (headroom for scaling)
```

---

## 3. 優先キューのパターン

### 複数レベルの優先順位

```python
class PriorityQueueRouter:
    TOPICS = {
        "critical": "email-send-critical",   # OTP, password reset
        "high": "email-send-high",           # Order confirmation
        "normal": "email-send-normal",       # Marketing
        "low": "email-send-low",             # Newsletter digest
    }

    # Worker allocation
    WORKER_ALLOCATION = {
        "critical": 0.30,  # 30% workers cho critical
        "high": 0.30,      # 30% cho high
        "normal": 0.30,    # 30% cho normal
        "low": 0.10,       # 10% cho low
    }

    async def route(self, message: EmailMessage):
        topic = self.TOPICS[message.priority]
        await self.kafka.publish(topic, message)
```

### 飢餓の防止

```python
class WeightedConsumer:
    """Đảm bảo low-priority messages không bị starve"""

    async def poll(self):
        # Weighted round-robin
        messages = []
        messages += await self.poll_topic("critical", max=30)
        messages += await self.poll_topic("high", max=30)
        messages += await self.poll_topic("normal", max=30)
        messages += await self.poll_topic("low", max=10)
        return messages
```

---

## 4. サーキットブレーカーのパターン

### 数学の問題

ESP (電子メール サービス プロバイダー) がダウングレードまたはレート制限を行う可能性があるため、一時的に接続を切断する必要があります。

```
States: CLOSED → OPEN → HALF_OPEN → CLOSED
                  │                      ▲
                  └──────────────────────┘
                     (sau timeout, thử lại)
```

### 実装

```python
class ESPCircuitBreaker:
    def __init__(self, provider_name: str):
        self.provider = provider_name
        self.state = "CLOSED"
        self.failure_count = 0
        self.failure_threshold = 10        # Mở circuit sau 10 failures
        self.timeout = timedelta(minutes=5) # Thử lại sau 5 phút
        self.last_failure_time = None

    async def call(self, send_func, *args):
        if self.state == "OPEN":
            if datetime.now() - self.last_failure_time > self.timeout:
                self.state = "HALF_OPEN"
            else:
                raise CircuitOpenError(self.provider)

        try:
            result = await send_func(*args)
            if self.state == "HALF_OPEN":
                self.state = "CLOSED"
                self.failure_count = 0
            return result
        except ESPError as e:
            self.failure_count += 1
            self.last_failure_time = datetime.now()
            if self.failure_count >= self.failure_threshold:
                self.state = "OPEN"
                logger.critical(
                    f"Circuit OPEN for {self.provider}: "
                    f"{self.failure_count} failures"
                )
            raise
```

### マルチプロバイダーのフェイルオーバー

```python
class MultiProviderClient:
    def __init__(self):
        self.providers = {
            "ses": AmazonSESProvider(),
            "sendgrid": SendGridProvider(),
            "mailgun": MailgunProvider(),
        }
        self.breakers = {
            name: ESPCircuitBreaker(name)
            for name in self.providers
        }
        self.primary = "ses"
        self.fallback_order = ["sendgrid", "mailgun"]

    async def send(self, email: Email) -> SendResult:
        # Try primary
        try:
            return await self.breakers[self.primary].call(
                self.providers[self.primary].send, email
            )
        except (CircuitOpenError, ESPError):
            pass

        # Try fallbacks
        for provider_name in self.fallback_order:
            try:
                return await self.breakers[provider_name].call(
                    self.providers[provider_name].send, email
                )
            except (CircuitOpenError, ESPError):
                continue

        raise AllProvidersDownError("No email provider available")
```

---

## 5. 送信ボックスのパターン

### 数学の問題

データベースの書き込みとキューのパブリッシュが **アトミック**であることを確認する必要があります。パブリッシュは成功したが DB がクラッシュした場合 → 不整合。

### ソリューション: トランザクション送信トレイ

```
1. Write to DB + outbox trong cùng 1 transaction
2. Background process đọc outbox → publish to queue
3. Mark outbox entry as published
```

```python
class OutboxPublisher:
    async def create_campaign_with_outbox(self, campaign_data):
        async with self.db.transaction():
            # 1. Create campaign
            campaign = await self.db.insert("campaigns", campaign_data)

            # 2. Write to outbox (same transaction!)
            await self.db.insert("outbox", {
                "id": generate_ulid(),
                "aggregate_type": "campaign",
                "aggregate_id": campaign.id,
                "event_type": "CampaignCreated",
                "payload": json.dumps(campaign_data),
                "status": "PENDING",
                "created_at": now(),
            })

        # Transaction committed → both campaign & outbox saved atomically

    async def poll_outbox(self):
        """Background job: relay outbox → Kafka"""
        entries = await self.db.query(
            "SELECT * FROM outbox WHERE status = 'PENDING' "
            "ORDER BY created_at LIMIT 100 FOR UPDATE SKIP LOCKED"
        )
        for entry in entries:
            await self.kafka.publish(
                topic=f"notification-{entry.event_type}",
                message=entry.payload,
            )
            await self.db.update(
                "outbox",
                {"id": entry.id},
                {"status": "PUBLISHED", "published_at": now()}
            )
```

---

## 6. 隔壁パターン

### 数学の問題

マーケティング電子メールの洪水 → トランザクション電子メールへの影響 (OTP 遅延) → ユーザーがログインできない。

### 解決策: リソースの分離

```
┌─────────────────────────────────────────┐
│           Notification System            │
│                                          │
│  ┌──────────────────┐ ┌───────────────┐ │
│  │ Transactional    │ │  Marketing    │ │
│  │ Bulkhead         │ │  Bulkhead     │ │
│  │                  │ │               │ │
│  │ Workers: 10      │ │ Workers: 20   │ │
│  │ Queue: dedicated │ │ Queue: shared │ │
│  │ ESP: dedicated   │ │ ESP: shared   │ │
│  │ Rate: unlimited  │ │ Rate: limited │ │
│  └──────────────────┘ └───────────────┘ │
└─────────────────────────────────────────┘
```

```python
class BulkheadConfig:
    BULKHEADS = {
        "transactional": {
            "max_concurrent": 10,
            "queue_size": 1000,
            "timeout_seconds": 5,
            "dedicated_provider_pool": True,
        },
        "marketing": {
            "max_concurrent": 50,
            "queue_size": 100000,
            "timeout_seconds": 30,
            "dedicated_provider_pool": False,
        },
    }
```

---

## 概要

|パターン |解決 |いつ使用するか |
|------|-----------|--------------|
|ファンアウト | 1 キャンペーン → N メッセージ |キャンペーン放送 |
|生産者と消費者 |プロセスから送信されたデカップリング |いつでも |
|優先キュー |クリティカル vs マーケティング |マルチタイプの通知 |
|サーキットブレーカー | ESP の障害 |外部サービス呼び出し |
|送信ボックス | DB + キューの原子性 |データの一貫性 |
|隔壁 |リソースの分離 |マルチテナント/優先 |

**次の記事:** 通知システムのバックボーンであるメッセージ キューについて詳しく説明します。
