---
id: 019d8a21-c103-7001-d001-e1f2a3b4c503
title: 'レッスン 3: レイテンシーとスループット、および可用性と一貫性'
slug: bai-3-latency-vs-throughput-availability-vs-consistency
description: >-
  レイテンシー、スループット、およびそれらの関係。 CAP 定理 (一貫性、可用性、パーティション耐性)。 CP システムと AP システム。一貫性パターン
  (強い、結果的、弱い)。可用性パターン (フェイルオーバー、レプリケーション)。数値で表される可用性 (99.9%、99.99%)。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 3
section_title: 'パート 1: システム設計の基礎'
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 'システムアーキテクチャ: ゼロからヒーローへ'
  slug: system-architecture-from-zero-to-hero
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8564" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8564)"/>

  <!-- Decorations -->
  <g>
    <circle cx="961" cy="93" r="24" fill="#34d399" opacity="0.08"/>
    <circle cx="822" cy="114" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="683" cy="135" r="10" fill="#34d399" opacity="0.14"/>
    <circle cx="1044" cy="156" r="33" fill="#34d399" opacity="0.07"/>
    <circle cx="905" cy="177" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="103" x2="1100" y2="183" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="133" x2="1050" y2="203" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="985.9089653438086,134 985.9089653438086,172 953,191 920.0910346561914,172 920.0910346561914,134 953,115" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🏗️ アーキテクチャ — レッスン 3</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 3: レイテンシとスループットの比較</tspan>
      <tspan x="60" dy="42">可用性と一貫性</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">システムアーキテクチャ: ゼロからヒーローへ</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: システム設計の基礎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

システム設計では、すべての決定が **トレードオフ** になります。マスターする必要がある 2 つの最も重要なトレードオフ:
- **レイテンシとスループット:** 1 つのリクエストでは高速ですが、多くのリクエストを処理する場合は高速です
- **可用性 vs 一貫性:** 常に応答性 vs 常に正しい

---

## 1. レイテンシーとスループット

### 1.1 定義

```
Latency:     Thời gian để hoàn thành 1 action (ms)
             → "Bao lâu để nhận response?"

Throughput:  Số actions hoàn thành trong 1 đơn vị thời gian (RPS)
             → "Bao nhiêu requests/giây?"
```

### 1.2 例え: 高速道路

```
Latency = Thời gian 1 xe đi từ A → B
  → Phụ thuộc: tốc độ xe, khoảng cách, số trạm dừng

Throughput = Số xe đến B mỗi giờ
  → Phụ thuộc: số làn đường, latency, mật độ xe
```

### 1.3 関係

システムが過負荷になると、レイテンシーとスループットは**逆**になることがよくあります。

```
Load thấp:    Latency thấp ✓   Throughput thấp
Load vừa:     Latency thấp ✓   Throughput cao ✓   ← Sweet spot
Load cao:     Latency tăng ✗   Throughput đạt max
Quá tải:      Latency rất cao  Throughput giảm ✗   ← Thrashing
```

### 1.4 レイテンシーの最適化

|エンジニアリング | | によってレイテンシを短縮します。
|----------|---------------------|
| **キャッシング** |再計算/クエリを避ける |
| **CDN** |ユーザーの近くにコンテンツを配置する |
| **接続プーリング** |新しい接続の作成を避ける |
| **非同期処理** |最初に応答を返し、後で処理します。
| **データの局所性** |データをコンピューティングの近くに配置する |
| **インデックス作成** |クエリを高速化 |

### 1.5 スループットの最適化

|エンジニアリング | | によってスループットを向上させます。
|------|----------------------|
| **水平スケーリング** |サーバーを追加する |
| **バッチ処理** |複数の操作を収集する |
| **並列処理** |同時処理 |
| **負荷分散** |負荷を均等に分散します |
| **キューベース** |トラフィックの急増を吸収 |

---

## 2. CAP 定理

### 2.1 3 つのプロパティ

CAP 定理によれば、分散システムでは ** 3 つ中 2** のプロパティのみを保証できます。

```
         Consistency (C)
              ╱ ╲
             ╱   ╲
            ╱     ╲
           ╱  Chọn  ╲
          ╱   2 / 3   ╲
         ╱             ╲
Availability (A) ──── Partition Tolerance (P)
```

