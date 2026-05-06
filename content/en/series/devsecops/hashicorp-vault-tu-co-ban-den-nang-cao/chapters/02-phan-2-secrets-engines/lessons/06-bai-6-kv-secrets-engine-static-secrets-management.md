---
id: 019d8b30-b206-7001-c002-e0c5f8200106
title: 'Lesson 6: KV Secrets Engine - Static Secrets Management'
slug: bai-6-kv-secrets-engine-static-secrets-management
description: KV v1 vs KV v2 comparison, enable/configure, CRUD operations, versioning, metadata, KV v2 version attribution (1.21), check-and-set (CAS), soft delete vs destroy, patch operations, migration v1 to v2.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 6
section_title: 'Part 2: Secrets Engines - Managing Secrets'
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault from Basic to Advanced
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9078" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9078)"/>

  <!-- Decorations -->
  <g>
    <circle cx="771" cy="123" r="14" fill="#34d399" opacity="0.08"/>
    <circle cx="942" cy="154" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="613" cy="185" r="20" fill="#34d399" opacity="0.14"/>
    <circle cx="784" cy="216" r="23" fill="#34d399" opacity="0.07"/>
    <circle cx="955" cy="247" r="26" fill="#34d399" opacity="0.1"/>
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
    <line x1="600" y1="133" x2="1100" y2="213" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="163" x2="1050" y2="233" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="957.2487113059643,119 957.2487113059643,147 933,161 908.7512886940357,147 908.7512886940357,119 933,105" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🔒 DevSecOps — Lesson 6</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">Lesson 6: KV Secrets Engine - Static Secrets</tspan>
      <tspan x="60" dy="42">Management</tspan>
  </text>

  <!-- Series subtitle -->
<text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault from Basic to Advanced</text>

  <!-- Section -->
<text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Secrets Engines - Managing Secrets</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduce

KV (Key-Value) Secrets Engine is the most popular secrets engine in HashiCorp Vault, used to store and manage **static secrets** — secrets that do not change automatically over time such as API keys, database passwords, configuration values, and certificates.

In this lesson, we will learn in detail about the two versions KV v1 and KV v2, how to perform CRUD operations, versioning, metadata management, and many other advanced features.

## 1. KV v1 vs KV v2 — Detailed comparison

### 1.1. Overview of the differences

| Features | KV v1 | KV v2 |
|---|---|---|
| Versioning | ❌ Not supported | ✅ Full support |
| Soft delete | ❌ Permanently deleted | ✅ Soft delete + Undelete |
| Metadata | ❌ None | ✅ Custom metadata |
| Check-and-Set (CAS) | ❌ None | ✅ Support |
| Patch operations | ❌ None | ✅ Support (from v1.10) |
| Performance | ✅ Faster (simple) | Slightly slower (due to versioning) |
| Storage footprint | ✅ Smaller | Larger (save multiple versions) |

### 1.2. When to use KV v1?

- When you need maximum performance and no need for versioning
- When storage is an important factor
- For secrets changes are very rare

### 1.3. When to use KV v2?

- Most use cases (default recommended)
- When you need to audit trail through version history
- When you need the ability to rollback to an old version
- When you need to soft delete for more safety

## 2. Enable and Configure KV Secrets Engine

### 2.1. Enable KV v1

```bash
# Enable KV v1 tại path kv-v1/
vault secrets enable -path=kv-v1 -version=1 kv

# Xác nhận engine đã được enable
vault secrets list

# Output mẫu:
# Path          Type         Accessor              Description
# ----          ----         --------              -----------
# kv-v1/        kv           kv_a1b2c3d4           n/a
# secret/       kv           kv_e5f6g7h8           key/value secret storage
```

### 2.2. Enable KV v2

```bash
# Enable KV v2 tại path kv-v2/
vault secrets enable -path=kv-v2 -version=2 kv

# Hoặc sử dụng API
curl --header "X-Vault-Token: $VAULT_TOKEN" \
  --request POST \
  --data '{"type": "kv", "options": {"version": "2"}}' \
  "$VAULT_ADDR/v1/sys/mounts/kv-v2"
```

