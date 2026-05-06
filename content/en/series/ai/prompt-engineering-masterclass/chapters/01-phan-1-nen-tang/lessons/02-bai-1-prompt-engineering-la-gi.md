---
id: 019c9619-ee01-7001-f001-ee0100000001
title: 'Lesson 1: What is Prompt Engineering? — Anatomy of a Good Prompt'
slug: bai-1-prompt-engineering-la-gi
description: >-
  Prompt Engineering is the #1 skill in the AI ​​age. Understand optimal prompt
  structure, the CLEAR principle, and why 80% of the value of AI is in how you
  ask.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 0
section_title: 'Part 1: Prompt Engineering Foundation'
course:
  id: 019c9619-aa04-7004-b004-aa0400000004
  title: 'Prompt Engineering Masterclass: The Art of Giving Commands to AI'
  slug: prompt-engineering-masterclass
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-912" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-912)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1038" cy="144" r="26" fill="#fbbf24" opacity="0.09"/>
    <circle cx="976" cy="182" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="914" cy="220" r="14" fill="#fbbf24" opacity="0.07"/>
    <circle cx="852" cy="258" r="8" fill="#fbbf24" opacity="0.11"/>
    <circle cx="790" cy="36" r="32" fill="#fbbf24" opacity="0.05"/>
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
    <line x1="600" y1="224" x2="1100" y2="304" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="254" x2="1050" y2="324" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="957.7749907475932,104.5 957.7749907475932,143.5 924,163 890.2250092524068,143.5 890.2250092524068,104.50000000000001 924,85" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 AI & ML — Lesson 0</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 1: What is Prompt Engineering? — Anatomy</tspan>
      <tspan x="60" dy="42">of a Good Prompt</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Prompt Engineering Masterclass: The Art of Giving Commands to AI</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: Prompt Engineering Foundation</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

Have you ever asked ChatGPT a question and received an answer... "so-so"? Then you ask the same question again but **phrased differently**, and suddenly the answer is **10 times better**?

That is **Prompt Engineering** — the art of communicating effectively with AI.

> **Fact:** Same AI model (GPT-4o, Claude, Gemini), **how you ask** determines **80% quality** of the answer. Prompt Engineering is not a “hack” — it is a **core skill** that anyone using AI needs.

---

## 1. What is Prompt Engineering?

### 1.1 Definition

**Prompt** = the text you send to AI (question, request, instruction).  
**Prompt Engineering** = prompt design engineering to **maximize** the quality of output from AI.

Imagine: AI is like a **5-star chef** — extremely skilled, but what to cook depends on your **order** (prompt):

| Orders | Results |
|--------|--------|
| "Make me something delicious" | 🤷 Random dishes, maybe good or bad |
| "Make Hanoi beef pho, stir-fry, clear water, chopped green onions, add basil" | 🎯 100% correct |

The same goes for AI. **Ambiguous prompt = ambiguous output. Specific prompts = quality output.**

### 1.2 Why is Prompt Engineering important?

```
❌ Prompt tệ:   "Viết cho tôi email"
✅ Prompt tốt:  "Viết email cho sếp bằng tiếng Việt, giọng điệu lịch sự
                 nhưng tự tin, xin nghỉ phép 3 ngày (10-12/4) vì lý do
                 gia đình. Nêu rõ đã bàn giao công việc cho đồng nghiệp
                 Minh. Độ dài: 150-200 từ."
```

The difference? A good prompt **provides context**, **define constraints**, and **set expectations**.

### 1.3 Who needs to learn Prompt Engineering?

| Object | Application |
|-----------|---------|
| **Developer** | Code generation, debugging, code review, writing tests |
| **Data Analyst** | SQL generation, data insights, automatic reports |
| **Content Creator** | Article writing, social media, SEO, brainstorming ideas |
| **Product Manager** | Write PRD, user stories, competitor analysis |
| **Marketer** | Email campaigns, ad copy, A/B test ideas |
| **Anyone** | Save **2-4 hours/day** when interacting with AI |

