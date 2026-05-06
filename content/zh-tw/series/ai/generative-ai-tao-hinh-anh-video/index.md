---
id: 019d8b31-aa01-7001-b001-ff0200000001
title: 生成式 AI：使用 AI 創建圖像和視頻
slug: generative-ai-tao-hinh-anh-video
description: >-
  關於影像和視訊生成人工智慧的綜合課程——從 GAN、VAE 平台到穩定擴散、DALL-E、Midjourney API。使用 Python、Hugging
  Face Diffusers 和 ComfyUI 練習影像生成、修復、風格轉換、影片生成，並建立可用於生產的生成式 AI 管道。
featured_image: uploads/2026/03/generative-ai-tao-hinh-anh-video-cover.png
level: intermediate
duration_hours: 55
lesson_count: 18
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
  - name: Generative AI
    slug: generative-ai
  - name: Stable Diffusion
    slug: stable-diffusion
  - name: DALL-E
    slug: dall-e
  - name: GAN
    slug: gan
  - name: VAE
    slug: vae
  - name: Diffusion Models
    slug: diffusion-models
  - name: Image Generation
    slug: image-generation
  - name: Video Generation
    slug: video-generation
  - name: ComfyUI
    slug: comfyui
  - name: Hugging Face
    slug: hugging-face
  - name: Deep Learning
    slug: deep-learning
  - name: Python
    slug: python
  - name: AI
    slug: ai
