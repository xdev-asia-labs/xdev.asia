---
id: 019e0a01-bb06-7001-c001-ee0600000001
title: 第 6 課：微調法學碩士 — LoRA、QLoRA 與 PEFT
slug: bai-6-fine-tuning-llm-lora-qlora-peft
description: >-
  微調策略：完全微調與參數高效率。 LoRA、QLoRA、PEFT。資料集準備，使用 Hugging Face TRL
  進行訓練。評估指標。合併適配器。針對特定領域的任務練習微調 Mistral/LLaMA。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 5
section_title: 第 2 部分：NLP 和大型語言模型 (LLM)
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: AI代理工程師：從零到生產
  slug: ai-agent-engineer-tu-zero-den-production
locale: zh-tw
---

> **GPT-4 了解一切，但對您的內部數據一無所知。 ** 預訓練模型是基礎 - 微調是將其變成領域專家的步驟。問題？完全微調 LLaMA 3 70B 需要 140GB+ VRAM。 LoRA只需要訓練**0.1%的參數**。 QLoRA 下推至**單 GPU 24GB**。本文從理論到完整程式碼 — 使用 Hugging Face TRL 對私人資料微調 Mistral 7B。

## 1. 為什麼要微調？ - 當預訓練模型不夠時

### 1.1。預訓練模型的局限性

預先訓練的法學碩士接受**網路規模資料**的訓練－維基百科、GitHub、書籍、論壇。但他們缺乏：

- **特定領域知識**：醫學術語、越南法律、內部代碼庫
- **一致的輸出格式**：固定的 JSON 架構、公司報表模板
- **語氣與風格**：客戶支援聊天機器人與技術聊天機器人完全不同
- **私人資料**：模型對從未出現在網路上的內部資料一無所知

```text
Khi nào cần Fine-tuning vs Prompting vs RAG?

                    ┌─────────────────────┐
                    │  Task cần gì?       │
                    └─────────┬───────────┘
                              │
              ┌───────────────┼───────────────┐
              ▼               ▼               ▼
     ┌────────────┐  ┌──────────────┐  ┌──────────────┐
     │ Knowledge  │  │   Behavior   │  │  Both        │
     │ mới        │  │   mới        │  │              │
     └─────┬──────┘  └──────┬───────┘  └──────┬───────┘
           │                │                  │
           ▼                ▼                  ▼
       ┌───────┐     ┌────────────┐     ┌────────────┐
       │  RAG  │     │ Fine-tune  │     │ Fine-tune  │
       └───────┘     └────────────┘     │  + RAG     │
                                        └────────────┘

Decision Matrix:
┌──────────────────┬──────────┬────────────┬───────────────┐
│ Yêu cầu         │ Prompting│ RAG        │ Fine-tuning   │
├──────────────────┼──────────┼────────────┼───────────────┤
│ Thêm knowledge  │ ✗        │ ✓ (best)   │ ✓ (expensive) │
│ Thay đổi style  │ ~        │ ✗          │ ✓ (best)      │
│ Output format    │ ~        │ ✗          │ ✓ (best)      │
│ Giảm latency    │ ✗        │ ✗          │ ✓             │
│ Giảm token cost │ ✗        │ ✗          │ ✓             │
│ Setup nhanh     │ ✓ (best) │ ✓          │ ✗             │
└──────────────────┴──────────┴────────────┴───────────────┘
```

### 1.2。現實生活中的例子

|使用案例 |為什麼要微調？ |
|----------|---------------------|
|越南醫療聊天機器人 |需要了解越南醫學術語，以正確格式回答 |
|內部框架代碼助手 | RAG 還不夠——需要一個「理解」編碼模式的模型 |
|對支援電子郵件進行分類 |一致的 JSON 輸出、低延遲、無 API 成本 |
|財務報表摘要|領域特定術語+嚴格格式|

> **關鍵見解：** 微調會改變模型的 **行為**。 RAG 改變**知識**。提示更改**上下文**。這三種技術是相輔相成的，而不是互相取代的。

## 2. 完全微調與參數高效率微調（PEFT）

### 2.1。全面微調－蠻力方法

全面微調更新模型的**所有參數**。對於 LLaMA 3 8B，即 **80 億個參數**。

```text
Full Fine-tuning Memory Requirements:

Model Parameters:  8B × 4 bytes (FP32)  = 32 GB
              or   8B × 2 bytes (BF16)  = 16 GB

Optimizer States (AdamW):
  - Momentum (m):      8B × 4 bytes     = 32 GB
  - Variance (v):      8B × 4 bytes     = 32 GB

Gradients:            8B × 4 bytes       = 32 GB

Activations (vary):   ~10-30 GB (batch, seq_len dependent)

TOTAL (FP32):    32 + 32 + 32 + 32 + ~20 = ~148 GB VRAM
TOTAL (BF16):    16 + 32 + 32 + 16 + ~20 = ~116 GB VRAM

→ Cần 4× A100 80GB hoặc 2× H100 80GB cho LLaMA 8B
→ LLaMA 70B? 10-16× A100 80GB → ~$30-50/hour cloud
```

### 2.2。 PEFT－更少的訓練，更有效

**參數高效微調 (PEFT)** 僅訓練一小部分參數 — 通常為整個模型的 **0.1% - 1%**。

