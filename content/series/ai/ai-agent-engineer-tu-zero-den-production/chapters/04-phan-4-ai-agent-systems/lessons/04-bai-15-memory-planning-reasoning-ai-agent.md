---
id: 019e0a01-bb15-7001-c001-ee1500000001
title: "Bài 15: Memory, Planning & Reasoning trong AI Agent"
slug: bai-15-memory-planning-reasoning-ai-agent
description: >-
  Memory types: short-term (conversation), long-term (vector store), episodic. Planning strategies: task decomposition, sub-goal generation. Chain-of-thought reasoning. Self-reflection, iterative refinement. Human-in-the-loop patterns.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 14
section_title: "Phần 4: AI Agent & Agent-based Systems"
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: "AI Agent Engineer: Từ Zero đến Production"
  slug: ai-agent-engineer-tu-zero-den-production
---

> **Agent không có memory giống như cá vàng — mỗi lượt trò chuyện là quên sạch mọi thứ.** Agent không biết planning thì chỉ hành động random. Và agent không biết reasoning thì chỉ "vẹt" lại prompt. Ba khả năng **Memory**, **Planning**, **Reasoning** chính là thứ biến một chatbot đơn giản thành AI Agent thực sự thông minh. Bài này ta sẽ đi sâu vào từng khả năng, implement bằng **LangChain**, **LangGraph**, **Redis**, **PostgreSQL**, rồi tổng hợp lại thành một agent hoàn chỉnh có khả năng nhớ, lập kế hoạch và tự suy luận.

---

## 1. Tại sao Memory quan trọng?

### 1.1. Agent without Memory = Goldfish

Hãy tưởng tượng bạn gọi một assistant mỗi ngày nhưng nó không nhớ gì cả:

```text
Ngày 1: "Tôi thích Python, đang học AI"
Agent:  "Tuyệt vời! Tôi sẽ giúp bạn học AI với Python."

Ngày 2: "Tiếp tục bài hôm qua đi"
Agent:  "Xin lỗi, bạn là ai? Bạn muốn học gì?"  ← 🐟 Goldfish mode

Ngày 3: "Nhắc lại preferences của tôi"
Agent:  "Tôi không có thông tin gì về bạn."      ← 🐟🐟🐟
```

Đây là vấn đề cốt lõi: **LLM stateless by design**. Mỗi API call là một cuộc hội thoại mới. Không có memory layer, agent mất toàn bộ context.

### 1.2. Context Window — Giới hạn cứng

Mỗi LLM có **context window** giới hạn:

| Model | Context Window | ~Số trang text |
|-------|---------------|----------------|
| GPT-4o | 128K tokens | ~300 trang |
| Claude 3.5 Sonnet | 200K tokens | ~500 trang |
| Gemini 1.5 Pro | 2M tokens | ~5000 trang |
| Llama 3.1 | 128K tokens | ~300 trang |

Nghe có vẻ nhiều, nhưng trong production:

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

Memory layer giúp agent **quản lý thông tin hiệu quả** thay vì nhồi hết vào context window.

### 1.3. Bộ ba năng lực: Memory — Planning — Reasoning

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

> **Tip:** Ba năng lực này không hoạt động độc lập. Memory cung cấp context cho Planning. Planning tạo structure cho Reasoning. Reasoning cải thiện cách agent sử dụng Memory. Đây là vòng lặp **virtuous cycle**.

---

## 2. Memory Types trong AI Agent

### 2.1. Phân loại Memory

AI Agent cần nhiều loại memory khác nhau, tương tự cách não người hoạt động:

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

### 2.2. Bảng so sánh Memory Types

| Memory Type | Persistence | Capacity | Use Case | Ví dụ |
|------------|-------------|----------|----------|-------|
| **Short-term** | Session only | Nhỏ (last N turns) | Conversation context | Chat history buffer |
| **Long-term** | Permanent | Lớn (unlimited) | Knowledge retention | Vector store, DB |
| **Episodic** | Permanent | Trung bình | Learn from experience | "Lần trước user ghét format X" |
| **Semantic** | Permanent | Lớn | Facts & concepts | "Python là ngôn ngữ lập trình" |
| **Working** | Task duration | Nhỏ | Current task state | Scratchpad, intermediate results |

### 2.3. Short-term Memory — Conversation Buffer

Short-term memory giữ lại các turn gần nhất của cuộc hội thoại:

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

### 2.4. Long-term Memory — Vector Store

Long-term memory lưu trữ thông tin vĩnh viễn, thường dùng **vector database**:

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

### 2.5. Episodic vs Semantic Memory

| Aspect | Episodic Memory | Semantic Memory |
|--------|----------------|-----------------|
| **Content** | Specific events/episodes | General facts/concepts |
| **Format** | "Ngày X, user hỏi Y, agent làm Z, kết quả W" | "Python dùng indentation thay braces" |
| **Retrieval** | By time/context similarity | By concept similarity |
| **Update** | Append new episodes | Merge & update facts |
| **Use case** | Learn from past mistakes | Build knowledge base |

> **Tip:** Episodic memory cực kỳ quan trọng cho **self-improvement**. Agent nhớ "lần trước dùng strategy A thất bại, strategy B thành công" → lần sau tự chọn B.

---

## 3. Implementing Agent Memory với Python

### 3.1. LangChain Memory Classes

LangChain cung cấp nhiều memory class built-in:

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

So sánh các memory class:

| Memory Class | Token Usage | Information Loss | Best For |
|-------------|-------------|-----------------|----------|
| `ConversationBufferMemory` | Tăng tuyến tính | Không mất | Chat ngắn (<20 turns) |
| `ConversationBufferWindowMemory` | Cố định (K turns) | Mất turns cũ | Chat dài, chỉ cần recent context |
| `ConversationSummaryMemory` | Tăng chậm | Mất chi tiết | Chat dài, cần overview |
| `ConversationSummaryBufferMemory` | Hybrid | Ít mất | Production — best balance |

### 3.2. Vector Store-backed Memory

Dùng vector store để lưu long-term memory giúp agent nhớ thông tin across sessions:

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

### 3.3. Persistent Memory với Redis

Dùng Redis để memory persist across restarts:

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

