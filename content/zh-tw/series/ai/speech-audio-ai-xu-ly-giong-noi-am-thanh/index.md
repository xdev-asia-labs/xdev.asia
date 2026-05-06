---
id: 019d8b34-aa01-7001-b001-ff0500000001
title: 語音和音訊 AI：語音和音訊處理
slug: speech-audio-ai-xu-ly-giong-noi-am-thanh
description: >-
  全面的語音和音訊人工智慧課程——從音訊訊號處理、帶有 Whisper 的語音識別 (ASR)、帶有 VITS 的文字轉語音
  (TTS)、語音克隆、說話者驗證到音樂 AI。使用 Python、PyTorch、Hugging Face、librosa 和最先進的模型進行練習。
featured_image: uploads/2026/03/speech-audio-ai-xu-ly-giong-noi-am-thanh-cover.png
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
  - name: Speech Recognition
    slug: speech-recognition
  - name: Text-to-Speech
    slug: text-to-speech
  - name: Voice Cloning
    slug: voice-cloning
  - name: Audio Processing
    slug: audio-processing
  - name: Whisper
    slug: whisper
  - name: ASR
    slug: asr
  - name: TTS
    slug: tts
  - name: Deep Learning
    slug: deep-learning
  - name: Python
    slug: python
  - name: AI
    slug: ai
sections:
  - id: section-sa-01
    title: 第 1 部分：音訊和訊號處理基礎
    description: 數位音訊、頻譜圖、特徵提取
    sort_order: 1
    lessons:
      - id: 019d8b34-bb01-7001-c001-ee0100000001
        title: 第 1 課：數位音訊和訊號處理基礎知識
        slug: bai-1-digital-audio-signal-processing
        description: 取樣率、位元深度、波形。傅立叶变换。谱图，梅尔谱图。 librosa 用於音訊處理。使用 Python 進行音訊 I/O。
        duration_minutes: 120
        is_free: true
        sort_order: 0
        video_url: null
      - id: 019d8b34-bb02-7002-c002-ee0200000002
        title: 第 2 課：音訊特徵提取 — MFCC、Mel 和 Chromagram
        slug: bai-2-audio-feature-extraction
        description: MFCC 特點。梅爾頻率分析。色譜圖，光譜特徵。特徵標準化。音訊資料增強。
        duration_minutes: 120
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8b34-bb03-7003-c003-ee0300000003
        title: 第 3 課：音訊分類與聲音事件偵測
        slug: bai-3-audio-classification
        description: 用於音訊分類的 CNN。環境聲音分類。聲音事件偵測。 UrbanSound8K 資料集。音訊遷移學習。
        duration_minutes: 150
        is_free: true
        sort_order: 2
        video_url: null
  - id: section-sa-02
    title: 第 2 部分：語音辨識 (ASR) — 語音識別
    description: 從 CTC 到 Whisper、端到端 ASR
    sort_order: 2
    lessons:
      - id: 019d8b34-bb04-7004-c004-ee0400000004
        title: 第 4 課：ASR 架構 — CTC、注意力與感測器
        slug: bai-4-asr-architecture
        description: CTC 損失。編碼器-解碼器 ASR。注意力機制。 RNN-感測器。波束搜尋解碼。語言模型整合。
        duration_minutes: 150
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8b34-bb05-7005-c005-ee0500000005
        title: 第 5 課：Whisper 與現代 ASR — OpenAI Whisper 深入探究
        slug: bai-5-whisper-modern-asr
        description: 耳語建築。多重任務：轉錄、翻譯、時間戳記。針對越南語微調 Whisper。更快的 Whisper，WhisperX。
        duration_minutes: 180
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019d8b34-bb06-7006-c006-ee0600000006
        title: 第 6 課：即時 ASR 和串流語音識別
        slug: bai-6-realtime-asr-streaming
        description: 串流媒體與離線 ASR。語音活動偵測 (VAD)。即時轉錄管道。 WebSocket 串流。邊緣部署。
        duration_minutes: 150
        is_free: true
        sort_order: 5
        video_url: null
  - id: section-sa-03
    title: 第 3 部分：文字轉語音和語音技術
    description: TTS、語音克隆、說話者識別
    sort_order: 3
    lessons:
      - id: 019d8b34-bb07-7007-c007-ee0700000007
        title: 第 7 課：文字轉語音 — Tacotron2、VITS 與現代 TTS
        slug: bai-7-tts-tacotron-vits
        description: TTS 管道：文字→梅爾→波形。 Tacotron2 架構。 VITS 端對端。聲碼器：HiFi-GAN。科基 TTS，樹皮。
        duration_minutes: 180
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8b34-bb08-7008-c008-ee0800000008
        title: 第 8 課：語音複製與零樣本 TTS
        slug: bai-8-voice-cloning
        description: 揚聲器嵌入。零樣本語音克隆。 XTTS，烏龜 TTS。道德考慮。語音轉換與克隆。
        duration_minutes: 150
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8b34-bb09-7009-c009-ee0900000009
        title: 第 9 課：說話者驗證與分類
        slug: bai-9-speaker-verification-diarization
        description: 揚聲器嵌入：d 向量、x 向量。揚聲器驗證管路。說話者二值化。 SpeechBrain 框架。 ECAPA-TDNN。
        duration_minutes: 150
        is_free: true
        sort_order: 8
        video_url: null
  - id: section-sa-04
    title: 第 4 部分：高級音訊 AI 和製作
    description: 音樂AI、語音增強、製作部署
    sort_order: 4
    lessons:
      - id: 019d8b34-bb10-7010-c010-ee1000000010
        title: 第 10 課：語音增強與源分離
        slug: bai-10-speech-enhancement
        description: 降噪。語音增強。源分離：Democs。波束成形基礎知識。超高解析度音訊。
        duration_minutes: 120
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8b34-bb11-7011-c011-ee1100000011
        title: 第 11 課：音樂 AI — 生成、分析與轉錄
        slug: bai-11-music-ai
        description: 音樂生成：MusicGen、Stable Audio。音樂轉錄：鋼琴→MIDI。流派分類。節拍追蹤。音樂資訊檢索。
        duration_minutes: 150
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8b34-bb12-7012-c012-ee1200000012
        title: 第 12 課：情緒辨識與言語情感
        slug: bai-12-emotion-recognition
        description: 語音情感辨識。副語言特徵。多模式：音訊+文字。 Wav2Vec2 用於情緒。資料集：IEMOCAP、RAVDESS。
        duration_minutes: 120
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8b34-bb13-7013-c013-ee1300000013
        title: 第 13 課：越南語語音 AI — ASR 和 TTS 越南語
        slug: bai-13-vietnamese-speech-ai
        description: 越南語特徵：聲調語言、變音符號。針對越南語微調 Whisper。越南語 TTS。 VLSP 資料集。 Viettel/FPT AI 比較。
        duration_minutes: 180
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019d8b34-bb14-7014-c014-ee1400000014
        title: 第 14 課：部署語音 AI — 生產管道
        slug: bai-14-deploy-speech-ai
        description: 最佳化模型：ONNX、TensorRT。即時服務架構。 WebSocket API。邊緣部署。成本優化。監控。
        duration_minutes: 150
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8b34-bb15-7015-c015-ee1500000015
        title: 第 15 課：Capstone — 端對端語音助理
        slug: bai-15-capstone-voice-assistant
        description: 項目概要：建構語音助理管道－ASR + NLU + TTS。即時串流媒體。多語言支援。邊緣部署。
        duration_minutes: 240
        is_free: true
        sort_order: 14
        video_url: null
locale: zh-tw
---

