---
id: 019c9619-ee07-7007-f007-ee0700000007
title: 'Bài 7: Prompt Engineering cho Code Generation'
slug: bai-7-prompt-cho-code
description: >-
  Prompt Engineering cho code generation, review, debug, refactor. Kỹ thuật
  viết prompt tạo code chất lượng, test generation, documentation.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 6
section_title: "Phần 3: Ứng dụng Thực tế"
course:
  id: 019c9619-aa04-7004-b004-aa0400000004
  title: "Prompt Engineering Masterclass: Nghệ thuật Ra lệnh cho AI"
  slug: prompt-engineering-masterclass
---

## Giới thiệu

AI code generation đã thay đổi cách dev làm việc. Nhưng "Generate code" và "Generate **good** code" là 2 việc rất khác. Prompt engineering cho code đòi hỏi **specificity** — bạn phải nói rõ: language, framework, style, constraints, edge cases.

> **So sánh:**
> - Prompt kém: "Viết API login" → code hoạt động nhưng thiếu validation, không xử lý lỗi, hard-coded secrets
> - Prompt tốt: "Viết FastAPI login endpoint, bcrypt password, JWT token, rate limiting, input validation, proper error codes" → production-ready code

---

## 1. Code Generation — Kỹ thuật cơ bản

### 1.1 Template prompt sinh code

```
= ROLE =
Bạn là senior {language} developer, expert về {framework}.

= TASK =
Viết {loại code}: {mô tả chức năng}

= REQUIREMENTS =
- Language: {language} {version}
- Framework: {framework} {version}
- Style: {coding style/conventions}
- Error handling: {cách xử lý lỗi}
- Security: {yêu cầu bảo mật}

= CONSTRAINTS =
- Không dùng {thư viện/pattern cấm}
- Performance: {yêu cầu}
- Compatibility: {platform/browser}

= OUTPUT =
- Code với comments tiếng Việt
- Type annotations (nếu support)
- Docstring cho public functions
```

### 1.2 Ví dụ: API endpoint

```
= ROLE =
Bạn là senior Python developer, expert FastAPI + SQLAlchemy.

= TASK =
Viết CRUD API cho User management.

= REQUIREMENTS =
- Python 3.12, FastAPI, SQLAlchemy 2.0, Pydantic v2
- PostgreSQL database
- Bcrypt cho password hashing
- JWT authentication
- Input validation (email format, password strength)
- Proper HTTP status codes (201, 400, 401, 404, 409)
- Pagination cho list endpoint

= CONSTRAINTS =
- Không dùng Flask hoặc Django
- async/await throughout
- Không hard-code secrets (dùng env vars)

= OUTPUT =
- models.py (SQLAlchemy models)
- schemas.py (Pydantic schemas)
- routes.py (API endpoints)
- Mỗi file kèm docstring và comments
```

> **💡 Bài tập 1:** Dùng template trên để generate CRUD API cho 1 entity khác (Product, Order, etc.). So sánh kết quả khi bỏ phần CONSTRAINTS vs giữ đầy đủ.

---

## 2. Code Review

### 2.1 Prompt review code

```
Review code sau theo checklist:

1. **Security**: SQL injection, XSS, CSRF, secrets exposure?
2. **Performance**: N+1 queries, unnecessary loops, memory leaks?
3. **Error handling**: Có try-catch? Có log errors? Có graceful degradation?
4. **Best practices**: DRY, SOLID, naming conventions?
5. **Edge cases**: Null/empty input? Concurrent access? Large data?

Cho mỗi issue, cung cấp:
- Severity: 🔴 Critical | 🟡 Warning | 🟢 Info
- Dòng code: chỉ ra dòng cụ thể
- Vấn đề: mô tả ngắn
- Fix: code đã sửa

Code cần review:
```{language}
{paste code here}
```​
```

### 2.2 Ví dụ output

```
🔴 Critical - Dòng 15: SQL Injection
   Problem: f"SELECT * FROM users WHERE name = '{name}'"
   Fix: cursor.execute("SELECT * FROM users WHERE name = ?", (name,))

🟡 Warning - Dòng 28: Missing error handling
   Problem: file = open(path) — không có try/except
   Fix: Wrap trong try/except, handle FileNotFoundError

🟢 Info - Dòng 5: Naming convention
   Problem: def getData() — nên dùng snake_case
   Fix: def get_data()
```

---

## 3. Debugging

### 3.1 Prompt debug hiệu quả

```
= CONTEXT =
Language: {language}
Framework: {framework}
File: {filename}

= ERROR =
```
{paste error message/traceback}
```​

= CODE =
```{language}
{paste relevant code}
```​

= EXPECTED BEHAVIOR =
{mô tả behavior mong muốn}

= ACTUAL BEHAVIOR =
{mô tả behavior thực tế}

= WHAT I'VE TRIED =
- {đã thử gì}
- {kết quả}

Hãy:
1. Giải thích nguyên nhân root cause
2. Cung cấp fix cụ thể (code)
3. Giải thích tại sao fix này hoạt động
4. Đề xuất cách phòng tránh trong tương lai
```