Trong production, ta thường cần custom memory manager kết hợp nhiều memory type:

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
            # Summarize oldest messages trước khi xóa
            self._summarize_and_archive(self.short_term[:5])
            self.short_term = self.short_term[5:]

    def add_long_term(self, content: str, metadata: Optional[dict] = None):
        """Lưu fact/preference vào long-term memory."""
        meta = metadata or {}
        meta["user_id"] = self.user_id
        meta["timestamp"] = datetime.now().isoformat()
        meta["type"] = "long_term"
        self.long_term.add_texts(
            texts=[content],
            metadatas=[meta],
        )

    def add_episode(self, task: str, actions: list[str],
                    result: str, success: bool):
        """Lưu episode (experience) để học từ quá khứ."""
        episode_text = (
            f"Task: {task}\n"
            f"Actions: {', '.join(actions)}\n"
            f"Result: {result}\n"
            f"Success: {success}"
        )
        self.episodic.add_texts(
            texts=[episode_text],
            metadatas=[{
                "task": task,
                "success": success,
                "timestamp": datetime.now().isoformat(),
                "type": "episodic",
            }],
        )

    def recall(self, query: str, k: int = 5) -> dict:
        """Recall relevant memories across all stores."""
        # Short-term: return all (đã limited bởi sliding window)
        short = self.short_term[-10:]  # Last 10 turns

        # Long-term: similarity search
        long = self.long_term.similarity_search(query, k=k)

        # Episodic: tìm past experiences liên quan
        episodes = self.episodic.similarity_search(query, k=3)

        return {
            "short_term": short,
            "long_term": [doc.page_content for doc in long],
            "episodic": [doc.page_content for doc in episodes],
        }

    def _summarize_and_archive(self, messages: list[dict]):
        """Tóm tắt messages cũ rồi lưu vào long-term."""
        text = "\n".join(
            f"{m['role']}: {m['content']}" for m in messages
        )
        summary = self.llm.invoke(
            f"Summarize this conversation concisely:\n{text}"
        )
        self.add_long_term(
            content=summary.content,
            metadata={"type": "conversation_summary"},
        )


# Usage
memory = AgentMemoryManager(user_id="user_123")

# Conversation
memory.add_short_term("user", "Tôi cần build REST API cho app bán hàng")
memory.add_short_term("assistant", "Tôi suggest dùng FastAPI + PostgreSQL")
memory.add_long_term("User cần REST API cho e-commerce, prefer FastAPI")

# Record episode
memory.add_episode(
    task="Build CRUD API for products",
    actions=["Created FastAPI app", "Added SQLAlchemy models", "Wrote tests"],
    result="API working with 100% test coverage",
    success=True,
)

# Later — recall relevant context
context = memory.recall("Làm sao optimize API performance?")
```

> **Tip:** Trong production, hãy thêm **importance scoring** cho memories. Không phải mọi thông tin đều cần lưu. Dùng LLM để đánh giá mức độ quan trọng trước khi lưu vào long-term memory.

---

## 4. Planning Strategies

### 4.1. Tại sao Agent cần Planning?

Agent không biết planning sẽ hành động **reactive** — chỉ phản ứng với input hiện tại mà không có chiến lược. Planning biến agent thành **proactive** — có khả năng lập kế hoạch và thực thi theo chiến lược.

```text
Without Planning:                  With Planning:

User: "Viết blog post về AI"      User: "Viết blog post về AI"
                                   
Agent: *viết ngay lập tức*         Agent thinking:
       *quên research*              1. Research trending AI topics
       *không có outline*           2. Pick topic + create outline
       *thiếu examples*            3. Write draft following outline
       *kết quả lộn xộn*           4. Add code examples
                                    5. Review & edit
                                    6. Format & finalize
                                   
                                   Agent: *thực thi từng bước*
                                          *kết quả có cấu trúc*
```

### 4.2. Task Decomposition

**Task decomposition** là kỹ thuật phân rã task phức tạp thành các subtask nhỏ hơn, dễ xử lý:

```text
Task Decomposition Flow:

  Complex Task: "Phân tích competitor và tạo marketing strategy"
                              │
                    ┌─────────▼─────────┐
                    │  DECOMPOSER       │
                    │  (LLM-powered)    │
                    └─────────┬─────────┘
                              │
         ┌────────────────────┼────────────────────┐
         │                    │                    │
  ┌──────▼──────┐    ┌───────▼──────┐    ┌───────▼──────┐
  │ Subtask 1   │    │ Subtask 2    │    │ Subtask 3    │
  │             │    │              │    │              │
  │ Research    │    │ SWOT         │    │ Create       │
  │ competitors │──→ │ Analysis     │──→ │ strategy     │
  │ (web search)│    │ (analyze)    │    │ (write doc)  │
  └─────────────┘    └──────────────┘    └──────────────┘
         │                    │                    │
         ▼                    ▼                    ▼
    List of 5           SWOT matrix         Strategy doc
    competitors         per competitor       with actions
```

Implementation:

```python
from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from pydantic import BaseModel, Field


class SubTask(BaseModel):
    """Một subtask trong plan."""
    id: int = Field(description="Task ID")
    description: str = Field(description="Mô tả subtask")
    dependencies: list[int] = Field(
        default_factory=list, description="IDs of tasks this depends on"
    )
    tools_needed: list[str] = Field(
        default_factory=list, description="Tools cần dùng"
    )


class TaskPlan(BaseModel):
    """Plan phân rã task."""
    goal: str = Field(description="Mục tiêu tổng thể")
    subtasks: list[SubTask] = Field(description="Danh sách subtasks")
    estimated_steps: int = Field(description="Tổng số bước")


llm = ChatOpenAI(model="gpt-4o", temperature=0)
structured_llm = llm.with_structured_output(TaskPlan)

decompose_prompt = ChatPromptTemplate.from_messages([
    ("system", """You are a task planning expert.
Break down the user's complex task into smaller, actionable subtasks.
Each subtask should be:
- Specific and actionable
- Have clear dependencies
- List required tools

Available tools: web_search, code_executor, file_writer,
                 data_analyzer, document_generator"""),

    ("human", "Task: {task}"),
])

