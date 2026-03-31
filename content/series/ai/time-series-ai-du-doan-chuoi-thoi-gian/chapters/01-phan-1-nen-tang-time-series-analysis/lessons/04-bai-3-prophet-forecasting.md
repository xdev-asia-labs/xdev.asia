---
id: 019d8b37-bb03-7003-c003-ee0300000003
title: "Bài 3: Prophet & Modern Statistical Forecasting"
slug: bai-3-prophet-forecasting
description: >-
  Facebook Prophet. Additive/multiplicative seasonality. Holiday effects. Change points. NeuralProphet. Comparison benchmarks.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: "Phần 1: Nền tảng Time Series Analysis"
course:
  id: 019d8b37-aa01-7001-b001-ff0800000001
  title: "Time Series AI: Dự đoán & Phân tích Chuỗi Thời gian"
  slug: time-series-ai-du-doan-chuoi-thoi-gian
---

## Giới thiệu

Facebook Prophet. Additive/multiplicative seasonality. Holiday effects. Change points. NeuralProphet. Comparison benchmarks.

---

## 1. Tổng quan

### Khái niệm chính

Prophet & Modern Statistical Forecasting là một chủ đề quan trọng trong lĩnh vực AI hiện đại.

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
