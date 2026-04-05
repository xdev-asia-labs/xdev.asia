---
id: 019c9619-ee09-7009-f009-ee0900000009
title: 'Bài 9: Multimodal Prompting — Image, Audio & Video'
slug: bai-9-multimodal-prompting
description: >-
  Prompt Engineering cho input đa phương tiện: image analysis, audio
  transcription, video understanding. Kỹ thuật mô tả ảnh, OCR, diagram.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 8
section_title: "Phần 3: Ứng dụng Thực tế"
course:
  id: 019c9619-aa04-7004-b004-aa0400000004
  title: "Prompt Engineering Masterclass: Nghệ thuật Ra lệnh cho AI"
  slug: prompt-engineering-masterclass
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1588" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1588)"/>

  <!-- Decorations -->
  <g>
    <circle cx="956" cy="218" r="34" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="812" cy="194" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="668" cy="170" r="30" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="1024" cy="146" r="28" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="880" cy="122" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="238" x2="1100" y2="318" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="268" x2="1050" y2="338" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1016.5788383248864,171.5 1016.5788383248864,204.5 988,221 959.4211616751136,204.5 959.4211616751135,171.5 988,155" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 AI &amp; ML — Bài 8</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 9: Multimodal Prompting — Image, Audio</tspan>
      <tspan x="60" dy="42">&amp; Video</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Prompt Engineering Masterclass: Nghệ thuật Ra lệnh cho AI</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 3: Ứng dụng Thực tế</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Prompt Engineering không chỉ cho text. AI multimodal (GPT-4o, Claude, Gemini) hiểu cả **ảnh**, **audio**, **video**. Prompt tốt cho multimodal = mô tả rõ **task** + **focus area** + **output format**.

> **Ví dụ:** Cùng 1 ảnh biểu đồ, prompt khác nhau cho kết quả khác nhau:
> - "Mô tả ảnh này" → mô tả chung chung
> - "Đọc tất cả data points trong biểu đồ, output dạng CSV" → structured data
> - "So sánh xu hướng Q1 vs Q3, kết luận" → business insight

---

## 1. Image Prompting — Ảnh tĩnh

### 1.1 Cấu trúc prompt cho ảnh

```
= CONTEXT =
Ảnh này là: {loại ảnh: screenshot, biểu đồ, document, photo}

= TASK =
{Cụ thể bạn muốn AI làm gì với ảnh}

= FOCUS =
{Tập trung vào phần nào: text, numbers, layout, objects}

= OUTPUT FORMAT =
{Markdown table, JSON, bullet points, prose}
```

### 1.2 Use cases phổ biến

| Use case | Prompt template |
|---------|----------------|
| **OCR** | "Đọc TẤT CẢ text trong ảnh, giữ nguyên formatting" |
| **Biểu đồ** | "Extract data points, output CSV. Mô tả trend" |
| **Screenshot** | "Mô tả UI: layout, elements, colors. Liệt kê issues UX" |
| **Hóa đơn** | "Extract: merchant, date, items, amounts, total. Output JSON" |
| **Diagram** | "Mô tả diagram: entities, relationships, flow" |

### 1.3 Ví dụ: Extract data từ biểu đồ

```python
"""Extract data từ ảnh biểu đồ"""
from openai import OpenAI
import base64

client = OpenAI()

with open("revenue-chart.png", "rb") as f:
    image_data = base64.b64encode(f.read()).decode()

response = client.chat.completions.create(
    model="gpt-4o",
    messages=[{
        "role": "user",
        "content": [
            {"type": "text", "text": """Ảnh này là biểu đồ doanh thu.

Task:
1. Đọc TẤT CẢ data points (tên cột, giá trị)
2. Output dạng markdown table
3. Tính tổng, trung bình, min, max
4. Mô tả trend (tăng/giảm/ổn định)
5. Highlight anomalies (nếu có)"""},
            {"type": "image_url", "image_url": {
                "url": f"data:image/png;base64,{image_data}",
                "detail": "high",  # high detail cho biểu đồ
            }},
        ],
    }],
)

print(response.choices[0].message.content)
```

