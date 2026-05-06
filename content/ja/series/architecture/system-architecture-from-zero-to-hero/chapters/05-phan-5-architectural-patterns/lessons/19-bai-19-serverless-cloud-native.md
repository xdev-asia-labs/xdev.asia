---
id: 019d8a21-c110-7001-d001-e1f2a3b4c519
title: 'レッスン 19: サーバーレスおよびクラウドネイティブのアーキテクチャ'
slug: bai-19-serverless-cloud-native-architecture
description: >-
  クラウドネイティブの原則 (12-Factor App)。サーバーレス コンピューティング: FaaS (Lambda、Cloud
  Functions)。コンテナオーケストレーションの概要。サーバーレス パターン: API ゲートウェイ + Lambda、イベント駆動型。コールド
  スタート、ベンダー ロックイン、およびサーバーレスを使用するタイミング。
duration_minutes: 140
is_free: false
video_url: null
sort_order: 19
section_title: 'パート 5: アーキテクチャ パターン'
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 'システムアーキテクチャ: ゼロからヒーローへ'
  slug: system-architecture-from-zero-to-hero
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2583" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2583)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1010" cy="40" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="920" cy="130" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="830" cy="220" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="740" cy="50" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="650" cy="140" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="80" x2="1100" y2="160" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="110" x2="1050" y2="180" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="960.3108891324554,112.5 960.3108891324554,147.5 930,165 899.6891108675446,147.5 899.6891108675446,112.50000000000001 930,95" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🏗️ アーキテクチャ — レッスン 19</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 19: サーバーレスとクラウドネイティブ</tspan>
      <tspan x="60" dy="42">建築</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">システムアーキテクチャ: ゼロからヒーローへ</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 5: アーキテクチャ パターン</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

クラウドはシステムの設計方法を変えました。物理サーバーを購入すると、インフラストラクチャを管理することなくコードを実行できるようになります。この記事では、クラウドネイティブの原則とサーバーレス アーキテクチャについて説明します。

---

## 1. 12-Factor アプリ

```
12 nguyên tắc thiết kế ứng dụng Cloud-Native:

 1. Codebase:    1 repo, nhiều deploys (staging, prod)
 2. Dependencies: Khai báo rõ ràng (package.json, requirements.txt)
 3. Config:      Lưu trong environment variables (không hardcode)
 4. Backing:     Database, cache, queue là attached resources
 5. Build/Release/Run: Tách biệt 3 stages
 6. Processes:   Stateless processes (không lưu state in-memory)
 7. Port binding: Self-contained, export via port
 8. Concurrency: Scale out bằng processes
 9. Disposability: Fast startup, graceful shutdown
10. Dev/Prod parity: Giữ dev, staging, prod giống nhau
11. Logs:        Treat logs as event streams (stdout)
12. Admin:       One-off admin tasks cũng là code
```

---

## 2. サーバーレス コンピューティング

### 2.1 FaaS (サービスとしての機能)

```
Traditional Server:
  ┌──────────────────────────┐
  │ Server (24/7 running)    │
  │ OS, Runtime, App         │
  │ Bạn quản lý TẤT CẢ      │
  │ Trả tiền 24/7            │
  └──────────────────────────┘

Container (CaaS):
  ┌──────────────────────────┐
  │ Container (on demand)    │
  │ Runtime, App             │
  │ Cloud quản lý OS, Infra  │
  │ Trả tiền khi container chạy │
  └──────────────────────────┘

Serverless (FaaS):
  ┌──────────────────────────┐
  │ Function (on invocation) │
  │ Chỉ viết code            │
  │ Cloud quản lý EVERYTHING │
  │ Trả tiền per invocation  │
  │ Auto scale 0 → ∞         │
  └──────────────────────────┘
```

### 2.2 実行モデル

```
Request 1: → Cold Start (init container) → Execute → Return
Request 2: → Warm (reuse container)       → Execute → Return
Request 3: → Warm (reuse container)       → Execute → Return
... (idle 15 min) ...
Request 4: → Cold Start (new container)   → Execute → Return

Cold Start Timeline:
  ├── Download code (100-500ms)
  ├── Init runtime (50-200ms)
  ├── Init dependencies (100-2000ms)
  ├── Execute function (varies)
  └── Total cold start: 500ms - 5s

Mitigation:
  - Provisioned concurrency (keep warm)
  - Smaller packages (fewer dependencies)
  - Choose fast runtimes (Go, Rust > Java, .NET)
```

---

## 3. サーバーレス パターン

### 3.1 API ゲートウェイ + Lambda

```
Client ──► API Gateway ──► Lambda ──► DynamoDB
                │
                ├──► /users  → UserFunction
                ├──► /orders → OrderFunction
                └──► /search → SearchFunction

Ưu điểm: Auto-scale, pay per request
Nhược điểm: Cold start, 15m timeout limit
```

### 3.2 イベント駆動型サーバーレス

```
┌──────────┐     ┌────────┐     ┌──────────┐
│ S3       │────►│ Lambda │────►│ DynamoDB │
│ Upload   │     │ Process│     │ Metadata │
└──────────┘     │ image  │     └──────────┘
                 └────┬───┘
                      │
                 ┌────▼───┐
                 │ S3     │
                 │ Thumb  │
                 └────────┘

Events trigger functions:
  - S3: File uploaded → Lambda resize
  - SQS: Message → Lambda process
  - DynamoDB Streams: Record change → Lambda sync
  - CloudWatch: Schedule → Lambda cron job
  - API Gateway: HTTP request → Lambda handler
```

### 3.3 サーバーレス Web アプリ

