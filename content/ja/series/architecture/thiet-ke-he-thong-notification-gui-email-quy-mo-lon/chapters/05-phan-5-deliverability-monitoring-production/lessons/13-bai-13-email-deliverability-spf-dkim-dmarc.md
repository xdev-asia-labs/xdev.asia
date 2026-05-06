---
id: 019e7a10-a113-7001-d001-f1e2d3c4b513
title: 'レッスン 13: 電子メールの到達性 — SPF、DKIM、DMARC'
slug: bai-13-email-deliverability-spf-dkim-dmarc
description: >-
  SPF、DKIM、DMARCによるメール認証。 IP レピュテーション、ドメインのウォームアップ、スパム
  スコアの最適化、リストの健全性、苦情処理、ブラックリストの監視、BIMI。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 13
section_title: 'パート 5: 到達性、監視、および運用'
course:
  id: 019e7a10-a100-7001-d001-f1e2d3c4b5a6
  title: 数百万の電子メールを送信する通知システムを設計する
  slug: thiet-ke-he-thong-notification-gui-email-quy-mo-lon
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8533" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8533)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1038" cy="224" r="16" fill="#fbbf24" opacity="0.09"/>
    <circle cx="976" cy="202" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="914" cy="180" r="24" fill="#fbbf24" opacity="0.07"/>
    <circle cx="852" cy="158" r="28" fill="#fbbf24" opacity="0.11"/>
    <circle cx="790" cy="136" r="32" fill="#fbbf24" opacity="0.05"/>
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
    <line x1="600" y1="124" x2="1100" y2="204" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="154" x2="1050" y2="224" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1057.7749907475932,204.5 1057.7749907475932,243.5 1024,263 990.2250092524068,243.5 990.2250092524068,204.5 1024,185" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🏗️ アーキテクチャ — レッスン 13</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 13: 電子メールの到達性 — SPF、DKIM、</tspan>
      <tspan x="60" dy="42">DMARC</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">数百万の電子メールを送信する通知システムを設計する</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 5: 到達性、監視、および運用</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

プロバイダーへの送信が成功しても、電子メールが受信箱に入ったわけではありません。到達性は、電子メール認証インフラストラクチャ、受信者リストの品質、電子メールの内容、および時間の経過とともに蓄積された評判の間の調整の問題です。

この記事では、大規模な送信システムが安定した受信トレイの配置を維持するために最も重要な部分に焦点を当てます。

---

## 1. 到達性は実際には何によって決まりますか?

### 4つの柱

|柱 |答えるべき質問 |
|----------|---------------------|
|認証 |このメールは本当に有効なドメインからの送信を許可されていますか? |
|評判 |このドメイン/IP には良い履歴がありますか、それとも悪い履歴がありますか? |
|リストの品質 |受信者は存在し、対話し、オプトインしますか? |
|コンテンツの品質 |コンテンツにはスパム、誤解を招く、またはポリシー違反の兆候が見られますか? |

### よくある誤解

- 正しい DKIM は、受信トレイへのアクセスを自動的に保証しません。
- 専用 IP を購入してもダーティ リストは修正されません。
- 追跡ピクセルを追加しすぎると、逆効果になる可能性があります。
- 新しいドメインでも初日から古いボリュームを送信すると、ほぼ確実にスロットルが発生します。

---

## 2. SPF: 代わりにあなたのドメインを送信できるのは誰ですか?

SPF は、ドメインへのメールの送信を許可するメール サーバーまたはプロバイダーを宣言する DNS レコードです。

### SPF レコードの例

```dns
example.com. IN TXT "v=spf1 include:amazonses.com include:sendgrid.net -all"
```

### 意味

- `v=spf1`：SPFバージョン。
- `include:amazonses.com`:SES を許可します。
- `include:sendgrid.net`: SendGridを有効にします。
- `-all`: 他のソースはすべて失敗します。

### 実践的なメモ

- 多すぎてはいけません `include` SPF ルックアップが制限されているためです。
- SPF はエンベロープ送信者をチェックしますが、常にではありません `From:` ユーザーが見ます。
- 複数の ESP を使用する場合は、DMARC との位置合わせを慎重に制御してください。

---

## 3. DKIM: コンテンツに署名して整合性を証明します

DKIM は電子メールのヘッダーにデジタル署名を追加します。メール受信者は DNS の公開キーを使用して、メールの内容が途中で変更されていないことを確認します。

### DKIM レコードの例

```dns
ses2026._domainkey.example.com. IN TXT (
  "v=DKIM1; k=rsa; "
  "p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAw..."
)
```

### ベストプラクティス

- プロバイダーまたは年/四半期ごとに明示的なセレクターを使用してキーをローテーションします。
- キーの長さは少なくとも 1024 ビットである必要があり、プロバイダーがサポートしている場合は 2048 ビットが望ましいです。
- 古い電子メールの検証を中断せずに、DKIM キーを定期的にローテーションします。

---

## 4. DMARC: ポリシーと調整

DMARC を使用すると、ドメイン所有者は SPF/DKIM 失敗メールの処理方法を宣言し、集計レポートを受け取ることができます。