> **💡 Exercise 1.1:** Think of 3 situations in your daily work/study where you can use AI. Write prompts for each situation — a "lazy" version and a "thorough" version. Compare results.

---

## 2. Anatomy of a Prompt — Anatomy of a good Prompt

An effective prompt usually has **6 components** (not necessarily all of them):

### 2.1 Six components of Prompt

```
┌─────────────────────────────────────────────────────┐
│  1. ROLE       → Bạn là ai? (persona)               │
│  2. CONTEXT    → Bối cảnh / Thông tin nền            │
│  3. TASK       → Nhiệm vụ cụ thể cần làm            │
│  4. FORMAT     → Output trông như thế nào             │
│  5. TONE       → Giọng điệu (formal, casual, ...)    │
│  6. CONSTRAINTS → Giới hạn (độ dài, ngôn ngữ, ...)   │
└─────────────────────────────────────────────────────┘
```

### 2.2 Example of each component

**Bad prompt:**
```
Viết bài về Python
```

**Good prompt — partial analysis:**

```
[ROLE]        Bạn là một technical writer với 10 năm kinh nghiệm viết
              tutorial cho người mới bắt đầu lập trình.

[CONTEXT]     Đối tượng đọc là sinh viên năm nhất ngành CNTT, chưa
              biết gì về lập trình. Blog được đăng trên website
              giáo dục Việt Nam.

[TASK]        Viết bài blog giới thiệu "5 lý do nên học Python năm 2026".

[FORMAT]      Cấu trúc: tiêu đề hấp dẫn → mở bài hook → 5 lý do
              (mỗi lý do có tiêu đề phụ + giải thích 2-3 câu + ví dụ
              thực tế) → kết luận với CTA.

[TONE]        Thân thiện, hài hước nhẹ, dùng ví dụ đời thường.
              Tránh thuật ngữ phức tạp.

[CONSTRAINTS] - Tiếng Việt, 800-1000 từ
              - Không mention các ngôn ngữ khác tiêu cực
              - Thêm emoji phù hợp
              - Kèm 1 code snippet Python đơn giản
```

### 2.3 Comparison table: Amateur Prompt vs Professional Prompt

| Factor | ❌ Amateur | ✅ Professional |
|--------|-------------|----------------|
| **Role** | (none) | "You are a senior data analyst..." |
| **Task** | "Data Analysis" | "Analyzing Q3 vs Q2 revenue, finding 3 key insights" |
| **Format** | (not speaking) | "Tabular answer with columns: Metric, Q2, Q3, % change" |
| **Constraints** | (unlimited) | "Under 300 words, focus on actionable insights" |

> **💡 Exercise 2:** Take the following prompt and improve it by adding all 6 ingredients: `"Giúp tôi viết CV"`. Compare output before and after.

---

## 3. CLEAR Principle — 5 golden rules

### 3.1 Framework CLEAR

| Letters | Principles | Explanation |
|--------|-----------|-----------|
| **C** | **Concise** — Concise | No frills, straight to the point |
| **L** | **Logical** — Logic | Arrange information sequentially, easy to follow |
| **E** | **Explicit** — Explicit | Say exactly what you want, don't be vague
| **A** | **Adaptive** — Flexible | Be ready to adjust based on output |
| **R** | **Role-based** — Role-based | Assign appropriate personas/experts |

### 3.2 CLEAR application example

**❌ CLEAR Violation:**
```
Ừm, tôi đang cần, à, nếu được thì bạn giúp tôi viết cái gì đó
liên quan đến marketing, kiểu như email hay post gì đó, cho sản phẩm
mới của công ty tôi, nó là app mobile, à mà cũng không chắc lắm,
bạn tự quyết đi...
```

