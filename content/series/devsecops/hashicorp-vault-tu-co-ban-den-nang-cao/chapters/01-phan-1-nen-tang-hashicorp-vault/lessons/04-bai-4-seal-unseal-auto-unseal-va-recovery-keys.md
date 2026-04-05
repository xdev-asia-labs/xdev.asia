---
id: 019d8b30-b204-7001-c002-e0c5f8200104
title: 'Bài 4: Seal/Unseal, Auto-unseal và Recovery Keys'
slug: bai-4-seal-unseal-auto-unseal-va-recovery-keys
description: >-
  Hiểu sâu cơ chế Seal/Unseal của Vault, Shamir Secret Sharing, Key Shares và Key Threshold. Auto-unseal với AWS KMS, Azure Key Vault, GCP Cloud KMS, Transit (Vault-to-Vault), HSM (PKCS#11). Recovery Keys, Re-keying (vault operator rekey), Key Rotation và Seal Migration.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 4
section_title: "Phần 1: Nền tảng HashiCorp Vault"
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault từ Cơ bản đến Nâng cao
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3766" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3766)"/>

  <!-- Decorations -->
  <g>
    <circle cx="774" cy="112" r="22" fill="#f472b6" opacity="0.07"/>
    <circle cx="948" cy="226" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="622" cy="80" r="36" fill="#f472b6" opacity="0.11"/>
    <circle cx="796" cy="194" r="28" fill="#f472b6" opacity="0.13"/>
    <circle cx="970" cy="48" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="152" x2="1100" y2="232" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="182" x2="1050" y2="252" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="975.3826859021799,138.5 975.3826859021799,165.5 952,179 928.6173140978201,165.5 928.6173140978201,138.5 952,125" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — Bài 4</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 4: Seal/Unseal, Auto-unseal và</tspan>
      <tspan x="60" dy="42">Recovery Keys</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 1: Nền tảng HashiCorp Vault</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Khi HashiCorp Vault khởi động, toàn bộ dữ liệu trong storage backend đều ở trạng thái **mã hóa**. Vault không thể đọc hay ghi bất kỳ secret nào cho đến khi được **unseal** — quá trình cung cấp khóa giải mã (Master Key) để Vault có thể truy cập dữ liệu. Đây là lớp bảo vệ quan trọng nhất, đảm bảo rằng ngay cả khi kẻ tấn công chiếm được toàn bộ storage, họ vẫn không thể đọc được secrets.

Bài học này sẽ đi sâu vào:

- Cơ chế Seal/Unseal và kiến trúc mã hóa bên trong Vault
- Thuật toán Shamir's Secret Sharing
- Auto-unseal với các Cloud KMS providers
- Recovery Keys và quy trình Re-keying
- Key Rotation và Seal Migration

## 1. Kiến trúc mã hóa của Vault

### 1.1 Encryption Key và Master Key

Vault sử dụng kiến trúc mã hóa hai tầng:

```
┌─────────────────────────────────────────────┐
│              Vault Storage                   │
│  ┌─────────────────────────────────────┐    │
│  │   Encrypted Data (secrets, config)  │    │
│  │   🔒 Mã hóa bằng Encryption Key    │    │
│  └─────────────────────────────────────┘    │
│                                              │
│  ┌─────────────────────────────────────┐    │
│  │   Encryption Key (DEK)              │    │
│  │   🔒 Mã hóa bằng Master Key        │    │
│  └─────────────────────────────────────┘    │
│                                              │
│  Master Key = KHÔNG lưu trên storage        │
│  → Được tái tạo từ Unseal Keys             │
│    (Shamir's Secret Sharing)                │
└─────────────────────────────────────────────┘
```

- **Encryption Key (DEK - Data Encryption Key):** Khóa AES-256-GCM dùng để mã hóa/giải mã toàn bộ dữ liệu trong storage. Bản thân Encryption Key được lưu trong storage nhưng ở dạng đã mã hóa.
- **Master Key:** Khóa dùng để mã hóa/giải mã Encryption Key. Master Key **không bao giờ** được lưu trữ trên storage — nó phải được cung cấp mỗi khi Vault khởi động.

### 1.2 Trạng thái Sealed vs Unsealed

```bash
# Kiểm tra trạng thái Vault
vault status
```

Kết quả khi Vault đang **sealed**:

```
Key                Value
---                -----
Seal Type          shamir
Initialized        true
Sealed             true        # ← Vault đang sealed
Total Shares       5
Threshold          3
Unseal Progress    0/3
Unseal Nonce       n/a
Version            1.15.4
Build Date         2024-01-26
Storage Type       raft
HA Enabled         true
```

Khi Vault ở trạng thái **sealed**:

- Vault biết storage ở đâu và cách truy cập (đã config)
- Vault **không thể** giải mã bất kỳ dữ liệu nào
- Mọi API request (trừ `sys/seal-status`, `sys/unseal`) đều bị từ chối
- Vault về cơ bản **không hoạt động**

## 2. Shamir's Secret Sharing

### 2.1 Thuật toán Shamir's Secret Sharing

Shamir's Secret Sharing (SSS) là thuật toán chia một secret thành N phần (shares), sao cho cần ít nhất T phần (threshold) mới có thể tái tạo lại secret gốc. Với ít hơn T phần, không thể suy ra bất kỳ thông tin nào về secret.

**Nguyên lý toán học:**

- Secret `S` được đặt làm hệ số tự do (a₀) của một đa thức bậc `T-1`
- Các hệ số còn lại (a₁, a₂, ..., aₜ₋₁) được chọn ngẫu nhiên
- Mỗi share là một điểm trên đa thức: `(xᵢ, f(xᵢ))`
- Với T điểm, ta dùng **nội suy Lagrange** để tìm lại đa thức → lấy được `a₀ = S`

```
Ví dụ: 5 shares, threshold = 3
Đa thức bậc 2: f(x) = S + a₁x + a₂x²

Share 1: (1, f(1))
Share 2: (2, f(2))
Share 3: (3, f(3))
Share 4: (4, f(4))
Share 5: (5, f(5))

→ Bất kỳ 3 shares nào cũng đủ để tái tạo f(x) → lấy S = f(0)
→ Chỉ có 2 shares → KHÔNG THỂ suy ra S
```

### 2.2 Khởi tạo Vault (vault operator init)

Khi khởi tạo Vault lần đầu, bạn cấu hình Key Shares và Key Threshold:

```bash
# Khởi tạo với 5 key shares, threshold = 3
vault operator init \
  -key-shares=5 \
  -key-threshold=3

# Output:
# Unseal Key 1: 4jYbl2CBIv6SpkKj6Hos2iRyY+GC2/+4/...
# Unseal Key 2: B3qOP76qVSxhzI/+uAwQDXA9hjhb6t...
# Unseal Key 3: pf3qI9V/r5EqxRpl/Kn1fCM+VNRzL...
# Unseal Key 4: 8fXFwSY5yH/qcLe64W/KIflKHWh...
# Unseal Key 5: xkSaS+Fhv1j3VjAULdphJ9TkJt...
#
# Initial Root Token: hvs.CAESIP2CisvBb5AQF...
#
# Vault initialized with 5 key shares and a key threshold of 3.
```

> ⚠️ **QUAN TRỌNG:** Lưu trữ các Unseal Keys ở các vị trí khác nhau, giao cho các người/team khác nhau quản lý. Root Token cũng phải được bảo vệ cẩn thận và nên revoke sau khi thiết lập xong.

### 2.3 Khởi tạo với PGP encryption

Để tăng cường bảo mật, bạn có thể mã hóa mỗi unseal key bằng PGP key của từng người giữ key:

```bash
# Tạo PGP keys cho 5 key holders
gpg --batch --gen-key <<EOF
Key-Type: RSA
Key-Length: 4096
Name-Real: Key Holder 1
Name-Email: holder1@example.com
Expire-Date: 2y
%no-protection
%commit
EOF

# Export public keys dạng base64
gpg --export holder1@example.com | base64 > holder1.asc
gpg --export holder2@example.com | base64 > holder2.asc
# ... tương tự cho holder 3, 4, 5

# Khởi tạo Vault với PGP encryption
vault operator init \
  -key-shares=5 \
  -key-threshold=3 \
  -pgp-keys="holder1.asc,holder2.asc,holder3.asc,holder4.asc,holder5.asc" \
  -root-token-pgp-key="holder1.asc"
```

Khi đó, mỗi unseal key được mã hóa bằng PGP public key tương ứng — chỉ người sở hữu private key mới giải mã được share của mình.

### 2.4 Quy trình Unseal

```bash
# Cần 3 unseal keys (threshold = 3) từ 3 key holders khác nhau

# Key holder 1 nhập key:
vault operator unseal
# Unseal Key (will be hidden): ****
# → Unseal Progress: 1/3

# Key holder 2 nhập key:
vault operator unseal
# Unseal Key (will be hidden): ****
# → Unseal Progress: 2/3

# Key holder 3 nhập key:
vault operator unseal
# Unseal Key (will be hidden): ****
# → Sealed: false   ← Vault đã unseal!
```

Hoặc unseal qua API:

```bash
# Unseal qua HTTP API
curl -X PUT \
  "${VAULT_ADDR}/v1/sys/unseal" \
  -H "Content-Type: application/json" \
  -d '{"key": "4jYbl2CBIv6SpkKj6Hos2iRyY+GC2/+4/..."}'

# Lặp lại với các key khác cho đến khi đủ threshold
```

### 2.5 Seal lại Vault

```bash
# Seal Vault (yêu cầu quyền sudo trên sys/seal)
vault operator seal

# Sau khi seal, Vault sẽ từ chối mọi request
# và cần unseal lại để hoạt động
```

> 🔒 **Khi nào nên seal Vault?** Khi phát hiện xâm nhập, khi bảo trì khẩn cấp, hoặc khi cần ngắt quyền truy cập tức thời vào toàn bộ secrets.

## 3. Auto-unseal

Quy trình unseal thủ công (Shamir) phù hợp cho môi trường có yêu cầu bảo mật cao, nhưng gây khó khăn trong vận hành — đặc biệt khi Vault cần tự khởi động lại (HA failover, auto-scaling, crash recovery). **Auto-unseal** giải quyết vấn đề này bằng cách ủy quyền việc bảo vệ Master Key cho một dịch vụ KMS bên ngoài.

### 3.1 Cơ chế hoạt động

```
┌────────────────────────────────────────────┐
│  Shamir (Manual Unseal)                    │
│                                            │
│  Master Key = reconstruct từ shares        │
│  → Cần con người nhập unseal keys          │
└────────────────────────────────────────────┘

┌────────────────────────────────────────────┐
│  Auto-unseal                               │
│                                            │
│  Master Key = encrypt/decrypt bằng KMS     │
│  → KMS tự động giải mã khi Vault start    │
│  → Encrypted Master Key lưu trong storage  │
└────────────────────────────────────────────┘
```

### 3.2 Auto-unseal với AWS KMS

**Bước 1:** Tạo KMS key trên AWS:

```bash
# Tạo KMS key
aws kms create-key \
  --description "Vault Auto-unseal Key" \
  --key-usage ENCRYPT_DECRYPT \
  --origin AWS_KMS

# Output → KeyId: arn:aws:kms:ap-southeast-1:123456789:key/abcd-1234-...

# Tạo alias cho dễ quản lý
aws kms create-alias \
  --alias-name alias/vault-unseal \
  --target-key-id abcd-1234-...
```

**Bước 2:** Tạo IAM policy cho Vault:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "kms:Encrypt",
        "kms:Decrypt",
        "kms:DescribeKey"
      ],
      "Resource": "arn:aws:kms:ap-southeast-1:123456789:key/abcd-1234-..."
    }
  ]
}
```

**Bước 3:** Cấu hình Vault:

```hcl
# vault-config.hcl

