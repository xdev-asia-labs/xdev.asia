---
id: 019d8b39-bb05-7005-c005-ee0500000005
title: 'レッスン 5: ミニプロジェクト 1 — 住宅価格の予測'
slug: bai-5-mini-project-1-du-doan-gia-nha
description: '最初の完全な練習セッション: 単純な EDA、トレーニング/テスト分割、ベースライン モデル、評価および学んだ教訓。'
duration_minutes: 150
is_free: true
video_url: null
sort_order: 4
section_title: 'パート 0: 初心者のための入門 (第 0 週)'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: '機械学習: 基本から高度まで'
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2294" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2294)"/>

  <!-- Decorations -->
  <g>
    <circle cx="677" cy="81" r="30" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="754" cy="98" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="831" cy="115" r="22" fill="#a78bfa" opacity="0.08"/>
    <circle cx="908" cy="132" r="33" fill="#a78bfa" opacity="0.09"/>
    <circle cx="985" cy="149" r="14" fill="#a78bfa" opacity="0.1"/>
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
    <line x1="600" y1="71" x2="1100" y2="151" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="101" x2="1050" y2="171" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="993.5166604983954,158 993.5166604983954,184 971,197 948.4833395016046,184 948.4833395016046,158 971,145" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🧠 AI と ML — レッスン 4</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 5: ミニプロジェクト 1 — 住宅価格の予測</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">機械学習: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 0: 初心者のための入門 (第 0 週)</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

シリーズ初のミニ企画です。目標は、最高のレベルに最適化することではなく、データを理解し、機能を選択し、トレーニング/テストを分割し、ベースラインを構築し、モデルをトレーニングし、評価して結論を​​引き出すというプロセス全体を最初から最後まで実行することです。

## 問題のコンテキスト

ある都市には次の情報を含む住宅データがあります。

- エリア
- 寝室の数
- トイレ番号
- 地区
- 家の築年数
- 販売価格

目標は、新しい家の住宅価格を予測することです。

## ミニプロジェクトの目標

- 基本的な EDA を実行してデータを理解する
- 最初のベースラインを構築する
- 少なくとも 1 つの回帰モデルをトレーニングする
- 指標を使用して明確な結論を与える

## 1. ビジネス上の質問

不動産業者または物件掲載システムは、新築住宅の公正な販売価格を見積もろうとしています。

対応する ML の質問:

> 入力された住宅情報から、推定販売価格はいくらになるでしょうか？

## 2. 最低限必要な EDA

```python
import pandas as pd

df = pd.read_csv('data/raw/houses.csv')

print(df.head())
print(df.shape)
print(df.info())
print(df.isnull().sum())
print(df.describe())
```

少なくとも次の質問に答える必要があります。

1. データは何行ありますか?
2. データが欠落している列はありますか?
3. 対象となる列は何ですか?
4. モデルに含めても意味のない列はありますか?

## 3. 最初のフィーチャを選択します

最初のラウンドでは、あまり多くの列を選択しないでください。明らかな特徴をいくつか挙げます:

```python
features = ['dien_tich', 'so_phong', 'so_toilet', 'tuoi_nha']
X = df[features]
y = df['gia']
```

最初のラウンドでいくつかの機能を選択する理由:

- デバッグが簡単
- 各変数の影響を理解しやすい
- 複雑なデータ処理におけるエラーを削減します

## 4. ベースライン

```python
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

baseline_pred = [y_train.mean()] * len(y_test)
baseline_mae = mean_absolute_error(y_test, baseline_pred)

print('Baseline MAE:', baseline_mae)
```

##5. 初代モデル

```python
from sklearn.linear_model import LinearRegression

model = LinearRegression()
model.fit(X_train, y_train)

pred = model.predict(X_test)
model_mae = mean_absolute_error(y_test, pred)

print('Model MAE:', model_mae)
```

## 6. 結果を読む

たとえば:

- ベースラインMAE: 0.85億
- モデルMAE: 04.2億

暫定的な結論:

- モデルはベースラインより明らかに優れています
- 初期ワークフローは順調に進んでいます
- 特徴エンジニアリングまたはより強力なモデルを使用してさらに改善できる

## 7. さらに一歩拡張します

次のようなカテゴリ変数を追加してみてください `quan`:

```python
X = pd.get_dummies(df[['dien_tich', 'so_phong', 'so_toilet', 'tuoi_nha', 'quan']], drop_first=True)
y = df['gia']
```

次に、再度トレーニングしてメトリクスを比較します。これは、位置情報の追加が実際にモデルに役立つかどうかをテストする簡単な方法です。

## 8. ミニプロジェクト後の短いレポートのサンプル

次のように要約を書く必要があります。

> 私は住宅価格を予測するために 4 つの基本的な数値特徴を使用します。平均価格によるベースライン予測では MAE = X が得られ、線形回帰では MAE = Y が得られます。これは、モデルが機能と販売価格の関係を学習していることを示しています。ただし、モデルは現在、詳細な位置機能を使用しておらず、外れ値も処理していません。

ML はコーディングだけではなく、結果を伝えることも重要であるため、これは非常に重要な習慣です。

## 追加のチャレンジ

1. 線形回帰とランダム フォレスト回帰を比較します。
2. 機能を削除して、メトリックがどのように変化するかを確認してください。
3. フィーチャの作成 `gia_m2` 間違って使用した場合に漏れがないか確認してください。

## よくある間違い

- 意味を理解せずにすべての列を使用する。
- 評価する前にトレーニングとテストを分離するのを忘れました。
- 指標がベースラインよりも優れていることを確認し、データを確認せずに早すぎる結論を導き出す。

## 完了基準

- [ ] ミニプロジェクトの最初から最後までの実行を完了しました
- [ ] ベースラインと少なくとも 1 つの機械学習モデルがあります
- [ ] 結果について短くてわかりやすい結論を書くことができる
