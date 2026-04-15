---
id: 019e0a01-bb02-7001-c001-ee0200000001
title: "Bài 2: Machine Learning Pipeline — Từ Data đến Model"
slug: bai-2-ml-pipeline-data-den-model
description: >-
  End-to-end ML pipeline: data collection, preprocessing, feature engineering. Model training, evaluation, hyperparameter tuning. scikit-learn, XGBoost. MLflow tracking.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 1
section_title: "Phần 1: Nền tảng — Python, ML & AI Tooling"
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: "AI Agent Engineer: Từ Zero đến Production"
  slug: ai-agent-engineer-tu-zero-den-production
---

> **Một model ML production không bắt đầu từ `model.fit()` — nó bắt đầu từ data pipeline.** 80% thời gian của ML Engineer nằm ở data collection, cleaning, feature engineering. Bài này sẽ đưa bạn qua toàn bộ pipeline từ raw data đến deployed model, với code chạy được ngay.

## 1. ML Pipeline Overview — Bức tranh toàn cảnh

Machine Learning không phải "chọn model xong train". Đó là một **pipeline** — chuỗi bước có thứ tự, mỗi bước ảnh hưởng trực tiếp đến kết quả cuối cùng.

```text
┌──────────────────────────────────────────────────────────────────┐
│                    ML Pipeline — 5 Stages                        │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────┐   ┌──────────────┐   ┌───────────┐                │
│  │ 1. Data  │──▶│ 2. Feature   │──▶│ 3. Model  │                │
│  │Collection│   │  Engineering │   │ Training  │                │
│  └──────────┘   └──────────────┘   └─────┬─────┘                │
│                                          │                       │
│                                          ▼                       │
│                 ┌──────────────┐   ┌───────────┐                │
│                 │ 5. Experiment│◀──│ 4. Model   │                │
│                 │   Tracking   │   │ Evaluation │                │
│                 └──────────────┘   └───────────┘                │
│                                                                  │
│  Feedback loop: Evaluation ──▶ quay lại Feature Engineering     │
│                 hoặc thử model khác                              │
└──────────────────────────────────────────────────────────────────┘
```

| Stage | Mục tiêu | Tools chính | % thời gian |
|-------|----------|-------------|-------------|
| Data Collection & EDA | Thu thập, khám phá, đánh giá chất lượng data | Pandas, ydata-profiling | ~30% |
| Feature Engineering | Biến raw data thành features model hiểu được | Pandas, scikit-learn | ~30% |
| Model Training | Train model trên training data | scikit-learn, XGBoost | ~15% |
| Model Evaluation | Đánh giá performance, chọn model tốt nhất | scikit-learn metrics | ~15% |
| Experiment Tracking | Ghi log, so sánh experiments | MLflow, W&B | ~10% |

> **Tip thực tế:** "Garbage in, garbage out" là quy luật bất biến. Một model đơn giản trên data sạch luôn thắng model phức tạp trên data bẩn.

### 1.1. Setup môi trường cho bài này

```bash
# Tạo venv và install dependencies
python -m venv .venv
source .venv/bin/activate  # Linux/macOS

pip install pandas scikit-learn xgboost mlflow optuna \
            ydata-profiling matplotlib seaborn
```

```python
# File: ml_pipeline.py — imports chung cho cả bài
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.metrics import (
    accuracy_score, precision_score, recall_score,
    f1_score, roc_auc_score, confusion_matrix,
    classification_report
)
import warnings
warnings.filterwarnings("ignore")
```

## 2. Data Collection & EDA

### 2.1. Load Data và First Look

Bước đầu tiên luôn là: **nhìn vào data trước khi làm bất cứ gì.**

