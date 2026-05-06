---
id: 019d8b30-b100-7001-c001-e0c5f8100001
title: Keycloak from Basic to Advanced
slug: keycloak-tu-co-ban-den-nang-cao
description: The Keycloak course is comprehensive from basic to advanced, helping you master Identity and Access Management (IAM) from installing and configuring Realms, Users, Roles, Clients, to advanced modules such as Identity Brokering, User Federation (LDAP/AD), Authentication Flows, Authorization Services, Multi-Factor Authentication, Organizations, Workflows, Passkeys, and integrating with real applications. Updated to Keycloak 26.x (latest version 2026) running on Quarkus, including production operations, High Availability, Kubernetes Operators and enterprise security best practices.
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
  title: 'Part 1: Keycloak Platform'
  description: Introducing Keycloak, settings, Realms, Users, Groups and Admin Console
  sort_order: 1
  lessons:
  - id: 019d8b30-b101-7001-c001-e0c5f8100101
    title: 'Lesson 1: Introducing Keycloak - IAM and SSO in Enterprise'
    slug: bai-1-gioi-thieu-keycloak-iam-va-sso-trong-enterprise
    description: Learn what Keycloak is, why do you need IAM, core concepts (Realms, Clients, Users, Roles, Groups, Sessions), Keycloak architecture on Quarkus, comparison with Auth0/Okta/Azure AD, and real use cases in the enterprise. Keycloak 26.x version overview.
    duration_minutes: 90
    is_free: true
    sort_order: 1
    video_url: null
  - id: 019d8b30-b102-7001-c001-e0c5f8100102
    title: 'Lesson 2: Install Keycloak - Standalone, Docker and Kubernetes'
    slug: bai-2-cai-dat-keycloak-standalone-docker-va-kubernetes
    description: Instructions for installing Keycloak 26.x on bare metal (Ubuntu/CentOS), Docker Compose and Kubernetes Operator. Configure database backend (PostgreSQL, MySQL, MariaDB), HTTPS/TLS, reverse proxy (Nginx, HAProxy), hostname configuration v2 and run Keycloak in development vs production mode.
    duration_minutes: 150
    is_free: true
    sort_order: 2
    video_url: null
  - id: 019d8b30-b103-7001-c001-e0c5f8100103
    title: 'Lesson 3: Admin Console and creating the first Realm'
    slug: bai-3-admin-console-va-tao-realm-dau-tien
    description: Get acquainted with the Admin Console, create the first admin user, create and configure Realm, Realm Settings (General, Login, Email, Themes, Localization, Keys, Security Defenses), Admin CLI (kcadm.sh) and basic Admin REST API.
    duration_minutes: 120
    is_free: true
    sort_order: 3
    video_url: null
  - id: 019d8b30-b104-7001-c001-e0c5f8100104
    title: 'Lesson 4: Managing Users, Groups and User Profile'
    slug: bai-4-quan-ly-users-groups-va-user-profile
    description: Create and manage Users, set credentials, user attributes schema, User Profile configuration, custom attributes and validators, create Groups and sub-groups, group attributes, group role mappings, user self-registration, required actions, impersonation and personal data management.
    duration_minutes: 150
    is_free: true
    sort_order: 4
    video_url: null
  - id: 019d8b30-b105-7001-c001-e0c5f8100105
    title: 'Lesson 5: Roles, Permissions and Access Control'
    slug: bai-5-roles-permissions-va-access-control
    description: Realm roles, client roles, composite roles, role mappings for users and groups, default roles, service account roles. Fine-grained admin permissions V2, realm administration delegation, resource-specific permissions, policies and permission evaluation.
    duration_minutes: 150
    is_free: true
    sort_order: 5
    video_url: null
