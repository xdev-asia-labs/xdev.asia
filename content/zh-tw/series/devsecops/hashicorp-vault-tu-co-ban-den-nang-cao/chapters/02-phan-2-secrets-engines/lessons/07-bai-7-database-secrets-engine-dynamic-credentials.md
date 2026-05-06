---
id: 019d8b30-b207-7001-c002-e0c5f8200107
title: 第 7 課：資料庫機密引擎 - 動態憑證
slug: bai-7-database-secrets-engine-dynamic-credentials
description: 資料庫秘密引擎概念、PostgreSQL/MySQL/MongoDB/MSSQL 連線、動態角色、靜態角色、根憑證輪替、TTL 管理、與應用程式整合。
duration_minutes: 200
is_free: true
video_url: null
sort_order: 7
section_title: 第 2 部分：秘密引擎 - 管理秘密
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault 從基礎到高級
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="最大寬度：100%;高度：自動；邊框半徑：12px；邊距底部：1.5rem;">
  <定義>
    <線性漸變 id="bg-3704" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </線性漸層>
  </defs>

  <!-- 背景 -->
  <矩形寬度=“1200”高度=“340”rx=“12”填滿=“url（#bg-3704）”/>

  <!-- 裝飾品 -->
  <g>
    <circle cx="1038" cy="84" r="36" fill="#fbbf24" opacity="0.09"/>
    <circle cx="976" cy="102" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="914" cy="120" r="34" fill="#fbbf24" opacity="0.07"/>
    <circle cx="852" cy="138" r="18" fill="#fbbf24" opacity="0.11"/>
    <circle cx="790" cy="156" r="32" fill="#fbbf24" opacity="0.05"/>
    <圓cx =“750”cy =“80”r =“1.5”填入=“#fbbf24”不透明度=“0.15”/>
    <圓cx =“750”cy =“108”r =“1.5”填入=“#fbbf24”不透明度=“0.15”/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <圓cx =“778”cy =“80”r =“1.5”填入=“#fbbf24”不透明度=“0.15”/>
    <圓cx =“778”cy =“108”r =“1.5”填入=“#fbbf24”不透明度=“0.15”/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <圓cx =“806”cy =“80”r =“1.5”填入=“#fbbf24”不透明度=“0.15”/>
    <圓cx =“806”cy =“108”r =“1.5”填入=“#fbbf24”不透明度=“0.15”/>
    <圓cx =“806”cy =“136”r =“1.5”填入=“#fbbf24”不透明度=“0.15”/>
    <圓cx =“806”cy =“164”r =“1.5”填入=“#fbbf24”不透明度=“0.15”/>
    <圓cx =“834”cy =“80”r =“1.5”填入=“#fbbf24”不透明度=“0.15”/>
    <圓cx =“834”cy =“108”r =“1.5”填入=“#fbbf24”不透明度=“0.15”/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <圓cx =“862”cy =“80”r =“1.5”填入=“#fbbf24”不透明度=“0.15”/>
    <圓cx =“862”cy =“108”r =“1.5”填入=“#fbbf24”不透明度=“0.15”/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <圓cx =“890”cy =“80”r =“1.5”填滿=“#fbbf24”不透明度=“0.15”/>
    <圓cx =“890”cy =“108”r =“1.5”填入=“#fbbf24”不透明度=“0.15”/>
    <圓cx =“890”cy =“136”r =“1.5”填入=“#fbbf24”不透明度=“0.15”/>
    <圓cx =“890”cy =“164”r =“1.5”填入=“#fbbf24”不透明度=“0.15”/>
    <line x1 =“600”y1 =“124”x2 =“1100”y2 =“204”筆觸=“#fbbf24”筆畫寬度=“0.5”不透明度=“0.1”/>
    <line x1 =“650”y1 =“154”x2 =“1050”y2 =“224”筆畫=“#fbbf24”筆畫寬度=“0.5”不透明度=“0.08”/>
    <多邊形點=「1007.7749907475932,154.5 1007.7749907475932,193.5 974,213 940.2250092524068,19325940. 974,135" 填色 = "無" 筆畫 = "#fbbf24" 筆畫寬度 = "1" 不透明度 = = "0.12"/>
  </g>

  <!-- 重音欄 -->
  <矩形x =“60”y =“50”寬度=“4”高度=“60”rx =“2”填滿=“#fbbf24”/><!-- 類別徽章 -->
  <矩形x =“80”y =“50”寬度=“121”高度=“28”rx =“14”填滿=“#fbbf24”不透明度=“0.15”/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🔒 DevSecOps — 第 7 課</text>

  <!-- 標題 -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">第 7 課：資料庫機密引擎 - 動態</tspan>
      <tspan x="60" dy="42">憑證</tspan>
  </文字>

  <!-- 系列字幕 -->
