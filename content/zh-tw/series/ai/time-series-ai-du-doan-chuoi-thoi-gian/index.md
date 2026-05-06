---
id: 019d8b37-aa01-7001-b001-ff0800000001
title: 時間序列人工智慧：時間序列分析與預測
slug: time-series-ai-du-doan-chuoi-thoi-gian
description: >-
  關於時間序列 AI 的綜合課程 —
  從統計方法（ARIMA、ETS）、機器學習（XGBoost、LightGBM）到深度學習（LSTM、Transformer、TimesFM）。預測、異常檢測、分類的應用。使用
  Python、statsmodels、scikit-learn、PyTorch 和專用框架進行練習。
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
  name: 人工智慧與機器學習
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
    title: 第 1 部分：時間序列分析基礎
    description: EDA、分解、平穩性、統計測試
    sort_order: 1
    lessons:
      - id: 019d8b37-bb01-7001-c001-ee0100000001
        title: 第 1 課：時間序列基礎 — EDA 與分解
        slug: bai-1-time-series-fundamentals
        description: 時間序列成分：趨勢、季節性、殘差。 STL分解。平穩性檢定：ADF、KPSS。 ACF/PACF 圖。熊貓時間序列。
        duration_minutes: 120
        is_free: true
        sort_order: 0
        video_url: null
      - id: 019d8b37-bb02-7002-c002-ee0200000002
        title: 第 2 課：統計模型 — ARIMA、SARIMA 和 ETS
        slug: bai-2-arima-sarima-ets
        description: 'ARIMA(p,d,q) 模型。季節性 ARIMA。指數平滑 (ETS)。型號選擇：AIC、BIC。統計模型的實作。'
        duration_minutes: 150
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8b37-bb03-7003-c003-ee0300000003
        title: 第 3 課：先知與現代統計預測
        slug: bai-3-prophet-forecasting
        description: 臉書預言家。加法/乘法季節性。節日效應。換點。神經先知。比較基準。
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
  - id: section-ts-02
    title: 第 2 部分：時間序列的機器學習
    description: 特徵工程、樹模型、多步驟預測
    sort_order: 2
    lessons:
      - id: 019d8b37-bb04-7004-c004-ee0400000004
        title: 第 4 課：時間序列的特徵工程
        slug: bai-4-feature-engineering
        description: 滯後特徵，滾動統計。日曆功能。季節性的傅立葉特徵。目標編碼。 tsfresh 汽車功能。
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8b37-bb05-7005-c005-ee0500000005
        title: 第 5 課：用於預測的 XGBoost 和 LightGBM
        slug: bai-5-xgboost-lightgbm
        description: 基於樹的時間序列模型。直接預測與遞歸預測。多步驟預測。時間序列的交叉驗證。 Kaggle 獲勝解決方案。
        duration_minutes: 150
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019d8b37-bb06-7006-c006-ee0600000006
        title: 第 6 課：多變量和分層預測
        slug: bai-6-multivariate-hierarchical
        description: 向量自回歸（VAR）。格蘭傑因果關係。分層時間序列。和解方法。全球模型與本地模型。
        duration_minutes: 120
        is_free: true
        sort_order: 5
        video_url: null
  - id: section-ts-03
    title: 第 3 部分：時間序列深度學習
    description: LSTM、Transformer、預測基礎模型
    sort_order: 3
    lessons:
      - id: 019d8b37-bb07-7007-c007-ee0700000007
        title: 第 7 課：LSTM 和時間序列的序列模型
        slug: bai-7-lstm-sequence-models
        description: 用於預測的 LSTM 架構。序列2序列。編碼器-解碼器。注意力機制。 DeepAR。 PyTorch 實作。
        duration_minutes: 150
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8b37-bb08-7008-c008-ee0800000008
        title: 第 8 課：時間序列轉換器 — PatchTST、iTransformer
        slug: bai-8-transformers-time-series
        description: >-
          時間序列的變壓器適應。補丁TST。 i變壓器。線人，自動變壓器。 Channel-independent vs
          channel-mixing.
        duration_minutes: 180
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8b37-bb09-7009-c009-ee0900000009
        title: 第 9 課：基礎模型 — TimesFM、Chronos 和 Moirai
        slug: bai-9-foundation-models
        description: 預先訓練的時間序列模型。谷歌時報FM。亞馬遜計時碼表。 Salesforce Moirai。零樣本預測。微調策略。
        duration_minutes: 150
        is_free: true
        sort_order: 8
        video_url: null
  - id: section-ts-04
    title: 第四部分：應用與生產
    description: 異常檢測、分類、生產預測
    sort_order: 4
    lessons:
      - id: 019d8b37-bb10-7010-c010-ee1000000010
        title: 第 10 課：時間序列中的異常檢測
        slug: bai-10-anomaly-detection
        description: 統計方法：Z-score、IQR。隔離森林。異常的自動編碼器。基於變壓器的檢測。即時監控。
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8b37-bb11-7011-c011-ee1100000011
        title: 第 11 課：時間序列分類與聚類
        slug: bai-11-classification-clustering
        description: DTW 距離。基於 Shapelet。火箭/迷你火箭。起始時間。時間序列聚類。遷移學習。
        duration_minutes: 120
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8b37-bb12-7012-c012-ee1200000012
        title: 第 12 課：金融時間序列與量化交易
        slug: bai-12-financial-time-series
        description: 庫存預測挑戰。技術指標。阿爾法因子研究。回測框架。風險管理。機器學習的限制。
        duration_minutes: 150
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8b37-bb13-7013-c013-ee1300000013
        title: 第 13 課：生產預測流程
        slug: bai-13-production-pipeline
        description: 用於預測的 MLOps。模型監控和再培訓。特色商店。批量預測與即時預測。不確定性量化。
        duration_minutes: 150
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019d8b37-bb14-7014-c014-ee1400000014
        title: 第 14 課：Capstone — 需求預測系統
        slug: bai-14-capstone-forecasting
        description: 專案概要：建置需求預測系統－EDA、多模型比較、整合、部署管道。儀表板和監控。
        duration_minutes: 240
        is_free: true
        sort_order: 13
        video_url: null
locale: zh-tw
---

