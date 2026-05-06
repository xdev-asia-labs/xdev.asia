---
id: 019c9617-fc7a-7342-b6bc-7d30a93ee48e
title: '第3課：Nginxのロギングとモニタリング'
slug: bai-3-logging-va-monitoring-nginx
description: >-
  アクセスログ、エラーログ、カスタムログフォーマット、ログローテーションなど、Nginxのロギングとモニタリングを学びます。
  ログの分析、トラブルシューティング、logrotateの使用、サーバーパフォーマンスを追跡するための基本メトリクスについて解説します。
  実用的な例とベストプラクティスを含みます。
duration_minutes: 160
is_free: true
video_url: null
sort_order: 3
section_title: "第1部：基礎"
course:
  id: 019c9617-fc27-73c5-b664-a1902ec9ac00
  title: Nginxの基礎から応用まで
  slug: nginx-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8834" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8834)"/>

  <!-- Decorations -->
  <g>
    <circle cx="692" cy="126" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="784" cy="158" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="876" cy="190" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="968" cy="222" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="1060" cy="254" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="166" x2="1100" y2="246" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="196" x2="1050" y2="266" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1051.507041555162,195.5 1051.507041555162,236.5 1016,257 980.492958444838,236.5 980.492958444838,195.5 1016,175" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="128" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🔒 DevSecOps — 第3課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第3課：Nginxのロギングとモニタリング</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Nginxの基礎から応用まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第1部：基礎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-access-log-v%C3%A0-error-log"><strong>1. アクセスログとエラーログ</strong></h2><p>Nginxにはサーバーの活動を監視するための2種類の主要なログがあります：アクセスログ（すべてのリクエストを記録）とエラーログ（エラーや警告を記録）。</p><h3 id="11-access-log"><strong>1.1. アクセスログ</strong></h3><p>アクセスログはサーバーへのすべてのリクエストを記録し、クライアント情報、リクエスト、レスポンスステータス、処理時間などを含みます。</p><p><strong>デフォルトの場所：</strong></p><pre><code class="language-bash"># Ubuntu/Debian
/var/log/nginx/access.log

# CentOS/RHEL
/var/log/nginx/access.log

# macOS (Homebrew)
/usr/local/var/log/nginx/access.log
</code></pre><p><strong>基本設定：</strong></p><pre><code class="language-nginx">http {
    # HTTPコンテキスト全体のアクセスログ
    access_log /var/log/nginx/access.log;
    
    server {
        listen 80;
        server_name example.com;
        
        # バーチャルホスト専用のアクセスログ
        access_log /var/log/nginx/example.com.access.log;
        
        location / {
            root /var/www/html;
        }
        
        # 特定ロケーションのアクセスログを無効化
        location /health-check {
            access_log off;
            return 200 "OK\n";
        }
    }
}
</code></pre><p><strong>デフォルトフォーマット（combined）：</strong></p><pre><code>192.168.1.100 - - [03/Dec/2024:10:30:45 +0700] "GET /index.html HTTP/1.1" 200 1234 "https://google.com" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
</code></pre><p><strong>フィールドの説明：</strong></p><ul><li><code>192.168.1.100</code> - クライアントのIPアドレス</li><li><code>-</code> - リモートユーザー（認証なしの場合は通常<code>-</code>）</li><li><code>-</code> - 認証済みユーザー</li><li><code>[03/Dec/2024:10:30:45 +0700]</code> - タイムスタンプ</li><li><code>"GET /index.html HTTP/1.1"</code> - リクエストメソッド、URI、HTTPバージョン</li><li><code>200</code> - HTTPステータスコード</li><li><code>1234</code> - レスポンスボディサイズ（バイト）</li><li><code>"https://google.com"</code> - リファラー</li><li><code>"Mozilla/5.0..."</code> - ユーザーエージェント</li></ul><h3 id="12-error-log"><strong>1.2. エラーログ</strong></h3><p>エラーログはNginxからのエラー、警告、デバッグ情報を記録します。</p><p><strong>デフォルトの場所：</strong></p><pre><code class="language-bash">/var/log/nginx/error.log
</code></pre><p><strong>ログレベル（詳細度の低い順）：</strong></p><ol><li><code>emerg</code> - 緊急：システム使用不能</li><li><code>alert</code> - アラート：即座に対応が必要</li><li><code>crit</code> - 致命的な状態</li><li><code>error</code> - エラー状態</li><li><code>warn</code> - 警告状態</li><li><code>notice</code> - 通常だが重要</li><li><code>info</code> - 情報</li><li><code>debug</code> - デバッグメッセージ</li></ol><p><strong>設定：</strong></p><pre><code class="language-nginx"># グローバルエラーログ
error_log /var/log/nginx/error.log warn;

