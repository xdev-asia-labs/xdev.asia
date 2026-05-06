---
id: 019d8b30-b100-7001-c001-e0c5f8100001
title: 基本から上級までの Keycloak
slug: keycloak-tu-co-ban-den-nang-cao
description: Keycloakコースは基本から上級まで包括的で、レルム、ユーザー、ロール、クライアントのインストールと構成から、アイデンティティ・ブローカリング、ユーザー・フェデレーション（LDAP/AD）、認証フロー、認可サービス、多要素認証、組織、ワークフロー、パスキーなどの高度なモジュール、実際のアプリケーションとの統合まで、アイデンティティとアクセス管理（IAM）をマスターするのに役立ちます。本番運用、高可用性、Kubernetes Operators、エンタープライズセキュリティのベストプラクティスを含む、Quarkus 上で実行される Keycloak 26.x (最新バージョン 2026) に更新されました。
featured_image: uploads/2026/03/keycloak-series-banner-2026.png
level: beginner
duration_hours: 80
lesson_count: 25
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-03-30T10:00:00.000000Z'
created_at: '2026-03-30T10:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019c9617-faa6-70d6-8679-ee4de1f177b3
  name: DevSecOps
  slug: devsecops
tags:
- name: Keycloak
  slug: keycloak
- name: IAM
  slug: iam
- name: SSO
  slug: sso
- name: OAuth2
  slug: oauth2
- name: OIDC
  slug: oidc
- name: SAML
  slug: saml
- name: LDAP
  slug: ldap
- name: MFA
  slug: mfa
- name: Passkeys
  slug: passkeys
- name: security
  slug: security
- name: devops
  slug: devops
- name: Docker
  slug: docker
- name: kubernetes
  slug: kubernetes
- name: linux
  slug: linux
- name: HandsOn
  slug: handson
- name: production
  slug: production
- name: infrastructure
  slug: infrastructure
- name: cloud-native
  slug: cloud-native
sections:
- id: section-01
  title: 'パート 1: Keycloak プラットフォーム'
  description: Giới thiệu Keycloak, cài đặt, Realms, Users, Groups và Admin Console
  sort_order: 1
  lessons:
  - id: 019d8b30-b101-7001-c001-e0c5f8100101
    title: 'レッスン 1: Keycloak の紹介 - エンタープライズにおける IAM と SSO'
    slug: bai-1-gioi-thieu-keycloak-iam-va-sso-trong-enterprise
    description: Keycloak とは何か、IAM が必要な理由、中心的な概念 (レルム、クライアント、ユーザー、ロール、グループ、セッション)、Quarkus 上の Keycloak アーキテクチャ、Auth0/Okta/Azure AD との比較、企業での実際の使用例について学びます。 Keycloak 26.x バージョンの概要。
    duration_minutes: 90
    is_free: true
    sort_order: 1
    video_url: null
  - id: 019d8b30-b102-7001-c001-e0c5f8100102
    title: 'レッスン 2: Keycloak のインストール - スタンドアロン、Docker、Kubernetes'
    slug: bai-2-cai-dat-keycloak-standalone-docker-va-kubernetes
    description: Keycloak 26.x をベアメタル (Ubuntu/CentOS)、Docker Compose、および Kubernetes Operator にインストールする手順。データベース バックエンド (PostgreSQL、MySQL、MariaDB)、HTTPS/TLS、リバース プロキシ (Nginx、HAProxy)、ホスト名構成 v2 を構成し、開発モードと本番モードで Keycloak を実行します。
    duration_minutes: 150
    is_free: true
    sort_order: 2
    video_url: null
  - id: 019d8b30-b103-7001-c001-e0c5f8100103
    title: 'レッスン 3: 管理コンソールと最初のレルムの作成'
    slug: bai-3-admin-console-va-tao-realm-dau-tien
    description: 管理コンソールについて理解し、最初の管理者ユーザーを作成し、レルム、レルム設定 (一般、ログイン、電子メール、テーマ、ローカリゼーション、キー、セキュリティ防御)、管理 CLI (kcadm.sh)、および基本的な管理 REST API を作成および構成します。
    duration_minutes: 120
    is_free: true
    sort_order: 3
    video_url: null
  - id: 019d8b30-b104-7001-c001-e0c5f8100104
    title: 'レッスン 4: ユーザー、グループ、およびユーザー プロファイルの管理'
    slug: bai-4-quan-ly-users-groups-va-user-profile
    description: ユーザーの作成と管理、認証情報の設定、ユーザー属性スキーマ、ユーザー プロファイル構成、カスタム属性とバリデーター、グループとサブグループの作成、グループ属性、グループ ロール マッピング、ユーザーの自己登録、必要なアクション、偽装と個人データの管理。
    duration_minutes: 150
    is_free: true
    sort_order: 4
    video_url: null
  - id: 019d8b30-b105-7001-c001-e0c5f8100105
    title: 'レッスン 5: 役割、権限、およびアクセス制御'
    slug: bai-5-roles-permissions-va-access-control
    description: レルム ロール、クライアント ロール、複合ロール、ユーザーとグループのロール マッピング、デフォルト ロール、サービス アカウント ロール。詳細な管理権限 V2、レルム管理委任、リソース固有の権限、ポリシー、権限評価。
    duration_minutes: 150
    is_free: true
    sort_order: 5
    video_url: null
