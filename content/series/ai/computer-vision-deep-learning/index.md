---
id: 019c9619-aa06-7006-b006-aa0600000006
title: "Computer Vision với Deep Learning: Từ CNN đến Vision Transformer"
slug: computer-vision-deep-learning
description: >-
  Khóa học thực chiến về Computer Vision — từ CNN, Object Detection (YOLO),
  Image Segmentation (SAM) đến Vision Transformer và Multimodal AI.
  Hands-on với PyTorch, Ultralytics YOLO, Hugging Face. Deploy mô hình
  CV lên production với TensorRT và ONNX.
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
    title: "Phần 1: Nền tảng Computer Vision"
    description: Image processing cơ bản, CNN deep dive, và transfer learning
    sort_order: 1
    lessons:
      - id: 019c9619-ab01-7001-c101-ab0100000001
        title: 'Bài 1: Computer Vision là gì? — Image Processing cơ bản'
        slug: bai-1-computer-vision-la-gi
        description: >-
          Giới thiệu Computer Vision, ứng dụng thực tế. Image processing với
          OpenCV: resize, crop, filter, color spaces. Histogram, edge detection.
          Demo nhận dạng khuôn mặt cơ bản.
        duration_minutes: 120
        is_free: true
        sort_order: 0
        video_url: null
      - id: 019c9619-ab02-7002-c102-ab0200000002
        title: 'Bài 2: CNN Deep Dive — ResNet, EfficientNet, MobileNet'
        slug: bai-2-cnn-deep-dive
        description: >-
          Kiến trúc CNN hiện đại chi tiết: ResNet (skip connections), EfficientNet
          (compound scaling), MobileNet (depthwise separable convolutions).
          ImageNet benchmark. Feature visualization.
        duration_minutes: 150
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019c9619-ab03-7003-c103-ab0300000003
        title: 'Bài 3: Transfer Learning — Dùng Model đã Huấn luyện'
        slug: bai-3-transfer-learning
        description: >-
          Transfer learning: pretrained models, feature extraction, fine-tuning.
          Hands-on: image classification với EfficientNet pretrained trên ImageNet.
          Data augmentation strategies cho dataset nhỏ.
        duration_minutes: 150
        is_free: true
        sort_order: 2
        video_url: null
  - id: section-cv-02
    title: "Phần 2: Object Detection"
    description: Phát hiện và định vị đối tượng trong ảnh/video
    sort_order: 2
    lessons:
      - id: 019c9619-ab04-7004-c104-ab0400000004
        title: 'Bài 4: YOLO từ v3 đến v11 — Lý thuyết & Thực hành'
        slug: bai-4-yolo-object-detection
        description: >-
          Lịch sử YOLO: từ YOLOv3 đến YOLOv11 (Ultralytics). Kiến trúc YOLO,
          anchor boxes, non-max suppression. Hands-on: detect đối tượng với
          YOLOv8/v11 pretrained models. Metrics: mAP, IoU, Precision, Recall.
        duration_minutes: 180
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019c9619-ab05-7005-c105-ab0500000005
        title: 'Bài 5: Huấn luyện YOLO Custom — Label Data, Train & Deploy'
        slug: bai-5-train-yolo-custom
        description: >-
          End-to-end custom YOLO: thu thập ảnh, label với Roboflow/CVAT,
          cấu hình dataset YAML, train trên Google Colab, evaluate mAP,
          export model. Use case: đếm sản phẩm, phát hiện lỗi sản xuất.
        duration_minutes: 210
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019c9619-ab06-7006-c106-ab0600000006
        title: 'Bài 6: Real-time Detection — Camera, Video Stream'
        slug: bai-6-realtime-detection
        description: >-
          Object detection real-time: webcam, RTSP stream, video file.
          Tracking: SORT, DeepSORT, ByteTrack. Counting objects qua line,
          zone-based detection. Optimization cho FPS cao.
        duration_minutes: 150
        is_free: true
        sort_order: 5
        video_url: null
  - id: section-cv-03
    title: "Phần 3: Segmentation & Modern CV"
    description: Image Segmentation, SAM, Vision Transformer, và Diffusion Models
    sort_order: 3
    lessons:
      - id: 019c9619-ab07-7007-c107-ab0700000007
        title: 'Bài 7: Image Segmentation — Semantic, Instance & Panoptic'
        slug: bai-7-image-segmentation
        description: >-
          3 loại segmentation: semantic (phân loại pixel), instance (phân biệt
          từng đối tượng), panoptic (kết hợp). U-Net, Mask R-CNN. Hands-on
          với SegFormer. Ứng dụng: y tế, tự lái, bản đồ.
        duration_minutes: 180
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019c9619-ab08-7008-c108-ab0800000008
        title: 'Bài 8: SAM (Segment Anything) — Zero-shot Segmentation'
        slug: bai-8-sam-segment-anything
        description: >-
          Meta SAM & SAM2: segment bất kỳ đối tượng nào mà không cần train.
          Prompt types: point, box, text. SAM + YOLO combo. Grounding DINO +
          SAM. Interactive segmentation tool.
        duration_minutes: 150
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019c9619-ab09-7009-c109-ab0900000009
        title: 'Bài 9: Image Generation & Stable Diffusion'
        slug: bai-9-image-generation
        description: >-
          Diffusion Models lý thuyết: forward/reverse process. Stable Diffusion
          kiến trúc: VAE, U-Net, CLIP text encoder. Hands-on: text-to-image,
          image-to-image, ControlNet, LoRA cho style.
        duration_minutes: 180
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019c9619-ab10-7010-c110-ab1000000010
        title: 'Bài 10: Vision Transformer (ViT) & CLIP'
        slug: bai-10-vision-transformer-clip
        description: >-
          ViT: Transformer cho ảnh — patch embedding, position encoding,
          self-attention trên ảnh. CLIP: kết nối text và image trong cùng
          embedding space. Zero-shot image classification. Ứng dụng CLIP
          trong search, recommendation.
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
  - id: section-cv-04
    title: "Phần 4: Ứng dụng Thực tế & Deployment"
    description: OCR, Multimodal AI, Edge deployment, và Capstone project
    sort_order: 4
    lessons:
      - id: 019c9619-ab11-7011-c111-ab1100000011
        title: 'Bài 11: OCR & Document Understanding'
        slug: bai-11-ocr-document-understanding
        description: >-
          OCR pipeline: Tesseract, EasyOCR, PaddleOCR. Document layout
          analysis: LayoutLM, Donut. Table extraction. Invoice/receipt
          processing. Handwriting recognition. Tiếng Việt OCR challenges.
        duration_minutes: 150
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019c9619-ab12-7012-c112-ab1200000012
        title: 'Bài 12: Multimodal AI — GPT-4o Vision, Gemini Vision'
        slug: bai-12-multimodal-ai
        description: >-
          Vision-Language Models: GPT-4o, Gemini 1.5, Claude Vision. API
          integration cho image understanding, chart analysis, document QA.
          So sánh accuracy giữa các models. Cost optimization.
        duration_minutes: 150
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019c9619-ab13-7013-c113-ab1300000013
        title: 'Bài 13: Edge Deployment — TensorRT, ONNX & Mobile'
        slug: bai-13-edge-deployment
        description: >-
          Tối ưu model cho production: ONNX export, TensorRT optimization,
          quantization (INT8, FP16). Deploy trên Jetson Nano, Raspberry Pi.
          Mobile deployment: CoreML (iOS), TFLite (Android). Benchmark FPS.
        duration_minutes: 180
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019c9619-ab14-7014-c114-ab1400000014
        title: 'Bài 14: Capstone — Xây hệ thống CV End-to-End'
        slug: bai-14-capstone
        description: >-
          Dự án tổng kết: xây hệ thống CV hoàn chỉnh từ training đến deploy.
          Use case: hệ thống đếm khách + phân tích hành vi trong cửa hàng.
          YOLO + tracking + analytics dashboard + edge deploy.
        duration_minutes: 240
        is_free: true
        sort_order: 13
        video_url: null
