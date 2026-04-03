---
id: 019c9619-ee11-7011-f011-ee1100000011
title: 'Bài 11: Prompt Versioning, A/B Testing & CI/CD'
slug: bai-11-prompt-versioning
description: >-
  Quản lý prompt versions, A/B testing trên production, CI/CD pipeline,
  rollback strategy. Prompt registry, feature flags, canary deployment.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 10
section_title: "Phần 4: Production & Best Practices"
course:
  id: 019c9619-aa04-7004-b004-aa0400000004
  title: "Prompt Engineering Masterclass: Nghệ thuật Ra lệnh cho AI"
  slug: prompt-engineering-masterclass
---

![CI/CD Pipeline cho Prompt Engineering: Lint → Test → A/B → Canary → Deploy](/storage/uploads/2026/04/pe-bai-11-cicd-pipeline.png)

## Giới thiệu

Production prompts cần **version control** giống code. Prompt v1 hoạt động tốt → thay đổi 1 dòng → output fail. Không có versioning, bạn không thể rollback. Không có A/B testing, bạn không biết version nào tốt hơn.

```
Prompt Lifecycle:

Draft → v1.0 (baseline) → v1.1 (improve) → A/B Test → Winner → v2.0
                                                ↓ loser
                                            Archive
```

---

## 1. Prompt Version Control

### 1.1 File-based Versioning

```
prompts/
├── email-classifier/
│   ├── prompt.yaml          # Current version (symlink → v2.1)
│   ├── v1.0.yaml            # Initial version
│   ├── v1.1.yaml            # Minor fix
│   ├── v2.0.yaml            # Major rewrite
│   ├── v2.1.yaml            # Current production
│   ├── CHANGELOG.md         # Lịch sử thay đổi
│   └── tests/
│       ├── golden.json      # Test cases
│       └── results/         # Test results per version
└── summarizer/
    ├── prompt.yaml
    └── ...
```

### 1.2 Prompt YAML Format

```yaml
# prompts/email-classifier/v2.1.yaml
metadata:
  name: email-classifier
  version: "2.1"
  author: duytd
  created_at: "2025-01-20"
  model: gpt-4o-mini
  temperature: 0
  max_tokens: 200
  description: "Phân loại email — thêm category 'urgent'"
  changelog: "Thêm category 'urgent', cải thiện edge case tiếng Việt"
  tags: ["classification", "email", "vietnamese"]

prompt:
  system: |
    Bạn là email classifier chuyên nghiệp.
    Phân loại email vào 1 trong 5 categories:
    spam, business, personal, newsletter, urgent.

    Rules:
    - urgent: chứa deadline, từ khóa "gấp", "ngay", "ASAP"
    - spam: quảng cáo, link lạ, "trúng thưởng"
    - business: công việc, báo cáo, meeting
    - personal: bạn bè, gia đình
    - newsletter: bản tin, subscription

  user: |
    Phân loại email sau. Output JSON:
    {"category": "...", "confidence": 0.0-1.0, "reasoning": "..."}

    Email: {{input}}

validation:
  output_format: json
  required_fields: ["category", "confidence", "reasoning"]
  category_values: ["spam", "business", "personal", "newsletter", "urgent"]
  confidence_range: [0, 1]
```

### 1.3 Prompt Registry

```python
"""Prompt Registry: load + manage prompt versions"""
import yaml
from pathlib import Path

class PromptRegistry:
    def __init__(self, prompts_dir: str = "prompts"):
        self.dir = Path(prompts_dir)
        self._cache = {}

    def get(self, name: str, version: str = "latest") -> dict:
        """Load prompt by name + version"""
        key = f"{name}:{version}"
        if key in self._cache:
            return self._cache[key]

        prompt_dir = self.dir / name
        if version == "latest":
            # Tìm version cao nhất
            versions = sorted(prompt_dir.glob("v*.yaml"))
            if not versions:
                raise FileNotFoundError(f"No versions for {name}")
            path = versions[-1]
        else:
            path = prompt_dir / f"v{version}.yaml"

        with open(path) as f:
            prompt = yaml.safe_load(f)

        self._cache[key] = prompt
        return prompt

    def render(self, name: str, version: str = "latest",
               **kwargs) -> list[dict]:
        """Render prompt thành messages cho API"""
        prompt = self.get(name, version)
        tmpl = prompt["prompt"]

        messages = []
        if "system" in tmpl:
            messages.append({"role": "system", "content": tmpl["system"]})

        user_content = tmpl["user"]
        for k, v in kwargs.items():
            user_content = user_content.replace(f"{{{{{k}}}}}", str(v))

        messages.append({"role": "user", "content": user_content})
        return messages

    def list_versions(self, name: str) -> list[str]:
        """Liệt kê tất cả versions"""
        prompt_dir = self.dir / name
        return sorted([
            f.stem.replace("v", "") for f in prompt_dir.glob("v*.yaml")
        ])

# Sử dụng
registry = PromptRegistry()
messages = registry.render("email-classifier", version="2.1",
                          input="Meeting lúc 3pm nhé")
```

