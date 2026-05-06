---
id: 019d8b30-b206-7001-c002-e0c5f8200106
title: 第 6 課：KV 秘密引擎 - 靜態秘密管理
slug: bai-6-kv-secrets-engine-static-secrets-management
description: >-
  KV v1 與 KV v2 比較、啟用/設定、CRUD 作業、版本控制、元資料、KV v2 版本歸屬 (1.21)、檢查與設定
  (CAS)、軟體刪除與銷毀、修補作業、從 v1 遷移到 v2。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 6
section_title: 第 2 部分：秘密引擎 - 管理秘密
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault 從基礎到高級
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="最大寬度：100%;高度：自動；邊框半徑：12px；邊距底部：1.5rem;">
  <定義>
    <線性漸變 id="bg-9078" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </線性漸層>
  </defs>

  <!-- 背景 -->
  <矩形寬度=“1200”高度=“340”rx=“12”填滿=“url（#bg-9078）”/>

  <!-- 裝飾品 -->
  <g>
    <circle cx="771" cy="123" r="14" fill="#34d399" opacity="0.08"/>
    <circle cx="942" cy="154" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="613" cy="185" r="20" fill="#34d399" opacity="0.14"/>
    <circle cx="784" cy="216" r="23" fill="#34d399" opacity="0.07"/>
    <circle cx="955" cy="247" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <圓cx =“750”cy =“108”r =“1.5”填入=“#34d399”不透明度=“0.15”/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <圓cx =“806”cy =“108”r =“1.5”填入=“#34d399”不透明度=“0.15”/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <圓cx =“862”cy =“108”r =“1.5”填入=“#34d399”不透明度=“0.15”/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <圓cx =“890”cy =“80”r =“1.5”填入=“#34d399”不透明度=“0.15”/>
    <圓cx =“890”cy =“108”r =“1.5”填入=“#34d399”不透明度=“0.15”/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1 =“600”y1 =“133”x2 =“1100”y2 =“213”筆觸=“＃34d399”筆畫寬度=“0.5”不透明度=“0.1”/>
    <line x1 =“650”y1 =“163”x2 =“1050”y2 =“233”筆畫=“＃34d399”筆畫寬度=“0.5”不透明度=“0.08”/>
    <多邊形點=“957.2487113059643,119 957.2487113059643,147 933,161 908.7512886940357,147 908.75128869. 933,105”填滿=“無”描邊=“#34d399”描邊寬度=“1”不透明度=“0.12”/>
  </g>

  <!-- 重音欄 -->
  <矩形x =“60”y =“50”寬度=“4”高度=“60”rx =“2”填滿=“#34d399”/><!-- 類別徽章 -->
  <矩形x =“80”y =“50”寬度=“121”高度=“28”rx =“14”填滿=“＃34d399”不透明度=“0.15”/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🔒 DevSecOps — 第 6 堂課</text>

  <!-- 標題 -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">第 6 課：KV 秘密引擎 - 靜態秘密</tspan>
      <tspan x="60" dy="42">管理</tspan>
  </文字>

  <!-- 系列字幕 -->
<text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault 從基礎到進階</text>

  <!-- 部分 -->
<text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：秘密引擎 - 管理機密</text>

  <!-- xDev 浮水印 -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## 介紹

KV（鍵值）秘密引擎是 HashiCorp Vault 中最受歡迎的秘密引擎，用於儲存和管理**靜態秘密** - 不會隨時間自動更改的秘密，例如 API 金鑰、資料庫密碼、設定值和憑證。

在本課中，我們將詳細學習 KV v1 和 KV v2 兩個版本，如何執行 CRUD 操作、版本控制、元資料管理以及許多其他進階功能。

## 1. KV v1 與 KV v2 — 詳細比較

### 1.1。差異概述

|特點| KV v1 | KV v2 |
|---|---|---|
|版本控制 | ❌ 不支援 | ✅ 全力支援 |
|軟體刪除| ❌ 永久刪除 | ✅ 軟體刪除+恢復刪除 |
|元資料 | ❌ 無 | ✅ 自訂元資料 |
|檢查並設定 (CAS) | ❌ 無 | ✅ 支援 |
|補丁操作| ❌ 無 | ✅ 支援（從 v1.10 開始）|
|效能| ✅ 更快（簡單）|稍微慢一些（由於版本控制）|
|儲存佔用空間| ✅ 更小 |更大（保存多個版本）|

### 1.2。何時使用 KV v1？

- 當您需要最大效能且無需版本控制時
- 當儲存是重要因素時
- 對於秘密的改變是非常罕見的

### 1.3。何時使用 KV v2？

- 大多數用例（建議預設）
- 當您需要透過版本歷史記錄進行審核追蹤時
- 當您需要回滾到舊版本的能力時
- 當您需要軟刪除以提高安全性時

## 2. 啟用並設定 KV 秘密引擎

### 2.1。啟用KV v1

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

### 2.2。啟用KV v2

```bash
# Enable KV v2 tại path kv-v2/
vault secrets enable -path=kv-v2 -version=2 kv

# Hoặc sử dụng API
curl --header "X-Vault-Token: $VAULT_TOKEN" \
  --request POST \
  --data '{"type": "kv", "options": {"version": "2"}}' \
  "$VAULT_ADDR/v1/sys/mounts/kv-v2"
```

> **注意：** 啟動 Vault 開發伺服器時，預設的 `secret/` 路徑已經是 KV v2。

### 2.3。配置KV v2

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

重要配置：

- **max_versions**：要保留的最大版本數（0 = 無限制）
- **cas_required**：所有寫入操作都需要檢查和設定
- **delete_version_after**：一定時間後自動刪除版本

