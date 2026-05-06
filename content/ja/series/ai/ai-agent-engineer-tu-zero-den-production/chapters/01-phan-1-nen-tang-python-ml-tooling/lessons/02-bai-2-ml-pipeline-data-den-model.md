---
id: 019e0a01-bb02-7001-c001-ee0200000001
title: 'レッスン 2: 機械学習パイプライン — データからモデルまで'
slug: bai-2-ml-pipeline-data-den-model
description: >-
  エンドツーエンドの ML パイプライン: データ収集、前処理、特徴エンジニアリング。モデルのトレーニング、評価、ハイパーパラメーターの調整。
  scikit-learn、XGBoost。 MLflow 追跡。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 1
section_title: 'パート 1: 基礎 — Python、ML、AI ツール'
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: 'AI エージェント エンジニア: ゼロから本番環境まで'
  slug: ai-agent-engineer-tu-zero-den-production
locale: ja
---

> **ML 実稼働モデルは、 `model.fit()` — データ パイプラインから始まります。** ML エンジニアの時間の 80% は、データの収集、クリーニング、特徴エンジニアリングに費やされます。この記事では、すぐに実行できるコードを使用して、生データからデプロイされたモデルまでのパイプライン全体を説明します。

## 1. ML パイプラインの概要 — 全体像

機械学習は「モデルを選択してトレーニングする」ものではありません。これは**パイプライン**、つまり順序​​付けられた一連のステップであり、それぞれが最終結果に直接影響します。

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

|ステージ | Goal |主要なツール | % 時間 |
|----------|----------|---------------|---------------|
|データ収集と EDA |データ品質の収集、調査、評価 |パンダ、ydata-profiling | ~30% |
|特徴エンジニアリング |生データを理解可能な特徴モデルに変換する |パンダ、scikit-learn | ~30% |
|モデルトレーニング |トレーニング データでモデルをトレーニングする | scikit-learn、XGBoost | ~15% |
|モデルの評価 |パフォーマンスを評価し、最適なモデルを選択する | scikit-learn メトリクス | ~15% |
|実験的な追跡 |ログを記録し、実験を比較する | MLflow、W&B | ~10% |

> **実用的なヒント:** 「ゴミは入ってゴミは出る」は不変のルールです。クリーン データの単純なモデルは、ダーティ データの複雑なモデルよりも常に優れています。

＃＃＃１．１．この記事の環境をセットアップする

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

## 2. データ収集と EDA

＃＃＃２．１．データのロードとファーストルック

最初のステップは常に次のとおりです: **何かをする前にデータを確認する**。

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

＃＃＃２．２． ydata-profiling を使用した自動 EDA

50 行の EDA を手動で記述する代わりに、**プロファイリング** を使用してレポートを自動的に生成します。

```python
from ydata_profiling import ProfileReport

# Generate full EDA report — 1 dòng
profile = ProfileReport(df, title="Titanic EDA", explorative=True)
profile.to_file("eda_report.html")
```

レポートには、各列の分布、相関関係、行列、欠損値分析、重複検出など、最初のステップに必要なすべてが含まれます。

＃＃＃２．３．データ品質チェック

先に進む前に、データ品質を体系的に検証してみましょう。

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

|コラム | % がありません |アクション |
|----------|----------|----------|
|キャビン | 77.1% |デックレターをドロップまたは抽出する |
|年齢 | 19.9% | Impute は Pclass | に従って中央値と等しくなります
|乗り出しました | 0.2% |モード | を使用して代入します。
|左 | 0% | OK |

> **実用的なヒント:** ドメインの知識があり、適切に代入する方法を知っている場合を除いて、列が欠落している> 50% は通常、削除する必要があります。 5 ～ 20% が欠落している → 補填。ない < 5% → 行を削除または代入します。

## 3. Feature Engineering

これは、優れたモデルと優れたモデルの**違いを生み出す**ステップです。特徴エンジニアリングはパフォーマンスの 70 ～ 80% を決定します。

＃＃＃３．１．欠損値の処理

