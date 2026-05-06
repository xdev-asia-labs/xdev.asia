---
id: 019c9619-bb09-7009-d009-bb0900000009
title: 第 9 課：視覺模型 - 無需雲的圖像分析
slug: bai-9-vision-models-phan-tich-hinh-anh-khong-can-cloud
description: >-
  在 Apple Silicon 上運行 LLaVA、Gemma 3 Vision、Qwen VL。圖像分析、文字閱讀、OCR、描述——全部離線。整合
  mlx-vlm 以實現高性能。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 2
section_title: 第 3 部分：API 整合與應用程式編程
course:
  id: 019c9619-aa11-7011-b011-aa1100000011
  title: 在 Apple Silicon 上使用 Ollama 運行本地 AI
  slug: ollama-apple-silicon
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9740" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9740)"/>

  <!-- Decorations -->
  <g>
    <circle cx="986" cy="228" r="24" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="872" cy="34" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="758" cy="100" r="10" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="644" cy="166" r="18" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="1030" cy="232" r="26" fill="#2dd4bf" opacity="0.05"/>
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
    <line x1="600" y1="228" x2="1100" y2="308" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="258" x2="1050" y2="328" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1065.2390923627308,206.5 1065.2390923627308,249.5 1028,271 990.7609076372692,249.5 990.7609076372692,206.5 1028,185" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 人工智慧與機器學習 — 第 2 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 9 課：視覺模型 - 影像分析</tspan>
      <tspan x="60" dy="42">不需要雲</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">在 Apple Silicon 上使用 Ollama 運行本地 AI</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：API 整合與應用程式編程</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

視覺模型（VLM - 視覺語言模型）可以「看到」並理解圖像。借助 Apple Silicon 和 Ollama，您可以完全在本地運行 — 無需將敏感照片發送到雲端。

---

## 1. Ollama 上的視覺模型

### 熱門車型

|型號|尺寸|需要內存|特點|
|--------|---------|---------|------------|
| `llava:7b` | 4.7GB| 8GB|第一個 VLM 模型，穩定 |
| `llava:13b` | 8.0GB| 12GB|更準確|
| `llava-llama3` | 5.5 GB | 5.5 GB 8GB|基於羊駝 3 |
| `gemma3:4b` | 3.3 GB | 3.3 GB 6GB|輕巧、快速、支援視力 |
| `gemma3:12b` | 8.1GB| 12GB|良好的平衡性|
| `gemma3:27b` | 17GB| 24GB|最高品質 |
| `qwen2.5-vl:7b` | 5.3GB| 10GB|擅長文字/文件 |
| `minicpm-v` | 5.5 GB | 5.5 GB 8GB|小巧、強大的 OCR |

### 拉模型

```bash
# Khuyến nghị cho MacBook 16GB RAM
ollama pull gemma3:12b

# Cho MacBook 8GB RAM
ollama pull gemma3:4b

# Model OCR chuyên dụng
ollama pull minicpm-v
```

---

## 2. 從 CLI 使用

### 圖片說明

```bash
# Mô tả ảnh
ollama run gemma3:12b "Describe this image in detail" ./screenshot.png

# Tiếng Việt
ollama run gemma3:12b "Mô tả chi tiết hình ảnh này" ./photo.jpg
```

### 很多照片

```bash
ollama run gemma3:12b "So sánh 2 bức ảnh này" ./before.png ./after.png
```

---

## 3. Python：影像分析

### Ollama 庫的基礎知識

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

### 使用base64

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

### 直接使用API

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

## 4. 實際用例

### 4.1。 OCR — 從圖像中讀取文本

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

### 4.2。從截圖分析程式碼

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

### 4.3。描述使用者介面/使用者體驗

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

### 4.4。多幅影像的批次處理

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

## 5. 比較 Vision 模型的效能

MacBook Pro M3 Pro 18GB RAM 的基準測試：

|型號|回應時間|品質說明| OCR 準確率 |
|--------|--------------------|--------------------|------------|
| `gemma3:4b` | 〜3秒| ⭐⭐⭐ | ⭐⭐⭐ |
| `gemma3:12b` | 〜8秒| ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| `llava:7b` | 〜5秒| ⭐⭐⭐ | ⭐⭐ |
| `minicpm-v` | 〜6秒| ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| `qwen2.5-vl:7b` | 〜7秒| ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |

### 腳本基準測試

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

## 6. mlx-vlm — 使用 MLX 運行 Vision 模型

如果您需要更高的效能（批次、自訂管道），請使用 `mlx-vlm`：

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

比較 Ollama 與 mlx-vlm：

| |奧拉瑪 | MLX-VLM |
|--|--------|---------|
| **設定** |輕鬆拉動即可運行 |需要 pip 安裝，代碼 |
| **API** |休息，CLI |僅限Python |
| **速度** |好 |快約 20% |
| **型號** |多種選擇 |少 |
| **批次** |每張照片|批量支援|
| **用例** |一般|生產管線|

---

## 7. 隱私與安全

本地視覺模型解決了許多安全問題：

- **醫學影像**：X光和CT掃描分析不需要傳送到雲端
- **機密文件**：OCR 合約、內部發票
- **截圖程式碼**：在不透露原始程式碼的情況下查看
- **攝影機饋送**：處理本地監控影片/照片

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

## 總結

|特點|建議型號|
|------------|------------|
|一般照片說明 | `gemma3:12b` |
| OCR/文字閱讀 | `minicpm-v` |
|輕、快| `gemma3:4b` |
|分析文檔 | `qwen2.5-vl:7b` |
|程式碼截圖| `gemma3:12b` |
|批量處理 | `mlx-vlm` + 4位元模型|

---

## 練習

1. 拉動模型 `gemma3:4b` 並描述5張不同的照片
2. 建立 OCR 腳本以從書頁照片中讀取文本
3. 建立一個分析批次錯誤截圖的工具（5+張圖片）
4. 比較 OCR 結果 `minicpm-v` 和 `gemma3:12b`
5.（獎勵）使用 OpenCV + Ollama 視覺即時處理來自網路攝影機的影像

**下一篇文章**：最佳化效能 — RAM、上下文、並發 →
