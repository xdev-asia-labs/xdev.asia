---
id: 019e0a01-bb13-7001-c001-ee1300000001
title: "Bài 13: Tool Calling, Function Calling & ReAct Pattern"
slug: bai-13-tool-calling-function-calling-react
description: >-
  Function calling API (OpenAI, Anthropic). Tool definition, schema design. ReAct pattern implementation. Tool selection, error handling, retry logic. Custom tools: web search, database query, API calls, code execution. Thực hành xây Agent với tool calling.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 12
section_title: "Phần 4: AI Agent & Agent-based Systems"
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: "AI Agent Engineer: Từ Zero đến Production"
  slug: ai-agent-engineer-tu-zero-den-production
---

> **LLM không có tay. Tool calling chính là đôi tay đó.** Một LLM thuần túy chỉ biết generate text — nó không thể search Google, query database, hay gọi API. Nhưng khi bạn trang bị **Function Calling** (hay **Tool Use**), LLM đột nhiên có thể tương tác với thế giới thực: tra cứu thông tin real-time, thao tác dữ liệu, chạy code, gửi email. Đây chính là bước nhảy vọt từ **chatbot** sang **agent**. Bài này ta sẽ đi sâu vào mọi khía cạnh: Function Calling API của OpenAI và Anthropic, cách design tool schema hiệu quả, implement **ReAct pattern** từ đầu, build bộ custom tools production-ready, và cuối cùng là ghép tất cả lại thành một **Research Agent** hoàn chỉnh.

---

## 1. Function Calling là gì?

### 1.1. Evolution: Từ Text Completion đến Tool Use

Sự phát triển của LLM interaction qua các giai đoạn:

```text
Evolution of LLM Capabilities:

  2020-2022          2023 Early         2023 Mid            2024+
  ─────────          ──────────         ────────            ─────
  Text In →          Text In →          Text In →           Text In →
  Text Out           Structured Out     Function Call Out    Multi-Tool
                                                             Parallel Call
  ┌──────┐          ┌──────────┐       ┌──────────────┐    ┌──────────────┐
  │ GPT-3│          │ GPT-3.5  │       │ GPT-3.5/4    │    │ GPT-4o/      │
  │      │          │ + JSON   │       │ + Functions  │    │ Claude 3.5   │
  │"Tell │          │ mode     │       │              │    │ + Parallel   │
  │ me..."│         │          │       │ Can call     │    │   tool calls │
  │      │          │ Returns  │       │ your APIs!   │    │ + Streaming  │
  │ Free │          │ valid    │       │              │    │ + Any combo  │
  │ text │          │ JSON     │       │ Structured   │    │   of tools   │
  └──────┘          └──────────┘       │ tool call    │    └──────────────┘
                                       └──────────────┘

  Limitation:        Better but:        Game changer:       Full autonomy:
  No structure,      Still just text,   LLM can trigger     Multiple tools
  hallucinations     no actions         external actions     in one turn
```

### 1.2. Function Calling vs Tool Calling

Hai thuật ngữ này thường dùng thay thế nhau, nhưng có sự khác biệt nhỏ:

| Aspect | Function Calling | Tool Calling |
|--------|-----------------|-------------|
| **Thuật ngữ gốc** | OpenAI (June 2023) | OpenAI rename (Nov 2023) |
| **Scope** | Gọi 1 function | Gọi nhiều tools (functions + code_interpreter + retrieval) |
| **API field** | `functions` (deprecated) | `tools` (current) |
| **Parallel** | Không | Có (multiple tool calls per turn) |
| **Providers** | OpenAI original | OpenAI, Anthropic, Google, Mistral, ... |

> **Note:** Trong bài này, ta dùng "Tool Calling" và "Function Calling" thay thế nhau. Khi nói cụ thể về API, sẽ dùng đúng tên parameter của provider đó.

### 1.3. Cơ chế hoạt động

```text
How Tool Calling Works (high-level):

  ┌──────┐    1. Request + Tool Definitions    ┌──────────┐
  │      │ ──────────────────────────────────→ │          │
  │      │                                     │   LLM    │
  │      │    2. Response: tool_call(name,args) │          │
  │ Your │ ←────────────────────────────────── │ (GPT-4o/ │
  │ Code │                                     │  Claude) │
  │      │    3. Execute tool, send result      │          │
  │      │ ──────────────────────────────────→ │          │
  │      │                                     │          │
  │      │    4. Final response with answer     │          │
  │      │ ←────────────────────────────────── │          │
  └──────┘                                     └──────────┘

  Key Insight: LLM KHÔNG thực sự chạy function.
  Nó chỉ OUTPUT tên function + arguments (JSON).
  YOUR CODE chịu trách nhiệm execute function đó.
```

> **Warning:** LLM không execute bất kỳ code nào. Nó chỉ generate một JSON object chỉ định "tôi muốn gọi function X với arguments Y". Code của bạn parse JSON đó, chạy function, rồi gửi kết quả lại cho LLM. Đây là điểm security quan trọng — bạn luôn control execution.

---

## 2. OpenAI Function Calling API

### 2.1. Tool Definition Schema

OpenAI sử dụng **JSON Schema** để define tools. Mỗi tool gồm: `name`, `description`, `parameters`.

```python
# Tool definition — OpenAI format
weather_tool = {
    "type": "function",
    "function": {
        "name": "get_weather",
        "description": (
            "Get current weather for a specific location. "
            "Returns temperature, humidity, and conditions. "
            "Use this when user asks about weather, temperature, "
            "or outdoor conditions for any city."
        ),
        "parameters": {
            "type": "object",
            "properties": {
                "location": {
                    "type": "string",
                    "description": "City name, e.g. 'Ho Chi Minh City' or 'Tokyo, Japan'"
                },
                "unit": {
                    "type": "string",
                    "enum": ["celsius", "fahrenheit"],
                    "description": "Temperature unit. Default: celsius"
                }
            },
            "required": ["location"]
        }
    }
}
```

> **Tip:** `description` là yếu tố **quan trọng nhất** trong tool definition. LLM dựa vào description để quyết định có gọi tool này không và khi nào gọi. Viết description tốt = agent hoạt động chính xác hơn. Ta sẽ deep dive ở phần 4.

### 2.2. Complete Example: Tool Calling Flow

