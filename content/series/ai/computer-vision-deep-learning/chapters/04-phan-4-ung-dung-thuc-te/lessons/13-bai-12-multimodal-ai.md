---
id: 019c9619-ab12-7012-c112-ab1200000012
title: 'Bài 12: Multimodal AI — GPT-4o Vision, Gemini Vision'
slug: bai-12-multimodal-ai
description: >-
  Vision-Language Models: GPT-4o, Gemini 1.5, Claude Vision. API
  integration cho image understanding, chart analysis, document QA.
  So sánh accuracy giữa các models. Cost optimization.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 11
section_title: "Phần 4: Ứng dụng Thực tế & Deployment"
course:
  id: 019c9619-aa06-7006-b006-aa0600000006
  title: "Computer Vision với Deep Learning: Từ CNN đến Vision Transformer"
  slug: computer-vision-deep-learning
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4795" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4795)"/>

  <!-- Decorations -->
  <g>
    <circle cx="960" cy="30" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="820" cy="30" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="680" cy="30" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1040" cy="30" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="900" cy="30" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="130" x2="1100" y2="210" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="160" x2="1050" y2="230" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1051.650635094611,217.5 1051.650635094611,242.5 1030,255 1008.349364905389,242.5 1008.349364905389,217.5 1030,205" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 AI &amp; ML — Bài 11</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 12: Multimodal AI — GPT-4o Vision,</tspan>
      <tspan x="60" dy="42">Gemini Vision</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Computer Vision với Deep Learning: Từ CNN đến Vision Transformer</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 4: Ứng dụng Thực tế &amp; Deployment</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

**Multimodal AI** = model hiểu **cả text lẫn ảnh/video** cùng lúc. GPT-4o, Gemini 2.0, Claude 3.5 — đều có khả năng **nhìn ảnh và trả lời câu hỏi** bằng ngôn ngữ tự nhiên. Không cần train, không cần code phức tạp — chỉ cần API call.

> 🎯 **Multimodal AI** đang thay thế rất nhiều pipeline CV truyền thống. 1 API call thay cả OCR + classification + analysis.

---

## 1. Vision-Language Models (VLM)

### 1.1 Bảng so sánh

| Model | Provider | Strengths | Pricing |
|-------|----------|-----------|---------|
| **GPT-4o** | OpenAI | All-round, reasoning mạnh | $2.50/1M input tokens |
| **GPT-4o-mini** | OpenAI | Rẻ, nhanh, đủ tốt | $0.15/1M input tokens |
| **Gemini 2.0 Flash** | Google | Nhanh, rẻ, video support | $0.075/1M input tokens |
| **Gemini 1.5 Pro** | Google | Long context (2M), video | $1.25/1M input tokens |
| **Claude 3.5 Sonnet** | Anthropic | Chart/diagram analysis xuất sắc | $3/1M input tokens |
| **Qwen2-VL** | Alibaba | Open-source, tốt | Free (self-hosted) |

### 1.2 Tại sao dùng VLM thay vì CV truyền thống?

```
Pipeline truyền thống:
  YOLO detect → OCR extract text → NLP classify → Custom logic → Output
  = Nhiều models, phức tạp, maintenance cao

VLM:
  Image + Question → GPT-4o → Answer
  = 1 API call, đơn giản, chính xác!
```

---

## 2. Hands-on: OpenAI GPT-4o Vision

### 2.1 Basic Image Understanding

```python
"""GPT-4o Vision — hiểu ảnh bằng 1 API call"""
import base64
from openai import OpenAI

client = OpenAI()

def encode_image(image_path):
    with open(image_path, "rb") as f:
        return base64.b64encode(f.read()).decode("utf-8")

# Gửi ảnh + câu hỏi
image_b64 = encode_image("street_vietnam.jpg")

response = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {
            "role": "user",
            "content": [
                {"type": "text", "text": "Mô tả chi tiết bức ảnh này. Có những gì?"},
                {
                    "type": "image_url",
                    "image_url": {
                        "url": f"data:image/jpeg;base64,{image_b64}",
                        "detail": "high",  # "low" = rẻ hơn, "high" = chi tiết hơn
                    }
                }
            ],
        }
    ],
    max_tokens=1000,
)

print(response.choices[0].message.content)
```

