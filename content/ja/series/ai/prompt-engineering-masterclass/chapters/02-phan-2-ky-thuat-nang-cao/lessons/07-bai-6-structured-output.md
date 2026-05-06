---
id: 019c9619-ee06-7006-f006-ee0600000006
title: 'レッスン 6: 構造化出力 — JSON モード、スキーマ、検証'
slug: bai-6-structured-output
description: >-
  AI が構造に従って出力を返すようにします: JSON モード、JSON スキーマ、関数呼び出し。検証出力、再試行ロジック、Pydantic +
  インストラクター。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 5
section_title: 'パート 2: 高度なテクニック'
course:
  id: 019c9619-aa04-7004-b004-aa0400000004
  title: 'プロンプト エンジニアリング マスタークラス: AI にコマンドを与える技術'
  slug: prompt-engineering-masterclass
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3133" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3133)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1073" cy="69" r="16" fill="#c084fc" opacity="0.14"/>
    <circle cx="1046" cy="82" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="1019" cy="95" r="24" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="992" cy="108" r="13" fill="#c084fc" opacity="0.11"/>
    <circle cx="965" cy="121" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="79" x2="1100" y2="159" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="109" x2="1050" y2="179" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1008.444863728671,162 1008.444863728671,196 979,213 949.555136271329,196 949.555136271329,162 979,145" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🧠 AI と ML — レッスン 5</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 6: 構造化出力 — JSON モード、</tspan>
      <tspan x="60" dy="42">スキーマと検証</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">プロンプト エンジニアリング マスタークラス: AI にコマンドを与える技術</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: 高度なテクニック</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

AIはフリーテキストで回答→コードで解析するのが難しい。実稼働環境では、下流システムが処理するための **構造化** 出力 (JSON、テーブル、固定リストなど) が必要です。

> **例:** 「レビューの感情を分析する」 → AI は「これは肯定的なレビューです」と回答します (フリーテキスト、解析は困難)。構造化された出力: `{"sentiment": "positive", "score": 0.85, "keywords": ["tốt", "nhanh"]}` → コード解析が簡単！

この記事の内容は次のとおりです。
1. **JSON モード** — AI に JSON を強制的に返す
2. **JSON スキーマ** — 正確な構造を定義する
3. **関数呼び出し** — ツールの使用による構造化された出力
4. **Pydantic + Instructor** — タイプセーフな検証

---

## 1. JSON モード — AI が JSON を返すようにする

### 1.1 基本的なプロンプト

```
❌ Prompt kém:
"Phân tích review này và cho biết sentiment"
→ AI: "Review này có sentiment tích cực vì người dùng khen sản phẩm tốt..."

✅ Prompt tốt:
"Phân tích review này. Trả lời CHÍNH XÁC bằng JSON:
{
  "sentiment": "positive" | "negative" | "neutral",
  "score": 0.0-1.0,
  "keywords": ["từ khóa 1", "từ khóa 2"],
  "summary": "tóm tắt 1 câu"
}"
→ AI: {"sentiment": "positive", "score": 0.85, "keywords": ["tốt", "nhanh"], "summary": "..."}
```

### 1.2 OpenAI JSON モード

```python
"""OpenAI JSON Mode — đảm bảo output là valid JSON"""
from openai import OpenAI

client = OpenAI()

response = client.chat.completions.create(
    model="gpt-4o-mini",
    response_format={"type": "json_object"},  # ← JSON Mode ON
    messages=[
        {"role": "system", "content": "Trả lời bằng JSON."},
        {"role": "user", "content": """Phân tích sentiment:
Review: "Sản phẩm tốt, giao hàng nhanh, sẽ mua lại!"

JSON format:
{"sentiment": "positive|negative|neutral", "score": 0-1, "keywords": [...]}"""},
    ],
)

import json
result = json.loads(response.choices[0].message.content)
print(result)
# {"sentiment": "positive", "score": 0.92, "keywords": ["tốt", "nhanh", "mua lại"]}
```

### 1.3 JSON モードの問題

```
JSON Mode chỉ đảm bảo output là VALID JSON,
KHÔNG đảm bảo schema đúng!

Bạn yêu cầu: {"sentiment": "...", "score": ...}
AI có thể trả: {"feeling": "good", "rating": 5}  ← Sai field names!

→ Cần JSON Schema để enforce cấu trúc chính xác.
```

---

## 2. JSON スキーマ — 構造化出力

