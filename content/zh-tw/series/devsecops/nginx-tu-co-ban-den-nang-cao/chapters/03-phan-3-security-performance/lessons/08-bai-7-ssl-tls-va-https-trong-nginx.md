---
id: 019c9617-fc87-70fa-ad88-7f121c141ef0
title: '第7課：Nginx 中的 SSL/TLS 與 HTTPS'
slug: bai-7-ssl-tls-va-https-trong-nginx
description: >-
  Nginx 中的 SSL/TLS 與 HTTPS——使用 Let's Encrypt 設定 SSL 憑證、
  HTTP 轉 HTTPS 重新導向、SSL 協定與加密套件最佳化、
  HSTS、OCSP Stapling、HTTP/2。
  保護連線、效能最佳化、取得 SSL Labs A+ 評分的完整指南。
duration_minutes: 215
is_free: true
video_url: null
sort_order: 7
section_title: "第3部分：安全性與效能"
course:
  id: 019c9617-fc27-73c5-b664-a1902ec9ac00
  title: Nginx 從基礎到進階
  slug: nginx-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7761" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="340" rx="12" fill="url(#bg-7761)"/>
  <g>
    <circle cx="1075" cy="275" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="1050" cy="270" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="1025" cy="265" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="1000" cy="260" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="975" cy="255" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="225" x2="1100" y2="305" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="255" x2="1050" y2="325" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1009.6410161513776,155 1009.6410161513776,195 975,215 940.3589838486224,195 940.3589838486224,155 975,135" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — 第7課</text>
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第7課：Nginx 中的 SSL/TLS 與 HTTPS</tspan>
  </text>
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Nginx 從基礎到進階</text>
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第3部分：安全性與效能</text>
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-ssl-certificate-lets-encrypt"><strong>1. 設定 SSL 憑證（Let's Encrypt）</strong></h2><h3 id="11-intro-ssltls"><strong>1.1. SSL/TLS 概述</strong></h3><p><strong>SSL（Secure Sockets Layer）/ TLS（Transport Layer Security）</strong>是加密用戶端與伺服器之間通訊的協定。</p><p><strong>為什麼需要 HTTPS：</strong></p><ul><li>資料安全性（加密）</li><li>伺服器驗證</li><li>資料完整性</li><li>SEO 優勢（Google 排名）</li><li>瀏覽器信任（無警告）</li><li>HTTP/2 的必要條件</li><li>PWA（漸進式網頁應用程式）的必要條件</li></ul><p><strong>憑證授權機構（CA）：</strong></p><ul><li>Let's Encrypt — 免費、自動化</li><li>DigiCert、Comodo、GlobalSign — 商業服務</li><li>自我簽署 — 僅用於開發環境</li></ul><h3 id="12-install-certbot"><strong>1.2. 安裝 Certbot（Let's Encrypt 用戶端）</strong></h3><p><strong>Ubuntu/Debian：</strong></p><pre><code class="language-bash"># 更新套件清單
sudo apt update

# 安裝 Certbot
sudo apt install certbot python3-certbot-nginx -y

# 確認安裝
certbot --version
</code></pre><p><strong>CentOS/RHEL：</strong></p><pre><code class="language-bash"># 安裝 EPEL 儲存庫
sudo yum install epel-release -y

# 安裝 Certbot
sudo yum install certbot python3-certbot-nginx -y

# CentOS 8+
sudo dnf install certbot python3-certbot-nginx -y
</code></pre><h3 id="13-obtain-ssl-auto"><strong>1.3. 取得 SSL 憑證 — 自動方式</strong></h3><p><strong>方法一：Certbot 自動設定</strong></p><pre><code class="language-bash"># Certbot 自動設定 Nginx
sudo certbot --nginx -d example.com -d www.example.com

# 依提示操作：
# - 輸入電子郵件地址
# - 同意服務條款
# - 選擇：將 HTTP 重新導向至 HTTPS（建議）
</code></pre><p><strong>Certbot 的處理流程：</strong></p><ol><li>驗證網域所有權</li><li>取得憑證</li><li>自動設定 Nginx</li><li>設定自動更新</li></ol><p><strong>確認憑證：</strong></p><pre><code class="language-bash"># 列出憑證
sudo certbot certificates

# 輸出範例：
# Certificate Name: example.com
#   Domains: example.com www.example.com
#   Expiry Date: 2024-03-01 10:30:00+00:00 (VALID: 89 days)
#   Certificate Path: /etc/letsencrypt/live/example.com/fullchain.pem
#   Private Key Path: /etc/letsencrypt/live/example.com/privkey.pem
</code></pre><h3 id="14-manual-method"><strong>1.4. 取得 SSL 憑證 — 手動方式</strong></h3><p><strong>方法二：Certbot certonly（手動設定）</strong></p><pre><code class="language-bash"># 取得憑證但不自動設定
sudo certbot certonly --nginx -d example.com -d www.example.com

# 或使用 webroot
sudo certbot certonly --webroot -w /var/www/html -d example.com -d www.example.com

# 或使用 standalone（暫時停止 Nginx）
sudo systemctl stop nginx
sudo certbot certonly --standalone -d example.com -d www.example.com
sudo systemctl start nginx
</code></pre><p><strong>手動 Nginx 設定：</strong></p><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com www.example.com;
    
    # ACME challenge 位置
    location /.well-known/acme-challenge/ {
        root /var/www/html;
    }
    
    # 重新導向至 HTTPS
    location / {
        return 301 https://$server_name$request_uri;
    }
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name example.com www.example.com;
    
    # SSL 憑證檔案
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    
    # SSL 設定
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers off;
    
    root /var/www/html;
    index index.html;
    
    location / {
        try_files $uri $uri/ =404;
    }
}
</code></pre><h3 id="15-certificate-renewal"><strong>1.5. 憑證更新</strong></h3><p>Let's Encrypt 憑證 90 天後到期。Certbot 會設定自動更新。</p><p><strong>測試更新：</strong></p><pre><code class="language-bash"># 乾跑（不實際更新）
sudo certbot renew --dry-run
</code></pre><p><strong>手動更新：</strong></p><pre><code class="language-bash"># 更新所有憑證
sudo certbot renew