|属性 |意味 |
|----------|----------|
| **一貫性** |読み取りごとに最新のデータまたはエラーが受信されます。
| **在庫状況** |すべてのリクエストは応答を受け取ります (最新の保証はありません)。
| **パーティション トレランス** |ネットワークが分断されてもシステムは動作する |

### 2.2 選択する理由は何ですか?

実際には、**ネットワーク パーティションは常に可能** (P は必須) なので、実際には次のいずれかを選択します。

```
CP System (Consistency + Partition Tolerance):
  → Khi network partition xảy ra, từ chối request thay vì trả data cũ
  → Ví dụ: Banking system, Inventory system
  → Tools: MongoDB (default), HBase, Redis

AP System (Availability + Partition Tolerance):
  → Khi network partition xảy ra, trả data có thể cũ nhưng luôn phản hồi
  → Ví dụ: Social media feed, DNS, Shopping cart
  → Tools: Cassandra, DynamoDB, CouchDB
```

### 2.3 実践例

**シナリオ: 銀行送金**

```
User A chuyển 1M VNĐ cho User B

CP System (Ngân hàng chọn cách này):
  Network partition → "Giao dịch tạm thời không khả dụng"
  → Tốt hơn là trừ tiền A nhưng chưa cộng tiền B

AP System (Không phù hợp):
  Network partition → Vẫn xử lý giao dịch
  → Rủi ro: Tiền bị trùng lặp hoặc mất
```

**シナリオ: Facebook ニュースフィード**

```
AP System (Facebook chọn cách này):
  Network partition → Hiển thị feed cũ hơn 1-2 giây
  → Chấp nhận được, user không nhận ra

CP System (Không phù hợp):
  Network partition → "Service unavailable"
  → 2 tỷ users không xem được feed → thảm họa
```

---

## 3. 一貫性パターン

### 3.1 強力な一貫性

```
Write → Tất cả replicas đồng bộ → Rồi mới return success

Client → Write(x=5) → Master ─── Sync ──► Replica 1 (x=5) ✓
                              └── Sync ──► Replica 2 (x=5) ✓
                              └── Return success

Bất kỳ Read nào sau đó đều trả về x=5
```

**使用例:** 銀行業務、在庫、予約システム
**トレードオフ:** 待ち時間が長くなります (すべてのレプリカを待つ必要があります)

### 3.2 最終的な整合性

```
Write → Return success ngay → Replicas sẽ đồng bộ sau

Client → Write(x=5) → Master (x=5) → Return success ngay
                              │
                     Async ───┼──► Replica 1 (x=5)  (sau 10ms)
                              └──► Replica 2 (x=5)  (sau 50ms)

Read ngay sau write: có thể trả về x=3 (giá trị cũ)
Read sau 50ms: x=5 (đã đồng bộ)
```

**使用例:** ソーシャル メディア、DNS、電子メール、ショッピング カート
**トレードオフ:** 短期間であれば古いデータを読み取ることができます

### 3.3 弱い一貫性

```
Write → Không đảm bảo read sẽ thấy write

Ví dụ: Video call
  Khi mất kết nối 3 giây, bạn KHÔNG nghe lại
  những gì đã nói trong 3 giây đó
```

**使用例:** VoIP、ビデオチャット、リアルタイムゲーム、ライブストリーミング

### 3.4 比較

|パターン |レイテンシ |データの鮮度 |使用例 |
|----------|-----------|-----------|----------|
| **強い** |曹操 |常に最新 |銀行業務、予約 |
| **最終的に** |低い |ついに最新版になります |ソーシャルメディア、分析 |
| **弱い** |非常に低い |データが失われる可能性があります | VoIP、ゲーム |

---

## 4. 可用性パターン

### 4.1 フェイルオーバー

#### アクティブ-パッシブ (マスター-スレーブ)

```
Normal:
  Client → Active Server (xử lý traffic)
           Passive Server (standby, nhận heartbeat)

Failover:
  Active Server ✗ (crash)
  Passive Server → Trở thành Active
  Client → New Active Server
```

- **回復時間:** ホット スタンバイ = 秒、コールド スタンバイ = 分
- **欠点:** パッシブサーバーがアイドル状態になる (リソースの無駄)

