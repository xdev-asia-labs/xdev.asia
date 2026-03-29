---
id: 019c9619-ac05-7005-d105-ac0500000005
title: 'Bài 5: CI/CD cho ML — Testing & Validation Pipelines'
slug: bai-5-cicd-cho-ml
description: >-
  CI/CD for ML: data validation tests, model validation tests, integration
  tests. GitHub Actions workflows. Automated training pipelines. Model
  validation gates. Canary deployment strategies.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 4
section_title: "Phần 2: ML Infrastructure"
course:
  id: 019c9619-aa07-7007-b007-aa0700000007
  title: "MLOps & LLMOps: Đưa AI lên Production"
  slug: mlops-llmops
---

## Giới thiệu

CI/CD cho software đã phổ biến. Nhưng CI/CD cho ML **khác biệt rất nhiều**: ngoài test code, bạn cần test **data**, test **model**, và validate **performance** trước khi deploy.

> 🎯 **Mục tiêu:** Xây automated pipeline: code change → test → train → validate → deploy.

---

## 1. CI/CD cho ML vs Software

```
Software CI/CD:
  Code Push → Lint → Unit Test → Build → Deploy
  ✅ Deterministic

ML CI/CD:
  Code/Data/Config Change → 
    Data Validation → 
    Training → 
    Model Validation → 
    Integration Test → 
    Deploy (canary) →
    Monitor
  ⚠️ Non-deterministic, cần validation gates
```

### Triggers khác nhau:

| Trigger | Software | ML |
|---------|----------|-----|
| **Code change** | ✅ | ✅ |
| **Data change** | ❌ | ✅ |
| **Config change** | ✅ | ✅ (hyperparams) |
| **Schedule** | ❌ (rare) | ✅ (retrain weekly) |
| **Performance drop** | ❌ | ✅ (auto-retrain) |

---

## 2. Testing Pyramid cho ML

```
          ┌─────────┐
          │  E2E    │  ← Full pipeline test
          │  Tests  │     (chậm, ít)
         ┌┴─────────┴┐
         │ Integration│  ← API tests, serving tests
         │   Tests    │     
        ┌┴────────────┴┐
        │   Model      │  ← Performance, fairness, latency
        │ Validation   │     
       ┌┴──────────────┴┐
       │    Data        │  ← Schema, distribution, quality
       │  Validation    │     
      ┌┴────────────────┴┐
      │     Unit Tests    │  ← Code logic, feature engineering
      │                   │     (nhanh, nhiều)
      └───────────────────┘
```

---

## 3. Unit Tests cho ML

```python
"""tests/test_features.py — Test feature engineering"""
import pytest
import pandas as pd
import numpy as np
from src.features.build_features import (
    compute_user_features,
    normalize_features,
    encode_categoricals,
)

class TestFeatureEngineering:
    def setup_method(self):
        self.sample_data = pd.DataFrame({
            "user_id": [1, 1, 2, 2, 2],
            "amount": [100, 200, 50, 75, 125],
            "category": ["A", "B", "A", "A", "C"],
            "order_date": pd.date_range("2024-01-01", periods=5),
        })

    def test_compute_user_features_shape(self):
        features = compute_user_features(self.sample_data)
        assert len(features) == 2  # 2 unique users
        assert "total_purchases" in features.columns
        assert "avg_order_value" in features.columns

    def test_compute_user_features_values(self):
        features = compute_user_features(self.sample_data)
        user1 = features[features["user_id"] == 1].iloc[0]
        assert user1["total_purchases"] == 2
        assert user1["avg_order_value"] == 150.0

    def test_normalize_features_range(self):
        df = pd.DataFrame({"feature": [0, 50, 100]})
        normalized = normalize_features(df, ["feature"])
        assert normalized["feature"].min() >= 0
        assert normalized["feature"].max() <= 1

    def test_encode_categoricals_no_nulls(self):
        df = pd.DataFrame({"cat": ["A", "B", None, "A"]})
        encoded = encode_categoricals(df, ["cat"])
        assert encoded.isnull().sum().sum() == 0

    def test_feature_deterministic(self):
        """Same input → same output"""
        result1 = compute_user_features(self.sample_data)
        result2 = compute_user_features(self.sample_data)
        pd.testing.assert_frame_equal(result1, result2)
```