### 1.4 Detail levels

```
detail: "low"   → 85 tokens, nhanh, ảnh tổng quát
detail: "high"  → 1105+ tokens, chậm hơn, chi tiết text/numbers
detail: "auto"  → AI tự chọn

Khi nào dùng gì:
- Phân loại ảnh (cat/dog): low
- OCR, đọc biểu đồ: high
- Screenshot general: auto
```

> **💡 Bài tập 1:** Chụp screenshot 1 dashboard/website. Dùng 3 prompts khác nhau: (a) mô tả general, (b) extract text, (c) review UX. So sánh output.

---

## 2. Multi-Image Prompting

### 2.1 So sánh 2 ảnh

```
= IMAGES =
Image 1: [screenshot version cũ]
Image 2: [screenshot version mới]

= TASK =
So sánh 2 screenshots:
1. Liệt kê TẤT CẢ điểm khác nhau
2. Phân loại: UI change / content change / layout change
3. Đánh giá: thay đổi tốt hơn hay xấu hơn?
4. Có thay đổi nào ảnh hưởng UX không?
```

### 2.2 Batch processing

```python
"""Xử lý nhiều ảnh cùng lúc"""
images = ["invoice1.png", "invoice2.png", "invoice3.png"]

content = [{"type": "text", "text": """Extract thông tin từ mỗi hóa đơn.
Output JSON array:
[{"merchant": "...", "date": "...", "total": ...}, ...]"""}]

for img_path in images:
    with open(img_path, "rb") as f:
        data = base64.b64encode(f.read()).decode()
    content.append({
        "type": "image_url",
        "image_url": {"url": f"data:image/png;base64,{data}"},
    })

response = client.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": content}],
)
```

---

## 3. Audio Prompting

### 3.1 Transcription + Analysis

```python
"""Audio: transcribe + phân tích"""
# Bước 1: Transcribe (Whisper)
from openai import OpenAI
client = OpenAI()

with open("meeting.mp3", "rb") as f:
    transcript = client.audio.transcriptions.create(
        model="whisper-1",
        file=f,
        language="vi",  # Tiếng Việt
        response_format="verbose_json",  # Kèm timestamps
    )

# Bước 2: Phân tích transcript
analysis_prompt = f"""Đây là transcript cuộc họp:

{transcript.text}

Phân tích:
1. **Tóm tắt** (50 từ)
2. **Người tham gia** (tên, vai trò nếu nhận diện được)
3. **Quyết định** (liệt kê)
4. **Action items** (task, owner, deadline)
5. **Sentiment** (positive/negative/neutral — tone cuộc họp)
6. **Follow-up** (cần họp tiếp không? chủ đề gì?)"""
```

### 3.2 Prompt cho voice analysis

```
= AUDIO CONTEXT =
Loại audio: {meeting / interview / customer call / podcast}
Language: {vi / en / mixed}
Speakers: {số người, vai trò nếu biết}

= TASK =
1. Transcribe chính xác (giữ filler words nếu cần)
2. Speaker diarization (ai nói gì)
3. Key quotes (trích dẫn quan trọng)
4. Emotion detection (tone giọng: vui, bực, lo lắng...)
5. Summary + Action items
```

---

## 4. Video Understanding

### 4.1 Video → Frames → Analysis

