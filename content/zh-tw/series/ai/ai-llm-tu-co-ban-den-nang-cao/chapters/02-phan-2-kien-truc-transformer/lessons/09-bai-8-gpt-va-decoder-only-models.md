---
id: 019c9619-bb08-7008-c008-bb0800000008
title: 第 8 課：GPT 和僅解碼器模型
slug: bai-8-gpt-va-decoder-only-models
description: >-
  跟隨從 GPT-1 到 GPT-4 和開源替代品（LLaMA、Mistral、Gemma）的旅程。了解因果語言模型、自回歸生成、縮放定律以及如何使用
  GPT-2 和 Hugging Face 來產生文字。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 7
section_title: 第 2 部分：Transformer 架構
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: 人工智慧和法學碩士：從基礎到高級
  slug: ai-llm-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 人工智慧與機器學習 — 第 7 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 8 課：GPT 和僅解碼器模型</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">人工智慧和法學碩士：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：Transformer 架構</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

# 第 8 課：GPT 與僅解碼器模型

## 1. GPT-1 (2018) — 無監督預訓練 + 有監督微調

2018 年 6 月，OpenAI 宣布**GPT：透過產生預訓練來提高語言理解**（Radford 等人，2018）。與 BERT 同時，但方向完全不同。

**GPT-1的核心思想：**
1. **無監督預訓練**：在大量文本上訓練 Transformer Decoder，目標很簡單－預測下一個標記。
2. **監督微調**：對於每個下游任務，添加特定於任務的線性頭並進行微調。

**GPT-1 架構：**
- 12層Transformer解碼器（117M參數）。
- 在 BooksCorpus 上進行訓練（8 億字）。
- 上下文視窗：512 個標記。

**與 BERT 的差別：**
- **單向**：每個令牌僅參與先前的令牌（因果/自回歸）。
- 生成優於 BERT，但初始理解任務較弱。

GPT-1 已經超越了許多針對每個單獨任務從頭開始訓練的專用模型的性能 - 證明**未標記資料的預訓練 + 微調**是一個非常強大的範例。

## 2. GPT-2 (2019) — 擴展與零樣本傳輸

2019 年 2 月，OpenAI 宣布了 **GPT-2**，並發布了一項有爭議的公告：由於擔心虛假信息，他們最初**拒絕公開發布**。 （然後他們逐漸分階段上市。）

**GPT-2突破：**
- 擴展到 **15 億個參數** (GPT-1: 117M)。
- 在 **WebText** 上進行訓練 — 來自 Reddit 出站連結的 45GB 文本，至少有 3 個業力。
- 上下文視窗：1024 個令牌。

**零次傳輸**：GPT-2 無需微調即可執行許多任務 - 只需正確「提示」：
```
# Summarization (zero-shot)
prompt = "{article text}\n\nTL;DR:"

# Translation (zero-shot)
prompt = "Translate English to French:\nEnglish: {text}\nFrench:"

# Q&A (zero-shot)
prompt = "Answer the question:\nQ: {question}\nA:"
```

**GPT-2論文的結論**：「語言模型是無監督的多任務學習器」－預訓練規模夠大，模型可以自己學習很多任務。

## 3. GPT-3 (2020) — 175B 參數，情境學習

2020 年 5 月，OpenAI 發布了《**GPT-3：語言模型是少樣本學習者**》——這篇論文在人工智慧界引起了轟動。

**令人印象深刻的數字：**
- **1750 億個參數**（GPT-2：1.5B — 增加 116 倍）。
- 訓練超過 3000 億個代幣：Common Crawl、WebText2、書籍、維基百科。
- 460 萬美元的培訓費用（估計）。

**情境學習 (ICL)**：能夠從提示中**提供的範例中學習，而無需更新權重：

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

**為什麼 ICL 有效？ ** 這仍然是一個懸而未決的研究問題。假設：
- 模型已經從預訓練中「了解」了任務，少數樣本僅「激活」了該知識。
- 模型在前向傳播中隱式執行梯度下降。

**新興能力**：GPT-3 開始展示**未明確訓練的**能力，例如思想鏈推理、算術（部分）、代碼生成。

## 4. GPT-4 (2023) — 多式聯運、RLHF、更安全

2023 年 3 月，OpenAI 宣布了**GPT-4**，但沒有透露架構細節或參數數量（出於競爭原因）。要知道什麼：

**主要改進：**
- **多模式**：GPT-4V 可以接收影像輸入（GPT-4o：也可以接收音訊）。
- **RLHF（人類回饋強化學習）**：使模型與人類偏好保持一致，減少有害輸出。
- **更長的上下文**：GPT-4-32k 支援 32,000 個令牌（GPT-3.5 支援 4,096 個令牌）。
- **更好的推理**：MMLU、HumanEval、律師資格考試顯著改進。
- **系統提示**：自訂行為的明確機制。

**混合專家 (MoE)** — 根據非官方消息，GPT-4 使用 MoE 約 8 名專家，每個代幣僅激活 2 名專家→更有效率的推理。

**GPT-4 的基準測試結果：**
- 律師資格考試：~90%（相對於 GPT-3.5：~10%）。
- MMLU：86.4%（相對於人類：~89%）。
- HumanEval（代碼）：67%（相對於 GPT-3.5：48%）。

## 5. 因果語言建模－下一個標記預測

所有 GPT 模型都使用相同的目標：**因果語言建模 (CLM)**。

