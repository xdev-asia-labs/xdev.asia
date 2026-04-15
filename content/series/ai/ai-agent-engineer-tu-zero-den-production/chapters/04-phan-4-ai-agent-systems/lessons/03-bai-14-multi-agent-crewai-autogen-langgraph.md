---
id: 019e0a01-bb14-7001-c001-ee1400000001
title: "Bài 14: Multi-Agent Systems — CrewAI, AutoGen & LangGraph"
slug: bai-14-multi-agent-crewai-autogen-langgraph
description: >-
  Multi-agent architectures: hierarchical, collaborative, competitive. CrewAI framework. Microsoft AutoGen. LangGraph state machines. Agent communication protocols. Orchestration patterns. Thực hành xây multi-agent team cho complex tasks.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 13
section_title: "Phần 4: AI Agent & Agent-based Systems"
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: "AI Agent Engineer: Từ Zero đến Production"
  slug: ai-agent-engineer-tu-zero-den-production
---

> **Một agent giỏi cỡ nào cũng có giới hạn. Nhưng một đội agent phối hợp nhịp nhàng thì gần như vô hạn.** Tưởng tượng bạn cần viết một bài research report: một agent search web, một agent phân tích data, một agent viết draft, một agent review & edit. Mỗi agent chuyên một việc, phối hợp qua **protocol** rõ ràng — đó chính là **Multi-Agent System**. Bài này ta sẽ đi từ lý thuyết kiến trúc, qua ba framework hàng đầu **CrewAI**, **Microsoft AutoGen**, **LangGraph**, rồi tự tay build một **multi-agent content creation team** hoàn chỉnh.

---

## 1. Multi-Agent Systems là gì?

### 1.1. Từ Single Agent đến Agent Teams

Ở bài 13, ta đã build single agent với tool calling — một agent duy nhất xử lý mọi thứ. Cách này hoạt động tốt cho task đơn giản, nhưng khi complexity tăng lên:

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

### 1.2. Khi nào cần Multi-Agent?

| Trường hợp | Single Agent | Multi-Agent |
|-------------|:-----------:|:----------:|
| Simple Q&A chatbot | ✅ | Overkill |
| Research + Write report | ⚠️ Possible | ✅ Tốt hơn |
| Code review + Fix + Test | ❌ Quá phức tạp | ✅ |
| Data pipeline: ETL + Analyze + Visualize | ❌ | ✅ |
| Debate/verify facts (adversarial) | ❌ | ✅ |
| Customer support (simple) | ✅ | Overkill |
| Customer support (routing + specialist) | ⚠️ | ✅ |

> **Tip:** Rule of thumb — nếu task của bạn cần **hơn 2 vai trò khác nhau** (researcher, writer, reviewer...) hoặc hơn 3 tool categories, hãy cân nhắc multi-agent.

### 1.3. Các thành phần cốt lõi

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

Mỗi agent có ba thành phần chính:
- **LLM**: Brain — model xử lý ngôn ngữ (có thể khác model cho từng agent)
- **Tools**: Hands — các function agent có thể gọi
- **Memory**: Short-term (conversation) và shared state

---

## 2. Architecture Patterns

### 2.1. Hierarchical (Manager → Workers)

Một **manager agent** nhận task tổng, phân chia thành sub-tasks, giao cho **worker agents**, rồi tổng hợp kết quả.

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

### 2.2. Collaborative (Peer-to-Peer)

Các agent ngang hàng, trao đổi trực tiếp với nhau, không có boss.

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

### 2.3. Competitive (Debate / Adversarial)

Nhiều agent có **quan điểm đối lập**, tranh luận để đạt kết quả chất lượng cao hơn.

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

### 2.4. Pipeline (Sequential Handoff)

Mỗi agent xử lý xong → pass output cho agent tiếp theo. Giống assembly line.

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

## 3. CrewAI Framework

### 3.1. Tổng quan CrewAI

**CrewAI** là framework phổ biến nhất cho multi-agent, thiết kế theo metaphor "đội ngũ nhân viên" (crew). Concepts cốt lõi:

| Concept | Ý nghĩa | Analogy |
|---------|---------|---------|
| **Agent** | Một "nhân viên" với role, goal, backstory | Thành viên team |
| **Task** | Một việc cụ thể cần hoàn thành | Ticket trong Jira |
| **Tool** | Khả năng agent có thể dùng | Dụng cụ làm việc |
| **Crew** | Nhóm agents + tasks + process | Cả team project |
| **Process** | Cách crew thực thi (sequential / hierarchical) | Workflow |

### 3.2. Installation & Setup

```python
# Installation
# pip install crewai crewai-tools langchain-openai

import os
os.environ["OPENAI_API_KEY"] = "sk-..."

from crewai import Agent, Task, Crew, Process
from crewai_tools import SerperDevTool, WebsiteSearchTool
```

### 3.3. Định nghĩa Agents

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

### 3.4. Định nghĩa Tasks

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

### 3.5. Chạy Crew

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

### 3.6. Hierarchical Process

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

> **Tip:** `Process.sequential` là lựa chọn an toàn cho lần đầu. Chỉ dùng `Process.hierarchical` khi bạn cần dynamic task assignment — nhưng nó tốn nhiều token hơn vì manager cần reasoning thêm.

### 3.7. Custom Tools cho CrewAI

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

## 4. Microsoft AutoGen

### 4.1. Tổng quan AutoGen

**AutoGen** (by Microsoft Research) focus vào **conversational agents** — agents giao tiếp bằng cách gửi messages qua lại, giống chat group.

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

| Concept | Mô tả |
|---------|-------|
| **ConversableAgent** | Base class — agent có thể nhận/gửi messages |
| **AssistantAgent** | Agent dùng LLM để respond |
| **UserProxyAgent** | Đại diện user, có thể execute code |
| **GroupChat** | Nhóm agents chat với nhau |
| **GroupChatManager** | Điều phối ai nói tiếp theo |

### 4.2. Installation & Basic Setup

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

### 4.3. Two-Agent Conversation

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

### 4.4. Group Chat với Code Execution

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
        Wrap code trong ```python blocks.""",
    )

    # Agent 3: Code executor — chạy code thật
    code_executor = CodeExecutorAgent(
        name="Executor",
        code_executor=LocalCommandLineCodeExecutor(work_dir="./coding_output"),
    )

    # Agent 4: Reviewer
    reviewer = AssistantAgent(
        name="QA_Reviewer",
        model_client=model_client,
        system_message="""Bạn là QA reviewer. Review code execution results:
        - Code chạy thành công không?
        - Output đúng không?
        - Có edge cases nào cần fix?
        Khi mọi thứ OK, nói "TASK_COMPLETE".""",
    )

    termination = TextMentionTermination("TASK_COMPLETE")

    # SelectorGroupChat — model tự chọn ai nói tiếp
    team = SelectorGroupChat(
        participants=[architect, coder, code_executor, reviewer],
        model_client=model_client,
        termination_condition=termination,
        selector_prompt="""Chọn agent tiếp theo dựa trên conversation flow:
        1. Architect nói trước nếu chưa có design
        2. Coder nói sau khi có design
        3. Executor chạy code sau khi Coder viết
        4. QA_Reviewer review kết quả execution
        Trả về chỉ tên agent.""",
    )

    stream = team.run_stream(
        task="Viết Python script phân tích CSV file, tính statistics, vẽ chart"
    )
    await Console(stream)

asyncio.run(coding_team())
```

> **Note:** `SelectorGroupChat` dùng LLM để quyết định speaker, linh hoạt hơn `RoundRobinGroupChat` nhưng tốn token hơn. Dùng `selector_prompt` để guide model chọn đúng thứ tự.

---

## 5. LangGraph

### 5.1. Tổng quan LangGraph

**LangGraph** (by LangChain team) approach multi-agent khác hẳn: dùng **state machine** (graph) để define workflow. Mỗi node là một agent/function, edges define flow.

```text
LangGraph Approach — State Machine:

  ┌─────────┐     research_done     ┌─────────┐
  │         │ ────────────────────→ │         │
  │Research │                       │  Write  │
  │  Node   │                       │  Node   │
  │         │                       │         │
  └─────────┘                       └────┬────┘
       ▲                                 │
       │                          needs_revision? 
       │                          /            \
       │                        YES             NO
       │                        /                \
       │                  ┌─────▼───┐       ┌─────▼───┐
       │                  │Revision │       │  Final  │
       │                  │  Node   │       │ Output  │
       │                  └────┬────┘       └─────────┘
       │                       │
       └───────────────────────┘
            (back to research if major issues)

  Key difference: 
  - CrewAI/AutoGen = agent-centric (agents decide flow)
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

```python
# pip install langgraph langchain-openai

