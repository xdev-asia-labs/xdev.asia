---
id: 019d8b30-b210-7001-c002-e0c5f8200110
title: 第 10 課：AWS、Azure、GCP 和雲端秘密引擎
slug: bai-10-aws-azure-gcp-va-cloud-secrets-engines
description: >-
  AWS Secrets Engine（IAM、STS AssumeRole、聯合代幣）、Azure Secrets Engine（服務主體、靜態角色
  1.21）、GCP Secrets Engine（SA 金鑰、OAuth2）、多雲最佳實務。
duration_minutes: 200
is_free: true
video_url: null
sort_order: 10
section_title: 第 2 部分：秘密引擎 - 管理秘密
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault 從基礎到高級
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="最大寬度：100%;高度：自動；邊框半徑：12px；邊距底部：1.5rem;">
  <定義>
    <線性漸變 id="bg-4303" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </線性漸層>
  </defs>

  <!-- 背景 -->
  <矩形寬度=“1200”高度=“340”rx=“12”填滿=“url（#bg-4303）”/>

  <!-- 裝飾品 -->
  <g>
    <circle cx="649" cy="37" r="22" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="698" cy="126" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="747" cy="215" r="36" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="796" cy="44" r="13" fill="#818cf8" opacity="0.13"/>
    <circle cx="845" cy="133" r="20" fill="#818cf8" opacity="0.1"/>
    <圓cx =“750”cy =“80”r =“1.5”填入=“#818cf8”不透明度=“0.15”/>
    <圓cx =“750”cy =“108”r =“1.5”填入=“#818cf8”不透明度=“0.15”/>
    <圓cx =“750”cy =“136”r =“1.5”填入=“#818cf8”不透明度=“0.15”/>
    <圓cx =“750”cy =“164”r =“1.5”填入=“#818cf8”不透明度=“0.15”/>
    <圓cx =“778”cy =“80”r =“1.5”填入=“#818cf8”不透明度=“0.15”/>
    <圓cx =“778”cy =“108”r =“1.5”填入=“#818cf8”不透明度=“0.15”/>
    <圓cx =“778”cy =“136”r =“1.5”填入=“#818cf8”不透明度=“0.15”/>
    <圓cx =“778”cy =“164”r =“1.5”填入=“#818cf8”不透明度=“0.15”/>
    <圓cx =“806”cy =“80”r =“1.5”填入=“#818cf8”不透明度=“0.15”/>
    <圓cx =“806”cy =“108”r =“1.5”填入=“#818cf8”不透明度=“0.15”/>
    <圓cx =“806”cy =“136”r =“1.5”填入=“#818cf8”不透明度=“0.15”/>
    <圓cx =“806”cy =“164”r =“1.5”填入=“#818cf8”不透明度=“0.15”/>
    <圓cx =“834”cy =“80”r =“1.5”填入=“#818cf8”不透明度=“0.15”/>
    <圓cx =“834”cy =“108”r =“1.5”填入=“#818cf8”不透明度=“0.15”/>
    <圓cx =“834”cy =“136”r =“1.5”填入=“#818cf8”不透明度=“0.15”/>
    <圓cx =“834”cy =“164”r =“1.5”填入=“#818cf8”不透明度=“0.15”/>
    <圓cx =“862”cy =“80”r =“1.5”填入=“#818cf8”不透明度=“0.15”/>
    <圓cx =“862”cy =“108”r =“1.5”填入=“#818cf8”不透明度=“0.15”/>
    <圓cx =“862”cy =“136”r =“1.5”填入=“#818cf8”不透明度=“0.15”/>
    <圓cx =“862”cy =“164”r =“1.5”填入=“#818cf8”不透明度=“0.15”/>
    <圓cx =“890”cy =“80”r =“1.5”填入=“#818cf8”不透明度=“0.15”/>
    <圓cx =“890”cy =“108”r =“1.5”填入=“#818cf8”不透明度=“0.15”/>
    <圓cx =“890”cy =“136”r =“1.5”填入=“#818cf8”不透明度=“0.15”/>
    <圓cx =“890”cy =“164”r =“1.5”填入=“#818cf8”不透明度=“0.15”/>
    <line x1 =“600”y1 =“227”x2 =“1100”y2 =“307”筆觸=“#818cf8”筆畫寬度=“0.5”不透明度=“0.1”/>
    <line x1 =“650”y1 =“257”x2 =“1050”y2 =“327”筆畫=“#818cf8”筆觸寬度=“0.5”不透明度=“0.08”/>
    <多邊形點=“1063.3730669589463,206 1063.3730669589463,248 1027,269 990.6269330410536,248 990.626936,0536 1027,185”填充=“無”筆畫=“#818cf8”筆畫寬度=“1”不透明度=“0.12”/>
  </g>

  <!-- 重音欄 -->
  <矩形x =“60”y =“50”寬度=“4”高度=“60”rx =“2”填滿=“#818cf8”/><!-- 類別徽章 -->
  <矩形x =“80”y =“50”寬度=“121”高度=“28”rx =“14”填滿=“#818cf8”不透明度=“0.15”/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🔒 DevSecOps — 第 10 堂課</text>

  <!-- 標題 -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">第 10 課：AWS、Azure、GCP 與雲秘密</tspan>
      <tspan x="60" dy="42">引擎</tspan>
  </文字>

  <!-- 系列字幕 -->
