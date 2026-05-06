---
id: 019e0a01-bb02-7001-c001-ee0200000001
title: 'Lesson 2: Machine Learning Pipeline — From Data to Model'
slug: bai-2-ml-pipeline-data-den-model
description: >-
  End-to-end ML pipeline: data collection, preprocessing, feature engineering.
  Model training, evaluation, hyperparameter tuning. scikit-learn, XGBoost.
  MLflow tracking.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 1
section_title: 'Part 1: Foundation — Python, ML & AI Tooling'
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: 'AI Agent Engineer: From Zero to Production'
  slug: ai-agent-engineer-tu-zero-den-production
locale: en
---

> **An ML production model does not start from `model.fit()` — it starts from the data pipeline.** 80% of an ML Engineer's time is in data collection, cleaning, feature engineering. This article will take you through the entire pipeline from raw data to deployed model, with code that can run immediately.

## 1. ML Pipeline Overview — The big picture

Machine Learning is not "choose a model and then train". It's a **pipeline** — an ordered series of steps, each of which directly affects the final result.

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

| Stage | Goal | Main Tools | % time |
|-------|----------|-------------|-------------|
| Data Collection & EDA | Collect, explore, and evaluate data quality | Pandas, ydata-profiling | ~30% |
| Feature Engineering | Turn raw data into an understandable features model | Pandas, scikit-learn | ~30% |
| Model Training | Train model on training data | scikit-learn, XGBoost | ~15% |
| Model Evaluation | Evaluate performance, choose the best model | scikit-learn metrics | ~15% |
| Experimental Tracking | Record log, compare experiments | MLflow, W&B | ~10% |

> **Practical tip:** "Garbage in, garbage out" is an immutable rule. A simple model on clean data always beats a complex model on dirty data.

### 1.1. Set up the environment for this article

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

### 2.1. Load Data and First Look

The first step is always: **look at the data before doing anything.**

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

### 2.2. Automated EDA with ydata-profiling

Instead of writing 50 lines of EDA manually, use **profiling** to generate reports automatically:

```python
from ydata_profiling import ProfileReport

# Generate full EDA report — 1 dòng
profile = ProfileReport(df, title="Titanic EDA", explorative=True)
profile.to_file("eda_report.html")
```

The report will include: distribution for each column, correlation, matrix, missing values analysis, duplicate detection — everything you need for the first step.

### 2.3. Data Quality Checks

Before moving forward, let's validate data quality systematically:

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

| Columns | Missing % | Action |
|--------|-----------|--------|
| Cabin | 77.1% | Drop or extract deck letter |
| Age | 19.9% ​​| Impute equals median according to Pclass |
| Embarked | 0.2% | Impute using mode |
| Left | 0% | OK |

> **Practical tip:** Column missing > 50% should usually be dropped unless you have domain knowledge and know how to impute properly. Missing 5-20% → impute. Missing < 5% → drop rows or impute.

## 3. Feature Engineering

This is the step that **makes the difference** between a good model and an excellent model. Feature engineering determines 70-80% of performance.

### 3.1. Handling Missing Values

```python
def handle_missing(df: pd.DataFrame) -> pd.DataFrame:
    """Handling missing values for Titanic dataset."""
    df = df.copy()

    # Age: impute equals median according to Pclass (domain knowledge)
    df["Age"] = df.groupby("Pclass")["Age"].transform(
        lambda x: x.fillna(x.median())
    )

    # Embarked: impute using mode
    df["Embarked"] = df["Embarked"].fillna(df["Embarked"].mode()[0])

    # Cabin: extract deck letter, then fill in "Unknown"
    df["Deck"] = df["Cabin"].str[0].fillna("Unknown")

    # Drop columns are not needed
    df = df.drop(columns=["Cabin", "Ticket", "Name", "PassengerId"])

    return df

df_clean = handle_missing(df)
print(f"Missing after cleaning: {df_clean.isnull().sum().sum()}") # 0
```

### 3.2. Encoding Categorical Variables

ML models only understand numbers. You need to encode categorical features:

```text. text
┌────────────────────────────── ──────────────────────────────┐
│ Encoding Strategies Decision Tree │
├────────────────────────────── ──────────────────────────────┤
│ │
│ Categorical Features │
│ │ │
│ ├── 2 categories ──────▶ Binary Encoding (0/1) │
│ │ (Sex: male/female) │
│ │ │
│ ├── Few categories ────▶ One-Hot Encoding │
│ │ (Embarked: S/C/Q) (create dummy columns) │
│ │ │
│ ├── Ordinal ───────────▶ Label Encoding (0,1,2,...) │
│ │ (Size: S < M < L)    (giữ thứ tự)               │
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

    # Binary encoding for Sex
    df["Sex"] = df["Sex"].map({"male": 0, "female": 1})

    # One-hot encoding for Embarked and Deck
    df = pd.get_dummies(df, columns=["Embarked", "Deck"], drop_first=True)

    return df

df_encoded = encode_features(df_clean)
print(f"Features after encoding: {df_encoded.shape[1]}")
```

### 3.3. Feature Scaling

Many algorithms (Logistic Regression, SVM, KNN) are sensitive to the scale of features:

```python
from sklearn.preprocessing import StandardScaler, MinMaxScaler

# Compare scaling methods
scalers = {
    "StandardScaler": StandardScaler(), # mean=0, std=1
    "MinMaxScaler": MinMaxScaler(), # range [0, 1]
}
```

| Scaler | Recipe | When to use |
|--------|-----------|-------------|
| StandardScaler | (x - mean) / std | Default choice, khi data ~normal distribution |
| MinMaxScaler | (x - min) / (max - min) | When bounded range [0,1] is needed, neural networks |
| RobustScaler | (x - median) / IQR | When there are many outliers |
| No scaling | — | Tree-based models (Random Forest, XGBoost) |

> **Practical tip:** Tree-based models (Random Forest, XGBoost, LightGBM) **don't need scaling** because they split based on order, not absolute value.

### 3.4. Feature Creation & Selection

```python
def create_features(df: pd.DataFrame) -> pd.DataFrame:
    """Create new features from domain knowledge."""
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

Instead of calling each function individually, use the **pipe pattern** to create a clear pipeline:

```python
# PRO way — chain everything with .pipe()
df_final = (
    pd.read_csv(url)
    .pipe(handle_missing)
    .pipe(encode_features)
    .pipe(create_features)
)

print(f"Final dataset: {df_final.shape}")
# Final dataset: (891, 22)
```

Pipe pattern makes code **easy to read, easy to test, easy to add/remove steps**. Each function receives DataFrame, returns DataFrame — pure transformation.

## 4. Model Training

### 4.1. Train/Validation/Test Split

**Golden rule:** Never use a test set to tune the model. Separate data into 3 parts:

```text. text
┌──────────────────────── ────────────────────────┐
│ Data Splitting Strategy │
├──────────────────────── ────────────────────────┤
│ │
│ Full Dataset (891 samples) │
│ ┌───────────────────── ─────────────────────┐ │
│ │ Training (60%) │Val (20%)│Test │ │
│ │ 534 samples │178 │(20%) │ │
│ │ │ │179 │ │
│ │ Used to train model │Tune HP │Final │ │
│ │ │ │eval │ │
│ └───────────────────── ─────────────────────┘ │
│ │
│ Or use Cross-Validation on Train+Val │
│ then evaluate finally on Test │
└──────────────────────── ────────────────────────┘
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

Every model in scikit-learn follows the same API:

```python
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.svm import SVC

# Scale features for non-tree models
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_val_scaled = scaler.transform(X_val) # ONLY transform, not fit!

# Train multiple models with the same API
models = {
    "Logistics Regression": LogisticRegression(max_iter=1000, random_state=42),
    "Random Forest": RandomForestClassifier(n_estimators=100, random_state=42),
    "Gradient Boosting": GradientBoostingClassifier(n_estimators=100, random_state=42),
}

results = {}
for name, model in models.items():
    # Tree models use raw data, linear models use scaled data
    if "Logistics" in name:
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

> **Important note:** `scaler.fit_transform(X_train)` Already `scaler.transform(X_val)`. IMPOSSIBLE `fit_transform` on val/test — that is **data leakage** and will give falsely optimistic results.

### 4.3. Cross-Validation

Instead of relying on 1 split (which can be lucky/unlucky), use **k-fold cross-validation**:

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

# Logistic Regression | F1: 0.7321 ± 0.0412
# RandomForest | F1: 0.7586 ± 0.0389
# Gradient Boosting | F1: 0.7654 ± 0.0356
```

