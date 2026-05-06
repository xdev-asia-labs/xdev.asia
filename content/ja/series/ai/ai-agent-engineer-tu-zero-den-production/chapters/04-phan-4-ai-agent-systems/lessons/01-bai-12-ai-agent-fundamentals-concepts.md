---
id: 019e0a01-bb12-7001-c001-ee1200000001
title: 'レッスン 12: AI エージェントの基礎 — 概念とアーキテクチャ'
slug: bai-12-ai-agent-fundamentals-concepts
description: >-
  AIエージェントとは何ですか？エージェント対チャットボット対パイプライン。核となる要素: 認識、推論、行動。エージェント アーキテクチャ:
  ReAct、計画と実行、リフレクション。エージェントループ、状態管理。 AI エージェントの分類。現実世界の使用例。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 11
section_title: 'パート 4: AI エージェントとエージェントベースのシステム'
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: 'AI エージェント エンジニア: ゼロから本番環境まで'
  slug: ai-agent-engineer-tu-zero-den-production
locale: ja
---

> **ChatGPT に質問すると、ChatGPT が答えます。 AI エージェントに質問すると、AI エージェントは計画を立て、5 つの異なるツールを呼び出し、自己修正して、完全な結果を提供します。** チャットボットは反応的であり、ユーザーの質問を待ってから回答します。エージェントは積極的です。エージェントは自ら考え、自ら行動し、自ら結果を評価します。この違いが、2024 年から 2025 年が、Devin (コーディング エージェント) から AutoGPT、そしてカスタマー サポート、データ分析、DevOps 用のエージェントを構築する一連のスタートアップに至るまで、AI エージェントのブームの年となる理由です。この記事では、**AI エージェント** とは何か**、**アーキテクチャ**がどのように機能するか、一般的な**デザイン パターン**について最初から説明し、最後に**ミニ エージェントを最初からコーディング**して、各コンポーネントを深く理解できるようにします。

---

## 1. AIエージェントとは何ですか?

＃＃＃１．１．定義

**AI エージェント** (自律エージェント) は、LLM を「頭脳」として使用し、環境を自動的に**認識**し、目標について**推論**し、タスクを完了するために**行動** (行動する) ことを目的の結果が達成されるまで繰り返し行うソフトウェア システムです。

コアフォーミュラ:

```text
Agent = LLM  +  Tools  +  Memory  +  Goal  +  Loop
         │         │         │         │         │
    Brain/       Hands     Brain      Why       How
    Reasoning    (APIs,    (history,  (task     (iterate
    Engine       code,     context)   to do)    until done)
                 search)
```

＃＃＃１．２．知覚→推論→行動のループ

すべての AI エージェントは次の基本的なループに従います。

```text
┌──────────────────────────────────────────────────────────────────┐
│                    THE AGENT LOOP                                 │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│     ┌───────────┐                                                │
│     │   USER    │                                                │
│     │   GOAL    │                                                │
│     └─────┬─────┘                                                │
│           │                                                       │
│           ▼                                                       │
│     ┌───────────┐     ┌───────────┐     ┌───────────┐           │
│     │ PERCEIVE  │────→│  REASON   │────→│   ACT     │           │
│     │           │     │           │     │           │           │
│     │ • User msg│     │ • Analyze │     │ • Call API│           │
│     │ • Tool    │     │ • Plan    │     │ • Run code│           │
│     │   output  │     │ • Decide  │     │ • Search  │           │
│     │ • Error   │     │   next    │     │ • Write   │           │
│     │   info    │     │   step    │     │   file    │           │
│     └───────────┘     └───────────┘     └─────┬─────┘           │
│           ▲                                     │                 │
│           │           ┌───────────┐             │                 │
│           │           │  MEMORY   │             │                 │
│           │           │           │             │                 │
│           │           │ • History │             │                 │
│           │           │ • Context │             │                 │
│           │           │ • State   │             │                 │
│           │           └───────────┘             │                 │
│           │                                     │                 │
│           └─────────────────────────────────────┘                │
│                   (loop until goal achieved                       │
│                    or max iterations reached)                     │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘
```

＃＃＃１．３．実際の例

あなたはエージェントに次のように伝えます: *「最も人気のある AI エージェント構築フレームワークの上位 5 つを見つけて比較し、Markdown レポートを作成します。」*

エージェントは次のことを行います:
1. **認識:** タスクを理解する - 調査、比較、レポートの作成が必要
2. **理由:** 計画を立てる — ステップ 1 ウェブで検索、ステップ 2 比較、ステップ 3 書く
3. **行為:** Web 検索ツールを呼び出す → 上位 5 つのフレームワークを取得する
4. **認識:** 検索結果を読む → LangGraph、CrewAI、AutoGen、LlamaIndex、Semantic Kernel を参照
5. **理由:** 基準に従って比較する必要がある: 使いやすさ、マルチエージェント、実稼働対応
6. **行為:** 各フレームワークの詳細を確認 → 比較表を作成
7. **理由:** データは十分なので、最終レポートを作成します
8. **行為:** 完全なマークダウン レポートを出力します。

> **注意:** 人間が途中で介入する時間はありません。エージェントは、実行するステップの数、どのツールを呼び出すか、いつ停止するかを決定します。これが**自律性**です。

---

## 2. エージェント vs チャットボット vs パイプライン vs ワークフロー

＃＃＃２．１．比較表

