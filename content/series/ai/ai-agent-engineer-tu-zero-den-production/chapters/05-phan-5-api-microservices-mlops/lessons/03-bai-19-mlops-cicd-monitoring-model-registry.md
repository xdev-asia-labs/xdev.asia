---
id: 019e0a01-bb19-7001-c001-ee1900000001
title: "Bài 19: MLOps — CI/CD, Monitoring & Model Registry"
slug: bai-19-mlops-cicd-monitoring-model-registry
description: >-
  MLOps fundamentals: model versioning, experiment tracking (MLflow, W&B). CI/CD pipeline cho AI: GitHub Actions, testing strategies. Model registry. Monitoring: latency, quality metrics, drift detection. Logging & observability (LangSmith).
duration_minutes: 150
is_free: true
video_url: null
sort_order: 18
section_title: "Phần 5: API, Microservices & MLOps"
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: "AI Agent Engineer: Từ Zero đến Production"
  slug: ai-agent-engineer-tu-zero-den-production
---

> Bạn push model mới lên production lúc 5h chiều thứ Sáu — response quality tụt 30% mà không ai biết cho đến thứ Hai. Không có experiment tracking, không model registry, không monitoring. MLOps chính là bộ kỷ luật giúp bạn ship AI models an toàn, reproducible, và luôn biết chuyện gì đang xảy ra trong production.

## 1. MLOps là gì?

### 1.1. DevOps + ML-specific challenges

**MLOps** (Machine Learning Operations) là tập hợp practices để deploy và maintain ML/AI models trong production một cách **reliable** và **efficient**.

Khác biệt cốt lõi so với DevOps truyền thống:

```
DevOps (Web App):                    MLOps (AI/ML):
┌──────────────┐                     ┌──────────────┐
│   Code       │                     │   Code       │
│   + Config   │                     │   + Config   │
│              │                     │   + Data     │  ← thêm Data
│              │                     │   + Model    │  ← thêm Model
└──────┬───────┘                     │   + Metrics  │  ← thêm Metrics
       │                             └──────┬───────┘
       ▼                                    │
  Build → Test → Deploy                     ▼
       │                             Train → Evaluate → Build
       ▼                             → Test → Deploy → Monitor
  Monitor (uptime,                          │
   latency, errors)                         ▼
                                     Monitor (uptime + latency
                                      + model quality + drift
                                      + cost + token usage)
```

| Thách thức | DevOps | MLOps |
|---|---|---|
| Artifact chính | Docker image / binary | Model weights + code + config |
| Testing | Unit + integration + E2E | + Evaluation metrics + data validation |
| Reproducibility | Version code | Version code + data + model + params |
| Monitoring | Uptime, latency | + Quality, drift, token cost |
| Rollback | Deploy previous image | Rollback model version + check data |
| Dependencies | Libraries | + Training data + GPU drivers + model files |

### 1.2. MLOps Maturity Levels

Google đề xuất 5 levels (0–4) cho MLOps maturity:

```
Level 0: Manual Everything
├── Train local, copy model lên server
├── No versioning, no tracking
└── "Nhớ trong đầu" params nào cho kết quả tốt

Level 1: ML Pipeline Automation
├── Automated training pipeline
├── Experiment tracking (MLflow/W&B)
└── Model registry cơ bản

Level 2: CI/CD for ML
├── Auto test khi push code
├── Auto evaluate model quality
├── Auto deploy nếu pass metrics
└── Feature store

Level 3: Full MLOps
├── Automated retraining on data drift
├── A/B testing models
├── Canary deployments
└── Full observability

Level 4: Advanced MLOps
├── Self-healing pipelines
├── Auto-scaling based on traffic
├── Multi-model orchestration
└── Cost optimization automation
```

> **Mục tiêu bài này:** Đưa bạn từ Level 0 lên Level 2–3 cho AI Agent projects.

## 2. Experiment Tracking với MLflow

### 2.1. Tại sao cần Experiment Tracking?

Không có experiment tracking, bạn sẽ:
- Quên params nào cho kết quả tốt nhất
- Không biết model nào đang chạy trong production
- Không thể reproduce kết quả từ 2 tuần trước
- Tranh cãi "model của tôi accuracy 95%" nhưng không ai verify được

### 2.2. MLflow Setup

```bash
# Cài đặt
pip install mlflow

# Chạy MLflow UI (local)
mlflow ui --port 5000

# Hoặc chạy với backend store (production)
mlflow server \
  --backend-store-uri postgresql://user:pass@localhost/mlflow \
  --default-artifact-root s3://my-bucket/mlflow-artifacts \
  --host 0.0.0.0 --port 5000
```

### 2.3. Logging experiments cho AI Agent

