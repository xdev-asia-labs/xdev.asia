---
id: 019c9617-fc73-72b9-a544-1f2848905ead
title: '第1課：Nginx 介紹與安裝'
slug: bai-1-gioi-thieu-va-cai-dat-nginx
description: >-
  介紹 Nginx 的事件驅動架構，提供在 Ubuntu/CentOS/macOS/Windows 上的安裝指南，
  目錄結構，以及 start、stop、reload 等基本管理指令。
  您將了解 Nginx 與 Apache 的差異，並學會排除常見錯誤。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 1
section_title: "第1部：基礎"
course:
  id: 019c9617-fc27-73c5-b664-a1902ec9ac00
  title: Nginx 從入門到進階
  slug: nginx-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9501" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9501)"/>

  <!-- Decorations -->
  <g>
    <circle cx="862" cy="176" r="20" fill="#f87171" opacity="0.11"/>
    <circle cx="624" cy="138" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="886" cy="100" r="32" fill="#f87171" opacity="0.13"/>
    <circle cx="648" cy="62" r="8" fill="#f87171" opacity="0.09"/>
    <circle cx="910" cy="284" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="176" x2="1100" y2="256" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="206" x2="1050" y2="276" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1052.8467875173176,210.5 1052.8467875173176,241.5 1026,257 999.1532124826824,241.5 999.1532124826824,210.5 1026,195" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="140" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🔒 DevSecOps — 第1課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第1課：Nginx 介紹與安裝</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Nginx 從入門到進階</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第1部：基礎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-what-is-nginx"><strong>1. 什麼是 Nginx？</strong></h2><p>Nginx（發音為「engine-x」）是由 Igor Sysoev 於 2004 年開發的強大高效能開源 Web 伺服器。最初是為了解決 C10K 問題（同時處理 1 萬個連線）而建立，如今已成為全球最受歡迎的 Web 伺服器之一。</p><p>Nginx 不只是 Web 伺服器，還可以作為：</p><ul><li><strong>反向代理伺服器</strong></li><li><strong>負載均衡器</strong></li><li><strong>HTTP 快取</strong></li><li><strong>郵件代理伺服器</strong></li><li><strong>API 閘道</strong></li></ul><h3 id="event-driven-non-blocking-io"><strong>事件驅動與非阻塞 I/O 架構</strong></h3><p>Nginx 最大的優勢在於其架構。與傳統模型不同，Nginx 採用<strong>事件驅動</strong>和<strong>非阻塞 I/O</strong>（非同步）架構。</p><p><strong>運作方式：</strong></p><ol><li><strong>主處理程序（Master Process）</strong>：單一主處理程序負責讀取和評估設定，並管理工作處理程序</li><li><strong>工作處理程序（Worker Processes）</strong>：多個工作處理程序處理實際連線</li><li><strong>事件迴圈（Event Loop）</strong>：每個工作處理程序使用事件迴圈同時處理數千個連線</li></ol><p><strong>非阻塞 I/O</strong> 的意義：</p><ul><li>當工作處理程序正在等待 I/O（讀取檔案、資料庫查詢、網路請求）時，不會「阻塞」，可以繼續處理其他請求</li><li>單一工作處理程序可同時處理數千個連線</li><li>大幅節省 CPU 和 RAM 資源</li></ul><p><strong>示意圖：</strong></p><pre><code>Apache（阻塞式）：
請求 1 → 執行緒 1 → 等待讀取檔案（阻塞）→ 完成
請求 2 → 執行緒 2 → 等待讀取檔案（阻塞）→ 完成
請求 3 → 執行緒 3 → 等待讀取檔案（阻塞）→ 完成
→ 3 個請求需要 3 個執行緒

