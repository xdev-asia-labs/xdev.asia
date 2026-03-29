---
id: 019c9619-bb08-7008-c008-bb0800000008
title: 'Bài 8: GPT và Decoder-only Models'
slug: bai-8-gpt-va-decoder-only-models
description: >-
  Theo dõi hành trình từ GPT-1 đến GPT-4 và các open-source alternatives
  (LLaMA, Mistral, Gemma). Hiểu Causal Language Modeling, autoregressive
  generation, Scaling Laws và cách dùng GPT-2 với Hugging Face để sinh văn bản.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 7
section_title: "Phần 2: Kiến trúc Transformer"
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: "AI & LLM: Từ Cơ bản đến Nâng cao"
  slug: ai-llm-tu-co-ban-den-nang-cao
---

# Bài 8: GPT và Decoder-only Models

## 1. GPT-1 (2018) — Unsupervised Pre-training + Supervised Fine-tuning

Tháng 6 năm 2018, OpenAI công bố **GPT: Improving Language Understanding by Generative Pre-training** (Radford et al., 2018). Cùng thời điểm với BERT nhưng theo hướng hoàn toàn khác.

**Ý tưởng cốt lõi của GPT-1:**
1. **Unsupervised pre-training**: Train Transformer Decoder trên lượng text khổng lồ với objective đơn giản — predict next token.
2. **Supervised fine-tuning**: Với mỗi downstream task, thêm một task-specific linear head và fine-tune.

**Kiến trúc GPT-1:**
- 12-layer Transformer Decoder (117M parameters).
- Train trên BooksCorpus (800M words).
- Context window: 512 tokens.

**Điểm khác biệt với BERT:**
- **Unidirectional**: Mỗi token chỉ attend vào các token trước đó (causal/autoregressive).
- Tốt hơn BERT cho generation, nhưng yếu hơn cho understanding tasks lúc đầu.

GPT-1 đã vượt performance của nhiều specialized models được train từ đầu cho từng task riêng biệt — chứng minh rằng **pre-training trên unlabeled data + fine-tuning** là một paradigm rất mạnh.

## 2. GPT-2 (2019) — Scale Up và Zero-shot Transfer

Tháng 2 năm 2019, OpenAI công bố **GPT-2** với một thông báo gây tranh cãi: họ ban đầu **từ chối public release** vì lo ngại disinformation. (Sau đó họ public dần theo từng giai đoạn.)

**Điểm đột phá của GPT-2:**
- Scale lên **1.5 tỷ parameters** (GPT-1: 117M).
- Train trên **WebText** — 45GB text từ các outbound links của Reddit với ít nhất 3 karma.
- Context window: 1024 tokens.

**Zero-shot Transfer**: GPT-2 có thể thực hiện nhiều tasks mà không cần fine-tuning — chỉ cần "prompt" đúng cách:
```
# Summarization (zero-shot)
prompt = "{article text}\n\nTL;DR:"

# Translation (zero-shot)
prompt = "Translate English to French:\nEnglish: {text}\nFrench:"

# Q&A (zero-shot)
prompt = "Answer the question:\nQ: {question}\nA:"
```

**Kết luận của GPT-2 paper**: "Language models are unsupervised multitask learners" — scale pre-training đủ lớn, mô hình tự học được nhiều tasks.

## 3. GPT-3 (2020) — 175B Parameters, In-context Learning

Tháng 5 năm 2020, OpenAI công bố **GPT-3: Language Models are Few-Shot Learners** — paper tạo ra cơn địa chấn trong giới AI.

**Con số ấn tượng:**
- **175 tỷ parameters** (GPT-2: 1.5B — tăng 116 lần).
- Train trên ~300 tỷ tokens: Common Crawl, WebText2, Books, Wikipedia.
- $4.6 triệu USD chi phí training (ước tính).

**In-context Learning (ICL)**: Khả năng học từ các ví dụ được cung cấp **trong prompt** mà không cần update weights:

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

**Tại sao ICL hoạt động?** Đây vẫn là câu hỏi mở trong nghiên cứu. Hypotheses:
- Mô hình đã "biết" task từ pre-training, few-shot examples chỉ "activate" knowledge đó.
- Mô hình implicitly thực hiện gradient descent trong forward pass.

**Emergent capabilities**: GPT-3 bắt đầu thể hiện những khả năng **không được train explicit** như chain-of-thought reasoning, arithmetic (một phần), code generation.

## 4. GPT-4 (2023) — Multimodal, RLHF, Much Safer

Tháng 3 năm 2023, OpenAI công bố **GPT-4** nhưng không tiết lộ architecture details hay parameter count (vì lý do cạnh tranh). Những gì biết được:

**Cải tiến chính:**
- **Multimodal**: GPT-4V có thể nhận image input (GPT-4o: cả audio).
- **RLHF (Reinforcement Learning from Human Feedback)**: Align model với human preferences, giảm harmful outputs.
- **Longer context**: GPT-4-32k hỗ trợ 32,000 tokens (vs 4,096 của GPT-3.5).
- **Better reasoning**: Significantly improved on MMLU, HumanEval, Bar Exam.
- **System prompt**: Explicit mechanism để customize behavior.

**Mixture of Experts (MoE)** — theo các nguồn không chính thức, GPT-4 dùng MoE với ~8 experts, mỗi token chỉ activate 2 experts → inference efficient hơn.

**Kết quả benchmark của GPT-4:**
- Bar Exam: ~90th percentile (vs GPT-3.5: ~10th percentile).
- MMLU: 86.4% (vs human: ~89%).
- HumanEval (code): 67% (vs GPT-3.5: 48%).

