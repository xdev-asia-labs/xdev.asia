---
id: 019c9619-aa01-7001-b001-aa0100000001
title: 'AI と LLM: 基本から高度まで'
slug: ai-llm-tu-co-ban-den-nang-cao
description: >-
  人工知能と大規模言語モデルに関する包括的なコース - ニューラル ネットワーク プラットフォーム、Transformer
  アーキテクチャから、微調整、RAG、AI エージェント、本番環境への展開まで。 Python、PyTorch、LLM API を実践的に学びます。
featured_image: uploads/2026/03/ai-llm-series-cover.png
level: beginner
duration_hours: 60
lesson_count: 21
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-03-29T08:00:00.000000Z'
created_at: '2026-03-29T08:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019c9618-bb00-7000-b000-bb0000000001
  name: AI と機械学習
  slug: ai-machine-learning
tags:
  - name: AI
    slug: ai
  - name: LLM
    slug: llm
  - name: machine-learning
    slug: machine-learning
  - name: deep-learning
    slug: deep-learning
  - name: transformer
    slug: transformer
  - name: NLP
    slug: nlp
  - name: generative-ai
    slug: generative-ai
  - name: prompt-engineering
    slug: prompt-engineering
  - name: RAG
    slug: rag
  - name: fine-tuning
    slug: fine-tuning
  - name: Python
    slug: python
  - name: PyTorch
    slug: pytorch
  - name: GPT
    slug: gpt
  - name: BERT
    slug: bert
  - name: AI Agents
    slug: ai-agents
  - name: hands-on
    slug: hands-on
  - name: production
    slug: production