sections:
  - id: section-genai-01
    title: 第 1 部分：生成式 AI 平台 — 理論與架構
    description: 了解生成模型和核心架構的本質
    sort_order: 1
    lessons:
      - id: 019d8b31-bb01-7001-c001-ee0100000001
        title: 第一課：什麼是生成式人工智慧？ — 創意人工智慧景觀
        slug: bai-1-generative-ai-la-gi
        description: >-
          產生人工智慧的定義，區分判別模型與生成模型。從玻爾茲曼機到擴散模型的發展歷史。生成模型的類型：GAN、VAE、基於流、擴散、自回歸。
          2026 年的現實應用與當前情勢。
        duration_minutes: 90
        is_free: true
        sort_order: 0
        video_url: null
      - id: 019d8b31-bb02-7002-c002-ee0200000002
        title: 第 2 課：GAN－從零開始的生成對抗網絡
        slug: bai-2-gan-generative-adversarial-networks
        description: >-
          GAN 架構：生成器與判別器、極小極大遊戲。訓練動態和模式崩潰。 GAN
          變體：DCGAN、WGAN、StyleGAN、CycleGAN。動手實作：使用 PyTorch 訓練 GAN 產生人臉。
          GAN評估：FID、IS分數。
        duration_minutes: 150
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8b31-bb03-7003-c003-ee0300000003
        title: 第 3 課：VAE — 變分自動編碼器與潛在空間
        slug: bai-3-vae-variational-autoencoders
        description: >-
          自動編碼器回顧。 VAE：ELBO、重新參數化技巧、KL 散度。潛在空間探索和插值。有條件的 VAE。用於離散潛在變數的 VQ-VAE。比較
          VAE 與 GAN。使用 VAE 實際生成影像。
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
  - id: section-genai-02
    title: 第 2 部分：擴散模型 — 革命性的影像創建
    description: 深入研究擴散模型－穩定擴散、DALL-E、中途旅程的基礎
    sort_order: 2
    lessons:
      - id: 019d8b31-bb04-7004-c004-ee0400000004
        title: 第 4 課：擴散模型 — 數學與直覺
        slug: bai-4-diffusion-models-toan-hoc
        description: >-
          前向過程：逐步加入雜訊。逆過程：逐步去噪。 DDPM：去噪擴散機率模型。基於分數的模型。噪音調度。數學：高斯轉換、損失函數。從頭開始實踐
          DDPM。
        duration_minutes: 180
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8b31-bb05-7005-c005-ee0500000005
        title: 第 5 課：穩定擴散深入探討 — 架構與管道
        slug: bai-5-stable-diffusion-deep-dive
        description: >-
          潛在擴散模型：為什麼在潛在空間中工作？ UNet架構。使用 CLIP 進行文字調節。
          VAE編碼器/解碼器。調度器：DDIM、Euler、DPM++。穩定擴散 1.5、2.1、SDXL、SD3。從提示到圖像的詳細流程。
        duration_minutes: 180
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019d8b31-bb06-7006-c006-ee0600000006
        title: 第 6 課：影像生成的快速工程
        slug: bai-6-prompt-engineering-image-generation
        description: >-
          文字提示剖析：主題、風格、品質、負面提示。提示權重和強調語法。穩定擴散提示提示。中途提示模式。 DALL-E
          提示策略。系統的即時測試。及時的資料庫和社區資源。
        duration_minutes: 120
        is_free: true
        sort_order: 5
        video_url: null
  - id: section-genai-03
    title: 第 3 部分：練習進階影像生成
    description: 先進技術 — ControlNet、LoRA、Inpainting 和客製化培訓
    sort_order: 3
    lessons:
      - id: 019d8b31-bb07-7007-c007-ee0700000007
        title: 第 7 課：ControlNet 與影像到影像 — 控制輸出
        slug: bai-7-controlnet-image-to-image
        description: >-
          img2img 管道：使用參考影像。 ControlNet：canny 邊緣、深度圖、姿態估計、分割。用於風格傳輸的 IP 轉接器。 T2I
          轉接器。動手實作：使用 ComfyUI 和 Diffusers 建立佈局控制的影像。
        duration_minutes: 150
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8b31-bb08-7008-c008-ee0800000008
        title: 第 8 課：利用 AI 進行修復、修復和影像編輯
        slug: bai-8-inpainting-outpainting
        description: >-
          修復：編輯影像中的特定區域。外畫：將圖像向外擴展。基於指令的編輯：InstructPix2Pix。背景去除和替換。物體移除。親身體驗穩定擴散修復管道。
        duration_minutes: 120
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8b31-bb09-7009-c009-ee0900000009
        title: 第 9 課：LoRA 和自訂模型訓練 — 建立自己的風格
        slug: bai-9-lora-custom-model-training
        description: >-
          使用 LoRA 微調穩定擴散：概念、數學、實現。 DreamBooth：個人化生成。文字倒置。訓練資料集準備和最佳實踐。合併 LoRA
          模型。動手實作：按照您自己的風格訓練 LoRA。
        duration_minutes: 180
        is_free: true
        sort_order: 8
        video_url: null
  - id: section-genai-04
    title: 第 4 部分：DALL-E、中途和商業 API
    description: 將商業 API 用於生產應用程式
    sort_order: 4
    lessons:
      - id: 019d8b31-bb10-7010-c010-ee1000000010
        title: 第 10 課：DALL-E 3 API — 整合 OpenAI 影像生成
        slug: bai-10-dall-e-3-api
        description: >-
          DALL-E 3 架構概觀。 OpenAI 圖像 API：生成、編輯、變化。提示 DALL-E 的最佳實踐。速率限制和定價優化。錯誤處理。與
          Web 應用程式的整合模式。安全過濾器。
        duration_minutes: 120
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8b31-bb11-7011-c011-ee1100000011
        title: 第 11 課：中途、通量與新興模型
        slug: bai-11-midjourney-flux
        description: >-
          Midjourney API 和 Discord 整合。 Flux：架構和功能。 Google Imagen 3. Adob​​e
          Firefly API。比較平台之間的品質、速度、成本。為用例選擇合適的模型。多模型編排。
        duration_minutes: 120
        is_free: true
        sort_order: 10
        video_url: null
  - id: section-genai-05
    title: 第 5 部分：視訊生成和多模式
    description: 利用 AI 創作影片、動畫和多媒體內容
    sort_order: 5
    lessons:
      - id: 019d8b31-bb12-7012-c012-ee1200000012
        title: 第 12 課：影片產生 — Sora、Runway、Kling 和 Pika
        slug: bai-12-video-generation
        description: >-
          2026 年影片生成前景。文字轉影片：Sora、Runway Gen-3、Kling、Pika Labs。圖像到影片。使用 AI
          進行影片編輯。時間一致性挑戰。品質比較。 API 整合模式。生產成本分析。
        duration_minutes: 150
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8b31-bb13-7013-c013-ee1300000013
        title: 第 13 課：音訊與音樂產生 — 使用 AI 創造聲音
        slug: bai-13-audio-music-generation
        description: >-
          音樂生成：MusicGen、Suno
          AI、Udio。聲音效果生成。語音合成和基本語音克隆。視聽同步。用於視訊旁白的文字轉語音。動手實作：為人工智慧生成的影片創建配樂。
        duration_minutes: 120
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019d8b31-bb14-7014-c014-ee1400000014
        title: 第 14 課：3D 生成與 Avatar AI
        slug: bai-14-3d-generation-avatar
        description: >-
          文字轉 3D：DreamFusion、Magic3D、Point-E。影像轉 3D 模型。 3D 高斯潑濺。 AI頭像：會說話的頭部、全身。
          NeRF 基礎知識。遊戲和 VR 的 3D 資產生成。動手實作：從文字產生 3D 模型。
        duration_minutes: 150
        is_free: true
        sort_order: 13
        video_url: null
  - id: section-genai-06
    title: 第六部分：生產與實際應用
    description: 將生成式人工智慧帶入生產－架構、最佳化、倫理
    sort_order: 6
    lessons:
      - id: 019d8b31-bb15-7015-c015-ee1500000015
        title: 第 15 課：ComfyUI 掌握 — AI 藝術的視覺工作流程
        slug: bai-15-comfyui-mastery
        description: >-
          ComfyUI 設定和介面。基於節點的工作流程設計。自訂節點。用於生產的工作流程範本。批次處理。用於自動化的 API
          模式。模型管理。性能優化。工作流程分享和社區。
        duration_minutes: 150
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8b31-bb16-7016-c016-ee1600000016
        title: 第 16 課：生成式 AI API 伺服器 - 建構平台
        slug: bai-16-generative-ai-api-server
        description: >-
          建構用於映像產生的API伺服器：FastAPI + Stable Diffusion。使用 Celery/Redis 進行基於佇列的處理。
          GPU記憶體管理。模型載入優化。速率限制和身份驗證。 S3 儲存整合。用於即時進度的 WebSocket。
        duration_minutes: 180
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8b31-bb17-7017-c017-ee1700000017
        title: 第 17 課：產生人工智慧中的人工智慧安全、道德和版權
        slug: bai-17-ai-safety-ethics-copyright
        description: >-
          內容安全：NSFW偵測，提示過濾。 Deepfake 檢測和預防。人工智慧生成內容的版權問題。 AI 影像浮水印
          (C2PA)。產生模型中的偏差。負責任的人工智慧部署指南。 2026 年法律格局。
        duration_minutes: 120
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019d8b31-bb18-7018-c018-ee1800000018
        title: 第 18 課：Capstone－建立 AI 創意平台
        slug: bai-18-capstone-ai-creative-platform
        description: >-
          總結項目：建構AI內容創作平台－文字轉圖像、圖像編輯、影片生成。架構：React前端+FastAPI後端+ComfyUI+S3。使用者管理、信用系統、圖庫。使用
          Docker 和 GPU 雲端進行部署。
        duration_minutes: 240
        is_free: true
        sort_order: 17
        video_url: null