#### アクティブ-アクティブ (マスター-マスター)

```
Normal:
  Client ──► Active Server 1 (xử lý 50% traffic)
         └─► Active Server 2 (xử lý 50% traffic)

Failover:
  Server 1 ✗ (crash)
  Server 2 → Xử lý 100% traffic
```

- **利点:** リソースをより有効に活用できます。
- **欠点:** より複雑で、データの競合を処理する必要がある

### 4.2 レプリケーション

```
Master-Slave Replication:
  Master ──write──► Slave 1 (read)
         └─write──► Slave 2 (read)
         └─write──► Slave 3 (read)

Master-Master Replication:
  Master 1 ◄──sync──► Master 2
  (read/write)         (read/write)
```

---

## 5. 数字で見る可用性

### 5.1 共通 SLA テーブル

|可用性 |ダウンタイム/年 |ダウンタイム/月 |ダウンタイム/週 |
|---------------|---------------|--------------|--------------|
| 99% (9 が 2 つ) | 3.65日 | 7.31時間 | 1.68時間 |
| 99.9% (9 が 3 つ) | 8.77時間 | 43.83分 | 10.08分 |
| 99.99% (9 が 4 つ) | 52.6分 | 4.38分 | 1.01分 |
| 99.999% (ファイブナイン) | 5.26分 | 26.3秒 | 6.05秒 |

### 5.2 システムの可用性を計算する

**シリアルコンポーネント (両方が動作する必要があります):**

```
Availability(total) = Availability(A) × Availability(B)

Ví dụ: Web Server (99.9%) → Database (99.9%)
Total = 99.9% × 99.9% = 99.8%
```

**並列コンポーネント (必要な操作は 1 つだけ):**

```
Availability(total) = 1 - (1 - Av(A)) × (1 - Av(B))

Ví dụ: Server 1 (99.9%) || Server 2 (99.9%)
Total = 1 - (0.001 × 0.001) = 99.9999%
```

### 5.3 高可用性のための設計

```
Low HA:     Client → Server → Database
            Availability ≈ 99.9% × 99.9% = 99.8%

High HA:    Client → LB → Server 1 ──► DB Master
                        → Server 2 ──► DB Replica
            LB: 99.99%
            Servers: 1-(1-0.999)² = 99.9999%
            DB: 1-(1-0.999)² = 99.9999%
            Total ≈ 99.99%
```

---

## 6. SLI、SLO、SLA

### 6.1 定義

```
SLI (Service Level Indicator):
  → Metric đo lường: latency p99, error rate, uptime
  → "Hiện tại response time p99 là 180ms"

SLO (Service Level Objective):
  → Mục tiêu internal team đặt ra
  → "Response time p99 phải < 200ms"

SLA (Service Level Agreement):
  → Hợp đồng với khách hàng
  → "Nếu uptime < 99.9%, hoàn tiền 10%"
```

### 6.2 実践例

```
AWS S3 SLA:
  99.9% availability → Credit 10%
  99.0% availability → Credit 25%
  < 99.0%            → Credit 100%
```

---

## 7. まとめ

|コンセプト |キーポイント |
|----------|----------|
|レイテンシ | 1 リクエストの処理時間、目標 < 100-200ms |
|スループット |リクエスト数/秒、水平スケーリングでスケール |
| CAP定理 | CP (一貫性) または AP (可用性) を選択します。
|一貫性 |強い → 最終的な → 弱い (トレードオフ レイテンシー) |
|可用性 | 「9 秒」で測定され、冗長性が向上 |
| SLA/SLO/SLI |コミットメント → 目標 → 指標 |

---

## 演習

1. **CAP 分析:** 航空券予約管理システムは CP と AP のどちらを選択すべきですか?それぞれの選択の理由と結果を説明します。

2. **可用性の計算:** システムには、LB (99.99%) → 3 つの並列アプリケーション サーバー (各サーバー 99.9%) → 2 つの並列 DB サーバー (各 DB 99.95%) が含まれます。全体的な可用性を計算します。

3. **一貫性パターン:** 電子商取引システムの場合、(a) 在庫数、(b) 製品レビュー、(c) ユーザー プロフィール写真、(d) 支払いトランザクションについて適切な一貫性パターンを決定します。
