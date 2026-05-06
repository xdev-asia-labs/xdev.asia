---
id: 019d8a21-c105-7001-d001-e1f2a3b4c505
title: 'レッスン 5: ロード バランサー - インテリジェントな負荷分散'
slug: bai-5-load-balancer-phan-phoi-tai-thong-minh
description: >-
  ロードバランサーとは何ですか?なぜ必要ですか?レイヤ 4 とレイヤ 7 の負荷分散。アルゴリズム: ラウンド ロビン、最小接続、IP
  ハッシュ、重み付け。リバースプロキシとロードバランサー。健康診断。アクティブ-アクティブとアクティブ-パッシブ。 HAProxy と Nginx の実践。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 5
section_title: 'パート 2: インフラストラクチャ コンポーネント'
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 'システムアーキテクチャ: ゼロからヒーローへ'
  slug: system-architecture-from-zero-to-hero
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1194" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1194)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1066" cy="288" r="14" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="1032" cy="114" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="998" cy="200" r="20" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="964" cy="286" r="8" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="930" cy="112" r="26" fill="#2dd4bf" opacity="0.05"/>
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
    <polygon points="955.2390923627308,96.5 955.2390923627308,139.5 918,161 880.7609076372692,139.5 880.7609076372692,96.50000000000001 918,75" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🏗️ アーキテクチャ — レッスン 5</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 5: ロード バランサー - スムーズな負荷分散</tspan>
      <tspan x="60" dy="42">ミン</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">システムアーキテクチャ: ゼロからヒーローへ</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: インフラストラクチャ コンポーネント</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

システムに複数のサーバーがある場合は、サーバーにトラフィックを分散するコンポーネントである **ロード バランサー** が必要です。これは、高可用性アーキテクチャにおける最も重要な構成要素です。

---

## 1. ロードバランサとは何ですか?

### 1.1 問題

```
Không có Load Balancer:
  1M users ──────► 1 Server (quá tải → crash!)

Có Load Balancer:
  1M users ──► Load Balancer ──► Server 1 (333K users)
                              ──► Server 2 (333K users)
                              ──► Server 3 (333K users)
```

### 1.2 利点

|メリット |説明 |
|----------|----------|
| **負荷を分散する** |トラフィックをサーバー間で均等に分割する |
| **高可用性** |サーバーに障害が発生 → トラフィックが別のサーバーに移動 |
| **SSL 終了** | LB で HTTPS を復号化し、バックエンドは HTTP を使用します。
| **健康診断** |異常なサーバーを自動的に削除 |
| **セッションの永続性** |同じユーザーを同じサーバーに送信する |
| **DDoS 軽減** |悪意のあるトラフィックを吸収してフィルタリング |

---

## 2. レイヤー 4 とレイヤー 7 のロード バランシング

### 2.1 レイヤ 4 (トランスポート層)

```
Client ──► LB (nhìn IP + Port) ──► Backend Server

LB quyết định dựa trên:
  - Source IP/Port
  - Destination IP/Port
  - TCP/UDP protocol

KHÔNG nhìn vào nội dung request (URL, headers, cookies)
```

**利点:** 高速 (コンテンツ解析なし)、シンプル
**欠点:** URL/コンテンツに基づいてルーティングできない

### 2.2 レイヤ 7 (アプリケーション層)

```
Client ──► LB (nhìn URL, headers, cookies) ──► Backend Server

LB quyết định dựa trên:
  - URL path: /api/* → API servers, /static/* → CDN
  - Host header: api.xdev.asia → API, web.xdev.asia → Web
  - Cookie/Session: user_type=premium → Premium servers
  - HTTP method: GET → Read servers, POST → Write servers
```

**利点:** スマートなルーティング、コンテンツベースの決定
**欠点:** L4 より遅く (リクエストを解析する必要がある)、より複雑

### 2.3 いつ何を使用するか?

```
Layer 4: TCP/UDP load balancing, database connections, gaming
Layer 7: HTTP-based services, microservices routing, A/B testing
```

---

## 3. 負荷分散アルゴリズム

### 3.1 ラウンドロビン

```
Request 1 → Server A
Request 2 → Server B
Request 3 → Server C
Request 4 → Server A  (lặp lại)
```

**利点:** シンプル、均等に分散
**欠点:** サーバーのさまざまな容量が考慮されていません。

### 3.2 加重ラウンドロビン

```
Server A (weight=5): Nhận 5 requests
Server B (weight=3): Nhận 3 requests
Server C (weight=2): Nhận 2 requests
→ 10 requests = A:5, B:3, C:2
```

### 3.3 最小接続数

```
Server A: 10 active connections
Server B: 5 active connections   ← Request mới đến đây
Server C: 8 active connections
```

**最適な用途:** 存続期間の長い接続 (WebSocket、データベース接続)

### 3.4 IP ハッシュ

```
hash(client_ip) % num_servers = target_server

Client 1.2.3.4 → hash → Server A (luôn luôn)
Client 5.6.7.8 → hash → Server B (luôn luôn)
```

**最適な用途:** セッションの永続性 (スティッキー セッションの構成は必要ありません)

### 3.5 最短の応答時間

```
Server A: avg response 50ms
Server B: avg response 80ms
Server C: avg response 30ms  ← Request mới đến đây
```

### 3.6 比較

