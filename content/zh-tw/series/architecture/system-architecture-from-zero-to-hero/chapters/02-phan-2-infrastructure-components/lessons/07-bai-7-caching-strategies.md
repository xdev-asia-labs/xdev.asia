---
id: 019d8a21-c107-7001-d001-e1f2a3b4c507
title: 第 7 課：快取策略 - 使用快取優化效能
slug: bai-7-caching-strategies-toi-uu-hieu-nang-voi-cache
description: >-
  快取層：客戶端、CDN、Web 伺服器、應用程式、資料庫。快取模式：快取旁路、直寫式、後寫式、提前刷新。快取驅逐策略（LRU、LFU、TTL）。 Redis
  與 Memcached。 Cache Stampede、Thundering Herd 以及如何處理它們。分散式快取。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 7
section_title: 第 2 部分：基礎設施組件
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 系統架構：從零到英雄
  slug: system-architecture-from-zero-to-hero
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9479" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9479)"/>

  <!-- Decorations -->
  <g>
    <circle cx="801" cy="53" r="24" fill="#34d399" opacity="0.08"/>
    <circle cx="1002" cy="234" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="703" cy="155" r="10" fill="#34d399" opacity="0.14"/>
    <circle cx="904" cy="76" r="33" fill="#34d399" opacity="0.07"/>
    <circle cx="605" cy="257" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="123" x2="1100" y2="203" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="153" x2="1050" y2="223" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="955.9089653438086,104 955.9089653438086,142 923,161 890.0910346561914,142 890.0910346561914,104.00000000000001 923,85" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🏗️ 建築 — 第 7 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 7 課：快取策略 - 優化效能</tspan>
      <tspan x="60" dy="42">具有快取功能</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">系統架構：從零到英雄</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：基礎設施組件</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

> “電腦科學中只有兩件難事：快取失效和命名。” — 菲爾·卡爾頓

快取是減少延遲和提高吞吐量的最重要技術。快取命中可以將回應時間從 100 毫秒減少到 1 毫秒 — **100 倍**改進。

---

## 1. 快取層

```
┌──────────────────────────────────────────────┐
│                  User Request                 │
└───────────────────┬──────────────────────────┘
                    ▼
        ┌───────────────────┐
        │  Browser Cache    │  ← HTML, CSS, JS, Images
        └─────────┬─────────┘
                  ▼
        ┌───────────────────┐
        │    CDN Cache       │  ← Static files, API responses
        └─────────┬─────────┘
                  ▼
        ┌───────────────────┐
        │  Load Balancer     │  ← SSL session cache
        └─────────┬─────────┘
                  ▼
        ┌───────────────────┐
        │  Application Cache │  ← Redis/Memcached
        └─────────┬─────────┘
                  ▼
        ┌───────────────────┐
        │  Database Cache    │  ← Query cache, Buffer pool
        └───────────────────┘
```

---

## 2. 快取模式

### 2.1 Cache-Aside（延遲載入）

```
Read:
  App ──► Cache: "Có user:123 không?"
  Cache:  "Không" (MISS)
  App ──► Database: SELECT * FROM users WHERE id=123
  DB ──►  App: {name: "John", ...}
  App ──► Cache: SET user:123 = {name: "John", ...}  ← Cache lại
  App ──► Client: {name: "John", ...}

Lần sau:
  App ──► Cache: "Có user:123 không?"
  Cache:  "Có!" (HIT) → Return ngay, không cần DB
```

```python
def get_user(user_id):
    # 1. Check cache
    cached = redis.get(f"user:{user_id}")
    if cached:
        return json.loads(cached)

    # 2. Cache miss -> query DB
    user = db.query("SELECT * FROM users WHERE id = %s", user_id)

    # 3. Cache the result
    if user:
        redis.setex(f"user:{user_id}", 3600, json.dumps(user))  # TTL 1h

    return user
```

**優點：** 只快取請求的數據，簡單
**缺點：** 快取未命中= 3次（檢查快取+查詢DB+設定快取）

### 2.2 直寫

```
Write:
  App ──► Cache: SET user:123 = {name: "Jane"} ← Update cache
  Cache ──► Database: UPDATE users SET name='Jane' WHERE id=123
  Cache ──► App: Success

Read:
  App ──► Cache: GET user:123 → Always HIT (data luôn trong cache)
```

**優點：** Cache總是與DB同步，讀取始終很快
**缺點：**寫入較慢（必須經過快取+DB），快取資料可能永遠讀不到

### 2.3 後寫式（回寫式）

```
Write:
  App ──► Cache: SET user:123 = {name: "Jane"} ← Update cache ngay
  Cache: "OK, sẽ ghi vào DB sau"
  App ──► Client: Success ngay lập tức!

  Background (async):
  Cache ──► Database: UPDATE users SET name='Jane'
```

**優點：** 寫入速度極快，大量寫入
**缺點：** 如果快取在寫入資料庫之前崩潰，則存在資料遺失的風險

### 2.4 提前刷新

