---
id: 019c9619-ac08-7008-d108-ac0800000008
title: 第 8 課：及時管理和 A/B 測試
slug: bai-8-prompt-management
description: 大規模提示工程：提示範本、版本控制、動態提示。生產中的 A/B 測試提示。提示優化技術。用於自動化提示工程的 DSPy。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 7
section_title: 第 3 部分：LLMOps
course:
  id: 019c9619-aa07-7007-b007-aa0700000007
  title: MLOps 和 LLMOps：將 AI 引入生產
  slug: mlops-llmops
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9006" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9006)"/>

  <!-- Decorations -->
  <g>
    <circle cx="836" cy="78" r="14" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="1072" cy="94" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="808" cy="110" r="20" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="1044" cy="126" r="8" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="780" cy="142" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="78" x2="1100" y2="158" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="108" x2="1050" y2="178" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1006.5788383248864,161.5 1006.5788383248864,194.5 978,211 949.4211616751136,194.5 949.4211616751135,161.5 978,145" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 人工智慧與機器學習 — 第 7 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 8 課：及時管理和 A/B 測試</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">MLOps 和 LLMOps：將 AI 引入生產</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：LLMOps</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

Prompt是LLM申請的「原始碼」。但大多數團隊使用...**程式碼中的字串文字**來管理提示。更改提示=更改程式碼=重新部署。

> 🎯 **提示管理** = 版本、測試、部署、最佳化等程式碼提示。

---

## 1. 為什麼我們需要即時管理？

```
Vấn đề thực tế:
  ❌ Prompt hardcoded trong source code
  ❌ Đổi 1 từ trong prompt = commit + PR + deploy
  ❌ "Prompt cũ tốt hơn" — nhưng đã bị overwrite
  ❌ Không biết prompt nào cho kết quả tốt hơn
  ❌ Prompt khác nhau giữa dev/staging/production

Giải pháp:
  ✅ Prompt templates tách riêng khỏi code
  ✅ Version control cho prompts
  ✅ A/B testing prompts
  ✅ Prompt deployment pipeline
  ✅ Prompt analytics
```

---

## 2. 提示範本和版本控制

### 2.1 結構化提示系統

```python
"""Prompt management system"""
from dataclasses import dataclass
from typing import Optional
from datetime import datetime
import json
import hashlib

@dataclass
class PromptTemplate:
    name: str
    version: str
    system_prompt: str
    user_template: str
    model: str = "gpt-4o-mini"
    temperature: float = 0.7
    max_tokens: int = 1000
    metadata: dict = None

    @property
    def id(self):
        content = f"{self.name}:{self.version}"
        return hashlib.md5(content.encode()).hexdigest()[:8]

    def render(self, **kwargs):
        """Render template với variables"""
        return {
            "model": self.model,
            "temperature": self.temperature,
            "max_tokens": self.max_tokens,
            "messages": [
                {"role": "system", "content": self.system_prompt},
                {"role": "user", "content": self.user_template.format(**kwargs)},
            ],
        }


# Ví dụ: Define prompts
PROMPTS = {
    "summarizer_v1": PromptTemplate(
        name="article_summarizer",
        version="1.0",
        system_prompt="You are a concise article summarizer. Write summaries in Vietnamese.",
        user_template="Tóm tắt bài viết sau trong 3-5 câu:\n\n{article}",
        model="gpt-4o-mini",
        temperature=0.3,
        max_tokens=500,
    ),
    "summarizer_v2": PromptTemplate(
        name="article_summarizer",
        version="2.0",
        system_prompt="""You are an expert summarizer. Rules:
1. Write in Vietnamese
2. Start with the key takeaway
3. Use bullet points for supporting details
4. End with implications/next steps
5. Keep under 150 words""",
        user_template="Tóm tắt bài viết:\n\n{article}",
        model="gpt-4o-mini",
        temperature=0.2,
        max_tokens=400,
    ),
}
```

