---
id: 019c9619-ac07-7007-d107-ac0700000007
title: 'レッスン 7: LLMOps と MLOps — パラダイム シフト'
slug: bai-7-llmops-vs-mlops
description: >-
  LLMOps パラダイム: 従来の MLOps との違い。 LLM 特有の課題: 迅速なエンジニアリング、評価、幻覚、コスト管理。 LLMOps
  スタックの概要。いつ微調整するか、エンジニアにプロンプ​​トするか。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 6
section_title: 'パート 3: LLMOps'
course:
  id: 019c9619-aa07-7007-b007-aa0700000007
  title: 'MLOps と LLMOps: AI を本番環境に導入する'
  slug: mlops-llmops
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7341" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7341)"/>

  <!-- Decorations -->
  <g>
    <circle cx="670" cy="200" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="740" cy="170" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="810" cy="140" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="880" cy="110" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="950" cy="80" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="160" x2="1100" y2="240" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="190" x2="1050" y2="260" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="990.3108891324554,142.5 990.3108891324554,177.5 960,195 929.6891108675446,177.5 929.6891108675446,142.5 960,125" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 AI と ML — レッスン 6</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 7: LLMOps と MLOps — パラダイム シフト</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">MLOps と LLMOps: AI を本番環境に導入する</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: LLMOps</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

MLOps は困難ですが、LLMOps はさらに困難です。 LLM は従来のモデルとは異なります。ゼロからトレーニングする必要がなく、評価が非常に難しく、推論コストが 100 倍高くなります。

> 🎯 **LLMOps** = LLM アプリケーションを実稼働環境に導入する効果的なプロセス。

---

## 1. MLOps と LLMOps — 違いは何ですか?

```
Traditional ML:
  Data → Feature Eng → Train Model → Deploy → Monitor
  ✅ Model nhỏ (MB)
  ✅ Train trên dataset nhỏ (GB)
  ✅ Evaluation rõ ràng (accuracy, F1)
  ✅ Inference rẻ (<1ms)

LLM:
  Prompt → LLM API → Post-process → Deploy → Monitor
  ❌ Model rất lớn (100B params, 100GB+)
  ❌ Không train (hoặc fine-tune rất đắt)
  ❌ Evaluation mơ hồ (chất lượng text?)
  ❌ Inference đắt ($0.01-$0.10/request)
```

### 詳細な比較:

|側面 |従来の ML | LLMOps |
|----------|------|----------|
| **モデル** |ゼロからトレーニング |事前トレーニング済み、プロンプト/微調整 |
| **データ** |構造化 (表形式) |非構造化 (テキスト、コード) |
| **トレーニング** |時間-日 |週-月 (または N/A) |
| **コスト** |電車は高く、サービスは安い |列車は非常に高価で、サービスは高価です。
| **評価** |メトリクスのクリア (acc、F1) |主観 + 多次元 |
| **バージョン管理** |モデルの重み |プロンプト + モデルの選択 |
| **展開** |セルフホストが簡単 | API 呼び出しまたは巨大な GPU サーバー |
| **モニタリング** |データドリフト |即時漂流、幻覚、中毒 |
| **障害モード** |間違った予測 |幻覚、有害なコンテンツ |

---

## 2. LLMOps スタック

```
┌─────────────────────────────────────────────────┐
│                  LLMOps Stack                    │
├──────────────┬──────────────────────────────────┤
│ Layer        │ Components                        │
├──────────────┼──────────────────────────────────┤
│ Foundation   │ OpenAI, Anthropic, Google, Llama  │
│ Models       │ Mistral, Cohere                   │
├──────────────┼──────────────────────────────────┤
│ Prompt       │ Prompt templates, versioning      │
│ Management   │ A/B testing, optimization         │
├──────────────┼──────────────────────────────────┤
│ RAG          │ Vector DBs, embeddings, chunking  │
│ Pipeline     │ retrieval, re-ranking             │
├──────────────┼──────────────────────────────────┤
│ Orchestration│ LangChain, LlamaIndex, DSPy       │
│              │ Agents, chains, tool use           │
├──────────────┼──────────────────────────────────┤
│ Evaluation   │ Human eval, LLM-as-judge          │
│              │ Benchmarks, A/B testing            │
├──────────────┼──────────────────────────────────┤
│ Observability│ LangSmith, Langfuse, Arize        │
│              │ Tracing, logging, debugging        │
├──────────────┼──────────────────────────────────┤
│ Guardrails   │ Content filtering, PII detection   │
│              │ Output validation, rate limiting    │
├──────────────┼──────────────────────────────────┤
│ Cost Mgmt    │ Caching, routing, token counting   │
│              │ Budget alerts, model selection      │
└──────────────┴──────────────────────────────────┘
```

---