```python
from openai import OpenAI
import json

client = OpenAI()  # OPENAI_API_KEY from env

# ── Step 1: Define tools ──
tools = [
    {
        "type": "function",
        "function": {
            "name": "get_weather",
            "description": "Get current weather for a city. Use when user asks about weather.",
            "parameters": {
                "type": "object",
                "properties": {
                    "location": {
                        "type": "string",
                        "description": "City name, e.g. 'Hanoi'"
                    },
                    "unit": {
                        "type": "string",
                        "enum": ["celsius", "fahrenheit"],
                        "description": "Temperature unit"
                    }
                },
                "required": ["location"]
            }
        }
    },
    {
        "type": "function",
        "function": {
            "name": "search_restaurants",
            "description": "Search for restaurants in a city. Use when user asks for food recommendations.",
            "parameters": {
                "type": "object",
                "properties": {
                    "city": {"type": "string", "description": "City to search in"},
                    "cuisine": {"type": "string", "description": "Type of cuisine, e.g. 'Vietnamese', 'Italian'"},
                    "price_range": {
                        "type": "string",
                        "enum": ["budget", "mid", "high"],
                        "description": "Price range filter"
                    }
                },
                "required": ["city"]
            }
        }
    }
]

# ── Step 2: Tool implementations ──
def get_weather(location: str, unit: str = "celsius") -> dict:
    """Simulated weather API call."""
    # In production: call real weather API (OpenWeatherMap, etc.)
    weather_data = {
        "Hanoi": {"temp": 32, "humidity": 78, "condition": "Partly cloudy"},
        "Ho Chi Minh City": {"temp": 35, "humidity": 82, "condition": "Thunderstorm"},
    }
    data = weather_data.get(location, {"temp": 25, "humidity": 60, "condition": "Clear"})
    if unit == "fahrenheit":
        data["temp"] = data["temp"] * 9/5 + 32
    data["unit"] = unit
    data["location"] = location
    return data

def search_restaurants(city: str, cuisine: str = None, price_range: str = None) -> list:
    """Simulated restaurant search."""
    return [
        {"name": "Pho Thin", "cuisine": "Vietnamese", "rating": 4.5, "price": "budget"},
        {"name": "Pizza 4P's", "cuisine": "Italian-Japanese", "rating": 4.7, "price": "mid"},
    ]

# Map function names to implementations
TOOL_FUNCTIONS = {
    "get_weather": get_weather,
    "search_restaurants": search_restaurants,
}

# ── Step 3: Agent loop with tool calling ──
def run_agent(user_message: str) -> str:
    """Run a complete tool-calling agent loop."""
    messages = [
        {"role": "system", "content": "You are a helpful travel assistant for Vietnam."},
        {"role": "user", "content": user_message}
    ]
    
    while True:
        # Call LLM
        response = client.chat.completions.create(
            model="gpt-4o",
            messages=messages,
            tools=tools,
            tool_choice="auto",  # LLM decides whether to call tools
        )
        
        message = response.choices[0].message
        messages.append(message)  # Add assistant message to history
        
        # Check if LLM wants to call tools
        if not message.tool_calls:
            # No tool calls — LLM is done, return final answer
            return message.content
        
        # Execute each tool call
        for tool_call in message.tool_calls:
            func_name = tool_call.function.name
            func_args = json.loads(tool_call.function.arguments)
            
            print(f"  🔧 Calling: {func_name}({func_args})")
            
            # Execute the function
            func = TOOL_FUNCTIONS.get(func_name)
            if func:
                result = func(**func_args)
            else:
                result = {"error": f"Unknown function: {func_name}"}
            
            # Send result back to LLM
            messages.append({
                "role": "tool",
                "tool_call_id": tool_call.id,
                "content": json.dumps(result, ensure_ascii=False)
            })
        
        # Loop continues — LLM will process tool results

# ── Run it ──
answer = run_agent("Thời tiết Hà Nội hôm nay thế nào? Gợi ý nhà hàng ngon nhé!")
print(answer)
```

### 2.3. Parallel Function Calling

Từ GPT-4o trở đi, LLM có thể gọi **nhiều tools cùng lúc** trong 1 turn:

```text
Parallel Tool Calling:

  User: "So sánh thời tiết Hà Nội và Sài Gòn, gợi ý nhà hàng ở cả 2 nơi"

  LLM Response (1 turn, 4 tool calls):
  ┌─────────────────────────────────────────────────┐
  │  tool_calls: [                                   │
  │    { name: "get_weather", args: {loc: "Hanoi"} },│
  │    { name: "get_weather", args: {loc: "HCMC"} }, │
  │    { name: "search_restaurants", args: {city: "Hanoi"} },│
  │    { name: "search_restaurants", args: {city: "HCMC"} }, │
  │  ]                                               │
  └─────────────────────────────────────────────────┘

  → Execute all 4 in parallel → Send all results back → 1 final answer

  Benefit: 1 LLM round-trip thay vì 4. Giảm latency đáng kể.
```

### 2.4. `tool_choice` Parameter

| Value | Behavior | Use case |
|-------|----------|----------|
| `"auto"` | LLM tự quyết định có gọi tool không | Default, phổ biến nhất |
| `"required"` | LLM **phải** gọi ít nhất 1 tool | Khi bạn biết chắc cần tool |
| `"none"` | LLM **không được** gọi tool | Force text-only response |
| `{"type": "function", "function": {"name": "get_weather"}}` | Buộc gọi đúng tool này | Force specific tool |

```python
# Force LLM to call a specific tool
response = client.chat.completions.create(
    model="gpt-4o",
    messages=messages,
    tools=tools,
    tool_choice={
        "type": "function",
        "function": {"name": "get_weather"}
    }
)
```

---

## 3. Anthropic Tool Use API

### 3.1. Tool Definition Format

Anthropic (Claude) sử dụng format tương tự nhưng có một số khác biệt:

```python
import anthropic

client = anthropic.Anthropic()  # ANTHROPIC_API_KEY from env

# ── Anthropic tool definition ──
tools = [
    {
        "name": "get_weather",
        "description": "Get current weather for a city.",
        "input_schema": {             # Anthropic dùng "input_schema" 
            "type": "object",         # thay vì "parameters"
            "properties": {
                "location": {
                    "type": "string",
                    "description": "City name"
                },
                "unit": {
                    "type": "string",
                    "enum": ["celsius", "fahrenheit"],
                    "description": "Temperature unit"
                }
            },
            "required": ["location"]
        }
    }
]

# ── Call Claude with tools ──
response = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    tools=tools,
    messages=[
        {"role": "user", "content": "What's the weather in Hanoi?"}
    ]
)

# ── Process response ──
for block in response.content:
    if block.type == "tool_use":
        # Claude wants to call a tool
        print(f"Tool: {block.name}")
        print(f"Args: {block.input}")   # Anthropic dùng "input" thay vì "arguments"
        print(f"ID:   {block.id}")
    elif block.type == "text":
        print(f"Text: {block.text}")
```

### 3.2. Anthropic Tool Calling Flow

```python
def run_claude_agent(user_message: str) -> str:
    """Complete tool-calling loop with Claude."""
    messages = [{"role": "user", "content": user_message}]
    
    while True:
        response = client.messages.create(
            model="claude-sonnet-4-20250514",
            max_tokens=4096,
            tools=tools,
            messages=messages,
        )
        
        # Check stop reason
        if response.stop_reason == "end_turn":
            # Claude is done — extract text
            return "".join(
                block.text for block in response.content 
                if block.type == "text"
            )
        
        if response.stop_reason == "tool_use":
            # Claude wants to use tools
            tool_results = []
            
            for block in response.content:
                if block.type == "tool_use":
                    # Execute tool
                    func = TOOL_FUNCTIONS.get(block.name)
                    result = func(**block.input) if func else {"error": "Unknown tool"}
                    
                    tool_results.append({
                        "type": "tool_result",
                        "tool_use_id": block.id,
                        "content": json.dumps(result, ensure_ascii=False)
                    })
            
            # Add assistant response + tool results to conversation  
            messages.append({"role": "assistant", "content": response.content})
            messages.append({"role": "user", "content": tool_results})
            # Note: Anthropic đặt tool_result trong role "user"
```

### 3.3. So sánh OpenAI vs Anthropic Tool Calling

| Feature | OpenAI (GPT-4o) | Anthropic (Claude 3.5+) |
|---------|-----------------|------------------------|
| **Tool definition key** | `parameters` | `input_schema` |
| **Response field** | `tool_calls[].function.arguments` (JSON string) | `content[].input` (dict) |
| **Tool result role** | `role: "tool"` | `role: "user"` + `type: "tool_result"` |
| **Tool call ID** | `tool_call.id` | `block.id` |
| **Parallel calling** | Có (native) | Có (từ Claude 3.5) |
| **Forced tool** | `tool_choice: {type, function}` | `tool_choice: {type: "tool", name: "..."}` |
| **Streaming** | Có (delta chunks) | Có (event stream) |
| **Stop reason** | `finish_reason: "tool_calls"` | `stop_reason: "tool_use"` |
| **Nested objects** | Hỗ trợ tốt | Hỗ trợ tốt |
| **Max tools** | 128 | 128 (Claude 3.5) |

> **Tip:** Khi build agent support nhiều LLM providers, tạo một abstraction layer để normalize tool calling format. Sẽ cover ở bài 14 (LangChain/LlamaIndex).

---

## 4. Tool Definition Best Practices

### 4.1. Description Engineering

**Tool description** là yếu tố quyết định LLM có chọn đúng tool không. Giống như prompt engineering, **description engineering** là kỹ năng quan trọng.

