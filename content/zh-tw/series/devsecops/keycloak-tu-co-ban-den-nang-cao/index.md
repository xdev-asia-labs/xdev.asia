---
id: 019d8b30-b100-7001-c001-e0c5f8100001
title: 鑰匙斗篷從基礎到高級
slug: keycloak-tu-co-ban-den-nang-cao
description: Keycloak 課程從基礎到進階都很全面，可協助您掌握身分和存取管理 (IAM)，從安裝和設定領域、使用者、角色、用戶端到身分代理、使用者聯合 (LDAP/AD)、身分驗證流程、授權服務、多重身分驗證、組織、工作流程、金鑰以及與實際應用程式整合等進階模組。更新至在 Quarkus 上執行的 Keycloak 26.x（最新版本 2026），包括生產作業、高可用性、Kubernetes Operators 和企業安全最佳實務。
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
  title: 第 1 部分：Keycloak 平台
  description: Giới thiệu Keycloak, cài đặt, Realms, Users, Groups và Admin Console
  sort_order: 1
  lessons:
  - id: 019d8b30-b101-7001-c001-e0c5f8100101
    title: 第 1 課：介紹 Keycloak - 企業中的 IAM 與 SSO
    slug: bai-1-gioi-thieu-keycloak-iam-va-sso-trong-enterprise
    description: 了解什麼是 Keycloak、為什麼需要 IAM、核心概念（領域、客戶端、使用者、角色、群組、會話）、Quarkus 上的 Keycloak 架構、與 Auth0/Okta/Azure AD 的比較以及企業中的真實用例。 Keycloak 26.x 版本概述。
    duration_minutes: 90
    is_free: true
    sort_order: 1
    video_url: null
  - id: 019d8b30-b102-7001-c001-e0c5f8100102
    title: 第 2 課：安裝 Keycloak - 獨立版、Docker 和 Kubernetes
    slug: bai-2-cai-dat-keycloak-standalone-docker-va-kubernetes
    description: 在裸機 (Ubuntu/CentOS)、Docker Compose 和 Kubernetes Operator 上安裝 Keycloak 26.x 的說明。設定資料庫後端（PostgreSQL、MySQL、MariaDB）、HTTPS/TLS、反向代理（Nginx、HAProxy）、主機名稱配置 v2 並在開發與生產模式下執行 Keycloak。
    duration_minutes: 150
    is_free: true
    sort_order: 2
    video_url: null
  - id: 019d8b30-b103-7001-c001-e0c5f8100103
    title: 第 3 課：管理控制台和建立第一個領域
    slug: bai-3-admin-console-va-tao-realm-dau-tien
    description: 熟悉管理控制台、建立第一個管理員使用者、建立和設定領域、領域設定（常規、登入、電子郵件、主題、在地化、金鑰、安全防禦）、管理 CLI (kcadm.sh) 和基本管理 REST API。
    duration_minutes: 120
    is_free: true
    sort_order: 3
    video_url: null
  - id: 019d8b30-b104-7001-c001-e0c5f8100104
    title: 第 4 課：管理使用者、群組和使用者設定檔
    slug: bai-4-quan-ly-users-groups-va-user-profile
    description: 建立和管理使用者、設定憑證、使用者屬性架構、使用者設定檔配置、自訂屬性和驗證器、建立群組和子群組、群組屬性、群組角色對應、使用者自行註冊、所需操作、模擬和個人資料管理。
    duration_minutes: 150
    is_free: true
    sort_order: 4
    video_url: null
  - id: 019d8b30-b105-7001-c001-e0c5f8100105
    title: 第 5 課：角色、權限和存取控制
    slug: bai-5-roles-permissions-va-access-control
    description: 領域角色、客戶端角色、複合角色、使用者和群組的角色映射、預設角色、服務帳戶角色。細粒度管理權限V2、領域管理委派、特定資源的權限、策略和權限評估。
    duration_minutes: 150
    is_free: true
    sort_order: 5
    video_url: null
- id: section-02
  title: 第 2 部分：SSO 協定 - OpenID Connect 和 SAML
  description: Cấu hình Clients, OIDC flows, SAML, Token management và Client Scopes
  sort_order: 2
  lessons:
  - id: 019d8b30-b106-7001-c001-e0c5f8100106
    title: 第 6 課：OpenID Connect 用戶端 - 從頭到尾的配置
    slug: bai-6-openid-connect-clients-cau-hinh-tu-a-den-z
    description: 建立 OIDC 用戶端（公共、機密、僅承載）、詳細的用戶端設定（存取設定、功能配置、登入/登出設定）、授權程式碼流、隱含串流、用戶端憑證授予、裝置授權授予、CIBA、PKCE，並與 Web 應用程式（React、Angular、Spring Boot、Node.js）整合。
    duration_minutes: 200
    is_free: true
    sort_order: 6
    video_url: null
  - id: 019d8b30-b107-7001-c001-e0c5f8100107
    title: 第 7 課：SAML 用戶端和協定映射器
    slug: bai-7-saml-clients-va-protocol-mappers
    description: 建立 SAML 2.0 用戶端、SAML 綁定（POST、重定向、Artifact）、SAML 斷言、XML 簽章和加密、實體描述子匯入、IDP 啟動登入。 OIDC 和 SAML 的協定映射器：使用者屬性、使用者會話註解、硬編碼聲明、腳本映射器、成對主題標識符和輕量級存取權杖。
    duration_minutes: 180
    is_free: true
    sort_order: 7
    video_url: null
  - id: 019d8b30-b108-7001-c001-e0c5f8100108
    title: 第 8 課：客戶端範圍、代幣管理和 DPoP
    slug: bai-8-client-scopes-token-management-va-dpop
    description: 客戶端範圍（預設、可選）、範圍參數、同意設定、領域預設範圍、評估範圍。存取權杖、ID 令牌、刷新令牌生命週期、令牌逾時配置、離線存取、令牌撤銷、輕量級存取權杖、DPoP（演示所有權證明）和用於令牌安全的用戶端策略。
    duration_minutes: 180
    is_free: true
    sort_order: 8
    video_url: null
  - id: 019d8b30-b109-7001-c001-e0c5f8100109
    title: 第 9 課：客戶端策略與進階客戶端配置
    slug: bai-9-client-policies-va-advanced-client-configuration
    description: 用戶端策略架構、建立策略和設定檔、FAPI 2.0 安全設定檔、用戶端金鑰輪替、服務帳戶、受眾支援、機密用戶端憑證（用戶端 ID/金鑰、JWT、X.509）、代幣交換（內部對內部、外部到內部）、JWT 授權授予 (RFC 7523) 和 MCP 的用戶端設定。
    duration_minutes: 180
    is_free: true
    sort_order: 9
    video_url: null
