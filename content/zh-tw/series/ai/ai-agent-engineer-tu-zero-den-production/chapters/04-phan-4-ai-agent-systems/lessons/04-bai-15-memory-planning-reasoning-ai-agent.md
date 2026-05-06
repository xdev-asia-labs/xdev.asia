---
id: 019e0a01-bb15-7001-c001-ee1500000001
title: 第 15 課：AI 代理中的記憶、規劃與推理
slug: bai-15-memory-planning-reasoning-ai-agent
description: 記憶類型：短期（對話）、長期（向量儲存）、情境。规划策略：任务分解、子目标生成。鍊式思考推理。自我反思，迭代完善。人機互動模式。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 14
section_title: 第 4 部分：AI 代理和基於代理的系統
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: AI代理工程師：從零到生產
  slug: ai-agent-engineer-tu-zero-den-production
locale: zh-tw
---

> **特工不像金魚那樣有記憶力 - 每次他們說話時，他們就會忘記一切。 ** 不知道如何計劃的特工只會胡亂行動。不懂推理的特工只能“鹦鹉学舌”地模仿提示。 **记忆**、**规划**、**推理**这三种功能将简单的聊天机器人变成真正的智能人工智能代理。在本文中，我們將深入研究每項能力，用 **LangChain**、**LangGraph**、**Redis**、**PostgreSQL** 來實現它，然後將其合成為一個能夠記憶、規劃和推理的完整代理。

---

## 1. 為什麼記憶很重要？

### 1.1。沒有記憶的特務=金魚

想像一下，您每天都會打電話，但它不記得任何事情：

```text
Ngày 1: "Tôi thích Python, đang học AI"
Agent:  "Tuyệt vời! Tôi sẽ giúp bạn học AI với Python."

Ngày 2: "Tiếp tục bài hôm qua đi"
Agent:  "Xin lỗi, bạn là ai? Bạn muốn học gì?"  ← 🐟 Goldfish mode

Ngày 3: "Nhắc lại preferences của tôi"
Agent:  "Tôi không có thông tin gì về bạn."      ← 🐟🐟🐟
```

這是核心問題：**LLM 設計為無狀態**。每個 API 呼叫都是一個新的對話。如果沒有記憶層，代理就會失去所有上下文。

### 1.2。上下文視窗 - 硬限制

每个法学硕士都有一个有限的**上下文窗口**：

|型號|上下文視窗 | ~文字頁數|
|--------|-------------|----------------|
| GPT-4o | 128K 代幣 |約 300 頁 |
|克勞德 3.5 十四行詩 | 20 萬個代幣 |約 500 頁 |
|雙子座1.5 Pro | 2M 代幣 |約 5000 頁 |
|駱駝3.1 | 128K 代幣 |約 300 頁 |

聽起來很多，但在生產中：

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

記憶體層幫助代理**有效地管理資訊**，而不是將其全部塞入上下文視窗中。

### 1.3。三元能力：記憶－計畫－推理

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

> **提示：** 这三种能力不能独立发挥作用。記憶為規劃提供了背景。規劃為推理創建結構。推理改善了智能體使用記憶體的方式。這是一個**良性循環**。

---

## 2. AI Agent 中的記憶體類型

### 2.1。記憶體的分類

AI Agent 需要許多不同類型的記憶，類似於人腦的工作方式：

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

### 2.2。內存類型對照表

|內存類型 |堅持|產能 |使用案例|範例|
|------------|-------------|----------|----------|--------|
| **短期** |僅限會議 |小（最後 N 圈）|對話背景 |聊天記錄緩衝區 |
| **長期** |永久|大（無限制）|知識保留|向量存儲，DB |
| **情境** |永久|平均 |汲取經驗| “上次使用者討厭 X 格式”|
| **語意** |永久|大|事實與概念| “Python 是一種程式語言” |
| **工作** |任務持續時間|小|當前任務狀態|暫存器，中間結果 |

### 2.3。短期記憶——對話緩衝

短期記憶保留了最近的對話內容：

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

### 2.4。長期記憶 — 向量存儲

長期記憶永久儲存訊息，通常使用**向量資料庫**：

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

### 2.5。情景記憶與語意記憶

|方面|情景記憶|語意記憶 |
|--------|----------------|-----------------|
| **內容** |具體事件/情節|一般事實/概念|
| **格式** | “X 天，使用者要求 Y，代理執行 Z，結果 W”| “Python 使用縮排而不是大括號”|
| **檢索** |依時間/上下文相似度 |依概念相似度 |
| **更新** |追加新劇集 |合併與更新事實 |
| **用例** |從過去的錯誤中學習 |建立知識庫 |

> **提示：**情景記憶對於**自我提升**極為重要。 Agent記住「上次使用策略A失敗，策略B成功」→下次選擇B。

---

## 3. 使用 Python 實作代理內存

### 3.1。浪鏈內存類

LangChain提供了許多內建的記憶體類別：

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

比較記憶體類別：

|內存類別 |代幣使用 |資訊遺失|最適合 |
|------------|-------------|------------|----------|
| `ConversationBufferMemory` |線性增加 |無損失|短聊（<20 turns) |
| `ConversationBufferWindowMemory` |固定（K 圈）|失去舊轉彎|聊了很長時間，只需要最近的上下文 |
| `ConversationSummaryMemory` |緩慢增長 |丟失細節|聊了很長時間，需要概述 |
| `ConversationSummaryBufferMemory` |混合動力|減少損失 |生產－最佳平衡|

### 3.2. Vector Store-backed Memory

使用向量儲存來儲存長期記憶，以幫助代理記住跨會話的資訊：

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

### 3.3。 Redis 持久記憶體

使用 Redis 來在重新啟動後保留記憶體：

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

