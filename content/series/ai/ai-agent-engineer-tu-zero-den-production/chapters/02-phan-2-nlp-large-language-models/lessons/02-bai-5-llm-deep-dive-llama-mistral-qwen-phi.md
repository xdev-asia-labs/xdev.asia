---
id: 019e0a01-bb05-7001-c001-ee0500000001
title: "Bài 5: LLM Deep Dive — LLaMA, Mistral, Qwen, Phi"
slug: bai-5-llm-deep-dive-llama-mistral-qwen-phi
description: >-
  So sánh chi tiết các open-source LLMs: LLaMA 3, Mistral, Qwen 2.5, Phi-3/4. Architecture differences, benchmarks, use cases. Chạy local với Ollama, vLLM. Commercial models: GPT-4, Claude, Gemini.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 4
section_title: "Phần 2: NLP & Large Language Models (LLMs)"
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: "AI Agent Engineer: Từ Zero đến Production"
  slug: ai-agent-engineer-tu-zero-den-production
---

> **Năm 2023, LLaMA leak làm bùng nổ open-source AI. Năm 2025, bạn có thể chạy model 70B trên laptop.** Cuộc đua giữa Meta, Mistral, Alibaba, Microsoft đã thay đổi hoàn toàn landscape. Bài này deep dive vào kiến trúc, benchmarks, và cách **thực sự chạy** các model này — từ `ollama run` đến serving production với vLLM.

## 1. Landscape LLM 2024-2026 — Open-Source vs Commercial

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

| Tiêu chí | Open-Weight | Closed-Source |
|----------|-------------|---------------|
| **Đại diện** | LLaMA, Mistral, Qwen, Phi | GPT-4o, Claude 4, Gemini 2 |
| **Cost** | Infra cost, no per-token fee | Pay-per-token |
| **Customization** | Fine-tune, merge, quantize | Limited (system prompt, RAG) |
| **Privacy** | Data stays on-premise | Data gửi qua API |
| **Best for** | Production tự chủ, domain-specific | Prototype nhanh, SOTA quality |

### 1.1. Thuật ngữ cần phân biệt

- **Open-source**: Code + weights + training data (hiếm — chỉ OLMo, BLOOM)
- **Open-weight**: Weights released, training data không (LLaMA, Mistral, Qwen)
- **Open-access**: Dùng free qua API nhưng không download weights
- **Proprietary**: Không có gì — chỉ API (GPT-4, Claude)

## 2. Architecture Patterns — Decoder-Only, MoE, GQA, RoPE, SWA

### 2.1. Decoder-Only + GQA

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

> **Key insight:** GQA giảm KV cache 4-8× mà quality gần không đổi — lý do model 70B chạy được trên consumer GPU.

### 2.2. Rotary Position Embedding (RoPE)

**RoPE** encode vị trí bằng cách xoay vector trong không gian phức. Ưu điểm: relative position tự nhiên, extend context length dễ dàng. Được dùng trong LLaMA, Mistral, Qwen — là standard position encoding cho mọi modern LLM.

### 2.3. Sliding Window Attention (SWA) & MoE

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

| Pattern | Dùng trong | Lợi ích |
|---------|-----------|---------|
| **GQA** | LLaMA 3, Mistral | KV cache giảm 4-8× |
| **RoPE** | Hầu hết LLMs | Extend context dễ |
| **SWA** | Mistral 7B | O(n×w) memory |
| **MoE** | Mixtral, Qwen-MoE | Fast inference, scalable |
| **SwiGLU** | LLaMA, Mistral | Better activation than ReLU |

## 3. LLaMA Family (Meta) — Trụ Cột Open-Source

```text
LLaMA 1 (Feb'23)      LLaMA 2 (Jul'23)      LLaMA 3 (Apr'24)
├─ 7B-65B              ├─ 7B, 13B, 70B       ├─ 8B, 70B (15T tokens!)
├─ Research only       ├─ Commercial license  ├─ GQA, RoPE, 128K vocab
└─ Leaked → bùng nổ   └─ RLHF, 4K ctx       └─ 128K ctx (3.1), tool use

LLaMA 3.2 (Sep'24): 1B/3B (edge) + 11B/90B (vision!)
LLaMA 3.3 (Dec'24): 70B cải thiện multilingual, instruction following
```

