---
id: 019c9619-bb11-7011-c011-bb1100000011
title: 'レッスン 11: 教師ありファインチューニング (SFT) — 命令チューニング'
slug: bai-11-supervised-fine-tuning
description: >-
  教師あり微調整 (SFT) 手法を検討して、事前トレーニングされた LLM を命令に従うモデルに変換します。データを準備し、SFTTrainer
  を構成し、チャット テンプレートを適用し、ハイパーパラメータを最適化し、Mistral-7B を効果的に微調整する方法を学びます。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 10
section_title: 'パート 3: LLM のトレーニングと微調整'
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: 'AI と LLM: 基本から高度まで'
  slug: ai-llm-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-932" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-932)"/>

  <!-- Decorations -->
  <g>
    <circle cx="703" cy="99" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="806" cy="122" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="909" cy="145" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="1012" cy="168" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="615" cy="191" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="169" x2="1100" y2="249" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="199" x2="1050" y2="269" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1057.1051177665154,197 1057.1051177665154,241 1019,263 980.8948822334847,241 980.8948822334847,197 1019,175" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🧠 AI と ML — レッスン 10</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 11: 教師あり微調整 (SFT) —</tspan>
      <tspan x="60" dy="42">命令チューニング</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI と LLM: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: LLM のトレーニングと微調整</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

# レッスン 11: 教師ありファインチューニング (SFT) — 命令チューニング

## 1. なぜ微調整が必要なのでしょうか?

### 事前トレーニング済みモデルと指示に従うモデル

**事前トレーニングされた LLM** (GPT-2、LLaMA ベース、Mistral ベースなど) は、テキスト内の **次のトークンを予測する**という 1 つの目標を持ってトレーニングされます。その結果、モデルは文法、世界の知識、推論能力を学習しましたが、**質問に答えたり、指示に従う方法**を知りませんでした。

```
Input:  "Thủ đô của Việt Nam là"
Output: "thành phố lớn nhất ở miền Bắc, nằm bên bờ sông Hồng..."
```

これは純粋なテキスト補完であり、エンド ユーザーにとっては役に立ちません。

**命令追従モデル** (ChatGPT、Claude、Mistral-Instruct) は次のように微調整されました。
- **ユーザーの指示**を理解し、従う
- **希望の形式** (JSON、箇条書きなど) で返信します。
- システム プロンプトで定義された **役割** (アシスタント、エキスパートなど) を維持します
- **有害または不適切なリクエスト**を拒否します

ベース モデルを命令モデルに変換するプロセスは **教師あり微調整 (SFT)** です。

### いつ微調整する必要がありますか?

|状況 |ソリューション |
|----------|----------|
|モデルはドメイン固有の知識を理解する必要があります |ドメイン データの微調整 |
|固定フォーマットでの出力が必要 | SFT とフォーマットの例 |
|モデルが独自のスタイルで「話す」ようにしたい |スタイル データを含む SFT |
|推論コストを最適化する必要がある |小型モデルを微調整する |
|迅速なエンジニアリングだけでは不十分 | SFT は多くの場合、より効果的です。

---

## 2. 命令データセットの形式

### 基本構造：（命令、入力、出力）

SFT データセットは通常、**トリプル** の形式になります。

```json
{
  "instruction": "Dịch đoạn văn sau sang tiếng Anh.",
  "input": "Hôm nay trời đẹp, tôi muốn đi dạo.",
  "output": "The weather is nice today, I want to go for a walk."
}
```

- **説明**: 特定の要件 (必須)
- **入力**: コンテキストまたは追加データ (空でも可)
- **出力**: 望ましい答え (グラウンド トゥルース)

### 会話形式（マルチターン）

マルチターン会話モデルをトレーニングするには:

```json
{
  "conversations": [
    {"role": "system", "content": "Bạn là trợ lý AI hữu ích."},
    {"role": "user", "content": "Python là gì?"},
    {"role": "assistant", "content": "Python là ngôn ngữ lập trình..."},
    {"role": "user", "content": "Nó có ưu điểm gì?"},
    {"role": "assistant", "content": "Python có nhiều ưu điểm..."}
  ]
}
```

---

## 3. 人気のあるデータセット

### アルパカ (スタンフォード、2023)

- **GPT-3.5 によって生成された 52,000 の命令に従うサンプル**
- 形式: 命令 + 入力 + 出力
- 自己指導運動への道を切り開く

```python
from datasets import load_dataset
alpaca = load_dataset("tatsu-lab/alpaca")
print(alpaca["train"][0])
# {'instruction': 'Give three tips for staying healthy.',
#  'input': '',
#  'output': '1. Eat a balanced diet...'}
```

### ShareGPT

- ChatGPT ユーザーからの実際の会話 (自主的に共有)
- マルチターン、多様なトピック
- チャットモデルに適しています

### ドリー (Databricks)

- **15,000 例** Databricks スタッフによって作成されました
- 完全にオープンソースであり、法的問題はありません
・アルパカより高品質（人間が書いたもの）

