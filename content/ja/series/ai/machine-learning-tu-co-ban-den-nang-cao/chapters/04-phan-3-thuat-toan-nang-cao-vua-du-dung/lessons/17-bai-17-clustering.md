---
id: 019d8b39-bb17-7017-c017-ee1700000017
title: 'レッスン 17: クラスタリング (K 平均法、DBSCAN、階層型)'
slug: bai-17-clustering
description: ラベルがない場合の顧客セグメンテーションとデータ構造検出のための教師なし学習。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 16
section_title: 'パート 3: 使用するのに十分な高度なアルゴリズム'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: '機械学習: 基本から高度まで'
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4140" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4140)"/>

  <!-- Decorations -->
  <g>
    <circle cx="980" cy="230" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="860" cy="210" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="740" cy="190" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="620" cy="170" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1000" cy="150" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="190" x2="1100" y2="270" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="220" x2="1050" y2="290" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1011.650635094611,177.5 1011.650635094611,202.5 990,215 968.349364905389,202.5 968.349364905389,177.5 990,165" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 AI と ML — レッスン 16</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 17: クラスタリング (K 平均法、DBSCAN、</tspan>
      <tspan x="60" dy="42">階層型)</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">機械学習: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: 使用するのに十分な高度なアルゴリズム</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

常にラベルがあるとは限りません。クラスタリングは、ラベルのないデータ内の隠れた構造を見つけるのに役立つ一連の手法です。実際には、顧客のセグメント化、行動のグループ化、データ検出によく使用されます。

## レッスンの目標

- クラスタリングが教師あり学習とどのように異なるかを理解します。
- 基本レベルで K 平均法の使用方法を理解します。
- クラスタリング評価の限界を理解する。

## K 平均法はどのように機能しますか?

1. クラスターの数 k を選択します。
2. 各点を最も近いクラスター中心に割り当てます。
3. クラスター センターを再度更新します。
4. 安定するまで繰り返します。

## 適切な実際的な問題

- 購買行動に応じて顧客をグループ化します。
- 埋め込みにより投稿やユーザーをグループ化します。
- ビジネス チームが異なる行動をとるためのセグメントを作成します。

## クラスターの数を選択するにはどうすればよいですか?

絶対的な答えはありません。エルボーメソッド、シルエットスコア、そして最も重要なビジネス解釈を参照できます。

## よくある間違い

- 生成されたクラスターは常に自然の真実であると考えてください。
- チャートが見栄えが良いという理由だけで k を選択します。
- クラスターのビジネス上の重要性をチェックしません。

## 練習問題を練習する

- データセットのセグメンテーションに対して K-Means を実行します。
- 各クラスターをビジネス言語で説明します。
- クラスターごとに異なるアクションを提案します。

## 完了基準

- [ ] ラベルを使用しないクラスタリングを理解します。
- [ ] スケーリングされたデータで K-Means を実行できます。
- [ ] ビジネスの観点からクラスターを解釈します。

## 段階的に練習する (上級)

1. クラスタリングの前に特徴を正規化します。
2. 複数の k 値を使用して K-Means を実行します。
3. シルエットスコアとビジネス解釈を使用して評価します。
4. 比較のために DBSCAN または Hierarchical を追加してみます。
5. ビジネス言語に従ってクラスターに名前を付けます。

## アーティファクトを送信する必要があります

- クラスタリングアルゴリズムの比較表。
- 各クラスターを説明するプロファイル (クラスター プロファイル)。
- 各クラスターの推奨アクションのリスト。

## セルフテストの質問

- クラスタリングに絶対的な正解がないのはなぜですか?
- DBSCAN が K-Means よりも有益なのはどのような場合ですか?
- クラスターがビジネスに役立つかどうかをどのように評価するか?