- id: section-03
  title: 第 3 部分：身份驗證、MFA 和身份代理
  description: Authentication Flows, Multi-Factor Authentication, Social Login và Identity Providers
  sort_order: 3
  lessons:
  - id: 019d8b30-b110-7001-c001-e0c5f8100110
    title: 第 10 課：身分驗證流程 - 自訂身分驗證流程
    slug: bai-10-authentication-flows-tuy-chinh-luong-xac-thuc
    description: 了解 Keycloak 中的身分驗證流程、瀏覽器流程、直接授權流程、註冊流程、重設憑證流程、第一個代理登入流程。建立自訂流程、新增執行和子流程、條件驗證器（條件 - 執行的子流程、條件 - 用戶端範圍）、逐步驗證、ACR 到驗證等級 (LoA) 對應和會話限制。
    duration_minutes: 200
    is_free: true
    sort_order: 10
    video_url: null
  - id: 019d8b30-b111-7001-c001-e0c5f8100111
    title: 第 11 課：多重驗證 - OTP、WebAuthn 和金鑰
    slug: bai-11-multi-factor-authentication-otp-webauthn-va-passkeys
    description: 使用 TOTP/HOTP（Google 驗證器、FreeOTP）、OTP 策略設定、復原代碼設定雙重認證。 WebAuthn 設定（FIDO2 安全金鑰）、WebAuthn 無密碼原則。金鑰整合（條件和模式 UI）、透過 AIA 註冊金鑰、Kerberos 驗證和 X.509 用戶端憑證驗證。
    duration_minutes: 200
    is_free: true
    sort_order: 11
    video_url: null
  - id: 019d8b30-b112-7001-c001-e0c5f8100112
    title: 第 12 課：身份代理和社交登錄
    slug: bai-12-identity-brokering-va-social-login
    description: 身分提供者概念、社群登入設定（Google、Facebook、GitHub、Apple、Microsoft）、OpenID Connect 身分提供者、SAML 身分提供者、OAuth v2 提供者、Kubernetes 身分提供者。首次登入流程、帳戶連結、身分提供者對應器、同步模式（匯入、強制、舊版）、用戶端建議的 IdP (kc_idp_hint) 和 IdP 登出流程。
    duration_minutes: 200
    is_free: true
    sort_order: 12
    video_url: null
- id: section-04
  title: 第 4 部分：使用者聯盟、組織與授權
  description: LDAP/AD federation, Organizations (CIAM), Authorization Services và Workflows
  sort_order: 4
  lessons:
  - id: 019d8b30-b113-7001-c001-e0c5f8100113
    title: 第 13 課：使用者聯合 - LDAP 和 Active Directory
    slug: bai-13-user-federation-ldap-va-active-directory
    description: 配置 LDAP/AD 聯合、儲存模式（READ_ONLY、WRITABLE、UNSYNCED）、編輯模式、連線設定（SSL、連線池）、LDAP 映射器（使用者屬性、全名、群組、角色、硬編碼角色、MSAD 使用者帳戶控制）、密碼雜湊、使用者同步、SSSD/FreeIPA 整合自接 APIPA 通訊自訂。
    duration_minutes: 220
    is_free: true
    sort_order: 13
    video_url: null
  - id: 019d8b30-b114-7001-c001-e0c5f8100114
    title: 第 14 課：組織 - 多租戶和 CIAM
    slug: bai-14-organizations-multi-tenancy-va-ciam
    description: 啟用和配置組織功能、建立/管理組織、組織網域、組織屬性、管理成員（託管、非託管）、邀請管理（發送、追蹤、重新發送、刪除）、將身分提供者與組織關聯、驗證成員身分（身分優先登入）、將組織聲明對應到令牌和實際 B2B/B2B2C 用例。
    duration_minutes: 180
    is_free: true
    sort_order: 14
    video_url: null
  - id: 019d8b30-b115-7001-c001-e0c5f8100115
    title: 第 15 課：授權服務 - 詳細授權
    slug: bai-15-authorization-services-phan-quyen-chi-tiet
    description: 授權服務深入研究：資源伺服器、資源、範圍、權限、策略（基於角色、基於使用者、基於群組、基於客戶端、基於時間、JavaScript、聚合）。 UMA 2.0 支援、權限 API、策略執行器、推送聲明、資源屬性、聲明資訊點、評估 API 和授權整合到 Spring Boot / Node.js 應用程式中。
    duration_minutes: 240
    is_free: true
    sort_order: 15
    video_url: null
  - id: 019d8b30-b116-7001-c001-e0c5f8100116
    title: 第 16 課：工作流程 - 使用 IGA 實現管理自動化
    slug: bai-16-workflows-tu-dong-hoa-quan-tri-voi-iga
    description: 引入用於身分治理和管理 (IGA) 的 Keycloak 工作流程（預覽版）。了解工作流程、工作流程定義、工作流程表達式語言、管理工作流程、定義條件和步驟、加入者-移動者-離開者 (JML) 流程、自動入職/離職、存取審查和企業常見用例。
    duration_minutes: 160
    is_free: true
    sort_order: 16
    video_url: null
