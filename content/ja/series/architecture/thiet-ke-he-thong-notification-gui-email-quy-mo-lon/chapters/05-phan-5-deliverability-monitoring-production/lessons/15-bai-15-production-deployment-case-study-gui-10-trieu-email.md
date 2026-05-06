---
id: 019e7a10-a115-7001-d001-f1e2d3c4b515
title: 'レッスン 15: 実稼働環境への展開 — 1,000 万件の電子メールを送信するケーススタディ'
slug: bai-15-production-deployment-case-study-gui-10-trieu-email
description: >-
  エンドツーエンドのケーススタディ: マーケティング キャンペーンのために 1,000
  万通の電子メールを送信するシステムの設計と実装。インフラストラクチャのセットアップ、Kubernetes のデプロイメント、CI/CD、負荷テスト、カオス
  シナリオ、コスト分析、および運用上の教訓を学びました。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 15
section_title: 'パート 5: 到達性、監視、および運用'
course:
  id: 019e7a10-a100-7001-d001-f1e2d3c4b5a6
  title: 数百万の電子メールを送信する通知システムを設計する
  slug: thiet-ke-he-thong-notification-gui-email-quy-mo-lon
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8722" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8722)"/>

  <!-- Decorations -->
  <g>
    <circle cx="777" cy="261" r="10" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="954" cy="78" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="631" cy="155" r="12" fill="#a78bfa" opacity="0.08"/>
    <circle cx="808" cy="232" r="13" fill="#a78bfa" opacity="0.09"/>
    <circle cx="985" cy="49" r="14" fill="#a78bfa" opacity="0.1"/>
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
    <line x1="600" y1="71" x2="1100" y2="151" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="101" x2="1050" y2="171" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1043.5166604983954,208 1043.5166604983954,234 1021,247 998.4833395016046,234 998.4833395016046,208 1021,195" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🏗️ アーキテクチャ — レッスン 15</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 15: 実稼働環境のデプロイ — ケーススタディ</tspan>
      <tspan x="60" dy="42">1,000 万件のメールを送信</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">数百万の電子メールを送信する通知システムを設計する</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 5: 到達性、監視、および運用</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

このシリーズは現実的な問題で終わります。電子商取引会社は、トランザクション フローを正常に実行し続けながら、**4 時間で 1,000 万件のフラッシュ セール メールを送信する必要があります**。この記事では、これまでのすべての要素を組み合わせて、運用可能な設計を作成します。

---

## 1. 問題と入力の仮定

### ビジネス要件

- 最大 4 時間で 1,000 万件の電子メールを送信します。
- 名前、割引コード、ロケールによる基本的なパーソナライゼーションがあります。
- 購読解除、オープン追跡、クリック追跡があります。
- OTP および注文確認には影響しません。

### 容量目標

```text
10,000,000 / 14,400 giây ≈ 694 emails/giây
Peak headroom x2 -> thiết kế cho ~1,400 emails/giây
```

### 運用アーキテクチャ

- 1 つの主要プロバイダー: Amazon SES。
- 1 つのバックアップ プロバイダー: SendGrid。
- 2 つの個別のワーカー プール: トランザクション マーケティングとバルク マーケティング。
- レート制限とスケジューリング用の 1 つの Redis クラスター。
- イベント駆動型バックボーンとしての 1 つの Kafka クラスター。
- メタデータと分析の取り込み用の 1 つの PostgreSQL プライマリ + リード レプリカ。

---

## 2. 全体的な運用アーキテクチャ

```
Admin UI / Campaign API
        │
        ▼
Campaign Planner
        │
        ├── Recipient Snapshot Service
        ├── Batch Planner
        └── Kafka topics
                │
                ▼
          Bulk Worker Pool
                │
        ┌───────┴────────┐
        ▼                ▼
   Amazon SES        SendGrid Fallback
        │                │
        └───────┬────────┘
                ▼
        Webhook Ingestion
                │
                ▼
         Status Aggregator
                │
                ▼
      PostgreSQL + Grafana/Prometheus
```

