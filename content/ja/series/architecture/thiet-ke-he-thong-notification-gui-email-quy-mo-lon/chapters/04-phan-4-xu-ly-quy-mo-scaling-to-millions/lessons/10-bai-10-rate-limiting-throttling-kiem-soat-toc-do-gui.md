---
id: 019e7a10-a110-7001-d001-f1e2d3c4b510
title: 'レッスン 10: レート制限とスロットリング — 送信速度の制御'
slug: bai-10-rate-limiting-throttling-kiem-soat-toc-do-gui
description: >-
  電子メール システムにレート制限が必要な理由。トークンバケツ、引き違い窓、漏れやすいバケツ。プロバイダー、ドメイン、IP
  によるマルチレベルのスロットル。適応レート制限は直帰率に基づいています。 Redis ベースの分散リミッター。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 10
section_title: 'パート 4: スケールの処理 — 数百万までのスケーリング'
course:
  id: 019e7a10-a100-7001-d001-f1e2d3c4b5a6
  title: 数百万の電子メールを送信する通知システムを設計する
  slug: thiet-ke-he-thong-notification-gui-email-quy-mo-lon
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5449" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5449)"/>

  <!-- Decorations -->
  <g>
    <circle cx="927" cy="271" r="10" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="754" cy="178" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="1081" cy="85" r="12" fill="#a78bfa" opacity="0.08"/>
    <circle cx="908" cy="252" r="13" fill="#a78bfa" opacity="0.09"/>
    <circle cx="735" cy="159" r="14" fill="#a78bfa" opacity="0.1"/>
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
    <line x1="600" y1="121" x2="1100" y2="201" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="151" x2="1050" y2="221" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1052.1769145362398,203 1052.1769145362398,239 1021,257 989.8230854637602,239 989.8230854637602,203 1021,185" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🏗️ アーキテクチャ — レッスン 10</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 10: レート制限とスロットリング — チェック</tspan>
      <tspan x="60" dy="42">送信速度の制御</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">数百万の電子メールを送信する通知システムを設計する</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: スケールの処理 — 数百万までのスケーリング</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

数百万もの電子メールをレンダリングしてキューに入れることができるシステムは、電子メールを安全に送信できない可能性があります。本当のボトルネックは多くの場合、**有効な送信速度**、つまり ESP、ドメイン/IP レピュテーション、およびダウンストリーム システムの吸収容量による制限にあります。

この記事では、1,000 万件の電子メール キャンペーンが成功するか、ドメイン全体がスパム フォルダーに移動されるかを決定するトラフィック規制レイヤーに焦点を当てます。

---

## 1. レート制限が必要なのはなぜですか?

### 実際の制限

|限られたソース |例 |しきい値を超えた場合の結果 |
|----------|------|---------------|
| ESP 送信クォータ | SES デフォルト 200 メール/秒 | `ThrottlingException`、キューのバックログ |
|ドメインの評判 |新しいドメインから突然 100 万件のメールが送信されました |スパムの掲載が急増 |
| IP の評判 |専用 IP はまだウォームアップされていません |バウンスと苦情が増加 |
| ISP の制限 | Gmail、Yahoo のドメインによるスロットリング |遅延配信、ソフト バウンス |
|内部システム |ワーカーが多すぎる、DB 更新が厚すぎる | CPU 使用率が高い、ロック競合 |

### スロットル層の目標

- 送信者の評判を保護します。
- 電子メールプロバイダーをトラフィックバーストから保護します。
- マーケティング電子メールよりもトランザクション電子メールを優先します。
- 短いスパイクが発生してクラッシュするのではなく、安定したスループットを維持します。
- キューのバックログを管理下に置きます。

---

## 2. 一般的なアルゴリズム

### 簡単な比較

|アルゴリズム |強み |弱点 |に適しています |
|---------------|-----------|----------|-------------|
|固定ウィンドウ |実装が簡単 |ウィンドウ境界でバースト |シンプルカウンター |
|スライディングウィンドウ |より正確に |より多くの状態を消費します |ドメインごとの制限 |
|漏れやすいバケツ |出力は等しい |有効なトラフィックバーストではやや硬い |交通をスムーズにする |
|トークンバケット |制御されたバーストを許可します。状態を同期する必要があります | ESP/API スロットル |