### 2.2 基於 YAML 的提示存儲

```yaml
# prompts/article_summarizer.yaml
name: article_summarizer
description: "Summarize articles in Vietnamese"
active_version: "2.0"

versions:
  "1.0":
    created_at: "2024-01-01"
    status: archived
    model: gpt-4o-mini
    temperature: 0.3
    max_tokens: 500
    system_prompt: |
      You are a concise article summarizer.
      Write summaries in Vietnamese.
    user_template: |
      Tóm tắt bài viết sau trong 3-5 câu:

      {article}
    metrics:
      avg_quality_score: 3.8
      avg_latency_ms: 1200
      avg_cost_usd: 0.002

  "2.0":
    created_at: "2024-02-15"
    status: active
    model: gpt-4o-mini
    temperature: 0.2
    max_tokens: 400
    system_prompt: |
      You are an expert summarizer. Rules:
      1. Write in Vietnamese
      2. Start with the key takeaway
      3. Use bullet points for supporting details
      4. End with implications/next steps
      5. Keep under 150 words
    user_template: |
      Tóm tắt bài viết:

      {article}
    metrics:
      avg_quality_score: 4.3
      avg_latency_ms: 900
      avg_cost_usd: 0.0015
```

```python
"""Prompt loader từ YAML files"""
import yaml
from pathlib import Path

class PromptStore:
    def __init__(self, prompts_dir="prompts/"):
        self.prompts_dir = Path(prompts_dir)
        self._cache = {}

    def get(self, name, version=None):
        """Get prompt template by name (defaults to active version)"""
        if name not in self._cache:
            path = self.prompts_dir / f"{name}.yaml"
            with open(path) as f:
                self._cache[name] = yaml.safe_load(f)

        config = self._cache[name]
        version = version or config["active_version"]
        prompt_config = config["versions"][version]

        return PromptTemplate(
            name=name,
            version=version,
            system_prompt=prompt_config["system_prompt"],
            user_template=prompt_config["user_template"],
            model=prompt_config.get("model", "gpt-4o-mini"),
            temperature=prompt_config.get("temperature", 0.7),
            max_tokens=prompt_config.get("max_tokens", 1000),
        )

    def list_versions(self, name):
        """List all versions of a prompt"""
        config = self._cache.get(name)
        if not config:
            self.get(name)
            config = self._cache[name]
        return list(config["versions"].keys())

# Usage
store = PromptStore()
prompt = store.get("article_summarizer")  # Active version
prompt_v1 = store.get("article_summarizer", version="1.0")
```

---

## 3. A/B 測試提示

### 3.1 基本 A/B 測試

```python
"""A/B testing prompts in production"""
import random
import time
from dataclasses import dataclass, field
from collections import defaultdict

@dataclass
class ABTest:
    name: str
    variants: dict  # variant_name → PromptTemplate
    weights: dict   # variant_name → weight (0-1)
    metrics: dict = field(default_factory=lambda: defaultdict(list))

    def select_variant(self, user_id=None):
        """Select variant (deterministic per user if user_id provided)"""
        if user_id:
            # Deterministic: same user → same variant
            hash_val = hash(f"{self.name}:{user_id}") % 100
            cumulative = 0
            for variant, weight in self.weights.items():
                cumulative += weight * 100
                if hash_val < cumulative:
                    return variant
        else:
            # Random
            return random.choices(
                list(self.weights.keys()),
                weights=list(self.weights.values()),
            )[0]

    def log_result(self, variant, metrics):
        """Log result for analysis"""
        self.metrics[variant].append({
            "timestamp": time.time(),
            **metrics,
        })

    def get_results(self):
        """Compare variants"""
        results = {}
        for variant, data in self.metrics.items():
            if data:
                results[variant] = {
                    "n_calls": len(data),
                    "avg_latency": sum(d["latency"] for d in data) / len(data),
                    "avg_quality": sum(d.get("quality", 0) for d in data) / len(data),
                    "avg_cost": sum(d.get("cost", 0) for d in data) / len(data),
                }
        return results


# Setup A/B test
ab_test = ABTest(
    name="summarizer_v1_vs_v2",
    variants={
        "control": store.get("article_summarizer", "1.0"),
        "treatment": store.get("article_summarizer", "2.0"),
    },
    weights={"control": 0.5, "treatment": 0.5},
)

# In production
async def summarize(article, user_id=None):
    variant_name = ab_test.select_variant(user_id)
    prompt = ab_test.variants[variant_name]

    start = time.time()
    result = await llm_service.call(**prompt.render(article=article))
    latency = time.time() - start

    ab_test.log_result(variant_name, {
        "latency": latency,
        "cost": llm_service.last_cost,
        "output_tokens": llm_service.last_tokens,
    })

    return result, variant_name
```

