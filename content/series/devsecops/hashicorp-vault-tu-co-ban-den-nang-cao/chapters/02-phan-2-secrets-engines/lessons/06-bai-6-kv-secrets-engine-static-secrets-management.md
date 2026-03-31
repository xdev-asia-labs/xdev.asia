---
id: 019d8b30-b206-7001-c002-e0c5f8200106
title: 'Bài 6: KV Secrets Engine - Static Secrets Management'
slug: bai-6-kv-secrets-engine-static-secrets-management
description: >-
  KV v1 vs KV v2 comparison, enable/configure, CRUD operations, versioning, metadata, KV v2 version attribution (1.21), check-and-set (CAS), soft delete vs destroy, patch operations, migration v1 to v2.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 6
section_title: "Phần 2: Secrets Engines - Quản lý Bí mật"
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault từ Cơ bản đến Nâng cao
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
---

## Giới thiệu

KV (Key-Value) Secrets Engine là secrets engine phổ biến nhất trong HashiCorp Vault, được sử dụng để lưu trữ và quản lý **static secrets** — những bí mật không thay đổi tự động theo thời gian như API keys, database passwords, configuration values, và certificates.

Trong bài học này, chúng ta sẽ tìm hiểu chi tiết về hai phiên bản KV v1 và KV v2, cách thực hiện các thao tác CRUD, versioning, metadata management, và nhiều tính năng nâng cao khác.

## 1. KV v1 vs KV v2 — So sánh chi tiết

### 1.1. Tổng quan sự khác biệt

| Tính năng | KV v1 | KV v2 |
|---|---|---|
| Versioning | ❌ Không hỗ trợ | ✅ Hỗ trợ đầy đủ |
| Soft delete | ❌ Xóa vĩnh viễn | ✅ Soft delete + Undelete |
| Metadata | ❌ Không có | ✅ Custom metadata |
| Check-and-Set (CAS) | ❌ Không có | ✅ Hỗ trợ |
| Patch operations | ❌ Không có | ✅ Hỗ trợ (từ v1.10) |
| Performance | ✅ Nhanh hơn (đơn giản) | Chậm hơn một chút (do versioning) |
| Storage footprint | ✅ Nhỏ hơn | Lớn hơn (lưu nhiều versions) |

### 1.2. Khi nào sử dụng KV v1?

- Khi bạn cần hiệu suất tối đa và không cần versioning
- Khi storage là yếu tố quan trọng
- Cho các secrets thay đổi rất hiếm

### 1.3. Khi nào sử dụng KV v2?

- Hầu hết các use case (khuyến nghị mặc định)
- Khi cần audit trail qua version history
- Khi cần khả năng rollback về version cũ
- Khi cần soft delete để an toàn hơn

## 2. Enable và Configure KV Secrets Engine

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

> **Lưu ý:** Khi khởi động Vault dev server, path `secret/` mặc định đã là KV v2.

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

Các cấu hình quan trọng:

- **max_versions**: Số version tối đa được giữ lại (0 = không giới hạn)
- **cas_required**: Bắt buộc Check-and-Set cho mọi thao tác ghi
- **delete_version_after**: Tự động xóa version sau khoảng thời gian nhất định

## 3. CRUD Operations — Thao tác cơ bản

### 3.1. Tạo và ghi secret (Create/Update)

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

#### Ghi secret từ file

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

### 3.2. Đọc secret (Read)

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

### 3.4. Xóa secret (Delete)

```bash
# Soft delete version mới nhất (KV v2)
vault kv delete kv-v2/myapp/database

# Soft delete version cụ thể
vault kv delete -versions=1,2 kv-v2/myapp/database
```

## 4. Versioning — Quản lý phiên bản

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

### 4.2. Rollback về version cũ

```bash
# Đọc version 1
vault kv get -format=json -version=1 kv-v2/myapp/database | \
  jq '.data.data' | \
  vault kv put kv-v2/myapp/database -

# Giờ version 4 sẽ có nội dung giống version 1
```