chain = decompose_prompt | structured_llm

# Decompose
plan = chain.invoke({
    "task": "Phân tích 3 đối thủ cạnh tranh trong lĩnh vực EdTech "
            "và tạo báo cáo so sánh chi tiết"
})

for subtask in plan.subtasks:
    deps = f" (depends on: {subtask.dependencies})" if subtask.dependencies else ""
    print(f"  [{subtask.id}] {subtask.description}{deps}")
    print(f"      Tools: {subtask.tools_needed}")
```

### 4.3. Plan-and-Execute Pattern

**Plan-and-Execute** là pattern mạnh mẽ nhất: agent tạo plan trước, rồi execute từng step. Nếu step nào fail, agent có thể **replan**.

```text
Plan-and-Execute Loop:

  ┌────────────┐
  │   INPUT    │
  │  (complex  │
  │   task)    │
  └──────┬─────┘
         │
  ┌──────▼──────┐     ┌──────────────┐
  │   PLANNER   │────→│    PLAN      │
  │  (create    │     │ [step1,      │
  │   plan)     │     │  step2,      │
  └─────────────┘     │  step3, ...] │
                      └──────┬───────┘
                             │
                      ┌──────▼───────┐
                      │  EXECUTOR    │
                      │  (run step)  │◄────────────┐
                      └──────┬───────┘             │
                             │                     │
                      ┌──────▼───────┐      ┌──────┴──────┐
                      │  EVALUATE    │──No──│  REPLANNER  │
                      │  Success?    │      │  (adjust    │
                      └──────┬───────┘      │   plan)     │
                             │Yes           └─────────────┘
                      ┌──────▼───────┐
                      │   RESULT     │
                      └──────────────┘
```

LangGraph implementation:

```python
from typing import Annotated, TypedDict
from langgraph.graph import StateGraph, END
from langchain_openai import ChatOpenAI
from langchain_core.messages import HumanMessage, SystemMessage


class PlanExecuteState(TypedDict):
    input: str
    plan: list[str]
    current_step: int
    step_results: list[str]
    final_result: str
    error_count: int


llm = ChatOpenAI(model="gpt-4o", temperature=0)


def planner(state: PlanExecuteState) -> PlanExecuteState:
    """Tạo plan từ input."""
    response = llm.invoke([
        SystemMessage(content=(
            "You are a planner. Break the task into 3-7 concrete steps. "
            "Return only the numbered list."
        )),
        HumanMessage(content=f"Task: {state['input']}"),
    ])
    steps = [
        line.strip().lstrip("0123456789.").strip()
        for line in response.content.strip().split("\n")
        if line.strip()
    ]
    return {**state, "plan": steps, "current_step": 0, "step_results": []}


def executor(state: PlanExecuteState) -> PlanExecuteState:
    """Thực thi step hiện tại."""
    step = state["plan"][state["current_step"]]
    context = "\n".join(
        f"Step {i+1} result: {r}"
        for i, r in enumerate(state["step_results"])
    )
    response = llm.invoke([
        SystemMessage(content=(
            "Execute the given step. Use context from previous steps."
        )),
        HumanMessage(content=(
            f"Overall goal: {state['input']}\n"
            f"Previous results:\n{context}\n"
            f"Current step: {step}\n"
            "Execute this step and return the result."
        )),
    ])
    results = state["step_results"] + [response.content]
    return {
        **state,
        "step_results": results,
        "current_step": state["current_step"] + 1,
    }


def should_continue(state: PlanExecuteState) -> str:
    """Kiểm tra còn step nào không."""
    if state["current_step"] >= len(state["plan"]):
        return "finalize"
    return "execute"


def finalizer(state: PlanExecuteState) -> PlanExecuteState:
    """Tổng hợp kết quả."""
    all_results = "\n\n".join(
        f"Step {i+1}: {r}"
        for i, r in enumerate(state["step_results"])
    )
    response = llm.invoke([
        SystemMessage(content="Synthesize all step results into a final answer."),
        HumanMessage(content=(
            f"Goal: {state['input']}\n\nResults:\n{all_results}"
        )),
    ])
    return {**state, "final_result": response.content}


# Build graph
graph = StateGraph(PlanExecuteState)
graph.add_node("planner", planner)
graph.add_node("executor", executor)
graph.add_node("finalizer", finalizer)

graph.set_entry_point("planner")
graph.add_edge("planner", "executor")
graph.add_conditional_edges("executor", should_continue, {
    "execute": "executor",
    "finalize": "finalizer",
})
graph.add_edge("finalizer", END)

app = graph.compile()

# Run
result = app.invoke({
    "input": "Research and summarize top 3 AI trends in 2025",
    "plan": [],
    "current_step": 0,
    "step_results": [],
    "final_result": "",
    "error_count": 0,
})
print(result["final_result"])
```

### 4.4. Hierarchical Planning

Hierarchical planning phân tầng: **high-level plan** → **mid-level plan** → **low-level actions**:

```text
Hierarchical Planning:

Level 0 — Strategic:
  "Build e-commerce platform"
         │
Level 1 — Tactical:
  ├── "Design database schema"
  ├── "Build REST API"
  ├── "Create frontend"
  └── "Setup deployment"
         │
Level 2 — Operational:
  ├── "Design database schema"
  │   ├── "Define Product model"
  │   ├── "Define Order model"
  │   ├── "Define User model"
  │   └── "Create relationships"
  ├── "Build REST API"
  │   ├── "Setup FastAPI project"
  │   ├── "Implement CRUD endpoints"
  │   ├── "Add authentication"
  │   └── "Write API tests"
  ...
```

> **Tip:** Hierarchical planning đặc biệt hiệu quả khi kết hợp với **multi-agent systems** (bài 14). Agent manager xử lý Level 0-1, các specialist agents xử lý Level 2.

---

## 5. Chain-of-Thought Reasoning

### 5.1. CoT Prompting

**Chain-of-Thought (CoT)** buộc LLM suy luận từng bước thay vì nhảy thẳng đến kết luận:

```text
Without CoT:                           With CoT:

Q: "Server lỗi 503, fix sao?"        Q: "Server lỗi 503, fix sao?"

