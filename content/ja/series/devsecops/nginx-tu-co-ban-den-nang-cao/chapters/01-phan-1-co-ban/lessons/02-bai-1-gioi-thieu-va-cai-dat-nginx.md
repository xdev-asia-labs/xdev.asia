---
id: 019c9617-fc73-72b9-a544-1f2848905ead
title: '第1課：Nginxの紹介とインストール'
slug: bai-1-gioi-thieu-va-cai-dat-nginx
description: >-
  Nginxのイベント駆動型アーキテクチャを紹介し、Ubuntu/CentOS/macOS/Windowsへのインストール手順、
  ディレクトリ構造、start・stop・reloadなどの基本管理コマンドを解説します。
  NginxとApacheの違いを理解し、よくあるエラーのトラブルシューティング方法を学びます。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 1
section_title: "第1部：基礎"
course:
  id: 019c9617-fc27-73c5-b664-a1902ec9ac00
  title: Nginxの基礎から応用まで
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
      <tspan x="60" dy="0">第1課：Nginxの紹介とインストール</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Nginxの基礎から応用まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第1部：基礎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-nginx-towa"><strong>1. Nginxとは？</strong></h2><p>Nginx（「エンジンエックス」と発音）は、Igor Sysoevが2004年に開発した強力でハイパフォーマンスなオープンソースWebサーバーです。もともとC10K問題（1万件の同時接続処理）を解決するために作られ、世界で最も人気のあるWebサーバーの1つになっています。</p><p>NginxはWebサーバーだけでなく、以下の役割も担えます：</p><ul><li><strong>リバースプロキシサーバー</strong></li><li><strong>ロードバランサー</strong></li><li><strong>HTTPキャッシュ</strong></li><li><strong>メールプロキシサーバー</strong></li><li><strong>APIゲートウェイ</strong></li></ul><h3 id="event-driven-non-blocking-io-architecture"><strong>イベント駆動型とノンブロッキングI/Oアーキテクチャ</strong></h3><p>Nginxの最大の強みはそのアーキテクチャにあります。従来のモデルとは異なり、Nginxは<strong>イベント駆動型</strong>かつ<strong>ノンブロッキングI/O</strong>（非同期）アーキテクチャを使用しています。</p><p><strong>動作の仕組み：</strong></p><ol><li><strong>マスタープロセス</strong>：設定を読み込み・評価し、ワーカープロセスを管理する単一プロセス</li><li><strong>ワーカープロセス</strong>：実際の接続を処理する複数のプロセス</li><li><strong>イベントループ</strong>：各ワーカープロセスはイベントループを使用して何千もの接続を同時に処理する</li></ol><p><strong>ノンブロッキングI/O</strong>の意味：</p><ul><li>ワーカープロセスがI/O（ファイル読み込み、DBクエリ、ネットワークリクエスト）を待っているとき「ブロック」されず、他のリクエストを処理できる</li><li>1つのワーカープロセスが同時に何千もの接続を処理できる</li><li>CPUとRAMリソースを大幅に節約できる</li></ul><p><strong>図解：</strong></p><pre><code>Apache（ブロッキング）：
リクエスト1 → スレッド1 → ファイル読み込み待ち（ブロック） → 完了
リクエスト2 → スレッド2 → ファイル読み込み待ち（ブロック） → 完了
リクエスト3 → スレッド3 → ファイル読み込み待ち（ブロック） → 完了
→ 3リクエストに3スレッド必要