```text. text
┌────────────────────────── ───────────────────────────┐
│ 5-Fold Cross-Validation │
├────────────────────────── ───────────────────────────┤
│ │
│ Fold 1: [VAL] [Train] [Train] [Train] [Train] │
│ Fold 2: [Train] [VAL] [Train] [Train] [Train] │
│ Fold 3: [Train] [Train] [VAL] [Train] [Train] │
│ Fold 4: [Train] [Train] [Train] [VAL] [Train] │
│ Fold 5: [Train] [Train] [Train] [Train] [VAL] │
│ │
│ Final score = mean(5 scores) ± std(5 scores) │
│ → More reliable than single split │
└────────────────────────── ───────────────────────────┘
```

## 5. Model Evaluation

### 5.1. Classification Metrics Deep Dive

Accuracy is not always a good metric. With imbalanced data, you need to better understand:

```text. text
┌────────────────────────────── ───────────────────────────────┐
│ Confusion Matrix │
├────────────────────────────── ───────────────────────────────┤
│ Predicted │
│ Positive Negative │
│ Actual Positive │ TP │ FN │ │
│ Actual Negative │ FP │ TN │ │
│ │
│ Precision = TP / (TP + FP) → "When the model says Positive, │
│ how many % correct?          │
│ │
│ Recall = TP / (TP + FN) → "Of all true Positives, │
│ How many models were found?  │
│ │
│ F1 Score = 2 × (P × R) / (P + R) → Harmonic mean │
│ │
│ AUC-ROC = Area under ROC curve → Discriminatory ability │
│ Positive vs Negative at all thresholds │
└────────────────────────────── ───────────────────────────────┘
```

| Metrics | When to prioritize | Example |
|--------|----------------|-------|
| **Accuracy** | Data balanced, cost of FP ≈ FN | Classification of dog/cat photos |
| **Precision** | Expensive FP (false alarm) | Spam detection (important emails are spammed) |
| **Recall** | Costly FN (omission) | Detecting cancer (missing dangerous patients) |
| **F1 Score** | Need to balance Precision/Recall | Default choice for imbalanced data |
| **AUC-ROC** | Compare overall models | Model selection, threshold-independent |

### 5.2. Evaluation Code

```python
from sklearn.metrics import (
    classification_report, confusion_matrix, roc_auc_score,
    RocCurveDisplay
)
import matplotlib.pyplot as plt

def evaluate_model(model, X_test, y_test, model_name="Model"):
    """Comprehensive model review."""
    y_pred = model.predict(X_test)
    y_prob = model.predict_proba(X_test)[:, 1]

    # Classification report
    print(f"\n{'='*50}")
    print(f" {model_name} — Evaluation Report")
    print(f"{'='*50}")
    print(classification_report(y_test, y_pred, target_names=["Not Survived", "Survived"]))

    #AUC-ROC
    auc = roc_auc_score(y_test, y_prob)
    print(f"AUC-ROC: {auc:.4f}")

    # Confusion Matrix
    cm = confusion_matrix(y_test, y_pred)
    print(f"\nConfusion Matrix:")
    print(f" TN={cm[0][0]} FP={cm[0][1]}")
    print(f" FN={cm[1][0]} TP={cm[1][1]}")

    return {"accuracy": accuracy_score(y_test, y_pred),
            "f1": f1_score(y_test, y_pred),
            "auc": auc}

# Evaluate best model
best_model = models["Gradient Boosting"]
best_model.fit(X_train_val, y_train_val)
metrics = evaluate_model(best_model, X_test, y_test, "Gradient Boosting")
```

## 6. Hyperparameter Tuning

The default model is rarely the best model. **Hyperparameter tuning** finds optimal configuration.

### 6.1. GridSearch vs RandomSearch vs Optuna

