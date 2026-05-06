---
id: 019e0a01-bb15-7001-c001-ee1500000001
title: 'レッスン 15: AI エージェントの記憶、計画、推論'
slug: bai-15-memory-planning-reasoning-ai-agent
description: >-
  記憶の種類: 短期 (会話)、長期 (ベクター ストア)、エピソード。計画戦略:
  タスクの分解、サブ目標の生成。思考連鎖の推論。自己反省、反復改良。人間参加型パターン。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 14
section_title: 'パート 4: AI エージェントとエージェントベースのシステム'
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: 'AI エージェント エンジニア: ゼロから本番環境まで'
  slug: ai-agent-engineer-tu-zero-den-production
locale: ja
---

> **エージェントには金魚のような記憶力はありません。話すたびにすべてを忘れてしまいます。** 計画の立て方を知らないエージェントは、ただランダムに行動するだけです。そして、推論を知らないエージェントは、単にプロンプ​​トを「オウム返し」することもできます。 **記憶**、**計画**、**推論**の 3 つの機能により、単純なチャットボットが真にインテリジェントな AI エージェントに変わります。この記事では、**LangChain**、**LangGraph**、**Redis**、**PostgreSQL** を使用して各機能を実装し、記憶、計画、推論が可能な完全なエージェントに統合して、各機能を詳しく説明します。

---

## 1. 記憶はなぜ重要ですか?

＃＃＃１．１．記憶のないエージェント＝金魚

毎日アシスタントに電話をかけますが、アシスタントは何も覚えていないことを想像してください。

```text
Ngày 1: "Tôi thích Python, đang học AI"
Agent:  "Tuyệt vời! Tôi sẽ giúp bạn học AI với Python."

Ngày 2: "Tiếp tục bài hôm qua đi"
Agent:  "Xin lỗi, bạn là ai? Bạn muốn học gì?"  ← 🐟 Goldfish mode

Ngày 3: "Nhắc lại preferences của tôi"
Agent:  "Tôi không có thông tin gì về bạn."      ← 🐟🐟🐟
```

ここに核心的な問題があります: **LLM は仕様によりステートレスである**。各 API 呼び出しは新しい会話です。メモリ層がないと、エージェントはすべてのコンテキストを失います。

＃＃＃１．２．コンテキストウィンドウ — ハードリミット

各 LLM には、制限された **コンテキスト ウィンドウ**があります。

|モデル |コンテキストウィンドウ | ~本文ページ数 |
|------|---------------|--------------|
| GPT-4o | 128,000 トークン | ～300ページ |
|クロード 3.5 ソネット | 200,000 トークン | ~500 ページ |
|ジェミニ 1.5 プロ | 200万トークン | ~5000 ページ |
|ラマ 3.1 | 128,000 トークン | ～300ページ |

大変そうに思えますが、本番環境では次のようになります。

```text
Context Window Budget (128K tokens):
┌──────────────────────────────────────┐
│ System prompt          ~2K tokens    │
│ Tool definitions       ~5K tokens    │
│ Conversation history   ~40K tokens   │  ← Tăng nhanh!
│ Retrieved documents    ~30K tokens   │
│ Current task context   ~10K tokens   │
│ ─────────────────────────────────    │
│ Còn lại cho response   ~41K tokens   │
│                                      │
│ ⚠️  Sau 50 lượt chat → overflow!     │
└──────────────────────────────────────┘
```

メモリ レイヤーは、エージェントがすべての情報をコンテキスト ウィンドウに詰め込むのではなく、**効果的に情報を管理**するのに役立ちます。

＃＃＃１．３．三つの能力: 記憶力、計画性、推論力

```text
                    ┌─────────────────┐
                    │   AI AGENT      │
                    │   Intelligence  │
                    └────────┬────────┘
                             │
              ┌──────────────┼──────────────┐
              │              │              │
        ┌─────▼─────┐ ┌─────▼─────┐ ┌─────▼─────┐
        │  MEMORY   │ │ PLANNING  │ │ REASONING │
        │           │ │           │ │           │
        │ Nhớ quá   │ │ Lập kế    │ │ Suy luận  │
        │ khứ, học  │ │ hoạch,    │ │ logic,    │
        │ từ kinh   │ │ phân      │ │ giải      │
        │ nghiệm    │ │ rã task   │ │ thích     │
        └───────────┘ └───────────┘ └───────────┘
              │              │              │
              └──────────────┼──────────────┘
                             │
                    ┌────────▼────────┐
                    │ Intelligent     │
                    │ Action          │
                    └─────────────────┘
```

> **ヒント:** これら 3 つの能力は独立して機能しません。メモリは計画にコンテキストを提供します。計画は推論のための構造を作成します。推論により、エージェントのメモリの使用方法が改善されます。これは**好循環**です。

---

## 2. AI エージェントのメモリ タイプ

＃＃＃２．１．記憶の分類

AI エージェントには、人間の脳の仕組みと同様に、さまざまな種類のメモリが必要です。

```text
Human Brain Analogy → AI Agent Memory

┌─────────────────────────────────────────────────────────┐
│                    MEMORY SYSTEM                         │
│                                                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │  Short-term  │  │  Long-term   │  │   Working    │  │
│  │   Memory     │  │   Memory     │  │   Memory     │  │
│  │              │  │              │  │              │  │
│  │ Conversation │  │ Vector Store │  │ Current task │  │
│  │ buffer,      │  │ Knowledge    │  │ scratchpad,  │  │
│  │ last N turns │  │ base, facts  │  │ intermediate │  │
│  │              │  │              │  │ results      │  │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘  │
│         │                 │                 │           │
│  ┌──────▼───────┐  ┌──────▼───────┐                    │
│  │  Episodic    │  │  Semantic    │                    │
│  │   Memory     │  │   Memory     │                    │
│  │              │  │              │                    │
│  │ Past events, │  │ Concepts,    │                    │
│  │ experiences, │  │ relationships│                    │
│  │ success/fail │  │ world know.  │                    │
│  └──────────────┘  └──────────────┘                    │
└─────────────────────────────────────────────────────────┘
```

＃＃＃２．２．メモリタイプの比較表

|メモリの種類 |永続性 |容量 |使用例 |例 |
|---------------|---------------|----------|----------|----------|
| **短期** |セッションのみ |小 (最後の N ターン) |会話のコンテキスト |チャット履歴バッファ |
| **長期** |永久 |大 (無制限) |知識の保持 |ベクトルストア、DB |
| **エピソード** |永久 |平均 |経験から学ぶ | 「最後にユーザーが形式 X を嫌ったとき」 |
| **セマンティック** |永久 |大 |事実と概念 | 「Python はプログラミング言語です」 |
| **働いています** |タスクの期間 |小 |現在のタスクの状態 |スクラッチパッド、中間結果 |

＃＃＃２．３．短期記憶 — 会話バッファ

短期記憶には、会話の最新の内容が保持されます。

```text
Conversation Buffer Memory:

  Turn 1: User: "Tìm giá Bitcoin hôm nay"
  Turn 2: Agent: "BTC = $67,500"            ← Lưu lại
  Turn 3: User: "So sánh với tuần trước"
  Turn 4: Agent: "Tuần trước $65,200,       ← Dùng context
                   tăng 3.5%"                   từ Turn 2
  Turn 5: User: "Dự đoán tuần tới"
  Turn 6: Agent: "Dựa trên trend..."        ← Dùng cả
                                                Turn 2+4

Sliding Window (keep last K turns):

  K=4: [Turn 3, Turn 4, Turn 5, Turn 6]     ← Turn 1-2 bị cắt
  K=6: [Turn 1, Turn 2, ..., Turn 6]        ← Giữ hết
```

＃＃＃２．４．長期記憶 — Vector Store

長期記憶は情報を永続的に保存し、多くの場合 **ベクター データベース** を使用します。

