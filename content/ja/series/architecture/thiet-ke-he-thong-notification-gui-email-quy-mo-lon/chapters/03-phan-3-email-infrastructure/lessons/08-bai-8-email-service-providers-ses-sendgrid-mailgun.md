---
id: 019e7a10-a108-7001-d001-f1e2d3c4b508
title: 'レッスン 8: 電子メール サービス プロバイダー — SES、SendGrid、Mailgun'
slug: bai-8-email-service-providers-ses-sendgrid-mailgun
description: >-
  Amazon SES、SendGrid、Mailgun、Postmark の詳細な比較。価格、API と
  SMTP、マルチプロバイダーのフェイルオーバー、抽象化レイヤーの設計。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 8
section_title: 'パート 3: 電子メール インフラストラクチャと配信エンジン'
course:
  id: 019e7a10-a100-7001-d001-f1e2d3c4b5a6
  title: 数百万の電子メールを送信する通知システムを設計する
  slug: thiet-ke-he-thong-notification-gui-email-quy-mo-lon
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6902" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6902)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1082" cy="176" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="1064" cy="138" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="1046" cy="100" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="1028" cy="62" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="1010" cy="284" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="236" x2="1100" y2="316" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="266" x2="1050" y2="336" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1012.8467875173176,170.5 1012.8467875173176,201.5 986,217 959.1532124826824,201.5 959.1532124826824,170.5 986,155" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🏗️ アーキテクチャ — レッスン 8</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 8: 電子メール サービス プロバイダー — SES、</tspan>
      <tspan x="60" dy="42">SendGrid、メールガン</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">数百万の電子メールを送信する通知システムを設計する</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: 電子メール インフラストラクチャと配信エンジン</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

数百万件の電子メールの規模では、**独自の SMTP サーバーをホストすべきではありません**。電子メール サービス プロバイダー (ESP) を使用してください。この記事では、一般的な ESP を比較し、マルチプロバイダーのフェールオーバーをサポートする抽象化レイヤーを構築します。

---

## 1. ESP を詳細に比較する

### 機能マトリックス

|特長 |アマゾンSES |送信グリッド |メールガン |消印 |
|----------|-----------|----------|----------|----------|
| **料金 (100 万メールあたり)** | 100ドル | $600-900 | $350-800 | 1,500ドル |
| **無料利用枠** | 62K/月 (EC2) | 100/日 | 1,000/月 (トライアル) | 100/月 |
| **デフォルトの送信レート** | 200/秒 |さまざま | 300/秒 | 10K/秒 |
| **最大送信レート** | 10K+/秒 (リクエスト) |カスタム |カスタム | 10K/秒 |
| **API** | REST + SDK | REST + SDK | REST + SDK | REST + SDK |
| **SMTP** | ✅ | ✅ | ✅ | ✅ |
| **Webhook** | SNS |イベント Webhook | Webhook | Webhook |
| **専用 IP** | $24.95/月/IP | $79.95/月/IP | $59/月/IP |含まれています |
| **テンプレート エンジン** |基本 |上級 |基本 |基本 |
| **分析** |基本 |上級 |良い |上級 |
| **配信可能性** |良い |素晴らしい |良い |素晴らしい |
| **こんな用途に最適** |大容量、AWS |マーケティング + トランス|開発者 |トランザクション |

### 月あたり 1,000 万件のメールのコストの比較

```
Amazon SES:
  10M × $0.10/1000 = $1,000
  + 2 Dedicated IPs = $49.90
  Total: ~$1,050/tháng

SendGrid (Pro plan):
  $449 base (1.5M included)
  + 8.5M × $0.40/1000 = $3,400
  Total: ~$3,849/tháng

Mailgun (Scale plan):
  $549 base (1M included)
  + 9M × $0.80/1000 = $7,200
  Total: ~$7,749/tháng

→ Amazon SES rẻ nhất 3-7x cho high volume
```

---

## 2. Amazon SES の統合

### セットアップ

