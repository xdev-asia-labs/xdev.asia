---
id: 019c9619-bb12-7012-c012-bb1200000012
title: 'レッスン 12: PEFT — LoRA、QLoRA、およびアダプター メソッド'
slug: bai-12-peft-lora-qlora
description: >-
  LoRA および QLoRA を使用したパラメーター効率の良い微調整 (PEFT) を学習します。これは、コンシューマー GPU
  だけで数十億のパラメーターを使用して LLM を微調整できる技術です。 LoRA 数学、4 ビット BitsAndBytes
  構成をマスターし、メソッド間の効率を比較します。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 11
section_title: 'パート 3: LLM のトレーニングと微調整'
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: 'AI と LLM: 基本から高度まで'
  slug: ai-llm-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1777" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1777)"/>

  <!-- Decorations -->
  <g>
    <circle cx="999" cy="267" r="22" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="898" cy="86" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="797" cy="165" r="36" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="696" cy="244" r="13" fill="#818cf8" opacity="0.13"/>
    <circle cx="1095" cy="63" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="177" x2="1100" y2="257" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="207" x2="1050" y2="277" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1054.712812921102,211 1054.712812921102,243 1027,259 999.287187078898,243 999.287187078898,211 1027,195" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🧠 AI と ML — レッスン 11</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 12: PEFT — LoRA、QLoRA、アダプター</tspan>
      <tspan x="60" dy="42">メソッド</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI と LLM: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: LLM のトレーニングと微調整</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

# レッスン 12: PEFT — LoRA、QLoRA、およびアダプター メソッド

## 1. フルファインチューニングの問題

大規模な LLM のパラメータ全体を微調整するには、大きな課題が生じます。

### 必要なメモリ

|モデル |パラメータの数 | VRAM (FP32) | VRAM (BF16) | VRAM + アダム (BF16) |
|----------|-----------|---------------|-------------|--------|
| GPT-2 | 117M | 0.5GB | 0.25GB | ～1 GB |
| LLaMA-7B | 7B | 28GB | 14GB | ～56 GB |
| LLaMA-13B | 13B | 52GB | 26GB | ～104 GB |
| LLaMA-70B | 70B | 280GB | 140GB | ～560 GB |

Adam オプティマイザーは、各パラメーターの **運動量** と **分散** を保存します (モデルの重みメモリの 3 倍)。 LLaMA-7B を完全に微調整するには、4× A100 80GB が必要です。

### その他の問題

- **壊滅的な忘却**: モデルはトレーニング前の知識を「忘れる」
- **ストレージ**: 微調整された各バージョン = フルモデルのコピー (7B の場合は 14GB)
- **費用**: 1 回のトレーニング実行で数千米ドル

---

## 2. パラメーター効率の良い微調整 (PEFT) の概要

**PEFT** は、パラメータの**小さなサブセット**のみを更新し、残りは変更しないままにする一連の手法です。

```
Full Fine-Tuning:  cập nhật 100% params  → VRAM cao, chậm, tốn kém
PEFT:              cập nhật 0.1% - 5%    → VRAM thấp, nhanh, tiết kiệm
```

主なPEFT手法:

1. **アダプターレイヤー**: トランスレイヤーの間に小さなレイヤーを追加します。
2. **プレフィックス調整**: シーケンスの先頭にトレーニング可能なトークンを追加します。
3. **プロンプト チューニング**: ソフト プロンプトの埋め込みのみを微調整します
4. **LoRA**: 重み更新行列を 2 つの低ランク行列の積に分解します。

---

## 3. LoRA: 低ランクの適応

### LoRA の数学

基本的なアイデア: **微調整における重みの更新は、ランクが低いことがよくあります**。

直接学習する代わりに:
```
W_new = W_original + ΔW   (ΔW có kích thước d×d, rất lớn)
```

LoRA は ΔW を次のように因数分解します。
```
ΔW = B × A
```

