---
id: 019d8b30-b205-7001-c002-e0c5f8200105
title: 'Lesson 5: Tokens, Leases and Renewals'
slug: bai-5-tokens-leases-va-renewal
description: Token types (Service tokens, Batch tokens), Token hierarchy and Orphan tokens, Token accessors, Token roles, Periodic tokens, Token TTL and Max TTL. Lease concept, Lease duration, Lease renewal (vault lease renew), Lease revocation (vault lease revoke), and Prefix-based revocation. Cubbyhole Response Wrapping for secure secret distribution.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 5
section_title: 'Part 1: HashiCorp Vault Platform'
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault from Basic to Advanced
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1464" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1464)"/>

  <!-- Decorations -->
  <g>
    <circle cx="706" cy="148" r="14" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="812" cy="274" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="918" cy="140" r="20" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="1024" cy="266" r="8" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="630" cy="132" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="188" x2="1100" y2="268" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="218" x2="1050" y2="288" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1075.2390923627308,216.5 1075.2390923627308,259.5 1038,281 1000.7609076372692,259.5 1000.7609076372692,216.5 1038,195" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🔒 DevSecOps — Lesson 5</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">Lesson 5: Tokens, Leases and Renewal</tspan>
  </text>

  <!-- Series subtitle -->
<text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault from Basic to Advanced</text>

  <!-- Section -->
<text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: HashiCorp Vault Platform</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduce

Every operation on HashiCorp Vault (reading secrets, writing data, configuring policies) requires a **Token**. Tokens are the central authentication mechanism of Vault — no matter how you log in (userpass, LDAP, OIDC, AWS IAM...), the end result is always a Vault token.

Included with Token is the concept of **Lease** — a lifecycle management mechanism (term) for both tokens and dynamic secrets. Lease ensures that no access is permanent, minimizing the risk of credentials being exposed.

This lesson will delve into:

- Token types and characteristics
- Token hierarchy, orphan tokens, accessors
- Token TTL, Max TTL, and Periodic tokens
- Lease concept, renewal and revocation
- Cubbyhole Response Wrapping

## 1. Token Types

### 1.1 Service Tokens

Service Tokens are the most traditional and popular tokens in Vault.

**Characteristic:**

- Has **Token Accessor** (used to manage tokens without knowing token value)
- Saved in **storage backend** (Raft, Consul, etc.)
- **renewal** support (TTL extension)
- Create separate **Cubbyhole** for each token
- Tham gia **parent-child hierarchy** (token tree)
- Can create **child tokens**
- Prefix: `hvs.` (Vault Service token)

```bash
# Tạo service token
vault token create -policy=my-policy -ttl=1h

# Output:
# Key                  Value
# ---                  -----
# token                hvs.CAESIGxyz123...
# token_accessor       aAbBcCdDeE...
# token_duration       1h
# token_renewable      true
# token_policies       ["default" "my-policy"]
# identity_policies    []
# policies             ["default" "my-policy"]
# token_type           service
```

### 1.2 Batch Tokens

Batch Token is a lightweight token, designed for high-performance workloads.

**Characteristic:**

- **Not saved in storage** — all information is encoded in the token itself (encrypted blob)
- **No Token Accessor**
- **No Cubbyhole**
- **Not renewable** — when the TTL runs out, a new token must be created
- **Does not participate in hierarchy** — always an orphan
- **Unable to create child tokens**
- Significantly larger size than service token
- Prefix: `hvb.` (Vault Batch token)

```bash
# Tạo batch token
vault token create -type=batch -policy=my-policy -ttl=1h

# Output:
# Key                  Value
# ---                  -----
# token                hvb.AAAAAQxxxxxxxxxxxx...  # Dài hơn nhiều
# token_accessor       n/a
# token_duration       1h
# token_renewable      false
# token_policies       ["default" "my-policy"]
# token_type           batch
```

### 1.3 Compare Service Token vs Batch Token

