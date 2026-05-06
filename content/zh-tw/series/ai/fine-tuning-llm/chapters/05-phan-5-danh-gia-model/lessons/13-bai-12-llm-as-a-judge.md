---
id: 019c9619-dd12-7012-e012-dd1200000012
title: 第 12 課：法學碩士作為法官和人工評估
slug: bai-12-llm-as-a-judge
description: 法學碩士評論法學碩士－設計評審提示、評分標準。成對比較。手動評估：黃金測試集、註釋指南、註釋者間協議。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 11
section_title: 第 5 部分：模型評估 — 方法與指標
course:
  id: 019c9619-aa03-7003-b003-aa0300000003
  title: 微調 LLM：AI 調優的藝術
  slug: fine-tuning-llm
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8436" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8436)"/>

  <!-- Decorations -->
  <g>
    <circle cx="867" cy="211" r="20" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="634" cy="98" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="901" cy="245" r="32" fill="#a78bfa" opacity="0.08"/>
    <circle cx="668" cy="132" r="23" fill="#a78bfa" opacity="0.09"/>
    <circle cx="935" cy="279" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="241" x2="1100" y2="321" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="271" x2="1050" y2="341" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1072.1769145362398,223 1072.1769145362398,259 1041,277 1009.8230854637602,259 1009.8230854637602,223 1041,205" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🧠 人工智慧與機器學習 — 第 11 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 12 課：法學碩士作為法官和人工評估</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">微調 LLM：AI 調優的藝術</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：模型評估 — 方法與指標</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

BLEU、ROUGE 衡量「表面」——但人工智慧品質最終必須由**人類**或**更聰明的人工智慧**來判斷。這是最強的兩種方法。

---

## 1. 法學碩士法官

### 1.1 逐點評分
```python
JUDGE_PROMPT = """Evaluate the response on a scale of 1-5:

**Task:** {task}
**Response:** {response}

Criteria:
- Accuracy (1-5): Thông tin chính xác không?
- Completeness (1-5): Trả lời đầy đủ không?
- Format (1-5): Đúng format yêu cầu không?
- Tone (1-5): Giọng điệu phù hợp không?

Output JSON: {"accuracy": X, "completeness": X, "format": X, "tone": X, "overall": X, "reasoning": "..."}
"""
```

### 1.2 兩兩比較
```python
PAIRWISE_PROMPT = """Compare Response A vs Response B:

Task: {task}
Response A: {response_a}
Response B: {response_b}

Which is better? Output: {"winner": "A" or "B" or "tie", "reasoning": "..."}
"""
```

## 2. 手動評估

### 黃金測試集
```python
golden_tests = [
    {
        "input": "Triệu chứng COVID-19?",
        "expected_elements": ["sốt", "ho", "mệt mỏi", "mất vị giác"],
        "expected_format": "bullet list",
        "rubric": "Phải mention ít nhất 3/4 triệu chứng chính"
    },
    # 50+ test cases
]
```

### 註釋者間協議
```python
from sklearn.metrics import cohen_kappa_score
kappa = cohen_kappa_score(annotator_1_scores, annotator_2_scores)
# kappa > 0.6 = acceptable agreement
```

---

## 總結

- 法學碩士擔任法官：快速、可擴展、與人類有良好的相關性
- 成對比較：強於逐點評分
- 人工評估：黃金標準，但昂貴且緩慢
- 黃金測試集：50 多個針對您的領域精心策劃的範例
- 結合 LLM-Judge + 人體抽樣 = 最佳實踐

## 練習

1. 為您的領域設計評判提示（5 個評分標準）
2. 運行成對比較：基礎與微調（20 個範例）
3. 建立包含 30 多個範例的黃金測試集
4. 衡量註釋者間的一致性（邀請2位審查者）

