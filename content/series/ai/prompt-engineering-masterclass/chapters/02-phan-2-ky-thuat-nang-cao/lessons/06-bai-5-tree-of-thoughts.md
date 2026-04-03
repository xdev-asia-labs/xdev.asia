---
id: 019c9619-ee05-7005-f005-ee0500000005
title: 'Bài 5: Tree-of-Thoughts, Self-Consistency & Step-Back'
slug: bai-5-tree-of-thoughts
description: >-
  Kỹ thuật nâng cao: Tree-of-Thoughts, Self-Consistency, Step-Back Prompting.
  So sánh hiệu quả từng kỹ thuật.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 4
section_title: "Phần 2: Kỹ thuật Nâng cao"
course:
  id: 019c9619-aa04-7004-b004-aa0400000004
  title: "Prompt Engineering Masterclass: Nghệ thuật Ra lệnh cho AI"
  slug: prompt-engineering-masterclass
---

![Tree-of-Thoughts: IO vs CoT vs ToT — Multi-path Reasoning](/storage/uploads/2026/04/pe-bai-5-tree-of-thoughts.png)

## Giới thiệu

Chain-of-Thought (CoT) bắt AI suy nghĩ **theo 1 đường**. Nhưng nhiều bài toán có **nhiều hướng** giải quyết — CoT chỉ explore 1 hướng và có thể chọn sai.

Bài này giới thiệu 3 kỹ thuật **mạnh hơn CoT**:

| Kỹ thuật | Ý tưởng | Ví dụ đời thường |
|---------|---------|----------------|
| **Tree-of-Thoughts** | Explore nhiều hướng, chọn hướng tốt nhất | GPS: thử 3 đường, chọn nhanh nhất |
| **Self-Consistency** | Giải nhiều lần, chọn đáp án phổ biến nhất | Hỏi 5 bác sĩ, lấy ý kiến đa số |
| **Step-Back** | Hỏi câu tổng quan trước khi giải cụ thể | Lùi lại nhìn bức tranh lớn trước khi tô chi tiết |

---

## 1. Tree-of-Thoughts (ToT)

### 1.1 So sánh với CoT

```
CoT (Chain):     A → B → C → D → Answer
                 1 đường duy nhất, nếu B sai → tất cả sai

ToT (Tree):      A → B1 → C1 → ✅ Answer 1 (score: 8/10)
                   → B2 → C2 → ❌ Dead end
                   → B3 → C3 → ✅ Answer 2 (score: 9/10) ← Winner!
                 Explore nhiều nhánh, chọn nhánh tốt nhất
```

### 1.2 Prompt Template cho ToT

```
Bài toán: [vấn đề cần giải]

Hãy giải theo phương pháp Tree-of-Thoughts:

## Bước 1: Brainstorm (3 hướng tiếp cận)
- Hướng A: [mô tả]
- Hướng B: [mô tả]
- Hướng C: [mô tả]

## Bước 2: Đánh giá mỗi hướng (1-10)
Với mỗi hướng, phân tích:
- Feasibility (khả thi?)
- Quality (chất lượng kết quả?)
- Effort (tốn bao nhiêu effort?)

## Bước 3: Chọn hướng tốt nhất
Chọn hướng có score cao nhất và phát triển chi tiết.

## Bước 4: Giải chi tiết theo hướng đã chọn

## Bước 5: Verify
Kiểm tra lại đáp án, liệu có hướng nào tốt hơn không?
```

### 1.3 Ví dụ: Thiết kế Architecture

```
Thiết kế system architecture cho app chat real-time
(10K concurrent users).

Dùng Tree-of-Thoughts:

Hướng 1: WebSocket + Redis Pub/Sub + PostgreSQL
Hướng 2: SSE (Server-Sent Events) + Kafka + MongoDB
Hướng 3: gRPC streaming + NATS + CockroachDB

Với mỗi hướng, đánh giá:
- Scalability (1-10)
- Complexity (1-10, thấp = đơn giản hơn)
- Latency (1-10, cao = nhanh hơn)
- Cost (1-10, cao = rẻ hơn)

Chọn hướng tốt nhất, giải thích trade-offs.
Vẽ architecture diagram (text-based).
```