seal "awskms" {
  region     = "ap-southeast-1"
  kms_key_id = "abcd-1234-efgh-5678-ijkl-9012"

  # Có thể dùng credentials file hoặc environment variables
  # access_key = "AKIAIOSFODNN7EXAMPLE"    # Không khuyến khích hardcode
  # secret_key = "wJalrXUtnFEMI/K7MDENG/..." # Dùng IAM role thay thế
}

storage "raft" {
  path    = "/opt/vault/data"
  node_id = "vault-node-1"
}

listener "tcp" {
  address     = "0.0.0.0:8200"
  tls_disable = false
  tls_cert_file = "/opt/vault/tls/vault.crt"
  tls_key_file  = "/opt/vault/tls/vault.key"
}

api_addr     = "https://vault.example.com:8200"
cluster_addr = "https://vault-node-1:8201"
```

**Bước 4:** Khởi tạo Vault với auto-unseal:

```bash
# Init — không cần chỉ định key-shares/threshold
# vì Master Key được KMS quản lý
vault operator init -recovery-shares=5 -recovery-threshold=3

# Output:
# Recovery Key 1: 9ecfb...
# Recovery Key 2: 46b25...
# Recovery Key 3: f11aa...
# Recovery Key 4: 8d839...
# Recovery Key 5: 3e54b...
#
# Initial Root Token: hvs.CAESI...
#
# Success! Vault is initialized
# Recovery key initialized with 5 key shares and a key threshold of 3
```

> 📌 **Lưu ý:** Với auto-unseal, Vault tự động unseal khi khởi động — không cần can thiệp thủ công. Recovery Keys được sử dụng cho các tác vụ quản trị (rekey, generate root token).

### 3.3 Auto-unseal với Azure Key Vault

```hcl
seal "azurekeyvault" {
  tenant_id      = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
  client_id      = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
  client_secret  = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
  vault_name     = "my-vault-keyvault"
  key_name       = "vault-unseal-key"

  # Hoặc sử dụng Managed Identity (khuyến khích trên Azure VMs/AKS)
  # resource       = "https://vault.azure.net"
}
```

**Thiết lập Azure Key Vault:**

```bash
# Tạo Key Vault
az keyvault create \
  --name my-vault-keyvault \
  --resource-group vault-rg \
  --location southeastasia

