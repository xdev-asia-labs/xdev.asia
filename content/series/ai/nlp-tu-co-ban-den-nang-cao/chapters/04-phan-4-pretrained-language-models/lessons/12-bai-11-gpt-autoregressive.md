---
id: 019d8b30-bb11-7011-c011-ee1100000011
title: 'Bài 11: GPT & Autoregressive Models — Generative Pre-trained Transformer'
slug: bai-11-gpt-autoregressive
description: >-
  GPT architecture: causal language modeling. GPT-1 → GPT-2 → GPT-3 →
  GPT-4 evolution. Autoregressive generation: temperature, top-k,
  top-p sampling. Emergent abilities. In-context learning. So sánh
  BERT (encoder) vs GPT (decoder) vs T5 (encoder-decoder).
duration_minutes: 150
is_free: true
video_url: null
sort_order: 10
section_title: "Phần 4: Pre-trained Language Models — BERT, GPT & Beyond"
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: "NLP từ Cơ bản đến Nâng cao: Làm chủ Xử lý Ngôn ngữ Tự nhiên"
  slug: nlp-tu-co-ban-den-nang-cao
---

## Giới thiệu

Nếu BERT "đọc" text từ hai hướng, **GPT** "viết" text từ trái sang phải — **autoregressive generation**. GPT là nền tảng của ChatGPT, Claude, Gemini — những LLM đang thay đổi thế giới.

---

## 1. GPT Architecture: Decoder-only

```
Input:  "Once upon a time"
         │      │     │    │
         ▼      ▼     ▼    ▼
    ┌──────────────────────────┐
    │   Transformer Decoder    │
    │   (Causal Self-Attention)│
    │    Chỉ nhìn bên trái!   │
    └──────────────────────────┘
         │      │     │    │
         ▼      ▼     ▼    ▼
       "upon"  "a"  "time" ","
```

### Causal Language Modeling

$$P(x_1, x_2, ..., x_n) = \prod_{i=1}^{n} P(x_i | x_1, ..., x_{i-1})$$

Model dự đoán token tiếp theo dựa vào **tất cả tokens trước đó** (không nhìn tương lai).

---

## 2. Evolution: GPT-1 → GPT-4

| Model | Năm | Parameters | Training Data | Breakthrough |
|-------|-----|-----------|--------------|-------------|
| GPT-1 | 2018 | 117M | BookCorpus | Generative pre-training works |
| GPT-2 | 2019 | 1.5B | WebText (40GB) | "Too dangerous to release" |
| GPT-3 | 2020 | 175B | 570GB text | In-context learning, few-shot |
| GPT-4 | 2023 | ~1.8T (rumored) | Internet-scale | Multimodal, reasoning |
| GPT-4o | 2024 | Undisclosed | + Images, Audio | Native multimodal |

---

## 3. Decoding Strategies

### Temperature, Top-k, Top-p

```python
from transformers import GPT2LMHeadModel, GPT2Tokenizer

tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
model = GPT2LMHeadModel.from_pretrained("gpt2")

input_text = "Artificial intelligence will"
input_ids = tokenizer.encode(input_text, return_tensors="pt")

# Greedy (deterministic, boring)
greedy = model.generate(input_ids, max_length=50, do_sample=False)

# Temperature sampling (creativity control)
creative = model.generate(
    input_ids, max_length=50,
    do_sample=True,
    temperature=0.8,   # < 1: focused, > 1: creative
    top_k=50,          # Chỉ xét 50 tokens có probability cao nhất
    top_p=0.9,         # Nucleus sampling: 90% probability mass
)

print(tokenizer.decode(creative[0]))
```

| Parameter | Thấp | Cao |
|-----------|------|-----|
| Temperature | Chính xác, lặp lại | Sáng tạo, ngẫu nhiên |
| Top-k | Ít lựa chọn, an toàn | Nhiều lựa chọn, đa dạng |
| Top-p | Focus vào tokens chắc chắn | Cân nhắc nhiều tokens hơn |

---

## 4. In-Context Learning (ICL)

GPT-3 khám phá ra: không cần fine-tune, chỉ cần **đưa ví dụ vào prompt**!

```python
prompt = """
Classify the sentiment:
Text: "This movie is amazing!" → Positive
Text: "Terrible experience" → Negative
Text: "The food was okay" → Neutral
Text: "I absolutely love this product!" →"""

# GPT sẽ trả lời: "Positive"
# Không cần fine-tune! Chỉ cần prompt engineering.
```

| Paradigm | Ví dụ | Fine-tune? |
|----------|-------|-----------|
| Zero-shot | Không có ví dụ nào | Không |
| One-shot | 1 ví dụ | Không |
| Few-shot | 3-10 ví dụ | Không |
| Fine-tuning | Hàng nghìn ví dụ | Có |

---

## 5. BERT vs GPT vs T5

| Đặc điểm | BERT (Encoder) | GPT (Decoder) | T5 (Enc-Dec) |
|-----------|---------------|---------------|-------------|
| Direction | Bidirectional | Left-to-right | Both |
| Pre-training | MLM + NSP | Causal LM | Denoising |
| Tốt cho | Classification, NER, QA | Generation, chat | Everything (text-to-text) |
| Ví dụ | PhoBERT, RoBERTa | GPT-4, LLaMA | T5, mT5, ViT5 |

---

## Tổng kết

| Khái niệm | Chi tiết |
|------------|---------|
| GPT | Decoder-only, causal LM, autoregressive |
| Scaling laws | Bigger model + more data = better performance |
| Decoding | Temperature, top-k, top-p controls output diversity |
| ICL | Few-shot learning without fine-tuning |
| BERT vs GPT | Understanding (BERT) vs Generation (GPT) |

---

## Bài tiếp theo

**Bài 12: Hugging Face Ecosystem** — Thực hành NLP hiện đại với thư viện được dùng nhiều nhất: Transformers, Datasets, Tokenizers.
