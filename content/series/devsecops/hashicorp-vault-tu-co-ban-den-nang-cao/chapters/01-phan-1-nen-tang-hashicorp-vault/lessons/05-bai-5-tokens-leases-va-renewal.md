---
id: 019d8b30-b205-7001-c002-e0c5f8200105
title: 'Bài 5: Tokens, Leases và Renewal'
slug: bai-5-tokens-leases-va-renewal
description: >-
  Token types (Service tokens, Batch tokens), Token hierarchy và Orphan tokens, Token accessors, Token roles, Periodic tokens, Token TTL và Max TTL. Lease concept, Lease duration, Lease renewal (vault lease renew), Lease revocation (vault lease revoke), và Prefix-based revocation. Cubbyhole Response Wrapping cho secure secret distribution.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 5
section_title: "Phần 1: Nền tảng HashiCorp Vault"
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault từ Cơ bản đến Nâng cao
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🔒 DevSecOps — Bài 5</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 5: Tokens, Leases và Renewal</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 1: Nền tảng HashiCorp Vault</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Mọi thao tác trên HashiCorp Vault (đọc secret, ghi dữ liệu, cấu hình policy) đều yêu cầu một **Token**. Token là cơ chế xác thực trung tâm của Vault — bất kể bạn login bằng phương thức nào (userpass, LDAP, OIDC, AWS IAM...), kết quả cuối cùng luôn là một Vault token.

Đi kèm với Token là khái niệm **Lease** — cơ chế quản lý vòng đời (thời hạn) cho cả tokens và dynamic secrets. Lease đảm bảo rằng không có quyền truy cập nào tồn tại vĩnh viễn, giảm thiểu rủi ro khi credentials bị lộ.

Bài học này sẽ đi sâu vào:

- Các loại Token và đặc điểm
- Token hierarchy, orphan tokens, accessors
- Token TTL, Max TTL, và Periodic tokens
- Lease concept, renewal và revocation
- Cubbyhole Response Wrapping

## 1. Token Types

### 1.1 Service Tokens

Service Token là loại token truyền thống và phổ biến nhất trong Vault.

**Đặc điểm:**

- Có **Token Accessor** (dùng để quản lý token mà không cần biết token value)
- Được lưu trong **storage backend** (Raft, Consul, etc.)
- Hỗ trợ **renewal** (gia hạn TTL)
- Tạo **Cubbyhole** riêng cho mỗi token
- Tham gia **parent-child hierarchy** (token tree)
- Có thể tạo **child tokens**
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

Batch Token là loại token nhẹ, được thiết kế cho workloads cần hiệu suất cao.

**Đặc điểm:**

- **Không lưu trong storage** — toàn bộ thông tin được encode trong chính token (encrypted blob)
- **Không có Token Accessor**
- **Không có Cubbyhole**
- **Không renewable** — khi hết TTL phải tạo token mới
- **Không tham gia hierarchy** — luôn là orphan
- **Không thể tạo child tokens**
- Kích thước lớn hơn service token đáng kể
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

### 1.3 So sánh Service Token vs Batch Token

| Đặc điểm | Service Token | Batch Token |
| --- | --- | --- |
| Lưu trong storage | ✅ Có | ❌ Không |
| Token Accessor | ✅ Có | ❌ Không |
| Cubbyhole | ✅ Có | ❌ Không |
| Renewable | ✅ Có | ❌ Không |
| Child tokens | ✅ Tạo được | ❌ Không |
| Revoke | ✅ Explicit | Chỉ hết TTL |
| Performance | Thấp hơn | ✅ Cao hơn |
| Kích thước | Nhỏ (~95 bytes) | Lớn (~500+ bytes) |
| Use case | General, admin | High-throughput, ephemeral |

### 1.4 Khi nào dùng loại token nào?

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

Mỗi service token (trừ root token và orphan token) đều có một **parent token**. Khi parent bị revoke, toàn bộ cây con (child tokens và các leases liên quan) cũng bị revoke theo.

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

Orphan Token không thuộc bất kỳ hierarchy nào — chúng tồn tại độc lập, không bị ảnh hưởng khi parent bị revoke.

```bash
# Tạo orphan token (yêu cầu quyền sudo hoặc root)
vault token create -orphan -policy=my-policy -ttl=24h

# Hoặc dùng auth method — tokens từ auth method mặc định là orphan
vault login -method=userpass username=admin
# → Token này là orphan (không có parent trong tree)
```

> ⚠️ **Cẩn thận:** Orphan tokens không bị revoke khi parent token hết hạn. Cần có quy trình quản lý riêng để tránh tokens "mồ côi" tồn tại quá lâu.

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

### 3.1 Token Accessor là gì?

Mỗi service token có một **accessor** — một reference ID cho phép thực hiện các thao tác quản trị trên token **mà không cần biết token value**. Điều này quan trọng cho bảo mật: admin có thể quản lý tokens mà không cần truy cập vào secret token values.

**Accessor cho phép:**

- Xem metadata của token (policies, TTL, creation time)
- Revoke token
- Renew token

**Accessor KHÔNG cho phép:**

- Sử dụng token để truy cập secrets
- Tạo child tokens

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

### 3.2 Script quản lý tokens bằng accessors

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

### 4.1 Token Role là gì?