A: "Restart server"                    A: "Hãy phân tích từng bước:
    (thiếu suy luận)                       1. 503 = Service Unavailable
                                           2. Nguyên nhân có thể:
                                              - Backend service down
                                              - Resource exhaustion
                                              - Load balancer timeout
                                           3. Cần check:
                                              - Server logs
                                              - CPU/Memory usage
                                              - Upstream services
                                           4. Fix tùy nguyên nhân:
                                              - Scale up nếu resource
                                              - Restart nếu crashed
                                              - Fix upstream nếu dependency"
```

Triển khai CoT trong agent:

```python
from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate

llm = ChatOpenAI(model="gpt-4o", temperature=0)

cot_prompt = ChatPromptTemplate.from_messages([
    ("system", """You are an expert problem solver.
For every question, follow this reasoning process:

1. **Understand**: Restate the problem in your own words
2. **Analyze**: Identify key factors and constraints
3. **Decompose**: Break into sub-problems if complex
4. **Reason**: Work through each sub-problem step by step
5. **Synthesize**: Combine sub-answers into final answer
6. **Verify**: Check if the answer makes sense

Show your reasoning explicitly using the format:
[UNDERSTAND] ...
[ANALYZE] ...
[REASON] ...
[ANSWER] ..."""),
    ("human", "{question}"),
])

chain = cot_prompt | llm
response = chain.invoke({
    "question": "Hệ thống e-commerce đang chậm vào giờ cao điểm. "
                "Database CPU 95%, API response time 5s. Giải pháp?"
})
print(response.content)
```

### 5.2. Tree-of-Thought (ToT)

**Tree-of-Thought** mở rộng CoT bằng cách explore **nhiều nhánh suy luận** song song, rồi chọn nhánh tốt nhất:

```text
Tree-of-Thought:

                    Problem
                       │
            ┌──────────┼──────────┐
            │          │          │
        Thought 1  Thought 2  Thought 3
        "Scale DB" "Add cache" "Optimize
            │          │       queries"
         ┌──┴──┐    ┌──┴──┐      │
         │     │    │     │      │
       T1.1  T1.2  T2.1  T2.2  T3.1
       Read   Add   Redis  CDN   Index
       replica pgbouncer     static   slow
                                      queries
            │          │          │
         Score:     Score:     Score:
          0.7        0.9        0.8
            │          │          │
            └──────────┼──────────┘
                       │
                  Best: Thought 2
                  "Add Redis cache +
                   CDN for static"
```

```python
from langchain_openai import ChatOpenAI
from langchain_core.messages import HumanMessage, SystemMessage

llm = ChatOpenAI(model="gpt-4o", temperature=0.7)
evaluator = ChatOpenAI(model="gpt-4o", temperature=0)


def tree_of_thought(problem: str, n_thoughts: int = 3) -> str:
    """Tree-of-Thought reasoning."""

    # Step 1: Generate multiple initial thoughts
    thoughts = []
    for i in range(n_thoughts):
        response = llm.invoke([
            SystemMessage(content=(
                f"Generate approach #{i+1} (different from others) "
                f"to solve this problem. Be specific and creative."
            )),
            HumanMessage(content=f"Problem: {problem}"),
        ])
        thoughts.append(response.content)

    # Step 2: Evaluate each thought
    scores = []
    for thought in thoughts:
        eval_response = evaluator.invoke([
            SystemMessage(content=(
                "Evaluate this solution approach on a scale of 1-10. "
                "Consider: feasibility, effectiveness, cost, time. "
                "Return ONLY the numeric score."
            )),
            HumanMessage(content=(
                f"Problem: {problem}\nApproach: {thought}"
            )),
        ])
        try:
            score = float(eval_response.content.strip())
        except ValueError:
            score = 5.0
        scores.append(score)

    # Step 3: Select best thought and elaborate
    best_idx = scores.index(max(scores))
    best_thought = thoughts[best_idx]

    final = llm.invoke([
        SystemMessage(content=(
            "Elaborate on this solution approach. Provide detailed "
            "implementation steps, potential issues, and mitigations."
        )),
        HumanMessage(content=(
            f"Problem: {problem}\n"
            f"Selected approach (score {scores[best_idx]}/10):\n"
            f"{best_thought}"
        )),
    ])

    return final.content


# Usage
solution = tree_of_thought(
    "E-commerce app cần handle 10x traffic spike during Black Friday. "
    "Current stack: FastAPI + PostgreSQL + Redis on AWS."
)
print(solution)
```

### 5.3. Self-Consistency

**Self-consistency** generate nhiều reasoning paths rồi chọn câu trả lời xuất hiện nhiều nhất (majority voting):

```text
Self-Consistency Flow:

  Question: "Nên dùng SQL hay NoSQL cho user profiles?"
                        │
           ┌────────────┼────────────┐
           │            │            │
       Path 1       Path 2       Path 3
       (temp=0.7)   (temp=0.7)   (temp=0.7)
           │            │            │
       "SQL vì      "SQL vì      "NoSQL vì
        structured   ACID,        flexible
        data, ACID"  joins"       schema"
           │            │            │
           ▼            ▼            ▼
        Answer: SQL  Answer: SQL  Answer: NoSQL
           │            │            │
           └────────────┼────────────┘
                        │
                 Majority Vote: SQL (2/3)
                 Confidence: 66.7%