```python
"""tests/test_model.py — Test model code"""
import pytest
import torch
from src.models.classifier import ChurnClassifier

class TestModelCode:
    def test_model_output_shape(self):
        model = ChurnClassifier(input_dim=10, num_classes=2)
        x = torch.randn(8, 10)  # batch_size=8
        output = model(x)
        assert output.shape == (8, 2)

    def test_model_output_probabilities(self):
        model = ChurnClassifier(input_dim=10, num_classes=2)
        x = torch.randn(1, 10)
        output = torch.softmax(model(x), dim=1)
        assert torch.allclose(output.sum(), torch.tensor(1.0), atol=1e-5)

    def test_model_train_one_step(self):
        """Verify model can train (gradient flows)"""
        model = ChurnClassifier(input_dim=10, num_classes=2)
        optimizer = torch.optim.Adam(model.parameters())

        x = torch.randn(4, 10)
        y = torch.tensor([0, 1, 0, 1])

        loss = torch.nn.CrossEntropyLoss()(model(x), y)
        loss.backward()

        # Check gradients exist
        for param in model.parameters():
            assert param.grad is not None

    def test_model_save_load(self, tmp_path):
        model = ChurnClassifier(input_dim=10, num_classes=2)
        path = tmp_path / "model.pt"
        torch.save(model.state_dict(), path)

        loaded = ChurnClassifier(input_dim=10, num_classes=2)
        loaded.load_state_dict(torch.load(path))

        x = torch.randn(1, 10)
        torch.testing.assert_close(model(x), loaded(x))
```

---

## 4. Data Validation Tests

```python
"""tests/test_data.py — Data quality validation"""
import pytest
import pandas as pd
import pandera as pa
from src.data.validate import DataValidator

class TestDataValidation:
    @pytest.fixture
    def train_data(self):
        return pd.read_csv("data/processed/train.csv")

    def test_schema_valid(self, train_data):
        """Test data schema"""
        schema = pa.DataFrameSchema({
            "user_id": pa.Column(int, pa.Check.gt(0)),
            "age": pa.Column(int, pa.Check.in_range(0, 150)),
            "revenue": pa.Column(float, pa.Check.ge(0)),
            "churn": pa.Column(int, pa.Check.isin([0, 1])),
        })
        schema.validate(train_data)

    def test_no_duplicates(self, train_data):
        """No duplicate rows"""
        assert train_data.duplicated().sum() == 0

    def test_no_data_leakage(self, train_data):
        """Ensure no target leakage in features"""
        feature_cols = [c for c in train_data.columns if c != "churn"]
        for col in feature_cols:
            correlation = train_data[col].corr(train_data["churn"])
            assert abs(correlation) < 0.99, (
                f"Potential leakage: {col} corr={correlation:.3f}"
            )

    def test_class_balance(self, train_data):
        """Check class distribution isn't too extreme"""
        ratio = train_data["churn"].mean()
        assert 0.05 < ratio < 0.95, (
            f"Extreme class imbalance: {ratio:.1%}"
        )

    def test_no_nulls_in_critical_columns(self, train_data):
        critical = ["user_id", "churn"]
        for col in critical:
            assert train_data[col].isnull().sum() == 0

    def test_data_size_reasonable(self, train_data):
        """Check data size is within expected range"""
        assert len(train_data) >= 1000, "Too few samples"
        assert len(train_data) <= 10_000_000, "Unexpectedly large"

    def test_feature_distributions(self, train_data):
        """Statistical tests for distribution drift"""
        # Compare with reference statistics
        ref_stats = pd.read_json("data/reference_stats.json")
        for col in ["age", "revenue"]:
            current_mean = train_data[col].mean()
            ref_mean = ref_stats.loc[col, "mean"]
            # Allow 20% drift
            assert abs(current_mean - ref_mean) / ref_mean < 0.2, (
                f"Distribution drift in {col}: "
                f"ref={ref_mean:.2f}, current={current_mean:.2f}"
            )
```

