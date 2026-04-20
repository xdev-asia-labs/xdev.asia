---
id: 01970001-bb06-7006-d006-bb0600001006
title: '課程 6：混合檢索 — BM25 + 向量 + Reranker'
slug: bai-6-hybrid-retrieval-bm25-vector-reranker
description: >-
  以 RRF 結合詞彙搜尋與語意搜尋，
  使用 reranker 提升精確度與引用正確性。
duration_minutes: 100
is_free: true
video_url: null
sort_order: 1
section_title: "第三部分：內部資料的 RAG 工程"
course:
  id: 01970001-aa11-7011-b011-aa1100001011
  title: Gemma 4 本地 AI 工程實戰 on Mac
  slug: gemma-4-local-ai-engineering-tren-mac
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6061" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="340" rx="12" fill="url(#bg-6061)"/>
  <g>
    <circle cx="720" cy="60" r="24" fill="#38bdf8" opacity="0.09"/>
    <circle cx="880" cy="220" r="30" fill="#38bdf8" opacity="0.07"/>
    <circle cx="1000" cy="120" r="20" fill="#38bdf8" opacity="0.11"/>
    <circle cx="1100" cy="260" r="16" fill="#38bdf8" opacity="0.13"/>
    <line x1="600" y1="90" x2="1100" y2="170" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="120" x2="1050" y2="190" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
  </g>
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 AI &amp; ML — L1</text>
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">課程 6：混合檢索</tspan>
      <tspan x="60" dy="42">BM25 + 向量 + Reranker</tspan>
  </text>
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Gemma 4 本地 AI 工程實戰 on Mac</text>
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第三部分：內部資料的 RAG 工程</text>
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## 前言

單純的向量檢索不夠。BM25 擅長精確關鍵字比對，向量檢索擅長語意比對。兩者結合再加上 reranker 過濾，RAG 品質將顯著提升。

## 1. 為什麼要混合檢索

- BM25：精確搜尋錯誤碼、設定參數等術語
- 向量：理解「這個問題怎麼解決？」之類的語意查詢
- 結合：取兩者優勢，互補弱點

## 2. RRF（Reciprocal Rank Fusion）

整合兩個排序列表的簡單有效方法：

$$RRF(d) = \sum_{r \in R} \frac{1}{k + rank_r(d)}$$

其中 $k$ 通常設為 60。

結合各檢索方法的排名，計算最終分數。

## 3. 管線設計

```text
使用者查詢
  ├── BM25 搜尋 → top-N 候選
  ├── 向量搜尋 → top-N 候選
  └── RRF 融合 → top-2N 候選
         └── Reranker → top-K 最終結果
               └── Context Builder → LLM
```

## 4. Reranker 的角色

Reranker 重新評估查詢與各候選的配對，給出更精確的分數：

- Cross-encoder 基礎的精確度最高
- 也有可在本地運行的輕量 reranker
- 需考量與延遲的權衡

## 5. 調校重點

- BM25 與向量的 top-N 比例
- RRF 的 k 值
- Reranker 的截止閾值
- 最終 context 包含的 chunk 數

使用 golden set 衡量各參數的影響。

## 6. 幻覺控制

- 檢索結果分數低時回傳「資料不足」
- 回應中始終包含引用來源
- 以 prompt 限制不生成 context 外的資訊

## Demo 程式碼

BM25 vs 向量 vs 混合的檢索結果比較：

![檢索結果比較](/images/blog/gemma4-series-demo/06-retrieval-comparison.png)

> 原始碼：[05-hybrid-retrieval](https://github.com/xdev-asia-labs/gemma-4-local-ai-engineering-on-mac/tree/main/05-hybrid-retrieval)

## 總結
