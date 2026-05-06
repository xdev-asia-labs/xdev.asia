---
id: 019c9619-aa06-7006-b006-aa0600000006
title: 深度學習的電腦視覺：從 CNN 到 Vision Transformer
slug: computer-vision-deep-learning
description: >-
  電腦視覺實用課程 — 從 CNN、目標偵測 (YOLO)、影像分割 (SAM) 到視覺轉換器和多模態 AI。親身實踐 PyTorch、Ultralytics
  YOLO、Hugging Face。使用 TensorRT 和 ONNX 將 CV 模型部署到生產環境。
featured_image: uploads/2026/03/computer-vision-cover.png
level: intermediate
duration_hours: 50
lesson_count: 14
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
  - name: Computer Vision
    slug: computer-vision
  - name: CNN
    slug: cnn
  - name: YOLO
    slug: yolo
  - name: Object Detection
    slug: object-detection
  - name: Image Segmentation
    slug: image-segmentation
  - name: Vision Transformer
    slug: vision-transformer
  - name: SAM
    slug: sam
  - name: PyTorch
    slug: pytorch
  - name: Deep Learning
    slug: deep-learning
  - name: Transfer Learning
    slug: transfer-learning
  - name: OCR
    slug: ocr
  - name: hands-on
    slug: hands-on
  - name: production
    slug: production
sections:
  - id: section-cv-01
    title: 第 1 部分：電腦視覺平台
    description: 基礎影像處理、CNN 深入研究和遷移學習
    sort_order: 1
    lessons:
      - id: 019c9619-ab01-7001-c101-ab0100000001
        title: 第一课：什么是计算机视觉？ — 基本影像處理
        slug: bai-1-computer-vision-la-gi
        description: 介紹電腦視覺的實際應用。使用 OpenCV 進行影像處理：調整大小、裁切、濾波、色彩空間。直方圖、邊緣檢測。基本臉部辨識演示。
        duration_minutes: 120
        is_free: true
        sort_order: 0
        video_url: null
      - id: 019c9619-ab02-7002-c102-ab0200000002
        title: 第 2 課：CNN 深入研究 — ResNet、EfficientNet、MobileNet
        slug: bai-2-cnn-deep-dive
        description: >-
          詳細的現代 CNN 架構：ResNet（跳過連接）、EfficientNet（複合縮放）、MobileNet（深度可分離卷積）。
          ImageNet 基準測試。特徵可視化。
        duration_minutes: 150
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019c9619-ab03-7003-c103-ab0300000003
        title: 第 3 課：遷移學習 — 使用經過訓練的模型
        slug: bai-3-transfer-learning
        description: >-
          遷移學習：預訓練模型、特徵提取、微調。實作：使用在 ImageNet 上預先訓練的 EfficientNet
          進行影像分類。小數據集的資料增強策略。
        duration_minutes: 150
        is_free: true
        sort_order: 2
        video_url: null
  - id: section-cv-02
    title: 第 2 部分：物體偵測
    description: 偵測並定位照片/影片中的對象
    sort_order: 2
    lessons:
      - id: 019c9619-ab04-7004-c104-ab0400000004
        title: 第 4 課：YOLO 從 v3 到 v11 — 理論與實踐
        slug: bai-4-yolo-object-detection
        description: >-
          YOLO 的歷史：從 YOLOv3 到 YOLOv11（Ultralytics）。 YOLO架構，錨框，非極大值抑制。動手實作：使用
          YOLOv8/v11 預訓練模型偵測物件。指標：mAP、IoU、精準度、召回率。
        duration_minutes: 180
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019c9619-ab05-7005-c105-ab0500000005
        title: 第 5 課：YOLO 自訂訓練 - 標記資料、訓練與部署
        slug: bai-5-train-yolo-custom
        description: >-
          端對端自訂 YOLO：收集映像、使用 Roboflow/CVAT 進行標記、設定 YAML 資料集、在 Google Colab
          上訓練、評估 mAP、匯出模型。使用案例：計數產品、檢測生產錯誤。
        duration_minutes: 210
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019c9619-ab06-7006-c106-ab0600000006
        title: 第 6 課：即時偵測 — 攝影機、視訊串流
        slug: bai-6-realtime-detection
        description: >-
          即時物件偵測：網路攝影機、RTSP
          串流、視訊檔案。追蹤：SORT、DeepSORT、ByteTrack。透過基於線、區域的偵測對物體進行計數。高 FPS 優化。
        duration_minutes: 150
        is_free: true
        sort_order: 5
        video_url: null
  - id: section-cv-03
    title: 第 3 部分：細分與現代履歷
    description: 影像分割、SAM、Vision Transformer 和擴散模型
    sort_order: 3
    lessons:
      - id: 019c9619-ab07-7007-c107-ab0700000007
        title: 第 7 課：影像分割－語意、實例與全景
        slug: bai-7-image-segmentation
        description: >-
          3 種分割類型：語意（像素分類）、實例（區分每個物件）、全景（組合）。 U-Net、Mask R-CNN。親身實踐
          SegFormer。應用：醫療、自動駕駛、地圖。
        duration_minutes: 180
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019c9619-ab08-7008-c108-ab0800000008
        title: 第 8 課：SAM（任意分割）－零樣本分割
        slug: bai-8-sam-segment-anything
        description: >-
          Meta SAM & SAM2：無需訓練即可分割任何物件。提示類型：點、框、文字。 SAM + YOLO 組合。 DINO + SAM
          接地。互動式分割工具。
        duration_minutes: 150
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019c9619-ab09-7009-c109-ab0900000009
        title: 第 9 課：影像生成與穩定擴散
        slug: bai-9-image-generation
        description: >-
          理論擴散模型：正向/反向過程。穩定擴散架構：VAE、U-Net、CLIP
          文字編碼器。實踐：文字到圖像、圖像到圖像、ControlNet、LoRA 風格。
        duration_minutes: 180
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019c9619-ab10-7010-c110-ab1000000010
        title: 第 10 課：視覺轉換器 (ViT) 和 CLIP
        slug: bai-10-vision-transformer-clip
        description: >-
          ViT：影像變壓器－補丁嵌入、位置編碼、影像自註意力。
          CLIP：在同一嵌入空間中連接文字和圖像。零樣本影像分類。將CLIP應用於搜尋和推薦。
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
  - id: section-cv-04
    title: 第 4 部分：實際應用與部署
    description: OCR、多模式 AI、邊緣部署和 Capstone 項目
    sort_order: 4
    lessons:
      - id: 019c9619-ab11-7011-c111-ab1100000011
        title: 第 11 課：OCR 和文件理解
        slug: bai-11-ocr-document-understanding
        description: >-
          OCR
          管道：Tesseract、EasyOCR、PaddleOCR。文件佈局分析：LayoutLM、Donut。表提取。發票/收據處理。手寫辨識。越南
          OCR 挑戰。
        duration_minutes: 150
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019c9619-ab12-7012-c112-ab1200000012
        title: 第 12 課：多模態 AI — GPT-4o Vision、Gemini Vision
        slug: bai-12-multimodal-ai
        description: >-
          視覺語言模式：GPT-4o、Gemini 1.5、Claude Vision。用於影像理解、圖表分析、文件 QA 的 API
          整合。比較模型之間的準確性。成本優化。
        duration_minutes: 150
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019c9619-ab13-7013-c113-ab1300000013
        title: 第 13 課：邊緣部署 — TensorRT、ONNX 與移動
        slug: bai-13-edge-deployment
        description: >-
          最佳化生產模型：ONNX 匯出、TensorRT 最佳化、量化（INT8、FP16）。在 Jetson Nano、Raspberry Pi
          上部署。行動部署：CoreML (iOS)、TFLite (Android)。基準 FPS。
        duration_minutes: 180
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019c9619-ab14-7014-c114-ab1400000014
        title: 第 14 課：Capstone — 建置端對端 CV 系統
        slug: bai-14-capstone
        description: 專案概要：建置從訓練到部署的完整CV系統。使用案例：顧客計數系統+店內行為分析。 YOLO + 追蹤 + 分析儀表板 + 邊緣部署。
        duration_minutes: 240
        is_free: true
        sort_order: 13
        video_url: null
