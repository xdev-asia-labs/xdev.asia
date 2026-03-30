---
id: 019c9619-cc06-7006-d006-cc0600000006
title: 'Bài 6: The Agent Loop — Thought-Action-Observation Cycle'
slug: bai-6-the-agent-loop
description: >-
  Implement vòng lặp agent hoàn chỉnh từ đầu bằng Python thuần: ReAct pattern, xử lý multi-step reasoning, conversation history management, token budget, và stopping conditions.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 5
section_title: "Phần 2: Function Calling & Tool Use"
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: "Build AI Agents: Từ Zero đến Production"
  slug: build-ai-agents
---

## Giới thiệu

Đây là bài quan trọng nhất của series — bạn sẽ **implement agent loop hoàn chỉnh từ đầu**, không dùng bất kỳ framework nào. Hiểu sâu vòng lặp này sẽ giúp bạn debug và tối ưu agent hiệu quả hơn khi dùng framework sau này.

---

## 1. The Agent Loop — Core Architecture

```python
class SimpleAgent:
    def __init__(self, model="gpt-4o-mini", max_steps=10):
        self.client = OpenAI()
        self.model = model
        self.max_steps = max_steps
        self.tools = ToolRegistry()
        self.messages = []
        self.cost_tracker = CostTracker()
    
    def run(self, user_input: str) -> str:
        self.messages = [
            {"role": "system", "content": self.system_prompt},
            {"role": "user", "content": user_input}
        ]
        
        for step in range(self.max_steps):
            response = self.client.chat.completions.create(
                model=self.model,
                messages=self.messages,
                tools=self.tools.schemas,
            )
            
            message = response.choices[0].message
            self.messages.append(message)
            self.cost_tracker.track(self.model, response.usage)
            
            # No tool calls → final answer
            if not message.tool_calls:
                return message.content
            
            # Execute tools
            for tool_call in message.tool_calls:
                result = self.tools.execute(
                    tool_call.function.name,
                    json.loads(tool_call.function.arguments)
                )
                self.messages.append({
                    "role": "tool",
                    "tool_call_id": tool_call.id,
                    "content": str(result),
                })
        
        return "Max steps reached without final answer."
```

---

## 2. Token Budget Management

```python
def trim_messages(messages, max_tokens=100000):
    """Giữ messages trong budget token."""
    # Luôn giữ system prompt và user message gần nhất
    essential = [messages[0], messages[-1]]
    middle = messages[1:-1]
    
    # Xóa messages cũ nhất nếu vượt budget
    while estimate_tokens(essential + middle) > max_tokens and middle:
        middle.pop(0)
    
    return [essential[0]] + middle + [essential[1]]
```

---

## 3. Stopping Conditions

Agent cần biết khi nào dừng:

1. **LLM tự quyết định dừng** (không gọi thêm tool)
2. **Max steps reached** — safety net
3. **Token budget exceeded** — tránh chi phí bất ngờ
4. **Error threshold** — quá nhiều tool failures liên tiếp
5. **User interrupt** — human-in-the-loop

---

## Tóm tắt

- Agent loop = while loop gọi LLM → check tool_calls → execute → repeat
- Token budget management ngăn agent "phát hoang"
- Multiple stopping conditions cho safety
- Logging mọi step để debug

## Bài tập

1. Implement SimpleAgent class hoàn chỉnh với 5+ tools
2. Thêm token budget management
3. Thêm conversation history persistence (save/load từ file)
4. Test với task phức tạp cần 5+ steps

