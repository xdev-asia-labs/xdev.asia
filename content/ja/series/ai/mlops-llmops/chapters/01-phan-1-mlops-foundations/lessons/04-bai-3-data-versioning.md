---
id: 019c9619-ac03-7003-d103-ac0300000003
title: 'レッスン 3: データのバージョン管理と機能ストア'
slug: bai-3-data-versioning
description: >-
  DVC (データ バージョン コントロール) のセットアップとワークフロー。データパイプライン。データレイクのバージョン管理用の LakeFS。
  Feature Store: Feast setup, feature engineering pipelines, online/offline
  serving.データ品質の検証。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: 'パート 1: MLOps の基礎'
course:
  id: 019c9619-aa07-7007-b007-aa0700000007
  title: 'MLOps と LLMOps: AI を本番環境に導入する'
  slug: mlops-llmops
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2549" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2549)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1000" cy="210" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="900" cy="270" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="800" cy="70" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="700" cy="130" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="600" cy="190" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="50" x2="1100" y2="130" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="80" x2="1050" y2="150" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="971.650635094611,137.5 971.650635094611,162.5 950,175 928.349364905389,162.5 928.349364905389,137.5 950,125" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 AI と ML — レッスン 2</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 3: データのバージョン管理と機能ストア</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">MLOps と LLMOps: AI を本番環境に導入する</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: MLOps の基礎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

Git を使用してコードのバージョンを作成します。 MLflow で追跡するモデル。 But what about **Data?**

データは ML の最も重要な部分ですが、バージョン管理されていないことがよくあります。結果：「旧モデルの方が良いですが、古いデータが上書きされています...」

> 🎯 **この記事:** データのバージョン管理のための DVC + 機能ストアのための Feast。

---

## 1. データのバージョン管理が必要な理由は何ですか?

```
Vấn đề thực tế:
  ❌ Data engineer update CSV → model accuracy tụt
  ❌ "Rollback data về tuần trước" → không có version
  ❌ Train/serve data khác nhau (Training-Serving Skew)
  ❌ Không biết model nào dùng data version nào

Giải pháp:
  ✅ Version data giống version code
  ✅ Mỗi data version → hash, metadata
  ✅ Link data version ↔ model version
  ✅ Reproducibility: quay lại bất kỳ thời điểm nào
```

---

## 2. DVC — データバージョン管理

### 2.1 セットアップ

```bash
# Install
pip install dvc dvc-s3  # hoặc dvc-gcs, dvc-azure

# Init DVC trong Git repo
cd my-ml-project
git init
dvc init

# Config remote storage
dvc remote add -d myremote s3://my-bucket/dvc-storage
# hoặc local: dvc remote add -d myremote /path/to/storage
# hoặc GCS:  dvc remote add -d myremote gs://my-bucket/dvc

git add .dvc .dvcignore
git commit -m "Init DVC"
```

### 2.2 Track Data

```bash
# Track data files
dvc add data/raw/train.csv
dvc add data/raw/images/
# → Tạo train.csv.dvc và images.dvc (metadata files)

# Push data lên remote
dvc push

# Git commit metadata
git add data/raw/train.csv.dvc data/raw/images.dvc .gitignore
git commit -m "Add training data v1"
git tag data-v1.0
```

```bash
# Workflow khi data thay đổi
# 1. Update data
cp new_data.csv data/raw/train.csv

# 2. Track changes
dvc add data/raw/train.csv
dvc push

# 3. Commit
git add data/raw/train.csv.dvc
git commit -m "Update training data v2 - add 500 new samples"
git tag data-v2.0

# 4. Rollback nếu cần
git checkout data-v1.0 -- data/raw/train.csv.dvc
dvc checkout  # Pull data v1.0 từ remote
```

### 2.3 DVC Pipelines

```yaml
# dvc.yaml — Define reproducible ML pipeline
stages:
  prepare:
    cmd: python src/data/prepare.py
    deps:
      - src/data/prepare.py
      - data/raw/train.csv
    outs:
      - data/processed/train_clean.csv
      - data/processed/val_clean.csv

  featurize:
    cmd: python src/features/build_features.py
    deps:
      - src/features/build_features.py
      - data/processed/train_clean.csv
    params:
      - configs/features.yaml:
        - feature_columns
        - scaling_method
    outs:
      - data/features/train_features.parquet
      - data/features/val_features.parquet

  train:
    cmd: python src/models/train.py
    deps:
      - src/models/train.py
      - data/features/train_features.parquet
    params:
      - configs/training.yaml:
        - model_type
        - learning_rate
        - n_estimators
    outs:
      - models/model.pkl
    metrics:
      - metrics/train_metrics.json:
          cache: false

  evaluate:
    cmd: python src/models/evaluate.py
    deps:
      - src/models/evaluate.py
      - models/model.pkl
      - data/features/val_features.parquet
    metrics:
      - metrics/eval_metrics.json:
          cache: false
    plots:
      - metrics/plots/:
          cache: false
```

