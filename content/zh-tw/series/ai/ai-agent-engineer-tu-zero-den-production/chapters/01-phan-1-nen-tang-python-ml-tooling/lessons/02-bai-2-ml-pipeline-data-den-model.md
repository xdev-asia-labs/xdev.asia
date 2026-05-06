---
id: 019e0a01-bb02-7001-c001-ee0200000001
title: 第 2 課：機器學習流程 — 從資料到模型
slug: bai-2-ml-pipeline-data-den-model
description: 端對端機器學習管道：資料收集、預處理、特徵工程。模型訓練、評估、超參數調整。 scikit 學習、XGBoost。 ML流追蹤。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 1
section_title: 第 1 部分：基礎 — Python、ML 與 AI 工具
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: AI代理工程師：從零到生產
  slug: ai-agent-engineer-tu-zero-den-production
locale: zh-tw
---

> **ML 生產模型並非始於 `model.fit()` — 它從資料管道開始。 ** ML 工程師 80% 的時間都花在資料收集、清理、特徵工程。本文將帶您了解從原始資料到部署模型的整個管道，以及可以立即運行的程式碼。

## 1. ML 管道概述 — 整體情況

機器學習不是「選擇模型然後訓練」。它是一個**管道**——一系列有序的步驟，每個步驟都直接影響最終結果。

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

|舞台|目標|主要工具 | % 時間 |
|--------|----------|-------------|------------|
|資料收集和 EDA |收集、探索和評估資料品質 | Pandas，ydata 分析 | 〜30% |
|特徵工程 |將原始資料轉化為可理解的特徵模型 |熊貓，scikit-learn | 〜30% |
|模特兒訓練|在訓練資料上訓練模型 | scikit-learn、XGBoost | ~15% |
|模型評估|評估性能，選擇最佳模型 | scikit-learn 指標 | ~15% |
|實驗追蹤|記錄日誌，對比實驗 | MLflow，W&B | 〜10% |

> **實用提示：** 「垃圾進，垃圾出」是一條不變的規則。乾淨數據上的簡單模型總是勝過髒數據上的複雜模型。

### 1.1。設定本文的環境

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

## 2. 資料收集和 EDA

### 2.1。加載數據並首先查看

第一步始終是：**在做任何事情之前查看資料。 **

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

### 2.2。帶有 ydata-profiling 的自動化 EDA

無需手動編寫 50 行 EDA，而是使用 **profiling** 自動產生報表：

```python
from ydata_profiling import ProfileReport

# Generate full EDA report — 1 dòng
profile = ProfileReport(df, title="Titanic EDA", explorative=True)
profile.to_file("eda_report.html")
```

報告將包括：每列的分佈、相關性、矩陣、缺失值分析、重複檢測——第一步所需的一切。

### 2.3。數據品質檢查

在繼續之前，讓我們系統地驗證資料品質：

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

|專欄 |缺失% |行動|
|--------|------------|--------|
|客艙| 77.1% |刪除或提取甲板字母 |
|年齡 | 19.9% |根據 Pclass | 估計等於中位數 |
|登船| 0.2% |估算使用模式 |
|左| 0% |好的 |

> **實用提示：** 列赤字 > 50% 聯繫 5% → 刪除行或估算。

## 3. Feature Engineering

這是區分好模型和優秀模型的關鍵一步。特徵工程決定了 70-80% 的性能。

### 3.1。處理缺失值

```python
def handle_missing(df: pd.DataFrame) -> pd.DataFrame：
    """Handling missing values for Titanic dataset.""""
    df = df.copy()

    # Age: impute equals median according to Pclass (domain knowledge)
    df["年齡"] = df.groupby("Pclass")["年齡"].transform(
        lambda x: x.fillna(x.median())
    ）

    # Embarked: 估算使用模式
    df["Embarked"] = df["Embarked"].fillna(df["Embarked"].mode()[0])

    # 艙室：提取甲板字母，然後填寫“未知”
    df["甲板"] = df["客艙"].str[0].fillna("未知")

    # 不需要刪除列
    df = df.drop(columns=["Cabin", "Ticket", "Name", "PassengerId"])

    返回df

df_clean = 句柄缺失(df)
print(f"清理後缺失：{df_clean.isnull().sum().sum()}") # 0
```