```python
"""Video analysis: extract frames + analyze"""
import cv2
import base64

def extract_key_frames(video_path, interval_seconds=30):
    """Trích xuất frames mỗi N giây"""
    cap = cv2.VideoCapture(video_path)
    fps = int(cap.get(cv2.CAP_PROP_FPS))
    frames = []
    
    frame_count = 0
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
        
        if frame_count % (fps * interval_seconds) == 0:
            _, buffer = cv2.imencode(".jpg", frame)
            b64 = base64.b64encode(buffer).decode()
            frames.append({
                "timestamp": frame_count // fps,
                "image": b64,
            })
        frame_count += 1
    
    cap.release()
    return frames

# Extract + Analyze
frames = extract_key_frames("presentation.mp4", interval_seconds=60)

content = [{"type": "text", "text": """Đây là các frames từ video presentation.
Mỗi frame cách nhau 60 giây.

Phân tích:
1. Mô tả nội dung từng frame (slide nào, nội dung gì)
2. Tóm tắt cấu trúc presentation
3. Key points được trình bày
4. Có visual nào đáng chú ý (biểu đồ, demo)?"""}]

for frame in frames:
    content.append({"type": "text", "text": f"[{frame['timestamp']}s]:"})
    content.append({"type": "image_url", "image_url": {
        "url": f"data:image/jpeg;base64,{frame['image']}", "detail": "low",
    }})
```

### 4.2 Gemini Video Understanding

```python
"""Gemini: native video understanding (truyền trực tiếp video)"""
import google.generativeai as genai

genai.configure(api_key="your-key")
model = genai.GenerativeModel("gemini-2.0-flash")

video = genai.upload_file("demo.mp4")

response = model.generate_content([
    video,
    """Phân tích video này:
1. Tóm tắt nội dung (100 từ)
2. Timeline: liệt kê các phần chính + timestamp
3. Key takeaways
4. Transcript các đoạn nói quan trọng""",
])

print(response.text)
```

> **💡 Bài tập 2:** Chọn 1 video YouTube ngắn (< 5 min). Extract frames mỗi 30s → gửi cho GPT-4o → so sánh kết quả phân tích với Gemini (native video). Model nào hiểu tốt hơn?

---

## 5. Tips tối ưu Multimodal Prompts

### 5.1 Best practices

| Tip | Giải thích |
|-----|-----------|
| **Specify image type** | "Ảnh này là biểu đồ cột" tốt hơn "Mô tả ảnh" |
| **Detail level** | Dùng `high` cho text/numbers, `low` cho classification |
| **Output format** | Specify: JSON, CSV, markdown table |
| **Region focus** | "Tập trung vào góc trên bên phải" |
| **Multi-step** | OCR trước → phân tích sau (2 prompts) |
| **Language** | Specify output language nếu ảnh multi-language |

### 5.2 Limitations

```
⚠️ Multimodal AI KHÔNG hoàn hảo:
- OCR: có thể sai 5-10% ký tự (đặc biệt tiếng Việt có dấu)
- Biểu đồ: đọc sai số nếu resolution thấp
- Handwriting: accuracy thấp với chữ viết tay
- Small text: cần detail=high, tốn tokens
- Video: Gemini tốt hơn GPT-4o cho video hiện tại

→ LUÔN validate output quan trọng bằng human check!
```

---

## Tóm tắt

| Modality | Model tốt nhất | Key prompt elements |
|---------|----------------|-------------------|
| **Image** | GPT-4o, Claude | Image type, task, detail level, output format |
| **Audio** | Whisper + GPT-4o | Language, speaker count, analysis type |
| **Video** | Gemini 2.0 | Timeline, key frames, transcript |
| **Multi-image** | GPT-4o | Compare/batch instruction, structured output |

## Bài tập tổng hợp

1. ✅ Hoàn thành 2 bài tập nhỏ (1, 2)
2. **Invoice Processor:** Xây pipeline: ảnh hóa đơn → OCR + extract (JSON) → validate → save CSV. Xử lý 10 hóa đơn, đo accuracy.
3. **Meeting AI:** Audio cuộc họp → Whisper transcribe → GPT-4o summarize → output meeting notes có action items. Test với 1 recording thật.
4. **UI Reviewer:** Screenshot app → AI review UX (accessibility, layout, color contrast) → output danh sách issues có severity.

> **Bài tiếp theo:** Prompt Testing & Evaluation Framework — đo lường chất lượng prompts, A/B testing, regression testing.
