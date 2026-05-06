---
id: 019c9619-dd02-7002-e002-dd0200000002
title: 第 2 課：微調與 RAG——2025 年最大的人工智慧爭論
slug: bai-2-fine-tuning-vs-rag
description: 微調與 RAG 的詳細比較：知識差距與行為差距。實用決策清單。混合方法。實際案例研究：當 RAG 獲勝時，當 Fine-tuning 獲勝時。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 1
section_title: 第 1 部分：概述與策略 — 何時進行微調？
course:
  id: 019c9619-aa03-7003-b003-aa0300000003
  title: 微調 LLM：AI 調優的藝術
  slug: fine-tuning-llm
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9312" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9312)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1051" cy="103" r="14" fill="#34d399" opacity="0.08"/>
    <circle cx="1002" cy="214" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="953" cy="65" r="20" fill="#34d399" opacity="0.14"/>
    <circle cx="904" cy="176" r="23" fill="#34d399" opacity="0.07"/>
    <circle cx="855" cy="287" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="173" x2="1100" y2="253" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="203" x2="1050" y2="273" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1047.2487113059642,209 1047.2487113059642,237 1023,251 998.7512886940357,237 998.7512886940357,209 1023,195" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🧠 人工智慧與機器學習 — 第 1 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 2 課：微調與 RAG — 競爭</tspan>
      <tspan x="60" dy="42">2025 年人工智慧最大討論</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">微調 LLM：AI 調優的藝術</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：概述與策略 — 何時進行微調？</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

「我該使用微調還是 RAG？」— 這是 2025-2026 年每次人工智慧聚會、論壇和訪談中被問到最多的問題。正確答案：**取決於您要解決的問題**。本文為您提供了一個正確回答的架構。

---

## 1. 診斷：知識差距與行為差距

### 核心原則

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│   Model KHÔNG BIẾT thông tin bạn cần?               │
│   → Knowledge Gap → RAG 📚                          │
│                                                     │
│   Model BIẾT nhưng KHÔNG LÀM ĐÚNG cách bạn muốn?   │
│   → Behavior Gap → Fine-tuning 🎯                   │
│                                                     │
│   Cả hai?                                           │
│   → Fine-tuning + RAG (Hybrid) 🔀                   │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## 2. 比較細節

### 2.1 綜合對比表

|標準|抹布|微調|
|----------|-----|-------------|
| **已解決** |知識差距（缺乏資訊）|行為差距（行為）|
| **資料可能會改變** |常規 → 強 RAG |變化不大→適合FT |
| **更新** |即時（更新資料庫）|慢（重新訓練模型）|
| **可解釋** |曹（來源引用）|低（黑盒子）|
| **設定成本** | 50-500 美元 | $50–$10,000+ |
| **維護成本** |低（僅更新資料）|高（需要時重新訓練）|
| **延遲** |較慢（檢索步驟較多）|更快（無需檢索）|
| **準確度** |取決於檢索品質 |取決於訓練資料 |
| **幻覺** |減少（帶來源）|還是有可能的（如果數據不好的話）|
| **大規模** |檢索成本/時間 |花費 1 次訓練課程 |

### 2.2 實際例子

```
Case 1: Chatbot hỗ trợ khách hàng cần biết chính sách công ty
→ Chính sách thay đổi thường xuyên
→ Cần cite nguồn cho customer
→ RAG THẮNG ✅

Case 2: Model phải trả lời bằng tiếng Việt, formal, format markdown cụ thể
→ Đây là "hành vi" không phải "kiến thức"
→ Prompt engineering không ổn định
→ FINE-TUNING THẮNG ✅

Case 3: Model y khoa cần biết thuật ngữ chuyên ngành VÀ access medical records
→ Thuật ngữ = behavior (fine-tune)
→ Medical records = knowledge (RAG)
→ HYBRID THẮNG ✅

Case 4: Model cần trả lời giá sản phẩm real-time
→ Giá thay đổi liên tục
→ Fine-tune sẽ bị outdated ngay lập tức
→ RAG (hoặc Tool Use) THẮNG ✅

Case 5: Model nhỏ (Flash/Mini) cần perform như model lớn (Pro/4o)
→ "Chắt lọc" kiến thức từ model lớn xuống nhỏ
→ Distillation = một dạng fine-tuning
→ FINE-TUNING THẮNG ✅
```

---

## 3. 決策流程圖

