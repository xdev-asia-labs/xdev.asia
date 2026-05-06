---
id: 019c9619-bb08-7008-c008-bb0800000008
title: 'レッスン 8: GPT およびデコーダーのみのモデル'
slug: bai-8-gpt-va-decoder-only-models
description: >-
  GPT-1 から GPT-4 およびオープンソースの代替手段 (LLaMA、Mistral、Gemma)
  までの道のりをたどってください。因果言語モデリング、自己回帰生成、スケーリング則、および GPT-2 と Hugging Face
  を使用してテキストを生成する方法を理解します。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 7
section_title: 'パート 2: トランスのアーキテクチャ'
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: 'AI と LLM: 基本から高度まで'
  slug: ai-llm-tu-co-ban-den-nang-cao
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 AI と ML — レッスン 7</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 8: GPT およびデコーダーのみのモデル</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI と LLM: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: トランスのアーキテクチャ</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

# レッスン 8: GPT とデコーダーのみのモデル

## 1. GPT-1 (2018) — 教師なし事前トレーニング + 教師あり微調整

2018 年 6 月、OpenAI は **GPT: 生成的事前トレーニングによる言語理解を向上させる** (Radford et al., 2018) を発表しました。 BERT と同じですが、方向性はまったく異なります。

**GPT-1 の核となるアイデア:**
1. **教師なし事前トレーニング**: 次のトークンを予測するという単純な目的で、大量のテキストに対して Transformer Decoder をトレーニングします。
2. **監視付き微調整**: ダウンストリーム タスクごとに、タスク固有のリニア ヘッドを追加して微調整します。

**GPT-1 アーキテクチャ:**
- 12 層トランスフォーマー デコーダー (117M パラメーター)。
- BooksCorpus でトレーニングします (8 億語)。
- コンテキスト ウィンドウ: 512 トークン。

**BERT との違い:**
- **単方向**: 各トークンは前のトークンにのみ関与します (因果関係/自己回帰)。
- 生成に関しては BERT より優れていますが、初期理解タスクに関しては劣ります。

GPT-1 は、個々のタスクごとにゼロからトレーニングされた多くの特殊なモデルのパフォーマンスを上回っており、**ラベルなしデータでの事前トレーニング + 微調整** が非常に強力なパラダイムであることを証明しています。

## 2. GPT-2 (2019) — スケールアップとゼロショット転送

2019 年 2 月、OpenAI は物議を醸す内容で **GPT-2** を発表しました。彼らは当初、偽情報への懸念から **GPT-2** の一般公開を拒否しました**。 （その後、段階的に公開していきました。）

**GPT-2 のブレークスルー:**
- **15 億パラメータ** (GPT-1: 117M) にスケールします。
- **WebText** でトレーニングする — 少なくとも 3 つのカルマを持つ Reddit 送信リンクからの 45 GB のテキスト。
- コンテキスト ウィンドウ: 1024 トークン。

**ゼロショット転送**: GPT-2 は、微調整せずに多くのタスクを実行できます。適切に「プロンプトを表示する」だけです。
```
# Summarization (zero-shot)
prompt = "{article text}\n\nTL;DR:"

# Translation (zero-shot)
prompt = "Translate English to French:\nEnglish: {text}\nFrench:"

# Q&A (zero-shot)
prompt = "Answer the question:\nQ: {question}\nA:"
```

**GPT-2 論文の結論**: 「言語モデルは教師なしのマルチタスク学習者である」 — 事前トレーニングの規模が十分に大きいため、モデルは多くのタスクを独自に学習できます。

## 3. GPT-3 (2020) — 175B パラメーター、コンテキスト内学習

2020 年 5 月、OpenAI は **GPT-3: Language Models are Few-Shot Learners** を発表しました。この論文は AI の世界で波紋を巻き起こしました。

**印象的な数字:**
- **1,750 億パラメータ** (GPT-2: 1.5 億 — 116 倍増加)。
- 最大 3,000 億以上のトークンをトレーニング: Common Crawl、WebText2、Books、Wikipedia。
- トレーニング費用は 460 万米ドル (推定)。

