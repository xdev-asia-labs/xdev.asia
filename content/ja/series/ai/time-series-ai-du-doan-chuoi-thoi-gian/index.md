---
id: 019d8b37-aa01-7001-b001-ff0800000001
title: 'Time Series AI: 時系列分析と予測'
slug: time-series-ai-du-doan-chuoi-thoi-gian
description: >-
  統計手法 (ARIMA、ETS)、機械学習 (XGBoost、LightGBM) から深層学習 (LSTM、Transformer、TimesFM)
  まで、時系列 AI に関する包括的なコースです。予測、異常検出、分類のアプリケーション。
  Python、statsmodels、scikit-learn、PyTorch、および特殊なフレームワークを使用して練習します。
featured_image: uploads/2026/03/time-series-ai-du-doan-chuoi-thoi-gian-cover.png
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
  - name: Time Series
    slug: time-series
  - name: Forecasting
    slug: forecasting
  - name: Anomaly Detection
    slug: anomaly-detection
  - name: ARIMA
    slug: arima
  - name: LSTM
    slug: lstm
  - name: Transformer
    slug: transformer
  - name: Prophet
    slug: prophet
  - name: Deep Learning
    slug: deep-learning
  - name: Python
    slug: python
  - name: AI
    slug: ai
sections:
  - id: section-ts-01
    title: 'パート 1: 時系列分析の基礎'
    description: EDA、分解、定常性、統計検定
    sort_order: 1
    lessons:
      - id: 019d8b37-bb01-7001-c001-ee0100000001
        title: 'レッスン 1: 時系列の基礎 — EDA と分解'
        slug: bai-1-time-series-fundamentals
        description: '時系列コンポーネント: トレンド、季節性、残差。 STL分解。定常性テスト: ADF、KPSS。 ACF/PACFプロット。パンダの時系列。'
        duration_minutes: 120
        is_free: true
        sort_order: 0
        video_url: null
      - id: 019d8b37-bb02-7002-c002-ee0200000002
        title: 'レッスン 2: 統計モデル — ARIMA、SARIMA、ETS'
        slug: bai-2-arima-sarima-ets
        description: 'ARIMA(p,d,q) モデル。旬のARIMA。指数平滑法 (ETS)。モデル選択：AIC、BIC。統計モデルの実装。'
        duration_minutes: 150
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8b37-bb03-7003-c003-ee0300000003
        title: 'レッスン 3: 預言者と現代の統計的予測'
        slug: bai-3-prophet-forecasting
        description: フェイスブックの預言者。加法的/乗法的な季節性。休日の影響。ポイントを変更します。ニューラル預言者。比較ベンチマーク。
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
  - id: section-ts-02
    title: 'パート 2: 時系列の機械学習'
    description: 特徴量エンジニアリング、ツリーモデル、マルチステップ予測
    sort_order: 2
    lessons:
      - id: 019d8b37-bb04-7004-c004-ee0400000004
        title: 'レッスン 4: 時系列の特徴エンジニアリング'
        slug: bai-4-feature-engineering
        description: ラグ機能、ローリング統計。カレンダー機能。季節性のためのフーリエ特徴。ターゲットのエンコーディング。 tsfresh 自動機能。
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8b37-bb05-7005-c005-ee0500000005
        title: 'レッスン 5: 予測のための XGBoost と LightGBM'
        slug: bai-5-xgboost-lightgbm
        description: 時系列のツリーベースのモデル。直接予測と再帰的予測。マルチステップ予測。時系列の相互検証。 Kaggle の勝利ソリューション。
        duration_minutes: 150
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019d8b37-bb06-7006-c006-ee0600000006
        title: 'レッスン 6: 多変量および階層型の予測'
        slug: bai-6-multivariate-hierarchical
        description: ベクトル自己回帰 (VAR)。グレンジャーの因果関係。階層的な時系列。調整方法。グローバルモデルとローカルモデル。
        duration_minutes: 120
        is_free: true
        sort_order: 5
        video_url: null
  - id: section-ts-03
    title: 'パート 3: 時系列の深層学習'
    description: LSTM、Transformer、予測のための基礎モデル
    sort_order: 3
    lessons:
      - id: 019d8b37-bb07-7007-c007-ee0700000007
        title: 'レッスン 7: LSTM と時系列のシーケンス モデル'
        slug: bai-7-lstm-sequence-models
        description: 予測のための LSTM アーキテクチャ。シーケンス2シーケンスエンコーダ-デコーダ。注意メカニズム。 DeepAR。 PyTorchの実装。
        duration_minutes: 150
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8b37-bb08-7008-c008-ee0800000008
        title: 'レッスン 8: 時系列のトランスフォーマー — PatchTST、iTransformer'
        slug: bai-8-transformers-time-series
        description: >-
          時系列に対するトランスフォーマーの適応。パッチTST。
          iトランスフォーマー。情報屋、オートフォーマー。チャンネル独立とチャンネルミキシング。
        duration_minutes: 180
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8b37-bb09-7009-c009-ee0900000009
        title: 'レッスン 9: 基礎モデル — TimesFM、Chronos、Moirai'
        slug: bai-9-foundation-models
        description: 事前トレーニングされた時系列モデル。グーグルタイムズFM。アマゾンクロノス。 Salesforceモイライ。ゼロショット予測。戦略の微調整。
        duration_minutes: 150
        is_free: true
        sort_order: 8
        video_url: null
  - id: section-ts-04
    title: 'パート 4: アプリケーションと制作'
    description: 異常の検出、分類、生産予測
    sort_order: 4
    lessons:
      - id: 019d8b37-bb10-7010-c010-ee1000000010
        title: 'レッスン 10: 時系列における異常検出'
        slug: bai-10-anomaly-detection
        description: '統計手法: Z スコア、IQR。孤立の森。異常に対するオートエンコーダー。トランスベースの検出。リアルタイム監視。'
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8b37-bb11-7011-c011-ee1100000011
        title: 'レッスン 11: 時系列の分類とクラスタリング'
        slug: bai-11-classification-clustering
        description: DTW距離。シェイプレットベース。ロケット/ミニロケット。インセプションタイム。時系列クラスタリング。転移学習。
        duration_minutes: 120
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8b37-bb12-7012-c012-ee1200000012
        title: 'レッスン 12: 金融時系列と定量的取引'
        slug: bai-12-financial-time-series
        description: 株価予測の課題。テクニカル指標。アルファ因子の研究。バックテストフレームワーク。リスク管理。 ML の制限。
        duration_minutes: 150
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8b37-bb13-7013-c013-ee1300000013
        title: 'レッスン 13: 生産予測パイプライン'
        slug: bai-13-production-pipeline
        description: 予測用の MLOps。モデルのモニタリングと再トレーニング。特集ストア。バッチ予測とリアルタイム予測。不確実性の定量化。
        duration_minutes: 150
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019d8b37-bb14-7014-c014-ee1400000014
        title: 'レッスン 14: Capstone — 需要予測システム'
        slug: bai-14-capstone-forecasting
        description: 'プロジェクトの概要: 需要予測システムの構築 — EDA、複数モデルの比較、アンサンブル、パイプラインの展開。ダッシュボードとモニタリング。'
        duration_minutes: 240
        is_free: true
        sort_order: 13
        video_url: null
locale: ja
---

