---
id: 019c9619-bb10-7010-c010-bb1000000010
title: 第 10 課：法學碩士預訓練 — CLM、MLM 與擴展法則
slug: bai-10-pre-training-llms
description: LLM 預訓練流程：因果 LM 與 Masked LM、資料管理。 Chinchilla 的縮放定律 — 模型大小、資料和計算之間的關係。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 9
section_title: 第 3 部分：法學碩士培訓和微調
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: 人工智慧和法學碩士：從基礎到高級
  slug: ai-llm-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8805" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8805)"/>

  <!-- Decorations -->
  <g>
    <circle cx="688" cy="154" r="26" fill="#fbbf24" opacity="0.09"/>
    <circle cx="776" cy="282" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="864" cy="150" r="14" fill="#fbbf24" opacity="0.07"/>
    <circle cx="952" cy="278" r="8" fill="#fbbf24" opacity="0.11"/>
    <circle cx="1040" cy="146" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="174" x2="1100" y2="254" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="204" x2="1050" y2="274" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="949.1147367097487,109.5 949.1147367097487,138.5 924,153 898.8852632902513,138.5 898.8852632902513,109.50000000000001 924,95" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 人工智慧與機器學習 — 第 9 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 10 課：法學碩士預訓練 — CLM、MLM 和</tspan>
      <tspan x="60" dy="42">縮放法則</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">人工智慧和法學碩士：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：法學碩士培訓和微調</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 概述

預訓練是每個法學碩士的**基礎**步驟。一個經過良好預訓練的模型將只透過預測文本來學習文法、語意、世界知識和推理能力。本文解釋了該過程。

---

## 1.什麼是預訓練？

預訓練是在**大量資料**（數百GB到TB的文字）上訓練模型的階段，具有**自我監督的目標**—無需人工標籤。

```
Pre-training Data:
- Common Crawl (internet text)     ~50%
- Books (BookCorpus, Gutenberg)    ~10%
- Wikipedia                         ~5%
- Code (GitHub)                    ~10%
- Scientific papers (arXiv)         ~5%
- Other curated sources            ~20%
```

經過預訓練後，模型能夠**通用語言理解**——這是微調每項任務的基礎。

---

## 2. 因果語言建模 (CLM)

**使用者：** GPT 系列、LLaMA、Mistral、Falcon

**目標：** 根據先前的標記預測下一個標記。

```
Input:  "The quick brown fox"
Label:  "quick brown fox jumps"

Loss = -∑ log P(token_t | token_1, ..., token_{t-1})
```

```python
import torch
import torch.nn as nn
from transformers import AutoTokenizer, AutoModelForCausalLM

# Minh họa CLM loss
def compute_clm_loss(model, input_ids):
    """
    input_ids: (batch, seq_len)
    Labels = input_ids shifted right (next token prediction)
    """
    outputs = model(input_ids, labels=input_ids)
    # HuggingFace tự động shift: labels[1:] vs logits[:-1]
    return outputs.loss

# Thực tế với GPT-2
tokenizer = AutoTokenizer.from_pretrained("gpt2")
model = AutoModelForCausalLM.from_pretrained("gpt2")

text = "The quick brown fox jumps over the lazy dog"
inputs = tokenizer(text, return_tensors="pt")
loss = compute_clm_loss(model, inputs["input_ids"])
print(f"CLM Loss: {loss.item():.4f}")
print(f"Perplexity: {torch.exp(loss).item():.2f}")
```

**CLM優勢：**
- 自然地適合文字生成
- 因果掩模→可直接用於生成

---

## 3. 遮罩語言建模 (MLM)

**使用者：** BERT、ROBERTa、ALBERT

**目標：** 隨機屏蔽 15% 的 token，預測屏蔽後的 token。

```
Original: "The [MASK] brown fox jumps"
Predict:  "quick"
```

```python
from transformers import BertForMaskedLM, BertTokenizer
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = BertForMaskedLM.from_pretrained("bert-base-uncased")

text = "The quick brown [MASK] jumps over the lazy dog"
inputs = tokenizer(text, return_tensors="pt")
mask_idx = (inputs["input_ids"] == tokenizer.mask_token_id).nonzero(as_tuple=True)[1]

with torch.no_grad():
    outputs = model(**inputs)
    logits = outputs.logits

# Top 5 dự đoán cho [MASK]
top5 = torch.topk(logits[0, mask_idx], 5).indices
predictions = tokenizer.convert_ids_to_tokens(top5[0])
print(f"Top predictions: {predictions}")
# ['fox', 'dog', 'cat', 'rabbit', 'horse']
```

**傳銷優勢：**
- 雙向脈絡→更深入的理解
- 適合 NLU 任務（分類、NER、問答）

**缺點：**無法直接產生文字。

