---
id: 019e7a10-a115-7001-d001-f1e2d3c4b515
title: 'Lesson 15: Production Deployment — Case Study sending 10 million emails'
slug: bai-15-production-deployment-case-study-gui-10-trieu-email
description: >-
  End-to-end case study: design and implementation of a system to send 10
  million emails for marketing campaign. Infrastructure setup, Kubernetes
  deployment, CI/CD, load testing, chaos scenarios, cost analysis and production
  lessons learned.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 15
section_title: 'Part 5: Deliverability, Monitoring & Production'
course:
  id: 019e7a10-a100-7001-d001-f1e2d3c4b5a6
  title: Design a Notification System to send millions of Emails
  slug: thiet-ke-he-thong-notification-gui-email-quy-mo-lon
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8722" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8722)"/>

  <!-- Decorations -->
  <g>
    <circle cx="777" cy="261" r="10" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="954" cy="78" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="631" cy="155" r="12" fill="#a78bfa" opacity="0.08"/>
    <circle cx="808" cy="232" r="13" fill="#a78bfa" opacity="0.09"/>
    <circle cx="985" cy="49" r="14" fill="#a78bfa" opacity="0.1"/>
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
    <line x1="600" y1="71" x2="1100" y2="151" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="101" x2="1050" y2="171" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1043.5166604983954,208 1043.5166604983954,234 1021,247 998.4833395016046,234 998.4833395016046,208 1021,195" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🏗️ Architecture — Lesson 15</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 15: Production Deployment — Case Study</tspan>
      <tspan x="60" dy="42">sent 10 million emails</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Design a Notification System to send millions of Emails</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 5: Deliverability, Monitoring & Production</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

We end the series with a realistic problem: an e-commerce company needs to send **10 million flash sale emails in 4 hours**, while still keeping the transactional flow running normally. This article combines all the previous pieces into a production-ready design.

---

## 1. Problem and input assumptions

### Business requirements

- Send 10 million emails in up to 4 hours.
- There is basic personalization by name, discount code, locale.
- There are unsubscribe, open tracking, click tracking.
- Does not affect OTP and order confirmation.

### Capacity target

```text
10,000,000 / 14,400 giây ≈ 694 emails/giây
Peak headroom x2 -> thiết kế cho ~1,400 emails/giây
```

### Operational architecture

- 1 main provider: Amazon SES.
- 1 backup provider: SendGrid.
- 2 separate worker pools: transactional and bulk marketing.
- 1 Redis cluster for rate limiting and scheduling.
- 1 Kafka cluster as event-driven backbone.
- 1 PostgreSQL primary + read replicas for metadata and analytics ingestion.

---

## 2. Overall production architecture

```
Admin UI / Campaign API
        │
        ▼
Campaign Planner
        │
        ├── Recipient Snapshot Service
        ├── Batch Planner
        └── Kafka topics
                │
                ▼
          Bulk Worker Pool
                │
        ┌───────┴────────┐
        ▼                ▼
   Amazon SES        SendGrid Fallback
        │                │
        └───────┬────────┘
                ▼
        Webhook Ingestion
                │
                ▼
         Status Aggregator
                │
                ▼
      PostgreSQL + Grafana/Prometheus
```

### Main ingredients

| Ingredients | Role |
|-----------|---------|
| Campaign Planner | create snapshots and batch jobs |
| Kafka | decouple producer/consumer |
| Redis | limiter, retry schedule, distributed locks |
| Bulk Workers | render + send campaign traffic |
| Transactional Workers | Ensure critical traffic |
| Webhook Ingestion | receive delivery/bounce/complaint events |

---

## 3. Recommended Kubernetes infrastructure

### Separate workloads by namespaces and deployments

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: bulk-email-workers
spec:
  replicas: 12
  selector:
    matchLabels:
      app: bulk-email-workers
  template:
    metadata:
      labels:
        app: bulk-email-workers
    spec:
      containers:
        - name: worker
          image: ghcr.io/xdev/notification-workers:2026.04.01
          env:
            - name: WORKER_GROUP
              value: bulk
            - name: KAFKA_CONSUMER_GROUP
              value: bulk-workers
          resources:
            requests:
              cpu: "500m"
              memory: "512Mi"
            limits:
              cpu: "2"
              memory: "2Gi"
          readinessProbe:
            httpGet:
              path: /health/ready
              port: 8080