Nginx（非阻塞）：
請求 1 → 工作者 → 等待 I/O → 處理請求 2 → 處理請求 3 → 請求 1 完成
請求 2 → 同一個工作者
請求 3 → 同一個工作者
→ 3 個請求只需 1 個工作者</code></pre><hr/><h2 id="2-nginx-vs-apache"><strong>2. Nginx vs Apache 比較</strong></h2>
<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>比較項目</th>
<th>Nginx</th>
<th>Apache</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>架構</strong></td>
<td>事件驅動、非同步</td>
<td>行程/執行緒型</td>
</tr>
<tr>
<td><strong>連線處理</strong></td>
<td>單一工作者處理多個連線</td>
<td>每個連線一個執行緒/行程</td>
</tr>
<tr>
<td><strong>記憶體</strong></td>
<td>非常低，穩定</td>
<td>隨連線數增加</td>
</tr>
<tr>
<td><strong>靜態內容</strong></td>
<td>極快</td>
<td>快，但比 Nginx 慢</td>
</tr>
<tr>
<td><strong>動態內容</strong></td>
<td>需搭配後端（PHP-FPM）</td>
<td>可直接處理（mod_php）</td>
</tr>
<tr>
<td><strong>設定</strong></td>
<td>集中式，基於檔案</td>
<td>分散式（.htaccess）</td>
</tr>
<tr>
<td><strong>模組</strong></td>
<td>須預先編譯</td>
<td>動態載入</td>
</tr>
<tr>
<td><strong>重寫規則</strong></td>
<td>不同，較簡單</td>
<td>透過 .htaccess 強大</td>
</tr>
<tr>
<td><strong>適合場景</strong></td>
<td>高流量、靜態內容、反向代理</td>
<td>共享主機、動態內容處理</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->
<p><strong>適合使用 Nginx 的情況：</strong></p><ul><li>提供靜態檔案（HTML、CSS、JS、圖片）</li><li>為應用程式伺服器做反向代理</li><li>負載均衡</li><li>高並行（大量同時連線）</li><li>有限資源下需要高效能</li></ul><p><strong>適合使用 Apache 的情況：</strong></p><ul><li>共享主機環境</li><li>需要 .htaccess 的彈性</li><li>需要大量動態模組</li><li>依賴 Apache 特有功能的舊版應用</li></ul><p><strong>現在的趨勢：</strong> 許多系統採用組合方式：Nginx 作為前端反向代理，Apache 在後端處理動態內容。</p><hr/><h2 id="3-installing-nginx"><strong>3. 安裝 Nginx</strong></h2><h3 id="31-ubuntu-debian"><strong>3.1. 在 Ubuntu/Debian 上安裝</strong></h3><p><strong>方式一：從預設套件庫安裝（最簡單）</strong></p><pre><code class="language-bash"># 更新套件清單
sudo apt update

# 安裝 Nginx
sudo apt install nginx -y

# 確認版本
nginx -v

# 確認狀態
sudo systemctl status nginx
</code></pre><p><strong>方式二：從官方 Nginx 套件庫安裝（最新版本）</strong></p><pre><code class="language-bash"># 安裝前置套件
sudo apt install curl gnupg2 ca-certificates lsb-release ubuntu-keyring

# 匯入官方 nginx 簽章金鑰
curl https://nginx.org/keys/nginx_signing.key | gpg --dearmor \
    | sudo tee /usr/share/keyrings/nginx-archive-keyring.gpg &gt;/dev/null

# 設定套件庫
echo "deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] \
http://nginx.org/packages/ubuntu `lsb_release -cs` nginx" \
    | sudo tee /etc/apt/sources.list.d/nginx.list

# 更新並安裝
sudo apt update
sudo apt install nginx -y
</code></pre><h3 id="32-centos-rhel"><strong>3.2. 在 CentOS/RHEL 上安裝</strong></h3><p><strong>方式一：從 EPEL 套件庫</strong></p><pre><code class="language-bash"># CentOS 7
sudo yum install epel-release -y
sudo yum install nginx -y

