---
id: 019d8b39-bb06-7006-c006-ee0600000006
title: 第 6 課：線性迴歸和直覺的梯度下降
slug: bai-6-linear-regression-gradient-descent
description: 以易於理解的程度理解損失函數、梯度下降和正則化，足以調試迴歸模型。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 5
section_title: 第 1 部分：監督學習基礎
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 機器學習：從基礎到高級
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3393" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3393)"/>

  <!-- Decorations -->
  <g>
    <circle cx="709" cy="117" r="32" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="818" cy="146" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="927" cy="175" r="26" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="1036" cy="204" r="23" fill="#818cf8" opacity="0.13"/>
    <circle cx="645" cy="233" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="207" x2="1100" y2="287" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="237" x2="1050" y2="307" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="993.3730669589464,136 993.3730669589464,178 957,199 920.6269330410536,178 920.6269330410536,136 957,115" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🧠 人工智慧與機器學習 — 第 5 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 6 課：線性迴歸與直覺</tspan>
      <tspan x="60" dy="42">梯度下降</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">機器學習：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：監督學習基礎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

訓練完第一個模型後，下一個問題是：模型為什麼要學習？本文可協助您以足夠直觀的方式理解線性迴歸，以便讀取損失、除錯結果並了解模型何時學習正確或錯誤。

## 課程目標

- 了解線性迴歸試圖學習什麼。
- 直觀掌握損失函數、梯度下降和正則化。
- 知道何時使用線性迴歸，何時不強制使用。

## 線性迴歸在做什麼？

想像一下您想要預測區域的房價。線性模型試圖找出最佳直線，使預測價格與實際價格之間的誤差最小。

基本公式：

$$
\hat{y} = w_1x_1 + w_2x_2 + ... + w_nx_n + b
$$

## 損失函數：衡量模型有多糟糕的指標

對於回歸，一個熟悉的損失是 MSE：

$$
MSE = \frac{1}{n}\sum_{i=1}^{n}(y_i - \hat{y_i})^2
$$

意思很通俗：預測模型偏離現實越多，損失就越大。平方有助於嚴重懲罰距離太遠的點。

## 梯度下降：模型如何修正錯誤

梯度下降是一個迭代過程：預測、計算損失、了解如何增加或減少權重，然後多次更新，直到模型更加穩定。

如果學習率太大，模型很容易來回跳動，不收斂。如果太小，模型學習速度會非常慢。

## 最小程式碼範例

~~~蟒蛇
從 sklearn.linear_model 導入線性迴歸，嶺
從 sklearn.metrics 導入mean_absolute_error
從 sklearn.model_selection 導入 train_test_split

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

模型=線性迴歸()
model.fit(X_train, y_train)
preds = model.predict(X_test)

印出（'MAE：'，mean_absolute_error（y_test，preds））
print('截距：', model.intercept_)
print('係數：', model.coef_)
~~~

## 正規化以防止過度學習

- Ridge 通常有助於更平滑的加權。
- Lasso 可以將某些權重推至 0，適合當您想要選擇特徵時。

## 常見錯誤

- 資料標準化已完成，但未以相同的方式應用於測試集。
- 結論是係數是因果關係。
- 只看訓練分數而不看測驗錯誤。

## 練習練習

- 在同一資料集上訓練線性迴歸和嶺。
- 比較兩個模型的 MAE。
- 用 5 行短文寫下：Ridge 什麼時候比純線性迴歸更好？

## 完成標準

- [ ]用簡單的語言解釋損失函數。
- [ ] 了解用於更新權重的梯度下降。
- [ ] 在實際範例中比較線性迴歸和嶺迴歸。

## 逐步練習（進階）

1. 選擇至少具有 6 個特徵的迴歸資料集。
2. 使用線性迴歸訓練基線，無需正規化。
3. 使用 5 個不同的 alpha 值測試 Ridge。
4. 繪製一張圖表，比較每個 alpha 的 MAE。
5. 寫評論：太大的 alpha 如何影響偏差/變異數？

## 應提交工件

- Notebook 有 Linear 與 Ridge 的比較。
- MAE 和 RMSE 結果表。
- 關於選擇正規化的 8-10 行結論。

## 自測題

- 為什麼 MSE 比 MAE 對異常值更敏感？
- 學習率如何影響收斂速度？
- 什麼時候 Lasso 比 Ridge 值得嘗試？
