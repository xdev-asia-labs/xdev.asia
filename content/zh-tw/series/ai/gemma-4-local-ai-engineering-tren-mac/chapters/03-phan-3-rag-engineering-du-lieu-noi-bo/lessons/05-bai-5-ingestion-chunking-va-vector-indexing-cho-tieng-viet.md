---
id: 01970001-bb05-7005-d005-bb0500001005
title: '課程 5：越南語文本的 Ingestion、Chunking 與 Vector Indexing'
slug: bai-5-ingestion-chunking-va-vector-indexing-cho-tieng-viet
description: >-
  處理 Markdown/PDF，以技術文件結構進行 chunking，儲存完整中繼資料，
  最佳化越南語文件的 embedding 管線。
duration_minutes: 110
is_free: true
video_url: null
sort_order: 0
section_title: "第三部分：內部資料的 RAG 工程"
course:
  id: 01970001-aa11-7011-b011-aa1100001011
  title: Gemma 4 本地 AI 工程實戰 on Mac
  slug: gemma-4-local-ai-engineering-tren-mac
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5051" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="340" rx="12" fill="url(#bg-5051)"/>
  <g>
    <circle cx="700" cy="50" r="28" fill="#34d399" opacity="0.09"/>
    <circle cx="850" cy="200" r="20" fill="#34d399" opacity="0.13"/>
    <circle cx="950" cy="100" r="34" fill="#34d399" opacity="0.07"/>
    <circle cx="1050" cy="280" r="18" fill="#34d399" opacity="0.11"/>
    <line x1="600" y1="80" x2="1100" y2="160" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="110" x2="1050" y2="180" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
  </g>
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🧠 AI &amp; ML — L0</text>
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">課程 5：Ingestion、Chunking 與</tspan>
      <tspan x="60" dy="42">越南語向量索引</tspan>
  </text>
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Gemma 4 本地 AI 工程實戰 on Mac</text>
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第三部分：內部資料的 RAG 工程</text>
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## 前言

RAG 的品質不僅取決於模型，更取決於資料的 ingestion、chunking 和 indexing 方式。本課程從基礎到實作，建構完整的管線。

## 1. 來源文件類型

內部知識庫的常見來源：

- Markdown 技術文件
- PDF 作業程序
- Wiki/Confluence 匯出
- Slack 討論串匯出

每種來源需要各自的解析器與清理步驟。

## 2. 文本正規化

Chunking 前的清理：

- 移除頁首/頁尾/頁碼
- Unicode 正規化（NFC）
- 表格扁平化或跳過
- 保留程式碼區塊

越南語文本需確保聲調符號的正確處理。

## 3. Chunking 策略

建議參數：

- Chunk 大小：600-1000 tokens
- 重疊：50-100 tokens
- 優先依段落標題分割
- 不分割程式碼區塊

基於標題的分割比隨機字元數分割的檢索品質更好。

## 4. 中繼資料儲存

每個 chunk 應附加：

- `doc_id`
- `section_title`
- `chunk_index`
- `source_path`
- `last_updated`
- `language`

豐富的中繼資料讓後續的過濾與除錯更容易。

## 5. Embedding 管線

本地推薦模型：

- `nomic-embed-text`（透過 Ollama）
- `bge-m3`（多語言支援）

批次生成 embedding 後 upsert 到向量資料庫。

```python
import chromadb

client = chromadb.PersistentClient(path="./vectordb")
collection = client.get_or_create_collection("internal-docs")

collection.upsert(
    ids=[chunk["id"] for chunk in chunks],
    documents=[chunk["text"] for chunk in chunks],
    metadatas=[chunk["metadata"] for chunk in chunks],
)
```

## 6. 索引生命週期管理

- 在 staging 索引驗證後再提升至生產環境
- 定期重新索引過時文件
- 版本控制以支援回滾

## Demo 程式碼

Ingestion 管線執行結果 — 處理 127 個 chunk：

![Ingestion 結果](/images/blog/gemma4-series-demo/05-ingestion-result.png)

ChromaDB collection 狀態確認：

![ChromaDB 狀態](/images/blog/gemma4-series-demo/05-chromadb-status.png)

> 原始碼：[04-rag-ingestion](https://github.com/xdev-asia-labs/gemma-4-local-ai-engineering-on-mac/tree/main/04-rag-ingestion)

## 總結
