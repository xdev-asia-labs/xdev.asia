---
id: 019d8a21-c102-7001-d001-e1f2a3b4c502
title: 'レッスン 2: パフォーマンスとスケーラビリティ - 垂直方向と水平方向のスケーリング'
slug: bai-2-performance-vs-scalability-vertical-horizontal-scaling
description: >-
  パフォーマンスとスケーラビリティを区別してください。垂直スケーリング (スケールアップ) と水平スケーリング (スケールアウト)。ステートレス
  アーキテクチャとステートフル アーキテクチャ。どのスケーリング戦略をいつ選択すればよいでしょうか?裏側の計算と基本的な容量計画。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: 'パート 1: システム設計の基礎'
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 'システムアーキテクチャ: ゼロからヒーローへ'
  slug: system-architecture-from-zero-to-hero
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5045" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5045)"/>

  <!-- Decorations -->
  <g>
    <circle cx="774" cy="112" r="12" fill="#f472b6" opacity="0.07"/>
    <circle cx="948" cy="226" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="622" cy="80" r="16" fill="#f472b6" opacity="0.11"/>
    <circle cx="796" cy="194" r="18" fill="#f472b6" opacity="0.13"/>
    <circle cx="970" cy="48" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="152" x2="1100" y2="232" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="182" x2="1050" y2="252" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="925.3826859021799,88.5 925.3826859021799,115.5 902,129 878.6173140978201,115.5 878.6173140978201,88.5 902,75" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🏗️ アーキテクチャ — レッスン 2</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 2: パフォーマンスとスケーラビリティ -</tspan>
      <tspan x="60" dy="42">垂直方向と水平方向のスケーリング</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">システムアーキテクチャ: ゼロからヒーローへ</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: システム設計の基礎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

システムの速度が低下し始めると、次の 2 つの疑問に直面します。
- **パフォーマンス:** ユーザーのためにシステムを高速化するにはどうすればよいですか?
- **スケーラビリティ:** システムはどのようにしてより多くのユーザーにサービスを提供できるでしょうか?

これら 2 つの概念は関連していますが、異なります。違いを理解することが効果的なシステム設計への第一歩です。

---

## 1. パフォーマンスとスケーラビリティ

### 1.1 定義

```
Performance Problem:   Hệ thống chậm cho 1 user
Scalability Problem:   Hệ thống nhanh cho 1 user, nhưng chậm khi nhiều users
```

|特長 |パフォーマンス |スケーラビリティ |
|----------|---------------|---------------|
| **測定者** |応答時間、スループット |耐荷重能力の向上 |
| **例** | API は 50 ミリ秒で戻ります | 100 → 100K RPS |
| **解決策** |コード、アルゴリズムを最適化する |リソースの追加、負荷の分散 |
| **いつ修正されますか** |常に最適化 |負荷が容量を超えた場合 |

### 1.2 実践例

```
Scenario: API lấy danh sách sản phẩm

Performance Issue:
  - 1 user request → 5 giây (do query N+1, không có index)
  - Fix: Tối ưu query, thêm database index → 50ms

Scalability Issue:
  - 1 user → 50ms ✓
  - 1000 users cùng lúc → 3 giây (server quá tải)
  - Fix: Thêm servers, caching, load balancer
```

---

## 2. 垂直方向のスケーリング (スケールアップ)

### 2.1 概念

垂直スケーリングとは、**単一サーバー**の能力を向上させることです。つまり、CPU、RAM、SSD、ネットワーク帯域幅を追加します。

```
Trước:                          Sau:
┌──────────────┐               ┌──────────────────┐
│   Server     │               │     Server       │
│  4 CPU       │    Scale Up   │  32 CPU          │
│  8 GB RAM    │  ──────────►  │  128 GB RAM      │
│  256 GB SSD  │               │  2 TB NVMe SSD   │
└──────────────┘               └──────────────────┘
```

### 2.2 メリットとデメリット

|利点 |デメリット |
|----------|----------|
|シンプルでコードを変更する必要はありません |物理的な制限（ハードウェア的な制限）がある |
|ネットワーク遅延なし |単一障害点 |
|シンプルなデータの一貫性 |コストが急激に増加する |
|分散調整は不要 |アップグレード時のダウンタイム |

