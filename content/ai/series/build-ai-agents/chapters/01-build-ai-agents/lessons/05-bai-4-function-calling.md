---
id: 019c9619-cc04-7004-d004-cc0400000004
title: 'Bài 4: Function Calling — Cho Agent "tay chân"'
slug: bai-4-function-calling
description: >-
  Cơ chế Function Calling/Tool Use của OpenAI, Anthropic, Gemini. Định nghĩa tool schema (JSON), xử lý tool_calls, parallel function calling. Xây calculator agent và weather agent.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 3
section_title: "Phần 2: Function Calling & Tool Use"
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: "Build AI Agents: Từ Zero đến Production"
  slug: build-ai-agents
---

## Giới thiệu

Function Calling là **siêu năng lực** biến LLM từ text generator thành agent. Thay vì chỉ trả lời bằng text, LLM có thể output structured JSON để gọi functions/tools bạn định nghĩa. Bài này deep-dive vào cơ chế function calling của cả 3 providers chính.

---

## 1. Function Calling hoạt động thế nào?

```
┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐
│  User    │────►│   LLM    │────►│  Your    │────►│   LLM    │────► Final
│  Prompt  │     │ (Choose  │     │  Code    │     │ (Process │     Response
│          │     │  tools)  │     │ (Execute)│     │  result) │
└──────────┘     └──────────┘     └──────────┘     └──────────┘
                  Output:          Output:
                  tool_calls[]     tool results
```

### Key Insight
LLM **không thực sự gọi** function. Nó chỉ output JSON nói "tôi muốn gọi function X với args Y". **Code của bạn** thực sự gọi function và trả kết quả về cho LLM.

---

## 2. OpenAI Function Calling

### 2.1 Định nghĩa Tools

```python
tools = [
    {
        "type": "function",
        "function": {
            "name": "search_products",
            "description": "Tìm kiếm sản phẩm trong database",
            "parameters": {
                "type": "object",
                "properties": {
                    "query": {"type": "string", "description": "Từ khóa tìm kiếm"},
                    "category": {"type": "string", "enum": ["electronics", "clothing", "books"]},
                    "max_price": {"type": "number", "description": "Giá tối đa (VND)"},
                    "sort_by": {"type": "string", "enum": ["price_asc", "price_desc", "rating"]}
                },
                "required": ["query"]
            }
        }
    }
]
```

### 2.2 Parallel Function Calling

Khi cần nhiều thông tin cùng lúc, LLM có thể gọi **nhiều tools song song**:

```python
# User: "So sánh thời tiết Hà Nội, Đà Nẵng và Sài Gòn"
# LLM sẽ output 3 tool_calls cùng lúc!
for tool_call in message.tool_calls:
    # tool_call 1: get_weather("Hanoi")
    # tool_call 2: get_weather("Da Nang")
    # tool_call 3: get_weather("Ho Chi Minh City")
    ...
```

---

## 3. Anthropic Tool Use

Claude sử dụng cú pháp khác nhưng concept tương tự:

```python
response = anthropic_client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    tools=[{
        "name": "search_products",
        "description": "Tìm kiếm sản phẩm",
        "input_schema": {
            "type": "object",
            "properties": {
                "query": {"type": "string"},
                "category": {"type": "string"}
            },
            "required": ["query"]
        }
    }],
    messages=[{"role": "user", "content": "Tìm laptop dưới 20 triệu"}]
)
```

---

## 4. Xây dựng Tool Registry Pattern

```python
class ToolRegistry:
    def __init__(self):
        self.tools = {}
        self.schemas = []
    
    def register(self, name, description, parameters):
        def decorator(func):
            self.tools[name] = func
            self.schemas.append({
                "type": "function",
                "function": {
                    "name": name,
                    "description": description,
                    "parameters": parameters
                }
            })
            return func
        return decorator
    
    def execute(self, name, args):
        return self.tools[name](**args)

registry = ToolRegistry()

@registry.register("get_weather", "Lấy thời tiết", {
    "type": "object",
    "properties": {"city": {"type": "string"}},
    "required": ["city"]
})
def get_weather(city):
    return f"Thời tiết {city}: 32°C, nắng"
```

---

## Tóm tắt

- Function Calling = LLM output JSON → your code executes → result back to LLM
- OpenAI: `tools` parameter + `tool_calls` response
- Anthropic: `tools` parameter + `tool_use` content blocks
- Parallel calling giúp agent xử lý nhanh hơn
- Tool Registry pattern giúp quản lý tools cleanly

## Bài tập

1. Implement 5 tools: calculator, weather, web_search, file_read, send_email
2. Xây agent có parallel function calling
3. Viết tool descriptions tốt — so sánh khi mô tả rõ vs mô tả mơ hồ
4. Implement tool_choice="required" vs "auto" và quan sát sự khác biệt

