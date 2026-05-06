---
id: 019c9619-bb18-7018-c018-bb1800000018
title: 第 18 課：AI 代理 — 工具使用、函數呼叫、代理工作流程
slug: bai-18-ai-agents
description: >-
  建構自主人工智慧代理：工具使用、使用 OpenAI/Claude API 進行函數呼叫、ReAct 代理、多代理系統、使用
  LangChain/LangGraph 進行記憶體管理。
duration_minutes: 210
is_free: true
video_url: null
sort_order: 17
section_title: 第 5 部分：建立人工智慧應用程式
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: 人工智慧和法學碩士：從基礎到高級
  slug: ai-llm-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7005" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7005)"/>

  <!-- Decorations -->
  <g>
    <circle cx="852" cy="66" r="20" fill="#f87171" opacity="0.11"/>
    <circle cx="604" cy="78" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="856" cy="90" r="32" fill="#f87171" opacity="0.13"/>
    <circle cx="608" cy="102" r="8" fill="#f87171" opacity="0.09"/>
    <circle cx="860" cy="114" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="146" x2="1100" y2="226" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="176" x2="1050" y2="246" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1031.507041555162,175.5 1031.507041555162,216.5 996,237 960.492958444838,216.5 960.492958444838,175.5 996,155" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 人工智慧與機器學習 — 第 17 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 18 課：AI 代理 — 工具使用、功能</tspan>
      <tspan x="60" dy="42">呼叫、代理工作流程</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">人工智慧和法學碩士：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：建立人工智慧應用程式</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 概述

AI Agent 是一名配備**操作功能**的法學碩士 - 呼叫工具、搜尋網路、運行程式碼、讀取檔案、呼叫 API。代理不僅可以做出回應，還可以自主**完成多步驟任務**。

---

## 1. 代理與聊天機器人

| |聊天機器人 |人工智慧代理|
|---|---|---|
|輸入/輸出|文字→文字|文字→動作→文字|
|工具|無 |網路搜尋、程式碼執行、API... |
|記憶體|會議中 |外部記憶體，向量DB |
|自治|回覆1次 |循環直到任務 |完成
|使用案例 |問答、聊天 |研究、自動化、編碼 |

```
Chatbot: "Hãy tìm giá iPhone 15"
→ "Tôi không có khả năng truy cập internet..."

Agent:   "Hãy tìm giá iPhone 15"
→ [search("iPhone 15 price 2024")]
→ [read_result()]
→ "iPhone 15 giá từ $799, Pro từ $999..."
```

---

## 2. 使用 OpenAI 呼叫函數

```python
from openai import OpenAI
import json
import requests

client = OpenAI()

# Định nghĩa tools (JSON Schema)
tools = [
    {
        "type": "function",
        "function": {
            "name": "get_weather",
            "description": "Lấy thông tin thời tiết cho một thành phố",
            "parameters": {
                "type": "object",
                "properties": {
                    "city": {
                        "type": "string",
                        "description": "Tên thành phố, ví dụ: 'Hà Nội', 'Ho Chi Minh City'"
                    },
                    "unit": {
                        "type": "string",
                        "enum": ["celsius", "fahrenheit"],
                        "default": "celsius"
                    }
                },
                "required": ["city"]
            }
        }
    },
    {
        "type": "function",
        "function": {
            "name": "search_web",
            "description": "Tìm kiếm thông tin trên internet",
            "parameters": {
                "type": "object",
                "properties": {
                    "query": {"type": "string"}
                },
                "required": ["query"]
            }
        }
    }
]

# Tool implementations
def get_weather(city: str, unit: str = "celsius") -> dict:
    # Thực tế: gọi OpenWeatherMap API
    return {"city": city, "temp": 28, "condition": "Sunny", "unit": unit}

def search_web(query: str) -> str:
    # Thực tế: gọi SerpAPI hoặc Tavily
    return f"[Mock search results for: {query}]"

TOOL_REGISTRY = {
    "get_weather": get_weather,
    "search_web": search_web
}

def run_agent(user_message: str) -> str:
    messages = [
        {"role": "system", "content": "Bạn là assistant thông minh. Dùng tools khi cần."},
        {"role": "user", "content": user_message}
    ]

    while True:
        response = client.chat.completions.create(
            model="gpt-4o",
            messages=messages,
            tools=tools,
            tool_choice="auto"
        )
        msg = response.choices[0].message

        # Không có tool call → kết thúc
        if not msg.tool_calls:
            return msg.content

        # Thực thi tool calls
        messages.append(msg)
        for tc in msg.tool_calls:
            func_name = tc.function.name
            func_args = json.loads(tc.function.arguments)
            result = TOOL_REGISTRY[func_name](**func_args)
            messages.append({
                "role": "tool",
                "tool_call_id": tc.id,
                "content": json.dumps(result, ensure_ascii=False)
            })

# Test
print(run_agent("Thời tiết Hà Nội hôm nay thế nào?"))
print(run_agent("Tin tức AI mới nhất tuần này?"))
```