```python
# ❌ BAD: Mơ hồ, thiếu context
bad_tool = {
    "name": "search",
    "description": "Search for stuff",    # LLM không biết search cái gì
    "input_schema": {
        "type": "object",
        "properties": {
            "q": {"type": "string"}       # Parameter name quá ngắn
        }
    }
}

# ✅ GOOD: Rõ ràng, có examples, có khi-nào-dùng
good_tool = {
    "name": "search_product_catalog",
    "description": (
        "Search the e-commerce product catalog by keyword, category, or SKU. "
        "Returns product name, price, availability, and image URL. "
        "Use this when user asks about products, prices, stock availability, "
        "or wants to find specific items. "
        "Examples: 'laptop under $1000', 'Nike Air Max size 42', 'SKU-12345'."
    ),
    "input_schema": {
        "type": "object",
        "properties": {
            "query": {
                "type": "string",
                "description": "Search keyword or phrase. Can be product name, category, or SKU."
            },
            "category": {
                "type": "string",
                "enum": ["electronics", "fashion", "home", "sports", "books"],
                "description": "Filter by product category. Optional."
            },
            "max_price": {
                "type": "number",
                "description": "Maximum price in USD. Optional."
            },
            "in_stock_only": {
                "type": "boolean",
                "description": "If true, only return items currently in stock. Default: true."
            }
        },
        "required": ["query"]
    }
}
```

### 4.2. Description Engineering Checklist

| Element | Mô tả | Ví dụ |
|---------|--------|-------|
| **What it does** | Mô tả chức năng chính | "Search the product catalog" |
| **What it returns** | Mô tả output format | "Returns name, price, availability" |
| **When to use** | Khi nào LLM nên gọi tool này | "Use when user asks about products" |
| **When NOT to use** | Khi nào không nên gọi | "Don't use for order tracking" |
| **Examples** | Ví dụ input cụ thể | "'laptop under $1000', 'Nike size 42'" |
| **Limitations** | Giới hạn | "Max 50 results per query" |

### 4.3. Parameter Validation với Pydantic

Dùng **Pydantic** để validate tool arguments trước khi execute:

```python
from pydantic import BaseModel, Field, field_validator
from typing import Optional, Literal
from enum import Enum
import json

# ── Define tool input models ──
class WeatherInput(BaseModel):
    """Input schema for weather tool."""
    location: str = Field(
        ..., 
        description="City name, e.g. 'Hanoi' or 'Tokyo, Japan'",
        min_length=1,
        max_length=100
    )
    unit: Literal["celsius", "fahrenheit"] = Field(
        default="celsius",
        description="Temperature unit"
    )
    
    @field_validator("location")
    @classmethod
    def validate_location(cls, v: str) -> str:
        # Sanitize input — prevent injection
        if any(char in v for char in [";", "'", '"', "\\", "--"]):
            raise ValueError("Invalid characters in location")
        return v.strip()

class SearchInput(BaseModel):
    """Input schema for product search tool."""
    query: str = Field(..., min_length=1, max_length=200)
    category: Optional[str] = Field(default=None)
    max_price: Optional[float] = Field(default=None, ge=0, le=100000)
    in_stock_only: bool = Field(default=True)

# ── Auto-generate JSON Schema from Pydantic ──
def pydantic_to_openai_tool(name: str, description: str, model: type[BaseModel]) -> dict:
    """Convert Pydantic model to OpenAI tool definition."""
    schema = model.model_json_schema()
    # Remove Pydantic-specific fields not needed by OpenAI
    schema.pop("title", None)
    schema.pop("description", None)
    return {
        "type": "function",
        "function": {
            "name": name,
            "description": description,
            "parameters": schema
        }
    }

# Usage
weather_tool = pydantic_to_openai_tool(
    name="get_weather",
    description="Get current weather for a city.",
    model=WeatherInput
)
print(json.dumps(weather_tool, indent=2))

# ── Validate before executing ──
def execute_tool_safe(name: str, raw_args: dict) -> dict:
    """Validate and execute tool with Pydantic."""
    TOOL_SCHEMAS = {
        "get_weather": WeatherInput,
        "search_product_catalog": SearchInput,
    }
    
    schema = TOOL_SCHEMAS.get(name)
    if not schema:
        return {"error": f"Unknown tool: {name}"}
    
    try:
        validated = schema(**raw_args)           # Pydantic validation
        func = TOOL_FUNCTIONS[name]
        return func(**validated.model_dump())     # Execute with validated args
    except Exception as e:
        return {"error": f"Validation failed: {str(e)}"}
```

### 4.4. Error Handling trong Tool Responses

Khi tool execution fail, gửi error message có cấu trúc cho LLM để nó tự xử lý:

```python
import traceback

def execute_tool_with_error_handling(
    name: str, 
    args: dict, 
    max_retries: int = 2
) -> dict:
    """Execute tool with structured error handling."""
    for attempt in range(max_retries + 1):
        try:
            func = TOOL_FUNCTIONS.get(name)
            if not func:
                return {
                    "status": "error",
                    "error_type": "unknown_tool",
                    "message": f"Tool '{name}' not found. Available: {list(TOOL_FUNCTIONS.keys())}"
                }
            
            result = func(**args)
            return {"status": "success", "data": result}
        
        except TypeError as e:
            # Wrong arguments
            return {
                "status": "error",
                "error_type": "invalid_arguments",
                "message": f"Invalid arguments for {name}: {str(e)}",
                "hint": "Please check parameter names and types."
            }
        
        except ConnectionError as e:
            if attempt < max_retries:
                continue  # Retry
            return {
                "status": "error",
                "error_type": "connection_failed",
                "message": f"Could not connect after {max_retries + 1} attempts: {str(e)}",
                "hint": "The external service may be down. Try again later."
            }
        
        except Exception as e:
            return {
                "status": "error",
                "error_type": "execution_error",
                "message": str(e),
                "traceback": traceback.format_exc()
            }
```

> **Tip:** Luôn trả về error message **dạng natural language** cho LLM. LLM đọc error message và tự quyết định: retry, thử tool khác, hoặc thông báo user. Đừng trả raw exception.

---

## 5. ReAct Pattern — Reasoning + Acting

### 5.1. ReAct Paper Concept

**ReAct** (Reasoning + Acting) là pattern được giới thiệu trong paper *"ReAct: Synergizing Reasoning and Acting in Language Models"* (Yao et al., 2022). Ý tưởng cốt lõi: LLM **xen kẽ** giữa suy nghĩ (thought) và hành động (action), thay vì chỉ act mù quáng.

```text
ReAct vs Other Approaches:

  Standard Prompting:          Chain-of-Thought:           ReAct:
  ┌──────────────────┐        ┌──────────────────┐        ┌──────────────────┐
  │ Question →       │        │ Question →       │        │ Question →       │
  │       Answer     │        │   Think step 1   │        │   Thought 1      │
  │                  │        │   Think step 2   │        │   Action 1       │
  │ (no reasoning,   │        │   Think step 3   │        │   Observation 1  │
  │  no grounding)   │        │       Answer     │        │   Thought 2      │
  │                  │        │                  │        │   Action 2       │
  │                  │        │ (reasoning but   │        │   Observation 2  │
  │                  │        │  no grounding)   │        │   Thought 3      │
  │                  │        │                  │        │       Answer     │
  └──────────────────┘        └──────────────────┘        └──────────────────┘
                                                           
  Problem:                    Problem:                    Solution:
  Hallucination,              Can reason but              Grounded reasoning
  no fact-checking            still hallucinate           via tool feedback
```

### 5.2. Thought → Action → Observation Loop

