---
id: 019e7a10-a111-7001-d001-f1e2d3c4b511
title: 'レッスン 11: バッチ処理とワーカー プール アーキテクチャ'
slug: bai-11-batch-processing-worker-pool-architecture
description: >-
  チャンク戦略、ワーカー プールの設計、動的なスケーリング、正常なシャットダウン、バッチ
  データベース操作、メモリ効率の高い処理、進捗状況の追跡、再開可能なキャンペーン。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 11
section_title: 'パート 4: スケールの処理 — 数百万までのスケーリング'
course:
  id: 019e7a10-a100-7001-d001-f1e2d3c4b5a6
  title: 数百万の電子メールを送信する通知システムを設計する
  slug: thiet-ke-he-thong-notification-gui-email-quy-mo-lon
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7447" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7447)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1066" cy="208" r="34" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="1032" cy="94" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="998" cy="240" r="30" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="964" cy="126" r="28" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="930" cy="272" r="26" fill="#2dd4bf" opacity="0.05"/>
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
    <polygon points="1055.2390923627308,196.5 1055.2390923627308,239.5 1018,261 980.7609076372692,239.5 980.7609076372692,196.5 1018,175" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🏗️ アーキテクチャ — レッスン 11</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 11: バッチ処理とワーカー プール</tspan>
      <tspan x="60" dy="42">建築</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">数百万の電子メールを送信する通知システムを設計する</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: スケールの処理 — 数百万までのスケーリング</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

レート制限は適切な速度で送信するのに役立ちますが、**数百万の受信者**を効果的に処理したい場合は、作業を分割して作業者に均等に分配し、キャンペーンの途中で問題が発生した場合に再開できるようにする必要があります。

この記事では、ワーカー プール アーキテクチャと運用ワークロードのバッチ オーケストレーションについて説明します。

---

## 1. 各メールを個別に処理してみてはいかがでしょうか?

各受信者が最初から別個のジョブである場合、システムは次のような問題に直面します。

- キューが大きすぎます。バックログのトピックが膨大です。
- DB ルックアップが何度も繰り返されました。
- 各メッセージのオーバーヘッドシリアライズ/デザー。
- 進捗状況の追跡は散発的であり、再開は困難です。

### 合理的なアプローチ

1. 受信者の **キャンペーン スナップショット**を作成します。
2. スナップショットを **安定したバッチ**に分割します。
3. 各バッチはワーカー プールに割り当てられます。
4. バッチでは、ワーカーは現在のクォータに従ってレンダリングおよび送信します。
5. 進行状況を定期的に更新します。必要がない場合は、電子メールを送信するたびに DB を更新しないでください。

---

## 2. 受信者リストのチャンク戦略

### バッチサイズの選択基準

|バッチサイズ |利点 |デメリット | |を使用する場合
|---------------|-----------|---------------|----------|
| 100 |リトライしやすく、高い平滑性 |オーバーヘッドキューが大きい |トランザクションバースト |
| 500 |バランス |適切な進捗管理が必要 |最も人気のある |
| 1,000 |バルク API の方が効果的 |再試行はより高価になります |マーケティング キャンペーン |
| 5,000以上 |ネットワーク通話を最適化する |正確に再開するのは難しい |前処理に使用 |

### 推奨

- SES/SendGrid などの一括 API を使用して、500 ～ 1000 人の受信者の **論理バッチ** を作成します。
- SMTP または重いテンプレートのレンダリングでは、バッチを 200 ～ 500 未満に保ちます。
- パーソナライゼーションが複雑な場合は、メモリの急増を避けるためにバッチを小さくする必要があります。

### スナップショットの受信者

```sql
CREATE TABLE campaign_recipients_snapshot (
  campaign_id TEXT NOT NULL,
  recipient_id BIGINT NOT NULL,
  email TEXT NOT NULL,
  locale TEXT,
  timezone TEXT,
  template_variables JSONB,
  batch_no INT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  PRIMARY KEY (campaign_id, recipient_id)
);

CREATE INDEX idx_campaign_batch_status
  ON campaign_recipients_snapshot (campaign_id, batch_no, status);
```

スナップショットは、ソース システムのユーザー セグメントが継続的に更新される場合に、キャンペーンが途中で変更されるのを防ぐのに役立ちます。

---

## 3. ワーカープールのアーキテクチャ

```
Campaign Planner
    │
    ├── Create recipient snapshot
    ├── Split to batch jobs
    └── Publish batch jobs
         │
         ▼
   Batch Queue / Topic
         │
         ├── Worker Group A: critical
         ├── Worker Group B: high
         └── Worker Group C: bulk marketing
                │
                ▼
          Send Adapter Layer
                │
                ▼
         ESP / SMTP / Webhooks
```

### ワークロードごとにワーカーを分離する

|労働者団体 |トラフィックの種類 |数量 |特長 |
|--------------|--------------|----------|----------|
|クリティカルワーカー | OTP、パスワードをリセット |数は少ないですが、いつでもご利用いただけます |低遅延 |
|標準労働者 |通常のトランザクション |平均 |安定した |
|バルクワーカー |マーケティング キャンペーン |強い弾力性 |高スループット |

ワーカー グループを分離すると、マーケティング キャンペーンで重要なトランザクション フローが不足することを防ぐことができます。

---

## 4. メモリを節約する方法でデータをフェッチする

### よくある間違い

```python
recipients = db.query("SELECT * FROM recipients WHERE campaign_id = ?", campaign_id)
for recipient in recipients:
    process(recipient)
```

数百万のレコードがあるため、この方法ではワーカーが簡単に数ギガバイトの RAM を消費してしまう可能性があります。

