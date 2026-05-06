---
id: 019c9617-fc7d-736e-82ed-b2436e5de5d4
title: '第4課：リバースプロキシ'
slug: bai-4-reverse-proxy
description: >-
  Nginxにおけるリバースプロキシのコンセプトからproxy_pass設定、プロキシヘッダー、アップストリームサーバー、ヘルスチェックまでを学びます。
  Node.js、Python、PHPなどのバックエンドアプリケーション向けにNginxをリバースプロキシとしてセットアップするガイドです。
  ベストプラクティスとトラブルシューティングを含みます。
duration_minutes: 185
is_free: true
video_url: null
sort_order: 4
section_title: "第2部：リバースプロキシ & ロードバランシング"
course:
  id: 019c9617-fc27-73c5-b664-a1902ec9ac00
  title: Nginxの基礎から応用まで
  slug: nginx-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8792" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8792)"/>

  <!-- Decorations -->
  <g>
    <circle cx="697" cy="41" r="30" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="794" cy="218" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="891" cy="135" r="22" fill="#a78bfa" opacity="0.08"/>
    <circle cx="988" cy="52" r="33" fill="#a78bfa" opacity="0.09"/>
    <circle cx="1085" cy="229" r="14" fill="#a78bfa" opacity="0.1"/>
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
    <line x1="600" y1="131" x2="1100" y2="211" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="161" x2="1050" y2="231" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1053.5166604983954,218 1053.5166604983954,244 1031,257 1008.4833395016046,244 1008.4833395016046,218 1031,205" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="128" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🔒 DevSecOps — 第4課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第4課：リバースプロキシ</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Nginxの基礎から応用まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第2部：リバースプロキシ &amp; ロードバランシング</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-kh%C3%A1i-ni%E1%BB%87m-reverse-proxy"><strong>1. リバースプロキシの概念</strong></h2><h3 id="11-reverse-proxy-l%C3%A0-g%C3%AC"><strong>1.1. リバースプロキシとは？</strong></h3><p><strong>リバースプロキシ</strong>とは、クライアントとバックエンドサーバーの間に位置するサーバーです。クライアントからリクエストを受け取り、バックエンドサーバーに転送し、レスポンスをクライアントに返します。</p><p><strong>違い：</strong></p><pre><code>フォワードプロキシ（クライアント側）：
Client → Forward Proxy → Internet → Server
（クライアントを隠す）