```python
# Load dataset — dùng Titanic dataset làm ví dụ xuyên suốt
url = "https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv"
df = pd.read_csv(url)

# === First look — 5 câu hỏi bắt buộc ===

# 1. Shape: bao nhiêu rows, columns?
print(f"Shape: {df.shape}")  # (891, 12)

# 2. Data types: column nào numeric, nào categorical?
print(df.dtypes)

# 3. Missing values: column nào bị thiếu?
print(df.isnull().sum())
# Age: 177 missing, Cabin: 687 missing, Embarked: 2 missing

# 4. Target distribution: có imbalanced không?
print(df["Survived"].value_counts(normalize=True))
# 0: 61.6%, 1: 38.4% — hơi imbalanced nhưng chấp nhận được

# 5. Quick statistics
print(df.describe())
```

### 2.2. Automated EDA với ydata-profiling

Thay vì viết 50 dòng EDA thủ công, dùng **profiling** để generate report tự động:

```python
from ydata_profiling import ProfileReport

# Generate full EDA report — 1 dòng
profile = ProfileReport(df, title="Titanic EDA", explorative=True)
profile.to_file("eda_report.html")
```

Report sẽ bao gồm: distribution cho mỗi column, correlation matrix, missing values analysis, duplicate detection — tất cả những gì bạn cần cho bước đầu.

### 2.3. Data Quality Checks

Trước khi đi tiếp, hãy validate data quality một cách systematic:

```python
def data_quality_report(df: pd.DataFrame) -> pd.DataFrame:
    """Generate data quality summary cho mỗi column."""
    report = pd.DataFrame({
        "dtype": df.dtypes,
        "missing": df.isnull().sum(),
        "missing_pct": (df.isnull().sum() / len(df) * 100).round(1),
        "unique": df.nunique(),
        "sample": df.iloc[0],
    })
    return report.sort_values("missing_pct", ascending=False)

quality = data_quality_report(df)
print(quality)
```

| Column | Missing % | Action |
|--------|-----------|--------|
| Cabin | 77.1% | Drop hoặc extract deck letter |
| Age | 19.9% | Impute bằng median theo Pclass |
| Embarked | 0.2% | Impute bằng mode |
| Còn lại | 0% | OK |

> **Tip thực tế:** Column missing > 50% thường nên drop trừ khi bạn có domain knowledge biết cách impute hợp lý. Missing 5-20% → impute. Missing < 5% → drop rows hoặc impute.

## 3. Feature Engineering

Đây là bước **tạo nên sự khác biệt** giữa model tốt và model xuất sắc. Feature engineering quyết định 70-80% performance.

### 3.1. Xử lý Missing Values

```python
def handle_missing(df: pd.DataFrame) -> pd.DataFrame:
    """Xử lý missing values cho Titanic dataset."""
    df = df.copy()

    # Age: impute bằng median theo Pclass (domain knowledge)
    df["Age"] = df.groupby("Pclass")["Age"].transform(
        lambda x: x.fillna(x.median())
    )

    # Embarked: impute bằng mode
    df["Embarked"] = df["Embarked"].fillna(df["Embarked"].mode()[0])

    # Cabin: extract deck letter, rồi fill "Unknown"
    df["Deck"] = df["Cabin"].str[0].fillna("Unknown")

    # Drop columns không cần
    df = df.drop(columns=["Cabin", "Ticket", "Name", "PassengerId"])

    return df

df_clean = handle_missing(df)
print(f"Missing after cleaning: {df_clean.isnull().sum().sum()}")  # 0
```

### 3.2. Encoding Categorical Variables

Model ML chỉ hiểu số. Bạn cần encode categorical features:

```text
┌────────────────────────────────────────────────────────────┐
│           Encoding Strategies Decision Tree                 │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  Categorical Feature                                       │
│       │                                                    │
│       ├── 2 categories ──────▶ Binary Encoding (0/1)       │
│       │   (Sex: male/female)                               │
│       │                                                    │
│       ├── Few categories ────▶ One-Hot Encoding            │
│       │   (Embarked: S/C/Q)    (tạo dummy columns)        │
│       │                                                    │
│       ├── Ordinal ───────────▶ Label Encoding (0,1,2,...)  │
│       │   (Size: S < M < L)    (giữ thứ tự)               │
│       │                                                    │
│       └── Many categories ───▶ Target Encoding             │
│           (City: 100+ values)  (mean target per category)  │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

```python
def encode_features(df: pd.DataFrame) -> pd.DataFrame:
    """Encode categorical features."""
    df = df.copy()

    # Binary encoding cho Sex
    df["Sex"] = df["Sex"].map({"male": 0, "female": 1})

    # One-hot encoding cho Embarked và Deck
    df = pd.get_dummies(df, columns=["Embarked", "Deck"], drop_first=True)

    return df