from typing import TypedDict, Annotated, Literal
from langgraph.graph import StateGraph, END, START
from langgraph.graph.message import add_messages
from langchain_openai import ChatOpenAI
from langchain_core.messages import HumanMessage, SystemMessage, AIMessage
```

### 5.3. Xây dựng Multi-Agent Workflow

```python
import operator
from typing import TypedDict, Annotated, Sequence, Literal
from langgraph.graph import StateGraph, END, START
from langchain_openai import ChatOpenAI
from langchain_core.messages import HumanMessage, SystemMessage, AIMessage, BaseMessage

# ========== Step 1: Define State ==========
class AgentState(TypedDict):
    """Shared state giữa tất cả nodes."""
    messages: Annotated[Sequence[BaseMessage], operator.add]
    research_notes: str
    draft: str
    review_feedback: str
    revision_count: int
    final_output: str

# ========== Step 2: Create LLM instances ==========
llm = ChatOpenAI(model="gpt-4o", temperature=0.7)

# ========== Step 3: Define Node Functions ==========
def researcher_node(state: AgentState) -> dict:
    """Node 1: Researcher agent — tìm kiếm và phân tích."""
    messages = state["messages"]
    topic = messages[0].content if messages else "AI Agents"
    
    response = llm.invoke([
        SystemMessage(content="""Bạn là Senior Researcher. 
        Phân tích topic và tạo research notes có cấu trúc:
        - Key findings (3-5 points)
        - Statistics/data
        - Expert opinions
        - Trends"""),
        HumanMessage(content=f"Research topic: {topic}")
    ])
    
    return {
        "messages": [AIMessage(content=f"[Researcher] {response.content}")],
        "research_notes": response.content,
    }

def writer_node(state: AgentState) -> dict:
    """Node 2: Writer agent — viết draft từ research notes."""
    research = state.get("research_notes", "")
    feedback = state.get("review_feedback", "")
    
    prompt = f"Research notes:\n{research}\n"
    if feedback:
        prompt += f"\nRevision feedback:\n{feedback}\nHãy sửa theo feedback."
    
    response = llm.invoke([
        SystemMessage(content="""Bạn là Content Writer chuyên nghiệp.
        Viết bài blog ~500 từ, engaging, technical nhưng dễ đọc.
        Include: intro, 3 main sections, conclusion."""),
        HumanMessage(content=prompt)
    ])
    
    return {
        "messages": [AIMessage(content=f"[Writer] Draft completed")],
        "draft": response.content,
    }

def editor_node(state: AgentState) -> dict:
    """Node 3: Editor agent — review draft."""
    draft = state.get("draft", "")
    
    response = llm.invoke([
        SystemMessage(content="""Bạn là Chief Editor. Review bài viết và cho:
        1. Quality score (1-10)
        2. Issues to fix (nếu có)
        3. "APPROVED" nếu score >= 7, "NEEDS_REVISION" nếu không.
        
        Bắt đầu response bằng "SCORE: X/10" và kết thúc bằng 
        "VERDICT: APPROVED" hoặc "VERDICT: NEEDS_REVISION"."""),
        HumanMessage(content=f"Review this draft:\n\n{draft}")
    ])
    
    return {
        "messages": [AIMessage(content=f"[Editor] {response.content}")],
        "review_feedback": response.content,
        "revision_count": state.get("revision_count", 0) + 1,
    }

def final_output_node(state: AgentState) -> dict:
    """Node 4: Tạo final output."""
    return {
        "messages": [AIMessage(content="[System] Article finalized!")],
        "final_output": state.get("draft", ""),
    }

# ========== Step 4: Routing Logic ==========
def should_revise(state: AgentState) -> Literal["writer", "final"]:
    """Conditional edge: revise hay finalize?"""
    feedback = state.get("review_feedback", "")
    revision_count = state.get("revision_count", 0)
    
    # Max 3 revisions để tránh loop vô tận
    if revision_count >= 3:
        return "final"
    
    if "VERDICT: APPROVED" in feedback:
        return "final"
    
    return "writer"

