---
id: 019c9619-dd01-7001-e001-dd0100000001
title: 第一課：什麼是微調？ — 景觀以及為什麼你還不需要它。
slug: bai-1-fine-tuning-la-gi
description: 在現代法學碩士背景下定義微調。預訓練 vs SFT vs RLHF/DPO。何時進行微調，何時不進行。決策架構：快速工程→RAG→微調。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 0
section_title: 第 1 部分：概述與策略 — 何時進行微調？
course:
  id: 019c9619-aa03-7003-b003-aa0300000003
  title: 微調 LLM：AI 調優的藝術
  slug: fine-tuning-llm
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4800" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4800)"/>

  <!-- Decorations -->
  <g>
    <circle cx="818" cy="264" r="26" fill="#fbbf24" opacity="0.09"/>
    <circle cx="1036" cy="82" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="754" cy="160" r="14" fill="#fbbf24" opacity="0.07"/>
    <circle cx="972" cy="238" r="8" fill="#fbbf24" opacity="0.11"/>
    <circle cx="690" cy="56" r="32" fill="#fbbf24" opacity="0.05"/>
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
    <line x1="600" y1="64" x2="1100" y2="144" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="94" x2="1050" y2="164" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1047.7749907475932,194.5 1047.7749907475932,233.5 1014,253 980.2250092524068,233.5 980.2250092524068,194.5 1014,175" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 人工智慧與機器學習 — 第 0 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第一課：什麼是微調？ — 风景 &</tspan>
      <tspan x="60" dy="42">為什麼你（還）需要它</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">微調 LLM：AI 調優的藝術</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：概述與策略 — 何時進行微調？</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

“微调”是人工智能领域最受关注的流行语之一，但也是最被滥用的技术。在进入代码之前，您需要了解：Fine-tuning 到底是什么，它在 AI 管道中的什么位置，以及**何时真正需要它**。

> ⚠️ **黃金法則**：80% 的時間你認為你需要微調，實際上即時工程或 RAG 就足夠了。微调是**最后的选择**，而不是第一。

---

## 1. LLM 的生命週期

在了解fine-tuning之前，我们先看看LLM是如何创建的：

```
┌──────────────────────────────────────────────────────────────────┐
│                    VÒNG ĐỜI MỘT LLM                             │
│                                                                  │
│  Phase 1: PRE-TRAINING                                          │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │ Huấn luyện trên TOÀN BỘ internet (~15 nghìn tỷ tokens)  │    │
│  │ → Học ngôn ngữ, kiến thức, lập luận chung               │    │
│  │ Cost: $10M–$100M+ | Time: Weeks–Months | GPUs: Hàng nghìn│    │
│  └─────────────────────────────────────────────────────────┘    │
│                         │                                       │
│                         ▼                                       │
│  Phase 2: SUPERVISED FINE-TUNING (SFT) ← Bạn đang ở đây        │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │ Huấn luyện thêm trên dataset nhỏ, chất lượng cao        │    │
│  │ → Dạy model cách tuân thủ instructions, format, style    │    │
│  │ Cost: $10–$10,000 | Time: Minutes–Hours | GPUs: 1–8      │    │
│  └─────────────────────────────────────────────────────────┘    │
│                         │                                       │
│                         ▼                                       │
│  Phase 3: ALIGNMENT (RLHF / DPO)                               │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │ Tinh chỉnh model theo preferences con người              │    │
│  │ → An toàn, helpful, honest                               │    │
│  │ Cost: $1,000–$50,000 | Cần human annotators              │    │
│  └─────────────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────────┘
```

### 底线

- **預訓練**：讓模型「閱讀」整個網路→知道一切但不知道如何回答
- **SFT（微調）**：教模型*如何*以您想要的格式/風格做出回應
- **RLHF/DPO**：完善模型以“正确”地响应人类

**當人們說「微調」時，通常指的是第二階段—SFT。 **

---

## 2. Fine-tuning 解決什麼問題？

### 2.1 行为与知识

這是決定是否需要微調的**最重要的**區別：

|问题 |类型 |解决方案 |
|--------|--------|------------|
|型号不知道贵公司的产品| **知识差距** |抹布|
|模型响应必须是越南语，具体 JSON 格式 | **行为差距** |微调|
|模型需要即時數據（股票價格、天氣）| **知識差距** | RAG / 工具使用 |
|模型未使用正確的行業術語| **行為差距** |微調|
|模特“话太多”，你需要简单回答 | **行为差距** |微调（或提示）|
|模型不知道最新的內部政策| **知識差距** |抹布|

### 2.2 具体例子

**❌无需微调：**
- “我希望聊天機器人了解公司的產品” → 使用 **RAG**
- “我希望模型能夠準確回答文件中的問題” → 使用 **RAG**
- “我需要一个模型来读取数据库并响应” → 使用**工具使用/代理**

**✅ 需要微调：**
- “模型應始終以具有特定模式的 JSON 進行回應” → **微調**
- 「模型需要使用自己的品牌基調，與預設的有很大不同」→ **微調**
- 「小模型（Flash/Mini）需要像大模型（Pro/4o）一樣執行」→ **微調**（蒸餾）
- “模型必須理解越南醫學術語” → **微調** + RAG

---

## 3. 決策架構：三步驟階梯

在微調之前，請依序完成 3 個步驟：