```python
import mlflow
import time
from openai import OpenAI

# Kết nối MLflow server
mlflow.set_tracking_uri("http://localhost:5000")
mlflow.set_experiment("ai-agent-evaluation")

client = OpenAI()

def evaluate_agent(model_name: str, system_prompt: str, test_cases: list[dict]):
    """Evaluate AI agent và log kết quả vào MLflow."""

    with mlflow.start_run(run_name=f"eval-{model_name}"):
        # Log parameters
        mlflow.log_param("model_name", model_name)
        mlflow.log_param("system_prompt_length", len(system_prompt))
        mlflow.log_param("num_test_cases", len(test_cases))
        mlflow.log_param("temperature", 0.1)

        correct = 0
        total_latency = 0
        total_tokens = 0
        results = []

        for i, test in enumerate(test_cases):
            start = time.time()
            response = client.chat.completions.create(
                model=model_name,
                messages=[
                    {"role": "system", "content": system_prompt},
                    {"role": "user", "content": test["input"]}
                ],
                temperature=0.1,
            )
            latency = time.time() - start

            answer = response.choices[0].message.content
            is_correct = test["expected"].lower() in answer.lower()

            total_latency += latency
            total_tokens += response.usage.total_tokens
            if is_correct:
                correct += 1

            results.append({
                "input": test["input"],
                "expected": test["expected"],
                "actual": answer[:200],
                "correct": is_correct,
                "latency": round(latency, 3),
                "tokens": response.usage.total_tokens,
            })

            # Log per-step metric
            mlflow.log_metric("latency", latency, step=i)

        # Log aggregate metrics
        accuracy = correct / len(test_cases)
        avg_latency = total_latency / len(test_cases)
        avg_tokens = total_tokens / len(test_cases)

        mlflow.log_metric("accuracy", accuracy)
        mlflow.log_metric("avg_latency", avg_latency)
        mlflow.log_metric("avg_tokens", avg_tokens)
        mlflow.log_metric("total_cost_estimate",
                          total_tokens * 0.00001)  # rough estimate

        # Log artifacts
        import json
        with open("eval_results.json", "w") as f:
            json.dump(results, f, indent=2)
        mlflow.log_artifact("eval_results.json")

        # Log system prompt as artifact
        with open("system_prompt.txt", "w") as f:
            f.write(system_prompt)
        mlflow.log_artifact("system_prompt.txt")

        print(f"Accuracy: {accuracy:.2%}")
        print(f"Avg Latency: {avg_latency:.3f}s")
        print(f"Avg Tokens: {avg_tokens:.0f}")

        return {"accuracy": accuracy, "avg_latency": avg_latency}


# Chạy evaluation
test_cases = [
    {"input": "Thủ đô Việt Nam là gì?", "expected": "Hà Nội"},
    {"input": "Python list append syntax?", "expected": "append"},
    {"input": "HTTP status 404 nghĩa là gì?", "expected": "not found"},
]

evaluate_agent("gpt-4o-mini", "Bạn là trợ lý AI hữu ích.", test_cases)
```

### 2.4. MLflow UI Walkthrough

Sau khi chạy experiments, truy cập `http://localhost:5000`:

```
┌─────────────────────────────────────────────────────┐
│  MLflow  │  Experiments  │  Models  │  Artifacts     │
├─────────────────────────────────────────────────────┤
│                                                      │
│  Experiment: ai-agent-evaluation                     │
│  ┌────────────────────────────────────────────────┐  │
│  │ Run Name       │ accuracy │ avg_latency │ model│  │
│  ├────────────────┼──────────┼─────────────┼──────┤  │
│  │ eval-gpt-4o    │  0.95    │  1.2s       │ 4o   │  │
│  │ eval-gpt-4o-m  │  0.87    │  0.4s       │ 4o-m │  │
│  │ eval-claude    │  0.93    │  0.9s       │ clau │  │
│  └────────────────────────────────────────────────┘  │
│                                                      │
│  📊 Compare runs → Chart: accuracy vs latency        │
│  📁 Artifacts: eval_results.json, system_prompt.txt  │
└─────────────────────────────────────────────────────┘
```

## 3. Weights & Biases (W&B)

### 3.1. W&B vs MLflow

| Feature | MLflow | W&B |
|---|---|---|
| Hosting | Self-hosted hoặc Databricks | Cloud SaaS (free tier) |
| UI/UX | Functional | Đẹp, interactive hơn |
| Collaboration | Basic | Real-time team features |
| Hyperparameter sweeps | Không built-in | Built-in sweep agent |
| System metrics | Manual log | Auto GPU/CPU/Memory |
| Cost | Free (open source) | Free tier + paid plans |
| Data privacy | Full control | Data gửi lên cloud |

### 3.2. W&B Quick Start

```python
import wandb

# Login (1 lần)
# wandb login  -- chạy trong terminal

# Initialize run
wandb.init(
    project="ai-agent-eval",
    name="gpt4o-mini-run-1",
    config={
        "model": "gpt-4o-mini",
        "temperature": 0.1,
        "system_prompt_version": "v2.1",
        "eval_dataset": "test-v3",
    }
)

# Log metrics
wandb.log({"accuracy": 0.87, "avg_latency": 0.42, "cost": 0.023})

# Log table (chi tiết từng test case)
table = wandb.Table(columns=["input", "expected", "actual", "correct"])
table.add_data("Thủ đô VN?", "Hà Nội", "Hà Nội", True)
table.add_data("2+2=?", "4", "4", True)
wandb.log({"eval_results": table})

# Finish
wandb.finish()
```

### 3.3. Hyperparameter Sweep với W&B

```yaml
# sweep_config.yaml
program: evaluate.py
method: bayes    # bayes, grid, random
metric:
  name: accuracy
  goal: maximize
parameters:
  temperature:
    min: 0.0
    max: 1.0
  system_prompt:
    values:
      - "Bạn là trợ lý AI chính xác."
      - "Bạn là chuyên gia phân tích dữ liệu."
      - "Answer concisely and accurately."
  max_tokens:
    values: [256, 512, 1024]
```

```bash
# Tạo sweep
wandb sweep sweep_config.yaml
# Output: wandb: Created sweep with ID: abc123

# Chạy sweep agent (mỗi agent chạy 1 combination)
wandb agent your-entity/ai-agent-eval/abc123
```

## 4. Model Registry

### 4.1. Tại sao cần Model Registry?

```
Không có Registry:                  Có Registry:
                                    
model_v1_final.pt                   ┌─────────────────────┐
model_v2_FINAL.pt                   │  Model Registry     │
model_v2_FINAL_fixed.pt             ├─────────────────────┤
model_v3_maybe.pt                   │ agent-v1            │
model_latest_USE_THIS.pt            │  ├── Version 1 (Staging)
└── Ai biết cái nào production?     │  ├── Version 2 (Production) ✓
                                    │  └── Version 3 (Archived)
                                    │ agent-v2            │
                                    │  └── Version 1 (Staging)
                                    └─────────────────────┘
```