http {
    # HTTPレベルのエラーログ
    error_log /var/log/nginx/http-error.log error;
    
    server {
        listen 80;
        server_name example.com;
        
        # サーバーレベルのエラーログ
        error_log /var/log/nginx/example.com.error.log error;
        
        # トラブルシューティング用デバッグログ
        error_log /var/log/nginx/debug.log debug;
    }
}
</code></pre><p><strong>エラーログの例：</strong></p><pre><code>2024/12/03 10:30:45 [error] 1234#1234: *1 open() "/var/www/html/notfound.html" failed (2: No such file or directory), client: 192.168.1.100, server: example.com, request: "GET /notfound.html HTTP/1.1", host: "example.com"

2024/12/03 10:31:20 [warn] 1234#1234: *2 upstream server temporarily disabled while connecting to upstream, client: 192.168.1.101, server: api.example.com, request: "GET /api/users HTTP/1.1", upstream: "http://192.168.1.200:3000/api/users"

2024/12/03 10:32:05 [crit] 1234#1234: malloc() 8192 bytes failed (12: Cannot allocate memory)
</code></pre><h3 id="13-xem-v%C3%A0-theo-d%C3%B5i-logs-real-time"><strong>1.3. リアルタイムでのログ表示と監視</strong></h3><pre><code class="language-bash"># アクセスログを表示
sudo tail -f /var/log/nginx/access.log

# エラーログを表示
sudo tail -f /var/log/nginx/error.log

# 最後の100行を表示
sudo tail -n 100 /var/log/nginx/access.log

# 両方のログを同時に表示
sudo tail -f /var/log/nginx/access.log /var/log/nginx/error.log

# ログをフィルタリング
sudo tail -f /var/log/nginx/access.log | grep "404"
sudo tail -f /var/log/nginx/access.log | grep "192.168.1.100"

# lessでログを表示（スクロール可）
sudo less +F /var/log/nginx/access.log
</code></pre><h3 id="14-ph%C3%A2n-t%C3%ADch-logs-c%C6%A1-b%E1%BA%A3n"><strong>1.4. 基本的なログ分析</strong></h3><p><strong>総リクエスト数を数える：</strong></p><pre><code class="language-bash"># 総リクエスト数
wc -l /var/log/nginx/access.log

