---
id: 019e7a10-a114-7001-d001-f1e2d3c4b514
title: 'レッスン 14: モニタリング、メトリクス、アラート'
slug: bai-14-monitoring-metrics-alerting
description: >-
  通知プラットフォーム、Prometheus および Grafana ダッシュボード、OpenTelemetry
  による分散トレース、キュー深さの監視、ワーカーのヘルスチェック、SLA 追跡、および一般的なインシデントのランブックの主要なメトリクス。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 14
section_title: 'パート 5: 到達性、監視、および運用'
course:
  id: 019e7a10-a100-7001-d001-f1e2d3c4b5a6
  title: 数百万の電子メールを送信する通知システムを設計する
  slug: thiet-ke-he-thong-notification-gui-email-quy-mo-lon
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6959" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6959)"/>

  <!-- Decorations -->
  <g>
    <circle cx="866" cy="268" r="24" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="632" cy="174" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="898" cy="80" r="10" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="664" cy="246" r="18" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="930" cy="152" r="26" fill="#2dd4bf" opacity="0.05"/>
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
    <polygon points="1005.2390923627308,146.5 1005.2390923627308,189.5 968,211 930.7609076372692,189.5 930.7609076372692,146.5 968,125" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🏗️ アーキテクチャ — レッスン 14</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 14: モニタリング、メトリクス、アラート</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">数百万の電子メールを送信する通知システムを設計する</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 5: 到達性、監視、および運用</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

指標がなければ、1,000 万件の電子メール キャンペーンは闇の中への単なる信仰の飛躍にすぎません。通知生成システムは、送信速度はどのくらいか、どこで滞っているか、どのプロバイダーに障害が発生しているか、どのキャンペーンが SLA を破ろうとしているかなどの質問に即座に答えることができなければなりません。

---

## 1. システムを層ごとに観察します。

### メトリクスの 4 つの主要な層

|クラス |たとえば、メトリック |
|-----|--------------|
|ビジネス |電子メールの送信、配信、苦情、キャンペーンの到着予定時刻 |
|アプリケーション |レンダリング遅延、送信遅延、再試行回数 |
|キュー |コンシューマー ラグ、キューの深さ、DLQ サイズ |
|インフラ | CPU、メモリ、ネットワーク、ポッドの再起動 |

### アンチパターンは避けるべきです

- キューラグではなく、CPU/RAM のみを確認します。
- 見てください `sent_count` 配送/返送/苦情を確認せずに。
- メトリクスを添付しないでください `provider`、 `campaign_type`、 `recipient_domain`。

---

## 2. 電子メール プラットフォームのコア メトリクス セット

### ビジネス指標

|メトリクス |意味 |
|----------|----------|
| `emails_requested_total` |送信が要求された電子メールの総数 |
| `emails_sent_total` |プロバイダーが受け入れた電子メールの数 |
| `emails_delivered_total` |配達確認メール番号 |
| `emails_bounced_total` |タイプ別のバウンス |
| `emails_complained_total` |苦情スパム |
| `campaign_eta_seconds` |キャンペーン完了予定日 |

### アプリケーションのメトリクス

|メトリクス |ラベルには | が必要です。
|------|----------------|
| `template_render_seconds` |テンプレート ID、ロケール |
| `provider_send_seconds` |プロバイダー、優先度 |
| `retry_attempt_total` |エラークラス、プロバイダ |
| `throttle_decision_total` |制限タイプ、結果 |
| `worker_batch_duration_seconds` |ワーカーグループ |

### キューのメトリクス

|メトリクス |意味 |
|----------|----------|
| `queue_depth` |保留中のジョブの合計 |
| `consumer_lag` |プロデューサーと比較したバックログ レベル |
| `retry_queue_depth` |再試行を待機しているジョブの数 |
| `dlq_messages_total` |数量は DLQ に入力されます |

---

## 3. Prometheus の計測

### メトリック定義の例

```python
from prometheus_client import Counter, Histogram, Gauge

emails_sent_total = Counter(
    'emails_sent_total',
    'Total emails accepted by provider',
    ['provider', 'priority', 'campaign_type']
)

provider_send_seconds = Histogram(
    'provider_send_seconds',
    'Latency of provider send API',
    ['provider'],
    buckets=(0.05, 0.1, 0.25, 0.5, 1, 2, 5, 10)
)

queue_depth = Gauge(
    'queue_depth',
    'Current queue depth',
    ['queue_name']
)
```

### ラベルを使用する場合の注意事項

- 制御可能なカーディナリティを持つラベルのみを追加します。
- 適切なメールアドレスを添付しないでください `message_id` メトリックラベルに移動します。
- キャンペーンでは、通常、それに応じて集計することをお勧めします `campaign_type` または上位 N 個のキャンペーン。すべてのキャンペーンを同時に行うわけではありません。

---

## 4. ダッシュボードには何を表示する必要がありますか?

