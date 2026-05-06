---
id: 019d8b30-b207-7001-c002-e0c5f8200107
title: 'Lesson 7: Database Secrets Engine - Dynamic Credentials'
slug: bai-7-database-secrets-engine-dynamic-credentials
description: Database Secrets Engine concept, connections cho PostgreSQL/MySQL/MongoDB/MSSQL, Dynamic roles, Static roles, Root credential rotation, TTL management, integration with apps.
duration_minutes: 200
is_free: true
video_url: null
sort_order: 7
section_title: 'Part 2: Secrets Engines - Managing Secrets'
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault from Basic to Advanced
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3704" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3704)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1038" cy="84" r="36" fill="#fbbf24" opacity="0.09"/>
    <circle cx="976" cy="102" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="914" cy="120" r="34" fill="#fbbf24" opacity="0.07"/>
    <circle cx="852" cy="138" r="18" fill="#fbbf24" opacity="0.11"/>
    <circle cx="790" cy="156" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="124" x2="1100" y2="204" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="154" x2="1050" y2="224" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1007.7749907475932,154.5 1007.7749907475932,193.5 974,213 940.2250092524068,193.5 940.2250092524068,154.5 974,135" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🔒 DevSecOps — Lesson 7</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">Lesson 7: Database Secrets Engine - Dynamic</tspan>
      <tspan x="60" dy="42">Credentials</tspan>
  </text>

  <!-- Series subtitle -->
<text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault from Basic to Advanced</text>

  <!-- Section -->
<text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Secrets Engines - Managing Secrets</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduce

Database Secrets Engine is one of the most powerful features of HashiCorp Vault, allowing the creation of **dynamic credentials** — usernames/passwords are automatically generated on demand and automatically revoked upon expiration (TTL).

Instead of sharing one database password across the entire team or all instances of the application, each request will receive a **unique credential** with a limited lifetime. This helps:

- **Reduced blast radius**: If the credential is exposed, it only lasts for a short time
- **Easy Audit**: Each credential is associated with a specific entity
- **Eliminate credential sprawl**: No more hard-coded or shared passwords

## 1. Database Secrets Engine Architecture

### 1.1. How it works

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

### 1.2. Main ingredients

- **Connection**: Configure the connection to the database server
- **Dynamic Role**: Template to create dynamic credentials
- **Static Role**: Manage rotation for a fixed user
- **Lease**: Manage credential lifetime

## 2. Enable Database Secrets Engine

```bash
# Enable tại path mặc định database/
vault secrets enable database

# Hoặc enable tại custom path
vault secrets enable -path=db database

# Xác nhận
vault secrets list
```

## 3. Configure PostgreSQL Connection

### 3.1. Create database and user for Vault

First, create a user for Vault on the PostgreSQL server:

```sql
-- Tạo user cho Vault với quyền tạo roles
CREATE ROLE vault_admin WITH LOGIN PASSWORD 'VaultAdminP@ss!' CREATEROLE;

-- Grant quyền cần thiết
GRANT CONNECT ON DATABASE myapp TO vault_admin;
GRANT USAGE ON SCHEMA public TO vault_admin;

-- Cho phép Vault tạo users trong database
GRANT CREATE ON DATABASE myapp TO vault_admin;
```

### 3.2. Configure connection trong Vault

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

> **Security:** Vault will never display the connection password again. After configuration, you should perform root credential rotation.

### 3.3. Root Credential Rotation

```bash
# Rotate password của vault_admin — Vault sẽ tạo password mới
# và KHÔNG BAO GIỜ hiển thị password mới
vault write -force database/rotate-root/myapp-postgres

# Sau bước này:
# - vault_admin có password mới (chỉ Vault biết)
# - Password cũ không còn hoạt động
# - Bạn không thể đăng nhập trực tiếp bằng vault_admin nữa
```

> **Warning:** After rotating root credentials, only Vault can use this account. Make sure you test thoroughly before rotating in production.

## 4. Dynamic Roles — Create Credentials Automatically

### 4.1. Create Read-Only Role

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

### 4.2. Create Read-Write Role

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

### 4.3. Create Admin Role (for DBA)

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

### 4.4. Request Dynamic Credentials

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

## 5. TTL and Lease Management

### 5.1. Renew Lease