```text. text
┌──────────────────────────────── ────────────────────────────────┐
│ Hyperparameter Tuning Strategies │
├──────────────────────────────── ────────────────────────────────┤
│ │
│ GridSearch RandomSearch Optuna (Bayesian) │
│ ┌─┬─┬─┬─┐ ┌─┬─┬─┬─┐ ┌─┬─┬─┬─┐ │
│ │x│x│x│x│ │ │x│ │ │ │ │ │ │ │ │
│ ├─┼─┼─┼─┤ ├─┼─┼─┼─┤ ├─┼─┼─┼─┤ │
│ │x│x│x│x│ │ │ │ │x│ │ │x│ │ │ │
│ ├─┼─┼─┼─┤ ├─┼─┼─┼─┤ ├─┼─┼─┼─┤ │
│ │x│x│x│x│ │x│ │ │ │ │ │x│x│ │ ◀ focus │
│ ├─┼─┼─┼─┤ ├─┼─┼─┼─┤ ├─┼─┼─┼─┤ │
│ │x│x│x│x│ │ │ │x│ │ │ │x│x│x│ ◀ here │
│ └─┴─┴─┴─┘ └─┴─┴─┴─┘ └─┴─┴─┴─┘ │
│ Try ALL combos Random sample Smart: learn from │
│ 16 trials 4 trials previous trials │
│ │
│ Pros: Exhaustive Pros: Fast, Pros: Most efficient │
│ Cons: Slow, surprisingly good O(n^k) Cons: Complicated setup│
└──────────────────────────────── ────────────────────────────────┘
```

| Method | Trials need | Best when | Library |
|--------|-----------|-------------|---------|
| GridSearchCV | All combos | Fewer hyperparameters (2-3), small search space | scikit-learn |
| RandomizedSearchCV | Fixed budget | Search space is large, want to be fast | scikit-learn |
| **Optuna** | Smart sampling | Large search space, need optimal | optuna |

### 6.2. GridSearch with scikit-learn

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
    n_jobs=-1, # Use all CPU cores
    verbose=1,
)

grid_search.fit(X_train_val, y_train_val)

print(f"Best params: {grid_search.best_params_}")
print(f"Best F1: {grid_search.best_score_:.4f}")
# Best params: {'learning_rate': 0.1, 'max_depth': 5, 'n_estimators': 200}
```

### 6.3. Optuna — Bayesian Optimization

**Optuna** is smarter: it learns from previous trials to choose the next hyperparameters.

```python
import optuna

def objective(trial):
    """Optuna objective function for Gradient Boosting."""
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

# Run optimization — 50 trials instead of 243 (GridSearch 3^5)
study = optuna.create_study(direction="maximize")
study.optimize(objective, n_trials=50, show_progress_bar=True)

print(f"Best F1: {study.best_value:.4f}")
print(f"Best params: {study.best_params}")
```

> **Practical tip:** Optuna often finds better results than GridSearch with fewer trials. In production, this is the most popular tool for hyperparameter tuning.

## 7. Experiment Tracking with MLflow

When you run 50 experiments, you will forget what params the third experiment used. **MLflow** solves this problem.

### 7.1. MLflow Concepts

```text. text
┌────────────────────────────── ──────────────────────────────┐
│ MLflow Architecture │
├────────────────────────────── ──────────────────────────────┤
│ │
│ Experiment: "Titanic Survival Prediction" │
│ │ │
│ ├── Run 1: Logistic Regression │
│ │ ├── Parameters: C=1.0, max_iter=1000 │
│ │ ├── Metrics: accuracy=0.79, f1=0.73, auc=0.84 │
│ │ └── Artifacts: model.pkl, confusion_matrix.png │
│ │ │
│ ├── Run 2: Random Forest │
│ │ ├── Parameters: n_estimators=100, max_depth=7 │
│ │ ├── Metrics: accuracy=0.82, f1=0.76, auc=0.87 │
│ │ └── Artifacts: model.pkl, feature_importance.png │
│ │ │
│ └── Run 3: XGBoost + Optuna tuning │
│ ├── Parameters: (best params from Optuna) │
│ ├── Metrics: accuracy=0.85, f1=0.80, auc=0.90 │
│ └── Artifacts: model.pkl, optuna_study.pkl │
│ │
└────────────────────────────── ──────────────────────────────┘
```

### 7.2. MLflow Tracking Code

```python
import mlflow
import mlflow.sklearn

# Set experiment name
mlflow.set_experiment("titanic-survival")

def train_and_log(model, model_name, X_train, y_train, X_test, y_test):
    """Train the model and log everything into MLflow."""
    with mlflow.start_run(run_name=model_name):
        # Train
        model.fit(X_train, y_train)
        y_pred = model.predict(X_test)
        y_prob = model.predict_proba(X_test)[:, 1]

        #Metrics
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