# CentOS 8 / Rocky Linux / AlmaLinux
sudo dnf install nginx -y

# 啟動並啟用
sudo systemctl start nginx
sudo systemctl enable nginx

# 開放防火牆
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload
</code></pre><p><strong>方式二：從官方 Nginx 套件庫</strong></p><pre><code class="language-bash"># 建立 repo 檔案
sudo tee /etc/yum.repos.d/nginx.repo &lt;&lt;EOF
[nginx-stable]
name=nginx stable repo
baseurl=http://nginx.org/packages/centos/\$releasever/\$basearch/
gpgcheck=1
enabled=1
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true
EOF

# 安裝
sudo yum install nginx -y
</code></pre><h3 id="33-macos"><strong>3.3. 在 macOS 上安裝</strong></h3><p><strong>使用 Homebrew：</strong></p><pre><code class="language-bash"># 安裝 Homebrew（若尚未安裝）
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 安裝 Nginx
brew install nginx

# 啟動 Nginx
brew services start nginx

# 或在前景執行
nginx

# 確認
nginx -v
</code></pre><p><strong>macOS 上的路徑：</strong></p><ul><li>設定：<code>/usr/local/etc/nginx/nginx.conf</code></li><li>文件根目錄：<code>/usr/local/var/www</code></li><li>記錄檔：<code>/usr/local/var/log/nginx</code></li></ul><h3 id="34-windows"><strong>3.4. 在 Windows 上安裝</strong></h3><p><strong>步驟一：下載</strong></p><ul><li>前往：http://nginx.org/en/download.html</li><li>下載 Windows 版本（nginx-x.x.x.zip）</li></ul><p><strong>步驟二：解壓縮並執行</strong></p><pre><code class="language-cmd"># 解壓縮至 C:\nginx

# 以系統管理員身份開啟命令提示字元
cd C:\nginx

# 啟動 Nginx
start nginx

# 或
nginx.exe
</code></pre><p><strong>在 Windows 上管理 Nginx：</strong></p><pre><code class="language-cmd"># 確認版本
nginx -v

# 測試設定
nginx -t

# 停止
nginx -s stop

# 重新載入
nginx -s reload

# 優雅退出
nginx -s quit
</code></pre><p><strong>注意：</strong> 在 Windows 上 Nginx 的穩定性不如 Linux，不建議用於正式環境。</p><hr/><h2 id="4-directory-structure"><strong>4. 目錄結構與基本設定檔</strong></h2><h3 id="41-ubuntu-debian"><strong>4.1. Ubuntu/Debian 上的目錄結構</strong></h3><pre><code>/etc/nginx/
├── nginx.conf                 # 主要設定檔
├── mime.types                 # MIME 類型定義
├── fastcgi_params            # FastCGI 參數
├── proxy_params              # 代理參數
├── sites-available/          # 可用的網站設定
│   └── default              # 預設虛擬主機
├── sites-enabled/            # 指向啟用網站的符號連結
│   └── default -&gt; ../sites-available/default
├── conf.d/                   # 額外設定
├── modules-available/        # 可用模組
└── modules-enabled/          # 已啟用模組

/var/log/nginx/
├── access.log                # 存取記錄
└── error.log                 # 錯誤記錄

/var/www/html/                # 預設文件根目錄
└── index.nginx-debian.html

/usr/share/nginx/html/        # 替代文件根目錄
</code></pre><h3 id="42-centos-rhel"><strong>4.2. CentOS/RHEL 上的目錄結構</strong></h3><pre><code>/etc/nginx/
├── nginx.conf                # 主要設定檔
├── mime.types
├── fastcgi_params
├── conf.d/                   # 虛擬主機設定
│   └── default.conf
└── default.d/

/var/log/nginx/
├── access.log
└── error.log