### 2.3 垂直スケーリングコスト (例: AWS EC2)

```
t3.micro    (2 vCPU, 1GB):    ~$8/tháng
t3.xlarge   (4 vCPU, 16GB):   ~$120/tháng      (15x giá, 16x RAM)
r5.4xlarge  (16 vCPU, 128GB): ~$730/tháng      (91x giá, 128x RAM)
r5.24xlarge (96 vCPU, 768GB): ~$4,400/tháng    (550x giá, 768x RAM)
```

> コストはパフォーマンスの向上よりも **はるかに速く**増加します。このため、垂直スケーリングには実際的な制限があります。

---

## 3. 水平スケーリング (スケールアウト)

### 3.1 概念

水平スケーリングは、負荷を共有するために **さらにサーバー** を追加します。

```
Trước:                     Sau:
                          ┌──────────────┐
                          │  Load        │
                          │  Balancer    │
                          └──────┬───────┘
                      ┌──────────┼──────────┐
┌──────────┐         ┌──┴──┐  ┌──┴──┐  ┌──┴──┐
│  Server  │  ────►  │ S1  │  │ S2  │  │ S3  │
│  (1 máy) │         │     │  │     │  │     │
└──────────┘         └─────┘  └─────┘  └─────┘
```

### 3.2 メリットとデメリット

|利点 |デメリット |
|----------|----------|
|ほぼ無制限のスケーリング |はるかに複雑です |
|単一障害点がない |ロードバランサーが必要 |
|コストは直線的に増加します。データの一貫性に関する課題 |
|スケーラブルなオンデマンド |ステートレスなデザインが必要 |

### 3.3 水平スケーリングのコスト

```
1  x t3.xlarge:  $120/tháng   → 1x capacity
4  x t3.xlarge:  $480/tháng   → ~4x capacity
10 x t3.xlarge:  $1,200/tháng → ~10x capacity
```

> コストは容量に応じて **直線的に**増加します。垂直方向のスケーリングよりもはるかに効率的です。

---

## 4. ステートレス アーキテクチャとステートフル アーキテクチャ

### 4.1 なぜ重要なのでしょうか?

水平スケーリングが機能するには、サーバーは **ステートレス**、つまりユーザーの状態をサーバーに保存しない必要があります。

### 4.2 ステートフル サーバー (スケーリングのアンチパターン)

```
┌──────────┐     Request 1     ┌──────────┐
│  User A  │ ──────────────►   │ Server 1 │  ← Session: {userId: A, cart: [...]}
└──────────┘                   └──────────┘

                Request 2
User A ──────────────────────► Server 2   ← Không có session của User A!
                                            → ERROR: "Please login again"
```

**問題:** 次のリクエストが別のサーバーに送信されると、セッションが失われます。

### 4.3 ステートレスサーバー (ベストプラクティス)

```
┌──────────┐                    ┌──────────┐
│  User A  │  Request + Token   │ Server 1 │
└──────────┘ ──────────────►    └──────────┘ ──► Shared Session Store
                                                  (Redis / Database)
             Request + Token    ┌──────────┐        │
             ──────────────►    │ Server 2 │ ──────►│
                                └──────────┘
```

**解決策:** セッションを **共有ストア** (Redis、データベース) に保存し、サーバーはロジックのみを処理します。

### 4.4 状態を処理する方法

|方法 |説明 |利点 |デメリット |
|---------------|----------|----------|----------|
| **スティッキーセッション** | LB はユーザーを同じサーバーに送信します。シンプル |サーバー障害 = セッションの損失 |
| **セッション ストア (Redis)** | Redis にセッションを保存する |高速、スケーラブル |コンポーネントを追加 |
| **JWT トークン** |トークン内の状態 |サーバーストアは不要 |トークンのサイズが大きく、取り消しが困難 |
| **データベース** |セッションを DB に保存 |永続的 | Redis よりも遅い |

---

## 5. キャパシティプランニング

### 5.1 手順

```
1. Xác định metrics hiện tại
   └─ QPS, storage, bandwidth

2. Dự đoán growth
   └─ User growth rate, feature expansion

3. Tính capacity cần thiết
   └─ Servers, storage, bandwidth

4. Thêm headroom (20-30%)
   └─ Buffer cho traffic spike
```