> **Note:** When starting the Vault dev server, the default `secret/` path is already KV v2.

### 2.3. Configure KV v2

```bash
# Cấu hình KV v2 — giới hạn max versions và CAS required
vault write kv-v2/config \
  max_versions=10 \
  cas_required=false \
  delete_version_after="768h"

# Đọc cấu hình hiện tại
vault read kv-v2/config

# Output:
# Key                     Value
# ---                     -----
# cas_required            false
# delete_version_after    768h0m0s
# max_versions            10
```

Important configurations:

- **max_versions**: Maximum number of versions to keep (0 = unlimited)
- **cas_required**: Required Check-and-Set for all write operations
- **delete_version_after**: Automatically delete version after a certain period of time

## 3. CRUD Operations — Basic operations

### 3.1. Create and record secrets (Create/Update)

#### KV v1

```bash
# Tạo secret mới
vault kv put kv-v1/myapp/database \
  username="admin" \
  password="P@ssw0rd2024!"

# ⚠️ KV v1: Ghi đè TOÀN BỘ secret, không merge
vault kv put kv-v1/myapp/database \
  username="admin" \
  password="NewP@ss2024!" \
  host="db.example.com"
```

#### KV v2

```bash
# Tạo secret mới
vault kv put kv-v2/myapp/database \
  username="admin" \
  password="P@ssw0rd2024!" \
  host="db.example.com" \
  port="5432"

# Output:
# ========= Secret Path =========
# kv-v2/data/myapp/database
#
# ======= Metadata =======
# Key                Value
# ---                -----
# created_time       2024-01-15T10:30:00.123456Z
# custom_metadata    <nil>
# deletion_time      n/a
# destroyed          false
# version            1

# Cập nhật secret — tạo version 2
vault kv put kv-v2/myapp/database \
  username="admin" \
  password="UpdatedP@ss!" \
  host="db.example.com" \
  port="5432"
```

#### Write secret from file

```bash
# Tạo file JSON chứa secret
cat > /tmp/db-secret.json << 'EOF'
{
  "username": "admin",
  "password": "S3cur3P@ssw0rd!",
  "host": "primary-db.internal",
  "port": "5432",
  "database": "myapp_production",
  "ssl_mode": "require"
}
EOF

# Ghi secret từ file
vault kv put kv-v2/myapp/database @/tmp/db-secret.json

# Xóa file tạm ngay sau khi sử dụng
rm -f /tmp/db-secret.json
```

### 3.2. Read secret (Read)

```bash
# Đọc version mới nhất
vault kv get kv-v2/myapp/database

# Output:
# ========= Secret Path =========
# kv-v2/data/myapp/database
#
# ======= Metadata =======
# Key                Value
# ---                -----
# created_time       2024-01-15T10:35:00.654321Z
# custom_metadata    <nil>
# deletion_time      n/a
# destroyed          false
# version            2
#
# ====== Data ======
# Key         Value
# ---         -----
# database    myapp_production
# host        primary-db.internal
# password    S3cur3P@ssw0rd!
# port        5432
# ssl_mode    require
# username    admin

# Đọc version cụ thể
vault kv get -version=1 kv-v2/myapp/database

# Chỉ đọc một field cụ thể
vault kv get -field=password kv-v2/myapp/database

# Đọc dưới dạng JSON
vault kv get -format=json kv-v2/myapp/database

# Sử dụng jq để extract
vault kv get -format=json kv-v2/myapp/database | jq -r '.data.data.password'
```

### 3.3. List secrets

```bash
# List tất cả keys tại một path
vault kv list kv-v2/myapp/

# Output:
# Keys
# ----
# database
# redis
# smtp

# List sử dụng API
curl --header "X-Vault-Token: $VAULT_TOKEN" \
  --request LIST \
  "$VAULT_ADDR/v1/kv-v2/metadata/myapp"
```

