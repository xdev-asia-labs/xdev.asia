---
id: 019d8a21-c110-7001-d001-e1f2a3b4c517
title: 'レッスン 17: サービス通信パターン'
slug: bai-17-service-communication-patterns
description: >-
  同期: REST、gRPC、GraphQL の詳細な比較。非同期: メッセージベース、イベントベース。サービス メッシュ
  (Istio、Linkerd)。サーキット ブレーカー、リトライ、タイムアウト パターン。 API のバージョン管理戦略。
duration_minutes: 150
is_free: false
video_url: null
sort_order: 17
section_title: 'パート 5: アーキテクチャ パターン'
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 'システムアーキテクチャ: ゼロからヒーローへ'
  slug: system-architecture-from-zero-to-hero
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6798" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6798)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1062" cy="96" r="20" fill="#f87171" opacity="0.11"/>
    <circle cx="1024" cy="118" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="986" cy="140" r="32" fill="#f87171" opacity="0.13"/>
    <circle cx="948" cy="162" r="8" fill="#f87171" opacity="0.09"/>
    <circle cx="910" cy="184" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="176" x2="1100" y2="256" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="206" x2="1050" y2="276" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1052.8467875173176,210.5 1052.8467875173176,241.5 1026,257 999.1532124826824,241.5 999.1532124826824,210.5 1026,195" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🏗️ アーキテクチャ — レッスン 17</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 17: サービス通信パターン</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">システムアーキテクチャ: ゼロからヒーローへ</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 5: アーキテクチャ パターン</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

マイクロサービスでは、サービスは相互に通信する必要があります。間違った通信パターンを選択すると、連鎖的な障害、高い遅延、密結合が発生する可能性があります。この記事では、一般的なパターンをすべて分析します。

---

## 1. 同期通信

### 1.1 休憩

```
GET /api/users/123 HTTP/1.1
Host: user-service
Accept: application/json

HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": 123,
  "name": "Duy Tran",
  "email": "duy@example.com"
}

Ưu điểm:
  ✅ Simple, human-readable
  ✅ Widely supported
  ✅ HTTP caching
  ✅ Dễ debug (curl, Postman)

Nhược điểm:
  ❌ Over-fetching / Under-fetching
  ❌ Multiple round trips (N+1)
  ❌ Text-based → larger payload
```

### 1.2 gRPC

```
// Proto definition
service UserService {
  rpc GetUser(GetUserRequest) returns (User);
  rpc ListUsers(ListUsersRequest) returns (stream User);
}

message User {
  int64 id = 1;
  string name = 2;
  string email = 3;
}

Ưu điểm:
  ✅ Binary (Protobuf) → nhỏ hơn, nhanh hơn
  ✅ HTTP/2 → multiplexing, streaming
  ✅ Strongly typed (code generation)
  ✅ Bi-directional streaming

Nhược điểm:
  ❌ Không human-readable
  ❌ Browser support hạn chế (cần grpc-web)
  ❌ Khó debug hơn REST
```

### 1.3 GraphQL

```graphql
# Client quyết định lấy fields nào
query {
  user(id: 123) {
    name
    orders(last: 5) {
      id
      total
      items {
        product { name }
      }
    }
  }
}

# 1 request lấy đúng data cần thiết
# Không over-fetching, không under-fetching

Ưu điểm:
  ✅ Client-driven queries
  ✅ Single endpoint
  ✅ Strongly typed schema
  ✅ Introspection

Nhược điểm:
  ❌ Complexity (resolver, dataloader)
  ❌ Caching khó hơn REST
  ❌ N+1 queries ở backend
  ❌ Security (query depth attacks)
```

### 1.4 比較

|特長 |休憩 | gRPC |グラフQL |
|----------|----------|----------|----------|
|プロトコル | HTTP/1.1+ | HTTP/2 | HTTP |
|フォーマット | JSON |プロトブフ | JSON |
|タイプセーフティ |弱い |強い |強い |
|ストリーミング |いいえ (SSE) |はい |定期購読 |
|ブラウザ |はい |限定 |はい |
|こんな方に最適 |パブリック API |サービス↔サービス |フロントエンド↔バックエンド |
|パフォーマンス |中 |高 |中 |

---

## 2. 非同期通信

### 2.1 メッセージベース (ポイントツーポイント)

```
Order Service ──message──► Queue ──► Payment Service

  Tight contract: Order Service biết Payment Service sẽ xử lý
  1 message → 1 consumer
  Use case: Task distribution
```

### 2.2 イベントベース (Pub/Sub)

```
Order Service ──event──► Topic
                            │
                  ┌─────────┼─────────┐
                  ▼         ▼         ▼
              Payment   Inventory   Email

  Loose coupling: Order Service KHÔNG biết ai subscribe
  1 event → N consumers
  Use case: Notifications, data sync
```

### 2.3 リクエスト/リプライ (非同期)

```
Order Service ──► Request Queue ──► Payment Service
                                        │
Order Service ◄── Reply Queue ◄─────────┘

  Correlation ID để match request ↔ reply
  Async nhưng vẫn request-response semantic
```

---

## 3. 回復力のパターン

### 3.1 サーキットブレーカー

