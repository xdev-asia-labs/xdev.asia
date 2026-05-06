---
id: 019c9617-fc84-72f3-8493-62103d1a8b50
title: '第6課：Nginxキャッシング'
slug: bai-6-nginx-caching
description: >-
  Nginxにおけるキャッシングのレッスンーブラウザキャッシュ（ExpiresおよびCache-Controlヘッダー）、
  プロキシキャッシュ、PHP向けFastCGIキャッシュ、キャッシュキーとゾーン。
  キャッシュパージ、バイパス戦略、最適化テクニックのガイド。
  パフォーマンス向上と負荷軽減のための実践例を含む。
duration_minutes: 235
is_free: true
video_url: null
sort_order: 6
section_title: "第2部：リバースプロキシ & ロードバランシング"
course:
  id: 019c9617-fc27-73c5-b664-a1902ec9ac00
  title: Nginxの基礎から応用まで
  slug: nginx-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3423" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="340" rx="12" fill="url(#bg-3423)"/>
  <g>
    <circle cx="730" cy="40" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="860" cy="130" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="990" cy="220" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="620" cy="50" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="140" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="240" x2="1100" y2="320" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="270" x2="1050" y2="340" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1020.3108891324554,172.5 1020.3108891324554,207.5 990,225 959.6891108675446,207.5 959.6891108675446,172.5 990,155" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🔒 DevSecOps — 第6課</text>
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第6課：Nginxキャッシング</tspan>
  </text>
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Nginxの基礎から応用まで</text>
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第2部：リバースプロキシ &amp; ロードバランシング</text>
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="tags"><strong>タグ</strong></h2><p><code>#Nginx</code> <code>#Caching</code> <code>#ProxyCache</code> <code>#FastCGI</code> <code>#BrowserCache</code> <code>#CacheControl</code> <code>#Expires</code> <code>#Performance</code> <code>#Optimization</code> <code>#CDN</code> <code>#CachePurging</code> <code>#CacheBypass</code> <code>#WebPerformance</code> <code>#StaticContent</code> <code>#DynamicContent</code> <code>#Tutorial</code> <code>#Production</code> <code>#BestPractices</code> <code>#DevOps</code> <code>#Infrastructure</code></p><hr><h2 id="1-browser-caching"><strong>1. ExpiresとCache-Controlヘッダーによるブラウザキャッシュ</strong></h2><p>ブラウザキャッシュはファイルをクライアントのブラウザに保存し、サーバーへのリクエスト数を減らしてロード時間を短縮します。</p><h3 id="11-expires-header"><strong>1.1. Expiresヘッダー</strong></h3><p>Expiresヘッダーは、キャッシュが期限切れになる具体的な日時を指定します。</p><p><strong>基本構文：</strong></p><pre><code class="language-nginx">location ~* \.(jpg|jpeg|png|gif|ico)$ {
    expires 30d;  # 30日間キャッシュ
}
</code></pre><p><strong>Expires値の例：</strong></p><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;
    root /var/www/html;
    
    # 画像 - 長期キャッシュ
    location ~* \.(jpg|jpeg|png|gif|ico|svg|webp)$ {
        expires 1y;  # 1年
        add_header Cache-Control "public, immutable";
    }
    
    # CSSとJavaScript - 中期キャッシュ
    location ~* \.(css|js)$ {
        expires 1M;  # 1ヶ月
        add_header Cache-Control "public";
    }
    
    # HTML - 短期キャッシュまたはキャッシュなし
    location ~* \.html$ {
        expires 1h;  # 1時間
        add_header Cache-Control "public, must-revalidate";
    }
    
    # APIレスポンス - キャッシュなし
    location /api/ {
        expires -1;  # キャッシュなし
        add_header Cache-Control "no-cache, no-store, must-revalidate";
    }
}
</code></pre><p><strong>時間単位：</strong></p><pre><code class="language-nginx">expires 1s;    # 1秒
expires 5m;    # 5分
expires 2h;    # 2時間
expires 7d;    # 7日
expires 3M;    # 3ヶ月（30日）
expires 1y;    # 1年

