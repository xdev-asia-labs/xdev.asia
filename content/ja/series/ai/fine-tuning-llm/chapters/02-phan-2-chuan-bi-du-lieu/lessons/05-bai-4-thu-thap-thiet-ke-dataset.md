---
id: 019c9619-dd04-7004-e004-dd0400000004
title: 'レッスン 4: 微調整のためのデータセットの収集と設計'
slug: bai-4-thu-thap-thiet-ke-dataset
description: >-
  データセットの種類: 指示に従い、会話、分類。標準の JSONL
  形式。ログ、ドキュメント、ユーザーのフィードバックからデータを収集します。合成データの生成。質と量。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 3
section_title: 'パート 2: データの準備 — すべての成功の基礎'
course:
  id: 019c9619-aa03-7003-b003-aa0300000003
  title: 'LLM の微調整: AI チューニングの技術'
  slug: fine-tuning-llm
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 AI と ML — レッスン 3</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 4: データセットの収集と設計</tspan>
      <tspan x="60" dy="42">微調整</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">LLM の微調整: AI チューニングの技術</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: データの準備 — すべての成功の基礎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

**「ガベージイン、ガベージアウト」** — 微調整に関しては、これがこれほど真実であることはありません。高品質のデータセットは 90% 成功します。

---

## 1. JSONL 標準データセット形式

### 1.1 指示に従う形式
```json
{"messages": [
  {"role": "system", "content": "Bạn là trợ lý y khoa tiếng Việt."},
  {"role": "user", "content": "Triệu chứng sốt xuất huyết?"},
  {"role": "assistant", "content": "Sốt xuất huyết dengue có các triệu chứng chính:\n1. Sốt cao đột ngột 39-40°C\n2. Đau đầu dữ dội..."}
]}
```

### 1.2 複数ターンの会話形式
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

## 2. データソース

### 2.1 本番ログから
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

### 2.2 合成データの生成
```python
def generate_synthetic_data(seed_examples, n=100):
    prompt = f"Given these examples, generate {n} similar but diverse examples..."
    # Dùng GPT-4o/Claude để generate training data cho model nhỏ hơn
```

---

## 3. どのくらいのデータ量があれば十分ですか?

|使用例 |最小 |おすすめ |素晴らしい |
|----------|----------|---------------|-----------|
|スタイル/トーンの変更 | 50 | 200 | 500+ |
|ドメイン固有 | 100 | 500 | 2,000以上 |
|分類 | 50/クラス | 200/クラス | 1,000+/クラス |
|複雑な推論 | 200 | 1,000 | 5,000以上 |

> 💡 **質 >> 量**: 100 の完璧な例 > 1,000 の平均的な例

---

## 概要

- メッセージ配列を含む JSONL 形式が最も一般的な標準です
- データソース: 生産ログ、手動作成、合成生成
- 質 > 量 — 最高の ROI を実現するデータに時間を投資します。
- 100 ～ 200 の高品質な例から始めます

## 演習

1. 選択したユースケースに合わせて 50 個のトレーニング例を作成します
2. 合成データの生成を試す — 手動と合成の品質を比較する
3. データセットを検証する: 形式をチェックし、エッジケースを処理する
4. トレイン (80%) / 検証 (10%) / テスト (10%) に分割します。

