---
id: 019c9619-dd05-7005-e005-dd0500000005
title: 第 5 課：資料清理與增強－從“垃圾”到“黃金”
slug: bai-5-data-cleaning-augmentation
description: 資料清理管道：重複資料刪除、篩選、品質評分。數據增強技術。處理不平衡和邊緣情況。代幣化深入研究。訓練/驗證/測試分割。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 4
section_title: 第 2 部分：資料準備 — 所有成功的基礎
course:
  id: 019c9619-aa03-7003-b003-aa0300000003
  title: 微調 LLM：AI 調優的藝術
  slug: fine-tuning-llm
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4627" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4627)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1044" cy="222" r="22" fill="#f472b6" opacity="0.07"/>
    <circle cx="988" cy="286" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="932" cy="90" r="36" fill="#f472b6" opacity="0.11"/>
    <circle cx="876" cy="154" r="28" fill="#f472b6" opacity="0.13"/>
    <circle cx="820" cy="218" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="162" x2="1100" y2="242" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="192" x2="1050" y2="262" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1044.0429399400243,193.5 1044.0429399400243,230.5 1012,249 979.9570600599758,230.5 979.9570600599758,193.5 1012,175" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🧠 人工智慧與機器學習 — 第 4 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 5 課：資料清理與增強 — 來自</tspan>
      <tspan x="60" dy="42">“垃圾”變成“黃金”</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">微調 LLM：AI 調優的藝術</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：資料準備 — 所有成功的基礎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

原始數據很少可以用於微調。本文建構了一個專業的**資料處理管道**。

---

## 1. 資料清洗管道

```python
class DataCleaner:
    def __init__(self):
        self.stats = {"total": 0, "removed": 0, "cleaned": 0}
    
    def clean(self, examples):
        results = []
        for ex in examples:
            self.stats["total"] += 1
            
            # Step 1: Remove duplicates
            if self.is_duplicate(ex): continue
            
            # Step 2: Filter too short/long
            if not self.valid_length(ex, min_tokens=20, max_tokens=4096): continue
            
            # Step 3: Quality scoring
            if self.quality_score(ex) < 0.7: continue
            
            # Step 4: Format validation
            ex = self.normalize_format(ex)
            
            results.append(ex)
            self.stats["cleaned"] += 1
        
        return results
```

## 2. 代幣化深入研究

```python
import tiktoken

enc = tiktoken.encoding_for_model("gpt-4o-mini")

def analyze_dataset(examples):
    token_counts = []
    for ex in examples:
        text = json.dumps(ex, ensure_ascii=False)
        tokens = len(enc.encode(text))
        token_counts.append(tokens)
    
    print(f"Total examples: {len(token_counts)}")
    print(f"Total tokens: {sum(token_counts):,}")
    print(f"Avg tokens/example: {sum(token_counts)/len(token_counts):.0f}")
    print(f"Training cost (3 epochs, $3/1M): ${sum(token_counts)*3*3/1_000_000:.2f}")
```

## 3. 資料增強

- **釋義**：重寫問題/答案，保持意義完整
- **語言混合**：新增英語-越南語混合的範例
- **邊緣情況**：為罕見情況建立範例
- **反面範例**：教模型“不回答什麼”

---

## 總結

- 資料清理管道：去重→過濾→品質評分→標準化
- 代幣化分析有助於計算準確的成本
- 增強可以增加多樣性，而無需收集更多
- 訓練/驗證/測試分割：80/10/10 或 90/5/5

## 練習

1. 為您的資料集建立資料清理管道
2. 分析代幣分佈－找出異常值
3. 從 5 個種子範例建立 20 個增強範例
4. 進行品質評分並刪除不良範例