```bash
# Reproduce toàn bộ pipeline
dvc repro

# Chỉ chạy stage bị thay đổi
dvc repro train  # Nếu chỉ đổi training config

# Xem pipeline DAG
dvc dag
# prepare → featurize → train → evaluate

# So sánh metrics giữa các version
dvc metrics diff
# Path                   Metric    HEAD    workspace
# metrics/eval.json      accuracy  0.89    0.92
# metrics/eval.json      f1_score  0.87    0.91
```

### 2.4 DVC + Git ブランチ = ブランチごとの実験

```bash
# Branch-based experiments
git checkout -b experiment/new-features
# Modify features
python src/features/build_features.py
dvc repro

# Compare với main
dvc metrics diff main
dvc plots diff main

# Nếu tốt hơn → merge
git checkout main
git merge experiment/new-features
dvc push
```

---

## 3. データ品質の検証

```python
"""Data validation — Great Expectations"""
# pip install great_expectations
import great_expectations as gx

# Setup
context = gx.get_context()

# Define expectations
validator = context.sources.pandas_default.read_csv(
    "data/processed/train.csv"
)

# Expectations
validator.expect_column_values_to_not_be_null("user_id")
validator.expect_column_values_to_be_between("age", min_value=0, max_value=150)
validator.expect_column_values_to_be_in_set(
    "status", ["active", "inactive", "churned"]
)
validator.expect_column_mean_to_be_between("revenue", min_value=10, max_value=1000)
validator.expect_table_row_count_to_be_between(min_value=1000, max_value=1000000)

# Validate
results = validator.validate()
if not results.success:
    print("❌ Data validation FAILED!")
    for result in results.results:
        if not result.success:
            print(f"  FAIL: {result.expectation_config.expectation_type}")
```

```python
"""Data validation đơn giản với Pandera"""
# pip install pandera
import pandera as pa
import pandas as pd

# Define schema
schema = pa.DataFrameSchema({
    "user_id": pa.Column(int, pa.Check.gt(0), nullable=False),
    "age": pa.Column(int, pa.Check.in_range(0, 150)),
    "revenue": pa.Column(float, pa.Check.ge(0)),
    "status": pa.Column(str, pa.Check.isin(["active", "inactive", "churned"])),
    "signup_date": pa.Column(pd.Timestamp),
})

# Validate
df = pd.read_csv("data/train.csv")
try:
    validated_df = schema.validate(df)
    print("✅ Data is valid!")
except pa.errors.SchemaError as e:
    print(f"❌ Validation failed: {e}")
```

---

## 4. フィーチャー ストア — ごちそう

### 4.1 なぜフィーチャー ストアが必要なのでしょうか?

```
Vấn đề:
  ❌ Training dùng feature A tính theo logic X
  ❌ Serving dùng feature A tính theo logic Y
  → Training-Serving Skew → Model fail

  ❌ Team A & Team B cùng tính "user_age" nhưng khác logic
  ❌ Feature computation lặp lại giữa các model
  ❌ Realtime features rất khó implement

Feature Store giải quyết:
  ✅ Single source of truth cho features
  ✅ Offline (batch) & Online (realtime) serving
  ✅ Feature reuse across teams & models
  ✅ Point-in-time correct joins
  ✅ Feature versioning & discovery
```

### 4.2 祝宴のセットアップ

```bash
# Install
pip install feast

# Init project
feast init my_feature_store
cd my_feature_store
```

```python
"""feature_store.yaml — Feast config"""
# feature_store.yaml
"""
project: my_project
registry: data/registry.db
provider: local
online_store:
  type: sqlite
  path: data/online_store.db
offline_store:
  type: file
entity_key_serialization_version: 2
"""
```

### 4.3 Define Features

```python
"""features.py — Feature definitions"""
from datetime import timedelta
from feast import Entity, FeatureView, Field, FileSource
from feast.types import Float32, Int64, String

# Entity = đối tượng (user, product, ...)
user = Entity(
    name="user_id",
    join_keys=["user_id"],
    description="User entity",
)

# Data source
user_stats_source = FileSource(
    path="data/user_stats.parquet",
    timestamp_field="event_timestamp",
    created_timestamp_column="created_timestamp",
)

# Feature View
user_stats_fv = FeatureView(
    name="user_stats",
    entities=[user],
    ttl=timedelta(days=1),  # Feature freshness
    schema=[
        Field(name="total_purchases", dtype=Int64),
        Field(name="avg_order_value", dtype=Float32),
        Field(name="days_since_last_order", dtype=Int64),
        Field(name="favorite_category", dtype=String),
        Field(name="lifetime_value", dtype=Float32),
    ],
    source=user_stats_source,
    online=True,  # Có serve online
)
```

