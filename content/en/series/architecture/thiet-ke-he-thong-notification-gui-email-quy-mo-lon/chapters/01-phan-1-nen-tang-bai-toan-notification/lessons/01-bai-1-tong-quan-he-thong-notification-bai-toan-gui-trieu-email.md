---
id: 019e7a10-a101-7001-d001-f1e2d3c4b501
title: >-
  Lesson 1: Notification system overview — The problem of sending millions of
  emails
slug: bai-1-tong-quan-he-thong-notification-bai-toan-gui-trieu-email
description: >-
  Analyze the problem of sending millions of emails: practical use cases
  (marketing campaigns, transactional emails, system alerts). Functional &
  non-functional requirements. Back-of-the-envelope estimation. Compare
  notification channels.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 1
section_title: 'Part 1: Foundation — Understanding the large-scale Notification problem'
course:
  id: 019e7a10-a100-7001-d001-f1e2d3c4b5a6
  title: Design a Notification System to send millions of Emails
  slug: thiet-ke-he-thong-notification-gui-email-quy-mo-lon
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6379" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6379)"/>

  <!-- Decorations -->
  <g>
    <circle cx="873" cy="169" r="16" fill="#c084fc" opacity="0.14"/>
    <circle cx="646" cy="42" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="919" cy="175" r="24" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="692" cy="48" r="13" fill="#c084fc" opacity="0.11"/>
    <circle cx="965" cy="181" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="179" x2="1100" y2="259" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="209" x2="1050" y2="279" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1008.444863728671,162 1008.444863728671,196 979,213 949.555136271329,196 949.555136271329,162 979,145" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🏗️ Architecture — Lesson 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 1: Notification system overview —</tspan>
      <tspan x="60" dy="42">The problem of sending millions of emails</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Design a Notification System to send millions of Emails</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: Foundation — Understanding the large-scale Notification problem</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

Imagine you are an engineer at an e-commerce company with 10 million users. Every month, the marketing team wants to send newsletters to the entire user base. Every time there is a flash sale, millions of emails need to be sent within a few hours. How do you design the system to handle this volume?

This lesson will help you **understand the problem** before starting to design.

---

## 1. Why is Email Notification still important?

### Email is the number 1 communication channel

| Metrics | Email | Push | SMS |
|--------|-------|-------|-----|
| Global users | 4.5 billion | 3.5 billion | 5 billion |
| Average open rate | 20-25% | 5-8% | 95% |
| Cost per message | $0.0001-0.001 | Free | $0.01-0.05 |
| Rich content | ✅ HTML, images | ❌ Limited | ❌ Text only |
| No app needed | ✅ | ❌ | ✅ |

### Actual Use Cases

**Transactional Emails** (real-time, critical):
- Order confirmation email
- OTP/Password reset
- Invoice / Receipt

**Marketing Emails** (batch, high-volume):
- Weekly newsletter
- Flash sale announcements
- Product recommendations
- Re-engagement campaigns

**System Notifications**:
- Alerting for DevOps team
- Scheduled reports
- Compliance notifications

---

## 2. Analyze Requirements

### Functional Requirements

```
FR-1: Hệ thống phải gửi được email đến danh sách recipients
FR-2: Hỗ trợ email templates với dynamic content (personalization)
FR-3: Scheduling: gửi ngay hoặc đặt lịch gửi
FR-4: Tracking: open rate, click rate, bounce rate
FR-5: Unsubscribe management (CAN-SPAM compliance)
FR-6: Multi-provider support (failover giữa các ESP)
FR-7: Priority levels: critical > high > normal > low
```

### Non-Functional Requirements

```
NFR-1: Throughput: gửi 10 triệu email trong 4 giờ (~700 emails/giây)
NFR-2: Latency: transactional email < 30 giây từ trigger đến delivery
NFR-3: Availability: 99.95% uptime
NFR-4: Durability: không mất email đã queued
NFR-5: Scalability: horizontal scaling khi load tăng
NFR-6: Deliverability: inbox placement rate > 95%
```

---

## 3. Back-of-the-Envelope Estimation

### Throughput Calculation

```
Target: 10 triệu emails trong 4 giờ
= 10,000,000 / (4 × 3,600)
= 10,000,000 / 14,400
≈ 694 emails/giây

Peak (2x): ~1,400 emails/giây
With headroom (3x): ~2,100 emails/giây
```

### Storage Estimation

```
Email metadata per record: ~1 KB
  - recipient, subject, status, timestamps, tracking IDs

10 triệu emails × 1 KB = 10 GB metadata/campaign
Giữ 90 ngày history: 10 GB × 30 campaigns = 300 GB

Template storage: ~100 KB/template × 1000 templates = 100 MB
Total: ~300 GB database storage
```

### Bandwidth Estimation

```
Average email size (rendered HTML): ~50 KB
10 triệu × 50 KB = 500 GB outbound/campaign
Throughput: 500 GB / 4 hours = 125 GB/h ≈ 280 Mbps
```

---

## 4. Challenges when sending large-scale emails

### Technical Challenges

1. **Rate Limiting from ESP**: Amazon SES limit 200 emails/second (default), SendGrid 10,000/second
2. **IP Reputation**: Sent too fast → marked as spam
3. **Bounce Handling**: Hard bounce needs to be removed from the list immediately
4. **Connection Management**: SMTP connection pooling for performance
5. **Memory Pressure**: Load millions of records into memory

### Business Challenges

1. **Deliverability**: Email must reach the inbox, not the spam folder
2. **Compliance**: CAN-SPAM, GDPR, CCPA
3. **Cost**: Optimize costs when sending millions of emails
4. **Timing**: Send in the correct timezone, at the optimal time
5. **Personalization**: Different content for each recipient

---

## 5. Architecture comparison: Naive vs Production

### ❌ Naive Approach

```
for each recipient in 10_million_list:
    render_template(recipient)
    send_email_via_smtp(recipient)
    save_to_database(status)
```

**Problem:**
- Sequential → lost 10 million × 0.5s = ~58 days 😱
- Single point of failure
- Do not retry when failing
- Memory overflow when loading the entire list

### ✅ Production Approach (Preview)

```
API Request → Notification Service → Message Queue
    → Worker Pool (N workers) → Email Providers (multi-provider)
    → Webhook callbacks → Status tracking → Analytics
```

We will deep dive into this architecture in the next article.

---

## 6. Notification System Landscape

### Famous Notification systems

| System | Scale | Tech Stack |
|--------|-------|-------------|
| Gmail/Google | 300 billion emails/day | Custom infrastructure |
| Amazon SES | 10+ billion/day | AWS native |
| SendGrid (Twilio) | 100+ billion/month | Kafka, Go, Redis |
| Mailchimp (Intuit) | 600 million/day | Custom, Mandrill |

### Open-source alternatives

- **Postal** - mail delivery platform (Ruby)
- **Mailtrain** - self-hosted newsletter (Node.js)
- **Listmonk** - newsletter & mailing list (Go)
- **Novu** - notification infrastructure (TypeScript)

---

## Summary

In this article, you have learned:
- Why is the problem of sending millions of emails not simple?
- Functional & non-functional requirements
- Back-of-the-envelope estimation
- Challenges need to be resolved
- Preview production architecture

**Next article:** We will design the High-Level Design architecture for the entire system.