| Feature | LLaMA 3 8B | LLaMA 3 70B | LLaMA 3.1 405B |
|---------|-----------|------------|----------------|
| Layers | 32 | 80 | 126 |
| Hidden dim | 4096 | 8192 | 16384 |
| KV heads (GQA) | 8 | 8 | 16 |
| Context | 8K→128K | 8K→128K | 128K |
| Training tokens | 15T+ | 15T+ | 15T+ |

**Tại sao LLaMA quan trọng?** Ecosystem lớn nhất open-source AI. Hầu hết fine-tuned models đều dựa trên LLaMA base: Alpaca (Stanford), Vicuna (LMSYS), CodeLlama, Llama-Guard (safety), WizardLM. Key innovations: RMSNorm (pre-norm), SwiGLU activation, RoPE, GQA, 128K vocab. License: Llama Community — free dưới 700M MAU.

## 4. Mistral Family — Hiệu Quả Là Vua

Mistral AI (startup Pháp, ex-DeepMind/Meta) — triết lý: **model nhỏ, performance lớn**.

| Model | Size | Type | Context | Highlights |
|-------|------|------|---------|------------|
| Mistral 7B | 7B | Dense | 32K | SWA, beats LLaMA 2 13B |
| Mixtral 8×7B | 47B (13B active) | MoE | 32K | MoE đầu tiên open |
| Mixtral 8×22B | 141B (39B active) | MoE | 64K | Mạnh nhất open MoE |
| Mistral Large | ~120B | Dense | 128K | Gần GPT-4 |
| Codestral | 22B | Dense | 32K | Code-specialized |

**Mistral 7B innovations:** SWA (window=4096) + GQA (8 KV heads) + Rolling Buffer Cache (fixed memory, không grow) + Pre-fill Chunking → 7B model vượt LLaMA 2 13B trên hầu hết benchmarks. Mixtral 8×7B chứng minh MoE practical: tốc độ 13B dense, chất lượng gần 70B dense.

## 5. Qwen Family (Alibaba) — Vô Địch Multilingual

Qwen 2.5 (Sep 2024) liên tục đứng top Open LLM Leaderboard — đặc biệt mạnh multilingual (29+ ngôn ngữ, CJK, tiếng Việt).

| Feature | Chi tiết |
|---------|---------|
| Sizes | 0.5B → 72B (cả MoE variant) |
| Training | 18T tokens, curated multilingual |
| Context | 128K native (YARN RoPE) |
| Coding | Qwen2.5-Coder — top open coding model |
| License | **Apache 2.0** (rộng rãi nhất) |
| Tool use | Native function calling, JSON mode |

**QwQ** (32B) — reasoning model kiểu OpenAI o1 nhưng open-weight. "Suy nghĩ" nhiều bước trước khi trả lời, đặc biệt mạnh math/code. Model tự đặt câu hỏi, verify từng bước, rồi mới output kết quả cuối.

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

## 6. Phi Family (Microsoft) — Small Models, Big Performance

Triết lý: **data quality > model size** — train trên "textbook-quality" + synthetic data.

```text
Phi Philosophy:  Web crawl (noisy) × Massive scale → okay model
                 vs
                 Curated data × Modest scale → GREAT model
```

| Model | Size | Context | MMLU | Highlight |
|-------|------|---------|------|-----------|
| Phi-2 | 2.7B | 2K | 56.7 | Beats some 7B models |
| Phi-3 Mini | 3.8B | 128K | 68.8 | On-device, extended ctx |
| Phi-3 Medium | 14B | 128K | 78.0 | Near GPT-3.5 |
| Phi-3.5 MoE | 42B (6.6B active) | 128K | 78.9 | Sparse MoE |
| **Phi-4** | **14B** | 16K | **81.4** | **14B cạnh tranh 70B!** |

