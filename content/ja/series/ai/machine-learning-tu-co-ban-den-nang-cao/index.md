---
id: 019d8b39-aa01-7001-b001-ff1000000001
title: '機械学習: 基本から高度まで'
slug: machine-learning-tu-co-ban-den-nang-cao
description: >-
  初心者向けの機械学習ロードマップは、直感が先、コードは後、数学は十分という、わかりやすい方法に従ってゼロから始まります。このコースは、環境設定、最初のモデル、適切な評価、過剰適合/データ漏洩の防止から、一般的なモデル
  (線形、ロジスティック、ツリー、XGBoost)、教師なし、時系列、実稼働環境への展開まで続きます。レッスンの各クラスターには、ミニプロジェクト、実際の課題、明確な出力チェックリストが含まれています。
featured_image: uploads/2026/03/machine-learning-tu-co-ban-den-nang-cao-cover.png
level: beginner
duration_hours: 72
lesson_count: 24
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-04-02T10:00:00.000000Z'
created_at: '2026-04-02T10:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019c9618-bb00-7000-b000-bb0000000001
  name: AI と機械学習
  slug: ai-machine-learning
tags:
  - name: Machine Learning
    slug: machine-learning
  - name: Supervised Learning
    slug: supervised-learning
  - name: Unsupervised Learning
    slug: unsupervised-learning
  - name: scikit-learn
    slug: scikit-learn
  - name: Feature Engineering
    slug: feature-engineering
  - name: Model Evaluation
    slug: model-evaluation
  - name: Ensemble Learning
    slug: ensemble-learning
  - name: XGBoost
    slug: xgboost
  - name: MLOps
    slug: mlops
  - name: Python
    slug: python
  - name: AI
    slug: ai
