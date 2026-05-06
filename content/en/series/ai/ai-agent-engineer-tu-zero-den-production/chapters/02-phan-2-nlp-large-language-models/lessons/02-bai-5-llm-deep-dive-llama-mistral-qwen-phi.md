---
id: 019e0a01-bb05-7001-c001-ee0500000001
title: 'Lesson 5: LLM Deep Dive — LLaMA, Mistral, Qwen, Phi'
slug: bai-5-llm-deep-dive-llama-mistral-qwen-phi
description: >-
  Detailed comparison of open-source LLMs: LLaMA 3, Mistral, Qwen 2.5, Phi-3/4.
  Architecture differences, benchmarks, use cases. Run locally with Ollama,
  vLLM. Commercial models: GPT-4, Claude, Gemini.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 4
section_title: 'Part 2: NLP & Large Language Models (LLMs)'
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: 'AI Agent Engineer: From Zero to Production'
  slug: ai-agent-engineer-tu-zero-den-production
locale: en
---

> **In 2023, LLaMA leak causes open-source AI to explode. In 2025, you can run model 70B on a laptop.** The race between Meta, Mistral, Alibaba, Microsoft has completely changed the landscape. This article dives deep into the architecture, benchmarks, and how to **actually run** these models — from `ollama run` Go to serving production with vLLM.

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

| Criteria | Open-Weight | Closed-Source |
|----------|-------------|---------------|
| **Representation** | LLaMA, Mistral, Qwen, Phi | GPT-4o, Claude 4, Gemini 2 |
| **Cost** | Infra cost, no per-token fee | Pay-per-token |
| **Customization** | Fine-tune, merge, quantize | Limited (system prompt, RAG) |
| **Privacy** | Data stays on-premise | Data sent via API |
| **Best for** | Production is autonomous, domain-specific | Fast prototype, SOTA quality |

### 1.1. Terminology needs to be distinguished

- **Open-source**: Code + weights + training data (rare — only OLMo, BLOOM)
- **Open-weight**: Weights released, no training data (LLaMA, Mistral, Qwen)
- **Open-access**: Free use via API but does not download weights
- **Proprietary**: Nothing — API only (GPT-4, Claude)

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

> **Key insight:** GQA reduces cache KV by 4-8× but quality is nearly unchanged - the reason model 70B can run on consumer GPUs.

### 2.2. Rotary Position Embedding (RoPE)

**RoPE** encodes position by rotating the vector in complex space. Advantages: natural relative position, easily extend context length. Used in LLaMA, Mistral, Qwen — is the standard position encoding for all modern LLMs.

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

| Pattern | Used in | Benefits |
|--------|-----------|---------|
| **GQA** | LLaMA 3, Mistral | Cache KV reduced by 4-8× |
| **RoPE** | Most LLMs | Extend context is easy |
| **SWA** | Mistral 7B | O(n×w) memory |
| **MoE** | Mixtral, Qwen-MoE | Fast inference, scalable |
| **SwiGLU** | LLaMA, Mistral | Better activation than ReLU |

## 3. LLaMA Family (Meta) — Open-Source Pillar

```text
LLaMA 1 (Feb'23)      LLaMA 2 (Jul'23)      LLaMA 3 (Apr'24)
├─ 7B-65B              ├─ 7B, 13B, 70B       ├─ 8B, 70B (15T tokens!)
├─ Research only       ├─ Commercial license  ├─ GQA, RoPE, 128K vocab
└─ Leaked → bùng nổ   └─ RLHF, 4K ctx       └─ 128K ctx (3.1), tool use

LLaMA 3.2 (Sep'24): 1B/3B (edge) + 11B/90B (vision!)
LLaMA 3.3 (Dec'24): 70B cải thiện multilingual, instruction following
```

| Features | LLaMA 3 8B | LLaMA 3 70B | LLaMA 3.1 405B |
|--------|-----------|-------------|----------------|
| Layers | 32 | 80 | 126 |
| Hidden dim | 4096 | 8192 | 16384 |
| KV heads (GQA) | 8 | 8 | 16 |
| Context | 8K→128K | 8K→128K | 128K |
| Training tokens | 15T+ | 15T+ | 15T+ |

