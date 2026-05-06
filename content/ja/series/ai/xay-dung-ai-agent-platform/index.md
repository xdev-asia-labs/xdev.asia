---
id: 019c9619-bb03-7003-c003-bb0300000003
title: AIエージェントプラットフォームをゼロから構築 — xClawとの実戦
slug: xay-dung-ai-agent-platform
description: >-
  TypeScript を使用して完全な AI エージェント プラットフォームを構築するための実践シリーズ (モノリポジトリの設計、LLM ルーター、ツール
  レジストリ、RAG パイプライン、ワークフロー エンジン、マルチテナント RBAC から Docker
  プロダクションのデプロイまで)。実稼働環境で実行されているオープンソース プラットフォームである xClaw の実際のソース コードを通じて学習します。
featured_image: uploads/2026/03/ai-agent-platform-banner-2026.png
level: intermediate
duration_hours: 60
lesson_count: 20
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-03-30T10:00:00.000000Z'
created_at: '2026-03-30T10:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019c9618-bb00-7000-b000-bb0000000001
  name: AI と機械学習
  slug: ai-machine-learning
tags:
  - name: AI Agents
    slug: ai-agents
  - name: TypeScript
    slug: typescript
  - name: monorepo
    slug: monorepo
  - name: Hono
    slug: hono
  - name: React
    slug: react
  - name: RAG
    slug: rag
  - name: MCP
    slug: mcp
  - name: workflow
    slug: workflow
  - name: multi-tenant
    slug: multi-tenant
  - name: rbac
    slug: rbac
  - name: Docker
    slug: docker
  - name: postgresql
    slug: postgresql
  - name: mongodb
    slug: mongodb
  - name: open-source
    slug: open-source
  - name: hands-on
    slug: hands-on
  - name: production
    slug: production
