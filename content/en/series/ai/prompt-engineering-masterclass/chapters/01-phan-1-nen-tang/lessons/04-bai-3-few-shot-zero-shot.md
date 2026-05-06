---
id: 019c9619-ee03-7003-f003-ee0300000003
title: 'Lesson 3: Few-Shot, Zero-Shot & Output Formatting'
slug: bai-3-few-shot-zero-shot
description: >-
  When to use zero-shot, few-shot, many-shot. Write effective examples. Output
  formatting: Markdown, JSON, CSV, XML. Template design patterns.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: 'Part 1: Prompt Engineering Foundation'
course:
  id: 019c9619-aa04-7004-b004-aa0400000004
  title: 'Prompt Engineering Masterclass: The Art of Giving Commands to AI'
  slug: prompt-engineering-masterclass
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7389" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7389)"/>

  <!-- Decorations -->
  <g>
    <circle cx="898" cy="64" r="26" fill="#fbbf24" opacity="0.09"/>
    <circle cx="696" cy="162" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="994" cy="260" r="14" fill="#fbbf24" opacity="0.07"/>
    <circle cx="792" cy="98" r="8" fill="#fbbf24" opacity="0.11"/>
    <circle cx="1090" cy="196" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="204" x2="1100" y2="284" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="234" x2="1050" y2="304" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="987.7749907475932,134.5 987.7749907475932,173.5 954,193 920.2250092524068,173.5 920.2250092524068,134.5 954,115" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 AI & ML — Lesson 2</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 3: Few-Shot, Zero-Shot & Output</tspan>
      <tspan x="60" dy="42">Formatting</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Prompt Engineering Masterclass: The Art of Giving Commands to AI</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: Prompt Engineering Foundation</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

In the previous two lessons, you learned how to write structured prompts and create personas. This lesson teaches the two **most powerful** techniques in Prompt Engineering: **giving examples** (few-shot) and **formatting** output.

> **Golden rule:** AI will **imitate** the example you give. Give good examples = good output. Giving bad examples = bad output.

---

## 1. Zero-Shot, One-Shot, Few-Shot — What's the difference?

### 1.1 Definition

| Engineering | Number of examples | When to use |
|--------|---------|-------------|
| **Zero-Shot** | 0 examples | Simple task, AI already "knows" |
| **One-Shot** | 1 example | Need format/style orientation |
| **Few-Shot** | 2-5 examples | Need high consistency, complex tasks |
| **Many-Shot** | 10+ examples | Very specific task, strange pattern |

### 1.2 Compare by example

**Problem:** Classify sentiment of review sentences

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

### 1.3 Why is Few-Shot effective?

AI learns **pattern** from examples:

```
Ví dụ → AI nhận ra:
- Input format: "câu review" → Output format: "label"
- Logic: khen = Positive, chê = Negative, trung tính = Neutral
- Edge case: khen + chê = Neutral (không phải random)
```

**No need to explain the rules** — just **good enough examples**!

> **💡 Exercise 1.1:** Write a few-shot prompt (3 examples) for: classifying emails into 3 categories: `Inquiry`, `Complaint`, `Thank You`. Test with 5 real emails.

---

## 2. Write effective Few-Shot Examples

### 2.1 Rules for choosing examples

| Rules | ❌ Wrong | ✅ Yes |
|--------|-------|-------|
| **Variety** | 3 examples of the same type | 3 examples of different types (cover edge cases) |
| **Representation** | The example is too easy | Ambiguous example |
| **Consistent** | Format is different for each example | Format is **identical** to each example |
| **Realistic** | Fabricated example | Example from real data |

### 2.2 Example: Extract information from text

**❌ Few-shot bad** (eg too easy, inconsistent format):

```
Extract thông tin:

"Tôi là Minh, 25 tuổi" → Tên: Minh, Tuổi: 25
"An, sinh năm 2000" → An, 24 tuổi
"Hoa, 30" → Hoa

Input: "Nguyễn Văn Bình, 35 tuổi, ở Hà Nội"
```

**✅ Few-shot good** (variety, consistent format, edge case):

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

### 2.3 Template for Few-Shot

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

> **💡 Exercise 2:** Write a few-shot prompt for: summarize a Vietnamese article into **1 sentence**. Give 3 examples (1 short article, 1 long article, 1 article with many topics). Tested with 3 real articles from vnexpress.net.

---

## 3. Output Formatting — Force AI to answer in the correct format

### 3.1 Why do we need formatting?

When using AI **in an automated pipeline** (API call code), the output needs to be **parsable**. If the AI ​​returns free-text, the code will break.

```python
# ❌ Free-text → không parse được
response = "Theo tôi, giá khoảng 500 nghìn đến 1 triệu, tùy..."

# ✅ JSON → parse ngay
response = '{"min_price": 500000, "max_price": 1000000, "currency": "VND"}'
import json
data = json.loads(response)  # Dùng ngay!
```

### 3.2 Popular formats

**JSON — Most popular:**
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

**XML/Tags — For Claude:**
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

| Tip | Example |
|-----|-------|
| **State clearly "only pay X"** | "Returns JSON only, no explanation added" |
| **For schema/template** | Given JSON structure, AI fill value |
| **Use delimiter** | `---BEGIN---` ... `---END---` |
| **Few-shot format** | Give 2-3 examples of correct output format |
| **Repeat instruction** | Repeat the format at the end of prompt |

### 3.4 Practical example: API Response Formatter

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

> **💡 Exercise 3:** Create a few-shot prompt to extract information from the recruitment paragraph: `{"company", "position", "salary_range", "requirements": [...], "location"}`. Tested with 3 real JDs.

---

## 4. Combination: Few-Shot + Format = "Template Pattern"

### 4.1 Template Pattern

When you need AI to **always answer according to a fixed template**, combine few-shot + format:

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

### 4.2 When to use what?

| Situation | Engineering |
|-----------|---------|
| Popular tasks, AI already knows | Zero-shot |
| Needs the correct specific format | Zero-shot + format instruction |
| Task has special logic | Few-shot (3-5 examples) |
| Needs both format + logic | Few-shot + template pattern |
| Extremely high Consistency | Many-shot (10+) + strict format |

---

## 5. Practice: 4 Practical Prompt Templates

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

> **💡 Exercise 5:** Choose the 2 templates above, adapt to your own use case, seriously test 5 inputs of each template. Record accuracy rate.

---

## Summary

| Concepts | Remember |
|--------|--------|
| **Zero-shot** | 0 examples — for tasks AI already "knows" |
| **Few-shot** | 2-5 examples — for tasks that need consistency |
| **Good example** | Diverse + Consistent format + Has edge cases |
| **Output format** | JSON, Markdown, XML — for automated pipelines |
| **Template pattern** | Few-shot + Format = extremely stable output |

## General exercises

1. ✅ Complete small exercises (1.1, 2, 3, 5)
2. **Prompt Template Library:** Create a file to save 5 favorite prompt templates. Each template says: use case, examples, expected output format.
3. **Accuracy Benchmark:** Choose 1 task, create 20 test cases, compare zero-shot vs 3-shot vs 5-shot → accuracy % of each type.
4. **JSON Reliability Test:** Write a prompt asking for JSON output, call the API 10 times → how many times is JSON valid? Try improving the prompt if < 100%.

> **Next article:** Chain-of-Thought (CoT) — a technique that forces AI to "think step by step" before answering, significantly increasing accuracy for complex problems.
