---
id: 019c9619-ee02-7002-f002-ee0200000002
title: 'Bài 2: System Prompts, Role-playing & Persona Design'
slug: bai-2-system-prompts-persona
description: >-
  System prompt là "linh hồn" của AI assistant. Thiết kế persona chuyên
  nghiệp, boundary setting, output constraints. Tạo AI assistant cho
  customer support, code review, content writing.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 1
section_title: "Phần 1: Nền tảng Prompt Engineering"
course:
  id: 019c9619-aa04-7004-b004-aa0400000004
  title: "Prompt Engineering Masterclass: Nghệ thuật Ra lệnh cho AI"
  slug: prompt-engineering-masterclass
---

## Giới thiệu

Ở bài trước, bạn đã học cách viết **user prompt** tốt. Nhưng nếu mỗi lần hỏi đều phải nhắc lại context, role, format... sẽ rất mệt. Đó là lý do **System Prompt** tồn tại.

**System Prompt** (hay System Instruction) là prompt **"nền"** — nó set up AI **một lần**, và sau đó mọi câu hỏi của bạn đều được trả lời theo cách đã thiết lập.

> **Ví dụ thực tế:** ChatGPT Custom Instructions, Claude Projects, Gemini System Instructions — tất cả đều là System Prompt.

---

## 1. System Prompt vs User Prompt

### 1.1 So sánh

```
┌─────────────────────────────────────────────────┐
│  SYSTEM PROMPT (thiết lập 1 lần)                │
│  "Bạn là senior Python developer chuyên FastAPI. │
│   Trả lời bằng tiếng Việt, format code blocks.  │
│   Luôn giải thích tại sao, không chỉ code."     │
├─────────────────────────────────────────────────┤
│  USER PROMPT 1: "Làm sao tạo middleware auth?"  │
│  → AI trả lời: code FastAPI + giải thích TV     │
│                                                  │
│  USER PROMPT 2: "Tối ưu query database thế nào?"│
│  → AI vẫn trả lời đúng context FastAPI + TV     │
└─────────────────────────────────────────────────┘
```

| | System Prompt | User Prompt |
|--|-------------|------------|
| **Khi nào set** | Đầu conversation | Mỗi tin nhắn |
| **Mục đích** | Define persona, rules, format | Yêu cầu cụ thể |
| **Ví dụ** | "Bạn là X, luôn trả lời Y" | "Giải thích Z cho tôi" |
| **Thay đổi?** | Hiếm khi (1 lần/session) | Liên tục (mỗi câu hỏi) |

### 1.2 Vị trí trong API Call

Khi gọi API (OpenAI, Anthropic, Google), messages có 3 roles:

```python
messages = [
    {"role": "system", "content": "Bạn là..."},   # ← System prompt
    {"role": "user", "content": "Câu hỏi 1"},      # ← User
    {"role": "assistant", "content": "Trả lời 1"},  # ← AI response
    {"role": "user", "content": "Câu hỏi 2"},       # ← User tiếp
]
```

**Lưu ý:** Claude (Anthropic) dùng tham số `system` riêng, không nằm trong `messages`:
```python
response = client.messages.create(
    model="claude-3-5-sonnet",
    system="Bạn là...",  # ← Nằm riêng
    messages=[
        {"role": "user", "content": "Câu hỏi"}
    ]
)
```

> **💡 Bài tập 1:** Mở ChatGPT → Settings → Custom Instructions. Viết system prompt cho bản thân (nghề nghiệp, cách muốn AI trả lời, format ưa thích). Test 5 câu hỏi khác nhau — AI có trả lời consistent không?

---

## 2. Persona Design — Tạo "nhân cách" cho AI

### 2.1 Tại sao cần Persona?

Khi bạn nói "Bạn là bác sĩ", AI sẽ:
- Dùng thuật ngữ y khoa chính xác
- Cẩn thận hơn với lời khuyên sức khỏe
- Không đưa ra chẩn đoán nếu thiếu thông tin

Khi bạn nói "Bạn là comedian", AI sẽ:
- Dùng ngôn ngữ hài hước
- Tìm góc độ funny trong mọi thứ
- Thoải mái hơn với sáng tạo

**Persona chính xác = Output phù hợp hơn.**

### 2.2 Template Persona chuẩn

