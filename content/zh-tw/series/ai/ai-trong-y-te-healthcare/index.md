---
id: 019d8b33-aa01-7001-b001-ff0400000001
title: 健康與醫療保健中的人工智慧：實戰應用
slug: ai-trong-y-te-healthcare
description: >-
  關於醫療保健領域人工智慧的綜合課程——從使用 CNN 進行醫學成像、用於醫療記錄的 NLP、使用 GNN 進行藥物發現，到實施符合 HIPAA/FDA
  要求的人工智慧。使用 Python、PyTorch、Hugging Face 和標準醫學資料集（例如 MIMIC、CheXpert、PubMed）進行練習。
featured_image: uploads/2026/03/ai-trong-y-te-healthcare-cover.png
level: intermediate
duration_hours: 45
lesson_count: 15
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
  - name: Healthcare AI
    slug: healthcare-ai
  - name: Medical Imaging
    slug: medical-imaging
  - name: Drug Discovery
    slug: drug-discovery
  - name: 醫療 NLP
    slug: nlp-y-te
  - name: HIPAA
    slug: hipaa
  - name: Clinical NLP
    slug: clinical-nlp
  - name: Deep Learning
    slug: deep-learning
  - name: PyTorch
    slug: pytorch
  - name: Python
    slug: python
  - name: AI
    slug: ai
sections:
  - id: section-hc-01
    title: 第 1 部分：醫療 AI 平台和醫療數據
    description: 了解健康數據、隱私和標準的具體情況
    sort_order: 1
    lessons:
      - id: 019d8b33-bb01-7001-c001-ee0100000001
        title: 第 1 課：醫療保健中的人工智慧 — 概述與道德規範
        slug: bai-1-ai-y-te-tong-quan
        description: 景觀人工智慧醫療保健。主要應用：診斷、藥物、病患管理。道德：偏見、隱私、可解釋性。監管環境：FDA、CE 標誌。
        duration_minutes: 90
        is_free: true
        sort_order: 0
        video_url: null
      - id: 019d8b33-bb02-7002-c002-ee0200000002
        title: 第 2 課：醫療資料 — DICOM、HL7 FHIR 與隱私
        slug: bai-2-du-lieu-y-te-dicom-fhir
        description: 醫療資料格式：DICOM 影像、HL7 FHIR。電子病歷系統。去識別化。 HIPAA 合規性。醫療人工智慧的數據管道。
        duration_minutes: 120
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8b33-bb03-7003-c003-ee0300000003
        title: 第 3 課：醫學影像處理基礎知識
        slug: bai-3-medical-image-processing
        description: X 光、CT、MRI 基礎知識。使用 pydicom 進行 DICOM 處理。影像預處理：加窗、歸一化。醫學影像的數據增強。
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
  - id: section-hc-02
    title: 第 2 部分：醫學影像 AI — 醫療保健電腦視覺
    description: CNN、醫學影像檢測、分割
    sort_order: 2
    lessons:
      - id: 019d8b33-bb04-7004-c004-ee0400000004
        title: 第 4 課：用於醫學影像分類的 CNN
        slug: bai-4-cnn-medical-classification
        description: 用於 X 光分類的遷移學習 ResNet/EfficientNet。 CheXpert 資料集。多標籤分類。 Grad-CAM 可解釋性。
        duration_minutes: 180
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8b33-bb05-7005-c005-ee0500000005
        title: 第 5 課：醫學影像分割 — U-Net 與變體
        slug: bai-5-unet-segmentation
        description: U-Net架構。注意 U-Net、TransUNet。器官/腫瘤分割。骰子損失、IoU 指標。 3D 醫學影像分割。
        duration_minutes: 180
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019d8b33-bb06-7006-c006-ee0600000006
        title: 第 6 課：物體檢測和病理學 AI
        slug: bai-6-detection-pathology
        description: 用於病變檢測的 YOLO/Faster R-CNN。整個幻燈片影像分析。數位病理學工作流程。細胞計數、組織分類。
        duration_minutes: 150
        is_free: true
        sort_order: 5
        video_url: null
  - id: section-hc-03
    title: 第 3 部分：臨床 NLP 和基因組學 AI
    description: 用於醫療記錄、蛋白質結構、藥物發現的 NLP
    sort_order: 3
    lessons:
      - id: 019d8b33-bb07-7007-c007-ee0700000007
        title: 第 7 課：臨床 NLP — 分析醫療紀錄
        slug: bai-7-clinical-nlp
        description: 醫學NER：疾病、藥物、症狀。 BioBERT、PubMedBERT。關係提取。臨床文本分類。 ICD 編碼自動化。
        duration_minutes: 150
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8b33-bb08-7008-c008-ee0800000008
        title: 第 8 課：醫療問答與醫療聊天機器人
        slug: bai-8-medical-qa-chatbot
        description: 醫療問題得到解答。用於醫療保健的 RAG：PubMed 檢索。微調醫學領域的法學碩士。護欄，醫療聊天機器人的安全。
        duration_minutes: 150
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8b33-bb09-7009-c009-ee0900000009
        title: 第 9 課：利用 AI 進行藥物發現 — GNN 和分子生成
        slug: bai-9-drug-discovery-gnn
        description: 用於分子特性預測的圖神經網路。微笑代表。分子生成。虛擬篩選。 ADMET 預測。
        duration_minutes: 180
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019d8b33-bb10-7010-c010-ee1000000010
        title: 第 10 課：基因體學和蛋白質結構預測
        slug: bai-10-genomics-protein
        description: DNA 序列分析。變體調用。 AlphaFold 概述。蛋白質結構預測基礎。基因組資料管道。
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
  - id: section-hc-04
    title: 第 4 部分：生產與合規性
    description: 合規、臨床試驗部署醫療人工智慧
    sort_order: 4
    lessons:
      - id: 019d8b33-bb11-7011-c011-ee1100000011
        title: 第 11 課：醫療保健聯邦學習
        slug: bai-11-federated-learning-y-te
        description: 聯邦學習：在不共享資料的情況下進行訓練。保護隱私的人工智慧。花框架。多醫院協作。
        duration_minutes: 120
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8b33-bb12-7012-c012-ee1200000012
        title: 第 12 課：醫療保健領域的可解釋人工智慧 (XAI)
        slug: bai-12-xai-y-te
        description: SHAP、LIME 用於醫療模式。 Grad-CAM 視覺化。注意圖。臨床驗證。與技術人員建立信任。
        duration_minutes: 120
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8b33-bb13-7013-c013-ee1300000013
        title: 第 13 課：AI 醫療設備的 FDA 和監管合規性
        slug: bai-13-fda-regulatory
        description: FDA 510(k) 和 De Novo 途徑。 SaMD 分類。臨床驗證要求。上市後監督。歐盟 MDR/AI 法案。
        duration_minutes: 120
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019d8b33-bb14-7014-c014-ee1400000014
        title: 第 14 課：部署醫療 AI — 用於醫療保健的 MLOps
        slug: bai-14-deploy-medical-ai
        description: 符合 HIPAA 的基礎設施。臨床人工智慧的模型監測。臨床試驗中的 A/B 測試。用於醫療人工智慧的 Docker、Kubernetes。
        duration_minutes: 150
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8b33-bb15-7015-c015-ee1500000015
        title: 第 15 課：Capstone — 建構端對端醫療 AI 管道
        slug: bai-15-capstone-medical-ai
        description: 最終項目：X 光分類系統或臨床 NLP 流程。從資料處理到部署均符合法規。
        duration_minutes: 240
        is_free: true
        sort_order: 14
        video_url: null
locale: zh-tw
---