df_encoded = encode_features(df_clean)
print(f"Features after encoding: {df_encoded.shape[1]}")
```

### 3.3. Feature Scaling

Nhiều algorithm (Logistic Regression, SVM, KNN) nhạy cảm với scale của features:

```python
from sklearn.preprocessing import StandardScaler, MinMaxScaler

# So sánh scaling methods
scalers = {
    "StandardScaler": StandardScaler(),   # mean=0, std=1
    "MinMaxScaler": MinMaxScaler(),       # range [0, 1]
}
```

| Scaler | Công thức | Khi nào dùng |
|--------|-----------|-------------|
| StandardScaler | (x - mean) / std | Default choice, khi data ~normal distribution |
| MinMaxScaler | (x - min) / (max - min) | Khi cần bounded range [0,1], neural networks |
| RobustScaler | (x - median) / IQR | Khi có outliers nhiều |
| Không scale | — | Tree-based models (Random Forest, XGBoost) |

> **Tip thực tế:** Tree-based models (Random Forest, XGBoost, LightGBM) **không cần scaling** vì chúng split dựa trên thứ tự, không dựa trên giá trị tuyệt đối.

### 3.4. Feature Creation & Selection

```python
def create_features(df: pd.DataFrame) -> pd.DataFrame:
    """Tạo features mới từ domain knowledge."""
    df = df.copy()

    # Family size
    df["FamilySize"] = df["SibSp"] + df["Parch"] + 1

    # Is alone
    df["IsAlone"] = (df["FamilySize"] == 1).astype(int)

    # Age bins
    df["AgeBin"] = pd.cut(
        df["Age"],
        bins=[0, 12, 18, 35, 60, 100],
        labels=[0, 1, 2, 3, 4]
    ).astype(int)

    # Fare per person
    df["FarePerPerson"] = df["Fare"] / df["FamilySize"]

    return df

df_featured = create_features(df_encoded)
```

### 3.5. Pandas Pipe Pattern — Clean Pipeline

Thay vì gọi từng function riêng lẻ, dùng **pipe pattern** để tạo pipeline rõ ràng:

```python
# Cách PRO — chain tất cả bằng .pipe()
df_final = (
    pd.read_csv(url)
    .pipe(handle_missing)
    .pipe(encode_features)
    .pipe(create_features)
)

print(f"Final dataset: {df_final.shape}")
# Final dataset: (891, 22)
```

Pipe pattern giúp code **dễ đọc, dễ test, dễ thêm/bớt step**. Mỗi function nhận DataFrame, trả về DataFrame — pure transformation.

## 4. Model Training

### 4.1. Train/Validation/Test Split

**Luật vàng:** Không bao giờ dùng test set để tune model. Tách data thành 3 phần:

```text
┌────────────────────────────────────────────────┐
│              Data Splitting Strategy            │
├────────────────────────────────────────────────┤
│                                                │
│  Full Dataset (891 samples)                    │
│  ┌──────────────────────────────────────────┐  │
│  │     Training (60%)      │Val (20%)│Test  │  │
│  │     534 samples         │178     │(20%) │  │
│  │                         │        │179   │  │
│  │  Dùng để train model    │Tune HP │Final │  │
│  │                         │        │eval  │  │
│  └──────────────────────────────────────────┘  │
│                                                │
│  Hoặc dùng Cross-Validation trên Train+Val    │
│  rồi evaluate cuối cùng trên Test              │
└────────────────────────────────────────────────┘
```

```python
# Prepare X, y
target = "Survived"
X = df_final.drop(columns=[target])
y = df_final[target]