<text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault 從基礎到進階</text>

  <!-- 部分 -->
<text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：秘密引擎 - 管理機密</text>

  <!-- xDev 浮水印 -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## 介紹

Cloud Secrets Engines 讓 Vault 為雲端供應商（AWS、Azure 和 GCP）建立**動態憑證**。 Vault 將按需建立短期憑證，並在 TTL 過期時自動撤銷，而不是管理長期的雲端憑證（IAM 存取金鑰、服務主體金鑰、服務帳戶金鑰）。

### 主要優點

- **不再有長期憑證**：降低憑證暴露的風險
- **最小權限**：每個請求都會收到所需的權限
- **審計追蹤**：準確了解誰在何時要求雲端憑證
- **集中訪問**：從一個地方管理多雲訪問
- **自動輪換**：無需手動鑰匙輪換

## PHẦN 1：AWS 秘密引擎

### 1.1。 AWS Secrets Engine 架構

```
┌──────────────┐   Request AWS creds    ┌───────────┐
│  Application │ ─────────────────────▶ │   Vault   │
│              │ ◀───────────────────── │   AWS     │
│              │   Dynamic IAM creds    │  Engine   │
└──────────────┘                        └─────┬─────┘
                                              │
                                              │ AWS API calls
                                              ▼
                                        ┌───────────┐
                                        │    AWS     │
                                        │  IAM/STS  │
                                        └───────────┘
```

Vault 支援 3 種類型的憑證：

|類型 |描述 | TTL |
|---|---|---|
| **IAM 使用者** |建立IAM使用者+存取金鑰 |長（帶鑰匙旋轉）|
| **STS 承擔角色** | AssumeRole → 臨時憑證 | 15 分鐘 - 12 小時 |
| **STS 聯盟代幣** |取得聯邦令牌 | 15 分鐘 - 36 小時 |

### 1.2。啟用和配置

```bash
# Enable AWS secrets engine
vault secrets enable aws

# Configure root credentials cho Vault
vault write aws/config/root \
  access_key="AKIAIOSFODNN7EXAMPLE" \
  secret_key="wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY" \
  region="ap-southeast-1"

# Rotate root credentials ngay (khuyến nghị!)
vault write -f aws/config/rotate-root

# Cấu hình lease
vault write aws/config/lease \
  lease="30m" \
  lease_max="1h"
```

> **安全性：** 輪換根憑證後，只有 Vault 才會知道新的存取金鑰。確保在旋轉之前測試配置。

### 1.3。 IAM 使用者憑證

當應用程式請求時，Vault 將建立一個具有存取金鑰的 IAM 使用者。