# 過去1時間のリクエスト
sudo awk -v date="$(date -d '1 hour ago' '+%d/%b/%Y:%H')" '$4 &gt; "["date' /var/log/nginx/access.log | wc -l
</code></pre><p><strong>上位10 IP：</strong></p><pre><code class="language-bash">sudo awk '{print $1}' /var/log/nginx/access.log | sort | uniq -c | sort -rn | head -10
</code></pre><p><strong>上位10アクセスURL：</strong></p><pre><code class="language-bash">sudo awk '{print $7}' /var/log/nginx/access.log | sort | uniq -c | sort -rn | head -10
</code></pre><p><strong>HTTPステータスコードの集計：</strong></p><pre><code class="language-bash">sudo awk '{print $9}' /var/log/nginx/access.log | sort | uniq -c | sort -rn
</code></pre><p><strong>上位ユーザーエージェント：</strong></p><pre><code class="language-bash">sudo awk -F'"' '{print $6}' /var/log/nginx/access.log | sort | uniq -c | sort -rn | head -10
</code></pre><p><strong>時間別リクエスト数：</strong></p><pre><code class="language-bash">sudo awk '{print $4}' /var/log/nginx/access.log | cut -d: -f1-2 | sort | uniq -c
</code></pre><hr><h2 id="2-%C4%91%E1%BB%8Bnh-d%E1%BA%A1ng-log-t%C3%B9y-ch%E1%BB%89nh"><strong>2. カスタムログフォーマット</strong></h2><p>Nginxでは必要な情報だけを収集するカスタムログフォーマットを作成できます。</p><h3 id="21-log-format-c%C6%A1-b%E1%BA%A3n"><strong>2.1. 基本ログフォーマット</strong></h3><p><strong>フォーマットの定義：</strong></p><pre><code class="language-nginx">http {
    # デフォルトフォーマット（combined）
    log_format combined '$remote_addr - $remote_user [$time_local] '
                        '"$request" $status $body_bytes_sent '
                        '"$http_referer" "$http_user_agent"';
    
    # シンプルなフォーマット
    log_format simple '$remote_addr - $request - $status';
    
    # 詳細フォーマット
    log_format detailed '$remote_addr - $remote_user [$time_local] '
                        '"$request" $status $body_bytes_sent '
                        '"$http_referer" "$http_user_agent" '
                        'rt=$request_time uct="$upstream_connect_time" '
                        'uht="$upstream_header_time" urt="$upstream_response_time"';
    
    server {
        listen 80;
        
        # カスタムフォーマットを使用
        access_log /var/log/nginx/access.log detailed;
    }
}
</code></pre><h3 id="22-c%C3%A1c-bi%E1%BA%BFn-th%C6%B0%E1%BB%9Dng-d%C3%B9ng-trong-log-format"><strong>2.2. よく使う変数</strong></h3><p><strong>クライアント情報：</strong></p><pre><code class="language-nginx">$remote_addr          # クライアントIP
$remote_user          # HTTP認証ユーザー
$http_x_forwarded_for # プロキシ/CDN経由の実IPアドレス
</code></pre><p><strong>リクエスト情報：</strong></p><pre><code class="language-nginx">$time_local           # ローカル時刻
$time_iso8601         # ISO 8601形式の時刻
$request              # フルリクエストライン
$request_method       # GET、POST など
$request_uri          # 引数付きのリクエストURI
$uri                  # 現在のURI
$args                 # クエリ文字列の引数
$query_string         # $argsと同じ
$scheme               # httpまたはhttps
$server_protocol      # HTTP/1.1、HTTP/2.0
$host                 # Hostヘッダー
$server_name          # サーバー名
</code></pre><p><strong>レスポンス情報：</strong></p><pre><code class="language-nginx">$status               # HTTPステータスコード
$body_bytes_sent      # レスポンスボディサイズ
$bytes_sent           # 送信バイト総数（ヘッダー + ボディ）
$request_length       # リクエスト長（ヘッダー含む）
</code></pre><p><strong>タイミング情報：</strong></p><pre><code class="language-nginx">$request_time         # リクエスト処理時間（秒）
$upstream_response_time    # バックエンドのレスポンス時間
$upstream_connect_time     # アップストリームへの接続時間
$upstream_header_time      # アップストリームのヘッダー受信時間
</code></pre><p><strong>アップストリーム情報：</strong></p><pre><code class="language-nginx">$upstream_addr             # アップストリームサーバーアドレス
$upstream_status           # アップストリームのレスポンスステータス
$upstream_cache_status     # キャッシュステータス（HIT、MISSなど）
</code></pre><p><strong>ヘッダー：</strong></p><pre><code class="language-nginx">$http_user_agent      # User-Agentヘッダー
$http_referer         # Refererヘッダー
$http_cookie          # Cookieヘッダー
$http_&lt;header_name&gt;   # 任意のHTTPヘッダー（小文字とアンダースコア）
</code></pre><h3 id="23-v%C3%AD-d%E1%BB%A5-log-formats-th%E1%BB%B1c-t%E1%BA%BF"><strong>2.3. 実用的なログフォーマット例</strong></h3><p><strong>パフォーマンス監視フォーマット：</strong></p><pre><code class="language-nginx">log_format performance '$remote_addr - [$time_local] "$request" '
                       '$status $body_bytes_sent '
                       'rt=$request_time '
                       'uct=$upstream_connect_time '
                       'uht=$upstream_header_time '
                       'urt=$upstream_response_time';

server {
    listen 80;
    access_log /var/log/nginx/performance.log performance;
}
</code></pre><p><strong>出力：</strong></p><pre><code>192.168.1.100 - [03/Dec/2024:10:30:45 +0700] "GET /api/users HTTP/1.1" 200 1234 rt=0.125 uct=0.005 uht=0.050 urt=0.120
</code></pre><p><strong>JSONフォーマット（解析しやすい）：</strong></p><pre><code class="language-nginx">log_format json_combined escape=json
    '{'
        '"time_local":"$time_local",'
        '"remote_addr":"$remote_addr",'
        '"request":"$request",'
        '"status":$status,'
        '"body_bytes_sent":$body_bytes_sent,'
        '"request_time":$request_time,'
        '"http_referer":"$http_referer",'
        '"http_user_agent":"$http_user_agent"'
    '}';

server {
    listen 80;
    access_log /var/log/nginx/access.json json_combined;
}
</code></pre><p><strong>出力：</strong></p><pre><code class="language-json">{"time_local":"03/Dec/2024:10:30:45 +0700","remote_addr":"192.168.1.100","request":"GET /index.html HTTP/1.1","status":200,"body_bytes_sent":1234,"request_time":0.005,"http_referer":"https://google.com","http_user_agent":"Mozilla/5.0"}
</code></pre><p><strong>セキュリティ監視フォーマット：</strong></p><pre><code class="language-nginx">log_format security '$remote_addr - [$time_local] '
                    '"$request" $status '
                    '"$http_user_agent" '
                    '"$http_x_forwarded_for" '
                    'host=$host '
                    'args=$args';

server {
    listen 80;
    access_log /var/log/nginx/security.log security;
}
</code></pre><p><strong>CDN/プロキシフォーマット：</strong></p><pre><code class="language-nginx">log_format cdn '$http_x_forwarded_for - $remote_addr - $remote_user [$time_local] '
               '"$request" $status $body_bytes_sent '
               '"$http_referer" "$http_user_agent" '
               'cache=$upstream_cache_status';

