---
id: 019d8b30-b206-7001-c002-e0c5f8200106
title: 'レッスン 6: KV シークレット エンジン - 静的シークレット管理'
slug: bai-6-kv-secrets-engine-static-secrets-management
description: >-
  KV v1 と KV v2 の比較、有効化/構成、CRUD 操作、バージョン管理、メタデータ、KV v2 バージョン属性 (1.21)、チェックアンドセット
  (CAS)、論理的な削除と破棄、パッチ操作、v1 から v2 への移行。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 6
section_title: 'パート 2: Secrets Engine - シークレットの管理'
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault の基本から上級まで
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="最大幅: 100%;高さ: 自動;境界半径: 12px;マージン-ボトム: 1.5rem;">
  <定義>
    <linearGradient id="bg-9078" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- 背景 -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9078)"/>

  <!-- 装飾 -->
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
    <line x1="600" y1="133" x2="1100" y2="213" ストローク="#34d399" ストローク幅="0.5" 不透明度="0.1"/>
    <line x1="650" y1="163" x2="1050" y2="233" ストローク="#34d399" ストローク幅="0.5" 不透明度="0.08"/>
    <ポリゴン ポイント="957.2487113059643,119 957.2487113059643,147 933,161 908.7512886940357,147 908.7512886940357,119 933,105" fill="none"ストローク="#34d399" ストローク幅="1" 不透明度="0.12"/>
  </g>

  <!-- アクセントバー -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/><!-- カテゴリバッジ -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🔒 DevSecOps — レッスン 6</text>

  <!-- タイトル -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">レッスン 6: KV シークレット エンジン - 静的シークレット</tspan>
      <tspan x="60" dy="42">管理</tspan>
  </テキスト>

  <!-- シリーズのサブタイトル -->
<text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">基本から上級までの HashiCorp Vault </text>

  <!-- セクション -->
<text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: シークレット エンジン - シークレットの管理</text>

  <!-- xDev ウォーターマーク -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## 紹介します

KV (Key-Value) Secrets Engine は HashiCorp Vault で最も人気のあるシークレット エンジンであり、**静的シークレット** (API キー、データベース パスワード、構成値、証明書など、時間の経過とともに自動的に変更されないシークレット) を保存および管理するために使用されます。

このレッスンでは、KV v1 と KV v2 の 2 つのバージョン、CRUD 操作、バージョン管理、メタデータ管理、およびその他の多くの高度な機能を実行する方法について詳しく学びます。

## 1. KV v1 と KV v2 — 詳細な比較

＃＃＃１．１．違いの概要

|特長 | KV v1 | KV v2 |
|---|---|---|
|バージョン管理 | ❌ サポートされていません | ✅ フルサポート |
|論理的な削除 | ❌ 完全に削除されました | ✅ 論理的な削除 + 削除の取り消し |
|メタデータ | ❌ なし | ✅ カスタムメタデータ |
|チェックアンドセット (CAS) | ❌ なし | ✅ サポート |
|パッチ操作 | ❌ なし | ✅ サポート (v1.10 以降) |
|パフォーマンス | ✅ より高速 (シンプル) |わずかに遅い (バージョン管理のため) |
|ストレージの設置面積 | ✅ 小さい |大きい (複数のバージョンを保存) |

＃＃＃１．２． KV v1 をいつ使用するか?

- 最大のパフォーマンスが必要で、バージョン管理が必要ない場合
- 保管が重要な要素の場合
- シークレットの場合、変更は非常にまれです

＃＃＃１．３． KV v2 をいつ使用するか?

- ほとんどの使用例 (デフォルトを推奨)
- バージョン履歴の監査証跡が必要な場合
- 古いバージョンにロールバックする機能が必要な場合
- 安全性を高めるために論理的な削除が必要な場合

## 2. KV シークレット エンジンを有効にして構成する

＃＃＃２．１． KV v1 を有効にする

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

＃＃＃２．２． KV v2 を有効にする

```bash
# Enable KV v2 tại path kv-v2/
vault secrets enable -path=kv-v2 -version=2 kv

# Hoặc sử dụng API
curl --header "X-Vault-Token: $VAULT_TOKEN" \
  --request POST \
  --data '{"type": "kv", "options": {"version": "2"}}' \
  "$VAULT_ADDR/v1/sys/mounts/kv-v2"
```

> **注意:** Vault dev サーバーを起動すると、デフォルトの `secret/` パスはすでに KV v2 になっています。

＃＃＃２．３． KV v2 の構成

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

重要な構成:

- **max_versions**: 保持するバージョンの最大数 (0 = 無制限)
- **cas_required**: すべての書き込み操作にチェックアンドセットが必要です
- **delete_version_after**: 一定期間後にバージョンを自動的に削除します

## 3. CRUD 操作 — 基本操作

＃＃＃３．１．シークレットの作成と記録 (作成/更新)

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

#### ファイルからシークレットを書き込む

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
```＃＃＃３．２．シークレットの読み取り (読み取り)

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

＃＃＃３．３．シークレットをリストする

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

＃＃＃３．４．シークレットの削除（削除）

```bash
# Soft delete version mới nhất (KV v2)
vault kv delete kv-v2/myapp/database

# Soft delete version cụ thể
vault kv delete -versions=1,2 kv-v2/myapp/database
```

## 4. バージョニング — バージョン管理

＃＃＃４．１． Xemのバージョン履歴

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

＃＃＃４．２．古いバージョンにロールバックする

```bash
# Đọc version 1
vault kv get -format=json -version=1 kv-v2/myapp/database | \
  jq '.data.data' | \
  vault kv put kv-v2/myapp/database -

