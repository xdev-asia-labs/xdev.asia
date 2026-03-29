---
id: 019c9619-dd04-7004-e004-dd0400000004
title: 'Bài 4: Thu thập & Thiết kế Dataset cho Fine-tuning'
slug: bai-4-thu-thap-thiet-ke-dataset
description: >-
  Các loại dataset: instruction-following, conversation, classification. Format JSONL chuẩn. Thu thập data từ logs, docs, user feedback. Synthetic data generation. Quality vs Quantity.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 3
section_title: "Phần 2: Chuẩn bị Dữ liệu — Nền tảng của mọi thành công"
course:
  id: 019c9619-aa03-7003-b003-aa0300000003
  title: "Fine-tuning LLM: Nghệ thuật Tinh chỉnh AI"
  slug: fine-tuning-llm
---

## Giới thiệu

**"Garbage in, garbage out"** — chưa bao giờ đúng hơn khi nói về fine-tuning. Dataset chất lượng là 90% thành công.

---

## 1. Format Dataset chuẩn JSONL

### 1.1 Instruction-following format
```json
{"messages": [
  {"role": "system", "content": "Bạn là trợ lý y khoa tiếng Việt."},
  {"role": "user", "content": "Triệu chứng sốt xuất huyết?"},
  {"role": "assistant", "content": "Sốt xuất huyết dengue có các triệu chứng chính:\n1. Sốt cao đột ngột 39-40°C\n2. Đau đầu dữ dội..."}
]}
```

### 1.2 Multi-turn conversation format
```json
{"messages": [
  {"role": "system", "content": "..."},
  {"role": "user", "content": "Câu hỏi 1"},
  {"role": "assistant", "content": "Trả lời 1"},
  {"role": "user", "content": "Follow-up"},
  {"role": "assistant", "content": "Trả lời follow-up"}
]}
```

---

## 2. Nguồn dữ liệu

### 2.1 Từ production logs
```python
# Extract từ customer support logs
def extract_training_data(support_logs):
    training_data = []
    for log in support_logs:
        if log["customer_rating"] >= 4:  # Chỉ lấy conversations tốt
            training_data.append({
                "messages": [
                    {"role": "system", "content": SYSTEM_PROMPT},
                    {"role": "user", "content": log["customer_question"]},
                    {"role": "assistant", "content": log["agent_response"]}
                ]
            })
    return training_data
```

### 2.2 Synthetic Data Generation
```python
def generate_synthetic_data(seed_examples, n=100):
    prompt = f"Given these examples, generate {n} similar but diverse examples..."
    # Dùng GPT-4o/Claude để generate training data cho model nhỏ hơn
```

---

## 3. Bao nhiêu data là đủ?

| Use case | Minimum | Recommended | Excellent |
|----------|---------|-------------|-----------|
| Style/tone change | 50 | 200 | 500+ |
| Domain-specific | 100 | 500 | 2,000+ |
| Classification | 50/class | 200/class | 1,000+/class |
| Complex reasoning | 200 | 1,000 | 5,000+ |

> 💡 **Quality >> Quantity**: 100 ví dụ hoàn hảo > 1,000 ví dụ trung bình

---

## Tóm tắt

- JSONL format với messages array là chuẩn phổ biến nhất
- Nguồn data: production logs, manual creation, synthetic generation
- Quality > Quantity — đầu tư thời gian vào data có ROI cao nhất
- Bắt đầu với 100–200 examples chất lượng cao

## Bài tập

1. Tạo 50 training examples cho use case bạn chọn
2. Thử synthetic data generation — so sánh manual vs synthetic quality
3. Validate dataset: kiểm tra format, xử lý edge cases
4. Split thành train (80%) / validation (10%) / test (10%)

