---
id: 019e0a01-bb05-7001-c001-ee0500000001
title: 第 5 課：LLM 深入研究 — LLaMA、Mistral、Qwen、Phi
slug: bai-5-llm-deep-dive-llama-mistral-qwen-phi
description: >-
  開源LLM的詳細比較：LLaMA 3、Mistral、Qwen 2.5、Phi-3/4。架構差異、基準、用例。使用 Ollama、vLLM
  在本地運行。商業型號：GPT-4、Claude、Gemini。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 4
section_title: 第 2 部分：NLP 和大型語言模型 (LLM)
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: AI代理工程師：從零到生產
  slug: ai-agent-engineer-tu-zero-den-production
locale: zh-tw
---

> **2023 年，LLaMA 洩漏導致開源 AI 爆炸。到 2025 年，您可以在筆記型電腦上運行 70B 型號。 ** Meta、Mistral、阿里巴巴、微軟之間的競爭徹底改變了格局。本文深入探討了架構、基準測試以及如何**實際運行**這些模型 - 來自 `ollama run` 透過 vLLM 進入生產服務。

## 1. 景觀法學碩士 2024-2026 — 開源與商業

```text
LLM Evolution Timeline:

2023 Q1         2023 Q3          2024 Q1-Q2        2024 Q3-2025      2025-2026
┌─────────┐   ┌──────────────┐  ┌──────────────┐  ┌─────────────┐  ┌─────────────┐
│ LLaMA 1 │──▶│ LLaMA 2      │─▶│ LLaMA 3      │─▶│ LLaMA 3.1-  │─▶│ LLaMA 4     │
│ GPT-4   │   │ Mistral 7B   │  │ Mixtral 8x22B│  │ 3.3, Qwen2.5│  │ Qwen 3      │
│ (leaked)│   │ Qwen 1,Phi-2 │  │ Phi-3,Claude3│  │ Mistral Lg  │  │ Phi-4       │
└─────────┘   └──────────────┘  └──────────────┘  └─────────────┘  └─────────────┘
GPT-4 chỉ     Open-source       Gap thu hẹp       Open ≈ Closed    Open dẫn đầu
qua API        bùng nổ          coding, math      nhiều task        nhiều benchmark
```

|標準|公開重量 |閉源 |
|----------|-------------|----------------|
| **代表** | LLaMA、米斯特拉爾、Qwen、Phi | GPT-4o、克勞德 4、雙子座 2 |
| **成本** |基礎設施成本，無每代幣費用 |按代幣付費 |
| **客製化** |微調、合併、量化 |限量（系統提示，RAG）|
| **隱私** |資料保留在本地透過 API 發送的資料 |
| **最適合** |生產是自主的、特定領域的 |快速原型，SOTA 品質 |

### 1.1。術語需要區分

- **開源**：程式碼 + 權重 + 訓練資料（罕見 - 僅 OLMo、BLOOM）
- **Open-weight**：釋放權重，無訓練資料（LLaMA、Mistral、Qwen）
- **開放存取**：透過 API 免費使用，但不下載權重
- **專有**：無 — 僅 API（GPT-4，Claude）

## 2. 架構模式 — 僅解碼器、MoE、GQA、RoPE、SWA

### 2.1。僅解碼器 + GQA

```text
Decoder-Only (GPT, LLaMA, Mistral):

Input tokens → Embeddings + RoPE
        │
        ▼
┌───────────────────────────────────────┐
│  Masked Self-Attention (causal)  │◄─ Chỉ nhìn tokens TRƯỚC
├───────────────────────────────────────┤
│  Feed-Forward (SwiGLU)           │
├───────────────────────────────────────┤
│  RMSNorm (pre-norm)              │
└───────────────────────────────────────┘
        │  × N layers (32-80)
        ▼
  Linear → Softmax → Next token

Grouped-Query Attention (GQA) — giảm KV cache:

MHA (cũ):        GQA (LLaMA 3):       MQA:
Q1 Q2 Q3 Q4      Q1 Q2 | Q3 Q4        Q1 Q2 Q3 Q4
│  │  │  │         \ | /   \ | /         \ |  | /
K1 K2 K3 K4        K1,2    K3,4           K_shared
V1 V2 V3 V4        V1,2    V3,4           V_shared
KV cache: 4×d     KV cache: 2×d         KV cache: 1×d
```

