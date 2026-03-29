---
id: 019c9619-ee03-7003-f003-ee0300000003
title: 'Bài 3: Few-Shot, Zero-Shot & Output Formatting'
slug: bai-3-few-shot-zero-shot
description: >-
  Khi nào dùng zero-shot, few-shot, many-shot. Viết examples hiệu quả.
  Output formatting: Markdown, JSON, CSV, XML. Template design patterns.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: "Phần 1: Nền tảng Prompt Engineering"
course:
  id: 019c9619-aa04-7004-b004-aa0400000004
  title: "Prompt Engineering Masterclass: Nghệ thuật Ra lệnh cho AI"
  slug: prompt-engineering-masterclass
---

## Giới thiệu

Ở 2 bài trước, bạn đã học cách viết prompt cấu trúc và tạo persona. Bài này dạy 2 kỹ thuật **mạnh nhất** trong Prompt Engineering: **cho ví dụ** (few-shot) và **ép format** output.

> **Nguyên tắc vàng:** AI sẽ **bắt chước** ví dụ bạn cho. Cho ví dụ tốt = output tốt. Cho ví dụ xấu = output xấu.

---

## 1. Zero-Shot, One-Shot, Few-Shot — Khác gì nhau?

### 1.1 Định nghĩa

| Kỹ thuật | Số ví dụ | Khi nào dùng |
|---------|---------|-------------|
| **Zero-Shot** | 0 ví dụ | Task đơn giản, AI đã "biết" sẵn |
| **One-Shot** | 1 ví dụ | Cần định hướng format/style |
| **Few-Shot** | 2-5 ví dụ | Cần consistency cao, task phức tạp |
| **Many-Shot** | 10+ ví dụ | Task rất đặc thù, pattern lạ |

### 1.2 So sánh bằng ví dụ

**Bài toán:** Phân loại sentiment câu review

**Zero-Shot:**
```
Phân loại sentiment: "Sản phẩm rất tốt, giao hàng nhanh!"
→ Output: Positive (thường đúng — task phổ biến)
```

**One-Shot:**
```
Phân loại sentiment (Positive / Negative / Neutral):

Ví dụ: "Hàng đẹp, ship nhanh" → Positive

Giờ phân loại: "Sản phẩm tạm được nhưng giao chậm"
→ Output: Neutral ← chính xác hơn vì có ví dụ!
```

**Few-Shot:**
```
Phân loại sentiment (Positive / Negative / Neutral):

Ví dụ 1: "Hàng đẹp, ship nhanh" → Positive
Ví dụ 2: "Sản phẩm lỗi, không đổi được" → Negative
Ví dụ 3: "Bình thường, không có gì đặc biệt" → Neutral

Giờ phân loại: "Chất lượng ổn nhưng đóng gói sơ sài"
→ Output: Neutral ← rất chính xác!
```

### 1.3 Tại sao Few-Shot hiệu quả?

AI học **pattern** từ ví dụ:

```
Ví dụ → AI nhận ra:
- Input format: "câu review" → Output format: "label"
- Logic: khen = Positive, chê = Negative, trung tính = Neutral
- Edge case: khen + chê = Neutral (không phải random)
```

**Không cần giải thích rules** — chỉ cần **cho ví dụ đủ tốt**!

> **💡 Bài tập 1.1:** Viết few-shot prompt (3 ví dụ) cho: phân loại email thành 3 category: `Inquiry`, `Complaint`, `Thank You`. Test với 5 emails thực tế.

---

## 2. Viết Few-Shot Examples hiệu quả

### 2.1 Quy tắc chọn ví dụ

| Quy tắc | ❌ Sai | ✅ Đúng |
|---------|------|-------|
| **Đa dạng** | 3 ví dụ cùng loại | 3 ví dụ khác loại (cover edge cases) |
| **Đại diện** | Ví dụ quá dễ | Ví dụ ở ranh giới (ambiguous) |
| **Consistent** | Format khác nhau mỗi ví dụ | Format **giống hệt** mỗi ví dụ |
| **Realistic** | Ví dụ bịa đặt | Ví dụ từ data thật |