# ========== Step 5: Build Graph ==========
workflow = StateGraph(AgentState)

# Add nodes
workflow.add_node("researcher", researcher_node)
workflow.add_node("writer", writer_node)
workflow.add_node("editor", editor_node)
workflow.add_node("final", final_output_node)

# Add edges
workflow.add_edge(START, "researcher")        # Start → Research
workflow.add_edge("researcher", "writer")     # Research → Write
workflow.add_edge("writer", "editor")         # Write → Edit

# Conditional edge: Edit → Writer (revision) or Final
workflow.add_conditional_edges(
    "editor",
    should_revise,
    {
        "writer": "writer",    # Loop back nếu cần revision
        "final": "final",      # Chuyển sang final nếu approved
    }
)
workflow.add_edge("final", END)

# Compile
app = workflow.compile()
```

### 5.4. Chạy LangGraph Workflow

```python
# Chạy workflow
result = app.invoke({
    "messages": [HumanMessage(content="Write about AI Agent trends in 2025")],
    "research_notes": "",
    "draft": "",
    "review_feedback": "",
    "revision_count": 0,
    "final_output": "",
})

print("Final article:")
print(result["final_output"])
print(f"\nRevision rounds: {result['revision_count']}")
```

### 5.5. Checkpointing & Human-in-the-Loop

```python
from langgraph.checkpoint.memory import MemorySaver

# Thêm checkpointer
checkpointer = MemorySaver()
app_with_memory = workflow.compile(
    checkpointer=checkpointer,
    interrupt_before=["editor"],  # Pause trước editor node
)

# Chạy — sẽ dừng trước editor
config = {"configurable": {"thread_id": "article-001"}}
result = app_with_memory.invoke(
    {
        "messages": [HumanMessage(content="AI Agents in Healthcare")],
        "research_notes": "",
        "draft": "",
        "review_feedback": "",
        "revision_count": 0,
        "final_output": "",
    },
    config=config,
)

# Xem state hiện tại
state = app_with_memory.get_state(config)
print(f"Next node: {state.next}")       # ('editor',)
print(f"Current draft:\n{state.values['draft'][:200]}...")

# Human review draft → quyết định tiếp tục
# User có thể modify state trước khi resume
app_with_memory.update_state(
    config,
    {"review_feedback": "Looks good, minor grammar fixes needed."},
)

# Resume execution  
final = app_with_memory.invoke(None, config=config)
print(final["final_output"])
```

> **Tip:** **Checkpointing** là killer feature của LangGraph. Nó cho phép bạn pause workflow, để human review, rồi resume — critical cho production systems nơi bạn không muốn agent tự chạy hoàn toàn tự động.

### 5.6. Visualize Graph

```python
# Vẽ graph (cần graphviz)
from IPython.display import Image, display

display(Image(app.get_graph().draw_mermaid_png()))

# Hoặc in dạng text
print(app.get_graph().draw_ascii())
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

```text
Decision Tree: Chọn Multi-Agent Framework

  Bạn cần multi-agent system?
  │
  ├── Bạn muốn start nhanh, không cần customize nhiều?
  │   └── ✅ CrewAI — đơn giản nhất, role-based metaphor
  │
  ├── Bạn cần agents chat tự do, code execution built-in?
  │   └── ✅ AutoGen — conversation-based, good for coding tasks
  │
  ├── Bạn cần control flow phức tạp, conditional routing, 
  │   human-in-the-loop, checkpointing?
  │   └── ✅ LangGraph — state machine cho complex workflows
  │
  ├── Bạn cần maximum flexibility, không muốn dependency?
  │   └── ✅ Raw code — tự build từ LLM API calls
  │
  └── Bạn đang prototype vs production?
      ├── Prototype → CrewAI (nhanh nhất)
      └── Production → LangGraph (robust nhất)
```

> **Tip:** Trong thực tế, nhiều team bắt đầu với **CrewAI** để prototype nhanh, rồi migrate sang **LangGraph** khi cần production-grade control flow. Hai thứ không exclusive — bạn có thể dùng CrewAI agent bên trong LangGraph node.

---