| Features | Service Tokens | Batch Tokens |
| --- | --- | --- |
| Save in storage | ✅ Yes | ❌ No |
| Token Accessor | ✅ Yes | ❌ No |
| Cubbyhole | ✅ Yes | ❌ No |
| Renewable | ✅ Yes | ❌ No |
| Child tokens | ✅ Create | ❌ No |
| Revoke | ✅ Explicit | Only out of TTL |
| Performance | Lower | ✅ Higher |
| Size | Small (~95 bytes) | Large (~500+ bytes) |
| Use case | General, admin | High-throughput, ephemeral |

### 1.4 When to use which type of token?

```
Service Token → Khi cần:
  ├── Renewal (gia hạn)
  ├── Revocation (thu hồi tức thì)
  ├── Cubbyhole (response wrapping)
  ├── Token hierarchy (parent-child)
  └── Audit trail (token accessor tracking)

Batch Token → Khi cần:
  ├── High throughput (microservices, serverless)
  ├── Minimal storage overhead
  ├── Stateless systems
  └── Short-lived operations
```

## 2. Token Hierarchy

### 2.1 Parent-Child Relationship

Each service token (except root token and orphan token) has a **parent token**. When the parent is revoke, the entire child tree (child tokens and related leases) is also revoke.

```
Root Token
├── Token A (admin)
│   ├── Token A1 (app-1)
│   │   ├── Token A1a (worker-1)
│   │   └── Token A1b (worker-2)
│   └── Token A2 (app-2)
└── Token B (devops)
    └── Token B1 (ci-cd)

# Nếu revoke Token A:
# → Token A1, A1a, A1b, A2 đều bị revoke
# → Token B, B1 KHÔNG bị ảnh hưởng
```

```bash
# Revoke một token → toàn bộ tree con bị revoke
vault token revoke hvs.token-A

# Xem token hierarchy (qua accessor)
vault token lookup -accessor aAbBcCdDeE
```

### 2.2 Orphan Tokens

Orphan Tokens do not belong to any hierarchy — they exist independently, unaffected when the parent is revoke.

```bash
# Tạo orphan token (yêu cầu quyền sudo hoặc root)
vault token create -orphan -policy=my-policy -ttl=24h

# Hoặc dùng auth method — tokens từ auth method mặc định là orphan
vault login -method=userpass username=admin
# → Token này là orphan (không có parent trong tree)
```

> ⚠️ **Careful:** Orphan tokens are not revoke when the parent token expires. There should be a separate management process to avoid "orphaned" tokens remaining too long.

### 2.3 Token Lookup

```bash
# Xem thông tin token hiện tại
vault token lookup

# Output:
# Key                 Value
# ---                 -----
# accessor            aAbBcCdD...
# creation_time       1705312800
# creation_ttl        768h
# display_name        userpass-admin
# entity_id           xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
# expire_time         2025-02-15T10:00:00Z
# explicit_max_ttl    0s
# id                  hvs.CAESIGxyz...
# issue_time          2025-01-15T10:00:00Z
# meta                map[username:admin]
# num_uses            0
# orphan              true
# path                auth/userpass/login/admin
# policies            [default admin-policy]
# renewable           true
# ttl                 678h45m
# type                service

# Lookup bằng accessor (không cần biết token value)
vault token lookup -accessor aAbBcCdD...

# Lookup token cụ thể
vault token lookup hvs.CAESIGxyz...
```

## 3. Token Accessors

### 3.1 What is Token Accessor?

Each service token has an **accessor** — a reference ID that allows performing administrative operations on the token **without knowing the token value**. This is important for security: admins can manage tokens without accessing secret token values.

**Accessor allows:**

- View token metadata (policies, TTL, creation time)
- Revoke token
- Renew token

**Accessor DOES NOT allow:**

- Use tokens to access secrets
- Create child tokens

```bash
# Liệt kê tất cả token accessors
vault list auth/token/accessors

# Output:
# Keys
# ----
# aAbBcCdDeEfF...
# gGhHiIjJkKlL...
# mMnNoOpPqQrR...

# Lookup token qua accessor
vault token lookup -accessor aAbBcCdDeEfF

# Revoke token qua accessor
vault token revoke -accessor aAbBcCdDeEfF

# Renew token qua accessor
vault token renew -accessor aAbBcCdDeEfF
```

### 3.2 Script to manage tokens with accessors

