---
id: 019d8b39-bb22-7022-c022-ee2200000022
title: 'レッスン 22: FastAPI + Docker を使用したモデル提供'
slug: bai-22-model-serving-fastapi-docker
description: モデルをパッケージ化し、推論 API を構築し、モデルをバージョン管理して、コンパクトな ML サービスをデプロイします。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 21
section_title: 'パート 4: 制作、説明可能性、キャップストーン'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: '機械学習: 基本から高度まで'
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8517" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8517)"/>

  <!-- Decorations -->
  <g>
    <circle cx="686" cy="228" r="14" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="772" cy="34" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="858" cy="100" r="20" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="944" cy="166" r="8" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="1030" cy="232" r="26" fill="#2dd4bf" opacity="0.05"/>
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
    <line x1="600" y1="128" x2="1100" y2="208" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="158" x2="1050" y2="228" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1015.2390923627308,156.5 1015.2390923627308,199.5 978,221 940.7609076372692,199.5 940.7609076372692,156.5 978,135" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 AI と ML — レッスン 21</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 22: FastAPI + Docker を使用したモデル提供</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">機械学習: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: 制作、説明可能性、キャップストーン</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

モデルをトレーニングしても使用しなかった後、値はノートブックに残ります。この記事は、FastAPI と Docker を使用してモデルを単純なサービスにパッケージ化するのに役立ちます。これは、内部デモや実際のデプロイメントの基盤として十分です。

## レッスンの目標

- モデルを適切にシリアル化します。
- 入力を受け取り、予測を返す API を作成します。
- Docker を使用してサービスをパッケージ化します。

## 最低限必要な出力

- 保存されたモデル ファイル (joblib など)。
- ファイルアプリ FastAPI。
- ファイル要件または同等のもの。
- サービスを安定して実行するための Dockerfile。

## 提案された手順

1. モデルをトレーニングし、アーティファクトを保存します。
2. 入力または出力スキーマを定義します。
3. エンドポイント /predict を書き込みます。
4. サンプルリクエストを使用してローカルでテストします。
5. Docker を使用してコンテナ化します。

## FastAPI フレームワーク コード

~~~パイソン
fastapi から FastAPI をインポート
pydanticインポートBaseModelから
ジョブライブラリをインポートする
パンダをPDとしてインポートする
~~~

## 実際の環境に出るときに考慮すべきこと

- 適切なレベルでリクエストとレスポンスをログに記録します。
- モデルのバージョンを管理します。
- 入力をより慎重に検証します。
- タイムアウト、リトライ、モニタリング。

## よくある間違い

- モデルを保存しますが、前処理パイプラインは忘れます。
- API スキーマがトレーニング データと一致しません。
- 美しいデータでテストし、エラー入力をテストしないでください。

## 練習問題を練習する

- チャーンまたはハウジングのモデルを API にパッケージ化します。
- 3 つのサンプル リクエストを作成します: 有効なフィールド、欠落しているフィールド、間違ったデータ タイプ。
- Docker を使用してローカルで実行する方法を説明した短い README を作成します。

## 完了基準

- [ ] ローカルで実行できる予測 API があります。
- [ ] Docker がビルドされ、正常に実行されました。
- [ ] スキーマ入力は他の人が API を呼び出すことができるほど明確です。

## 段階的に練習する (上級)

1. Pydantic を使用して入出力スキーマを標準化します。
2. モデルと前処理をバージョン管理されたアーティファクトにパッケージ化します。
3. エンドポイントの予測とヘルスチェックを作成します。
4. 基本的なログを追加し、エラー処理をクリアします。
5. Docker イメージをビルドし、curl を使用してスモーク テストを実行します。

## アーティファクトを送信する必要があります

- API ソースコードと Dockerfile を実行できます。
- 3 つの状況のリクエスト/レスポンスの例。
- 最小限のローカル展開 README。

## セルフテストの質問

- モデル アーティファクトのバージョン管理が必要なのはなぜですか?
- 入力スキーマが変更された場合、下位互換性はそれをどのように処理しますか?
- 最初から監視する必要がある実行時メトリクスはどれですか?