<text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault 從基礎到進階</text>

  <!-- 部分 -->
<text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：秘密引擎 - 管理機密</text>

  <!-- xDev 浮水印 -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## 介紹

資料庫秘密引擎是 HashiCorp Vault 最強大的功能之一，允許創建**動態憑證** — 使用者名稱/密碼根據需要自動生成，並在到期 (TTL) 時自動撤銷。

每個請求都將收到一個具有有限生命週期的**唯一憑證**，而不是在整個團隊或應用程式的所有實例中共用一個資料庫密碼。這有助於：

- **減少爆炸半徑**：如果憑證暴露，它只會持續很短的時間
- **輕鬆審核**：每個憑證都與特定實體相關聯
- **消除憑證蔓延**：不再有硬編碼或共享密碼

## 1. 資料庫機密引擎架構

### 1.1。它是如何運作的

```
┌──────────────┐    1. Request creds     ┌───────────┐
│  Application │ ─────────────────────── │   Vault   │
│              │ ◄────────────────────── │           │
│              │    2. Dynamic creds     │           │
└──────────────┘                         │           │
                                         │           │
                                         │           │  3. CREATE USER
                                         │           │ ───────────────▶ ┌──────────┐
                                         │           │                  │ Database │
                                         │           │  5. DROP USER    │          │
                                         │           │ ───────────────▶ │          │
                                         └───────────┘  (after TTL)    └──────────┘
                                              │
                                              │ 4. Lease tracking
                                              ▼
                                         [Lease Store]
```

### 1.2。主要成分

- **連接**：配置與資料庫伺服器的連接
- **動態角色**：建立動態憑證的模板
- **靜態角色**：管理固定使用者的輪換
- **租賃**：管理憑證生命週期

## 2. 啟用資料庫機密引擎

```bash
# Enable tại path mặc định database/
vault secrets enable database

# Hoặc enable tại custom path
vault secrets enable -path=db database

# Xác nhận
vault secrets list
```

## 3. 設定 PostgreSQL 連接

### 3.1。為 Vault 建立資料庫和用戶

首先，在 PostgreSQL 伺服器上為 Vault 建立一個使用者：

```sql
-- Tạo user cho Vault với quyền tạo roles
CREATE ROLE vault_admin WITH LOGIN PASSWORD 'VaultAdminP@ss!' CREATEROLE;

-- Grant quyền cần thiết
GRANT CONNECT ON DATABASE myapp TO vault_admin;
GRANT USAGE ON SCHEMA public TO vault_admin;

-- Cho phép Vault tạo users trong database
GRANT CREATE ON DATABASE myapp TO vault_admin;
```

### 3.2。配置 Vault 的連接

```bash
# Cấu hình connection đến PostgreSQL
vault write database/config/myapp-postgres \
  plugin_name=postgresql-database-plugin \
  allowed_roles="myapp-readonly,myapp-readwrite,myapp-admin" \
  connection_url="postgresql://{{username}}:{{password}}@db-primary.internal:5432/myapp?sslmode=require" \
  username="vault_admin" \
  password="VaultAdminP@ss!" \
  password_authentication="scram-sha-256"

# Kiểm tra connection
vault read database/config/myapp-postgres

# Output:
# Key                                   Value
# ---                                   -----
# allowed_roles                         [myapp-readonly myapp-readwrite myapp-admin]
# connection_details                    map[connection_url:postgresql://{{username}}:{{password}}@db-primary.internal:5432/myapp?sslmode=require username:vault_admin]
# password_authentication               scram-sha-256
# plugin_name                           postgresql-database-plugin
# root_credentials_rotate_statements    []
```

> **安全性：** Vault 將永遠不會再次顯示連線密碼。配置完成後，您應該執行根憑證輪替。

### 3.3。根憑證輪換