# Tạo key
az keyvault key create \
  --vault-name my-vault-keyvault \
  --name vault-unseal-key \
  --kty RSA \
  --size 2048

# Gán quyền cho Service Principal / Managed Identity
az keyvault set-policy \
  --name my-vault-keyvault \
  --object-id <vault-service-principal-id> \
  --key-permissions get wrapKey unwrapKey
```

### 3.4 Auto-unseal với GCP Cloud KMS

```hcl
seal "gcpckms" {
  project     = "my-gcp-project"
  region      = "asia-southeast1"
  key_ring    = "vault-keyring"
  crypto_key  = "vault-unseal-key"

  # Credentials: dùng service account key hoặc Workload Identity
  # credentials = "/opt/vault/gcp-sa-key.json"
}
```

**Thiết lập GCP Cloud KMS:**

```bash
# Tạo Key Ring
gcloud kms keyrings create vault-keyring \
  --location asia-southeast1

# Tạo Crypto Key
gcloud kms keys create vault-unseal-key \
  --keyring vault-keyring \
  --location asia-southeast1 \
  --purpose encryption

# Gán quyền cho Service Account
gcloud kms keys add-iam-policy-binding vault-unseal-key \
  --keyring vault-keyring \
  --location asia-southeast1 \
  --member "serviceAccount:vault-sa@my-gcp-project.iam.gserviceaccount.com" \
  --role "roles/cloudkms.cryptoKeyEncrypterDecrypter"
