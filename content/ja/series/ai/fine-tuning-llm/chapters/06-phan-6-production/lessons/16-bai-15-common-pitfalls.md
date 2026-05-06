---
id: 019c9619-dd15-7015-e015-dd1500000015
title: 'レッスン 15: よくある落とし穴とトラブルシューティング'
slug: bai-15-common-pitfalls
description: '微調整時のトップ 10 の間違い: 壊滅的な忘れ、過剰適合、データ漏洩、評価のギャップ。デバッグテクニック。回復戦略。'
duration_minutes: 120
is_free: true
video_url: null
sort_order: 14
section_title: 'パート 6: 制作とベストプラクティス'
course:
  id: 019c9619-aa03-7003-b003-aa0300000003
  title: 'LLM の微調整: AI チューニングの技術'
  slug: fine-tuning-llm
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6890" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6890)"/>

  <!-- Decorations -->
  <g>
    <circle cx="805" cy="225" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="1010" cy="30" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="715" cy="95" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="920" cy="160" r="33" fill="#fb923c" opacity="0.05"/>
    <circle cx="625" cy="225" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="115" x2="1100" y2="195" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="145" x2="1050" y2="215" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="990.9807621135332,150 990.9807621135332,180 965,195 939.0192378864668,180 939.0192378864668,150 965,135" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🧠 AI と ML — レッスン 14</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 15: よくある落とし穴とトラブルシューティング</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">LLM の微調整: AI チューニングの技術</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 6: 制作とベストプラクティス</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

微調整は簡単に始めることができますが、**間違いやすい**。この記事では、最も一般的な 10 の落とし穴とその修正方法について説明します。

---

## 落とし穴トップ 10

### 1. 壊滅的な忘却
**症状**: モデルは新しいタスクは得意ですが、古いタスクを「忘れて」しまいます
**修正**: 学習率を下げ、エポックを減らし、一般的な例をデータセットに追加します。

### 2. 過学習
**症状**: トレーニング損失は減少しますが、検証損失は増加します
**修正**: データの追加、正規化、早期停止、エポックの削減

### 3. データ漏洩
**症状**: 評価スコアは非常に高いが、製品品質は低い
**修正**: トレーニング/テストの間に重複がないことを確認し、一時的な分割を使用します。

### 4. データ品質が悪い
**症状**: 例が間違っているため、モデルは正しく「学習」しません。
**修正**: 手動レビューのランダムサンプル、品質スコアリングパイプライン

### 5. 間違った粒度
**症状**: タスクの微調整が広すぎる、または狭すぎる
**修正**: 特定の行動に焦点を当て、「すべて」を教えようとしないでください。

### 6. 評価が不十分
**症状**: 「良さそうです」が、具体的な指標がない
**修正**: 多層評価パイプライン (レッスン 13)

### 7. 基本モデルの機能を無視する
**症状**: うまく機能したベースモデルを微調整します
**修正**: 常に最初に基本モデルのベンチマークを実行します

### 8. エポックが多すぎます
**症状**: モデルの答えは「決まり文句」で、トレーニング例が繰り返されます。
**修正**: 損失検証を監視し、損失がプラトーになったら停止する

### 9. 驚きのコスト
**症状**: トレーニング/推論のコストが予想外に高くなる
**修正**: 最初にコストを計算し (レッスン 3)、予算アラートを設定します

### 10. バージョン管理なし
**症状**: 「どのモデルのバージョンが最適ですか?」 — わかりません
**修正**: バージョン管理データセット + モデル + 評価結果

---

## 概要

- 微調整は体系的でないと間違いが起こりやすい
- 微調整する前に必ずベースモデルのベンチマークを実行してください
- 多層評価によりほとんどの落とし穴を防ぎます
- すべてのバージョン管理: データ、モデル、構成、評価結果

## 演習

1. オーバーフィッティングを意図的に作成する (20 エポック) → 症状を観察する
2. 各トレーニング ジョブの飛行前チェックリストを作成する
3. モデルのバージョン管理システムを実装する
4. 遭遇した落とし穴 3 を文書化します (ある場合)