# 更新特定憑證
sudo certbot renew --cert-name example.com

# 更新後重新載入 Nginx
sudo certbot renew --deploy-hook "systemctl reload nginx"
</code></pre><p><strong>自動更新（systemd 計時器）：</strong></p><pre><code class="language-bash"># 確認計時器已啟用
sudo systemctl status certbot.timer

# 啟用計時器
sudo systemctl enable certbot.timer
sudo systemctl start certbot.timer
</code></pre><h3 id="16-wildcard"><strong>1.6. 萬用字元憑證</strong></h3><pre><code class="language-bash">sudo certbot certonly --manual --preferred-challenges dns \
  -d example.com -d *.example.com

# 依指示新增 DNS TXT 記錄
# _acme-challenge.example.com TXT "generated-token"

# 確認 DNS 傳播
dig _acme-challenge.example.com TXT
</code></pre><h3 id="17-multiple-domains"><strong>1.7. 多個網域</strong></h3><pre><code class="language-bash"># 一張憑證包含多個網域
sudo certbot --nginx \
  -d example.com -d www.example.com \
  -d blog.example.com -d shop.example.com
</code></pre><hr><h2 id="2-http-to-https-redirect"><strong>2. HTTP 轉 HTTPS 重新導向</strong></h2><h3 id="21-simple-redirect"><strong>2.1. 簡單重新導向</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    listen [::]:80;
    server_name example.com www.example.com;
    
    # 將所有 HTTP 重新導向至 HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name example.com www.example.com;
    
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    
    root /var/www/html;
    index index.html;
}
</code></pre><h3 id="22-redirect-with-acme"><strong>2.2. 含 ACME Challenge 的重新導向</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    listen [::]:80;
    server_name example.com www.example.com;
    
    # 允許 ACME challenge
    location /.well-known/acme-challenge/ {
        root /var/www/html;
        allow all;
    }
    
    # 其餘全部重新導向至 HTTPS
    location / {
        return 301 https://$server_name$request_uri;
    }
}
</code></pre><h3 id="23-www-to-non-www"><strong>2.3. www 轉非 www 重新導向（HTTPS）</strong></h3><pre><code class="language-nginx"># 將 www 重新導向至非 www
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name www.example.com;
    
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    
    return 301 https://example.com$request_uri;
}