### 2.2 Ví dụ: Extract thông tin từ text

**❌ Few-shot xấu** (ví dụ quá dễ, format không nhất quán):

```
Extract thông tin:

"Tôi là Minh, 25 tuổi" → Tên: Minh, Tuổi: 25
"An, sinh năm 2000" → An, 24 tuổi
"Hoa, 30" → Hoa

Input: "Nguyễn Văn Bình, 35 tuổi, ở Hà Nội"
```

**✅ Few-shot tốt** (đa dạng, consistent format, có edge case):

```
Extract thông tin từ text. Trả về JSON.
Nếu thiếu thông tin, ghi null.

Input: "Nguyễn Minh, 25 tuổi, developer ở Sài Gòn"
Output: {"name": "Nguyễn Minh", "age": 25, "job": "developer", "city": "Sài Gòn"}

Input: "Chị Hoa, hiện đang làm giáo viên"
Output: {"name": "Hoa", "age": null, "job": "giáo viên", "city": null}

Input: "Intern 22 tuổi tên Đức, HN"
Output: {"name": "Đức", "age": 22, "job": "intern", "city": "Hà Nội"}

Input: "Nguyễn Văn Bình, 35 tuổi, ở Đà Nẵng, làm marketing"
```

### 2.3 Template cho Few-Shot

```
[Task description — 1-2 câu]

[Ví dụ 1 — case thông thường]
Input: ...
Output: ...

[Ví dụ 2 — edge case / case khó]
Input: ...
Output: ...

[Ví dụ 3 — case ngược / ngoại lệ]
Input: ...
Output: ...

[Input thực tế]
Input: ...
```

> **💡 Bài tập 2:** Viết few-shot prompt cho: tóm tắt bài báo tiếng Việt thành **1 câu**. Cho 3 ví dụ (1 bài ngắn, 1 bài dài, 1 bài có nhiều chủ đề). Test với 3 bài báo thật từ vnexpress.net.

---

## 3. Output Formatting — Ép AI trả lời đúng format

### 3.1 Tại sao cần format?

Khi dùng AI **trong pipeline tự động** (code gọi API), output cần **parse được**. Nếu AI trả free-text, code sẽ broken.

```python
# ❌ Free-text → không parse được
response = "Theo tôi, giá khoảng 500 nghìn đến 1 triệu, tùy..."

# ✅ JSON → parse ngay
response = '{"min_price": 500000, "max_price": 1000000, "currency": "VND"}'
import json
data = json.loads(response)  # Dùng ngay!
```

### 3.2 Các format phổ biến

**JSON — Phổ biến nhất:**
```
Trả lời bằng JSON với schema sau:
{
  "sentiment": "positive" | "negative" | "neutral",
  "confidence": 0.0-1.0,
  "key_phrases": ["phrase1", "phrase2"]
}

Chỉ trả JSON, không giải thích thêm.
```

**Markdown Table — Visual:**
```
Trả lời bằng bảng markdown:

| Sản phẩm | Giá (VNĐ) | Rating | Ghi chú |
|----------|-----------|--------|---------|
| ...      | ...       | ...    | ...     |
```

**Numbered List — Step-by-step:**
```
Trả lời theo format:

1. **[Bước]:** [mô tả ngắn]
   - Chi tiết: [giải thích]
   - Ví dụ: [code hoặc ví dụ]

2. **[Bước]:** ...
```

**XML/Tags — Cho Claude:**
```
Trả lời trong các tags:

<analysis>
  <summary>Tóm tắt 1 câu</summary>
  <pros>
    <item>Ưu điểm 1</item>
    <item>Ưu điểm 2</item>
  </pros>
  <cons>
    <item>Nhược điểm 1</item>
  </cons>
  <recommendation>Đề xuất hành động</recommendation>
</analysis>
```