- id: section-02
  title: 'Part 2: SSO Protocols - OpenID Connect and SAML'
  description: Configure Clients, OIDC flows, SAML, Token management and Client Scopes
  sort_order: 2
  lessons:
  - id: 019d8b30-b106-7001-c001-e0c5f8100106
    title: 'Lesson 6: OpenID Connect Clients - Configuration from A to Z'
    slug: bai-6-openid-connect-clients-cau-hinh-tu-a-den-z
    description: Create OIDC clients (public, confidential, bearer-only), detailed client settings (Access Settings, Capability Config, Login/Logout settings), Authorization Code Flow, Implicit Flow, Client Credentials Grant, Device Authorization Grant, CIBA, PKCE, and integrate with web applications (React, Angular, Spring Boot, Node.js).
    duration_minutes: 200
    is_free: true
    sort_order: 6
    video_url: null
  - id: 019d8b30-b107-7001-c001-e0c5f8100107
    title: 'Lesson 7: SAML Clients and Protocol Mappers'
    slug: bai-7-saml-clients-va-protocol-mappers
    description: 'Create SAML 2.0 clients, SAML bindings (POST, Redirect, Artifact), SAML assertions, XML signature and encryption, Entity Descriptor import, IDP Initiated Login. Protocol Mappers for OIDC and SAML: User Attribute, User Session Note, Hardcoded Claim, Script Mapper, Pairwise Subject Identifier and Lightweight Access Tokens.'
    duration_minutes: 180
    is_free: true
    sort_order: 7
    video_url: null
  - id: 019d8b30-b108-7001-c001-e0c5f8100108
    title: 'Lesson 8: Client Scopes, Token Management and DPoP'
    slug: bai-8-client-scopes-token-management-va-dpop
    description: Client Scopes (default, optional), scope parameters, consent settings, realm default scopes, evaluating scopes. Access Token, ID Token, Refresh Token lifecycle, token timeout configuration, offline access, token revocation, lightweight access tokens, DPoP (Demonstrating Proof-of-Possession), and Client Policies for token security.
    duration_minutes: 180
    is_free: true
    sort_order: 8
    video_url: null
  - id: 019d8b30-b109-7001-c001-e0c5f8100109
    title: 'Lesson 9: Client Policies and Advanced Client Configuration'
    slug: bai-9-client-policies-va-advanced-client-configuration
    description: Client Policies architecture, creating policies and profiles, FAPI 2.0 Security Profile, Client Secret Rotation, service accounts, audience support, confidential client credentials (Client ID/Secret, JWT, X.509), token exchange (internal-to-internal, external-to-internal), JWT Authorization Grant (RFC 7523) and client configuration for MCP servers.
    duration_minutes: 180
    is_free: true
    sort_order: 9
    video_url: null
- id: section-03
  title: 'Part 3: Authentication, MFA and Identity Brokering'
  description: Authentication Flows, Multi-Factor Authentication, Social Login and Identity Providers
  sort_order: 3
  lessons:
  - id: 019d8b30-b110-7001-c001-e0c5f8100110
    title: 'Lesson 10: Authentication Flows - Customize authentication flows'
    slug: bai-10-authentication-flows-tuy-chinh-luong-xac-thuc
    description: Understand Authentication Flows in Keycloak, Browser Flow, Direct Grant Flow, Registration Flow, Reset Credentials Flow, First Broker Login Flow. Create custom flows, add executions and sub-flows, conditional authenticators (Condition - sub-flow executed, Condition - client scope), Step-up Authentication, ACR to Level of Authentication (LoA) mapping and session limits.
    duration_minutes: 200
    is_free: true
    sort_order: 10
    video_url: null
  - id: 019d8b30-b111-7001-c001-e0c5f8100111
    title: 'Lesson 11: Multi-Factor Authentication - OTP, WebAuthn and Passkeys'
    slug: bai-11-multi-factor-authentication-otp-webauthn-va-passkeys
    description: Configure Two-Factor Authentication with TOTP/HOTP (Google Authenticator, FreeOTP), OTP Policy settings, Recovery Codes. WebAuthn setup (FIDO2 security keys), WebAuthn Passwordless Policy. Passkeys integration (conditional and modal UI), Passkeys registration via AIA, Kerberos authentication and X.509 client certificate authentication.
    duration_minutes: 200
    is_free: true
    sort_order: 11
    video_url: null
  - id: 019d8b30-b112-7001-c001-e0c5f8100112
    title: 'Lesson 12: Identity Brokering and Social Login'
    slug: bai-12-identity-brokering-va-social-login
    description: Identity Provider concept, Social Login configuration (Google, Facebook, GitHub, Apple, Microsoft), OpenID Connect Identity Providers, SAML Identity Providers, OAuth v2 providers, Kubernetes Identity Providers. First Login Flow, Account Linking, Identity Provider Mappers, Sync Mode (import, force, legacy), client-suggested IdP (kc_idp_hint) and IdP logout flow.
    duration_minutes: 200
    is_free: true
    sort_order: 12
    video_url: null
