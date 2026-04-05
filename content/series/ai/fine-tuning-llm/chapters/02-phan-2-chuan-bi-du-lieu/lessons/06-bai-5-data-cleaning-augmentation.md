---
id: 019c9619-dd05-7005-e005-dd0500000005
title: 'Bài 5: Data Cleaning & Augmentation — Từ "rác" đến "vàng"'
slug: bai-5-data-cleaning-augmentation
description: >-
  Pipeline làm sạch data: dedup, filtering, quality scoring. Data augmentation techniques. Handling imbalance và edge cases. Tokenization deep-dive. Train/Val/Test split.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 4
section_title: "Phần 2: Chuẩn bị Dữ liệu — Nền tảng của mọi thành công"
course:
  id: 019c9619-aa03-7003-b003-aa0300000003
  title: "Fine-tuning LLM: Nghệ thuật Tinh chỉnh AI"
  slug: fine-tuning-llm
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4627" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4627)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1044" cy="222" r="22" fill="#f472b6" opacity="0.07"/>
    <circle cx="988" cy="286" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="932" cy="90" r="36" fill="#f472b6" opacity="0.11"/>
    <circle cx="876" cy="154" r="28" fill="#f472b6" opacity="0.13"/>
    <circle cx="820" cy="218" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="162" x2="1100" y2="242" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="192" x2="1050" y2="262" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1044.0429399400243,193.5 1044.0429399400243,230.5 1012,249 979.9570600599758,230.5 979.9570600599758,193.5 1012,175" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🧠 AI &amp; ML — Bài 4</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 5: Data Cleaning &amp; Augmentation — Từ</tspan>
      <tspan x="60" dy="42">&quot;rác&quot; đến &quot;vàng&quot;</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Fine-tuning LLM: Nghệ thuật Tinh chỉnh AI</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 2: Chuẩn bị Dữ liệu — Nền tảng của mọi thành công</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Raw data hiếm khi sẵn sàng cho fine-tuning. Bài này xây **data processing pipeline** chuyên nghiệp.

---

## 1. Data Cleaning Pipeline

```python
class DataCleaner:
    def __init__(self):
        self.stats = {"total": 0, "removed": 0, "cleaned": 0}
    
    def clean(self, examples):
        results = []
        for ex in examples:
            self.stats["total"] += 1
            
            # Step 1: Remove duplicates
            if self.is_duplicate(ex): continue
            
            # Step 2: Filter too short/long
            if not self.valid_length(ex, min_tokens=20, max_tokens=4096): continue
            
            # Step 3: Quality scoring
            if self.quality_score(ex) < 0.7: continue
            
            # Step 4: Format validation
            ex = self.normalize_format(ex)
            
            results.append(ex)
            self.stats["cleaned"] += 1
        
        return results
```

## 2. Tokenization Deep-dive

```python
import tiktoken

enc = tiktoken.encoding_for_model("gpt-4o-mini")

def analyze_dataset(examples):
    token_counts = []
    for ex in examples:
        text = json.dumps(ex, ensure_ascii=False)
        tokens = len(enc.encode(text))
        token_counts.append(tokens)
    
    print(f"Total examples: {len(token_counts)}")
    print(f"Total tokens: {sum(token_counts):,}")
    print(f"Avg tokens/example: {sum(token_counts)/len(token_counts):.0f}")
    print(f"Training cost (3 epochs, $3/1M): ${sum(token_counts)*3*3/1_000_000:.2f}")
```

## 3. Data Augmentation

- **Paraphrasing**: Viết lại câu hỏi/trả lời giữ nguyên ý nghĩa
- **Language mixing**: Thêm ví dụ tiếng Anh-Việt mix
- **Edge cases**: Tạo ví dụ cho tình huống hiếm gặp
- **Negative examples**: Dạy model biết "không nên trả lời gì"

---

## Tóm tắt

- Data cleaning pipeline: dedup → filter → quality score → normalize
- Tokenization analysis giúp tính chi phí chính xác
- Augmentation tăng diversity mà không cần thu thập thêm
- Train/Val/Test split: 80/10/10 hoặc 90/5/5

## Bài tập

1. Build data cleaning pipeline cho dataset của bạn
2. Phân tích token distribution — tìm outliers
3. Tạo 20 augmented examples từ 5 seed examples
4. Chạy quality scoring và loại bỏ examples kém