## 5. Causal Language Modeling — Next-token Prediction

Tất cả GPT models đều dùng cùng một objective: **Causal Language Modeling (CLM)**.

Cho chuỗi tokens `x_1, x_2, ..., x_n`, maximize:

$$\mathcal{L} = \sum_{t=1}^{n} \log P(x_t | x_1, x_2, ..., x_{t-1}; \theta)$$

**Tại sao CLM đơn giản nhưng mạnh?**
1. Data không cần label — bất kỳ text nào cũng là training data.
2. Objective self-supervised — scale vô hạn.
3. Để predict next token tốt, model phải hiểu syntax, semantics, facts, reasoning.
4. World knowledge được "compress" vào weights.

**Autoregressive Generation**: Khi inference, generate từng token một:

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

Kể từ 2023, hệ sinh thái open-source LLM bùng nổ:

### LLaMA (Meta AI, 2023-2024)
- **LLaMA-1** (Feb 2023): 7B đến 65B params, train trên 1.4T tokens.
- **LLaMA-2** (Jul 2023): Cải thiện training, 2T tokens, chat-tuned variants.
- **LLaMA-3** (Apr 2024): 8B và 70B, train trên 15T tokens, 128K context.
- **LLaMA-3.1** (Jul 2024): 405B, multilingual improved.

**Cải tiến kiến trúc vs GPT:**
- **RoPE** (Rotary Position Embedding) thay vì absolute PE.
- **SwiGLU** activation thay vì ReLU trong FFN.
- **Grouped Query Attention (GQA)** — giảm KV-cache, tăng tốc inference.
- **RMSNorm** thay vì LayerNorm — đơn giản hơn, tương đương.

### Mistral (2023-2024)
- **Mistral-7B**: Vượt LLaMA-2-13B với chỉ 7B params — efficiency is king.
- **Sliding Window Attention**: Attend trong window cố định, giảm memory O(n²) → O(n).
- **Mixtral 8x7B**: Mixture of Experts — 46.7B total params, 12.9B active per token.

### Gemma (Google, 2024)
- **Gemma-2B và 7B**: Distilled từ Gemini, open weights.
- Multi-query attention, RoPE, GeGLU activation.
- Strong performance for size, especially on coding.

### Phi (Microsoft, 2023-2024)
- **Phi-1** (1.3B): Train chủ yếu trên "textbook quality" synthetic data.
- **Phi-2** (2.7B): Vượt nhiều models lớn hơn nhiều lần.
- **Phi-3** (3.8B): Cạnh tranh với Mixtral-8x7B.
- Chứng minh **data quality > data quantity** ở small model regime.

| Model | Params | Open? | Notable |
|---|---|---|---|
| GPT-4 | ~1.8T (MoE) | Không | Best overall |
| LLaMA-3.1-70B | 70B | Có | Best open 70B |
| Mistral-7B | 7B | Có | Best 7B efficiency |
| Mixtral-8x7B | 46.7B (12.9B active) | Có | Best MoE open |
| Gemma-7B | 7B | Có | Strong reasoning |
| Phi-3-mini | 3.8B | Có | Best small model |

## 7. Scaling Laws — Compute-Optimal Training

**Kaplan et al. (2020) — OpenAI Scaling Laws:**
Model performance (cross-entropy loss) giảm theo power law với:
- Số parameters N.
- Dataset size D.
- Compute C.

Kết luận: Với fixed compute budget, **tăng model size là hiệu quả hơn** tăng data hoặc train lâu hơn.

**Chinchilla (Hoffmann et al., 2022) — DeepMind:**
Revisit Kaplan's scaling laws và phát hiện ra: Kaplan đã **undertrain** models bằng cách tăng N nhưng giữ D quá nhỏ.

**Chinchilla Optimal Rule**: Với compute budget C, tối ưu khi:
```
N_opt ∝ C^0.5
D_opt ∝ C^0.5
```
Tức là: **tăng N và D đều nhau**. Với C FLOPs, dùng khoảng:
> Tokens = 20 × Parameters

**Ví dụ:**
- GPT-3 (175B params) nên được train trên ~3.5T tokens (thực tế: 300B — *undertraining*).
- Chinchilla (70B params, 1.4T tokens) outperform GPT-3 (175B, 300B tokens).

**Sau Chinchilla:**
- LLaMA-3 (8B): 15T tokens — train **over** chinchilla optimal → inference efficient.
- Phi: quality data, small model — push bounding thêm.

## 8. Code: Text Generation với GPT-2 từ Hugging Face

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

**Dùng model lớn hơn (GPT-2 XL hoặc GPT-Neo/GPT-J):**

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

## Tóm tắt

1. **GPT-1 → GPT-4**: Paradigm shift từ fine-tuning mỗi task sang in-context learning và instruction following nhờ scale.
2. **Causal LM** (next-token prediction) là objective đơn giản nhất nhưng đủ mạnh để learn world knowledge.
3. **Scaling Laws**: Tăng N, D, C đều cải thiện performance theo power law; Chinchilla cho thấy cần balance N và D.
4. **Open-source ecosystem**: LLaMA, Mistral, Gemma, Phi cung cấp models mạnh không cần API.
5. **Decoding strategy** (greedy, sampling, beam search) ảnh hưởng lớn đến quality và diversity của output.

Bài tiếp theo sẽ đi sâu vào **Tokenization** — nền tảng ít được chú ý nhưng critical cho mọi LLM: BPE, WordPiece, SentencePiece và Tiktoken.