expires -1;    # キャッシュなし（Cache-Control: no-cache）
expires epoch; # Expires: Thu, 01 Jan 1970 00:00:01 GMT
expires max;   # Expires: Thu, 31 Dec 2037 23:55:55 GMT
expires off;   # Expiresヘッダーを設定しない
</code></pre><p><strong>詳細な例：</strong></p><pre><code class="language-nginx">server {
    listen 80;
    server_name cdn.example.com;
    root /var/www/cdn;
    
    # バージョン付きアセット - 永久にキャッシュ
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|woff|woff2|ttf)$ {
        # バージョン番号を含むファイルのみ適用
        # 例: style.v1.2.3.css, app.20240101.js
        if ($uri ~ "\.v[0-9]+\.|\.v?\d{8,}\.") {
            expires max;
            add_header Cache-Control "public, immutable";
        }
        
        # バージョンなしファイル
        expires 1M;
        add_header Cache-Control "public";
    }
    
    # 動画 - 長期キャッシュ、再検証可能
    location ~* \.(mp4|webm|ogg|avi)$ {
        expires 6M;
        add_header Cache-Control "public, max-age=15552000";
    }
    
    # ドキュメント - 短期キャッシュ
    location ~* \.(pdf|doc|docx|xls|xlsx)$ {
        expires 1d;
        add_header Cache-Control "public, max-age=86400";
    }
}
</code></pre><h3 id="12-cache-control-header"><strong>1.2. Cache-Controlヘッダー</strong></h3><p>Cache-ControlはExpiresの現代的な代替であり、より柔軟です。</p><p><strong>Cache-Controlディレクティブ：</strong></p><pre><code class="language-nginx"># public: ブラウザと中間キャッシュでキャッシュ可能
add_header Cache-Control "public";

# private: ブラウザのみキャッシュ、プロキシではキャッシュしない
add_header Cache-Control "private";

# no-cache: キャッシュ使用前に再検証が必要
add_header Cache-Control "no-cache";

# no-store: キャッシュを保存しない
add_header Cache-Control "no-store";

# max-age: キャッシュ期間（秒）
add_header Cache-Control "public, max-age=31536000";

# s-maxage: 共有キャッシュ（CDN、プロキシ）向けmax-age
add_header Cache-Control "public, max-age=3600, s-maxage=86400";

# must-revalidate: 期限切れ時に再検証が必要
add_header Cache-Control "public, max-age=3600, must-revalidate";

# immutable: コンテンツが変更されない
add_header Cache-Control "public, max-age=31536000, immutable";

# no-transform: コンテンツ変換を許可しない
add_header Cache-Control "public, no-transform";
</code></pre><p><strong>ディレクティブの組み合わせ：</strong></p><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;
    
    # バージョン管理付き静的アセット - 不変
    location ~* /static/.*\.(css|js)$ {
        expires 1y;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
    
    # 画像 - パブリック、長期キャッシュ
    location ~* \.(jpg|png|gif|svg)$ {
        expires 6M;
        add_header Cache-Control "public, max-age=15552000";
    }
    
    # HTML - 再検証付き短期キャッシュ
    location ~* \.html$ {
        expires 10m;
        add_header Cache-Control "public, max-age=600, must-revalidate";
    }
    
    # ユーザー固有コンテンツ - プライベート
    location /dashboard/ {
        add_header Cache-Control "private, max-age=300";
    }
    
    # 機密データ - キャッシュなし
    location /account/ {
        add_header Cache-Control "private, no-cache, no-store, must-revalidate";
        add_header Pragma "no-cache";
        add_header Expires "0";
    }
}
</code></pre><h3 id="13-conditional-caching"><strong>1.3. 条件付きキャッシュ</strong></h3><pre><code class="language-nginx">map $sent_http_content_type $expires {
    default                    off;
    text/html                  1h;
    text/css                   1M;
    application/javascript     1M;
    ~image/                    1y;
    application/pdf            7d;
    ~font/                     1y;
}