```

> **Tip:** Self-consistency đặc biệt hữu ích cho decision-making tasks. Khi agent cần đưa ra quyết định quan trọng (chọn architecture, chọn tool), generate 5 reasoning paths rồi vote cho kết quả đáng tin cậy hơn.

---

## 6. Self-Reflection & Iterative Refinement

### 6.1. Reflexion Architecture

**Reflexion** là kiến trúc cho phép agent tự đánh giá output, rút kinh nghiệm, và cải thiện:

```text
Reflexion Loop:

  ┌───────────────────────────────────────────┐
  │                                           │
  │   ┌──────────┐    ┌──────────┐           │
  │   │  ACTOR   │───→│  ACTION  │           │
  │   │ (agent)  │    │ (execute)│           │
  │   └──────────┘    └────┬─────┘           │
  │        ▲               │                 │
  │        │          ┌────▼─────┐           │
  │        │          │ EVALUATE │           │
  │        │          │ (check   │           │
  │        │          │  result) │           │
  │        │          └────┬─────┘           │
  │        │               │                 │
  │        │    ┌──────────▼──────────┐      │
  │        │    │     REFLECTOR       │      │
  │        │    │                     │      │
  │        │    │ "What went wrong?"  │      │
  │        │    │ "What to improve?"  │      │
  │        │    │ "Lesson learned?"   │      │
  │        │    └──────────┬──────────┘      │
  │        │               │                 │
  │        │    ┌──────────▼──────────┐      │
  │        │    │   MEMORY UPDATE     │      │
  │        │    │ Store reflection    │      │
  │        └────│ for next attempt    │      │
  │             └─────────────────────┘      │
  │                                           │
  └───────────────────────────────────────────┘
```

### 6.2. Self-Critique Loop — Implementation

```python
from langchain_openai import ChatOpenAI
from langchain_core.messages import HumanMessage, SystemMessage
from pydantic import BaseModel, Field


class CritiqueResult(BaseModel):
    score: float = Field(description="Quality score 0-10")
    issues: list[str] = Field(description="Issues found")
    suggestions: list[str] = Field(description="Improvement suggestions")
    is_acceptable: bool = Field(description="Whether output meets quality bar")


class SelfRefiningAgent:
    """Agent with self-critique and iterative refinement."""

    def __init__(self, max_iterations: int = 3):
        self.actor = ChatOpenAI(model="gpt-4o", temperature=0.7)
        self.critic = ChatOpenAI(model="gpt-4o", temperature=0)
        self.structured_critic = self.critic.with_structured_output(CritiqueResult)
        self.max_iterations = max_iterations
        self.reflections: list[str] = []

    def generate(self, task: str) -> str:
        """Generate initial output."""
        context = ""
        if self.reflections:
            context = (
                "\n\nPrevious reflections (avoid these mistakes):\n"
                + "\n".join(f"- {r}" for r in self.reflections)
            )

        response = self.actor.invoke([
            SystemMessage(content=(
                "You are an expert assistant. Produce high-quality output."
                f"{context}"
            )),
            HumanMessage(content=task),
        ])
        return response.content

    def critique(self, task: str, output: str) -> CritiqueResult:
        """Self-critique the output."""
        return self.structured_critic.invoke([
            SystemMessage(content=(
                "You are a strict quality reviewer. Evaluate the output "
                "against the task requirements. Be critical but fair. "
                "Score 8+ means acceptable quality."
            )),
            HumanMessage(content=(
                f"Task: {task}\n\nOutput to review:\n{output}"
            )),
        ])

    def reflect(self, task: str, output: str,
                critique: CritiqueResult) -> str:
        """Generate reflection for improvement."""
        response = self.critic.invoke([
            SystemMessage(content=(
                "Based on the critique, generate a concise reflection "
                "that will help improve the next attempt. "
                "Focus on specific, actionable improvements."
            )),
            HumanMessage(content=(
                f"Task: {task}\n"
                f"Output: {output}\n"
                f"Issues: {critique.issues}\n"
                f"Suggestions: {critique.suggestions}"
            )),
        ])
        return response.content

    def run(self, task: str) -> dict:
        """Run self-refining loop."""
        for iteration in range(self.max_iterations):
            print(f"\n--- Iteration {iteration + 1} ---")

            # Generate
            output = self.generate(task)

            # Critique
            critique = self.critique(task, output)
            print(f"Score: {critique.score}/10")
            print(f"Acceptable: {critique.is_acceptable}")

            if critique.is_acceptable:
                return {
                    "output": output,
                    "iterations": iteration + 1,
                    "final_score": critique.score,
                }

            # Reflect and store
            reflection = self.reflect(task, output, critique)
            self.reflections.append(reflection)
            print(f"Reflection: {reflection[:100]}...")

        # Return best effort after max iterations
        return {
            "output": output,
            "iterations": self.max_iterations,
            "final_score": critique.score,
            "note": "Max iterations reached",
        }


# Usage
agent = SelfRefiningAgent(max_iterations=3)
result = agent.run(
    "Write a Python function that validates email addresses. "
    "Handle edge cases. Include docstring and type hints."
)
print(f"\nFinal output (after {result['iterations']} iterations):")
print(f"Score: {result['final_score']}/10")
print(result["output"])
```

### 6.3. Output Validation Pattern

Ngoài self-critique bằng LLM, ta nên thêm **deterministic validation**:

```python
import re
import ast
from typing import Callable


class OutputValidator:
    """Validate agent output bằng rules + LLM."""

    def __init__(self):
        self.rules: list[Callable] = []

    def add_rule(self, name: str, check_fn: Callable[[str], bool],
                 error_msg: str):
        self.rules.append({
            "name": name,
            "check": check_fn,
            "error": error_msg,
        })

    def validate(self, output: str) -> dict:
        errors = []
        for rule in self.rules:
            if not rule["check"](output):
                errors.append(f"{rule['name']}: {rule['error']}")
        return {
            "valid": len(errors) == 0,
            "errors": errors,
        }


# Ví dụ: validate code output
validator = OutputValidator()

validator.add_rule(
    "syntax_check",
    lambda code: _is_valid_python(code),
    "Code has syntax errors",
)

validator.add_rule(
    "no_hardcoded_secrets",
    lambda code: not re.search(
        r'(api_key|password|secret)\s*=\s*["\'][^"\']+["\']', code
    ),
    "Contains hardcoded secrets",
)

validator.add_rule(
    "has_docstring",
    lambda code: '"""' in code or "'''" in code,
    "Missing docstring",
)


def _is_valid_python(code: str) -> bool:
    try:
        ast.parse(code)
        return True
    except SyntaxError:
        return False


