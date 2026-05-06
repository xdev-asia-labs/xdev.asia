---
id: 019c9619-cc01-7001-d001-cc0100000001
title: 'Lesson 1: What is an agent? — From Chatbots to Autonomous AI'
slug: bai-1-agent-la-gi
description: >-
  Defining AI Agent, distinguishing between chatbot vs agent vs copilot.
  Perceive-Reason-Plan-Act Loop. Types of agents: reactive, deliberative,
  hybrid. The simplest demo agent with Python.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 0
section_title: 'Part 1: Agent Platform — Understand before building'
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: 'Build AI Agents: From Zero to Production'
  slug: build-ai-agents
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9745" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9745)"/>

  <!-- Decorations -->
  <g>
    <circle cx="979" cy="267" r="22" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="858" cy="86" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="737" cy="165" r="36" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="616" cy="244" r="13" fill="#818cf8" opacity="0.13"/>
    <circle cx="995" cy="63" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="117" x2="1100" y2="197" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="147" x2="1050" y2="217" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="994.712812921102,151 994.712812921102,183 967,199 939.287187078898,183 939.287187078898,151 967,135" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🧠 AI & ML — Lesson 0</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 1: What is an agent? — From Chatbot comes</tspan>
      <tspan x="60" dy="42">Autonomous AI</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Build AI Agents: From Zero to Production</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: Agent Platform — Understand before building</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

You have used ChatGPT. You've seen AI answer questions, write code, compose emails. But imagine — instead of just answering, AI can **act on its own**: search for information on the web, call APIs, read databases, send emails, and even self-correct when it fails.

That is **AI Agent** — the hottest topic in the AI ​​world in 2025–2026.

---

## 1. What is an agent?

### 1.1 Definition

**AI Agent** is a system that uses LLM (Large Language Model) as the "brain" to:

1. **Perceive**: Understand input from the user or environment
2. **Reason**: Analyze the situation, make a plan
3. **Act** (Action): Execute actions through tools/APIs
4. **Learn** (Study): Save results to memory for improvement next time

```
                    ┌─────────────┐
                    │   USER      │
                    │   INPUT     │
                    └──────┬──────┘
                           │
                    ┌──────▼──────┐
              ┌────►│  PERCEIVE   │
              │     └──────┬──────┘
              │            │
              │     ┌──────▼──────┐
              │     │   REASON    │◄────── Memory
              │     │   & PLAN    │
              │     └──────┬──────┘
              │            │
              │     ┌──────▼──────┐
              │     │    ACT      │────── Tools
              │     │  (Execute)  │       (APIs, DB, Web...)
              │     └──────┬──────┘
              │            │
              │     ┌──────▼──────┐
              └─────│  OBSERVE    │
                    │  (Result)   │
                    └──────┬──────┘
                           │
                    ┌──────▼──────┐
                    │   OUTPUT    │
                    └─────────────┘
```

### 1.2 Practical example

**Not an agent:** You ask ChatGPT "How is the weather in Saigon today?" → ChatGPT answers based on training data (may be wrong).

**As an agent:** You ask the same question → Agent calls Weather API → gets real data → accurately answers temperature 34°C, with afternoon rain.

---

## 2. Chatbot vs Agent vs Copilot — Clear distinction

| | Chatbots | Copilot | Agent |
|---|---|---|---|
| **How ​​it works** | Answer questions | Suggestions, support | Self-action |
| **Interactive world** | No | Limitations | Full (tools, APIs) |
| **Level of autonomy** | Very low | Average | Cao |
| **Decision Making** | User decides | Recommended, the user selects | Agent decides (may need approval) |
| **Memory** | In conversation | Session-based | Short + Long-term |
| **Example** | ChatGPT basic | GitHub Copilot | Devin, Claude Computer Use |

### Autonomy Spectrum

```
Chatbot ◄──────────── Copilot ──────────►  Agent
  │                     │                    │
  │ "Trả lời câu hỏi"  │ "Gợi ý & hỗ trợ" │ "Tự thực hiện"
  │                     │                    │
  │ Q&A đơn giản        │ Code completion    │ Research & report
  │ Dịch thuật          │ Email drafting     │ Order processing
  │ Tóm tắt             │ Bug suggestion     │ Automated testing
```