給定的標記字串 `x_1, x_2, ..., x_n`，最大化：

$$\mathcal{L} = \sum_{t=1}^{n} \log P(x_t | x_1, x_2, ..., x_{t-1}; \theta)$$

**為什麼 CLM 簡單但功能強大？ **
1. 資料不需要標籤－任何文字都是訓練資料。
2.客觀自我監督－無限規模。
3. 為了很好地預測下一個 token，模型必須理解文法、語意、事實、推理。
4.世界知識被「壓縮」成權重。

**自迴歸產生**：推理時，一一產生每個token：

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

## 6. 開源替代方案

自 2023 年以來，開源 LLM 生態系統正在爆炸性成長：

### LLaMA（元人工智慧，2023-2024）
- **LLaMA-1**（2023 年 2 月）：7B 至 65B 參數，在 1.4T 令牌上進行訓練。
- **LLaMA-2**（2023 年 7 月）：改進的訓練、2T 代幣、聊天調整的變體。
- **LLaMA-3**（2024 年 4 月）：8B 和 70B，在 15T 令牌、128K 上下文上進行訓練。
- **LLaMA-3.1**（2024 年 7 月）：405B，多語言改進。

**與 GPT 相比的架構改進：**
- **RoPE**（旋轉位置嵌入）而不是絕對 PE。
- **SwiGLU** 啟動而不是 FFN 中的 ReLU。
- **分組查詢注意力（GQA）** — 減少 KV 緩存，加快推理速度。
- **RMSNorm** 而不是 LayerNorm — 更簡單，等效。

### 米斯特拉爾 (2023-2024)
- **Mistral-7B**：僅用 7B 參數就超越了 LLaMA-2-13B — 效率為王。
- **滑動視窗注意力**：在固定視窗中參與，減少記憶體 O(n²) → O(n)。
- **Mixtral 8x7B**：專家混合 — 總參數 46.7B，每個代幣 12.9B 活躍。

### 傑瑪（谷歌，2024）
- **Gemma-2B 和 7B**：由 Gemini 蒸餾而來，開放式重量。
- 多重查詢注意力、RoPE、GeGLU 啟動。
- 強大的尺寸性能，尤其是編碼方面。

### 非洲（微軟，2023-2024）
- **Phi-1** (1.3B)：主要基於「教科書品質」的合成資料進行訓練。
- **Phi-2** (2.7B)：多次超過許多較大型號。
- **Phi-3** (3.8B)：與 Mixtral-8x7B 競爭。
- 在小模型體系中證明**資料品質>資料數量**。

|型號|參數|開啟？ |值得注意 |
|---|---|---|---|
| GPT-4 | ~1.8T（教育部）|沒有 |最佳整體|
| LLaMA-3.1-70B | 70B | 70B是的 |最佳開70B |
|米斯特拉爾-7B | 7B|是的 |最佳 7B |效率
| Mixtral-8x7B | 46.7B（12.9B 活動）|是的 |最佳教育部開放 |
|傑瑪-7B | 7B|是的 |推理力強 |
| Phi-3-迷你 | 3.8B|是的 |最佳小型號|

## 7. 擴展法則－計算最優訓練

**卡普蘭等。 (2020) — OpenAI 擴充法則：**
模型表現（交叉熵損失）根據冪律降低：
- 參數數量 N。
- 資料集大小 D。
- 計算C。

結論：在固定的計算預算下，**增加模型大小更有效**增加資料或訓練更長的時間。

**Chinchilla（Hoffmann 等人，2022）— DeepMind：**
重新審視卡普蘭的縮放定律並發現：卡普蘭透過增加 N 但將 D 保持得太小，使得模型**訓練不足**。

**Chinchilla 最優規則**：使用計算預算 C，在以下情況下最優：
```
N_opt ∝ C^0.5
D_opt ∝ C^0.5
```
即：**同等增加N和D**。對於 C FLOP，大約使用：
> 代幣 = 20 × 參數

**例如：**
- GPT-3（175B 參數）應該在 ~3.5T 令牌上進行訓練（實際：300B — *訓練不足*）。
- Chinchilla（70B 參數，1.4T 代幣）擊敗 GPT-3（175B，300B 代幣）。

**龍貓之後：**
- LLaMA-3 (8B)：15T 代幣 — 訓練**超過** chinchilla 最適 → 推理效率。
- Phi：高品質數據，小模型－進一步推動邊界。

## 8. 代碼：使用 Hugging Face 的 GPT-2 產生文本

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

**使用較大的型號（GPT-2 XL 或 GPT-Neo/GPT-J）：**

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

## 總結

1. **GPT-1 → GPT-4**：由於規模化，範式從微調每個任務轉變為情境學習和指令遵循。
2. **因果LM**（下一個標記預測）是最簡單的目標，但足夠強大來學習世界知識。
3. **縮放法則**：增加N、D、C都會根據冪律提高性能；龍貓顯示需要平衡 N 和 D。
4. **開源生態系統**：LLaMA、Mistral、Gemma、Phi 提供強大的模型，無需 API。
5. **解碼策略**（貪婪、取樣、波束搜尋）極大地影響輸出的品質和多樣性。

下一篇文章將深入探討 **Tokenization**——一個不為人知但對所有法學碩士來說至關重要的平台：BPE、WordPiece、SentencePiece 和 Tiktoken。