### 3.2 Rubber duck debugging với AI

```
Tôi đang debug: {mô tả vấn đề}

Hãy hỏi tôi 5 câu hỏi chẩn đoán để thu hẹp nguyên nhân:
1. Câu hỏi về input/data
2. Câu hỏi về environment
3. Câu hỏi về timing/sequence
4. Câu hỏi về dependencies
5. Câu hỏi về edge cases
```

> **💡 Bài tập 2:** Cố ý tạo 1 bug trong code (ví dụ: off-by-one, race condition). Dùng debug prompt để AI tìm. AI phát hiện đúng không?

---

## 4. Test Generation

### 4.1 Prompt sinh test

```
= CODE UNDER TEST =
```{language}
{paste function/class}
```​

= TESTING REQUIREMENTS =
- Framework: pytest / jest / JUnit
- Coverage: aim for >90%
- Types of tests:
  ✅ Happy path (normal cases)
  ✅ Edge cases (empty, null, boundary values)
  ✅ Error cases (invalid input, exceptions)
  ✅ Integration tests (nếu applicable)

= OUTPUT =
Cho mỗi test:
- Test name mô tả rõ scenario (test_should_return_error_when_email_invalid)
- Arrange-Act-Assert pattern
- Comments giải thích test purpose
```

### 4.2 Ví dụ

```python
"""Input: function cần test"""
def calculate_discount(price: float, membership: str) -> float:
    if price <= 0:
        raise ValueError("Price must be positive")
    discounts = {"gold": 0.2, "silver": 0.1, "bronze": 0.05}
    discount = discounts.get(membership, 0)
    return round(price * (1 - discount), 2)
```

```
Sinh pytest tests cho function calculate_discount ở trên.
Bao gồm:
- Normal: gold, silver, bronze members
- Edge: price = 0.01, price = 999999
- Error: price = 0, price = -1, membership = None
- Boundary: discount kết quả = 0
```

---

## 5. Refactoring

### 5.1 Prompt refactor

```
Refactor code sau, áp dụng:
1. **DRY** — loại bỏ code trùng lặp
2. **Single Responsibility** — mỗi function 1 nhiệm vụ
3. **Naming** — đặt tên rõ nghĩa
4. **Simplify** — giảm complexity (if/else lồng nhau)
5. **Type safety** — thêm type annotations

Giữ nguyên behavior (không thay đổi logic).

Cho mỗi thay đổi, giải thích:
- BEFORE: đoạn code cũ
- AFTER: đoạn code mới
- WHY: lý do refactor

```{language}
{paste code}
```​
```

### 5.2 Migration prompt

```
Migrate code từ {old_framework} sang {new_framework}:

Constraints:
- Giữ nguyên tất cả functionality
- Cập nhật imports và API calls
- Handle breaking changes giữa 2 versions
- Liệt kê deprecated features cần thay thế

```{language}
{paste old code}
```​
```

---

## 6. Documentation Generation

### 6.1 Prompt sinh docs

```
Viết documentation cho code sau:

1. **Overview:** Mô tả module/class/function làm gì (2-3 câu)
2. **Parameters:** Tên, type, description, default value
3. **Returns:** Type, description
4. **Raises:** Exceptions có thể raise
5. **Examples:** 2-3 ví dụ sử dụng (simple → complex)
6. **Notes:** Edge cases, performance considerations

Format: Google-style docstring / JSDoc

```{language}
{paste code}
```​
```

> **💡 Bài tập 3:** Lấy 1 function phức tạp từ project thật (không có docs). Dùng prompt sinh documentation. Documentation có chính xác không?

---

## Tóm tắt

| Use case | Key prompt elements |
|---------|-------------------|
| **Generate** | Role, language, framework, constraints, security |
| **Review** | Checklist, severity levels, fix suggestions |
| **Debug** | Error, code, expected vs actual, what was tried |
| **Test** | Coverage target, test types, naming convention |
| **Refactor** | Principles (DRY, SRP), keep behavior |
| **Docs** | Format, parameters, examples, edge cases |

## Bài tập tổng hợp

1. ✅ Hoàn thành 3 bài tập nhỏ (1, 2, 3)
2. **Full Cycle:** Generate code → Review → Fix issues → Test → Document. Tất cả bằng prompt engineering. Đạt code coverage > 80%.
3. **Prompt Library:** Tạo bộ 5 prompt templates cho: generate, review, debug, test, docs. Save dạng reusable. Test trên 3 projects khác nhau.
4. **Compare:** So sánh code generation quality: GPT-4o vs Claude vs Gemini. Cùng 1 prompt, model nào sinh code tốt nhất?

> **Bài tiếp theo:** Prompt cho Data Analysis & Business Writing — dùng AI phân tích dữ liệu, viết báo cáo, tạo dashboard insights.
