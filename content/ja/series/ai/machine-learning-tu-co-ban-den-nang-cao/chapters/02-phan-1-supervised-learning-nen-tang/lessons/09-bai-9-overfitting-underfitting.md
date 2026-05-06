---
id: 019d8b39-bb09-7009-c009-ee0900000009
title: 'レッスン 9: 過学習/過小学習とその修正方法'
slug: bai-9-overfitting-underfitting
description: 学習曲線、検証曲線、バイアス分散トレードオフ、体系的なモデル改善戦略。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 8
section_title: 'パート 1: 教師あり学習の基礎'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: '機械学習: 基本から高度まで'
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6534" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6534)"/>

  <!-- Decorations -->
  <g>
    <circle cx="780" cy="130" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="960" cy="250" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="640" cy="110" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="820" cy="230" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1000" cy="90" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="90" x2="1100" y2="170" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="120" x2="1050" y2="190" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1011.650635094611,177.5 1011.650635094611,202.5 990,215 968.349364905389,202.5 968.349364905389,177.5 990,165" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 AI と ML — レッスン 8</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 9: 過学習/過小学習とその方法</tspan>
      <tspan x="60" dy="42">編集する</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">機械学習: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: 教師あり学習の基礎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

ML を学ぶことは、単に成績を上げることだけではありません。トレーニング セットには強いが、新しいデータには弱いモデルは、実用化の準備ができていないモデルです。この記事は、非常に特殊な兆候で過学習と過小学習を特定するのに役立ちます。

## レッスンの目標

- 過剰適合と過小適合を区別します。
- トレーニング スコアと検証スコアを一緒に読み取る方法を理解します。
- モデルが正しく学習できなかった場合に対処するためのチェックリストがあります。

## アンダーフィッティングとは何ですか?

モデルが単純すぎる場合、または特徴が貧弱すぎる場合にアンダーフィッティングが発生し、トレーニング セットであっても信号を十分に学習できなくなります。

## 過学習とは何ですか?

モデルが実際の信号とトレーニング セットの固有のノイズの両方を学習すると、過学習が発生します。

典型的な兆候:

- トレインスコアは非常に高いです。
- 検証スコアが明らかに低い。
- スプリットを変更するたびに、結果は大きく変動します。

## 実用的な方法で対処する方法

アンダーフィッティングの場合: 便利な機能を追加し、より強力なモデルを使用し、反復アルゴリズムの場合はより長くトレーニングします。

過学習の場合: モデルの複雑さを軽減し、正則化を追加し、データを増加するか、相互検証を使用します。

## 学習曲線

学習曲線は、データを増やすとモデルが改善される可能性が高いことを示しています。これは推測よりも診断に適した方法です。

## よくある間違い

- 適切な検証が行われないまま、モデルの複雑さが絶えず増加します。
- 何度も実行して、最適な分割を選択します。
- テスト セットに基づいて機能を修正します。

## 練習問題を練習する

- 複雑さを増す 3 つのモデルをトレーニングします。
- トレーニング スコアと検証スコアを記録します。
- どのモデルが過小適合であるか、どのモデルが過適合であるか、どのモデルが最も合理的であるかの結論。

## 完了基準

- [ ] 2 つの概念を日常用語で説明します。
- [ ] トレーニングと検証の違いを読み取る方法を理解します。
- [ ] 各状況に対して少なくとも 2 つの解決策を提案します。

## 段階的に練習する (上級)

1. 複雑さを増しながら 3 つのモデルをトレーニングします。
2. 各モデルのトレーニング/検証スコアを収集します。
3. トレーニングデータの量に応じて学習曲線を描きます。
4. 正則化するか、モデルの深さを減らしてみます。
5. 編集前後の変更を記録します。

## アーティファクトを送信する必要があります

- 学習曲線グラフ。
・調整前後の比較表。
- 次のプロジェクトに適用されるオーバーフィッティング決定のチェックリスト。

## セルフテストの質問

- アンダーフィットとオーバーフィットを最もよく区別する兆候はどれですか?
- なぜデータが増えると過剰学習が減るのでしょうか?
- モデルの複雑さを軽減することが最も合理的な選択となるのはどのような場合ですか?