# 主要網站
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name example.com;
    
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    
    # 網站設定...
}
</code></pre><h3 id="24-complete-redirect"><strong>2.4. 完整重新導向設定</strong></h3><pre><code class="language-nginx"># HTTP — 重新導向至 HTTPS
server {
    listen 80;
    listen [::]:80;
    server_name example.com www.example.com;
    
    location /.well-known/acme-challenge/ {
        root /var/www/html;
    }
    
    location / {
        return 301 https://example.com$request_uri;
    }
}

# HTTPS www — 重新導向至非 www
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name www.example.com;
    
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    
    return 301 https://example.com$request_uri;
}

# 主要 HTTPS 伺服器
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name example.com;
    
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers off;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384;
    
    root /var/www/html;
    index index.html;
    
    location / {
        try_files $uri $uri/ =404;
    }
}
</code></pre><hr><h2 id="3-ssl-protocols-ciphers"><strong>3. SSL 協定與加密套件</strong></h2><h3 id="31-ssl-protocols"><strong>3.1. SSL/TLS 協定</strong></h3><p><strong>可用協定：</strong></p><ul><li>SSLv2 — 已棄用，不安全 ❌</li><li>SSLv3 — 已棄用，不安全 ❌</li><li>TLSv1.0 — 已棄用，應避免 ⚠️</li><li>TLSv1.1 — 已棄用，應避免 ⚠️</li><li>TLSv1.2 — 安全，廣泛支援 ✅</li><li>TLSv1.3 — 最安全，現代標準 ✅</li></ul><p><strong>建議設定：</strong></p><pre><code class="language-nginx">server {
    listen 443 ssl http2;
    server_name example.com;
    
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    
    # 僅使用 TLS 1.2 與 1.3
    ssl_protocols TLSv1.2 TLSv1.3;
    
    # 優先使用伺服器加密套件（TLS 1.2）
    ssl_prefer_server_ciphers off;  # TLS 1.3 自動處理
}
</code></pre><h3 id="32-ssl-ciphers"><strong>3.2. SSL 加密套件</strong></h3><p>加密套件決定使用的加密演算法。</p><p><strong>Mozilla 中間設定（平衡）：</strong></p><pre><code class="language-nginx">server {
    listen 443 ssl http2;
    server_name example.com;
    
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    
    # 協定
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers off;
    
    # TLS 1.2 加密套件
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;
}
</code></pre><p><strong>完整 SSL 設定：</strong></p><pre><code class="language-nginx">server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name example.com;
    
    # 憑證檔案
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    
    # 協定
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers off;
    
    # 加密套件
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;
    
    # 工作階段快取
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    ssl_session_tickets off;
    
    # DH 參數
    ssl_dhparam /etc/nginx/dhparam.pem;
    
    # OCSP Stapling
    ssl_stapling on;
    ssl_stapling_verify on;
    ssl_trusted_certificate /etc/letsencrypt/live/example.com/chain.pem;
    resolver 8.8.8.8 8.8.4.4 valid=300s;
    resolver_timeout 5s;
}
</code></pre><h3 id="33-dh-parameters"><strong>3.3. 產生 DH 參數</strong></h3><p>Diffie-Hellman 參數可強化安全性。</p><pre><code class="language-bash"># 產生 2048 位元 DH 參數（需要數分鐘）
sudo openssl dhparam -out /etc/nginx/dhparam.pem 2048

# 或 4096 位元（耗時較長，更安全）
sudo openssl dhparam -out /etc/nginx/dhparam.pem 4096