sections:
  - id: section-01
    title: 'パート 1: Monorepo のアーキテクチャとプラットフォーム'
    description: AI プラットフォーム アーキテクチャの設計、TypeScript モノリポジトリ、デュアル データベースのセットアップ
    sort_order: 1
    lessons:
      - id: 019c961a-aa01-7001-e001-aa0100000001
        title: 'レッスン 1: AI エージェント プラットフォーム アーキテクチャの概要'
        slug: bai-1-tong-quan-kien-truc
        description: >-
          なぜ単一のスクリプトではなくプラットフォームが必要なのでしょうか?ゲートウェイ + Monorepo アーキテクチャ、デュアル
          データベース設計 (PostgreSQL + MongoDB + Redis)、技術スタックの決定。 xClaw のソース
          コードを分析します。
        duration_minutes: 120
        is_free: true
        sort_order: 0
        video_url: null
      - id: 019c961a-aa02-7002-e002-aa0200000002
        title: 'レッスン 2: npm ワークスペースを使用して TypeScript Monorepo をセットアップする'
        slug: bai-2-setup-typescript-monorepo
        description: >-
          npm ワークスペース、tsconfig プロジェクト参照、共有タイプ、ビルド順序などのモノリポジトリを最初から作成します。パッケージ構造:
          共有 → データベース → コア → ゲートウェイ → サーバー。 ESM モジュール、パス エイリアス。
        duration_minutes: 150
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019c961a-aa03-7003-e003-aa0300000003
        title: 'レッスン 3: デュアルデータベース — PostgreSQL (Drizzle ORM) + MongoDB'
        slug: bai-3-dual-database
        description: >-
          構成データ用の Drizzle ORM を使用して PostgreSQL スキーマを設計します。
          AI/チャットデータ用のMongoDBドライバー。移行、シード データ、接続プーリング。データベース抽象化レイヤー。
        duration_minutes: 180
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019c961a-aa04-7004-e004-aa0400000004
        title: 'レッスン 4: Hono を使用した API ゲートウェイ — ルート、ミドルウェア、認証'
        slug: bai-4-api-gateway-hono
        description: >-
          Hono を使用して HTTP サーバーを構築します: ルーティング、ミドルウェア チェーン、CORS、レート制限。 JWT
          認証、パスワードハッシュ、OAuth2 フロー。リクエストの検証とエラー処理。
        duration_minutes: 180
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-02
    title: 'パート 2: LLM エンジンとエージェント コア'
    description: LLM ルーター、エージェント クラス、ツール レジストリ、ストリーミングを構築する
    sort_order: 2
    lessons:
      - id: 019c961a-aa05-7005-e005-aa0500000005
        title: 'レッスン 5: LLM ルーター — マルチプロバイダーのアダプター パターン'
        slug: bai-5-llm-router
        description: >-
          LLMAdapter インターフェースを設計し、OpenAI アダプター、Anthropic アダプター、Ollama
          アダプターを実装します。フォールバック チェーン、タスク複雑さのルーティング (高速/スマート/安価) を備えた
          LLMRouter。自動検出。
        duration_minutes: 180
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019c961a-aa06-7006-e006-aa0600000006
        title: 'レッスン 6: ツール レジストリ — ツールの登録と実行'
        slug: bai-6-tool-registry
        description: >-
          ToolRegistry クラスを実装します: ツールの登録/登録解除、ToolDefinition スキーマ (JSON
          スキーマ)、ToolHandler 関数。エラー処理、タイミング、結果タイプを使用してツール呼び出しを実行します。
        duration_minutes: 150
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019c961a-aa07-7007-e007-aa0700000007
        title: 'レッスン 7: エージェント クラス — 完全なツール呼び出しループ'
        slug: bai-7-agent-class
        description: >-
          Agent クラス: chat() および chatStream() メソッドを実装します。 maxIterations
          ガードを使用したツール呼び出しループ。メモリ統合、システム プロンプト構築、RAG コンテキスト インジェクション。
          AdditionalTools パターン。
        duration_minutes: 210
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019c961a-aa08-7008-e008-aa0800000008
        title: 'レッスン 8: ストリーミング応答と EventBus'
        slug: bai-8-streaming-eventbus
        description: >-
          ストリーミング用の AsyncGenerator:
          text-delta、tool-call-start、tool-call-end、finish イベント。エージェント イベントの
          EventBus パターン。 Hono からフロントエンドへのサーバー送信イベント (SSE)。
        duration_minutes: 150
        is_free: true
        sort_order: 7
        video_url: null
  - id: section-03
    title: 'パート 3: RAG パイプラインとナレッジ ベース'
    description: ドキュメント処理からセマンティック検索まで、完全な RAG エンジンを構築します
    sort_order: 3
    lessons:
      - id: 019c961a-aa09-7009-e009-aa0900000009
        title: 'レッスン 9: ドキュメント プロセッサ — チャンキング戦略'
        slug: bai-9-document-processor
        description: >-
          PDF、DOCX、TXT、マークダウンを解析します。チャンク化戦略: 固定サイズ、文ベース、セマンティック
          チャンク化。チャンクのオーバーラップ、メタデータの抽出。 xClaw の ProcessText メソッド。
        duration_minutes: 150
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019c961a-aa10-7010-e010-aa1000000010
        title: 'レッスン 10: 埋め込みとベクター ストア'
        slug: bai-10-embedding-vector-store
        description: >-
          EmbeddingProvider インターフェイス: OpenAI 埋め込みと LocalEmbeddingProvider。
          InMemoryVectorStore: コサイン類似度検索、ベクトルの追加/削除/更新。バッチ埋め込み、ディメンション処理。
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019c961a-aa11-7011-e011-aa1100000011
        title: 'レッスン 11: RAG エンジン — 検索、再ランキング、ナレッジ管理'
        slug: bai-11-rag-engine
        description: >-
          RagEngine クラス:
          ingestText、ingestUrl、retrieve、searchWithReranking。コレクション、ドキュメント
          CRUD、テナント分離。 Web クローラーの統合。クエリ履歴と分析。
        duration_minutes: 210
        is_free: true
        sort_order: 10
        video_url: null
  - id: section-04
    title: 'パート 4: ワークフロー エンジンと自動化'
    description: 16 種類のノードを備えたビジュアル ワークフロー ビルダー - 設計から実行まで
    sort_order: 4
    lessons:
      - id: 019c961a-aa12-7012-e012-aa1200000012
        title: 'レッスン 12: ワークフロー エンジン — アーキテクチャとノード ハンドラー'
        slug: bai-12-workflow-engine
        description: >-
          WorkflowEngine クラスの設計: ノード ハンドラー、エッジ トラバーサル、変数のスコープ。 16 のノード タイプ:
          トリガー、llm 呼び出し、ツール呼び出し、条件、スイッチ、ループ、マージ、コード、http リクエスト、変換など。
        duration_minutes: 210
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019c961a-aa13-7013-e013-aa1300000013
        title: 'レッスン 13: ワークフローの検証、実行、サンドボックス'
        slug: bai-13-workflow-validation-execution
        description: >-
          validateWorkflow(): サイクル検出、孤立ノード、必要な構成。 {{変数}} によるテンプレートの解決。 Node.js
          vm モジュールを使用したサンドボックス化されたコードの実行。マージ同期。
        duration_minutes: 180
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-05
    title: 'パート 5: スキル、ドメイン、プラグイン システム'
    description: スキル システム、ドメイン パック、プラグイン アーキテクチャでエージェントを拡張
    sort_order: 5
    lessons:
      - id: 019c961a-aa14-7014-e014-aa1400000014
        title: 'レッスン 14: スキル システム — スキルとスキルマネージャーの定義'
        slug: bai-14-skill-system
        description: >-
          SkillDefinition インターフェイス: マニフェスト、ツール、アクティブ化/非アクティブ化。 SkillManager:
          登録、アクティブ化、getActiveTools、getRankedTools。インテリジェントなランキングのための RL ベースの
          SkillSelector (Multi-Armed Bandit)。
        duration_minutes: 180
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019c961a-aa15-7015-e015-aa1500000015
        title: 'レッスン 15: ドメイン パック — 13 の専門分野'
        slug: bai-15-domain-packs
        description: >-
          DomainPack アーキテクチャの設計: 基本ドメイン クラス、特殊なシステム
          プロンプト、ドメイン固有のツール。ヘルスケア、開発者、財務ドメインを実装します。ユーザードメインの設定。
        duration_minutes: 150
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019c961a-aa16-7016-e016-aa1600000016
        title: 'レッスン 16: プラグイン アーキテクチャと MCP の統合'
        slug: bai-16-plugin-mcp
        description: >-
          プラグインの読み込みパターン、公式プラグインの git サブモジュール。 MCP プロトコルの実装:
          サーバー検出、実行ツール。開発ドキュメント MCP サーバー。 Skill Hub マーケットプレイスのパターン。
        duration_minutes: 180
        is_free: true
        sort_order: 15
        video_url: null
  - id: section-06
    title: 'パート 6: マルチテナント、RBAC、セキュリティ'
    description: 完全な RBAC を備えたマルチテナント システムを構築する
    sort_order: 6
    lessons:
      - id: 019c961a-aa17-7017-e017-aa1700000017
        title: 'レッスン 17: マルチテナント RBAC — 役割、権限、テナントの分離'
        slug: bai-17-multi-tenant-rbac
        description: >-
          RBAC スキーマの設計: テナント、ユーザー、ロール、アクセス許可、rolePermissions。 4 つのシステム ロール、15
          の権限グループ、60 の権限。データベース層でのテナントの分離。ミドルウェアの認可。
        duration_minutes: 210
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019c961a-aa18-7018-e018-aa1800000018
        title: 'レッスン 18: チャット チャネル — Telegram、Discord、Slack、Zalo'
        slug: bai-18-chat-channels
        description: >-
          チャネル抽象化パターン。 Telegram ボット (ポーリング)、Discord ボット (ゲートウェイ)、Slack (Web
          API)、Zalo OA (Webhook) を実装します。チャネル マネージャー、メッセージ ルーティング、埋め込み可能な WebChat
          ウィジェット。
        duration_minutes: 180
        is_free: true
        sort_order: 17
        video_url: null
  - id: section-07
    title: 'パート 7: フロントエンド、モニタリング、本番環境'
    description: フロントエンドに反応し、ダッシュボードを監視し、本番環境をデプロイする
    sort_order: 7
    lessons:
      - id: 019c961a-aa19-7019-e019-aa1900000019
        title: 'レッスン 19: React フロントエンド — チャット UI、ワークフロー ビルダー、ダッシュボード'
        slug: bai-19-react-frontend
        description: >-
          リアクト19+ヴァイト+追い風+ズスタンド。ストリーミング、ビジュアル ワークフロー ビルダー (ドラッグ アンド
          ドロップ)、管理ダッシュボード、設定ページを備えたチャット インターフェイス。 i18n、フック、コンポーネント アーキテクチャ。
        duration_minutes: 210
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019c961a-aa20-7020-e020-aa2000000020
        title: 'レッスン 20: 監視、監査ログ、Docker 実稼働デプロイ'
        slug: bai-20-monitoring-deploy
        description: >-
          システム メトリクス、監査ログ (90 日 TTL)、システム ログ (30 日 TTL)。店舗パターンのモニタリング。 Docker
          のマルチステージ ビルド、docker-compose プロダクション。 Nginx リバース プロキシ、SSL、バックアップ戦略。
        duration_minutes: 210
        is_free: true
        sort_order: 19
        video_url: null
