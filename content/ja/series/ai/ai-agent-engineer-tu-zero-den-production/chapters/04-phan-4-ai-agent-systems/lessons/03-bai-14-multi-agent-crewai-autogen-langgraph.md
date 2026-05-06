---
id: 019e0a01-bb14-7001-c001-ee1400000001
title: 'レッスン 14: マルチエージェント システム — CrewAI、AutoGen、LangGraph'
slug: bai-14-multi-agent-crewai-autogen-langgraph
description: >-
  マルチエージェント アーキテクチャ: 階層型、協調型、競合型。 CrewAI フレームワーク。 Microsoft AutoGen。 LangGraph
  ステート マシン。エージェントの通信プロトコル。オーケストレーション パターン。複雑なタスクに対応するマルチエージェント チームの構築を練習します。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 13
section_title: 'パート 4: AI エージェントとエージェントベースのシステム'
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: 'AI エージェント エンジニア: ゼロから本番環境まで'
  slug: ai-agent-engineer-tu-zero-den-production
locale: ja
---

> **どんなに優れたエージェントであっても限界があります。しかし、よく調整されたエージェント チームには、ほとんど制限がありません。** 調査レポートを作成する必要があると想像してください。エージェントは Web を検索し、エージェントはデータを分析し、エージェントは下書きを書き、エージェントはレビューと編集を行います。各エージェントは 1 つのことに特化し、明確な **プロトコル** を通じて調整されます。それが **マルチエージェント システム**です。この記事では、アーキテクチャ理論から、**CrewAI**、**Microsoft AutoGen**、**LangGraph** という 3 つの主要なフレームワークを経て、完全な **マルチエージェント コンテンツ作成チーム**を手動で構築します。

---

## 1. マルチエージェント システムとは何ですか?

＃＃＃１．１．単一エージェントからエージェント チームへ

レッスン 13 では、ツール呼び出しを備えた単一のエージェントを構築しました。単一のエージェントがすべてを処理します。これは単純なタスクにはうまく機能しますが、複雑さが増すと次のようになります。

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

＃＃＃１．２．マルチエージェントが必要になるのはどのような場合ですか?

|ケース |単一エージェント |マルチエージェント |
|---------------|:----------:|:----------:|
|簡単なQ&Aチャットボット | ✅ |やりすぎ |
|リサーチ + レポート作成 | ⚠️ 可能 | ✅ より良い |
|コードレビュー + 修正 + テスト | ❌ 複雑すぎる | ✅ |
|データ パイプライン: ETL + 分析 + 視覚化 | ❌ | ✅ |
|事実を議論/検証する (敵対的) | ❌ | ✅ |
|カスタマーサポート（簡易） | ✅ |やりすぎ |
|カスタマー サポート (ルーティング + スペシャリスト) | ⚠️ | ✅ |

> **ヒント:** 経験則 — タスクに **2 つ以上の異なる役割** (研究者、ライター、レビュー担当者...) または 3 つ以上のツール カテゴリが必要な場合は、マルチエージェントを検討してください。

＃＃＃１．３．コアコンポーネント

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

各エージェントには次の 3 つの主要コンポーネントがあります。
- **LLM**: 脳 — 言語処理モデル (エージェントごとに異なる場合があります)
- **ツール**: ハンド — エージェントが呼び出すことができる機能
- **記憶**: 短期（会話）および共有状態

---

## 2. アーキテクチャ パターン

＃＃＃２．１．階層型（マネージャー→従業員）

**マネージャー エージェント**はタスク全体を受け取り、それをサブタスクに分割し、**ワーカー エージェント**に割り当てて、結果を要約します。

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

＃＃＃２．２．コラボレーション (ピアツーピア)

エージェントはピアツーピアであり、上司なしで相互に直接通信します。

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

＃＃＃２．３．競争的（ディベート/敵対的）

多くのエージェントは**反対の意見**を持っており、より高品質な結果を求めると主張しています。

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

＃＃＃２．４．パイプライン (シーケンシャル ハンドオフ)

各エージェントが処理を終了し、出力を次のエージェントに渡します。組み立てラインと同じです。

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

