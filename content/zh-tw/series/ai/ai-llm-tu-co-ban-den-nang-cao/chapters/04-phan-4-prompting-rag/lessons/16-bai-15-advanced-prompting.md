---
id: 019c9619-bb15-7015-c015-bb1500000015
title: 第 15 課：進階提示 — CoT、ToT、ReAct
slug: bai-15-advanced-prompting
description: 進階提示技巧：思想鏈、思想樹、自我一致性、反應模式。透過法學碩士解決複雜的問題。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 14
section_title: 第 4 部分：提示和 RAG
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: 人工智慧和法學碩士：從基礎到高級
  slug: ai-llm-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4304" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4304)"/>

  <!-- Decorations -->
  <g>
    <circle cx="779" cy="47" r="12" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="958" cy="226" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="637" cy="145" r="16" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="816" cy="64" r="33" fill="#818cf8" opacity="0.13"/>
    <circle cx="995" cy="243" r="20" fill="#818cf8" opacity="0.1"/>
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
    <line x1="600" y1="217" x2="1100" y2="297" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="247" x2="1050" y2="317" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="944.712812921102,101 944.712812921102,133 917,149 889.287187078898,133 889.287187078898,101.00000000000001 917,85" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🧠 人工智慧與機器學習 — 第 14 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 15 課：進階提示 — CoT、ToT、</tspan>
      <tspan x="60" dy="42">反應</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">人工智慧和法學碩士：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：提示和 RAG</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 概述

當任務很複雜時——多步驟數學、邏輯推理、編碼——標準提示是不夠的。高級提示技術幫助法學碩士“一步一步思考”而不是猜測。

---

## 1. 思想鏈 (CoT)

### 偵測

魏等人。 （2022）發現：只要加上*「讓我們一步一步思考」*或給出一個帶有推理的例子，模型就能更好地解決問題。

### 零樣本 CoT

```python
from openai import OpenAI
client = OpenAI()

def ask(prompt, model="gpt-4o"):
    resp = client.chat.completions.create(
        model=model,
        messages=[{"role": "user", "content": prompt}]
    )
    return resp.choices[0].message.content

# Không có CoT → sai
bad = ask("Roger có 5 quả bóng tennis. Anh ấy mua 2 hộp nữa, "
          "mỗi hộp 3 quả. Hỏi Roger có bao nhiêu quả bóng?")
# Có thể trả lời "8" (sai)

# Có CoT → đúng
good = ask("Roger có 5 quả bóng tennis. Anh ấy mua 2 hộp nữa, "
           "mỗi hộp 3 quả. Hỏi Roger có bao nhiêu quả bóng?\n\n"
           "Hãy suy nghĩ từng bước:")
# "Bước 1: Roger ban đầu có 5 quả
#  Bước 2: Mua 2 hộp × 3 quả = 6 quả
#  Bước 3: Tổng = 5 + 6 = 11 quả"  ✅
```

### 少量 CoT

```python
few_shot_cot = """Q: Cửa hàng có 15 táo. Bán 3 rổ mỗi rổ 4 quả. Còn lại bao nhiêu?
A: Bước 1: Số táo đã bán = 3 rổ × 4 quả = 12 quả
   Bước 2: Còn lại = 15 - 12 = 3 quả
   Đáp án: 3 quả

Q: Xe tải chở 30 thùng hàng. Dỡ xuống 7 thùng tại điểm A, nhận thêm 5 thùng.
   Tại điểm B dỡ 12 thùng. Còn bao nhiêu thùng?
A:"""

# Model sẽ tự động follow pattern step-by-step
```

---

## 2. 自洽

在高溫下**多次**運行CoT，獲得**多數票**：

