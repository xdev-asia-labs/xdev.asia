---
id: 019d8b30-b100-7001-c001-e0c5f8100001
title: Keycloak từ Cơ bản đến Nâng cao
slug: keycloak-tu-co-ban-den-nang-cao
description: >-
  Khóa học Keycloak toàn diện từ cơ bản đến nâng cao, giúp bạn làm chủ
  Identity and Access Management (IAM) từ cài đặt, cấu hình Realms, Users,
  Roles, Clients, đến các module nâng cao như Identity Brokering, User Federation
  (LDAP/AD), Authentication Flows, Authorization Services, Multi-Factor Authentication,
  Organizations, Workflows, Passkeys, và tích hợp với ứng dụng thực tế.
  Cập nhật theo Keycloak 26.x (phiên bản mới nhất 2026) chạy trên Quarkus,
  bao gồm cả vận hành production, High Availability, Kubernetes Operator
  và các best practices bảo mật enterprise.
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
  id: 019c9617-fabb-72e7-91c2-a99abfb1cb8a
  name: Security
  slug: security
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
    title: 'Phần 1: Nền tảng Keycloak'
    description: 'Giới thiệu Keycloak, cài đặt, Realms, Users, Groups và Admin Console'
    sort_order: 1
    lessons:
      - id: 019d8b30-b101-7001-c001-e0c5f8100101
        title: 'Bài 1: Giới thiệu Keycloak - IAM và SSO trong Enterprise'
        slug: bai-1-gioi-thieu-keycloak-iam-va-sso-trong-enterprise
        description: >-
          Tìm hiểu Keycloak là gì, tại sao cần IAM, các khái niệm cốt lõi
          (Realms, Clients, Users, Roles, Groups, Sessions), kiến trúc Keycloak
          trên Quarkus, so sánh với Auth0/Okta/Azure AD, và các use cases thực tế
          trong doanh nghiệp. Tổng quan phiên bản Keycloak 26.x.
        duration_minutes: 90
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8b30-b102-7001-c001-e0c5f8100102
        title: 'Bài 2: Cài đặt Keycloak - Standalone, Docker và Kubernetes'
        slug: bai-2-cai-dat-keycloak-standalone-docker-va-kubernetes
        description: >-
          Hướng dẫn cài đặt Keycloak 26.x trên bare metal (Ubuntu/CentOS), Docker
          Compose và Kubernetes Operator. Cấu hình database backend (PostgreSQL,
          MySQL, MariaDB), HTTPS/TLS, reverse proxy (Nginx, HAProxy), hostname
          configuration v2 và chạy Keycloak ở chế độ development vs production.
        duration_minutes: 150
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8b30-b103-7001-c001-e0c5f8100103
        title: 'Bài 3: Admin Console và tạo Realm đầu tiên'
        slug: bai-3-admin-console-va-tao-realm-dau-tien
        description: >-
          Làm quen Admin Console, tạo admin user đầu tiên, tạo và cấu hình Realm,
          Realm Settings (General, Login, Email, Themes, Localization, Keys,
          Security Defenses), Admin CLI (kcadm.sh) và Admin REST API cơ bản.
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8b30-b104-7001-c001-e0c5f8100104
        title: 'Bài 4: Quản lý Users, Groups và User Profile'
        slug: bai-4-quan-ly-users-groups-va-user-profile
        description: >-
          Tạo và quản lý Users, thiết lập credentials, user attributes schema,
          User Profile configuration, custom attributes và validators, tạo Groups
          và sub-groups, group attributes, group role mappings, user self-registration,
          required actions, impersonation và personal data management.
        duration_minutes: 150
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019d8b30-b105-7001-c001-e0c5f8100105
        title: 'Bài 5: Roles, Permissions và Access Control'
        slug: bai-5-roles-permissions-va-access-control
        description: >-
          Realm roles, client roles, composite roles, role mappings cho users và
          groups, default roles, service account roles. Fine-grained admin permissions
          V2, realm administration delegation, resource-specific permissions,
          policies và permission evaluation.
        duration_minutes: 150
        is_free: true
        sort_order: 5
        video_url: null
  - id: section-02
    title: 'Phần 2: SSO Protocols - OpenID Connect và SAML'
    description: 'Cấu hình Clients, OIDC flows, SAML, Token management và Client Scopes'
    sort_order: 2
    lessons:
      - id: 019d8b30-b106-7001-c001-e0c5f8100106
        title: 'Bài 6: OpenID Connect Clients - Cấu hình từ A đến Z'
        slug: bai-6-openid-connect-clients-cau-hinh-tu-a-den-z
        description: >-
          Tạo OIDC clients (public, confidential, bearer-only), client settings
          chi tiết (Access Settings, Capability Config, Login/Logout settings),
          Authorization Code Flow, Implicit Flow, Client Credentials Grant,
          Device Authorization Grant, CIBA, PKCE, và tích hợp với ứng dụng
          web (React, Angular, Spring Boot, Node.js).
        duration_minutes: 200
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8b30-b107-7001-c001-e0c5f8100107
        title: 'Bài 7: SAML Clients và Protocol Mappers'
        slug: bai-7-saml-clients-va-protocol-mappers
        description: >-
          Tạo SAML 2.0 clients, SAML bindings (POST, Redirect, Artifact),
          SAML assertions, XML signature và encryption, Entity Descriptor import,
          IDP Initiated Login. Protocol Mappers cho OIDC và SAML: User Attribute,
          User Session Note, Hardcoded Claim, Script Mapper, Pairwise Subject
          Identifier và Lightweight Access Tokens.
        duration_minutes: 180
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8b30-b108-7001-c001-e0c5f8100108
        title: 'Bài 8: Client Scopes, Token Management và DPoP'
        slug: bai-8-client-scopes-token-management-va-dpop
        description: >-
          Client Scopes (default, optional), scope parameters, consent settings,
          realm default scopes, evaluating scopes. Access Token, ID Token,
          Refresh Token lifecycle, token timeout configuration, offline access,
          token revocation, lightweight access tokens,
          DPoP (Demonstrating Proof-of-Possession), và Client Policies
          cho token security.
        duration_minutes: 180
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019d8b30-b109-7001-c001-e0c5f8100109
        title: 'Bài 9: Client Policies và Advanced Client Configuration'
        slug: bai-9-client-policies-va-advanced-client-configuration
        description: >-
          Client Policies architecture, tạo policies và profiles, FAPI 2.0
          Security Profile, Client Secret Rotation, service accounts,
          audience support, confidential client credentials (Client ID/Secret,
          JWT, X.509), token exchange (internal-to-internal, external-to-internal),
          JWT Authorization Grant (RFC 7523) và cấu hình client cho MCP servers.
        duration_minutes: 180
        is_free: true
        sort_order: 9
        video_url: null
  - id: section-03
    title: 'Phần 3: Authentication, MFA và Identity Brokering'
    description: 'Authentication Flows, Multi-Factor Authentication, Social Login và Identity Providers'
    sort_order: 3
    lessons:
      - id: 019d8b30-b110-7001-c001-e0c5f8100110
        title: 'Bài 10: Authentication Flows - Tùy chỉnh luồng xác thực'
        slug: bai-10-authentication-flows-tuy-chinh-luong-xac-thuc
        description: >-
          Hiểu Authentication Flows trong Keycloak, Browser Flow, Direct Grant Flow,
          Registration Flow, Reset Credentials Flow, First Broker Login Flow.
          Tạo custom flows, thêm executions và sub-flows, conditional authenticators
          (Condition - sub-flow executed, Condition - client scope), Step-up
          Authentication, ACR to Level of Authentication (LoA) mapping
          và session limits.
        duration_minutes: 200
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8b30-b111-7001-c001-e0c5f8100111
        title: 'Bài 11: Multi-Factor Authentication - OTP, WebAuthn và Passkeys'
        slug: bai-11-multi-factor-authentication-otp-webauthn-va-passkeys
        description: >-
          Cấu hình Two-Factor Authentication với TOTP/HOTP (Google Authenticator,
          FreeOTP), OTP Policy settings, Recovery Codes. WebAuthn setup
          (FIDO2 security keys), WebAuthn Passwordless Policy. Passkeys integration
          (conditional và modal UI), đăng ký Passkeys qua AIA, Kerberos
          authentication và X.509 client certificate authentication.
        duration_minutes: 200
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8b30-b112-7001-c001-e0c5f8100112
        title: 'Bài 12: Identity Brokering và Social Login'
        slug: bai-12-identity-brokering-va-social-login
        description: >-
          Identity Provider concept, cấu hình Social Login (Google, Facebook,
          GitHub, Apple, Microsoft), OpenID Connect Identity Providers,
          SAML Identity Providers, OAuth v2 providers, Kubernetes Identity Providers.
          First Login Flow, Account Linking, Identity Provider Mappers,
          Sync Mode (import, force, legacy), client-suggested IdP (kc_idp_hint)
          và IdP logout flow.
        duration_minutes: 200
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-04
    title: 'Phần 4: User Federation, Organizations và Authorization'
    description: 'LDAP/AD federation, Organizations (CIAM), Authorization Services và Workflows'
    sort_order: 4
    lessons:
      - id: 019d8b30-b113-7001-c001-e0c5f8100113
        title: 'Bài 13: User Federation - LDAP và Active Directory'
        slug: bai-13-user-federation-ldap-va-active-directory
        description: >-
          Cấu hình LDAP/AD federation, storage mode (READ_ONLY, WRITABLE, UNSYNCED),
          edit mode, connection settings (SSL, connection pool), LDAP mappers
          (User Attribute, Full Name, Group, Role, Hardcoded Role, MSAD User Account
          Control), password hashing, user synchronization, SSSD/FreeIPA integration,
          Kerberos bridge, custom User Storage SPI và troubleshooting LDAP issues.
        duration_minutes: 220
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8b30-b114-7001-c001-e0c5f8100114
        title: 'Bài 14: Organizations - Multi-tenancy và CIAM'
        slug: bai-14-organizations-multi-tenancy-va-ciam
        description: >-
          Bật và cấu hình Organizations feature, tạo/quản lý organizations,
          organization domains, organization attributes, quản lý members
          (managed, unmanaged), invitation management (gửi, theo dõi, resend, xóa),
          liên kết Identity Providers với organizations, authenticating members
          (identity-first login), mapping organization claims vào tokens
          và B2B/B2B2C use cases thực tế.
        duration_minutes: 180
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8b30-b115-7001-c001-e0c5f8100115
        title: 'Bài 15: Authorization Services - Phân quyền chi tiết'
        slug: bai-15-authorization-services-phan-quyen-chi-tiet
        description: >-
          Authorization Services deep dive: Resource Server, Resources, Scopes,
          Permissions, Policies (Role-based, User-based, Group-based, Client-based,
          Time-based, JavaScript, Aggregated). UMA 2.0 support, Permission API,
          Policy Enforcer, Pushed Claims, Resource Attributes, Claim Information
          Points, Evaluation API và tích hợp Authorization vào ứng dụng
          Spring Boot / Node.js.
        duration_minutes: 240
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8b30-b116-7001-c001-e0c5f8100116
        title: 'Bài 16: Workflows - Tự động hóa quản trị với IGA'
        slug: bai-16-workflows-tu-dong-hoa-quan-tri-voi-iga
        description: >-
          Giới thiệu Keycloak Workflows (preview) cho Identity Governance and
          Administration (IGA). Understanding workflows, workflow definitions,
          workflow expression language, managing workflows, defining conditions
          và steps, Joiner-Mover-Leaver (JML) processes, automated onboarding/
          offboarding, access reviews và common use cases cho enterprise.
        duration_minutes: 160
        is_free: true
        sort_order: 16
        video_url: null
  - id: section-05
    title: 'Phần 5: Themes, Events, Security và Vault'
    description: 'Custom themes, event auditing, security hardening, brute force protection và vault'
    sort_order: 5
    lessons:
      - id: 019d8b30-b117-7001-c001-e0c5f8100117
        title: 'Bài 17: Custom Themes - Login, Account, Admin và Email'
        slug: bai-17-custom-themes-login-account-admin-va-email
        description: >-
          Keycloak theme system, tạo custom Login theme, Account Console theme,
          Admin Console theme và Email theme. Freemarker templates, theme properties,
          dark mode support, internationalization (i18n), custom CSS/JS,
          PatternFly 5, customizable footer, theme resources deployment
          và hot-deploy themes. Account Console v3 với User Profile support.
        duration_minutes: 180
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8b30-b118-7001-c001-e0c5f8100118
        title: 'Bài 18: Event Auditing và Logging'
        slug: bai-18-event-auditing-va-logging
        description: >-
          Cấu hình user events và admin events, event types (login, register,
          update credential, social link, etc.), event listeners (JBoss Logging,
          Email), custom event listeners SPI, event metrics cho monitoring,
          Keycloak logging configuration (console, file, JSON, ECS format),
          syslog cho remote logging, MDC Logging và tích hợp với ELK/Loki.
        duration_minutes: 150
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019d8b30-b119-7001-c001-e0c5f8100119
        title: 'Bài 19: Security Hardening và Brute Force Protection'
        slug: bai-19-security-hardening-va-brute-force-protection
        description: >-
          Bảo mật Keycloak production: SSL/HTTPS, admin endpoint protection,
          Brute Force Protection (lockout permanently, temporarily, combined),
          Password Policies (length, digits, special chars, not username, history),
          Read-only user attributes, Clickjacking protection (X-Frame-Options,
          CSP), CORS configuration, Content Security Policy, HSTS,
          reCAPTCHA setup, realm keys management, key rotation
          và sử dụng Vault (file-based, Kubernetes Secrets) để quản lý secrets.
        duration_minutes: 200
        is_free: true
        sort_order: 19
        video_url: null
  - id: section-06
    title: 'Phần 6: Tích hợp ứng dụng thực tế'
    description: 'Tích hợp Keycloak với Spring Boot, React, Node.js, Nginx và API Gateway'
    sort_order: 6
    lessons:
      - id: 019d8b30-b120-7001-c001-e0c5f8100120
        title: 'Bài 20: Tích hợp Keycloak với Spring Boot'
        slug: bai-20-tich-hop-keycloak-voi-spring-boot
        description: >-
          Tích hợp Keycloak với Spring Boot 3+ sử dụng Spring Security OAuth2
          Resource Server, Spring Security OAuth2 Client, Authorization Client
          library. Cấu hình OIDC authentication, role-based authorization,
          method-level security (@PreAuthorize), token relay, service-to-service
          communication, multi-tenancy và testing strategies.
        duration_minutes: 200
        is_free: true
        sort_order: 20
        video_url: null
      - id: 019d8b30-b121-7001-c001-e0c5f8100121
        title: 'Bài 21: Tích hợp Keycloak với React/Angular và Node.js'
        slug: bai-21-tich-hop-keycloak-voi-react-angular-va-nodejs
        description: >-
          Keycloak JavaScript adapter (standalone library), tích hợp với React
          (keycloak-js, react-oidc-context), Angular (angular-auth-oidc-client),
          Vue.js. Node.js backend với Passport.js hoặc express-openid-connect,
          token management (refresh, silent SSO), protected routes, role-based
          UI rendering và best practices cho SPA authentication.
        duration_minutes: 180
        is_free: true
        sort_order: 21
        video_url: null
      - id: 019d8b30-b122-7001-c001-e0c5f8100122
        title: 'Bài 22: Keycloak với Nginx, API Gateway và Microservices'
        slug: bai-22-keycloak-voi-nginx-api-gateway-va-microservices
        description: >-
          Cấu hình Nginx làm reverse proxy với Keycloak (auth_request module,
          OAuth2 Proxy), API Gateway patterns (Kong, Traefik, APISIX) với
          Keycloak OIDC plugin, Microservices authentication patterns,
          token introspection, service mesh integration, Docker registry v2
          authentication và Verifiable Credentials (OID4VCI) experimental.
        duration_minutes: 180
        is_free: true
        sort_order: 22
        video_url: null
  - id: section-07
    title: 'Phần 7: Production, High Availability và Kubernetes'
    description: 'Vận hành production, clustering, HA, backup, Kubernetes Operator và monitoring'
    sort_order: 7
    lessons:
      - id: 019d8b30-b123-7001-c001-e0c5f8100123
        title: 'Bài 23: Keycloak Production Deployment và Database Tuning'
        slug: bai-23-keycloak-production-deployment-va-database-tuning
        description: >-
          Production checklist, Keycloak build optimization (kc.sh build),
          cấu hình database production (PostgreSQL tuning, connection pool),
          additional datasources, hostname v2 configuration, reverse proxy setup
          (proxy headers, trusted addresses, PROXY protocol), HTTP/HTTPS settings,
          JVM tuning (heap, GC), Argon2 password hashing, cache configuration
          (Infinispan embedded, max-count) và import/export realm data.
        duration_minutes: 220
        is_free: true
        sort_order: 23
        video_url: null
      - id: 019d8b30-b124-7001-c001-e0c5f8100124
        title: 'Bài 24: High Availability, Clustering và Multi-site Deployment'
        slug: bai-24-high-availability-clustering-va-multi-site-deployment
        description: >-
          Keycloak clustering với Infinispan, transport stack jdbc-ping,
          zero-configuration secure cluster communication, session replication,
          persistent user sessions, multi-site active-passive deployments,
          cross-datacenter replication, rolling updates cho optimized images,
          load balancer health checks (non-blocking), Infinispan external cache
          và sizing guide cho CPU/memory.
        duration_minutes: 240
        is_free: true
        sort_order: 24
        video_url: null
      - id: 019d8b30-b125-7001-c001-e0c5f8100125
        title: 'Bài 25: Kubernetes Operator, Monitoring và Admin CLI'
        slug: bai-25-kubernetes-operator-monitoring-va-admin-cli
        description: >-
          Keycloak Operator trên Kubernetes/OpenShift, Keycloak CR configuration
          (replicas, truststores, scheduling, resources), KeycloakRealmImport CR,
          NetworkPolicies. Monitoring với OpenTelemetry (tracing, metrics, logging),
          Prometheus metrics, Grafana dashboards, event metrics, password hashing
          metrics. Admin CLI (kcadm.sh) cho realm/role/client/user/group operations,
          backup/restore strategies và troubleshooting production issues.
        duration_minutes: 240
        is_free: true
        sort_order: 25
        video_url: null
