---
id: 019d8a21-c109-7001-d001-e1f2a3b4c509
title: 'レッスン 9: SQL と NoSQL - 適切なデータベースを選択する'
slug: bai-9-sql-vs-nosql-chon-database-phu-hop
description: >-
  RDBMS と ACID のプロパティ。 NoSQL カテゴリ: Key-Value (Redis、DynamoDB)、ドキュメント
  (MongoDB、CouchDB)、ワイドカラム (Cassandra、HBase)、グラフ (Neo4j)。ベースとアシッド。 SQL を選択する場合と
  NoSQL を選択する場合。ポリグロットの永続性。 NewSQL (CockroachDB、TiDB)。
duration_minutes: 160
is_free: true
video_url: null
sort_order: 9
section_title: 'パート 3: データベース アーキテクチャとデータ管理'
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 'システムアーキテクチャ: ゼロからヒーローへ'
  slug: system-architecture-from-zero-to-hero
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8269" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8269)"/>

  <!-- Decorations -->
  <g>
    <circle cx="666" cy="248" r="34" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="732" cy="234" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="798" cy="220" r="30" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="864" cy="206" r="28" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="930" cy="192" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="168" x2="1100" y2="248" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="198" x2="1050" y2="268" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1055.2390923627308,196.5 1055.2390923627308,239.5 1018,261 980.7609076372692,239.5 980.7609076372692,196.5 1018,175" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🏗️ アーキテクチャ — レッスン 9</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 9: SQL と NoSQL - 適切なデータベースを選択する</tspan>
      <tspan x="60" dy="42">適切な</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">システムアーキテクチャ: ゼロからヒーローへ</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: データベース アーキテクチャとデータ管理</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

データベースはあらゆるシステムの中心です。間違ったデータベースを選択すると、システムの完全な再構築につながる可能性があり、費用と労力がかかります。この記事は、データベースの各タイプと、いつどのタイプを選択するかを理解するのに役立ちます。

---

## 1. SQL (リレーショナル データベース)

### 1.1 ACID の特性

|プロパティ |意味 |例 |
|----------|----------|----------|
| **原子性** |トランザクションはオールオアナッシング |送金: マイナス A + プラス B または何もなし |
| **一貫性** |データは常に有効な状態にあります。残高がマイナスになることはありません |
| **孤立** |トランザクションは相互に影響しません。 2 人が一緒にチケットを購入 → 競合なし |
| **耐久性** |コミットが完了しました = データは安全です |サーバーのクラッシュ ≠ データ損失 |

### 1.2 SQL を選択するのはどのような場合ですか?

```
✓ Data có cấu trúc rõ ràng (schema cố định)
✓ Relationships phức tạp (foreign keys, joins)
✓ Cần ACID transactions
✓ Data integrity quan trọng
✓ Query patterns đa dạng (ad-hoc queries)

Ví dụ: Banking, ERP, E-commerce orders, CRM
```

### 1.3 人気: PostgreSQL と MySQL

|特長 |ポストグレSQL | MySQL |
|----------|-----------|----------|
| **酸** |フル |フル (InnoDB) |
| **JSON のサポート** |優れた (JSONB) |良い |
| **全文検索** |内蔵 |内蔵 |
| **レプリケーション** |ストリーミング、論理 |ビンログ |
| **拡張機能** | TimescaleDB、PostGIS |限定 |
| **こんな用途に最適** |複雑なクエリ、データの整合性 | Web アプリ、読み取り負荷が高い |

---

## 2. NoSQL カテゴリ

### 2.1 キー/値ストア

```
SET user:123 → {"name": "John", "email": "john@example.com"}
GET user:123 → {"name": "John", "email": "john@example.com"}

Cực nhanh: O(1) read/write
Hạn chế: Không có query phức tạp, không có relationships
```

|データベース |こんな方に最適 |
|----------|----------|
| **Redis** |キャッシュ、セッション、リーダーボード、パブ/サブ |
| **DynamoDB** |サーバーレス、自動スケーリングの Key-Value |
| **Memcached** |単純なキャッシュ |

### 2.2 ドキュメントストア

```json
// MongoDB document
{
  "_id": "order_123",
  "customer": {
    "name": "John",
    "email": "john@example.com"
  },
  "items": [
    {"product": "Laptop", "price": 1000, "qty": 1},
    {"product": "Mouse",  "price": 25,   "qty": 2}
  ],
  "total": 1050,
  "status": "shipped"
}
```

|データベース |こんな方に最適 |
|----------|----------|
| **MongoDB** |柔軟なスキーマ、迅速な開発 |
| **CouchDB** |オフラインファースト、同期 |
| **エラスティックサーチ** |全文検索、分析 |

### 2.3 ワイドカラムストア

```
Row Key: user_123
  Column Family "profile":
    name: "John"
    email: "john@example.com"
  Column Family "activity":
    last_login: "2026-03-30"
    posts_count: 42

Mỗi row có thể có columns khác nhau
→ Linh hoạt cho IoT, time-series, analytics
```