```
## Persona Definition
- Tên/Vai trò: [Senior Python Developer]
- Kinh nghiệm: [10 năm, chuyên backend/API]
- Chuyên môn: [FastAPI, PostgreSQL, Redis, Docker]
- Tính cách: [Chính xác, kiên nhẫn, thích giải thích sâu]

## Communication Style
- Ngôn ngữ: [Tiếng Việt, mix thuật ngữ tiếng Anh khi cần]
- Giọng điệu: [Thân thiện nhưng chuyên nghiệp]
- Cách trả lời: [Giải thích WHY trước, HOW sau, code cuối]

## Rules
- Luôn hỏi lại nếu yêu cầu mơ hồ
- Nếu không chắc, nói rõ "Tôi không chắc, cần verify"
- Ưu tiên best practices hơn quick fix
```

### 2.3 Ví dụ Persona thực tế

**🧑‍💻 Code Reviewer:**
```
Bạn là Tech Lead với 15 năm kinh nghiệm, review code hàng ngày.

Phong cách review:
1. Bắt đầu bằng điểm TỐT (tạo động lực)
2. Liệt kê vấn đề theo severity: 🔴 Critical → 🟡 Warning → 🔵 Suggestion
3. Mỗi vấn đề kèm: [dòng code] + [vấn đề gì] + [cách sửa]
4. Kết thúc bằng overall score /10

Rules:
- KHÔNG refactor toàn bộ code, chỉ point out vấn đề
- Focus: bugs > security > performance > readability
- Ngôn ngữ: thẳng thắn nhưng constructive, không sarcastic
```

**📊 Data Analyst:**
```
Bạn là Senior Data Analyst tại một e-commerce company lớn.

Khi phân tích dữ liệu:
1. LUÔN bắt đầu bằng "Key Takeaways" (3 bullet points)
2. Trình bày data dạng bảng khi có thể
3. Mỗi insight phải có: [Metric] + [Trend] + [So what? → Action]
4. Kết thúc bằng "Recommended Next Steps"

Rules:
- Nếu thiếu data, nói rõ assumption
- Dùng % thay vì số tuyệt đối khi compare
- Highlight anomalies bằng ⚠️
```

**✍️ Content Writer:**
```
Bạn là Content Marketing Specialist viết blog cho startup tech Việt Nam.

Phong cách viết:
- Giọng: casual, relatable, dùng "mình" thay vì "tôi"
- Câu ngắn. Paragraph ngắn (max 3 câu).
- Mở bài: hook bằng câu hỏi hoặc insight bất ngờ
- Xen lẫn ví dụ thực tế Việt Nam
- Emoji: dùng có chừng mực (1-2 per section)

SEO rules:
- H2 chứa keyword chính
- Meta description: 150-160 ký tự
- Internal linking: gợi ý 2-3 bài liên quan
```

> **💡 Bài tập 2:** Tạo 1 persona cho use case của bạn (coder, writer, analyst, teacher...). Dùng template ở 2.2. Test conversation 10 tin nhắn — persona có consistent không?

---

## 3. Boundary Setting — "Hàng rào an toàn"

### 3.1 Tại sao cần Boundaries?

Không có boundaries, AI có thể:
- Trả lời ngoài scope → content không liên quan
- Bịa đặt thông tin → hallucination
- Quá dài/quá ngắn → inconvenient
- Đưa lời khuyên nguy hiểm → liability

### 3.2 Các loại Boundary

**Boundary về Scope:**
```
- Chỉ trả lời các câu hỏi liên quan đến Python và FastAPI
- Nếu câu hỏi ngoài scope, nói: "Câu hỏi này nằm ngoài
  chuyên môn của tôi. Hãy hỏi chuyên gia [lĩnh vực] nhé."
- KHÔNG trả lời câu hỏi về: y tế, pháp luật, tài chính cá nhân
```

**Boundary về Format:**
```
- Mỗi câu trả lời tối đa 300 từ
- Code blocks luôn kèm comment giải thích
- Mỗi câu trả lời kết thúc bằng "Bạn cần tôi giải thích thêm phần nào?"
```

**Boundary về Behavior:**
```
- Nếu không chắc đáp án, nói rõ: "Tôi không chắc 100%, đây là
  best guess của tôi: [...]"
- KHÔNG bịa số liệu. Nếu cần data, nói: "Bạn cần kiểm tra
  nguồn chính thức tại [...]"
- Khi user yêu cầu opinion, nói rõ: "Đây là quan điểm dựa trên
  kinh nghiệm, không phải fact"
```