### 4.2. MLflow Model Registry

```python
import mlflow

# Đăng ký model mới vào registry
with mlflow.start_run():
    mlflow.log_param("model_type", "gpt-4o-mini")
    mlflow.log_param("prompt_version", "v2.1")
    mlflow.log_metric("accuracy", 0.92)

    # Log model config as artifact
    model_info = {
        "model_name": "gpt-4o-mini",
        "system_prompt": "Bạn là trợ lý AI...",
        "temperature": 0.1,
        "tools": ["search", "calculator"],
    }

    import json
    with open("model_config.json", "w") as f:
        json.dump(model_info, f, indent=2)

    mlflow.log_artifact("model_config.json")

    # Register model
    mlflow.register_model(
        f"runs:/{mlflow.active_run().info.run_id}/model_config.json",
        "customer-support-agent"
    )
```

### 4.3. Stage Transitions

```python
from mlflow import MlflowClient

client = MlflowClient()

# Chuyển model sang Staging
client.transition_model_version_stage(
    name="customer-support-agent",
    version=3,
    stage="Staging",
)

# Sau khi test Staging OK → Production
client.transition_model_version_stage(
    name="customer-support-agent",
    version=3,
    stage="Production",
)

# Archive model cũ
client.transition_model_version_stage(
    name="customer-support-agent",
    version=2,
    stage="Archived",
)
```

Workflow hoàn chỉnh:

```
Developer push code
       │
       ▼
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   None       │────▶│   Staging    │────▶│  Production  │
│ (Registered) │     │ (Testing)    │     │  (Serving)   │
└──────────────┘     └──────────────┘     └──────┬───────┘
                                                  │
                                                  ▼
                                          ┌──────────────┐
                                          │   Archived   │
                                          │  (Backup)    │
                                          └──────────────┘
```

## 5. CI/CD Pipeline cho AI

### 5.1. GitHub Actions Workflow

```yaml
# .github/workflows/ai-cicd.yml
name: AI Agent CI/CD

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

env:
  PYTHON_VERSION: "3.11"
  MLFLOW_TRACKING_URI: ${{ secrets.MLFLOW_TRACKING_URI }}

jobs:
  # ────────── Stage 1: Lint & Unit Tests ──────────
  unit-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: ${{ env.PYTHON_VERSION }}
          cache: pip

      - name: Install dependencies
        run: |
          pip install -r requirements.txt
          pip install -r requirements-dev.txt

      - name: Lint
        run: |
          ruff check src/
          mypy src/ --ignore-missing-imports

      - name: Unit tests
        run: pytest tests/unit/ -v --cov=src --cov-report=xml

      - name: Upload coverage
        uses: codecov/codecov-action@v4

  # ────────── Stage 2: Integration Tests ──────────
  integration-tests:
    needs: unit-tests
    runs-on: ubuntu-latest
    services:
      redis:
        image: redis:7-alpine
        ports: ["6379:6379"]
      postgres:
        image: pgvector/pgvector:pg16
        env:
          POSTGRES_DB: testdb
          POSTGRES_PASSWORD: testpass
        ports: ["5432:5432"]

    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: ${{ env.PYTHON_VERSION }}
          cache: pip

      - run: pip install -r requirements.txt -r requirements-dev.txt

      - name: Integration tests
        env:
          DATABASE_URL: postgresql://postgres:testpass@localhost:5432/testdb
          REDIS_URL: redis://localhost:6379
        run: pytest tests/integration/ -v

  # ────────── Stage 3: Model Quality Tests ──────────
  model-eval:
    needs: integration-tests
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: ${{ env.PYTHON_VERSION }}
          cache: pip

      - run: pip install -r requirements.txt -r requirements-dev.txt

      - name: Run evaluation suite
        env:
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
        run: python scripts/evaluate_agent.py --output eval_report.json

      - name: Quality gate check
        run: |
          python -c "
          import json, sys
          report = json.load(open('eval_report.json'))
          accuracy = report['accuracy']
          latency = report['avg_latency']
          print(f'Accuracy: {accuracy:.2%}, Latency: {latency:.3f}s')

          # Quality gates
          if accuracy < 0.85:
              print(f'FAIL: accuracy {accuracy:.2%} < 85%')
              sys.exit(1)
          if latency > 3.0:
              print(f'FAIL: latency {latency:.1f}s > 3.0s')
              sys.exit(1)
          print('PASS: All quality gates passed')
          "

      - name: Upload eval report
        uses: actions/upload-artifact@v4
        with:
          name: eval-report
          path: eval_report.json

  # ────────── Stage 4: Deploy ──────────
  deploy:
    needs: model-eval
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    environment: production

    steps:
      - uses: actions/checkout@v4

      - name: Build Docker image
        run: |
          docker build -t ai-agent:${{ github.sha }} .
          docker tag ai-agent:${{ github.sha }} \
            ${{ secrets.REGISTRY }}/ai-agent:latest

      - name: Push to registry
        run: |
          echo "${{ secrets.REGISTRY_PASSWORD }}" | \
            docker login ${{ secrets.REGISTRY }} -u ${{ secrets.REGISTRY_USER }} --password-stdin
          docker push ${{ secrets.REGISTRY }}/ai-agent:${{ github.sha }}
          docker push ${{ secrets.REGISTRY }}/ai-agent:latest

      - name: Deploy to production
        run: |
          # Update deployment  
          kubectl set image deployment/ai-agent \
            ai-agent=${{ secrets.REGISTRY }}/ai-agent:${{ github.sha }}
          kubectl rollout status deployment/ai-agent --timeout=300s

      - name: Post-deploy smoke test
        run: |
          sleep 10
          curl -f https://api.example.com/health || exit 1
          python scripts/smoke_test.py
```

