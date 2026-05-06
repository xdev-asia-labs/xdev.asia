---
id: 019e1a40-a100-7001-d001-f0a1b2c30001
title: マイクロサービス ヘルスケア システムの構築 — HIPAA 標準を備えた Quarkus、PostgreSQL、Keycloak
slug: xay-dung-he-thong-y-te-microservices
description: >-
  Quarkus、PostgreSQL、Keycloak を使用したマイクロサービス アーキテクチャで医療情報システム (HIS/EMR/LIS)
  を構築するためのステップバイステップの手順。 HIPAA、HL7
  FHIR、ゼロトラストのセキュリティ標準に準拠。アーキテクチャ設計、サービスの構築、分散化、データ暗号化、監査ロギングから、Kubernetes
  での実稼働デプロイメントまで。各記事には実践的なコードが含まれており、病院や医療施設にすぐに適用できます。
featured_image: uploads/2026/04/xay-dung-he-thong-y-te-microservices-banner.png
level: intermediate
duration_hours: 75
lesson_count: 24
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-04-03T08:00:00.000000Z'
created_at: '2026-04-03T08:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019d8a21-b200-7001-c001-a1b2c3d4e5f6
  name: システムアーキテクチャ
  slug: kien-truc-he-thong
tags:
  - name: Healthcare
    slug: healthcare
  - name: Quarkus
    slug: quarkus
  - name: PostgreSQL
    slug: postgresql
  - name: Keycloak
    slug: keycloak
  - name: Microservices
    slug: microservices
  - name: HIPAA
    slug: hipaa
  - name: Security
    slug: security
  - name: HL7 FHIR
    slug: hl7-fhir
  - name: Docker
    slug: docker
  - name: kubernetes
    slug: kubernetes
  - name: Java
    slug: java
  - name: HandsOn
    slug: handson
