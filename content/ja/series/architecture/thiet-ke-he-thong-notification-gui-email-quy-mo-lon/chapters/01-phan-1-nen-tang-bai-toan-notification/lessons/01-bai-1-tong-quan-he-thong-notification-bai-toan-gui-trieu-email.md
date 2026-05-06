---
id: 019e7a10-a101-7001-d001-f1e2d3c4b501
title: 'レッスン 1: 通知システムの概要 — 何百万もの電子メールの送信の問題'
slug: bai-1-tong-quan-he-thong-notification-bai-toan-gui-trieu-email
description: >-
  数百万の電子メール送信の問題を分析します: 実際の使用例 (マーケティング キャンペーン、トランザクション電子メール、システム
  アラート)。機能要件と非機能要件。封筒裏の見積もり。通知チャネルを比較します。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 1
section_title: 'パート 1: 基礎 — 大規模な通知問題を理解する'
course:
  id: 019e7a10-a100-7001-d001-f1e2d3c4b5a6
  title: 数百万の電子メールを送信する通知システムを設計する
  slug: thiet-ke-he-thong-notification-gui-email-quy-mo-lon
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6379" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6379)"/>

  <!-- Decorations -->
  <g>
    <circle cx="873" cy="169" r="16" fill="#c084fc" opacity="0.14"/>
    <circle cx="646" cy="42" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="919" cy="175" r="24" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="692" cy="48" r="13" fill="#c084fc" opacity="0.11"/>
    <circle cx="965" cy="181" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="179" x2="1100" y2="259" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="209" x2="1050" y2="279" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1008.444863728671,162 1008.444863728671,196 979,213 949.555136271329,196 949.555136271329,162 979,145" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🏗️ アーキテクチャ — レッスン 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 1: 通知システムの概要 —</tspan>
      <tspan x="60" dy="42">数百万通のメール送信の問題</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">数百万の電子メールを送信する通知システムを設計する</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: 基礎 — 大規模な通知問題を理解する</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

あなたが 1,000 万人のユーザーを抱える e コマース会社のエンジニアであると想像してください。マーケティング チームは毎月、ユーザー ベース全体にニュースレターを送信したいと考えています。フラッシュ セールが開催されるたびに、数時間以内に何百万通ものメールを送信する必要があります。このボリュームを処理するにはシステムをどのように設計しますか?

このレッスンは、設計を開始する前に**問題を理解する**のに役立ちます。

---

## 1. 電子メール通知が依然として重要なのはなぜですか?

### 電子メールは最大のコミュニケーション チャネルです

|メトリクス |電子メール |プッシュ | SMS |
|----------|----------|----------|-----|
|グローバル ユーザー | 45億 | 35億 | 50億 |
|平均開封率 | 20-25% | 5-8% | 95% |
|メッセージあたりのコスト | $0.0001-0.001 |無料 | $0.01-0.05 |
|豊富なコンテンツ | ✅ HTML、画像 | ❌限定 | ❌ テキストのみ |
|アプリは必要ありません | ✅ | ❌ | ✅ |

### 実際の使用例

**トランザクション電子メール** (リアルタイム、重要):
- 注文確認メール
- OTP/パスワードのリセット
- 請求書/領収書

**マーケティング メール** (バッチ、大量):
- 週刊ニュースレター
- フラッシュセールのお知らせ
- 製品の推奨事項
- 再エンゲージメント キャンペーン

**システム通知**:
- DevOps チームへのアラート
- スケジュールされたレポート
- コンプライアンスの通知

---

## 2. 要件を分析する

### 機能要件

```
FR-1: Hệ thống phải gửi được email đến danh sách recipients
FR-2: Hỗ trợ email templates với dynamic content (personalization)
FR-3: Scheduling: gửi ngay hoặc đặt lịch gửi
FR-4: Tracking: open rate, click rate, bounce rate
FR-5: Unsubscribe management (CAN-SPAM compliance)
FR-6: Multi-provider support (failover giữa các ESP)
FR-7: Priority levels: critical > high > normal > low
```

### 非機能要件