### 3.2 統計分析

```python
"""Analyze A/B test results"""
from scipy import stats
import numpy as np

def analyze_ab_test(ab_test, metric="quality", alpha=0.05):
    """Statistical analysis of A/B test"""
    results = ab_test.get_results()

    control_data = [d[metric] for d in ab_test.metrics["control"] if metric in d]
    treatment_data = [d[metric] for d in ab_test.metrics["treatment"] if metric in d]

    if len(control_data) < 30 or len(treatment_data) < 30:
        print(f"⚠️ Not enough data: control={len(control_data)}, treatment={len(treatment_data)}")
        print(f"   Need at least 30 samples each")
        return None

    # T-test
    t_stat, p_value = stats.ttest_ind(treatment_data, control_data)

    control_mean = np.mean(control_data)
    treatment_mean = np.mean(treatment_data)
    lift = (treatment_mean - control_mean) / control_mean

    print(f"📊 A/B Test Results: {metric}")
    print(f"   Control:   mean={control_mean:.4f} (n={len(control_data)})")
    print(f"   Treatment: mean={treatment_mean:.4f} (n={len(treatment_data)})")
    print(f"   Lift: {lift:+.2%}")
    print(f"   p-value: {p_value:.4f}")

    if p_value < alpha:
        winner = "treatment" if treatment_mean > control_mean else "control"
        print(f"   ✅ Statistically significant! Winner: {winner}")
    else:
        print(f"   ⚠️ Not statistically significant (p > {alpha})")

    return {"p_value": p_value, "lift": lift, "significant": p_value < alpha}

# Run analysis
analyze_ab_test(ab_test, metric="quality")
analyze_ab_test(ab_test, metric="latency")
analyze_ab_test(ab_test, metric="cost")
```

---

## 4. 即時優化技巧

### 4.1 系統化即時工程

```python
"""Systematic prompt optimization"""

# Technique 1: Role prompting
roles = [
    "You are a senior data scientist with 10 years of experience.",
    "You are a helpful AI assistant.",
    "You are an expert educator who explains complex topics simply.",
]

# Technique 2: Output format specification
formats = [
    "Respond in JSON format.",
    "Respond with bullet points.",
    "Respond in a table format.",
    "Respond with a step-by-step explanation.",
]

# Technique 3: Chain of Thought
cot_variants = [
    "",  # No CoT
    "Think step by step.",
    "Let's break this down:\n1. First, identify the key points\n2. Then analyze each\n3. Finally, synthesize",
]

# Test all combinations
import itertools

best_score = 0
best_config = None

for role, fmt, cot in itertools.product(roles, formats, cot_variants):
    prompt = f"{role}\n{fmt}\n{cot}"
    score = evaluate_prompt(prompt, test_cases)  # Your eval function
    
    if score > best_score:
        best_score = score
        best_config = {"role": role, "format": fmt, "cot": cot}

print(f"Best config (score={best_score:.3f}): {best_config}")
```

### 4.2 DSPy — 自動提示最佳化

