---
id: 019d8b39-bb07-7007-c007-ee0700000007
title: 'レッスン 7: ロジスティック回帰と分類の確率'
slug: bai-7-logistic-regression
description: ロジスティック回帰、シグモイド、決定境界、しきい値、および予測確率を適切に読み取る方法。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 6
section_title: 'パート 1: 教師あり学習の基礎'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: '機械学習: 基本から高度まで'
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8295" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8295)"/>

  <!-- Decorations -->
  <g>
    <circle cx="977" cy="61" r="20" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="854" cy="158" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="731" cy="255" r="32" fill="#a78bfa" opacity="0.08"/>
    <circle cx="608" cy="92" r="23" fill="#a78bfa" opacity="0.09"/>
    <circle cx="985" cy="189" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="71" x2="1100" y2="151" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="101" x2="1050" y2="171" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="943.5166604983954,108 943.5166604983954,134 921,147 898.4833395016046,134 898.4833395016046,108 921,95" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🧠 AI と ML — レッスン 6</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 7: ロジスティック回帰と確率</tspan>
      <tspan x="60" dy="42">分類</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">機械学習: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: 教師あり学習の基礎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

回帰は連続数値を予測しますが、分類はラベルを予測します。ロジスティック回帰は、シンプルで高速で説明が容易であり、実際にも非常に役立つため、最良の入門分類モデルです。

## レッスンの目標

- ロジスティック回帰が線形回帰とどのように異なるかを理解します。
- モデルの出力確率を読み取ります。
- しきい値を使用して確率を予測ラベルに変換する方法を理解します。

## 直線から確率へ

線形回帰では、負の無限大から正の無限大までの任意の値を生成できます。二値分類には 0 から 1 までの確率が必要です。ロジスティック回帰では、シグモイド関数を使用してこの問題を解決します。

$$
\sigma(z) = \frac{1}{1 + e^{-z}}
$$

$z = w_1x_1 + ... + w_nx_n + b$ です。

## しきい値は固定された真実ではありません

多くの新規ユーザーのデフォルトのしきい値は 0.5 です。これは、偽陽性と偽陰性のコストが等しい場合にのみ当てはまります。

たとえば、病気の予測では想起が優先されることがよくあります。顧客の離反により、離れようとしている顧客を逃すのではなく、冗長な電話を受け入れる可能性があります。

## コード例

~~~パイソン
sklearn.linear_model から LogisticRegression をインポート
sklearn.metricsインポートclassification_reportから

モデル = ロジスティック回帰(max_iter=1000)
model.fit(X_train, y_train)
proba = model.predict_proba(X_test)[:, 1]
preds = (proba >= 0.5).astype(int)

print(classification_report(y_test, preds))
~~~

## メリットとデメリット

利点: 迅速、ベースライン設定が簡単、説明が簡単。

欠点: クラス境界が非線形すぎる場合、特徴量エンジニアリングとスケールの影響を受けやすい場合は効果がありません。

## よくある間違い

- データがクラス外の場合にのみ精度を確認してください。
- 異なるしきい値をテストしないでください。
- エンコードまたはスケーリングのステップでリークが発生します。

## 練習問題を練習する

- チャーンまたはスパムの問題に対するロジスティック回帰をトレーニングします。
- しきい値 0.3、0.5、0.7 での結果を比較します。
- コメントを書きます: どのしきい値が問題に適しているか、およびその理由を説明します。

## 完了基準

- [ ] シグモイドの役割を説明します。
- [ ] 出力が予測ラベルと異なる確率を理解します。
- [ ] ビジネス目標に応じてしきい値を変更する方法を理解します。

## 段階的に練習する (上級)

1. わずかなクラスバイアスを伴うデータセット分類を使用します。
2. デフォルトの class_weight および Balanced を使用してロジスティック回帰をトレーニングします。
3. しきい値 0.3、0.5、0.7 で精度、再現率、F1 を比較します。
4. 精度と再現率のトレードオフを導きます。
5. 特定の製品シナリオに従ってしきい値を選択します。

## アーティファクトを送信する必要があります

- しきい値に応じたメトリック テーブル。
- 明確に注釈が付けられた FP/FN を含む混同マトリックス。
- シミュレーションのために PM に送信される 1 ページの説明。

## セルフテストの質問

- しきい値 0.5 が常に正しいとは限らないのはなぜですか?
- 精度よりも再現を優先する必要があるのはどのような場合ですか?
- ROC-AUC は高いが、ビジネス成果は依然として悪い。その理由は何でしょうか?
