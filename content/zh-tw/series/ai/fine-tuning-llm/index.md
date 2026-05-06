---
id: 019c9619-aa03-7003-b003-aa0300000003
title: 微調 LLM：AI 調優的藝術
slug: fine-tuning-llm
description: >-
  關於微調大型語言模型的綜合課程 - 何時微調、資料準備、在 Google Gemini/Vertex AI、OpenAI 和開源 (LoRA/QLoRA)
  上進行微調。比較微調與 RAG、模型評估方法和生產部署。計算實際成本。
featured_image: uploads/2026/03/fine-tuning-llm-cover.png
level: intermediate
duration_hours: 45
lesson_count: 16
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-03-29T12:00:00.000000Z'
created_at: '2026-03-29T12:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019c9618-bb00-7000-b000-bb0000000001
  name: 人工智慧與機器學習
  slug: ai-machine-learning
tags:
  - name: fine-tuning
    slug: fine-tuning
  - name: LLM
    slug: llm
  - name: Google Gemini
    slug: google-gemini
  - name: Vertex AI
    slug: vertex-ai
  - name: LoRA
    slug: lora
  - name: QLoRA
    slug: qlora
  - name: PEFT
    slug: peft
  - name: RAG
    slug: rag
  - name: model evaluation
    slug: model-evaluation
  - name: OpenAI
    slug: openai
  - name: Hugging Face
    slug: hugging-face
  - name: Python
    slug: python
  - name: hands-on
    slug: hands-on
  - name: production
    slug: production
  - name: cost optimization
    slug: cost-optimization
  - name: AI
    slug: ai