**Why is LLaMA important?** The largest open-source AI Ecosystem. Most fine-tuned models are based on LLaMA base: Alpaca (Stanford), Vicuna (LMSYS), CodeLlama, Llama-Guard (safety), WizardLM. Key innovations: RMSNorm (pre-norm), SwiGLU activation, RoPE, GQA, 128K vocab. License: Llama Community — free under 700M MAU.

## 4. Mistral Family — Efficiency Is King

Mistral AI (French startup, ex-DeepMind/Meta) — philosophy: **small model, big performance**.

| Model | Size | Type | Context | Highlights |
|-------|-------|-------|---------|-------------|
| Mistral 7B | 7B | Dense | 32K | SWA, beats LLaMA 2 13B |
| Mixtral 8×7B | 47B (13B active) | MoE | 32K | First MoE open |
| Mixtral 8×22B | 141B (39B active) | MoE | 64K | Strongest open MoE |
| Mistral Large | ~120B | Dense | 128K | Near GPT-4 |
| Codestral | 22B | Dense | 32K | Code-specialized |

**Mistral 7B innovations:** SWA (window=4096) + GQA (8 KV heads) + Rolling Buffer Cache (fixed memory, no grow) + Pre-fill Chunking → 7B model surpasses LLaMA 2 13B on most benchmarks. Mixtral 8×7B proves MoE practical: speed is 13B dense, quality is nearly 70B dense.

## 5. Qwen Family (Alibaba) — Multilingual Champion

Qwen 2.5 (Sep 2024) continuously ranks at the top of the Open LLM Leaderboard — especially strong multilingual (29+ languages, CJK, Vietnamese).

| Features | Details |
|--------|--------|
| Sizes | 0.5B → 72B (both MoE variants) |
| Training | 18T tokens, curated multilingual |
| Context | 128K native (YARN RoPE) |
| Coding | Qwen2.5-Coder — top open coding model |
| License | **Apache 2.0** (most widespread) |
| Tool use | Native function calling, JSON mode |

**QwQ** (32B) — OpenAI o1 style reasoning model but open-weight. "Think" many steps before answering, especially math/code. The model asks itself questions, verifies each step, then outputs the final result.

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

Philosophy: **data quality > model size** — train on "textbook-quality" + synthetic data.

```text
Phi Philosophy:  Web crawl (noisy) × Massive scale → okay model
                 vs
                 Curated data × Modest scale → GREAT model
```

| Model | Size | Context | MMLU | Highlights |
|-------|--------|---------|-------|-----------|
| Phi-2 | 2.7B | 2K | 56.7 | Beats some 7B models |
| Phi-3 Mini | 3.8B | 128K | 68.8 | On-device, extended ctx |
| Phi-3 Medium | 14B | 128K | 78.0 | Near GPT-3.5 |
| Phi-3.5 MoE | 42B (6.6B active) | 128K | 78.9 | Sparse MoE |
| **Phi-4** | **14B** | 16K | **81.4** | **14B competes with 70B!** |

Phi-4 achieved MMLU 81.4, MATH 80.4, HumanEval 82.6 — equal to LLaMA 3.1 70B on reasoning tasks. Secret: **synthetic data generation pipeline** creates high-quality training data from larger LLMs, filters and validates before training.

## 7. Commercial Models — GPT-4o, Claude, Gemini

| Model | Context | Strengths | Pricing (1M tok) |
|--------|---------|-----------|-------------------|
| GPT-4o | 128K | General-purpose, fast | $2.5 in / $10 out |
| GPT-4o-mini | 128K | Budget-friendly | $0.15 / $0.60 |
| o1 / o3 | 200K | Deep reasoning | $15 / $60 |
| Claude 3.5 Sonnets | 200K | Coding, analysis | $3 / $15 |
| Claude 4 Opus | 200K | Agentic, tool use | $15 / $75 |
| Gemini 2 Flash | 1M | Speed, huge context | $0.075 / $0.30 |
| Gemini 2 Pro | 2M | Long context king | $1.25 / $10 |

## 8. Mega Benchmark Table