server {
    listen 80;
    server_name example.com;
    
    expires $expires;
    
    # 特定パスの上書き
    location /news/ {
        expires 5m;
        add_header Cache-Control "public, max-age=300";
    }
}
</code></pre><h3 id="14-etag-and-last-modified"><strong>1.4. ETagとLast-Modified</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;
    
    # ETagを有効化
    etag on;
    
    # Last-Modifiedヘッダーを有効化
    if_modified_since before;
    
    location / {
        root /var/www/html;
        # ブラウザはIf-None-Match（ETag）またはIf-Modified-Sinceを送信
        # ファイルが変更されていない場合、Nginxは304 Not Modifiedを返す
    }
}
</code></pre><hr><h2 id="2-proxy-caching"><strong>2. プロキシキャッシュの基本</strong></h2><p>プロキシキャッシュはバックエンドサーバーからのレスポンスを保存し、負荷とレスポンス時間を削減します。</p><h3 id="21-proxy-cache-zone"><strong>2.1. プロキシキャッシュゾーンの設定</strong></h3><pre><code class="language-nginx"># キャッシュパスと設定の定義（httpコンテキスト内）
http {
    proxy_cache_path /var/cache/nginx/proxy
                     levels=1:2
                     keys_zone=my_cache:10m
                     max_size=1g
                     inactive=60m
                     use_temp_path=off;
    
    server {
        listen 80;
        server_name example.com;
        
        location / {
            proxy_pass http://backend;
            
            # キャッシュを有効化
            proxy_cache my_cache;
            
            # キャッシュ有効期間
            proxy_cache_valid 200 302 10m;
            proxy_cache_valid 404 1m;
            proxy_cache_valid any 5m;
            
            # キャッシュステータスヘッダーを追加
            add_header X-Cache-Status $upstream_cache_status;
        }
    }
}
</code></pre><p><strong>パラメータの説明：</strong></p><pre><code class="language-nginx">proxy_cache_path /var/cache/nginx/proxy    # キャッシュ保存パス
    levels=1:2                              # ディレクトリ構造（I/O最適化）
    keys_zone=my_cache:10m                  # ゾーン名と共有メモリサイズ
    max_size=1g                             # ディスク上の最大キャッシュサイズ
    inactive=60m                            # 60分未使用のキャッシュを削除
    use_temp_path=off;                      # キャッシュパスへ直接書き込み
</code></pre><h3 id="22-cache-status-values"><strong>2.2. キャッシュステータス値</strong></h3><pre><code class="language-nginx">$upstream_cache_status の値：

- MISS       : キャッシュなし、バックエンドから取得
- HIT        : キャッシュから提供
- EXPIRED    : キャッシュ期限切れ、バックエンドから取得
- STALE      : 古いコンテンツを提供（設定時）
- UPDATING   : バックエンドからキャッシュ更新中
- REVALIDATED: バックエンドでキャッシュ再検証（304）
- BYPASS     : キャッシュをバイパス（設定による）
</code></pre><h3 id="23-cache-key"><strong>2.3. キャッシュキー</strong></h3><p>キャッシュキーはキャッシュされたアイテムの一意性を決定します。</p><p><strong>デフォルトキャッシュキー：</strong></p><pre><code class="language-nginx">proxy_cache_key $scheme$proxy_host$request_uri;

