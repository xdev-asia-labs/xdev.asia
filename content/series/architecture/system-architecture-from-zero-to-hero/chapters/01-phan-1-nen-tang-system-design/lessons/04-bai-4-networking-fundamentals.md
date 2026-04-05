---
id: 019d8a21-c104-7001-d001-e1f2a3b4c504
title: "Bài 4: Networking Fundamentals cho System Design"
slug: bai-4-networking-fundamentals-cho-system-design
description: >-
  DNS và cách hoạt động. TCP vs UDP. HTTP/HTTPS, HTTP/2, HTTP/3.
  WebSocket và Server-Sent Events. REST vs RPC vs GraphQL.
  Latency numbers every programmer should know.
duration_minutes: 130
is_free: true
video_url: null
sort_order: 4
section_title: "Phần 1: Nền Tảng System Design"
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: "System Architecture: From Zero to Hero"
  slug: system-architecture-from-zero-to-hero
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2007" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2007)"/>

  <!-- Decorations -->
  <g>
    <circle cx="625" cy="185" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="650" cy="150" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="675" cy="115" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="700" cy="80" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="725" cy="45" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="75" x2="1100" y2="155" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="105" x2="1050" y2="175" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1000.9807621135332,160 1000.9807621135332,190 975,205 949.0192378864668,190 949.0192378864668,160 975,145" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🏗️ Kiến trúc — Bài 4</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 4: Networking Fundamentals cho System</tspan>
      <tspan x="60" dy="42">Design</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">System Architecture: From Zero to Hero</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 1: Nền Tảng System Design</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Mọi hệ thống phân tán đều giao tiếp qua **network**. Hiểu rõ networking fundamentals giúp bạn đưa ra quyết định thiết kế chính xác: chọn protocol nào, tối ưu latency ở đâu, và dự đoán bottleneck thế nào.

---

## 1. DNS (Domain Name System)

### 1.1 DNS là gì?

DNS là "danh bạ điện thoại" của Internet — chuyển đổi domain name thành IP address.

```
Browser: "Tôi muốn truy cập xdev.asia"
DNS:     "xdev.asia → 104.21.35.123"
Browser: → Kết nối đến 104.21.35.123
```

### 1.2 DNS Resolution Process

```
Browser ──► Local DNS Cache
            │ miss
            ▼
        OS DNS Cache
            │ miss
            ▼
        ISP DNS Resolver ──► Root DNS Server
                             │ ".asia"
                             ▼
                         TLD DNS Server (.asia)
                             │ "xdev.asia"
                             ▼
                         Authoritative DNS
                             │
                             ▼
                         IP: 104.21.35.123
```

### 1.3 DNS Record Types

| Record | Mô tả | Ví dụ |
|--------|--------|-------|
| **A** | Domain → IPv4 | xdev.asia → 104.21.35.123 |
| **AAAA** | Domain → IPv6 | xdev.asia → 2606:4700::6812 |
| **CNAME** | Domain → Domain | www.xdev.asia → xdev.asia |
| **MX** | Mail server | xdev.asia → mail.xdev.asia |
| **NS** | Name server | xdev.asia → ns1.cloudflare.com |
| **TXT** | Text record | SPF, DKIM cho email |

### 1.4 DNS trong System Design

```
DNS-based Load Balancing:

xdev.asia → 10.0.1.1  (Server US)
          → 10.0.2.1  (Server EU)
          → 10.0.3.1  (Server Asia)

Strategies:
  - Round Robin: Trả lần lượt từng IP
  - Weighted: Server khỏe hơn nhận nhiều traffic hơn
  - Geo-based: Trả IP gần user nhất
  - Latency-based: Trả IP có latency thấp nhất
```

---

## 2. TCP vs UDP

### 2.1 TCP (Transmission Control Protocol)

```
TCP 3-way Handshake:

Client          Server
  │── SYN ────────►│     1. Client gửi SYN
  │◄── SYN-ACK ───│     2. Server trả SYN-ACK
  │── ACK ────────►│     3. Client confirm
  │                │     → Connection established
  │◄─── Data ─────►│     4. Truyền data
```

**Đặc điểm:**
- Reliable: Đảm bảo data đến đúng thứ tự
- Flow control & Congestion control
- Overhead cao hơn UDP

### 2.2 UDP (User Datagram Protocol)

```
UDP: Fire and Forget

Client          Server
  │── Data ───────►│     Gửi data, không cần handshake
  │── Data ───────►│     Không đảm bảo đến nơi
  │── Data ───────►│     Không đảm bảo thứ tự
```

### 2.3 So sánh

| Tiêu chí | TCP | UDP |
|----------|-----|-----|
| **Reliability** | Đảm bảo delivery | Best effort |
| **Order** | Đảm bảo thứ tự | Không đảm bảo |
| **Speed** | Chậm hơn (handshake) | Nhanh hơn |
| **Use cases** | HTTP, Email, File transfer | Video call, Gaming, DNS |
| **Connection** | Connection-oriented | Connectionless |
| **Overhead** | Cao | Thấp |

---

## 3. HTTP/HTTPS và Evolution

### 3.1 HTTP/1.1

```
Client ──► Server: GET /page1
Client ◄── Server: Response page1
Client ──► Server: GET /style.css    ← Phải đợi response trước
Client ◄── Server: Response style.css
Client ──► Server: GET /script.js
Client ◄── Server: Response script.js

Vấn đề: Head-of-line blocking
  → Mỗi lần chỉ 1 request trên 1 connection
  → Browsers mở 6-8 connections song song (workaround)
```

