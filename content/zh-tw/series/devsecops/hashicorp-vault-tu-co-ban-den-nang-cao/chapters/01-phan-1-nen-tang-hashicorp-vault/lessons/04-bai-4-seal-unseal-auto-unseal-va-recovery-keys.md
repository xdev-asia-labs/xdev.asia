---
id: 019d8b30-b204-7001-c002-e0c5f8200104
title: 第 4 課：密封/開封、自動開封和恢復密鑰
slug: bai-4-seal-unseal-auto-unseal-va-recovery-keys
description: >-
  深入了解Vault的密封/解封機制、Shamir秘密共享、密鑰共享和密鑰閾值。使用 AWS KMS、Azure Key Vault、GCP Cloud
  KMS、Transit（Vault 到 Vault）、HSM (PKCS#11) 自動解封。恢復密鑰、重新密鑰（金庫操作員重新密鑰）、密鑰輪換和密封遷移。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 4
section_title: 第 1 部分：HashiCorp Vault 平台
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault 從基礎到高級
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="最大寬度：100%;高度：自動；邊框半徑：12px；邊距底部：1.5rem;">
  <定義>
    <線性漸變 id="bg-3766" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </線性漸層>
  </defs>

  <!-- 背景 -->
  <矩形寬度=“1200”高度=“340”rx=“12”填滿=“url（#bg-3766）”/>

  <!-- 裝飾品 -->
  <g>
    <circle cx="774" cy="112" r="22" fill="#f472b6" opacity="0.07"/>
    <circle cx="948" cy="226" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="622" cy="80" r="36" fill="#f472b6" opacity="0.11"/>
    <circle cx="796" cy="194" r="28" fill="#f472b6" opacity="0.13"/>
    <circle cx="970" cy="48" r="20" fill="#f472b6" opacity="0.05"/>
    <圓cx =“750”cy =“80”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“750”cy =“108”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“750”cy =“136”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“750”cy =“164”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“778”cy =“80”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“778”cy =“108”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <圓cx =“806”cy =“80”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“806”cy =“108”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“806”cy =“136”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“806”cy =“164”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“834”cy =“80”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“834”cy =“108”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“834”cy =“136”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“834”cy =“164”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <圓cx =“862”cy =“108”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“862”cy =“136”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <圓cx =“890”cy =“80”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“890”cy =“108”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“890”cy =“136”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“890”cy =“164”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <line x1 =“600”y1 =“152”x2 =“1100”y2 =“232”筆畫=“#f472b6”筆畫寬度=“0.5”不透明度=“0.1”/>
    <line x1 =“650”y1 =“182”x2 =“1050”y2 =“252”筆畫=“#f472b6”筆畫寬度=“0.5”不透明度=“0.08”/>
    <多邊形點=「975.3826859021799,138.5 975.3826859021799,165.5 952,179 928.6173140978201,165.5 928. 952,125”填滿=“無”描邊=“#f472b6”描邊寬度=“1”不透明度=“0.12”/>
  </g>

  <!-- 重音欄 -->
  <矩形x =“60”y =“50”寬度=“4”高度=“60”rx =“2”填滿=“#f472b6”/><!-- 類別徽章 -->
  <矩形x =“80”y =“50”寬度=“121”高度=“28”rx =“14”填滿=“#f472b6”不透明度=“0.15”/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — 第 4 堂課</text>

  <!-- 標題 -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">第 4 課：密封/開封、自動開封和</tspan>
      <tspan x="60" dy="42">恢復金鑰</tspan>
  </文字>

  <!-- 系列字幕 -->
<text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault 從基礎到進階</text>

  <!-- 部分 -->
<text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：HashiCorp Vault 平台</text>

  <!-- xDev 浮水印 -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## 介紹

當 HashiCorp Vault 啟動時，儲存後端中的所有資料都處於**加密**狀態。 Vault 無法讀取或寫入任何秘密，直到**解封** - 提供解密金鑰（主金鑰）以便 Vault 可以存取資料的過程。這是最重要的保護層，確保即使攻擊者接管了所有存儲，他們仍然無法讀取秘密。

本課將深入探討：

- Vault內的密封/解封機制與加密架構
- Shamir 的秘密共享演算法
- 與雲端 KMS 供應商自動解封
- 恢復金鑰和重新金鑰過程
- 鑰匙輪換與密封遷移

## 1.Vault的加密架構

### 1.1 加密金鑰與主金鑰

Vault採用兩層加密架構：

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

- **加密金鑰（DEK - 資料加密金鑰）：** AES-256-GCM 金鑰用於加密/解密儲存中的所有資料。加密金鑰本身以加密形式儲存在記憶體中。
- **主金鑰：** 用於加密/解密加密金鑰的金鑰。主密鑰**從不**儲存在儲存中 - 每次 Vault 啟動時都必須提供主密鑰。

### 1.2 密封與未密封狀態

```bash
# Kiểm tra trạng thái Vault
vault status
```

Vault **密封**時的結果：

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

當Vault處於**密封**狀態時：

- Vault知道儲存在哪裡以及如何存取它（已配置）
- Vault **無法**解密任何數據
- 所有 API 要求（`sys/seal-status`、`sys/unseal` 除外）均被拒絕
- 保險庫基本上**不活動**

## 2. Shamir 的秘密分享

### 2.1 Shamir 的秘密共享演算法

Shamir 的秘密共享（SSS）是一種將秘密分為 N 份的演算法，因此至少需要 T 份才能重新創建原始秘密。如果少於 T 個部分，就不可能推斷出任何關於秘密的資訊。

**數學原理：**- 秘密 `S` 設定為 `T-1` 次多項式的自由係數 (a₀)
- 其餘係數 (a₁, a2, ..., aₜ₋₁) 是隨機選擇的
- 每個份額都是多項式上的一個點：`(xᵢ, f(xᵢ))`
- 對於T點，我們使用**拉格朗日插值**來求多項式→得到`a₀ = S`

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

### 2.2 Vault初始化（Vault操作員初始化）

首次初始化 Vault 時，配置金鑰共用和金鑰閾值：

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

> ⚠️ **重要：** 將啟封金鑰儲存在不同的位置，將它們指派給不同的人員/團隊進行管理。根令牌也必須小心保護，並應在設定完成後撤銷。

### 2.3 使用 PGP 加密進行初始化

為了提高安全性，您可以使用每個金鑰持有者的 PGP 金鑰對每個開封金鑰進行加密：

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

然後，每個解封金鑰都使用相應的 PGP 公鑰進行加密——只有私鑰的所有者才能解密他或她的份額。

### 2.4 開封過程

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

或透過API解封：

```bash
# Unseal qua HTTP API
curl -X PUT \
  "${VAULT_ADDR}/v1/sys/unseal" \
  -H "Content-Type: application/json" \
  -d '{"key": "4jYbl2CBIv6SpkKj6Hos2iRyY+GC2/+4/..."}'

# Lặp lại với các key khác cho đến khi đủ threshold
```

### 2.5 再次封印金庫

```bash
# Seal Vault (yêu cầu quyền sudo trên sys/seal)
vault operator seal

# Sau khi seal, Vault sẽ từ chối mọi request
# và cần unseal lại để hoạt động
```

> 🔒 **什麼時候該密封金庫？ ** 當偵測到入侵時，在緊急維護期間，或當您需要立即切斷對所有秘密的存取時。

## 3.自動解封

手動解封程序 (Shamir) 適用於安全性要求較高的環境，但會導致操作困難 - 特別是當 Vault 需要自行重新啟動時（HA 故障轉移、自動擴展、崩潰恢復）。 **自動解封**透過將主金鑰保護委託給外部 KMS 服務來解決此問題。

### 3.1 作用機制

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

### 3.2 使用 AWS KMS 自動解封

**步驟 1：** 在 AWS 上建立 KMS 金鑰：

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

**步驟 2:** 為 Vault 建立 IAM 策略：

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

**步驟 3：** 保管庫配置：

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

**步驟 4：** 使用自動解封初始化 Vault：

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

> 📌 **注意：** 透過自動解封，Vault 在啟動時自動解封 - 無需手動幹預。恢復金鑰用於管理任務（重新產生金鑰、產生根令牌）。

### 3.3 使用 Azure Key Vault 自動解封

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

**設定 Azure Key Vault：**

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

### 3.4 使用 GCP Cloud KMS 自動解封

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

**設定 GCP Cloud KMS：**

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

### 3.5 運輸自動啟動（保管庫到保管庫）

傳輸自動解封可讓一個 Vault 叢集（主）管理另一個 Vault 叢集（輔助）的解封金鑰。當您不想依賴 Cloud KMS 時，此方法非常有用。

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

**在主保管庫上設定 Transit：**

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

## 4. 復原金鑰

### 4.1 什麼是恢復金鑰？

使用自動解封時，Shamir 的秘密共享不再用於保護主金鑰（KMS 負責處理）。但是，Vault 仍然會產生 **恢復金鑰** — 也基於 Shamir 的秘密共享 — 用於重要的管理任務：

|任務|沙米爾解封|自動開封|
| ---| ---| ---|
|解封金庫 |開封鑰匙 | KMS（自動）|
|產生根令牌 |開封鑰匙 |恢復金鑰|
|重新加密 |開封鑰匙 |恢復金鑰|
|海豹遷徙|開封鑰匙 |恢復金鑰|

### 4.2 使用復原金鑰

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
```## 5. 重新輸入金鑰（保管庫操作員重新輸入金鑰）

### 5.1 什麼時候需要重新金鑰？

- 鑰匙持有者離開組織
- 需要更改股份數量或門檻
- 懷疑一股或多股暴露
- 根據隱私權政策定期輪換

### 5.2 重新產生金鑰程序

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

### 5.3 透過驗證重新產生金鑰

驗證要求密鑰持有者在申請之前確認他們已收到正確的新密鑰：

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

### 5.4 取消重新產生金鑰

```bash
# Hủy quy trình rekey đang diễn ra
vault operator rekey -cancel
```

## 6. 密鑰輪換（保管庫操作員輪換）

### 6.1 什麼是金鑰輪換？

金鑰輪換會建立新的**加密金鑰** (DEK)。新資料將使用新金鑰加密，舊資料仍然可讀，因為 Vault 保留所有舊金鑰版本。

```bash
# Rotate encryption key
vault operator rotate

# Output:
# Success! Rotated key
#
#     Key Term        3
#     Install Time    2025-01-15T10:30:00Z
```

> 🔑 **區分重新加密與旋轉：**
>
> | |重新輸入金鑰 |旋轉 |
> | ---| ---| ---|
> |改變 |萬能鑰匙（開封鑰匙）|加密金鑰 (DEK) |
> |影響力 |鑰匙圈|加密資料 |
> |當 |鑰匙圈變更 |預定輪換 |
> |停機時間 |沒有 |沒有 |

### 6.2 檢查按鍵狀態

```bash
vault operator key-status

# Output:
# Key Term        3
# Install Time    2025-01-15T10:30:00Z
# Encryptions     156892
```

### 6.3 自動旋轉

Vault 沒有用於密鑰輪換的內建排程器。您可以使用 cron 作業或自動化工具：

```bash
# Cron job rotate key hàng tháng
# /etc/cron.d/vault-key-rotation
0 2 1 * * vault-admin VAULT_ADDR=https://vault.example.com:8200 VAULT_TOKEN=$(cat /etc/vault.d/.rotation-token) /usr/bin/vault operator rotate >> /var/log/vault/key-rotation.log 2>&1
```

## 7. 海豹遷移

### 7.1 什麼是海豹遷移？

密封遷移允許在密封方法之間切換：

- **Shamir → 自動開封：** 從手動開封切換到自動開封
- **自動開封 → Shamir:** 返回手動開封
- **自動解封 → 自動解封：** 切換到另一個 KMS 供應商

### 7.2 從 Shamir 遷移到 AWS KMS 自動解封

**第 1 步：** 準備新設定：

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

**步驟 2：** 停止 Vault 並使用標誌 `-migrate` 啟動它：

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

**步驟3：** 遷移完成後，停止Vault並正常啟動：

```bash
# Dừng Vault
# Ctrl+C hoặc kill process

# Khởi động bình thường (không cần -migrate nữa)
systemctl start vault

# Vault sẽ tự động unseal qua AWS KMS
vault status
# Sealed: false ← Auto-unsealed!
```

### 7.3 從自動解封遷移到 Shamir

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

## 8. 最佳實踐

### 8.1 沙米爾解封

- **將金鑰分發給不同的人/團隊** - 沒有人掌握完整的閾值
- **將金鑰儲存在不同的實體位置**（不同的建築物，不同的資料中心）
- **對每個金鑰共用使用 PGP 加密**
- **當人員變動時定期重新產生金鑰**
- **練習開封過程**以確保團隊做好準備

### 8.2 自動解封

- **僅限制 KMS 存取** Vault 服務帳戶
- **在 KMS 上啟用審核日誌記錄**以追蹤所有加密/解密操作
- **使用跨區域KMS**或KMS金鑰備份策略
- **小心保護復原金鑰** - 它們可用於產生根令牌
- **考慮信任模型：** 自動解封將信任從金鑰持有者轉移到 KMS 供應商

### 8.3 金鑰輪換

- **定期輪換加密金鑰**（每月或每季）
- **當與金鑰持有者相關的人員發生變更**時重新分配金鑰
- **記錄和審核**所有輪換/密鑰更新操作

## 9. 實作實驗室

### 實驗 1：使用 Shamir 初始化並解封 Vault

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

### 實驗室 2：密封從 Shamir 遷移到 Transit 自動解封

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

## 總結|概念 |描述 |
| ---| ---|
| **密封/啟封** |萬能鑰匙保護機制－Vault在密封時不起作用|
| **沙米爾的秘密分享** | Master Key分為N份，需要T份複製 |
| **自動開封** |雲端KMS主金鑰授權保護－自動解封|
| **恢復金鑰** |使用自動解封時取代解封金鑰 — 用於管理任務 |
| **重新密鑰** |重新產生主密鑰並開封/恢復密鑰 |
| **按鍵輪換** |建立新的加密金鑰 (DEK) — 新資料使用新金鑰 |
| **海豹遷移** |在密封方法之間切換（Shamir ↔ 自動解封）|

在下一篇文章中，我們將了解**令牌、租賃和續約** - Vault 中的存取生命週期管理和身分驗證系統。
