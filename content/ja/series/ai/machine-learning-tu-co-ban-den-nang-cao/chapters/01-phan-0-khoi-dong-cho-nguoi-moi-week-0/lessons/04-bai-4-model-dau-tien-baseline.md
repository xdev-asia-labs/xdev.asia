---
id: 019d8b39-bb04-7004-c004-ee0400000004
title: 'レッスン 4: 30 分で最初のモデル + ベースライン'
slug: bai-4-model-dau-tien-baseline
description: scikit-learn を使用して最初のモデルを作成し、ベースラインとは何か、最適化する前に常にベースラインが必要な理由を理解します。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 3
section_title: 'パート 0: 初心者のための入門 (第 0 週)'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: '機械学習: 基本から高度まで'
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7184" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7184)"/>

  <!-- Decorations -->
  <g>
    <circle cx="837" cy="221" r="30" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="1074" cy="198" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="811" cy="175" r="22" fill="#a78bfa" opacity="0.08"/>
    <circle cx="1048" cy="152" r="33" fill="#a78bfa" opacity="0.09"/>
    <circle cx="785" cy="129" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="51" x2="1100" y2="131" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="81" x2="1050" y2="151" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1023.5166604983954,188 1023.5166604983954,214 1001,227 978.4833395016046,214 978.4833395016046,188 1001,175" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🧠 AI と ML — レッスン 3</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 4: 30 分で最初のモデル +</tspan>
      <tspan x="60" dy="42">ベースライン。ベースライン</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">機械学習: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 0: 初心者のための入門 (第 0 週)</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

これは、「理論は知っているが、モデルをトレーニングしたことがない」という最大の心理的障壁を克服するのに役立つため、非常に重要な記事です。この記事の目的は、最初のモデルを手動で適合させ、結果を測定し、すべての本格的な ML プロジェクトで **ベースライン** が常に必須のステップである理由を理解することです。

## レッスンの目標

- 列車は最初に scikit-learn を使用してモデル化されます
- トレーニングとテストの分割がどのように機能するかを理解する
- ベースラインを作成し、機械学習モデルと比較する方法を理解する

## 1. サンプル問題: 住宅価格の予測

次の列で構成される住宅データがあると仮定します。

- エリア
- 部屋番号
- 家の築年数
- 地区
- 販売価格

この問題では:

- `X` 機能セットです
- `y` 家の価格です

出力は実数であるため、これは **回帰** 問題です。

## 2. ベースラインとは何ですか?

ベースラインは、ランドマークとして使用する最も簡単なオプションです。

住宅価格の予測例:

- ベースライン 1: トレーニング セットの平均価格を常に推測します
- ベースライン 2: 常に中央価格を推測します

ML モデルがベースラインより優れていない場合、複雑なモデルを使用する理由はありません。

## 3. トレーニング/テストの分割

データを 2 つの部分に分割します。

- `train`: モデル学習へ
- `test`: 目に見えないデータを評価する

```python
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)
```

の意味 `random_state=42` あなたと他の誰かがもう一度実行して同じ結果が得られるようにするためです。

## 4. 線形回帰を使用した最初のモデル

```python
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error

df = pd.read_csv('data/raw/houses.csv')

features = ['dien_tich', 'so_phong', 'tuoi_nha']
X = df[features]
y = df['gia']

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

model = LinearRegression()
model.fit(X_train, y_train)

pred = model.predict(X_test)
mae = mean_absolute_error(y_test, pred)
print('MAE:', mae)
```

理解しておくべき最も重要なこと:

- `fit()` モデルがトレーニング データから学習するときです
- `predict()` モデルが新しいデータを予測するとき
- メトリクスはモデルがどの程度優れているかを示します

## 5. 比較のためにベースラインを測定する

```python
baseline_pred = [y_train.mean()] * len(y_test)
baseline_mae = mean_absolute_error(y_test, baseline_pred)

print('Baseline MAE:', baseline_mae)
print('Model MAE:', mae)
```

もし `Model MAE < Baseline MAE`、モデルが作成した値。

＃＃６．なぜMAEを選ぶのですか？

回帰の場合、一般的な指標は次のとおりです。

- 前
- MSE
- RMSE
- $R^2$

MAE は、問題の正しい単位での平均誤差を表すため、初心者にとっては最も理解しやすいメトリックです。

たとえば:

- MAE = 0.2 億 5,000 万は、モデルの平均偏差が約 2 億 5,000 万であることを意味します。

## 7. 最初のモデルは強い必要はありません

多くの人は線形回帰が単純であるため、それをスキップして XGBoost に切り替えたいと考えています。それは間違った学習リズムです。

シンプルに始める理由:

- デバッグが簡単
- 説明しやすい
- データエラーを検出しやすい
- 以下のモデルの思考ベースラインを用意する

## 8. チェックリストは結果を適切に読み取ります

トレーニング後は、メトリクスの数値だけを見て結論を下さないでください。尋ねてください:

1. モデルはベースラインより優れていますか?
2. メトリクスは問題に対して正しいですか?
3. テスト データは実際のデータを表していますか?
4. カラムに漏れはありませんか?

## 9. 非常に短い分類のバリエーション

問題が分類である場合、コード構造はほぼ同一であり、モデルとメトリクスのみが変更されます。

```python
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

clf = LogisticRegression(max_iter=300)
clf.fit(X_train, y_train)
pred = clf.predict(X_test)

print('Accuracy:', accuracy_score(y_test, pred))
```

これは、同じワークフローをさまざまな問題にどのように適用できるかを理解するのに役立ちます。

## 練習問題を練習する

1. 回帰問題のベースラインを作成します。
2. 線形回帰モデルをトレーニングします。
3. ベースラインとモデルの間でメトリクスを比較します。
4. 結論の文を 3 つ書きます。モデルは維持する価値がありますか、そしてその理由を述べます。

## よくある間違い

- 列車セット自体のモデルを評価します。
- ベースラインと比較しないでください。
- メトリクスの実際の意味を理解せずに使用する。

## 完了基準

- [ ] 最初のモデルをセルフトレーニングします
- [ ] 適切なベースラインを作成する
- [ ] モデルがベースラインよりも優れている、または劣っている理由を説明します