```text
The ReAct Loop:

  ┌───────────────────────────────────────────────────────────────┐
  │                                                               │
  │  User Question: "Dân số Việt Nam năm 2024 là bao nhiêu?"    │
  │                                                               │
  │  ┌─────────────────────────────────────────┐                 │
  │  │ THOUGHT 1:                              │                 │
  │  │ Tôi cần tìm dân số VN mới nhất.        │  ← LLM reasons  │
  │  │ Sẽ search web để có số liệu chính xác. │                 │
  │  └───────────────┬─────────────────────────┘                 │
  │                  │                                            │
  │                  ▼                                            │
  │  ┌─────────────────────────────────────────┐                 │
  │  │ ACTION 1:                               │                 │
  │  │ search("Vietnam population 2024")       │  ← LLM acts     │
  │  └───────────────┬─────────────────────────┘                 │
  │                  │                                            │
  │                  ▼                                            │
  │  ┌─────────────────────────────────────────┐                 │
  │  │ OBSERVATION 1:                          │                 │
  │  │ "Vietnam population: ~100.3 million     │  ← Tool output  │
  │  │  (2024 est.) — World Bank data"         │                 │
  │  └───────────────┬─────────────────────────┘                 │
  │                  │                                            │
  │                  ▼                                            │
  │  ┌─────────────────────────────────────────┐                 │
  │  │ THOUGHT 2:                              │                 │
  │  │ Đã có dữ liệu đáng tin cậy từ World    │  ← LLM reflects │
  │  │ Bank. Có thể trả lời người dùng.       │                 │
  │  └───────────────┬─────────────────────────┘                 │
  │                  │                                            │
  │                  ▼                                            │
  │  ┌─────────────────────────────────────────┐                 │
  │  │ ANSWER:                                 │                 │
  │  │ Theo World Bank, dân số Việt Nam năm    │  ← Final answer │
  │  │ 2024 ước tính khoảng 100.3 triệu người.│                 │
  │  └─────────────────────────────────────────┘                 │
  │                                                               │
  └───────────────────────────────────────────────────────────────┘
```

### 5.3. ReAct Implementation từ Scratch

```python
from openai import OpenAI
import json
from typing import Callable

client = OpenAI()

class ReActAgent:
    """
    ReAct Agent — implements Thought → Action → Observation loop.
    
    Khác với basic tool calling (LLM tự quyết tool), ReAct agent
    force LLM suy nghĩ trước khi act, tạo reasoning trace rõ ràng.
    """
    
    def __init__(
        self, 
        tools: dict[str, Callable],
        tool_definitions: list[dict],
        model: str = "gpt-4o",
        max_iterations: int = 10,
        verbose: bool = True,
    ):
        self.tools = tools
        self.tool_definitions = tool_definitions
        self.model = model
        self.max_iterations = max_iterations
        self.verbose = verbose
        self.trace: list[dict] = []  # Full reasoning trace
    
    def _build_system_prompt(self) -> str:
        tool_names = ", ".join(self.tools.keys())
        return f"""You are a ReAct agent. You solve problems by interleaving 
Thought and Action steps.

Available tools: {tool_names}

For each step:
1. THINK about what you know and what you need to find out
2. Decide which tool to call (or if you have enough info to answer)
3. After receiving tool results, THINK about what the results mean

Always reason step by step. Be concise in your thoughts.
When you have enough information, provide the final answer directly."""
    
    def run(self, query: str) -> str:
        """Run the ReAct loop."""
        messages = [
            {"role": "system", "content": self._build_system_prompt()},
            {"role": "user", "content": query}
        ]
        
        for i in range(self.max_iterations):
            if self.verbose:
                print(f"\n{'='*60}")
                print(f"  Iteration {i + 1}/{self.max_iterations}")
                print(f"{'='*60}")
            
            response = client.chat.completions.create(
                model=self.model,
                messages=messages,
                tools=self.tool_definitions,
                tool_choice="auto",
            )
            
            message = response.choices[0].message
            messages.append(message)
            
            # ── Thought: Extract any text reasoning ──
            if message.content:
                self.trace.append({"type": "thought", "content": message.content})
                if self.verbose:
                    print(f"  💭 Thought: {message.content[:200]}...")
            
            # ── Check if done ──
            if not message.tool_calls:
                self.trace.append({"type": "answer", "content": message.content})
                if self.verbose:
                    print(f"  ✅ Final Answer")
                return message.content
            
            # ── Action: Execute tool calls ──
            for tool_call in message.tool_calls:
                name = tool_call.function.name
                args = json.loads(tool_call.function.arguments)
                
                self.trace.append({
                    "type": "action", 
                    "tool": name, 
                    "args": args
                })
                if self.verbose:
                    print(f"  🔧 Action: {name}({json.dumps(args, ensure_ascii=False)})")
                
                # Execute tool
                try:
                    result = self.tools[name](**args)
                    result_str = json.dumps(result, ensure_ascii=False) \
                                 if not isinstance(result, str) else result
                except Exception as e:
                    result_str = json.dumps({
                        "error": str(e), 
                        "hint": "Try different parameters or another tool."
                    })
                
                # ── Observation: Tool output ──
                self.trace.append({
                    "type": "observation", 
                    "tool": name, 
                    "result": result_str[:500]
                })
                if self.verbose:
                    print(f"  👁 Observation: {result_str[:200]}...")
                
                messages.append({
                    "role": "tool",
                    "tool_call_id": tool_call.id,
                    "content": result_str
                })
        
        return "Max iterations reached. Could not complete the task."
    
    def get_trace(self) -> list[dict]:
        """Return full reasoning trace for debugging."""
        return self.trace
    
    def print_trace(self):
        """Pretty-print the reasoning trace."""
        for i, step in enumerate(self.trace):
            if step["type"] == "thought":
                print(f"  [{i}] 💭 THOUGHT: {step['content'][:150]}")
            elif step["type"] == "action":
                print(f"  [{i}] 🔧 ACTION:  {step['tool']}({step['args']})")
            elif step["type"] == "observation":
                print(f"  [{i}] 👁 OBSERVE: {step['result'][:150]}")
            elif step["type"] == "answer":
                print(f"  [{i}] ✅ ANSWER:  {step['content'][:150]}")
```

---

## 6. Building Custom Tools

### 6.1. Web Search Tool (Tavily)

```python
import httpx
import os

class WebSearchTool:
    """Web search tool using Tavily API."""
    
    name = "web_search"
    description = (
        "Search the web for current information. Returns top results with "
        "titles, URLs, and content snippets. Use when you need up-to-date "
        "information that may not be in your training data."
    )
    schema = {
        "type": "object",
        "properties": {
            "query": {
                "type": "string",
                "description": "Search query in natural language"
            },
            "max_results": {
                "type": "integer",
                "description": "Number of results to return (1-10). Default: 5",
                "default": 5
            }
        },
        "required": ["query"]
    }
    
    def __init__(self, api_key: str = None):
        self.api_key = api_key or os.getenv("TAVILY_API_KEY")
        self.base_url = "https://api.tavily.com"
    
    def __call__(self, query: str, max_results: int = 5) -> dict:
        """Execute web search."""
        response = httpx.post(
            f"{self.base_url}/search",
            json={
                "api_key": self.api_key,
                "query": query,
                "max_results": min(max_results, 10),
                "include_answer": True,
                "include_raw_content": False,
            },
            timeout=30.0
        )
        response.raise_for_status()
        data = response.json()
        
        return {
            "answer": data.get("answer", ""),
            "results": [
                {
                    "title": r["title"],
                    "url": r["url"],
                    "snippet": r["content"][:300]
                }
                for r in data.get("results", [])
            ]
        }
```

### 6.2. Database Query Tool (SQLAlchemy)

