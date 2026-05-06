---
id: 019c9619-bb08-7008-c008-bb0800000008
title: 'Lesson 8: GPT and Decoder-only Models'
slug: bai-8-gpt-va-decoder-only-models
description: >-
  Follow the journey from GPT-1 to GPT-4 and open-source alternatives (LLaMA,
  Mistral, Gemma). Understand Causal Language Modeling, autoregressive
  generation, Scaling Laws and how to use GPT-2 with Hugging Face to generate
  text.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 7
section_title: 'Part 2: Transformer architecture'
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: 'AI & LLM: From Basics to Advanced'
  slug: ai-llm-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9533" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9533)"/>

  <!-- Decorations -->
  <g>
    <circle cx="630" cy="240" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="660" cy="50" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="690" cy="120" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="720" cy="190" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="260" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="240" x2="1100" y2="320" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="270" x2="1050" y2="340" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1070.3108891324553,222.5 1070.3108891324553,257.5 1040,275 1009.6891108675446,257.5 1009.6891108675446,222.5 1040,205" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 AI & ML — Lesson 7</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 8: GPT and Decoder-only Models</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI & LLM: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Transformer architecture</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

# Lesson 8: GPT and Decoder-only Models

## 1. GPT-1 (2018) — Unsupervised Pre-training + Supervised Fine-tuning

In June 2018, OpenAI announced **GPT: Improving Language Understanding by Generative Pre-training** (Radford et al., 2018). At the same time as BERT but in a completely different direction.

**Core idea of GPT-1:**
1. **Unsupervised pre-training**: Train Transformer Decoder on huge amount of text with simple objective — predict next token.
2. **Supervised fine-tuning**: For each downstream task, add a task-specific linear head and fine-tune.

**GPT-1 architecture:**
- 12-layer Transformer Decoder (117M parameters).
- Train on BooksCorpus (800M words).
- Context window: 512 tokens.

**Differences with BERT:**
- **Unidirectional**: Each token only attends previous tokens (causal/autoregressive).
- Better than BERT for generation, but weaker for initial understanding tasks.

GPT-1 has surpassed the performance of many specialized models trained from scratch for each individual task — proving that **pre-training on unlabeled data + fine-tuning** is a very powerful paradigm.

## 2. GPT-2 (2019) — Scale Up and Zero-shot Transfer

In February 2019, OpenAI announced **GPT-2** with a controversial announcement: they initially **refused to release it publicly** due to concerns about disinformation. (Then they gradually went public in stages.)

**GPT-2 breakthrough:**
- Scale to **1.5 billion parameters** (GPT-1: 117M).
- Train on **WebText** — 45GB of text from Reddit outbound links with at least 3 karma.
- Context window: 1024 tokens.

**Zero-shot Transfer**: GPT-2 can perform many tasks without fine-tuning — just "prompt" properly:
```
# Summarization (zero-shot)
prompt = "{article text}\n\nTL;DR:"

# Translation (zero-shot)
prompt = "Translate English to French:\nEnglish: {text}\nFrench:"

# Q&A (zero-shot)
prompt = "Answer the question:\nQ: {question}\nA:"
```

**Conclusion of GPT-2 paper**: "Language models are unsupervised multitask learners" — the pre-training scale is large enough, the model can learn many tasks on its own.

## 3. GPT-3 (2020) — 175B Parameters, In-context Learning

In May 2020, OpenAI announced **GPT-3: Language Models are Few-Shot Learners** — a paper that created a stir in the AI world.

**Impressive numbers:**
- **175 billion parameters** (GPT-2: 1.5B — 116 times increase).
- Train over ~300 billion tokens: Common Crawl, WebText2, Books, Wikipedia.
- $4.6 million USD training costs (estimated).

**In-context Learning (ICL)**: Ability to learn from the examples provided **in the prompt** without updating weights:

```
# Zero-shot
"Classify sentiment: 'This movie was amazing!' → "

# One-shot
"Classify sentiment:
'The food was terrible.' → Negative
'This movie was amazing!' → "

# Few-shot
"Classify sentiment:
'The food was terrible.' → Negative
'I love this product!' → Positive
'Very disappointing experience.' → Negative
'This movie was amazing!' → "
```

**Why does ICL work?** This remains an open research question. Hypotheses:
- The model already "knows" the task from pre-training, few-shot examples only "activate" that knowledge.
- The model implicitly performs gradient descent in the forward pass.

**Emergent capabilities**: GPT-3 begins to demonstrate abilities **not explicitly trained** such as chain-of-thought reasoning, arithmetic (partial), code generation.

## 4. GPT-4 (2023) — Multimodal, RLHF, Much Safer

In March 2023, OpenAI announced **GPT-4** but did not reveal architecture details or parameter count (for competitive reasons). What to know:

**Main improvements:**
- **Multimodal**: GPT-4V can receive image input (GPT-4o: also audio).
- **RLHF (Reinforcement Learning from Human Feedback)**: Align model with human preferences, reducing harmful outputs.
- **Longer context**: GPT-4-32k supports 32,000 tokens (vs 4,096 of GPT-3.5).
- **Better reasoning**: Significantly improved on MMLU, HumanEval, Bar Exam.
- **System prompt**: Explicit mechanism to customize behavior.

**Mixture of Experts (MoE)** — according to unofficial sources, GPT-4 uses MoE with ~8 experts, each token only activates 2 experts → more efficient inference.

**Benchmark results of GPT-4:**
- Bar Exam: ~90th percentile (vs GPT-3.5: ~10th percentile).
- MMLU: 86.4% (vs human: ~89%).
- HumanEval (code): 67% (vs GPT-3.5: 48%).

## 5. Causal Language Modeling — Next-token Prediction

All GPT models use the same objective: **Causal Language Modeling (CLM)**.

Given string of tokens `x_1, x_2, ..., x_n`, maximize:

$$\mathcal{L} = \sum_{t=1}^{n} \log P(x_t | x_1, x_2, ..., x_{t-1}; \theta)$$

**Why is CLM simple yet powerful?**
1. Data doesn't need labels — any text is training data.
2. Objective self-supervised — infinite scale.
3. To predict next token well, the model must understand syntax, semantics, facts, reasoning.
4. World knowledge is "compressed" into weights.

**Autoregressive Generation**: When inference, generate each token one by one:

```python
def generate(model, tokenizer, prompt, max_new_tokens=100, temperature=0.8, top_p=0.9):
    tokens = tokenizer.encode(prompt, return_tensors="pt")

    for _ in range(max_new_tokens):
        with torch.no_grad():
            logits = model(tokens).logits[:, -1, :]  # logits của token cuối

        # Temperature scaling
        logits = logits / temperature

        # Top-p (nucleus) sampling
        sorted_logits, sorted_idx = torch.sort(logits, descending=True)
        cumulative_probs = torch.cumsum(torch.softmax(sorted_logits, dim=-1), dim=-1)
        sorted_idx_to_remove = cumulative_probs - torch.softmax(sorted_logits, dim=-1) > top_p
        sorted_logits[sorted_idx_to_remove] = float('-inf')
        logits.scatter_(1, sorted_idx, sorted_logits)

        # Sample
        probs = torch.softmax(logits, dim=-1)
        next_token = torch.multinomial(probs, num_samples=1)

        tokens = torch.cat([tokens, next_token], dim=1)

        # Stop at EOS
        if next_token.item() == tokenizer.eos_token_id:
            break

    return tokenizer.decode(tokens[0], skip_special_tokens=True)
```

## 6. Open-source Alternatives

Since 2023, the open-source LLM ecosystem is exploding:

### LLaMA (Meta AI, 2023-2024)
- **LLaMA-1** (Feb 2023): 7B to 65B params, train on 1.4T tokens.
- **LLaMA-2** (Jul 2023): Improved training, 2T tokens, chat-tuned variants.
- **LLaMA-3** (Apr 2024): 8B and 70B, train on 15T tokens, 128K context.
- **LLaMA-3.1** (Jul 2024): 405B, multilingual improved.

