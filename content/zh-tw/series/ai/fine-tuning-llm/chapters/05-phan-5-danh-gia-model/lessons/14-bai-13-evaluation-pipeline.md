---
id: 019c9619-dd13-7013-e013-dd1300000013
title: 第 13 課：評估流程 — 測試像「Pro」這樣的微調模型
slug: bai-13-evaluation-pipeline
description: 建立完整的評估管道：黃金測試集設計、自動化基準測試、回歸測試、CI/CD、A/B 測試、災難性遺忘檢測、紅隊。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 12
section_title: 第 5 部分：模型評估 — 方法與指標
course:
  id: 019c9619-aa03-7003-b003-aa0300000003
  title: 微調 LLM：AI 調優的藝術
  slug: fine-tuning-llm
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8269" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8269)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1039" cy="287" r="22" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="978" cy="286" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="917" cy="285" r="36" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="856" cy="284" r="13" fill="#818cf8" opacity="0.13"/>
    <circle cx="795" cy="283" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="197" x2="1100" y2="277" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="227" x2="1050" y2="297" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1024.712812921102,181 1024.712812921102,213 997,229 969.287187078898,213 969.287187078898,181 997,165" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🧠 人工智慧與機器學習 — 第 12 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 13 課：評估流程 — 測試</tspan>
      <tspan x="60" dy="42">像“Pro”一樣的微調模型</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">微調 LLM：AI 調優的藝術</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：模型評估 — 方法與指標</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

評估不是「一次性運行」——它是一個**連續的管道**。本文建構了一個端到端的評估系統。

---

## 1. 多層評估

```
Layer 1: Automated Metrics (ROUGE, BERTScore)
  → Chạy mỗi training iteration
  → Fast, reproducible

Layer 2: LLM-as-Judge
  → Chạy mỗi version release candidate
  → Quality, relevance, format

Layer 3: Golden Test Set
  → 50+ curated test cases
  → Domain-specific validation

Layer 4: Catastrophic Forgetting Check
  → Test model vẫn giỏi tasks chung
  → Không "quên" kiến thức cũ

Layer 5: Red Teaming
  → Adversarial testing
  → Safety, edge cases, prompt injection
```

## 2. 災難性遺忘偵測

```python
GENERAL_KNOWLEDGE_TESTS = [
    {"q": "Thủ đô Việt Nam là gì?", "a": "Hà Nội"},
    {"q": "1 + 1 = ?", "a": "2"},
    {"q": "Ai viết Romeo and Juliet?", "a": "Shakespeare"},
]

def check_forgetting(model, threshold=0.8):
    correct = 0
    for test in GENERAL_KNOWLEDGE_TESTS:
        response = call_model(model, test["q"])
        if test["a"].lower() in response.lower():
            correct += 1
    score = correct / len(GENERAL_KNOWLEDGE_TESTS)
    if score < threshold:
        print(f"⚠️ CATASTROPHIC FORGETTING DETECTED: {score:.0%}")
    return score
```

## 3. 用於模型評估的 CI/CD

```yaml
# .github/workflows/model-eval.yml
on:
  push:
    paths: ['training_data/**']
jobs:
  evaluate:
    runs-on: ubuntu-latest
    steps:
      - run: python eval/run_metrics.py
      - run: python eval/run_llm_judge.py
      - run: python eval/check_forgetting.py
      - run: python eval/generate_report.py
```

---

## 總結

- 5層評估：指標→LLM法官→黃金組→遺忘→紅隊
- 災難性遺忘：檢查模型是否「忘記」常識
- CI/CD評估：資料變化時自動運行
- 紅隊：在生產前測試對抗性輸入

## 練習

1. 為您的模型建立 5 層評估管道
2. 創建災難性遺忘測試套件（20+一般問題）
3.設計紅隊場景（10+對抗性提示）
4. 撰寫一份比較基礎與微調的評估報告

