---
id: 019e7a10-a113-7001-d001-f1e2d3c4b513
title: "Bài 13: Email Deliverability — SPF, DKIM, DMARC"
slug: bai-13-email-deliverability-spf-dkim-dmarc
description: >-
  Email authentication với SPF, DKIM, DMARC. IP reputation, domain warm-up,
  spam score optimization, list hygiene, complaint processing, blacklist
  monitoring và BIMI.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 13
section_title: "Phần 5: Deliverability, Monitoring & Production"
course:
  id: 019e7a10-a100-7001-d001-f1e2d3c4b5a6
  title: "Thiết kế Hệ thống Notification gửi hàng triệu Email"
  slug: thiet-ke-he-thong-notification-gui-email-quy-mo-lon
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🏗️ Kiến trúc — Bài 13</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 13: Email Deliverability — SPF, DKIM,</tspan>
      <tspan x="60" dy="42">DMARC</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Thiết kế Hệ thống Notification gửi hàng triệu Email</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 5: Deliverability, Monitoring &amp; Production</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Gửi thành công tới provider chưa đồng nghĩa email vào inbox. Deliverability là bài toán phối hợp giữa hạ tầng xác thực email, chất lượng danh sách người nhận, nội dung email và reputation tích lũy theo thời gian.

Bài này tập trung vào những phần quan trọng nhất để một hệ thống gửi lớn vẫn giữ được inbox placement ổn định.

---

## 1. Deliverability thực sự được quyết định bởi điều gì?

### Bốn trụ cột

| Trụ cột | Câu hỏi cần trả lời |
|--------|----------------------|
| Authentication | Email này có thật sự được domain hợp lệ ủy quyền gửi không? |
| Reputation | Domain/IP này có lịch sử tốt hay xấu? |
| List quality | Người nhận có tồn tại, có tương tác, có opt-in không? |
| Content quality | Nội dung có dấu hiệu spam, misleading hay vi phạm policy không? |

### Những hiểu lầm phổ biến

- DKIM đúng không tự động đảm bảo vào inbox.
- Mua dedicated IP không chữa được list bẩn.
- Thêm nhiều tracking pixels quá mức có thể phản tác dụng.
- Domain mới nhưng gửi volume cũ từ ngày đầu gần như chắc chắn sẽ bị throttling.

---

## 2. SPF: ai được phép gửi thay domain của bạn?

SPF là record DNS khai báo những mail servers hoặc providers nào được phép gửi mail cho domain.

### Ví dụ SPF record

```dns
example.com. IN TXT "v=spf1 include:amazonses.com include:sendgrid.net -all"
```

### Ý nghĩa

- `v=spf1`: phiên bản SPF.
- `include:amazonses.com`: cho phép SES.
- `include:sendgrid.net`: cho phép SendGrid.
- `-all`: mọi nguồn khác bị fail cứng.

### Lưu ý thực tế

- Không nên quá nhiều `include` vì SPF lookup bị giới hạn.
- SPF kiểm tra envelope sender, không phải lúc nào cũng là `From:` user nhìn thấy.
- Nếu dùng nhiều ESP, cần kiểm soát cẩn thận alignment với DMARC.

---

## 3. DKIM: ký nội dung để chứng minh tính toàn vẹn

DKIM thêm chữ ký số vào email header. Mail receiver dùng public key trong DNS để xác minh nội dung email không bị sửa đổi trên đường đi.

### Ví dụ DKIM record

```dns
ses2026._domainkey.example.com. IN TXT (
  "v=DKIM1; k=rsa; "
  "p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAw..."
)
```

### Best practices

- Dùng selector rõ ràng theo provider hoặc theo năm/quý để xoay khóa.
- Key length tối thiểu 1024, ưu tiên 2048 bit nếu provider hỗ trợ.
- Xoay DKIM keys định kỳ nhưng không làm gián đoạn xác minh email cũ.

---

## 4. DMARC: chính sách và alignment

DMARC cho phép domain owner tuyên bố cách xử lý email fail SPF/DKIM, đồng thời nhận aggregate reports.

### Ví dụ record DMARC

```dns
_dmarc.example.com. IN TXT "v=DMARC1; p=quarantine; pct=100; rua=mailto:dmarc-agg@example.com; ruf=mailto:dmarc-forensic@example.com; adkim=s; aspf=s"
```

### Các mode thường dùng

| Policy | Ý nghĩa | Khi dùng |
|--------|---------|----------|
| `p=none` | chỉ monitor | giai đoạn đầu triển khai |
| `p=quarantine` | đẩy mail fail vào spam/quarantine | sau khi alignment ổn định |
| `p=reject` | từ chối hẳn | khi domain đã kiểm soát tốt |