```python
from sqlalchemy import create_engine, text
from typing import Optional

class DatabaseQueryTool:
    """Execute read-only SQL queries against a database."""
    
    name = "query_database"
    description = (
        "Execute a read-only SQL query against the application database. "
        "Returns query results as a list of rows. "
        "ONLY SELECT queries are allowed — no INSERT, UPDATE, DELETE. "
        "Use this to look up user data, order history, product info, etc."
    )
    schema = {
        "type": "object",
        "properties": {
            "query": {
                "type": "string",
                "description": "SQL SELECT query to execute"
            },
            "limit": {
                "type": "integer",
                "description": "Max rows to return. Default: 20",
                "default": 20
            }
        },
        "required": ["query"]
    }
    
    # Allowlist of safe SQL operations
    ALLOWED_OPERATIONS = {"select", "show", "describe", "explain"}
    
    def __init__(self, connection_string: str):
        self.engine = create_engine(connection_string)
    
    def __call__(self, query: str, limit: int = 20) -> dict:
        """Execute SQL query with safety checks."""
        # ── Security: Only allow SELECT queries ──
        first_word = query.strip().split()[0].lower()
        if first_word not in self.ALLOWED_OPERATIONS:
            return {
                "error": f"Only SELECT queries allowed. Got: {first_word.upper()}",
                "hint": "Rephrase as a SELECT query."
            }
        
        # ── Security: Prevent SQL injection patterns ──
        dangerous_patterns = ["drop ", "delete ", "update ", "insert ", 
                              "alter ", "truncate ", "--", ";"]
        query_lower = query.lower()
        for pattern in dangerous_patterns:
            if pattern in query_lower and first_word != "select":
                return {"error": f"Potentially dangerous pattern detected: {pattern}"}
        
        # Add LIMIT if not present
        if "limit" not in query_lower:
            query = f"{query.rstrip().rstrip(';')} LIMIT {limit}"
        
        try:
            with self.engine.connect() as conn:
                result = conn.execute(text(query))
                columns = list(result.keys())
                rows = [dict(zip(columns, row)) for row in result.fetchall()]
                return {
                    "columns": columns,
                    "rows": rows,
                    "row_count": len(rows)
                }
        except Exception as e:
            return {"error": f"Query failed: {str(e)}"}
```

### 6.3. Code Execution Tool (Sandboxed)

```python
import subprocess
import tempfile
import os

class CodeExecutionTool:
    """Execute Python code in a sandboxed environment."""
    
    name = "execute_python"
    description = (
        "Execute Python code and return stdout/stderr output. "
        "Use for calculations, data processing, generating charts, "
        "or any task that requires code execution. "
        "Code runs in isolated environment with 30s timeout."
    )
    schema = {
        "type": "object",
        "properties": {
            "code": {
                "type": "string",
                "description": "Python code to execute"
            }
        },
        "required": ["code"]
    }
    
    BLOCKED_IMPORTS = {"os", "subprocess", "shutil", "sys", "importlib"}
    TIMEOUT_SECONDS = 30
    
    def __call__(self, code: str) -> dict:
        """Execute Python code safely."""
        # ── Security checks ──
        for blocked in self.BLOCKED_IMPORTS:
            if f"import {blocked}" in code or f"from {blocked}" in code:
                return {
                    "error": f"Import '{blocked}' is not allowed for security reasons.",
                    "hint": "Use only safe libraries: math, json, datetime, collections, etc."
                }
        
        if "__" in code:  # Block dunder access (e.g., __import__)
            return {"error": "Double underscores not allowed for security."}
        
        # ── Execute in subprocess for isolation ──
        with tempfile.NamedTemporaryFile(
            mode='w', suffix='.py', delete=False
        ) as f:
            f.write(code)
            temp_path = f.name
        
        try:
            result = subprocess.run(
                ["python3", temp_path],
                capture_output=True,
                text=True,
                timeout=self.TIMEOUT_SECONDS,
                cwd=tempfile.gettempdir(),
                env={"PATH": os.environ.get("PATH", "")},  # Minimal env
            )
            return {
                "stdout": result.stdout[:5000],          # Truncate large output
                "stderr": result.stderr[:2000] if result.stderr else None,
                "return_code": result.returncode,
            }
        except subprocess.TimeoutExpired:
            return {"error": f"Code execution timed out after {self.TIMEOUT_SECONDS}s"}
        finally:
            os.unlink(temp_path)
```

### 6.4. API Integration Tool

```python
class APIIntegrationTool:
    """Generic HTTP API caller for external service integration."""
    
    name = "call_api"
    description = (
        "Make HTTP requests to external APIs. Supports GET and POST. "
        "Use for fetching data from REST APIs, webhooks, etc."
    )
    schema = {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "description": "Full API URL including path"
            },
            "method": {
                "type": "string",
                "enum": ["GET", "POST"],
                "description": "HTTP method"
            },
            "headers": {
                "type": "object",
                "description": "HTTP headers as key-value pairs"
            },
            "body": {
                "type": "object",
                "description": "Request body for POST requests"
            }
        },
        "required": ["url", "method"]
    }
    
    # Only allow pre-approved domains
    ALLOWED_DOMAINS = [
        "api.github.com",
        "api.openweathermap.org",
        "jsonplaceholder.typicode.com",
    ]
    
    def __call__(
        self, url: str, method: str = "GET", 
        headers: dict = None, body: dict = None
    ) -> dict:
        """Make HTTP request with domain allowlist."""
        from urllib.parse import urlparse
        
        # ── Security: Domain allowlist ──
        domain = urlparse(url).hostname
        if domain not in self.ALLOWED_DOMAINS:
            return {
                "error": f"Domain '{domain}' not in allowlist.",
                "allowed_domains": self.ALLOWED_DOMAINS
            }
        
        try:
            if method == "GET":
                resp = httpx.get(url, headers=headers, timeout=15.0)
            elif method == "POST":
                resp = httpx.post(url, headers=headers, json=body, timeout=15.0)
            else:
                return {"error": f"Unsupported method: {method}"}
            
            return {
                "status_code": resp.status_code,
                "body": resp.json() if "json" in resp.headers.get("content-type", "") else resp.text[:3000]
            }
        except Exception as e:
            return {"error": str(e)}
```

### 6.5. Complete Toolbox Class

Kết hợp tất cả tools vào một **Toolbox** dễ manage:

```python
from dataclasses import dataclass, field
from typing import Callable, Any

@dataclass
class ToolDefinition:
    """Wrapper for a tool with its metadata and implementation."""
    name: str
    description: str
    schema: dict
    func: Callable[..., Any]
    
    def to_openai_format(self) -> dict:
        """Convert to OpenAI tool definition."""
        return {
            "type": "function",
            "function": {
                "name": self.name,
                "description": self.description,
                "parameters": self.schema,
            }
        }
    
    def to_anthropic_format(self) -> dict:
        """Convert to Anthropic tool definition."""
        return {
            "name": self.name,
            "description": self.description,
            "input_schema": self.schema,
        }


class Toolbox:
    """
    Central registry for all agent tools.
    
    Manages tool definitions, execution, and format conversion
    for multiple LLM providers.
    """
    
    def __init__(self):
        self._tools: dict[str, ToolDefinition] = {}
    
    def register(self, tool_instance) -> "Toolbox":
        """Register a tool from a class instance."""
        td = ToolDefinition(
            name=tool_instance.name,
            description=tool_instance.description,
            schema=tool_instance.schema,
            func=tool_instance,  # __call__ method
        )
        self._tools[td.name] = td
        return self  # Enable chaining
    
    def register_function(
        self, name: str, description: str, 
        schema: dict, func: Callable
    ) -> "Toolbox":
        """Register a plain function as a tool."""
        td = ToolDefinition(name=name, description=description, schema=schema, func=func)
        self._tools[td.name] = td
        return self
    
    def execute(self, name: str, args: dict) -> dict:
        """Execute a tool by name with error handling."""
        tool = self._tools.get(name)
        if not tool:
            return {"error": f"Tool '{name}' not found. Available: {list(self._tools.keys())}"}
        try:
            return tool.func(**args)
        except Exception as e:
            return {"error": f"Tool execution failed: {str(e)}"}
    
    def get_openai_tools(self) -> list[dict]:
        """Get all tool definitions in OpenAI format."""
        return [t.to_openai_format() for t in self._tools.values()]
    
    def get_anthropic_tools(self) -> list[dict]:
        """Get all tool definitions in Anthropic format."""
        return [t.to_anthropic_format() for t in self._tools.values()]
    
    def get_function_map(self) -> dict[str, Callable]:
        """Get name→function mapping for execution."""
        return {name: td.func for name, td in self._tools.items()}
    
    def list_tools(self) -> list[str]:
        """List all registered tool names."""
        return list(self._tools.keys())


# ── Usage ──
toolbox = Toolbox()
toolbox.register(WebSearchTool())
toolbox.register(DatabaseQueryTool("sqlite:///app.db"))
toolbox.register(CodeExecutionTool())
toolbox.register(APIIntegrationTool())

print(f"Registered tools: {toolbox.list_tools()}")
# ['web_search', 'query_database', 'execute_python', 'call_api']

# Works with both providers
openai_tools = toolbox.get_openai_tools()
anthropic_tools = toolbox.get_anthropic_tools()
```

