---
id: 019c9619-ee02-7002-f002-ee0200000002
title: 第2課：系統提示、角色扮演與角色設計
slug: bai-2-system-prompts-persona
description: 系統提示是AI助理的「靈魂」。專業的角色設計、邊界設定、輸出約束。創建用於客戶支援、程式碼審查、內容編寫的人工智慧助理。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 1
section_title: 第 1 部分：快速工程基礎
course:
  id: 019c9619-aa04-7004-b004-aa0400000004
  title: 即時工程大師班：向人工智慧發出命令的藝術
  slug: prompt-engineering-masterclass
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7635" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7635)"/>

  <!-- Decorations -->
  <g>
    <circle cx="654" cy="92" r="32" fill="#f472b6" opacity="0.07"/>
    <circle cx="708" cy="286" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="762" cy="220" r="26" fill="#f472b6" opacity="0.11"/>
    <circle cx="816" cy="154" r="8" fill="#f472b6" opacity="0.13"/>
    <circle cx="870" cy="88" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="192" x2="1100" y2="272" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="222" x2="1050" y2="292" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="965.3826859021799,128.5 965.3826859021799,155.5 942,169 918.6173140978201,155.5 918.6173140978201,128.5 942,115" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🧠 人工智慧與機器學習 — 第 1 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 2 課：系統提示、角色扮演和</tspan>
      <tspan x="60" dy="42">角色設計</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">即時工程大師班：向人工智慧發出命令的藝術</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：快速工程基礎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

在上一課中，您學習瞭如何編寫良好的**使用者提示**。但如果每次問都得重複一遍上下文、作用、格式……那就很累了。這就是**系統提示字元**存在的原因。

**系統提示**（或系統指令）是**「後台」提示**－它設定AI**一次**，然後你的所有問題都會以既定的方式得到答案。

> **實際範例：** ChatGPT 自訂指令、Claude 專案、Gemini 系統指令 — 全部都是系統提示。

---

## 1. 系統提示與使用者提示

### 1.1 比較

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

| |系統提示|使用者提示|
|--|-------------|-------------|
| **何時設定** |談話開始|每一則訊息|
| **目的** |定義角色、規則、格式 |具體要求|
| **範例** | 「你是X，永遠回答Y」 | 「向我解釋 Z」|
| **改變？ ** |很少（1 次/會話）|連續（每題）|

### 1.2 API呼叫中的位置

當呼叫 API（OpenAI、Anthropic、Google）時，訊息有 3 個角色：

```python
messages = [
    {"role": "system", "content": "Bạn là..."},   # ← System prompt
    {"role": "user", "content": "Câu hỏi 1"},      # ← User
    {"role": "assistant", "content": "Trả lời 1"},  # ← AI response
    {"role": "user", "content": "Câu hỏi 2"},       # ← User tiếp
]
```

**註：** Claude（Anthropic）使用參數 `system` 單獨的，不包括在內 `messages`：
```python
response = client.messages.create(
    model="claude-3-5-sonnet",
    system="Bạn là...",  # ← Nằm riêng
    messages=[
        {"role": "user", "content": "Câu hỏi"}
    ]
)
```

> **💡練習 1：** 開啟 ChatGPT → 設定 → 自訂指令。給自己寫一個系統提示（職業、你希望AI如何回應、首選格式）。測驗 5 個不同的問題 — AI 的回答是否一致？

---

## 2.角色設計－為AI創造“個性”

### 2.1 為什麼我們需要角色？

當你說「你是醫生」時，人工智慧會：
- 使用正確的醫學術語
- 更謹慎地聽取健康建議
- 在沒有資訊的情況下不要做出診斷

當你說「你是喜劇演員」時，人工智慧會：
- 使用幽默的語言
- 找到一切有趣的角度
- 更輕鬆發揮創造力

**準確的角色=更合適的輸出。 **

### 2.2 標準角色模板

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

