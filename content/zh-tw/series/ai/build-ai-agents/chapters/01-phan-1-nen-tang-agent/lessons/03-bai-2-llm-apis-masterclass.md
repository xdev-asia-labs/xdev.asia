---
id: 019c9619-cc02-7002-d002-cc0200000002
title: 第 2 課：LLM API 大師班 — OpenAI、Claude、Gemini
slug: bai-2-llm-apis-masterclass
description: 精通排名前 3 位的 LLM 的 API：身份驗證、聊天完成、串流、結構化輸出（JSON 模式）、視覺和成本優化。比較每個提供者的優缺點。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 1
section_title: 第 1 部分：代理平台 — 建置前了解
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: 建構 AI 代理：從零到生產
  slug: build-ai-agents
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9550" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9550)"/>

  <!-- Decorations -->
  <g>
    <circle cx="636" cy="38" r="34" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="672" cy="214" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="708" cy="130" r="30" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="744" cy="46" r="28" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="780" cy="222" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="178" x2="1100" y2="258" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="208" x2="1050" y2="278" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="956.5788383248864,111.5 956.5788383248864,144.5 928,161 899.4211616751136,144.5 899.4211616751135,111.50000000000001 928,95" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 人工智慧與機器學習 — 第 1 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 2 課：LLM API 大師班 — OpenAI，</tspan>
      <tspan x="60" dy="42">克勞德，雙子座</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">建構 AI 代理：從零到生產</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：代理平台 — 建置前了解</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

在建立代理之前，您需要**掌握**核心工具—LLM API。本文重點介紹三個最受歡迎的提供者：**OpenAI** (GPT-4o)、**Anthropic** (Claude 3.5 Sonnet) 和 **Google** (Gemini)。您將學習如何呼叫 API、處理流程、結構化輸出，以及最重要的 — **最佳化成本**。

---

## 1. 3 個 LLM 提供者概述

### 快速比較

| | OpenAI GPT-4o |人擇克勞德 3.5 |Google雙子座1.5 |
|---|---|---|---|
| **輸入價格** | 2.50 美元/100 萬個代幣 | 3.00 美元/100 萬代幣 | 1.25 美元/100 萬個代幣 |
| **輸出價格** | 10.00 美元/100 萬個代幣 | 15.00 美元/100 萬個代幣 | 5.00 美元/100 萬個代幣 |
| **上下文視窗** | 128K | 20萬| 1M |
| **優勢** |工具使用、編碼|推理長，安全|龐大的上下文，搜尋 |
| **願景** | ✅ | ✅ | ✅ |
| **串流** | ✅ | ✅ | ✅ |

### 什麼時候使用什麼？

- **OpenAI**：預設選擇，最大的生態系統，穩定的函數調用
- **克勞德**：當需要複雜推理、處理長文件或需要高安全性時
- **Gemini**：當您需要非常大的上下文視窗或搜尋基礎時

---

## 2.OpenAI API

### 2.1 設定與身份驗證

```bash
pip install openai
```

```python
from openai import OpenAI

# Cách 1: Environment variable (khuyến nghị)
# export OPENAI_API_KEY=sk-...
client = OpenAI()

# Cách 2: Truyền trực tiếp
client = OpenAI(api_key="sk-...")
```

### 2.2 聊天完成 — 基本

```python
response = client.chat.completions.create(
    model="gpt-4o-mini",  # Rẻ và nhanh, đủ cho hầu hết use case
    messages=[
        {"role": "system", "content": "Bạn là trợ lý AI nói tiếng Việt."},
        {"role": "user", "content": "Giải thích AI Agent trong 3 câu."}
    ],
    temperature=0.7,       # Creativity level (0 = deterministic, 2 = creative)
    max_tokens=500,        # Giới hạn output
)

print(response.choices[0].message.content)
print(f"Tokens used: {response.usage.total_tokens}")
print(f"Cost: ~${response.usage.total_tokens * 0.00000015:.6f}")
```

### 2.3 串流媒體

```python
stream = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[{"role": "user", "content": "Viết một bài thơ về AI"}],
    stream=True,
)

for chunk in stream:
    if chunk.choices[0].delta.content:
        print(chunk.choices[0].delta.content, end="", flush=True)
```