|特長 |チャットボット |パイプライン |ワークフロー | AIエージェント |
|----------|----------|----------|----------|----------|
| **自律性** | ❌ リアクティブ — ユーザーを待ちます | ❌ 固定シーケンス | ⚠️ 条件分岐 | ✅ 自己志向型 |
| **意思決定** |最小限 |なし |ルールベース | LLM 搭載 |
| **ツールの使用** | ❌ いいえ | ❌ ハードコードされたステップ | ⚠️ 定義済みツール | ✅ 動的なツール選択 |
| **計画中** | ❌ いいえ | ❌ いいえ | ⚠️ 事前定義されたフロー | ✅ LLM が計画を生成 |
| **エラー回復** | ❌ ユーザーの再試行 | ❌ 失敗して停止 | ⚠️ フォールバック パス | ✅ 自己修正 |
| **メモリ** |セッションのみ |なし |なし |短期 + 長期 |
| **マルチステップ** | ❌ シングルターン | ✅ 修正された手順 | ✅ 固定ブランチ | ✅ ダイナミックなステップ |
| **例** | ChatGPT、ジェミニ | ETL、CI/CD | n8n、Zapier、エアフロー | Devin、AutoGPT、カーソル |

＃＃＃２．２．アーキテクチャの比較

```text
CHATBOT:                    PIPELINE:
┌─────────┐                 ┌──────┐ ┌──────┐ ┌──────┐
│  User   │                 │Step 1│→│Step 2│→│Step 3│
│    ↓    │                 └──────┘ └──────┘ └──────┘
│  LLM    │                 (fixed order, no branching)
│    ↓    │
│ Response│
└─────────┘
(single turn, no tools)

WORKFLOW:                   AI AGENT:
┌──────┐                    ┌──────────────────────────┐
│Start │                    │ Goal: "Analyze Q3 data"  │
│  ↓   │                    │         ↓                │
│ ◇────┤                    │  ┌──── Plan ────┐        │
│ │ IF │→ Path A            │  │1. Load data  │        │
│ │ELSE│→ Path B            │  │2. Clean      │        │
│ └────┘                    │  │3. Analyze    │        │
│  ...  │                    │  │4. Viz + report│       │
│ End   │                    │  └──────────────┘        │
└──────┘                    │    ↓↑ (loop, retry,      │
(predefined branches)       │     self-correct)         │
                            └──────────────────────────┘
                            (dynamic, autonomous)
```

＃＃＃２．３．いつ何を使うのか？

```text
Task đơn giản, Q&A ──────────────────→ Chatbot
Task fixed steps, data processing ───→ Pipeline
Task conditional, business logic ────→ Workflow (n8n, Airflow)
Task complex, cần reasoning + tools ─→ AI Agent
```

> **ヒント:** 多くの実稼働システムはハイブリッド アプローチ、つまり高レベルでのワークフロー オーケストレーション (たとえば、Airflow は毎日のジョブをスケジュールします) を使用しており、各ノードは複雑なタスクを処理する AI エージェントです。すべてにエージェントを使用しないでください。単純なタスクには単純なツールを使用する必要があります。

---

## 3. AI エージェントのコアコンポーネント

＃＃＃３．１．アーキテクチャの概要

```text
┌──────────────────────────────────────────────────────────────────────┐
│                       AI AGENT ARCHITECTURE                           │
├──────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  ┌──────────────────────────────────────────────────────────────┐    │
│  │                     🧠 BRAIN (LLM)                           │    │
│  │                                                               │    │
│  │  ┌──────────┐  ┌───────────────┐  ┌───────────────────┐     │    │
│  │  │ Reasoning│  │   Planning    │  │  Decision-Making  │     │    │
│  │  │ (CoT,    │  │ (decompose   │  │  (which tool?     │     │    │
│  │  │  ReAct)  │  │  into steps) │  │   stop or cont?)  │     │    │
│  │  └──────────┘  └───────────────┘  └───────────────────┘     │    │
│  └──────────────────────────────────────────────────────────────┘    │
│       ▲           │           │           │           ▲              │
│       │           │           │           │           │              │
│  ┌────┴───┐  ┌────▼───┐  ┌───▼────┐  ┌───▼────┐  ┌──┴──────┐     │
│  │PERCEP- │  │ TOOLS  │  │ TOOLS  │  │ TOOLS  │  │ MEMORY  │     │
│  │TION    │  │        │  │        │  │        │  │         │     │
│  │        │  │ Web    │  │ Code   │  │ File   │  │ Short-  │     │
│  │ Input  │  │ Search │  │ Exec   │  │ System │  │ term    │     │
│  │ Parser │  │        │  │        │  │        │  │         │     │
│  │        │  │ API    │  │ DB     │  │ Browser│  │ Long-   │     │
│  │ User   │  │ Calls  │  │ Query  │  │ Control│  │ term    │     │
│  │ Intent │  │        │  │        │  │        │  │         │     │
│  └────────┘  └────────┘  └────────┘  └────────┘  │ Vector  │     │
│                                                    │ Store   │     │
│                                                    └─────────┘     │
│                                                                       │
└──────────────────────────────────────────────────────────────────────┘
```

＃＃＃３．２．要素 1: 認識

知覚とは、エージェントが周囲の世界をどのように「見る」か、つまり入力を受け取り、ツールの結果を解析し、エラー メッセージを読み取る方法です。

|入力タイプ |説明 |例 |
|----------|----------|----------|
|ユーザーメッセージ |最初の質問/リクエスト | "main.py ファイル内のバグを見つける" |
|ツールの出力 |ツール呼び出しの結果 | API からの JSON 応答 |
|エラー/例外 |実行エラー | `FileNotFoundError: main.py` |
|環境の状態 |コンテキスト情報 |現在のディレクトリ、OS、時刻 |
|人間のフィードバック |中間ループ応答 | 「いいえ、JS ではなく Python が必要です」 |

＃＃＃３．３．コンポーネント 2: 頭脳/推論 (LLM)

LLM は「頭脳」であり、最も重要なコンポーネントです。これは 3 つの主なタスクを実行します。

**a) 推論:**
- 問題の理解、情報の分析
- 思考の連鎖: 決定する前に段階的に考える
- 何が足りないのかを判断 → どのツールを呼び出すか

**b) 計画:**
- 大きなタスクを小さなサブタスクに分解する
- 実行順序を決定する
- 各ステップの結果を予測する

**c) 意思決定:**
- 次のステップに最適なツールを選択します
- ツールを使用するか直接回答するかを決定します
- ループを停止するか続行するかを決定します

