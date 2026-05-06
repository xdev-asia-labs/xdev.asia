---
id: 019c961a-aa01-7001-e001-aa0100000001
title: 'レッスン 1: AI エージェント プラットフォーム アーキテクチャの概要'
slug: bai-1-tong-quan-kien-truc
description: >-
  なぜ単一のスクリプトではなくプラットフォームが必要なのでしょうか?ゲートウェイ + Monorepo アーキテクチャ、デュアル データベース設計
  (PostgreSQL + MongoDB + Redis)、技術スタックの決定。 xClaw のソース コードを分析します。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 0
section_title: 'パート 1: Monorepo のアーキテクチャとプラットフォーム'
course:
  id: 019c9619-bb03-7003-c003-bb0300000003
  title: AIエージェントプラットフォームをゼロから構築 — xClawとの実戦
  slug: xay-dung-ai-agent-platform
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1290" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1290)"/>

  <!-- Decorations -->
  <g>
    <circle cx="992" cy="226" r="20" fill="#f87171" opacity="0.11"/>
    <circle cx="884" cy="118" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="776" cy="270" r="32" fill="#f87171" opacity="0.13"/>
    <circle cx="668" cy="162" r="8" fill="#f87171" opacity="0.09"/>
    <circle cx="1060" cy="54" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="66" x2="1100" y2="146" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="96" x2="1050" y2="166" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1001.507041555162,145.5 1001.507041555162,186.5 966,207 930.492958444838,186.5 930.492958444838,145.5 966,125" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 AI と ML — レッスン 0</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 1: AI エージェント アーキテクチャの概要</tspan>
      <tspan x="60" dy="42">プラットフォーム</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AIエージェントプラットフォームをゼロから構築 — xClawとの実戦</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: Monorepo のアーキテクチャとプラットフォーム</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

OpenAI API を呼び出す Python スクリプトは、20 行のコードで作成できます。ただし、必要な場合は次のようになります。

- 自動フォールバックで **10 の異なる LLM プロバイダー** をサポートしますか?
- **マルチテナント** — 多くの組織が同じプラットフォームを共有していますが、データは分離されていますか?
- **ビジュアル ワークフロー ビルダー** により、コードの作成方法を知らない人でも AI パイプラインを作成できるようになりますか?
- **プラグイン システム**は各業界 (ヘルスケア、金融、法務) に応じて拡張されます?
- **チャット チャネル**は、Telegram、Discord、Slack、Zalo に同時に接続しますか?

その場合、スクリプトではなく **AI エージェント プラットフォーム** が必要になります。

---

## 1. なぜプラットフォームが必要なのでしょうか?

### 1.1 スクリプトとプラットフォーム

|側面 |単一スクリプト | AIエージェントプラットフォーム |
|----------|--------------|--------|
| LLMプロバイダー |ハードコード 1 プロバイダ | 10 を超えるプロバイダー、自動フォールバック |
|ユーザー | 1 開発者 |マルチテナント、RBAC |
|知識 |なし | RAG パイプライン + ナレッジベース |
|自動化 |手動トリガー |ビジュアルワークフローエンジン |
|拡張性 |コードを編集する |プラグイン システム、ドメイン パック |
|チャンネル | CLI / API | Telegram、Discord、Slack、Web... |
|モニタリング |コンソール.ログ |監査ログ、メトリクス、ダッシュボード |

### 1.2 実際的な問題

会社のために AI を構築していると想像してください。

```
CEO:     "Tôi muốn chatbot hỗ trợ khách hàng trên Telegram và Zalo"
CTO:     "Phải hỗ trợ nhiều LLM, có thể chuyển provider khi cần"
Dev:     "Cần workflow automation cho quy trình nội bộ"
Legal:   "Data giữa các phòng ban phải cách ly, có audit log"
Finance: "Agent phải hiểu domain tài chính"
```

1 つのスクリプトですべてを満たすことはできません。 **プラットフォーム**が必要です。

---

## 2. xClaw の概要アーキテクチャ

xClaw は **Gateway + Monorepo** アーキテクチャを使用します。

