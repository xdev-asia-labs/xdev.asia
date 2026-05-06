---
id: 019d8b39-bb13-7013-c013-ee1300000013
title: 'レッスン 13: 相互検証とハイパーパラメータ調整'
slug: bai-13-cross-validation-tuning
description: >-
  KFold/StratifiedKFold、GridSearch/RandomizedSearch、およびより信頼性の高いモデルを選択するためのチューニング結果の読み方。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 12
section_title: 'パート 2: 業界標準のワークフロー'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: '機械学習: 基本から高度まで'
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7754" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7754)"/>

  <!-- Decorations -->
  <g>
    <circle cx="864" cy="262" r="12" fill="#f472b6" opacity="0.07"/>
    <circle cx="628" cy="166" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="892" cy="70" r="16" fill="#f472b6" opacity="0.11"/>
    <circle cx="656" cy="234" r="18" fill="#f472b6" opacity="0.13"/>
    <circle cx="920" cy="138" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="222" x2="1100" y2="302" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="252" x2="1050" y2="322" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1054.0429399400243,203.5 1054.0429399400243,240.5 1022,259 989.9570600599758,240.5 989.9570600599758,203.5 1022,185" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🧠 AI と ML — レッスン 12</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 13: 相互検証とハイパーパラメーター</tspan>
      <tspan x="60" dy="42">チューニング</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">機械学習: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: 業界標準のワークフロー</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

単一のトレーニングとテストの分割により、モデルの品質について誤った認識が与えられる可能性があります。相互検証はより安定した評価を提供し、ハイパーパラメータ調整はデータ分割の運に頼ることなく合理的な構成を見つけるのに役立ちます。

## レッスンの目標

- 単一の分裂を絶対に信じてはいけない理由を理解します。
- 相互検証を使用して、より安定したパフォーマンスを推定します。
- 制御されたプロセスに従ってハイパーパラメータを調整します。

## 相互検証とは何ですか?

データは多くの部分に分割されています。毎回、1 つのフォールドが検証を実行し、残りのフォールドがトレーニングを実行します。最終結果は複数の評価の平均です。

## ハイパーパラメータとは何ですか?

ハイパーパラメータは、max_ Depth、n_estimators、C、learning_rate など、トレーニング前に選択する値です。これらは、モデルがデータから自ら学習するパラメーターとは異なります。

## 実践的なチューニング

- 単純なベースラインから始めます。
- 最も重要度の低いハイパーパラメータを選択します。
- GridSearchCV または RandomizedSearchCV を使用します。
- フォールド間の平均スコアと標準偏差の両方を追跡します。

## サンプルコード

~~~パイソン
sklearn.model_selection からのインポート RandomizedSearchCV
sklearn.ensemble からのインポート RandomForestClassifier
~~~

## よくある間違い

- ベースラインがまだ安定していない状態でチューニングが広すぎる。
- テスト セットを使用してハイパーパラメータを調整します。
- 多くのテストを実行しますが、結果を記録しません。

## 練習問題を練習する

- 3 つのハイパーパラメータを使用したツリーベースのモデルの調整。
- チューニング前とチューニング後のスコアを比較します。
- コメントの記録: チューニングは本当に改善されましたか、それともほんの少ししか改善されませんでしたか?

## 完了基準

- [ ] 完全なパイプラインで相互検証を使用できます。
- [ ] チューニングに使用される検証と、最終評価に使用されるテストを区別します。
- [ ] 実験を体系的に記録します。

## 段階的に練習する (上級)

1. 標準的な分割でベースラインを実行します。
2. KFold または StratifiedKFold を 5 回実行します。
3. RandomizedSearchCV を使用し、重要なパラメータを 4 つ以下にしてチューニングします。
4. 構成間の平均スコアと標準スコアを比較します。
5. パフォーマンスと安定性に基づいて構成を最終決定します。

## アーティファクトを送信する必要があります

- スコア別の上位 10 構成の表。
- フォールド別のスコア分布図。
- 過剰検索を避けるためにチューニングを停止するためのルール。

## セルフテストの質問

- どのような場合に GridSearchCV よりも RandomizedSearchCV を優先する必要がありますか?
- 折り目間の標準偏差が高いとは何を意味しますか?
- テスト セットがチューニングに使用されないのはなぜですか?
