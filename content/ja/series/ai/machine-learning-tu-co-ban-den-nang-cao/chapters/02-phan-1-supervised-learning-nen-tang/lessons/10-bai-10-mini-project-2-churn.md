---
id: 019d8b39-bb10-7010-c010-ee1000000010
title: 'レッスン 10: ミニプロジェクト 2 — 顧客離れの予測'
slug: bai-10-mini-project-2-churn
description: 教師あり学習を実際の分類問題に適用し、製品の観点から結果を提示します。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 9
section_title: 'パート 1: 教師あり学習の基礎'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: '機械学習: 基本から高度まで'
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5862" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5862)"/>

  <!-- Decorations -->
  <g>
    <circle cx="766" cy="48" r="14" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="932" cy="54" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="1098" cy="60" r="20" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="764" cy="66" r="8" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="930" cy="72" r="26" fill="#2dd4bf" opacity="0.05"/>
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
    <line x1="600" y1="168" x2="1100" y2="248" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="198" x2="1050" y2="268" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="955.2390923627308,96.5 955.2390923627308,139.5 918,161 880.7609076372692,139.5 880.7609076372692,96.50000000000001 918,75" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 AI と ML — レッスン 9</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 10: ミニプロジェクト 2 — チャーン予測</tspan>
      <tspan x="60" dy="42">顧客</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">機械学習: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: 教師あり学習の基礎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

シリーズ初のミニプロジェクト分類です。目標は、チャーン モデルをトレーニングすることだけではなく、製品について質問する方法を知ることです。つまり、誰が何のために離脱するのか、どのようなアクションがトリガーされるのか、どの指標に本当に注目する価値があるのか​​を予測することです。

## レッスンの目標

- 比較的完全な分類ワークフローを作成します。
- ベースラインを構築し、メトリクスを選択し、複数のしきい値を試します。
- ビジネスの観点から結果を提示します。

## 問題のコンテキスト

サブスクリプション会社は、今後 30 日間にどの顧客が離脱するリスクがあるかを予測したいと考えています。早期にわかっていれば、CS チームまたはマーケティング チームは維持インセンティブを送信できます。

## 推奨される手順

1. データを読み取って確認します。
2. 解約率がクラスを超えているかどうかを確認します。
3. 単純なベースラインを作成します。
4. 最初にロジスティック回帰を訓練します。
5.混同行列、適合率、再現率、F1、ROC-AUCによる評価。
6. ビジネス目標に応じたテストしきい値。

## 機能の提案

- 在職期間
- 月額料金
- 契約の種類
- サポートチケット
- お支払い方法
- is_auto_renew

## フレームコード

~~~パイソン
sklearn.compose からインポート ColumnTransformer
sklearn.pipeline からパイプラインをインポート
sklearn.preprocessing からインポート OneHotEncoder、StandardScaler
sklearn.impute から SimpleImputer をインポート
sklearn.linear_model から LogisticRegression をインポート
~~~

## 関係者へのプレゼンテーション方法

「モデルは F1 = 0.71 を達成」とだけ言わないでください。解約しようとしている顧客の何パーセントがモデルによって捕捉されるか、何人の顧客が誤って警告を受けるか、維持コストは妥当かどうかを考えてみましょう。

## よくある間違い

- データがクラス外の場合の精度インジケーター。
- 使用されるしきい値を指定しません。
- チャーンタイム後に発生する機能を使用し、漏れを引き起こします。

## 練習問題を練習する

- チャーン予測用の完全なノートを作成します。
- 2 つの異なるしきい値を選択し、仮想のコストと利点を比較します。
- 結論を短いメールとして PM に書きます。

## 完了基準

- [ ] 明確なベースライン、メインモデル、メトリクスがあります。
- [ ] 閾値についての説明があります。
- [ ] 技術的な観点だけではなく、ビジネスの観点から結論を導き出します。

## 段階的に練習する (上級)

1. 明確な予測ウィンドウタイムを使用してチャーンターゲット変数を設計します。
2. ビジネス ルールに従ってベースラインを構築します (ルールベース)。
3. 少なくとも 2 つのモデルをトレーニングします: ロジスティック + ツリーベース。
4. 想定される保存コストに応じてしきい値を最適化します。
5. ビジネスチーム向けに短い概要を書きます。

## アーティファクトを送信する必要があります

- パイプラインを備えたエンドツーエンドのノートブック。
- マークダウン ファイルはコストの仮定を要約します。
- アクション リスト テーブル: どのグループが最初に介入する必要があるか。

## セルフテストの質問

- チャーンラベルはどの段階で漏洩する可能性がありますか?
- ML モデルの前にルールベースのベースラインが必要なのはなぜですか?
- 利益目標に近いしきい値をどのように選択するか?