```bash
#!/bin/bash
# list-and-audit-tokens.sh
# Liệt kê tất cả tokens và thông tin chi tiết

echo "=== Vault Token Audit ==="
echo ""

# Lấy danh sách accessors
ACCESSORS=$(vault list -format=json auth/token/accessors | jq -r '.[]')

echo "Token Accessor | Display Name | Policies | TTL | Orphan"
echo "--- | --- | --- | --- | ---"

for accessor in $ACCESSORS; do
  # Lookup từng token qua accessor
  INFO=$(vault token lookup -accessor "$accessor" -format=json 2>/dev/null)
  if [ $? -eq 0 ]; then
    DISPLAY=$(echo "$INFO" | jq -r '.data.display_name')
    POLICIES=$(echo "$INFO" | jq -r '.data.policies | join(",")')
    TTL=$(echo "$INFO" | jq -r '.data.ttl')
    ORPHAN=$(echo "$INFO" | jq -r '.data.orphan')

    echo "${accessor:0:16}... | $DISPLAY | $POLICIES | ${TTL}s | $ORPHAN"
  fi
done
```

## 4. Token Roles

### 4.1 What is Token Role?

Token Role is the configuration template for token creation. Instead of specifying multiple parameters each time you create a token, you define a role and reference it.

```bash
# Tạo token role
vault write auth/token/roles/app-role \
  allowed_policies="app-read,app-write" \
  disallowed_policies="admin" \
  orphan=true \
  renewable=true \
  token_period=0 \
  token_ttl=1h \
  token_max_ttl=24h \
  token_explicit_max_ttl=0 \
  token_type=service \
  token_num_uses=0 \
  token_no_default_policy=false

# Tạo token từ role
vault token create -role=app-role -policy=app-read

# Xem role config
vault read auth/token/roles/app-role
```

### 4.2 Important parameters of Token Role

```bash
# Role cho CI/CD pipeline — token ngắn hạn, không renewable
vault write auth/token/roles/cicd-role \
  allowed_policies="cicd-deploy" \
  orphan=true \
  renewable=false \
  token_ttl=30m \
  token_max_ttl=1h \
  token_type=batch \
  token_num_uses=10         # Chỉ dùng được 10 lần

# Role cho application — periodic token, tự renew
vault write auth/token/roles/app-periodic-role \
  allowed_policies="app-read" \
  orphan=true \
  renewable=true \
  token_period=1h           # Token không hết hạn nếu renew đều đặn
  token_type=service

# Role cho admin — limited, không orphan
vault write auth/token/roles/limited-admin \
  allowed_policies="admin-read" \
  disallowed_policies="root" \
  orphan=false \
  renewable=true \
  token_ttl=2h \
  token_max_ttl=8h
```

## 5. TTL, Max TTL and Periodic Tokens

### 5.1 Token TTL (Time To Live)

TTL determines how long the token is valid. When the TTL expires, the token is automatically revoke.

```
                    Token Lifecycle
                    
Created ──────────────────────────────── Expired
  │                                        │
  │◄──────── TTL (1h) ────────────────────►│
  │                                        │
  │    Renew    Renew    Renew             │
  │      │        │        │               │
  │      ▼        ▼        ▼               │
  │  ┌──1h──┐ ┌──1h──┐ ┌──1h──┐          │
  │  │      │ │      │ │      │    Max TTL │
  │◄─┴──────┴─┴──────┴─┴──────┴──────────►│
  │                                        │
  0h       1h       2h       3h     ...   32d (default max)
```

```bash
# Tạo token với TTL 1 giờ
vault token create -policy=my-policy -ttl=1h

# Xem TTL còn lại
vault token lookup -format=json | jq '.data.ttl'

# Các system default
vault read sys/auth/token/tune
# default_lease_ttl    768h (32 days)
# max_lease_ttl        768h (32 days)
```

### 5.2 Max TTL

Max TTL is a hard limit — tokens cannot renew beyond `creation_time + max_ttl`. The token is then forced to be recreated.

