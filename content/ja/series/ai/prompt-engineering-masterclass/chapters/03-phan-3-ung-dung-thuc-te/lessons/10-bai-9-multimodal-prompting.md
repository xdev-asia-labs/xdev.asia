---
id: 019c9619-ee09-7009-f009-ee0900000009
title: 'レッスン 9: マルチモーダル プロンプト — 画像、音声、ビデオ'
slug: bai-9-multimodal-prompting
description: 'マルチメディア入力の迅速なエンジニアリング: 画像分析、音声転写、ビデオ理解。画像記述技術、OCR、図表。'
duration_minutes: 120
is_free: true
video_url: null
sort_order: 8
section_title: 'パート 3: 実用化'
course:
  id: 019c9619-aa04-7004-b004-aa0400000004
  title: 'プロンプト エンジニアリング マスタークラス: AI にコマンドを与える技術'
  slug: prompt-engineering-masterclass
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 AI と ML — レッスン 8</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 9: マルチモーダル プロンプト — 画像、音声</tspan>
      <tspan x="60" dy="42">＆ビデオ</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">プロンプト エンジニアリング マスタークラス: AI にコマンドを与える技術</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: 実用化</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

プロンプトエンジニアリングはテキストだけではありません。マルチモーダル AI (GPT-4o、Claude、Gemini) は、**写真**、**音声**、**ビデオ**を理解します。マルチモーダルの適切なプロンプト = **タスク** + **フォーカスエリア** + **出力形式**を明確に説明しています。

> **例:** 同じチャート画像でも、プロンプトが異なれば結果も異なります。
> - 「この写真について説明します」 → 概要説明
> - 「チャート内のすべてのデータ ポイントを読み取り、CSV として出力」 → 構造化データ
> - 「第 1 四半期と第 3 四半期の傾向の比較、結論」 → ビジネスの洞察

---

## 1. 画像プロンプト — 静止画像

### 1.1 画像のプロンプト構造

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

### 1.2 一般的な使用例

|使用例 |プロンプトテンプレート |
|------|----------------|
| **OCR** | 「画像内のすべてのテキストを読み取り、書式はそのままにします」 |
| **チャート** | 「データポイントを抽出、CSV出力。トレンド説明」 |
| **スクリーンショット** | "UI について説明します: レイアウト、要素、色。UX の問題をリストします。" |
| **請求書** | "抽出: 販売者、日付、品目、金額、合計。JSON を出力" |
| **図** | "図の説明: エンティティ、関係、フロー" |

### 1.3 例: チャートからデータを抽出する

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

### 1.4 詳細レベル

```
detail: "low"   → 85 tokens, nhanh, ảnh tổng quát
detail: "high"  → 1105+ tokens, chậm hơn, chi tiết text/numbers
detail: "auto"  → AI tự chọn

Khi nào dùng gì:
- Phân loại ảnh (cat/dog): low
- OCR, đọc biểu đồ: high
- Screenshot general: auto
```

> **💡 演習 1:** ダッシュボード/Web サイトのスクリーンショットを撮ります。 3 つの異なるプロンプトを使用します: (a) 一般的な説明、(b) テキストの抽出、(c) UX の確認。出力を比較します。

---

## 2. 複数画像のプロンプト

### 2.1 2 つの画像を比較する

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

### 2.2 バッチ処理

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

## 3. 音声プロンプト

### 3.1 転写 + 分析

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

### 3.2 音声分析のプロンプト

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

## 4. ビデオの理解

### 4.1 ビデオ → フレーム → 分析

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

### 4.2 Gemini ビデオの理解

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

> **💡演習 2:** 短い YouTube ビデオを選択します (< 5 分)。 30秒ごとにフレームを抽出→GPT-4oに送信→解析結果をGemini（ネイティブビデオ）と比較。どちらのモデルがよりよく理解できるでしょうか?

---

## 5. マルチモーダル プロンプトを最適化するためのヒント

### 5.1 Best practices

|ヒント |説明 |
|-----|-----------|
| **画像タイプを指定してください** | 「この写真は縦棒グラフです」は「写真の説明」よりも優れています |
| **詳細レベル** |使用 `high` cho text/numbers, `low` cho classification |
| **Output format** | Specify: JSON, CSV, markdown table |
| **地域に重点を置く** | 「右上隅に焦点を当てます」 |
| **マルチステップ** |最初に OCR → 後で分析 (2 プロンプト) |
| **言語** |画像が多言語の場合は出力言語を指定する |

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

＃＃ まとめ

|モダリティ |ベストモデル |主要なプロンプト要素 |
|---------|----------------|-------------------|
| **Image** | GPT-4o, Claude | Image type, task, detail level, output format |
| **Audio** | Whisper + GPT-4o | Language, speaker count, analysis type |
| **Video** | Gemini 2.0 | Timeline, key frames, transcript |
| **Multi-image** | GPT-4o | Compare/batch instruction, structured output |

## 一般的な演習

1. ✅ 2 つの小さな演習 (1、2) を完了します。
2. **請求書プロセッサ:** パイプラインの構築: 請求書画像 → OCR + 抽出 (JSON) → 検証 → CSV 保存。 10 件の請求書を処理し、精度を測定します。
3. **会議 AI:** 会議音声 → ささやき文字起こし → GPT-4o 要約 → アクションアイテムを含む会議メモの出力。実際の録音でテストします。
4. **UI レビューアー:** スクリーンショット アプリ → AI が UX (アクセシビリティ、レイアウト、色のコントラスト) をレビュー → 重大な問題のリストを出力します。

> **次の記事:** プロンプト テストと評価フレームワーク — プロンプト、A/B テスト、回帰テストの品質を測定します。