- id: section-05
  title: 第 5 部分：主題、事件、安全性和 Vault
  description: Custom themes, event auditing, security hardening, brute force protection và vault
  sort_order: 5
  lessons:
  - id: 019d8b30-b117-7001-c001-e0c5f8100117
    title: 第 17 課：自訂主題 - 登入、帳戶、管理員和電子郵件
    slug: bai-17-custom-themes-login-account-admin-va-email
    description: Keycloak主題系統，建立自訂登入主題、帳戶控制台主題、管理控制台主題和電子郵件主題。 Freemarker 模板、主題屬性、暗模式支援、國際化 (i18n)、自訂 CSS/JS、PatternFly 5、可自訂頁腳、主題資源部署和熱部署主題。具有使用者設定檔支援的帳戶控制台 v3。
    duration_minutes: 180
    is_free: true
    sort_order: 17
    video_url: null
  - id: 019d8b30-b118-7001-c001-e0c5f8100118
    title: 第 18 課：事件審核和日誌記錄
    slug: bai-18-event-auditing-va-logging
    description: 設定使用者事件和管理事件、事件類型（登入、註冊、更新憑證、社交連結等）、事件偵聽器（JBoss 日誌記錄、電子郵件）、自訂事件偵聽器 SPI、用於監控的事件指標、Keycloak 日誌記錄配置（控制台、檔案、JSON、ECS 格式）、用於遠端日誌記錄的系統、MDC 日誌記錄系統、MDCEL 日誌記錄的系統、MDC 日誌、MDC 日誌記錄系統、MDCEL 日誌記錄的系統、MDC 日誌、MDC 日誌、MDC 日誌記錄系統、MDCEL 日誌記錄的系統、MDCEL 日誌、MDC 日誌記錄系統、MDCEL 日誌記錄的系統、MDCELK。
    duration_minutes: 150
    is_free: true
    sort_order: 18
    video_url: null
  - id: 019d8b30-b119-7001-c001-e0c5f8100119
    title: 第 19 課：安全性增強與暴力保護
    slug: bai-19-security-hardening-va-brute-force-protection
    description: Keycloak 生產安全性：SSL/HTTPS、管理端點保護、暴力保護（永久鎖定、臨時鎖定、組合鎖定）、密碼策略（長度、數字、特殊字元、非使用者名稱、歷史記錄）、唯讀使用者屬性、點擊劫持保護（X-Frame-Options、CSP）、CORS 設定、內容安全策略、HSTS、reCAPTCHA 設定驅動程式碼並使用機密版本（
    duration_minutes: 200
    is_free: true
    sort_order: 19
    video_url: null
- id: section-06
  title: 第六部分：整合實際應用
  description: Tích hợp Keycloak với Spring Boot, React, Node.js, Nginx và API Gateway
  sort_order: 6
  lessons:
  - id: 019d8b30-b120-7001-c001-e0c5f8100120
    title: 第 20 課：將 Keycloak 與 Spring Boot 集成
    slug: bai-20-tich-hop-keycloak-voi-spring-boot
    description: 使用 Spring Security OAuth2 資源伺服器、Spring Security OAuth2 用戶端、授權客戶端程式庫將 Keycloak 與 Spring Boot 3+ 整合。配置 OIDC 驗證、基於角色的授權、方法級安全性 (@PreAuthorize)、令牌中繼、服務到服務通訊、多租戶和測試策略。
    duration_minutes: 200
    is_free: true
    sort_order: 20
    video_url: null
  - id: 019d8b30-b121-7001-c001-e0c5f8100121
    title: 第 21 課：將 Keycloak 與 React/Angular 和 Node.js 集成
    slug: bai-21-tich-hop-keycloak-voi-react-angular-va-nodejs
    description: Keycloak JavaScript 適配器（獨立函式庫），與 React（keycloak-js、react-oidc-context）、Angular（angular-auth-oidc-client）、Vue.js 整合。帶有 Passport.js 或express-openid-connect 的 Node.js 後端、令牌管理（刷新、靜默 SSO）、受保護的路由、基於角色的 UI 渲染以及 SPA 身份驗證的最佳實踐。
    duration_minutes: 180
    is_free: true
    sort_order: 21
    video_url: null
  - id: 019d8b30-b122-7001-c001-e0c5f8100122
    title: 第 22 課：Keycloak 與 Nginx、API 閘道和微服務
    slug: bai-22-keycloak-voi-nginx-api-gateway-va-microservices
    description: 使用 Keycloak（auth_request 模組、OAuth2 代理）將 Nginx 配置為反向代理，使用 Keycloak OIDC 外掛程式的 API 閘道模式（Kong、Traefik、APISIX）、微服務驗證模式、令牌內省、服務網格整合、Docker 註冊表 v2 驗證和可驗證憑證 (OID4VCI) 實驗憑證。
    duration_minutes: 180
    is_free: true
    sort_order: 22
    video_url: null