```bash
# Hệ thống TTL hierarchy (áp dụng giá trị nhỏ nhất)
#
# 1. System Max TTL (sys/config/default-lease-ttl)
#    └── Mặc định: 768h (32 ngày)
#
# 2. Auth Mount Max TTL
#    vault auth tune -max-lease-ttl=48h auth/userpass/
#
# 3. Auth Role Max TTL
#    vault write auth/userpass/users/admin token_max_ttl=24h ...
#
# 4. Token Create Max TTL
#    vault token create -explicit-max-ttl=12h

# Ví dụ:
# System Max: 768h
# Mount Max:  48h
# Role Max:   24h
# → Token Max TTL = 24h (giá trị nhỏ nhất)

# Cấu hình default TTL cho auth mount
vault auth tune -default-lease-ttl=1h -max-lease-ttl=24h auth/userpass/
```

### 5.3 Periodic Tokens

Periodic Token has a special feature: **not limited by Max TTL**. Each time it renews, the TTL is reset to the value `period` — the token can live indefinitely as long as it is renewed regularly.

```bash
# Tạo periodic token (yêu cầu quyền sudo)
vault token create \
  -policy=app-read \
  -period=1h

# Output:
# token_duration    1h
# token_renewable   true
# token_policies    [default app-read]

# Renew periodic token → TTL reset về 1h mỗi lần
vault token renew hvs.periodic-token-xxx
# → ttl: 1h (reset, không bị max TTL giới hạn)
```

> 📌 **Use case cho Periodic Token:**
>
> - Long-running applications (always renew before TTL expires)
> - Vault Agent (automatically renew tokens)
> - CI/CD pipelines run continuously
> - Microservices need stable tokens

```bash
# Ví dụ: Application tự renew periodic token
# renew-token.sh — chạy bằng cron mỗi 30 phút

#!/bin/bash
VAULT_TOKEN=$(cat /etc/vault.d/.vault-token)
RESULT=$(curl -s \
  -X PUT \
  -H "X-Vault-Token: $VAULT_TOKEN" \
  "${VAULT_ADDR}/v1/auth/token/renew-self" \
  -d '{"increment": "1h"}')

TTL=$(echo "$RESULT" | jq -r '.auth.lease_duration')
echo "$(date): Token renewed. New TTL: ${TTL}s"
```

## 6. Leases

### 6.1 What is Lease?

Lease is metadata attached to each secret or token, determining its validity period. When the lease expires, Vault automatically **revoke** the secret or related token.

```
                    Lease Lifecycle
                    
┌─────────────────────────────────────────────────┐
│ Secret Created              Secret Revoked       │
│     │                           │                │
│     │◄─── Lease Duration ──────►│                │
│     │         (1h)              │                │
│     │                           │                │
│     │  Renew (+30m)             │                │
│     │     │                     │                │
│     │     │◄── New Duration ──►│                │
│     │     │      (1h)          │                │
│     │                    Max TTL│                │
│     │◄──────────────────────────►                │
│                                                   │
└─────────────────────────────────────────────────┘
```

Each lease has:

- **Lease ID:** Unique identifier cho lease
- **Lease Duration:** Remaining time (TTL)
- **Renewable:** Can be renewed or not

### 6.2 View Lease information

```bash
# Khi đọc dynamic secret, Vault trả về lease info
vault read database/creds/my-role

# Output:
# Key                Value
# ---                -----
# lease_id           database/creds/my-role/abc123def456...
# lease_duration     1h
# lease_renewable    true
# password           A1a-xxxxxxxxxx
# username           v-userpass-my-role-xxxxxxxxxx

# Xem chi tiết lease
vault lease lookup database/creds/my-role/abc123def456

# Output:
# Key             Value
# ---             -----
# expire_time     2025-01-15T11:00:00Z
# id              database/creds/my-role/abc123def456
# issue_time      2025-01-15T10:00:00Z
# last_renewal    <nil>
# renewable       true
# ttl             45m30s
```

### 6.3 Lease Renewal

```bash
# Renew lease — gia hạn thêm thời gian
vault lease renew database/creds/my-role/abc123def456

# Renew với increment cụ thể
vault lease renew -increment=2h database/creds/my-role/abc123def456

# Output:
# Key                Value
# ---                -----
# lease_id           database/creds/my-role/abc123def456
# lease_duration     2h
# lease_renewable    true
```

**Renew qua API:**

