---
id: 019c9619-ee10-7010-f010-ee1000000010
title: 第 10 課：及時測試和評估框架
slug: bai-10-prompt-testing
description: 快速測試框架：單元測試、迴歸測試、評估指標。衡量正確性、一致性、延遲。自動化測試管道。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 9
section_title: 第 4 部分：生產和最佳實踐
course:
  id: 019c9619-aa04-7004-b004-aa0400000004
  title: 即時工程大師班：向人工智慧發出命令的藝術
  slug: prompt-engineering-masterclass
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7802" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7802)"/>

  <!-- Decorations -->
  <g>
    <circle cx="858" cy="84" r="36" fill="#fbbf24" opacity="0.09"/>
    <circle cx="616" cy="102" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="874" cy="120" r="34" fill="#fbbf24" opacity="0.07"/>
    <circle cx="632" cy="138" r="18" fill="#fbbf24" opacity="0.11"/>
    <circle cx="890" cy="156" r="32" fill="#fbbf24" opacity="0.05"/>
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
    <line x1="600" y1="184" x2="1100" y2="264" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="214" x2="1050" y2="284" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1067.7749907475932,214.5 1067.7749907475932,253.5 1034,273 1000.2250092524068,253.5 1000.2250092524068,214.5 1034,195" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 人工智慧與機器學習 — 第 9 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 10 課：及時測試和評估</tspan>
      <tspan x="60" dy="42">框架</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">即時工程大師班：向人工智慧發出命令的藝術</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：生產和最佳實踐</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

提示寫作尚未完成。 **提示也需要測試**——就像程式碼一樣。隨著時間的推移，模​​型更新、資料變化、提示漂移。如果不進行測試，直到用戶抱怨之前你不會知道提示有問題。

本文建立了一個完整的**提示測試框架**：從簡單的單元測試到回歸測試、自動評估管道。

```
Prompt Engineering Pipeline:

Write Prompt → Test → Evaluate → Deploy → Monitor → Update → Re-test
     ↑                                                          |
     └──────────────────────────────────────────────────────────┘
```

---

## 1. 為什麼需要測試提示？

### 1.1 快速漂移

```
Prompt DRIFT xảy ra khi:
1. Model update       → GPT-4 → GPT-4o: output format thay đổi
2. Context thay đổi   → Data mới, edge cases mới
3. Prompt edit nhỏ    → Sửa 1 từ, output sai hoàn toàn
4. Temperature khác   → Cùng prompt, output khác mỗi lần

→ Không test = không biết prompt đang broken
```

### 1.2 測試類型

|測試類型|目的|何時跑步 |
|----------|---------|-------------|
| **單元測試** | 1個提示+1個輸入→檢查輸出|每次編輯提示|
| **回歸測試** |舊的測試案例仍然通過 |部署之前 |
| **A/B 測試** |比較2個提示版本|選擇更好的版本 |
| **壓力測試** |邊緣情況，進階輸入 |生產前|
| **冒煙測試** |快速查看基本功能 |部署後 |

---

## 2. 提示單元測試

### 2.1 測試用例結構

```python
"""Unit test cho prompt"""
from dataclasses import dataclass

@dataclass
class PromptTestCase:
    name: str           # Tên test case
    input_text: str     # Input cho prompt
    expected: dict      # Expected output criteria
    tags: list[str]     # Tags: ["happy_path", "edge_case", "vi", "en"]

# Ví dụ: test prompt phân loại email
test_cases = [
    PromptTestCase(
        name="spam_clear",
        input_text="Bạn trúng thưởng 1 tỷ! Click link ngay!",
        expected={"category": "spam", "confidence_min": 0.9},
        tags=["happy_path", "vi"],
    ),
    PromptTestCase(
        name="business_email",
        input_text="Kính gửi anh, báo cáo Q3 đính kèm.",
        expected={"category": "business", "confidence_min": 0.8},
        tags=["happy_path", "vi"],
    ),
    PromptTestCase(
        name="ambiguous_email",
        input_text="Hey, check this out",
        expected={"category_not": "spam", "has_reasoning": True},
        tags=["edge_case", "en"],
    ),
]
```

### 2.2 測試運行器