**インコンテキスト学習 (ICL)**: 重みを更新せずに、**プロンプト内**で提供される例から学習する機能:

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

**ICL はなぜ機能するのですか?** これは未解決の研究課題のままです。仮説:
- モデルは事前トレーニングからタスクをすでに「認識」しており、数ショットのサンプルはその知識を「アクティブ化」するだけです。
- モデルは、前方パスで暗黙的に勾配降下法を実行します。

**緊急機能**: GPT-3 は、思考連鎖推論、算術 (部分的)、コード生成など、**明示的にトレーニングされていない** 機能を実証し始めます。

## 4. GPT-4 (2023) — マルチモーダル、RLHF、より安全

2023 年 3 月、OpenAI は **GPT-4** を発表しましたが、アーキテクチャの詳細やパラメーター数は明らかにしませんでした (競争上の理由から)。知っておくべきこと:

**主な改善点:**
- **マルチモーダル**: GPT-4V は画像入力を受信できます (GPT-4o: 音声も)。
- **RLHF (人間のフィードバックからの強化学習)**: モデルを人間の好みに合わせて調整し、有害な出力を削減します。
- **詳細な内容**: GPT-4-32k は 32,000 トークンをサポートします (GPT-3.5 の 4,096 トークン)。
- **推論の改善**: MMLU、HumanEval、司法試験が大幅に改善されました。
- **システム プロンプト**: 動作をカスタマイズするための明示的なメカニズム。

**専門家の混合 (MoE)** — 非公式情報源によると、GPT-4 は最大 8 人の専門家による MoE を使用し、各トークンは 2 人の専門家のみをアクティブ化するため、推論がより効率的になります。

**GPT-4 のベンチマーク結果:**
- 司法試験: ～ 90 パーセンタイル (対 GPT-3.5: ～ 10 パーセンタイル)。
- MMLU: 86.4% (対ヒト: ~89%)。
- HumanEval (コード): 67% (対 GPT-3.5: 48%)。

## 5. 因果言語モデリング — 次のトークンの予測

すべての GPT モデルは同じ目的、**因果言語モデリング (CLM)** を使用します。

与えられたトークンの文字列 `x_1, x_2, ..., x_n`、最大化:

$$\mathcal{L} = \sum_{t=1}^{n} \log P(x_t | x_1, x_2, ..., x_{t-1}; \theta)$$

**CLM はなぜシンプルでありながら強力なのでしょうか?**
1. データにラベルは必要ありません。あらゆるテキストがトレーニング データです。
2. 客観的な自己監視 — 無限のスケール。
3. 次のトークンを適切に予測するには、モデルが構文、セマンティクス、事実、推論を理解する必要があります。
4. 世界の知識は重みに「圧縮」されます。

**自己回帰生成**: 推論時に、各トークンを 1 つずつ生成します。

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

## 6. オープンソースの代替手段

2023 年以降、オープンソース LLM エコシステムは爆発的に拡大しています。

### LLaMA (メタ AI、2023-2024)
- **LLaMA-1** (2023 年 2 月): 7B ～ 65B パラメータ、1.4T トークンでトレーニング。
- **LLaMA-2** (2023 年 7 月): トレーニング、2T トークン、チャット調整されたバリアントが改善されました。
- **LLaMA-3** (2024 年 4 月): 8B および 70B、15T トークン、128K コンテキストでトレーニング。
- **LLaMA-3.1** (2024 年 7 月): 405B、多言語が改善されました。

**GPT と比較したアーキテクチャの改善:**
- 絶対 PE の代わりに **RoPE** (回転位置埋め込み)。
- FFN での ReLU の代わりに **SwiGLU** をアクティブ化します。
- **グループ化されたクエリ アテンション (GQA)** - KV キャッシュを削減し、推論を高速化します。
- LayerNorm の代わりに **RMSNorm** — より単純で同等です。

