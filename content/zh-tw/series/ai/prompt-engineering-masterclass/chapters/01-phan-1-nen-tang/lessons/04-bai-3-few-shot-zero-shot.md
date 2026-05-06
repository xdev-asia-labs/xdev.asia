---
id: 019c9619-ee03-7003-f003-ee0300000003
title: 第 3 課：少樣本、零樣本和輸出格式
slug: bai-3-few-shot-zero-shot
description: 何時使用零射擊、少射擊、多射擊。寫出有效的例子。輸出格式：Markdown、JSON、CSV、XML。模板設計模式。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: 第 1 部分：快速工程基礎
course:
  id: 019c9619-aa04-7004-b004-aa0400000004
  title: 即時工程大師班：向人工智慧發出命令的藝術
  slug: prompt-engineering-masterclass
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 人工智慧與機器學習 — 第 2 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 3 課：少樣本、零樣本和輸出</tspan>
      <tspan x="60" dy="42">格式化</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">即時工程大師班：向人工智慧發出命令的藝術</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：快速工程基礎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

在前兩課中，您學習如何編寫結構化提示和建立角色。本課程教授提示工程中的兩種**最強大的**技術：**給出示例**（少量）和**格式化**輸出。

> **黃金法則：**人工智慧會**模仿**你給的例子。給出好的例子=好的輸出。給出不好的例子=不好的輸出。

---

## 1. 零樣本、單樣本、少樣本 — 有何不同？

### 1.1 定義

|工程|範例數量 |何時使用 |
|--------|---------|-------------|
| **零射擊** | 0 個例子 |簡單的任務，AI 已經「知道」了 |
| **一擊** | 1 個範例 |需要格式/風格定位 |
| **少射** | 2-5 個例子 |需要高一致性、複雜的任務|
| **多次射擊** | 10+ 範例 |非常具體的任務，奇怪的模式|

### 1.2 舉例比較

**問題：** 將評論句子的情緒分類

**零射擊：**
```
Phân loại sentiment: "Sản phẩm rất tốt, giao hàng nhanh!"
→ Output: Positive (thường đúng — task phổ biến)
```

**一擊：**
```
Phân loại sentiment (Positive / Negative / Neutral):

Ví dụ: "Hàng đẹp, ship nhanh" → Positive

Giờ phân loại: "Sản phẩm tạm được nhưng giao chậm"
→ Output: Neutral ← chính xác hơn vì có ví dụ!
```

**少量射擊：**
```
Phân loại sentiment (Positive / Negative / Neutral):

Ví dụ 1: "Hàng đẹp, ship nhanh" → Positive
Ví dụ 2: "Sản phẩm lỗi, không đổi được" → Negative
Ví dụ 3: "Bình thường, không có gì đặc biệt" → Neutral

Giờ phân loại: "Chất lượng ổn nhưng đóng gói sơ sài"
→ Output: Neutral ← rất chính xác!
```

### 1.3 為什麼Few-Shot有效？

人工智慧從範例中學習**模式**：

```
Ví dụ → AI nhận ra:
- Input format: "câu review" → Output format: "label"
- Logic: khen = Positive, chê = Negative, trung tính = Neutral
- Edge case: khen + chê = Neutral (không phải random)
```

**不需要解釋規則**－只要**夠好的例子**！

> **💡 練習 1.1：** 寫一些提示（3 個範例）：將電子郵件分為 3 類： `Inquiry`, `Complaint`, `Thank You`。使用 5 封真實電子郵件進行測試。

---

## 2. 寫出有效的少樣本範例

### 2.1 範例選擇規則

|規則| ❌ 錯 | ✅ 是的 |
|--------|--------|--------|
| **品種** | 3個同類型的例子 | 3 個不同類型的例子（涵蓋邊緣情況）|
| **代表** |這個例子太簡單了 |模稜兩可的例子|
| **一致** |每個範例的格式都不同 |每個範例的格式**相同** |
| **現實** |虛構的例子|真實資料範例 |

### 2.2 範例：從文字中擷取訊息

**❌ 少數鏡頭不好**（例如太簡單，格式不一致）：

```
Extract thông tin:

"Tôi là Minh, 25 tuổi" → Tên: Minh, Tuổi: 25
"An, sinh năm 2000" → An, 24 tuổi
"Hoa, 30" → Hoa

Input: "Nguyễn Văn Bình, 35 tuổi, ở Hà Nội"
```

**✅ 少鏡頭好**（多樣性、格式一致、邊緣情況）：

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

### 2.3 Few-Shot 模板

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