```python
import boto3
from botocore.config import Config

class AmazonSESProvider:
    def __init__(self):
        self.client = boto3.client(
            'ses',
            region_name='ap-southeast-1',
            config=Config(
                retries={'max_attempts': 3, 'mode': 'adaptive'},
                max_pool_connections=50,
            )
        )

    async def send(self, email: Email) -> SendResult:
        try:
            response = self.client.send_raw_email(
                Source=email.from_address,
                Destinations=[email.to_address],
                RawMessage={'Data': email.to_mime()},
                ConfigurationSetName='production-tracking',
                Tags=[
                    {'Name': 'campaign_id', 'Value': email.campaign_id},
                    {'Name': 'message_id', 'Value': email.message_id},
                ],
            )
            return SendResult(
                success=True,
                provider='ses',
                provider_message_id=response['MessageId'],
            )
        except self.client.exceptions.MessageRejected as e:
            return SendResult(success=False, error=str(e))
        except self.client.exceptions.MailFromDomainNotVerifiedException:
            raise ConfigurationError("Domain not verified in SES")

    async def send_bulk(self, emails: list[Email]) -> list[SendResult]:
        """SES v2 Bulk Send - up to 50 emails per call"""
        entries = [
            {
                'Destination': {
                    'ToAddresses': [e.to_address]
                },
                'ReplacementTags': [
                    {'Name': 'name', 'Value': e.recipient_name},
                ],
            }
            for e in emails
        ]

        response = self.client.send_bulk_templated_email(
            Source=emails[0].from_address,
            Template='flash_sale_v2',
            DefaultTemplateData='{}',
            Destinations=entries,
        )
        return [
            SendResult(
                success=r['Status'] == 'Success',
                provider_message_id=r.get('MessageId'),
                error=r.get('Error'),
            )
            for r in response['Status']
        ]
```

### SES 構成セット (Webhook)

```json
{
  "ConfigurationSet": "production-tracking",
  "EventDestination": {
    "Name": "sns-notification",
    "Enabled": true,
    "MatchingEventTypes": [
      "send", "delivery", "bounce", "complaint", "open", "click"
    ],
    "SNSDestination": {
      "TopicARN": "arn:aws:sns:ap-southeast-1:123456:email-events"
    }
  }
}
```

---

## 3. SendGrid の統合

```python
import sendgrid
from sendgrid.helpers.mail import Mail, Personalization

class SendGridProvider:
    def __init__(self):
        self.sg = sendgrid.SendGridAPIClient(api_key=os.getenv('SENDGRID_API_KEY'))

    async def send(self, email: Email) -> SendResult:
        message = Mail(
            from_email=(email.from_address, email.from_name),
            to_emails=email.to_address,
            subject=email.subject,
            html_content=email.html_body,
        )
        message.add_header('X-Campaign-ID', email.campaign_id)

        # Custom tracking
        message.tracking_settings = {
            'click_tracking': {'enable': True},
            'open_tracking': {'enable': True},
        }

        try:
            response = self.sg.send(message)
            return SendResult(
                success=response.status_code in (200, 202),
                provider='sendgrid',
                provider_message_id=response.headers.get('X-Message-Id'),
            )
        except Exception as e:
            return SendResult(success=False, error=str(e))

    async def send_bulk(self, emails: list[Email]) -> SendResult:
        """SendGrid supports up to 1000 personalizations per request"""
        message = Mail()
        message.from_email = (emails[0].from_address, emails[0].from_name)
        message.subject = emails[0].subject
        message.add_content('text/html', emails[0].html_body)

        for email in emails:
            p = Personalization()
            p.add_to(email.to_address)
            p.dynamic_template_data = email.template_variables
            message.add_personalization(p)

        response = self.sg.send(message)
        return SendResult(success=response.status_code == 202)
```

---

## 4. 抽象化レイヤー — プロバイダーに依存しないインターフェイス

### インターフェースの設計

```python
from abc import ABC, abstractmethod
from dataclasses import dataclass
from enum import Enum

class ProviderName(Enum):
    SES = 'ses'
    SENDGRID = 'sendgrid'
    MAILGUN = 'mailgun'

@dataclass
class Email:
    message_id: str
    campaign_id: str
    from_address: str
    from_name: str
    to_address: str
    recipient_name: str
    subject: str
    html_body: str
    text_body: str | None = None
    headers: dict | None = None
    tags: dict | None = None

@dataclass
class SendResult:
    success: bool
    provider: str = ''
    provider_message_id: str = ''
    error: str = ''
    latency_ms: float = 0

class EmailProvider(ABC):
    @abstractmethod
    async def send(self, email: Email) -> SendResult:
        pass

    @abstractmethod
    async def send_bulk(self, emails: list[Email]) -> list[SendResult]:
        pass

    @abstractmethod
    async def health_check(self) -> bool:
        pass
```

### マルチプロバイダーマネージャー