> **💡 Bài tập 1:** Dùng ToT prompt để giải: "Chọn tech stack cho MVP app quản lý chi tiêu cá nhân (mobile-first, 3 tháng, đội 2 dev)". So sánh 3 hướng, chọn 1.

---

## 2. Self-Consistency

### 2.1 Ý tưởng

**Ví dụ thực tế:** Bạn không chắc 27 × 13 = bao nhiêu. Bạn tính 3 lần:
- Lần 1: 351 ✅
- Lần 2: 341 ❌
- Lần 3: 351 ✅
→ **Đáp án: 351** (2/3 votes)

Self-Consistency = gọi AI **nhiều lần** với cùng prompt, lấy đáp án **phổ biến nhất**.

### 2.2 Implementation

```python
"""Self-Consistency: gọi API 5 lần, lấy đáp án đa số"""
from openai import OpenAI
from collections import Counter

client = OpenAI()

question = """
Một cửa hàng mua 100 quả cam với giá 5000đ/quả.
Bán lẻ 60 quả với giá 8000đ/quả.
Bán sỉ 30 quả với giá 6000đ/quả.
10 quả hỏng. Hỏi lãi/lỗ bao nhiêu?
Chỉ trả lời số tiền và lãi/lỗ.
"""

# Gọi 5 lần với temperature > 0 (để có diversity)
answers = []
for i in range(5):
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        temperature=0.7,  # Cho phép variation
        messages=[
            {"role": "user", "content": question + "\nLet's think step by step."}
        ]
    )
    answer = response.choices[0].message.content
    answers.append(answer)
    print(f"Run {i+1}: {answer.strip()[:80]}")

# Lấy đáp số phổ biến nhất
print(f"\n{'='*40}")
print(f"5 answers collected → majority vote:")
# Trong thực tế, extract số từ text rồi đếm
```

### 2.3 Khi nào dùng Self-Consistency?

| ✅ Dùng khi | ❌ Không dùng khi |
|-----------|-----------------|
| Bài toán có 1 đáp án đúng | Bài sáng tạo (viết bài, brainstorm) |
| Cần confidence cao | Budget hạn chế (gọi 5× = 5× cost) |
| Bài toán khó, model hay sai | Bài toán đơn giản (zero-shot đủ) |

---

## 3. Step-Back Prompting

### 3.1 Ý tưởng

**Thay vì** hỏi trực tiếp câu hỏi cụ thể, **lùi lại** hỏi câu hỏi **tổng quan hơn** trước:

```
❌ Trực tiếp: "Nhiệt độ sôi của nước ở độ cao 3000m?"
   → AI có thể bịa

✅ Step-Back:
   Bước 1: "Quy luật nào ảnh hưởng nhiệt độ sôi?"
   → AI: "Áp suất. Áp suất thấp → nhiệt độ sôi giảm."
   
   Bước 2: "Vậy ở 3000m (áp suất ~70kPa), nhiệt độ sôi là?"
   → AI: "~90°C" ✅ (chính xác hơn nhiều!)
```

### 3.2 Template

```
Câu hỏi chính: [câu hỏi cụ thể]

Trước khi trả lời, hãy:
1. [STEP BACK] Xác định nguyên tắc/lý thuyết nền tảng liên quan
2. [CONTEXT] Áp dụng nguyên tắc vào bối cảnh cụ thể
3. [ANSWER] Trả lời chính xác câu hỏi
```

### 3.3 Ví dụ thực tế

**Debugging:**
```
Bug: App crash khi user upload file > 10MB.

Step-Back: Trước khi debug:
1. Những yếu tố nào ảnh hưởng file upload? (memory, timeout, server config, client validation)
2. Kiến trúc upload trong app này: client → API → S3?
3. Giới hạn nào đang được set? (nginx, express, multer)

Giờ hãy phân tích bug dựa trên framework trên.
```