### 3.4. Delete secret (Delete)

```bash
# Soft delete version mới nhất (KV v2)
vault kv delete kv-v2/myapp/database

# Soft delete version cụ thể
vault kv delete -versions=1,2 kv-v2/myapp/database
```

## 4. Versioning — Version management

### 4.1. Xem version history

```bash
# Đọc metadata — bao gồm tất cả version info
vault kv metadata get kv-v2/myapp/database

# Output:
# ========== Metadata ==========
# Key                     Value
# ---                     -----
# cas_required            false
# created_time            2024-01-15T10:30:00.123456Z
# current_version         3
# custom_metadata         <nil>
# delete_version_after    0s
# max_versions            0
# oldest_version          1
# updated_time            2024-01-15T11:00:00.789012Z
#
# ====== Version 1 ======
# Key              Value
# ---              -----
# created_time     2024-01-15T10:30:00.123456Z
# deletion_time    n/a
# destroyed        false
#
# ====== Version 2 ======
# Key              Value
# ---              -----
# created_time     2024-01-15T10:35:00.654321Z
# deletion_time    n/a
# destroyed        false
#
# ====== Version 3 ======
# Key              Value
# ---              -----
# created_time     2024-01-15T11:00:00.789012Z
# deletion_time    n/a
# destroyed        false
```

### 4.2. Rollback to old version

```bash
# Đọc version 1
vault kv get -format=json -version=1 kv-v2/myapp/database | \
  jq '.data.data' | \
  vault kv put kv-v2/myapp/database -

# Giờ version 4 sẽ có nội dung giống version 1
```

### 4.3. Version Attribution (Vault 1.21+)

From Vault 1.21, each version will record information about **who created** that version:

```bash
# Đọc metadata với version attribution
vault kv metadata get -format=json kv-v2/myapp/database | \
  jq '.data.versions'

# Output (Vault 1.21+):
# {
#   "1": {
#     "created_time": "2024-01-15T10:30:00.123456Z",
#     "created_by": {
#       "display_name": "token-admin",
#       "entity_id": "abc123...",
#       "policies": ["admin", "default"]
#     },
#     ...
#   }
# }
```

## 5. Check-and-Set (CAS)

CAS helps prevent **race conditions** when multiple clients write to the same secret.

### 5.1. Enable CAS for the entire mount

```bash
vault write kv-v2/config cas_required=true
```

### 5.2. Use CAS when recording

```bash
# Ghi với CAS — phải chỉ định version hiện tại
# cas=0 nghĩa là tạo mới (secret chưa tồn tại)
vault kv put -cas=0 kv-v2/myapp/new-secret key="value"

# Cập nhật — cas phải bằng version hiện tại
vault kv put -cas=1 kv-v2/myapp/new-secret key="updated-value"

# Nếu version không khớp → lỗi
vault kv put -cas=1 kv-v2/myapp/new-secret key="another-value"
# Error: check-and-set parameter did not match the current version
```

### 5.3. CAS per-key

```bash
# Đặt CAS required cho một key cụ thể
vault kv metadata put -cas-required=true kv-v2/myapp/critical-secret
```

## 6. Soft Delete, Undelete and Destroy

### 6.1. Soft Delete

```bash
# Soft delete — dữ liệu vẫn tồn tại nhưng bị đánh dấu đã xóa
vault kv delete kv-v2/myapp/database

# Đọc sẽ thấy thông báo đã xóa
vault kv get kv-v2/myapp/database
# No value found at kv-v2/data/myapp/database

# Soft delete versions cụ thể
vault kv delete -versions=1,3 kv-v2/myapp/database
```

### 6.2. Undelete — Restore

```bash
# Khôi phục version đã soft delete
vault kv undelete -versions=1 kv-v2/myapp/database

# Giờ có thể đọc lại version 1
vault kv get -version=1 kv-v2/myapp/database
```