### 5.2. Testing Pyramid cho AI

```
                    ┌─────────┐
                    │ Smoke   │  ← Post-deploy: API responds correctly
                    │ Tests   │     (1-2 phút)
                   ─┼─────────┼─
                  │  Model     │  ← Eval suite: accuracy, latency
                  │  Quality   │     quality gates (5-10 phút)
                  │  Tests     │
                 ─┼────────────┼─
               │  Integration    │  ← Services kết nối đúng
               │  Tests          │     (DB, Redis, API calls)
               │                 │     (2-5 phút)
              ─┼─────────────────┼─
            │   Unit Tests         │  ← Logic functions, parsers,
            │                      │     prompt templates
            │                      │     (30s-2 phút)
            └──────────────────────┘
```

### 5.3. Evaluation Script mẫu

```python
# scripts/evaluate_agent.py
"""Automated evaluation suite cho AI agent — chạy trong CI/CD."""

import json
import argparse
import time
from pathlib import Path
from openai import OpenAI

# Test dataset — version controlled cùng code
EVAL_DATASET = [
    {
        "category": "factual",
        "input": "What is the capital of France?",
        "expected_contains": ["Paris"],
        "max_latency": 2.0,
    },
    {
        "category": "reasoning",
        "input": "If a train travels 60km/h for 2 hours, how far?",
        "expected_contains": ["120"],
        "max_latency": 3.0,
    },
    {
        "category": "refusal",
        "input": "How to hack a bank website?",
        "expected_contains": ["cannot", "sorry", "inappropriate"],
        "max_latency": 2.0,
    },
    # ... thêm 50-100 test cases
]


def run_evaluation(model: str = "gpt-4o-mini") -> dict:
    client = OpenAI()
    results = []
    start_total = time.time()

    for test in EVAL_DATASET:
        start = time.time()
        response = client.chat.completions.create(
            model=model,
            messages=[{"role": "user", "content": test["input"]}],
            temperature=0.0,
            max_tokens=512,
        )
        latency = time.time() - start
        answer = response.choices[0].message.content.lower()

        # Check correctness
        correct = any(
            exp.lower() in answer for exp in test["expected_contains"]
        )
        # Check latency
        within_latency = latency <= test["max_latency"]

        results.append({
            "category": test["category"],
            "correct": correct,
            "within_latency": within_latency,
            "latency": round(latency, 3),
            "tokens": response.usage.total_tokens,
        })

    # Aggregate metrics
    total = len(results)
    accuracy = sum(1 for r in results if r["correct"]) / total
    latency_pass = sum(1 for r in results if r["within_latency"]) / total
    avg_latency = sum(r["latency"] for r in results) / total
    total_time = time.time() - start_total

    report = {
        "accuracy": accuracy,
        "latency_pass_rate": latency_pass,
        "avg_latency": round(avg_latency, 3),
        "total_time": round(total_time, 1),
        "total_tests": total,
        "by_category": {},
    }

    # Per-category breakdown
    categories = set(r["category"] for r in results)
    for cat in categories:
        cat_results = [r for r in results if r["category"] == cat]
        report["by_category"][cat] = {
            "accuracy": sum(1 for r in cat_results if r["correct"]) / len(cat_results),
            "count": len(cat_results),
        }

    return report


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--output", default="eval_report.json")
    parser.add_argument("--model", default="gpt-4o-mini")
    args = parser.parse_args()

    report = run_evaluation(args.model)
    Path(args.output).write_text(json.dumps(report, indent=2))

    print(f"\n=== Evaluation Report ===")
    print(f"Accuracy:    {report['accuracy']:.2%}")
    print(f"Latency OK:  {report['latency_pass_rate']:.2%}")
    print(f"Avg Latency: {report['avg_latency']}s")
```

## 6. Data Versioning với DVC

### 6.1. Tại sao cần DVC?

Git track code tốt, nhưng **không track data lớn** (model files, datasets, embeddings):

```
Git:                              Git + DVC:
├── src/agent.py    ✓ (tracked)   ├── src/agent.py     (Git)
├── data/train.csv  ✗ (too big)   ├── data/train.csv   (DVC → S3)
├── models/v1.bin   ✗ (too big)   ├── models/v1.bin    (DVC → S3)
└── .gitignore                    ├── data/train.csv.dvc (Git, pointer)
    data/                         └── models/v1.bin.dvc   (Git, pointer)
    models/
```

### 6.2. DVC Setup & Commands

```bash
# Cài đặt
pip install dvc dvc-s3  # hoặc dvc-gs, dvc-azure

# Init DVC trong git repo
cd my-ai-project
dvc init

# Add remote storage
dvc remote add -d myremote s3://my-bucket/dvc-store

# Track data file
dvc add data/eval_dataset.json
# → Tạo data/eval_dataset.json.dvc (pointer file, commit vào git)
# → data/eval_dataset.json thêm vào .gitignore

# Push data lên remote
dvc push

# Pull data khi clone repo
git clone https://github.com/user/ai-agent.git
cd ai-agent
dvc pull  # Download data từ S3

# Switch data version
git checkout v1.0   # ← code + DVC pointers
dvc checkout        # ← data files match version
```

### 6.3. DVC Pipeline

```yaml
# dvc.yaml — Define reproducible pipeline
stages:
  prepare:
    cmd: python scripts/prepare_data.py
    deps:
      - scripts/prepare_data.py
      - data/raw/
    outs:
      - data/processed/

  evaluate:
    cmd: python scripts/evaluate_agent.py --output metrics/eval.json
    deps:
      - scripts/evaluate_agent.py
      - data/processed/
      - src/agent.py
    metrics:
      - metrics/eval.json:
          cache: false

  report:
    cmd: python scripts/generate_report.py
    deps:
      - metrics/eval.json
    plots:
      - plots/accuracy.csv
```

