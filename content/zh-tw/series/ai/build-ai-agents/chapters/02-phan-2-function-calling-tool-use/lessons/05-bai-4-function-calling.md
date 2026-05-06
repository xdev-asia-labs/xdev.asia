---
id: 019c9619-cc04-7004-d004-cc0400000004
title: 第 4 課：函數呼叫 — 為 Agent 提供“手腳”
slug: bai-4-function-calling
description: >-
  OpenAI、Anthropic、Gemini 的函數呼叫/工具使用機制。定義工具架構 (JSON)、處理
  tool_calls、平行函數呼叫。建構計算器代理程式和天氣代理。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 3
section_title: 第二部分：函數呼叫和工具使用
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: 建構 AI 代理：從零到生產
  slug: build-ai-agents
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🧠 人工智慧與機器學習 — 第 3 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 4 課：函數呼叫 — 讓代理“手把手”</tspan>
      <tspan x="60" dy="42">腳”</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">建構 AI 代理：從零到生產</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第二部分：函數呼叫和工具使用</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

函數呼叫是將 LLM 從文字產生器轉變為代理的**超級能力**。 LLM 不僅僅以文字回應，還可以輸出結構化 JSON 來呼叫您定義的函數/工具。本文深入探討了所有 3 個主要提供者的函數呼叫機制。

---

## 1. 函數呼叫是如何運作的？

```
┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐
│  User    │────►│   LLM    │────►│  Your    │────►│   LLM    │────► Final
│  Prompt  │     │ (Choose  │     │  Code    │     │ (Process │     Response
│          │     │  tools)  │     │ (Execute)│     │  result) │
└──────────┘     └──────────┘     └──────────┘     └──────────┘
                  Output:          Output:
                  tool_calls[]     tool results
```

### 關鍵見解
LLM **實際上並沒有呼叫**該函數。它只是輸出 JSON 說“我想用參數 Y 呼叫函數 X”。 **您的程式碼**實際上會呼叫該函數並將結果傳回給 LLM。

---

## 2.OpenAI函數調用

### 2.1 工具的定義

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

### 2.2 平行函數調用

當同時需要大量資訊時，LLM可以並行呼叫**多個工具**：

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

## 3. 人擇工具的使用

克勞德使用不同的語法但概念相同：

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

## 4.建立工具登錄模式

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

## 總結

- 函數呼叫=LLM輸出JSON→你的程式碼執行→結果回傳LLM
- 開放人工智慧： `tools` 參數+ `tool_calls` 回應。反應
- 人擇： `tools` 參數+ `tool_use` 內容區塊
- 並行通話有助於座席更快地處理
- 工具登錄模式有助於乾淨地管理工具

## 練習

1.實作5個工具：計算機、天氣、web_search、file_read、send_email
2. 建構具有平行函數呼叫的代理
3. 寫出好的工具描述－比較清晰和模糊的描述
4. 實作 tool_choice="required" 與 "auto" 並觀察差異