### 電子メール システムに関する推奨事項

- **トークン バケット**を使用して、プロバイダーおよび IP プールごとに制限します。
- キャンペーン/ドメインごとの苦情率、直帰率、開封率には **スライディング ウィンドウ** を使用します。
- **優先度を意識したスケジューラ**を使用して、重要な電子メールがマーケティングに消費されるのを防ぎます。

---

## 3. マルチレベルのスロットリングアーキテクチャ

```
Campaign Queue
    │
    ▼
Priority Scheduler
    │
    ├── Check provider quota (SES / SendGrid / Mailgun)
    ├── Check domain quota (gmail.com / yahoo.com / outlook.com)
    ├── Check IP pool quota
    ├── Check campaign quota
    └── Check suppression / reputation guard
    │
    ▼
Dispatch Queue
    │
    ▼
Workers -> ESP
```

### 合理的なテスト順序

1. サプレッションリストとバウンス履歴を確認します。
2. メッセージの優先度クラスを確認します。
3. プロバイダーごとのクォータを確認します。
4. 受信者ドメインごとにクォータを確認します。
5. 送信者 IP / 専用 IP プールに応じてクォータを確認します。
6. 失敗した場合は、ドロップするのではなく、再スケジュールします。

### 優先ポリシーの例

|優先事項 |使用例 | SLA |ルール |
|----------|----------|-----|----------|
|クリティカル | OTP、パスワードをリセット | < 30 代 |常に予約容量が存在します。
|高い |注文確認 | < 2 分 |マーケティングによってブロックされていない |
|通常 |製品のアップデート | 15 分未満 |動的なクォータ共有 |
|低い |ニュースレター、点滴キャンペーン |スケジュール通り |悪評が出る前に打ち切り |

---

## 4. Redis を使用した分散レート リミッター

### Token bucket model

```python
import time
import redis

class RedisTokenBucket:
    def __init__(self, client: redis.Redis, key: str, rate: int, burst: int):
        self.client = client
        self.key = key
        self.rate = rate
        self.burst = burst

    def allow(self, tokens: int = 1) -> ブール:
        now_ms = int(time.time() * 1000)
        スクリプト = """
        ローカルキー = KEYS[1]
        ローカルの now_ms = tonumber(ARGV[1])
        ローカル レート = tonumber(ARGV[2])
        ローカル バースト = tonumber(ARGV[3])
        ローカル要求 = tonumber(ARGV[4])

        ローカルデータ = redis.call('HMGET', キー, 'トークン', 'updated_at')
        ローカルトークン = tonumber(data[1])
        ローカルの updated_at = tonumber(data[2])

        トークン == nil の場合
          トークン = バースト
          updated_at = now_ms
        終わり

        ローカル経過 = math.max(0, now_ms - updated_at)
        ローカル補充 = (経過 / 1000.0) * レート
        トークン = math.min(バースト, トークン + リフィル)

        ローカルで許可 = 0
        トークン >= 要求された場合
          トークン = トークン - 要求された
          許可 = 1
        終わり

        redis.call('HMSET', キー, 'トークン', トークン, 'updated_at', now_ms)
        redis.call('PEXPIRE', キー, 60000)
        返品可能
        「」

        result = self.client.eval(script, 1, self.key, now_ms, self.rate, self.burst, トークン)
        戻り結果 == 1
```

### 従うべき鍵

```テキスト。テキスト
レート:プロバイダー:ses
レート:プロバイダー:sendgrid
料金:ドメイン:gmail.com
料金:ドメイン:yahoo.com
レート:IP プール:warm-01
料金:キャンペーン:camp_flash_sale_april
```

重要な点は、リミッターは **すべてのワーカー間で共有される**必要があるということです。そうしないと、各ワーカーは自分には割り当てがあると思い込み、システムはすぐに制限を超えてしまいます。

