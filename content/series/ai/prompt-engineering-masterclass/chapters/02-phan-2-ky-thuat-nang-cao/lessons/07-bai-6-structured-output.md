---
id: 019c9619-ee06-7006-f006-ee0600000006
title: 'Bài 6: Structured Output — JSON Mode, Schema & Validation'
slug: bai-6-structured-output
description: >-
  Bắt AI trả output theo cấu trúc: JSON Mode, JSON Schema, function calling.
  Validation output, retry logic, Pydantic + Instructor.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 5
section_title: "Phần 2: Kỹ thuật Nâng cao"
course:
  id: 019c9619-aa04-7004-b004-aa0400000004
  title: "Prompt Engineering Masterclass: Nghệ thuật Ra lệnh cho AI"
  slug: prompt-engineering-masterclass
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🧠 AI &amp; ML — Bài 5</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 6: Structured Output — JSON Mode,</tspan>
      <tspan x="60" dy="42">Schema &amp; Validation</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Prompt Engineering Masterclass: Nghệ thuật Ra lệnh cho AI</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 2: Kỹ thuật Nâng cao</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

AI trả lời bằng text tự do → khó parse bằng code. Trong production, bạn cần output **có cấu trúc**: JSON, bảng, danh sách cố định... để downstream systems xử lý được.

> **Ví dụ:** "Phân tích sentiment của review" → AI trả lời "Đây là review tích cực" (text tự do, khó parse). Structured output: `{"sentiment": "positive", "score": 0.85, "keywords": ["tốt", "nhanh"]}` → code parse dễ dàng!

Bài này cover:
1. **JSON Mode** — bắt AI trả JSON
2. **JSON Schema** — define cấu trúc chính xác
3. **Function Calling** — structured output qua tool use
4. **Pydantic + Instructor** — type-safe validation

---

## 1. JSON Mode — Bắt AI trả JSON

### 1.1 Prompt cơ bản

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

### 1.2 OpenAI JSON Mode

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

### 1.3 Vấn đề với JSON Mode

```
JSON Mode chỉ đảm bảo output là VALID JSON,
KHÔNG đảm bảo schema đúng!

Bạn yêu cầu: {"sentiment": "...", "score": ...}
AI có thể trả: {"feeling": "good", "rating": 5}  ← Sai field names!

→ Cần JSON Schema để enforce cấu trúc chính xác.
```

---

## 2. JSON Schema — Structured Outputs

### 2.1 OpenAI Structured Outputs (2024+)

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

### 2.2 Complex schemas

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

> **💡 Bài tập 1:** Tạo schema cho việc extract thông tin từ CV/resume: tên, email, skills, kinh nghiệm (danh sách), trình độ học vấn. Test với 3 CV khác nhau.

---

## 3. Function Calling

### 3.1 Tool Use cho structured output

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

### 3.2 Khi nào dùng Function Calling vs JSON Schema?

| Feature | JSON Schema | Function Calling |
|---------|:---:|:---:|
| Output format | JSON object | Function arguments |
| Schema enforcement | ✅ Strict | ✅ Strict |
| Multiple outputs | ❌ 1 object | ✅ Multiple tool calls |
| Streaming | ✅ | ✅ |
| Use case | Data extraction | Actions + extraction |

---

## 4. LangChain Structured Output

### 4.1 with_structured_output()

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

### 4.2 Instructor — Type-safe + retry

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

> **💡 Bài tập 2:** Dùng Instructor tạo extraction pipeline: input = đoạn văn mô tả sản phẩm → output = schema (tên, giá, category, features, rating). Thêm validator: giá > 0, rating 1-5.

---

## 5. Xử lý lỗi và Edge cases

### 5.1 Retry pattern

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

### 5.2 Fallback strategy

```
Strategy khi structured output fail:

1. JSON Schema (strict)     ← Thử đầu tiên
   ↓ fail
2. JSON Mode + prompt       ← Fallback
   ↓ fail  
3. Text output + regex parse ← Last resort
```

---

## Tóm tắt

| Concept | Ghi nhớ |
|---------|---------|
| **JSON Mode** | Đảm bảo valid JSON, không enforce schema |
| **Structured Outputs** | Schema enforcement, Pydantic models |
| **Function Calling** | Tool use format, multiple calls |
| **with_structured_output()** | LangChain wrapper, dễ dùng |
| **Instructor** | Pydantic validation + auto retry |
| **Retry** | Tenacity retry khi parse fail |

## Bài tập tổng hợp

1. ✅ Hoàn thành 2 bài tập nhỏ (1, 2)
2. **Email Classifier:** Input = email → Output = `{category, priority, action_items, sentiment, response_draft}`. Dùng Pydantic schema + validation. Test với 10 emails.
3. **Data Pipeline:** Crawl 20 reviews → extract structured data (Instructor) → save to CSV → analyze. So sánh accuracy structured output vs regex parsing.
4. **Multi-model:** So sánh structured output quality: GPT-4o-mini vs Claude vs Gemini. Model nào tuân thủ schema tốt nhất?

> **Bài tiếp theo:** Prompt Engineering cho Code Generation — viết prompt để AI sinh code chất lượng, review code, debug, và generate tests.
