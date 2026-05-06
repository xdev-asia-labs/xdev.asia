---
id: 019d8a21-c110-7001-d001-e1f2a3b4c522
title: 第 22 課：安全架構 - 縱深防禦
slug: bai-22-security-architecture-defense-in-depth
description: >-
  縱深防禦模型。身份驗證和授權架構（OAuth2、JWT、RBAC、ABAC）。網路安全（WAF、VPC、安全群組）。資料安全（靜態/傳輸中加密、金鑰管理）。
  API安全性。零信任架構。 OWASP 十大認知度。
duration_minutes: 170
is_free: false
video_url: null
sort_order: 22
section_title: 第 6 部分：可靠性、安全性和可觀察性
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 系統架構：從零到英雄
  slug: system-architecture-from-zero-to-hero
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2309" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2309)"/>

  <!-- Decorations -->
  <g>
    <circle cx="641" cy="33" r="24" fill="#34d399" opacity="0.08"/>
    <circle cx="682" cy="34" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="723" cy="35" r="10" fill="#34d399" opacity="0.14"/>
    <circle cx="764" cy="36" r="33" fill="#34d399" opacity="0.07"/>
    <circle cx="805" cy="37" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="243" x2="1100" y2="323" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="273" x2="1050" y2="343" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1075.9089653438086,224 1075.9089653438086,262 1043,281 1010.0910346561914,262 1010.0910346561914,224 1043,205" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🏗️ 建築 — 第 22 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 22 課：安全架構 - 防禦</tspan>
      <tspan x="60" dy="42">深度</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">系統架構：從零到英雄</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 6 部分：可靠性、安全性和可觀察性</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

安全性不是事後才想到的——它必須從頭開始設計。 **深度防禦**意味著多層保護：如果繞過一層，則下一層提供保護。

---

## 1.縱深防禦模型

```
Layer 1: Edge/Perimeter
  ┌────────────────────────────────────────┐
  │ WAF, DDoS Protection, CDN             │
  │ Rate Limiting, IP Filtering           │
  └────────────────────┬───────────────────┘
                       │
Layer 2: Network
  ┌────────────────────┼───────────────────┐
  │ VPC, Subnets, Security Groups         │
  │ Network ACLs, Private endpoints       │
  └────────────────────┬───────────────────┘
                       │
Layer 3: Application
  ┌────────────────────┼───────────────────┐
  │ Authentication, Authorization         │
  │ Input Validation, CSRF/XSS protection │
  └────────────────────┬───────────────────┘
                       │
Layer 4: Data
  ┌────────────────────┼───────────────────┐
  │ Encryption at rest, in transit        │
  │ Key management, Data masking          │
  └────────────────────┬───────────────────┘
                       │
Layer 5: Monitoring
  ┌────────────────────┼───────────────────┐
  │ Audit logs, Anomaly detection         │
  │ SIEM, Incident response               │
  └────────────────────────────────────────┘
```

---

## 2. 身分驗證與授權

### 2.1 OAuth 2.0 + OpenID 連接

```
Authorization Code Flow:

  User → App: "Login with Google"
  App → Google: Redirect (client_id, redirect_uri, scope)
  User → Google: Login + Consent
  Google → App: Authorization Code
  App → Google: Exchange code for tokens (+ client_secret)
  Google → App: access_token + id_token (JWT)
  App → API: Request + access_token

Tokens:
  Access Token:  Ngắn hạn (15 phút), dùng gọi API
  Refresh Token: Dài hạn (7 ngày), dùng lấy access token mới
  ID Token:      User info (name, email), JWT format
```

### 2.2 JWT架構

```
JWT = Header.Payload.Signature

Header:  { "alg": "RS256", "typ": "JWT" }
Payload: { "sub": "user-123", "role": "admin", "exp": 1705312200 }
Signature: RS256(header + payload, private_key)

Verification:
  API Gateway nhận JWT
  → Verify signature bằng public key
  → Check expiration
  → Extract claims (user_id, roles)
  → Forward request + claims to services

Stateless: Không cần query database mỗi request
Revocation: Khó! (dùng short expiry + blacklist)
```

### 2.3 RBAC 與 ABAC

```
RBAC (Role-Based Access Control):
  User → Role → Permissions
  
  Role: "editor"
  Permissions: [create_post, edit_post, delete_own_post]
  
  Check: user.role == "editor" && action == "edit_post"
  
  Simple, widely used
  Limitation: Không handle complex policies

ABAC (Attribute-Based Access Control):
  Policy based on attributes of User, Resource, Action, Environment
  
  Policy: "User can edit post IF:
    user.department == post.department AND
    user.clearance >= post.classification AND
    time.now BETWEEN 9:00 AND 18:00"
  
  Flexible, fine-grained
  Complex to manage
```

---

## 3. 網路安全

### 3.1 專有網路架構