# 例：
# http://example.com/page?id=1
# キー: httpexample.com/page?id=1
</code></pre><p><strong>カスタムキャッシュキー：</strong></p><pre><code class="language-nginx">location / {
    proxy_pass http://backend;
    proxy_cache my_cache;
    
    # リクエストメソッドを含める
    proxy_cache_key "$scheme$request_method$host$request_uri";
    
    # 特定ヘッダーを含める
    # proxy_cache_key "$scheme$host$request_uri$http_accept_language";
    
    # Cookieを含める
    # proxy_cache_key "$scheme$host$request_uri$cookie_session";
}
</code></pre><h3 id="24-cache-methods"><strong>2.4. キャッシュメソッドと条件</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    
    location / {
        proxy_pass http://backend;
        proxy_cache my_cache;
        
        # GETとHEADメソッドのみキャッシュ
        proxy_cache_methods GET HEAD;
        
        # ステータスコード別キャッシュ有効期間
        proxy_cache_valid 200 301 302 10m;
        proxy_cache_valid 404 1m;
        proxy_cache_valid any 5m;
        
        # キャッシュ前の最小リクエスト数
        proxy_cache_min_uses 3;
        
        # バックエンドエラー時も古いキャッシュを提供
        proxy_cache_use_stale error timeout updating http_500 http_502 http_503 http_504;
        
        # キャッシュスタンピード防止
        proxy_cache_lock on;
        proxy_cache_lock_timeout 5s;
        proxy_cache_lock_age 5s;
    }
}
</code></pre><h3 id="25-complete-proxy-cache-example"><strong>2.5. 完全なプロキシキャッシュの例</strong></h3><pre><code class="language-nginx">http {
    # 複数のキャッシュゾーンを定義
    proxy_cache_path /var/cache/nginx/static
                     levels=1:2
                     keys_zone=static_cache:10m
                     max_size=500m
                     inactive=60m
                     use_temp_path=off;
    
    proxy_cache_path /var/cache/nginx/api
                     levels=1:2
                     keys_zone=api_cache:10m
                     max_size=200m
                     inactive=10m
                     use_temp_path=off;
    
    upstream backend {
        server backend1.example.com:8080;
        server backend2.example.com:8080;
    }
    
    server {
        listen 80;
        server_name example.com;
        
        # 静的コンテンツキャッシュ
        location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
            proxy_pass http://backend;
            proxy_cache static_cache;
            
            proxy_cache_valid 200 30d;
            proxy_cache_valid 404 1h;
            
            proxy_cache_use_stale error timeout updating http_500 http_502 http_503 http_504;
            proxy_cache_lock on;
            
            expires 30d;
            add_header Cache-Control "public, immutable";
            add_header X-Cache-Status $upstream_cache_status;
        }
        
        # APIキャッシュ
        location /api/ {
            proxy_pass http://backend;
            proxy_cache api_cache;
            
            proxy_cache_valid 200 5m;
            proxy_cache_valid 404 1m;
            
            proxy_cache_key "$scheme$request_method$host$request_uri$http_authorization";
            proxy_cache_methods GET HEAD;
            proxy_cache_min_uses 2;
            
            proxy_cache_use_stale error timeout updating;
            proxy_cache_lock on;
            
            add_header X-Cache-Status $upstream_cache_status;
        }
        
        # ユーザー固有コンテンツはキャッシュなし
        location /account/ {
            proxy_pass http://backend;
            proxy_cache off;
            proxy_no_cache 1;
            proxy_cache_bypass 1;
        }
    }
}
</code></pre><hr><h2 id="3-fastcgi-caching"><strong>3. FastCGIキャッシュ</strong></h2><p>FastCGIキャッシュはPHPアプリケーションなどの動的コンテンツに使用します。</p><h3 id="31-fastcgi-cache-configuration"><strong>3.1. FastCGIキャッシュ設定</strong></h3><pre><code class="language-nginx">http {
    # FastCGIキャッシュゾーンを定義
    fastcgi_cache_path /var/cache/nginx/fastcgi
                       levels=1:2
                       keys_zone=php_cache:10m
                       max_size=500m
                       inactive=60m
                       use_temp_path=off;
    
    # キャッシュキー
    fastcgi_cache_key "$scheme$request_method$host$request_uri";
    
    server {
        listen 80;
        server_name example.com;
        root /var/www/html;
        index index.php index.html;
        
        location ~ \.php$ {
            fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
            fastcgi_index index.php;
            include fastcgi_params;
            fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
            
            # FastCGIキャッシュを有効化
            fastcgi_cache php_cache;
            
            # キャッシュ有効期間
            fastcgi_cache_valid 200 60m;
            fastcgi_cache_valid 404 10m;
            
            # 古いキャッシュを提供する条件
            fastcgi_cache_use_stale error timeout updating invalid_header http_500;
            
            # キャッシュロック
            fastcgi_cache_lock on;
            fastcgi_cache_lock_timeout 5s;
            
            # キャッシュ前の最小利用数
            fastcgi_cache_min_uses 2;
            
            # キャッシュステータスヘッダーを追加
            add_header X-FastCGI-Cache $upstream_cache_status;
        }
    }
}
</code></pre><h3 id="32-wordpress-fastcgi"><strong>3.2. WordPressとFastCGIキャッシュ</strong></h3><pre><code class="language-nginx">http {
    fastcgi_cache_path /var/cache/nginx/wordpress
                       levels=1:2
                       keys_zone=wordpress:100m
                       max_size=1g
                       inactive=60m
                       use_temp_path=off;
    
    fastcgi_cache_key "$scheme$request_method$host$request_uri";
    
    server {
        listen 80;
        server_name blog.example.com;
        root /var/www/wordpress;
        index index.php;
        
        # キャッシュバイパス条件を設定
        set $skip_cache 0;
        
        # POSTリクエストとクエリ文字列を含むURL
        if ($request_method = POST) {
            set $skip_cache 1;
        }
        
        if ($query_string != "") {
            set $skip_cache 1;
        }
        
        # 以下のセグメントを含むURIはキャッシュしない
        if ($request_uri ~* "/wp-admin/|/xmlrpc.php|wp-.*.php|/feed/|index.php|sitemap(_index)?.xml") {
            set $skip_cache 1;
        }
        
        # ログインユーザーやコメント投稿者はキャッシュしない
        if ($http_cookie ~* "comment_author|wordpress_[a-f0-9]+|wp-postpass|wordpress_logged_in") {
            set $skip_cache 1;
        }
        
        location / {
            try_files $uri $uri/ /index.php?$args;
        }
        
        location ~ \.php$ {
            try_files $uri =404;
            fastcgi_split_path_info ^(.+\.php)(/.+)$;
            fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
            fastcgi_index index.php;
            include fastcgi_params;
            fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
            fastcgi_param PATH_INFO $fastcgi_path_info;
            
            # FastCGIキャッシュ設定
            fastcgi_cache wordpress;
            fastcgi_cache_valid 200 60m;
            fastcgi_cache_valid 404 10m;
            
            fastcgi_cache_bypass $skip_cache;
            fastcgi_no_cache $skip_cache;
            
            fastcgi_cache_use_stale error timeout updating invalid_header http_500 http_503;
            fastcgi_cache_lock on;
            
            add_header X-FastCGI-Cache $upstream_cache_status;
            add_header Cache-Control "public, max-age=3600";
        }
        
        # 静的ファイルのキャッシュ
        location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2)$ {
            expires 30d;
            add_header Cache-Control "public, immutable";
            access_log off;
        }
    }
}
</code></pre><hr><h2 id="4-cache-keys-zones"><strong>4. キャッシュキーとキャッシュゾーン</strong></h2><h3 id="41-cache-zones"><strong>4.1. キャッシュゾーン設定</strong></h3><pre><code class="language-nginx">http {
    # 静的コンテンツキャッシュ - 大容量、長期
    proxy_cache_path /var/cache/nginx/static
                     levels=1:2
                     keys_zone=static:100m
                     max_size=5g
                     inactive=7d
                     use_temp_path=off;
    
    # APIキャッシュ - 小容量、短期
    proxy_cache_path /var/cache/nginx/api
                     levels=1:2
                     keys_zone=api:50m
                     max_size=1g
                     inactive=1h
                     use_temp_path=off;
    
    # ユーザー固有キャッシュ
    proxy_cache_path /var/cache/nginx/user
                     levels=1:2
                     keys_zone=user:50m
                     max_size=2g
                     inactive=30m
                     use_temp_path=off;
    
    # HTMLページキャッシュ
    proxy_cache_path /var/cache/nginx/pages
                     levels=1:2
                     keys_zone=pages:20m
                     max_size=500m
                     inactive=2h
                     use_temp_path=off;
}
</code></pre><p><strong>ゾーンサイズ計算：</strong></p><pre><code>keys_zoneサイズはキャッシュメタデータを保存：
- 1MB ≈ 8,000キー
- 10MB ≈ 80,000キー
- 100MB ≈ 800,000キー