```text
LLM Reasoning Process:
─────────────────────

User: "Tìm giá Bitcoin hôm nay và so sánh với tuần trước"

LLM Thinking:
  1. Cần giá BTC hiện tại → gọi tool: get_crypto_price("BTC")
  2. Cần giá BTC 7 ngày trước → gọi tool: get_crypto_price("BTC", days_ago=7)
  3. Khi có cả 2 giá → tính % thay đổi
  4. Format kết quả → trả về user

Decision: Gọi tool get_crypto_price trước
```

＃＃＃３．４．コンポーネント 3: アクション

アクションはエージェントの「手」であり、ツールを通じて意思決定を実行します。

|ツールカテゴリ |例 |機能 |
|--------------|----------|---------------|
| **ウェブ検索** | Google、Bing、Tavily |リアルタイム情報を見つける |
| **コードの実行** | Python REPL、サンドボックス |コードを実行し、計算します。
| **API 呼び出し** | REST、グラフQL |外部サービスと通信する |
| **ファイル システム** |ファイルの読み取り/書き込み |ファイルとフォルダーの操作 |
| **データベース** | SQL クエリ |データのクエリ、挿入、更新 |
| **ブラウザ** |劇作家、セレン | Webスクレイピング、自動化 |
| **コミュニケーション** |メール、スラック |通知、メッセージを送信する |

＃＃＃３．５。コンポーネント 4: メモリ

記憶は、エージェントがステップやセッション全体のコンテキストを記憶するのに役立ちます。

```text
┌──────────────────────────────────────────────────────────┐
│                    AGENT MEMORY TYPES                      │
├──────────────────────────────────────────────────────────┤
│                                                           │
│  SHORT-TERM MEMORY (Working Memory)                       │
│  ┌─────────────────────────────────────────────────┐     │
│  │ • Conversation history (current session)         │     │
│  │ • Tool call results (this loop iteration)        │     │
│  │ • Current plan/state                             │     │
│  │ → Stored in: LLM context window                  │     │
│  │ → Lifetime: single conversation                  │     │
│  └─────────────────────────────────────────────────┘     │
│                                                           │
│  LONG-TERM MEMORY (Persistent Memory)                     │
│  ┌─────────────────────────────────────────────────┐     │
│  │ • User preferences learned over time             │     │
│  │ • Past task summaries                            │     │
│  │ • Knowledge base (RAG)                           │     │
│  │ → Stored in: Vector DB, external DB              │     │
│  │ → Lifetime: across conversations                 │     │
│  └─────────────────────────────────────────────────┘     │
│                                                           │
│  EPISODIC MEMORY (Experience)                             │
│  ┌─────────────────────────────────────────────────┐     │
│  │ • Previous successful strategies                 │     │
│  │ • Mistakes and corrections                       │     │
│  │ • Solution patterns for similar tasks            │     │
│  │ → Stored in: Vector DB with metadata             │     │
│  │ → Lifetime: permanent, growing                   │     │
│  └─────────────────────────────────────────────────┘     │
│                                                           │
└──────────────────────────────────────────────────────────┘
```

> **ヒント:** 短期記憶は、LLM のコンテキスト ウィンドウによって制限されます (GPT-4o の場合は 128K トークン、Claude 3.5 の場合は 200K トークン)。会話が長すぎる場合は、要約するか切り捨てる必要があります。これは、実稼働エージェントを構築する際の最大の課題の 1 つです。

---

## 4. エージェントのアーキテクチャ

これは最も重要な部分です。エージェントのアーキテクチャを理解することは、システムを適切に設計するのに役立ちます。

＃＃＃４．１． ReAct (推論 + 行動)

**ReAct** (Yao et al., 2022) は現在最も人気のあるパターンです。アイデア: LLM は **Thought** (思考) と **Action** (行動) を交互に繰り返し、次に進む前に結果を **観察**します。

```text
┌────────────────────────────────────────────────────────┐
│                    ReAct PATTERN                        │
├────────────────────────────────────────────────────────┤
│                                                         │
│  Question: "Ai là CEO của công ty tạo ra iPhone,       │
│             và người đó sinh năm bao nhiêu?"            │
│                                                         │
│  ┌──────────────────────────────────────────┐          │
│  │ Thought 1: Tôi cần tìm công ty tạo iPhone│          │
│  │ Action 1:  search("company created iPhone")│         │
│  │ Observation 1: Apple Inc.                  │          │
│  └──────────────────────────────────────────┘          │
│                    │                                    │
│                    ▼                                    │
│  ┌──────────────────────────────────────────┐          │
│  │ Thought 2: Apple → CEO hiện tại là Tim Cook│        │
│  │ Action 2:  search("Tim Cook birth year")   │        │
│  │ Observation 2: 1960                         │        │
│  └──────────────────────────────────────────┘          │
│                    │                                    │
│                    ▼                                    │
│  ┌──────────────────────────────────────────┐          │
│  │ Thought 3: Đã đủ info → trả lời          │          │
│  │ Final Answer: Tim Cook, CEO Apple,        │          │
│  │              sinh năm 1960                │          │
│  └──────────────────────────────────────────┘          │
│                                                         │
│  Loop: Thought → Action → Observation → Thought → ...   │
│  Stop: Khi đủ info để trả lời (Final Answer)           │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**利点:**
- シンプルで実装が簡単
- 解釈可能 — 推論の痕跡を読み取ることができます
- 関数呼び出しAPIとの良好な互換性
- 最も人気があり、多くのフレームワークをサポート

**短所:**
- 貪欲 — 全体像ではなく、段階的に決定します
- 初期段階で間違った方向に進むと行き詰まりやすい
- バックトラックメカニズムなし

＃＃＃４．２．計画と実行

**計画と実行** (Wang et al., 2023) では、計画と実行を 2 つのフェーズに分けています。

```text
┌─────────────────────────────────────────────────────────┐
│              PLAN-AND-EXECUTE ARCHITECTURE                │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  ┌─────────────────────────────────────────────┐        │
│  │              PLANNER (LLM)                   │        │
│  │                                              │        │
│  │  Input: "Build a sentiment analysis API"     │        │
│  │                                              │        │
│  │  Plan:                                       │        │
│  │   Step 1: Choose sentiment model (BERT/RoBERTa)│      │
│  │   Step 2: Write inference function            │        │
│  │   Step 3: Create FastAPI endpoint             │        │
│  │   Step 4: Add error handling + validation     │        │
│  │   Step 5: Write tests                         │        │
│  │   Step 6: Create Dockerfile                   │        │
│  └────────────────────┬────────────────────────┘        │
│                       │                                  │
│                       ▼                                  │
│  ┌─────────────────────────────────────────────┐        │
│  │            EXECUTOR (Agent + Tools)           │        │
│  │                                              │        │
│  │  Step 1 → [code_exec] → model selected ✓    │        │
│  │  Step 2 → [write_file] → inference.py ✓     │        │
│  │  Step 3 → [write_file] → main.py ✓          │        │
│  │  Step 4 → [edit_file] → error handling ✓    │        │
│  │  Step 5 → [code_exec] → tests pass ✓       │        │
│  │  Step 6 → [write_file] → Dockerfile ✓      │        │
│  └────────────────────┬────────────────────────┘        │
│                       │                                  │
│                       ▼                                  │
│  ┌─────────────────────────────────────────────┐        │
│  │           RE-PLANNER (optional)               │        │
│  │  If step fails → adjust remaining plan        │        │
│  │  If new info → add/remove steps               │        │
│  └─────────────────────────────────────────────┘        │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

