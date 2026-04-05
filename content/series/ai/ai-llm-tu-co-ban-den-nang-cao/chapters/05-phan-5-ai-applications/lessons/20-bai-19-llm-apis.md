---
id: 019c9619-bb19-7019-c019-bb1900000019
title: 'Bài 19: LLM APIs — OpenAI, Anthropic Claude, Google Gemini'
slug: bai-19-llm-apis
description: >-
  Tích hợp thực tế các LLM APIs: OpenAI GPT-4o, Anthropic Claude, Google Gemini.
  Streaming, structured outputs, vision, tool use, cost optimization.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 18
section_title: "Phần 5: Xây dựng AI Applications"
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: "AI & LLM: Từ Cơ bản đến Nâng cao"
  slug: ai-llm-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9466" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9466)"/>

  <!-- Decorations -->
  <g>
    <circle cx="785" cy="265" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="970" cy="170" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="655" cy="75" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="840" cy="240" r="13" fill="#fb923c" opacity="0.05"/>
    <circle cx="1025" cy="145" r="8" fill="#fb923c" opacity="0.1"/>
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
    <line x1="600" y1="55" x2="1100" y2="135" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="85" x2="1050" y2="155" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="980.9807621135332,140 980.9807621135332,170 955,185 929.0192378864668,170 929.0192378864668,140 955,125" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🧠 AI &amp; ML — Bài 18</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 19: LLM APIs — OpenAI, Anthropic</tspan>
      <tspan x="60" dy="42">Claude, Google Gemini</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI &amp; LLM: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 5: Xây dựng AI Applications</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Tổng quan

Thay vì tự deploy model, bạn thường sẽ gọi LLM qua API. Bài này hướng dẫn thực tế với 3 provider lớn nhất: OpenAI, Anthropic và Google Gemini — covering streaming, vision, structured output và cost optimization.

---

## 1. So sánh Providers (2025)

| Provider | Model | Context | Điểm mạnh |
|---------|-------|---------|-----------|
| OpenAI | GPT-4o, o3 | 128K | Tool use, coding, ecosystem lớn |
| Anthropic | Claude Opus/Sonnet | 200K | Long context, safety, reasoning |
| Google | Gemini 2.0 | 1M | Multimodal, free tier, long context |
| Meta (via API) | LLaMA 3.3 | 128K | Open weights, self-hostable |
| Mistral | Mistral Large | 128K | EU data, affordable |

---

## 2. OpenAI API

### Setup

```bash
pip install openai
export OPENAI_API_KEY="sk-..."
```

### Chat Completions

```python
from openai import OpenAI

client = OpenAI()  # tự đọc OPENAI_API_KEY từ env

# Basic call
response = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role": "system", "content": "Bạn là assistant lập trình Python."},
        {"role": "user", "content": "Giải thích list comprehension với ví dụ"}
    ],
    max_tokens=500,
    temperature=0.3
)
print(response.choices[0].message.content)
print(f"Tokens dùng: {response.usage.total_tokens}")
```

### Streaming

```python
# Streaming — in ra từng token ngay khi nhận được
with client.chat.completions.stream(
    model="gpt-4o",
    messages=[{"role": "user", "content": "Viết bài thơ về Hà Nội"}]
) as stream:
    for text in stream.text_stream:
        print(text, end="", flush=True)
print()  # Newline cuối
```

### Structured Output với Pydantic

```python
from pydantic import BaseModel
from typing import List

class CodeReview(BaseModel):
    bugs: List[str]
    improvements: List[str]
    security_issues: List[str]
    overall_score: int  # 1-10

response = client.beta.chat.completions.parse(
    model="gpt-4o",
    messages=[
        {"role": "user", "content": """Review code này:
```python
import os
password = os.environ.get('PASSWORD', 'admin123')
query = f"SELECT * FROM users WHERE id = {user_id}"
```"""}
    ],
    response_format=CodeReview
)
review = response.choices[0].message.parsed
print(f"Bugs: {review.bugs}")
print(f"Security: {review.security_issues}")
print(f"Score: {review.overall_score}/10")
```

### Vision (Image Input)