# Validate
result = validator.validate('''
def add(a: int, b: int) -> int:
    """Add two numbers."""
    return a + b
''')
print(result)  # {"valid": True, "errors": []}
```

> **Tip:** Luôn kết hợp **LLM-based critique** (đánh giá quality, logic) với **deterministic validation** (check syntax, format, rules). LLM bắt lỗi semantic, rules bắt lỗi structural — hai lớp bảo vệ tốt hơn một.

---

## 7. Human-in-the-Loop Patterns

### 7.1. Tại sao cần Human-in-the-Loop?

Dù agent có thông minh đến đâu, có những quyết định cần human approval:

```text
Agent Autonomy Spectrum:

  Full Auto          Supervised           Human-driven
  ◄─────────────────────┼────────────────────────►
  │                      │                        │
  "Format text"     "Send email"          "Delete database"
  "Summarize doc"   "Deploy to staging"   "Transfer $10,000"
  "Run tests"       "Create PR"           "Fire customer"
  │                      │                        │
  No approval       Approval needed       Always human
  needed            before execute         decides
```

### 7.2. Approval Workflow Pattern

```python
from typing import TypedDict, Literal
from langgraph.graph import StateGraph, END
from langgraph.checkpoint.memory import MemorySaver
from langchain_openai import ChatOpenAI


class AgentState(TypedDict):
    task: str
    plan: str
    approved: bool | None
    result: str
    requires_approval: bool


llm = ChatOpenAI(model="gpt-4o", temperature=0)


def create_plan(state: AgentState) -> AgentState:
    """Agent tạo plan cho task."""
    response = llm.invoke(
        f"Create a detailed plan for: {state['task']}"
    )
    # Detect if task needs approval
    high_risk_keywords = ["delete", "deploy", "send", "payment", "production"]
    needs_approval = any(
        kw in state["task"].lower() for kw in high_risk_keywords
    )
    return {
        **state,
        "plan": response.content,
        "requires_approval": needs_approval,
        "approved": None,
    }


def check_approval(state: AgentState) -> str:
    """Route based on approval requirement."""
    if not state["requires_approval"]:
        return "execute"  # Auto-approve low-risk tasks
    if state["approved"] is None:
        return "wait_for_human"  # Need human input
    if state["approved"]:
        return "execute"
    return "reject"


def wait_for_human(state: AgentState) -> AgentState:
    """Pause và chờ human input.
    LangGraph interrupt sẽ pause execution tại đây.
    """
    # In production, this triggers a notification
    # and the graph pauses until human responds
    return state


def execute_plan(state: AgentState) -> AgentState:
    """Thực thi plan đã approved."""
    response = llm.invoke(
        f"Execute this plan:\n{state['plan']}\n\n"
        f"Task: {state['task']}"
    )
    return {**state, "result": response.content}


def reject_plan(state: AgentState) -> AgentState:
    """Human rejected plan."""
    return {**state, "result": "Plan rejected by human reviewer."}


# Build graph with checkpointing
checkpointer = MemorySaver()

graph = StateGraph(AgentState)
graph.add_node("create_plan", create_plan)
graph.add_node("wait_for_human", wait_for_human)
graph.add_node("execute", execute_plan)
graph.add_node("reject", reject_plan)

graph.set_entry_point("create_plan")
graph.add_conditional_edges("create_plan", check_approval, {
    "execute": "execute",
    "wait_for_human": "wait_for_human",
    "reject": "reject",
})
graph.add_conditional_edges("wait_for_human", check_approval, {
    "execute": "execute",
    "reject": "reject",
    "wait_for_human": "wait_for_human",
})
graph.add_edge("execute", END)
graph.add_edge("reject", END)

app = graph.compile(checkpointer=checkpointer)
```

### 7.3. LangGraph Interrupt & Resume

LangGraph hỗ trợ **interrupt** execution để chờ human input rồi **resume**:

```python
from langgraph.graph import StateGraph, END
from langgraph.checkpoint.memory import MemorySaver
from langgraph.types import interrupt, Command


class State(TypedDict):
    task: str
    draft: str
    feedback: str
    final: str


def generate_draft(state: State) -> State:
    """Agent tạo draft."""
    # ... generate draft ...
    return {**state, "draft": "Draft content here..."}


def human_review(state: State) -> State:
    """Interrupt để human review."""
    # interrupt() sẽ pause graph tại đây
    feedback = interrupt(
        # Thông tin hiển thị cho human
        {"draft": state["draft"], "message": "Please review this draft"}
    )
    return {**state, "feedback": feedback}


def revise(state: State) -> State:
    """Revise dựa trên feedback."""
    # ... revise based on feedback ...
    return {**state, "final": f"Revised: {state['draft']} + {state['feedback']}"}


# Build
checkpointer = MemorySaver()

graph = StateGraph(State)
graph.add_node("generate", generate_draft)
graph.add_node("review", human_review)
graph.add_node("revise", revise)

graph.set_entry_point("generate")
graph.add_edge("generate", "review")
graph.add_edge("review", "revise")
graph.add_edge("revise", END)

app = graph.compile(checkpointer=checkpointer)

# Run — sẽ pause tại human_review
config = {"configurable": {"thread_id": "review-1"}}
result = app.invoke({"task": "Write API docs", "draft": "", "feedback": "", "final": ""}, config)

# ... human reviews and provides feedback ...

# Resume with human feedback
result = app.invoke(
    Command(resume="Looks good, but add more examples"),
    config,
)
print(result["final"])
```

### 7.4. Bảng so sánh Human-in-the-Loop Patterns

| Pattern | Khi nào dùng | Complexity | User Experience |
|---------|-------------|------------|-----------------|
| **Approval gate** | Trước high-risk actions | Thấp | Simple yes/no |
| **Feedback loop** | Iterative content creation | Trung bình | Review → feedback → revise |
| **Interrupt/Resume** | Complex workflows with checkpoints | Cao | Pause anywhere, resume later |
| **Escalation** | Agent gặp uncertainty | Thấp | Agent asks human khi confused |
| **Collaborative** | Human + Agent cùng làm | Cao | Real-time co-editing |

> **Tip:** Trong production, bắt đầu với **approval gates** cho mọi action có side effects. Sau khi user trust agent hơn, dần giảm số approval points. Đây là pattern "**progressive autonomy**".

---

## 8. Hands-on: Build Agent với Memory + Planning + Reasoning

### 8.1. Architecture tổng quan

Ta sẽ build một **Research Assistant Agent** có đầy đủ Memory, Planning, và Reasoning:

```text
Research Assistant Architecture:

  ┌──────────────────────────────────────────────────────┐
  │                  RESEARCH ASSISTANT                   │
  │                                                       │
  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  │
  │  │   MEMORY    │  │  PLANNER    │  │  REASONER   │  │
  │  │             │  │             │  │             │  │
  │  │ Short-term  │  │ Decompose   │  │ CoT         │  │
  │  │ Long-term   │  │ Plan-Exec   │  │ Self-check  │  │
  │  │ Episodic    │  │ Replan      │  │ Reflect     │  │
  │  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘  │
  │         │                │                │          │
  │  ┌──────▼────────────────▼────────────────▼──────┐  │
  │  │              STATE GRAPH (LangGraph)           │  │
  │  │                                                │  │
  │  │  plan → research → analyze → write → review    │  │
  │  │    ▲                                   │       │  │
  │  │    └──────── replan if needed ─────────┘       │  │
  │  └────────────────────────────────────────────────┘  │
  │                                                       │
  │  Tools: web_search, note_taking, document_writer      │
  └──────────────────────────────────────────────────────┘