# Giờ version 4 sẽ có nội dung giống version 1
```

＃＃＃４．３．バージョンの帰属 (Vault 1.21+)

Vault 1.21 以降、各バージョンには、そのバージョンの **作成者** に関する情報が記録されます。

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

## 5. チェックアンドセット (CAS)

CAS は、複数のクライアントが同じシークレットに書き込むときの **競合状態** を防ぐのに役立ちます。

＃＃＃５．１．マウント全体で CAS を有効にする

```bash
vault write kv-v2/config cas_required=true
```

＃＃＃５．２．録画時に CAS を使用する

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

＃＃＃５．３．キーごとの CAS

```bash
# Đặt CAS required cho một key cụ thể
vault kv metadata put -cas-required=true kv-v2/myapp/critical-secret
```

## 6. 論理的な削除、削除の取り消し、および破棄

＃＃＃６．１．ソフト削除

```bash
# Soft delete — dữ liệu vẫn tồn tại nhưng bị đánh dấu đã xóa
vault kv delete kv-v2/myapp/database

# Đọc sẽ thấy thông báo đã xóa
vault kv get kv-v2/myapp/database
# No value found at kv-v2/data/myapp/database

# Soft delete versions cụ thể
vault kv delete -versions=1,3 kv-v2/myapp/database
```

＃＃＃６．２．削除の取り消し - 復元

```bash
# Khôi phục version đã soft delete
vault kv undelete -versions=1 kv-v2/myapp/database

# Giờ có thể đọc lại version 1
vault kv get -version=1 kv-v2/myapp/database
```

＃＃＃６．３．破棄 — 完全に削除します

```bash
# Destroy version cụ thể — KHÔNG THỂ khôi phục
vault kv destroy -versions=1,2 kv-v2/myapp/database

# Xóa toàn bộ key và tất cả versions + metadata
vault kv metadata delete kv-v2/myapp/database
```

> **警告:** `destroy` および `metadata delete` は元に戻すことができないアクションです。削除する前に、本当に完全に削除してもよいかどうかを確認してください。

## 7. パッチ操作

Vault 1.10 以降では、シークレット全体を上書きせずに **一部のフィールド**を更新できます。

＃＃＃７．１．フィールドにパッチを適用する

```bash
# Secret hiện tại có: username, password, host, port
# Chỉ cập nhật password mà giữ nguyên các fields khác
vault kv patch kv-v2/myapp/database password="BrandNewP@ss!"

# Kiểm tra — các fields khác vẫn intact
vault kv get kv-v2/myapp/database
```

＃＃＃７．２． CAS によるパッチ

```bash
# Patch với check-and-set
vault kv patch -cas=5 kv-v2/myapp/database password="AnotherP@ss!"
```

＃＃＃７．３． API によるパッチ

```bash
curl --header "X-Vault-Token: $VAULT_TOKEN" \
  --header "Content-Type: application/merge-patch+json" \
  --request PATCH \
  --data '{"data": {"password": "APIUpdatedP@ss!"}}' \
  "$VAULT_ADDR/v1/kv-v2/data/myapp/database"
```

## 8. カスタムメタデータ

カスタム メタデータを使用すると、シークレット データに影響を与えることなく追加情報をシークレットに添付できます。

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

## 9. KV v1 から KV v2 への移行

＃＃＃９．１．直接アップグレード (インプレース)

```bash
# Kiểm tra version hiện tại
vault read sys/mounts/kv-v1

# Upgrade từ v1 sang v2
vault kv enable-versioning kv-v1/

# Xác nhận đã upgrade thành công
vault read sys/mounts/kv-v1
# options    map[version:2]
```

> **重要な注意事項:** アップグレード プロセスは **一方向**です。v2 から v1 にダウングレードすることはできません。

＃＃＃９．２．新しいマウントへの移行

v1 を保持し、v2 にコピーを作成する場合は、次のようにします。

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

＃＃＃９．３．移行後の確認

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

## 10. API リファレンス — 重要なエンドポイント

### 10.1。 KV v2 API エンドポイント

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

## 11. ベストプラクティス

### 11.1。パス構造

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

＃＃＃１１．２．ポリシーチョー KV v2

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

＃＃＃１１．３．導入チェックリスト

- ✅ 新しいプロジェクトには常に KV v2 を使用してください
- ✅ 適切な `max_versions` 構成 (5 ～ 10 が妥当です)
- ✅ 重要なシークレットに対して CAS を有効にする
- ✅ カスタムメタデータを使用して所有権を追跡する
- ✅ `delete_version_after` を自動的にクリーンアップするように設定します
- ✅ チーム/環境/サービスごとにパスを整理します
- ✅ `destroy` 機能の強力な生産を制限します

## 概要

このレッスンでは、次のことを習得しました。

1. **KV v1 と v2 の違い**、および各タイプをいつ使用するか
2. CLI と API の両方を使用した完全な **CRUD 操作**
3. **バージョン管理** — 管理、ロールバック、およびバージョンの帰属
4. **チェックアンドセット (CAS)** による競合状態の回避
5. **論理的な削除、削除の取り消し、破棄** — さまざまなレベルの削除
6. **パッチ操作**による部分更新
7. **カスタム メタデータ**による情報の充実
8. **v1 → v2** の移行は安全です

次の記事では、**Database Secrets Engine** について説明します。Vault は動的認証情報を自動的に生成する機能を備えています。