```

### 3.5 Transit Auto-unseal (Vault-to-Vault)

Transit auto-unseal cho phép một Vault cluster (primary) quản lý unseal key cho Vault cluster khác (secondary). Phương pháp này hữu ích khi bạn không muốn phụ thuộc vào Cloud KMS.

```hcl
# Cấu hình trên Secondary Vault
seal "transit" {
  address         = "https://primary-vault.example.com:8200"
  token           = "hvs.transit-unseal-token"
  disable_renewal = false

  # Transit mount path và key name trên Primary Vault
  key_name        = "autounseal"
  mount_path      = "transit/"

  # TLS config
  tls_ca_cert     = "/opt/vault/tls/ca.crt"
}
```

**Thiết lập Transit trên Primary Vault:**

```bash
# Enable Transit secrets engine trên Primary Vault
vault secrets enable transit

# Tạo encryption key cho auto-unseal
vault write -f transit/keys/autounseal

# Tạo policy cho transit auto-unseal
vault policy write autounseal - <<EOF
path "transit/encrypt/autounseal" {
  capabilities = ["update"]
}
path "transit/decrypt/autounseal" {
  capabilities = ["update"]
}
EOF

# Tạo token cho secondary vault
vault token create \
  -orphan \
  -policy="autounseal" \
  -period=24h \
  -renewable=true
