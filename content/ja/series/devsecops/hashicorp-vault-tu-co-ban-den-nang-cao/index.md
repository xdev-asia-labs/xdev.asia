---
id: 019d8b30-b200-7001-c002-e0c5f8200001
title: HashiCorp Vault の基本から上級まで
slug: hashicorp-vault-tu-co-ban-den-nang-cao
description: HashiCorp Vault コースは基本から上級まで包括的で、シークレット管理、サービスとしての暗号化、動的資格情報、および ID ベースのセキュリティを習得するのに役立ちます。 Secrets Engine (KV、PKI、Transit、Database、AWS、SSH)、Auth Methods (Token、Userpass、AppRole、LDAP、OIDC、Kubernetes)、ポリシーのインストールと構成から、統合ストレージ (Raft)、高可用性、自動アンシール、Vault Agent、Vault Secrets Operator、エンタープライズ機能 (名前空間、Sentinel、レプリケーション、DR)、モニタリングと運用などの高度なトピックまで操作。 SPIFFE 認証、MFA TOTP 自己登録、KV v2 バージョン アトリビューション、エンタープライズ セキュリティのベスト プラクティスを含む、Vault 1.21.x (最新バージョン 2026) に更新されました。
featured_image: uploads/2026/03/vault-series-banner-2026.png
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
published_at: '2026-03-30T12:00:00.000000Z'
created_at: '2026-03-30T12:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019c9617-faa6-70d6-8679-ee4de1f177b3
  name: DevSecOps
  slug: devsecops
tags:
- name: Vault
  slug: vault
- name: HashiCorp
  slug: hashicorp
- name: secret-management
  slug: secret-management
- name: encryption
  slug: encryption
- name: PKI
  slug: pki
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
- name: IAM
  slug: iam
- name: zero-trust
  slug: zero-trust
