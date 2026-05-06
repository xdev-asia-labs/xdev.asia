---
id: 019c9619-aa05-7005-b005-aa0500000005
title: リアルバトルRAG：基礎から上級まで
slug: rag-thuc-chien
description: >-
  検索拡張生成 (RAG) に関する詳細なコース - LLM を独自のデータに接続するためのテクニック。基本的な RAG から、グラフ RAG、エージェント
  RAG、マルチモーダル RAG まで。 ChromaDB、Qdrant、LangChain、LlamaIndex の実践。
  「ドキュメントを使用したチャット」を本番環境にデプロイします。
featured_image: uploads/2026/03/rag-thuc-chien-cover.png
level: intermediate
duration_hours: 45
lesson_count: 14
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-03-29T14:00:00.000000Z'
created_at: '2026-03-29T14:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019c9618-bb00-7000-b000-bb0000000001
  name: AI と機械学習
  slug: ai-machine-learning
tags:
  - name: RAG
    slug: rag
  - name: Vector Database
    slug: vector-database
  - name: LangChain
    slug: langchain
  - name: LlamaIndex
    slug: llamaindex
  - name: ChromaDB
    slug: chromadb
  - name: Embedding
    slug: embedding
  - name: Graph RAG
    slug: graph-rag
  - name: Agentic RAG
    slug: agentic-rag
  - name: RAGAS
    slug: ragas
  - name: Python
    slug: python
  - name: LLM
    slug: llm
  - name: hands-on
    slug: hands-on
  - name: production
    slug: production
