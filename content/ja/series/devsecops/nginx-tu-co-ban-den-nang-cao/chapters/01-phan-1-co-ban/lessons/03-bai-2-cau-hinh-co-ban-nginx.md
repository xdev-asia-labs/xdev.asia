---
id: 019c9617-fc76-72eb-85f7-2f2ec6724934
title: '第2課：Nginxの基本設定'
slug: bai-2-cau-hinh-co-ban-nginx
description: >-
  nginx.confの構文、コンテキスト（http/server/location）、基本ディレクティブなどNginxの設定を学びます。
  バーチャルホストの作成、静的ファイルの配信、インデックスファイル、autoindex、カスタムエラーページの設定方法を解説します。
  実用的な例とプロダクションのベストプラクティスを含みます。
duration_minutes: 155
is_free: true
video_url: null
sort_order: 2
section_title: "第1部：基礎"
course:
  id: 019c9617-fc27-73c5-b664-a1902ec9ac00
  title: Nginxの基礎から応用まで
  slug: nginx-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4663" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4663)"/>

  <!-- Decorations -->
  <g>
    <circle cx="653" cy="49" r="16" fill="#c084fc" opacity="0.14"/>
    <circle cx="706" cy="142" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="759" cy="235" r="24" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="812" cy="68" r="13" fill="#c084fc" opacity="0.11"/>
    <circle cx="865" cy="161" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="219" x2="1100" y2="299" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="249" x2="1050" y2="319" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="948.444863728671,102 948.444863728671,136 919,153 889.555136271329,136 889.555136271329,102.00000000000001 919,85" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="128" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — 第2課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第2課：Nginxの基本設定</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Nginxの基礎から応用まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第1部：基礎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-c%C3%BA-ph%C3%A1p-file-c%E1%BA%A5u-h%C3%ACnh-nginxconf"><strong>1. nginx.conf設定ファイルの構文</strong></h2><p><code>nginx.conf</code>ファイルはNginxの中核であり、Webサーバーの動作全体を定義します。設定構文を理解することがNginxを使いこなす第一歩です。</p><h3 id="11-c%E1%BA%A5u-tr%C3%BAc-c%C6%A1-b%E1%BA%A3n"><strong>1.1. 基本構造</strong></h3><pre><code class="language-nginx"># シンプルディレクティブ (simple directive)
worker_processes 4;

# ブロックディレクティブ (block directive)
events {
    worker_connections 1024;
}

# ネストされたブロック (nested blocks)
http {
    server {
        location / {
            root /var/www/html;
        }
    }
}
</code></pre><h3 id="12-quy-t%E1%BA%AFc-c%C3%BA-ph%C3%A1p"><strong>1.2. 構文ルール</strong></h3><p><strong>1. ディレクティブ：</strong></p><ul><li>各ディレクティブはセミコロン<code>;</code>で終わります</li><li>ディレクティブはシンプル（1行）またはブロック（<code>{}</code>付き）</li><li>大文字小文字の区別あり：<code>Root</code>と<code>root</code>は別物</li></ul><pre><code class="language-nginx"># 正しい
worker_processes 2;

# 誤り - セミコロンなし
worker_processes 2

# 誤り - 大文字小文字が違う
Worker_Processes 2;
</code></pre><p><strong>2. コメント：</strong></p><pre><code class="language-nginx"># これは1行コメントです
worker_processes 4;  # 行末コメント

# Nginxには複数行コメントはありません
# 各行に # を使用する必要があります
</code></pre><p><strong>3. ファイルのインクルード：</strong></p><pre><code class="language-nginx"># 別ファイルをインクルード
include /etc/nginx/mime.types;