|標準|全面微調| PEFT（LoRA/QLoRA）|
|----------|-----------------|--------------------|
| **可訓練參數** | 100%（8B）| 0.1-1% (8-80M) |
| **顯存 (LLaMA 8B)** | ~116 GB (BF16) | ~6-16 GB |
| **培訓時間** |小時-天（多 GPU）|小時（單 GPU）|
| **需要 GPU** | 4-8× A100 | 1× RTX 4090/A100 |
| **雲端成本 (8B)** | 50-200 美元 | 5-20 美元 |
| **災難性遺忘的風險** |曹 |低|
| **易於更換轉接器** |否 — 全新型號 |是的 — 只需更換小型轉接器 |
| **品質** |最高（如果數據足夠）|與完整 FT 相比，提高 95-99% |

> **重點：** PEFT 以 **1/10 的成本** 實現了約 95% 的完全微調品質。除非您有數十萬個樣品和大量預算，否則 PEFT 始終是預設選擇。

## 3. LoRA 深入研究－低階適應

### 3.1。核心思想——矩陣分解

**LoRA（低階適應）** — 來自 Microsoft Research 的論文（Hu 等人，2021）。核心理念：

> 微調時，**權重變化具有固有的低等級**。我們不是更新大矩陣 W，而是分解並改變兩個小矩陣的乘積。

```text
LoRA Math Intuition:

Standard fine-tuning:
  W' = W + ΔW          (ΔW has same shape as W)
  W ∈ ℝ^(d×d)         (ví dụ: 4096 × 4096 = 16.7M params)

LoRA decomposition:
  W' = W + BA           (freeze W, chỉ train B và A)
  A ∈ ℝ^(r×d)          (ví dụ: r=16 → 16 × 4096 = 65K)
  B ∈ ℝ^(d×r)          (ví dụ: 4096 × 16 = 65K)
  ΔW = BA ∈ ℝ^(d×d)   (full-rank approximation)

Params so sánh:
  ΔW trực tiếp:  d × d = 4096 × 4096 = 16,777,216  params
  LoRA (r=16):   2 × d × r = 2 × 4096 × 16 = 131,072  params
  → Giảm 128×! (chỉ 0.78% original)

Scaling factor:
  h = Wx + (α/r) · BAx
  α (lora_alpha): scaling hyperparameter, thường α = 2×r

Hình dung:

  Input x ──────────────────── W (frozen) ────────── + ──▶ Output h
     │                                                ▲
     │                                                │
     └──▶ A (down-project) ──▶ B (up-project) ──────┘
          d → r (compress)      r → d (expand)
          ℝ^(r×d)               ℝ^(d×r)
          
     r = rank (4, 8, 16, 32, 64)
     Nhỏ hơn → ít params hơn, nhưng có thể mất expressiveness
```

### 3.2。 LoRA 應用場景－目標模組

在 Transformer 中，每個注意力層有 4 個投影矩陣。 LoRA 適用於以下一項或多項：

```text
Attention Block Target Modules:

Input ──▶ ┌─── q_proj (Query)  ──┐
           ├─── k_proj (Key)    ──┤──▶ Attention ──▶ o_proj (Output)
           └─── v_proj (Value)  ──┘
           
MLP Block:
Input ──▶ gate_proj ──▶ SiLU ──▶ × ──▶ down_proj ──▶ Output
           up_proj ────────────▶ ┘

Recommended Target Modules:
┌────────────────┬───────────┬──────────────────────────────┐
│ Target         │ Impact    │ Khi nào dùng                │
├────────────────┼───────────┼──────────────────────────────┤
│ q_proj, v_proj │ Cao       │ Default choice, paper gốc   │
│ + k_proj       │ Cao hơn   │ Thêm ~33% params, nhích     │
│ + o_proj       │ Marginal  │ Thêm nếu budget cho phép    │
│ + gate, up,    │ Cao nhất  │ "all-linear" — best quality │
│   down proj    │           │ nhưng 3× params so default   │
└────────────────┴───────────┴──────────────────────────────┘

Ví dụ thực tế (Mistral 7B, r=16):
  - q_proj + v_proj only:      ~4.2M trainable params
  - All attention + MLP:       ~21M trainable params  
  - Tổng model: 7.24B → train 0.06% - 0.3%
```

### 3.3。 LoRA 超參數

|超參數|意義|人氣值|推薦 |
|----------------|---------|-------------|-------------|
| `r` （排名）|分解等級 | 4、8、16、32、64 |多數任務為 16-32 |
| `lora_alpha` |比例因子| 16、32、64 |通常 = 2×r |
| `lora_dropout` | LoRA 層上的 Dropout | 0.0、0.05、0.1 |若過度擬合則為 0.05-0.1 |
| `target_modules` | LoRA | 層應用q_proj、v_proj、... | 「一切」只為最好的品質 |
| `bias` |火車偏差不| “無”、“全部”、“lora_only”| “無”（預設）|
| `task_type` |任務類型| CAUSAL_LM、SEQ_CLS | CAUSAL_LM 用於產生 |

> **考試提示：** `r` 越高**並不總是更好**。 r=16 通常就夠了。只有當資料集很大（> 50K 樣本）且任務很複雜時，增加 r=64 才有幫助。 r=256 幾乎相當於完全微調，但速度較慢。

## 4. QLoRA — 4 位元量化 + LoRA

### 4.1。 QLoRA：三項關鍵創新

**QLoRA**（Dettmers 等人，2023）將量化與 LoRA 相結合——允許在單個 48GB GPU 上微調 65B 建模。