```python
class MultiProviderManager:
    def __init__(self, config: dict):
        self.providers: dict[str, EmailProvider] = {}
        self.breakers: dict[str, CircuitBreaker] = {}
        self.primary = config['primary']
        self.fallback_order = config['fallback_order']
        self.metrics = MetricsCollector()

        # Initialize providers
        for name, provider_config in config['providers'].items():
            self.providers[name] = self._create_provider(name, provider_config)
            self.breakers[name] = CircuitBreaker(
                name=name,
                failure_threshold=provider_config.get('failure_threshold', 10),
                timeout_seconds=provider_config.get('circuit_timeout', 300),
            )

    async def send(self, email: Email) -> SendResult:
        # Try primary provider
        providers_to_try = [self.primary] + self.fallback_order

        for provider_name in providers_to_try:
            breaker = self.breakers[provider_name]

            if breaker.is_open:
                self.metrics.increment(f'{provider_name}.circuit_open')
                continue

            try:
                start = time.monotonic()
                result = await self.providers[provider_name].send(email)
                latency = (time.monotonic() - start) * 1000

                result.latency_ms = latency
                self.metrics.histogram(f'{provider_name}.latency', latency)

                if result.success:
                    breaker.record_success()
                    self.metrics.increment(f'{provider_name}.success')
                    return result
                else:
                    breaker.record_failure()
                    self.metrics.increment(f'{provider_name}.failure')

            except Exception as e:
                breaker.record_failure()
                self.metrics.increment(f'{provider_name}.error')
                logger.error(f"Provider {provider_name} error: {e}")

        # All providers failed
        self.metrics.increment('all_providers_failed')
        raise AllProvidersFailedError(
            f"Failed to send email {email.message_id} via all providers"
        )
```

### 構成

```yaml
# config/email-providers.yaml
email:
  primary: ses
  fallback_order: [sendgrid, mailgun]
  providers:
    ses:
      region: ap-southeast-1
      max_rate: 200  # emails/sec
      failure_threshold: 10
      circuit_timeout: 300
      dedicated_ips:
        - 54.x.x.1
        - 54.x.x.2
    sendgrid:
      api_key_env: SENDGRID_API_KEY
      max_rate: 500
      failure_threshold: 5
      circuit_timeout: 180
    mailgun:
      api_key_env: MAILGUN_API_KEY
      domain: yourdomain.com
      max_rate: 300
      failure_threshold: 5
      circuit_timeout: 180
```

---

## 5. コスト最適化戦略

### 戦略 1: 電子メールの種類によるルーティング

```python
class CostOptimizedRouter:
    """Route emails to cheapest viable provider"""

    ROUTING_RULES = {
        'transactional': 'postmark',   # Best deliverability
        'marketing': 'ses',            # Cheapest
        'notification': 'ses',         # Cheapest
    }

    async def route(self, email: Email) -> str:
        email_type = email.tags.get('type', 'notification')
        return self.ROUTING_RULES.get(email_type, 'ses')
```

### 戦略 2: ボリュームベースの切り替え

```python
class VolumeBasedRouter:
    """Switch provider when exceeding free tier"""

    async def route(self, email: Email) -> str:
        ses_count = await self.get_monthly_count('ses')
        sendgrid_count = await self.get_daily_count('sendgrid')

        if ses_count < 62000:  # SES free tier (EC2)
            return 'ses'
        elif sendgrid_count < 100:  # SendGrid free tier
            return 'sendgrid'
        else:
            return 'ses'  # SES cheapest for paid
```

---

## 6. Webhook の処理

```python
class WebhookProcessor:
    """Process delivery events from all ESPs"""

    async def handle_ses_webhook(self, sns_message: dict):
        """Amazon SES sends events via SNS"""
        event = json.loads(sns_message['Message'])
        event_type = event['eventType']

        normalized = {
            'provider': 'ses',
            'message_id': event['mail']['messageId'],
            'event_type': self.NORMALIZE_MAP[event_type],
            'timestamp': event[event_type.lower()].get('timestamp'),
        }
        await self.process_normalized(normalized)

    async def handle_sendgrid_webhook(self, events: list):
        """SendGrid sends batch webhook events"""
        for event in events:
            normalized = {
                'provider': 'sendgrid',
                'message_id': event.get('sg_message_id', '').split('.')[0],
                'event_type': self.NORMALIZE_MAP[event['event']],
                'timestamp': datetime.fromtimestamp(event['timestamp']),
            }
            await self.process_normalized(normalized)

    async def process_normalized(self, event: dict):
        """Unified processing for all providers"""
        await self.kafka.produce('email-status', event)
```

---

## 概要

- **Amazon SES** は、大容量向けに最もコスト効率の高いオプションです
- 常に **抽象化レイヤー** を構築します — プロバイダーにロックインしないでください
- **マルチプロバイダーフェイルオーバー**により高可用性を確保
- **Webhook 正規化** により、複数の ESP からのデータが統合されます

**次の記事:** テンプレート エンジンとコンテンツ パイプライン — 数百万の電子メールをパーソナライズします。