reviews: []
quizzes: []
---
<p></p><h2><strong>Phần 1: Nền tảng Keycloak</strong></h2>
<h3>Bài 1: Giới thiệu Keycloak - IAM và SSO trong Enterprise</h3>
<ul>
<li><p>Keycloak là gì? Lịch sử phát triển (từ JBoss đến CNCF Incubation)</p></li>
<li><p>Tại sao cần Identity and Access Management (IAM)?</p></li>
<li><p>Các khái niệm cốt lõi: Realms, Clients, Users, Roles, Groups, Sessions</p></li>
<li><p>Kiến trúc Keycloak trên Quarkus (26.x)</p></li>
<li><p>So sánh Keycloak vs Auth0 vs Okta vs Azure AD</p></li>
<li><p>Các use cases: SSO, Social Login, LDAP Federation, MFA, API Security</p></li>
</ul>
<h3>Bài 2: Cài đặt Keycloak - Standalone, Docker và Kubernetes</h3>
<ul>
<li><p>Cài đặt Keycloak trên Ubuntu/CentOS (bare metal)</p></li>
<li><p>Chạy Keycloak với Docker và Docker Compose</p></li>
<li><p>Kubernetes Operator deployment</p></li>
<li><p>Cấu hình Database backend (PostgreSQL, MySQL, MariaDB)</p></li>
<li><p>HTTPS/TLS setup và hostname v2 configuration</p></li>
<li><p>Development mode vs Production mode</p></li>
</ul>
<h3>Bài 3: Admin Console và tạo Realm đầu tiên</h3>
<ul>
<li><p>Tạo Admin user đầu tiên (Admin Bootstrap & Recovery)</p></li>
<li><p>Tổng quan Admin Console UI</p></li>
<li><p>Tạo và cấu hình Realm (General, Login, Email, Themes, Keys)</p></li>
<li><p>Master Realm vs Custom Realms</p></li>
<li><p>Admin CLI (kcadm.sh) cơ bản</p></li>
<li><p>Admin REST API overview</p></li>
</ul>
<h3>Bài 4: Quản lý Users, Groups và User Profile</h3>
<ul>
<li><p>Tạo và quản lý Users, thiết lập credentials</p></li>
<li><p>User Profile: custom attributes, validators, annotations</p></li>
<li><p>Progressive Profiling</p></li>
<li><p>Groups và Sub-groups, group attributes, role mappings</p></li>
<li><p>User self-registration và Required Actions</p></li>
<li><p>Impersonation, account deletion, personal data</p></li>
</ul>
<h3>Bài 5: Roles, Permissions và Access Control</h3>
<ul>
<li><p>Realm Roles và Client Roles</p></li>
<li><p>Composite Roles và Default Roles</p></li>
<li><p>Role Mappings cho Users và Groups</p></li>
<li><p>Fine-grained Admin Permissions V2</p></li>
<li><p>Delegating Realm Administration</p></li>
<li><p>Dedicated Realm Admin Consoles</p></li>
</ul>