sections:
  - id: section-ft-01
    title: 第 1 部分：概述與策略 — 何時進行微調？
    description: 了解何時進行微調、何時使用 RAG、計算成本和投資報酬率
    sort_order: 1
    lessons:
      - id: 019c9619-dd01-7001-e001-dd0100000001
        title: 第一課：什麼是微調？ — 景觀以及為什麼你還不需要它。
        slug: bai-1-fine-tuning-la-gi
        description: 在現代法學碩士背景下定義微調。預訓練 vs SFT vs RLHF/DPO。何時進行微調，何時不進行。決策架構：快速工程→RAG→微調。
        duration_minutes: 90
        is_free: true
        sort_order: 0
        video_url: null
      - id: 019c9619-dd02-7002-e002-dd0200000002
        title: 第 2 課：微調與 RAG——2025 年最大的人工智慧爭論
        slug: bai-2-fine-tuning-vs-rag
        description: >-
          微調與 RAG 的詳細比較：知識差距與行為差距。實用決策清單。混合方法。實際案例研究：當 RAG 獲勝時，當 Fine-tuning
          獲勝時。
        duration_minutes: 120
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019c9619-dd03-7003-e003-dd0300000003
        title: 第 3 課：微調成本 — 在開始之前計算投資報酬率
        slug: bai-3-chi-phi-fine-tuning
        description: >-
          詳細價格表：Google Gemini、OpenAI、Anthropic、自架。計算訓練成本（以 token × epoch
          為單位）。推理成本比較。投資報酬率計算器：微調何時「回報」？預算規劃範本。
        duration_minutes: 90
        is_free: true
        sort_order: 2
        video_url: null
  - id: section-ft-02
    title: 第 2 部分：資料準備 — 所有成功的基礎
    description: 數據品質決定90%的微調結果
    sort_order: 2
    lessons:
      - id: 019c9619-dd04-7004-e004-dd0400000004
        title: 第 4 課：收集和設計資料集以進行微調
        slug: bai-4-thu-thap-thiet-ke-dataset
        description: 資料集類型：指令遵循、對話、分類。標準 JSONL 格式。從日誌、文件、使用者回饋收集資料。合成數據生成。多少數據才夠？質與數量。
        duration_minutes: 150
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019c9619-dd05-7005-e005-dd0500000005
        title: 第 5 課：資料清理與增強－從“垃圾”到“黃金”
        slug: bai-5-data-cleaning-augmentation
        description: 資料清理管道：重複資料刪除、篩選、品質評分。數據增強技術。處理不平衡和邊緣情況。代幣化深入研究。訓練/驗證/測試分割策略。
        duration_minutes: 120
        is_free: true
        sort_order: 4
        video_url: null
  - id: section-ft-03
    title: 第 3 部分：在 Google Gemini / Vertex AI 上進行微調
    description: 在 Google Cloud 平台上親自微調模型
    sort_order: 3
    lessons:
      - id: 019c9619-dd06-7006-e006-dd0600000006
        title: 第 6 課：Google Vertex AI 設定 — 環境與定價
        slug: bai-6-vertex-ai-setup
        description: >-
          設定 Google Cloud 項目、IAM、結算。 Vertex AI SDK 安裝。 GCS 資料桶。配額管理。定價明細詳情：訓練代幣
          × epochs。免費等級和積分。
        duration_minutes: 120
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019c9619-dd07-7007-e007-dd0700000007
        title: 第 7 課：微調 Gemini Flash — 逐步監督調整
        slug: bai-7-fine-tune-gemini-flash
        description: >-
          在 Vertex AI 上親自微調 Gemini 2.0 Flash。將資料集上傳到
          GCS。配置調優作業：epochs、學習率。監控訓練。部署端點。測試微調模型與基本模型。
        duration_minutes: 180
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019c9619-dd08-7008-e008-dd0800000008
        title: 第 8 課：針對生產微調 Gemini — 先進技術
        slug: bai-8-fine-tune-gemini-production
        description: 從大模型→小模型的蒸餾。 Vertex AI 上的超參數優化。綜合評估管道。 A/B 測試基礎與調整。多任務微調。成本優化策略。
        duration_minutes: 150
        is_free: true
        sort_order: 7
        video_url: null
  - id: section-ft-04
    title: 第 4 部分：在 OpenAI 和其他平台上進行微調
    description: 比較多個平台的實踐
    sort_order: 4
    lessons:
      - id: 019c9619-dd09-7009-e009-dd0900000009
        title: 第 9 課：在 OpenAI 上微調 — GPT-4o-mini 和 GPT-4o
        slug: bai-9-fine-tune-openai
        description: OpenAI 逐步微調 API。資料集格式要求。培訓工作管理。推理定價比較。優點和局限性。當 OpenAI > Gemini 時，反之亦然。
        duration_minutes: 150
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019c9619-dd10-7010-e010-dd1000000010
        title: 第 10 課：LoRA 與 QLoRA — 微調開源模型
        slug: bai-10-lora-qlora
        description: >-
          LoRA理論：低秩矩陣分解。 QLoRA：量化+LoRA。使用 Hugging Face PEFT 親自微調 LLaMA 3。免費在
          Google Colab 上運行。比較成本與 API 微調。
        duration_minutes: 210
        is_free: true
        sort_order: 9
        video_url: null
  - id: section-ft-05
    title: 第 5 部分：模型評估 — 方法與指標
    description: 科學地衡量微調模型的質量
    sort_order: 5
    lessons:
      - id: 019c9619-dd11-7011-e011-dd1100000011
        title: 第 11 課：LLM 評量指標 — 從 Perplexity 到 BERTScore
        slug: bai-11-metrics-danh-gia-llm
        description: >-
          全面的指導指標：Perplexity、BLEU、ROUGE、METEOR、BERTScore、Exact
          Match、F1。何時使用哪個指標？每個指標的限制。語意相似性與詞彙重疊。代碼實現了每個指標。
        duration_minutes: 150
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019c9619-dd12-7012-e012-dd1200000012
        title: 第 12 課：法學碩士作為法官和人工評估
        slug: bai-12-llm-as-a-judge
        description: >-
          「LLM 評估
          LLM」－設計評審提示、評分細則。成對比較。多位評審達成共識。手動評估：黃金測試集、註釋指南、註釋者間協議。什麼時候需要人工評估，什麼時候法學碩士法官夠好？
        duration_minutes: 150
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019c9619-dd13-7013-e013-dd1300000013
        title: 第 13 課：評估流程 — 測試像「Pro」這樣的微調模型
        slug: bai-13-evaluation-pipeline
        description: 建立完整的評估流程：黃金測試集設計、自動化基準測試、迴歸測試。用於模型評估的 CI/CD。 A/B 測試框架。災難性遺忘檢測。紅隊。
        duration_minutes: 180
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-ft-06
    title: 第 6 部分：生產和最佳實踐
    description: 將微調後的模型安全地投入生產
    sort_order: 6
    lessons:
      - id: 019c9619-dd14-7014-e014-dd1400000014
        title: 第 14 課：部署 — 有效地服務微調模型
        slug: bai-14-deployment
        description: >-
          部署在 Vertex AI 端點、OpenAI API、自架（vLLM、TGI）上。合併 LoRA
          適配器。多適配器服務。快取和優化。監控品質推斷和漂移檢測。
        duration_minutes: 150
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019c9619-dd15-7015-e015-dd1500000015
        title: 第 15 課：常見陷阱與故障排除
        slug: bai-15-common-pitfalls
        description: 微調時的十大錯誤：災難性遺忘、過度擬合、資料外洩、評估差距。調試技術。何時停止微調並返回即時工程。恢復策略。
        duration_minutes: 120
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019c9619-dd16-7016-e016-dd1600000016
        title: 第 16 課：Capstone — 針對實際用例微調模型
        slug: bai-16-capstone
        description: 總結項目：選擇用例→收集資料→在Gemini + LoRA上微調→比較評估→部署到生產。端到端的工作流程。最佳實踐清單。職業路線圖。
        duration_minutes: 240
        is_free: true
        sort_order: 15
        video_url: null