```
Cache có TTL = 60s

T=0:   Cache data (TTL=60s)
T=50s: TTL sắp hết → Background refresh từ DB
T=55s: Cache refreshed (TTL reset = 60s)
T=60s: Cache vẫn có data → Không có cache miss

→ Giảm cache miss gần như về 0
```

**優點：**幾乎沒有快取未命中
**缺點：** 錯誤的預測→浪費且複雜的刷新

---

## 3. 快取驅逐策略

當快取已滿時，您需要決定刪除哪個條目：

|政策 |描述 |最適合 |
|--------|--------|--------|
| **LRU**（最近最少使用）|刪除最近最少訪問的條目 |通用|
| **LFU**（最不常用）|刪除最少存取的條目 |熱門資料模式 |
| **先進先出**（先進先出）|刪除最舊的條目 |簡單的用例 |
| **TTL**（生存時間）|固定時間後刪除 |資料自然過期 |
| **隨機** |隨機刪除|當分佈均勻時 |

### LRU 視覺化

```
Cache size = 3

Access A: [A]
Access B: [B, A]
Access C: [C, B, A]       ← Cache đầy
Access D: [D, C, B]       ← A bị evict (ít truy cập gần đây nhất)
Access B: [B, D, C]       ← B move lên đầu
Access E: [E, B, D]       ← C bị evict
```

---

## 4.Redis 與 Memcached

|特點| Redis |記憶體快取 |
|--------|--------|------------|
| **資料結構** |字串、列表、集合、排序集合、雜湊、流 |僅字串|
| **堅持** | RDB + AOF |沒有 |
| **複製** |主從|沒有 |
| **集群** | Redis集群 |客戶端分片 |
| **發佈/訂閱** | ✓ |無 |
| **Lua 腳本** | ✓ |無 |
| **記憶體效率** |好 |更適合簡單的字串 |
| **多執行緒** |單執行緒（6.0 起的 io 執行緒）|多執行緒 |

> **建議：** 對於大多數用例，使用 **Redis**。僅當需要簡單的字串快取、多執行緒效能時才使用Memcached。

---

## 5. 快取問題及解決方案

### 5.1 快取踩踏（雷霆群）

```
Vấn đề:
  Popular key expires
  1000 requests đồng thời → tất cả MISS
  → 1000 queries tới DB cùng lúc → DB crash!

Giải pháp 1 - Locking:
  Request 1: Cache MISS → Lock key → Query DB → Set cache → Release lock
  Request 2-1000: Cache MISS → Thấy lock → Đợi → Get from cache

Giải pháp 2 - Stale-While-Revalidate:
  Trả cached data (dù expired) → Background refresh
```

### 5.2 快取穿透

```
Vấn đề:
  Query cho data KHÔNG TỒN TẠI
  Cache always MISS → DB query returns empty → Không cache
  → Attacker spam requests cho non-existent IDs

Giải pháp 1 - Cache empty result:
  redis.setex("user:99999", 300, "NULL")  # Cache "không có" 5 phút

Giải pháp 2 - Bloom Filter:
  Trước khi query, check Bloom Filter
  Nếu key chắc chắn không tồn tại → Return empty ngay
```

### 5.3 快取雪崩

```
Vấn đề:
  Nhiều keys expire cùng lúc → Massive cache misses → DB overload

Giải pháp:
  Thêm random jitter vào TTL
  TTL = base_ttl + random(0, base_ttl * 0.1)

  Ví dụ: base_ttl = 3600s
  Key 1: TTL = 3600 + random(0, 360) = 3847s
  Key 2: TTL = 3600 + random(0, 360) = 3612s
  Key 3: TTL = 3600 + random(0, 360) = 3955s
```

---

## 6. 分散式快取

### 6.1 一致性哈希

```
Khi thêm/xóa cache node, consistent hashing đảm bảo
chỉ 1/N keys cần migrate (thay vì tất cả)

Hash Ring:
          Node A
         ╱      ╲
   Node D        Node B
         ╲      ╱
          Node C

Key "user:123" → hash → vị trí trên ring → Node B
Thêm Node E → chỉ một phần keys từ Node B chuyển sang E
```

---

## 總結

|圖案|寫入速度|閱讀速度|一致性|使用案例|
|--------|-------------|------------|-------------|------------|
|快取旁置|正常 |快（第一名之後）|最終|通用|
|直寫|慢|永遠快|強|重讀+一致性|
|後寫 |快|永遠快|最終|寫重 |
|刷新提前 |正常 |永遠快|近實時 |可預測的訪問 |

---

## 練習

1. **快取策略：** 為新聞應用程式設計快取：(a)熱門文章（百萬瀏覽量），(b)舊文章（瀏覽量很少），(c)即時評論。為每種類型選擇快取模式和 TTL。

2. **快取問題：** 閃購系統有 10 萬用戶同時存取 1 個產品。快取鍵 `product:123` 銷售開始時即到期。設計一個解決方案以避免踩踏緩存。

3. **Redis設計：** 設計排行榜的Redis資料結構（根據分數排名前100名用戶）。需要支援：新增/更新分數、獲得前 N 名、獲得 1 位用戶的排名。
