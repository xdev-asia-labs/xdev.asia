---
id: 019c9619-ab10-7010-c110-ab1000000010
title: 第 10 課：視覺轉換器 (ViT) 和 CLIP
slug: bai-10-vision-transformer-clip
description: ViT：影像變壓器－補丁嵌入、位置編碼、影像自註意力。 CLIP：在同一嵌入空間中連接文字和圖像。零樣本影像分類。將CLIP應用於搜尋和推薦。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 9
section_title: 第 3 部分：細分與現代履歷
course:
  id: 019c9619-aa06-7006-b006-aa0600000006
  title: 深度學習的電腦視覺：從 CNN 到 Vision Transformer
  slug: computer-vision-deep-learning
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 人工智慧與機器學習 — 第 9 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 10 課：視覺轉換器 (ViT) 和 CLIP</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">深度學習的電腦視覺：從 CNN 到 Vision Transformer</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：細分與現代履歷</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

Transformer 改變了 NLP（GPT、BERT）。現在它改變了**電腦視覺**。 **ViT**（Vision Transformer）證明：Transformer 在影像分類上可以**超越 CNN**。 **CLIP** (OpenAI) 在同一空間連接文字和圖像 → 零樣本分類、圖像搜尋、多模態 AI。

> 🎯 **ViT + CLIP** 是現代多模態 AI 的基礎：GPT-4o Vision、Gemini、Claude Vision。

---

## 1.視覺變壓器（ViT）

### 1.1 想法：照片 → 補丁序列

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

### 1.2 補丁嵌入

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

### 1.3 ViT架構

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

### 1.4 ViT 與 CNN

| | CNN（ResNet）|變壓器 (ViT) |
|--|-------------|--------------------|
| **感應偏壓** |平移不變性、局部性 |減少偏差→需要更多數據|
| **需要資料** |小（<1M照片）|很多(>1000萬張照片）|
| **可擴展性** |峰值約為 150 層 |良好的規模：ViT-G（2B 參數）|
| **全球背景** |需要很多層|現在自我注意（所有談話補丁）|
| **預訓練** | ImageNet (130 萬) | JFT-300M、LAION-5B |

---

## 2. 使用 ViT 預訓練

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

### 2.1 為自訂資料集微調 ViT

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

## 3. CLIP — 連結文字與圖像

### 3.1 CLIP 是如何運作的？

```
Training (400M image-text pairs từ internet):

Image Encoder (ViT)     Text Encoder (Transformer)
"cat.jpg"   → [0.8, -0.2, ...]    "a photo of a cat" → [0.7, -0.1, ...]
                    ↕ Cosine Similarity = HIGH ✅

"cat.jpg"   → [0.8, -0.2, ...]    "a photo of a car" → [-0.3, 0.6, ...]
                    ↕ Cosine Similarity = LOW ❌

→ Learn: image và text cùng ý nghĩa = vectors gần nhau
```

### 3.2 零樣本影像分類

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

### 3.3 使用 CLIP 進行影像搜索

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

### 3.4 CLIP 應用

```
🔍 Image Search:        Text query → tìm ảnh tương tự
🏷️ Auto Tagging:        Tự gán tags cho ảnh (zero-shot)
🛡️ Content Moderation:  "NSFW content" → filter
📊 Image Clustering:    Nhóm ảnh theo semantic meaning
🎯 Recommendation:      "Show me photos similar to this style"
📝 Image Captioning:    CLIP + GPT → describe ảnh
```

---

## 4. DINOv2 — 自監督 ViT

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

## 總結

|概念 |記住|
|--------|--------|
| **ViT** |照片變壓器：分割補丁 → 自我專注 |
| **補丁嵌入** |圖片 224×224 → 196 個補丁（每個 16×16）→ 嵌入 |
| **剪輯** |在同一嵌入空間連接文字+圖像 |
| **零射擊** |圖像分類不需要訓練－只需要文字標籤 |
| **圖片搜尋** |編碼圖片+文字→餘弦相似度→搜尋|
| **DINOv2** |自監督ViT，功能通用|

## 一般練習

1. **ViT分類：** 使用預先訓練的ViT對20張影像進行分類。與 ResNet-50 比較準確度。
2. **CLIP 零樣本：** 建立 10 個越南語自訂標籤。 CLIP 正確分類影像嗎？
3. **圖片搜尋：** 為100張個人照片建立圖片搜尋引擎。用越南語搜尋。
4. **CLIP 相似度：** 任意 2 個影像 → CLIP 相似度分數。哪一個最相似？

> **下一篇文章：** OCR 和文件理解 — 識別文字並理解文件。
