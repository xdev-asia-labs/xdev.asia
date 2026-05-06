---
id: 019d8b36-aa01-7001-b001-ff0700000001
title: 'レコメンデーション システム: 基本から本番まで'
slug: he-thong-goi-y-recommendation-systems
description: >-
  レコメンデーション システムに関する包括的なコース — 協調フィルタリング、コンテンツベース、行列分解から、2 タワーのグラフ ニューラル
  ネットワーク、シーケンス モデルを使用したディープ ラーニング RecSys まで。 Python、PyTorch、LightFM
  を実際に使用し、本番環境に対応したレコメンデーション エンジンをデプロイします。
featured_image: uploads/2026/03/he-thong-goi-y-recommendation-systems-cover.png
level: intermediate
duration_hours: 42
lesson_count: 14
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-03-31T10:00:00.000000Z'
created_at: '2026-03-31T10:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019c9618-bb00-7000-b000-bb0000000001
  name: AI と機械学習
  slug: ai-machine-learning
tags:
  - name: Recommendation Systems
    slug: recommendation-systems
  - name: Collaborative Filtering
    slug: collaborative-filtering
  - name: Matrix Factorization
    slug: matrix-factorization
  - name: Deep RecSys
    slug: deep-recsys
  - name: Two-Tower
    slug: two-tower
  - name: Graph Neural Networks
    slug: graph-neural-networks
  - name: Personalization
    slug: personalization
  - name: PyTorch
    slug: pytorch
  - name: Python
    slug: python
  - name: AI
    slug: ai