在生產中，我們經常需要一個結合了多種記憶體類型的自訂記憶體管理器：

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
        if len(self.short_term) > self.max_short_term：
            # 刪除前總結最舊的訊息
            self._summarize_and_archive(self.short_term[:5])
            self.short_term = self.short_term[5:]

    def add_long_term(self, 內容: str, 元資料: 可選[dict] = None):
        """將事實/偏好保存到長期記憶中。"""
        元 = 元資料或 {}
        元[“user_id”] = self.user_id
        元[“時間戳記”] = datetime.now().isoformat()
        元[“類型”] =“長期”
        self.long_term.add_texts(
            文本=[內容],
            元資料=[元],
        ）

    def add_episode(self, 任務: str, 動作: list[str],
                    結果：str，成功：bool）：
        “”“保存情節（經驗）以從過去學習。”“”
        劇集文字 = (
            f"任務：{任務}\n"
            f"動作：{', '.join(actions)}\n"
            f"結果：{結果}\n"
            f“成功：{成功}”
        ）
        self.episodic.add_texts(
            文本=[劇集文本],
            元資料=[{
                「任務」：任務，
                「成功」：成功，
                「時間戳記」：datetime.now().isoformat(),
                “類型”：“情景”，
            }],
        ）

    def recall(self, query: str, k: int = 5) -> dict:
        “”“回憶所有商店的相關記憶。”“”
        # 短期：返回全部（受滑動視窗限制）
        Short = self.short_term[-10:] # 最後 10 回合

        # 長期：相似性搜尋
        長 = self.long_term.similarity_search(查詢, k=k)

        # Episodic：尋找相關的過去經歷
        劇集 = self.episodic.similarity_search(query, k=3)

        返回{
            「短期」：短期，
            "long_term": [long 文件的 doc.page_content],
            "episodic": [doc.page_content 用於劇集中的文件],
        }

    def _summarize_and_archive(self, messages: list[dict]):
        """總結舊消息並長期保存。"""
        文字 = "\n".join(
            f"{m['role']}: {m['content']}" 表示訊息中的 m
        ）
        摘要 = self.llm.invoke(
            f“簡潔地總結一下這次對話：\n{text}”
        ）
        self.add_long_term(
            內容=摘要.內容，
            元資料={"type": "conversation_summary"},
        ）


#用法
記憶體 = AgentMemoryManager(user_id="user_123")

#對話
memory.add_short_term("user", "我需要為銷售應用程式建立 REST API")
memory.add_short_term("assistant", "我建議使用FastAPI + PostgreSQL")
memory.add_long_term("使用者需要REST API進行電子商務，偏好FastAPI")

# 記錄劇集
記憶體.add_episode(
    任務=“為產品建立CRUD API”，
    actions=["建立 FastAPI 應用程式", "新增 SQLAlchemy 模型", "編寫測試"],
    result="API 測試覆蓋率為 100%",
    成功=真，
）

# 稍後－回憶相關上下文
context = memory.recall("如何優化API效能？")
```

> **提示：** 在製作中，將 **重要性評分** 加入記憶中。並非所有資訊都需要保存。在保存到長期記憶之前使用 LLM 評估重要性。

---

## 4. Planning Strategies

### 4.1。為什麼代理商需要規劃？

不知道規劃的智能體將會表現出**反應性**－只是對當前的輸入做出反應，而沒有策略。規劃使代理變得**主動**－能夠根據策略進行規劃和執行。

```文字.文字
無計劃： 有計劃：

使用者：“寫一篇關於人工智慧的部落格文章” 用戶：“寫一篇關於人工智慧的部落格文章”
                                   
代理人：*立即寫信* 代理人思考：
       *忘記研究* 1. 研究人工智慧熱門話題
       *無大綱* 2.選擇主題+建立大綱
       *缺少範例* 3. 根據大綱寫草稿
       *混亂的結果* 4.新增程式碼範例
                                    5. 審核和編輯
                                    6. 格式化和定稿
                                   
                                   代理：*執行每一步*
                                          *結構化結果*
```

### 4.2. Task Decomposition

**任務分解**是一種將複雜任務分解為更小、易於處理的子任務的技術：

```文本。文字
任務分解流程：

  複雜的任務：“分析競爭對手並制定行銷策略”
                              │
                    ┌──────────▼──────────┐
                    │ 分解器 │
                    │ (法學碩士) │
                    └──────────┬──────────┘
                              │
         ┌──────────────────── ┼────────────────────┐
         │ │ │
  ┌──────▼──────┐ ┌────────▼──────┐ ┌──────▼────┐
  │ 子任務 1 │ │ 子任務 2 │ │ 子任務 3 │
  │ │ │ │ │ │
  │ 研究 │ │ SWOT │ │ 創造 │
  │ 競爭對手 │──→ │ 分析 │──→ │ 策略 │
  │（網路搜尋）│ │（分析）│ │（撰寫文件）│
  └──────────────┘ └──────────────┘ └────────────┘
         │ │ │
         ▼ ▼ ▼
    5 個 SWOT 矩陣策略文件列表
    每個競爭對手的行動
```

Implementation:

```蟒蛇
從 langchain_openai 導入 ChatOpenAI
從 langchain_core.prompts 導入 ChatPromptTemplate
從 pydantic 匯入 BaseModel、Field


類別子任務（基礎模型）：
    “”“計劃中的子任務。”“”
    id: int = Field(描述=“任務 ID”)
    描述：str = Field(描述=“子任務描述”)
    依賴項：列表[int] = Field(
        default_factory = list，description =“這取決於任務的ID”
    ）
    需要的工具：列表[str]=欄位（
        default_factory=列表，描述=“所需工具”
    ）


類別任務計劃（基礎模型）：
    “”“計劃分解任務。”“”
    目標：str = Field(描述=“總體目標”)
    子任務：list[SubTask] = Field(description="子任務清單")
    估計步數：int = Field(描述=“總步數”)


llm = ChatOpenAI(模型=“gpt-4o”，溫度=0)
Structured_llm = llm.with_structed_output(任務計劃)

decompose_prompt = ChatPromptTemplate.from_messages([
    (「系統」,「」「你是任務規劃專家。
將使用者的複雜任務分解為更小的、可操作的子任務。
每個子任務應該是：
- 具體且可操作
- 有明確的依賴關係
- 列出所需的工具

可用工具：web_search、code_executor、file_writer、
                 資料分析器、文件產生器"""),

    （“人類”，“任務：{任務}”），
]）

鏈結= decompose_prompt |結構化_llm

#分解
計劃 = chain.invoke({
    "task": "分析EdTech領域的3個競爭對手"
            “並產生詳細的比較報告”
})

對於 plan.subtasks 中的子任務：
    deps = f" (取決於: {subtask.dependency})" if subtask.dependency else ""
    print(f" [{subtask.id}] {subtask.description}{deps}")
    print(f" 工具: {subtask.tools_needed}")
```

### 4.3. Plan-and-Execute Pattern

**計劃並執行**是最強大的模式：代理首先創建計劃，然後執行每個步驟。如果任何步驟失敗，代理可以**重新計劃**。

```文本。文字
計劃和執行循環：

  ┌──────────┐
  │ 輸入 │
  │ (複雜 │
  │ 任務） │
  └──────┬──────┘
         │
  ┌──────▼──────┐ ┐──────────────┐
  │ 計畫者 │────→ 計畫 │
  │ (建立 │ │ [步驟 1, │
  │ 計畫) │ │ 步驟2, │
  └──────────────┘ │ 步驟3，...] │
                      └──────┬────────┘
                             │
                      ┌──────▼────────┐
                      │ 執行人 │
                      │（運行步驟）│◄────────────┐
                      └──────┬────────┘ │
                             │ │
                      ┌──────▼────────┐ ┌──────┴──────┐
                      │ 評估 │──否──│ 重新規劃 │
                      │ 成功？    │ │ （調整 │
                      └──────┬────────┘ │ 計畫) │
                             │是└────────────┘
                      ┌──────▼────────┐
                      │ 結果 │
                      └────────────┘
```

LangGraph implementation:

```蟒蛇
從輸入匯入 Annotated、TypedDict
從 langgraph.graph 匯入 StateGraph，END
從 langchain_openai 導入 ChatOpenAI
從 langchain_core.messages 導入 HumanMessage、SystemMessage


類別 PlanExecuteState(TypedDict):
    輸入：str
    計劃：列表[str]
    目前步數：整數
    步驟結果：清單[str]
    最終結果：str
    錯誤計數：整數


llm = ChatOpenAI(模型=“gpt-4o”，溫度=0)


def planner(狀態: PlanExecuteState) -> PlanExecuteState:
    """根據輸入建立計劃。"""
    響應 = llm.invoke([
        系統訊息(內容=(
            “你是一個計劃者。將任務分成 3-7 個具體步驟。”
            “僅返回編號清單。”
        ）），
        HumanMessage(content=f"任務：{state['input']}"),
    ]）
    步驟= [
        line.strip().lstrip("0123456789.").strip()
        對於response.content.strip().split("\n")中的行
        if line.strip()
    ]
    回傳{**狀態，「計畫」：步驟，「current_step」：0，「step_results」：[]}


def 執行器(狀態: PlanExecuteState) -> PlanExecuteState:
    """執行目前步驟。"""
    步驟=狀態[“計劃”][狀態[“目前步驟”]]
    上下文 = "\n".join(
        f“第{i+1}步結果：{r}”
        for i, r in enumerate(state["step_results"])
    ）
    響應 = llm.invoke([
        系統訊息(內容=(
            “執行給定的步驟。使用前面步驟中的上下文。”
        ）），
        人類留言(內容=(
            f"總體目標：{state['input']}\n"
            f"之前的結果：\n{context}\n"
            f"當前步驟：{步驟}\n"
            “執行這一步，返回結果。”
        ）），
    ]）
    結果 = 狀態["step_results"] + [response.content]
    返回{
        **狀態，
        “step_results”：結果，
        「當前步」：狀態[「當前步」] + 1，
    }


def should_continue(state: PlanExecuteState) -> str:
    """檢查是否還有其他步驟。"""
    如果狀態[“current_step”] >= len(狀態[“計劃”]):
        返回“最終確定”
    返回“執行”


def 終端機(狀態: PlanExecuteState) -> PlanExecuteState:
    “”“總結結果。”“”
    all_results = "\n\n".join(
        f“第{i+1}步：{r}”
        for i, r in enumerate(state["step_results"])
    ）
    響應 = llm.invoke([
        SystemMessage(content="綜合所有步驟結果為最終答案。"),
        人類留言(內容=(
            f"目標：{狀態['輸入']}\n\n結果：\n{all_results}"
        ）），
    ]）
    返回{**state，“final_result”：response.content}


# 建立圖表
圖=狀態圖（計劃執行狀態）
graph.add_node("規劃器", 規劃器)
graph.add_node("執行器", 執行器)
graph.add_node("終結器", 終結器)

graph.set_entry_point("規劃器")
graph.add_edge("規劃者", "執行者")
graph.add_conditional_edges("執行者", should_continue, {
    “執行”：“執行者”，
    "finalize": "終結器",
})
graph.add_edge("終結器", END)

應用程式 = graph.compile()

# 運行
結果 = app.invoke({
    "input": "研究總結2025年人工智慧三大趨勢",
    「計劃」：[]，
    「目前步數」：0，
    “步驟結果”：[]，
    “最終結果”：“”，
    “錯誤計數”：0，
})
列印（結果[“最終結果”]）
```

### 4.4. Hierarchical Planning

分層規劃：**高層規劃** → **中階規劃** → **低階行動**：

```文字.文字
分層規劃：

0 級－戰略：
  《打造電子商務平台》
         │
1 級－戰術：
  ├── 「設計資料庫架構」
  ├── 「建構 REST API」
  ├── 「創建前端」
  └── 「設定展開」
         │
2 級 — 運行：
  ├── 「設計資料庫架構」
  │ ├── “定義產品模型”
  │ ├── “定義訂單模型”
  │ ├── “定義使用者模型”
  │ └── 「建立關係」
  ├── 「建構 REST API」
  │ ├── “安裝FastAPI專案”
  │ ├── 「實現 CRUD 端點」
  │ ├── 「新增認證」
  │ └── 「編寫API測試」
  …
```

> **提示：** 分層規劃與 **多代理系統** 結合使用時特別有效（第 14 課）。代理經理處理 0-1 級，專業代理處理 2 級。

---

## 5. Chain-of-Thought Reasoning

### 5.1. CoT Prompting

**思想鏈（CoT）**迫使LLM逐步推理，而不是直接跳到結論：

```文本。文字
無 CoT： 有 CoT：

問：“伺服器錯誤503，如何修復？” 問：“伺服器錯誤503，如何修復？”

A：「重啟伺服器」 A：「我們來分析一下每一步：
    （缺乏推理） 1. 503 = 服務不可用
                                           2、可能原因：
                                              - 後端服務關閉
                                              - 資源耗盡
                                              - 負載平衡器逾時
                                           3、需要檢查：
                                              - 伺服器日誌
                                              - CPU/記憶體使用情況
                                              - 上游服務
                                           4. 根據原因進行修復：
                                              - 擴大資源規模
                                              - 如果崩潰則重新啟動
                                              - 如果依賴則修復上游”
```

在代理程式中部署 CoT：

```蟒蛇
從 langchain_openai 導入 ChatOpenAI
從 langchain_core.prompts 導入 ChatPromptTemplate

llm = ChatOpenAI(模型=“gpt-4o”，溫度=0)

cot_prompt = ChatPromptTemplate.from_messages([
    （“系統”，“”“你是一位解決問題的專家。
對於每個問題，請遵循以下推理過程：

1. **理解**：用自己的話重述問題
2. **分析**：確定關鍵因素和限制因素
3. **分解**：如果複雜則分解為子問題
4. **原因**：逐步解決每個子問題
5. **綜合**：將子答案組合成最終答案
6. **驗證**：檢查答案是否有意義

使用以下格式清楚地表達你的推理：
[理解]...
[分析]...
[原因] ...
[答案] ..."""),
    （“人類”，“{問題}”），
]）

鏈= cot_prompt |勒姆
響應 = chain.invoke({
    "question": "尖峰時段電商系統速度較慢。"
                “資料庫CPU 95%，API回應時間5s。解決方案嗎？”
})
列印（響應.內容）
```

### 5.2. Tree-of-Thought (ToT)

**思想樹**透過並行探索**多個推理分支**來擴展 CoT，然後選擇最好的一個：

```文字.文字
思想樹：

                    問題
                       │
            ┌──────────┼──────────┐
            │ │ │
        想法 1 想法 2 想法 3
        “擴展資料庫”“新增快取”“優化
            │ │ 查詢》
         ┌──┴──┐ ┌──┴──┐ │
         │ │ │ │ │
       T1.1 T1.2 T2.1 T2.2 T3.1
       讀取新增Redis CDN索引
       副本 pgbouncer 靜態慢
                                      查詢
            │ │ │
         分數： 分數： 分數：
          0.7 0.9 0.8
            │ │ │
            └──────────┼──────────┘
                       │
                  最佳：思考2
                  》新增Redis快取+
                   CDN 靜態”
```

```蟒蛇
從 langchain_openai 導入 ChatOpenAI
從 langchain_core.messages 導入 HumanMessage、SystemMessage

llm = ChatOpenAI(模型=“gpt-4o”，溫度=0.7)
評估器= ChatOpenAI（模型=“gpt-4o”，溫度= 0）


def tree_of_thought(問題: str, n_thoughts: int = 3) -> str:
    “”“思想樹推理。”“”

    # 第 1 步：產生多個初始想法
    想法=[]
    對於我在範圍內（n_thoughts）：
        響應 = llm.invoke([
            系統訊息(內容=(
                f“生成方法#{i+1}（與其他方法不同）”
                f“解決這個問題。要具體且有創意。”
            ）），
            HumanMessage(content=f"問題：{問題}"),
        ]）
        ideas.append(回應.內容)

    # 第 2 步：評估每個想法
    分數 = []
    對於思想中的思想：
        eval_response = evaluator.invoke([
            系統訊息(內容=(
                “按照 1-10 的等級評估該解決方案。”
                “考慮：可行性、有效性、成本、時間。”
                “僅傳回數字分數。”
            ）），
            人類留言(內容=(
                f"問題：{問題}\n方法：{想法}"
            ）），
        ]）
        嘗試：
            分數 = float(eval_response.content.strip())
        除了值錯誤：
            分數 = 5.0
        分數.append(分數)

    # 第三步：選擇最佳想法並詳細闡述
    best_idx = Scores.index(max(分數))
    best_thought = 想法[best_idx]

    最終 = llm.invoke([
        系統訊息(內容=(
            “詳細說明此解決方案方法。提供詳細資訊”
            “實施步驟、潛在問題和緩解措施。”
        ）），
        人類留言(內容=(
            f“問題：{問題}\n”
            f“所選方法（得分 {scores[best_idx]}/10）：\n”
            f“{最佳想法}”
        ）），
    ]）

    返回最終內容


#用法
解決方案=思想樹（
    “電子商務應用程式需要處理黑色星期五期間 10 倍的流量高峰。”
    “當前堆疊：AWS 上的 FastAPI + PostgreSQL + Redis。”
）
列印（解決方案）
```

### 5.3. Self-Consistency

**自洽**產生多個推理路徑，然後選擇出現次數最多的答案（多數投票）：

```文字.文字
自洽流程：

  問題：“對於用戶配置文件，我應該使用 SQL 還是 NoSQL？”
                        │
           ┌────────────┼────────────┐
           │ │ │
       路徑 1 路徑 2 路徑 3
       (溫度=0.7) (溫度=0.7) (溫度=0.7)
           │ │ │
       “SQL 因為”SQL 因為“NoSQL 因為
        結構化ACID，靈活
        數據，ACID”加入“模式”
           │ │ │
           ▼ ▼ ▼
        答案：SQL 答案：SQL 答案：NoSQL
           │ │ │
           └────────────┼────────────┘
                        │
                 多數投票：SQL (2/3)
                 信賴度：66.7%
```

> **提示：** 自我一致性對於決策任務特別有用。當智能體需要做出重要決策（選擇架構、選擇工具）時，產生5條推理路徑，然後投票選出更可靠的結果。

---

## 6. Self-Reflection & Iterative Refinement

### 6.1. Reflexion Architecture

**反射**是一種允許代理人自我評估輸出、從經驗中學習並改進的架構：

```文本。文字
反射循環：

  ┌────────────────────────────────────────────┐
  │ │
  │ ┌──────────┐ ┌──────────┐ │
  │ │ 演員 │────→ 行動 │ │
  │ │ (代理) │ │ (執行) │
  │ └──────────┘ └────┬──────┘ │
  │ ▲ │ │
  │ │ ┌────▼──────┐ │
  │ │ │ 評估 │ │
  │ │ │ （檢查 │ │
  │ │ │ 結果) │ │
  │ │ └────┬──────┘ │
  │ │ │ │
  │ │ ┌────────▼──────────┐ │
  │ │ │ 反射鏡 │ │
  │ │ │ │ │
  │ │ │ 「出了什麼問題？」 │ │
  │ │ │ 「需要改進什麼？」 │ │
  │ │ │ 「吸取教訓？」 │ │
  │ │ └──────────┬──────────┘ │
  │ │ │ │
  │ │ ┌────────▼──────────┐ │
  │ │ │ 記憶體更新 │ │
  │ │ │ 儲存反射 │ │
  │ └────│ 下次試試 │ │
  │ └──────────────────────┘ │
  │ │
  └────────────────────── ──────────────────────┘
```

### 6.2. Self-Critique Loop — Implementation

```蟒蛇
從 langchain_openai 導入 ChatOpenAI
從 langchain_core.messages 導入 HumanMessage、SystemMessage
從 pydantic 匯入 BaseModel、Field


CritiqueResult 類別（基礎模型）：
    分數： float = Field(description="質量分數 0-10")
    問題：list[str] = Field(description="發現問題")
    建議：list[str] = Field(description="改進建議")
    is_acceptable: bool = Field(description="輸出是否符合品質標準")


SelfRefiningAgent 類別：
    “”“具有自我批判和迭代完善的Agent。”“”

    def __init__(self, max_iterations: int = 3):
        self.actor = ChatOpenAI(model="gpt-4o", 溫度=0.7)
        self.critic = ChatOpenAI(model="gpt-4o", 溫度=0)
        self.structured_critic = self.critic.with_structured_output(CritiqueResult)
        self.max_iterations = max_iterations
        self.reflections: 列表[str] = []

    def生成（自我，任務：str）-> str：
        """產生初始輸出。"""
        上下文=“”
        如果自我反思：
            上下文 = (
                “\n\n之前的反思（避免這些錯誤）：\n”
                + "\n".join(f"- {r}" for self.reflections 中的 r)
            ）

        回應 = self.actor.invoke([
            系統訊息(內容=(
                “你是一位專家助理。產出高品質的成果。”
                f“{上下文}”
            ）），
            HumanMessage(內容=任務),
        ]）
        回傳回應內容

    def Critique(self, 任務: str, 輸出: str) -> CritiqueResult:
        “”“自我批評輸出。”“”
        返回 self.structed_critic.invoke([
            系統訊息(內容=(
                “您是嚴格的品質審核員。評估輸出”
                “違反任務要求。批評但公平。”
                “8分以上意味著品質可以接受。”
            ）），
            人類留言(內容=(
                f“任務：{任務}\n\n要審核的輸出：\n{輸出}”
            ）），
        ]）

    def 反射（自我，任務：str，輸出：str，
                批評: CritiqueResult) -> str:
        “”“產生改進的反思。”“”
        反應 = self.critic.invoke([
            系統訊息(內容=(
                “根據批評，產生簡潔的反思”
                “這將有助於改進下一次嘗試。”
                “專注於具體的、可操作的改進。”
            ）），
            人類留言(內容=(
                f"任務：{任務}\n"
                f“輸出：{輸出}\n”
                f“問題：{critique.issues}\n”
                f“建議：{critique.suggestions}”
            ）），
        ]）
        回傳回應內容

    def run(self, 任務: str) -> 字典:
        “”“運行自我優化循環。”“”
        對於範圍內的迭代（self.max_iterations）：
            print(f"\n--- 迭代 {迭代 + 1} ---")

            # 生成
            輸出 = self.generate(任務)

            # 批評
            批判 = self.critique(任務, 輸出)
            print(f"分數：{critique.score}/10")
            print(f"可接受：{critique.is_acceptable}")

            如果 critique.is_acceptable:
                返回{
                    “輸出”：輸出，
                    「迭代」：迭代+1，
                    「final_score」：批評.score，
                }

            # 反映並存儲
            反射 = self.reflect(任務、輸出、批評)
            self.reflections.append(反射)
            print(f"反射：{反射[:100]}...")

        # 在最大迭代次數後返回盡力而為的結果
        返回{
            “輸出”：輸出，
            「迭代」：self.max_iterations，
            「final_score」：批評.score，
            "note": "達到最大迭代次數",
        }


#用法
代理 = SelfRefiningAgent(max_iterations=3)
結果=代理.運行（
    “編寫一個驗證電子郵件地址的 Python 函數。”
    “處理邊緣情況。包括文件字串和類型提示。”
）
print(f"\n最終輸出（在 {result['iterations']} 次迭代之後）：")
print(f"分數：{結果['final_score']}/10")
列印（結果[“輸出”]）
```

### 6.3. Output Validation Pattern

除了使用LLM進行自我批評之外，我們還應該添加**確定性驗證**：

```蟒蛇
進口再
導入AST
從輸入 import Callable


類別輸出驗證器：
    """使用規則 + LLM 驗證代理輸出。"""

    def __init__(自身):
        self.rules: 列表[可調用] = []

    def add_rule(self, 名稱: str, check_fn: Callable[[str], bool],
                 錯誤訊息：str):
        self.rules.append({
            “姓名”：姓名，
            「檢查」：check_fn，
            “錯誤”：error_msg，
        })

    def validate(self, 輸出: str) -> 字典:
        錯誤=[]
        對於 self.rules 中的規則：
            如果不規則["check"](output):
                error.append(f"{rule['name']}: {rule['error']}")
        返回{
            「有效」：len（錯誤）== 0，
            「錯誤」：錯誤，
        }


# 例如：驗證程式碼輸出
驗證器 = OutputValidator()

驗證器.add_rule(
    “文法檢查”，
    lambda 代碼：_is_valid_python(代碼),
    “代碼有語法錯誤”，
）

驗證器.add_rule(
    “無硬編碼秘密”，
    lambda 程式碼：不是 re.search(
        r'(api_key|密碼|秘密)\s*=\s*["\'][^"\']+["\']', 代碼
    ),
    “包含硬編碼的秘密”，
）

驗證器.add_rule(
    “有_文檔字串”，
    lambda 代碼：代碼中的 '"""' 或代碼中的 "'''"，
    “缺少文件字串”，
）


def _is_valid_python(代碼: str) -> bool:
    嘗試：
        ast.parse(代碼)
        回傳真
    除了語法錯誤：
        回傳錯誤


# 驗證
結果 = 驗證器.validate('''
def add(a: int, b: int) -> int:
    “”“加兩個數字。”“”
    返回 a + b
'''）
print(結果) # {"valid": True, "errors": []}
```

> **提示：**始終將**基於LLM的批評**（評估品質、邏輯）與**確定性驗證**（檢查語法、格式、規則）結合。 LLM 可以捕捉語義錯誤，規則可以捕捉結構錯誤——兩層保護比一層更好。

---

## 7. Human-in-the-Loop Patterns

### 7.1。為什麼我們需要人在環？

無論智能體多聰明，有些決定需要人類批准：

```文本。文字
代理自治範圍：

  全自動監督人力驅動
  ◄──────────────────────┼── ────────────────────────►
  │ │ │
  “設定文字格式”“傳送電子郵件”“刪除資料庫”
  “總結文件”“部署到暫存”“轉移 10,000 美元”
  “運行測試”“創建公關”“解僱客戶”
  │ │ │
  無需批准 需要批准 始終以人為本
  執行決策前需要
```

### 7.2. Approval Workflow Pattern

```蟒蛇
從輸入導入 TypedDict, Literal
從 langgraph.graph 匯入 StateGraph，END
從 langgraph.checkpoint.memory 導入 MemorySaver
從 langchain_openai 導入 ChatOpenAI


類別 AgentState(TypedDict):
    任務：str
    計劃：str
    批准：布爾 |無
    結果：str
    需要批准：布爾


llm = ChatOpenAI(模型=“gpt-4o”，溫度=0)


def create_plan(狀態: AgentState) -> AgentState:
    """代理程式為任務建立計劃。"""
    響應 = llm.invoke(
        f“為以下內容建立詳細計劃：{state['task']}”
    ）
    # 偵測任務是否需要批准
    high_risk_keywords = ["刪除","部署","發送","付款","生產"]
    需要批准=任何（
        state["task"].lower() 中的 kw for high_risk_keywords 中的 kw
    ）
    返回{
        **狀態，
        「計劃」：回應.內容，
        「需要批准」：需要批准，
        「批准」：無，
    }


def check_approval(狀態: AgentState) -> str:
    """基於批准要求的路線。"""
    如果沒有說明[“requires_approval”]：
        return "execute" # 自動核准低風險任務
    若狀態[「已核准」]為「無」：
        return "wait_for_ human" # 需要人工輸入
    如果狀態[“已批准”]：
        返回“執行”
    返回“拒絕”


def wait_for_ human(狀態: AgentState) -> AgentState:
    “”“暫停並等待人工輸入。
    LangGraph中斷將在這裡暫停執行。
    ”“”
    # 在生產中，這會觸發通知
    # 圖表暫停直到人類做出反應
    返回狀態


defexecute_plan(狀態: AgentState) -> AgentState:
    """執行核准的計畫。"""
    響應 = llm.invoke(
        f“執行此計劃：\n{state['plan']}\n\n”
        f“任務：{狀態[‘任務’]}”
    ）
    傳回{**狀態，「結果」：response.content}


defreject_plan(狀態: AgentState) -> AgentState:
    “”“人類拒絕了計劃。”“”
    return {**state, "result": "計畫被人工審核者拒絕。"}


# 使用檢查點建立圖表
檢查指針 = MemorySaver()

圖 = StateGraph(AgentState)
graph.add_node("create_plan", create_plan)
graph.add_node("wait_for_ human", wait_for_ human)
graph.add_node("執行",execute_plan)
graph.add_node（“拒絕”，reject_plan）

graph.set_entry_point("create_plan")
graph.add_conditional_edges("create_plan", check_approval, {
    “執行”：“執行”，
    "wait_for_Human": "wait_for_Human",
    “拒絕”：“拒絕”，
})
graph.add_conditional_edges("wait_for_ human", check_approval, {
    “執行”：“執行”，
    “拒絕”：“拒絕”，
    "wait_for_Human": "wait_for_Human",
})
graph.add_edge("執行", END)
graph.add_edge("拒絕", END)

應用程式 = graph.compile(checkpointer=checkpointer)
```

### 7.3. LangGraph Interrupt & Resume

LangGraph 支援**中斷**執行以等待人工輸入，然後**恢復**：

```蟒蛇
從 langgraph.graph 匯入 StateGraph，END
從 langgraph.checkpoint.memory 導入 MemorySaver
從 langgraph.types 導入中斷，命令


類別狀態（TypedDict）：
    任務：str
    草稿：str
    回饋：str
    最終：str


defgenerate_draft（狀態：狀態）->狀態：
    """代理建立草稿。"""
    # ...產生草稿...
    return {**state, "draft": "此處草稿內容..."}


def human_review(狀態: 狀態) -> 狀態:
    “”“中斷以進行人工審查。”“”
    # 中斷（）將在這裡暫停圖表
    反饋=中斷（
        # 顯示給人類的訊息
        {"draft": state["draft"], "message": "請審閱此草稿"}
    ）
    返回{**狀態，「回饋」：回饋}


def revise(狀態: 狀態) -> 狀態:
    “”“根據反饋進行修改。”“”
    # ...根據回饋進行修改...
    return {**state, "final": f"修訂: {state['draft']} + {state['feedback']}"}


# 建構
檢查指針 = MemorySaver()

圖 = StateGraph(狀態)
graph.add_node（“生成”，generate_draft）
graph.add_node("評論", human_review)
graph.add_node("修訂", 修訂)

graph.set_entry_point("生成")
graph.add_edge("生成", "審查")
graph.add_edge("審閱", "修改")
graph.add_edge("修改", END)

應用程式 = graph.compile(checkpointer=checkpointer)

# 運行 — 將在 human_review 處暫停
config = {“可設定”：{“thread_id”：“review-1”}}
result = app.invoke({"task": "編寫 API 文件", "draft": "", "feedback": "", "final": ""}, config)

# ...人工審查並提供回饋...

# 透過人工回饋恢復
結果=應用程式.呼叫（
    Command(resume="看起來不錯，但添加更多範例"),
    配置，
）
列印（結果[“最終”]）
```

### 7.4。人在環模式比較表

|圖案|何時使用 |複雜性 |使用者體驗 |
|---------|-------------|------------|-----------------|
| **審核門** |高風險行為之前 |低|簡單的是/否 |
| **回饋循環** |迭代內容創作 |平均 |審核→回饋→修改|
| **Interrupt/Resume** | Complex workflows with checkpoints | Cao | Pause anywhere, resume later |
| **升級** |代理人遇到不確定性 |低|代理在困惑時詢問人類 |
| **協作** |人類+智能體協同工作|曹 |即時共同編輯 |

> **提示：** 在生產中，對於每個具有副作用的操作，從 **批准門** 開始。用戶對代理商更信任後，逐漸減少認可點數。這就是「**漸進自治**」模式。

---

## 8. 動手實作：用記憶+規劃+推理建構智能體

### 8.1。架構概覽

我們將建構一個具有完整記憶、規劃和推理能力的**研究助理代理**：

```文字.文字
研究助理架構師：

  ┌────────────────────────────────────────────────────────┐
  │ 研究助理 │
  │ │
  │ ┌──────────────┐ ┐──────────────┐ ┌────────────┐ │
  │ │ 記憶 │ │ 規劃者 │ │ 推理者 │ │
  │ │ │ │ │ │ │ │
  │ │ 短期 │ │ 分解 │ │ CoT │ │
  │ │ 長期 │ │ 計畫執行 │ │ 自我檢測 │ │
  │ │ 情境式 │ │ 重新規劃 │ │ 反思 │ │
  │ └──────┬──────┘ └──────┬──────┘ └──────┬──────┘ │
  │ │ │ │ │
  │ ┌──────▼────────────── ▼────────────────▼──────┐ │
  │ │ 狀態圖 (LangGraph) │ │
  │ │ │ │
  │ │ 計畫 → 研究 → 分析 → 寫作 → 回顧 │ │
  │ │ ▲ │ │ │
  │ │ └──────── 如果需要的話重新規劃 ──────────┘ │ │
  │ └────────────────────── ────────────────────────┘ │
  │ │
  │ 工具：網路搜尋、筆記記錄、文件編寫器 │
  └────────────────────────────────────────────────────────┘
```

### 8.2. Full Implementation

```蟒蛇
”“”
具有記憶+計劃+推理能力的研究助理代理。
需要： pip install langchain langchain-openai langgraph chromadb
”“”

從輸入導入 TypedDict，註釋
從日期時間匯入日期時間

從 langchain_openai 導入 ChatOpenAI、OpenAIEmbeddings
從 langchain_community.vectorstores 導入 Chroma
從 langchain_core.messages 導入 HumanMessage、SystemMessage
從 langgraph.graph 匯入 StateGraph，END
從 pydantic 匯入 BaseModel、Field


# --- 狀態 ---
類別研究狀態（TypedDict）：
    查詢：str
    計劃：列表[str]
    目前步數：整數
    研究筆記：列表[str]
    草稿：str
    批評：str
    最終報告：str
    迭代：整數
    最大迭代次數：int
    記憶體上下文：str


# --- 記憶體模組 ---
類研究記憶：
    def __init__(self, persist_dir: str = "./research_memory"):
        self.embeddings = OpenAIEmbeddings(model="text-embedding-3-small")
        self.store = 色度(
            集合名稱=“研究史”，
            embedding_function = self.embeddings，
            persist_directory=persist_dir,
        ）
        self.session_notes: 列表[str] = []

    def add_research(self, 主題: str, 結果: str):
        self.store.add_texts(
            texts=[f"主題：{主題}\n調查結果：{調查結果}"],
            元資料=[{
                「主題」：主題，
                「時間戳記」：datetime.now().isoformat(),
            }],
        ）

    def recall(self, query: str, k: int = 3) -> str:
        docs = self.store.similarity_search(查詢, k=k)
        如果沒有文件：
            返回“未發現先前的研究。”
        返回“\n\n”.join(
            f“過去的研究：{doc.page_content}”，用於文件中的文檔
        ）

    def add_session_note(self, note: str):
        self.session_notes.append(註釋)


記憶體=研究記憶體()


# --- 法學碩士設定 ---
planner_llm = ChatOpenAI(模型=“gpt-4o”，溫度=0)
Researcher_llm = ChatOpenAI(模型=“gpt-4o”，溫度=0.3)
writer_llm = ChatOpenAI(模型=“gpt-4o”，溫度=0.7)
ritic_llm = ChatOpenAI(模型=“gpt-4o”，溫度=0)


# --- 節點 ---
def load_memory(狀態: ResearchState) -> ResearchState:
    “”“加載相關的過去研究。”“”
    context = memory.recall(狀態[“查詢”])
    返回{**狀態，「記憶體上下文」：上下文}


def plan_research(狀態: 研究狀態) -> 研究狀態:
    """使用 CoT 建立研究計劃。"""
    回應 = planner_llm.invoke([
        系統訊息(內容=(
            “你是一名研究規劃者。一步步思考。\n”
            “[分析]需要研究哪些方面？\n”
            “[計劃] 創建 4-6 個具體研究步驟。\n”
            “僅返回編號的步驟。”
        ）），
        人類留言(內容=(
            f“研究查詢：{state['query']}\n”
            f“過去的上下文：{state['memory_context']}”
        ）），
    ]）
    步驟= [
        line.strip().lstrip("0123456789.)-").strip()
        對於response.content.strip().split("\n")中的行
        if line.strip() 和 any(c.isalpha() for c in line)
    ]
    返回{**狀態，“計劃”：步驟，“current_step”：0，“research_notes”：[]}


def Research_step(狀態: ResearchState) -> ResearchState:
    “”“執行目前的研究步驟。”“”
    如果狀態[“current_step”] >= len(狀態[“計劃”]):
        返回狀態

    步驟=狀態[“計劃”][狀態[“目前步驟”]]
    prev_notes = "\n".join(state["research_notes"][-3:])
    回應 = Researcher_llm.invoke([
        系統訊息(內容=(
            “你是一位徹底的研究人員。對於這一步：\n”
            "1.深入研究主題\n"
            "2.提供具體的事實、數據、範例\n"
            “3. 盡可能引用來源\n”
            “全面但重點突出。”
        ）），
        人類留言(內容=(
            f"總體查詢：{state['query']}\n"
            f"當前步驟：{步驟}\n"
            f“之前的發現：\n{prev_notes}”
        ）），
    ]）

    筆記=狀態[“研究筆記”] + [
        f"[步驟 {state['current_step'] + 1}] {step}\n{response.content}"
    ]
    memory.add_session_note(f"已研究：{step}")

    返回{
        **狀態，
        「research_notes」：筆記，
        「當前步」：狀態[「當前步」] + 1，
    }


def check_research_done(狀態: ResearchState) -> str:
    “”“檢查是否還有更多的研究步驟。”“”
    如果狀態[“當前步”] < len(state["plan"]):
        return "continue_research"
    return "write_report"


def write_report(state: ResearchState) -> 研究狀態：
    “”“根據研究筆記撰寫報告。”“”
    all_notes = "\n\n".join(state["research_notes"])
    回應 = writer_llm.invoke([
        系統訊息(內容=(
            “你是一位專家報告撰寫者。寫出結構良好的報告”
            “基於研究筆記的報告。包括：\n”
            “- 執行摘要\n”
            “- 主要發現及詳細資訊\n”
            "- 分析與見解\n"
            “- 結論與建議”
        ）），
        人類留言(內容=(
            f"查詢：{state['query']}\n\n研究筆記：\n{all_notes}"
        ）），
    ]）
    傳回{**狀態，「草稿」：response.content}


def critique_report(state: ResearchState) -> ResearchState:
    “”“對報告進行自我批評。”“”
    響應=critic_llm.invoke([
        系統訊息(內容=(
            “你是一位嚴格的編輯。批評這份報告：\n”
            “1. 資訊是否準確且有充分依據？\n”
            "2.邏輯結構是否？\n"
            “3. 是否存在差距或缺失的觀點？\n”
            "4. 得分 1-10。如果得分 >= 8，請說「已批准」。\n"
            “否則列出需要的具體改進。”
        ）），
        人類留言(內容=(
            f"查詢：{state['query']}\n\n報告：\n{state['draft']}"
        ）），
    ]）
    返回{
        **狀態，
        「批評」：回應.內容，
        「迭代」：狀態[“迭代”] + 1，
    }


def check_quality(狀態: ResearchState) -> str:
    “”“基於批評的路線。”“”
    如果狀態[“critique”].upper()中“批准”：
        返回“最終確定”
    如果狀態[“迭代”] >= 狀態[“最大迭代”]：
        返回“最終確定”
    返回“修改”


def revise_report(state: ResearchState) -> ResearchState:
    “”“基於批評（自我反思）進行修改。”“”
    回應 = writer_llm.invoke([
        系統訊息(內容=(
            “根據批評修改報告。”
            “解決提到的每個問題。”
            “保持相同的結構，但提高品質。”
        ）），
        人類留言(內容=(
            f"原始報告：\n{state['draft']}\n\n"
            f"批評：\n{狀態['批評']}"
        ）），
    ]）
    傳回{**狀態，「草稿」：response.content}


def Finalize(狀態: ResearchState) -> ResearchState:
    """完成並儲存到記憶體中。"""
    # 保存到長期記憶
    記憶體.add_research(
        主題=狀態[“查詢”]，
        調查結果=狀態[“草稿”][:500],
    ）
    返回 {**state, "final_report": state["draft"]}


# --- 建立圖表 ---
圖 = StateGraph(ResearchState)

graph.add_node("load_memory", load_memory)
graph.add_node("計畫", plan_research)
graph.add_node（“研究”，research_step）
graph.add_node("寫", write_report)
graph.add_node("批評", critique_report)
graph.add_node("修訂", revise_report)
graph.add_node("最終確定", 最終確定)

graph.set_entry_point(“載入記憶體”)
graph.add_edge("load_memory", "計畫")
graph.add_edge("計畫", "研究")
graph.add_conditional_edges("研究", check_research_done, {
    "continue_research": "研究",
    "write_report": "寫",
})
graph.add_edge("寫", "批評")
graph.add_conditional_edges("批評", check_quality, {
    “修改”：“修改”，
    “最終確定”：“最終確定”，
})
graph.add_edge("revise", "critique") # 修改後重新批評
graph.add_edge("最終確定", END)

應用程式 = graph.compile()


# --- 運行 ---
def 研究（查詢：str）-> str：
    結果 = app.invoke({
        「查詢」：查詢，
        「計劃」：[]，
        「目前步數」：0，
        「研究筆記」：[]，
        “草稿”：“”，
        “批評”：“”，
        “最終報告”：“”，
        「迭代」：0，
        「最大迭代次數」：2，
        “記憶體上下文”：“”，
    })
    print(f"已在 {result['iteration']} 修訂版中完成")
    回傳結果[“最終報告”]


#用法
報告=研究（「2025年企業AI代理趨勢分析」）
列印（報告）
```

### 8.3。詳細流程圖

```文字.文字
完整的代理商流程：

  使用者查詢
      │
      ▼
  ┌────────────┐
  │ 載入記憶體 │ ← 回顧過去的研究
  └──────┬────────┘
         │
  ┌──────▼────────┐
  │ 計畫 (CoT) │ ← 分解查詢 → 4-6 步驟
  └──────┬────────┘
         │
  ┌──────▼────────┐
  │ 研究 │◄──┐
  │ 步驟N │ 循環直到所有
  └──────┬────────┘ │ 步驟完成
         │────────────┘
         │
  ┌──────▼────────┐
  │ 撰寫報告 │ ← 綜合所有研究
  └──────┬────────┘
         │
  ┌──────▼────────┐
  │ 自我批評│ ← 評分+發現問題
  └──────┬────────┘
         │
     ┌───┴───┐
     │分數≥8？ │
     └───┬───┘
    否 │ 是
    │ └──────►┌──────────┐
    │ │ 完成 │ ← 儲存到內存
    ▼ └──────────┘
  ┌──────────┐
  │ 修改 │ ← 修復問題
  └────┬──────┘
       │
       └──► 回傳批評（最多 2 次迭代）
```

> **提示：**此模式可以擴展：在研究步驟中添加**網絡搜索工具**，在最終確定之前添加**人工審查**，添加**情景記憶**以記住哪種研究方法是有效的。模組化架構使得迭代變得容易。

---

## 9. 總結

本文涵蓋了將模型轉變為真實代理的三個最重要的支柱：

|能力|關鍵概念|工具/技術|
|------------|-------------|-----------------|
| **記憶體** |短期、長期、情境、語意、工作 | LangChain記憶體、向量儲存、Redis、自訂管理器 |
| **規劃** |任務分解、規劃與執行、分層 |結構化輸出，LangGraph 狀態機 |
| **推理** | CoT，思想樹，自洽 | CoT 提示、多路徑生成、投票 |
| **自我反省** |反思、自我批評、驗證|批判循環、輸出驗證器、迭代細化 |
| **人在環** |批准、回饋、中斷/恢復 | LangGraph 檢查點、中斷模式 |

需要記住的重點：

1. **記憶體不是奢侈品**－它是每個製作代理的要求
2. **執行前規劃**－永遠分解複雜的任務
3. **推理痕跡**有助於調試和改進代理行為
4. **自我反思**是智能體如何在無需重新訓練的情況下自我改進
5. **人機互動**是高風險行動所必需的安全網
6. **結合所有** — 最強大的代理是結合了所有 5 種功能的代理

---

## 10.下一篇文章

在**第 16 課：代理評估與測試**中，我們將學習如何系統地評估和測試 AI 代理：

- **代理評量指標**：任務完成狀況、準確性、效率
- **基準套件**以及如何建立測試案例
- 針對代理程式配置的 **A/B 測試**
- **更新提示/模型時進行迴歸測試**
- **生產監控** — 追蹤代理在現實世界中的行為

一旦智能體具備了記憶、計劃和推理能力，下一個問題就是：**「我們如何知道智能體運作良好？」** 第 16 課將回答這個問題。