```bash
curl -X PUT \
  -H "X-Vault-Token: $VAULT_TOKEN" \
  "${VAULT_ADDR}/v1/sys/leases/renew" \
  -d '{
    "lease_id": "database/creds/my-role/abc123def456",
    "increment": 7200
  }'
```

> ⚠️ **Note:** Vault may return a lease duration shorter than the requested increment if max TTL is exceeded. Always check for `lease_duration` in response.

### 6.4 Lease Revocation

```bash
# Revoke một lease cụ thể
vault lease revoke database/creds/my-role/abc123def456
# → Database credential (user) bị xóa/vô hiệu hóa ngay lập tức

# Revoke theo prefix — revoke TẤT CẢ leases với prefix
vault lease revoke -prefix database/creds/my-role/
# → Tất cả credentials cho role "my-role" bị revoke

# Revoke toàn bộ leases của một secrets engine
vault lease revoke -prefix database/
# → Tất cả database credentials bị revoke

# Force revoke (bỏ qua errors từ backend)
vault lease revoke -force database/creds/my-role/abc123def456
```

### 6.5 Prefix-based Revocation

Prefix-based revocation is a powerful tool for incident response:

```bash
# Scenario: Phát hiện database bị xâm nhập
# → Revoke TẤT CẢ database credentials ngay lập tức

# Revoke tất cả credentials cho một database role
vault lease revoke -prefix database/creds/compromised-role/

# Revoke tất cả credentials cho toàn bộ database engine
vault lease revoke -prefix database/

# Revoke tất cả dynamic secrets trên AWS
vault lease revoke -prefix aws/

# Kiểm tra: liệt kê leases (nên trống sau khi revoke)
vault list sys/leases/lookup/database/creds/my-role/
```

### 6.6 View all Leases

```bash
# Liệt kê leases theo path
vault list sys/leases/lookup/database/creds/my-role/

# Output:
# Keys
# ----
# abc123def456...
# ghi789jkl012...
# mno345pqr678...

# Đếm số leases đang active
vault list -format=json sys/leases/lookup/database/creds/my-role/ | jq '. | length'
# Output: 3
```

## 7. Cubbyhole Response Wrapping

### 7.1 What is Cubbyhole?

Each service token has a separate **cubbyhole** — a secret storage that can only be accessed by that token. When the token is revoke, the cubbyhole is also deleted. No other token (not even root) can access another token's cubbyhole.

```bash
# Ghi vào cubbyhole
vault write cubbyhole/my-secret password="super-secret-123"

# Đọc từ cubbyhole (chỉ token hiện tại mới đọc được)
vault read cubbyhole/my-secret

# Liệt kê keys trong cubbyhole
vault list cubbyhole/
```

### 7.2 Response Wrapping

Response Wrapping uses cubbyhole to **distribute secrets securely**. Instead of sending the secret directly, Vault creates a **wrapping token** containing the secret in a cubbyhole. The recipient uses the wrapping token to unwrap (read) the secret only once.

```
┌────────────────────────────────────────────────────────┐
│  Quy trình Response Wrapping                            │
│                                                          │
│  1. Admin yêu cầu secret với -wrap-ttl                  │
│     ┌─────┐                         ┌───────┐          │
│     │Admin│ ──vault read -wrap-ttl──►│ Vault │          │
│     └─────┘                         └───┬───┘          │
│                                         │               │
│  2. Vault tạo wrapping token + cubbyhole │               │
│     ┌──────────────────┐                │               │
│     │Wrapping Token    │◄───────────────┘               │
│     │  hvs.wrap-xxx    │                                │
│     │  cubbyhole:      │                                │
│     │    {secret data} │                                │
│     └──────────────────┘                                │
│                                                          │
│  3. Admin gửi wrapping token cho App                    │
│     ┌─────┐  hvs.wrap-xxx  ┌─────┐                     │
│     │Admin│ ───────────────►│ App │                     │
│     └─────┘                 └──┬──┘                     │
│                                │                         │
│  4. App unwrap → nhận secret (1 lần duy nhất)           │
│     ┌─────┐                  ┌───────┐                  │
│     │ App │ ──unwrap────────►│ Vault │                  │
│     └─────┘                  └───┬───┘                  │
│                                  │                       │
│     ← {secret data}  ───────────┘                       │
│     (wrapping token bị revoke ngay sau đó)              │
│                                                          │
└────────────────────────────────────────────────────────┘
```