---

## 5. 信号到達性に基づく適応型スロットリング

送信速度は固定すべきではありません。現実からの信号に反応する必要があります。

### 監視する信号

|信号 |意味 |アクション |
|--------|---------|-----------|
|ソフトバウンスが増加します | ISP はトラフィックを遅延します |送信レートが 20 ～ 40% オフ |
|苦情率の増加 |コンテンツ/リストの品質が悪い |大幅削減、キャンペーン一時停止 |
|開封率が異常に低下 |スパムの掲載が増加 |速度を下げ、IP/ドメインの組み合わせを変更する |
|キューの遅延が大きすぎます |システムにワーカー/クォータがありません |従業員を増やすかETAを延長する |

### ポリシーエンジンの例

```パイソン
def compute_send_rate(base_rate, メトリクス):
    レート = 基本レート

    metrics.soft_bounce_rate > 0.03の場合:
        率 *= 0.7

    metrics.complaint_rate > 0.001の場合:
        率 *= 0.5

    metrics.provider_throttling_rate > 0.05の場合:
        率 *= 0.8

    metrics.critical_queue_ Depth > 1000の場合:
        レート = 最大(レート, metrics.reserve_for_critical)

    戻り値 max(int(rate), 10)
```

### 原則

- マーケティング トラフィックは最初に犠牲になる場所です。
- トランザクション トラフィックには固定クォータ予約が必要です。
- 苦情の急増が非常に高いか、ESP の一時停止が必要な場合を除き、クォータをすぐに 0 に減らさないでください。

---

## 6. IP ウォーミングとドメインのウォームアップ

よくある間違いは、新しいドメイン/IP を使用したにもかかわらず、初日にフルロードを送信してしまうことです。

### 新しい専用 IP のウォームアップ ロードマップのサンプル

|日付 | 1 日あたりの最大メール数 |オブジェクト |
|----------|--------|----------|
| 1 | 5,000 |ユーザーの関与度は高い |
| 2 | 10,000 |セグメントはクリーン、最近アクティブ |
| 3 | 20,000 |わずかな拡張 |
| 4 | 40,000 |混合トラフィックを開始する |
| 5 | 80,000 |苦情/返送に対応する |
| 6 | 160,000 |スケーリングを続行 |
| 7+ |評判によると |メトリクスに問題がない場合にのみ増加します |

### ウォームアップ中のガードレール

- 明確にオプトインした受信者にのみ送信します。
- 開封率/クリック率が高いセグメントを優先します。
- 古い低品質のリストを再利用しないでください。
- 利用可能な場合は、Gmail ポストマスター ツールと Microsoft SNDS を監視します。

---

## 7. 一般的な故障モード

### リミッターの設計が間違っている場合

1. **ワーカーごとのローカル リミッター**: 各ワーカーが「正しい」場合でも、合計スループットがクォータを超えます。
2. **予備容量なし**: マーケティング キャンペーンがすべてのトークンを消費しているため、OTP が遅くなります。
3. **プロバイダーに従って調整するが、ドメインを忘れた**: ESP は引き続き受信しますが、Gmail は遅延を開始します。
4. **無限再試行**: 再試行の嵐によりスロットルが増幅されます。

### チェックリストの作成

- プロバイダー、ドメイン、IP、キャンペーンごとに割り当てがあります。
- クリティカルなトラフィック用に予備を備えています。
- 手動一時停止キャンペーンのメカニズムがあります。
- フィードバック ループに基づいた適応スロットリングを備えています。
- 現在の送信速度と残りのクォータを表示するダッシュボードがあります。

---

## 概要

レート制限は単なる技術的な問題ではなく、到達性を保護するための重要な層です。優れたシステムは、許可されている場合は迅速に送信し、信号が悪い場合は速度を落とし、最も重要なトラフィックを常に優先する方法を知っている必要があります。

**次の記事:** バッチ処理とワーカー プールを編成して、メモリ不足やデータベースの詰まりを発生させずに数百万の受信者を効率的に処理できるようにします。