### 6.3. Destroy — Delete permanently

```bash
# Destroy version cụ thể — KHÔNG THỂ khôi phục
vault kv destroy -versions=1,2 kv-v2/myapp/database

# Xóa toàn bộ key và tất cả versions + metadata
vault kv metadata delete kv-v2/myapp/database
```

> **Warning:** `destroy` and `metadata delete` are actions that cannot be undone. Make sure you really want to delete it permanently before doing so.

## 7. Patch Operations

From Vault 1.10+, you can update **some fields** without overwriting the entire secret.

### 7.1. Patch a field

```bash
# Secret hiện tại có: username, password, host, port
# Chỉ cập nhật password mà giữ nguyên các fields khác
vault kv patch kv-v2/myapp/database password="BrandNewP@ss!"

# Kiểm tra — các fields khác vẫn intact
vault kv get kv-v2/myapp/database
```

### 7.2. Patch with CAS

```bash
# Patch với check-and-set
vault kv patch -cas=5 kv-v2/myapp/database password="AnotherP@ss!"
```

### 7.3. Patch qua API

```bash
curl --header "X-Vault-Token: $VAULT_TOKEN" \
  --header "Content-Type: application/merge-patch+json" \
  --request PATCH \
  --data '{"data": {"password": "APIUpdatedP@ss!"}}' \
  "$VAULT_ADDR/v1/kv-v2/data/myapp/database"
```

## 8. Custom Metadata

Custom metadata allows you to attach additional information to secrets without affecting the secret data.

```bash
# Thêm custom metadata
vault kv metadata put \
  -custom-metadata=owner="team-platform" \
  -custom-metadata=environment="production" \
  -custom-metadata=rotation-schedule="90d" \
  -custom-metadata=jira-ticket="SEC-1234" \
  kv-v2/myapp/database

# Đọc metadata
vault kv metadata get kv-v2/myapp/database

# Output sẽ hiển thị:
# custom_metadata    map[environment:production jira-ticket:SEC-1234 owner:team-platform rotation-schedule:90d]

# Cập nhật max_versions cho key cụ thể
vault kv metadata put -max-versions=5 kv-v2/myapp/database

# Cấu hình tự động xóa version sau 30 ngày
vault kv metadata put -delete-version-after="720h" kv-v2/myapp/database
```

## 9. Migration KV v1 sang KV v2

### 9.1. Direct upgrade (In-place)

```bash
# Kiểm tra version hiện tại
vault read sys/mounts/kv-v1

# Upgrade từ v1 sang v2
vault kv enable-versioning kv-v1/

# Xác nhận đã upgrade thành công
vault read sys/mounts/kv-v1
# options    map[version:2]
```

> **Important note:** The upgrade process is **one-way** — it is not possible to downgrade from v2 to v1.

### 9.2. Migration to new mount

If you want to keep v1 and make a copy in v2:

```bash
#!/bin/bash
# Script migration KV v1 sang KV v2

SOURCE="kv-v1"
DEST="kv-v2"

# Function để migrate đệ quy
migrate_path() {
  local path="$1"
  
  # List tất cả keys tại path
  local keys
  keys=$(vault kv list -format=json "${SOURCE}/${path}" 2>/dev/null | jq -r '.[]')
  
  for key in $keys; do
    if [[ "$key" == */ ]]; then
      # Đây là folder, đệ quy vào
      migrate_path "${path}${key}"
    else
      # Đây là secret, copy sang v2
      echo "Migrating: ${path}${key}"
      vault kv get -format=json "${SOURCE}/${path}${key}" | \
        jq '.data' | \
        vault kv put "${DEST}/${path}${key}" -
    fi
  done
}

# Bắt đầu migration từ root
migrate_path ""

echo "Migration complete!"
```

### 9.3. Check after migration