```python
def handle_missing(df: pd.DataFrame) -> pd.DataFrame:
    """タイタニック号データセットの欠損値の処理。"""
    df = df.copy()

    # 年齢: Pclass (ドメイン知識) に基づく推定値は中央値に等しい
    df["年齢"] = df.groupby("Pclass")["年齢"].transform(
        ラムダ x: x.fillna(x.median())
    ）

    # 開始: モードを使用して入力
    df["Embarked"] = df["Embarked"].fillna(df["Embarked"].mode()[0])

    # キャビン: デッキレターを抽出し、「不明」と記入します。
    df["デッキ"] = df["キャビン"].str[0].fillna("不明")

    # ドロップカラムは必要ありません
    df = df.drop(columns=["客室", "航空券", "名前", "乗客 ID"])

    DFを返す

df_clean = ハンドル欠落(df)
print(f"クリーニング後に欠落: {df_clean.isnull().sum().sum()}") # 0
```

### 3.2. Encoding Categorical Variables

ML モデルは数値のみを理解します。カテゴリ特徴量をエンコードする必要があります。

```テキスト。テキスト
┌─────────────────────────────┐
│ エンコーディング戦略の決定ツリー │
━━━━━━━━━━━━━━━━━━━━━━━━┤
│ │
│ カテゴリ別特徴 │
│ │ │
│ §── 2 カテゴリー ──────▶ バイナリエンコーディング (0/1) │
│ │ (性別: 男/女) │
│ │ │
│ §── カテゴリが少ない ────▶ ワンホットエンコーディング │
│ │ (乗船: S/C/Q) (ダミーカラム作成) │
│ │ │
│ §── 序数 ─────▶ ラベルエンコーディング (0,1,2,...) │
│ │ (サイズ: S < M < L)    (giữ thứ tự)               │
│       │                                                    │
│       └── Many categories ───▶ Target Encoding             │
│           (City: 100+ values)  (mean target per category)  │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

```python
def encode_features(df: pd.DataFrame) -> pd.DataFrame:
    """カテゴリ特徴をエンコードします。"""
    df = df.copy()

    # 性別のバイナリエンコード
    df["性別"] = df["性別"].map({"男性": 0, "女性": 1})

    # Embarked と Deck のワンホット エンコーディング
    df = pd.get_dummies(df, columns=["Embarked", "Deck"],drop_first=True)

    DFを返す

df_encoded = encode_features(df_clean)
print(f"エンコード後の特徴: {df_encoded.shape[1]}")
```

### 3.3. Feature Scaling

多くのアルゴリズム (ロジスティック回帰、SVM、KNN) は特徴のスケールに影響されます。

```パイソン
sklearn.preprocessing からインポート StandardScaler、MinMaxScaler

# スケーリング方法を比較する
スケーラー = {
    "StandardScaler": StandardScaler()、# 平均=0、std=1
    "MinMaxScaler": MinMaxScaler()、# 範囲 [0, 1]
}
```

|スケーラー |レシピ |いつ使用するか |
|--------|-----------|-------------|
| StandardScaler | (x - mean) / std | Default choice, khi data ~normal distribution |
|最小最大スケーラー | (x - 最小) / (最大 - 最小) |境界付き範囲 [0,1] が必要な場合、ニューラル ネットワーク |
|ロバストスケーラー | (x - 中央値) / IQR |外れ値が多い場合 |
|スケーリングなし | — |ツリーベースのモデル (ランダム フォレスト、XGBoost) |

> **実用的なヒント:** ツリーベースのモデル (ランダム フォレスト、XGBoost、LightGBM) は、絶対値ではなく順序に基づいて分割されるため、**スケーリングの必要はありません**。

### 3.4. Feature Creation & Selection

```パイソン
def create_features(df: pd.DataFrame) -> pd.DataFrame:
    """ドメインの知識から新しい機能を作成します。"""
    df = df.copy()

    # ファミリーサイズ
    df["ファミリーサイズ"] = df["SibSp"] + df["パーチ"] + 1

    # 一人です
    df["IsAlone"] = (df["FamilySize"] == 1).astype(int)

    # 年齢ビン
    df["年齢ビン"] = pd.cut(
        df["年齢"],
        ビン=[0, 12, 18, 35, 60, 100],
        ラベル=[0、1、2、3、4]
    ).astype(int)

    # 1人あたりの運賃
    df["1 人あたりの料金"] = df["料金"] / df["家族サイズ"]

    DFを返す

