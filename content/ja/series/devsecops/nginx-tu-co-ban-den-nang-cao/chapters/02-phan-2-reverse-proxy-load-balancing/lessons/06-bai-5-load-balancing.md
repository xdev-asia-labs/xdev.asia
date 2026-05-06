---
id: 019c9617-fc80-726d-b246-cc3af34c1a8b
title: '第5課：ロードバランシング'
slug: bai-5-load-balancing
description: >-
  Nginxにおけるロードバランシングの解説 — アルゴリズム（round-robin、least_conn、ip_hash、hash）、
  upstreamブロックの詳細設定、バックアップサーバー、重み、スティッキーセッション、ヘルスチェック。
  ハイアベイラビリティとパフォーマンス最適化のためのロードバランサー設定ガイド（実例付き）。
duration_minutes: 240
is_free: true
video_url: null
sort_order: 5
section_title: "第2部：リバースプロキシ & ロードバランシング"
course:
  id: 019c9617-fc27-73c5-b664-a1902ec9ac00
  title: Nginxの基礎から応用まで
  slug: nginx-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-155" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="340" rx="12" fill="url(#bg-155)"/>
  <g>
    <circle cx="689" cy="217" r="12" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="778" cy="106" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="867" cy="255" r="16" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="956" cy="144" r="33" fill="#818cf8" opacity="0.13"/>
    <circle cx="1045" cy="33" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="247" x2="1100" y2="327" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="277" x2="1050" y2="347" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="983.3730669589464,126 983.3730669589464,168 947,189 910.6269330410536,168 910.6269330410536,126.00000000000001 947,105" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>
  <rect x="80" y="50" width="148" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🔒 DevSecOps — 第5課</text>
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第5課：ロードバランシング</tspan>
  </text>
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Nginxの基礎から応用まで</text>
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第2部：リバースプロキシ &amp; ロードバランシング</text>
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-load-balancing-algorithms"><strong>1. ロードバランシングアルゴリズム</strong></h2><p>ロードバランシングは、リソース使用率の最適化、スループット向上、レイテンシ削減、高可用性確保のために、複数のサーバーにトラフィックを分散させる技術です。</p><h3 id="11-round-robin"><strong>1.1. Round-Robin（デフォルト）</strong></h3><p>Round-robinは、各サーバーへのリクエストをラウンドロビン形式で順番に振り分けます。</p><p><strong>設定：</strong></p><pre><code class="language-nginx">upstream backend {
    # Round-robinはデフォルト、宣言不要
    server backend1.example.com;
    server backend2.example.com;
    server backend3.example.com;
}

server {
    listen 80;
    server_name example.com;
    
    location / {
        proxy_pass http://backend;
    }
}
</code></pre><p><strong>動作の仕組み：</strong></p><pre><code>リクエスト1 → backend1
リクエスト2 → backend2
リクエスト3 → backend3
リクエスト4 → backend1（繰り返し）
リクエスト5 → backend2
リクエスト6 → backend3
...
</code></pre><p><strong>メリット：</strong></p><ul><li>シンプルで実装が簡単</li><li>リクエストを均等に分散</li><li>状態/セッション追跡が不要</li></ul><p><strong>デメリット：</strong></p><ul><li>サーバーの現在の負荷を考慮しない</li><li>サーバーの処理能力が異なる場合に不向き</li><li>セッションアフィニティを維持しない</li></ul><p><strong>ユースケース：</strong></p><ul><li>ステートレスアプリケーション</li><li>同一構成のサーバー群</li><li>シンプルな負荷分散</li></ul><p><strong>詳細な例：</strong></p><pre><code class="language-nginx">upstream web_backend {
    server web1.example.com:8080;
    server web2.example.com:8080;
    server web3.example.com:8080;
    server web4.example.com:8080;
}

server {
    listen 80;
    server_name www.example.com;
    
    access_log /var/log/nginx/loadbalancer.log;
    
    location / {
        proxy_pass http://web_backend;
        
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        add_header X-Upstream-Server $upstream_addr always;
    }
}
</code></pre><h3 id="12-least-connections"><strong>1.2. 最小コネクション（least_conn）</strong></h3><p>最小コネクションは、アクティブな接続数が最も少ないサーバーにリクエストをルーティングします。</p><p><strong>設定：</strong></p><pre><code class="language-nginx">upstream backend {
    least_conn;  # 最小コネクションアルゴリズムを有効化
    
    server backend1.example.com;
    server backend2.example.com;
    server backend3.example.com;
}