# Split: 80% train+val, 20% test (held-out)
X_train_val, X_test, y_train_val, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# Split train+val: 75% train, 25% val (= 60/20 overall)
X_train, X_val, y_train, y_val = train_test_split(
    X_train_val, y_train_val, test_size=0.25, random_state=42, stratify=y_train_val
)

print(f"Train: {X_train.shape[0]}, Val: {X_val.shape[0]}, Test: {X_test.shape[0]}")
# Train: 534, Val: 178, Test: 179
```

### 4.2. scikit-learn Consistent API

Mọi model trong scikit-learn đều tuân theo cùng một API:

```python
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.svm import SVC

# Scale features cho non-tree models
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_val_scaled = scaler.transform(X_val)  # CHỈ transform, không fit!

# Train nhiều models cùng API
models = {
    "Logistic Regression": LogisticRegression(max_iter=1000, random_state=42),
    "Random Forest": RandomForestClassifier(n_estimators=100, random_state=42),
    "Gradient Boosting": GradientBoostingClassifier(n_estimators=100, random_state=42),
}

results = {}
for name, model in models.items():
    # Tree models dùng raw data, linear models dùng scaled data
    if "Logistic" in name:
        model.fit(X_train_scaled, y_train)
        y_pred = model.predict(X_val_scaled)
    else:
        model.fit(X_train, y_train)
        y_pred = model.predict(X_val)

    acc = accuracy_score(y_val, y_pred)
    f1 = f1_score(y_val, y_pred)
    results[name] = {"accuracy": acc, "f1": f1}
    print(f"{name:25s} | Accuracy: {acc:.4f} | F1: {f1:.4f}")
```

> **Lưu ý quan trọng:** `scaler.fit_transform(X_train)` rồi `scaler.transform(X_val)`. KHÔNG ĐƯỢC `fit_transform` trên val/test — đó là **data leakage** và sẽ cho kết quả lạc quan giả.

### 4.3. Cross-Validation

Thay vì dựa vào 1 lần split (có thể may mắn/xui), dùng **k-fold cross-validation**:

```python
from sklearn.model_selection import StratifiedKFold, cross_val_score

# 5-fold stratified cross-validation
cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)

for name, model in models.items():
    scores = cross_val_score(
        model, X_train_val, y_train_val,
        cv=cv, scoring="f1"
    )
    print(f"{name:25s} | F1: {scores.mean():.4f} ± {scores.std():.4f}")

# Logistic Regression       | F1: 0.7321 ± 0.0412
# Random Forest              | F1: 0.7586 ± 0.0389
# Gradient Boosting          | F1: 0.7654 ± 0.0356
```

```text
┌─────────────────────────────────────────────────────┐
│              5-Fold Cross-Validation                 │
├─────────────────────────────────────────────────────┤
│                                                     │
│  Fold 1: [VAL] [Train] [Train] [Train] [Train]     │
│  Fold 2: [Train] [VAL] [Train] [Train] [Train]     │
│  Fold 3: [Train] [Train] [VAL] [Train] [Train]     │
│  Fold 4: [Train] [Train] [Train] [VAL] [Train]     │
│  Fold 5: [Train] [Train] [Train] [Train] [VAL]     │
│                                                     │
│  Final score = mean(5 scores) ± std(5 scores)       │
│  → Đáng tin cậy hơn single split                    │
└─────────────────────────────────────────────────────┘
```

## 5. Model Evaluation

### 5.1. Classification Metrics Deep Dive

Accuracy không phải lúc nào cũng là metric tốt. Với imbalanced data, bạn cần hiểu rõ hơn:

```text
┌─────────────────────────────────────────────────────────────┐
│                    Confusion Matrix                          │
├─────────────────────────────────────────────────────────────┤
│                        Predicted                             │
│                    Positive    Negative                       │
│  Actual Positive │   TP       │   FN      │                 │
│  Actual Negative │   FP       │   TN      │                 │
│                                                              │
│  Precision = TP / (TP + FP)  → "Khi model nói Positive,     │
│                                  đúng bao nhiêu %?"          │
│                                                              │
│  Recall    = TP / (TP + FN)  → "Trong tất cả Positive thật, │
│                                  model tìm được bao nhiêu?"  │
│                                                              │
│  F1 Score  = 2 × (P × R) / (P + R)  → Harmonic mean         │
│                                                              │
│  AUC-ROC   = Area under ROC curve → Khả năng phân biệt      │
│              Positive vs Negative ở mọi threshold            │
└─────────────────────────────────────────────────────────────┘
```

| Metric | Khi nào ưu tiên | Ví dụ |
|--------|----------------|-------|
| **Accuracy** | Data balanced, cost of FP ≈ FN | Phân loại ảnh chó/mèo |
| **Precision** | FP tốn kém (false alarm) | Spam detection (email quan trọng bị đánh spam) |
| **Recall** | FN tốn kém (bỏ sót) | Phát hiện ung thư (bỏ sót bệnh nhân nguy hiểm) |
| **F1 Score** | Cần balance Precision/Recall | Default choice cho imbalanced data |
| **AUC-ROC** | So sánh models tổng thể | Model selection, threshold-independent |

### 5.2. Evaluation Code

```python
from sklearn.metrics import (
    classification_report, confusion_matrix, roc_auc_score,
    RocCurveDisplay
)
import matplotlib.pyplot as plt

