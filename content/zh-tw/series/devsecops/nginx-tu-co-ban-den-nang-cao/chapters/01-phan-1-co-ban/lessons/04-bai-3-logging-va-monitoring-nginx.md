---
id: 019c9617-fc7a-7342-b6bc-7d30a93ee48e
title: '第3課：Nginx 記錄與監控'
slug: bai-3-logging-va-monitoring-nginx
description: >-
  學習 Nginx 的記錄與監控，包含 access log、error log、自訂記錄格式和日誌輪替。
  指導分析日誌、疑難排解、使用 logrotate，以及追蹤伺服器效能的基本指標。
  包含實際範例和最佳實踐。
duration_minutes: 160
is_free: true
video_url: null
sort_order: 3
section_title: "第1部：基礎"
course:
  id: 019c9617-fc27-73c5-b664-a1902ec9ac00
  title: Nginx 從入門到進階
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
      <tspan x="60" dy="0">第3課：Nginx 記錄與監控</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Nginx 從入門到進階</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第1部：基礎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-access-log-v%C3%A0-error-log"><strong>1. Access Log 與 Error Log</strong></h2><p>Nginx 有兩種主要的日誌類型來監控伺服器活動：Access log（記錄所有請求）和 Error log（記錄錯誤和警告）。</p><h3 id="11-access-log"><strong>1.1. Access Log</strong></h3><p>Access log 記錄伺服器收到的每個請求，包含用戶端資訊、請求內容、回應狀態和處理時間。</p><p><strong>預設位置：</strong></p><pre><code class="language-bash"># Ubuntu/Debian
/var/log/nginx/access.log

# CentOS/RHEL
/var/log/nginx/access.log

# macOS (Homebrew)
/usr/local/var/log/nginx/access.log
</code></pre><p><strong>基本設定：</strong></p><pre><code class="language-nginx">http {
    # 整個 HTTP context 的 access log
    access_log /var/log/nginx/access.log;
    
    server {
        listen 80;
        server_name example.com;
        
        # 虛擬主機的獨立 access log
        access_log /var/log/nginx/example.com.access.log;
        
        location / {
            root /var/www/html;
        }
        
        # 關閉特定 location 的 access log
        location /health-check {
            access_log off;
            return 200 "OK\n";
        }
    }
}
</code></pre><p><strong>預設格式（combined）：</strong></p><pre><code>192.168.1.100 - - [03/Dec/2024:10:30:45 +0700] "GET /index.html HTTP/1.1" 200 1234 "https://google.com" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
</code></pre><p><strong>欄位說明：</strong></p><ul><li><code>192.168.1.100</code> - 用戶端 IP 位址</li><li><code>-</code> - 遠端使用者（通常無認證時為 <code>-</code>）</li><li><code>-</code> - 已驗證的使用者</li><li><code>[03/Dec/2024:10:30:45 +0700]</code> - 時間戳記</li><li><code>"GET /index.html HTTP/1.1"</code> - 請求方法、URI 和 HTTP 版本</li><li><code>200</code> - HTTP 狀態碼</li><li><code>1234</code> - 回應主體大小（bytes）</li><li><code>"https://google.com"</code> - Referer</li><li><code>"Mozilla/5.0..."</code> - User Agent</li></ul><h3 id="12-error-log"><strong>1.2. Error Log</strong></h3><p>Error log 記錄 Nginx 產生的錯誤、警告和除錯資訊。</p><p><strong>預設位置：</strong></p><pre><code class="language-bash">/var/log/nginx/error.log
</code></pre><p><strong>日誌層級（由少到多）：</strong></p><ol><li><code>emerg</code> - 緊急：系統無法使用</li><li><code>alert</code> - 警報：必須立即採取行動</li><li><code>crit</code> - 嚴重狀態</li><li><code>error</code> - 錯誤狀態</li><li><code>warn</code> - 警告狀態</li><li><code>notice</code> - 正常但重要的事件</li><li><code>info</code> - 資訊</li><li><code>debug</code> - 除錯訊息</li></ol><p><strong>設定：</strong></p><pre><code class="language-nginx"># 全域 error log
error_log /var/log/nginx/error.log warn;

