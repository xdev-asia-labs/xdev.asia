---
id: 019e7a10-a114-7001-d001-f1e2d3c4b514
title: 'Lesson 14: Monitoring, Metrics & Alerting'
slug: bai-14-monitoring-metrics-alerting
description: >-
  Key metrics for notification platform, Prometheus and Grafana dashboard,
  distributed tracing with OpenTelemetry, queue depth monitoring, worker health
  checks, SLA tracking and runbooks for common incidents.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 14
section_title: 'Part 5: Deliverability, Monitoring & Production'
course:
  id: 019e7a10-a100-7001-d001-f1e2d3c4b5a6
  title: Design a Notification System to send millions of Emails
  slug: thiet-ke-he-thong-notification-gui-email-quy-mo-lon
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6959" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6959)"/>

  <!-- Decorations -->
  <g>
    <circle cx="866" cy="268" r="24" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="632" cy="174" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="898" cy="80" r="10" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="664" cy="246" r="18" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="930" cy="152" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="168" x2="1100" y2="248" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="198" x2="1050" y2="268" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1005.2390923627308,146.5 1005.2390923627308,189.5 968,211 930.7609076372692,189.5 930.7609076372692,146.5 968,125" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🏗️ Architecture — Lesson 14</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 14: Monitoring, Metrics & Alerting</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Design a Notification System to send millions of Emails</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 5: Deliverability, Monitoring & Production</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

Without metrics, a 10 million email campaign is just a leap of faith into the dark. The notification production system must be able to immediately answer the questions: how fast is it sending, where is it stuck, which provider is failing, which campaign is about to break its SLA.

---

## 1. Observe the system layer by layer

### Four main layers of metrics

| Class | For example metric |
|-----|--------------|
| Business | emails sent, delivered, complaints, campaign ETA |
| Application | render latency, send latency, retry count |
| Queue | consumer lag, queue depth, DLQ size |
| Infrastructure | CPU, memory, network, pod restarts |

### Anti-patterns should be avoided

- Only look at CPU/RAM, not queue lag.
- Just look `sent_count` without looking at delivery/bounce/complaint.
- Do not attach metrics `provider`, `campaign_type`, `recipient_domain`.

---

## 2. Core set of metrics for email platform

### Business metrics

| Metrics | Meaning |
|--------|--------|
| `emails_requested_total` | total number of emails requested to be sent |
| `emails_sent_total` | number of emails accepted by provider |
| `emails_delivered_total` | delivery confirmed email number |
| `emails_bounced_total` | bounce by type |
| `emails_complained_total` | complaint spam |
| `campaign_eta_seconds` | Campaign completion ETA |

### Application metrics

| Metrics | Labels should have |
|--------|----------------|
| `template_render_seconds` | template_id, locale |
| `provider_send_seconds` | provider, priority |
| `retry_attempt_total` | error_class, provider |
| `throttle_decision_total` | limit_type, result |
| `worker_batch_duration_seconds` | worker_group |

### Queue metrics

| Metrics | Meaning |
|--------|--------|
| `queue_depth` | total pending jobs |
| `consumer_lag` | backlog level compared to producer |
| `retry_queue_depth` | number of jobs waiting for retry |
| `dlq_messages_total` | quantity goes into DLQ |

---

## 3. Prometheus instrumentation

### Example metric definitions

```python
from prometheus_client import Counter, Histogram, Gauge

emails_sent_total = Counter(
    'emails_sent_total',
    'Total emails accepted by provider',
    ['provider', 'priority', 'campaign_type']
)

provider_send_seconds = Histogram(
    'provider_send_seconds',
    'Latency of provider send API',
    ['provider'],
    buckets=(0.05, 0.1, 0.25, 0.5, 1, 2, 5, 10)
)

queue_depth = Gauge(
    'queue_depth',
    'Current queue depth',
    ['queue_name']
)
```

### Note when using labels