**✅ Apply CLEAR:**
```
[R] Bạn là Growth Marketing Manager tại một startup fintech.

[C] Viết 1 email marketing cho sản phẩm: app quản lý chi tiêu cá nhân
    "MoneyWise", target audience: Gen Z (18-25 tuổi).

[E] Email cần có:
    - Subject line hấp dẫn (A/B: 2 versions)
    - Hook mở đầu (highlight pain point)
    - 3 tính năng chính + benefit
    - Social proof (1 testimonial)
    - CTA rõ ràng

[L] Cấu trúc: Subject → Preview text → Body → CTA → P.S.

Tiếng Việt, tone trẻ trung, 200 từ.
```

---

## 4. Iterative Prompting — "Ask again until you get it right"

### 4.1 Why need iterate?

Prompt Engineering **doesn't have to be written once and done**. It's like sculpting: you start with a rough shape, then **sharpen it** until it's beautiful.

```
Lần 1: Prompt cơ bản → Output "tàm tạm"
Lần 2: Thêm context → Output tốt hơn
Lần 3: Thêm constraints → Output gần đúng ý
Lần 4: Tinh chỉnh tone/format → Output hoàn hảo ✅
```

### 4.2 Effective Iterate Technique

**Technique 1: Specific Feedback**
```
"Bài viết tốt rồi, nhưng:
 - Phần giới thiệu quá dài, rút ngắn còn 2 câu
 - Thêm ví dụ thực tế cho lý do #3
 - Giọng điệu hơi formal, chuyển sang casual hơn"
```

**Technique 2: Give sample examples**
```
"Viết lại intro theo phong cách này:
 'Bạn có biết? 73% Gen Z check ví tiền trước khi...'
 → Bắt đầu bằng câu hỏi + số liệu gây tò mò"
```

**Technique 3: Ask reverse questions**
```
"Trước khi viết, hãy hỏi tôi 5 câu hỏi quan trọng nhất
 mà bạn cần biết để viết email này hiệu quả nhất."
```

> **Pro tip:** Technique #3 is extremely powerful! When you let AI ask questions back, it will help you **discover missing information** that you haven't thought of yet.

> **💡 Exercise 4:** Use technique #3: Ask ChatGPT/Claude to ask you 5 questions before writing a job description for the position "AI Engineer". Compare output with/without using this technique.

---

## 5. Common mistakes

### 5.1 Top 7 mistakes when writing Prompt

| # | Mistake | Wrong example | Edit |
|---|--------|----------|-------|
| 1 | **Too vague** | "Help me learn AI" | "Creating a 3-month AI learning roadmap for Python developers, focusing on NLP" |
| 2 | **Too long, rambling** | 500 words explaining the context | Summarize the context in 2-3 sentences |
| 3 | **No format** | "Data Analysis" | "Tabular response: Metric \| Value \| Comment" |
| 4 | **Assumes AI knows** | "Continuing from yesterday" | Provide full context for each prompt |
| 5 | **Ask many things at once** | "Writing + creating images + translating" | Divided into 3 separate prompts |
| 6 | **Does not iterate** | Accept the first output | Specific feedback, gradually sharpening |
| 7 | **Not tested** | Use 1 prompt for every case | Test with many different inputs |

### 5.2 "Garbage In, Garbage Out"

```
Prompt mơ hồ → AI phải "đoán" ý bạn → Output ngẫu nhiên → Bạn thất vọng
Prompt rõ ràng → AI hiểu chính xác → Output đúng ý → Bạn "wow AI giỏi thật!"
```

**Conclusion:** Most of the time users complaining "AI is bad" is actually because **prompt is bad**. Good prompt = good AI.

---

## 6. Practice: Improve 3 Actual Prompts

### Example 1: Developer — Code Review

```
❌ "Review code này"

✅ "Bạn là senior Python developer với chuyên môn về clean code
   và design patterns.

   Review đoạn code Python sau, focus vào:
   1. Bug tiềm ẩn (edge cases, error handling)
   2. Performance issues
   3. Readability & naming conventions
   4. Đề xuất refactor (nếu cần)

   Format: Bảng với cột [Dòng | Vấn đề | Mức độ | Đề xuất sửa]
   Sau bảng, cho overall rating 1-10 và 1 câu tóm tắt.

   Code:
   ```python
   defprocess(data):
       result = []
       for i in range(len(data)):
           if data[i] > 0:
               result.append(data[i] * 2)
       return result
   ```"
```

