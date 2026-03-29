---
id: 019c9619-ee01-7001-f001-ee0100000001
title: 'Bài 1: Prompt Engineering là gì? — Anatomy of a Good Prompt'
slug: bai-1-prompt-engineering-la-gi
description: >-
  Prompt Engineering là kỹ năng #1 trong thời đại AI. Hiểu cấu trúc
  prompt tối ưu, nguyên tắc CLEAR, và tại sao 80% giá trị của AI
  nằm ở cách bạn hỏi.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 0
section_title: "Phần 1: Nền tảng Prompt Engineering"
course:
  id: 019c9619-aa04-7004-b004-aa0400000004
  title: "Prompt Engineering Masterclass: Nghệ thuật Ra lệnh cho AI"
  slug: prompt-engineering-masterclass
---

## Giới thiệu

Bạn đã bao giờ hỏi ChatGPT một câu và nhận được câu trả lời... "tàm tạm"? Rồi bạn hỏi lại cùng câu đó nhưng **cách diễn đạt khác**, và bỗng nhiên câu trả lời **tốt gấp 10 lần**?

Đó chính là **Prompt Engineering** — nghệ thuật giao tiếp hiệu quả với AI.

> **Sự thật:** Cùng một mô hình AI (GPT-4o, Claude, Gemini), **cách bạn hỏi** quyết định **80% chất lượng** câu trả lời. Prompt Engineering không phải "mẹo vặt" — nó là **kỹ năng cốt lõi** mà bất kỳ ai dùng AI đều cần.

---

## 1. Prompt Engineering là gì?

### 1.1 Định nghĩa

**Prompt** = đoạn text bạn gửi cho AI (câu hỏi, yêu cầu, chỉ dẫn).  
**Prompt Engineering** = kỹ thuật thiết kế prompt để **tối đa hóa** chất lượng output từ AI.

Hãy hình dung: AI giống như một **đầu bếp 5 sao** — có tay nghề cực cao, nhưng nấu gì phụ thuộc vào **đơn hàng** (prompt) của bạn:

| Đơn hàng | Kết quả |
|---------|--------|
| "Làm cho tôi cái gì đó ngon đi" | 🤷 Món ngẫu nhiên, có thể ngon có thể dở |
| "Làm phở bò Hà Nội, tái nạm gầu, nước trong, hành lá thái nhỏ, thêm rau húng" | 🎯 Đúng ý bạn 100% |

AI cũng vậy. **Prompt mơ hồ = output mơ hồ. Prompt cụ thể = output chất lượng.**

### 1.2 Tại sao Prompt Engineering quan trọng?

```
❌ Prompt tệ:   "Viết cho tôi email"
✅ Prompt tốt:  "Viết email cho sếp bằng tiếng Việt, giọng điệu lịch sự
                 nhưng tự tin, xin nghỉ phép 3 ngày (10-12/4) vì lý do
                 gia đình. Nêu rõ đã bàn giao công việc cho đồng nghiệp
                 Minh. Độ dài: 150-200 từ."
```

Sự khác biệt? Prompt tốt **cung cấp context**, **define constraints**, và **set expectations**.

### 1.3 Ai cần học Prompt Engineering?

| Đối tượng | Ứng dụng |
|-----------|---------|
| **Developer** | Code generation, debugging, code review, viết tests |
| **Data Analyst** | SQL generation, data insights, báo cáo tự động |
| **Content Creator** | Viết bài, social media, SEO, brainstorm ý tưởng |
| **Product Manager** | Viết PRD, user stories, competitor analysis |
| **Marketer** | Email campaigns, ad copy, A/B test ideas |
| **Bất kỳ ai** | Tiết kiệm **2-4 giờ/ngày** khi tương tác với AI |

> **💡 Bài tập 1.1:** Hãy nghĩ về 3 tình huống trong công việc/học tập hàng ngày mà bạn có thể dùng AI. Viết prompt cho mỗi tình huống — 1 version "lười" và 1 version "kỹ lưỡng". So sánh kết quả.

---

## 2. Anatomy of a Prompt — Giải phẫu một Prompt tốt

Một prompt hiệu quả thường có **6 thành phần** (không nhất thiết phải đủ tất cả):

### 2.1 Sáu thành phần của Prompt

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

### 2.2 Ví dụ từng thành phần

