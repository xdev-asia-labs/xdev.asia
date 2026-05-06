---
id: 019c9619-ee07-7007-f007-ee0700000007
title: 'レッスン 7: コード生成のための迅速なエンジニアリング'
slug: bai-7-prompt-cho-code
description: >-
  コード生成、レビュー、デバッグ、リファクタリングのためのエンジニアリングを促進します。高品質のコード、テスト生成、ドキュメントを作成するためのプロンプトを作成するためのテクニック。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 6
section_title: 'パート 3: 実用化'
course:
  id: 019c9619-aa04-7004-b004-aa0400000004
  title: 'プロンプト エンジニアリング マスタークラス: AI にコマンドを与える技術'
  slug: prompt-engineering-masterclass
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 AI と ML — レッスン 6</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 7: コードの迅速なエンジニアリング</tspan>
      <tspan x="60" dy="42">世代</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">プロンプト エンジニアリング マスタークラス: AI にコマンドを与える技術</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: 実用化</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

AI コード生成は開発者の仕事のやり方を変えました。ただし、「コードを生成する」と「**優れた** コードを生成する」は 2 つのまったく異なるものです。コードの迅速なエンジニアリングには **具体性** が必要です。言語、フレームワーク、スタイル、制約、エッジ ケースを明確に記述する必要があります。

> **比較:**
> - 不適切なプロンプト: 「ログイン API の書き込み」 → コードは機能しますが、検証が不足しており、エラー処理が行われず、シークレットがハードコードされています
> - 適切なプロンプト: 「FastAPI ログイン エンドポイント、bcrypt パスワード、JWT トークン、レート制限、入力検証、適切なエラー コードを書き込んでください」→ 本番環境に対応したコード

---

## 1. コード生成 — 基本的なテクニック

### 1.1 コードを生成するためのテンプレート プロンプト

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

### 1.2 例: API エンドポイント

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

> **💡 演習 1:** 上記のテンプレートを使用して、別のエンティティ (製品、注文など) の CRUD API を生成します。 CONSTRAINTS 部分を削除した場合と完全に保持した場合の結果を比較してください。

---

## 2. コードレビュー

### 2.1 コードレビュープロンプト

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
```{言語}
{ここにコードを貼り付けてください}
```​
```

### 2.2 出力例

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

## 3. デバッグ

### 3.1 効果的なデバッグプロンプト

```
= CONTEXT =
Language: {language}
Framework: {framework}
File: {filename}

= ERROR =
```
{エラー メッセージ/トレースバックを貼り付け}
```​

= CODE =
```{言語}
{関連するコードを貼り付けます}
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

### 3.2 AI を使用したラバーダックのデバッグ

```
Tôi đang debug: {mô tả vấn đề}

Hãy hỏi tôi 5 câu hỏi chẩn đoán để thu hẹp nguyên nhân:
1. Câu hỏi về input/data
2. Câu hỏi về environment
3. Câu hỏi về timing/sequence
4. Câu hỏi về dependencies
5. Câu hỏi về edge cases
```

> **💡 演習 2:** コード内に意図的にバグを作成します (例: オフバイワン、競合状態)。デバッグ プロンプトを使用して AI に検出させます。 AIがそれを検出するんですよね？

---

## 4. テストの生成

### 4.1 プロンプトによるテストの生成

```
= CODE UNDER TEST =
```{言語}
{関数/クラスを貼り付け}
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

### 4.2 例

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

## 5. リファクタリング

### 5.1 即時リファクタリング

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

```{言語}
{コードを貼り付け}
```​
```

### 5.2 移行プロンプト

```
Migrate code từ {old_framework} sang {new_framework}:

Constraints:
- Giữ nguyên tất cả functionality
- Cập nhật imports và API calls
- Handle breaking changes giữa 2 versions
- Liệt kê deprecated features cần thay thế

```{言語}
{古いコードを貼り付け}
```​
```

---

## 6. ドキュメントの生成

### 6.1 ドキュメントの生成を求めるプロンプト

```
Viết documentation cho code sau:

1. **Overview:** Mô tả module/class/function làm gì (2-3 câu)
2. **Parameters:** Tên, type, description, default value
3. **Returns:** Type, description
4. **Raises:** Exceptions có thể raise
5. **Examples:** 2-3 ví dụ sử dụng (simple → complex)
6. **Notes:** Edge cases, performance considerations

Format: Google-style docstring / JSDoc

```{言語}
{コードを貼り付け}
```​
```

> **💡 演習 3:** 実際のプロジェクトから複雑な関数を取得します (ドキュメントはありません)。プロンプトを使用してドキュメントを生成します。ドキュメントは正確ですか?

---

## 概要

|使用例 |主要なプロンプト要素 |
|--------|--------|
| **生成** |役割、言語、フレームワーク、制約、セキュリティ |
| **レビュー** |チェックリスト、重大度レベル、修正提案 |
| **デバッグ** |エラー、コード、予想されるものと実際のもの、試行された内容 |
| **テスト** |カバレッジターゲット、テストタイプ、命名規則 |
| **リファクタリング** |原則 (DRY、SRP)、行動を維持する |
| **ドキュメント** |形式、パラメータ、例、特殊なケース |

## 一般的な演習

1. ✅ 3 つの小さな演習 (1、2、3) を完了します。
2. **フルサイクル:** コードの生成 → レビュー → 問題の修正 → テスト → ドキュメント。すべては迅速なエンジニアリングによるものです。コード カバレッジ > 80% を達成します。
3. **プロンプト ライブラリ:** 生成、レビュー、デバッグ、テスト、ドキュメント用の 5 つのプロンプト テンプレートのセットを作成します。再利用可能として保存します。 3 つの異なるプロジェクトでテストされました。
4. **比較:** コード生成品質を比較: GPT-4o vs Claude vs Gemini。同じプロンプトで、どのモデルが最良のコードを生成しますか?

> **次の記事:** データ分析とビジネス ライティングのプロンプト — AI を使用してデータを分析し、レポートを作成し、ダッシュボードの洞察を作成します。
