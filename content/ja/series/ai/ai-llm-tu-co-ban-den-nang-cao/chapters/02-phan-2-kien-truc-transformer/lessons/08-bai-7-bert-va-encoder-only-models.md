---
id: 019c9619-bb07-7007-c007-bb0700000007
title: 'レッスン 7: BERT とエンコーダのみのモデル'
slug: bai-7-bert-va-encoder-only-models
description: >-
  BERT (2018) —
  マスクされた言語モデリングと次の文予測を備えた画期的なエンコーダー専用アーキテクチャーについて学びます。センチメント分析、NER、Q&A
  などの下流タスクに合わせて BERT を微調整し、RoBERTa、ALBERT、DistilBERT のバリアントを比較する方法を学びます。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 6
section_title: 'パート 2: トランスのアーキテクチャ'
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: 'AI と LLM: 基本から高度まで'
  slug: ai-llm-tu-co-ban-den-nang-cao
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🧠 AI と ML — レッスン 6</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 7: BERT とエンコーダのみのモデル</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI と LLM: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: トランスのアーキテクチャ</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

# レッスン 7: BERT とエンコーダーのみのモデル

## 1. BERT は 2018 年に誕生しました — その背後にある物語

2018 年 10 月、Jacob Devlin と Google の研究チームは **BERT: 言語理解のための深い双方向トランスフォーマーの事前トレーニング** を発表しました。 BERT は 11 の NLP ベンチマークで同時に記録を破りました。これはこれまでに起こったことのないことでした。

**以前のモデルの問題:**
- ELMo (2018) は biLSTM を使用します。これは双方向ですが浅い (2 つの独立した方向、深い相互作用はありません)。
- GPT-1 (2018) は、Transformer Decoder を使用します。一方向 (左から右にのみ見える) で、右からのコンテキストを利用しません。

**BERT の洞察:** 単語を理解するには、**両方の側面**からのコンテキストが必要です。 「私はお金を預けるために銀行に行きました」と「私は川の岸辺に座りました」の「銀行」という単語を区別するには、前後の両方を見る必要があります。

**BERT = トランスフォーマーからの双方向エンコーダー表現** — トランスフォーマー エンコーダー (因果マスクなし) を使用して、深い双方向表現を学習します。

### 2 つのオリジナル バージョン:

| | BERTベース | BERT-ラージ |
|---|---|---|
|レイヤー(L) | 12 | 24 |
|隠しサイズ (高さ) | 768 | 1024 |
|アテンションヘッド(A) | 12 | 16 |
|パラメータ | 110M | 340M |

## 2. トレーニング前のタスク: MLM と NSP

BERT は、**BookCorpus** (8 億語) + **英語 Wikipedia** (2,500 万語) で次の 2 つのタスクで事前トレーニングされています。

### 2.1 マスクされた言語モデリング (MLM)

このアイデアは、言語学の **Cloze テスト**からインスピレーションを得ています。入力内の 15% トークンをランダムにマスクし、予測します。

選択されたトークンの 15% のうち:
- **80%** に置き換えられました `[MASK]` トークン。
- **10%** は別のランダムなトークンに置き換えられます。
- **10%** は元のトークンを保持します。

なぜ100％マスクしないのか？微調整が出来なくなるので `[MASK]` トークン — 事前トレーニングと微調整の間に**不一致**が生じます。 3 つのタイプを混合すると、モデルがより適切な表現を学習するのに役立ちます。

```
Input:  "my dog is [MASK] . he likes play [MASK] ."
Output: "my dog is hairy . he likes playing ."
```

### 2.2 次の文の予測 (NSP)

多くの重要なタスク (Q&A、自然言語推論) では、2 つの文間の関係を理解する必要があります。 NSP 列車モデルは次の点を区別します。
- **IsNext (50%)**: 文 B は、実際にはコーパス内の文 A の後に続きます。
- **NotNext (50%)**: 文 B はランダムな文です。

```
[CLS] the man went to [MASK] store [SEP] he bought a gallon [MASK] milk [SEP]
Label: IsNext

[CLS] the man went to [MASK] store [SEP] penguin [MASK] are flightless birds [SEP]
Label: NotNext
```

*注: その後の研究 (RoBERTa、2019 年) では、NSP は実際には役に立たず、パフォーマンスが低下することさえあることが示されています。BERT はこの理由で NSP を使用します。*

## 3. BERT アーキテクチャ: トークン化と特殊トークン

### 3.1 WordPiece のトークン化

BERT は語彙サイズ 30,000 の **WordPiece** を使用します。まれな単語はサブワードに分割されます。
```
"unaffable"  →  ["un", "##aff", "##able"]
"playing"    →  ["play", "##ing"]
```
プレフィックス `##` これは前の言葉の続きだけです。

### 3.2 特別なトークン

- **`[CLS]`**: 最初のトークン — その表現は分類タスクに使用されます。
- **`[SEP]`**: 別々の文。
- **`[MASK]`**: MLM のプレースホルダー。
- **`[PAD]`**: バッチ内で均一な長さにパディングします。

