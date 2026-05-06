---
id: 019d8b39-bb05-7005-c005-ee0500000005
title: 第 5 課：迷你項目 1 — 預測房價
slug: bai-5-mini-project-1-du-doan-gia-nha
description: 第一個完整的練習課程：簡單的 EDA、訓練/測驗分割、基準模型、評估和經驗教訓。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 4
section_title: 第 0 部分：新手入門（第 0 週）
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 機器學習：從基礎到高級
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🧠 人工智慧與機器學習 — 第 4 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 5 課：迷你項目 1 — 預測房價</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">機器學習：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 0 部分：新手入門（第 0 週）</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

這是該系列的第一個迷你項目。目標不是優化到最佳水平，而是讓您從頭到尾經歷整個過程：了解資料、選擇特徵、分割訓練/測試、建立基準、訓練模型、評估並得出結論。

## 問題背景

您擁有一個城市的住房數據，其中包含以下資訊：

- 面積
- 臥室數量
- 廁所號碼
- 區
- 房屋年齡
- 售價

目標是預測新房的房價。

## 迷你專案目標

- 進行基本的 EDA 來理解數據
- 建立第一個基線
- 訓練至少一個迴歸模型
- 使用指標給出明確的結論

## 1. 業務問題

房地產經紀人或清單系統想要估算新房子的公平售價。

對應的機器學習問題：

> 輸入房屋資訊後，預計售價是多少？

## 2. 最低 EDA 要求

```python
import pandas as pd

df = pd.read_csv('data/raw/houses.csv')

print(df.head())
print(df.shape)
print(df.info())
print(df.isnull().sum())
print(df.describe())
```

您至少需要回答以下問題：

1.有多少行數據？
2. 是否有任何欄位缺少資料？
3. 目標列是什麼？
4. 模型中是否存在沒有意義的列？

## 3.選擇第一個特徵

在第一輪中，不要選擇太多列。只是幾個明顯的特徵：

```python
features = ['dien_tich', 'so_phong', 'so_toilet', 'tuoi_nha']
X = df[features]
y = df['gia']
```

第一輪選擇少數特徵的原因：

- 易於調試
- 易於理解每個變數的影響
- 減少複雜資料處理中的錯誤

## 4. 基線

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

## 5.第一個模型

```python
from sklearn.linear_model import LinearRegression

model = LinearRegression()
model.fit(X_train, y_train)

pred = model.predict(X_test)
model_mae = mean_absolute_error(y_test, pred)

print('Model MAE:', model_mae)
```

## 6. 讀取結果

例如：

- 基線 MAE：8.5 億
- 模型MAE：4.2億

初步結論：

- 此模型明顯優於基線
- 初步工作流程已步入正軌
- 可以透過特徵工程或更強大的模型進一步改進

## 7. 進一步擴展

嘗試新增一個分類變量，例如 `quan`:

```python
X = pd.get_dummies(df[['dien_tich', 'so_phong', 'so_toilet', 'tuoi_nha', 'quan']], drop_first=True)
y = df['gia']
```

然後再次訓練並比較指標。這是測試新增位置資訊是否確實對模型有幫助的簡單方法。

## 8. 小型專案後的簡短報告樣本

你應該寫一個像這樣的總結：

> 我使用 4 個基本數值特徵來預測房價。透過平均價格進行基線預測得出 MAE = X，而線性迴歸得出 MAE = Y。這表明模型已經了解了特徵與售價之間的關係。但該模型目前沒有使用詳細的位置特徵，也沒有處理異常值。

這是一個非常重要的習慣，因為機器學習不僅涉及編碼，還涉及傳達結果。

## 額外挑戰

1. 比較線性迴歸和隨機森林迴歸。
2. 嘗試刪除某個功能以查看指標如何變化。
3. 創建特徵 `gia_m2` 並檢查使用不當是否有洩漏。

## 常見錯誤

- 在不理解其含義的情況下使用每一列。
- 在評估之前忘記分開訓練/測試。
- 看到指標優於基線，然後在沒有檢查數據的情況下過早下結論。

## 完成標準

- [ ] 完成了小專案從頭到尾的運行
- [ ] 有一個基線和至少 1 個機器學習模型
- [ ] 可以寫出關於結果的簡短、易於理解的結論