sections:
  - id: section-01
    title: 'パート 1: AI およびディープラーニング プラットフォーム'
    description: LLMに入る前に基礎知識をマスターする
    sort_order: 1
    lessons:
      - id: 019c9619-bb01-7001-c001-bb0100000001
        title: 'レッスン 1: AI、ML、DL、LLM の概要'
        slug: bai-1-tong-quan-ai-ml-dl-va-llm
        description: 'AI の全体像: AI、機械学習、深層学習、大規模言語モデルの違い。学習パスと必要なツール。'
        duration_minutes: 90
        is_free: true
        sort_order: 0
        video_url: null
      - id: 019c9619-bb02-7002-c002-bb0200000002
        title: 'レッスン 2: AI のための数学 — 線形代数、微積分、確率'
        slug: bai-2-toan-hoc-cho-ai
        description: '重要な数学的概念: ベクトル、行列、勾配、確率、統計 - ニューラル ネットワークがどのように学習するかを理解するための基礎。'
        duration_minutes: 120
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019c9619-bb03-7003-c003-bb0300000003
        title: 'レッスン 3: 基本的なニューラル ネットワーク — パーセプトロンと逆伝播'
        slug: bai-3-neural-networks-co-ban
        description: >-
          Python/NumPy を使用してニューラル ネットワークを最初から構築します:
          パーセプトロン、多層ネットワーク、活性化関数、損失関数、バックプロパゲーション。
        duration_minutes: 150
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019c9619-bb04-7004-c004-bb0400000004
        title: 'レッスン 4: 深層学習の概要 — CNN、RNN、LSTM'
        slug: bai-4-deep-learning-overview
        description: >-
          深層学習アーキテクチャの概要: 画像用の CNN、シーケンス データ用の RNN および LSTM — Transformer
          を理解するための前提条件。
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-02
    title: 'パート 2: トランスのアーキテクチャ'
    description: Transformer についての深い理解 — 最新のすべての LLM の基礎
    sort_order: 2
    lessons:
      - id: 019c9619-bb05-7005-c005-bb0500000005
        title: 'レッスン 5: 注意のメカニズム — 自己注意と多頭注意'
        slug: bai-5-attention-mechanism
        description: >-
          根元からのアテンション メカニズム: スケーリングされたドット積アテンション、マルチヘッド アテンション、アテンションが RNN
          の問題を解決する理由。 PyTorch を使用したコード作成。
        duration_minutes: 150
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019c9619-bb06-7006-c006-bb0600000006
        title: 'レッスン 6: トランスフォーマーのアーキテクチャ — エンコーダー、デコーダー、位置エンコーディング'
        slug: bai-6-kien-truc-transformer
        description: >-
          論文「Attention is All You Need」の詳細な分析: エンコーダー スタック、デコーダー
          スタック、位置エンコーディング、追加層とノルム層。コードを最初から作成します。
        duration_minutes: 180
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019c9619-bb07-7007-c007-bb0700000007
        title: 'レッスン 7: BERT とエンコーダのみのモデル'
        slug: bai-7-bert-va-encoder-only-models
        description: >-
          BERT: マスクされた言語モデリング、次の文の予測、分類の微調整、NER、Q&A。
          RoBERTa、ALBERT、DistilBERTを比較してください。
        duration_minutes: 150
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019c9619-bb08-7008-c008-bb0800000008
        title: 'レッスン 8: GPT およびデコーダーのみのモデル'
        slug: bai-8-gpt-va-decoder-only-models
        description: >-
          GPT-1 から GPT-4 までの GPT シリーズ: 因果言語モデリング、自己回帰生成、スケーリング則、創発機能。
          LLaMA、ミストラルと比較。
        duration_minutes: 150
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019c9619-bb09-7009-c009-bb0900000009
        title: 'レッスン 9: トークン化 — BPE、WordPiece、SentencePiece'
        slug: bai-9-tokenization
        description: >-
          LLM がテキストを「見る」方法: バイト ペア
          エンコーディング、WordPiece、Unigram、SentencePiece。ベトナム語の処理においてトークン化が重要な理由。
        duration_minutes: 90
        is_free: true
        sort_order: 8
        video_url: null
  - id: section-03
    title: 'パート 3: LLM のトレーニングと微調整'
    description: 事前トレーニングから微調整、アライメントまで
    sort_order: 3
    lessons:
      - id: 019c9619-bb10-7010-c010-bb1000000010
        title: 'レッスン 10: LLM の事前トレーニング — CLM、MLM、およびスケーリングの法則'
        slug: bai-10-pre-training-llms
        description: >-
          事前トレーニングプロセス: Causal LM と Masked LM、データキュレーション。チンチラのスケーリングの法則:
          モデルのサイズ、データ、コンピューティングの関係。
        duration_minutes: 120
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019c9619-bb11-7011-c011-bb1100000011
        title: 'レッスン 11: 教師ありファインチューニング (SFT) — 命令チューニング'
        slug: bai-11-supervised-fine-tuning
        description: >-
          Hugging Face Transformers と TRL を使用して LLM を微調整します: データセットの準備、SFT
          トレーナー、混合精度、勾配チェックポイント。ミストラルと一緒に練習しましょう。
        duration_minutes: 180
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019c9619-bb12-7012-c012-bb1200000012
        title: 'レッスン 12: PEFT — LoRA、QLoRA、およびアダプター メソッド'
        slug: bai-12-peft-lora-qlora
        description: >-
          パラメータ効率の高い微調整: LoRA、4 ビット量子化による QLoRA、プレフィックス チューニング。練習を積んでコンシューマー向け
          GPU で LLM 7B を微調整します。
        duration_minutes: 180
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019c9619-bb13-7013-c013-bb1300000013
        title: 'レッスン 13: RLHF とアライメント — DPO、PPO'
        slug: bai-13-rlhf-va-alignment
        description: >-
          調整: RLHF パイプライン (SFT → 報酬モデル → PPO)、直接優先最適化 (DPO)、憲法 AI。 ChatGPT が
          GPT-3 と異なるのはなぜですか。
        duration_minutes: 150
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-04
    title: 'パート 4: プロンプトと RAG'
    description: LLM を最大限に活用する
    sort_order: 4
    lessons:
      - id: 019c9619-bb14-7014-c014-bb1400000014
        title: 'レッスン 14: プロンプト エンジニアリング — ゼロショット、フューショット、システム プロンプト'
        slug: bai-14-prompt-engineering
        description: >-
          プロンプトの書き方: ゼロショット、フューショット学習、システム/ユーザー/アシスタントの役割、温度とサンプリング、ベスト
          プラクティスとアンチパターン。
        duration_minutes: 120
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019c9619-bb15-7015-c015-bb1500000015
        title: 'レッスン 15: 高度なプロンプト — CoT、ToT、ReAct'
        slug: bai-15-advanced-prompting
        description: '高度なテクニック: 思考連鎖、思考ツリー、自己一貫性、ReAct パターン、リフレクション。 LLM を使用して複雑な問題を解決します。'
        duration_minutes: 120
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019c9619-bb16-7016-c016-bb1600000016
        title: 'レッスン 16: RAG — A から Z までの検索拡張生成'
        slug: bai-16-rag-retrieval-augmented-generation
        description: 'RAG パイプラインの構築: ドキュメントの読み込み、チャンク化、埋め込み、ベクター ストア、取得、再ランキング、生成。幻覚を解決します。'
        duration_minutes: 210
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019c9619-bb17-7017-c017-bb1700000017
        title: 'レッスン 17: ベクトル データベース — 埋め込みとセマンティック検索'
        slug: bai-17-vector-databases
        description: >-
          埋め込みとセマンティック検索: Word2Vec、Sentence Transformers、OpenAI 埋め込み。
          FAISS、ChromaDB、Pinecone、Qdrant を比較して実践します。
        duration_minutes: 150
        is_free: true
        sort_order: 16
        video_url: null
  - id: section-05
    title: 'パート 5: AI アプリケーションの構築'
    description: 実用的な AI アプリケーションを構築する
    sort_order: 5
    lessons:
      - id: 019c9619-bb18-7018-c018-bb1800000018
        title: 'レッスン 18: AI エージェント — ツールの使用、関数呼び出し、エージェント ワークフロー'
        slug: bai-18-ai-agents
        description: >-
          自律型 AI エージェントの構築: ツールの使用、関数呼び出し、ReAct エージェント、マルチエージェント
          システム、LangChain/LangGraph によるメモリ管理。
        duration_minutes: 210
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019c9619-bb19-7019-c019-bb1900000019
        title: 'レッスン 19: LLM API — OpenAI、Anthropic Claude、Google Gemini'
        slug: bai-19-llm-apis
        description: >-
          実用的な統合: OpenAI GPT-4o、Anthropic Claude、Google
          Gemini。ストリーミング、構造化された出力、ビジョン、ツールの使用、コストの最適化。
        duration_minutes: 150
        is_free: true
        sort_order: 18
        video_url: null
  - id: section-06
    title: 'パート 6: 生産と強化'
    description: 実装、評価、および高度なトピック
    sort_order: 6
    lessons:
      - id: 019c9619-bb20-7020-c020-bb2000000020
        title: 'レッスン 20: LLM のデプロイ — Ollama、vLLM、TGI、評価'
        slug: bai-20-deploying-llms-va-evaluation
        description: >-
          自己ホスト型 LLM: Ollama、vLLM、HuggingFace TGI。推論の最適化: 量子化、KV キャッシュ。評価:
          BLEU、ROUGE、LLM-as-Judge、安全性。
        duration_minutes: 210
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d5b01-bb21-7021-c021-bb2100000021
        title: 'レッスン 21: Apple Silicon 上で Ollama を使用して AI をローカルで実行する — ディープダイブ'
        slug: bai-21-ollama-apple-silicon
        description: >-
          詳細は、Apple Silicon 上で LLM をローカルに実行します。統合メモリおよびメタル GPU アーキテクチャ、GGUF
          量子化、Modelfile チューニング、ベンチマーク トークン/秒 M1→M4、MLX フレームワーク、マルチモデル
          サービング、完全なローカル AI 開発スタックの構築。
        duration_minutes: 180
        is_free: true
        sort_order: 20
        video_url: null
