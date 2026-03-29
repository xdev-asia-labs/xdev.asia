---
id: 019c9619-ac03-7003-d103-ac0300000003
title: 'Bài 3: Data Versioning & Feature Store'
slug: bai-3-data-versioning
description: >-
  DVC (Data Version Control) setup & workflow. Data pipelines. LakeFS cho
  data lake versioning. Feature Store: Feast setup, feature engineering
  pipelines, online/offline serving. Data quality validation.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: "Phần 1: MLOps Foundations"
course:
  id: 019c9619-aa07-7007-b007-aa0700000007
  title: "MLOps & LLMOps: Đưa AI lên Production"
  slug: mlops-llmops
---

## Giới thiệu

Code bạn version bằng Git. Model bạn track bằng MLflow. Nhưng **Data thì sao?**

Data là phần quan trọng nhất trong ML — nhưng lại thường không được versioned. Kết quả: "Model cũ tốt hơn, nhưng data cũ đã bị ghi đè..."

> 🎯 **Bài này:** DVC cho data versioning + Feast cho feature store.

---

## 1. Tại sao cần Data Versioning?

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

## 2. DVC — Data Version Control

### 2.1 Setup

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

### 2.4 DVC + Git Branch = Experiment per Branch

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

## 3. Data Quality Validation

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

## 4. Feature Store — Feast

### 4.1 Tại sao cần Feature Store?

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

### 4.2 Feast Setup

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

### 4.4 Sử dụng Feature Store

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

### 4.5 Feature Engineering Pipeline

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

## Tóm tắt

| Concept | Ghi nhớ |
|---------|---------|
| **DVC** | Git for data, version + pipeline + reproduce |
| **dvc.yaml** | Define reproducible ML pipeline |
| **Data Validation** | Great Expectations / Pandera — validate trước khi train |
| **Feature Store** | Feast — single source of truth cho features |
| **Offline Store** | Historical features cho training |
| **Online Store** | Real-time features cho serving |
| **Training-Serving Skew** | Feature Store giải quyết |

## Bài tập

1. **DVC Setup:** Init DVC cho ML project. Track 1 dataset, push lên remote. Rollback version.
2. **Pipeline:** Tạo DVC pipeline 3 stages: prepare → train → evaluate. Dùng `dvc repro`.
3. **Data Validation:** Viết Pandera schema cho dataset. Test với data sai format.
4. **Feast:** Setup Feast local, define 5 features, materialize, get online features.

> **Bài tiếp theo:** Model Registry, Versioning & Packaging.
