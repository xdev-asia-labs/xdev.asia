---
id: 019c9619-aa06-7006-b006-aa0600000006
title: '深層学習によるコンピューター ビジョン: CNN から Vision Transformer まで'
slug: computer-vision-deep-learning
description: >-
  コンピューター ビジョンに関する実践的なコース — CNN、物体検出 (YOLO)、画像セグメンテーション (SAM) からビジョン
  トランスフォーマー、マルチモーダル AI まで。 PyTorch、Ultralytics YOLO、Hugging Face の実践。 TensorRT と
  ONNX を使用して CV モデルを本番環境にデプロイします。
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
  name: AI と機械学習
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
    title: 'パート 1: コンピューター ビジョン プラットフォーム'
    description: 基本的な画像処理、CNN ディープダイブ、および転移学習
    sort_order: 1
    lessons:
      - id: 019c9619-ab01-7001-c101-ab0100000001
        title: 'レッスン 1: コンピューター ビジョンとは何ですか? — 基本的な画像処理'
        slug: bai-1-computer-vision-la-gi
        description: >-
          コンピュータ ビジョン、実際のアプリケーションを紹介します。 OpenCV による画像処理:
          サイズ変更、トリミング、フィルター、色空間。ヒストグラム、エッジ検出。基本的な顔認識のデモ。
        duration_minutes: 120
        is_free: true
        sort_order: 0
        video_url: null
      - id: 019c9619-ab02-7002-c102-ab0200000002
        title: 'レッスン 2: CNN の詳細 - ResNet、EfficientNet、MobileNet'
        slug: bai-2-cnn-deep-dive
        description: >-
          最新の CNN アーキテクチャの詳細: ResNet (スキップ接続)、EfficientNet (複合スケーリング)、MobileNet
          (深さ方向の分離可能な畳み込み)。 ImageNet ベンチマーク。機能の視覚化。
        duration_minutes: 150
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019c9619-ab03-7003-c103-ab0300000003
        title: 'レッスン 3: 転移学習 — トレーニング済みモデルの使用'
        slug: bai-3-transfer-learning
        description: >-
          転移学習: 事前トレーニングされたモデル、特徴抽出、微調整。実践: ImageNet で事前トレーニングされた EfficientNet
          を使用した画像分類。小規模なデータセット向けのデータ拡張戦略。
        duration_minutes: 150
        is_free: true
        sort_order: 2
        video_url: null
  - id: section-cv-02
    title: 'パート 2: 物体の検出'
    description: 写真/ビデオ内のオブジェクトを検出して位置を特定します
    sort_order: 2
    lessons:
      - id: 019c9619-ab04-7004-c104-ab0400000004
        title: 'レッスン 4: YOLO v3 から v11 — 理論と実践'
        slug: bai-4-yolo-object-detection
        description: >-
          YOLO の歴史: YOLOv3 から YOLOv11 (Ultralytics) まで。 YOLO アーキテクチャ、アンカー
          ボックス、非最大抑制。ハンズオン: YOLOv8/v11 の事前トレーニング済みモデルを使用してオブジェクトを検出します。メトリック:
          mAP、IoU、精度、リコール。
        duration_minutes: 180
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019c9619-ab05-7005-c105-ab0500000005
        title: 'レッスン 5: YOLO カスタム トレーニング — データのラベル付け、トレーニング、デプロイ'
        slug: bai-5-train-yolo-custom
        description: >-
          エンドツーエンドのカスタム YOLO: 画像の収集、Roboflow/CVAT によるラベル付け、YAML データセットの構成、Google
          Colab でのトレーニング、mAP の評価、モデルのエクスポート。使用例: 製品のカウント、生産エラーの検出。
        duration_minutes: 210
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019c9619-ab06-7006-c106-ab0600000006
        title: 'レッスン 6: リアルタイム検出 — カメラ、ビデオ ストリーム'
        slug: bai-6-realtime-detection
        description: >-
          リアルタイムのオブジェクト検出: Web カメラ、RTSP ストリーム、ビデオ ファイル。トラッキング:
          SORT、DeepSORT、ByteTrack。ライン、ゾーンベースの検出を介してオブジェクトをカウントします。高 FPS 向けの最適化。
        duration_minutes: 150
        is_free: true
        sort_order: 5
        video_url: null
  - id: section-cv-03
    title: 'パート 3: セグメンテーションと最新の履歴書'
    description: 画像セグメンテーション、SAM、ビジョントランスフォーマー、拡散モデル
    sort_order: 3
    lessons:
      - id: 019c9619-ab07-7007-c107-ab0700000007
        title: 'レッスン 7: 画像のセグメンテーション — セマンティック、インスタンス、パノプティック'
        slug: bai-7-image-segmentation
        description: >-
          3 種類のセグメンテーション: セマンティック (ピクセル分類)、インスタンス (各オブジェクトの区別)、パノプティック (組み合わせ)。
          U-Net、マスク R-CNN。 SegFormer を実際に使ってみましょう。用途: 医療、自動運転、地図。
        duration_minutes: 180
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019c9619-ab08-7008-c108-ab0800000008
        title: 'レッスン 8: SAM (Segment Anything) — ゼロショット セグメンテーション'
        slug: bai-8-sam-segment-anything
        description: >-
          メタ SAM および SAM2: トレーニングなしで任意のオブジェクトをセグメント化します。プロンプトのタイプ:
          ポイント、ボックス、テキスト。サムとヨロのコンボ。グランディングDINO+SAM。インタラクティブなセグメンテーション ツール。
        duration_minutes: 150
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019c9619-ab09-7009-c109-ab0900000009
        title: 'レッスン 9: 画像の生成と安定した拡散'
        slug: bai-9-image-generation
        description: >-
          理論的拡散モデル: 順方向/逆方向プロセス。安定した拡散アーキテクチャ: VAE、U-Net、CLIP テキスト エンコーダー。ハンズオン:
          テキストから画像へ、画像から画像へ、ControlNet、スタイル用の LoRA。
        duration_minutes: 180
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019c9619-ab10-7010-c110-ab1000000010
        title: 'レッスン 10: ビジョン トランスフォーマー (ViT) と CLIP'
        slug: bai-10-vision-transformer-clip
        description: >-
          ViT: 画像のトランスフォーマー — パッチの埋め込み、位置エンコーディング、画像上のセルフアテンション。クリップ:
          同じ埋め込みスペースでテキストと画像を接続します。ゼロショット画像分類。検索とレコメンデーションにCLIPを適用します。
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
  - id: section-cv-04
    title: 'パート 4: 実際のアプリケーションと展開'
    description: OCR、マルチモーダル AI、エッジ展開、Capstone プロジェクト
    sort_order: 4
    lessons:
      - id: 019c9619-ab11-7011-c111-ab1100000011
        title: 'レッスン 11: OCR とドキュメントの理解'
        slug: bai-11-ocr-document-understanding
        description: >-
          OCR パイプライン: Tesseract、EasyOCR、PaddleOCR。ドキュメントレイアウト分析:
          LayoutLM、Doughnut。テーブルの抽出。請求書/領収書の処理。手書き認識。ベトナム語の OCR の課題。
        duration_minutes: 150
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019c9619-ab12-7012-c112-ab1200000012
        title: 'レッスン 12: マルチモーダル AI — GPT-4o ビジョン、ジェミニ ビジョン'
        slug: bai-12-multimodal-ai
        description: >-
          視覚言語モデル: GPT-4o、Gemini 1.5、Claude Vision。画像理解、チャート分析、ドキュメント QA のための
          API 統合。モデル間の精度を比較します。コストの最適化。
        duration_minutes: 150
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019c9619-ab13-7013-c113-ab1300000013
        title: 'レッスン 13: エッジ デプロイメント — TensorRT、ONNX、モバイル'
        slug: bai-13-edge-deployment
        description: >-
          実稼働用にモデルを最適化: ONNX エクスポート、TensorRT 最適化、量子化 (INT8、FP16)。 Jetson
          Nano、Raspberry Pi にデプロイします。モバイル展開: CoreML (iOS)、TFLite (Android)。
          FPSのベンチマーク。
        duration_minutes: 180
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019c9619-ab14-7014-c114-ab1400000014
        title: 'レッスン 14: Capstone — エンドツーエンド CV システムの構築'
        slug: bai-14-capstone
        description: >-
          プロジェクトの概要: トレーニングから導入までの完全な CV システムを構築します。ユースケース: 顧客カウント システム +
          店内行動分析。 YOLO + 追跡 + 分析ダッシュボード + エッジ展開。
        duration_minutes: 240
        is_free: true
        sort_order: 13
        video_url: null
