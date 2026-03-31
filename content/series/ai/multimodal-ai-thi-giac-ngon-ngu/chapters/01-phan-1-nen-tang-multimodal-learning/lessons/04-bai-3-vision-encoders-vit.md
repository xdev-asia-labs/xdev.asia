---
id: 019d8b35-bb03-7003-c003-ee0300000003
title: "Bài 3: Vision Encoders — ViT, DINOv2 & Beyond"
slug: bai-3-vision-encoders-vit
description: >-
  Vision Transformer (ViT). DINOv2 self-supervised. SigLIP vision encoder. Feature extraction cho multimodal. Patch embeddings.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: "Phần 1: Nền tảng Multimodal Learning"
course:
  id: 019d8b35-aa01-7001-b001-ff0600000001
  title: "Multimodal AI: Kết hợp Thị giác, Ngôn ngữ & Hơn thế"
  slug: multimodal-ai-thi-giac-ngon-ngu
---

## Giới thiệu

Vision Transformer (ViT). DINOv2 self-supervised. SigLIP vision encoder. Feature extraction cho multimodal. Patch embeddings.

---

## 1. Tổng quan

### Khái niệm chính

Vision Encoders — ViT, DINOv2 & Beyond là một chủ đề quan trọng trong lĩnh vực AI hiện đại.

---

## 2. Kiến trúc & Nguyên lý

### Core Architecture

```python
# Example implementation
import torch
import torch.nn as nn

class ExampleModel(nn.Module):
    def __init__(self, input_dim, output_dim):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(input_dim, 256),
            nn.ReLU(),
            nn.Dropout(0.2),
            nn.Linear(256, 128),
            nn.ReLU(),
            nn.Linear(128, output_dim),
        )
    
    def forward(self, x):
        return self.net(x)
```

---

## 3. Thực hành

### Setup

```bash
pip install torch transformers datasets
```

### Training Pipeline

```python
# Training loop
model = ExampleModel(input_dim=768, output_dim=10)
optimizer = torch.optim.AdamW(model.parameters(), lr=1e-4)
criterion = nn.CrossEntropyLoss()

for epoch in range(10):
    for batch in train_loader:
        optimizer.zero_grad()
        outputs = model(batch["input"])
        loss = criterion(outputs, batch["label"])
        loss.backward()
        optimizer.step()
```

---

## 4. Best Practices

| Aspect | Recommendation |
|--------|---------------|
| Data | Quality over quantity |
| Model | Start simple, scale up |
| Training | Monitor loss curves |
| Evaluation | Use appropriate metrics |

---

## Tổng kết

| Concept | Key Takeaway |
|---------|-------------|
| Architecture | Phù hợp với bài toán |
| Training | Careful hyperparameter tuning |
| Evaluation | Multiple metrics |