### Example 2: Marketing — Social Post

```
❌ "Viết post Facebook"

✅ "Bạn là social media specialist cho thương hiệu cà phê Việt Nam
   premium, target audience: người đi làm 25-35 tuổi ở Sài Gòn.

   Viết 1 Facebook post cho sản phẩm mới: Cold Brew Cà phê sữa đá.

   Yêu cầu:
   - Hook: 1 dòng đầu gây tò mò (dùng emoji)
   - Body: 3-4 dòng ngắn, nêu USP (cafe robusta Đắk Lắk,
     ủ 24 giờ, không đường)
   - CTA: Mua ngay, link in bio
   - 3-5 hashtags phù hợp
   - Tone: casual, trendy, hơi witty
   - Độ dài: 80-120 từ"
```

### Example 3: Student — Study

```
❌ "Giải thích Machine Learning"

✅ "Giải thích Machine Learning cho sinh viên năm 2 ngành CNTT.

   Yêu cầu:
   - Bắt đầu bằng 1 ví dụ thực tế dễ hiểu (không dùng ví dụ
     spam email — quá cũ)
   - Giải thích 3 loại ML: supervised, unsupervised, reinforcement
     (mỗi loại 1 ví dụ đời thường + 1 ví dụ kỹ thuật)
   - Dùng bảng so sánh 3 loại
   - KHÔNG dùng công thức toán
   - Tiếng Việt, 400-500 từ
   - Kết thúc bằng 'Bước tiếp theo nên học gì?'"
```

> **💡 Exercise 6:** Choose 1 of the 3 examples above, copy the good prompt into ChatGPT/Claude/Gemini. Then iterate 2-3 times to improve output. Record the prompt each time you make a change and compare the results.

---

## 7. Engineering prompt for each AI Model

Each AI model has a different "personality". The optimal prompt is also **slightly** different for each model:

| Model | Strengths | Tip prompting |
|-------|----------|-------------|
| **ChatGPT (GPT-4o)** | Creative, diverse, good with code | Add "Think step by step" for complex lessons |
| **Claude (3.5 Sonnets)** | Accurate, follow instructions closely, long | Use XML tags `<task>`, `<context>` to structure |
| **Gemini (2.0 Flash)** | Fast, multimodal, good with data | Provide specific examples, using markdown |

### Claude XML Style (especially effective):
```xml
<role>Senior data analyst</role>
<context>E-commerce company, 2 years of sales data</context>
<task>Analyze Q4 2025 revenue trends</task>
<format>
  - Executive summary (3 sentences)
  - Key metrics table
  - Top 3 actionable recommendations
</format>
<constraints>
  - Focus on actionable insights only
  - Under 500 words
</constraints>
```

---

## Summary

| Concepts | Remember |
|--------|--------|
| **Prompt Engineering** | The art of effective communication with AI |
| **6 ingredients** | Role, Context, Task, Format, Tone, Constraints |
| **CLEAR** | Concise, Logical, Explicit, Adaptive, Role-based |
| **Iterate** | Prompt → Output → Feedback → Improve → Repeat |
| **Mistake #1** | Too vague — AI has to guess = poor output |

## General exercises

1. ✅ Complete all small exercises (1.1, 2, 4, 6)
2. **Prompt Portfolio:** Create 5 "perfect" prompts for 5 different use cases in your work/study. Each prompt must have 6 components.
3. **A/B Test:** Choose 1 task, write 2 different prompts (1 short, 1 detailed), run each prompt 3 times. Compare average quality.
4. **Cross-model Test:** Get the best prompt, run on both ChatGPT, Claude, and Gemini. Which model gives the best output for your use case?

> **Next article:** System Prompts & Persona Design — how to create your own "personal" AI assistant, with custom personality and expertise.