```
┌──────────────────────────────────────────────────┐
│                                                    │
│  CloudFront (CDN)                                 │
│       │                                            │
│  ┌────▼────┐                                      │
│  │ S3      │ ← Static files (React/Vue SPA)       │
│  │ Bucket  │                                       │
│  └─────────┘                                       │
│                                                    │
│  API Gateway → Lambda Functions                    │
│       │           │                                │
│       │      ┌────▼─────┐  ┌──────────┐           │
│       │      │ DynamoDB │  │ Cognito  │           │
│       │      │ (data)   │  │ (auth)   │           │
│       │      └──────────┘  └──────────┘           │
│       │                                            │
│  ┌────▼─────┐                                     │
│  │ SQS      │ → Lambda (background)               │
│  └──────────┘                                       │
└──────────────────────────────────────────────────┘

Chi phí (100K requests/tháng):
  Lambda: ~$0.20
  API Gateway: ~$3.50
  DynamoDB: ~$1.00
  S3 + CloudFront: ~$1.00
  Total: ~$6/tháng (vs EC2 ~$20+/tháng)
```

---

## 4. コンテナオーケストレーション

### 4.1 Kubernetes の概要

```
┌─────────────────────────────────────────────────┐
│ Kubernetes Cluster                               │
│                                                   │
│ Control Plane:                                    │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐          │
│ │API Server│ │Scheduler │ │Controller│          │
│ │          │ │          │ │Manager   │          │
│ └──────────┘ └──────────┘ └──────────┘          │
│                                                   │
│ Worker Nodes:                                     │
│ ┌────────────────────────────────────────┐        │
│ │ Node 1                                 │        │
│ │ ┌──────────┐ ┌──────────┐ ┌────────┐ │        │
│ │ │Pod: App-1│ │Pod: App-2│ │Pod: DB │ │        │
│ │ └──────────┘ └──────────┘ └────────┘ │        │
│ └────────────────────────────────────────┘        │
│ ┌────────────────────────────────────────┐        │
│ │ Node 2                                 │        │
│ │ ┌──────────┐ ┌──────────┐             │        │
│ │ │Pod: App-3│ │Pod: Cache│             │        │
│ │ └──────────┘ └──────────┘             │        │
│ └────────────────────────────────────────┘        │
└─────────────────────────────────────────────────┘

K8s quản lý: Scheduling, Scaling, Self-healing,
Rolling updates, Service discovery, Load balancing
```

### 4.2 サーバーレス vs コンテナ vs VM

|特長 | VM |コンテナ |サーバーレス |
|----------|-----|----------|----------|
|スタートアップ |分 |秒 |ミリ秒* |
|スケーリング |マニュアル/オート |自動 (K8s) |インスタント |
|管理 |フル (OS+アプリ) |アプリ + ランタイム |コードのみ |
|コストモデル | 1時間あたり | 1時間あたり |呼び出しごと |
|最大実行時間 |無制限 |無制限 | 15分 |
|状態 |ステートフル |ステートフル |無国籍 |
|ベンダーロック |低い |低い |高 |

---

## 5. サーバーレスをいつ使用するか?

```
✅ Dùng khi:
  - Event-driven workloads (file processing, webhooks)
  - Sporadic traffic (low/unpredictable)
  - Rapid prototyping
  - Scheduled tasks (cron jobs)
  - Chatbots, IoT backends
  - APIs with low-medium traffic

❌ KHÔNG dùng khi:
  - Consistent high traffic (vì cost cao hơn containers)
  - Long-running processes (> 15 minutes)
  - Need WebSocket/persistent connections
  - Heavy computation (ML training)
  - Latency-sensitive (cold start vấn đề)
  - Complex stateful workflows
```

---

## 6. ベンダーロックインの軽減

```
Vấn đề: AWS Lambda code khó chạy trên GCP/Azure

Mitigation:
  1. Serverless Framework / SAM / CDK:
     Abstract cloud-specific config

  2. Hexagonal Architecture:
     Business logic tách biệt handlers

     // Handler (cloud-specific)
     export const handler = async (event) => {
       return await orderService.createOrder(
         parseRequest(event)  // adapter
       );
     };

     // Business logic (portable)
     class OrderService {
       async createOrder(data) { ... }
     }

  3. Multi-cloud tools:
     Knative (serverless on K8s)
     OpenFaaS (self-hosted FaaS)
```

---

## 概要

|アプローチ |最適な用途 |トレードオフ |
|----------|----------|----------|
|クラウド VM |レガシー、ステートフル |フルコントロール、高度な操作 |
|コンテナ + K8 |マイクロサービス |柔軟で複雑な運用 |
|サーバーレス FaaS |イベント駆動型の可変負荷 |シンプルなベンダーロック |
|サーバーレスコンテナ |混合ワークロード |バランス制御/シンプル |

---

## 演習

1. **アーキテクチャの選択:** スタートアップ SaaS: チーム 3、API + Web ダッシュボード、初期ユーザー 1,000 人、成長は不確実。比較: サーバーレス (Lambda + DynamoDB) とコンテナー (ECS/K8s + PostgreSQL)。どれを選びますか？

2. **12 要素監査:** 現在の (または想像上の) アプリケーションを確認します。 12 個の要素をチェックし、違反している要素とその修正方法をリストします。

3. **移行計画:** Monolith Spring Boot アプリ (10 エンドポイント、PostgreSQL、Redis、cron ジョブ)。サーバーレスへの移行計画を作成します。 Lambda に適したエンドポイントはどれですか?どちらがコンテナを保持すべきでしょうか?
