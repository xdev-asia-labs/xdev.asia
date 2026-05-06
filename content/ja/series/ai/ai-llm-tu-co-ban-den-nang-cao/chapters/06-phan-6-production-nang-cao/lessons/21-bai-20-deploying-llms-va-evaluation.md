---
id: 019c9619-bb20-7020-c020-bb2000000020
title: 'レッスン 20: LLM のデプロイ — Ollama、vLLM、TGI、評価'
slug: bai-20-deploying-llms-va-evaluation
description: >-
  Ollama、vLLM、TGI を使用したセルフホスト LLM。推論の最適化: 量子化、KV キャッシュ、バッチ処理。評価:
  BLEU、ROUGE、LLM-as-Judge、安全チェックリスト。
duration_minutes: 210
is_free: true
video_url: null
sort_order: 19
section_title: 'パート 6: 生産と強化'
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: 'AI と LLM: 基本から高度まで'
  slug: ai-llm-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3159" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3159)"/>

  <!-- Decorations -->
  <g>
    <circle cx="807" cy="231" r="20" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="1014" cy="38" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="721" cy="105" r="32" fill="#a78bfa" opacity="0.08"/>
    <circle cx="928" cy="172" r="23" fill="#a78bfa" opacity="0.09"/>
    <circle cx="635" cy="239" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="61" x2="1100" y2="141" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="91" x2="1050" y2="161" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1042.1769145362398,193 1042.1769145362398,229 1011,247 979.8230854637602,229 979.8230854637602,193 1011,175" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🧠 AI と ML — レッスン 19</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 20: LLM のデプロイ — Ollama、vLLM、TGI</tspan>
      <tspan x="60" dy="42">＆評価</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI と LLM: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 6: 生産と強化</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## 概要

シリーズの最後のレッスンでは、実際の運用に取り組みます。セルフホスト LLM を使用して、コストとプライバシーを制御し、推論を最適化し、モデルの品質を体系的に評価します。

---

## 1. なぜセルフホスト型 LLM なのか?

| |クラウドAPI |自己ホスト型 |
|---|---|---|
|コスト |拡張するには費用がかかる |ハードウェアを前払いすれば、より安くなる |
|プライバシー |プロバイダーに送信されるデータ |データはインフラストラクチャ内にあります |
|レイテンシ |ネットワーク依存 |低遅延 (ローカル) |
|カスタマイズ |微調整されたモデルは使いにくい |任意のモデルを使用 |
|可用性 |プロバイダーの稼働時間に依存 |自制心 |

**いつセルフホストすべきか:**
- 医療、銀行、法務 - 機密データ
- 大規模 (コスト > 1000 ドル/月の API)
- 別途微調整モデルを使用する必要がある

---

## 2. Ollama — LLM ローカルを実行する

Ollama は、ラップトップ/サーバー上で LLM を実行する最も簡単な方法です。

### インストール

```bash
# macOS / Linux
curl -fsSL https://ollama.com/install.sh | sh

# Windows: download installer từ ollama.com
```

### モデルを実行する

```bash
# Pull và chạy model
ollama run llama3.2          # Meta LLaMA 3.2 3B
ollama run mistral           # Mistral 7B
ollama run phi4              # Microsoft Phi-4 14B
ollama run qwen2.5-coder     # Code-focused model
ollama run nomic-embed-text  # Embedding model

# List models đã download
ollama list

# Xóa model
ollama rm llama3.2
```

### REST API

```bash
# Ollama tự động expose REST API trên port 11434
curl http://localhost:11434/api/generate \
  -d '{"model": "llama3.2", "prompt": "Giải thích Docker", "stream": false}'
```

### Python クライアント

```python
import ollama

# Simple generation
response = ollama.chat(
    model='llama3.2',
    messages=[
        {'role': 'user', 'content': 'Viết function Python để đọc file JSON'}
    ]
)
print(response['message']['content'])

# Streaming
for chunk in ollama.chat(
    model='llama3.2',
    messages=[{'role': 'user', 'content': 'Giải thích recursion'}],
    stream=True
):
    print(chunk['message']['content'], end='', flush=True)

# Embeddings
embedding = ollama.embeddings(
    model='nomic-embed-text',
    prompt='Hello world'
)
print(len(embedding['embedding']))  # 768
```

### OpenAI 互換エンドポイント

```python
from openai import OpenAI

# Dùng OpenAI SDK với Ollama backend!
client = OpenAI(
    base_url='http://localhost:11434/v1',
    api_key='ollama'  # Không cần key thật
)

response = client.chat.completions.create(
    model='llama3.2',
    messages=[{'role': 'user', 'content': 'Hello!'}]
)
print(response.choices[0].message.content)
```

---

## 3. vLLM — プロダクション推論

