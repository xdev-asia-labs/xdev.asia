---
id: 019c9619-bb11-7011-c011-bb1100000011
title: 第 11 課：監督微調 (SFT) — 指令調優
slug: bai-11-supervised-fine-tuning
description: >-
  探索監督微調 (SFT) 技術，將預先訓練的 LLM 轉變為指令追蹤模型。了解如何準備資料、設定
  SFTTrainer、應用程式聊天範本和最佳化超參數以有效地微調 Mistral-7B。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 10
section_title: 第 3 部分：法學碩士培訓和微調
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: 人工智慧和法學碩士：從基礎到高級
  slug: ai-llm-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🧠 人工智慧與機器學習 — 第 10 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 11 課：監督微調 (SFT) —</tspan>
      <tspan x="60" dy="42">指令調優</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">人工智慧和法學碩士：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：法學碩士培訓和微調</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

# 第 11 課：監督微調 (SFT) — 指令調優

## 1. 為什麼需要Fine-Tuning？

### 預訓練模型與指令追蹤模型

**預先訓練的 LLM**（如 GPT-2、LLaMA 基礎、Mistral 基礎）的訓練目標只有一個：**預測文本中的下一個標記**。結果，模型學習了文法、世界知識和推理能力，但它**不知道如何回答問題或遵循指示**。

```
Input:  "Thủ đô của Việt Nam là"
Output: "thành phố lớn nhất ở miền Bắc, nằm bên bờ sông Hồng..."
```

這是純文字完成——對最終用戶沒有用處。

**指令跟隨模型**（ChatGPT、Claude、Mistral-Instruct）已微調為：
- 理解並遵循**使用者說明**
- 以**所需格式**回覆（JSON、重點等）
- 維護系統提示中定義的**角色**（助理、專家等）
- 拒絕**有害或不適當的請求**

將基礎模型轉變為指令模型的過程是**監督微調（SFT）**。

### 什麼時候應該要微調？

|情況|解決方案 |
|------------|------------|
|模型需要了解特定領域的知識 |域資料微調 |
|需要以固定格式輸出 | SFT 格式範例 |
|希望模特兒以自己的風格「說話」 |具有風格數據的 SFT |
|需要優化推理成本 |微調較小的模型 |
|及時的工程設計是不夠的 | SFT 往往更有效 |

---

## 2.指令資料集格式

### 基本結構：（指令、輸入、輸出）

SFT 資料集通常具有 **三重** 的形式：

```json
{
  "instruction": "Dịch đoạn văn sau sang tiếng Anh.",
  "input": "Hôm nay trời đẹp, tôi muốn đi dạo.",
  "output": "The weather is nice today, I want to go for a walk."
}
```

- **說明**：具體要求（強制性）
- **輸入**：上下文或附加資料（可為空）
- **輸出**：所需的答案（基本事實）

### 對話格式（多輪）

訓練多輪對話模型：

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

## 3. 熱門資料集

### 羊駝毛（史丹佛大學，2023 年）

- **52,000 個指令跟隨範例** 由 GPT-3.5 生成
- 格式：指令+輸入+輸出
- 為自學運動鋪路

```python
from datasets import load_dataset
alpaca = load_dataset("tatsu-lab/alpaca")
print(alpaca["train"][0])
# {'instruction': 'Give three tips for staying healthy.',
#  'input': '',
#  'output': '1. Eat a balanced diet...'}
```

### 分享GPT

- ChatGPT 用戶的真實對話（自願分享）
- 多回合、多元主題
- 適用於聊天模型

### 多莉（Databricks）

- **15,000 個範例** 由 Databricks 員工編寫
- 完全開源，無法律問題
- 比 Alpaca 更高的品質（由人類編寫）

### 水果餡餅系列

- 由數百個不同的 NLP 任務編譯而來
- 非常適合遵循一般說明
- 用於FLAN-T5、FLAN-UL2

---

## 4. SFT 與 Hugging Face TRL

### 安裝

```bash
pip install trl transformers datasets accelerate peft
```

### SFT訓練器

`SFTTrainer` 來自 **TRL（變壓器強化學習）** 庫，它是 SFT 的標準工具：

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

### 資料收集器

`DataCollatorForCompletionOnlyLM` 僅計算**輔助響應**的損失，而不計算指令/輸入的損失：

