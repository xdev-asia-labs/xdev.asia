---
id: 019c9619-cc08-7008-d008-cc0800000008
title: 'Lesson 8: Agent Memory — Short-term, Long-term & Episodic'
slug: bai-8-agent-memory
description: >-
  Types of memory: conversation buffer, summary memory, entity memory. Implement
  long-term memory with DB vector. Episodic memory allows the agent to "learn"
  from experience.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 7
section_title: 'Part 3: RAG & Memory — Give Agent memory'
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: 'Build AI Agents: From Zero to Production'
  slug: build-ai-agents
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9194" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9194)"/>

  <!-- Decorations -->
  <g>
    <circle cx="713" cy="229" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="826" cy="122" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="939" cy="275" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="1052" cy="168" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="665" cy="61" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="99" x2="1100" y2="179" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="129" x2="1050" y2="199" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1078.444863728671,232 1078.444863728671,266 1049,283 1019.555136271329,266 1019.555136271329,232 1049,215" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🧠 AI & ML — Lesson 7</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 8: Agent Memory — Short-term,</tspan>
      <tspan x="60" dy="42">Long-term & Episodic</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Build AI Agents: From Zero to Production</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: RAG & Memory — Give Agent memory</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

Memory turns agents from "goldfish" (forgetting after each conversation) into true assistants — remembering preferences, learning from mistakes, and accumulating knowledge over time.

---

## 1. Types of Memory

### 1.1 Short-term Memory (Working Memory)
- Conversation history in the current session
- Limited by context window

### 1.2 Long-term Memory
- Persistent across sessions
- Save in vector DB or database
- For example: user preferences, important facts

### 1.3 Episodic Memory
- Remember "episodes" — the times the agent completes the task
- Help agents learn from experience
- "Last time a user asked the same thing, I did this and it worked"

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

## Summary

- 3 types of memory: short-term (conversation), long-term (facts), episodic (experiences)
- Vector DB is the backbone for long-term and episodic memory
- Summary memory helps fit long conversations into the context window
- Episodic memory helps agents improve over time

## Exercises

1. Implement the full AgentMemory class
2. Build an agent that "remembers" user preferences across sessions
3. Implement episodic memory and will the test agent improve?
4. Comparison: buffer memory vs summary memory for long conversations