### Lộ trình triển khai an toàn

1. Bắt đầu với `p=none`.
2. Thu thập DMARC reports ít nhất vài tuần.
3. Xử lý hết các nguồn gửi email hợp lệ còn chưa align.
4. Tăng lên `quarantine` rồi `reject`.

---

## 5. Domain/IP warm-up và reputation management

### Tại sao reputation lại quan trọng?

Các mailbox providers như Gmail, Outlook, Yahoo đánh giá hành vi gửi mail theo thời gian. Họ quan tâm:

- Tỷ lệ hard bounce.
- Tỷ lệ complaint.
- Tỷ lệ engaged opens/clicks.
- Tần suất gửi tăng có tự nhiên không.
- Tỷ lệ gửi vào địa chỉ không tương tác trong thời gian dài.

### Warm-up plan cho domain mới

| Tuần | Segment | Volume |
|------|---------|--------|
| 1 | Users mở mail trong 7 ngày gần nhất | thấp |
| 2 | Users engaged 30 ngày | tăng nhẹ |
| 3 | Mở rộng sang 60-90 ngày | tăng có kiểm soát |
| 4+ | Toàn bộ list sạch | theo metric thực tế |

### Không nên làm

- Gửi đồng thời cả transactional và marketing từ cùng domain/IP mới.
- Dùng shared list không rõ consent.
- Scale gấp 10 lần volume chỉ vì thấy hệ thống còn dư công suất.

---

## 6. List hygiene và complaint handling

Hạ tầng tốt đến đâu cũng không cứu nổi một danh sách người nhận bẩn.

### Các loại địa chỉ nên loại bỏ

| Loại | Hành động |
|------|-----------|
| Hard bounce | suppress ngay |
| Complained users | suppress vĩnh viễn hoặc theo policy |
| Role accounts rủi ro cao | cân nhắc loại bỏ |
| Inactive lâu năm | đưa vào re-engagement trước |
| Disposable emails | chặn từ đầu |

### Suppression list nội bộ

```sql
CREATE TABLE suppression_list (
  email TEXT PRIMARY KEY,
  reason TEXT NOT NULL,
  source TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  expires_at TIMESTAMPTZ
);
```

### Luồng complaint handling

1. Nhận webhook complaint từ provider.
2. Map về `recipient` và `message_id` nội bộ.
3. Thêm recipient vào suppression list.
4. Giảm send rate nếu complaint rate tăng theo domain/campaign.
5. Cảnh báo team marketing nếu campaign có nội dung chất lượng kém.

---

## 7. Nội dung email và spam signals

### Tín hiệu xấu thường gặp

- Subject quá kích thích kiểu "FREE!!! LIMITED OFFER!!!".
- HTML nặng, nhiều image nhưng ít text.
- Link tracking domain lạ, không đồng nhất brand.
- Thiếu unsubscribe link.
- From name/domain không nhất quán với brand.

### Checklist nội dung lành mạnh

- Subject rõ ràng, không clickbait quá mức.
- Có plain-text fallback.
- Có địa chỉ và thông tin liên hệ phù hợp.
- Có unsubscribe link dễ thấy.
- Tracking domains dùng subdomain thuộc brand nếu có thể.

---

## 8. Monitoring deliverability

### Các chỉ số cần theo dõi

| Metric | Mức cảnh báo tham khảo |
|--------|-------------------------|
| Hard bounce rate | > 2% |
| Complaint rate | > 0.1% |
| Delivery rate | giảm mạnh so với baseline |
| Open rate | tụt bất thường theo domain |
| Spam placement | tăng liên tiếp nhiều campaign |

### Công cụ hữu ích

- Gmail Postmaster Tools
- Microsoft SNDS
- DMARC aggregate report analyzers
- Provider dashboards của SES/SendGrid/Mailgun

### BIMI là gì?

BIMI cho phép hiển thị logo thương hiệu trong inbox của một số mailbox providers, nhưng thường yêu cầu DMARC enforcement tốt và đôi khi cần chứng chỉ xác thực thương hiệu. Nó không thay thế SPF/DKIM/DMARC mà xây trên nền đó.

---

## Tổng kết

Deliverability là cuộc chơi dài hạn. Bạn không thể fix nó bằng một script hay một DNS record đơn lẻ. Cần đồng thời làm đúng authentication, warm-up cẩn thận, giữ list sạch, và theo dõi tín hiệu reputation mỗi ngày.

**Bài tiếp theo:** Chúng ta sẽ dựng monitoring, metrics và alerting để nhìn hệ thống notification như một hệ thống sản xuất thực thụ.