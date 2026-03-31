---
id: 019d8b37-aa01-7001-b001-ff0800000001
title: "Time Series AI: Dự đoán & Phân tích Chuỗi Thời gian"
slug: time-series-ai-du-doan-chuoi-thoi-gian
description: >-
  Khóa học toàn diện về Time Series AI — từ Statistical Methods (ARIMA, ETS),
  Machine Learning (XGBoost, LightGBM), đến Deep Learning (LSTM, Transformer,
  TimesFM). Ứng dụng forecasting, anomaly detection, classification. Thực hành
  với Python, statsmodels, scikit-learn, PyTorch, và các framework chuyên dụng.
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
  name: AI & Machine Learning
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
    title: "Phần 1: Nền tảng Time Series Analysis"
    description: EDA, decomposition, stationarity, statistical tests
    sort_order: 1
    lessons:
      - id: 019d8b37-bb01-7001-c001-ee0100000001
        title: 'Bài 1: Time Series Fundamentals — EDA & Decomposition'
        slug: bai-1-time-series-fundamentals
        description: >-
          Time series components: trend, seasonality, residual. STL decomposition. Stationarity tests: ADF, KPSS. ACF/PACF plots. pandas time series.
        duration_minutes: 120
        is_free: true
        sort_order: 0
        video_url: null
      - id: 019d8b37-bb02-7002-c002-ee0200000002
        title: 'Bài 2: Statistical Models — ARIMA, SARIMA & ETS'
        slug: bai-2-arima-sarima-ets
        description: >-
          ARIMA(p,d,q) model. Seasonal ARIMA. Exponential Smoothing (ETS). Model selection: AIC, BIC. statsmodels implementation.
        duration_minutes: 150
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8b37-bb03-7003-c003-ee0300000003
        title: 'Bài 3: Prophet & Modern Statistical Forecasting'
        slug: bai-3-prophet-forecasting
        description: >-
          Facebook Prophet. Additive/multiplicative seasonality. Holiday effects. Change points. NeuralProphet. Comparison benchmarks.
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
  - id: section-ts-02
    title: "Phần 2: Machine Learning cho Time Series"
    description: Feature engineering, tree models, multi-step forecasting
    sort_order: 2
    lessons:
      - id: 019d8b37-bb04-7004-c004-ee0400000004
        title: 'Bài 4: Feature Engineering cho Time Series'
        slug: bai-4-feature-engineering
        description: >-
          Lag features, rolling statistics. Calendar features. Fourier features cho seasonality. Target encoding. tsfresh auto features.
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8b37-bb05-7005-c005-ee0500000005
        title: 'Bài 5: XGBoost & LightGBM cho Forecasting'
        slug: bai-5-xgboost-lightgbm
        description: >-
          Tree-based models cho time series. Direct vs recursive forecasting. Multi-step prediction. Cross-validation cho time series. Kaggle winning solutions.
        duration_minutes: 150
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019d8b37-bb06-7006-c006-ee0600000006
        title: 'Bài 6: Multi-variate & Hierarchical Forecasting'
        slug: bai-6-multivariate-hierarchical
        description: >-
          Vector Autoregression (VAR). Granger causality. Hierarchical time series. Reconciliation methods. Global vs local models.
        duration_minutes: 120
        is_free: true
        sort_order: 5
        video_url: null
  - id: section-ts-03
    title: "Phần 3: Deep Learning cho Time Series"
    description: LSTM, Transformer, foundation models cho forecasting
    sort_order: 3
    lessons:
      - id: 019d8b37-bb07-7007-c007-ee0700000007
        title: 'Bài 7: LSTM & Sequence Models cho Time Series'
        slug: bai-7-lstm-sequence-models
        description: >-
          LSTM architecture cho forecasting. Seq2Seq. Encoder-decoder. Attention mechanism. DeepAR. PyTorch implementation.
        duration_minutes: 150
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8b37-bb08-7008-c008-ee0800000008
        title: 'Bài 8: Transformers cho Time Series — PatchTST, iTransformer'
        slug: bai-8-transformers-time-series
        description: >-
          Transformer adaptation cho time series. PatchTST. iTransformer. Informer, Autoformer. Channel-independent vs channel-mixing.
        duration_minutes: 180
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8b37-bb09-7009-c009-ee0900000009
        title: 'Bài 9: Foundation Models — TimesFM, Chronos & Moirai'
        slug: bai-9-foundation-models
        description: >-
          Pre-trained time series models. Google TimesFM. Amazon Chronos. Salesforce Moirai. Zero-shot forecasting. Fine-tuning strategies.
        duration_minutes: 150
        is_free: true
        sort_order: 8
        video_url: null
  - id: section-ts-04
    title: "Phần 4: Ứng dụng & Production"
    description: Anomaly detection, classification, production forecasting
    sort_order: 4
    lessons:
      - id: 019d8b37-bb10-7010-c010-ee1000000010
        title: 'Bài 10: Anomaly Detection trong Time Series'
        slug: bai-10-anomaly-detection
        description: >-
          Statistical methods: Z-score, IQR. Isolation Forest. Autoencoders cho anomaly. Transformer-based detection. Real-time monitoring.
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8b37-bb11-7011-c011-ee1100000011
        title: 'Bài 11: Time Series Classification & Clustering'
        slug: bai-11-classification-clustering
        description: >-
          DTW distance. Shapelet-based. Rocket/MiniRocket. InceptionTime. Time series clustering. Transfer learning.
        duration_minutes: 120
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8b37-bb12-7012-c012-ee1200000012
        title: 'Bài 12: Financial Time Series & Quantitative Trading'
        slug: bai-12-financial-time-series
        description: >-
          Stock prediction challenges. Technical indicators. Alpha factor research. Backtesting framework. Risk management. ML limitations.
        duration_minutes: 150
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8b37-bb13-7013-c013-ee1300000013
        title: 'Bài 13: Production Forecasting Pipeline'
        slug: bai-13-production-pipeline
        description: >-
          MLOps cho forecasting. Model monitoring & retraining. Feature store. Batch vs real-time prediction. Uncertainty quantification.
        duration_minutes: 150
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019d8b37-bb14-7014-c014-ee1400000014
        title: 'Bài 14: Capstone — Demand Forecasting System'
        slug: bai-14-capstone-forecasting
        description: >-
          Dự án tổng kết: Build demand forecasting system — EDA, multiple models comparison, ensemble, deploy pipeline. Dashboard & monitoring.
        duration_minutes: 240
        is_free: true
        sort_order: 13
        video_url: null
---