## 3. LLM アプリケーション パターン

### 3.1 直接 API 呼び出し

```python
"""Pattern 1: Direct API call — đơn giản nhất"""
from openai import OpenAI

client = OpenAI()

def classify_sentiment(text):
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "Classify sentiment as positive/negative/neutral. Return ONLY the label."},
            {"role": "user", "content": text},
        ],
        temperature=0,
        max_tokens=10,
    )
    return response.choices[0].message.content.strip()

# Simple, nhưng:
# ❌ Không cache
# ❌ Không track prompts
# ❌ Không monitor
# ❌ Không fallback
```

### 3.2 本番環境に対応したパターン

```python
"""Pattern 2: Production-ready LLM call"""
from openai import OpenAI
import hashlib
import json
import time
import logging
from functools import lru_cache

logger = logging.getLogger(__name__)

class LLMService:
    def __init__(self):
        self.client = OpenAI()
        self.cache = {}  # Redis in production
        self.total_tokens = 0
        self.total_cost = 0

    def call(self, messages, model="gpt-4o-mini", **kwargs):
        """Production LLM call with caching, logging, and fallback"""

        # 1. Check cache
        cache_key = self._cache_key(messages, model)
        if cache_key in self.cache:
            logger.info(f"Cache hit: {cache_key[:8]}")
            return self.cache[cache_key]

        # 2. Call with retry
        for attempt in range(3):
            try:
                start = time.time()
                response = self.client.chat.completions.create(
                    model=model,
                    messages=messages,
                    **kwargs,
                )
                latency = time.time() - start

                # 3. Track usage
                usage = response.usage
                self.total_tokens += usage.total_tokens
                cost = self._calculate_cost(model, usage)
                self.total_cost += cost

                # 4. Log
                logger.info(
                    f"LLM call: model={model}, tokens={usage.total_tokens}, "
                    f"latency={latency:.2f}s, cost=${cost:.4f}"
                )

                result = response.choices[0].message.content
                self.cache[cache_key] = result
                return result

            except Exception as e:
                logger.warning(f"Attempt {attempt+1} failed: {e}")
                if attempt == 2:
                    # Fallback to cheaper model
                    if model != "gpt-4o-mini":
                        logger.info("Falling back to gpt-4o-mini")
                        return self.call(messages, model="gpt-4o-mini", **kwargs)
                    raise
                time.sleep(2 ** attempt)

    def _cache_key(self, messages, model):
        content = json.dumps({"messages": messages, "model": model})
        return hashlib.md5(content.encode()).hexdigest()

    def _calculate_cost(self, model, usage):
        prices = {
            "gpt-4o": {"input": 2.50/1e6, "output": 10.0/1e6},
            "gpt-4o-mini": {"input": 0.15/1e6, "output": 0.60/1e6},
        }
        p = prices.get(model, prices["gpt-4o-mini"])
        return usage.prompt_tokens * p["input"] + \
               usage.completion_tokens * p["output"]
```

### 3.3 RAG パターン

```python
"""Pattern 3: RAG (Retrieval-Augmented Generation)"""
from openai import OpenAI
import chromadb

class RAGService:
    def __init__(self):
        self.llm = OpenAI()
        self.db = chromadb.HttpClient(host="localhost", port=8000)
        self.collection = self.db.get_collection("knowledge_base")

    def query(self, question, top_k=5):
        # 1. Retrieve relevant documents
        results = self.collection.query(
            query_texts=[question],
            n_results=top_k,
        )

        # 2. Build context
        context = "\n\n".join(results['documents'][0])

        # 3. Generate answer
        response = self.llm.chat.completions.create(
            model="gpt-4o",
            messages=[
                {"role": "system", "content": f"""
Answer based ONLY on the provided context.
If the answer is not in the context, say "I don't know."

Context:
{context}
"""},
                {"role": "user", "content": question},
            ],
        )

        return {
            "answer": response.choices[0].message.content,
            "sources": results['metadatas'][0],
        }
```

---

## 4. LLM の評価 — 大きな課題

### 4.1 問題

```
Traditional ML: accuracy = 0.92 → Good!

LLM: "Summarize this article" → ???
  - Chính xác?
  - Đầy đủ?
  - Ngắn gọn?
  - Đúng tone?
  - Không hallucinate?
  → Rất khó đo tự động
```

### 4.2 評価フレームワーク