**利点:**
- アクションを実行する前にタスクの概要を確認してください
- 複雑な複数ステップのタスクに効果的
- 問題が発生した場合に再計画できる

**短所:**
- タスクが明確でない場合、最初の計画が間違っている可能性があります
- 単純なタスクのオーバーヘッド (不必要な計画)
- 再計画によりレイテンシが追加される

＃＃＃４．３．リフレクション (自己批判ループ)

**Reflexion** (Shinn et al., 2023) は、**自己評価**の機能を追加します。エージェントはタスクを実行し、結果を批評し、結果が良くない場合は再試行します。

```text
┌─────────────────────────────────────────────────────────┐
│                REFLEXION ARCHITECTURE                     │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  ┌──────────┐                                           │
│  │  Task:   │                                           │
│  │ "Write   │                                           │
│  │  sort    │                                           │
│  │  algo"   │                                           │
│  └────┬─────┘                                           │
│       │                                                  │
│       ▼                                                  │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐          │
│  │  ACTOR   │───→│EVALUATOR │───→│REFLECTOR │          │
│  │          │    │          │    │          │          │
│  │ Generate │    │ Run tests│    │ "My sort │          │
│  │ solution │    │ Check    │    │  fails on│          │
│  │          │    │ result   │    │  negative│          │
│  │          │    │          │    │  nums"   │          │
│  └──────────┘    └──────────┘    └────┬─────┘          │
│       ▲                               │                  │
│       │         ┌──────────┐          │                  │
│       │         │ MEMORY   │          │                  │
│       └─────────│          │←─────────┘                  │
│                 │ Store    │                              │
│                 │ learnings│  "Need to handle             │
│                 │ from     │   negative numbers.          │
│                 │ failures │   Use abs() comparison"      │
│                 └──────────┘                              │
│                                                          │
│  Loop: Act → Evaluate → Reflect → Remember → Retry       │
│  Stop: Tests pass OR max_retries reached                  │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

**利点:**
- 挑戦するたびに自己改善
- 間違いから学びましょう — 同じ間違いを繰り返さないでください
- コーディングタスク (テスト主導) に特に適しています

**短所:**
- 多数の LLM 呼び出し → トークン + レイテンシのコストがかかる
- 明確な評価関数が必要
- タスクが難しすぎる場合は無限ループすることができます

＃＃＃４．４． LATS (言語エージェント ツリー検索)

**LATS** (Zhou et al., 2023) は、木探索 (AlphaGo のモンテカルロ木探索のような) と LLM エージェントを組み合わせています。

```text
┌──────────────────────────────────────────────────────────┐
│                 LATS ARCHITECTURE                          │
├──────────────────────────────────────────────────────────┤
│                                                           │
│  Root: "Debug this API returning 500 error"               │
│                    │                                      │
│         ┌──────────┼──────────┐                          │
│         ▼          ▼          ▼                           │
│    ┌─────────┐ ┌─────────┐ ┌─────────┐                  │
│    │ Path A  │ │ Path B  │ │ Path C  │                  │
│    │ Check   │ │ Check   │ │ Check   │                  │
│    │ logs    │ │ DB conn │ │ API     │                  │
│    │ Score:7 │ │ Score:4 │ │ schema  │                  │
│    └────┬────┘ └─────────┘ │ Score:8 │                  │
│         │                   └────┬────┘                  │
│         │                        │                        │
│    ┌────┴────┐             ┌────┴────┐                   │
│    │ Path A1 │             │ Path C1 │  ← expand best    │
│    │ Found   │             │ Schema  │                   │
│    │ timeout │             │ mismatch│                   │
│    │ error   │             │ found!  │                   │
│    │ Score:6 │             │ Score:9 │ ← SOLUTION ✓      │
│    └─────────┘             └─────────┘                   │
│                                                           │
│  Strategy: Explore multiple paths → score each            │
│           → expand best → backtrack if needed             │
│                                                           │
└──────────────────────────────────────────────────────────┘
```

**利点:**
- 複数の解決策を同時に検討
- 後戻りできます - 行き詰ることはありません
- 複雑な推論のための最高品質

**短所:**
- 計算量が非常に多い (パスごとに多くの LLM 呼び出しが必要)
- 複雑な実装
- 単純なタスクには過剰な作業

＃＃＃４．５。 4 つのアーキテクチャを比較する

|基準 |反応する |計画と実行 |反射 |ラッツ |
|----------|------|----------|----------|----------|
| **複雑さ** | ⭐低 | ⭐⭐中 | ⭐⭐中 | ⭐⭐⭐高い |
| **品質** |良い |良い-素晴らしい |すばらしい |素晴らしい |
| **レイテンシ** |速い |中 |遅い |とても遅い |
| **トークンコスト** |低い |中 |高 |非常に高い |
| **エラー回復** | ❌ なし | ⚠️ 再計画 | ✅ 自己修正 | ✅ バックトラック |
| **解釈可能性** | ✅ 高 | ✅ 高 | ✅ 高 | ⚠️中 |
| **こんな用途に最適** |簡単なQ&A、検索 |複数ステップのプロジェクト |遺伝子コード、書き込み |複雑な推論 |
| **フレームワーク** | LangChain、ほとんど |ランググラフ |カスタム |カスタム |

> **ヒント:** 多くの場合、本番環境は **ReAct** (シンプルで高速) から始まり、複雑なタスクを処理する必要がある場合は **計画と実行** に進みます。 **Reflexion** と **LATS** は、速度よりも品質が重要な場合に、一か八かのタスク (コーディング、リサーチ) に使用されます。

---

## 5. エージェント ループの詳細

＃＃＃５．１．擬似コードのループ

```python
from typing import Literal