Nginx（ノンブロッキング）：
リクエスト1 → ワーカー → I/O待ち → リクエスト2処理 → リクエスト3処理 → リクエスト1完了
リクエスト2 → 同じワーカー
リクエスト3 → 同じワーカー
→ 3リクエストに1ワーカーで十分</code></pre><hr/><h2 id="2-nginx-vs-apache"><strong>2. Nginx vs Apache 比較</strong></h2>
<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>項目</th>
<th>Nginx</th>
<th>Apache</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>アーキテクチャ</strong></td>
<td>イベント駆動型、非同期</td>
<td>プロセス/スレッド型</td>
</tr>
<tr>
<td><strong>接続処理</strong></td>
<td>1ワーカーが多数の接続を処理</td>
<td>接続ごとに1スレッド/プロセス</td>
</tr>
<tr>
<td><strong>メモリ</strong></td>
<td>非常に低く、安定している</td>
<td>接続数に比例して増加</td>
</tr>
<tr>
<td><strong>静的コンテンツ</strong></td>
<td>非常に高速</td>
<td>高速だがNginxより遅い</td>
</tr>
<tr>
<td><strong>動的コンテンツ</strong></td>
<td>バックエンドとの連携が必要（PHP-FPM）</td>
<td>直接処理可能（mod_php）</td>
</tr>
<tr>
<td><strong>設定</strong></td>
<td>集中型、ファイルベース</td>
<td>分散型（.htaccess）</td>
</tr>
<tr>
<td><strong>モジュール</strong></td>
<td>事前にコンパイル必要</td>
<td>動的ロード可能</td>
</tr>
<tr>
<td><strong>リライトルール</strong></td>
<td>独自の形式、よりシンプル</td>
<td>.htaccessで強力</td>
</tr>
<tr>
<td><strong>適した用途</strong></td>
<td>高トラフィック、静的コンテンツ、リバースプロキシ</td>
<td>共有ホスティング、動的コンテンツ処理</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->
<p><strong>Nginxを使うべき場合：</strong></p><ul><li>静的ファイルの配信（HTML、CSS、JS、画像）</li><li>アプリケーションサーバーのリバースプロキシ</li><li>ロードバランシング</li><li>高い並行性（多数の同時接続）</li><li>限られたリソースで高いパフォーマンスが必要</li></ul><p><strong>Apacheを使うべき場合：</strong></p><ul><li>共有ホスティング環境</li><li>.htaccessの柔軟性が必要</li><li>多数の動的モジュール</li><li>Apache固有の機能に依存するレガシーアプリ</li></ul><p><strong>現在のトレンド：</strong> 多くのシステムが組み合わせを使用しています。Nginxをフロントのリバースプロキシとして、Apacheが背後で動的コンテンツを処理します。</p><hr/><h2 id="3-installing-nginx"><strong>3. Nginxのインストール</strong></h2><h3 id="31-ubuntu-debian"><strong>3.1. Ubuntu/Debianへのインストール</strong></h3><p><strong>方法1：デフォルトリポジトリからインストール（最もシンプル）</strong></p><pre><code class="language-bash"># パッケージリストを更新
sudo apt update

# Nginxをインストール
sudo apt install nginx -y

# バージョン確認
nginx -v

# 状態確認
sudo systemctl status nginx
</code></pre><p><strong>方法2：公式Nginxリポジトリからインストール（最新バージョン）</strong></p><pre><code class="language-bash"># 前提パッケージのインストール
sudo apt install curl gnupg2 ca-certificates lsb-release ubuntu-keyring

# 公式nginx署名キーをインポート
curl https://nginx.org/keys/nginx_signing.key | gpg --dearmor \
    | sudo tee /usr/share/keyrings/nginx-archive-keyring.gpg &gt;/dev/null

# リポジトリの設定
echo "deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] \
http://nginx.org/packages/ubuntu `lsb_release -cs` nginx" \
    | sudo tee /etc/apt/sources.list.d/nginx.list

# 更新してインストール
sudo apt update
sudo apt install nginx -y
</code></pre><h3 id="32-centos-rhel"><strong>3.2. CentOS/RHELへのインストール</strong></h3><p><strong>方法1：EPELリポジトリから</strong></p><pre><code class="language-bash"># CentOS 7
sudo yum install epel-release -y
sudo yum install nginx -y

# CentOS 8 / Rocky Linux / AlmaLinux
sudo dnf install nginx -y