# 設定權限
sudo chmod 644 /etc/nginx/dhparam.pem
</code></pre><h3 id="34-ssl-session"><strong>3.4. SSL 工作階段設定</strong></h3><pre><code class="language-nginx">http {
    # SSL 工作階段快取（跨工作程序共享）
    ssl_session_cache shared:SSL:10m;  # 10MB = 約 40,000 個工作階段
    
    # 工作階段逾時
    ssl_session_timeout 10m;           # 10 分鐘
    
    # 停用工作階段票證（完美前向保密）
    ssl_session_tickets off;
}
</code></pre><hr><h2 id="4-hsts"><strong>4. HSTS（HTTP 嚴格傳輸安全）</strong></h2><p>HSTS 指示瀏覽器一律使用 HTTPS。</p><h3 id="41-basic-hsts"><strong>4.1. 基本 HSTS</strong></h3><pre><code class="language-nginx">server {
    listen 443 ssl http2;
    server_name example.com;
    
    # HSTS 標頭
    add_header Strict-Transport-Security "max-age=31536000" always;
}
</code></pre><p><strong>max-age 值：</strong></p><pre><code class="language-nginx"># 測試 — 1 小時
add_header Strict-Transport-Security "max-age=3600" always;

# 短期 — 1 週
add_header Strict-Transport-Security "max-age=604800" always;

# 建議 — 1 年
add_header Strict-Transport-Security "max-age=31536000" always;

# 最長 — 2 年
add_header Strict-Transport-Security "max-age=63072000" always;
</code></pre><h3 id="42-hsts-includesubdomains"><strong>4.2. 含 includeSubDomains 的 HSTS</strong></h3><pre><code class="language-nginx">server {
    listen 443 ssl http2;
    server_name example.com;
    
    # 將 HSTS 套用至所有子網域
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
}
</code></pre><p><strong>警告：</strong> <code>includeSubDomains</code> 會影響所有子網域。請確認所有子網域都支援 HTTPS。</p><h3 id="43-hsts-preload"><strong>4.3. HSTS Preload</strong></h3><pre><code class="language-nginx">server {
    listen 443 ssl http2;
    server_name example.com;
    
    # 含 preload 指令的 HSTS
    add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;
}
</code></pre><p><strong>提交至 HSTS Preload 清單：</strong></p><ol><li>前往 https://hstspreload.org/</li><li>輸入您的網域</li><li>確認要求：<ul><li>提供有效憑證</li><li>將 HTTP 重新導向至 HTTPS</li><li>在根網域提供 HSTS 標頭</li><li>max-age ≥ 31536000（1 年）</li><li>includeSubDomains 指令</li><li>preload 指令</li></ul></li></ol><h3 id="44-complete-hsts"><strong>4.4. 完整 HSTS 設定</strong></h3><pre><code class="language-nginx"># HTTP — 重新導向至 HTTPS
server {
    listen 80;
    listen [::]:80;
    server_name example.com www.example.com;
    
    location /.well-known/acme-challenge/ {
        root /var/www/html;
    }
    
    location / {
        return 301 https://example.com$request_uri;
    }
}

# HTTPS 伺服器
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name example.com www.example.com;
    
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    
    # HSTS 標頭
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    
    # 安全標頭
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    
    root /var/www/html;
    index index.html;
}
</code></pre><hr><h2 id="5-ocsp-stapling"><strong>5. OCSP Stapling</strong></h2><p>OCSP Stapling 可提升 SSL/TLS 握手效能與隱私保護。</p><h3 id="51-what-is-ocsp"><strong>5.1. 什麼是 OCSP Stapling？</strong></h3><p><strong>無 OCSP Stapling：</strong></p><pre><code>用戶端 → 伺服器：SSL 握手
用戶端 → CA：憑證是否有效？
CA → 用戶端：是的，有效
用戶端 → 伺服器：繼續
</code></pre><p><strong>有 OCSP Stapling：</strong></p><pre><code>伺服器 → CA：我的憑證是否有效？（已快取）
用戶端 → 伺服器：SSL 握手
伺服器 → 用戶端：憑證 + OCSP 回應
用戶端：憑證有效！（無需額外請求 CA）
</code></pre><h3 id="52-enable-ocsp"><strong>5.2. 啟用 OCSP Stapling</strong></h3><pre><code class="language-nginx">server {
    listen 443 ssl http2;
    server_name example.com;
    
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    
    # 啟用 OCSP Stapling
    ssl_stapling on;
    ssl_stapling_verify on;
    
    # 用於驗證的信任憑證
    ssl_trusted_certificate /etc/letsencrypt/live/example.com/chain.pem;
    
    # OCSP 的 DNS 解析器
    resolver 8.8.8.8 8.8.4.4 valid=300s;
    resolver_timeout 5s;
}
</code></pre><h3 id="53-verify-ocsp"><strong>5.3. 確認 OCSP Stapling</strong></h3><pre><code class="language-bash"># 測試 OCSP Stapling
echo QUIT | openssl s_client -connect example.com:443 -status 2> /dev/null | grep -A 17 'OCSP response:'