max_sizeは実際のコンテンツを保存：
- 利用可能なディスク容量に基づいて設定
- /var/cache/nginxのディスク使用量を監視
</code></pre><h3 id="42-advanced-cache-keys"><strong>4.2. 高度なキャッシュキー</strong></h3><p><strong>デバイスタイプ別キャッシュ：</strong></p><pre><code class="language-nginx">map $http_user_agent $device {
    default desktop;
    ~*mobile mobile;
    ~*tablet tablet;
}

server {
    location / {
        proxy_pass http://backend;
        proxy_cache my_cache;
        
        # デバイス別に異なるキャッシュ
        proxy_cache_key "$scheme$host$request_uri$device";
        
        add_header X-Device $device;
        add_header X-Cache-Status $upstream_cache_status;
    }
}
</code></pre><p><strong>言語別キャッシュ：</strong></p><pre><code class="language-nginx">map $http_accept_language $lang {
    default en;
    ~*^vi vi;
    ~*^ja ja;
    ~*^zh zh;
}

server {
    location / {
        proxy_pass http://backend;
        proxy_cache my_cache;
        
        # 言語別に異なるキャッシュ
        proxy_cache_key "$scheme$host$request_uri$lang";
        
        add_header Content-Language $lang;
    }
}
</code></pre><p><strong>複合キャッシュキー：</strong></p><pre><code class="language-nginx">map $http_cookie $user_segment {
    default "guest";
    ~*premium=1 "premium";
    ~*vip=1 "vip";
}