/usr/share/nginx/html/        # 文件根目錄
└── index.html
</code></pre><h3 id="43-basic-nginx-conf"><strong>4.3. 基本 nginx.conf 設定檔</strong></h3><pre><code class="language-nginx"># 執行 Nginx 的使用者
user www-data;

# 工作處理程序數量（通常等於 CPU 核心數）
worker_processes auto;

# PID 檔案
pid /run/nginx.pid;

# 載入動態模組
include /etc/nginx/modules-enabled/*.conf;

events {
    # 每個工作者的最大連線數
    worker_connections 768;
    
    # 事件方式（Linux 使用 epoll）
    use epoll;
}

http {
    ##
    # 基本設定
    ##
    sendfile on;
    tcp_nopush on;
    types_hash_max_size 2048;
    
    # MIME 類型
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    ##
    # 記錄設定
    ##
    access_log /var/log/nginx/access.log;
    error_log /var/log/nginx/error.log;

    ##
    # Gzip 設定
    ##
    gzip on;
    gzip_disable "msie6";

    ##
    # 虛擬主機設定
    ##
    include /etc/nginx/conf.d/*.conf;
    include /etc/nginx/sites-enabled/*;
}
</code></pre><h3 id="44-sample-virtual-host"><strong>4.4. 範例虛擬主機檔案</strong></h3><pre><code class="language-nginx">server {
    # 監聽連接埠
    listen 80;
    listen [::]:80;

    # 域名
    server_name example.com www.example.com;

    # 文件根目錄
    root /var/www/example.com;
    index index.html index.htm;

    # 存取和錯誤記錄
    access_log /var/log/nginx/example.com.access.log;
    error_log /var/log/nginx/example.com.error.log;

    # Location 區塊
    location / {
        try_files $uri $uri/ =404;
    }

    # 拒絕存取 .htaccess
    location ~ /\.ht {
        deny all;
    }
}
</code></pre><hr/><h2 id="5-start-stop-reload"><strong>5. 啟動、停止、重新載入 Nginx</strong></h2><h3 id="51-systemctl"><strong>5.1. 使用 systemctl 管理（Linux）</strong></h3><pre><code class="language-bash"># 啟動 Nginx
sudo systemctl start nginx

# 停止 Nginx
sudo systemctl stop nginx

# 重新啟動 Nginx
sudo systemctl restart nginx

# 重新載入設定（零停機時間）
sudo systemctl reload nginx

# 確認狀態
sudo systemctl status nginx

# 啟用開機自動啟動
sudo systemctl enable nginx

# 停用自動啟動
sudo systemctl disable nginx
</code></pre><h3 id="52-nginx-command"><strong>5.2. 使用 nginx 指令管理</strong></h3><pre><code class="language-bash"># 測試設定（重新載入前務必執行）
sudo nginx -t

# 測試並顯示設定
sudo nginx -T

# 重新載入設定
sudo nginx -s reload

# 優雅停止（等待目前請求完成）
sudo nginx -s quit

# 立即停止
sudo nginx -s stop

# 重新開啟記錄檔（記錄輪替後）
sudo nginx -s reopen

# 查看版本和編譯選項
nginx -V
</code></pre><h3 id="53-reload-restart-stop"><strong>5.3. reload、restart 和 stop 的差異</strong></h3><p><strong>reload：</strong></p><ul><li>零停機時間</li><li>Nginx 重新讀取設定</li><li>舊工作處理程序完成目前的請求後才關閉</li><li>新工作處理程序以新設定建立</li><li><strong>使用時機：</strong> 修改設定、新增/修改虛擬主機</li></ul><pre><code class="language-bash">sudo nginx -s reload
# 或
sudo systemctl reload nginx
</code></pre><p><strong>restart：</strong></p><ul><li>有停機時間（短暫）</li><li>完全停止後再啟動</li><li>所有連線中斷</li><li><strong>使用時機：</strong> 安裝新模組、重大變更</li></ul><pre><code class="language-bash">sudo systemctl restart nginx
</code></pre><p><strong>stop vs quit：</strong></p><pre><code class="language-bash"># 立即停止（切斷連線）
sudo nginx -s stop

# 優雅退出（等待請求完成）
sudo nginx -s quit
</code></pre><h3 id="54-check-running"><strong>5.4. 確認 Nginx 正在執行</strong></h3><pre><code class="language-bash"># 確認處理程序
ps aux | grep nginx

# 確認監聽連接埠
sudo netstat -tulpn | grep nginx
# 或
sudo ss -tulpn | grep nginx

# 確認版本
nginx -v

# 測試存取
curl http://localhost
# 或
curl -I http://localhost
</code></pre><h3 id="55-basic-troubleshooting"><strong>5.5. 基本問題排除</strong></h3><p><strong>錯誤：nginx.conf 測試失敗</strong></p><pre><code class="language-bash"># 查看詳細錯誤
sudo nginx -t

# 查看錯誤記錄
sudo tail -f /var/log/nginx/error.log
</code></pre><p><strong>錯誤：連接埠 80 已被使用</strong></p><pre><code class="language-bash"># 查看哪個處理程序使用連接埠 80
sudo lsof -i :80
# 或
sudo netstat -tulpn | grep :80

# 若需要，終止處理程序
sudo kill -9 &lt;PID&gt;
</code></pre><p><strong>錯誤：Permission denied</strong></p><pre><code class="language-bash"># 確認 nginx.conf 中的使用者
grep user /etc/nginx/nginx.conf

# 確認目錄權限
ls -la /var/www/html

# 修正擁有者
sudo chown -R www-data:www-data /var/www/html
</code></pre><p><strong>無法透過瀏覽器存取：</strong></p><pre><code class="language-bash"># 確認防火牆（Ubuntu/Debian）
sudo ufw status
sudo ufw allow 'Nginx Full'

# 確認防火牆（CentOS）
sudo firewall-cmd --list-all
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --reload

# 確認 SELinux（CentOS）
sudo getenforce
sudo setenforce 0  # 暫時停用以進行測試
</code></pre><hr/><h2 id="6-practice"><strong>6. 實作練習</strong></h2><h3 id="exercise-1"><strong>練習 1：安裝與驗證</strong></h3><ol><li>在您的作業系統上安裝 Nginx</li><li>確認版本和狀態</li><li>前往 http://localhost 查看預設歡迎頁面</li><li>找到並查看 access.log 檔案</li></ol><h3 id="exercise-2"><strong>練習 2：熟悉指令</strong></h3><ol><li>測試設定：<code>nginx -t</code></li><li>重新載入 Nginx</li><li>停止並重新啟動 Nginx</li><li>確認執行中的處理程序</li></ol><h3 id="exercise-3"><strong>練習 3：探索目錄結構</strong></h3><ol><li>開啟 nginx.conf 並閱讀各項指令</li><li>在預設虛擬主機中找到文件根目錄</li><li>在文件根目錄中建立一個簡單的 HTML 檔案</li><li>透過瀏覽器存取該檔案</li></ol><h3 id="exercise-4"><strong>練習 4：修復刻意製造的錯誤</strong></h3><ol><li>在 nginx.conf 中加入一行錯誤語法</li><li>執行 <code>nginx -t</code> 查看錯誤</li><li>修正錯誤並重新測試</li></ol><hr/><h2 id="summary"><strong>總結</strong></h2><p>本課學習內容：</p><ul><li>✅ 什麼是 Nginx 及其事件驅動架構</li><li>✅ Nginx vs Apache 比較</li><li>✅ 在多個作業系統上安裝 Nginx</li><li>✅ 目錄結構與設定檔</li><li>✅ 基本 Nginx 管理指令</li></ul><p><strong>下一課：</strong> 我們將深入探討 Nginx 設定，了解 context、directive、虛擬主機以及靜態檔案的提供。</p>
