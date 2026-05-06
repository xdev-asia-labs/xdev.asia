---
id: 019c9619-ab10-7010-c110-ab1000000010
title: 'Lesson 10: Vision Transformer (ViT) & CLIP'
slug: bai-10-vision-transformer-clip
description: >-
  ViT: Transformer for images — patch embedding, position encoding,
  self-attention on images. CLIP: connect text and image in the same embedding
  space. Zero-shot image classification. Applying CLIP in search and
  recommendation.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 9
section_title: 'Part 3: Segmentation & Modern CV'
course:
  id: 019c9619-aa06-7006-b006-aa0600000006
  title: 'Computer Vision with Deep Learning: From CNN to Vision Transformer'
  slug: computer-vision-deep-learning
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2807" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2807)"/>

  <!-- Decorations -->
  <g>
    <circle cx="962" cy="176" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="824" cy="138" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="686" cy="100" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="1048" cy="62" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="910" cy="284" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="76" x2="1100" y2="156" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="106" x2="1050" y2="176" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="952.8467875173176,110.5 952.8467875173176,141.5 926,157 899.1532124826824,141.5 899.1532124826824,110.50000000000001 926,95" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 AI & ML — Lesson 9</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 10: Vision Transformer (ViT) & CLIP</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Computer Vision with Deep Learning: From CNN to Vision Transformer</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: Segmentation & Modern CV</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

Transformer changed NLP (GPT, BERT). Now it changes **Computer Vision**. **ViT** (Vision Transformer) proves: Transformer can **surpass CNN** on image classification. **CLIP** (OpenAI) connects text and images in the same space → zero-shot classification, image search, multimodal AI.

> 🎯 **ViT + CLIP** is the foundation for modern multimodal AI: GPT-4o Vision, Gemini, Claude Vision.

---

## 1. Vision Transformer (ViT)

### 1.1 Idea: Photo → Sequence of Patches

```
Input Image (224×224)
    ↓
Chia thành patches (16×16 pixels mỗi patch)
→ 14 × 14 = 196 patches
    ↓
Mỗi patch → flatten → linear projection → patch embedding
→ 196 vectors, mỗi vector dimension D (ví dụ 768)
    ↓
Thêm [CLS] token + Position Embeddings
→ 197 tokens
    ↓
Transformer Encoder (12 layers)
→ Self-attention trên tất cả patches
    ↓
[CLS] token output → Classification Head
→ Prediction
```

### 1.2 Patch Embedding

```python
"""ViT: biến ảnh thành sequence of patches"""
import torch
import torch.nn as nn

class PatchEmbedding(nn.Module):
    def __init__(self, img_size=224, patch_size=16, in_channels=3, embed_dim=768):
        super().__init__()
        self.num_patches = (img_size // patch_size) ** 2  # 196
        self.patch_size = patch_size

        # Linear projection of flattened patches
        # Dùng Conv2d stride=patch_size → tương đương cắt patches + linear
        self.projection = nn.Conv2d(
            in_channels, embed_dim,
            kernel_size=patch_size,
            stride=patch_size
        )

    def forward(self, x):
        # x: (B, 3, 224, 224)
        x = self.projection(x)           # (B, 768, 14, 14)
        x = x.flatten(2)                 # (B, 768, 196)
        x = x.transpose(1, 2)           # (B, 196, 768) = sequence of patches
        return x

# Test
patch_embed = PatchEmbedding()
img = torch.randn(1, 3, 224, 224)
patches = patch_embed(img)
print(f"Patches: {patches.shape}")  # (1, 196, 768)
```

### 1.3 ViT Architecture