Phi-4 đạt MMLU 81.4, MATH 80.4, HumanEval 82.6 — ngang LLaMA 3.1 70B trên reasoning tasks. Bí quyết: **synthetic data generation pipeline** tạo training data chất lượng cao từ LLMs lớn hơn, lọc và verify trước khi train.

## 7. Commercial Models — GPT-4o, Claude, Gemini

| Model | Context | Strengths | Pricing (1M tok) |
|-------|---------|-----------|-------------------|
| GPT-4o | 128K | General-purpose, fast | $2.5 in / $10 out |
| GPT-4o-mini | 128K | Budget-friendly | $0.15 / $0.60 |
| o1 / o3 | 200K | Deep reasoning | $15 / $60 |
| Claude 3.5 Sonnet | 200K | Coding, analysis | $3 / $15 |
| Claude 4 Opus | 200K | Agentic, tool use | $15 / $75 |
| Gemini 2 Flash | 1M | Speed, huge context | $0.075 / $0.30 |
| Gemini 2 Pro | 2M | Long context king | $1.25 / $10 |

## 8. Mega Benchmark Table

| Model | MMLU | HumanEval | GSM8K | Arena ELO |
|-------|------|-----------|-------|-----------|
| GPT-4o | 88.7 | 90.2 | 97.8 | 1285 |
| Claude 4 Opus | 88.1 | 92.0 | 96.5 | 1290 |
| Gemini 2 Pro | 87.5 | 85.0 | 96.0 | 1270 |
| LLaMA 3.1 405B | 85.2 | 89.0 | 96.8 | 1210 |
| Qwen 2.5 72B | 83.1 | 86.4 | 95.8 | 1190 |
| Phi-4 (14B) | 81.4 | 82.6 | 95.3 | 1150 |
| LLaMA 3.3 70B | 82.0 | 84.5 | 95.1 | 1180 |
| Mistral Large | 81.2 | 82.0 | 93.0 | 1160 |
| Phi-3 Mini (3.8B) | 68.8 | 58.5 | 82.5 | 1010 |

Benchmark giải thích: **MMLU** = knowledge 57 subjects, **HumanEval** = Python code gen, **GSM8K** = math reasoning, **Arena ELO** = real human preference (reliable nhất).

> **Cẩn thận:** Benchmarks có thể bị "gamed" — training data contamination, benchmark-specific tuning. Arena ELO từ real users là reliable nhất.

## 9. Chạy LLM Local — Ollama, vLLM, llama.cpp

Phần quan trọng nhất: **hands-on**. Bạn sẽ học cách chạy LLMs ngay trên máy mình.

### 9.1. Ollama — 5 phút setup

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

### 9.2. Ollama API — OpenAI-Compatible

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

### 9.3. vLLM — Production Serving

**vLLM** (UC Berkeley) là inference engine nhanh nhất — sử dụng **PagedAttention** để quản lý KV cache hiệu quả, hỗ trợ continuous batching.

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

### 9.4. llama.cpp — CPU Inference & GGUF

**llama.cpp** (Georgi Gerganov) cho phép chạy LLM trên CPU thuần hoặc mixed CPU/GPU. Format **GGUF** là standard cho quantized models.

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

### 9.5. Hugging Face Transformers

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

### 9.6. So sánh Tools

| Tool | Best For | Speed | Ease | GPU? |
|------|---------|-------|------|------|
| **Ollama** | Dev, experiment | Good | ⭐⭐⭐⭐⭐ | Optional |
| **vLLM** | Production serving | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | Yes |
| **llama.cpp** | CPU/edge | Good | ⭐⭐⭐ | Optional |
| **Transformers** | Fine-tune, research | Good | ⭐⭐⭐⭐ | Recommended |

## 10. Quantization — GGUF, GPTQ, AWQ