```

### Initial sizing suggestion

| Service | Quantity | Notes |
|--------|----------|--------|
| API / Planner | 3 pods | Basic BP |
| Bulk Workers | 12-40 pods | autoscale by lag |
| Transactional Workers | 4-8 pods | reserved capacity |
| Webhook Processors | 3-6 pods | scale by callback burst |
| Redis | 3 nodes | sentinel/cluster |
| Kafka | 3 brokers | replication factor 3 |

---

## 4. CI/CD and release strategy

### Pipeline should be there

1. Unit tests for template rendering, limiter, provider adapters.
2. Integration tests with Kafka, Redis, PostgreSQL.
3. Smoke test sends email via sandbox provider.
4. Canary deploy to the new worker version.
5. Rollback quickly if send failure rate increases.

### Why do workers need canary?

One small bug in the renderer or provider adapter can turn 10 million emails into 10 million errors. Canary 1-5% traffic helps detect regressions before the campaign is widely affected.

---

## 5. Load testing with k6

It is impossible to test production traffic without load testing the campaign coordination part.

### k6 example for Campaign API

```javascript
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  scenarios: {
    create_campaigns: {
      executor: 'ramping-vus',
      startVUs: 1,
      stages: [
        { duration: '1m', target: 20 },
        { duration: '3m', target: 100 },
        { duration: '2m', target: 0 },
      ],
    },
  },
};

export default function () {
  const payload = JSON.stringify({
    campaign_id: `camp-${__VU}-${__ITER}`,
    template_id: 'flash_sale_v2',
    segment_id: 'active_users_30d',
    priority: 'normal',
  });

  const response = http.post('https://api.example.com/campaigns', payload, {
    headers: { 'Content-Type': 'application/json' },
  });

  check(response, {
    'campaign accepted': (r) => r.status === 202,
  });

  sleep(1);
}
```

### What to test besides the API

- Queue backlog growth when provider throttle.
- Worker autoscaling when lag increases.
- Redis limits latency when concurrent access is high.
- Webhook ingestion burst after provider flush events.

---

## 6. Chaos scenarios should be simulated

| Situation | Expectations |
|-----------|---------|
| SES pay 429 lasts 15 minutes | deceleration + partial failover to SendGrid |
| Redis increases latency | worker degrades but does not duplicate massively |
| 20% of worker pods killed | batch leases are reclaimed and resume |
| Webhook processor downtime | events are buffered, no state is lost |
| Template bug on a campaign | campaign is paused, other traffic is still safe |

### The goal of chaos testing

Not to prove the system is immortal, but to confirm that when it fails it fails in a controlled, observable, and recoverable way.

---

## 7. Preliminary cost analysis

### Large cost component

| Category | Estimate |
|--------|----------|
| Amazon SES sends 10M emails | about $1,000 |
| SendGrid fallback reserve | a few hundred to a few thousand USD depending on the plan |
| Kubernetes compute | depends on cloud and autoscale window |
| Kafka/Redis/PostgreSQL | fixed base costs |
| Observability | Prometheus/Grafana managed or self-hosted |

### Cost optimization

- Use SES as the main provider for high-volume workloads.
- Only enable the fallback provider at a level sufficient for disaster scenarios.
- Separate heavy analytics into an async pipeline, without forcing main PostgreSQL to shoulder the entire load.
- Optimize template rendering cache to reduce worker CPU.

---

## 8. Lessons learned from production

### The right decisions

- Separate transactional and bulk workers from the beginning.
- Identifies the message with `message_id` Stable to idempotent.
- Build a dashboard campaign ETA and complaint rate before running a large campaign.
- Warm-up domain/IP more carefully than initially expected.

### Painful but valuable lessons

1. The theoretical throughput of the worker is not as important as the actual throughput through the provider.
2. A bad marketing campaign can damage the reputation of even transaction traffic if using the same domain/IP.
3. Retry without jitter will quickly turn into self-inflicted DDoS.
4. Webhook reconciliation is required to know which emails are actually delivered.

---

## 9. Go-live checklist for 10 million email campaign

- SPF, DKIM, DMARC domains have been authenticated and aligned.
- Segment has been cleaned, suppression list applied.
- Rate limits according to configured provider/domain/IP.
- Dashboard, alerts and runbooks are ready.
- Fallback provider has been tested.
- The small Canary campaign ran successfully.
- On-call rotation knows exactly the page threshold and how to pause the campaign.

---

## Summary

The problem of sending 10 million emails is not just a scale worker. It is a simultaneous problem of event-driven architecture, deliverability, rate control, system monitoring and operating procedures. When these layers are designed together, a large campaign becomes a predictable and controllable workload instead of a gamble.

You have gone through the core knowledge chain to design a large-scale email notification platform, from high-level design to production deployment.