**Business Decision:**
```
Câu hỏi: Có nên mở chi nhánh ở Đà Nẵng?

Step-Back trước:
1. Những yếu tố nào quyết định mở chi nhánh thành công?
   (market size, competition, cost, talent pool, logistics)
2. Đà Nẵng đang ở đâu trên mỗi yếu tố này?
3. So sánh với alternatives (Cần Thơ, Hải Phòng, online expansion)?

Sau đó đưa recommendation.
```

> **💡 Bài tập 3:** Dùng Step-Back cho câu hỏi: "Nên dùng PostgreSQL hay MongoDB cho app e-commerce?" — bắt AI xác định nguyên tắc chọn DB trước, rồi mới so sánh cụ thể.

---

## 4. So sánh tất cả kỹ thuật

| Kỹ thuật | Accuracy | Token cost | Complexity | Best for |
|---------|----------|-----------|-----------|---------|
| **Zero-shot** | ⭐⭐ | ⭐ (ít nhất) | ⭐ (dễ nhất) | Task đơn giản |
| **Few-shot** | ⭐⭐⭐ | ⭐⭐ | ⭐⭐ | Pattern matching |
| **CoT** | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐ | Logic, toán |
| **ToT** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | Design, planning |
| **Self-Consistency** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ (đắt nhất) | ⭐⭐ | High-stakes accuracy |
| **Step-Back** | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ | Complex domain |

### Decision Framework

```
Bạn cần gì?
├── Task đơn giản → Zero-shot / Few-shot
├── Cần suy luận logic → CoT
├── Cần explore nhiều hướng → ToT
├── Cần đáp án chính xác nhất → Self-Consistency
└── Bài toán domain phức tạp → Step-Back + CoT
```

---

## 5. Kết hợp nhiều kỹ thuật

### 5.1 CoT + Self-Consistency

```python
# Gọi CoT 5 lần, lấy đa số
for i in range(5):
    response = call_ai(prompt + "\nThink step by step.")
    answers.append(extract_answer(response))
final = majority_vote(answers)
```

### 5.2 Step-Back + ToT

```
Bài toán: Thiết kế payment system cho marketplace.

Step-Back (nguyên tắc trước):
1. Những yếu tố quan trọng nhất trong payment system?
   (security, reliability, latency, compliance, cost)
2. Các pattern phổ biến? (escrow, direct, split payment)

Tree-of-Thoughts (explore):
Hướng A: Stripe Connect (hosted, simple)
Hướng B: Custom (PayOS + VNPay, localized)
Hướng C: Hybrid (Stripe international + VNPay domestic)

Đánh giá mỗi hướng theo 5 tiêu chí ở step 1.
Chọn hướng tốt nhất.
```

---

## Tóm tắt

| Concept | Ghi nhớ |
|---------|---------|
| **ToT** | Explore 3+ hướng, đánh giá, chọn tốt nhất |
| **Self-Consistency** | Gọi N lần, majority vote — đắt nhưng accurate |
| **Step-Back** | Hỏi nguyên tắc tổng quan trước khi giải cụ thể |
| **Kết hợp** | Step-Back + CoT hoặc ToT + Self-Consistency |

## Bài tập tổng hợp

1. ✅ Hoàn thành bài tập nhỏ (1, 3)
2. **Technique Comparison:** Chọn 1 bài toán design (VD: "thiết kế URL shortener"). Giải bằng: CoT, ToT, Step-Back+CoT. So sánh chất lượng output.
3. **Self-Consistency Test:** Chọn 5 bài toán toán/logic. Giải mỗi bài 5 lần (temperature=0.7). Majority vote accuracy vs single-shot accuracy?
4. **Combo Prompt:** Tạo 1 "mega prompt" kết hợp Step-Back + ToT cho use case thực tế. Test và iterate.

> **Bài tiếp theo:** Structured Output — JSON mode, Function Calling Schema, và cách ép AI trả lời format parse-able cho pipeline tự động.
