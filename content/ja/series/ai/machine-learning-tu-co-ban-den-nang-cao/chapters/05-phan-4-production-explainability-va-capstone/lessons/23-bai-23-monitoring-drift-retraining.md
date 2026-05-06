---
id: 019d8b39-bb23-7023-c023-ee2300000023
title: 'レッスン 23: モニタリング、ドリフト検出、再トレーニング'
slug: bai-23-monitoring-drift-retraining
description: 導入後の品質を監視し、ドリフトを検出し、再トレーニング ループと最小限のアラートを設計します。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 22
section_title: 'パート 4: 制作、説明可能性、キャップストーン'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: '機械学習: 基本から高度まで'
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4184" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4184)"/>

  <!-- Decorations -->
  <g>
    <circle cx="857" cy="221" r="30" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="614" cy="198" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="871" cy="175" r="22" fill="#a78bfa" opacity="0.08"/>
    <circle cx="628" cy="152" r="33" fill="#a78bfa" opacity="0.09"/>
    <circle cx="885" cy="129" r="14" fill="#a78bfa" opacity="0.1"/>
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
    <line x1="600" y1="111" x2="1100" y2="191" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="141" x2="1050" y2="211" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="933.5166604983954,98 933.5166604983954,124 911,137 888.4833395016046,124 888.4833395016046,98 911,85" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🧠 AI と ML — レッスン 22</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 23: モニタリング、ドリフト検出、および</tspan>
      <tspan x="60" dy="42">再訓練</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">機械学習: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: 制作、説明可能性、キャップストーン</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

導入後のモデルは静止しません。ユーザーデータの変化、市場の動きの変化、製品の変化。したがって、ML システムには、トレーニングが終了したとみなすのではなく、展開後の品質を監視する責任があります。

## レッスンの目標

- 予測ドリフト、データ ドリフト、コンセプト ドリフトを理解します。
- 監視する必要がある最小限の信号を理解します。
- 基本的な再トレーニング ループを設計します。

## 記録しておきたいこと

- 入力機能の分散。
- 各クラスの予測率。
- フィードバック ラベルがある場合のモデルの品質。
- レイテンシー、リクエストエラー、サービスの可用性。

## ドリフトの種類

- データドリフト: 入力分布の変化。
- コンセプトドリフト: 入力とターゲットの変化の間の関係。
- 予測ドリフト: モデル出力が異常に変化します。

## 再トレーニングはいつ行うべきですか?

ドリフトを見つけても、すぐに再トレーニングするわけではありません。ドリフトが本当にパフォーマンスに影響を与えるかどうか、再トレーニングするのに十分な新しい信頼できるデータがあるかどうか、再トレーニングにはリリース前に人間によるレビューが必要かどうかに答える必要があります。

## 初心者向けの最小限の監視

- ダッシュボードはリクエストとエラーの数を追跡します。
- いくつかの重要な機能の分布図。
- 主要な指標を週または月ごとに追跡します。
- 分布がしきい値を超えて逸脱した場合に警告します。

## よくある間違い

- インフラストラクチャのみを監視しますが、モデルの品質は監視しません。
- 自動再トレーニングでは回帰はチェックされません。
- データとモデルをバージョン管理しないでください。

## 練習問題を練習する

- モデルのチャーンまたはハウジングの監視チェックリストを設計します。
- 監視する必要がある 5 つの指標を特定します。
- 簡単な再トレーニング ポリシーを作成します: いつ再トレーニングするか、誰が承認するか、どのようにロールバックするか。

## 完了基準

- [ ] データ ドリフトとコンセプト ドリフトを区別します。
- [ ] 推奨されるモニターインジケーターの最小セット。
- [ ] 基本的な再トレーニングとロールバックの計画を立てます。

## 段階的に練習する (上級)

1. 品質とパフォーマンスの一連の監視指標を選択します。
2. 5 つの主要な機能に対してデータ ドリフト警告しきい値を設定します。
3. ドリフトシナリオをシミュレートし、警告を観察します。
4. 承認ステップを含む再トレーニング プロセスを設計します。
5. 新しいモデルが劣っている場合のロールバック プレイブックを作成します。

## アーティファクトを送信する必要があります

- 毎週のモニタリングチェックリスト。
- モデルの再トレーニングとリリースのプロセス。
- モデルのインシデント対応プレイブック。

## セルフテストの質問

- データドリフトとコンセプトドリフトの違いは何ですか?
- 定期的にいつ再トレーニングする必要がありますか、イベントに応じていつ再トレーニングする必要がありますか?
- ドリフトが増加しているのにメトリックが減少していない場合、最初にどのようなアクションを実行する必要がありますか?