| Model | MMLU | HumanEval | GSM8K | Arena ELO |
|-------|--------|-----------|-------|-----------|
| GPT-4o | 88.7 | 90.2 | 97.8 | 1285 |
| Claude 4 Opus | 88.1 | 92.0 | 96.5 | 1290 |
| Gemini 2 Pro | 87.5 | 85.0 | 96.0 | 1270 |
| LLaMA 3.1 405B | 85.2 | 89.0 | 96.8 | 1210 |
| Qwen 2.5 72B | 83.1 | 86.4 | 95.8 | 1190 |
| Phi-4 (14B) | 81.4 | 82.6 | 95.3 | 1150 |
| LLaMA 3.3 70B | 82.0 | 84.5 | 95.1 | 1180 |
| Mistral Large | 81.2 | 82.0 | 93.0 | 1160 |
| Phi-3 Mini (3.8B) | 68.8 | 58.5 | 82.5 | 1010 |

Benchmark explanation: **MMLU** = knowledge 57 subjects, **HumanEval** = Python code gene, **GSM8K** = math reasoning, **Arena ELO** = real human preference (most reliable).

> **Caution:** Benchmarks can be "gamed" — training data contamination, benchmark-specific tuning. Arena ELO from real users is the most reliable.

## 9. Run LLM Local — Ollama, vLLM, llama.cpp

The most important part: **hands-on**. You will learn how to run LLMs right on your computer.

### 9.1. Ollama — 5 minutes setup

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

**vLLM** (UC Berkeley) is the fastest inference engine — uses **PagedAttention** for efficient KV cache management, supporting continuous batching.

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

**llama.cpp** (Georgi Gerganov) allows running LLM on pure CPU or mixed CPU/GPU. Format **GGUF** is the standard for quantized models.

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

### 9.6. Compare Tools

| Tools | Best For | Speed ​​| Ease | GPU? |
|-------|---------|-------|-------|-------|
| **Ollama** | Dev, experiment | Good | ⭐⭐⭐⭐⭐ | Optional |
| **vLLM** | Production serving | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | Yes |
| **llama.cpp** | CPU/edge | Good | ⭐⭐⭐ | Optional |
| **Transformers** | Fine-tune, research | Good | ⭐⭐⭐⭐ | Recommended |

## 10. Quantization — GGUF, GPTQ, AWQ

**Quantization** reduces the precision of model weights: FP16 (16-bit) → INT4 (4-bit). Result: 3-4× smaller model, faster inference, but may reduce quality. This is a **required** technique when running large models on consumer hardware.

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
|--------|--------|-----------|---------|----------|
| Q3_K_M | 3-4 | ~3.9 GB | ~90% | Limited VRAM |
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

> **Rule of thumb:** Use **Q4_K_M** for most use cases. Need more quality: Q5_K_M. VRAM limit: Q3_K_M.

## 11. Choose the Right Model — Decision Tree

There is no "best model" — there is only the **most suitable model** for the use case, budget, and hardware.

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

## Summary

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

## Exercises

### Exercise 1: Run & Compare Models (30 minutes)

1. Install **Ollama**, pull 3 models: `llama3.1`, `qwen2.5`, `phi4`
2. Ask the same question for all 3 (eg: "Explain Transformer in 5 sentences")
3. Compare response quality, speed, style

### Exercise 2: Ollama API Integration (30 minutes)

1. Write a Python script using **OpenAI SDK** to call Ollama local
2. Implement `compare_models(prompt, models)` — send same prompt to multiple models, return result + elapsed time
3. Measure **tokens/second** for each model

### Exercise 3: Quantization Hands-on (20 minutes)

1. Create a custom **Modelfile** with Vietnamese system prompt
2. Build model: `ollama create my-assistant -f Modelfile`
3. Measure VRAM/RAM usage when running the model

### Exercise 4: Model Selection (20 minutes)

Choose model + deployment for each scenario, explain why:

1. **Healthcare chatbot** — data must be on-premise, low budget, needs to be accurate
2. **Mobile AI assistant** — Android 4GB RAM, offline mode
3. **Research lab** — analyze Chinese + English papers, long context (>50K tokens)
4. **E-commerce support** — 1000+ concurrent requests/minute, fast response
5. **Code review tool** — review PRs for a team of 50 devs, many languages

### Exercise 5: Benchmark Research (20 minutes)

1. Access [Open LLM Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard)
2. Compare top 5 models — which model leads which benchmark?
3. Find "hidden gem": model <15B but high rank
4. Write a short report analyzing trends: MoE vs Dense, small vs large