<h2><strong>Phần 2: SSO Protocols - OpenID Connect và SAML</strong></h2>
<h3>Bài 6: OpenID Connect Clients - Cấu hình từ A đến Z</h3>
<ul>
<li><p>Client types: Public, Confidential, Bearer-only</p></li>
<li><p>General Settings, Access Settings, Capability Config</p></li>
<li><p>OIDC Auth Flows: Authorization Code, Implicit, Client Credentials, Device Auth</p></li>
<li><p>PKCE (Proof Key for Code Exchange)</p></li>
<li><p>CIBA (Client Initiated Backchannel Authentication)</p></li>
<li><p>Tích hợp OIDC clients với React, Spring Boot, Node.js</p></li>
</ul>
<h3>Bài 7: SAML Clients và Protocol Mappers</h3>
<ul>
<li><p>Tạo SAML 2.0 Clients, SAML Bindings (POST, Redirect, Artifact)</p></li>
<li><p>SAML Assertions, XML Signature và Encryption</p></li>
<li><p>Entity Descriptor Import</p></li>
<li><p>OIDC Protocol Mappers: User Attribute, Session Note, Hardcoded, Script</p></li>
<li><p>SAML Protocol Mappers</p></li>
<li><p>Lightweight Access Tokens và Pairwise Subject Identifier</p></li>
</ul>
<h3>Bài 8: Client Scopes, Token Management và DPoP</h3>
<ul>
<li><p>Client Scopes: default vs optional, consent settings</p></li>
<li><p>Realm default client scopes, evaluating scopes</p></li>
<li><p>Access Token, ID Token, Refresh Token lifecycle</p></li>
<li><p>Session và Token timeout configuration</p></li>
<li><p>Offline Access, Token Revocation</p></li>
<li><p>DPoP (Demonstrating Proof-of-Possession)</p></li>
</ul>
<h3>Bài 9: Client Policies và Advanced Client Configuration</h3>
<ul>
<li><p>Client Policies architecture: Policies, Profiles, Conditions, Executors</p></li>
<li><p>FAPI 2.0 Security Profile và Message Signing</p></li>
<li><p>Client Secret Rotation</p></li>
<li><p>Service Accounts và Audience support</p></li>
<li><p>Token Exchange (Standard, JWT Authorization Grant RFC 7523)</p></li>
<li><p>Keycloak as Authorization Server cho MCP servers</p></li>
</ul>