### 2.3 現實生活中的角色範例

**🧑‍💻 程式碼審查者：**
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

**📊資料分析師：**
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

**✍️內容作者：**
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

> **💡練習 2：** 為您的用例建立角色（編碼員、作家、分析師、教師...）。使用2.2中的模板。測試 10 則訊息的對話 — 角色是否一致？

---

## 3. 邊界設定—“安全圍欄”

### 3.1 為什麼我們需要邊界？

沒有邊界，人工智慧可以：
- 回覆超出範圍→不相關內容
- 捏造訊息→產生幻覺
- 太長/太短→不方便
- 提供危險建議→責任

### 3.2 邊界類型

**範圍邊界：**
```
- Chỉ trả lời các câu hỏi liên quan đến Python và FastAPI
- Nếu câu hỏi ngoài scope, nói: "Câu hỏi này nằm ngoài
  chuyên môn của tôi. Hãy hỏi chuyên gia [lĩnh vực] nhé."
- KHÔNG trả lời câu hỏi về: y tế, pháp luật, tài chính cá nhân
```

**格式邊界：**
```
- Mỗi câu trả lời tối đa 300 từ
- Code blocks luôn kèm comment giải thích
- Mỗi câu trả lời kết thúc bằng "Bạn cần tôi giải thích thêm phần nào?"
```

**行為邊界：**
```
- Nếu không chắc đáp án, nói rõ: "Tôi không chắc 100%, đây là
  best guess của tôi: [...]"
- KHÔNG bịa số liệu. Nếu cần data, nói: "Bạn cần kiểm tra
  nguồn chính thức tại [...]"
- Khi user yêu cầu opinion, nói rõ: "Đây là quan điểm dựa trên
  kinh nghiệm, không phải fact"
```

### 3.3 範例：客戶支援機器人

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

> **💡 練習 3：** 為支援飯店房間預訂的聊天機器人編寫系統提示。包括：角色、範圍（可以/不能）、格式和處理邊緣情況（超出空間、投訴、超出範圍的查詢）。

---

## 4. 進階：系統提示架構

### 4.1 專業系統提示結構

當系統提示比較複雜時，使用markdown來結構化：

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

### 4.2 長系統提示的提示

|提示|說明|
|-----|------------|
| **使用降價** | H1、H2、項目符號幫助 AI 解析更輕鬆 |
| **重要優先** |最重要的規則優先 |
| **使用範例** | 1個範例勝過10行描述 |
| **測試邊緣情況** |提出超出範圍的問題，嘗試打破規則 |
| **保留 < 2000 個代幣** |太長→AI很容易「忘記」最後的規則 |

---

## 5. 練習：建構 3 個 AI 助手

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

> **💡練習5：** 從上面3個助手中選擇1個，複製到ChatGPT/Claude，測試10個連續訊息。記錄：助理是否遵守規則？是否有「離經叛道」的案例？如有必要，調整系統提示。

---

## 總結

|概念 |記住|
|--------|--------|
| **系統提示** | AI 設定一次，應用於整個對話 |
| **角色** |角色+專業知識+個性+風格|
| **邊界** |範圍（是/否）+格式+行為|
| **架構** |使用 Markdown 結構進行複雜提示 |
| **測試** |始終測試邊緣情況，詢問範圍之外的問題 |

## 一般練習

1. ✅ 完成小練習（1,2,3,5）
2. **建立你的助手：** 創建一個AI助理的系統提示，為你的日常工作服務。使用至少2週，根據實際回饋進行迭代。
3. **提示Library：**開始建立文件 `prompts.md` 儲存好所有系統提示。每個提示記錄：用例、版本、最後更新。
4. **比較模型：** 使用相同的系統提示，在ChatGPT、Claude、Gemini上測試。哪種型號最符合系統提示？

> **下一篇文章：** 少樣本、零樣本和輸出格式 - 範例 AI 技術，以及如何強制輸出為所需的格式。