- id: section-07
  title: 第 7 部分：生產、高可用性和 Kubernetes
  description: Vận hành production, clustering, HA, backup, Kubernetes Operator và monitoring
  sort_order: 7
  lessons:
  - id: 019d8b30-b123-7001-c001-e0c5f8100123
    title: 第 23 課：Keycloak 生產部署和資料庫調優
    slug: bai-23-keycloak-production-deployment-va-database-tuning
    description: 生產清單、Keycloak 建置最佳化（kc.sh 建置）、生產資料庫配置（PostgreSQL 調整、連線池）、附加資料來源、主機名稱 v2 配置、反向代理設定（代理標頭、可信任位址、PROXY 協定）、HTTP/HTTPS 設定、JVM 調整（堆疊、GC）、Argon2 匯入密碼、快取配置（1/Infinis/Infinis/Infinis）、Argon2 導入密碼圖、快取 /Infinis）、Argon2 導入密碼和快取最大）。
    duration_minutes: 220
    is_free: true
    sort_order: 23
    video_url: null
  - id: 019d8b30-b124-7001-c001-e0c5f8100124
    title: 第 24 課：高可用性、叢集和多站點部署
    slug: bai-24-high-availability-clustering-va-multi-site-deployment
    description: 帶有 Infinispan 的 Keycloak 叢集、傳輸堆疊 jdbc-ping、零配置安全叢集通訊、會話複製、持久性使用者會話、多站點主動-被動部署、跨資料中心複製、最佳化映像的滾動更新、負載平衡器運行狀況檢查（非阻塞）、Infinispan 外部快取和 CPU/記憶體大小調整指南。
    duration_minutes: 240
    is_free: true
    sort_order: 24
    video_url: null
  - id: 019d8b30-b125-7001-c001-e0c5f8100125
    title: 第 25 課：Kubernetes Operator、監控與管理 CLI
    slug: bai-25-kubernetes-operator-monitoring-va-admin-cli
    description: Kubernetes/OpenShift 上的 Keycloak Operator、Keycloak CR 配置（副本、信任庫、調度、資源）、KeycloakRealmImport CR、NetworkPolicies。使用 OpenTelemetry（追蹤、指標、日誌記錄）、Prometheus 指標、Grafana 儀表板、事件指標、密碼雜湊指標進行監控。用於領域/角色/用戶端/使用者/群組作業、備份/復原策略和故障排除生產問題的管理 CLI (kcadm.sh)。
    duration_minutes: 240
    is_free: true
    sort_order: 25
    video_url: null