```bash
# Rotate password của vault_admin — Vault sẽ tạo password mới
# và KHÔNG BAO GIỜ hiển thị password mới
vault write -force database/rotate-root/myapp-postgres

# Sau bước này:
# - vault_admin có password mới (chỉ Vault biết)
# - Password cũ không còn hoạt động
# - Bạn không thể đăng nhập trực tiếp bằng vault_admin nữa
```

> **警告：** 輪換根憑證後，只有 Vault 可以使用此帳戶。確保在投入生產之前進行徹底測試。

## 4. 動態角色 — 自動建立憑證

### 4.1。建立唯讀角色

```bash
vault write database/roles/myapp-readonly \
  db_name=myapp-postgres \
  creation_statements="
    CREATE ROLE \"{{name}}\" WITH LOGIN PASSWORD '{{password}}' VALID UNTIL '{{expiration}}';
    GRANT CONNECT ON DATABASE myapp TO \"{{name}}\";
    GRANT USAGE ON SCHEMA public TO \"{{name}}\";
    GRANT SELECT ON ALL TABLES IN SCHEMA public TO \"{{name}}\";
    ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO \"{{name}}\";
  " \
  revocation_statements="
    REVOKE ALL PRIVILEGES ON ALL TABLES IN SCHEMA public FROM \"{{name}}\";
    REVOKE ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public FROM \"{{name}}\";
    REVOKE USAGE ON SCHEMA public FROM \"{{name}}\";
    REVOKE CONNECT ON DATABASE myapp FROM \"{{name}}\";
    DROP ROLE IF EXISTS \"{{name}}\";
  " \
  default_ttl="1h" \
  max_ttl="24h"
```

### 4.2。建立讀寫角色

```bash
vault write database/roles/myapp-readwrite \
  db_name=myapp-postgres \
  creation_statements="
    CREATE ROLE \"{{name}}\" WITH LOGIN PASSWORD '{{password}}' VALID UNTIL '{{expiration}}';
    GRANT CONNECT ON DATABASE myapp TO \"{{name}}\";
    GRANT USAGE ON SCHEMA public TO \"{{name}}\";
    GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO \"{{name}}\";
    GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO \"{{name}}\";
    ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO \"{{name}}\";
    ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT USAGE, SELECT ON SEQUENCES TO \"{{name}}\";
  " \
  revocation_statements="
    REVOKE ALL PRIVILEGES ON ALL TABLES IN SCHEMA public FROM \"{{name}}\";
    REVOKE ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public FROM \"{{name}}\";
    REVOKE USAGE ON SCHEMA public FROM \"{{name}}\";
    REVOKE CONNECT ON DATABASE myapp FROM \"{{name}}\";
    DROP ROLE IF EXISTS \"{{name}}\";
  " \
  default_ttl="1h" \
  max_ttl="8h"
```

### 4.3。建立管理員角色（針對 DBA）

```bash
vault write database/roles/myapp-admin \
  db_name=myapp-postgres \
  creation_statements="
    CREATE ROLE \"{{name}}\" WITH LOGIN PASSWORD '{{password}}' VALID UNTIL '{{expiration}}' CREATEROLE;
    GRANT ALL PRIVILEGES ON DATABASE myapp TO \"{{name}}\";
    GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO \"{{name}}\";
    GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO \"{{name}}\";
    ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO \"{{name}}\";
  " \
  revocation_statements="
    REASSIGN OWNED BY \"{{name}}\" TO vault_admin;
    DROP OWNED BY \"{{name}}\";
    DROP ROLE IF EXISTS \"{{name}}\";
  " \
  default_ttl="30m" \
  max_ttl="2h"
```

### 4.4。請求動態憑證

```bash
# Yêu cầu credentials cho readonly role
vault read database/creds/myapp-readonly

# Output:
# Key                Value
# ---                -----
# lease_id           database/creds/myapp-readonly/abcd1234-5678-efgh-ijkl-mnop90123456
# lease_duration     1h
# lease_renewable    true
# password           A1b-2C3d4E5f6G7h
# username           v-token-myapp-re-abcdef1234567890-1705312200

# Test connection với credentials mới
PGPASSWORD="A1b-2C3d4E5f6G7h" psql -h db-primary.internal \
  -U "v-token-myapp-re-abcdef1234567890-1705312200" \
  -d myapp -c "SELECT current_user, now();"

# Request credentials cho readwrite role
vault read database/creds/myapp-readwrite

# Request credentials dạng JSON (cho scripting)
vault read -format=json database/creds/myapp-readonly | \
  jq '{username: .data.username, password: .data.password, lease_id: .lease_id}'
```