server {
    listen 80;
    
    location / {
        proxy_pass http://backend;
    }
}
</code></pre><p><strong>動作の仕組み：</strong></p><pre><code>初期状態：
backend1: 0接続
backend2: 0接続
backend3: 0接続

リクエスト1 → backend1（0接続）→ backend1: 1接続
リクエスト2 → backend2（0接続）→ backend2: 1接続
リクエスト3 → backend3（0接続）→ backend3: 1接続

backend1完了 → backend1: 0接続
リクエスト4 → backend1（0接続、最小）
</code></pre><p><strong>メリット：</strong></p><ul><li>リクエスト処理時間が異なる場合に優れた負荷分散</li><li>ビジー/アイドルサーバーに自動調整</li><li>長時間接続に適している</li></ul><p><strong>デメリット：</strong></p><ul><li>Round-robinより追跡オーバーヘッドが大きい</li><li>セッションアフィニティを維持しない</li></ul><p><strong>ユースケース：</strong></p><ul><li>リクエスト処理時間が変動するアプリケーション</li><li>長時間接続（ストリーミング、ダウンロード）</li><li>処理能力の異なるサーバー群</li></ul><p><strong>監視付きの例：</strong></p><pre><code class="language-nginx">upstream api_backend {
    least_conn;
    
    server api1.example.com:3000 max_fails=3 fail_timeout=30s;
    server api2.example.com:3000 max_fails=3 fail_timeout=30s;
    server api3.example.com:3000 max_fails=3 fail_timeout=30s;
    
    keepalive 32;
    keepalive_timeout 60s;
}