**Quantization** giảm precision của model weights: FP16 (16-bit) → INT4 (4-bit). Kết quả: model nhỏ hơn 3-4×, inference nhanh hơn, nhưng có thể giảm quality. Đây là kỹ thuật **bắt buộc** khi chạy model lớn trên consumer hardware.

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

| Quant | Bits | Size (8B) | Quality | Use Case |
|-------|------|-----------|---------|----------|
| Q3_K_M | 3-4 | ~3.9 GB | ~90% | VRAM giới hạn |
| **Q4_K_M** | 4-5 | **~4.9 GB** | **~95%** | **Sweet spot** |
| Q5_K_M | 5-6 | ~5.7 GB | ~97% | Better quality |
| Q8_0 | 8 | ~8.5 GB | ~99.5% | Near-lossless |
| FP16 | 16 | ~16 GB | 100% | Baseline |

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

> **Rule of thumb:** Dùng **Q4_K_M** cho hầu hết use cases. Cần quality hơn: Q5_K_M. VRAM giới hạn: Q3_K_M.

## 11. Chọn Model Phù Hợp — Decision Tree

Không có "best model" — chỉ có **model phù hợp nhất** cho use case, budget, và hardware.

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

### 11.1. Hardware Requirements

| Model Size | VRAM (FP16) | VRAM (Q4) | RAM (CPU) |
|-----------|-------------|-----------|-----------|
| 1-3B | 4 GB | 2 GB | 4 GB |
| 7-8B | 16 GB | 6 GB | 8 GB |
| 13-14B | 28 GB | 10 GB | 16 GB |
| 70-72B | 140 GB | 42 GB | 64 GB |
| 405B | 810 GB | 230 GB | 256 GB+ |

```text
MacBook M-series (8GB):   → Phi-3 Mini, LLaMA 3.2 3B (Q4)
MacBook M-series (16GB):  → LLaMA 3.1 8B (Q4), Mistral 7B
MacBook M-series (32GB):  → Phi-4, Qwen 2.5 14B (Q4)
RTX 4090 (24GB):          → LLaMA 3.1 8B (FP16), 70B (Q4)
A100 (80GB):              → LLaMA 3.1 70B (FP16)
8× H100:                  → LLaMA 3.1 405B (FP16)
```

## Tổng kết

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

## Bài tập

### Bài tập 1: Chạy & So sánh Models (30 phút)

1. Cài **Ollama**, pull 3 models: `llama3.1`, `qwen2.5`, `phi4`
2. Hỏi cùng 1 câu cho cả 3 (vd: "Explain Transformer in 5 sentences")
3. So sánh response quality, speed, style

### Bài tập 2: Ollama API Integration (30 phút)

1. Viết Python script dùng **OpenAI SDK** gọi Ollama local
2. Implement `compare_models(prompt, models)` — gửi cùng prompt đến nhiều models, trả về kết quả + elapsed time
3. Đo **tokens/second** cho mỗi model

### Bài tập 3: Quantization Hands-on (20 phút)

1. Tạo **Modelfile** custom với system prompt tiếng Việt
2. Build model: `ollama create my-assistant -f Modelfile`
3. Đo VRAM/RAM usage khi chạy model

### Bài tập 4: Model Selection (20 phút)

Chọn model + deployment cho mỗi scenario, giải thích lý do:

1. **Healthcare chatbot** — data phải on-premise, budget thấp, cần chính xác
2. **Mobile AI assistant** — Android 4GB RAM, offline mode
3. **Research lab** — phân tích papers tiếng Trung + tiếng Anh, context dài (>50K tokens)
4. **E-commerce support** — 1000+ concurrent requests/phút, trả lời nhanh
5. **Code review tool** — review PRs cho team 50 devs, nhiều ngôn ngữ

### Bài tập 5: Benchmark Research (20 phút)

1. Truy cập [Open LLM Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard)
2. So sánh top 5 models — model nào leads benchmark nào?
3. Tìm "hidden gem": model <15B nhưng rank cao
4. Viết báo cáo ngắn phân tích trends: MoE vs Dense, small vs large