---

## 7. Tool Selection & Routing

### 7.1. LLM chọn Tool như thế nào?

LLM dựa vào 3 yếu tố để chọn tool:

```text
How LLM Selects Tools:

  ┌─────────────────────────────────────────────────────────────┐
  │                                                             │
  │  User Message: "Tìm giá Bitcoin hôm nay"                  │
  │                                                             │
  │  LLM evaluates each tool:                                  │
  │                                                             │
  │  ┌──────────────────────┬───────────┬───────────────────┐  │
  │  │ Tool                 │ Score     │ Reasoning          │  │
  │  ├──────────────────────┼───────────┼───────────────────┤  │
  │  │ web_search           │ ★★★★★    │ "current info"     │  │
  │  │   "Search web for    │ HIGH      │ matches "hôm nay" │  │
  │  │    current info..."  │           │                    │  │
  │  ├──────────────────────┼───────────┼───────────────────┤  │
  │  │ query_database       │ ★★       │ "user data, orders"│  │
  │  │   "Query app DB..."  │ LOW       │ no crypto in DB    │  │
  │  ├──────────────────────┼───────────┼───────────────────┤  │
  │  │ execute_python       │ ★★★      │ Could calculate    │  │
  │  │   "Run Python..."    │ MEDIUM    │ but needs data src │  │
  │  └──────────────────────┴───────────┴───────────────────┘  │
  │                                                             │
  │  Winner: web_search(query="Bitcoin price today USD")       │
  │                                                             │
  └─────────────────────────────────────────────────────────────┘

  Key factors:
  1. Tool DESCRIPTION matching user intent     (most important)
  2. Tool NAME semantic similarity              (secondary)
  3. Parameter descriptions matching entities   (tertiary)
```

### 7.2. Tool Chaining Patterns

```text
Common Tool Chaining Patterns:

  Pattern 1: SEQUENTIAL (output of tool A → input of tool B)
  ┌────────┐    result    ┌────────┐    result    ┌────────┐
  │ Search │────────────→│ Read   │────────────→│Summarize│
  │ Web    │             │ Page   │             │ Content │
  └────────┘             └────────┘             └────────┘
  
  Pattern 2: FAN-OUT (parallel tools, aggregate results)
                         ┌──────────┐
                    ┌───→│ Source A  │───┐
  ┌────────┐       │    └──────────┘   │    ┌───────────┐
  │  Plan  │───────┤                    ├───→│ Aggregate │
  │        │       │    ┌──────────┐   │    │ & Compare │
  └────────┘       └───→│ Source B  │───┘    └───────────┘
                         └──────────┘
  
  Pattern 3: CONDITIONAL (choose based on previous result)
  ┌────────┐    if error    ┌────────┐
  │ Try DB │───────────────→│ Try Web│
  │ Query  │                │ Search │
  └────┬───┘                └────────┘
       │ if success
       ▼
  ┌────────┐
  │ Format │
  │ Result │
  └────────┘
  
  Pattern 4: ITERATIVE (loop until condition met)
  ┌────────┐    not done    ┌────────┐    refine
  │ Search │───────────────→│ Analyze│───────────→ (back to Search)
  │        │                │ Result │
  └────────┘                └────────┘
       ↓ done
  ┌────────┐
  │ Answer │
  └────────┘
```

### 7.3. `tool_choice` Strategy Guide

| Scenario | `tool_choice` | Lý do |
|----------|--------------|-------|
| General Q&A agent | `"auto"` | LLM tự quyết cần search hay trả lời từ knowledge |
| Data extraction pipeline | `"required"` | Mỗi query đều cần tool (extract structured data) |
| Classification step | `"none"` | Chỉ cần LLM classify, không cần tool |
| Weather bot | `{"name": "get_weather"}` | Mọi query đều cần weather tool |
| Multi-step agent, step 1 | `"required"` | Force agent hành động, không skip |
| Multi-step agent, final step | `"none"` | Force agent tổng hợp và trả lời |

```python
# Strategy: Force first action, then auto for the rest
def run_agent_with_strategy(query: str, messages: list) -> str:
    # Step 1: Force tool call
    response = client.chat.completions.create(
        model="gpt-4o",
        messages=messages,
        tools=tools,
        tool_choice="required",  # Must use at least 1 tool
    )
    # ... execute tools, add results to messages ...
    
    # Step 2+: Auto mode — let LLM decide
    response = client.chat.completions.create(
        model="gpt-4o",
        messages=messages,
        tools=tools,
        tool_choice="auto",  # LLM can answer or call more tools
    )
    return response.choices[0].message.content
```

---

## 8. Error Handling & Retry Logic

### 8.1. Production-Grade Error Handler

```python
import time
import random
import logging
from functools import wraps
from typing import TypeVar, Generic
from dataclasses import dataclass

logger = logging.getLogger(__name__)

@dataclass
class ToolResult:
    """Standardized result object for all tool executions."""
    success: bool
    data: dict | None = None
    error: str | None = None
    error_type: str | None = None
    retry_count: int = 0
    latency_ms: float = 0


def with_retry(
    max_retries: int = 3,
    base_delay: float = 1.0,
    max_delay: float = 30.0,
    retryable_errors: tuple = (ConnectionError, TimeoutError),
):
    """Decorator for retry with exponential backoff + jitter."""
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs) -> ToolResult:
            last_error = None
            start_time = time.time()
            
            for attempt in range(max_retries + 1):
                try:
                    result = func(*args, **kwargs)
                    latency = (time.time() - start_time) * 1000
                    return ToolResult(
                        success=True, 
                        data=result, 
                        retry_count=attempt,
                        latency_ms=latency
                    )
                except retryable_errors as e:
                    last_error = e
                    if attempt < max_retries:
                        # Exponential backoff with jitter
                        delay = min(
                            base_delay * (2 ** attempt) + random.uniform(0, 1),
                            max_delay
                        )
                        logger.warning(
                            f"Tool {func.__name__} failed (attempt {attempt + 1}/"
                            f"{max_retries + 1}): {e}. Retrying in {delay:.1f}s..."
                        )
                        time.sleep(delay)
                except Exception as e:
                    # Non-retryable error — fail immediately
                    latency = (time.time() - start_time) * 1000
                    return ToolResult(
                        success=False,
                        error=str(e),
                        error_type=type(e).__name__,
                        latency_ms=latency
                    )
            
            # All retries exhausted
            latency = (time.time() - start_time) * 1000
            return ToolResult(
                success=False,
                error=f"Failed after {max_retries + 1} attempts: {last_error}",
                error_type="RetryExhausted",
                retry_count=max_retries,
                latency_ms=latency
            )
        return wrapper
    return decorator


# ── Usage with decorator ──
@with_retry(max_retries=3, retryable_errors=(ConnectionError, TimeoutError))
def fetch_stock_price(symbol: str) -> dict:
    """Fetch stock price from API."""
    resp = httpx.get(
        f"https://api.example.com/stock/{symbol}",
        timeout=10.0
    )
    resp.raise_for_status()
    return resp.json()
```

### 8.2. Graceful Degradation & Fallback

