---
id: 019d8a21-c110-7001-d001-e1f2a3b4c526
title: 第 26 課：案例研究 - 設計新聞推送系統
slug: bai-26-case-study-thiet-ke-news-feed-system
description: >-
  新聞動態設計（Facebook/Twitter/Instagram）。扇出策略：推、拉、混合。 Feed
  排名演算法概念。飼料緩存。即時更新。處理名人（數百萬粉絲）。
duration_minutes: 150
is_free: false
video_url: null
sort_order: 26
section_title: 第 7 部分：系統設計案例研究
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 系統架構：從零到英雄
  slug: system-architecture-from-zero-to-hero
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-235" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-235)"/>

  <!-- Decorations -->
  <g>
    <circle cx="699" cy="107" r="22" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="798" cy="46" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="897" cy="245" r="36" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="996" cy="184" r="13" fill="#818cf8" opacity="0.13"/>
    <circle cx="1095" cy="123" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="77" x2="1100" y2="157" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="107" x2="1050" y2="177" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1054.712812921102,211 1054.712812921102,243 1027,259 999.287187078898,243 999.287187078898,211 1027,195" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🏗️ 建築 — 第 26 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 26 課：案例研究 - 動態消息設計</tspan>
      <tspan x="60" dy="42">系統</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">系統架構：從零到英雄</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 7 部分：系統設計案例研究</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

動態消息是每個社群平台的核心功能。每個用戶都有自己的動態，這些動態由數千名朋友/追蹤者聚合而成，並按相關性排名。這是一個難題，因為規模非常大。

---

## 1. 要求與估算

```
Functional:
  - User tạo post (text, image, video)
  - News Feed hiển thị posts từ friends/followings
  - Feed ranked theo relevance (không chỉ chronological)
  - Support likes, comments, shares
  - Real-time: post mới xuất hiện trong feed bạn bè

Non-Functional:
  - Feed load < 500ms
  - 500M DAU
  - Average 500 friends per user

Estimation:
  Feed requests: 500M × 10 views/day = 5B feed requests/day
  QPS: 5B / 86400 ≈ 58K QPS (peak: 150K)
  Posts/day: 500M × 2 posts = 1B posts/day
  Post size: ~1KB text + pointers → 1TB/day
```

---

## 2. 核心元件

```
┌──────────────────────────────────────────────────────┐
│                                                       │
│  ┌──────────┐    Post Service                         │
│  │ User     │───► ┌──────────────┐                    │
│  │ creates  │    │ Post Storage │                    │
│  │ post     │    │ (posts DB)   │                    │
│  └──────────┘    └──────┬───────┘                    │
│                         │                             │
│                  ┌──────▼───────┐                     │
│                  │ Fan-out      │                     │
│                  │ Service      │                     │
│                  └──────┬───────┘                     │
│                         │                             │
│               ┌─────────▼──────────┐                  │
│               │ Feed Cache         │                  │
│               │ (per-user feed)    │                  │
│               └─────────┬──────────┘                  │
│                         │                             │
│  ┌──────────┐    ┌──────▼───────┐                     │
│  │ User     │───►│ Feed Service │                     │
│  │ reads    │    │ (retrieve)   │                     │
│  │ feed     │    └──────────────┘                     │
│  └──────────┘                                         │
│                                                       │
└──────────────────────────────────────────────────────┘
```

---

## 3. 扇出策略

### 3.1 寫入時扇出（推送模型）

```
User A posts → Write to ALL followers' feed cache

  User A has 1000 followers
  Post → Fan-out Service:
    Feed[follower_1].prepend(post)
    Feed[follower_2].prepend(post)
    ...
    Feed[follower_1000].prepend(post)

  ✅ Feed read: Instant (pre-computed)
  ❌ Write: Slow for celebrities (10M followers!)
  ❌ Wasted work: inactive users' feeds updated
  ❌ Hot key: Celebrity's post → 10M cache writes
```

### 3.2 讀取時扇出（拉模型）