```python
import base64
from pathlib import Path

def analyze_image(image_path: str, question: str) -> str:
    image_data = base64.b64encode(Path(image_path).read_bytes()).decode()
    response = client.chat.completions.create(
        model="gpt-4o",
        messages=[{
            "role": "user",
            "content": [
                {"type": "text", "text": question},
                {
                    "type": "image_url",
                    "image_url": {
                        "url": f"data:image/jpeg;base64,{image_data}",
                        "detail": "high"  # "low" tốn ít tokens hơn
                    }
                }
            ]
        }]
    )
    return response.choices[0].message.content

# Hoặc dùng URL trực tiếp
response = client.chat.completions.create(
    model="gpt-4o",
    messages=[{
        "role": "user",
        "content": [
            {"type": "text", "text": "Mô tả ảnh này"},
            {"type": "image_url", "image_url": {"url": "https://example.com/image.jpg"}}
        ]
    }]
)
```

---

## 3. Anthropic Claude API

### Setup

```bash
pip install anthropic
export ANTHROPIC_API_KEY="sk-ant-..."
```

### Messages API

```python
import anthropic

client = anthropic.Anthropic()

# Basic
message = client.messages.create(
    model="claude-opus-4-5",
    max_tokens=1024,
    system="Bạn là expert về distributed systems.",
    messages=[
        {"role": "user", "content": "Giải thích CAP theorem"}
    ]
)
print(message.content[0].text)
print(f"Input tokens: {message.usage.input_tokens}")
print(f"Output tokens: {message.usage.output_tokens}")
```

### Streaming

```python
with client.messages.stream(
    model="claude-opus-4-5",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Viết class Python cho binary search tree"}]
) as stream:
    for text in stream.text_stream:
        print(text, end="", flush=True)
```

### Extended Thinking (Claude 3.7+)

```python
# Claude có thể "suy nghĩ" trước khi trả lời (như chain-of-thought nội bộ)
response = client.messages.create(
    model="claude-opus-4-5",
    max_tokens=16000,
    thinking={
        "type": "enabled",
        "budget_tokens": 10000  # Tokens dành cho thinking
    },
    messages=[{
        "role": "user",
        "content": "Giải bài toán: 17 × 19 - sqrt(144) + 2^8"
    }]
)

for block in response.content:
    if block.type == "thinking":
        print(f"[Thinking]: {block.thinking[:200]}...")
    elif block.type == "text":
        print(f"[Answer]: {block.text}")
```

### Long Document Analysis

```python
# Claude hỗ trợ 200K context — phân tích tài liệu dài
with open("contract.txt") as f:
    document = f.read()

response = client.messages.create(
    model="claude-opus-4-5",
    max_tokens=2048,
    messages=[{
        "role": "user",
        "content": f"""Phân tích hợp đồng sau và trả lời:
1. Các điều khoản quan trọng nhất
2. Rủi ro tiềm ẩn
3. Ngày hết hạn (nếu có)

<document>
{document}
</document>"""
    }]
)
```

---

## 4. Google Gemini API

### Setup

```bash
pip install google-generativeai
export GOOGLE_API_KEY="AIza..."
```

### Basic Usage

```python
import google.generativeai as genai
import os

genai.configure(api_key=os.environ["GOOGLE_API_KEY"])

model = genai.GenerativeModel(
    model_name="gemini-2.0-flash",
    system_instruction="Bạn là tutor Python cho người mới học."
)

response = model.generate_content("Decorators trong Python là gì?")
print(response.text)
```

### Multi-turn Chat

```python
chat = model.start_chat(history=[])

while True:
    user_input = input("Bạn: ")
    if user_input.lower() == "quit":
        break

    response = chat.send_message(user_input)
    print(f"Gemini: {response.text}")
```

### Multimodal (Image + Video + Audio)

```python
import PIL.Image

# Image analysis
image = PIL.Image.open("chart.png")
response = model.generate_content([
    "Phân tích biểu đồ này và đưa ra insights",
    image
])
print(response.text)

# Gemini 1.5 Pro — 1M context với video
video_file = genai.upload_file("presentation.mp4")
response = model.generate_content([
    "Tóm tắt nội dung video này",
    video_file
])
```

---

## 5. Unified Client Pattern