その中で:
- `W_original` ∈ ℝ^(d×d): 凍結、更新されない
- `A` ∈ ℝ^(r×d): トレーニング可能なランダムなガウス初期化
- `B` ∈ ℝ^(d×r): トレーニング可能、0 に初期化されます (最初は ΔW = 0 になります)
- `r` **ランク** (通常 4-64)、r << d

```
Forward pass: h = W_original × x + (B × A) × x × (alpha/r)
```

**パラメータの利点:**

```
d = 4096 (LLaMA-7B hidden dim)

Full ΔW:   4096 × 4096 = 16,777,216 tham số
LoRA r=16: (4096×16) + (16×4096) = 131,072 tham số
→ Giảm 128 lần!
```

### ランクとアルファ

```python
lora_config = LoraConfig(
    r=16,          # Rank: càng cao → càng nhiều params nhưng expressive hơn
    lora_alpha=32, # Scaling factor: alpha/r = scale của LoRA
    # Thường đặt alpha = 2*r hoặc alpha = r
    lora_dropout=0.05,  # Regularization
)
```

**ランク選択の手順:**

|ランク(r) |使用例 |トレーニング可能なパラメータの数 (7B モデル) |
|----------|----------|--------------------------|
| 4 |単純なタスク、少量のデータ | ~400 万 (~0.06%) |
| 8 |バランスが良い | ~800 万 (~0.12%) |
| 16 |より複雑なタスク | ~1,700 万 (~0.24%) |
| 64 |大規模なドメインの適応 | ~6,700 万 (~0.95%) |

---

## 4. ターゲットモジュールの選択

LoRA は、アテンション メカニズムの **線形レイヤー** に適用されます。

```python
# Với LLaMA/Mistral architecture:
target_modules = [
    "q_proj",   # Query projection
    "v_proj",   # Value projection
    "k_proj",   # Key projection
    "o_proj",   # Output projection
    # Tùy chọn thêm:
    "gate_proj", # MLP gate
    "up_proj",   # MLP up
    "down_proj", # MLP down
]
```

**戦略:**

```python
# Minimal (nhanh, ít VRAM):
target_modules = ["q_proj", "v_proj"]

# Standard (cân bằng tốt):
target_modules = ["q_proj", "k_proj", "v_proj", "o_proj"]

# Full attention + MLP (tốt nhất, nhưng chậm hơn):
target_modules = ["q_proj", "k_proj", "v_proj", "o_proj",
                  "gate_proj", "up_proj", "down_proj"]
```

---

## 5. QLoRA: 4 ビット量子化 + LoRA

**QLoRA** (Dettmers et al., 2023) は、次の 2 つの技術を組み合わせています。

1. **NF4 (NormalFloat 4 ビット)**: モデルの重みを 4 ビットまで量子化します。
2. **二重量子化**: 両方の量子化定数を量子化します。
3. **ページ オプティマイザー**: CPU オフロードを使用したオプティマイザー メモリ管理

### NF4 が INT4 よりも優れているのはなぜですか?

NF4 は、モデルの重みの **正規分布** 向けに設計されています。
- LLM 重みは正規分布します (ガウス分布)。
- NF4 は高密度領域により多くのビンを割り当てます
- INT4と比較して量子化誤差が大幅に減少

```
FP16 → NF4: giảm 75% bộ nhớ, chất lượng gần như giữ nguyên
```

### VRAM 比較 (LLaMA-7B)

|方法 | VRAM トレーニング |品質 |
|----------|------|----------|
|フルFT(FP16) | ～56 GB |ベースライン |
| LoRA (FP16) | ～28 GB | ~98% ベースライン |
| QLoRA (NF4) | ～10 GB | ~97% ベースライン |

---

## 6. BitsAndBytes: 4 ビット モデルのロード