### 2.2 Structured Output — Extract thông tin

```python
"""Extract thông tin có cấu trúc từ ảnh"""
from pydantic import BaseModel
from openai import OpenAI

client = OpenAI()

class InvoiceInfo(BaseModel):
    invoice_number: str
    date: str
    vendor_name: str
    items: list[dict]
    total_amount: float
    currency: str

image_b64 = encode_image("invoice.jpg")

response = client.beta.chat.completions.parse(
    model="gpt-4o",
    messages=[
        {
            "role": "system",
            "content": "Extract invoice information from the image. Return structured JSON."
        },
        {
            "role": "user",
            "content": [
                {"type": "text", "text": "Extract all information from this invoice:"},
                {"type": "image_url", "image_url": {"url": f"data:image/jpeg;base64,{image_b64}"}}
            ],
        }
    ],
    response_format=InvoiceInfo,
)

invoice = response.choices[0].message.parsed
print(f"Invoice #: {invoice.invoice_number}")
print(f"Date: {invoice.date}")
print(f"Total: {invoice.total_amount} {invoice.currency}")
for item in invoice.items:
    print(f"  - {item}")
```

### 2.3 Multiple Images — So sánh ảnh

```python
"""So sánh nhiều ảnh"""
image1_b64 = encode_image("product_v1.jpg")
image2_b64 = encode_image("product_v2.jpg")

response = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {
            "role": "user",
            "content": [
                {"type": "text", "text": "So sánh 2 sản phẩm này. Khác biệt gì?"},
                {"type": "image_url", "image_url": {"url": f"data:image/jpeg;base64,{image1_b64}"}},
                {"type": "image_url", "image_url": {"url": f"data:image/jpeg;base64,{image2_b64}"}},
            ],
        }
    ],
)

print(response.choices[0].message.content)
```

---

## 3. Google Gemini Vision

```python
"""Gemini Vision — hỗ trợ video, long context"""
import google.generativeai as genai
from PIL import Image

genai.configure(api_key="YOUR_API_KEY")
model = genai.GenerativeModel("gemini-2.0-flash")

# Image understanding
image = Image.open("chart.png")
response = model.generate_content([
    "Phân tích biểu đồ này chi tiết. Xu hướng chính là gì?",
    image,
])
print(response.text)

# Video understanding
video_file = genai.upload_file("presentation.mp4")
response = model.generate_content([
    "Tóm tắt nội dung video này. Các slide chính nói về gì?",
    video_file,
])
print(response.text)
```

---

## 4. Ứng dụng thực tế

### 4.1 Chart/Graph Analysis

```python
"""Phân tích biểu đồ — VLM rất mạnh!"""
def analyze_chart(image_path, question=None):
    image_b64 = encode_image(image_path)
    prompt = question or "Phân tích biểu đồ này. Xu hướng chính? Insights quan trọng?"

    response = client.chat.completions.create(
        model="gpt-4o",
        messages=[{
            "role": "user",
            "content": [
                {"type": "text", "text": prompt},
                {"type": "image_url", "image_url": {"url": f"data:image/jpeg;base64,{image_b64}"}},
            ],
        }],
    )
    return response.choices[0].message.content

# Test
print(analyze_chart("revenue_chart.png", "Revenue Q4 tăng hay giảm?"))
```

### 4.2 Product Quality Inspection

```python
"""Kiểm tra chất lượng sản phẩm bằng VLM"""
def inspect_product(image_path):
    image_b64 = encode_image(image_path)

    response = client.chat.completions.create(
        model="gpt-4o",
        messages=[
            {
                "role": "system",
                "content": """Bạn là chuyên gia QC. Kiểm tra sản phẩm trong ảnh.
                Output JSON: {"status": "pass/fail", "defects": [...], "confidence": "high/medium/low"}"""
            },
            {
                "role": "user",
                "content": [
                    {"type": "text", "text": "Kiểm tra sản phẩm này có lỗi không?"},
                    {"type": "image_url", "image_url": {"url": f"data:image/jpeg;base64,{image_b64}"}},
                ],
            }
        ],
    )
    return response.choices[0].message.content

result = inspect_product("product_sample.jpg")
print(result)
```

