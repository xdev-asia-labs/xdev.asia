---
id: 019d8b39-bb21-7021-c021-ee2100000021
title: 'レッスン 21: ステークホルダーに対する説明可能性と公平性'
slug: bai-21-explainability-fairness
description: SHAP、順列の重要性、公平性チェック、ビジネス チームがモデルを理解して信頼できるように結果を提示する方法。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 20
section_title: 'パート 4: 制作、説明可能性、キャップストーン'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: '機械学習: 基本から高度まで'
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7373" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7373)"/>

  <!-- Decorations -->
  <g>
    <circle cx="678" cy="144" r="36" fill="#fbbf24" opacity="0.09"/>
    <circle cx="756" cy="182" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="834" cy="220" r="34" fill="#fbbf24" opacity="0.07"/>
    <circle cx="912" cy="258" r="18" fill="#fbbf24" opacity="0.11"/>
    <circle cx="990" cy="36" r="32" fill="#fbbf24" opacity="0.05"/>
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
    <line x1="600" y1="244" x2="1100" y2="324" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="274" x2="1050" y2="344" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="977.7749907475932,124.5 977.7749907475932,163.5 944,183 910.2250092524068,163.5 910.2250092524068,124.50000000000001 944,105" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 AI と ML — レッスン 20</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 21: 説明可能性と公平性</tspan>
      <tspan x="60" dy="42">利害関係者</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">機械学習: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: 制作、説明可能性、キャップストーン</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

ノートブックの優れたモデルだけでは十分ではありません。利害関係者は、モデルがなぜそのような決定を下すのかを理解する必要があり、組織はまた、モデルに偏りがあるかどうかを知る必要があります。ここで、説明可能性と公平性が不可欠になります。

## レッスンの目標

- ローカルな説明可能性とグローバルな説明可能性の違いを理解します。
- 入門レベルで順列重要度または SHAP の使用方法を理解します。
- 導入前に公平性に関する質問をする方法を理解する。

## 誰に対する説明可能性?

- データ サイエンティストはモデルをデバッグする必要があります。
- PM は、どの機能が結果に影響を与えるかを理解する必要があります。
- 専門的な利害関係者は、シンプルで信頼できるストーリーを必要としています。
- エンド ユーザーは、個々の予測について具体的な理由を必要とする場合があります。

## 2 つのレベルの説明

- グローバルな説明可能性: モデルは一般にどのような要素に依存しますか?
- 局所的な説明可能性: 特定のサンプルがそのように予測される理由。

## 公平性は二次的なオプションではありません

モデルが人間による意思決定に影響を与える場合は、各ユーザー グループのパフォーマンス、各グループの誤検知または誤検知の割合、およびどの機能が機密属性の代理となり得るかをテストする必要があります。

## 関係者へのプレゼンテーション方法

- 長い式は避けてください。
- 最も影響力のある機能を 3 ～ 5 つ使用します。
- モデルの信頼レベルと限界を明確に述べます。
- 偏見のリスクを率直に述べます。

## よくある間違い

- SHAP チャートの性質を理解せずに乱用する。
- 説明可能性と原因と結果の証明を混同している。
- 導入後にのみ公平性をチェックしてください。

## 練習問題を練習する

- トレーニングされた分類モデルを選択します。
- 順列重要度またはSHAPサマリーを作成します。
- 2 つの異なるユーザー グループによるメトリクスを確認します。
- PM にプレゼンテーションしているかのように説明を書きます。

## 完了基準

- [ ] グローバルな説明可能性とローカルな説明可能性を区別します。
- [ ] 基本的な公平性チェックを少なくとも 1 つ知っています。
- [ ] 技術者以外の関係者でも理解できる結果を提示します。

## 段階的に練習する (上級)

1. トレーニング済みモデルと固定検証セットを選択します。
2. 5 つのサンプルのグローバル重要度とローカル説明を計算します。
3. データを 2 ～ 3 のユーザー グループに分割し、公平性を比較します。
4. グループごとのメトリックの差を記録します。
5. 倫理的リスクメモと管理に関する推奨事項を準備します。

## アーティファクトを送信する必要があります

- 1 ～ 2 ページの説明可能性レポート。
- グループ別の公平性指標テーブル。
- 優先順位ごとにバイアスを軽減するためのアクションのリスト。

## セルフテストの質問

- 説明可能性が因果関係を証明できないのはなぜですか?
- どのくらいのメトリクスの差が憂慮すべきものですか?
- 公平性のリスクを理由に展開を拒否する必要があるのはどのような場合ですか?
