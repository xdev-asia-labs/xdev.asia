---
id: 019c9619-dd14-7014-e014-dd1400000014
title: 'レッスン 14: デプロイ — 微調整されたモデルを効果的に提供する'
slug: bai-14-deployment
description: >-
  Vertex AI エンドポイント、OpenAI API、セルフホスト型 (vLLM、TGI) にデプロイされます。 LoRA
  アダプターをマージします。マルチアダプター対応。推論のモニタリング。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 13
section_title: 'パート 6: 制作とベストプラクティス'
course:
  id: 019c9619-aa03-7003-b003-aa0300000003
  title: 'LLM の微調整: AI チューニングの技術'
  slug: fine-tuning-llm
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🧠 AI と ML — レッスン 13</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 14: 導入 — 微調整されたサービスを提供する</tspan>
      <tspan x="60" dy="42">効果的なモデル</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">LLM の微調整: AI チューニングの技術</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 6: 制作とベストプラクティス</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

ノートブックで実行される微調整されたモデル≠実稼働環境で実行されます。この記事では、展開戦略について説明します。

---

## 1. API ベースの導入 (最も簡単)

### 頂点 AI
```python
# Model đã deploy tự động sau tuning job
response = client.models.generate_content(
    model=tuned_model_name,
    contents="Production query here"
)
```

### OpenAI
```python
response = client.chat.completions.create(
    model="ft:gpt-4o-mini:org:name:id",
    messages=[{"role": "user", "content": "Production query"}]
)
```

## 2. セルフホスト型の展開

### LoRA をマージし、vLLM を使用してデプロイする
```bash
# Merge LoRA adapters into base model
python merge_adapters.py --base meta-llama/Llama-3-8B --adapter ./lora_output

# Serve with vLLM
python -m vllm.entrypoints.openai.api_server \
    --model ./merged_model \
    --host 0.0.0.0 --port 8000
```

## 3. モニタリング

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

## 概要

- API デプロイ: シンプル、Vertex AI または OpenAI
- セルフホスト型: vLLM または TGI、最初に LoRA をマージする必要があります
- マルチアダプター: 1 つの基本モデルから複数の微調整されたバリアントを提供します
- モニタリング: 遅延、コスト、品質の変動

## 演習

1. 微調整されたモデルをデプロイし、レイテンシーをテストします (ベースと FT)
2. 推論監視ダッシュボードの実装
3. 負荷テスト: 100 個の同時リクエスト
4. セットアップ品質ドリフト検出

