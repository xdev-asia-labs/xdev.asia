---
id: 019e0a01-bb14-7001-c001-ee1400000001
title: 第 14 課：多代理系統 — CrewAI、AutoGen 和 LangGraph
slug: bai-14-multi-agent-crewai-autogen-langgraph
description: >-
  多代理架構：分層、協作、競爭。 CrewAI 框架。微軟 AutoGen。 LangGraph
  狀態機。代理通訊協定。編排模式。練習建立多代理團隊來執行複雜的任務。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 13
section_title: 第 4 部分：AI 代理和基於代理的系統
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: AI代理工程師：從零到生產
  slug: ai-agent-engineer-tu-zero-den-production
locale: zh-tw
---

> **無論多麼優秀的代理人，都有其限制。但協調良好的代理商團隊幾乎是無限的。 **想像一下，您需要撰寫一份研究報告：一個代理搜尋網絡，一個代理分析數據，一個代理撰寫草稿，一個代理審查和編輯。每個代理專門從事一件事，透過明確的**協定**進行協調 - 這就是**多代理系統**。在本文中，我們將從架構理論出發，透過三大領先框架**CrewAI**、**Microsoft AutoGen**、**LangGraph**，然後手動建立一個完整的**多代理內容創建團隊**。

---

## 1. 什麼是多代理系統？

### 1.1。從單一代理商到代理商團隊

在第 13 課中，我們建立了一個具有工具呼叫功能的單一代理程式——一個代理可以處理所有事情。這對於簡單任務來說效果很好，但隨著複雜性的增加：

```text
Single Agent Problem:

  ┌─────────────────────────────────────────────────┐
  │                  SINGLE AGENT                    │
  │                                                  │
  │  "Hãy research AI trends, viết báo cáo,         │
  │   tạo infographic, review grammar,               │
  │   fact-check, format PDF"                        │
  │                                                  │
  │  ❌ Context window overflow                       │
  │  ❌ Role confusion (researcher vs writer)         │
  │  ❌ No specialization                             │
  │  ❌ Hard to debug                                 │
  │  ❌ Single point of failure                       │
  └─────────────────────────────────────────────────┘

Multi-Agent Solution:

  ┌───────────┐    ┌───────────┐    ┌───────────┐
  │ Researcher│───→│  Writer   │───→│  Editor   │
  │           │    │           │    │           │
  │ Search web│    │ Draft     │    │ Review    │
  │ Analyze   │    │ article   │    │ grammar   │
  │ data      │    │ from data │    │ fact-check│
  └───────────┘    └───────────┘    └───────────┘
       │                                  │
       └──── feedback loop ───────────────┘

  ✅ Mỗi agent focus một task
  ✅ Context window riêng biệt
  ✅ Chuyên môn hóa (specialization)
  ✅ Dễ debug từng agent
  ✅ Fault tolerance
```

### 1.2。什麼時候需要多Agent？

|案例 |單一代理|多重代理|
|------------|:------------:|:------------:|
|簡單的問答聊天機器人 | ✅ |矯枉過正|
|研究+撰寫報告| ⚠️可能| ✅ 更好 |
|程式碼審查+修復+測試| ❌ 太複雜 | ✅ |
|資料管道：ETL + 分析 + 視覺化 | ❌ | ✅ |
|辯論/驗證事實（對抗性）| ❌ | ✅ |
|客戶支援（簡單）| ✅ |矯枉過正|
|客戶支援（路由+專家）| ⚠️ | ✅ |

> **提示：** 經驗法則 - 如果您的任務需要 **2 個以上的不同角色**（研究員、作家、審稿人...）或 3 個以上的工具類別，請考慮多代理。

### 1.3。核心部件

```text
Multi-Agent System Components:

  ┌──────────────────────────────────────────────┐
  │              ORCHESTRATOR / MANAGER           │
  │  (phân task, monitor, collect results)        │
  └──────────┬──────────┬──────────┬─────────────┘
             │          │          │
    ┌────────▼──┐ ┌─────▼────┐ ┌──▼────────┐
    │  Agent A  │ │ Agent B  │ │  Agent C  │
    │           │ │          │ │           │
    │ ┌───────┐ │ │┌───────┐ │ │┌───────┐  │
    │ │ LLM   │ │ ││ LLM   │ │ ││ LLM   │  │
    │ └───────┘ │ │└───────┘ │ │└───────┘  │
    │ ┌───────┐ │ │┌───────┐ │ │┌───────┐  │
    │ │ Tools │ │ ││ Tools │ │ ││ Tools │  │
    │ └───────┘ │ │└───────┘ │ │└───────┘  │
    │ ┌───────┐ │ │┌───────┐ │ │┌───────┐  │
    │ │Memory │ │ ││Memory │ │ ││Memory │  │
    │ └───────┘ │ │└───────┘ │ │└───────┘  │
    └───────────┘ └──────────┘ └───────────┘
          │            │            │
    ┌─────▼────────────▼────────────▼─────┐
    │     SHARED STATE / MESSAGE BUS      │
    │  (communication layer)              │
    └─────────────────────────────────────┘
```

每個代理有三個主要組成部分：
- **LLM**：大腦 - 語言處理模型（每個代理可能不同）
- **工具**：手 - 代理可以呼叫的功能
- **記憶**：短期（對話）與共享狀態

---

## 2. 架構模式

### 2.1。層級結構（經理→工人）

**管理代理**接收總任務，將其劃分為子任務，將其指派給**工作代理**，然後匯總結果。

```text
Hierarchical Pattern:

                    ┌───────────────┐
                    │   MANAGER     │
                    │               │
                    │ "Write a full │
                    │  blog post    │
                    │  about AI"    │
                    └──────┬────────┘
                           │
              ┌────────────┼────────────┐
              │            │            │
        ┌─────▼────┐ ┌────▼─────┐ ┌────▼─────┐
        │Researcher│ │  Writer  │ │  Editor  │
        │          │ │          │ │          │
        │ Task:    │ │ Task:    │ │ Task:    │
        │ "Find 5  │ │ "Write   │ │ "Review  │
        │  recent  │ │  draft   │ │  grammar │
        │  papers" │ │  from    │ │  & facts"│
        │          │ │  notes"  │ │          │
        └──────────┘ └──────────┘ └──────────┘
              │            │            │
              └────────────┼────────────┘
                           │
                    ┌──────▼────────┐
                    │   MANAGER     │
                    │ (aggregate    │
                    │  results)     │
                    └───────────────┘

  Pros: Clear authority, good for well-defined workflows
  Cons: Manager is bottleneck, single point of failure
```

### 2.2。協作（點對點）

代理是點對點的，彼此直接溝通，沒有老闆。