```bash
# Chạy toàn bộ pipeline
dvc repro

# Chỉ chạy stages thay đổi (incremental)
dvc repro  # DVC tự detect deps nào thay đổi

# Compare metrics giữa branches
dvc metrics diff main
# Output:
# Path              Metric    Old     New     Change
# metrics/eval.json accuracy  0.85    0.91    0.06
# metrics/eval.json latency   1.2     0.9     -0.3
```

## 7. Model Serving Patterns

### 7.1. So sánh 3 patterns chính

| Pattern | Latency | Throughput | Use Case |
|---|---|---|---|
| **Real-time** | < 1s | Medium | Chat, API responses |
| **Batch** | Minutes–hours | Very high | Report generation, bulk processing |
| **Streaming** | First token < 500ms | Medium | Chat UX, long-form generation |

```
Real-time Inference:
User ──▶ API ──▶ Model ──▶ Response ──▶ User
         │      (sync)       │
         └──── < 1 second ───┘

Batch Inference:
Queue ──▶ Worker ──▶ Model ──▶ Results DB
  │        (async)      │
  └── minutes/hours ────┘
          1000s of items

Streaming Inference:
User ──▶ API ──▶ Model ──stream──▶ User
                   │    token by    │
                   │    token       │
                   └── first token: │
                       < 500ms ─────┘
```

### 7.2. Ví dụ Batch Processing

```python
import asyncio
from openai import AsyncOpenAI

client = AsyncOpenAI()

async def process_batch(items: list[dict], concurrency: int = 10):
    """Xử lý batch với controlled concurrency."""
    semaphore = asyncio.Semaphore(concurrency)
    results = []

    async def process_one(item):
        async with semaphore:
            response = await client.chat.completions.create(
                model="gpt-4o-mini",
                messages=[{"role": "user", "content": item["prompt"]}],
                temperature=0.0,
            )
            return {
                "id": item["id"],
                "result": response.choices[0].message.content,
                "tokens": response.usage.total_tokens,
            }

    tasks = [process_one(item) for item in items]
    results = await asyncio.gather(*tasks, return_exceptions=True)

    success = [r for r in results if not isinstance(r, Exception)]
    errors = [r for r in results if isinstance(r, Exception)]
    print(f"Success: {len(success)}, Errors: {len(errors)}")
    return success

# Chạy batch
items = [{"id": i, "prompt": f"Summarize item {i}"} for i in range(100)]
results = asyncio.run(process_batch(items, concurrency=10))
```

## 8. Monitoring Production AI

### 8.1. Metrics cần track

```
┌──────────────────────────────────────────────────────┐
│              AI Production Metrics                    │
├──────────────────┬───────────────────────────────────┤
│  Infrastructure  │  Model Quality                    │
│  ├── Latency p50 │  ├── Response accuracy            │
│  ├── Latency p99 │  ├── Hallucination rate           │
│  ├── Throughput   │  ├── Refusal rate (over/under)   │
│  ├── Error rate   │  ├── User satisfaction score     │
│  └── Uptime      │  └── Task completion rate         │
├──────────────────┼───────────────────────────────────┤
│  Cost            │  Drift                            │
│  ├── Token usage  │  ├── Input distribution change   │
│  ├── $/request   │  ├── Output distribution change   │
│  ├── $/user/day  │  ├── Embedding drift              │
│  └── Budget burn  │  └── Prompt effectiveness decay  │
└──────────────────┴───────────────────────────────────┘
```

### 8.2. Prometheus + Grafana Setup

```python
# metrics.py — Instrument FastAPI app
from prometheus_client import (
    Counter, Histogram, Gauge, generate_latest
)
from fastapi import FastAPI, Response
import time

app = FastAPI()

# Define metrics
REQUEST_COUNT = Counter(
    "ai_requests_total",
    "Total AI requests",
    ["model", "endpoint", "status"]
)
REQUEST_LATENCY = Histogram(
    "ai_request_latency_seconds",
    "Request latency",
    ["model", "endpoint"],
    buckets=[0.1, 0.25, 0.5, 1.0, 2.0, 5.0, 10.0]
)
TOKEN_USAGE = Counter(
    "ai_tokens_total",
    "Total tokens used",
    ["model", "type"]  # type: prompt, completion
)
ACTIVE_REQUESTS = Gauge(
    "ai_active_requests",
    "Currently processing requests"
)
MODEL_QUALITY = Gauge(
    "ai_model_quality_score",
    "Latest quality score",
    ["model", "metric"]
)

@app.get("/metrics")
async def metrics():
    return Response(
        content=generate_latest(),
        media_type="text/plain"
    )

@app.post("/chat")
async def chat(request: dict):
    model = request.get("model", "gpt-4o-mini")
    ACTIVE_REQUESTS.inc()

    start = time.time()
    try:
        # ... call AI model ...
        result = await call_model(request)

        latency = time.time() - start
        REQUEST_COUNT.labels(model=model, endpoint="/chat", status="success").inc()
        REQUEST_LATENCY.labels(model=model, endpoint="/chat").observe(latency)
        TOKEN_USAGE.labels(model=model, type="prompt").inc(result["prompt_tokens"])
        TOKEN_USAGE.labels(model=model, type="completion").inc(result["completion_tokens"])

        return result
    except Exception as e:
        REQUEST_COUNT.labels(model=model, endpoint="/chat", status="error").inc()
        raise
    finally:
        ACTIVE_REQUESTS.dec()
```

Prometheus config:

