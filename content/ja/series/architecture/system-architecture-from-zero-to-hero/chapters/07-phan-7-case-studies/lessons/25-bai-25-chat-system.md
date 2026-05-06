---
id: 019d8a21-c110-7001-d001-e1f2a3b4c525
title: 'レッスン 25: ケーススタディ - チャット システムの設計'
slug: bai-25-case-study-thiet-ke-chat-system
description: >-
  リアルタイムチャットシステム（WhatsApp/Messenger）を設計します。リアルタイム用の
  WebSocket。メッセージ配信を保証します。オンラインでの存在感。グループチャット。メディア共有。メッセージの保存と同期。プッシュ通知。
duration_minutes: 160
is_free: false
video_url: null
sort_order: 25
section_title: 'パート 7: システム設計のケーススタディ'
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 'システムアーキテクチャ: ゼロからヒーローへ'
  slug: system-architecture-from-zero-to-hero
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1901" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1901)"/>

  <!-- Decorations -->
  <g>
    <circle cx="624" cy="222" r="12" fill="#f472b6" opacity="0.07"/>
    <circle cx="648" cy="286" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="672" cy="90" r="16" fill="#f472b6" opacity="0.11"/>
    <circle cx="696" cy="154" r="18" fill="#f472b6" opacity="0.13"/>
    <circle cx="720" cy="218" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="102" x2="1100" y2="182" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="132" x2="1050" y2="202" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="934.0429399400242,83.5 934.0429399400242,120.5 902,139 869.9570600599758,120.5 869.9570600599758,83.50000000000001 902,65" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🏗️ 建築 — レッスン 25</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 25: ケーススタディ - チャット システムの設計</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">システムアーキテクチャ: ゼロからヒーローへ</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 7: システム設計のケーススタディ</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

チャット システムは、リアルタイム配信、永続的な接続、メッセージの順序付け、オフライン サポート、グループ チャット、メディア処理を含む、最も複雑なシステム設計のレッスンです。

---

## 1. 要件と見積もり

```
Functional:
  - 1:1 chat (real-time)
  - Group chat (up to 500 members)
  - Online/offline status
  - Read receipts (sent/delivered/read)
  - Media sharing (image, video, file)
  - Message history & sync across devices
  - Push notifications (offline users)

Non-Functional:
  - Real-time delivery (< 200ms)
  - Message ordering guaranteed
  - At-least-once delivery
  - 99.99% availability

Estimation (50M DAU):
  Messages/day: 50M users × 40 messages = 2B messages
  QPS: 2B / 86400 ≈ 23K messages/s (peak: 70K/s)
  Storage: 2B × 100 bytes = 200GB/day → 73TB/year
  Connections: 50M concurrent WebSocket connections
```

---

## 2. アーキテクチャの概要

```
┌───────────────────────────────────────────────────────┐
│                                                        │
│  Mobile/Web Client                                     │
│       │                                                │
│  ┌────▼──────────┐                                    │
│  │  API Gateway  │ ← REST: auth, profile, contacts    │
│  └────┬──────────┘                                    │
│       │                                                │
│  ┌────▼──────────┐  WebSocket                         │
│  │  WS Gateway   │◄──────────► Clients (persistent)   │
│  │  (Stateful)   │                                    │
│  └────┬──────────┘                                    │
│       │                                                │
│  ┌────▼──────────┐  ┌──────────┐  ┌──────────────┐   │
│  │ Chat Service  │  │ Presence │  │ Notification │   │
│  │ (message      │  │ Service  │  │ Service      │   │
│  │  routing)     │  │ (online) │  │ (push/email) │   │
│  └────┬──────────┘  └──────────┘  └──────────────┘   │
│       │                                                │
│  ┌────▼──────────┐  ┌──────────┐                      │
│  │ Message Store │  │ Media    │                      │
│  │ (Cassandra)   │  │ Service  │                      │
│  └───────────────┘  │ (S3)     │                      │
│                     └──────────┘                      │
└───────────────────────────────────────────────────────┘
```

---

## 3. メッセージ フロー

### 3.1 1:1 チャット

```
User A gửi message cho User B:

1. User A → WS Gateway A: Send message
2. WS Gateway A → Chat Service: Route message
3. Chat Service:
   a. Generate message_id (Snowflake)
   b. Store in Cassandra
   c. Lookup User B: Which WS Gateway?
4. Chat Service → WS Gateway B: Deliver message
5. WS Gateway B → User B: Push via WebSocket

If User B offline:
  4. Chat Service → Notification Service
  5. Notification → FCM/APNs → Push notification
  6. User B comes online → Sync missed messages

Message States:
  ✓  Sent (server received)
  ✓✓ Delivered (recipient received)
  ✓✓ Read (recipient opened) → blue ticks
```