- id: section-04
  title: 'Part 4: User Federation, Organizations and Authorization'
  description: LDAP/AD federation, Organizations (CIAM), Authorization Services and Workflows
  sort_order: 4
  lessons:
  - id: 019d8b30-b113-7001-c001-e0c5f8100113
    title: 'Lesson 13: User Federation - LDAP and Active Directory'
    slug: bai-13-user-federation-ldap-va-active-directory
    description: Configure LDAP/AD federation, storage mode (READ_ONLY, WRITABLE, UNSYNCED), edit mode, connection settings (SSL, connection pool), LDAP mappers (User Attribute, Full Name, Group, Role, Hardcoded Role, MSAD User Account Control), password hashing, user synchronization, SSSD/FreeIPA integration, Kerberos bridge, custom User Storage SPI and troubleshooting LDAP issues.
    duration_minutes: 220
    is_free: true
    sort_order: 13
    video_url: null
  - id: 019d8b30-b114-7001-c001-e0c5f8100114
    title: 'Lesson 14: Organizations - Multi-tenancy and CIAM'
    slug: bai-14-organizations-multi-tenancy-va-ciam
    description: Enable and configure the Organizations feature, create/manage organizations, organization domains, organization attributes, manage members (managed, unmanaged), invitation management (send, track, resend, delete), associate Identity Providers with organizations, authenticating members (identity-first login), mapping organization claims to tokens and actual B2B/B2B2C use cases.
    duration_minutes: 180
    is_free: true
    sort_order: 14
    video_url: null
  - id: 019d8b30-b115-7001-c001-e0c5f8100115
    title: 'Lesson 15: Authorization Services - Detailed authorization'
    slug: bai-15-authorization-services-phan-quyen-chi-tiet
    description: 'Authorization Services deep dive: Resource Server, Resources, Scopes, Permissions, Policies (Role-based, User-based, Group-based, Client-based, Time-based, JavaScript, Aggregated). UMA 2.0 support, Permission API, Policy Enforcer, Pushed Claims, Resource Attributes, Claim Information Points, Evaluation API and Authorization integration into Spring Boot / Node.js applications.'
    duration_minutes: 240
    is_free: true
    sort_order: 15
    video_url: null
  - id: 019d8b30-b116-7001-c001-e0c5f8100116
    title: 'Lesson 16: Workflows - Automating administration with IGA'
    slug: bai-16-workflows-tu-dong-hoa-quan-tri-voi-iga
    description: Introducing Keycloak Workflows (preview) for Identity Governance and Administration (IGA). Understanding workflows, workflow definitions, workflow expression language, managing workflows, defining conditions and steps, Joiner-Mover-Leaver (JML) processes, automated onboarding/offboarding, access reviews and common use cases for enterprises.
    duration_minutes: 160
    is_free: true
    sort_order: 16
    video_url: null