## 5. TTL 和租約管理

### 5.1。續租

```bash
# Gia hạn lease
vault lease renew database/creds/myapp-readonly/abcd1234-5678-efgh-ijkl-mnop90123456

# Gia hạn với thời gian cụ thể (không vượt quá max_ttl)
vault lease renew -increment=2h database/creds/myapp-readonly/abcd1234-5678-efgh-ijkl-mnop90123456
```

### 5.2。撤銷租約

```bash
# Thu hồi một credential cụ thể
vault lease revoke database/creds/myapp-readonly/abcd1234-5678-efgh-ijkl-mnop90123456

# Thu hồi TẤT CẢ credentials của một role
vault lease revoke -prefix database/creds/myapp-readonly

# Thu hồi tất cả credentials của database engine
vault lease revoke -prefix database/creds
```

### 5.3。檢查租約

```bash
# Xem thông tin lease
vault lease lookup database/creds/myapp-readonly/abcd1234-5678-efgh-ijkl-mnop90123456

# List tất cả leases đang active
vault list sys/leases/lookup/database/creds/myapp-readonly
```

## 6. 靜態角色－固定使用者的輪換當您擁有固定的使用者資料庫並且只希望 Vault 按計劃**自動輪換密碼**時，靜態角色非常有用。

### 6.1。在 PostgreSQL 中建立靜態用戶

```sql
-- Tạo application user cố định
CREATE ROLE myapp_service WITH LOGIN PASSWORD 'InitialP@ssw0rd!';
GRANT CONNECT ON DATABASE myapp TO myapp_service;
GRANT USAGE ON SCHEMA public TO myapp_service;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO myapp_service;
```

### 6.2。配置靜態角色

```bash
vault write database/static-roles/myapp-service \
  db_name=myapp-postgres \
  rotation_statements="
    ALTER ROLE \"{{name}}\" WITH PASSWORD '{{password}}';
  " \
  username="myapp_service" \
  rotation_period="86400"

# rotation_period: 86400 giây = 24 giờ

# Đọc current credentials
vault read database/static-creds/myapp-service

# Output:
# Key                    Value
# ---                    -----
# last_vault_rotation    2024-01-15T12:00:00.123456Z
# password               NewAutoRotatedP@ss123!
# rotation_period        24h
# ttl                    23h55m30s
# username               myapp_service
```

### 6.3。手動旋轉

```bash
# Force rotate ngay lập tức (không đợi rotation_period)
vault write -force database/rotate-role/myapp-service
```

## 7. MySQL/MariaDB 配置

```bash
# Configure MySQL connection
vault write database/config/myapp-mysql \
  plugin_name=mysql-database-plugin \
  allowed_roles="mysql-readonly,mysql-readwrite" \
  connection_url="{{username}}:{{password}}@tcp(mysql.internal:3306)/myapp" \
  username="vault_admin" \
  password="VaultMySQLP@ss!"

# Tạo MySQL dynamic role
vault write database/roles/mysql-readonly \
  db_name=myapp-mysql \
  creation_statements="
    CREATE USER '{{name}}'@'%' IDENTIFIED BY '{{password}}';
    GRANT SELECT ON myapp.* TO '{{name}}'@'%';
  " \
  revocation_statements="
    DROP USER IF EXISTS '{{name}}'@'%';
  " \
  default_ttl="1h" \
  max_ttl="24h"

# Request MySQL credentials
vault read database/creds/mysql-readonly
```

## 8. MongoDB 配置

```bash
# Configure MongoDB connection
vault write database/config/myapp-mongodb \
  plugin_name=mongodb-database-plugin \
  allowed_roles="mongo-readonly,mongo-readwrite" \
  connection_url="mongodb://{{username}}:{{password}}@mongo.internal:27017/admin?tls=true" \
  username="vault_admin" \
  password="VaultMongoP@ss!"

# Tạo MongoDB dynamic role
vault write database/roles/mongo-readonly \
  db_name=myapp-mongodb \
  creation_statements='{"db": "myapp", "roles": [{"role": "read"}]}' \
  revocation_statements='{"db": "myapp"}' \
  default_ttl="1h" \
  max_ttl="24h"

# Request MongoDB credentials
vault read database/creds/mongo-readonly
```

