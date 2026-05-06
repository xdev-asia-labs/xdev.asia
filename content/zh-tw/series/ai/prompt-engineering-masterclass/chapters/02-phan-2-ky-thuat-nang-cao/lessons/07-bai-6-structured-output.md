---
id: 019c9619-ee06-7006-f006-ee0600000006
title: 第 6 課：結構化輸出 — JSON 模式、架構與驗證
slug: bai-6-structured-output
description: 讓AI依照結構回傳輸出：JSON模式、JSON Schema、函數呼叫。驗證輸出、重試邏輯、Pydantic + Instructor。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 5
section_title: 第 2 部分：先進技術
course:
  id: 019c9619-aa04-7004-b004-aa0400000004
  title: 即時工程大師班：向人工智慧發出命令的藝術
  slug: prompt-engineering-masterclass
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🧠 人工智慧與機器學習 — 第 5 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 6 課：結構化輸出 — JSON 模式，</tspan>
      <tspan x="60" dy="42">架構和驗證</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">即時工程大師班：向人工智慧發出命令的藝術</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：先進技術</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

人工智慧以自由文字形式回答 → 難以用程式碼解析。在生產中，您需要**結構化**輸出：JSON、表格、固定列表...供下游系統處理。

> **範例：**「分析評論的情緒」→ AI 回答「這是一篇正面評論」（自由文本，難以解析）。結構化輸出： `{"sentiment": "positive", "score": 0.85, "keywords": ["tốt", "nhanh"]}` → 程式碼解析很簡單！

本文涵蓋：
1. **JSON模式**——強制AI回傳JSON
2. **JSON Schema** — 定義確切的結構
3. **函數呼叫**——透過工具使用的結構化輸出
4. **Pydantic + Instructor** — 類型安全驗證

---

## 1. JSON模式－讓AI回傳JSON

### 1.1 基本提示

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

### 1.2 OpenAI JSON模式

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

### 1.3 JSON模式的問題

```
JSON Mode chỉ đảm bảo output là VALID JSON,
KHÔNG đảm bảo schema đúng!

Bạn yêu cầu: {"sentiment": "...", "score": ...}
AI có thể trả: {"feeling": "good", "rating": 5}  ← Sai field names!

→ Cần JSON Schema để enforce cấu trúc chính xác.
```

---

## 2. JSON 模式 — 結構化輸出

### 2.1 OpenAI 結構化輸出 (2024+)

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

### 2.2 複雜模式

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

> **💡 練習 1：** 建立一個架構，用於從履歷/履歷中提取資訊：姓名、電子郵件、技能、經驗（清單）、教育程度。使用 3 個不同的 CV 進行測試。

---

## 3. 函數調用

### 3.1 結構化輸出的工具使用

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

### 3.2 何時使用函數呼叫與 JSON 模式？

|特點| JSON 架構 |函數呼叫 |
|--------|:---:|:---:|
|輸出格式| JSON 物件 |函數參數 |
|架構執行 | ✅ 嚴格 | ✅ 嚴格 |
|多個輸出 | ❌ 1 件 | ✅ 多個工具呼叫 |
|串流媒體| ✅ | ✅ |
|使用案例 |資料提取|行動+提取|

---

## 4. LangChain結構化輸出

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

### 4.2 講師 — 類型安全 + 重試

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

> **💡練習 2：** 使用 Instructor 建立提取管道：輸入 = 產品描述段落 → 輸出 = 模式（名稱、價格、類別、功能、評級）。新增驗證器：價格 > 0，評級 1-5。

---

## 5. 錯誤處理與邊緣狀況

### 5.1 重試模式

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

### 5.2 後備策略

```
Strategy khi structured output fail:

1. JSON Schema (strict)     ← Thử đầu tiên
   ↓ fail
2. JSON Mode + prompt       ← Fallback
   ↓ fail  
3. Text output + regex parse ← Last resort
```

---

## 總結

|概念 |記住|
|--------|--------|
| **JSON 模式** |確保有效的 JSON，而不是強制架構 |
| **結構化輸出** |模式執行，Pydantic 模型 |
| **函數呼叫** |工具使用格式，多次呼叫|
| **with_structed_output()** | LangChain包裝器，簡單易用 |
| **導師** | Pydantic 驗證 + 自動重試 |
| **重試** |解析失敗時堅韌重試 |

## 一般練習

1. ✅ 完成 2 個小練習 (1, 2)
2. **電子郵件分類器：** 輸入 = 電子郵件 → 輸出 = `{category, priority, action_items, sentiment, response_draft}`。使用 Pydantic 模式 + 驗證。使用 10 封電子郵件進行測試。
3. **資料管道：** 抓取20條評論→擷取結構化資料（講師）→儲存到CSV→分析。比較結構化輸出與正規表示式解析的準確性。
4. **多重模型：** 結構化輸出品質比較：GPT-4o-mini vs Claude vs Gemini。哪種模型最符合該架構？

> **下一篇文章：** 程式碼產生提示工程 — 為 AI 編寫提示以產生高品質程式碼、審查程式碼、偵錯和生成測試。