```

## 4. Recovery Keys

### 4.1 Recovery Keys là gì?

Khi sử dụng auto-unseal, Shamir's Secret Sharing không còn được dùng để bảo vệ Master Key (KMS đảm nhiệm). Tuy nhiên, Vault vẫn tạo **Recovery Keys** — cũng dựa trên Shamir's Secret Sharing — dùng cho các tác vụ quản trị quan trọng:

| Tác vụ | Shamir Unseal | Auto-unseal |
| --- | --- | --- |
| Unseal Vault | Unseal Keys | KMS (tự động) |
| Generate Root Token | Unseal Keys | Recovery Keys |
| Rekey | Unseal Keys | Recovery Keys |
| Seal Migration | Unseal Keys | Recovery Keys |

### 4.2 Sử dụng Recovery Keys

```bash
# Generate root token (với auto-unseal, dùng recovery keys)
vault operator generate-root -init

# Output:
# Nonce: 2f28b...
# Started: true
# Progress: 0/3
# Complete: false
# OTP: xxxxxxxxxxxxxxxxxxxxxxxxxxxx
# OTP Length: 28

# Nhập recovery keys (tương tự unseal)
vault operator generate-root
# Enter recovery key: ****
# Progress: 1/3

vault operator generate-root
# Enter recovery key: ****
# Progress: 2/3

vault operator generate-root
# Enter recovery key: ****
# Complete: true
# Encoded Token: xxxxxxxxxxxxxxx

# Decode token
vault operator generate-root -decode=xxxxxxxxxxxxxxx -otp=xxxxxxxxxxxxxxxxxxxxxxxxxxxx
# Output: hvs.new-root-token-xxx
```

## 5. Re-keying (vault operator rekey)

### 5.1 Khi nào cần Re-key?

- Một key holder rời tổ chức
- Cần thay đổi số lượng shares hoặc threshold
- Nghi ngờ một hoặc nhiều shares bị lộ
- Rotation định kỳ theo chính sách bảo mật

### 5.2 Quy trình Re-key

```bash
# Bước 1: Khởi tạo rekey
vault operator rekey -init \
  -key-shares=5 \
  -key-threshold=3

# Output:
# Nonce: 2f28b-xxxxx
# Started: true
# Rekey Progress: 0/3
# New Shares: 5
# New Threshold: 3
# Verification Required: false

# Bước 2: Cung cấp unseal keys hiện tại (đủ threshold)
vault operator rekey
# Enter unseal key: ****
# Rekey Progress: 1/3

vault operator rekey
# Enter unseal key: ****
# Rekey Progress: 2/3

vault operator rekey
# Enter unseal key: ****
# → Key 1: xxxxx (NEW unseal keys)
# → Key 2: xxxxx
# → Key 3: xxxxx
# → Key 4: xxxxx
# → Key 5: xxxxx
# Rekey complete!
```

### 5.3 Re-key với verification

Verification yêu cầu các key holders xác nhận rằng họ đã nhận đúng key mới trước khi áp dụng:

```bash
# Khởi tạo rekey với verification
vault operator rekey -init \
  -key-shares=5 \
  -key-threshold=3 \
  -verify

# Sau khi cung cấp đủ unseal keys cũ,
# Vault tạo keys mới nhưng CHƯA áp dụng

# Key holders xác nhận:
vault operator rekey -verify
# Enter new unseal key: ****
# Verify Progress: 1/3

# ... lặp lại cho đến khi đủ threshold
# → Rekey verified and applied!
```

### 5.4 Hủy rekey

```bash
# Hủy quy trình rekey đang diễn ra
vault operator rekey -cancel
```

## 6. Key Rotation (vault operator rotate)

### 6.1 Key Rotation là gì?

Key Rotation tạo một **Encryption Key mới** (DEK). Dữ liệu mới sẽ được mã hóa bằng key mới, dữ liệu cũ vẫn đọc được vì Vault giữ lại tất cả phiên bản key cũ.

```bash
# Rotate encryption key
vault operator rotate

# Output:
# Success! Rotated key
#
#     Key Term        3
#     Install Time    2025-01-15T10:30:00Z
```

> 🔑 **Phân biệt Re-key vs Rotate:**
>
> | | Re-key | Rotate |
> | --- | --- | --- |
> | Thay đổi | Master Key (unseal keys) | Encryption Key (DEK) |
> | Ảnh hưởng | Người giữ key | Dữ liệu mã hóa |
> | Khi nào | Key holder thay đổi | Rotation theo lịch |
> | Downtime | Không | Không |

### 6.2 Kiểm tra key status

```bash
vault operator key-status