|データベース |こんな方に最適 |
|----------|----------|
| **カサンドラ** |高い書き込みスループット、マルチデータセンター |
| **HBase** | Hadoop エコシステム、分析 |
| **スキュラDB** | Cassandra 互換、より高性能 |

### 2.4 グラフデータベース

```
(John) ─[FRIENDS_WITH]─► (Jane)
(John) ─[WORKS_AT]────► (Google)
(Jane) ─[LIVES_IN]────► (Hanoi)
(John) ─[LIKES]───────► (Post_123)

Query: "Tìm bạn của bạn John sống ở Hà Nội"
→ Cực nhanh với Graph DB, cực chậm với SQL (multiple JOINs)
```

|データベース |こんな方に最適 |
|----------|----------|
| **Neo4j** |ソーシャル ネットワーク、推奨事項、不正行為の検出 |
| **アマゾン ネプチューン** | AWS 管理グラフ |
| **アランゴDB** |マルチモデル (ドキュメント + グラフ) |

---

## 3. 酸と塩基の比較

|プロパティ | ACID (SQL) | BASE (NoSQL) |
|----------|-----------|---------------|
| **焦点** |一貫性 |可用性 |
| **トランザクション** |強い |ソフト状態 |
| **スケール** |主に垂直 |水平 |
| **一貫性** |即時 |最終的な |
| **スキーマ** |修正済み |柔軟 |

---

## 4. SQL と NoSQL の意思決定フレームワーク

```
                      Cần ACID?
                      ╱       ╲
                   Yes         No
                    │           │
               Complex         Scale
              Relations?    requirements?
              ╱       ╲     ╱        ╲
           Yes        No   High       Low
            │          │    │          │
         SQL          SQL  NoSQL      SQL
      (PostgreSQL)  (MySQL)(Cassandra)(Simple)
                           (MongoDB)
```

### 4.1 意思決定マトリックス

|要件 | → データベース |
|----------|----------|
|銀行、金融 | PostgreSQL (ACID) |
|ユーザーセッション、キャッシュ | Redis(キー-値) |
|コンテンツ管理、CMS | MongoDB (ドキュメント) |
|ソーシャル グラフ、推奨事項 | Neo4j (グラフ) |
| IoT、時系列 | Cassandra / タイムスケールDB |
|全文検索 |エラスティックサーチ |
| Eコマースカタログ | MongoDB + Elasticsearch |
|分析、データウェアハウス |クリックハウス / BigQuery |

---

## 5. 多言語の永続性

```
E-commerce Platform:

┌─────────────────────────────────────────────┐
│              Application Layer               │
├──────────┬──────────┬───────────┬───────────┤
│ Users    │ Products │ Orders    │ Analytics │
│   │      │   │      │   │       │   │       │
│PostgreSQL│ MongoDB  │PostgreSQL │ClickHouse │
│(accounts)│(catalog) │(payments) │(reports)  │
├──────────┴──────────┴───────────┴───────────┤
│              Redis (Caching Layer)            │
├─────────────────────────────────────────────┤
│          Elasticsearch (Search)              │
└─────────────────────────────────────────────┘
```

各サービスは、そのユースケースに最適なデータベースを選択します。

---

## 6. 新しいSQL

NewSQL は、ACID + 水平スケーリングの両方の利点を組み合わせています。

|データベース |説明 |
|----------|----------|
| **ゴキブリDB** |分散 SQL、PostgreSQL 互換 |
| **TiDB** | MySQL 互換、HTAP |
| **Google Spanner** |グローバル分散型、強力な一貫性 |
| **ユガバイトDB** | PostgreSQL 互換、分散型 |

```
NewSQL = SQL Syntax + ACID Transactions + Horizontal Scaling

Trade-off: Latency cao hơn single-node SQL (distributed overhead)
```

---

## 概要

|データベースの種類 |強み |使用例 |
|--------------|----------|----------|
| **SQL** | ACID、関係、複雑なクエリ |銀行業務、電子商取引、ERP |
| **キーと値** |スピード、シンプルさ |キャッシュ、セッション |
| **ドキュメント** |柔軟なスキーマ、迅速な開発 | CMS、カタログ |
| **ワイドコラム** |書き込みスループット、スケール | IoT、時系列 |
| **グラフ** |関係クエリ |ソーシャル、推奨事項 |
| **新しいSQL** |両方の長所 |分散型ACID |

---

## 演習

1. **データベースの選択:** 医療管理システム (病院) の場合、(a) 患者記録、(b) 健康診断履歴、(c) 医療画像、(d) 症状検索、(e) 患者と医師の関係に関するデータベースを選択します。

2. **多言語設計:** Shopee のようなプラットフォームのデータ アーキテクチャを設計します。各サービスにどのデータベースが必要か、そしてその理由を判断します。

3. **移行:** システムは現在、すべてに MongoDB を使用しています。注文には強い一貫性が必要です。ダウンタイムなしで注文を PostgreSQL に移行することを計画します。