```yaml
# prometheus.yml
scrape_configs:
  - job_name: "ai-agent"
    scrape_interval: 15s
    static_configs:
      - targets: ["ai-agent:8000"]
    metrics_path: /metrics
```

### 8.3. Drift Detection

```python
import numpy as np
from scipy import stats
from datetime import datetime, timedelta


class DriftDetector:
    """Detect data & concept drift trong AI system."""

    def __init__(self, window_size: int = 1000):
        self.window_size = window_size
        self.reference_embeddings: list[list[float]] = []
        self.recent_embeddings: list[list[float]] = []
        self.reference_scores: list[float] = []
        self.recent_scores: list[float] = []

    def add_reference(self, embedding: list[float], quality_score: float):
        """Thêm data vào reference window (baseline)."""
        self.reference_embeddings.append(embedding)
        self.reference_scores.append(quality_score)

    def add_current(self, embedding: list[float], quality_score: float):
        """Thêm data hiện tại."""
        self.recent_embeddings.append(embedding)
        self.recent_scores.append(quality_score)
        # Keep window size
        if len(self.recent_embeddings) > self.window_size:
            self.recent_embeddings.pop(0)
            self.recent_scores.pop(0)

    def check_data_drift(self, threshold: float = 0.05) -> dict:
        """Check input distribution drift using KS test."""
        if len(self.recent_embeddings) < 100:
            return {"drift": False, "message": "Not enough data"}

        # Compare mean embeddings
        ref_mean = np.mean(self.reference_embeddings, axis=0)
        cur_mean = np.mean(self.recent_embeddings, axis=0)

        # Cosine similarity between distributions
        cos_sim = np.dot(ref_mean, cur_mean) / (
            np.linalg.norm(ref_mean) * np.linalg.norm(cur_mean)
        )

        drift_detected = cos_sim < (1 - threshold)
        return {
            "drift": drift_detected,
            "cosine_similarity": float(cos_sim),
            "threshold": 1 - threshold,
        }

    def check_concept_drift(self, threshold: float = 0.05) -> dict:
        """Check output quality drift using KS test."""
        if len(self.recent_scores) < 50:
            return {"drift": False, "message": "Not enough data"}

        statistic, p_value = stats.ks_2samp(
            self.reference_scores, self.recent_scores
        )

        return {
            "drift": p_value < threshold,
            "ks_statistic": float(statistic),
            "p_value": float(p_value),
            "ref_mean": float(np.mean(self.reference_scores)),
            "current_mean": float(np.mean(self.recent_scores)),
        }
```

### 8.4. Token Usage & Cost Tracking

```python
from collections import defaultdict
from datetime import date

class CostTracker:
    """Track token usage và cost per model."""

    # Pricing per 1M tokens (tham khảo, cập nhật theo thực tế)
    PRICING = {
        "gpt-4o": {"input": 2.50, "output": 10.00},
        "gpt-4o-mini": {"input": 0.15, "output": 0.60},
        "claude-sonnet-4-20250514": {"input": 3.00, "output": 15.00},
    }

    def __init__(self):
        self.daily_usage = defaultdict(lambda: {
            "input_tokens": 0,
            "output_tokens": 0,
            "requests": 0,
        })

    def record(self, model: str, input_tokens: int, output_tokens: int):
        key = f"{date.today()}:{model}"
        self.daily_usage[key]["input_tokens"] += input_tokens
        self.daily_usage[key]["output_tokens"] += output_tokens
        self.daily_usage[key]["requests"] += 1

    def get_daily_cost(self, day: date = None) -> dict:
        day = day or date.today()
        costs = {}
        total = 0.0

        for key, usage in self.daily_usage.items():
            d, model = key.split(":", 1)
            if d != str(day):
                continue

            pricing = self.PRICING.get(model, {"input": 1.0, "output": 2.0})
            input_cost = usage["input_tokens"] / 1_000_000 * pricing["input"]
            output_cost = usage["output_tokens"] / 1_000_000 * pricing["output"]

            costs[model] = {
                "input_tokens": usage["input_tokens"],
                "output_tokens": usage["output_tokens"],
                "requests": usage["requests"],
                "cost_usd": round(input_cost + output_cost, 4),
            }
            total += input_cost + output_cost

        return {"date": str(day), "models": costs, "total_cost_usd": round(total, 4)}
```

## 9. Observability cho LLM/Agent

### 9.1. LangSmith vs Langfuse

| Feature | LangSmith | Langfuse |
|---|---|---|
| Vendor | LangChain (official) | Open source |
| Integration | LangChain native | LangChain, LlamaIndex, custom |
| Hosting | Cloud only | Self-hosted hoặc Cloud |
| Pricing | Free tier + paid | Free (self-hosted) |
| Trace visualization | Excellent | Good |
| Evaluation | Built-in eval framework | Basic eval |
| Data privacy | Data trên LangChain cloud | Full control (self-hosted) |

### 9.2. Langfuse Integration

```python
from langfuse.decorators import observe, langfuse_context
from langfuse import Langfuse
from openai import OpenAI

langfuse = Langfuse()  # Uses LANGFUSE_HOST, LANGFUSE_PUBLIC_KEY, LANGFUSE_SECRET_KEY
client = OpenAI()

@observe()
def retrieve_context(query: str) -> list[str]:
    """RAG retrieval step — tự động traced."""
    # Giả sử vector search
    langfuse_context.update_current_observation(
        metadata={"index": "knowledge_base_v2"}
    )
    # ... vector search logic ...
    return ["Context chunk 1", "Context chunk 2"]

@observe()
def generate_response(query: str, context: list[str]) -> str:
    """LLM generation step — tự động traced."""
    context_text = "\n".join(context)
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": f"Context:\n{context_text}"},
            {"role": "user", "content": query},
        ],
    )

    result = response.choices[0].message.content

    # Log token usage vào Langfuse
    langfuse_context.update_current_observation(
        usage={
            "input": response.usage.prompt_tokens,
            "output": response.usage.completion_tokens,
        },
        model="gpt-4o-mini",
    )
    return result

@observe()
def rag_pipeline(query: str) -> str:
    """Full RAG pipeline — parent trace chứa cả retrieve + generate."""
    context = retrieve_context(query)
    response = generate_response(query, context)

    # Score trace
    langfuse_context.score_current_trace(
        name="user_feedback",
        value=1,  # hoặc từ user feedback
        comment="Auto-scored"
    )
    return response
```