sections:
  - id: section-ml-00
    title: 'パート 0: 初心者のための入門 (第 0 週)'
    description: 環境をインストールし、最低限のPython/Pandasを学び、最初のモデルを作成する
    sort_order: 1
    lessons:
      - id: 019d8b39-bb01-7001-c001-ee0100000001
        title: 'レッスン 1: ML とは何ですか?無理せずに勉強する方法'
        slug: bai-1-ml-la-gi
        description: AI/ML/ディープラーニングを実際の例と比較します。エンドツーエンドのワークフローと実践指向の ML 学習の考え方を紹介します。
        duration_minutes: 90
        is_free: true
        sort_order: 0
        video_url: null
      - id: 019d8b39-bb02-7002-c002-ee0200000002
        title: 'レッスン 2: 実稼働標準の ML 学習環境をセットアップする'
        slug: bai-2-setup-moi-truong-ml
        description: >-
          Python、Jupyter、VS Code、NumPy/Pandas/scikit-learn をインストールします。プロジェクト
          テンプレートを作成し、依存関係とノートブック ワークフローを管理します。
        duration_minutes: 90
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8b39-bb03-7003-c003-ee0300000003
        title: 'レッスン 3: ML のための Python/Pandas 短期集中コース'
        slug: bai-3-python-pandas-crash-course
        description: >-
          DataFrame、フィルタリング、groupby、merge、基本的な欠損データ処理、および Python
          データに慣れていない人向けの高速 EDA。
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8b39-bb04-7004-c004-ee0400000004
        title: 'レッスン 4: 30 分で最初のモデル + ベースライン'
        slug: bai-4-model-dau-tien-baseline
        description: scikit-learn を使用して最初のモデルを作成し、ベースラインとは何か、最適化する前に常にベースラインが必要な理由を理解します。
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8b39-bb05-7005-c005-ee0500000005
        title: 'レッスン 5: ミニプロジェクト 1 — 住宅価格の予測'
        slug: bai-5-mini-project-1-du-doan-gia-nha
        description: '最初の完全な練習セッション: 単純な EDA、トレーニング/テスト分割、ベースライン モデル、評価および学んだ教訓。'
        duration_minutes: 150
        is_free: true
        sort_order: 4
        video_url: null
  - id: section-ml-01
    title: 'パート 1: 教師あり学習の基礎'
    description: 回帰、分類、およびコア指標
    sort_order: 2
    lessons:
      - id: 019d8b39-bb06-7006-c006-ee0600000006
        title: 'レッスン 6: 線形回帰と直感的な勾配降下法'
        slug: bai-6-linear-regression-gradient-descent
        description: 回帰モデルのデバッグに十分な、損失関数、勾配降下法、正則化をわかりやすいレベルで理解します。
        duration_minutes: 120
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8b39-bb07-7007-c007-ee0700000007
        title: 'レッスン 7: ロジスティック回帰と分類の確率'
        slug: bai-7-logistic-regression
        description: ロジスティック回帰、シグモイド、決定境界、しきい値、および予測確率を適切に読み取る方法。
        duration_minutes: 120
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8b39-bb08-7008-c008-ee0800000008
        title: 'レッスン 8: 重要な指標: 精度、精度、再現率、F1、AUC'
        slug: bai-8-metrics-quan-trong
        description: >-
          ビジネス上の問題に応じて適切な指標を選択してください。 ROC-AUC の代わりに PR-AUC
          を使用する場合。間違った目標に向けて最適化することは避けてください。
        duration_minutes: 90
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8b39-bb09-7009-c009-ee0900000009
        title: 'レッスン 9: 過学習/過小学習とその修正方法'
        slug: bai-9-overfitting-underfitting
        description: 学習曲線、検証曲線、バイアス分散トレードオフ、体系的なモデル改善戦略。
        duration_minutes: 120
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019d8b39-bb10-7010-c010-ee1000000010
        title: 'レッスン 10: ミニプロジェクト 2 — 顧客離れの予測'
        slug: bai-10-mini-project-2-churn
        description: 教師あり学習を実際の分類問題に適用し、製品の観点から結果を提示します。
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
  - id: section-ml-02
    title: 'パート 2: 業界標準のワークフロー'
    description: パイプライン、CV、ダーティデータの処理とデータ漏洩の防止
    sort_order: 3
    lessons:
      - id: 019d8b39-bb11-7011-c011-ee1100000011
        title: 'レッスン 11: 欠損値、カテゴリ変数、特徴量エンジニアリング'
        slug: bai-11-missing-categorical-feature-engineering
        description: '実際のデータ処理プロセス: 欠損、エンコード、スケーリング、外れ値の処理、および基本的な特徴のクロス。'
        duration_minutes: 150
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8b39-bb12-7012-c012-ee1200000012
        title: 'レッスン 12: scikit-learn を使用したパイプラインと ColumnTransformer'
        slug: bai-12-pipelines-columntransformer
        description: 手動エラーに耐性があり、再利用性が高く、トレーニングでの漏洩のリスクを軽減するパイプラインを構築します。
        duration_minutes: 120
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8b39-bb13-7013-c013-ee1300000013
        title: 'レッスン 13: 相互検証とハイパーパラメータ調整'
        slug: bai-13-cross-validation-tuning
        description: >-
          KFold/StratifiedKFold、GridSearch/RandomizedSearch、およびより信頼性の高いモデルを選択するためのチューニング結果の読み方。
        duration_minutes: 150
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019d8b39-bb14-7014-c014-ee1400000014
        title: 'レッスン 14: データ漏洩とエラー分析 (必須)'
        slug: bai-14-data-leakage-error-analysis
        description: 一般的なリークを特定し、予測ミスのパターンを調査し、推測ではなく実際のエラーに基づいて改善を計画します。
        duration_minutes: 120
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8b39-bb15-7015-c015-ee1500000015
        title: 'レッスン 15: 60 分間のチャレンジ — 上級住宅価格'
        slug: bai-15-challenge-house-prices
        description: 'タイムボックス化されたチャレンジ: 完全なパイプラインを構築し、制御されたチューニング + 機能エンジニアリングでスコアを向上させます。'
        duration_minutes: 120
        is_free: true
        sort_order: 14
        video_url: null
  - id: section-ml-03
    title: 'パート 3: 使用するのに十分な高度なアルゴリズム'
    description: ツリー アンサンブル、教師なし、異常検出、時系列
    sort_order: 4
    lessons:
      - id: 019d8b39-bb16-7016-c016-ee1600000016
        title: 'レッスン 16: デシジョン ツリー、ランダム フォレスト、XGBoost'
        slug: bai-16-decision-tree-random-forest-xgboost
        description: ツリーベースのモデルを比較し、機能の重要性、オーバーフィッティング制御、データに応じたモデルの選択方法を理解します。
        duration_minutes: 180
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8b39-bb17-7017-c017-ee1700000017
        title: 'レッスン 17: クラスタリング (K 平均法、DBSCAN、階層型)'
        slug: bai-17-clustering
        description: ラベルがない場合の顧客セグメンテーションとデータ構造検出のための教師なし学習。
        duration_minutes: 120
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019d8b39-bb18-7018-c018-ee1800000018
        title: 'レッスン 18: 視覚化のための PCA、t-SNE、UMAP'
        slug: bai-18-pca-tsne-umap
        description: データの次元を削減してクラスターを理解し、異常を検出し、ダウンストリーム モデルのパフォーマンスを向上させます。
        duration_minutes: 120
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8b39-bb19-7019-c019-ee1900000019
        title: 'レッスン 19: 実際のシステムにおける異常検出'
        slug: bai-19-anomaly-detection
        description: Isolation Forest、One-Class SVM、および不正行為に対する警告ルール、ログ監視、品質管理を設計します。
        duration_minutes: 120
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019d8b39-bb20-7020-c020-ee2000000020
        title: 'レッスン 20: 基本的な時系列予測'
        slug: bai-20-time-series-forecasting
        description: ウォークフォワード検証、ラグ機能、ベースライン予測、および基本的な需要予測アプリケーション。
        duration_minutes: 150
        is_free: true
        sort_order: 19
        video_url: null
  - id: section-ml-04
    title: 'パート 4: 制作、説明可能性、キャップストーン'
    description: モデルを最適化し、品質を監視し、持続的に展開する
    sort_order: 5
    lessons:
      - id: 019d8b39-bb21-7021-c021-ee2100000021
        title: 'レッスン 21: ステークホルダーに対する説明可能性と公平性'
        slug: bai-21-explainability-fairness
        description: SHAP、順列の重要性、公平性チェック、ビジネス チームがモデルを理解して信頼できるように結果を提示する方法。
        duration_minutes: 120
        is_free: true
        sort_order: 20
        video_url: null
      - id: 019d8b39-bb22-7022-c022-ee2200000022
        title: 'レッスン 22: FastAPI + Docker を使用したモデル提供'
        slug: bai-22-model-serving-fastapi-docker
        description: モデルをパッケージ化し、推論 API を構築し、モデルをバージョン管理して、コンパクトな ML サービスをデプロイします。
        duration_minutes: 150
        is_free: true
        sort_order: 21
        video_url: null
      - id: 019d8b39-bb23-7023-c023-ee2300000023
        title: 'レッスン 23: モニタリング、ドリフト検出、再トレーニング'
        slug: bai-23-monitoring-drift-retraining
        description: 導入後の品質を監視し、ドリフトを検出し、再トレーニング ループと最小限のアラートを設計します。
        duration_minutes: 120
        is_free: true
        sort_order: 22
        video_url: null
      - id: 019d8b39-bb24-7024-c024-ee2400000024
        title: 'レッスン 24: Capstone — エンドツーエンドの ML プロジェクト + デモ'
        slug: bai-24-capstone-ml-end-to-end
        description: >-
          ルーブリックに従ってプロジェクトを完了します。ベースライン -> パイプライン -> チューニング -> 評価 -> API ->
          モニタリング -> ビジネス向け 1 ページのレポート。
        duration_minutes: 240
        is_free: true
        sort_order: 23
        video_url: null