|アルゴリズム |こんな方に最適 |デメリット |
|----------|-----------|----------|
|ラウンドロビン |同等のサーバー |サーバー負荷を無視します |
|加重RR |異なる容量 |静的重み |
|最小のコン |長く存続する接続 |オーバーヘッド追跡 |
| IP ハッシュ |セッションの永続性 |偏在 |
|最小の応答 |レイテンシーを最適化する |オーバーヘッド測定 |

---

## 4. ヘルスチェック

### 4.1 パッシブなヘルスチェック

```
LB monitor responses từ backend:
  Server A: 200 OK → Healthy ✓
  Server A: 200 OK → Healthy ✓
  Server A: 502 Bad Gateway → Strike 1
  Server A: Connection timeout → Strike 2
  Server A: Connection refused → Strike 3 → UNHEALTHY ✗

→ Loại Server A khỏi pool
→ Kiểm tra lại sau 30 giây
```

### 4.2 アクティブなヘルスチェック

```
LB gửi health check request định kỳ:

Every 10s: GET /health → Server A
           Response: { "status": "ok", "db": "ok", "redis": "ok" }
           → Healthy ✓

Every 10s: GET /health → Server B
           Response: { "status": "degraded", "db": "slow" }
           → Unhealthy ✗ → Loại khỏi pool
```

### 4.3 ヘルスチェックエンドポイントの例

```python
# Flask health check endpoint
@app.route('/health')
def health_check():
    checks = {
        'database': check_database(),
        'redis': check_redis(),
        'disk_space': check_disk_space(),
    }

    all_healthy = all(checks.values())
    status_code = 200 if all_healthy else 503

    return jsonify({
        'status': 'healthy' if all_healthy else 'unhealthy',
        'checks': checks,
        'timestamp': datetime.utcnow().isoformat()
    }), status_code
```

---

## 5. ロードバランサーの展開パターン

### 5.1 シングル LB (基本)

```
Client ──► LB ──► Server 1
               ──► Server 2
               ──► Server 3

⚠️ LB là Single Point of Failure
```

### 5.2 アクティブ/パッシブ LB

```
Client ──► Active LB ──► Server 1
           (VIP)      ──► Server 2
                       ──► Server 3
           Passive LB (standby)
           │ heartbeat │

Nếu Active LB fail:
  Passive LB lên nhận VIP → trở thành Active
```

### 5.3 アクティブ-アクティブ LB

```
             ┌──► Active LB 1 ──► Server 1, 2, 3
DNS ────────►│
             └──► Active LB 2 ──► Server 1, 2, 3

Cả 2 LB đều xử lý traffic
```

---

## 6. リバースプロキシとロードバランサー

|特長 |リバースプロキシ |ロードバランサー |
|------|--------------|---------------|
| **主な機能** |バックエンドサーバーを保護する |負荷分散 |
| **バックエンドの数** | 1 つだけ指定できます |通常は >= 2 |
| **SSL 終了** | ✓ | ✓ |
| **キャッシング** | ✓ |制限事項 |
| **圧縮** | ✓ |制限事項 |
| **セキュリティ** | WAF、レート制限 |基本 |

> 実際には、Nginx と HAProxy は **両方の役割** を同時に果たします。

---

## 7. ハンズオン: Nginx ロードバランサー

```nginx
# /etc/nginx/conf.d/loadbalancer.conf

upstream backend_servers {
    # Thuật toán: Least Connections
    least_conn;

    server 10.0.1.1:8080 weight=5;
    server 10.0.1.2:8080 weight=3;
    server 10.0.1.3:8080 weight=2;

    # Backup server (chỉ dùng khi tất cả fail)
    server 10.0.1.4:8080 backup;
}

server {
    listen 80;
    server_name api.xdev.asia;

    location / {
        proxy_pass http://backend_servers;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # Health check
        proxy_connect_timeout 5s;
        proxy_read_timeout 30s;
        proxy_next_upstream error timeout http_502 http_503;
    }

    # Health endpoint cho LB
    location /health {
        access_log off;
        return 200 "healthy\n";
        add_header Content-Type text/plain;
    }
}
```

---

## 8. クラウドロードバランサー

|クラウドプロバイダー | L4 LB | L7LB |グローバルLB |
|----------|----------|----------|----------|
| **AWS** | NLB | ALB |グローバルアクセラレータ |
| **GCP** | TCP/UDP LB | HTTP(S) LB |クラウドCDN |
| **Azure** |アズールLB |アプリゲートウェイ |玄関ドア |

---

## 概要

|コンセプト |重要なポイント |
|----------|---------------|
|ロードバランサー |トラフィックを分散し、可用性を向上 |
| L4 対 L7 | L4 は高速、L7 はスマート |
|アルゴリズム |シンプルなラウンドロビン、長い接続の最小接続 |
|健康診断 |アクティブ + パッシブ、自動エラー サーバー タイプ |
| HA セットアップ |アクティブ/パッシブまたはアクティブ/アクティブ LB |

---

## 演習

1. **Nginx の構成:** 加重ラウンド ロビンを使用して、4 つのバックエンド サーバーの Nginx 構成を書き込みます (2 サーバーの重み = 3、2 サーバーの重み = 1)。ヘルスチェックを追加します。

2. **アーキテクチャ:** API サーバー (高速処理)、WebSocket サーバー (長時間接続)、静的ファイルを使用してアプリケーションの負荷分散を設計します。 L4/L7 とそれぞれのアルゴリズムを選択します。

3. **HA 設計:** 現在、システムには 1 つの Nginx LB、3 つのアプリ サーバーがあります。単一障害点が存在しないように再設計します。
