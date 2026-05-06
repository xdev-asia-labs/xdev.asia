---
id: 019c9619-dd14-7014-e014-dd1400000014
title: 第 14 課：部署 — 有效地服務微調模型
slug: bai-14-deployment
description: 部署在 Vertex AI 端點、OpenAI API、自架（vLLM、TGI）上。合併 LoRA 適配器。多適配器服務。監控推斷。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 13
section_title: 第 6 部分：生產和最佳實踐
course:
  id: 019c9619-aa03-7003-b003-aa0300000003
  title: 微調 LLM：AI 調優的藝術
  slug: fine-tuning-llm
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4781" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4781)"/>

  <!-- Decorations -->
  <g>
    <circle cx="684" cy="82" r="12" fill="#f472b6" opacity="0.07"/>
    <circle cx="768" cy="186" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="852" cy="30" r="16" fill="#f472b6" opacity="0.11"/>
    <circle cx="936" cy="134" r="18" fill="#f472b6" opacity="0.13"/>
    <circle cx="1020" cy="238" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="182" x2="1100" y2="262" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="212" x2="1050" y2="282" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="964.0429399400242,113.5 964.0429399400242,150.5 932,169 899.9570600599758,150.5 899.9570600599758,113.50000000000001 932,95" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🧠 人工智慧與機器學習 — 第 13 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 14 課：部署 — 服務微調</tspan>
      <tspan x="60" dy="42">有效模式</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">微調 LLM：AI 調優的藝術</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 6 部分：生產和最佳實踐</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

在筆記本中運行的微調模型≠在生產中運行。本文介紹部署策略。

---

## 1.基於API的部署（最簡單）

### 頂點人工智慧
```python
# Model đã deploy tự động sau tuning job
response = client.models.generate_content(
    model=tuned_model_name,
    contents="Production query here"
)
```

### 開放人工智慧
```python
response = client.chat.completions.create(
    model="ft:gpt-4o-mini:org:name:id",
    messages=[{"role": "user", "content": "Production query"}]
)
```

## 2. 自託管部署

### 將 LoRA + 部署與 vLLM 合併
```bash
# Merge LoRA adapters into base model
python merge_adapters.py --base meta-llama/Llama-3-8B --adapter ./lora_output

# Serve with vLLM
python -m vllm.entrypoints.openai.api_server \
    --model ./merged_model \
    --host 0.0.0.0 --port 8000
```

## 3. 監控

```python
# Track: latency, cost, quality drift
class InferenceMonitor:
    def __init__(self):
        self.metrics = []
    
    def log(self, query, response, latency, cost):
        self.metrics.append({
            "timestamp": time.time(),
            "latency_ms": latency,
            "cost_usd": cost,
            "response_length": len(response),
        })
```

---

## 總結

- API部署：簡單、Vertex AI或OpenAI
- 自架：vLLM或TGI，需先合併LoRA
- 多重適配器：從 1 個基本模型提供多個微調變體
- 監控：延遲、成本、品質漂移

## 練習

1. 部署微調模型並測試延遲（基礎 vs FT）
2. 實施推理監控儀表板
3.負載測試：100個並發請求
4. 設定質量漂移檢測