server {
    listen 80;
    access_log /var/log/nginx/cdn.log cdn;
}
</code></pre><h3 id="24-conditional-logging"><strong>2.4. 条件付きロギング</strong></h3><p><strong>条件を満たす場合のみログ記録：</strong></p><pre><code class="language-nginx">http {
    # 条件確認用マップを定義
    map $status $loggable {
        ~^[23]  0;  # 2xxと3xxはログ不要
        default 1;  # それ以外はすべてログ
    }
    
    server {
        listen 80;
        
        # $loggable = 1の場合のみログ記録
        access_log /var/log/nginx/errors-only.log combined if=$loggable;
    }
}
</code></pre><p><strong>静的ファイルをログ対象外にする：</strong></p><pre><code class="language-nginx">map $request_uri $log_static {
    ~*\.(jpg|jpeg|png|gif|ico|css|js)$ 0;
    default 1;
}

server {
    listen 80;
    access_log /var/log/nginx/access.log combined if=$log_static;
}
</code></pre><p><strong>ヘルスチェックをログ対象外にする：</strong></p><pre><code class="language-nginx">map $request_uri $log_health {
    ~^/health$ 0;
    ~^/ping$ 0;
    default 1;
}

server {
    listen 80;
    access_log /var/log/nginx/access.log combined if=$log_health;
}
</code></pre><p><strong>ボットをログ対象外にする：</strong></p><pre><code class="language-nginx">map $http_user_agent $log_bots {
    ~*bot 0;
    ~*crawler 0;
    ~*spider 0;
    default 1;
}

server {
    listen 80;
    access_log /var/log/nginx/access.log combined if=$log_bots;
}
</code></pre><h3 id="25-multiple-access-logs"><strong>2.5. 複数のアクセスログ</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;
    
    # すべてのリクエストをログ
    access_log /var/log/nginx/all.log combined;
    
    # エラーのみログ
    access_log /var/log/nginx/errors.log combined if=$loggable;
    
    # パフォーマンスログ
    access_log /var/log/nginx/performance.log performance;
    
    # 処理用JSONログ
    access_log /var/log/nginx/json.log json_combined;
}
</code></pre><hr><h2 id="3-log-rotation-v%E1%BB%9Bi-logrotate"><strong>3. Logrotateによるログローテーション</strong></h2><p>ログファイルは非常に速く成長します。ログローテーションにより古いログを自動的に圧縮・削除してディスク容量を管理できます。</p><h3 id="31-logrotate-c%C6%A1-b%E1%BA%A3n"><strong>3.1. Logrotateの基本</strong></h3><p><strong>デフォルトの設定ファイル：</strong></p><pre><code class="language-bash"># Ubuntu/Debian
/etc/logrotate.d/nginx