```text
QLoRA = 3 innovations:

1. NF4 (4-bit NormalFloat):
   ┌─────────────────────────────────────────────────┐
   │  FP16 weights → quantize → 4-bit NF4           │
   │  Dựa trên: weight distributions are ~Normal     │
   │  Optimal cho normal distribution → ít info loss  │
   │                                                  │
   │  FP16: 16 bits → NF4: 4 bits = 4× compression  │
   │  7B model: 14GB → 3.5GB                         │
   └─────────────────────────────────────────────────┘

2. Double Quantization:
   ┌─────────────────────────────────────────────────┐
   │  Quantization constants cũng được quantize!     │
   │  Mỗi block 64 weights → 1 FP32 scale (4 bytes) │
   │  Double quant: FP32 scale → FP8 (1 byte)        │
   │  Tiết kiệm thêm ~0.37 bits/param               │
   │  7B model: tiết kiệm ~3GB RAM                   │
   └─────────────────────────────────────────────────┘

3. Paged Optimizers:
   ┌─────────────────────────────────────────────────┐
   │  Optimizer states (AdamW m,v) → CPU RAM          │
   │  Khi GPU VRAM hết → page out to CPU              │
   │  Giống virtual memory của OS                     │
   │  Tránh OOM khi batch lớn hoặc sequence dài       │
   └─────────────────────────────────────────────────┘

Memory comparison (LLaMA 7B fine-tuning):
┌───────────────────┬──────────┬──────────┬──────────┐
│                   │ Full FT  │ LoRA     │ QLoRA    │
├───────────────────┼──────────┼──────────┼──────────┤
│ Model weights     │ 14 GB    │ 14 GB    │ 3.5 GB   │
│ LoRA params       │ —        │ ~50 MB   │ ~50 MB   │
│ Optimizer states  │ 28 GB    │ ~100 MB  │ ~100 MB  │
│ Gradients         │ 14 GB    │ ~50 MB   │ ~50 MB   │
│ Activations       │ ~10 GB   │ ~5 GB    │ ~5 GB    │
├───────────────────┼──────────┼──────────┼──────────┤
│ TOTAL VRAM        │ ~66 GB   │ ~19 GB   │ ~9 GB    │
│ GPU needed        │ 2×A100   │ 1×A100   │ 1×RTX4090│
└───────────────────┴──────────┴──────────┴──────────┘
```

### 4.2。 NF4、INT4、FP4

|量化類型 |精密|最適合 |資訊遺失|
|-------------------|-----------|----------|------------|
| **INT4** |統一 4 位元 |通用|中|
| **FP4** |浮點 4 位元 |離群值友善 |低於 INT4 |
| **NF4** |普通浮點 4 位元 |神經網路權重 |最低（最佳）|

NF4 的工作原理是基於觀察：**神經網路權重遵循常態分佈**。 NF4根據常態分佈的分位數劃分量化倉→每個倉包含相同數量的值→資訊損失最小。

> **關鍵見解：** 與僅使用 **~1/7 VRAM** 的完全微調 FP16 相比，QLoRA + NF4 實現了 **99.3% 的品質**。在大多數基準測試中，品質差異幾乎無法衡量。

## 5. 其他 PEFT 方法 — 前綴調優、提示調優、IA3

### 5.1。快速比較

```text
PEFT Methods Family:

┌─────────────────────────────────────────────────────┐
│                 PEFT Methods                        │
├──────────────┬──────────────┬───────────────────────┤
│  Additive    │  Reparameter.│  Selective            │
├──────────────┼──────────────┼───────────────────────┤
│ Adapter      │ LoRA         │ BitFit (bias only)    │
│ Prefix Tuning│ QLoRA        │ Freeze some layers    │
│ Prompt Tuning│ IA3          │                       │
│ (IA)3        │ DoRA         │                       │
└──────────────┴──────────────┴───────────────────────┘
```

|方法|可訓練參數|主要思想|優點 |缺點 |
|--------|-----------------|----------------|---------|-------------|
| **洛拉** | 0.1-1% |低階並行矩陣 |最佳品質/成本權衡|需要選擇等級、目標模組 |
| **QLoRA** | 0.1-1% | LoRA + 4 位元量化 |在消費級 GPU 上運行 |比 LoRA 慢約 15-20% |
| **前綴調整** | 〜0.1% |將可訓練向量添加到 K,V | 中參數很少 |質量低於LoRA |
| **及時調整** | <0.01% |可訓練的軟令牌前置 |超輕，更換方便|僅適用於 >10B 的型號 | 10B
| **IA3** | <0.01% |透過學習向量縮放 K、V、FFN |最少的參數，最快的火車 |質量低於LoRA |
| **朵拉** | 〜1-2% | LoRA+權重分解（幅度/方向） |品質 = 某些任務的全面 FT |新的，測試較少 |
| **適配器** | 1-5% |瓶頸層交替 |經過驗證的模組化 |增加延遲（新增層）|

### 5.2. Prefix Tuning vs Prompt Tuning

```text
Prompt Tuning:
  [P1 P2 P3 ... Pk] [actual input tokens] → Model → Output
   └── trainable ──┘  └── frozen ────────┘
  Soft prompts prepend trước input, chỉ train Pk vectors

Prefix Tuning:
  Mỗi layer attention nhận prefix:
  Layer 1: [prefix_K₁, prefix_V₁] + [actual K, V]
  Layer 2: [prefix_K₂, prefix_V₂] + [actual K, V]
  ...
  Trainable prefixes ở MỌI layer → expressive hơn Prompt Tuning
```