```bash
# Tạo role cho IAM user
vault write aws/roles/s3-readonly \
  credential_type=iam_user \
  policy_document=-<<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::my-app-bucket",
        "arn:aws:s3:::my-app-bucket/*"
      ]
    }
  ]
}
EOF

# Hoặc sử dụng existing IAM policy ARN
vault write aws/roles/ec2-admin \
  credential_type=iam_user \
  policy_arns="arn:aws:iam::aws:policy/AmazonEC2FullAccess"

# Request credentials
vault read aws/creds/s3-readonly

# Output:
# Key                Value
# ---                -----
# lease_id           aws/creds/s3-readonly/abcd1234...
# lease_duration     30m
# lease_renewable    true
# access_key         AKIAI44QH8DHBEXAMPLE
# secret_key         je7MtGbClwBF/2Zp9Utk/h3yCo8nvbEXAMPLEKEY
# security_token     <nil>
```

### 1.4。 STS 承擔角色

STS AssumeRole 透過假設 IAM 角色來建立臨時憑證 — **無需建立 IAM 使用者**。

```bash
# Tạo IAM role trên AWS trước (Trust policy cho phép Vault assume)
# Trust policy cho Vault's IAM user:
# {
#   "Version": "2012-10-17",
#   "Statement": [{
#     "Effect": "Allow",
#     "Principal": {"AWS": "arn:aws:iam::123456789012:user/vault-user"},
#     "Action": "sts:AssumeRole"
#   }]
# }

# Tạo Vault role cho STS AssumeRole
vault write aws/roles/deploy-role \
  credential_type=assumed_role \
  role_arns="arn:aws:iam::123456789012:role/DeployRole" \
  default_sts_ttl="1h" \
  max_sts_ttl="4h"

# Request credentials
vault read aws/creds/deploy-role

# Output:
# Key                Value
# ---                -----
# lease_id           aws/creds/deploy-role/xyz789...
# lease_duration     1h
# lease_renewable    false
# access_key         ASIAJEXAMPLEXEG2JICEA
# secret_key         9drTJvcXLB89EXAMPLEKEY
# security_token     AQoDYXdzEBY...  ← STS session token

# STS credentials có security_token — phải sử dụng cả 3 values
export AWS_ACCESS_KEY_ID="ASIAJEXAMPLEXEG2JICEA"
export AWS_SECRET_ACCESS_KEY="9drTJvcXLB89EXAMPLEKEY"
export AWS_SESSION_TOKEN="AQoDYXdzEBY..."

aws s3 ls
```

### 1.5。 STS聯盟代幣

```bash
# Tạo role Federation Token
vault write aws/roles/ci-deploy \
  credential_type=federation_token \
  policy_document=-<<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ecr:GetAuthorizationToken",
        "ecr:BatchCheckLayerAvailability",
        "ecr:PutImage",
        "ecr:InitiateLayerUpload",
        "ecr:UploadLayerPart",
        "ecr:CompleteLayerUpload",
        "ecs:UpdateService",
        "ecs:DescribeServices"
      ],
      "Resource": "*"
    }
  ]
}
EOF

# Request credentials
vault read aws/creds/ci-deploy
```

### 1.6。腳本使用AWS動態憑證

```bash
#!/bin/bash
# aws-deploy.sh — Deploy sử dụng Vault dynamic credentials

set -euo pipefail

ROLE="${1:-deploy-role}"

# Lấy credentials từ Vault
echo "Requesting AWS credentials from Vault..."
CREDS=$(vault read -format=json "aws/creds/${ROLE}")

export AWS_ACCESS_KEY_ID=$(echo "$CREDS" | jq -r '.data.access_key')
export AWS_SECRET_ACCESS_KEY=$(echo "$CREDS" | jq -r '.data.secret_key')

# STS credentials có security_token
TOKEN=$(echo "$CREDS" | jq -r '.data.security_token // empty')
if [ -n "$TOKEN" ]; then
  export AWS_SESSION_TOKEN="$TOKEN"
fi

LEASE_ID=$(echo "$CREDS" | jq -r '.lease_id')
echo "Got credentials. Lease: $LEASE_ID"

# Cleanup khi exit
cleanup() {
  echo "Revoking AWS credentials..."
  vault lease revoke "$LEASE_ID" 2>/dev/null || true
}
trap cleanup EXIT

# Thực hiện deploy
echo "Deploying..."
aws ecs update-service \
  --cluster production \
  --service my-app \
  --force-new-deployment

echo "Deploy complete!"
```

