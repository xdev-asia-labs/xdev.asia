---
id: 019d8b30-b210-7001-c002-e0c5f8200110
title: 'Lesson 10: AWS, Azure, GCP and Cloud Secrets Engines'
slug: bai-10-aws-azure-gcp-va-cloud-secrets-engines
description: AWS Secrets Engine (IAM, STS AssumeRole, Federation Token), Azure Secrets Engine (Service Principal, Static roles 1.21), GCP Secrets Engine (SA keys, OAuth2), multi-cloud best practices.
duration_minutes: 200
is_free: true
video_url: null
sort_order: 10
section_title: 'Part 2: Secrets Engines - Managing Secrets'
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault from Basic to Advanced
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4303" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4303)"/>

  <!-- Decorations -->
  <g>
    <circle cx="649" cy="37" r="22" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="698" cy="126" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="747" cy="215" r="36" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="796" cy="44" r="13" fill="#818cf8" opacity="0.13"/>
    <circle cx="845" cy="133" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="227" x2="1100" y2="307" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="257" x2="1050" y2="327" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1063.3730669589463,206 1063.3730669589463,248 1027,269 990.6269330410536,248 990.6269330410536,206 1027,185" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🔒 DevSecOps — Lesson 10</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">Lesson 10: AWS, Azure, GCP and Cloud Secrets</tspan>
      <tspan x="60" dy="42">Engines</tspan>
  </text>

  <!-- Series subtitle -->
<text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault from Basic to Advanced</text>

  <!-- Section -->
<text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Secrets Engines - Managing Secrets</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduce

Cloud Secrets Engines allows Vault to create **dynamic credentials** for cloud providers — AWS, Azure, and GCP. Instead of managing long-lived cloud credentials (IAM access keys, service principal secrets, service account keys), Vault will create short-lived credentials on demand and automatically revoke when the TTL expires.

### Key benefits

- **No more long-lived credentials**: Reduces the risk if credentials are exposed
- **Least privilege**: Each request receives exactly the necessary permissions
- **Audit trail**: Know exactly who requested cloud credentials when
- **Centralized access**: Manage multi-cloud access from a single place
- **Automated rotation**: No need for manual key rotation

## PHẦN 1: AWS Secrets Engine

### 1.1. AWS Secrets Engine architecture

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

Vault supports 3 types of credentials:

| Type | Description | TTL |
|---|---|---|
| **IAM User** | Create IAM user + access key | Long (with key rotation) |
| **STS AssumeRole** | AssumeRole → temporary credentials | 15 minutes - 12 hours |
| **STS Federation Token** | GetFederationToken | 15 minutes - 36 hours |

### 1.2. Enable and Configure

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

> **Security:** After rotating root credentials, only Vault will know the new access key. Make sure the configuration is tested before rotating.

### 1.3. IAM User Credentials

Vault creates an IAM user with an access key when the application requests it.

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

### 1.4. STS AssumeRole

STS AssumeRole creates temporary credentials by assuming an IAM role — **no need to create an IAM user**.

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

### 1.5. STS Federation Token

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

### 1.6. Script uses AWS dynamic credentials

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

## PHẦN 2: Azure Secrets Engine

### 2.1. Enable and Configure

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

### 2.2. Dynamic Service Principal

Vault creates a temporary Azure Service Principal (SP) with the specified role assignments.

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

### 2.3. Use Azure dynamic credentials

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

### 2.4. Azure Static Roles (Vault 1.21+)

Static roles allow Vault to manage password rotation for **existing Service Principals**.

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

### 2.5. Azure Roles with MS Graph Permissions

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

## PHẦN 3: GCP Secrets Engine

### 3.1. Enable and Configure

```bash
# Enable GCP secrets engine
vault secrets enable gcp

# Configure với Service Account key
vault write gcp/config \
  credentials=@/path/to/vault-sa-key.json \
  ttl=3600 \
  max_ttl=86400
```

### 3.2. Service Account Key (Roleset)

Vault creates temporary Service Account keys.

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

### 3.3. OAuth2 Access Token (Roleset)

Instead of generating a key, Vault can return a short-lived **OAuth2 access token**.

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

### 3.4. Static Account

Manage key rotation for **existing Service Account**.

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

### 3.5. Use GCP credentials

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

## PHẦN 4: Multi-Cloud Best Practices

### 4.1. Policies organization

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

### 4.2. Multi-Cloud Helper Script

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

Use:

```bash
# AWS
./cloud-creds.sh aws deploy-role -- aws s3 ls

# Azure
./cloud-creds.sh azure contributor-rg -- az vm list -g my-app-rg

# GCP
./cloud-creds.sh gcp gcs-reader -- gsutil ls gs://my-bucket/
```

### 4.3. TTL Guidelines cho Cloud Credentials

| Use Case | AWS | Azure | GCP |
|---|---|---|---|
| CI/CD Pipeline | STS AssumeRole, 30m | Dynamic SP, 1h | OAuth2 Token, 1h |
| Developer Access | STS AssumeRole, 1h | Dynamic SP, 2h | OAuth2 Token, 1h |
| Application Runtime | IAM User + Rotation | Static SP, 24h rotate | Static SA, key rotate |
| Emergency Access | STS AssumeRole, 15m | Dynamic SP, 30m | OAuth2 Token, 30m |

### 4.4. Monitoring Cloud Credentials

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

### 4.5. Security Checklist cho Cloud Engines

**AWS:**

- ✅ Rotate root credentials ngay sau khi configure
- ✅ Prioritize STS AssumeRole instead of IAM User
- ✅ Use condition keys in IAM policies
- ✅ Enable CloudTrail to audit API calls
- ✅ Least privilege IAM policies cho Vault

**Azure:**

- ✅ Rotate root credentials ngay sau khi configure
- ✅ Scope role assignments minimal (resource group, no subscription)
- ✅ Use Azure Static Roles for applications that need fixed SPs
- ✅ Monitor SP creation trong Azure AD audit logs

**GCP:**

- ✅ Prioritize OAuth2 access tokens instead of Service Account keys
- ✅ Vault SA only needs `iam.serviceAccountKeyAdmin` and `iam.serviceAccountAdmin`
- ✅ Use Workload Identity Federation when possible
- ✅ Monitor SA key creation trong Cloud Audit Logs

## 5. Troubleshooting

### 5.1. AWS Common Issues

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

### 5.2. Azure Common Issues

```bash
# Error: "insufficient privileges"
# → Vault SP cần: Application.ReadWrite.OwnedBy hoặc Application.ReadWrite.All
# → Plus: Role Based Access Control Administrator trên target scope

# Error: "SP not ready"
# → Azure AD replication delay (vài giây đến vài phút)
# → Thêm wait/retry logic trong application
```

### 5.3. GCP Common Issues

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

## Summary

In this lesson, you've mastered how to use Cloud Secrets Engines:

1. **AWS Secrets Engine** — IAM Users, STS AssumeRole, Federation Tokens
2. **Azure Secrets Engine** — Dynamic Service Principals, Static Roles (1.21+)
3. **GCP Secrets Engine** — Service Account Keys, OAuth2 Tokens, Static Accounts
4. **Multi-cloud best practices** — unified tooling, policies, monitoring
5. **TTL guidelines** — choose the appropriate credential type and TTL for each use case
6. **Troubleshooting** — handling common problems

This is the last article of **Part 2: Secrets Engines**. You already have a solid foundation in all the most important secrets engines in Vault — from KV static secrets, database dynamic credentials, PKI certificates, Transit encryption, to cloud credentials. The next section will dive into **Authentication Methods** — how to authenticate and manage identities in Vault.