> **實用建議：** 在 95% 的情況下，您應該使用 **QLoRA**。它是品質、成本和易用性之間的最佳點。只有在您需要在同一模型（服務效率）或非常大的模型（> 100B）上交換數百個任務時才考慮提示調優。

## 6. 微調資料集準備

### 6.1。指令格式 — Alpaca 與 ShareGPT

資料集是品質微調的**最決定性的**因素。流行格式：

**羊駝格式** — 單輪指令回應：

```json
{
  "instruction": "Tóm tắt đoạn văn sau thành 3 bullet points",
  "input": "Trí tuệ nhân tạo (AI) đang thay đổi ngành y tế...",
  "output": "• AI giúp chẩn đoán chính xác hơn\n• Giảm chi phí vận hành\n• Cá nhân hóa điều trị"
}
```

**ShareGPT / 對話式格式** — 多輪：

```json
{
  "conversations": [
    {"role": "system", "content": "Bạn là trợ lý y tế chuyên nghiệp."},
    {"role": "user", "content": "Triệu chứng đau đầu kéo dài là gì?"},
    {"role": "assistant", "content": "Đau đầu kéo dài có thể do nhiều nguyên nhân..."},
    {"role": "user", "content": "Khi nào cần đi khám?"},
    {"role": "assistant", "content": "Bạn nên đi khám khi đau đầu kèm theo..."}
  ]
}
```

### 6.2。聊天模板－為什麼它很重要？

每個模型都有自己的**聊天模板**。訓練資料必須匹配基本模型模板：

```text
Mistral / LLaMA 3 Chat Template:

<s>[INST] <<SYS>>
{system_message}
<</SYS>>

{user_message_1} [/INST] {assistant_response_1} </s>
<s>[INST] {user_message_2} [/INST] {assistant_response_2} </s>

ChatML Template (Qwen, nhiều model khác):

<|im_start|>system
{system_message}<|im_end|>
<|im_start|>user
{user_message}<|im_end|>
<|im_start|>assistant
{assistant_response}<|im_end|>
```

> **警告：** 使用錯誤的聊天模板是微調時最常見的錯誤。如果訓練格式與推理格式不同，模型將產生亂碼。 **始終使用 `tokenizer.apply_chat_template()`**。

### 6.3。資料集品質檢查表

|標準|描述 |最低 |
|----------|--------|----------|
| **數量** |指令-回應對的數量 |超過 1,000 個用於特定任務 |
| **多元化** |多樣化指令 |避免複製貼上模式 |
| **品質** |答案準確且完整 |人工審核 > 人工智慧生成 |
| **長度** |輸出長度一致 |符合預期輸出長度 |
| **格式** |正確的聊天範本 |訓練前驗證 |
| **沒有重複** |重複資料刪除 |基於雜湊的重複資料刪除 |

```text
Dataset Size Guidelines:

Task specificity:        Samples needed:
┌──────────────────────┬───────────────────┐
│ Single narrow task   │ 500 - 2,000       │
│ (classify, extract)  │                   │
├──────────────────────┼───────────────────┤
│ Domain adaptation    │ 5,000 - 20,000    │
│ (medical, legal)     │                   │
├──────────────────────┼───────────────────┤
│ General assistant    │ 50,000 - 200,000  │
│ (chat, multi-task)   │                   │
├──────────────────────┼───────────────────┤
│ Pretrain-style       │ 1M+ tokens        │
│ (continued pretraining│                  │
└──────────────────────┴───────────────────┘
```

## 7. 實作：使用 QLoRA 微調 Mistral 7B

### 7.1。環境設定

```bash
# Tạo environment
conda create -n finetune python=3.11 -y
conda activate finetune

# Install core packages
pip install torch==2.3.0 --index-url https://download.pytorch.org/whl/cu121
pip install transformers==4.44.0
pip install datasets==2.20.0
pip install peft==0.12.0
pip install trl==0.9.6
pip install bitsandbytes==0.43.1
pip install accelerate==0.33.0
pip install scipy sentencepiece protobuf

# Verify CUDA
python -c "import torch; print(f'CUDA: {torch.cuda.is_available()}, Device: {torch.cuda.get_device_name(0)}')"
```

### 7.2。完整的訓練腳本

以下是完整的腳本 — 在 **單一 24GB GPU**（RTX 4090、A5000 或 A100）上執行：