```
User B opens feed → Query all friends' posts, merge, rank

  User B has 500 friends
  Feed request:
    Get posts from friend_1 (last 24h)
    Get posts from friend_2 (last 24h)
    ...
    Merge + Rank + Return top 20

  ✅ Write: Instant (just store post)
  ❌ Read: Slow (500 queries per feed request!)
  ❌ High read latency
```

### 3.3 混合（Facebook/Twitter 方法）

```
Normal users (< 10K followers): Fan-out on Write
  → Pre-compute feeds, instant reads

Celebrities (> 10K followers): Fan-out on Read
  → Don't pre-compute, merge at read time

Feed Read:
  1. Get pre-computed feed (from cache)
  2. Get celebrity posts (from post store)
  3. Merge + Re-rank
  4. Return top N

  ┌────────────────────────────────────────┐
  │ User B's Feed                          │
  │                                        │
  │ Pre-computed cache: [post5, post3, ...]│
  │ +                                      │
  │ Celebrity posts:   [celeb_post_1, ...] │
  │ =                                      │
  │ Merged + Ranked:   [final feed]        │
  └────────────────────────────────────────┘
```

---

## 4. Feed 排名

```
Không chỉ chronological, mà ranked by relevance:

Score = f(affinity, weight, time_decay)

  Affinity:    Bạn tương tác với author bao nhiêu?
               (likes, comments, messages, profile views)

  Weight:      Post type importance
               Video > Photo > Link > Text
               Comments > Likes

  Time Decay:  Post cũ hơn → score giảm
               score × (1 / time_since_posted^1.5)

Simplified Ranking:
  score = (likes × 1 + comments × 3 + shares × 5)
          × affinity_score
          × time_decay_factor

ML-based:
  Feature engineering → Train model
  Features: user engagement history, post features,
            social graph, time context
  Model: Predict P(user engages with post)
```

---

## 5. Feed 快取設計

```
Per-user feed cache (Redis):

  Key: feed:{user_id}
  Value: List of post_ids (last 1000)

  feed:user_123 → [post_999, post_998, post_995, ...]

Feed retrieval:
  Page 1: LRANGE feed:user_123 0 19    (posts 1-20)
  Page 2: LRANGE feed:user_123 20 39   (posts 21-40)

Post details:
  Separately cached:
  post:999 → { author, text, image_url, likes, ... }

  Feed = post_ids from user cache
       + post details from post cache
       + author info from user cache
       → Assemble in API server

Cache Eviction:
  - Keep last 1000 posts per user
  - TTL: 7 days (re-compute if expired)
  - Active users: always fresh (fan-out keeps updating)
  - Inactive users: compute on demand
```

---

## 6. 即時更新

```
Long Polling vs WebSocket vs SSE:

  Long Polling: Client polls every 30s
    Simple, but delayed, wasteful

  WebSocket: Persistent connection
    Real-time, but resource-heavy (50M connections!)

  SSE (Server-Sent Events): Server push, HTTP-based
    Simpler than WebSocket, one-directional

Approach (Facebook-style):
  - Initial load: REST API (full feed)
  - Updates: Long polling / SSE (new posts notification)
  - "3 new posts available" → Click to load
  - NOT auto-inject (breaks reading flow)
```

---

## 總結

|決定|選擇|原因 |
|----------|--------|--------|
|扇出 |混合動力|平衡所有使用者類型的寫入/讀取 |
|儲存| Cassandra（貼文）+ Redis（提要）|大量寫入 + 快速讀取 |
|排行榜|基於機器學習的分數 |相關性 > 新近度 |
|即時 |上交所+通知|不完整的WebSocket |
|快取|每用戶提要快取 |預先計算以實現快速閱讀 |

---

## 練習

1. **名人問題：** 用戶擁有 5000 萬粉絲貼文。寫入時扇出 → 50M 快取更新。設計最大延遲 5 秒的解決方案。

2. **提要多樣性：**提要不應是一個人的所有帖子。設計去重+分集演算法。

3. **廣告整合：** 將贊助貼文插入 Feed（每 5 個貼文 1 個廣告）。設計不影響 Feed 延遲的廣告插入策略。