### 4.4 機能ストアの使用

```python
"""Feature retrieval cho training & serving"""
from feast import FeatureStore
import pandas as pd

store = FeatureStore(repo_path=".")

# === Apply feature definitions ===
# feast apply  (CLI)

# === OFFLINE: Get features cho Training ===
entity_df = pd.DataFrame({
    "user_id": [1, 2, 3, 4, 5],
    "event_timestamp": pd.to_datetime("2024-01-15"),
})

training_df = store.get_historical_features(
    entity_df=entity_df,
    features=[
        "user_stats:total_purchases",
        "user_stats:avg_order_value",
        "user_stats:days_since_last_order",
        "user_stats:lifetime_value",
    ],
).to_df()

print(training_df)
# user_id | total_purchases | avg_order_value | days_since_last | ltv
# 1       | 15              | 45.2            | 3               | 678.0
# 2       | 3               | 120.0           | 45              | 360.0
# ...

# === ONLINE: Get features cho Serving (real-time) ===
# Materialize (push offline → online store)
# feast materialize-incremental $(date +%Y-%m-%dT%H:%M:%S)

online_features = store.get_online_features(
    features=[
        "user_stats:total_purchases",
        "user_stats:avg_order_value",
        "user_stats:lifetime_value",
    ],
    entity_rows=[
        {"user_id": 1},
        {"user_id": 2},
    ],
).to_dict()

print(online_features)
# {'user_id': [1, 2], 'total_purchases': [15, 3], ...}
```

### 4.5 特徴量エンジニアリング パイプライン

```python
"""Feature engineering pipeline kết hợp với Feast"""
import pandas as pd
from datetime import datetime

def compute_user_features(raw_events_df):
    """Tính features từ raw events"""
    now = datetime.now()

    features = raw_events_df.groupby("user_id").agg(
        total_purchases=("order_id", "count"),
        avg_order_value=("amount", "mean"),
        total_revenue=("amount", "sum"),
        last_order_date=("order_date", "max"),
    ).reset_index()

    # Derived features
    features["days_since_last_order"] = (
        now - features["last_order_date"]
    ).dt.days

    features["lifetime_value"] = features["total_revenue"]

    # Categorical
    category_mode = raw_events_df.groupby("user_id")["category"].agg(
        lambda x: x.mode()[0] if len(x.mode()) > 0 else "unknown"
    ).reset_index()
    category_mode.columns = ["user_id", "favorite_category"]

    features = features.merge(category_mode, on="user_id")

    # Add timestamps for Feast
    features["event_timestamp"] = now
    features["created_timestamp"] = now

    return features

# Chạy pipeline
raw_data = pd.read_parquet("data/raw_events.parquet")
user_features = compute_user_features(raw_data)
user_features.to_parquet("data/user_stats.parquet", index=False)

# Apply & materialize
# feast apply
# feast materialize-incremental $(date +%Y-%m-%dT%H:%M:%S)
```

---

## 5. Best Practices

```
Data Versioning:
  ✅ NEVER modify raw data — luôn tạo bản processed
  ✅ Tag data versions (data-v1.0, data-v2.0)
  ✅ Link data version ↔ model version
  ✅ Validate data trước khi train (schema, stats)
  ✅ Automate data pipeline (DVC repro)

Feature Store:
  ✅ Centralize feature definitions
  ✅ Same code cho offline & online
  ✅ Monitor feature freshness
  ✅ Document features (what, why, how computed)
  ✅ Point-in-time correct joins (avoid data leakage)
```

---

## 概要

|コンセプト |覚えておいてください |
|----------|----------|
| **DVC** |データの Git、バージョン + パイプライン + 再現 |
| **dvc.yaml** |再現可能な ML パイプラインを定義する |
| **Data Validation** |大きな期待 / Pandera — トレーニング前に検証する |
| **特集ストア** | Feast — 機能に関する信頼できる唯一の情報源 |
| **オフライン ストア** |トレーニング用の歴史的特徴 |
| **オンラインストア** |提供のためのリアルタイム機能 |
| **トレーニングとサービスの偏り** | Feature Store resolves |

## 演習

1. **DVC セットアップ:** ML プロジェクトの DVC を初期化します。トラック 1 データセット、リモートにプッシュします。ロールバックバージョン。
2. **パイプライン:** 準備 → トレーニング → 評価の 3 つのステージで DVC パイプラインを作成します。使用する `dvc repro`。
3. **データ検証:** データセットの Pandera スキーマを書き込みます。間違った形式のデータを使用してテストします。
4. **Feast:** Feast をローカルにセットアップし、5 つの機能を定義し、具体化し、オンライン機能を取得します。

> **次の記事:** モデル レジストリ、バージョニング、パッケージ化。