sections:
  - id: section-rag-01
    title: 'パート 1: RAG プラットフォーム'
    description: RAG ルート、埋め込みモデル、ベクトル データベースを理解する
    sort_order: 1
    lessons:
      - id: 019c9619-ff01-7001-a001-ff0100000001
        title: 'レッスン 1: RAG とは何ですか? — アーキテクチャ、ユースケース、RAG が必要な理由'
        slug: bai-1-rag-la-gi
        description: >-
          RAG はどのような問題を解決しますか: 幻覚、知識の遮断、ドメイン固有。アーキテクチャの取得→拡張→生成。 RAG と微調整を比較します。
          50 行のコードで構成される最も単純な「PDF でチャット」デモ。
        duration_minutes: 90
        is_free: true
        sort_order: 0
        video_url: null
      - id: 019c9619-ff02-7002-a002-ff0200000002
        title: 'レッスン 2: モデルの埋め込み — テキストをベクトルに変換する'
        slug: bai-2-embedding-models
        description: >-
          埋め込みとは何ですか?なぜ重要ですか?モデルの比較: OpenAI text-embedding-3、Cohere
          embed-v3、Sentence-Transformers、BGE。ベンチマークパフォーマンス。ベトナム語の多言語埋め込み。
        duration_minutes: 120
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019c9619-ff03-7003-a003-ff0300000003
        title: 'レッスン 3: ベクトル データベース — Chroma、Qdrant、Pinecone、Weaviate'
        slug: bai-3-vector-databases
        description: >-
          最も一般的な 4 つの DB ベクトル (セットアップ、API、パフォーマンス、価格) を比較します。 HNSW
          インデックス、体外受精、PQ。ハイブリッド検索 (ベクトル + キーワード)。メタデータのフィルタリング。 ChromaDB と
          Qdrant の実践。
        duration_minutes: 150
        is_free: true
        sort_order: 2
        video_url: null
  - id: section-rag-02
    title: 'パート 2: ドキュメント処理パイプライン'
    description: ドキュメント処理 — PDF から RAG 対応チャンクまで
    sort_order: 2
    lessons:
      - id: 019c9619-ff04-7004-a004-ff0400000004
        title: 'レッスン 4: ドキュメントの読み込み — PDF、DOCX、Web、YouTube、コード'
        slug: bai-4-document-loading
        description: >-
          PDF (表、画像)、DOCX、HTML/Web スクレイピング、YouTube トランスクリプト、GitHub コード
          リポジトリなど、さまざまなドキュメント ソースを処理します。 LangChain ドキュメント ローダーと LlamaIndex
          リーダー。ベトナム語を扱います。
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019c9619-ff05-7005-a005-ff0500000005
        title: 'レッスン 5: チャンク戦略 — 固定、セマンティック、再帰'
        slug: bai-5-chunking-strategies
        description: >-
          チャンク化は RAG の品質に直接影響します。比較: 固定サイズ、再帰文字、セマンティック チャンキング、ドキュメント
          ベース。オーバーラップ戦略。チャンクサイズの最適化。各戦略のデモとベンチマークを行います。
        duration_minutes: 150
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019c9619-ff06-7006-a006-ff0600000006
        title: 'レッスン 6: メタデータ、フィルタリング、ハイブリッド検索'
        slug: bai-6-metadata-hybrid-search
        description: >-
          チャンクのメタデータ (ソース、日付、作成者、カテゴリ) を追加します。クエリ内のメタデータのフィルタリング。ハイブリッド検索:
          ベクトル類似性 + BM25 キーワード検索を組み合わせます。相互ランク融合。
        duration_minutes: 120
        is_free: true
        sort_order: 5
        video_url: null
  - id: section-rag-03
    title: 'パート 3: 高度な RAG テクニック'
    description: 高度な RAG テクニック — 2025 ～ 2026 年に最も価値のあるもの
    sort_order: 3
    lessons:
      - id: 019c9619-ff07-7007-a007-ff0700000007
        title: 'レッスン 7: クエリ変換 — HyDE、マルチクエリ、ステップバック'
        slug: bai-7-query-transformation
        description: >-
          質問のバリエーションによる検索の向上: HyDE (仮説的な回答を生成してから検索)、マルチクエリ
          (複数の質問のバリエーションを生成)、ステップバック (最初に概要の質問をする)。精度を比較します。
        duration_minutes: 150
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019c9619-ff08-7008-a008-ff0800000008
        title: 'レッスン 8: 再ランキングとコンテキスト圧縮'
        slug: bai-8-reranking-compression
        description: >-
          取得後、クロスエンコーダー (Cohere Rerank、BGE Reranker) を使用して結果を再ランク付けします。コンテキスト圧縮:
          コンテキストを圧縮して関連部分を保持します。長いコンテキストの並べ替え。中間喪失問題。
        duration_minutes: 150
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019c9619-ff09-7009-a009-ff0900000009
        title: 'レッスン 9: グラフ RAG — ナレッジ グラフ + ベクトル検索'
        slug: bai-9-graph-rag
        description: >-
          Microsoft の Graph RAG: エンティティ抽出、コミュニティ検出、グローバル + ローカル検索。ナイーブ RAG
          と比較してください。 Neo4j + LangChain の統合。グラフ RAG がベクトル RAG を上回るのはいつですか?
        duration_minutes: 180
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019c9619-ff10-7010-a010-ff1000000010
        title: 'レッスン 10: マルチモーダル RAG — ドキュメント内の画像、表、グラフ'
        slug: bai-10-multimodal-rag
        description: >-
          画像、表、チャートを含むドキュメントの処理: OCR、表の抽出、チャートの理解。マルチモーダル埋め込み (CLIP)。ドキュメント QA
          用のビジョン言語モデル。 Unstructed.io の統合。
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
  - id: section-rag-04
    title: 'パート 4: プロダクション RAG'
    description: RAG をプロトタイプから量産グレードに引き上げます
    sort_order: 4
    lessons:
      - id: 019c9619-ff11-7011-a011-ff1100000011
        title: 'レッスン 11: Agentic RAG — Agent + RAG の組み合わせによるパワー'
        slug: bai-11-agentic-rag
        description: >-
          Agentic RAG: LLM は、いつ、どのクエリを、どのソースから取得するかを決定します。マルチソース RAG
          (複数の知識ベース)。クエリのルーティング。自己修正 RAG (回答の品質を確認してから再試行)。
        duration_minutes: 180
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019c9619-ff12-7012-a012-ff1200000012
        title: 'レッスン 12: RAG 評価 — RAGAS、忠実性、関連性'
        slug: bai-12-rag-evaluation
        description: >-
          RAG パイプラインを評価します: RAGAS フレームワーク (忠実度、回答の関連性、コンテキストの精度、コンテキストの想起)。
          RAGの裁判官としてのLLM。自動評価スイートを構築します。 RAG が実稼働環境に「十分に適している」のはいつですか?
        duration_minutes: 150
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019c9619-ff13-7013-a013-ff1300000013
        title: 'レッスン 13: RAG を運用環境に展開する — API、キャッシュ、モニタリング'
        slug: bai-13-deploy-rag-production
        description: >-
          FastAPI を使用して RAG API を構築します。セマンティック キャッシュ
          (同じ質問の再コンパイルを避ける)。ドキュメント同期パイプライン。モニタリング: 遅延、コスト、精度のドリフト。スケーリング戦略。
        duration_minutes: 180
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019c9619-ff14-7014-a014-ff1400000014
        title: 'レッスン 14: Capstone — 完全な「ドキュメントを使用したチャット」を構築します。'
        slug: bai-14-capstone
        description: >-
          プロジェクトの概要: 本番環境に対応した「Chat with
          Documents」システムの構築。マルチフォーマットの取り込み、高度なチャンキング、ハイブリッド検索、再ランキング、評価、キャッシュ、モニタリング。デプロイとデモを行います。
        duration_minutes: 240
        is_free: true
        sort_order: 13
        video_url: null
