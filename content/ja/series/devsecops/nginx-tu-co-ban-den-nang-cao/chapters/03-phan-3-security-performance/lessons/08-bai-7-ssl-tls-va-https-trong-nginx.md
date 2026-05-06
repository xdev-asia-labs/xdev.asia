---
id: 019c9617-fc87-70fa-ad88-7f121c141ef0
title: '第7課：NginxにおけるSSL/TLSとHTTPS'
slug: bai-7-ssl-tls-va-https-trong-nginx
description: >-
  NginxにおけるSSL/TLSとHTTPSのレッスンーLet's EncryptによるSSL証明書の設定、
  HTTPからHTTPSへのリダイレクト、SSLプロトコルと暗号の最適化、
  HSTS、OCSPステープリング、HTTP/2。
  接続の保護、パフォーマンス最適化、SSL Labs A+評価の取得ガイド。
duration_minutes: 215
is_free: true
video_url: null
sort_order: 7
section_title: "第3部：セキュリティ & パフォーマンス"
course:
  id: 019c9617-fc27-73c5-b664-a1902ec9ac00
  title: Nginxの基礎から応用まで
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
      <tspan x="60" dy="0">第7課：NginxにおけるSSL/TLSとHTTPS</tspan>
  </text>
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Nginxの基礎から応用まで</text>
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第3部：セキュリティ &amp; パフォーマンス</text>
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-ssl-certificate-lets-encrypt"><strong>1. SSL証明書の設定（Let's Encrypt）</strong></h2><h3 id="11-intro-ssltls"><strong>1.1. SSL/TLSの概要</strong></h3><p><strong>SSL（Secure Sockets Layer）/ TLS（Transport Layer Security）</strong>は、クライアントとサーバー間の通信を暗号化するプロトコルです。</p><p><strong>HTTPSが必要な理由：</strong></p><ul><li>データセキュリティ（暗号化）</li><li>サーバー認証</li><li>データ整合性</li><li>SEOメリット（Googleランキング）</li><li>ブラウザの信頼（警告なし）</li><li>HTTP/2に必要</li><li>PWA（プログレッシブウェブアプリ）に必要</li></ul><p><strong>認証局（CA）：</strong></p><ul><li>Let's Encrypt - 無料、自動化</li><li>DigiCert、Comodo、GlobalSign - 商用</li><li>自己署名 - 開発環境のみ</li></ul><h3 id="12-install-certbot"><strong>1.2. Certbotのインストール（Let's Encryptクライアント）</strong></h3><p><strong>Ubuntu/Debian：</strong></p><pre><code class="language-bash"># パッケージリストを更新
sudo apt update

# Certbotをインストール
sudo apt install certbot python3-certbot-nginx -y

# インストールを確認
certbot --version
</code></pre><p><strong>CentOS/RHEL：</strong></p><pre><code class="language-bash"># EPELリポジトリをインストール
sudo yum install epel-release -y

# Certbotをインストール
sudo yum install certbot python3-certbot-nginx -y

# CentOS 8+の場合
sudo dnf install certbot python3-certbot-nginx -y
</code></pre><h3 id="13-obtain-ssl-certificate-auto"><strong>1.3. SSL証明書の取得 — 自動方式</strong></h3><p><strong>方法1：Certbot自動設定</strong></p><pre><code class="language-bash"># CertbotがNginxを自動設定
sudo certbot --nginx -d example.com -d www.example.com

# プロンプトに従う：
# - メールアドレスを入力
# - 利用規約に同意
# - 選択：HTTPをHTTPSにリダイレクト（推奨）
</code></pre><p><strong>Certbotの処理：</strong></p><ol><li>ドメイン所有権を確認</li><li>証明書を取得</li><li>Nginxを自動設定</li><li>自動更新を設定</li></ol><p><strong>証明書を確認：</strong></p><pre><code class="language-bash"># 証明書一覧
sudo certbot certificates