# 預期輸出：
# OCSP response:
# ======================================
# OCSP Response Status: successful (0x0)
# Response Type: Basic OCSP Response
# ...
# Cert Status: good
</code></pre><h3 id="54-complete-ocsp"><strong>5.4. 完整 OCSP 設定</strong></h3><pre><code class="language-nginx">http {
    resolver 8.8.8.8 8.8.4.4 1.1.1.1 valid=300s;
    resolver_timeout 5s;
    
    server {
        listen 443 ssl http2;
        listen [::]:443 ssl http2;
        server_name example.com;
        
        ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
        ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
        ssl_trusted_certificate /etc/letsencrypt/live/example.com/chain.pem;
        
        ssl_protocols TLSv1.2 TLSv1.3;
        ssl_prefer_server_ciphers off;
        ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384;
        
        ssl_session_cache shared:SSL:10m;
        ssl_session_timeout 10m;
        ssl_session_tickets off;
        
        ssl_stapling on;
        ssl_stapling_verify on;
        
        add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
        add_header X-Frame-Options "SAMEORIGIN" always;
        add_header X-Content-Type-Options "nosniff" always;
        add_header X-XSS-Protection "1; mode=block" always;
        
        root /var/www/html;
        index index.html;
    }
}
</code></pre><hr><h2 id="6-http2"><strong>6. HTTP/2 設定</strong></h2><p>HTTP/2 透過多工處理、伺服器推送和標頭壓縮大幅提升效能。</p><h3 id="61-enable-http2"><strong>6.1. 啟用 HTTP/2</strong></h3><pre><code class="language-nginx">server {
    # 使用 http2 參數啟用 HTTP/2
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name example.com;
    
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    
    # HTTP/2 需要 TLS 1.2 以上
    ssl_protocols TLSv1.2 TLSv1.3;
    
    root /var/www/html;
}
</code></pre><p><strong>確認 HTTP/2 是否已啟用：</strong></p><pre><code class="language-bash"># 使用 curl 測試
curl -I --http2 https://example.com

# 確認出現：
# HTTP/2 200

# 或在瀏覽器開發者工具中確認
# 網路分頁 → 通訊協定欄位應顯示「h2」
</code></pre><h3 id="62-http2-push"><strong>6.2. HTTP/2 推送</strong></h3><p>伺服器推送允許伺服器在用戶端請求前主動發送資源。</p><pre><code class="language-nginx">server {
    listen 443 ssl http2;
    server_name example.com;
    
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    
    root /var/www/html;
    
    location / {
        # 請求 HTML 時推送 CSS 和 JS
        http2_push /css/style.css;
        http2_push /js/app.js;
        
        try_files $uri $uri/ =404;
    }
}
</code></pre><p><strong>警告：</strong> HTTP/2 推送若使用不當會降低效能。請僅推送關鍵資源。</p><h3 id="63-http2-params"><strong>6.3. HTTP/2 參數</strong></h3><pre><code class="language-nginx">http {
    # HTTP/2 設定
    http2_max_field_size 16k;        # 標頭欄位最大大小
    http2_max_header_size 32k;       # 標頭最大大小
    http2_max_requests 1000;          # 每個連線最大請求數
    http2_recv_timeout 30s;           # 用戶端逾時
}
</code></pre><hr><h2 id="7-complete-production-config"><strong>7. 正式環境完整 SSL 設定</strong></h2><h3 id="71-optimal-setup"><strong>7.1. 最佳 SSL/TLS 設定</strong></h3><pre><code class="language-nginx"># /etc/nginx/nginx.conf