- Only add labels with controllable cardinality.
- Do not attach a good email address `message_id` Go to metric labels.
- With campaigns, it is usually a good idea to aggregate accordingly `campaign_type` or top-N campaigns, not all campaigns at the same time.

---

## 4. What should the dashboard display?

### Campaign management dashboard

- Current send rate according to provider.
- Delivery rate and bounce rate by domain.
- ETA completes the campaign.
- Queue backlog and retry backlog.
- Complaint rate in 5 minutes.

### Dashboard for on-call engineers

- Top error classes in the last 15 minutes.
- Circuit breaker state of each provider.
- Worker pod restarts.
- DB latency, Redis latency.
- Webhook ingestion lag.

### Dashboard for deliverability owner

- Open/click trends by domain.
- Hard bounce/complaint by segment.
- IP warming progress.
- Domain reputation indicators.

---

## 5. Alerting: few but correct warnings

### Example alert rules

```yaml
groups:
  - name: notification-alerts
    rules:
      - alert: NotificationDLQSpike
        expr: increase(dlq_messages_total[5m]) > 200
        for: 10m
        labels:
          severity: page
        annotations:
          summary: "DLQ spike detected"

      - alert: ProviderThrottleRateHigh
        expr: rate(retry_attempt_total{error_class="provider_throttled"}[5m]) > 20
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "Provider throttling rate is high"

      - alert: CriticalQueueBacklog
        expr: queue_depth{queue_name="critical-email"} > 1000
        for: 2m
        labels:
          severity: page
        annotations:
          summary: "Critical email backlog exceeded threshold"
```

### Alerting principles

- Page only when there is SLA risk or data loss.
- Warning when you need to observe but do not need to wake up on-call.
- Alerts must lead to a clear action, not just a general notification.

---

## 6. Distributed tracing with OpenTelemetry

An email goes through many hops: API -> queue -> worker -> provider -> webhook -> analytics. Without trace, it is difficult to connect the story of a message when there is an incident.

### Propagate correlation identifiers

```python
from opentelemetry import trace

tracer = trace.get_tracer(__name__)

def enqueue_email(job):
    with tracer.start_as_current_span("enqueue_email") as span:
        span.set_attribute("campaign.id", job.campaign_id)
        span.set_attribute("message.id", job.message_id)
        span.set_attribute("priority", job.priority)
        publish_to_queue(job)
```

### Fields should propagate

- `trace_id`
- `campaign_id`
- `message_id`
- `provider`
- `recipient_domain`

Trace does not replace metrics, but is extremely useful for analyzing a specific error or latency outlier.

---

## 7. SLO/SLA for notification system

### Practical SLO example

| Traffic type | SLO |
|--------------|-----|
| OTP / password reset | 99% sent to provider in < 15 seconds |
| Order confirmation | 99% in < 2 minutes |
| Marketing campaigns | 95% completed within committed ETA |

### Error budget mindset

If your marketing workload is consuming too much of your system's error budget, you must de-prioritize or lengthen your campaign runtime. SLO helps teams make decisions using data instead of emotional arguments.

---

## 8. Runbook for common problems

### Incident: queue backlog increased sharply

1. Check provider throttling rate.
2. Check if the autoscaler scales up.
3. Check if the Redis limiter is locked too tight.
4. If it is a marketing campaign, consider reducing the send rate or pausing.

### Incident: complaint rate increased abnormally

1. Determine which campaign is causing the spike.
2. Pause that campaign first.
3. Check the segment and email content.
4. Reduce domain-wide throughput if the effect is widespread.

### Incident: delivery decreased but sent is still high

1. Check if webhooks are missing or slow.
2. Check mailbox provider-specific issues.
3. Comparison by domain: Is Gmail or Outlook affected separately?
4. Check reputation dashboards.

---

## Summary

Good monitoring helps you see the notification system from a real operational perspective: throughput, quality, SLA and risk. The right metrics will shorten investigation time, reduce false alarms, and allow campaigns to be scaled with much greater confidence.

**Next article:** We close the series with a production case study, deploying a system to send 10 million end-to-end emails on a real-world infrastructure.
