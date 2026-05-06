---
id: 019e7a10-a111-7001-d001-f1e2d3c4b511
title: 'Lesson 11: Batch Processing & Worker Pool Architecture'
slug: bai-11-batch-processing-worker-pool-architecture
description: >-
  Chunking strategy, worker pool design, dynamic scaling, graceful shutdown,
  batch database operations, memory-efficient processing, progress tracking and
  resumable campaigns.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 11
section_title: 'Part 4: Handling scale — Scaling to Millions'
course:
  id: 019e7a10-a100-7001-d001-f1e2d3c4b5a6
  title: Design a Notification System to send millions of Emails
  slug: thiet-ke-he-thong-notification-gui-email-quy-mo-lon
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7447" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7447)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1066" cy="208" r="34" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="1032" cy="94" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="998" cy="240" r="30" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="964" cy="126" r="28" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="930" cy="272" r="26" fill="#2dd4bf" opacity="0.05"/>
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
    <polygon points="1055.2390923627308,196.5 1055.2390923627308,239.5 1018,261 980.7609076372692,239.5 980.7609076372692,196.5 1018,175" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🏗️ Architecture — Lesson 11</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 11: Batch Processing & Worker Pool</tspan>
      <tspan x="60" dy="42">Architecture</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Design a Notification System to send millions of Emails</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 4: Handling scale — Scaling to Millions</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

Rate limiting helps send at the right speed, but if you want to handle **millions of recipients** effectively, you must divide the work, distribute it evenly to workers, and ensure you can resume when problems occur in the middle of the campaign.

This article goes into worker pool architecture and batch orchestration for production workloads.

---

## 1. Why not process each email individually?

If each recipient is a separate job from the beginning, the system will face:

- Queue is too large, backlog topic is huge.
- DB lookup repeated many times.
- Overhead serialize/deser for each message.
- Progress tracking is sporadic, difficult to resume.

### Reasonable approach

1. Create **campaign snapshot** of recipients.
2. Split snapshots into **stable batches**.
3. Each batch is assigned to the worker pool.
4. In batch, worker renders and sends according to current quota.
5. Update progress periodically, do not update DB after each email if not needed.

---

## 2. Chunking strategy for recipient list

### Criteria for selecting batch size

| Batch size | Advantages | Disadvantages | When using |
|-------------|--------|-------------|----------|
| 100 | Easy to retry, high smoothness | Large overhead queue | Transactional bursts |
| 500 | Balance | Need good progress management | Most popular |
| 1,000 | More effective for bulk APIs | Retry is more expensive | Marketing campaigns |
| 5,000+ | Optimize network calls | Difficult to accurately resume | Used for preprocessing |

### Recommended

- With bulk API like SES/SendGrid, create **logical batch** of 500-1000 recipients.
- With SMTP or heavy template rendering, keep the batch smaller than 200-500.
- If personalization is complex, batches should be small to avoid memory spikes.

### Snapshot recipients

```sql
CREATE TABLE campaign_recipients_snapshot (
  campaign_id TEXT NOT NULL,
  recipient_id BIGINT NOT NULL,
  email TEXT NOT NULL,
  locale TEXT,
  timezone TEXT,
  template_variables JSONB,
  batch_no INT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  PRIMARY KEY (campaign_id, recipient_id)
);

CREATE INDEX idx_campaign_batch_status
  ON campaign_recipients_snapshot (campaign_id, batch_no, status);
```

Snapshots help prevent campaigns from being changed midway when user segments in the source system are continuously updated.

---

## 3. Worker pool architecture

```
Campaign Planner
    │
    ├── Create recipient snapshot
    ├── Split to batch jobs
    └── Publish batch jobs
         │
         ▼
   Batch Queue / Topic
         │
         ├── Worker Group A: critical
         ├── Worker Group B: high
         └── Worker Group C: bulk marketing
                │
                ▼
          Send Adapter Layer
                │
                ▼
         ESP / SMTP / Webhooks
```

### Separate workers by workload

| Workers group | Traffic type | Quantity | Features |
|--------------|--------------|----------|----------|
| critical-workers | OTP, reset password | few but always available | low latency |
| standard-workers | transactional normal | average | stable |
| bulk-workers | marketing campaign | strong elasticity | high throughput |

Separating worker groups helps marketing campaigns not cause starvation for important transaction flows.

---

## 4. Fetch data in a memory-saving way

### Common mistake

```python
recipients = db.query("SELECT * FROM recipients WHERE campaign_id = ?", campaign_id)
for recipient in recipients:
    process(recipient)
```