def evaluate_model(model, X_test, y_test, model_name="Model"):
    """Đánh giá model toàn diện."""
    y_pred = model.predict(X_test)
    y_prob = model.predict_proba(X_test)[:, 1]

    # Classification report
    print(f"\n{'='*50}")
    print(f"  {model_name} — Evaluation Report")
    print(f"{'='*50}")
    print(classification_report(y_test, y_pred, target_names=["Not Survived", "Survived"]))

    # AUC-ROC
    auc = roc_auc_score(y_test, y_prob)
    print(f"AUC-ROC: {auc:.4f}")

    # Confusion Matrix
    cm = confusion_matrix(y_test, y_pred)
    print(f"\nConfusion Matrix:")
    print(f"  TN={cm[0][0]}  FP={cm[0][1]}")
    print(f"  FN={cm[1][0]}  TP={cm[1][1]}")

    return {"accuracy": accuracy_score(y_test, y_pred),
            "f1": f1_score(y_test, y_pred),
            "auc": auc}

# Evaluate best model
best_model = models["Gradient Boosting"]
best_model.fit(X_train_val, y_train_val)
metrics = evaluate_model(best_model, X_test, y_test, "Gradient Boosting")
```

## 6. Hyperparameter Tuning

Model mặc định hiếm khi là model tốt nhất. **Hyperparameter tuning** tìm config tối ưu.

### 6.1. GridSearch vs RandomSearch vs Optuna

```text
┌────────────────────────────────────────────────────────────────┐
│             Hyperparameter Tuning Strategies                    │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  GridSearch          RandomSearch         Optuna (Bayesian)    │
│  ┌─┬─┬─┬─┐          ┌─┬─┬─┬─┐          ┌─┬─┬─┬─┐            │
│  │x│x│x│x│          │ │x│ │ │          │ │ │ │ │            │
│  ├─┼─┼─┼─┤          ├─┼─┼─┼─┤          ├─┼─┼─┼─┤            │
│  │x│x│x│x│          │ │ │ │x│          │ │x│ │ │            │
│  ├─┼─┼─┼─┤          ├─┼─┼─┼─┤          ├─┼─┼─┼─┤            │
│  │x│x│x│x│          │x│ │ │ │          │ │x│x│ │  ◀ focus   │
│  ├─┼─┼─┼─┤          ├─┼─┼─┼─┤          ├─┼─┼─┼─┤            │
│  │x│x│x│x│          │ │ │x│ │          │ │x│x│x│  ◀ here    │
│  └─┴─┴─┴─┘          └─┴─┴─┴─┘          └─┴─┴─┴─┘            │
│  Try ALL combos      Random sample        Smart: learn from   │
│  16 trials           4 trials             previous trials     │
│                                                                │
│  Pros: Exhaustive    Pros: Fast,          Pros: Most efficient │
│  Cons: Slow, O(n^k)  tốt bất ngờ         Cons: Setup phức tạp│
└────────────────────────────────────────────────────────────────┘
```

| Method | Trials cần | Tốt nhất khi | Library |
|--------|-----------|-------------|---------|
| GridSearchCV | Tất cả combos | Ít hyperparameters (2-3), search space nhỏ | scikit-learn |
| RandomizedSearchCV | Budget cố định | Search space lớn, muốn nhanh | scikit-learn |
| **Optuna** | Smart sampling | Search space lớn, cần optimal | optuna |

### 6.2. GridSearch với scikit-learn

```python
from sklearn.model_selection import GridSearchCV

