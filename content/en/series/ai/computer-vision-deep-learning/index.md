---
id: 019c9619-aa06-7006-b006-aa0600000006
title: 'Computer Vision with Deep Learning: From CNN to Vision Transformer'
slug: computer-vision-deep-learning
description: >-
  Practical course on Computer Vision — from CNN, Object Detection (YOLO), Image
  Segmentation (SAM) to Vision Transformer and Multimodal AI. Hands-on with
  PyTorch, Ultralytics YOLO, Hugging Face. Deploy CV model to production with
  TensorRT and ONNX.
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
  name: AI & Machine Learning
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
    title: 'Part 1: Computer Vision Platform'
    description: 'Basic image processing, CNN deep dive, and transfer learning'
    sort_order: 1
    lessons:
      - id: 019c9619-ab01-7001-c101-ab0100000001
        title: 'Lesson 1: What is Computer Vision? — Basic Image Processing'
        slug: bai-1-computer-vision-la-gi
        description: >-
          Introducing Computer Vision, practical applications. Image processing
          with OpenCV: resize, crop, filter, color spaces. Histogram, edge
          detection. Basic facial recognition demo.
        duration_minutes: 120
        is_free: true
        sort_order: 0
        video_url: null
      - id: 019c9619-ab02-7002-c102-ab0200000002
        title: 'Lesson 2: CNN Deep Dive — ResNet, EfficientNet, MobileNet'
        slug: bai-2-cnn-deep-dive
        description: >-
          Detailed modern CNN architecture: ResNet (skip connections),
          EfficientNet (compound scaling), MobileNet (depthwise separable
          convolutions). ImageNet benchmark. Feature visualization.
        duration_minutes: 150
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019c9619-ab03-7003-c103-ab0300000003
        title: 'Lesson 3: Transfer Learning — Using a Trained Model'
        slug: bai-3-transfer-learning
        description: >-
          Transfer learning: pretrained models, feature extraction, fine-tuning.
          Hands-on: image classification with EfficientNet pretrained on
          ImageNet. Data augmentation strategies for small datasets.
        duration_minutes: 150
        is_free: true
        sort_order: 2
        video_url: null
  - id: section-cv-02
    title: 'Part 2: Object Detection'
    description: Detect and locate objects in photos/videos
    sort_order: 2
    lessons:
      - id: 019c9619-ab04-7004-c104-ab0400000004
        title: 'Lesson 4: YOLO from v3 to v11 — Theory & Practice'
        slug: bai-4-yolo-object-detection
        description: >-
          History of YOLO: from YOLOv3 to YOLOv11 (Ultralytics). YOLO
          architecture, anchor boxes, non-max suppression. Hands-on: detect
          objects with YOLOv8/v11 pretrained models. Metrics: mAP, IoU,
          Precision, Recall.
        duration_minutes: 180
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019c9619-ab05-7005-c105-ab0500000005
        title: 'Lesson 5: YOLO Custom Training — Label Data, Train & Deploy'
        slug: bai-5-train-yolo-custom
        description: >-
          End-to-end custom YOLO: collect images, label with Roboflow/CVAT,
          configure YAML dataset, train on Google Colab, evaluate mAP, export
          model. Use case: counting products, detecting production errors.
        duration_minutes: 210
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019c9619-ab06-7006-c106-ab0600000006
        title: 'Lesson 6: Real-time Detection — Camera, Video Stream'
        slug: bai-6-realtime-detection
        description: >-
          Object detection real-time: webcam, RTSP stream, video file. Tracking:
          SORT, DeepSORT, ByteTrack. Counting objects via line, zone-based
          detection. Optimization for high FPS.
        duration_minutes: 150
        is_free: true
        sort_order: 5
        video_url: null
  - id: section-cv-03
    title: 'Part 3: Segmentation & Modern CV'
    description: 'Image Segmentation, SAM, Vision Transformer, and Diffusion Models'
    sort_order: 3
    lessons:
      - id: 019c9619-ab07-7007-c107-ab0700000007
        title: 'Lesson 7: Image Segmentation — Semantic, Instance & Panoptic'
        slug: bai-7-image-segmentation
        description: >-
          3 types of segmentation: semantic (pixel classification), instance
          (distinguishing each object), panoptic (combination). U-Net, Mask
          R-CNN. Hands-on with SegFormer. Applications: medical, self-driving,
          maps.
        duration_minutes: 180
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019c9619-ab08-7008-c108-ab0800000008
        title: 'Lesson 8: SAM (Segment Anything) — Zero-shot Segmentation'
        slug: bai-8-sam-segment-anything
        description: >-
          Meta SAM & SAM2: segment any object without training. Prompt types:
          point, box, text. SAM + YOLO combo. Grounding DINO + SAM. Interactive
          segmentation tool.
        duration_minutes: 150
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019c9619-ab09-7009-c109-ab0900000009
        title: 'Lesson 9: Image Generation & Stable Diffusion'
        slug: bai-9-image-generation
        description: >-
          Theoretical Diffusion Models: forward/reverse process. Stable
          Diffusion architecture: VAE, U-Net, CLIP text encoder. Hands-on:
          text-to-image, image-to-image, ControlNet, LoRA for style.
        duration_minutes: 180
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019c9619-ab10-7010-c110-ab1000000010
        title: 'Lesson 10: Vision Transformer (ViT) & CLIP'
        slug: bai-10-vision-transformer-clip
        description: >-
          ViT: Transformer for images — patch embedding, position encoding,
          self-attention on images. CLIP: connect text and image in the same
          embedding space. Zero-shot image classification. Applying CLIP in
          search and recommendation.
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
  - id: section-cv-04
    title: 'Part 4: Practical Application & Deployment'
    description: 'OCR, Multimodal AI, Edge deployment, and Capstone project'
    sort_order: 4
    lessons:
      - id: 019c9619-ab11-7011-c111-ab1100000011
        title: 'Lesson 11: OCR & Document Understanding'
        slug: bai-11-ocr-document-understanding
        description: >-
          OCR pipeline: Tesseract, EasyOCR, PaddleOCR. Document layout analysis:
          LayoutLM, Donut. Table extraction. Invoice/receipt processing.
          Handwriting recognition. Vietnamese OCR challenges.
        duration_minutes: 150
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019c9619-ab12-7012-c112-ab1200000012
        title: 'Lesson 12: Multimodal AI — GPT-4o Vision, Gemini Vision'
        slug: bai-12-multimodal-ai
        description: >-
          Vision-Language Models: GPT-4o, Gemini 1.5, Claude Vision. API
          integration for image understanding, chart analysis, document QA.
          Compare accuracy between models. Cost optimization.
        duration_minutes: 150
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019c9619-ab13-7013-c113-ab1300000013
        title: 'Lesson 13: Edge Deployment — TensorRT, ONNX & Mobile'
        slug: bai-13-edge-deployment
        description: >-
          Optimize model for production: ONNX export, TensorRT optimization,
          quantization (INT8, FP16). Deploy on Jetson Nano, Raspberry Pi. Mobile
          deployment: CoreML (iOS), TFLite (Android). Benchmark FPS.
        duration_minutes: 180
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019c9619-ab14-7014-c114-ab1400000014
        title: 'Lesson 14: Capstone — Building an End-to-End CV system'
        slug: bai-14-capstone
        description: >-
          Project summary: building a complete CV system from training to
          deployment. Use case: customer counting system + in-store behavior
          analysis. YOLO + tracking + analytics dashboard + edge deployment.
        duration_minutes: 240
        is_free: true
        sort_order: 13
        video_url: null