# 出力例：
# Certificate Name: example.com
#   Domains: example.com www.example.com
#   Expiry Date: 2024-03-01 10:30:00+00:00 (VALID: 89 days)
#   Certificate Path: /etc/letsencrypt/live/example.com/fullchain.pem
#   Private Key Path: /etc/letsencrypt/live/example.com/privkey.pem
</code></pre><h3 id="14-manual-method"><strong>1.4. SSL証明書の取得 — 手動方式</strong></h3><p><strong>方法2：Certbot certonly（手動設定）</strong></p><pre><code class="language-bash"># 自動設定なしで証明書を取得
sudo certbot certonly --nginx -d example.com -d www.example.com

# またはwebrootを使用
sudo certbot certonly --webroot -w /var/www/html -d example.com -d www.example.com

# またはstandalone（Nginxを一時停止）
sudo systemctl stop nginx
sudo certbot certonly --standalone -d example.com -d www.example.com
sudo systemctl start nginx
</code></pre><p><strong>手動Nginx設定：</strong></p><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com www.example.com;
    
    # ACME challengeの場所
    location /.well-known/acme-challenge/ {
        root /var/www/html;
    }
    
    # HTTPSにリダイレクト
    location / {
        return 301 https://$server_name$request_uri;
    }
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name example.com www.example.com;
    
    # SSL証明書ファイル
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    
    # SSL設定
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers off;
    
    root /var/www/html;
    index index.html;
    
    location / {
        try_files $uri $uri/ =404;
    }
}
</code></pre><h3 id="15-certificate-renewal"><strong>1.5. 証明書の更新</strong></h3><p>Let's Encryptの証明書は90日で期限切れになります。Certbotは自動更新を設定します。</p><p><strong>更新のテスト：</strong></p><pre><code class="language-bash"># ドライラン（実際に更新せずテスト）
sudo certbot renew --dry-run
</code></pre><p><strong>手動更新：</strong></p><pre><code class="language-bash"># すべての証明書を更新
sudo certbot renew

# 特定の証明書を更新
sudo certbot renew --cert-name example.com

# 更新後にNginxをリロード
sudo certbot renew --deploy-hook "systemctl reload nginx"
</code></pre><p><strong>自動更新（systemdタイマー）：</strong></p><pre><code class="language-bash"># タイマーが有効か確認
sudo systemctl status certbot.timer

# タイマーを有効化
sudo systemctl enable certbot.timer
sudo systemctl start certbot.timer
</code></pre><h3 id="16-wildcard"><strong>1.6. ワイルドカード証明書</strong></h3><pre><code class="language-bash">sudo certbot certonly --manual --preferred-challenges dns \
  -d example.com -d *.example.com

# DNSのTXTレコードを追加する手順に従う
# _acme-challenge.example.com TXT "generated-token"

# DNS伝播を確認
dig _acme-challenge.example.com TXT
</code></pre><h3 id="17-multiple-domains"><strong>1.7. 複数ドメイン</strong></h3><pre><code class="language-bash"># 1つの証明書に複数ドメイン
sudo certbot --nginx \
  -d example.com -d www.example.com \
  -d blog.example.com -d shop.example.com
</code></pre><hr><h2 id="2-http-to-https-redirect"><strong>2. HTTPからHTTPSへのリダイレクト</strong></h2><h3 id="21-simple-redirect"><strong>2.1. シンプルなリダイレクト</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    listen [::]:80;
    server_name example.com www.example.com;
    
    # すべてのHTTPをHTTPSにリダイレクト
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
</code></pre><h3 id="22-redirect-with-acme"><strong>2.2. ACME Challengeを含むリダイレクト</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    listen [::]:80;
    server_name example.com www.example.com;
    
    # ACME challengeを許可
    location /.well-known/acme-challenge/ {
        root /var/www/html;
        allow all;
    }
    
    # それ以外はHTTPSにリダイレクト
    location / {
        return 301 https://$server_name$request_uri;
    }
}
</code></pre><h3 id="23-www-to-non-www"><strong>2.3. wwwからnon-wwwへのリダイレクト（HTTPS）</strong></h3><pre><code class="language-nginx"># wwwをnon-wwwにリダイレクト
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name www.example.com;
    
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    
    return 301 https://example.com$request_uri;
}

# メインサイト
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name example.com;
    
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    
    # サイト設定...
}
</code></pre><h3 id="24-complete-redirect"><strong>2.4. 完全なリダイレクト設定</strong></h3><pre><code class="language-nginx"># HTTP - HTTPSにリダイレクト
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