```python
from collections import Counter
import re

def self_consistency(question: str, n_samples: int = 5) -> str:
    """Chạy n lần, lấy đáp án xuất hiện nhiều nhất"""
    answers = []

    for _ in range(n_samples):
        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[{"role": "user", "content": f"{question}\n\nHãy suy nghĩ từng bước:"}],
            temperature=0.7  # Diversity
        )
        text = response.choices[0].message.content

        # Extract final answer (customize theo task)
        match = re.search(r'(?:đáp án|kết quả|answer)[:=\s]+(\S+)', text, re.IGNORECASE)
        if match:
            answers.append(match.group(1))

    # Majority vote
    if answers:
        most_common = Counter(answers).most_common(1)[0][0]
        return most_common
    return "Không tìm được đáp án"

result = self_consistency(
    "Tính: (15 + 7) × 3 - 12 ÷ 4",
    n_samples=5
)
print(f"Đáp án: {result}")  # "63"
```

**何時使用：**重要問題，接受更高的延遲和成本。

---

## 3. 思想樹 (ToT)

CoT 遵循單一路徑。 ToT **探索推理的多個分支**並評估每個分支：

```
                     [Problem]
                    /    |    \
               [Path1] [Path2] [Path3]
              /   \      |      /  \
           [A1]  [A2]  [B1]  [C1] [C2]
            ↓     ✗    ↓      ✗    ↓
          [A1a]       [B1a]       [C2a]  ← Best path
```

```python
def tree_of_thought(problem: str, n_thoughts: int = 3, depth: int = 2) -> str:
    """Simplified ToT implementation"""

    def generate_thoughts(state: str, n: int) -> list[str]:
        """Generate n candidate next thoughts"""
        prompt = f"""Bài toán: {problem}

Trạng thái hiện tại: {state}

Đề xuất {n} hướng giải quyết tiếp theo khác nhau.
Format: 1. ... | 2. ... | 3. ..."""
        resp = client.chat.completions.create(
            model="gpt-4o",
            messages=[{"role": "user", "content": prompt}],
            temperature=0.8
        )
        text = resp.choices[0].message.content
        return [t.strip() for t in text.split("|")]

    def evaluate_thought(thought: str) -> float:
        """Score a thought path (0-1)"""
        prompt = f"""Đánh giá mức độ hứa hẹn của hướng giải này (0-10):
Bài toán: {problem}
Hướng giải: {thought}
Chỉ trả về một số từ 0-10."""
        resp = client.chat.completions.create(
            model="gpt-4o",
            messages=[{"role": "user", "content": prompt}],
            temperature=0
        )
        try:
            return float(resp.choices[0].message.content.strip()) / 10
        except:
            return 0.5

    # BFS: expand best thoughts
    current_thoughts = ["Bắt đầu phân tích bài toán"]
    for _ in range(depth):
        all_expansions = []
        for thought in current_thoughts:
            expansions = generate_thoughts(thought, n_thoughts)
            scored = [(e, evaluate_thought(e)) for e in expansions]
            all_expansions.extend(scored)

        # Keep top n_thoughts
        all_expansions.sort(key=lambda x: x[1], reverse=True)
        current_thoughts = [t for t, _ in all_expansions[:n_thoughts]]

    return current_thoughts[0]  # Best path
```

---

## 4.ReAct（理性+行動）

ReAct 將**推理**和**操作**（呼叫工具）結合在一個循環中：

```
Thought: Tôi cần tìm dân số Việt Nam
Action: search("dân số Việt Nam 2024")
Observation: Kết quả: ~98 triệu người
Thought: Tôi có đủ thông tin để trả lời
Answer: Dân số Việt Nam năm 2024 khoảng 98 triệu người
```