server {
    location /api/ {
        proxy_pass http://backend;
        proxy_cache api_cache;
        
        # 複数要素を組み合わせたキャッシュキー
        proxy_cache_key "$scheme$host$request_uri$user_segment$device$lang";
        
        add_header X-Cache-Key-Components "segment:$user_segment|device:$device|lang:$lang";
    }
}
</code></pre><h3 id="43-cache-hierarchy"><strong>4.3. キャッシュ階層</strong></h3><pre><code class="language-nginx">http {
    # L1キャッシュ - メモリ（小容量、高速）
    proxy_cache_path /dev/shm/nginx
                     levels=1
                     keys_zone=l1_cache:10m
                     max_size=100m
                     inactive=5m
                     use_temp_path=off;
    
    # L2キャッシュ - SSD（中容量、高速）
    proxy_cache_path /var/cache/nginx/l2
                     levels=1:2
                     keys_zone=l2_cache:50m
                     max_size=5g
                     inactive=1h
                     use_temp_path=off;
    
    # L3キャッシュ - HDD（大容量、低速）
    proxy_cache_path /mnt/cache/nginx/l3
                     levels=1:2
                     keys_zone=l3_cache:100m
                     max_size=50g
                     inactive=7d
                     use_temp_path=off;
    
    server {
        location /api/hot/ {
            proxy_pass http://backend;
            proxy_cache l1_cache;
            proxy_cache_valid 200 5m;
        }
        
        location /api/warm/ {
            proxy_pass http://backend;
            proxy_cache l2_cache;
            proxy_cache_valid 200 1h;
        }
        
        location /api/cold/ {
            proxy_pass http://backend;
            proxy_cache l3_cache;
            proxy_cache_valid 200 1d;
        }
    }
}
</code></pre><hr><h2 id="5-cache-purging-bypass"><strong>5. キャッシュパージとバイパス</strong></h2><h3 id="51-cache-bypass"><strong>5.1. キャッシュバイパス</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    
    location / {
        proxy_pass http://backend;
        proxy_cache my_cache;
        
        # 特殊ヘッダーでキャッシュをバイパス
        proxy_cache_bypass $http_x_no_cache;
        
        # またはCookieでバイパス
        proxy_cache_bypass $cookie_nocache;
        
        # またはパラメータでバイパス
        proxy_cache_bypass $arg_nocache;
    }
}
</code></pre><p><strong>複数のバイパス条件：</strong></p><pre><code class="language-nginx">server {
    location / {
        proxy_pass http://backend;
        proxy_cache my_cache;
        
        set $cache_bypass 0;
        
        # 特定のCookieでバイパス
        if ($http_cookie ~* "admin_logged_in") {
            set $cache_bypass 1;
        }
        
        # 特定のURLでバイパス
        if ($request_uri ~* "^/(admin|dashboard)/") {
            set $cache_bypass 1;
        }
        
        # POSTリクエストでバイパス
        if ($request_method = POST) {
            set $cache_bypass 1;
        }
        
        proxy_cache_bypass $cache_bypass;
        proxy_no_cache $cache_bypass;
    }
}
</code></pre><h3 id="52-cache-purging"><strong>5.2. キャッシュパージ（手動スクリプト）</strong></h3><pre><code class="language-bash">#!/bin/bash
# purge_cache.sh - 手動キャッシュパージスクリプト

