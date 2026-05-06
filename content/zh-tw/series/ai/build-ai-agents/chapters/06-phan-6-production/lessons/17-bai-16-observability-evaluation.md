---
id: 019c9619-cc16-7016-d016-cc1600000016
title: 第 16 課：可觀察性與評估－監控智能體的“想法”
slug: bai-16-observability-evaluation
description: >-
  使用 LangSmith、Langfuse 追蹤代理決策。日誌記錄、指標、成本追蹤。評估：法學碩士作為法官、黃金測試集、人工評估。 A/B
  測試代理程式提示。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 15
section_title: 第 6 部分：生產與實際部署
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: 建構 AI 代理：從零到生產
  slug: build-ai-agents
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2825" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2825)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1023" cy="239" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="946" cy="222" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="869" cy="205" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="792" cy="188" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="715" cy="171" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="229" x2="1100" y2="309" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="259" x2="1050" y2="329" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="967.1051177665153,107 967.1051177665153,151 929,173 890.8948822334847,151 890.8948822334847,107.00000000000001 929,85" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🧠 人工智慧與機器學習 — 第 15 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 16 課：可觀察性與評估 — 根據</tspan>
      <tspan x="60" dy="42">觀察特工“怎麼想”</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">建構 AI 代理：從零到生產</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 6 部分：生產與實際部署</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

對於生產代理來說，「它可以在我的筆記型電腦上運行」是不夠的。您需要**了解**代理在想什麼，為什麼選擇該工具，並以系統的方式**衡量**輸出品質。

---

## 1. 可觀測性堆疊

### 1.1 追踪
```python
from langsmith import traceable

@traceable(name="research_agent")
def run_agent(query):
    # Mọi LLM call, tool call đều được trace
    ...
```

### 1.2 關鍵指標
- **延遲**：第一個令牌的時間，總回應時間
- **成本**：每個請求的成本、每日預算使用情況
- **成功率**：成功完成的任務百分比
- **工具使用**：哪些工具呼叫最多，失敗率

## 2. 評估

### 2.1 法學碩士法官
```python
def evaluate_output(task, agent_output, reference_output):
    judge_prompt = f"""
    Evaluate agent output on a scale of 1-5:
    Task: {task}
    Agent output: {agent_output}
    Reference: {reference_output}
    
    Score: [1-5]
    Reasoning: [why]
    """
    return call_llm(judge_prompt)
```

---

## 總結

- 可觀察性 = 追蹤 + 日誌記錄 + 指標 + 成本追蹤
- LangSmith / Langfuse 用於代理追蹤
- 評估：法學碩士作為法官、黃金套裝、人類評估
- A/B 測試提示/最佳化工具

## 練習

1. 為代理設定 LangSmith 跟踪
2. 建立自訂儀表板：成本、延遲、成功率
3. 建立黃金測試集（20個案例）並執行評估
4. A/B測試2個不同的系統提示