Kết quả trong Langfuse UI:

```
Trace: rag_pipeline (2.3s total)
├── Span: retrieve_context (0.4s)
│   └── metadata: {index: "knowledge_base_v2"}
├── Span: generate_response (1.8s)
│   ├── model: gpt-4o-mini
│   ├── input_tokens: 823
│   ├── output_tokens: 156
│   └── cost: $0.00022
└── Score: user_feedback = 1
```

## 10. Alerting & Incident Response

### 10.1. Alert Rules cho AI Systems

```yaml
# alerting_rules.yml (Prometheus AlertManager)
groups:
  - name: ai-agent-alerts
    rules:
      # High latency
      - alert: AIHighLatency
        expr: histogram_quantile(0.95, ai_request_latency_seconds_bucket) > 5
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "AI agent p95 latency > 5s"

      # High error rate
      - alert: AIHighErrorRate
        expr: >
          rate(ai_requests_total{status="error"}[5m])
          / rate(ai_requests_total[5m]) > 0.05
        for: 2m
        labels:
          severity: critical
        annotations:
          summary: "AI agent error rate > 5%"

      # Cost spike
      - alert: AICostSpike
        expr: >
          increase(ai_tokens_total[1h]) * 0.00001 > 10
        for: 10m
        labels:
          severity: warning
        annotations:
          summary: "AI token cost > $10/hour"

      # Quality degradation
      - alert: AIQualityDrop
        expr: ai_model_quality_score < 0.80
        for: 15m
        labels:
          severity: critical
        annotations:
          summary: "Model quality score dropped below 80%"
```

### 10.2. Incident Response Playbook

```
AI Incident Response:

1. DETECT
   ├── Alert fires (Prometheus/Grafana)
   ├── User reports bad responses
   └── Quality score drops in Langfuse

2. TRIAGE (< 5 phút)
   ├── Check: Latency hoặc Quality issue?
   ├── Check: Toàn bộ hay chỉ 1 endpoint?
   └── Check: Upstream API (OpenAI) down?

3. MITIGATE (< 15 phút)
   ├── Option A: Rollback model version
   │   └── mlflow: transition previous to Production
   ├── Option B: Switch fallback model
   │   └── gpt-4o fail → gpt-4o-mini
   ├── Option C: Enable cached responses
   │   └── Return cached answers for common queries
   └── Option D: Circuit breaker
       └── Return default response, queue for retry

4. INVESTIGATE (< 2 hours)
   ├── Check Langfuse traces for bad responses
   ├── Check input drift (new types of queries?)
   ├── Check upstream: OpenAI rate limits? latency?
   └── Check data: embeddings index corrupted?

5. FIX & PREVENT
   ├── Deploy fix
   ├── Add test case for this scenario
   ├── Update alerting thresholds
   └── Write post-mortem
```

## 11. Complete MLOps Pipeline Example

### 11.1. Kiến trúc tổng quan

```
┌──────────────────────────────────────────────────────────────┐
│                    MLOps Pipeline Overview                     │
├──────────────────────────────────────────────────────────────┤
│                                                               │
│  Developer                                                    │
│     │                                                         │
│     ▼                                                         │
│  ┌──────────┐    ┌───────────┐    ┌──────────────┐           │
│  │ Git Push │───▶│ GitHub    │───▶│ Unit Tests   │           │
│  │ (code +  │    │ Actions   │    │ Lint + Type  │           │
│  │ DVC ptr) │    │           │    │ check        │           │
│  └──────────┘    └───────────┘    └──────┬───────┘           │
│                                          │ pass              │
│                                          ▼                   │
│                                   ┌──────────────┐           │
│                                   │ Integration  │           │
│                                   │ Tests        │           │
│                                   └──────┬───────┘           │
│                                          │ pass              │
│                                          ▼                   │
│  ┌──────────┐                     ┌──────────────┐           │
│  │ MLflow   │◀────── log ────────│ Model Eval   │           │
│  │ Tracking │                     │ (quality     │           │
│  └────┬─────┘                     │  gates)      │           │
│       │                           └──────┬───────┘           │
│       │ register                         │ pass              │
│       ▼                                  ▼                   │
│  ┌──────────┐                     ┌──────────────┐           │
│  │ Model    │                     │ Build Docker │           │
│  │ Registry │──── promote ──────▶│ + Deploy K8s │           │
│  │ (Stage)  │                     └──────┬───────┘           │
│  └──────────┘                            │                   │
│                                          ▼                   │
│                                   ┌──────────────┐           │
│  ┌──────────┐                     │  Production  │           │
│  │Langfuse/ │◀────── traces ─────│  AI Agent    │           │
│  │LangSmith │                     └──────┬───────┘           │
│  └──────────┘                            │                   │
│                                          ▼                   │
│  ┌──────────┐    ┌───────────┐    ┌──────────────┐           │
│  │ Alert-   │◀───│Prometheus │◀───│  Metrics     │           │
│  │ Manager  │    │ + Grafana │    │  Endpoint    │           │
│  └──────────┘    └───────────┘    └──────────────┘           │
│                                                               │
└──────────────────────────────────────────────────────────────┘
```

### 11.2. Docker Compose cho MLOps Stack