## 3. CrewAI フレームワーク

＃＃＃３．１． CrewAIの概要

**CrewAI** は、「乗組員」のメタファーを中心に設計された、最も人気のあるマルチエージェント フレームワークです。中心となる概念:

|コンセプト |意味 |類推 |
|----------|-----------|----------|
| **エージェント** |役割、目標、背景を持つ「従業員」 |チームメンバー |
| **タスク** |具体的にやるべきこと | Jira のチケット |
| **ツール** |エージェントが使用できる機能 |作業工具 |
| **乗組員** |グループエージェント + タスク + プロセス |プロジェクトチーム全体 |
| **プロセス** |乗組員の実行方法 (順次/階層) |ワークフロー |

＃＃＃３．２．インストールとセットアップ

```python
# Installation
# pip install crewai crewai-tools langchain-openai

import os
os.environ["OPENAI_API_KEY"] = "sk-..."

from crewai import Agent, Task, Crew, Process
from crewai_tools import SerperDevTool, WebsiteSearchTool
```

＃＃＃３．３．エージェントの定義

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

＃＃＃３．４．タスクの定義

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

＃＃＃３．５。ランクルー

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

＃＃＃３．６．階層的なプロセス

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

> **ヒント:** `Process.sequential` 初めてでも安全な選択です。使用のみ `Process.hierarchical` 動的なタスクの割り当てが必要な場合は、マネージャーがより多くの推論を必要とするため、より多くのトークンが必要になります。

＃＃＃３．７． CrewAI 用のカスタム ツール

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

＃＃＃４．１． AutoGen の概要

**AutoGen** (Microsoft Research による) は **会話エージェント** に焦点を当てています。エージェントは、チャット グループのようにメッセージを送受信することで通信します。

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

|コンセプト |説明 |
|------|------|
| **ConversableAgent** |基本クラス — エージェントはメッセージを送受信できます。
| **アシスタントエージェント** |エージェントは LLM を使用して応答します。
| **UserProxyAgent** |ユーザーを表し、コードを実行できます。
| **グループチャット** |エージェントのグループが一緒にチャット |
| **グループチャットマネージャー** |次に話す人を調整する |

＃＃＃４．２．インストールと基本セットアップ

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

＃＃＃４．３． 2 つのエージェントによる会話

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

＃＃＃４．４．コード実行によるグループ チャット

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
        Wrap code trong ```Python ブロック。"""、
    ）

    # エージェント 3: コード実行プログラム — 実際のコードを実行します
    code_executor = CodeExecutorAgent(
        name="エグゼキューター",
        code_executor=LocalCommandLineCodeExecutor(work_dir="./coding_output"),
    ）

    #エージェント 4: レビュー担当者
    レビュアー = AssistantAgent(
        name="QA_Reviewer",
        モデル_クライアント=モデル_クライアント、
        system_message="""あなたは QA レビュー担当者です。コードの実行結果をレビューします。
        - コードは正常に実行されますか?
        - 出力は正しいですか?
        - 修正が必要なエッジケースはありますか?
        すべて問題なければ、「TASK_COMPLETE」と言います。""",
    ）

    終了 = TextMentionTermination("TASK_COMPLETE")

    # SelectorGroupChat — モデルが次に話す人を選択します
    チーム = SelectorGroupChat(
        参加者=[アーキテクト、コーダー、コード実行者、レビューアー]、
        モデル_クライアント=モデル_クライアント、
        termination_condition=終了、
        selector_prompt="""会話フローに基づいて次のエージェントを選択します:
        1. 設計がまだない場合は、建築家が最初に話す
        2.コーダーはデザインを持ってから話す
        3. Coder がコードを書き込んだ後、Executor がコードを実行する
        4. QA_Reviewer が実行結果をレビューします。
        エージェント名のみを返します。""",
    ）

    ストリーム = チーム.run_stream(
        task="CSV ファイルを分析し、統計を計算し、グラフを描画するための Python スクリプトを作成します"
    ）
    コンソール(ストリーム)を待つ

asyncio.run(coding_team())
```

