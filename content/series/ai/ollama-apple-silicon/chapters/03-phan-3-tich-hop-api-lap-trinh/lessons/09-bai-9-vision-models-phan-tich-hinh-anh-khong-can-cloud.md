---
id: 019c9619-bb09-7009-d009-bb0900000009
title: 'Bài 9: Vision models - Phân tích hình ảnh không cần cloud'
slug: bai-9-vision-models-phan-tich-hinh-anh-khong-can-cloud
description: >-
  Chạy LLaVA, Gemma 3 Vision, Qwen VL trên Apple Silicon.
  Phân tích ảnh, đọc text, OCR, mô tả – tất cả offline. Tích hợp mlx-vlm cho hiệu năng cao.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 2
section_title: "Phần 3: Tích hợp API & lập trình ứng dụng"
course:
  id: 019c9619-aa11-7011-b011-aa1100000011
  title: Chạy AI Local với Ollama trên Apple Silicon
  slug: ollama-apple-silicon
---

## Giới thiệu

Vision models (VLM - Vision Language Models) có thể "nhìn" và hiểu hình ảnh. Nhờ Apple Silicon và Ollama, bạn chạy hoàn toàn local — không cần gửi ảnh nhạy cảm lên cloud.

---

## 1. Vision models trên Ollama

### Các model phổ biến

| Model | Kích thước | RAM cần | Đặc điểm |
|-------|-----------|---------|-----------|
| `llava:7b` | 4.7 GB | 8 GB | Model VLM đầu tiên, stable |
| `llava:13b` | 8.0 GB | 12 GB | Chính xác hơn |
| `llava-llama3` | 5.5 GB | 8 GB | Dựa trên Llama 3 |
| `gemma3:4b` | 3.3 GB | 6 GB | Nhẹ, nhanh, hỗ trợ vision |
| `gemma3:12b` | 8.1 GB | 12 GB | Balance tốt |
| `gemma3:27b` | 17 GB | 24 GB | Chất lượng cao nhất |
| `qwen2.5-vl:7b` | 5.3 GB | 10 GB | Tốt với text/doc |
| `minicpm-v` | 5.5 GB | 8 GB | Compact, OCR mạnh |

### Pull model

```bash
# Khuyến nghị cho MacBook 16GB RAM
ollama pull gemma3:12b

# Cho MacBook 8GB RAM
ollama pull gemma3:4b

# Model OCR chuyên dụng
ollama pull minicpm-v
```

---

## 2. Sử dụng từ CLI

### Mô tả ảnh

```bash
# Mô tả ảnh
ollama run gemma3:12b "Describe this image in detail" ./screenshot.png

# Tiếng Việt
ollama run gemma3:12b "Mô tả chi tiết hình ảnh này" ./photo.jpg
```

### Nhiều ảnh

```bash
ollama run gemma3:12b "So sánh 2 bức ảnh này" ./before.png ./after.png
```

---

## 3. Python: phân tích ảnh

### Cơ bản với Ollama library

```python
import ollama

response = ollama.chat(
    model='gemma3:12b',
    messages=[{
        'role': 'user',
        'content': 'Mô tả chi tiết hình ảnh này bằng tiếng Việt',
        'images': ['./screenshot.png']
    }]
)

print(response['message']['content'])
```

### Dùng base64

```python
import ollama
import base64

def analyze_image(image_path, prompt="Mô tả hình ảnh này"):
    with open(image_path, 'rb') as f:
        image_data = base64.b64encode(f.read()).decode('utf-8')

    response = ollama.chat(
        model='gemma3:12b',
        messages=[{
            'role': 'user',
            'content': prompt,
            'images': [image_data]
        }]
    )
    return response['message']['content']

# Sử dụng
result = analyze_image("diagram.png", "Giải thích architecture diagram này")
print(result)
```

### Dùng API trực tiếp

```python
import requests
import base64

def vision_api(image_path, prompt):
    with open(image_path, 'rb') as f:
        image_b64 = base64.b64encode(f.read()).decode('utf-8')

    response = requests.post(
        'http://localhost:11434/api/chat',
        json={
            'model': 'gemma3:12b',
            'messages': [{
                'role': 'user',
                'content': prompt,
                'images': [image_b64]
            }],
            'stream': False
        }
    )
    return response.json()['message']['content']

result = vision_api("error.png", "Đọc error message trong screenshot này")
print(result)
```

---

## 4. Use cases thực tế

### 4.1. OCR — Đọc text từ ảnh

```python
import ollama

def ocr_image(image_path):
    response = ollama.chat(
        model='minicpm-v',  # Tốt cho OCR
        messages=[{
            'role': 'user',
            'content': '''Đọc và trích xuất toàn bộ text trong hình ảnh này.
Giữ nguyên format, xuống dòng đúng vị trí.
Chỉ trả về text, không thêm giải thích.''',
            'images': [image_path]
        }]
    )
    return response['message']['content']

text = ocr_image("invoice.jpg")
print(text)
```

### 4.2. Phân tích code từ screenshot

```python
def analyze_code_screenshot(image_path):
    response = ollama.chat(
        model='gemma3:12b',
        messages=[{
            'role': 'user',
            'content': '''Phân tích screenshot code này:
1. Đọc code trong hình
2. Giải thích code làm gì
3. Tìm bugs hoặc issues (nếu có)
4. Đề xuất cải thiện

Trả lời bằng tiếng Việt.''',
            'images': [image_path]
        }]
    )
    return response['message']['content']

result = analyze_code_screenshot("code_review.png")
print(result)
```

### 4.3. Mô tả UI/UX