### キャンペーン管理ダッシュボード

- プロバイダーに応じた現在の送信速度。
- ドメイン別の配信率と直帰率。
- ETA はキャンペーンを完了します。
- バックログをキューに入れ、バックログを再試行します。
- 5 分間の苦情率。

### オンコール エンジニア向けのダッシュボード

- 過去 15 分間の上位エラー クラス。
- 各プロバイダーのサーキットブレーカーの状態。
- ワーカーポッドが再起動します。
- DB レイテンシー、Redis レイテンシー。
- Webhook 取り込みのラグ。

### 配信可能性所有者用のダッシュボード

- ドメイン別のトレンドを開く/クリックします。
- セグメントごとのハード バウンス/苦情。
- IP ウォーミングの進行状況。
- ドメインの評判指標。

---

## 5. 警告: 少数ではあるが正しい警告

### アラート ルールの例

```yaml
groups:
  - name: notification-alerts
    rules:
      - alert: NotificationDLQSpike
        expr: increase(dlq_messages_total[5m]) > 200
        for: 10m
        labels:
          severity: page
        annotations:
          summary: "DLQ spike detected"

      - alert: ProviderThrottleRateHigh
        expr: rate(retry_attempt_total{error_class="provider_throttled"}[5m]) > 20
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "Provider throttling rate is high"

      - alert: CriticalQueueBacklog
        expr: queue_depth{queue_name="critical-email"} > 1000
        for: 2m
        labels:
          severity: page
        annotations:
          summary: "Critical email backlog exceeded threshold"
```

### アラートの原則

- SLA リスクまたはデータ損失がある場合にのみページングします。
- 観察する必要があるが、オンコールで目を覚ます必要がない場合の警告。
- アラートは、単なる一般的な通知ではなく、明確なアクションにつながる必要があります。

---

## 6. OpenTelemetry を使用した分散トレース

電子メールは、API -> キュー -> ワーカー -> プロバイダー -> Webhook -> 分析という多くのホップを通過します。痕跡がないと、事件が起きたときにメッセージのストーリーを結び付けることが困難になります。

### 相関識別子の伝播

```python
from opentelemetry import trace

tracer = trace.get_tracer(__name__)

def enqueue_email(job):
    with tracer.start_as_current_span("enqueue_email") as span:
        span.set_attribute("campaign.id", job.campaign_id)
        span.set_attribute("message.id", job.message_id)
        span.set_attribute("priority", job.priority)
        publish_to_queue(job)
```

### フィールドは伝播する必要があります

- `trace_id`
- `campaign_id`
- `message_id`
- `provider`
- `recipient_domain`

トレースはメトリクスを置き換えるものではありませんが、特定のエラーや遅延の異常値を分析する場合に非常に役立ちます。

---

## 7. 通知システムの SLO/SLA

### 実際の SLO の例

|トラフィックの種類 | SLO |
|--------------|-----|
| OTP / パスワードのリセット | 99% が 15 秒以内にプロバイダーに送信 |
|注文確認 | 2 分未満で 99% |
|マーケティング キャンペーン |コミットされた ETA 以内に 95% が完了 |

### エラーバジェットの考え方

マーケティング ワークロードがシステムのエラー バジェットを大量に消費している場合は、キャンペーンの優先順位を下げるか、キャンペーンの実行時間を延長する必要があります。 SLO は、チームが感情的な議論ではなくデータを使用して意思決定を行うのに役立ちます。

---

## 8. 一般的な問題に対するランブック

### インシデント: キューのバックログが急激に増加しました

1. プロバイダーのスロットリング率を確認します。
2. オートスケーラーがスケールアップするかどうかを確認します。
3. Redis リミッターのロックが厳しすぎるかどうかを確認します。
4. マーケティング キャンペーンの場合は、送信速度を下げるか一時停止することを検討してください。

### インシデント: 苦情率が異常に増加

1. どのキャンペーンが急増の原因となっているかを特定します。
2. まずそのキャンペーンを一時停止します。
3. セグメントとメールの内容を確認します。
4. 影響が広範囲に及ぶ場合は、ドメイン全体のスループットを削減します。

### インシデント: 配信数は減少しましたが、送信数は依然として高いです

1. Webhook が見つからないか、速度が遅いかどうかを確認します。
2. メールボックスプロバイダー固有の問題を確認します。
3. ドメインごとの比較: Gmail または Outlook は個別に影響を受けますか?
4. 評判ダッシュボードを確認します。

---

## 概要

適切なモニタリングは、スループット、品質、SLA、リスクといった実際の運用上の観点から通知システムを把握するのに役立ちます。適切な指標により、調査時間が短縮され、誤報が減少し、より高い信頼性を持ってキャンペーンを拡張できるようになります。

**次の記事:** このシリーズは、実際のインフラストラクチャ上で 1,000 万件のエンドツーエンド電子メールを送信するシステムを導入する実稼働ケース スタディで終わります。