- id: section-05
  title: 'Part 5: Themes, Events, Security and Vault'
  description: Custom themes, event auditing, security hardening, brute force protection and vault
  sort_order: 5
  lessons:
  - id: 019d8b30-b117-7001-c001-e0c5f8100117
    title: 'Lesson 17: Custom Themes - Login, Account, Admin and Email'
    slug: bai-17-custom-themes-login-account-admin-va-email
    description: Keycloak theme system, create custom Login theme, Account Console theme, Admin Console theme and Email theme. Freemarker templates, theme properties, dark mode support, internationalization (i18n), custom CSS/JS, PatternFly 5, customizable footer, theme resources deployment and hot-deploy themes. Account Console v3 with User Profile support.
    duration_minutes: 180
    is_free: true
    sort_order: 17
    video_url: null
  - id: 019d8b30-b118-7001-c001-e0c5f8100118
    title: 'Lesson 18: Event Auditing and Logging'
    slug: bai-18-event-auditing-va-logging
    description: Configure user events and admin events, event types (login, register, update credential, social link, etc.), event listeners (JBoss Logging, Email), custom event listeners SPI, event metrics for monitoring, Keycloak logging configuration (console, file, JSON, ECS format), syslog for remote logging, MDC Logging and integration with ELK/Loki.
    duration_minutes: 150
    is_free: true
    sort_order: 18
    video_url: null
  - id: 019d8b30-b119-7001-c001-e0c5f8100119
    title: 'Lesson 19: Security Hardening and Brute Force Protection'
    slug: bai-19-security-hardening-va-brute-force-protection
    description: 'Keycloak production security: SSL/HTTPS, admin endpoint protection, Brute Force Protection (lockout permanent, temporary, combined), Password Policies (length, digits, special chars, not username, history), Read-only user attributes, Clickjacking protection (X-Frame-Options, CSP), CORS configuration, Content Security Policy, HSTS, reCAPTCHA setup, realm keys management, key rotation and uses Vault (file-based, Kubernetes Secrets) to manage secrets.'
    duration_minutes: 200
    is_free: true
    sort_order: 19
    video_url: null
- id: section-06
  title: 'Part 6: Integrating practical applications'
  description: Integrate Keycloak with Spring Boot, React, Node.js, Nginx and API Gateway
  sort_order: 6
  lessons:
  - id: 019d8b30-b120-7001-c001-e0c5f8100120
    title: 'Lesson 20: Integrating Keycloak with Spring Boot'
    slug: bai-20-tich-hop-keycloak-voi-spring-boot
    description: Integrate Keycloak with Spring Boot 3+ using Spring Security OAuth2 Resource Server, Spring Security OAuth2 Client, Authorization Client library. Configure OIDC authentication, role-based authorization, method-level security (@PreAuthorize), token relay, service-to-service communication, multi-tenancy and testing strategies.
    duration_minutes: 200
    is_free: true
    sort_order: 20
    video_url: null
  - id: 019d8b30-b121-7001-c001-e0c5f8100121
    title: 'Lesson 21: Integrating Keycloak with React/Angular and Node.js'
    slug: bai-21-tich-hop-keycloak-voi-react-angular-va-nodejs
    description: Keycloak JavaScript adapter (standalone library), integration with React (keycloak-js, react-oidc-context), Angular (angular-auth-oidc-client), Vue.js. Node.js backend with Passport.js or express-openid-connect, token management (refresh, silent SSO), protected routes, role-based UI rendering and best practices for SPA authentication.
    duration_minutes: 180
    is_free: true
    sort_order: 21
    video_url: null
  - id: 019d8b30-b122-7001-c001-e0c5f8100122
    title: 'Lesson 22: Keycloak with Nginx, API Gateway and Microservices'
    slug: bai-22-keycloak-voi-nginx-api-gateway-va-microservices
    description: Configure Nginx as a reverse proxy with Keycloak (auth_request module, OAuth2 Proxy), API Gateway patterns (Kong, Traefik, APISIX) with Keycloak OIDC plugin, Microservices authentication patterns, token introspection, service mesh integration, Docker registry v2 authentication and Verifiable Credentials (OID4VCI) experimental.
    duration_minutes: 180
    is_free: true
    sort_order: 22
    video_url: null