vLLM は、効率的な KV キャッシュ管理、高スループットを備えた **PagesAttendant** を備えた運用グレードの推論エンジンです。

### インストール

```bash
pip install vllm

# Cần NVIDIA GPU với CUDA
nvidia-smi  # Kiểm tra GPU
```

### サーバーを実行する

```bash
# Chạy OpenAI-compatible server
python -m vllm.entrypoints.openai.api_server \
    --model mistralai/Mistral-7B-Instruct-v0.3 \
    --port 8000 \
    --max-model-len 4096 \
    --dtype bfloat16

# Với 4-bit quantization (tiết kiệm VRAM)
python -m vllm.entrypoints.openai.api_server \
    --model mistralai/Mistral-7B-Instruct-v0.3 \
    --quantization awq \
    --port 8000
```

### Python クライアント

```python
from openai import OpenAI

client = OpenAI(
    base_url="http://localhost:8000/v1",
    api_key="not-needed"
)

# Single request
response = client.chat.completions.create(
    model="mistralai/Mistral-7B-Instruct-v0.3",
    messages=[{"role": "user", "content": "Giải thích Kubernetes trong 3 câu"}]
)

# Batch inference — vLLM xử lý nhiều requests song song
import asyncio
from openai import AsyncOpenAI

async_client = AsyncOpenAI(base_url="http://localhost:8000/v1", api_key="x")

async def batch_inference(prompts: list[str]) -> list[str]:
    tasks = [
        async_client.chat.completions.create(
            model="mistralai/Mistral-7B-Instruct-v0.3",
            messages=[{"role": "user", "content": p}]
        )
        for p in prompts
    ]
    responses = await asyncio.gather(*tasks)
    return [r.choices[0].message.content for r in responses]

# Chạy
results = asyncio.run(batch_inference([
    "Explain Docker",
    "Explain Kubernetes",
    "Explain Terraform"
]))
```

---

## 4. 量子化 — VRAM を削減する

```
Quantization: đổi precision của weights từ float32/float16 → int8/int4

Model     FP16 VRAM    INT8 VRAM    INT4 VRAM
7B        14 GB        7 GB         3.5 GB
13B       26 GB        13 GB        6.5 GB
70B       140 GB       70 GB        35 GB
```

### GGUF と llama.cpp (CPU フレンドリー)

```bash
# Cài llama-cpp-python
pip install llama-cpp-python

# Download GGUF model từ HuggingFace
# huggingface-cli download bartowski/Mistral-7B-Instruct-v0.3-GGUF \
#   --include "*.Q4_K_M.gguf" --local-dir ./models
```

```python
from llama_cpp import Llama

# Chạy trên CPU (hoặc GPU với n_gpu_layers)
llm = Llama(
    model_path="./models/Mistral-7B-Instruct-v0.3-Q4_K_M.gguf",
    n_ctx=4096,          # Context window
    n_gpu_layers=0,      # 0 = CPU, -1 = tất cả layers lên GPU
    verbose=False
)

output = llm.create_chat_completion(
    messages=[{"role": "user", "content": "Hello!"}]
)
print(output['choices'][0]['message']['content'])
```

---

## 5. 評価 — LLM の評価

### 5.1 BLEU スコア (翻訳、要約)

```python
from nltk.translate.bleu_score import sentence_bleu, corpus_bleu
import nltk
nltk.download('punkt')

def compute_bleu(references: list[str], hypotheses: list[str]) -> float:
    """BLEU score cho machine translation"""
    refs_tokenized = [[ref.split()] for ref in references]
    hyps_tokenized = [hyp.split() for hyp in hypotheses]
    return corpus_bleu(refs_tokenized, hyps_tokenized)

# Ví dụ
refs = ["con mèo ngồi trên tấm thảm"]
hyps = ["con mèo đứng trên tấm thảm"]
print(f"BLEU: {compute_bleu(refs, hyps):.4f}")
```

### 5.2 ルージュ (まとめ)

```python
from rouge_score import rouge_scorer

scorer = rouge_scorer.RougeScorer(['rouge1', 'rouge2', 'rougeL'], use_stemmer=True)

reference = "Mô hình ngôn ngữ lớn có thể tạo văn bản chất lượng cao"
generated = "LLM có khả năng sinh ra văn bản có chất lượng tốt"

scores = scorer.score(reference, generated)
print(f"ROUGE-1: {scores['rouge1'].fmeasure:.3f}")
print(f"ROUGE-2: {scores['rouge2'].fmeasure:.3f}")
print(f"ROUGE-L: {scores['rougeL'].fmeasure:.3f}")
```

### 5.3 裁判官としての LLM