param_grid = {
    "n_estimators": [100, 200, 300],
    "max_depth": [3, 5, 7],
    "learning_rate": [0.01, 0.1, 0.2],
}

grid_search = GridSearchCV(
    GradientBoostingClassifier(random_state=42),
    param_grid=param_grid,
    cv=5,
    scoring="f1",
    n_jobs=-1,       # Dùng tất cả CPU cores
    verbose=1,
)

grid_search.fit(X_train_val, y_train_val)

print(f"Best params: {grid_search.best_params_}")
print(f"Best F1: {grid_search.best_score_:.4f}")
# Best params: {'learning_rate': 0.1, 'max_depth': 5, 'n_estimators': 200}
```

### 6.3. Optuna — Bayesian Optimization

**Optuna** thông minh hơn: nó học từ các trial trước để chọn hyperparameters tiếp theo.

```python
import optuna

def objective(trial):
    """Optuna objective function cho Gradient Boosting."""
    params = {
        "n_estimators": trial.suggest_int("n_estimators", 50, 500),
        "max_depth": trial.suggest_int("max_depth", 2, 10),
        "learning_rate": trial.suggest_float("learning_rate", 0.001, 0.3, log=True),
        "subsample": trial.suggest_float("subsample", 0.6, 1.0),
        "min_samples_split": trial.suggest_int("min_samples_split", 2, 20),
    }

    model = GradientBoostingClassifier(**params, random_state=42)
    scores = cross_val_score(model, X_train_val, y_train_val, cv=5, scoring="f1")
    return scores.mean()

# Run optimization — 50 trials thay vì 243 (GridSearch 3^5)
study = optuna.create_study(direction="maximize")
study.optimize(objective, n_trials=50, show_progress_bar=True)

print(f"Best F1: {study.best_value:.4f}")
print(f"Best params: {study.best_params}")
```

> **Tip thực tế:** Optuna thường tìm được kết quả tốt hơn GridSearch với ít trials hơn. Trong production, đây là tool được ưa chuộng nhất cho hyperparameter tuning.

## 7. Experiment Tracking với MLflow

Khi chạy 50 experiments, bạn sẽ quên params của experiment thứ 3 đã dùng gì. **MLflow** giải quyết vấn đề này.

### 7.1. MLflow Concepts

```text
┌────────────────────────────────────────────────────────────┐
│                    MLflow Architecture                      │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  Experiment: "Titanic Survival Prediction"                 │
│  │                                                         │
│  ├── Run 1: Logistic Regression                            │
│  │   ├── Parameters: C=1.0, max_iter=1000                  │
│  │   ├── Metrics: accuracy=0.79, f1=0.73, auc=0.84        │
│  │   └── Artifacts: model.pkl, confusion_matrix.png        │
│  │                                                         │
│  ├── Run 2: Random Forest                                  │
│  │   ├── Parameters: n_estimators=100, max_depth=7         │
│  │   ├── Metrics: accuracy=0.82, f1=0.76, auc=0.87        │
│  │   └── Artifacts: model.pkl, feature_importance.png      │
│  │                                                         │
│  └── Run 3: XGBoost + Optuna tuning                        │
│      ├── Parameters: (best params from Optuna)              │
│      ├── Metrics: accuracy=0.85, f1=0.80, auc=0.90        │
│      └── Artifacts: model.pkl, optuna_study.pkl            │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### 7.2. MLflow Tracking Code