## PHẦN 2：Azure Secrets 引擎

### 2.1。啟用和配置

```bash
# Enable Azure secrets engine
vault secrets enable azure

# Configure Azure credentials
vault write azure/config \
  subscription_id="aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee" \
  tenant_id="11111111-2222-3333-4444-555555555555" \
  client_id="66666666-7777-8888-9999-000000000000" \
  client_secret="AzureClientSecretValue"

# Rotate root credentials
vault write -f azure/config/rotate-root
```

### 2.2。動態服務主體

Vault 使用指定的角色指派建立臨時 Azure 服務主體 (SP)。

```bash
# Tạo role — Dynamic SP với Contributor trên Resource Group
vault write azure/roles/contributor-rg \
  ttl=1h \
  max_ttl=4h \
  azure_roles=-<<EOF
[
  {
    "role_name": "Contributor",
    "scope": "/subscriptions/aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee/resourceGroups/my-app-rg"
  }
]
EOF

# Tạo role với nhiều role assignments
vault write azure/roles/devops-role \
  ttl=2h \
  max_ttl=8h \
  azure_roles=-<<EOF
[
  {
    "role_name": "Contributor",
    "scope": "/subscriptions/aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee/resourceGroups/my-app-rg"
  },
  {
    "role_name": "AcrPush",
    "scope": "/subscriptions/aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee/resourceGroups/my-app-rg/providers/Microsoft.ContainerRegistry/registries/myappacr"
  }
]
EOF

# Request credentials
vault read azure/creds/contributor-rg

# Output:
# Key                Value
# ---                -----
# client_id          zzzzzzzz-yyyy-xxxx-wwww-vvvvvvvvvvvv
# client_secret      DynamicGeneratedSecret123!
# lease_duration     1h
# lease_id           azure/creds/contributor-rg/abc...
# lease_renewable    true
```

### 2.3。使用 Azure 動態憑證

```bash
# Lấy credentials từ Vault
CREDS=$(vault read -format=json azure/creds/contributor-rg)

CLIENT_ID=$(echo "$CREDS" | jq -r '.data.client_id')
CLIENT_SECRET=$(echo "$CREDS" | jq -r '.data.client_secret')

# Login Azure CLI
az login --service-principal \
  --username "$CLIENT_ID" \
  --password "$CLIENT_SECRET" \
  --tenant "11111111-2222-3333-4444-555555555555"

# Thực hiện operations
az vm list --resource-group my-app-rg

# Cleanup
LEASE_ID=$(echo "$CREDS" | jq -r '.lease_id')
vault lease revoke "$LEASE_ID"
az logout
```

### 2.4。 Azure 靜態角色（Vault 1.21+）靜態角色允許 Vault 管理**現有服務主體**的密碼輪替。

```bash
# Tạo static role cho existing SP
vault write azure/static-roles/my-static-sp \
  application_object_id="app-object-id-here" \
  rotation_period="86400"

# Đọc current credentials
vault read azure/static-creds/my-static-sp

# Output:
# Key                    Value
# ---                    -----
# client_id              existing-sp-client-id
# client_secret          AutoRotatedPassword!
# last_vault_rotation    2024-01-15T12:00:00Z
# rotation_period        24h
# ttl                    23h45m

# Force rotation
vault write -f azure/rotate-role/my-static-sp
```

### 2.5。具有 MS Graph 權限的 Azure 角色

```bash
# Role với Azure AD permissions (MS Graph)
vault write azure/roles/graph-reader \
  ttl=1h \
  max_ttl=4h \
  azure_groups=-<<EOF
[
  {
    "group_name": "App-Developers",
    "object_id": "group-object-id-here"
  }
]
EOF
```

## PHẦN 3：GCP 秘密引擎

### 3.1。啟用和配置

```bash
# Enable GCP secrets engine
vault secrets enable gcp

# Configure với Service Account key
vault write gcp/config \
  credentials=@/path/to/vault-sa-key.json \
  ttl=3600 \
  max_ttl=86400
```