```python
"""Simplified ViT implementation"""
class VisionTransformer(nn.Module):
    def __init__(self, img_size=224, patch_size=16, in_channels=3,
                 embed_dim=768, num_heads=12, num_layers=12, num_classes=1000):
        super().__init__()

        # Patch Embedding
        self.patch_embed = PatchEmbedding(img_size, patch_size, in_channels, embed_dim)
        num_patches = self.patch_embed.num_patches

        # [CLS] token — learnable
        self.cls_token = nn.Parameter(torch.randn(1, 1, embed_dim))

        # Position Embeddings — learnable
        self.pos_embed = nn.Parameter(torch.randn(1, num_patches + 1, embed_dim))

        # Transformer Encoder
        encoder_layer = nn.TransformerEncoderLayer(
            d_model=embed_dim,
            nhead=num_heads,
            dim_feedforward=embed_dim * 4,
            activation="gelu",
            batch_first=True,
        )
        self.transformer = nn.TransformerEncoder(encoder_layer, num_layers=num_layers)

        # Classification Head
        self.norm = nn.LayerNorm(embed_dim)
        self.head = nn.Linear(embed_dim, num_classes)

    def forward(self, x):
        B = x.shape[0]

        # Patch embed
        x = self.patch_embed(x)           # (B, 196, 768)

        # Prepend [CLS] token
        cls_tokens = self.cls_token.expand(B, -1, -1)  # (B, 1, 768)
        x = torch.cat([cls_tokens, x], dim=1)          # (B, 197, 768)

        # Add position embeddings
        x = x + self.pos_embed                          # (B, 197, 768)

        # Transformer
        x = self.transformer(x)                         # (B, 197, 768)

        # Classify from [CLS] token
        cls_output = self.norm(x[:, 0])                 # (B, 768)
        logits = self.head(cls_output)                  # (B, num_classes)

        return logits

model = VisionTransformer(num_classes=10)
img = torch.randn(2, 3, 224, 224)
out = model(img)
print(f"Output: {out.shape}")  # (2, 10)
```

### 1.4 ViT vs CNN

| | CNN (ResNet) | Transformer (ViT) |
|--|-------------|-------------------|
| **Inductive bias** | Translation invariance, locality | Less bias → more data needed |
| **Data needed** | Little (<1M photos) | Many (>10M photos) |
| **Scalability** | Peaks at ~150 layers | Good scale: ViT-G (2B params) |
| **Global context** | Need many layers | Self-attention now (all talking patches) |
| **Pretrained** | ImageNet (1.3M) | JFT-300M, LAION-5B |

---

## 2. Use ViT Pretrained

```python
"""ViT pretrained — image classification"""
import torch
from transformers import ViTForImageClassification, ViTImageProcessor
from PIL import Image

# Load model + processor
processor = ViTImageProcessor.from_pretrained("google/vit-base-patch16-224")
model = ViTForImageClassification.from_pretrained("google/vit-base-patch16-224")

# Inference
image = Image.open("cat.jpg")
inputs = processor(images=image, return_tensors="pt")

with torch.no_grad():
    outputs = model(**inputs)

# Top-5 predictions
logits = outputs.logits
probs = torch.softmax(logits, dim=-1)
top5_prob, top5_idx = probs.topk(5)

for prob, idx in zip(top5_prob[0], top5_idx[0]):
    label = model.config.id2label[idx.item()]
    print(f"  {label:30s} {prob.item():.4f}")
```

### 2.1 Fine-tune ViT for Custom Dataset

```python
"""Fine-tune ViT trên dataset riêng"""
from transformers import ViTForImageClassification, TrainingArguments, Trainer
from datasets import load_dataset
import torch

# Load dataset
dataset = load_dataset("food101", split={"train": "train[:5000]", "test": "validation[:1000]"})

# Processor
processor = ViTImageProcessor.from_pretrained("google/vit-base-patch16-224")

def transform(examples):
    examples["pixel_values"] = [
        processor(images=img, return_tensors="pt")["pixel_values"][0]
        for img in examples["image"]
    ]
    return examples

dataset = dataset.with_transform(transform)

# Model
model = ViTForImageClassification.from_pretrained(
    "google/vit-base-patch16-224",
    num_labels=101,
    ignore_mismatched_sizes=True,
)

# Training
training_args = TrainingArguments(
    output_dir="./vit-food101",
    num_train_epochs=5,
    per_device_train_batch_size=16,
    learning_rate=2e-5,
    evaluation_strategy="epoch",
    save_strategy="epoch",
    load_best_model_at_end=True,
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=dataset["train"],
    eval_dataset=dataset["test"],
)

trainer.train()
```

---

## 3. CLIP — Connect Text and Image

### 3.1 How does CLIP work?

```
Training (400M image-text pairs từ internet):

Image Encoder (ViT)     Text Encoder (Transformer)
"cat.jpg"   → [0.8, -0.2, ...]    "a photo of a cat" → [0.7, -0.1, ...]
                    ↕ Cosine Similarity = HIGH ✅

"cat.jpg"   → [0.8, -0.2, ...]    "a photo of a car" → [-0.3, 0.6, ...]
                    ↕ Cosine Similarity = LOW ❌

→ Learn: image và text cùng ý nghĩa = vectors gần nhau
```

### 3.2 Zero-shot Image Classification