# Log all models
for name, model in models.items():
    train_and_log(model, name, X_train_val, y_train_val, X_test, y_test)
```

### 7.3. MLflow UI

```bash
# Start MLflow UI — see all experiments
mlflow ui --port 5000

# Open browser: http://localhost:5000
# → Compare runs, view charts, download models
```

MLflow UI allows you to: compare runs side-by-side, view metric trends, download model artifacts, and register best models for deployment.

## 8. XGBoost Practical Example

**XGBoost** (eXtreme Gradient Boosting) is the most powerful algorithm for tabular data. Most Kaggle competitions for tabular data are won by XGBoost or LightGBM.

### 8.1. From Raw Data to Tuned Model

```python
import xgboost as xgb

# === Full pipeline: raw data → tuned XGBoost ===

# 1. Prepare data (using a pipeline from before)
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

#2. Tune with Optuna
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

# 3. Train final model with best params
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

### 8.3. Log into MLflow

```python
with mlflow.start_run(run_name="XGBoost-Optuna-Tuned"):
    # Log best params
    mlflow.log_params(study.best_params)

    # Log metrics
    mlflow.log_metrics(metrics)

    # Log models
    mlflow.xgboost.log_model(best_xgb, "model")

    # Log Optuna study info
    mlflow.log_metric("optuna_n_trials", len(study.trials))
    mlflow.log_metric("optuna_best_value", study.best_value)
```

### 8.4. Results comparison table

| Model | Accuracy | F1 | AUC-ROC | Training Time |
|-------|---------|-----|---------|--------------|
| Logistic Regression | 0.79 | 0.73 | 0.84 | < 1s |
| Random Forest | 0.82 | 0.76 | 0.87 | ~2s |
| Gradient Boosting | 0.83 | 0.78 | 0.88 | ~5s |
| **XGBoost (Tuned)** | **0.85** | **0.80** | **0.90** | ~10s (+ tuning) |

> **Practical tip:** With tabular data, the model testing order should be: **Logistic Regression → Random Forest → XGBoost/LightGBM**. If XGBoost gave ≥0.90 AUC then deep learning rarely significantly improves tabular data.

## Summary

You have the entire **ML Pipeline from A-Z**:

- ✅ **5-stage pipeline**: Data → Features → Training → Evaluation → Tracking
- ✅ **EDA & Data Quality**: Pandas profiling, systematic quality checks, missing value strategies
- ✅ **Feature Engineering**: Encoding (binary, one-hot, label), scaling, feature creation, Pandas pipe pattern
- ✅ **Model Training**: scikit-learn consistent API, train/val/test split, cross-validation
- ✅ **Evaluation Metrics**: Accuracy, Precision, Recall, F1, AUC-ROC — when to use which metrics
- ✅ **Hyperparameter Tuning**: GridSearch cho simple cases, Optuna cho production
- ✅ **MLflow Tracking**: Log params, metrics, artifacts — never forget experiment
- ✅ **XGBoost**: The most powerful algorithm for tabular data, from raw data to tuned models

This pipeline is **foundation immutable** — whether you use deep learning, LLM, or AI Agent, you still need data processing, evaluation, and experiment tracking.

## Exercise

### Exercise 1: End-to-end Pipeline (Basic)
Use **Heart Disease dataset** from UCI (`heart.csv`):
1. EDA and data quality report
2. Feature engineering (at least 2 new features)
3. Train 3 models, compare using cross-validation
4. Log everything into MLflow

### Exercise 2: Optuna Tuning (Medium)
With the dataset Exercise 1:
1. Tune XGBoost with Optuna (100 trials)
2. Visualize optimization history (`optuna.visualization`)
3. Compare best Optuna result vs GridSearch

### Exercise 3: Production Pipeline (Advanced)
Create a file `pipeline.py` complete:
1. Use `sklearn.pipeline.Pipeline` to chain preprocessing + model
2. Implement custom transformer (inherit `BaseEstimator`, `TransformerMixin`)
3. Save pipeline with `joblib` and reload to predict
4. Write unit tests for each step in the pipeline

---

**Next lesson:** In **Lesson 3 — Deep Learning Foundations with PyTorch**, we will move from traditional ML to neural networks — tensor operations, autograding, training loop, and building models from scratch with PyTorch.
