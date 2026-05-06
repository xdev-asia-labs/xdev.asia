---
id: 019d8b39-bb03-7003-c003-ee0300000003
title: 第 3 課：Python/Pandas 機器學習速成課程
slug: bai-3-python-pandas-crash-course
description: DataFrame、過濾、groupby、合併、基本缺失資料處理以及不熟悉 Python 資料的人員的快速 EDA。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: 第 0 部分：新手入門（第 0 週）
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 機器學習：從基礎到高級
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7527" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7527)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1025" cy="205" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="950" cy="90" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="875" cy="235" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="800" cy="120" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="725" cy="265" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="75" x2="1100" y2="155" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="105" x2="1050" y2="175" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1000.9807621135332,160 1000.9807621135332,190 975,205 949.0192378864668,190 949.0192378864668,160 975,145" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🧠 人工智慧與機器學習 — 第 2 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 3 課：Python/Pandas 機器學習速成課程</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">機器學習：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 0 部分：新手入門（第 0 週）</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

您不需要成為 Python 專家才能學習 ML，但您必須熟悉表格資料。本文是一門“速成課程”，重點關注 ML 中最需要的內容：讀取資料、過濾、轉換、檢查遺失的資料以及創建簡單的特徵。

## 課程目標

- 使用 Pandas 讀取和探索數據
- 在訓練模型之前執行最常見的操作
- 知道何時使用筆記本以及何時將程式碼分開到單獨的文件中

## 1. 你會經常使用的兩個函式庫

### NumPy

用於數組算術和向量化運算。

### 熊貓

用於表格資料（`DataFrame`）。

在大多數基本的 ML 專案中，您在 Pandas 上花費的時間比在模型上花費的時間更多。

## 2. 建立第一個 DataFrame

```python
import pandas as pd

df = pd.DataFrame({
    'dien_tich': [45, 60, 80, 120],
    'so_phong': [1, 2, 3, 4],
    'gia': [1.2, 1.8, 2.6, 4.1]
})

print(df)
```

結果是一個包含行和列的表格。在機器學習中：

- 每行通常是一個觀察結果
- 每列都是一個功能或目標

## 3. 5 個需要立即記住的 Pandas 動作

### 快速查看數據

```python
df.head()
df.shape
df.columns
df.info()
df.describe()
```

### 選擇列

```python
df['dien_tich']
df[['dien_tich', 'so_phong']]
```

### 過濾流

```python
df[df['so_phong'] >= 2]
```

### 建立新列

```python
df['gia_m2'] = df['gia'] / df['dien_tich']
```

### 安排

```python
df.sort_values('gia', ascending=False)
```

## 4. 從 CSV 讀取數據

```python
df = pd.read_csv('data/raw/houses.csv')
```

讀取資料後的第一件事應該始終是：

```python
print(df.head())
print(df.shape)
print(df.isnull().sum())
```

目標是回答三個問題：

1. 資料有多少行和列？
2. 哪一列缺少資料？
3. 哪一列是數字，哪一列是文字？

## 5. 什麼是缺失值？

缺失值是缺失的資料單元格。例如，客戶沒有申報年齡，或系統沒有記錄某個欄位。

檢查：

```python
df.isnull().sum()
```

基本處理：

- 如果缺少太多行/列，則跳過
- 填寫平均數、中位數或眾數
- 添加了標誌 `is_missing`

例如：

```python
df['tuoi'] = df['tuoi'].fillna(df['tuoi'].median())
```

## 6. 分類變數

許多非數字列，例如：

- 城市
- 服務包類型
- 性別

機器學習模型通常不能直接處理純文本，因此需要轉換。最基本的方式是one-hot編碼。

```python
pd.get_dummies(df, columns=['thanh_pho'], drop_first=True)
```

## 7. Groupby 與聚合

這是理解數據和創建特徵的非常強大的技能。

```python
df.groupby('thanh_pho')['gia'].mean()
df.groupby('loai_khach')['doanh_thu'].agg(['mean', 'count'])
```

應用範例：

- 按客戶群劃分的平均收入
- 按城市劃分的購買數量
- 按服務包劃分的流失率

## 8. 合併數據

實際上，數據很少駐留在單一表中。

```python
customers = pd.read_csv('customers.csv')
orders = pd.read_csv('orders.csv')

df = customers.merge(orders, on='customer_id', how='left')
```

重要規則：合併後，始終檢查行號和新產生的空值。

## 9. 基本特徵工程

特徵工程正在創建額外的列來幫助模型更好地學習。

例如：

- `gia_m2 = gia / dien_tich`
- `thoi_gian_su_dung = ngay_hien_tai - ngay_dang_ky`
- `tong_chi_tieu_30_ngay`

好的特徵通常來自對問題的理解，而不是來自模型技巧。

## 10. 筆記本還是腳本？

### 在下列情況下使用筆記本：

- 探索數據
- 繪製圖表
- 快速嘗試想法

### 在下列情況下使用腳本/模組：

- 程式碼重複多次
- 需要重複使用
- 希望管道清潔且易於維護

實用原則：

- 筆記本探索
- `src/` 產生程式碼

## 簡短範例：第一個 EDA

```python
import pandas as pd

df = pd.read_csv('data/raw/customers.csv')

print(df.head())
print(df.shape)
print(df.isnull().sum())
print(df['plan'].value_counts())

df['monthly_spend'] = df['total_spend'] / df['months_active']
print(df[['monthly_spend', 'churn']].head())
```

## 練習練習

1.讀取任意CSV檔案並運行 `head`, `info`, `describe`。
2. 根據原始資料建立至少 2 個新特徵。
3. 寫 3 個句子來描述您從 EDA 中學到的知識。

## 常見錯誤

- 在不理解該列含義的情況下編輯資料。
- 使用未來的資訊創建特徵。
- 合併完成但未檢查行號。

## 完成標準

- [ ] 可以將 CSV 讀入 DataFrame
- [ ] 可以執行基本的篩選、分組和合併
- [ ] 為問題創造一個新的有意義的特徵