reviews: []
quizzes: []
locale: zh-tw
---

## 系列介紹

**生成式人工智慧：使用人工智慧創建圖像和視訊**是一門綜合課程，可幫助您掌握使用人工智慧創建視覺內容的藝術和技術 - 從 GAN、VAE、擴散模型的理論基礎到穩定擴散、DALL-E、Midjourney 和視訊生成的實際操作。

> 🎯 **完成課程後，您將：**
> - 深入了解擴散模型、GAN、VAE 的工作原理
> - 精通Stable Diffusion、ControlNet、LoRA訓練
> - 可以使用 DALL-E、Midjourney、Flux API 進行生產
> - 使用 AI 創建視訊、音訊、3D 內容
> - 打造完整的AI創意平台

## 學習路徑

### 第 1 部分：生成式 AI 平台
了解生成模型的本質—GAN、VAE 和核心理論。

### 第 2 部分：擴散模型
深入研究擴散架構—穩定擴散平台，DALL-E。

### 第 3 部分：進階影像生成
ControlNet、LoRA 訓練、Inpainting — 完整的輸出控制。

### 第 4 部分：商業 API
將 DALL-E、Midjourney、Flux 整合到實際應用中。

### 第 5 部分：影片和多模式
利用 AI 創建視訊、音訊、3D 內容——2026 年的最新趨勢。

### 第 6 部分：生產
建構平台，處理安全/道德問題，然後部署到生產中。
