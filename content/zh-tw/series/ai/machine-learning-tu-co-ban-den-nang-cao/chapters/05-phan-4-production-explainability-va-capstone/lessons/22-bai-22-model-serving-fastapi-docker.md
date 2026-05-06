---
id: 019d8b39-bb22-7022-c022-ee2200000022
title: 第 22 課：使用 FastAPI + Docker 進行模型服務
slug: bai-22-model-serving-fastapi-docker
description: 打包模型、建立推理 API、對模型進行版本控制並部署緊湊的 ML 服務。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 21
section_title: 第 4 部分：生產、可解釋性和頂點
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 機器學習：從基礎到高級
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8517" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8517)"/>

  <!-- Decorations -->
  <g>
    <circle cx="686" cy="228" r="14" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="772" cy="34" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="858" cy="100" r="20" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="944" cy="166" r="8" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="1030" cy="232" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="128" x2="1100" y2="208" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="158" x2="1050" y2="228" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1015.2390923627308,156.5 1015.2390923627308,199.5 978,221 940.7609076372692,199.5 940.7609076372692,156.5 978,135" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 人工智慧與機器學習 — 第 21 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 22 課：使用 FastAPI + Docker 進行模型服務</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">機器學習：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：生產、可解釋性和頂點</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

訓練模型但未投入使用後，該值仍保留在筆記本中。本文可協助您使用 FastAPI 和 Docker 將模型打包成簡單的服務，足以用於內部演示或作為實際部署的基礎。

## 課程目標

- 正確序列化模型。
- 建立一個接收輸入並傳回預測的 API。
- 使用 Docker 打包服務。

## 所需的最低輸出

- 儲存的模型文件，例如使用 joblib。
- 檔案應用程式FastAPI。
- 文件要求或同等文件。
- Dockerfile 穩定運行服務。

## 提議的程序

1. 訓練模型並儲存工件。
2. 定義輸入或輸出模式。
3. 寫入終點/預測。
4. 根據樣品請求進行本地測試。
5. 使用 Docker 進行容器化。

## FastAPI框架程式碼

~~~蟒蛇
從 fastapi 匯入 FastAPI
從 pydantic 匯入 BaseModel
導入作業庫
將 pandas 導入為 pd
~~~

## 進入真實環境時要考慮的事情

- 在適當的層級記錄請求和回應。
- 管理模型版本。
- 更仔細地驗證輸入。
- 逾時、重試和監控。

## 常見錯誤

- 儲存模型但忘記預處理管道。
- API 架構與訓練資料不符。
- 用漂亮的數據進行測試，不要測試錯誤輸入。

## 練習練習

- 將客戶流失或住房模式打包到 API 中。
- 建立 3 個範例請求：有效、缺少欄位、錯誤的資料類型。
- 撰寫一個簡短的自述文件，描述如何使用 Docker 在本地運行。

## 完成標準

- [ ] 有一個可以在本地運行的預測 API。
- [ ] Docker 建置並成功運行。
- [ ] Schema 輸入足夠清晰，以便於其他人呼叫 API。

## 逐步練習（進階）

1. 使用 Pydantic 標準化輸入/輸出模式。
2. 將模型+預處理打包到版本化工件中。
3. 撰寫端點預測和健康檢查。
4. 新增基本日誌記錄和明確的錯誤處理。
5.建置Docker映像並使用curl執行冒煙測試。

## 應提交工件

- API原始碼和Dockerfile可以運行。
- 3 種情況的請求/回應範例。
- 最低本地部署自述文件。

## 自測題

- 為什麼需要對模型工件進行版本控制？
- 如果輸入模式發生變化，向後相容性將如何處理？
- 哪些運行時指標需要從一開始就進行監控？