### 7.3 Using Response Wrapping

```bash
# Wrap khi đọc secret
vault read -wrap-ttl=5m secret/data/db-creds

# Output:
# Key                              Value
# ---                              -----
# wrapping_token                   hvs.CAESI_wrap_token_xxx...
# wrapping_accessor                aAbBcCdD...
# wrapping_token_ttl               5m
# wrapping_token_creation_time     2025-01-15T10:00:00Z
# wrapping_token_creation_path     secret/data/db-creds

# Gửi wrapping_token cho người/app cần nhận secret
# (qua secure channel — không cần quá bảo mật vì token chỉ dùng 1 lần)

# Unwrap (người nhận thực hiện)
VAULT_TOKEN=hvs.CAESI_wrap_token_xxx vault unwrap

# Output:
# Key         Value
# ---         -----
# data        map[password:db-pass-123 username:db-admin]
# metadata    map[created_time:2025-01-15T10:00:00Z ...]

# Thử unwrap lần 2 → THẤT BẠI (chỉ dùng được 1 lần)
VAULT_TOKEN=hvs.CAESI_wrap_token_xxx vault unwrap
# Error: wrapping token is not valid or does not exist
```

### 7.4 Wrap when creating tokens

```bash
# Admin tạo token cho ứng dụng, wrap kết quả
vault token create \
  -policy=app-read \
  -ttl=24h \
  -wrap-ttl=10m

# Output: wrapping_token (không phải actual token)
# → Gửi wrapping_token cho app
# → App unwrap để nhận actual token

# Unwrap phía app
VAULT_TOKEN=hvs.wrapping-token vault unwrap -format=json | jq -r '.auth.client_token'
# → hvs.actual-app-token-xxx
```

### 7.5 Check wrapping token (Rewrap & Lookup)

```bash
# Lookup wrapping token (kiểm tra xem đã bị unwrap chưa)
vault token lookup hvs.wrapping-token

# Nếu token hợp lệ (chưa unwrap) → trả về metadata
# Nếu đã unwrap hoặc hết TTL → error

# Rewrap — tạo wrapping token mới chứa cùng data
VAULT_TOKEN=hvs.old-wrap-token vault unwrap -wrap-ttl=5m
# → Wrapping token mới, token cũ bị vô hiệu
```

### 7.6 Man-in-the-Middle Detection

Response Wrapping is capable of detecting MITM:

```bash
# Scenario:
# 1. Admin tạo wrapping token, gửi cho App
# 2. Attacker chặn được wrapping token
# 3. Attacker unwrap → lấy được secret
# 4. App unwrap → THẤT BẠI (đã bị unwrap rồi)
# → App phát hiện có ai đó đã đọc secret

# Best practice: App thử unwrap → nếu thất bại → ALARM
# → Admin investigate + revoke credentials + re-issue

# Kiểm tra creation path (anti-tampering)
vault write sys/wrapping/lookup token=hvs.wrapping-token-xxx
# → wrapping_token_creation_path cho biết secret gốc từ đâu
```

## 8. Token Management Best Practices

### 8.1 General principles

```bash
# 1. Luôn thiết lập TTL cho tokens
vault token create -policy=app -ttl=1h  # ✅
vault token create -policy=app          # ⚠️ Dùng default TTL

# 2. Sử dụng token roles để chuẩn hóa
vault write auth/token/roles/standard-app \
  allowed_policies="app-read" \
  token_ttl=1h \
  token_max_ttl=24h \
  orphan=true

# 3. Dùng batch tokens cho workloads ephemeral
vault token create -type=batch -policy=read-only -ttl=30m

# 4. Revoke root token sau khi setup xong
vault token revoke hvs.root-token-xxx
```

### 8.2 Automating Token Renewal