---

## 2. A/B Testing Prompts

### 2.1 Architecture

```
User Request
     │
     ▼
┌─────────────┐     ┌──────────────┐
│ Router      │────→│ Prompt A (50%)│──→ Response A
│ (feature    │     └──────────────┘       │
│  flag /     │     ┌──────────────┐       ▼
│  random)    │────→│ Prompt B (50%)│──→ Response B
└─────────────┘     └──────────────┘       │
                                           ▼
                                    ┌──────────┐
                                    │ Log both │
                                    │ + metrics│
                                    └──────────┘
```

### 2.2 A/B Test Implementation

```python
"""A/B Testing cho prompts"""
import random
import time
import json
from datetime import datetime

class PromptABTest:
    def __init__(self, name: str, variant_a: str, variant_b: str,
                 traffic_split: float = 0.5):
        self.name = name
        self.variant_a = variant_a
        self.variant_b = variant_b
        self.split = traffic_split
        self.results = {"A": [], "B": []}

    def get_variant(self, user_id: str = None) -> tuple[str, str]:
        """Chọn variant — deterministic nếu có user_id"""
        if user_id:
            # Deterministic: cùng user luôn nhận cùng variant
            variant = "A" if hash(user_id) % 100 < self.split * 100 else "B"
        else:
            variant = "A" if random.random() < self.split else "B"

        prompt = self.variant_a if variant == "A" else self.variant_b
        return variant, prompt

    def log_result(self, variant: str, input_text: str,
                   output: str, latency: float, score: float = None):
        """Ghi nhận kết quả"""
        self.results[variant].append({
            "input": input_text,
            "output": output,
            "latency": latency,
            "score": score,
            "timestamp": datetime.utcnow().isoformat(),
        })

    def run(self, input_text: str, user_id: str = None) -> dict:
        """Chạy A/B test"""
        variant, prompt = self.get_variant(user_id)

        start = time.time()
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[{"role": "user",
                       "content": prompt.replace("{{input}}", input_text)}],
            temperature=0,
        )
        latency = time.time() - start
        output = response.choices[0].message.content

        self.log_result(variant, input_text, output, latency)
        return {"variant": variant, "output": output, "latency": latency}

    def get_stats(self) -> dict:
        """Thống kê A vs B"""
        stats = {}
        for v in ["A", "B"]:
            r = self.results[v]
            if not r:
                stats[v] = {"count": 0}
                continue
            latencies = [x["latency"] for x in r]
            scores = [x["score"] for x in r if x["score"] is not None]

            stats[v] = {
                "count": len(r),
                "avg_latency": sum(latencies) / len(latencies),
                "avg_score": sum(scores) / len(scores) if scores else None,
            }
        return stats
```

### 2.3 Statistical Significance

```python
"""Kiểm tra kết quả A/B có statistically significant không"""
from scipy import stats

def check_significance(scores_a: list[float], scores_b: list[float],
                       alpha: float = 0.05) -> dict:
    """t-test so sánh 2 prompt variants"""
    t_stat, p_value = stats.ttest_ind(scores_a, scores_b)

    return {
        "mean_a": sum(scores_a) / len(scores_a),
        "mean_b": sum(scores_b) / len(scores_b),
        "p_value": p_value,
        "significant": p_value < alpha,
        "winner": "A" if sum(scores_a)/len(scores_a) >
                        sum(scores_b)/len(scores_b) else "B",
        "recommendation": (
            f"Variant {'A' if t_stat > 0 else 'B'} tốt hơn "
            f"(p={p_value:.4f})" if p_value < alpha
            else "Chưa đủ data để kết luận"
        ),
    }
```

> **💡 Bài tập 1:** Setup A/B test cho 1 prompt (ví dụ: summarization với 2 system prompts khác nhau). Chạy 20 requests mỗi variant, so sánh avg scores.

---

## 3. CI/CD Pipeline cho Prompts

### 3.1 Workflow

```
                    ┌── Lint YAML syntax
PR: Edit prompt ──→ ├── Unit tests (5-10 cases)
                    ├── Regression tests (golden dataset)
                    └── Cost estimation
                         │
                    Pass all? ──→ Merge → Deploy
                         │ fail
                         └──→ Block PR + report failures
```

### 3.2 GitHub Actions Pipeline