```text
Long-term Memory Flow:

  User input → Embedding → Query Vector DB
                               │
                    ┌──────────▼──────────┐
                    │   Vector Store      │
                    │                     │
                    │  📄 "User thích     │
                    │      Python, AI"    │
                    │  📄 "Đã hoàn thành  │
                    │      project X"     │
                    │  📄 "Prefer dark    │  ← Similarity
                    │      theme, brief   │     search
                    │      responses"     │
                    │  📄 "Works at       │
                    │      Company Y"     │
                    └──────────┬──────────┘
                               │
                    Top-K relevant memories
                               │
                    ┌──────────▼──────────┐
                    │  Inject into prompt │
                    └─────────────────────┘
```

＃＃＃２．５。エピソード記憶と意味記憶

|側面 |エピソード記憶 |意味記憶 |
|------|----------------|------|
| **内容** |特定のイベント/エピソード |一般的な事実/概念 |
| **形式** | 「X 日目、ユーザーは Y を質問し、エージェントは Z を実行し、結果は W」 | 「Python は中括弧の代わりにインデントを使用します」 |
| **検索** |時間/コンテキストの類似性による |概念の類似性による |
| **更新** |新しいエピソードを追加 |ファクトのマージと更新 |
| **使用例** |過去の失敗から学ぶ |ナレッジベースを構築する |

> **ヒント:** エピソード記憶は**自己改善**にとって非常に重要です。エージェントは「前回は戦略 A を使用して失敗したが、戦略 B は成功した」ことを覚えており、次回は B を選択します。

---

## 3. Python を使用したエージェント メモリの実装

＃＃＃３．１． LangChain メモリ クラス

LangChain は、多くの組み込みメモリ クラスを提供します。

```python
from langchain.memory import (
    ConversationBufferMemory,
    ConversationBufferWindowMemory,
    ConversationSummaryMemory,
    ConversationSummaryBufferMemory,
    VectorStoreRetrieverMemory,
)
from langchain_openai import ChatOpenAI

# 1. Buffer Memory — Giữ nguyên toàn bộ history
buffer_memory = ConversationBufferMemory(
    memory_key="chat_history",
    return_messages=True,  # Return dạng Message objects
)

# 2. Window Memory — Chỉ giữ K turns gần nhất
window_memory = ConversationBufferWindowMemory(
    k=10,  # Giữ 10 lượt gần nhất
    memory_key="chat_history",
    return_messages=True,
)

# 3. Summary Memory — Tóm tắt history bằng LLM
llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)
summary_memory = ConversationSummaryMemory(
    llm=llm,
    memory_key="chat_history",
    return_messages=True,
)

# 4. Summary Buffer — Hybrid: summary cũ + buffer mới
summary_buffer = ConversationSummaryBufferMemory(
    llm=llm,
    max_token_limit=2000,  # Summarize khi vượt limit
    memory_key="chat_history",
    return_messages=True,
)
```

メモリ クラスを比較します。

|メモリクラス |トークンの使用法 |情報損失 |最適な用途 |
|---------------|---------------|---------------|----------|
| `ConversationBufferMemory` |線形増加 |損はしない |短いチャット (<20 turns) |
| `ConversationBufferWindowMemory` |固定 (K ターン) |失われた古いターン |長いチャット。最近のコンテキストだけが必要 |
| `ConversationSummaryMemory` |緩やかな増加 |詳細の喪失 |長いチャット、概要が必要 |
| `ConversationSummaryBufferMemory` |ハイブリッド |損失が少ない |プロダクション — ベストバランス |

### 3.2. Vector Store-backed Memory

ベクター ストアを使用して長期記憶を保存し、エージェントがセッション間で情報を記憶できるようにします。

```python
from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import Chroma
from langchain.memory import VectorStoreRetrieverMemory
import chromadb

# Setup vector store
embeddings = OpenAIEmbeddings(model="text-embedding-3-small")
vectorstore = Chroma(
    collection_name="agent_memory",
    embedding_function=embeddings,
    persist_directory="./memory_store",
)

# Tạo retriever memory
retriever = vectorstore.as_retriever(search_kwargs={"k": 5})
vector_memory = VectorStoreRetrieverMemory(
    retriever=retriever,
    memory_key="relevant_history",
    input_key="input",
)

# Lưu memory
vector_memory.save_context(
    inputs={"input": "Tôi đang làm project e-commerce bằng FastAPI"},
    outputs={"output": "Tuyệt! FastAPI rất phù hợp cho e-commerce API."},
)

vector_memory.save_context(
    inputs={"input": "Database tôi dùng PostgreSQL với SQLAlchemy"},
    outputs={"output": "PostgreSQL + SQLAlchemy là combo mạnh mẽ."},
)

# Query — tự động retrieve relevant memories
result = vector_memory.load_memory_variables(
    {"input": "Giúp tôi optimize database queries"}
)
print(result["relevant_history"])
# → Trả về memories liên quan đến PostgreSQL, SQLAlchemy
```

＃＃＃３．３． Redis による永続メモリ

Redis を使用して再起動後もメモリを保持します。

```python
from langchain_community.chat_message_histories import RedisChatMessageHistory
from langchain.memory import ConversationBufferMemory
from langchain_openai import ChatOpenAI
from langchain.chains import ConversationChain

# Redis-backed message history
message_history = RedisChatMessageHistory(
    session_id="user_123_session_456",
    url="redis://localhost:6379/0",
    ttl=86400 * 7,  # 7 ngày expiry
)

# Wrap trong ConversationBufferMemory
redis_memory = ConversationBufferMemory(
    memory_key="chat_history",
    chat_memory=message_history,
    return_messages=True,
)

# Dùng trong chain
llm = ChatOpenAI(model="gpt-4o", temperature=0.7)
conversation = ConversationChain(
    llm=llm,
    memory=redis_memory,
    verbose=True,
)

# Chat — memory persist qua Redis
response = conversation.predict(input="Tôi tên Minh, đang học AI")
# Restart app → memory vẫn còn trong Redis
response = conversation.predict(input="Tôi tên gì?")
# → "Bạn tên Minh"
```

### 3.4. Custom Memory Manager — Production Pattern

運用環境では、多くのメモリ タイプを組み合わせたカスタム メモリ マネージャーが必要になることがよくあります。

