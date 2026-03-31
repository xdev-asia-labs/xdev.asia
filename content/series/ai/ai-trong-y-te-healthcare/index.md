---
id: 019d8b33-aa01-7001-b001-ff0400000001
title: "AI trong Y tế & Healthcare: Ứng dụng Thực chiến"
slug: ai-trong-y-te-healthcare
description: >-
  Khóa học toàn diện về AI trong lĩnh vực Y tế — từ Medical Imaging với CNN,
  NLP cho hồ sơ bệnh án, Drug Discovery với GNN, đến triển khai AI tuân thủ
  HIPAA/FDA. Thực hành với Python, PyTorch, Hugging Face, và các bộ dữ liệu
  y tế chuẩn như MIMIC, CheXpert, PubMed.
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
  name: AI & Machine Learning
  slug: ai-machine-learning
tags:
  - name: Healthcare AI
    slug: healthcare-ai
  - name: Medical Imaging
    slug: medical-imaging
  - name: Drug Discovery
    slug: drug-discovery
  - name: NLP Y tế
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
    title: "Phần 1: Nền tảng AI Y tế & Medical Data"
    description: Hiểu đặc thù dữ liệu y tế, privacy, và các tiêu chuẩn
    sort_order: 1
    lessons:
      - id: 019d8b33-bb01-7001-c001-ee0100000001
        title: 'Bài 1: AI trong Y tế — Tổng quan & Đạo đức'
        slug: bai-1-ai-y-te-tong-quan
        description: >-
          Landscape AI Healthcare. Các ứng dụng chính: chẩn đoán, thuốc, quản lý bệnh nhân. Đạo đức: bias, privacy, explainability. Regulatory landscape: FDA, CE Mark.
        duration_minutes: 90
        is_free: true
        sort_order: 0
        video_url: null
      - id: 019d8b33-bb02-7002-c002-ee0200000002
        title: 'Bài 2: Dữ liệu Y tế — DICOM, HL7 FHIR & Privacy'
        slug: bai-2-du-lieu-y-te-dicom-fhir
        description: >-
          Medical data formats: DICOM images, HL7 FHIR. EHR systems. De-identification. HIPAA compliance. Data pipeline cho medical AI.
        duration_minutes: 120
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8b33-bb03-7003-c003-ee0300000003
        title: 'Bài 3: Medical Image Processing Fundamentals'
        slug: bai-3-medical-image-processing
        description: >-
          X-ray, CT, MRI fundamentals. DICOM processing với pydicom. Image preprocessing: windowing, normalization. Data augmentation cho medical images.
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
  - id: section-hc-02
    title: "Phần 2: Medical Imaging AI — Computer Vision cho Y tế"
    description: CNN, detection, segmentation cho ảnh y tế
    sort_order: 2
    lessons:
      - id: 019d8b33-bb04-7004-c004-ee0400000004
        title: 'Bài 4: CNN cho Medical Image Classification'
        slug: bai-4-cnn-medical-classification
        description: >-
          Transfer learning ResNet/EfficientNet cho X-ray classification. CheXpert dataset. Multi-label classification. Grad-CAM explainability.
        duration_minutes: 180
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8b33-bb05-7005-c005-ee0500000005
        title: 'Bài 5: Medical Image Segmentation — U-Net & Variants'
        slug: bai-5-unet-segmentation
        description: >-
          U-Net architecture. Attention U-Net, TransUNet. Organ/tumor segmentation. Dice loss, IoU metrics. 3D medical image segmentation.
        duration_minutes: 180
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019d8b33-bb06-7006-c006-ee0600000006
        title: 'Bài 6: Object Detection & Pathology AI'
        slug: bai-6-detection-pathology
        description: >-
          YOLO/Faster R-CNN cho lesion detection. Whole Slide Image analysis. Digital pathology workflow. Cell counting, tissue classification.
        duration_minutes: 150
        is_free: true
        sort_order: 5
        video_url: null
  - id: section-hc-03
    title: "Phần 3: Clinical NLP & Genomics AI"
    description: NLP cho hồ sơ bệnh án, protein structure, drug discovery
    sort_order: 3
    lessons:
      - id: 019d8b33-bb07-7007-c007-ee0700000007
        title: 'Bài 7: Clinical NLP — Phân tích Hồ sơ Bệnh án'
        slug: bai-7-clinical-nlp
        description: >-
          NER y tế: diseases, drugs, symptoms. BioBERT, PubMedBERT. Relation extraction. Clinical text classification. ICD coding automation.
        duration_minutes: 150
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8b33-bb08-7008-c008-ee0800000008
        title: 'Bài 8: Medical Q&A & Chatbot Y tế'
        slug: bai-8-medical-qa-chatbot
        description: >-
          Medical question answering. RAG cho y tế: PubMed retrieval. Fine-tune LLM cho medical domain. Guardrails, safety cho medical chatbot.
        duration_minutes: 150
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8b33-bb09-7009-c009-ee0900000009
        title: 'Bài 9: Drug Discovery với AI — GNN & Molecular Generation'
        slug: bai-9-drug-discovery-gnn
        description: >-
          Graph Neural Networks cho molecular property prediction. SMILES representation. Molecular generation. Virtual screening. ADMET prediction.
        duration_minutes: 180
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019d8b33-bb10-7010-c010-ee1000000010
        title: 'Bài 10: Genomics & Protein Structure Prediction'
        slug: bai-10-genomics-protein
        description: >-
          DNA sequence analysis. Variant calling. AlphaFold overview. Protein structure prediction basics. Genomics data pipeline.
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
  - id: section-hc-04
    title: "Phần 4: Production & Compliance"
    description: Deploy AI y tế tuân thủ regulations, clinical trials
    sort_order: 4
    lessons:
      - id: 019d8b33-bb11-7011-c011-ee1100000011
        title: 'Bài 11: Federated Learning cho Y tế'
        slug: bai-11-federated-learning-y-te
        description: >-
          Federated Learning: train mà không share data. Privacy-preserving AI. Flower framework. Multi-hospital collaboration.
        duration_minutes: 120
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8b33-bb12-7012-c012-ee1200000012
        title: 'Bài 12: Explainable AI (XAI) trong Y tế'
        slug: bai-12-xai-y-te
        description: >-
          SHAP, LIME cho medical models. Grad-CAM visualization. Attention maps. Clinical validation. Building trust với clinicians.
        duration_minutes: 120
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8b33-bb13-7013-c013-ee1300000013
        title: 'Bài 13: FDA & Regulatory Compliance cho AI Medical Devices'
        slug: bai-13-fda-regulatory
        description: >-
          FDA 510(k) và De Novo pathway. SaMD classification. Clinical validation requirements. Post-market surveillance. EU MDR/AI Act.
        duration_minutes: 120
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019d8b33-bb14-7014-c014-ee1400000014
        title: 'Bài 14: Deploy Medical AI — MLOps cho Healthcare'
        slug: bai-14-deploy-medical-ai
        description: >-
          HIPAA-compliant infrastructure. Model monitoring cho clinical AI. A/B testing trong clinical trials. Docker, Kubernetes cho medical AI.
        duration_minutes: 150
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8b33-bb15-7015-c015-ee1500000015
        title: 'Bài 15: Capstone — Xây dựng Medical AI Pipeline End-to-End'
        slug: bai-15-capstone-medical-ai
        description: >-
          Dự án tổng kết: X-ray classification system hoặc Clinical NLP pipeline. Từ data processing đến deploy tuân thủ regulations.
        duration_minutes: 240
        is_free: true
        sort_order: 14
        video_url: null
---