```
Input sequence:   [CLS] Sentence A [SEP] Sentence B [SEP]
Token IDs:         101   ...        102   ...        102
Segment IDs:        0     0          0     1          1
Position IDs:       0     1,2,...    n    n+1,...    m
```

## 4. ダウンストリーム タスク用の BERT の微調整

BERT は、微調整が簡単であるため、特に強力です。事前トレーニングされた BERT の上に線形レイヤーを追加し、小さな学習率で全体をトレーニングします。

### 4.1 テキストの分類

の表現を取得する `[CLS]` トークン → リニア(hidden_size, num_labels)。

### 4.2 固有表現認識 (NER)

**各トークン**の表現を取得 → Linear(hidden_size, num_entity_labels)。

### 4.3 抽出的質問応答 (SQuAD)

パッセージ内の回答範囲の **開始** と **終了** の位置を予測します。
```
Linear(hidden_size, 2)  →  start_logits, end_logits
```

## 5. BERT バリアントの比較

### RoBERTa (2019) — Facebook AI

**堅牢に最適化された BERT 事前トレーニング アプローチ** — BERT をより適切にトレーニングします。
- NSP を除去します (有害であることが証明されています)。
- より長時間のトレーニング (10 倍のステップ)、より大きなバッチ。
- 動的マスキング (エポックごとに異なるマスク パターン)。
- 160 GB のデータ (16 GB の BERT ではなく) でトレーニングします。
- 結果: GLUE、SQuAD の BERT を大幅に上回りました。

### アルバート (2020) — Google

**ライト BERT** — パラメータ数を削減します。
- **因数分解された埋め込みパラメータ化**: 埋め込み行列を 2 つの小さな行列に分割します。
- **クロスレイヤーパラメータ共有**: すべてのレイヤー間で重みを共有します。
- NSP を **文順序予測 (SOP)** に置き換えると、より効果的になります。
- ALBERT-xxlarge は BERT-Large よりもパラメータが少ないですが、パフォーマンスが優れています。

### DistilBERT (2019) — 顔を抱きしめる

BERT ベースからの **知識の蒸留**:
- パラメーターが 40% 減少しました (6,600 万対 1 億 1,000 万)。
- 推論が 60% 速くなります。
- BERT-Base の 97% のパフォーマンスを維持します。
- 教師 BERT の **ソフトラベル** を使用して生徒をトレーニングします。

|モデル |パラメータ |グルースコア |スピード |
|---|---|---|---|
| BERTベース | 110M | 79.6 | 1x |
| RoBERTaベース | 125M | 83.7 | 1x |
|アルバートベース | 12M | 80.1 | 1.7倍 |
|ディスティルバート | 66M | 77.0 | 1.6倍 |

## 6. コード: 顔を抱きしめて感情分析を行うための BERT の微調整

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

### Hugging Face Trainer API による高速微調整

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

## 7. GPT ではなく BERT をいつ使用するか?

### 次の場合は BERT (エンコーダのみ) を選択します。
- **分類タスク**: 感情、スパム検出、トピック分類。
- **NER** および配列のラベル付け。
- **抜粋 Q&A**: ドキュメント内の回答範囲を検索します。
- **意味的な類似性**: 文の埋め込み、意味的な検索。
- **遅延に敏感**: エンコーダーは 1 回だけ実行され、自己回帰デコーダーよりも高速です。

### 次の場合は GPT (デコーダのみ) を選択します。
- **テキスト生成**: テキスト、コード、概要を記述します。
- **チャットボットと会話型 AI**。
- **プロンプト付きのゼロ/数ショット学習**。
- **クリエイティブなタスク**にはオープンな出力が必要です。
- **手順は次のとおりです**。

### 簡単な経験則:
> "テキストを**理解**したい場合は→ BERT。テキストを**生成**したい場合は→ GPT。"

しかし、現代の現実 (2024 年から 2025 年) では、特に微調整を必要としない場合には、コンテキスト内学習と命令のフォローのおかげで、多くの理解タスクにおいて、主要な **デコーダー専用 LLM** (GPT-4、LLaMA、Gemma) が BERT に徐々に置き換えられています。

## 概要

1. **BERT** は双方向の Transformer Encoder を使用します。各トークンは両方向に参加できます。
2. **MLM** (マスクされた言語モデリング) が主要な事前トレーニング目標であり、NSP よりも効果的です。
3. **微調整**は簡単です。リニア ヘッドを追加し、小さな lr (2e-5 から 5e-5) でトレーニングし、いくつかのエポックを使用します。
4. **RoBERTa** はより最適化されたバージョンです。 **DistilBERT** は小型で高速です。
5. BERT は **タスクを理解する**のに最適です。 GPT は **生成タスク**に最適です。

次の記事では、ChatGPT と最先端の LLM の背後にあるアーキテクチャである **GPT および Decoder のみのモデル** について説明します。