### 主な成分

|成分 |役割 |
|----------|----------|
|キャンペーンプランナー |スナップショットとバッチ ジョブを作成する |
|カフカ |生産者と消費者の分離 |
|レディス |リミッター、再試行スケジュール、分散ロック |
|バルクワーカー |キャンペーントラフィックをレンダリングして送信 |
|トランザクションワーカー |重要なトラフィックを確保 |
| Webhook の取り込み |配送/返送/苦情イベントを受け取る |

---

## 3. 推奨される Kubernetes インフラストラクチャ

### ワークロードを名前空間とデプロイメントごとに分離する

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: bulk-email-workers
spec:
  replicas: 12
  selector:
    matchLabels:
      app: bulk-email-workers
  template:
    metadata:
      labels:
        app: bulk-email-workers
    spec:
      containers:
        - name: worker
          image: ghcr.io/xdev/notification-workers:2026.04.01
          env:
            - name: WORKER_GROUP
              value: bulk
            - name: KAFKA_CONSUMER_GROUP
              value: bulk-workers
          resources:
            requests:
              cpu: "500m"
              memory: "512Mi"
            limits:
              cpu: "2"
              memory: "2Gi"
          readinessProbe:
            httpGet:
              path: /health/ready
              port: 8080
```

### 最初のサイズ提案

|サービス |数量 |メモ |
|----------|----------|----------|
| API / プランナー | 3 ポッド |基本血圧 |
|バルクワーカー | 12～40ポッド |ラグによる自動スケール |
|トランザクションワーカー | 4～8ポッド |予約容量 |
| Webhook プロセッサ | 3～6ポッド |コールバックバーストによるスケール |
|レディス | 3 ノード |センチネル/クラスター |
|カフカ | 3 ブローカー |レプリケーション係数 3 |

---

## 4. CI/CD とリリース戦略

### パイプラインが存在するはずです

1. テンプレート レンダリング、リミッター、プロバイダー アダプターの単体テスト。
2. Kafka、Redis、PostgreSQL との統合テスト。
3. スモーク テストはサンドボックス プロバイダー経由で電子メールを送信します。
4. Canary を新しいワーカー バージョンにデプロイします。
5. 送信失敗率が増加した場合は、すぐにロールバックします。

### なぜ労働者にはカナリアが必要なのでしょうか?

レンダラーまたはプロバイダー アダプターの 1 つの小さなバグにより、1,000 万件の電子メールが 1,000 万件のエラーに変わる可能性があります。 Canary 1 ～ 5% のトラフィックは、キャンペーンが広範囲に影響を受ける前に回帰を検出するのに役立ちます。

---

## 5. k6 による負荷テスト

キャンペーン調整部分の負荷テストを行わずに運用トラフィックをテストすることは不可能です。

### キャンペーン API の k6 の例

```javascript
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  scenarios: {
    create_campaigns: {
      executor: 'ramping-vus',
      startVUs: 1,
      stages: [
        { duration: '1m', target: 20 },
        { duration: '3m', target: 100 },
        { duration: '2m', target: 0 },
      ],
    },
  },
};