<h2><strong>Phần 3: Authentication, MFA và Identity Brokering</strong></h2>
<h3>Bài 10: Authentication Flows - Tùy chỉnh luồng xác thực</h3>
<ul>
<li><p>Built-in flows: Browser, Direct Grant, Registration, Reset Credentials</p></li>
<li><p>Tạo custom Authentication Flows</p></li>
<li><p>Conditional Authenticators (sub-flow executed, client scope)</p></li>
<li><p>Step-up Authentication và ACR/LoA mapping</p></li>
<li><p>Session Limits (realm-level, client-level)</p></li>
<li><p>Dynamic Authentication Flow selection via Client Policies</p></li>
</ul>
<h3>Bài 11: Multi-Factor Authentication - OTP, WebAuthn và Passkeys</h3>
<ul>
<li><p>TOTP/HOTP setup với Google Authenticator, FreeOTP</p></li>
<li><p>OTP Policy configuration và Recovery Codes</p></li>
<li><p>WebAuthn (FIDO2 Security Keys) setup</p></li>
<li><p>Passkeys integration (conditional UI, modal UI)</p></li>
<li><p>Kerberos Authentication</p></li>
<li><p>X.509 Client Certificate Authentication</p></li>
</ul>
<h3>Bài 12: Identity Brokering và Social Login</h3>
<ul>
<li><p>Social Login: Google, Facebook, GitHub, Apple, Microsoft</p></li>
<li><p>OpenID Connect và SAML Identity Providers</p></li>
<li><p>OAuth v2 và Kubernetes Identity Providers</p></li>
<li><p>First Login Flow và Account Linking</p></li>
<li><p>Identity Provider Mappers và Sync Mode</p></li>
<li><p>Client-suggested IdP và IdP logout</p></li>
</ul>