```
States:
  CLOSED (normal):
    Requests đi qua bình thường
    Đếm failures

  OPEN (tripped):
    Failures > threshold → OPEN
    Requests bị reject ngay (fail fast)
    Không gọi downstream service

  HALF-OPEN (testing):
    After timeout → cho 1 request thử
    Success → CLOSED
    Fail → OPEN lại

  ┌────────┐  failure > 5  ┌────────┐
  │ CLOSED │──────────────►│  OPEN  │
  │        │◄──────────────│        │
  └────────┘  success      └───┬────┘
                               │ timeout
                         ┌─────▼─────┐
                         │ HALF-OPEN │
                         └───────────┘
```

### 3.2 指数バックオフを使用した再試行

```
Attempt 1: Fail → Wait 1s
Attempt 2: Fail → Wait 2s
Attempt 3: Fail → Wait 4s
Attempt 4: Fail → Wait 8s + jitter
Attempt 5: Fail → Give up, return error

Jitter: Random delay thêm vào
  Tránh "thundering herd" khi nhiều clients retry cùng lúc

Retry Budget:
  Max 20% requests là retries
  Tránh retry storm amplification
```

### 3.3 タイムアウト戦略

```
Cascading timeout:

  Client ──(timeout: 5s)──► API Gateway
  API Gateway ──(timeout: 3s)──► Order Service
  Order Service ──(timeout: 1s)──► Payment Service

  Rule: Outer timeout > Inner timeout
  Tránh: Client đã timeout nhưng backend vẫn xử lý
```

### 3.4 バルクヘッド

```
Vấn đề: 1 slow service chiếm hết threads → toàn bộ app chậm

Giải pháp: Isolate resource pools

  ┌─────────────────────────────────────┐
  │ Application                         │
  │                                     │
  │ ┌─────────────┐ ┌─────────────┐    │
  │ │ Thread Pool │ │ Thread Pool │    │
  │ │ Service A   │ │ Service B   │    │
  │ │ (10 threads)│ │ (10 threads)│    │
  │ └─────────────┘ └─────────────┘    │
  │                                     │
  │ Service A chậm → Pool A hết        │
  │ Service B vẫn hoạt động bình thường │
  └─────────────────────────────────────┘
```

---

## 4. サービスメッシュ

### 4.1 サイドカー パターン

```
Không có Service Mesh:
  Service A ──(retry, circuit breaker, mTLS, tracing)──► Service B
  Logic phức tạp TRONG code mỗi service

Có Service Mesh:
  ┌──────────────────┐         ┌──────────────────┐
  │ Pod A            │         │ Pod B            │
  │ ┌──────────────┐ │         │ ┌──────────────┐ │
  │ │ Service A    │ │         │ │ Service B    │ │
  │ │ (business    │ │         │ │ (business    │ │
  │ │  logic only) │ │         │ │  logic only) │ │
  │ └──────┬───────┘ │         │ └──────▲───────┘ │
  │        │         │         │        │         │
  │ ┌──────▼───────┐ │         │ ┌──────┴───────┐ │
  │ │ Sidecar Proxy│◄├─────────├►│ Sidecar Proxy│ │
  │ │ (Envoy)      │ │  mTLS   │ │ (Envoy)      │ │
  │ │ retry,circuit│ │         │ │ retry,circuit│ │
  │ │ trace,metrics│ │         │ │ trace,metrics│ │
  │ └──────────────┘ │         │ └──────────────┘ │
  └──────────────────┘         └──────────────────┘

  Control Plane (Istio/Linkerd):
    Config policies, certificates, routing rules
```

---

## 5. API のバージョン管理

```
1. URL versioning:
   /api/v1/users    → Version 1
   /api/v2/users    → Version 2
   Simple, explicit

2. Header versioning:
   Accept: application/vnd.myapp.v2+json
   Clean URLs

3. Query parameter:
   /api/users?version=2
   Easy to test

4. No versioning (evolution):
   Thêm fields mới (backward compatible)
   Deprecate old fields (nhưng không remove)
   GraphQL style
```

---

## 概要

|パターン |いつ使用するか |
|----------|---------------|
|休憩 |パブリック API、単純な CRUD |
| gRPC |サービス ↔ サービス、パフォーマンス重視 |
|グラフQL |複雑なフロントエンド クエリ |
|非同期/イベント |疎結合、結果整合性 |
|サーキットブレーカー |連鎖的な障害から保護する |
|サービスメッシュ |多くのサービス、複雑なネットワーキング |

---

## 演習

1. **プロトコルの選択:** マイクロサービス: API ゲートウェイ → ユーザー サービス、注文サービス → インベントリ サービス、フロントエンド → BFF。各ペアに対して REST/gRPC/GraphQL を選択します。説明する。

2. **サーキット ブレーカー構成:** 支払いサービスには SLA 99.9% (ダウンタイム 43 分/月) があります。サーキット ブレーカー構成の設計: 障害しきい値、タイムアウト、ハーフオープン要求、回復時間。

3. **回復力設計:** サービス A はサービス B (重要)、サービス C (オプション) を呼び出します。依存関係ごとに再試行 + タイムアウト + フォールバック戦略を設計します。
