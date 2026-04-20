---
id: 01970001-bb07-7007-d007-bb0700001007
title: 'レッスン7：GenAI向けEvalフレームワーク、オブザーバビリティ＆SLO'
slug: bai-7-eval-framework-observability-va-slo-cho-genai
description: >-
  ゴールデンセット、オンラインフィードバックループ、レイテンシ/グラウンデッドネス/コストメトリクスを設計し、
  AI機能のSLOを定義する。
duration_minutes: 95
is_free: true
video_url: null
sort_order: 0
section_title: "パート4：信頼性、コスト＆本番ハードニング"
course:
  id: 01970001-aa11-7011-b011-aa1100001011
  title: Gemma 4 ローカルAIエンジニアリング on Mac
  slug: gemma-4-local-ai-engineering-tren-mac
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7070" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="340" rx="12" fill="url(#bg-7070)"/>
  <g>
    <circle cx="740" cy="70" r="22" fill="#fb923c" opacity="0.09"/>
    <circle cx="900" cy="200" r="28" fill="#fb923c" opacity="0.07"/>
    <circle cx="1020" cy="130" r="18" fill="#fb923c" opacity="0.11"/>
    <circle cx="1100" cy="270" r="14" fill="#fb923c" opacity="0.13"/>
    <line x1="600" y1="85" x2="1100" y2="165" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="115" x2="1050" y2="185" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
  </g>
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🧠 AI &amp; ML — L0</text>
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン7：GenAI向けEvalフレームワーク、</tspan>
      <tspan x="60" dy="42">オブザーバビリティ＆SLO</tspan>
  </text>
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Gemma 4 ローカルAIエンジニアリング on Mac</text>
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート4：信頼性、コスト＆本番ハードニング</text>
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

ローカルAIスタックが動作するだけでは不十分です。品質を測定し、低下を検出し、チームにSLOで保証を提供する必要があります。

## 1. コアメトリクス

GenAIシステムに必要な4つのコアメトリクス：

- レイテンシ（p50/p95/p99）
- グラウンデッドネス（引用の正確性）
- トークンコスト（リクエストあたりの推定）
- エラーレート（スキーマ失敗、タイムアウト）

## 2. ゴールデンセットの構築

ゴールデンセットとは：

- 20〜50の標準的な質問
- 各質問に期待される回答の要素
- 自動化されたスコアリングスクリプト

定期的に実行して品質トレンドを追跡します。

## 3. オンラインフィードバックループ

ユーザーからのシグナル：

- 👍/👎ボタン
- 「回答が間違っている」レポート
- 再生成リクエスト

これらのシグナルをダッシュボードに集約し、品質低下を早期に検出します。

## 4. SLOの定義

AI機能のSLO例：

| メトリクス | ターゲット | 測定期間 |
|-----------|----------|---------|
| レイテンシ p95 | < 5秒 | 7日間 |
| グラウンデッドネス | > 85% | 7日間 |
| 可用性 | > 99% | 30日間 |
| エラーレート | < 5% | 7日間 |

SLOを達成できない場合のエスカレーション手順も定義してください。

## 5. ダッシュボード設計

最低限含めるべきパネル：

- リクエスト量（時系列）
- レイテンシ分布
- モデル別エラーレート
- フィードバックスコアトレンド
- アクティブモデルバージョン

## デモコード

Evalフレームワーク実行結果 — スコアサマリー：

![Evalスコア](/images/blog/gemma4-series-demo/07-eval-scores.png)

> ソースコード：[06-eval-framework](https://github.com/xdev-asia-labs/gemma-4-local-ai-engineering-on-mac/tree/main/06-eval-framework)

## まとめ