### 3.2 HTTP/2

```
Client ──► Server: Stream 1: GET /page1     ┐
Client ──► Server: Stream 2: GET /style.css  │ Multiplexing!
Client ──► Server: Stream 3: GET /script.js  ┘ Cùng 1 connection

Server Push:
  Client request /page1
  Server trả /page1 + push /style.css, /script.js
  → Client có sẵn resources trước khi cần
```

**Cải tiến chính:**
- Multiplexing: Nhiều requests trên 1 connection
- Header compression (HPACK)
- Server Push
- Binary protocol (thay vì text)

### 3.3 HTTP/3 (QUIC)

```
HTTP/1.1: TCP + TLS         → 3 roundtrips to start
HTTP/2:   TCP + TLS         → 3 roundtrips to start
HTTP/3:   QUIC (over UDP)   → 1 roundtrip (0-RTT resumption)
```

**Cải tiến:**
- Built on UDP (nhanh hơn TCP handshake)
- 0-RTT connection resumption
- Không còn Head-of-line blocking ở transport layer
- Built-in encryption

---

## 4. WebSocket & Server-Sent Events

### 4.1 Polling vs Long Polling vs WebSocket vs SSE

```
Polling:
  Client: "Có tin nhắn mới không?" (mỗi 5 giây)
  Server: "Không" / "Có"
  → Lãng phí bandwidth

Long Polling:
  Client: "Có tin nhắn mới không?" (hold connection)
  Server: ... đợi ... "Có tin nhắn mới!" → return
  Client: Nhận xong → gửi request mới ngay
  → Tốt hơn polling, vẫn overhead

WebSocket:
  Client ◄──── Full-duplex connection ────► Server
  → Cả hai bên gửi data bất kỳ lúc nào
  → Ideal cho chat, gaming, real-time

SSE (Server-Sent Events):
  Server ────► Client (one-way stream)
  → Server push updates liên tục
  → Ideal cho notifications, live feeds
```

### 4.2 Khi nào dùng gì?

| Use case | Recommended |
|----------|------------|
| Chat application | WebSocket |
| Live sports scores | SSE |
| Stock ticker | WebSocket hoặc SSE |
| Social media feed | Long Polling hoặc SSE |
| Online gaming | WebSocket |
| Notifications | SSE |
| File upload progress | SSE |
| Collaborative editing | WebSocket |

---

## 5. API Paradigms: REST vs RPC vs GraphQL

### 5.1 REST (Representational State Transfer)

```
GET    /users/123          → Lấy user 123
POST   /users              → Tạo user mới
PUT    /users/123          → Update user 123
DELETE /users/123          → Xóa user 123
GET    /users/123/orders   → Lấy orders của user 123
```

**Ưu điểm:** Simple, standard, cacheable, widely supported
**Nhược điểm:** Over-fetching, under-fetching, multiple roundtrips

### 5.2 RPC (Remote Procedure Call)

```
POST /getUserById          { "userId": 123 }
POST /createUser           { "name": "John", "email": "..." }
POST /transferMoney        { "from": 1, "to": 2, "amount": 100 }
```

**Modern RPC: gRPC**
```protobuf
service UserService {
  rpc GetUser (GetUserRequest) returns (User);
  rpc CreateUser (CreateUserRequest) returns (User);
}
```

**Ưu điểm:** Performance (binary protocol), type-safe, bi-directional streaming
**Nhược điểm:** Không browser-friendly, cần code gen, learning curve

### 5.3 GraphQL

```graphql
query {
  user(id: 123) {
    name
    email
    orders(last: 5) {
      id
      total
      items {
        name
        price
      }
    }
  }
}
```

**Ưu điểm:** Client chọn exactly data cần, 1 endpoint, no over-fetching
**Nhược điểm:** Complexity, caching khó hơn, N+1 query problem

### 5.4 Khi nào dùng gì?

| Paradigm | Best for |
|----------|---------|
| **REST** | Public APIs, CRUD operations, simple interactions |
| **gRPC** | Internal microservices communication, high performance |
| **GraphQL** | Complex data relationships, mobile apps, BFF |

---

## 6. Tổng kết

| Topic | Key Takeaway |
|-------|-------------|
| DNS | "Danh bạ" Internet, có thể dùng cho load balancing |
| TCP | Reliable, ordered — dùng cho HTTP, database |
| UDP | Fast, unreliable — dùng cho video, gaming |
| HTTP/2 | Multiplexing, server push — standard hiện tại |
| HTTP/3 | QUIC over UDP — future standard |
| WebSocket | Full-duplex real-time communication |
| REST | Standard cho public APIs |
| gRPC | High-performance internal communication |
| GraphQL | Flexible data fetching cho complex UIs |

---

## Bài tập

1. **DNS Design:** Thiết kế DNS strategy cho ứng dụng có users ở Việt Nam, Singapore và Nhật Bản. Servers đặt ở Singapore và Tokyo.

2. **Protocol Choice:** Cho mỗi scenario, chọn protocol phù hợp:
   - (a) Live video streaming platform
   - (b) Banking API cho mobile app
   - (c) Internal microservice communication (10K RPS)
   - (d) Real-time collaborative document editing

3. **API Design:** Thiết kế API cho hệ thống e-commerce sử dụng REST. Liệt kê các endpoints cho: Products, Orders, Cart, Users.
