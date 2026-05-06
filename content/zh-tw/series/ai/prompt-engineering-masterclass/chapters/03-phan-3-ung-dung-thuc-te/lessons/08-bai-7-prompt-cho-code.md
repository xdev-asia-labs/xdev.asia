---
id: 019c9619-ee07-7007-f007-ee0700000007
title: 第 7 課：程式碼產生的快速工程
slug: bai-7-prompt-cho-code
description: 提示工程人員進行程式碼產生、審查、偵錯、重構。編寫提示以創建高品質程式碼、測試產生、文件的技術。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 6
section_title: 第三部分：實際應用
course:
  id: 019c9619-aa04-7004-b004-aa0400000004
  title: 即時工程大師班：向人工智慧發出命令的藝術
  slug: prompt-engineering-masterclass
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5372" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5372)"/>

  <!-- Decorations -->
  <g>
    <circle cx="780" cy="110" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="960" cy="50" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="640" cy="250" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="820" cy="190" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1000" cy="130" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="90" x2="1100" y2="170" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="120" x2="1050" y2="190" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1061.650635094611,227.5 1061.650635094611,252.5 1040,265 1018.349364905389,252.5 1018.349364905389,227.5 1040,215" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 人工智慧與機器學習 — 第 6 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 7 課：快速編寫程式碼</tspan>
      <tspan x="60" dy="42">世代</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">即時工程大師班：向人工智慧發出命令的藝術</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第三部分：實際應用</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

人工智慧程式碼生成改變了開發人員的工作方式。但「產生程式碼」和「產生**好的**程式碼」是兩件截然不同的事情。快速的程式碼工程需要**特異性**——您必須清楚說明：語言、框架、風格、約束、邊緣情況。

> **比較：**
> - 提示不佳：「編寫登入 API」→ 程式碼可以運作，但缺乏驗證，沒有錯誤處理，硬編碼的秘密
> - 良好的提示：「編寫 FastAPI 登入端點、bcrypt 密碼、JWT 令牌、速率限制、輸入驗證、正確的錯誤代碼」→ 生產就緒程式碼

---

## 1. 程式碼生成－基本技術

### 1.1 範本提示產生程式碼

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

### 1.2 範例：API 端點

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

> **💡 練習 1：** 使用上述範本為另一個實體（產品、訂單等）產生 CRUD API。比較刪除 CONSTRAINTS 部分與完全保留它時的結果。

---

## 2. 程式碼審查

### 2.1 程式碼審查提示

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
```{語言}
{在此處貼上代碼}
```​
```

### 2.2 輸出範例

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

## 3. 偵錯

### 3.1 有效的偵錯提示

```
= CONTEXT =
Language: {language}
Framework: {framework}
File: {filename}

= ERROR =
```
{貼上錯誤訊息/回溯}
```​

= CODE =
```{語言}
{貼上相關代碼}
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

### 3.2 用人工智慧進行橡皮鴨調試

```
Tôi đang debug: {mô tả vấn đề}

Hãy hỏi tôi 5 câu hỏi chẩn đoán để thu hẹp nguyên nhân:
1. Câu hỏi về input/data
2. Câu hỏi về environment
3. Câu hỏi về timing/sequence
4. Câu hỏi về dependencies
5. Câu hỏi về edge cases
```

> **💡 練習 2：** 故意在程式碼中建立錯誤（例如相差一、競爭條件）。使用調試提示讓AI找到它。 AI檢測對了嗎？

---

## 4. 測試生成

### 4.1 提示產生測試

```
= CODE UNDER TEST =
```{語言}
{貼上函數/類別}
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

### 4.2 範例

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

## 5. 重構

### 5.1 提示重構

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

```{語言}
{貼上程式碼}
```​
```

### 5.2 遷移提示

```
Migrate code từ {old_framework} sang {new_framework}:

Constraints:
- Giữ nguyên tất cả functionality
- Cập nhật imports và API calls
- Handle breaking changes giữa 2 versions
- Liệt kê deprecated features cần thay thế

```{語言}
{貼上舊代碼}
```​
```

---

## 6. 文檔生成

### 6.1 提示產生文檔

```
Viết documentation cho code sau:

1. **Overview:** Mô tả module/class/function làm gì (2-3 câu)
2. **Parameters:** Tên, type, description, default value
3. **Returns:** Type, description
4. **Raises:** Exceptions có thể raise
5. **Examples:** 2-3 ví dụ sử dụng (simple → complex)
6. **Notes:** Edge cases, performance considerations

Format: Google-style docstring / JSDoc

```{語言}
{貼上程式碼}
```​
```

> **💡练习 3：** 从真实项目中获取一个复杂的函数（无文档）。使用提示產生文件。文件準確嗎？

---

## 總結

|使用案例 |關鍵提示要素 |
|--------|--------------------|
| **生成** |角色、语言、框架、约束、安全 |
| **评论** |清单、严重性级别、修复建议 |
| **调试** |错误、代码、预期与实际、尝试过什么 |
| **测试** |覆盖目标、测试类型、命名约定 |
| **重构** |原则（DRY、SRP），保持行为 |
| **文档** |格式、参数、示例、边缘情况 |

## 一般練習

1. ✅ 完成3個小練習（1,2,3）
2. **完整周期：** 生成代码→审查→修复问题→测试→文档。一切都透過及時的工程設計。實現程式碼覆蓋率 > 80%。
3. **提示库：** 创建一组 5 个提示模板，用于：生成、审阅、调试、测试、文档。儲存為可重複使用。在 3 個不同的項目上進行了測試。
4. **比较：** 比较代码生成质量：GPT-4o vs Claude vs Gemini。在同样的提示下，哪种模型生成的代码最好？

> **下一篇文章：** 数据分析和商业写作提示——使用人工智能分析数据、编写报告、创建仪表板见解。