> **Note:** `SelectorGroupChat` dùng LLM để quyết định speaker, linh hoạt hơn `RoundRobinGroupChat` nhưng tốn token hơn. Dùng `selector_prompt` để guide model chọn đúng thứ tự.

---

## 5. LangGraph

### 5.1. Tổng quan LangGraph

**LangGraph** (by LangChain team) approach multi-agent khác hẳn: dùng **state machine** (graph) để define workflow. Mỗi node là một agent/function, edges define flow.

```テキスト。テキスト
LangGraph アプローチ — ステートマシン:

  ┌─────┐ 研究完了 ┌─────┐
  │ │ ───────────→ │ │
  │リサーチ │ │ 執筆 │
  │ ノード │ │ ノード │
  │ │ │ │
  ━━━━┘ ━━━┬────┘
       ▲ │
       │ 改訂が必要ですか? 
       │／＼
       │ はい いいえ
       │／＼
       │ ┌─────▼───┐ ┌─────▼───┐
       │ │改訂 │ │ 最終 │
       │ │ ノード │ │ 出力 │
       │ ━━━┬────┘ ━━━━┘
       │ │
       ━━━━━━━━━━┘
            (重大な問題がある場合は調査に戻ります)

  主な違い: 
  - CrewAI/AutoGen = エージェント中心 (エージェントの意思決定フロー)
  - LangGraph = グラフ中心 (開発者がフローを定義)
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

```パイソン
# pip インストール langgraph langchain-openai

入力からインポート TypedDict、注釈付き、リテラル
langgraph.graph からのインポート StateGraph、END、START
langgraph.graph.message から add_messages をインポート
langchain_openai から ChatOpenAI をインポート
langchain_core.messages から HumanMessage、SystemMessage、AIMessage をインポート
```

### 5.3. Xây dựng Multi-Agent Workflow

```パイソン
インポート演算子
入力からインポート TypedDict、注釈付き、シーケンス、リテラル
langgraph.graph からのインポート StateGraph、END、START
langchain_openai から ChatOpenAI をインポート
langchain_core.messages から HumanMessage、SystemMessage、AIMessage、BaseMessage をインポート

# ========== ステップ 1: 状態の定義 ==========
クラス AgentState(TypedDict):
    """すべてのノード間で状態を共有します。"""
    メッセージ: 注釈付き[シーケンス[BaseMessage]、operator.add]
    研究メモ: str
    ドラフト: str
    レビューフィードバック: str
    リビジョン数: int
    最終出力: str

# ========== ステップ 2: LLM インスタンスの作成 ==========
llm = ChatOpenAI(モデル = "gpt-4o"、温度 = 0.7)

# ========== ステップ 3: ノード関数の定義 ==========
def Researcher_node(state: AgentState) -> dict:
    """ノード 1: Researcher エージェント — 検索と分析。"""
    メッセージ = 状態["メッセージ"]
    topic =messages[0].content ifmessages else "AI エージェント"
    
    応答 = llm.invoke([
        SystemMessage(content="""あなたは上級研究員です。 
        トピックを分析し、構造化された研究ノートを作成します。
        - 主な調査結果 (3 ～ 5 ポイント)
        - 統計/データ
        - 専門家の意見
        - トレンド""")、
        HumanMessage(content=f"研究トピック: {トピック}")
    ])
    
    戻り値 {
        "メッセージ": [AIMessage(content=f"[研究者] {response.content}")],
        "research_notes": 応答.コンテンツ、
    }

def Writer_node(状態: AgentState) -> dict:
    """ノード 2: ライター エージェント — 研究ノートから草稿を作成します。"""
    Research = state.get("research_notes", "")
    フィードバック = state.get("レビュー_フィードバック", "")
    
    プロンプト = f"研究ノート:\n{研究}\n"
    フィードバックの場合:
        プロンプト += f"\n改訂フィードバック:\n{フィードバック}\nフィードバックに従って修正してください。"
    
    応答 = llm.invoke([
        SystemMessage(content="""あなたはプロのコンテンツ ライターです。
        魅力的で専門的でありながら読みやすい、500 ワード以内のブログ投稿を作成します。
        内容: イントロ、3 つの主要セクション、結論。""")、
        HumanMessage(コンテンツ=プロンプト)
    ])
    
    戻り値 {
        "messages": [AIMessage(content=f"[ライター] ドラフト完了")],
        "ドラフト": 応答.コンテンツ、
    }

