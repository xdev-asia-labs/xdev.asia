---
id: 019c9619-ab11-7011-c111-ab1100000011
title: 'レッスン 11: OCR とドキュメントの理解'
slug: bai-11-ocr-document-understanding
description: >-
  OCR パイプライン: Tesseract、EasyOCR、PaddleOCR。ドキュメントレイアウト分析:
  LayoutLM、Doughnut。テーブルの抽出。請求書/領収書の処理。手書き認識。ベトナム語の OCR の課題。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 10
section_title: 'パート 4: 実際のアプリケーションと展開'
course:
  id: 019c9619-aa06-7006-b006-aa0600000006
  title: '深層学習によるコンピューター ビジョン: CNN から Vision Transformer まで'
  slug: computer-vision-deep-learning
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2849" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2849)"/>

  <!-- Decorations -->
  <g>
    <circle cx="815" cy="275" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="1030" cy="270" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="745" cy="265" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="960" cy="260" r="33" fill="#fb923c" opacity="0.05"/>
    <circle cx="675" cy="255" r="8" fill="#fb923c" opacity="0.1"/>
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
    <line x1="600" y1="245" x2="1100" y2="325" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="275" x2="1050" y2="345" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1029.6410161513775,175 1029.6410161513775,215 995,235 960.3589838486224,215 960.3589838486224,175 995,155" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🧠 AI と ML — レッスン 10</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 11: OCR とドキュメントの理解</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">深層学習によるコンピューター ビジョン: CNN から Vision Transformer まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: 実際のアプリケーションと展開</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

**OCR** (光学式文字認識) = 画像からテキストを読み取ります。単純そうに聞こえますが、実際は非常に複雑です。斜体、ぼかし、複数の言語、手書き、表...この記事では、基本的な OCR から最新の**ドキュメントの理解**までを取り上げます。

> 🎯 **使用例:** ナンバー プレートの読み取り、請求書/請求書の処理、文書のデジタル化、フォームの抽出。

---

## 1. OCR パイプライン

### 1.1 基本的な手順

```
Input Image (ảnh chứa chữ)
    ↓
1. Preprocessing:  Denoise, deskew, binarize
    ↓
2. Text Detection: Tìm vùng có chữ (bounding boxes)
    ↓
3. Text Recognition: Đọc chữ trong mỗi vùng
    ↓
4. Post-processing: Sửa lỗi, format output
    ↓
Output: Text + positions
```

### 1.2 一般的な OCR エンジン

|エンジン |タイプ |ベトナム語 |スピード |精度 |無料？ |
|----------|----------|----------|------|----------|----------|
| **テッセラクト** |伝統的な | ⭐⭐ | ⚡ 速い | ⭐⭐⭐ | ✅ |
| **EasyOCR** |ディープラーニング | ⭐⭐⭐⭐ | 🔥 中 | ⭐⭐⭐⭐ | ✅ |
| **パドルOCR** |ディープラーニング | ⭐⭐⭐⭐⭐ | ⚡ 速い | ⭐⭐⭐⭐⭐ | ✅ |
| **Google ビジョン** |クラウドAPI | ⭐⭐⭐⭐⭐ | ⚡ | ⭐⭐⭐⭐⭐ | 💰 |
| **Azure AI ビジョン** |クラウドAPI | ⭐⭐⭐⭐⭐ | ⚡ | ⭐⭐⭐⭐⭐ | 💰 |

---

## 2. 実践: OCR エンジン

### 2.1 テッセラクト

```python
"""Tesseract OCR — engine classic"""
# pip install pytesseract
# macOS: brew install tesseract
# Ubuntu: sudo apt install tesseract-ocr tesseract-ocr-vie

import pytesseract
from PIL import Image
import cv2

# Basic OCR
image = Image.open("document.png")
text = pytesseract.image_to_string(image, lang="vie")  # Tiếng Việt
print(text)

# OCR với bounding boxes
data = pytesseract.image_to_data(image, lang="vie", output_type=pytesseract.Output.DICT)

img_cv = cv2.imread("document.png")
for i, word in enumerate(data['text']):
    if word.strip() and int(data['conf'][i]) > 60:  # Confidence > 60%
        x, y, w, h = data['left'][i], data['top'][i], data['width'][i], data['height'][i]
        cv2.rectangle(img_cv, (x, y), (x+w, y+h), (0, 255, 0), 2)
        cv2.putText(img_cv, word, (x, y-5),
                    cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 1)
```