**Architecture improvements vs GPT:**
- **RoPE** (Rotary Position Embedding) instead of absolute PE.
- **SwiGLU** activation instead of ReLU in FFN.
- **Grouped Query Attention (GQA)** — reduces KV-cache, speeds up inference.
- **RMSNorm** instead of LayerNorm — simpler, equivalent.

### Mistral (2023-2024)
- **Mistral-7B**: Surpasses LLaMA-2-13B with only 7B params — efficiency is king.
- **Sliding Window Attention**: Attend in a fixed window, reducing memory O(n²) → O(n).
- **Mixtral 8x7B**: Mixture of Experts — 46.7B total params, 12.9B active per token.

### Gemma (Google, 2024)
- **Gemma-2B and 7B**: Distilled from Gemini, open weights.
- Multi-query attention, RoPE, GeGLU activation.
- Strong performance for size, especially on coding.

### Africa (Microsoft, 2023-2024)
- **Phi-1** (1.3B): Train mainly on "textbook quality" synthetic data.
- **Phi-2** (2.7B): Exceeds many larger models many times.
- **Phi-3** (3.8B): Competes with Mixtral-8x7B.
- Prove **data quality > data quantity** in small model regime.

| Model | Params | Open? | Notable |
|---|---|---|---|
| GPT-4 | ~1.8T (MoE) | No | Best overall |
| LLaMA-3.1-70B | 70B | Yes | Best open 70B |
| Mistral-7B | 7B | Yes | Best 7B | efficiency
| Mixtral-8x7B | 46.7B (12.9B active) | Yes | Best MoE open |
| Gemma-7B | 7B | Yes | Strong reasoning |
| Phi-3-mini | 3.8B | Yes | Best small models |

## 7. Scaling Laws — Compute-Optimal Training

**Kaplan et al. (2020) — OpenAI Scaling Laws:**
Model performance (cross-entropy loss) reduces according to power law with:
- Number of parameters N.
- Dataset size D.
- Compute C.

Conclusion: With a fixed compute budget, **increasing model size is more effective** increasing data or training longer.

**Chinchilla (Hoffmann et al., 2022) — DeepMind:**
Revisit Kaplan's scaling laws and discover: Kaplan has **undertrained** the models by increasing N but keeping D too small.

**Chinchilla Optimal Rule**: With compute budget C, optimal when:
```
N_opt ∝ C^0.5
D_opt ∝ C^0.5
```
That is: **increase N and D equally**. With C FLOPs, use approximately:
> Tokens = 20 × Parameters

**For example:**
- GPT-3 (175B params) should be trained on ~3.5T tokens (actual: 300B — *undertraining*).
- Chinchilla (70B params, 1.4T tokens) beats GPT-3 (175B, 300B tokens).

**After Chinchilla:**
- LLaMA-3 (8B): 15T tokens — train **over** chinchilla optimal → inference efficient.
- Phi: quality data, small model — push bounding further.

## 8. Code: Text Generation with GPT-2 from Hugging Face