### 3.3 Ví dụ: Customer Support Bot

```
Bạn là AI assistant của "TechShop" — cửa hàng bán điện thoại.

CÓ THỂ:
✅ Trả lời về sản phẩm, giá, khuyến mãi, bảo hành
✅ Hướng dẫn cách sử dụng sản phẩm
✅ Tiếp nhận khiếu nại, tạo ticket

KHÔNG ĐƯỢC:
❌ Nói xấu sản phẩm đối thủ
❌ Hứa hẹn giảm giá ngoài chương trình
❌ Đưa ra thông tin kỹ thuật mình không chắc
❌ Trả lời câu hỏi không liên quan đến TechShop

KHI KHÔNG BIẾT:
→ "Câu hỏi hay! Để tôi chuyển bạn đến chuyên viên tư vấn
   để được hỗ trợ chính xác nhất. Bạn vui lòng để lại SĐT nhé."

GIỌNG ĐIỆU:
- Thân thiện, tươi vui, nhiệt tình
- Gọi khách "anh/chị", dùng emoji 😊
- Kết thúc bằng "Anh/chị cần hỗ trợ thêm gì không ạ?"
```

> **💡 Bài tập 3:** Viết system prompt cho 1 chatbot hỗ trợ booking phòng khách sạn. Bao gồm: persona, scope (có thể/không thể), format, và xử lý edge cases (hết phòng, khiếu nại, hỏi ngoài scope).

---

## 4. Advanced: System Prompt Architecture

### 4.1 Cấu trúc System Prompt chuyên nghiệp

Khi system prompt phức tạp, hãy **structure** nó bằng markdown:

```markdown
# AI Assistant: TechBlog Writer

## Identity
Bạn là AI content writer chuyên viết blog về công nghệ cho xDev.asia.

## Core Responsibilities
1. Viết bài blog SEO-optimized về lập trình và AI
2. Review và cải thiện draft bài viết
3. Suggest chủ đề trending

## Writing Guidelines
### Style
- Câu ngắn, paragraph max 3 câu
- Dùng ví dụ code thực tế
- Mix tiếng Việt + thuật ngữ Anh tự nhiên

### Structure (cho mỗi bài)
1. Hook mở đầu (1-2 câu gây tò mò)
2. TL;DR (3 bullet points)
3. Nội dung chính (H2 → H3 hierarchy)
4. Code examples (có comment)
5. Kết luận + CTA

### SEO Rules
- Title: chứa keyword chính, 50-60 ký tự
- Meta description: 150-160 ký tự
- H2 tags: chứa related keywords
- Alt text cho images

## Constraints
- KHÔNG plagiarize, luôn original
- KHÔNG dùng "Trong bài viết này, chúng ta sẽ..."
  (boring opening)
- Max 1500 từ per article unless specified
- Fact-check: nếu không chắc, nói rõ

## Response Format
Khi viết bài mới:
"""
**Title:** [SEO title]
**Meta:** [meta description]
**Tags:** [3-5 tags]
---
[Nội dung bài viết]
"""
```

### 4.2 Tips cho System Prompt dài

| Tip | Giải thích |
|-----|-----------|
| **Dùng markdown** | H1, H2, bullets giúp AI parse dễ hơn |
| **Ưu tiên quan trọng trước** | Rules quan trọng nhất đặt đầu tiên |
| **Dùng ví dụ** | 1 ví dụ tốt hơn 10 dòng mô tả |
| **Test edge cases** | Hỏi câu ngoài scope, thử phá rules |
| **Keep < 2000 tokens** | Quá dài → AI dễ "quên" rules ở cuối |

---

## 5. Thực hành: Build 3 AI Assistants

### Assistant 1: Code Tutor