### 3.2. Encoding Categorical Variables

機器學習模型只能理解數字。您需要對分類特徵進行編碼：

```文本。文字
┌────────────────────────────────────────────────────────────┐
│ Encoding Strategies Decision Tree │
├────────────────────────────────────────────────────────────┤
│ │
│ 分類特徵 │
│ │ │
│ ├── 2 categories ────▶ Binary Encoding (0/1) │
│ │ (Sex: male/female) │
│ │ │
│ ├── Few categories ──▶ One-Hot Encoding │
│ │ (Embarked: S/C/Q) (create dummy columns) │
│ │ │
│ ├── 序數 ──────────▶ 標籤編碼 (0,1,2,...) │
│ │ （尺寸：S < M < L)    (giữ thứ tự)               │
│       │                                                    │
│       └── Many categories ───▶ Target Encoding             │
│           (City: 100+ values)  (mean target per category)  │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

```python
def encode_features(df: pd.DataFrame) -> pd.DataFrame：
    """對分類特徵進行編碼。"""
    df = df.copy()

    # 性別的二進位編碼
    df["Sex"] = df["Sex"].map({"male": 0, "female": 1})

    # Embarked 和 Deck 的 One-hot 編碼
    df = pd.get_dummies(df, columns=["Embarked", "Deck"], drop_first=True)

    返回df

df_encoded = encode_features(df_clean)
print(f"Features after encoding: {df_encoded.shape[1]}")
```

### 3.3. Feature Scaling

許多演算法（邏輯迴歸、SVM、KNN）對特徵的規模很敏感：

```蟒蛇
from sklearn.preprocessing import StandardScaler, MinMaxScaler

# 比較縮放方法
定標器 = {
    "StandardScaler": StandardScaler(), # mean=0, std=1
    "MinMaxScaler": MinMaxScaler(), # 範圍 [0, 1]
}
```

|潔牙機 |食譜|何時使用 |
|--------|-----------|-------------|
| StandardScaler | (x - mean) / std | Default choice, khi data ~normal distribution |
|最小最大縮放器 | (x - 最小值) / (最大值 - 最小值) |當需要有界範圍 [0,1] 時，神經網路 |
|穩健定標器 | (x - 中位數) / IQR |當有很多異常值時 |
| No scaling | — |基於樹的模型（隨機森林、XGBoost）|

> **實用提示：** 基於樹的模型（隨機森林、XGBoost、LightGBM）**不需要縮放**，因為它們根據順序而不是絕對值進行分割。

### 3.4. Feature Creation & Selection

```蟒蛇
def create_features(df: pd.DataFrame) -> pd.DataFrame:
    """從領域知識創建新功能。"""
    df = df.copy()

    # 家庭規模
    df["家庭規模"] = df["SibSp"] + df["Parch"] + 1

    # 獨自一人
    df["IsAlone"] = (df["FamilySize"] == 1).astype(int)

    # 年齡分類
    df["AgeBin"] = pd.cut(
        df["年齡"],
        箱=[0, 12, 18, 35, 60, 100],
        標籤=[0, 1, 2, 3, 4]
    ).astype(int)

    # 每人票價
    df["FarePerPerson"] = df["Fare"] / df["FamilySize"]

    返回df

