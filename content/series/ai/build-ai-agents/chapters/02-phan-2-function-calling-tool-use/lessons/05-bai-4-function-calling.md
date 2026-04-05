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

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-14" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-14)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1035" cy="255" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="970" cy="70" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="905" cy="145" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="840" cy="220" r="33" fill="#fb923c" opacity="0.05"/>
    <circle cx="775" cy="35" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="205" x2="1100" y2="285" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="235" x2="1050" y2="305" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="939.6410161513776,85 939.6410161513776,125 905,145 870.3589838486224,125 870.3589838486224,85.00000000000001 905,65" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🧠 AI &amp; ML — Bài 3</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 4: Function Calling — Cho Agent &quot;tay</tspan>
      <tspan x="60" dy="42">chân&quot;</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Build AI Agents: Từ Zero đến Production</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 2: Function Calling &amp; Tool Use</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

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