# HTTPS www - non-wwwにリダイレクト
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name www.example.com;
    
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    
    return 301 https://example.com$request_uri;
}

# メインHTTPSサーバー
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
</code></pre><hr><h2 id="3-ssl-protocols-ciphers"><strong>3. SSLプロトコルと暗号</strong></h2><h3 id="31-ssl-protocols"><strong>3.1. SSL/TLSプロトコル</strong></h3><p><strong>利用可能なプロトコル：</strong></p><ul><li>SSLv2 - 廃止、安全でない ❌</li><li>SSLv3 - 廃止、安全でない ❌</li><li>TLSv1.0 - 廃止、避けるべき ⚠️</li><li>TLSv1.1 - 廃止、避けるべき ⚠️</li><li>TLSv1.2 - 安全、広くサポート ✅</li><li>TLSv1.3 - 最も安全、最新 ✅</li></ul><p><strong>推奨設定：</strong></p><pre><code class="language-nginx">server {
    listen 443 ssl http2;
    server_name example.com;
    
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    
    # TLS 1.2と1.3のみ使用
    ssl_protocols TLSv1.2 TLSv1.3;
    
    # サーバー暗号を優先（TLS 1.2向け）
    ssl_prefer_server_ciphers off;  # TLS 1.3は自動処理
}
</code></pre><h3 id="32-ssl-ciphers"><strong>3.2. SSL暗号</strong></h3><p>暗号は使用する暗号化アルゴリズムを決定します。</p><p><strong>Mozilla中間設定（バランス）：</strong></p><pre><code class="language-nginx">server {
    listen 443 ssl http2;
    server_name example.com;
    
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    
    # プロトコル
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers off;
    
    # TLS 1.2向け暗号
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;
}
</code></pre><p><strong>完全なSSL設定：</strong></p><pre><code class="language-nginx">server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name example.com;
    
    # 証明書ファイル
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    
    # プロトコル
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers off;
    
    # 暗号
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;
    
    # セッションキャッシュ
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    ssl_session_tickets off;
    
    # DHパラメータ
    ssl_dhparam /etc/nginx/dhparam.pem;
    
    # OCSPステープリング
    ssl_stapling on;
    ssl_stapling_verify on;
    ssl_trusted_certificate /etc/letsencrypt/live/example.com/chain.pem;
    resolver 8.8.8.8 8.8.4.4 valid=300s;
    resolver_timeout 5s;
}
</code></pre><h3 id="33-dh-parameters"><strong>3.3. DHパラメータの生成</strong></h3><p>Diffie-Hellmanパラメータはセキュリティを強化します。</p><pre><code class="language-bash"># 2048ビットのDHパラメータを生成（数分かかる）
sudo openssl dhparam -out /etc/nginx/dhparam.pem 2048

# または4096ビット（時間がかかるが、より安全）
sudo openssl dhparam -out /etc/nginx/dhparam.pem 4096

# 権限を設定
sudo chmod 644 /etc/nginx/dhparam.pem
</code></pre><h3 id="34-ssl-session"><strong>3.4. SSLセッション設定</strong></h3><pre><code class="language-nginx">http {
    # SSLセッションキャッシュ（ワーカー間で共有）
    ssl_session_cache shared:SSL:10m;  # 10MB = 約40,000セッション
    
    # セッションタイムアウト
    ssl_session_timeout 10m;           # 10分
    
    # セッションチケットを無効化（完全前方秘匿性）
    ssl_session_tickets off;
}
</code></pre><hr><h2 id="4-hsts"><strong>4. HSTS（HTTP Strict Transport Security）</strong></h2><p>HSTSはブラウザに常にHTTPSを使用するよう指示します。</p><h3 id="41-basic-hsts"><strong>4.1. 基本HSTS</strong></h3><pre><code class="language-nginx">server {
    listen 443 ssl http2;
    server_name example.com;
    
    # HSTSヘッダー
    add_header Strict-Transport-Security "max-age=31536000" always;
}
</code></pre><p><strong>max-age値：</strong></p><pre><code class="language-nginx"># テスト - 1時間
add_header Strict-Transport-Security "max-age=3600" always;

