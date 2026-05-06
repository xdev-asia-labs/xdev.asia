---
id: 019c9619-dd01-7001-e001-dd0100000001
title: 'Lesson 1: What is Fine-tuning? — Landscape & Why you don''t need it (yet).'
slug: bai-1-fine-tuning-la-gi
description: >-
  Defining fine-tuning in a modern LLM context. Pre-training vs SFT vs RLHF/DPO.
  When to fine-tune, when NOT to. Decision framework: Prompt Engineering → RAG →
  Fine-tuning.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 0
section_title: 'Part 1: Overview & Strategy — When to Fine-tune?'
course:
  id: 019c9619-aa03-7003-b003-aa0300000003
  title: 'Fine-tuning LLM: The Art of AI Tuning'
  slug: fine-tuning-llm
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4800" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4800)"/>

  <!-- Decorations -->
  <g>
    <circle cx="818" cy="264" r="26" fill="#fbbf24" opacity="0.09"/>
    <circle cx="1036" cy="82" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="754" cy="160" r="14" fill="#fbbf24" opacity="0.07"/>
    <circle cx="972" cy="238" r="8" fill="#fbbf24" opacity="0.11"/>
    <circle cx="690" cy="56" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="64" x2="1100" y2="144" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="94" x2="1050" y2="164" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1047.7749907475932,194.5 1047.7749907475932,233.5 1014,253 980.2250092524068,233.5 980.2250092524068,194.5 1014,175" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 AI & ML — Lesson 0</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 1: What is Fine-tuning? — Landscape &</tspan>
      <tspan x="60" dy="42">Why do you (yet) need it</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Fine-tuning LLM: The Art of AI Tuning</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: Overview & Strategy — When to Fine-tune?</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

"Fine-tuning" is one of the most talked about buzzwords in AI — but also the most **abused** technique. Before jumping into the code, you need to understand: What Fine-tuning really is, where it is in the AI ​​pipeline, and **when you really need it**.

> ⚠️ **Golden Rule**: 80% of the time you think you need fine-tuning, actually prompt engineering or RAG is enough. Fine-tuning is the **last choice**, not the first.

---

## 1. Life cycle of an LLM

Before understanding fine-tuning, let's see how LLM is created:

```
┌──────────────────────────────────────────────────────────────────┐
│                    VÒNG ĐỜI MỘT LLM                             │
│                                                                  │
│  Phase 1: PRE-TRAINING                                          │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │ Huấn luyện trên TOÀN BỘ internet (~15 nghìn tỷ tokens)  │    │
│  │ → Học ngôn ngữ, kiến thức, lập luận chung               │    │
│  │ Cost: $10M–$100M+ | Time: Weeks–Months | GPUs: Hàng nghìn│    │
│  └─────────────────────────────────────────────────────────┘    │
│                         │                                       │
│                         ▼                                       │
│  Phase 2: SUPERVISED FINE-TUNING (SFT) ← Bạn đang ở đây        │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │ Huấn luyện thêm trên dataset nhỏ, chất lượng cao        │    │
│  │ → Dạy model cách tuân thủ instructions, format, style    │    │
│  │ Cost: $10–$10,000 | Time: Minutes–Hours | GPUs: 1–8      │    │
│  └─────────────────────────────────────────────────────────┘    │
│                         │                                       │
│                         ▼                                       │
│  Phase 3: ALIGNMENT (RLHF / DPO)                               │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │ Tinh chỉnh model theo preferences con người              │    │
│  │ → An toàn, helpful, honest                               │    │
│  │ Cost: $1,000–$50,000 | Cần human annotators              │    │
│  └─────────────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────────┘
```

### Bottom line

- **Pre-training**: Let the model "read" the entire internet → know everything but don't know how to answer
- **SFT (Fine-tuning)**: Teach the model *how* to respond, in the format/style you want
- **RLHF/DPO**: Refine the model to respond "correctly" to humans

**When people say "fine-tuning", it usually means Phase 2 — SFT.**

---

## 2. What problem does Fine-tuning solve?

### 2.1 Behavior vs Knowledge

Here's the **most important** distinction to decide whether fine-tuning is needed:

| Problem | Type | Solution |
|--------|-------|-----------|
| Model does not know your company's products | **Knowledge gap** | RAG |
| Model response must be in Vietnamese, specific JSON format | **Behavior gap** | Fine-tuning |
| Model needs real-time data (stock prices, weather) | **Knowledge gap** | RAG / Tool use |
| Model does not use the correct industry terminology | **Behavior gap** | Fine-tuning |
| Model "talks too much", you need to answer briefly | **Behavior gap** | Fine-tuning (or prompt) |
| Model does not know the latest internal policy | **Knowledge gap** | RAG |

### 2.2 Specific examples

**❌ NO fine-tune needed:**
- "I want the chatbot to know about the company's products" → Use **RAG**
- "I want the model to accurately answer questions from the document" → Use **RAG**
- "I need a model to read the database and respond" → Use **Tool Use / Agent**

**✅ NEED fine-tune:**
- "Model should always respond in JSON with a specific schema" → **Fine-tune**
- "The model needs to use its own brand tone, very different from the default" → **Fine-tune**
- "The small model (Flash/Mini) needs to perform like the big model (Pro/4o)" → **Fine-tune** (distillation)
- "Model must understand Vietnamese medical terminology" → **Fine-tune** + RAG

---

## 3. Decision Framework: 3-step ladder

Before fine-tuning, go through the 3 steps in order:

```
Bước 1: PROMPT ENGINEERING
├── Chi phí: $0 | Thời gian: Phút
├── Thử: System prompt tốt hơn, few-shot examples, chain-of-thought
├── Đủ tốt? → DỪNG ✅
└── Không đủ? → Bước 2

Bước 2: RAG (Retrieval-Augmented Generation)
├── Chi phí: $50–$500 setup | Thời gian: Ngày
├── Thử: Kết nối knowledge base, vector DB
├── Đủ tốt? → DỪNG ✅
└── Không đủ? → Bước 3

Bước 3: FINE-TUNING
├── Chi phí: $50–$10,000+ | Thời gian: Days–Weeks
├── Chuẩn bị data, train, evaluate, iterate
└── Đây là lựa chọn cuối cùng
```

### Checklist before fine-tuning

- [ ] Tried at least 5 different system prompt versions?
- [ ] Tried few-shot prompting (3–5 examples in prompt)?
- [ ] If you need new knowledge → tried RAG?
- [ ] Have at least 100 high quality training data examples?
- [ ] Is there a budget for training + evaluation iterations?
- [ ] Is there a long-term maintenance period for the model?

---

## 4. Fine-tuning methods

### 4.1 Full Fine-tuning
- Update **all** model weights
- Needs a huge GPU (A100 80GB+)
- High costs, catastrophic forgetting risk
- Rarely needed in practice 2025–2026

### 4.2 Supervised Fine-Tuning (SFT) via API
- Use Google/OpenAI API
- No need for GPU management
- Fast, easy, moderate cost
- **This is the most common method**

### 4.3 LoRA / QLoRA (Parameter-Efficient)
- Only updates a **small portion** of weights (~0.1–1%)
- Can run on consumer GPUs (RTX 3090, T4)
- Lowest cost
- Need more technical knowledge

```
┌─────────────────────────────────────────────────┐
│           So sánh 3 phương pháp                  │
│                                                  │
│  Full FT    ████████████████████  $$$$$  🔥🔥🔥  │
│  SFT (API)  ██████████           $$     🔥       │
│  LoRA       ████                 $      🔥🔥     │
│                                                  │
│  ████ = Resources    $$$ = Cost    🔥 = Difficulty│
└─────────────────────────────────────────────────┘
```

---

## 5. Landscape 2025–2026: Who provides Fine-tuning?

| Provider | Supported Models | Pricing model | Advantages |
|----------|---------------|---------------|---------|
| **Google (Vertex AI)** | Gemini 2.0 Flash, Pro | Per training token | Inference price by base model |
| **OpenAI** | GPT-4o-mini, GPT-4o | Per training token | Ecosystem is large, easy to use |
| **Anthropic** | Not yet published SFT | N/A | Not available for end users |
| **Hugging Face** | All open-source models | Self-hosted / AutoTrain | Most flexible, cheapest |
| **Together AI** | LLaMA, Mistral, ... | Per training token | Infrastructure management |
| **Unsloth** | LLaMA, Mistral, ... | Free (self-hosted) | 2x faster, less VRAM |

---

## 6. Quick demo: Fine-tuning "Hello World"

Enjoy the simplest fine-tuning — using OpenAI API:

```python
from openai import OpenAI
import json

client = OpenAI()

# Step 1: Chuẩn bị dataset (tối thiểu ~10 examples cho demo)
training_data = [
    {"messages": [
        {"role": "system", "content": "Bạn là trợ lý hỗ trợ khách hàng của XDev."},
        {"role": "user", "content": "Giá dịch vụ thế nào?"},
        {"role": "assistant", "content": "Dạ, XDev có 3 gói: Starter (miễn phí), Pro ($29/tháng), Enterprise (liên hệ). Anh/chị quan tâm gói nào ạ? 😊"}
    ]},
    {"messages": [
        {"role": "system", "content": "Bạn là trợ lý hỗ trợ khách hàng của XDev."},
        {"role": "user", "content": "Làm sao liên hệ support?"},
        {"role": "assistant", "content": "Dạ, anh/chị có thể liên hệ qua: 📧 support@xdev.asia hoặc 💬 chat trực tiếp trên website. Team support online 9h-18h (GMT+7) các ngày trong tuần ạ!"}
    ]},
    # ... thêm 8+ examples nữa
]

# Step 2: Save thành JSONL file
with open("training_data.jsonl", "w") as f:
    for item in training_data:
        f.write(json.dumps(item, ensure_ascii=False) + "\n")

# Step 3: Upload file
file = client.files.create(
    file=open("training_data.jsonl", "rb"),
    purpose="fine-tune"
)

# Step 4: Tạo fine-tuning job
job = client.fine_tuning.jobs.create(
    training_file=file.id,
    model="gpt-4o-mini-2024-07-18",
    hyperparameters={"n_epochs": 3}
)

print(f"Job ID: {job.id}")
print(f"Status: {job.status}")  # → "validating_files" → "running" → "succeeded"
```

> 💡 **Note**: This is just a demo flow. Lessons 7 & 9 will go into detail with actual datasets.

---

## Lesson summary

- **Fine-tuning** = teaching the model how to **behave**, not teaching **knowledge**
- **Knowledge gap** → use RAG | **Behavior gap** → use Fine-tuning
- Always go through 3 steps: Prompt Engineering → RAG → Fine-tuning
- 3 methods: Full FT (rare) | SFT via API (popular) | LoRA (thrifty)
- Google Vertex AI + OpenAI are the two main platforms for API fine-tuning
- LoRA/QLoRA for self-hosted, lowest cost

## Exercises

1. List 3 AI issues in your work — classify Knowledge gap vs Behavior gap
2. For each problem, suggest a solution: Prompt Engineering, RAG, or Fine-tuning?
3. Create 10 training examples (JSONL format) for the use case you are interested in
4. Read the blog post "A Practical Guide to Fine-Tuning" on OpenAI Cookbook