> **關鍵見解：** GQA 將快取 KV 降低了 4-8 倍，但品質幾乎沒有變化 - 這就是模型 70B 可以在消費級 GPU 上運行的原因。

### 2.2。旋轉位置嵌入 (RoPE)

**RoPE** 透過在複空間中旋轉向量來編碼位置。優點：自然的相對位置，容易擴展上下文長度。用於 LLaMA、Mistral、Qwen — 是所有現代 LLM 的標準位置編碼。

### 2.3。滑動視窗注意力 (SWA) 和 MoE

```text
SWA (Mistral): mỗi layer attend W tokens gần nhất
  Layer 1: window = 4096 → mỗi token "thấy" 4K tokens
  Layer N: effective range = N × W = 32 × 4096 = 131K tokens!
  Memory: O(n×w) thay vì O(n²) — tiết kiệm VRAM lớn

MoE (Mixtral 8×7B): sparse — chỉ activate 2/8 experts mỗi token
  Input → Router (gating) → top-2 experts → weighted sum
  Total params: 47B | Active: ~13B/token
  Speed ≈ 13B dense | Quality ≈ 70B dense
```

|圖案|用於 |好處 |
|--------|------------|---------|
| **GQA** | LLaMA 3，米斯特拉爾 |快取KV降低4-8× |
| **繩索** |大多數法學碩士 |擴展上下文很容易 |
| **SWA** |米斯特拉爾 7B | O(n×w) 記憶體 |
| **教育部** |混合，Qwen-MoE |快速推理、可擴展 |
| **SwiGLU** |美洲駝，米斯特拉爾 |比 ReLU 更好的激活 |

## 3. LLaMA 系列（元）－開源支柱

```text
LLaMA 1 (Feb'23)      LLaMA 2 (Jul'23)      LLaMA 3 (Apr'24)
├─ 7B-65B              ├─ 7B, 13B, 70B       ├─ 8B, 70B (15T tokens!)
├─ Research only       ├─ Commercial license  ├─ GQA, RoPE, 128K vocab
└─ Leaked → bùng nổ   └─ RLHF, 4K ctx       └─ 128K ctx (3.1), tool use

LLaMA 3.2 (Sep'24): 1B/3B (edge) + 11B/90B (vision!)
LLaMA 3.3 (Dec'24): 70B cải thiện multilingual, instruction following
```

|特色|駱駝 3 8B |駱駝 3 70B |駱駝 3.1 405B |
|--------|---------|-------------|----------------|
|層 | 32 | 32 80| 126 | 126
|隱匿昏暗| 4096 | 8192 | 16384 |
| KV 頭 (GQA) | 8 | 8 | 16 | 16
|背景 | 8K→128K | 8K→128K | 128K |
|培訓代幣| 15T+ | 15T+ | 15T+ |

**為什麼 LLaMA 很重要？ ** 最大的開源人工智慧生態系統。大多數微調模型都基於 LLaMA 基礎：Alpaca (Stanford)、Vicuna (LMSYS)、CodeLlama、Llama-Guard（安全）、WizardLM。主要創新：RMSNorm（預範數）、SwiGLU 活化、RoPE、GQA、128K 詞彙。許可證：Llama Community — 在 700M MAU 下免費。

## 4. Mistral 系列 — 效率為王

Mistral AI（法國新創公司，前 DeepMind/Meta）－理念：**小模型，大性能**。

|型號|尺寸|類型 |背景 |亮點|
|--------|--------|--------|---------|------------|
|米斯特拉爾 7B | 7B|密集| 32K | SWA，擊敗 LLaMA 2 13B |
|混合8×7B | 47B（13B 活動）|教育部 | 32K |教育部首次開放 |
|混合8×22B | 141B（39B 活動）|教育部 | 64K |最強開放萌系|
|米斯特拉爾大| 〜120B |密集| 128K |接近 GPT-4 |
|共紋 | 22B | 22B密集| 32K |代碼專業|

