---
id: 019d8b39-bb15-7015-c015-ee1500000015
title: 'レッスン 15: 60 分間のチャレンジ — 上級住宅価格'
slug: bai-15-challenge-house-prices
description: 'タイムボックス化されたチャレンジ: 完全なパイプラインを構築し、制御されたチューニング + 機能エンジニアリングでスコアを向上させます。'
duration_minutes: 120
is_free: true
video_url: null
sort_order: 14
section_title: 'パート 2: 業界標準のワークフロー'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: '機械学習: 基本から高度まで'
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6479" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6479)"/>

  <!-- Decorations -->
  <g>
    <circle cx="841" cy="173" r="24" fill="#34d399" opacity="0.08"/>
    <circle cx="1082" cy="134" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="823" cy="95" r="10" fill="#34d399" opacity="0.14"/>
    <circle cx="1064" cy="56" r="33" fill="#34d399" opacity="0.07"/>
    <circle cx="805" cy="277" r="26" fill="#34d399" opacity="0.1"/>
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
    <line x1="600" y1="243" x2="1100" y2="323" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="273" x2="1050" y2="343" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1075.9089653438086,224 1075.9089653438086,262 1043,281 1010.0910346561914,262 1010.0910346561914,224 1043,205" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🧠 AI と ML — レッスン 14</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 15: 60 分間のチャレンジ — 住宅価格</tspan>
      <tspan x="60" dy="42">高度な</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">機械学習: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: 業界標準のワークフロー</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

初めての複合チャレンジです。不動産の問題に​​戻りますが、パイプライン、欠落処理、機能エンジニアリング、相互検証、チューニングなど、より成熟したレベルで実行します。目標は、個別のスキルを完全なワークフローに統合することです。

## レッスンの目標

- 比較的完全な回帰チャレンジを完了します。
- 前処理、パイプライン、チューニングを同じフローで結合します。
- ミニ技術レポートのような明確な要約を作成します。

## チャレンジをリクエストする

ノートブックまたはトレーニング スクリプト、技術的な決定を説明するファイル、少なくとも 3 つのモデル実験を比較した表の 3 つの出力を提出する必要があります。

## 推奨されるルート

1. 単純なベースラインから始めます。
2. 欠損値とデータ型を確認します。
3. 標準パイプラインを作成します。
4. 相互検証を実行します。
5. いくつかの重要なパラメータを調整します。
6. 最適なモデルと未解決のエラーを分析します。

## 自分で答えなければならない質問

- 最も重要な機能はどれですか?
- 最大のエラーが発生するのはどのグループのハウスですか?
- 特徴量エンジニアリングを追加すると本当に改善されるのでしょうか?
- 現在のモデルは暫定的な推定値として使用するのに十分な信頼性がありますか?

## よくある間違い

- 長いノートを書きますが、明確な結論はありません。
- 多くのチューニングを行っていますが、古い結果が保存されていません。
- 一貫した指標を使用せず、感覚に基づいて評価します。

## 練習問題を練習する

- チャレンジは独立した提出物として実行してください。
- 列を含むテスト テーブルを作成します: モデル、前処理、CV スコア、メモ。
- 教訓セクションを約 10 行の長さで書きます。

## 完了基準

- [ ] エンドツーエンドで実行される完全なパイプラインを備えています。
- [ ] 構造化された実験比較があります。
- [ ] 最終モデルが選ばれた理由については明確な結論があります。

## 段階的に練習する (上級)

1. 準備、モデリング、要約の 3 つのフェーズで構成されるタイムボックスは 60 分です。
2. 明確な違いがある少なくとも 3 つの実験を計画します。
3. 各実験の仮定を完全に書き留めます。
4. メトリック + 安定性基準を使用して最終モデルを選択します。
5. 死後の文章: あと 2 時間あれば何をしますか?

## アーティファクトを送信する必要があります

- 実験追跡テーブルは少なくとも 3 行あります。
- クリーンなノートブック、最初から最後まで実行可能。
- 技術 + ビジネス形式の 1 ページの概要。

## セルフテストの質問

- 本当に漏れを制御できていますか?
- どのチューニングが最大のメリットをもたらしますか?
- 現在の結果はベータ版を出荷するのに十分ですか?