# 短期 - 1週間
add_header Strict-Transport-Security "max-age=604800" always;

# 推奨 - 1年
add_header Strict-Transport-Security "max-age=31536000" always;

# 最大 - 2年
add_header Strict-Transport-Security "max-age=63072000" always;
</code></pre><h3 id="42-hsts-includesubdomains"><strong>4.2. includeSubDomainsを含むHSTS</strong></h3><pre><code class="language-nginx">server {
    listen 443 ssl http2;
    server_name example.com;
    
    # すべてのサブドメインにHSTSを適用
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
}
</code></pre><p><strong>警告：</strong> <code>includeSubDomains</code>はすべてのサブドメインに影響します。すべてのサブドメインがHTTPSをサポートしていることを確認してください。</p><h3 id="43-hsts-preload"><strong>4.3. HSTSプリロード</strong></h3><pre><code class="language-nginx">server {
    listen 443 ssl http2;
    server_name example.com;
    
    # preloadディレクティブを含むHSTS
    add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;
}
</code></pre><p><strong>HSTSプリロードリストへの登録：</strong></p><ol><li>https://hstspreload.org/ にアクセス</li><li>ドメインを入力</li><li>要件を確認：<ul><li>有効な証明書を提供</li><li>HTTPをHTTPSにリダイレクト</li><li>ベースドメインでHSTSヘッダーを提供</li><li>max-age ≥ 31536000（1年）</li><li>includeSubDomainsディレクティブ</li><li>preloadディレクティブ</li></ul></li></ol><h3 id="44-complete-hsts"><strong>4.4. 完全なHSTS設定</strong></h3><pre><code class="language-nginx"># HTTP - HTTPSにリダイレクト
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

# HTTPSサーバー
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name example.com www.example.com;
    
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    
    # HSTSヘッダー
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    
    # セキュリティヘッダー
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    
    root /var/www/html;
    index index.html;
}
</code></pre><hr><h2 id="5-ocsp-stapling"><strong>5. OCSPステープリング</strong></h2><p>OCSPステープリングはSSL/TLSハンドシェイクのパフォーマンスとプライバシーを向上させます。</p><h3 id="51-what-is-ocsp"><strong>5.1. OCSPステープリングとは？</strong></h3><p><strong>OCSPステープリングなし：</strong></p><pre><code>クライアント → サーバー：SSLハンドシェイク
クライアント → CA：証明書は有効か？
CA → クライアント：はい、有効です
クライアント → サーバー：続行
</code></pre><p><strong>OCSPステープリングあり：</strong></p><pre><code>サーバー → CA：私の証明書は有効か？（キャッシュ済み）
クライアント → サーバー：SSLハンドシェイク
サーバー → クライアント：証明書 + OCSPレスポンスを送信
クライアント：証明書有効！（CAへの追加リクエスト不要）
</code></pre><h3 id="52-enable-ocsp"><strong>5.2. OCSPステープリングの有効化</strong></h3><pre><code class="language-nginx">server {
    listen 443 ssl http2;
    server_name example.com;
    
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    
    # OCSPステープリングを有効化
    ssl_stapling on;
    ssl_stapling_verify on;
    
    # 検証用の信頼できる証明書
    ssl_trusted_certificate /etc/letsencrypt/live/example.com/chain.pem;
    
    # OCSPのDNSリゾルバー
    resolver 8.8.8.8 8.8.4.4 valid=300s;
    resolver_timeout 5s;
}
</code></pre><h3 id="53-verify-ocsp"><strong>5.3. OCSPステープリングの確認</strong></h3><pre><code class="language-bash"># OCSPステープリングをテスト
echo QUIT | openssl s_client -connect example.com:443 -status 2> /dev/null | grep -A 17 'OCSP response:'

