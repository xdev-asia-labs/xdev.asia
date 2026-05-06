---
id: 019c9619-ac05-7005-d105-ac0500000005
title: 'レッスン 5: ML 用の CI/CD — テストおよび検証パイプライン'
slug: bai-5-cicd-cho-ml
description: >-
  ML 用 CI/CD: データ検証テスト、モデル検証テスト、統合テスト。 GitHub アクションのワークフロー。自動化されたトレーニング
  パイプライン。モデル検証ゲート。カナリア展開戦略。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 4
section_title: 'パート 2: ML インフラストラクチャ'
course:
  id: 019c9619-aa07-7007-b007-aa0700000007
  title: 'MLOps と LLMOps: AI を本番環境に導入する'
  slug: mlops-llmops
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4241" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4241)"/>

  <!-- Decorations -->
  <g>
    <circle cx="841" cy="133" r="24" fill="#34d399" opacity="0.08"/>
    <circle cx="1082" cy="254" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="823" cy="115" r="10" fill="#34d399" opacity="0.14"/>
    <circle cx="1064" cy="236" r="33" fill="#34d399" opacity="0.07"/>
    <circle cx="805" cy="97" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="143" x2="1100" y2="223" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="173" x2="1050" y2="243" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1075.9089653438086,224 1075.9089653438086,262 1043,281 1010.0910346561914,262 1010.0910346561914,224 1043,205" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🧠 AI と ML — レッスン 4</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 5: ML 用の CI/CD — テストと検証</tspan>
      <tspan x="60" dy="42">パイプライン</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">MLOps と LLMOps: AI を本番環境に導入する</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: ML インフラストラクチャ</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

ソフトウェアのCI/CDが人気です。ただし、ML 用の CI/CD は **非常に異なります**。コードのテストに加えて、デプロイ前に **データ**、**モデル**、**パフォーマンス**をテストする必要があります。

> 🎯 **目標:** 自動パイプラインを構築します: コード変更 → テスト → トレーニング → 検証 → デプロイ。

---

## 1. ML 用の CI/CD とソフトウェアの比較

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

### さまざまなトリガー:

|トリガー |ソフトウェア | ML |
|----------|----------|-----|
| **コード変更** | ✅ | ✅ |
| **データ変更** | ❌ | ✅ |
| **構成の変更** | ✅ | ✅ (ハイパーパラメータ) |
| **スケジュール** | ❌ (まれ) | ✅ (毎週再トレーニング) |
| **パフォーマンスの低下** | ❌ | ✅ (自動再トレーニング) |

---

## 2. ML 用のピラミッドのテスト

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

## 3. ML の単体テスト

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

## 4. データ検証テスト

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

## 5. モデル検証ゲート

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

## 6. GitHub アクション CI/CD パイプライン

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

## 7. カナリアのデプロイメント

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

## 概要

|コンセプト |覚えておいてください |
|----------|----------|
| **ML CI** |コードだけではなく、コード + データ + モデルをテストする |
| **単体テスト** |テスト機能エンジニアリング、モデル コード |
| **データ検証** |スキーマ、分布、品質、ドリフト |
| **モデルの検証** |精度、F1、レイテンシ、公平性ゲート |
| **GitHub アクション** |自動化されたパイプライン: テスト → トレーニング → デプロイ |
| **カナリア展開** |各部分のデプロイ、監視、プロモート/ロールバック |

## 演習

1. **単体テスト:** 機能エンジニアリング パイプラインのテストを作成します (テスト ケースが 5 つ以上)。
2. **データ テスト:** Pandera を使用してデータ検証スイートを作成します。
3. **GitHub アクション:** コードをプッシュするときにテストを実行する CI ワークフローを作成します。
4. **ゲートのモデル化:** 検証ゲートの実装: 精度 ≥ 0.85、レイテンシ < 50ms, model size < 500MB.

> **次の記事:** インフラストラクチャ — Docker、Kubernetes、Cloud ML。
