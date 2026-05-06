---
id: 019c9619-bb07-7007-c007-bb0700000007
title: 第 7 課：BERT 和僅編碼器模型
slug: bai-7-bert-va-encoder-only-models
description: >-
  了解 BERT (2018) — 具有屏蔽語言建模和下一句預測的突破性純編碼器架構。了解如何針對情感分析、NER、問答等下游任務微調 BERT，並比較
  RoBERTa、ALBERT、DistilBERT 變體。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 6
section_title: 第 2 部分：Transformer 架構
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: 人工智慧和法學碩士：從基礎到高級
  slug: ai-llm-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2942" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2942)"/>

  <!-- Decorations -->
  <g>
    <circle cx="891" cy="83" r="24" fill="#34d399" opacity="0.08"/>
    <circle cx="682" cy="274" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="973" cy="205" r="10" fill="#34d399" opacity="0.14"/>
    <circle cx="764" cy="136" r="33" fill="#34d399" opacity="0.07"/>
    <circle cx="1055" cy="67" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="193" x2="1100" y2="273" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="223" x2="1050" y2="293" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1067.2487113059642,229 1067.2487113059642,257 1043,271 1018.7512886940357,257 1018.7512886940357,229 1043,215" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🧠 人工智慧與機器學習 — 第 6 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 7 課：BERT 和僅編碼器模型</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">人工智慧和法學碩士：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：Transformer 架構</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

# 第 7 課：BERT 和僅編碼器模型

## 1. BERT 誕生於 2018 年──背後的故事

2018 年 10 月，Jacob Devlin 和 Google 的研究團隊宣布了**BERT：用於語言理解的深度雙向變壓器的預訓練**。 BERT 同時打破了 11 個 NLP 基準的記錄——這是以前從未發生過的。

**以前型號的問題：**
- ELMo (2018) 使用 biLSTM－雙向但淺層（兩個獨立方向，無深度交互作用）。
- GPT-1 (2018) 使用 Transformer Decoder — 單向（僅從左到右查看），不利用右側的上下文。

**BERT Insight：**要理解一個單詞，您需要來自**雙方**的上下文。 「我去銀行存錢」與「我坐在河邊」中的「銀行」一詞需要前後都看才能區分。

**BERT = Transformer 的雙向編碼器表示** — 使用 Transformer 編碼器（無因果遮罩）學習深度雙向表示。

### 兩個原始版本：

| | BERT 基礎 | BERT-大 |
|---|---|---|
|層數 (L) | 12 | 12 24 |
|隱藏尺寸 (H) | 768 | 768 1024 | 1024
|注意頭 (A) | 12 | 12 16 | 16
|參數| 110M | 340M |

## 2. 預訓練任務：MLM 和 NSP

BERT 在 **BookCorpus**（8 億字）+ **英文維基百科**（2,500M 字）上進行了預訓練，有兩個任務：

### 2.1 遮罩語言建模（MLM）

這個想法的靈感來自於語言學中的**完形填空測驗**。隨機屏蔽輸入中 15% 的標記並預測它們。

在 15% 的選定代幣中：
- **80%** 替換為 `[MASK]` 令牌。
- **10%** 替換為另一個隨機令牌。
- **10%** 保留原始代幣。

為什麼不100%遮蓋呢？因為微調將不可用 `[MASK]` 令牌－在預訓練和微調之間創建**不匹配**。混合這三種類型有助於模型學習更好的表示。

```
Input:  "my dog is [MASK] . he likes play [MASK] ."
Output: "my dog is hairy . he likes playing ."
```

### 2.2 下一句預測（NSP）

許多重要任務（問答、自然語言推理）需要理解兩個句子之間的關係。 NSP列車模型差異：
- **IsNext (50%)**：句子 B 其實在語料庫中位於句子 A 之後。
- **NotNext (50%)**：句子 B 為隨機句子。

```
[CLS] the man went to [MASK] store [SEP] he bought a gallon [MASK] milk [SEP]
Label: IsNext

[CLS] the man went to [MASK] store [SEP] penguin [MASK] are flightless birds [SEP]
Label: NotNext
```

*註：後來的研究（RoBERTa，2019）顯示 NSP 並不是真正有用，甚至會降低效能－BERT 出於這個原因使用 NSP。 *

## 3. BERT 架構：通證化與特殊通證

### 3.1 WordPiece 標記化

BERT 使用詞彙量為 30,000 的 **WordPiece**。生僻詞被分成子詞：
```
"unaffable"  →  ["un", "##aff", "##able"]
"playing"    →  ["play", "##ing"]
```
前綴 `##` 只是這是前一個字的延續。

