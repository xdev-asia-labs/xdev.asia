---
id: 019c9619-aa07-7007-b007-aa0700000007
title: 'MLOps と LLMOps: AI を本番環境に導入する'
slug: mlops-llmops
description: >-
  MLOps と LLMOps に関する詳細なコース - AI モデルをプロトタイプから本番環境に安全かつ効果的に移行する技術。実験の追跡、ML の
  CI/CD から、LLM の可観測性、コストの最適化、ガードレール、コンプライアンスまで。 AI で最も高収入のスキル。
featured_image: uploads/2026/03/mlops-llmops-cover.png
level: advanced
duration_hours: 40
lesson_count: 12
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-03-29T14:00:00.000000Z'
created_at: '2026-03-29T14:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019c9618-bb00-7000-b000-bb0000000001
  name: AI と機械学習
  slug: ai-machine-learning
tags:
  - name: MLOps
    slug: mlops
  - name: LLMOps
    slug: llmops
  - name: MLflow
    slug: mlflow
  - name: Weights & Biases
    slug: wandb
  - name: Docker
    slug: docker
  - name: Kubernetes
    slug: kubernetes
  - name: CI/CD
    slug: cicd
  - name: LangSmith
    slug: langsmith
  - name: Langfuse
    slug: langfuse
  - name: cost optimization
    slug: cost-optimization
  - name: production
    slug: production
  - name: monitoring
    slug: monitoring
  - name: AI
    slug: ai
