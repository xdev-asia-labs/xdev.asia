---
id: 019d8a21-c110-7001-d001-e1f2a3b4c526
title: "Bài 26: Case Study - Thiết kế News Feed System"
slug: bai-26-case-study-thiet-ke-news-feed-system
description: >-
  Thiết kế News Feed (Facebook/Twitter/Instagram). Fan-out
  strategies: Push vs Pull vs Hybrid. Feed ranking algorithm
  concepts. Feed caching. Real-time updates. Handling
  celebrities (millions of followers).
duration_minutes: 150
is_free: false
video_url: null
sort_order: 26
section_title: "Phần 7: System Design Case Studies"
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: "System Architecture: From Zero to Hero"
  slug: system-architecture-from-zero-to-hero
---

## Giới thiệu

News Feed là core feature của mọi social platform. Mỗi user có feed riêng, aggregated từ hàng ngàn friends/followings, ranked bởi relevance. Đây là bài toán khó vì scale rất lớn.

---

## 1. Requirements & Estimation

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

## 2. Core Components

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

## 3. Fan-out Strategies

### 3.1 Fan-out on Write (Push Model)

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

### 3.2 Fan-out on Read (Pull Model)

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

### 3.3 Hybrid (Facebook/Twitter approach)

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

## 4. Feed Ranking

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

## 5. Feed Cache Design

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

## 6. Real-time Updates

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

## Tổng kết

| Decision | Choice | Reason |
|----------|--------|--------|
| Fan-out | Hybrid | Balance write/read for all user types |
| Storage | Cassandra (posts) + Redis (feed) | Write-heavy + fast reads |
| Ranking | ML-based scoring | Relevance > recency |
| Real-time | SSE + notification | Not full WebSocket |
| Cache | Per-user feed cache | Pre-computed for fast reads |

---

## Bài tập

1. **Celebrity Problem:** User có 50M followers post. Fan-out on write → 50M cache updates. Thiết kế solution với max 5 giây latency.

2. **Feed Diversity:** Feed không nên toàn posts từ 1 người. Thiết kế deduplication + diversity algorithm.

3. **Ads Integration:** Chèn sponsored posts vào feed (1 ad per 5 posts). Thiết kế ad insertion strategy mà không ảnh hưởng feed latency.