```python
"""
Fine-tune Mistral 7B Instruct với QLoRA
Yêu cầu: 1× GPU 24GB VRAM, ~16GB RAM
Thời gian: ~2-4 hours cho 3 epochs trên 5K samples
"""

import torch
from datasets import load_dataset, Dataset
from transformers import (
    AutoModelForCausalLM,
    AutoTokenizer,
    BitsAndBytesConfig,
    TrainingArguments,
)
from peft import LoraConfig, get_peft_model, prepare_model_for_kbit_training
from trl import SFTTrainer

# ============================================================
# 1. Configuration
# ============================================================
MODEL_NAME = "mistralai/Mistral-7B-Instruct-v0.3"
OUTPUT_DIR = "./mistral-7b-finetuned"
MAX_SEQ_LENGTH = 2048

# LoRA Config
LORA_R = 16              # Rank — 16 là sweet spot
LORA_ALPHA = 32          # Scaling factor = 2 * r
LORA_DROPOUT = 0.05      # Nhẹ dropout chống overfitting
TARGET_MODULES = [        # Apply LoRA vào attention + MLP
    "q_proj", "k_proj", "v_proj", "o_proj",
    "gate_proj", "up_proj", "down_proj",
]

# Training Config
NUM_EPOCHS = 3
BATCH_SIZE = 4
GRADIENT_ACCUMULATION = 4  # Effective batch = 4 × 4 = 16
LEARNING_RATE = 2e-4
WARMUP_RATIO = 0.03
WEIGHT_DECAY = 0.001

# ============================================================
# 2. Load Model với 4-bit Quantization (QLoRA)
# ============================================================
bnb_config = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_quant_type="nf4",          # NormalFloat4 — optimal
    bnb_4bit_compute_dtype=torch.bfloat16,  # Compute in BF16
    bnb_4bit_use_double_quant=True,     # Double quantization
)

print("Loading model in 4-bit...")
model = AutoModelForCausalLM.from_pretrained(
    MODEL_NAME,
    quantization_config=bnb_config,
    device_map="auto",             # Auto distribute across GPUs
    attn_implementation="flash_attention_2",  # Flash Attention 2
    torch_dtype=torch.bfloat16,
)
model.config.use_cache = False     # Disable KV cache for training
model.config.pretraining_tp = 1

tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)
tokenizer.pad_token = tokenizer.eos_token
tokenizer.padding_side = "right"   # Phải padding right cho causal LM

# Prepare model cho k-bit training
model = prepare_model_for_kbit_training(model)

# ============================================================
# 3. Configure LoRA
# ============================================================
lora_config = LoraConfig(
    r=LORA_R,
    lora_alpha=LORA_ALPHA,
    lora_dropout=LORA_DROPOUT,
    target_modules=TARGET_MODULES,
    bias="none",
    task_type="CAUSAL_LM",
)

model = get_peft_model(model, lora_config)
model.print_trainable_parameters()
# Output: trainable params: 21,299,200 || all params: 7,262,928,896
#         || trainable: 0.293%

# ============================================================
# 4. Prepare Dataset
# ============================================================
def format_instruction(sample):
    """Format sample thành Mistral chat template."""
    messages = [
        {"role": "user", "content": sample["instruction"]},
        {"role": "assistant", "content": sample["output"]},
    ]
    # Dùng apply_chat_template để format đúng
    text = tokenizer.apply_chat_template(
        messages,
        tokenize=False,
        add_generation_prompt=False,
    )
    return {"text": text}

# Load dataset — thay bằng dataset của bạn
# Ví dụ: dataset medical QA tiếng Việt
dataset = load_dataset("json", data_files="./data/medical_qa_vi.json")

# Nếu chưa có dataset, tạo demo dataset
demo_data = [
    {
        "instruction": "Triệu chứng COVID-19 phổ biến nhất là gì?",
        "output": "Các triệu chứng phổ biến nhất của COVID-19 bao gồm: sốt, ho khan, mệt mỏi, đau họng, đau cơ, và mất vị giác/khứu giác. Triệu chứng nặng gồm khó thở, đau ngực, và lú lẫn.",
    },
    {
        "instruction": "Phân biệt viêm phổi do vi khuẩn và virus",
        "output": "Viêm phổi vi khuẩn: sốt cao đột ngột, đờm vàng/xanh, bạch cầu tăng, đáp ứng kháng sinh. Viêm phổi virus: sốt nhẹ từ từ, ho khan, bạch cầu bình thường/giảm, không đáp ứng kháng sinh.",
    },
]
# Trong thực tế, cần 1000+ samples
dataset = Dataset.from_list(demo_data)
dataset = dataset.map(format_instruction)

# Split train/eval (90/10)
dataset = dataset.train_test_split(test_size=0.1, seed=42)

# ============================================================
# 5. Training Arguments
# ============================================================
training_args = TrainingArguments(
    output_dir=OUTPUT_DIR,
    num_train_epochs=NUM_EPOCHS,
    per_device_train_batch_size=BATCH_SIZE,
    per_device_eval_batch_size=BATCH_SIZE,
    gradient_accumulation_steps=GRADIENT_ACCUMULATION,
    gradient_checkpointing=True,        # Tiết kiệm VRAM
    optim="paged_adamw_32bit",          # Paged optimizer (QLoRA)
    learning_rate=LEARNING_RATE,
    lr_scheduler_type="cosine",
    warmup_ratio=WARMUP_RATIO,
    weight_decay=WEIGHT_DECAY,
    max_grad_norm=0.3,                  # Gradient clipping
    fp16=False,
    bf16=True,                          # BFloat16 training
    logging_steps=10,
    eval_strategy="steps",
    eval_steps=50,
    save_strategy="steps",
    save_steps=100,
    save_total_limit=3,                 # Keep last 3 checkpoints
    load_best_model_at_end=True,
    metric_for_best_model="eval_loss",
    report_to="tensorboard",            # Hoặc "wandb"
    seed=42,
)

# ============================================================
# 6. Initialize Trainer & Train
# ============================================================
trainer = SFTTrainer(
    model=model,
    args=training_args,
    train_dataset=dataset["train"],
    eval_dataset=dataset["test"],
    tokenizer=tokenizer,
    dataset_text_field="text",          # Column chứa formatted text
    max_seq_length=MAX_SEQ_LENGTH,
    packing=True,                       # Pack ngắn samples → 1 sequence
)

print("Starting training...")
trainer.train()

# Save final adapter
trainer.save_model(f"{OUTPUT_DIR}/final")
tokenizer.save_pretrained(f"{OUTPUT_DIR}/final")
print(f"Training complete! Adapter saved to {OUTPUT_DIR}/final")
```