```python
"""Simple prompt test runner"""
import json
from openai import OpenAI

client = OpenAI()

CLASSIFICATION_PROMPT = """Phân loại email sau vào 1 trong 4 categories:
spam, business, personal, newsletter.

Output JSON: {"category": "...", "confidence": 0.0-1.0, "reasoning": "..."}

Email: {input}"""

def run_test(test_case: PromptTestCase) -> dict:
    """Chạy 1 test case"""
    prompt = CLASSIFICATION_PROMPT.format(input=test_case.input_text)

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}],
        response_format={"type": "json_object"},
        temperature=0,  # Deterministic cho test
    )

    result = json.loads(response.choices[0].message.content)

    # Kiểm tra assertions
    passed = True
    failures = []

    if "category" in test_case.expected:
        if result["category"] != test_case.expected["category"]:
            passed = False
            failures.append(f"category: got {result['category']}, "
                          f"expected {test_case.expected['category']}")

    if "confidence_min" in test_case.expected:
        if result.get("confidence", 0) < test_case.expected["confidence_min"]:
            passed = False
            failures.append(f"confidence too low: {result.get('confidence')}")

    return {"passed": passed, "failures": failures, "output": result}


# Chạy toàn bộ test suite
for tc in test_cases:
    result = run_test(tc)
    status = "✅ PASS" if result["passed"] else "❌ FAIL"
    print(f"{status} | {tc.name}: {result.get('failures', [])}")
```

---

## 3. 評估指標

### 3.1 重要指標

```
┌─────────────────────────────────────────────┐
│           PROMPT EVALUATION METRICS         │
├──────────────┬──────────────────────────────┤
│ Correctness  │ Output đúng theo expected?   │
│ Consistency  │ N lần chạy → N kết quả giống │
│ Latency      │ Thời gian response           │
│ Token Usage  │ Input + Output tokens         │
│ Cost         │ $/request                     │
│ Format       │ Output đúng format (JSON...)?│
│ Safety       │ Không toxic, hallucination?  │
└──────────────┴──────────────────────────────┘
```

### 3.2 法學碩士法官

```python
"""Dùng LLM đánh giá output của LLM khác"""

JUDGE_PROMPT = """Bạn là evaluator. Đánh giá output dưới đây theo các tiêu chí.

= INPUT =
{input}

= PROMPT OUTPUT =
{output}

= EXPECTED =
{expected}

= TIÊU CHÍ =
1. Correctness (0-10): Output có đúng không?
2. Completeness (0-10): Có đầy đủ thông tin không?
3. Format (0-10): Đúng format yêu cầu không?
4. Relevance (0-10): Output có liên quan đến input không?

Output JSON:
{"correctness": N, "completeness": N, "format": N, "relevance": N,
 "overall": N, "reasoning": "..."} """

def evaluate_with_llm(input_text, output_text, expected):
    """LLM-as-Judge evaluation"""
    response = client.chat.completions.create(
        model="gpt-4o",  # Dùng model mạnh hơn làm judge
        messages=[{"role": "user", "content": JUDGE_PROMPT.format(
            input=input_text, output=output_text, expected=expected,
        )}],
        response_format={"type": "json_object"},
        temperature=0,
    )
    return json.loads(response.choices[0].message.content)
```

### 3.3 一致性測試

```python
"""Đo consistency: chạy cùng prompt N lần"""

def test_consistency(prompt: str, n_runs: int = 5):
    """Chạy prompt N lần, đo consistency"""
    results = []
    for _ in range(n_runs):
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[{"role": "user", "content": prompt}],
            temperature=0.7,  # Non-zero để test variance
        )
        results.append(response.choices[0].message.content)

    # So sánh pairwise similarity
    unique = len(set(results))
    consistency_score = 1.0 - (unique - 1) / n_runs

    return {
        "n_runs": n_runs,
        "unique_outputs": unique,
        "consistency_score": consistency_score,
        "results": results,
    }
```

> **💡練習 1：** 為您正在使用的 1 個提示（分類、提取或產生）編寫 5 個測試案例。運行測試運行程序，記錄通過/失敗率。

---

## 4. 回歸測試套件

### 4.1 黃金資料集

```python
"""Golden dataset: tập test cases "đúng chuẩn" để regression test"""
import json
from pathlib import Path

GOLDEN_FILE = "tests/golden_dataset.json"

def save_golden(test_cases: list[dict]):
    """Lưu golden dataset"""
    Path(GOLDEN_FILE).parent.mkdir(exist_ok=True)
    with open(GOLDEN_FILE, "w") as f:
        json.dump(test_cases, f, ensure_ascii=False, indent=2)

def load_golden() -> list[dict]:
    """Load golden dataset"""
    with open(GOLDEN_FILE) as f:
        return json.load(f)

# Golden dataset structure
golden_dataset = [
    {
        "id": "test_001",
        "input": "Báo cáo doanh thu tháng 9: 5.2 tỷ, tăng 15% so tháng trước",
        "prompt_version": "v2.1",
        "expected_output": {
            "category": "report",
            "metrics": [{"name": "revenue", "value": 5.2, "unit": "tỷ"}],
            "trend": "tăng",
        },
        "created_at": "2025-01-15",
        "tags": ["happy_path", "vietnamese", "metrics"],
    },
    # ... thêm 50+ test cases
]
```

### 4.2 回歸跑者