- id: section-07
  title: 'Part 7: Production, High Availability and Kubernetes'
  description: Operate production, clustering, HA, backup, Kubernetes Operator and monitoring
  sort_order: 7
  lessons:
  - id: 019d8b30-b123-7001-c001-e0c5f8100123
    title: 'Lesson 23: Keycloak Production Deployment and Database Tuning'
    slug: bai-23-keycloak-production-deployment-va-database-tuning
    description: Production checklist, Keycloak build optimization (kc.sh build), production database configuration (PostgreSQL tuning, connection pool), additional datasources, hostname v2 configuration, reverse proxy setup (proxy headers, trusted addresses, PROXY protocol), HTTP/HTTPS settings, JVM tuning (heap, GC), Argon2 password hashing, cache configuration (Infinispan embedded, max-count) and import/export realm data.
    duration_minutes: 220
    is_free: true
    sort_order: 23
    video_url: null
  - id: 019d8b30-b124-7001-c001-e0c5f8100124
    title: 'Lesson 24: High Availability, Clustering and Multi-site Deployment'
    slug: bai-24-high-availability-clustering-va-multi-site-deployment
    description: Keycloak clustering with Infinispan, transport stack jdbc-ping, zero-configuration secure cluster communication, session replication, persistent user sessions, multi-site active-passive deployments, cross-datacenter replication, rolling updates for optimized images, load balancer health checks (non-blocking), Infinispan external cache and sizing guide for CPU/memory.
    duration_minutes: 240
    is_free: true
    sort_order: 24
    video_url: null
  - id: 019d8b30-b125-7001-c001-e0c5f8100125
    title: 'Lesson 25: Kubernetes Operator, Monitoring and Admin CLI'
    slug: bai-25-kubernetes-operator-monitoring-va-admin-cli
    description: Keycloak Operator on Kubernetes/OpenShift, Keycloak CR configuration (replicas, truststores, scheduling, resources), KeycloakRealmImport CR, NetworkPolicies. Monitoring with OpenTelemetry (tracing, metrics, logging), Prometheus metrics, Grafana dashboards, event metrics, password hashing metrics. Admin CLI (kcadm.sh) for realm/role/client/user/group operations, backup/restore strategies and troubleshooting production issues.
    duration_minutes: 240
    is_free: true
    sort_order: 25
    video_url: null
reviews: []
quizzes: []
locale: en
---
<p></p><h2><strong>Part 1: Keycloak Platform</strong></h2>
<h3>Lesson 1: Introducing Keycloak - IAM and SSO in Enterprise</h3>
<ul>
<li><p>What is Keycloak? Development history (from JBoss to CNCF Incubation)</p></li>
<li><p>Why do we need Identity and Access Management (IAM)?</p></li>
<li><p>Core concepts: Realms, Clients, Users, Roles, Groups, Sessions</p></li>
<li><p>Keycloak Architecture on Quarkus (26.x)</p></li>
<li><p>Compare Keycloak vs Auth0 vs Okta vs Azure AD</p></li>
<li><p>Use cases: SSO, Social Login, LDAP Federation, MFA, API Security</p></li>
</ul>
<h3>Lesson 2: Installing Keycloak - Standalone, Docker and Kubernetes</h3>
<ul>
<li><p>Install Keycloak on Ubuntu/CentOS (bare metal)</p></li>
<li><p>Run Keycloak with Docker and Docker Compose</p></li>
<li><p>Kubernetes Operator deployment</p></li>
<li><p>Configure Database backend (PostgreSQL, MySQL, MariaDB)</p></li>
<li><p>HTTPS/TLS setup and hostname v2 configuration</p></li>
<li><p>Development mode vs Production mode</p></li>
</ul>
<h3>Lesson 3: Admin Console and creating the first Realm</h3>
<ul>
<li><p>Create the first Admin user (Admin Bootstrap & Recovery)</p></li>
<li><p>Admin Console UI Overview</p></li>
<li><p>Create and configure Realm (General, Login, Email, Themes, Keys)</p></li>
<li><p>Master Realm vs Custom Realms</p></li>
<li><p>Admin CLI (kcadm.sh) basic</p></li>
<li><p>Admin REST API overview</p></li>
</ul>
<h3>Lesson 4: Managing Users, Groups and User Profile</h3>
<ul>
<li><p>Create and manage Users, set credentials</p></li>
<li><p>User Profile: custom attributes, validators, annotations</p></li>
<li><p>Progressive Profiling</p></li>
<li><p>Groups and Sub-groups, group attributes, role mappings</p></li>
<li><p>User self-registration and Required Actions</p></li>
<li><p>Impersonation, account deletion, personal data</p></li>
</ul>
<h3>Lesson 5: Roles, Permissions and Access Control</h3>
<ul>
<li><p>Realm Roles and Client Roles</p></li>
<li><p>Composite Roles and Default Roles</p></li>
<li><p>Role Mappings for Users and Groups</p></li>
<li><p>Fine-grained Admin Permissions V2</p></li>
<li><p>Delegating Realm Administration</p></li>
<li><p>Dedicated Realm Admin Consoles</p></li>
</ul>

