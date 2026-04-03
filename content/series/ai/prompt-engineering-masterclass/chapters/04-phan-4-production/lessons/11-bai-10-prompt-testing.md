---
id: 019c9619-ee10-7010-f010-ee1000000010
title: 'Bài 10: Prompt Testing & Evaluation Framework'
slug: bai-10-prompt-testing
description: >-
  Framework kiểm thử prompt: unit test, regression test, evaluation metrics.
  Đo correctness, consistency, latency. Tự động hóa test pipeline.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 9
section_title: "Phần 4: Production & Best Practices"
course:
  id: 019c9619-aa04-7004-b004-aa0400000004
  title: "Prompt Engineering Masterclass: Nghệ thuật Ra lệnh cho AI"
  slug: prompt-engineering-masterclass
---

## Giới thiệu

Prompt viết xong chưa phải xong. **Prompt cũng cần test** — giống code vậy. Model update, data thay đổi, prompt drift theo thời gian. Không có test, bạn sẽ không biết prompt gặp vấn đề cho đến khi user phàn nàn.

Bài này xây dựng **Prompt Testing Framework** hoàn chỉnh: từ unit test đơn giản đến regression test, evaluation pipeline tự động.

```
Prompt Engineering Pipeline:

Write Prompt → Test → Evaluate → Deploy → Monitor → Update → Re-test
     ↑                                                          |
     └──────────────────────────────────────────────────────────┘
```

---

## 1. Tại sao cần Test Prompt?

### 1.1 Prompt Drift

```
Prompt DRIFT xảy ra khi:
1. Model update       → GPT-4 → GPT-4o: output format thay đổi
2. Context thay đổi   → Data mới, edge cases mới
3. Prompt edit nhỏ    → Sửa 1 từ, output sai hoàn toàn
4. Temperature khác   → Cùng prompt, output khác mỗi lần

→ Không test = không biết prompt đang broken
```

### 1.2 Các loại test

| Loại test | Mục đích | Khi nào chạy |
|----------|---------|-------------|
| **Unit Test** | 1 prompt + 1 input → kiểm tra output | Mỗi lần sửa prompt |
| **Regression Test** | Bộ test cases cũ vẫn pass | Trước deploy |
| **A/B Test** | So sánh 2 prompt versions | Chọn version tốt hơn |
| **Stress Test** | Edge cases, adversarial inputs | Trước production |
| **Smoke Test** | Quick check basic functionality | Sau deploy |

---

## 2. Unit Test cho Prompt

### 2.1 Cấu trúc test case

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

### 2.2 Test Runner

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

## 3. Evaluation Metrics

### 3.1 Các metrics quan trọng

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

### 3.2 LLM-as-Judge

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

### 3.3 Consistency Test

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

> **💡 Bài tập 1:** Viết 5 test cases cho 1 prompt bạn đang dùng (classification, extraction, hoặc generation). Chạy test runner, ghi nhận pass/fail rate.

---

## 4. Regression Test Suite

### 4.1 Golden Dataset

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

### 4.2 Regression Runner

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

## 5. Automated Test Pipeline

### 5.1 CI/CD Integration

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

### 5.2 pytest Integration

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

> **💡 Bài tập 2:** Tạo pytest file cho 1 prompt của bạn. Viết ít nhất 5 test cases bao gồm: 2 happy path, 2 edge case, 1 adversarial. Chạy `pytest -v`.

---

## Tóm tắt

| Concept | Tool / Technique | Khi nào |
|---------|-----------------|--------|
| **Unit Test** | Assert output criteria | Mỗi lần sửa prompt |
| **Regression** | Golden dataset comparison | Trước deploy |
| **Consistency** | N-run variance check | Prompt mới |
| **LLM-as-Judge** | GPT-4o evaluate GPT-4o-mini | Evaluation phức tạp |
| **CI/CD** | GitHub Actions + pytest | Tự động mỗi commit |
| **Metrics** | Correctness, latency, cost | Monitor liên tục |

## Bài tập tổng hợp

1. ✅ Hoàn thành 2 bài tập nhỏ (1, 2)
2. **Full Test Suite:** Chọn 1 prompt production. Viết 20+ test cases (golden dataset). Bao gồm: happy path, edge case, adversarial, multilingual. Pass rate phải >= 90%.
3. **Dashboard:** Chạy test suite → export results JSON → visualize pass rate, average scores, latency. Dùng matplotlib hoặc Streamlit.
4. **Auto-Evaluator:** Xây LLM-as-Judge pipeline: input → model A output → model B evaluate → aggregate scores. So sánh 2 versions prompt.

> **Bài tiếp theo:** Prompt Versioning, A/B Testing & CI/CD — quản lý versions, so sánh production, rollback.