```python
import mlflow
import mlflow.sklearn

# Set experiment name
mlflow.set_experiment("titanic-survival")

def train_and_log(model, model_name, X_train, y_train, X_test, y_test):
    """Train model và log mọi thứ vào MLflow."""
    with mlflow.start_run(run_name=model_name):
        # Train
        model.fit(X_train, y_train)
        y_pred = model.predict(X_test)
        y_prob = model.predict_proba(X_test)[:, 1]

        # Metrics
        metrics = {
            "accuracy": accuracy_score(y_test, y_pred),
            "precision": precision_score(y_test, y_pred),
            "recall": recall_score(y_test, y_pred),
            "f1": f1_score(y_test, y_pred),
            "auc_roc": roc_auc_score(y_test, y_prob),
        }

        # Log parameters
        mlflow.log_params(model.get_params())

        # Log metrics
        mlflow.log_metrics(metrics)

        # Log model artifact
        mlflow.sklearn.log_model(model, "model")

        # Log dataset info
        mlflow.log_param("train_size", X_train.shape[0])
        mlflow.log_param("test_size", X_test.shape[0])
        mlflow.log_param("n_features", X_train.shape[1])

        print(f"{model_name}: F1={metrics['f1']:.4f}, AUC={metrics['auc_roc']:.4f}")

        return metrics

# Log tất cả models
for name, model in models.items():
    train_and_log(model, name, X_train_val, y_train_val, X_test, y_test)
```

### 7.3. MLflow UI

```bash
# Khởi động MLflow UI — xem tất cả experiments
mlflow ui --port 5000

# Mở browser: http://localhost:5000
# → So sánh runs, xem charts, download models
```

MLflow UI cho phép bạn: compare runs side-by-side, xem metric trends, download model artifacts, và register best model cho deployment.

## 8. XGBoost Practical Example

**XGBoost** (eXtreme Gradient Boosting) là algorithm mạnh nhất cho tabular data. Hầu hết Kaggle competitions về tabular data đều thắng bằng XGBoost hoặc LightGBM.

### 8.1. Từ Raw Data đến Tuned Model

```python
import xgboost as xgb

# === Full pipeline: raw data → tuned XGBoost ===

# 1. Prepare data (dùng pipeline từ trước)
df_final = (
    pd.read_csv(url)
    .pipe(handle_missing)
    .pipe(encode_features)
    .pipe(create_features)
)

X = df_final.drop(columns=["Survived"])
y = df_final["Survived"]
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# 2. Tune với Optuna
def xgb_objective(trial):
    params = {
        "n_estimators": trial.suggest_int("n_estimators", 100, 1000),
        "max_depth": trial.suggest_int("max_depth", 3, 10),
        "learning_rate": trial.suggest_float("learning_rate", 0.001, 0.3, log=True),
        "subsample": trial.suggest_float("subsample", 0.6, 1.0),
        "colsample_bytree": trial.suggest_float("colsample_bytree", 0.6, 1.0),
        "reg_alpha": trial.suggest_float("reg_alpha", 1e-8, 10.0, log=True),
        "reg_lambda": trial.suggest_float("reg_lambda", 1e-8, 10.0, log=True),
    }
    model = xgb.XGBClassifier(
        **params,
        random_state=42,
        eval_metric="logloss",
    )
    scores = cross_val_score(model, X_train, y_train, cv=5, scoring="f1")
    return scores.mean()

study = optuna.create_study(direction="maximize")
study.optimize(xgb_objective, n_trials=50)

# 3. Train final model với best params
best_xgb = xgb.XGBClassifier(
    **study.best_params,
    random_state=42,
    eval_metric="logloss",
)
best_xgb.fit(X_train, y_train)

# 4. Evaluate on test set
metrics = evaluate_model(best_xgb, X_test, y_test, "XGBoost (Tuned)")
```