---

## 5. Model Validation Gates

```python
"""tests/test_model_validation.py — Model performance gates"""
import pytest
import mlflow
import json

class TestModelValidation:
    @pytest.fixture
    def model_metrics(self):
        """Load metrics from latest training run"""
        return json.load(open("metrics/eval_metrics.json"))

    @pytest.fixture
    def production_metrics(self):
        """Load current production model metrics"""
        client = mlflow.MlflowClient()
        prod_versions = client.get_latest_versions(
            "churn-predictor", stages=["Production"]
        )
        if prod_versions:
            run = client.get_run(prod_versions[0].run_id)
            return run.data.metrics
        return None

    def test_minimum_accuracy(self, model_metrics):
        """Model meets minimum accuracy threshold"""
        assert model_metrics["accuracy"] >= 0.85, (
            f"Accuracy {model_metrics['accuracy']:.3f} < 0.85"
        )

    def test_minimum_f1(self, model_metrics):
        """Model meets minimum F1 threshold"""
        assert model_metrics["f1_score"] >= 0.80

    def test_beats_production(self, model_metrics, production_metrics):
        """New model is at least as good as production"""
        if production_metrics is None:
            pytest.skip("No production model to compare")

        # Must not be worse by more than 1%
        assert model_metrics["accuracy"] >= (
            production_metrics["accuracy"] - 0.01
        ), "New model significantly worse than production"

    def test_inference_latency(self):
        """Model inference is fast enough"""
        import time
        import numpy as np

        model = mlflow.pyfunc.load_model("models/latest")
        dummy = pd.DataFrame(np.random.randn(1, 10), columns=feature_names)

        times = []
        for _ in range(100):
            start = time.perf_counter()
            model.predict(dummy)
            times.append(time.perf_counter() - start)

        p95_ms = np.percentile(times, 95) * 1000
        assert p95_ms < 50, f"P95 latency {p95_ms:.1f}ms > 50ms"

    def test_model_size(self):
        """Model is within size limits"""
        import os
        model_size_mb = os.path.getsize("models/model.pkl") / 1e6
        assert model_size_mb < 500, f"Model too large: {model_size_mb:.0f}MB"

    def test_fairness(self, model_metrics):
        """Model is fair across groups (if applicable)"""
        if "accuracy_male" in model_metrics and "accuracy_female" in model_metrics:
            gap = abs(
                model_metrics["accuracy_male"] -
                model_metrics["accuracy_female"]
            )
            assert gap < 0.05, f"Fairness gap: {gap:.3f}"
```

---

## 6. GitHub Actions CI/CD Pipeline

```yaml
# .github/workflows/ml-ci.yml
name: ML CI/CD Pipeline

on:
  push:
    branches: [main]
    paths:
      - 'src/**'
      - 'configs/**'
      - 'data/**'
  schedule:
    - cron: '0 2 * * 1'  # Weekly retrain (Monday 2 AM)
  workflow_dispatch:
    inputs:
      force_retrain:
        type: boolean
        default: false

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-python@v5
        with:
          python-version: '3.11'

      - name: Install dependencies
        run: pip install -r requirements.txt -r requirements-dev.txt

      - name: Lint
        run: ruff check src/

      - name: Unit tests
        run: pytest tests/test_features.py tests/test_model.py -v

      - name: Data validation
        run: pytest tests/test_data.py -v

  train:
    needs: test
    runs-on: ubuntu-latest
    if: |
      github.event_name == 'schedule' ||
      github.event.inputs.force_retrain == 'true' ||
      contains(github.event.head_commit.message, '[retrain]')
    steps:
      - uses: actions/checkout@v4

      - name: Setup DVC
        run: |
          pip install dvc dvc-s3
          dvc pull

      - name: Train model
        run: |
          python pipelines/training.py \
            --config configs/training.yaml \
            --experiment ci-training

      - name: Evaluate
        run: python pipelines/evaluation.py

      - name: Model validation
        run: pytest tests/test_model_validation.py -v

      - name: Register model
        if: success()
        run: |
          python pipelines/register_model.py \
            --name churn-predictor \
            --stage Staging

  deploy:
    needs: train
    runs-on: ubuntu-latest
    environment: production
    steps:
      - uses: actions/checkout@v4

      - name: Deploy to staging
        run: |
          python pipelines/deployment.py \
            --model churn-predictor \
            --stage Staging \
            --target staging-server

      - name: Integration tests
        run: pytest tests/test_integration.py -v

      - name: Smoke tests
        run: |
          curl -f http://staging:8000/health
          curl -f -X POST http://staging:8000/predict \
            -H "Content-Type: application/json" \
            -d '{"age": 30, "revenue": 100}'

      - name: Promote to production
        if: success()
        run: |
          python pipelines/deployment.py \
            --model churn-predictor \
            --promote-to Production \
            --strategy canary \
            --canary-percent 10
```