```text
Collaborative Pattern:

        ┌──────────┐         ┌──────────┐
        │ Agent A  │◄───────►│ Agent B  │
        │(Research)│         │(Analysis)│
        └────┬─────┘         └────┬─────┘
             │                    │
             │    ┌──────────┐    │
             └───►│ Agent C  │◄───┘
                  │(Writing) │
                  └──────────┘

  Mỗi agent có thể gửi message cho bất kỳ agent nào khác.
  Group chat style — tất cả cùng thảo luận.

  Pros: Flexible, creative outcomes, no bottleneck
  Cons: Hard to control, may loop forever, expensive
```

### 2.3。競爭性（辯論/對抗性）

許多代理商持有**反對意見**，主張更高品質的結果。

```text
Competitive / Debate Pattern:

  ┌──────────┐                    ┌──────────┐
  │ Agent A  │                    │ Agent B  │
  │ (FOR)    │                    │(AGAINST) │
  │          │    ┌──────────┐    │          │
  │ "AI sẽ  │───►│  JUDGE   │◄───│ "AI sẽ  │
  │  thay thế│    │          │    │  hỗ trợ, │
  │  jobs"   │    │ Evaluate │    │  không   │
  │          │◄───│ & decide │───►│  thay thế│
  └──────────┘    └──────────┘    └──────────┘
                       │
                       ▼
                  Final verdict
                  (balanced view)

  Pros: Higher quality through adversarial review
  Cons: Expensive (many LLM calls), slow
  Use case: Fact-checking, legal review, security audit
```

### 2.4。管道（順序切換）

每個代理完成處理→將輸出傳遞給下一個代理程式。與裝配線相同。

```text
Pipeline Pattern:

  Input ──→ [Agent 1] ──→ [Agent 2] ──→ [Agent 3] ──→ Output
            Research       Write          Review
            
  Ví dụ cụ thể:
  
  "Write blog" ──→ ┌──────────┐    ┌──────────┐    ┌──────────┐
                   │Researcher│───→│  Writer  │───→│  Editor  │──→ Final
                   │          │    │          │    │          │    Article
                   │Output:   │    │Output:   │    │Output:   │
                   │- 5 papers│    │- 800 word│    │- Polished│
                   │- key data│    │  draft   │    │  article │
                   └──────────┘    └──────────┘    └──────────┘

  Pros: Simple, predictable, easy to debug
  Cons: No feedback loop (unless added), rigid
```

---

## 3.CrewAI框架

### 3.1。 CrewAI 概述

**CrewAI** 是最受歡迎的多智能體框架，圍繞著「船員」隱喻而設計。核心理念：

|概念 |意義|類比|
|--------|---------|---------|
| **代理** |具有角色、目標、背景故事的「員工」|團隊成員|
| **任務** |一件具體要做的事 |吉拉門票 | 吉拉門票
| **工具** |代理可以使用的功能 |工作工具|
| **船員** |群組代理+任務+流程|整個專案團隊|
| **流程** |船員如何執行（順序/分層）|工作流程|

### 3.2。安裝與設定

```python
# Installation
# pip install crewai crewai-tools langchain-openai

import os
os.environ["OPENAI_API_KEY"] = "sk-..."

from crewai import Agent, Task, Crew, Process
from crewai_tools import SerperDevTool, WebsiteSearchTool
```

### 3.3。代理人的定義

```python
from crewai import Agent

# Agent 1: Senior Researcher
researcher = Agent(
    role="Senior Research Analyst",
    goal="Tìm kiếm và phân tích thông tin chính xác, toàn diện về {topic}",
    backstory="""Bạn là chuyên gia nghiên cứu với 15 năm kinh nghiệm. 
    Bạn giỏi tìm kiếm thông tin từ nhiều nguồn, phân tích data, 
    và tổng hợp thành insights có giá trị. Bạn luôn cite sources 
    và phân biệt fact vs opinion.""",
    verbose=True,
    allow_delegation=False,  # Không delegate task cho agent khác
    tools=[SerperDevTool()],  # Có thể search Google
    llm="gpt-4o",
    max_iter=5,  # Tối đa 5 vòng reasoning
)

# Agent 2: Content Writer
writer = Agent(
    role="Senior Content Writer",
    goal="Viết bài viết engaging, informative về {topic} từ research data",
    backstory="""Bạn là content writer chuyên nghiệp, từng viết cho 
    TechCrunch và Wired. Style: clear, concise, ví dụ thực tế. 
    Bạn biết cách biến technical content thành bài viết dễ đọc 
    cho developer audience.""",
    verbose=True,
    allow_delegation=False,
    llm="gpt-4o",
)

# Agent 3: Editor & QA
editor = Agent(
    role="Chief Editor",
    goal="Review và polish bài viết, đảm bảo accuracy và quality",
    backstory="""Bạn là editor với con mắt sắc bén. Bạn check facts, 
    fix grammar, improve flow, và đảm bảo bài viết đạt chuẩn 
    publication. Bạn đặc biệt chú ý technical accuracy.""",
    verbose=True,
    allow_delegation=True,  # Có thể yêu cầu writer sửa lại
    llm="gpt-4o",
)
```

### 3.4。任務的定義

```python
from crewai import Task

# Task 1: Research
research_task = Task(
    description="""Nghiên cứu toàn diện về {topic}:
    1. Tìm 5 nguồn tin cậy gần đây nhất (2024-2025)
    2. Xác định key trends và statistics
    3. Tìm expert opinions và quotes
    4. So sánh các approaches/solutions khác nhau
    5. Ghi chú potential controversies hoặc limitations
    
    Output format: structured research notes với citations.""",
    expected_output="""Research report với:
    - Executive summary (3-5 bullet points)
    - Detailed findings (mỗi finding có source)
    - Key statistics và data points
    - Expert quotes
    - Recommendations for article angle""",
    agent=researcher,
    output_file="research_notes.md",
)

# Task 2: Write
writing_task = Task(
    description="""Dựa trên research notes, viết bài blog khoảng 1000 từ:
    1. Hook opening paragraph
    2. 3-5 main sections với subheadings  
    3. Code examples hoặc diagrams nếu phù hợp
    4. Practical takeaways cho readers
    5. Conclusion với call-to-action
    
    Style: Technical nhưng accessible, viết cho developer audience.""",
    expected_output="Bài blog hoàn chỉnh, 1000 từ, ready for review.",
    agent=writer,
    context=[research_task],  # Writer cần output từ researcher
    output_file="draft_article.md",
)

# Task 3: Edit
editing_task = Task(
    description="""Review bài viết và thực hiện:
    1. Fact-check tất cả claims (cross-reference với research notes)
    2. Fix grammar, spelling, punctuation
    3. Improve sentence flow và readability
    4. Đảm bảo technical accuracy
    5. Add/remove sections nếu cần
    6. Score bài viết trên thang 1-10
    
    Nếu score < 7, yêu cầu writer sửa lại.""",
    expected_output="""Bài viết final version đã polish, kèm:
    - Quality score (1-10)
    - List of changes made
    - Any remaining concerns""",
    agent=editor,
    context=[research_task, writing_task],
    output_file="final_article.md",
)
```