<h2><strong>Part 2: SSO Protocols - OpenID Connect and SAML</strong></h2>
<h3>Lesson 6: OpenID Connect Clients - Configuration from A to Z</h3>
<ul>
<li><p>Client types: Public, Confidential, Bearer-only</p></li>
<li><p>General Settings, Access Settings, Capability Config</p></li>
<li><p>OIDC Auth Flows: Authorization Code, Implicit, Client Credentials, Device Auth</p></li>
<li><p>PKCE (Proof Key for Code Exchange)</p></li>
<li><p>CIBA (Client Initiated Backchannel Authentication)</p></li>
<li><p>Integrating OIDC clients with React, Spring Boot, Node.js</p></li>
</ul>
<h3>Lesson 7: SAML Clients and Protocol Mappers</h3>
<ul>
<li><p>Create SAML 2.0 Clients, SAML Bindings (POST, Redirect, Artifact)</p></li>
<li><p>SAML Assertions, XML Signature and Encryption</p></li>
<li><p>Entity Descriptor Import</p></li>
<li><p>OIDC Protocol Mappers: User Attribute, Session Note, Hardcoded, Script</p></li>
<li><p>SAML Protocol Mappers</p></li>
<li><p>Lightweight Access Tokens and Pairwise Subject Identifier</p></li>
</ul>
<h3>Lesson 8: Client Scopes, Token Management and DPoP</h3>
<ul>
<li><p>Client Scopes: default vs optional, consent settings</p></li>
<li><p>Realm default client scopes, evaluating scopes</p></li>
<li><p>Access Token, ID Token, Refresh Token lifecycle</p></li>
<li><p>Session and Token timeout configuration</p></li>
<li><p>Offline Access, Token Revocation</p></li>
<li><p>DPoP (Demonstrating Proof-of-Possession)</p></li>
</ul>
<h3>Lesson 9: Client Policies and Advanced Client Configuration</h3>
<ul>
<li><p>Client Policies architecture: Policies, Profiles, Conditions, Executors</p></li>
<li><p>FAPI 2.0 Security Profile and Message Signing</p></li>
<li><p>Client Secret Rotation</p></li>
<li><p>Service Accounts and Audience support</p></li>
<li><p>Token Exchange (Standard, JWT Authorization Grant RFC 7523)</p></li>
<li><p>Keycloak as Authorization Server cho MCP servers</p></li>
</ul>