### 3.2 グループチャット

```
User A gửi message vào Group (100 members):

Approach 1: Fan-out on Write
  1. User A → Chat Service: Send to group-123
  2. Chat Service: Lookup group members (100 users)
  3. For each member: Route message
  → 100 writes, 100 deliveries
  → Fast read, slow write
  → Tốt cho small groups (<500)

Approach 2: Fan-out on Read
  1. User A → Chat Service: Write to group inbox
  2. Each member reads from group inbox
  → 1 write, 100 reads
  → Fast write, slow read
  → Tốt cho large groups (channels)
```

---

## 4. WebSocket 管理

```
Challenge: 50M concurrent WebSocket connections

Solution: Multiple WS Gateway servers

  ┌────────────────────────────────────────────┐
  │ WS Gateway 1: User A, C, E (connections)  │
  │ WS Gateway 2: User B, D, F (connections)  │
  │ WS Gateway 3: ...                         │
  └────────────────────────────────────────────┘

Connection Registry (Redis):
  user:A → ws-gateway-1
  user:B → ws-gateway-2
  user:C → ws-gateway-1

Message Routing:
  Chat Service wants to send to User B
  → Redis: user:B → ws-gateway-2
  → Chat Service → WS Gateway 2 → User B

Connection per server: ~500K-1M
  (tuning: file descriptors, memory per connection)
  50M users / 500K = 100 WS Gateway servers
```

---

## 5. メッセージストレージ

```
Cassandra Schema (optimized for chat):

  Partition Key: (chat_id)
  Clustering Key: (message_id DESC)

  ┌──────────┬─────────────┬─────────┬──────────┐
  │ chat_id  │ message_id  │ sender  │ content  │
  ├──────────┼─────────────┼─────────┼──────────┤
  │ chat_AB  │ 1705312205  │ user_A  │ "Hello"  │
  │ chat_AB  │ 1705312200  │ user_B  │ "Hi"     │
  │ chat_AB  │ 1705312195  │ user_A  │ "Hey"    │
  └──────────┴─────────────┴─────────┴──────────┘

Tại sao Cassandra?
  ✅ Write-heavy optimized
  ✅ Partition by chat → all messages cùng node
  ✅ Clustering by time → time-range queries nhanh
  ✅ Linear scalability
  
Sync across devices:
  Client gửi: "Give me messages after message_id=X"
  Server: Query WHERE chat_id = ? AND message_id > X
```

---

## 6. オンラインでのプレゼンス

```
Challenge: 50M users, real-time online/offline status

Approach: Heartbeat

  Client → Server: Heartbeat every 30 seconds
  Server: Update last_seen in Redis
  
  user:A:presence → { status: "online", last_seen: 170531 }
  
  If no heartbeat for 60s → Mark offline
  
Notify friends:
  User A goes online:
  → Lookup A's friends (contact list)
  → For each online friend: Send presence update
  
  Optimization:
  - Chỉ update cho friends đang online
  - Batch presence updates
  - Large group: Lazy loading (check khi mở chat)
```

---

## 7. エンドツーエンドの暗号化

```
Signal Protocol (WhatsApp uses this):

  1. Key Exchange:
     User A: Generate key pair (public + private)
     User B: Generate key pair (public + private)
     Exchange public keys via server
  
  2. Encrypt:
     User A: Encrypt message with B's public key
     → Only B's private key can decrypt
     → Server CANNOT read messages
  
  3. Forward Secrecy:
     New key pair per message (ratcheting)
     Compromise 1 key → Only 1 message exposed

Server stores: Encrypted blobs only
Cannot read content, cannot comply with data requests
```

---

## 概要

|コンポーネント |テクノロジー |なぜ |
|-----------|-----------|-----|
|リアルタイム |ウェブソケット |双方向、永続的 |
|メッセージストア |カサンドラ |書き込みが多い、チャットによるパーティション |
|プレゼンス |レディス |高速インメモリ、TTL |
|メディア | S3 + CDN |スケーラブルな BLOB ストレージ |
|プッシュ | FCM/APN |モバイル通知 |
|ルーティング | Redis Pub/Sub |クロスサーバーメッセージング |

---

## 演習

1. **タイピング インジケーター:** 「ユーザー A が入力中です...」機能を設計します。イベントを頻繁に送信しますか?いつやめるべきか? 100 人のメンバーとのグループ チャットはどうですか?

2. **メッセージ検索:** 機能検索メッセージを追加します。全文検索に対応するデータベースはどれですか?インデックス戦略？ E2E 暗号化メッセージを検索することはできますか?

3. **マルチデバイス同期:** ユーザーは 3 台のデバイス (電話、タブレット、ラップトップ) を持っています。同期戦略を設計します: メッセージ、開封確認、連絡先。
