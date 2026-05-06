---
id: 019d8a21-c110-7001-d001-e1f2a3b4c526
title: 'Lesson 26: Case Study - Designing News Feed System'
slug: bai-26-case-study-thiet-ke-news-feed-system
description: >-
  News Feed design (Facebook/Twitter/Instagram). Fan-out strategies: Push vs
  Pull vs Hybrid. Feed ranking algorithm concepts. Feed caching. Real-time
  updates. Handling celebrities (millions of followers).
duration_minutes: 150
is_free: false
video_url: null
sort_order: 26
section_title: 'Part 7: System Design Case Studies'
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 'System Architecture: From Zero to Hero'
  slug: system-architecture-from-zero-to-hero
locale: en
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🏗️ Architecture — Lesson 26</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 26: Case Study - News Feed design</tspan>
      <tspan x="60" dy="42">System</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">System Architecture: From Zero to Hero</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 7: System Design Case Studies</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

News Feed is the core feature of every social platform. Each user has their own feed, aggregated from thousands of friends/followings, ranked by relevance. This is a difficult problem because the scale is very large.

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

## Summary

| Decision | Choice | Reason |
|----------|--------|--------|
| Fan-out | Hybrid | Balance write/read for all user types |
| Storage | Cassandra (posts) + Redis (feeds) | Write-heavy + fast reads |
| Ranking | ML-based scoring | Relevance > recency |
| Real-time | SSE + notification | Not full WebSocket |
| Cache | Per-user feed cache | Pre-computed for fast reading |

---

## Exercises

1. **Celebrity Problem:** User has 50M followers post. Fan-out on write → 50M cache updates. Design solution with max 5 seconds latency.

2. **Feed Diversity:** Feed should not be all posts from one person. Design deduplication + diversity algorithm.

3. **Ads Integration:** Insert sponsored posts into feed (1 ad per 5 posts). Design an ad insertion strategy without affecting feed latency.