---

## 3. 使用 Anthropic Claude 呼叫函數

```python
import anthropic

client = anthropic.Anthropic()

tools = [
    {
        "name": "read_file",
        "description": "Đọc nội dung file từ hệ thống",
        "input_schema": {
            "type": "object",
            "properties": {
                "path": {"type": "string", "description": "Đường dẫn file"}
            },
            "required": ["path"]
        }
    },
    {
        "name": "run_python",
        "description": "Chạy code Python và trả về output",
        "input_schema": {
            "type": "object",
            "properties": {
                "code": {"type": "string"}
            },
            "required": ["code"]
        }
    }
]

def run_claude_agent(task: str) -> str:
    messages = [{"role": "user", "content": task}]

    while True:
        response = client.messages.create(
            model="claude-opus-4-5",
            max_tokens=4096,
            tools=tools,
            messages=messages
        )

        # No tool use → final answer
        if response.stop_reason == "end_turn":
            return response.content[0].text

        # Process tool calls
        messages.append({"role": "assistant", "content": response.content})
        tool_results = []

        for block in response.content:
            if block.type == "tool_use":
                # Execute tool
                if block.name == "run_python":
                    try:
                        exec_globals = {}
                        exec(block.input["code"], exec_globals)
                        result = str(exec_globals.get("result", "Code executed"))
                    except Exception as e:
                        result = f"Error: {e}"
                elif block.name == "read_file":
                    try:
                        with open(block.input["path"]) as f:
                            result = f.read()
                    except Exception as e:
                        result = f"Error: {e}"
                else:
                    result = "Tool not found"

                tool_results.append({
                    "type": "tool_result",
                    "tool_use_id": block.id,
                    "content": result
                })

        messages.append({"role": "user", "content": tool_results})
```

---

## 4.記憶體管理

### 4.1 脈絡記憶（對話史）

```python
class ConversationAgent:
    def __init__(self, max_history: int = 20):
        self.history = []
        self.max_history = max_history

    def chat(self, user_msg: str) -> str:
        self.history.append({"role": "user", "content": user_msg})

        # Trim history nếu quá dài
        if len(self.history) > self.max_history:
            self.history = self.history[-self.max_history:]

        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[
                {"role": "system", "content": "Bạn là assistant hữu ích."},
                *self.history
            ]
        )
        reply = response.choices[0].message.content
        self.history.append({"role": "assistant", "content": reply})
        return reply
```

### 4.2 帶有向量 DB 的外部記憶體

```python
from chromadb import Client
from openai import OpenAI
import chromadb

openai_client = OpenAI()
chroma_client = chromadb.Client()
memory_collection = chroma_client.get_or_create_collection("agent_memory")

def remember(text: str, metadata: dict = None):
    """Lưu thông tin vào long-term memory"""
    embedding = openai_client.embeddings.create(
        model="text-embedding-3-small",
        input=text
    ).data[0].embedding

    memory_collection.add(
        documents=[text],
        embeddings=[embedding],
        metadatas=[metadata or {}],
        ids=[f"mem_{hash(text)}"]
    )

def recall(query: str, n: int = 3) -> list[str]:
    """Truy xuất memory liên quan"""
    embedding = openai_client.embeddings.create(
        model="text-embedding-3-small",
        input=query
    ).data[0].embedding

    results = memory_collection.query(
        query_embeddings=[embedding],
        n_results=n
    )
    return results["documents"][0]
```

---

## 5. LangGraph：狀態多代理

LangGraph 允許使用圖表建立**有狀態代理工作流程**：