```bash
# So sánh số lượng keys
echo "KV v1 keys:"
vault kv list -format=json kv-v1/myapp/ | jq length

echo "KV v2 keys:"
vault kv list -format=json kv-v2/myapp/ | jq length

# Spot check một secret
echo "=== V1 ==="
vault kv get -format=json kv-v1/myapp/database | jq '.data'

echo "=== V2 ==="
vault kv get -format=json kv-v2/myapp/database | jq '.data.data'
```

## 10. API Reference — Important endpoints

### 10.1. KV v2 API endpoints

```bash
# Ghi secret
curl --header "X-Vault-Token: $VAULT_TOKEN" \
  --request POST \
  --data '{"data": {"username": "admin", "password": "secret"}}' \
  "$VAULT_ADDR/v1/kv-v2/data/myapp/database"

# Đọc secret
curl --header "X-Vault-Token: $VAULT_TOKEN" \
  "$VAULT_ADDR/v1/kv-v2/data/myapp/database"

# Đọc version cụ thể
curl --header "X-Vault-Token: $VAULT_TOKEN" \
  "$VAULT_ADDR/v1/kv-v2/data/myapp/database?version=2"

# Đọc metadata
curl --header "X-Vault-Token: $VAULT_TOKEN" \
  "$VAULT_ADDR/v1/kv-v2/metadata/myapp/database"

# Soft delete versions
curl --header "X-Vault-Token: $VAULT_TOKEN" \
  --request POST \
  --data '{"versions": [1, 2]}' \
  "$VAULT_ADDR/v1/kv-v2/delete/myapp/database"

# Undelete versions
curl --header "X-Vault-Token: $VAULT_TOKEN" \
  --request POST \
  --data '{"versions": [1, 2]}' \
  "$VAULT_ADDR/v1/kv-v2/undelete/myapp/database"

# Destroy versions
curl --header "X-Vault-Token: $VAULT_TOKEN" \
  --request POST \
  --data '{"versions": [1, 2]}' \
  "$VAULT_ADDR/v1/kv-v2/destroy/myapp/database"
```

## 11. Best Practices

### 11.1. Path structure

```
kv-v2/
├── shared/                    # Secrets dùng chung
│   ├── certificates/
│   └── api-keys/
├── teams/
│   ├── platform/
│   │   ├── production/
│   │   └── staging/
│   └── backend/
│       ├── production/
│       └── staging/
└── services/
    ├── payment-service/
    └── auth-service/
```

### 11.2. Policy cho KV v2

```hcl
# Policy cho team backend — chỉ đọc production secrets
path "kv-v2/data/teams/backend/production/*" {
  capabilities = ["read"]
}

# Full access cho staging
path "kv-v2/data/teams/backend/staging/*" {
  capabilities = ["create", "read", "update", "delete"]
}

path "kv-v2/metadata/teams/backend/staging/*" {
  capabilities = ["list", "read"]
}

# Không cho phép destroy trong production
path "kv-v2/destroy/teams/backend/production/*" {
  capabilities = ["deny"]
}
```

### 11.3. Deployment Checklist

- ✅ Always use KV v2 for new projects
- ✅ Appropriate `max_versions` configuration (5-10 is reasonable)
- ✅ Turn on CAS for critical secrets
- ✅ Use custom metadata to track ownership
- ✅ Set `delete_version_after` to automatically cleanup
- ✅ Organize paths by team/environment/service
- ✅ Restrict `destroy` capability trong production

## Summary

In this lesson, you have mastered:

1. **Difference between KV v1 vs v2** and when to use each type
2. Full **CRUD operations** with both CLI and API
3. **Versioning** — management, rollback, and version attribution
4. **Check-and-Set (CAS)** to avoid race conditions
5. **Soft delete, Undelete, Destroy** — different levels of deletion
6. **Patch operations** to update partial
7. **Custom metadata** to enrich information
8. **Migration v1 → v2** is safe

In the next article, we'll explore the **Database Secrets Engine** — where Vault really shines with its ability to automatically generate dynamic credentials.