reviews: []
quizzes: []
---

## Giới thiệu Series

**Computer Vision với Deep Learning** là khóa học thực chiến giúp bạn xây dựng hệ thống nhận dạng hình ảnh và video — từ phân loại ảnh cơ bản đến object detection (YOLO), image segmentation (SAM), và Vision Transformer.

> 🎯 **Tại sao Computer Vision?** CV là mảng AI có ứng dụng thực tế **nhiều nhất**: xe tự lái, y tế (X-ray, MRI), bán lẻ (đếm khách), an ninh (nhận dạng), nông nghiệp (phát hiện sâu bệnh), sản xuất (kiểm tra lỗi)...

## Bạn sẽ học được gì?

### Phần 1: Nền tảng CV
- **Bài 1:** Computer Vision là gì? Image processing với OpenCV
- **Bài 2:** CNN Deep Dive: ResNet, EfficientNet, MobileNet
- **Bài 3:** Transfer Learning — dùng model đã huấn luyện

### Phần 2: Object Detection
- **Bài 4:** 🔥 YOLO từ v3 đến v11 — detect mọi thứ
- **Bài 5:** Huấn luyện YOLO custom cho dataset riêng
- **Bài 6:** Real-time detection — camera, video stream, tracking

### Phần 3: Segmentation & Modern CV
- **Bài 7:** Image Segmentation: semantic, instance, panoptic
- **Bài 8:** 🔥 SAM (Segment Anything) — segment không cần train
- **Bài 9:** Stable Diffusion & Image Generation
- **Bài 10:** Vision Transformer (ViT) & CLIP

### Phần 4: Ứng dụng & Deployment
- **Bài 11:** OCR & Document Understanding cho tiếng Việt
- **Bài 12:** Multimodal AI: GPT-4o Vision, Gemini Vision
- **Bài 13:** Edge Deployment: TensorRT, ONNX, Mobile
- **Bài 14:** Capstone: hệ thống CV end-to-end

## Yêu cầu đầu vào

- **Python trung cấp** (NumPy, matplotlib)
- Hiểu cơ bản về Neural Networks (hoặc hoàn thành series "AI & LLM" bài 1-4)
- Google Colab (miễn phí, cung cấp GPU T4)
- GPU local là lợi thế nhưng **không bắt buộc**

## Công cụ sử dụng

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
