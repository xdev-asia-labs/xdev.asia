---
id: 019c9619-aa02-7002-b002-aa0200000002
title: 'AI エージェントの構築: ゼロから本番環境まで'
slug: build-ai-agents
description: >-
  シンプルなチャットボットから複雑なマルチエージェント システムまで、AI
  エージェントの構築に関する実践的なコース。関数呼び出し、ツールの使用、RAG、MCP、LangGraph、CrewAI、および運用環境へのエージェントのデプロイに熟練しています。各レッスンは
  Python を使用して実践的にコーディングされます。
featured_image: uploads/2026/03/build-ai-agents-cover.png
level: intermediate
duration_hours: 50
lesson_count: 18
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-03-29T10:00:00.000000Z'
created_at: '2026-03-29T10:00:00.000000Z'
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
  - name: LangGraph
    slug: langgraph
  - name: CrewAI
    slug: crewai
  - name: MCP
    slug: mcp
  - name: Function Calling
    slug: function-calling
  - name: Tool Use
    slug: tool-use
  - name: RAG
    slug: rag
  - name: Multi-Agent
    slug: multi-agent
  - name: LangChain
    slug: langchain
  - name: Python
    slug: python
  - name: OpenAI
    slug: openai
  - name: production
    slug: production
  - name: hands-on
    slug: hands-on
  - name: A2A
    slug: a2a
  - name: agentic-ai
    slug: agentic-ai
