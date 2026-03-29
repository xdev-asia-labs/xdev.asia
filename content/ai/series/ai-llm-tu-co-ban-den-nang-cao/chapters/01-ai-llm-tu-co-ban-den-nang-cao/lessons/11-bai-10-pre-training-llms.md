---
id: 019c9619-bb10-7010-c010-bb1000000010
title: 'Bài 10: Pre-training LLMs — CLM, MLM và Scaling Laws'
slug: bai-10-pre-training-llms
description: >-
  Quá trình pre-training LLMs: Causal LM vs Masked LM, data curation.
  Scaling Laws của Chinchilla — quan hệ giữa model size, data và compute.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 9
section_title: "Phần 3: Training & Fine-tuning LLMs"
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: "AI & LLM: Từ Cơ bản đến Nâng cao"
  slug: ai-llm-tu-co-ban-den-nang-cao
---

## Tổng quan

Pre-training là bước **nền tảng** của mọi LLM. Một model được pre-train tốt sẽ học được ngữ pháp, ngữ nghĩa, kiến thức thế giới, và khả năng suy luận — chỉ từ việc dự đoán văn bản. Bài này giải thích quá trình đó.

---

## 1. Pre-training là gì?

Pre-training là giai đoạn huấn luyện model trên **lượng dữ liệu khổng lồ** (hàng trăm GB đến TB văn bản) với một **self-supervised objective** — không cần label của con người.

```
Pre-training Data:
- Common Crawl (internet text)     ~50%
- Books (BookCorpus, Gutenberg)    ~10%
- Wikipedia                         ~5%
- Code (GitHub)                    ~10%
- Scientific papers (arXiv)         ~5%
- Other curated sources            ~20%
```

Sau pre-training, model có khả năng **general language understanding** — nền tảng để fine-tune cho mọi task.

---

## 2. Causal Language Modeling (CLM)

**Dùng bởi:** GPT series, LLaMA, Mistral, Falcon

**Objective:** Dự đoán token tiếp theo dựa trên các token trước đó.

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

**Ưu điểm CLM:**
- Phù hợp tự nhiên với text generation
- Causal mask → có thể dùng trực tiếp để generate

---

## 3. Masked Language Modeling (MLM)

**Dùng bởi:** BERT, RoBERTa, ALBERT

**Objective:** Mask ngẫu nhiên 15% tokens, dự đoán token bị mask.

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

**Ưu điểm MLM:**
- Bidirectional context → hiểu sâu hơn
- Tốt cho NLU tasks (classification, NER, Q&A)

**Nhược điểm:** Không thể generate text trực tiếp.

---

## 4. Data Curation

Chất lượng data **quyết định** chất lượng model. Quy trình xử lý data điển hình:

### 4.1 Thu thập

```
Common Crawl → hàng tỷ web pages mỗi tháng
GitHub → source code
arXiv → khoa học
Wikipedia → encyclopedic knowledge
Books3, Gutenberg → sách
```

### 4.2 Lọc

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

### 4.3 Tokenization và packing

```python
# Ghép nhiều documents thành chunks dài (e.g., 2048 tokens)
# Dùng separator token giữa documents
# EOS token đánh dấu hết document
```

---

## 5. Scaling Laws

### 5.1 Kaplan et al. (2020) — OpenAI

Loss giảm như **power law** theo số parameters (N), data (D), và compute (C):

```
L(N) ∝ N^{-0.076}     (scale parameters)
L(D) ∝ D^{-0.095}     (scale data)
L(C) ∝ C^{-0.050}     (scale compute)
```

**Kết luận:** "Scale everything — bigger is better." → GPT-3 175B

### 5.2 Chinchilla (2022) — DeepMind

Hoffmann et al. phát hiện ra: **GPT-3 và nhiều model lúc đó đang under-trained!**

Với fixed compute budget C, optimal là:
```
N_optimal ∝ C^{0.5}
D_optimal ∝ C^{0.5}

→ N và D nên scale BẰNG NHAU
```

**Chinchilla rule of thumb:**
```
Số tokens training ≈ 20 × số parameters

GPT-3 (175B params) → nên train trên 3.5T tokens
                       (thực tế chỉ train ~300B tokens → underpowered)

Llama-2 (7B params) → train 2T tokens ✅ (compute-optimal)
```

### 5.3 Ứng dụng thực tế

```
Model         Params    Tokens       Compute-optimal?
GPT-3         175B      300B         ❌ Under-trained
Chinchilla    70B       1.4T         ✅ Optimal
LLaMA-1       7-65B     1T           ~✅
LLaMA-2       7-70B     2T           ✅
Mistral-7B    7B        ~1T          ✅
```

---

## 6. Training Infrastructure

### 6.1 Distributed Training

```
Data Parallelism: copy model lên nhiều GPU, chia batch
Tensor Parallelism: chia layers/weights across GPUs
Pipeline Parallelism: chia layers thành pipeline stages
ZeRO (DeepSpeed): partition optimizer states, gradients, params
```

### 6.2 Mixed Precision

```python
# bf16 training (tốt hơn fp16 cho LLM)
from transformers import TrainingArguments

args = TrainingArguments(
    bf16=True,                    # Brain Float 16
    gradient_checkpointing=True,  # Tiết kiệm VRAM
    gradient_accumulation_steps=4 # Accumulate 4 steps → effective batch lớn hơn
)
```

### 6.3 Optimizer

```python
# AdamW với cosine LR schedule là tiêu chuẩn
optimizer = torch.optim.AdamW(model.parameters(), lr=3e-4, weight_decay=0.1)
scheduler = torch.optim.lr_scheduler.CosineAnnealingLR(optimizer, T_max=total_steps)
```

---

## 7. Emergent Capabilities

Một trong những phát hiện thú vị nhất: khi model đủ lớn, các khả năng **mới xuất hiện đột ngột** mà không thể dự đoán từ model nhỏ hơn:

| Capability | Xuất hiện tại ~params |
|---|---|
| 3-digit addition | ~500M |
| Multi-step arithmetic | ~5B |
| Chain-of-thought | ~100B |
| Instruction following | ~100B (+ RLHF) |
| Complex reasoning | ~500B+ |

```
"Emergence" không phải magic — chỉ là tại threshold nào đó,
model đã học đủ "sub-skills" để combine thành ability mới.
```

---

## Tổng kết

| Aspect | CLM (GPT) | MLM (BERT) |
|--------|-----------|-----------|
| Direction | Left-to-right | Bidirectional |
| Generation | ✅ Tự nhiên | ❌ Không dùng để generate |
| NLU | Tốt (lớn) | ✅ Rất tốt |
| Scaling | GPT-3, GPT-4, LLaMA | BERT-large max ~340M |

**Takeaways:**
- CLM (autoregressive) đã "thắng" cho LLM vì scale tốt hơn
- Chinchilla: train lâu hơn (nhiều data) với model nhỏ hơn = hiệu quả hơn
- Data quality > Data quantity

**Bài tiếp theo:** Supervised Fine-Tuning — cách biến pre-trained model thành assistant biết làm theo hướng dẫn.