### ストリーミング/ページネーションの方が正確です

```python
def fetch_batch(db, campaign_id: str, batch_no: int, limit: int = 500):
    return db.fetch_all(
        """
        SELECT recipient_id, email, locale, timezone, template_variables
        FROM campaign_recipients_snapshot
        WHERE campaign_id = %s
          AND batch_no = %s
          AND status IN ('pending', 'retry')
        ORDER BY recipient_id
        LIMIT %s
        """,
        (campaign_id, batch_no, limit),
    )

def process_batch(batch_job):
    rows = fetch_batch(db, batch_job.campaign_id, batch_job.batch_no)
    rendered = [render_email(row) for row in rows]
    send_results = email_provider.send_bulk(rendered)
    persist_results(batch_job.campaign_id, batch_job.batch_no, send_results)
```

### 運用ルール

- 一度に 1 つのバッチのみをメモリに保持します。
- レンダリング後、すぐに送信します。キャンペーン全体は RAM に蓄積されません。
- バッチまたはマイクロバッチでステータスを記録し、書き込み増幅を軽減します。

---

## 5. Kubernetes による動的スケーリング

### HPA はキューの深さに基づいています

```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: bulk-email-workers
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: bulk-email-workers
  minReplicas: 4
  maxReplicas: 80
  metrics:
    - type: External
      external:
        metric:
          name: kafka_consumer_lag
          selector:
            matchLabels:
              consumer_group: bulk-workers
        target:
          type: AverageValue
          averageValue: "5000"
```

### 自動スケーリングは CPU のみに基づいて行うべきではありません

CPU が低いからといって、必ずしもキューが健全であるとは限りません。ワーカーは、レート リミッターによってブロックされているか、プロバイダーの応答が遅いためにアイドル状態になっている可能性があります。キューのラグ、保留中のバッチ、平均送信遅延は、ビジネスに近いシグナルです。

---

## 6. 正常なシャットダウンと再開可能な処理

ワーカーが電子メールを送信し、デプロイまたは自動スケーリングの途中で強制終了されるのは通常のことです。デザインは事前に計算する必要があります。

### 原則

1. ワーカーはバッチ ジョブを受け取ります。
2. バッチを次のようにマークします `processing` リースタイムアウトあり。
3. 処理中、定期的にハートビートが発生します。
4. ワーカーが死亡すると、リースが期限切れになり、バッチはキューに戻ります。
5. 電子メールの送信は、次に従って冪等である必要があります。 `message_id`。

### リーステーブルの例

```sql
CREATE TABLE batch_leases (
  campaign_id TEXT NOT NULL,
  batch_no INT NOT NULL,
  worker_id TEXT NOT NULL,
  leased_until TIMESTAMPTZ NOT NULL,
  heartbeat_at TIMESTAMPTZ NOT NULL,
  PRIMARY KEY (campaign_id, batch_no)
);
```

### 重複したメールを避ける

- 各受信者/メッセージには 1 つ必要です `message_id` 安定しています。
- 固有の制約を使用して送信ログを記録する `message_id`。
- リースを再試行または再利用する場合は、再度送信する前に送信状態を確認してください。

---

## 7. 大規模なキャンペーンの進捗状況の追跡

### リアルタイムで確認する必要があるメトリクス

|メトリクス |意味 |
|----------|----------|
|受信者の合計 |スナップショット内の受信者の総数 |
|キューに入れられたバッチ |バッチ保留中 |
|処理バッチ |バッチ実行中 |
|送信数 | ESP に電子メールが送信されました |
|配信数 |メール配信確認済み |
|失敗数 |永久に失敗する |
| eta_分 |完成予定日 |

### 集約状態テーブル

```sql
CREATE TABLE campaign_progress (
  campaign_id TEXT PRIMARY KEY,
  total_recipients BIGINT NOT NULL,
  sent_count BIGINT NOT NULL DEFAULT 0,
  failed_count BIGINT NOT NULL DEFAULT 0,
  processing_batches INT NOT NULL DEFAULT 0,
  queued_batches INT NOT NULL DEFAULT 0,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

### 単純なETA

```text
ETA = remaining_recipients / effective_send_rate_per_second
```

`effective_send_rate` 紙上の理論上の速度ではなく、メトリクスから受け取った実際の速度である必要があります。

---

## 8. 実際の戦闘の最適化

### 最適化チェックリスト

- 行ごとに更新するのではなく、バッチ更新によって DB 書き込みを収集します。
- テンプレートのコンパイル結果をキャッシュします。
- 必要に応じて、CPU バウンドのレンダリングを IO バウンドの送信から分離します。
- サービス間の大きなペイロードには gzip/圧縮を使用します。
- 可能であれば、すべての重いテンプレート変数をキューに詰め込まず、参照のみを送信してください。

### レンダリング サービスはいつ分離する必要がありますか?

- テンプレートが複雑すぎるか、パーソナライゼーションで多くの余分なデータが使用されます。
- 個別の A/B テスト、ローカリゼーション、コンテンツ検証が必要です。
- 線形スケーリングのために、ワーカーの送信は非常にコンパクトに保つ​​必要があります。

---

## 概要

バッチ処理とワーカー プールは、何百万もの受信者のリストを制御可能な、再試行、再開、および自動スケールの作業単位に変換するレイヤーです。正しく設計されていれば、大規模なキャンペーンは 1 つの巨大なリスクのブロックではなく、多数の小さな独立した問題として機能します。

**次の記事:** 戦略的再試行からデッドレターキュー、安全な再処理まで、障害状況に対処します。