```python
from openai import OpenAI
import json

client = OpenAI()

def llm_judge(question: str, answer: str, criteria: list[str] = None) -> dict:
    """Dùng GPT-4 để đánh giá câu trả lời"""
    criteria = criteria or ["accuracy", "completeness", "clarity"]
    criteria_str = "\n".join(f"- {c}: 1-10" for c in criteria)

    prompt = f"""Đánh giá câu trả lời sau theo các tiêu chí:

Câu hỏi: {question}
Câu trả lời: {answer}

Tiêu chí đánh giá (1-10):
{criteria_str}

Trả về JSON:
{{"scores": {{"criterion": score}}, "reasoning": "...", "overall": score}}"""

    response = client.chat.completions.create(
        model="gpt-4o",
        response_format={"type": "json_object"},
        messages=[{"role": "user", "content": prompt}]
    )
    return json.loads(response.choices[0].message.content)

# Đánh giá
result = llm_judge(
    question="Kubernetes là gì?",
    answer="Kubernetes là hệ thống orchestration cho containers, giúp deploy và scale ứng dụng."
)
print(json.dumps(result, indent=2, ensure_ascii=False))
```

### 5.4 RAGAS — RAG パイプラインのレビュー

```python
from ragas import evaluate
from ragas.metrics import faithfulness, answer_relevancy, context_precision
from datasets import Dataset

# Chuẩn bị test data
data = {
    "question": ["Kubernetes là gì?", "Docker khác gì VM?"],
    "answer": ["Kubernetes là...", "Docker dùng containers..."],
    "contexts": [["K8s là container orchestrator..."], ["Docker là..."]],
    "ground_truth": ["Kubernetes is a container orchestration system", "Docker uses OS-level virtualization"]
}

dataset = Dataset.from_dict(data)
results = evaluate(
    dataset=dataset,
    metrics=[faithfulness, answer_relevancy, context_precision]
)
print(results)
```

---

## 6. 安全とガードレール

```python
from openai import OpenAI

client = OpenAI()

class SafetyGuard:
    UNSAFE_PATTERNS = [
        "ignore previous instructions",
        "jailbreak",
        "pretend you are",
        "act as if",
    ]

    def check_input(self, text: str) -> bool:
        """True = safe, False = unsafe"""
        text_lower = text.lower()
        for pattern in self.UNSAFE_PATTERNS:
            if pattern in text_lower:
                return False
        return True

    def moderate_content(self, text: str) -> dict:
        """OpenAI Moderation API"""
        result = client.moderations.create(input=text)
        return result.results[0].model_dump()

    def check_output(self, text: str) -> str:
        """Kiểm tra và filter output"""
        moderation = self.moderate_content(text)
        if moderation["flagged"]:
            return "[Nội dung bị lọc vì vi phạm chính sách]"
        return text

guard = SafetyGuard()

def safe_generate(user_input: str) -> str:
    # 1. Check input
    if not guard.check_input(user_input):
        return "Tôi không thể xử lý yêu cầu này."

    # 2. Generate
    response = client.chat.completions.create(
        model="gpt-4o",
        messages=[
            {"role": "system", "content": "Bạn là assistant hữu ích và an toàn."},
            {"role": "user", "content": user_input}
        ]
    )
    output = response.choices[0].message.content

    # 3. Check output
    return guard.check_output(output)
```

---

## 7. 製造チェックリスト

```
Infrastructure:
✅ Load balancer trước LLM servers
✅ Auto-scaling dựa trên queue length
✅ Health checks và readiness probes
✅ GPU monitoring (utilization, temperature, memory)

API:
✅ Rate limiting per API key
✅ Request timeouts (30-60s)
✅ Retry với exponential backoff
✅ Circuit breaker cho downstream services

Observability:
✅ Log mọi request/response (anonymized)
✅ Track latency P50/P95/P99
✅ Token usage và cost per request
✅ Error rate alerts

Safety:
✅ Input validation và sanitization
✅ Output moderation
✅ PII detection và removal
✅ Prompt injection detection

Cost:
✅ Set monthly budget limits
✅ Cache frequent responses
✅ Use smaller models khi đủ
✅ Monitor cost per user/feature
```

---

## シリーズの概要

おめでとうございます！ **AI と LLM: 基本から上級まで** — 以下を含む 20 レッスンを完了しました。

```
📚 Foundations     → Neural Networks, Deep Learning
🏗️ Architecture   → Transformer, BERT, GPT, Tokenization
🎯 Training       → Pre-training, SFT, LoRA, RLHF
💬 Prompting      → Prompt Engineering, CoT, RAG
🔧 Applications   → AI Agents, LLM APIs
🚀 Production     → Ollama, vLLM, Evaluation, Safety
```

**次のステップ:**
- ドメイン向けの現実的な RAG アプリケーションを構築する
- 独自のデータを使用して LLM を微調整する
- 論文を読む: 「Attending is All You Need」、「BERT」、「GPT-3」、「Chinchilla」
- 参加: Hugging Face コミュニティ、LangChain Discord、AI Papers Club