sections:
- id: section-01
  title: 'パート 1: HashiCorp Vault プラットフォーム'
  description: Vault、インストール、初期化、シール/シール解除、Dev Server、および基本的な CLI の紹介
  sort_order: 1
  lessons:
  - id: 019d8b30-b201-7001-c002-e0c5f8200101
    title: 'レッスン 1: HashiCorp Vault の紹介 - エンタープライズにおけるシークレット管理'
    slug: bai-1-gioi-thieu-hashicorp-vault-secret-management-trong-enterprise
    description: HashiCorp Vault とは何か、一元的なシークレット管理が必要な理由、Vault アーキテクチャ (ストレージ バックエンド、バリア、シークレット エンジン、認証方法、監査デバイス、システム バックエンド)、AWS Secrets Manager/Azure Key Vault/Google Secret Manager との比較、実際の使用例について学びます。 Vault 1.21.x の概要。
    duration_minutes: 90
    is_free: true
    sort_order: 1
    video_url: null
  - id: 019d8b30-b202-7001-c002-e0c5f8200102
    title: 'レッスン 2: Vault のインストール - スタンドアロン、Docker、Kubernetes'
    slug: bai-2-cai-dat-vault-standalone-docker-va-kubernetes
    description: Linux (Ubuntu/CentOS)、macOS、Docker Compose、および Kubernetes Helm チャートに Vault 1.21.x をインストールする手順。ストレージ バックエンド (統合ストレージ、ファイル、Consul)、リスナー (TCP、TLS) を構成し、開発サーバーと運用モードで Vault を実行します。ボールトの初期化 (ボールト オペレーターの初期化)、シール/シール解除ワークフロー、およびルート トークンの管理。
    duration_minutes: 150
    is_free: true
    sort_order: 2
    video_url: null
  - id: 019d8b30-b203-7001-c002-e0c5f8200103
    title: 'レッスン 3: Vault CLI、API、および Web UI'
    slug: bai-3-vault-cli-api-va-web-ui
    description: Vault CLI (vault read、write、list、delete、kv、auth、secrets、policy、operator)、環境変数 (VAULT_ADDR、VAULT_TOKEN、VAULT_NAMESPACE)、Vault HTTP RESTful API、cURL、および SDK クライアント (Go、Python、Java、Node.js) について理解します。 Vault Web UI の概要、インターフェイスを介したシークレットのナビゲーションおよび管理。
    duration_minutes: 120
    is_free: true
    sort_order: 3
    video_url: null
  - id: 019d8b30-b204-7001-c002-e0c5f8200104
    title: 'レッスン 4: 封印/封印解除、自動封印解除、および回復キー'
    slug: bai-4-seal-unseal-auto-unseal-va-recovery-keys
    description: Vault のシール/シール解除メカニズム、Shamir 秘密共有、キー共有、およびキーしきい値を深く理解します。 AWS KMS、Azure Key Vault、GCP Cloud KMS、Transit (Vault-to-Vault)、HSM (PKCS#11) による自動解除。回復キー、キーの再生成 (ボールト オペレーターのキーの再生成)、キーのローテーション、およびシールの移行。
    duration_minutes: 150
    is_free: true
    sort_order: 4
    video_url: null
  - id: 019d8b30-b205-7001-c002-e0c5f8200105
    title: 'レッスン 5: トークン、リース、更新'
    slug: bai-5-tokens-leases-va-renewal
    description: トークン タイプ (サービス トークン、バッチ トークン)、トークン階層と孤立トークン、トークン アクセサー、トークン ロール、定期トークン、トークン TTL および最大 TTL。リースの概念、リース期間、リースの更新 (ボールト リースの更新)、リースの取り消し (ボールト リースの取り消し)、およびプレフィックス ベースの取り消し。 Cubbyhole レスポンス ラッピングによる安全なシークレット配布。
    duration_minutes: 150
    is_free: true
    sort_order: 5
    video_url: null
- id: section-02
  title: 'パート 2: Secrets Engine - シークレットの管理'
  description: KV シークレット エンジン、動的シークレット、PKI、トランジット、データベース、AWS、SSH、TOTP
  sort_order: 2
  lessons:
  - id: 019d8b30-b206-7001-c002-e0c5f8200106
    title: 'レッスン 6: KV シークレット エンジン - 静的シークレット管理'
    slug: bai-6-kv-secrets-engine-static-secrets-management
    description: KV v1 と KV v2 の詳細な比較、KV Secrets Engine の有効化/構成、CRUD 操作 (put、get、delete、undelete、destroy)、バージョン管理、メタデータ管理、KV v2 バージョン属性 (1.21 の新機能)、チェック アンド セット (CAS)、カスタム メタデータ、論理的な削除と完全な削除、パッチ操作、および KV v1 から v2 への移行。
    duration_minutes: 150
    is_free: true
    sort_order: 6
    video_url: null
  - id: 019d8b30-b207-7001-c002-e0c5f8200107
    title: 'レッスン 7: データベース シークレット エンジン - 動的認証情報'
    slug: bai-7-database-secrets-engine-dynamic-credentials
    description: Database Secrets Engine のコンセプト、PostgreSQL、MySQL、MongoDB、MSSQL、Oracle の接続構成。動的ロールと作成ステートメント、自動パスワードローテーションを備えた静的ロール、ルート認証情報ローテーション、TTL 管理、認証情報ライブラリ (Vault 1.21 以降)、実際のアプリケーションとの統合 (Spring Boot、Node.js、Python)。
    duration_minutes: 200
    is_free: true
    sort_order: 7
    video_url: null
  - id: 019d8b30-b208-7001-c002-e0c5f8200108
    title: 'レッスン 8: PKI シークレット エンジン - 認証局'
    slug: bai-8-pki-secrets-engine-certificate-authority
    description: PKI Secrets Engine の詳細、ルート CA および中間 CA の作成、証明書の役割、証明書の発行/署名、証明書失効 (CRL、OCSP)、自動ローテーション、相互署名、ACME プロトコルのサポート、PKI 証明書カウンター (1.21 の新機能)、統合 CRL/OCSP、証明書マネージャー (Kubernetes) との Vault PKI 統合、マイクロサービス用の Nginx、HAProxy、および mTLS。
    duration_minutes: 220
    is_free: true
    sort_order: 8
    video_url: null
  - id: 019d8b30-b209-7001-c002-e0c5f8200109
    title: 'レッスン 9: Transit Secrets エンジン - サービスとしての暗号化'
    slug: bai-9-transit-secrets-engine-encryption-as-a-service
    description: Transit Secrets Engine の概念、暗号化キーの作成/管理、暗号化/復号化操作、キーのローテーションと再ラップ、キーの種類 (aes256-gcm96、chacha20-poly1305、ed25519、ecdsa-p256、rsa-2048、rsa-4096)、HMAC、署名/検証、データキー生成 (datakey)、集中暗号化、バッチ操作、BYOK (Bring Your Own Key) を使用し、保存時の暗号化のために Transit をアプリケーションと統合します。
    duration_minutes: 180
    is_free: true
    sort_order: 9
    video_url: null
  - id: 019d8b30-b210-7001-c002-e0c5f8200110
    title: 'レッスン 10: AWS、Azure、GCP、およびクラウド シークレット エンジン'
    slug: bai-10-aws-azure-gcp-va-cloud-secrets-engines
    description: AWS Secrets Engine (IAM ユーザー、STS AssumeRole、STS Federation Token)、Azure Secrets Engine (サービス プリンシパルの動的認証情報、1.21 の静的ロール)、GCP Secrets Engine (サービス アカウント キー、OAuth2 アクセス トークン)、クラウド認証情報のローテーション、リース管理、マルチクラウド シークレット管理のベスト プラクティス。
    duration_minutes: 200
    is_free: true
    sort_order: 10
    video_url: null
- id: section-03
  title: 'パート 3: 認証方法 - 認証と認可'
  description: Token, Userpass, AppRole, LDAP, OIDC, Kubernetes, SPIFFE, MFA
  sort_order: 3
  lessons:
  - id: 019d8b30-b211-7001-c002-e0c5f8200111
    title: 'レッスン 11: 基本的な認証方法 - トークン、ユーザーパス、および AppRole'
    slug: bai-11-auth-methods-co-ban-token-userpass-va-approle
    description: Auth Methods overview, Token Auth Method (root tokens, create tokens), Userpass Auth Method (CRUD users, password policies), AppRole Auth Method (RoleID, SecretID, CIDR binding, secret_id_num_uses), response wrapping cho SecretID, AppRole best practices cho CI/CD pipelines (Jenkins, GitLab CI, GitHub Actions).
    duration_minutes: 200
    is_free: true
    sort_order: 11
    video_url: null
  - id: 019d8b30-b212-7001-c002-e0c5f8200112
    title: 'レッスン 12: LDAP、OIDC、および JWT 認証方法'
    slug: bai-12-ldap-oidc-va-jwt-auth-methods
    description: LDAP Auth Method (configuration of LDAP/Active Directory, group mapping, policies), OIDC Auth Method (configuration with Keycloak, Azure AD, Okta, Google), JWT Auth Method (for CI/CD — GitHub Actions OIDC, GitLab CI JWT), Bound claims, Claim mappings, allowed_redirect_uris, OIDC Provider configuration in Vault and use cases for human対マシン認証。
    duration_minutes: 200
    is_free: true
    sort_order: 12
    video_url: null
  - id: 019d8b30-b213-7001-c002-e0c5f8200113
    title: 'レッスン 13: Kubernetes、AWS、およびクラウドの認証方法'
    slug: bai-13-kubernetes-aws-va-cloud-auth-methods
    description: Kubernetes 認証方法 (サービス アカウント トークン レビュー、バインドされた名前空間、バインドされたサービス アカウント)、AWS 認証方法 (IAM 認証、EC2 認証、クロスアカウント)、Azure 認証方法 (マネージド ID、サービス プリンシパル)、GCP 認証方法 (IAM、GCE)、SPIFFE 認証方法 (1.21 の新機能 — SVID ベースの認証)、および ID ワークロードのベスト プラクティス。
    duration_minutes: 200
    is_free: true
    sort_order: 13
    video_url: null
  - id: 019d8b30-b214-7001-c002-e0c5f8200114
    title: 'レッスン 14: ポリシー - ACL、Sentinel、RBAC'
    slug: bai-14-policies-acl-sentinel-va-rbac
    description: ボールト ポリシー システム、HCL ポリシー構文、パスベースのポリシー、機能 (作成、読み取り、更新、削除、リスト、sudo、拒否)、ポリシー テンプレート (アイデンティティ パラメーター)、きめ細かい制御 (allowed_pa​​rameters、denieed_pa​​rameters、min_wrapping_ttl、max_wrapping_ttl、required_pa​​rameters)、デフォルト ポリシー、ルート ポリシー、エンティティ/グループ ポリシー。 Sentinel ポリシー (エンタープライズ) — エンドポイント管理ポリシー (EGP)、ロール管理ポリシー (RGP)、Sentinel のインポートおよびテスト。
    duration_minutes: 220
    is_free: true
    sort_order: 14
    video_url: null
  - id: 019d8b30-b215-7001-c002-e0c5f8200115
    title: 'レッスン 15: ID シークレット エンジン、エンティティ、および MFA'
    slug: bai-15-identity-secrets-engine-entities-va-mfa
    description: ID シークレット エンジン、エンティティとエイリアス、エンティティ ポリシー、エンティティ メタデータ、内部グループと外部グループ、グループ エイリアス、アイデンティティ トークン (Vault の OIDC プロバイダー)。多要素認証 (MFA) — TOTP、Duo、Okta、PingID。 MFA TOTP 自己登録 (1.21 の新機能)、ログイン MFA とステップアップ MFA、および MFA 強制ポリシー。
    duration_minutes: 180
    is_free: true
    sort_order: 15
    video_url: null
- id: section-04
  title: 'パート 4: 高度なシークレット エンジン'
  description: SSH、TOTP、Transform、KMIP、Consul、Nomad、およびカスタム プラグイン
  sort_order: 4
  lessons:
  - id: 019d8b30-b216-7001-c002-e0c5f8200116
    title: 'レッスン 16: SSH シークレット エンジンと TOTP'
    slug: bai-16-ssh-secrets-engine-va-totp
    description: SSH Secrets Engine — 署名付き SSH 証明書 (CA モード)、ワンタイム パスワード (OTP モード)、ssh ヘルパー設定、認証局の設定、許可されたユーザー/内線番号、ホスト キーの署名。 TOTP Secrets Engine — TOTP コードを生成/検証し、2FA ワークフローと統合します。 LDAP Secrets Engine — 動的 LDAP 資格情報、RACF パスフレーズのサポート (1.21 の新機能)、静的ロール、サービス アカウント管理。
    duration_minutes: 180
    is_free: true
    sort_order: 16
    video_url: null
  - id: 019d8b30-b217-7001-c002-e0c5f8200117
    title: 'レッスン 17: 変換とトークン化 - データ保護'
    slug: bai-17-transform-va-tokenization-data-protection
    description: Transform Secrets Engine (エンタープライズ) — フォーマット保持暗号化 (FPE)、マスキング、トークン化。テンプレート、アルファベット、変換、役割の構成。トークン化ストア - 内部および外部。 PCI DSS 準拠、PII 保護、SSN/クレジット カード マスキングの使用例。 Transit と Transform を比較します。いつどちらを使用するか、データベース ビューとの統合を検討します。
    duration_minutes: 180
    is_free: true
    sort_order: 17
    video_url: null
  - id: 019d8b30-b218-7001-c002-e0c5f8200118
    title: 'レッスン 18: KMIP、Consul、Nomad Secrets エンジンおよびカスタム プラグイン'
    slug: bai-18-kmip-consul-nomad-secrets-engines-va-custom-plugins
    description: KMIP Secrets Engine — キー管理相互運用性プロトコル、データベースおよびストレージ システムとの統合。 Consul Secrets Engine — 動的 Consul ACL トークン。 Nomad Secrets Engine — 動的な Nomad ACL トークン。 Vault プラグイン システム — プラグイン アーキテクチャ、プラグイン カタログ、厳選されたプラグイン レジストリ、Go を使用したカスタム シークレット エンジンと認証方法の開発、プラグインの多重化、およびバージョン管理されたプラグイン。
    duration_minutes: 180
    is_free: true
    sort_order: 18
    video_url: null
- id: section-05
  title: 'パート 5: Vault Agent、プロキシ、および Kubernetes の統合'
  description: Vault Agent, Vault Proxy, Secrets Operator, CSI Provider, Agent Injector
  sort_order: 5
  lessons:
  - id: 019d8b30-b219-7001-c002-e0c5f8200119
    title: 'レッスン 19: Vault Agent と Vault Proxy'
    slug: bai-19-vault-agent-va-vault-proxy
    description: Vault Agent の概要、自動認証方法、テンプレート レンダリング (Consul テンプレート構文)、ファイル シンク、環境変数テンプレート、プロセス スーパーバイザー、エージェント キャッシュ、エージェント API プロキシ。 Vault プロキシ — API プロキシ モード、キャッシュ構成、静的シークレット キャッシュ、自動認証委任。エージェントとプロキシの比較 - どちらをいつ使用するか、systemd、Docker サイドカー、および init コンテナを使用したデプロイメント パターン。
    duration_minutes: 200
    is_free: true
    sort_order: 19
    video_url: null
  - id: 019d8b30-b220-7001-c002-e0c5f8200120
    title: 'レッスン 20: Kubernetes 上の Vault - ヘルム、オペレーター、および CSI'
    slug: bai-20-vault-tren-kubernetes-helm-operator-va-csi
    description: Helm チャート (スタンドアロン、HA、開発、外部)、Vault Secrets オペレーター (VaultAuth、VaultStaticSecret、VaultDynamicSecret、VaultPKISecret CR)、Vault CSI プロバイダー (SecretProviderClass)、Vault Agent Injector (アノテーション、テンプレート、init とサイドカー) を使用して Kubernetes に Vault をデプロイします。 VSO CSI ドライバー (1.21 の新機能) で保護されたシークレット。 VSO、CSI、Agent Injector を比較し、Kubernetes ネイティブのシークレット管理のベスト プラクティスを比較します。
    duration_minutes: 220
    is_free: true
    sort_order: 20
    video_url: null
- id: section-06
  title: 'パート 6: 実際のアプリケーションの統合'
  description: Vault を Spring Boot、Node.js、Terraform、Ansible、CI/CD と統合する
  sort_order: 6
  lessons:
  - id: 019d8b30-b221-7001-c002-e0c5f8200121
    title: 'レッスン 21: Vault と Spring Boot および Node.js の統合'
    slug: bai-21-tich-hop-vault-voi-spring-boot-va-nodejs
    description: Spring Cloud Vault の統合、Spring Boot Vault の自動構成、PropertySource バインディング、データベース資格情報のローテーション、Java でのトランジット暗号化。 Node.js とノードボルト クライアント、hvac (Python)、Vault Go SDK。アプリケーション パターン — 直接 API、Vault Agent サイドカー、環境変数インジェクション、CSI ボリューム マウント。シークレットゼロの問題と解決策。
    duration_minutes: 200
    is_free: true
    sort_order: 21
    video_url: null
  - id: 019d8b30-b222-7001-c002-e0c5f8200122
    title: 'レッスン 22: Terraform、Ansible、CI/CD パイプラインを使用した Vault'
    slug: bai-22-vault-voi-terraform-ansible-va-cicd-pipelines
    description: Terraform Vault Provider — コードとして Vault 構成を管理します (シークレット エンジン、認証方法、ポリシー、エンティティ)。 Ansible Vault ルックアップ プラグインとモジュール。 CI/CD 統合 — GitHub Actions (OIDC + JWT 認証)、GitLab CI (JWT 認証)、Jenkins (AppRole、Vault プラグイン)、ArgoCD Vault プラグイン。 GitOps ワークフローの Vault と外部シークレット オペレーター。
    duration_minutes: 200
    is_free: true
    sort_order: 22
    video_url: null
- id: section-07
  title: 'パート 7: 生産、エンタープライズ、および運用'
  description: HA、レプリケーション、ネームスペース、モニタリング、監査、バックアップ/復元、トラブルシューティング
  sort_order: 7
  lessons:
  - id: 019d8b30-b223-7001-c002-e0c5f8200123
    title: 'レッスン 23: 高可用性、統合ストレージ、および本番環境の強化'
    slug: bai-23-high-availability-integrated-storage-va-production-hardening
    description: Integrated Storage (Raft) の詳細 - クラスターのセットアップ、retry_join、node_id、オートパイロット (サーバーの安定化、デッドサーバーのクリーンアップ、自動アップグレード)、Raft スナップショット、WAL ログストア。 HA アーキテクチャ — アクティブ/スタンバイ/パフォーマンス スタンバイ ノード、リーダーの選択。本番環境の強化 — どこでも TLS、mlock、ファイル権限、リスナー設定、テレメトリ エンドポイント、エンドツーエンド TLS、非 root ユーザー、systemd 強化、およびセキュリティ チェックリスト。
    duration_minutes: 240
    is_free: true
    sort_order: 23
    video_url: null
  - id: 019d8b30-b224-7001-c002-e0c5f8200124
    title: 'レッスン 24: Vault Enterprise - ネームスペース、レプリケーション、および DR'
    slug: bai-24-vault-enterprise-namespaces-replication-va-dr
    description: Vault Enterprise 機能の概要、ネームスペース (マルチテナンシー、階層、ネームスペース制限)、パフォーマンス レプリケーション (プライマリ/セカンダリ クラスター、マウント フィルター、パス フィルター)、ディザスター リカバリー レプリケーション (DR プライマリ/セカンダリ、フェイルオーバー、プロモーション)、センチネル ポリシー (EGP/RGP)、コントロール グループ、ライセンス管理、パフォーマンス スタンバイ ノード、シール ラップ (FIPS 140-2)、エントロピー拡張およびエンタープライズ アップグレード戦略。
    duration_minutes: 240
    is_free: true
    sort_order: 24
    video_url: null
  - id: 019d8b30-b225-7001-c002-e0c5f8200125
    title: 'レッスン 25: 監視、監査ログ、バックアップ/復元、およびトラブルシューティング'
    slug: bai-25-monitoring-audit-logging-backup-restore-va-troubleshooting
    description: 監査デバイス (ファイル、Syslog、ソケット) - 構成、形式 (JSON、JSONx)、HMAC 監査ログ、監査ログ フィルタリング。テレメトリ — Prometheus メトリクス、StatsD、DogStatsD、Grafana ダッシュボード、主要なメトリクス (vault.core.handle_request、vault.expire.num_leases、vault.runtime.alloc_bytes)。 OpenTelemetry トレース (新規)。バックアップ戦略 — Raft スナップショット (自動、オンデマンド)、シークレットリカバリ (1.21 の新機能)。トラブルシューティング - 一般的な問題、デバッグ ログ、Vault デバッグ コマンド、サーバー ログ分析、Runbook の作成。
    duration_minutes: 240
    is_free: true
    sort_order: 25
    video_url: null
reviews: []
quizzes: []
locale: ja
---
<h2><strong>パート 1: HashiCorp Vault プラットフォーム</strong></h2>
<h3>レッスン 1: HashiCorp Vault の紹介 - エンタープライズにおけるシークレット管理</h3>
<ul>
<li><p>HashiCorp Vault とは何ですか?開発履歴 (HashiCorp から CNCF まで)</p></li>
<li><p>一元的な秘密管理が必要なのはなぜですか?</p></li>
<li><p>Vault アーキテクチャ: ストレージ バックエンド、バリア、シークレット エンジン、認証方法、監査デバイス</p></li>
<li><p>Vault と AWS Secrets Manager と Azure Key Vault と Google Secret Manager を比較</p></li>
<li><p>ユースケース: 静的シークレット、動的資格情報、サービスとしての暗号化、PKI、SSH</p></li>
</ul>
<h3>レッスン 2: Vault のインストール - スタンドアロン、Docker、および Kubernetes</h3>
<ul>
<li><p>Ubuntu/CentOS に Vault をインストールする (パッケージ マネージャー)</p></li>
<li><p>Docker および Docker Compose を使用して Vault を実行する</p></li>
<li><p>Kubernetes Helm chart deployment</p></li>
<li><p>ストレージ バックエンドの構成 (統合ストレージ、ファイル、Consul)</p></li>
<li><p>Dev Server vs Production Mode</p></li>
<li><p>Vault の初期化 (オペレーター初期化)、シール/シール解除ワークフロー</p></li>
</ul>
<h3>レッスン 3: Vault CLI、API、Web UI</h3>
<ul>
<li><p>Vault CLI commands (read, write, list, delete, kv, auth, secrets, policy, operator)</p></li>
<li><p>Environment variables (VAULT_ADDR, VAULT_TOKEN, VAULT_NAMESPACE)</p></li>
<li><p>Vault HTTP API, cURL examples</p></li>
<li><p>SDK clients (Go, Python, Java, Node.js)</p></li>
<li><p>Vault Web UI の概要とナビゲーション</p></li>
</ul>
<h3>レッスン 4: 封印/封印解除、自動封印解除および回復キー</h3>
<ul>
<li><p>シール/シール解除メカニズムとシャミール秘密共有</p></li>
<li><p>Key Shares, Key Threshold, Master Key</p></li>
<li><p>Auto-unseal (AWS KMS, Azure Key Vault, GCP Cloud KMS, Transit, HSM)</p></li>
<li><p>回復キーとキーの再生成 (オペレーターによるキーの再生成)</p></li>
<li><p>キーのローテーションとシールの移行</p></li>
</ul>
<h3>レッスン 5: トークン、リース、更新</h3>
<ul>
<li><p>Token types: Service tokens, Batch tokens</p></li>
<li><p>Token hierarchy, Orphan tokens, Token accessors</p></li>
<li><p>トークンの役割、定期トークン、TTL および最大 TTL</p></li>
<li><p>Lease concept, Lease renewal, Lease revocation</p></li>
<li><p>Cubbyhole Response Wrapping</p></li>
</ul>

<h2><strong>パート 2: シークレット エンジン - シークレットの管理</strong></h2>
<h3>レッスン 6: KV シークレット エンジン - 静的シークレット管理</h3>
<ul>
<li><p>KV v1 と KV v2 の詳細な比較</p></li>
<li><p>Enable/Configure KV Secrets Engine</p></li>
<li><p>CRUD operations, versioning, metadata</p></li>
<li><p>KV v2 version attribution (Vault 1.21)</p></li>
<li><p>Check-and-set (CAS), soft delete, patch operations</p></li>
</ul>
<h3>レッスン 7: データベース シークレット エンジン - 動的資格情報</h3>
<ul>
<li><p>Database Secrets Engine concept</p></li>
<li><p>接続の構成: PostgreSQL、MySQL、MongoDB、MSSQL</p></li>
<li><p>動的ロールと静的ロール</p></li>
<li><p>Root credential rotation</p></li>
<li><p>Tích hợp với ứng dụng thực tế</p></li>
</ul>
<h3>レッスン 8: PKI シークレット エンジン - 認証局</h3>
<ul>
<li><p>ルート CA と中間 CA の作成</p></li>
<li><p>Certificate roles, Issue/Sign certificates</p></li>
<li><p>CRL, OCSP, Auto-rotation, ACME protocol</p></li>
<li><p>PKI certificate counter (Vault 1.21)</p></li>
<li><p>cert-manager、Nginx、mTLS との統合</p></li>
</ul>
<h3>レッスン 9: トランジット シークレット エンジン - サービスとしての暗号化</h3>
<ul>
<li><p>Encryption/Decryption operations</p></li>
<li><p>キーの管理とローテーション</p></li>
<li><p>Key types, HMAC, Sign/Verify</p></li>
<li><p>Data key generation, Convergent encryption</p></li>
<li><p>BYOK およびバッチ操作</p></li>
</ul>
<h3>レッスン 10: AWS、Azure、GCP、およびクラウド シークレット エンジン</h3>
<ul>
<li><p>AWS Secrets Engine (IAM, STS AssumeRole)</p></li>
<li><p>Azure Secrets Engine (Static roles trong 1.21)</p></li>
<li><p>GCP Secrets Engine (Service Account, OAuth2)</p></li>
<li><p>Multi-cloud secret management best practices</p></li>
</ul>

<h2><strong>パート 3: 認証方法 - 認証と認可</strong></h2>
<h3>レッスン 11: 基本的な認証方法 - トークン、ユーザーパス、AppRole</h3>
<ul>
<li><p>Token Auth Method, Root tokens</p></li>
<li><p>Userpass Auth Method, Password policies</p></li>
<li><p>AppRole (RoleID, SecretID, CIDR binding)</p></li>
<li><p>Response wrapping cho SecretID</p></li>
<li><p>AppRole cho CI/CD pipelines</p></li>
</ul>
<h3>レッスン 12: LDAP、OIDC、および JWT 認証方法</h3>
<ul>
<li><p>LDAP Auth Method (Active Directory integration)</p></li>
<li><p>OIDC Auth Method (Keycloak, Azure AD, Okta)</p></li>
<li><p>JWT Auth Method (GitHub Actions OIDC, GitLab CI)</p></li>
<li><p>Bound claims, Claim mappings</p></li>
</ul>
<h3>レッスン 13: Kubernetes、AWS、およびクラウドの認証方法</h3>
<ul>
<li><p>Kubernetes Auth Method (Service Account token review)</p></li>
<li><p>AWS Auth Method (IAM, EC2)</p></li>
<li><p>Azure, GCP Auth Methods</p></li>
<li><p>SPIFFE 認証方法 (1.21 の新機能)</p></li>
<li><p>Workload identity best practices</p></li>
</ul>
<h3>レッスン 14: ポリシー - ACL、Sentinel、RBAC</h3>
<ul>
<li><p>HCL policy syntax, Path-based policies</p></li>
<li><p>Capabilities (create, read, update, delete, list, sudo, deny)</p></li>
<li><p>Policy templates (identity parameters)</p></li>
<li><p>Fine-grained control (allowed_parameters, denied_parameters)</p></li>
<li><p>Sentinel policies (Enterprise) — EGP, RGP</p></li>
</ul>
<h3>レッスン 15: ID シークレット エンジン、エンティティ、および MFA</h3>
<ul>
<li><p>ID シークレット エンジン、エンティティ、およびエイリアス</p></li>
<li><p>Internal Groups vs External Groups</p></li>
<li><p>Identity Tokens (OIDC provider)</p></li>
<li><p>MFA — TOTP, Duo, Okta, PingID</p></li>
<li><p>MFA TOTP self-enrollment (Vault 1.21)</p></li>
</ul>

<h2><strong>パート 4: 高度なシークレット エンジン</strong></h2>
<h3>レッスン 16: SSH シークレット エンジンと TOTP</h3>
<ul>
<li><p>SSH Signed Certificates (CA mode)</p></li>
<li><p>SSH One-Time Password (OTP mode)</p></li>
<li><p>Host key signing, allowed users/extensions</p></li>
<li><p>TOTP Secrets Engine</p></li>
<li><p>LDAP Secrets Engine (RACF passphrase support 1.21)</p></li>
</ul>
<h3>レッスン 17: 変換とトークン化 - データ保護</h3>
<ul>
<li><p>Transform Secrets Engine (Enterprise)</p></li>
<li><p>Format Preserving Encryption (FPE), Masking</p></li>
<li><p>Tokenization stores (internal, external)</p></li>
<li><p>PCI DSS compliance, PII protection</p></li>
<li><p>Transit と Transform — どちらを使用するか</p></li>
</ul>
<h3>レッスン 18: KMIP、Consul、Nomad Secrets エンジンおよびカスタム プラグイン</h3>
<ul>
<li><p>KMIP Secrets Engine (Key Management Interoperability Protocol)</p></li>
<li><p>Consul および Nomad Secrets エンジン</p></li>
<li><p>Vault プラグイン システムとプラグイン カタログ</p></li>
<li><p>Developing custom secrets engines/auth methods (Go)</p></li>
<li><p>プラグインの多重化とバージョン管理されたプラグイン</p></li>
</ul>

<h2><strong>パート 5: Vault Agent、プロキシ、および Kubernetes の統合</strong></h2>
<h3>レッスン 19: Vault Agent と Vault Proxy</h3>
<ul>
<li><p>Vault Agent: Auto-auth, Template rendering, File sink</p></li>
<li><p>Agent caching, Process supervisor</p></li>
<li><p>Vault Proxy: API proxy mode, Static secret caching</p></li>
<li><p>エージェントとプロキシ — いつどちらを使用するか</p></li>
<li><p>Deployment patterns (systemd, Docker sidecar)</p></li>
</ul>
<h3>レッスン 20: Kubernetes 上の Vault - Helm、Operator、CSI</h3>
<ul>
<li><p>Helm チャートを使用した Vault のデプロイ (スタンドアロン、HA、外部)</p></li>
<li><p>Vault Secrets Operator (VaultAuth, VaultStaticSecret, VaultDynamicSecret)</p></li>
<li><p>Vault CSI Provider (SecretProviderClass)</p></li>
<li><p>Vault Agent Injector (annotations, templates)</p></li>
<li><p>VSO vs CSI vs Agent Injector comparison</p></li>
</ul>

<h2><strong>パート 6: 実用的なアプリケーションの統合</strong></h2>
<h3>レッスン 21: Vault と Spring Boot および Node.js の統合</h3>
<ul>
<li><p>Spring Cloud Vault integration</p></li>
<li><p>Database credential rotation trong Java</p></li>
<li><p>Node.js とノードボルト、Python hvac</p></li>
<li><p>Application patterns: direct API, sidecar, env vars, CSI</p></li>
<li><p>秘密ゼロの問題と解決策</p></li>
</ul>
<h3>レッスン 22: Terraform、Ansible、CI/CD パイプラインを使用した Vault</h3>
<ul>
<li><p>Terraform Vault Provider (Infrastructure as Code)</p></li>
<li><p>Ansible Vault lookup plugin</p></li>
<li><p>GitHub Actions OIDC, GitLab CI JWT auth</p></li>
<li><p>Jenkins AppRole integration</p></li>
<li><p>ArgoCD Vault Plugin, External Secrets Operator</p></li>
</ul>

<h2><strong>パート 7: 本番、エンタープライズ、運用</strong></h2>
<h3>レッスン 23: 高可用性、統合ストレージおよび本番環境の強化</h3>
<ul>
<li><p>Integrated Storage (Raft) cluster setup</p></li>
<li><p>Autopilot, Raft snapshots, WAL log store</p></li>
<li><p>HA: active/standby/performance standby</p></li>
<li><p>Production hardening: TLS, mlock, systemd, security checklist</p></li>
</ul>
<h3>レッスン 24: Vault Enterprise - ネームスペース、レプリケーション、および DR</h3>
<ul>
<li><p>Namespaces (multi-tenancy)</p></li>
<li><p>Performance Replication, Disaster Recovery</p></li>
<li><p>Sentinel policies (EGP/RGP)</p></li>
<li><p>Control Groups, Seal Wrap, Entropy Augmentation</p></li>
<li><p>ライセンス管理とエンタープライズアップグレード</p></li>
</ul>
<h3>レッスン 25: 監視、監査ログ、バックアップ/復元、およびトラブルシューティング</h3>
<ul>
<li><p>Audit Devices (File, Syslog, Socket)</p></li>
<li><p>Prometheus metrics, Grafana dashboards</p></li>
<li><p>OpenTelemetry tracing</p></li>
<li><p>Raft snapshots, Secret recovery (Vault 1.21)</p></li>
<li><p>Troubleshooting, vault debug, production runbook</p></li>
</ul>