### ミストラル (2023-2024)
- **Mistral-7B**: わずか 7B のパラメータで LLaMA-2-13B を上回ります。効率が最も重要です。
- **スライディング ウィンドウの注意**: 固定ウィンドウで参加し、メモリ O(n²) → O(n) を削減します。
- **Mixtral 8x7B**: エキスパートの混合 — 合計パラメータ 46.7B、トークンごとに 12.9B がアクティブ。

### ジェマ (Google、2024)
- **Gemma-2B および 7B**: ジェミニから蒸留され、オープンウェイト。
- マルチクエリ アテンション、RoPE、GeGLU アクティベーション。
- 特にコーディングにおいて、サイズに対して優れたパフォーマンス。

### アフリカ (マイクロソフト、2023 ～ 2024 年)
- **Phi-1** (1.3B): 主に「教科書品質」の合成データに基づいてトレーニングします。
- **Phi-2** (2.7B): 多くの大型モデルを何度も上回ります。
- **Phi-3** (3.8B): Mixtral-8x7B と競合します。
- 小規模モデル領域で **データ品質 > データ量** を証明します。

|モデル |パラメータ |開ける？ |注目すべき |
|---|---|---|---|
| GPT-4 | ~1.8T (MoE) |いいえ |全体的に最高 |
| LLaMA-3.1-70B | 70B |はい |ベストオープン70B |
|ミストラル-7B | 7B |はい |ベスト7B |効率
|ミクストラル-8x7B | 46.7B (アクティブ 12.9B) |はい |最高の萌えオープン |
|ジェマ-7B | 7B |はい |強力な推論 |
|ファイ3ミニ | 3.8B |はい |最高の小型モデル |

## 7. スケーリングの法則 — コンピューティング最適化トレーニング

**カプランら。 (2020) — OpenAI スケーリングの法則:**
モデルのパフォーマンス (クロスエントロピー損失) は、次のようなべき乗則に従って低下します。
- パラメータの数 N。
- データセットのサイズ D.
- C を計算します。

結論: コンピューティング バジェットが固定されている場合、**モデル サイズを増やす方が効果的**で、データを増やしたりトレーニングを長くしたりできます。

**チンチラ (ホフマン他、2022) — DeepMind:**
カプランのスケーリング則を再検討して、カプランが N を増やしても D を小さくしすぎることで、モデルの**トレーニングが不十分**であることを発見してください。

**チンチラ最適ルール**: コンピューティング バジェット C の場合、次の場合に最適です。
```
N_opt ∝ C^0.5
D_opt ∝ C^0.5
```
つまり、**N と D を均等に増やします**。 C FLOP では、次のように使用します。
> トークン = 20 × パラメータ

**例:**
- GPT-3 (175B パラメータ) は、~3.5T トークンでトレーニングする必要があります (実際: 300B — *トレーニング不足*)。
- チンチラ (70B パラメータ、1.4T トークン) が GPT-3 (175B、300B トークン) を破ります。

**チンチラ後:**
- LLaMA-3 (8B): 15T トークン — **チンチラを最適にトレーニングし、効率的に推論します。
- ファイ: 高品質のデータ、小さなモデル — 境界をさらに押し広げます。

## 8. コード: ハグフェイスからの GPT-2 によるテキスト生成

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

**より大きなモデル (GPT-2 XL または GPT-Neo/GPT-J) を使用してください:**

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

## 概要

1. **GPT-1 → GPT-4**: パラダイムは、各タスクの微調整から、スケーリングのおかげで、コンテキスト内の学習と指導に移行します。
2. **Causal LM** (ネクストトークン予測) は最も単純な目的ですが、世界の知識を学ぶのに十分強力です。
3. **スケーリングの法則**: N、D、C を増やすと、べき乗則に従ってパフォーマンスが向上します。チンチラショーにはNとDのバランスが必要です。
4. **オープンソース エコシステム**: LLaMA、Mistral、Gemma、Phi は API なしで強力なモデルを提供します。
5. **デコード戦略** (貪欲、サンプリング、ビームサーチ) は、出力の品質と多様性に大きく影響します。

次の記事では、BPE、WordPiece、SentencePiece、Tiktoken など、すべての LLM にとって目立たないものの重要なプラットフォームである **トークン化** について詳しく説明します。