http {
    # HTTP 層級的 error log
    error_log /var/log/nginx/http-error.log error;
    
    server {
        listen 80;
        server_name example.com;
        
        # Server 層級的 error log
        error_log /var/log/nginx/example.com.error.log error;
        
        # 疑難排解用 debug log
        error_log /var/log/nginx/debug.log debug;
    }
}
</code></pre><p><strong>Error log 範例：</strong></p><pre><code>2024/12/03 10:30:45 [error] 1234#1234: *1 open() "/var/www/html/notfound.html" failed (2: No such file or directory), client: 192.168.1.100, server: example.com, request: "GET /notfound.html HTTP/1.1", host: "example.com"

2024/12/03 10:31:20 [warn] 1234#1234: *2 upstream server temporarily disabled while connecting to upstream, client: 192.168.1.101, server: api.example.com, request: "GET /api/users HTTP/1.1", upstream: "http://192.168.1.200:3000/api/users"

2024/12/03 10:32:05 [crit] 1234#1234: malloc() 8192 bytes failed (12: Cannot allocate memory)
</code></pre><h3 id="13-xem-v%C3%A0-theo-d%C3%B5i-logs-real-time"><strong>1.3. 即時查看與監控日誌</strong></h3><pre><code class="language-bash"># 查看 access log
sudo tail -f /var/log/nginx/access.log

# 查看 error log
sudo tail -f /var/log/nginx/error.log

# 查看最後 100 行
sudo tail -n 100 /var/log/nginx/access.log

# 同時查看兩個日誌
sudo tail -f /var/log/nginx/access.log /var/log/nginx/error.log

# 過濾日誌
sudo tail -f /var/log/nginx/access.log | grep "404"
sudo tail -f /var/log/nginx/access.log | grep "192.168.1.100"

# 用 less 查看日誌（可滾動）
sudo less +F /var/log/nginx/access.log
</code></pre><h3 id="14-ph%C3%A2n-t%C3%ADch-logs-c%C6%A1-b%E1%BA%A3n"><strong>1.4. 基本日誌分析</strong></h3><p><strong>計算總請求數：</strong></p><pre><code class="language-bash"># 總請求數
wc -l /var/log/nginx/access.log