---

## 3. Types of AI Agents

### 3.1 Simple Reflex Agent
- React directly to current input
- No memory, no planning
- For example: Chatbot FAQ, rule-based bot

### 3.2 Model-Based Reflex Agent
- Maintains an internal "model" of the world state
- Can handle incomplete information
- For example: Customer support bot knows conversation context

### 3.3 Goal-Based Agent
- Have clear goals to achieve
- Make an action plan (planning)
- For example: Travel booking agent — find the cheapest ticket within your budget

### 3.4 Utility-Based Agent
- Not only achieving the goal but optimizing "utility" (satisfaction)
- Compare and choose the best option
- Example: Portfolio management agent — maximum return/risk ratio

### 3.5 Learning Agents
- Self-improvement through experience
- Use feedback loops
- For example: Agent learns how to write better code after each review

---

## 4. Basic Agent Architecture

Every agent has 4 main components:

```
┌──────────────────────────────────────────────┐
│                  AI AGENT                     │
│                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │   LLM    │  │  TOOLS   │  │  MEMORY  │   │
│  │  (Brain) │  │  (Hands) │  │  (Mind)  │   │
│  └──────────┘  └──────────┘  └──────────┘   │
│                                              │
│  ┌──────────────────────────────────────┐    │
│  │        ORCHESTRATION LOGIC           │    │
│  │   (Agent Loop / State Machine)       │    │
│  └──────────────────────────────────────┘    │
└──────────────────────────────────────────────┘
```

### 4.1 LLM (Brain)
The brain makes decisions. LLM decides: which tool to call? With what parameters? Are the results enough?

### 4.2 Tools (Hands)
Tools for agents to interact with the world: Web Search, Calculator, Database Query, API calls, File I/O, Code Execution...

### 4.3 Memory
- **Short-term:** Conversation history in the current session
- **Long-term:** Knowledge accumulated over many sessions (vector DB)

### 4.4 Orchestration Logic
Control loop: receive input → call LLM → select tool → execute → check result → repeat or return.

---

## 5. Demo: The simplest agent with Python

Build the simplest agent possible — using only pure Python and the OpenAI API.

### 5.1 Setup

```bash
pip install openai
```

### 5.2 Code

```python
import json
from openai import OpenAI

client = OpenAI()  # Dùng OPENAI_API_KEY từ env

# Step 1: Định nghĩa tools
tools = [
    {
        "type": "function",
        "function": {
            "name": "get_weather",
            "description": "Lấy thời tiết hiện tại của một thành phố",
            "parameters": {
                "type": "object",
                "properties": {
                    "city": {
                        "type": "string",
                        "description": "Tên thành phố, ví dụ: Ho Chi Minh City"
                    }
                },
                "required": ["city"]
            }
        }
    },
    {
        "type": "function",
        "function": {
            "name": "calculate",
            "description": "Tính toán biểu thức toán học",
            "parameters": {
                "type": "object",
                "properties": {
                    "expression": {
                        "type": "string",
                        "description": "Biểu thức cần tính, ví dụ: 2 + 3 * 4"
                    }
                },
                "required": ["expression"]
            }
        }
    }
]

# Step 2: Implement tool functions
def get_weather(city: str) -> str:
    """Fake weather API cho demo"""
    weather_data = {
        "Ho Chi Minh City": {"temp": 34, "condition": "Nắng, mưa chiều"},
        "Hanoi": {"temp": 28, "condition": "Nhiều mây, ẩm"},
        "Da Nang": {"temp": 30, "condition": "Nắng đẹp"},
    }
    data = weather_data.get(city, {"temp": 25, "condition": "Không có dữ liệu"})
    return json.dumps(data, ensure_ascii=False)

def calculate(expression: str) -> str:
    """Simple calculator"""
    try:
        result = eval(expression)  # ⚠️ Dùng eval cho demo, production cần sandbox
        return json.dumps({"result": result})
    except Exception as e:
        return json.dumps({"error": str(e)})

# Step 3: Tool dispatcher
tool_functions = {
    "get_weather": get_weather,
    "calculate": calculate,
}

# Step 4: The Agent Loop
def run_agent(user_message: str):
    print(f"\n{'='*60}")
    print(f"👤 User: {user_message}")
    print(f"{'='*60}")

    messages = [
        {"role": "system", "content": "Bạn là một AI assistant thông minh. "
         "Hãy sử dụng tools khi cần để trả lời chính xác."},
        {"role": "user", "content": user_message}
    ]

    # Agent loop — tối đa 5 vòng
    for step in range(5):
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=messages,
            tools=tools,
        )
        
        message = response.choices[0].message
        messages.append(message)

        # Nếu LLM không gọi tool → trả lời cuối cùng
        if not message.tool_calls:
            print(f"\n🤖 Agent: {message.content}")
            return message.content

        # Nếu LLM gọi tool(s)
        for tool_call in message.tool_calls:
            func_name = tool_call.function.name
            func_args = json.loads(tool_call.function.arguments)
            
            print(f"\n🔧 Tool call [{step+1}]: {func_name}({func_args})")
            
            # Thực thi tool
            result = tool_functions[func_name](**func_args)
            print(f"   📦 Result: {result}")

            # Trả kết quả về cho LLM
            messages.append({
                "role": "tool",
                "tool_call_id": tool_call.id,
                "content": result,
            })

    return "Agent loop exceeded maximum steps."

# Step 5: Test
if __name__ == "__main__":
    run_agent("Thời tiết Sài Gòn hôm nay thế nào?")
    run_agent("Tính cho tôi: (15 * 7) + (23 * 3) - 42")
    run_agent("So sánh thời tiết Hà Nội và Đà Nẵng, thành phố nào nóng hơn bao nhiêu độ?")
```