```python
from openai import OpenAI
import json

client = OpenAI()

# Định nghĩa tools
tools = [
    {
        "type": "function",
        "function": {
            "name": "search_web",
            "description": "Tìm kiếm thông tin trên web",
            "parameters": {
                "type": "object",
                "properties": {
                    "query": {"type": "string", "description": "Search query"}
                },
                "required": ["query"]
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
                    "expression": {"type": "string"}
                },
                "required": ["expression"]
            }
        }
    }
]

def execute_tool(name: str, args: dict) -> str:
    """Thực thi tool và trả về kết quả"""
    if name == "search_web":
        # Trong thực tế: gọi search API (SerpAPI, Tavily, etc.)
        return f"[Mock] Kết quả tìm kiếm cho '{args['query']}': ..."
    elif name == "calculate":
        try:
            result = eval(args["expression"])  # Chỉ demo, không dùng eval production!
            return str(result)
        except Exception as e:
            return f"Error: {e}"
    return "Tool không tồn tại"

def react_agent(user_question: str, max_iterations: int = 5) -> str:
    """ReAct agent loop"""
    messages = [
        {"role": "system", "content": "Bạn là assistant thông minh. Dùng tools khi cần thiết."},
        {"role": "user", "content": user_question}
    ]

    for iteration in range(max_iterations):
        response = client.chat.completions.create(
            model="gpt-4o",
            messages=messages,
            tools=tools,
            tool_choice="auto"
        )

        msg = response.choices[0].message

        # Không có tool call → trả lời cuối
        if not msg.tool_calls:
            return msg.content

        # Có tool calls → thực thi và loop tiếp
        messages.append(msg)
        for tool_call in msg.tool_calls:
            args = json.loads(tool_call.function.arguments)
            result = execute_tool(tool_call.function.name, args)
            messages.append({
                "role": "tool",
                "tool_call_id": tool_call.id,
                "content": result
            })

    return "Đã hết số vòng lặp tối đa"

# Chạy
answer = react_agent("Tính GDP bình quân đầu người của Việt Nam năm 2023?")
print(answer)
```

---

## 5.反思與自我批評

```python
def with_reflection(question: str) -> str:
    """Generate → Critique → Improve"""

    # Bước 1: Initial response
    initial = client.chat.completions.create(
        model="gpt-4o",
        messages=[{"role": "user", "content": question}]
    ).choices[0].message.content

    # Bước 2: Tự phê bình
    critique = client.chat.completions.create(
        model="gpt-4o",
        messages=[
            {"role": "user", "content": question},
            {"role": "assistant", "content": initial},
            {"role": "user", "content": "Hãy phê bình câu trả lời trên. "
             "Chỉ ra điểm yếu, thiếu sót, hoặc có thể cải thiện."}
        ]
    ).choices[0].message.content

    # Bước 3: Cải thiện dựa trên critique
    improved = client.chat.completions.create(
        model="gpt-4o",
        messages=[
            {"role": "user", "content": question},
            {"role": "assistant", "content": initial},
            {"role": "user", "content": f"Phê bình: {critique}\n\nViết lại câu trả lời cải thiện:"}
        ]
    ).choices[0].message.content

    return improved
```

---

## 6. 比較技術

|工程|成本（代幣）|延遲 |適合 |
|--------|-----------------|--------|---------|
|標準|最低|最快|簡單的任務 |
|零射擊 CoT |低|快|數學，基本邏輯 |
|少樣本 CoT |平均 |平均 |任務有特定的模式 |
|自我一致性|高（×N）|慢（×N）|重要的準確度|
|托特|非常高|很慢|複雜規劃|
|反應 |平均 |變化|工具使用、搜尋|
|反思|高 (×3) |慢|品質關鍵的輸出 |

---

## 總結

```
Nguyên tắc chọn kỹ thuật:
- Task đơn giản           → Standard / Zero-shot CoT
- Math / Logic / Coding   → Few-shot CoT hoặc Self-Consistency
- Cần external knowledge  → ReAct với search tool
- Complex multi-step      → ToT hoặc Reflection
- Accuracy > Speed        → Self-Consistency (majority vote)
```

**下一篇：** RAG（Retrieval Augmented Generation）－解決LLM不知道新資訊和私有資料的問題。