```
┌─────────────────────────────────────────────────────┐
│                    Clients                           │
│  Web App │ Telegram │ Discord │ Slack │ Zalo │ CLI   │
└─────────────────┬───────────────────────────────────┘
                  │ HTTP / WebSocket / Bot APIs
                  ▼
┌─────────────────────────────────────────────────────┐
│              API Gateway (@xclaw-ai/gateway)         │
│              Hono — Port 3000                        │
│  ┌──────┬──────┬──────┬──────┬──────┬──────┐        │
│  │ Auth │ RBAC │ Rate │ CORS │ Audit│ PII  │        │
│  │      │      │Limit │      │ Log  │Filter│        │
│  └──────┴──────┴──────┴──────┴──────┴──────┘        │
├─────────────────────────────────────────────────────┤
│              Core Engine (@xclaw-ai/core)            │
│  ┌──────────┬────────────┬──────────┬────────────┐  │
│  │  Agent   │  LLM       │  RAG     │ Workflow   │  │
│  │  Engine  │  Router    │  Engine  │ Engine     │  │
│  ├──────────┼────────────┼──────────┼────────────┤  │
│  │  Tools   │  Skills    │  Memory  │ Monitoring │  │
│  │  Registry│  Manager   │  Manager │ Store      │  │
│  └──────────┴────────────┴──────────┴────────────┘  │
├─────────────────────────────────────────────────────┤
│                 Data Layer                           │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐          │
│  │PostgreSQL│  │ MongoDB  │  │  Redis   │          │
│  │(Config)  │  │(AI/Chat) │  │ (Cache)  │          │
│  └──────────┘  └──────────┘  └──────────┘          │
└─────────────────────────────────────────────────────┘
```

### 2.1 なぜこのアーキテクチャなのか?

**ゲートウェイ パターン:**
- すべてのクライアントに対する単一のエントリ ポイント
- ミドルウェア チェーン: 認証 → RBAC → レート制限 → ルート ハンドラー
- コアに影響を与えることなく、新しいチャンネルを簡単に追加できます

**モノレポ パターン:**
- すべてのパッケージ間で共有されるタイプ
- プロジェクト参照によりビルド順序が明確になる
- アトミックな変更 — タイプ定義を編集し、すべてのパッケージを同時に更新します

---

## 3. デュアルデータベース設計

最も重要なアーキテクチャ上の決定: **データの性質に従ってデータベースを分離する**。

### 3.1 PostgreSQL — 構造化された構成データ

```
tenants ──┬── tenantSettings
          ├── users ──── userRoles ──── roles ──── rolePermissions ──── permissions
          ├── oauthAccounts
          ├── workflows ──── workflowExecutions
          ├── integrationConnections
          └── webhooks
```

**PostgreSQL を選ぶ理由**
- ACID トランザクション — ユーザー/ロール操作の一貫性を確保します
- リレーショナル結合 - 複数のテーブルにわたるユーザー権限をクエリします
- Drizzle ORM — タイプセーフ、コンパイル時の SQL 検証
- スキーマの移行 — バージョン管理データベース スキーマ

### 3.2 MongoDB — 柔軟な AI データ

```
sessions ──── messages
agent_configs
memory_entries
audit_logs (TTL: 90 days)
system_logs (TTL: 30 days)
```

**MongoDB を選ぶ理由**
- 柔軟なスキーマ — AI メッセージは複雑な構造 (ツール呼び出し、画像、埋め込み) を持っています
- 時系列 TTL — 監査ログ、システム ログの自動クリーンアップ
- ドキュメントストレージ - チャット履歴を正規化する必要はありません
- 高い書き込みスループット - 多数の同時チャット セッション

### 3.3 Redis — インメモリキャッシュ

- セッション キャッシュ — リクエストごとのデータベースのラウンドトリップを回避します
- レート制限カウンター
- リアルタイムのメトリクス集計

---

## 4. 技術スタックの決定

|決定 |選択 |検討された代替案 |理由 |
|----------|----------|----------|----------|
|言語 |タイプスクリプト | Python、Go、Rust |フルスタック (バックエンド + フロントエンド)、優れた LLM SDK エコシステム |
| API フレームワーク |名誉 | Express、Fastify、Koa |軽量、Web 標準、エッジ対応、優れたミドルウェア |
|フロントエンド | React 19 + Vite | Next.js、Vue、Svelte | Vite HMR は高速で最大の React エコシステム |
|状態管理 |ズスタンド | Redux、Jotai、MobX |軽量、定型文なし |
| PG ORM |霧雨 |プリズマ、TypeORM、カイセリー |タイプセーフな SQL、ランタイム オーバーヘッドなし、簡単なカスタム クエリ |
|認証 | JWT + bcrypt | Passport.js、Auth0 |自己ホスト型、シンプル、サードパーティ依存なし |
|ビルド |ドッカー | K8s、ベアメタル |開発者向けの Docker Compose、後で K8 に簡単に拡張 |
|モジュール | ESM |コモンJS |標準、ツリーシェイキング、トップレベルの待機 |