sections:
  - id: section-mlops-01
    title: 'パート 1: MLOps の基礎'
    description: MLOps プラットフォーム — 実験の追跡、バージョン管理、再現性
    sort_order: 1
    lessons:
      - id: 019c9619-ac01-7001-d101-ac0100000001
        title: 'レッスン 1: MLOps とは何ですか? — ML のライフサイクルと成熟度レベル'
        slug: bai-1-mlops-la-gi
        description: >-
          ML プロジェクトの 87% が本番環境に到達できないのはなぜですか? MLOps ライフサイクル: データ → トレーニング → デプロイ
          → 監視 → 再トレーニング。 Google MLOps 成熟度レベル (0 ～ 2)。 DevOps 対 MLOps 対
          LLMOps。チームの役割と責任。
        duration_minutes: 90
        is_free: true
        sort_order: 0
        video_url: null
      - id: 019c9619-ac02-7002-d102-ac0200000002
        title: 'レッスン 2: 実験の追跡 — MLflow、重み、バイアス'
        slug: bai-2-experiment-tracking
        description: >-
          実験の管理: パラメータ、メトリクス、アーティファクトのログ記録。 MLflow と重みとバイアスと Neptune を比較します。実践:
          トレーニングの実行を追跡し、モデルを比較し、結果を再現します。共同実験管理。
        duration_minutes: 150
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019c9619-ac03-7003-d103-ac0300000003
        title: 'レッスン 3: データのバージョン管理と機能ストア'
        slug: bai-3-data-versioning
        description: >-
          DVC (データ バージョン コントロール): 大規模なデータセットのバージョン管理。フィーチャー ストアの概念: オンライン
          ストアとオフライン ストア。祝祭の枠組み。データリネージの追跡。再現可能なトレーニング パイプライン。
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
  - id: section-mlops-02
    title: 'パート 2: モデルの管理と展開'
    description: モデル レジストリ、ML 用の CI/CD、およびインフラストラクチャ
    sort_order: 2
    lessons:
      - id: 019c9619-ac04-7004-d104-ac0400000004
        title: 'レッスン 4: モデル レジストリ、バージョン管理、パッケージ化'
        slug: bai-4-model-registry
        description: >-
          モデル レジストリ: ステージング → 運用 → アーカイブ。モデルのバージョン管理のベスト プラクティス。パッケージ化:
          BentoML、MLflow pyfunc、ONNX エクスポート。モデルカードとドキュメント。ガバナンスと承認のワークフロー。
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019c9619-ac05-7005-d105-ac0500000005
        title: 'レッスン 5: ML 用の CI/CD — テストおよび検証パイプライン'
        slug: bai-5-cicd-cho-ml
        description: >-
          ML の CI/CD は、通常のソフトウェアと比べてどのように異なりますか?データ検証、モデル テスト
          (単体テスト、統合テスト、パフォーマンス テスト)。 ML 用の GitHub アクション / GitLab
          CI。自動再トレーニングトリガー。
        duration_minutes: 150
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019c9619-ac06-7006-d106-ac0600000006
        title: 'レッスン 6: インフラストラクチャ — Docker、Kubernetes、クラウド ML'
        slug: bai-6-infrastructure
        description: >-
          Docker を使用して ML モデルをコンテナ化します。 ML サービス用の Kubernetes: KServe、Seldon
          Core。 Cloud ML プラットフォーム: Vertex AI、SageMaker、Azure ML。サーバーレス推論。
          GPU管理と自動スケーリング。
        duration_minutes: 180
        is_free: true
        sort_order: 5
        video_url: null
  - id: section-mlops-03
    title: 'パート 3: LLMOps — LLM 時代の AI の運用'
    description: LLM システムを運用する場合の相違点と特殊性
    sort_order: 3
    lessons:
      - id: 019c9619-ac07-7007-d107-ac0700000007
        title: 'レッスン 7: LLMOps と MLOps — パラダイム シフト'
        slug: bai-7-llmops-vs-mlops
        description: >-
          LLMOps と MLOps の違い: API ファースト、プロンプト中心、非決定的な出力。複合 AI システム
          アーキテクチャ。基礎モデルの選択戦略。構築か購入かの意思決定フレームワーク。
        duration_minutes: 120
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019c9619-ac08-7008-d108-ac0800000008
        title: 'レッスン 8: 迅速な管理と A/B テスト'
        slug: bai-8-prompt-management
        description: >-
          コードとしてのプロンプト: バージョン管理、テンプレート、動的プロンプト。プロンプトの A/B テスト
          フレームワーク。段階的なロールアウト。即時分析: トークンの使用状況、レイテンシ、品質指標。
          PromptLayer、Humanloop、Braintrust。
        duration_minutes: 150
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019c9619-ac09-7009-d109-ac0900000009
        title: 'レッスン 9: LLM 可観測性 — LangSmith、Langfuse、Arize'
        slug: bai-9-llm-observability
        description: >-
          LLM 呼び出しのトレース: スパン、トレース、メタデータ。ラングスミスの詳細。自己ホスト型の可観測性のための
          Langfuse。ドリフト検出用の Arize Phoenix。コスト追跡、遅延監視、品質スコアリング。異常に対する警告システム。
        duration_minutes: 180
        is_free: true
        sort_order: 8
        video_url: null
  - id: section-mlops-04
    title: 'パート 4: 優れた生産性'
    description: コストの最適化、安全性、コンプライアンス、およびプラットフォームの設計
    sort_order: 4
    lessons:
      - id: 019c9619-ac10-7010-d110-ac1000000010
        title: 'レッスン 10: コストの最適化 — キャッシュ、ルーティング、量子化'
        slug: bai-10-cost-optimization
        description: >-
          セマンティック キャッシュ: API コストを 30 ～ 50% 削減します。モデル ルーティング:
          単純なクエリには小規模/安価なモデルを使用します。量子化: セルフホストの場合は
          INT4/INT8。バッチ処理。トークンの予算管理。月次コスト分析ダッシュボード。
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019c9619-ac11-7011-d111-ac1100000011
        title: 'レッスン 11: ガードレール、安全性、コンプライアンス'
        slug: bai-11-guardrails-compliance
        description: >-
          入出力ガードレール: PII フィルタリング、毒性検出、即時注入防御。 NeMo ガードレール フレームワーク。 EU AI
          法の概要。企業向けの AI ガバナンス。監査証跡と説明可能性。レッドチームと高度なテスト。
        duration_minutes: 150
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019c9619-ac12-7012-d112-ac1200000012
        title: 'レッスン 12: Capstone — ML プラットフォームをゼロから構築する'
        slug: bai-12-capstone
        description: >-
          プロジェクトの概要: 完全なミニ ML プラットフォームを構築します。 MLflow 実験追跡、モデル レジストリ、CI/CD
          パイプライン、ルーティング + キャッシュを備えた LLM ゲートウェイ、可観測性ダッシュボード、コスト監視。 Docker Compose
          にデプロイします。
        duration_minutes: 240
        is_free: true
        sort_order: 11
        video_url: null