### 3.3 Tips format 100% reliable

| Tip | Ví dụ |
|-----|------|
| **Nói rõ "chỉ trả X"** | "Chỉ trả JSON, không thêm giải thích" |
| **Cho schema/template** | Cho sẵn JSON structure, AI fill value |
| **Dùng delimiter** | `---BEGIN---` ... `---END---` |
| **Few-shot format** | Cho 2-3 ví dụ output đúng format |
| **Repeat instruction** | Nhắc lại format ở cuối prompt |

### 3.4 Ví dụ thực tế: API Response Formatter

```
Bạn nhận đoạn text review sản phẩm. Trả về JSON:

Schema:
{
  "product_name": "string",
  "rating": 1-5,
  "sentiment": "positive" | "negative" | "mixed",
  "pros": ["string"],
  "cons": ["string"],
  "summary": "string (max 1 câu)"
}

Ví dụ:
Input: "iPhone 16 Pro rất đẹp, camera xuất sắc. Nhưng pin hơi yếu và giá đắt quá."
Output:
{
  "product_name": "iPhone 16 Pro",
  "rating": 4,
  "sentiment": "mixed",
  "pros": ["Thiết kế đẹp", "Camera xuất sắc"],
  "cons": ["Pin yếu", "Giá đắt"],
  "summary": "Sản phẩm tốt về camera và thiết kế nhưng pin và giá là điểm trừ."
}

Giờ phân tích review sau. CHỈ TRẢ JSON:
```

> **💡 Bài tập 3:** Tạo few-shot prompt extract thông tin từ đoạn văn tuyển dụng: `{"company", "position", "salary_range", "requirements": [...], "location"}`. Test với 3 JD thật.

---

## 4. Kết hợp: Few-Shot + Format = "Template Pattern"

### 4.1 Template Pattern

Khi bạn cần AI **luôn trả lời theo một template cố định**, kết hợp few-shot + format:

```
Bạn phân tích competitor. Mỗi competitor trả lời theo template:

---
## [Tên Competitor]
**Website:** [url]
**Giá:** [pricing range]
**Target:** [đối tượng khách hàng]
**Điểm mạnh:**
- [Điểm 1]
- [Điểm 2]
**Điểm yếu:**
- [Điểm 1]
**So với sản phẩm chúng ta:** [1 câu nhận xét]
---

Ví dụ:
---
## Notion
**Website:** notion.so
**Giá:** Free – $10/user/month
**Target:** Team nhỏ, startup, cá nhân
**Điểm mạnh:**
- All-in-one workspace linh hoạt
- Template marketplace phong phú
**Điểm yếu:**
- Chậm khi database lớn
**So với sản phẩm chúng ta:** Notion mạnh về flexibility nhưng
yếu về real-time collaboration — lợi thế của chúng ta.
---

Giờ phân tích: [tên competitor]
```

### 4.2 Khi nào dùng gì?

| Tình huống | Kỹ thuật |
|-----------|---------|
| Task phổ biến, AI biết sẵn | Zero-shot |
| Cần đúng format cụ thể | Zero-shot + format instruction |
| Task có logic đặc biệt | Few-shot (3-5 ví dụ) |
| Cần cả format + logic | Few-shot + template pattern |
| Consistency cực cao | Many-shot (10+) + strict format |

---

## 5. Thực hành: 4 Prompt Templates thực tế

### Template 1: Data Extractor
```
Extract thông tin đặt hàng từ message khách hàng.
Trả về JSON. Nếu thiếu, ghi null.

Schema: {"name", "phone", "product", "quantity", "address", "note"}

Ví dụ 1:
Input: "Em ơi cho chị Lan đặt 2 hộp kem dưỡng, giao 123 Lê Lợi Q1, sdt 0901234567"
Output: {"name": "Lan", "phone": "0901234567", "product": "kem dưỡng", "quantity": 2, "address": "123 Lê Lợi Q1", "note": null}

Ví dụ 2:
Input: "Mình muốn mua son, ship nhanh giùm"
Output: {"name": null, "phone": null, "product": "son", "quantity": 1, "address": null, "note": "ship nhanh"}
```