### 2.1 OpenAI 構造化出力 (2024+)

```python
"""Structured Outputs: define schema, AI PHẢI tuân thủ"""
from openai import OpenAI
from pydantic import BaseModel

class SentimentAnalysis(BaseModel):
    sentiment: str  # "positive", "negative", "neutral"
    score: float    # 0.0 - 1.0
    keywords: list[str]
    summary: str

client = OpenAI()

response = client.beta.chat.completions.parse(
    model="gpt-4o-mini",
    messages=[
        {"role": "system", "content": "Phân tích sentiment review."},
        {"role": "user", "content": "Sản phẩm tốt, giao hàng nhanh!"},
    ],
    response_format=SentimentAnalysis,  # ← Schema enforcement
)

result = response.choices[0].message.parsed
print(result.sentiment)   # "positive"
print(result.score)       # 0.92
print(result.keywords)    # ["tốt", "nhanh"]
```

### 2.2 複雑なスキーマ

```python
"""Schema phức tạp: nested objects, enums, optional fields"""
from pydantic import BaseModel, Field
from typing import Optional
from enum import Enum

class Sentiment(str, Enum):
    positive = "positive"
    negative = "negative"
    neutral = "neutral"

class Aspect(BaseModel):
    category: str = Field(description="Khía cạnh: quality, price, delivery, service")
    sentiment: Sentiment
    text: str = Field(description="Đoạn text liên quan")

class ReviewAnalysis(BaseModel):
    overall_sentiment: Sentiment
    overall_score: float = Field(ge=0, le=1, description="0=rất tiêu cực, 1=rất tích cực")
    aspects: list[Aspect] = Field(description="Phân tích từng khía cạnh")
    recommendation: bool = Field(description="Có nên mua không?")
    summary: str

# Output:
# {
#   "overall_sentiment": "positive",
#   "overall_score": 0.85,
#   "aspects": [
#     {"category": "quality", "sentiment": "positive", "text": "Sản phẩm tốt"},
#     {"category": "delivery", "sentiment": "positive", "text": "giao hàng nhanh"},
#     {"category": "price", "sentiment": "neutral", "text": "giá hợp lý"}
#   ],
#   "recommendation": true,
#   "summary": "..."
# }
```

> **💡 演習 1:** CV/履歴書から情報を抽出するためのスキーマを作成します: 名前、電子メール、スキル、経験 (リスト)、教育レベル。 3 つの異なる CV を使用してテストします。

---

## 3. 関数呼び出し

### 3.1 構造化された出力に使用するツール

```python
"""Function calling: AI "gọi function" với arguments có cấu trúc"""
from openai import OpenAI

client = OpenAI()

tools = [{
    "type": "function",
    "function": {
        "name": "save_contact",
        "description": "Lưu thông tin liên hệ",
        "parameters": {
            "type": "object",
            "properties": {
                "name": {"type": "string", "description": "Họ tên"},
                "phone": {"type": "string", "description": "Số điện thoại"},
                "email": {"type": "string", "description": "Email"},
                "company": {"type": "string", "description": "Công ty"},
            },
            "required": ["name"],
        },
    },
}]

response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[{"role": "user", "content":
        "Anh Minh, SĐT 0901234567, email minh@xdev.asia, công ty XDev"}],
    tools=tools,
    tool_choice={"type": "function", "function": {"name": "save_contact"}},
)

# AI trả về structured arguments
args = json.loads(response.choices[0].message.tool_calls[0].function.arguments)
# {"name": "Minh", "phone": "0901234567", "email": "minh@xdev.asia", "company": "XDev"}
```

### 3.2 関数呼び出しと JSON スキーマをいつ使用するか?

|特長 | JSON スキーマ |関数呼び出し |
|--------|:---:|:---:|
|出力形式 | JSON オブジェクト |関数の引数 |
|スキーマの適用 | ✅ 厳格 | ✅ 厳格 |
|複数の出力 | ❌ 1 オブジェクト | ✅ 複数のツール呼び出し |
|ストリーミング | ✅ | ✅ |
|使用例 |データ抽出 |アクション + 抽出 |

---

## 4. LangChain 構造化出力

### 4.1 with_structed_output()