### 3.2。服務帳戶金鑰（角色集）

Vault 建立臨時服務帳戶金鑰。

```bash
# Tạo roleset cho GCS access
vault write gcp/roleset/gcs-reader \
  project="my-gcp-project" \
  secret_type="service_account_key" \
  bindings=-<<EOF
resource "//cloudresourcemanager.googleapis.com/projects/my-gcp-project" {
  roles = [
    "roles/storage.objectViewer"
  ]
}
EOF

# Request Service Account key
vault read gcp/roleset/gcs-reader/key

# Output:
# Key                 Value
# ---                 -----
# lease_duration      1h
# lease_id            gcp/roleset/gcs-reader/key/abc...
# lease_renewable     true
# key_algorithm       KEY_ALG_RSA_2048
# key_type            TYPE_GOOGLE_CREDENTIALS_FILE
# private_key_data    ewogICJ0eXBlIjogInNlcnZpY2VfYWNjb3VudCIsC...  ← base64 encoded JSON key
```

### 3.3。 OAuth2 存取權令牌（角色集）

Vault 可以傳回一個短暫的 **OAuth2 存取權杖**，而不是產生金鑰。

```bash
# Tạo roleset cho OAuth2 tokens
vault write gcp/roleset/compute-viewer \
  project="my-gcp-project" \
  secret_type="access_token" \
  token_scopes="https://www.googleapis.com/auth/compute.readonly" \
  bindings=-<<EOF
resource "//cloudresourcemanager.googleapis.com/projects/my-gcp-project" {
  roles = [
    "roles/compute.viewer"
  ]
}
EOF

# Request OAuth2 token
vault read gcp/roleset/compute-viewer/token

# Output:
# Key                Value
# ---                -----
# expires_at_seconds 1705315800
# token              ya29.a0AfB_byBq...
# token_ttl          3599

# Sử dụng token
curl -H "Authorization: Bearer ya29.a0AfB_byBq..." \
  "https://compute.googleapis.com/compute/v1/projects/my-gcp-project/zones/asia-southeast1-a/instances"
```

### 3.4。靜態帳戶

管理**現有服務帳戶**的金鑰輪替。

```bash
# Tạo static account
vault write gcp/static-account/my-app-sa \
  service_account_email="my-app@my-gcp-project.iam.gserviceaccount.com" \
  secret_type="service_account_key" \
  bindings=-<<EOF
resource "//cloudresourcemanager.googleapis.com/projects/my-gcp-project" {
  roles = [
    "roles/cloudsql.client"
  ]
}
EOF

# Đọc key
vault read gcp/static-account/my-app-sa/key

# OAuth2 token cho static account
vault write gcp/static-account/my-app-sa \
  service_account_email="my-app@my-gcp-project.iam.gserviceaccount.com" \
  secret_type="access_token" \
  token_scopes="https://www.googleapis.com/auth/cloud-platform"

vault read gcp/static-account/my-app-sa/token

# Rotate key
vault write -f gcp/static-account/my-app-sa/rotate-key
```

### 3.5。使用 GCP 憑證

```bash
#!/bin/bash
# gcp-deploy.sh — Deploy sử dụng Vault GCP credentials

set -euo pipefail

# Lấy Service Account key từ Vault
KEY_DATA=$(vault read -format=json gcp/roleset/gcs-reader/key | \
  jq -r '.data.private_key_data' | base64 -d)

# Ghi ra temp file
KEYFILE=$(mktemp /tmp/gcp-key-XXXXXX.json)
echo "$KEY_DATA" > "$KEYFILE"

# Cleanup khi exit
cleanup() {
  rm -f "$KEYFILE"
  LEASE_ID=$(vault read -format=json gcp/roleset/gcs-reader/key | jq -r '.lease_id')
  vault lease revoke "$LEASE_ID" 2>/dev/null || true
}
trap cleanup EXIT

# Activate Service Account
gcloud auth activate-service-account --key-file="$KEYFILE"

# Thực hiện operations
gsutil ls gs://my-app-bucket/

echo "Done!"
```

## PHẦN 4：多雲最佳實踐

### 4.1。政策組織

