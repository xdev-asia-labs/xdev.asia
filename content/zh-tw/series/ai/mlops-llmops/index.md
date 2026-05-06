---
id: 019c9619-aa07-7007-b007-aa0700000007
title: MLOps 和 LLMOps：將 AI 引入生產
slug: mlops-llmops
description: >-
  關於 MLOps 和 LLMOps 的深入課程 — 將 AI 模型從原型安全有效地引入生產的藝術。從實驗追蹤、ML 的 CI/CD，到 LLM
  可觀察性、成本優化、護欄和合規性。人工智慧領域薪酬最高的技能。
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
  name: 人工智慧與機器學習
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
    title: 第 1 部分：MLOps 基礎知識
    description: MLOps 平台 — 實驗追蹤、版本控制與再現性
    sort_order: 1
    lessons:
      - id: 019c9619-ac01-7001-d101-ac0100000001
        title: 第 1 課：什麼是 MLOps？ — 機器學習生命週期與成熟度等級
        slug: bai-1-mlops-la-gi
        description: >-
          為什麼 87% 的 ML 專案未能投入生產？ MLOps 生命週期：資料 → 訓練 → 部署 → 監控 → 再訓練。 Google
          MLOps 成熟度等級 (0-2)。 DevOps、MLOps 與 LLMOps。團隊角色和職責。
        duration_minutes: 90
        is_free: true
        sort_order: 0
        video_url: null
      - id: 019c9619-ac02-7002-d102-ac0200000002
        title: 第 2 課：實驗追蹤 — MLflow & 權重與偏差
        slug: bai-2-experiment-tracking
        description: 管理實驗：記錄參數、指標、工件。比較 MLflow、權重和偏差與 Neptune。實踐：追蹤訓練運行、比較模型、重現結果。協作實驗管理。
        duration_minutes: 150
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019c9619-ac03-7003-d103-ac0300000003
        title: 第 3 課：資料版本控制與特徵存儲
        slug: bai-3-data-versioning
        description: DVC（資料版本控制）：對大型資料集進行版本控制。功能商店概念：線上商店與離線商店。盛宴框架。數據沿襲追蹤。可重複的訓練管道。
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
  - id: section-mlops-02
    title: 第 2 部分：模型管理與部署
    description: 模型登錄、ML 的 CI/CD 和基礎設施
    sort_order: 2
    lessons:
      - id: 019c9619-ac04-7004-d104-ac0400000004
        title: 第 4 課：模型註冊、版本控制與打包
        slug: bai-4-model-registry
        description: >-
          模型註冊：暫存→生產→存檔。模型版本控制最佳實務。打包：BentoML、MLflow pyfunc、ONNX
          導出。模型卡和文件。治理和審批工作流程。
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019c9619-ac05-7005-d105-ac0500000005
        title: 第 5 課：ML 的 CI/CD — 測試和驗證管道
        slug: bai-5-cicd-cho-ml
        description: >-
          與常規軟體相比，ML 的 CI/CD 有何不同？資料驗證、模型測​​試（單元測試、整合測試、效能測試）。 GitHub Actions /
          GitLab CI for ML。自動再訓練觸發器。
        duration_minutes: 150
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019c9619-ac06-7006-d106-ac0600000006
        title: 第 6 課：基礎設施 — Docker、Kubernetes 和 Cloud ML
        slug: bai-6-infrastructure
        description: >-
          使用 Docker 將 ML 模型容器化。用於 ML 服務的 Kubernetes：KServe、Seldon Core。雲端 ML
          平台：Vertex AI、SageMaker、Azure ML。無伺服器推理。 GPU 管理和自動縮放。
        duration_minutes: 180
        is_free: true
        sort_order: 5
        video_url: null
  - id: section-mlops-03
    title: 第 3 部分：LLMOps — LLM 時代的人工智慧操作
    description: 操作LLM系統時的差異與特殊性
    sort_order: 3
    lessons:
      - id: 019c9619-ac07-7007-d107-ac0700000007
        title: 第 7 課：LLMOps 與 MLOps — 典範轉移
        slug: bai-7-llmops-vs-mlops
        description: >-
          LLMOps 與 MLOps 有何不同：API
          優先、以提示為中心、非確定性輸出。複合人工智慧系統架構。基礎模型選擇策略。建構與購買決策框架。
        duration_minutes: 120
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019c9619-ac08-7008-d108-ac0800000008
        title: 第 8 課：及時管理和 A/B 測試
        slug: bai-8-prompt-management
        description: >-
          提示即程式碼：版本控制、範本、動態提示。用於提示的 A/B 測試框架。分階段推出。及時分析：令牌使用、延遲、品質指標。
          PromptLayer、Humanloop、Braintrust。
        duration_minutes: 150
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019c9619-ac09-7009-d109-ac0900000009
        title: 第 9 課：法學碩士可觀察性 — LangSmith、Langfuse 和 Arize
        slug: bai-9-llm-observability
        description: >-
          跟踪 LLM 调用：跨度、跟踪、元数据。朗史密斯深入研究。 Langfuse 用於自託管可觀察性。 Arize Phoenix
          用於漂移檢測。成本追蹤、延遲監控、品質評分。異常警報系統。
        duration_minutes: 180
        is_free: true
        sort_order: 8
        video_url: null
  - id: section-mlops-04
    title: 第 4 部分：卓越生產
    description: 成本優化、安全性、合規性和平台設計
    sort_order: 4
    lessons:
      - id: 019c9619-ac10-7010-d110-ac1000000010
        title: 第 10 課：成本最佳化 — 快取、路由與量化
        slug: bai-10-cost-optimization
        description: >-
          語意緩存：降低 API 成本 30-50%。模型路由：使用小型/便宜模型進行簡單查詢。量化：自架的
          INT4/INT8。批次處理。代幣預算管理。每月成本分析儀表板。
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019c9619-ac11-7011-d111-ac1100000011
        title: 第 11 課：護欄、安全與合規性
        slug: bai-11-guardrails-compliance
        description: >-
          輸入/輸出護欄：PII過濾、毒性偵測、及時注入防禦。 NeMo Guardrails
          框架。歐盟人工智慧法案概述。企業的人工智慧治理。審計追蹤和可解釋性。紅隊和高級測試。
        duration_minutes: 150
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019c9619-ac12-7012-d112-ac1200000012
        title: 第 12 課：Capstone — 從頭開始建置 ML 平台
        slug: bai-12-capstone
        description: >-
          專案摘要：建立一個完整的迷你機器學習平台。 MLflow 實驗追蹤、模型註冊、CI/CD 管道、具有路由 + 快取的 LLM
          閘道、可觀察性儀表板、成本監控。在 Docker Compose 上部署。
        duration_minutes: 240
        is_free: true
        sort_order: 11
        video_url: null
