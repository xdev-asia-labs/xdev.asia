---
id: 019e7a10-a112-7001-d001-f1e2d3c4b512
title: 'レッスン 12: 再試行、デッドレターキュー、エラー処理'
slug: bai-12-retry-dead-letter-queue-error-handling
description: 再試行戦略、指数関数的バックオフ、ジッター、デッドレターキュー設計、エラー分類、有害メッセージ処理、補償ロジック、アラート。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 12
section_title: 'パート 4: スケールの処理 — 数百万までのスケーリング'
course:
  id: 019e7a10-a100-7001-d001-f1e2d3c4b5a6
  title: 数百万の電子メールを送信する通知システムを設計する
  slug: thiet-ke-he-thong-notification-gui-email-quy-mo-lon
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3687" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3687)"/>

  <!-- Decorations -->
  <g>
    <circle cx="990" cy="140" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="880" cy="90" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="770" cy="40" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="660" cy="250" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1050" cy="200" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="120" x2="1100" y2="200" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="150" x2="1050" y2="220" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1050.3108891324553,202.5 1050.3108891324553,237.5 1020,255 989.6891108675446,237.5 989.6891108675446,202.5 1020,185" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🏗️ アーキテクチャ — レッスン 12</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 12: 再試行、デッドレターキュー、エラー</tspan>
      <tspan x="60" dy="42">取り扱い</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">数百万の電子メールを送信する通知システムを設計する</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: スケールの処理 — 数百万までのスケーリング</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

大規模化すると、エラーは例外ではなくなり、システムのデフォルト状態になります。 SMTP タイムアウト、プロバイダー 429、遅い DNS ルックアップ、Webhook が返されない、データベース ロック競合、ペイロード データ エラー。本番環境に対応するには、アーキテクチャの中心部分としてエラー処理を設計する必要があります。

---

## 1. 再試行について話す前にエラーを分類する

再試行は、エラーが一時的な場合にのみ有効です。エラーが永続的であり、それでも再試行される場合は、再試行の嵐が発生しています。

### エラー分類法

|エラーグループ |例 |再試行はありますか? |アクション |
|----------|----------|----------||----------|
|一時的なインフラストラクチャ |ネットワークタイムアウト、DNSタイムアウト |はい |指数バックオフ |
|プロバイダーのスロットル | HTTP 429、SMTP 421 |はい |減速+リトライ |
|一時メールボックスの問題 |メールボックスがいっぱい、グレーリスト |限定 |遅い再試行 |
|永続的な受信者の失敗 |ユーザーが不明、無効なドメイン |いいえ |マークが跳ね返った |
|コンテンツ/ポリシーの失敗 |ブロックされたコンテンツ、ポリシー違反 |いいえ |手動レビューに移動 |
|内部バグ | null フィールド、不正なテンプレート レンダリング |すぐにではありません |分離、DLQ |

### 重要なルール

- 感情に基づいて再試行するのではなく、**エラーの種類**に従って再試行してください。
- 十分な分類データを提供するために、プロバイダーからの元のエラー コードを保存します。
- プロバイダーエラーから内部エラークラスへの明確なマッピングを定義します。

---

## 2. 合理的な再試行ポリシー

### ポリシーマトリックスの例

|エラークラス |最大再試行回数 |遅延ポリシー |
|---------------|---------------|--------------|
|ネットワークタイムアウト | 5 | 5 代、15 代、30 代、60 代、120 代 |
|プロバイダースロットル | 8 | 10 秒 + ジッター、適応スロットルに関連 |
|ソフトバウンス | 3 | 15分、1時間、6時間 |
|レンダリングの失敗 | 0 | DLQ | 直進してください
|無効な受信者 | 0 |永続的な障害をマークする |

### ジッターを伴う指数関数的バックオフ

```python
import random

def next_retry_delay(base_seconds: int, attempt: int, max_seconds: int = 3600) -> int:
    delay = min(base_seconds * (2 ** (attempt - 1)), max_seconds)
    jitter = random.randint(0, max(1, delay // 4))
    return delay + jitter

for attempt in range(1, 6):
    print(attempt, next_retry_delay(5, attempt))
```

ジッターは、ワーカーが同時にエラーを再試行し、プロバイダーに追加のスパイクを引き起こすことを防ぐのに役立ちます。

---

## 3. 再試行キューとスケジュールされた再処理

### なぜすぐにメインキューにプッシュバックしないのでしょうか?

ジョブが失敗し、すぐにメイン キューに戻ると、ワーカーはすぐにリロードされ、無用なホット ループが発生する可能性があります。再試行には**意図的なタイムアウト**が必要です。

### 人気モデル

```
send-queue
   │ success
   ├──────────────▶ sent-status
   │
   │ transient failure
   ▼
retry-scheduler
   │
   ├── retry in 5s
   ├── retry in 1m
   └── retry in 15m
   │
   ▼
send-queue
   │
   └── after max retry -> DLQ
```

### 遅延再試行用の Redis Sorted Set

```python
def schedule_retry(redis_client, message_id: str, payload: dict, retry_at_epoch: int):
    redis_client.zadd(
        'email:retry:zset',
        {json.dumps({'message_id': message_id, 'payload': payload}): retry_at_epoch}
    )
```

別のスケジューラが期限切れのアイテムをポーリングし、メイン キューに再発行します。

---

## 4. Dead Letter Queue はどのように設計されていますか?

DLQ は埋め立て地ではありません。ここは調査、修理、管理された再処理のための隔離エリアです。

### メッセージが DLQ に入力されるのはいつですか?

