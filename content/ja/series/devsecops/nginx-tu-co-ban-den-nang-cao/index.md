---
id: 019c9617-fc27-73c5-b664-a1902ec9ac00
title: Nginxの基礎から応用まで
slug: nginx-tu-co-ban-den-nang-cao
description: >-
  Nginx マスターコース：ゼロからヒーローへ。Nginxの最も基本的な概念から、実際のプロダクション環境における高度なテクニックまでを
  体系的に習得できる総合コースです。
featured_image: uploads/2025/12/67b3243e-5bda-404f-b1a8-e14a8c157e21-1-201-a-85e81f28.jpeg
level: beginner
duration_hours: 50
lesson_count: 15
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2025-12-02T12:48:00.000000Z'
created_at: '2026-02-25T18:38:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019c9617-faa6-70d6-8679-ee4de1f177b3
  name: DevSecOps
  slug: devsecops
tags:
  - name: devops
    slug: devops
  - name: monitoring
    slug: monitoring
  - name: linux
    slug: linux
  - name: infrastructure
    slug: infrastructure
  - name: Docker
    slug: docker
  - name: Microservices
    slug: microservices
  - name: security
    slug: security
  - name: production
    slug: production
  - name: Nginx
    slug: nginx
  - name: WebServer
    slug: webserver
  - name: ReverseProxy
    slug: reverseproxy
  - name: LoadBalancer
    slug: loadbalancer
  - name: SystemAdministration
    slug: systemadministration
  - name: SSL
    slug: ssl
  - name: HTTPS
    slug: https
  - name: Performance
    slug: performance
  - name: Caching
    slug: caching
  - name: highavailability
    slug: highavailability
  - name: APIGateway
    slug: apigateway
  - name: CloudComputing
    slug: cloudcomputing
  - name: SRE
    slug: sre
  - name: HTTP2
    slug: http2
  - name: CDN
    slug: cdn
  - name: RateLimiting
    slug: ratelimiting
  - name: HandsOn
    slug: handson
  - name: RealWorld
    slug: realworld
  - name: CareerDevelopment
    slug: careerdevelopment
