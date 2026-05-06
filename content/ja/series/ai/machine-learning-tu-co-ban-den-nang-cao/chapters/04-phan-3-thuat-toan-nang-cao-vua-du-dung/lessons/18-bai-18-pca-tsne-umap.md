---
id: 019d8b39-bb18-7018-c018-ee1800000018
title: 'レッスン 18: 視覚化のための PCA、t-SNE、UMAP'
slug: bai-18-pca-tsne-umap
description: データの次元を削減してクラスターを理解し、異常を検出し、ダウンストリーム モデルのパフォーマンスを向上させます。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 17
section_title: 'パート 3: 使用するのに十分な高度なアルゴリズム'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: '機械学習: 基本から高度まで'
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1930" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1930)"/>

  <!-- Decorations -->
  <g>
    <circle cx="768" cy="274" r="16" fill="#fbbf24" opacity="0.09"/>
    <circle cx="936" cy="182" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="604" cy="90" r="24" fill="#fbbf24" opacity="0.07"/>
    <circle cx="772" cy="258" r="28" fill="#fbbf24" opacity="0.11"/>
    <circle cx="940" cy="166" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="214" x2="1100" y2="294" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="244" x2="1050" y2="314" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="989.1147367097487,149.5 989.1147367097487,178.5 964,193 938.8852632902513,178.5 938.8852632902513,149.5 964,135" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 AI と ML — レッスン 17</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 18: 視覚化のための PCA、t-SNE、UMAP</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">機械学習: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: 使用するのに十分な高度なアルゴリズム</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

データの次元が多すぎると、見にくく、描画しにくく、場合によってはモデル化も困難になります。 PCA、t-SNE、および UMAP はデータの次元を削減するのに役立ちますが、目的は異なります。

## レッスンの目標

- PCA を t-SNE および UMAP と区別します。
- いつ次元圧縮に使用するか、いつ視覚化に使用するかを理解します。
- 次元削減プロットの誤解を避けます。

## PCA

PCA は、データの分散を最も多く保持する新しい軸を見つけます。これは高速で線形な手法であり、説明が比較的簡単で、入力の次元を削減する場合に役立ちます。

## t-SNE と UMAP

t-SNE と UMAP は主に、高次元データの局所構造を視覚化するのに役立ちます。 UMAP は一般に高速で、埋め込みに非常に適しています。ローカル クラスターを視覚化するための堅牢な t-SNE。

## 解釈上の警告

次元削減後の 2D チャート上の距離は、元の空間の実際の距離を必ずしも反映するとは限りません。きれいなグラフを結論の強力すぎる証拠として使用しないでください。

## よくある間違い

- t-SNE または UMAP をよく確認せずにメイン機能の入力として使用する。
- 図を真のクラス境界として解釈します。
- 必要に応じて、PCA の前にデータをスケーリングしないでください。

## 練習問題を練習する

- PCA と t-SNE を同じデータセットで実行します。
- 両方の 2D 図を描きます。
- コメントを書く: どのツールが視覚化に適しているか、どのツールが前処理に適しているか。

## 完了基準

- [ ] PCA、t-SNE、UMAP の目的を区別します。
- [ ] 次元削減図を拡大解釈しないでください。
- [ ] 適切な目的に応じたツールの選択方法を知る。

## 段階的に練習する (上級)

1. 分散の 90% を保持したまま PCA を実行します。
2. 2D PCA を使用したデータの視覚化。
3. 同じ入力エンベディングで t-SNE と UMAP を実行します。
4. ランタイムとクラスターイメージの安定性の比較。
5. ダッシュボード閲覧者向けに説明的な警告を作成します。

## アーティファクトを送信する必要があります

- 3つのテクニックからなるビジュアルセット。
- 各テクニックの使用目的を比較した表。
- ユースケースに応じて寸法削減ツールを選択するための手順。

## セルフテストの質問

――PCAには再現性という点でどのようなメリットがあるのでしょうか？
- t-SNEがメイン機能として適さない理由は何ですか？
- UMAP が t-SNE よりも望ましいのはどのような場合ですか?