# Output:
# Key Term        3
# Install Time    2025-01-15T10:30:00Z
# Encryptions     156892
```

### 6.3 Tự động rotation

Vault không có built-in scheduler cho key rotation. Bạn có thể dùng cron job hoặc automation tool:

```bash
# Cron job rotate key hàng tháng
# /etc/cron.d/vault-key-rotation
0 2 1 * * vault-admin VAULT_ADDR=https://vault.example.com:8200 VAULT_TOKEN=$(cat /etc/vault.d/.rotation-token) /usr/bin/vault operator rotate >> /var/log/vault/key-rotation.log 2>&1
```

## 7. Seal Migration

### 7.1 Seal Migration là gì?

Seal Migration cho phép chuyển đổi giữa các phương thức seal:

- **Shamir → Auto-unseal:** Chuyển từ unseal thủ công sang tự động
- **Auto-unseal → Shamir:** Quay lại unseal thủ công
- **Auto-unseal → Auto-unseal:** Chuyển sang KMS provider khác

### 7.2 Migration từ Shamir sang AWS KMS Auto-unseal

**Bước 1:** Chuẩn bị config mới:

```hcl
# vault-config-new.hcl — thêm seal stanza

seal "awskms" {
  region     = "ap-southeast-1"
  kms_key_id = "abcd-1234-efgh-5678-ijkl-9012"
}

storage "raft" {
  path    = "/opt/vault/data"
  node_id = "vault-node-1"
}

listener "tcp" {
  address     = "0.0.0.0:8200"
  tls_disable = false
  tls_cert_file = "/opt/vault/tls/vault.crt"
  tls_key_file  = "/opt/vault/tls/vault.key"
}

api_addr     = "https://vault.example.com:8200"
cluster_addr = "https://vault-node-1:8201"
```

**Bước 2:** Dừng Vault và khởi động với flag `-migrate`:

```bash
# Dừng Vault
systemctl stop vault

# Khởi động với config mới và flag migrate
vault server -config=/etc/vault.d/vault-config-new.hcl -migrate

# Vault sẽ yêu cầu unseal keys hiện tại (Shamir)
vault operator unseal -migrate
# Enter unseal key: ****
# → Migration Progress: 1/3

vault operator unseal -migrate
# Enter unseal key: ****
# → Migration Progress: 2/3

vault operator unseal -migrate
# Enter unseal key: ****
# → Seal migration complete!
```

**Bước 3:** Sau khi migration hoàn tất, dừng Vault và khởi động bình thường:

```bash
# Dừng Vault
# Ctrl+C hoặc kill process

# Khởi động bình thường (không cần -migrate nữa)
systemctl start vault

# Vault sẽ tự động unseal qua AWS KMS
vault status
# Sealed: false ← Auto-unsealed!
```

### 7.3 Migration từ Auto-unseal sang Shamir

```hcl
# vault-config-shamir.hcl — bỏ seal stanza, thêm disabled seal

# Vẫn giữ seal stanza cũ nhưng với disabled = true
seal "awskms" {
  region     = "ap-southeast-1"
  kms_key_id = "abcd-1234-efgh-5678-ijkl-9012"
  disabled   = true
}

storage "raft" {
  path    = "/opt/vault/data"
  node_id = "vault-node-1"
}
# ... phần còn lại giữ nguyên
```

```bash
# Khởi động với migrate flag
vault server -config=/etc/vault.d/vault-config-shamir.hcl -migrate

# Vault tự unseal (dùng KMS cũ lần cuối)
# Sau đó yêu cầu Recovery Keys để hoàn tất migration

vault operator unseal -migrate
# Enter recovery key: ****
# → Migration Progress: 1/3