```
                    ┌─────────────────────┐
                    │  Bạn cần gì từ LLM? │
                    └──────────┬──────────┘
                               │
              ┌────────────────┼────────────────┐
              ▼                ▼                ▼
    ┌─────────────┐  ┌──────────────┐  ┌──────────────┐
    │ Kiến thức   │  │ Hành vi      │  │ Cả hai       │
    │ mới/riêng   │  │ /Style/Format│  │              │
    └──────┬──────┘  └──────┬───────┘  └──────┬───────┘
           │                │                  │
           ▼                ▼                  ▼
    ┌──────────┐    ┌─────────────┐    ┌──────────────┐
    │ Data thay│    │Prompt eng.  │    │ FT cho style │
    │ đổi nhiều│    │ đã thử?     │    │ + RAG cho    │
    │ không?   │    │             │    │   knowledge  │
    └─────┬────┘    └──────┬──────┘    └──────────────┘
     Yes  │  No        No  │  Yes
      │   │             │  │
      ▼   ▼             ▼  ▼
    ┌───┐┌────┐    ┌───┐┌─────────┐
    │RAG││Cả 2│    │Thử││Fine-tune│
    │   ││    │    │PE ││         │
    └───┘└────┘    └───┘└─────────┘
```

---

## 4. 混合法－兩全其美

### 4.1 混合架構

```python
# Fine-tune model cho: style, format, domain terminology
# RAG cho: factual data, recent information

class HybridAI:
    def __init__(self):
        self.model = "ft:gpt-4o-mini:xdev:customer-support:abc123"  # Fine-tuned
        self.rag = RAGPipeline(collection="company_docs")           # RAG
    
    def answer(self, question):
        # Step 1: Retrieve relevant context
        context = self.rag.search(question, top_k=3)
        
        # Step 2: Use fine-tuned model with context
        response = openai.chat.completions.create(
            model=self.model,  # Fine-tuned model → đúng style/format
            messages=[
                {"role": "system", "content": f"Context:\n{context}"},
                {"role": "user", "content": question}
            ]
        )
        return response.choices[0].message.content
```

### 4.2 何時使用混合？

- 需要**單獨的樣式和單獨的資料**
- 大型企業系統
- 專業領域（醫療、法律、金融）
- 預算足夠雙方

---

## 5. 實際個案研究

### 案例研究 1：客戶支援機器人 — RAG 獲勝

**問題**：聊天機器人需要回答有關 500 多種產品的問題，政策每週都會變化。

**嘗試Fine-tuning**：模型在舊政策下，每次更新都需要訓​​練→費用$200/次×4次/月=$800/月。

**嘗試 RAG**：5 分鐘內更新資料庫，檢索成本約為 0.001 美元/查詢。每月費用：~50 美元。

**結論**：RAG 便宜 16 倍，並且始終是最新的。

### 案例研究 2：程式碼審查機器人 — 微調獲勝

**問題**：模型需要根據團隊自己的編碼標準（命名約定、架構模式、非常具體的錯誤處理風格）來審查程式碼。

**嘗試提示**：系統提示太長（3000個令牌），仍然不一致。

**嘗試 RAG**：編碼標準文件沒有足夠的上下文，輸出太通用。

**嘗試微調**：200個範例（程式碼+審閱意見）→模型一致性95%+，系統提示從3000減少→200個令牌。

**結論**：微調將代幣成本降低了 93% + 提高了一致性。

### 案例研究 3：醫學問答 — 混合獲勝

**問題**：醫療聊天機器人需要理解專業術語並根據患者記錄做出回應。

**解決方案**：微調越南醫學術語+病患記錄的 RAG。

---

## 6. 成本比較：具體數字

### 場景：每天 10,000 次查詢，30 天

|方法|設定成本|每月推理|總計/月 |
|----------|----------|--------------------|------------|
| **基本款+提示** | 0 美元 | 〜$300 | **300 美元** |
| **抹布**| $200（1 次）| ~$400（檢索開銷）| **400 美元** |
| **微調** | $100–$500（1 次）| ~$250（較短的提示）| **250 美元** |
| **混合** | 500 美元 | ~$350 | **350 美元** |

> 💡 如果您可以縮短系統提示，那麼微調可以比基本模型**便宜**（更少的代幣=更少的錢）。但包括維護費用！

---

## 課程總結

- **知識差距** → RAG | **行為差距** → 微調| **兩者** → 混合
- 資料頻繁變化→RAG（即時更新）
- 風格/格式需高度一致性→微調
- 80% 的情況 → 快速工程或 RAG 就足夠了
- 混合方法是企業的業界標準
- 始終計算**總成本**（訓練+推理+維護）

## 練習

1. 分析貴公司的 5 個用例 → 將知識與行為差距進行分類
2. 為特定用例繪製決策流程圖
3. 計算估計成本：RAG 與針對該用例的微調
4. 實際系統的混合架構設計