sections:
  - id: section-01
    title: 'パート 1: エージェント プラットフォーム — 構築する前に理解する'
    description: Agent、Perceive-Reason-Act ループ、LLM API の概念をマスターする
    sort_order: 1
    lessons:
      - id: 019c9619-cc01-7001-d001-cc0100000001
        title: 'レッスン 1: エージェントとは何ですか? — チャットボットから自律型AIへ'
        slug: bai-1-agent-la-gi
        description: >-
          AI エージェントを定義し、チャットボット、エージェント、副操縦士を区別します。知覚-理由-計画-行動のループ。エージェントの種類:
          反応型、熟議型、ハイブリッド。 Python を使用した最も単純なデモ エージェント。
        duration_minutes: 90
        is_free: true
        sort_order: 0
        video_url: null
      - id: 019c9619-cc02-7002-d002-cc0200000002
        title: 'レッスン 2: LLM API マスタークラス — OpenAI、Claude、Gemini'
        slug: bai-2-llm-apis-masterclass
        description: >-
          上位 3 つの LLM の API (認証、チャット完了、ストリーミング、構造化出力 (JSON モード)、ビジョン、コスト最適化)
          に精通しています。各プロバイダーの長所と短所を比較してください。
        duration_minutes: 120
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019c9619-cc03-7003-d003-cc0300000003
        title: 'レッスン 3: エージェント向けのプロンプト エンジニアリング — システム プロンプトとペルソナ'
        slug: bai-3-prompt-engineering-cho-agent
        description: >-
          エージェント向けに効果的なシステム
          プロンプトを作成します。ペルソナ、境界、出力スキーマを定義します。思考連鎖、少数ショット、フォーマット準拠の LLM プレス技術。
          ReAct プロンプト パターン。
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
  - id: section-02
    title: 'パート 2: 関数呼び出しとツールの使用'
    description: エージェントが外の世界と対話するための扉を開きます
    sort_order: 2
    lessons:
      - id: 019c9619-cc04-7004-d004-cc0400000004
        title: 'レッスン 4: 関数呼び出し — エージェントに「手と足」を与える'
        slug: bai-4-function-calling
        description: >-
          関数呼び出し・ツール OpenAI、Anthropic、Geminiの仕組みを利用します。ツール スキーマ (JSON)
          を定義し、tool_calls を処理し、並列関数呼び出しを行います。計算エージェントと気象エージェントを構築します。
        duration_minutes: 150
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019c9619-cc05-7005-d005-cc0500000005
        title: 'レッスン 5: カスタム ツールの構築 — Web 検索、コード実行、API 統合'
        slug: bai-5-xay-dung-custom-tools
        description: >-
          複雑なツールを作成します: Web スクレイピング、Google 検索、Python コード サンドボックス、データベース クエリ、REST
          API 呼び出し元。レジストリ ツール、エラー処理、および再試行ロジックを管理します。
        duration_minutes: 150
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019c9619-cc06-7006-d006-cc0600000006
        title: 'レッスン 6: エージェント ループ — 思考、行動、観察のサイクル'
        slug: bai-6-the-agent-loop
        description: >-
          純粋な Python で完全なエージェント ループを最初から実装します。ReAct
          パターン、複数ステップの推論の処理、会話履歴管理、トークン バジェット、および停止条件を処理します。
        duration_minutes: 180
        is_free: true
        sort_order: 5
        video_url: null
  - id: section-03
    title: 'パート 3: RAG とメモリ — エージェントにメモリを与える'
    description: ナレッジベースとメモリ管理のおかげでエージェントはさらに賢くなります
    sort_order: 3
    lessons:
      - id: 019c9619-cc07-7007-d007-cc0700000007
        title: 'レッスン 7: エージェント用 RAG — ナレッジ ベースへの接続'
        slug: bai-7-rag-cho-agent
        description: >-
          エージェント用の RAG パイプラインを構築します: ドキュメントの読み込み、チャンキング戦略、埋め込みモデル、ベクター ストア
          (ChromaDB、Qdrant)。セマンティック検索とキーワード検索。ハイブリッド検索。
        duration_minutes: 180
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019c9619-cc08-7008-d008-cc0800000008
        title: 'レッスン 8: エージェントの記憶 — 短期、長期、およびエピソード的'
        slug: bai-8-agent-memory
        description: >-
          メモリの種類: 会話バッファ、要約メモリ、エンティティ メモリ。 DB
          ベクトルを使用して長期メモリを実装します。エピソード記憶により、エージェントは経験から「学習」できます。メモリ アーキテクチャを設計します。
        duration_minutes: 150
        is_free: true
        sort_order: 7
        video_url: null
  - id: section-04
    title: 'パート 4: エージェント フレームワーク'
    description: 専門的なフレームワークを使用して複雑なエージェントを構築する
    sort_order: 4
    lessons:
      - id: 019c9619-cc09-7009-d009-cc0900000009
        title: 'レッスン 9: LangChain と LangGraph — ステートフル エージェント ワークフロー'
        slug: bai-9-langchain-langgraph
        description: >-
          LangChain チェーンから LangGraph グラフまで:
          ノード、エッジ、条件付きルーティング、状態管理。人間参加型の承認フローを備えた調査エージェントを構築します。
        duration_minutes: 210
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019c9619-cc10-7010-d010-cc1000000010
        title: 'レッスン 10: CrewAI — AI エージェントの「チーム」の構築'
        slug: bai-10-crewai
        description: >-
          CrewAI によるマルチエージェント: エージェント
          (役割、目標、バックストーリー)、タスク、およびクルーのオーケストレーションを定義します。コンテンツ パイプラインを構築: 研究者 →
          ライター → 編集者。プロセスの種類: 順次、階層。
        duration_minutes: 180
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019c9619-cc11-7011-d011-cc1100000011
        title: 'レッスン 11: 高度なパターン — 計画、反省、自己修正'
        slug: bai-11-advanced-patterns
        description: '高度なパターン: 計画と実行、思考ツリー計画、内省ループ、批判と修正。実装エージェントは自身の出力を評価して修正します。'
        duration_minutes: 150
        is_free: true
        sort_order: 10
        video_url: null
  - id: section-05
    title: 'パート 5: MCP、A2A、およびマルチエージェント システム'
    description: 接続規格と大規模マルチエージェントシステム
    sort_order: 5
    lessons:
      - id: 019c9619-cc12-7012-d012-cc1200000012
        title: 'レッスン 12: モデル コンテキスト プロトコル (MCP) — エージェントの接続標準'
        slug: bai-12-mcp
        description: >-
          MCPとは何ですか?なぜ標準化が必要なのでしょうか?クライアント/サーバー
          アーキテクチャ、検出ツール、機能ネゴシエーション。データベース、GitHub API、ファイルシステムを接続するMCPサーバーを構築します。
        duration_minutes: 180
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019c9619-cc13-7013-d013-cc1300000013
        title: 'レッスン 13: エージェント間 (A2A) プロトコル — エージェントは相互に通信します'
        slug: bai-13-a2a-protocol
        description: >-
          Google A2A プロトコル: エージェント カード、機能検出、タスクのライフサイクル、エージェント間通信。 A2A と MCP
          を比較します。 2 つの異なるフレームワークの 2 つのエージェントが連携するデモを行います。
        duration_minutes: 150
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019c9619-cc14-7014-d014-cc1400000014
        title: 'レッスン 14: マルチエージェント オーケストレーション — アーキテクチャとデザイン パターン'
        slug: bai-14-multi-agent-orchestration
        description: >-
          オーケストレーション パターン: シーケンシャル、パラレル、階層、スウォーム。スーパーバイザ
          エージェントとピアツーピア。競合、デッドロック、エラーの伝播を処理します。
          PM→開発者→レビュー担当者のコーディングチーム体制を構築します。
        duration_minutes: 210
        is_free: true
        sort_order: 13
        video_url: null
  - id: section-06
    title: 'パート 6: 本番環境と実際のデプロイメント'
    description: AI エージェントをプロトタイプから実稼働グレードに移行する
    sort_order: 6
    lessons:
      - id: 019c9619-cc15-7015-d015-cc1500000015
        title: 'レッスン 15: ガードレールと安全 — エージェントを「反乱」から守る'
        slug: bai-15-guardrails-safety
        description: >-
          プロンプトインジェクション防御、出力検証、PII フィルタリング。ガードレール フレームワーク: NeMo ガードレール、ガードレール
          AI。人間参加型パターン。レート制限とコスト制御。
        duration_minutes: 150
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019c9619-cc16-7016-d016-cc1600000016
        title: 'レッスン 16: 可観測性と評価 — エージェントが「考えている」ことを監視する'
        slug: bai-16-observability-evaluation
        description: >-
          LangSmith、Langfuse を使用してエージェントの決定を追跡します。ロギング、メトリクス、コスト追跡。評価:
          LLM-as-a-Judge、ゴールデン テスト セット、人間による評価。 A/B テスト エージェントのプロンプト。
        duration_minutes: 150
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019c9619-cc17-7017-d017-cc1700000017
        title: 'レッスン 17: エージェントを本番環境にデプロイする — FastAPI、Docker、クラウド'
        slug: bai-17-deploy-agent-production
        description: >-
          FastAPI を使用してエージェントを API にラップします。 Dockerize、CI/CD パイプライン。クラウド
          (AWS/GCP) にデプロイします。スケーリング戦略、セッション管理、キャッシュ。リアルタイムのエージェント チャット用の
          WebSocket。
        duration_minutes: 210
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019c9619-cc18-7018-d018-cc1800000018
        title: 'レッスン 18: Capstone プロジェクト — 完全な AI エージェント チームを構築する'
        slug: bai-18-capstone-project
        description: >-
          プロジェクトの概要: RAG、MCP ツール、メモリ、ガードレール、可観測性を備えた完全なマルチエージェント
          システムを構築し、運用環境に展開します。コードレビューとベストプラクティスをまとめました。
        duration_minutes: 240
        is_free: true
        sort_order: 17
        video_url: null