### 3.5。運作團隊

```python
from crewai import Crew, Process

# Sequential Process — agents chạy lần lượt
crew = Crew(
    agents=[researcher, writer, editor],
    tasks=[research_task, writing_task, editing_task],
    process=Process.sequential,  # Chạy tuần tự: research → write → edit
    verbose=True,
    memory=True,  # Enable shared memory
    # cache=True,  # Cache tool results
)

# Kick off
result = crew.kickoff(
    inputs={"topic": "AI Agents in Production 2025"}
)

print("=" * 60)
print("FINAL OUTPUT:")
print("=" * 60)
print(result.raw)
print(f"\nToken usage: {result.token_usage}")
```

### 3.6。層級化流程

```python
# Hierarchical Process — manager agent tự động phân task
manager_crew = Crew(
    agents=[researcher, writer, editor],
    tasks=[research_task, writing_task, editing_task],
    process=Process.hierarchical,  # Manager tự phân công
    manager_llm="gpt-4o",  # LLM cho manager agent
    verbose=True,
)

result = manager_crew.kickoff(
    inputs={"topic": "Multi-Agent Systems Overview"}
)
```

> **提示：** `Process.sequential` 第一次是安全的選擇。僅供使用 `Process.hierarchical` 當你需要動態任務分配時——但它會花費更多的代幣，因為經理需要更多的推理。

### 3.7。 CrewAI 的自訂工具

```python
from crewai_tools import tool

@tool("DatabaseQuery")
def query_database(query: str) -> str:
    """Query the company's PostgreSQL database.
    Useful for getting statistics, user data, revenue numbers.
    Args:
        query: SQL query to execute (SELECT only)
    """
    import psycopg2
    
    # Chỉ cho phép SELECT queries (security)
    if not query.strip().upper().startswith("SELECT"):
        return "Error: Only SELECT queries are allowed."
    
    conn = psycopg2.connect(os.environ["DATABASE_URL"])
    cur = conn.cursor()
    cur.execute(query)
    results = cur.fetchall()
    columns = [desc[0] for desc in cur.description]
    conn.close()
    
    # Format kết quả
    formatted = [dict(zip(columns, row)) for row in results]
    return str(formatted[:50])  # Limit 50 rows


@tool("ReadFile")
def read_file_tool(filepath: str) -> str:
    """Read content of a local file.
    Args:
        filepath: Path to the file to read
    """
    try:
        with open(filepath, "r") as f:
            return f.read()[:5000]  # Limit 5000 chars
    except FileNotFoundError:
        return f"File not found: {filepath}"


# Gán tools cho agent
data_analyst = Agent(
    role="Data Analyst",
    goal="Phân tích data từ database",
    backstory="Bạn là data analyst expert...",
    tools=[query_database, read_file_tool],
    llm="gpt-4o",
)
```

---

## 4. 微軟 AutoGen

### 4.1。 AutoGen 概述

**AutoGen**（由 Microsoft Research）專注於 **會話代理** — 代理程式透過來回發送訊息進行通信，就像聊天群組一樣。

```text
AutoGen Architecture:

  ┌─────────────────────────────────────────────┐
  │              GROUP CHAT                      │
  │                                              │
  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
  │  │Assistant │  │  Coder   │  │ Critic   │  │
  │  │  Agent   │  │  Agent   │  │  Agent   │  │
  │  └────┬─────┘  └────┬─────┘  └────┬─────┘  │
  │       │              │              │        │
  │       └──────────────┼──────────────┘        │
  │                      │                       │
  │              ┌───────▼──────┐                │
  │              │   Message    │                │
  │              │   Thread     │                │
  │              └──────────────┘                │
  │                                              │
  │  ┌──────────────────────────────┐           │
  │  │  Speaker Selection Policy    │           │
  │  │  (round_robin / auto / ...)  │           │
  │  └──────────────────────────────┘           │
  └─────────────────────────────────────────────┘
```

|概念 |描述 |
|--------|--------|
| **對話代理** |基類－代理可以接收/傳送訊息 |
| **助理代理** |代理使用LLM回應|
| **用戶代理代理** |代表用戶，可以執行程式碼 |
| **群組聊天** |一群代理商一起聊天 |
| **群組聊天管理器** |協調下一個發言者 |

### 4.2。安裝和基本設置

```python
# pip install autogen-agentchat autogen-ext[openai]

import os
from autogen_agentchat.agents import AssistantAgent
from autogen_agentchat.conditions import TextMentionTermination
from autogen_agentchat.teams import RoundRobinGroupChat
from autogen_agentchat.ui import Console
from autogen_ext.models.openai import OpenAIChatCompletionClient

# Model client
model_client = OpenAIChatCompletionClient(
    model="gpt-4o",
    api_key=os.environ["OPENAI_API_KEY"],
)
```

### 4.3。兩個代理的對話

```python
import asyncio
from autogen_agentchat.agents import AssistantAgent
from autogen_agentchat.conditions import MaxMessageTermination
from autogen_agentchat.teams import RoundRobinGroupChat
from autogen_agentchat.ui import Console
from autogen_ext.models.openai import OpenAIChatCompletionClient

async def two_agent_chat():
    model_client = OpenAIChatCompletionClient(
        model="gpt-4o",
        api_key=os.environ.get("OPENAI_API_KEY"),
    )

    # Agent 1: Planner
    planner = AssistantAgent(
        name="Planner",
        model_client=model_client,
        system_message="""Bạn là project planner. Khi nhận yêu cầu:
        1. Break down thành 3-5 sub-tasks cụ thể
        2. Mỗi sub-task có: title, description, acceptance criteria
        3. Estimate effort cho mỗi task
        Output as structured list.""",
    )

    # Agent 2: Reviewer  
    reviewer = AssistantAgent(
        name="Reviewer",
        model_client=model_client,
        system_message="""Bạn là senior reviewer. Review plan từ Planner:
        1. Check completeness — có thiếu step nào không?
        2. Check feasibility — estimate có realistic không?
        3. Suggest improvements
        4. Approve hoặc request changes
        Khi approve xong, nói "APPROVED" để kết thúc.""",
    )

    # Termination: dừng khi thấy "APPROVED" hoặc sau 6 messages
    termination = MaxMessageTermination(max_messages=6)

    # Round-robin: Planner → Reviewer → Planner → ...
    team = RoundRobinGroupChat(
        participants=[planner, reviewer],
        termination_condition=termination,
    )

    # Chạy
    stream = team.run_stream(
        task="Lập plan xây REST API cho e-commerce app với auth, products, orders"
    )
    await Console(stream)

asyncio.run(two_agent_chat())
```

### 4.4。群聊與程式碼執行