```yaml
# .github/workflows/prompt-cicd.yml
name: Prompt CI/CD

on:
  pull_request:
    paths: ['prompts/**']

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Validate YAML
        run: |
          pip install pyyaml
          python -c "
          import yaml, glob, sys
          errors = []
          for f in glob.glob('prompts/**/*.yaml', recursive=True):
              try:
                  with open(f) as fh:
                      data = yaml.safe_load(fh)
                  assert 'metadata' in data
                  assert 'prompt' in data
              except Exception as e:
                  errors.append(f'{f}: {e}')
          if errors:
              print('\n'.join(errors))
              sys.exit(1)
          print('All prompts valid!')
          "

  test:
    needs: lint
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Detect changed prompts
        id: changes
        run: |
          changed=$(git diff --name-only origin/main -- prompts/)
          echo "changed=$changed" >> $GITHUB_OUTPUT

      - name: Run prompt tests
        env:
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
        run: |
          pip install openai pyyaml
          python tests/run_prompt_tests.py --changed "${{ steps.changes.outputs.changed }}"

      - name: Cost estimation
        run: |
          python scripts/estimate_cost.py --prompts "${{ steps.changes.outputs.changed }}"

  deploy:
    needs: test
    if: github.event.pull_request.merged == true
    runs-on: ubuntu-latest
    steps:
      - name: Deploy prompts
        run: |
          python scripts/deploy_prompts.py --env production
```

---

## 4. Canary Deployment & Rollback

### 4.1 Canary Strategy

```python
"""Canary deployment: roll out prompt mới dần dần"""

class CanaryDeployer:
    def __init__(self, registry: PromptRegistry):
        self.registry = registry
        self.canary_config = {}

    def start_canary(self, name: str, old_version: str,
                     new_version: str, initial_traffic: float = 0.05):
        """Bắt đầu canary: 5% traffic → new version"""
        self.canary_config[name] = {
            "old": old_version,
            "new": new_version,
            "traffic": initial_traffic,  # % traffic cho new version
            "status": "canary",
        }

    def get_version(self, name: str, user_id: str = None) -> str:
        """Route traffic theo canary config"""
        if name not in self.canary_config:
            return "latest"

        config = self.canary_config[name]
        if random.random() < config["traffic"]:
            return config["new"]
        return config["old"]

    def promote(self, name: str, new_traffic: float):
        """Tăng traffic cho new version"""
        # 5% → 25% → 50% → 100%
        self.canary_config[name]["traffic"] = new_traffic
        if new_traffic >= 1.0:
            self.canary_config[name]["status"] = "promoted"

    def rollback(self, name: str):
        """Rollback về old version"""
        if name in self.canary_config:
            self.canary_config[name]["traffic"] = 0.0
            self.canary_config[name]["status"] = "rolled_back"
```

### 4.2 Auto-Rollback

```python
"""Tự động rollback nếu metrics xấu"""

def monitor_canary(deployer, name: str, threshold: float = 0.8):
    """Monitor canary → auto rollback nếu score < threshold"""
    config = deployer.canary_config.get(name)
    if not config:
        return

    # Lấy metrics của new version
    new_scores = get_recent_scores(name, config["new"], window_minutes=30)

    if not new_scores:
        return

    avg_score = sum(new_scores) / len(new_scores)

    if avg_score < threshold:
        deployer.rollback(name)
        send_alert(f"⚠️ Auto-rollback {name}: "
                  f"avg_score={avg_score:.2f} < {threshold}")
    elif avg_score >= 0.95 and len(new_scores) >= 100:
        # Promote nếu đủ tốt + đủ sample
        current = config["traffic"]
        deployer.promote(name, min(current * 2, 1.0))
```

> **💡 Bài tập 2:** Thiết kế canary deployment plan cho 1 prompt thực tế. Viết config: initial 5% → monitor 1h → 25% → monitor → 50% → 100%. Liệt kê metrics sẽ theo dõi.

---

## Tóm tắt

| Concept | Tool / Practice | Key point |
|---------|----------------|-----------|
| **Versioning** | YAML + Git | Mỗi prompt = file versioned |
| **Registry** | Python class | Load, render, list versions |
| **A/B Testing** | Split traffic | Deterministic by user_id |
| **Significance** | t-test, p-value | p < 0.05 để kết luận |
| **CI/CD** | GitHub Actions | Lint → Test → Deploy |
| **Canary** | Gradual rollout | 5% → 25% → 50% → 100% |
| **Rollback** | Auto-rollback | Monitor score < threshold |

## Bài tập tổng hợp

1. ✅ Hoàn thành 2 bài tập nhỏ (1, 2)
2. **Prompt Registry:** Xây complete registry: YAML format, versioning, rendering, caching. Support ít nhất 3 prompts, mỗi prompt có 2+ versions.
3. **A/B Testing Platform:** Implement full A/B: traffic splitting, logging, significance testing. Chạy experiment thật với 50+ requests mỗi variant.
4. **CI/CD Pipeline:** Setup GitHub Actions: lint YAML, chạy tests, cost estimation, deploy. PR mới tự động trigger pipeline.

> **Bài tiếp theo:** Capstone — Xây Prompt Library cho Doanh nghiệp — tổng hợp tất cả kỹ thuật thành 1 sản phẩm hoàn chỉnh.