**Mistral 7B 創新：** SWA（視窗 = 4096）+ GQA（8 KV 磁頭）+ 滾動緩衝區快取（固定內存，無增長）+ 預填充分塊 → 7B 模型在大多數基準測試中超越了 LLaMA 2 13B。混合8×7B證明MoE實用：速度13B密，質量近70B密。

## 5. Qwen Family（阿里巴巴）－多國語言冠軍

Qwen 2.5（2024 年 9 月）連續在 Open LLM 排行榜上名列前茅——尤其是強大的多語言（29 種以上語言、中日韓、越南語）。

|特點|詳情 |
|--------|--------|
|尺寸 | 0.5B → 72B（兩種 MoE 變體）|
|培訓| 18T 代幣，策劃多語言 |
|背景 | 128K 原生（紗繩）|
|編碼 | Qwen2.5-Coder — 頂級開放式編碼模型 |
|許可證| **Apache 2.0**（最廣泛）|
|工具使用|原生函數調用，JSON模式|

**QwQ** (32B) — OpenAI o1 風格推理模型，但開放權重。在回答之前“思考”許多步驟，尤其是數學/代碼。模型會問自己問題，驗證每個步驟，然後輸出最終結果。

```text
QwQ reasoning flow:
  Prompt: "Sum of primes < 20?"
  → "Let me think step by step..."
  → "Primes: 2, 3, 5, 7, 11, 13, 17, 19"
  → "Wait, is 9 prime? 9 = 3×3, no."
  → "Sum = 2+3+5+7+11+13+17+19 = 77"
  → "The answer is 77."
  
  Self-verification → fewer errors on complex tasks
```

## 6. Phi Family（微軟）－小模型，大效能

理念：**資料品質 > 模型大小** - 在「教科書品質」+合成資料上進行訓練。

```text
Phi Philosophy:  Web crawl (noisy) × Massive scale → okay model
                 vs
                 Curated data × Modest scale → GREAT model
```

|型號|尺寸|背景 | MMLU |亮點|
|--------|--------|---------|--------|-----------|
| Φ2 | 2.7B | 2.7B 2K | 56.7 | 56.7擊敗一些 7B 型號 |
| Phi-3 迷你 | 3.8B| 128K | 68.8 |裝置上的擴充 ctx |
| Phi-3 中 | 14B | 14B 128K | 78.0 | 78.0接近GPT-3.5 |
| Phi-3.5 教育部 | 42B（6.6B 活動）| 128K | 78.9 | 78.9稀疏教育部 |
| **Phi-4** | **14B** | 16K | **81.4** | **14B 與 70B 競爭！ ** |

Phi-4 在推理任務上取得了 MMLU 81.4、MATH 80.4、HumanEval 82.6 的成績，相當於 LLaMA 3.1 70B。秘密：**合成數據生成管道**從較大的法學碩士創建高品質的訓練數據，在訓練前進行過濾和驗證。

## 7. 商業模式 — GPT-4o、Claude、Gemini

|型號|背景 |優勢 |定價（1M tok）|
|--------|---------|------------|--------------------|
| GPT-4o | 128K |通用、快速 | $2.5 入 / $10 出 |
| GPT-4o-迷你 | 128K |預算友好 | 0.15 美元/0.60 美元 |
| o1 / o3 | 20萬|深度推理| 15 美元/60 美元 |
|克勞德 3.5 十四行詩 | 20萬|編碼、分析 | $3 / $15 |
|克勞德 4 作品 | 20萬|代理商、工具使用| 15 美元 / 75 美元 |
|雙子座2閃光| 1M |速度，龐大的背景 | $0.075 / $0.30 |
|雙子座 2 Pro | 2M |長上下文王| 1.25 美元/10 美元 |

## 8. 大型基準表