```python
import asyncio
from autogen_agentchat.agents import AssistantAgent, CodeExecutorAgent
from autogen_agentchat.conditions import TextMentionTermination
from autogen_agentchat.teams import SelectorGroupChat
from autogen_ext.code_executors.local import LocalCommandLineCodeExecutor
from autogen_ext.models.openai import OpenAIChatCompletionClient

async def coding_team():
    model_client = OpenAIChatCompletionClient(
        model="gpt-4o",
        api_key=os.environ.get("OPENAI_API_KEY"),
    )

    # Agent 1: Architect — thiết kế solution
    architect = AssistantAgent(
        name="Architect",
        model_client=model_client,
        system_message="""Bạn là software architect. Khi nhận coding task:
        1. Phân tích requirements
        2. Thiết kế high-level approach
        3. Mô tả components và data flow
        KHÔNG viết code — chỉ thiết kế.""",
    )

    # Agent 2: Coder — viết code
    coder = AssistantAgent(
        name="Coder",
        model_client=model_client,
        system_message="""Bạn là expert Python developer. 
        Viết code dựa trên design từ Architect.
        Code phải: clean, well-commented, production-ready.
        Wrap code trong ```python 塊。 """,
    ）

    # Agent 3: Code executor — runs real code
    code_executor = CodeExecutorAgent(
        名稱=“執行者”，
        code_executor=LocalCommandLineCodeExecutor(work_dir="./coding_output"),
    ）

    #Agent 4：審稿人
    審閱者 = AssistantAgent(
        名稱=“QA_Reviewer”，
        model_client=model_client,
        system_message="""您是 QA 審核者。審核代碼執行結果：
        - 程式碼運行成功嗎？
        - 輸出正確嗎？
        - Are there any edge cases that need fixing?
        When everything is OK, say "TASK_COMPLETE".""",
    ）

    終止 = TextMentionTermination("TASK_COMPLETE")

    # SelectorGroupChat — 模型選擇下一個發言者
    團隊 = SelectorGroupChat(
        參與者=[架構師、編碼員、代碼執行者、審閱者],
        模型_客戶端=模型_客戶端，
        termination_condition=termination,
        selector_prompt="""根据对话流程选择下一个代理：
        1. Architect speaks first if there is no design yet
        2. 設計完成後，Coder 開始說話
        3.Coder寫入後Executor運行程式碼
        4. QA_Reviewer審核執行結果
        僅傳回代理名稱。 """,
    ）

    stream = team.run_stream(
        task="Write Python script to analyze CSV files, calculate statistics, draw charts"
    ）
    等待控制台（流）

asyncio.run（編碼團隊（））
```

> **Note:** `SelectorGroupChat` dùng LLM để quyết định speaker, linh hoạt hơn `RoundRobinGroupChat` nhưng tốn token hơn. Dùng `selector_prompt` để guide model chọn đúng thứ tự.

---

## 5. LangGraph

### 5.1. Tổng quan LangGraph

**LangGraph** (by LangChain team) approach multi-agent khác hẳn: dùng **state machine** (graph) để define workflow. Mỗi node là một agent/function, edges define flow.

```文本。文字
LangGraph 方法－狀態機：

  ┌──────────┐ 研究完成 ┌──────────┐
  │ │ ──────────────────→ │ │
  │研究 │ │ 寫作 │
  │ 節點 │ │ 節點 │
  │ │ │ │
  └──────────┘ └────┬────┘
       ▲ │
       │ 需要修改？ 
       │ / \
       │ 是 否
       │ / \
       │ ┌─────▼───┐ ┌─────▼───┐
       │ │修訂版 │ │ 最終版 │
       │ │ 節點 │ 輸出 │
       │ └────┬────┘ └──────────┘
       │ │
       └────────────────────────┘
            （如果有重大問題，請返回研究）

  主要區別：
  - CrewAI/AutoGen = agent-centric (agents decision flow)
  - LangGraph = graph-centric (developer defines flow)
```

| Feature | Mô tả |
|---------|-------|
| **StateGraph** | Graph definition với typed state |
| **Node** | Function hoặc agent — xử lý state |
| **Edge** | Connection giữa nodes (normal / conditional) |
| **Conditional Edge** | Routing dựa trên state (if/else logic) |
| **Checkpointing** | Save/restore state — human-in-the-loop |
| **Subgraph** | Graph trong graph — composable |

### 5.2. Installation & Concepts

```蟒蛇
# pip 安裝 langgraph langchain-openai

從輸入導入 TypedDict、註解、文字
from langgraph.graph import StateGraph, END, START
從 langgraph.graph.message 導入 add_messages
從 langchain_openai 導入 ChatOpenAI
from langchain_core.messages import HumanMessage, SystemMessage, AIMessage
```

### 5.3. Xây dựng Multi-Agent Workflow

```蟒蛇
進口經營者
from typing import TypedDict, Annotated, Sequence, Literal
從 langgraph.graph 導入 StateGraph，結束，開始
從 langchain_openai 導入 ChatOpenAI
from langchain_core.messages import HumanMessage, SystemMessage, AIMessage, BaseMessage

# ========== 第 1 步：定義狀態 ==========
類別 AgentState(TypedDict):
    """所有節點之間共用狀態。"""
    訊息：註解的[序列[BaseMessage]，operator.add]
    研究筆記：str
    草稿：str
    評論反饋：str
    修訂計數：整數
    最終輸出：str

# ========== 第 2 步：建立 LLM 實例 ==========
llm = ChatOpenAI(模型=“gpt-4o”，溫度=0.7)

# ========== Step 3: Define Node Functions ==========
def Researcher_node(state: AgentState) -> dict:
    """Node 1: Researcher agent — search and analysis."""
    訊息=狀態[“訊息”]
    topic = messages[0].content if messages else "AI Agents"
    
    響應 = llm.invoke([
        SystemMessage(content="""您是資深研究員。
        Analyze the topic and create structured research notes:
        - 主要發現（3-5 分）
        - 統計/數據
        - 專家意見
        - 趨勢"""),
        HumanMessage(content=f"研究主題：{topic}")
    ]）
    
    返回{
        "messages": [AIMessage(content=f"[Researcher] {response.content}")],
        “research_notes”：回應.內容，
    }

def writer_node(state: AgentState) -> dict:
    “”“節點 2：作家代理 — 根據研究筆記撰寫草稿。”“”
    研究 = state.get("research_notes", "")
    回饋 = state.get("review_feedback", "")
    
    Prompt = f“研究筆記：\n{研究}\n”
    如果回饋：
        提示 += f"\n修改回饋：\n{回饋}\n請根據回饋改正。"
    
    響應 = llm.invoke([
        SystemMessage(content="""您是一位專業的內容作家。
        寫一篇文章~500字，引人入勝、技術性強但易於閱讀。
        包括：簡介、3個主要部分、結論。 """),
        HumanMessage(內容=提示)
    ]）
    
    返回{
        "messages": [AIMessage(content=f"[作者]草稿已完成")],
        「草稿」：回應.內容，
    }

def editor_node(state: AgentState) -> dict:
    """節點3：編輯代理程式－審稿。"""
    草稿 = state.get("草稿", "")
    
    響應 = llm.invoke([
        SystemMessage(content="""您是主編，審查文章並給予：
        1. 品質評分（1-10）
        2. Issues to fix (if any)
        3. 如果分數 >= 7，則為“已批准”，否則為“NEEDS_REVISION”。
        
        以「SCORE: X/10」開始回應，以「SCORE: X/10」結束
        "VERDICT: APPROVED" 或 "VERDICT: NEEDS_REVISION"."""),
        HumanMessage(content=f"審閱此草稿：\n\n{草稿}")
    ]）
    
    返回{
        "messages": [AIMessage(content=f"[編輯器] {response.content}")],
        「review_feedback」：回應.內容，
        "revision_count": state.get("revision_count", 0) + 1,
    }

def Final_output_node(state: AgentState) -> dict:
    """節點 4：產生最終輸出。"""
    返回{
        "messages": [AIMessage(content="[系統]文章完成！")],
        "final_output": state.get("草稿", ""),
    }

# ========== 步驟 4：路由邏輯 ==========
def should_revise(state: AgentState) -> Literal["writer", "final"]:
    """條件優勢：修改還是最終確定？"""
    回饋 = state.get("review_feedback", "")
    revision_count = state.get("revision_count", 0)
    
    # 最多 3 次修改以避免無限循環
    如果 revision_count >= 3：
        返回“最終”
    
    如果回饋中顯示「VERDICT：APPROVED」：
        返回“最終”
    
    返回“作家”

# ========== 第 5 步：建立圖表 ==========
工作流程 = StateGraph(AgentState)

# 新增節點
workflow.add_node(“研究員”,researcher_node)
工作流程.add_node（“作家”，writer_node）
工作流程.add_node(“編輯器”, editor_node)
workflow.add_node("final", final_output_node)

# 新增邊
workflow.add_edge(START, "researcher") # 開始 → 研究
workflow.add_edge("researcher", "writer") # 研究 → 寫作
workflow.add_edge("writer", "editor") # 寫入 → 編輯

# 條件邊緣：Edit → Writer（修訂版）或 Final
工作流程.add_conditional_edges(
    “編輯”，
    應該修改，
    {
        "writer": "writer", # 如果需要修改則循環返回
        "final": "final", # 若批准則切換到final
    }
）
工作流程.add_edge(“最終”, END)

# 編譯
應用程式=工作流程.編譯()
```

### 5.4. Chạy LangGraph Workflow

```蟒蛇
# 運行工作流程
結果 = app.invoke({
    "messages": [HumanMessage(content="寫 2025 年 AI Agent 趨勢")],
    “研究笔记”：“”，
    “草稿”：“”，
    "review_feedback": "",
    “修订计数”：0，
    “最终输出”：“”，
})

print("最後一篇文章：")
列印（結果[“最終輸出”]）
print(f"\n修訂輪次: {result['revision_count']}")
```

### 5.5. Checkpointing & Human-in-the-Loop

```蟒蛇
從 langgraph.checkpoint.memory 導入 MemorySaver

# 新增檢查點
檢查指針 = MemorySaver()
app_with_memory = 工作流程. 编译（
    檢查指針=檢查指針，
    Interrupt_before=["editor"], # 在編輯器節點之前暫停
）

# Run — 将在编辑器之前停止
config = {"configurable": {"thread_id": "article-001"}}
結果 = app_with_memory.invoke(
    {
        「messages」：[HumanMessage（content =「醫療保健中的人工智慧代理人」）]，
        “研究笔记”：“”，
        “草稿”：“”，
        "review_feedback": "",
        「修訂計數」：0，
        “最终输出”：“”，
    },
    配置=配置，
）

# 查看目前狀態
狀態 = app_with_memory.get_state(config)
print(f"下一個節點：{state.next}") # ('editor',)
print(f"目前草稿：\n{state.values['草稿'][:200]}...")

# 人工審查草案 → 決定繼續
# 使用者可以在恢復之前修改狀態
app_with_memory.update_state(
    配置，
    {"review_feedback": "看起來不錯，需要進行一些小的語法修復。"},
）

# 復原執行
最終= app_with_memory.invoke（無，配置=配置）
列印（最終[“最終輸出”]）
```

> **Tip:** **Checkpointing** là killer feature của LangGraph. Nó cho phép bạn pause workflow, để human review, rồi resume — critical cho production systems nơi bạn không muốn agent tự chạy hoàn toàn tự động.

### 5.6. Visualize Graph

```蟒蛇
# 繪製圖表（需要graphviz）
from IPython.display 导入图像，显示

顯示（圖像（app.get_graph（）。draw_mermaid_png（）））

# 或列印為文字
印出（app.get_graph（）。draw_ascii（））
```

---

## 6. Framework Comparison

### 6.1. Bảng so sánh chi tiết

| Feature | CrewAI | AutoGen | LangGraph | Raw Code |
|---------|--------|---------|-----------|----------|
| **Abstraction level** | Rất cao | Cao | Trung bình | Thấp |
| **Learning curve** | Dễ nhất | Trung bình | Khó nhất | Tùy skill |
| **Flexibility** | Trung bình | Cao | Rất cao | Tuyệt đối |
| **Graph/Flow control** | Sequential/Hierarchical | Chat-based | Full graph + conditions | Custom |
| **Stateful** | Memory built-in | Conversation history | Explicit state + checkpoints | Custom |
| **Human-in-the-loop** | Limited | Tốt (UserProxy) | Tuyệt vời (interrupt) | Custom |
| **Code execution** | Via tools | Built-in executor | Via tools | Custom |
| **Debugging** | Verbose logs | Chat transcript | Graph visualization | Print/logging |
| **Production ready** | Tốt | Tốt | Rất tốt | Tùy code |
| **LLM providers** | Nhiều (via LiteLLM) | OpenAI-focused | Nhiều (via LangChain) | Any |
| **Community** | Lớn, active | Microsoft-backed | LangChain ecosystem | N/A |
| **Lines of code** | Ít nhất (~50) | Trung bình (~80) | Nhiều nhất (~120) | Rất nhiều |

### 6.2. Khi nào dùng framework nào?

```文本。文字
决策树：选择多代理框架

  您需要多代理系統嗎？
  │
  ├── 你想快速開始，而不需要太多客製化嗎？
  │ └── ✅ CrewAI — 最簡單的、以角色為基礎的隱喻
  │
  ├── 您需要免費聊天代理、內建執行代碼嗎？
  │ └── ✅ AutoGen — 基於對話，適合編碼任務
  │
  ├── 你需要複雜的流程控制、條件路由、
  │ 人機互動、檢查點？
  │ └── ✅ LangGraph — 複雜工作流程的狀態機
  │
  ├── 你需要最大的彈性，不想依賴？
  │ └── ✅ 原始程式碼——透過 LLM API 呼叫自行構建
  │
  └── 你是在製作原型還是在製作？
      ├── 原型→CrewAI（最快）
      └── 生產→ LangGraph（最穩健）
```

> **Tip:** Trong thực tế, nhiều team bắt đầu với **CrewAI** để prototype nhanh, rồi migrate sang **LangGraph** khi cần production-grade control flow. Hai thứ không exclusive — bạn có thể dùng CrewAI agent bên trong LangGraph node.

---

## 7. Agent Communication Protocols

### 7.1. Message Passing Patterns

Agents cần "nói chuyện" với nhau. Có nhiều pattern:

```文字.文字
模式一：私信（点对点）
  Agent A ──message──→ Agent B
  
  Simple, used when there are only 2 agents.

模式2：广播（一对多）
  Agent A ──message──→ Agent B
           ──讯息──→ 特工C
           ──message──→ Agent D
  
  Manager broadcast task to all workers.

Pattern 3: Shared Blackboard
  ┌──────────────────────────┐
  │ SHARED STATE / DB │
  │ ┌──────────────────────┐ │
  │ │ research_notes: ... │ │
  │ │ draft: ... │ │
  │ │ review: ... │ │
  │ └──────────────────────┘ │
  └────┬────────┬────────┬────┘
       │ │ │
    代理A 代理B 代理C
    （寫） （讀/ （讀/
              寫）寫）

  所有代理读/写共享状态。
  LangGraph uses this pattern.

Pattern 4: Message Queue (Pub/Sub)
  代理A－發布－→ [隊列：「研究」]－訂閱－→ 代理B
  代理 B ──發布──→ [隊列：「草稿」] ──訂閱──→ 代理 C
  
  解耦、可擴展、生產友好。
```

### 7.2. Structured Output cho Inter-Agent Communication

Khi agents giao tiếp, output cần **structured** để agent tiếp theo parse được:

```蟒蛇
从 pydantic 导入 BaseModel、Field
從 langchain_openai 導入 ChatOpenAI
from typing import Literal

# 用于代理之间通信的结构化输出模式

class ResearchOutput(BaseModel):
    “”“研究员→作家的输出。”“”
    主題：str = Field（描述=“研究的主題”）
    key_findings: list[str] = Field(description="3-5 主要發現")
    統計資料：list[str] = Field(description="相關統計資料")
    來源： list[str] = Field(description="來源 URL/引用")
    建議角度：str = Field（描述=“建議接近角度”）

类 ReviewOutput(BaseModel)：
    “”“编辑→作家（或最终）的输出。”“”
    分数： int = Field(ge=1, le=10, description="质量分数 1-10")
    问题：list[str] = Field(description="需要修复的问题")
    建议：list[str] = Field(description="改进建议")
    結論：文字[“已批准”，“NEEDS_REVISION”] = Field（
        描述=“批准或請求修訂”
    ）

# 與法學碩士一起使用
llm = ChatOpenAI(模型=“gpt-4o”)
Structured_llm = llm.with_structed_output(研究輸出)

研究結果 = Structured_llm.invoke(
    《2025年流行的AI Agent框架研究》
）

# 结果是 Pydantic 模型 — 轻松传递给下一个代理
print(research_result.key_findings)
印刷（研究結果.推薦角度）
```

> **Tip:** Luôn dùng **Pydantic models** cho inter-agent communication thay vì free-form text. Nó giúp: (1) validate output, (2) auto-retry nếu format sai, (3) agent tiếp theo parse dễ dàng.

---

## 8. Orchestration Patterns

### 8.1. Supervisor Pattern

```蟒蛇
從輸入 import Literal
從 langgraph.graph 導入 StateGraph，結束，開始
從 langchain_openai 導入 ChatOpenAI
從 pydantic 匯入 BaseModel、Field

# 主管代理決定接下來處理哪個代理
類別 SupervisorDecision(BaseModel)：
    """主管決定路線。"""
    next_agent: Literal["研究者", "作家", "編輯", "完成"] = Field(
        描述=“下一個要處理的代理”
    ）
    Reason: str = Field(description="選擇該代理人的原因")

Supervisor_llm = ChatOpenAI(model="gpt-4o").with_structed_output(
    主管決策
）

def Supervisor_node(state: dict) -> dict:
    “”“主管決定下一步。”“”
    messages = state.get("messages", [])
    
    決策=supervisor_llm.invoke([
        SystemMessage(content="""您是團隊主管：
        - 研究員：搜尋資訊
        - 作者：寫內容
        - 編輯：審查並修復
        
        根據對話歷史記錄，決定哪個代理
        需要進一步處理。如果任務已完成，請選擇「完成」。 """),
        *訊息，
    ]）
    
    返回{
        "messages": [AIMessage(content=f"[Supervisor] → {decision.next_agent}: {decision.reason}")],
        「下一個」：decision.next_agent，
    }

def route_from_supervisor(state: dict) -> str:
    “”“路線是基於主管的決定。”“”
    return state.get("下一步", "完成")
```

### 8.2. Round-Robin Pattern

```蟒蛇
def round_robin_router(state: dict) -> str:
    """循環：代理 A → B → C → A → B → ..."""
    代理人= [“研究員”，“作家”，“編輯”]
    current_turn = state.get("turn_count", 0)
    max_turns = state.get("max_turns", 9) # 3 輪
    
    如果 current_turn >= max_turns：
        返回“最終”
    
    返回代理[current_turn % len(代理)]
```

### 8.3. Dynamic Routing

```蟒蛇
def dynamic_router(state: dict) -> str:
    """基於內容和品質指標的路由。"""
    草稿 = state.get("草稿", "")
    評論 = state.get("review_feedback", "")
    研究 = state.get("research_notes", "")
    
    # 還沒研究 → 研究員
    如果不研究：
        返回“研究員”
    
    # 還沒有草稿 → 作者
    如果未起草：
        返回“作家”
    
    # 尚未審閱 → 編輯
    如果沒有審核：
        返回“編輯器”
    
    # 評論說需要修改 → 作者
    如果「NEEDS_REVISION」正在審核中：
        返回“作家”
    
    # 批准 → 完成
    返回“最終”
```

### 8.4. Error Recovery trong Multi-Agent

```蟒蛇
匯入日誌記錄
從輸入導入 TypedDict

記錄器=logging.getLogger(__name__)

類別 ErrorAwareState(TypedDict):
    訊息：列表
    錯誤：列表[str]
    重試次數：整數
    最大重試次數：int

def safe_agent_node(agent_fn, agent_name: str):
    """包裝器為代理節點新增錯誤處理。"""
    defwrapped（狀態：ErrorAwareState）->字典：
        重試 = state.get("重試次數", 0)
        max_retries = state.get("max_retries", 3)
        
        嘗試：
            結果 = agent_fn(狀態)
            # 成功時重置重試次數
            結果[「重試次數」] = 0
            回傳結果
            
        除了異常 e：
            logger.error(f"代理 {agent_name} 失敗：{e}")
            
            如果重試 < max_retries:
                return {
                    "messages": [AIMessage(
                        content=f"[{agent_name}] Error: {e}. Retrying..."
                    )],
                    "errors": [f"{agent_name}: {str(e)}"],
                    "retry_count": retries + 1,
                }
            else:
                return {
                    "messages": [AIMessage(
                        content=f"[{agent_name}] Failed after {max_retries} retries."
                    )],
                    "errors": [f"{agent_name}: FATAL - {str(e)}"],
                    "retry_count": 0,
                }
    
    wrapped.__name__ = f"safe_{agent_name}"
    return wrapped

# Usage:
# workflow.add_node("researcher", safe_agent_node(researcher_node, "researcher"))
```

> **提示：**生產多代理系統**必須**具有錯誤處理功能。常見錯誤：LLM 速率限制、輸出格式錯誤、代理之間無限循環。始終設定 `max_retries` 和 `max_iterations`。

---

## 9. 實作：建立多代理內容創作團隊

現在，我們將使用 LangGraph（完整的內容創建團隊）來建立一個 **生產就緒** 多代理系統。

### 9.1。建築設計

```text
Multi-Agent Content Creation Pipeline:

  ┌──────────┐     ┌──────────┐     ┌──────────┐
  │          │     │          │     │          │
  │ RESEARCH │────→│  WRITE   │────→│  REVIEW  │
  │  AGENT   │     │  AGENT   │     │  AGENT   │
  │          │     │          │     │          │
  └──────────┘     └──────────┘     └─────┬────┘
                        ▲                  │
                        │            ┌─────▼─────┐
                        │            │           │
                        │        APPROVED?    NEEDS FIX
                        │            │           │
                        │            ▼           │
                        │      ┌──────────┐      │
                        │      │  SEO     │      │
                        │      │  AGENT   │      │
                        └──────│          │◄─────┘
                               └────┬─────┘
                                    │
                               ┌────▼─────┐
                               │  FINAL   │
                               │  OUTPUT  │
                               └──────────┘

  Features:
  ✅ 4 specialized agents
  ✅ Conditional routing (review loop)
  ✅ Structured inter-agent communication
  ✅ Error handling & retry
  ✅ Token tracking
  ✅ Checkpointing for human review
```

### 9.2。全面實施

```python
"""
Multi-Agent Content Creation Team
Using LangGraph + Structured Output + Error Handling
"""

import operator
from typing import TypedDict, Annotated, Sequence, Literal
from pydantic import BaseModel, Field
from langgraph.graph import StateGraph, END, START
from langgraph.checkpoint.memory import MemorySaver
from langchain_openai import ChatOpenAI
from langchain_core.messages import (
    HumanMessage, SystemMessage, AIMessage, BaseMessage
)

# ================================================================
# 1. Define Structured Types for Inter-Agent Communication
# ================================================================

class ResearchResult(BaseModel):
“”“研究代理的結構化輸出。”“”
    topic: str
    key_findings: list[str] = Field(min_length=3, max_length=7)
    statistics: list[str] = Field(default_factory=list)
    expert_quotes: list[str] = Field(default_factory=list)
    recommended_angle: str
    sources: list[str]

class ArticleDraft(BaseModel):
"""作家代理人的結構化輸出。"""
    title: str
    introduction: str
    sections: list[dict] = Field(
        description="List of {heading: str, content: str}"
    )
    conclusion: str
    word_count: int

class ReviewResult(BaseModel):
"""審閱代理的結構化輸出。"""
    score: int = Field(ge=1, le=10)
    strengths: list[str]
    issues: list[str]
    suggestions: list[str]
    verdict: Literal["APPROVED", "NEEDS_REVISION"]

class SEOResult(BaseModel):
"""SEO 代理程式的結構化輸出。"""
    meta_title: str = Field(max_length=60)
    meta_description: str = Field(max_length=160)
    keywords: list[str] = Field(min_length=3, max_length=10)
    slug: str
    optimized_title: str

# ================================================================
# 2. Define Graph State
# ================================================================

class ContentState(TypedDict):
    messages: Annotated[Sequence[BaseMessage], operator.add]
    topic: str
Research: str # 研究結果的 JSON 字串
Draft: str # ArticleDraft 的 JSON 字串
review: str # ReviewResult 的 JSON 字串
seo: str # SEOResult 的 JSON 字串
    final_article: str
    revision_count: int
    errors: list[str]

# ================================================================
# 3. LLM Setup
# ================================================================

llm = ChatOpenAI(model="gpt-4o", temperature=0.7)

# ================================================================
# 4. Agent Node Definitions
# ================================================================

def research_agent(state: ContentState) -> dict:
“”“研究代理 — 搜尋和分析資訊。”“”
    topic = state["topic"]
    
    structured_llm = llm.with_structured_output(ResearchResult)
    
    result = structured_llm.invoke([
SystemMessage(content="""您是資深研究分析師。
為所要求的主題建立詳細的研究筆記。
重點關注：近期趨勢（2024-2025）、統計數據、專家意見。
始終包含來源（可以是出版物名稱+年份）。 """),
        HumanMessage(content=f"Research topic: {topic}"),
    ])
    
    return {
        "messages": [AIMessage(content=f"[Research Agent] Completed research on '{topic}'")],
        "research": result.model_dump_json(),
    }

def writer_agent(state: ContentState) -> dict:
“”“作家代理——根據研究筆記撰寫文章。”“”
    research = state.get("research", "")
    review = state.get("review", "")
    
    prompt = f"Research data:\n{research}\n"
    if review:
Prompt += f"\n之前的審查回饋：\n{審查}\n根據本次回饋進行編輯。"
    
    structured_llm = llm.with_structured_output(ArticleDraft)
    
    result = structured_llm.invoke([
SystemMessage(content="""您是資深內容作家（TechCrunch 風格）。
寫一篇部落格文章約 800 字，引人入勝、技術性強但易於理解。
結構：引言、3-4 個標題清晰的部分、結論。
        Style: active voice, short paragraphs, real examples."""),
        HumanMessage(content=prompt),
    ])
    
    return {
        "messages": [AIMessage(content=f"[Writer Agent] Draft completed: '{result.title}' ({result.word_count} words)")],
        "draft": result.model_dump_json(),
    }

def review_agent(state: ContentState) -> dict:
“”“審查代理 - 審查和反饋。”“”
    draft = state.get("draft", "")
    research = state.get("research", "")
    
    structured_llm = llm.with_structured_output(ReviewResult)
    
    result = structured_llm.invoke([
SystemMessage(content="""您是主編，評論文章：
1. 技術準確性（與研究資料交叉核對）
        2. Writing quality (grammar, flow, clarity)