# 期待される出力：
# OCSP response:
# ======================================
# OCSP Response Status: successful (0x0)
# Response Type: Basic OCSP Response
# ...
# Cert Status: good
</code></pre><h3 id="54-complete-ocsp"><strong>5.4. 完全なOCSP設定</strong></h3><pre><code class="language-nginx">http {
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
</code></pre><hr><h2 id="6-http2"><strong>6. HTTP/2設定</strong></h2><p>HTTP/2は多重化、サーバープッシュ、ヘッダー圧縮によりパフォーマンスを大幅に向上させます。</p><h3 id="61-enable-http2"><strong>6.1. HTTP/2の有効化</strong></h3><pre><code class="language-nginx">server {
    # http2パラメータでHTTP/2を有効化
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name example.com;
    
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    
    # HTTP/2にはTLS 1.2以上が必要
    ssl_protocols TLSv1.2 TLSv1.3;
    
    root /var/www/html;
}
</code></pre><p><strong>HTTP/2が有効か確認：</strong></p><pre><code class="language-bash"># curlでテスト
curl -I --http2 https://example.com

# 以下を確認：
# HTTP/2 200

# またはブラウザのDevToolsで確認
# ネットワークタブ → プロトコル列が「h2」を表示
</code></pre><h3 id="62-http2-push"><strong>6.2. HTTP/2プッシュ</strong></h3><p>サーバープッシュにより、クライアントがリクエストする前にリソースを送信できます。</p><pre><code class="language-nginx">server {
    listen 443 ssl http2;
    server_name example.com;
    
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    
    root /var/www/html;
    
    location / {
        # HTMLリクエスト時にCSSとJSをプッシュ
        http2_push /css/style.css;
        http2_push /js/app.js;
        
        try_files $uri $uri/ =404;
    }
}
</code></pre><p><strong>警告：</strong> HTTP/2プッシュは誤用するとパフォーマンスが低下します。重要なリソースのみをプッシュしてください。</p><h3 id="63-http2-params"><strong>6.3. HTTP/2パラメータ</strong></h3><pre><code class="language-nginx">http {
    # HTTP/2設定
    http2_max_field_size 16k;        # ヘッダーフィールドの最大サイズ
    http2_max_header_size 32k;       # ヘッダーの最大サイズ
    http2_max_requests 1000;          # 接続あたりの最大リクエスト数
    http2_recv_timeout 30s;           # クライアントのタイムアウト
}
</code></pre><hr><h2 id="7-complete-production-config"><strong>7. 本番環境向け完全なSSL設定</strong></h2><h3 id="71-optimal-setup"><strong>7.1. 最適なSSL/TLS設定</strong></h3><pre><code class="language-nginx"># /etc/nginx/nginx.conf

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
    
    # Nginxバージョンを非表示
    server_tokens off;
    
    # SSLセッションキャッシュ
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    ssl_session_tickets off;
    
    # OCSP設定
    resolver 8.8.8.8 8.8.4.4 1.1.1.1 valid=300s;
    resolver_timeout 5s;
    
    # Gzip圧縮
    gzip on;
    gzip_vary on;
    gzip_comp_level 6;
    gzip_types text/plain text/css text/xml text/javascript 
               application/json application/javascript application/xml+rss;
    
    # HTTP/2設定
    http2_max_field_size 16k;
    http2_max_header_size 32k;
    
    include /etc/nginx/conf.d/*.conf;
    include /etc/nginx/sites-enabled/*;
}
</code></pre><h3 id="72-site-config"><strong>7.2. サイト設定</strong></h3><pre><code class="language-nginx"># /etc/nginx/sites-available/example.com

# HTTP - HTTPSにリダイレクト
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

# HTTPS www - non-wwwにリダイレクト
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name www.example.com;
    
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    ssl_trusted_certificate /etc/letsencrypt/live/example.com/chain.pem;
    
    return 301 https://example.com$request_uri;
}

# メインHTTPSサーバー
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
</code></pre><hr><h2 id="8-testing-optimization"><strong>8. テストと最適化</strong></h2><h3 id="81-ssl-labs"><strong>8.1. SSL Labsテスト</strong></h3><pre><code class="language-bash"># SSL Labsにアクセス
# https://www.ssllabs.com/ssltest/analyze.html?d=example.com

# 目標：A+評価
</code></pre><p><strong>A+評価のチェックリスト：</strong></p><ul><li>✅ TLS 1.2と1.3が有効</li><li>✅ 強力な暗号</li><li>✅ 有効で信頼された証明書</li><li>✅ HSTSが有効（preload含む）</li><li>✅ OCSPステープリングが機能</li><li>✅ SSL/TLSの脆弱性なし</li></ul><h3 id="82-test-commands"><strong>8.2. テストコマンド</strong></h3><pre><code class="language-bash"># SSL接続をテスト
openssl s_client -connect example.com:443 -tls1_2

# TLS 1.3をテスト
openssl s_client -connect example.com:443 -tls1_3

# 証明書を確認
echo | openssl s_client -connect example.com:443 2>/dev/null | openssl x509 -noout -dates

# OCSPステープリングをテスト
echo QUIT | openssl s_client -connect example.com:443 -status 2> /dev/null | grep -A 17 'OCSP response:'

# HTTP/2をテスト
curl -I --http2 https://example.com
</code></pre><h3 id="83-performance-testing"><strong>8.3. パフォーマンステスト</strong></h3><pre><code class="language-bash"># SSLハンドシェイク時間をテスト
time openssl s_client -connect example.com:443 </dev/null

# abでベンチマーク
ab -n 1000 -c 10 https://example.com/

# h2load（HTTP/2）でテスト
h2load -n 1000 -c 10 https://example.com/
</code></pre><h3 id="84-security-headers"><strong>8.4. セキュリティヘッダーの確認</strong></h3><pre><code class="language-bash"># すべてのセキュリティヘッダーを確認
curl -I https://example.com

# 以下が含まれるべき：
# Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
# X-Frame-Options: SAMEORIGIN
# X-Content-Type-Options: nosniff
# X-XSS-Protection: 1; mode=block
# Referrer-Policy: no-referrer-when-downgrade
</code></pre><hr><h2 id="9-troubleshooting"><strong>9. トラブルシューティング</strong></h2><h3 id="91-cert-errors"><strong>9.1. 証明書エラー</strong></h3><p><strong>問題：証明書が信頼されない</strong></p><pre><code class="language-bash"># 証明書チェーンを確認
openssl s_client -connect example.com:443 -showcerts

# 証明書ファイルを確認
sudo ls -la /etc/letsencrypt/live/example.com/

# 以下が必要：
# cert.pem（証明書）
# chain.pem（中間証明書）
# fullchain.pem（証明書 + チェーン）
# privkey.pem（秘密鍵）
</code></pre><p><strong>修正：</strong></p><pre><code class="language-nginx"># cert.pemではなくfullchain.pemを使用
ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
</code></pre><h3 id="92-mixed-content"><strong>9.2. 混在コンテンツの警告</strong></h3><p><strong>問題：</strong> サイトは読み込まれるが「安全でない」と表示</p><p><strong>原因：</strong> HTTPSで提供されているページがHTTPリソースを読み込んでいる</p><p><strong>修正：</strong></p><pre><code class="language-html">&lt;!-- 悪い例 --&gt;
&lt;script src="http://example.com/js/app.js"&gt;&lt;/script&gt;

&lt;!-- 良い例 - HTTPS --&gt;
&lt;script src="https://example.com/js/app.js"&gt;&lt;/script&gt;
</code></pre><h3 id="93-ocsp-not-working"><strong>9.3. OCSPステープリングが機能しない</strong></h3><p><strong>修正：</strong></p><pre><code class="language-nginx">server {
    ssl_stapling on;
    ssl_stapling_verify on;
    ssl_trusted_certificate /etc/letsencrypt/live/example.com/chain.pem;
    
    resolver 8.8.8.8 8.8.4.4 valid=300s;
    resolver_timeout 5s;
}
</code></pre><h3 id="94-http2-not-working"><strong>9.4. HTTP/2が機能しない</strong></h3><p><strong>修正：</strong></p><pre><code class="language-nginx"># http2パラメータが存在することを確認
listen 443 ssl http2;  # listen 443 ssl; だけでは不可

# Nginxを再起動
sudo systemctl restart nginx
</code></pre><h3 id="95-renewal-fails"><strong>9.5. 証明書更新の失敗</strong></h3><p><strong>修正1：ポート80にアクセスできない</strong></p><pre><code class="language-bash">sudo ufw allow 80
</code></pre><p><strong>修正2：手動更新</strong></p><pre><code class="language-bash"># Nginxを停止
sudo systemctl stop nginx

# standaloneを使用
sudo certbot certonly --standalone -d example.com

# Nginxを起動
sudo systemctl start nginx
</code></pre><hr><h2 id="10-practice-exercises"><strong>10. 練習問題</strong></h2><h3 id="exercise-1"><strong>演習1：Let's EncryptでHTTPSを設定</strong></h3><ol><li>Certbotをインストール</li><li>ドメインの証明書を取得</li><li>NginxにHTTPSを設定</li><li>証明書をテスト</li></ol><h3 id="exercise-2"><strong>演習2：HTTPからHTTPSへのリダイレクト</strong></h3><ol><li>HTTPサーバー（ポート80）をセットアップ</li><li>HTTPSサーバー（ポート443）をセットアップ</li><li>HTTP → HTTPSへのリダイレクトを設定</li><li>リダイレクトをテスト</li></ol><h3 id="exercise-3"><strong>演習3：HSTSの有効化</strong></h3><ol><li>HSTSヘッダーを追加</li><li>ブラウザでテスト</li><li>HSTSプリロードの要件を確認</li><li>（任意）HSTSプリロードリストに申請</li></ol><h3 id="exercise-4"><strong>演習4：OCSPステープリングの設定</strong></h3><ol><li>OCSPステープリングを有効化</li><li>リゾルバーを設定</li><li>OCSPレスポンスをテスト</li><li>SSL Labsで確認</li></ol><h3 id="exercise-5"><strong>演習5：HTTP/2の有効化</strong></h3><ol><li>listenディレクティブにhttp2パラメータを追加</li><li>HTTP/2接続をテスト</li><li>HTTP/2プッシュを実装</li><li>HTTP/1.1とHTTP/2をベンチマーク比較</li></ol><h3 id="exercise-6"><strong>演習6：A+評価の取得</strong></h3><ol><li>最適なSSL/TLS設定を行う</li><li>すべてのセキュリティ機能を有効化</li><li>SSL Labsでテスト</li><li>問題を修正してA+評価を取得</li></ol><hr><h2 id="11-best-practices"><strong>11. ベストプラクティス</strong></h2><h3 id="111-security"><strong>11.1. セキュリティ</strong></h3><pre><code class="language-nginx"># 強力なプロトコルを使用
ssl_protocols TLSv1.2 TLSv1.3;

# 強力な暗号
ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384;

# セッションチケットを無効化
ssl_session_tickets off;

# OCSPステープリングを有効化
ssl_stapling on;
ssl_stapling_verify on;

# HSTS
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
</code></pre><h3 id="112-performance"><strong>11.2. パフォーマンス</strong></h3><pre><code class="language-nginx"># セッションキャッシュ
ssl_session_cache shared:SSL:10m;
ssl_session_timeout 10m;

# HTTP/2
listen 443 ssl http2;

# 圧縮
gzip on;
gzip_types text/plain text/css application/json application/javascript;

# 静的アセットのキャッシュ
location ~* \.(jpg|png|css|js)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
</code></pre><h3 id="113-maintenance"><strong>11.3. メンテナンス</strong></h3><pre><code class="language-bash"># 定期的な証明書更新
sudo certbot renew

# 証明書の有効期限を確認
sudo certbot certificates

# ログを監視
sudo tail -f /var/log/letsencrypt/letsencrypt.log

# 証明書をバックアップ
sudo tar -czf letsencrypt-backup.tar.gz /etc/letsencrypt/
</code></pre><hr><h2 id="summary"><strong>まとめ</strong></h2><p>このレッスンで学んだこと：</p><ul><li>✅ Let's EncryptによるSSL証明書の設定</li><li>✅ HTTPからHTTPSへのリダイレクト</li><li>✅ SSLプロトコルと暗号の最適化</li><li>✅ HSTSの設定とプリロード</li><li>✅ パフォーマンス向上のためのOCSPステープリング</li><li>✅ HTTP/2の設定と最適化</li><li>✅ セキュリティヘッダーとベストプラクティス</li><li>✅ テストとトラブルシューティング</li></ul><p><strong>次のレッスン：</strong> パフォーマンスチューニング — ワーカープロセス、接続、バッファ、タイムアウト、圧縮、キャッシュの最適化によりNginxのパフォーマンスを最大化する方法について学びます。</p>