- 再試行が多すぎます。
- ペイロードが壊れているか、スキーマに違反しています。
- テンプレートのレンダリングエラーが繰り返される。
- プロバイダーはポリシー/永続的な障害エラーを返しますが、監査が必要です。
- 不明なエラー クラスには安全なマッピングがありません。

### DLQ メッセージに保持するコンテンツ

```json
{
  "message_id": "msg_019e7a10_dead1",
  "campaign_id": "camp_flash_sale_april",
  "recipient": "bad-user@example.com",
  "error_class": "rendering_failure",
  "error_code": "TEMPLATE_VARIABLE_MISSING",
  "error_message": "variable first_name is required",
  "attempt_count": 3,
  "last_failed_at": "2026-04-01T14:00:00Z",
  "original_payload": {
    "template_id": "flash_sale_v2",
    "variables": {"discount_code": "FLASH30"}
  }
}
```

### DLQ の動作原理

- DLQ は、キャンペーン、プロバイダー、エラー クラスごとに検索可能である必要があります。
- ダッシュボードのトップエラータイプがあります。
- 再処理はツール/フロー制御を通じてのみ許可されます。
- 根本原因がわからない場合は、DLQ 全体を自動的に再駆動しないでください。

---

## 5. 毒のあるメッセージと孤立

有害なメッセージは、ワーカーをクラッシュさせたり、無期限に繰り返したりする原因となるメッセージです。隔離しないと、消費者グループ全体が破壊されてしまいます。

### 対処方法

1. 不明なエラーまたは内部エラーに対する試行制限が非常に低い。
2. 解析/レンダリング/送信ステップを明確な境界で囲みます。
3. 記録 `error_class = poison_message` ワーカーが同じペイロードで複数回失敗した場合。
4. DLQ に切り替えて、勤務中のエンジニアに警告します。

### 送信前の防御検証

```python
def validate_job(job):
    required_fields = ['message_id', 'recipient', 'template_id', 'campaign_id']
    missing = [field for field in required_fields if not job.get(field)]
    if missing:
        raise ValueError(f"Missing required fields: {missing}")

    if '@' not in job['recipient']['email']:
        raise ValueError('Invalid recipient email')

    return True
```

早期の検証は、パイプラインに深く入る前にエラーを検出するのに役立ちます。

---

## 6. 外部プロバイダー用のサーキットブレーカー

プロバイダーで広範囲にわたるエラーが発生している場合、再試行が繰り返されると状況は悪化するだけです。

### ステートマシンはシンプルです

|状態 |意味 |アクション |
|----------|-----------|----------|
|閉店 |通常のプロバイダ |通常通り送信 |
|開く |プロバイダーエラーがしきい値を超えています |トラフィックを停止し、フェイルオーバーに切り替える |
|半開き |トラフィックを減らして再試行してください |リカバリレビュー |

### 疑似コード

```python
class CircuitBreaker:
    def __init__(self, failure_threshold=10, recovery_seconds=60):
        self.failure_threshold = failure_threshold
        self.recovery_seconds = recovery_seconds
        self.failures = 0
        self.state = 'closed'

    def on_success(self):
        self.failures = 0
        self.state = 'closed'

    def on_failure(self):
        self.failures += 1
        if self.failures >= self.failure_threshold:
            self.state = 'open'
```

サーキット ブレーカーは **プロバイダー フェールオーバー戦略**に接続する必要があります。代替パスがなければブレーカーが開かれない場合、キューはそのまま静止したままになります。

---

## 7. 補償ロジックと一貫した状態

プロバイダーが電子メールを受信した可能性がありますが、DB を更新する前にワーカーが失敗しました。補償がなければ、メールが送信されたかどうかもわかりません。

### 対処方法

- マウント `message_id` プロバイダーによって送信されたメタデータの内部。
- Webhook またはコールバックを受信して​​状態を調整します。
- 定期的なジョブ調整を行う: 送信ログをプロバイダー イベントと比較します。
- ステータスが不確かな場合は、確認してください `unknown` 失敗を想定するのではなく。

### 推奨される内部ステータス

```text
pending -> processing -> sent_to_provider -> delivered
                           │
                           ├-> deferred
                           ├-> bounced_permanent
                           ├-> bounced_transient
                           └-> failed_internal
```

---

## 8. アラートと最小限のランブック

### 警告が表示されるはずです

- DLQ に入るメッセージの割合が劇的に増加しました。
- 5 分間でエラークラスが 20% 以上を占めます。
- メインプロバイダーでサーキットブレーカーが開きます。
- 再試行キューのバックログは増加しますが、スループットは低下します。
- 新しい不明なエラー コードが表示されます。

### オンコールのための短いランブック

1. 新しいプロバイダー、データ、またはデプロイされたコードのエラーを特定します。
2. キャンペーンまたはフェイルオーバープロバイダーを一時停止する必要があるかどうかを確認します。
3. DLQ で最上位のエラー クラスといくつかのサンプル ペイロードを表示します。
4. 根本原因が解決されたことを確認した後にのみ再運転してください。

---

## 概要

Retry と DLQ はアフターマーケットのアクセサリではありません。これらは、システムが混乱を引き起こすことなくエラーを許容するために必須のメカニズムです。優れた設計では、エラーを分類し、戦略的に再試行し、有害なメッセージを隔離し、調査のために十分な痕跡を残す方法を知っている必要があります。

**次の記事:** 送信機能から、受信トレイに到達する機能、つまり SPF、DKIM、DMARC、レピュテーション管理による配信可能性へと移行します。