```python
"""LLM Evaluation pipeline"""
from openai import OpenAI
import json

client = OpenAI()

def evaluate_with_llm_judge(question, answer, reference_answer=None):
    """LLM-as-a-Judge evaluation"""
    eval_prompt = f"""
Evaluate the following answer on these criteria (1-5 scale):

1. **Correctness**: Is the answer factually correct?
2. **Completeness**: Does it cover all key points?
3. **Conciseness**: Is it appropriately concise?
4. **Relevance**: Does it actually answer the question?
5. **Harmlessness**: Is it safe and appropriate?

Question: {question}
Answer: {answer}
{"Reference: " + reference_answer if reference_answer else ""}

Respond in JSON: {{"correctness": X, "completeness": X, "conciseness": X, "relevance": X, "harmlessness": X, "explanation": "..."}}
"""

    response = client.chat.completions.create(
        model="gpt-4o",
        messages=[{"role": "user", "content": eval_prompt}],
        response_format={"type": "json_object"},
    )

    return json.loads(response.choices[0].message.content)


# Chạy evaluation trên test set
test_cases = [
    {
        "question": "Python list comprehension là gì?",
        "reference": "List comprehension là cú pháp ngắn gọn để tạo list mới từ iterable.",
    },
    # ... more test cases
]

results = []
for tc in test_cases:
    answer = my_llm_service.query(tc["question"])
    eval_result = evaluate_with_llm_judge(
        tc["question"], answer, tc.get("reference")
    )
    results.append(eval_result)
    print(f"Q: {tc['question'][:50]}... → Score: {eval_result}")

# Aggregate
avg_scores = {
    key: sum(r[key] for r in results) / len(results)
    for key in ["correctness", "completeness", "relevance"]
}
print(f"\n📊 Average scores: {avg_scores}")
```

---

## 5. 意思決定の枠組み: プロンプト vs 微調整 vs RAG

```
                      Cần domain knowledge?
                       /              \
                     Yes               No
                      |                 |
               Data có sẵn?      Task phức tạp?
               /          \        /        \
             Yes           No    Yes         No
              |             |     |           |
        Fine-tune     RAG + Prompt  Few-shot   Zero-shot
         + RAG        Engineering   Prompting  Prompting

Quy tắc ngón cái:
  1. Thử Prompt Engineering trước (rẻ, nhanh)
  2. Thêm RAG nếu cần knowledge (medium effort)
  3. Fine-tune cuối cùng (đắt, chậm, nhưng mạnh)
```

|アプローチ |コスト |努力 |いつ使用するか |
|----------|----------|----------|---------------|
| **ゼロショット** | 💰 | 🔨 |シンプルなタスク、強力なモデル |
| **数ショット** | 💰 | 🔨🔨 |例、特定の形式が必要 |
| **ラグ** | 💰💰 | 🔨🔨🔨 |ドメインの知識、データ変更が必要 |
| **微調整** | 💰💰💰 | 🔨🔨🔨🔨 |特定のタスクには独自のスタイルが必要 |

---

## 6. LLMOps ライフサイクル

```python
"""LLMOps Lifecycle trong practice"""

# Phase 1: Prototype (1-2 tuần)
# - Thử nhiều prompts trong playground
# - So sánh models (GPT-4o vs Claude vs Gemini)
# - Build basic RAG nếu cần

# Phase 2: Evaluation (1-2 tuần)
# - Tạo eval dataset (50-200 test cases)
# - LLM-as-judge evaluation
# - Human evaluation (sample)
# - Benchmark: latency, cost, accuracy

# Phase 3: Production (1-2 tuần)
# - Prompt versioning
# - Caching (semantic cache)
# - Rate limiting
# - Error handling & fallbacks
# - Guardrails (content filter)

# Phase 4: Monitoring (ongoing)
# - Track: latency, cost, token usage
# - Track: user feedback, thumbs up/down
# - Track: hallucination rate
# - Data drift detection
# - A/B testing prompts
```

---

## 概要

|コンセプト |覚えておいてください |
|----------|----------|
| **LLMOps** | LLM アプリケーションに適応した MLOps |
| **主な違い** |トレーニングなし、高価な推論、厳しい評価 |
| **LLMOps スタック** |モデル → プロンプト → RAG → オーケストレーション → 評価 → 可観測性 |
| **評価** |審査員としての LLM + 人間による評価 + 自動化されたメトリクス |
| **決定** |最初にプロンプ​​ト → RAG → 微調整 (必要に応じてエスカレーション) |
| **生産** |キャッシュ + 再試行 + フォールバック + ガードレール |

## 演習

1. **スタック分析:** あなたのチームはどの LLM を使用していますか?生産に必要なコンポーネントをリストします。
2. **評価:** 20 のテスト ケースの評価データセットを作成します。 LLM を裁判官として実行します。スコアを報告します。
3. **プロダクション ラッパー:** OpenAI API 呼び出しをキャッシュ、再試行、フォールバック、コスト追跡でラップします。
4. **意思決定マトリックス:** 3 つの使用例について、プロンプト、RAG、微調整のいずれかを決定します。説明する。

> **次の記事:** 迅速な管理と A/B テスト。
