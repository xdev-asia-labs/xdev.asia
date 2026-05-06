---
id: 019c9619-cc03-7003-d003-cc0300000003
title: 第 3 課：代理人的提示工程 — 系統提示與角色
slug: bai-3-prompt-engineering-cho-agent
description: 為代理程式編寫有效的系統提示：定義角色、邊界、輸出模式。思想鏈、少量鏡頭和格式相容的 LLM 壓制技術。 ReAct 提示模式。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: 第 1 部分：代理平台 — 建置前了解
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: 建構 AI 代理：從零到生產
  slug: build-ai-agents
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7894" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7894)"/>

  <!-- Decorations -->
  <g>
    <circle cx="972" cy="166" r="10" fill="#f87171" opacity="0.11"/>
    <circle cx="844" cy="38" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="716" cy="170" r="12" fill="#f87171" opacity="0.13"/>
    <circle cx="1088" cy="42" r="28" fill="#f87171" opacity="0.09"/>
    <circle cx="960" cy="174" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="206" x2="1100" y2="286" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="236" x2="1050" y2="306" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1041.507041555162,185.5 1041.507041555162,226.5 1006,247 970.492958444838,226.5 970.492958444838,185.5 1006,165" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 人工智慧與機器學習 — 第 2 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 3 課：代理的快速工程 —</tspan>
      <tspan x="60" dy="42">系統提示和角色</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">建構 AI 代理：從零到生產</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：代理平台 — 建置前了解</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

Agent 的提示工程與聊天機器人的提示完全不同。代理需要**清晰、結構化且可靠的指令** - 因為 LLM 輸出將直接決定操作（工具呼叫、決策），而不僅僅是文字。

---

## 1. 系統提示架構

### 1.1 Agent 的系統提示結構

```
┌──────────────────────────────────┐
│  1. IDENTITY & ROLE              │  "Bạn là Research Assistant..."
│  2. CAPABILITIES                 │  "Bạn có thể: search, calculate..."
│  3. CONSTRAINTS & BOUNDARIES     │  "Không bao giờ: delete files..."
│  4. OUTPUT FORMAT                │  "Trả lời theo JSON schema..."
│  5. BEHAVIORAL RULES             │  "Luôn xác nhận trước khi act..."
│  6. EXAMPLES (few-shot)          │  "Ví dụ: user hỏi X → bạn làm Y"
└──────────────────────────────────┘
```

### 1.2 完整的系統提示範例

```python
AGENT_SYSTEM_PROMPT = """
# Identity
Bạn là Research Agent — chuyên tìm kiếm và tổng hợp thông tin.

# Capabilities
Bạn có access vào các tools sau:
- `web_search(query)`: Tìm kiếm trên internet
- `read_url(url)`: Đọc nội dung một trang web
- `take_note(content)`: Lưu ghi chú vào memory

# Constraints
- KHÔNG BAO GIỜ bịa thông tin. Nếu không tìm thấy, nói rõ.
- Luôn cite nguồn (URL) khi trích dẫn.
- Giới hạn tối đa 5 lần search cho mỗi câu hỏi.

# Output Format
Trả lời cuối cùng theo format:
## Kết quả nghiên cứu
[Nội dung tổng hợp]

### Nguồn tham khảo
1. [Tên] - URL
2. [Tên] - URL

# Behavioral Rules
1. Trước khi search, phân tích câu hỏi và lên kế hoạch.
2. Search từ tổng quát → cụ thể.
3. Cross-check thông tin từ ít nhất 2 nguồn.
"""
```

---

## 2.ReAct 提示模式

ReAct = **Re**asoning + **Act**ing - 代理程式最強的模式。

```
Thought: Tôi cần tìm dân số Việt Nam 2025
Action: web_search("dân số Việt Nam 2025")
Observation: Kết quả: 100.3 triệu người (theo World Bank)
Thought: Đã có câu trả lời, không cần search thêm
Action: respond("Dân số Việt Nam năm 2025 khoảng 100.3 triệu người")
```

### 實作 React

```python
REACT_PROMPT = """
Bạn là AI Agent. Với mỗi bước, hãy:

Thought: [Suy nghĩ về bước tiếp theo]
Action: [Chọn tool và tham số]

Sau khi nhận observation, tiếp tục:

Thought: [Đánh giá kết quả]
Action: [Tool tiếp theo HOẶC respond() nếu đã đủ]

QUAN TRỌNG:
- Không bao giờ skip Thought
- Tối đa 5 actions
- Respond khi đã đủ thông tin
"""
```

---

## 3.角色工程

### 為什麼角色對特務來說很重要？

角色直接影響代理人如何做決策：

```python
# Agent với persona "cẩn thận"
careful_agent = "Bạn là Senior Security Analyst. Luôn verify trước khi act. Khi nghi ngờ, hỏi lại user."

# Agent với persona "nhanh gọn"
fast_agent = "Bạn là Speed Researcher. Ưu tiên tốc độ. Trả lời ngắn gọn, đúng trọng tâm."

# Agent với persona "sáng tạo"
creative_agent = "Bạn là Creative Director. Nghĩ ngoài khuôn khổ. Đề xuất giải pháp bất ngờ."
```

---

## 4. 對代理人的少量提示

```python
FEW_SHOT_EXAMPLES = """
# Ví dụ 1:
User: "Ai là CEO của OpenAI?"
Thought: Đây là câu hỏi factual đơn giản, tôi có thể trả lời ngay
Action: respond("CEO của OpenAI là Sam Altman")

# Ví dụ 2:
User: "So sánh giá vé máy bay Hà Nội - Sài Gòn tuần này"
Thought: Cần dữ liệu real-time, tôi phải search
Action: web_search("giá vé máy bay Hà Nội Sài Gòn tuần này 2025")
Observation: [kết quả]
Thought: Đã có dữ liệu, tổng hợp và trả lời
Action: respond("[kết quả tổng hợp]")
"""
```

---

## 總結

- 系統提示代理需求**清晰的結構**：身分、能力、限制、格式、規則
- **ReAct**（推理 + 行動）是每個智能體的基本模式
- 人物角色直接影響代理人的行為與決策
- 少量範例可協助代理人了解如何正確使用工具
- 始終設定**邊界和約束** - 不受控制的代理會帶來麻煩

## 練習

1. 使用 3 個工具編寫「客戶支援代理」的系統提示：search_faq、create_ticket、escalate_to_ human
2.在Python中實現完整的ReAct循環（無框架）
3. 比較改變角色時的反應品質（仔細、快速、創造性）
4. 為您選擇的代理程式建立 5 個小樣本範例

