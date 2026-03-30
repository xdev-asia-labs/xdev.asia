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

