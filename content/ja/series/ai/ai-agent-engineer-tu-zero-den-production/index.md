---
id: 019e0a01-aa01-7001-b001-ff0500000001
title: 'AI エージェント エンジニア: ゼロから本番環境まで'
slug: ai-agent-engineer-tu-zero-den-production
description: >-
  AI エージェント エンジニアリングに関する包括的なコース — Python と ML の基礎、NLP と LLM
  (LLaMA、Mistral、Qwen、Phi)、Vector DB を使用した RAG (FAISS、Milvus、Pinecone)
  から、LangChain、LlamaIndex、CrewAI、LangGraph を使用した AI エージェント
  システムの構築まで。微調整、迅速なエンジニアリング、ツール呼び出し、マルチエージェントを実践します。
  FastAPI、Docker、マイクロサービス、MLOps、CI/CD を使用して本番環境を AWS/Azure/GCP
  にデプロイします。大手テクノロジー企業の AI/ML エンジニアの採用要件を完全に満たします。
featured_image: uploads/2026/04/ai-agent-engineer-cover.png
level: intermediate
duration_hours: 80
lesson_count: 22
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-04-15T10:00:00.000000Z'
created_at: '2026-04-15T10:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019c9616-cat1-7001-a001-000000000001
  name: AI と機械学習
  slug: ai-machine-learning
tags:
  - name: AI
    slug: ai
  - name: LLM
    slug: llm
  - name: Machine Learning
    slug: machine-learning
  - name: NLP
    slug: nlp
  - name: RAG
    slug: rag
  - name: Python
    slug: python
  - name: Deep Learning
    slug: deep-learning
  - name: Docker
    slug: docker
  - name: Microservices
    slug: microservices
  - name: Fine-tuning
    slug: fine-tuning
  - name: Prompt Engineering
    slug: prompt-engineering