# 過去一小時的請求
sudo awk -v date="$(date -d '1 hour ago' '+%d/%b/%Y:%H')" '$4 &gt; "["date' /var/log/nginx/access.log | wc -l
</code></pre><p><strong>前 10 個 IP：</strong></p><pre><code class="language-bash">sudo awk '{print $1}' /var/log/nginx/access.log | sort | uniq -c | sort -rn | head -10
</code></pre><p><strong>存取次數最多的前 10 個 URL：</strong></p><pre><code class="language-bash">sudo awk '{print $7}' /var/log/nginx/access.log | sort | uniq -c | sort -rn | head -10
</code></pre><p><strong>HTTP 狀態碼統計：</strong></p><pre><code class="language-bash">sudo awk '{print $9}' /var/log/nginx/access.log | sort | uniq -c | sort -rn
</code></pre><p><strong>前 10 個 User Agent：</strong></p><pre><code class="language-bash">sudo awk -F'"' '{print $6}' /var/log/nginx/access.log | sort | uniq -c | sort -rn | head -10
</code></pre><p><strong>每小時請求數：</strong></p><pre><code class="language-bash">sudo awk '{print $4}' /var/log/nginx/access.log | cut -d: -f1-2 | sort | uniq -c
</code></pre><hr><h2 id="2-%C4%91%E1%BB%8Bnh-d%E1%BA%A1ng-log-t%C3%B9y-ch%E1%BB%89nh"><strong>2. 自訂記錄格式</strong></h2><p>Nginx 允許您建立自訂記錄格式，只收集您需要的資訊。</p><h3 id="21-log-format-c%C6%A1-b%E1%BA%A3n"><strong>2.1. 基本記錄格式</strong></h3><p><strong>定義格式：</strong></p><pre><code class="language-nginx">http {
    # 預設格式（combined）
    log_format combined '$remote_addr - $remote_user [$time_local] '
                        '"$request" $status $body_bytes_sent '
                        '"$http_referer" "$http_user_agent"';
    
    # 簡單格式
    log_format simple '$remote_addr - $request - $status';
    
    # 詳細格式
    log_format detailed '$remote_addr - $remote_user [$time_local] '
                        '"$request" $status $body_bytes_sent '
                        '"$http_referer" "$http_user_agent" '
                        'rt=$request_time uct="$upstream_connect_time" '
                        'uht="$upstream_header_time" urt="$upstream_response_time"';
    
    server {
        listen 80;
        
        # 使用自訂格式
        access_log /var/log/nginx/access.log detailed;
    }
}
</code></pre><h3 id="22-c%C3%A1c-bi%E1%BA%BFn-th%C6%B0%E1%BB%9Dng-d%C3%B9ng-trong-log-format"><strong>2.2. 常用變數</strong></h3><p><strong>用戶端資訊：</strong></p><pre><code class="language-nginx">$remote_addr          # 用戶端 IP
$remote_user          # HTTP 認證使用者
$http_x_forwarded_for # 透過代理/CDN 的真實 IP
</code></pre><p><strong>請求資訊：</strong></p><pre><code class="language-nginx">$time_local           # 本地時間
$time_iso8601         # ISO 8601 格式時間
$request              # 完整請求行
$request_method       # GET、POST 等
$request_uri          # 含參數的請求 URI
$uri                  # 當前 URI
$args                 # 查詢字串參數
$query_string         # 同 $args
$scheme               # http 或 https
$server_protocol      # HTTP/1.1、HTTP/2.0
$host                 # Host 標頭
$server_name          # 伺服器名稱
</code></pre><p><strong>回應資訊：</strong></p><pre><code class="language-nginx">$status               # HTTP 狀態碼
$body_bytes_sent      # 回應主體大小
$bytes_sent           # 總傳送位元組（標頭 + 主體）
$request_length       # 請求長度（含標頭）
</code></pre><p><strong>時間資訊：</strong></p><pre><code class="language-nginx">$request_time         # 請求處理時間（秒）
$upstream_response_time    # 後端回應時間
$upstream_connect_time     # 連線到上游的時間
$upstream_header_time      # 接收上游標頭的時間
</code></pre><p><strong>上游資訊：</strong></p><pre><code class="language-nginx">$upstream_addr             # 上游伺服器位址
$upstream_status           # 上游回應狀態
$upstream_cache_status     # 快取狀態（HIT、MISS 等）
</code></pre><p><strong>標頭：</strong></p><pre><code class="language-nginx">$http_user_agent      # User-Agent 標頭
$http_referer         # Referer 標頭
$http_cookie          # Cookie 標頭
$http_&lt;header_name&gt;   # 任意 HTTP 標頭（小寫加底線）
</code></pre><h3 id="23-v%C3%AD-d%E1%BB%A5-log-formats-th%E1%BB%B1c-t%E1%BA%BF"><strong>2.3. 實際記錄格式範例</strong></h3><p><strong>效能監控格式：</strong></p><pre><code class="language-nginx">log_format performance '$remote_addr - [$time_local] "$request" '
                       '$status $body_bytes_sent '
                       'rt=$request_time '
                       'uct=$upstream_connect_time '
                       'uht=$upstream_header_time '
                       'urt=$upstream_response_time';

server {
    listen 80;
    access_log /var/log/nginx/performance.log performance;
}
</code></pre><p><strong>輸出：</strong></p><pre><code>192.168.1.100 - [03/Dec/2024:10:30:45 +0700] "GET /api/users HTTP/1.1" 200 1234 rt=0.125 uct=0.005 uht=0.050 urt=0.120
</code></pre><p><strong>JSON 格式（易於解析）：</strong></p><pre><code class="language-nginx">log_format json_combined escape=json
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
</code></pre><p><strong>輸出：</strong></p><pre><code class="language-json">{"time_local":"03/Dec/2024:10:30:45 +0700","remote_addr":"192.168.1.100","request":"GET /index.html HTTP/1.1","status":200,"body_bytes_sent":1234,"request_time":0.005,"http_referer":"https://google.com","http_user_agent":"Mozilla/5.0"}
</code></pre><p><strong>安全性監控格式：</strong></p><pre><code class="language-nginx">log_format security '$remote_addr - [$time_local] '
                    '"$request" $status '
                    '"$http_user_agent" '
                    '"$http_x_forwarded_for" '
                    'host=$host '
                    'args=$args';

server {
    listen 80;
    access_log /var/log/nginx/security.log security;
}
</code></pre><p><strong>CDN/代理格式：</strong></p><pre><code class="language-nginx">log_format cdn '$http_x_forwarded_for - $remote_addr - $remote_user [$time_local] '
               '"$request" $status $body_bytes_sent '
               '"$http_referer" "$http_user_agent" '
               'cache=$upstream_cache_status';