### 4.3. Version Attribution (Vault 1.21+)

Từ Vault 1.21, mỗi version sẽ ghi nhận thông tin về **ai đã tạo** version đó:

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

CAS giúp ngăn chặn **race condition** khi nhiều client cùng ghi vào một secret.

### 5.1. Bật CAS cho toàn bộ mount

```bash
vault write kv-v2/config cas_required=true
```

### 5.2. Sử dụng CAS khi ghi

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

## 6. Soft Delete, Undelete và Destroy

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

### 6.2. Undelete — Khôi phục

```bash
# Khôi phục version đã soft delete
vault kv undelete -versions=1 kv-v2/myapp/database

# Giờ có thể đọc lại version 1
vault kv get -version=1 kv-v2/myapp/database
```

### 6.3. Destroy — Xóa vĩnh viễn

```bash
# Destroy version cụ thể — KHÔNG THỂ khôi phục
vault kv destroy -versions=1,2 kv-v2/myapp/database

# Xóa toàn bộ key và tất cả versions + metadata
vault kv metadata delete kv-v2/myapp/database
```

> **Cảnh báo:** `destroy` và `metadata delete` là hành động không thể hoàn tác. Hãy đảm bảo bạn thực sự muốn xóa vĩnh viễn trước khi thực hiện.

## 7. Patch Operations

Từ Vault 1.10+, bạn có thể cập nhật **một số fields** mà không cần ghi đè toàn bộ secret.

### 7.1. Patch một field

```bash
# Secret hiện tại có: username, password, host, port
# Chỉ cập nhật password mà giữ nguyên các fields khác
vault kv patch kv-v2/myapp/database password="BrandNewP@ss!"

# Kiểm tra — các fields khác vẫn intact
vault kv get kv-v2/myapp/database
```

### 7.2. Patch với CAS

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

Custom metadata cho phép bạn gắn thông tin bổ sung vào secret mà không ảnh hưởng đến dữ liệu secret.

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

### 9.1. Upgrade trực tiếp (In-place)

```bash
# Kiểm tra version hiện tại
vault read sys/mounts/kv-v1

# Upgrade từ v1 sang v2
vault kv enable-versioning kv-v1/

# Xác nhận đã upgrade thành công
vault read sys/mounts/kv-v1
# options    map[version:2]
```

> **Lưu ý quan trọng:** Quá trình upgrade là **một chiều** — không thể downgrade từ v2 về v1.

### 9.2. Migration sang mount mới

Nếu bạn muốn giữ nguyên v1 và tạo bản copy ở v2:

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

### 9.3. Kiểm tra sau migration

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

## 10. API Reference — Các endpoint quan trọng

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

### 11.1. Cấu trúc path

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

### 11.3. Checklist triển khai

- ✅ Luôn sử dụng KV v2 cho projects mới
- ✅ Cấu hình `max_versions` phù hợp (5-10 là hợp lý)
- ✅ Bật CAS cho critical secrets
- ✅ Sử dụng custom metadata để tracking ownership
- ✅ Thiết lập `delete_version_after` để tự động cleanup
- ✅ Tổ chức path theo team/environment/service
- ✅ Restrict `destroy` capability trong production

## Tổng kết

Trong bài học này, bạn đã nắm vững:

1. **Sự khác biệt KV v1 vs v2** và khi nào nên dùng mỗi loại
2. **CRUD operations** đầy đủ với cả CLI và API
3. **Versioning** — quản lý, rollback, và version attribution
4. **Check-and-Set (CAS)** để tránh race conditions
5. **Soft delete, Undelete, Destroy** — các cấp độ xóa khác nhau
6. **Patch operations** để cập nhật partial
7. **Custom metadata** để enrichment thông tin
8. **Migration v1 → v2** an toàn

Ở bài tiếp theo, chúng ta sẽ khám phá **Database Secrets Engine** — nơi Vault thực sự tỏa sáng với khả năng tạo dynamic credentials tự động.