## 7. Agent Communication Protocols

### 7.1. Message Passing Patterns

Agents cần "nói chuyện" với nhau. Có nhiều pattern:

```text
Pattern 1: Direct Message (Point-to-Point)
  Agent A ──message──→ Agent B
  
  Simple, dùng khi chỉ 2 agents.

Pattern 2: Broadcast (One-to-Many)
  Agent A ──message──→ Agent B
           ──message──→ Agent C
           ──message──→ Agent D
  
  Manager broadcast task cho tất cả workers.

Pattern 3: Shared Blackboard
  ┌─────────────────────────┐
  │    SHARED STATE / DB     │
  │  ┌─────────────────────┐ │
  │  │ research_notes: ... │ │
  │  │ draft: ...          │ │
  │  │ review: ...         │ │
  │  └─────────────────────┘ │
  └────┬────────┬────────┬───┘
       │        │        │
    Agent A  Agent B  Agent C
    (write)  (read/   (read/
              write)   write)

  Tất cả agents đọc/ghi vào shared state.
  LangGraph dùng pattern này.

Pattern 4: Message Queue (Pub/Sub)
  Agent A ──publish──→ [Queue: "research"] ──subscribe──→ Agent B
  Agent B ──publish──→ [Queue: "draft"]    ──subscribe──→ Agent C
  
  Decoupled, scalable, production-friendly.
```

### 7.2. Structured Output cho Inter-Agent Communication

Khi agents giao tiếp, output cần **structured** để agent tiếp theo parse được:

```python
from pydantic import BaseModel, Field
from langchain_openai import ChatOpenAI
from typing import Literal

# Structured output schema cho communication giữa agents

class ResearchOutput(BaseModel):
    """Output từ Researcher → Writer."""
    topic: str = Field(description="Topic đã research")
    key_findings: list[str] = Field(description="3-5 key findings")
    statistics: list[str] = Field(description="Relevant statistics")
    sources: list[str] = Field(description="Source URLs / references")
    recommended_angle: str = Field(description="Góc tiếp cận đề xuất")

class ReviewOutput(BaseModel):
    """Output từ Editor → Writer (hoặc Final)."""
    score: int = Field(ge=1, le=10, description="Quality score 1-10")
    issues: list[str] = Field(description="Issues cần fix")
    suggestions: list[str] = Field(description="Suggestions for improvement")
    verdict: Literal["APPROVED", "NEEDS_REVISION"] = Field(
        description="Approve hoặc yêu cầu revision"
    )

# Sử dụng với LLM
llm = ChatOpenAI(model="gpt-4o")
structured_llm = llm.with_structured_output(ResearchOutput)

research_result = structured_llm.invoke(
    "Research về AI Agent frameworks phổ biến năm 2025"
)

# result là Pydantic model — dễ dàng pass cho agent tiếp theo
print(research_result.key_findings)
print(research_result.recommended_angle)
```

> **Tip:** Luôn dùng **Pydantic models** cho inter-agent communication thay vì free-form text. Nó giúp: (1) validate output, (2) auto-retry nếu format sai, (3) agent tiếp theo parse dễ dàng.

---

## 8. Orchestration Patterns

### 8.1. Supervisor Pattern

```python
from typing import Literal
from langgraph.graph import StateGraph, END, START
from langchain_openai import ChatOpenAI
from pydantic import BaseModel, Field

# Supervisor agent quyết định agent nào handle tiếp
class SupervisorDecision(BaseModel):
    """Supervisor quyết định routing."""
    next_agent: Literal["researcher", "writer", "editor", "FINISH"] = Field(
        description="Agent tiếp theo cần handle"
    )
    reason: str = Field(description="Lý do chọn agent này")

supervisor_llm = ChatOpenAI(model="gpt-4o").with_structured_output(
    SupervisorDecision
)

def supervisor_node(state: dict) -> dict:
    """Supervisor quyết định next step."""
    messages = state.get("messages", [])
    
    decision = supervisor_llm.invoke([
        SystemMessage(content="""Bạn là supervisor của team:
        - researcher: tìm kiếm thông tin
        - writer: viết content
        - editor: review và fix
        
        Dựa vào conversation history, quyết định agent nào 
        cần handle tiếp. Nếu task đã hoàn thành, chọn FINISH."""),
        *messages,
    ])
    
    return {
        "messages": [AIMessage(content=f"[Supervisor] → {decision.next_agent}: {decision.reason}")],
        "next": decision.next_agent,
    }

def route_from_supervisor(state: dict) -> str:
    """Route dựa trên supervisor's decision."""
    return state.get("next", "FINISH")
```

