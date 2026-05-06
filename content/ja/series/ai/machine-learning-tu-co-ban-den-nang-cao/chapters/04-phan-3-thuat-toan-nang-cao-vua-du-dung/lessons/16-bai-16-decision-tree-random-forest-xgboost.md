---
id: 019d8b39-bb16-7016-c016-ee1600000016
title: 'レッスン 16: デシジョン ツリー、ランダム フォレスト、XGBoost'
slug: bai-16-decision-tree-random-forest-xgboost
description: ツリーベースのモデルを比較し、機能の重要性、オーバーフィッティング制御、データに応じたモデルの選択方法を理解します。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 15
section_title: 'パート 3: 使用するのに十分な高度なアルゴリズム'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: '機械学習: 基本から高度まで'
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6500" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6500)"/>

  <!-- Decorations -->
  <g>
    <circle cx="961" cy="253" r="24" fill="#34d399" opacity="0.08"/>
    <circle cx="822" cy="154" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="683" cy="55" r="10" fill="#34d399" opacity="0.14"/>
    <circle cx="1044" cy="216" r="33" fill="#34d399" opacity="0.07"/>
    <circle cx="905" cy="117" r="26" fill="#34d399" opacity="0.1"/>
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
    <line x1="600" y1="103" x2="1100" y2="183" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="133" x2="1050" y2="203" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="985.9089653438086,134 985.9089653438086,172 953,191 920.0910346561914,172 920.0910346561914,134 953,115" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🧠 AI と ML — レッスン 15</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 16: デシジョン ツリー、ランダム フォレスト、</tspan>
      <tspan x="60" dy="42">XGブースト</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">機械学習: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: 使用するのに十分な高度なアルゴリズム</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

この時点で、線形モデルの基礎が整いました。この記事では、実際のパネル データ用の最も強力なアルゴリズム グループ、つまりデシジョン ツリー、ランダム フォレスト、およびブースティングを紹介します。

## レッスンの目標

- デシジョン ツリー、ランダム フォレスト、ブースティングの直感を理解します。
- 説明可能性、スピード、強度の間のトレードオフを理解します。
- テーブル データに適切なツリーベースのモデルを選択します。

## デシジョン ツリー

デシジョン ツリーは、年齢 > 35 または num_tickets > 3 などの質問によってデータを分割します。利点は、理解しやすく、特徴をスケーリングする必要がなく、非線形関係をキャプチャできることです。欠点は、ツリーが深すぎると過剰適合しやすいことです。

## ランダムフォレスト

ランダム フォレストは、一緒に投票する多数の決定木です。多くの場合、単一ツリーと比較して過剰適合が軽減され、表形式データの非常に強力なベースラインとなります。

## XGBoost とブースト

ブーストでは複数のツリーを順番にトレーニングします。新しいツリーはそれぞれ、前のツリーのエラーを修正することに重点を置いています。したがって、ブーストはリーダーボードでは非常に強力であることがよくありますが、検証が適切に制御されていない場合は簡単に悪用される可能性もあります。

## どのモデルをいつ使用するか?

- デシジョン ツリー: 直感的に学習するか、非常に説明しやすいモデルが必要です。
- ランダム フォレスト: 表形式データの強力なベースライン。
- XGBoost、LightGBM、CatBoost: パフォーマンスを真剣に最適化したい場合。

## よくある間違い

- 最初からパラメーターを調整しすぎています。
- 特徴の重要性を原因と結果の証拠として使用します。
- リークやエラー分析を表示せずにリーダーボードを信頼します。

## 練習問題を練習する

- 同じデータセットでロジスティック回帰、ランダム フォレスト、および XGBoost を比較します。
- 指標、トレーニング時間、説明可能性を記録します。
- 中小企業環境に最適なモデルを決定します。

## 完了基準

- [ ] バギングとブースティングの違いを説明します。
- [ ] ツリーベースのモデルが線形モデルよりも強力であることを認識します。
- [ ] 同じ問題について少なくとも 3 つのモデルを比較します。

## 段階的に練習する (上級)

1. 3 つのモデルを実行します: デシジョン ツリー、ランダム フォレスト、XGBoost。
2. 公平な比較のために、同じトレーニング/検証分割を維持します。
3. 各モデルのライトチューニング (2 ～ 3 つの主要パラメータ)。
4. メトリクス、トレーニング時間、解釈のしやすさを比較します。
5. データサイズに応じたモデル選択のガイドラインを作成します。

## アーティファクトを送信する必要があります

- 3 つのモデルのベンチマーク表。
- 機能重要度チャートには丁寧な注釈が付いています。
- 各プロジェクトのコンテキストに応じてモデルを選択するためのルール。

## セルフテストの質問

- エラー削減メカニズムの点で、バギングとブースティングはどのように異なりますか?
- ランダム フォレストが XGBoost よりも優れているのはどのような場合ですか?
- 特徴の重要性が原因と結果と同義ではないのはなぜですか?
