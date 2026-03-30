---
id: 019d8a21-c110-7001-d001-e1f2a3b4c522
title: "Bài 22: Security Architecture - Defense in Depth"
slug: bai-22-security-architecture-defense-in-depth
description: >-
  Defense in Depth model. Authentication & Authorization
  architecture (OAuth2, JWT, RBAC, ABAC). Network security
  (WAF, VPC, Security Groups). Data security (encryption at
  rest/in transit, key management). API security. Zero Trust
  Architecture. OWASP Top 10 awareness.
duration_minutes: 170
is_free: false
video_url: null
sort_order: 22
section_title: "Phần 6: Reliability, Security & Observability"
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: "System Architecture: From Zero to Hero"
  slug: system-architecture-from-zero-to-hero
---

## Giới thiệu

Security không phải afterthought — nó phải được thiết kế từ đầu. **Defense in Depth** nghĩa là nhiều lớp bảo vệ: nếu 1 lớp bị bypass, lớp tiếp theo bảo vệ.

---

## 1. Defense in Depth Model

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

## 2. Authentication & Authorization

### 2.1 OAuth 2.0 + OpenID Connect

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

### 2.2 JWT Architecture

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

### 2.3 RBAC vs ABAC

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

## 3. Network Security

### 3.1 VPC Architecture

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

### 3.2 WAF (Web Application Firewall)

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

## 4. Data Security

### 4.1 Encryption

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

### 4.2 Data Classification

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

## 5. API Security

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

## 6. Zero Trust Architecture

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

## Tổng kết

| Layer | Controls |
|-------|----------|
| Edge | WAF, DDoS, CDN, Rate limiting |
| Network | VPC, Security Groups, Private subnets |
| Application | AuthN/AuthZ, Input validation, CSRF |
| Data | Encryption, Key management, Classification |
| Monitoring | Audit logs, SIEM, Anomaly detection |

---

## Bài tập

1. **Security Architecture:** Thiết kế security architecture cho Healthcare app (HIPAA): patient data, doctor portal, mobile app. Cover: network, authentication, encryption, audit.

2. **Threat Model:** E-commerce checkout flow: user → cart → payment → confirmation. Liệt kê 5 threats (STRIDE model) và countermeasures cho mỗi threat.

3. **Zero Trust Migration:** Công ty có VPN-based access (castle & moat). 500 developers, 50 microservices. Viết kế hoạch migrate sang Zero Trust. Phase nào trước?