**Prompt xấu:**
```
Viết bài về Python
```

**Prompt tốt — phân tích từng phần:**

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

### 2.3 Bảng so sánh: Prompt nghiệp dư vs Prompt chuyên nghiệp

| Yếu tố | ❌ Nghiệp dư | ✅ Chuyên nghiệp |
|--------|-------------|----------------|
| **Role** | (không có) | "Bạn là senior data analyst..." |
| **Task** | "Phân tích dữ liệu" | "Phân tích doanh thu Q3 so với Q2, tìm 3 insights chính" |
| **Format** | (không nói) | "Trả lời dạng bảng với cột: Metric, Q2, Q3, % thay đổi" |
| **Constraints** | (không giới hạn) | "Dưới 300 từ, focus vào actionable insights" |

> **💡 Bài tập 2:** Lấy prompt sau và cải thiện bằng cách thêm đủ 6 thành phần: `"Giúp tôi viết CV"`. So sánh output trước và sau.

---

## 3. Nguyên tắc CLEAR — 5 quy tắc vàng

### 3.1 Framework CLEAR

| Chữ cái | Nguyên tắc | Giải thích |
|---------|-----------|-----------|
| **C** | **Concise** — Ngắn gọn | Không rườm rà, đi thẳng vấn đề |
| **L** | **Logical** — Logic | Sắp xếp thông tin có trình tự, dễ theo dõi |
| **E** | **Explicit** — Rõ ràng | Nói chính xác muốn gì, đừng mập mờ |
| **A** | **Adaptive** — Linh hoạt | Sẵn sàng điều chỉnh dựa trên output |
| **R** | **Role-based** — Có vai trò | Gán persona/chuyên gia phù hợp |

### 3.2 Ví dụ áp dụng CLEAR

**❌ Vi phạm CLEAR:**
```
Ừm, tôi đang cần, à, nếu được thì bạn giúp tôi viết cái gì đó
liên quan đến marketing, kiểu như email hay post gì đó, cho sản phẩm
mới của công ty tôi, nó là app mobile, à mà cũng không chắc lắm,
bạn tự quyết đi...
```

**✅ Áp dụng CLEAR:**
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

## 4. Iterative Prompting — "Hỏi lại cho đến khi đúng ý"

### 4.1 Tại sao cần iterate?

Prompt Engineering **không phải viết 1 lần là xong**. Nó giống như điêu khắc: bạn bắt đầu với hình thô, sau đó **gọt dần** cho đến khi đẹp.

```
Lần 1: Prompt cơ bản → Output "tàm tạm"
Lần 2: Thêm context → Output tốt hơn
Lần 3: Thêm constraints → Output gần đúng ý
Lần 4: Tinh chỉnh tone/format → Output hoàn hảo ✅
```

### 4.2 Kỹ thuật Iterate hiệu quả

**Kỹ thuật 1: Phản hồi cụ thể**
```
"Bài viết tốt rồi, nhưng:
 - Phần giới thiệu quá dài, rút ngắn còn 2 câu
 - Thêm ví dụ thực tế cho lý do #3
 - Giọng điệu hơi formal, chuyển sang casual hơn"
```

**Kỹ thuật 2: Cho ví dụ mẫu**
```
"Viết lại intro theo phong cách này:
 'Bạn có biết? 73% Gen Z check ví tiền trước khi...'
 → Bắt đầu bằng câu hỏi + số liệu gây tò mò"
```

**Kỹ thuật 3: Đặt câu hỏi ngược**
```
"Trước khi viết, hãy hỏi tôi 5 câu hỏi quan trọng nhất
 mà bạn cần biết để viết email này hiệu quả nhất."
```

> **Pro tip:** Kỹ thuật #3 cực mạnh! Khi bạn để AI hỏi ngược, nó sẽ giúp bạn **phát hiện thông tin thiếu** mà bạn chưa nghĩ đến.

> **💡 Bài tập 4:** Sử dụng kỹ thuật #3: Yêu cầu ChatGPT/Claude hỏi bạn 5 câu trước khi viết mô tả công việc (job description) cho vị trí "AI Engineer". So sánh output có/không dùng kỹ thuật này.

---

## 5. Những sai lầm phổ biến

### 5.1 Top 7 sai lầm khi viết Prompt

