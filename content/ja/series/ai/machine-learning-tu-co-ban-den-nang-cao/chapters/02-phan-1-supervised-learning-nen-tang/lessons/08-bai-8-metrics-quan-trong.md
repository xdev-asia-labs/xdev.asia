---
id: 019d8b39-bb08-7008-c008-ee0800000008
title: 'レッスン 8: 重要な指標: 精度、精度、再現率、F1、AUC'
slug: bai-8-metrics-quan-trong
description: >-
  ビジネス上の問題に応じて適切な指標を選択してください。 ROC-AUC の代わりに PR-AUC
  を使用する場合。間違った目標に向けて最適化することは避けてください。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 7
section_title: 'パート 1: 教師あり学習の基礎'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: '機械学習: 基本から高度まで'
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-777" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-777)"/>

  <!-- Decorations -->
  <g>
    <circle cx="916" cy="178" r="14" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="732" cy="54" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="1048" cy="190" r="20" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="864" cy="66" r="8" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="680" cy="202" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="218" x2="1100" y2="298" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="248" x2="1050" y2="318" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="946.5788383248864,101.5 946.5788383248864,134.5 918,151 889.4211616751136,134.5 889.4211616751135,101.50000000000001 918,85" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 AI と ML — レッスン 7</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 8: 重要なメトリクス: 精度、</tspan>
      <tspan x="60" dy="42">精度、リコール、F1、AUC</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">機械学習: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: 教師あり学習の基礎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

モデルが優れているかどうかは、選択した指標に大きく依存します。同じモデルでも、精度の点では非常に優れているように見えても、再現性の点では非常に悪い場合があります。この記事は、習慣ではなく適切な問題に従ってメトリクスを選択するのに役立ちます。

## レッスンの目標

- 回帰と分類のための区別するメトリクス。
- 精度、精度、リコール、F1、ROC-AUC、およびそれらをいつ使用するかを理解します。
- 指標が製品目標に沿ったものでなければならない理由を理解します。

## 回帰メトリクス

- MAE: わかりやすく、平均絶対誤差を測定します。
- RMSE: 重大なエラーに対するペナルティは MAE よりも大きくなります。
- R 二乗: 説明された分散の量を測定しますが、それを神聖化するものではありません。

## 分類メトリック

- 精度: 全体的な正確な予測率。
- 精度: 陽性と予測されたサンプルのうち、実際に陽性であるサンプルの数。
- 思い出してください: 真陽性サンプルのうち、モデルはいくつをキャプチャできるでしょうか?
- F1 スコア: 精度と再現率のバランス。
- ROC-AUC: 2 つのクラス間の確率をランク付けする能力を測定します。

## コンテキストに応じたメトリクスの選択例

- 不正行為を検出: 高い再現率を優先して、見逃さないようにします。
- スパムメール: 通常のメールを誤ってブロックしないように、十分正確である必要があります。
- 顧客離れ: 多くの場合、リコールと維持アクションのビジネス価値を気にします。

## サンプルコード

~~~パイソン
sklearn.metrics からインポート activity_score、precision_score、recall_score、f1_score、roc_auc_score

print('精度:', precision_score(y_test, preds))
print('精度:', precision_score(y_test, preds))
print('Recall:', remember_score(y_test, preds))
print('F1:', f1_score(y_test, preds))
print('ROC-AUC:', roc_auc_score(y_test, proba))
~~~

## よくある間違い

- 非常に不均衡なデータには精度を使用します。
- テスト間で異なるメトリックを使用してモデルを比較します。
- 技術的な指標を最適化しますが、ビジネスコストは忘れてください。

## 練習問題を練習する

- 不均衡な分類問題を取り上げます。
- 混同行列と 5 つの主要な指標を計算します。
- 短い段落を書きます。もしあなたが PM だったら、どの指標を主要 KPI として選択しますか?

## 完了基準

- [ ] 少なくとも 3 つの異なる問題に対して適切なメトリックを選択します。
- [ ] 実際の例を用いて精度と再現率を説明します。
- [ ] 混乱せずに混同行列を読むことができます。

## 段階的に練習する (上級)

1. クラスの不均衡を伴うチャーンまたは詐欺の問題を選択します。
2. 5 つの指標を測定します: 精度、精度、再現率、F1、ROC-AUC。
3. クラス差データの比較のために PR-AUC を追加します。
4. FP/FN コストをシミュレーションし、予想コストを計算します。
5. 週次レポートに使用される主要な指標。

## アーティファクトを送信する必要があります

- メトリクステーブル + PR 曲線および ROC 曲線グラフ。
- シンプルなコスト マトリックス モデル。
- モニタリングのための主要な指標と二次的な指標の結論。

## セルフテストの質問

- クラス外のデータの精度が誤解を招くのはなぜですか?
- PR-AUC と ROC-AUC の意味の違いは何ですか?
- 複数のメトリクスを同時に監視する必要があるのはどのような場合ですか?