3. 完整性（涵蓋所有關鍵發現？）
4. 參與度（吸引讀者？）
        
得分1-10。如果 >= 7，則已批准；如果 < 7，則需要修訂。 """)，
        HumanMessage(content=f"Research:\n{research}\n\nDraft:\n{draft}"),
    ])
    
    return {
        "messages": [AIMessage(
            content=f"[Review Agent] Score: {result.score}/10 — {result.verdict}"
        )],
        "review": result.model_dump_json(),
        "revision_count": state.get("revision_count", 0) + 1,
    }

def seo_agent(state: ContentState) -> dict:
    """SEO Agent — optimize cho search engines."""
    draft = state.get("draft", "")
    topic = state["topic"]
    
    structured_llm = llm.with_structured_output(SEOResult)
    
    result = structured_llm.invoke([
SystemMessage(content="""您是 SEO 專家。優化您的文章以進行搜尋：
        - Meta title (max 60 chars, include primary keyword)
        - Meta description (max 160 chars, compelling CTA)
        - Keywords (3-10 relevant terms)
        - URL slug (lowercase, dashes)
        - Optimized title (SEO-friendly version)"""),
        HumanMessage(content=f"Topic: {topic}\n\nArticle:\n{draft}"),
    ])
    
    return {
        "messages": [AIMessage(content=f"[SEO Agent] Optimized: '{result.optimized_title}'")],
        "seo": result.model_dump_json(),
    }

def format_final_output(state: ContentState) -> dict:
    """Final node — combine everything into publishable format."""
    import json
    
    draft = json.loads(state.get("draft", "{}"))
    seo = json.loads(state.get("seo", "{}"))
    
    # Build markdown article
    article_parts = [
        f"# {seo.get('optimized_title', draft.get('title', 'Untitled'))}",
        "",
        f"> **Meta:** {seo.get('meta_description', '')}",
        f"> **Keywords:** {', '.join(seo.get('keywords', []))}",
        "",
        draft.get("introduction", ""),
        "",
    ]
    
    for section in draft.get("sections", []):
        article_parts.append(f"## {section.get('heading', '')}")
        article_parts.append(section.get("content", ""))
        article_parts.append("")
    
    article_parts.append("## Conclusion")
    article_parts.append(draft.get("conclusion", ""))
    
    final = "\n".join(article_parts)
    
    return {
        "messages": [AIMessage(content="[System] Article finalized and ready to publish!")],
        "final_article": final,
    }

# ================================================================
# 5. Routing Logic
# ================================================================

def review_router(state: ContentState) -> Literal["writer", "seo"]:
"""審核後的路線：修改或SEO。""""
    import json
    
    review = state.get("review", "")
    revision_count = state.get("revision_count", 0)
    
    # Max 3 revisions
    if revision_count >= 3:
        return "seo"
    
    try:
        review_data = json.loads(review)
        if review_data.get("verdict") == "APPROVED":
            return "seo"
    except (json.JSONDecodeError, KeyError):
        pass
    
    return "writer"

# ================================================================
# 6. Build & Compile Graph
# ================================================================

workflow = StateGraph(ContentState)

# Add nodes
workflow.add_node("researcher", research_agent)
workflow.add_node("writer", writer_agent)
workflow.add_node("reviewer", review_agent)
workflow.add_node("seo", seo_agent)
workflow.add_node("final", format_final_output)

# Add edges
workflow.add_edge(START, "researcher")
workflow.add_edge("researcher", "writer")
workflow.add_edge("writer", "reviewer")
workflow.add_conditional_edges(
    "reviewer",
    review_router,
    {"writer": "writer", "seo": "seo"},
)
workflow.add_edge("seo", "final")
workflow.add_edge("final", END)

# Compile with checkpointing
checkpointer = MemorySaver()
content_pipeline = workflow.compile(checkpointer=checkpointer)

# ================================================================
# 7. Run Pipeline
# ================================================================

def create_content(topic: str, thread_id: str = "default"):
"""主要入口點 — 建立主題內容。"""
    config = {"configurable": {"thread_id": thread_id}}
    
    result = content_pipeline.invoke(
        {
            "messages": [HumanMessage(content=topic)],
            "topic": topic,
            "research": "",
            "draft": "",
            "review": "",
            "seo": "",
            "final_article": "",
            "revision_count": 0,
            "errors": [],
        },
        config=config,
    )
    
    # Print execution trace
    print("=" * 60)
    print("EXECUTION TRACE:")
    print("=" * 60)
    for msg in result["messages"]:
        print(f"  {msg.content}")
    
    print(f"\nRevision rounds: {result['revision_count']}")
    print("=" * 60)
    print("FINAL ARTICLE:")
    print("=" * 60)
    print(result["final_article"])
    
    return result

＃ 跑步
# result = create_content("AI Agents in Production: Trends & Best Practices 2025")
```

### 9.3。運行和測試

```python
# 運行管道
result = create_content(
    topic="Multi-Agent AI Systems: From Research to Production",
    thread_id="article-001"
)

# 檢查每個檢查點的狀態
config = {"configurable": {"thread_id": "article-001"}}
history = list(content_pipeline.get_state_history(config))

print(f"\nTotal checkpoints: {len(history)}")
for i, state in enumerate(history):
    print(f"  Checkpoint {i}: next={state.next}, "
          f"revision_count={state.values.get('revision_count', 0)}")
```

---

## 10. 總結

在本文中，我們了解了**多代理系統**的整個世界：

**架構模式：**
- **層級**：經理→工人，與明確的工作流程一致
- **協作**：點對點，有創意但難以控制
- **競爭**：辯論/對抗性，高品質但昂貴
- **管道**：順序切換，簡單且可預測

**3個主要框架：**

| |船員人工智慧 | AutoGen |郎圖|
|---|---|---|---|
| **最適合** |快速原型製作 |基於聊天的任務 |生產流程|
| **關鍵概念** |船員+角色|群聊 |狀態圖|
| **流量控制** |製程類型|音箱選型|顯式邊緣 |

**重點：**
1. **當任務需要超過 2 個專門角色時，多代理值得使用**
2. **結構化輸出** (Pydantic) — 代理間通訊所需
3. **錯誤處理** — 設定最大重試次數、最大迭代次數、逾時
4. **檢查點** — 對生產至關重要（人機互動）
5. **從簡單開始** — CrewAI 原型 → LangGraph 製作

---

## 下一篇文章

**第 15 課：AI 代理中的記憶、規劃和推理** — 智能代理需要記住（Memory）、計劃（Planning）和推理（Reasoning）。我們將實現短期記憶、帶有向量儲存的長期記憶、情景記憶、任務分解、思考鏈推理、自我反思和人機循環模式。

