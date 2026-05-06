---
id: 019c9619-dd05-7005-e005-dd0500000005
title: 'レッスン 5: データのクリーニングと拡張 — 「ゴミ」から「ゴールド」へ'
slug: bai-5-data-cleaning-augmentation
description: >-
  データ クリーニング パイプライン:
  重複除去、フィルタリング、品質スコアリング。データ拡張技術。不均衡や特殊なケースへの対処。トークン化の詳細。トレーニング/ヴァル/テストの分割。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 4
section_title: 'パート 2: データの準備 — すべての成功の基礎'
course:
  id: 019c9619-aa03-7003-b003-aa0300000003
  title: 'LLM の微調整: AI チューニングの技術'
  slug: fine-tuning-llm
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🧠 AI と ML — レッスン 4</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 5: データのクリーニングと拡張 — から</tspan>
      <tspan x="60" dy="42">「ジャンク」から「ゴールド」へ</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">LLM の微調整: AI チューニングの技術</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: データの準備 — すべての成功の基礎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

生データを微調整できる状態になることはほとんどありません。この記事では、プロフェッショナルな **データ処理パイプライン**を構築します。

---

## 1. データ クリーニング パイプライン

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

## 2. トークン化の詳細

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

## 3. データの拡張

- **言い換え**: 意味を保ったまま質問/回答を書き直します。
- **言語の混合**: 英語とベトナム語の混合の例を追加
- **特殊なケース**: まれな状況の例を作成します
- **否定的な例**: モデルに「答えてはいけないもの」を教える

---

## 概要

- データ クリーニング パイプライン: 重複排除 → フィルター → 品質スコア → 正規化
- トークン化分析は正確なコストの計算に役立ちます
- 拡張により、さらに収集する必要なく多様性が増加します
- トレーニング/ヴァル/テスト分割: 80/10/10 または 90/5/5

## 演習

1. データセットのデータ クリーニング パイプラインを構築する
2. トークンの分布を分析する — 外れ値を見つける
3. 5 つのシード サンプルから 20 の拡張サンプルを作成する
4. 品質スコアリングを実行し、不適切な例を削除する