```python
from dataclasses import dataclass, field
from datetime import datetime
from typing import Optional
import json

from langchain_openai import OpenAIEmbeddings, ChatOpenAI
from langchain_community.vectorstores import Chroma


@dataclass
class MemoryEntry:
    content: str
    memory_type: str  # short_term, long_term, episodic, semantic
    timestamp: str = field(default_factory=lambda: datetime.now().isoformat())
    metadata: dict = field(default_factory=dict)
    importance: float = 0.5  # 0.0 - 1.0


class AgentMemoryManager:
    """Unified memory manager kết hợp nhiều memory types."""

    def __init__(self, user_id: str, persist_dir: str = "./agent_memory"):
        self.user_id = user_id
        self.embeddings = OpenAIEmbeddings(model="text-embedding-3-small")
        self.llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)

        # Short-term: conversation buffer
        self.short_term: list[dict] = []
        self.max_short_term = 20

        # Long-term: vector store
        self.long_term = Chroma(
            collection_name=f"long_term_{user_id}",
            embedding_function=self.embeddings,
            persist_directory=f"{persist_dir}/{user_id}/long_term",
        )

        # Episodic: vector store riêng
        self.episodic = Chroma(
            collection_name=f"episodic_{user_id}",
            embedding_function=self.embeddings,
            persist_directory=f"{persist_dir}/{user_id}/episodic",
        )

    def add_short_term(self, role: str, content: str):
        """Thêm vào short-term buffer."""
        self.short_term.append({
            "role": role,
            "content": content,
            "timestamp": datetime.now().isoformat(),
        })
        # Sliding window
        if len(self.short_term) > self.max_short_term:
            # 削除する前に最も古いメッセージを要約する
            self._summarize_and_archive(self.short_term[:5])
            self.short_term = self.short_term[5:]

    def add_long_term(self、内容: str、メタデータ: Optional[dict] = None):
        """事実/好みを長期記憶に保存します。"""
        メタ = メタデータまたは {}
        メタ["ユーザーID"] = self.ユーザーID
        meta["timestamp"] = datetime.now().isoformat()
        メタ["タイプ"] = "長期"
        self.long_term.add_texts(
            テキスト=[コンテンツ]、
            メタデータ=[メタ]、
        ）

    def add_episode(self、タスク: str、アクション: list[str]、
                    結果: str、成功: bool):
        """過去から学ぶためのエピソード(経験)を保存します。"""
        エピソードテキスト = (
            f"タスク: {タスク}\n"
            f"アクション: {', '.join(actions)}\n"
            f"結果: {結果}\n"
            f「成功: {成功}」
        ）
        self.episodic.add_texts(
            テキスト=[エピソードテキスト]、
            メタデータ=[{
                「タスク」: タスク、
                「成功」: 成功、
                "タイムスタンプ": datetime.now().isoformat(),
                "タイプ": "エピソード",
            }]、
        ）

    def remember(self, query: str, k: int = 5) -> dict:
        """すべての店舗で関連する思い出を呼び起こします。"""
        # 短期: すべてを返す (スライディング ウィンドウによって制限される)
        short = self.short_term[-10:] # 過去 10 ターン

        # 長期: 類似性検索
        long = self.long_term.similarity_search(クエリ、k=k)

        # エピソード: 関連する過去の経験を見つける
        エピソード = self.episodic.similarity_search(クエリ、k=3)

        戻り値 {
            "short_term": 短い、
            "long_term": [長いドキュメントの doc.page_content],
            "episodic": [エピソード内のドキュメントの doc.page_content]、
        }

    def _summarize_and_archive(self, メッセージ: list[dict]):
        """古いメッセージを要約して長期保存します。"""
        テキスト = "\n".join(
            f"{m['role']}: {m['content']}" (メッセージ内の m)
        ）
        概要 = self.llm.invoke(
            f"この会話を簡潔に要約してください:\n{text}"
        ）
        self.add_long_term(
            コンテンツ=概要.コンテンツ、
            メタデータ={"タイプ": "会話の概要"},
        ）


#使用法
メモリ = AgentMemoryManager(user_id="user_123")

#会話
Memory.add_short_term("user", "販売アプリ用の REST API を構築する必要がある")
Memory.add_short_term("assistant", "FastAPI + PostgreSQL の使用をお勧めします")
Memory.add_long_term("ユーザーは電子商取引には REST API が必要ですが、FastAPI を優先します")

# エピソードを録画する
メモリ.add_episode(
    task="製品用の CRUD API を構築する",
    アクション=["FastAPI アプリを作成しました", "SQLAlchemy モデルを追加しました", "テストを作成しました"],
    result="100% のテスト カバレッジで動作する API",
    成功=真、
）

# 後で — 関連するコンテキストを思い出します
context =memory.recall("API パフォーマンスを最適化するにはどうすればよいですか?")
```

> **ヒント:** 運用環境では、**重要度スコアリング**を思い出に追加します。すべての情報を保存する必要があるわけではありません。 LLM を使用して、長期記憶に保存する前に重要性を評価します。

---

## 4. Planning Strategies

＃＃＃４．１．エージェントはなぜ計画を立てる必要があるのでしょうか?

計画を知らないエージェントは **反応的** に行動します。つまり、戦略を持たずに現在の入力に反応するだけです。計画を立てると、エージェントが**積極的**になり、戦略に従って計画を立てて実行できるようになります。

```文章。テキスト
計画なし: 計画あり:

ユーザー: 「AI についてのブログ記事を書いてください」 ユーザー: 「AI についてのブログ記事を書いてください」
                                   
エージェント: *すぐに書き込みます* エージェントの考え:
       *リサーチを忘れました* 1. トレンドの AI トピックをリサーチする
       *アウトラインなし* 2. トピックを選択 + アウトラインを作成
       *例がありません* 3. 概要に従って草案を作成します
       *乱雑な結果* 4. コード例を追加
                                    5. レビューと編集
                                    6. フォーマットとファイナライズ
                                   
                                   エージェント: *各ステップを実行*
                                          *構造化された結果*
```

### 4.2. Task Decomposition

**タスク分解** は、複雑なタスクを、より小さく扱いやすいサブタスクに分解する手法です。

```テキスト。テキスト
タスク分解フロー:

  複雑なタスク: 「競合他社を分析し、マーケティング戦略を作成する」
                              │
                    ┌─────▼─────┐
                    │ 分解者 │
                    │ (LLM 搭載) │
                    ━─────┬─────┘
                              │
         ┌─────────── ┼───────────┐
         │ │ │
  ┌──────▼──────┐ ┌────────▼──────┐ ┌────────▼──────┐
  │ サブタスク 1 │ │ サブタスク 2 │ │ サブタスク 3 │
  │ │ │ │ │ │
  │ 研究 │ │ SWOT │ │ 作成 │
  │ 競合他社 │─→ │ 分析 │─→ │ 戦略 │
  │ (ウェブ検索)│ │ (分析) │ │ (ドキュメントを書く) │
  ━━━━━━━━━━━━━━━━━━━━━━━┘ ━━━━━━━━┘
         │ │ │
         ▼ ▼ ▼
    5 つの SWOT マトリックスの戦略ドキュメントのリスト
    アクションのある競合他社ごとの競合他社
```

Implementation:

```パイソン
langchain_openai から ChatOpenAI をインポート
langchain_core.prompts から ChatPromptTemplate をインポート
pydantic import BaseModel、Field から


クラスサブタスク(BaseModel):
    """計画のサブタスク。"""
    id: int = フィールド(説明="タスクID")
    説明: str = フィールド(説明="サブタスクの説明")
    依存関係: list[int] = Field(
        default_factory=list, description="これが依存するタスクの ID"
    ）
    tools_needed: list[str] = フィールド(
        default_factory=list, description="必要なツール"
    ）


クラス TaskPlan(BaseModel):
    """計画はタスクを分解します。"""
    目標: str = フィールド(説明="全体的な目標")
    サブタスク: list[SubTask] = Field(description="サブタスクのリスト")
    estimated_steps: int = Field(description="合計ステップ数")


llm = ChatOpenAI(モデル = "gpt-4o"、温度 = 0)
Structured_llm = llm.with_structurd_output(タスクプラン)

decompose_prompt = ChatPromptTemplate.from_messages([
    ("system", """あなたはタスク計画の専門家です。
ユーザーの複雑なタスクを、より小さな実行可能なサブタスクに分割します。
各サブタスクは次のようにする必要があります。
- 具体的かつ実行可能
- 明確な依存関係がある
- 必要なツールをリストアップする

利用可能なツール: web_search、code_executor、file_writer、
                 data_analyzer、document_generator""")、

    ("人間", "タスク: {task}"),
])

チェーン = 分解プロンプト |構造化_llm

#分解する
plan =chain.invoke({
    "task": "EdTech 分野の競合他社 3 社を分析する"
            「詳細な比較レポートを生成します」
})

plan.subtasks のサブタスクの場合:
    deps = f" (依存: {subtask.dependency})" if subtask.dependency else ""
    print(f" [{subtask.id}] {subtask.description}{deps}")
    print(f" ツール: {subtask.tools_needed}")
```

### 4.3. Plan-and-Execute Pattern

**計画と実行** は最も強力なパターンです。エージェントは最初に計画を作成し、次に各ステップを実行します。いずれかのステップが失敗した場合、エージェントは**再計画**できます。

```テキスト。テキスト
計画と実行のループ:

  ┌───────┐
  │ 入力 │
  │（複雑な│
  │ タスク） │
  ━━━━┬─────┘
         │
  ┌──────▼──────┐ ┌──────────┐
  │ プランナー │────→│ 計画 │
  │ (作成 │ │ [step1, │
  │ 計画） │ │ step2, │
  └─────────┘ │ step3, ...] │
                      ━━━━┬───────┘
                             │
                      ┌──────▼────────┐
                      │ 執行者 │
                      │ (実行ステップ) │◄───────┐
                      ━━━━┬───────┘ │
                             │ │
                      ┌──────▼────────┐ ┌──────┴──────┐
                      │ 評価する │─いいえ─│ リプランナー │
                      │成功？    │ │ (調整 │
                      ━━━━┬───────┘ │ 予定） │
                             │はい └─────────┘
                      ┌──────▼────────┐
                      │ 結果 │
                      ━─────────┘
```