user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log warn;
pid /var/run/nginx.pid;

events {
    worker_connections 1024;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;
    
    log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                    '$status $body_bytes_sent "$http_referer" '
                    '"$http_user_agent" "$http_x_forwarded_for"';
    
    access_log /var/log/nginx/access.log main;
    
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 65;
    types_hash_max_size 2048;
    client_max_body_size 20M;
    
    # 隱藏 Nginx 版本
    server_tokens off;
    
    # SSL 工作階段快取
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    ssl_session_tickets off;
    
    # OCSP 設定
    resolver 8.8.8.8 8.8.4.4 1.1.1.1 valid=300s;
    resolver_timeout 5s;
    
    # Gzip 壓縮
    gzip on;
    gzip_vary on;
    gzip_comp_level 6;
    gzip_types text/plain text/css text/xml text/javascript 
               application/json application/javascript application/xml+rss;
    
    # HTTP/2 設定
    http2_max_field_size 16k;
    http2_max_header_size 32k;
    
    include /etc/nginx/conf.d/*.conf;
    include /etc/nginx/sites-enabled/*;
}
</code></pre><h3 id="72-site-config"><strong>7.2. 網站設定</strong></h3><pre><code class="language-nginx"># /etc/nginx/sites-available/example.com

# HTTP — 重新導向至 HTTPS
server {
    listen 80;
    listen [::]:80;
    server_name example.com www.example.com;
    
    location /.well-known/acme-challenge/ {
        root /var/www/html;
        allow all;
    }
    
    location / {
        return 301 https://example.com$request_uri;
    }
}

# HTTPS www — 重新導向至非 www
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name www.example.com;
    
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    ssl_trusted_certificate /etc/letsencrypt/live/example.com/chain.pem;
    
    return 301 https://example.com$request_uri;
}

# 主要 HTTPS 伺服器
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name example.com;
    
    root /var/www/example.com/public;
    index index.html index.htm;
    
    access_log /var/log/nginx/example.com.access.log;
    error_log /var/log/nginx/example.com.error.log;
    
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    ssl_trusted_certificate /etc/letsencrypt/live/example.com/chain.pem;
    
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers off;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;
    
    ssl_dhparam /etc/nginx/dhparam.pem;
    
    ssl_stapling on;
    ssl_stapling_verify on;
    
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:;" always;
    
    location / {
        try_files $uri $uri/ =404;
        
        http2_push /css/style.css;
        http2_push /js/app.js;
    }
    
    location ~* \.(jpg|jpeg|png|gif|ico|svg|webp)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }
    
    location ~* \.(css|js)$ {
        expires 1M;
        add_header Cache-Control "public";
        access_log off;
    }
    
    location ~ /\. {
        deny all;
        access_log off;
        log_not_found off;
    }
    
    error_page 404 /404.html;
    error_page 500 502 503 504 /50x.html;
}
</code></pre><hr><h2 id="8-testing-optimization"><strong>8. 測試與最佳化</strong></h2><h3 id="81-ssl-labs"><strong>8.1. SSL Labs 測試</strong></h3><pre><code class="language-bash"># 前往 SSL Labs
# https://www.ssllabs.com/ssltest/analyze.html?d=example.com

# 目標：A+ 評分
</code></pre><p><strong>A+ 評分清單：</strong></p><ul><li>✅ TLS 1.2 與 1.3 已啟用</li><li>✅ 強力加密套件</li><li>✅ 憑證有效且受信任</li><li>✅ HSTS 已啟用（含 preload）</li><li>✅ OCSP Stapling 正常運作</li><li>✅ 無 SSL/TLS 漏洞</li></ul><h3 id="82-test-commands"><strong>8.2. 測試指令</strong></h3><pre><code class="language-bash"># 測試 SSL 連線
openssl s_client -connect example.com:443 -tls1_2

# 測試 TLS 1.3
openssl s_client -connect example.com:443 -tls1_3

# 檢查憑證
echo | openssl s_client -connect example.com:443 2>/dev/null | openssl x509 -noout -dates

# 測試 OCSP Stapling
echo QUIT | openssl s_client -connect example.com:443 -status 2> /dev/null | grep -A 17 'OCSP response:'

# 測試 HTTP/2
curl -I --http2 https://example.com
</code></pre><h3 id="83-performance-testing"><strong>8.3. 效能測試</strong></h3><pre><code class="language-bash"># 測試 SSL 握手時間
time openssl s_client -connect example.com:443 </dev/null

# 使用 ab 進行基準測試
ab -n 1000 -c 10 https://example.com/

# 使用 h2load（HTTP/2）測試
h2load -n 1000 -c 10 https://example.com/
</code></pre><h3 id="84-security-headers"><strong>8.4. 安全標頭確認</strong></h3><pre><code class="language-bash"># 確認所有安全標頭
curl -I https://example.com

# 應包含：
# Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
# X-Frame-Options: SAMEORIGIN
# X-Content-Type-Options: nosniff
# X-XSS-Protection: 1; mode=block
# Referrer-Policy: no-referrer-when-downgrade
</code></pre><hr><h2 id="9-troubleshooting"><strong>9. 疑難排解</strong></h2><h3 id="91-cert-errors"><strong>9.1. 憑證錯誤</strong></h3><p><strong>問題：憑證不受信任</strong></p><pre><code class="language-bash"># 檢查憑證鏈
openssl s_client -connect example.com:443 -showcerts

# 確認憑證檔案
sudo ls -la /etc/letsencrypt/live/example.com/

# 應包含：
# cert.pem（憑證）
# chain.pem（中繼憑證）
# fullchain.pem（憑證 + 鏈）
# privkey.pem（私鑰）
</code></pre><p><strong>修正：</strong></p><pre><code class="language-nginx"># 使用 fullchain.pem，而非 cert.pem
ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
</code></pre><h3 id="92-mixed-content"><strong>9.2. 混合內容警告</strong></h3><p><strong>問題：</strong> 網站載入但顯示「不安全」</p><p><strong>原因：</strong> 以 HTTPS 提供的頁面載入了 HTTP 資源</p><p><strong>修正：</strong></p><pre><code class="language-html">&lt;!-- 錯誤寫法 --&gt;
&lt;script src="http://example.com/js/app.js"&gt;&lt;/script&gt;

&lt;!-- 正確寫法 — HTTPS --&gt;
&lt;script src="https://example.com/js/app.js"&gt;&lt;/script&gt;
</code></pre><h3 id="93-ocsp-not-working"><strong>9.3. OCSP Stapling 無法運作</strong></h3><p><strong>修正：</strong></p><pre><code class="language-nginx">server {
    ssl_stapling on;
    ssl_stapling_verify on;
    ssl_trusted_certificate /etc/letsencrypt/live/example.com/chain.pem;
    
    resolver 8.8.8.8 8.8.4.4 valid=300s;
    resolver_timeout 5s;
}
</code></pre><h3 id="94-http2-not-working"><strong>9.4. HTTP/2 無法運作</strong></h3><p><strong>修正：</strong></p><pre><code class="language-nginx"># 確認 http2 參數存在
listen 443 ssl http2;  # 不能只寫 listen 443 ssl;

# 重新啟動 Nginx
sudo systemctl restart nginx
</code></pre><h3 id="95-renewal-fails"><strong>9.5. 憑證更新失敗</strong></h3><p><strong>修正一：連接埠 80 無法存取</strong></p><pre><code class="language-bash">sudo ufw allow 80
</code></pre><p><strong>修正二：手動更新</strong></p><pre><code class="language-bash"># 停止 Nginx
sudo systemctl stop nginx

# 使用 standalone
sudo certbot certonly --standalone -d example.com

# 啟動 Nginx
sudo systemctl start nginx
</code></pre><hr><h2 id="10-practice-exercises"><strong>10. 練習題</strong></h2><h3 id="exercise-1"><strong>練習1：使用 Let's Encrypt 設定 HTTPS</strong></h3><ol><li>安裝 Certbot</li><li>取得網域憑證</li><li>在 Nginx 設定 HTTPS</li><li>測試憑證</li></ol><h3 id="exercise-2"><strong>練習2：實作 HTTP 轉 HTTPS 重新導向</strong></h3><ol><li>設定 HTTP 伺服器（連接埠 80）</li><li>設定 HTTPS 伺服器（連接埠 443）</li><li>設定 HTTP → HTTPS 重新導向</li><li>測試重新導向</li></ol><h3 id="exercise-3"><strong>練習3：啟用 HSTS</strong></h3><ol><li>新增 HSTS 標頭</li><li>在瀏覽器中測試</li><li>確認 HSTS preload 要求</li><li>（選擇性）提交至 HSTS preload 清單</li></ol><h3 id="exercise-4"><strong>練習4：設定 OCSP Stapling</strong></h3><ol><li>啟用 OCSP Stapling</li><li>設定解析器</li><li>測試 OCSP 回應</li><li>使用 SSL Labs 驗證</li></ol><h3 id="exercise-5"><strong>練習5：啟用 HTTP/2</strong></h3><ol><li>在 listen 指令中新增 http2 參數</li><li>測試 HTTP/2 連線</li><li>實作 HTTP/2 推送</li><li>對比 HTTP/1.1 與 HTTP/2 的效能基準</li></ol><h3 id="exercise-6"><strong>練習6：取得 A+ 評分</strong></h3><ol><li>設定最佳 SSL/TLS 配置</li><li>啟用所有安全功能</li><li>使用 SSL Labs 測試</li><li>修正任何問題以取得 A+ 評分</li></ol><hr><h2 id="11-best-practices"><strong>11. 最佳實踐</strong></h2><h3 id="111-security"><strong>11.1. 安全性</strong></h3><pre><code class="language-nginx"># 使用強力協定
ssl_protocols TLSv1.2 TLSv1.3;

# 強力加密套件
ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384;

# 停用工作階段票證
ssl_session_tickets off;

# 啟用 OCSP Stapling
ssl_stapling on;
ssl_stapling_verify on;

# HSTS
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
</code></pre><h3 id="112-performance"><strong>11.2. 效能</strong></h3><pre><code class="language-nginx"># 工作階段快取
ssl_session_cache shared:SSL:10m;
ssl_session_timeout 10m;

# HTTP/2
listen 443 ssl http2;

# 壓縮
gzip on;
gzip_types text/plain text/css application/json application/javascript;

# 靜態資源快取
location ~* \.(jpg|png|css|js)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
</code></pre><h3 id="113-maintenance"><strong>11.3. 維護</strong></h3><pre><code class="language-bash"># 定期更新憑證
sudo certbot renew

# 檢查憑證到期日
sudo certbot certificates

# 監控日誌
sudo tail -f /var/log/letsencrypt/letsencrypt.log

# 備份憑證
sudo tar -czf letsencrypt-backup.tar.gz /etc/letsencrypt/
</code></pre><hr><h2 id="summary"><strong>總結</strong></h2><p>本課程學到的內容：</p><ul><li>✅ 使用 Let's Encrypt 設定 SSL 憑證</li><li>✅ HTTP 轉 HTTPS 重新導向</li><li>✅ SSL 協定與加密套件最佳化</li><li>✅ HSTS 設定與 preload</li><li>✅ OCSP Stapling 提升效能</li><li>✅ HTTP/2 設定與最佳化</li><li>✅ 安全標頭與最佳實踐</li><li>✅ 測試與疑難排解</li></ul><p><strong>下一課：</strong> 效能調校——透過工作程序、連線、緩衝區、逾時、壓縮與快取最佳化，將 Nginx 效能發揮到極致。</p>