### 8.2. Feature Importance

```python
# XGBoost built-in feature importance
importance = pd.Series(
    best_xgb.feature_importances_,
    index=X.columns
).sort_values(ascending=False)

print("Top 10 Features:")
print(importance.head(10))
```

### 8.3. Log vào MLflow

```python
with mlflow.start_run(run_name="XGBoost-Optuna-Tuned"):
    # Log best params
    mlflow.log_params(study.best_params)

    # Log metrics
    mlflow.log_metrics(metrics)

    # Log model
    mlflow.xgboost.log_model(best_xgb, "model")

    # Log Optuna study info
    mlflow.log_metric("optuna_n_trials", len(study.trials))
    mlflow.log_metric("optuna_best_value", study.best_value)
```

### 8.4. Bảng so sánh kết quả

| Model | Accuracy | F1 | AUC-ROC | Training Time |
|-------|---------|-----|---------|--------------|
| Logistic Regression | 0.79 | 0.73 | 0.84 | < 1s |
| Random Forest | 0.82 | 0.76 | 0.87 | ~2s |
| Gradient Boosting | 0.83 | 0.78 | 0.88 | ~5s |
| **XGBoost (Tuned)** | **0.85** | **0.80** | **0.90** | ~10s (+ tuning) |

> **Tip thực tế:** Với tabular data, thứ tự thử model nên là: **Logistic Regression → Random Forest → XGBoost/LightGBM**. Nếu XGBoost đã cho ≥0.90 AUC thì deep learning hiếm khi cải thiện đáng kể cho tabular data.

## Tổng kết

Bạn đã nắm được toàn bộ **ML Pipeline từ A-Z**:

- ✅ **5-stage pipeline**: Data → Features → Training → Evaluation → Tracking
- ✅ **EDA & Data Quality**: Pandas profiling, systematic quality checks, missing value strategies
- ✅ **Feature Engineering**: Encoding (binary, one-hot, label), scaling, feature creation, Pandas pipe pattern
- ✅ **Model Training**: scikit-learn consistent API, train/val/test split, cross-validation
- ✅ **Evaluation Metrics**: Accuracy, Precision, Recall, F1, AUC-ROC — khi nào dùng metric nào
- ✅ **Hyperparameter Tuning**: GridSearch cho simple cases, Optuna cho production
- ✅ **MLflow Tracking**: Log params, metrics, artifacts — không bao giờ quên experiment
- ✅ **XGBoost**: Algorithm mạnh nhất cho tabular data, từ raw data đến tuned model

Pipeline này là **nền tảng bất biến** — dù bạn dùng deep learning, LLM, hay AI Agent, bạn vẫn cần data processing, evaluation, và experiment tracking.

## Bài tập

### Bài tập 1: End-to-end Pipeline (Cơ bản)
Dùng **Heart Disease dataset** từ UCI (`heart.csv`):
1. EDA và data quality report
2. Feature engineering (ít nhất 2 features mới)
3. Train 3 models, so sánh bằng cross-validation
4. Log tất cả vào MLflow

### Bài tập 2: Optuna Tuning (Trung bình)
Với dataset Bài tập 1:
1. Tune XGBoost bằng Optuna (100 trials)
2. Visualize optimization history (`optuna.visualization`)
3. So sánh best Optuna result vs GridSearch

### Bài tập 3: Production Pipeline (Nâng cao)
Tạo một file `pipeline.py` hoàn chỉnh:
1. Dùng `sklearn.pipeline.Pipeline` để chain preprocessing + model
2. Implement custom transformer (kế thừa `BaseEstimator`, `TransformerMixin`)
3. Save pipeline bằng `joblib` và load lại để predict
4. Viết unit tests cho mỗi step trong pipeline

---

**Bài tiếp theo:** Trong **Bài 3 — Deep Learning Foundations với PyTorch**, chúng ta sẽ chuyển từ traditional ML sang neural networks — tensor operations, autograd, training loop, và xây dựng model từ scratch với PyTorch.