LangGraph implementation:

```パイソン
入力から import Annotated、TypedDict
langgraph.graph から StateGraph をインポート、END
langchain_openai から ChatOpenAI をインポート
langchain_core.messages から HumanMessage、SystemMessage をインポート


クラス PlanExecuteState(TypedDict):
    入力: str
    計画: リスト[str]
    current_step: int
    step_results: リスト[str]
    最終結果: str
    エラー数: 整数


llm = ChatOpenAI(モデル = "gpt-4o"、温度 = 0)


def planner(状態: PlanExecuteState) -> PlanExecuteState:
    """入力から計画を作成します。"""
    応答 = llm.invoke([
        SystemMessage(コンテンツ=(
            「あなたはプランナーです。タスクを 3 ～ 7 つの具体的なステップに分割してください。」
            「番号付きリストのみを返します。」
        ))、
        HumanMessage(content=f"タスク: {state['input']}"),
    ])
    ステップ = [
        line.strip().lstrip("0123456789.").strip()
        response.content.strip().split("\n") の行
        if line.strip()
    】
    return {**state, "plan": ステップ、"current_step": 0、"step_results": []}


def executor(状態: PlanExecuteState) -> PlanExecuteState:
    """現在のステップを実行します。"""
    ステップ = 状態["計画"][状態["現在のステップ"]]
    context = "\n".join(
        f"ステップ {i+1} の結果: {r}"
        for i, r in enumerate(state["step_results"])
    ）
    応答 = llm.invoke([
        SystemMessage(コンテンツ=(
            「指定されたステップを実行します。前のステップのコンテキストを使用します。」
        ))、
        HumanMessage(コンテンツ=(
            f"全体的な目標: {state['input']}\n"
            f"前の結果:\n{コンテキスト}\n"
            f"現在のステップ: {ステップ}\n"
            「このステップを実行して結果を返します。」
        ))、
    ])
    results = state["step_results"] + [response.content]
    戻り値 {
        **州、
        "step_results": 結果、
        "現在のステップ": 状態["現在のステップ"] + 1、
    }


def should_ continue(state: PlanExecuteState) -> str:
    """他に手順がないか確認してください。"""
    if state["current_step"] >= len(state["plan"]):
        「ファイナライズ」を返す
    「実行」を返す


def ファイナライザー(状態: PlanExecuteState) -> PlanExecuteState:
    """結果を要約します。"""
    all_results = "\n\n".join(
        f"ステップ {i+1}: {r}"
        for i, r in enumerate(state["step_results"])
    ）
    応答 = llm.invoke([
        SystemMessage(content="すべてのステップの結果を最終的な答えに合成します。"),
        HumanMessage(コンテンツ=(
            f"目標: {state['input']}\n\n結果:\n{all_results}"
        ))、
    ])
    return {**state, "final_result": response.content}


# グラフの構築
グラフ = StateGraph(PlanExecuteState)
graph.add_node("プランナー", プランナー)
graph.add_node("実行者", 実行者)
graph.add_node("ファイナライザー", ファイナライザー)

graph.set_entry_point("プランナー")
graph.add_edge("プランナー", "実行者")
graph.add_conditional_edges("実行者", should_Continue, {
    "実行": "実行者",
    "ファイナライズ": "ファイナライザー",
})
graph.add_edge("ファイナライザー", END)

app = グラフ.compile()

# 実行
結果 = app.invoke({
    "input": "2025 年の AI トレンドのトップ 3 を調査して要約します",
    「計画」: [],
    「現在のステップ」: 0、
    "ステップ結果": [],
    "最終結果": "",
    「エラー数」: 0、
})
print(結果["最終結果"])
```

### 4.4. Hierarchical Planning

階層的な計画: **高レベルの計画** → **中レベルの計画** → **低レベルのアクション**:

```文章。テキスト
階層的な計画:

レベル 0 — 戦略的:
  「ECプラットフォームの構築」
         │
レベル 1 — 戦術:
  §── 「データベーススキーマの設計」
  §── 「REST APIの構築」
  §── 「フロントエンドの作成」
  ━──「セットアップ展開」
         │
レベル 2 — 運用可能:
  §── 「データベーススキーマの設計」
  │ §── 「製品モデルの定義」
  │ §── 「オーダーモデルの定義」
  │ §── 「ユーザーモデルの定義」
  │ └── 「関係性をつくる」
  §── 「REST APIの構築」
  │ §── 「FastAPIプロジェクトのセットアップ」
  │ §── 「CRUDエンドポイントの実装」
  │ §── 「認証の追加」
  │ └── 「API テストを書く」
  ...
```

> **ヒント:** 階層型計画は、**マルチエージェント システム** と組み合わせると特に効果的です (レッスン 14)。エージェント マネージャーはレベル 0 ～ 1 を担当し、スペシャリスト エージェントはレベル 2 を担当します。

---

## 5. Chain-of-Thought Reasoning

### 5.1. CoT Prompting

**思考連鎖 (CoT)** により、LLM はいきなり結論に向かうのではなく、段階的に推論するようになります。

```テキスト。テキスト
CoTなし: CoTあり:

Q: 「サーバー エラー 503、解決方法は?」        Q: 「サーバー エラー 503、解決方法は?」

A: "サーバーを再起動します" A: "各ステップを分析しましょう:
    (推論の欠如) 1. 503 = サービスが利用できません
                                           2. 考えられる原因:
                                              - バックエンドサービスのダウン
                                              - リソースの枯渇
                                              - ロードバランサのタイムアウト
                                           3. 以下を確認する必要があります。
                                              - サーバーログ
                                              - CPU/メモリ使用量
                                              - 上流サービス
                                           4. 原因に応じて修正します。
                                              - リソースがあればスケールアップ
                                              - クラッシュした場合は再起動します
                                              - 依存している場合はアップストリームを修正します
```

エージェントに CoT をデプロイします。

```パイソン
langchain_openai から ChatOpenAI をインポート
langchain_core.prompts から ChatPromptTemplate をインポート

llm = ChatOpenAI(モデル = "gpt-4o"、温度 = 0)

cot_prompt = ChatPromptTemplate.from_messages([
    ("システム", """あなたは問題解決の専門家です。
すべての質問について、次の推論プロセスに従います。

1. **理解**: 問題を自分の言葉で言い直す
2. **分析**: 主要な要因と制約を特定する
3. **分解**: 複雑な場合はサブ問題に分割します
4. **理由**: 各サブ問題を段階的に解決する
5. **合成**: サブ回答を最終回答に結合します。
6. **検証**: 答えが意味をなしているかどうかを確認します。

次の形式を使用して推論を明確に示します。
[理解] ...
[分析] ...
【理由】 ...
[答え] ...""")、
    ("人間", "{質問}"),
])

チェーン = cot_prompt | llm
応答 = チェーン.invoke({
    "question": "電子商取引システムはピーク時間帯には遅くなります。"
                「データベース CPU 95%、API 応答時間 5 秒。解決策は?」
})
print(response.content)
```

### 5.2. Tree-of-Thought (ToT)

**Tree-of-Thought** は、**複数の推論ブランチ**を並行して探索し、最適なものを選択することで CoT を拡張します。

```文章。テキスト
思考の木:

                    問題
                       │
            ┌─────┼─────┐
            │ │ │
        思考１ 思考２ 思考３
        「DBのスケール」「キャッシュの追加」「最適化」
            │ │ クエリ」
         ┌──┴──┐ ┌──┴──┐ │
         │ │ │ │ │
       T1.1 T1.2 T2.1 T2.2 T3.1
       Redis CDN インデックスの読み取り追加
       レプリカ pgbouncer 静的遅い
                                      クエリ
            │ │ │
         スコア: スコア: スコア:
          0.7 0.9 0.8
            │ │ │
            ━─────┼─────┘
                       │
                  ベスト: 思考 2
                  「Redis キャッシュを追加 +
                   静的 CDN」
```