reviews: []
quizzes: []
locale: zh-tw
---

## 系列介紹

**MLOps 和 LLMOps：將 AI 引入生產** 是為那些想要 **彌合「在 Jupyter 筆記本上運行的 AI」和「在生產中為數百萬用戶提供服務的 AI」之間的差距**的人開設的課程。

> 🎯 **殘酷的現實：** 87% 的機器學習專案 **從未**投入生產。 MLOps/LLMOps 是让您获得**13% 成功**的技能组合，也是人工智能领域薪酬最高的技能。

## 你會學到什麼？

### 第 1 部分：MLOps 基礎知識
- **第 1 課：** 什麼是 MLOps？ ML 生命週期、Google 成熟度等級
- **第 2 課：** 實驗追蹤：MLflow & 權重 & 偏差
- **第 3 課：** 資料版本控制 (DVC) 與特徵儲存（盛宴）

### 第 2 部分：模型管理與部署
- **第 4 課：** 模型註冊、版本控制和打包
- **第 5 課：** ML 的 CI/CD：測驗、驗證、自動再訓練
- **第 6 课：** 基础设施：Docker、Kubernetes、云机器学习平台

### 第 3 部分：LLMOps
- **第 7 課：** 🔥 LLMOps 與 MLOps — 範式轉移
- **第 8 課：** 及時管理和 A/B 測試
- **第 9 課：** 🔥 LLM 可觀察性：LangSmith、Langfuse、Arize

### 第 4 部分：卓越生產
- **第 10 課：** 成本優化：快取、路由、量化
- **第 11 課：** 護欄、安全與合規（歐盟人工智慧法案）
- **第 12 課：** 頂點：從頭開始建立 ML 平台

## 需要輸入

- **高級Python**（非同步、裝飾器、類別、測試）
- 對 ML/DL（訓練、評估、推理）的基本了解
- 基本 Docker（dockerfile、docker-compose）
- **擁有 1 個以上 ML/LLM 專案的實務經驗**是一大優勢

## 使用的工具

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

## 比較所有AI系列

| |人工智慧與法學碩士 |建設代理|微調|提示工程師。 |抹布|電腦視覺 | **MLOps** |
|---|---|---|---|---|---|---|---|
| **焦點** |理論|代理應用程式 |精煉|技能提示|私人資料|照片/影片| **生產** |
| **对象** |初学者 |中级|中级|大家 |中级|中级| **高级** |
| **需要程式碼嗎？ ** |蟒蛇 |蟒蛇 |蟒蛇 |可選|蟒蛇 |蟒蛇 | Python + 開發營運 |
| **難度等級** | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐→⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | **⭐⭐⭐