# CentOS/RHEL
/etc/logrotate.d/nginx
</code></pre><p><strong>デフォルトの内容：</strong></p><pre><code class="language-bash">/var/log/nginx/*.log {
    daily
    missingok
    rotate 14
    compress
    delaycompress
    notifempty
    create 0640 www-data adm
    sharedscripts
    postrotate
        if [ -f /var/run/nginx.pid ]; then
            kill -USR1 `cat /var/run/nginx.pid`
        fi
    endscript
}
</code></pre><p><strong>ディレクティブの説明：</strong></p><ul><li><code>daily</code> - 毎日ローテーション</li><li><code>missingok</code> - ログファイルがなくてもエラーにしない</li><li><code>rotate 14</code> - バックアップを14個保持</li><li><code>compress</code> - 古いログをgzipで圧縮</li><li><code>delaycompress</code> - 次のローテーションまで圧縮を遅らせる</li><li><code>notifempty</code> - ファイルが空の場合はローテーションしない</li><li><code>create 0640 www-data adm</code> - 指定したパーミッションで新しいファイルを作成</li><li><code>sharedscripts</code> - すべてのログに対してpostrotateスクリプトを1回実行</li><li><code>postrotate/endscript</code> - ローテーション後に実行するスクリプト</li></ul><h3 id="32-custom-logrotate-configuration"><strong>3.2. カスタムLogrotate設定</strong></h3><p><strong>時間単位でローテーション（高トラフィックサイト向け）：</strong></p><pre><code class="language-bash">sudo nano /etc/logrotate.d/nginx-hourly

# 内容：
/var/log/nginx/high-traffic.log {
    hourly
    rotate 168          # 7日 × 24時間
    compress
    delaycompress
    notifempty
    create 0640 www-data adm
    dateext
    dateformat -%Y%m%d-%H
    sharedscripts
    postrotate
        if [ -f /var/run/nginx.pid ]; then
            kill -USR1 `cat /var/run/nginx.pid`
        fi
    endscript
}
</code></pre><p><strong>サイズでローテーション：</strong></p><pre><code class="language-bash">/var/log/nginx/*.log {
    size 100M           # 100MBに達したらローテーション
    rotate 10
    compress
    delaycompress
    notifempty
    create 0640 www-data adm
    sharedscripts
    postrotate
        if [ -f /var/run/nginx.pid ]; then
            kill -USR1 `cat /var/run/nginx.pid`
        fi
    endscript
}
</code></pre><p><strong>カスタム命名でローテーション：</strong></p><pre><code class="language-bash">/var/log/nginx/*.log {
    daily
    rotate 30
    compress
    delaycompress
    notifempty
    create 0640 www-data adm
    dateext
    dateformat -.%Y-%m-%d
    extension .log
    sharedscripts
    postrotate
        if [ -f /var/run/nginx.pid ]; then
            kill -USR1 `cat /var/run/nginx.pid`
        fi
    endscript
}

# 出力: access.log-2024-12-03.log.gz
</code></pre><p><strong>ログ別に分けてローテーション：</strong></p><pre><code class="language-bash"># パフォーマンスログ - 長期保存
/var/log/nginx/performance.log {
    daily
    rotate 90           # 3ヶ月
    compress
    delaycompress
    notifempty
    create 0640 www-data adm
}

# エラーログ - 非常に長期保存
/var/log/nginx/error.log {
    weekly
    rotate 52           # 1年
    compress
    delaycompress
    notifempty
    create 0640 www-data adm
}

# アクセスログ - 早めにローテーション
/var/log/nginx/access.log {
    daily
    rotate 7            # 1週間
    compress
    delaycompress
    notifempty
    create 0640 www-data adm
}
</code></pre><h3 id="33-test-v%C3%A0-force-rotation"><strong>3.3. ローテーションのテストと強制実行</strong></h3><pre><code class="language-bash"># 設定をテスト（ドライラン）
sudo logrotate -d /etc/logrotate.d/nginx

# 強制ローテーション（即時実行）
sudo logrotate -f /etc/logrotate.d/nginx

# ステータスを確認
sudo cat /var/lib/logrotate/status

# 手動ローテーション（logrotateなし）
sudo mv /var/log/nginx/access.log /var/log/nginx/access.log.1
sudo nginx -s reopen
sudo gzip /var/log/nginx/access.log.1
</code></pre><h3 id="34-troubleshooting-logrotate"><strong>3.4. Logrotateのトラブルシューティング</strong></h3><p><strong>logrotateが動作しているか確認：</strong></p><pre><code class="language-bash"># cronジョブを確認
ls -la /etc/cron.daily/logrotate

# logrotateステータスを確認
sudo cat /var/lib/logrotate/status | grep nginx

# 詳細付きで手動実行
sudo logrotate -v /etc/logrotate.d/nginx
</code></pre><p><strong>よくあるエラー：</strong></p><pre><code class="language-bash"># エラー: Permission denied
# 修正: 所有権を確認
ls -la /var/log/nginx/
sudo chown www-data:adm /var/log/nginx/*.log

# エラー: Nginxがログを再オープンしない
# 修正: PIDファイルを確認
ls -la /var/run/nginx.pid
sudo systemctl restart nginx

# エラー: ログが圧縮されない
# 修正: gzipがインストールされているか確認
which gzip
sudo apt install gzip
</code></pre><hr><h2 id="4-c%C3%A1c-metrics-c%C6%A1-b%E1%BA%A3n-%C4%91%E1%BB%83-theo-d%C3%B5i"><strong>4. モニタリングの基本メトリクス</strong></h2><h3 id="41-requests-per-second-rps"><strong>4.1. 毎秒リクエスト数（RPS）</strong></h3><p><strong>RPSを計算するスクリプト：</strong></p><pre><code class="language-bash">#!/bin/bash
# rps.sh - RPSを計算

LOG_FILE="/var/log/nginx/access.log"
INTERVAL=60  # 秒

while true; do
    START_COUNT=$(wc -l &lt; "$LOG_FILE")
    sleep $INTERVAL
    END_COUNT=$(wc -l &lt; "$LOG_FILE")
    
    REQUESTS=$((END_COUNT - START_COUNT))
    RPS=$(echo "scale=2; $REQUESTS / $INTERVAL" | bc)
    
    echo "$(date '+%Y-%m-%d %H:%M:%S') - RPS: $RPS"
done
</code></pre><p><strong>スクリプトの実行：</strong></p><pre><code class="language-bash">chmod +x rps.sh
./rps.sh
</code></pre><h3 id="42-response-time-analysis"><strong>4.2. レスポンス時間分析</strong></h3><p><strong>レスポンス時間を分析するスクリプト：</strong></p><pre><code class="language-bash">#!/bin/bash
# response_time.sh - レスポンス時間を分析

LOG_FILE="/var/log/nginx/access.log"

echo "レスポンス時間の統計："
echo "===================="

# request_timeを抽出（ログに記録されている前提）
awk '{print $NF}' "$LOG_FILE" | \
    awk '{
        sum += $1;
        count++;
        if ($1 &gt; max) max = $1;
        if (min == 0 || $1 &lt; min) min = $1;
    }
    END {
        print "平均: " sum/count " 秒";
        print "最小: " min " 秒";
        print "最大: " max " 秒";
    }'
</code></pre><h3 id="43-status-code-distribution"><strong>4.3. ステータスコードの分布</strong></h3><pre><code class="language-bash">#!/bin/bash
# status_codes.sh - HTTPステータスコードを集計

LOG_FILE="/var/log/nginx/access.log"

echo "HTTPステータスコードの分布："
echo "============================"

awk '{print $9}' "$LOG_FILE" | sort | uniq -c | sort -rn | \
while read count code; do
    percentage=$(echo "scale=2; ($count * 100) / $(wc -l &lt; $LOG_FILE)" | bc)
    printf "%3s: %6d リクエスト (%5.2f%%)\n" "$code" "$count" "$percentage"
done
</code></pre><h3 id="44-traffic-by-hour"><strong>4.4. 時間別トラフィック</strong></h3><pre><code class="language-bash">#!/bin/bash
# traffic_by_hour.sh - 時間別トラフィックを分析

LOG_FILE="/var/log/nginx/access.log"

echo "時間別トラフィック："
echo "=================="

awk '{print $4}' "$LOG_FILE" | cut -d: -f2 | sort | uniq -c | \
while read count hour; do
    printf "時 %02d: %6d リクエスト\n" "$hour" "$count"
done
</code></pre><h3 id="45-top-clients-ip-addresses"><strong>4.5. 上位クライアント（IPアドレス）</strong></h3><pre><code class="language-bash">#!/bin/bash
# top_clients.sh - リクエスト数の多いクライアントを検索

LOG_FILE="/var/log/nginx/access.log"
TOP_N=10

echo "上位 $TOP_N クライアント："
echo "========================="

awk '{print $1}' "$LOG_FILE" | sort | uniq -c | sort -rn | head -n $TOP_N | \
while read count ip; do
    printf "%15s: %6d リクエスト\n" "$ip" "$count"
done
</code></pre><h3 id="46-bandwidth-usage"><strong>4.6. 帯域幅の使用量</strong></h3><pre><code class="language-bash">#!/bin/bash
# bandwidth.sh - 帯域幅の使用量を計算

LOG_FILE="/var/log/nginx/access.log"

echo "帯域幅統計："
echo "==========="

# $body_bytes_sentが10番目のフィールドにある前提
awk '{sum += $10} END {
    gb = sum / 1024 / 1024 / 1024;
    mb = sum / 1024 / 1024;
    kb = sum / 1024;
    printf "合計: %.2f GB (%.2f MB, %.2f KB)\n", gb, mb, kb;
}' "$LOG_FILE"
</code></pre><h3 id="47-real-time-dashboard-script"><strong>4.7. リアルタイムダッシュボードスクリプト</strong></h3><pre><code class="language-bash">#!/bin/bash
# dashboard.sh - Nginxリアルタイム監視ダッシュボード

LOG_FILE="/var/log/nginx/access.log"

while true; do
    clear
    echo "======================================="
    echo "   NGINX 監視ダッシュボード"
    echo "======================================="
    echo "時刻: $(date '+%Y-%m-%d %H:%M:%S')"
    echo

    # 総リクエスト数
    TOTAL=$(wc -l &lt; "$LOG_FILE")
    echo "総リクエスト数: $TOTAL"
    echo

    echo "直近 ~1000 リクエスト"
    echo

    # ステータスコード（直近1000件）
    echo "ステータスコード（直近）："
    tail -n 1000 "$LOG_FILE" | awk '{print $9}' | sort | uniq -c | sort -rn
    echo

    # 上位5 IP（直近）
    echo "上位5 IP（直近）："
    tail -n 1000 "$LOG_FILE" | awk '{print $1}' | sort | uniq -c | sort -rn | head -5
    echo

    # 上位5 URL（直近）
    echo "上位5 URL（直近）："
    tail -n 1000 "$LOG_FILE" | awk '{print $7}' | sort | uniq -c | sort -rn | head -5
    
    sleep 5
done
</code></pre><p><strong>ダッシュボードの実行：</strong></p><pre><code class="language-bash">chmod +x dashboard.sh
./dashboard.sh
</code></pre><h3 id="48-g%E1%BB%ADi-alerts-khi-c%C3%B3-v%E1%BA%A5n-%C4%91%E1%BB%81"><strong>4.8. 問題発生時のアラート送信</strong></h3><pre><code class="language-bash">#!/bin/bash
# alert.sh - エラー率が高い場合にアラートを送信

LOG_FILE="/var/log/nginx/access.log"
ERROR_THRESHOLD=10  # 5xxエラーの割合（%）
EMAIL="admin@example.com"

# 直近100件を集計
TOTAL=$(tail -n 100 "$LOG_FILE" | wc -l)
ERRORS=$(tail -n 100 "$LOG_FILE" | awk '{print $9}' | grep "^5" | wc -l)

ERROR_RATE=$(echo "scale=2; ($ERRORS * 100) / $TOTAL" | bc)

if (( $(echo "$ERROR_RATE &gt; $ERROR_THRESHOLD" | bc -l) )); then
    MESSAGE="アラート：高いエラー率を検知！5xxエラーが${ERROR_RATE}%に達しています"
    echo "$MESSAGE" | mail -s "Nginx アラート" "$EMAIL"
    echo "$MESSAGE"
fi
</code></pre><h3 id="49-integration-v%E1%BB%9Bi-monitoring-tools"><strong>4.9. モニタリングツールとの連携</strong></h3><p><strong>Prometheus用メトリクスのエクスポート：</strong></p><pre><code class="language-bash"># nginx-prometheus-exporterをインストール
wget https://github.com/nginxinc/nginx-prometheus-exporter/releases/download/v0.11.0/nginx-prometheus-exporter_0.11.0_linux_amd64.tar.gz
tar xzf nginx-prometheus-exporter_0.11.0_linux_amd64.tar.gz
sudo mv nginx-prometheus-exporter /usr/local/bin/

# エクスポーターを起動
nginx-prometheus-exporter -nginx.scrape-uri=http://localhost:8080/stub_status
</code></pre><p><strong>Nginx stub_statusの設定：</strong></p><pre><code class="language-nginx">server {
    listen 8080;
    server_name localhost;
    
    location /stub_status {
        stub_status;
        access_log off;
        allow 127.0.0.1;
        deny all;
    }
}
</code></pre><hr><h2 id="5-b%C3%A0i-t%E1%BA%ADp-th%E1%BB%B1c-h%C3%A0nh"><strong>5. 実践演習</strong></h2><h3 id="b%C3%A0i-t%E1%BA%ADp-1-custom-log-format"><strong>演習1：カスタムログフォーマット</strong></h3><ol><li>以下を含む<code>timing</code>というカスタムログフォーマットを作成する：<ul><li>リモートアドレス</li><li>リクエスト</li><li>ステータス</li><li>リクエスト時間</li><li>アップストリームのレスポンス時間</li></ul></li><li>このフォーマットをバーチャルホストに適用する</li><li>トラフィックを生成してログを確認する</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-2-json-logging"><strong>演習2：JSONロギング</strong></h3><ol><li>JSONログフォーマットを作成する</li><li>JSONでログ出力するようNginxを設定する</li><li><code>jq</code>でJSONログを解析する：</li></ol><pre><code class="language-bash">cat /var/log/nginx/access.json | jq '.status'
cat /var/log/nginx/access.json | jq 'select(.status &gt;= 400)'
</code></pre><h3 id="b%C3%A0i-t%E1%BA%ADp-3-log-rotation"><strong>演習3：ログローテーション</strong></h3><ol><li>10MBでローテーションするカスタムlogrotate設定を作成する</li><li><code>logrotate -d</code>でテストする</li><li>ローテーションを強制実行して確認する</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-4-traffic-analysis"><strong>演習4：トラフィック分析</strong></h3><ol><li><code>ab</code>で1000件のリクエストを生成する：</li></ol><pre><code class="language-bash">ab -n 1000 -c 10 http://localhost/
</code></pre><ol start="2"><li>ログを分析して以下を調べる：<ul><li>総リクエスト数</li><li>平均レスポンス時間</li><li>ステータスコードの分布</li><li>上位URL</li></ul></li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-5-real-time-monitoring"><strong>演習5：リアルタイムモニタリング</strong></h3><ol><li>ダッシュボードスクリプトを設定する</li><li>以下を追加するよう修正する：<ul><li>エラー率（%）</li><li>帯域幅の使用量</li><li>最も遅いリクエスト</li></ul></li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-6-conditional-logging"><strong>演習6：条件付きロギング</strong></h3><ol><li>以下をログ対象外に設定する：<ul><li>静的ファイル（.css、.js、.jpg、.png）</li><li>ヘルスチェックエンドポイント（/health）</li><li>ボットのトラフィック</li></ul></li><li>これらのリクエストがログに現れないことを確認する</li></ol><hr><h2 id="6-troubleshooting-v%E1%BB%9Bi-logs"><strong>6. ログを使ったトラブルシューティング</strong></h2><h3 id="61-debug-404-errors"><strong>6.1. 404エラーのデバッグ</strong></h3><pre><code class="language-bash"># すべての404を検索
grep " 404 " /var/log/nginx/access.log

# 404を引き起こしている上位URL
grep " 404 " /var/log/nginx/access.log | awk '{print $7}' | sort | uniq -c | sort -rn | head -10

# 特定IPからの404
grep "192.168.1.100" /var/log/nginx/access.log | grep " 404 "
</code></pre><h3 id="62-debug-500-errors"><strong>6.2. 500エラーのデバッグ</strong></h3><pre><code class="language-bash"># 5xxエラーを検索
grep " 50[0-9] " /var/log/nginx/access.log

# 詳細はエラーログを確認
sudo tail -100 /var/log/nginx/error.log | grep "error"

# 時間別の5xxエラー
grep " 50[0-9] " /var/log/nginx/access.log | awk '{print $4}' | cut -d: -f1-2 | uniq -c
</code></pre><h3 id="63-debug-slow-requests"><strong>6.3. 遅いリクエストのデバッグ</strong></h3><pre><code class="language-bash"># 1秒以上のリクエストを検索（request_timeがログされている前提）
awk '$NF &gt; 1.0' /var/log/nginx/access.log

# 上位10件の最も遅いリクエスト
awk '{print $NF, $7}' /var/log/nginx/access.log | sort -rn | head -10
</code></pre><h3 id="64-debug-high-traffic"><strong>6.4. 高トラフィックのデバッグ</strong></h3><pre><code class="language-bash"># 毎分のリクエスト数
awk '{print $4}' /var/log/nginx/access.log | cut -d: -f1-3 | uniq -c

# トラフィックスパイクを特定
awk '{print $4}' /var/log/nginx/access.log | cut -d: -f1-3 | uniq -c | awk '$1 &gt; 1000'
</code></pre><h3 id="65-debug-security-issues"><strong>6.5. セキュリティ問題のデバッグ</strong></h3><pre><code class="language-bash"># SQLインジェクション試行を検索
grep -i "select.*from\|union.*select" /var/log/nginx/access.log

# パストラバーサル試行を検索
grep "\.\." /var/log/nginx/access.log

# 不審なユーザーエージェント
grep -i "sqlmap\|nikto\|nmap" /var/log/nginx/access.log
</code></pre><hr><h2 id="7-best-practices"><strong>7. ベストプラクティス</strong></h2><h3 id="71-log-management"><strong>7.1. ログ管理</strong></h3><ol><li><strong>バーチャルホスト別にログを分ける：</strong></li></ol><pre><code class="language-nginx">server {
    server_name site1.com;
    access_log /var/log/nginx/site1.access.log;
    error_log /var/log/nginx/site1.error.log;
}
</code></pre><ol start="2"><li><strong>適切なログレベルを使用する：</strong></li></ol><pre><code class="language-nginx"># 本番: errorまたはwarn
error_log /var/log/nginx/error.log warn;

# 開発: infoまたはdebug
error_log /var/log/nginx/error.log debug;
</code></pre><ol start="3"><li><strong>過剰にログを記録しない：</strong></li></ol><pre><code class="language-nginx"># 静的ファイルは無効化
location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
    access_log off;
}

# ヘルスチェックは無効化
location /health {
    access_log off;
    return 200;
}
</code></pre><h3 id="72-performance"><strong>7.2. パフォーマンス</strong></h3><ol><li><strong>ログをバッファリングする：</strong></li></ol><pre><code class="language-nginx">access_log /var/log/nginx/access.log combined buffer=32k;
</code></pre><ol start="2"><li><strong>非同期ロギング（Nginx 1.7.11+）：</strong></li></ol><pre><code class="language-nginx">access_log /var/log/nginx/access.log combined buffer=32k flush=5s;
</code></pre><h3 id="73-security"><strong>7.3. セキュリティ</strong></h3><ol><li><strong>ログファイルを保護する：</strong></li></ol><pre><code class="language-bash">sudo chmod 640 /var/log/nginx/*.log
sudo chown www-data:adm /var/log/nginx/*.log
</code></pre><ol start="2"><li><strong>定期的にローテーションする：</strong></li></ol><pre><code class="language-bash"># 高トラフィックサイトは毎日ローテーション
# 低トラフィックサイトは毎週ローテーション
</code></pre><ol start="3"><li><strong>監視とアラートを設定する：</strong></li></ol><pre><code class="language-bash"># エラー率の監視を設定する
# 異常なスパイクでアラートを送信する
</code></pre><hr><h2 id="t%E1%BB%95ng-k%E1%BA%BFt"><strong>まとめ</strong></h2><p>この課では以下を学びました：</p><ul><li>✅ アクセスログとエラーログ</li><li>✅ カスタムログフォーマットと変数</li><li>✅ logrotateによるログローテーション</li><li>✅ ログ分析とメトリクス</li><li>✅ ログを使ったトラブルシューティング</li><li>✅ ロギングのベストプラクティス</li></ul><p><strong>次の課：</strong> リバースプロキシを探ります——Nginxをバックエンドアプリケーションのリバースプロキシとしてどう活用するかを学びます。</p>
