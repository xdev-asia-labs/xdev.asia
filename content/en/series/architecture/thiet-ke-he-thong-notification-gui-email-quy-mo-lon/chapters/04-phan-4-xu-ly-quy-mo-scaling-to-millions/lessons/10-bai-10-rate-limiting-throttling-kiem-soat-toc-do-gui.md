---
id: 019e7a10-a110-7001-d001-f1e2d3c4b510
title: 'Lesson 10: Rate Limiting & Throttling — Control sending speed'
slug: bai-10-rate-limiting-throttling-kiem-soat-toc-do-gui
description: >-
  Why is rate limiting needed for email system. Token bucket, sliding window,
  leaky bucket. Multi-level throttling by provider, domain, IP. Adaptive rate
  limiting is based on bounce rate. Redis-based distributed limiter.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 10
section_title: 'Part 4: Handling scale — Scaling to Millions'
course:
  id: 019e7a10-a100-7001-d001-f1e2d3c4b5a6
  title: Design a Notification System to send millions of Emails
  slug: thiet-ke-he-thong-notification-gui-email-quy-mo-lon
locale: en
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🏗️ Architecture — Lesson 10</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 10: Rate Limiting & Throttling — Check</tspan>
      <tspan x="60" dy="42">Control sending speed</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Design a Notification System to send millions of Emails</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 4: Handling scale — Scaling to Millions</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

A system that can render and enqueue millions of emails may not be able to send them safely. The real bottleneck often lies in the **valid sending rate**: limits from ESP, domain/IP reputation, and absorption capacity of downstream systems.

This article focuses on the traffic regulation layer, which determines whether a 10 million email campaign will be successful or push the entire domain into the spam folder.

---

## 1. Why is rate limiting required?

### Practical limits

| Limited Source | Example | Consequences if the threshold is exceeded |
|----------|-------|------------------------|
| ESP send quota | SES 200 emails/sec default | `ThrottlingException`, queue backlog |
| Domain reputation | New domain suddenly sent 1M emails | Spam placement increased sharply |
| IP reputation | Dedicated IP not yet warm-up | Bounce and complaints increase |
| ISP limits | Gmail, Yahoo throttling by domain | Deferred delivery, soft bounce |
| Internal systems | Too many workers, DB updates too thick | High CPU, lock contention |

### The goal of the throttling layer

- Protect the sender's reputation.
- Protect email providers from traffic burst.
- Prioritize transactional emails over email marketing.
- Maintain stable throughput instead of short spikes then crashing.
- Keep queue backlog under control.

---

## 2. Popular algorithms

### Quick comparison

| Algorithm | Strengths | Weakness | Suitable for |
|-------------|-----------|----------|-------------|
| Fixed Window | Easy to implement | Burst at window boundary | Simple Counter |
| Sliding Window | More accurate | Consumes more state | Per-domain limits |
| Leaky Bucket | Output is equal | Somewhat stiff with valid traffic bursts | Smoothing traffic |
| Token Bucket | Allows controlled bursts | Need to synchronize state | ESP/API throttling |

### Recommendations for email systems

- Use **token bucket** to limit by provider and by IP pool.
- Use **sliding window** for complaint rate, bounce rate, open rate by campaign/domain.
- Use **priority-aware scheduler** to prevent important emails from being consumed by marketing.

---

## 3. Multi-level throttling architecture

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

### Reasonable test order

1. Check suppression list and bounce history.
2. Check the priority class of the message.
3. Check quota by provider.
4. Check quota by recipient domain.
5. Check quota according to sender IP / dedicated IP pool.
6. If it fails, reschedule instead of dropping.

### Priority policy example

| Priorities | Use cases | SLA | Rules |
|----------|----------|-----|---------|
| critical | OTP, reset password | < 30s | There is always reserved capacity |
| high | Order confirmation | < 2 minutes | Not blocked by marketing |
| normal | Product updates | < 15 minutes | Dynamic quota sharing |
| low | Newsletter, drip campaign | According to schedule | Cut off before bad reputation |

---

## 4. Distributed rate limiter with Redis

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

### Keys to follow

```text. text
rate:provider:ses
rate:provider:sendgrid
rate:domain:gmail.com
rate:domain:yahoo.com
rate:ip-pool:warm-01
rate:campaign:camp_flash_sale_april
```

The important point is that the limiter must be **shared between all workers**, otherwise each worker will think they have a quota and the system will immediately exceed the limit.

---

## 5. Adaptive throttling based on signal deliverability

Sending speed should not be fixed. It must respond to signals from reality.

### Signals to monitor

| Signal | Meaning | Action |
|--------|---------|-----------|
| Soft bounce increases | ISP is defer traffic | 20-40% off send rate |
| Complaint rate increased | Content/list quality is bad | Strong reduction, pause campaign |
| Open rate decreased abnormally | Spam placement increases | Reduce speed, change IP/domain mix |
| Queue delay is too high | The system is missing workers/quota | Increase workers or extend ETA |

### Policy engine example

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

### Principles

- Marketing traffic is the first place to sacrifice.
- Transactional traffic should have a fixed quota reserve.
- Do not reduce quota to 0 immediately unless the complaint spike is very high or ESP requires a pause.

---

## 6. IP warming and domain warm-up

A common mistake is a new domain/IP but sending a full load on the first day.

### Sample warm-up roadmap for new dedicated IP

| Date | Maximum emails/day | Object |
|-------|-------------------|-----------|
| 1 | 5,000 | Users are highly engaged |
| 2 | 10,000 | Segment clean, recently active |
| 3 | 20,000 | Slight expansion |
| 4 | 40,000 | Start mixed traffic |
| 5 | 80,000 | Keep up with complaints/bounce |
| 6 | 160,000 | Continue scaling |
| 7+ | According to reputation | Only increase if metrics are okay |

### Guardrails during warm-up

- Only send to recipients who have clearly opted in.
- Prioritize segments with good open/click rates.
- Do not reuse old low quality lists.
- Monitor Gmail Postmaster Tools and Microsoft SNDS if available.

---

## 7. Common failure modes

### When the limiter design is wrong

1. **Local limiter per worker**: total throughput exceeds quota even though each worker is "correct".
2. **No reserve capacity**: OTP is slow because the marketing campaign is consuming all the tokens.
3. **Throttle according to provider but forgot domain**: ESP still receives, but Gmail starts defer.
4. **Infinite retry**: throttle is amplified due to retry storm.

### Checklist production

- There are quotas by provider, domain, IP, campaign.
- Has reserve for critical traffic.
- There is a manual pause campaign mechanism.
- Has adaptive throttling based on feedback loop.
- There is a dashboard that displays the current send rate and remaining quota.

---

## Summary

Rate limiting is not just a technical problem but a vital layer of protection for deliverability. A good system must know how to send quickly when allowed, slow down when there is a bad signal, and always prioritize the most important traffic.

**Next article:** We will organize batch processing and worker pool to handle millions of recipients effectively without running out of memory or clogging the database.