reviews: []
quizzes: []
locale: ja
---

## シリーズのご紹介

**MLOps と LLMOps: AI を本番環境に導入** は、「Jupyter Notebook 上で実行される AI」と「本番環境で数百万のユーザーにサービスを提供する AI」の間の**ギャップを埋める**ことを目指す人のためのコースです。

> 🎯 **厳しい現実:** ML プロジェクトの 87% は **決して本番環境に移行しません**。 MLOps/LLMOps は、**13% の成功**を可能にするスキル セットであり、AI 分野で最高の報酬を得ることができます。

## 何を学ぶのですか?

### パート 1: MLOps の基礎
- **レッスン 1:** MLOps とは何ですか? ML ライフサイクル、Google 成熟度レベル
- **レッスン 2:** 実験の追跡: MLflow、重み、バイアス
- **レッスン 3:** データ バージョニング (DVC) と機能ストア (Feast)

### パート 2: モデルの管理と展開
- **レッスン 4:** モデル レジストリ、バージョン管理、パッケージ化
- **レッスン 5:** ML 用 CI/CD: テスト、検証、自動再トレーニング
- **レッスン 6:** インフラストラクチャ: Docker、Kubernetes、Cloud ML プラットフォーム

### パート 3: LLMOps
- **レッスン 7:** 🔥 LLMOps と MLOps — パラダイム シフト
- **レッスン 8:** 迅速な管理と A/B テスト
- **レッスン 9:** 🔥 LLM 可観測性: LangSmith、Langfuse、Arize

### パート 4: 優れた生産性
- **レッスン 10:** コストの最適化: キャッシュ、ルーティング、量子化
- **レッスン 11:** ガードレール、安全性およびコンプライアンス (EU AI 法)
- **レッスン 12:** Capstone: ML プラットフォームをゼロから構築する

## 入力が必要です

- **高度な Python** (非同期、デコレータ、クラス、テスト)
- ML/DL (トレーニング、評価、推論) の基本的な理解
- 基本的な Docker (dockerfile、docker-compose)
- 1 つ以上の ML/LLM プロジェクトでの **実務経験** は大きな利点です

## 使用したツール

```
Python 3.11+          | Ngôn ngữ chính
MLflow                | Experiment tracking & registry
Weights & Biases      | Advanced experiment tracking
DVC                   | Data version control
Docker / K8s          | Containerization & orchestration
GitHub Actions        | CI/CD pipelines
LangSmith / Langfuse  | LLM observability
FastAPI               | Model serving API
Grafana / Prometheus  | Monitoring dashboards
```

## すべての AI シリーズを比較

| | AIとLLM |ビルドエージェント |微調整 |プロンプトエンジニアリング|ラグ |コンピュータビジョン | **MLOps** |
|---|---|---|---|---|---|---|---|
| **焦点** |理論 |エージェントアプリ |絞り込む |スキルプロンプト |個人データ |写真/ビデオ | **生産** |
| **オブジェクト** |初心者 |中級 |中級 |みんな |中級 |中級 | **上級** |
| **コードが必要ですか?** |パイソン |パイソン |パイソン |オプション |パイソン |パイソン | Python + DevOps |
| **難易度** | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐→⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | **⭐⭐⭐⭐** |