- id: section-02
  title: 'パート 2: SSO プロトコル - OpenID Connect と SAML'
  description: Cấu hình Clients, OIDC flows, SAML, Token management và Client Scopes
  sort_order: 2
  lessons:
  - id: 019d8b30-b106-7001-c001-e0c5f8100106
    title: 'レッスン 6: OpenID Connect クライアント - A から Z までの構成'
    slug: bai-6-openid-connect-clients-cau-hinh-tu-a-den-z
    description: OIDC クライアント (パブリック、機密、ベアラーのみ)、詳細なクライアント設定 (アクセス設定、機能構成、ログイン/ログアウト設定)、認可コード フロー、暗黙的フロー、クライアント資格情報の付与、デバイス認可の付与、CIBA、PKCE を作成し、Web アプリケーション (React、Angular、Spring Boot、Node.js) と統合します。
    duration_minutes: 200
    is_free: true
    sort_order: 6
    video_url: null
  - id: 019d8b30-b107-7001-c001-e0c5f8100107
    title: 'レッスン 7: SAML クライアントとプロトコル マッパー'
    slug: bai-7-saml-clients-va-protocol-mappers
    description: 'SAML 2.0 クライアント、SAML バインディング (POST、リダイレクト、アーティファクト)、SAML アサーション、XML 署名と暗号化、エンティティ記述子のインポート、IDP 開始ログインを作成します。 OIDC および SAML のプロトコル マッパー: ユーザー属性、ユーザー セッション メモ、ハードコードされたクレーム、スクリプト マッパー、ペアワイズ サブジェクト識別子、および Lightweight アクセス トークン。'
    duration_minutes: 180
    is_free: true
    sort_order: 7
    video_url: null
  - id: 019d8b30-b108-7001-c001-e0c5f8100108
    title: 'レッスン 8: クライアント スコープ、トークン管理、および DPoP'
    slug: bai-8-client-scopes-token-management-va-dpop
    description: クライアント スコープ (デフォルト、オプション)、スコープ パラメーター、同意設定、レルムのデフォルト スコープ、評価スコープ。アクセス トークン、ID トークン、リフレッシュ トークンのライフサイクル、トークン タイムアウト構成、オフライン アクセス、トークン失効、軽量アクセス トークン、DPoP (所有証明のデモンストレーション)、およびトークン セキュリティのためのクライアント ポリシー。
    duration_minutes: 180
    is_free: true
    sort_order: 8
    video_url: null
  - id: 019d8b30-b109-7001-c001-e0c5f8100109
    title: 'レッスン 9: クライアント ポリシーと高度なクライアント構成'
    slug: bai-9-client-policies-va-advanced-client-configuration
    description: クライアント ポリシー アーキテクチャ、ポリシーとプロファイルの作成、FAPI 2.0 セキュリティ プロファイル、クライアント シークレット ローテーション、サービス アカウント、対象ユーザー サポート、機密クライアント資格情報 (クライアント ID/シークレット、JWT、X.509)、トークン交換 (内部間、外部間)、JWT 認可付与 (RFC 7523)、および MCP サーバーのクライアント構成。
    duration_minutes: 180
    is_free: true
    sort_order: 9
    video_url: null