```

### 8.2. Full Implementation

```python
"""
Research Assistant Agent with Memory + Planning + Reasoning.
Requires: pip install langchain langchain-openai langgraph chromadb
"""

from typing import TypedDict, Annotated
from datetime import datetime

from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_community.vectorstores import Chroma
from langchain_core.messages import HumanMessage, SystemMessage
from langgraph.graph import StateGraph, END
from pydantic import BaseModel, Field


# --- State ---
class ResearchState(TypedDict):
    query: str
    plan: list[str]
    current_step: int
    research_notes: list[str]
    draft: str
    critique: str
    final_report: str
    iteration: int
    max_iterations: int
    memory_context: str


# --- Memory Module ---
class ResearchMemory:
    def __init__(self, persist_dir: str = "./research_memory"):
        self.embeddings = OpenAIEmbeddings(model="text-embedding-3-small")
        self.store = Chroma(
            collection_name="research_history",
            embedding_function=self.embeddings,
            persist_directory=persist_dir,
        )
        self.session_notes: list[str] = []

    def add_research(self, topic: str, findings: str):
        self.store.add_texts(
            texts=[f"Topic: {topic}\nFindings: {findings}"],
            metadatas=[{
                "topic": topic,
                "timestamp": datetime.now().isoformat(),
            }],
        )

    def recall(self, query: str, k: int = 3) -> str:
        docs = self.store.similarity_search(query, k=k)
        if not docs:
            return "No previous research found."
        return "\n\n".join(
            f"Past research: {doc.page_content}" for doc in docs
        )

    def add_session_note(self, note: str):
        self.session_notes.append(note)


memory = ResearchMemory()


# --- LLM Setup ---
planner_llm = ChatOpenAI(model="gpt-4o", temperature=0)
researcher_llm = ChatOpenAI(model="gpt-4o", temperature=0.3)
writer_llm = ChatOpenAI(model="gpt-4o", temperature=0.7)
critic_llm = ChatOpenAI(model="gpt-4o", temperature=0)


# --- Nodes ---
def load_memory(state: ResearchState) -> ResearchState:
    """Load relevant past research."""
    context = memory.recall(state["query"])
    return {**state, "memory_context": context}


def plan_research(state: ResearchState) -> ResearchState:
    """Create research plan using CoT."""
    response = planner_llm.invoke([
        SystemMessage(content=(
            "You are a research planner. Think step by step.\n"
            "[ANALYZE] What aspects need to be researched?\n"
            "[PLAN] Create 4-6 specific research steps.\n"
            "Return only numbered steps."
        )),
        HumanMessage(content=(
            f"Research query: {state['query']}\n"
            f"Past context: {state['memory_context']}"
        )),
    ])
    steps = [
        line.strip().lstrip("0123456789.)-").strip()
        for line in response.content.strip().split("\n")
        if line.strip() and any(c.isalpha() for c in line)
    ]
    return {**state, "plan": steps, "current_step": 0, "research_notes": []}


def research_step(state: ResearchState) -> ResearchState:
    """Execute current research step."""
    if state["current_step"] >= len(state["plan"]):
        return state

    step = state["plan"][state["current_step"]]
    prev_notes = "\n".join(state["research_notes"][-3:])
    response = researcher_llm.invoke([
        SystemMessage(content=(
            "You are a thorough researcher. For this step:\n"
            "1. Research the topic deeply\n"
            "2. Provide specific facts, data, examples\n"
            "3. Cite sources where possible\n"
            "Be comprehensive but focused."
        )),
        HumanMessage(content=(
            f"Overall query: {state['query']}\n"
            f"Current step: {step}\n"
            f"Previous findings:\n{prev_notes}"
        )),
    ])

    notes = state["research_notes"] + [
        f"[Step {state['current_step'] + 1}] {step}\n{response.content}"
    ]
    memory.add_session_note(f"Researched: {step}")

    return {
        **state,
        "research_notes": notes,
        "current_step": state["current_step"] + 1,
    }


def check_research_done(state: ResearchState) -> str:
    """Check if more research steps remain."""
    if state["current_step"] < len(state["plan"]):
        return "continue_research"
    return "write_report"


def write_report(state: ResearchState) -> ResearchState:
    """Write report from research notes."""
    all_notes = "\n\n".join(state["research_notes"])
    response = writer_llm.invoke([
        SystemMessage(content=(
            "You are an expert report writer. Write a well-structured "
            "report based on the research notes. Include:\n"
            "- Executive summary\n"
            "- Key findings with details\n"
            "- Analysis and insights\n"
            "- Conclusion and recommendations"
        )),
        HumanMessage(content=(
            f"Query: {state['query']}\n\nResearch Notes:\n{all_notes}"
        )),
    ])
    return {**state, "draft": response.content}


