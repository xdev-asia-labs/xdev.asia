---
id: 019d8b39-bb12-7012-c012-ee1200000012
title: 'レッスン 12: scikit-learn を使用したパイプラインと ColumnTransformer'
slug: bai-12-pipelines-columntransformer
description: 手動エラーに耐性があり、再利用性が高く、トレーニングでの漏洩のリスクを軽減するパイプラインを構築します。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 11
section_title: 'パート 2: 業界標準のワークフロー'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: '機械学習: 基本から高度まで'
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1947" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1947)"/>

  <!-- Decorations -->
  <g>
    <circle cx="910" cy="200" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="720" cy="170" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1030" cy="140" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="840" cy="110" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="650" cy="80" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="80" x2="1100" y2="160" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="110" x2="1050" y2="180" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="960.3108891324554,112.5 960.3108891324554,147.5 930,165 899.6891108675446,147.5 899.6891108675446,112.50000000000001 930,95" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 AI と ML — レッスン 11</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 12: パイプラインと ColumnTransformer を使用する</tspan>
      <tspan x="60" dy="42">scikit-learn</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">機械学習: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: 業界標準のワークフロー</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

ML プロジェクトが多くの前処理ステップから始まる場合、各ステップを手書きすると間違いが起こりやすくなります。 Pipeline と ColumnTransformer を使用すると、すべての前処理とモデルを 1 つの統合フローに結合でき、再現とデバッグが容易になり、リークのリスクを軽減できます。

## レッスンの目標

- 個別処理ではなくパイプラインを使用する必要がある理由を理解します。
- 多くの列タイプのデータに対して ColumnTransformer を使用する方法を理解します。
- 一貫したトレーニング/予測ワークフローを構築します。

## パイプラインが重要なのはなぜですか?

パイプラインは、トレーニングとテストの両方でスケーラーをフィッティングしたり、新しいデータを予測するときに同じ変換を適用するのを忘れたり、モデルを保存したが前処理ロジックを忘れたりするなど、よくある間違いを回避するのに役立ちます。

## 標準構造

- 数値: 入力してからスケーリングします。
- カテゴリカル: インピュートしてからワンホット。
- ColumnTransformer を使用してマージします。
- 最後のステップで分類子またはリグレッサーを設定します。

## コード例

~~~パイソン
sklearn.compose からインポート ColumnTransformer
sklearn.pipeline からパイプラインをインポート
sklearn.preprocessing からインポート OneHotEncoder、StandardScaler
sklearn.impute から SimpleImputer をインポート
sklearn.ensemble からのインポート RandomForestClassifier
~~~

## 実際のメリット

- 相互検証が簡単です。
- joblib で保存/読み込みが簡単。
- バッチ推論を展開する際のエラーが少なくなります。

## よくある間違い

- 列リストの間違った使用。
- 新しい機能を追加しましたが、ColumnTransformer を更新するのを忘れていました。
- パイプラインの外で fit_transform を呼び出してから、パイプライン内で再度 Fit_transform を呼び出します。

## 練習問題を練習する

- チャーン データまたはハウジング データ用の完全なパイプラインを構築します。
- パイプラインを使用したコードと手動で処理されたコードを比較します。
- 5 行書いてください: パイプラインが最も削減に役立つのはどの種類のエラーですか?

## 完了基準

- [ ] Pipeline と ColumnTransformer を自分で構築できます。
- [ ] パイプラインが漏洩の防止にどのように役立つかを理解します。
- [ ] 完全なワークフローを保存/ロードできます。

## 段階的に練習する (上級)

1. 前処理 + モデルを含む完全なパイプラインを作成します。
2. 数値/カテゴリカルを 2 つの変換ブランチに分割します。
3. 同じパイプラインを使用して、新しいサンプルをトレーニング、検証、予測します。
4. joblib を使用してパイプラインを保存し、予測のために再ロードします。
5. 入力スキーマが壊れていないことを確認するための小さなテストを作成します。

## アーティファクトを送信する必要があります

- ファイルパイプラインは再利用できます。
- 1 レコードの最小予測スクリプト。
- パイプラインに基づいた漏洩防止のためのチェックリスト。

## セルフテストの質問

- 手動の Fit_transform はパイプラインよりもエラーが発生しやすいのはなぜですか?
- 新しい機能を追加する場合、ColumnTransformer の何を更新する必要がありますか?
- 導入時のパイプラインの最大のメリットは何ですか?
