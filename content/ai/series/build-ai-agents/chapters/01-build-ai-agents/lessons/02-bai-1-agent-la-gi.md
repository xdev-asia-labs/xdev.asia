---
id: 019c9619-cc01-7001-d001-cc0100000001
title: 'Bài 1: Agent là gì? — Từ Chatbot đến Autonomous AI'
slug: bai-1-agent-la-gi
description: >-
  Định nghĩa AI Agent, phân biệt chatbot vs agent vs copilot. Vòng lặp
  Perceive-Reason-Plan-Act. Các loại agent: reactive, deliberative,
  hybrid. Demo agent đơn giản nhất với Python.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 0
section_title: "Phần 1: Nền tảng Agent — Hiểu trước khi xây"
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: "Build AI Agents: Từ Zero đến Production"
  slug: build-ai-agents
---

## Giới thiệu

Bạn đã dùng ChatGPT. Bạn đã thấy AI trả lời câu hỏi, viết code, soạn email. Nhưng hãy tưởng tượng — thay vì chỉ trả lời, AI có thể **tự hành động**: tìm kiếm thông tin trên web, gọi API, đọc database, gửi email, và thậm chí tự sửa lỗi khi thất bại.

Đó chính là **AI Agent** — chủ đề nóng nhất trong thế giới AI năm 2025–2026.

---

## 1. Agent là gì?

### 1.1 Định nghĩa

**AI Agent** là một hệ thống sử dụng LLM (Large Language Model) làm "bộ não" để:

1. **Perceive** (Nhận thức): Hiểu input từ người dùng hoặc môi trường
2. **Reason** (Suy luận): Phân tích tình huống, lên kế hoạch
3. **Act** (Hành động): Thực thi hành động thông qua tools/APIs
4. **Learn** (Học): Lưu kết quả vào memory để cải thiện lần sau

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

### 1.2 Ví dụ thực tế

**Không phải agent:** Bạn hỏi ChatGPT "Hôm nay thời tiết Sài Gòn thế nào?" → ChatGPT trả lời dựa trên training data (có thể sai).

**Là agent:** Bạn hỏi cùng câu đó → Agent gọi Weather API → lấy dữ liệu thực → trả lời chính xác nhiệt độ 34°C, có mưa chiều.

---

## 2. Chatbot vs Agent vs Copilot — Phân biệt rõ ràng

| | Chatbot | Copilot | Agent |
|---|---|---|---|
| **Cách hoạt động** | Trả lời câu hỏi | Gợi ý, hỗ trợ | Tự hành động |
| **Tương tác world** | Không | Hạn chế | Đầy đủ (tools, APIs) |
| **Mức tự chủ** | Rất thấp | Trung bình | Cao |
| **Ra quyết định** | Người dùng quyết định | Đề xuất, người dùng chọn | Agent quyết định (có thể cần approval) |
| **Memory** | Trong conversation | Session-based | Short + Long-term |
| **Ví dụ** | ChatGPT basic | GitHub Copilot | Devin, Claude Computer Use |

### Phổ tự chủ (Autonomy Spectrum)

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

## 3. Các loại AI Agent

### 3.1 Simple Reflex Agent
- Phản ứng trực tiếp với input hiện tại
- Không có memory, không lên kế hoạch
- Ví dụ: Chatbot FAQ, rule-based bot

### 3.2 Model-Based Reflex Agent
- Duy trì "model" nội bộ về trạng thái thế giới
- Có thể xử lý thông tin không đầy đủ
- Ví dụ: Customer support bot biết context conversation

### 3.3 Goal-Based Agent
- Có mục tiêu rõ ràng cần đạt được
- Lên kế hoạch hành động (planning)
- Ví dụ: Travel booking agent — tìm vé rẻ nhất trong budget

### 3.4 Utility-Based Agent
- Không chỉ đạt mục tiêu mà tối ưu "utility" (satisfaction)
- So sánh và chọn phương án tốt nhất
- Ví dụ: Portfolio management agent — tối đa return/risk ratio

### 3.5 Learning Agent
- Tự cải thiện qua kinh nghiệm
- Sử dụng feedback loops
- Ví dụ: Agent học cách viết code tốt hơn sau mỗi lần review