# ワイルドカードで複数ファイルをインクルード
include /etc/nginx/conf.d/*.conf;
include /etc/nginx/sites-enabled/*;
</code></pre><p><strong>4. 変数：</strong></p><pre><code class="language-nginx"># Nginxには多くの組み込み変数があります
# $で始まります
$remote_addr    # クライアントのIP
$request_uri    # リクエストのURI
$host          # ホスト名

# 使用例
location / {
    return 200 "Your IP: $remote_addr\n";
}
</code></pre><p><strong>5. 文字列の値：</strong></p><pre><code class="language-nginx"># シンプルな値はクォート不要
root /var/www/html;

# スペースや特殊文字がある場合はクォートが必要
error_log "/var/log/nginx/error.log" warn;
add_header X-Custom-Header "Hello World";

# シングルクォートまたはダブルクォートが使用可能
root '/var/www/html';
root "/var/www/html";
</code></pre><h3 id="13-units-v%C3%A0-sizes"><strong>1.3. 単位とサイズ</strong></h3><pre><code class="language-nginx"># 時間の単位
client_body_timeout 60s;      # 秒（デフォルト）
client_body_timeout 60;       # 秒と同じ
client_body_timeout 60m;      # 分
client_body_timeout 1h;       # 時間
client_body_timeout 1d;       # 日

# サイズの単位
client_max_body_size 10m;     # メガバイト
client_max_body_size 10M;     # メガバイトと同じ
client_max_body_size 1g;      # ギガバイト
client_max_body_size 1024k;   # キロバイト
client_max_body_size 1048576; # バイト（単位なし）
</code></pre><h3 id="14-measurement-units"><strong>1.4. 測定単位</strong></h3><pre><code class="language-nginx"># 単位なし = バイト
client_max_body_size 1048576;  # 1MB

# k/K = キロバイト
client_max_body_size 1024k;

# m/M = メガバイト
client_max_body_size 1m;

# g/G = ギガバイト (Nginx 0.7.0+)
client_max_body_size 1g;
</code></pre><hr><h2 id="2-context-v%C3%A0-directive"><strong>2. コンテキストとディレクティブ</strong></h2><p>Nginxはコンテキストシステムを使って設定を階層的に整理します。各コンテキストは適用されるディレクティブのスコープを定義します。</p><h3 id="21-c%C3%A1c-context-ch%C3%ADnh"><strong>2.1. 主要なコンテキスト</strong></h3><pre><code class="language-nginx"># MAIN CONTEXT（グローバル）
user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log;
pid /var/run/nginx.pid;

# EVENTS CONTEXT
events {
    worker_connections 1024;
    use epoll;
}

# HTTP CONTEXT
http {
    # すべてのHTTPトラフィックに適用
    
    # SERVER CONTEXT
    server {
        # 特定のバーチャルホストに適用
        
        # LOCATION CONTEXT
        location / {
            # 特定のURLパターンに適用
        }
    }
}

# STREAM CONTEXT（TCP/UDP用）
stream {
    server {
        listen 3306;
    }
}

# MAIL CONTEXT（メールプロキシ用）
mail {
    server {
        listen 25;
    }
}
</code></pre><h3 id="22-http-contextc%E1%BA%A5u-h%C3%ACnh-to%C3%A0n-c%E1%BB%A5c"><strong>2.2. HTTPコンテキスト — グローバル設定</strong></h3><pre><code class="language-nginx">http {
    # MIMEタイプ
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    # ロギング
    log_format main '$remote_addr - $remote_user [$time_local] '
                    '"$request" $status $body_bytes_sent '
                    '"$http_referer" "$http_user_agent"';
    
    access_log /var/log/nginx/access.log main;
    error_log /var/log/nginx/error.log warn;

    # パフォーマンス
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 65;
    types_hash_max_size 2048;

    # Gzip圧縮
    gzip on;
    gzip_vary on;
    gzip_comp_level 6;
    gzip_types text/plain text/css application/json application/javascript;

    # セキュリティヘッダー
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # サーバーブロックのインクルード
    include /etc/nginx/conf.d/*.conf;
    include /etc/nginx/sites-enabled/*;
}
</code></pre><h3 id="23-server-contextvirtual-host"><strong>2.3. サーバーコンテキスト — バーチャルホスト</strong></h3><pre><code class="language-nginx">http {
    # サーバーブロック1
    server {
        listen 80;
        server_name example.com www.example.com;
        root /var/www/example.com;
        
        access_log /var/log/nginx/example.com.access.log;
        error_log /var/log/nginx/example.com.error.log;
    }

    # サーバーブロック2
    server {
        listen 80;
        server_name blog.example.com;
        root /var/www/blog;
    }

    # デフォルトサーバー（キャッチオール）
    server {
        listen 80 default_server;
        server_name _;
        return 444;  # 接続を閉じる
    }
}
</code></pre><h3 id="24-location-contexturl-matching"><strong>2.4. ロケーションコンテキスト — URLマッチング</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;
    root /var/www/html;

    # 完全一致
    location = /about {
        # /aboutのみにマッチ
    }

    # プレフィックス一致
    location /images/ {
        # /images/*、/images/photo.jpgなどにマッチ
    }

    # 正規表現一致（大文字小文字区別あり）
    location ~ \.(jpg|png|gif)$ {
        # .jpg、.png、.gifで終わるファイルにマッチ
    }

    # 正規表現一致（大文字小文字区別なし）
    location ~* \.(jpg|png|gif)$ {
        # JPG、jpg、JpGなどにマッチ
    }

    # プレフィックス一致（正規表現チェックを停止）
    location ^~ /api/ {
        # /api/*にマッチし、正規表現チェックを停止
    }

    # デフォルトロケーション
    location / {
        # 他にマッチがなければすべてにマッチ
    }
}
</code></pre><h3 id="25-priority-c%E1%BB%A7a-location-matching"><strong>2.5. ロケーションマッチングの優先順位</strong></h3><p>Nginxはロケーションを優先順位に従って処理します：</p><ol><li><strong><code>=</code></strong> - 完全一致（最高）</li><li><strong><code>^~</code></strong> - プレフィックス一致（正規表現停止）</li><li><strong><code>~</code> または <code>~*</code></strong> - 正規表現一致（ファイルの出現順）</li><li><strong>修飾子なし</strong> - プレフィックス一致（最低）</li></ol><p><strong>説明例：</strong></p><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;

    # 優先度1 - 完全一致
    location = /test {
        return 200 "Exact match: /test\n";
    }

    # 優先度2 - プレフィックス（正規表現停止）
    location ^~ /test {
        return 200 "Prefix match (^~): /test*\n";
    }

    # 優先度3 - 正規表現（大文字小文字区別なし）
    location ~* ^/test {
        return 200 "Regex match (~*): /test*\n";
    }

    # 優先度4 - プレフィックス一致
    location /test {
        return 200 "Prefix match: /test*\n";
    }

    # デフォルト
    location / {
        return 200 "Default location\n";
    }
}
</code></pre><p><strong>テスト結果：</strong></p><pre><code class="language-bash">curl http://example.com/test
# → "Exact match: /test"

curl http://example.com/test123
# → "Prefix match (^~): /test*"（^~が正規表現を停止するため）

# ^~ロケーションを削除した場合：
curl http://example.com/test123
# → "Regex match (~*): /test*"
</code></pre><hr><h2 id="3-c%E1%BA%A5u-h%C3%ACnh-virtual-host-server-blocks"><strong>3. バーチャルホストの設定（サーバーブロック）</strong></h2><p>バーチャルホストにより、1台のNginxサーバーで複数のWebサイト・ドメインを提供できます。</p><h3 id="31-t%E1%BA%A1o-virtual-host-%C4%91%E1%BA%A7u-ti%C3%AAn"><strong>3.1. 最初のバーチャルホストを作成する</strong></h3><p><strong>ステップ1：Webサイト用ディレクトリを作成する</strong></p><pre><code class="language-bash"># ドキュメントルートを作成
sudo mkdir -p /var/www/mysite.com/html

# ログ用ディレクトリを作成
sudo mkdir -p /var/www/mysite.com/logs

# 所有権を設定
sudo chown -R $USER:$USER /var/www/mysite.com
sudo chmod -R 755 /var/www/mysite.com
</code></pre><p><strong>ステップ2：サンプルHTMLファイルを作成する</strong></p><pre><code class="language-bash">cat &gt; /var/www/mysite.com/html/index.html &lt;&lt; 'EOF'
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Welcome to mysite.com&lt;/title&gt;
    &lt;style&gt;
        body { font-family: Arial, sans-serif; margin: 50px; }
        h1 { color: #00539C; }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Welcome to mysite.com!&lt;/h1&gt;
    &lt;p&gt;This is my first Nginx virtual host.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
EOF
</code></pre><p><strong>ステップ3：バーチャルホストの設定ファイルを作成する</strong></p><pre><code class="language-bash"># Ubuntu/Debian
sudo nano /etc/nginx/sites-available/mysite.com

# CentOS/RHEL
sudo nano /etc/nginx/conf.d/mysite.com.conf
</code></pre><p><strong>設定ファイルの内容：</strong></p><pre><code class="language-nginx">server {
    # ポートとサーバー名
    listen 80;
    listen [::]:80;
    server_name mysite.com www.mysite.com;

    # ドキュメントルート
    root /var/www/mysite.com/html;
    index index.html index.htm;

    # ログ
    access_log /var/www/mysite.com/logs/access.log;
    error_log /var/www/mysite.com/logs/error.log;

    # メインロケーション
    location / {
        try_files $uri $uri/ =404;
    }

    # エラーページ
    error_page 404 /404.html;
    error_page 500 502 503 504 /50x.html;
    
    location = /404.html {
        internal;
    }
    
    location = /50x.html {
        internal;
    }

    # 隠しファイルへのアクセスを拒否
    location ~ /\. {
        deny all;
        access_log off;
        log_not_found off;
    }
}
</code></pre><p><strong>ステップ4：バーチャルホストを有効化する（Ubuntu/Debian）</strong></p><pre><code class="language-bash"># シンボリックリンクを作成
sudo ln -s /etc/nginx/sites-available/mysite.com /etc/nginx/sites-enabled/

# 設定を確認
sudo nginx -t

# Nginxをリロード
sudo systemctl reload nginx
</code></pre><p><strong>ステップ5：DNSまたはhostsファイルを設定する</strong></p><pre><code class="language-bash"># /etc/hostsに追加（ローカルテスト用）
sudo nano /etc/hosts

# 以下の行を追加：
127.0.0.1  mysite.com www.mysite.com
</code></pre><p><strong>ステップ6：テスト</strong></p><pre><code class="language-bash">curl http://mysite.com
# またはブラウザで: http://mysite.com
</code></pre><h3 id="32-virtual-host-v%E1%BB%9Bi-nhi%E1%BB%81u-domains"><strong>3.2. 複数ドメインのバーチャルホスト</strong></h3><pre><code class="language-nginx"># 設定1：同じコンテンツに複数ドメイン
server {
    listen 80;
    server_name mysite.com www.mysite.com example.com www.example.com;
    root /var/www/mysite.com/html;
    index index.html;
}

# 設定2：サブドメイン
server {
    listen 80;
    server_name blog.mysite.com;
    root /var/www/blog;
    index index.html;
}

server {
    listen 80;
    server_name shop.mysite.com;
    root /var/www/shop;
    index index.html;
}

# 設定3：ワイルドカードサブドメイン
server {
    listen 80;
    server_name *.mysite.com;
    root /var/www/subdomains/$host;
    
    # $hostにはsubdomain.mysite.comが入ります
}

# 設定4：正規表現サーバー名
server {
    listen 80;
    server_name ~^(www\.)?(?&lt;domain&gt;.+)$;
    root /var/www/$domain;
}
</code></pre><h3 id="33-default-server-catch-all"><strong>3.3. デフォルトサーバー（キャッチオール）</strong></h3><pre><code class="language-nginx"># マッチしないリクエストを処理するデフォルトサーバー
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name _;  # アンダースコア = サーバー名を問わない
    
    # オプション1：444を返す（接続を閉じる）
    return 444;
    
    # オプション2：403 Forbiddenを返す
    # return 403;
    
    # オプション3：メインサイトにリダイレクト
    # return 301 https://mainsite.com$request_uri;
    
    # オプション4：メンテナンスページを表示
    # root /var/www/default;
    # index maintenance.html;
}
</code></pre><h3 id="34-listen-directives-n%C3%A2ng-cao"><strong>3.4. 高度なListenディレクティブ</strong></h3><pre><code class="language-nginx">server {
    # IPv4
    listen 80;
    
    # IPv6
    listen [::]:80;
    
    # 特定のIP
    listen 192.168.1.100:80;
    
    # 別のポート
    listen 8080;
    
    # デフォルトサーバー
    listen 80 default_server;
    
    # SSL
    listen 443 ssl;
    listen [::]:443 ssl;
    
    # HTTP/2
    listen 443 ssl http2;
    
    # 複数オプション
    listen 80 default_server reuseport;
}
</code></pre><hr><h2 id="4-serving-static-files"><strong>4. 静的ファイルの配信</strong></h2><p>Nginxは静的コンテンツ（HTML、CSS、JS、画像）の配信に優れています。</p><h3 id="41-c%E1%BA%A5u-h%C3%ACnh-c%C6%A1-b%E1%BA%A3n"><strong>4.1. 基本設定</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    server_name static.example.com;
    
    # ドキュメントルート
    root /var/www/static;
    
    # インデックスファイル
    index index.html index.htm;
    
    # メインロケーション
    location / {
        try_files $uri $uri/ =404;
    }
}
</code></pre><p><strong>ディレクトリ構造：</strong></p><pre><code>/var/www/static/
├── index.html
├── css/
│   ├── style.css
│   └── bootstrap.css
├── js/
│   ├── app.js
│   └── jquery.js
└── images/
    ├── logo.png
    └── background.jpg
</code></pre><p><strong>処理されるリクエスト：</strong></p><pre><code>http://static.example.com/              → /var/www/static/index.html
http://static.example.com/css/style.css → /var/www/static/css/style.css
http://static.example.com/images/logo.png → /var/www/static/images/logo.png
</code></pre><h3 id="42-root-vs-alias"><strong>4.2. Root と Alias</strong></h3><p><strong>Rootディレクティブ：</strong></p><pre><code class="language-nginx">location /images/ {
    root /var/www/static;
}
# リクエスト: /images/photo.jpg
# ファイルパス: /var/www/static/images/photo.jpg
# （root + ロケーションパス）
</code></pre><p><strong>Aliasディレクティブ：</strong></p><pre><code class="language-nginx">location /images/ {
    alias /var/www/photos/;
}
# リクエスト: /images/photo.jpg
# ファイルパス: /var/www/photos/photo.jpg
# （aliasがロケーションパスを置き換える）
</code></pre><p><strong>詳細な例：</strong></p><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;
    
    # rootを使用
    location /static/ {
        root /var/www;
    }
    # /static/style.css → /var/www/static/style.css
    
    # aliasを使用
    location /assets/ {
        alias /var/www/static/;
    }
    # /assets/style.css → /var/www/static/style.css
    
    # 完全パスのalias
    location = /favicon.ico {
        alias /var/www/icons/favicon.ico;
    }
}
</code></pre><p><strong>注意：</strong> aliasを使う場合、aliasが<code>/</code>で終わるならロケーションパスも<code>/</code>で終わる必要があります。</p><h3 id="43-tryfiles-directive"><strong>4.3. Try_filesディレクティブ</strong></h3><pre><code class="language-nginx"># 構文
try_files file ... uri;
try_files file ... =code;

# 例1：ファイル、フォルダの順にチェックし、なければ404
location / {
    try_files $uri $uri/ =404;
}

# 例2：index.htmlにフォールバック（SPA向け）
location / {
    try_files $uri $uri/ /index.html;
}

# 例3：複数ファイルをチェック
location / {
    try_files $uri $uri/index.html $uri.html =404;
}

# 例4：バックエンドにフォールバック
location / {
    try_files $uri $uri/ @backend;
}

location @backend {
    proxy_pass http://localhost:3000;
}
</code></pre><h3 id="44-c%E1%BA%A5u-h%C3%ACnh-cho-t%E1%BB%ABng-lo%E1%BA%A1i-file"><strong>4.4. ファイルタイプ別設定</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    server_name cdn.example.com;
    root /var/www/cdn;

    # HTMLファイル
    location ~ \.html$ {
        add_header Cache-Control "public, max-age=3600";
    }

    # CSSとJavaScript
    location ~ \.(css|js)$ {
        add_header Cache-Control "public, max-age=31536000";
        access_log off;
    }

    # 画像
    location ~ \.(jpg|jpeg|png|gif|ico|svg|webp)$ {
        add_header Cache-Control "public, max-age=31536000";
        access_log off;
        expires 1y;
    }

    # フォント
    location ~ \.(woff|woff2|ttf|otf|eot)$ {
        add_header Cache-Control "public, max-age=31536000";
        add_header Access-Control-Allow-Origin "*";
        access_log off;
    }

    # 動画
    location ~ \.(mp4|webm|ogg)$ {
        add_header Cache-Control "public, max-age=31536000";
        mp4;  # MP4ストリーミングを有効化
        access_log off;
    }

    # ダウンロード
    location /downloads/ {
        add_header Content-Disposition "attachment";
    }
}
</code></pre><h3 id="45-security-cho-static-files"><strong>4.5. 静的ファイルのセキュリティ</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    root /var/www/html;

    # 隠しファイルへのアクセスを拒否
    location ~ /\. {
        deny all;
        access_log off;
        log_not_found off;
    }

    # バックアップファイルへのアクセスを拒否
    location ~ ~$ {
        deny all;
        access_log off;
        log_not_found off;
    }

    # 設定ファイルへのアクセスを拒否
    location ~ \.(conf|config|yml|yaml|ini)$ {
        deny all;
    }

    # 機密ディレクトリを保護
    location ~ ^/(\.git|\.svn|\.env) {
        deny all;
    }
}
</code></pre><hr><h2 id="5-c%E1%BA%A5u-h%C3%ACnh-index-files-v%C3%A0-autoindex"><strong>5. インデックスファイルとAutoindexの設定</strong></h2><h3 id="51-index-directive"><strong>5.1. Indexディレクティブ</strong></h3><pre><code class="language-nginx"># 構文
index file ...;

# 例1：デフォルトインデックス
server {
    listen 80;
    root /var/www/html;
    index index.html index.htm;
}

# 例2：複数のインデックスファイル（順番通り）
server {
    listen 80;
    root /var/www/html;
    index index.php index.html index.htm default.html;
}

# 例3：ロケーション別に異なるインデックスファイル
server {
    listen 80;
    root /var/www/html;
    
    location / {
        index index.html;
    }
    
    location /blog/ {
        index index.php;
    }
    
    location /docs/ {
        index readme.md index.html;
    }
}
</code></pre><h3 id="52-autoindex-directory-listing"><strong>5.2. Autoindex（ディレクトリ一覧）</strong></h3><pre><code class="language-nginx"># autoindexを有効化
server {
    listen 80;
    server_name files.example.com;
    root /var/www/files;
    
    location / {
        autoindex on;
    }
}

# autoindexの詳細設定
location /downloads/ {
    autoindex on;                    # ディレクトリ一覧を有効化
    autoindex_exact_size off;        # サイズをバイトではなくKB、MBで表示
    autoindex_localtime on;          # GMTではなくローカル時刻を表示
    autoindex_format html;           # フォーマット: html、xml、json、jsonp
}

# JSON形式の例
location /api/files/ {
    autoindex on;
    autoindex_format json;
}
</code></pre><p><strong>Autoindexの出力：</strong></p><pre><code>Index of /downloads/

../
file1.pdf                          23-Nov-2024 10:30      2.5M
file2.zip                          22-Nov-2024 15:45      15M
folder/                            20-Nov-2024 09:00      -
</code></pre><h3 id="53-custom-autoindex-styling"><strong>5.3. カスタムAutoindexのスタイリング</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    root /var/www/files;
    
    location / {
        autoindex on;
        autoindex_exact_size off;
        autoindex_localtime on;
        
        # カスタムヘッダー/フッターを追加
        add_before_body /autoindex/header.html;
        add_after_body /autoindex/footer.html;
    }
    
    location /autoindex/ {
        internal;
        alias /var/www/autoindex/;
    }
}
</code></pre><p><strong>header.htmlファイル：</strong></p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;File Directory&lt;/title&gt;
    &lt;style&gt;
        body { font-family: Arial; margin: 20px; }
        h1 { color: #333; }
        a { color: #0066cc; text-decoration: none; }
        a:hover { text-decoration: underline; }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;File Directory&lt;/h1&gt;
    &lt;hr&gt;
</code></pre><p><strong>footer.htmlファイル：</strong></p><pre><code class="language-html">    &lt;hr&gt;
    &lt;p&gt;© 2024 My Company&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><hr><h2 id="6-error-pages-t%C3%B9y-ch%E1%BB%89nh"><strong>6. カスタムエラーページ</strong></h2><h3 id="61-c%E1%BA%A5u-h%C3%ACnh-c%C6%A1-b%E1%BA%A3n"><strong>6.1. 基本設定</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;
    root /var/www/html;

    # カスタムエラーページ
    error_page 404 /404.html;
    error_page 500 502 503 504 /50x.html;

    # エラーページのロケーション
    location = /404.html {
        internal;  # 内部からのみアクセス可能
    }

    location = /50x.html {
        internal;
    }
}
</code></pre><h3 id="62-error-pages-chi-ti%E1%BA%BFt"><strong>6.2. 詳細なエラーページ</strong></h3><p><strong>404.htmlファイルの作成：</strong></p><pre><code class="language-bash">cat &gt; /var/www/html/404.html &lt;&lt; 'EOF'
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;404 - Page Not Found&lt;/title&gt;
    &lt;style&gt;
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
            background: #f5f5f5;
        }
        h1 { font-size: 72px; color: #e74c3c; }
        p { font-size: 24px; color: #555; }
        a { color: #3498db; text-decoration: none; }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;404&lt;/h1&gt;
    &lt;p&gt;Oops! Page not found.&lt;/p&gt;
    &lt;p&gt;&lt;a href="/"&gt;← Go back home&lt;/a&gt;&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
EOF
</code></pre><p><strong>50x.htmlファイルの作成：</strong></p><pre><code class="language-bash">cat &gt; /var/www/html/50x.html &lt;&lt; 'EOF'
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;500 - Server Error&lt;/title&gt;
    &lt;style&gt;
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
            background: #f5f5f5;
        }
        h1 { font-size: 72px; color: #e67e22; }
        p { font-size: 24px; color: #555; }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;500&lt;/h1&gt;
    &lt;p&gt;Internal Server Error&lt;/p&gt;
    &lt;p&gt;We're working on it!&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
EOF
</code></pre><h3 id="63-error-pages-n%C3%A2ng-cao"><strong>6.3. 高度なエラーページ</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;
    root /var/www/html;

    # ロケーション別エラーページ
    location / {
        error_page 404 /errors/404.html;
    }

    location /api/ {
        error_page 404 /errors/api-404.json;
        error_page 500 /errors/api-500.json;
    }

    # カスタムメッセージ付きエラーページ
    location /special/ {
        error_page 404 =200 /custom-404.html;
        # =200 でステータスコードを上書き
    }

    # 外部エラーページへリダイレクト
    location /old-site/ {
        error_page 404 = @external_error;
    }

    location @external_error {
        return 302 https://example.com/error-handler;
    }

    # 変数付きエラーページ
    location /dynamic/ {
        error_page 404 /404.html?page=$uri;
    }

    # エラー用の名前付きロケーション
    error_page 404 = @notfound;
    
    location @notfound {
        return 404 "Custom 404 message\n";
    }
}
</code></pre><h3 id="64-error-log-v%E1%BB%9Bi-format"><strong>6.4. フォーマット付きエラーログ</strong></h3><pre><code class="language-nginx">http {
    # カスタムエラーログフォーマットを定義
    log_format error_log '[$time_local] $status $request '
                         'Client: $remote_addr '
                         'Server: $server_name';

    server {
        listen 80;
        server_name example.com;
        
        # カスタムフォーマットを使用
        error_log /var/log/nginx/example.error.log error_log;
        
        # 異なるログレベル
        error_log /var/log/nginx/debug.log debug;
    }
}
</code></pre><hr><h2 id="7-b%C3%A0i-t%E1%BA%ADp-th%E1%BB%B1c-h%C3%A0nh"><strong>7. 実践演習</strong></h2><h3 id="b%C3%A0i-t%E1%BA%ADp-1-t%E1%BA%A1o-virtual-host"><strong>演習1：バーチャルホストを作成する</strong></h3><ol><li><code>mysite.local</code>のバーチャルホストを作成する</li><li>ドキュメントルート：<code>/var/www/mysite</code></li><li>任意の内容でindex.htmlを作成する</li><li>/etc/hostsに追加してテストする</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-2-static-file-server"><strong>演習2：静的ファイルサーバー</strong></h3><ol><li>ディレクトリ構造を作成する：</li></ol><pre><code>/var/www/static/
├── index.html
├── css/style.css
├── js/app.js
└── images/logo.png
</code></pre><ol start="2"><li>これらのファイルを配信するようNginxを設定する</li><li>ファイルタイプ別に異なるキャッシュヘッダーを設定する</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-3-directory-listing"><strong>演習3：ディレクトリ一覧</strong></h3><ol><li><code>files.local</code>のバーチャルホストを作成する</li><li>autoindexを有効化する</li><li>フォーマットとスタイルをカスタマイズする</li><li>複数のファイルでテストする</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-4-custom-error-pages"><strong>演習4：カスタムエラーページ</strong></h3><ol><li>カスタムの404ページと500ページを作成する</li><li>バーチャルホストに適用する</li><li>存在しないURLにアクセスしてテストする</li><li>500エラーをテストする（<code>return 500</code>でシミュレート可能）</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-5-multiple-virtual-hosts"><strong>演習5：複数のバーチャルホスト</strong></h3><ol><li>3つのバーチャルホストを作成する：<ul><li><code>site1.local</code> → <code>/var/www/site1</code></li><li><code>site2.local</code> → <code>/var/www/site2</code></li><li><code>blog.site1.local</code> → <code>/var/www/blog</code></li></ul></li><li>各サイトのコンテンツを異なるものにする</li><li>すべてを設定してテストする</li></ol><hr><h2 id="8-troubleshooting-th%C6%B0%E1%BB%9Dng-g%E1%BA%B7p"><strong>8. よくあるトラブルシューティング</strong></h2><h3 id="l%E1%BB%97i-1-403-forbidden"><strong>エラー1：403 Forbidden</strong></h3><pre><code class="language-bash"># 原因: パーミッション
ls -la /var/www/html

# 修正: 正しい所有権を設定
sudo chown -R www-data:www-data /var/www/html
sudo chmod -R 755 /var/www/html

# 原因: SELinux（CentOS）
sudo setenforce 0
</code></pre><h3 id="l%E1%BB%97i-2-404-not-found"><strong>エラー2：404 Not Found</strong></h3><pre><code class="language-nginx"># rootディレクティブを確認
location / {
    root /var/www/html;  # このパスは正しいですか？
    index index.html;    # このファイルは存在しますか？
}

# curlで確認
curl -I http://example.com
</code></pre><h3 id="l%E1%BB%97i-3-c%E1%BA%A5u-h%C3%ACnh-kh%C3%B4ng-reload"><strong>エラー3：設定がリロードされない</strong></h3><pre><code class="language-bash"># まず設定をテスト
sudo nginx -t

# OKであればリロード
sudo systemctl reload nginx

# エラーログを確認
sudo tail -f /var/log/nginx/error.log
</code></pre><h3 id="l%E1%BB%97i-4-server-name-kh%C3%B4ng-work"><strong>エラー4：サーバー名が機能しない</strong></h3><pre><code class="language-bash"># DNS/hostsを確認
cat /etc/hosts

# server_nameディレクティブを確認
grep server_name /etc/nginx/sites-available/*

# ブラウザキャッシュをクリア
# またはcurlでテスト
curl -H "Host: mysite.com" http://localhost
</code></pre><hr><h2 id="9-best-practices"><strong>9. ベストプラクティス</strong></h2><ol><li><strong>設定ファイルを整理する：</strong></li></ol><pre><code>/etc/nginx/
├── nginx.conf（メイン設定）
├── conf.d/（グローバル設定）
└── sites-available/（個別サイト）
</code></pre><ol start="2"><li><strong>コメントを明確にする：</strong></li></ol><pre><code class="language-nginx"># スパムボットをブロック
if ($http_user_agent ~* (bot|crawler|spider)) {
    return 403;
}
</code></pre><ol start="3"><li><strong>インクルードを使用する：</strong></li></ol><pre><code class="language-nginx">http {
    include /etc/nginx/mime.types;
    include /etc/nginx/conf.d/*.conf;
}
</code></pre><ol start="4"><li><strong>リロード前にテストする：</strong></li></ol><pre><code class="language-bash">sudo nginx -t &amp;&amp; sudo systemctl reload nginx
</code></pre><ol start="5"><li><strong>設定をバックアップする：</strong></li></ol><pre><code class="language-bash">sudo cp /etc/nginx/nginx.conf /etc/nginx/nginx.conf.backup
</code></pre><hr><h2 id="t%E1%BB%95ng-k%E1%BA%BFt"><strong>まとめ</strong></h2><p>この課では以下を学びました：</p><ul><li>✅ nginx.confの構文と構造</li><li>✅ Nginxのコンテキストとディレクティブ</li><li>✅ バーチャルホストの作成と管理</li><li>✅ 静的ファイルの効率的な配信</li><li>✅ インデックスファイルとautoindexの設定</li><li>✅ エラーページのカスタマイズ</li></ul><p><strong>次の課：</strong> ロギングとモニタリングについて学びます——Nginxサーバーのトラフィックを追跡・分析する方法です。</p>
