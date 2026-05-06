---
id: 019d8a21-c101-7001-d001-e1f2a3b4c501
title: 'レッスン 1: システム設計とは何ですか? - 概要とロードマップ'
slug: bai-1-system-design-la-gi-tong-quan-va-roadmap
description: >-
  システム設計について紹介し、システム設計が必要な理由、システム設計の問題 (要件 → 高レベル設計 → 詳細 → ボトルネック)
  へのアプローチ方法を紹介します。モノリス システムと分散システムを比較します。学習ロードマップと必要なリソース。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 1
section_title: 'パート 1: システム設計の基礎'
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 'システムアーキテクチャ: ゼロからヒーローへ'
  slug: system-architecture-from-zero-to-hero
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1060" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1060)"/>

  <!-- Decorations -->
  <g>
    <circle cx="740" cy="210" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="880" cy="270" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1020" cy="70" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="660" cy="130" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="800" cy="190" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="170" x2="1100" y2="250" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="200" x2="1050" y2="270" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="991.650635094611,157.5 991.650635094611,182.5 970,195 948.349364905389,182.5 948.349364905389,157.5 970,145" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🏗️ アーキテクチャ — レッスン 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 1: システム設計とは何ですか? - 概要と</tspan>
      <tspan x="60" dy="42">ロードマップ</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">システムアーキテクチャ: ゼロからヒーローへ</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: システム設計の基礎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

簡単な CRUD アプリケーションは数時間で作成できます。しかし、そのアプリケーションが **数百万のユーザー**にサービスを提供し、**毎秒数千のリクエスト**を処理し、**99.99% の稼働率**を保証する必要がある場合、**システム設計**が必要になります。

システムデザインは面接のための知識だけではありません。これは次のことに役立つ中心的なスキルです。

- スケーラブルなシステムを構築する
- アーキテクチャ上の適切な決定を下す
- コストのかかる間違いを避ける (システム全体をリファクタリングする)
- 技術的な決定についてチームと効果的にコミュニケーションをとる

---

## 1. システム設計とは何ですか?

### 1.1 定義

**システム設計** は、特定の要件を満たすソフトウェア システムのアーキテクチャ、コンポーネント、モジュール、インターフェイス、およびデータを決定するプロセスです。

```
System Design = Architecture + Components + Data Flow + Trade-offs
```

### 1.2 システム設計はなぜ重要ですか?

|フェーズ |システム設計なし |はい システム設計 |
|----------|---------------------|------|
| **プロトタイプ** |速くて簡単 |明確な計画を立てる |
| **100 ユーザー** |うまくいきます |うまくいきます |
| **10,000 ユーザー** |スロースタート |まだ安定しています |
| **100 万ユーザー** |システムがクラッシュしたため、書き直す必要がありました |計画に従って規模を拡大する |
| **コスト** |リライト = 10x 初期コスト |段階的な改善 |

### 1.3 システム設計とコーディング

```
Coding:          "Làm sao để implement feature X?"
System Design:   "Làm sao để feature X hoạt động với 10M users,
                  99.99% uptime, <100ms latency?"
```

---

## 2. システム設計問題へのアプローチ方法

### 2.1 フレームワークの 4 つのステップ

システム設計の問題に直面した場合は、次のフレームワークを使用してください。

```
┌─────────────────────────────────────────────────────┐
│  Step 1: Requirements & Constraints                  │
│  ┌─────────────────────────────────────────────┐    │
│  │ Functional Requirements (FR)                 │    │
│  │ Non-functional Requirements (NFR)            │    │
│  │ Constraints & Assumptions                    │    │
│  └─────────────────────────────────────────────┘    │
│                      ▼                               │
│  Step 2: High-Level Design                           │
│  ┌─────────────────────────────────────────────┐    │
│  │ Main components & connections                │    │
│  │ Data flow diagrams                           │    │
│  │ API design (endpoints)                       │    │
│  └─────────────────────────────────────────────┘    │
│                      ▼                               │
│  Step 3: Deep Dive into Core Components              │
│  ┌─────────────────────────────────────────────┐    │
│  │ Database schema                              │    │
│  │ Algorithm choices                            │    │
│  │ Data structures                              │    │
│  └─────────────────────────────────────────────┘    │
│                      ▼                               │
│  Step 4: Identify & Resolve Bottlenecks              │
│  ┌─────────────────────────────────────────────┐    │
│  │ Single points of failure                     │    │
│  │ Scaling strategies                           │    │
│  │ Monitoring & alerting                        │    │
│  └─────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────┘
```