reviews: []
quizzes: []
locale: ja
---

## シリーズのご紹介

**AI と LLM: 基本から高度まで** シリーズは、AI の最も基本的な概念から実稼働対応の LLM アプリケーションの構築とデプロイまでを包括的に説明します。

理論を学ぶだけでなく、NumPy を使用したニューラル ネットワークの作成、PyTorch を使用したアテンション メカニズムの実装、GPU での LLM の微調整、RAG パイプラインの構築、実サーバーへのモデルのデプロイに至るまで、各概念の **実践コード** も学習します。

## 何を学ぶのですか?

### パート 1: AI および深層学習プラットフォーム

- **レッスン 1:** AI、ML、DL、LLM の概要 — 全体像
- **レッスン 2:** AI のための数学: 線形代数、微積分、確率
- **レッスン 3:** ゼロからのニューラル ネットワーク: パーセプトロン、バックプロパゲーション、活性化関数
- **レッスン 4:** 深層学習: CNN、RNN、LSTM — Transformer の前提

### パート 2: トランスのアーキテクチャ

- **レッスン 5:** 注意メカニズム: 自己注意と多頭注意
- **レッスン 6:** トランスフォーマーのアーキテクチャ: エンコーダー、デコーダー、位置エンコーディング
- **レッスン 7:** BERT およびエンコーダーのみのモデル: マスクされた言語モデリング
- **レッスン 8:** GPT およびデコーダーのみのモデル: 自己回帰生成
- **レッスン 9:** トークン化: BPE、WordPiece、SentencePiece

