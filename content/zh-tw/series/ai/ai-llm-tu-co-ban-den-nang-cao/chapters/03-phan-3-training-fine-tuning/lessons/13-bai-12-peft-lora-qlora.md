---
id: 019c9619-bb12-7012-c012-bb1200000012
title: 第 12 課：PEFT — LoRA、QLoRA 和適配器方法
slug: bai-12-peft-lora-qlora
description: >-
  學習使用 LoRA 和 QLoRA 進行參數高效微調 (PEFT)，這種技術只需使用消費性 GPU 即可對包含數十億個參數的 LLM 進行微調。掌握
  LoRA 數學、4 位元 BitsAndBytes 配置，並比較方法之間的效率。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 11
section_title: 第 3 部分：法學碩士培訓和微調
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: 人工智慧和法學碩士：從基礎到高級
  slug: ai-llm-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🧠 人工智慧與機器學習 — 第 11 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 12 課：PEFT — LoRA、QLoRA 和適配器</tspan>
      <tspan x="60" dy="42">方法</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">人工智慧和法學碩士：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：法學碩士培訓和微調</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

# 第 12 課：PEFT — LoRA、QLoRA 和適配器方法

## 1. Full Fine-Tuning 的問題

微調大型法學碩士的整個參數帶來了巨大的挑戰：

### 需要記憶體

|型號|參數數 |顯存 (FP32) |顯存 (BF16) |顯存 + Adam (BF16) |
|--------|---------|-------------|-------------|--------------------|
| GPT-2 | 117M | 0.5GB| 0.25 GB | 0.25 GB 〜1 GB |
| LLaMA-7B| 7B| 28GB| 14GB| 〜56 GB |
| LLaMA-13B | 13B | 13B 52GB| 26GB| 〜104 GB |
| LLaMA-70B | 70B | 70B 280GB| 140 GB | 140 GB 〜560 GB |

Adam 優化器為每個參數保存**動量**和**方差**——模型權重記憶體的 3 倍。 LLaMA-7B 需要 4× A100 80GB 才能進行全面微調！

### 其他問題

- **災難性遺忘**：模型「忘記」預訓練知識
- **儲存**：每個微調版本 = 完整模型副本（7B 為 14GB）
- **花費**：一次訓練數千美元

---

## 2. 參數高效率微調 (PEFT) 概述

**PEFT** 是一系列技術，僅更新參數的**小子集**，其餘部分保持不變：

```
Full Fine-Tuning:  cập nhật 100% params  → VRAM cao, chậm, tốn kém
PEFT:              cập nhật 0.1% - 5%    → VRAM thấp, nhanh, tiết kiệm
```

主要PEFT方法：

1. **Adapter Layers**：在transformer圖層之間新增小圖層
2. **前綴調整**：將可訓練的標記加入到序列的開頭
3. **Prompt Tuning**：僅微調軟提示嵌入
4. **LoRA**：將權重更新矩陣分解為兩個低秩矩陣的乘積

---

## 3. LoRA：低階適應

### LoRA 的數學

核心思想：**微調中的權重更新往往排名較低**。

而不是直接學習：
```
W_new = W_original + ΔW   (ΔW có kích thước d×d, rất lớn)
```

LoRA 將 ΔW 分解為：
```
ΔW = B × A
```

其中：
- `W_original` ε ℝ^(d×d)：凍結，不更新
- `A` ε ℝ^(r×d)：可訓練、隨機高斯初始化
- `B` ε ℝ^(d×r)：可訓練，初始化為0（使得最初ΔW = 0）
- `r` 是**等級**（通常為4-64），r << d

```
Forward pass: h = W_original × x + (B × A) × x × (alpha/r)
```

**參數的好處：**

```
d = 4096 (LLaMA-7B hidden dim)

Full ΔW:   4096 × 4096 = 16,777,216 tham số
LoRA r=16: (4096×16) + (16×4096) = 131,072 tham số
→ Giảm 128 lần!
```

### 排名和阿爾法

```python
lora_config = LoraConfig(
    r=16,          # Rank: càng cao → càng nhiều params nhưng expressive hơn
    lora_alpha=32, # Scaling factor: alpha/r = scale của LoRA
    # Thường đặt alpha = 2*r hoặc alpha = r
    lora_dropout=0.05,  # Regularization
)
```

