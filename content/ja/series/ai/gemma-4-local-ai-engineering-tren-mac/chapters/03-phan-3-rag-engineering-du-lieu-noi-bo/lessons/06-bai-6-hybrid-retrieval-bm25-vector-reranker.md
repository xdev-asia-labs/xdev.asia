---
id: 01970001-bb06-7006-d006-bb0600001006
title: 'レッスン6：ハイブリッド検索 - BM25 + ベクトル + リランカー'
slug: bai-6-hybrid-retrieval-bm25-vector-reranker
description: >-
  RRFで字句検索とセマンティック検索を組み合わせ、
  リランカーで精度と引用正確性を向上させる。
duration_minutes: 100
is_free: true
video_url: null
sort_order: 1
section_title: "パート3：内部データ向けRAGエンジニアリング"
course:
  id: 01970001-aa11-7011-b011-aa1100001011
  title: Gemma 4 ローカルAIエンジニアリング on Mac
  slug: gemma-4-local-ai-engineering-tren-mac
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6060" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="340" rx="12" fill="url(#bg-6060)"/>
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
      <tspan x="60" dy="0">レッスン6：ハイブリッド検索</tspan>
      <tspan x="60" dy="42">BM25 + ベクトル + リランカー</tspan>
  </text>
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Gemma 4 ローカルAIエンジニアリング on Mac</text>
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート3：内部データ向けRAGエンジニアリング</text>
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

ベクトル検索だけでは不十分です。BM25は正確なキーワード一致に強く、ベクトル検索はセマンティック一致に強い。両方を組み合わせ、リランカーでフィルタリングすると、RAGの品質が大幅に向上します。

## 1. なぜハイブリッドなのか

- BM25：エラーコード、設定パラメータなど正確な用語の検索に強い
- ベクトル：「この問題の解決方法は？」のような意味的な検索に強い
- 組み合わせ：両方の長所を活かし、弱点をカバー

## 2. RRF（Reciprocal Rank Fusion）

2つのランキングリストを統合するシンプルで効果的な方法：

$$RRF(d) = \sum_{r \in R} \frac{1}{k + rank_r(d)}$$

ここで$k$は通常60に設定します。

各検索メソッドのランキングを組み合わせ、最終的なスコアを算出します。

## 3. パイプライン設計

```text
ユーザークエリ
  ├── BM25検索 → top-N候補
  ├── ベクトル検索 → top-N候補
  └── RRF統合 → top-2N候補
         └── リランカー → top-K最終結果
               └── コンテキストビルダー → LLM
```

## 4. リランカーの役割

リランカーはクエリと各候補ペアを再評価し、より精度の高いスコアを付けます：

- クロスエンコーダーベースが最も精度が高い
- ローカルで動作可能な軽量リランカーも存在
- レイテンシとのトレードオフを考慮

## 5. チューニングポイント

- BM25とベクトルのtop-N比率
- RRFのk値
- リランカーのカットオフしきい値
- 最終コンテキストに含めるチャンク数

ゴールデンセットで各パラメータの影響を測定してください。

## 6. ハルシネーション制御

- 検索結果のスコアが低い場合は「データ不足」を返す
- 引用ソースを常にレスポンスに含める
- コンテキスト外の情報を生成しないようプロンプトで制約

## デモコード

BM25 vs ベクトル vs ハイブリッドの検索結果比較：

![検索結果比較](/images/blog/gemma4-series-demo/06-retrieval-comparison.png)

> ソースコード：[05-hybrid-retrieval](https://github.com/xdev-asia-labs/gemma-4-local-ai-engineering-on-mac/tree/main/05-hybrid-retrieval)

## まとめ