- id: section-03
  title: 'パート 3: 認証、MFA、および ID ブローカリング'
  description: Authentication Flows, Multi-Factor Authentication, Social Login và Identity Providers
  sort_order: 3
  lessons:
  - id: 019d8b30-b110-7001-c001-e0c5f8100110
    title: 'レッスン 10: 認証フロー - 認証フローのカスタマイズ'
    slug: bai-10-authentication-flows-tuy-chinh-luong-xac-thuc
    description: Keycloakの認証フロー、ブラウザフロー、直接付与フロー、登録フロー、認証情報のリセットフロー、最初のブローカーログインフローを理解します。カスタム フローの作成、実行とサブフロー、条件付きオーセンティケーター (条件 - 実行されるサブフロー、条件 - クライアント スコープ)、ステップアップ認証、ACR から認証レベル (LoA) へのマッピング、およびセッション制限を追加します。
    duration_minutes: 200
    is_free: true
    sort_order: 10
    video_url: null
  - id: 019d8b30-b111-7001-c001-e0c5f8100111
    title: 'レッスン 11: 多要素認証 - OTP、WebAuthn、およびパスキー'
    slug: bai-11-multi-factor-authentication-otp-webauthn-va-passkeys
    description: TOTP/HOTP (Google Authenticator、FreeOTP)、OTP ポリシー設定、リカバリ コードを使用した 2 要素認証を構成します。 WebAuthn セットアップ (FIDO2 セキュリティ キー)、WebAuthn パスワードレス ポリシー。パスキーの統合 (条件付きおよびモーダル UI)、AIA を介したパスキーの登録、Kerberos 認証、および X.509 クライアント証明書認証。
    duration_minutes: 200
    is_free: true
    sort_order: 11
    video_url: null
  - id: 019d8b30-b112-7001-c001-e0c5f8100112
    title: 'レッスン 12: ID ブローカリングとソーシャル ログイン'
    slug: bai-12-identity-brokering-va-social-login
    description: ID プロバイダーの概念、ソーシャル ログイン構成 (Google、Facebook、GitHub、Apple、Microsoft)、OpenID Connect ID プロバイダー、SAML ID プロバイダー、OAuth v2 プロバイダー、Kubernetes ID プロバイダー。最初のログイン フロー、アカウント リンク、アイデンティティ プロバイダー マッパー、同期モード (インポート、強制、レガシー)、クライアント推奨 IdP (kc_idp_hint)、および IdP ログアウト フロー。
    duration_minutes: 200
    is_free: true
    sort_order: 12
    video_url: null
- id: section-04
  title: 'パート 4: ユーザー フェデレーション、組織、および認可'
  description: LDAP/AD federation, Organizations (CIAM), Authorization Services và Workflows
  sort_order: 4
  lessons:
  - id: 019d8b30-b113-7001-c001-e0c5f8100113
    title: 'レッスン 13: ユーザー フェデレーション - LDAP と Active Directory'
    slug: bai-13-user-federation-ldap-va-active-directory
    description: LDAP/AD フェデレーション、ストレージ モード (READ_ONLY、WRITABLE、UNSYNCED)、編集モード、接続設定 (SSL、接続プール)、LDAP マッパー (ユーザー属性、フルネーム、グループ、ロール、ハードコードされたロール、MSAD ユーザー アカウント制御)、パスワード ハッシュ、ユーザー同期、SSSD/FreeIPA 統合、Kerberos ブリッジ、カスタム ユーザー ストレージ SPI、LDAP の問題のトラブルシューティングを構成します。
    duration_minutes: 220
    is_free: true
    sort_order: 13
    video_url: null
  - id: 019d8b30-b114-7001-c001-e0c5f8100114
    title: 'レッスン 14: 組織 - マルチテナンシーと CIAM'
    slug: bai-14-organizations-multi-tenancy-va-ciam
    description: 組織機能の有効化と構成、組織、組織ドメイン、組織属性の作成/管理、メンバーの管理 (管理対象、非管理対象)、招待管理 (送信、追跡、再送信、削除)、ID プロバイダーと組織の関連付け、メンバーの認証 (ID 優先ログイン)、組織クレームのトークンへのマッピング、および実際の B2B/B2B2C ユースケース。
    duration_minutes: 180
    is_free: true
    sort_order: 14
    video_url: null
  - id: 019d8b30-b115-7001-c001-e0c5f8100115
    title: 'レッスン 15: 認可サービス - 詳細な認可'
    slug: bai-15-authorization-services-phan-quyen-chi-tiet
    description: '認可サービスの詳細: リソース サーバー、リソース、スコープ、アクセス許可、ポリシー (ロールベース、ユーザーベース、グループベース、クライアントベース、時間ベース、JavaScript、集約)。 UMA 2.0 サポート、Permission API、Policy Enforcer、プッシュされたクレーム、リソース属性、クレーム情報ポイント、評価 API、および Spring Boot / Node.js アプリケーションへの認可の統合。'
    duration_minutes: 240
    is_free: true
    sort_order: 15
    video_url: null
  - id: 019d8b30-b116-7001-c001-e0c5f8100116
    title: 'レッスン 16: ワークフロー - IGA による管理の自動化'
    slug: bai-16-workflows-tu-dong-hoa-quan-tri-voi-iga
    description: Identity Governance and Administration (IGA) 用の Keycloak ワークフロー (プレビュー) を導入します。ワークフロー、ワークフロー定義、ワークフロー表現言語、ワークフローの管理、条件とステップの定義、Joiner-Mover-Leaver (JML) プロセス、自動オンボーディング/オフボーディング、アクセス レビュー、企業の一般的な使用例を理解します。
    duration_minutes: 160
    is_free: true
    sort_order: 16
    video_url: null