```hcl
# === AWS Policies ===

# Policy cho CI/CD pipeline
path "aws/creds/ci-deploy" {
  capabilities = ["read"]
}

# Policy cho developer (read-only)
path "aws/creds/s3-readonly" {
  capabilities = ["read"]
}

# === Azure Policies ===

path "azure/creds/contributor-rg" {
  capabilities = ["read"]
}

path "azure/static-creds/my-static-sp" {
  capabilities = ["read"]
}

# === GCP Policies ===

path "gcp/roleset/gcs-reader/key" {
  capabilities = ["read"]
}

path "gcp/roleset/compute-viewer/token" {
  capabilities = ["read"]
}

# === Lease Management ===

path "sys/leases/renew" {
  capabilities = ["update"]
}

path "sys/leases/revoke" {
  capabilities = ["update"]
}
```

### 4.2。多雲助手腳本

```bash
#!/bin/bash
# cloud-creds.sh — Unified script cho multi-cloud credentials

set -euo pipefail

PROVIDER="$1"
ROLE="$2"
shift 2

case "$PROVIDER" in
  aws)
    echo "Getting AWS credentials..."
    CREDS=$(vault read -format=json "aws/creds/${ROLE}")
    
    export AWS_ACCESS_KEY_ID=$(echo "$CREDS" | jq -r '.data.access_key')
    export AWS_SECRET_ACCESS_KEY=$(echo "$CREDS" | jq -r '.data.secret_key')
    
    TOKEN=$(echo "$CREDS" | jq -r '.data.security_token // empty')
    [ -n "$TOKEN" ] && export AWS_SESSION_TOKEN="$TOKEN"
    ;;
    
  azure)
    echo "Getting Azure credentials..."
    CREDS=$(vault read -format=json "azure/creds/${ROLE}")
    
    export AZURE_CLIENT_ID=$(echo "$CREDS" | jq -r '.data.client_id')
    export AZURE_CLIENT_SECRET=$(echo "$CREDS" | jq -r '.data.client_secret')
    export AZURE_TENANT_ID="your-tenant-id"
    ;;
    
  gcp)
    echo "Getting GCP credentials..."
    KEYFILE=$(mktemp /tmp/gcp-key-XXXXXX.json)
    
    vault read -format=json "gcp/roleset/${ROLE}/key" | \
      jq -r '.data.private_key_data' | base64 -d > "$KEYFILE"
    
    export GOOGLE_APPLICATION_CREDENTIALS="$KEYFILE"
    ;;
    
  *)
    echo "Unknown provider: $PROVIDER"
    echo "Usage: $0 <aws|azure|gcp> <role> -- <command>"
    exit 1
    ;;
esac

# Lưu lease ID cho cleanup
LEASE_ID=$(echo "$CREDS" 2>/dev/null | jq -r '.lease_id // empty')

cleanup() {
  [ -n "${LEASE_ID:-}" ] && vault lease revoke "$LEASE_ID" 2>/dev/null || true
  [ -n "${KEYFILE:-}" ] && rm -f "$KEYFILE" 2>/dev/null || true
}
trap cleanup EXIT

echo "Credentials ready. Executing command..."
exec "$@"
```

用途：

```bash
# AWS
./cloud-creds.sh aws deploy-role -- aws s3 ls

# Azure
./cloud-creds.sh azure contributor-rg -- az vm list -g my-app-rg

# GCP
./cloud-creds.sh gcp gcs-reader -- gsutil ls gs://my-bucket/
```

### 4.3。 TTL 指南 cho 雲憑證

|使用案例|亞馬遜AWS |天藍色| GCP |
|---|---|---|---|
| CI/CD 管道 | STS 承擔角色，30m |動態 SP，1 小時 | OAuth2 令牌，1 小時 |
|開發者訪問 | STS 承擔角色，1 小時 |動態 SP，2 小時 | OAuth2 令牌，1 小時 |
|應用程式運行時 | IAM 用戶 + 輪換 |靜態SP，24小時輪換|靜態 SA，密鑰輪換 |
|緊急通道 | STS 承擔角色，15m |動態 SP，30m | OAuth2 令牌，30m |