### 2.2 例: ニュース閲覧システムの設計

**ステップ 1 - 要件:**
- FR: ユーザーは記事リストを表示し、詳細を読み、検索し、コメントします。
- NFR: 1,000万日、 <200ms latency, 99.9% availability
- Constraints: Read-heavy (100:1 read/write ratio)

**Step 2 - High-Level Design:**

```
Users → CDN → Load Balancer → Web Servers → Cache → Database
                    │
                    └→ Search Service (Elasticsearch)
```

**Step 3 - Deep Dive:**
- Database: PostgreSQL cho articles, Redis cho cache
- 検索: 全文インデックス付き Elasticsearch
- CDN: Cache static assets + rendered HTML

**Step 4 - Bottlenecks:**
- Database read bottleneck → Add read replicas
- 人気の記事 → TTL による積極的なキャッシュ
- Search latency → Elasticsearch cluster scaling

---

## 3. Monolith vs Distributed Systems

### 3.1 Monolithic Architecture

```
┌─────────────────────────────────────┐
│         Monolithic Application       │
│  ┌─────┬─────┬─────┬─────┬──────┐  │
│  │ UI  │User │Order│Pay  │Search│  │
│  │Layer│ Svc │ Svc │ Svc │ Svc  │  │
│  └─────┴─────┴─────┴─────┴──────┘  │
│  ┌─────────────────────────────┐    │
│  │      Shared Database         │    │
│  └─────────────────────────────┘    │
└─────────────────────────────────────┘
```

**アドバンテージ：**
- 初期開発が簡単
- 導入が簡単 (アーティファクト 1 つ)
- デバッグが簡単 (単一プロセス)
- コンポーネント間のネットワーク遅延なし

**短所:**
- 個々のパーツをスケールするのが難しい
- 小さなエラーがシステム全体をクラッシュさせる可能性があります
- コードベースが大きいとデプロイが遅くなる
- Technology lock-in (1 language/framework)

### 3.2 Distributed Systems

```
┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐
│ User   │  │ Order  │  │Payment │  │ Search │
│Service │  │Service │  │Service │  │Service │
│  DB    │  │  DB    │  │  DB    │  │  DB    │
└───┬────┘  └───┬────┘  └───┬────┘  └───┬────┘
    │           │           │           │
    └───────────┴─────┬─────┴───────────┘
                      │
              Message Queue / API Gateway
```

**アドバンテージ：**
- 各サービスを個別にスケーリングする
- 障害の分離 (1 つのサービス障害 ≠ システム全体の障害)
- チームの自律性 (各チームが 1 つのサービスを所有)
- Technology diversity

**短所:**
- はるかに複雑
- サービス間のネットワーク遅延
- Data consistency challenges
- Operational overhead (monitoring, debugging)

### 3.3 いつ何を選択するか?

|基準 |モノリス |分散 |
|----------|----------|-------------|
| **Team size** | < 10 developers | > 10 人の開発者 |
| **交通** | < 10K RPS | > 10,000 RPS |
| **フェーズ** | MVP、早期起動 |成長、規模 |
| **複雑さ** |中程度 |高 |
| **展開頻度** |毎週/毎月 |毎日/時間ごと |

> **アドバイス:** ほとんどのシステムは Monolith から始めて、必要に応じて分散システムに分岐する必要があります。最初からオーバースペックにしないでください。

---

## 4. 把握すべき中心的な概念

### 4.1 システム設計マップ

