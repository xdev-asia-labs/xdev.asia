---
id: 019d8b39-bb19-7019-c019-ee1900000019
title: 'レッスン 19: 実際のシステムにおける異常検出'
slug: bai-19-anomaly-detection
description: Isolation Forest、One-Class SVM、および不正行為に対する警告ルール、ログ監視、品質管理を設計します。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 18
section_title: 'パート 3: 使用するのに十分な高度なアルゴリズム'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: '機械学習: 基本から高度まで'
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-85" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-85)"/>

  <!-- Decorations -->
  <g>
    <circle cx="711" cy="43" r="34" fill="#34d399" opacity="0.08"/>
    <circle cx="822" cy="134" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="933" cy="225" r="30" fill="#34d399" opacity="0.14"/>
    <circle cx="1044" cy="56" r="13" fill="#34d399" opacity="0.07"/>
    <circle cx="655" cy="147" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="153" x2="1100" y2="233" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="183" x2="1050" y2="253" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1027.2487113059642,189 1027.2487113059642,217 1003,231 978.7512886940357,217 978.7512886940357,189 1003,175" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🧠 AI と ML — レッスン 18</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 19: システムの異常検出</tspan>
      <tspan x="60" dy="42">本当に</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">機械学習: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: 使用するのに十分な高度なアルゴリズム</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

正のクラスが非常にまれであるため、標準的な分類をトレーニングするのに十分なラベルがほとんどないという問題があります。たとえば、不正行為、動作異常、センサー エラーの検出などです。その場合、異常検出は検討に値する方向です。

## レッスンの目標

- 異常検出と分類がどのように異なるかを理解します。
- Isolation Forest などの入門テクニックを理解します。
- ビジネスの状況における異常を評価する方法を知っています。

## 核となる直感

外れ値とは、残りのデータとは意味のある形で異なる値です。重要なのは、異なることが必ずしも悪いことではないということです。したがって、異常検出は常に運用コンテキストと結び付ける必要があります。

## 孤立の森

直感的なアイデア: ツリーをランダムに分割すると、外れ値がより早く分離されることがよくあります。点の分離が容易であればあるほど、それが異常である可能性が高くなります。

## モデルを評価する

限られたラベルのセットが必要になる場合があり、ビジネスの専門家と一緒に上位のアラームを確認し、誤ったアラームのコストと誤ったアラームを見逃した場合のコストを測定します。

## よくある間違い

- すべての異常値を重要な異常と呼びます。
- ドメインの専門家に確認されていません。
- 運用への影響を考慮せず、任意に閾値を使用します。

## 練習問題を練習する

- トランザクション データセットで Isolation Forest を実行します。
- 最も珍しい点トップ 20 を確認してください。
- コメントを書く: どの警告が妥当で、どの警告が誤報である可能性があるか。

## 完了基準

- [ ] 異常検出を理解するには、単に目で異常値を見つけるだけではありません。
- [ ] Isolation Forest のような基本モデルの使用方法を理解します。
- [ ] 評価を実際の運用コストに関連付けます。

## 段階的に練習する (上級)

1. 特定の問題における異常とは何かを明確に定義します。
2. いくつかのレベルの汚染で Isolation Forest を実行します。
3. 手動レビューにより上位の異常スコアを確認します。
4. 構成間の誤警報を比較します。
5. 実際の動作上の警告しきい値を提案します。

## アーティファクトを送信する必要があります

- 説明付きの上位異常のリスト。
- 誤検知の運用影響表。
- 提案された警告トリアージ手順。

## セルフテストの質問

- 統計的な外れ値とビジネスの異常の違いは何ですか?
- 状況に応じて汚染を調整する必要があるのはなぜですか?
- 異常レビューに人間参加者が必要になるのはどのような場合ですか?