### 7.3。使用微調模型進行推理

```python
"""Test model sau fine-tuning."""
from peft import PeftModel
from transformers import AutoModelForCausalLM, AutoTokenizer
import torch

# Load base model + adapter
base_model = AutoModelForCausalLM.from_pretrained(
    "mistralai/Mistral-7B-Instruct-v0.3",
    torch_dtype=torch.bfloat16,
    device_map="auto",
    load_in_4bit=True,
)
model = PeftModel.from_pretrained(base_model, "./mistral-7b-finetuned/final")
tokenizer = AutoTokenizer.from_pretrained("./mistral-7b-finetuned/final")

# Generate
messages = [
    {"role": "user", "content": "Triệu chứng sốt xuất huyết và cách xử lý?"}
]
input_ids = tokenizer.apply_chat_template(
    messages, return_tensors="pt", add_generation_prompt=True
).to(model.device)

outputs = model.generate(
    input_ids,
    max_new_tokens=512,
    temperature=0.7,
    top_p=0.9,
    do_sample=True,
    repetition_penalty=1.1,
)

response = tokenizer.decode(outputs[0][input_ids.shape[-1]:], skip_special_tokens=True)
print(response)
```

## 8. 訓練監控－損失曲線與常見問題

### 8.1。指標需要追蹤

```text
Healthy Training Curves:

Loss                     Learning Rate
│                        │
│╲                       │    ╱‾‾‾‾‾‾╲
│  ╲                     │   ╱ warmup  ╲
│    ╲___                │  ╱           ╲
│        ╲___            │ ╱    cosine   ╲
│            ╲____       │╱    decay      ╲
│                 ╲___   │                 ╲
├──────────────────────  ├──────────────────────
0   steps         end    0   steps         end

Training loss: giảm smooth, cuối ổn định
Eval loss:     giảm theo train loss, KHÔNG tăng ngược lại
```

|問題 |標誌|解決方案 |
|--------|------------|----------|
| **過度擬合** |評估損失增加，列車損失減少 |減少 epoch、增加 dropout、添加數據 |
| **欠擬合** |兩者損失都很高，既沒有減少|增加r/rank，增加學習率，添加target_modules |
| **災難性遺忘** |模型忘記常識 |減少LR，減少epochs，使用PEFT代替full FT |
| **損失高峰** |虧損驟增|減少 LR、增加預熱、檢查資料品質 |
| **NaN 損失** |損失 = NaN |用BF16代替FP16，減少LR，查數據 |
| **收斂緩慢** |損失減少得非常緩慢|增加LR，檢查資料格式，檢查聊天範本 |

### 8.2。評估微調模型的質量

```python
"""Simple evaluation script."""
import json

# Test samples (không nằm trong training data)
test_prompts = [
    "Phân biệt tiểu đường type 1 và type 2",
    "Khi nào cần xét nghiệm máu?",
    "Tác dụng phụ phổ biến của kháng sinh là gì?",
]

results = []
for prompt in test_prompts:
    messages = [{"role": "user", "content": prompt}]
    input_ids = tokenizer.apply_chat_template(
        messages, return_tensors="pt", add_generation_prompt=True
    ).to(model.device)
    
    outputs = model.generate(input_ids, max_new_tokens=256, temperature=0.1)
    response = tokenizer.decode(
        outputs[0][input_ids.shape[-1]:], skip_special_tokens=True
    )
    results.append({"prompt": prompt, "response": response})
    print(f"Q: {prompt}")
    print(f"A: {response}\n{'='*60}")

# Save results cho human review
with open("eval_results.json", "w", encoding="utf-8") as f:
    json.dump(results, f, ensure_ascii=False, indent=2)
```

> **最佳實務：** 不要只依賴損失。 **對 50-100 個樣本進行人工評估**是黃金標準。建立評分標準：準確性、相關性、格式遵循性，然後評分 1-5。

## 9. 合併適配器和部署

### 9.1。將 LoRA 合併到基礎模型中

部署時，您有 2 個選擇：
- **單獨儲存適配器**：基本模型 + 小型適配器檔案 (~50-100MB)。靈活，可互換。
- **合併**：將適配器合併到模型→單一模型檔案中。推理速度更快。

```python
"""Merge LoRA adapter vào base model và push lên HF Hub."""
from peft import PeftModel
from transformers import AutoModelForCausalLM, AutoTokenizer
import torch

# Load base model (KHÔNG quantize — phải full precision để merge)
base_model = AutoModelForCausalLM.from_pretrained(
    "mistralai/Mistral-7B-Instruct-v0.3",
    torch_dtype=torch.bfloat16,
    device_map="auto",
)

# Load adapter
model = PeftModel.from_pretrained(base_model, "./mistral-7b-finetuned/final")

# Merge adapter vào base model
print("Merging adapter into base model...")
merged_model = model.merge_and_unload()

# Save merged model
MERGED_DIR = "./mistral-7b-medical-merged"
merged_model.save_pretrained(MERGED_DIR)
tokenizer = AutoTokenizer.from_pretrained("./mistral-7b-finetuned/final")
tokenizer.save_pretrained(MERGED_DIR)

# Push to Hugging Face Hub (optional)
# merged_model.push_to_hub("your-username/mistral-7b-medical-vi")
# tokenizer.push_to_hub("your-username/mistral-7b-medical-vi")

print(f"Merged model saved to {MERGED_DIR}")
```