```パイソン
langchain_openai から ChatOpenAI をインポート
langchain_core.messages から HumanMessage、SystemMessage をインポート

llm = ChatOpenAI(モデル = "gpt-4o"、温度 = 0.7)
評価者 = ChatOpenAI(モデル = "gpt-4o"、温度 = 0)


def Tree_of_thought(問題: str, n_thoughts: int = 3) -> str:
    """思考の木の推論。"""

    # ステップ 1: 複数の最初の考えを生成する
    考え = []
    範囲 (n_thoughts) 内の i の場合:
        応答 = llm.invoke([
            SystemMessage(コンテンツ=(
                f「アプローチ #{i+1} を生成します (他とは異なります)」
                f「この問題を解決するには、具体的かつ創造的になってください。」
            ))、
            HumanMessage(content=f"問題: {問題}"),
        ])
        thought.append(response.content)

    # ステップ 2: それぞれの考えを評価する
    スコア = []
    思考の中の思考については、
        eval_response = evaluator.invoke([
            SystemMessage(コンテンツ=(
                「このソリューションのアプローチを 1 から 10 のスケールで評価してください。」
                「実現可能性、有効性、コスト、時間を考慮してください。」
                「数値スコアのみを返します。」
            ))、
            HumanMessage(コンテンツ=(
                f"問題: {問題}\nアプローチ: {考え}"
            ))、
        ])
        試してみてください:
            スコア = float(eval_response.content.strip())
        ValueError を除く:
            スコア = 5.0
        スコア.追加(スコア)

    # ステップ 3: 最善の考えを選択し、詳しく説明する
    best_idx = スコア.インデックス(最大(スコア))
    best_thought = 思考[best_idx]

    最終 = llm.invoke([
        SystemMessage(コンテンツ=(
            「このソリューションのアプローチについて詳しく説明します。詳細を提供してください。」
            「実装手順、潜在的な問題、および緩和策。」
        ))、
        HumanMessage(コンテンツ=(
            f"問題: {問題}\n"
            f"選択したアプローチ (スコア {scores[best_idx]}/10):\n"
            f「{最善の考え}」
        ))、
    ])

    Final.contentを返す


#使用法
解決策 = 思考の木(
    「電子商取引アプリは、ブラック フライデー中の 10 倍のトラフィックの急増に対処する必要があります。」
    「現在のスタック: FastAPI + PostgreSQL + Redis on AWS」
）
印刷(ソリューション)
```

### 5.3. Self-Consistency

**自己一貫性** は複数の推論パスを生成し、最も多く表示される答えを選択します (多数決)。

```文章。テキスト
自己整合性フロー:

  質問: 「ユーザー プロファイルには SQL と NoSQL を使用する必要がありますか?」
                        │
           ┌───────┼───────┐
           │ │ │
       パス 1 パス 2 パス 3
       (温度=0.7) (温度=0.7) (温度=0.7)
           │ │ │
       「SQL の理由」「SQL の理由」「NoSQL の理由」
        構造化された ACID、柔軟
        データ、ACID「結合」スキーマ
           │ │ │
           ▼ ▼ ▼
        答え: SQL 答え: SQL 答え: NoSQL
           │ │ │
           ━───────┼───────┘
                        │
                 多数決: SQL (2/3)
                 信頼度: 66.7%
```

> **ヒント:** 自己一貫性は、意思決定タスクに特に役立ちます。エージェントが重要な決定 (アーキテクチャの選択、ツールの選択) を行う必要がある場合、5 つの推論パスを生成し、より信頼性の高い結果に投票します。

---

## 6. Self-Reflection & Iterative Refinement

### 6.1. Reflexion Architecture

**Reflexion** は、エージェントが出力を自己評価し、経験から学び、以下を改善できるアーキテクチャです。

```テキスト。テキスト
反射ループ:

  ┌─────────────────────────┐
  │ │
  │ ┌─────┐ ┌─────┐ │
  │ │ アクター │───→│ アクション │ │
  │ │ (エージェント) │ │ (実行)│ │
  │ ━━━━┘ ━━━┬─────┘ │
  │ ▲ │ │
  │ │ ┌───▼────┐ │
  │ │ │ 評価する │ │
  │ │ │ (確認してください │ │
  │ │ │ 結果） │ │
  │ │ └───┬────┘ │
  │ │ │ │
  │ │ ┌─────▼─────┐ │
  │ │ │ リフレクター │ │
  │ │ │ │ │
  │ │ │ 「どうしたの？」  │ │
  │ │ │ 「何を改善すればいいですか？」  │ │
  │ │ │ 「教訓は得られましたか？」   │ │
  │ │ └─────┬─────┘ │
  │ │ │ │
  │ │ ┌─────▼─────┐ │
  │ │ │ メモリ更新 │ │
  │ │ │ 店舗の反省 │ │
  │ └───│ 次の試行のために │ │
  │ ━━━━━━━━━━━┘ │
  │ │
  ━━━━━━━━━━━━━━━━━━━━━━━━┘
```

### 6.2. Self-Critique Loop — Implementation

```パイソン
langchain_openai から ChatOpenAI をインポート
langchain_core.messages から HumanMessage、SystemMessage をインポート
pydantic import BaseModel、Field から


クラス CritiqueResult(BaseModel):
    スコア: float = フィールド(説明="品質スコア 0-10")
    問題: list[str] = Field(description="問題が見つかりました")
    提案: list[str] = Field(description="改善提案")
    is_acceptable: bool = Field(description="出力が品質基準を満たしているかどうか")


クラス SelfRefiningAgent:
    """自己批判と反復的な改良を行うエージェント。"""

    def __init__(self, max_iterations: int = 3):
        self.actor = ChatOpenAI(モデル = "gpt-4o"、温度 = 0.7)
        self.critic = ChatOpenAI(モデル = "gpt-4o"、温度 = 0)
        self. Structured_critic = self.critic.with_structed_output(CritiqueResult)
        self.max_iterations = max_iterations
        self.reflections: list[str] = []

    defgenerate(self, タスク: str) -> str:
        """初期出力を生成します。"""
        コンテキスト = ""
        自己反省の場合:
            コンテキスト = (
                "\n\n以前の反省 (これらの間違いを避けてください):\n"
                + "\n".join(f"- {r}" for r in self.reflections)
            ）

        応答 = self.actor.invoke([
            SystemMessage(コンテンツ=(
                「あなたはエキスパートアシスタントです。高品質の成果物を作成してください。」
                f"{コンテキスト}"
            ))、
            HumanMessage(コンテンツ=タスク)、
        ])
        応答を返す.コンテンツ

    def critique(self, タスク: str, 出力: str) -> CritiqueResult:
        """出力を自己批判します。"""
        return self.structed_critic.invoke([
            SystemMessage(コンテンツ=(
                「あなたは厳格な品質レビュー担当者です。出力を評価してください。」
                「任務の要件に反する。批判的だが公平であること。」
                「スコア 8+ は許容可能な品質を意味します。」
            ))、
            HumanMessage(コンテンツ=(
                f"タスク: {task}\n\nレビューする出力:\n{output}"
            ))、
        ])

    defreflect(self, タスク: str, 出力: str,
                critique: CritiqueResult) -> str:
        """改善のための反省を生む。"""
        応答 = self.critic.invoke([
            SystemMessage(コンテンツ=(
                「批評に基づいて、簡潔な考察を生成する」
                「それは次の試みを改善するのに役立ちます。」
                「具体的で実行可能な改善に焦点を当てます。」
            ))、
            HumanMessage(コンテンツ=(
                f"タスク: {タスク}\n"
                f"出力: {出力}\n"
                f"問題: {critique.issues}\n"
                f"提案: {critique.suggestions}"
            ))、
        ])
        応答を返す.コンテンツ

    def run(self, task: str) -> dict:
        """自己調整ループを実行します。"""
        range(self.max_iterations) 内の反復の場合:
            print(f"\n--- 反復 {反復 + 1} ---")

            # 生成する
            出力 = self.generate(タスク)

            # 批評
            critique = self.critique(タスク, 出力)
            print(f"スコア: {critique.score}/10")
            print(f"許容可能: {critique.is_acceptable}")

            批判が許容される場合:
                戻り値 {
                    「出力」: 出力、
                    "反復": 反復 + 1、
                    "final_score": 批評.スコア,
                }

            #反映して保存する
            リフレクション = self.reflect(タスク、出力、批評)
            self.reflections.append(リフレクション)
            print(f"リフレクション: {reflection[:100]}...")

        # 最大反復後にベストエフォートを返す
        戻り値 {
            「出力」: 出力、
            "反復回数": self.max_iterations,
            "final_score": 批評.スコア,
            "note": "最大反復回数に達しました",
        }


#使用法
エージェント = SelfRefiningAgent(max_iterations=3)
結果 = エージェント.run(
    「電子メール アドレスを検証する Python 関数を作成します。」
    「特殊なケースに対処します。ドキュメント文字列と入力ヒントを含めます。」
）
print(f"\n最終出力 ({result['iterations']} 回の反復後):")
print(f"スコア: {result['final_score']}/10")
print(結果["出力"])
```

