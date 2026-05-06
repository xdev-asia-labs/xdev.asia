---
id: 019c9619-bb10-7010-c010-bb1000000010
title: 'レッスン 10: LLM の事前トレーニング — CLM、MLM、およびスケーリングの法則'
slug: bai-10-pre-training-llms
description: >-
  LLM の事前トレーニング プロセス: Causal LM と Masked LM、データ キュレーション。チンチラのスケーリングの法則 —
  モデルのサイズ、データ、コンピューティングの関係。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 9
section_title: 'パート 3: LLM のトレーニングと微調整'
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: 'AI と LLM: 基本から高度まで'
  slug: ai-llm-tu-co-ban-den-nang-cao
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 AI と ML — レッスン 9</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 10: LLM の事前トレーニング — CLM、MLM、および</tspan>
      <tspan x="60" dy="42">スケーリングの法則</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI と LLM: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: LLM のトレーニングと微調整</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## 概要

事前トレーニングは、すべての LLM の **基礎** ステップです。十分に事前トレーニングされたモデルは、テキストを予測するだけで、文法、意味論、世界の知識、推論能力を学習します。この記事ではそのプロセスについて説明します。

---

＃＃１．事前トレーニングとは何ですか？

事前トレーニングは、人間によるラベルなしで、**自己監視目標**を使用して、**膨大な量のデータ** (数百 GB ～ TB のテキスト) を使用してモデルをトレーニングする段階です。

```
Pre-training Data:
- Common Crawl (internet text)     ~50%
- Books (BookCorpus, Gutenberg)    ~10%
- Wikipedia                         ~5%
- Code (GitHub)                    ~10%
- Scientific papers (arXiv)         ~5%
- Other curated sources            ~20%
```

事前トレーニング後、モデルは **一般的な言語を理解**できるようになり、これがあらゆるタスクを微調整するための基盤となります。

---

## 2. 因果言語モデリング (CLM)

**使用元:** GPT シリーズ、LLaMA、ミストラル、ファルコン

**目的:** 前のトークンに基づいて次のトークンを予測します。

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

**CLM の利点:**
- テキスト生成に自然にフィットします
- コーザルマスク → 生成に直接使用可能

---

## 3. マスクされた言語モデリング (MLM)

**使用者:** BERT、RoBERTa、ALBERT

**目的:** トークンの 15% をランダムにマスクし、マスクされたトークンを予測します。

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

**MLM の利点:**
- 双方向のコンテキスト → より深い理解
- NLU タスク (分類、NER、Q&A) に適しています

**欠点:** テキストを直接生成できません。

---

## 4. データのキュレーション

データの品質がモデルの品質を**決定します**。一般的なデータ処理プロセス:

### 4.1 コレクション

```
Common Crawl → hàng tỷ web pages mỗi tháng
GitHub → source code
arXiv → khoa học
Wikipedia → encyclopedic knowledge
Books3, Gutenberg → sách
```

### 4.2 フィルタリング

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

### 4.3 トークン化とパッキング

```python
# Ghép nhiều documents thành chunks dài (e.g., 2048 tokens)
# Dùng separator token giữa documents
# EOS token đánh dấu hết document
```

---

## 5. スケーリングの法則

### 5.1 カプランら。 (2020) — OpenAI

損失は、パラメーター (N)、データ (D)、および計算 (C) の数に応じて **べき乗則** として減少します。

```
L(N) ∝ N^{-0.076}     (scale parameters)
L(D) ∝ D^{-0.095}     (scale data)
L(C) ∝ C^{-0.050}     (scale compute)
```

**結論:** 「すべてをスケールする - 大きいほど良い。」 → GPT-3 175B

### 5.2 チンチラ (2022) — DeepMind

ホフマンら。発見: **GPT-3 と当時の多くのモデルはトレーニングが不十分でした!**

固定コンピューティング バジェット C の場合、最適値は次のようになります。
```
N_optimal ∝ C^{0.5}
D_optimal ∝ C^{0.5}

→ N và D nên scale BẰNG NHAU
```

**チンチラの経験則:**
```
Số tokens training ≈ 20 × số parameters

GPT-3 (175B params) → nên train trên 3.5T tokens
                       (thực tế chỉ train ~300B tokens → underpowered)

Llama-2 (7B params) → train 2T tokens ✅ (compute-optimal)
```

### 5.3 実際の応用

```
Model         Params    Tokens       Compute-optimal?
GPT-3         175B      300B         ❌ Under-trained
Chinchilla    70B       1.4T         ✅ Optimal
LLaMA-1       7-65B     1T           ~✅
LLaMA-2       7-70B     2T           ✅
Mistral-7B    7B        ~1T          ✅
```

---

## 6. トレーニングインフラストラクチャ

### 6.1 分散トレーニング

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

### 6.3 オプティマイザー

```python
# AdamW với cosine LR schedule là tiêu chuẩn
optimizer = torch.optim.AdamW(model.parameters(), lr=3e-4, weight_decay=0.1)
scheduler = torch.optim.lr_scheduler.CosineAnnealingLR(optimizer, T_max=total_steps)
```

---

## 7. 緊急の機能

最も興味深い発見の 1 つは、モデルが十分に大きくなると、小規模なモデルからは予測できない **新しい機能が突然現れる**ということです。

|能力 | ~params | に表示されます。
|---|---|
| 3桁の足し算 | ～500M |
|多段階の算術演算 | ～5B |
|思考の連鎖 | ～100B |
|次の手順 | ~100B (+ RLHF) |
|複雑な推論 | ~500B+ |

```
"Emergence" không phải magic — chỉ là tại threshold nào đó,
model đã học đủ "sub-skills" để combine thành ability mới.
```

---

## 概要

|側面 | CLM (GPT) | MLM (バート) |
|----------|-----------|----------|
|方向 |左から右 |双方向 |
|世代 | ✅ ナチュラル | ❌ | の生成には使用されません。
| NLU |良い（大きい） | ✅ とても良い |
|スケーリング | GPT-3、GPT-4、LLaMA | BERT-大最大 ~340M |

**要点:**
- CLM (自己回帰) はスケールが優れているため、LLM よりも「勝ち」ます
- チンチラ: より小さなモデルでより長くトレーニング (より多くのデータ) = より効果的
- データの品質 > データの量

**次の記事:** 教師付き微調整 — 事前トレーニングされたモデルを指示に従うアシスタントに変える方法。