server {
    listen 80;
    access_log /var/log/nginx/cdn.log cdn;
}
</code></pre><h3 id="24-conditional-logging"><strong>2.4. 條件式記錄</strong></h3><p><strong>只在條件成立時記錄：</strong></p><pre><code class="language-nginx">http {
    # 定義 map 來確認條件
    map $status $loggable {
        ~^[23]  0;  # 不記錄 2xx 和 3xx
        default 1;  # 其他全部記錄
    }
    
    server {
        listen 80;
        
        # 只在 $loggable = 1 時記錄
        access_log /var/log/nginx/errors-only.log combined if=$loggable;
    }
}
</code></pre><p><strong>不記錄靜態檔案：</strong></p><pre><code class="language-nginx">map $request_uri $log_static {
    ~*\.(jpg|jpeg|png|gif|ico|css|js)$ 0;
    default 1;
}

server {
    listen 80;
    access_log /var/log/nginx/access.log combined if=$log_static;
}
</code></pre><p><strong>不記錄健康檢查：</strong></p><pre><code class="language-nginx">map $request_uri $log_health {
    ~^/health$ 0;
    ~^/ping$ 0;
    default 1;
}

server {
    listen 80;
    access_log /var/log/nginx/access.log combined if=$log_health;
}
</code></pre><p><strong>不記錄機器人：</strong></p><pre><code class="language-nginx">map $http_user_agent $log_bots {
    ~*bot 0;
    ~*crawler 0;
    ~*spider 0;
    default 1;
}

server {
    listen 80;
    access_log /var/log/nginx/access.log combined if=$log_bots;
}
</code></pre><h3 id="25-multiple-access-logs"><strong>2.5. 多個 Access Log</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;
    
    # 記錄所有請求
    access_log /var/log/nginx/all.log combined;
    
    # 只記錄錯誤
    access_log /var/log/nginx/errors.log combined if=$loggable;
    
    # 效能記錄
    access_log /var/log/nginx/performance.log performance;
    
    # 用於處理的 JSON 記錄
    access_log /var/log/nginx/json.log json_combined;
}
</code></pre><hr><h2 id="3-log-rotation-v%E1%BB%9Bi-logrotate"><strong>3. 使用 Logrotate 進行日誌輪替</strong></h2><p>日誌檔案可能成長得非常快。日誌輪替透過自動壓縮和刪除舊日誌來管理磁碟空間。</p><h3 id="31-logrotate-c%C6%A1-b%E1%BA%A3n"><strong>3.1. Logrotate 基本</strong></h3><p><strong>預設設定檔：</strong></p><pre><code class="language-bash"># Ubuntu/Debian
/etc/logrotate.d/nginx