CACHE_DIR="/var/cache/nginx"
CACHE_ZONE="my_cache"

# 全キャッシュをパージ
purge_all() {
    echo "全キャッシュをパージ中..."
    sudo rm -rf ${CACHE_DIR}/${CACHE_ZONE}/*
    echo "キャッシュのパージが完了しました！"
}

# 特定URLのキャッシュをパージ
purge_url() {
    local url=$1
    local cache_key=$(echo -n "$url" | md5sum | awk '{print $1}')
    local cache_path=$(find ${CACHE_DIR}/${CACHE_ZONE} -name "*${cache_key}*")
    
    if [ -n "$cache_path" ]; then
        echo "キャッシュをパージ中: $url"
        sudo rm -f $cache_path
        echo "パージ済み: $cache_path"
    else
        echo "キャッシュが見つかりません: $url"
    fi
}

case "$1" in
    all)
        purge_all
        ;;
    url)
        purge_url "$2"
        ;;
    *)
        echo "使用方法: $0 {all|url <url>}"
        exit 1
        ;;
esac
</code></pre><p><strong>キャッシュウォームアップスクリプト：</strong></p><pre><code class="language-bash">#!/bin/bash
# cache_warmup.sh - キャッシュウォームアップ

URLS=(
    "http://example.com/"
    "http://example.com/products"
    "http://example.com/about"
    "http://example.com/contact"
)

echo "キャッシュウォームアップを開始..."

for url in "${URLS[@]}"; do
    echo "ウォームアップ中: $url"
    curl -s -o /dev/null -w "ステータス: %{http_code}, 時間: %{time_total}秒\n" "$url"
    sleep 0.5
done

echo "キャッシュウォームアップが完了しました！"
</code></pre><hr><h2 id="6-practice-exercises"><strong>6. 練習問題</strong></h2><h3 id="exercise-1"><strong>演習1：ブラウザキャッシュ</strong></h3><ol><li>静的ファイルサーバーをセットアップする</li><li>Expiresヘッダーを設定する：<ul><li>画像：1年</li><li>CSS/JS：1ヶ月</li><li>HTML：1時間</li></ul></li><li>ブラウザのDevTools（ネットワークタブ）でテスト</li><li>キャッシュヘッダーを確認する</li></ol><h3 id="exercise-2"><strong>演習2：プロキシキャッシュ</strong></h3><ol><li>バックエンドサーバー（Node.js/Python）をセットアップ</li><li>Nginxプロキシキャッシュを設定</li><li>トラフィックを生成し、キャッシュのヒット/ミスを監視</li><li><code>/var/cache/nginx</code>のキャッシュファイルを確認</li></ol><h3 id="exercise-3"><strong>演習3：WordPress向けFastCGIキャッシュ</strong></h3><ol><li>WordPressをインストール</li><li>FastCGIキャッシュを設定</li><li>以下のキャッシュバイパスをテスト：<ul><li>ログインユーザー</li><li>管理ページ</li><li>POSTリクエスト</li></ul></li><li>パフォーマンス改善を測定</li></ol><h3 id="exercise-4"><strong>演習4：カスタムキャッシュキー</strong></h3><ol><li>カスタムキー（デバイスタイプ含む）でキャッシュを設定</li><li>モバイルとデスクトップからテスト</li><li>異なるキャッシュバージョンを確認</li></ol><h3 id="exercise-5"><strong>演習5：キャッシュパフォーマンステスト</strong></h3><ol><li>キャッシュありとなしでセットアップ</li><li>Apache Benchでベンチマーク：</li></ol><pre><code class="language-bash"># キャッシュなし
ab -n 1000 -c 10 http://example.com/

# キャッシュあり
ab -n 1000 -c 10 http://example.com/
</code></pre><ol start="3"><li>結果を比較する</li></ol><hr><h2 id="7-troubleshooting"><strong>7. トラブルシューティング</strong></h2><h3 id="71-cache-not-working"><strong>7.1. キャッシュが機能しない</strong></h3><p><strong>問題：</strong> X-Cache-Statusが常にMISSを表示する</p><p><strong>診断：</strong></p><pre><code class="language-bash"># キャッシュディレクトリの権限を確認
ls -la /var/cache/nginx/

# キャッシュ設定を確認
sudo nginx -T | grep cache

# キャッシュゾーンが定義されているか確認
sudo nginx -T | grep keys_zone

# キャッシュファイルの作成を監視
watch -n 1 'ls -lh /var/cache/nginx/proxy/'
</code></pre><p><strong>解決策：</strong></p><pre><code class="language-nginx"># 適切な権限を設定
sudo chown -R nginx:nginx /var/cache/nginx/
sudo chmod -R 755 /var/cache/nginx/

# キャッシュゾーンを確認
http {
    proxy_cache_path /var/cache/nginx/proxy
                     levels=1:2
                     keys_zone=my_cache:10m;
    
    server {
        location / {
            proxy_pass http://backend;
            proxy_cache my_cache;  # keys_zone名と一致させる
            proxy_cache_valid 200 10m;
        }
    }
}
</code></pre><h3 id="72-disk-space"><strong>7.2. キャッシュのディスク使用量が多すぎる</strong></h3><p><strong>解決策：</strong></p><pre><code class="language-nginx"># max_sizeを設定
proxy_cache_path /var/cache/nginx/proxy
                 levels=1:2
                 keys_zone=my_cache:10m
                 max_size=1g          # 1GBに制限
                 inactive=60m;         # 非アクティブファイルを削除

# またはtmpfs（RAMディスク）を使用
# /etc/fstabに追加：
# tmpfs /var/cache/nginx tmpfs defaults,size=512M 0 0
</code></pre><h3 id="73-stale-content"><strong>7.3. 古いコンテンツが提供される</strong></h3><p><strong>解決策：</strong></p><pre><code class="language-nginx"># キャッシュを手動でクリア
sudo rm -rf /var/cache/nginx/proxy/*
sudo systemctl reload nginx

# またはキャッシュバージョニングを実装
location / {
    proxy_pass http://backend;
    proxy_cache my_cache;
    
    # バージョンをキャッシュキーに追加
    proxy_cache_key "$scheme$host$request_uri$http_x_app_version";
}
</code></pre><hr><h2 id="summary"><strong>まとめ</strong></h2><p>このレッスンで学んだこと：</p><ul><li>✅ ExpiresとCache-Controlヘッダーによるブラウザキャッシュ</li><li>✅ プロキシキャッシュの設定（ゾーン、キー、有効期間）</li><li>✅ PHP/WordPress向けFastCGIキャッシュ</li><li>✅ 高度なキャッシュキー戦略（デバイス、言語、ユーザーセグメント別）</li><li>✅ キャッシュバイパスとパージの手法</li><li>✅ キャッシュパフォーマンスのトラブルシューティング</li></ul><p><strong>次のレッスン：</strong> SSL/TLS — Let's EncryptでHTTPSを設定し、セキュアな通信とHSTSを実装する方法について学びます。</p>