### 3.2 特殊代幣

- **`[CLS]`**：第一個標記 - 它的表示法用於分類任務。
- **`[SEP]`**：單獨的句子。
- **`[MASK]`**：傳銷中的佔位符。
- **`[PAD]`**：批量填充至統一長度。

```
Input sequence:   [CLS] Sentence A [SEP] Sentence B [SEP]
Token IDs:         101   ...        102   ...        102
Segment IDs:        0     0          0     1          1
Position IDs:       0     1,2,...    n    n+1,...    m
```

## 4. 針對下游任務微調 BERT

BERT 特別強大，因為微調很簡單：在預先訓練的 BERT 之上添加一個線性層，並以較小的學習率訓練整個模型。

### 4.1 文字分類

獲取代表 `[CLS]` 令牌 → 線性（隱藏大小，數字標籤）。

### 4.2 命名實體辨識（NER）

取得 **每個 token** 的表示 → Linear(hidden_size, num_entity_labels)。

### 4.3 擷取式問答 (SQuAD)

預測文章中答案跨度的 **開始** 和 **結束** 位置：
```
Linear(hidden_size, 2)  →  start_logits, end_logits
```

## 5. 比較 BERT 變體

### RoBERTa (2019) — Facebook 人工智慧

**穩健最佳化的 BERT 預訓練方法** — 更正確地訓練 BERT：
- 消除 NSP（已證明有害）。
- 訓練時間較長（10 倍步）、批量較大。
- 動態遮罩（每個時期不同的遮罩模式）。
- 使用 160GB 資料進行訓練（而不是 16GB BERT）。
- 結果：在 GLUE、SQuAD 上顯著超過 BERT。

### 阿爾伯特 (2020) — 谷歌

**精簡版 BERT** — 減少參數數：
- **分解嵌入參數化**：將嵌入矩陣拆分為兩個較小的矩陣。
- **跨層參數共用**：在所有層之間共用權重。
- 將 NSP 替換為 **句子順序預測 (SOP)** — 更有效。
- ALBERT-xxlarge 的參數比 BERT-Large 少，但效能更好。

### DistilBERT (2019) — 擁抱臉

**來自 BERT-Base 的知識蒸餾**：
- 參數減少 40%（66M 與 110M）。
- 推理速度提高 60%。
- 保持 BERT-Base 97% 的效能。
- 使用 BERT 老師的**軟標籤**來訓練學生。

|型號|參數|膠水分數|速度|
|---|---|---|---|
| BERT 基礎 | 110M | 79.6 | 79.6 1x |
| RoBERTa-Base | 125M | 83.7 | 83.7 1x |
|阿爾伯特基地| 12M | 80.1 | 80.1 1.7 倍 |
|蒸餾伯特 | 66M | 77.0 | 77.0 1.6 倍 |

## 6. 程式碼：使用擁抱表情微調 BERT 進行情緒分析

