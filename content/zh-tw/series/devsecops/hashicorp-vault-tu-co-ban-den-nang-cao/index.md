---
id: 019d8b30-b200-7001-c002-e0c5f8200001
title: HashiCorp Vault 從基礎到高級
slug: hashicorp-vault-tu-co-ban-den-nang-cao
description: >-
  HashiCorp Vault 課程從基礎到進階都很全面，可協助您掌握秘密管理、加密即服務、動態憑證和基於身分的安全性。從安裝和設定 Secrets
  Engine（KV、PKI、Transit、Database、AWS、SSH）、身份驗證方法（Token、Userpass、AppRole、LDAP、OIDC、Kubernetes）、策略，到整合式儲存
  (Raft)、高可用性、自動解封、Vault Agent、Vault Secrets
  Operator、企業功能（命名、Senti、Senti、Senti）作業、選項、版本、「企業」、「企業」功能」。更新至 Vault 1.21.x（最新版本
  2026），包括 SPIFFE 驗證、MFA TOTP 自行註冊、KV v2 版本歸屬和企業安全最佳實務。
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
    title: 第 1 部分：HashiCorp Vault 平台
    description: >-
      Introducing Vault, installation, initialization, Seal/Unseal, Dev Server
      and basic CLI
    sort_order: 1
    lessons:
      - id: 019d8b30-b201-7001-c002-e0c5f8200101
        title: 第 1 課：HashiCorp Vault 簡介 - 企業中的秘密管理
        slug: bai-1-gioi-thieu-hashicorp-vault-secret-management-trong-enterprise
        description: >-
          了解 HashiCorp Vault 是什麼、為什麼需要集中式機密管理、Vault
          架構（存儲後端、屏障、機密引擎、身份驗證方法、審核設備、系統後端）、與 AWS Secrets Manager/Azure Key
          Vault/Google Secret Manager 的比較以及實際使用案例。 Vault 1.21.x 概述。
        duration_minutes: 90
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8b30-b202-7001-c002-e0c5f8200102
        title: 第 2 課：安裝 Vault - 獨立版、Docker 和 Kubernetes
        slug: bai-2-cai-dat-vault-standalone-docker-va-kubernetes
        description: >-
          在 Linux (Ubuntu/CentOS)、macOS、Docker Compose 和 Kubernetes Helm 圖表上安裝
          Vault 1.21.x 的說明。設定儲存後端（整合式儲存、檔案、Consul）、偵聽器（TCP、TLS），在開發伺服器與生產模式下執行
          Vault。 Vault 初始化（Vault 操作員初始化）、密封/解封工作流程和根令牌管理。
        duration_minutes: 150
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8b30-b203-7001-c002-e0c5f8200103
        title: 第 3 課：Vault CLI、API 和 Web UI
        slug: bai-3-vault-cli-api-va-web-ui
        description: >-
          熟悉 Vault CLI（Vault
          讀取、寫入、列出、刪除、kv、驗證、機密、政策、運算子）、環境變數（VAULT_ADDR、VAULT_TOKEN、VAULT_NAMESPACE）、Vault
          HTTP RESTful API、cURL 和 SDK 客戶端（GoNode、Python、Java、jsjs）。 Vault Web UI
          概述、透過介面導航和管理機密。
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8b30-b204-7001-c002-e0c5f8200104
        title: 第 4 課：密封/開封、自動開封和恢復密鑰
        slug: bai-4-seal-unseal-auto-unseal-va-recovery-keys
        description: >-
          深入了解Vault的密封/解封機制、Shamir秘密共享、密鑰共享和密鑰閾值。使用 AWS KMS、Azure Key Vault、GCP
          Cloud KMS、Transit（Vault 到 Vault）、HSM (PKCS#11)
          自動解封。恢復密鑰、重新密鑰（金庫操作員重新密鑰）、密鑰輪換和密封遷移。
        duration_minutes: 150
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019d8b30-b205-7001-c002-e0c5f8200105
        title: 第 5 課：令牌、租賃和續約
        slug: bai-5-tokens-leases-va-renewal
        description: >-
          令牌類型（服務令牌、批次令牌）、令牌層次結構和孤立令牌、令牌存取器、令牌角色、定期令牌、令牌 TTL 和最大
          TTL。租賃概念、租賃期間、租賃續約（保管庫租賃續約）、租賃撤銷（保管庫租賃撤銷）和基於前綴的撤銷。用於安全秘密分發的 Cubbyhole
          回應包裝。
        duration_minutes: 150
        is_free: true
        sort_order: 5
        video_url: null
  - id: section-02
    title: 第 2 部分：秘密引擎 - 管理秘密
    description: >-
      KV Secrets Engine, Dynamic Secrets, PKI, Transit, Database, AWS, SSH and
      TOTP
    sort_order: 2
    lessons:
      - id: 019d8b30-b206-7001-c002-e0c5f8200106
        title: 第 6 課：KV 秘密引擎 - 靜態秘密管理
        slug: bai-6-kv-secrets-engine-static-secrets-management
        description: >-
          KV v1 與 KV v2 詳細比較、啟用/配置 KV Secrets Engine、CRUD
          操作（放置、獲取、刪除、取消刪除、銷毀）、版本控制、元資料管理、KV v2 版本歸屬（1.21 中新增）、檢查和設定
          (CAS)、自訂元資料、軟刪除與永久銷毀到永久銷毀到從 KV v1 遷移到永久銷毀的 v1111 遷移到永久銷毀。
        duration_minutes: 150
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8b30-b207-7001-c002-e0c5f8200107
        title: 第 7 課：資料庫機密引擎 - 動態憑證
        slug: bai-7-database-secrets-engine-dynamic-credentials
        description: >-
          資料庫秘密引擎概念，PostgreSQL、MySQL、MongoDB、MSSQL、Oracle
          的連線配置。動態角色和創建語句、具有自動密碼輪換的靜態角色、根憑證輪換、TTL 管理、憑證庫 (Vault 1.21+)
          以及與實際應用程式的整合（Spring Boot、Node.js、Python）。
        duration_minutes: 200
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8b30-b208-7001-c002-e0c5f8200108
        title: 第 8 課：PKI 秘密引擎 - 憑證授權單位
        slug: bai-8-pki-secrets-engine-certificate-authority
        description: >-
          PKI Secrets Engine 深入研究、根 CA 和中間 CA
          建立、憑證角色、頒發/簽署憑證、憑證撤銷（CRL、OCSP）、自動輪調、交叉簽章、ACME 協定支援、PKI 憑證計數器（1.21
          中的新增功能）、統一 CRL/OCSP、Vault PKI 與憑證管理器 (Kubernetes)、Nginx mLS。
        duration_minutes: 220
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019d8b30-b209-7001-c002-e0c5f8200109
        title: 第 9 課：Transit Secrets Engine - 加密即服務
        slug: bai-9-transit-secrets-engine-encryption-as-a-service
        description: >-
          Transit Secrets Engine
          概念、建立/管理加密金鑰、加密/解密作業、金鑰輪換和重新包裝、金鑰類型（aes256-gcm96、chacha20-poly1305、ed25519、ecdsa-p256、rsa-2048、rsa-4096）、HMAC、p256、rsa-2048、rsa-4096）、HMAC、/p256、
          Transit 與應用程式整合以進行靜態加密。
        duration_minutes: 180
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8b30-b210-7001-c002-e0c5f8200110
        title: 第 10 課：AWS、Azure、GCP 和雲端秘密引擎
        slug: bai-10-aws-azure-gcp-va-cloud-secrets-engines
        description: >-
          AWS Secrets Engine（IAM 使用者、STS AssumeRole、STS Federation Token）、Azure
          Secrets Engine（服務主體動態憑證、1.21 中的靜態角色）、GCP Secrets Engine（服務帳號金鑰、OAuth2
          存取權杖）、雲端憑證輪調、租賃管理、以及多雲秘密管理的最佳實務。
        duration_minutes: 200
        is_free: true
        sort_order: 10
        video_url: null
  - id: section-03
    title: 第 3 部分：身份驗證方法 - 身份驗證和授權
    description: 'Token, Userpass, AppRole, LDAP, OIDC, Kubernetes, SPIFFE, MFA'
    sort_order: 3
    lessons:
      - id: 019d8b30-b211-7001-c002-e0c5f8200111
        title: 第 11 課：基本驗證方法 - 令牌、使用者密碼和 AppRole
        slug: bai-11-auth-methods-co-ban-token-userpass-va-approle
        description: >-
          驗證方法概述、令牌驗證方法（根令牌、建立令牌）、使用者密碼驗證方法（CRUD 使用者、密碼原則）、AppRole
          驗證方法（RoleID、SecretID、CIDR 綁定、secret_id_num_uses）、回應包裝 cho
          SecretID、AppRole 最佳實務 cho/CD/CD（Jen CI/Hub）。
        duration_minutes: 200
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8b30-b212-7001-c002-e0c5f8200112
        title: 第 12 課：LDAP、OIDC 和 JWT 驗證方法
        slug: bai-12-ldap-oidc-va-jwt-auth-methods
        description: >-
          LDAP 驗證方法（LDAP/Active Directory、群組映射、策略的配置）、OIDC 驗證方法（使用
          Keycloak、Azure AD、Okta、Google 進行設定）、JWT 驗證方法（適用於 CI/CD — GitHub
          Actions OIDCDC、GitLab CI JWT）、綁定聲明、綁定聲明、提供程式配置以及人與機器身份驗證的用例。
        duration_minutes: 200
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019d8b30-b213-7001-c002-e0c5f8200113
        title: 第 13 課：Kubernetes、AWS 和雲端驗證方法
        slug: bai-13-kubernetes-aws-va-cloud-auth-methods
        description: >-
          Kubernetes 驗證方法（服務帳戶令牌審核、綁定命名空間、綁定服務帳戶）、AWS 身份驗證方法（IAM 身份驗證、EC2
          身份驗證、跨帳戶）、Azure 身份驗證方法（託管身份、服務主體）、GCP 身份驗證方法（IAM、GCE）、SPIFFE
          實踐方法（新增身份驗證）
        duration_minutes: 200
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8b30-b214-7001-c002-e0c5f8200114
        title: 第 14 課：策略 - ACL、Sentinel 和 RBAC
        slug: bai-14-policies-acl-sentinel-va-rbac
        description: >-
          Vault 策略系統、HCL
          策略語法、基於路徑的策略、功能（建立、讀取、更新、刪除、清單、sudo、拒絕）、策略範本（身分參數）、細粒度控制（allowed_pa​​rameters、denied_pa​​rameters、min_wrap_ttl、max_wping_ttl、required_pa​​rameters、min_wrap_ttl、max_wrap_ttl、required_ttl、預設策略）。
          Sentinel 策略（企業）— 端點管理策略 (EGP)、角色管理策略 (RGP)、Sentinel 匯入和測試。
        duration_minutes: 220
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8b30-b215-7001-c002-e0c5f8200115
        title: 第 15 課：身分機密引擎、實體與 MFA
        slug: bai-15-identity-secrets-engine-entities-va-mfa
        description: >-
          身分秘密引擎、實體和別名、實體策略、實體元資料、內部群組與外部群組、組別別名、身分令牌（Vault 中的 OIDC 提供者）。多重驗證
          (MFA) — TOTP、Duo、Okta、PingID。 MFA TOTP 自行註冊（1.21 中的新增功能）、登入 MFA 與升級
          MFA 以及 MFA 強制執行政策。
        duration_minutes: 180
        is_free: true
        sort_order: 15
        video_url: null
  - id: section-04
    title: 第 4 部分：進階秘密引擎
    description: 'SSH, TOTP, Transform, KMIP, Consul, Nomad and Custom Plugins'
    sort_order: 4
    lessons:
      - id: 019d8b30-b216-7001-c002-e0c5f8200116
        title: 第 16 課：SSH 秘密引擎和 TOTP
        slug: bai-16-ssh-secrets-engine-va-totp
        description: >-
          SSH 秘密引擎 — 簽署 SSH 憑證（CA 模式）、一次性密碼（OTP 模式）、ssh-helper
          設定、憑證授權單位設定、允許的使用者/擴充、主機金鑰簽章。 TOTP 秘密引擎 — 產生/驗證 TOTP 代碼，與 2FA 工作流程整合。
          LDAP Secrets Engine — 動態 LDAP 憑證、RACF 密碼支援（1.21 中的新增功能）、靜態角色、服務帳戶管理。
        duration_minutes: 180
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019d8b30-b217-7001-c002-e0c5f8200117
        title: 第 17 課：轉換與標記化 - 資料保護
        slug: bai-17-transform-va-tokenization-data-protection
        description: >-
          Transform Secrets Engine（企業）— 格式保留加密
          (FPE)、屏蔽、標記化。模板、字母、轉換、角色配置。標記化商店－內部和外部。 PCI DSS 合規性、PII
          保護、SSN/信用卡屏蔽的用例。比較 Transit 與 Transform — 何時使用哪一個，以及與資料庫視圖的整合。
        duration_minutes: 180
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8b30-b218-7001-c002-e0c5f8200118
        title: 第 18 課：KMIP、Consul、Nomad Secrets 引擎和自訂插件
        slug: bai-18-kmip-consul-nomad-secrets-engines-va-custom-plugins
        description: >-
          KMIP 秘密引擎 — 金鑰管理互通性協議，與資料庫和儲存系統整合。 Consul Secrets Engine — 動態 Consul
          ACL 令牌。 Nomad Secrets Engine — 動態 Nomad ACL 代幣。 Vault 外掛系統 —
          外掛程式架構、外掛程式目錄、精選外掛程式註冊表、使用 Go 開發自訂秘密引擎和驗證方法、外掛程式多重化和版本化外掛程式。
        duration_minutes: 180
        is_free: true
        sort_order: 18
        video_url: null
  - id: section-05
    title: 第 5 部分：Vault 代理、代理和 Kubernetes 集成
    description: 'Vault Agent, Vault Proxy, Secrets Operator, CSI Provider, Agent Injector'
    sort_order: 5
    lessons:
      - id: 019d8b30-b219-7001-c002-e0c5f8200119
        title: 第 19 課：Vault 代理和 Vault 代理
        slug: bai-19-vault-agent-va-vault-proxy
        description: >-
          Vault 代理程式概述、自動驗證方法、範本渲染（Consul 範本語法）、檔案接收器、環境變數範本、流程管理器、代理程式快取、代理 API
          代理程式。 Vault 代理程式 — API 代理模式、快取配置、靜態秘密快取、自動驗證委派。比較代理與代理 — 何時使用哪個、使用
          systemd、Docker sidecar 和 init 容器的部署模式。
        duration_minutes: 200
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d8b30-b220-7001-c002-e0c5f8200120
        title: 第 20 課：Kubernetes 上的 Vault - Helm、Operator 和 CSI
        slug: bai-20-vault-tren-kubernetes-helm-operator-va-csi
        description: >-
          使用 Helm Chart（獨立、HA、Dev、外部）、Vault Secrets
          Operator（VaultAuth、VaultStaticSecret、VaultDynamicSecret、VaultPKISecret
          CR）、Vault CSI Provider（SecretProviderClass）、Vault Agent
          Injector（註解、範本、init 與使用 VSO CSI 驅動程式保護機密（1.21 中的新增功能）。比較 VSO、CSI 與
          Agent Injector，Kubernetes 原生秘密管理的最佳實務。
        duration_minutes: 220
        is_free: true
        sort_order: 20
        video_url: null
  - id: section-06
    title: 第六部分：整合實際應用
    description: 'Integrate Vault with Spring Boot, Node.js, Terraform, Ansible, CI/CD'
    sort_order: 6
    lessons:
      - id: 019d8b30-b221-7001-c002-e0c5f8200121
        title: 第 21 課：將 Vault 與 Spring Boot 和 Node.js 集成
        slug: bai-21-tich-hop-vault-voi-spring-boot-va-nodejs
        description: >-
          Spring Cloud Vault 整合、Spring Boot Vault 自動配置、PropertySource
          綁定、資料庫憑證輪替、Java 中的傳輸加密。 Node.js 與 Node-Vault 用戶端、HVAC (Python)、Vault
          Go SDK。應用程式模式 - 直接 API、Vault Agent sidecar、環境變數注入、CSI 磁碟區掛載。零秘問題及解決方案。
        duration_minutes: 200
        is_free: true
        sort_order: 21
        video_url: null
      - id: 019d8b30-b222-7001-c002-e0c5f8200122
        title: 第 22 課：帶有 Terraform、Ansible 和 CI/CD 管道的 Vault
        slug: bai-22-vault-voi-terraform-ansible-va-cicd-pipelines
        description: >-
          Terraform Vault Provider — 將 Vault 配置作為程式碼進行管理（秘密引擎、身分驗證方法、策略、實體）。
          Ansible Vault 尋找外掛程式和模組。 CI/CD 整合 — GitHub Actions（OIDC + JWT
          auth）、GitLab CI（JWT auth）、Jenkins（AppRole、Vault 外掛程式）、ArgoCD Vault
          外掛程式。 GitOps 工作流程中的 Vault 和外部 Secrets Operator。
        duration_minutes: 200
        is_free: true
        sort_order: 22
        video_url: null
  - id: section-07
    title: 第七部分：生產、企業與營運
    description: >-
      HA, Replication, Namespaces, Monitoring, Audit, Backup/Restore and
      Troubleshooting
    sort_order: 7
    lessons:
      - id: 019d8b30-b223-7001-c002-e0c5f8200123
        title: 第 23 課：高可用性、整合式儲存與生產強化
        slug: bai-23-high-availability-integrated-storage-va-production-hardening
        description: >-
          整合儲存 (Raft) 深入研究 —
          叢集設定、retry_join、node_id、Autopilot（伺服器穩定、失效伺服器清理、自動升級）、Raft 快照、WAL
          日誌儲存。 HA架構－主備/效能備節點，leader選舉。生產強化 - TLS 無所不在、mlock、檔案權限、偵聽器設定、遙測端點、端對端
          TLS、非 root 使用者、systemd 強化和安全檢查表。
        duration_minutes: 240
        is_free: true
        sort_order: 23
        video_url: null
      - id: 019d8b30-b224-7001-c002-e0c5f8200124
        title: 第 24 課：Vault Enterprise - 命名空間、複製與災難復原
        slug: bai-24-vault-enterprise-namespaces-replication-va-dr
        description: >-
          Vault Enterprise
          功能概述、命名空間（多租戶、層次結構、命名空間限制）、效能複製（主/輔助叢集、掛載過濾器、路徑過濾器）、災難復原複製（DR
          主/輔助、故障轉移、升級）、Sentinel 策略 (EGP/RGP)、控制組、許可證管理、效能節點、Seal Wrap (FIPS
          140-20-2)。
        duration_minutes: 240
        is_free: true
        sort_order: 24
        video_url: null
      - id: 019d8b30-b225-7001-c002-e0c5f8200125
        title: 第 25 課：監控、審核日誌記錄、備份/復原和故障排除
        slug: bai-25-monitoring-audit-logging-backup-restore-va-troubleshooting
        description: >-
          審核設備（檔案、系統日誌、套接字）— 設定、格式（JSON、JSONx）、HMAC 審核日誌、審核日誌過濾。 Telemetry —
          Prometheus metrics, StatsD, DogStatsD, Grafana dashboards, key metrics
          (vault.core.handle_request, vault.expire.num_leases,
          vault.runtime.alloc_bytes). OpenTelemetry 追蹤（新）。備份策略 — Raft
          快照（自動、按需）、Secret 還原（1.21 中新增）。故障排除 — 常見問題、偵錯日誌、Vault
          偵錯指令、伺服器日誌分析與執行手冊製作。
        duration_minutes: 240
        is_free: true
        sort_order: 25
        video_url: null
reviews: []
quizzes: []
locale: zh-tw
---
<h2><strong>第 1 部分：HashiCorp Vault 平台</strong></h2>
<h3>第 1 課：HashiCorp Vault 簡介 - 企業中的秘密管理</h3>
<ul>
<li><p>HashiCorp Vault 是什麼？發展歷程（從HashiCorp到CNCF）</p></li>
<li><p>為什麼我們需要集中式秘密管理？ </p></li>
<li><p>Vault 架構：儲存後端、屏障、秘密引擎、驗證方法、審核設備</p></li>
<li><p>比較 Vault、AWS Secrets Manager、Azure Key Vault 與 Google Secret Manager</p></li>
<li><p>使用案例：靜態機密、動態憑證、加密即服務、PKI、SSH</p></li>
</ul>
<h3>第 2 課：安裝 Vault - 獨立版、Docker 與 Kubernetes</h3>
<ul>
<li><p>在 Ubuntu/CentOS 上安裝 Vault（套件管理器）</p></li>
<li><p>使用 Docker 和 Docker Compose 執行 Vault</p></li>
<li><p>Kubernetes Helm 圖表部署</p></li>
<li><p>配置儲存後端（整合式儲存、檔案、Consul）</p></li>
<li><p>開發伺服器與生產模式</p></li>
<li><p>初始化 Vault（操作員 init）、密封/解封工作流程</p></li>
</ul>
<h3>第 3 課：Vault CLI、API 與 Web UI</h3>
<ul>
<li><p>Vault CLI 指令（讀取、寫入、列出、刪除、kv、驗證、機密、策略、操作員）</p></li>
<li><p>環境變數（VAULT_ADDR、VAULT_TOKEN、VAULT_NAMESPACE）</p></li>
<li><p>Vault HTTP API、cURL 範例</p></li>
<li><p>SDK 用戶端（Go、Python、Java、Node.js）</p></li>
<li><p>Vault Web UI 概述與導航</p></li>
</ul>
<h3>第 4 課：密封/解封、自動解封和恢復金鑰</h3>
<ul>
<li><p>密封/解封機制與 Shamir 秘密分享</p></li>
<li><p>關鍵份額、關鍵閾值、主密鑰</p></li>
<li><p>自動解封（AWS KMS、Azure Key Vault、GCP Cloud KMS、Transit、HSM）</p></li>
<li><p>恢復金鑰和重新產生金鑰（操作員重新產生金鑰）</p></li>
<li><p>密鑰輪換和密封遷移</p></li>
</ul>
<h3>第 5 課：代幣、租賃與續約</h3>
<ul>
<li><p>令牌類型：服務令牌、批次令牌</p></li>
<li><p>令牌層次結構、孤立令牌、令牌存取器</p></li>
<li><p>令牌角色、定期令牌、TTL 和最大 TTL</p></li>
<li><p>租約概念、租約續約、租約撤銷</p></li>
<li><p>Cubbyhole 回應包裝</p></li>
</ul><h2><strong>第 2 部分：秘密引擎 - 管理機密</strong></h2>
<h3>第 6 課：KV 秘密引擎 - 靜態秘密管理</h3>
<ul>
<li><p>KV v1 與 KV v2 詳細比較</p></li>
<li><p>啟用/設定 KV 秘密引擎</p></li>
<li><p>CRUD 操作、版本控制、元資料</p></li>
<li><p>KV v2 版本歸屬（Vault 1.21）</p></li>
<li><p>檢查與設定（CAS）、軟刪除、補丁操作</p></li>
</ul>
<h3>第 7 課：資料庫機密引擎 - 動態憑證</h3>
<ul>
<li><p>資料庫機密引擎概念</p></li>
<li><p>設定連線：PostgreSQL、MySQL、MongoDB、MSSQL</p></li>
<li><p>動態角色與靜態角色</p></li>
<li><p>根憑證輪替</p></li>
<li><p>與實際應用程式整合</p></li>
</ul>
<h3>第 8 課：PKI 秘密引擎 - 憑證授權單位</h3>
<ul>
<li><p>建立根 CA 和中間 CA</p></li>
<li><p>證書角色、頒發/簽署證書</p></li>
<li><p>CRL、OCSP、自動輪調、ACME 協定</p></li>
<li><p>PKI 憑證計數器（Vault 1.21）</p></li>
<li><p>與憑證管理器、Nginx、mTLS 整合</p></li>
</ul>
<h3>第 9 課：傳送秘密引擎 - 加密即服務</h3>
<ul>
<li><p>加密/解密操作</p></li>
<li><p>金鑰管理與輪調</p></li>
<li><p>金鑰類型、HMAC、簽章/驗證</p></li>
<li><p>資料金鑰產生、融合加密</p></li>
<li><p>BYOK 與批次操作</p></li>
</ul>
<h3>第 10 課：AWS、Azure、GCP 與雲端秘密引擎</h3>
<ul>
<li><p>AWS Secrets Engine（IAM、STS AssumeRole）</p></li>
<li><p>Azure Secrets Engine（1.21 中的靜態角色）</p></li>
<li><p>GCP Secrets Engine（服務帳戶、OAuth2）</p></li>
<li><p>多雲秘密管理最佳實務</p></li>
</ul><h2><strong>第 3 部分：驗證方法 - 驗證與授權</strong></h2>
<h3>第 11 課：基本驗證方法 - 令牌、使用者密碼和 AppRole</h3>
<ul>
<li><p>令牌驗證方法，根令牌</p></li>
<li><p>使用者密碼驗證方法、密碼原則</p></li>
<li><p>AppRole（RoleID、SecretID、CIDR 綁定）</p></li>
<li><p>回應包裝 cho SecretID</p></li>
<li><p>AppRole cho CI/CD 管道</p></li>
</ul>
<h3>第 12 課：LDAP、OIDC 和 JWT 驗證方法</h3>
<ul>
<li><p>LDAP 驗證方法（Active Directory 整合）</p></li>
<li><p>OIDC 驗證方法（Keycloak、Azure AD、Okta）</p></li>
<li><p>JWT 驗證方法（GitHub 操作 OIDC、GitLab CI）</p></li>
<li><p>綁定宣告、宣告映射</p></li>
</ul>
<h3>第 13 課：Kubernetes、AWS 和雲端驗證方法</h3>
<ul>
<li><p>Kubernetes 驗證方法（服務帳號令牌審核）</p></li>
<li><p>AWS 驗證方法（IAM、EC2）</p></li>
<li><p>Azure、GCP 驗證方法</p></li>
<li><p>SPIFFE 驗證方法（1.21 中的新增功能）</p></li>
<li><p>工作負載身分最佳實務</p></li>
</ul>
<h3>第 14 課：策略 - ACL、Sentinel 和 RBAC</h3>
<ul>
<li><p>HCL 策略語法，基於路徑的策略</p></li>
<li><p>功能（建立、讀取、更新、刪除、列出、sudo、拒絕）</p></li>
<li><p>策略範本（身分參數）</p></li>
<li><p>細粒度控制（allowed_parameters、denied_parameters）</p></li>
<li><p>哨兵策略（企業）- EGP、RGP</p></li>
</ul>
<h3>第 15 課：身分秘密引擎、實體與 MFA</h3>
<ul>
<li><p>身分秘密引擎、實體與別名</p></li>
<li><p>內部組與外部組</p></li>
<li><p>身分令牌（OIDC 提供者）</p></li>
<li><p>MFA — TOTP、Duo、Okta、PingID</p></li>
<li><p>MFA TOTP 自行註冊（Vault 1.21）</p></li>
</ul>

<h2><strong>第 4 部分：高級秘密引擎</strong></h2>
<h3>第 16 課：SSH 秘密引擎與 TOTP</h3>
<ul>
<li><p>SSH 簽章憑證（CA 模式）</p></li>
<li><p>SSH 一次性密碼（OTP 模式）</p></li>
<li><p>主機金鑰簽署、允許的使用者/擴充</p></li>
<li><p>TOTP 秘密引擎</p></li>
<li><p>LDAP 秘密引擎（RACF 密碼短語支援 1.21）</p></li>
</ul>
<h3>第 17 課：轉換與標記化 - 資料保護</h3>
<ul>
<li><p>轉換 Secrets Engine（企業）</p></li>
<li><p>格式保留加密 (FPE)、屏蔽</p></li>
<li><p>令牌化儲存（內部、外部）</p></li>
<li><p>PCI DSS 合規性、PII 保護</p></li>
<li><p>Transit 與 Transform — 何時使用哪一個</p></li>
</ul>
<h3>第 18 課：KMIP、Consul、Nomad Secrets 引擎和自訂外掛程式</h3>
<ul>
<li><p>KMIP 秘密引擎（金鑰管理互通性協定）</p></li>
<li><p>Consul 和 Nomad 秘密引擎</p></li>
<li><p>Vault外掛系統和外掛程式目錄</p></li>
<li><p>開發自訂秘密引擎/驗證方法（Go）</p></li>
<li><p>外掛程式多重化和版本化外掛程式</p></li>
</ul><h2><strong>第 5 部分：Vault 代理、代理和 Kubernetes 整合</strong></h2>
<h3>第 19 課：Vault 代理與 Vault 代理</h3>
<ul>
<li><p>Vault 代理程式：自動驗證、範本渲染、檔案接收器</p></li>
<li><p>代理程式快取、行程管理器</p></li>
<li><p>Vault代理：API代理模式，靜態秘密快取</p></li>
<li><p>代理與代理 — 何時使用哪一個</p></li>
<li><p>部署模式（systemd、Docker sidecar）</p></li>
</ul>
<h3>第 20 課：Kubernetes 上的 Vault - Helm、Operator 和 CSI</h3>
<ul>
<li><p>使用 Helm 圖表部署 Vault（獨立、HA、外部）</p></li>
<li><p>Vault Secrets Operator（VaultAuth、VaultStaticSecret、VaultDynamicSecret）</p></li>
<li><p>Vault CSI 提供者（SecretProviderClass）</p></li>
<li><p>Vault 代理注入器（註解、模板）</p></li>
<li><p>VSO、CSI 與代理注入器比較</p></li>
</ul>

<h2><strong>第 6 部分：整合實際應用</strong></h2>
<h3>第 21 課：將 Vault 與 Spring Boot 和 Node.js 整合</h3>
<ul>
<li><p>Spring Cloud Vault 整合</p></li>
<li><p>Java 中的資料庫憑證輪替</p></li>
<li><p>有 Node-vault 的 Node.js、Python HVAC</p></li>
<li><p>應用模式：直接 API、sidecar、環境變數、CSI</p></li>
<li><p>秘密零問題及解決方案</p></li>
</ul>
<h3>第 22 課：使用 Terraform、Ansible 和 CI/CD 管道的 Vault</h3>
<ul>
<li><p>Terraform Vault 提供者（基礎架構即程式碼）</p></li>
<li><p>Ansible Vault 尋找外掛程式</p></li>
<li><p>GitHub Actions OIDC、GitLab CI JWT 驗證</p></li>
<li><p>Jenkins AppRole 整合</p></li>
<li><p>ArgoCD Vault 插件，外部機密操作員</p></li>
</ul>

<h2><strong>第 7 部分：生產、企業和營運</strong></h2>
<h3>第 23 課：高可用性、整合式儲存與生產強化</h3>
<ul>
<li><p>整合式儲存 (Raft) 叢集設定</p></li>
<li><p>Autopilot、Raft 快照、WAL 日誌儲存</p></li>
<li><p>HA：主用/備用/性能備用</p></li>
<li><p>生產強化：TLS、mlock、systemd、安全檢查表</p></li>
</ul>
<h3>第 24 課：Vault Enterprise - 命名空間、複製與災難復原</h3>
<ul>
<li><p>命名空間（多租戶）</p></li>
<li><p>效能複製、災難復原</p></li>
<li><p>哨兵策略（EGP/RGP）</p></li>
<li><p>對照組、密封包裹、熵增強</p></li>
<li><p>許可證管理與企業升級</p></li>
</ul>
<h3>第 25 課：監控、審核日誌記錄、備份/復原和故障排除</h3>
<ul>
<li><p>審核設備（檔案、系統日誌、套接字）</p></li>
<li><p>Prometheus 指標、Grafana 儀表板</p></li>
<li><p>OpenTelemetry 追蹤</p></li>
<li><p>Raft 快照、秘密復原（Vault 1.21）</p></li>
<li><p>故障排除、Vault 調試、生產運作手冊</p></li>
</ul>