### 4.3 Medical Image Preliminary Analysis

```python
"""Phân tích ảnh y tế sơ bộ (KHÔNG thay thế bác sĩ!)"""
# ⚠️ DISCLAIMER: Chỉ dùng để hỗ trợ, KHÔNG thay thế chẩn đoán y khoa

response = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {
            "role": "system",
            "content": "You are a medical imaging assistant. Provide preliminary observations only. Always recommend professional medical review."
        },
        {
            "role": "user",
            "content": [
                {"type": "text", "text": "Describe what you observe in this X-ray image."},
                {"type": "image_url", "image_url": {"url": f"data:image/jpeg;base64,{image_b64}"}},
            ],
        }
    ],
)
```

---

## 5. Cost Optimization

### 5.1 So sánh cost

```python
"""Tính cost cho image processing"""

# GPT-4o: 1 ảnh 768×768 (high detail) ≈ 765 tokens ≈ $0.0019
# GPT-4o-mini: cùng ảnh ≈ $0.0001
# Gemini Flash: cùng ảnh ≈ $0.00006

# 1000 ảnh/ngày:
# GPT-4o:      $1.90/day  = $57/month
# GPT-4o-mini: $0.10/day  = $3/month
# Gemini Flash: $0.06/day = $1.80/month

strategies = """
Cost Optimization:
1. Dùng "low" detail cho ảnh đơn giản (giảm 50% tokens)
2. Resize ảnh trước khi gửi (max 1024px)
3. Dùng GPT-4o-mini cho tasks đơn giản
4. Batch processing: gửi nhiều ảnh 1 lúc
5. Cache results: không gửi lại ảnh đã xử lý
6. Hybrid: VLM cho complex tasks, YOLO/OCR cho simple tasks
"""
```

### 5.2 Khi nào dùng VLM vs Traditional CV?

```
Dùng VLM (GPT-4o, Gemini):
✅ Complex understanding (hiểu context, suy luận)
✅ Unstructured documents
✅ Prototype nhanh
✅ Tasks thay đổi thường xuyên

Dùng Traditional CV (YOLO, OCR):
✅ High volume (>10K ảnh/giờ)
✅ Real-time (< 50ms)
✅ Offline processing
✅ Cost-sensitive
✅ Privacy (không gửi data lên cloud)
```

---

## Tóm tắt

| Concept | Ghi nhớ |
|---------|---------|
| **VLM** | Model hiểu cả text + image cùng lúc |
| **GPT-4o** | All-round, structured output, reasoning |
| **Gemini Flash** | Rẻ nhất, nhanh, hỗ trợ video |
| **Claude Sonnet** | Charts & diagrams xuất sắc |
| **Cost** | GPT-4o-mini hoặc Gemini Flash cho production |
| **Hybrid** | VLM cho complex + YOLO/OCR cho simple |

## Bài tập tổng hợp

1. **Image Q&A:** Gửi 5 ảnh khác nhau (street, food, chart, document, product) lên GPT-4o. Hỏi câu hỏi cụ thể.
2. **Invoice Extraction:** So sánh extract invoice bằng GPT-4o vs PaddleOCR + regex. Cái nào chính xác hơn?
3. **Cost Calculator:** Tính chi phí 1000 ảnh/ngày cho từng provider (GPT-4o, mini, Gemini).
4. **Model Comparison:** Cùng 1 ảnh + câu hỏi → gửi GPT-4o, Gemini, Claude. So sánh câu trả lời.

> **Bài tiếp theo:** Edge Deployment — đưa model CV lên thiết bị edge với TensorRT, ONNX.
