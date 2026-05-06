---
id: 019c9619-ab12-7012-c112-ab1200000012
title: 第 12 課：多模態 AI — GPT-4o Vision、Gemini Vision
slug: bai-12-multimodal-ai
description: >-
  視覺語言模式：GPT-4o、Gemini 1.5、Claude Vision。用於影像理解、圖表分析、文件 QA 的 API
  整合。比較模型之間的準確性。成本優化。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 11
section_title: 第 4 部分：實際應用與部署
course:
  id: 019c9619-aa06-7006-b006-aa0600000006
  title: 深度學習的電腦視覺：從 CNN 到 Vision Transformer
  slug: computer-vision-deep-learning
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 人工智慧與機器學習 — 第 11 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 12 課：多模態 AI — GPT-4o Vision，</tspan>
      <tspan x="60" dy="42">雙子座願景</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">深度學習的電腦視覺：從 CNN 到 Vision Transformer</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：實際應用與部署</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

**多模式人工智慧** = 模型同時理解**文字和圖像/影片**。 GPT-4o、Gemini 2.0、Claude 3.5 — 都能夠以自然語言**查看圖像並回答問題**。無需培訓，無需複雜的程式碼——只需 API 呼叫。

> 🎯 **多模式人工智慧** 正在取代許多傳統的 CV 管道。 1 API呼叫替代OCR+分類+分析。

---

## 1. 視覺語言模型 (VLM)

### 1.1 對照表

|型號|供應商|優勢 |定價|
|--------|----------|------------|---------|
| **GPT-4o** |開放人工智慧 |全方位、強推理 | $2.50/1M 輸入代幣 |
| **GPT-4o-迷你** |開放人工智慧 |便宜、快速、夠好 | $0.15/1M 輸入代幣 |
| **雙子座 2.0 快閃記憶體** |Google |快速、便宜、影片支援 | $0.075/1M 輸入代幣 |
| **雙子座 1.5 專業版** |Google |長上下文 (2M)、影片 | $1.25/1M 輸入代幣 |
| **克勞德 3.5 十四行詩** |人擇 |優秀的圖表/圖表分析 | $3/1M 輸入代幣 |
| **Qwen2-VL** |阿里巴巴 |開源，不錯|免費（自架）|

### 1.2 為什麼要使用VLM而不是傳統的CV？

```
Pipeline truyền thống:
  YOLO detect → OCR extract text → NLP classify → Custom logic → Output
  = Nhiều models, phức tạp, maintenance cao

VLM:
  Image + Question → GPT-4o → Answer
  = 1 API call, đơn giản, chính xác!
```

---

## 2. 實踐：OpenAI GPT-4o 視覺

### 2.1 基本影像理解

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

### 2.2 結構化輸出－擷取訊息

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

### 2.3 多張圖片 — 比較照片

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

## 3. 谷歌雙子座願景

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

## 4. 實際應用

### 4.1 圖表/圖形分析

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

### 4.2 產品品質檢驗

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

### 4.3 醫學影像初步分析

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

## 5. 成本最佳化

### 5.1 比較成本

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

### 5.2 何時使用 VLM 與傳統 CV？

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

## 總結

|概念 |記住|
|--------|--------|
| **VLM** |模型同時理解文字+圖像 |
| **GPT-4o** |全方位、結構化輸出、推理 |
| **雙子座閃光** |最便宜、快速的視訊支援 |
| **克勞德十四行詩** |優秀的圖表和圖表 |
| **成本** |用於生產的 GPT-4o-mini 或 Gemini Flash |
| **混合** |用於複雜的 VLM + 用於簡單的 YOLO/OCR |

## 一般練習

1. **圖像問答：** 向 GPT-4o 提交 5 張不同的圖像（街道、食物、圖表、文件、產品）。提出具體問題。
2. **發票提取：** 比較使用 GPT-4o 與 PaddleOCR + 正規表示式的發票提取。哪個比較準確？
3. **成本計算器：** 計算每個提供者（GPT-4o、mini、Gemini）每天 1000 張圖像的成本。
4. **模型比較：** 同一張照片+問題→發送GPT-4o、Gemini、Claude。比較答案。

> **下一篇文章：** 邊緣部署 — 使用 TensorRT、ONNX 將 CV 模型引入邊緣設備。