## 9. Microsoft SQL Server 的配置

```bash
# Configure MSSQL connection
vault write database/config/myapp-mssql \
  plugin_name=mssql-database-plugin \
  allowed_roles="mssql-readonly" \
  connection_url="sqlserver://{{username}}:{{password}}@mssql.internal:1433/myapp" \
  username="vault_admin" \
  password="VaultMSSQLP@ss!"

# Tạo MSSQL dynamic role
vault write database/roles/mssql-readonly \
  db_name=myapp-mssql \
  creation_statements="
    CREATE LOGIN [{{name}}] WITH PASSWORD = '{{password}}';
    USE myapp;
    CREATE USER [{{name}}] FOR LOGIN [{{name}}];
    GRANT SELECT TO [{{name}}];
  " \
  revocation_statements="
    USE myapp;
    IF EXISTS (SELECT 1 FROM sys.database_principals WHERE name = '{{name}}')
    BEGIN
      DROP USER [{{name}}];
    END;
    IF EXISTS (SELECT 1 FROM sys.server_principals WHERE name = '{{name}}')
    BEGIN
      DROP LOGIN [{{name}}];
    END;
  " \
  default_ttl="1h" \
  max_ttl="24h"
```

## 10. 與應用程式集成

### 10.1。腳本自動檢索憑證

```bash
#!/bin/bash
# get-db-creds.sh — Script lấy dynamic credentials

set -euo pipefail

ROLE="${1:-myapp-readonly}"

# Lấy credentials từ Vault
CREDS=$(vault read -format=json "database/creds/${ROLE}")

# Parse credentials
DB_USER=$(echo "$CREDS" | jq -r '.data.username')
DB_PASS=$(echo "$CREDS" | jq -r '.data.password')
LEASE_ID=$(echo "$CREDS" | jq -r '.lease_id')
LEASE_TTL=$(echo "$CREDS" | jq -r '.lease_duration')

echo "Username: $DB_USER"
echo "Lease ID: $LEASE_ID"
echo "TTL: ${LEASE_TTL}s"

# Export cho application sử dụng
export DATABASE_URL="postgresql://${DB_USER}:${DB_PASS}@db-primary.internal:5432/myapp?sslmode=require"

# Cleanup function — revoke khi exit
cleanup() {
  echo "Revoking lease: $LEASE_ID"
  vault lease revoke "$LEASE_ID" 2>/dev/null || true
}
trap cleanup EXIT

# Chạy application
exec "$@"
```

用途：

```bash
./get-db-creds.sh myapp-readwrite -- python app.py
```

### 10.2。更新邊車模式

```bash
#!/bin/bash
# lease-renewer.sh — Background process để renew leases

LEASE_ID="$1"
RENEW_INTERVAL=1800  # Renew mỗi 30 phút

while true; do
  sleep "$RENEW_INTERVAL"
  
  echo "[$(date)] Renewing lease: $LEASE_ID"
  if vault lease renew "$LEASE_ID" > /dev/null 2>&1; then
    echo "[$(date)] Lease renewed successfully"
  else
    echo "[$(date)] ERROR: Failed to renew lease — credential may have expired"
    # Gửi alert
    break
  fi
done
```

### 10.3。 Python集成

```python
import hvac
import psycopg2
import os

# Kết nối đến Vault
client = hvac.Client(
    url=os.environ['VAULT_ADDR'],
    token=os.environ['VAULT_TOKEN']
)

# Lấy dynamic credentials
creds = client.secrets.database.generate_credentials(
    name='myapp-readonly',
    mount_point='database'
)

username = creds['data']['username']
password = creds['data']['password']
lease_id = creds['lease_id']

print(f"Got credentials: {username} (lease: {lease_id})")

# Kết nối database
conn = psycopg2.connect(
    host='db-primary.internal',
    port=5432,
    database='myapp',
    user=username,
    password=password,
    sslmode='require'
)

try:
    cursor = conn.cursor()
    cursor.execute("SELECT version();")
    print(f"Connected: {cursor.fetchone()[0]}")
finally:
    conn.close()
    # Revoke lease khi không cần nữa
    client.sys.revoke_lease(lease_id)
```

