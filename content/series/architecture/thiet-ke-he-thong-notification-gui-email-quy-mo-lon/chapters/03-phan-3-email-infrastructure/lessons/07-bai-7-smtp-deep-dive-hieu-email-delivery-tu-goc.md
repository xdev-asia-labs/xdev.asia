---
id: 019e7a10-a107-7001-d001-f1e2d3c4b507
title: "Bài 7: SMTP Deep Dive — Hiểu email delivery từ gốc"
slug: bai-7-smtp-deep-dive-hieu-email-delivery-tu-goc
description: >-
  SMTP protocol lifecycle, MX records và DNS resolution, email routing, bounce types, feedback loops, email headers, connection pooling.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 7
section_title: "Phần 3: Email Infrastructure & Delivery Engine"
course:
  id: 019e7a10-a100-7001-d001-f1e2d3c4b5a6
  title: "Thiết kế Hệ thống Notification gửi hàng triệu Email"
  slug: thiet-ke-he-thong-notification-gui-email-quy-mo-lon
---

## Giới thiệu

Trước khi tích hợp với bất kỳ Email Service Provider nào, bạn cần **hiểu rõ SMTP** — giao thức nền tảng của mọi hệ thống email. Hiểu SMTP giúp bạn debug delivery issues, optimize throughput, và thiết kế system tốt hơn.

---

## 1. SMTP Protocol — Cuộc hội thoại giữa 2 mail servers

### SMTP Session Example

```
Client                              Server (gmail-smtp-in.l.google.com)
  │                                      │
  │──── TCP Connect (port 25) ──────────▶│
  │◀─── 220 mx.google.com ESMTP ────────│
  │                                      │
  │──── EHLO mail.yourdomain.com ──────▶│
  │◀─── 250-mx.google.com Hello ────────│
  │◀─── 250-SIZE 157286400 ────────────│
  │◀─── 250-STARTTLS ─────────────────│
  │◀─── 250 CHUNKING ─────────────────│
  │                                      │
  │──── STARTTLS ──────────────────────▶│
  │◀─── 220 Ready for TLS ─────────────│
  │──── [TLS Handshake] ──────────────▶│
  │                                      │
  │──── MAIL FROM:<noreply@shop.com> ──▶│
  │◀─── 250 OK ────────────────────────│
  │                                      │
  │──── RCPT TO:<user@gmail.com> ──────▶│
  │◀─── 250 OK ────────────────────────│
  │                                      │
  │──── DATA ──────────────────────────▶│
  │◀─── 354 Go ahead ─────────────────│
  │──── From: Shop <noreply@shop.com>──▶│
  │──── To: user@gmail.com ────────────▶│
  │──── Subject: Your order #123 ──────▶│
  │──── Content-Type: text/html ───────▶│
  │──── [email body] ─────────────────▶│
  │──── . ────────────────────────────▶│
  │◀─── 250 OK, message queued ────────│
  │                                      │
  │──── QUIT ─────────────────────────▶│
  │◀─── 221 Bye ──────────────────────│
```

### SMTP Response Codes

| Code | Meaning | Action |
|------|---------|--------|
| 250 | OK | Continue |
| 354 | Start mail input | Send body |
| 421 | Service unavailable | Retry later (soft bounce) |
| 450 | Mailbox unavailable | Retry later (soft bounce) |
| 451 | Local error | Retry later |
| 452 | Insufficient storage | Retry later |
| 500 | Syntax error | Fix and retry |
| 550 | Mailbox not found | Hard bounce — remove from list |
| 551 | User not local | Forward or remove |
| 552 | Message too large | Reduce size |
| 553 | Mailbox name invalid | Hard bounce |
| 554 | Transaction failed | Check content/reputation |

---

## 2. DNS & Email Routing

### MX Record Resolution

```
Gửi email đến user@gmail.com:

1. DNS query: gmail.com MX records
   → 5  gmail-smtp-in.l.google.com
   → 10 alt1.gmail-smtp-in.l.google.com
   → 20 alt2.gmail-smtp-in.l.google.com
   (số nhỏ hơn = priority cao hơn)

2. DNS query: gmail-smtp-in.l.google.com A record
   → 142.250.115.27

3. TCP connect đến 142.250.115.27:25
```

