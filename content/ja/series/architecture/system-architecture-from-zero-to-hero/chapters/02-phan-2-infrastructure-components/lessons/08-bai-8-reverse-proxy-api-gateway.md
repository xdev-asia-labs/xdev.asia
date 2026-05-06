---
id: 019d8a21-c108-7001-d001-e1f2a3b4c508
title: 'レッスン 8: リバース プロキシと API ゲートウェイ'
slug: bai-8-reverse-proxy-va-api-gateway
description: >-
  リバース プロキシ: SSL 終端、圧縮、セキュリティ。 API ゲートウェイ パターン: ルーティング、認証、レート制限、スロットル。
  Nginx、Envoy、Kong、AWS API Gateway を比較します。サービス メッシュの概念 (Istio、Linkerd)。 BFF
  (フロントエンド用バックエンド) パターン。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 8
section_title: 'パート 2: インフラストラクチャ コンポーネント'
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 'システムアーキテクチャ: ゼロからヒーローへ'
  slug: system-architecture-from-zero-to-hero
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3035" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3035)"/>

  <!-- Decorations -->
  <g>
    <circle cx="733" cy="229" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="866" cy="122" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="999" cy="275" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="632" cy="168" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="765" cy="61" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="59" x2="1100" y2="139" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="89" x2="1050" y2="159" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="988.444863728671,142 988.444863728671,176 959,193 929.555136271329,176 929.555136271329,142 959,125" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🏗️ アーキテクチャ — レッスン 8</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 8: リバース プロキシと API ゲートウェイ</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">システムアーキテクチャ: ゼロからヒーローへ</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: インフラストラクチャ コンポーネント</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

リバース プロキシと API ゲートウェイは、クライアントとバックエンド サーバーの間にある 2 つのコンポーネントです。これらは、あらゆる運用システムに必要なセキュリティ、ルーティング、および横断的な懸念を提供します。

---

## 1. リバースプロキシ

### 1.1 フォワード プロキシとリバース プロキシ

```
Forward Proxy (đại diện cho client):
  Client ──► Proxy ──► Internet ──► Server
  Ví dụ: VPN, Corporate proxy

Reverse Proxy (đại diện cho server):
  Client ──► Internet ──► Reverse Proxy ──► Backend Servers
  Ví dụ: Nginx, HAProxy, Cloudflare
```

### 1.2 主な機能

```
┌──────────────────────────────────────────────┐
│              Reverse Proxy                    │
│  ┌──────────────────────────────────────┐    │
│  │ SSL/TLS Termination                   │    │
│  │ → HTTPS decrypt tại proxy             │    │
│  │ → Backend dùng HTTP (nhanh hơn)       │    │
│  ├──────────────────────────────────────┤    │
│  │ Compression (gzip, brotli)            │    │
│  │ → Nén response trước khi gửi client   │    │
│  ├──────────────────────────────────────┤    │
│  │ Static File Serving                   │    │
│  │ → Serve HTML, CSS, JS, images         │    │
│  ├──────────────────────────────────────┤    │
│  │ Caching                               │    │
│  │ → Cache responses, giảm backend load  │    │
│  ├──────────────────────────────────────┤    │
│  │ Security                              │    │
│  │ → Hide backend topology               │    │
│  │ → Rate limiting, IP blocking, WAF     │    │
│  └──────────────────────────────────────┘    │
└──────────────────────────────────────────────┘
```

---

## 2. API ゲートウェイ

### 2.1 API ゲートウェイ パターン

```
                    ┌─────────────────┐
  Mobile App ──────►│                 │──► User Service
  Web App ─────────►│   API Gateway   │──► Order Service
  Partner API ─────►│                 │──► Payment Service
  IoT Device ─────►│                 │──► Notification Service
                    └─────────────────┘
```

### 2.2 APIゲートウェイ機能

