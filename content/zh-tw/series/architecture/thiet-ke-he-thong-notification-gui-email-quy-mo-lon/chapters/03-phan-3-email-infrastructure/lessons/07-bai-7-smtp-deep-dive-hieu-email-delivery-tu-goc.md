---
id: 019e7a10-a107-7001-d001-f1e2d3c4b507
title: 第 7 課：SMTP 深入探究 — 從根本上理解電子郵件傳送
slug: bai-7-smtp-deep-dive-hieu-email-delivery-tu-goc
description: SMTP 協定生命週期、MX 記錄和 DNS 解析、電子郵件路由、退回類型、回饋循環、電子郵件標頭、連線池。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 7
section_title: 第 3 部分：電子郵件基礎設施和交付引擎
course:
  id: 019e7a10-a100-7001-d001-f1e2d3c4b5a6
  title: 設計一個通知系統來發送數百萬封電子郵件
  slug: thiet-ke-he-thong-notification-gui-email-quy-mo-lon
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1426" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1426)"/>

  <!-- Decorations -->
  <g>
    <circle cx="631" cy="283" r="34" fill="#34d399" opacity="0.08"/>
    <circle cx="662" cy="194" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="693" cy="105" r="30" fill="#34d399" opacity="0.14"/>
    <circle cx="724" cy="276" r="13" fill="#34d399" opacity="0.07"/>
    <circle cx="755" cy="187" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="113" x2="1100" y2="193" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="143" x2="1050" y2="213" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="937.2487113059643,99 937.2487113059643,127 913,141 888.7512886940357,127 888.7512886940357,99 913,85" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🏗️ 建築 — 第 7 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 7 課：SMTP 深入研究 — 了解電子郵件</tspan>
      <tspan x="60" dy="42">從原產地出貨</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">設計一個通知系統來發送數百萬封電子郵件</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：電子郵件基礎設施和交付引擎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

在與任何電子郵件服務提供者整合之前，您需要**了解 SMTP** — 任何電子郵件系統的底層協定。了解 SMTP 可協助您調試傳送問題、優化吞吐量並設計更好的系統。

---

## 1. SMTP 協定 — 2 個郵件伺服器之間的對話

### SMTP 會話範例

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

### SMTP 回應代碼

|代碼|意義|行動|
|--------|--------|--------|
| 250 | 250好的 |繼續 |
| 354 | 354開始郵件輸入|發送正文 |
| 421 | 421服務不可用 |稍後重試（軟彈跳）|
| 450 | 450郵箱不可用 |稍後重試（軟彈跳）|
| 451 | 451本地錯誤 |稍後重試 |
| 452 | 452儲存空間不足|稍後重試 |
| 500 | 500語法錯誤 |修復並重試 |
| 550 | 550找不到郵箱 |硬退信 — 從清單中刪除 |
| 551 | 551用戶非本地 |轉發或刪除 |
| 552 | 552訊息太大 |縮小尺寸 |
| 553 | 553郵箱名稱無效 |硬彈跳|
| 554 | 554交易失敗 |檢查內容/聲譽 |

---

## 2. DNS 和電子郵件路由

### MX 記錄解析

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

### 實作

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

## 3. 彈跳處理

### 硬彈跳與軟彈跳

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

### 彈跳處理管道

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

## 4. 電子郵件標頭 — 剖析

### 基本標題

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

## 5. SMTP 連線池

### 問題

每個 SMTP 連線：TCP 握手（~50ms）+ TLS 握手（~100ms）+ EHLO（~20ms）= **~170ms 開銷**。

發送 100 萬封電子郵件 × 170 毫秒 = **47 小時** 僅用於連線設定！

### 解決方案：連線池

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

### 效能影響

```
Without pool: 170ms setup + 30ms send = 200ms per email
With pool:    0ms setup   + 30ms send = 30ms per email
Improvement: 6.7x faster

20 pooled connections × 33 emails/sec = 660 emails/sec
```

---

## 6. 回饋循環 (FBL)

### 概念

當使用者點擊「報告垃圾郵件」時 → ISP 向您發送**投訴通知**。

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

### 設定

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

## 總結

- SMTP 協定是**基礎** — 了解它有助於調試任何問題
- **退回處理** 正確保護 IP 聲譽
- **連線池** 將吞吐量提高 6-7 倍
- **回饋循環**有助於自動處理垃圾郵件投訴

**下一篇文章：** 整合電子郵件服務提供者 — SES、SendGrid、Mailgun。