sections:
  - id: section-rec-01
    title: 'パート 1: レコメンデーション システム プラットフォーム'
    description: 協調フィルタリング、コンテンツベースのハイブリッドアプローチ
    sort_order: 1
    lessons:
      - id: 019d8b36-bb01-7001-c001-ee0100000001
        title: 'レッスン 1: レコメンデーション システムとは何ですか? — 概要と分類'
        slug: bai-1-recsys-tong-quan
        description: >-
          RecSysの風景。コラボレーション vs コンテンツベース vs ハイブリッド。明示的なフィードバックと暗黙的なフィードバック。評価指標:
          NDCG、MAP、ヒット率。
        duration_minutes: 90
        is_free: true
        sort_order: 0
        video_url: null
      - id: 019d8b36-bb02-7002-c002-ee0200000002
        title: 'レッスン 2: 協調フィルタリング — ユーザーベースおよびアイテムベース'
        slug: bai-2-collaborative-filtering
        description: 'ユーザーベースの CF: 類似性メトリクス。アイテム系CF。近所のメソッド。コサイン類似度、ピアソン相関。コールドスタートの問題。'
        duration_minutes: 120
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8b36-bb03-7003-c003-ee0300000003
        title: 'レッスン 3: 行列分解 — SVD、ALS、BPR'
        slug: bai-3-matrix-factorization
        description: 'SVD 分解。 ALS: 交互最小二乗法。 BPR: ベイジアン パーソナライズド ランキング。暗黙的なフィードバックの処理。驚きの図書館。'
        duration_minutes: 150
        is_free: true
        sort_order: 2
        video_url: null
  - id: section-rec-02
    title: 'パート 2: レコメンデーションのための深層学習'
    description: ニューラル協調フィルタリング、埋め込み、2 タワー
    sort_order: 2
    lessons:
      - id: 019d8b36-bb04-7004-c004-ee0400000004
        title: 'レッスン 4: RecSys のコンテンツベースおよび機能エンジニアリング'
        slug: bai-4-content-based-features
        description: >-
          コンテンツベースのフィルタリング。 TF-IDF、埋め込み機能。ユーザー/アイテムのプロファイリング。 RecSys
          の機能ストア。ライトFMハイブリッド。
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8b36-bb05-7005-c005-ee0500000005
        title: 'レッスン 5: ニューラル協調フィルタリングと埋め込み'
        slug: bai-5-neural-cf-embedding
        description: NCF アーキテクチャ。レイヤーの埋め込み。 GMF + MLP。ワイド＆ディープ。ディープFM。インタラクション学習機能を搭載。
        duration_minutes: 150
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019d8b36-bb06-7006-c006-ee0600000006
        title: 'レッスン 6: 2 つのタワーのアーキテクチャと検索'
        slug: bai-6-two-tower-retrieval
        description: '2 タワー モデル: ユーザー タワー + アイテム タワー。近似最近傍 (ANN)。ファイス、スキャン。大規模な候補者の生成。'
        duration_minutes: 150
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8b36-bb07-7007-c007-ee0700000007
        title: 'レッスン 7: シーケンス モデル — GRU4Rec、SASRec、トランスフォーマー'
        slug: bai-7-sequence-models-recsys
        description: 'セッションベースの推奨事項。 GRU4Rec.セルフアテンション: SASRec、BERT4Rec。シーケンシャル推奨のトランス。'
        duration_minutes: 150
        is_free: true
        sort_order: 6
        video_url: null
  - id: section-rec-03
    title: 'パート 3: 高度な RecSys — ナレッジ グラフ、マルチタスク、GNN'
    description: グラフベースの、知識を意識した、多目的な推奨事項
    sort_order: 3
    lessons:
      - id: 019d8b36-bb08-7008-c008-ee0800000008
        title: 'レッスン 8: レコメンデーションのためのグラフ ニューラル ネットワーク'
        slug: bai-8-gnn-recommendation
        description: ユーザー項目の 2 部グラフ。ライトGCN。ピンセージ。推奨事項のメッセージ受け渡し。 PyGの実装。
        duration_minutes: 150
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8b36-bb09-7009-c009-ee0900000009
        title: 'レッスン 9: ナレッジ グラフの推奨事項'
        slug: bai-9-knowledge-graph-recsys
        description: ナレッジグラフの埋め込み。 KGAT。サイド情報の統合。 KG パスを介した説明可能な推奨事項。
        duration_minutes: 120
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019d8b36-bb10-7010-c010-ee1000000010
        title: 'レッスン 10: マルチタスクと複数の目的のランキング'
        slug: bai-10-multi-task-ranking
        description: 'マルチタスク学習: CTR + CVR。 MMOE、PLE アーキテクト。再ランキング。多様性、公平性、新規性の目標。'
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
  - id: section-rec-04
    title: 'パート 4: RecSys の運用 — 導入と拡張'
    description: 実稼働アーキテクチャ、A/B テスト、リアルタイム提供
    sort_order: 4
    lessons:
      - id: 019d8b36-bb11-7011-c011-ee1100000011
        title: 'レッスン 11: LLM を活用した推奨事項'
        slug: bai-11-llm-recommendations
        description: 推薦者としてLLM。会話型 RecSys。プロンプトベースの推奨事項。製品検索ならRAG。 LLM + 従来の RecSys ハイブリッド。
        duration_minutes: 150
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8b36-bb12-7012-c012-ee1200000012
        title: 'レッスン 12: 本番環境の RecSys アーキテクチャ'
        slug: bai-12-production-recsys-architecture
        description: '3 段階のパイプライン: 候補の生成 → スコアリング → 再ランキング。特集ストア。リアルタイムとバッチ。 100万規模のシステム設計。'
        duration_minutes: 150
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8b36-bb13-7013-c013-ee1300000013
        title: 'レッスン 13: RecSys の A/B テストと評価'
        slug: bai-13-ab-testing-evaluation
        description: オンラインとオフラインの指標。 A/B テストのフレームワーク。インターリーブ。反事実的な評価。ビジネス指標の調整。
        duration_minutes: 120
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019d8b36-bb14-7014-c014-ee1400000014
        title: 'レッスン 14: Capstone — E コマース レコメンデーション エンジン'
        slug: bai-14-capstone-recsys
        description: >-
          プロジェクトの概要: e コマース レコメンデーション エンジンをエンドツーエンドで構築します。 2 タワーの取得 + 再ランキング +
          A/B テスト + デプロイメント。
        duration_minutes: 240
        is_free: true
        sort_order: 13
        video_url: null
locale: ja
---

