---
id: 019d8b39-aa01-7001-b001-ff1000000001
title: 機器學習：從基礎到高級
slug: machine-learning-tu-co-ban-den-nang-cao
description: >-
  初學者的機器學習路線圖從零開始，遵循易於理解的方法：直覺第一，程式碼第二，數學就夠了。課程從環境設定、第一個模型、正確評估、過度擬合/資料外洩預防，到常見模型（線性、邏輯、樹、XGBoost）、無監督、時間序列和生產部署。每組課程都有迷你項目、現實生活中的挑戰和清晰的輸出清單。
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
  name: 人工智慧與機器學習
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
    title: 第 0 部分：新手入門（第 0 週）
    description: 安裝環境，學習最少的Python/Pandas，製作第一個模型
    sort_order: 1
    lessons:
      - id: 019d8b39-bb01-7001-c001-ee0100000001
        title: 第 1 課：什麼是機器學習？如何學習而不被淹沒
        slug: bai-1-ml-la-gi
        description: 將人工智慧/機器學習/深度學習與現實生活中的例子進行比較。引入端到端工作流程和實踐導向的機器學習學習思維。
        duration_minutes: 90
        is_free: true
        sort_order: 0
        video_url: null
      - id: 019d8b39-bb02-7002-c002-ee0200000002
        title: 第 2 課：設定生產標準 ML 學習環境
        slug: bai-2-setup-moi-truong-ml
        description: >-
          安裝Python、Jupyter、VS
          Code、NumPy/Pandas/scikit-learn；建立專案範本、管理依賴項和筆記本工作流程。
        duration_minutes: 90
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8b39-bb03-7003-c003-ee0300000003
        title: 第 3 課：Python/Pandas 機器學習速成課程
        slug: bai-3-python-pandas-crash-course
        description: DataFrame、過濾、groupby、合併、基本缺失資料處理以及不熟悉 Python 資料的人員的快速 EDA。
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8b39-bb04-7004-c004-ee0400000004
        title: 第 4 課：30 分鐘內的第一個模型 + 基線
        slug: bai-4-model-dau-tien-baseline
        description: 使用 scikit-learn 建立您的第一個模型，以了解基線是什麼以及為什麼在優化之前始終需要基線。
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8b39-bb05-7005-c005-ee0500000005
        title: 第 5 課：迷你項目 1 — 預測房價
        slug: bai-5-mini-project-1-du-doan-gia-nha
        description: 第一個完整的練習課程：簡單的 EDA、訓練/測驗分割、基準模型、評估和經驗教訓。
        duration_minutes: 150
        is_free: true
        sort_order: 4
        video_url: null
  - id: section-ml-01
    title: 第 1 部分：監督學習基礎
    description: 迴歸、分類和核心指標
    sort_order: 2
    lessons:
      - id: 019d8b39-bb06-7006-c006-ee0600000006
        title: 第 6 課：線性迴歸和直覺的梯度下降
        slug: bai-6-linear-regression-gradient-descent
        description: 以易於理解的程度理解損失函數、梯度下降和正則化，足以調試迴歸模型。
        duration_minutes: 120
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8b39-bb07-7007-c007-ee0700000007
        title: 第 7 課：Logistic 迴歸與分類機率
        slug: bai-7-logistic-regression
        description: 邏輯迴歸、S形、決策邊界、閾值以及如何正確讀取預測機率。
        duration_minutes: 120
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8b39-bb08-7008-c008-ee0800000008
        title: 第 8 課：重要指標：準確率、精確率、召回率、F1、AUC
        slug: bai-8-metrics-quan-trong
        description: 根據業務問題選擇合適的指標；何時使用 PR-AUC 而不是 ROC-AUC；避免針對錯誤的目標進行最佳化。
        duration_minutes: 90
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8b39-bb09-7009-c009-ee0900000009
        title: 第 9 課：過度擬合/欠擬合以及如何修復它
        slug: bai-9-overfitting-underfitting
        description: 學習曲線、驗證曲線、偏差-方差權衡和系統模型改進策略。
        duration_minutes: 120
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019d8b39-bb10-7010-c010-ee1000000010
        title: 第 10 課：迷你專案 2 — 預測客戶流失
        slug: bai-10-mini-project-2-churn
        description: 將監督學習應用於實際的分類問題，並從產品角度呈現結果。
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
  - id: section-ml-02
    title: 第 2 部分：業界標準工作流程
    description: Pipeline、CV、處理髒資料、防止資料外洩
    sort_order: 3
    lessons:
      - id: 019d8b39-bb11-7011-c011-ee1100000011
        title: 第 11 課：缺失值、分類變數、特徵工程
        slug: bai-11-missing-categorical-feature-engineering
        description: 實際資料處理過程：缺失、編碼、縮放、異常值處理和基本特徵交叉。
        duration_minutes: 150
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8b39-bb12-7012-c012-ee1200000012
        title: 第 12 課：使用 scikit-learn 進行管道和 ColumnTransformer
        slug: bai-12-pipelines-columntransformer
        description: 建構抗人工錯誤、復用性好的管道，降低訓練中外流的風險。
        duration_minutes: 120
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8b39-bb13-7013-c013-ee1300000013
        title: 第 13 課：交叉驗證與超參數調優
        slug: bai-13-cross-validation-tuning
        description: KFold/StratifiedKFold、GridSearch/RandomizedSearch，以及如何讀取調優結果以選擇更可靠的模型。
        duration_minutes: 150
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019d8b39-bb14-7014-c014-ee1400000014
        title: 第 14 課：資料外洩與錯誤分析（必修）
        slug: bai-14-data-leakage-error-analysis
        description: 識別常見的洩漏，調查錯誤預測模式，並根據實際錯誤而不是猜測來計劃改進。
        duration_minutes: 120
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8b39-bb15-7015-c015-ee1500000015
        title: 第 15 課：挑戰 60 分鐘 — 先進房價
        slug: bai-15-challenge-house-prices
        description: 限時挑戰：建造完整的管道並透過受控調整+特徵工程提高分數。
        duration_minutes: 120
        is_free: true
        sort_order: 14
        video_url: null
  - id: section-ml-03
    title: 第 3 部分：足以使用的高階演算法
    description: 樹集成、無監督、異常檢測和時間序列
    sort_order: 4
    lessons:
      - id: 019d8b39-bb16-7016-c016-ee1600000016
        title: 第 16 課：決策樹、隨機森林、XGBoost
        slug: bai-16-decision-tree-random-forest-xgboost
        description: 比較基於樹的模型，了解特徵重要性、過度擬合控制以及如何根據資料選擇模型。
        duration_minutes: 180
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8b39-bb17-7017-c017-ee1700000017
        title: 第 17 課：聚類（K-Means、DBSCAN、分層）
        slug: bai-17-clustering
        description: 在沒有標籤的情況下進行客戶細分和資料結構發現的無監督學習。
        duration_minutes: 120
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019d8b39-bb18-7018-c018-ee1800000018
        title: 第 18 課：PCA、t-SNE、UMAP 用於視覺化
        slug: bai-18-pca-tsne-umap
        description: 降低資料維度以了解叢集、檢測異常並提高下游模型效能。
        duration_minutes: 120
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8b39-bb19-7019-c019-ee1900000019
        title: 第 19 課：真實系統中的異常偵測
        slug: bai-19-anomaly-detection
        description: 隔離森林、One-Class SVM 並設計詐欺警告規則、日誌監控、品質控制。
        duration_minutes: 120
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019d8b39-bb20-7020-c020-ee2000000020
        title: 第 20 課：基本時間序列預測
        slug: bai-20-time-series-forecasting
        description: 步進驗證、滯後特徵、基線預測和基本需求預測應用。
        duration_minutes: 150
        is_free: true
        sort_order: 19
        video_url: null
  - id: section-ml-04
    title: 第 4 部分：生產、可解釋性和頂點
    description: 優化模型、監控品質並永續部署
    sort_order: 5
    lessons:
      - id: 019d8b39-bb21-7021-c021-ee2100000021
        title: 第 21 課：利害關係人的可解釋性和公平性
        slug: bai-21-explainability-fairness
        description: SHAP、排列重要性、公平性檢查以及如何呈現結果，以便業務團隊能夠理解並信任該模型。
        duration_minutes: 120
        is_free: true
        sort_order: 20
        video_url: null
      - id: 019d8b39-bb22-7022-c022-ee2200000022
        title: 第 22 課：使用 FastAPI + Docker 進行模型服務
        slug: bai-22-model-serving-fastapi-docker
        description: 打包模型、建立推理 API、對模型進行版本控制並部署緊湊的 ML 服務。
        duration_minutes: 150
        is_free: true
        sort_order: 21
        video_url: null
      - id: 019d8b39-bb23-7023-c023-ee2300000023
        title: 第 23 課：監控、漂移偵測與再培訓
        slug: bai-23-monitoring-drift-retraining
        description: 部署後監控品質、偵測偏差、設計再訓練循環和最小化警報。
        duration_minutes: 120
        is_free: true
        sort_order: 22
        video_url: null
      - id: 019d8b39-bb24-7024-c024-ee2400000024
        title: 第 24 課：Capstone — 端對端 ML 專案 + 演示
        slug: bai-24-capstone-ml-end-to-end
        description: 依照以下標準完成專案：基準 -> 管道 -> 調整 -> 評估 -> API -> 監控 -> 一頁業務報告。
        duration_minutes: 240
        is_free: true
        sort_order: 23
        video_url: null