- id: section-05
  title: 'パート 5: テーマ、イベント、セキュリティ、および Vault'
  description: Custom themes, event auditing, security hardening, brute force protection và vault
  sort_order: 5
  lessons:
  - id: 019d8b30-b117-7001-c001-e0c5f8100117
    title: 'レッスン 17: カスタム テーマ - ログイン、アカウント、管理者、電子メール'
    slug: bai-17-custom-themes-login-account-admin-va-email
    description: Keycloak テーマ システム。カスタム ログイン テーマ、アカウント コンソール テーマ、管理コンソール テーマ、電子メール テーマを作成します。フリーマーカー テンプレート、テーマ プロパティ、ダーク モード サポート、国際化 (i18n)、カスタム CSS/JS、PatternFly 5、カスタマイズ可能なフッター、テーマ リソースの展開、およびテーマのホット展開。ユーザー プロファイルをサポートするアカウント コンソール v3。
    duration_minutes: 180
    is_free: true
    sort_order: 17
    video_url: null
  - id: 019d8b30-b118-7001-c001-e0c5f8100118
    title: 'レッスン 18: イベントの監査とログ記録'
    slug: bai-18-event-auditing-va-logging
    description: ユーザーイベントと管理者イベント、イベントタイプ (ログイン、登録、認証情報の更新、ソーシャルリンクなど)、イベントリスナー (JBoss ロギング、電子メール)、カスタムイベントリスナー SPI、モニタリング用のイベントメトリクス、Keycloak ロギング設定 (コンソール、ファイル、JSON、ECS 形式)、リモートロギング用の syslog、MDC ロギング、および ELK/Loki との統合を設定します。
    duration_minutes: 150
    is_free: true
    sort_order: 18
    video_url: null
  - id: 019d8b30-b119-7001-c001-e0c5f8100119
    title: 'レッスン 19: セキュリティ強化とブルート フォース保護'
    slug: bai-19-security-hardening-va-brute-force-protection
    description: 'Keycloak実稼働セキュリティ: SSL/HTTPS、管理エンドポイント保護、ブルートフォース保護(永久ロックアウト、一時ロックアウト、複合ロックアウト)、パスワードポリシー(長さ、数字、特殊文字、ユーザー名、履歴ではない)、読み取り専用ユーザー属性、クリックジャッキング保護(Xフレームオプション、CSP)、CORS構成、コンテンツセキュリティポリシー、HSTS、reCAPTCHAセットアップ、レルムキー管理、キーローテーション、およびVaultの使用(ファイルベース、Kubernetes) Secret) を使用してシークレットを管理します。'
    duration_minutes: 200
    is_free: true
    sort_order: 19
    video_url: null
- id: section-06
  title: 'パート 6: 実際のアプリケーションの統合'
  description: Tích hợp Keycloak với Spring Boot, React, Node.js, Nginx và API Gateway
  sort_order: 6
  lessons:
  - id: 019d8b30-b120-7001-c001-e0c5f8100120
    title: 'レッスン 20: Keycloak と Spring Boot の統合'
    slug: bai-20-tich-hop-keycloak-voi-spring-boot
    description: Spring Security OAuth2 リソースサーバー、Spring Security OAuth2 クライアント、認可クライアントライブラリを使用して、Keycloak を Spring Boot 3+ と統合します。 OIDC 認証、ロールベースの認可、メソッドレベルのセキュリティ (@PreAuthorize)、トークンリレー、サービス間通信、マルチテナントおよびテスト戦略を構成します。
    duration_minutes: 200
    is_free: true
    sort_order: 20
    video_url: null
  - id: 019d8b30-b121-7001-c001-e0c5f8100121
    title: 'レッスン 21: Keycloak と React/Angular および Node.js の統合'
    slug: bai-21-tich-hop-keycloak-voi-react-angular-va-nodejs
    description: Keycloak JavaScript アダプター (スタンドアロン ライブラリ)、React (keycloak-js、react-oidc-context)、Angular (angular-auth-oidc-client)、Vue.js との統合。 Passport.js または Express-openid-connect を使用した Node.js バックエンド、トークン管理 (更新、サイレント SSO)、保護されたルート、ロールベースの UI レンダリング、および SPA 認証のベスト プラクティス。
    duration_minutes: 180
    is_free: true
    sort_order: 21
    video_url: null
  - id: 019d8b30-b122-7001-c001-e0c5f8100122
    title: 'レッスン 22: Nginx、API ゲートウェイ、マイクロサービスを使用した Keycloak'
    slug: bai-22-keycloak-voi-nginx-api-gateway-va-microservices
    description: Keycloak (auth_request モジュール、OAuth2 プロキシ) を使用したリバース プロキシとして Nginx を構成し、Keycloak OIDC プラグインを使用した API ゲートウェイ パターン (Kong、Traefik、APISIX)、マイクロサービス認証パターン、トークン イントロスペクション、サービス メッシュ統合、Docker レジストリ v2 認証、実験的検証可能な認証情報 (OID4VCI) を構成します。
    duration_minutes: 180
    is_free: true
    sort_order: 22
    video_url: null