### 6.3. Output Validation Pattern

LLM を使用した自己批判に加えて、**決定論的な検証** を追加する必要があります。

```パイソン
輸入再
輸入アスト
import Callable の入力から


クラスOutputValidator:
    """ルール + LLM を使用してエージェントの出力を検証します。"""

    def __init__(自分自身):
        self.rules: list[呼び出し可能] = []

    def add_rule(self, name: str, check_fn: Callable[[str], bool],
                 error_msg: str):
        self.rules.append({
            "名前": 名前、
            「チェック」: check_fn,
            "エラー": error_msg,
        })

    def validate(self, 出力: str) -> dict:
        エラー = []
        self.rules のルールの場合:
            ルールがなければ["check"](output):
                errors.append(f"{ルール['名前']}: {ルール['エラー']}")
        戻り値 {
            「有効」: len(エラー) == 0、
            「エラー」: エラー、
        }


# 例: コード出力を検証する
バリデータ = OutputValidator()

validator.add_rule(
    "構文チェック",
    ラムダコード: _is_valid_python(コード)、
    "コードに構文エラーがあります",
）

validator.add_rule(
    "no_hardcoded_secrets",
    ラムダコード: re.search( ではありません)
        r'(api_key|password|secret)\s*=\s*["\'][^"\']+["\']'、コード
    ）、
    "ハードコードされたシークレットが含まれています",
）

validator.add_rule(
    "has_docstring",
    ラムダコード: コード内の「"""」またはコード内の「''」、
    "ドキュメント文字列がありません",
）


def _is_valid_python(コード: str) -> ブール:
    試してみてください:
        ast.parse(コード)
        Trueを返す
    構文エラーを除く:
        Falseを返す


# 検証する
結果 = validator.validate('''
def add(a: int, b: int) -> int:
    """数字を 2 つ足します。"""
    a + bを返す
'')
print(result) # {"有効": True、"エラー": []}
```

> **ヒント:** **LLM ベースの批評** (品質、ロジックの評価) と **決定論的検証** (構文、形式、ルールのチェック) を常に組み合わせてください。 LLM はセマンティック エラーを捕捉し、ルールは構造的エラーを捕捉します。保護層は 1 層よりも 2 層の方が優れています。

---

## 7. Human-in-the-Loop Patterns

＃＃＃７．１．なぜ人間参加型が必要なのでしょうか?

エージェントがどれほど賢くても、人間の承認が必要な決定があります。

```テキスト。テキスト
エージェントの自律性スペクトル:

  フルオート 監視あり 人間主導
  ◄─────────────┼───────────────►
  │ │ │
  「テキストのフォーマット」「メールの送信」「データベースの削除」
  「ドキュメントの要約」「ステージングへのデプロイ」「10,000 ドルの送金」
  「テストを実行する」「PR を作成する」「顧客を解雇する」
  │ │ │
  承認不要 承認が必要 常に人間
  決定を実行する前に必要
```

### 7.2. Approval Workflow Pattern

```パイソン
入力から import TypedDict、Literal
langgraph.graph から StateGraph をインポート、END
langgraph.checkpoint.memory から MemorySaver をインポート
langchain_openai から ChatOpenAI をインポート


クラス AgentState(TypedDict):
    タスク: str
    計画: str
    承認済み: ブール値 |なし
    結果: str
    Required_approval: ブール値


llm = ChatOpenAI(モデル = "gpt-4o"、温度 = 0)


def create_plan(状態: AgentState) -> AgentState:
    """エージェントはタスクの計画を作成します。"""
    応答 = llm.invoke(
        f"次の詳細な計画を作成します: {state['task']}"
    ）
    # タスクに承認が必要かどうかを検出する
    high_risk_keywords = [「削除」、「デプロイ」、「送信」、「支払い」、「本番」]
    ニーズ承認 = 任意(
        high_risk_keywords の kw の state["task"]. lower() の kw
    ）
    戻り値 {
        **州、
        "計画": 応答.コンテンツ、
        "requires_approval": ニーズ_承認、
        「承認済み」: なし、
    }


def check_approval(状態: AgentState) -> str:
    """承認要件に基づくルート。"""
    そうでない場合は state["requires_approval"]:
        return "execute" # リスクの低いタスクを自動承認する
    state["approved"] が None の場合:
        return "wait_for_human" # 人間の入力が必要
    状態["承認済み"]の場合:
        「実行」を返す
    「拒否」を返す


def wait_for_human(状態: AgentState) -> AgentState:
    """一時停止して人間の入力を待ちます。
    LangGraph 割り込みはここで実行を一時停止します。
    「」
    # 運用環境では、これにより通知がトリガーされます
    # 人間が応答するまでグラフは一時停止します
    状態を返す


defexecute_plan(状態: AgentState) -> AgentState:
    """承認された計画を実行します。"""
    応答 = llm.invoke(
        f"この計画を実行します:\n{state['plan']}\n\n"
        f"タスク: {state['task']}"
    ）
    return {**state, "result": response.content}


def request_plan(状態: AgentState) -> AgentState:
    「「「人類が計画を拒否した。」」
    return {**state, "result": "人間のレビュー担当者によって計画が拒否されました。"}


# チェックポイント設定を使用してグラフを構築する
チェックポインタ = MemorySaver()

グラフ = StateGraph(AgentState)
graph.add_node("create_plan", create_plan)
graph.add_node("人間のための待機", 人間のための待機)
graph.add_node("実行", 実行プラン)
graph.add_node("拒否"、拒否_計画)

graph.set_entry_point("create_plan")
graph.add_conditional_edges("create_plan", check_approval, {
    "実行": "実行",
    "wait_for_human": "wait_for_human",
    "拒否": "拒否",
})
graph.add_conditional_edges("人間のための待機", check_approval, {
    "実行": "実行",
    "拒否": "拒否",
    "wait_for_human": "wait_for_human",
})
graph.add_edge("実行", END)
graph.add_edge("拒否", END)

app = グラフ.コンパイル(チェックポインタ=チェックポインタ)
```

### 7.3. LangGraph Interrupt & Resume

LangGraph は、人間の入力を待ってから **再開**する**中断**実行をサポートしています。

```パイソン
langgraph.graph から StateGraph をインポート、END
langgraph.checkpoint.memory から MemorySaver をインポート
langgraph.types からのインポート割り込み、コマンド


クラス状態(TypedDict):
    タスク: str
    ドラフト: str
    フィードバック: str
    最終: str


defgenerate_draft(状態: 状態) -> 状態:
    """エージェントがドラフトを作成します。"""
    # ... ドラフトを生成 ...
    return {**state, "draft": "ここにコンテンツの下書き..."}


def human_review(状態: 状態) -> 状態:
    """人間によるレビューのため中断します。"""
    #interrupt() はここでグラフを一時停止します
    フィードバック = 割り込み(
        # 人間に表示される情報
        {"草案": state["草案"], "メッセージ": "この草案を確認してください"}
    ）
    return {**state, "フィードバック": フィードバック}


def Revise(状態: 状態) -> 状態:
    """フィードバックに基づいて改訂します。"""
    # ... フィードバックに基づいて修正します ...
    return {**state, "final": f"改訂: {state['draft']} + {state['フィードバック']}"}


# ビルド
チェックポインタ = MemorySaver()

グラフ = StateGraph(状態)
graph.add_node("生成", 生成_ドラフト)
graph.add_node("レビュー", human_review)
graph.add_node("改訂"、改訂)

graph.set_entry_point("生成")
graph.add_edge("生成", "レビュー")
graph.add_edge("レビュー", "改訂")
graph.add_edge("改訂", END)

app = グラフ.コンパイル(チェックポインタ=チェックポインタ)

# 実行 — human_review で一時停止します
config = {"構成可能": {"thread_id": "review-1"}}
result = app.invoke({"タスク": "API ドキュメントの作成", "ドラフト": "", "フィードバック": "", "最終": ""}, config)

# ...人間がレビューし、フィードバックを提供します ...

# 人間によるフィードバックを伴う再開
結果 = app.invoke(
    Command(resume="良さそうですが、さらに例を追加してください"),
    構成、
）
print(結果["最終"])
```