リバースプロキシ（サーバー側）：
Client → Reverse Proxy → Backend Server
（サーバーを隠す）
</code></pre><p><strong>図解：</strong></p><pre><code>┌─────────┐         ┌──────────────┐         ┌──────────────┐
│         │         │              │         │              │
│ Client  │────────▶│    Nginx     │────────▶│   Backend    │
│         │         │ Reverse Proxy│         │   Server     │
│         │◀────────│              │◀────────│              │
└─────────┘         └──────────────┘         └──────────────┘
</code></pre><h3 id="12-t%E1%BA%A1i-sao-d%C3%B9ng-reverse-proxy"><strong>1.2. なぜリバースプロキシを使うのか？</strong></h3><p><strong>1. ロードバランシング：</strong></p><ul><li>複数のバックエンドサーバーへトラフィックを分散</li><li>処理能力と信頼性の向上</li></ul><p><strong>2. SSL/TLSターミネーション：</strong></p><ul><li>NginxがSSL暗号化・復号を担う</li><li>バックエンドサーバーはHTTPSを気にしなくてよい</li></ul><p><strong>3. キャッシュ：</strong></p><ul><li>静的コンテンツやAPIレスポンスをキャッシュ</li><li>バックエンドサーバーの負荷を削減</li></ul><p><strong>4. セキュリティ：</strong></p><ul><li>バックエンドサーバーのインフラを隠す</li><li>保護レイヤー（レート制限、ファイアウォール）</li><li>集中認証</li></ul><p><strong>5. 圧縮：</strong></p><ul><li>レスポンスのgzip圧縮</li><li>帯域幅の削減</li></ul><p><strong>6. 静的ファイル配信：</strong></p><ul><li>Nginxが直接静的ファイルを配信</li><li>バックエンドは動的コンテンツのみ処理</li></ul><p><strong>7. 複数バックエンド：</strong></p><ul><li>異なるアプリケーションへリクエストをルーティング</li><li>マイクロサービスアーキテクチャ</li></ul><h3 id="13-use-cases-ph%E1%BB%95-bi%E1%BA%BFn"><strong>1.3. よくあるユースケース</strong></h3><pre><code>1. シングルページアプリケーション（SPA）：
   /          → React/Vue/Angular アプリ
   /api/*     → バックエンドAPIサーバー

2. マイクロサービス：
   /users/*   → ユーザーサービス
   /orders/*  → 注文サービス
   /payments/* → 決済サービス

3. 複数アプリケーション：
   site.com       → メインサイト
   blog.site.com  → WordPress ブログ
   api.site.com   → API サーバー

4. レガシー + 新規：
   /old/*     → レガシーPHPアプリケーション
   /new/*     → 新しいNode.jsアプリケーション
</code></pre><hr><h2 id="2-c%E1%BA%A5u-h%C3%ACnh-proxypass-c%C6%A1-b%E1%BA%A3n"><strong>2. proxy_passの基本設定</strong></h2><h3 id="21-c%C3%BA-ph%C3%A1p-proxypass"><strong>2.1. proxy_passの書き方</strong></h3><pre><code class="language-nginx">location /path/ {
    proxy_pass http://backend_server;
}
</code></pre><p><strong>シンプルな例：</strong></p><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;

    location / {
        # すべてのリクエストをバックエンドに転送
        proxy_pass http://localhost:3000;
    }
}
</code></pre><h3 id="22-proxypass-v%E1%BB%9Bi-uri"><strong>2.2. URIを使ったproxy_pass</strong></h3><p><strong>方法1：末尾スラッシュなし</strong></p><pre><code class="language-nginx">location /api {
    proxy_pass http://localhost:3000;
}

# リクエスト: /api/users
# 転送先: http://localhost:3000/api/users
# (/apiプレフィックスを保持)
</code></pre><p><strong>方法2：末尾スラッシュあり</strong></p><pre><code class="language-nginx">location /api/ {
    proxy_pass http://localhost:3000/;
}

# リクエスト: /api/users
# 転送先: http://localhost:3000/users
# (/apiプレフィックスを削除)
</code></pre><p><strong>方法3：特定パスを指定</strong></p><pre><code class="language-nginx">location /api/ {
    proxy_pass http://localhost:3000/v1/;
}

# リクエスト: /api/users
# 転送先: http://localhost:3000/v1/users
# (/apiを/v1に置き換え)
</code></pre><p><strong>詳細な例：</strong></p><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;

    # ルートのプロキシ
    location / {
        proxy_pass http://localhost:3000;
    }

    # APIのプロキシ（/apiプレフィックスを削除）
    location /api/ {
        proxy_pass http://localhost:4000/;
    }

    # adminのプロキシ（/adminプレフィックスを保持）
    location /admin {
        proxy_pass http://localhost:5000;
    }

    # 完全一致でプロキシ
    location = /health {
        proxy_pass http://localhost:3000/healthcheck;
    }
}
</code></pre><h3 id="23-proxy-multiple-backends"><strong>2.3. 複数バックエンドへのプロキシ</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;

    # フロントエンドSPA
    location / {
        root /var/www/html;
        try_files $uri $uri/ /index.html;
    }

    # APIバックエンド
    location /api/ {
        proxy_pass http://localhost:3000/;
    }

    # 認証サービス
    location /auth/ {
        proxy_pass http://localhost:4000/;
    }

    # WebSocketサーバー
    location /ws/ {
        proxy_pass http://localhost:5000/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }

    # 静的アセット（CDN）
    location /static/ {
        proxy_pass http://cdn.example.com/;
    }
}
</code></pre><h3 id="24-proxy-v%E1%BB%9Bi-variables"><strong>2.4. 変数を使ったプロキシ</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;

    # サブドメインに基づくプロキシ
    location / {
        proxy_pass http://$http_host$request_uri;
    }

    # カスタム変数でプロキシ
    set $backend "localhost:3000";
    location /api/ {
        proxy_pass http://$backend/;
    }

    # 条件付きプロキシ
    location /dynamic/ {
        if ($arg_version = "v2") {
            proxy_pass http://localhost:4000/;
        }
        proxy_pass http://localhost:3000/;
    }
}
</code></pre><h3 id="25-proxy-timeouts"><strong>2.5. プロキシタイムアウト</strong></h3><pre><code class="language-nginx">location /api/ {
    proxy_pass http://localhost:3000/;
    
    # タイムアウト設定
    proxy_connect_timeout 60s;      # アップストリームへの接続タイムアウト
    proxy_send_timeout 60s;         # リクエスト送信タイムアウト
    proxy_read_timeout 60s;         # レスポンス読み取りタイムアウト
    
    # バッファ設定
    proxy_buffering on;
    proxy_buffer_size 4k;
    proxy_buffers 8 4k;
    proxy_busy_buffers_size 8k;
}
</code></pre><hr><h2 id="3-proxy-headers"><strong>3. プロキシヘッダー</strong></h2><p>ヘッダーはバックエンドサーバーが元のリクエストの情報を知るために重要です。</p><h3 id="31-essential-proxy-headers"><strong>3.1. 必須プロキシヘッダー</strong></h3><pre><code class="language-nginx">location / {
    proxy_pass http://localhost:3000;
    
    # Hostヘッダー
    proxy_set_header Host $host;
    
    # クライアントの実IPアドレス
    proxy_set_header X-Real-IP $remote_addr;
    
    # プロキシのチェーン
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    
    # プロトコル（http/https）
    proxy_set_header X-Forwarded-Proto $scheme;
    
    # 元のホスト
    proxy_set_header X-Forwarded-Host $host;
    
    # ポート
    proxy_set_header X-Forwarded-Port $server_port;
}
</code></pre><h3 id="32-header-explanations"><strong>3.2. ヘッダーの説明</strong></h3><p><strong>Host：</strong></p><pre><code class="language-nginx">proxy_set_header Host $host;

# $host = リクエストのドメイン名
# 例: example.com
# バックエンドが受け取る: Host: example.com
</code></pre><p><strong>X-Real-IP：</strong></p><pre><code class="language-nginx">proxy_set_header X-Real-IP $remote_addr;

# $remote_addr = Nginxに直接接続しているクライアントのIP
# 例: 192.168.1.100
# バックエンドが受け取る: X-Real-IP: 192.168.1.100
</code></pre><p><strong>X-Forwarded-For：</strong></p><pre><code class="language-nginx">proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

# 既存のX-Forwarded-ForヘッダーにクライアントIPを追記
# 例:
# リクエスト1: Client → Nginx → Backend
# X-Forwarded-For: 192.168.1.100

# リクエスト2: Client → CDN → Nginx → Backend
# X-Forwarded-For: 192.168.1.100, 10.0.0.50

# $proxy_add_x_forwarded_forはプロキシのチェーンを保持
</code></pre><p><strong>X-Forwarded-Proto：</strong></p><pre><code class="language-nginx">proxy_set_header X-Forwarded-Proto $scheme;

# $scheme = http または https
# バックエンドが元のリクエストがHTTPかHTTPSかを判断できる
# リダイレクトロジックに重要
</code></pre><h3 id="33-complete-header-configuration"><strong>3.3. 完全なヘッダー設定</strong></h3><pre><code class="language-nginx">http {
    # ヘッダーテンプレートを定義
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Forwarded-Host $host;
    proxy_set_header X-Forwarded-Port $server_port;
    
    server {
        listen 80;
        server_name example.com;
        
        location / {
            proxy_pass http://localhost:3000;
            # httpコンテキストからヘッダーを継承
        }
    }
}
</code></pre><h3 id="34-custom-headers"><strong>3.4. カスタムヘッダー</strong></h3><pre><code class="language-nginx">location /api/ {
    proxy_pass http://localhost:3000/;
    
    # 標準ヘッダー
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    
    # カスタムヘッダー
    proxy_set_header X-Request-ID $request_id;
    proxy_set_header X-Server-Name $hostname;
    proxy_set_header X-Forwarded-User $remote_user;
    
    # ヘッダーを削除
    proxy_set_header Authorization "";  # 認証ヘッダーを削除
    
    # カスタム値を追加
    proxy_set_header X-API-Version "v1";
    proxy_set_header X-Environment "production";
}
</code></pre><h3 id="35-headers-cho-websocket"><strong>3.5. WebSocket用ヘッダー</strong></h3><pre><code class="language-nginx">location /ws/ {
    proxy_pass http://localhost:3000/;
    
    # WebSocket専用ヘッダー
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    
    # 標準ヘッダー
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    
    # WebSocketタイムアウト
    proxy_read_timeout 3600s;
    proxy_send_timeout 3600s;
}
</code></pre><h3 id="36-preserve-original-headers"><strong>3.6. 元のヘッダーを保持する</strong></h3><pre><code class="language-nginx">location / {
    proxy_pass http://localhost:3000;
    
    # すべての元のヘッダーを転送
    proxy_pass_request_headers on;
    
    # 特定ヘッダー
    proxy_set_header Accept-Encoding $http_accept_encoding;
    proxy_set_header Accept-Language $http_accept_language;
    proxy_set_header Cookie $http_cookie;
    proxy_set_header Referer $http_referer;
    proxy_set_header User-Agent $http_user_agent;
}
</code></pre><h3 id="37-security-headers"><strong>3.7. セキュリティヘッダー</strong></h3><pre><code class="language-nginx">location / {
    proxy_pass http://localhost:3000;
    
    # 標準プロキシヘッダー
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    
    # Nginxバージョンを隠す
    proxy_hide_header X-Powered-By;
    proxy_hide_header Server;
    
    # セキュリティヘッダーを追加
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
}
</code></pre><hr><h2 id="4-upstream-servers-v%C3%A0-load-balancing"><strong>4. アップストリームサーバーとロードバランシング</strong></h2><h3 id="41-upstream-block-c%C6%A1-b%E1%BA%A3n"><strong>4.1. 基本のupstreamブロック</strong></h3><pre><code class="language-nginx"># upstreamを定義
upstream backend {
    server localhost:3000;
    server localhost:3001;
    server localhost:3002;
}

server {
    listen 80;
    server_name example.com;
    
    location / {
        proxy_pass http://backend;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
</code></pre><h3 id="42-load-balancing-methods"><strong>4.2. ロードバランシングの方式</strong></h3><p><strong>1. ラウンドロビン（デフォルト）：</strong></p><pre><code class="language-nginx">upstream backend {
    # ラウンドロビン：各サーバーに順番に
    server localhost:3000;
    server localhost:3001;
    server localhost:3002;
}

# リクエスト1 → 3000
# リクエスト2 → 3001
# リクエスト3 → 3002
# リクエスト4 → 3000（繰り返し）
</code></pre><p><strong>2. 最少コネクション：</strong></p><pre><code class="language-nginx">upstream backend {
    least_conn;  # 接続数が最も少ないサーバー
    
    server localhost:3000;
    server localhost:3001;
    server localhost:3002;
}

# 長時間接続に適している
# 負荷を均等に分散
</code></pre><p><strong>3. IPハッシュ（スティッキーセッション）：</strong></p><pre><code class="language-nginx">upstream backend {
    ip_hash;  # 同じクライアント → 同じサーバー
    
    server localhost:3000;
    server localhost:3001;
    server localhost:3002;
}

# クライアント192.168.1.100 → 常にサーバー3000へ
# クライアント192.168.1.101 → 常にサーバー3001へ
# セッションベースのアプリケーションに適している
</code></pre><p><strong>4. ハッシュ（汎用）：</strong></p><pre><code class="language-nginx">upstream backend {
    hash $request_uri consistent;  # URIでハッシュ
    
    server localhost:3000;
    server localhost:3001;
    server localhost:3002;
}

# 同じURI → 同じサーバー
# キャッシュに適している
</code></pre><p><strong>5. ランダム：</strong></p><pre><code class="language-nginx">upstream backend {
    random;  # ランダムにサーバーを選択
    
    server localhost:3000;
    server localhost:3001;
    server localhost:3002;
}
</code></pre><h3 id="43-server-weights"><strong>4.3. サーバーウェイト</strong></h3><pre><code class="language-nginx">upstream backend {
    # ウェイトが高いサーバーほど多くのリクエストを受け取る
    server localhost:3000 weight=3;  # 60%のトラフィック
    server localhost:3001 weight=1;  # 20%のトラフィック
    server localhost:3002 weight=1;  # 20%のトラフィック
}

# 合計ウェイト = 5
# サーバー3000: 3/5 = 60%
# サーバー3001: 1/5 = 20%
# サーバー3002: 1/5 = 20%
</code></pre><p><strong>ウェイトのユースケース：</strong></p><pre><code class="language-nginx">upstream backend {
    # 本番サーバー
    server prod1.example.com weight=5;
    server prod2.example.com weight=5;
    
    # カナリアデプロイメント - 10%のトラフィック
    server canary.example.com weight=1;
}
</code></pre><h3 id="44-backup-servers"><strong>4.4. バックアップサーバー</strong></h3><pre><code class="language-nginx">upstream backend {
    server localhost:3000;
    server localhost:3001;
    server localhost:3002 backup;  # プライマリサーバーがダウンしたときのみ使用
}

# 3002は3000と3001が両方使用不可になったときのみトラフィックを受け取る
</code></pre><h3 id="45-server-parameters"><strong>4.5. サーバーパラメーター</strong></h3><pre><code class="language-nginx">upstream backend {
    server localhost:3000 weight=5 max_fails=3 fail_timeout=30s;
    server localhost:3001 weight=5 max_fails=3 fail_timeout=30s;
    server localhost:3002 backup;
    server localhost:3003 down;  # 一時的に無効
}

# パラメーター:
# weight=N         - ウェイト（デフォルト1）
# max_fails=N      - ダウンとしてマークするまでの失敗回数（デフォルト1）
# fail_timeout=T   - タイムアウト時間（デフォルト10s）
# backup           - バックアップサーバー
# down             - 一時的に無効
</code></pre><h3 id="46-advanced-upstream-configuration"><strong>4.6. 高度なupstream設定</strong></h3><pre><code class="language-nginx">upstream backend {
    least_conn;  # ロードバランシング方式
    
    # サーバー設定
    server srv1.example.com:8080 weight=3 max_fails=2 fail_timeout=30s;
    server srv2.example.com:8080 weight=3 max_fails=2 fail_timeout=30s;
    server srv3.example.com:8080 weight=2 max_fails=2 fail_timeout=30s;
    server srv4.example.com:8080 backup;
    
    # キープアライブ接続
    keepalive 32;  # アップストリームへの32個のアイドル接続を保持
    keepalive_timeout 60s;
    keepalive_requests 100;
}

server {
    listen 80;
    
    location / {
        proxy_pass http://backend;
        
        # キープアライブ用HTTPバージョン
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        
        # 標準ヘッダー
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
</code></pre><h3 id="47-multiple-upstreams"><strong>4.7. 複数のupstream</strong></h3><pre><code class="language-nginx"># APIバックエンド
upstream api_backend {
    least_conn;
    server api1.example.com:3000;
    server api2.example.com:3000;
    server api3.example.com:3000;
}

# 認証サービス
upstream auth_backend {
    server auth1.example.com:4000;
    server auth2.example.com:4000;
}

# WebSocketサービス
upstream websocket_backend {
    ip_hash;  # WebSocket用スティッキーセッション
    server ws1.example.com:5000;
    server ws2.example.com:5000;
}

server {
    listen 80;
    server_name example.com;
    
    location /api/ {
        proxy_pass http://api_backend/;
    }
    
    location /auth/ {
        proxy_pass http://auth_backend/;
    }
    
    location /ws/ {
        proxy_pass http://websocket_backend/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
</code></pre><hr><h2 id="5-health-checks-c%C6%A1-b%E1%BA%A3n"><strong>5. 基本的なヘルスチェック</strong></h2><h3 id="51-passive-health-checks"><strong>5.1. パッシブヘルスチェック</strong></h3><p>Nginxはレスポンスに基づいて自動的に障害サーバーを検出します。</p><pre><code class="language-nginx">upstream backend {
    server localhost:3000 max_fails=3 fail_timeout=30s;
    server localhost:3001 max_fails=3 fail_timeout=30s;
    server localhost:3002 max_fails=3 fail_timeout=30s;
}

# max_fails=3: 3回連続失敗した後
# fail_timeout=30s: サーバーは30秒間ダウンとしてマーク
# 30秒後、Nginxはサーバーを再試行
</code></pre><p><strong>動作の詳細：</strong></p><pre><code>1. localhost:3000にリクエストを送信
2. サーバーが502、503、504を返すかタイムアウト → 失敗カウント = 1
3. 次のリクエストを3000に送信
4. サーバーが再び失敗 → 失敗カウント = 2
5. 次のリクエストを3000に送信
6. サーバーが3回目の失敗 → 失敗カウント = 3 → サーバーがDOWNとしてマーク
7. トラフィックは3001と3002にルーティング
8. 30秒後、Nginxは3000を再試行
9. 3000がOKで応答 → 失敗カウントリセット、サーバーUP
</code></pre><h3 id="52-active-health-checks-nginx-plus"><strong>5.2. アクティブヘルスチェック（Nginx Plus）</strong></h3><p>Nginx Plusはアクティブヘルスチェックをサポートします（オープンソース版には含まれません）。</p><pre><code class="language-nginx"># Nginx Plusのみ
upstream backend {
    zone backend 64k;
    server localhost:3000;
    server localhost:3001;
    server localhost:3002;
}

server {
    listen 80;
    
    location / {
        proxy_pass http://backend;
        health_check interval=5s fails=3 passes=2 uri=/health;
    }
}

# interval=5s: 5秒ごとにチェック
# fails=3: 3回失敗でダウンとしてマーク
# passes=2: 2回成功でアップとしてマーク
# uri=/health: チェック用エンドポイント
</code></pre><h3 id="53-custom-health-check-endpoint"><strong>5.3. カスタムヘルスチェックエンドポイント</strong></h3><p><strong>バックエンドの実装（Node.jsの例）：</strong></p><pre><code class="language-javascript">// health.js
const express = require('express');
const app = express();

app.get('/health', (req, res) =&gt; {
    // データベース接続を確認
    // 依存関係を確認
    // メモリ使用量を確認など
    
    const health = {
        status: 'ok',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        memory: process.memoryUsage()
    };
    
    res.status(200).json(health);
});

app.listen(3000);
</code></pre><p><strong>Nginx設定：</strong></p><pre><code class="language-nginx">upstream backend {
    server localhost:3000 max_fails=3 fail_timeout=30s;
    server localhost:3001 max_fails=3 fail_timeout=30s;
}

server {
    listen 80;
    
    location / {
        proxy_pass http://backend;
    }
    
    # ヘルスチェックエンドポイント（公開しない）
    location /health {
        access_log off;
        proxy_pass http://backend;
        
        # localhostからのみ許可
        allow 127.0.0.1;
        deny all;
    }
}
</code></pre><h3 id="54-external-health-checks"><strong>5.4. 外部ヘルスチェック</strong></h3><p>外部スクリプトでアップストリームを監視・更新します。</p><p><strong>監視スクリプト：</strong></p><pre><code class="language-bash">#!/bin/bash
# health_check.sh

UPSTREAM_SERVERS=(
    "localhost:3000"
    "localhost:3001"
    "localhost:3002"
)

HEALTH_ENDPOINT="/health"

for server in "${UPSTREAM_SERVERS[@]}"; do
    response=$(curl -s -o /dev/null -w "%{http_code}" "http://$server$HEALTH_ENDPOINT")
    
    if [ "$response" = "200" ]; then
        echo "$(date) - $server is healthy"
    else
        echo "$(date) - $server is down (HTTP $response)"
        # アラートを送信
        # upstream設定を更新
        # Nginxをリロード
    fi
done
</code></pre><p><strong>Crontab：</strong></p><pre><code class="language-bash"># 毎分ヘルスチェックを実行
* * * * * /usr/local/bin/health_check.sh &gt;&gt; /var/log/health_check.log 2&gt;&amp;1
</code></pre><h3 id="55-monitoring-v%E1%BB%9Bi-stub-status"><strong>5.5. stub_statusによる監視</strong></h3><pre><code class="language-nginx">server {
    listen 8080;
    server_name localhost;
    
    location /nginx_status {
        stub_status;
        access_log off;
        allow 127.0.0.1;
        deny all;
    }
}
</code></pre><p><strong>ステータスを確認：</strong></p><pre><code class="language-bash">curl http://localhost:8080/nginx_status

# 出力:
# Active connections: 291
# server accepts handled requests
#  16630948 16630948 31070465
# Reading: 6 Writing: 179 Waiting: 106
</code></pre><h3 id="56-health-check-v%E1%BB%9Bi-scripts"><strong>5.6. スクリプトによるヘルスチェック</strong></h3><p><strong>Pythonヘルスチェック：</strong></p><pre><code class="language-python">#!/usr/bin/env python3
# health_monitor.py

import requests
import time
import smtplib
from email.message import EmailMessage

BACKENDS = [
    'http://localhost:3000/health',
    'http://localhost:3001/health',
    'http://localhost:3002/health',
]

def check_health(url):
    try:
        response = requests.get(url, timeout=5)
        return response.status_code == 200
    except:
        return False

def send_alert(backend, status):
    msg = EmailMessage()
    msg['Subject'] = f'Backend Alert: {backend}'
    msg['From'] = 'monitor@example.com'
    msg['To'] = 'admin@example.com'
    msg.set_content(f'Backend {backend} is {status}')
    
    with smtplib.SMTP('localhost') as s:
        s.send_message(msg)

def main():
    while True:
        for backend in BACKENDS:
            if not check_health(backend):
                print(f'{backend} is DOWN')
                send_alert(backend, 'DOWN')
            else:
                print(f'{backend} is UP')
        
        time.sleep(60)  # 毎分チェック

if __name__ == '__main__':
    main()
</code></pre><hr><h2 id="6-v%C3%AD-d%E1%BB%A5-th%E1%BB%B1c-t%E1%BA%BF"><strong>6. 実際の例</strong></h2><h3 id="61-nodejs-application"><strong>6.1. Node.jsアプリケーション</strong></h3><p><strong>バックエンド（app.js）：</strong></p><pre><code class="language-javascript">const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) =&gt; {
    res.json({
        message: 'Hello from Node.js',
        server: `localhost:${PORT}`,
        headers: req.headers
    });
});

app.get('/api/users', (req, res) =&gt; {
    res.json([
        { id: 1, name: 'User 1' },
        { id: 2, name: 'User 2' }
    ]);
});

app.get('/health', (req, res) =&gt; {
    res.status(200).json({ status: 'ok' });
});

app.listen(PORT, () =&gt; {
    console.log(`Server running on port ${PORT}`);
});
</code></pre><p><strong>Nginx設定：</strong></p><pre><code class="language-nginx">upstream nodejs_backend {
    least_conn;
    server localhost:3000 max_fails=3 fail_timeout=30s;
    server localhost:3001 max_fails=3 fail_timeout=30s;
    server localhost:3002 max_fails=3 fail_timeout=30s;
    keepalive 32;
}

server {
    listen 80;
    server_name api.example.com;
    
    access_log /var/log/nginx/nodejs.access.log;
    error_log /var/log/nginx/nodejs.error.log;
    
    location / {
        proxy_pass http://nodejs_backend;
        
        # HTTPバージョン
        proxy_http_version 1.1;
        
        # ヘッダー
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Connection "";
        
        # タイムアウト
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
        
        # バッファリング
        proxy_buffering on;
        proxy_buffer_size 4k;
        proxy_buffers 8 4k;
    }
    
    location /health {
        access_log off;
        proxy_pass http://nodejs_backend/health;
    }
}
</code></pre><h3 id="62-python-flaskdjango-application"><strong>6.2. Python Flask/Djangoアプリケーション</strong></h3><p><strong>バックエンド（app.py）：</strong></p><pre><code class="language-python">from flask import Flask, jsonify, request
import os

app = Flask(__name__)
PORT = int(os.environ.get('PORT', 5000))

@app.route('/')
def home():
    return jsonify({
        'message': 'Hello from Python',
        'server': f'localhost:{PORT}',
        'headers': dict(request.headers)
    })

@app.route('/api/data')
def get_data():
    return jsonify([
        {'id': 1, 'value': 'Data 1'},
        {'id': 2, 'value': 'Data 2'}
    ])

@app.route('/health')
def health():
    return jsonify({'status': 'ok'}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=PORT)
</code></pre><p><strong>Nginx設定：</strong></p><pre><code class="language-nginx">upstream python_backend {
    server localhost:5000;
    server localhost:5001;
    server localhost:5002;
}

server {
    listen 80;
    server_name python.example.com;
    
    client_max_body_size 10M;
    
    location / {
        proxy_pass http://python_backend;
        
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        # Pythonアプリは遅い場合がある
        proxy_read_timeout 300s;
        proxy_connect_timeout 300s;
        proxy_send_timeout 300s;
    }
}
</code></pre><h3 id="63-php-application-v%E1%BB%9Bi-php-fpm"><strong>6.3. PHP-FPMを使ったPHPアプリケーション</strong></h3><p><strong>Nginx設定：</strong></p><pre><code class="language-nginx">upstream php_backend {
    server unix:/var/run/php/php8.1-fpm.sock;
    # または
    # server localhost:9000;
}

server {
    listen 80;
    server_name php.example.com;
    root /var/www/php;
    index index.php index.html;
    
    location / {
        try_files $uri $uri/ /index.php?$args;
    }
    
    location ~ \.php$ {
        include fastcgi_params;
        fastcgi_pass php_backend;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        
        # ヘッダー
        fastcgi_param HTTP_X_REAL_IP $remote_addr;
        fastcgi_param HTTP_X_FORWARDED_FOR $proxy_add_x_forwarded_for;
        fastcgi_param HTTP_X_FORWARDED_PROTO $scheme;
    }
    
    location ~ /\.ht {
        deny all;
    }
}
</code></pre><h3 id="64-microservices-architecture"><strong>6.4. マイクロサービスアーキテクチャ</strong></h3><pre><code class="language-nginx"># ユーザーサービス
upstream user_service {
    server user1.internal:8001;
    server user2.internal:8001;
}

# 注文サービス
upstream order_service {
    server order1.internal:8002;
    server order2.internal:8002;
}

# 決済サービス
upstream payment_service {
    server payment1.internal:8003;
    server payment2.internal:8003;
}

# 商品サービス
upstream product_service {
    server product1.internal:8004;
    server product2.internal:8004;
}

server {
    listen 80;
    server_name api.example.com;
    
    # 共通ヘッダー
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Request-ID $request_id;
    
    location /api/users/ {
        proxy_pass http://user_service/;
    }
    
    location /api/orders/ {
        proxy_pass http://order_service/;
    }
    
    location /api/payments/ {
        proxy_pass http://payment_service/;
    }
    
    location /api/products/ {
        proxy_pass http://product_service/;
    }
}
</code></pre><hr><h2 id="7-b%C3%A0i-t%E1%BA%ADp-th%E1%BB%B1c-h%C3%A0nh"><strong>7. 実践演習</strong></h2><h3 id="b%C3%A0i-t%E1%BA%ADp-1-basic-reverse-proxy"><strong>演習1：基本的なリバースプロキシ</strong></h3><ol><li>ポート3000でシンプルなNode.js/Pythonサーバーを作成する</li><li>NginxをリバースプロキシとしてConfigure する</li><li>ヘッダーが正しく転送されているかテスト・確認する</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-2-multiple-backends"><strong>演習2：複数バックエンド</strong></h3><ol><li>ポート3000、3001、3002でアプリケーションの3インスタンスを起動する</li><li>ラウンドロビンでupstreamを設定する</li><li>ロードバランシングをテストする（ログを確認してリクエストの分散を確認）</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-3-sticky-sessions"><strong>演習3：スティッキーセッション</strong></h3><ol><li>ip_hashでupstreamを設定する</li><li>同じクライアントが常に同じバックエンドに接続されることをテストする</li><li>ラウンドロビンと比較する</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-4-health-checks"><strong>演習4：ヘルスチェック</strong></h3><ol><li>max_failsとfail_timeoutでパッシブヘルスチェックを設定する</li><li>バックエンドサーバーを1台停止する</li><li>Nginxが自動的にヘルシーなサーバーにトラフィックをルーティングすることを確認する</li><li>サーバーを再起動してトラフィックが戻ることを確認する</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-5-microservices"><strong>演習5：マイクロサービス</strong></h3><ol><li>2〜3つのシンプルなAPI（モックでもよい）を作成する</li><li>URLパスに基づいてリクエストをルーティングするようNginxを設定する：<ul><li><code>/api/users</code> → ユーザーサービス</li><li><code>/api/products</code> → 商品サービス</li></ul></li><li>ルーティングをテストする</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-6-websocket-proxy"><strong>演習6：WebSocketプロキシ</strong></h3><ol><li>シンプルなWebSocketサーバーを作成する</li><li>NginxをWebSocketプロキシとして設定する</li><li>接続とメッセージ送受信をテストする</li></ol><hr><h2 id="8-troubleshooting"><strong>8. トラブルシューティング</strong></h2><h3 id="81-common-issues"><strong>8.1. よくある問題</strong></h3><p><strong>1. 502 Bad Gateway：</strong></p><pre><code class="language-bash"># 原因：バックエンドが起動していないまたは到達できない
# バックエンドを確認
curl http://localhost:3000

# Nginxエラーログを確認
sudo tail -f /var/log/nginx/error.log

# ファイアウォールを確認
sudo ufw status
</code></pre><p><strong>2. 504 Gateway Timeout：</strong></p><pre><code class="language-nginx"># 原因：バックエンドの処理が遅すぎる
# 修正：タイムアウトを延長

location / {
    proxy_pass http://backend;
    proxy_read_timeout 300s;
    proxy_connect_timeout 300s;
}
</code></pre><p><strong>3. ヘッダーが転送されない：</strong></p><pre><code class="language-bash"># バックエンドでヘッダーを確認
# リクエストヘッダーをログに記録する

# Nginx設定
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
</code></pre><p><strong>4. 大きなファイルのアップロードが失敗する：</strong></p><pre><code class="language-nginx"># client_max_body_sizeを増やす
http {
    client_max_body_size 100M;
}
</code></pre><p><strong>5. WebSocket接続が失敗する：</strong></p><pre><code class="language-nginx"># upgradeヘッダーが必要
proxy_http_version 1.1;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "upgrade";
</code></pre><h3 id="82-debug-commands"><strong>8.2. デバッグコマンド</strong></h3><pre><code class="language-bash"># アップストリームの接続テスト
curl -v http://localhost:3000

# Nginx設定を確認
sudo nginx -t

# Nginxをリロード
sudo systemctl reload nginx

# エラーログをリアルタイムで確認
sudo tail -f /var/log/nginx/error.log

# アップストリームのステータスを確認（stub_statusが有効な場合）
curl http://localhost/nginx_status

# 特定ヘッダーでテスト
curl -H "Host: example.com" http://localhost

# プロキシヘッダーでテスト
curl -H "X-Forwarded-For: 1.2.3.4" http://localhost
</code></pre><hr><h2 id="9-best-practices"><strong>9. ベストプラクティス</strong></h2><h3 id="91-configuration"><strong>9.1. 設定</strong></h3><ol><li><strong>upstreamブロックを使用する：</strong></li></ol><pre><code class="language-nginx"># 推奨
upstream backend {
    server localhost:3000;
}

# 非推奨（フェイルオーバーやロードバランシングなし）
location / {
    proxy_pass http://localhost:3000;
}
</code></pre><ol start="2"><li><strong>適切なタイムアウトを設定する：</strong></li></ol><pre><code class="language-nginx">proxy_connect_timeout 60s;
proxy_send_timeout 60s;
proxy_read_timeout 60s;
</code></pre><ol start="3"><li><strong>キープアライブを有効にする：</strong></li></ol><pre><code class="language-nginx">upstream backend {
    server localhost:3000;
    keepalive 32;
}

location / {
    proxy_http_version 1.1;
    proxy_set_header Connection "";
}
</code></pre><ol start="4"><li><strong>ヘルスチェックを使用する：</strong></li></ol><pre><code class="language-nginx">server localhost:3000 max_fails=3 fail_timeout=30s;
</code></pre><h3 id="92-security"><strong>9.2. セキュリティ</strong></h3><ol><li><strong>内部構造を公開しない：</strong></li></ol><pre><code class="language-nginx">proxy_hide_header X-Powered-By;
</code></pre><ol start="2"><li><strong>リクエストサイズを制限する：</strong></li></ol><pre><code class="language-nginx">client_max_body_size 10M;
</code></pre><ol start="3"><li><strong>レート制限：</strong></li></ol><pre><code class="language-nginx">limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;

location /api/ {
    limit_req zone=api burst=20;
}
</code></pre><h3 id="93-performance"><strong>9.3. パフォーマンス</strong></h3><ol><li><strong>バッファ設定：</strong></li></ol><pre><code class="language-nginx">proxy_buffering on;
proxy_buffer_size 4k;
proxy_buffers 8 4k;
</code></pre><ol start="2"><li><strong>キャッシュ：</strong></li></ol><pre><code class="language-nginx">proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=my_cache:10m;

location / {
    proxy_cache my_cache;
    proxy_cache_valid 200 10m;
}
</code></pre><hr><h2 id="t%E1%BB%95ng-k%E1%BA%BFt"><strong>まとめ</strong></h2><p>この課では以下を学びました：</p><ul><li>✅ リバースプロキシの概念とユースケース</li><li>✅ proxy_passの設定とルーティング</li><li>✅ プロキシヘッダーとX-Forwardedヘッダー</li><li>✅ アップストリームサーバーとロードバランシング</li><li>✅ ヘルスチェックとモニタリング</li><li>✅ Node.js、Python、PHPを使った実例</li></ul><p><strong>次の課：</strong> ロードバランシングをさらに深掘りします——アルゴリズム、ストラテジー、高度な設定について学びます。</p>
