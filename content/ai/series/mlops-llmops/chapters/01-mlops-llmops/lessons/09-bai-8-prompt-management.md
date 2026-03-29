---
id: 019c9619-ac08-7008-d108-ac0800000008
title: 'Bài 8: Prompt Management & A/B Testing'
slug: bai-8-prompt-management
description: >-
  Prompt engineering at scale: prompt templates, versioning, dynamic
  prompts. A/B testing prompts in production. Prompt optimization
  techniques. DSPy for automated prompt engineering.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 7
section_title: "Phần 3: LLMOps"
course:
  id: 019c9619-aa07-7007-b007-aa0700000007
  title: "MLOps & LLMOps: Đưa AI lên Production"
  slug: mlops-llmops
---

## Giới thiệu

Prompt là "source code" của LLM application. Nhưng hầu hết teams quản lý prompt bằng... **string literals trong code**. Đổi prompt = đổi code = deploy lại.

> 🎯 **Prompt Management** = version, test, deploy, và optimize prompts giống như code.

---

## 1. Tại sao cần Prompt Management?

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

## 2. Prompt Templates & Versioning

### 2.1 Structured Prompt System

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

### 2.2 YAML-based Prompt Store

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

## 3. A/B Testing Prompts

### 3.1 Basic A/B Test

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

### 3.2 Statistical Analysis

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

## 4. Prompt Optimization Techniques

### 4.1 Systematic Prompt Engineering

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

### 4.2 DSPy — Automated Prompt Optimization

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

## 5. Prompt Deployment Pipeline

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

## Tóm tắt

| Concept | Ghi nhớ |
|---------|---------|
| **Prompt Templates** | Tách prompt khỏi code, dùng YAML/JSON |
| **Versioning** | Version prompts giống code |
| **A/B Testing** | Test prompts với real traffic |
| **Statistical Analysis** | T-test, cần ≥30 samples mỗi variant |
| **DSPy** | Automated prompt optimization |
| **Deployment Pipeline** | Evaluate → Compare → A/B Test → Promote |

## Bài tập

1. **Prompt Store:** Tạo YAML-based prompt store với 3 prompt templates, mỗi template 2 versions.
2. **A/B Test:** Implement A/B testing cho 2 prompt variants. Chạy 100 requests, phân tích kết quả.
3. **Optimization:** Dùng grid search optimize 1 prompt (thử 3 roles × 3 formats × 2 CoT).
4. **DSPy:** Dùng DSPy optimize 1 prompt task với 10 training examples.

> **Bài tiếp theo:** LLM Observability — LangSmith, Langfuse & Arize.