reviews: []
quizzes: []
locale: zh-tw
---
___HTMLTAG_0__HTMLTAG_1__HTMLTAG_2__HTMLTAG_3___第 1 部分：Keycloak 平台___HTMLTAG_4__HTMLTAG_5___
<h3>第 1 課：Keycloak 簡介 - 企業中的 IAM 與 SSO</h3>
<ul>
___HTMLTAG_9__HTMLTAG_10___什麼是 Keycloak？發展歷程（從JBoss到CNCF孵化）___HTMLTAG_11__HTMLTAG_12___
___HTMLTAG_13__HTMLTAG_14___為什麼需要身分識別和存取管理 (IAM)？ ___HTMLTAG_15__HTMLTAG_16___
___HTMLTAG_17__HTMLTAG_18___核心概念：領域、客戶端、使用者、角色、群組、會話___HTMLTAG_19__HTMLTAG_20___
___HTMLTAG_21__HTMLTAG_22___Quarkus (26.x) 上的 Keycloak 架構___HTMLTAG_23__HTMLTAG_24___
___HTMLTAG_25__HTMLTAG_26___比較 Keycloak、Auth0、Okta 和 Azure AD___HTMLTAG_27__HTMLTAG_28___
___HTMLTAG_29__HTMLTAG_30___用例：SSO、社交登入、LDAP 聯合、MFA、API 安全___HTMLTAG_31__HTMLTAG_32___
</ul>
<h3>第 2 課：安裝 Keycloak - 獨立版、Docker 和 Kubernetes</h3>
<ul>
___HTMLTAG_37__HTMLTAG_38___在 Ubuntu/CentOS（裸機）上安裝 Keycloak___HTMLTAG_39__HTMLTAG_40___
___HTMLTAG_41__HTMLTAG_42___使用 Docker 和 Docker Compose 執行 Keycloak___HTMLTAG_43__HTMLTAG_44___
___HTMLTAG_45__HTMLTAG_46___Kubernetes Operator 部署___HTMLTAG_47__HTMLTAG_48___
___HTMLTAG_49__HTMLTAG_50___資料庫後端設定（PostgreSQL、MySQL、MariaDB）___HTMLTAG_51__HTMLTAG_52___
___HTMLTAG_53__HTMLTAG_54___HTTPS/TLS 設定與主機名稱 v2 設定___HTMLTAG_55__HTMLTAG_56___
___HTMLTAG_57__HTMLTAG_58___開發模式與生產模式___HTMLTAG_59__HTMLTAG_60___
</ul>
<h3>第 3 課：管理控制台與建立第一個領域__HTMLTAG_63___
<ul>
___HTMLTAG_65__HTMLTAG_66___建立第一個管理員使用者（管理員引導與復原）___HTMLTAG_67__HTMLTAG_68___
___HTMLTAG_69__HTMLTAG_70___管理控制台使用者介面概述___HTMLTAG_71__HTMLTAG_72___
___HTMLTAG_73__HTMLTAG_74___建立和設定領域（常規、登入、電子郵件、主題、金鑰）___HTMLTAG_75__HTMLTAG_76___
___HTMLTAG_77__HTMLTAG_78___主領域與自訂領域___HTMLTAG_79__HTMLTAG_80___
___HTMLTAG_81__HTMLTAG_82___管理 CLI (kcadm.sh) 基本___HTMLTAG_83__HTMLTAG_84___
___HTMLTAG_85__HTMLTAG_86___管理 REST API 概述___HTMLTAG_87__HTMLTAG_88___
</ul>
<h3>第 4 課：管理使用者、群組和使用者設定檔__HTMLTAG_91___
<ul>
___HTMLTAG_93__HTMLTAG_94___建立和管理用戶，設定憑證___HTMLTAG_95__HTMLTAG_96___
___HTMLTAG_97__HTMLTAG_98___使用者設定檔：自訂屬性、驗證器、註解___HTMLTAG_99__HTMLTAG_100___
___HTMLTAG_101__HTMLTAG_102___漸進分析___HTMLTAG_103__HTMLTAG_104___
___HTMLTAG_105__HTMLTAG_106___群組與子群組、群組屬性、角色映射___HTMLTAG_107__HTMLTAG_108___
___HTMLTAG_109__HTMLTAG_110___使用者自行註冊及所需操作___HTMLTAG_111__HTMLTAG_112___
___HTMLTAG_113__HTMLTAG_114___假冒、帳號刪除、個人資料___HTMLTAG_115__HTMLTAG_116___
</ul>
<h3>第 5 課：角色、權限與存取控制__HTMLTAG_119___
<ul>
___HTMLTAG_121__HTMLTAG_122___領域角色與客戶端角色___HTMLTAG_123__HTMLTAG_124___
___HTMLTAG_125__HTMLTAG_126___複合角色和預設角色</p></li>
___HTMLTAG_129__HTMLTAG_130___使用者和群組的角色映射___HTMLTAG_131__HTMLTAG_132___
___HTMLTAG_133__HTMLTAG_134___細粒度管理員權限V2___HTMLTAG_135__HTMLTAG_136___
___HTMLTAG_137__HTMLTAG_138___委派領域管理___HTMLTAG_139__HTMLTAG_140___
___HTMLTAG_141__HTMLTAG_142___專用領域管理控制台___HTMLTAG_143__HTMLTAG_144___
</ul>___HTMLTAG_146__HTMLTAG_147___第 2 部分：SSO 協定 - OpenID Connect 與 SAML___HTMLTAG_148__HTMLTAG_149___
<h3>第 6 課：OpenID Connect 用戶端 - 從頭到尾的設定</h3>
<ul>
___HTMLTAG_153__HTMLTAG_154___客戶端類型：公開、機密、僅承載___HTMLTAG_155__HTMLTAG_156___
___HTMLTAG_157__HTMLTAG_158___常規設定、存取設定、功能配置___HTMLTAG_159__HTMLTAG_160___
___HTMLTAG_161__HTMLTAG_162___OIDC 驗證流程：授權代碼、隱式、客戶端憑證、設備驗證___HTMLTAG_163__HTMLTAG_164___
___HTMLTAG_165__HTMLTAG_166___PKCE（代碼交換的證明金鑰）___HTMLTAG_167__HTMLTAG_168___
___HTMLTAG_169__HTMLTAG_170___CIBA（客戶端發起的反向通道驗證）___HTMLTAG_171__HTMLTAG_172___
___HTMLTAG_173__HTMLTAG_174___將 OIDC 用戶端與 React、Spring Boot、Node.js 整合___HTMLTAG_175__HTMLTAG_176___
</ul>
<h3>第 7 課：SAML 用戶端與協定映射器__HTMLTAG_179___
<ul>
___HTMLTAG_181__HTMLTAG_182___建立 SAML 2.0 用戶端、SAML 綁定（POST、重定向、工件）___HTMLTAG_183__HTMLTAG_184___
___HTMLTAG_185__HTMLTAG_186___SAML 斷言、XML 簽章與加密___HTMLTAG_187__HTMLTAG_188___
___HTMLTAG_189__HTMLTAG_190___實體描述子導入___HTMLTAG_191__HTMLTAG_192___
___HTMLTAG_193__HTMLTAG_194___OIDC 協定映射器：使用者屬性、會話註解、硬編碼、腳本___HTMLTAG_195__HTMLTAG_196___
___HTMLTAG_197__HTMLTAG_198___SAML 協定映射器___HTMLTAG_199__HTMLTAG_200___
___HTMLTAG_201__HTMLTAG_202___輕量級存取權杖與成對主題識別碼___HTMLTAG_203__HTMLTAG_204___
</ul>
<h3>第 8 課：客戶端範圍、令牌管理和 DPoP</h3>
<ul>
___HTMLTAG_209__HTMLTAG_210___客戶端範圍：預設與選用、同意設定___HTMLTAG_211__HTMLTAG_212___
___HTMLTAG_213__HTMLTAG_214___領域預設客戶端範圍，評估範圍___HTMLTAG_215__HTMLTAG_216___
___HTMLTAG_217__HTMLTAG_218___存取權杖、ID 令牌、刷新權杖生命週期___HTMLTAG_219__HTMLTAG_220___
___HTMLTAG_221__HTMLTAG_222___會話和令牌逾時配置___HTMLTAG_223__HTMLTAG_224___
___HTMLTAG_225__HTMLTAG_226___離線存取、令牌撤銷___HTMLTAG_227__HTMLTAG_228___
___HTMLTAG_229__HTMLTAG_230___DPoP（展示所有權證明）___HTMLTAG_231__HTMLTAG_232___
</ul>
<h3>第 9 課：客戶端策略與進階客戶端設定__HTMLTAG_235___
<ul>
___HTMLTAG_237__HTMLTAG_238___客戶端策略架構：政策、設定檔、條件、執行器___HTMLTAG_239__HTMLTAG_240___
___HTMLTAG_241__HTMLTAG_242___FAPI 2.0 安全設定檔與訊息簽章___HTMLTAG_243__HTMLTAG_244___
___HTMLTAG_245__HTMLTAG_246___客戶端秘密輪調___HTMLTAG_247__HTMLTAG_248___
___HTMLTAG_249__HTMLTAG_250___服務帳號與受眾支援___HTMLTAG_251__HTMLTAG_252___
___HTMLTAG_253__HTMLTAG_254___令牌交換（標準、JWT 授權授予 RFC 7523）___HTMLTAG_255__HTMLTAG_256___
___HTMLTAG_257__HTMLTAG_258___Keycloak 作為 MCP 伺服器的授權伺服器___HTMLTAG_259__HTMLTAG_260___
</ul>___HTMLTAG_262__HTMLTAG_263___第 3 部分：驗證、MFA 和身分代理___HTMLTAG_264__HTMLTAG_265___
<h3>第 10 課：驗證流程 - 自訂身分驗證流程__HTMLTAG_267___
<ul>
___HTMLTAG_269__HTMLTAG_270___內建流程：瀏覽器、直接授予、註冊、重設憑證___HTMLTAG_271__HTMLTAG_272___
___HTMLTAG_273__HTMLTAG_274___建立自訂驗證流程___HTMLTAG_275__HTMLTAG_276___
___HTMLTAG_277__HTMLTAG_278___條件驗證器（執行的子流程，客戶端範圍）___HTMLTAG_279__HTMLTAG_280___
___HTMLTAG_281__HTMLTAG_282___升級驗證和 ACR/LoA 映射___HTMLTAG_283__HTMLTAG_284___
___HTMLTAG_285__HTMLTAG_286___會話限制（領域層級、客戶端層級）___HTMLTAG_287__HTMLTAG_288___
___HTMLTAG_289__HTMLTAG_290___透過客戶端策略進行動態驗證流程選擇___HTMLTAG_291__HTMLTAG_292___
</ul>
<h3>第 11 課：多重驗證 - OTP、WebAuthn 和密碼</h3>
<ul>
___HTMLTAG_297__HTMLTAG_298___使用 Google 驗證器、FreeOTP 進行 TOTP/HOTP 設定___HTMLTAG_299__HTMLTAG_300___
___HTMLTAG_301__HTMLTAG_302___OTP 策略設定與復原程式碼___HTMLTAG_303__HTMLTAG_304___
___HTMLTAG_305__HTMLTAG_306___WebAuthn（FIDO2 安全金鑰）設定___HTMLTAG_307__HTMLTAG_308___
___HTMLTAG_309__HTMLTAG_310___密鑰整合（條件 UI、模式 UI）___HTMLTAG_311__HTMLTAG_312___
___HTMLTAG_313__HTMLTAG_314___Kerberos 驗證___HTMLTAG_315__HTMLTAG_316___
___HTMLTAG_317__HTMLTAG_318___X.509 用戶端憑證驗證___HTMLTAG_319__HTMLTAG_320___
</ul>
<h3>第 12 課：身分識別代理程式與社群登入</h3>
<ul>
___HTMLTAG_325__HTMLTAG_326___社群登入：Google、Facebook、GitHub、Apple、Microsoft___HTMLTAG_327__HTMLTAG_328___
___HTMLTAG_329__HTMLTAG_330___OpenID Connect 和 SAML 身分提供者___HTMLTAG_331__HTMLTAG_332___
___HTMLTAG_333__HTMLTAG_334___OAuth v2 和 Kubernetes 身分提供者___HTMLTAG_335__HTMLTAG_336___
___HTMLTAG_337__HTMLTAG_338___首次登入流程與帳號連結___HTMLTAG_339__HTMLTAG_340___
___HTMLTAG_341__HTMLTAG_342___身分提供者映射器和同步模式___HTMLTAG_343__HTMLTAG_344___
___HTMLTAG_345__HTMLTAG_346___客戶端建議的 IdP 和 IdP 註銷___HTMLTAG_347__HTMLTAG_348___
</ul>___HTMLTAG_350__HTMLTAG_351___第 4 部分：使用者聯合、組織與授權___HTMLTAG_352__HTMLTAG_353___
<h3>第 13 課：使用者聯合 - LDAP 和 Active Directory</h3>
<ul>
___HTMLTAG_357__HTMLTAG_358___LDAP/AD 聯合配置（儲存模式、編輯模式）___HTMLTAG_359__HTMLTAG_360___
___HTMLTAG_361__HTMLTAG_362___連線設定：SSL、連線池、引用___HTMLTAG_363__HTMLTAG_364___
___HTMLTAG_365__HTMLTAG_366___LDAP 映射器：使用者屬性、全名、群組、角色___HTMLTAG_367__HTMLTAG_368___
___HTMLTAG_369__HTMLTAG_370___MSAD 使用者帳號控制映射器___HTMLTAG_371__HTMLTAG_372___
___HTMLTAG_373__HTMLTAG_374___SSSD/FreeIPA 整合與 Kerberos 橋接器___HTMLTAG_375__HTMLTAG_376___
___HTMLTAG_377__HTMLTAG_378___自訂使用者儲存SPI___HTMLTAG_379__HTMLTAG_380___
</ul>
<h3>第 14 課：組織 - 多租戶和 CIAM</h3>
<ul>
___HTMLTAG_385__HTMLTAG_386___啟用 Keycloak 中的組織功能___HTMLTAG_387__HTMLTAG_388___
___HTMLTAG_389__HTMLTAG_390___建立/管理組織、網域、屬性___HTMLTAG_391__HTMLTAG_392___
___HTMLTAG_393__HTMLTAG_394___會員管理：託管、非託管、邀請___HTMLTAG_395__HTMLTAG_396___
___HTMLTAG_397__HTMLTAG_398___將身分提供者與組織關聯___HTMLTAG_399__HTMLTAG_400___
___HTMLTAG_401__HTMLTAG_402___身分優先登入流程___HTMLTAG_403__HTMLTAG_404___
___HTMLTAG_405__HTMLTAG_406___將組織宣告對應到令牌___HTMLTAG_407__HTMLTAG_408___
</ul>
<h3>第 15 課：授權服務 - 詳細授權</h3>
<ul>
___HTMLTAG_413__HTMLTAG_414___資源伺服器、資源、範圍、權限、政策___HTMLTAG_415__HTMLTAG_416___
___HTMLTAG_417__HTMLTAG_418___策略類型：角色、使用者、群組、客戶端、時間、JS、聚合___HTMLTAG_419__HTMLTAG_420___
___HTMLTAG_421__HTMLTAG_422___UMA 2.0 與權限 API___HTMLTAG_423__HTMLTAG_424___
___HTMLTAG_425__HTMLTAG_426___政策執行者和索賠資訊點____HTMLTAG_427__HTMLTAG_428___
___HTMLTAG_429__HTMLTAG_430___將授權整合到 Spring Boot / Node.js___HTMLTAG_431__HTMLTAG_432___
___HTMLTAG_433__HTMLTAG_434___評估 API 與故障排除權限___HTMLTAG_435__HTMLTAG_436___
</ul>
<h3>第 16 課：工作流程 - 使用 IGA 進行自動化管理</h3>
<ul>
___HTMLTAG_441__HTMLTAG_442___Keycloak 工作流程引擎（預覽）___HTMLTAG_443__HTMLTAG_444___
___HTMLTAG_445__HTMLTAG_446___工作流程定義與表達語言___HTMLTAG_447__HTMLTAG_448___
___HTMLTAG_449__HTMLTAG_450___定義條件與步驟___HTMLTAG_451__HTMLTAG_452___
___HTMLTAG_453__HTMLTAG_454___加入-移動-離開 (JML) 流程___HTMLTAG_455__HTMLTAG_456___
___HTMLTAG_457__HTMLTAG_458___自動加入/退出___HTMLTAG_459__HTMLTAG_460___
___HTMLTAG_461__HTMLTAG_462___存取評論和常見用例___HTMLTAG_463__HTMLTAG_464___
</ul>___HTMLTAG_466__HTMLTAG_467___第 5 部分：主題、事件、安全性與保管庫___HTMLTAG_468__HTMLTAG_469___
<h3>第 17 課：自訂主題 - 登入、帳戶、管理員和電子郵件</h3>
<ul>
___HTMLTAG_473__HTMLTAG_474___主題系統：登入、帳號、管理控制台、電子郵件主題___HTMLTAG_475__HTMLTAG_476___
___HTMLTAG_477__HTMLTAG_478___建立自訂主題、Freemarker 範本___HTMLTAG_479__HTMLTAG_480___
___HTMLTAG_481__HTMLTAG_482___深色模式支援、國際化___HTMLTAG_483__HTMLTAG_484___
___HTMLTAG_485__HTMLTAG_486___PatternFly 5 個元件___HTMLTAG_487__HTMLTAG_488___
___HTMLTAG_489__HTMLTAG_490___熱部署主題、主題資源___HTMLTAG_491__HTMLTAG_492___
___HTMLTAG_493__HTMLTAG_494___帳號控制台 v3 自訂___HTMLTAG_495__HTMLTAG_496___
</ul>
<h3>第 18 課：事件審核與日誌記錄__HTMLTAG_499___
<ul>
___HTMLTAG_501__HTMLTAG_502___使用者事件與管理事件設定___HTMLTAG_503__HTMLTAG_504___
___HTMLTAG_505__HTMLTAG_506___事件類型與事件偵聽器___HTMLTAG_507__HTMLTAG_508___
___HTMLTAG_509__HTMLTAG_510___自訂事件偵聽器 SPI___HTMLTAG_511__HTMLTAG_512___
___HTMLTAG_513__HTMLTAG_514___用於監控的事件指標___HTMLTAG_515__HTMLTAG_516___
___HTMLTAG_517__HTMLTAG_518___日誌記錄：控制台、檔案、JSON、ECS 格式、系統日誌___HTMLTAG_519__HTMLTAG_520___
___HTMLTAG_521__HTMLTAG_522___與 ELK Stack/Loki 整合___HTMLTAG_523__HTMLTAG_524___
</ul>
<h3>第 19 課：安全強化與暴力保護</h3>
<ul>
___HTMLTAG_529__HTMLTAG_530___SSL/HTTPS 與管理端點保護___HTMLTAG_531__HTMLTAG_532___
___HTMLTAG_533__HTMLTAG_534___暴力保護（永久、暫時、組合鎖定）___HTMLTAG_535__HTMLTAG_536___
___HTMLTAG_537__HTMLTAG_538___密碼策略___HTMLTAG_539__HTMLTAG_540___
___HTMLTAG_541__HTMLTAG_542___安全標頭：CSP、X-Frame-Options、HSTS___HTMLTAG_543__HTMLTAG_544___
___HTMLTAG_545__HTMLTAG_546___reCAPTCHA 設定（v2 和 Enterprise）___HTMLTAG_547__HTMLTAG_548___
___HTMLTAG_549__HTMLTAG_550___Vault 整合（基於文件，Kubernetes Secret）___HTMLTAG_551__HTMLTAG_552___
</ul>___HTMLTAG_554__HTMLTAG_555___第 6 部分：整合實際應用___HTMLTAG_556__HTMLTAG_557___
<h3>第 20 課：將 Keycloak 與 Spring Boot 整合</h3>
<ul>
___HTMLTAG_561__HTMLTAG_562___Spring Security OAuth2 資源伺服器___HTMLTAG_563__HTMLTAG_564___
___HTMLTAG_565__HTMLTAG_566___Spring Security OAuth2 用戶端___HTMLTAG_567__HTMLTAG_568___
___HTMLTAG_569__HTMLTAG_570___授權客戶端程式庫___HTMLTAG_571__HTMLTAG_572___
___HTMLTAG_573__HTMLTAG_574___使用@PreAuthorize進行基於角色的授權___HTMLTAG_575__HTMLTAG_576___
___HTMLTAG_577__HTMLTAG_578___令牌中繼與服務間通訊___HTMLTAG_579__HTMLTAG_580___
___HTMLTAG_581__HTMLTAG_582___多租戶與測試策略___HTMLTAG_583__HTMLTAG_584___
</ul>
<h3>第 21 課：將 Keycloak 與 React/Angular 和 Node.js 整合</h3>
<ul>
___HTMLTAG_589__HTMLTAG_590___Keycloak JavaScript 適配器（獨立庫）___HTMLTAG_591__HTMLTAG_592___
___HTMLTAG_593__HTMLTAG_594___React 整合（keycloak-js、react-oidc-context）___HTMLTAG_595__HTMLTAG_596___
___HTMLTAG_597__HTMLTAG_598___角度整合（Angular-auth-oidc-client）___HTMLTAG_599__HTMLTAG_600___
___HTMLTAG_601__HTMLTAG_602___Node.js 後端（Passport.js、express-openid-connect）___HTMLTAG_603__HTMLTAG_604___
___HTMLTAG_605__HTMLTAG_606___令牌管理、靜默 SSO、受保護的路由___HTMLTAG_607__HTMLTAG_608___
___HTMLTAG_609__HTMLTAG_610___SPA 驗證的最佳實務___HTMLTAG_611__HTMLTAG_612___
</ul>
<h3>第 22 課：Keycloak 與 Nginx、API 閘道和微服務</h3>
<ul>
___HTMLTAG_617__HTMLTAG_618___帶有 auth_request / OAuth2 代理的 Nginx 反向代理___HTMLTAG_619__HTMLTAG_620___
___HTMLTAG_621__HTMLTAG_622___API 閘道：Kong、Traefik、APISIX 與 Keycloak OIDC___HTMLTAG_623__HTMLTAG_624___
___HTMLTAG_625__HTMLTAG_626___微服務驗證模式___HTMLTAG_627__HTMLTAG_628___
___HTMLTAG_629__HTMLTAG_630___令牌自省端點___HTMLTAG_631__HTMLTAG_632___
___HTMLTAG_633__HTMLTAG_634___Docker 註冊表 v2 驗證___HTMLTAG_635__HTMLTAG_636___
___HTMLTAG_637__HTMLTAG_638___可驗證憑證 (OID4VCI) - 實驗性___HTMLTAG_639__HTMLTAG_640___
</ul>___HTMLTAG_642__HTMLTAG_643___第 7 部分：生產、高可用性和 Kubernetes___HTMLTAG_644__HTMLTAG_645___
<h3>第 23 課：Keycloak 生產部署與資料庫調優</h3>
<ul>
___HTMLTAG_649__HTMLTAG_650___生產準備清單___HTMLTAG_651__HTMLTAG_652___
___HTMLTAG_653__HTMLTAG_654___建置最佳化（kc.sh 建置）___HTMLTAG_655__HTMLTAG_656___
___HTMLTAG_657__HTMLTAG_658___資料庫調整：PostgreSQL、連線池、其他資料來源___HTMLTAG_659__HTMLTAG_660___
___HTMLTAG_661__HTMLTAG_662___主機名稱 v2、反向代理、HTTP/HTTPS 設定___HTMLTAG_663__HTMLTAG_664___
___HTMLTAG_665__HTMLTAG_666___JVM 調整、Argon2 雜湊、快取配置___HTMLTAG_667__HTMLTAG_668___
___HTMLTAG_669__HTMLTAG_670___導入/匯出領域資料___HTMLTAG_671__HTMLTAG_672___
</ul>
<h3>第 24 課：高可用性、叢集和多站點部署</h3>
<ul>
___HTMLTAG_677__HTMLTAG_678___Keycloak 叢集與 Infinispan、jdbc-ping 傳輸___HTMLTAG_679__HTMLTAG_680___
___HTMLTAG_681__HTMLTAG_682___零配置安全叢集通訊___HTMLTAG_683__HTMLTAG_684___
___HTMLTAG_685__HTMLTAG_686___會話複製與持久性使用者會話___HTMLTAG_687__HTMLTAG_688___
___HTMLTAG_689__HTMLTAG_690___多站點主動-被動部署___HTMLTAG_691__HTMLTAG_692___
___HTMLTAG_693__HTMLTAG_694___滾動更新和非阻塞運作狀況檢查___HTMLTAG_695__HTMLTAG_696___
___HTMLTAG_697__HTMLTAG_698___CPU/記憶體大小指南___HTMLTAG_699__HTMLTAG_700___
</ul>
<h3>第 25 課：Kubernetes 操作員、監控與管理 CLI</h3>
<ul>
___HTMLTAG_705__HTMLTAG_706___Keycloak 運算子：Keycloak CR、KeycloakRealmImport CR___HTMLTAG_707__HTMLTAG_708___
___HTMLTAG_709__HTMLTAG_710___操作員進階設定（調度、資源、網路策略）___HTMLTAG_711__HTMLTAG_712___
___HTMLTAG_713__HTMLTAG_714___OpenTelemetry：追蹤、指標、日誌記錄___HTMLTAG_715__HTMLTAG_716___
___HTMLTAG_717__HTMLTAG_718___Prometheus 指標和 Grafana 儀表板___HTMLTAG_719__HTMLTAG_720___
___HTMLTAG_721__HTMLTAG_722___掌握管理 CLI (kcadm.sh)___HTMLTAG_723__HTMLTAG_724___
___HTMLTAG_725__HTMLTAG_726___備份/復原策略與故障排除___HTMLTAG_727__HTMLTAG_728___
</ul>