---
id: 019c9619-cc11-7011-d011-cc1100000011
title: 第 11 課：高階模式－規劃、反思與自我修正
slug: bai-11-advanced-patterns
description: 高階模式：計畫與執行、思想樹計畫、自我反思循環、批評與修正。實施代理評估並修正其自己的輸出。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 10
section_title: 第 4 部分：代理框架
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: 建構 AI 代理：從零到生產
  slug: build-ai-agents
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6138" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6138)"/>

  <!-- Decorations -->
  <g>
    <circle cx="636" cy="58" r="14" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="672" cy="154" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="708" cy="250" r="20" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="744" cy="86" r="8" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="780" cy="182" r="26" fill="#2dd4bf" opacity="0.05"/>
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
    <line x1="600" y1="78" x2="1100" y2="158" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="108" x2="1050" y2="178" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1006.5788383248864,161.5 1006.5788383248864,194.5 978,211 949.4211616751136,194.5 949.4211616751135,161.5 978,145" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 人工智慧與機器學習 — 第 10 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 11 課：進階模式 — 規劃、</tspan>
      <tspan x="60" dy="42">反思與自我修正</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">建構 AI 代理：從零到生產</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：代理框架</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

代理基本上以「思考 1 步，執行 1 步」的方式運作。高級代理需要知道如何**計劃**、**自我評估**和**自我糾正**。本文涵蓋了最重要的設計模式。

---

## 1. 計畫與執行模式

```
User Request → Planner (tạo plan) → Executor (thực hiện từng step) → Re-planner (adjust)
```

## 2.自我反思/批判循環

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

## 3. 思想樹

探索並行思想的**多個分支**，而不是一條思想鏈，然後選擇最佳分支。

---

## 總結

- 計劃與執行：先計劃，後執行
- 自我反思：批評循環提高輸出品質
- 思考樹：探索多種推理路徑
- 組合模式打造最強特工

## 練習

1. 實施計劃和執行代理
2.添加自反射循環（最多3次迭代）
3. 比較輸出品質：有反射與無反射
4. 運用思考樹解決數學問題