sections:
  - id: unsectioned
    title: Nginxの基礎から応用まで
    description: null
    sort_order: 0
    lessons:
      - id: 019c9617-fc73-72b9-a544-1f2848905ead
        title: '第1課：NginxのはじめにとインストールR'
        slug: bai-1-gioi-thieu-va-cai-dat-nginx
        description: >-
          Nginxのイベント駆動アーキテクチャを紹介し、Ubuntu/CentOS/macOS/Windowsへのインストール、
          ディレクトリ構成、およびstart・stop・reloadなどの基本管理コマンドを解説します。
          NginxとApacheの違いを理解し、一般的なエラーのトラブルシューティングも学びます。
        duration_minutes: 90
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019c9617-fc76-72eb-85f7-2f2ec6724934
        title: '第2課：Nginxの基本設定'
        slug: bai-2-cau-hinh-co-ban-nginx
        description: >-
          nginx.confの構文、コンテキスト（http/server/location）、基本ディレクティブについて学びます。
          バーチャルホストの作成、静的ファイルの配信、indexファイル、autoindex、カスタムエラーページの
          設定方法を解説します。実用的な例とプロダクション向けベストプラクティスを含みます。
        duration_minutes: 155
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019c9617-fc7a-7342-b6bc-7d30a93ee48e
        title: '第3課：Nginxのロギングとモニタリング'
        slug: bai-3-logging-va-monitoring-nginx
        description: >-
          アクセスログ・エラーログ・カスタムログフォーマット・ログローテーションによるNginxの
          ロギングとモニタリングを学びます。ログ分析、トラブルシューティング、logrotateの使用、
          サーバーパフォーマンス監視のための基本メトリクスを解説します。
        duration_minutes: 160
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019c9617-fc7d-736e-82ed-b2436e5de5d4
        title: '第4課：リバースプロキシ'
        slug: bai-4-reverse-proxy
        description: >-
          Nginxのリバースプロキシ——概念、proxy_passの設定、プロキシヘッダー、アップストリームサーバー、
          ヘルスチェックについて学びます。Node.js・Python・PHPなどのバックエンドアプリケーションの
          リバースプロキシとしてNginxを設定する方法を解説します。
        duration_minutes: 185
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019c9617-fc80-726d-b246-cc3af34c1a8b
        title: '第5課：ロードバランシング'
        slug: bai-5-load-balancing
        description: >-
          Nginxのロードバランシング——アルゴリズム（round-robin、least_conn、ip_hash、hash）、
          詳細なアップストリーム設定、バックアップサーバー、重み、スティッキーセッション、
          ヘルスチェックを解説します。実用例を交えた高可用性・パフォーマンス最適化のための
          ロードバランサー構築方法を学びます。
        duration_minutes: 240
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019c9617-fc84-72f3-8493-62103d1a8b50
        title: '第6課：NGINXキャッシュ'
        slug: bai-6-nginx-caching
        description: >-
          Nginxのキャッシュ——expiresとCache-Controlヘッダーによるブラウザキャッシュ、
          プロキシキャッシュ、PHP向けFastCGIキャッシュ、キャッシュキーとゾーン。
          キャッシュパージ、バイパス戦略、最適化テクニックを解説します。
        duration_minutes: 235
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019c9617-fc87-70fa-ad88-7f121c141ef0
        title: '第7課：NGINXのSSL/TLSとHTTPS'
        slug: bai-7-ssl-tls-va-https-trong-nginx
        description: >-
          NginxのSSL/TLSとHTTPS——Let's EncryptによるSSL証明書の設定、HTTPからHTTPSへのリダイレクト、
          SSLプロトコルと暗号の最適化、HSTS、OCSPステープリング、HTTP/2を解説します。
          接続のセキュリティ強化、パフォーマンス最適化、SSL LabsでのA+評価取得方法を学びます。
        duration_minutes: 215
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019c9617-fc8c-725d-b2ab-e1f1adb3175b
        title: '第8課：NGINXパフォーマンスチューニング'
        slug: bai-8-performance-tuning-trong-ngi
        description: >-
          Nginxのパフォーマンスチューニング——ワーカープロセスと接続数の最適化、keepalive、バッファ、
          タイムアウト、gzip圧縮、sendfile、tcp_nopush/nodelay、オープンファイルキャッシュを解説します。
          高トラフィックなプロダクション環境のためのモニタリング・ベンチマーク・ベストプラクティスを学びます。
        duration_minutes: 220
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019c9617-fc8f-72fb-b702-75e393b003ba
        title: '第9課：NGINXのセキュリティ'
        slug: bai-9-security-trong-nginx
        description: >-
          Nginxのセキュリティ——limit_req/limit_connによるレート制限、IPブロッキング、
          Basic認証、ModSecurity WAF統合、DDoS対策、セキュアヘッダー（CSP、X-Frame-Options、CORS）を解説します。
          攻撃からサーバーを守るためのベストプラクティスとセキュリティ強化方法を学びます。
        duration_minutes: 210
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019c9617-fc93-731a-b1d3-207da4a72b80
        title: '第10課：NGINXのリライトとリダイレクト'
        slug: bai-10-rewrite-va-redirects-trong-nginx
        description: >-
          Nginxのリライトとリダイレクト——正規表現によるリライトルール、returnとrewriteディレクティブの違い、
          ロケーションマッチングパターン（exact、prefix、regex）、try_filesディレクティブ、
          条件付きリダイレクトを解説します。
        duration_minutes: 175
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019c9617-fc97-7289-8a4f-a98913e0d06b
        title: '第11課：NGINXとアプリケーションスタック'
        slug: bai-11-nginx-voi-application-stack-tr0
        description: >-
          NginxとアプリケーションスタックのIntegration——WordPress/Laravel向けPHP-FPM設定、
          PM2を使ったNginx + Node.js、Pythonアプリ（uWSGI/Gunicorn）、
          PumaによるRuby on Rails、Dockerコンテナ、WebSocketプロキシ、gRPCを解説します。
        duration_minutes: 185
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019c9617-fc9a-73e8-840b-6265cc856d6b
        title: '第12課：NGINXのモニタリングとロギング'
        slug: bai-12-monitoring-va-logging-trong-nginx
        description: >-
          Nginxのモニタリングとロギング——アクセスログ分析、カスタムログフォーマット、logrotateによるログローテーション、
          リアルタイムモニタリングツール、Prometheus + Grafana統合、ELKスタック（Elasticsearch、Logstash、Kibana）、
          アラートシステム、パフォーマンスメトリクス、トラブルシューティングを解説します。
        duration_minutes: 210
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019c9617-fc9f-72bf-b136-257c1d6f0807
        title: '第13課：NGINXの高可用性と高度なロードバランシング'
        slug: bai-13-high-availability-va-load-balancing-advanced-trong-nginx
        description: >-
          ヘルスチェック（アクティブ/パッシブ）、セッション永続化、スティッキーセッション、
          フェイルオーバー戦略、仮想IPのためのKeepalived、アクティブ-アクティブおよびアクティブ-パッシブ構成、
          データベースロードバランシング、地理的分散、災害復旧計画とHAセットアップのテストを解説します。
        duration_minutes: 210
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019c9617-fca3-7052-a885-88f8b8f0ba2a
        title: '第14課：NGINXのマイクロサービスとサービスメッシュ'
        slug: bai-14-microservices-va-service-mesh-trong-nginx
        description: >-
          NginxによるマイクロサービスとサービスメッシュRR——サービスディスカバリ、APIゲートウェイパターン、
          サービスごとのレート制限、サーキットブレーカー、リトライポリシー、分散トレーシング、
          サービスメッシュ統合（Consul、Istio）、サイドカーパターン、カナリーデプロイ、ブルーグリーンデプロイを解説します。
        duration_minutes: 245
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019c9617-fca6-7277-8b61-c480821e8bcb
        title: '第15課：NGINXのプロダクションベストプラクティスと高度なトピック'
        slug: bai-15-production-best-practices-va-advanced-topics-trong-nginx
        description: >-
          プロダクションベストプラクティスの総まとめ——設定管理、デプロイ戦略、トラブルシューティングガイド、
          パフォーマンス最適化、セキュリティ強化、コスト最適化、災害復旧、コンプライアンス（PCI-DSS、HIPAA、GDPR）、
          マルチクラウド戦略、プロダクション対応チェックリストを解説します。
        duration_minutes: 235
        is_free: true
        sort_order: 15
        video_url: null