```python
from trl import DataCollatorForCompletionOnlyLM

response_template = "[/INST]"  # Llama-2 format
collator = DataCollatorForCompletionOnlyLM(
    response_template=response_template,
    tokenizer=tokenizer
)
```

這非常重要：如果您計算提示的損失，模型將學習產生...提示而不是回應。

---

## 5. 聊天模板

### ChatML 格式 (OpenAI)

```
<|im_start|>system
You are a helpful assistant.<|im_end|>
<|im_start|>user
Hello!<|im_end|>
<|im_start|>assistant
Hi! How can I help you?<|im_end|>
```

### Llama-3 格式（元）

```
<|begin_of_text|><|start_header_id|>system<|end_header_id|>
You are a helpful assistant.<|eot_id|>
<|start_header_id|>user<|end_header_id|>
Hello!<|eot_id|>
<|start_header_id|>assistant<|end_header_id|>
Hi! How can I help?<|eot_id|>
```

### Mistral/Llama-2 格式

```
<s>[INST] <<SYS>>
You are a helpful assistant.
<</SYS>>

Hello! [/INST] Hi! How can I help you? </s>
```

### 自動套用聊天模板

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

## 6. 訓練超參數

### 學習率

```python
learning_rate = 2e-5  # Điểm khởi đầu tốt cho full fine-tuning
# Với LoRA: 1e-4 đến 3e-4
# Quá cao: model "quên" kiến thức cũ (catastrophic forgetting)
# Quá thấp: học rất chậm, không hội tụ
```

### 紀元與過度擬合

```python
num_train_epochs = 3
# 1-3 epochs thường đủ cho SFT
# Nhiều hơn: nguy cơ overfitting, model chỉ nhớ training data
```

### 批量大小和梯度累積

```python
per_device_train_batch_size = 4
gradient_accumulation_steps = 4
# Effective batch size = 4 * 4 = 16
# Dùng gradient accumulation khi VRAM không đủ để batch lớn
```

### 熱身

```python
warmup_ratio = 0.03
# 3% đầu của training: learning rate tăng dần từ 0
# Giúp tránh gradient explosion ở đầu training
```

---

## 7. 混合精度、梯度檢查點

### BF16/FP16

```python
from transformers import TrainingArguments

args = TrainingArguments(
    bf16=True,   # Dùng BF16 nếu có Ampere GPU (A100, 3090)
    fp16=False,  # FP16 cho GPU cũ hơn (V100, T4)
    # BF16 ổn định hơn FP16, ít bị overflow hơn
)
```

### 梯度檢查點

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

## 8. 完整程式碼範例：使用 TRL SFTTrainer 微調 Mistral-7B

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

## 9. 評估：損耗曲線與定性測試

### 追蹤訓練損失

```python
# Training loss nên giảm dần và ổn định
# - Giảm quá nhanh rồi tăng lại: overfitting
# - Không giảm: learning rate quá thấp hoặc data có vấn đề
# - Dao động lớn: learning rate quá cao

# Với wandb: loss curve được vẽ tự động
# Mục tiêu: train loss < 1.0 sau vài epoch
```

### 定性測試

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

### 簡單基準測試

```python
# So sánh model trước và sau fine-tune trên test set
# Đo lường:
# - ROUGE score cho summarization
# - Exact match cho extraction tasks
# - Human evaluation cho general quality
```

---

## 總結

在本課中我們學到了：

- **預訓練模型**僅完成文字補全； **SFT** 將其變成指令跟隨器
- SFT資料至少需要**指令**和**輸出**；許多流行的資料集，例如 Alpaca、ShareGPT、Dolly
- **TRL SFTTrainer** 有助於簡化微調過程，尤其是在 `DataCollatorForCompletionOnlyLM`
- **聊天範本**（ChatML、Llama-3、Mistral）定義對話結構 - 使用錯誤的範本會產生不好的結果
- 結合 **LoRA + 4 位元量化**，可以在消費性 GPU 上微調 7B 模型
- 始終與損失曲線平行進行**定性評估**（現實測試）

下一篇文章將深入探討 **PEFT、LoRA 和 QLoRA** — 有助於使用最小 VRAM 微調大型模型的技術。