reviews: []
quizzes: []
locale: zh-tw
---

## 系列介紹

**微調法學碩士：人工智慧調優的藝術**是一門幫助您深入理解和實踐**微調**的課程，即針對您自己的領域、任務或品牌聲音微調大型語言模型的技術。

> 🎯 **本課程回答的核心問題：**
> - 什麼時候需要微調？何時使用 RAG？什麼時候將兩者結合？
> - 微調費用是多少？投資報酬率如何？
> - 如何科學評估微調後的模型？
> - 如何有效部署生產？

## 你會學到什麼？

### 第 1 部分：概述與策略

- **第 1 課：** 什麼是微調？決策架構：快速工程→RAG→微調
- **第 2 課：** 微調與 RAG — 最大的爭論，實用的決策清單
- **第 3 課：** 微調成本 — 詳細價格表、投資報酬率計算器、預算規劃

### 第 2 部分：資料準備

- **第 4 課：** 收集與設計資料集：JSONL 格式、合成資料、品質與數量
- **第 5 課：** 資料清理與增強：管道清理、標記化、分割策略

### 第 3 部分：在 Google Gemini / Vertex AI 上進行微調

- **第 6 課：** Vertex AI 設定：專案、IAM、計費、定價細目
- **第7課：**逐步微調Gemini Flash：上傳資料→訓練→部署→測試
- **第 8 課：** 進階：蒸餾、超參數最佳化、多任務調優

### 第 4 部分：OpenAI 和開源的微調

- **第 9 課：** 微調 OpenAI GPT-4o-mini：API 工作流程，與 Gemini 的比較
- **第 10 課：** LoRA 和 QLoRA：在 Google Colab 上免費微調開源模型

### 第 5 部分：模型評估 — 方法與指標

- **第 11 課：** 指標：Perplexity、BLEU、ROUGE、BERTScore — 何時使用什麼
- **第 12 課：** 法學碩士法官與人類評估 — 多維度評估
- **第 13 課：** 評量流程：黃金測驗集、CI/CD、A/B 測驗、紅隊

### 第 6 部分：生產與最佳實踐

- **第 14 課：** 部署：Vertex AI 端點、vLLM、多適配器服務
- **第 15 課：** 常見陷阱：災難性遺忘、過度擬合、故障排除
- **第 16 課：** Capstone：針對實際用例進行端對端微調

## 課程特色

|主題 |內容 |
|--------|----------|
| **🔥 谷歌雙子座焦點** | Vertex AI 的 3 篇獨立文章－2025-2026 年最強大的平台 |
| **💰 實際成本** |價目表、投資報酬率計算器、成本最佳化－不只是理論 |
| **📊科學評估** | 3 篇關於評估的文章 — BLEU、ROUGE、LLM-as-Judge、Human Eval |
| **🤔 微調 vs RAG** |完整的決策架構、案例研究、混合方法 |
| **🔧 多平台** |GoogleGemini + OpenAI + LoRA/QLoRA開源|
| **🚀 生產就緒** |部署、監控、A/B 測試、偏差檢測 |

## 需要輸入

- **中級 Python**（非同步/等待、檔案 I/O、JSON 處理）
- 對LLM有基本的了解（了解提示工程、API呼叫）
- Google Cloud 帳戶（免費試用 300 美元積分足以支付整個課程）
- OpenAI 帳戶（第 9 課）
- Google Colab（第 10 課 — 免費）

## 使用的工具

```
Python 3.11+           | Ngôn ngữ chính
Google Cloud / Vertex AI | Fine-tune Gemini models
OpenAI API             | Fine-tune GPT-4o-mini
Hugging Face           | Transformers, PEFT, datasets
Unsloth / Axolotl      | Optimized LoRA training
Weights & Biases       | Experiment tracking
Google Colab           | Free GPU cho hands-on
BERTScore / ROUGE      | Evaluation metrics
LangSmith              | LLM-as-a-Judge pipeline
```

## 比較3個AI系列

| |人工智慧與法學碩士系列|建構人工智慧代理 |微調LLM |
|---|---|---|---|
| **焦點** |法學碩士理論|建設代理|精緻化模型|
| **對象** |新手|了解基本的法學碩士 |了解基本的法學碩士 |
| **輸出** |了解法學碩士 |投資組合代理 |客製化人工智慧模型 |
| **技術** | PyTorch、變形金剛 | LangGraph、CrewAI |頂點人工智慧、LoRA |
| **難度等級** | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
