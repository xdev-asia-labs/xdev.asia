---
id: 019e7a10-a113-7001-d001-f1e2d3c4b513
title: 'Lesson 13: Email Deliverability — SPF, DKIM, DMARC'
slug: bai-13-email-deliverability-spf-dkim-dmarc
description: >-
  Email authentication with SPF, DKIM, DMARC. IP reputation, domain warm-up,
  spam score optimization, list hygiene, complaint processing, blacklist
  monitoring and BIMI.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 13
section_title: 'Part 5: Deliverability, Monitoring & Production'
course:
  id: 019e7a10-a100-7001-d001-f1e2d3c4b5a6
  title: Design a Notification System to send millions of Emails
  slug: thiet-ke-he-thong-notification-gui-email-quy-mo-lon
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8533" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8533)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1038" cy="224" r="16" fill="#fbbf24" opacity="0.09"/>
    <circle cx="976" cy="202" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="914" cy="180" r="24" fill="#fbbf24" opacity="0.07"/>
    <circle cx="852" cy="158" r="28" fill="#fbbf24" opacity="0.11"/>
    <circle cx="790" cy="136" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="124" x2="1100" y2="204" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="154" x2="1050" y2="224" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1057.7749907475932,204.5 1057.7749907475932,243.5 1024,263 990.2250092524068,243.5 990.2250092524068,204.5 1024,185" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🏗️ Architecture — Lesson 13</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 13: Email Deliverability — SPF, DKIM,</tspan>
      <tspan x="60" dy="42">DMARC</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Design a Notification System to send millions of Emails</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 5: Deliverability, Monitoring & Production</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

Successfully sending to the provider does not mean the email has entered the inbox. Deliverability is a coordination problem between email authentication infrastructure, recipient list quality, email content and reputation accumulated over time.

This article focuses on the most important parts for a large sending system to maintain stable inbox placement.

---

## 1. Deliverability is actually determined by what?

### Four pillars

| Pillar | Questions to answer |
|--------|---------------------|
| Authentication | Is this email really authorized to be sent by a valid domain? |
| Reputation | Does this domain/IP have a good or bad history? |
| List quality | Does the recipient exist, interact, and opt-in? |
| Content quality | Does the content show signs of spam, misleading or violating policy? |

### Common misunderstandings

- Correct DKIM does not automatically guarantee access to the inbox.
- Buying dedicated IP does not fix dirty lists.
- Adding too many tracking pixels can be counterproductive.
- New domain but sending old volume from day one will almost certainly be throttling.

---

## 2. SPF: who is allowed to send your domain instead?

SPF is a DNS record that declares which mail servers or providers are allowed to send mail to the domain.

### Example SPF record

```dns
example.com. IN TXT "v=spf1 include:amazonses.com include:sendgrid.net -all"
```

### Meaning

- `v=spf1`: SPF version.
- `include:amazonses.com`:allow SES.
- `include:sendgrid.net`: enable SendGrid.
- `-all`: all other sources fail hard.

### Practical note

- Shouldn't be too much `include` because SPF lookup is limited.
- SPF checks envelope sender, not always `From:` user sees.
- If using multiple ESPs, carefully control alignment with DMARC.

---

## 3. DKIM: sign content to prove integrity

DKIM adds a digital signature to the email header. Mail receivers use the public key in DNS to verify that the email content has not been modified along the way.

### Example DKIM record

```dns
ses2026._domainkey.example.com. IN TXT (
  "v=DKIM1; k=rsa; "
  "p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAw..."
)
```

### Best practices

- Use an explicit selector by provider or by year/quarter to rotate the key.
- Key length must be at least 1024, preferably 2048 bits if the provider supports it.
- Rotate DKIM keys periodically but without interrupting old email verification.

---

## 4. DMARC: policy and alignment

DMARC allows the domain owner to declare how to handle SPF/DKIM failed emails, and receive aggregate reports.

### Example DMARC record

