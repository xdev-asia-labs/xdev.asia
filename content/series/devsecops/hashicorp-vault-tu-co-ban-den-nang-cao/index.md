---
id: 019d8b30-b200-7001-c002-e0c5f8200001
title: HashiCorp Vault từ Cơ bản đến Nâng cao
slug: hashicorp-vault-tu-co-ban-den-nang-cao
description: >-
  Khóa học HashiCorp Vault toàn diện từ cơ bản đến nâng cao, giúp bạn làm chủ
  Secret Management, Encryption as a Service, Dynamic Credentials và Identity-based
  Security. Từ cài đặt, cấu hình Secrets Engines (KV, PKI, Transit, Database,
  AWS, SSH), Auth Methods (Token, Userpass, AppRole, LDAP, OIDC, Kubernetes),
  Policies, đến các chủ đề nâng cao như Integrated Storage (Raft), High Availability,
  Auto-unseal, Vault Agent, Vault Secrets Operator, Enterprise features
  (Namespaces, Sentinel, Replication, DR), monitoring và vận hành production.
  Cập nhật theo Vault 1.21.x (phiên bản mới nhất 2026), bao gồm SPIFFE auth,
  MFA TOTP self-enrollment, KV v2 version attribution và các best practices
  bảo mật enterprise.
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
    title: 'Phần 1: Nền tảng HashiCorp Vault'
    description: 'Giới thiệu Vault, cài đặt, khởi tạo, Seal/Unseal, Dev Server và CLI cơ bản'
    sort_order: 1
    lessons:
      - id: 019d8b30-b201-7001-c002-e0c5f8200101
        title: 'Bài 1: Giới thiệu HashiCorp Vault - Secret Management trong Enterprise'
        slug: bai-1-gioi-thieu-hashicorp-vault-secret-management-trong-enterprise
        description: >-
          Tìm hiểu HashiCorp Vault là gì, tại sao cần Secret Management tập trung,
          kiến trúc Vault (Storage Backend, Barrier, Secrets Engines, Auth Methods,
          Audit Devices, System Backend), so sánh với AWS Secrets Manager/Azure Key Vault/
          Google Secret Manager, và các use cases thực tế. Tổng quan Vault 1.21.x.
        duration_minutes: 90
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8b30-b202-7001-c002-e0c5f8200102
        title: 'Bài 2: Cài đặt Vault - Standalone, Docker và Kubernetes'
        slug: bai-2-cai-dat-vault-standalone-docker-va-kubernetes
        description: >-
          Hướng dẫn cài đặt Vault 1.21.x trên Linux (Ubuntu/CentOS), macOS,
          Docker Compose và Kubernetes Helm chart. Cấu hình storage backend
          (Integrated Storage, File, Consul), listener (TCP, TLS), chạy Vault
          ở chế độ Dev Server vs Production Mode. Khởi tạo Vault (vault operator init),
          Seal/Unseal workflow, và Root Token management.
        duration_minutes: 150
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8b30-b203-7001-c002-e0c5f8200103
        title: 'Bài 3: Vault CLI, API và Web UI'
        slug: bai-3-vault-cli-api-va-web-ui
        description: >-
          Làm quen Vault CLI (vault read, write, list, delete, kv, auth, secrets,
          policy, operator), Environment variables (VAULT_ADDR, VAULT_TOKEN,
          VAULT_NAMESPACE), Vault HTTP API RESTful, cURL và SDK clients
          (Go, Python, Java, Node.js). Vault Web UI overview, navigation
          và quản lý secrets qua giao diện.
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8b30-b204-7001-c002-e0c5f8200104
        title: 'Bài 4: Seal/Unseal, Auto-unseal và Recovery Keys'
        slug: bai-4-seal-unseal-auto-unseal-va-recovery-keys
        description: >-
          Hiểu sâu cơ chế Seal/Unseal của Vault, Shamir Secret Sharing,
          Key Shares và Key Threshold. Auto-unseal với AWS KMS, Azure Key Vault,
          GCP Cloud KMS, Transit (Vault-to-Vault), HSM (PKCS#11). Recovery Keys,
          Re-keying (vault operator rekey), Key Rotation và Seal Migration.
        duration_minutes: 150
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019d8b30-b205-7001-c002-e0c5f8200105
        title: 'Bài 5: Tokens, Leases và Renewal'
        slug: bai-5-tokens-leases-va-renewal
        description: >-
          Token types (Service tokens, Batch tokens), Token hierarchy và Orphan tokens,
          Token accessors, Token roles, Periodic tokens, Token TTL và Max TTL.
          Lease concept, Lease duration, Lease renewal (vault lease renew),
          Lease revocation (vault lease revoke), và Prefix-based revocation.
          Cubbyhole Response Wrapping cho secure secret distribution.
        duration_minutes: 150
        is_free: true
        sort_order: 5
        video_url: null
  - id: section-02
    title: 'Phần 2: Secrets Engines - Quản lý Bí mật'
    description: 'KV Secrets Engine, Dynamic Secrets, PKI, Transit, Database, AWS, SSH và TOTP'
    sort_order: 2
    lessons:
      - id: 019d8b30-b206-7001-c002-e0c5f8200106
        title: 'Bài 6: KV Secrets Engine - Static Secrets Management'
        slug: bai-6-kv-secrets-engine-static-secrets-management
        description: >-
          KV v1 vs KV v2 so sánh chi tiết, enable/configure KV Secrets Engine,
          CRUD operations (put, get, delete, undelete, destroy), versioning,
          metadata management, KV v2 version attribution (mới trong 1.21),
          check-and-set (CAS), custom metadata, soft delete vs permanent destroy,
          patch operations và migration từ KV v1 sang v2.
        duration_minutes: 150
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8b30-b207-7001-c002-e0c5f8200107
        title: 'Bài 7: Database Secrets Engine - Dynamic Credentials'
        slug: bai-7-database-secrets-engine-dynamic-credentials
        description: >-
          Database Secrets Engine concept, cấu hình connections cho PostgreSQL,
          MySQL, MongoDB, MSSQL, Oracle. Dynamic roles và creation statements,
          Static roles với automatic password rotation, Root credential rotation,
          TTL management, Credential libraries (Vault 1.21+), và tích hợp
          với ứng dụng thực tế (Spring Boot, Node.js, Python).
        duration_minutes: 200
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8b30-b208-7001-c002-e0c5f8200108
        title: 'Bài 8: PKI Secrets Engine - Certificate Authority'
        slug: bai-8-pki-secrets-engine-certificate-authority
        description: >-
          PKI Secrets Engine deep dive, tạo Root CA và Intermediate CA,
          Certificate roles, Issue/Sign certificates, Certificate revocation (CRL, OCSP),
          Auto-rotation, Cross-signing, ACME protocol support, PKI certificate
          counter (mới trong 1.21), Unified CRL/OCSP, tích hợp Vault PKI với
          cert-manager (Kubernetes), Nginx, HAProxy và mTLS cho microservices.
        duration_minutes: 220
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019d8b30-b209-7001-c002-e0c5f8200109
        title: 'Bài 9: Transit Secrets Engine - Encryption as a Service'
        slug: bai-9-transit-secrets-engine-encryption-as-a-service
        description: >-
          Transit Secrets Engine concept, tạo/quản lý encryption keys, Encrypt/Decrypt
          operations, Key rotation và rewrapping, Key types (aes256-gcm96,
          chacha20-poly1305, ed25519, ecdsa-p256, rsa-2048, rsa-4096), HMAC,
          Sign/Verify, Data key generation (datakey), Convergent encryption,
          Batch operations, BYOK (Bring Your Own Key) và tích hợp
          Transit với ứng dụng cho encryption at rest.
        duration_minutes: 180
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8b30-b210-7001-c002-e0c5f8200110
        title: 'Bài 10: AWS, Azure, GCP và Cloud Secrets Engines'
        slug: bai-10-aws-azure-gcp-va-cloud-secrets-engines
        description: >-
          AWS Secrets Engine (IAM users, STS AssumeRole, STS Federation Token),
          Azure Secrets Engine (Service Principal dynamic credentials, Static roles
          trong 1.21), GCP Secrets Engine (Service Account keys, OAuth2 Access tokens),
          Cloud credential rotation, Lease management, và best practices
          cho multi-cloud secret management.
        duration_minutes: 200
        is_free: true
        sort_order: 10
        video_url: null
  - id: section-03
    title: 'Phần 3: Auth Methods - Xác thực và Ủy quyền'
    description: 'Token, Userpass, AppRole, LDAP, OIDC, Kubernetes, SPIFFE, MFA'
    sort_order: 3
    lessons:
      - id: 019d8b30-b211-7001-c002-e0c5f8200111
        title: 'Bài 11: Auth Methods cơ bản - Token, Userpass và AppRole'
        slug: bai-11-auth-methods-co-ban-token-userpass-va-approle
        description: >-
          Auth Methods overview, Token Auth Method (root tokens, create tokens),
          Userpass Auth Method (CRUD users, password policies), AppRole Auth Method
          (RoleID, SecretID, CIDR binding, secret_id_num_uses), response wrapping
          cho SecretID, AppRole best practices cho CI/CD pipelines
          (Jenkins, GitLab CI, GitHub Actions).
        duration_minutes: 200
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8b30-b212-7001-c002-e0c5f8200112
        title: 'Bài 12: LDAP, OIDC và JWT Auth Methods'
        slug: bai-12-ldap-oidc-va-jwt-auth-methods
        description: >-
          LDAP Auth Method (cấu hình LDAP/Active Directory, group mapping, policies),
          OIDC Auth Method (cấu hình với Keycloak, Azure AD, Okta, Google), JWT Auth
          Method (cho CI/CD — GitHub Actions OIDC, GitLab CI JWT), Bound claims,
          Claim mappings, allowed_redirect_uris, OIDC Provider configuration
          trong Vault và use cases cho human vs machine authentication.
        duration_minutes: 200
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019d8b30-b213-7001-c002-e0c5f8200113
        title: 'Bài 13: Kubernetes, AWS và Cloud Auth Methods'
        slug: bai-13-kubernetes-aws-va-cloud-auth-methods
        description: >-
          Kubernetes Auth Method (Service Account token review, bound namespaces,
          bound service accounts), AWS Auth Method (IAM auth, EC2 auth, cross-account),
          Azure Auth Method (Managed Identity, Service Principal), GCP Auth Method
          (IAM, GCE), SPIFFE Auth Method (mới trong 1.21 — SVID-based authentication),
          và best practices cho workload identity.
        duration_minutes: 200
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8b30-b214-7001-c002-e0c5f8200114
        title: 'Bài 14: Policies - ACL, Sentinel và RBAC'
        slug: bai-14-policies-acl-sentinel-va-rbac
        description: >-
          Vault Policy system, HCL policy syntax, Path-based policies, Capabilities
          (create, read, update, delete, list, sudo, deny), Policy templates
          (identity parameters), Fine-grained control (allowed_parameters,
          denied_parameters, min_wrapping_ttl, max_wrapping_ttl, required_parameters),
          Default policy, Root policy, Entity/Group policies. Sentinel policies
          (Enterprise) — Endpoint Governing Policies (EGP), Role Governing Policies (RGP),
          Sentinel imports và testing.
        duration_minutes: 220
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8b30-b215-7001-c002-e0c5f8200115
        title: 'Bài 15: Identity Secrets Engine, Entities và MFA'
        slug: bai-15-identity-secrets-engine-entities-va-mfa
        description: >-
          Identity Secrets Engine, Entities và Aliases, Entity policies,
          Entity metadata, Internal Groups vs External Groups, Group aliases,
          Identity Tokens (OIDC provider trong Vault). Multi-Factor Authentication
          (MFA) — TOTP, Duo, Okta, PingID. MFA TOTP self-enrollment (mới trong 1.21),
          Login MFA vs Step-up MFA, và MFA enforcement policies.
        duration_minutes: 180
        is_free: true
        sort_order: 15
        video_url: null
  - id: section-04
    title: 'Phần 4: Secrets Engines nâng cao'
    description: 'SSH, TOTP, Transform, KMIP, Consul, Nomad và Custom Plugins'
    sort_order: 4
    lessons:
      - id: 019d8b30-b216-7001-c002-e0c5f8200116
        title: 'Bài 16: SSH Secrets Engine và TOTP'
        slug: bai-16-ssh-secrets-engine-va-totp
        description: >-
          SSH Secrets Engine — Signed SSH Certificates (CA mode), One-Time Password
          (OTP mode), ssh-helper configuration, Certificate authority setup,
          Allowed users/extensions, Host key signing. TOTP Secrets Engine —
          sinh/validate TOTP codes, tích hợp với 2FA workflows.
          LDAP Secrets Engine — dynamic LDAP credentials, RACF passphrase support
          (mới trong 1.21), static roles, service account management.
        duration_minutes: 180
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019d8b30-b217-7001-c002-e0c5f8200117
        title: 'Bài 17: Transform và Tokenization - Data Protection'
        slug: bai-17-transform-va-tokenization-data-protection
        description: >-
          Transform Secrets Engine (Enterprise) — Format Preserving Encryption (FPE),
          Masking, Tokenization. Templates, Alphabets, Transformations,
          Roles configuration. Tokenization stores — internal và external.
          Use cases cho PCI DSS compliance, PII protection, SSN/credit card
          masking. So sánh Transit vs Transform — khi nào dùng cái nào,
          và tích hợp với database views.
        duration_minutes: 180
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8b30-b218-7001-c002-e0c5f8200118
        title: 'Bài 18: KMIP, Consul, Nomad Secrets Engines và Custom Plugins'
        slug: bai-18-kmip-consul-nomad-secrets-engines-va-custom-plugins
        description: >-
          KMIP Secrets Engine — Key Management Interoperability Protocol, integration
          với databases và storage systems. Consul Secrets Engine — dynamic Consul
          ACL tokens. Nomad Secrets Engine — dynamic Nomad ACL tokens.
          Vault Plugin System — plugin architecture, plugin catalog, curated plugin
          registry, developing custom secrets engines và auth methods bằng Go,
          plugin multiplexing, và versioned plugins.
        duration_minutes: 180
        is_free: true
        sort_order: 18
        video_url: null
  - id: section-05
    title: 'Phần 5: Vault Agent, Proxy và Kubernetes Integration'
    description: 'Vault Agent, Vault Proxy, Secrets Operator, CSI Provider, Agent Injector'
    sort_order: 5
    lessons:
      - id: 019d8b30-b219-7001-c002-e0c5f8200119
        title: 'Bài 19: Vault Agent và Vault Proxy'
        slug: bai-19-vault-agent-va-vault-proxy
        description: >-
          Vault Agent overview, Auto-auth methods, Template rendering (Consul Template
          syntax), File sink, Environment variable templates, Process supervisor,
          Agent caching, Agent API proxy. Vault Proxy — API proxy mode,
          caching configuration, static secret caching, auto-auth delegation.
          So sánh Agent vs Proxy — khi nào dùng cái nào, deployment patterns
          với systemd, Docker sidecar, và init containers.
        duration_minutes: 200
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d8b30-b220-7001-c002-e0c5f8200120
        title: 'Bài 20: Vault trên Kubernetes - Helm, Operator và CSI'
        slug: bai-20-vault-tren-kubernetes-helm-operator-va-csi
        description: >-
          Deploy Vault trên Kubernetes bằng Helm chart (Standalone, HA, Dev, External),
          Vault Secrets Operator (VaultAuth, VaultStaticSecret, VaultDynamicSecret,
          VaultPKISecret CR), Vault CSI Provider (SecretProviderClass), Vault
          Agent Injector (annotations, templates, init vs sidecar). Protected secrets
          với VSO CSI driver (mới trong 1.21). So sánh VSO vs CSI vs Agent Injector,
          best practices cho Kubernetes-native secret management.
        duration_minutes: 220
        is_free: true
        sort_order: 20
        video_url: null
  - id: section-06
    title: 'Phần 6: Tích hợp ứng dụng thực tế'
    description: 'Tích hợp Vault với Spring Boot, Node.js, Terraform, Ansible, CI/CD'
    sort_order: 6
    lessons:
      - id: 019d8b30-b221-7001-c002-e0c5f8200121
        title: 'Bài 21: Tích hợp Vault với Spring Boot và Node.js'
        slug: bai-21-tich-hop-vault-voi-spring-boot-va-nodejs
        description: >-
          Spring Cloud Vault integration, Spring Boot Vault auto-configuration,
          PropertySource binding, Database credential rotation, Transit encryption
          trong Java. Node.js với node-vault client, hvac (Python), Vault Go SDK.
          Application patterns — direct API, Vault Agent sidecar, environment
          variable injection, CSI volume mount. Secret zero problem
          và các giải pháp.
        duration_minutes: 200
        is_free: true
        sort_order: 21
        video_url: null
      - id: 019d8b30-b222-7001-c002-e0c5f8200122
        title: 'Bài 22: Vault với Terraform, Ansible và CI/CD Pipelines'
        slug: bai-22-vault-voi-terraform-ansible-va-cicd-pipelines
        description: >-
          Terraform Vault Provider — quản lý Vault configuration as code (secrets engines,
          auth methods, policies, entities). Ansible Vault lookup plugin và modules.
          CI/CD integration — GitHub Actions (OIDC + JWT auth), GitLab CI
          (JWT auth), Jenkins (AppRole, Vault plugin), ArgoCD Vault Plugin.
          Vault trong GitOps workflow và External Secrets Operator.
        duration_minutes: 200
        is_free: true
        sort_order: 22
        video_url: null
  - id: section-07
    title: 'Phần 7: Production, Enterprise và Vận hành'
    description: 'HA, Replication, Namespaces, Monitoring, Audit, Backup/Restore và Troubleshooting'
    sort_order: 7
    lessons:
      - id: 019d8b30-b223-7001-c002-e0c5f8200123
        title: 'Bài 23: High Availability, Integrated Storage và Production Hardening'
        slug: bai-23-high-availability-integrated-storage-va-production-hardening
        description: >-
          Integrated Storage (Raft) deep dive — cluster setup, retry_join, node_id,
          Autopilot (server stabilization, dead server cleanup, automated upgrades),
          Raft snapshots, WAL log store. HA architecture — active/standby/performance
          standby nodes, leader election. Production hardening — TLS everywhere,
          mlock, file permissions, listener configuration, telemetry endpoints,
          End-to-end TLS, non-root user, systemd hardening và security checklist.
        duration_minutes: 240
        is_free: true
        sort_order: 23
        video_url: null
      - id: 019d8b30-b224-7001-c002-e0c5f8200124
        title: 'Bài 24: Vault Enterprise - Namespaces, Replication và DR'
        slug: bai-24-vault-enterprise-namespaces-replication-va-dr
        description: >-
          Vault Enterprise features overview, Namespaces (multi-tenancy, hierarchy,
          namespace limits), Performance Replication (primary/secondary clusters,
          mount filters, paths filter), Disaster Recovery Replication (DR primary/
          secondary, failover, promote), Sentinel policies (EGP/RGP), Control Groups,
          License management, Performance Standby nodes, Seal Wrap (FIPS 140-2),
          Entropy Augmentation và Enterprise upgrade strategies.
        duration_minutes: 240
        is_free: true
        sort_order: 24
        video_url: null
      - id: 019d8b30-b225-7001-c002-e0c5f8200125
        title: 'Bài 25: Monitoring, Audit Logging, Backup/Restore và Troubleshooting'
        slug: bai-25-monitoring-audit-logging-backup-restore-va-troubleshooting
        description: >-
          Audit Devices (File, Syslog, Socket) — cấu hình, format (JSON, JSONx),
          HMAC'd audit logs, audit log filtering. Telemetry — Prometheus metrics,
          StatsD, DogStatsD, Grafana dashboards, key metrics (vault.core.handle_request,
          vault.expire.num_leases, vault.runtime.alloc_bytes). OpenTelemetry tracing
          (mới). Backup strategies — Raft snapshots (automated, on-demand), Secret
          recovery (mới trong 1.21). Troubleshooting — common issues, debug logs,
          vault debug command, server logs analysis và runbook production.
        duration_minutes: 240
        is_free: true
        sort_order: 25
        video_url: null
reviews: []
quizzes: []
---
<h2><strong>Phần 1: Nền tảng HashiCorp Vault</strong></h2>
<h3>Bài 1: Giới thiệu HashiCorp Vault - Secret Management trong Enterprise</h3>
<ul>
<li><p>HashiCorp Vault là gì? Lịch sử phát triển (từ HashiCorp đến CNCF)</p></li>
<li><p>Tại sao cần Secret Management tập trung?</p></li>
<li><p>Kiến trúc Vault: Storage Backend, Barrier, Secrets Engines, Auth Methods, Audit Devices</p></li>
<li><p>So sánh Vault vs AWS Secrets Manager vs Azure Key Vault vs Google Secret Manager</p></li>
<li><p>Các use cases: Static Secrets, Dynamic Credentials, Encryption as a Service, PKI, SSH</p></li>
</ul>
<h3>Bài 2: Cài đặt Vault - Standalone, Docker và Kubernetes</h3>
<ul>
<li><p>Cài đặt Vault trên Ubuntu/CentOS (package manager)</p></li>
<li><p>Chạy Vault với Docker và Docker Compose</p></li>
<li><p>Kubernetes Helm chart deployment</p></li>
<li><p>Cấu hình Storage Backend (Integrated Storage, File, Consul)</p></li>
<li><p>Dev Server vs Production Mode</p></li>
<li><p>Khởi tạo Vault (operator init), Seal/Unseal workflow</p></li>
</ul>
<h3>Bài 3: Vault CLI, API và Web UI</h3>
<ul>
<li><p>Vault CLI commands (read, write, list, delete, kv, auth, secrets, policy, operator)</p></li>
<li><p>Environment variables (VAULT_ADDR, VAULT_TOKEN, VAULT_NAMESPACE)</p></li>
<li><p>Vault HTTP API, cURL examples</p></li>
<li><p>SDK clients (Go, Python, Java, Node.js)</p></li>
<li><p>Vault Web UI overview và navigation</p></li>
</ul>
<h3>Bài 4: Seal/Unseal, Auto-unseal và Recovery Keys</h3>
<ul>
<li><p>Seal/Unseal mechanism và Shamir Secret Sharing</p></li>
<li><p>Key Shares, Key Threshold, Master Key</p></li>
<li><p>Auto-unseal (AWS KMS, Azure Key Vault, GCP Cloud KMS, Transit, HSM)</p></li>
<li><p>Recovery Keys và Re-keying (operator rekey)</p></li>
<li><p>Key Rotation và Seal Migration</p></li>
</ul>
<h3>Bài 5: Tokens, Leases và Renewal</h3>
<ul>
<li><p>Token types: Service tokens, Batch tokens</p></li>
<li><p>Token hierarchy, Orphan tokens, Token accessors</p></li>
<li><p>Token roles, Periodic tokens, TTL và Max TTL</p></li>
<li><p>Lease concept, Lease renewal, Lease revocation</p></li>
<li><p>Cubbyhole Response Wrapping</p></li>
</ul>

<h2><strong>Phần 2: Secrets Engines - Quản lý Bí mật</strong></h2>
<h3>Bài 6: KV Secrets Engine - Static Secrets Management</h3>
<ul>
<li><p>KV v1 vs KV v2 so sánh chi tiết</p></li>
<li><p>Enable/Configure KV Secrets Engine</p></li>
<li><p>CRUD operations, versioning, metadata</p></li>
<li><p>KV v2 version attribution (Vault 1.21)</p></li>
<li><p>Check-and-set (CAS), soft delete, patch operations</p></li>
</ul>
<h3>Bài 7: Database Secrets Engine - Dynamic Credentials</h3>
<ul>
<li><p>Database Secrets Engine concept</p></li>
<li><p>Cấu hình connections: PostgreSQL, MySQL, MongoDB, MSSQL</p></li>
<li><p>Dynamic roles và Static roles</p></li>
<li><p>Root credential rotation</p></li>
<li><p>Tích hợp với ứng dụng thực tế</p></li>
</ul>
<h3>Bài 8: PKI Secrets Engine - Certificate Authority</h3>
<ul>
<li><p>Tạo Root CA và Intermediate CA</p></li>
<li><p>Certificate roles, Issue/Sign certificates</p></li>
<li><p>CRL, OCSP, Auto-rotation, ACME protocol</p></li>
<li><p>PKI certificate counter (Vault 1.21)</p></li>
<li><p>Tích hợp với cert-manager, Nginx, mTLS</p></li>
</ul>
<h3>Bài 9: Transit Secrets Engine - Encryption as a Service</h3>
<ul>
<li><p>Encryption/Decryption operations</p></li>
<li><p>Key management và rotation</p></li>
<li><p>Key types, HMAC, Sign/Verify</p></li>
<li><p>Data key generation, Convergent encryption</p></li>
<li><p>BYOK và Batch operations</p></li>
</ul>
<h3>Bài 10: AWS, Azure, GCP và Cloud Secrets Engines</h3>
<ul>
<li><p>AWS Secrets Engine (IAM, STS AssumeRole)</p></li>
<li><p>Azure Secrets Engine (Static roles trong 1.21)</p></li>
<li><p>GCP Secrets Engine (Service Account, OAuth2)</p></li>
<li><p>Multi-cloud secret management best practices</p></li>
</ul>

<h2><strong>Phần 3: Auth Methods - Xác thực và Ủy quyền</strong></h2>
<h3>Bài 11: Auth Methods cơ bản - Token, Userpass và AppRole</h3>
<ul>
<li><p>Token Auth Method, Root tokens</p></li>
<li><p>Userpass Auth Method, Password policies</p></li>
<li><p>AppRole (RoleID, SecretID, CIDR binding)</p></li>
<li><p>Response wrapping cho SecretID</p></li>
<li><p>AppRole cho CI/CD pipelines</p></li>
</ul>
<h3>Bài 12: LDAP, OIDC và JWT Auth Methods</h3>
<ul>
<li><p>LDAP Auth Method (Active Directory integration)</p></li>
<li><p>OIDC Auth Method (Keycloak, Azure AD, Okta)</p></li>
<li><p>JWT Auth Method (GitHub Actions OIDC, GitLab CI)</p></li>
<li><p>Bound claims, Claim mappings</p></li>
</ul>
<h3>Bài 13: Kubernetes, AWS và Cloud Auth Methods</h3>
<ul>
<li><p>Kubernetes Auth Method (Service Account token review)</p></li>
<li><p>AWS Auth Method (IAM, EC2)</p></li>
<li><p>Azure, GCP Auth Methods</p></li>
<li><p>SPIFFE Auth Method (mới trong 1.21)</p></li>
<li><p>Workload identity best practices</p></li>
</ul>
<h3>Bài 14: Policies - ACL, Sentinel và RBAC</h3>
<ul>
<li><p>HCL policy syntax, Path-based policies</p></li>
<li><p>Capabilities (create, read, update, delete, list, sudo, deny)</p></li>
<li><p>Policy templates (identity parameters)</p></li>
<li><p>Fine-grained control (allowed_parameters, denied_parameters)</p></li>
<li><p>Sentinel policies (Enterprise) — EGP, RGP</p></li>
</ul>
<h3>Bài 15: Identity Secrets Engine, Entities và MFA</h3>
<ul>
<li><p>Identity Secrets Engine, Entities và Aliases</p></li>
<li><p>Internal Groups vs External Groups</p></li>
<li><p>Identity Tokens (OIDC provider)</p></li>
<li><p>MFA — TOTP, Duo, Okta, PingID</p></li>
<li><p>MFA TOTP self-enrollment (Vault 1.21)</p></li>
</ul>

<h2><strong>Phần 4: Secrets Engines nâng cao</strong></h2>
<h3>Bài 16: SSH Secrets Engine và TOTP</h3>
<ul>
<li><p>SSH Signed Certificates (CA mode)</p></li>
<li><p>SSH One-Time Password (OTP mode)</p></li>
<li><p>Host key signing, allowed users/extensions</p></li>
<li><p>TOTP Secrets Engine</p></li>
<li><p>LDAP Secrets Engine (RACF passphrase support 1.21)</p></li>
</ul>
<h3>Bài 17: Transform và Tokenization - Data Protection</h3>
<ul>
<li><p>Transform Secrets Engine (Enterprise)</p></li>
<li><p>Format Preserving Encryption (FPE), Masking</p></li>
<li><p>Tokenization stores (internal, external)</p></li>
<li><p>PCI DSS compliance, PII protection</p></li>
<li><p>Transit vs Transform — khi nào dùng cái nào</p></li>
</ul>
<h3>Bài 18: KMIP, Consul, Nomad Secrets Engines và Custom Plugins</h3>
<ul>
<li><p>KMIP Secrets Engine (Key Management Interoperability Protocol)</p></li>
<li><p>Consul và Nomad Secrets Engines</p></li>
<li><p>Vault Plugin System và plugin catalog</p></li>
<li><p>Developing custom secrets engines/auth methods (Go)</p></li>
<li><p>Plugin multiplexing và versioned plugins</p></li>
</ul>

<h2><strong>Phần 5: Vault Agent, Proxy và Kubernetes Integration</strong></h2>
<h3>Bài 19: Vault Agent và Vault Proxy</h3>
<ul>
<li><p>Vault Agent: Auto-auth, Template rendering, File sink</p></li>
<li><p>Agent caching, Process supervisor</p></li>
<li><p>Vault Proxy: API proxy mode, Static secret caching</p></li>
<li><p>Agent vs Proxy — khi nào dùng cái nào</p></li>
<li><p>Deployment patterns (systemd, Docker sidecar)</p></li>
</ul>
<h3>Bài 20: Vault trên Kubernetes - Helm, Operator và CSI</h3>
<ul>
<li><p>Deploy Vault bằng Helm chart (Standalone, HA, External)</p></li>
<li><p>Vault Secrets Operator (VaultAuth, VaultStaticSecret, VaultDynamicSecret)</p></li>
<li><p>Vault CSI Provider (SecretProviderClass)</p></li>
<li><p>Vault Agent Injector (annotations, templates)</p></li>
<li><p>VSO vs CSI vs Agent Injector comparison</p></li>
</ul>

<h2><strong>Phần 6: Tích hợp ứng dụng thực tế</strong></h2>
<h3>Bài 21: Tích hợp Vault với Spring Boot và Node.js</h3>
<ul>
<li><p>Spring Cloud Vault integration</p></li>
<li><p>Database credential rotation trong Java</p></li>
<li><p>Node.js với node-vault, Python hvac</p></li>
<li><p>Application patterns: direct API, sidecar, env vars, CSI</p></li>
<li><p>Secret zero problem và giải pháp</p></li>
</ul>
<h3>Bài 22: Vault với Terraform, Ansible và CI/CD Pipelines</h3>
<ul>
<li><p>Terraform Vault Provider (Infrastructure as Code)</p></li>
<li><p>Ansible Vault lookup plugin</p></li>
<li><p>GitHub Actions OIDC, GitLab CI JWT auth</p></li>
<li><p>Jenkins AppRole integration</p></li>
<li><p>ArgoCD Vault Plugin, External Secrets Operator</p></li>
</ul>

<h2><strong>Phần 7: Production, Enterprise và Vận hành</strong></h2>
<h3>Bài 23: High Availability, Integrated Storage và Production Hardening</h3>
<ul>
<li><p>Integrated Storage (Raft) cluster setup</p></li>
<li><p>Autopilot, Raft snapshots, WAL log store</p></li>
<li><p>HA: active/standby/performance standby</p></li>
<li><p>Production hardening: TLS, mlock, systemd, security checklist</p></li>
</ul>
<h3>Bài 24: Vault Enterprise - Namespaces, Replication và DR</h3>
<ul>
<li><p>Namespaces (multi-tenancy)</p></li>
<li><p>Performance Replication, Disaster Recovery</p></li>
<li><p>Sentinel policies (EGP/RGP)</p></li>
<li><p>Control Groups, Seal Wrap, Entropy Augmentation</p></li>
<li><p>License management và Enterprise upgrades</p></li>
</ul>
<h3>Bài 25: Monitoring, Audit Logging, Backup/Restore và Troubleshooting</h3>
<ul>
<li><p>Audit Devices (File, Syslog, Socket)</p></li>
<li><p>Prometheus metrics, Grafana dashboards</p></li>
<li><p>OpenTelemetry tracing</p></li>
<li><p>Raft snapshots, Secret recovery (Vault 1.21)</p></li>
<li><p>Troubleshooting, vault debug, production runbook</p></li>
</ul>