<h2><strong>Phần 4: User Federation, Organizations và Authorization</strong></h2>
<h3>Bài 13: User Federation - LDAP và Active Directory</h3>
<ul>
<li><p>Cấu hình LDAP/AD federation (storage mode, edit mode)</p></li>
<li><p>Connection settings: SSL, connection pool, referrals</p></li>
<li><p>LDAP Mappers: User Attribute, Full Name, Group, Role</p></li>
<li><p>MSAD User Account Control mapper</p></li>
<li><p>SSSD/FreeIPA Integration và Kerberos bridge</p></li>
<li><p>Custom User Storage SPI</p></li>
</ul>
<h3>Bài 14: Organizations - Multi-tenancy và CIAM</h3>
<ul>
<li><p>Bật Organizations feature trong Keycloak</p></li>
<li><p>Tạo/quản lý Organizations, Domains, Attributes</p></li>
<li><p>Member Management: managed, unmanaged, invitations</p></li>
<li><p>Liên kết Identity Providers với Organizations</p></li>
<li><p>Identity-first login flow</p></li>
<li><p>Mapping Organization claims vào tokens</p></li>
</ul>
<h3>Bài 15: Authorization Services - Phân quyền chi tiết</h3>
<ul>
<li><p>Resource Server, Resources, Scopes, Permissions, Policies</p></li>
<li><p>Policy types: Role, User, Group, Client, Time, JS, Aggregated</p></li>
<li><p>UMA 2.0 và Permission API</p></li>
<li><p>Policy Enforcer và Claim Information Points</p></li>
<li><p>Tích hợp Authorization vào Spring Boot / Node.js</p></li>
<li><p>Evaluation API và troubleshooting permissions</p></li>
</ul>
<h3>Bài 16: Workflows - Tự động hóa quản trị với IGA</h3>
<ul>
<li><p>Keycloak Workflows engine (preview)</p></li>
<li><p>Workflow definitions và expression language</p></li>
<li><p>Defining conditions và steps</p></li>
<li><p>Joiner-Mover-Leaver (JML) processes</p></li>
<li><p>Automated onboarding/offboarding</p></li>
<li><p>Access reviews và common use cases</p></li>
</ul>

