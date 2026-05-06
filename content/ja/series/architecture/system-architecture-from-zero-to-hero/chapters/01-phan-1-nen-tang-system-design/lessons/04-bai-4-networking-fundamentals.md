---
id: 019d8a21-c104-7001-d001-e1f2a3b4c504
title: 'レッスン 4: システム設計のためのネットワークの基礎'
slug: bai-4-networking-fundamentals-cho-system-design
description: >-
  DNS とその仕組み。 TCP と UDP。 HTTP/HTTPS、HTTP/2、HTTP/3。 WebSocket およびサーバー送信イベント。
  REST、RPC、GraphQL。すべてのプログラマが知っておくべきレイテンシの数値。
duration_minutes: 130
is_free: true
video_url: null
sort_order: 4
section_title: 'パート 1: システム設計の基礎'
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 'システムアーキテクチャ: ゼロからヒーローへ'
  slug: system-architecture-from-zero-to-hero
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🏗️ アーキテクチャ — レッスン 4</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 4: システムのネットワーキングの基礎</tspan>
      <tspan x="60" dy="42">デザイン</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">システムアーキテクチャ: ゼロからヒーローへ</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: システム設計の基礎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

すべての分散システムは **ネットワーク** を介して通信します。ネットワークの基礎を理解すると、どのプロトコルを選択するか、どこで遅延を最適化するか、ボトルネックを予測する方法など、適切な設計上の決定を下すのに役立ちます。

---

## 1. DNS (ドメインネームシステム)

### 1.1 DNS とは何ですか?

DNS はインターネットの「電話帳」であり、ドメイン名を IP アドレスに変換します。

```
Browser: "Tôi muốn truy cập xdev.asia"
DNS:     "xdev.asia → 104.21.35.123"
Browser: → Kết nối đến 104.21.35.123
```

### 1.2 DNS 解決プロセス

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

### 1.3 DNS レコードの種類

|記録 |説明 |例 |
|----------|----------|----------|
| **A** |ドメイン → IPv4 | xdev.asia → 104.21.35.123 |
| **ああああ** |ドメイン → IPv6 | xdev.asia → 2606:4700::6812 |
| **CNAME** |ドメイン → ドメイン | www.xdev.asia → xdev.asia |
| **MX** |メールサーバー | xdev.asia → mail.xdev.asia |
| **NS** |ネームサーバー | xdev.asia → ns1.cloudflare.com |
| **TXT** |テキストレコード |電子メールの SPF、DKIM |

### 1.4 システム設計における DNS

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

## 2. TCP と UDP の比較

### 2.1 TCP (伝送制御プロトコル)

```
TCP 3-way Handshake:

Client          Server
  │── SYN ────────►│     1. Client gửi SYN
  │◄── SYN-ACK ───│     2. Server trả SYN-ACK
  │── ACK ────────►│     3. Client confirm
  │                │     → Connection established
  │◄─── Data ─────►│     4. Truyền data
```

**特徴:**
- 信頼性: データが正しい順序で到着することを保証します
- フロー制御と輻輳制御
- UDPよりもオーバーヘッドが高い

### 2.2 UDP (ユーザー データグラム プロトコル)

```
UDP: Fire and Forget

Client          Server
  │── Data ───────►│     Gửi data, không cần handshake
  │── Data ───────►│     Không đảm bảo đến nơi
  │── Data ───────►│     Không đảm bảo thứ tự
```

### 2.3 比較

|基準 | TCP | UDP |
|----------|-----|-----|
| **信頼性** |配達保証 |ベストエフォート |
| **注文** |注文保証 |保証なし |
| **速度** |遅い (ハンドシェイク) |より速く |
| **使用例** | HTTP、電子メール、ファイル転送 |ビデオ通話、ゲーム、DNS |
| **接続** |コネクション指向 |コネクションレス |
| **オーバーヘッド** |曹操 |低い |

---

## 3. HTTP/HTTPS と進化

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

**主な改善点:**
- 多重化: 1 つの接続で複数のリクエスト
- ヘッダー圧縮 (HPACK)
- サーバープッシュ
- バイナリ プロトコル (テキストの代わりに)

### 3.3 HTTP/3 (QUIC)

