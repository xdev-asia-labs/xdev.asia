---
id: 019c9619-cc03-7003-d003-cc0300000003
title: 'レッスン 3: エージェント向けのプロンプト エンジニアリング — システム プロンプトとペルソナ'
slug: bai-3-prompt-engineering-cho-agent
description: >-
  エージェント向けに効果的なシステム プロンプトを作成します。ペルソナ、境界、出力スキーマを定義します。思考連鎖、少数ショット、フォーマット準拠の LLM
  プレス技術。 ReAct プロンプト パターン。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: 'パート 1: エージェント プラットフォーム — 構築する前に理解する'
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: 'AI エージェントの構築: ゼロから本番環境まで'
  slug: build-ai-agents
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 AI と ML — レッスン 2</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 3: エージェント向けの迅速なエンジニアリング —</tspan>
      <tspan x="60" dy="42">システムプロンプトとペルソナ</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI エージェントの構築: ゼロから本番環境まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: エージェント プラットフォーム — 構築する前に理解する</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

エージェントのプロンプト エンジニアリングは、チャットボットのプロンプトとはまったく異なります。エージェントは **明確で構造化された信頼性の高い指示**を必要とします。LLM の出力はテキストだけでなくアクション (ツールの呼び出し、決定) を直接決定するためです。

---

## 1. システム プロンプト アーキテクチャ

### 1.1 エージェントのシステム プロンプト構造

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

### 1.2 完全なシステム プロンプトの例

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

## 2. ReAct プロンプトパターン

ReAct = **Re**asoning + **Act**ing — エージェントにとって最も強力なパターン。

```
Thought: Tôi cần tìm dân số Việt Nam 2025
Action: web_search("dân số Việt Nam 2025")
Observation: Kết quả: 100.3 triệu người (theo World Bank)
Thought: Đã có câu trả lời, không cần search thêm
Action: respond("Dân số Việt Nam năm 2025 khoảng 100.3 triệu người")
```

### ReAct を実装する

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

## 3. ペルソナエンジニアリング

### エージェントにとってペルソナが重要なのはなぜですか?

ペルソナは、エージェントがどのように意思決定を行うかに直接影響します。

```python
# Agent với persona "cẩn thận"
careful_agent = "Bạn là Senior Security Analyst. Luôn verify trước khi act. Khi nghi ngờ, hỏi lại user."

# Agent với persona "nhanh gọn"
fast_agent = "Bạn là Speed Researcher. Ưu tiên tốc độ. Trả lời ngắn gọn, đúng trọng tâm."

# Agent với persona "sáng tạo"
creative_agent = "Bạn là Creative Director. Nghĩ ngoài khuôn khổ. Đề xuất giải pháp bất ngờ."
```

---

## 4. エージェントに対する数回のプロンプト

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

## 概要

- エージェント用のシステム プロンプトには **明確な構造**が必要です: ID、機能、制約、形式、ルール
- **ReAct** (推論 + 行動) はすべてのエージェントの基本パターンです
- ペルソナはエージェントの行動と決定に直接影響します。
- いくつかのショットの例は、エージェントがツールの適切な使用方法を理解するのに役立ちます
- 常に**境界と制約**を設定してください - 制御されていないエージェントは問題を引き起こします

## 演習

1. 3 つのツール (search_faq、create_ticket、escalate_to_human) を使用して「カスタマー サポート エージェント」のシステム プロンプトを作成します。
2. Python で完全な ReAct ループを実装します (フレームワークなし)
3. ペルソナ変更時の対応品質を比較する (慎重、迅速、創造的)
4. 選択したエージェント用に 5 つの少数ショットの例を作成します