<h2><strong>Phần 5: Themes, Events, Security và Vault</strong></h2>
<h3>Bài 17: Custom Themes - Login, Account, Admin và Email</h3>
<ul>
<li><p>Theme system: Login, Account, Admin Console, Email themes</p></li>
<li><p>Tạo custom themes, Freemarker templates</p></li>
<li><p>Dark mode support, internationalization</p></li>
<li><p>PatternFly 5 components</p></li>
<li><p>Hot-deploy themes, theme resources</p></li>
<li><p>Account Console v3 customization</p></li>
</ul>
<h3>Bài 18: Event Auditing và Logging</h3>
<ul>
<li><p>User events và Admin events configuration</p></li>
<li><p>Event types và Event listeners</p></li>
<li><p>Custom Event Listener SPI</p></li>
<li><p>Event metrics cho monitoring</p></li>
<li><p>Logging: console, file, JSON, ECS format, syslog</p></li>
<li><p>Tích hợp với ELK Stack / Loki</p></li>
</ul>
<h3>Bài 19: Security Hardening và Brute Force Protection</h3>
<ul>
<li><p>SSL/HTTPS và Admin endpoint protection</p></li>
<li><p>Brute Force Protection (permanent, temporary, combined lockout)</p></li>
<li><p>Password Policies</p></li>
<li><p>Security Headers: CSP, X-Frame-Options, HSTS</p></li>
<li><p>reCAPTCHA setup (v2 và Enterprise)</p></li>
<li><p>Vault integration (file-based, Kubernetes Secrets)</p></li>
</ul>