### Template 2: Content Rewriter
```
Viết lại đoạn văn theo 3 tông giọng khác nhau.

Input: "Hệ thống gặp sự cố, dữ liệu có thể bị ảnh hưởng."

Formal: "Chúng tôi xin thông báo hệ thống đang gặp sự cố kỹ thuật.
         Dữ liệu có thể chịu ảnh hưởng. Chúng tôi đang xử lý."
Casual: "Hệ thống đang bị lỗi rồi mọi người ơi 😅 Data có thể
         bị ảnh hưởng. Team đang fix nè!"
Empathetic: "Chúng tôi hiểu sự bất tiện khi hệ thống gặp trục trặc.
             Dữ liệu của bạn có thể bị ảnh hưởng, và chúng tôi đang
             ưu tiên khắc phục ngay."

Giờ viết lại đoạn sau theo 3 tông:
Input: "[đoạn text của bạn]"
```

### Template 3: Meeting Minutes
```
Tóm tắt transcript meeting. Output format:

📋 **Meeting:** [topic]
📅 **Date:** [date] | ⏱ **Duration:** [time]
👥 **Participants:** [names]

🎯 **Decisions:**
1. [Decision] (Owner: [name])

📌 **Action Items:**
| Task | Owner | Deadline |
|------|-------|----------|

❓ **Open Questions:**
- [Question]
```

### Template 4: Code Documenter
```
Viết docstring cho function Python. Format Google style.

Example:
Input:
def calculate_tax(income, rate=0.1, deductions=None):
    ...

Output:
def calculate_tax(income, rate=0.1, deductions=None):
    """Calculate tax amount based on income, rate, and deductions.

    Args:
        income (float): Gross income in VND.
        rate (float, optional): Tax rate as decimal. Defaults to 0.1.
        deductions (list[float], optional): List of deduction amounts.

    Returns:
        float: Net tax amount after deductions.

    Raises:
        ValueError: If income is negative.

    Example:
        >>> calculate_tax(1000000, rate=0.1, deductions=[100000])
        90000.0
    """
```

> **💡 Bài tập 5:** Chọn 2 templates trên, adapt cho use case riêng của bạn, test nghiêm túc 5 inputs mỗi template. Ghi lại accuracy rate.

---

## Tóm tắt

| Concept | Ghi nhớ |
|---------|---------|
| **Zero-shot** | 0 ví dụ — cho task AI đã "biết" sẵn |
| **Few-shot** | 2-5 ví dụ — cho task cần consistency |
| **Ví dụ tốt** | Đa dạng + Consistent format + Có edge cases |
| **Output format** | JSON, Markdown, XML — cho pipeline tự động |
| **Template pattern** | Few-shot + Format = output cực stable |

## Bài tập tổng hợp

1. ✅ Hoàn thành bài tập nhỏ (1.1, 2, 3, 5)
2. **Prompt Template Library:** Tạo file lưu 5 prompt templates yêu thích. Mỗi template ghi: use case, examples, expected output format.
3. **Accuracy Benchmark:** Chọn 1 task, tạo 20 test cases, so sánh zero-shot vs 3-shot vs 5-shot → accuracy % mỗi loại.
4. **JSON Reliability Test:** Viết prompt yêu cầu JSON output, gọi API 10 lần → bao nhiêu lần JSON valid? Thử cải thiện prompt nếu < 100%.

> **Bài tiếp theo:** Chain-of-Thought (CoT) — kỹ thuật bắt AI "suy nghĩ từng bước" trước khi trả lời, tăng accuracy đáng kể cho bài toán phức tạp.