def editor_node(状態: AgentState) -> dict:
    """ノード 3: 編集エージェント — ドラフトをレビューします。"""
    ドラフト = state.get("ドラフト", "")
    
    応答 = llm.invoke([
        SystemMessage(content="""あなたは編集長です。記事を確認して、次の情報を提供してください:
        1. 品質スコア (1-10)
        2. 修正すべき問題 (ある場合)
        3. スコア >= 7 の場合は「承認済み」、そうでない場合は「NEEDS_REVISION」。
        
        応答は「SCORE: X/10」で始まり、次で終わります。 
        "評決: 承認済み" または "評決: 修正が必要"。""")、
        HumanMessage(content=f"このドラフトを確認してください:\n\n{ドラフト}")
    ])
    
    戻り値 {
        "メッセージ": [AIMessage(content=f"[編集者] {response.content}")],
        "review_フィードバック": 応答.コンテンツ,
        "リビジョンカウント": state.get("リビジョンカウント", 0) + 1,
    }

def Final_output_node(状態: AgentState) -> dict:
    """ノード 4: 最終出力を生成します。"""
    戻り値 {
        "messages": [AIMessage(content="[システム] 記事が完成しました!")],
        "final_output": state.get("ドラフト", ""),
    }

# ========== ステップ 4: ルーティング ロジック ==========
def should_revise(state: AgentState) -> リテラル["writer", "final"]:
    """条件付きエッジ: 修正または最終決定?"""
    フィードバック = state.get("レビュー_フィードバック", "")
    リビジョンカウント = state.get("リビジョンカウント", 0)
    
    # 無限ループを避けるため、最大 3 つのリビジョンを作成
    リビジョン数 >= 3 の場合:
        「最終」を返す
    
    フィードバックに「評決: 承認」の場合:
        「最終」を返す
    
    「ライター」を返す

# ========== ステップ 5: グラフの構築 ==========
ワークフロー = StateGraph(AgentState)

# ノードを追加する
workflow.add_node("研究者", 研究者_node)
workflow.add_node("ライター", Writer_node)
workflow.add_node("エディタ", editor_node)
workflow.add_node("最終", Final_output_node)

# エッジを追加する
workflow.add_edge(START, "researcher") # 開始 → 調査
workflow.add_edge("researcher", "writer") # リサーチ → 執筆
workflow.add_edge("writer", "editor") # 書き込み → 編集