```python
class ResilientToolbox:
    """Toolbox with fallback chains for graceful degradation."""
    
    def __init__(self):
        self.toolbox = Toolbox()
        # Fallback chains: if primary fails, try alternatives
        self.fallbacks: dict[str, list[str]] = {}
    
    def register_with_fallback(
        self, tool_instance, fallback_tools: list[str] = None
    ):
        """Register tool with fallback alternatives."""
        self.toolbox.register(tool_instance)
        if fallback_tools:
            self.fallbacks[tool_instance.name] = fallback_tools
    
    def execute(self, name: str, args: dict) -> dict:
        """Execute with automatic fallback on failure."""
        # Try primary tool
        result = self.toolbox.execute(name, args)
        
        if "error" not in result:
            return result
        
        # Primary failed — try fallbacks
        fallback_chain = self.fallbacks.get(name, [])
        for fallback_name in fallback_chain:
            logger.warning(
                f"Tool '{name}' failed, trying fallback '{fallback_name}'"
            )
            result = self.toolbox.execute(fallback_name, args)
            if "error" not in result:
                result["_fallback_used"] = fallback_name
                return result
        
        # All fallbacks failed
        return {
            "error": f"Tool '{name}' and all fallbacks failed.",
            "hint": "The requested information is temporarily unavailable.",
            "tried": [name] + fallback_chain,
        }


# ── Example: Search with fallbacks ──
resilient = ResilientToolbox()
resilient.register_with_fallback(
    WebSearchTool(),                            # Primary: Tavily
    fallback_tools=["search_backup"]            # Fallback: SerpAPI
)
```

### 8.3. Error Message Format cho LLM

```text
Error Message Design for LLM Consumption:

  ❌ BAD (raw exception):
  "ConnectionError: HTTPSConnectionPool(host='api.example.com'): 
   Max retries exceeded with url: /v1/search..."

  ✅ GOOD (structured, actionable):
  {
    "status": "error",
    "error_type": "service_unavailable",
    "message": "Web search service is temporarily unavailable.",
    "suggestion": "Try rephrasing the query or use a different approach.",
    "can_retry": true
  }

  Why? LLM reads error messages to decide next action:
  - "can_retry: true" → LLM may retry
  - "suggestion: use different approach" → LLM tries another tool
  - Clear "message" → LLM can explain to user if needed
```

---

## 9. Hands-on: Build a Research Agent

Ghép tất cả lại thành một **Research Agent** hoàn chỉnh — agent có thể search web, đọc nội dung trang web, tính toán, và tổng hợp thông tin.

### 9.1. Cài đặt

```bash
pip install openai httpx pydantic
```

### 9.2. Define Tools

```python
import httpx
import json
import re
from openai import OpenAI

client = OpenAI()

# ── Tool 1: Web Search ──
def web_search(query: str, max_results: int = 5) -> dict:
    """Search the web using Tavily API."""
    import os
    resp = httpx.post(
        "https://api.tavily.com/search",
        json={
            "api_key": os.getenv("TAVILY_API_KEY"),
            "query": query,
            "max_results": max_results,
            "include_answer": True,
        },
        timeout=30.0
    )
    data = resp.json()
    return {
        "answer": data.get("answer", ""),
        "results": [
            {"title": r["title"], "url": r["url"], "snippet": r["content"][:300]}
            for r in data.get("results", [])
        ]
    }

# ── Tool 2: Read Web Page ──
def read_webpage(url: str) -> dict:
    """Fetch and extract text content from a web page."""
    try:
        resp = httpx.get(
            url, 
            timeout=15.0, 
            follow_redirects=True,
            headers={"User-Agent": "ResearchAgent/1.0"}
        )
        # Simple HTML → text extraction
        text = re.sub(r'<script[^>]*>.*?</script>', '', resp.text, flags=re.DOTALL)
        text = re.sub(r'<style[^>]*>.*?</style>', '', text, flags=re.DOTALL)
        text = re.sub(r'<[^>]+>', ' ', text)
        text = re.sub(r'\s+', ' ', text).strip()
        return {
            "url": url,
            "content": text[:5000],  # Truncate to 5K chars
            "status_code": resp.status_code,
        }
    except Exception as e:
        return {"error": str(e), "url": url}

# ── Tool 3: Calculator ──
def calculate(expression: str) -> dict:
    """Safely evaluate a math expression."""
    import ast
    import operator
    
    SAFE_OPS = {
        ast.Add: operator.add,
        ast.Sub: operator.sub,
        ast.Mult: operator.mul,
        ast.Div: operator.truediv,
        ast.Pow: operator.pow,
        ast.USub: operator.neg,
    }
    
    def _eval(node):
        if isinstance(node, ast.Constant):
            return node.value
        elif isinstance(node, ast.BinOp):
            left = _eval(node.left)
            right = _eval(node.right)
            return SAFE_OPS[type(node.op)](left, right)
        elif isinstance(node, ast.UnaryOp):
            return SAFE_OPS[type(node.op)](_eval(node.operand))
        else:
            raise ValueError(f"Unsupported operation: {type(node)}")
    
    try:
        tree = ast.parse(expression, mode='eval')
        result = _eval(tree.body)
        return {"expression": expression, "result": result}
    except Exception as e:
        return {"error": f"Cannot evaluate: {expression}. Error: {str(e)}"}

# ── Tool 4: Take Notes ──
research_notes = []

def save_note(note: str, source: str = "") -> dict:
    """Save a research note for later synthesis."""
    entry = {"note": note, "source": source, "index": len(research_notes)}
    research_notes.append(entry)
    return {"saved": True, "total_notes": len(research_notes)}

def get_notes() -> dict:
    """Retrieve all saved research notes."""
    return {"notes": research_notes, "count": len(research_notes)}
```

### 9.3. Tool Definitions

```python
RESEARCH_TOOLS = [
    {
        "type": "function",
        "function": {
            "name": "web_search",
            "description": (
                "Search the web for current information. Use when you need "
                "facts, statistics, recent events, or any info not in your knowledge. "
                "Returns top results with snippets."
            ),
            "parameters": {
                "type": "object",
                "properties": {
                    "query": {"type": "string", "description": "Search query"},
                    "max_results": {"type": "integer", "description": "Results count (1-10)", "default": 5}
                },
                "required": ["query"]
            }
        }
    },
    {
        "type": "function",
        "function": {
            "name": "read_webpage",
            "description": (
                "Fetch and read the text content of a specific web page. "
                "Use after web_search to get detailed content from a URL. "
                "Returns extracted text (max 5000 chars)."
            ),
            "parameters": {
                "type": "object",
                "properties": {
                    "url": {"type": "string", "description": "Full URL to read"}
                },
                "required": ["url"]
            }
        }
    },
    {
        "type": "function",
        "function": {
            "name": "calculate",
            "description": "Evaluate a math expression. Supports +, -, *, /, **.",
            "parameters": {
                "type": "object",
                "properties": {
                    "expression": {"type": "string", "description": "Math expression, e.g. '2 + 3 * 4'"}
                },
                "required": ["expression"]
            }
        }
    },
    {
        "type": "function",
        "function": {
            "name": "save_note",
            "description": (
                "Save an important finding or note during research. "
                "Use to record key facts, statistics, or insights you want to "
                "include in the final synthesis."
            ),
            "parameters": {
                "type": "object",
                "properties": {
                    "note": {"type": "string", "description": "The research note/finding"},
                    "source": {"type": "string", "description": "Source URL or reference"}
                },
                "required": ["note"]
            }
        }
    },
    {
        "type": "function",
        "function": {
            "name": "get_notes",
            "description": "Retrieve all saved research notes for synthesis.",
            "parameters": {"type": "object", "properties": {}}
        }
    },
]

TOOL_MAP = {
    "web_search": web_search,
    "read_webpage": read_webpage,
    "calculate": calculate,
    "save_note": save_note,
    "get_notes": get_notes,
}
```

### 9.4. Research Agent Implementation