| # | Sai lầm | Ví dụ sai | Sửa lại |
|---|---------|----------|--------|
| 1 | **Quá mơ hồ** | "Giúp tôi học AI" | "Tạo lộ trình học AI 3 tháng cho developer Python, focus NLP" |
| 2 | **Quá dài, lan man** | 500 từ giải thích bối cảnh | Tóm gọn context trong 2-3 câu |
| 3 | **Không có format** | "Phân tích dữ liệu" | "Trả lời dạng bảng: Metric \| Giá trị \| Nhận xét" |
| 4 | **Giả định AI biết** | "Tiếp tục cái hôm qua" | Cung cấp context đầy đủ mỗi prompt |
| 5 | **Hỏi nhiều thứ 1 lúc** | "Viết bài + tạo hình + dịch" | Chia thành 3 prompt riêng |
| 6 | **Không iterate** | Chấp nhận output đầu tiên | Phản hồi cụ thể, gọt dần |
| 7 | **Không test** | Dùng 1 prompt cho mọi trường hợp | Test với nhiều input khác nhau |

### 5.2 "Garbage In, Garbage Out"

```
Prompt mơ hồ → AI phải "đoán" ý bạn → Output ngẫu nhiên → Bạn thất vọng
Prompt rõ ràng → AI hiểu chính xác → Output đúng ý → Bạn "wow AI giỏi thật!"
```

**Kết luận:** Phần lớn thời gian người dùng phàn nàn "AI dở" thực ra là do **prompt dở**. Prompt tốt = AI tốt.

---

## 6. Thực hành: Cải thiện 3 Prompt thực tế

### Ví dụ 1: Developer — Code Review

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
   def process(data):
       result = []
       for i in range(len(data)):
           if data[i] > 0:
               result.append(data[i] * 2)
       return result
   ```"
```

### Ví dụ 2: Marketing — Social Post

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

### Ví dụ 3: Student — Học tập

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

> **💡 Bài tập 6:** Chọn 1 trong 3 ví dụ trên, copy prompt tốt vào ChatGPT/Claude/Gemini. Sau đó iterate 2-3 lần để cải thiện output. Ghi lại prompt mỗi lần thay đổi và so sánh kết quả.

---

## 7. Prompt Engineering cho từng AI Model

Mỗi AI model có "tính cách" khác nhau. Prompt tối ưu cũng **hơi khác** cho mỗi model:

| Model | Điểm mạnh | Tip prompting |
|-------|----------|-------------|
| **ChatGPT (GPT-4o)** | Creative, diverse, tốt với code | Thêm "Think step by step" cho bài phức tạp |
| **Claude (3.5 Sonnet)** | Chính xác, theo sát instruction, dài | Dùng XML tags `<task>`, `<context>` để structure |
| **Gemini (2.0 Flash)** | Nhanh, multimodal, tốt với data | Cung cấp examples cụ thể, dùng markdown |

### Claude XML Style (đặc biệt hiệu quả):
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

## Tóm tắt

| Concept | Ghi nhớ |
|---------|---------|
| **Prompt Engineering** | Nghệ thuật giao tiếp hiệu quả với AI |
| **6 thành phần** | Role, Context, Task, Format, Tone, Constraints |
| **CLEAR** | Concise, Logical, Explicit, Adaptive, Role-based |
| **Iterate** | Prompt → Output → Feedback → Improve → Repeat |
| **Sai lầm #1** | Quá mơ hồ — AI phải đoán = output kém |

## Bài tập tổng hợp

1. ✅ Hoàn thành tất cả bài tập nhỏ (1.1, 2, 4, 6)
2. **Prompt Portfolio:** Tạo 5 prompt "hoàn hảo" cho 5 use case khác nhau trong công việc/học tập của bạn. Mỗi prompt phải có đủ 6 thành phần.
3. **A/B Test:** Chọn 1 task, viết 2 prompt khác nhau (1 ngắn, 1 chi tiết), chạy 3 lần mỗi prompt. So sánh chất lượng trung bình.
4. **Cross-model Test:** Lấy prompt tốt nhất, chạy trên cả ChatGPT, Claude, và Gemini. Model nào cho output tốt nhất cho use case của bạn?

> **Bài tiếp theo:** System Prompts & Persona Design — cách tạo AI assistant "riêng" cho bạn, với tính cách và chuyên môn tùy chỉnh.