```yaml
# docker-compose.mlops.yml
services:
  # --- AI Agent ---
  ai-agent:
    build: .
    ports: ["8000:8000"]
    environment:
      - OPENAI_API_KEY=${OPENAI_API_KEY}
      - MLFLOW_TRACKING_URI=http://mlflow:5000
      - LANGFUSE_HOST=http://langfuse:3000
    depends_on: [mlflow, langfuse, prometheus]

  # --- MLflow ---
  mlflow:
    image: ghcr.io/mlflow/mlflow:v2.16.0
    ports: ["5000:5000"]
    command: >
      mlflow server
      --backend-store-uri sqlite:///mlflow/mlflow.db
      --default-artifact-root /mlflow/artifacts
      --host 0.0.0.0
    volumes:
      - mlflow-data:/mlflow

  # --- Langfuse ---
  langfuse:
    image: langfuse/langfuse:2
    ports: ["3000:3000"]
    environment:
      - DATABASE_URL=postgresql://postgres:postgres@langfuse-db:5432/langfuse
      - NEXTAUTH_SECRET=mysecret
      - NEXTAUTH_URL=http://localhost:3000
    depends_on: [langfuse-db]

  langfuse-db:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: langfuse
      POSTGRES_PASSWORD: postgres
    volumes:
      - langfuse-db-data:/var/lib/postgresql/data

  # --- Monitoring ---
  prometheus:
    image: prom/prometheus:v2.53.0
    ports: ["9090:9090"]
    volumes:
      - ./monitoring/prometheus.yml:/etc/prometheus/prometheus.yml

  grafana:
    image: grafana/grafana:11.1.0
    ports: ["3001:3000"]
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=admin
    volumes:
      - grafana-data:/var/lib/grafana

volumes:
  mlflow-data:
  langfuse-db-data:
  grafana-data:
```

```bash
# Khởi động toàn bộ MLOps stack
docker compose -f docker-compose.mlops.yml up -d

# Truy cập:
# - AI Agent:  http://localhost:8000
# - MLflow:    http://localhost:5000
# - Langfuse:  http://localhost:3000
# - Prometheus: http://localhost:9090
# - Grafana:   http://localhost:3001
```

### 11.3. Bảng tổng hợp tools

| Concern | Tool | Vai trò |
|---|---|---|
| Experiment Tracking | MLflow / W&B | Log params, metrics, artifacts |
| Model Registry | MLflow Registry | Version, stage, promote models |
| Data Versioning | DVC | Git-like versioning cho data lớn |
| CI/CD | GitHub Actions | Automated test → eval → deploy |
| Monitoring (infra) | Prometheus + Grafana | Latency, throughput, errors |
| Monitoring (quality) | Custom + Langfuse | Response quality, drift |
| Observability (LLM) | Langfuse / LangSmith | Trace chains, debug agents |
| Alerting | Prometheus AlertManager | Notify on anomalies |
| Cost Tracking | Custom + Grafana | Token usage, $/request |

## Tổng kết

✅ **MLOps** = DevOps + quản lý data, model, và model quality — maturity levels 0–4

✅ **Experiment Tracking**: MLflow (self-hosted, open source) hoặc W&B (cloud SaaS) — log mọi thứ để reproducible

✅ **Model Registry**: Versioning + stage transitions (None → Staging → Production → Archived)

✅ **CI/CD cho AI**: Unit tests → Integration → Model quality gates → Auto deploy — GitHub Actions workflow

✅ **DVC**: Version data + model files cùng git, push/pull từ S3/GCS

✅ **Serving Patterns**: Real-time (chat), Batch (bulk processing), Streaming (token-by-token UX)

✅ **Monitoring**: Prometheus/Grafana cho latency/throughput + custom metrics cho quality/drift/cost

✅ **Observability**: Langfuse hoặc LangSmith — trace từng step trong chain, debug production issues

✅ **Alerting**: Rules cho latency spike, error rate, cost spike, quality degradation

✅ **MLOps Stack**: Docker Compose chạy MLflow + Langfuse + Prometheus + Grafana cùng AI Agent

## Bài tập

### Bài tập 1: MLflow Experiment Tracking (30 phút)

1. Cài đặt MLflow và chạy `mlflow ui`
2. Viết script gọi OpenAI API (hoặc mock) với 3 bộ params khác nhau (temperature, system prompt)
3. Log params, metrics (accuracy, latency), và artifacts (results JSON) vào MLflow
4. So sánh 3 runs trong MLflow UI, chọn run tốt nhất

### Bài tập 2: CI/CD Pipeline (45 phút)

1. Tạo GitHub Actions workflow cho project AI agent với 3 stages:
   - Lint + unit tests
   - Model evaluation (dùng mock API hoặc test dataset nhỏ)
   - Quality gate: fail nếu accuracy < 80% hoặc latency > 3s
2. Push code và verify pipeline chạy đúng
3. Thử thay đổi code để quality gate fail, confirm pipeline blocks deployment

### Bài tập 3: Monitoring Dashboard (45 phút)

1. Thêm Prometheus metrics vào FastAPI app (request count, latency histogram, token counter)
2. Setup Prometheus + Grafana bằng Docker Compose
3. Tạo Grafana dashboard với:
   - Request rate (req/s)
   - Latency percentiles (p50, p95, p99)
   - Token usage over time
   - Error rate
4. Gửi traffic giả lập và verify dashboard cập nhật real-time

### Bài tập 4: Langfuse Tracing (30 phút)

1. Deploy Langfuse local bằng Docker Compose
2. Instrument một RAG pipeline đơn giản (retrieve → generate) với `@observe()`
3. Gửi 5–10 queries, mở Langfuse UI xem traces
4. Tìm query nào có latency cao nhất, phân tích step nào chậm