```
                    System Design
                         │
    ┌────────────────────┼────────────────────┐
    │                    │                    │
Fundamentals        Components           Patterns
    │                    │                    │
├─ Scalability      ├─ Load Balancer    ├─ Microservices
├─ Availability     ├─ CDN              ├─ Event-Driven
├─ Consistency      ├─ Cache            ├─ CQRS
├─ Latency          ├─ Database         ├─ Saga
├─ Throughput       ├─ Message Queue    ├─ Circuit Breaker
├─ CAP Theorem      ├─ API Gateway      ├─ DDD
└─ Networking       ├─ Reverse Proxy    └─ Serverless
                    └─ Search Engine
```

### 4.2 学習ロードマップ

```
Tháng 1-2: Fundamentals
  ├─ Scalability, Availability, Consistency
  ├─ CAP Theorem
  └─ Networking basics

Tháng 3-4: Infrastructure Components
  ├─ Load Balancer, CDN, Cache
  ├─ Database (SQL, NoSQL, Sharding)
  └─ Message Queues

Tháng 5-6: Architectural Patterns
  ├─ Microservices, Event-Driven
  ├─ CQRS, Saga, DDD
  └─ Serverless

Tháng 7-8: Case Studies & Practice
  ├─ Design URL Shortener
  ├─ Design Chat System
  ├─ Design News Feed
  └─ Design Video Streaming
```

---

## 5. 封筒の裏の計算

システム設計における重要なスキルは、迅速な見積もりです。

### 5.1 2 の累乗

|パワー |正確な値 |およそ |バイト |
|----------|---------------|----------|----------|
| 10 | 1,024 | 1,000 | 1KB |
| 20 | 1,048,576 | 100万 | 1MB |
| 30 | 1,073,741,824 | 10億 | 1GB |
| 40 | 1,099,511,627,776 | 1兆 | 1TB |

### 5.2 すべてのプログラマーが知っておくべきレイテンシの数値

```
L1 cache reference:                    0.5 ns
L2 cache reference:                      7 ns
Main memory reference:                 100 ns
SSD random read:                   150,000 ns  =  150 μs
HDD seek:                      10,000,000 ns  =   10 ms
Send 1 MB over 1 Gbps network: 10,000,000 ns  =   10 ms
Read 1 MB from SSD:             1,000,000 ns  =    1 ms
Read 1 MB from HDD:            30,000,000 ns  =   30 ms
Roundtrip same datacenter:        500,000 ns  =  500 μs
Roundtrip CA → Netherlands:   150,000,000 ns  =  150 ms
```

### 5.3 例: Twitter のストレージの見積もり

```
Giả sử:
- 500M users, 200M DAU
- Mỗi user tweet 2 lần/ngày
- Mỗi tweet: 140 chars * 2 bytes = 280 bytes
- 10% tweets có media (ảnh 200KB trung bình)

Tweets/ngày: 200M * 2 = 400M tweets
Text storage/ngày: 400M * 280B = 112 GB/ngày
Media storage/ngày: 40M * 200KB = 8 TB/ngày

Storage/năm: (112GB + 8TB) * 365 ≈ 3 PB/năm
```

---

## 6. まとめ

|トピックス |重要なポイント |
|----------|---------------|
|システム設計 |大規模な要件を満たすシステムを設計する |
|フレームワーク |要件 → 高レベル → 詳細 → ボトルネック |
|モノリス |モノリスから始めて、必要に応じて分離 |
|分散 |より複雑ですが、スケーリングが可能です。
|見積もり |設計前に必ず見積もりを行う |

---

## 演習

1. **見積もりの実践:** 1 年間に YouTube に必要なストレージの見積もり (5 億 DAU、1 日あたりアップロードされるビデオ 500 万本、トランスコード後のビデオあたり平均 50MB)

2. **モノリス vs 分散:** あなたは、ベトナム市場 (500 万ユーザー) 向けのホテル予約アプリケーションを構築しています。モノリスと分散のどちらを選択しますか?その理由を説明してください。

3. **システム設計フレームワーク:** 4 ステップのフレームワークを適用して、**レストラン予約管理システム** (50,000 のレストラン、100 万のユーザー) の設計をスケッチします。