# ... nhập đủ recovery keys
# → Seal migration complete! New unseal keys generated.
```

## 8. Best Practices

### 8.1 Shamir Unseal

- **Phân phối keys cho các người/team khác nhau** — không ai nắm giữ đủ threshold
- **Lưu trữ keys ở các vị trí vật lý khác nhau** (khác building, khác datacenter)
- **Sử dụng PGP encryption** cho mỗi key share
- **Định kỳ rekey** khi có thay đổi nhân sự
- **Tập luyện quy trình unseal** để đảm bảo team sẵn sàng

### 8.2 Auto-unseal

- **Giới hạn quyền truy cập KMS** chỉ cho Vault service account
- **Bật audit logging trên KMS** để theo dõi mọi thao tác encrypt/decrypt
- **Sử dụng cross-region KMS** hoặc backup strategy cho KMS key
- **Bảo vệ Recovery Keys** cẩn thận — chúng có thể dùng để generate root token
- **Cân nhắc Trust Model:** auto-unseal chuyển trust từ key holders sang KMS provider

### 8.3 Key Rotation

- **Rotate Encryption Key định kỳ** (hàng tháng hoặc hàng quý)
- **Rekey khi có thay đổi nhân sự** liên quan đến key holders
- **Ghi chép và audit** mọi thao tác rotation/rekey

## 9. Lab thực hành

### Lab 1: Khởi tạo và Unseal Vault với Shamir

```bash
# Chạy Vault dev cluster (3 nodes) bằng Docker Compose
cat > docker-compose.yml <<'EOF'
services:
  vault:
    image: hashicorp/vault:1.15
    cap_add:
      - IPC_LOCK
    ports:
      - "8200:8200"
    environment:
      VAULT_ADDR: "http://127.0.0.1:8200"
    volumes:
      - ./vault-config:/vault/config
      - vault-data:/vault/data
    command: vault server -config=/vault/config/config.hcl

volumes:
  vault-data:
EOF

mkdir -p vault-config

cat > vault-config/config.hcl <<'EOF'
storage "file" {
  path = "/vault/data"
}

listener "tcp" {
  address     = "0.0.0.0:8200"
  tls_disable = true
}

ui = true
EOF

# Khởi động
docker compose up -d

# Khởi tạo với 3 shares, threshold 2
export VAULT_ADDR="http://127.0.0.1:8200"
vault operator init -key-shares=3 -key-threshold=2

# Lưu các unseal keys và root token
# Unseal với 2 keys
vault operator unseal <key-1>
vault operator unseal <key-2>

# Xác nhận Vault đã unseal
vault status
```

### Lab 2: Seal Migration từ Shamir sang Transit Auto-unseal

```bash
# Giả sử đã có Primary Vault đang chạy ở localhost:8100
# 1. Thiết lập Transit trên Primary Vault
export VAULT_ADDR="http://127.0.0.1:8100"
vault secrets enable transit
vault write -f transit/keys/autounseal

vault policy write autounseal - <<EOF
path "transit/encrypt/autounseal" {
  capabilities = ["update"]
}
path "transit/decrypt/autounseal" {
  capabilities = ["update"]
}
EOF

TRANSIT_TOKEN=$(vault token create -orphan -policy="autounseal" -period=24h -format=json | jq -r '.auth.client_token')
echo "Transit Token: $TRANSIT_TOKEN"

# 2. Cập nhật config Secondary Vault
cat > vault-config/config-transit.hcl <<EOF
seal "transit" {
  address   = "http://primary-vault:8100"
  token     = "$TRANSIT_TOKEN"
  key_name  = "autounseal"
  mount_path = "transit/"
}

storage "file" {
  path = "/vault/data"
}

listener "tcp" {
  address     = "0.0.0.0:8200"
  tls_disable = true
}

ui = true
EOF

# 3. Dừng Secondary Vault và khởi động với migrate
docker compose stop vault
docker compose run vault vault server -config=/vault/config/config-transit.hcl -migrate
# → Cung cấp unseal keys cũ với -migrate flag
```

## Tổng kết

| Khái niệm | Mô tả |
| --- | --- |
| **Seal/Unseal** | Cơ chế bảo vệ Master Key — Vault không hoạt động khi sealed |
| **Shamir's Secret Sharing** | Chia Master Key thành N shares, cần T shares để tái tạo |
| **Auto-unseal** | Ủy quyền bảo vệ Master Key cho Cloud KMS — unseal tự động |
| **Recovery Keys** | Thay thế Unseal Keys khi dùng auto-unseal — cho tác vụ quản trị |
| **Re-key** | Tạo lại Master Key và các unseal/recovery keys |
| **Key Rotation** | Tạo Encryption Key (DEK) mới — dữ liệu mới dùng key mới |
| **Seal Migration** | Chuyển đổi giữa các phương thức seal (Shamir ↔ Auto-unseal) |

Bài tiếp theo, chúng ta sẽ tìm hiểu về **Tokens, Leases và Renewal** — hệ thống xác thực và quản lý vòng đời truy cập trong Vault.