## 3. CRUD 操作－基本操作

### 3.1。建立並記錄秘密（建立/更新）

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

#### 從文件中寫入秘密

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
```### 3.2。讀取秘密（讀）

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

### 3.3。列出秘密

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

### 3.4。刪除秘密（刪除）

```bash
# Soft delete version mới nhất (KV v2)
vault kv delete kv-v2/myapp/database

# Soft delete version cụ thể
vault kv delete -versions=1,2 kv-v2/myapp/database
```

## 4. 版本控制－版本管理

### 4.1。 Xem 版本歷史

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

### 4.2。回滾到舊版本

```bash
# Đọc version 1
vault kv get -format=json -version=1 kv-v2/myapp/database | \
  jq '.data.data' | \
  vault kv put kv-v2/myapp/database -

# Giờ version 4 sẽ có nội dung giống version 1
```

### 4.3。版本歸屬（Vault 1.21+）

從 Vault 1.21 開始，每個版本都會記錄有關**誰建立**該版本的資訊：

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

## 5. 檢查並設定 (CAS)

當多個客戶端寫入相同金鑰時，CAS 有助於防止**競爭條件**。

### 5.1。為整個掛載啟用 CAS

```bash
vault write kv-v2/config cas_required=true
```

### 5.2。錄製時使用CAS

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

### 5.3。 CAS 每鍵

```bash
# Đặt CAS required cho một key cụ thể
vault kv metadata put -cas-required=true kv-v2/myapp/critical-secret
```

## 6. 軟刪除、恢復刪除和銷毀

### 6.1。軟刪除

```bash
# Soft delete — dữ liệu vẫn tồn tại nhưng bị đánh dấu đã xóa
vault kv delete kv-v2/myapp/database

# Đọc sẽ thấy thông báo đã xóa
vault kv get kv-v2/myapp/database
# No value found at kv-v2/data/myapp/database

# Soft delete versions cụ thể
vault kv delete -versions=1,3 kv-v2/myapp/database
```

### 6.2。取消刪除 — 恢復

```bash
# Khôi phục version đã soft delete
vault kv undelete -versions=1 kv-v2/myapp/database

# Giờ có thể đọc lại version 1
vault kv get -version=1 kv-v2/myapp/database
```

### 6.3。銷毀 — 永久刪除

```bash
# Destroy version cụ thể — KHÔNG THỂ khôi phục
vault kv destroy -versions=1,2 kv-v2/myapp/database

# Xóa toàn bộ key và tất cả versions + metadata
vault kv metadata delete kv-v2/myapp/database
```

> **警告：** `destroy` 和 `metadata delete` 是無法撤銷的操作。在執行此操作之前，請確保您確實想要永久刪除它。

## 7. 補丁操作

從 Vault 1.10+ 開始，您可以更新**某些欄位**，而無需覆寫整個金鑰。

### 7.1。修補字段

```bash
# Secret hiện tại có: username, password, host, port
# Chỉ cập nhật password mà giữ nguyên các fields khác
vault kv patch kv-v2/myapp/database password="BrandNewP@ss!"

# Kiểm tra — các fields khác vẫn intact
vault kv get kv-v2/myapp/database
```

### 7.2。 CAS 補丁

```bash
# Patch với check-and-set
vault kv patch -cas=5 kv-v2/myapp/database password="AnotherP@ss!"
```

### 7.3。 API 補丁

```bash
curl --header "X-Vault-Token: $VAULT_TOKEN" \
  --header "Content-Type: application/merge-patch+json" \
  --request PATCH \
  --data '{"data": {"password": "APIUpdatedP@ss!"}}' \
  "$VAULT_ADDR/v1/kv-v2/data/myapp/database"
```

## 8. 自訂元數據

自訂元資料可讓您將附加資訊附加到機密，而不影響機密資料。

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

## 9. 遷移 KV v1 唱 KV v2

### 9.1。直接升級（就地）

```bash
# Kiểm tra version hiện tại
vault read sys/mounts/kv-v1

# Upgrade từ v1 sang v2
vault kv enable-versioning kv-v1/

# Xác nhận đã upgrade thành công
vault read sys/mounts/kv-v1
# options    map[version:2]
```

> **重要說明：** 升級過程是**單向** — 無法從 v2 降級到 v1。

### 9.2。遷移到新安裝

如果您想保留 v1 並在 v2 中複製：

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

### 9.3。遷移後檢查

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

## 10. API 參考 — 重要端點

### 10.1。 KV v2 API 端點

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

## 11. 最佳實踐

### 11.1。路徑結構

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

### 11.2。策略 cho KV v2

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

### 11.3。部署清單

- ✅ 新專案始終使用 KV v2
- ✅ 適當的 `max_versions` 配置（5-10 合理）
- ✅ 為關鍵機密開啟 CAS
- ✅ 使用自訂元資料來追蹤所有權
- ✅ 設定 `delete_version_after` 自動清理
- ✅ 按團隊/環境/服務組織路徑
- ✅ 限制 `destroy` 生產能力

## 總結

在本課中，您已經掌握了：

1. **KV v1 與 v2 之間的差異**以及何時使用每種類型
2. 使用 CLI 和 API 進行完整的 **CRUD 操作**
3. **版本控制** — 管理、回溯和版本歸屬
4. **檢查並設定 (CAS)** 以避免競爭條件
5. **軟刪除、取消刪除、銷毀** — 不同等級的刪除
6. **補丁操作**更新部分
7. **自訂元資料**以豐富資訊
8. **遷移 v1 → v2** 是安全的

在下一篇文章中，我們將探討 **資料庫機密引擎** - Vault 真正憑藉其自動生成動態憑證的能力而大放異彩。
