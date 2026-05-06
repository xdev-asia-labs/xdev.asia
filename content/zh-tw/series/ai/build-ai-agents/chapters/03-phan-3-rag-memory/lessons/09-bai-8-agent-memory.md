---
id: 019c9619-cc08-7008-d008-cc0800000008
title: 第 8 課：代理記憶－短期、長期與情景
slug: bai-8-agent-memory
description: 記憶類型：對話緩衝區、摘要記憶、實體記憶。使用 DB 向量實現長期記憶。情景記憶允許代理從經驗中「學習」。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 7
section_title: 第 3 部分：RAG 和內存 — 為 Agent 提供內存
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: 建構 AI 代理：從零到生產
  slug: build-ai-agents
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🧠 人工智慧與機器學習 — 第 7 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 8 課：代理記憶－短期，</tspan>
      <tspan x="60" dy="42">長期和間歇性</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">建構 AI 代理：從零到生產</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：RAG 和內存 — 為 Agent 提供內存</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

記憶將代理從「金魚」（每次對話後都忘記）變成了真正的助手——記住偏好，從錯誤中學習，並隨著時間的推移積累知識。

---

## 1. 記憶體類型

### 1.1 短期記憶（工作記憶）
- 目前會話中的對話歷史記錄
- 受上下文視窗限制

### 1.2 長期記憶
- 跨會話持續存在
- 儲存在向量DB或資料庫中
- 例如：使用者偏好、重要事實

### 1.3 情景記憶
- 記住「情節」－代理完成任務的時間
- 幫助代理商從經驗中學習
- “上次用戶問同樣的事情時，我這樣做了並且成功了”

## 2. 實施

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

## 總結

- 3種類型的記憶：短期（對話）、長期（事實）、情境（經驗）
- 向量資料庫是長期記憶和情景記憶的支柱
- 摘要記憶有助於將長對話融入情境窗口
- 情景記憶有助於代理隨著時間的推移而改進

## 練習

1. 實作完整的AgentMemory類
2. 建立一個能夠跨會話「記住」使用者偏好的代理
3. 實施情景記憶，測試代理人會改善嗎？
4. 比較：長對話的緩衝記憶體與摘要記憶體

