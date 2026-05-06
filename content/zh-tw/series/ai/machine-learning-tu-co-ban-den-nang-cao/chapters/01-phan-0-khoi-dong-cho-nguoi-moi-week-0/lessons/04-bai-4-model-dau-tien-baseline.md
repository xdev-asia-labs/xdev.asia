---
id: 019d8b39-bb04-7004-c004-ee0400000004
title: 第 4 課：30 分鐘內的第一個模型 + 基線
slug: bai-4-model-dau-tien-baseline
description: 使用 scikit-learn 建立您的第一個模型，以了解基線是什麼以及為什麼在優化之前始終需要基線。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 3
section_title: 第 0 部分：新手入門（第 0 週）
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 機器學習：從基礎到高級
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🧠 人工智慧與機器學習 — 第 3 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 4 課：30 分鐘內的第一個模型 +</tspan>
      <tspan x="60" dy="42">基線。基線</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">機器學習：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 0 部分：新手入門（第 0 週）</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

這是一篇非常重要的文章，因為它可以幫助你克服最大的心理障礙：「知道理論但從未訓練過任何模型」。本文的目標是讓您手動擬合您的第一個模型、測量結果，並了解為什麼**基線**始終是每個嚴肅的 ML 項目中的強制性步驟。

## 課程目標

- 火車首先使用 scikit-learn 建模
- 了解訓練/測試分離的工作原理
- 了解如何建立基準並與機器學習模型進行比較

## 1. 範例問題：預測房價

我們假設我們有由以下組成的房屋數據：

- 面積
- 房間號
- 房屋年齡
- 區
- 售價

在這個問題中：

- `X` 是特徵集
- `y` 是房價

這是一個**回歸**問題，因為輸出是實數。

## 2.什麼是基線？

基線是用作地標的最簡單選項。

房價預測範例：

- 基線1：總是猜測訓練集的平均價格
- 基線 2：始終猜測中間價格

如果 ML 模型不優於基線，則沒有理由使用複雜模型。

## 3. 訓練/測試分割

我們將數據分為兩部分：

- `train`: 學習模型
- `test`：評估未見過的數據

```python
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)
```

的意義 `random_state=42` 是讓你和其他人再次運行並得到相同的結果。

## 4. 第一個線性迴歸模型

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

最重要的是要理解：

- `fit()` 是模型從訓練資料中學習的時候
- `predict()` 是模型預測新資料的時間
- 指標告訴我們模型有多好

## 5. 測量基準進行比較

```python
baseline_pred = [y_train.mean()] * len(y_test)
baseline_mae = mean_absolute_error(y_test, baseline_pred)

print('Baseline MAE:', baseline_mae)
print('Model MAE:', mae)
```

如果 `Model MAE < Baseline MAE`，模型創造了價值。

## 6. 為什麼選擇MAE？

對於迴歸，常見的指標有：

- MAE
- 均方誤差
- 均方根誤差
- $R^2$

對於初學者來說，MAE 是最容易理解的指標，因為它代表問題正確單位的平均誤差。

例如：

- MAE=0.2.5億意味著平均模型偏差約為2.5億。

## 7.第一個模型不需要很強

許多人只是覺得線性回歸很簡單，所以他們想跳過它並切換到 XGBoost。這是錯誤的學習節奏。

開始的理由很簡單：

- 易於調試
- 易於解釋
- 易於檢測數據錯誤
- 對以下模型有思考基線

## 8. 檢查表正確讀取結果

訓練結束後，不要只看指標數字就下結論。問：

1. 模型是否比基線更好？
2. 該指標對於問題是否正確？
3.測試數據是否代表真實數據？
4. 是否有色譜管洩漏？

## 9. 一個非常短的分類變體

如果問題是分類，則程式碼結構幾乎相同，只是模型和指標改變了。

```python
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

clf = LogisticRegression(max_iter=300)
clf.fit(X_train, y_train)
pred = clf.predict(X_test)

print('Accuracy:', accuracy_score(y_test, pred))
```

這可以幫助您了解如何將相同的工作流程應用於許多不同的問題。

## 練習練習

1. 為回歸問題建立基線。
2. 訓練線性迴歸模型。
3. 比較基準和模型之間的指標。
4. 寫出 3 個結論性句子：模型是否值得保留，以及為什麼。

## 常見錯誤

- 評估火車組本身的模型。
- 不要與基線進行比較。
- 在不理解其實際意義的情況下使用指標。

## 完成標準

- [ ] 自訓練第一個模型
- [ ] 創建合理的基線
- [ ] 解釋為什麼模型比基線好或更差