def agent_loop(
    goal: str,
    tools: dict,
    llm,
    max_iterations: int = 10,
) -> str:
    """Simplified agent loop — core pattern mọi framework đều follow."""
    
    # Initialize state
    messages = [
        {"role": "system", "content": SYSTEM_PROMPT},
        {"role": "user", "content": goal},
    ]
    iteration = 0
    
    while iteration < max_iterations:
        iteration += 1
        print(f"\n--- Iteration {iteration} ---")
        
        # REASONING: LLM quyết định next step
        response = llm.chat(messages, tools=tools)
        
        # CHECK: LLM muốn gọi tool hay trả lời?
        if response.has_tool_calls:
            # ACTION: Execute tool(s)
            for tool_call in response.tool_calls:
                tool_name = tool_call.function.name
                tool_args = tool_call.function.arguments
                
                print(f"  Tool: {tool_name}({tool_args})")
                
                # Execute tool
                result = tools[tool_name].execute(**tool_args)
                
                # PERCEPTION: Feed result back
                messages.append({
                    "role": "tool",
                    "tool_call_id": tool_call.id,
                    "content": str(result),
                })
        else:
            # STOP: LLM decided to give final answer
            final_answer = response.content
            print(f"  Final Answer: {final_answer}")
            return final_answer
    
    return "Max iterations reached — could not complete task."
```

＃＃＃５．２．状態管理

エージェントの状態には、任意の時点で実行を継続するために必要なすべての情報が含まれます。

```text
┌────────────────────────────────────────────────────────┐
│                    AGENT STATE                          │
├────────────────────────────────────────────────────────┤
│                                                         │
│  state = {                                              │
│    "messages": [...],      # Full conversation history  │
│    "current_plan": [...],  # Remaining steps            │
│    "completed_steps": [...], # Done steps + results     │
│    "tool_results": {...},  # Cached tool outputs        │
│    "iteration": 5,         # Current loop count         │
│    "status": "running",    # running | completed | error│
│    "metadata": {           # Extra context              │
│       "start_time": "...",                              │
│       "tokens_used": 4520,                              │
│       "tools_called": ["search", "code_exec"],          │
│    }                                                    │
│  }                                                      │
│                                                         │
└────────────────────────────────────────────────────────┘
```

＃＃＃５．３．停止条件

エージェント ループは、いつ停止するかを認識する必要があります。永久に実行することはできません。

|停止条件 |説明 |優先事項 |
|---------------------|----------|----------|
| **タスクが完了しました** | LLM は最終的な回答を支払うことを決定しました | ✅ プライマリ |
| **最大反復数** |ループ制限に達しました (例: 15) | 🛡️ 安全性 |
| **最大トークン数** |予算外のトークン | 🛡️ 安全性 |
| **タイムアウト** |制限時間を超えました | 🛡️ 安全性 |
| **エラーしきい値** |連続エラーが多すぎます | 🛡️ 安全性 |
| **人間による中断** |ユーザーがタスクをキャンセルまたは変更する | ⚠️ オーバーライド |
| **繰り返されるアクション** |エージェントは同じ引数で同じツールを呼び出します。 🔄 ループ検出 |

> **ヒント:** 運用環境では常に **max_iterations** と **timeout** を設定します。エージェント ループには安全制限がない = 無限のコストがかかるたとえば、2.50 ドル/100 万入力トークンの GPT-4o では、長いコンテキストを含む 50 回の反復のエージェント ループの場合、リクエストごとに 5 ～ 10 ドルの費用がかかる可能性があります。

---

## 6. AI エージェントの分類

＃＃＃６．１．単純なものから複雑なものまで分類

古典的な AI 教科書 (Russell & Norvig) に基づいて、単純なものから複雑なものまで 5 種類のエージェントがあります。

```text
Complexity & Capability →
─────────────────────────────────────────────────────────→

┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐
│  Simple    │ │  Model-    │ │  Goal-     │ │  Utility-  │ │  Learning  │
│  Reflex    │ │  Based     │ │  Based     │ │  Based     │ │  Agent     │
│            │ │            │ │            │ │            │ │            │
│ IF rain    │ │ Tracks     │ │ Has a      │ │ Optimizes  │ │ Improves   │
│ THEN       │ │ world      │ │ goal to    │ │ for best   │ │ over time  │
│ umbrella   │ │ state      │ │ achieve    │ │ outcome    │ │ from exp.  │
│            │ │            │ │            │ │            │ │            │
│ No memory  │ │ Has memory │ │ Plans      │ │ Evaluates  │ │ Self-      │
│ No goal    │ │ Predicts   │ │ actions    │ │ tradeoffs  │ │ improving  │
└────────────┘ └────────────┘ └────────────┘ └────────────┘ └────────────┘
     ▲              ▲              ▲              ▲              ▲
     │              │              │              │              │
  Thermostat    Spam filter    GPS nav       Trading bot    AlphaGo
  Rule engine   Autocomplete   Game AI      Recommendation  Modern LLM
                                             system          Agents