### 5.3 Expected output

```
============================================================
👤 User: Thời tiết Sài Gòn hôm nay thế nào?
============================================================

🔧 Tool call [1]: get_weather({"city": "Ho Chi Minh City"})
   📦 Result: {"temp": 34, "condition": "Nắng, mưa chiều"}

🤖 Agent: Thời tiết Sài Gòn hôm nay: **34°C**, trời nắng và có thể mưa vào buổi chiều. 
   Nhớ mang ô khi ra ngoài nhé! ☀️🌧️
```

Pay attention to the third question — the agent will call `get_weather` **twice** (for Hanoi and Da Nang), then **compare** the results. This is the power of agents: multi-step reasoning + tool use.

---

## 6. Agent Trends 2025–2026

### 6.1 Where is Agentic AI?

```
2023: Chatbots (Q&A, content generation)
2024: Copilots (code assist, writing assist)
2025: Single Agents (autonomous task completion)
2026: Multi-Agent Systems (coordinated agent teams)
```

### 6.2 Important milestones

| Time | Events |
|-----------|---------|
| March 2024 | Devin — The first (controversial) "AI Software Engineer" |
| June 2024 | Claude 3.5 Sonnet + Tool Use — game changer for agents |
| October 2024 | Claude Computer Use — computer control agent |
| November 2024 | Anthropic MCP — open-source connectivity standard |
| April 2025 | Google A2A Protocol — agents communicate with each other |
| 2025–2026 | Multi-Agent Platforms Race |

### 6.3 Why should you learn now?

- **No need to know deep ML/DL**: Agents mainly use LLM via API — you need engineering skills, no need to train models
- **Extremely high demand**: "AI Agent Developer" is the most sought after skill set
- **Low barrier, high ceiling**: Starts simple but can build extremely complex systems
- **Practical**: Apply immediately to work — automation, research, content, coding...

---

## Lesson summary

- **AI Agent** = LLM + Tools + Memory + Orchestration Logic
- Agents differ from chatbots in their ability to **act on their own** with the outside world
- Core loop: Perceive → Reason → Act → Observe → (repeat)
- 5 types of agents: Simple Reflex → Model-Based → Goal-Based → Utility-Based → Learning
- Coded the simplest agent with OpenAI Function Calling
- 2025–2026 is the era of Agentic AI — the right time to start

## Exercises

1. Run the demo agent in part 5 and try asking more complex questions (need to call many tools)
2. Add a new tool: `search_web(query)` — returns simulation results. Does the agent know when to use it?
3. Think of 3 use cases the agent can solve in your daily work
4. Read the blog post "What are AI Agents?" on the Anthropic site
