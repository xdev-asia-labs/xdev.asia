---
id: 019c9619-bb18-7018-c018-bb1800000018
title: 'Bài 18: AI Agents — Tool Use, Function Calling, Agentic Workflows'
slug: bai-18-ai-agents
description: >-
  Xây dựng AI Agents tự chủ: Tool Use, Function Calling với OpenAI/Claude APIs,
  ReAct agent, multi-agent systems, memory management với LangChain/LangGraph.
duration_minutes: 210
is_free: true
video_url: null
sort_order: 17
section_title: "Phần 5: Xây dựng AI Applications"
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: "AI & LLM: Từ Cơ bản đến Nâng cao"
  slug: ai-llm-tu-co-ban-den-nang-cao
---

## Tổng quan

AI Agent là LLM được trang bị **khả năng hành động** — gọi tools, tìm kiếm web, chạy code, đọc file, gọi APIs. Thay vì chỉ trả lời, agent có thể **tự hoàn thành task nhiều bước** một cách tự chủ.

---

## 1. Agent vs Chatbot

| | Chatbot | AI Agent |
|---|---|---|
| Input/Output | Text → Text | Text → Actions → Text |
| Tools | Không có | Web search, code exec, APIs... |
| Memory | Trong session | External memory, vector DB |
| Autonomy | Trả lời 1 lần | Loop cho đến khi xong task |
| Use case | Q&A, chat | Research, automation, coding |

```
Chatbot: "Hãy tìm giá iPhone 15"
→ "Tôi không có khả năng truy cập internet..."

Agent:   "Hãy tìm giá iPhone 15"
→ [search("iPhone 15 price 2024")]
→ [read_result()]
→ "iPhone 15 giá từ $799, Pro từ $999..."
```

---

## 2. Function Calling với OpenAI

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

## 3. Function Calling với Anthropic Claude

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

## 4. Memory Management

### 4.1 In-context Memory (Conversation History)

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

### 4.2 External Memory với Vector DB

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

## 5. LangGraph: Stateful Multi-Agent

LangGraph cho phép xây dựng **stateful agent workflows** với graphs:

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

## 6. Production Considerations

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

## Tổng kết

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

**Bài tiếp theo:** LLM APIs thực tế — OpenAI, Anthropic Claude, Google Gemini với streaming, vision và cost optimization.
