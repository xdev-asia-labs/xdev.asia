---
id: 019d8b39-bb02-7002-c002-ee0200000002
title: 第 2 課：設定生產標準 ML 學習環境
slug: bai-2-setup-moi-truong-ml
description: 安裝Python、Jupyter、VS Code、NumPy/Pandas/scikit-learn；建立專案範本、管理依賴項和筆記本工作流程。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 1
section_title: 第 0 部分：新手入門（第 0 週）
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 機器學習：從基礎到高級
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4723" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4723)"/>

  <!-- Decorations -->
  <g>
    <circle cx="841" cy="133" r="34" fill="#34d399" opacity="0.08"/>
    <circle cx="1082" cy="254" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="823" cy="115" r="30" fill="#34d399" opacity="0.14"/>
    <circle cx="1064" cy="236" r="13" fill="#34d399" opacity="0.07"/>
    <circle cx="805" cy="97" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="243" x2="1100" y2="323" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="273" x2="1050" y2="343" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="975.9089653438086,124 975.9089653438086,162 943,181 910.0910346561914,162 910.0910346561914,124.00000000000001 943,105" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🧠 人工智慧與機器學習 — 第 1 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 2 課：設定標準 ML 學習環境</tspan>
      <tspan x="60" dy="42">生產。生產</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">機器學習：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 0 部分：新手入門（第 0 週）</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

剛接觸 ML 的人通常會因為混亂的安裝環境而花費大量時間：Python 的許多版本、今天可以工作明天就不行的筆記本、隨意安裝的套件、沒有結構的專案文件。本文幫助您建立一個穩定的學習和工作環境，以便從下一課您可以只專注於學習 ML，而不是修復安裝錯誤。

## 課程目標

- 為 ML 安裝乾淨的 Python 環境
- 了解如何組織專案資料夾以學習和重複使用程式碼
- 使用 NumPy、Pandas 和 scikit-learn 運行第一個筆記本

## 1. 選擇哪個Python版本？

**推薦使用Python 3.11**。

原因：

- 大多數流行的 ML 庫都很好地支援它。
- 比 3.9/3.10 更快、更穩定。
- 與新版本相比，不相容的風險較小。

檢查版本：

```bash
python --version
python3 --version
```

## 2.使用venv還是Conda？

對於新手來說，有兩種流行的選擇：

### `venv`

優點：

- 可用於Python。
- 輕、簡單。

缺點：

- 使用具有複雜本機相依性的套件時較不方便。

### 康達/迷你康達

優點：

- 良好的數據/機器學習環境管理。
- 更容易安裝科學包。

缺點：

- 稍微重一點。

在這個課程中，如果你是全新的，你可以使用它 `venv`。如果您打算長期進行深度學習，也許可以改用 Conda。

## 3.建立第一個項目

例如與 `venv`:

```bash
mkdir ml-course
cd ml-course

python -m venv .venv
source .venv/bin/activate

pip install --upgrade pip
pip install numpy pandas scikit-learn matplotlib jupyter
```

在 Windows PowerShell 上：

```powershell
.venv\Scripts\Activate.ps1
```

## 4. 建議的資料夾結構

```text
ml-course/
├── notebooks/
├── data/
│   ├── raw/
│   └── processed/
├── src/
│   ├── features/
│   ├── models/
│   └── utils/
├── outputs/
│   ├── figures/
│   └── models/
├── requirements.txt
└── README.md
```

意義：

- `notebooks/`: 一個實驗和學習的地方。
- `data/raw/`：原始數據，未經直接編輯。
- `data/processed/`: 清理資料。
- `src/`: 可重複使用的程式碼。
- `outputs/`：模型、圖表、工件。

## 5. 應預先安裝工具

### 必填

- 蟒蛇
- VS代碼
- 朱皮特
- `numpy`, `pandas`, `scikit-learn`

### 應該有

- `matplotlib`, `seaborn`
- `ipykernel`
- `black` 或類似的格式化程序

```bash
pip install seaborn ipykernel
```

## 6. 執行第一個筆記本

```bash
jupyter notebook
```

或使用VS Code開啟文件 `.ipynb`。

嘗試執行以下命令：

```python
import numpy as np
import pandas as pd
from sklearn.datasets import load_iris

iris = load_iris(as_frame=True)
df = iris.frame

print(df.head())
print(df.shape)
print(df['target'].value_counts())
```

如果筆記本工作正常，您的環境足以完成本系列中的大部分基礎課程。

## 7. 文件應該從一開始就在那裡

### `requirements.txt`

```txt
numpy
pandas
scikit-learn
matplotlib
seaborn
jupyter
```

### `README.md`

最低自述文件應包含：

- 專案目標
- 如何安裝環境
- 如何執行筆記本或腳本

## 8. 常見安裝錯誤

### 錯誤：已安裝軟體包但筆記本無法辨識它

原因通常是筆記本運行的核心與您剛安裝的環境不同。

如何處理：

```bash
python -m ipykernel install --user --name ml-course
```

然後在 VS Code/Jupyter 中選擇正確的核心。

＃＃＃ 錯誤： `ModuleNotFoundError`

檢查：

- 環境已經啟動了嗎？
- 你正確使用Python嗎？
- 軟體包安裝到哪個環境？

### 錯誤：筆記本太亂

解決方案：

- 筆記本僅用於探索
- 可重複使用的程式碼切換 `src/`
- 不要將所有內容放入 1000 行長的文件中

## 9. 從一開始就標準工作

三個小但極為重要的原則：

1. 每個項目使用單獨的環境。
2.不要直接編輯原始資料。
3. 在README中記錄如何運作項目。

如果你從一開始就做好這三件事，隨著專案數量的增加，你會省去很多麻煩。

## 練習練習

1.為本系列創建一個單獨的環境。
2. 根據上面的範例建立資料夾結構。
3. 執行第一個筆記本並儲存快照或輸出。

## 常見錯誤

- 將套件安裝到全域環境。
- 每個項目使用一個環境。
- 我不知道筆記本使用的是哪個核心。

## 完成標準

- [ ] 創造您自己的機器學習環境
- [ ] 運行第一本筆記本
- [ ] 擁有整潔、可重複使用的項目資料夾