df_featured = create_features(df_encoded)
```

### 3.5. Pandas Pipe Pattern — Clean Pipeline

不要單獨呼叫每個函數，而是使用 **管道模式** 建立一個清晰的管道：

```蟒蛇
# PRO 方式 — 使用 .pipe() 連結所有內容
df_最終 = (
    pd.read_csv（網址）
    .pipe(handle_missing)
    .pipe(編碼特徵)
    .pipe(建立特徵)
）

print(f"最終資料集：{df_final.shape}")
# 最終資料集：(891, 22)
```

管道模式使程式碼**易於閱讀、易於測試、易於新增/刪除步驟**。每個函數接收 DataFrame，傳回 DataFrame — 純轉換。

## 4. Model Training

### 4.1. Train/Validation/Test Split

**黃金法則：** 切勿使用測試集來調整模型。將數據分為 3 部分：

```文本。文字
┌──────────────────────── ────────────────────────┐
│ 資料分割策略 │
├────────────────────────────────────────────────┤
│ │
│ 完整資料集（891 個樣本） │
│ ┌──────────────────── ──────────────────────┐ │
│ │ 訓練 (60%) │驗證 (20%) │ 測試 │ │
│ │ 534 個樣本 │178 │(20%) │ │
│ │ │ │179 │ │
│ │ 用來訓練模型 │Tune HP │最終 │ │
│ │ │ │評估 │ │
│ └────────────────────────────────────────────┘ │
│ │
│ 或在 Train+Val 上使用交叉驗證 │
│ 然後最終在測試中進行評估 │
└────────────────────────────────────────────────┘
```

```蟒蛇
# 準備X，y
目標=“倖存”
X = df_final.drop(列=[目標])
y = df_final[目標]

# 分割：80% 訓練+驗證，20% 測試（保留）
X_train_val, X_test, y_train_val, y_test = train_test_split(
    X、y、test_size=0.2、random_state=42、stratify=y
）

# 分割訓練+驗證：75% 訓練，25% 驗證（= 60/20 總體）
X_train, X_val, y_train, y_val = train_test_split(
    X_train_val、y_train_val、test_size=0.25、random_state=42、stratify=y_train_val
）

print(f"訓練：{X_train.shape[0]}，驗證：{X_val.shape[0]}，測試：{X_test.shape[0]}")
# 訓練：534，驗證：178，測試：179
```

### 4.2. scikit-learn Consistent API

scikit-learn 中的每個模型都遵循相同的 API：

```蟒蛇
從 sklearn.linear_model 導入 LogisticRegression
從 sklearn.ensemble 導入 RandomForestClassifier、GradientBoostingClassifier
從 sklearn.svm 導入 SVC

# 非樹模型的尺度特徵
定標器=標準定標器()
X_train_scaled = 縮放器.fit_transform(X_train)
X_val_scaled = scaler.transform(X_val) # 僅變換，不擬合！

# 使用相同的 API 訓練多個模型
型號={
    「邏輯迴歸」：LogisticRegression(max_iter=1000, random_state=42),
    「隨機森林」：RandomForestClassifier（n_estimators = 100，random_state = 42），
    「梯度提升」：GradientBoostingClassifier(n_estimators=100，random_state=42)，
}

結果={}
對於 models.items() 中的名稱、型號：
    # 樹模型使用原始數據，線性模型使用縮放數據
    如果名稱中包含“物流”：
        model.fit(X_train_scaled, y_train)
        y_pred = model.predict(X_val_scaled)
    其他：
        model.fit(X_train, y_train)
        y_pred = model.predict(X_val)

    acc = 準確度分數(y_val, y_pred)
    f1 = f1_score(y_val, y_pred)
    結果[名稱] = {“準確度”：acc，“f1”：f1}
    print(f"{name:25s} | 準確度: {acc:.4f} | F1: {f1:.4f}")
```

> **重要說明：** `scaler.fit_transform(X_train)` 已經 `scaler.transform(X_val)`。不可能的 `fit_transform` 在驗證/測試上—這是**資料外洩**並且會給出錯誤樂觀的結果。

### 4.3. Cross-Validation

不要依賴 1 次分割（這可能是幸運的/不幸的），而是使用 **k 折交叉驗證**：

```蟒蛇
從 sklearn.model_selection 導入 StratifiedKFold，cross_val_score

# 5折分層交叉驗證
cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)

對於 models.items() 中的名稱、型號：
    分數 = cross_val_score(
        模型，X_train_val，y_train_val，
        cv=cv，評分=“f1”
    ）
    print(f"{name:25s} | F1: {scores.mean():.4f} ± {scores.std():.4f}")

# 邏輯迴歸 | F1：0.7321±0.0412
# 隨機森林 | F1：0.7586±0.0389
# 梯度提升 | F1：0.7654±0.0356
```

```文本。文字
┌──────────────────────────────────────────────────────┐
│ 5 折交叉驗證 │
├──────────────────────────────────────────────────────┤
│ │
│ 第 1 折：[VAL] [火車] [火車] [火車] [火車] │
│ 第 2 折：[列車] [VAL] [火車] [火車] [火車] │
│ 第 3 折：[列車] [列車] [VAL] [火車] [火車] │
│ 第 4 折：[火車] [火車] [火車] [VAL] [火車] │
│ 第 5 折：[火車] [火車] [火車] [火車] [VAL] │
│ │
│ 最終分數 = 平均值（5 分）± 標準差（5 分） │
│ → 比單分體可靠 │
└──────────────────────────────────────────────────────┘
```

## 5. Model Evaluation

### 5.1. Classification Metrics Deep Dive

準確性並不總是一個好的衡量標準。對於不平衡的數據，您需要更好地理解：

```文本。文字
┌──────────────────────────────────────────────────────────────┐
│ 混淆矩陣 │
├──────────────────────────────────────────────────────────────┤
│ 預測 │
│ 正負 │
│ 實際正值 │ TP │ FN │
│ 實際陰性 │ FP │ TN │ │
│ │
│ 精確度 = TP / (TP + FP) → 「當模型顯示為正值時， │
│ 正確率是多少？          │
│ │
│ 回想率 = TP / (TP + FN) → 「在所有真陽性中， │
│ 找到了多少個模型？  │
│ │
│ F1 分數 = 2 × (P × R) / (P + R) → 調和平均值 │
│ │
│ AUC-ROC = ROC曲線下面積 → 判別能力 │
│ 所有閾值下的正向與負向 │
└──────────────────────────────────────────────────────────────┘
```

|指標|何時確定優先順序 |範例|
|--------|----------------|-------|
| **準確度** |資料平衡，FP成本≈FN|狗/貓照片分類 |
| **精確** |昂貴的 FP（誤報）|垃圾郵件偵測（重要電子郵件被垃圾郵件）|
| **回憶** |昂貴的FN（省略）|檢測癌症（遺漏危險病人）|
| **F1 得分** |需要平衡精確度/召回率 |不平衡資料的預設選擇 |
| **AUC-ROC** |整體車型比較|車型選擇，與閾值無關|

### 5.2. Evaluation Code

```蟒蛇
從 sklearn.metrics 導入（
    分類報告、混淆矩陣、roc_auc_score、
    Roc曲線顯示
）
將 matplotlib.pyplot 導入為 plt

def評估模型（模型，X_test，y_test，model_name =「模型」）：
    “”“全面的模型審查。”“”
    y_pred = model.predict(X_test)
    y_prob = model.predict_proba(X_test)[:, 1]

    # 分類報告
    印出(f"\n{'='*50}")
    print(f" {model_name} — 評估報告")
    印出（f“{'='* 50}”）
    print(classification_report(y_test, y_pred, target_names=["未存活", "存活"]))

    #AUC-ROC
    auc = roc_auc_score(y_test, y_prob)
    print(f"AUC-ROC: {auc:.4f}")

    # 混淆矩陣
    cm = 混淆矩陣(y_test, y_pred)
    print(f"\n混淆矩陣:")
    print(f" TN={cm[0][0]} FP={cm[0][1]}")
    print(f" FN={cm[1][0]} TP={cm[1][1]}")

    返回{“準確度”：準確度_得分（y_test，y_pred），
            「f1」：f1_score（y_test，y_pred），
            “auc”：auc}

# 評估最佳模型
best_model = models["梯度提升"]
best_model.fit(X_train_val, y_train_val)
指標=評估模型（最佳模型，X_測試，y_測試，「梯度提升」）
```

## 6. Hyperparameter Tuning

預設模型很少是最佳模型。 **超參數調整**找到最佳配置。

### 6.1. GridSearch vs RandomSearch vs Optuna

```文本。文字
┌────────────────────────────────────────────────────────────────────────
│ 超參數調優策略 │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│ │
│ GridSearch 隨機搜尋 Optuna（貝葉斯） │
│ ┌─┬─┬─┬─┐ ┌─┬─┬─┬─┐ ┌─┬─┬─┬─┐ │
│ │x│x│x│x│ │ │x│ │ │ │ │ │ │ │ │
│ ├─┼─┼─┼─┤ ├─┼─┼─┼─┤ ├─┼─┼─┼─┤ │
│ │x│x│x│x│ │ │ │ │x│ │ │x│ │ │ │
│ ├─┼─┼─┼─┤ ├─┼─┼─┼─┤ ├─┼─┼─┼─┤ │
│ │x│x│x│x│ │x│ │ │ │ │ │x│x│ │ ◀ 聚焦 │
│ ├─┼─┼─┼─┤ ├─┼─┼─┼─┤ ├─┼─┼─┼─┤ │
│ │x│x│x│x│ │ │ │x│ │ │ │x│x│x│ ◀ 此處 │
│ └─┴─┴─┴─┘ └─┴─┴─┴─┘ └─┴─┴─┴─┘ │
│ 試試所有組合 隨機樣本 聰明：學習 │
│ 16 次試驗 4 次試驗 之前的試驗 │
│ │
│ 優點：詳盡 優點：快速，優點：最有效率 │
│ 缺點：速度慢，O(n^k) 效果出奇好 缺點：設定複雜│
└────────────────────────────────────────────────────────────────┘
```

|方法|試驗需要|最佳時間 |圖書館 |
|--------|-----------|-------------|---------|
|網格搜尋履歷 |所有組合 |超參數較少 (2-3)，搜尋空間較小 | scikit 學習 |
|隨機搜尋CV |固定預算|搜尋空間大，想要快| scikit 學習 |
| **奧普圖納** |智慧採樣|搜尋空間大，需要最優|奧普圖納 |

### 6.2。使用 scikit-learn 進行網格搜索

```蟒蛇
從 sklearn.model_selection 導入 GridSearchCV

參數網格 = {
    "n_estimators": [100, 200, 300],
    「最大深度」：[3,5,7],
    「學習率」：[0.01，0.1，0.2]，
}

網格搜尋 = 網格搜尋CV(
    梯度提升分類器（random_state=42），
    參數網格=參數網格，
    履歷=5，
    評分=“f1”，
    n_jobs=-1, # 使用所有CPU核心
    詳細=1，
）

grid_search.fit(X_train_val, y_train_val)

print(f"最佳參數：{grid_search.best_params_}")
print(f"最佳 F1: {grid_search.best_score_:.4f}")
# 最佳參數：{'learning_rate': 0.1, 'max_depth': 5, 'n_estimators': 200}
```

### 6.3. Optuna — Bayesian Optimization

**Optuna** 更聰明：它從先前的試驗中學習來選擇下一個超參數。

```蟒蛇
導入奧圖納

定義目標（試用）：
    """用於梯度提升的 Optuna 目標函數。"""
    參數 = {
        "n_estimators": Trial.suggest_int("n_estimators", 50, 500),
        "最大深度": Trial.suggest_int("最大深度", 2, 10),
        "learning_rate": Trial.suggest_float("learning_rate", 0.001, 0.3, log=True),
        "子樣本": Trial.suggest_float("子樣本", 0.6, 1.0),
        "min_samples_split": Trial.suggest_int("min_samples_split", 2, 20),
    }

    模型 = GradientBoostingClassifier(**params, random_state=42)
    分數= cross_val_score（模型，X_train_val，y_train_val，cv = 5，評分=“f1”）
    回傳分數.mean()

# 運行最佳化 — 50 次試驗而非 243 次 (GridSearch 3^5)
研究 = optuna.create_study(direction="maximize")
研究.最佳化（目標，n_Trials=50，show_progress_bar=True）

print(f"最佳 F1: {study.best_value:.4f}")
print(f"最佳參數：{study.best_params}")
```

> **實用提示：** Optuna 通常會透過較少的試驗找到比 GridSearch 更好的結果。在生產中，這是最受歡迎的超參數調整工具。

## 7. 使用 MLflow 進行實驗追蹤

當你執行 50 個實驗時，你會忘記第三個實驗所使用的參數。 **MLflow** 解決了這個問題。

### 7.1. MLflow Concepts

```文字.文字
┌────────────────────────────────────────────────────────────┐
│ MLflow 架構 │
├────────────────────────────────────────────────────────────┤
│ │
│ 實驗：《鐵達尼號生存預測》 │
│ │ │
│ ├── 執行 1：邏輯迴歸 │
│ │ ├── 參數：C=1.0, max_iter=1000 │
│ │ ├── 指標：準確度=0.79，f1=0.73，auc=0.84 │
│ │ └── 工件：model.pkl、confusion_matrix.png │
│ │ │
│ ├── 運行 2：隨機森林 │
│ │ ├── 參數：n_estimators=100, max_depth=7 │
│ │ ├── 指標：準確度=0.82，f1=0.76，auc=0.87 │
│ │ └── 工件：model.pkl、feature_importance.png │
│ │ │
│ └── 運作3：XGBoost + Optuna 調優 │
│ ├── 參數：（來自 Optuna 的最佳參數） │
│ ├── 指標：準確度=0.85，f1=0.80，auc=0.90 │
│ └── 工件：model.pkl、optuna_study.pkl │
│ │
└────────────────────────────────────────────────────────────┘
```

### 7.2. MLflow Tracking Code

```蟒蛇
導入流量
導入mlflow.sklearn

# 設定實驗名稱
mlflow.set_experiment("泰坦尼克號生存")

def train_and_log(模型, model_name, X_train, y_train, X_test, y_test):
    """訓練模型並將所有內容記錄到 MLflow 中。"""
    使用 mlflow.start_run(run_name=model_name)：
        # 火車
        model.fit(X_train, y_train)
        y_pred = model.predict(X_test)
        y_prob = model.predict_proba(X_test)[:, 1]

        #指標
        指標={
            「準確度」：準確度_得分（y_test，y_pred），
            「精準度」： precision_score（y_test，y_pred），
            「召回」：recall_score（y_test，y_pred），
            「f1」：f1_score（y_test，y_pred），
            「auc_roc」：roc_auc_score（y_test，y_prob），
        }

        # 日誌參數
        mlflow.log_params(model.get_params())

        # 記錄指標
        mlflow.log_metrics（指標）

        # 記錄模型工件
        mlflow.sklearn.log_model（模型，「模型」）

        # 記錄資料集資訊
        mlflow.log_param("train_size", X_train.shape[0])
        mlflow.log_param("test_size", X_test.shape[0])
        mlflow.log_param("n_features", X_train.shape[1])

        print(f"{model_name}: F1={metrics['f1']:.4f}, AUC={metrics['auc_roc']:.4f}")

        返回指標

# 記錄所有模型
對於 models.items() 中的名稱、型號：
    train_and_log(模型、名稱、X_train_val、y_train_val、X_test、y_test)
```

### 7.3. MLflow UI

```巴什
# 啟動 MLflow UI — 查看所有實驗
mlflow ui --連接埠 5000

# 開啟瀏覽器： http://localhost:5000
# → 比較運行、看圖表、下載模型
```

MLflow UI 讓您：並排比較運行、查看指標趨勢、下載模型工件以及註冊最佳模型以進行部署。

## 8. XGBoost Practical Example

**XGBoost**（eXtreme Gradient Boosting）是針對表格資料最強大的演算法。大多數表格資料的 Kaggle 競賽都是 XGBoost 或 LightGBM 獲勝。

### 8.1。從原始資料到調整模型

```蟒蛇
將 xgboost 導入為 xgb

# === 完整管道：原始資料 → 調整後的 XGBoost ===

# 1. 準備資料（使用之前的管道）
df_最終 = (
    pd.read_csv（網址）
    .pipe(handle_missing)
    .pipe(編碼特徵)
    .pipe(建立特徵)
）

X = df_final.drop(columns=["倖存"])
y = df_final["倖存"]
X_train, X_test, y_train, y_test = train_test_split(
    X、y、test_size=0.2、random_state=42、stratify=y
）

#2.使用 Optuna 進行調諧
def xgb_objective（試用）：
    參數 = {
        "n_estimators": Trial.suggest_int("n_estimators", 100, 1000),
        "最大深度": Trial.suggest_int("最大深度", 3, 10),
        "learning_rate": Trial.suggest_float("learning_rate", 0.001, 0.3, log=True),
        "子樣本": Trial.suggest_float("子樣本", 0.6, 1.0),
        "colsample_bytree": Trial.suggest_float("colsample_bytree", 0.6, 1.0),
        "reg_alpha": Trial.suggest_float("reg_alpha", 1e-8, 10.0, log=True),
        "reg_lambda": Trial.suggest_float("reg_lambda", 1e-8, 10.0, log=True),
    }
    模型 = xgb.XGBClassifier(
        **參數，
        隨機狀態=42，
        eval_metric=“對數損失”，
    ）
    分數 = cross_val_score(模型, X_train, y_train, cv=5, 評分=“f1”)
    回傳分數.mean()

研究 = optuna.create_study(direction="maximize")
研究.優化(xgb_objective, n_Trials=50)

# 3. 使用最佳參數訓練最終模型
best_xgb = xgb.XGBClassifier(
    **研究.best_params，
    隨機狀態=42，
    eval_metric=“對數損失”，
）
best_xgb.fit(X_train, y_train)

# 4. 在測試集上進行評估
指標=評估_模型（best_xgb，X_test，y_test，「XGBoost（調整）」）
```

### 8.2. Feature Importance

```蟒蛇
# XGBoost內建特徵重要性
重要性 = pd.Series(
    best_xgb.feature_importances_,
    索引=X.列
).sort_values(升序=False)

print("十大功能：")
列印（重要性.head（10））
```

### 8.3。登录 MLflow

```蟒蛇
使用 mlflow.start_run(run_name="XGBoost-Optuna-Tuned")：
    # 記錄最佳參數
    mlflow.log_params（研究.best_params）

    # 記錄指標
    mlflow.log_metrics（指標）

    # 日誌模型
    mlflow.xgboost.log_model（best_xgb，「模型」）

    # 記錄 Optuna 研究資訊
    mlflow.log_metric("optuna_n_Trials", len(study.Trials))
    mlflow.log_metric（“optuna_best_value”，study.best_value）
```

### 8.4。結果對照表

| Model | Accuracy | F1 | AUC-ROC | Training Time |
|-------|---------|-----|---------|--------------|
| Logistic Regression | 0.79 | 0.73 | 0.84 | < 1s |
| Random Forest | 0.82 | 0.76 | 0.87 | ~2s |
| Gradient Boosting | 0.83 | 0.78 | 0.88 | ~5s |
| **XGBoost (Tuned)** | **0.85** | **0.80** | **0.90** | ~10s (+ tuning) |

> **實用提示：** 對於表格數據，模型測試順序應該是：**邏輯回歸 → 隨機森林 → XGBoost/LightGBM**。如果 XGBoost 給出 ≥0.90 AUC，那麼深度學習很少能顯著改善表格資料。

＃＃ 概括

您擁有從 A-Z 的整個 **ML 管道**：

- ✅ **5-stage pipeline**: Data → Features → Training → Evaluation → Tracking
- ✅ **EDA & Data Quality**: Pandas profiling, systematic quality checks, missing value strategies
- ✅ **Feature Engineering**: Encoding (binary, one-hot, label), scaling, feature creation, Pandas pipe pattern
- ✅ **Model Training**: scikit-learn consistent API, train/val/test split, cross-validation
- ✅ **評估指標**：準確率、精確度、召回率、F1、AUC-ROC — 何時使用哪些指標
- ✅ **Hyperparameter Tuning**: GridSearch cho simple cases, Optuna cho production
- ✅ **MLflow Tracking**：記錄參數、指標、工件－永遠不要忘記實驗
- ✅ **XGBoost**：表格資料最強大的演算法，從原始資料到調整模型

這個管道是**基礎不可變的**——無論您使用深度學習、LLM 還是 AI Agent，您仍然需要數據處理、評估和實驗追蹤。

＃＃ 鍛煉

### 練習 1：端對端管道（基本）
使用 UCI 的 **心臟病資料集** (`心臟.csv`):
1. EDA和數據品質報告
2. 特徵工程（至少2個新特徵）
3. 訓練3個模型，使用交叉驗證進行比較
4. 將所有內容記錄到 MLflow 中

### 練習 2：Optuna 調整（中）
使用資料集練習 1：
1. 使用 Optuna 調整 XGBoost（100 次試驗）
2. Visualize optimization history (`optuna.可視化`)
3. 比較最佳 Optuna 結果與 GridSearch

### 練習 3：生產管道（進階）
建立文件 `管道.py` 完全的：
1. 使用 `sklearn.pipeline.Pipeline` 連結預處理+模型
2.實作自訂變壓器（繼承 `基礎估計器`, `TransformerMixin`)
3. 保存管道 `joblib` 並重新載入以預測
4. 為管道中的每個步驟編寫單元測試

---

**下一課：** 在 **第 3 課 — 使用 PyTorch 進行深度學習基礎**，我們將從傳統的 ML 轉向神經網路 — 張量運算、自動分級、訓練循環以及使用 PyTorch 從頭開始建立模型。