```python
"""CLIP: phân loại ảnh MÀ KHÔNG CẦN TRAIN!"""
import torch
from PIL import Image
from transformers import CLIPProcessor, CLIPModel

# Load CLIP
model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

# Image + text labels (bạn tự define!)
image = Image.open("animal.jpg")

# Candidate labels — BẤT KỲ text nào!
labels = [
    "a photo of a cat",
    "a photo of a dog",
    "a photo of a bird",
    "a photo of a fish",
    "a photo of a horse",
]

# Encode
inputs = processor(
    text=labels,
    images=image,
    return_tensors="pt",
    padding=True,
)

with torch.no_grad():
    outputs = model(**inputs)

# Similarities
logits_per_image = outputs.logits_per_image  # (1, 5)
probs = logits_per_image.softmax(dim=1)

for label, prob in zip(labels, probs[0]):
    print(f"  {label:30s} {prob.item():.4f}")
```

### 3.3 Image Search with CLIP

```python
"""CLIP: tìm ảnh bằng text query"""
import os
import torch
import numpy as np
from PIL import Image
from transformers import CLIPProcessor, CLIPModel

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

# 1. Encode tất cả ảnh trong thư mục (1 lần)
image_dir = "my_photos/"
image_paths = [os.path.join(image_dir, f) for f in os.listdir(image_dir)
               if f.endswith(('.jpg', '.png'))]

image_embeddings = []
for path in image_paths:
    img = Image.open(path)
    inputs = processor(images=img, return_tensors="pt")
    with torch.no_grad():
        emb = model.get_image_features(**inputs)
    emb = emb / emb.norm(dim=-1, keepdim=True)  # Normalize
    image_embeddings.append(emb)

image_embeddings = torch.cat(image_embeddings)  # (N, 512)

# 2. Search bằng text query
def search_images(query, top_k=5):
    inputs = processor(text=[query], return_tensors="pt")
    with torch.no_grad():
        text_emb = model.get_text_features(**inputs)
    text_emb = text_emb / text_emb.norm(dim=-1, keepdim=True)

    # Cosine similarity
    similarities = (text_emb @ image_embeddings.T).squeeze()
    top_indices = similarities.argsort(descending=True)[:top_k]

    print(f"🔍 Query: '{query}'")
    for i, idx in enumerate(top_indices):
        print(f"  {i+1}. {image_paths[idx]} (score: {similarities[idx]:.3f})")

# Test
search_images("sunset at the beach")
search_images("a person cooking food")
search_images("mountains with snow")
```

### 3.4 CLIP Applications

```
🔍 Image Search:        Text query → tìm ảnh tương tự
🏷️ Auto Tagging:        Tự gán tags cho ảnh (zero-shot)
🛡️ Content Moderation:  "NSFW content" → filter
📊 Image Clustering:    Nhóm ảnh theo semantic meaning
🎯 Recommendation:      "Show me photos similar to this style"
📝 Image Captioning:    CLIP + GPT → describe ảnh
```

---

## 4. DINOv2 — Self-supervised ViT

```python
"""DINOv2: ViT pretrained không cần labels — Meta AI"""
import torch
from transformers import AutoModel, AutoImageProcessor
from PIL import Image

processor = AutoImageProcessor.from_pretrained("facebook/dinov2-base")
model = AutoModel.from_pretrained("facebook/dinov2-base")

# Extract features
image = Image.open("product.jpg")
inputs = processor(images=image, return_tensors="pt")

with torch.no_grad():
    outputs = model(**inputs)

# CLS token embedding — dùng cho classification, retrieval
cls_embedding = outputs.last_hidden_state[:, 0]  # (1, 768)

# Patch tokens — dùng cho segmentation, dense prediction
patch_embeddings = outputs.last_hidden_state[:, 1:]  # (1, 196, 768)

print(f"CLS embedding: {cls_embedding.shape}")
print(f"Patch embeddings: {patch_embeddings.shape}")
```

---

## Summary

| Concepts | Remember |
|--------|--------|
| **ViT** | Transformer for photos: split patches → self-attention |
| **Patch Embedding** | Image 224×224 → 196 patches (16×16 each) → embed |
| **CLIP** | Connect text + image in the same embedding space |
| **Zero-shot** | Classifying images requires NO training — just text labels |
| **Image Search** | Encode image + text → cosine similarity → search |
| **DINOv2** | Self-supervised ViT, features universal |

## General exercises

1. **ViT Classification:** Use ViT pretrained to classify 20 images. Compare accuracy with ResNet-50.
2. **CLIP Zero-shot:** Create 10 Vietnamese custom labels. CLIP classify images correctly?
3. **Image Search:** Build image search engine for 100 personal photos. Search in Vietnamese.
4. **CLIP Similarity:** Any 2 images → CLIP similarity score. Which one is most similar?

> **Next article:** OCR & Document Understanding — recognize text and understand documents.
