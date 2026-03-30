---
id: 019d8a21-c110-7001-d001-e1f2a3b4c525
title: "Bài 25: Case Study - Thiết kế Chat System"
slug: bai-25-case-study-thiet-ke-chat-system
description: >-
  Thiết kế real-time chat system (WhatsApp/Messenger). WebSocket
  cho real-time. Message delivery guarantees. Online presence.
  Group chat. Media sharing. Message storage & sync. Push
  notifications.
duration_minutes: 160
is_free: false
video_url: null
sort_order: 25
section_title: "Phần 7: System Design Case Studies"
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: "System Architecture: From Zero to Hero"
  slug: system-architecture-from-zero-to-hero
---

## Giới thiệu

Chat system là bài system design phức tạp nhất, cover: real-time delivery, persistent connections, message ordering, offline support, group chat, và media handling.

---

## 1. Requirements & Estimation

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

## 2. Architecture Overview

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

## 3. Message Flow

### 3.1 1:1 Chat

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

### 3.2 Group Chat

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

## 4. WebSocket Management

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

## 5. Message Storage

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

## 6. Online Presence

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

## 7. End-to-End Encryption

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

## Tổng kết

| Component | Technology | Why |
|-----------|-----------|-----|
| Real-time | WebSocket | Bidirectional, persistent |
| Message Store | Cassandra | Write-heavy, partition by chat |
| Presence | Redis | Fast in-memory, TTL |
| Media | S3 + CDN | Scalable blob storage |
| Push | FCM/APNs | Mobile notifications |
| Routing | Redis Pub/Sub | Cross-server messaging |

---

## Bài tập

1. **Typing Indicator:** Thiết kế "User A is typing..." feature. Frequency gửi events? Khi nào dừng? Group chat với 100 members thì sao?

2. **Message Search:** Thêm feature search messages. Database nào cho full-text search? Index strategy? Search trong E2E encrypted messages có được không?

3. **Multi-device Sync:** User có 3 devices (phone, tablet, laptop). Thiết kế sync strategy: messages, read receipts, contacts.