reviews: []
quizzes: []
locale: ja
---

## シリーズのご紹介

**ゼロからの AI エージェント プラットフォームの構築** は、完全な AI エージェント プラットフォームを理解し、自分で構築するのに役立つ実践的なシリーズです。これは、単純なチャットボットではなく、マルチ LLM、RAG、ワークフロー自動化、マルチテナント RBAC、プラグイン システムなどを備えた **エンタープライズ レベルのプラットフォーム**です。

シリーズ全体は、実際のソースコードに基づいています。 [xClaw](https://github.com/xdev-asia-labs/xClaw) — TypeScript で書かれた、実稼働環境で実行されるオープンソース AI エージェント プラットフォーム。

> 🎯 **目標:** 完了したら、独自の AI エージェント プラットフォームを構築したり、xClaw に貢献したりできます。

## 何を学ぶのですか?

### パート 1: Monorepo のアーキテクチャとプラットフォーム
- **レッスン 1:** アーキテクチャの概要 — プラットフォーム、デュアルデータベース設計が必要な理由
- **レッスン 2:** npm ワークスペースとプロジェクト参照を使用して TypeScript モノリポジトリをセットアップする
- **レッスン 3:** デュアルデータベース — PostgreSQL (Drizzle ORM) + MongoDB + Redis
- **レッスン 4:** Hono を使用した API ゲートウェイ — ルート、ミドルウェア、JWT 認証、OAuth2

### パート 2: LLM エンジンとエージェント コア
- **レッスン 5:** LLM ルーター — フォールバック チェーンを備えた 10 個の LLM プロバイダーのアダプター パターン
- **レッスン 6:** ツール レジストリ — ツールの登録、管理、実行
- **レッスン 7:** エージェント クラス — 完全なツール呼び出しループ、メモリ、RAG コンテキスト
- **レッスン 8:** ストリーミング応答 — AsyncGenerator、EventBus、サーバー送信イベント

### パート 3: RAG パイプラインとナレッジ ベース
- **レッスン 9:** ドキュメント プロセッサ — チャンキング戦略、メタデータ抽出
- **レッスン 10:** 埋め込みとベクトル ストア — コサイン類似度、バッチ処理
- **レッスン 11:** RAG エンジン — 検索、再ランキング、コレクション、Web クローラー

### パート 4: ワークフロー エンジンと自動化
- **レッスン 12:** ワークフロー エンジン — 16 のノード タイプ、ハンドラー パターン、エッジ トラバーサル
- **レッスン 13:** 検証、実行、サンドボックス コード、テンプレートの解決

### パート 5: スキル、ドメイン、プラグイン システム
- **レッスン 14:** スキル システム — スキル、スキルマネージャー、RL ベースの選択を定義します。
- **レッスン 15:** ドメイン パック — 13 の領域、ドメイン固有のプロンプトとツール
- **レッスン 16:** プラグイン アーキテクチャ、MCP プロトコル、スキル ハブ マーケットプレイス

### パート 6: マルチテナント、RBAC、チャネル
- **レッスン 17:** マルチテナント RBAC — 役割、権限、テナントの分離
- **レッスン 18:** チャット チャネル — Telegram、Discord、Slack、Zalo、WebChat

### パート 7: フロントエンド、モニタリング、本番環境
- **レッスン 19:** React フロントエンド — チャット UI、ワークフロー ビルダー、ダッシュボード
- **レッスン 20:** モニタリング、監査ログ、Docker デプロイ、Nginx SSL

## リクエスト

- 基本 **TypeScript/JavaScript** (ES2022+、async/await、ジェネレーター)
- **Node.js** ≥ 20
- **Docker** と Docker Compose
- REST API、SQL、NoSQL の基本的な理解
- ChatGPT または Claude API を使用したことがある (必須ではなく、あると良い)

## ソースコード

完全なソースコードリファレンス:

```bash
git clone --recurse-submodules https://github.com/xdev-asia-labs/xClaw.git
cd xClaw
cp .env.example .env
docker compose up --build
```

**GitHub:** [github.com/xdev-asia-labs/xClaw](https://github.com/xdev-asia-labs/xClaw)
**ライセンス:** MIT