```python
class ResearchAgent:
    """
    Research Agent — searches web, reads pages, takes notes, synthesizes.
    
    Uses ReAct-style reasoning with a full tool suite.
    """
    
    SYSTEM_PROMPT = """You are a thorough research agent. Your goal is to research 
topics by searching the web, reading relevant pages, and synthesizing findings 
into a comprehensive answer.

Your workflow:
1. SEARCH for relevant information using web_search
2. READ promising pages using read_webpage for detailed content
3. SAVE important findings using save_note
4. When you have enough information, SYNTHESIZE into a clear answer

Guidelines:
- Search multiple queries to get diverse perspectives
- Read at least 2-3 sources for important claims
- Save key facts with source attribution
- Be thorough but efficient — don't over-search
- Cite sources in your final answer
- If calculations are needed, use the calculate tool"""
    
    def __init__(self, model: str = "gpt-4o", max_iterations: int = 15):
        self.model = model
        self.max_iterations = max_iterations
        self.messages = []
        self.tool_calls_log = []
    
    def research(self, query: str) -> str:
        """Conduct research on a topic and return synthesis."""
        global research_notes
        research_notes = []  # Reset notes for new research
        
        self.messages = [
            {"role": "system", "content": self.SYSTEM_PROMPT},
            {"role": "user", "content": f"Research this topic thoroughly and provide a comprehensive answer:\n\n{query}"}
        ]
        
        for iteration in range(self.max_iterations):
            print(f"\n--- Iteration {iteration + 1} ---")
            
            response = client.chat.completions.create(
                model=self.model,
                messages=self.messages,
                tools=RESEARCH_TOOLS,
                tool_choice="auto",
            )
            
            message = response.choices[0].message
            self.messages.append(message)
            
            # Print thought if any
            if message.content:
                print(f"💭 {message.content[:200]}...")
            
            # Check if done
            if not message.tool_calls:
                print(f"\n✅ Research complete after {iteration + 1} iterations")
                print(f"   Tool calls made: {len(self.tool_calls_log)}")
                return message.content
            
            # Execute tool calls
            for tc in message.tool_calls:
                name = tc.function.name
                args = json.loads(tc.function.arguments)
                
                print(f"🔧 {name}({json.dumps(args, ensure_ascii=False)[:100]})")
                
                # Execute
                func = TOOL_MAP.get(name)
                try:
                    result = func(**args) if func else {"error": f"Unknown: {name}"}
                except Exception as e:
                    result = {"error": str(e)}
                
                result_str = json.dumps(result, ensure_ascii=False)
                self.tool_calls_log.append({
                    "iteration": iteration,
                    "tool": name,
                    "args": args,
                    "result_preview": result_str[:200]
                })
                
                self.messages.append({
                    "role": "tool",
                    "tool_call_id": tc.id,
                    "content": result_str[:8000]  # Limit context size
                })
        
        return "Research incomplete — max iterations reached."
    
    def get_log(self) -> list[dict]:
        """Return full tool call log for debugging."""
        return self.tool_calls_log


# ── Run the Research Agent ──
if __name__ == "__main__":
    agent = ResearchAgent(model="gpt-4o", max_iterations=15)
    
    result = agent.research(
        "So sánh GDP per capita của Việt Nam, Thái Lan, và Indonesia "
        "năm 2024. Nước nào tăng trưởng nhanh nhất trong 5 năm qua?"
    )
    
    print("\n" + "=" * 60)
    print("RESEARCH RESULT:")
    print("=" * 60)
    print(result)
    
    print(f"\nTotal tool calls: {len(agent.get_log())}")
    for log in agent.get_log():
        print(f"  [{log['iteration']}] {log['tool']}: {log['result_preview'][:80]}")
```

### 9.5. Example Trace

Khi chạy agent trên, reasoning trace sẽ trông như thế này:

```text
Research Agent Trace:

  --- Iteration 1 ---
  💭 I need to find GDP per capita data for Vietnam, Thailand, 
     and Indonesia for 2024 and compare 5-year growth...
  🔧 web_search({"query": "GDP per capita Vietnam Thailand Indonesia 2024"})
  
  --- Iteration 2 ---
  💭 I found some data but need to verify from another source.
     Let me read the World Bank page for detailed figures...
  🔧 read_webpage({"url": "https://data.worldbank.org/..."})
  🔧 save_note({"note": "Vietnam GDP/capita 2024: ~$4,650", 
                 "source": "World Bank"})
  
  --- Iteration 3 ---
  💭 Now I need historical data for the 5-year comparison...
  🔧 web_search({"query": "GDP per capita growth 2019-2024 Southeast Asia"})
  
  --- Iteration 4 ---
  🔧 save_note({"note": "Vietnam growth 2019-2024: +45%", ...})
  🔧 save_note({"note": "Thailand growth 2019-2024: +18%", ...})
  🔧 calculate({"expression": "4650 / 3200"})  → 1.453 (45.3% growth)
  
  --- Iteration 5 ---
  🔧 get_notes()
  💭 I have enough data. Let me synthesize...
  
  ✅ Research complete after 5 iterations
     Tool calls made: 8
```

---

## Tổng kết

**Key takeaways từ bài 13:**

1. **Tool Calling = LLM's hands** — LLM generate JSON chỉ định tool name + arguments, code của bạn execute. LLM không bao giờ trực tiếp chạy code.
2. **OpenAI dùng `tools` + `parameters`**, Anthropic dùng `tools` + `input_schema`. Format khác nhau nhưng concept giống nhau. Build abstraction layer (Toolbox) để support cả hai.
3. **Description engineering** quan trọng không kém prompt engineering. Tool description quyết định LLM có chọn đúng tool không. Include: what it does, when to use, when NOT to use, examples.
4. **Pydantic validation** — luôn validate tool arguments trước khi execute. Prevent injection, ensure type safety, catch errors sớm.
5. **ReAct pattern** (Thought → Action → Observation loop) tạo reasoning trace rõ ràng, giúp debug và tăng accuracy so với "blind" tool calling.
6. **Custom tools** nên follow class pattern: `name`, `description`, `schema`, `__call__`. Dùng **Toolbox** class để manage, tự động convert format cho nhiều providers.
7. **`tool_choice`** strategy: `auto` cho general use, `required` khi chắc chắn cần tool, specific tool khi only one option.
8. **Error handling is non-negotiable** — retry with exponential backoff, fallback chains, structured error messages cho LLM đọc. Production agent PHẢI handle tool failures gracefully.
9. **Security first**: allowlist domains cho API tools, validate SQL (read-only), sandbox code execution, sanitize inputs. Tool calling mở attack surface — protect it.

```text
Tool Calling Knowledge Map (Bài 13):

  ┌──────────────────────────────────────────────────────────────┐
  │  Function Calling = LLM outputs JSON → Your code executes   │
  │                                                              │
  │  Providers:                                                  │
  │    OpenAI (tools/parameters) ←→ Anthropic (tools/input_schema)│
  │                                                              │
  │  Best Practices:                                             │
  │    Description Engineering + Pydantic Validation + Security  │
  │                                                              │
  │  ReAct Pattern:                                              │
  │    Thought → Action → Observation → (loop) → Answer         │
  │                                                              │
  │  Custom Tools:                                               │
  │    Search ─ Database ─ Code Exec ─ API ─ Notes              │
  │    ↓                                                         │
  │    Toolbox (register, execute, multi-provider format)        │
  │                                                              │
  │  Production:                                                 │
  │    Retry + Fallback + Error Messages + Logging + Security   │
  └──────────────────────────────────────────────────────────────┘
```

---

## Bài tiếp theo

**Bài 14: LangChain & LlamaIndex — Agent Frameworks** — thay vì build mọi thứ from scratch như bài này, ta sẽ sử dụng 2 framework phổ biến nhất để xây agent nhanh hơn. Bạn sẽ học: LangChain Agent architecture (AgentExecutor, Tools, Memory), LlamaIndex agent (ReAct Agent, Query Engine Tools), so sánh chi tiết hai framework, và cách chọn framework phù hợp cho từng use case. Từ Research Agent tự build, ta sẽ rebuild nó bằng LangChain trong 50 dòng code.