---

## 7. Canary Deployment

```python
"""Canary deployment strategy"""

class CanaryDeployer:
    def __init__(self, model_name):
        self.model_name = model_name
        self.client = mlflow.MlflowClient()

    def deploy_canary(self, new_version, canary_percent=10):
        """Deploy new version to canary (small % of traffic)"""
        # Step 1: Deploy new version alongside production
        config = {
            "production_version": self.get_production_version(),
            "canary_version": new_version,
            "canary_percent": canary_percent,
        }

        # Step 2: Monitor for N hours
        print(f"🐤 Canary deployed: v{new_version} ({canary_percent}% traffic)")
        print(f"   Monitoring for 24 hours...")

        return config

    def evaluate_canary(self, metrics_production, metrics_canary):
        """Evaluate canary vs production"""
        checks = {
            "error_rate": metrics_canary["error_rate"] <= (
                metrics_production["error_rate"] * 1.05  # max 5% worse
            ),
            "latency_p95": metrics_canary["latency_p95"] <= (
                metrics_production["latency_p95"] * 1.1  # max 10% worse
            ),
            "accuracy": metrics_canary["accuracy"] >= (
                metrics_production["accuracy"] - 0.01  # max 1% worse
            ),
        }

        all_passed = all(checks.values())
        for check, passed in checks.items():
            status = "✅" if passed else "❌"
            print(f"  {status} {check}")

        return all_passed

    def promote_canary(self, version):
        """Promote canary → production"""
        self.client.transition_model_version_stage(
            name=self.model_name,
            version=version,
            stage="Production",
            archive_existing_versions=True,
        )
        print(f"✅ Canary v{version} promoted to Production!")

    def rollback_canary(self, version):
        """Rollback canary"""
        self.client.transition_model_version_stage(
            name=self.model_name,
            version=version,
            stage="Archived",
        )
        print(f"⏮️ Canary v{version} rolled back")
```

---

## Tóm tắt

| Concept | Ghi nhớ |
|---------|---------|
| **ML CI** | Test code + data + model, không chỉ code |
| **Unit Tests** | Test feature engineering, model code |
| **Data Validation** | Schema, distribution, quality, drift |
| **Model Validation** | Accuracy, F1, latency, fairness gates |
| **GitHub Actions** | Automated pipeline: test → train → deploy |
| **Canary Deploy** | Deploy từng phần, monitor, promote/rollback |

## Bài tập

1. **Unit Tests:** Viết tests cho feature engineering pipeline (≥5 test cases).
2. **Data Tests:** Viết data validation suite dùng Pandera.
3. **GitHub Actions:** Tạo CI workflow chạy tests khi push code.
4. **Model Gates:** Implement validation gates: accuracy ≥ 0.85, latency < 50ms, model size < 500MB.

> **Bài tiếp theo:** Infrastructure — Docker, Kubernetes & Cloud ML.