```

＃＃＃６．２．詳細比較表

|タイプ |メモリ |企画 |学習 | AI エージェントの例 |現実世界 |
|----------|----------|----------|----------|-----------|-------------|
| **単純な反射** | ❌ なし | ❌ なし | ❌ なし | If-else チャットボット |サーモスタット、自動販売機 |
| **モデルベース** | ✅ 世界のモデル | ❌ なし | ❌ なし |コンテキスト認識アシスタント |スパムフィルター、オートコンプリート |
| **目標ベース** | ✅ 世界のモデル | ✅ 検索/計画 | ❌ なし | ReAct エージェントとツール | GPSナビゲーション、ゲームAI |
| **ユーティリティベース** | ✅ 世界のモデル | ✅ 最適化された | ❌ なし |エージェントが最適なツールを選択 |取引ボット、広告入札 |
| **学習** | ✅ エピソード | ✅ アダプティブ | ✅ はい |反射剤 | AlphaGo、最新の AI エージェント |

＃＃＃６．３．最新の LLM エージェントへのマッピング

```text
Modern LLM Agent = LEARNING AGENT (loại phức tạp nhất)

Tại sao?
  ✓ Memory: conversation history + vector DB (long-term)
  ✓ Planning: LLM generates step-by-step plans
  ✓ Learning: Reflexion — tự critique và cải thiện
  ✓ Utility: LLM evaluates multiple options, chọn best
  ✓ Model-Based: LLM có "world model" from training data

Tuy nhiên, cũng có giới hạn:
  ✗ Learning không persistent (trừ khi save to memory)
  ✗ World model bị outdated (training cutoff)
  ✗ Planning chưa reliable (hallucinate plan)
```

> **ヒント:** エージェントを設計するときは、問題を解決できる最も単純なタイプから始めてください。すべてのタスクに学習エージェントが必要なわけではありません。多くの場合、目標ベースのエージェント (ReAct + ツール) で十分です。エージェント アーキテクチャの過剰なエンジニアリングはよくある間違いです。

---

## 7. 現実世界の AI エージェントの使用例

＃＃＃７．１．ユースケースの概要表

|カテゴリー |エージェント |使用したツール |建築 |
|----------|----------|---------------|--------------|
| **コーディング** | GitHub 副操縦士、カーソル、Devin |コード実行、ファイル システム、git、ブラウザ |計画と実行 + 反省 |
| **カスタマーサポート** |インターコムフィン、Zendesk AI |ナレッジベース、チケット発行 API、CRM |リアクト + RAG |
| **データ分析** | Julius AI、コードインタープリタ | Python REPL、チャート作成、ファイル I/O |反応する |
| **研究** |困惑、誘発 | Web検索、PDFパーサー、引用DB | ReAct + マルチソース |
| **DevOps** | PagerDuty AI、クビヤ | kubectl、クラウド API、モニタリング |計画と実行 |
| **販売** |クレイ、アポロ AI | CRM、電子メール、LinkedIn、エンリッチメント |ワークフロー + エージェント ハイブリッド |
| **法的** |ハーベイ AI |文献検索、引用、草稿 | RAG + リアクト |
| **ヘルスケア** |ヒポクラテスAI |医療 KB、患者記録、スケジュール | RAG + ガードレール |

＃＃＃７．２．ケーススタディ: コーディング エージェント (Devin のような)

```text
┌──────────────────────────────────────────────────────────────┐
│                  CODING AGENT ARCHITECTURE                     │
├──────────────────────────────────────────────────────────────┤
│                                                               │
│  User: "Add user authentication to my FastAPI app"            │
│                                                               │
│  PLANNER:                                                     │
│  ┌─────────────────────────────────────────────────┐         │
│  │ 1. Analyze existing codebase (read files)        │         │
│  │ 2. Design auth schema (JWT + bcrypt)             │         │
│  │ 3. Install dependencies (python-jose, passlib)   │         │
│  │ 4. Create User model + migration                 │         │
│  │ 5. Write auth utils (hash, verify, JWT)          │         │
│  │ 6. Create auth endpoints (register, login)       │         │
│  │ 7. Add middleware for protected routes            │         │
│  │ 8. Write tests                                   │         │
│  │ 9. Run tests, fix if failed                      │         │
│  └─────────────────────────────────────────────────┘         │
│                                                               │
│  EXECUTOR:                                                    │
│  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐            │
│  │ File   │  │Terminal│  │ Code   │  │Browser │            │
│  │ System │  │ (bash) │  │ Editor │  │(docs)  │            │
│  │ R/W    │  │ pip,git│  │ Edit   │  │ Search │            │
│  └────────┘  └────────┘  └────────┘  └────────┘            │
│                                                               │
│  REFLEXION:                                                   │
│  Test failed → Read error → Fix code → Retry → Pass ✓       │
│                                                               │
└──────────────────────────────────────────────────────────────┘
```

＃＃＃７．３．ケーススタディ: カスタマーサポートエージェント

```text
Customer: "Tôi đặt hàng 3 ngày rồi mà chưa nhận được"

Agent Flow:
  1. [PERCEIVE] Parse intent: order tracking inquiry
  2. [REASON]   Cần order ID → hỏi customer hoặc lookup by email
  3. [ACT]      Call CRM API: get_orders(email="customer@...")
  4. [PERCEIVE] Order #12345 — status: "shipped", tracking: VN123456
  5. [REASON]   Có tracking → check shipping API
  6. [ACT]      Call shipping API: track("VN123456")
  7. [PERCEIVE] "In transit — estimated delivery: tomorrow"
  8. [REASON]   Đủ info → compose response
  9. [ACT]      Reply: "Đơn hàng #12345 đang trên đường giao,
                        dự kiến nhận ngày mai. Tracking: VN123456"