## 11. 資料庫機密引擎的策略

```hcl
# Policy cho application: chỉ đọc readonly credentials
path "database/creds/myapp-readonly" {
  capabilities = ["read"]
}

# Policy cho CI/CD: đọc readwrite credentials
path "database/creds/myapp-readwrite" {
  capabilities = ["read"]
}

# Policy cho DBA: full access
path "database/creds/myapp-admin" {
  capabilities = ["read"]
}

path "database/config/*" {
  capabilities = ["create", "read", "update", "delete"]
}

path "database/roles/*" {
  capabilities = ["create", "read", "update", "delete", "list"]
}

path "database/rotate-root/*" {
  capabilities = ["update"]
}

# Renew và revoke leases
path "sys/leases/renew" {
  capabilities = ["update"]
}

path "sys/leases/revoke" {
  capabilities = ["update"]
}
```

## 12. 監控與故障排除

### 12.1。檢查有效租約

```bash
# Count active credentials cho một role
vault list -format=json sys/leases/lookup/database/creds/myapp-readonly | jq length

# Chi tiết lease
vault list sys/leases/lookup/database/creds/myapp-readonly
```

### 12.2。檢查 PostgreSQL

```sql
-- Xem tất cả Vault-created roles
SELECT rolname, rolvaliduntil, rolcanlogin
FROM pg_roles
WHERE rolname LIKE 'v-%'
ORDER BY rolvaliduntil;

-- Xem active connections từ Vault users
SELECT usename, client_addr, state, query_start
FROM pg_stat_activity
WHERE usename LIKE 'v-%';

-- Cleanup expired roles (nếu cần)
DO $
DECLARE
  r RECORD;
BEGIN
  FOR r IN SELECT rolname FROM pg_roles
    WHERE rolname LIKE 'v-%' AND rolvaliduntil < NOW()
  LOOP
    EXECUTE format('DROP ROLE IF EXISTS %I', r.rolname);
    RAISE NOTICE 'Dropped expired role: %', r.rolname;
  END LOOP;
END $;
```

### 12.3。常見問題

```bash
# Error: "error creating database object: error verifying connection"
# → Kiểm tra connection string, network, SSL settings

# Error: "pq: permission denied for database"
# → vault_admin cần CREATEROLE và CREATE trên database

# Error: "lease not found"
# → Credential đã hết hạn hoặc bị revoke
# → Application cần request credentials mới

# Quá nhiều orphaned roles trên PostgreSQL
# → Tăng tần suất Vault tidy operations
vault write -force sys/leases/tidy
```

## 13. 最佳實踐

### 13.1。 TTL 指南

|使用案例 |預設 TTL |最大 TTL |
|---|---|---|
| CI/CD 管道 | 15m - 30m | 1小時|
|應用程式（短暫）| 1小時| 8小時|
|應用程式（長時間運行）| 4小時| 24小時 |
| DBA / 管理員存取權限 | 15m - 30m | 2小時|
|報告/分析| 1小時| 4小時|

### 13.2。安全檢查表

- ✅ Luôn 輪換根憑證 sau khi cấu hình
- ✅ 使用 SSL/TLS 進行資料庫連接
- ✅ 用例的盡可能短的 TTL
- ✅ 撤銷聲明必須清理乾淨
- ✅ 監控有效租約的數量
- ✅ 建立語句中的最小權限
- ✅ 每個應用程式/環境的單獨角色
- ✅ 在部署之前仔細測試撤銷語句

## 總結

在本課中，您學習了：

1. **架構** 資料庫機密引擎及其如何產生動態憑證
2. **為 PostgreSQL、MySQL、MongoDB、MSSQL 設定連接**
3. **有建立/撤銷語句的動態角色**
4. **靜態角色**用於自動密碼輪換
5. **TTL 與租賃管理** — 續約、撤銷、整理
6. **透過 CLI、腳本和 SDK 與應用程式整合**
7. **策略**存取權限
8. **監控與故障排除**常見問題

下一篇文章將深入探討 **PKI 秘密引擎** — Vault 如何作為完整的憑證授權單位發揮作用。
