---
id: 019d8b39-bb06-7006-c006-ee0600000006
title: 'レッスン 6: 線形回帰と直感的な勾配降下法'
slug: bai-6-linear-regression-gradient-descent
description: 回帰モデルのデバッグに十分な、損失関数、勾配降下法、正則化をわかりやすいレベルで理解します。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 5
section_title: 'パート 1: 教師あり学習の基礎'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: '機械学習: 基本から高度まで'
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3393" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3393)"/>

  <!-- Decorations -->
  <g>
    <circle cx="709" cy="117" r="32" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="818" cy="146" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="927" cy="175" r="26" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="1036" cy="204" r="23" fill="#818cf8" opacity="0.13"/>
    <circle cx="645" cy="233" r="20" fill="#818cf8" opacity="0.1"/>
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
    <line x1="600" y1="207" x2="1100" y2="287" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="237" x2="1050" y2="307" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="993.3730669589464,136 993.3730669589464,178 957,199 920.6269330410536,178 920.6269330410536,136 957,115" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🧠 AI と ML — レッスン 5</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 6: 線形回帰と直感</tspan>
      <tspan x="60" dy="42">勾配降下法</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">機械学習: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: 教師あり学習の基礎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

最初のモデルをトレーニングした後、次の疑問は、モデルがなぜ学習したのかということです。この記事は、損失を読み取り、結果をデバッグし、モデルがいつ正しく学習しているのか、それとも正しく学習していないのかを知るのに十分な直観的なレベルで線形回帰を理解するのに役立ちます。

## レッスンの目標

- 線形回帰が何を学ぼうとしているのかを理解します。
- 損失関数、勾配降下法、正則化を直感的に把握します。
- 線形回帰をいつ使用するか、いつ強制的に使用しないかを理解します。

## 線形回帰は何をしているのでしょうか?

エリアから住宅価格を予測したいと想像してください。線形モデルは、予測価格と実際の価格の間の誤差が最小限になるように、最適な直線を見つけようとします。

基本的な式:

$$
\hat{y} = w_1x_1 + w_2x_2 + ... + w_nx_n + b
$$

## 損失関数: モデルがどの程度悪いかを示す尺度

回帰では、よく知られた損失が MSE です。

$$
MSE = \frac{1}{n}\sum_{i=1}^{n}(y_i - \hat{y_i})^2
$$

その意味は非常に一般的で、予測モデルが現実から乖離すればするほど損失が大きくなります。二乗は、遠すぎるポイントに厳しいペナルティを与えるのに役立ちます。

## 勾配降下法: モデルがエラーを修正する方法

勾配降下法は反復プロセスです。予測、損失の計算、重みの増減方法を確認し、モデルがより安定するまで何度も更新します。

学習率が大きすぎると、モデルが前後に飛びやすくなり、収束しません。小さすぎると、モデルの学習が非常に遅くなります。

## 最小限のコード例

~~~パイソン
sklearn.linear_model からインポート LinearRegression、Ridge
sklearn.metricsインポートからmean_absolute_error
sklearn.model_selection からのインポート train_test_split

X_train、X_test、y_train、y_test = train_test_split(X、y、test_size=0.2、random_state=42)

モデル = LinearRegression()
model.fit(X_train, y_train)
preds = model.predict(X_test)

print('MAE:', means_absolute_error(y_test, preds))
print('インターセプト:', model.intercept_)
print('係数:', model.coef_)
~~~

## 過学習を防ぐための正則化

- リッジは多くの場合、よりスムーズな重み付けに役立ちます。
- なげなわは、一部のウェイトを 0 にプッシュでき、フィーチャを選択する場合に適しています。

## よくある間違い

- データの正規化は完了しましたが、同じ方法でテスト セットに適用されていません。
- 係数は因果関係であるという結論。
- テストエラーは見ずに、トレインスコアだけを見てください。

## 練習問題を練習する

- 同じデータセットで線形回帰とリッジを学習させます。
- 2 つのモデルの MAE を比較します。
- 短い 5 行で書いてください: Ridge が純粋な線形回帰よりも優れているのはどのような場合ですか?

## 完了基準

- [ ] 損失関数を簡単な言葉で説明します。
- [ ] 重みの更新に使用される勾配降下法を理解します。
- [ ] 実際の例で線形回帰とリッジを比較します。

## 段階的に練習する (上級)

1. 少なくとも 6 つの特徴を持つ回帰データセットを選択します。
2. 正則化を行わずに線形回帰を使用してベースラインをトレーニングします。
3. 5 つの異なるアルファ値を使用して Ridge をテストします。
4. 各アルファの MAE を比較するグラフを描きます。
5. コメントを書く: 大きすぎるアルファはバイアス/分散にどのように影響しますか?

## アーティファクトを送信する必要があります

- Notebook には Linear と Ridge の比較があります。
- MAE と RMSE の結果の表。
- 正則化の選択についての結論は 8 ～ 10 行です。

## セルフテストの質問

- MSE が MAE よりも外れ値に敏感なのはなぜですか?
- 学習率は収束速度にどのように影響しますか?
- 投げ縄がリッジよりも試してみる価値があるのはどのような場合ですか?