### 9.2。合併後的部署選項

```text
Deployment Pipeline:

Fine-tuned Adapter
       │
       ├──▶ Option A: Serve riêng adapter
       │    ├── vLLM: --lora-modules adapter_name=./adapter_path
       │    ├── Ollama: tạo Modelfile FROM base + ADAPTER
       │    └── Ưu điểm: swap adapters runtime, multi-tenant
       │
       └──▶ Option B: Merge → Single model
            ├── merge_and_unload() → GGUF (llama.cpp)
            ├── merge → Quantize (GPTQ/AWQ) → vLLM
            └── Ưu điểm: faster inference, simpler deploy
```

## 10. DPO/ORPO — 基於偏好的培訓

### 10.1。超越 SFT——與人類偏好保持一致

**監督微調 (SFT)** 教授 ANSWER 模型。但不要教模型區分好的反應和壞的反應。這就是需要**對齊**的時候。

```text
Training Pipeline:

Pretrained Model
       │
       ▼
┌──────────────┐
│     SFT      │◄── Instruction dataset (instruction → response)
│ (Bài này)    │    Dạy model follow instructions
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  RLHF / DPO  │◄── Preference dataset (chosen vs rejected)
│  / ORPO      │    Dạy model chọn response TỐT hơn
└──────┬───────┘
       │
       ▼
  Aligned Model (helpful, harmless, honest)
```

|方法|所需資料|優點 |缺點 |
|--------|--------|---------|-------------|
| **RLHF** |偏好對+獎勵模型 |黃金標準（ChatGPT）|複雜、不穩定、需要獎勵模型 |
| **DPO** |只偏好對 |穩定、簡單、無獎勵模式 |先需要SFT，對資料敏感 |
| **ORPO** |僅偏好對 |單級（SFT+同時對準）|更新、驗證較少 |
| **韓國貿易組織** |只是豎起大拇指/豎起大拇指|最容易收集數據 |品質低於DPO |

**DPO（直接偏好優化）**資料集格式：

```json
{
  "prompt": "Giải thích machine learning cho người mới",
  "chosen": "Machine learning là phương pháp giúp máy tính tự học từ dữ liệu mà không cần lập trình cụ thể. Ví dụ: email spam filter học phân loại từ hàng ngàn email...",
  "rejected": "ML là AI subfield dùng statistical methods để tối ưu loss function trên hypothesis space H với VC dimension hữu hạn qua ERM principle..."
}
```

> **實用說明：**對於大多數用例，**SFT 已經足夠好了**。僅當模型品質不一致或需要嚴格對齊（安全、色調）時才需要 DPO/ORPO。 DPO 增加了 1 個訓練階段，但顯著提高了一致性。

## 11. 微調成本估算

### 11.1。 GPU 小時數和雲端定價

```text
Cost Estimation Formula:

Training time ≈ (num_samples × num_epochs × seq_length) / 
                (tokens_per_second × batch_size)

Ví dụ: 10K samples, 3 epochs, avg 512 tokens:
  Total tokens = 10,000 × 3 × 512 = 15,360,000 tokens
  QLoRA speed ≈ 3,000 tokens/sec (A100) hoặc 1,500 tokens/sec (4090)
  A100: 15.36M / 3,000 = 5,120 sec ≈ 1.4 hours
  4090: 15.36M / 1,500 = 10,240 sec ≈ 2.8 hours
```

|雲端提供者|圖形處理器 |顯存 |價格/小時（按需）| QLoRA 7B（10K 樣本）|
|----------------|-----|--------|------------------------|------------------------|
| **拉姆達實驗室** | A100 80GB | 80GB| ~$1.10/小時 | 〜$1.50 |
| **運行Pod** | A100 80GB | 80GB| ~$1.64/小時 | ~$2.30 |
| **運行Pod** | RTX 4090 | 24GB| ~$0.44/小時 | 〜1.20 美元 |
| **AWS** | p4d（A100）| 80GB| ~$3.80/小時 | ~$5.30 |
| **Google雲端** | A100 | 80GB| ~$3.67/小時 | ~$5.10 |
| **Vast.ai** | RTX 4090 | 24GB| ~$0.30/小時 | ~$0.85 |
| **Google Colab** | T4/A100 | 15-40GB|免費 - 10 美元/月 |免費（T4，慢速）|

### 11.2。成本比較：微調與 API

```text
Scenario: Medical QA chatbot, 1000 queries/day, avg 500 tokens response

Option A — GPT-4o API:
  1000 queries × (200 input + 500 output) tokens/query
  Input:  200K tokens/day × $2.50/1M = $0.50/day
  Output: 500K tokens/day × $10/1M  = $5.00/day
  Monthly: $165/month

Option B — Fine-tuned Mistral 7B (self-hosted):
  Training: ~$5 one-time (QLoRA trên RunPod)
  Serving: RTX 4090 instance ~$0.44/hr × 24hr = $10.56/day
  Monthly: $320/month (dedicated) hoặc $50/month (spot/shared)

Option C — Fine-tuned + quantized (GGUF Q4):
  Serving trên CPU/small GPU: ~$50-100/month VPS
  Monthly: $50-100/month
  
Break-even analysis:
  GPT-4o rẻ hơn nếu < 500 queries/day
  Self-host rẻ hơn nếu > 2000 queries/day hoặc cần privacy
```

