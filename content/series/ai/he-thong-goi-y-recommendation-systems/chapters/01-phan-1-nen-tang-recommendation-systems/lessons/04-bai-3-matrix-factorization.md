---
id: 019d8b36-bb03-7003-c003-ee0300000003
title: "Bài 3: Matrix Factorization — SVD, ALS & BPR"
slug: bai-3-matrix-factorization
description: >-
  SVD decomposition. ALS: Alternating Least Squares. BPR: Bayesian Personalized Ranking. Implicit feedback handling. Surprise library.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 2
section_title: "Phần 1: Nền tảng Recommendation Systems"
course:
  id: 019d8b36-aa01-7001-b001-ff0700000001
  title: "Hệ thống Gợi ý (Recommendation Systems): Từ Cơ bản đến Production"
  slug: he-thong-goi-y-recommendation-systems
---

## Giới thiệu

SVD decomposition. ALS: Alternating Least Squares. BPR: Bayesian Personalized Ranking. Implicit feedback handling. Surprise library.

---

## 1. Tổng quan

### Khái niệm chính

Matrix Factorization — SVD, ALS & BPR là một chủ đề quan trọng trong lĩnh vực AI hiện đại.

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