sections:
  - id: section-01
    title: 'パート 1: アーキテクチャとプラットフォーム'
    description: 医療システムの概要、マイクロサービス アーキテクチャ設計、データ分類、脅威モデリング
    sort_order: 1
    lessons:
      - id: 019e1a40-a101-7001-d001-f0a1b2c30101
        title: 'レッスン 1: 医療システムの概要とセキュリティ要件 — HIPAA、HL7 FHIR'
        slug: bai-1-tong-quan-he-thong-y-te-yeu-cau-bao-mat
        description: >-
          医療情報システム（HIS/EMR/LIS）、PHI/ePHIデータ、HIPAA規格、HL7
          FHIR、ベトナムサイバーセキュリティ法の概要を理解する。セキュリティ標準の医療システムを構築する際の要件を決定します。
        duration_minutes: 120
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019e1a40-a102-7001-d001-f0a1b2c30102
        title: 'レッスン 2: 医療向けのマイクロサービス アーキテクチャの設計 — Quarkus Stack ブループリント'
        slug: bai-2-thiet-ke-kien-truc-microservices-y-te
        description: >-
          Quarkus、PostgreSQL、Keycloak、Kafka
          を使用してマイクロサービス医療システムの全体的なアーキテクチャを設計します。 API ゲートウェイ、サービス メッシュ、ネットワーク
          セグメンテーション、DMZ 設計、HIS/EMR/LIS のアーキテクチャ ブループリント。
        duration_minutes: 150
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019e1a40-a103-7001-d001-f0a1b2c30103
        title: 'レッスン 3: 健康データ分類 (PHI/ePHI) とリスク評価'
        slug: bai-3-phan-loai-du-lieu-y-te-danh-gia-rui-ro
        description: >-
          機密レベルに従って医療データを分類し、NIST SP 800-30 に従ってデータ分類ポリシー、データ フロー
          マッピング、リスク評価を開発します。
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019e1a40-a104-7001-d001-f0a1b2c30104
        title: 'レッスン 4: 医療システム向けの STRIDE/DREAD の脅威モデリング'
        slug: bai-4-threat-modeling-stride-dread
        description: >-
          STRIDE、DREAD スコアリング、アタック
          ツリーをマイクロサービス医療システムに適用します。脅威モデルからセキュリティ要件を構築します。
        duration_minutes: 150
        is_free: true
        sort_order: 4
        video_url: null
  - id: section-02
    title: 'パート 2: Keycloak を使用した ID とアクセス管理'
    description: Keycloak、RBAC/ABAC 分散化、FHIR 上の SMART、MFA のセットアップ
    sort_order: 2
    lessons:
      - id: 019e1a40-a105-7001-d001-f0a1b2c30105
        title: 'レッスン 5: 病院用の Keycloak レルムのセットアップ — マルチテナント'
        slug: bai-5-setup-keycloak-realm-benh-vien
        description: >-
          複数の病院の医療システム用に Keycloak Realm を設計してセットアップします。 HIS/EMR/LIS、ユーザー
          プロファイル、患者ポータル、セッション管理、セキュリティ防御のクライアント構成。
        duration_minutes: 150
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019e1a40-a106-7001-d001-f0a1b2c30106
        title: 'レッスン 6: RBAC と ABAC の分散化 — 医師、看護師、患者'
        slug: bai-6-phan-quyen-rbac-abac
        description: >-
          ヘルスケア向けの RBAC/ABAC のデプロイ: ロール階層、部門ベースのアクセス、Keycloak
          認可サービス、ガラスを破る緊急アクセス。
        duration_minutes: 180
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019e1a40-a107-7001-d001-f0a1b2c30107
        title: 'レッスン 7: FHIR の SMART — ヘルスケア API 用の OAuth2/OIDC'
        slug: bai-7-smart-on-fhir-oauth2-oidc
        description: >-
          Keycloak を使用した FHIR への SMART のデプロイ: アプリ起動フレームワーク、FHIR スコープ、EHR
          起動とスタンドアロン起動、Quarkus 上の HAPI FHIR サーバーの統合。
        duration_minutes: 180
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019e1a40-a108-7001-d001-f0a1b2c30108
        title: 'レッスン 8: MFA、パスキー、医療従事者の緊急アクセス'
        slug: bai-8-mfa-passkeys-emergency-access
        description: '医療環境に適した MFA を実装します: TOTP、WebAuthn/パスキー、近接バッジ、条件付き MFA、緊急アクセス手順。'
        duration_minutes: 150
        is_free: true
        sort_order: 8
        video_url: null
  - id: section-03
    title: 'パート 3: データ層の構築 — ヘルスケア向け PostgreSQL'
    description: データベースの強化、暗号化、行レベルのセキュリティ、監査ログ
    sort_order: 3
    lessons:
      - id: 019e1a40-a109-7001-d001-f0a1b2c30109
        title: 'レッスン 9: PostgreSQL のセキュリティ強化 — 包括的な構成'
        slug: bai-9-postgresql-security-hardening
        description: >-
          医療データ用の PostgreSQL の強化: TLS、pg_hba.conf、ロール管理、スキーマ分離、CIS ベンチマーク
          コンプライアンス。
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019e1a40-a110-7001-d001-f0a1b2c30110
        title: 'レッスン 10: PostgreSQL を使用した保存中および転送中のデータの暗号化'
        slug: bai-10-ma-hoa-du-lieu-postgresql
        description: TDE、pgcrypto、SSL/TLS、HashiCorp Vault によるキー管理、医療データのエンベロープ暗号化。
        duration_minutes: 180
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019e1a40-a111-7001-d001-f0a1b2c30111
        title: 'レッスン 11: PHI の行レベルのセキュリティと列の暗号化'
        slug: bai-11-row-level-security-column-encryption
        description: >-
          患者データの分離、部門ベースのアクセス、列レベルの暗号化、Quarkus の Keycloak JWT との RLS 統合のための RLS
          ポリシー。
        duration_minutes: 180
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019e1a40-a112-7001-d001-f0a1b2c30112
        title: 'レッスン 12: pgAudit + Debezium を使用した監査ログと CDC'
        slug: bai-12-audit-logging-cdc-pgaudit
        description: pgAudit、Debezium による変更データ キャプチャ、不変監査証跡、監査ログからのコンプライアンス レポート。
        duration_minutes: 150
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-04
    title: 'パート 4: Quarkus を使用したマイクロサービスの構築'
    description: Quarkus OIDC、API Gateway、エンドツーエンド暗号化、mTLS サービス メッシュ
    sort_order: 4
    lessons:
      - id: 019e1a40-a113-7001-d001-f0a1b2c30113
        title: 'レッスン 13: Quarkus セキュリティ — OIDC、JWT 伝播、RBAC'
        slug: bai-13-quarkus-security-oidc-jwt-rbac
        description: >-
          Keycloak、ベアラートークン認証、JWT クレームベース認証、@RolesAllowed、サービス間のトークン伝播を使用した
          Quarkus OIDC 拡張機能。
        duration_minutes: 180
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019e1a40-a114-7001-d001-f0a1b2c30114
        title: 'レッスン 14: API ゲートウェイ — レート制限、検証、WAF'
        slug: bai-14-api-gateway-rate-limiting-waf
        description: >-
          医療向け API ゲートウェイ セキュリティ: Kong/APISIX、レート制限、JSON スキーマ検証、WAF ルール、API
          バージョン管理。
        duration_minutes: 150
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019e1a40-a115-7001-d001-f0a1b2c30115
        title: 'レッスン 15: マイクロサービスにおけるエンドツーエンドの暗号化'
        slug: bai-15-ma-hoa-end-to-end-microservices
        description: >-
          アプリケーション レベルの暗号化、エンベロープ暗号化、暗号化された Kafka、REST/gRPC のフィールド レベルの暗号化、キー
          ローテーション。
        duration_minutes: 180
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019e1a40-a116-7001-d001-f0a1b2c30116
        title: 'レッスン 16: mTLS、サービス メッシュ、およびサービス間通信'
        slug: bai-16-mtls-service-mesh
        description: >-
          Quarkus を使用した mTLS、Istio サービス メッシュ、cert-manager、Kubernetes
          NetworkPolicies、サービス間認証。
        duration_minutes: 150
        is_free: true
        sort_order: 16
        video_url: null
  - id: section-05
    title: 'パート 5: コンプライアンス、監査、データ保護'
    description: HIPAA 準拠、監査証跡、データマスキング、災害復旧
    sort_order: 5
    lessons:
      - id: 019e1a40-a117-7001-d001-f0a1b2c30117
        title: 'レッスン 17: HIPAA 技術的保護措置 — 実装チェックリスト'
        slug: bai-17-hipaa-technical-safeguards
        description: HIPAA 技術的安全対策の完全なチェックリスト。各要件を Quarkus/PostgreSQL/Keycloak 実装にマッピングします。
        duration_minutes: 180
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019e1a40-a118-7001-d001-f0a1b2c30118
        title: 'レッスン 18: 一元化された監査証跡 — OpenTelemetry と ELK スタック'
        slug: bai-18-audit-trail-opentelemetry-elk
        description: >-
          OpenTelemetry for Quarkus、分散トレーシング、構造化ログ、ELK スタック、不変ログ ストレージ、コンプライアンス
          ダッシュボード。
        duration_minutes: 150
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019e1a40-a119-7001-d001-f0a1b2c30119
        title: 'レッスン 19: データのマスキング、匿名化、匿名化'
        slug: bai-19-data-masking-anonymization
        description: HIPAA セーフハーバーの匿名化、k-匿名性、仮名化、トークン化、PostgreSQL ビュー、および Quarkus 応答フィルター。
        duration_minutes: 150
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019e1a40-a120-7001-d001-f0a1b2c30120
        title: 'レッスン 20: バックアップ、災害復旧、ビジネス継続性'
        slug: bai-20-backup-disaster-recovery
        description: 暗号化バックアップ、pgBackRest、PITR、クロスリージョン レプリケーション、RPO/RTO、ランサムウェア保護、DR テスト。
        duration_minutes: 150
        is_free: true
        sort_order: 20
        video_url: null
  - id: section-06
    title: 'パート 6: 生産と運用'
    description: ゼロトラスト、コンテナ/K8sセキュリティ、ペンテスト、運用環境の展開
    sort_order: 6
    lessons:
      - id: 019e1a40-a121-7001-d001-f0a1b2c30121
        title: 'レッスン 21: 医療システムのゼロトラスト アーキテクチャ'
        slug: bai-21-zero-trust-architecture
        description: 'ゼロトラストの導入: マイクロセグメンテーション、継続的検証、NIST SP 800-207、Keycloak + Istio + OPA。'
        duration_minutes: 180
        is_free: true
        sort_order: 21
        video_url: null
      - id: 019e1a40-a122-7001-d001-f0a1b2c30122
        title: 'レッスン 22: 医療向けのコンテナーと Kubernetes セキュリティ'
        slug: bai-22-container-kubernetes-security
        description: >-
          画像スキャン Trivy、ポッド セキュリティ標準、ネットワーク ポリシー、外部シークレット オペレーター、ランタイム セキュリティ
          Falco、SBOM。
        duration_minutes: 150
        is_free: true
        sort_order: 22
        video_url: null
      - id: 019e1a40-a123-7001-d001-f0a1b2c30123
        title: 'レッスン 23: 侵入テストとセキュリティ評価'
        slug: bai-23-penetration-testing
        description: >-
          OWASP ZAP、SAST/DAST、依存関係スキャン、PostgreSQL/Keycloak セキュリティ監査、API セキュリティ
          テスト、コンプライアンス レポート。
        duration_minutes: 150
        is_free: true
        sort_order: 23
        video_url: null
      - id: 019e1a40-a124-7001-d001-f0a1b2c30124
        title: 'レッスン 24: Capstone — 本番環境に対応したヘルスケア プラットフォームの導入'
        slug: bai-24-capstone-deploy-production
        description: >-
          包括的なプロジェクト: Quarkus + PostgreSQL + Keycloak 上の患者、予約、検査室、処方サービスなど、HIPAA
          に完全準拠した完全なヘルスケア マイクロサービス プラットフォームを Kubernetes 上にデプロイします。
        duration_minutes: 300
        is_free: true
        sort_order: 24
        video_url: null