Token Role là template cấu hình cho việc tạo token. Thay vì chỉ định nhiều tham số mỗi lần tạo token, bạn định nghĩa một role và tham chiếu đến nó.

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

### 4.2 Các tham số quan trọng của Token Role

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

## 5. TTL, Max TTL và Periodic Tokens

### 5.1 Token TTL (Time To Live)

TTL xác định thời gian token còn hiệu lực. Khi TTL hết, token tự động bị revoke.

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

Max TTL là giới hạn cứng — token không thể renew vượt quá thời điểm `creation_time + max_ttl`. Sau đó token buộc phải tạo lại.

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

Periodic Token có đặc tính đặc biệt: **không bị giới hạn bởi Max TTL**. Mỗi lần renew, TTL được reset về giá trị `period` — token có thể sống vô thời hạn miễn là được renew đều đặn.

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
> - Long-running applications (luôn renew trước khi hết TTL)
> - Vault Agent (tự động renew token)
> - CI/CD pipelines chạy liên tục
> - Microservices cần token ổn định

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

### 6.1 Lease là gì?

Lease là metadata gắn với mỗi secret hoặc token, xác định thời hạn hiệu lực. Khi lease hết hạn, Vault tự động **revoke** secret hoặc token liên quan.

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

Mỗi lease có:

- **Lease ID:** Unique identifier cho lease
- **Lease Duration:** Thời gian còn lại (TTL)
- **Renewable:** Có thể gia hạn hay không

### 6.2 Xem thông tin Lease

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

> ⚠️ **Lưu ý:** Vault có thể trả về lease duration ngắn hơn increment yêu cầu nếu vượt quá max TTL. Luôn kiểm tra `lease_duration` trong response.

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

Prefix-based revocation là công cụ mạnh mẽ cho incident response:

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

### 6.6 Xem tất cả Leases

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

### 7.1 Cubbyhole là gì?

Mỗi service token có một **cubbyhole** riêng biệt — một secret storage chỉ token đó mới truy cập được. Khi token bị revoke, cubbyhole cũng bị xóa. Không có một token nào khác (kể cả root) có thể truy cập cubbyhole của token khác.

```bash
# Ghi vào cubbyhole
vault write cubbyhole/my-secret password="super-secret-123"

# Đọc từ cubbyhole (chỉ token hiện tại mới đọc được)
vault read cubbyhole/my-secret

# Liệt kê keys trong cubbyhole
vault list cubbyhole/
```

### 7.2 Response Wrapping

Response Wrapping sử dụng cubbyhole để **phân phối secrets một cách an toàn**. Thay vì gửi secret trực tiếp, Vault tạo một **wrapping token** chứa secret trong cubbyhole. Người nhận dùng wrapping token để unwrap (đọc) secret một lần duy nhất.

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

### 7.3 Sử dụng Response Wrapping

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

### 7.4 Wrap khi tạo token

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

### 7.5 Kiểm tra wrapping token (Rewrap & Lookup)

```bash
# Lookup wrapping token (kiểm tra xem đã bị unwrap chưa)
vault token lookup hvs.wrapping-token

# Nếu token hợp lệ (chưa unwrap) → trả về metadata
# Nếu đã unwrap hoặc hết TTL → error

# Rewrap — tạo wrapping token mới chứa cùng data
VAULT_TOKEN=hvs.old-wrap-token vault unwrap -wrap-ttl=5m
# → Wrapping token mới, token cũ bị vô hiệu
```

### 7.6 Phát hiện Man-in-the-Middle

Response Wrapping có khả năng phát hiện MITM:

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

### 8.1 Nguyên tắc chung

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

### 8.2 Tự động hóa Token Renewal

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

### 8.3 Script kiểm tra Lease sắp hết hạn

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

## 9. Lab thực hành

### Lab 1: Token Types và Hierarchy

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

### Lab 2: Lease Renewal và Revocation

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

## Tổng kết

| Khái niệm | Mô tả |
| --- | --- |
| **Service Token** | Token đầy đủ tính năng, lưu trong storage, có accessor và cubbyhole |
| **Batch Token** | Token nhẹ, không lưu storage, dùng cho high-throughput workloads |
| **Token Hierarchy** | Parent-child relationship — revoke parent sẽ revoke toàn bộ tree con |
| **Orphan Token** | Token độc lập, không thuộc hierarchy nào |
| **Token Accessor** | Reference ID cho phép quản lý token mà không cần biết token value |
| **Token Role** | Template cấu hình tạo token — chuẩn hóa và giới hạn quyền |
| **Periodic Token** | Token không bị Max TTL giới hạn — sống vô hạn nếu renew đều đặn |
| **Lease** | Metadata xác định thời hạn hiệu lực của secret/token |
| **Lease Renewal** | Gia hạn lease, bị giới hạn bởi max TTL |
| **Lease Revocation** | Thu hồi lease, xóa/vô hiệu hóa credential tương ứng |
| **Cubbyhole** | Secret storage riêng biệt gắn với từng token |
| **Response Wrapping** | Phân phối secret an toàn qua wrapping token — chỉ dùng 1 lần |

Bài tiếp theo, chúng ta sẽ tìm hiểu về **Audit Devices** — hệ thống ghi log và kiểm toán mọi thao tác trên Vault.