```python
import torch
from transformers import AutoModelForCausalLM, BitsAndBytesConfig

# Cấu hình 4-bit quantization
bnb_config = BitsAndBytesConfig(
    load_in_4bit=True,              # Bật 4-bit loading
    bnb_4bit_quant_type="nf4",      # Dùng NF4 (tốt hơn fp4)
    bnb_4bit_compute_dtype=torch.bfloat16,  # Dtype cho compute
    bnb_4bit_use_double_quant=True, # Double quantization (tiết kiệm thêm ~0.4 bit/param)
)

model = AutoModelForCausalLM.from_pretrained(
    "meta-llama/Meta-Llama-3-8B",
    quantization_config=bnb_config,
    device_map="auto",  # Tự động phân bổ layers lên GPU/CPU
)

# Kiểm tra bộ nhớ
print(f"Model footprint: {model.get_memory_footprint() / 1e9:.2f} GB")
# → ~4.5 GB thay vì ~16 GB (BF16)
```

---

## 7. プレフィックスチューニングとプロンプトチューニング

### 迅速なチューニング

**ソフト プロンプトの埋め込み**を微調整するだけです (仮想埋め込みトークンが入力に追加されます)。

```python
from peft import PromptTuningConfig, TaskType, get_peft_model

config = PromptTuningConfig(
    task_type=TaskType.CAUSAL_LM,
    num_virtual_tokens=20,  # Số soft prompt tokens
    tokenizer_name_or_path="gpt2",
)
model = get_peft_model(model, config)
# trainable params: 15,360 / 124,475,648 → 0.01%!
```

### プレフィックスチューニング

各アテンション レイヤーの **キーと値**にトレーニング可能な「プレフィックス」を追加します。

```python
from peft import PrefixTuningConfig

config = PrefixTuningConfig(
    task_type=TaskType.CAUSAL_LM,
    num_virtual_tokens=30,
    encoder_hidden_size=512,  # MLP để tạo prefix
)
```

プレフィックス チューニングはプロンプト チューニングよりも優れていますが、多くのタスクにおいて LoRA よりは劣ります。トレーニング可能なパラメータがほとんど必要ない場合に使用します。

---

## 8. コード全体: PEFT + TRL を使用した QLoRA の LLaMA 微調整

