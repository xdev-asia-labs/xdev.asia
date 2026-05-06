---
id: 019c9619-dd04-7004-e004-dd0400000004
title: 第 4 課：收集和設計資料集以進行微調
slug: bai-4-thu-thap-thiet-ke-dataset
description: 資料集類型：指令遵循、對話、分類。標準 JSONL 格式。從日誌、文件、使用者回饋收集資料。合成數據生成。質與數量。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 3
section_title: 第 2 部分：資料準備 — 所有成功的基礎
course:
  id: 019c9619-aa03-7003-b003-aa0300000003
  title: 微調 LLM：AI 調優的藝術
  slug: fine-tuning-llm
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7528" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7528)"/>

  <!-- Decorations -->
  <g>
    <circle cx="872" cy="146" r="10" fill="#f87171" opacity="0.11"/>
    <circle cx="644" cy="98" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="916" cy="50" r="12" fill="#f87171" opacity="0.13"/>
    <circle cx="688" cy="262" r="28" fill="#f87171" opacity="0.09"/>
    <circle cx="960" cy="214" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="106" x2="1100" y2="186" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="136" x2="1050" y2="206" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1041.507041555162,185.5 1041.507041555162,226.5 1006,247 970.492958444838,226.5 970.492958444838,185.5 1006,165" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 人工智慧與機器學習 — 第 3 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 4 課：收集和設計資料集</tspan>
      <tspan x="60" dy="42">微調</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">微調 LLM：AI 調優的藝術</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：資料準備 — 所有成功的基礎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

**「垃圾輸入，垃圾輸出」** — 在微調方面，這一點最為真實。品質數據整合功率達到 90%。

---

## 1. JSONL 標準資料集格式

### 1.1 指令遵循格式
```json
{"messages": [
  {"role": "system", "content": "Bạn là trợ lý y khoa tiếng Việt."},
  {"role": "user", "content": "Triệu chứng sốt xuất huyết?"},
  {"role": "assistant", "content": "Sốt xuất huyết dengue có các triệu chứng chính:\n1. Sốt cao đột ngột 39-40°C\n2. Đau đầu dữ dội..."}
]}
```

### 1.2 多輪對話格式
```json
{"messages": [
  {"role": "system", "content": "..."},
  {"role": "user", "content": "Câu hỏi 1"},
  {"role": "assistant", "content": "Trả lời 1"},
  {"role": "user", "content": "Follow-up"},
  {"role": "assistant", "content": "Trả lời follow-up"}
]}
```

---

## 2.資料來源

### 2.1 來自生產日誌
```python
# Extract từ customer support logs
def extract_training_data(support_logs):
    training_data = []
    for log in support_logs:
        if log["customer_rating"] >= 4:  # Chỉ lấy conversations tốt
            training_data.append({
                "messages": [
                    {"role": "system", "content": SYSTEM_PROMPT},
                    {"role": "user", "content": log["customer_question"]},
                    {"role": "assistant", "content": log["agent_response"]}
                ]
            })
    return training_data
```

### 2.2 合成資料生成
```python
def generate_synthetic_data(seed_examples, n=100):
    prompt = f"Given these examples, generate {n} similar but diverse examples..."
    # Dùng GPT-4o/Claude để generate training data cho model nhỏ hơn
```

---

## 3.多少數據才夠？

|使用案例 |最低 |推薦|優秀|
|----------|--------|-------------|------------|
|風格/語氣變化| 50 | 50 200 | 200 500+ |
|特定領域 | 100 | 100 500 | 500 2,000+ |
|分類| 50人/班| 200人/班| 1,000+/班 |
|複雜推理| 200 | 200 1,000 | 5,000+ |

> 💡 **品質 >> 數量**：100 個完美範例 > 1,000 個平均範例

---

## 總結

- 帶有訊息數組的 JSONL 格式是最受歡迎的標準
- 資料來源：生產日誌、手動建立、合成生成
- 品質 > 數量 — 將時間投入到具有最高投資報酬率的數據上
- 從 100–200 個高品質範例開始

## 練習

1. 為您選擇的用例建立 50 個訓練範例
2. 嘗試產生合成數據－比較手動與合成的質量
3. 驗證資料集：檢查格式，處理邊緣狀況
4. 分為訓練（80%）/驗證（10%）/測試（10%）