export default function () {
  const payload = JSON.stringify({
    campaign_id: `camp-${__VU}-${__ITER}`,
    template_id: 'flash_sale_v2',
    segment_id: 'active_users_30d',
    priority: 'normal',
  });

  const response = http.post('https://api.example.com/campaigns', payload, {
    headers: { 'Content-Type': 'application/json' },
  });

  check(response, {
    'campaign accepted': (r) => r.status === 202,
  });

  sleep(1);
}
```

### API 以外に何をテストするか

- プロバイダーがスロットルするとキューのバックログが増加します。
- ラグが増加した場合のワーカーの自動スケーリング。
- Redis は、同時アクセスが多い場合の遅延を制限します。
- プロバイダーのフラッシュ イベント後の Webhook 取り込みバースト。

---

## 6. カオスシナリオをシミュレートする必要がある

|状況 |期待 |
|----------|----------|
| SES ペイ 429 は 15 分間続きます |減速 + SendGrid への部分的なフェイルオーバー |
| Redis によりレイテンシが増加する |ワーカーは劣化しますが、大量に複製はされません。
|ワーカー ポッドの 20% が死亡 |バッチ リースが回収され、再開されます。
| Webhook プロセッサのダウンタイム |イベントはバッファリングされ、状態は失われません。
|キャンペーンのテンプレートのバグ |キャンペーンは一時停止されていますが、他のトラフィックはまだ安全です |

### カオス テストの目標

システムが不滅であることを証明するためではなく、障害が発生したときに、制御され、観察可能で、回復可能な方法で障害が発生することを確認するためです。

---

## 7. 予備的なコスト分析

### 大きなコスト要素

|カテゴリー |見積もり |
|----------|----------|
| Amazon SES は 1,000 万件のメールを送信 |約1,000ドル |
| SendGrid フォールバック リザーブ |プランに応じて数百ドルから数千ドル |
| Kubernetes コンピューティング |クラウドと自動スケール ウィンドウに依存します |
|カフカ/Redis/PostgreSQL |固定基本コスト |
|可観測性 | Prometheus/Grafana 管理またはセルフホスト |

### コストの最適化

- SES を大容量ワークロードのメインプロバイダーとして使用します。
- 災害シナリオに十分なレベルでのみフォールバック プロバイダーを有効にしてください。
- メインの PostgreSQL に負荷全体を負担させることなく、負荷の高い分析を非同期パイプラインに分離します。
- テンプレートのレンダリング キャッシュを最適化して、ワーカーの CPU を削減します。

---

## 8. 生産から学んだ教訓

### 正しい決断

- トランザクションワーカーとバルクワーカーを最初から分離します。
- メッセージを識別します `message_id` 冪等に対して安定。
- 大規模なキャンペーンを実行する前に、ダッシュボード キャンペーンの ETA と苦情率を作成します。
- ドメイン/IP を当初の予想よりも慎重にウォームアップします。

### 痛みはあるが貴重な教訓

1. ワーカーの理論上のスループットは、プロバイダーを介した実際のスループットほど重要ではありません。
2. 同じドメイン/IP を使用している場合、不適切なマーケティング キャンペーンによりトランザクション トラフィックの評判も損なわれる可能性があります。
3. ジッターなしで再試行すると、すぐに自分自身による DDoS に変わります。
4. どの電子メールが実際に配信されたかを知るには、Webhook 調整が必要です。

---

## 9. 1,000 万電子メールキャンペーンの稼働チェックリスト

- SPF、DKIM、DMARC ドメインが認証され、調整されています。
- セグメントがクリーンアップされ、抑制リストが適用されました。
- 設定されたプロバイダー/ドメイン/IP に応じたレート制限。
- ダッシュボード、アラート、ランブックが用意されています。
- フォールバックプロバイダーはテスト済みです。
- 小規模なカナリア キャンペーンは正常に実行されました。
- オンコールローテーションは、ページのしきい値とキャンペーンを一時停止する方法を正確に認識します。

---

## 概要

1,000 万件のメール送信の問題は、スケール ワーカーだけの問題ではありません。これは、イベント駆動型アーキテクチャ、配信可能性、レート制御、システム監視、および操作手順が同時に発生する問題です。これらのレイヤーを組み合わせて設計すると、大規模なキャンペーンはギャンブルではなく、予測可能で制御可能なワークロードになります。

大規模な電子メール通知プラットフォームを設計するための、高レベルの設計から運用展開まで、中核となるナレッジ チェーンを学習しました。
