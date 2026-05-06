---
id: 019c9619-cc04-7004-d004-cc0400000004
title: 'レッスン 4: 関数呼び出し — エージェントに「手と足」を与える'
slug: bai-4-function-calling
description: >-
  関数呼び出し・ツール OpenAI、Anthropic、Geminiの仕組みを利用します。ツール スキーマ (JSON) を定義し、tool_calls
  を処理し、並列関数呼び出しを行います。計算エージェントと気象エージェントを構築します。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 3
section_title: 'パート 2: 関数呼び出しとツールの使用'
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: 'AI エージェントの構築: ゼロから本番環境まで'
  slug: build-ai-agents
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-14" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-14)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1035" cy="255" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="970" cy="70" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="905" cy="145" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="840" cy="220" r="33" fill="#fb923c" opacity="0.05"/>
    <circle cx="775" cy="35" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="205" x2="1100" y2="285" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="235" x2="1050" y2="305" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="939.6410161513776,85 939.6410161513776,125 905,145 870.3589838486224,125 870.3589838486224,85.00000000000001 905,65" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🧠 AI と ML — レッスン 3</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 4: 関数呼び出し — エージェントに「任せる」</tspan>
      <tspan x="60" dy="42">足」</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI エージェントの構築: ゼロから本番環境まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: 関数呼び出しとツールの使用</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

Function Calling は、LLM をテキスト ジェネレーターからエージェントに変える **スーパーパワー** です。 LLM は、テキストで応答するだけでなく、構造化された JSON を出力して、定義した関数/ツールを呼び出すことができます。この記事では、3 つの主要プロバイダーすべての関数呼び出しメカニズムについて詳しく説明します。

---

## 1. 関数呼び出しはどのように機能しますか?

```
┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐
│  User    │────►│   LLM    │────►│  Your    │────►│   LLM    │────► Final
│  Prompt  │     │ (Choose  │     │  Code    │     │ (Process │     Response
│          │     │  tools)  │     │ (Execute)│     │  result) │
└──────────┘     └──────────┘     └──────────┘     └──────────┘
                  Output:          Output:
                  tool_calls[]     tool results
```

### 重要な洞察
LLM は **実際には関数を呼び出しません**。 「関数 X を引数 Y で呼び出したい」という JSON を出力するだけです。 **コード**は実際に関数を呼び出し、結果を LLM に返します。

---

## 2. OpenAI 関数の呼び出し

### 2.1 ツールの定義

```python
tools = [
    {
        "type": "function",
        "function": {
            "name": "search_products",
            "description": "Tìm kiếm sản phẩm trong database",
            "parameters": {
                "type": "object",
                "properties": {
                    "query": {"type": "string", "description": "Từ khóa tìm kiếm"},
                    "category": {"type": "string", "enum": ["electronics", "clothing", "books"]},
                    "max_price": {"type": "number", "description": "Giá tối đa (VND)"},
                    "sort_by": {"type": "string", "enum": ["price_asc", "price_desc", "rating"]}
                },
                "required": ["query"]
            }
        }
    }
]
```

### 2.2 並列関数呼び出し

同時に多くの情報が必要な場合、LLM は **複数のツールを並行して** 呼び出すことができます。

```python
# User: "So sánh thời tiết Hà Nội, Đà Nẵng và Sài Gòn"
# LLM sẽ output 3 tool_calls cùng lúc!
for tool_call in message.tool_calls:
    # tool_call 1: get_weather("Hanoi")
    # tool_call 2: get_weather("Da Nang")
    # tool_call 3: get_weather("Ho Chi Minh City")
    ...
```

---

## 3. 人間の道具の使用

Claude は、異なる構文を使用しますが、同じ概念を使用します。

```python
response = anthropic_client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    tools=[{
        "name": "search_products",
        "description": "Tìm kiếm sản phẩm",
        "input_schema": {
            "type": "object",
            "properties": {
                "query": {"type": "string"},
                "category": {"type": "string"}
            },
            "required": ["query"]
        }
    }],
    messages=[{"role": "user", "content": "Tìm laptop dưới 20 triệu"}]
)
```

---

## 4. ビルドツールのレジストリパターン

```python
class ToolRegistry:
    def __init__(self):
        self.tools = {}
        self.schemas = []
    
    def register(self, name, description, parameters):
        def decorator(func):
            self.tools[name] = func
            self.schemas.append({
                "type": "function",
                "function": {
                    "name": name,
                    "description": description,
                    "parameters": parameters
                }
            })
            return func
        return decorator
    
    def execute(self, name, args):
        return self.tools[name](**args)

registry = ToolRegistry()

@registry.register("get_weather", "Lấy thời tiết", {
    "type": "object",
    "properties": {"city": {"type": "string"}},
    "required": ["city"]
})
def get_weather(city):
    return f"Thời tiết {city}: 32°C, nắng"
```

---

## 概要

- 関数呼び出し = LLM 出力 JSON → コードが実行 → 結果が LLM に返される
- オープンAI: `tools` パラメータ + `tool_calls` 応答。応答
- 人間性: `tools` パラメータ + `tool_use` コンテンツブロック
- 並行通話により、エージェントの処理が高速化されます
- ツール レジストリ パターンはツールを適切に管理するのに役立ちます

## 演習

1. 5 つのツールを実装します: 電卓、天気、web_search、file_read、send_email
2. 並列関数呼び出しを使用してエージェントを構築する
3. 適切なツールの説明を書く — 明確な説明と曖昧な説明を比較する
4.tool_choice="required" と "auto" を実装し、違いを観察します。

