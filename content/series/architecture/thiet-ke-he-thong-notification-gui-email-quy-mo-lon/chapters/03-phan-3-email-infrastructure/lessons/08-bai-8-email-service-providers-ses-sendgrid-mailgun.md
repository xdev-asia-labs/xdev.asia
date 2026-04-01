---
id: 019e7a10-a108-7001-d001-f1e2d3c4b508
title: "Bài 8: Email Service Providers — SES, SendGrid, Mailgun"
slug: bai-8-email-service-providers-ses-sendgrid-mailgun
description: >-
  So sánh chi tiết Amazon SES, SendGrid, Mailgun, Postmark. Pricing, API vs SMTP, multi-provider failover, abstraction layer design.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 8
section_title: "Phần 3: Email Infrastructure & Delivery Engine"
course:
  id: 019e7a10-a100-7001-d001-f1e2d3c4b5a6
  title: "Thiết kế Hệ thống Notification gửi hàng triệu Email"
  slug: thiet-ke-he-thong-notification-gui-email-quy-mo-lon
---

## Giới thiệu

Ở quy mô triệu email, bạn **không nên tự host SMTP server** — hãy dùng Email Service Provider (ESP). Bài này sẽ so sánh các ESP phổ biến và xây dựng abstraction layer hỗ trợ multi-provider failover.

---

## 1. So sánh ESP chi tiết

### Feature Matrix

| Feature | Amazon SES | SendGrid | Mailgun | Postmark |
|---------|-----------|----------|---------|----------|
| **Pricing (per 1M emails)** | $100 | $600-900 | $350-800 | $1,500 |
| **Free tier** | 62K/tháng (EC2) | 100/ngày | 1K/tháng (trial) | 100/tháng |
| **Default send rate** | 200/s | Varies | 300/s | 10K/s |
| **Max send rate** | 10K+/s (request) | Custom | Custom | 10K/s |
| **API** | REST + SDK | REST + SDK | REST + SDK | REST + SDK |
| **SMTP** | ✅ | ✅ | ✅ | ✅ |
| **Webhooks** | SNS | Event Webhook | Webhooks | Webhooks |
| **Dedicated IP** | $24.95/mo/IP | $79.95/mo/IP | $59/mo/IP | Included |
| **Template Engine** | Basic | Advanced | Basic | Basic |
| **Analytics** | Basic | Advanced | Good | Advanced |
| **Deliverability** | Good | Excellent | Good | Excellent |
| **Best for** | High volume, AWS | Marketing + Trans. | Developers | Transactional |

### Cost Comparison cho 10 triệu emails/tháng

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

## 2. Amazon SES Integration

### Setup

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

### SES Configuration Set (Webhook)

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

## 3. SendGrid Integration

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

## 4. Abstraction Layer — Provider-Agnostic Interface

### Interface Design

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

### Multi-Provider Manager

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

### Configuration

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

## 5. Cost Optimization Strategies

### Strategy 1: Route by Email Type

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

### Strategy 2: Volume-Based Switching

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

## 6. Webhook Processing

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

## Tổng kết

- **Amazon SES** là lựa chọn cost-effective nhất cho high volume
- Luôn xây dựng **abstraction layer** — không lock-in vào 1 provider
- **Multi-provider failover** đảm bảo high availability
- **Webhook normalization** thống nhất data từ nhiều ESP

**Bài tiếp theo:** Template Engine & Content Pipeline — personalize hàng triệu email.