### 8.2. Round-Robin Pattern

```python
def round_robin_router(state: dict) -> str:
    """Round-robin: Agent A → B → C → A → B → ..."""
    agents = ["researcher", "writer", "editor"]
    current_turn = state.get("turn_count", 0)
    max_turns = state.get("max_turns", 9)  # 3 rounds
    
    if current_turn >= max_turns:
        return "final"
    
    return agents[current_turn % len(agents)]
```

### 8.3. Dynamic Routing

```python
def dynamic_router(state: dict) -> str:
    """Route dựa trên nội dung và quality metrics."""
    draft = state.get("draft", "")
    review = state.get("review_feedback", "")
    research = state.get("research_notes", "")
    
    # Chưa có research → researcher
    if not research:
        return "researcher"
    
    # Chưa có draft → writer
    if not draft:
        return "writer"
    
    # Chưa review → editor
    if not review:
        return "editor"
    
    # Review nói cần revision → writer
    if "NEEDS_REVISION" in review:
        return "writer"
    
    # Approved → done
    return "final"
```

### 8.4. Error Recovery trong Multi-Agent

```python
import logging
from typing import TypedDict

logger = logging.getLogger(__name__)

class ErrorAwareState(TypedDict):
    messages: list
    errors: list[str]
    retry_count: int
    max_retries: int

def safe_agent_node(agent_fn, agent_name: str):
    """Wrapper thêm error handling cho agent node."""
    def wrapped(state: ErrorAwareState) -> dict:
        retries = state.get("retry_count", 0)
        max_retries = state.get("max_retries", 3)
        
        try:
            result = agent_fn(state)
            # Reset retry count on success
            result["retry_count"] = 0
            return result
            
        except Exception as e:
            logger.error(f"Agent {agent_name} failed: {e}")
            
            if retries < max_retries:
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

> **Tip:** Production multi-agent systems **phải** có error handling. Các lỗi phổ biến: LLM rate limit, malformed output, infinite loop giữa agents. Luôn set `max_retries` và `max_iterations`.

---

## 9. Hands-on: Build Multi-Agent Content Creation Team

Giờ ta sẽ build một **production-ready** multi-agent system dùng LangGraph — team tạo content hoàn chỉnh.

### 9.1. Architecture Design

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

### 9.2. Full Implementation

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
    """Structured output từ Research Agent."""
    topic: str
    key_findings: list[str] = Field(min_length=3, max_length=7)
    statistics: list[str] = Field(default_factory=list)
    expert_quotes: list[str] = Field(default_factory=list)
    recommended_angle: str
    sources: list[str]

class ArticleDraft(BaseModel):
    """Structured output từ Writer Agent."""
    title: str
    introduction: str
    sections: list[dict] = Field(
        description="List of {heading: str, content: str}"
    )
    conclusion: str
    word_count: int

class ReviewResult(BaseModel):
    """Structured output từ Review Agent."""
    score: int = Field(ge=1, le=10)
    strengths: list[str]
    issues: list[str]
    suggestions: list[str]
    verdict: Literal["APPROVED", "NEEDS_REVISION"]

class SEOResult(BaseModel):
    """Structured output từ SEO Agent."""
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
    research: str        # JSON string của ResearchResult
    draft: str           # JSON string của ArticleDraft
    review: str          # JSON string của ReviewResult
    seo: str             # JSON string của SEOResult
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
    """Research Agent — tìm kiếm và phân tích thông tin."""
    topic = state["topic"]
    
    structured_llm = llm.with_structured_output(ResearchResult)
    
    result = structured_llm.invoke([
        SystemMessage(content="""Bạn là Senior Research Analyst.
        Tạo research notes chi tiết cho topic được yêu cầu.
        Focus vào: recent trends (2024-2025), statistics, expert opinions.
        Luôn include sources (có thể là tên publication + năm)."""),
        HumanMessage(content=f"Research topic: {topic}"),
    ])
    
    return {
        "messages": [AIMessage(content=f"[Research Agent] Completed research on '{topic}'")],
        "research": result.model_dump_json(),
    }

def writer_agent(state: ContentState) -> dict:
    """Writer Agent — viết article từ research notes."""
    research = state.get("research", "")
    review = state.get("review", "")
    
    prompt = f"Research data:\n{research}\n"
    if review:
        prompt += f"\nPrevious review feedback:\n{review}\nSửa theo feedback này."
    
    structured_llm = llm.with_structured_output(ArticleDraft)
    
    result = structured_llm.invoke([
        SystemMessage(content="""Bạn là Senior Content Writer (TechCrunch-style).
        Viết blog article ~800 từ, engaging, technical nhưng accessible.
        Structure: hook intro, 3-4 sections với clear headings, conclusion.
        Style: active voice, short paragraphs, real examples."""),
        HumanMessage(content=prompt),
    ])
    
    return {
        "messages": [AIMessage(content=f"[Writer Agent] Draft completed: '{result.title}' ({result.word_count} words)")],
        "draft": result.model_dump_json(),
    }

def review_agent(state: ContentState) -> dict:
    """Review Agent — đánh giá và feedback."""
    draft = state.get("draft", "")
    research = state.get("research", "")
    
    structured_llm = llm.with_structured_output(ReviewResult)
    
    result = structured_llm.invoke([
        SystemMessage(content="""Bạn là Chief Editor. Review article:
        1. Technical accuracy (cross-check với research data)
        2. Writing quality (grammar, flow, clarity)
        3. Completeness (cover tất cả key findings?)
        4. Engagement (hook reader không?)
        
        Score 1-10. APPROVED nếu >= 7, NEEDS_REVISION nếu < 7."""),
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
        SystemMessage(content="""Bạn là SEO specialist. Tối ưu article cho search:
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
    """Route sau review: revision hoặc SEO."""
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
    """Main entry point — tạo content cho topic."""
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

# Chạy
# result = create_content("AI Agents in Production: Trends & Best Practices 2025")
```