- id: section-07
  title: 'パート 7: 実稼働、高可用性、および Kubernetes'
  description: Vận hành production, clustering, HA, backup, Kubernetes Operator và monitoring
  sort_order: 7
  lessons:
  - id: 019d8b30-b123-7001-c001-e0c5f8100123
    title: 'レッスン 23: Keycloak 本番環境のデプロイとデータベースのチューニング'
    slug: bai-23-keycloak-production-deployment-va-database-tuning
    description: 実稼働チェックリスト、Keycloak ビルドの最適化 (kc.sh ビルド)、実稼働データベース構成 (PostgreSQL チューニング、接続プール)、追加のデータソース、ホスト名 v2 構成、リバース プロキシ設定 (プロキシ ヘッダー、信頼できるアドレス、PROXY プロトコル)、HTTP/HTTPS 設定、JVM チューニング (ヒープ、GC)、Argon2 パスワード ハッシュ、キャッシュ構成 (Infinispan 埋め込み、最大カウント)、およびレルム データのインポート/エクスポート。
    duration_minutes: 220
    is_free: true
    sort_order: 23
    video_url: null
  - id: 019d8b30-b124-7001-c001-e0c5f8100124
    title: 'レッスン 24: 高可用性、クラスタリング、およびマルチサイト展開'
    slug: bai-24-high-availability-clustering-va-multi-site-deployment
    description: InfinispanによるKeycloakクラスタリング、トランスポートスタックjdbc-ping、ゼロ構成の安全なクラスタ通信、セッションレプリケーション、永続的なユーザーセッション、マルチサイトアクティブ/パッシブデプロイメント、クロスデータセンターレプリケーション、最適化されたイメージのローリングアップデート、ロードバランサーヘルスチェック（ノンブロッキング）、Infinispan外部キャッシュおよびCPU/メモリのサイジングガイド。
    duration_minutes: 240
    is_free: true
    sort_order: 24
    video_url: null
  - id: 019d8b30-b125-7001-c001-e0c5f8100125
    title: 'レッスン 25: Kubernetes オペレーター、モニタリング、および管理 CLI'
    slug: bai-25-kubernetes-operator-monitoring-va-admin-cli
    description: Kubernetes/OpenShift 上の Keycloak Operator、Keycloak CR 設定 (レプリカ、トラストストア、スケジューリング、リソース)、KeycloakRealmImport CR、NetworkPolicies。 OpenTelemetry (トレース、メトリクス、ロギング)、Prometheus メトリクス、Grafana ダッシュボード、イベント メトリクス、パスワード ハッシュ メトリクスによるモニタリング。レルム/ロール/クライアント/ユーザー/グループの操作、バックアップ/復元戦略、運用上の問題のトラブルシューティング用の管理 CLI (kcadm.sh)。
    duration_minutes: 240
    is_free: true
    sort_order: 25
    video_url: null