With several million records, this method can easily cause workers to eat up gigabytes of RAM.

### Streaming/pagination is more correct

```python
def fetch_batch(db, campaign_id: str, batch_no: int, limit: int = 500):
    return db.fetch_all(
        """
        SELECT recipient_id, email, locale, timezone, template_variables
        FROM campaign_recipients_snapshot
        WHERE campaign_id = %s
          AND batch_no = %s
          AND status IN ('pending', 'retry')
        ORDER BY recipient_id
        LIMIT %s
        """,
        (campaign_id, batch_no, limit),
    )

def process_batch(batch_job):
    rows = fetch_batch(db, batch_job.campaign_id, batch_job.batch_no)
    rendered = [render_email(row) for row in rows]
    send_results = email_provider.send_bulk(rendered)
    persist_results(batch_job.campaign_id, batch_job.batch_no, send_results)
```

### Operating rules

- Only keep one batch in memory at a time.
- After rendering, send immediately, the entire campaign does not accumulate in RAM.
- Record status in batch or micro-batch to reduce write amplification.

---

## 5. Dynamic scaling with Kubernetes

### HPA is based on queue depth

```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: bulk-email-workers
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: bulk-email-workers
  minReplicas: 4
  maxReplicas: 80
  metrics:
    - type: External
      external:
        metric:
          name: kafka_consumer_lag
          selector:
            matchLabels:
              consumer_group: bulk-workers
        target:
          type: AverageValue
          averageValue: "5000"
```

### Autoscaling should not be based solely on CPU

Low CPU does not necessarily mean a healthy queue. The worker may be idle because it is blocked by the rate limiter or because the provider is slow to respond. Queue lag, pending batches, average send latency are signals closer to the business.

---

## 6. Graceful shutdown and resumable processing

It's normal for workers to send emails and get killed midway when deploying or autoscaling. Design must be calculated in advance.

### Principles

1. Worker receives batch job.
2. Mark batch as `processing` with lease timeout.
3. During processing, heartbeat periodically.
4. If the worker dies, the lease expires and the batch goes back to the queue.
5. Sending emails must be idempotent according to `message_id`.

### Lease table example

```sql
CREATE TABLE batch_leases (
  campaign_id TEXT NOT NULL,
  batch_no INT NOT NULL,
  worker_id TEXT NOT NULL,
  leased_until TIMESTAMPTZ NOT NULL,
  heartbeat_at TIMESTAMPTZ NOT NULL,
  PRIMARY KEY (campaign_id, batch_no)
);
```

### Avoid duplicate emails

- Each recipient/message must have one `message_id` stable.
- Record outbound logs with unique constraints `message_id`.
- When retrying or reclaiming a lease, check the outbound state before sending again.

---

## 7. Progress tracking for large campaigns

### Metrics that need to be seen in real time

| Metrics | Meaning |
|--------|--------|
| total_recipients | Total number of recipients in snapshot |
| queued_batches | Batch pending |
| processing_batches | Batch running |
| sent_count | Email sent to ESP |
| delivered_count | Email delivery confirmed |
| failed_count | Fail permanently |
| eta_minutes | Estimated Completion |

### Aggregate state table

```sql
CREATE TABLE campaign_progress (
  campaign_id TEXT PRIMARY KEY,
  total_recipients BIGINT NOT NULL,
  sent_count BIGINT NOT NULL DEFAULT 0,
  failed_count BIGINT NOT NULL DEFAULT 0,
  processing_batches INT NOT NULL DEFAULT 0,
  queued_batches INT NOT NULL DEFAULT 0,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

### Simple ETA

```text
ETA = remaining_recipients / effective_send_rate_per_second
```

`effective_send_rate` must be the actual speed received from metrics, not the theoretical speed on paper.

---

## 8. Real combat optimizations

### Optimization checklist

- Collect DB writes by batch update instead of updating each row.
- Cache template compile result.
- Separate CPU-bound rendering from IO-bound sending if needed.
- Use gzip/compression for large payloads between services.
- Do not stuff all heavy template variables into the queue if possible, just send references.

### When should rendering services be separated?

- Template is too complicated or personalization uses a lot of extra data.
- Need separate A/B testing, localization, content validation.
- Worker sending needs to be kept extremely compact for linear scaling.

---

## Summary

Batch processing and worker pools are layers that turn a list of millions of recipients into controllable, retry, resume, and autoscale units of work. If designed correctly, a large campaign will operate as many small independent problems instead of one giant block of risk.

**Next article:** We will handle failure situations, from strategic retries to Dead Letter Queues and safe reprocessing.