### FLAN コレクション

- 何百もの異なる NLP タスクからコンパイル
- 以下の一般的な指導に非常に適しています
- FLAN-T5、FLAN-UL2で使用

---

## 4. ハグフェイスTRLを使用したSFT

### インストール

```bash
pip install trl transformers datasets accelerate peft
```

### SFTトレーナー

`SFTTrainer` SFT の標準ツールである **TRL (Transformer Reinforcement Learning)** ライブラリから:

```python
from trl import SFTTrainer, SFTConfig
from transformers import AutoModelForCausalLM, AutoTokenizer

model = AutoModelForCausalLM.from_pretrained("mistralai/Mistral-7B-v0.1")
tokenizer = AutoTokenizer.from_pretrained("mistralai/Mistral-7B-v0.1")

trainer = SFTTrainer(
    model=model,
    train_dataset=dataset,
    args=SFTConfig(
        output_dir="./sft-output",
        num_train_epochs=3,
        per_device_train_batch_size=4,
        learning_rate=2e-5,
    ),
)
trainer.train()
```

### データ照合者

`DataCollatorForCompletionOnlyLM` 命令/入力での損失ではなく、**アシスタント応答**での損失のみを計算します。

```python
from trl import DataCollatorForCompletionOnlyLM

response_template = "[/INST]"  # Llama-2 format
collator = DataCollatorForCompletionOnlyLM(
    response_template=response_template,
    tokenizer=tokenizer
)
```

これは非常に重要です。プロンプトの損失を計算すると、モデルは応答の代わりにプロンプトを生成することを学習します。

---

## 5. チャット テンプレート

### ChatML 形式 (OpenAI)

```
<|im_start|>system
You are a helpful assistant.<|im_end|>
<|im_start|>user
Hello!<|im_end|>
<|im_start|>assistant
Hi! How can I help you?<|im_end|>
```

### Llama-3 形式 (メタ)

```
<|begin_of_text|><|start_header_id|>system<|end_header_id|>
You are a helpful assistant.<|eot_id|>
<|start_header_id|>user<|end_header_id|>
Hello!<|eot_id|>
<|start_header_id|>assistant<|end_header_id|>
Hi! How can I help?<|eot_id|>
```

### ミストラル/ラマ-2 フォーマット

```
<s>[INST] <<SYS>>
You are a helpful assistant.
<</SYS>>

Hello! [/INST] Hi! How can I help you? </s>
```

### チャット テンプレートを自動的に適用する

```python
messages = [
    {"role": "system", "content": "Bạn là trợ lý AI hữu ích."},
    {"role": "user", "content": "Python là gì?"}
]

# Tokenizer sẽ tự áp dụng đúng template
formatted = tokenizer.apply_chat_template(
    messages,
    tokenize=False,
    add_generation_prompt=True
)
print(formatted)
```

---

## 6. ハイパーパラメータのトレーニング

### 学習率

```python
learning_rate = 2e-5  # Điểm khởi đầu tốt cho full fine-tuning
# Với LoRA: 1e-4 đến 3e-4
# Quá cao: model "quên" kiến thức cũ (catastrophic forgetting)
# Quá thấp: học rất chậm, không hội tụ
```

### エポックと過学習

```python
num_train_epochs = 3
# 1-3 epochs thường đủ cho SFT
# Nhiều hơn: nguy cơ overfitting, model chỉ nhớ training data
```

### バッチサイズとグラジエントの蓄積

```python
per_device_train_batch_size = 4
gradient_accumulation_steps = 4
# Effective batch size = 4 * 4 = 16
# Dùng gradient accumulation khi VRAM không đủ để batch lớn
```

### ウォームアップ

```python
warmup_ratio = 0.03
# 3% đầu của training: learning rate tăng dần từ 0
# Giúp tránh gradient explosion ở đầu training
```

---

## 7. 混合精度、勾配チェックポイント

### BF16/FP16

```python
from transformers import TrainingArguments

args = TrainingArguments(
    bf16=True,   # Dùng BF16 nếu có Ampere GPU (A100, 3090)
    fp16=False,  # FP16 cho GPU cũ hơn (V100, T4)
    # BF16 ổn định hơn FP16, ít bị overflow hơn
)
```

### グラデーションチェックポイント

```python
# Tiết kiệm VRAM bằng cách không lưu tất cả activations
# Đánh đổi: chậm hơn ~30% do phải tính lại activations
model.gradient_checkpointing_enable()

args = TrainingArguments(
    gradient_checkpointing=True,
    gradient_checkpointing_kwargs={"use_reentrant": False}
)
```

---

## 8. 完全なコード例: TRL SFTTrainer を使用した Mistral-7B の微調整

