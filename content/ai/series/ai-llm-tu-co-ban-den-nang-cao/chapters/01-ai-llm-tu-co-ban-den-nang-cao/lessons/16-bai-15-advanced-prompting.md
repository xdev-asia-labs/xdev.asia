---
id: 019c9619-bb15-7015-c015-bb1500000015
title: 'Bài 15: Advanced Prompting — CoT, ToT, ReAct'
slug: bai-15-advanced-prompting
description: >-
  Kỹ thuật prompting nâng cao: Chain-of-Thought, Tree-of-Thought,
  Self-Consistency, ReAct pattern. Giải quyết bài toán phức tạp với LLMs.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 14
section_title: "Phần 4: Prompting & RAG"
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: "AI & LLM: Từ Cơ bản đến Nâng cao"
  slug: ai-llm-tu-co-ban-den-nang-cao
---

## Tổng quan

Khi task phức tạp — toán nhiều bước, lập luận logic, coding — standard prompting không đủ. Các kỹ thuật Advanced Prompting giúp LLM "suy nghĩ từng bước" thay vì đoán mò.

---

## 1. Chain-of-Thought (CoT)

### Phát hiện

Wei et al. (2022) phát hiện: chỉ cần thêm *"Let's think step by step"* hoặc cho ví dụ có reasoning, model giải được bài toán tốt hơn nhiều.

### Zero-shot CoT

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

### Few-shot CoT

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

## 2. Self-Consistency

Chạy CoT **nhiều lần** với temperature cao, lấy **majority vote**:

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

**Khi nào dùng:** Bài toán quan trọng, chấp nhận latency và cost cao hơn.

---

## 3. Tree-of-Thought (ToT)

CoT đi theo một con đường duy nhất. ToT **khám phá nhiều nhánh suy luận** và đánh giá từng nhánh:

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

## 4. ReAct (Reason + Act)

ReAct kết hợp **suy luận** và **hành động** (gọi tools) trong một vòng lặp:

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

## 5. Reflection và Self-critique

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

## 6. So sánh các kỹ thuật

| Kỹ thuật | Chi phí (tokens) | Latency | Tốt cho |
|---------|-----------------|---------|---------|
| Standard | Thấp nhất | Nhanh nhất | Task đơn giản |
| Zero-shot CoT | Thấp | Nhanh | Math, logic cơ bản |
| Few-shot CoT | Trung bình | Trung bình | Task có pattern cụ thể |
| Self-Consistency | Cao (×N) | Chậm (×N) | Accuracy quan trọng |
| ToT | Rất cao | Rất chậm | Complex planning |
| ReAct | Trung bình | Biến thiên | Tool use, search |
| Reflection | Cao (×3) | Chậm | Quality-critical output |

---

## Tổng kết

```
Nguyên tắc chọn kỹ thuật:
- Task đơn giản           → Standard / Zero-shot CoT
- Math / Logic / Coding   → Few-shot CoT hoặc Self-Consistency
- Cần external knowledge  → ReAct với search tool
- Complex multi-step      → ToT hoặc Reflection
- Accuracy > Speed        → Self-Consistency (majority vote)
```

**Bài tiếp theo:** RAG (Retrieval Augmented Generation) — giải pháp cho vấn đề LLM không biết thông tin mới và private data.