```python
# pip install transformers torch

import torch
from transformers import GPT2LMHeadModel, GPT2Tokenizer

# ── 1. Load model và tokenizer ────────────────────────────────────
model_name = "gpt2"   # hoặc "gpt2-medium", "gpt2-large", "gpt2-xl"
tokenizer = GPT2Tokenizer.from_pretrained(model_name)
model = GPT2LMHeadModel.from_pretrained(model_name)
model.eval()

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model = model.to(device)

tokenizer.pad_token = tokenizer.eos_token
print(f"GPT-2 parameters: {sum(p.numel() for p in model.parameters()):,}")

# ── 2. Greedy decoding (deterministic, thường lặp lại) ───────────
def greedy_generate(prompt: str, max_new_tokens: int = 100) -> str:
    inputs = tokenizer(prompt, return_tensors="pt").to(device)
    with torch.no_grad():
        output_ids = model.generate(
            **inputs,
            max_new_tokens=max_new_tokens,
            do_sample=False,
        )
    return tokenizer.decode(output_ids[0], skip_special_tokens=True)

# ── 3. Sampling với temperature ───────────────────────────────────
def sample_generate(
    prompt: str,
    max_new_tokens: int = 200,
    temperature: float = 0.8,
    top_p: float = 0.92,
    top_k: int = 50,
) -> str:
    inputs = tokenizer(prompt, return_tensors="pt").to(device)
    with torch.no_grad():
        output_ids = model.generate(
            **inputs,
            max_new_tokens=max_new_tokens,
            do_sample=True,
            temperature=temperature,
            top_p=top_p,
            top_k=top_k,
        )
    return tokenizer.decode(output_ids[0], skip_special_tokens=True)

# ── 4. Beam search (tốt hơn greedy, ít lặp hơn) ──────────────────
def beam_generate(prompt: str, max_new_tokens: int = 100, num_beams: int = 5) -> str:
    inputs = tokenizer(prompt, return_tensors="pt").to(device)
    with torch.no_grad():
        output_ids = model.generate(
            **inputs,
            max_new_tokens=max_new_tokens,
            num_beams=num_beams,
            early_stopping=True,
            no_repeat_ngram_size=3,  # tránh lặp n-gram
        )
    return tokenizer.decode(output_ids[0], skip_special_tokens=True)

# ── 5. Thử nghiệm ─────────────────────────────────────────────────
prompt = "Artificial intelligence is transforming the world because"

print("=== Greedy ===")
print(greedy_generate(prompt, max_new_tokens=80))

print("\n=== Sampling (temperature=0.8) ===")
print(sample_generate(prompt, max_new_tokens=150, temperature=0.8))

print("\n=== Beam Search (5 beams) ===")
print(beam_generate(prompt, max_new_tokens=80, num_beams=5))

# ── 6. Tính perplexity ────────────────────────────────────────────
def compute_perplexity(text: str) -> float:
    """Perplexity thấp hơn = model "tự tin" hơn về text này."""
    inputs = tokenizer(text, return_tensors="pt").to(device)
    input_ids = inputs["input_ids"]

    with torch.no_grad():
        outputs = model(input_ids, labels=input_ids)
        loss = outputs.loss  # cross-entropy loss

    return torch.exp(loss).item()

print(f"\nPerplexity (coherent text): {compute_perplexity('The cat sat on the mat.'):.2f}")
print(f"Perplexity (random text):   {compute_perplexity('xyz purple banana runs 42'):.2f}")
```

**Use larger model (GPT-2 XL or GPT-Neo/GPT-J):**

```python
# GPT-Neo 1.3B (open-source, GPT-3 style)
from transformers import pipeline

generator = pipeline(
    "text-generation",
    model="EleutherAI/gpt-neo-1.3B",
    device=0 if torch.cuda.is_available() else -1,
)

results = generator(
    "Vietnam is a beautiful country",
    max_new_tokens=100,
    temperature=0.9,
    top_p=0.95,
    num_return_sequences=3,   # sinh 3 variations
)

for i, r in enumerate(results):
    print(f"--- Sequence {i+1} ---")
    print(r["generated_text"])
```

## Summary

1. **GPT-1 → GPT-4**: Paradigm shifts from fine-tuning each task to in-context learning and instruction following thanks to scaling.
2. **Causal LM** (next-token prediction) is the simplest objective but powerful enough to learn world knowledge.
3. **Scaling Laws**: Increasing N, D, C all improve performance according to power law; Chinchilla shows need to balance N and D.
4. **Open-source ecosystem**: LLaMA, Mistral, Gemma, Phi provide powerful models without API.
5. **Decoding strategy** (greedy, sampling, beam search) greatly affects the quality and diversity of output.

The next article will delve into **Tokenization** — an under-the-radar but critical platform for all LLMs: BPE, WordPiece, SentencePiece and Tiktoken.