```python
"""Chạy regression: so sánh prompt mới vs golden results"""

def run_regression(prompt_template: str, golden: list[dict]):
    """Chạy regression test"""
    results = {"passed": 0, "failed": 0, "errors": []}

    for case in golden:
        try:
            output = run_prompt(prompt_template, case["input"])
            score = evaluate_with_llm(
                case["input"], output, json.dumps(case["expected_output"]),
            )

            if score["overall"] >= 7:
                results["passed"] += 1
            else:
                results["failed"] += 1
                results["errors"].append({
                    "id": case["id"],
                    "score": score["overall"],
                    "reasoning": score["reasoning"],
                })
        except Exception as e:
            results["failed"] += 1
            results["errors"].append({"id": case["id"], "error": str(e)})

    total = results["passed"] + results["failed"]
    results["pass_rate"] = results["passed"] / total if total > 0 else 0

    print(f"Regression: {results['passed']}/{total} "
          f"({results['pass_rate']:.0%}) passed")

    return results
```

---

## 5. 自動化測試管道

### 5.1 CI/CD 集成

```yaml
# .github/workflows/prompt-tests.yml
name: Prompt Testing

on:
  push:
    paths: ['prompts/**']  # Chạy khi sửa prompt files

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Python
        uses: actions/setup-python@v5
        with:
          python-version: '3.12'

      - name: Install dependencies
        run: pip install openai pytest

      - name: Run prompt unit tests
        env:
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
        run: pytest tests/test_prompts.py -v

      - name: Run regression tests
        env:
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
        run: python tests/regression_runner.py --golden tests/golden.json

      - name: Upload results
        uses: actions/upload-artifact@v4
        with:
          name: prompt-test-results
          path: tests/results/
```

### 5.2 pytest 集成

```python
"""tests/test_prompts.py — pytest cho prompts"""
import pytest
import json
from openai import OpenAI

client = OpenAI()

PROMPT_V2 = """Phân loại email: spam, business, personal, newsletter.
Output JSON: {"category": "...", "confidence": 0.0-1.0}
Email: {input}"""

@pytest.fixture
def llm():
    return client

class TestEmailClassification:
    def test_spam_detection(self, llm):
        result = run_prompt(PROMPT_V2, "Bạn trúng thưởng 10 tỷ!")
        data = json.loads(result)
        assert data["category"] == "spam"
        assert data["confidence"] >= 0.8

    def test_business_email(self, llm):
        result = run_prompt(PROMPT_V2, "Meeting Q3 review lúc 2pm")
        data = json.loads(result)
        assert data["category"] == "business"

    def test_output_format(self, llm):
        result = run_prompt(PROMPT_V2, "Hello!")
        data = json.loads(result)  # Phải parse được JSON
        assert "category" in data
        assert "confidence" in data
        assert 0 <= data["confidence"] <= 1

    @pytest.mark.parametrize("input_text,expected", [
        ("Giảm giá 90%! Mua ngay!", "spam"),
        ("Báo cáo tháng 9 đính kèm", "business"),
        ("Cuối tuần đi café không?", "personal"),
    ])
    def test_batch(self, llm, input_text, expected):
        result = run_prompt(PROMPT_V2, input_text)
        data = json.loads(result)
        assert data["category"] == expected
```

> **💡 練習 2：** 為您的提示之一建立一個 pytest 檔案。編寫至少 5 個測試案例，包括：2 個快樂路徑、2 個邊緣用例、1 個對抗性用例。跑步 `pytest -v`。

---

## 總結

|概念 |工具/技术|当 |
|--------|-----------------|--------|
| **單元測試** |斷言輸出標準 |每次編輯提示|
| **回歸** |黃金資料集比較 |部署前 |
| **一致性** | N 次方差检查 |新提示 |
| **法學碩士為法官** | GPT-4o 評估 GPT-4o-mini |複雜評估 |
| **CI/CD** | GitHub 操作 + pytest |每次提交都會自動執行 |
| **指標** |正確性、延遲、成本 |持續監控 |

## 一般練習

1. ✅ 完成 2 個小練習 (1, 2)
2. **完整測試套件：** 選擇 1 個生產提示。編寫 20 多個測試案例（黃金資料集）。包括：快樂路徑、邊緣情境、對抗性、多語言。通过率必须>= 90%。
3. **儀表板：** 執行測試套件 → 匯出 JSON 結果 → 視覺化通過率、平均分數、延遲。使用 matplotlib 或 Streamlit。
4. **自動評估器：** 建立 LLM-as-Judge 流程：輸入 → 模型 A 輸出 → 模型 B 評估 → 總分數。比较2个版本提示。

> **下一篇文章：** 提示版本控制、A/B 測試和 CI/CD — 版本管理、生產比較、回溯。