### 4.4。監控雲端憑證

```bash
# Kiểm tra active leases cho từng provider
echo "=== AWS Active Leases ==="
vault list sys/leases/lookup/aws/creds/ 2>/dev/null || echo "None"

echo "=== Azure Active Leases ==="
vault list sys/leases/lookup/azure/creds/ 2>/dev/null || echo "None"

echo "=== GCP Active Leases ==="
vault list sys/leases/lookup/gcp/roleset/ 2>/dev/null || echo "None"

# Force revoke tất cả credentials của một provider
# ⚠️ CẨN THẬN — sẽ ảnh hưởng đến applications đang chạy
vault lease revoke -prefix aws/creds
```

### 4.5。雲端引擎安全檢查表

**AWS：**

- ✅ 輪換根憑證 ngay sau khi 配置
- ✅ 優先考慮 STS AssumeRole 而不是 IAM User
- ✅ 在 IAM 策略中使用條件鍵
- ✅ 啟用 CloudTrail 審核 API 呼叫
- ✅ 最小權限 IAM 策略 cho Vault

**天藍色：**

- ✅ 輪換根憑證 ngay sau khi 配置
- ✅ 範圍角色分配最少（資源組，無訂閱）
- ✅ 對需要固定 SP 的應用程式使用 Azure 靜態角色
- ✅ 透過 Azure AD 審核日誌監控 SP 創建

**GCP：**

- ✅ 優先考慮 OAuth2 存取權杖而不是服務帳戶金鑰
- ✅ Vault SA 只需要 `iam.serviceAccountKeyAdmin` 和 `iam.serviceAccountAdmin`
- ✅ 盡可能使用工作負載身分聯合
- ✅ 透過雲端審核日誌監控 SA 金鑰創建

## 5. 故障排除

### 5.1。 AWS 常見問題

```bash
# Error: "error assuming role"
# → Kiểm tra trust policy của IAM role
aws iam get-role --role-name DeployRole | jq '.Role.AssumeRolePolicyDocument'

# Error: "AccessDenied"
# → Vault IAM user thiếu permissions
# → Kiểm tra: sts:AssumeRole, iam:CreateUser, iam:CreateAccessKey, etc.

# Error: "cannot use STS token to call IAM"
# → STS credentials không thể tạo IAM users
# → Sử dụng credential_type=assumed_role thay vì iam_user
```

### 5.2。 Azure 常見問題

```bash
# Error: "insufficient privileges"
# → Vault SP cần: Application.ReadWrite.OwnedBy hoặc Application.ReadWrite.All
# → Plus: Role Based Access Control Administrator trên target scope

# Error: "SP not ready"
# → Azure AD replication delay (vài giây đến vài phút)
# → Thêm wait/retry logic trong application
```

### 5.3。 GCP 常見問題

```bash
# Error: "permission denied"
# → Vault SA cần:
#    - iam.serviceAccountAdmin
#    - iam.serviceAccountKeyAdmin
#    - resourcemanager.projectIamAdmin (cho bindings)

# Error: "quota exceeded"
# → GCP giới hạn 10 keys per SA
# → Revoke leases cũ hoặc dùng OAuth2 tokens
```

## 總結

在本課程中，您已掌握如何使用 Cloud Secrets Engine：

1. **AWS Secrets Engine** — IAM 使用者、STS AssumeRole、聯合令牌
2. **Azure Secrets Engine** — 動態服務主體、靜態角色 (1.21+)
3. **GCP Secrets Engine** — 服務帳戶金鑰、OAuth2 令牌、靜態帳戶
4. **多雲最佳實務** — 統一工具、策略、監控
5. **TTL 指南** — 為每個用例選擇適當的憑證類型和 TTL
6. **故障排除** — 處理常見問題

這是**第 2 部分：秘密引擎**的最後一篇文章。您已經在 Vault 中所有最重要的秘密引擎中擁有了堅實的基礎——從 KV 靜態秘密、資料庫動態憑證、PKI 憑證、傳輸加密到雲端憑證。下一節將深入探討**身份驗證方法** — 如何在 Vault 中進行身份驗證和管理身份。