# 条件付きエッジ: 編集 → ライター (リビジョン) または最終
workflow.add_conditional_edges(
    「編集者」、
    改訂すべきです、
    {
        "writer": "writer", # リビジョンが必要な場合はループバックします
        "final": "final", # 承認された場合は最終に切り替えます
    }
）
workflow.add_edge("最終", END)

# コンパイル
app = workflow.compile()
```

### 5.4. Chạy LangGraph Workflow

```パイソン
# ワークフローを実行する
結果 = app.invoke({
    "messages": [HumanMessage(content="2025 年の AI エージェントのトレンドについて書く")],
    "研究ノート": "",
    "ドラフト": "",
    "レビュー_フィードバック": "",
    「リビジョン数」: 0、
    "final_output": "",
})

print("最終記事:")
print(結果["最終出力"])
print(f"\nリビジョンラウンド: {result['revision_count']}")
```

### 5.5. Checkpointing & Human-in-the-Loop

```パイソン
langgraph.checkpoint.memory から MemorySaver をインポート

# チェックポイントを追加する
チェックポインタ = MemorySaver()
app_with_memory = workflow.compile(
    チェックポインタ=チェックポインタ、
    interrupt_before=["editor"], # エディター ノードの前で一時停止します
）

# 実行 — エディターの前で停止します
config = {"構成可能": {"thread_id": "article-001"}}
結果 = app_with_memory.invoke(
    {
        "メッセージ": [HumanMessage(content="ヘルスケアにおける AI エージェント")],
        "研究ノート": "",
        "ドラフト": "",
        "レビュー_フィードバック": "",
        「リビジョン数」: 0、
        "final_output": "",
    }、
    構成=構成、
）

# 現在の状態を表示する
state = app_with_memory.get_state(config)
print(f"次のノード: {state.next}") # ('エディタ',)
print(f"現在のドラフト:\n{state.values['draft'][:200]}...")

# ヒューマンレビュー草案 → 継続決定
# ユーザーは再開前に状態を変更できます
app_with_memory.update_state(
    構成、
    {"review_フィードバック": "良さそうですが、文法を少し修正する必要があります。"},
）

# 実行を再開する  
Final = app_with_memory.invoke(なし、config=config)
print(final["final_output"])
```

> **Tip:** **Checkpointing** là killer feature của LangGraph. Nó cho phép bạn pause workflow, để human review, rồi resume — critical cho production systems nơi bạn không muốn agent tự chạy hoàn toàn tự động.

### 5.6. Visualize Graph

```パイソン
# グラフを描画します (graphviz が必要)
from IPython.display import 画像、表示

display(Image(app.get_graph().draw_mermaid_png()))

# またはテキストとして出力
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

```テキスト。テキスト
デシジョン ツリー: マルチエージェント フレームワークの選択

  マルチエージェント システムが必要ですか?
  │
  §── あまりカスタマイズせずにすぐに始めたいですか？
  │ └─ ✅ CrewAI — 最も単純な役割ベースのメタファー
  │
  §── 無料のチャット エージェント、組み込みの実行コードが必要ですか?
  │ └─ ✅ AutoGen — 会話ベース、コーディングタスクに適しています
  │
  §── 複雑なフロー制御、条件付きルーティング、 
  │ 人間参加型、チェックポイント設定?
  │ └─ ✅ LangGraph — 複雑なワークフローのためのステートマシン
  │
  §── 最大限の柔軟性が必要ですが、依存性は望ましくありませんか?
  │ └─ ✅ 生のコード — LLM API 呼び出しからセルフビルド
  │
  └── プロトタイピングとプロダクションのどちらを行っていますか？
      §── プロトタイプ → CrewAI（最速）
      ━━ Production → LangGraph (最も堅牢)
```

> **Tip:** Trong thực tế, nhiều team bắt đầu với **CrewAI** để prototype nhanh, rồi migrate sang **LangGraph** khi cần production-grade control flow. Hai thứ không exclusive — bạn có thể dùng CrewAI agent bên trong LangGraph node.

---

## 7. Agent Communication Protocols

### 7.1. Message Passing Patterns

Agents cần "nói chuyện" với nhau. Có nhiều pattern:

```文章。テキスト
パターン1：ダイレクトメッセージ（Point-to-Point）
  エージェントA ──メッセージ──→ エージェントB
  
  シンプルで、エージェントが 2 人だけの場合に使用されます。

パターン 2: ブロードキャスト (1 対多)
  エージェントA ──メッセージ──→ エージェントB
           ──メッセージ──→ エージェントC
           ──メッセージ──→ エージェントD
  
  マネージャーはタスクをすべてのワーカーにブロードキャストします。

パターン 3: 共有黒板
  ┌───────────────┐
  │ 共有ステート / DB │
  │ ┌─────────────┐ │
  │ │ 研究メモ: ... │ │
  │ │ 草案: ... │ │
  │ │ レビュー: ... │ │
  │ ━━━━━━━━━━━┘ │
  ━───┬───┬───┬───┘
       │ │ │
    エージェント A エージェント B エージェント C
    (書き込み) (読み取り/ (読み取り/
              書く）書く）

  すべてのエージェントは共有状態に対して読み取り/書き込みを行います。
  LangGraph はこのパターンを使用します。

パターン 4: メッセージ キュー (Pub/Sub)
  エージェント A ──公開──→ [キュー: "リサーチ"] ──購読──→ エージェント B
  エージェント B ──公開──→ [キュー: "ドラフト"] ──購読──→ エージェント C
  
  分離されており、スケーラブルで、実稼働に適しています。
```

### 7.2. Structured Output cho Inter-Agent Communication

Khi agents giao tiếp, output cần **structured** để agent tiếp theo parse được:

```パイソン
pydantic import BaseModel、Field から
langchain_openai から ChatOpenAI をインポート
import リテラルの入力から

# エージェント間の通信のための構造化された出力スキーマ

クラス ResearchOutput(BaseModel):
    """研究者→ライターからのアウトプット。"""
    topic: str = Field(description="トピックが調査されました")
    key_findings: list[str] = フィールド(description="3-5 の主要な調査結果")
    統計: list[str] = フィールド(説明="関連統計")
    ソース: list[str] = Field(description="ソース URL / 参照")
    recommend_angle: str = Field(description="推奨アプローチ角度")

クラスReviewOutput(BaseModel):
    """エディタ→ライター(または最終)からの出力。"""
    スコア: int = フィールド(ge=1, le=10, description="品質スコア 1-10")
    問題: list[str] = Field(description="問題は修正が必要です")
    提案: list[str] = Field(description="改善の提案")
    評決: Literal["APPROVED", "NEEDS_REVISION"] = Field(
        description="承認または改訂のリクエスト"
    ）

# LLM と併用する
llm = ChatOpenAI(model="gpt-4o")
Structured_llm = llm.with_ Structured_output(ResearchOutput)

Research_result = Structured_llm.invoke(
    「2025年に流行するAIエージェントフレームワークに関する調査」
）

# 結果は Pydantic モデル — 次のエージェントに簡単に渡されます
print(research_result.key_findings)
print(調査結果.推奨角度)
```

> **Tip:** Luôn dùng **Pydantic models** cho inter-agent communication thay vì free-form text. Nó giúp: (1) validate output, (2) auto-retry nếu format sai, (3) agent tiếp theo parse dễ dàng.

---

## 8. Orchestration Patterns

### 8.1. Supervisor Pattern

```パイソン
import リテラルの入力から
langgraph.graph からのインポート StateGraph、END、START
langchain_openai から ChatOpenAI をインポート
pydantic import BaseModel、Field から

# スーパーバイザー エージェントが次にどのエージェントを処理するかを決定します
クラス SupervisorDecision(BaseModel):
    """スーパーバイザーがルーティングを決定します。"""
    next_agent: Literal["研究者", "ライター", "編集者", "FINISH"] = フィールド(
        description="次に処理するエージェント"
    ）
    reason: str = Field(description="このエージェントを選択した理由")

visor_llm = ChatOpenAI(model="gpt-4o").with_structed_output(
    監督者の決定
）

def supervisor_node(state: dict) -> dict:
    """監督者が次のステップを決定します。"""
    メッセージ = state.get("メッセージ", [])
    
    決定 =visor_llm.invoke([
        SystemMessage(content="""あなたはチームのスーパーバイザーです:
        - 研究者: 情報を検索します
        - ライター: コンテンツを書き込みます
        - エディター: レビューと修正
        
        会話履歴に基づいてエージェントを決定 
        さらに処理が必要です。タスクが完了した場合は、「完了」を選択します。""")、
        *メッセージ、
    ])
    
    戻り値 {
        "メッセージ": [AIMessage(content=f"[スーパーバイザー] → {決定.次のエージェント}: {決定.理由}")],
        "次": 決定.next_agent,
    }

def Route_from_supervisor(state: dict) -> str:
    """上司の決定に基づくルート。"""
    return state.get("次", "FINISH")
```

### 8.2. Round-Robin Pattern

```パイソン
def Round_robin_router(state: dict) -> str:
    """ラウンドロビン: エージェント A → B → C → A → B → ..."""
    エージェント = [「研究者」、「ライター」、「編集者」]
    current_turn = state.get("turn_count", 0)
    max_turns = state.get("max_turns", 9) # 3 ラウンド
    
    current_turn >= max_turns の場合:
        「最終」を返す
    
    エージェントを返す[current_turn % len(エージェント)]
```

### 8.3. Dynamic Routing

```パイソン
def Dynamic_router(state: dict) -> str:
    """コンテンツと品質指標に基づいてルーティングします。"""
    ドラフト = state.get("ドラフト", "")
    review = state.get("review_フィードバック", "")
    Research = state.get("research_notes", "")
    
    # まだ研究はありません → 研究者
    研究しない場合:
        「研究者」を返す
    
    # まだ下書きはありません → ライター
    ドラフトされていない場合:
        「ライター」を返す
    
    # まだレビューされていません → 編集者
    レビューされていない場合:
        「エディタ」を返す
    
    # レビューで修正が必要と言われました → ライター
    「NEEDS_REVISION」がレビューされている場合:
        「ライター」を返す
    
    # 承認→完了
    「最終」を返す
```

### 8.4. Error Recovery trong Multi-Agent

```パイソン
インポートログ
入力から import TypedDict

ロガー =logging.getLogger(__name__)

クラス ErrorAwareState(TypedDict):
    メッセージ: リスト
    エラー: リスト[str]
    再試行回数: 整数
    max_retries: int

defsafe_agent_node(agent_fn、agent_name: str):
    """ラッパーはエージェント ノードにエラー処理を追加します。"""
    def ラップ(状態: ErrorAwareState) -> dict:
        再試行 = state.get("再試行回数", 0)
        max_retries = state.get("max_retries", 3)
        
        試してみてください:
            結果 = エージェント_fn(状態)
            # 成功時に再試行回数をリセット
            結果["再試行回数"] = 0
            結果を返す
            
        e としての例外を除く:
            logger.error(f"エージェント {agent_name} が失敗しました: {e}")
            
            再試行した場合 < max_retries:
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

> **ヒント:** 運用マルチエージェント システムにはエラー処理が必要です**。一般的なエラー: LLM レート制限、不正な形式の出力、エージェント間の無限ループ。常に設定する `max_retries` そして `max_iterations`。

---

## 9. ハンズオン: マルチエージェントのコンテンツ作成チームを構築する

次に、完全なコンテンツ作成チームである LangGraph を使用して、**本番環境に対応した** マルチエージェント システムを構築します。

＃＃＃９．１．建築設計

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

＃＃＃９．２．完全な実装

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
"""Research Agent からの構造化された出力。"""
    topic: str
    key_findings: list[str] = Field(min_length=3, max_length=7)
    statistics: list[str] = Field(default_factory=list)
    expert_quotes: list[str] = Field(default_factory=list)
    recommended_angle: str
    sources: list[str]

class ArticleDraft(BaseModel):
"""Writer Agent からの構造化された出力。"""
    title: str
    introduction: str
    sections: list[dict] = Field(
        description="List of {heading: str, content: str}"
    )
    conclusion: str
    word_count: int

class ReviewResult(BaseModel):
"""レビュー エージェントからの構造化された出力。"""
    score: int = Field(ge=1, le=10)
    strengths: list[str]
    issues: list[str]
    suggestions: list[str]
    verdict: Literal["APPROVED", "NEEDS_REVISION"]

class SEOResult(BaseModel):
"""SEO エージェントからの構造化された出力。"""
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
Research: str # ResearchResult の JSON 文字列
draft: str # ArticleDraft の JSON 文字列
review: str # ReviewResult の JSON 文字列
seo: str # SEOResult の JSON 文字列
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
"""リサーチエージェント - 情報の検索と分析。"""
    topic = state["topic"]
    
    structured_llm = llm.with_structured_output(ResearchResult)
    
    result = structured_llm.invoke([
SystemMessage(content="""あなたは上級リサーチ アナリストです。
要求されたトピックについて詳細な研究ノートを作成します。
最近の傾向 (2024 ～ 2025 年)、統計、専門家の意見に焦点を当てます。
常に出典を含めてください (出版物名 + 年も可)。""")、
        HumanMessage(content=f"Research topic: {topic}"),
    ])
    
    return {
        "messages": [AIMessage(content=f"[Research Agent] Completed research on '{topic}'")],
        "research": result.model_dump_json(),
    }

def writer_agent(state: ContentState) -> dict:
"""ライターエージェント — 研究ノートから記事を執筆します。"""
    research = state.get("research", "")
    review = state.get("review", "")
    
    prompt = f"Research data:\n{research}\n"
    if review:
プロンプト += f"\n前のレビューのフィードバック:\n{レビュー}\nこのフィードバックに従って編集してください。"
    
    structured_llm = llm.with_structured_output(ArticleDraft)
    
    result = structured_llm.invoke([
SystemMessage(content="""あなたはシニア コンテンツ ライター (TechCrunch スタイル) です。
魅力的で専門的だがわかりやすいブログ記事を 800 ワード以内で書きます。
構造: フックのイントロ、明確な見出しのある 3 ～ 4 つのセクション、結論。
        Style: active voice, short paragraphs, real examples."""),
        HumanMessage(content=prompt),
    ])
    
    return {
        "messages": [AIMessage(content=f"[Writer Agent] Draft completed: '{result.title}' ({result.word_count} words)")],
        "draft": result.model_dump_json(),
    }

def review_agent(state: ContentState) -> dict:
"""レビュー エージェント — レビューとフィードバック。"""
    draft = state.get("draft", "")
    research = state.get("research", "")
    
    structured_llm = llm.with_structured_output(ReviewResult)
    
    result = structured_llm.invoke([
SystemMessage(content="""あなたは編集長です。レビュー記事:
1. 技術的精度（研究データとの照合）
        2. Writing quality (grammar, flow, clarity)
3. 完全性 (主要な調査結果をすべて網羅しているか?)
4. エンゲージメント (フックリーダー?)
        
スコアは1-10。 >= 7 の場合は承認、< 7 の場合は NEEDS_REVISION。""")、
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
SystemMessage(content="""あなたは SEO スペシャリストです。記事を検索用に最適化します。
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
"""レビュー後のルート: 改訂または SEO。"""
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
"""メイン エントリ ポイント — トピックのコンテンツを作成します。"""
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

＃ 走る
# result = create_content("AI Agents in Production: Trends & Best Practices 2025")
```

＃＃＃９．３．実行とテスト

```python
# パイプラインを実行する
result = create_content(
    topic="Multi-Agent AI Systems: From Research to Production",
    thread_id="article-001"
)

# 各チェックポイントで状態を確認する
config = {"configurable": {"thread_id": "article-001"}}
history = list(content_pipeline.get_state_history(config))

print(f"\nTotal checkpoints: {len(history)}")
for i, state in enumerate(history):
    print(f"  Checkpoint {i}: next={state.next}, "
          f"revision_count={state.values.get('revision_count', 0)}")
```

---

## 10. まとめ

この記事では、**マルチエージェント システム** の世界全体について説明しました。

**アーキテクチャ パターン:**
- **階層**: マネージャー → 従業員、明確なワークフローとの一貫性
- **共同作業**: ピアツーピア、創造的だが制御が難しい
- **競争力**: 議論/敵対、高品質だが高価
- **パイプライン**: シンプルで予測可能なシーケンシャルハンドオフ

**3 つの主要なフレームワーク:**

| |クルーAI |自動生成 |ランググラフ |
|---|---|---|---|
| **こんな用途に最適** |クイックプロトタイピング |チャットベースのタスク |制作ワークフロー |
| **主要なコンセプト** |スタッフ + 役割 |グループチャット |状態グラフ |
| **フロー制御** |プロセスの種類 |スピーカーの選択 |明示的なエッジ |

**重要なポイント:**
1. **マルチエージェントは、タスクに 3 つ以上の専門的な役割が必要な場合に使用する価値があります**
2. **構造化された出力** (Pydantic) — エージェント間の通信に必要
3. **エラー処理** — 最大再試行数、最大反復数、タイムアウトを設定します。
4. **チェックポイント** — 実稼働環境に不可欠 (人間参加型)
5. **簡単に始めましょう** — CrewAI プロトタイプ → LangGraph 本番

---

## 次の記事

**レッスン 15: AI エージェントの記憶、計画、推論** — 賢いエージェントは、記憶 (記憶)、計画 (計画)、および推論 (推論) を行う必要があります。短期記憶、ベクトル ストアによる長期記憶、エピソード記憶、タスク分解、思考連鎖推論、内省、人間参加型パターンを実装します。