```
HTTP/1.1: TCP + TLS         → 3 roundtrips to start
HTTP/2:   TCP + TLS         → 3 roundtrips to start
HTTP/3:   QUIC (over UDP)   → 1 roundtrip (0-RTT resumption)
```

**改善点:**
- UDP 上に構築 (TCP ハンドシェイクより高速)
- 0-RTT接続再開
- トランスポート層でのヘッドオブラインブロッキングがなくなりました
- 組み込みの暗号化

---

## 4. WebSocket およびサーバー送信イベント

### 4.1 ポーリング、ロングポーリング、WebSocket、SSE

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

### 4.2 いつ何を使用するか?

|使用例 |おすすめ |
|----------|----------|
|チャットアプリケーション |ウェブソケット |
|ライブスポーツスコア | SSE |
|株価ティッカー | WebSocket または SSE |
|ソーシャルメディアフィード |ロングポーリングまたは SSE |
|オンライン ゲーム |ウェブソケット |
|お知らせ | SSE |
|ファイルのアップロードの進行状況 | SSE |
|共同編集 |ウェブソケット |

---

## 5. API パラダイム: REST、RPC、GraphQL

### 5.1 REST (表現状態転送)

```
GET    /users/123          → Lấy user 123
POST   /users              → Tạo user mới
PUT    /users/123          → Update user 123
DELETE /users/123          → Xóa user 123
GET    /users/123/orders   → Lấy orders của user 123
```

**利点:** シンプル、標準、キャッシュ可能、広くサポートされている
**欠点:** オーバーフェッチ、アンダーフェッチ、複数回のラウンドトリップ

### 5.2 RPC (リモート プロシージャ コール)

```
POST /getUserById          { "userId": 123 }
POST /createUser           { "name": "John", "email": "..." }
POST /transferMoney        { "from": 1, "to": 2, "amount": 100 }
```

**最新の RPC: gRPC**
```protobuf
service UserService {
  rpc GetUser (GetUserRequest) returns (User);
  rpc CreateUser (CreateUserRequest) returns (User);
}
```

**利点:** パフォーマンス (バイナリ プロトコル)、タイプ セーフ、双方向ストリーミング
**短所:** ブラウザフレンドリーではない、遺伝コードが必要で、学習に時間がかかる

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

**利点:** クライアントは必要なデータを正確に選択し、エンドポイントは 1 つで、オーバーフェッチはありません
**欠点:** 複雑さ、キャッシュがより困難、N+1 クエリの問題

### 5.4 いつ何を使用するか?

|パラダイム |こんな方に最適 |
|----------|----------|
| **休憩** |パブリック API、CRUD 操作、単純なインタラクション |
| **gRPC** |内部マイクロサービス通信、高パフォーマンス |
| **グラフQL** |複雑なデータ関係、モバイル アプリ、BFF |

---

## 6. まとめ

|トピック |重要なポイント |
|------|-----------|
| DNS |インターネット「ディレクトリ」、負荷分散に使用可能 |
| TCP |信頼性があり、順序付けられている - HTTP、データベースに使用 |
| UDP |高速だが信頼性は低い - ビデオ、ゲームに使用 |
| HTTP/2 |多重化、サーバープッシュ - 現在の標準 |
| HTTP/3 | QUIC over UDP — 将来の標準 |
|ウェブソケット |全二重リアルタイム通信 |
|休憩 |パブリック API の標準 |
| gRPC |高性能の内部コミュニケーション |
|グラフQL |複雑な UI 向けの柔軟なデータ取得 |

---

## 演習

1. **DNS 設計:** ベトナム、シンガポール、日本のユーザーを対象としたアプリケーションの DNS 戦略を設計します。サーバーはシンガポールと東京にあります。

2. **プロトコルの選択:** シナリオごとに、適切なプロトコルを選択します。
   - (a) ライブビデオストリーミングプラットフォーム
   - (b) モバイルアプリ用のバンキング API
   - (c) 内部マイクロサービス通信 (10K RPS)
   - (d) リアルタイムの共同ドキュメント編集

3. **API 設計:** REST を使用した電子商取引システムの API を設計します。製品、注文、カート、ユーザーのエンドポイントをリストします。
