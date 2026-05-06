---
id: 019d8a21-c107-7001-d001-e1f2a3b4c507
title: 'レッスン 7: キャッシュ戦略 - キャッシュを使用してパフォーマンスを最適化する'
slug: bai-7-caching-strategies-toi-uu-hieu-nang-voi-cache
description: >-
  キャッシュ層: クライアント、CDN、Web サーバー、アプリケーション、データベース。キャッシュ パターン: キャッシュ
  アサイド、ライトスルー、ライトビハインド、リフレッシュ アヘッド。キャッシュエビクションポリシー (LRU、LFU、TTL)。 Redis 対
  Memcached。キャッシュスタンピード、サンダーリングハードとその対処方法。分散キャッシュ。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 7
section_title: 'パート 2: インフラストラクチャ コンポーネント'
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 'システムアーキテクチャ: ゼロからヒーローへ'
  slug: system-architecture-from-zero-to-hero
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🏗️ アーキテクチャ — レッスン 7</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 7: キャッシュ戦略 - パフォーマンスの最適化</tspan>
      <tspan x="60" dy="42">キャッシュを備えた機能</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">システムアーキテクチャ: ゼロからヒーローへ</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: インフラストラクチャ コンポーネント</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

> 「コンピュータ サイエンスで難しいことは 2 つだけです。キャッシュの無効化と名前付けです。」 — フィル・カールトン

キャッシュは、待ち時間を短縮し、スループットを向上させるための最も重要な技術です。キャッシュ ヒットにより、応答時間が 100 ミリ秒から 1 ミリ秒に短縮され、**100 倍** の改善が得られます。

---

## 1. レイヤーのキャッシュ

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

## 2. キャッシュ パターン

### 2.1 キャッシュアサイド (遅延読み込み)

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

**利点:** 要求されたデータのみをキャッシュする、シンプル
**欠点:** キャッシュミス = 3 トリップ (キャッシュのチェック + DB のクエリ + キャッシュの設定)

### 2.2 ライトスルー

```
Write:
  App ──► Cache: SET user:123 = {name: "Jane"} ← Update cache
  Cache ──► Database: UPDATE users SET name='Jane' WHERE id=123
  Cache ──► App: Success

Read:
  App ──► Cache: GET user:123 → Always HIT (data luôn trong cache)
```

**利点:** キャッシュは常に DB と同期しており、読み取りは常に高速です
**欠点:** 書き込みが遅い (キャッシュ + DB を経由する必要がある)、キャッシュ データが読み取られない可能性がある

### 2.3 ライトビハインド (ライトバック)

```
Write:
  App ──► Cache: SET user:123 = {name: "Jane"} ← Update cache ngay
  Cache: "OK, sẽ ghi vào DB sau"
  App ──► Client: Success ngay lập tức!

  Background (async):
  Cache ──► Database: UPDATE users SET name='Jane'
```

**利点:** 非常に高速な書き込み、バッチ書き込み
**欠点:** DB に書き込む前にキャッシュがクラッシュした場合、データが失われるリスクがあります。

### 2.4 先行リフレッシュ

```
Cache có TTL = 60s

T=0:   Cache data (TTL=60s)
T=50s: TTL sắp hết → Background refresh từ DB
T=55s: Cache refreshed (TTL reset = 60s)
T=60s: Cache vẫn có data → Không có cache miss

→ Giảm cache miss gần như về 0
```

**利点:** キャッシュミスがほとんどない
**欠点:** 間違った予測 → 無駄で複雑な更新

---

## 3. キャッシュエビクションポリシー

キャッシュがいっぱいになった場合は、どのエントリを削除するかを決定する必要があります。

|ポリシー |説明 |こんな方に最適 |
|----------|----------|----------|
| **LRU** (最近使用されていないもの) |最も最近アクセスされていないエントリを削除する |汎用 |
| **LFU** (最も頻繁に使用されない) |最もアクセスの少ないエントリを削除 |ホット データ パターン |
| **FIFO** (先入れ先出し) |最も古いエントリを削除 |簡単な使用例 |
| **TTL** (生存時間) |一定時間経過後に削除 |データには自然有効期限があります |
| **ランダム** |ランダム削除 |分布が均等な場合 |

### LRU の視覚化

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

## 4. Redis と Memcached の比較

|特長 |レディス |メムキャッシュ |
|----------|----------|----------|
| **データ構造** |文字列、リスト、セット、ソートされたセット、ハッシュ、ストリーム |文字列のみ |
| **永続性** | RDB+AOF |いいえ |
| **レプリケーション** |マスタースレーブ |いいえ |
| **クラスター** | Redis クラスター |クライアント側のシャーディング |
| **パブ/サブ** | ✓ |いいえ |
| **Lua スクリプト** | ✓ |いいえ |
| **メモリ効率** |良い |単純な文字列の方が良い |
| **マルチスレッド** |シングルスレッド (6.0 以降の io スレッド) |マルチスレッド |

> **推奨事項:** ほとんどのユースケースでは **Redis** を使用してください。 Memcached は、単純な文字列キャッシュ、マルチスレッドのパフォーマンスが必要な場合にのみ使用してください。

---

## 5. キャッシュの問題と解決策

### 5.1 キャッシュスタンピード (雷鳴の群れ)

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

### 5.2 キャッシュの侵入

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

### 5.3 キャッシュ雪崩

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

## 6. 分散キャッシュ

### 6.1 一貫性のあるハッシュ

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

## 概要

|パターン |書き込み速度 |読み取り速度 |一貫性 |使用例 |
|----------|---------------|---------------|-------------|----------|
|キャッシュアサイド |通常 |高速 (1 回目以降) |最終的な |汎用 |
|ライトスルー |遅い |常に速い |強い |大量の読み取り + 一貫性 |
|後書き |速い |常に速い |最終的な |書き込みが多い |
|先を更新 |通常 |常に速い |ほぼリアルタイム |予測可能なアクセス |

---

## 演習

1. **キャッシュ戦略:** ニュース アプリケーションのキャッシュを設計します: (a) 人気の記事 (100 万回のビュー)、(b) 古い記事 (数回のビュー)、(c) リアルタイムのコメント。タイプごとにキャッシュパターンとTTLを選択します。

2. **キャッシュの問題:** フラッシュ セール システムでは、10 万人のユーザーが 1 つの製品に同時にアクセスします。キャッシュキー `product:123` 販売開始と同時に有効期限が切れます。スタンピード キャッシュを回避するソリューションを設計します。

3. **Redis 設計:** リーダーボード (スコアに基づく上位 1​​00 ユーザー) の Redis データ構造を設計します。サポートが必要です: スコアの追加/更新、上位 N の取得、1 ユーザーのランクの取得。
