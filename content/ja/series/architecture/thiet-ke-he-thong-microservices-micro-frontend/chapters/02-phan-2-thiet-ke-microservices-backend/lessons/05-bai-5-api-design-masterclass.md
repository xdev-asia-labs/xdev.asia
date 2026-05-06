---
id: 019e4a33-d405-7b20-c001-b1c2d3e4f505
title: 'レッスン 5: API 設計マスタークラス — REST、GraphQL、gRPC'
slug: bai-5-api-design-masterclass-rest-graphql-grpc
description: >-
  REST、GraphQL、gRPC の詳細な比較: ユースケース、パフォーマンス、トレードオフ。 RESTful API のベスト
  プラクティス、GraphQL スキーマ設計、プロトコル バッファーを使用した gRPC。 API のバージョン管理戦略と下位互換性。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 5
section_title: 'パート 2: マイクロサービス バックエンドの設計'
course:
  id: 019e4a33-d400-7b20-c001-b1c2d3e4f5a8
  title: マイクロサービスとマイクロ フロントエンドのシステム設計 — 基本から運用まで
  slug: thiet-ke-he-thong-microservices-micro-frontend
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8640" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8640)"/>

  <!-- Decorations -->
  <g>
    <circle cx="623" cy="279" r="26" fill="#c084fc" opacity="0.14"/>
    <circle cx="646" cy="102" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="669" cy="185" r="14" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="692" cy="268" r="23" fill="#c084fc" opacity="0.11"/>
    <circle cx="715" cy="91" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="229" x2="1100" y2="309" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="259" x2="1050" y2="329" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1067.1051177665154,207 1067.1051177665154,251 1029,273 990.8948822334847,251 990.8948822334847,207 1029,185" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🏗️ アーキテクチャ — レッスン 5</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 5: API 設計マスタークラス — REST、</tspan>
      <tspan x="60" dy="42">GraphQL と gRPC</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">マイクロサービスとマイクロ フロントエンドのシステム設計 — 基本から運用まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: マイクロサービス バックエンドの設計</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

API は、サービス間、およびバックエンドとフロントエンド間の**コントラクト**です。適切な API スタイルと適切な設計を選択することが、マイクロサービス アーキテクチャの成功か失敗かを決定します。この記事では、最も人気のある 3 つの API スタイルと、各ユースケースに適切な API スタイルを選択する手順について詳しく説明します。

---

## 1. REST API — デフォルトの選択

### 1.1 RESTful ベストプラクティス

**リソースベースの URL:**
```
GET    /api/v1/products              → List products
GET    /api/v1/products/{id}         → Get product
POST   /api/v1/products              → Create product
PUT    /api/v1/products/{id}         → Update product
PATCH  /api/v1/products/{id}         → Partial update
DELETE /api/v1/products/{id}         → Delete product
GET    /api/v1/products/{id}/reviews → Nested resource
```

**ページネーション (カーソルベース):**
```json
{
  "data": [...],
  "pagination": {
    "next_cursor": "eyJpZCI6MTAwfQ==",
    "has_more": true,
    "total": 1500
  }
}
```

**標準エラー応答:**
```json
{
  "error": {
    "code": "PRODUCT_NOT_FOUND",
    "message": "Product with id '123' not found",
    "details": []
  }
}
```

### 1.2 API のバージョン管理戦略

|戦略 |例 |長所 |短所 |
|----------|-----------|----------|----------|
| URL パス | `/api/v1/products` |明示的でルーティングが簡単 | URLの変更 |
|ヘッダー | `Accept: application/vnd.api.v2+json` |クリーンな URL |非表示 |
|クエリパラメータ | `/api/products?version=2` |シンプル |乱雑 |

**推奨:** URL パスのバージョン管理 — シンプル、明確、API ゲートウェイでのルーティングが簡単です。

### 1.3 REST を使用する場合
- サードパーティ向けのパブリック API
- シンプルなCRUD操作
- クリティカル キャッシュ (HTTP ネイティブ キャッシュ)
- 馴染みのあるチーム、成熟したツール

---

## 2. GraphQL — 柔軟なクエリ

### 2.1 マイクロ フロントエンドに GraphQL を使用する理由