```python
#!/usr/bin/env python3
"""vault_token_renewer.py - Tự động renew Vault token."""

import os
import time
import logging
import requests

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

VAULT_ADDR = os.environ.get("VAULT_ADDR", "https://vault.example.com:8200")
VAULT_TOKEN = os.environ["VAULT_TOKEN"]

def get_token_ttl():
    """Lấy TTL còn lại của token."""
    resp = requests.get(
        f"{VAULT_ADDR}/v1/auth/token/lookup-self",
        headers={"X-Vault-Token": VAULT_TOKEN},
    )
    resp.raise_for_status()
    return resp.json()["data"]["ttl"]

def renew_token(increment=3600):
    """Renew token."""
    resp = requests.put(
        f"{VAULT_ADDR}/v1/auth/token/renew-self",
        headers={"X-Vault-Token": VAULT_TOKEN},
        json={"increment": str(increment)},
    )
    resp.raise_for_status()
    new_ttl = resp.json()["auth"]["lease_duration"]
    logger.info(f"Token renewed. New TTL: {new_ttl}s")
    return new_ttl

def main():
    """Main loop - renew khi TTL còn dưới 50%."""
    while True:
        ttl = get_token_ttl()
        logger.info(f"Current TTL: {ttl}s")

        # Renew khi còn dưới 50% TTL
        sleep_time = max(ttl * 0.5, 60)  # Ít nhất 60 giây

        if ttl < 300:  # Ít hơn 5 phút → renew ngay
            renew_token()
        else:
            logger.info(f"Sleeping {sleep_time}s before next check")

        time.sleep(sleep_time)

if __name__ == "__main__":
    main()
```

### 8.3 Lease test script is about to expire

```bash
#!/bin/bash
# check-expiring-leases.sh
# Kiểm tra leases sắp hết hạn trong vòng 1 giờ

THRESHOLD_SECONDS=3600  # 1 giờ

echo "=== Leases sắp hết hạn (< 1h) ==="
echo ""

# Kiểm tra database leases
PATHS=("database/creds/" "aws/creds/" "pki/issue/")

for base_path in "${PATHS[@]}"; do
  ROLES=$(vault list -format=json "sys/leases/lookup/${base_path}" 2>/dev/null | jq -r '.[]' 2>/dev/null)

  for role in $ROLES; do
    LEASES=$(vault list -format=json "sys/leases/lookup/${base_path}${role}" 2>/dev/null | jq -r '.[]' 2>/dev/null)

    for lease_id_suffix in $LEASES; do
      FULL_LEASE_ID="${base_path}${role}${lease_id_suffix}"
      LEASE_INFO=$(vault lease lookup -format=json "$FULL_LEASE_ID" 2>/dev/null)

      if [ $? -eq 0 ]; then
        TTL=$(echo "$LEASE_INFO" | jq -r '.data.ttl')
        if [ "$TTL" -lt "$THRESHOLD_SECONDS" ]; then
          EXPIRE=$(echo "$LEASE_INFO" | jq -r '.data.expire_time')
          echo "⚠️  $FULL_LEASE_ID"
          echo "   TTL: ${TTL}s | Expires: $EXPIRE"
          echo ""
        fi
      fi
    done
  done
done
```

## 9. Practice lab

### Lab 1: Token Types and Hierarchy

```bash
# Setup: Login với root token
export VAULT_ADDR="http://127.0.0.1:8200"
vault login $ROOT_TOKEN

# Tạo policy
vault policy write app-read - <<EOF
path "secret/data/*" {
  capabilities = ["read", "list"]
}
EOF

# 1. Tạo service token (parent)
PARENT=$(vault token create -policy=app-read -ttl=2h -format=json | jq -r '.auth.client_token')
echo "Parent: $PARENT"

# 2. Tạo child token (dùng parent token)
VAULT_TOKEN=$PARENT vault token create -policy=app-read -ttl=1h -format=json
CHILD=$(VAULT_TOKEN=$PARENT vault token create -policy=app-read -ttl=1h -format=json | jq -r '.auth.client_token')
echo "Child: $CHILD"

# 3. Xác nhận child token hoạt động
VAULT_TOKEN=$CHILD vault token lookup

# 4. Revoke parent → child cũng bị revoke
vault token revoke $PARENT

# 5. Xác nhận child không còn hoạt động
VAULT_TOKEN=$CHILD vault token lookup
# → Error: permission denied (đã bị revoke)
```