<h2><strong>Phần 6: Tích hợp ứng dụng thực tế</strong></h2>
<h3>Bài 20: Tích hợp Keycloak với Spring Boot</h3>
<ul>
<li><p>Spring Security OAuth2 Resource Server</p></li>
<li><p>Spring Security OAuth2 Client</p></li>
<li><p>Authorization Client library</p></li>
<li><p>Role-based authorization với @PreAuthorize</p></li>
<li><p>Token relay và service-to-service communication</p></li>
<li><p>Multi-tenancy và testing strategies</p></li>
</ul>
<h3>Bài 21: Tích hợp Keycloak với React/Angular và Node.js</h3>
<ul>
<li><p>Keycloak JavaScript adapter (standalone library)</p></li>
<li><p>React integration (keycloak-js, react-oidc-context)</p></li>
<li><p>Angular integration (angular-auth-oidc-client)</p></li>
<li><p>Node.js backend (Passport.js, express-openid-connect)</p></li>
<li><p>Token management, silent SSO, protected routes</p></li>
<li><p>Best practices cho SPA authentication</p></li>
</ul>
<h3>Bài 22: Keycloak với Nginx, API Gateway và Microservices</h3>
<ul>
<li><p>Nginx reverse proxy với auth_request / OAuth2 Proxy</p></li>
<li><p>API Gateway: Kong, Traefik, APISIX với Keycloak OIDC</p></li>
<li><p>Microservices authentication patterns</p></li>
<li><p>Token introspection endpoint</p></li>
<li><p>Docker registry v2 authentication</p></li>
<li><p>Verifiable Credentials (OID4VCI) - experimental</p></li>
</ul>

