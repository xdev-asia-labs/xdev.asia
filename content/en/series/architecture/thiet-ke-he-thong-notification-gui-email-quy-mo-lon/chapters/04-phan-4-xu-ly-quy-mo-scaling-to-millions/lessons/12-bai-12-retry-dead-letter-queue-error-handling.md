---
id: 019e7a10-a112-7001-d001-f1e2d3c4b512
title: 'Lesson 12: Retry, Dead Letter Queue & Error Handling'
slug: bai-12-retry-dead-letter-queue-error-handling
description: >-
  Retry strategies, exponential backoff, jitter, dead letter queue design, error
  classification, poison message handling, compensation logic and alerting.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 12
section_title: 'Part 4: Handling scale — Scaling to Millions'
course:
  id: 019e7a10-a100-7001-d001-f1e2d3c4b5a6
  title: Design a Notification System to send millions of Emails
  slug: thiet-ke-he-thong-notification-gui-email-quy-mo-lon
locale: en
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🏗️ Architecture — Lesson 12</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 12: Retry, Dead Letter Queue & Error</tspan>
      <tspan x="60" dy="42">Handling</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Design a Notification System to send millions of Emails</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 4: Handling scale — Scaling to Millions</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

At scale, errors are no longer exceptions but the default state of the system. SMTP timeout, provider 429, slow DNS lookup, webhook not returning, database lock contention, payload data error. To be production-ready, you must design error handling as a central part of the architecture.

---

## 1. Classify errors before talking about retry

Retry is only effective when the error is temporary. If the error is permanent and still retries, you are creating a retry storm.

### Error taxonomy

| Error group | Example | Is there a retry? | Action |
|----------|-------|-----------|-----------|
| Transient infrastructure | network timeout, DNS timeout | Yes | exponential backoff |
| Provider throttling | HTTP 429, SMTP 421 | Yes | deceleration + retry |
| Temporary mailbox issues | mailbox full, greylisting | Limited | slow retry |
| Permanent recipient failure | user unknown, invalid domain | No | mark bounced |
| Content/policy failure | blocked content, policy violation | No | move to manual review |
| Internal bugs | null field, bad template render | Not immediately | isolate, DLQ |

### Important rule

- Retry according to **type of error**, not retry based on emotion.
- Save the original error code from the provider to provide enough classification data.
- Define clear mapping from provider error to internal error class.

---

## 2. Reasonable Retry policy

### Policy matrix example

| Error class | Max retries | Delay policy |
|-------------|-------------|--------------|
| network_timeout | 5 | 5s, 15s, 30s, 60s, 120s |
| provider_throttled | 8 | 10s + jitter, associated with adaptive throttling |
| soft_bounce | 3 | 15m, 1h, 6h |
| rendering_failure | 0 | go straight DLQ |
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

Jitter helps workers not retry an error at the same time and create additional spikes on the provider.

---

## 3. Retry queue and scheduled reprocessing

### Why not immediately push back to the main queue?

If the job fails and immediately returns to the main queue, the worker can immediately reload, leading to a useless hot loop. Retry requires **intentional timeout**.

### Popular model

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

### Redis Sorted Set for delayed retry

```python
def schedule_retry(redis_client, message_id: str, payload: dict, retry_at_epoch: int):
    redis_client.zadd(
        'email:retry:zset',
        {json.dumps({'message_id': message_id, 'payload': payload}): retry_at_epoch}
    )
```

A separate scheduler will poll the due items and republish them to the main queue.

---

## 4. How is Dead Letter Queue designed?

DLQ is not a landfill. It is a quarantine area for investigation, repair and controlled reprocessing.

### When does the message enter DLQ?

- Too many retries.
- Payload is broken or violates the schema.
- Template rendering error repeats.
- Provider returns policy/permanent failure error but still needs audit.
- Unknown error class does not have a safe mapping.

### Content to keep in DLQ message

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

### DLQ operating principles

- DLQ must be searchable by campaign, provider, error class.
- Has dashboard top error types.
- Reprocess is only allowed through tool/flow control.
- Do not automatically re-drive the entire DLQ if you do not understand the root cause.

---

## 5. Poison message and isolation

A poison message is a message that causes a worker to crash or fail to repeat indefinitely. If not isolated, it will destroy the entire consumer group.

### How to handle it

1. Very low attempt limit for unknown/internal errors.
2. Wrap the parse/render/send step in a clear boundary.
3. Record `error_class = poison_message` if the worker fails multiple times on the same payload.
4. Switch to DLQ and alert the engineer on duty.

### Defensive validation before sending

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

Early validation helps catch errors before they get deeper into the pipeline.

---

## 6. Circuit breaker for external providers

When the provider is experiencing widespread errors, constant retries only make the situation worse.

### State machine is simple

| State | Meaning | Action |
|--------|---------|-----------|
| closed | normal provider | send normally |
| open | provider error exceeds threshold | stop traffic, switch to failover |
| half-open | try again with less traffic | recovery review |

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

The circuit breaker must be attached to the **provider failover strategy**. If the breaker is not opened without an alternative path, the queue will still just stand still.

---

## 7. Compensation logic and consistent state

An email may have been received by the provider, but the worker failed before updating the DB. Without compensation, you won't know whether an email has been sent or not.

### How to handle it

- Mount `message_id` internal to the metadata sent by the provider.
- Receive webhook or callback to reconcile state.
- Have periodic job reconciliation: compare outbound log with provider events.
- For uncertain status, check `unknown` instead of assuming failure.

### Recommended internal status

```text
pending -> processing -> sent_to_provider -> delivered
                           │
                           ├-> deferred
                           ├-> bounced_permanent
                           ├-> bounced_transient
                           └-> failed_internal
```

---

## 8. Alerting and minimal runbook

### Warning should be there

- The rate of messages entering DLQ increased dramatically.
- An error class accounts for over 20% in 5 minutes.
- Circuit breaker opens with main provider.
- Retry queue backlog increases but throughput decreases.
- New unknown error code appears.

### Short runbook for on-call

1. Identify the error in the new provider, data, or deployed code.
2. Check if you need to pause campaign or failover provider.
3. View the top error class and some sample payloads in DLQ.
4. Only re-drive after verifying that the root cause has been resolved.

---

## Summary

Retry and DLQ are not aftermarket accessories. They are a mandatory mechanism for the system to tolerate errors without creating chaos. Good design must know how to classify errors, retry strategically, isolate poison messages, and leave enough traces for investigation.

**Next article:** We move from the ability to send to the ability to reach the inbox, that is, deliverability with SPF, DKIM, DMARC and reputation management.