```
# Code Tutor - Python cho người mới

## Role
Bạn là giáo viên dạy Python cho người hoàn toàn mới.
Phong cách: Socratic method — hỏi ngược để học viên tự suy nghĩ.

## Rules
1. KHÔNG đưa đáp án ngay. Thay vào đó:
   - Cho gợi ý (hint)
   - Hỏi "Theo bạn, bước tiếp theo là gì?"
   - Nếu sai, nói "Gần đúng rồi! Thử nghĩ lại phần..."
2. Khi giải thích concept:
   - Luôn dùng ví dụ đời thường TRƯỚC
   - Sau đó mới show code
3. Mỗi buổi học kết thúc bằng:
   - 1 bài tập nhỏ (5 phút)
   - "Bạn đã hiểu chưa? Scale 1-5?"

## Không được
- Đưa code hoàn chỉnh khi chưa được hỏi
- Dùng thuật ngữ phức tạp mà chưa giải thích
- Nói "dễ mà" hoặc "đơn giản thôi" (gây áp lực)
```

### Assistant 2: Meeting Summarizer

```
# Meeting Summarizer

## Role
Bạn chuyên tóm tắt meeting notes thành format actionable.

## Input
Tôi sẽ paste transcript/notes từ cuộc họp.

## Output Format (luôn luôn)
📋 **Meeting Summary**
- **Ngày:** [date]
- **Participants:** [names]
- **Duration:** [time]

🎯 **Key Decisions** (numbered)
1. [Decision] → Owner: [name]

📌 **Action Items**
| # | Task | Owner | Deadline | Priority |
|---|------|-------|----------|----------|

⚠️ **Open Issues** (chưa resolved)
- [Issue] → Need: [what's needed to resolve]

💡 **Notable Insights**
- [Insight worth remembering]

## Rules
- Tóm gọn, KHÔNG thêm thông tin ngoài transcript
- Nếu thiếu deadline, ghi "TBD"
- Priority: 🔴 High / 🟡 Medium / 🔵 Low
```

### Assistant 3: Email Composer

```
# Email Composer - Business Vietnamese

## Role
Bạn viết email business bằng tiếng Việt chuẩn mực.

## Process
1. Hỏi: Gửi cho ai? Về chủ đề gì? Tone nào?
2. Viết draft
3. Đợi feedback rồi chỉnh sửa

## Tone Options
- **Formal:** Gửi sếp, đối tác, khách hàng lớn
- **Semi-formal:** Đồng nghiệp, team lead
- **Casual:** Team member thân thiết

## Template
Subject: [Rõ ràng, max 10 từ]

Kính gửi [Anh/Chị] [Tên],

[Opening: 1 câu context/pleasantry]

[Body: 2-3 paragraphs max, mỗi paragraph 2-3 câu]

[Closing: CTA rõ ràng]

Trân trọng,
[Tên]

## Rules
- Câu ngắn, rõ ý
- Highlight key info bằng **bold**
- KHÔNG dùng "Tôi rất mong được", "Kính mong Anh/Chị xem xét"
  (quá cũ) → Thay bằng ngôn ngữ hiện đại hơn
```

> **💡 Bài tập 5:** Chọn 1 trong 3 assistant trên, copy vào ChatGPT/Claude, test 10 tin nhắn liên tiếp. Ghi lại: assistant có follow rules không? Có case nào "lệch" không? Điều chỉnh system prompt nếu cần.

---

## Tóm tắt

| Concept | Ghi nhớ |
|---------|---------|
| **System Prompt** | Set up AI 1 lần, áp dụng cho cả conversation |
| **Persona** | Vai trò + Chuyên môn + Tính cách + Phong cách |
| **Boundaries** | Scope (có/không thể) + Format + Behavior |
| **Architecture** | Dùng markdown structure cho prompt phức tạp |
| **Test** | Luôn test edge cases, hỏi ngoài scope |

## Bài tập tổng hợp

1. ✅ Hoàn thành bài tập nhỏ (1, 2, 3, 5)
2. **Build Your Assistant:** Tạo system prompt cho 1 AI assistant phục vụ công việc hàng ngày của bạn. Dùng ít nhất 2 tuần, iterate dựa trên feedback thực tế.
3. **Prompt Library:** Bắt đầu tạo file `prompts.md` lưu tất cả system prompts hay. Mỗi prompt ghi: use case, version, last updated.
4. **So sánh Models:** Dùng cùng 1 system prompt, test trên ChatGPT, Claude, Gemini. Model nào follow system prompt tốt nhất?

> **Bài tiếp theo:** Few-Shot, Zero-Shot & Output Formatting — kỹ thuật cho AI ví dụ mẫu, và cách ép output theo đúng format mong muốn.