|機能 |説明 |
|----------|----------|
| **リクエストルーティング** |ルート /users/* → ユーザー サービス、/orders/* → 注文サービス |
| **認証** | JWT トークン、API キーの検証を検証する |
| **承認** |アクセス許可、RBAC を確認する |
| **レート制限** | API キーごとに 100 リクエスト/分 |
| **リクエスト/レスポンス変換** |形式の変更、ヘッダーの追加/削除 |
| **サーキットブレーカー** |サービスがダウンしている場合はリクエストを停止します。
| **ロギングとモニタリング** |アクセス ログ、メトリクス、トレース |
| **API のバージョン管理** | /v1/ユーザー、/v2/ユーザー |

### 2.3 レート制限アルゴリズム

```
Token Bucket:
  Bucket chứa N tokens, refill rate = R tokens/giây
  Mỗi request lấy 1 token
  Hết tokens → 429 Too Many Requests

  Ví dụ: 100 tokens, refill 10/s
  T=0:  100 tokens
  T=0:  Burst 100 requests → 0 tokens
  T=1:  10 tokens refilled
  T=10: 100 tokens lại

Sliding Window:
  Đếm requests trong window N giây gần nhất
  Mỗi request mới: count++ nếu count < limit
  → Chính xác hơn Token Bucket
```

---

## 3. BFF (フロントエンド用バックエンド)

### 3.1 問題

```
Mobile App cần:  { name, avatar }     ← Ít data, bandwidth thấp
Web App cần:     { name, avatar, posts, friends, settings }  ← Đầy đủ
Admin Panel cần: { name, email, role, audit_log, permissions } ← Khác

Nếu dùng chung 1 API:
  → Mobile nhận thừa data (waste bandwidth)
  → Web phải gọi nhiều APIs (nhiều roundtrips)
```

### 3.2 BFF ソリューション

```
         ┌────────────┐
Mobile ──►│ Mobile BFF │──► User Service
         └────────────┘──► Post Service
         ┌────────────┐
Web ─────►│  Web BFF   │──► User Service
         └────────────┘──► Post Service
                        ──► Friend Service
         ┌────────────┐
Admin ───►│ Admin BFF  │──► User Service
         └────────────┘──► Audit Service
```

各 BFF は、特定のクライアントの応答を最適化します。

---

## 4. サービスメッシュ

### 4.1 サービス メッシュとは何ですか?

```
Không có Service Mesh:
  Service A ──► Service B
  Mỗi service phải tự implement:
  retry, timeout, circuit breaker, mTLS, tracing, metrics

Có Service Mesh:
  Service A ──► Sidecar Proxy A ──► Sidecar Proxy B ──► Service B
  Sidecar proxy xử lý tất cả cross-cutting concerns

┌─────────────────┐       ┌─────────────────┐
│  Pod A          │       │  Pod B          │
│ ┌─────┐ ┌────┐ │       │ ┌────┐ ┌─────┐ │
│ │App A│ │Envoy│◄├───────├►│Envoy│ │App B│ │
│ └─────┘ └────┘ │       │ └────┘ └─────┘ │
└─────────────────┘       └─────────────────┘
```

### 4.2 Istio 対 Linkerd

|特長 |イスティオ |リンカード |
|----------|----------|----------|
| **プロキシ** |特使 | linkerd2-proxy (Rust) |
| **複雑さ** |曹操 |低い |
| **パフォーマンス** |中程度 |より良い |
| **特徴** |たくさん |集中 |
| **こんな用途に最適** |エンタープライズ、複雑なニーズ |シンプルなサービスメッシュ |

---

## 5. API ゲートウェイ ソリューションの比較

|ソリューション |タイプ |こんな方に最適 |
|----------|----------|----------|
| **Nginx** |リバースプロキシ + LB |シンプルなルーティング、静的ファイル |
| **コン** |フル API ゲートウェイ |プラグイン エコシステム、マルチクラウド |
| **特使** | L7プロキシ |サービスメッシュ、gRPC |
| **AWS API ゲートウェイ** |管理 | AWS エコシステム、サーバーレス |
| **トレフィク** |クラウドネイティブ | Kubernetes、自動検出 |
| **APISIX** | APIゲートウェイ |パフォーマンス、Lua プラグイン |

---

## 6. ハンズオン: Nginx を使用した API ゲートウェイ

```nginx
# API Gateway configuration

# Rate limiting
limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;

# Upstream services
upstream user_service {
    server 10.0.1.1:8001;
    server 10.0.1.2:8001;
}

upstream order_service {
    server 10.0.2.1:8002;
    server 10.0.2.2:8002;
}

server {
    listen 443 ssl http2;
    server_name api.xdev.asia;

    # SSL Termination
    ssl_certificate /etc/ssl/certs/api.crt;
    ssl_certificate_key /etc/ssl/private/api.key;

    # Compression
    gzip on;
    gzip_types application/json;

    # API Routing
    location /api/v1/users {
        limit_req zone=api burst=20 nodelay;
        proxy_pass http://user_service;
        proxy_set_header Authorization $http_authorization;
    }

    location /api/v1/orders {
        limit_req zone=api burst=20 nodelay;
        proxy_pass http://order_service;
        proxy_set_header Authorization $http_authorization;
    }

    # Health check
    location /health {
        return 200 '{"status":"ok"}';
        add_header Content-Type application/json;
    }
}
```

---

## 概要

|コンポーネント |役割 |いつ使用するか |
|----------|----------|---------------|
|リバースプロキシ | SSL、キャッシュ、セキュリティ |常に本番環境 |
| APIゲートウェイ |ルーティング、認証、レート制限 |マイクロサービスアーキテクチャ |
|親友 |クライアントの種類ごとに最適化する |複数のクライアント タイプ |
|サービスメッシュ |横断的な懸念事項 |大規模なマイクロサービス (50 以上のサービス) |

---

## 演習

1. **API ゲートウェイの設計:** 5 つのバックエンド サービスを備えた電子商取引アプリケーション用の API ゲートウェイを設計します。ルーティング ルール、レート制限、認証戦略を定義します。

2. **BFF と単一 API:** システムにはモバイル アプリ、Web アプリ、スマート TV アプリがあります。各プラットフォームには異なるデータが必要です。各プラットフォームのデータ マッピングを使用して BFF アーキテクチャを設計します。

3. **レート制限:** 擬似コードを使用してトークン バケット アルゴリズムを実装します。バケットサイズ = 100、補充速度 = 10 トークン/秒。