<h2><strong>Phần 7: Production, High Availability và Kubernetes</strong></h2>
<h3>Bài 23: Keycloak Production Deployment và Database Tuning</h3>
<ul>
<li><p>Production readiness checklist</p></li>
<li><p>Build optimization (kc.sh build)</p></li>
<li><p>Database tuning: PostgreSQL, connection pool, additional datasources</p></li>
<li><p>Hostname v2, reverse proxy, HTTP/HTTPS settings</p></li>
<li><p>JVM tuning, Argon2 hashing, cache configuration</p></li>
<li><p>Import/Export realm data</p></li>
</ul>
<h3>Bài 24: High Availability, Clustering và Multi-site Deployment</h3>
<ul>
<li><p>Keycloak clustering với Infinispan, jdbc-ping transport</p></li>
<li><p>Zero-configuration secure cluster communication</p></li>
<li><p>Session replication và persistent user sessions</p></li>
<li><p>Multi-site active-passive deployments</p></li>
<li><p>Rolling updates và non-blocking health checks</p></li>
<li><p>CPU/Memory sizing guide</p></li>
</ul>
<h3>Bài 25: Kubernetes Operator, Monitoring và Admin CLI</h3>
<ul>
<li><p>Keycloak Operator: Keycloak CR, KeycloakRealmImport CR</p></li>
<li><p>Operator advanced configuration (scheduling, resources, NetworkPolicies)</p></li>
<li><p>OpenTelemetry: tracing, metrics, logging</p></li>
<li><p>Prometheus metrics và Grafana dashboards</p></li>
<li><p>Admin CLI (kcadm.sh) mastery</p></li>
<li><p>Backup/Restore strategies và troubleshooting</p></li>
</ul>
