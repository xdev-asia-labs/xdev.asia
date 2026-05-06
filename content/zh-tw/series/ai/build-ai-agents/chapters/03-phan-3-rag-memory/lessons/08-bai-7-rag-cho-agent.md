---
id: 019c9619-cc07-7007-d007-cc0700000007
title: 第 7 課：以代理人為導向的 RAG — 連結到知識庫
slug: bai-7-rag-cho-agent
description: 為代理程式建立 RAG 管道：文件載入、分塊策略、嵌入模型、向量儲存（ChromaDB、Qdrant）。語義搜尋與關鍵字搜尋。混合檢索。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 6
section_title: 第 3 部分：RAG 和內存 — 為 Agent 提供內存
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: 建構 AI 代理：從零到生產
  slug: build-ai-agents
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6349" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6349)"/>

  <!-- Decorations -->
  <g>
    <circle cx="660" cy="70" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="720" cy="170" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="780" cy="270" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="840" cy="110" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="900" cy="210" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="230" x2="1100" y2="310" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="260" x2="1050" y2="330" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1051.650635094611,217.5 1051.650635094611,242.5 1030,255 1008.349364905389,242.5 1008.349364905389,217.5 1030,205" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 人工智慧與機器學習 — 第 6 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 7 課：以代理人為導向的 RAG — 連結知識</tspan>
      <tspan x="60" dy="42">基地</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">建構 AI 代理：從零到生產</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：RAG 和內存 — 為 Agent 提供內存</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

當代理商擁有自己的**知識庫**時，他們會變得更強大。 RAG（檢索增強生成）允許代理在做出回應之前從文件、資料庫或知識庫中搜尋信息，從而減少幻覺並提高準確性。

---

## 1. RAG 管道概述

```
Documents → Chunking → Embedding → Vector Store → Retrieval → LLM → Answer
```

## 2. 使用 ChromaDB 實作

```python
import chromadb
from openai import OpenAI

client = OpenAI()
chroma = chromadb.PersistentClient(path="./agent_knowledge")
collection = chroma.get_or_create_collection("docs")

def add_documents(texts, metadatas=None):
    embeddings = get_embeddings(texts)
    collection.add(
        documents=texts,
        embeddings=embeddings,
        ids=[f"doc_{i}" for i in range(len(texts))],
        metadatas=metadatas,
    )

def search_knowledge(query, n_results=5):
    query_embedding = get_embeddings([query])[0]
    results = collection.query(
        query_embeddings=[query_embedding],
        n_results=n_results,
    )
    return results["documents"][0]
```

## 3. RAG 作為代理工具

```python
@registry.register("search_knowledge", "Tìm kiếm trong knowledge base", {...})
def search_knowledge_tool(query: str) -> str:
    results = search_knowledge(query, n_results=3)
    return "\n---\n".join(results)
```

---

## 總結

- RAG = 允許代理程式存取私有知識庫
- 分塊策略影響檢索品質
- ChromaDB 和 Qdrant 是兩個最受歡迎的 DB 向量
- 混合搜尋（語義+關鍵字）給出最佳結果

## 練習

1. 使用 ChromaDB 為 100 多個文件建置 RAG 管道
2. 比較分塊策略：固定大小、遞歸、語意
3.實現混合搜尋（語意+BM25）
4. 將第 6 課中的 RAG 工具整合到 SimpleAgent 中