reviews: []
quizzes: []
---
<p></p><h2><strong>第1課：はじめに・インストール</strong></h2><ul><li><p>Nginxとは？イベント駆動アーキテクチャとノンブロッキングI/O</p></li><li><p>NginxとApacheの比較</p></li><li><p>Linux（Ubuntu/CentOS）、macOS、WindowsへのNginxのインストール</p></li><li><p>ディレクトリ構成と基本設定ファイル</p></li><li><p>Nginxの起動・停止・リロード</p></li></ul><h2><strong>第2課：基本設定</strong></h2><ul><li><p>nginx.conf設定ファイルの構文</p></li><li><p>コンテキストとディレクティブ（http、server、location）</p></li><li><p>バーチャルホスト設定（server blocks）</p></li><li><p>静的ファイルの配信（HTML、CSS、JS、images）</p></li><li><p>indexファイルとautoindexの設定</p></li><li><p>カスタムエラーページ</p></li></ul><h2><strong>第3課：ロギングとモニタリング</strong></h2><ul><li><p>アクセスログとエラーログ</p></li><li><p>カスタムログフォーマット</p></li><li><p>logrotateによるログローテーション</p></li><li><p>監視のための基本メトリクス</p></li></ul><h2><strong>第4課：リバースプロキシ</strong></h2><ul><li><p>リバースプロキシの概念</p></li><li><p>proxy_passの基本設定</p></li><li><p>プロキシヘッダー（X-Real-IP、X-Forwarded-For）</p></li><li><p>アップストリームサーバーとロードバランシング</p></li><li><p>基本ヘルスチェック</p></li></ul><h2><strong>第5課：ロードバランシング</strong></h2><ul><li><p>ロードバランシングアルゴリズム（round-robin、least_conn、ip_hash、hash）</p></li><li><p>upstreamブロックの設定</p></li><li><p>バックアップサーバーと重み付け</p></li><li><p>スティッキーセッション</p></li><li><p>アクティブヘルスチェック</p></li></ul><h2><strong>第6課：キャッシュ</strong></h2><ul><li><p>expiresとCache-Controlヘッダーによるブラウザキャッシュ</p></li><li><p>基本プロキシキャッシュ</p></li><li><p>FastCGIキャッシュ</p></li><li><p>キャッシュキーとキャッシュゾーン</p></li><li><p>キャッシュパージとバイパス</p></li></ul><h2><strong>第7課：SSL/TLSとHTTPS</strong></h2><ul><li><p>SSL証明書の設定（Let's Encrypt）</p></li><li><p>HTTPからHTTPSへのリダイレクト</p></li><li><p>SSLプロトコルと暗号</p></li><li><p>HSTS（HTTP Strict Transport Security）</p></li><li><p>OCSPステープリング</p></li><li><p>HTTP/2の設定</p></li></ul><h2><strong>第8課：パフォーマンスチューニング</strong></h2><ul><li><p>ワーカープロセスとワーカー接続数</p></li><li><p>Keepalive接続</p></li><li><p>バッファとタイムアウトの最適化</p></li><li><p>Gzip圧縮</p></li><li><p>Sendfileとtcp_nopush</p></li><li><p>オープンファイルキャッシュ</p></li></ul><h2><strong>第9課：セキュリティ</strong></h2><ul><li><p>limit_reqとlimit_connによるレート制限</p></li><li><p>deny/allowによるIPブロッキング</p></li><li><p>Basic認証</p></li><li><p>ModSecurity WAFの統合</p></li><li><p>基本的なDDoS対策</p></li><li><p>セキュアヘッダー（CSP、X-Frame-Optionsなど）</p></li></ul><h2><strong>第10課：リライトとリダイレクト</strong></h2><ul><li><p>正規表現によるリライトルール</p></li><li><p>returnとrewriteディレクティブの違い</p></li><li><p>ロケーションマッチング（exact、prefix、regex）</p></li><li><p>try_filesディレクティブ</p></li><li><p>条件付きリダイレクト</p></li></ul><h2><strong>第11課：NginxとアプリケーションスタックR</strong></h2><ul><li><p>PHP-FPMの設定</p></li><li><p>Nginx + Node.js</p></li><li><p>Nginx + Python（uWSGI、Gunicorn）</p></li><li><p>Nginx + Dockerコンテナ</p></li><li><p>WebSocketプロキシ</p></li></ul><h2><strong>第12課：高可用性</strong></h2><ul><li><p>Nginx Plusの機能（該当する場合）</p></li><li><p>アクティブ-アクティブおよびアクティブ-パッシブ構成</p></li><li><p>フェイルオーバー戦略</p></li><li><p>HA向けKeepalived</p></li><li><p>DNSラウンドロビン</p></li></ul><h2><strong>第13課：マイクロサービスとAPIゲートウェイ</strong></h2><ul><li><p>NginxをAPIゲートウェイとして使用</p></li><li><p>サービスディスカバリ</p></li><li><p>サーキットブレーカーパターン</p></li><li><p>JWT認証</p></li><li><p>クライアントごとのAPIレート制限</p></li></ul><h2><strong>第14課：高度なトピック</strong></h2><ul><li><p>Nginxモジュール（サードパーティモジュールの追加）</p></li><li><p>OpenRestyによるLuaスクリプティング</p></li><li><p>Nginxストリーミング（RTMPモジュール）</p></li><li><p>GeoIPフィルタリング</p></li><li><p>カスタムエラーハンドリング</p></li><li><p>NginxによるA/Bテスト</p></li></ul><h2><strong>第15課：モニタリングとトラブルシューティング</strong></h2><ul><li><p>Stub statusモジュール</p></li><li><p>Nginx AmplifyまたはPrometheusエクスポーター</p></li><li><p>デバッグログ</p></li><li><p>一般的なエラーと解決策</p></li><li><p>パフォーマンスプロファイリング</p></li></ul><h2><strong>第16課：ベストプラクティスとプロダクション</strong></h2><ul><li><p>設定管理</p></li><li><p>ブルーグリーンデプロイ</p></li><li><p>ゼロダウンタイムデプロイ</p></li><li><p>バックアップと障害復旧</p></li><li><p>セキュリティ強化チェックリスト</p></li><li><p>ドキュメンテーションとメンテナンス</p></li></ul><p></p>