Total: 4 tool calls, ~3 seconds, no human intervention
```

---

## 8. 実践: 最小限のエージェントを最初から構築する

### 8.1。インストール

```bash
pip install openai
```

### 8.2。ツールの定義

```python
import json
import math
from datetime import datetime

# Tool definitions (OpenAI function calling format)
TOOLS = [
    {
        "type": "function",
        "function": {
            "name": "calculate",
            "description": "Evaluate a math expression. Supports +, -, *, /, sqrt, pow.",
            "parameters": {
                "type": "object",
                "properties": {
                    "expression": {
                        "type": "string",
                        "description": "Math expression, e.g. '2 + 3 * 4' or 'sqrt(144)'"
                    }
                },
                "required": ["expression"]
            }
        }
    },
    {
        "type": "function",
        "function": {
            "name": "get_current_time",
            "description": "Get current date and time.",
            "parameters": {
                "type": "object",
                "properties": {}
            }
        }
    },
    {
        "type": "function",
        "function": {
            "name": "search_knowledge",
            "description": "Search a knowledge base for information.",
            "parameters": {
                "type": "object",
                "properties": {
                    "query": {
                        "type": "string",
                        "description": "Search query"
                    }
                },
                "required": ["query"]
            }
        }
    },
]

# Tool implementations
KNOWLEDGE_BASE = {
    "python": "Python is a high-level programming language created by Guido van Rossum in 1991.",
    "fastapi": "FastAPI is a modern Python web framework for building APIs, created by Sebastián Ramírez.",
    "langchain": "LangChain is a framework for building LLM applications, created by Harrison Chase in 2022.",
}

def execute_tool(name: str, args: dict) -> str:
    """Execute a tool and return result as string."""
    if name == "calculate":
        try:
            # Safe math evaluation (production cần sandbox!)
            allowed = {
                "sqrt": math.sqrt, "pow": pow, "abs": abs,
                "sin": math.sin, "cos": math.cos, "pi": math.pi,
            }
            result = eval(args["expression"], {"__builtins__": {}}, allowed)
            return f"Result: {result}"
        except Exception as e:
            return f"Error: {e}"
    
    elif name == "get_current_time":
        return f"Current time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}"
    
    elif name == "search_knowledge":
        query = args["query"].lower()
        matches = [v for k, v in KNOWLEDGE_BASE.items() if k in query]
        return matches[0] if matches else "No relevant information found."
    
    return f"Unknown tool: {name}"
```

### 8.3。エージェント ループ — ReAct スタイル

```python
from openai import OpenAI

client = OpenAI()  # OPENAI_API_KEY from env

SYSTEM_PROMPT = """You are a helpful AI assistant with access to tools.
Use tools when needed to answer questions accurately.
Think step-by-step before deciding which tool to use.
When you have enough information, provide a final answer directly."""


def run_agent(user_query: str, max_iterations: int = 5) -> str:
    """Run a minimal ReAct-style agent loop."""
    
    messages = [
        {"role": "system", "content": SYSTEM_PROMPT},
        {"role": "user", "content": user_query},
    ]
    
    for i in range(max_iterations):
        print(f"\n🔄 Iteration {i + 1}")
        
        # LLM decides: use tool or answer directly
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=messages,
            tools=TOOLS,
            tool_choice="auto",
        )
        
        msg = response.choices[0].message
        messages.append(msg)  # Add assistant message to history
        
        # Check if LLM wants to call tools
        if msg.tool_calls:
            for tool_call in msg.tool_calls:
                func_name = tool_call.function.name
                func_args = json.loads(tool_call.function.arguments)
                
                print(f"  🔧 Tool: {func_name}({func_args})")
                
                # Execute tool
                result = execute_tool(func_name, func_args)
                print(f"  📋 Result: {result}")
                
                # Feed result back to LLM
                messages.append({
                    "role": "tool",
                    "tool_call_id": tool_call.id,
                    "content": result,
                })
        else:
            # No tool calls = final answer
            print(f"\n✅ Final Answer: {msg.content}")
            return msg.content
    
    return "⚠️ Max iterations reached."


# Test the agent
if __name__ == "__main__":
    # Test 1: Simple calculation
    run_agent("What is sqrt(144) + 10 * 3?")
    
    # Test 2: Knowledge search
    run_agent("Tell me about LangChain and who created it")
    
    # Test 3: Multi-step reasoning
    run_agent("What time is it now, and what is 24 minus the current hour?")
```

### 8.4。サンプル出力

```text
🔄 Iteration 1
  🔧 Tool: calculate({"expression": "sqrt(144) + 10 * 3"})
  📋 Result: Result: 42.0

🔄 Iteration 2

✅ Final Answer: sqrt(144) + 10 * 3 = 42.0
   - sqrt(144) = 12
   - 10 * 3 = 30
   - 12 + 30 = 42