```python
"""DSPy: Programmatic prompt optimization"""
# pip install dspy-ai
import dspy

# Configure LLM
lm = dspy.LM("openai/gpt-4o-mini")
dspy.configure(lm=lm)

# Define signature
class Summarize(dspy.Signature):
    """Summarize an article in Vietnamese, focusing on key insights."""
    article: str = dspy.InputField(desc="The article to summarize")
    summary: str = dspy.OutputField(desc="Concise Vietnamese summary")

# Define module
class ArticleSummarizer(dspy.Module):
    def __init__(self):
        self.summarize = dspy.ChainOfThought(Summarize)

    def forward(self, article):
        return self.summarize(article=article)

# Compile/optimize with examples
from dspy.teleprompt import BootstrapFewShot

# Training examples
trainset = [
    dspy.Example(
        article="...",
        summary="...",
    ).with_inputs("article"),
    # ... more examples
]

# Metric
def quality_metric(example, prediction, trace=None):
    """Evaluate summary quality"""
    # Use LLM-as-judge or custom metric
    return evaluate_summary_quality(prediction.summary)

# Optimize
optimizer = BootstrapFewShot(metric=quality_metric, max_bootstrapped_demos=4)
optimized = optimizer.compile(ArticleSummarizer(), trainset=trainset)

# Use optimized module
result = optimized(article="Your article here...")
print(result.summary)
```

---

## 5. 快速部署管道

```python
"""Prompt deployment workflow"""

class PromptDeploymentPipeline:
    def __init__(self, prompt_store, evaluator):
        self.store = prompt_store
        self.evaluator = evaluator

    def deploy(self, name, new_version):
        """Deploy prompt with validation"""
        prompt = self.store.get(name, new_version)

        # Step 1: Evaluate on test set
        print(f"📋 Evaluating {name} v{new_version}...")
        eval_results = self.evaluator.evaluate(prompt)

        if eval_results["avg_quality"] < 3.5:
            raise ValueError(
                f"Quality too low: {eval_results['avg_quality']:.2f} < 3.5"
            )

        # Step 2: Compare with current production
        current = self.store.get(name)  # Active version
        current_results = self.evaluator.evaluate(current)

        if eval_results["avg_quality"] < current_results["avg_quality"] * 0.95:
            raise ValueError(
                f"New prompt worse than current: "
                f"{eval_results['avg_quality']:.2f} vs "
                f"{current_results['avg_quality']:.2f}"
            )

        # Step 3: Deploy to staging (A/B test)
        print(f"🧪 Starting A/B test: {current.version} vs {new_version}")
        ab_test = ABTest(
            name=f"{name}_promotion",
            variants={"control": current, "treatment": prompt},
            weights={"control": 0.9, "treatment": 0.1},
        )

        # Step 4: After sufficient data → promote
        print(f"✅ Ready for promotion after A/B test completes")

        return ab_test
```

---

## 總結

|概念 |記住|
|--------|--------|
| **提示範本** |使用 YAML/JSON 將提示與程式碼分開 |
| **版本控制** |版本提示類似程式碼 |
| **A/B 測試** |用真實流量測試提示 |
| **統計分析** | T 檢驗，每個變體需要 ≥30 個樣本 |
| **DSPy** |自動提示優化 |
| **部署管道** |評估 → 比較 → A/B 測試 → 推廣 |

## 練習

1. **提示儲存：** 建立一個基於 YAML 的提示存儲，包含 3 個提示模板，每個模板有 2 個版本。
2. **A/B 測試：** 對 2 個提示變體實施 A/B 測試。運行 100 個請求，分析結果。
3. **最佳化：** 使用網格搜尋最佳化1個提示（嘗試3角色×3格式×2 CoT）。
4. **DSPy：** 使用 DSPy 透過 10 個訓練範例優化 1 個提示任務。

> **下一篇文章：** 法學碩士可觀察性 — LangSmith、Langfuse 和 Arize。