各マイクロ フロントエンドには、同じサービスからの**異なるデータ**が必要です。
```graphql
# Product MFE (cần đầy đủ thông tin)
query ProductDetail {
  product(id: "123") {
    id, name, description, price
    images { url, alt }
    reviews { rating, comment, user { name } }
    relatedProducts { id, name, price }
  }
}

# Cart MFE (chỉ cần tên + giá)
query CartItem {
  product(id: "123") {
    id, name, price, thumbnail
  }
}
```

→ GraphQL は、**オーバーフェッチ** (REST が返す数が多すぎる) と **アンダーフェッチ** (REST が多くのエンドポイントを呼び出す必要がある) に対処します。

### 2.2 スキーマ設計のベスト プラクティス

```graphql
type Product {
  id: ID!
  name: String!
  slug: String!
  price: Money!
  images: [Image!]!
  category: Category!
  reviews(first: Int, after: String): ReviewConnection!
}

type Money {
  amount: Float!
  currency: Currency!
}

type ReviewConnection {
  edges: [ReviewEdge!]!
  pageInfo: PageInfo!
}
```

### 2.3 GraphQL を使用する場合
- フロントエンドにはデータ取得の柔軟性が必要です
- 複数のフロントエンド クライアントが異なるデータを必要とする
- BFF レイヤーまたは API ゲートウェイ アグリゲーション
- 複雑な入れ子になったデータ関係

---

## 3. gRPC — 高性能内部

### 3.1 プロトコルバッファ

```protobuf
// product.proto
syntax = "proto3";

service ProductService {
  rpc GetProduct(GetProductRequest) returns (Product);
  rpc ListProducts(ListProductsRequest) returns (stream Product);
  rpc CreateProduct(CreateProductRequest) returns (Product);
}

message Product {
  string id = 1;
  string name = 2;
  double price = 3;
  repeated string image_urls = 4;
}

message GetProductRequest {
  string id = 1;
}
```

### 3.2 gRPC の利点
- JSON シリアル化 (バイナリ形式) より **~10 倍高速**
- **HTTP/2**: 多重化、ヘッダー圧縮
- **強い型付け**: 生成されたコード、コンパイル時チェック
- **双方向ストリーミング**: リアルタイム データ フロー

### 3.3 gRPC を使用する場合
- **サービス間** 通信 (内部のみ)
- 高スループット、低遅延の要件
- ストリーミング データ (リアルタイム更新、ログ)
- Polyglot: Go、Java、Python、Node.js のコード生成

---

## 4. 意思決定マトリックス

|基準 |休憩 |グラフQL | gRPC |
|----------|----------|----------|----------|
| **主な用途** |外部 API、CRUD |フロントエンドクエリ |サービス間 |
| **パフォーマンス** |良い |良い |素晴らしい |
| **キャッシング** | HTTP ネイティブ |複雑な (永続的なクエリ) |マニュアル |
| **学習曲線** |低い |中 |高 |
| **フロントエンドに優しい** |はい |とても|いいえ (プロキシが必要) |
| **ストリーミング** | SSE/WebSocket |定期購読 |ネイティブ |
| **ツーリング** |素晴らしい |良い |成長中 |
| **ブラウザのサポート** |ネイティブ |ネイティブ | gRPC-Web が必要 |

### 4.1 電子商取引プラットフォームに関する推奨事項

```
Client → Shell/MFE:     GraphQL (flexible, typed)
MFE → BFF/Gateway:      REST hoặc GraphQL
Gateway → Services:      REST (simple CRUD) + gRPC (high-perf)
Service → Service:       gRPC (internal) + Events (async)
```

---

## 概要

- **REST**: 外部 API と単純な CRUD のデフォルトの選択
- **GraphQL**: マイクロ フロントエンドに最適 — オーバーフェッチ/アンダーフェッチを軽減します
- **gRPC**: サービス間の王様 — 高速、型付き、ストリーミング
- 実際: **正しい使用例には 3 つすべてを組み合わせて使用してください**

---

**次の記事:** [レッスン 6: サービス間通信 — 同期、非同期、およびイベント駆動型](/series/thiet-ke-he-thong-microservices-micro-frontend/bai-6-inter-service-communication-sync-async-event-driven)