reviews: []
quizzes: []
locale: ja
---

## シリーズのご紹介

**Build AI Agents: From Zero to Production** は、最も基本的な概念から、実稼働環境で実行される複雑なマルチエージェント システムまで、AI エージェントの構築に役立つ現実的な旅です。

理論とアーキテクチャに焦点を当てた「AI & LLM」シリーズとは異なり、このシリーズは 100% **実践**です。各レッスンは実際のプロジェクトであり、各コンセプトにはすぐに実行できるコードが含まれています。

> 🎯 **目標:** 完了すると、あらゆるユースケースに対応した実稼働対応の AI エージェント システムを構築してデプロイできます。

## 何を学ぶのですか?

### パート 1: エージェント プラットフォーム — 構築する前に理解する

- **レッスン 1:** エージェントとは何ですか?チャットボット、エージェント、副操縦士を区別する
- **レッスン 2:** LLM API マスタークラス: OpenAI、Claude、Gemini — 3 つすべてをマスターする
- **レッスン 3:** エージェント向けプロンプト エンジニアリング: システム プロンプト、ペルソナ、ReAct パターン

### パート 2: 関数呼び出しとツールの使用

- **レッスン 4:** 関数呼び出し — エージェントに世界と対話するための「手足」を与えます
- **レッスン 5:** カスタム ツール: Web 検索、コード実行、API 統合
- **レッスン 6:** エージェント ループ — 思考、行動、観察のループを最初から実装する

