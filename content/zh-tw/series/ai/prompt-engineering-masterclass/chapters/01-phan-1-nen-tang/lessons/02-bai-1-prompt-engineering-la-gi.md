---
id: 019c9619-ee01-7001-f001-ee0100000001
title: 第 1 課：什麼是即時工程？ — 良好提示的剖析
slug: bai-1-prompt-engineering-la-gi
description: 快速工程是人工智慧時代的第一技能。了解最佳提示結構、CLEAR 原則，以及為什麼 AI 80% 的價值在於您提出問題的方式。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 0
section_title: 第 1 部分：快速工程基礎
course:
  id: 019c9619-aa04-7004-b004-aa0400000004
  title: 即時工程大師班：向人工智慧發出命令的藝術
  slug: prompt-engineering-masterclass
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 人工智慧與機器學習 — 第 0 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 1 課：什麼是即時工程？ — 解剖學</tspan>
      <tspan x="60" dy="42">一個好的提示</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">即時工程大師班：向人工智慧發出命令的藝術</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：快速工程基礎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

您是否曾經向 ChatGPT 詢問過問題並得到了“馬馬虎虎”的答案？然後你再問同樣的問題，但**措詞不同**，突然間答案就**好10倍**？

這就是**即時工程**——與人工智慧有效溝通的藝術。

> **事實：**相同的 AI 模型（GPT-4o、Claude、Gemini），**您提出的問題**決定了答案的 **80% 品質**。快速工程不是「駭客」——它是任何使用人工智慧的人都需要的**核心技能**。

---

## 1. 什麼是即時工程？

### 1.1 定義

**提示** = 您傳送給 AI 的文字（問題、請求、指示）。  
**即時工程** = 即時設計工程，以**最大化**人工智慧的輸出品質。

想像一下：人工智慧就像一個**五星級廚師**——技藝精湛，但煮什麼取決於你的**訂單**（提示）：

|訂單|結果 |
|--------|--------|
| “給我做點好吃的” | 🤷隨機菜品，也許好，也許壞|
| 《做河內牛肉河粉，炒，清水，蔥花，加羅勒》| 🎯100%正確|

人工智慧也是如此。 **不明確的提示=不明確的輸出。具體提示 = 高品質輸出。 **

### 1.2 為什麼快速工程很重要？

```
❌ Prompt tệ:   "Viết cho tôi email"
✅ Prompt tốt:  "Viết email cho sếp bằng tiếng Việt, giọng điệu lịch sự
                 nhưng tự tin, xin nghỉ phép 3 ngày (10-12/4) vì lý do
                 gia đình. Nêu rõ đã bàn giao công việc cho đồng nghiệp
                 Minh. Độ dài: 150-200 từ."
```

有什麼區別？一個好的提示**提供上下文**，**定義約束**，並**設定期望**。

### 1.3 誰需要學習即時工程？

|對象|應用 |
|------------|---------|
| **開發商** |程式碼產生、偵錯、程式碼審查、編寫測試 |
| **資料分析師** | SQL 生成、資料洞察、自動報告 |
| **內容創作者** |文章寫作、社群媒體、SEO、集思廣益 |
| **產品經理** |撰寫 PRD、使用者故事、競爭對手分析 |
| **行銷人員** |電子郵件活動、廣告文案、A/B 測試想法 |
| **任何人** |與 AI 互動時節省 **2-4 小時/天** |

> **💡練習1.1：** 想想你日常工作/學習中可以使用人工智慧的 3 種情況。為每種情況編寫提示－「懶惰」版本和「徹底」版本。比較結果。

---

## 2. 提示的剖析 — 好的提示的剖析

一個有效的提示通常有 **6 個組成部分**（不一定是全部）：

### 2.1 Prompt 的六個組成部分

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

### 2.2 各元件範例

**錯誤提示：**
```
Viết bài về Python
```

**好的提示－部分分析：**

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

### 2.3 比較表：業餘提示與專業提示

|因素 | ❌ 業餘 | ✅ 專業 |
|--------|-------------|----------------|
| **角色** | （無）| 「你是高階資料分析師...」|
| **任務** | “數據分析”| “分析第三季度與第二季度的收入，發現 3 個關鍵見解”|
| **格式** | （不說話）| “帶列的表格答案：公制、Q2、Q3、變化百分比”|
| **限制** | （無限制）| “300字以內，重點關注可操作的見解” |

> **💡練習 2：** 根據以下提示並透過添加全部 6 種成分來改進它： `"Giúp tôi viết CV"`。比較之前和之後的輸出。

---

## 3. 明確原則 — 5 條黃金法則

### 3.1 框架清晰

|信件|原則|說明|
|--------|------------|------------|
| **C** | **簡潔** — 簡潔 |廢話不多說，直接進入正題|
| **L** | **邏輯** — 邏輯 |依序排列訊息，易於理解 |
| **E** | **顯式** — 顯式 |準確地說出你想要的內容，不要含糊其辭
| **一個** | **自適應** — 靈活 |準備根據輸出進行調整 |
| **R** | **基於角色** — 基於角色 |分配適當的人物角色/專家|

### 3.2 CLEAR應用範例

**❌ 明確違規行為：**
```
Ừm, tôi đang cần, à, nếu được thì bạn giúp tôi viết cái gì đó
liên quan đến marketing, kiểu như email hay post gì đó, cho sản phẩm
mới của công ty tôi, nó là app mobile, à mà cũng không chắc lắm,
bạn tự quyết đi...
```