```python
def analyze_ui(image_path):
    response = ollama.chat(
        model='gemma3:12b',
        messages=[{
            'role': 'user',
            'content': '''Phân tích thiết kế UI này:
1. Layout và bố cục
2. Color scheme
3. Typography
4. UX issues (nếu có)
5. Đề xuất cải thiện

Trả lời theo format markdown.''',
            'images': [image_path]
        }]
    )
    return response['message']['content']
```

### 4.4. Xử lý batch nhiều ảnh

```python
import ollama
from pathlib import Path

def batch_analyze(folder_path, prompt="Mô tả hình ảnh"):
    image_dir = Path(folder_path)
    extensions = {'.jpg', '.jpeg', '.png', '.webp', '.gif'}

    results = {}
    for img_file in sorted(image_dir.iterdir()):
        if img_file.suffix.lower() in extensions:
            print(f"📷 Đang phân tích: {img_file.name}...")
            response = ollama.chat(
                model='gemma3:4b',  # Dùng model nhẹ cho batch
                messages=[{
                    'role': 'user',
                    'content': prompt,
                    'images': [str(img_file)]
                }]
            )
            results[img_file.name] = response['message']['content']
            print(f"   ✅ Done\n")

    return results

# Phân tích tất cả ảnh trong folder
results = batch_analyze(
    "./screenshots",
    "Đây là screenshot lỗi. Tóm tắt error message trong 1-2 câu."
)

for filename, analysis in results.items():
    print(f"📄 {filename}: {analysis}\n")
```

---

## 5. So sánh hiệu năng Vision models

Benchmark trên MacBook Pro M3 Pro 18GB RAM:

| Model | Thời gian phản hồi | Chất lượng mô tả | OCR accuracy |
|-------|-------------------|-------------------|--------------|
| `gemma3:4b` | ~3s | ⭐⭐⭐ | ⭐⭐⭐ |
| `gemma3:12b` | ~8s | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| `llava:7b` | ~5s | ⭐⭐⭐ | ⭐⭐ |
| `minicpm-v` | ~6s | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| `qwen2.5-vl:7b` | ~7s | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |

### Script benchmark

```python
import ollama
import time

MODELS = ['gemma3:4b', 'gemma3:12b', 'llava:7b']
TEST_IMAGE = './test.png'
PROMPT = 'Describe this image in detail'

for model in MODELS:
    print(f"\n--- {model} ---")
    start = time.time()
    response = ollama.chat(
        model=model,
        messages=[{
            'role': 'user',
            'content': PROMPT,
            'images': [TEST_IMAGE]
        }]
    )
    elapsed = time.time() - start
    content = response['message']['content']
    print(f"⏱️  Time: {elapsed:.1f}s")
    print(f"📝 Length: {len(content)} chars")
    print(f"💬 {content[:200]}...")
```

---

## 6. mlx-vlm — Chạy Vision models với MLX

Nếu cần hiệu năng cao hơn (batch processing, custom pipeline), dùng `mlx-vlm`:

```bash
pip3 install mlx-vlm
```

```python
from mlx_vlm import load, generate

# Load model
model, processor = load("mlx-community/Qwen2.5-VL-7B-Instruct-4bit")

# Generate
output = generate(
    model,
    processor,
    "Describe this image",
    ["./photo.jpg"],
    max_tokens=500,
    verbose=False,
)
print(output)
```

So sánh Ollama vs mlx-vlm:

| | Ollama | mlx-vlm |
|--|--------|---------|
| **Setup** | Dễ, pull & run | Cần pip install, code |
| **API** | REST, CLI | Python only |
| **Tốc độ** | Tốt | Nhanh hơn ~20% |
| **Models** | Nhiều lựa chọn | Ít hơn |
| **Batch** | Từng ảnh | Hỗ trợ batch |
| **Use case** | General | Production pipeline |

---

## 7. Privacy & Security

Vision models local giải quyết nhiều vấn đề bảo mật:

- **Ảnh y tế**: Phân tích X-ray, CT scan không cần gửi lên cloud
- **Tài liệu mật**: OCR hợp đồng, invoice nội bộ
- **Screenshot code**: Review mà không lộ source code
- **Camera feed**: Xử lý video/ảnh surveillance local

```python
# Ví dụ: xử lý tài liệu nội bộ
def process_confidential_doc(image_path):
    """Trích xuất thông tin từ tài liệu mật - hoàn toàn offline."""
    response = ollama.chat(
        model='minicpm-v',
        messages=[{
            'role': 'user',
            'content': '''Trích xuất thông tin từ tài liệu:
- Ngày tháng
- Tên người/tổ chức
- Số tiền (nếu có)
- Nội dung chính

Format JSON.''',
            'images': [image_path]
        }]
    )
    return response['message']['content']
```

---

## Tóm tắt

| Tính năng | Model khuyến nghị |
|-----------|------------------|
| Mô tả ảnh chung | `gemma3:12b` |
| OCR / đọc text | `minicpm-v` |
| Nhẹ, nhanh | `gemma3:4b` |
| Phân tích document | `qwen2.5-vl:7b` |
| Code screenshot | `gemma3:12b` |
| Batch processing | `mlx-vlm` + model 4bit |

---

## Bài tập

1. Pull model `gemma3:4b` và mô tả 5 bức ảnh khác nhau
2. Xây script OCR đọc text từ ảnh chụp trang sách
3. Tạo tool phân tích screenshot lỗi hàng loạt (5+ ảnh)
4. So sánh kết quả OCR giữa `minicpm-v` và `gemma3:12b`
5. (Bonus) Xử lý ảnh từ webcam real-time với OpenCV + Ollama vision

**Bài tiếp theo**: Tối ưu hiệu năng — RAM, context, concurrency →
