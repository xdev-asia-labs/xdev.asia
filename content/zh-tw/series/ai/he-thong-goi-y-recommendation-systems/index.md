---
id: 019d8b36-aa01-7001-b001-ff0700000001
title: 推薦系​​統：從基礎到生產
slug: he-thong-goi-y-recommendation-systems
description: >-
  關於推薦系統的綜合課程 - 從協作過濾、基於內容、矩陣分解到具有兩塔、圖神經網路、序列模型的深度學習 RecSys。實作使用
  Python、PyTorch、LightFM，並部署可用於生產的推薦引擎。
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
  name: 人工智慧與機器學習
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
    title: 第 1 部分：推薦系統平台
    description: 協作過濾、基於內容的混合方法
    sort_order: 1
    lessons:
      - id: 019d8b36-bb01-7001-c001-ee0100000001
        title: 第 1 課：什麼是推薦系統？ — 概述與分類
        slug: bai-1-recsys-tong-quan
        description: RecSys 景觀。協作、基於內容、混合。顯式回饋與隱式回饋。評估指標：NDCG、MAP、命中率。
        duration_minutes: 90
        is_free: true
        sort_order: 0
        video_url: null
      - id: 019d8b36-bb02-7002-c002-ee0200000002
        title: 第 2 課：協同過濾 - 基於使用者和基於項目
        slug: bai-2-collaborative-filtering
        description: 基於使用者的 CF：相似性度量。基於項目的 CF。鄰域方法。餘弦相似度、皮爾遜相關。冷啟動問題。
        duration_minutes: 120
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8b36-bb03-7003-c003-ee0300000003
        title: 第 3 課：矩陣分解 — SVD、ALS 和 BPR
        slug: bai-3-matrix-factorization
        description: SVD 分解。 ALS：交替最小平方法。 BPR：貝葉斯個人化排名。隱式回饋處理。驚喜圖書館。
        duration_minutes: 150
        is_free: true
        sort_order: 2
        video_url: null
  - id: section-rec-02
    title: 第 2 部分：深度學習推薦
    description: 神經協同過濾、嵌入、兩塔
    sort_order: 2
    lessons:
      - id: 019d8b36-bb04-7004-c004-ee0400000004
        title: 第 4 課：RecSys 基於內容的特徵工程
        slug: bai-4-content-based-features
        description: 基於內容的過濾。 TF-IDF，嵌入特徵。使用者/項目分析。 RecSys 的特徵存儲。 LightFM 混合動力。
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8b36-bb05-7005-c005-ee0500000005
        title: 第 5 課：神經協同過濾與嵌入
        slug: bai-5-neural-cf-embedding
        description: NCF 架構。嵌入層。基因改造食品+MLP。寬而深。深度調頻。特色互動學習。
        duration_minutes: 150
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019d8b36-bb06-7006-c006-ee0600000006
        title: 第 6 課：兩塔建築與檢索
        slug: bai-6-two-tower-retrieval
        description: 二塔模型：用戶塔+物品塔。近似最近鄰 (ANN)。費斯，斯卡恩。大規模產生候選人。
        duration_minutes: 150
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8b36-bb07-7007-c007-ee0700000007
        title: 第 7 課：序列模型 — GRU4Rec、SASRec 與 Transformers
        slug: bai-7-sequence-models-recsys
        description: 基於會話的建議。 GRU4 建議。自註意：SASRec、BERT4Rec。用於順序推薦的變壓器。
        duration_minutes: 150
        is_free: true
        sort_order: 6
        video_url: null
  - id: section-rec-03
    title: 第 3 部分：進階 RecSys — 知識圖、多任務和 GNN
    description: 基於圖的知識感知多目標推薦
    sort_order: 3
    lessons:
      - id: 019d8b36-bb08-7008-c008-ee0800000008
        title: 第 8 課：用於推薦的圖神經網絡
        slug: bai-8-gnn-recommendation
        description: 用戶-項目二分圖。光GCN。品聖。傳遞建議的訊息。 PyG 實作。
        duration_minutes: 150
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8b36-bb09-7009-c009-ee0900000009
        title: 第9課：知識圖譜推薦
        slug: bai-9-knowledge-graph-recsys
        description: 知識圖嵌入。克格特。側面資訊整合。透過 KG 路徑的可解釋建議。
        duration_minutes: 120
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019d8b36-bb10-7010-c010-ee1000000010
        title: 第 10 課：多任務和多目標排名
        slug: bai-10-multi-task-ranking
        description: 多工學習：CTR + CVR。 MMOE，PLE 建築師。重新排名。多元、公平、新穎目標。
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
  - id: section-rec-04
    title: 第 4 部分：RecSys 生產 — 部署與擴展
    description: 生產架構、A/B測試、即時服務
    sort_order: 4
    lessons:
      - id: 019d8b36-bb11-7011-c011-ee1100000011
        title: 第 11 課：LLM 提供的建議
        slug: bai-11-llm-recommendations
        description: LLM作為推薦人。對話式 RecSys。基於提示的推薦。用於產品搜尋的 RAG。 LLM + 傳統 RecSys 混合體。
        duration_minutes: 150
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8b36-bb12-7012-c012-ee1200000012
        title: 第 12 課：生產 RecSys 架構
        slug: bai-12-production-recsys-architecture
        description: 3 階段流程：候選生成→評分→重新排名。特色商店。即時與批量。百萬級系統設計。
        duration_minutes: 150
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8b36-bb13-7013-c013-ee1300000013
        title: 第 13 課：RecSys 的 A/B 測驗和評估
        slug: bai-13-ab-testing-evaluation
        description: 線上與離線指標。 A/B 測試框架。交錯。反事實評估。業務指標對齊。
        duration_minutes: 120
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019d8b36-bb14-7014-c014-ee1400000014
        title: 第 14 課：Capstone — 電子商務推薦引擎
        slug: bai-14-capstone-recsys
        description: 專案概要：建構端到端的電子商務推薦引擎。兩塔檢索+重新排序+A/B測試+部署。
        duration_minutes: 240
        is_free: true
        sort_order: 13
        video_url: null
locale: zh-tw
---