sections:
  - id: section-agent-01
    title: 'パート 1: 基礎 — Python、ML、AI ツール'
    description: AI エンジニアのための Python、機械学習パイプライン、ディープ ラーニングの強固な基盤を構築する
    sort_order: 1
    lessons:
      - id: 019e0a01-bb01-7001-c001-ee0100000001
        title: 'レッスン 1: AI エンジニアのための Python — エコシステムとベスト プラクティス'
        slug: bai-1-python-ai-engineer-ecosystem
        description: >-
          AI 用の Python エコシステム: NumPy、Pandas、scikit-learn。仮想環境、依存関係の管理。 ML
          プロジェクトのコーディング パターン。タイプヒント、テスト、実稼働標準プロジェクト構造。
        duration_minutes: 120
        is_free: true
        sort_order: 0
        video_url: null
      - id: 019e0a01-bb02-7001-c001-ee0200000001
        title: 'レッスン 2: 機械学習パイプライン — データからモデルまで'
        slug: bai-2-ml-pipeline-data-den-model
        description: >-
          エンドツーエンドの ML パイプライン: データ収集、前処理、特徴エンジニアリング。モデルのトレーニング、評価、ハイパーパラメーターの調整。
          scikit-learn、XGBoost。 MLflow 追跡。
        duration_minutes: 150
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019e0a01-bb03-7001-c001-ee0300000001
        title: 'レッスン 3: ディープラーニングとニューラル ネットワークの基礎'
        slug: bai-3-deep-learning-neural-networks
        description: >-
          ニューラル ネットワークの基礎。 PyTorch の基本。 CNN、RNNの概要。トレーニング ループ、損失関数、オプティマイザー。
          GPUトレーニング。転移学習の概念。モデルのシリアル化。
        duration_minutes: 150
        is_free: true
        sort_order: 2
        video_url: null
  - id: section-agent-02
    title: 'パート 2: NLP と大規模言語モデル (LLM)'
    description: NLP、Transformer アーキテクチャ、および人気のあるオープンソース LLM について詳しく説明します
    sort_order: 2
    lessons:
      - id: 019e0a01-bb04-7001-c001-ee0400000001
        title: 'レッスン 4: NLP の基礎 — トークン化、埋め込み、トランスフォーマー'
        slug: bai-4-nlp-tokenization-embeddings-transformer
        description: >-
          NLP パイプライン: トークン化 (BPE、WordPiece、SentencePiece)。 Word の埋め込み
          (Word2Vec、GloVe)。トランスフォーマー アーキテクチャ: セルフ アテンション、マルチヘッド
          アテンション、位置エンコーディング。ハグフェイストランスフォーマーライブラリ。
        duration_minutes: 180
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019e0a01-bb05-7001-c001-ee0500000001
        title: 'レッスン 5: LLM の詳細 - LLaMA、ミストラル、クウェン、ファイ'
        slug: bai-5-llm-deep-dive-llama-mistral-qwen-phi
        description: >-
          オープンソース LLM の詳細な比較: LLaMA 3、Mistral、Qwen
          2.5、Phi-3/4。アーキテクチャの違い、ベンチマーク、使用例。 Ollama、vLLM を使用してローカルで実行します。商用モデル:
          GPT-4、クロード、ジェミニ。
        duration_minutes: 150
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019e0a01-bb06-7001-c001-ee0600000001
        title: 'レッスン 6: LLM の微調整 — LoRA、QLoRA、PEFT'
        slug: bai-6-fine-tuning-llm-lora-qlora-peft
        description: >-
          微調整戦略: 完全な微調整 vs パラメーター効率的。 LoRA、QLoRA、PEFT。データセットの準備、Hugging Face TRL
          によるトレーニング。評価指標。アダプターを結合します。ドメイン固有のタスク向けに Mistral/LLaMA を微調整する練習をします。
        duration_minutes: 180
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019e0a01-bb07-7001-c001-ee0700000001
        title: 'レッスン 7: 迅速なエンジニアリングと LLM 評価'
        slug: bai-7-prompt-engineering-llm-evaluation
        description: >-
          迅速なエンジニアリング手法: ゼロショット、少数ショット、思考の連鎖、思考のツリー。システムプロンプト、構造化された出力。
          LLM評価：BLEU、ROUGE、人間評価。裁判官としてのLLM。ベンチマークフレームワーク。
        duration_minutes: 120
        is_free: true
        sort_order: 6
        video_url: null
  - id: section-agent-03
    title: 'パート 3: RAG、埋め込み、ベクトル データベース'
    description: ベクトルデータベースと高度な検索技術を備えた完全な RAG システムを構築します
    sort_order: 3
    lessons:
      - id: 019e0a01-bb08-7001-c001-ee0800000001
        title: 'レッスン 8: 埋め込みとセマンティック検索の基礎'
        slug: bai-8-embeddings-semantic-search
        description: >-
          テキスト埋め込み: 文変換、OpenAI 埋め込み。埋め込みモデルの比較。コサイン類似性、セマンティック検索。チャンク戦略:
          固定サイズ、セマンティック、再帰的。 PDF、Web、データベース用のドキュメント ローダー。
        duration_minutes: 150
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019e0a01-bb09-7001-c001-ee0900000001
        title: 'レッスン 9: ベクトル データベース — FAISS、Milvus、松ぼっくり'
        slug: bai-9-vector-database-faiss-milvus-pinecone
        description: >-
          Vector DB の概念: インデックス作成 (IVF、HNSW、PQ)、類似性検索。地域開発のためのFAISS。 Milvus
          分散セットアップ。松ぼっくりマネージド サービス。 Chroma、Weaviateの代替品。パフォーマンスのベンチマーク、コストの比較。
        duration_minutes: 180
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019e0a01-bb10-7001-c001-ee1000000001
        title: 'レッスン 10: RAG パイプライン — LangChain と LlamaIndex'
        slug: bai-10-rag-pipeline-langchain-llamaindex
        description: >-
          RAG アーキテクチャ: インデックス作成、取得、生成。 LangChain RAG チェーン。 LlamaIndex データ
          フレームワーク。ドキュメント処理パイプライン。レトリーバーの種類。応答の合成。 RAGASによる評価。完全な RAG
          チャットボットの構築を練習します。
        duration_minutes: 180
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019e0a01-bb11-7001-c001-ee1100000001
        title: 'レッスン 11: 高度な RAG — 再ランキング、HyDE、セルフ RAG'
        slug: bai-11-advanced-rag-reranking-hyde-self-rag
        description: >-
          高度な検索: ハイブリッド検索 (スパース + デンス)、再ランキング (Cohere、クロスエンコーダー)。クエリ変換:
          HyDE、マルチクエリ、ステップバック プロンプト。セルフラグ、クラッグ。エージェント RAG、グラフ RAG。生産の最適化。
        duration_minutes: 150
        is_free: true
        sort_order: 10
        video_url: null
  - id: section-agent-04
    title: 'パート 4: AI エージェントとエージェントベースのシステム'
    description: コースの中心 — AI エージェントを概念からマルチエージェント実稼働システムまで構築する
    sort_order: 4
    lessons:
      - id: 019e0a01-bb12-7001-c001-ee1200000001
        title: 'レッスン 12: AI エージェントの基礎 — 概念とアーキテクチャ'
        slug: bai-12-ai-agent-fundamentals-concepts
        description: >-
          AIエージェントとは何ですか？エージェント対チャットボット対パイプライン。核となる要素: 認識、推論、行動。エージェント アーキテクチャ:
          ReAct、計画と実行、リフレクション。エージェントループ、状態管理。 AI エージェントの分類。現実世界の使用例。
        duration_minutes: 150
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019e0a01-bb13-7001-c001-ee1300000001
        title: 'レッスン 13: ツール呼び出し、関数呼び出し、ReAct パターン'
        slug: bai-13-tool-calling-function-calling-react
        description: >-
          関数呼び出し API (OpenAI、Anthropic)。ツール定義、スキーマ設計。
          ReActパターンの実装。ツールの選択、エラー処理、再試行ロジック。カスタム ツール: Web 検索、データベース クエリ、API
          呼び出し、コード実行。ツール呼び出しを使用してエージェントを構築する練習をします。
        duration_minutes: 180
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019e0a01-bb14-7001-c001-ee1400000001
        title: 'レッスン 14: マルチエージェント システム — CrewAI、AutoGen、LangGraph'
        slug: bai-14-multi-agent-crewai-autogen-langgraph
        description: >-
          マルチエージェント アーキテクチャ: 階層型、協調型、競合型。 CrewAI フレームワーク。 Microsoft AutoGen。
          LangGraph ステート マシン。エージェントの通信プロトコル。オーケストレーション パターン。複雑なタスクに対応するマルチエージェント
          チームの構築を練習します。
        duration_minutes: 180
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019e0a01-bb15-7001-c001-ee1500000001
        title: 'レッスン 15: AI エージェントの記憶、計画、推論'
        slug: bai-15-memory-planning-reasoning-ai-agent
        description: >-
          記憶の種類: 短期 (会話)、長期 (ベクター ストア)、エピソード。計画戦略:
          タスクの分解、サブ目標の生成。思考連鎖の推論。自己反省、反復改良。人間参加型パターン。
        duration_minutes: 150
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019e0a01-bb16-7001-c001-ee1600000001
        title: 'レッスン 16: Production AI エージェントの構築 — エンドツーエンド プロジェクト'
        slug: bai-16-production-ai-agent-end-to-end
        description: >-
          Capstone プロジェクト: 完全な AI エージェント システムを構築します。要件分析、アーキテクチャ設計。 RAG +
          ツール呼び出し + マルチエージェント。会話管理、ストリーミング応答。エラー処理、フォールバック戦略。 AI
          エージェントのテスト。デモの展開。
        duration_minutes: 240
        is_free: true
        sort_order: 15
        video_url: null
  - id: section-agent-05
    title: 'パート 5: API、マイクロサービス、MLOps'
    description: FastAPI、Docker、MLOps パイプラインを使用して本番環境に対応した AI サービスを構築する
    sort_order: 5
    lessons:
      - id: 019e0a01-bb17-7001-c001-ee1700000001
        title: 'レッスン 17: AI サービス用の FastAPI'
        slug: bai-17-fastapi-ai-services
        description: >-
          FastAPI の基礎: async/await、Pydantic モデル、依存関係の注入。ストリーミング応答
          (SSE)。リアルタイムチャット用のWebSocket。ファイルのアップロード処理。認証、レート制限。 OpenAPI
          ドキュメント。バックグラウンドタスク。
        duration_minutes: 150
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019e0a01-bb18-7001-c001-ee1800000001
        title: 'レッスン 18: AI 用の Docker およびマイクロサービス アーキテクチャ'
        slug: bai-18-docker-microservices-ai
        description: >-
          AI 用 Docker: マルチステージ ビルド、GPU サポート、モデル キャッシュ。ローカル開発用の Docker
          Compose。マイクロサービス パターン: API ゲートウェイ、サービス メッシュ。メッセージキュー
          (Redis、RabbitMQ)。サービスの分離: 推論、埋め込み、取得、オーケストレーション。
        duration_minutes: 150
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019e0a01-bb19-7001-c001-ee1900000001
        title: 'レッスン 19: MLOps — CI/CD、モニタリング、モデル レジストリ'
        slug: bai-19-mlops-cicd-monitoring-model-registry
        description: >-
          MLOps の基礎: モデルのバージョン管理、実験の追跡 (MLflow、W&B)。 AI 用の CI/CD パイプライン: GitHub
          Actions、テスト戦略。モデルレジストリ。モニタリング: レイテンシ、品質メトリクス、ドリフト検出。ロギングと可観測性
          (LangSmith)。
        duration_minutes: 150
        is_free: true
        sort_order: 18
        video_url: null
  - id: section-agent-06
    title: 'パート 6: AI システムの導入と運用'
    description: クラウド上で AI システムを展開、拡張、保護する
    sort_order: 6
    lessons:
      - id: 019e0a01-bb20-7001-c001-ee2000000001
        title: 'レッスン 20: クラウドのデプロイ — AI のための AWS、Azure、GCP'
        slug: bai-20-cloud-deployment-aws-azure-gcp
        description: >-
          AWS: SageMaker、Bedrock、Lambda。 Azure: OpenAI サービス、ML Studio。 GCP: 頂点
          AI。 AI ワークロード用の Kubernetes。サーバーレスインスタンスと専用 GPU
          インスタンス。コードとしてのインフラストラクチャ (Terraform)。コストの見積もり。
        duration_minutes: 180
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019e0a01-bb21-7001-c001-ee2100000001
        title: 'レッスン 21: スケーリング、キャッシュ、コストの最適化'
        slug: bai-21-scaling-caching-cost-optimization
        description: >-
          スケーリング戦略: 水平、自動スケーリング、負荷分散。キャッシュレイヤー: Redis、セマンティックキャッシュ。モデルの量子化
          (GPTQ、AWQ、GGUF)。推論リクエストのバッチ処理。トークン使用の最適化。コスト分析と予算編成。
        duration_minutes: 150
        is_free: true
        sort_order: 20
        video_url: null
      - id: 019e0a01-bb22-7001-c001-ee2200000001
        title: 'レッスン 22: セキュリティ、ガードレール、責任ある AI'
        slug: bai-22-security-guardrails-responsible-ai
        description: >-
          AI セキュリティ: プロンプト インジェクション、データ ポイズニング、モデル抽出。ガードレール フレームワーク (NeMo
          ガードレール、ガードレール AI)。コンテンツ フィルタリング、PII 検出。レート制限、乱用防止。責任ある AI:
          偏見の軽減、公平性、透明性。コンプライアンス (GDPR、AI 法)。
        duration_minutes: 150
        is_free: true
        sort_order: 21
        video_url: null
locale: ja
---