```python
"""LangChain: structured output dễ dàng"""
from langchain_openai import ChatOpenAI
from pydantic import BaseModel, Field

class ExtractedInfo(BaseModel):
    """Thông tin trích xuất từ email"""
    sender: str = Field(description="Người gửi")
    subject: str = Field(description="Chủ đề")
    action_items: list[str] = Field(description="Việc cần làm")
    priority: str = Field(description="high, medium, low")
    deadline: str | None = Field(description="Deadline nếu có")

llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)
structured_llm = llm.with_structured_output(ExtractedInfo)

email = """Chào team,
Cần hoàn thành report Q3 trước thứ 6 tuần này.
Minh review data, Hùng viết slides.
Ưu tiên cao vì CEO cần trình bày thứ 2.
Thanks."""

result = structured_llm.invoke(f"Extract thông tin từ email:\n{email}")
print(result.action_items)  # ["Hoàn thành report Q3", "Review data", "Viết slides"]
print(result.priority)      # "high"
print(result.deadline)      # "Thứ 6 tuần này"
```

### 4.2 インストラクター — タイプセーフ + 再試行

```python
"""Instructor: Pydantic validation + auto retry"""
# pip install instructor
import instructor
from openai import OpenAI
from pydantic import BaseModel, field_validator

client = instructor.from_openai(OpenAI())

class UserInfo(BaseModel):
    name: str
    age: int
    email: str
    
    @field_validator("age")
    @classmethod
    def validate_age(cls, v):
        if not 0 < v < 150:
            raise ValueError("Age must be between 1 and 149")
        return v
    
    @field_validator("email")
    @classmethod
    def validate_email(cls, v):
        if "@" not in v:
            raise ValueError("Invalid email format")
        return v

# Instructor tự retry nếu validation fail!
result = client.chat.completions.create(
    model="gpt-4o-mini",
    response_model=UserInfo,
    max_retries=3,  # Retry tối đa 3 lần nếu validation fail
    messages=[{"role": "user", "content": "Minh, 30 tuổi, minh@xdev.asia"}],
)
print(result)  # UserInfo(name="Minh", age=30, email="minh@xdev.asia")
```

> **💡 演習 2:** Instructor を使用して抽出パイプラインを作成します: 入力 = 製品説明段落 → 出力 = スキーマ (名前、価格、カテゴリ、機能、評価)。バリデータを追加: 価格 > 0、評価 1 ～ 5。

---

## 5. エラー処理とエッジケース

### 5.1 再試行パターン

```python
"""Retry khi JSON parse fail"""
import json
from tenacity import retry, stop_after_attempt, retry_if_exception_type

@retry(
    stop=stop_after_attempt(3),
    retry=retry_if_exception_type(json.JSONDecodeError),
)
def extract_json(text: str, prompt: str) -> dict:
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        response_format={"type": "json_object"},
        messages=[
            {"role": "system", "content": prompt},
            {"role": "user", "content": text},
        ],
    )
    return json.loads(response.choices[0].message.content)
```

### 5.2 フォールバック戦略

```
Strategy khi structured output fail:

1. JSON Schema (strict)     ← Thử đầu tiên
   ↓ fail
2. JSON Mode + prompt       ← Fallback
   ↓ fail  
3. Text output + regex parse ← Last resort
```

---

## 概要

|コンセプト |覚えておいてください |
|----------|----------|
| **JSON モード** |スキーマを強制するのではなく、有効な JSON を確認する |
| **構造化された出力** |スキーマの強制、Pydantic モデル |
| **関数呼び出し** |ツールの使用形式、複数の呼び出し |
| **with_structed_output()** | LangChain ラッパー、使いやすい |
| **インストラクター** | Pydantic 検証 + 自動再試行 |
| **再試行** |解析が失敗した場合のテナシティーの再試行 |

## 一般的な演習

1. ✅ 2 つの小さな演習 (1、2) を完了します。
2. **電子メール分類子:** 入力 = 電子メール → 出力 = `{category, priority, action_items, sentiment, response_draft}`。 Pydantic スキーマ + 検証を使用します。 10 通のメールでテストします。
3. **データ パイプライン:** 20 件のレビューをクロール → 構造化データを抽出 (講師) → CSV に保存 → 分析。構造化出力と正規表現解析の精度を比較します。
4. **マルチモデル:** 構造化出力品質の比較: GPT-4o-mini 対 Claude 対 Gemini。どのモデルがスキーマに最もよく準拠していますか?

> **次の記事:** コード生成のためのプロンプト エンジニアリング — AI が高品質のコードを生成し、コードをレビューし、デバッグし、テストを生成するためのプロンプトを作成します。
