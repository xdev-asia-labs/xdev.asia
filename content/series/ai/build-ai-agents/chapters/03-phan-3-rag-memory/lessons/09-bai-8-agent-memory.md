---
id: 019c9619-cc08-7008-d008-cc0800000008
title: 'Bài 8: Agent Memory — Short-term, Long-term & Episodic'
slug: bai-8-agent-memory
description: >-
  Các loại memory: conversation buffer, summary memory, entity memory. Implement long-term memory với vector DB. Episodic memory để agent "học" từ kinh nghiệm.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 7
section_title: "Phần 3: RAG & Memory — Cho Agent trí nhớ"
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: "Build AI Agents: Từ Zero đến Production"
  slug: build-ai-agents
---

## Giới thiệu

Memory biến agent từ "goldfish" (quên sau mỗi conversation) thành assistant thực sự — nhớ preferences, học từ sai lầm, và tích luỹ kiến thức qua thời gian.

---

## 1. Các loại Memory

### 1.1 Short-term Memory (Working Memory)
- Conversation history trong session hiện tại
- Giới hạn bởi context window

### 1.2 Long-term Memory
- Persistent across sessions
- Lưu trong vector DB hoặc database
- Ví dụ: user preferences, important facts

### 1.3 Episodic Memory
- Nhớ các "episodes" — những lần agent hoàn thành task
- Giúp agent học từ kinh nghiệm
- "Lần trước user hỏi tương tự, tôi đã làm thế này và thành công"

## 2. Implementation

```python
class AgentMemory:
    def __init__(self):
        self.short_term = []
        self.long_term = chromadb.Collection("long_term")
        self.episodes = chromadb.Collection("episodes")
    
    def remember(self, content, memory_type="long_term"):
        if memory_type == "long_term":
            self.long_term.add(documents=[content], ...)
    
    def recall(self, query, n=5):
        return self.long_term.query(query_texts=[query], n_results=n)
    
    def save_episode(self, task, steps, outcome):
        episode = f"Task: {task}\nSteps: {steps}\nOutcome: {outcome}"
        self.episodes.add(documents=[episode], ...)
```

---

## Tóm tắt

- 3 loại memory: short-term (conversation), long-term (facts), episodic (experiences)
- Vector DB là backbone cho long-term và episodic memory
- Summary memory giúp fit conversation dài vào context window
- Episodic memory giúp agent cải thiện qua thời gian

## Bài tập

1. Implement AgentMemory class đầy đủ
2. Xây agent "nhớ" preferences của user across sessions
3. Implement episodic memory và test agent có improve không
4. So sánh: buffer memory vs summary memory cho long conversations

