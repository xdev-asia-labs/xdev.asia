---
id: 019c9619-cc11-7011-d011-cc1100000011
title: 'Bài 11: Advanced Patterns — Planning, Reflection & Self-Correction'
slug: bai-11-advanced-patterns
description: >-
  Pattern nâng cao: Plan-and-Execute, Tree-of-Thought planning, Self-Reflection loops, Critic-and-Revise. Implement agent tự đánh giá và sửa lỗi output của mình.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 10
section_title: "Phần 4: Agentic Frameworks"
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: "Build AI Agents: Từ Zero đến Production"
  slug: build-ai-agents
---

## Giới thiệu

Agent cơ bản hoạt động theo kiểu "nghĩ 1 bước, làm 1 bước". Agent nâng cao cần biết **lên kế hoạch**, **tự đánh giá**, và **tự sửa lỗi**. Bài này cover các design patterns quan trọng nhất.

---

## 1. Plan-and-Execute Pattern

```
User Request → Planner (tạo plan) → Executor (thực hiện từng step) → Re-planner (adjust)
```

## 2. Self-Reflection / Critic Loop

```python
def reflect_and_improve(agent_output, original_task):
    critic_prompt = f"""
    Task: {original_task}
    Agent Output: {agent_output}
    
    Evaluate:
    1. Does it fully answer the task? (completeness)
    2. Is the information accurate? (accuracy)
    3. Is it well-structured? (quality)
    
    If issues found, provide specific improvements.
    """
    feedback = call_llm(critic_prompt)
    
    if "APPROVED" in feedback:
        return agent_output
    else:
        improved = call_llm(f"Improve based on feedback: {feedback}")
        return improved
```

## 3. Tree-of-Thought

Thay vì 1 chain of thought, explore **nhiều nhánh** suy nghĩ song song, rồi chọn nhánh tốt nhất.

---

## Tóm tắt

- Plan-and-Execute: lên kế hoạch trước, thực hiện sau
- Self-Reflection: critic loop cải thiện output quality
- Tree-of-Thought: explore nhiều reasoning paths
- Combine patterns cho agent mạnh nhất

## Bài tập

1. Implement Plan-and-Execute agent
2. Thêm self-reflection loop (max 3 iterations)
3. So sánh output quality: with vs without reflection
4. Implement Tree-of-Thought cho math problem solving