### Implementation

```python
import dns.resolver

class MXResolver:
    def __init__(self):
        self.cache = {}  # Cache MX records (TTL-aware)

    def resolve(self, domain: str) -> list[str]:
        if domain in self.cache:
            entry = self.cache[domain]
            if entry['expires_at'] > time.time():
                return entry['hosts']

        try:
            answers = dns.resolver.resolve(domain, 'MX')
            hosts = sorted(
                [(r.preference, str(r.exchange).rstrip('.'))
                 for r in answers]
            )
            result = [host for _, host in hosts]

            self.cache[domain] = {
                'hosts': result,
                'expires_at': time.time() + 3600,  # Cache 1 hour
            }
            return result
        except dns.resolver.NXDOMAIN:
            raise InvalidDomainError(f"No MX records for {domain}")
```

---

## 3. Bounce Handling

### Hard Bounce vs Soft Bounce

```
Hard Bounce (permanent):
├── 550 User unknown              → Remove from list immediately
├── 553 Invalid mailbox           → Remove from list
├── 551 User not local            → Remove from list
└── Action: Add to suppression list, NEVER send again

Soft Bounce (temporary):
├── 421 Service unavailable       → Retry after 15 minutes
├── 450 Mailbox temporarily full  → Retry after 1 hour
├── 451 Server error              → Retry after 30 minutes
├── 452 Insufficient storage      → Retry after 1 hour
└── Action: Retry up to 3 times, then treat as hard bounce
```

### Bounce Processing Pipeline

```python
class BounceProcessor:
    MAX_SOFT_BOUNCES = 3
    SOFT_BOUNCE_WINDOW = timedelta(days=7)

    async def process_bounce(self, bounce_event: dict):
        email = bounce_event['recipient']
        bounce_type = self.classify_bounce(bounce_event['status_code'])

        if bounce_type == 'hard':
            await self.hard_bounce(email, bounce_event)
        else:
            await self.soft_bounce(email, bounce_event)

    async def hard_bounce(self, email: str, event: dict):
        # 1. Add to suppression list
        await self.db.insert('suppressions', {
            'email': email,
            'reason': 'hard_bounce',
            'diagnostic': event.get('diagnostic_code'),
        })

        # 2. Update all pending campaigns
        await self.db.execute(
            "UPDATE email_messages SET status = 'BOUNCED' "
            "WHERE recipient = %s AND status = 'QUEUED'",
            [email]
        )

        # 3. Publish event
        await self.kafka.produce('email-status', {
            'event_type': 'EmailBounced',
            'bounce_type': 'permanent',
            'recipient': email,
        })

    async def soft_bounce(self, email: str, event: dict):
        # Count recent soft bounces
        recent_count = await self.db.query_scalar(
            "SELECT COUNT(*) FROM bounce_log "
            "WHERE email = %s AND bounce_type = 'soft' "
            "AND created_at > %s",
            [email, datetime.utcnow() - self.SOFT_BOUNCE_WINDOW]
        )

        if recent_count >= self.MAX_SOFT_BOUNCES:
            # Convert to hard bounce
            await self.hard_bounce(email, event)
        else:
            # Log and schedule retry
            await self.db.insert('bounce_log', {
                'email': email,
                'bounce_type': 'soft',
                'status_code': event['status_code'],
            })
```

---

## 4. Email Headers — Anatomy

### Essential Headers

```
Return-Path: <bounce@mail.yourdomain.com>      ← Bounce address
From: "Your Shop" <noreply@yourdomain.com>      ← Display sender
Reply-To: support@yourdomain.com                ← Reply address
To: user@gmail.com                              ← Recipient
Subject: =?UTF-8?B?...?=                       ← Subject (encoded)
Date: Tue, 01 Apr 2026 10:00:00 +0700          ← Send timestamp
Message-ID: <msg_abc123@yourdomain.com>         ← Unique message ID
MIME-Version: 1.0
Content-Type: multipart/alternative; boundary="boundary123"

── Authentication Headers (added by sending server) ──
DKIM-Signature: v=1; a=rsa-sha256; d=yourdomain.com; ...
Received-SPF: pass (google.com: domain of noreply@yourdomain.com)
Authentication-Results: mx.google.com; dkim=pass; spf=pass; dmarc=pass

── Tracking Headers ──
X-Campaign-ID: camp_flash_sale_april
X-Message-ID: msg_019e7a10-abc1
List-Unsubscribe: <https://yourdomain.com/unsubscribe?token=xyz>
List-Unsubscribe-Post: List-Unsubscribe=One-Click
```