```python
import torch
from datasets import load_dataset
from transformers import (
    AutoModelForCausalLM,
    AutoTokenizer,
    BitsAndBytesConfig,
)
from peft import LoraConfig, get_peft_model
from trl import SFTTrainer, SFTConfig

# --- 1. Load model (4-bit để tiết kiệm VRAM) ---
model_id = "mistralai/Mistral-7B-v0.3"

bnb_config = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_quant_type="nf4",
    bnb_4bit_compute_dtype=torch.bfloat16,
    bnb_4bit_use_double_quant=True,
)

model = AutoModelForCausalLM.from_pretrained(
    model_id,
    quantization_config=bnb_config,
    device_map="auto",
    trust_remote_code=True,
)
model.config.use_cache = False

tokenizer = AutoTokenizer.from_pretrained(model_id)
tokenizer.pad_token = tokenizer.eos_token
tokenizer.padding_side = "right"

# --- 2. LoRA Config ---
lora_config = LoraConfig(
    r=16,
    lora_alpha=32,
    target_modules=["q_proj", "v_proj", "k_proj", "o_proj"],
    lora_dropout=0.05,
    bias="none",
    task_type="CAUSAL_LM",
)
model = get_peft_model(model, lora_config)
model.print_trainable_parameters()
# trainable params: 83,886,080 || all params: 3,836,829,696 || ~2.19%

# --- 3. Dataset ---
dataset = load_dataset("tatsu-lab/alpaca", split="train[:5000]")

def format_prompt(example):
    """Chuyển Alpaca format sang Mistral instruction format."""
    if example["input"]:
        prompt = (
            f"[INST] {example['instruction']}\n\n"
            f"Input: {example['input']} [/INST] "
            f"{example['output']}"
        )
    else:
        prompt = (
            f"[INST] {example['instruction']} [/INST] "
            f"{example['output']}"
        )
    return {"text": prompt}

dataset = dataset.map(format_prompt)

# --- 4. Training Config ---
sft_config = SFTConfig(
    output_dir="./mistral-sft-alpaca",
    num_train_epochs=3,
    per_device_train_batch_size=4,
    gradient_accumulation_steps=4,
    learning_rate=2e-4,
    lr_scheduler_type="cosine",
    warmup_ratio=0.03,
    bf16=True,
    gradient_checkpointing=True,
    logging_steps=25,
    save_steps=500,
    evaluation_strategy="no",
    max_seq_length=2048,
    dataset_text_field="text",
    report_to="wandb",  # hoặc "tensorboard"
)

# --- 5. Trainer ---
trainer = SFTTrainer(
    model=model,
    args=sft_config,
    train_dataset=dataset,
    tokenizer=tokenizer,
)

trainer.train()

# --- 6. Lưu model ---
trainer.save_model("./mistral-sft-alpaca/final")
tokenizer.save_pretrained("./mistral-sft-alpaca/final")
print("Training complete!")
```

---

## 9. 評価: 損失曲線と定性テスト

### トレーニングの損失を追跡する

```python
# Training loss nên giảm dần và ổn định
# - Giảm quá nhanh rồi tăng lại: overfitting
# - Không giảm: learning rate quá thấp hoặc data có vấn đề
# - Dao động lớn: learning rate quá cao

# Với wandb: loss curve được vẽ tự động
# Mục tiêu: train loss < 1.0 sau vài epoch
```

### 定性的テスト

```python
from transformers import pipeline

pipe = pipeline(
    "text-generation",
    model="./mistral-sft-alpaca/final",
    tokenizer=tokenizer,
    device_map="auto",
)

test_prompts = [
    "[INST] Giải thích khái niệm recursion trong lập trình. [/INST]",
    "[INST] Viết hàm Python tính số Fibonacci. [/INST]",
    "[INST] Tóm tắt bài báo sau: ... [/INST]",
]

for prompt in test_prompts:
    output = pipe(
        prompt,
        max_new_tokens=256,
        temperature=0.7,
        do_sample=True,
    )
    print(output[0]["generated_text"])
    print("-" * 50)
```

### 簡単なベンチマーク

```python
# So sánh model trước và sau fine-tune trên test set
# Đo lường:
# - ROUGE score cho summarization
# - Exact match cho extraction tasks
# - Human evaluation cho general quality
```

---

## 概要

このレッスンでは次のことを学びました。

- **事前トレーニングされたモデル**はテキスト補完のみを行います。 **SFT** はそれを命令フォロワーに変えます
- SFT データには少なくとも **命令** と **出力** が必要です。 Alpaca、ShareGPT、Dolly などの多くの人気のあるデータセット
- **TRL SFTTrainer** は、特に次のような微調整プロセスを簡素化するのに役立ちます。 `DataCollatorForCompletionOnlyLM`
- **チャット テンプレート** (ChatML、Llama-3、Mistral) は会話の構造を定義します - 間違ったテンプレートを使用すると悪い結果が生じます
- **LoRA + 4 ビット量子化** を組み合わせることで、コンシューマ GPU で 7B モデルを微調整できます
- 損失曲線と並行して常に **定性的評価** (現実的なテスト) を行う

次の記事では、最小限の VRAM で大規模なモデルを微調整するのに役立つテクニックである **PEFT、LoRA、および QLoRA** について詳しく説明します。