```
Bước 1: PROMPT ENGINEERING
├── Chi phí: $0 | Thời gian: Phút
├── Thử: System prompt tốt hơn, few-shot examples, chain-of-thought
├── Đủ tốt? → DỪNG ✅
└── Không đủ? → Bước 2

Bước 2: RAG (Retrieval-Augmented Generation)
├── Chi phí: $50–$500 setup | Thời gian: Ngày
├── Thử: Kết nối knowledge base, vector DB
├── Đủ tốt? → DỪNG ✅
└── Không đủ? → Bước 3

Bước 3: FINE-TUNING
├── Chi phí: $50–$10,000+ | Thời gian: Days–Weeks
├── Chuẩn bị data, train, evaluate, iterate
└── Đây là lựa chọn cuối cùng
```

### 微調前的檢查清單

- [ ] 嘗試過至少5個不同的系統提示版本？
- [ ] 嘗試過幾次提示（提示中 3-5 個範例）？
- [ ] 如果您需要新知識 → 嘗試過 RAG 嗎？
- [ ] 擁有至少 100 個高品質訓練資料範例？
- [ ] 是否有訓練+評估迭代的預算？
- [ ] 此型號是否有長期維護期？

---

## 4.微調方法

### 4.1 全面微調
- 更新**所有**模型權重
- 需要龐大的 GPU (A100 80GB+)
- 高成本、災難性遺忘風險
- 2025-2026 年實務中很少需要

### 4.2 透過 API 進行監督微調 (SFT)
- 使用Google/OpenAI API
- 無需GPU管理
- 快速、簡單、成本適中
- **這是最常用的方法**

### 4.3 LoRA / QLoRA（參數高效率）
- 僅更新權重的**小部分**（~0.1–1%）
- 可在消費級 GPU 上運作（RTX 3090、T4）
- 成本最低
- 需要更多技術知識

```
┌─────────────────────────────────────────────────┐
│           So sánh 3 phương pháp                  │
│                                                  │
│  Full FT    ████████████████████  $$$$$  🔥🔥🔥  │
│  SFT (API)  ██████████           $$     🔥       │
│  LoRA       ████                 $      🔥🔥     │
│                                                  │
│  ████ = Resources    $$$ = Cost    🔥 = Difficulty│
└─────────────────────────────────────────────────┘
```

---

## 5. 2025-2026 年景觀：誰提供微調？

|供應商|支援的型號 |定價模式|優點 |
|----------|--------------|----------------|------|
| **Google（Vertex AI）** | Gemini 2.0 閃存，專業版 |每個訓練令牌 |以基本模型推斷價格 |
| **開放人工智慧** | GPT-4o-迷你、GPT-4o |每個訓練令牌|生態系統龐大，易於使用|
| **人為** |尚未發布 SFT |不適用 |不適用於最終用戶 |
| **抱臉** |所有開源模型 |自架/AutoTrain |最靈活、最便宜|
| **攜手人工智慧** | LLaMA，米斯特拉爾，... |每個訓練令牌 |基礎設施管理|
| **不懶惰** | LLaMA，米斯特拉爾，... |免費（自架）|速度提高 2 倍，顯存更少 |

---

## 6. 快速示範：微調“Hello World”

享受最簡單的微調－使用 OpenAI API：

```python
from openai import OpenAI
import json

client = OpenAI()

# Step 1: Chuẩn bị dataset (tối thiểu ~10 examples cho demo)
training_data = [
    {"messages": [
        {"role": "system", "content": "Bạn là trợ lý hỗ trợ khách hàng của XDev."},
        {"role": "user", "content": "Giá dịch vụ thế nào?"},
        {"role": "assistant", "content": "Dạ, XDev có 3 gói: Starter (miễn phí), Pro ($29/tháng), Enterprise (liên hệ). Anh/chị quan tâm gói nào ạ? 😊"}
    ]},
    {"messages": [
        {"role": "system", "content": "Bạn là trợ lý hỗ trợ khách hàng của XDev."},
        {"role": "user", "content": "Làm sao liên hệ support?"},
        {"role": "assistant", "content": "Dạ, anh/chị có thể liên hệ qua: 📧 support@xdev.asia hoặc 💬 chat trực tiếp trên website. Team support online 9h-18h (GMT+7) các ngày trong tuần ạ!"}
    ]},
    # ... thêm 8+ examples nữa
]

# Step 2: Save thành JSONL file
with open("training_data.jsonl", "w") as f:
    for item in training_data:
        f.write(json.dumps(item, ensure_ascii=False) + "\n")

# Step 3: Upload file
file = client.files.create(
    file=open("training_data.jsonl", "rb"),
    purpose="fine-tune"
)

# Step 4: Tạo fine-tuning job
job = client.fine_tuning.jobs.create(
    training_file=file.id,
    model="gpt-4o-mini-2024-07-18",
    hyperparameters={"n_epochs": 3}
)

print(f"Job ID: {job.id}")
print(f"Status: {job.status}")  # → "validating_files" → "running" → "succeeded"
```

> 💡 **注意**：這只是一個示範流程。第 7 課和第 9 課將詳細介紹實際資料集。

---

## 課程總結

- **微調** = 教導模型如何**行為**，而不是教導**知識**
- **知識差距** → 使用 RAG | **行為差距** → 使用微調
- 始終執行 3 個步驟：快速工程 → RAG → 微調
- 3 種方法：完整 FT（罕見）|透過 API 進行 SFT（流行）| LoRA（節儉）
- Google Vertex AI + OpenAI 是 API 微調的兩個主要平台
- LoRA/QLoRA 自託管，成本最低

## 練習

1. 列出您工作中的 3 個人工智慧問題—將知識差距與行為差距進行分類
2. 對於每個問題，建議一個解決方案：提示工程、RAG 還是微調？
3. 為您感興趣的用例建立 10 個訓練範例（JSONL 格式）
4. 閱讀 OpenAI Cookbook 上的部落格文章“微調實用指南”