|型號| MMLU |人類評估| GSM8K |競技場 ELO |
|--------|--------|------------|--------|-----------|
| GPT-4o | 88.7 | 88.7 90.2 | 90.2 97.8 | 97.8 1285 | 1285
|克勞德 4 作品 | 88.1 | 88.1 92.0 | 92.0 96.5 | 96.5 1290 | 1290
|雙子座 2 Pro | 87.5 | 87.5 85.0 | 85.0 96.0 | 1270 | 1270
|駱駝 3.1 405B | 85.2 | 85.2 89.0 | 96.8 | 96.8 1210 | 1210
|啟文2.5 72B | 83.1 | 83.1 86.4 | 86.4 95.8 | 95.8 1190 | 1190
| Phi-4 (14B) | 81.4 | 81.4 82.6 | 82.6 95.3 | 95.3 1150 | 1150
|駱駝 3.3 70B | 82.0 | 84.5 | 84.5 95.1 | 95.1 1180 | 1180
|米斯特拉爾大| 81.2 | 81.2 82.0 | 93.0 | 1160 | 1160
| Phi-3 迷你 (3.8B) | 68.8 | 58.5 | 58.5 82.5 | 82.5 1010 | 1010

基準說明：**MMLU**=知識57科，**HumanEval**=Python程式碼基因，**GSM8K**=數學推理，**Arena ELO**=真實人類偏好（最可靠）。

> **注意：** 基準測試可以「玩弄」－訓練資料污染、特定於基準測試的調整。真實使用者的 Arena ELO 是最可靠的。

## 9. 執行 LLM 本地 — Ollama、vLLM、llama.cpp

最重要的部分：**動手**。您將學習如何在您的電腦上運行法學碩士。

### 9.1。 Ollama — 5 分鐘設置

```bash
# Install
curl -fsSL https://ollama.com/install.sh | sh  # Linux
brew install ollama                              # macOS

# Chạy models
ollama run llama3.1          # LLaMA 3.1 8B (~4.7GB)
ollama run mistral           # Mistral 7B
ollama run qwen2.5           # Qwen 2.5 7B
ollama run phi4              # Phi-4 14B (~8GB)
ollama run qwen2.5-coder     # Coding optimized
ollama run llama3.1:70b      # 70B — cần ~40GB VRAM
```

### 9.2。 Ollama API — 相容 OpenAI

```python
from openai import OpenAI

# Ollama chạy OpenAI-compatible API tại localhost:11434
client = OpenAI(
    base_url="http://localhost:11434/v1",
    api_key="ollama",  # Không cần real key
)

response = client.chat.completions.create(
    model="llama3.1",
    messages=[
        {"role": "system", "content": "Trả lời ngắn gọn bằng tiếng Việt."},
        {"role": "user", "content": "GQA là gì trong Transformer?"},
    ],
    temperature=0.7,
)
print(response.choices[0].message.content)
```

### 9.3。 vLLM：生產服務

**vLLM**（加州大學柏克萊分校）是最快的推理引擎 - 使用 **PagedAttention** 進行高效的 KV 快取管理，支援連續批次處理。

```bash
pip install vllm

# Serve với OpenAI-compatible API
python -m vllm.entrypoints.openai.api_server \
    --model meta-llama/Llama-3.1-8B-Instruct \
    --port 8000 \
    --gpu-memory-utilization 0.9
```

```python
# Gọi vLLM — same OpenAI format
client = OpenAI(base_url="http://localhost:8000/v1", api_key="dummy")
response = client.chat.completions.create(
    model="meta-llama/Llama-3.1-8B-Instruct",
    messages=[{"role": "user", "content": "Hello!"}],
)
```

### 9.4。 llama.cpp — CPU 推理和 GGUF

**llama.cpp** (Georgi Gerganov) 允許在純 CPU 或混合 CPU/GPU 上運行 LLM。格式 **GGUF** 是量化模型的標準。