### 9.3. Chạy và Kiểm tra

```python
# Chạy pipeline
result = create_content(
    topic="Multi-Agent AI Systems: From Research to Production",
    thread_id="article-001"
)

# Check states tại mỗi checkpoint
config = {"configurable": {"thread_id": "article-001"}}
history = list(content_pipeline.get_state_history(config))

print(f"\nTotal checkpoints: {len(history)}")
for i, state in enumerate(history):
    print(f"  Checkpoint {i}: next={state.next}, "
          f"revision_count={state.values.get('revision_count', 0)}")
```

---

## 10. Tổng kết

Trong bài này ta đã đi qua toàn bộ thế giới **Multi-Agent Systems**:

**Architecture Patterns:**
- **Hierarchical**: Manager → Workers, phù hợp workflow rõ ràng
- **Collaborative**: Peer-to-peer, sáng tạo nhưng khó control
- **Competitive**: Debate/adversarial, chất lượng cao nhưng tốn kém
- **Pipeline**: Sequential handoff, đơn giản và predictable

**3 Framework chính:**

| | CrewAI | AutoGen | LangGraph |
|---|---|---|---|
| **Best for** | Quick prototype | Chat-based tasks | Production workflows |
| **Key concept** | Crew + Role | Group Chat | State Graph |
| **Flow control** | Process type | Speaker selection | Explicit edges |

**Key takeaways:**
1. **Multi-agent đáng dùng** khi task cần nhiều hơn 2 vai trò chuyên biệt
2. **Structured output** (Pydantic) — bắt buộc cho inter-agent communication
3. **Error handling** — set max retries, max iterations, timeout
4. **Checkpointing** — critical cho production (human-in-the-loop)
5. **Start simple** — CrewAI prototype → LangGraph production

---

## Bài tiếp theo

**Bài 15: Memory, Planning & Reasoning trong AI Agent** — Agent thông minh cần nhớ (Memory), lập kế hoạch (Planning), và suy luận (Reasoning). Ta sẽ implement short-term memory, long-term memory với vector store, episodic memory, task decomposition, chain-of-thought reasoning, self-reflection, và human-in-the-loop patterns.