```bash
# Gia hạn lease
vault lease renew database/creds/myapp-readonly/abcd1234-5678-efgh-ijkl-mnop90123456

# Gia hạn với thời gian cụ thể (không vượt quá max_ttl)
vault lease renew -increment=2h database/creds/myapp-readonly/abcd1234-5678-efgh-ijkl-mnop90123456
```

### 5.2. Revoke Lease

```bash
# Thu hồi một credential cụ thể
vault lease revoke database/creds/myapp-readonly/abcd1234-5678-efgh-ijkl-mnop90123456

# Thu hồi TẤT CẢ credentials của một role
vault lease revoke -prefix database/creds/myapp-readonly

# Thu hồi tất cả credentials của database engine
vault lease revoke -prefix database/creds
```

### 5.3. Check lease

```bash
# Xem thông tin lease
vault lease lookup database/creds/myapp-readonly/abcd1234-5678-efgh-ijkl-mnop90123456

# List tất cả leases đang active
vault list sys/leases/lookup/database/creds/myapp-readonly
```

## 6. Static Roles — Rotation for Fixed Users

Static roles are useful when you have a fixed user database and just want Vault to **automatically rotate passwords** on a schedule.

### 6.1. Create static user in PostgreSQL

```sql
-- Tạo application user cố định
CREATE ROLE myapp_service WITH LOGIN PASSWORD 'InitialP@ssw0rd!';
GRANT CONNECT ON DATABASE myapp TO myapp_service;
GRANT USAGE ON SCHEMA public TO myapp_service;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO myapp_service;
```

### 6.2. Configure Static Role

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

### 6.3. Manual Rotation

```bash
# Force rotate ngay lập tức (không đợi rotation_period)
vault write -force database/rotate-role/myapp-service
```

## 7. Configuration for MySQL/MariaDB

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

## 8. Configuration for MongoDB

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

## 9. Configuration for Microsoft SQL Server

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

## 10. Integration with Applications

### 10.1. Script automatically retrieves credentials

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

Use:

```bash
./get-db-creds.sh myapp-readwrite -- python app.py
```

### 10.2. Renewal sidecar pattern

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

### 10.3. Python Integration

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

## 11. Policies cho Database Secrets Engine

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

## 12. Monitoring and Troubleshooting

### 12.1. Check active leases

```bash
# Count active credentials cho một role
vault list -format=json sys/leases/lookup/database/creds/myapp-readonly | jq length

# Chi tiết lease
vault list sys/leases/lookup/database/creds/myapp-readonly
```

### 12.2. Check on PostgreSQL

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
DO $$
DECLARE
  r RECORD;
BEGIN
  FOR r IN SELECT rolname FROM pg_roles
    WHERE rolname LIKE 'v-%' AND rolvaliduntil < NOW()
  LOOP
    EXECUTE format('DROP ROLE IF EXISTS %I', r.rolname);
    RAISE NOTICE 'Dropped expired role: %', r.rolname;
  END LOOP;
END $$;
```

### 12.3. Common issues

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

## 13. Best Practices

### 13.1. TTL Guidelines

| Use case | Default TTL | Max TTL |
|---|---|---|
| CI/CD pipeline | 15m - 30m | 1h |
| Application (short-lived) | 1h | 8h |
| Application (long-running) | 4h | 24h |
| DBA / Admin access | 15m - 30m | 2h |
| Reporting / Analytics | 1h | 4h |

### 13.2. Security Checklist

- ✅ Luôn rotate root credentials sau khi cấu hình
- ✅ Use SSL/TLS for database connections
- ✅ Shortest possible TTL for use case
- ✅ Revocation statements must be cleanly cleaned up
- ✅ Monitor the number of active leases
- ✅ Least privilege trong creation statements
- ✅ Separate roles for each application/environment
- ✅ Test revocation statements carefully before deploying

## Summary

In this lesson, you learned:

1. **Architecture** Database Secrets Engine and how it generates dynamic credentials
2. **Configure connections** for PostgreSQL, MySQL, MongoDB, MSSQL
3. **Dynamic roles** with creation/revocation statements
4. **Static roles** for automatic password rotation
5. **TTL and lease management** — renew, revoke, tidy
6. **Integrate** with applications via CLI, scripts, and SDK
7. **Policies** access permissions
8. **Monitoring and troubleshooting** common problems

The next article will dive into the **PKI Secrets Engine** — how Vault functions as a complete Certificate Authority.