＃＃＃７．４．人間参加型パターンの比較表

|パターン |いつ使用するか |複雑さ |ユーザーエクスペリエンス |
|---------|-------------|------------|-----------------|
| **承認ゲート** |リスクの高い行動の前に |低い |単純なはい/いいえ |
| **フィードバック ループ** |反復的なコンテンツ作成 |平均 |レビュー→フィードバック→修正 |
| **Interrupt/Resume** | Complex workflows with checkpoints | Cao | Pause anywhere, resume later |
| **エスカレーション** |エージェントは不確実性に直面する |低い |エージェントは混乱したときに人間に尋ねます |
| **協力的** |人間 + エージェントの連携 |曹操 |リアルタイム共同編集 |

> **ヒント:** 運用環境では、副作用のあるすべてのアクションに対して **承認ゲート** から始めます。ユーザーがエージェントをより信頼した後、承認ポイントの数を徐々に減らします。これは「**進歩的な自律性**」パターンです。

---

## 8. ハンズオン: 記憶力 + 計画 + 推論を備えたエージェントの構築

### 8.1。アーキテクチャの概要

完全なメモリ、計画、推論を備えた **リサーチ アシスタント エージェント**を構築します。

```文章。テキスト
研究アシスタントのアーキテクチャ:

  ┌───────────────────────────┐
  │ 研究助手 │
  │ │
  │ ┌─────────┐ ┌───────┐ ┌───────┐ │
  │ │ 記憶 │ │ プランナー │ │ 理由付け │ │
  │ │ │ │ │ │ │
  │ │ 短期 │ │ 分解 │ │ CoT │ │
  │ │ 長期 │ │ 計画・実行 │ │ 自己チェック │ │
  │ │ エピソード │ │ 再計画 │ │ 反省 │ │
  │ ━━━━┬──────┘ ━━━━┬──────┘ └──────┬──────┘ │
  │ │ │ │ │
  │ ┌───────▼───── ▼───────▼─────┐ │
  │ │ 状態グラフ (LangGraph) │ │
  │ │ │ │
  │ │ 計画→調査→分析→執筆→レビュー │ │
  │ │ ▲ │ │ │
  │ │ └───必要に応じて再計画 ─────┘ │ │
  │ ━━━━━━━━━━━━━━━━━━━━┘ │
  │ │
  │ ツール: web_search、note_writing、document_writer │
  ━━━━━━━━━━━━━━━━━━━━━━━━━┘
```

### 8.2. Full Implementation

```パイソン
「」
記憶力+計画性+推論力を備えたリサーチアシスタントエージェント。
必要なもの: pip install langchain langchain-openai langgraph chromadb
「」

入力から import TypedDict、注釈付き
日時インポート日時から

langchain_openai からのインポート ChatOpenAI、OpenAIEmbeddings
langchain_community.vectorstores から Chroma をインポート
langchain_core.messages から HumanMessage、SystemMessage をインポート
langgraph.graph から StateGraph をインポート、END
pydantic import BaseModel、Field から


# --- 状態 ---
クラス ResearchState(TypedDict):
    クエリ: str
    計画: リスト[str]
    current_step: int
    研究ノート: リスト[str]
    ドラフト: str
    批評: ストラ
    最終レポート: str
    反復: 整数
    max_iterations: int
    メモリコンテキスト: str


# --- メモリモジュール ---
クラス ResearchMemory:
    def __init__(self,persist_dir: str = "./research_memory"):
        self.embeddings = OpenAIEmbeddings(model="text-embedding-3-small")
        self.store = クロマ(
            コレクション名 = "研究の歴史",
            embedding_function=self.embeddings、
            persist_directory=persist_dir、
        ）
        self.session_notes: list[str] = []

    def add_research(self、トピック: str、結果: str):
        self.store.add_texts(
            texts=[f"トピック: {トピック}\n調査結果: {調査結果}"],
            メタデータ=[{
                「トピック」: トピック、
                "タイムスタンプ": datetime.now().isoformat(),
            }]、
        ）

    def remember(self, クエリ: str, k: int = 3) -> str:
        docs = self.store.similarity_search(クエリ、k=k)
        文書でない場合:
            return 「先行研究が見つかりません。」
        return "\n\n".join(
            f「過去の研究: {doc.page_content}」（ドキュメント内のドキュメント）
        ）

    def add_session_note(self, note: str):
        self.session_notes.append(note)


メモリ = ResearchMemory()


# --- LLM セットアップ ---
planner_llm = ChatOpenAI(モデル = "gpt-4o"、温度 = 0)
Researcher_llm = ChatOpenAI(モデル = "gpt-4o"、温度 = 0.3)
Writer_llm = ChatOpenAI(モデル = "gpt-4o"、温度 = 0.7)
critic_llm = ChatOpenAI(モデル = "gpt-4o"、温度 = 0)


# --- ノード ---
defload_memory(状態: ResearchState) -> ResearchState:
    """関連する過去の研究をロードします。"""
    context =memory.recall(state["query"])
    return {**state, "memory_context": context}


def plan_research(状態: ResearchState) -> ResearchState:
    """CoTを使用して研究計画を作成します。"""
    応答 = planner_llm.invoke([
        SystemMessage(コンテンツ=(
            「あなたは研究プランナーです。段階的に考えてください。\n」
            "[分析] どのような側面を調査する必要がありますか?\n"
            "[計画] 4 ～ 6 つの具体的な調査ステップを作成します。\n"
            「番号付きのステップのみを返します。」
        ))、
        HumanMessage(コンテンツ=(
            f"リサーチクエリ: {state['query']}\n"
            f"過去のコンテキスト: {state['memory_context']}"
        ))、
    ])
    ステップ = [
        line.strip().lstrip("0123456789.)-").strip()
        response.content.strip().split("\n") の行
        if line.strip() および any(c.isalpha() for c in line)
    】
    return {**state, "plan": ステップ、"current_step": 0、"research_notes": []}


def Research_step(状態: ResearchState) -> ResearchState:
    """現在の調査ステップを実行します。"""
    if state["current_step"] >= len(state["plan"]):
        状態を返す

    ステップ = 状態["計画"][状態["現在のステップ"]]
    prev_notes = "\n".join(state["research_notes"][-3:])
    応答 = Researcher_llm.invoke([
        SystemMessage(コンテンツ=(
            「あなたは徹底的な研究者です。このステップでは:\n」
            "1. トピックを深く調査します\n"
            "2. 具体的な事実、データ、例を提供してください\n"
            "3. 可能な場合は出典を引用します\n"
            「包括的でありながら焦点を絞ってください。」
        ))、
        HumanMessage(コンテンツ=(
            f"クエリ全体: {state['query']}\n"
            f"現在のステップ: {ステップ}\n"
            f"以前の調査結果:\n{prev_notes}"
        ))、
    ])

    ノート = 状態["リサーチ_ノート"] + [
        f"[ステップ {state['current_step'] + 1}] {ステップ}\n{response.content}"
    】
    Memory.add_session_note(f"調査済み: {ステップ}")

    戻り値 {
        **州、
        "research_notes": メモ、
        "現在のステップ": 状態["現在のステップ"] + 1、
    }


def check_research_done(状態: ResearchState) -> str:
    """さらに研究手順が残っているかどうかを確認してください。"""
    if state["current_step"] < len(state["plan"]):
        return "continue_research"
    return "write_report"


def write_report(state: ResearchState) -> 研究状態:
    """研究ノートからレポートを作成します。"""
    all_notes = "\n\n".join(state["research_notes"])
    応答 = Writer_llm.invoke([
        SystemMessage(コンテンツ=(
            「あなたはレポート作成の専門家です。しっかりと構成されたレポートを書きましょう。」
            "調査メモに基づいたレポート。次のものが含まれます:\n"
            "- 概要\n"
            "- 主な調査結果と詳細\n"
            "- 分析と洞察\n"
            「- 結論と推奨事項」
        ))、
        HumanMessage(コンテンツ=(
            f"クエリ: {state['query']}\n\n研究ノート:\n{all_notes}"
        ))、
    ])
    return {**state, "draft": response.content}


def critique_report(状態: ResearchState) -> ResearchState:
    """レポートを自己批判してください。"""
    応答 =critic_llm.invoke([
        SystemMessage(コンテンツ=(
            「あなたは厳格な編集者です。このレポートを批判してください:\n」
            "1. 情報は正確で、サポートは十分ですか?\n"
            "2. 論理構造ですか?\n"
            "3. ギャップや視点の不足はありますか?\n"
            "4. スコア 1 ～ 10。スコア >= 8 の場合は、「承認済み」と言ってください。\n"
            「そうでない場合は、必要な具体的な改善を列挙してください。」
        ))、
        HumanMessage(コンテンツ=(
            f"クエリ: {state['query']}\n\nレポート:\n{state['draft']}"
        ))、
    ])
    戻り値 {
        **州、
        "批評": 応答.コンテンツ,
        "反復": 状態["反復"] + 1、
    }


def check_quality(状態: ResearchState) -> str:
    """批評に基づいたルート。"""
    state["critique"].upper() で「承認」の場合:
        「ファイナライズ」を返す
    if state["iteration"] >= state["max_iterations"]:
        「ファイナライズ」を返す
    「修正」を返す


def Revise_report(状態: ResearchState) -> ResearchState:
    """批評(反省)に基づいて修正します。"""
    応答 = Writer_llm.invoke([
        SystemMessage(コンテンツ=(
            「批判に基づいて報告書を修正してください。」
            「言及されたすべての問題に対処します。」
            「同じ構造を維持しながら品質を向上させます。」
        ))、
        HumanMessage(コンテンツ=(
            f"元のレポート:\n{state['draft']}\n\n"
            f"批評:\n{state['critique']}"
        ))、
    ])
    return {**state, "draft": response.content}


def Finalize(状態: ResearchState) -> ResearchState:
    """ファイナライズしてメモリに保存します。"""
    # 長期記憶に保存する
    メモリ.add_research(
        トピック=状態["クエリ"]、
        所見=状態["草案"][:500]、
    ）
    return {**state, "final_report": state["draft"]}


# --- グラフの構築 ---
グラフ = StateGraph(ResearchState)

グラフ.add_node("ロードメモリ", ロードメモリ)
graph.add_node("計画", plan_research)
graph.add_node("リサーチ", Research_step)
graph.add_node("書き込み", write_report)
graph.add_node("批評", critique_report)
graph.add_node("改訂", Revise_report)
graph.add_node("ファイナライズ", ファイナライズ)

graph.set_entry_point("load_memory")
chart.add_edge("load_memory", "plan")
graph.add_edge("計画", "調査")
graph.add_conditional_edges("リサーチ", check_research_done, {
    "Continue_research": "リサーチ",
    "write_report": "書き込み",
})
graph.add_edge("書く", "批評")
graph.add_conditional_edges("批評", check_quality, {
    "改訂": "改訂",
    "ファイナライズ": "ファイナライズ",
})
graph.add_edge("revise", "critique") # 改訂後の再批評
graph.add_edge("ファイナライズ", END)

app = グラフ.compile()


# --- 実行 ---
def Research(クエリ: str) -> str:
    結果 = app.invoke({
        "クエリ": クエリ、
        「計画」: [],
        「現在のステップ」: 0、
        "研究ノート": [],
        "ドラフト": "",
        "批評": "",
        "final_report": "",
        「反復」: 0、
        "max_iterations": 2、
        "memory_context": "",
    })
    print(f"{result['iteration']} リビジョンで完了")
    結果を返す["final_report"]


#使用法
レポート = 調査(「2025 年の企業における AI エージェントの動向分析」)
印刷(レポート)
```