```
NFR-1: Throughput: gửi 10 triệu email trong 4 giờ (~700 emails/giây)
NFR-2: Latency: transactional email < 30 giây từ trigger đến delivery
NFR-3: Availability: 99.95% uptime
NFR-4: Durability: không mất email đã queued
NFR-5: Scalability: horizontal scaling khi load tăng
NFR-6: Deliverability: inbox placement rate > 95%
```

---

## 3. 封筒裏の見積もり

### スループットの計算

```
Target: 10 triệu emails trong 4 giờ
= 10,000,000 / (4 × 3,600)
= 10,000,000 / 14,400
≈ 694 emails/giây

Peak (2x): ~1,400 emails/giây
With headroom (3x): ~2,100 emails/giây
```

### ストレージの見積もり

```
Email metadata per record: ~1 KB
  - recipient, subject, status, timestamps, tracking IDs

10 triệu emails × 1 KB = 10 GB metadata/campaign
Giữ 90 ngày history: 10 GB × 30 campaigns = 300 GB

Template storage: ~100 KB/template × 1000 templates = 100 MB
Total: ~300 GB database storage
```

### 帯域幅の推定

```
Average email size (rendered HTML): ~50 KB
10 triệu × 50 KB = 500 GB outbound/campaign
Throughput: 500 GB / 4 hours = 125 GB/h ≈ 280 Mbps
```

---

## 4. 大規模な電子メールを送信する際の課題

### 技術的な課題

1. **ESP からのレート制限**: Amazon SES は 200 メール/秒 (デフォルト)、SendGrid 10,000 メール/秒に制限します
2. **IP レピュテーション**: 送信が速すぎる → スパムとしてマークされる
3. **バウンス処理**: ハード バウンスはリストから直ちに削除する必要があります。
4. **接続管理**: パフォーマンスのための SMTP 接続プーリング
5. **メモリプレッシャー**: 数百万のレコードをメモリにロードする

### ビジネス上の課題

1. **配信性**: 電子メールはスパム フォルダーではなく、受信トレイに到達する必要があります。
2. **コンプライアンス**: CAN-SPAM、GDPR、CCPA
3. **コスト**: 数百万の電子メールを送信する際のコストを最適化します。
4. **タイミング**: 正しいタイムゾーンで最適な時間に送信します。
5. **パーソナライゼーション**: 受信者ごとに異なるコンテンツ

---

## 5. アーキテクチャの比較: ナイーブと本番環境

### ❌ 素朴なアプローチ

```
for each recipient in 10_million_list:
    render_template(recipient)
    send_email_via_smtp(recipient)
    save_to_database(status)
```

**問題:**
- 連続 → 1,000 万の損失 × 0.5 秒 = ~58 日 😱
- 単一障害点
- 失敗しても再試行しない
- リスト全体をロードするとメモリオーバーフローが発生する

### ✅ 制作アプローチ (プレビュー)

```
API Request → Notification Service → Message Queue
    → Worker Pool (N workers) → Email Providers (multi-provider)
    → Webhook callbacks → Status tracking → Analytics
```

次の記事では、このアーキテクチャについて詳しく説明します。

---

## 6. 通知システムの状況

### 有名な通知システム

|システム |スケール |技術スタック |
|----------|----------|---------------|
| Gmail/Google | 1 日あたり 3,000 億メール |カスタムインフラストラクチャ |
|アマゾンSES | 100 億以上/日 | AWS ネイティブ |
| SendGrid (Twilio) | 1,000 億以上/月 |カフカ、Go、Redis |
| Mailchimp (Intuit) | 6億/日 |カスタム、マンドリル |

### オープンソースの代替案

- **郵便** - メール配信プラットフォーム (Ruby)
- **Mailtrain** - 自己ホスト型ニュースレター (Node.js)
- **Listmonk** - ニュースレターとメーリング リスト (Go)
- **Novu** - 通知インフラストラクチャ (TypeScript)

---

## 概要

この記事では、次のことを学びました。
- 何百万もの電子メールを送信するという問題はなぜ単純ではないのでしょうか?
- 機能要件と非機能要件
- 封筒裏の見積もり
- 課題を解決する必要がある
- 実稼働アーキテクチャのプレビュー

**次の記事:** システム全体の上位設計アーキテクチャを設計します。