> **實用建議：** 從 API (GPT-4o / Claude) 開始驗證想法。當量 > 2000 個查詢/天或需要資料隱私時 → 微調 + 自託管。 QLoRA 培訓成本幾乎可以忽略不計（<$10 cho 7B model).

## 12. Cheat Sheet — Quick Reference

```text
┌──────────────────────────────────────────────────────────┐
│          FINE-TUNING LLMs — CHEAT SHEET                 │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  KTHND fine-tune?                                        │
│  ✓ Behavior thay đổi (style, format, domain)            │
│  ✗ Knowledge mới → dùng RAG                             │
│                                                          │
│  Method: QLoRA (99% trường hợp)                         │
│  ├── r=16-32, alpha=2×r, dropout=0.05                   │
│  ├── target_modules="all" (attention + MLP)             │
│  ├── bnb: nf4 + double_quant + bf16_compute             │
│  └── paged_adamw_32bit optimizer                        │
│                                                          │
│  Dataset:                                                │
│  ├── Format: Alpaca (single-turn) / ShareGPT (multi)    │
│  ├── PHẢI match chat_template của base model            │
│  ├── Min 1000 samples cho narrow task                   │
│  └── Quality > 數量（始終） │
│ │
│ 訓練參數： │
│ ├── LR: 2e-4 (QLoRA 預設) │
│ ├── 紀元：1-3（資料少=3，資料多=1）│
│ ├── 批次：4-16（有效，採用等級累積） │
│ ├──gradient_checkpointing=True │
│ └── bf16=真, fp16=假 │
│ │
│ 部署： │
│ ├── merge_and_unload() → 單一模型 │
│ ├── 量化（GGUF/GPTQ）→服務vLLM/Ollama │
│ └── 或直接服務適配器（多租戶）│
│ │
│ 調試： │
│ ├── NaN損失→檢查FP16/BF16，減少LR │
│ ├── Eval損失增加→過度擬合，減少epochs │
│ ├── 亂碼輸出 → 錯誤的聊天範本 │
│ └── 災難性遺忘→減少LR，減少epochs │
│ │
└────────────────────────────────────────────────────────────┘
```

＃＃ 概括

本文涵蓋了 LLM 的整個流程微調：

1. **為什麼要微調**：當提示和 RAG 還不夠時－需要改變行為，而不僅僅是改變知識
2. **全 FT 與 PEFT**：PEFT (LoRA/QLoRA) 以 1/10 的成本實現 95% 以上的品質 — 始終是預設選擇
3. **LoRA**：低秩分解－訓練0.1-0.3%參數，近乎滿調的微調效率
4. **QLoRA**：4 位元量化 (NF4) + LoRA — 在單一 24GB GPU 上微調 7B 模型
5. **PEFT Zoo**：前綴調優、提示調優、IA3 — 小眾用例，QLoRA 仍然是王道
6. **資料集**：聊天範本的正確格式是最重要的。質 > 數量
7. **動手**：使用 SFTTrainer + QLoRA 完整程式碼微調 Mistral 7B
8. **監控**：損失曲線、評估指標、常見問題和解決方案
9. **合併與部署**：merge_and_unload，推送到 Hub，與 vLLM/Ollama 一起服務
10. **DPO/ORPO**：SFT 之後對齊 — 在需要一致的品質時使用
11. **成本**：7B 模型的 QLoRA 培訓 < 10 美元。當每天 > 2000 個查詢時，自託管比 API 便宜

**下一篇文章**將介紹**RAG（檢索增強生成）** - 一種無需微調即可為模型添加知識的技術。

＃＃ 鍛煉

### 練習 1：QLoRA 微調（練習）

1. 為您選擇的領域（程式碼審查、客戶支援、醫療 QA...）建立 200 個指令-回應對的資料集
2. Format dataset theo Alpaca format, validate chat template
3.微調Mistral 7B（或LLaMA 3 8B）使用課程中的腳本
4. 比較 20 個測試提示微調前後的輸出
5.嘗試改變 `r` （8 vs 16 vs 32）並比較質量+訓練時間

### 練習 2：LoRA 超參數掃描（分析）

使用超參數運行網格搜尋：

| Experiment | r | alpha | target_modules | Expect |
|-----------|---|-------|---------------|--------|
| Baseline | 16 | 32 | q_proj, v_proj | — |
| Low rank | 4 | 8 | q_proj, v_proj | Faster, lower quality? |
| High rank | 64 | 128 | q_proj, v_proj | Better quality? |
| All linear | 16 | 32 | all | Best quality? |

比較：訓練時間、評估損失、對 50 個樣本的人工評估。

### 練習 3：合併與部署（端對端）

1. 將適配器合併到使用的基礎模型中 `merge_and_unload()`
2. 轉換為GGUF格式（使用 `駱駝.cpp/convert.py`)
3. Quantize GGUF sang Q4_K_M
4. 與 Ollama 一起服務：建立模型檔案並 `烏拉馬創建我的模型`
5. 基準：與適配器推理相比的延遲、吞吐量（令牌/秒）、質量

### 練習 4：DPO 訓練（進階）

1. 根據練習 1 中的 SFT 模型，建立 100 個偏好對（選擇/拒絕）
2.使用DPO微調添加 `TRL 的 DPOTrainer`
3. 在同一測試集上比較僅 SFT 與 SFT+DPO
4. 評估：一致性、安全性、格式遵循性