reviews: []
quizzes: []
locale: ja
---

## シリーズのご紹介

**検索拡張生成**は、**検索拡張生成**に関する詳細なコースです。これは、LLM が **個人データ** (内部文書、ナレッジ ベース、データベース) にアクセスして使用し、正確かつ最新の回答を得ることができる技術です。

> 🎯 **RAG が重要な理由** RAG は、LLM の 3 つの最大の問題、幻覚、知識の遮断 (古い知識)、およびドメイン固有の知識 (専門知識) を解決するために企業が適用する **最も優れた技術** です。

## 何を学ぶのですか?

### パート 1: RAG プラットフォーム
- **レッスン 1:** RAG とは何ですか?アーキテクチャの取得 → 拡張 → 生成
- **レッスン 2:** 埋め込みモデル: OpenAI、Cohere、ベトナム語用オープンソース
- **レッスン 3:** ベクトル データベース: Chroma、Qdrant、Pinecone — セットアップと比較

### パート 2: ドキュメント処理パイプライン
- **レッスン 4:** ドキュメントの読み込み: PDF、DOCX、Web、YouTube、コード リポジトリ
- **レッスン 5:** チャンキング戦略: 固定、セマンティック、再帰
- **レッスン 6:** メタデータ、フィルタリング、ハイブリッド検索

### パート 3: 高度な RAG テクニック
- **レッスン 7:** クエリ変換: HyDE、マルチクエリ、ステップバック
- **レッスン 8:** 再ランキングとコンテキスト圧縮
- **レッスン 9:** 🔥 **グラフ RAG** — ナレッジ グラフ + ベクトル検索
- **レッスン 10:** 🔥 **マルチモーダル RAG** — ドキュメント内の写真、表、グラフ

### パート 4: プロダクション RAG
- **レッスン 11:** 🔥 **Agentic RAG** — エージェントがいつ取得するかを決定します
- **レッスン 12:** RAG 評価: RAGAS フレームワーク
- **レッスン 13:** 本番環境へのデプロイ: API、キャッシュ、モニタリング
- **レッスン 14:** キャップストーン:「ドキュメントを使用したチャット」完了

## 入力が必要です

- **中級 Python** (非同期/待機、ファイル I/O、API 呼び出し)
- LLM とプロンプト エンジニアリングの基本的な理解
- OpenAI または Anthropic アカウント (埋め込み + LLM 呼び出し用)

## 使用したツール

```
Python 3.11+        | Ngôn ngữ chính
OpenAI / Anthropic   | LLM APIs + Embeddings
ChromaDB / Qdrant    | Vector Databases
LangChain            | RAG framework
LlamaIndex           | Alternative RAG framework
Unstructured.io      | Document processing
Neo4j                | Graph database (Graph RAG)
RAGAS                | RAG evaluation
FastAPI              | Production API
```