> **💡練習 2：** 寫幾個提示：將越南文章總結為 **1 句話**。舉3個例子（1篇短文，1篇長文，1篇主題較多的文章）。使用 vnexpress.net 的 3 篇真實文章進行了測試。

---

## 3. 輸出格式－強制 AI 以正確的格式回答

### 3.1 為什麼需要格式化？

當在自動化管道中使用 AI（API 呼叫程式碼）時，輸出需要是可解析的。如果人工智慧返回自由文本，程式碼就會被破壞。

```python
# ❌ Free-text → không parse được
response = "Theo tôi, giá khoảng 500 nghìn đến 1 triệu, tùy..."

# ✅ JSON → parse ngay
response = '{"min_price": 500000, "max_price": 1000000, "currency": "VND"}'
import json
data = json.loads(response)  # Dùng ngay!
```

### 3.2 流行格式

**JSON — 最流行：**
```
Trả lời bằng JSON với schema sau:
{
  "sentiment": "positive" | "negative" | "neutral",
  "confidence": 0.0-1.0,
  "key_phrases": ["phrase1", "phrase2"]
}

Chỉ trả JSON, không giải thích thêm.
```

**Markdown 表 — 視覺效果：**
```
Trả lời bằng bảng markdown:

| Sản phẩm | Giá (VNĐ) | Rating | Ghi chú |
|----------|-----------|--------|---------|
| ...      | ...       | ...    | ...     |
```

**編號清單 - 逐步：**
```
Trả lời theo format:

1. **[Bước]:** [mô tả ngắn]
   - Chi tiết: [giải thích]
   - Ví dụ: [code hoặc ví dụ]

2. **[Bước]:** ...
```

**XML/標籤 — 對於克勞德：**
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

### 3.3 Tips格式100%可靠

|提示|範例|
|-----|--------|
| **明確說明「只需支付X」** | “僅返回 JSON，未添加任何解釋”|
| **對於架構/模板** |給定JSON結構，AI填充值|
| **使用分隔符號** | `---BEGIN---` … `---END---` |
| **少鏡頭格式** |給出 2-3 個正確輸出格式的範例 |
| **重複說明** |重複提示末端的格式 |

### 3.4 實際範例：API 回應格式化程序

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

> **💡練習 3：** 建立一個簡短的提示以從招募段落中提取資訊： `{"company", "position", "salary_range", "requirements": [...], "location"}`。使用 3 個真實的 JD 進行測試。

---

## 4. 組合：Few-Shot + Format =“模板模式”

### 4.1 模板模式

當你需要AI**總是按照固定模板回答**時，結合few-shot + format：

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

### 4.2 何時使用什麼？

|情況|工程|
|------------|---------|
|熱門任務，AI 早已知曉 |零射擊|
|需要正確的具體格式 |零射擊+格式化指令|
|任務有特殊邏輯 |少樣本（3-5 個範例）|
|需要格式+邏輯|少鏡頭+模板模式|
|極高的一致性 |多鏡頭（10+）+嚴格格式|

---

## 5.練習：4個實用提示模板

### 範本 1：資料擷取器
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

### 範本 2：內容重寫器
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

### 範本 3：會議紀錄
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

### 範本 4：程式碼文件管理器
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

> **💡練習5：** 選擇上面的2個模板，適應你自己的用例，認真測試每個模板的5個輸入。記錄準確率。

---

## 總結

|概念 |記住|
|--------|--------|
| **零射擊** | 0 個範例 — 對於人工智慧已經「知道」的任務 |
| **少射** | 2-5 個範例 — 適用於需要一致性的任務 |
| **好例子** |多樣化+一致的格式+有邊緣情況|
| **輸出格式** | JSON、Markdown、XML — 用於自動化管道 |
| **模板模式** |少鏡頭 + 格式 = 極度穩定的輸出 |

## 一般練習

1. ✅ 完成小練習（1.1,2,3,5）
2. **提示範本庫：** 建立一個文件，儲存5個喜歡的提示範本。每個範本都說明：用例、範例、預期輸出格式。
3. **準確率基準：** 選擇 1 個任務，建立 20 個測試案例，比較零樣本、3 樣本和 5 樣本 → 每種類型的準確率百分比。
4. **JSON可靠性測試：**寫一個提示要求JSON輸出，呼叫API 10次 → JSON有效幾次？如果出現以下情況，請嘗試改進提示： < 100%.

> **下一篇文章：** 思維鏈（CoT）－一種迫使人工智慧在回答之前「一步一步思考」的技術，顯著提高複雜問題的準確性。