def critique_report(state: ResearchState) -> ResearchState:
    """Self-critique the report."""
    response = critic_llm.invoke([
        SystemMessage(content=(
            "You are a strict editor. Critique this report:\n"
            "1. Is the information accurate and well-supported?\n"
            "2. Is the structure logical?\n"
            "3. Are there gaps or missing perspectives?\n"
            "4. Score 1-10. If score >= 8, say 'APPROVED'.\n"
            "Otherwise list specific improvements needed."
        )),
        HumanMessage(content=(
            f"Query: {state['query']}\n\nReport:\n{state['draft']}"
        )),
    ])
    return {
        **state,
        "critique": response.content,
        "iteration": state["iteration"] + 1,
    }


def check_quality(state: ResearchState) -> str:
    """Route based on critique."""
    if "APPROVED" in state["critique"].upper():
        return "finalize"
    if state["iteration"] >= state["max_iterations"]:
        return "finalize"
    return "revise"


def revise_report(state: ResearchState) -> ResearchState:
    """Revise based on critique (self-reflection)."""
    response = writer_llm.invoke([
        SystemMessage(content=(
            "Revise the report based on the critique. "
            "Address every issue mentioned. "
            "Maintain the same structure but improve quality."
        )),
        HumanMessage(content=(
            f"Original report:\n{state['draft']}\n\n"
            f"Critique:\n{state['critique']}"
        )),
    ])
    return {**state, "draft": response.content}


def finalize(state: ResearchState) -> ResearchState:
    """Finalize and save to memory."""
    # Save to long-term memory
    memory.add_research(
        topic=state["query"],
        findings=state["draft"][:500],
    )
    return {**state, "final_report": state["draft"]}


# --- Build Graph ---
graph = StateGraph(ResearchState)

graph.add_node("load_memory", load_memory)
graph.add_node("plan", plan_research)
graph.add_node("research", research_step)
graph.add_node("write", write_report)
graph.add_node("critique", critique_report)
graph.add_node("revise", revise_report)
graph.add_node("finalize", finalize)

graph.set_entry_point("load_memory")
graph.add_edge("load_memory", "plan")
graph.add_edge("plan", "research")
graph.add_conditional_edges("research", check_research_done, {
    "continue_research": "research",
    "write_report": "write",
})
graph.add_edge("write", "critique")
graph.add_conditional_edges("critique", check_quality, {
    "revise": "revise",
    "finalize": "finalize",
})
graph.add_edge("revise", "critique")  # Re-critique after revision
graph.add_edge("finalize", END)

app = graph.compile()


# --- Run ---
def research(query: str) -> str:
    result = app.invoke({
        "query": query,
        "plan": [],
        "current_step": 0,
        "research_notes": [],
        "draft": "",
        "critique": "",
        "final_report": "",
        "iteration": 0,
        "max_iterations": 2,
        "memory_context": "",
    })
    print(f"Completed in {result['iteration']} revision(s)")
    return result["final_report"]


# Usage
report = research("Phân tích xu hướng AI Agent trong enterprise 2025")
print(report)
```

### 8.3. Flow diagram chi tiết

```text
Full Agent Flow:

  User Query
      │
      ▼
  ┌──────────────┐
  │ Load Memory  │ ← Recall past research
  └──────┬───────┘
         │
  ┌──────▼───────┐
  │ Plan (CoT)   │ ← Decompose query → 4-6 steps
  └──────┬───────┘
         │
  ┌──────▼───────┐
  │ Research      │◄──┐
  │ Step N        │   │ Loop until all
  └──────┬───────┘   │ steps complete
         │───────────┘
         │
  ┌──────▼───────┐
  │ Write Report │ ← Synthesize all research
  └──────┬───────┘
         │
  ┌──────▼───────┐
  │ Self-Critique│ ← Score + find issues
  └──────┬───────┘
         │
     ┌───┴───┐
     │Score≥8?│
     └───┬───┘
    No   │   Yes
    │    └──────►┌──────────┐
    │            │ Finalize │ ← Save to memory
    ▼            └──────────┘
  ┌──────────┐
  │ Revise   │ ← Fix issues
  └────┬─────┘
       │
       └──► Back to Critique (max 2 iterations)
```

> **Tip:** Pattern này có thể extend thêm: thêm **web search tool** ở research step, thêm **human review** trước finalize, thêm **episodic memory** để nhớ research methodology nào hiệu quả. Modular architecture giúp dễ dàng iterate.

---

## 9. Tổng kết

Bài này đã cover ba trụ cột quan trọng nhất biến model thành agent thực sự:

| Capability | Key Concepts | Tools/Techniques |
|-----------|-------------|-----------------|
| **Memory** | Short-term, Long-term, Episodic, Semantic, Working | LangChain Memory, Vector Store, Redis, Custom Manager |
| **Planning** | Task Decomposition, Plan-and-Execute, Hierarchical | Structured Output, LangGraph State Machine |
| **Reasoning** | CoT, Tree-of-Thought, Self-consistency | CoT prompting, Multi-path generation, Voting |
| **Self-Reflection** | Reflexion, Self-Critique, Validation | Critique loop, Output validators, Iterative refinement |
| **Human-in-the-Loop** | Approval, Feedback, Interrupt/Resume | LangGraph checkpointing, Interrupt pattern |

Những điểm quan trọng cần nhớ:

1. **Memory không phải luxury** — nó là requirement cho mọi production agent
2. **Planning trước khi execute** — luôn decompose task phức tạp
3. **Reasoning traces** giúp debug và improve agent behavior
4. **Self-reflection** là cách agent tự cải thiện mà không cần retrain
5. **Human-in-the-loop** là safety net — bắt buộc cho high-risk actions
6. **Combine tất cả** — agent mạnh nhất là agent kết hợp cả 5 capability

---

## 10. Bài tiếp theo

Ở **Bài 16: Agent Evaluation & Testing**, ta sẽ học cách đánh giá và kiểm thử AI Agent một cách hệ thống:

- **Evaluation metrics** cho agent: task completion, accuracy, efficiency
- **Benchmark suites** và cách tạo test cases
- **A/B testing** cho agent configurations
- **Regression testing** khi update prompt/model
- **Production monitoring** — track agent behavior in real-world

Khi agent đã có Memory, Planning, và Reasoning — câu hỏi tiếp theo là: **"Làm sao biết agent hoạt động tốt?"** Bài 16 sẽ trả lời câu hỏi đó.