# 起動と有効化
sudo systemctl start nginx
sudo systemctl enable nginx

# ファイアウォールを開放
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload
</code></pre><p><strong>方法2：公式Nginxリポジトリから</strong></p><pre><code class="language-bash"># リポジトリファイルを作成
sudo tee /etc/yum.repos.d/nginx.repo &lt;&lt;EOF
[nginx-stable]
name=nginx stable repo
baseurl=http://nginx.org/packages/centos/\$releasever/\$basearch/
gpgcheck=1
enabled=1
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true
EOF

# インストール
sudo yum install nginx -y
</code></pre><h3 id="33-macos"><strong>3.3. macOSへのインストール</strong></h3><p><strong>Homebrewを使用：</strong></p><pre><code class="language-bash"># Homebrewをインストール（まだない場合）
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Nginxをインストール
brew install nginx

# Nginxを起動
brew services start nginx

# またはフォアグラウンドで実行
nginx

# 確認
nginx -v
</code></pre><p><strong>macOS上のパス：</strong></p><ul><li>設定: <code>/usr/local/etc/nginx/nginx.conf</code></li><li>ドキュメントルート: <code>/usr/local/var/www</code></li><li>ログ: <code>/usr/local/var/log/nginx</code></li></ul><h3 id="34-windows"><strong>3.4. Windowsへのインストール</strong></h3><p><strong>ステップ1：ダウンロード</strong></p><ul><li>アクセス先: http://nginx.org/en/download.html</li><li>Windowsバージョン（nginx-x.x.x.zip）をダウンロード</li></ul><p><strong>ステップ2：展開して実行</strong></p><pre><code class="language-cmd"># C:\nginxに展開

# 管理者としてコマンドプロンプトを開く
cd C:\nginx

# Nginxを起動
start nginx

# または
nginx.exe
</code></pre><p><strong>Windows上でのNginx管理：</strong></p><pre><code class="language-cmd"># バージョン確認
nginx -v

# 設定テスト
nginx -t

# 停止
nginx -s stop

# リロード
nginx -s reload

# グレースフル終了
nginx -s quit
</code></pre><p><strong>注意：</strong> WindowsではNginxはLinuxほど安定しておらず、本番環境での使用は推奨されません。</p><hr/><h2 id="4-directory-structure"><strong>4. ディレクトリ構造と基本設定ファイル</strong></h2><h3 id="41-ubuntu-debian"><strong>4.1. Ubuntu/Debianのディレクトリ構造</strong></h3><pre><code>/etc/nginx/
├── nginx.conf                 # メイン設定ファイル
├── mime.types                 # MIMEタイプ定義
├── fastcgi_params            # FastCGIパラメーター
├── proxy_params              # プロキシパラメーター
├── sites-available/          # 利用可能なサイト設定
│   └── default              # デフォルトバーチャルホスト
├── sites-enabled/            # アクティブなサイトへのシンボリックリンク
│   └── default -&gt; ../sites-available/default
├── conf.d/                   # 追加設定
├── modules-available/        # 利用可能なモジュール
└── modules-enabled/          # 有効なモジュール

/var/log/nginx/
├── access.log                # アクセスログ
└── error.log                 # エラーログ

/var/www/html/                # デフォルトドキュメントルート
└── index.nginx-debian.html

/usr/share/nginx/html/        # 代替ドキュメントルート
</code></pre><h3 id="42-centos-rhel"><strong>4.2. CentOS/RHELのディレクトリ構造</strong></h3><pre><code>/etc/nginx/
├── nginx.conf                # メイン設定ファイル
├── mime.types
├── fastcgi_params
├── conf.d/                   # バーチャルホスト設定
│   └── default.conf
└── default.d/

/var/log/nginx/
├── access.log
└── error.log

/usr/share/nginx/html/        # ドキュメントルート
└── index.html
</code></pre><h3 id="43-basic-nginx-conf"><strong>4.3. 基本的なnginx.conf設定ファイル</strong></h3><pre><code class="language-nginx"># Nginxを実行するユーザー
user www-data;