reviews: []
quizzes: []
locale: en
---

## Introducing the Series

**Computer Vision with Deep Learning** is a hands-on course that helps you build image and video recognition systems — from basic image classification to object detection (YOLO), image segmentation (SAM), and Vision Transformer.

> 🎯 **Why Computer Vision?** CV is the AI segment with the **most** practical applications: self-driving cars, medical (X-ray, MRI), retail (customer counting), security (identification), agriculture (pest detection), manufacturing (error checking)...

## What will you learn?

### Part 1: CV foundation
- **Lesson 1:** What is Computer Vision? Image processing with OpenCV
- **Lesson 2:** CNN Deep Dive: ResNet, EfficientNet, MobileNet
- **Lesson 3:** Transfer Learning — using the trained model

### Part 2: Object Detection
- **Lesson 4:** 🔥 YOLO from v3 to v11 — detect everything
- **Lesson 5:** Custom YOLO training for a separate dataset
- **Lesson 6:** Real-time detection — camera, video stream, tracking

### Part 3: Segmentation & Modern CV
- **Lesson 7:** Image Segmentation: semantic, instance, panoptic
- **Lesson 8:** 🔥 SAM (Segment Anything) — segments do not need training
- **Lesson 9:** Stable Diffusion & Image Generation
- **Lesson 10:** Vision Transformer (ViT) & CLIP

### Part 4: Application & Deployment
- **Lesson 11:** OCR & Document Understanding for Vietnamese
- **Lesson 12:** Multimodal AI: GPT-4o Vision, Gemini Vision
- **Lesson 13:** Edge Deployment: TensorRT, ONNX, Mobile
- **Lesson 14:** Capstone: end-to-end CV system

## Input required

- **Intermediate Python** (NumPy, matplotlib)
- Basic understanding of Neural Networks (or complete "AI & LLM" series lessons 1-4)
- Google Colab (free, offers T4 GPU)
- Local GPU is advantageous but **not required**

## Tools used

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