### DMARC レコードの例

```dns
_dmarc.example.com. IN TXT "v=DMARC1; p=quarantine; pct=100; rua=mailto:dmarc-agg@example.com; ruf=mailto:dmarc-forensic@example.com; adkim=s; aspf=s"
```

### よく使用されるモード

|ポリシー |意味 | |を使用する場合
|----------|----------|----------|
| `p=none` |モニターのみ |導入の初期段階 |
| `p=quarantine` |失敗したメールをスパム/隔離にプッシュ |アライメントが安定したら |
| `p=reject` |絶対に拒否します |ドメインが適切に管理されている場合 |

### 安全な実装ロードマップ

1. から始める `p=none`。
2. 少なくとも数週間分の DMARC レポートを収集します。
3. 調整されていないすべての有効な電子メール ソースを処理します。
4.増加 `quarantine` それから `reject`。

---

## 5. ドメイン/IP のウォームアップと評判の管理

### 評判が重要なのはなぜですか?

Gmail、Outlook、Yahoo などのメールボックス プロバイダーは、メール送信動作を長期的に評価します。彼らは次のことに関心を持っています。

- ハードバウンス率。
- 苦情率。
- エンゲージされたオープン/クリックの割合。
- 送信頻度は自然に増えますか？
- 長期間非アクティブなアドレスに送信する割合。

### 新しいドメインのウォームアップ プラン

|週 |セグメント |ボリューム |
|----------|----------|----------|
| 1 |ユーザーが過去 7 日間にメールを開いた |低い |
| 2 |ユーザーは 30 日間エンゲージしました |わずかな増加 |
| 3 | 60 ～ 90 日に拡張 |制御された増加 |
| 4+ |リスト全体はクリーンです |実際の指標によると |

### それはすべきではありません

- 同じ新しいドメイン/IP からトランザクションとマーケティングの両方を同時に送信します。
- 明確な同意なしに共有リストを使用する。
- システムに過剰な容量があるからといって、ボリュームを 10 倍にスケールします。

---

## 6. リストの衛生管理と苦情処理

インフラストラクチャがどれほど優れていても、汚れた受信者リストを保存することはできません。

### 削除する必要があるアドレスの種類

|タイプ |アクション |
|-----|----------|
|ハードバウンス |今すぐ抑制 |
|苦情を申し立てたユーザー |永久的にまたはポリシーに従って抑制する |
|高リスクの役割アカウント | | を削除することを検討してください。
|多年生植物| 前に再エンゲージメントを入れる
|使い捨てメール |最初からブロックする |

### 内部抑制リスト

```sql
CREATE TABLE suppression_list (
  email TEXT PRIMARY KEY,
  reason TEXT NOT NULL,
  source TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  expires_at TIMESTAMPTZ
);
```

### 苦情処理の流れ

1. プロバイダーから Webhook の苦情を受け取ります。
2. マップバック `recipient` そして `message_id` 内部。
3. 受信者を抑制リストに追加します。
4. ドメイン/キャンペーンごとに苦情率が増加する場合は、送信率を下げます。
5. キャンペーンに低品質のコンテンツが含まれている場合は、マーケティング チームに警告します。

---

## 7. 電子メールの内容とスパム信号

### 一般的な不良信号

- 被験者は「無料!!! 限定オファー!!!」のように興奮しすぎています。
- 重い HTML、画像が多いがテキストは少ない。
- 奇妙なドメイン追跡リンク、一貫性のないブランド。
- 購読解除リンクがありません。
- 送信者名/ドメインがブランドと一致していません。

### 健全なコンテンツのチェックリスト

- 主題は明確であり、過剰なクリックベイトはありません。
- プレーンテキストのフォールバックがあります。
- 適切な住所と連絡先情報を持っていること。
- 簡単に見える購読解除リンクがあります。
- 可能であればブランドのサブドメインを使用してドメインを追跡します。

---

## 8. 到達性の監視

### 追跡する指標

|メトリクス |参考警告レベル |
|------|----------------------|
|ハードバウンス率 | > 2% |
|苦情率 | > 0.1% |
|配送料 |ベースラインと比較して大幅な減少 |
|開封率 |ドメイン別の異常なドロップ |
|スパムの配置 |多数のキャンペーンを継続的に増加 |

### 便利なツール

- Gmail ポストマスター ツール
- マイクロソフトSNDS
- DMARC 集計レポート アナライザー
- SES/SendGrid/Mailgunのプロバイダーダッシュボード

### BIMIとは何ですか?

BIMI では、一部のメールボックス プロバイダーの受信トレイにブランド ロゴを表示できますが、通常は適切な DMARC の適用が必要で、場合によってはブランド認証証明書が必要です。 SPF/DKIM/DMARC を置き換えるのではなく、その上に構築されます。

---

## 概要

到達性は長期戦です。スクリプトや単一の DNS レコードでは修正できません。適切な認証を実行し、注意深くウォームアップし、リストをクリーンに保ち、レピュテーションシグナルを毎日監視することを同時に行う必要があります。

**次の記事:** 通知システムを実際の本番システムと同様に見るために、監視、メトリクス、およびアラートを構築します。