```python
import torch
from datasets import load_dataset
from transformers import (
    AutoModelForCausalLM,
    AutoTokenizer,
    BitsAndBytesConfig,
)
from peft import (
    LoraConfig,
    get_peft_model,
    prepare_model_for_kbit_training,
    TaskType,
)
from trl import SFTTrainer, SFTConfig

# ============================================================
# 1. Cấu hình
# ============================================================
MODEL_ID = "meta-llama/Meta-Llama-3-8B"
OUTPUT_DIR = "./llama3-8b-qlora-vi"
MAX_SEQ_LENGTH = 2048

# ============================================================
# 2. Load Tokenizer
# ============================================================
tokenizer = AutoTokenizer.from_pretrained(MODEL_ID)
tokenizer.pad_token = tokenizer.eos_token
tokenizer.padding_side = "right"

# ============================================================
# 3. Load Model với 4-bit Quantization
# ============================================================
bnb_config = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_quant_type="nf4",
    bnb_4bit_compute_dtype=torch.bfloat16,
    bnb_4bit_use_double_quant=True,
)

model = AutoModelForCausalLM.from_pretrained(
    MODEL_ID,
    quantization_config=bnb_config,
    device_map="auto",
    attn_implementation="flash_attention_2",  # Faster attention
)

# Chuẩn bị model cho k-bit training
model = prepare_model_for_kbit_training(model)

# ============================================================
# 4. Cấu hình LoRA
# ============================================================
lora_config = LoraConfig(
    r=16,
    lora_alpha=32,
    target_modules=[
        "q_proj", "k_proj", "v_proj", "o_proj",
        "gate_proj", "up_proj", "down_proj",
    ],
    lora_dropout=0.05,
    bias="none",
    task_type=TaskType.CAUSAL_LM,
)

model = get_peft_model(model, lora_config)
model.print_trainable_parameters()

# ============================================================
# 5. Dataset: Vietnamese instruction data
# ============================================================
dataset = load_dataset("tatsu-lab/alpaca", split="train[:10000]")

def format_chat(example):
    messages = [
        {"role": "system", "content": "Bạn là trợ lý AI hữu ích, trả lời bằng tiếng Việt."},
        {"role": "user", "content": example["instruction"]
                                    + (f"\n\n{example['input']}" if example["input"] else "")},
        {"role": "assistant", "content": example["output"]},
    ]
    text = tokenizer.apply_chat_template(messages, tokenize=False)
    return {"text": text}

dataset = dataset.map(format_chat, remove_columns=dataset.column_names)

# ============================================================
# 6. Training Configuration
# ============================================================
training_args = SFTConfig(
    output_dir=OUTPUT_DIR,
    num_train_epochs=2,
    per_device_train_batch_size=2,
    gradient_accumulation_steps=8,      # Effective batch = 16
    learning_rate=2e-4,
    lr_scheduler_type="cosine",
    warmup_ratio=0.05,
    bf16=True,
    gradient_checkpointing=True,
    gradient_checkpointing_kwargs={"use_reentrant": False},
    max_seq_length=MAX_SEQ_LENGTH,
    dataset_text_field="text",
    logging_steps=10,
    save_strategy="epoch",
    optim="paged_adamw_8bit",           # Paged optimizer cho QLoRA
    report_to="tensorboard",
)

# ============================================================
# 7. Train
# ============================================================
trainer = SFTTrainer(
    model=model,
    args=training_args,
    train_dataset=dataset,
    tokenizer=tokenizer,
)

trainer.train()

# ============================================================
# 8. Lưu LoRA weights (chỉ ~80MB, không phải toàn bộ model!)
# ============================================================
trainer.save_model(OUTPUT_DIR + "/lora-weights")
tokenizer.save_pretrained(OUTPUT_DIR + "/lora-weights")

# ============================================================
# 9. Merge LoRA vào base model (cho inference)
# ============================================================
from peft import PeftModel

base_model = AutoModelForCausalLM.from_pretrained(
    MODEL_ID,
    torch_dtype=torch.bfloat16,
    device_map="auto",
)
merged_model = PeftModel.from_pretrained(base_model, OUTPUT_DIR + "/lora-weights")
merged_model = merged_model.merge_and_unload()
merged_model.save_pretrained(OUTPUT_DIR + "/merged")
print("Done! Merged model saved.")
```

---

## 9. 比較: フル FT vs LoRA vs QLoRA

|基準 |完全な微調整 | LoRA(BF16) | QLoRA (NF4) |
|----------|------|---------------|---------------|
| VRAM（7Bモデル） | ～56 GB | ～28 GB | ～10 GB |
|必要な GPU | 4× A100 | 2×A100 | 1× RTX 3090 |
|トレーニング速度 |最速 |速い | ~30% 遅くなる |
|品質 | 100% (ベースライン) | ~98-99% | ~96-98% |
|チェックポイントのサイズ | 14GB | ~80MB | ~80MB |
|テストが簡単 |難しい |簡単 |最も簡単 |
|壊滅的な物忘れ |曹操 |低い |低い |

### いつ何を使用するか?

- **フル FT**: 多くの GPU、大規模なデータセットがあり、最高の品質が必要
- **LoRA**: A100/H100 GPU、品質とリソースのバランスが良い
- **QLoRA**: コンシューマ GPU (RTX 3090/4090)、個人研究、ラピッド プロトタイプ

---

## 概要

- **完全な微調整**は、通常の GPU のモデル 7B+ では現実的ではありません
- **LoRA** は重みの更新を因数分解して、 `B × A` ランクが低い場合 — トレーニング可能なパラメータを 99% 以上削減します
- **QLoRA** は、NF4 量子化と LoRA を組み合わせます — 2x RTX 3090 で 70B モデルを微調整します
- `target_modules` 重要: から始める `q_proj, v_proj`、必要に応じて展開します
- トレーニング後、**LoRA** を基本モデルにマージしてオーバーヘッドなしで推論します

次の記事では、**RLHF とアライメント** について説明します。これは、指示に従うだけでなく、安全で人間の価値観と一致するようにモデルをトレーニングするプロセスです。