```python
from langgraph.graph import StateGraph, END
from typing import TypedDict, List

class AgentState(TypedDict):
    messages: List[dict]
    current_step: str
    results: dict

def researcher_node(state: AgentState) -> AgentState:
    """Node tìm kiếm thông tin"""
    query = state["messages"][-1]["content"]
    search_result = search_web(query)
    state["results"]["research"] = search_result
    state["current_step"] = "analyze"
    return state

def analyzer_node(state: AgentState) -> AgentState:
    """Node phân tích kết quả"""
    research = state["results"].get("research", "")
    analysis = client.chat.completions.create(
        model="gpt-4o",
        messages=[
            {"role": "user", "content": f"Phân tích: {research}"}
        ]
    ).choices[0].message.content
    state["results"]["analysis"] = analysis
    state["current_step"] = "done"
    return state

def route(state: AgentState) -> str:
    """Routing logic"""
    if state["current_step"] == "analyze":
        return "analyzer"
    return END

# Build graph
workflow = StateGraph(AgentState)
workflow.add_node("researcher", researcher_node)
workflow.add_node("analyzer", analyzer_node)
workflow.set_entry_point("researcher")
workflow.add_conditional_edges("researcher", route, {
    "analyzer": "analyzer",
    END: END
})
workflow.add_edge("analyzer", END)

app = workflow.compile()

# Run
result = app.invoke({
    "messages": [{"content": "Tìm hiểu về LLaMA 3"}],
    "current_step": "research",
    "results": {}
})
print(result["results"]["analysis"])
```

---

## 6. 生產注意事項

```python
import asyncio
from typing import Optional
import time

class ProductionAgent:
    def __init__(self, max_iterations: int = 10, timeout: int = 60):
        self.max_iterations = max_iterations
        self.timeout = timeout
        self.cost_tracker = {"input_tokens": 0, "output_tokens": 0}

    async def run(self, task: str) -> Optional[str]:
        start_time = time.time()
        iterations = 0
        messages = [{"role": "user", "content": task}]

        while iterations < self.max_iterations:
            # Timeout check
            if time.time() - start_time > self.timeout:
                return "Timeout: task took too long"

            iterations += 1

            try:
                response = client.chat.completions.create(
                    model="gpt-4o",
                    messages=messages,
                    tools=tools,
                    tool_choice="auto",
                    timeout=30  # Per-request timeout
                )
            except Exception as e:
                return f"API Error: {e}"

            # Track cost
            usage = response.usage
            self.cost_tracker["input_tokens"] += usage.prompt_tokens
            self.cost_tracker["output_tokens"] += usage.completion_tokens

            msg = response.choices[0].message
            if not msg.tool_calls:
                return msg.content

            # Process tools với error handling
            messages.append(msg)
            for tc in msg.tool_calls:
                try:
                    func_args = json.loads(tc.function.arguments)
                    result = TOOL_REGISTRY[tc.function.name](**func_args)
                except KeyError:
                    result = f"Error: tool '{tc.function.name}' not found"
                except Exception as e:
                    result = f"Tool error: {e}"

                messages.append({
                    "role": "tool",
                    "tool_call_id": tc.id,
                    "content": str(result)
                })

        return "Max iterations reached"

    def get_cost_estimate(self) -> float:
        """GPT-4o pricing (tham khảo)"""
        input_cost = self.cost_tracker["input_tokens"] / 1_000_000 * 2.50
        output_cost = self.cost_tracker["output_tokens"] / 1_000_000 * 10.00
        return input_cost + output_cost
```

---

## 總結

```
AI Agent = LLM + Tools + Memory + Loop

Thành phần:
✅ LLM (brain): reasoning, planning, response generation
✅ Tools: search, code exec, file I/O, APIs
✅ Memory: in-context (short), vector DB (long)
✅ Orchestration: ReAct loop, LangGraph, CrewAI

Production checklist:
✅ Timeout và max iterations
✅ Error handling cho tool failures
✅ Cost tracking
✅ Logging và observability (LangSmith)
✅ Human-in-the-loop cho actions nguy hiểm
```

**下一篇文章：** LLM 實用 API — OpenAI、Anthropic Claude、Google Gemini，具有串流媒體、視覺和成本優化功能。