### Lab 2: Lease Renewal and Revocation

```bash
# Giả sử đã enable database secrets engine
vault secrets enable database

# Configure database connection (ví dụ PostgreSQL)
vault write database/config/my-postgresql \
  plugin_name=postgresql-database-plugin \
  allowed_roles="my-role" \
  connection_url="postgresql://{{username}}:{{password}}@db.example.com:5432/mydb?sslmode=require" \
  username="vault-admin" \
  password="vault-admin-pass"

# Tạo role
vault write database/roles/my-role \
  db_name=my-postgresql \
  creation_statements="CREATE ROLE \"{{name}}\" WITH LOGIN PASSWORD '{{password}}' VALID UNTIL '{{expiration}}'; GRANT SELECT ON ALL TABLES IN SCHEMA public TO \"{{name}}\";" \
  default_ttl="1h" \
  max_ttl="24h"

# 1. Tạo database credential
vault read database/creds/my-role
# → Ghi nhận lease_id

LEASE_ID="database/creds/my-role/abc123..."

# 2. Kiểm tra lease
vault lease lookup $LEASE_ID

# 3. Renew lease
vault lease renew -increment=2h $LEASE_ID

# 4. Kiểm tra TTL mới
vault lease lookup $LEASE_ID

# 5. Revoke lease
vault lease revoke $LEASE_ID

# 6. Xác nhận credential đã bị xóa khỏi database
# (user không còn tồn tại trong PostgreSQL)
```

### Lab 3: Response Wrapping

```bash
# 1. Ghi secret
vault kv put secret/app/db-creds \
  username="app-user" \
  password="super-secret-password"

# 2. Đọc với response wrapping
WRAP_RESULT=$(vault kv get -wrap-ttl=5m -format=json secret/app/db-creds)
WRAP_TOKEN=$(echo "$WRAP_RESULT" | jq -r '.wrap_info.token')
echo "Wrapping Token: $WRAP_TOKEN"

# 3. Kiểm tra wrapping token
vault token lookup $WRAP_TOKEN

# 4. Unwrap (mô phỏng app nhận secret)
VAULT_TOKEN=$WRAP_TOKEN vault unwrap -format=json | jq '.data.data'
# Output:
# {
#   "password": "super-secret-password",
#   "username": "app-user"
# }

# 5. Thử unwrap lần 2 → thất bại
VAULT_TOKEN=$WRAP_TOKEN vault unwrap
# Error: wrapping token is not valid or does not exist

# 6. Wrap token khi tạo
WRAP_TOKEN_CREATE=$(vault token create \
  -policy=app-read \
  -ttl=24h \
  -wrap-ttl=5m \
  -format=json | jq -r '.wrap_info.token')

# 7. App unwrap để nhận actual token
ACTUAL_TOKEN=$(VAULT_TOKEN=$WRAP_TOKEN_CREATE vault unwrap -format=json | jq -r '.auth.client_token')
echo "Actual App Token: $ACTUAL_TOKEN"

# 8. Sử dụng actual token
VAULT_TOKEN=$ACTUAL_TOKEN vault kv get secret/app/db-creds
```

## Summary

| Concept | Description |
| --- | --- |
| **Service Token** | Full-featured token, stored in storage, with accessor and cubbyhole |
| **Batch Token** | Lightweight token, no storage, used for high-throughput workloads |
| **Token Hierarchy** | Parent-child relationship — revoke parent will revoke the entire child tree |
| **Orphan Token** | Independent token, not part of any hierarchy |
| **Token Accessor** | Reference ID allows token management without knowing the token value |
| **Token Role** | Token generation configuration template — standardization and permission restrictions |
| **Periodic Token** | Tokens are not limited by Max TTL — live indefinitely if renewed regularly |
| **Lease** | Metadata determines the validity period of the secret/token |
| **Lease Renewal** | Lease extension, limited by max TTL |
| **Lease Revocation** | Revoke lease, delete/disable corresponding credential |
| **Cubbyhole** | Separate secret storage attached to each token |
| **Response Wrapping** | Distribute secrets securely via wrapping token — only used once |

In the next article, we will learn about **Audit Devices** — the system that logs and audits all operations on Vault.