reviews: []
quizzes: []
locale: ja
---

## シリーズのご紹介

**ディープラーニングを使用したコンピューター ビジョン** は、基本的な画像分類から物体検出 (YOLO)、画像セグメンテーション (SAM)、ビジョン トランスフォーマーに至るまで、画像およびビデオ認識システムの構築に役立つ実践的なコースです。

> 🎯 **コンピューター ビジョンを使用する理由** CV は、自動運転車、医療 (X 線、MRI)、小売 (顧客カウント)、セキュリティ (識別)、農業 (害虫検出)、製造 (エラー チェック) など、**最も** 実用的なアプリケーションを持つ AI セグメントです...

## 何を学ぶのですか?

### パート 1: CV の基礎
- **レッスン 1:** コンピューター ビジョンとは何ですか? OpenCVによる画像処理
- **レッスン 2:** CNN の詳細: ResNet、EfficientNet、MobileNet
- **レッスン 3:** 転移学習 — トレーニング済みモデルの使用

### パート 2: オブジェクトの検出
- **レッスン 4:** 🔥 YOLO v3 から v11 — すべてを検出する
- **レッスン 5:** 別のデータセットに対するカスタム YOLO トレーニング
- **レッスン 6:** リアルタイム検出 — カメラ、ビデオ ストリーム、追跡

### パート 3: セグメンテーションと最新の履歴書
- **レッスン 7:** 画像のセグメンテーション: セマンティック、インスタンス、パノプティック
- **レッスン 8:** 🔥 SAM (Segment Anything) — セグメントにはトレーニングは必要ありません
- **レッスン 9:** 安定した拡散と画像生成
- **レッスン 10:** ビジョントランスフォーマー (ViT) と CLIP

### パート 4: アプリケーションと展開
- **レッスン 11:** ベトナム人のための OCR と文書の理解
- **レッスン 12:** マルチモーダル AI: GPT-4o ビジョン、ジェミニ ビジョン
- **レッスン 13:** エッジ デプロイメント: TensorRT、ONNX、モバイル
- **レッスン 14:** Capstone: エンドツーエンド CV システム

## 入力が必要です

- **中級 Python** (NumPy、matplotlib)
- ニューラル ネットワークの基本的な理解 (または「AI & LLM」シリーズのレッスン 1 ～ 4 を完了)
- Google Colab (無料、T4 GPU を提供)
- ローカル GPU は有利ですが、**必須ではありません**

## 使用したツール

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