locale: zh-tw
---

## 這個系列適合誰？

本系列適合從頭開始學習 ML 的初學者，特別是如果您：

- 了解基本的 Python，但對做 ML 專案沒有信心。
- 已經學習了一些離散演算法，但尚未將它們組裝成一個完整的過程。
- 想要以簡單易懂的方式學習，多練習，避免公式過多。

## 你將如何學習？

每堂課都是按照固定框架設計的：

1.直覺：先了解「為什麼」。
2. 程式碼：運行最小範例，編輯參數以查看差異。
3. 足夠的數學知識：只學習讀取結果和調試模型所需的部分。
4. 清單：清楚知道完成學業後必須做什麼。

## 系列後的輸出

完成後，您將擁有：

- 1 個可重複使用的端對端 ML 管道。
- 選擇正確指標並避免資料外洩的技能。
- 使用管道、交叉驗證、標準調優的經驗。
- 1 個頂點項目，具有明確的標準，可包含在投資組合中。

## 快速通道

- 第 0 部分：新手入門（設定 + 第一個模型 + 基線）。
- 第 1 部分：監督學習基礎（迴歸/分類/指標）。
- 第 2 部分：工業工作流程（管道/CV/洩漏/錯誤分析）。
- 第 3 部分：足以使用的高階演算法（樹、聚類、時間序列）。
- 第 4 部分：生產 + 可解釋性 + 頂點。

## 建議的學習方法不要混淆

- 每週學習 2-3 節課，優先完成練習。
- 在確定基準之前，不要直接跳入複雜的模型。
- 每堂課記錄 3 個想法：假設、結果、經驗教訓。

如果您是全新的，請按照正確的順序從第 0 部分開始。