### 5.2 例: 電子商取引のキャパシティ プランニング

```
Dữ kiện:
  - 1M DAU (Daily Active Users)
  - Peak traffic: 3x average
  - Average session: 10 pages, 2 API calls/page
  - Target response time: < 200ms

Tính toán:
  Average QPS = 1M * 20 requests / 86,400s ≈ 230 QPS
  Peak QPS = 230 * 3 = 690 QPS

  Nếu 1 server xử lý 200 QPS:
  Servers cần = 690 / 200 = 3.45 → 4 servers
  + Headroom 30%: 4 * 1.3 = 5.2 → 6 servers

  Tối thiểu: 6 application servers + 1 load balancer
```

---

## 6. データベースのスケーリング

### 6.1 読み取りスケーリング

```
                    ┌────────────┐
       Writes ────► │   Master   │
                    │  Database  │
                    └──────┬─────┘
                    Replication
               ┌───────────┼───────────┐
          ┌────┴────┐ ┌────┴────┐ ┌────┴────┐
Reads ──► │ Replica │ │ Replica │ │ Replica │
          │   1     │ │   2     │ │   3     │
          └─────────┘ └─────────┘ └─────────┘
```

### 6.2 書き込みスケーリング

```
       ┌──────────────────────────────┐
       │        Shard Router          │
       └──────┬───────┬───────┬───────┘
         ┌────┴──┐ ┌──┴───┐ ┌┴──────┐
         │Shard 1│ │Shard 2│ │Shard 3│
         │ A-H   │ │ I-P   │ │ Q-Z   │
         └───────┘ └───────┘ └───────┘
```

---

## 7. 実際のスケーリングの例

### 7.1 Netflix

```
Phase 1 (2007): Monolith + Oracle Database
Phase 2 (2008-2012): Migration to AWS + Microservices
Phase 3 (2012+): 
  - 700+ microservices
  - Horizontal scaling trên AWS
  - Custom load balancing (Zuul)
  - Cache layer (EVCache)
  - 200M+ subscribers globally
```

### 7.2 インスタグラム

```
2010: 2 servers (1 app + 1 database)
2011: Scale to 14M users
  - 3 Nginx load balancers
  - 25 Django app servers
  - 12 PostgreSQL servers (sharded)
  - 6 Redis servers
  - 4 Memcached servers
2012: Facebook acquisition, 100M+ users
  - Continued horizontal scaling on Facebook infra
```

---

## 8. まとめ

|コンセプト |重要なポイント |
|----------|---------------|
|パフォーマンス | 1 ユーザー向けに最適化 (コード、アルゴリズム、キャッシュ) |
|スケーラビリティ |多数のユーザーの処理 (より多くのリソース) |
|垂直スケーリング | 1 台のマシンの構成のアップグレード - シンプルだが制限付き |
|水平スケーリング |さらにマシンを追加 - 複雑ですがほぼ無制限 |
|無国籍 |水平スケーリングの前提条件 |
|キャパシティプランニング |スケーリングの前に常に計算する |

> **経験則:** シンプル (垂直) から始めて、水平方向に計画します。必要になる前にスケールするのではなく、必要なときにスケールできるように設計してください。

---

## 演習

1. **キャパシティ プランニング:** あなたは、50 万 DAU 向けの食品配達アプリを構築しています。各ユーザーは週に平均 5 件の注文を行い、各注文で 10 件の API 呼び出しが生成されます。ピーク QPS と必要なサーバーの数を計算します (各サーバーは 300 QPS を処理します)。

2. **ステートレス設計:** 現在のシステムは、ショッピング カートをサーバー上のセッションに保存します。ステートレスになるように再設計され、水平スケーリングをサポートします。

3. **スケーリングの決定:** ユーザー数 50,000 人の SaaS プラットフォーム、平均応答時間 800 ミリ秒 (目標 < 200 ミリ秒)。現在のサーバー: 4 vCPU、16GB RAM、CPU 使用率 85%。垂直スケールと水平スケールのどちらを使用する必要がありますか?説明する。