```bash
brew install llama.cpp  # macOS

# Download GGUF model từ Hugging Face
huggingface-cli download \
  bartowski/Meta-Llama-3.1-8B-Instruct-GGUF \
  Meta-Llama-3.1-8B-Instruct-Q4_K_M.gguf \
  --local-dir ./models/

# Chạy interactive chat
llama-cli -m ./models/Meta-Llama-3.1-8B-Instruct-Q4_K_M.gguf \
  -c 4096 --chat-template llama3 -i
```

### 9.5。擁抱變形金剛臉

```python
from transformers import AutoModelForCausalLM, AutoTokenizer
import torch

model_name = "microsoft/Phi-4"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(
    model_name, torch_dtype=torch.bfloat16, device_map="auto",
)

messages = [{"role": "user", "content": "Explain MoE briefly."}]
inputs = tokenizer.apply_chat_template(
    messages, return_tensors="pt", add_generation_prompt=True
).to(model.device)
outputs = model.generate(inputs, max_new_tokens=300, temperature=0.7, do_sample=True)
print(tokenizer.decode(outputs[0][inputs.shape[1]:], skip_special_tokens=True))
```

### 9.6。比較工具

|工具|最適合 |速度|輕鬆|圖形處理器？ |
|--------|---------|--------|--------|--------|
| **奧拉馬** |開發、實驗 |好 | ⭐⭐⭐⭐⭐ |可選|
| **vLLM** |生產服務| ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |是的 |
| **駱駝.cpp** | CPU/邊緣 |好 | ⭐⭐⭐ |可選|
| **變形金剛** |微調、研究|好 | ⭐⭐⭐⭐ |推薦|

## 10. 量化－GGUF、GPTQ、AWQ

**量化**降低了模型權重的精確度：FP16（16 位元）→ INT4（4 位元）。結果：模型縮小 3-4 倍，推理速度更快，但可能會降低品質。在消費性硬體上運行大型模型時，這是**必需的**技術。

```text
LLaMA 3.1 8B (FP16): ~16 GB
        │
  ┌─────┼─────────────────┐
  ▼     ▼                 ▼
GGUF   GPTQ              AWQ
(CPU+) (GPU)              (GPU)
Q4_K_M: ~4.9GB   INT4: ~4.5GB   INT4: ~4.3GB
Best: llama.cpp   Best: HF        Best: vLLM
      Ollama            AutoGPTQ         Fastest
```

|定量|位元|尺寸 (8B) |品質 |使用案例|
|--------|--------|------------|---------|---------|
| Q3_K_M | 3-4 | 3-4 〜3.9 GB | 〜90% |顯存有限 |
| **Q4_K_M** | 4-5 | **~4.9 GB** | **~95%** | **最佳位置** |
| Q5_K_M | 5-6 | 〜5.7 GB | ~97% |更好的品質 |
| Q8_0 | 8 | 〜8.5 GB | ~99.5% |近乎無損|
| FP16 | 16 | 16 〜16 GB | 100% |基線|

```bash
# Tạo custom model với Ollama Modelfile
cat > Modelfile << 'EOF'
FROM llama3.1:8b-instruct-q4_K_M
PARAMETER temperature 0.7
PARAMETER num_ctx 8192
SYSTEM "Bạn là trợ lý AI, trả lời bằng tiếng Việt, ngắn gọn kèm ví dụ."
EOF

ollama create my-assistant -f Modelfile
ollama run my-assistant "Giải thích MoE là gì?"
```

> **經驗法則：** 對於大多數用例，使用 **Q4_K_M**。需要更多品質：Q5_K_M。 VRAM 限制：Q3_K_M。

## 11. 選擇正確的模型－決策樹

沒有「最佳模型」—只有針對用例、預算和硬體的**最合適的模型**。