### 2.2 EasyOCR

```python
"""EasyOCR — Deep Learning, hỗ trợ 80+ ngôn ngữ"""
# pip install easyocr
import easyocr

# Khởi tạo (tải model lần đầu)
reader = easyocr.Reader(['vi', 'en'])  # Tiếng Việt + Anh

# OCR
results = reader.readtext("invoice.jpg")

for (bbox, text, confidence) in results:
    print(f"  [{confidence:.2%}] {text}")
    # bbox = [[x1,y1], [x2,y2], [x3,y3], [x4,y4]] — 4 corners

# OCR trên ảnh OpenCV
import cv2
img = cv2.imread("invoice.jpg")

for (bbox, text, confidence) in results:
    if confidence > 0.5:
        # Vẽ polygon
        pts = [tuple(map(int, pt)) for pt in bbox]
        cv2.polylines(img, [np.array(pts)], True, (0, 255, 0), 2)
        cv2.putText(img, text, pts[0],
                    cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 255, 0), 2)
```

### 2.3 PaddleOCR — ベトナム人に最適

```python
"""PaddleOCR — SOTA accuracy, đặc biệt tốt cho CJK + Vietnamese"""
# pip install paddlepaddle paddleocr
from paddleocr import PaddleOCR

# Khởi tạo
ocr = PaddleOCR(
    use_angle_cls=True,    # Tự phát hiện chữ xoay
    lang='vi',             # Tiếng Việt
    use_gpu=True,
)

# OCR
result = ocr.ocr("document.jpg", cls=True)

for line in result[0]:
    bbox = line[0]           # 4 điểm
    text = line[1][0]        # Text
    confidence = line[1][1]  # Confidence
    print(f"  [{confidence:.2%}] {text}")
```

---

## 3. OCR の前処理

```python
"""Preprocessing cải thiện OCR accuracy đáng kể"""
import cv2
import numpy as np

def preprocess_for_ocr(image_path):
    img = cv2.imread(image_path)

    # 1. Grayscale
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # 2. Denoise
    denoised = cv2.fastNlMeansDenoising(gray, h=10)

    # 3. Binarize (Otsu's threshold)
    _, binary = cv2.threshold(denoised, 0, 255,
                               cv2.THRESH_BINARY + cv2.THRESH_OTSU)

    # 4. Deskew (sửa nghiêng)
    coords = np.column_stack(np.where(binary < 128))
    if len(coords) > 0:
        angle = cv2.minAreaRect(coords)[-1]
        if angle < -45:
            angle = -(90 + angle)
        else:
            angle = -angle

        if abs(angle) > 0.5:
            h, w = binary.shape
            center = (w // 2, h // 2)
            M = cv2.getRotationMatrix2D(center, angle, 1.0)
            binary = cv2.warpAffine(binary, M, (w, h),
                                     flags=cv2.INTER_CUBIC,
                                     borderMode=cv2.BORDER_REPLICATE)

    # 5. Remove borders / noise
    kernel = np.ones((2, 2), np.uint8)
    binary = cv2.morphologyEx(binary, cv2.MORPH_CLOSE, kernel)

    return binary

# Sử dụng
clean_image = preprocess_for_ocr("noisy_scan.jpg")
text = pytesseract.image_to_string(clean_image, lang="vie")
```

---

## 4. ドキュメントのレイアウト分析

### 4.1 問題

```
Trang tài liệu có:
- Tiêu đề (header)
- Đoạn văn (paragraph)
- Bảng (table)
- Hình ảnh (figure)
- Chú thích (caption)
- Header / Footer

→ OCR chỉ đọc CHỮ. Layout Analysis hiểu CẤUTRÚC.
```

### 4.2 LayoutLM — ドキュメントのトランスフォーマー

```python
"""LayoutLMv3: hiểu layout + text + image cùng lúc"""
from transformers import LayoutLMv3Processor, LayoutLMv3ForTokenClassification
from PIL import Image

processor = LayoutLMv3Processor.from_pretrained(
    "microsoft/layoutlmv3-base",
    apply_ocr=True,  # Tự chạy OCR
)
model = LayoutLMv3ForTokenClassification.from_pretrained(
    "microsoft/layoutlmv3-base",
    num_labels=7,  # title, text, table, figure, list, ...
)

image = Image.open("paper_page.png")
encoding = processor(image, return_tensors="pt")

with torch.no_grad():
    outputs = model(**encoding)

# Predictions cho mỗi token
predictions = outputs.logits.argmax(-1).squeeze()
# Label: 0=other, 1=title, 2=text, 3=table, 4=figure, 5=list, 6=footer
```