reviews: []
quizzes: []
locale: ja
---
<p></p><h2><strong>パート 1: Keycloak プラットフォーム</strong></h2>
<h3>レッスン 1: Keycloak の紹介 - エンタープライズにおける IAM と SSO</h3>
<ul>
<li><p>Keycloakとは何ですか?開発履歴 (JBoss から CNCF インキュベーションまで)</p></li>
<li><p>Identity and Access Management (IAM) が必要な理由</p></li>
<li><p>中心的な概念: レルム、クライアント、ユーザー、ロール、グループ、セッション</p></li>
<li><p>Quarkus (26.x) の Keycloak アーキテクチャ</p></li>
<li><p>Keycloak、Auth0、Okta、Azure AD の比較</p></li>
<li><p>ユースケース: SSO、ソーシャル ログイン、LDAP フェデレーション、MFA、API セキュリティ</p></li>
</ul>
<h3>レッスン 2: Keycloak のインストール - スタンドアロン、Docker、Kubernetes</h3>
<ul>
<li><p>Ubuntu/CentOS (ベアメタル) に Keycloak をインストール</p></li>
<li><p>Docker および Docker Compose を使用して Keycloak を実行</p></li>
<li><p>Kubernetes Operator のデプロイ</p></li>
<li><p>データベース バックエンド構成 (PostgreSQL、MySQL、MariaDB)</p></li>
<li><p>HTTPS/TLS セットアップとホスト名 v2 構成</p></li>
<li><p>開発モードと本番モード</p></li>
</ul>
<h3>レッスン 3: 管理コンソールと最初のレルムの作成__HTMLTAG_63___
<ul>
<li><p>最初の管理者ユーザーの作成 (管理者のブートストラップと回復)</p></li>
<li><p>管理コンソール UI の概要</p></li>
<li><p>レルムの作成と構成 (全般、ログイン、電子メール、テーマ、キー)</p></li>
<li><p>マスター レルムとカスタム レルム</p></li>
<li><p>管理 CLI (kcadm.sh) 基本</p></li>
<li><p>管理者 REST API の概要</p></li>
</ul>
<h3>レッスン 4: ユーザー、グループ、ユーザー プロファイルの管理__HTMLTAG_91___
<ul>
<li><p>ユーザーの作成と管理、認証情報の設定</p></li>
<li><p>ユーザー プロファイル: カスタム属性、バリデーター、注釈</p></li>
<li><p>プログレッシブプロファイリング</p></li>
<li><p>グループとサブグループ、グループ属性、役割マッピング</p></li>
<li><p>ユーザーの自己登録と必要なアクション</p></li>
<li><p>なりすまし、アカウント削除、個人データ</p></li>
</ul>
<h3>_レッスン 5: 役割、権限、アクセス制御__HTMLTAG_119___
<ul>
<li><p>レルム ロールとクライアント ロール</p></li>
<li><p>複合ロールとデフォルトのロール</p></li>
<li><p>ユーザーとグループのロール マッピング</p></li>
<li><p>きめ細かい管理者権限 V2</p></li>
<li><p>レルム管理の委任</p></li>
<li><p>_専用レルム管理コンソール</p></li>
</ul><h2><strong>_パート 2: SSO プロトコル - OpenID Connect と SAML</strong></h2>
<h3>レッスン 6: OpenID Connect クライアント - A から Z までの構成</h3>
<ul>
<li><p>クライアント タイプ: パブリック、機密、ベアラーのみ</p></li>
<li><p>一般設定、アクセス設定、機能構成</p></li>
<li><p>_OIDC 認証フロー: 認可コード、暗黙的、クライアント認証情報、デバイス認証</p></li>
<li><p>PKCE (コード交換用の証明キー)</p></li>
<li><p>_CIBA (クライアント開始バックチャネル認証)</p></li>
<li><p>OIDC クライアントと React、Spring Boot、Node.js の統合</p></li>
</ul>
<h3>_レッスン 7: SAML クライアントとプロトコル マッパー__HTMLTAG_179___
<ul>
<li><p>SAML 2.0 クライアント、SAML バインディング (POST、リダイレクト、アーティファクト) の作成</p></li>
<li><p>SAML アサーション、XML 署名および暗号化</p></li>
<li><p>_エンティティ記述子のインポート</p></li>
<li><p>OIDC プロトコル マッパー: ユーザー属性、セッション メモ、ハードコード、スクリプト</p></li>
<li><p>SAML プロトコル マッパー</p></li>
<li><p>軽量アクセス トークンとペアごとのサブジェクト識別子</p></li>
</ul>
<h3>レッスン 8: クライアント スコープ、トークン管理、DPoP</h3>
<ul>
<li><p>_クライアント スコープ: デフォルトとオプション、同意設定</p></li>
<li><p>レルムのデフォルトのクライアント スコープ、スコープの評価</p></li>
<li><p>アクセス トークン、ID トークン、リフレッシュ トークンのライフサイクル</p></li>
<li><p>_セッションとトークンのタイムアウト構成</p></li>
<li><p>オフライン アクセス、トークン失効</p></li>
<li><p>_DPoP (所有証明のデモンストレーション)</p></li>
</ul>
<h3>レッスン 9: クライアント ポリシーと高度なクライアント構成__HTMLTAG_235___
<ul>
<li><p>クライアント ポリシー アーキテクチャ: ポリシー、プロファイル、条件、実行プログラム</p></li>
<li><p>FAPI 2.0 セキュリティ プロファイルとメッセージ署名</p></li>
<li><p>クライアント シークレットのローテーション</p></li>
<li><p>サービス アカウントと対象ユーザーのサポート</p></li>
<li><p>トークン交換 (標準、JWT 認可付与 RFC 7523)</p></li>
<li><p>MCP サーバーの認可サーバーとしての Keycloak</p></li>
</ul><h2><strong>パート 3: 認証、MFA、および ID ブローカリング</strong></h2>
<h3>レッスン 10: 認証フロー - 認証フローのカスタマイズ__HTMLTAG_267___
<ul>
<li><p>_組み込みフロー: ブラウザ、直接付与、登録、認証情報のリセット</p></li>
<li><p>カスタム認証フローの作成</p></li>
<li><p>条件付き認証子 (実行されるサブフロー、クライアント スコープ)</p></li>
<li><p>_ステップアップ認証とACR/LoAマッピング</p></li>
<li><p>セッション制限 (レルムレベル、クライアントレベル)</p></li>
<li><p>_クライアント ポリシーによる動的認証フローの選択</p></li>
</ul>
<h3>レッスン 11: 多要素認証 - OTP、WebAuthn、およびパスキー</h3>
<ul>
<li><p>Google 認証システム、FreeOTP を使用した TOTP/HOTP セットアップ</p></li>
<li><p>OTP ポリシー構成と回復コード</p></li>
<li><p>_WebAuthn (FIDO2 セキュリティ キー) のセットアップ</p></li>
<li><p>パスキーの統合 (条件付き UI、モーダル UI)</p></li>
<li><p>Kerberos 認証</p></li>
<li><p>X.509 クライアント証明書認証</p></li>
</ul>
<h3>レッスン 12: ID ブローカリングとソーシャル ログイン</h3>
<ul>
<li><p>_ソーシャル ログイン: Google、Facebook、GitHub、Apple、Microsoft</p></li>
<li><p>OpenID Connect と SAML ID プロバイダ</p></li>
<li><p>OAuth v2 および Kubernetes ID プロバイダー</p></li>
<li><p>最初のログイン フローとアカウントのリンク</p></li>
<li><p>アイデンティティ プロバイダ マッパーと同期モード</p></li>
<li><p>クライアント推奨の IdP および IdP ログアウト</p></li>
</ul><h2><strong>パート 4: ユーザー連合、組織、認可</strong></h2>
<h3>_レッスン 13: ユーザー フェデレーション - LDAP と Active Directory</h3>
<ul>
<li><p>LDAP/AD フェデレーション構成 (ストレージ モード、編集モード)</p></li>
<li><p>_接続設定: SSL、接続プール、紹介</p></li>
<li><p>LDAP マッパー: ユーザー属性、フルネーム、グループ、ロール</p></li>
<li><p>MSAD ユーザー アカウント制御マッパー</p></li>
<li><p>SSSD/FreeIPA の統合と Kerberos ブリッジ</p></li>
<li><p>カスタム ユーザー ストレージ SPI</p></li>
</ul>
<h3>レッスン 14: 組織 - マルチテナンシーと CIAM</h3>
<ul>
<li><p>Keycloak で組織機能を有効にする</p></li>
<li><p>組織、ドメイン、属性の作成/管理</p></li>
<li><p>_メンバー管理: 管理対象、非管理対象、招待状</p></li>
<li><p>ID プロバイダーと組織の関連付け</p></li>
<li><p>ID ファーストのログイン フロー</p></li>
<li><p>_組織クレームをトークンにマッピング</p></li>
</ul>
<h3>レッスン 15: 認可サービス - 詳細な認可</h3>
<ul>
<li><p>_リソース サーバー、リソース、スコープ、権限、ポリシー</p></li>
<li><p>ポリシー タイプ: ロール、ユーザー、グループ、クライアント、時間、JS、集約</p></li>
<li><p>UMA 2.0 と Permission API</p></li>
<li><p>_ポリシー執行者と請求情報ポイント</p></li>
<li><p>_Spring Boot / Node.jsへの認可の統合</p></li>
<li><p>評価 API とトラブルシューティング権限</p></li>
</ul>
<h3>_レッスン 16: ワークフロー - IGA による管理の自動化</h3>
<ul>
<li><p>Keycloak ワークフロー エンジン (プレビュー)</p></li>
<li><p>ワークフロー定義と式言語</p></li>
<li><p>_条件と手順の定義</p></li>
<li><p>Joiner-Mover-Leaver (JML) プロセス</p></li>
<li><p>自動オンボーディング/オフボーディング</p></li>
<li><p>_アクセス レビューと一般的な使用例</p></li>
</ul><h2><strong>_パート 5: テーマ、イベント、セキュリティ、Vault</strong></h2>
<h3>レッスン 17: カスタム テーマ - ログイン、アカウント、管理者、電子メール</h3>
<ul>
<li><p>_テーマ システム: ログイン、アカウント、管理コンソール、メール テーマ</p></li>
<li><p>カスタム テーマ、フリーマーカー テンプレートの作成</p></li>
<li><p>_ダーク モードのサポート、国際化</p></li>
<li><p>PatternFly 5 コンポーネント</p></li>
<li><p>テーマのホットデプロイ、テーマのリソース</p></li>
<li><p>_アカウント コンソール v3 のカスタマイズ</p></li>
</ul>
<h3>レッスン 18: イベントの監査とログ__HTMLTAG_499___
<ul>
<li><p>ユーザー イベントと管理者イベントの構成</p></li>
<li><p>イベント タイプとイベント リスナー</p></li>
<li><p>_カスタム イベント リスナー SPI</p></li>
<li><p>監視用のイベント指標</p></li>
<li><p>ロギング: コンソール、ファイル、JSON、ECS 形式、syslog</p></li>
<li><p>_ELK スタック / Loki との統合</p></li>
</ul>
<h3>レッスン 19: セキュリティ強化とブルート フォース保護</h3>
<ul>
<li><p>SSL/HTTPS および管理エンドポイント保護</p></li>
<li><p>ブルート フォース保護 (永続的、一時的、複合ロックアウト)</p></li>
<li><p>パスワード ポリシー</p></li>
<li><p>_セキュリティ ヘッダー: CSP、X-Frame-Options、HSTS</p></li>
<li><p>reCAPTCHA セットアップ (v2 および Enterprise)</p></li>
<li><p>Vault 統合 (ファイルベース、Kubernetes Secret)</p></li>
</ul><h2><strong>パート 6: 実用的なアプリケーションの統合</strong></h2>
<h3>_レッスン 20: Keycloak と Spring Boot の統合</h3>
<ul>
<li><p>_Spring Security OAuth2 リソース サーバー</p></li>
<li><p>Spring Security OAuth2 クライアント</p></li>
<li><p>_認可クライアント ライブラリ</p></li>
<li><p>@PreAuthorize によるロールベースの承認</p></li>
<li><p>トークンリレーとサービス間通信</p></li>
<li><p>マルチテナントとテスト戦略</p></li>
</ul>
<h3>_レッスン 21: Keycloak と React/Angular および Node.js の統合</h3>
<ul>
<li><p>_Keycloak JavaScript アダプター (スタンドアロン ライブラリ)</p></li>
<li><p>React の統合 (keycloak-js、react-oidc-context)</p></li>
<li><p>Angular 統合 (angular-auth-oidc-client)</p></li>
<li><p>_Node.js バックエンド (Passport.js、express-openid-connect)</p></li>
<li><p>トークン管理、サイレント SSO、保護されたルート</p></li>
<li><p>_SPA 認証のベスト プラクティス</p></li>
</ul>
<h3>レッスン 22: Nginx、API ゲートウェイ、マイクロサービスを使用した Keycloak</h3>
<ul>
<li><p>auth_request / OAuth2 プロキシを使用した Nginx リバース プロキシ</p></li>
<li><p>_API ゲートウェイ: Kong、Traefik、Keycloak OIDC を使用した APISIX</p></li>
<li><p>マイクロサービス認証パターン</p></li>
<li><p>_トークンイントロスペクションエンドポイント</p></li>
<li><p>Docker レジストリ v2 認証</p></li>
<li><p>検証可能な認証情報 (OID4VCI) - 実験的</p></li>
</ul><h2><strong>パート 7: 本番環境、高可用性、Kubernetes</strong></h2>
<h3>_レッスン 23: Keycloak 本番環境のデプロイとデータベースのチューニング</h3>
<ul>
<li><p>本番準備チェックリスト</p></li>
<li><p>ビルドの最適化 (kc.sh ビルド)</p></li>
<li><p>データベース調整: PostgreSQL、接続プール、追加データソース</p></li>
<li><p>_ホスト名 v2、リバース プロキシ、HTTP/HTTPS 設定</p></li>
<li><p>JVM チューニング、Argon2 ハッシュ、キャッシュ構成</p></li>
<li><p>_レルム データのインポート/エクスポート</p></li>
</ul>
<h3>_レッスン 24: 高可用性、クラスタリング、およびマルチサイト展開</h3>
<ul>
<li><p>Infinispan、jdbc-pingトランスポートによるKeycloakクラスタリング</p></li>
<li><p>_ゼロ構成の安全なクラスター通信</p></li>
<li><p>セッション レプリケーションと永続ユーザー セッション</p></li>
<li><p>マルチサイトのアクティブ/パッシブ展開</p></li>
<li><p>ローリングアップデートとノンブロッキングヘルスチェック</p></li>
<li><p>CPU/メモリサイジングガイド</p></li>
</ul>
<h3>レッスン 25: Kubernetes オペレーター、モニタリング、および管理 CLI</h3>
<ul>
<li><p>Keycloak オペレーター: Keycloak CR、KeycloakRealmImport CR</p></li>
<li><p>_オペレーターの詳細構成 (スケジュール、リソース、ネットワークポリシー)</p></li>
<li><p>OpenTelemetry: トレース、メトリクス、ログ</p></li>
<li><p>Prometheus メトリクスと Grafana ダッシュボード</p></li>
<li><p>_管理 CLI (kcadm.sh) の習得</p></li>
<li><p>バックアップ/復元戦略とトラブルシューティング</p></li>
</ul>