```text
START: Bạn cần gì?
├─► Prototype nhanh → GPT-4o-mini / Claude 3.5 Sonnet (API)
├─► Production on-premise
│   ├─ GPU (A100+)  → vLLM + LLaMA 3.1 70B / Qwen 2.5 72B
│   └─ No GPU       → Ollama + Phi-4 (Q4) / LLaMA 3.1 8B (Q4)
├─► Coding → Qwen2.5-Coder (local) / Claude 4 (API)
├─► Multilingual (CJK, Vietnamese) → Qwen 2.5
├─► Mobile/Edge (<4GB) → Phi-3 Mini / LLaMA 3.2 1B-3B
├─► Math/Reasoning → QwQ 32B / o1-mini (API) / Phi-4
└─► Longest context → Gemini 2 (1M-2M) / Claude 4 (200K)
```

### 11.1。硬體需求

|型號尺寸|顯存 (FP16) |顯存（第四季）|記憶體（CPU）|
|------------|-------------|------------|-----------|
| 1-3B | 4GB| 2GB| 4GB|
| 7-8B | 16GB| 6GB| 8GB|
| 13-14B | 28GB| 10GB| 16GB|
| 70-72B | 70-72B 140 GB | 140 GB 42GB| 64GB|
| 405B | 405B 810GB | 230GB| 256 GB+ |

```text
MacBook M-series (8GB):   → Phi-3 Mini, LLaMA 3.2 3B (Q4)
MacBook M-series (16GB):  → LLaMA 3.1 8B (Q4), Mistral 7B
MacBook M-series (32GB):  → Phi-4, Qwen 2.5 14B (Q4)
RTX 4090 (24GB):          → LLaMA 3.1 8B (FP16), 70B (Q4)
A100 (80GB):              → LLaMA 3.1 70B (FP16)
8× H100:                  → LLaMA 3.1 405B (FP16)
```

## 總結

```text
Key Takeaways:

1. ARCHITECTURE: Decoder-only + GQA + RoPE = standard recipe
   MoE = quality lớn compute nhỏ | SWA = memory-efficient

2. OPEN-SOURCE FAMILIES:
   LLaMA (Meta) → ecosystem lớn nhất
   Mistral → efficiency king, SWA + MoE pioneer
   Qwen (Alibaba) → best multilingual, Apache 2.0
   Phi (Microsoft) → small model big performance

3. CHẠY LOCAL: Ollama (5 phút) → vLLM (production) → llama.cpp (CPU)

4. QUANTIZATION: Q4_K_M = sweet spot (3× nhỏ, ~95% quality)

5. Không có "best model" — chỉ có "best fit" cho context cụ thể
```

## 練習

### 練習 1：跑步和比較模型（30 分鐘）

1.安裝**Ollama**，拉取3個模型： `llama3.1`, `qwen2.5`, `phi4`
2. 對所有 3 個問同樣的問題（例如：「用 5 句話解釋 Transformer」）
3. 比較響應品質、速度、風格

### 練習 2：Ollama API 整合（30 分鐘）

1.使用**OpenAI SDK**編寫Python腳本呼叫Ollama本地
2. 實施 `compare_models(prompt, models)` — 傳送相同的提示，傳回結果+經過的時間
3. 測量每個模型的**令牌/秒**

### 練習 3：量化實踐（20 分鐘）

1. 使用越南語系統提示字元建立自訂 **Modelfile**
2. 建構模型： `ollama create my-assistant -f Modelfile`
3. 運行模型時測量VRAM/RAM使用量

### 練習 4：模型選擇（20 分鐘）

為每個場景選擇模型+部署，說明原因：

1. **醫療保健聊天機器人** — 數據必須是本地的、低預算、需要準確
2. **手機AI助理** — Android 4GB RAM，離線模式
3. **研究實驗室** — 分析中文+英文論文，長上下文（>50K tokens）
4. **電商支援** — 1000+並發請求/分鐘，快速回應
5. **程式碼審查工具** — 檢視 50 位開發人員、多種語言的團隊的 PR

### 練習 5：基準研究（20 分鐘）

1. 訪問 [Open LLM Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard)
2. 比較前 5 個型號－哪個型號領先哪個基準？
3. 尋找「隱藏的寶石」：型號<15B但排名較高
4. 撰寫分析趨勢的簡短報告：MoE 與密集、小型與大型