server {
    listen 80;
    server_name api.example.com;
    
    location / {
        proxy_pass http://api_backend;
        
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
</code></pre><h3 id="13-ip-hash"><strong>1.3. IP ハッシュ（ip_hash）</strong></h3><p>IP ハッシュは、同じクライアント IP からのリクエストを常に同じサーバーにルーティングします（スティッキーセッション）。</p><p><strong>設定：</strong></p><pre><code class="language-nginx">upstream backend {
    ip_hash;  # IPベースのスティッキーセッションを有効化
    
    server backend1.example.com;
    server backend2.example.com;
    server backend3.example.com;
}

server {
    listen 80;
    
    location / {
        proxy_pass http://backend;
    }
}
</code></pre><p><strong>動作の仕組み：</strong></p><pre><code>クライアントIP: 192.168.1.100
Hash(192.168.1.100) → backend2
→ 192.168.1.100からのリクエストはすべてbackend2へ

クライアントIP: 192.168.1.101
Hash(192.168.1.101) → backend1
→ 192.168.1.101からのリクエストはすべてbackend1へ
</code></pre><p><strong>メリット：</strong></p><ul><li>セッションアフィニティ（同じクライアント → 同じサーバー）</li><li>共有セッションストレージが不要</li><li>シンプルで効率的</li></ul><p><strong>デメリット：</strong></p><ul><li>クライアント数が少ない場合に分散が不均一</li><li>NAT/プロキシ配下では機能しにくい</li><li>サーバー障害時にセッションが失われる</li></ul><p><strong>ユースケース：</strong></p><ul><li>セッションベースのアプリケーション</li><li>状態維持が必要なアプリケーション</li><li>ショッピングカート、ユーザーセッション</li></ul><p><strong>ip_hashの重要な注意点：</strong></p><pre><code class="language-nginx">upstream backend {
    ip_hash;
    
    server backend1.example.com;
    server backend2.example.com;
    server backend3.example.com;
    
    # ip_hashではweightを使用しない
    # server backend1.example.com weight=3;  # ← 誤り！
    
    # backupは使用可能
    server backend4.example.com backup;
    
    # downマークも使用可能
    server backend5.example.com down;
}
</code></pre><h3 id="14-generic-hash"><strong>1.4. ジェネリックハッシュ（hash）</strong></h3><p>ジェネリックハッシュは、任意の変数に基づいてハッシュを計算できます。</p><p><strong>基本設定：</strong></p><pre><code class="language-nginx">upstream backend {
    hash $request_uri consistent;
    
    server backend1.example.com;
    server backend2.example.com;
    server backend3.example.com;
}

# 同じURI → 同じサーバー
# /api/users → 常にbackend2
# /api/products → 常にbackend1
</code></pre><p><strong>さまざまな変数でのハッシュ：</strong></p><pre><code class="language-nginx"># 1. URIでハッシュ（キャッシュフレンドリー）
upstream cache_backend {
    hash $request_uri consistent;
    
    server cache1.example.com;
    server cache2.example.com;
    server cache3.example.com;
}

# 2. Cookieでハッシュ
upstream cookie_backend {
    hash $cookie_sessionid consistent;
    
    server app1.example.com;
    server app2.example.com;
}

# 3. カスタムヘッダーでハッシュ
upstream custom_backend {
    hash $http_x_tenant_id consistent;
    
    server tenant1.example.com;
    server tenant2.example.com;
}

# 4. クエリパラメータでハッシュ
upstream param_backend {
    hash $arg_user_id consistent;
    
    server user1.example.com;
    server user2.example.com;
}
</code></pre><p><strong>メリット：</strong></p><ul><li>柔軟性が高い（任意の変数でハッシュ可能）</li><li>コンシステントハッシュによりキャッシュ無効化を最小化</li><li>キャッシング戦略に最適</li></ul><p><strong>デメリット：</strong></p><ul><li>他の方法より複雑</li><li>ハッシュキーの分散を理解する必要がある</li></ul><p><strong>ユースケース：</strong></p><ul><li>キャッシュレイヤー（CDN、プロキシキャッシュ）</li><li>マルチテナントアプリケーション</li><li>シャーディング戦略</li></ul><h3 id="15-random"><strong>1.5. ランダム</strong></h3><p>ランダムは、サーバーをランダムに選択します（オプションで重み付き）。</p><p><strong>設定：</strong></p><pre><code class="language-nginx">upstream backend {
    random;  # または: random two least_conn;
    
    server backend1.example.com;
    server backend2.example.com;
    server backend3.example.com;
}
</code></pre><p><strong>メリット：</strong></p><ul><li>シンプル</li><li>多数のサーバーでの良好な分散</li><li>低オーバーヘッド</li></ul><p><strong>デメリット：</strong></p><ul><li>予測不可能</li><li>セッションアフィニティを維持しない</li></ul><hr><h2 id="2-upstream-block-configuration"><strong>2. upstreamブロックの詳細設定</strong></h2><h3 id="21-basic-upstream"><strong>2.1. 基本的なupstream設定</strong></h3><pre><code class="language-nginx">upstream backend {
    server backend1.example.com:8080;
    server backend2.example.com:8080;
    server backend3.example.com:8080;
}

server {
    listen 80;
    
    location / {
        proxy_pass http://backend;
    }
}
</code></pre><h3 id="22-multiple-ports"><strong>2.2. 複数ポートのサーバー</strong></h3><pre><code class="language-nginx">upstream multi_port_backend {
    server backend.example.com:8080;
    server backend.example.com:8081;
    server backend.example.com:8082;
}
</code></pre><h3 id="23-unix-socket"><strong>2.3. Unixソケット接続</strong></h3><pre><code class="language-nginx">upstream socket_backend {
    server unix:/var/run/app1.sock;
    server unix:/var/run/app2.sock;
    server unix:/var/run/app3.sock;
}

server {
    listen 80;
    
    location / {
        proxy_pass http://socket_backend;
    }
}
</code></pre><h3 id="24-ipv6"><strong>2.4. IPv6サポート</strong></h3><pre><code class="language-nginx">upstream ipv6_backend {
    server [2001:db8::1]:8080;
    server [2001:db8::2]:8080;
    server [2001:db8::3]:8080;
}
</code></pre><h3 id="25-mixed"><strong>2.5. 混在設定</strong></h3><pre><code class="language-nginx">upstream mixed_backend {
    # TCPサーバー
    server backend1.example.com:8080;
    server 192.168.1.100:8080;
    
    # Unixソケット
    server unix:/var/run/app.sock;
    
    # IPv6
    server [2001:db8::1]:8080;
}
</code></pre><hr><h2 id="3-backup-servers-and-weights"><strong>3. バックアップサーバーと重み</strong></h2><h3 id="31-weight"><strong>3.1. 重み（Weight）</strong></h3><p>重みは、各サーバーが受け取るリクエストの割合を決定します。</p><p><strong>基本設定：</strong></p><pre><code class="language-nginx">upstream backend {
    server backend1.example.com weight=3;  # トラフィックの60%
    server backend2.example.com weight=1;  # トラフィックの20%
    server backend3.example.com weight=1;  # トラフィックの20%
}

# 合計重み = 3 + 1 + 1 = 5
# backend1: 3/5 = 60%
# backend2: 1/5 = 20%
# backend3: 1/5 = 20%
</code></pre><p><strong>ユースケース1：処理能力の異なるサーバー</strong></p><pre><code class="language-nginx">upstream capacity_backend {
    # 大容量サーバー - 50%のトラフィック
    server large.example.com weight=5;
    
    # 中容量サーバー - それぞれ25%
    server medium1.example.com weight=2.5;
    server medium2.example.com weight=2.5;
}
</code></pre><p><strong>ユースケース2：カナリーデプロイ</strong></p><pre><code class="language-nginx">upstream canary_backend {
    # 本番サーバー - 90%のトラフィック
    server prod1.example.com weight=45;
    server prod2.example.com weight=45;
    
    # カナリーサーバー - 10%のトラフィック
    server canary.example.com weight=10;
}

server {
    listen 80;
    server_name app.example.com;
    
    location / {
        proxy_pass http://canary_backend;
        
        add_header X-Upstream-Server $upstream_addr always;
    }
}
</code></pre><p><strong>ユースケース3：ブルー/グリーンデプロイ</strong></p><pre><code class="language-nginx">upstream bluegreen_backend {
    # Blue（現行）- 最初は100%
    server blue.example.com weight=10;
    
    # Green（新規）- 最初は0%
    server green.example.com weight=0;
}

# 段階的な移行:
# ステップ1: weight=10 / weight=0  (100% blue)
# ステップ2: weight=9  / weight=1  (90% blue, 10% green)
# ステップ3: weight=5  / weight=5  (それぞれ50%)
# ステップ4: weight=1  / weight=9  (10% blue, 90% green)
# ステップ5: weight=0  / weight=10 (100% green)
</code></pre><p><strong>重要：ip_hashではweightが機能しない</strong></p><pre><code class="language-nginx">upstream bad_config {
    ip_hash;
    
    # ip_hashではweightは無視される！
    server backend1.example.com weight=3;  # ← 効果なし！
    server backend2.example.com weight=1;
}
</code></pre><h3 id="32-backup-servers"><strong>3.2. バックアップサーバー</strong></h3><p>バックアップサーバーは、すべてのプライマリサーバーがダウンした場合のみトラフィックを受け取ります。</p><p><strong>基本設定：</strong></p><pre><code class="language-nginx">upstream backend {
    server backend1.example.com;
    server backend2.example.com;
    server backend3.example.com;
    
    # バックアップサーバー
    server backup1.example.com backup;
    server backup2.example.com backup;
}
</code></pre><p><strong>動作の仕組み：</strong></p><pre><code>通常運用時：
- backend1、backend2、backend3がトラフィックを処理
- backup1、backup2はアイドル状態

backend1が障害：
- backend2、backend3がトラフィックを処理
- backup1、backup2はまだアイドル

すべてのプライマリが障害：
- backup1、backup2がトラフィックを処理

backend1が回復：
- トラフィックがbackend1に戻る
- backup1、backup2は再びアイドルへ
</code></pre><p><strong>メンテナンスモードの例：</strong></p><pre><code class="language-nginx">upstream maintenance_backend {
    server prod1.example.com max_fails=3 fail_timeout=30s;
    server prod2.example.com max_fails=3 fail_timeout=30s;
    server prod3.example.com max_fails=3 fail_timeout=30s;
    
    # メンテナンスページサーバー
    server maintenance.example.com:8080 backup;
}

server {
    listen 80;
    server_name app.example.com;
    
    location / {
        proxy_pass http://maintenance_backend;
        
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
</code></pre><h3 id="33-combined"><strong>3.3. 重みとバックアップの組み合わせ</strong></h3><p><strong>シナリオ：本番 + ステージング + 緊急</strong></p><pre><code class="language-nginx">upstream prod_staging_emergency {
    # 本番サーバー - メインのトラフィック
    server prod1.example.com weight=5 max_fails=3 fail_timeout=30s;
    server prod2.example.com weight=5 max_fails=3 fail_timeout=30s;
    
    # ステージングサーバー - バックアップ
    server staging.example.com weight=2 backup max_fails=5;
    
    # 緊急静的サーバー - 最後の手段
    server emergency.example.com backup;
}
</code></pre><hr><h2 id="4-sticky-sessions"><strong>4. スティッキーセッション</strong></h2><h3 id="41-ip-hash"><strong>4.1. IPハッシュ方式（組み込み）</strong></h3><pre><code class="language-nginx">upstream backend {
    ip_hash;
    
    server backend1.example.com;
    server backend2.example.com;
    server backend3.example.com;
}
</code></pre><p><strong>ip_hashの制限：</strong></p><ul><li>NAT配下では機能しにくい</li><li>分散が不均一</li><li>柔軟性が低い</li></ul><h3 id="42-hash-cookie"><strong>4.2. Cookieでのハッシュ（推奨）</strong></h3><pre><code class="language-nginx">upstream backend {
    hash $cookie_sessionid consistent;
    
    server backend1.example.com;
    server backend2.example.com;
    server backend3.example.com;
}

server {
    listen 80;
    
    location / {
        proxy_pass http://backend;
        
        proxy_set_header Cookie $http_cookie;
    }
}
</code></pre><h3 id="43-custom-session"><strong>4.3. カスタムセッション管理</strong></h3><p><strong>バックエンドでセッションCookieを作成：</strong></p><pre><code class="language-javascript">// Node.js の例
app.use((req, res, next) => {
    if (!req.cookies.server_id) {
        // サーバー識別子でCookieを設定
        res.cookie('server_id', process.env.SERVER_ID, {
            maxAge: 3600000,
            httpOnly: true
        });
    }
    next();
});
</code></pre><p><strong>CookieベースのNginxルーティング：</strong></p><pre><code class="language-nginx">map $cookie_server_id $backend_server {
    "server1" "backend1.example.com:8080";
    "server2" "backend2.example.com:8080";
    "server3" "backend3.example.com:8080";
    default   "backend1.example.com:8080";
}

server {
    listen 80;
    
    location / {
        proxy_pass http://$backend_server;
        
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header Cookie $http_cookie;
    }
}
</code></pre><h3 id="44-header-affinity"><strong>4.4. ヘッダーによるセッションアフィニティ</strong></h3><pre><code class="language-nginx">upstream backend {
    hash $http_x_session_id consistent;
    
    server backend1.example.com;
    server backend2.example.com;
    server backend3.example.com;
}

server {
    listen 80;
    
    location / {
        proxy_pass http://backend;
        
        proxy_set_header X-Session-ID $http_x_session_id;
    }
}
</code></pre><hr><h2 id="5-health-checks"><strong>5. ヘルスチェック</strong></h2><h3 id="51-passive-health-checks"><strong>5.1. パッシブヘルスチェック（オープンソース）</strong></h3><pre><code class="language-nginx">upstream backend {
    server backend1.example.com max_fails=3 fail_timeout=30s;
    server backend2.example.com max_fails=3 fail_timeout=30s;
    server backend3.example.com max_fails=3 fail_timeout=30s;
}

# max_fails=3: 3回失敗でダウンとマーク
# fail_timeout=30s: 30秒後に再試行
</code></pre><p><strong>詳細なパラメータ：</strong></p><pre><code class="language-nginx">upstream detailed_health {
    server backend1.example.com
        max_fails=5          # ダウンとマークするまでの失敗回数
        fail_timeout=60s     # 再試行までの待機時間
        max_conns=1000;      # 最大同時接続数
    
    server backend2.example.com
        max_fails=3
        fail_timeout=30s;
    
    server backend3.example.com backup;
}
</code></pre><h3 id="52-health-endpoint"><strong>5.2. ヘルスチェックエンドポイント</strong></h3><p><strong>バックエンドのヘルスエンドポイント（Node.js）：</strong></p><pre><code class="language-javascript">const express = require('express');
const app = express();

app.get('/health', (req, res) => {
    const dbOk = checkDatabase();
    const memUsage = process.memoryUsage();
    const memOk = memUsage.heapUsed < 500 * 1024 * 1024;
    const depsOk = checkDependencies();
    
    if (dbOk && memOk && depsOk) {
        res.status(200).json({
            status: 'healthy',
            timestamp: new Date().toISOString(),
            uptime: process.uptime()
        });
    } else {
        res.status(503).json({
            status: 'unhealthy',
            database: dbOk,
            memory: memOk,
            dependencies: depsOk
        });
    }
});

app.listen(3000);
</code></pre><p><strong>Nginxのヘルスチェックルーティング：</strong></p><pre><code class="language-nginx">upstream backend {
    server backend1.example.com:3000 max_fails=3 fail_timeout=30s;
    server backend2.example.com:3000 max_fails=3 fail_timeout=30s;
    server backend3.example.com:3000 max_fails=3 fail_timeout=30s;
}

server {
    listen 80;
    server_name example.com;
    
    location / {
        proxy_pass http://backend;
    }
    
    # ヘルスチェックエンドポイント（内部のみ）
    location /health {
        access_log off;
        proxy_pass http://backend/health;
        
        allow 127.0.0.1;
        allow 10.0.0.0/8;
        deny all;
    }
}
</code></pre><h3 id="53-external-health-check"><strong>5.3. 外部ヘルスチェックスクリプト</strong></h3><p><strong>監視スクリプト（Python）：</strong></p><pre><code class="language-python">#!/usr/bin/env python3
# health_monitor.py

import requests
import time
from datetime import datetime

BACKENDS = [
    'http://backend1.example.com:3000/health',
    'http://backend2.example.com:3000/health',
    'http://backend3.example.com:3000/health',
]

CHECK_INTERVAL = 10  # 秒
UNHEALTHY_THRESHOLD = 3

backend_fail_counts = {url: 0 for url in BACKENDS}

def check_health(url):
    try:
        response = requests.get(url, timeout=5)
        if response.status_code == 200:
            data = response.json()
            return data.get('status') == 'healthy'
        return False
    except Exception as e:
        print(f"エラー {url}: {e}")
        return False

def main():
    while True:
        for url in BACKENDS:
            healthy = check_health(url)
            
            if healthy:
                if backend_fail_counts[url] > 0:
                    print(f"{datetime.now()} - {url} 回復")
                backend_fail_counts[url] = 0
            else:
                backend_fail_counts[url] += 1
                print(f"{datetime.now()} - {url} 不健全 "
                      f"({backend_fail_counts[url]}回連続失敗)")
                
                if backend_fail_counts[url] >= UNHEALTHY_THRESHOLD:
                    print(f"{url} をダウンとしてマーク")
        
        time.sleep(CHECK_INTERVAL)

if __name__ == '__main__':
    main()
</code></pre><hr><h2 id="6-real-world-examples"><strong>6. 実際の例</strong></h2><h3 id="61-high-traffic-web-app"><strong>6.1. 高トラフィックWebアプリケーション</strong></h3><pre><code class="language-nginx">upstream web_app {
    least_conn;
    
    server app1.example.com:8080 weight=5 max_fails=3 fail_timeout=30s max_conns=1000;
    server app2.example.com:8080 weight=5 max_fails=3 fail_timeout=30s max_conns=1000;
    server app3.example.com:8080 weight=3 max_fails=3 fail_timeout=30s max_conns=800;
    
    server backup.example.com:8080 backup;
    
    keepalive 128;
    keepalive_timeout 90s;
    keepalive_requests 1000;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name www.example.com;
    
    ssl_certificate /etc/ssl/certs/example.com.crt;
    ssl_certificate_key /etc/ssl/private/example.com.key;
    ssl_protocols TLSv1.2 TLSv1.3;
    
    location / {
        proxy_pass http://web_app;
        
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
        
        proxy_buffering on;
        proxy_buffer_size 8k;
        proxy_buffers 16 8k;
        
        add_header X-Upstream-Server $upstream_addr always;
        add_header X-Upstream-Response-Time $upstream_response_time always;
    }
    
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2)$ {
        root /var/www/static;
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }
}
</code></pre><h3 id="62-api-gateway-microservices"><strong>6.2. マイクロサービスのAPIゲートウェイ</strong></h3><pre><code class="language-nginx"># ユーザーサービス
upstream user_service {
    least_conn;
    server user1.internal:8001 max_fails=2 fail_timeout=20s;
    server user2.internal:8001 max_fails=2 fail_timeout=20s;
    keepalive 32;
}

# プロダクトサービス
upstream product_service {
    least_conn;
    server product1.internal:8002 max_fails=2 fail_timeout=20s;
    server product2.internal:8002 max_fails=2 fail_timeout=20s;
    keepalive 32;
}

# オーダーサービス（カートのためにスティッキーセッション）
upstream order_service {
    ip_hash;
    server order1.internal:8003 max_fails=2 fail_timeout=20s;
    server order2.internal:8003 max_fails=2 fail_timeout=20s;
    keepalive 32;
}

# 決済サービス（重要 - 高い冗長性）
upstream payment_service {
    least_conn;
    server payment1.internal:8004 weight=3 max_fails=1 fail_timeout=10s;
    server payment2.internal:8004 weight=3 max_fails=1 fail_timeout=10s;
    server payment3.internal:8004 weight=2 max_fails=1 fail_timeout=10s;
    server payment_backup.internal:8004 backup;
    keepalive 64;
}

limit_req_zone $binary_remote_addr zone=api_limit:10m rate=100r/s;
limit_req_zone $binary_remote_addr zone=payment_limit:10m rate=10r/s;

server {
    listen 443 ssl http2;
    server_name api.example.com;
    
    proxy_http_version 1.1;
    proxy_set_header Connection "";
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    
    location /api/v1/users {
        limit_req zone=api_limit burst=50 nodelay;
        proxy_pass http://user_service;
        proxy_read_timeout 30s;
    }
    
    location /api/v1/products {
        limit_req zone=api_limit burst=50 nodelay;
        proxy_pass http://product_service;
        proxy_read_timeout 30s;
    }
    
    location /api/v1/orders {
        limit_req zone=api_limit burst=30 nodelay;
        proxy_pass http://order_service;
        proxy_read_timeout 60s;
    }
    
    location /api/v1/payments {
        limit_req zone=payment_limit burst=5 nodelay;
        proxy_pass http://payment_service;
        proxy_read_timeout 90s;
        proxy_connect_timeout 10s;
    }
}
</code></pre><hr><h2 id="7-practice-exercises"><strong>7. 練習課題</strong></h2><h3 id="exercise-1"><strong>課題1：基本的なロードバランシング</strong></h3><ol><li>ポート3000、3001、3002でアプリケーションの3インスタンスを起動</li><li>ラウンドロビンでNginxを設定</li><li>トラフィックを生成して分散を確認（ログをチェック）</li></ol><h3 id="exercise-2"><strong>課題2：重み付きロードバランシング</strong></h3><ol><li>重み5、3、2で3つのバックエンドサーバーを設定</li><li>100リクエストを生成</li><li>サーバーごとのリクエスト数を数えて比率を確認（約50%、30%、20%）</li></ol><h3 id="exercise-3"><strong>課題3：スティッキーセッション</strong></h3><ol><li>ip_hashロードバランシングを設定</li><li>同じクライアントから複数リクエストを送信</li><li>すべてのリクエストが同じバックエンドに届くことを確認</li></ol><h3 id="exercise-4"><strong>課題4：バックアップサーバー</strong></h3><ol><li>2つのプライマリサーバーと1つのバックアップを設定</li><li>両方のプライマリを停止</li><li>トラフィックがバックアップに切り替わることを確認</li><li>プライマリを再起動してトラフィックが戻ることを確認</li></ol><h3 id="exercise-5"><strong>課題5：ヘルスチェック</strong></h3><ol><li>max_fails=2 fail_timeout=30sでバックエンドを設定</li><li>/healthエンドポイントを設定</li><li>バックエンド障害をシミュレート（サービス停止）</li><li>ログを監視してフェイルオーバーを確認</li><li>サービスを再起動して回復を確認</li></ol><h3 id="exercise-6"><strong>課題6：カナリーデプロイ</strong></h3><ol><li>本番サーバーを設定（各weight=45）</li><li>カナリーサーバーを追加（weight=10）</li><li>10%のトラフィックがカナリーに行くことを確認</li><li>カナリーの重みを徐々に増加</li><li>カナリーへの完全移行を完了</li></ol><hr><h2 id="8-troubleshooting"><strong>8. トラブルシューティング</strong></h2><h3 id="81-uneven-distribution"><strong>8.1. 不均一な分散</strong></h3><p><strong>問題：</strong></p><pre><code>サーバー1: 1000リクエスト
サーバー2: 500リクエスト
サーバー3: 300リクエスト
</code></pre><p><strong>診断：</strong></p><pre><code class="language-bash"># 重みを確認
grep -A10 "upstream" /etc/nginx/nginx.conf

# 少数のクライアントでip_hashを使用していないか確認
# サーバーの状態/パフォーマンスを確認
</code></pre><p><strong>解決策：</strong></p><pre><code class="language-nginx"># round-robinの代わりにleast_connを使用
upstream backend {
    least_conn;
    server backend1.example.com;
    server backend2.example.com;
    server backend3.example.com;
}
</code></pre><h3 id="82-sticky-sessions"><strong>8.2. スティッキーセッションが機能しない</strong></h3><p><strong>解決策：</strong></p><pre><code class="language-nginx"># ip_hashの代わりにCookieでハッシュを使用
upstream backend {
    hash $cookie_sessionid consistent;
    server backend1.example.com;
    server backend2.example.com;
}
</code></pre><h3 id="83-health-check"><strong>8.3. ヘルスチェックが障害を検知しない</strong></h3><p><strong>解決策：</strong></p><pre><code class="language-nginx"># しきい値を下げる
upstream backend {
    server backend1.example.com max_fails=2 fail_timeout=10s;
    server backend2.example.com max_fails=2 fail_timeout=10s;
}
</code></pre><h3 id="84-timeout"><strong>8.4. バックエンドタイムアウトの問題</strong></h3><p><strong>問題：</strong> 504 Gateway Timeout エラー</p><p><strong>解決策：</strong></p><pre><code class="language-nginx">location / {
    proxy_pass http://backend;
    
    proxy_connect_timeout 60s;
    proxy_send_timeout 60s;
    proxy_read_timeout 120s;
}
</code></pre><h3 id="85-connection-pool"><strong>8.5. 接続プールの枯渇</strong></h3><p><strong>問題：</strong> バックエンドへの接続が多すぎる、高負荷時の502エラー</p><p><strong>解決策：</strong></p><pre><code class="language-nginx">upstream backend {
    server backend1.example.com max_conns=1000;
    server backend2.example.com max_conns=1000;
    
    keepalive 128;
    keepalive_timeout 75s;
    keepalive_requests 1000;
}

server {
    location / {
        proxy_pass http://backend;
        proxy_http_version 1.1;
        proxy_set_header Connection "";
    }
}
</code></pre><hr><h2 id="9-best-practices"><strong>9. ベストプラクティス</strong></h2><h3 id="91-configuration"><strong>9.1. 設定</strong></h3><pre><code class="language-nginx"># 1. 分かりやすいupstream名を使用
upstream user_api_backend {  # 良い例
    # ...
}

# 2. 設定をドキュメント化
upstream payment_service {
    # 処理時間が変動するためleast_connを使用
    # 重要なパスには厳格なヘルスチェックを設定
    least_conn;
    
    server payment1.internal:8080 weight=3 max_fails=1 fail_timeout=10s;
    server payment2.internal:8080 weight=3 max_fails=1 fail_timeout=10s;
    server payment_backup.internal:8080 backup;
    
    keepalive 32;
}

# 3. 懸念事項を分離
include /etc/nginx/conf.d/upstreams/*.conf;
include /etc/nginx/conf.d/servers/*.conf;
</code></pre><h3 id="92-performance"><strong>9.2. パフォーマンス</strong></h3><pre><code class="language-nginx">upstream optimized_backend {
    # 1. 良好な分散のためleast_connを使用
    least_conn;
    
    # 2. keepaliveを有効化
    keepalive 128;
    keepalive_timeout 75s;
    keepalive_requests 1000;
    
    # 3. 適切なmax_connsを設定
    server backend1.example.com max_conns=1000;
    server backend2.example.com max_conns=1000;
}

server {
    location / {
        proxy_pass http://optimized_backend;
        
        # 4. keepaliveでHTTP/1.1を使用
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        
        # 5. バッファリングを有効化
        proxy_buffering on;
        proxy_buffer_size 8k;
        proxy_buffers 16 8k;
    }
}
</code></pre><h3 id="93-monitoring"><strong>9.3. 監視</strong></h3><pre><code class="language-nginx"># upstream情報のログ記録
log_format upstream_log '$remote_addr - [$time_local] '
    '"$request" $status '
    'upstream: $upstream_addr '
    'response_time: $upstream_response_time '
    'connect_time: $upstream_connect_time';

access_log /var/log/nginx/upstream.log upstream_log;

# デバッグヘッダーの追加（本番環境以外）
add_header X-Upstream-Server $upstream_addr always;
add_header X-Upstream-Response-Time $upstream_response_time always;

# stub_statusの有効化
server {
    listen 8080;
    location /nginx_status {
        stub_status;
        allow 127.0.0.1;
        deny all;
    }
}
</code></pre><h3 id="94-security"><strong>9.4. セキュリティ</strong></h3><pre><code class="language-nginx"># 1. サーバーごとの最大接続数を制限
upstream backend {
    server backend1.example.com max_conns=1000;
}

# 2. タイムアウトを設定
proxy_connect_timeout 10s;
proxy_send_timeout 60s;
proxy_read_timeout 60s;

# 3. upstreamエラーを隠す
proxy_intercept_errors on;
error_page 502 503 504 /50x.html;

# 4. レートリミット
limit_req_zone $binary_remote_addr zone=backend_limit:10m rate=100r/s;

location / {
    limit_req zone=backend_limit burst=50 nodelay;
    proxy_pass http://backend;
}
</code></pre><hr><h2 id="summary"><strong>まとめ</strong></h2><p>この課では以下を学びました：</p><ul><li>✅ ロードバランシングアルゴリズム（round-robin、least_conn、ip_hash、hash、random）</li><li>✅ upstreamブロックの詳細設定</li><li>✅ バックアップサーバーと重み分散</li><li>✅ スティッキーセッション戦略</li><li>✅ アクティブ/パッシブヘルスチェック</li><li>✅ 実際のユースケースとベストプラクティス</li></ul><p><strong>次の課：</strong> キャッシング — 静的コンテンツ、APIレスポンスのキャッシュ方法と、プロキシキャッシュによるパフォーマンス最適化を解説します。</p>