reviews: []
quizzes: []
locale: zh-tw
---

## 系列介紹

**電腦視覺與深度學習**是一門實作課程，可協助您建立影像和視訊辨識系統 - 從基本影像分類到物件偵測 (YOLO)、影像分割 (SAM) 和 Vision Transformer。

> 🎯 **為什麼選擇電腦視覺？ ** CV 是具有**最**實際應用的人工智慧領域：自動駕駛汽車、醫療（X 射線、MRI）、零售（客戶計數）、安全（識別）、農業（害蟲檢測）、製造（錯誤檢查）...

## 你會學到什麼？

### 第 1 部分：履歷基礎
- **第 1 課：** 什麼是電腦視覺？使用 OpenCV 進行影像處理
- **第 2 課：** CNN 深入研究：ResNet、EfficientNet、MobileNet
- **第 3 課：** 遷移學習 — 使用經過訓練的模型

### 第 2 部分：物體偵測
- **第 4 課：** 🔥 YOLO 從 v3 到 v11 — 偵測所有內容
- **第 5 課：** 針對單獨資料集的自訂 YOLO 訓練
- **第 6 課：** 即時偵測 — 攝影機、視訊串流、追蹤

### 第 3 部分：細分與現代履歷
- **第 7 課：** 影像分割：語意、實例、全景
- **第 8 課：** 🔥 SAM (Segment Anything) — 分段不需要訓練
- **第 9 課：** 穩定擴散與影像生成
- **第 10 課：** 視覺轉換器 (ViT) 和 CLIP

### 第 4 部分：應用程式和部署
- **第 11 課：** OCR 和越南語文件理解
- **第 12 課：** 多模態 AI：GPT-4o 視覺、Gemini 視覺
- **第 13 課：** 邊緣部署：TensorRT、ONNX、移動
- **第 14 課：** 頂點：端對端 CV 系統

## 需要輸入

- **中階 Python**（NumPy、matplotlib）
- 對神經網路的基本了解（或完成「AI & LLM」系列課程 1-4）
- Google Colab（免費，提供 T4 GPU）
- 本地 GPU 很有優勢，但**不是必需的**

## 使用的工具

```
Python 3.11+       | Ngôn ngữ chính
PyTorch            | Deep Learning framework
Ultralytics        | YOLOv8/v11
OpenCV             | Image processing
Hugging Face       | ViT, SAM, SegFormer
Roboflow           | Data labeling & management
Google Colab       | Free GPU training
TensorRT / ONNX    | Model optimization
Streamlit          | Demo web app
```