```dns
_dmarc.example.com. IN TXT "v=DMARC1; p=quarantine; pct=100; rua=mailto:dmarc-agg@example.com; ruf=mailto:dmarc-forensic@example.com; adkim=s; aspf=s"
```

### Frequently used modes

| Policy | Meaning | When using |
|--------|---------|----------|
| `p=none` | monitor only | initial phase of implementation |
| `p=quarantine` | push failed mail to spam/quarantine | After alignment is stable |
| `p=reject` | absolutely refuse | when the domain is well controlled |

### Safe implementation roadmap

1. Start with `p=none`.
2. Collect DMARC reports for at least several weeks.
3. Handle all valid email sources that are not aligned.
4. Increase `quarantine` then `reject`.

---

## 5. Domain/IP warm-up and reputation management

### Why is reputation important?

Mailbox providers such as Gmail, Outlook, Yahoo evaluate mail sending behavior over time. They care about:

- Hard bounce rate.
- Complaint rate.
- Rate of engaged opens/clicks.
- Is there a natural increase in sending frequency?
- Rate of sending to inactive addresses for a long time.

### Warm-up plan for new domain

| Week | Segments | Volume |
|--------|--------|--------|
| 1 | Users opened mail in the last 7 days | low |
| 2 | Users engaged 30 days | slight increase |
| 3 | Expand to 60-90 days | controlled increase |
| 4+ | The entire list is clean | according to actual metrics |

### Shouldn't do it

- Send both transactional and marketing simultaneously from the same new domain/IP.
- Using shared list without clear consent.
- Scale 10 times the volume just because the system has excess capacity.

---

## 6. List hygiene and complaint handling

No matter how good the infrastructure is, it cannot save a dirty recipient list.

### Address types that should be removed

| Type | Action |
|-----|-----------|
| Hard bounce | suppress now |
| Complained users | suppress permanently or according to policy |
| High-risk role accounts | consider removing |
| Perennial Inactive | put in re-engagement before |
| Disposable emails | block from the beginning |

### Internal Suppression list

```sql
CREATE TABLE suppression_list (
  email TEXT PRIMARY KEY,
  reason TEXT NOT NULL,
  source TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  expires_at TIMESTAMPTZ
);
```

### Complaint handling flow

1. Receive webhook complaint from provider.
2. Map back `recipient` and `message_id` internal.
3. Add recipients to the suppression list.
4. Reduce send rate if complaint rate increases by domain/campaign.
5. Warn the marketing team if the campaign has poor quality content.

---

## 7. Email content and spam signals

### Common bad signals

- Subject is too excited like "FREE!!! LIMITED OFFER!!!".
- Heavy HTML, many images but little text.
- Strange domain tracking link, inconsistent brand.
- Missing unsubscribe link.
- From name/domain is not consistent with the brand.

### Checklist of healthy content

- Subject is clear, no excessive clickbait.
- Has plain-text fallback.
- Have appropriate address and contact information.
- There is an easily visible unsubscribe link.
- Tracking domains using brand subdomains if possible.

---

## 8. Monitoring deliverability

### Metrics to track

| Metrics | Reference warning level |
|--------|------------------------|
| Hard bounce rate | > 2% |
| Complaint rate | > 0.1% |
| Delivery rate | Strong decrease compared to baseline |
| Open rate | Abnormal drop by domain |
| Spam placement | Continuously increase many campaigns |

### Useful tool

- Gmail Postmaster Tools
- Microsoft SNDS
- DMARC aggregate report analyzers
- Provider dashboards of SES/SendGrid/Mailgun

### What is BIMI?

BIMI allows the display of brand logos in the inboxes of some mailbox providers, but usually requires good DMARC enforcement and sometimes a brand authentication certificate. It does not replace SPF/DKIM/DMARC but builds on it.

---

## Summary

Deliverability is a long-term game. You cannot fix it with a script or a single DNS record. You need to simultaneously do proper authentication, warm-up carefully, keep the list clean, and monitor reputation signals every day.

**Next article:** We will build monitoring, metrics and alerting to look at the notification system like a real production system.