locale: ja
---

## はじめに

**マイクロサービス ヘルスケア システムの構築**は、**Quarkus** (Java)、**PostgreSQL**、**Keycloak** を使用し、**マイクロサービス** アーキテクチャに従って、最高の **HIPAA** セキュリティ標準に準拠した完全な医療情報システム (HIS/EMR/LIS) を構築する手順を段階的に説明する実践的なコースです。

セキュリティ理論を教えるだけのコースとは異なり、このシリーズでは、アーキテクチャ設計→サービス構築→分散化→暗号化→監査→展開制作という、**実践的なシステムをゼロから構築**します。あらゆる設計上の決定は、国際的な医療安全基準に準拠しています。

### 何を構築しますか?

- **患者サービス** — RLS + 列暗号化を使用して患者記録を管理します
- **臨床サービス (EMR)** — 電子医療記録、診察、診断
- **ラボサービス (LIS)** — テスト、結果、標本
- **予約サービス** — 予約の作成、クリニックの管理
- **API ゲートウェイ** — レート制限、WAF、リクエストの検証
- **Keycloak IAM** — SSO、RBAC/ABAC、FHIR 上の SMART、MFA
- **監査とモニタリング** — OpenTelemetry、ELK、pgAudit 監査証跡
- **Kubernetes デプロイメント** — mTLS、ゼロトラスト、実稼働対応

### テクノロジースタック

|テクノロジー |バージョン |役割 |
|----------|-----------|----------|
| **クォーカス** | 3.x |マイクロサービス フレームワーク (Java) |
| **PostgreSQL** | 16 歳以上 |データベース — RLS、pgcrypto、pgAudit |
| **キークローク** | 26.x | ID とアクセス管理 |
| **Apache Kafka** | 3.x |イベントストリーミング、CDC |
| **Istio** | 1.x |サービスメッシュ、mTLS |
| **Docker + K8s** |最新 |コンテナオーケストレーション |
| **HashiCorp 保管庫** | 1.x |シークレットとキー管理 |
| **OpenTelemetry** | 1.x |可観測性と分散トレース |

### 必要な知識

- 基本的な Java および Quarkus フレームワーク
- 基本的なPostgreSQL（SQL、スキーマ設計）
- Docker とコンテナの概念
- REST API とマイクロサービス アーキテクチャ

### 誰が学ぶべきですか?

- **バックエンド エンジニア**は医療システムを構築します
- **DevSecOps エンジニア**は医療セキュリティを実装します
- **Tech Leads** 病院/医療施設向け建築設計
- **フルスタック開発者**は、HIPAA 標準セキュリティを理解したいと考えています