**✅ 清除：**
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

## 4. 迭代提示—“再問一次，直到你答對為止”

### 4.1 為什麼需要迭代？

快速工程**不必寫一次並完成**。這就像雕刻：從一個粗糙的形狀開始，然後**銳化它**直到它變得美麗。

```
Lần 1: Prompt cơ bản → Output "tàm tạm"
Lần 2: Thêm context → Output tốt hơn
Lần 3: Thêm constraints → Output gần đúng ý
Lần 4: Tinh chỉnh tone/format → Output hoàn hảo ✅
```

### 4.2 有效的迭代技術

**技術 1：具體回饋**
```
"Bài viết tốt rồi, nhưng:
 - Phần giới thiệu quá dài, rút ngắn còn 2 câu
 - Thêm ví dụ thực tế cho lý do #3
 - Giọng điệu hơi formal, chuyển sang casual hơn"
```

**技術 2：給出範例**
```
"Viết lại intro theo phong cách này:
 'Bạn có biết? 73% Gen Z check ví tiền trước khi...'
 → Bắt đầu bằng câu hỏi + số liệu gây tò mò"
```

**技巧3：提出反向問題**
```
"Trước khi viết, hãy hỏi tôi 5 câu hỏi quan trọng nhất
 mà bạn cần biết để viết email này hiệu quả nhất."
```

> **專業提示：** 技術 #3 非常強大！當你讓人工智慧反問問題時，它將幫助你**發現你還沒想到的缺失資訊**。

> **💡練習 4：** 使用技巧#3：在為「AI 工程師」職位撰寫職位描述之前，請 ChatGPT/Claude 問您 5 個問題。比較使用/不使用此技術的輸出。

---

## 5. 常見錯誤

### 5.1 寫Prompt時最常見的7個錯誤

| ＃|錯誤|錯誤的例子|編輯|
|---|--------|----------|--------|
| 1 | **太模糊** | “幫我學習人工智慧” | “為 Python 開發者創建為期 3 個月的 AI 學習路線圖，重點關注 NLP”|
| 2 | **太長，漫無目的** | 500 字解釋上下文 |用 2-3 句話概括上下文 |
| 3 | **無格式** | “數據分析”| “表格回應：指標\|值\|評論”|
| 4 | **假設人工智慧知道** | “從昨天開始” |為每個提示提供完整的上下文 |
| 5 | **一次問很多事情** | “寫作+創作圖像+翻譯”|分為3個獨立的提示|
| 6 | **不迭代** |接受第一個輸出 |具體回饋，逐步磨礪|
| 7 | **未經測試** |每種情況使用 1 個提示 |使用許多不同的輸入進行測試 |

### 5.2“垃圾進，垃圾出”

```
Prompt mơ hồ → AI phải "đoán" ý bạn → Output ngẫu nhiên → Bạn thất vọng
Prompt rõ ràng → AI hiểu chính xác → Output đúng ý → Bạn "wow AI giỏi thật!"
```

**結論：**大多時候使用者抱怨「AI不好」其實是因為**提示不好**。好的提示=好的人工智慧。

---

## 6.練習：改進3個實際提示

### 範例 1：開發人員 — 程式碼審查

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
   ```蟒蛇
   defprocess（數據）：
       結果=[]
       對於範圍內的 i（len（數據））：
           如果數據[i] > 0：
               結果.append(數據[i] * 2)
       回傳結果
   ```"
```

### 範例 2：行銷 — 社交貼文

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

### 範例 3：學生 — 學習

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

> **💡練習6：** 從上面3個例子中選擇1個，將好的提示複製到ChatGPT/Claude/Gemini。然後迭代2-3次以提高產量。每次進行更改時記錄提示並比較結果。

---

## 7. 每個AI模型的工程提示

每個人工智慧模型都有不同的「個性」。每個模型的最佳提示也略有不同：

|型號|優勢 |提示提示|
|--------|----------|-------------|
| **ChatGPT (GPT-4o)** |富有創意、多樣化、善於編寫程式碼 |為複雜的課程添加「一步一步思考」|
| **克勞德（3.5 首十四行詩）** |準確、嚴格執行、長|使用 XML 標籤 `<task>`, `<context>` 結構|
| **雙子座（2.0 快閃記憶體）** |快速、多模式、擅長資料 |提供具體的例子，使用markdown |

### Claude XML 風格（特別有效）：
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

## 總結

|概念 |記住|
|--------|--------|
| **及時工程** |與人工智慧有效溝通的藝術 |
| **6 種成分** |角色、背景、任務、格式、語氣、限制 |
| **清晰** |簡潔、邏輯、明確、適應性、基於角色 |
| **迭代** |提示→輸出→回饋→改進→重複|
| **錯誤#1** |太模糊了－人工智慧必須猜測=輸出不佳|

## 一般練習

1. ✅ 完成所有小練習（1.1、2、4、6）
2. **提示組合：** 為工作/學習中的 5 個不同用例建立 5 個「完美」提示。每個提示必須有 6 個組成部分。
3. **A/B 測試：** 選擇 1 個任務，寫出 2 個不同的提示（1 個簡短，1 個詳細），每個提示運行 3 次。比較平均品質。
4. **跨模型測試：** 獲得最佳提示，在 ChatGPT、Claude 和 Gemini 上運行。哪種模型可以為您的用例提供最佳輸出？

> **下一篇文章：** 系統提示和角色設計 — 如何建立您自己的「個人」人工智慧助理，具有自訂個性和專業知識。