---

## 4. Kiến trúc Agent cơ bản

Mọi agent đều có 4 thành phần chính:

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
Bộ não ra quyết định. LLM quyết định: cần gọi tool nào? với tham số gì? kết quả đã đủ chưa?

### 4.2 Tools (Hands)
Công cụ để agent tương tác với thế giới: Web Search, Calculator, Database Query, API calls, File I/O, Code Execution...

### 4.3 Memory
- **Short-term:** Conversation history trong session hiện tại
- **Long-term:** Kiến thức tích luỹ qua nhiều sessions (vector DB)

### 4.4 Orchestration Logic
Vòng lặp điều khiển: nhận input → gọi LLM → chọn tool → thực thi → kiểm tra kết quả → lặp lại hoặc trả về.

---

## 5. Demo: Agent đơn giản nhất với Python

Hãy xây dựng agent đơn giản nhất có thể — chỉ dùng Python thuần và OpenAI API.

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

### 5.3 Output mong đợi

```
============================================================
👤 User: Thời tiết Sài Gòn hôm nay thế nào?
============================================================

🔧 Tool call [1]: get_weather({"city": "Ho Chi Minh City"})
   📦 Result: {"temp": 34, "condition": "Nắng, mưa chiều"}

🤖 Agent: Thời tiết Sài Gòn hôm nay: **34°C**, trời nắng và có thể mưa vào buổi chiều. 
   Nhớ mang ô khi ra ngoài nhé! ☀️🌧️
```

Chú ý câu hỏi thứ 3 — agent sẽ gọi `get_weather` **hai lần** (cho Hà Nội và Đà Nẵng), rồi **tự so sánh** kết quả. Đây chính là sức mạnh của agent: multi-step reasoning + tool use.

---

## 6. Xu hướng Agent 2025–2026

### 6.1 Agentic AI đang ở đâu?

```
2023: Chatbots (Q&A, content generation)
2024: Copilots (code assist, writing assist)
2025: Single Agents (autonomous task completion)
2026: Multi-Agent Systems (coordinated agent teams)
```

### 6.2 Các milestone quan trọng

| Thời gian | Sự kiện |
|-----------|---------|
| 03/2024 | Devin — "AI Software Engineer" đầu tiên (gây tranh cãi) |
| 06/2024 | Claude 3.5 Sonnet + Tool Use — game changer cho agent |
| 10/2024 | Claude Computer Use — agent điều khiển máy tính |
| 11/2024 | Anthropic MCP — chuẩn kết nối open-source |
| 04/2025 | Google A2A Protocol — agent giao tiếp với nhau |
| 2025–2026 | Cuộc đua Multi-Agent Platforms |

### 6.3 Tại sao nên học ngay?

- **Không cần biết ML/DL sâu**: Agent chủ yếu dùng LLM qua API — bạn cần engineering skills, không cần train model
- **Demand cực cao**: "AI Agent Developer" là skill set được săn đón nhất
- **Barrier thấp, ceiling cao**: Bắt đầu đơn giản nhưng có thể xây hệ thống cực phức tạp
- **Practical**: Ứng dụng ngay vào công việc — automation, research, content, coding...

---

## Tóm tắt bài học

- **AI Agent** = LLM + Tools + Memory + Orchestration Logic
- Agent khác chatbot ở khả năng **tự hành động** với thế giới bên ngoài
- Vòng lặp cốt lõi: Perceive → Reason → Act → Observe → (lặp lại)
- 5 loại agent: Simple Reflex → Model-Based → Goal-Based → Utility-Based → Learning
- Đã code được agent đơn giản nhất với OpenAI Function Calling
- 2025–2026 là kỷ nguyên của Agentic AI — đúng thời điểm để bắt đầu

## Bài tập

1. Chạy demo agent ở phần 5 và thử đặt câu hỏi phức tạp hơn (cần gọi nhiều tools)
2. Thêm một tool mới: `search_web(query)` — trả về kết quả giả lập. Agent có tự biết khi nào cần dùng không?
3. Nghĩ ra 3 use case agent có thể giải quyết trong công việc hàng ngày của bạn
4. Đọc blog post "What are AI Agents?" trên trang Anthropic
