---
id: 019d8b39-bb11-7011-c011-ee1100000011
title: 'レッスン 11: 欠損値、カテゴリ変数、特徴量エンジニアリング'
slug: bai-11-missing-categorical-feature-engineering
description: '実際のデータ処理プロセス: 欠損、エンコード、スケーリング、外れ値の処理、および基本的な特徴のクロス。'
duration_minutes: 150
is_free: true
video_url: null
sort_order: 10
section_title: 'パート 2: 業界標準のワークフロー'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: '機械学習: 基本から高度まで'
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8918" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8918)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1006" cy="168" r="24" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="912" cy="214" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="818" cy="260" r="10" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="724" cy="46" r="18" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="630" cy="92" r="26" fill="#2dd4bf" opacity="0.05"/>
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
    <line x1="600" y1="188" x2="1100" y2="268" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="218" x2="1050" y2="288" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="975.2390923627308,116.5 975.2390923627308,159.5 938,181 900.7609076372692,159.5 900.7609076372692,116.50000000000001 938,95" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 AI と ML — レッスン 10</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 11: 欠損値、カテゴリカル</tspan>
      <tspan x="60" dy="42">変数、特徴エンジニアリング</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">機械学習: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: 業界標準のワークフロー</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

実際のデータがクリーンであることはほとんどありません。列に値がありません。テキストに奇妙な記号が含まれています。カテゴリのレベルが多すぎます。フィーチャは手動で作成されており一貫性がありません。この記事は、これらのタスクを再現可能かつエラーのない方法で処理するのに役立ちます。

## レッスンの目標

- 数値およびカテゴリの欠損値を処理します。
- カテゴリ変数を適切にエンコードします。
- 特徴エンジニアリングとは何か、いつ停止すべきかを理解します。

## 値が欠落しています: すべてが欠落しているという意味ではありません

データの欠落は信号である場合があります。入力する前に、「なぜデータが欠落しているのか、ランダムに欠落しているのか、系統的に欠落しているのか、欠落しているかどうかをマークするために追加の列を作成する必要があるのか​​」を考えてください。

## 一般的な治療法

- 数値: 外れ値がある場合は、通常、中央値の方が平均値より安全です。
- カテゴリ: 最も一般的な値を入力するか、「不明」というラベルを付けます。
- 欠落インジケーター: 欠落自体がシグナルである場合に便利です。

## 特徴量エンジニアリングは実用的です

過去 30 日間の総支出額、月あたりのサポート チケットの数、制限を超えた使用率など、明確なビジネス ロジックを使用して機能に優先順位を付けます。

## フレームコード

~~~パイソン
sklearn.impute から SimpleImputer をインポート
sklearn.preprocessing から OneHotEncoder をインポート

num_imputer = SimpleImputer(strategy='median')
cat_imputer = SimpleImputer(strategy='most_frequent')
エンコーダ = OneHotEncoder(handle_unknown='ignore')
~~~

## よくある間違い

- データを分割する前に不足しているものを埋めます。
- 未来を見据えた機能を作成します。
- One-hot にはカテゴリが多すぎるため、機能スペースが無駄に肥大化します。

## 練習問題を練習する

- 数値とカテゴリの両方を含む表形式のデータセットを選択します。
- 数字の不足している数字を埋める 2 つの方法を試してください。
- 明確なビジネス説明を含む 3 つの新機能を作成します。

## 完了基準

- [ ] 各列タイプの欠落を埋める戦略を選択する方法を理解します。
- [ ] ワンホット エンコーディングを使用すると、新しいカテゴリに遭遇したときにエラーが発生しません。
- [ ] リークを発生させずに新しいフィーチャーを作成します。

## 段階的に練習する (上級)

1. データ プロファイリング レポート (欠損率、カーディナリティ、外れ値) を準備します。
2. 比較のために欠落処理の 2 つのバージョンを作成します。
3. ワンホットを使用して分類をエンコードし、ターゲット セーフ エンコーディングと比較します。
4. 起源を明確に説明した 3 つのビジネス機能を追加します。
5. 最終的な指標に対する各ステップの影響を評価します。

## アーティファクトを送信する必要があります

- 処理前/処理後のデータ品質テーブル。
- 新機能とその存在理由のリスト。
- 各前処理ステップ後の実験ログ。

## セルフテストの質問

- 非ランダムな欠損は別の方法で処理する必要がありますか?
- ワンホットが効かなくなるのはどんな時ですか？
- 新しい機能に真の価値があることをどのように証明しますか?