### 8.3。詳細なフロー図

```文章。テキスト
エージェントの完全なフロー:

  ユーザークエリ
      │
      ▼
  ┌─────────┐
  │ メモリをロード │ ← 過去の研究を思い出す
  ━━━━┬───────┘
         │
  ┌──────▼────────┐
  │ 計画 (CoT) │ ← クエリの分解 → 4-6 ステップ
  ━━━━┬───────┘
         │
  ┌──────▼────────┐
  │ 研究 │◄──┐
  │ ステップ N │ │ すべてまでループ
  └──────┬───────┘ │ 手順完了
         │───────┘
         │
  ┌──────▼────────┐
  │ レポートを書く │ ← すべての調査を総合する
  ━━━━┬───────┘
         │
  ┌──────▼────────┐
  │ 自己批評│ ← 採点＋課題発見
  ━━━━┬───────┘
         │
     ┌───┴───┐
     │スコア≧8?│
     └───┬───┘
    いいえ │ はい
    │ └──────►┌──────┐
    │ │ ファイナライズ │ ← メモリに保存
    ▼ ━─────┘
  ┌─────┐
  │ 改訂 │ ← 問題点を修正
  ━━━┬─────┘
       │
       └──► 批評に戻る (最大 2 回)
```

> **ヒント:** このパターンは拡張できます。調査ステップに **Web 検索ツール**を追加し、最終決定の前に **人間によるレビュー**を追加し、どの調査方法が効果的かを思い出すために**エピソード記憶**を追加します。モジュラー アーキテクチャにより反復が容易になります。

---

## 9. まとめ

この記事では、モデルを実際のエージェントに変える最も重要な 3 つの柱について説明しました。

|能力 |主要な概念 |ツール/テクニック |
|----------|---------------|------|
| **メモリ** |短期、長期、エピソード的、セマンティック、ワーキング | LangChain メモリ、ベクター ストア、Redis、カスタム マネージャー |
| **計画中** |タスクの分解、計画と実行、階層型 |構造化出力、LangGraph ステート マシン |
| **推論** | CoT、思考の木、自己一貫性 | CoT プロンプト、マルチパス生成、投票 |
| **自己反省** |反省、自己批判、検証 |批評ループ、出力バリデータ、反復改良 |
| **人間参加型** |承認、フィードバック、中断/再開 | LangGraph チェックポイント、割り込みパターン |

覚えておくべき重要な点:

1. **メモリは贅沢品ではありません** - すべての制作エージェントの要件です
2. **実行前の計画** — 常に複雑なタスクを分解する
3. **推論トレース**は、エージェントの動作のデバッグと改善に役立ちます
4. **自己反省**は、エージェントが再トレーニングせずに自らを改善する方法です
5. **ヒューマンインザループ**はセーフティネットであり、リスクの高い行動に必要です
6. **すべてを組み合わせる** — 5 つの機能をすべて組み合わせたものが最強のエージェントです

---

## 10. 次の記事

**レッスン 16: エージェントの評価とテスト**では、AI エージェントを体系的に評価およびテストする方法を学びます。

- エージェントの **評価指標**: タスクの完了、正確さ、効率
- **ベンチマーク スイート**とテスト ケースの作成方法
- エージェント構成の **A/B テスト**
- プロンプト/モデル更新時の **回帰テスト**
- **本番環境の監視** — 現実世界でのエージェントの動作を追跡します

エージェントが記憶力、計画性、推論力を身に付けたら、次の質問は次のとおりです。**「エージェントがうまく機能していることをどのようにして確認できますか?」** レッスン 16 でその質問に答えます。