### パート 3: RAG とメモリ — エージェントにメモリを与える

- **レッスン 7:** RAG for Agent: ナレッジ ベースを ChromaDB、Qdrant に接続する
- **レッスン 8:** エージェントの記憶: 短期、長期、エピソード記憶のアーキテクチャ

### パート 4: エージェント フレームワーク

- **レッスン 9:** LangChain と LangGraph: グラフベースのオーケストレーションを使用したステートフル エージェント ワークフロー
- **レッスン 10:** CrewAI: 相互に協力する AI エージェントの「チーム」を構築する
- **レッスン 11:** 高度なパターン: 計画、振り返り、自己修正

### パート 5: MCP、A2A、およびマルチエージェント システム

- **レッスン 12:** モデル コンテキスト プロトコル (MCP): エージェントのユニバーサル接続標準
- **レッスン 13:** エージェント間 (A2A): エージェントがフレームワークを越えて通信するためのプロトコル
- **レッスン 14:** マルチエージェント オーケストレーション: アーキテクチャとデザイン パターン

### パート 6: 本番環境と実際のデプロイメント

- **レッスン 15:** ガードレールと安全性: 薬剤を即時注射や幻覚から保護する
- **レッスン 16:** 可観測性と評価: トレース、ロギング、LLM-as-a-Judge
- **レッスン 17:** エージェントを本番環境にデプロイする: FastAPI、Docker、クラウド
- **レッスン 18:** Capstone プロジェクト: 完全なエンドツーエンドの AI エージェント チームを構築する

## 入力が必要です

- **中級 Python** (非同期/待機、デコレータ、クラス、エラー処理)
- LLM の基本的な理解 (ChatGPT/Claude API とは何かを知る、または「AI & LLM」シリーズを完了する)
- 少なくとも 8GB の RAM を搭載したコンピューター (GPU は必要ありません - ほとんどは API 経由で実行されます)
- OpenAI/Anthropic/Google AI アカウント (ほとんどのレッスンには無料枠で十分です)

## 使用したツール

```
Python 3.11+      | Ngôn ngữ chính
OpenAI SDK         | GPT-4o, Function Calling
Anthropic SDK      | Claude, Tool Use
Google GenAI       | Gemini, Grounding
LangChain          | Chain & Agent framework
LangGraph          | Stateful graph-based workflows
CrewAI             | Multi-agent orchestration
ChromaDB / Qdrant  | Vector databases
FastAPI            | API server
Docker             | Containerization
LangSmith          | Observability & tracing
```

## このシリーズは「AI & LLM: 基礎から応用まで」とどう違うのですか?

| | AI&LLMシリーズ | AI エージェントを構築する |
|---|---|---|
| **焦点** |理論 + アーキテクチャ LLM |実用的なエージェント アプリケーションを構築する |
| **オブジェクト** | AI初心者 | LLM の基本をすでに理解している |
| **練習** |コードは概念を示しています |レッスンごとの実際のプロジェクト |
| **出力** | LLM の仕組みを理解する |エージェントプロジェクトのポートフォリオを持っています |
| **テクノロジー** | PyTorch、トランスフォーマー | LangGraph、CrewAI、MCP、A2A |