<h2><strong>Part 3: Authentication, MFA and Identity Brokering</strong></h2>
<h3>Lesson 10: Authentication Flows - Customizing authentication flow</h3>
<ul>
<li><p>Built-in flows: Browser, Direct Grant, Registration, Reset Credentials</p></li>
<li><p>Create custom Authentication Flows</p></li>
<li><p>Conditional Authenticators (sub-flow executed, client scope)</p></li>
<li><p>Step-up Authentication and ACR/LoA mapping</p></li>
<li><p>Session Limits (realm-level, client-level)</p></li>
<li><p>Dynamic Authentication Flow selection via Client Policies</p></li>
</ul>
<h3>Lesson 11: Multi-Factor Authentication - OTP, WebAuthn and Passkeys</h3>
<ul>
<li><p>TOTP/HOTP setup with Google Authenticator, FreeOTP</p></li>
<li><p>OTP Policy configuration and Recovery Codes</p></li>
<li><p>WebAuthn (FIDO2 Security Keys) setup</p></li>
<li><p>Passkeys integration (conditional UI, modal UI)</p></li>
<li><p>Kerberos Authentication</p></li>
<li><p>X.509 Client Certificate Authentication</p></li>
</ul>
<h3>Lesson 12: Identity Brokering and Social Login</h3>
<ul>
<li><p>Social Login: Google, Facebook, GitHub, Apple, Microsoft</p></li>
<li><p>OpenID Connect and SAML Identity Providers</p></li>
<li><p>OAuth v2 and Kubernetes Identity Providers</p></li>
<li><p>First Login Flow and Account Linking</p></li>
<li><p>Identity Provider Mappers and Sync Mode</p></li>
<li><p>Client-suggested IdP and IdP logout</p></li>
</ul>

<h2><strong>Part 4: User Federation, Organizations and Authorization</strong></h2>
<h3>Lesson 13: User Federation - LDAP and Active Directory</h3>
<ul>
<li><p>Configure LDAP/AD federation (storage mode, edit mode)</p></li>
<li><p>Connection settings: SSL, connection pool, referrals</p></li>
<li><p>LDAP Mappers: User Attribute, Full Name, Group, Role</p></li>
<li><p>MSAD User Account Control mapper</p></li>
<li><p>SSSD/FreeIPA Integration and Kerberos bridge</p></li>
<li><p>Custom User Storage SPI</p></li>
</ul>
<h3>Lesson 14: Organizations - Multi-tenancy and CIAM</h3>
<ul>
<li><p>Enable Organizations feature in Keycloak</p></li>
<li><p>Create/manage Organizations, Domains, Attributes</p></li>
<li><p>Member Management: managed, unmanaged, invitations</p></li>
<li><p>Associate Identity Providers with Organizations</p></li>
<li><p>Identity-first login flow</p></li>
<li><p>Mapping Organization claims into tokens</p></li>
</ul>
<h3>Lesson 15: Authorization Services - Detailed authorization</h3>
<ul>
<li><p>Resource Server, Resources, Scopes, Permissions, Policies</p></li>
<li><p>Policy types: Role, User, Group, Client, Time, JS, Aggregated</p></li>
<li><p>UMA 2.0 and Permission API</p></li>
<li><p>Policy Enforcer and Claim Information Points</p></li>
<li><p>Integrating Authorization into Spring Boot / Node.js</p></li>
<li><p>Evaluation API and troubleshooting permissions</p></li>
</ul>
<h3>Lesson 16: Workflows - Automating administration with IGA</h3>
<ul>
<li><p>Keycloak Workflows engine (preview)</p></li>
<li><p>Workflow definitions and expression language</p></li>
<li><p>Defining conditions and steps</p></li>
<li><p>Joiner-Mover-Leaver (JML) processes</p></li>
<li><p>Automated onboarding/offboarding</p></li>
<li><p>Access reviews and common use cases</p></li>
</ul>

<h2><strong>Part 5: Themes, Events, Security and Vault</strong></h2>
<h3>Lesson 17: Custom Themes - Login, Account, Admin and Email</h3>
<ul>
<li><p>Theme system: Login, Account, Admin Console, Email themes</p></li>
<li><p>Create custom themes, Freemarker templates</p></li>
<li><p>Dark mode support, internationalization</p></li>
<li><p>PatternFly 5 components</p></li>
<li><p>Hot-deploy themes, theme resources</p></li>
<li><p>Account Console v3 customization</p></li>
</ul>
<h3>Lesson 18: Event Auditing and Logging</h3>
<ul>
<li><p>User events and Admin events configuration</p></li>
<li><p>Event types and Event listeners</p></li>
<li><p>Custom Event Listener SPI</p></li>
<li><p>Event metrics cho monitoring</p></li>
<li><p>Logging: console, file, JSON, ECS format, syslog</p></li>
<li><p>Integration with ELK Stack / Loki</p></li>
</ul>
<h3>Lesson 19: Security Hardening and Brute Force Protection</h3>
<ul>
<li><p>SSL/HTTPS and Admin endpoint protection</p></li>
<li><p>Brute Force Protection (permanent, temporary, combined lockout)</p></li>
<li><p>Password Policies</p></li>
<li><p>Security Headers: CSP, X-Frame-Options, HSTS</p></li>
<li><p>reCAPTCHA setup (v2 and Enterprise)</p></li>
<li><p>Vault integration (file-based, Kubernetes Secrets)</p></li>
</ul>