### 4.3 テーブルの抽出

```python
"""Trích xuất bảng từ ảnh"""
# pip install img2table
from img2table.document import Image as Img2TableImage
from img2table.ocr import PaddleOCR as Img2TableOCR

# OCR engine
ocr = Img2TableOCR(lang="vie")

# Detect và extract tables
doc = Img2TableImage(src="invoice_with_table.jpg")
tables = doc.extract_tables(ocr=ocr)

for i, table in enumerate(tables):
    print(f"\nTable {i+1}:")
    df = table.df  # Pandas DataFrame!
    print(df.to_string())
    df.to_csv(f"table_{i+1}.csv", index=False)
```

---

## 5. 請求書/領収書の処理

```python
"""Pipeline xử lý hóa đơn"""
import re
from paddleocr import PaddleOCR

ocr = PaddleOCR(lang='vi')

def process_invoice(image_path):
    """Extract thông tin từ hóa đơn"""
    result = ocr.ocr(image_path)

    # Tập hợp tất cả text
    all_text = []
    for line in result[0]:
        text = line[1][0]
        confidence = line[1][1]
        bbox = line[0]
        all_text.append({
            "text": text,
            "confidence": confidence,
            "y_center": (bbox[0][1] + bbox[2][1]) / 2,
        })

    full_text = "\n".join([t["text"] for t in all_text])

    # Extract thông tin bằng regex
    info = {}

    # Số hóa đơn
    invoice_match = re.search(r'(?:Số|No|Invoice)\s*[:#]?\s*(\S+)', full_text, re.IGNORECASE)
    if invoice_match:
        info["invoice_number"] = invoice_match.group(1)

    # Ngày
    date_match = re.search(r'(\d{2}[/-]\d{2}[/-]\d{4})', full_text)
    if date_match:
        info["date"] = date_match.group(1)

    # Tổng tiền
    total_match = re.search(r'(?:Tổng|Total|Thành tiền)\s*[:]?\s*([\d,.]+)', full_text, re.IGNORECASE)
    if total_match:
        info["total"] = total_match.group(1)

    return info

# Test
info = process_invoice("invoice_sample.jpg")
print(f"📄 Invoice: {info}")
```

---

## 6. ベトナム語 OCR — 課題

```
Thách thức riêng cho tiếng Việt:
1. Dấu: sắc, huyền, hỏi, ngã, nặng → dễ nhầm
2. Ký tự đặc biệt: ă, â, ê, ô, ơ, ư, đ
3. Tone marks nhỏ trên chữ hoa: Ả, Ẵ, Ỗ
4. Font chữ đa dạng (đặc biệt trong tài liệu cũ)
5. Mixed language: Việt + English trong cùng document

Tips:
✅ Dùng PaddleOCR hoặc EasyOCR (tốt cho tiếng Việt)
✅ Preprocessing: denoise + binarize + deskew
✅ Post-processing: spell check tiếng Việt
✅ Test trên data thật trước khi deploy
```

---

## 概要

|コンセプト |覚えておいてください |
|----------|----------|
| **テッセラクト** |従来の OCR、高速、無料、前処理が必要 |
| **EasyOCR** |ディープラーニング、80 以上の言語、使いやすさ |
| **パドルOCR** | SOTA の精度、ベトナム人に最適 |
| **前処理** |ノイズ除去 + 2 値化 + デスキュー → 精度の向上 |
| **レイアウト分析** | LayoutLMv3 はドキュメント構造を理解します |
| **テーブルの抽出** | img2table → パンダデータフレーム |

## 一般的な演習

1. **OCR の比較:** 5 つのベトナム語画像に対して 3 つのエンジン (Tesseract、EasyOCR、PaddleOCR) すべてを実行します。精度を比較します。
2. **請求書パーサー:** 請求書読み取りパイプラインを構築します: 請求書番号、日付、合計金額を抽出します。
3. **前処理の影響:** 前処理の前後に OCR を実行します。精度は何％向上しましたか?
4. **テーブル リーダー:** 異なるテーブルを含む 3 つの画像からテーブルを抽出します。 CSVをエクスポートします。

> **次の記事:** マルチモーダル AI — 画像理解のための GPT-4o Vision、Gemini Vision。