```python
from abc import ABC, abstractmethod
from dataclasses import dataclass
from typing import Iterator

@dataclass
class LLMResponse:
    content: str
    input_tokens: int
    output_tokens: int

class LLMClient(ABC):
    @abstractmethod
    def complete(self, prompt: str, system: str = "") -> LLMResponse:
        pass

    @abstractmethod
    def stream(self, prompt: str, system: str = "") -> Iterator[str]:
        pass

class OpenAIClient(LLMClient):
    def __init__(self, model="gpt-4o"):
        from openai import OpenAI
        self.client = OpenAI()
        self.model = model

    def complete(self, prompt: str, system: str = "") -> LLMResponse:
        messages = []
        if system:
            messages.append({"role": "system", "content": system})
        messages.append({"role": "user", "content": prompt})

        r = self.client.chat.completions.create(model=self.model, messages=messages)
        return LLMResponse(
            content=r.choices[0].message.content,
            input_tokens=r.usage.prompt_tokens,
            output_tokens=r.usage.completion_tokens
        )

    def stream(self, prompt: str, system: str = "") -> Iterator[str]:
        messages = [{"role": "user", "content": prompt}]
        with self.client.chat.completions.stream(
            model=self.model, messages=messages
        ) as s:
            yield from s.text_stream

class AnthropicClient(LLMClient):
    def __init__(self, model="claude-opus-4-5"):
        import anthropic
        self.client = anthropic.Anthropic()
        self.model = model

    def complete(self, prompt: str, system: str = "") -> LLMResponse:
        r = self.client.messages.create(
            model=self.model, max_tokens=2048,
            system=system or "You are a helpful assistant.",
            messages=[{"role": "user", "content": prompt}]
        )
        return LLMResponse(
            content=r.content[0].text,
            input_tokens=r.usage.input_tokens,
            output_tokens=r.usage.output_tokens
        )

    def stream(self, prompt: str, system: str = "") -> Iterator[str]:
        with self.client.messages.stream(
            model=self.model, max_tokens=2048,
            messages=[{"role": "user", "content": prompt}]
        ) as s:
            yield from s.text_stream

# Dùng
def get_client(provider: str = "openai") -> LLMClient:
    if provider == "openai":
        return OpenAIClient()
    elif provider == "anthropic":
        return AnthropicClient()
    raise ValueError(f"Unknown provider: {provider}")

llm = get_client("openai")
response = llm.complete("Giải thích REST API cho người mới")
print(response.content)
```

---

## 6. Cost Optimization

```python
# Pricing tham khảo (USD per 1M tokens, 2025)
PRICING = {
    "gpt-4o":           {"input": 2.50,  "output": 10.00},
    "gpt-4o-mini":      {"input": 0.15,  "output": 0.60},
    "claude-opus-4-5":  {"input": 3.00,  "output": 15.00},
    "claude-haiku-4-5": {"input": 0.80,  "output": 4.00},
    "gemini-2.0-flash": {"input": 0.10,  "output": 0.40},
}

def estimate_cost(model: str, input_tokens: int, output_tokens: int) -> float:
    p = PRICING.get(model, {"input": 1.0, "output": 1.0})
    return (input_tokens * p["input"] + output_tokens * p["output"]) / 1_000_000

# Chiến lược tiết kiệm
tips = """
1. Model routing: dùng cheap model (gpt-4o-mini) cho tasks đơn giản,
   expensive model chỉ khi cần

2. Prompt caching: Anthropic cache system prompts dài
   → tiết kiệm 90% input cost cho repeated calls

3. Batch API: OpenAI Batch API 50% cheaper (async, 24h delay)

4. Context window management: trim conversation history
   → tránh truyền lại toàn bộ history mỗi call

5. Response caching: cache kết quả cho cùng input
   (đặc biệt hữu ích cho RAG retrieval)
"""
```

---

## Tổng kết

| Task | Gợi ý |
|------|-------|
| Coding, agents | GPT-4o hoặc Claude Opus |
| Cheap, fast | GPT-4o-mini, Claude Haiku, Gemini Flash |
| Long document (100K+) | Claude Opus (200K), Gemini Pro (1M) |
| Multimodal | GPT-4o, Gemini, Claude (images) |
| Structured output | OpenAI JSON mode + Pydantic |
| Streaming UI | Tất cả đều hỗ trợ |

**Bài tiếp theo (cuối series):** Deploying LLMs tự host với Ollama và vLLM, evaluation và production checklist.