### 2.4 結構化輸出（JSON模式）

```python
from pydantic import BaseModel

class AgentStep(BaseModel):
    thought: str
    action: str
    tool_name: str | None
    tool_args: dict | None

response = client.beta.chat.completions.parse(
    model="gpt-4o-mini",
    messages=[
        {"role": "system", "content": "Analyze the user request and plan the next agent step."},
        {"role": "user", "content": "Find the weather in Hanoi and compare with Saigon"},
    ],
    response_format=AgentStep,
)

step = response.choices[0].message.parsed
print(f"Thought: {step.thought}")
print(f"Action: {step.action}")
print(f"Tool: {step.tool_name}({step.tool_args})")
```

---

## 3. 人類克勞德 API

### 3.1 設置

```bash
pip install anthropic
```

```python
from anthropic import Anthropic

client = Anthropic()  # Dùng ANTHROPIC_API_KEY env var
```

### 3.2 訊息API

```python
message = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    system="Bạn là trợ lý AI cho developer Việt Nam.",
    messages=[
        {"role": "user", "content": "So sánh LangChain vs LangGraph"}
    ]
)

print(message.content[0].text)
print(f"Input tokens: {message.usage.input_tokens}")
print(f"Output tokens: {message.usage.output_tokens}")
```

### 3.3 串流媒體

```python
with client.messages.stream(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Explain ReAct pattern"}]
) as stream:
    for text in stream.text_stream:
        print(text, end="", flush=True)
```

---

## 4. 谷歌雙子座 API

### 4.1 設置

```bash
pip install google-genai
```

```python
from google import genai

client = genai.Client()  # Dùng GOOGLE_API_KEY env var
```

### 4.2 產生內容

```python
response = client.models.generate_content(
    model="gemini-2.0-flash",
    contents="Giải thích MCP protocol cho AI Agents"
)
print(response.text)
```

---

## 5. 代理商開發的最佳實踐

### 5.1 選擇合適的型號

```python
# Quy tắc ngón tay cái:
MODEL_SELECTION = {
    "simple_tasks": "gpt-4o-mini",      # Rẻ, nhanh
    "complex_reasoning": "claude-sonnet-4-20250514",  # Chính xác
    "long_context": "gemini-1.5-pro",    # 1M tokens
    "tool_calling": "gpt-4o",            # Ổn định nhất
    "cost_sensitive": "gpt-4o-mini",     # Rẻ nhất
}
```

### 5.2 錯誤處理

```python
from openai import RateLimitError, APIError
import time

def call_llm_with_retry(messages, max_retries=3):
    for attempt in range(max_retries):
        try:
            return client.chat.completions.create(
                model="gpt-4o-mini",
                messages=messages,
            )
        except RateLimitError:
            wait = 2 ** attempt
            print(f"Rate limited. Waiting {wait}s...")
            time.sleep(wait)
        except APIError as e:
            print(f"API error: {e}")
            raise
    raise Exception("Max retries exceeded")
```

### 5.3 成本跟踪

```python
class CostTracker:
    PRICING = {
        "gpt-4o-mini": {"input": 0.15/1e6, "output": 0.60/1e6},
        "gpt-4o": {"input": 2.50/1e6, "output": 10.00/1e6},
    }
    
    def __init__(self):
        self.total_cost = 0
    
    def track(self, model, usage):
        pricing = self.PRICING.get(model, {"input": 0, "output": 0})
        cost = (usage.prompt_tokens * pricing["input"] + 
                usage.completion_tokens * pricing["output"])
        self.total_cost += cost
        return cost

tracker = CostTracker()
```

---

## 總結

- 精通3個LLM API：OpenAI、Anthropic、Google Gemini
- 知道何時使用哪種模型（成本與能力權衡）
- 串流、結構化輸出、錯誤處理－為代理開發做好準備
- 建立代理程式時**需要**成本追蹤（代理程式多次呼叫LLM！）

## 練習

1. 寫一個包裝函數，使用相同的介面呼叫所有 3 個提供者
2. 比較3個模型對於相同複雜提示的反應質量
3. 實施成本追蹤器並執行 10 個請求，計算總成本
4.嘗試結構化輸出：強制LLM回傳具有特定模式的JSON