```
┌──────────────────────────────────────────────┐
│ VPC (10.0.0.0/16)                            │
│                                               │
│ ┌──────────────────────────────────────────┐  │
│ │ Public Subnet (10.0.1.0/24)              │  │
│ │ ┌──────────┐  ┌──────────┐               │  │
│ │ │ ALB      │  │ NAT GW   │               │  │
│ │ └──────────┘  └──────────┘               │  │
│ └──────────────────────────────────────────┘  │
│                                               │
│ ┌──────────────────────────────────────────┐  │
│ │ Private Subnet (10.0.2.0/24)             │  │
│ │ ┌──────────┐  ┌──────────┐               │  │
│ │ │ App      │  │ App      │               │  │
│ │ │ Server   │  │ Server   │               │  │
│ │ └──────────┘  └──────────┘               │  │
│ └──────────────────────────────────────────┘  │
│                                               │
│ ┌──────────────────────────────────────────┐  │
│ │ Isolated Subnet (10.0.3.0/24)            │  │
│ │ ┌──────────┐  ┌──────────┐               │  │
│ │ │ Database │  │ Redis    │               │  │
│ │ └──────────┘  └──────────┘               │  │
│ └──────────────────────────────────────────┘  │
└──────────────────────────────────────────────┘

Security Groups:
  ALB: Inbound 443 from 0.0.0.0/0
  App: Inbound 8080 from ALB SG only
  DB:  Inbound 5432 from App SG only
```

### 3.2 WAF（網路應用程式防火牆）

```
WAF Rules:
  - Block SQL injection patterns
  - Block XSS payloads
  - Rate limit: Max 1000 req/min per IP
  - Geo blocking: Block countries không phục vụ
  - Bot detection: Block scrapers, bad bots
  - Custom rules: Block specific URLs/patterns

Traffic flow:
  Internet → CloudFlare/WAF → ALB → App
  Attack blocked at edge (trước khi đến app)
```

---

## 4. 資料安全

### 4.1 加密

```
In Transit:
  Client ←── TLS 1.3 ──→ Server
  Service A ←── mTLS ──→ Service B
  App ←── TLS ──→ Database

At Rest:
  Database: AES-256 encrypted storage
  S3: Server-side encryption (SSE-S3, SSE-KMS)
  Disk: LUKS / BitLocker

Key Management:
  ❌ Hardcode keys trong code
  ❌ Lưu keys trong database
  ✅ KMS (AWS KMS, HashiCorp Vault)
  ✅ Envelope encryption:
     Master Key (KMS) → encrypts → Data Key
     Data Key → encrypts → Data
     Rotate Data Key dễ dàng
```

### 4.2 資料分類

```
Level 1 - Public:        Marketing content, public APIs
Level 2 - Internal:      Internal docs, employee directory  
Level 3 - Confidential:  Customer PII, financial data
Level 4 - Restricted:    Passwords, encryption keys, PHI

Mỗi level có controls khác nhau:
  Level 4: Encrypted + access log + MFA + need-to-know
  Level 1: No special controls
```

---

## 5. API 安全

```
1. Authentication: Ai đang gọi?
   API Key, OAuth2 Bearer Token, mTLS

2. Authorization: Được phép gọi endpoint này?
   RBAC/ABAC check per endpoint

3. Input Validation: Data có hợp lệ?
   Schema validation, sanitize input

4. Rate Limiting:
   Per user: 100 req/min
   Per IP: 1000 req/min
   Per endpoint: /login → 5 req/min (brute force)

5. Request Size Limit:
   Max body: 10MB
   Max header: 8KB

6. Output Filtering:
   Không trả về sensitive fields
   Mask PII in logs
```

---

## 6. 零信任架構

```
Traditional (Castle & Moat):
  ┌─────────────────────────┐
  │ Trusted Network         │
  │ Everything inside = OK  │ ← Flat network
  │ Firewall at perimeter   │   Once in, full access
  └─────────────────────────┘

Zero Trust:
  "Never trust, always verify"
  "Assume breach"

  Principles:
  1. Verify explicitly (every request)
  2. Least privilege access
  3. Assume breach

  Implementation:
  ┌───────────────────────────────────────┐
  │ Every request verified:               │
  │ - Identity (who?)                     │
  │ - Device health (patched? compliant?) │
  │ - Location (expected?)                │
  │ - Data sensitivity (what access?)     │
  │ - Anomaly detection (normal pattern?) │
  └───────────────────────────────────────┘

  Service Mesh (mTLS): Service ↔ Service encrypted + authenticated
  Identity-aware proxy: Google BeyondCorp style
```

---

## 總結

|層 |控制|
|--------|----------|
|邊緣 | WAF、DDoS、CDN、速率限制 |
|網路| VPC、安全群組、私人子網路 |
|應用 | AuthN/AuthZ、輸入驗證、CSRF |
|資料|加密、金鑰管理、分類 |
|監控|審核日誌、SIEM、異常偵測 |

---

## 練習

1. **安全架構：** 設計醫療保健應用程式 (HIPAA) 的安全架構：病患資料、醫生入口網站、行動應用程式。涵蓋：網路、認證、加密、稽核。

2. **威脅模型：** 電商結帳流程：使用者→購物車→付款→確認。列出 5 種威脅（STRIDE 模型）以及每個威脅的對策。

3. **零信任遷移：** 公司擁有基於 VPN 的訪問（城堡和護城河）。 500 名開發人員，50 個微服務。撰寫零信任遷移計劃。哪個階段先出現？
