---
id: 019c9619-dd16-7016-e016-dd1600000016
title: 'レッスン 16: Capstone — 実際のユースケースに合わせてモデルを微調整する'
slug: bai-16-capstone
description: >-
  プロジェクトの概要: ユースケースの選択 → データ収集 → Gemini + LoRA での微調整 → 比較評価 →
  本番環境へのデプロイ。エンドツーエンドのワークフロー。
duration_minutes: 240
is_free: true
video_url: null
sort_order: 15
section_title: 'パート 6: 制作とベストプラクティス'
course:
  id: 019c9619-aa03-7003-b003-aa0300000003
  title: 'LLM の微調整: AI チューニングの技術'
  slug: fine-tuning-llm
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-114" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-114)"/>

  <!-- Decorations -->
  <g>
    <circle cx="708" cy="194" r="26" fill="#fbbf24" opacity="0.09"/>
    <circle cx="816" cy="162" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="924" cy="130" r="14" fill="#fbbf24" opacity="0.07"/>
    <circle cx="1032" cy="98" r="8" fill="#fbbf24" opacity="0.11"/>
    <circle cx="640" cy="66" r="32" fill="#fbbf24" opacity="0.05"/>
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
    <line x1="600" y1="234" x2="1100" y2="314" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="264" x2="1050" y2="334" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1009.1147367097487,169.5 1009.1147367097487,198.5 984,213 958.8852632902513,198.5 958.8852632902513,169.5 984,155" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 AI と ML — レッスン 15</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 16: キャップストーン — 使用するモデルを微調整する</tspan>
      <tspan x="60" dy="42">実際の事例</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">LLM の微調整: AI チューニングの技術</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 6: 制作とベストプラクティス</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

概要は次のとおりです。**エンドツーエンドの微調整プロジェクト**を A → Z から構築します。

---

## 1. プロジェクト: ベトナム語コードレビューアシスタント

### アーキテクチャ
```
┌────────────────────────────────────────────────┐
│           FINE-TUNING PIPELINE                  │
│                                                │
│  Data Collection  → Data Cleaning → Training   │
│  (GitHub PRs,       (Dedup,         (Gemini    │
│   code reviews)     quality score)   Flash SFT)│
│                                                │
│  Evaluation → A/B Testing → Production Deploy  │
│  (ROUGE,      (Base vs FT,   (Vertex AI       │
│   LLM-Judge,   100 queries)   Endpoint)        │
│   Golden Set)                                  │
└────────────────────────────────────────────────┘
```

### コンポーネントのチェックリスト
- [ ] ユースケースを選択し、成功指標を定義します
- [ ] 200 以上のトレーニング例を収集
- [ ] データクリーニングと品質スコアリング
- [ ] Gemini Flash (Vertex AI) の微調整
- [ ] オープンソースでの微調整 (LoRA、比較用)
- [ ] マルチレイヤー評価パイプライン
- [ ] 壊滅的な物忘れチェック
- [ ] A/B テストのベースと微調整
- [ ] コスト分析と ROI レポート
- [ ] 実稼働エンドポイントをデプロイします
- [ ] 監視設定

## 2. ステップバイステップ

### フェーズ 1: データ (2 ～ 4 時間)
- 200 以上の例を収集
- クリーン、フォーマット、分割 (80/10/10)
- 品質レビューのランダムな 20 サンプル

### フェーズ 2: トレーニング (1 ～ 2 時間)
- Vertex AI で Gemini Flash を微調整
- LLaMA と LoRA の微調整 (比較)
- 3 つの実験: エポック 2、3、5

### フェーズ 3: 評価 (2 ～ 3 時間)
- 自動化されたメトリクス: ROUGE、BERTScore
- 裁判官としての LLM: 50 のテスト ケース
- ゴールデン テスト セット: 厳選された 30 ケース
- 壊滅的な物忘れ: 20 の一般的な質問

### フェーズ 4: 実稼働 (1 時間)
- 最適なモデルを導入する
- 監視設定
- コスト分析レポート

---

## 3. ベストプラクティスのまとめ

```
✅ DO:
- Start with prompt engineering (free!)
- Invest 70% time in data quality
- Use multi-layer evaluation
- Version control everything
- Calculate ROI before and after
- Monitor in production

❌ DON'T:
- Fine-tune without trying PE/RAG first
- Use raw, unclean data
- Evaluate by "vibes" — use metrics
- Ignore catastrophic forgetting
- Skip A/B testing
- Forget about ongoing maintenance cost
```

---

## 🎉 おめでとうございます!

**LLM の微調整: AI チューニングの技術** を完了しました。次のことができます。

1. **正しい決定**: 微調整 vs RAG vs 迅速なエンジニアリング
2. **3 つのプラットフォームで微調整**: Google Gemini、OpenAI、LoRA オープンソース
3. **科学的評価**: BLEU、ROUGE、BERTScore、LLM-as-Judge、人間評価
4. **コスト計算**: ROI 計算、予算計画、コスト最適化
5. **本番環境の展開**: モニタリング、A/B テスト、ドリフト検出

## 最後の演習

1. エンドツーエンドのキャップストーン プロジェクトを完了する
2. 特定の指標を含む評価レポート (3 ページ以上) を作成します。
3. モデルを公開するか、コミュニティと結果を共有します
4. 微調整する次のユースケースを特定する