### パート 3: LLM のトレーニングと微調整

- **レッスン 10:** 事前トレーニング: CLM、MLM、およびスケーリングの法則
- **レッスン 11:** 教師あり微調整 (SFT): 命令チューニング
- **レッスン 12:** PEFT: LoRA、QLoRA — 少ないリソースでの効率的な微調整
- **レッスン 13:** RLHF と連携: DPO、PPO、憲法上の AI

### パート 4: プロンプトと RAG

- **レッスン 14:** プロンプト エンジニアリング: ゼロショット、フューショット、システム プロンプト
- **レッスン 15:** 高度なプロンプト: 思考連鎖、思考ツリー、ReAct
- **レッスン 16:** RAG: A から Z までの検索拡張生成
- **レッスン 17:** ベクトル データベース: 埋め込み、セマンティック検索、ChromaDB、Qdrant

### パート 5: AI アプリケーションの構築

- **レッスン 18:** AI エージェント: ツールの使用、関数呼び出し、エージェント ワークフロー
- **レッスン 19:** LLM API: OpenAI、Anthropic Claude、Google Gemini

### パート 6: 生産と強化

- **レッスン 20:** LLM のデプロイ: Ollama、vLLM、TGI、評価
- **レッスン 21:** Apple Silicon 上で Ollama を使用して AI Local を実行する — ディープダイブ

## 入力が必要です

- 基本的な Python (関数、クラス、リストの内包表記の書き方を知っている)
- レベル 3 数学 (専門化する必要はありません - レッスン 2 で必要なものを復習します)
- 少なくとも 8GB RAM を搭載したコンピューター (初期のパーツには GPU は必要ありません)

## 使用したツール

```
Python 3.11+     | Ngôn ngữ lập trình chính
NumPy / Pandas   | Xử lý số học và dữ liệu
PyTorch          | Deep Learning framework
Hugging Face     | Transformers, Datasets, TRL
LangChain        | LLM application framework
Ollama           | Chạy LLM local
OpenAI API       | GPT-4o, Embeddings
Anthropic API    | Claude
ChromaDB / FAISS | Vector databases
```