<h2><strong>Part 6: Integrating practical applications</strong></h2>
<h3>Lesson 20: Integrating Keycloak with Spring Boot</h3>
<ul>
<li><p>Spring Security OAuth2 Resource Server</p></li>
<li><p>Spring Security OAuth2 Client</p></li>
<li><p>Authorization Client library</p></li>
<li><p>Role-based authorization with @PreAuthorize</p></li>
<li><p>Token relay and service-to-service communication</p></li>
<li><p>Multi-tenancy and testing strategies</p></li>
</ul>
<h3>Lesson 21: Integrating Keycloak with React/Angular and Node.js</h3>
<ul>
<li><p>Keycloak JavaScript adapter (standalone library)</p></li>
<li><p>React integration (keycloak-js, react-oidc-context)</p></li>
<li><p>Angular integration (angular-auth-oidc-client)</p></li>
<li><p>Node.js backend (Passport.js, express-openid-connect)</p></li>
<li><p>Token management, silent SSO, protected routes</p></li>
<li><p>Best practices cho SPA authentication</p></li>
</ul>
<h3>Lesson 22: Keycloak with Nginx, API Gateway and Microservices</h3>
<ul>
<li><p>Nginx reverse proxy with auth_request / OAuth2 Proxy</p></li>
<li><p>API Gateway: Kong, Traefik, APISIX with Keycloak OIDC</p></li>
<li><p>Microservices authentication patterns</p></li>
<li><p>Token introspection endpoint</p></li>
<li><p>Docker registry v2 authentication</p></li>
<li><p>Verifiable Credentials (OID4VCI) - experimental</p></li>
</ul>

<h2><strong>Part 7: Production, High Availability and Kubernetes</strong></h2>
<h3>Lesson 23: Keycloak Production Deployment and Database Tuning</h3>
<ul>
<li><p>Production readiness checklist</p></li>
<li><p>Build optimization (kc.sh build)</p></li>
<li><p>Database tuning: PostgreSQL, connection pool, additional datasources</p></li>
<li><p>Hostname v2, reverse proxy, HTTP/HTTPS settings</p></li>
<li><p>JVM tuning, Argon2 hashing, cache configuration</p></li>
<li><p>Import/Export realm data</p></li>
</ul>
<h3>Lesson 24: High Availability, Clustering and Multi-site Deployment</h3>
<ul>
<li><p>Keycloak clustering with Infinispan, jdbc-ping transport</p></li>
<li><p>Zero-configuration secure cluster communication</p></li>
<li><p>Session replication and persistent user sessions</p></li>
<li><p>Multi-site active-passive deployments</p></li>
<li><p>Rolling updates and non-blocking health checks</p></li>
<li><p>CPU/Memory sizing guide</p></li>
</ul>
<h3>Lesson 25: Kubernetes Operator, Monitoring and Admin CLI</h3>
<ul>
<li><p>Keycloak Operator: Keycloak CR, KeycloakRealmImport CR</p></li>
<li><p>Operator advanced configuration (scheduling, resources, NetworkPolicies)</p></li>
<li><p>OpenTelemetry: tracing, metrics, logging</p></li>
<li><p>Prometheus metrics and Grafana dashboards</p></li>
<li><p>Admin CLI (kcadm.sh) mastery</p></li>
<li><p>Backup/Restore strategies and troubleshooting</p></li>
</ul>
