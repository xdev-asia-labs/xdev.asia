---
id: 01970001-bb05-7005-d005-bb0500001005
title: 'レッスン5：ベトナム語テキストのインジェスト、チャンキング＆ベクトルインデキシング'
slug: bai-5-ingestion-chunking-va-vector-indexing-cho-tieng-viet
description: >-
  Markdown/PDFを処理し、技術文書構造でチャンキングし、完全なメタデータを保存し、
  ベトナム語ドキュメント向けのエンベディングパイプラインを最適化する。
duration_minutes: 110
is_free: true
video_url: null
sort_order: 0
section_title: "パート3：内部データ向けRAGエンジニアリング"
course:
  id: 01970001-aa11-7011-b011-aa1100001011
  title: Gemma 4 ローカルAIエンジニアリング on Mac
  slug: gemma-4-local-ai-engineering-tren-mac
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5050" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="340" rx="12" fill="url(#bg-5050)"/>
  <g>
    <circle cx="700" cy="50" r="28" fill="#34d399" opacity="0.09"/>
    <circle cx="850" cy="200" r="20" fill="#34d399" opacity="0.13"/>
    <circle cx="950" cy="100" r="34" fill="#34d399" opacity="0.07"/>
    <circle cx="1050" cy="280" r="18" fill="#34d399" opacity="0.11"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="80" x2="1100" y2="160" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="110" x2="1050" y2="180" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
  </g>
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🧠 AI &amp; ML — L0</text>
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン5：インジェスト、チャンキング＆</tspan>
      <tspan x="60" dy="42">ベトナム語向けベクトルインデキシング</tspan>
  </text>
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Gemma 4 ローカルAIエンジニアリング on Mac</text>
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート3：内部データ向けRAGエンジニアリング</text>
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

RAGの品質はモデルだけでなく、データがどのようにインジェスト・チャンキング・インデキシングされるかに大きく依存します。このレッスンでは、パイプライン全体を基礎から構築します。

## 1. ソースドキュメントの種類

内部ナレッジベースの一般的なソース：

- Markdown技術ドキュメント
- PDF運用手順書
- Wiki/Confluenceエクスポート
- Slackスレッドのエクスポート

各ソースには独自のパーサーとクリーンアップステップが必要です。

## 2. テキスト正規化

チャンキング前にクリーンアップ：

- ヘッダー/フッター/ページ番号の除去
- Unicodeの正規化（NFC）
- テーブルのフラット化またはスキップ
- コードブロックの保持

ベトナム語テキストの場合、声調記号の正しい処理を確認してください。

## 3. チャンキング戦略

推奨パラメータ：

- チャンクサイズ：600〜1000トークン
- オーバーラップ：50〜100トークン
- セクション見出しで優先的に分割
- コードブロックは分割しない

見出しベースの分割は、ランダムな文字数分割よりも検索品質が良くなります。

## 4. メタデータの保存

各チャンクに付加：

- `doc_id`
- `section_title`
- `chunk_index`
- `source_path`
- `last_updated`
- `language`

メタデータが豊富であれば、あとでフィルタリングやデバッグが容易になります。

## 5. エンベディングパイプライン

ローカル推奨モデル：

- `nomic-embed-text`（Ollama経由）
- `bge-m3`（多言語対応）

バッチ処理でエンベディングを生成し、ベクトルDBにupsertします。

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

## 6. インデックスのライフサイクル管理

- ステージングインデックスで検証してからプロダクションにプロモーション
- 古いドキュメントの定期的な再インデキシング
- バージョニングでロールバック可能に

## デモコード

インジェストパイプラインの実行結果 — 127チャンク処理：

![インジェスト結果](/images/blog/gemma4-series-demo/05-ingestion-result.png)

ChromaDBコレクションの状態確認：

![ChromaDBステータス](/images/blog/gemma4-series-demo/05-chromadb-status.png)

> ソースコード：[04-rag-ingestion](https://github.com/xdev-asia-labs/gemma-4-local-ai-engineering-on-mac/tree/main/04-rag-ingestion)

## まとめ
