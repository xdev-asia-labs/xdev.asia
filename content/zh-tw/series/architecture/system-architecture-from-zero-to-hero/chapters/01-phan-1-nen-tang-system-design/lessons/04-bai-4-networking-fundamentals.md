---
id: 019d8a21-c104-7001-d001-e1f2a3b4c504
title: 第 4 課：系統設計的網路基礎知識
slug: bai-4-networking-fundamentals-cho-system-design
description: >-
  DNS 及其工作原理。 TCP 與 UDP。 HTTP/HTTPS、HTTP/2、HTTP/3。 WebSocket 和伺服器發送的事件。 REST、RPC
  與 GraphQL。每個程式設計師都應該知道的延遲數字。
duration_minutes: 130
is_free: true
video_url: null
sort_order: 4
section_title: 第 1 部分：系統設計基礎
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 系統架構：從零到英雄
  slug: system-architecture-from-zero-to-hero
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🏗️ 建築 — 第 4 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 4 課：系統網路基礎知識</tspan>
      <tspan x="60" dy="42">設計</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">系統架構：從零到英雄</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：系統設計基礎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

每個分散式系統都透過**網路**進行通訊。了解網路基礎知識有助於您做出正確的設計決策：選擇哪種協定、在何處優化延遲以及如何預測瓶頸。

---

## 1.DNS（網域名稱系統）

### 1.1 什麼是DNS？

DNS 是網際網路的「電話簿」－將網域名稱轉換為 IP 位址。

```
Browser: "Tôi muốn truy cập xdev.asia"
DNS:     "xdev.asia → 104.21.35.123"
Browser: → Kết nối đến 104.21.35.123
```

### 1.2 DNS解析過程

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

### 1.3 DNS 記錄類型

|記錄|描述 |範例|
|--------|--------|--------|
| **一個** |網域 → IPv4 | xdev.asia → 104.21.35.123 |
| **AAAA** |網域 → IPv6 | xdev.asia → 2606:4700::6812 |
| **別名** |網域名稱 → 網域 | www.xdev.asia → xdev.asia |
| **MX** |郵件伺服器| xdev.asia → mail.xdev.asia |
| **NS** |名稱伺服器 | xdev.asia → ns1.cloudflare.com |
| **TXT** |文字記錄|電子郵件的 SPF、DKIM |

### 1.4 系統設計中的DNS

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

## 2. TCP 與 UDP

### 2.1 TCP（傳輸控制協定）

```
TCP 3-way Handshake:

Client          Server
  │── SYN ────────►│     1. Client gửi SYN
  │◄── SYN-ACK ───│     2. Server trả SYN-ACK
  │── ACK ────────►│     3. Client confirm
  │                │     → Connection established
  │◄─── Data ─────►│     4. Truyền data
```

**特點：**
- 可靠：確保資料以正確的順序到達
- 流量控制和擁塞控制
- 開銷高於UDP

### 2.2 UDP（用戶資料報協定）

```
UDP: Fire and Forget

Client          Server
  │── Data ───────►│     Gửi data, không cần handshake
  │── Data ───────►│     Không đảm bảo đến nơi
  │── Data ───────►│     Không đảm bảo thứ tự
```

### 2.3 比較

|標準| TCP | UDP |
|----------|-----|-----|
| **可靠性** |保證交貨|盡力|
| **訂單** |訂單保證 |沒有保證|
| **速度** |慢一點（握手）|更快 |
| **用例** | HTTP、電子郵件、檔案傳輸 |視訊通話、遊戲、DNS |
| **連線** |面向連線|無連線|
| **開銷** |曹 |低|

---

## 3. HTTP/HTTPS 與演變

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

**主要改進：**
- 多工：1 個連線上的多個請求
- 標頭壓縮（HPACK）
- 伺服器推播
- 二進位協議（而不是文字）

### 3.3 HTTP/3 (QUIC)

```
HTTP/1.1: TCP + TLS         → 3 roundtrips to start
HTTP/2:   TCP + TLS         → 3 roundtrips to start
HTTP/3:   QUIC (over UDP)   → 1 roundtrip (0-RTT resumption)
```

**改進：**
- 基於 UDP（比 TCP 握手速度快）
- 0-RTT 連線恢復
- 傳輸層不再出現隊頭阻塞
- 內建加密

---

## 4. WebSocket 和伺服器發送的事件

### 4.1 輪詢、長輪詢、WebSocket 和 SSE

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

### 4.2 何時使用什麼？

|使用案例 |推薦|
|----------|------------|
|聊天應用程式 | WebSockets |
|現場體育賽事比數 |上交所 |
|股票行情 | WebSocket 或 SSE |
|社群媒體動態 |長輪詢或 SSE |
|線上遊戲 | WebSockets |
|通知 |上交所 |
|文件上傳進度 |交所 |
|協同編輯 | WebSockets |

---

## 5. API 範例：REST、RPC、GraphQL

### 5.1 REST（表徵狀態轉移）

```
GET    /users/123          → Lấy user 123
POST   /users              → Tạo user mới
PUT    /users/123          → Update user 123
DELETE /users/123          → Xóa user 123
GET    /users/123/orders   → Lấy orders của user 123
```

**優點：** 簡單、標準、可快取、廣泛支持
**缺點：** 過度取得、不足取得、多次往返

### 5.2 RPC（遠端過程呼叫）

```
POST /getUserById          { "userId": 123 }
POST /createUser           { "name": "John", "email": "..." }
POST /transferMoney        { "from": 1, "to": 2, "amount": 100 }
```

**現代 RPC：gRPC**
```protobuf
service UserService {
  rpc GetUser (GetUserRequest) returns (User);
  rpc CreateUser (CreateUserRequest) returns (User);
}
```

**優點：** 效能（二進位協定）、型別安全、雙向流
**缺點：** 不適合瀏覽器，需要遺傳密碼，學習曲線

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

**優點：** 用戶端精確選擇所需的數據，1個端點，無過度獲取
**缺點：**複雜，快取比較困難，N+1查詢問題

### 5.4 何時使用什麼？

|範式|最適合 |
|----------|---------|
| **休息** |公共API、CRUD操作、簡單互動 |
| **gRPC** |內部微服務通信，高效能 |
| **GraphQL** |複雜的資料關係、行動應用程式、BFF |

---

## 6. 總結

|主題 |要點 |
|--------|-------------|
|網域解析 |網際網路“目錄”，可用於負載平衡|
| TCP |可靠、有序－用於HTTP、資料庫|
| UDP |快速、不可靠——用於視頻、遊戲 |
| HTTP/2 |多路復用、伺服器推送 — 目前標準 |
| HTTP/3 |基於 UDP 的 QUIC — 未來標準 |
| WebSockets |全雙工即時通訊 |
|休息 |公共 API 標準 |
| gRPC |高效能內部通訊|
| GraphQL |複雜 UI 的靈活資料取得 |

---

## 練習

1. **DNS 設計：** 為越南、新加坡和日本用戶的應用程式設計 DNS 策略。伺服器位於新加坡和東京。

2. **協議選擇：** 對於每種場景，選擇適當的協議：
   - (a) 視訊直播平台
   - (b) 行動應用程式銀行 API
   - (c) 內部微服務通訊（10K RPS）
   - (d) 即時協作文件編輯

3. **API設計：**使用REST設計電子商務系統的API。列出以下端點：產品、訂單、購物車、使用者。
