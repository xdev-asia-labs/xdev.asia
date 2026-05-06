---
id: 019d8b39-bb20-7020-c020-ee2000000020
title: 'レッスン 20: 基本的な時系列予測'
slug: bai-20-time-series-forecasting
description: ウォークフォワード検証、ラグ機能、ベースライン予測、および基本的な需要予測アプリケーション。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 19
section_title: 'パート 3: 使用するのに十分な高度なアルゴリズム'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: '機械学習: 基本から高度まで'
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5736" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5736)"/>

  <!-- Decorations -->
  <g>
    <circle cx="869" cy="77" r="32" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="638" cy="266" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="907" cy="195" r="26" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="676" cy="124" r="23" fill="#818cf8" opacity="0.13"/>
    <circle cx="945" cy="53" r="20" fill="#818cf8" opacity="0.1"/>
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
    <line x1="600" y1="87" x2="1100" y2="167" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="117" x2="1050" y2="187" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1023.3730669589464,166 1023.3730669589464,208 987,229 950.6269330410536,208 950.6269330410536,166 987,145" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🧠 AI と ML — レッスン 19</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 20: 基本的な時系列予測</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">機械学習: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: 使用するのに十分な高度なアルゴリズム</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

時間ベースの予測は、時間順序が核心であるという非常に重要な点で通常の表形式の ML とは異なります。データを分割したり機能を作成したりする方法を誤ると、実際にデプロイするときに役に立たない美しい結果を生み出して自分を騙してしまう可能性があります。

## レッスンの目標

- 予測と通常の回帰の違いを理解します。
- 基本的な時間フィーチャの作成方法を理解する。
- 時系列での漏洩を回避します。

## 時系列の特徴

- データは前の順序です。
- トレンド、季節、サイクルがある場合があります。
- 綿密な観察はしばしば相互に依存します。

## 人気の機能

- sales_t-1、sales_t-7 などの遅延機能。
- 7 日間、30 日間の平均などのローリング統計。
- 曜日、月、四半期、休日などのカレンダー機能。

## データを正しく分割する方法

通常の表形式のようにランダムにシャッフルしません。時間軸に沿って分割してみましょう。電車は過去、検証は現在に近く、テストは最新のセグメントです。

## ベースラインは非常に重要です

複雑なモデルを使用する前に、前期間の値、移動平均、先週の同じ期間などのベースラインと比較してください。

## よくある間違い

- ランダムな分割時系列。
- 将来を見据えたローリング機能を作成します。
- 単純なベースラインと比較しないでください。

## 練習問題を練習する

- ラグ機能とシンプルなツリーベースのモデルを使用して、毎日の収益を予測します。
- 前日の同じ期間のベースラインと比較します。
- モデルがベースラインを超えてさらに多くの信号を学習するときにコメントを記述します。

## 完了基準

- [ ] データを論理的に時間で分割します。
- [ ] 基本的なラグとローリング機能を作成します。
- [ ] モデルを時間ベースラインと比較します。

## 段階的に練習する (上級)

1. 時間軸上でトレーニング/検証/テストを構築します。
2. ラグ フィーチャとローリング ウィンドウ フィーチャを作成します。
3. ML モデルを単純なベースラインと比較します。
4. MAE、MAPE、段階ごとのエラーを評価します。
5. 重要な季節のマイルストーンでパフォーマンスをテストします。

## アーティファクトを送信する必要があります

- 時間の経過に伴う予測と実際のグラフ。
- 週または月ごとのエラー表。
- 季節変動についてコメントし、モデルの更新を提案します。

## セルフテストの質問

- ランダムな分割が予測に重大な誤差を引き起こすのはなぜですか?
- 同じ期間のベースラインがすぐに使用できるのはいつですか?
- 時系列で漏洩を起こしやすい特徴はどれですか?