```python
# pip install transformers datasets torch scikit-learn

import torch
from torch.utils.data import DataLoader
from transformers import (
    AutoTokenizer,
    AutoModelForSequenceClassification,
    get_linear_schedule_with_warmup,
)
from datasets import load_dataset
from torch.optim import AdamW
from sklearn.metrics import accuracy_score
import numpy as np

# ── 1. Load dataset ──────────────────────────────────────────────
dataset = load_dataset("imdb")  # 25k train, 25k test, binary sentiment

# ── 2. Tokenization ──────────────────────────────────────────────
MODEL_NAME = "bert-base-uncased"
tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)

def tokenize(batch):
    return tokenizer(
        batch["text"],
        padding="max_length",
        truncation=True,
        max_length=256,
    )

tokenized = dataset.map(tokenize, batched=True, remove_columns=["text"])
tokenized.set_format("torch")

train_loader = DataLoader(tokenized["train"], batch_size=16, shuffle=True)
test_loader  = DataLoader(tokenized["test"],  batch_size=32, shuffle=False)

# ── 3. Model ──────────────────────────────────────────────────────
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

model = AutoModelForSequenceClassification.from_pretrained(
    MODEL_NAME, num_labels=2
).to(device)

# ── 4. Optimizer & Scheduler ──────────────────────────────────────
EPOCHS = 3
optimizer = AdamW(model.parameters(), lr=2e-5, weight_decay=0.01)
total_steps = len(train_loader) * EPOCHS
scheduler = get_linear_schedule_with_warmup(
    optimizer, num_warmup_steps=total_steps // 10, num_training_steps=total_steps
)

# ── 5. Training loop ──────────────────────────────────────────────
for epoch in range(EPOCHS):
    model.train()
    total_loss = 0.0

    for batch in train_loader:
        batch = {k: v.to(device) for k, v in batch.items()}
        outputs = model(**batch)

        loss = outputs.loss
        loss.backward()

        torch.nn.utils.clip_grad_norm_(model.parameters(), 1.0)
        optimizer.step()
        scheduler.step()
        optimizer.zero_grad()

        total_loss += loss.item()

    avg_loss = total_loss / len(train_loader)
    print(f"Epoch {epoch+1}/{EPOCHS} | Loss: {avg_loss:.4f}")

# ── 6. Evaluation ─────────────────────────────────────────────────
model.eval()
all_preds, all_labels = [], []

with torch.no_grad():
    for batch in test_loader:
        batch = {k: v.to(device) for k, v in batch.items()}
        outputs = model(**batch)
        preds = outputs.logits.argmax(dim=-1).cpu().numpy()
        labels = batch["labels"].cpu().numpy()
        all_preds.extend(preds)
        all_labels.extend(labels)

acc = accuracy_score(all_labels, all_preds)
print(f"Test Accuracy: {acc:.4f}")   # Expected ~93-94%

# ── 7. Inference ──────────────────────────────────────────────────
def predict_sentiment(text: str) -> str:
    inputs = tokenizer(text, return_tensors="pt", truncation=True, max_length=256).to(device)
    with torch.no_grad():
        logits = model(**inputs).logits
    pred = logits.argmax(dim=-1).item()
    return "Positive" if pred == 1 else "Negative"

print(predict_sentiment("This movie was absolutely fantastic!"))  # Positive
print(predict_sentiment("Worst film I've ever seen."))            # Negative
```

### 使用 Hugging Face Trainer API 進行更快的微調

```python
from transformers import TrainingArguments, Trainer
import evaluate

accuracy_metric = evaluate.load("accuracy")

def compute_metrics(eval_pred):
    logits, labels = eval_pred
    preds = np.argmax(logits, axis=-1)
    return accuracy_metric.compute(predictions=preds, references=labels)

training_args = TrainingArguments(
    output_dir="./bert-imdb",
    num_train_epochs=3,
    per_device_train_batch_size=16,
    per_device_eval_batch_size=32,
    warmup_ratio=0.1,
    weight_decay=0.01,
    learning_rate=2e-5,
    evaluation_strategy="epoch",
    save_strategy="epoch",
    load_best_model_at_end=True,
    fp16=torch.cuda.is_available(),  # Mixed precision training
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=tokenized["train"],
    eval_dataset=tokenized["test"],
    compute_metrics=compute_metrics,
)

trainer.train()
```

## 7. 何時使用 BERT 與 GPT？

### 在以下情況下選擇 BERT（僅編碼器）：
- **分類任務**：情緒、垃圾郵件偵測、主題分類。
- **NER** 和序列標記。
- **擷取問答**：在文件中尋找答案範圍。
- **語意相似性**：句子嵌入，語意搜尋。
- **延遲敏感**：編碼器運行一次，比自回歸解碼器更快。

### 在下列情況下選擇 GPT（僅解碼器）：
- **文字產生**：撰寫文字、程式碼、摘要。
- **聊天機器人和對話式人工智慧**。
- **零/幾次學習**帶提示。
- **創意任務**需要開放輸出。
- **說明如下**。

### 簡單的經驗法則：
>“如果你想**理解**文字→BERT。如果你想**產生**文字→GPT。”

然而，在現代現實（2024-2025）中，由於上下文學習和指令遵循，主要的**純解碼器 LLM**（GPT-4、LLaMA、Gemma）正在逐漸取代 BERT 來完成許多理解任務，尤其是當您不想進行微調時。

## 總結

1. **BERT** 使用雙向 Transformer 編碼器 — 每個令牌都可以雙向參與。
2. **MLM**（掩碼語言建模）是主要的預訓練目標－比 NSP 更有效。
3. **微調**很簡單：加入線性頭，用小lr（2e-5到5e-5）訓練，幾個epoch。
4. **RoBERTa**是一個更好的最佳化版本； **DistilBERT** 更小、更快。
5. BERT 最適合**理解任務**； GPT 最適合**生成任務**。

下一篇文章將探討 **GPT 和僅解碼器模型** - ChatGPT 和最先進的 LLM 背後的架構。