---

## 5. モノリポジトリの構造

```
xClaw/
├── packages/
│   ├── shared/          # Foundation types & constants
│   ├── core/            # Agent engine, LLM, RAG, workflow, monitoring
│   │   └── src/
│   │       ├── agent/       # Agent class, EventBus
│   │       ├── llm/         # LLM adapters, router
│   │       ├── rag/         # RAG engine, vector store, embeddings
│   │       ├── workflow/    # Workflow engine, node handlers
│   │       ├── tools/       # Tool registry
│   │       ├── skills/      # Skill manager
│   │       ├── memory/      # Memory manager
│   │       ├── streaming/   # Stream utilities
│   │       ├── monitoring/  # Metrics collection
│   │       ├── guardrails/  # Input/output safety
│   │       ├── tracing/     # Distributed tracing
│   │       └── plugins/     # Plugin loader
│   ├── db/              # Drizzle ORM (PG) + MongoDB driver
│   │   └── src/
│   │       ├── schema/      # Drizzle table definitions
│   │       ├── migrations/  # SQL migrations
│   │       ├── mongo.ts     # MongoDB connection
│   │       ├── seed.ts      # Initial data
│   │       └── monitoring-store.ts
│   ├── gateway/         # Hono HTTP server, all API routes
│   │   └── src/
│   │       ├── auth.ts      # Login, register, JWT
│   │       ├── chat.ts      # Chat endpoint
│   │       ├── knowledge.ts # RAG endpoints
│   │       ├── workflows.ts # Workflow CRUD + execute
│   │       ├── rbac.ts      # RBAC management
│   │       ├── monitoring.ts
│   │       └── ... (30+ route files)
│   ├── server/          # Entry point, startup orchestration
│   ├── integrations/    # 11 service connectors
│   ├── domains/         # 13 industry domain packs
│   ├── skills/          # Built-in skills
│   ├── skill-hub/       # Marketplace, MCP adapters
│   ├── ml/              # 12 ML algorithms, AutoML
│   ├── cli/             # CLI interface
│   ├── sandbox/         # Sandboxed code execution
│   ├── web/             # React frontend
│   └── channels/        # Telegram, Discord, Slack, Zalo, MS Teams
├── docker-compose.yml
├── Dockerfile
└── package.json
```

### ビルド順序 (プロジェクト参照)

```
shared → db → core → integrations → domains → ml → skills → skill-hub → gateway → server
```

各パッケージは依存関係を明確に宣言します `tsconfig.json` プロジェクトの参照。ビルドする `server` すべての依存関係を順番に自動的に構築します。

---

## 6. ハンズオン: xClaw を探索する

### 6.1 クローンを作成して実行する

```bash
git clone --recurse-submodules https://github.com/xdev-asia-labs/xClaw.git
cd xClaw
cp .env.example .env
docker compose up --build
```

### 6.2 アクセス

- **フロントエンド:** http://localhost:3001
- **API:** http://localhost:3000
- **健康チェック:** http://localhost:3000/health

```bash
# Login
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "admin@xclaw.io", "password": "password123"}'

# Kết quả: {"token": "eyJhbG..."}
```

### 6.3 ソースコードを調べる

IDE を開いてメイン ファイルを確認します。

|ファイル |機能 |
|-----|----------|
| `packages/shared/src/types/` |すべての TypeScript タイプ |
| `packages/core/src/agent/agent.ts` |エージェント クラス — プラットフォームの中心 |
| `packages/core/src/llm/llm-router.ts` | LLM ルーティングとフォールバック |
| `packages/core/src/rag/rag-engine.ts` |完全な RAG パイプライン |
| `packages/core/src/workflow/workflow-engine.ts` |ワークフローの実行 |
| `packages/gateway/src/gateway.ts` | Honoサーバーのセットアップ |
| `packages/db/src/schema/` |データベーススキーマ |

---

## 7. まとめ

この記事では、次のことを理解しました。

- **単一のスクリプトではなく AI エージェント プラットフォームが必要な理由**
- **ゲートウェイ + Monorepo アーキテクチャ** — 効率的なコード構成
- **デュアルデータベース設計** — 構成には PostgreSQL、AI データには MongoDB、キャッシュには Redis
- **技術スタックの決定** — TypeScript、Hono、Drizzle、React を選択する理由
- xClaw の **ソース コード構造**

**次の記事:** TypeScript モノリポジトリ (npm ワークスペース、プロジェクト参照、共有タイプ) のセットアップを最初から開始します。