---

## 4. 資料管理

數據品質**決定**模型品質。典型的資料處理流程：

### 4.1 集合

```
Common Crawl → hàng tỷ web pages mỗi tháng
GitHub → source code
arXiv → khoa học
Wikipedia → encyclopedic knowledge
Books3, Gutenberg → sách
```

### 4.2 過濾

```python
# Các bước lọc điển hình
filters = [
    "language_detection",      # Giữ ngôn ngữ mục tiêu
    "quality_scoring",         # FastText/classifier lọc low-quality
    "deduplication",           # MinHash LSH loại duplicate
    "toxic_content_filter",    # Loại nội dung độc hại
    "pii_removal",             # Loại PII (email, phone, SSN)
    "length_filter",           # Loại doc quá ngắn/dài
]
```

### 4.3 標記化與打包

```python
# Ghép nhiều documents thành chunks dài (e.g., 2048 tokens)
# Dùng separator token giữa documents
# EOS token đánh dấu hết document
```

---

## 5. 縮放法則

### 5.1 卡普蘭等。 (2020) — 開放人工智慧

損失根據參數 (N)、數據 (D) 和計算 (C) 的數量按 **冪律** 減少：

```
L(N) ∝ N^{-0.076}     (scale parameters)
L(D) ∝ D^{-0.095}     (scale data)
L(C) ∝ C^{-0.050}     (scale compute)
```

**結論：**“擴展一切－越大越好。” → GPT-3 175B

### 5.2 龍貓 (2022) — DeepMind

霍夫曼等人。發現：**GPT-3 和當時的許多模型都訓練不足！ **

在固定計算預算 C 的情況下，最優值是：
```
N_optimal ∝ C^{0.5}
D_optimal ∝ C^{0.5}

→ N và D nên scale BẰNG NHAU
```

**龍貓的經驗法則：**
```
Số tokens training ≈ 20 × số parameters

GPT-3 (175B params) → nên train trên 3.5T tokens
                       (thực tế chỉ train ~300B tokens → underpowered)

Llama-2 (7B params) → train 2T tokens ✅ (compute-optimal)
```

### 5.3 實際應用

```
Model         Params    Tokens       Compute-optimal?
GPT-3         175B      300B         ❌ Under-trained
Chinchilla    70B       1.4T         ✅ Optimal
LLaMA-1       7-65B     1T           ~✅
LLaMA-2       7-70B     2T           ✅
Mistral-7B    7B        ~1T          ✅
```

---

## 6. 培訓基礎設施

### 6.1 分散式訓練

```
Data Parallelism: copy model lên nhiều GPU, chia batch
Tensor Parallelism: chia layers/weights across GPUs
Pipeline Parallelism: chia layers thành pipeline stages
ZeRO (DeepSpeed): partition optimizer states, gradients, params
```

### 6.2 混合精度

```python
# bf16 training (tốt hơn fp16 cho LLM)
from transformers import TrainingArguments

args = TrainingArguments(
    bf16=True,                    # Brain Float 16
    gradient_checkpointing=True,  # Tiết kiệm VRAM
    gradient_accumulation_steps=4 # Accumulate 4 steps → effective batch lớn hơn
)
```

### 6.3 最佳化器

```python
# AdamW với cosine LR schedule là tiêu chuẩn
optimizer = torch.optim.AdamW(model.parameters(), lr=3e-4, weight_decay=0.1)
scheduler = torch.optim.lr_scheduler.CosineAnnealingLR(optimizer, T_max=total_steps)
```

---

## 7. 新興能力

最有趣的發現之一：當模型變得足夠大時，**新功能突然出現**，而這些功能無法從較小的模型中預測：

|能力|出現在 ~params |
|---|---|
| 3 位加法 | 〜500M |
|多步驟算術| 〜5B |
|思想鏈| 〜100B |
|說明如下 | 〜100B（+ RLHF）|
|複雜推理| 〜500B+ |

```
"Emergence" không phải magic — chỉ là tại threshold nào đó,
model đã học đủ "sub-skills" để combine thành ability mới.
```

---

## 總結

|方面| CLM (GPT) |傳銷（BERT）|
|--------|------------|------------|
|方向 |由左至右 |雙向|
|一代| ✅ 天然 | ❌ 不用於生成 |
|自然語言處理 |好（大） | ✅ 非常好 |
|縮放 | GPT-3、GPT-4、LLaMA | BERT-large 最大 ~340M |

**重點：**
- CLM（自回歸）「贏得」了 LLM，因為它的擴展性更好
- 中文：用更小的模型訓練更長的時間（更多的數據）=更有效
- 数据质量 > 数据数量

**下一篇文章：** 有監督微調－如何將預先訓練的模型變成可以遵循指示的助手。