# CentOS/RHEL
/etc/logrotate.d/nginx
</code></pre><p><strong>預設內容：</strong></p><pre><code class="language-bash">/var/log/nginx/*.log {
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
</code></pre><p><strong>指令說明：</strong></p><ul><li><code>daily</code> - 每天輪替</li><li><code>missingok</code> - 日誌不存在時不報錯</li><li><code>rotate 14</code> - 保留 14 個備份</li><li><code>compress</code> - 用 gzip 壓縮舊日誌</li><li><code>delaycompress</code> - 延到下次輪替才壓縮</li><li><code>notifempty</code> - 檔案為空時不輪替</li><li><code>create 0640 www-data adm</code> - 以指定權限建立新檔案</li><li><code>sharedscripts</code> - 所有日誌只執行一次 postrotate 腳本</li><li><code>postrotate/endscript</code> - 輪替後執行的腳本</li></ul><h3 id="32-custom-logrotate-configuration"><strong>3.2. 自訂 Logrotate 設定</strong></h3><p><strong>每小時輪替（高流量網站）：</strong></p><pre><code class="language-bash">sudo nano /etc/logrotate.d/nginx-hourly

# 內容：
/var/log/nginx/high-traffic.log {
    hourly
    rotate 168          # 7天 × 24小時
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
</code></pre><p><strong>依大小輪替：</strong></p><pre><code class="language-bash">/var/log/nginx/*.log {
    size 100M           # 達到 100MB 時輪替
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
</code></pre><p><strong>自訂命名輪替：</strong></p><pre><code class="language-bash">/var/log/nginx/*.log {
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

# 輸出: access.log-2024-12-03.log.gz
</code></pre><p><strong>各日誌分開輪替：</strong></p><pre><code class="language-bash"># 效能日誌 - 保存較久
/var/log/nginx/performance.log {
    daily
    rotate 90           # 3個月
    compress
    delaycompress
    notifempty
    create 0640 www-data adm
}

# 錯誤日誌 - 保存非常久
/var/log/nginx/error.log {
    weekly
    rotate 52           # 1年
    compress
    delaycompress
    notifempty
    create 0640 www-data adm
}

# Access log - 快速輪替
/var/log/nginx/access.log {
    daily
    rotate 7            # 1週
    compress
    delaycompress
    notifempty
    create 0640 www-data adm
}
</code></pre><h3 id="33-test-v%C3%A0-force-rotation"><strong>3.3. 測試與強制輪替</strong></h3><pre><code class="language-bash"># 測試設定（模擬執行）
sudo logrotate -d /etc/logrotate.d/nginx

# 強制輪替（立即執行）
sudo logrotate -f /etc/logrotate.d/nginx

# 查看狀態
sudo cat /var/lib/logrotate/status

# 手動輪替（不使用 logrotate）
sudo mv /var/log/nginx/access.log /var/log/nginx/access.log.1
sudo nginx -s reopen
sudo gzip /var/log/nginx/access.log.1
</code></pre><h3 id="34-troubleshooting-logrotate"><strong>3.4. Logrotate 疑難排解</strong></h3><p><strong>確認 logrotate 是否在執行：</strong></p><pre><code class="language-bash"># 確認 cron 作業
ls -la /etc/cron.daily/logrotate

# 確認 logrotate 狀態
sudo cat /var/lib/logrotate/status | grep nginx

# 以詳細模式手動執行 logrotate
sudo logrotate -v /etc/logrotate.d/nginx
</code></pre><p><strong>常見錯誤：</strong></p><pre><code class="language-bash"># 錯誤: Permission denied
# 修正: 確認擁有者
ls -la /var/log/nginx/
sudo chown www-data:adm /var/log/nginx/*.log

# 錯誤: Nginx 未重新開啟日誌
# 修正: 確認 PID 檔案
ls -la /var/run/nginx.pid
sudo systemctl restart nginx

# 錯誤: 日誌未被壓縮
# 修正: 確認 gzip 已安裝
which gzip
sudo apt install gzip
</code></pre><hr><h2 id="4-c%C3%A1c-metrics-c%C6%A1-b%E1%BA%A3n-%C4%91%E1%BB%83-theo-d%C3%B5i"><strong>4. 監控的基本指標</strong></h2><h3 id="41-requests-per-second-rps"><strong>4.1. 每秒請求數（RPS）</strong></h3><p><strong>計算 RPS 的腳本：</strong></p><pre><code class="language-bash">#!/bin/bash
# rps.sh - 計算 RPS

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
</code></pre><p><strong>執行腳本：</strong></p><pre><code class="language-bash">chmod +x rps.sh
./rps.sh
</code></pre><h3 id="42-response-time-analysis"><strong>4.2. 回應時間分析</strong></h3><p><strong>分析回應時間的腳本：</strong></p><pre><code class="language-bash">#!/bin/bash
# response_time.sh - 分析回應時間

LOG_FILE="/var/log/nginx/access.log"

echo "回應時間統計："
echo "=============="

# 擷取 request_time（假設已記錄）
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
</code></pre><h3 id="43-status-code-distribution"><strong>4.3. 狀態碼分佈</strong></h3><pre><code class="language-bash">#!/bin/bash
# status_codes.sh - 統計 HTTP 狀態碼

LOG_FILE="/var/log/nginx/access.log"

echo "HTTP 狀態碼分佈："
echo "=================="

awk '{print $9}' "$LOG_FILE" | sort | uniq -c | sort -rn | \
while read count code; do
    percentage=$(echo "scale=2; ($count * 100) / $(wc -l &lt; $LOG_FILE)" | bc)
    printf "%3s: %6d 個請求 (%5.2f%%)\n" "$code" "$count" "$percentage"
done
</code></pre><h3 id="44-traffic-by-hour"><strong>4.4. 每小時流量</strong></h3><pre><code class="language-bash">#!/bin/bash
# traffic_by_hour.sh - 分析每小時流量

LOG_FILE="/var/log/nginx/access.log"

echo "每小時流量："
echo "============"

awk '{print $4}' "$LOG_FILE" | cut -d: -f2 | sort | uniq -c | \
while read count hour; do
    printf "第 %02d 時: %6d 個請求\n" "$hour" "$count"
done
</code></pre><h3 id="45-top-clients-ip-addresses"><strong>4.5. 最多請求的用戶端（IP 位址）</strong></h3><pre><code class="language-bash">#!/bin/bash
# top_clients.sh - 找出請求最多的用戶端

LOG_FILE="/var/log/nginx/access.log"
TOP_N=10

echo "前 $TOP_N 個用戶端："
echo "===================="

awk '{print $1}' "$LOG_FILE" | sort | uniq -c | sort -rn | head -n $TOP_N | \
while read count ip; do
    printf "%15s: %6d 個請求\n" "$ip" "$count"
done
</code></pre><h3 id="46-bandwidth-usage"><strong>4.6. 頻寬使用量</strong></h3><pre><code class="language-bash">#!/bin/bash
# bandwidth.sh - 計算頻寬使用量

LOG_FILE="/var/log/nginx/access.log"

echo "頻寬統計："
echo "=========="

# 假設 $body_bytes_sent 在第 10 個欄位
awk '{sum += $10} END {
    gb = sum / 1024 / 1024 / 1024;
    mb = sum / 1024 / 1024;
    kb = sum / 1024;
    printf "合計: %.2f GB (%.2f MB, %.2f KB)\n", gb, mb, kb;
}' "$LOG_FILE"
</code></pre><h3 id="47-real-time-dashboard-script"><strong>4.7. 即時儀表板腳本</strong></h3><pre><code class="language-bash">#!/bin/bash
# dashboard.sh - Nginx 即時監控儀表板

LOG_FILE="/var/log/nginx/access.log"

while true; do
    clear
    echo "======================================="
    echo "   NGINX 監控儀表板"
    echo "======================================="
    echo "時間：$(date '+%Y-%m-%d %H:%M:%S')"
    echo

    # 總請求數
    TOTAL=$(wc -l &lt; "$LOG_FILE")
    echo "總請求數：$TOTAL"
    echo

    echo "最近 ~1000 個請求"
    echo

    # 狀態碼（最近 1000 筆）
    echo "狀態碼（最近）："
    tail -n 1000 "$LOG_FILE" | awk '{print $9}' | sort | uniq -c | sort -rn
    echo

    # 前 5 個 IP（最近）
    echo "前 5 個 IP（最近）："
    tail -n 1000 "$LOG_FILE" | awk '{print $1}' | sort | uniq -c | sort -rn | head -5
    echo

    # 前 5 個 URL（最近）
    echo "前 5 個 URL（最近）："
    tail -n 1000 "$LOG_FILE" | awk '{print $7}' | sort | uniq -c | sort -rn | head -5
    
    sleep 5
done
</code></pre><p><strong>執行儀表板：</strong></p><pre><code class="language-bash">chmod +x dashboard.sh
./dashboard.sh
</code></pre><h3 id="48-g%E1%BB%ADi-alerts-khi-c%C3%B3-v%E1%BA%A5n-%C4%91%E1%BB%81"><strong>4.8. 發生問題時傳送警示</strong></h3><pre><code class="language-bash">#!/bin/bash
# alert.sh - 錯誤率過高時傳送警示

LOG_FILE="/var/log/nginx/access.log"
ERROR_THRESHOLD=10  # 5xx 錯誤百分比
EMAIL="admin@example.com"

# 統計最近 100 筆請求
TOTAL=$(tail -n 100 "$LOG_FILE" | wc -l)
ERRORS=$(tail -n 100 "$LOG_FILE" | awk '{print $9}' | grep "^5" | wc -l)

ERROR_RATE=$(echo "scale=2; ($ERRORS * 100) / $TOTAL" | bc)

if (( $(echo "$ERROR_RATE &gt; $ERROR_THRESHOLD" | bc -l) )); then
    MESSAGE="警示：偵測到高錯誤率！${ERROR_RATE}% 的請求為 5xx 錯誤"
    echo "$MESSAGE" | mail -s "Nginx 警示" "$EMAIL"
    echo "$MESSAGE"
fi
</code></pre><h3 id="49-integration-v%E1%BB%9Bi-monitoring-tools"><strong>4.9. 與監控工具整合</strong></h3><p><strong>匯出 Prometheus 指標：</strong></p><pre><code class="language-bash"># 安裝 nginx-prometheus-exporter
wget https://github.com/nginxinc/nginx-prometheus-exporter/releases/download/v0.11.0/nginx-prometheus-exporter_0.11.0_linux_amd64.tar.gz
tar xzf nginx-prometheus-exporter_0.11.0_linux_amd64.tar.gz
sudo mv nginx-prometheus-exporter /usr/local/bin/

# 執行 exporter
nginx-prometheus-exporter -nginx.scrape-uri=http://localhost:8080/stub_status
</code></pre><p><strong>設定 Nginx stub_status：</strong></p><pre><code class="language-nginx">server {
    listen 8080;
    server_name localhost;
    
    location /stub_status {
        stub_status;
        access_log off;
        allow 127.0.0.1;
        deny all;
    }
}
</code></pre><hr><h2 id="5-b%C3%A0i-t%E1%BA%ADp-th%E1%BB%B1c-h%C3%A0nh"><strong>5. 實作練習</strong></h2><h3 id="b%C3%A0i-t%E1%BA%ADp-1-custom-log-format"><strong>練習1：自訂記錄格式</strong></h3><ol><li>建立名為 <code>timing</code> 的自訂記錄格式，包含：<ul><li>遠端位址</li><li>請求</li><li>狀態</li><li>請求時間</li><li>上游回應時間</li></ul></li><li>將此格式套用到虛擬主機</li><li>產生流量並查看日誌</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-2-json-logging"><strong>練習2：JSON 記錄</strong></h3><ol><li>建立 JSON 記錄格式</li><li>設定 Nginx 以 JSON 格式記錄</li><li>用 <code>jq</code> 解析 JSON 日誌：</li></ol><pre><code class="language-bash">cat /var/log/nginx/access.json | jq '.status'
cat /var/log/nginx/access.json | jq 'select(.status &gt;= 400)'
</code></pre><h3 id="b%C3%A0i-t%E1%BA%ADp-3-log-rotation"><strong>練習3：日誌輪替</strong></h3><ol><li>建立達到 10MB 時輪替的自訂 logrotate 設定</li><li>用 <code>logrotate -d</code> 測試</li><li>強制輪替並驗證</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-4-traffic-analysis"><strong>練習4：流量分析</strong></h3><ol><li>用 <code>ab</code> 產生 1000 個請求：</li></ol><pre><code class="language-bash">ab -n 1000 -c 10 http://localhost/
</code></pre><ol start="2"><li>分析日誌找出：<ul><li>總請求數</li><li>平均回應時間</li><li>狀態碼分佈</li><li>最多存取的 URL</li></ul></li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-5-real-time-monitoring"><strong>練習5：即時監控</strong></h3><ol><li>設定儀表板腳本</li><li>修改腳本新增：<ul><li>錯誤率（%）</li><li>頻寬使用量</li><li>最慢的請求</li></ul></li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-6-conditional-logging"><strong>練習6：條件式記錄</strong></h3><ol><li>設定不記錄以下內容：<ul><li>靜態檔案（.css、.js、.jpg、.png）</li><li>健康檢查端點（/health）</li><li>機器人流量</li></ul></li><li>驗證這些請求不出現在日誌中</li></ol><hr><h2 id="6-troubleshooting-v%E1%BB%9Bi-logs"><strong>6. 使用日誌進行疑難排解</strong></h2><h3 id="61-debug-404-errors"><strong>6.1. 除錯 404 錯誤</strong></h3><pre><code class="language-bash"># 找出所有 404
grep " 404 " /var/log/nginx/access.log

# 造成 404 的前幾個 URL
grep " 404 " /var/log/nginx/access.log | awk '{print $7}' | sort | uniq -c | sort -rn | head -10

# 來自特定 IP 的 404
grep "192.168.1.100" /var/log/nginx/access.log | grep " 404 "
</code></pre><h3 id="62-debug-500-errors"><strong>6.2. 除錯 500 錯誤</strong></h3><pre><code class="language-bash"># 找出 5xx 錯誤
grep " 50[0-9] " /var/log/nginx/access.log

# 查看 error log 取得詳細資訊
sudo tail -100 /var/log/nginx/error.log | grep "error"

# 各時段的 5xx 錯誤
grep " 50[0-9] " /var/log/nginx/access.log | awk '{print $4}' | cut -d: -f1-2 | uniq -c
</code></pre><h3 id="63-debug-slow-requests"><strong>6.3. 除錯慢速請求</strong></h3><pre><code class="language-bash"># 找出超過 1 秒的請求（假設 request_time 已記錄）
awk '$NF &gt; 1.0' /var/log/nginx/access.log

# 最慢的前 10 個請求
awk '{print $NF, $7}' /var/log/nginx/access.log | sort -rn | head -10
</code></pre><h3 id="64-debug-high-traffic"><strong>6.4. 除錯高流量</strong></h3><pre><code class="language-bash"># 每分鐘請求數
awk '{print $4}' /var/log/nginx/access.log | cut -d: -f1-3 | uniq -c

# 找出流量尖峰
awk '{print $4}' /var/log/nginx/access.log | cut -d: -f1-3 | uniq -c | awk '$1 &gt; 1000'
</code></pre><h3 id="65-debug-security-issues"><strong>6.5. 除錯安全性問題</strong></h3><pre><code class="language-bash"># 找出 SQL 注入嘗試
grep -i "select.*from\|union.*select" /var/log/nginx/access.log

# 找出路徑遍歷嘗試
grep "\.\." /var/log/nginx/access.log

# 可疑的 User Agent
grep -i "sqlmap\|nikto\|nmap" /var/log/nginx/access.log
</code></pre><hr><h2 id="7-best-practices"><strong>7. 最佳實踐</strong></h2><h3 id="71-log-management"><strong>7.1. 日誌管理</strong></h3><ol><li><strong>各虛擬主機分開記錄：</strong></li></ol><pre><code class="language-nginx">server {
    server_name site1.com;
    access_log /var/log/nginx/site1.access.log;
    error_log /var/log/nginx/site1.error.log;
}
</code></pre><ol start="2"><li><strong>使用適當的日誌層級：</strong></li></ol><pre><code class="language-nginx"># 正式環境：error 或 warn
error_log /var/log/nginx/error.log warn;

# 開發環境：info 或 debug
error_log /var/log/nginx/error.log debug;
</code></pre><ol start="3"><li><strong>不要過度記錄：</strong></li></ol><pre><code class="language-nginx"># 靜態檔案停用
location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
    access_log off;
}

# 健康檢查停用
location /health {
    access_log off;
    return 200;
}
</code></pre><h3 id="72-performance"><strong>7.2. 效能</strong></h3><ol><li><strong>緩衝日誌：</strong></li></ol><pre><code class="language-nginx">access_log /var/log/nginx/access.log combined buffer=32k;
</code></pre><ol start="2"><li><strong>非同步記錄（Nginx 1.7.11+）：</strong></li></ol><pre><code class="language-nginx">access_log /var/log/nginx/access.log combined buffer=32k flush=5s;
</code></pre><h3 id="73-security"><strong>7.3. 安全性</strong></h3><ol><li><strong>保護日誌檔案：</strong></li></ol><pre><code class="language-bash">sudo chmod 640 /var/log/nginx/*.log
sudo chown www-data:adm /var/log/nginx/*.log
</code></pre><ol start="2"><li><strong>定期輪替：</strong></li></ol><pre><code class="language-bash"># 高流量網站每天輪替
# 低流量網站每週輪替
</code></pre><ol start="3"><li><strong>監控並設定警示：</strong></li></ol><pre><code class="language-bash"># 設定錯誤率監控
# 異常尖峰時傳送警示
</code></pre><hr><h2 id="t%E1%BB%95ng-k%E1%BA%BFt"><strong>總結</strong></h2><p>在本課中，您學到了：</p><ul><li>✅ Access log 與 error log</li><li>✅ 自訂記錄格式與變數</li><li>✅ 使用 logrotate 進行日誌輪替</li><li>✅ 日誌分析與指標</li><li>✅ 使用日誌進行疑難排解</li><li>✅ 記錄的最佳實踐</li></ul><p><strong>下一課：</strong>我們將探討反向代理——如何將 Nginx 用作後端應用程式的反向代理。</p>