locale: ja
---

## このシリーズは誰に向けたものですか?

このシリーズは、ML をゼロから学ぶ初心者、特に次のような方を対象としています。

- 基本的な Python は知っていますが、ML プロジェクトの実行には自信がありません。
- いくつかの個別のアルゴリズムを学習しましたが、それらをまだ完全なプロセスに組み立てていません。
・分かりやすく学びたい、たくさん練習したい、公式の詰め込みは避けたい。

## どのように学習しますか?

各レッスンは固定フレームに従って設計されています。

1. 直感: まず「なぜ」を理解します。
2. コード: 最小限の例を実行し、パラメーターを編集して違いを確認します。
3. 数学だけで十分: 結果の読み取りとモデルのデバッグに必要な部分のみを学習します。
4. チェックリスト: 学習を完了した後に何をしなければならないかを明確に知ってください。

## シリーズ後の出力

完了すると、以下が得られます。

- 1 つの再利用可能なエンドツーエンド ML パイプライン。
- 適切な指標を選択し、データ漏洩を回避するスキル。
- パイプライン、相互検証、標準チューニングの使用経験。
- ポートフォリオに含める明確なルーブリックを含む 1 つのキャップストーン プロジェクト。

## ファストトラック

- パート 0: 初心者のための入門 (セットアップ + 最初のモデル + ベースライン)。
- パート 1: 教師あり学習の基礎 (回帰/分類/メトリクス)。
- パート 2: 産業用ワークフロー (パイプライン/CV/漏れ/エラー分析)。
- パート 3: 使用するのに十分な高度なアルゴリズム (ツリー、クラスタリング、時系列)。
- パート 4: 制作 + 説明可能性 + キャップストーン。

## 混乱しないように勉強するための推奨方法

- 毎週 2 ～ 3 レッスンを学習し、演習を完了することを優先します。
- ベースラインを得る前に、いきなり複雑なモデルに取り掛からないでください。
- レッスンごとに、仮説、結果、学んだ教訓の 3 つのアイデアを記録します。

まったく初めての方は、パート 0 から正しい順序で始めてください。