**選擇等級說明：**

|排名 (r) |使用案例 |可訓練參數的數量（7B 模型）|
|--------|----------|------------------------|
| 4 |任務簡單，數據少| ~4M (~0.06%) |
| 8 |良好的平衡性| ~8M (~0.12%) |
| 16 | 16更複雜的任務 |約 1700 萬 (約 0.24%) |
| 64 | 64大域適配| ~67M (~0.95%) |

---

## 4. 選擇目標模組

LoRA 應用於注意力機制中的**線性層**：

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

**策略：**

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

## 5. QLoRA：4 位元量化 + LoRA

**QLoRA**（Dettmers 等人，2023）結合了兩種技術：

1. **NF4（NormalFloat 4 位）**：將模型權重量化為 4 位
2. **雙量化**：對兩個量化常數進行量化
3. **分頁優化器**：具有CPU卸載的優化器記憶體管理

### 為什麼 NF4 比 INT4 更好？

NF4 專為模型權重的**常態分佈**設計：
- LLM權重呈常態分佈（高斯）
- NF4 在高密度區域分配更多垃圾箱
- 與 INT4 相比，量化誤差顯著降低

```
FP16 → NF4: giảm 75% bộ nhớ, chất lượng gần như giữ nguyên
```

### VRAM 比較 (LLaMA-7B)

|方法|顯存訓練 |品質 |
|--------|----------------|------------|
|完整金融時報 (FP16) | 〜56 GB |基線|
|洛拉 (FP16) | 〜28 GB | ~98% 基線 |
| QLoRA (NF4) | 〜10 GB | ~97% 基線 |

---

## 6. BitsAndBytes：載入模型 4 位

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

## 7. 前綴調優與提示調優

### 及時調整

只需微調 **軟提示嵌入** （虛擬嵌入標記將添加到輸入中）：

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

### 前綴調整

將可訓練的「前綴」加到每個注意力層的**鍵和值**：

```python
from peft import PrefixTuningConfig

config = PrefixTuningConfig(
    task_type=TaskType.CAUSAL_LM,
    num_virtual_tokens=30,
    encoder_hidden_size=512,  # MLP để tạo prefix
)
```

在許多任務中，前綴調優比提示調優好，但比 LoRA 差。當需要很少的可訓練參數時使用。

---

## 8. 完整程式碼：QLoRA 使用 PEFT + TRL 微調 LLaMA

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

## 9. 比較：Full FT、LoRA 與 QLoRA

|標準|全面微調 |洛拉 (BF16) | QLoRA (NF4) |
|----------|-----------------|-------------|----------|
| VRAM（7B 型）| 〜56 GB | 〜28 GB | 〜10 GB |
|所需 GPU | 4× A100 | 2× A100 | 1× RTX 3090 |
|訓練速度|最快|快|慢約 30% |
|品質 | 100%（基線）| ~98-99% | 〜96-98% |
|檢查點尺寸| 14GB| 〜80 MB | 〜80 MB |
|易於測試|困難|簡單|最簡單|
|災難性遺忘|曹 |低|低|

### 什麼時候使用什麼？

- **完整 FT**：擁有許多 GPU、大數據集、需要最高品質
- **LoRA**：A100/H100 GPU，品質與資源之間的良好平衡
- **QLoRA**：消費級 GPU (RTX 3090/4090)，個人研究，快速原型

---

## 總結

- **完全微調**對於常規 GPU 上的模型 7B+ 來說不切實際
- **LoRA** 將權重更新分解為 `B × A` 低等級 — 減少 99% 以上的可訓練參數
- **QLoRA** 將 NF4 量化與 LoRA 結合 — 在 2× RTX 3090 上微調 70B 模型
- `target_modules` 重要：從 `q_proj, v_proj`，必要時展開
- 訓練後，**將 LoRA** 合併到基礎模型中進行推理，無需額外開銷

下一篇文章將討論 **RLHF 和對齊** — 訓練模型的過程，使其不僅遵循指令，而且安全且符合人類價值。