# ワーカープロセス数（通常はCPUコア数）
worker_processes auto;

# PIDファイル
pid /run/nginx.pid;

# 動的モジュールのロード
include /etc/nginx/modules-enabled/*.conf;

events {
    # ワーカーあたりの最大接続数
    worker_connections 768;
    
    # イベント方式（Linuxではepoll）
    use epoll;
}

http {
    ##
    # 基本設定
    ##
    sendfile on;
    tcp_nopush on;
    types_hash_max_size 2048;
    
    # MIMEタイプ
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    ##
    # ログ設定
    ##
    access_log /var/log/nginx/access.log;
    error_log /var/log/nginx/error.log;

    ##
    # Gzip設定
    ##
    gzip on;
    gzip_disable "msie6";

    ##
    # バーチャルホスト設定
    ##
    include /etc/nginx/conf.d/*.conf;
    include /etc/nginx/sites-enabled/*;
}
</code></pre><h3 id="44-sample-virtual-host"><strong>4.4. サンプルバーチャルホストファイル</strong></h3><pre><code class="language-nginx">server {
    # リスニングポート
    listen 80;
    listen [::]:80;

    # ドメイン名
    server_name example.com www.example.com;

    # ドキュメントルート
    root /var/www/example.com;
    index index.html index.htm;

    # アクセスログとエラーログ
    access_log /var/log/nginx/example.com.access.log;
    error_log /var/log/nginx/example.com.error.log;

    # locationブロック
    location / {
        try_files $uri $uri/ =404;
    }

    # .htaccessへのアクセスを拒否
    location ~ /\.ht {
        deny all;
    }
}
</code></pre><hr/><h2 id="5-start-stop-reload"><strong>5. Nginxの起動・停止・リロード</strong></h2><h3 id="51-systemctl"><strong>5.1. systemctlで管理（Linux）</strong></h3><pre><code class="language-bash"># Nginxを起動
sudo systemctl start nginx

# Nginxを停止
sudo systemctl stop nginx

# Nginxを再起動
sudo systemctl restart nginx

# 設定をリロード（ダウンタイムなし）
sudo systemctl reload nginx

# 状態確認
sudo systemctl status nginx

# 起動時の自動起動を有効化
sudo systemctl enable nginx

# 自動起動を無効化
sudo systemctl disable nginx
</code></pre><h3 id="52-nginx-command"><strong>5.2. nginxコマンドで管理</strong></h3><pre><code class="language-bash"># 設定テスト（リロード前に必ず実行）
sudo nginx -t

# テストと設定表示
sudo nginx -T

# 設定をリロード
sudo nginx -s reload

# グレースフル停止（現在のリクエストが完了するまで待機）
sudo nginx -s quit

# 即時停止
sudo nginx -s stop

# ログファイルを再オープン（ログローテーション後）
sudo nginx -s reopen

# バージョンとコンパイルオプションを表示
nginx -V
</code></pre><h3 id="53-reload-restart-stop"><strong>5.3. reload・restart・stopの違い</strong></h3><p><strong>reload：</strong></p><ul><li>ダウンタイムなし</li><li>Nginxが設定を再読み込み</li><li>古いワーカープロセスは現在のリクエストを完了後に終了</li><li>新しいワーカープロセスが新しい設定で作成される</li><li><strong>使う場面：</strong> 設定変更、バーチャルホストの追加・変更時</li></ul><pre><code class="language-bash">sudo nginx -s reload
# または
sudo systemctl reload nginx
</code></pre><p><strong>restart：</strong></p><ul><li>ダウンタイムあり（短時間）</li><li>完全に停止してから再起動</li><li>すべての接続が切断される</li><li><strong>使う場面：</strong> 新しいモジュールのインストール、大きな変更時</li></ul><pre><code class="language-bash">sudo systemctl restart nginx
</code></pre><p><strong>stop vs quit：</strong></p><pre><code class="language-bash"># 即時停止（接続を切断）
sudo nginx -s stop

# グレースフル終了（リクエスト完了を待つ）
sudo nginx -s quit
</code></pre><h3 id="54-check-nginx-running"><strong>5.4. Nginxが動作しているか確認</strong></h3><pre><code class="language-bash"># プロセス確認
ps aux | grep nginx

# リスニングポートを確認
sudo netstat -tulpn | grep nginx
# または
sudo ss -tulpn | grep nginx

# バージョン確認
nginx -v

# アクセステスト
curl http://localhost
# または
curl -I http://localhost
</code></pre><h3 id="55-basic-troubleshooting"><strong>5.5. 基本的なトラブルシューティング</strong></h3><p><strong>エラー：nginx.conf テスト失敗</strong></p><pre><code class="language-bash"># 詳細エラーを確認
sudo nginx -t

# エラーログを表示
sudo tail -f /var/log/nginx/error.log
</code></pre><p><strong>エラー：ポート80がすでに使用中</strong></p><pre><code class="language-bash"># ポート80を使用しているプロセスを確認
sudo lsof -i :80
# または
sudo netstat -tulpn | grep :80

# 必要ならプロセスをkill
sudo kill -9 &lt;PID&gt;
</code></pre><p><strong>エラー：Permission denied</strong></p><pre><code class="language-bash"># nginx.confのユーザーを確認
grep user /etc/nginx/nginx.conf

# ディレクトリのパーミッションを確認
ls -la /var/www/html

# オーナーシップを修正
sudo chown -R www-data:www-data /var/www/html
</code></pre><p><strong>ブラウザでアクセスできない場合：</strong></p><pre><code class="language-bash"># ファイアウォール確認（Ubuntu/Debian）
sudo ufw status
sudo ufw allow 'Nginx Full'

# ファイアウォール確認（CentOS）
sudo firewall-cmd --list-all
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --reload

# SELinux確認（CentOS）
sudo getenforce
sudo setenforce 0  # テスト用に一時的に無効化
</code></pre><hr/><h2 id="6-exercises"><strong>6. 演習</strong></h2><h3 id="exercise-1"><strong>演習1：インストールと確認</strong></h3><ol><li>お使いのOSにNginxをインストールする</li><li>バージョンと状態を確認する</li><li>http://localhostにアクセスしてデフォルトのウェルカムページを確認する</li><li>access.logファイルを見つけて表示する</li></ol><h3 id="exercise-2"><strong>演習2：コマンドに慣れる</strong></h3><ol><li>設定テスト：<code>nginx -t</code></li><li>Nginxをリロードする</li><li>Nginxを停止して再起動する</li><li>実行中のプロセスを確認する</li></ol><h3 id="exercise-3"><strong>演習3：ディレクトリ構造を探索する</strong></h3><ol><li>nginx.confを開いてディレクティブを読む</li><li>デフォルトバーチャルホストのドキュメントルートを見つける</li><li>ドキュメントルートにシンプルなHTMLファイルを作成する</li><li>ブラウザでファイルにアクセスする</li></ol><h3 id="exercise-4"><strong>演習4：意図的なエラーの修正</strong></h3><ol><li>nginx.confに意図的に不正な構文を追加する</li><li><code>nginx -t</code>を実行してエラーを確認する</li><li>エラーを修正して再テストする</li></ol><hr/><h2 id="summary"><strong>まとめ</strong></h2><p>このレッスンで学んだこと：</p><ul><li>✅ Nginxとは何か、イベント駆動型アーキテクチャ</li><li>✅ Nginx vs Apache 比較</li><li>✅ 複数のOSへのNginxのインストール</li><li>✅ ディレクトリ構造と設定ファイル</li><li>✅ 基本的なNginx管理コマンド</li></ul><p><strong>次のレッスン：</strong> Nginxの設定を深く掘り下げ、コンテキスト・ディレクティブ・バーチャルホスト・静的ファイルの配信について学びます。</p>