---

## 5. Connection Pooling cho SMTP

### Vấn đề

Mỗi SMTP connection: TCP handshake (~50ms) + TLS handshake (~100ms) + EHLO (~20ms) = **~170ms overhead**.

Gửi 1 triệu emails × 170ms = **47 giờ** chỉ cho connection setup!

### Solution: Connection Pool

```python
import smtplib
from queue import Queue
from threading import Lock

class SMTPConnectionPool:
    def __init__(self, host: str, port: int, max_connections: int = 20):
        self.host = host
        self.port = port
        self.pool = Queue(maxsize=max_connections)
        self.lock = Lock()

        # Pre-create connections
        for _ in range(max_connections):
            conn = self._create_connection()
            self.pool.put(conn)

    def _create_connection(self) -> smtplib.SMTP:
        conn = smtplib.SMTP(self.host, self.port, timeout=30)
        conn.ehlo()
        conn.starttls()
        conn.ehlo()
        conn.login(self.username, self.password)
        return conn

    def get_connection(self) -> smtplib.SMTP:
        conn = self.pool.get(timeout=10)
        # Verify connection is still alive
        try:
            conn.noop()
            return conn
        except smtplib.SMTPServerDisconnected:
            return self._create_connection()

    def return_connection(self, conn: smtplib.SMTP):
        self.pool.put(conn)

    def send_email(self, from_addr: str, to_addr: str, message: str):
        conn = self.get_connection()
        try:
            conn.sendmail(from_addr, to_addr, message)
        finally:
            self.return_connection(conn)
```

### Performance Impact

```
Without pool: 170ms setup + 30ms send = 200ms per email
With pool:    0ms setup   + 30ms send = 30ms per email
Improvement: 6.7x faster

20 pooled connections × 33 emails/sec = 660 emails/sec
```

---

## 6. Feedback Loops (FBL)

### Concept

Khi user nhấn "Report Spam" → ISP gửi **complaint notification** về cho bạn.

```
User clicks "Report Spam" in Gmail
    │
    ▼
Gmail sends ARF (Abuse Reporting Format) report
    │
    ▼
Your Feedback Loop endpoint receives complaint
    │
    ▼
Auto-unsubscribe user + add to suppression list
```

### Setup

```python
# Register FBL with major ISPs
# Gmail: via Google Postmaster Tools
# Yahoo: via Yahoo CFL program
# Outlook: via JMRP (Junk Mail Reporting Partner)

class FeedbackLoopProcessor:
    COMPLAINT_THRESHOLD = 0.001  # 0.1% complaint rate

    async def process_complaint(self, arf_report: dict):
        email = arf_report['original_rcpt_to']

        # Immediately suppress
        await self.suppression_service.add(
            email=email,
            reason='complaint',
            source='fbl',
        )

        # Check campaign complaint rate
        campaign_id = arf_report.get('x_campaign_id')
        if campaign_id:
            rate = await self.get_complaint_rate(campaign_id)
            if rate > self.COMPLAINT_THRESHOLD:
                await self.pause_campaign(campaign_id)
                await self.alert_team(
                    f"Campaign {campaign_id} complaint rate: {rate:.4%}"
                )
```

---

## Tổng kết

- SMTP protocol là **nền tảng** — hiểu rõ giúp debug mọi vấn đề
- **Bounce handling** đúng cách bảo vệ IP reputation
- **Connection pooling** tăng throughput 6-7x
- **Feedback loops** giúp tự động xử lý spam complaints

**Bài tiếp theo:** Tích hợp Email Service Providers — SES, SendGrid, Mailgun.
