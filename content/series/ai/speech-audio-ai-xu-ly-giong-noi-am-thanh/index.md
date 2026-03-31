---
id: 019d8b34-aa01-7001-b001-ff0500000001
title: "Speech & Audio AI: Xử lý Giọng nói & Âm thanh"
slug: speech-audio-ai-xu-ly-giong-noi-am-thanh
description: >-
  Khóa học toàn diện về AI cho Speech & Audio — từ xử lý tín hiệu âm thanh,
  Speech Recognition (ASR) với Whisper, Text-to-Speech (TTS) với VITS,
  Voice Cloning, Speaker Verification, đến Music AI. Thực hành với Python,
  PyTorch, Hugging Face, librosa, và các model state-of-the-art.
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
  name: AI & Machine Learning
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
    title: "Phần 1: Nền tảng Xử lý Âm thanh & Tín hiệu"
    description: Digital audio, spectrogram, features extraction
    sort_order: 1
    lessons:
      - id: 019d8b34-bb01-7001-c001-ee0100000001
        title: 'Bài 1: Digital Audio & Signal Processing Fundamentals'
        slug: bai-1-digital-audio-signal-processing
        description: >-
          Sampling rate, bit depth, waveforms. Fourier Transform. Spectrogram, Mel spectrogram. librosa cho audio processing. Audio I/O với Python.
        duration_minutes: 120
        is_free: true
        sort_order: 0
        video_url: null
      - id: 019d8b34-bb02-7002-c002-ee0200000002
        title: 'Bài 2: Audio Feature Extraction — MFCC, Mel & Chromagram'
        slug: bai-2-audio-feature-extraction
        description: >-
          MFCC features. Mel-frequency analysis. Chromagram, spectral features. Feature normalization. Data augmentation cho audio.
        duration_minutes: 120
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8b34-bb03-7003-c003-ee0300000003
        title: 'Bài 3: Audio Classification & Sound Event Detection'
        slug: bai-3-audio-classification
        description: >-
          CNN cho audio classification. Environmental sound classification. Sound event detection. UrbanSound8K dataset. Transfer learning cho audio.
        duration_minutes: 150
        is_free: true
        sort_order: 2
        video_url: null
  - id: section-sa-02
    title: "Phần 2: Speech Recognition (ASR) — Nhận dạng Giọng nói"
    description: Từ CTC đến Whisper, end-to-end ASR
    sort_order: 2
    lessons:
      - id: 019d8b34-bb04-7004-c004-ee0400000004
        title: 'Bài 4: ASR Architecture — CTC, Attention & Transducer'
        slug: bai-4-asr-architecture
        description: >-
          CTC loss. Encoder-Decoder ASR. Attention mechanism. RNN-Transducer. Beam search decoding. Language model integration.
        duration_minutes: 150
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8b34-bb05-7005-c005-ee0500000005
        title: 'Bài 5: Whisper & Modern ASR — OpenAI Whisper Deep Dive'
        slug: bai-5-whisper-modern-asr
        description: >-
          Whisper architecture. Multi-task: transcribe, translate, timestamps. Fine-tune Whisper cho tiếng Việt. Faster Whisper, WhisperX.
        duration_minutes: 180
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019d8b34-bb06-7006-c006-ee0600000006
        title: 'Bài 6: Real-time ASR & Streaming Speech Recognition'
        slug: bai-6-realtime-asr-streaming
        description: >-
          Streaming vs offline ASR. Voice Activity Detection (VAD). Real-time transcription pipeline. WebSocket streaming. Edge deployment.
        duration_minutes: 150
        is_free: true
        sort_order: 5
        video_url: null
  - id: section-sa-03
    title: "Phần 3: Text-to-Speech & Voice Technologies"
    description: TTS, Voice Cloning, Speaker Recognition
    sort_order: 3
    lessons:
      - id: 019d8b34-bb07-7007-c007-ee0700000007
        title: 'Bài 7: Text-to-Speech — Tacotron2, VITS & Modern TTS'
        slug: bai-7-tts-tacotron-vits
        description: >-
          TTS pipeline: text → mel → waveform. Tacotron2 architecture. VITS end-to-end. Vocoder: HiFi-GAN. Coqui TTS, Bark.
        duration_minutes: 180
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8b34-bb08-7008-c008-ee0800000008
        title: 'Bài 8: Voice Cloning & Zero-shot TTS'
        slug: bai-8-voice-cloning
        description: >-
          Speaker embedding. Zero-shot voice cloning. XTTS, Tortoise TTS. Ethical considerations. Voice conversion vs cloning.
        duration_minutes: 150
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8b34-bb09-7009-c009-ee0900000009
        title: 'Bài 9: Speaker Verification & Diarization'
        slug: bai-9-speaker-verification-diarization
        description: >-
          Speaker embeddings: d-vector, x-vector. Speaker verification pipeline. Speaker diarization. SpeechBrain framework. ECAPA-TDNN.
        duration_minutes: 150
        is_free: true
        sort_order: 8
        video_url: null
  - id: section-sa-04
    title: "Phần 4: Advanced Audio AI & Production"
    description: Music AI, speech enhancement, production deployment
    sort_order: 4
    lessons:
      - id: 019d8b34-bb10-7010-c010-ee1000000010
        title: 'Bài 10: Speech Enhancement & Source Separation'
        slug: bai-10-speech-enhancement
        description: >-
          Noise reduction. Speech enhancement. Source separation: Demucs. Beamforming basics. Audio super-resolution.
        duration_minutes: 120
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8b34-bb11-7011-c011-ee1100000011
        title: 'Bài 11: Music AI — Generation, Analysis & Transcription'
        slug: bai-11-music-ai
        description: >-
          Music generation: MusicGen, Stable Audio. Music transcription: piano → MIDI. Genre classification. Beat tracking. Music information retrieval.
        duration_minutes: 150
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8b34-bb12-7012-c012-ee1200000012
        title: 'Bài 12: Emotion Recognition & Sentiment from Speech'
        slug: bai-12-emotion-recognition
        description: >-
          Speech emotion recognition. Paralinguistic features. Multi-modal: audio + text. Wav2Vec2 cho emotion. Dataset: IEMOCAP, RAVDESS.
        duration_minutes: 120
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8b34-bb13-7013-c013-ee1300000013
        title: 'Bài 13: Vietnamese Speech AI — ASR & TTS Tiếng Việt'
        slug: bai-13-vietnamese-speech-ai
        description: >-
          Đặc thù tiếng Việt: tonal language, diacritics. Fine-tune Whisper cho tiếng Việt. Vietnamese TTS. VLSP datasets. Viettel/FPT AI comparison.
        duration_minutes: 180
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019d8b34-bb14-7014-c014-ee1400000014
        title: 'Bài 14: Deploy Speech AI — Production Pipeline'
        slug: bai-14-deploy-speech-ai
        description: >-
          Model optimization: ONNX, TensorRT. Real-time serving architecture. WebSocket API. Edge deployment. Cost optimization. Monitoring.
        duration_minutes: 150
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8b34-bb15-7015-c015-ee1500000015
        title: 'Bài 15: Capstone — Voice Assistant End-to-End'
        slug: bai-15-capstone-voice-assistant
        description: >-
          Dự án tổng kết: Build voice assistant pipeline — ASR + NLU + TTS. Real-time streaming. Multi-language support. Edge deployment.
        duration_minutes: 240
        is_free: true
        sort_order: 14
        video_url: null
---