df_featured = create_features(df_encoded)
```

### 3.5. Pandas Pipe Pattern — Clean Pipeline

各関数を個別に呼び出すのではなく、**パイプ パターン**を使用して明確なパイプラインを作成します。

```パイソン
# PRO の方法 — .pipe() ですべてをチェーンする
df_final = (
    pd.read_csv(url)
    .pipe(ハンドルがありません)
    .pipe(encode_features)
    .pipe(create_features)
）

print(f"最終データセット: {df_final.shape}")
# 最終的なデータセット: (891, 22)
```

パイプ パターンにより、コードが **読みやすく、テストしやすく、ステップの追加/削除が簡単になります**。各関数は DataFrame を受け取り、DataFrame を返します (純粋な変換)。

## 4. Model Training

### 4.1. Train/Validation/Test Split

**黄金律:** モデルの調整にはテスト セットを決して使用しないでください。データを 3 つの部分に分割します。

```テキスト。テキスト
┌─────────────────────┐
│ データ分割戦略 │
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┤
│ │
│ フルデータセット (891 サンプル) │
│ ┌───────────────────────┐ │
│ │ トレーニング (60%) │ヴァル (20%) │ テスト │ │
│ │ 534 サンプル │178 │(20%) │ │
│ │ │ │179 │ │
│ │ モデルのトレーニングに使用 │Tune HP │Final │ │
│ │ │ │評価 │ │
│ ━━━━━━━━━━━━━━━━━━━┘ │
│ │
│ または Train+Val で相互検証を使用する │
│ その後、テストで最終的に評価します │
━━━━━━━━━━━━━━━━━━━━┘
```

```パイソン
# X、yを用意する
ターゲット = "生き残った"
X = df_final.drop(columns=[ターゲット])
y = df_final[ターゲット]

# スプリット: 80% train+val、20% test (ホールドアウト)
X_train_val、X_test、y_train_val、y_test = train_test_split(
    X、y、test_size=0.2、random_state=42、stratify=y
）

# 分割トレイン + ヴァル: 75% トレイン、25% ヴァル (= 全体で 60/20)
X_train、X_val、y_train、y_val = train_test_split(
    X_train_val、y_train_val、test_size=0.25、random_state=42、stratify=y_train_val
）

print(f"トレーニング: {X_train.shape[0]}、Val: {X_val.shape[0]}、テスト: {X_test.shape[0]}")
# トレイン: 534、ヴァル: 178、テスト: 179
```

### 4.2. scikit-learn Consistent API

scikit-learn のすべてのモデルは同じ API に従います。

```パイソン
sklearn.linear_model から LogisticRegression をインポート
sklearn.ensemble からインポート RandomForestClassifier、GradientBoostingClassifier
sklearn.svm から SVC をインポート

# 非ツリー モデルのスケール機能
スケーラー = StandardScaler()
X_train_scaled =scaler.fit_transform(X_train)
X_val_scaled =scaler.transform(X_val) # 変換のみで、適合はしません!

# 同じ API を使用して複数のモデルをトレーニングする
モデル = {
    「ロジスティック回帰」: LogisticRegression(max_iter=1000、random_state=42)、
    「ランダム フォレスト」: RandomForestClassifier(n_estimators=100、random_state=42)、
    「勾配ブースティング」: GradientBoostingClassifier(n_estimators=100、random_state=42)、
}

結果 = {}
名前、models.items() のモデル:
    # ツリー モデルは生データを使用し、線形モデルはスケーリングされたデータを使用します
    名前に「物流」がある場合:
        model.fit(X_train_scaled, y_train)
        y_pred = model.predict(X_val_scaled)
    それ以外の場合:
        model.fit(X_train, y_train)
        y_pred = モデル.predict(X_val)

    acc = 精度スコア(y_val, y_pred)
    f1 = f1_score(y_val, y_pred)
    結果[名前] = {"精度": acc, "f1": f1}
    print(f"{name:25s} | 精度: {acc:.4f} | F1: {f1:.4f}")
```

> **重要な注意事項:** `scaler.fit_transform(X_train)` すでに `scaler.transform(X_val)`。不可能 `fit_transform` val/test では、**データ漏洩**が発生し、誤って楽観的な結果が得られます。

### 4.3. Cross-Validation

1 つの分割 (運が良いか悪いかは関係ありません) に依存する代わりに、**k 分割相互検証** を使用します。

```パイソン
sklearn.model_selection からインポート StratifiedKFold、cross_val_score

# 5 重層化相互検証
cv = StratifiedKFold(n_splits=5、shuffle=True、random_state=42)

名前、models.items() のモデル:
    スコア =cross_val_score(
        モデル、X_train_val、y_train_val、
        cv=cv、スコアリング=「f1」
    ）
    print(f"{名前:25s} | F1: {scores.mean():.4f} ± {scores.std():.4f}")

# ロジスティック回帰 | F1: 0.7321 ± 0.0412
#ランダムフォレスト | F1: 0.7586 ± 0.0389
# 勾配ブースティング | F1: 0.7654 ± 0.0356
```

```テキスト。テキスト
┌─────────────────────────┐
│ 5 分割相互検証 │
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┤
│ │
│ 折り目 1: [VAL] [電車] [電車] [電車] [電車] │
│ 折り目2：[トレイン] [ヴァル] [トレイン] [トレイン] [トレイン] │
│ 3 つ折り: [電車] [電車] [ヴァル] [電車] [電車] │
│ 4つ折り: [電車] [電車] [電車] [ヴァル] [電車] │
│ 5 つ折り: [電車] [電車] [電車] [電車] [ヴァル] │
│ │
│ 最終スコア = 平均 (5 スコア) ± 標準 (5 スコア) │
│ → シングルスプリットよりも信頼性が高い │
━━━━━━━━━━━━━━━━━━━━━━━┘
```

## 5. Model Evaluation

### 5.1. Classification Metrics Deep Dive

精度は必ずしも適切な指標であるとは限りません。データの不均衡については、以下のことをより深く理解する必要があります。

```テキスト。テキスト
┌─────────────────────────────┐
│ 混同マトリックス │
━━━━━━━━━━━━━━━━━━━━━━━━━┤
│ 予想 │
│ ポジティブ ネガティブ │
│ 実際のポジティブ │ TP │ FN │ │
│ アクチュアルネガティブ │ FP │ TN │ │
│ │
│ 精度 = TP / (TP + FP) → "モデルが正である場合、 │
│何％正解ですか？          │
│ │
│ 想起 = TP / (TP + FN) → 「すべての真陽性のうち、│
│ モデルは何個見つかりましたか?  │
│ │
│ F1 スコア = 2 × (P × R) / (P + R) → 調和平均 │
│ │
│ AUC-ROC = ROC 曲線下面積 → 識別能力 │
│ すべてのしきい値での正と負の比較 │
━━━━━━━━━━━━━━━━━━━━━━━━━┘
```

|メトリクス |いつ優先するか |例 |
|--------|----------------|-------|
| **精度** |データバランス、FP のコスト ≈ FN |犬・猫の写真の分類 |
| **精度** |高価な FP (誤報) |スパム検出（重要なメールがスパムメールとして送信される） |
| **思い出してください** |高価なFN（略） |がんの発見（危険な患者の行方不明） |
| **F1 スコア** |精度と再現率のバランスをとる必要がある |不均衡なデータのデフォルトの選択 |
| **AUC-ROC** |モデル全体を比較 |モデル選択、しきい値に依存しない |

### 5.2. Evaluation Code

```パイソン
sklearn.metrics インポートから (
    分類レポート、混乱マトリックス、roc_auc_score、
    ロックカーブディスプレイ
）
matplotlib.pyplotをpltとしてインポート

def Evaluate_model(model, X_test, y_test, model_name="モデル"):
    """包括的なモデルのレビュー。"""
    y_pred = モデル.予測(X_test)
    y_prob = model.predict_proba(X_test)[:, 1]

    # 分類レポート
    print(f"\n{'='*50}")
    print(f" {model_name} — 評価レポート")
    print(f"{'='*50}")
    print(classification_report(y_test, y_pred, target_names=["未生存", "生存"]))

    #AUC-ROC
    auc = roc_auc_score(y_test, y_prob)
    print(f"AUC-ROC: {auc:.4f}")

    # 混同行列
    cm = 混乱行列(y_test, y_pred)
    print(f"\n混同行列:")
    print(f" TN={cm[0][0]} FP={cm[0][1]}")
    print(f" FN={cm[1][0]} TP={cm[1][1]}")

    return {"精度": 精度_スコア(y_test, y_pred),
            "f1": f1_score(y_test, y_pred),
            "オーク": オーク}

# 最適なモデルを評価する
best_model = モデル["勾配ブースティング"]
best_model.fit(X_train_val, y_train_val)
metrics = Evaluate_model(best_model, X_test, y_test, "勾配ブースティング")
```

## 6. Hyperparameter Tuning

デフォルトのモデルが最適なモデルであることはほとんどありません。 **ハイパーパラメータ調整** により、最適な構成が見つかります。

### 6.1. GridSearch vs RandomSearch vs Optuna

```テキスト。テキスト
┌───────────────────────────┐
│ ハイパーパラメータ調整戦略 │
---------------------------------------------------------------------- --------------------------------------------------------┤
│ │
│ グリッドサーチ ランダムサーチ Optuna (ベイジアン) │
│ ┌─┬─┬─┬─┐ ┌─┬─┬─┬─┐ ┌─┬─┬─┬─┐ │
│ │x│x│x│x│ │ │x│ │ │ │ │ │ │
│ §─┼─┼─┼─┤ │
│ │x│x│x│x│ │ │ │ │x│ │ │x│ │ │
│ §─┼─┼─┼─┤ │
│ │x│x│x│x│ │x│ │ │ │ │x│x│ │ ◀ 集中 │
│ §─┼─┼─┼─┤ │
│ │x│x│x│x│ │ │ │x│ │ │ │x│x│x│ ◀ ここ │
│ ━─┴─┴─┴─┘ ─┴─┴─┴─┘ ─┴─┴─┴─┘ │
│ すべてのコンボを試す ランダムサンプル スマート: から学ぶ │
│ 16 回のトライアル 4 回のトライアル 前回のトライアル │
│ │
│ 長所: 徹底的な長所: 高速、長所: 最も効率的 │
│ 短所: 遅い、驚くほど良い O(n^k) 短所: セットアップが複雑│
━━━━━━━━━━━━━━━━━━━━━━━━━━━┘
```

|方法 |トライアルが必要 |最適な時期 |図書館 |
|--------|-----------|-------------|---------|
|グリッドサーチCV |すべてのコンボ |ハイパーパラメータが少なく (2 ～ 3)、検索スペースが小さい | scikit-learn |
|ランダム化検索CV |固定予算 |検索スペースが広いので高速にしたい | scikit-learn |
| **オプチュナ** |スマートサンプリング |広い検索スペース、最適な検索スペースが必要 |オプチュナ |

＃＃＃６．２． scikit-learn によるグリッドサーチ

```パイソン
sklearn.model_selection から GridSearchCV をインポート

param_grid = {
    "n_estimators": [100, 200, 300],
    "最大深度": [3, 5, 7],
    "学習率": [0.01, 0.1, 0.2],
}

グリッド検索 = GridSearchCV(
    GradientBoostingClassifier(random_state=42)、
    param_grid=パラム_グリッド、
    CV=5、
    スコアリング = "f1"、
    n_jobs=-1, # すべての CPU コアを使用する
    冗長=1、
）

Grid_search.fit(X_train_val, y_train_val)

print(f"最適なパラメータ: {grid_search.best_params_}")
print(f"ベスト F1: {grid_search.best_score_:.4f}")
# 最適なパラメータ: {'learning_rate': 0.1, 'max_ Depth': 5, 'n_estimators': 200}
```

### 6.3. Optuna — Bayesian Optimization

**Optuna** はより賢く、以前のトライアルから学習して次のハイパーパラメータを選択します。

```パイソン
オプチュナをインポートする

デフォルトの目的(トライアル):
    """勾配ブースティング用の Optuna 目的関数。"""
    パラメータ = {
        "n_estimators": Trial.suggest_int("n_estimators", 50, 500),
        "最大深度": Trial.suggest_int("最大深度", 2, 10),
        "学習率": Trial.suggest_float("学習率", 0.001, 0.3, log=True),
        "サブサンプル": Trial.suggest_float("サブサンプル", 0.6, 1.0),
        "min_samples_split": Trial.suggest_int("min_samples_split", 2, 20),
    }

    モデル = GradientBoostingClassifier(**params、random_state=42)
    スコア =cross_val_score(モデル、X_train_val、y_train_val、cv=5、スコアリング = "f1")
    スコアを返す.mean()

# 最適化の実行 — 243 回ではなく 50 回の試行 (GridSearch 3^5)
Study = optuna.create_study(direction="最大化")
Study.optimize(目的、n_trials=50、show_progress_bar=True)

print(f"ベスト F1: {study.best_value:.4f}")
print(f"最適なパラメータ: {study.best_params}")
```

> **実践的なヒント:** Optuna では、試行回数が少なくても GridSearch よりも良い結果が得られることがよくあります。運用環境では、これはハイパーパラメータ調整用の最も一般的なツールです。

## 7. MLflow を使用した実験の追跡

50 回の実験を実行すると、3 番目の実験で使用されたパラメーターを忘れてしまいます。 **MLflow** はこの問題を解決します。

### 7.1. MLflow Concepts

```文章。テキスト
┌─────────────────────────────┐
│ MLflow アーキテクチャ │
━━━━━━━━━━━━━━━━━━━━━━━━┤
│ │
│ 実験：「タイタニック号の生存予測」 │
│ │ │
│ §── 実行 1: ロジスティック回帰 │
│ │ §── パラメータ: C=1.0、max_iter=1000 │
│ │ §── メトリクス: 精度=0.79、f1=0.73、auc=0.84 │
│ │ └─ アーティファクト:model.pkl、construction_matrix.png │
│ │ │
│ §── ラン２：ランダムフォレスト │
│ │ §── パラメータ: n_estimators=100, max_ Depth=7 │
│ │ §── メトリクス: 精度=0.82、f1=0.76、auc=0.87 │
│ │ └─ アーティファクト:model.pkl、feature_importance.png │
│ │ │
│ └── 実行 3: XGBoost + Optuna チューニング │
│ §── パラメータ: (Optuna からの最良のパラメータ) │
│ §── メトリクス: 精度=0.85、f1=0.80、auc=0.90 │
│ └── アーティファクト:model.pkl、optuna_study.pkl │
│ │
━━━━━━━━━━━━━━━━━━━━━━━━┘
```

### 7.2. MLflow Tracking Code

```パイソン
mlflowをインポートする
mlflow.sklearnをインポートする

# 実験名を設定する
mlflow.set_experiment("タイタニック-サバイバル")

def train_and_log(モデル, モデル名, X_train, y_train, X_test, y_test):
    """モデルをトレーニングし、すべてを MLflow に記録します。"""
    mlflow.start_run(run_name=model_name) を使用:
        # 電車
        model.fit(X_train, y_train)
        y_pred = モデル.予測(X_test)
        y_prob = model.predict_proba(X_test)[:, 1]

        #メトリクス
        メトリクス = {
            "精度": 精度_スコア(y_test, y_pred),
            "精度": precision_score(y_test, y_pred),
            "リコール": リコール_スコア(y_test, y_pred),
            "f1": f1_score(y_test, y_pred),
            "auc_roc": roc_auc_score(y_test, y_prob),
        }

        # ログパラメータ
        mlflow.log_params(model.get_params())

        # メトリクスをログに記録する
        mlflow.log_metrics(メトリクス)

        # モデルアーティファクトをログに記録します
        mlflow.sklearn.log_model(モデル, "モデル")

        # データセット情報をログに記録します
        mlflow.log_param("train_size", X_train.shape[0])
        mlflow.log_param("test_size", X_test.shape[0])
        mlflow.log_param("n_features", X_train.shape[1])

        print(f"{モデル名}: F1={metrics['f1']:.4f}, AUC={metrics['auc_roc']:.4f}")

        メトリクスを返す

# すべてのモデルをログに記録します
名前、models.items() のモデル:
    train_and_log(モデル, 名前, X_train_val, y_train_val, X_test, y_test)
```

### 7.3. MLflow UI

```バッシュ
# MLflow UI を開始 — すべての実験を表示
mlflow ui --ポート 5000

# ブラウザを開きます: http://localhost:5000
# → 実行の比較、チャートの表示、モデルのダウンロード
```

MLflow UI を使用すると、実行を並べて比較し、メトリクスの傾向を表示し、モデル アーティファクトをダウンロードし、デプロイメントに最適なモデルを登録することができます。

## 8. XGBoost Practical Example

**XGBoost** (eXtreme Gradient Boosting) は、表形式データ用の最も強力なアルゴリズムです。表形式データに関する Kaggle コンテストのほとんどは、XGBoost または LightGBM が優勝しています。

### 8.1。生データから調整されたモデルまで

```パイソン
xgboost を xgb としてインポート

# === 完全なパイプライン: 生データ → 調整された XGBoost ===

# 1. データを準備する（先ほどのパイプラインを使用）
df_final = (
    pd.read_csv(url)
    .pipe(ハンドルがありません)
    .pipe(encode_features)
    .pipe(create_features)
）

X = df_final.drop(columns=["生存"])
y = df_final["生き残った"]
X_train、X_test、y_train、y_test = train_test_split(
    X、y、test_size=0.2、random_state=42、stratify=y
）

#2. Optuna で調整する
def xgb_objective(トライアル):
    パラメータ = {
        "n_estimators": Trial.suggest_int("n_estimators", 100, 1000),
        "最大深度": Trial.suggest_int("最大深度", 3, 10),
        "学習率": Trial.suggest_float("学習率", 0.001, 0.3, log=True),
        "サブサンプル": Trial.suggest_float("サブサンプル", 0.6, 1.0),
        "colsample_bytree": Trial.suggest_float("colsample_bytree", 0.6, 1.0),
        "reg_alpha": Trial.suggest_float("reg_alpha", 1e-8, 10.0, log=True),
        "reg_lambda": Trial.suggest_float("reg_lambda", 1e-8, 10.0, log=True),
    }
    モデル = xgb.XGBClassifier(
        **パラメータ、
        ランダム状態=42、
        eval_metric="対損失",
    ）
    スコア =cross_val_score(モデル、X_train、y_train、cv=5、スコアリング = "f1")
    スコアを返す.mean()

Study = optuna.create_study(direction="最大化")
Study.optimize(xgb_objective, n_trials=50)

#3. 最適なパラメータを使用して最終モデルをトレーニングする
best_xgb = xgb.XGBClassifier(
    **study.best_params、
    ランダム状態=42、
    eval_metric="対損失",
）
best_xgb.fit(X_train, y_train)

#4. テストセットで評価する
metrics =estimate_model(best_xgb, X_test, y_test, "XGBoost (調整済み)")
```

### 8.2. Feature Importance

```パイソン
# XGBoost 組み込み機能の重要性
重要度 = pd.Series(
    best_xgb.feature_importances_、
    インデックス=X.列
).sort_values(ascending=False)

print("トップ 10 の機能:")
print(importance.head(10))
```

### 8.3。 MLflow にログインします

```パイソン
mlflow.start_run(run_name="XGBoost-Optuna-Tuned") を使用:
    # 最適なパラメータをログに記録します
    mlflow.log_params(study.best_params)

    # メトリクスをログに記録する
    mlflow.log_metrics(メトリクス)

    # ログモデル
    mlflow.xgboost.log_model(best_xgb, "モデル")

    # Optuna 研究情報をログに記録します
    mlflow.log_metric("optuna_n_trials", len(study.trials))
    mlflow.log_metric("optuna_best_value",study.best_value)
```

### 8.4。結果比較表

| Model | Accuracy | F1 | AUC-ROC | Training Time |
|-------|---------|-----|---------|--------------|
| Logistic Regression | 0.79 | 0.73 | 0.84 | < 1s |
| Random Forest | 0.82 | 0.76 | 0.87 | ~2s |
| Gradient Boosting | 0.83 | 0.78 | 0.88 | ~5s |
| **XGBoost (Tuned)** | **0.85** | **0.80** | **0.90** | ~10s (+ tuning) |

> **実用的なヒント:** 表形式のデータの場合、モデルのテスト順序は次のとおりです: **ロジスティック回帰 → ランダム フォレスト → XGBoost/LightGBM**。 XGBoost が 0.90 以上の AUC を与えた場合、深層学習により表形式データが大幅に改善されることはほとんどありません。

＃＃ まとめ

**A から Z まで**の ML パイプライン全体が完成しました。

- ✅ **5-stage pipeline**: Data → Features → Training → Evaluation → Tracking
- ✅ **EDA & Data Quality**: Pandas profiling, systematic quality checks, missing value strategies
- ✅ **Feature Engineering**: Encoding (binary, one-hot, label), scaling, feature creation, Pandas pipe pattern
- ✅ **Model Training**: scikit-learn consistent API, train/val/test split, cross-validation
- ✅ **評価指標**: 精度、精度、再現率、F1、AUC-ROC — どの指標をいつ使用するか
- ✅ **Hyperparameter Tuning**: GridSearch cho simple cases, Optuna cho production
- ✅ **MLflow トラッキング**: パラメータ、メトリクス、アーティファクトをログに記録します - 実験を忘れないでください
- ✅ **XGBoost**: 生データから調整されたモデルまで、表形式データ用の最も強力なアルゴリズム

このパイプラインは **基本的に不変**です。ディープ ラーニング、LLM、AI エージェントのいずれを使用する場合でも、データの処理、評価、実験の追跡が必要です。

＃＃ エクササイズ

### 演習 1: エンドツーエンドのパイプライン (基本)
UCI の **心臓病データセット** を使用します (`ハート.csv`):
1. EDA およびデータ品質レポート
2. 特徴量エンジニアリング (少なくとも 2 つの新機能)
3. 3 つのモデルをトレーニングし、相互検証を使用して比較します
4. すべてを MLflow にログインします

### 演習 2: Optuna チューニング (中)
データセットの場合 演習 1:
1. Optuna で XGBoost を調整する (100 回のトライアル)
2. Visualize optimization history (`optuna.視覚化`)
3. Optuna の最良の結果と GridSearch を比較する

### 演習 3: 本番パイプライン (上級)
ファイルを作成する `パイプライン.py` 完了：
1. 使用する `sklearn.pipeline.パイプライン` 前処理 + モデルをチェーンする
2. カスタム トランスフォーマーを実装します (継承 `BaseEstimator`, `トランスミキシン`)
3. パイプラインを保存します。 `joblib` を実行してリロードして予測します
4. パイプラインの各ステップの単体テストを作成する

---

**次のレッスン:** **レッスン 3 — PyTorch を使用した深層学習の基礎** では、従来の ML からニューラル ネットワーク (テンソル演算、自動グレーディング、トレーニング ループ、PyTorch を使用したゼロからのモデルの構築) に移行します。