```

＃＃＃８．５。アップグレード: メモリとエラー処理を追加する

```python
class SimpleAgent:
    """Agent với memory và error handling."""
    
    def __init__(self, model: str = "gpt-4o-mini", max_iterations: int = 10):
        self.client = OpenAI()
        self.model = model
        self.max_iterations = max_iterations
        self.conversation_history = []  # Long-term memory (across calls)
    
    def run(self, query: str) -> str:
        messages = [
            {"role": "system", "content": SYSTEM_PROMPT},
            # Include recent conversation history (short-term memory)
            *self.conversation_history[-10:],  # Last 5 exchanges
            {"role": "user", "content": query},
        ]
        
        consecutive_errors = 0
        
        for i in range(self.max_iterations):
            try:
                response = self.client.chat.completions.create(
                    model=self.model,
                    messages=messages,
                    tools=TOOLS,
                    tool_choice="auto",
                )
                
                msg = response.choices[0].message
                messages.append(msg)
                consecutive_errors = 0  # Reset error counter
                
                if msg.tool_calls:
                    for tc in msg.tool_calls:
                        name = tc.function.name
                        args = json.loads(tc.function.arguments)
                        result = execute_tool(name, args)
                        
                        messages.append({
                            "role": "tool",
                            "tool_call_id": tc.id,
                            "content": result,
                        })
                else:
                    # Save to conversation history
                    self.conversation_history.append(
                        {"role": "user", "content": query}
                    )
                    self.conversation_history.append(
                        {"role": "assistant", "content": msg.content}
                    )
                    return msg.content
                    
            except Exception as e:
                consecutive_errors += 1
                if consecutive_errors >= 3:
                    return f"Agent stopped: too many consecutive errors. Last: {e}"
                messages.append({
                    "role": "user",
                    "content": f"Error occurred: {e}. Please try a different approach.",
                })
        
        return "Max iterations reached."


# Usage
agent = SimpleAgent()
print(agent.run("What is 2^10?"))
print(agent.run("And what about 2^20?"))  # Agent remembers previous context
```

> **ヒント:** 上記のコードは **最小限の実行可能なエージェント** であり、概念を理解するには十分です。運用エージェントには、構造化ログ、トークンカウント、レート制限、非同期実行、コード実行のための適切なサンドボックス化、包括的なエラー処理を追加する必要があります。次の記事では、各セクションについて詳しく説明します。

---

## 9. エージェント設計パターン — 概要

＃＃＃９．１．パターン選択ガイド

```text
                        Chọn Agent Architecture nào?
                                │
                    ┌───────────┴───────────┐
                    │                       │
              Task đơn giản?          Task phức tạp?
              (1-3 tool calls)        (multi-step)
                    │                       │
                    ▼                       │
                  ReAct              ┌──────┴──────┐
                                    │             │
                              Cần planning?   Cần self-fix?
                                    │             │
                                    ▼             ▼
                            Plan-and-Execute  Reflexion
                                    │
                              ┌─────┴─────┐
                              │           │
                        One best path? Multiple paths?
                              │           │
                              ▼           ▼
                         Keep P&E       LATS
```

＃＃＃９．２．生産チェックリスト

実稼働用のエージェントを構築する場合は、常に次のことを確認してください。

|側面 |何を確認するか |なぜ |
|------|--------------|-----|
| **安全限界** | max_iterations、タイムアウト、トークンバジェット |無限ループ、コスト爆発を回避 |
| **エラー処理** |再試行ロジック、フォールバック、グレースフル デグラデーション |エージェントは回復力がなければなりません |
| **可観測性** |各ステップをログに記録します: 思考、ツールの呼び出し、結果 |デバッグと改善 |
| **ガードレール** |入出力検証、コンテンツフィルタリング |有害な行為を防止する |
| **人間参加型** |破壊的行為の承認 |セーフティネット |
| **コスト追跡** |リクエストごとのトークン使用量、1 日の予算 |支出をコントロールする |
| **テスト** |単体テストツール、統合テストフルループ |信頼性 |
| **評価** |成功率、レイテンシ、タスクあたりのコスト |継続的な改善 |

---

## 概要

この記事では、定義からアーキテクチャ、実践的な実装に至るまで、AI エージェントのすべての基礎を説明しました。

**重要なポイント:**

1. **AI エージェント = LLM + ツール + メモリ + 目標 + ループ** — チャットボットとの主な違いは **自律性** (自己決定、自己行動、自己修正) です。
2. **4 つのコア コンポーネント:** 知覚、脳/推論、行動、記憶 — すべてのエージェントはこれら 4 つのコンポーネントを備えています。
3. **4 つの主要なアーキテクチャ:** ReAct (シンプル、高速)、計画と実行 (複雑なタスク用)、Reflexion (自己改善)、LATS (複数のパスの探索) — 適切な問題に対して適切なアーキテクチャを選択します。
4. **エージェント ループ** は、核となるパターンです: 認識 → 理由 → 行動 → ループ。明確な停止条件が必要です。
5. **分類:** 単純な反射から学習エージェントまで — 最新の LLM エージェントは最も複雑なタイプですが、必ずしもそのレベルを必要とするわけではありません。
6. **本番エージェント**には、安全制限、エラー処理、可観測性、ガードレール、および人間参加者が必要です。
7. **シンプルに始める** — ReAct + いくつかのツールで多くのユースケースに十分です。オーバースペックにしないでください。

```text
Agent Knowledge Map (Bài 12):

  ┌──────────────────────────────────────────────────┐
  │  WHAT: Agent = LLM + Tools + Memory + Loop       │
  │  WHY:  Autonomous task completion                 │
  │  HOW:  Perceive → Reason → Act → Loop            │
  │                                                   │
  │  Architectures:                                   │
  │    ReAct ──→ Plan-and-Execute ──→ Reflexion ──→ LATS│
  │    (simple)   (structured)      (self-fix)   (search)│
  │                                                   │
  │  Types: Reflex → Model → Goal → Utility → Learning│
  │                                                   │
  │  Production: Limits + Logging + Guardrails +      │
  │              Human-in-the-loop + Evaluation       │
  └──────────────────────────────────────────────────┘
```

---

## 次の記事

**レッスン 13: ツール呼び出し、関数呼び出し、ReAct パターン** — エージェントの最も重要なコンポーネントである **ツール** について詳しく説明します。 OpenAI Function Calling API を使用してツールを定義し、完全な ReAct パターンを実装し、カスタム ツール (Web 検索、データベース クエリ、コード実行) を構築し、運用環境でツール呼び出しのエラー処理と再試行ロジックを処理する方法を学びます。この記事のミニ エージェントから、10 以上のツールを備えたリアル エージェント システムにアップグレードします。

