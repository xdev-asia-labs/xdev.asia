---
id: 019c9619-bb09-7009-d009-bb0900000009
title: 'レッスン 9: ビジョン モデル - クラウドを使用しない画像解析'
slug: bai-9-vision-models-phan-tich-hinh-anh-khong-can-cloud
description: >-
  Apple Silicon 上で LLaVA、Gemma 3 Vision、Qwen VL を実行します。画像分析、テキスト読み取り、OCR、説明 –
  すべてオフライン。高いパフォーマンスを実現するために mlx-vlm を統合します。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 2
section_title: 'パート 3: API 統合とアプリケーション プログラミング'
course:
  id: 019c9619-aa11-7011-b011-aa1100000011
  title: Apple Silicon で Ollama を使用して AI Local を実行する
  slug: ollama-apple-silicon
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 AI と ML — レッスン 2</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 9: ビジョン モデル - 画像解析</tspan>
      <tspan x="60" dy="42">クラウドは必要ありません</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Apple Silicon で Ollama を使用して AI Local を実行する</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: API 統合とアプリケーション プログラミング</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

ビジョン モデル (VLM - ビジョン言語モデル) は、画像を「見て」理解することができます。 Apple Silicon と Ollama のおかげで、完全にローカルで実行できるため、機密性の高い写真をクラウドに送信する必要がありません。

---

## 1. Ollama のビジョン モデル

### 人気モデル

|モデル |サイズ |必要なRAM |特長 |
|----------|----------|----------|----------|
| `llava:7b` | 4.7GB | 8GB |最初の VLM モデル、安定 |
| `llava:13b` | 8.0GB | 12GB |より正確に |
| `llava-llama3` | 5.5GB | 8GB |ラマ 3 に基づく |
| `gemma3:4b` | 3.3GB | 6GB |軽くて速く、視覚をサポート |
| `gemma3:12b` | 8.1GB | 12GB |バランスが良い |
| `gemma3:27b` | 17GB | 24GB |最高品質 |
| `qwen2.5-vl:7b` | 5.3GB | 10GB |テキスト/ドキュメントに優れています |
| `minicpm-v` | 5.5GB | 8GB |コンパクトで強力なOCR |

### プルモデル

```bash
# Khuyến nghị cho MacBook 16GB RAM
ollama pull gemma3:12b

# Cho MacBook 8GB RAM
ollama pull gemma3:4b

# Model OCR chuyên dụng
ollama pull minicpm-v
```

---

## 2. CLIから使用する

### 写真の説明

```bash
# Mô tả ảnh
ollama run gemma3:12b "Describe this image in detail" ./screenshot.png

# Tiếng Việt
ollama run gemma3:12b "Mô tả chi tiết hình ảnh này" ./photo.jpg
```

### たくさんの写真

```bash
ollama run gemma3:12b "So sánh 2 bức ảnh này" ./before.png ./after.png
```

---

## 3. Python: 画像解析

### Ollama ライブラリの基本

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

### Base64 を使用する

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

### API を直接使用する

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

## 4. 実際の使用例

＃＃＃４．１． OCR — 画像からテキストを読み取る

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

＃＃＃４．２．スクリーンショットからコードを分析する

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

＃＃＃４．３． UI/UXの説明

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

＃＃＃４．４．複数画像の一括処理

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

## 5. Vision モデルのパフォーマンスを比較する

MacBook Pro M3 Pro 18GB RAM でのベンチマーク:

|モデル |応答時間 |品質説明 | OCR 精度 |
|----------|-------------------|---------------------|--------------|
| `gemma3:4b` | ~3秒 | ⭐⭐⭐ | ⭐⭐⭐ |
| `gemma3:12b` | ～8秒 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| `llava:7b` | ~5秒 | ⭐⭐⭐ | ⭐⭐ |
| `minicpm-v` | ~6秒 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| `qwen2.5-vl:7b` | ～7秒 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |

### スクリプトのベンチマーク

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

## 6. mlx-vlm — MLX を使用して Vision モデルを実行する

より高いパフォーマンス (バッチ処理、カスタム パイプライン) が必要な場合は、次を使用します。 `mlx-vlm`:

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

Ollama と mlx-vlm を比較します。

| |オラマ | mlx-vlm |
|---|--------|----------|
| **セットアップ** |簡単、引っ張って実行 | pip インストール、コードが必要です |
| **API** |レスト、CLI | Python のみ |
| **速度** |良い | ~20% 高速 |
| **モデル** |多くのオプション |少ない |
| **バッチ** |各写真 |バッチサポート |
| **使用例** |一般 |生産パイプライン |

---

## 7. プライバシーとセキュリティ

ローカルのビジョン モデルは、多くのセキュリティ問題を解決します。

- **医療画像**: X 線および CT スキャン分析をクラウドに送信する必要はありません
- **機密文書**: OCR契約書、社内請求書
- **スクリーンショット コード**: ソース コードを公開せずにレビューします
- **カメラ フィード**: ローカル監視ビデオ/写真を処理します

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

## 概要

|特長 |おすすめモデル｜
|----------|----------|
|一般的な写真の説明 | `gemma3:12b` |
| OCR / テキスト読み取り | `minicpm-v` |
|軽くて速い | `gemma3:4b` |
|文書を分析する | `qwen2.5-vl:7b` |
|コードのスクリーンショット | `gemma3:12b` |
|バッチ処理 | `mlx-vlm` + 4bitモデル |

---

## 演習

1.プルモデル `gemma3:4b` 5 つの異なる写真について説明します
2.書籍ページの写真からテキストを読み取る OCR スクリプトを構築する
3. バッチエラーのスクリーンショットを分析するツールを作成します (5 枚以上の画像)
4. OCR 結果を比較します。 `minicpm-v` そして `gemma3:12b`
5. (おまけ) OpenCV + Ollama ビジョンを使用して Web カメラからの画像をリアルタイムに処理する

**次の記事**: パフォーマンスの最適化 — RAM、コンテキスト、同時実行 →
