---
id: 019d8b30-b204-7001-c002-e0c5f8200104
title: 'レッスン 4: 封印/封印解除、自動封印解除、および回復キー'
slug: bai-4-seal-unseal-auto-unseal-va-recovery-keys
description: Vault のシール/シール解除メカニズム、Shamir 秘密共有、キー共有、およびキーしきい値を深く理解します。 AWS KMS、Azure Key Vault、GCP Cloud KMS、Transit (Vault-to-Vault)、HSM (PKCS#11) による自動解除。回復キー、キーの再生成 (ボールト オペレーターのキーの再生成)、キーのローテーション、およびシールの移行。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 4
section_title: 'パート 1: HashiCorp Vault プラットフォーム'
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault の基本から上級まで
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: ja
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
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 D​​evSecOps — レッスン 4</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">レッスン 4: 封印/封印解除、自動封印解除および</tspan>
      <tspan x="60" dy="42">Recovery Keys</tspan>
  </text>

  <!-- Series subtitle -->
<text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault の基本から上級まで</text>

  <!-- Section -->
<text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: HashiCorp Vault プラットフォーム</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

＃＃ 導入

HashiCorp Vault が起動すると、ストレージ バックエンド内のすべてのデータは **暗号化** 状態になります。 Vault は、**シールを解除**するまで、シークレットの読み取りまたは書き込みを行うことができません。これは、Vault がデータにアクセスできるように復号化キー (マスター キー) を提供するプロセスです。これは最も重要な保護層であり、攻撃者がすべてのストレージを乗っ取った場合でもシークレットを読み取ることができないようにします。

このレッスンでは以下について詳しく説明します。

- Vault 内の封印/封印解除メカニズムと暗号化アーキテクチャ
- シャミールの秘密共有アルゴリズム
- Cloud KMS プロバイダーによる自動解凍
- 回復キーとキー再生成プロセス
- キーのローテーションとシールの移行

## 1. Vault の暗号化アーキテクチャ

### 1.1 暗号化キーとマスターキー

Vault は 2 層の暗号化アーキテクチャを使用します。

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

- **暗号化キー (DEK - データ暗号化キー):** AES-256-GCM キーは、ストレージ内のすべてのデータの暗号化/復号化に使用されます。暗号化キー自体は、暗号化された形式でストレージに保存されます。
- **マスターキー:** 暗号化キーの暗号化/復号化に使用されるキー。マスター キーはストレージに**決して**保存されません。Vault を起動するたびにマスター キーを指定する必要があります。

### 1.2 密閉状態と非密閉状態

```bash
# Kiểm tra trạng thái Vault
vault status
```

Vault が **封印**された場合の結果:

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

Vault が **封印** 状態の場合:

- Vault はストレージの場所とアクセス方法を認識しています (構成済み)。
- Vault はデータを**復号化できません**
- すべての API リクエスト (`sys/seal-status`、`sys/unseal` を除く) は拒否されます。
- Vault は基本的に **非アクティブ**

## 2. Shamir's Secret Sharing

### 2.1 シャミールの秘密共有アルゴリズム

Shamir's Secret Sharing (SSS) は、シークレットを N 個のシェアに分割するアルゴリズムで、元のシークレットを再作成するには少なくとも T 個のシェアが必要になります。 T 個未満のパーツでは、秘密に関する情報を推測することは不可能です。

**数学的原理:**

- 秘密 `S` は、`T-1` 次の多項式の自由係数 (a₀) として設定されます。
- 残りの係数 (a₁、a₂、...、aₜ₋₁) はランダムに選択されます
- 各シェアは多項式上の点です: `(xᵢ, f(xᵢ))`
- T ポイントでは、**ラグランジュ補間**を使用して多項式を見つけます → `a₀ = S` を取得します

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

### 2.2 Vault の初期化 (Vault Operator init)

初めて Vault を初期化するときに、キー共有とキーしきい値を設定します。

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

> ⚠️ **重要:** 開封キーを別の場所に保管し、管理する別の担当者/チームに割り当てます。ルート トークンも慎重に保護する必要があり、セットアップの完了後に取り消す必要があります。

### 2.3 PGP 暗号化による初期化

セキュリティを強化するために、各アンシール キーを各キー ホルダーの PGP キーで暗号化できます。

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

次に、各開封キーは対応する PGP 公開キーで暗号化されます。秘密キーの所有者のみが自分の共有キーを復号化できます。

### 2.4 開封プロセス

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

または、API 経由で封印を解除します。

```bash
# Unseal qua HTTP API
curl -X PUT \
  "${VAULT_ADDR}/v1/sys/unseal" \
  -H "Content-Type: application/json" \
  -d '{"key": "4jYbl2CBIv6SpkKj6Hos2iRyY+GC2/+4/..."}'

# Lặp lại với các key khác cho đến khi đủ threshold
```

### 2.5 金庫を再度封印する

```bash
# Seal Vault (yêu cầu quyền sudo trên sys/seal)
vault operator seal

# Sau khi seal, Vault sẽ từ chối mọi request
# và cần unseal lại để hoạt động
```

> 🔒 **Vault を封鎖する必要があるのはどのような場合ですか?** 侵入が検出されたとき、緊急メンテナンス中、またはすべての秘密へのアクセスを直ちに遮断する必要があるとき。

## 3. Auto-unseal

手動のシール解除プロセス (Shamir) は、高度なセキュリティ要件がある環境に適していますが、特に Vault 自体を再起動する必要がある場合 (HA フェイルオーバー、自動スケーリング、クラッシュ リカバリ)、運用上の問題が発生します。 **自動開封** は、マスター キーの保護を外部 KMS サービスに委任することで、この問題を解決します。

### 3.1 作用機序

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

### 3.2 AWS KMS による自動シール解除

**ステップ 1:** AWS で KMS キーを作成します。

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

**ステップ 2:** Vault の IAM ポリシーを作成します。

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

**ステップ 3:** ボールトの構成:

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

**ステップ 4:** 自動開封で Vault を初期化します。

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

> 📌 **注:** 自動解除を使用すると、Vault は起動時に自動的にシールを解除します。手動による介入は必要ありません。回復キーは管理タスク (キーの再生成、ルート トークンの生成) に使用されます。

### 3.3 Azure Key Vault による自動シール解除

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

**Azure Key Vault をセットアップします:**

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

### 3.4 GCP Cloud KMS による自動シール解除

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

**GCP Cloud KMS を設定します:**

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

トランジット自動アンシールにより、1 つの Vault クラスタ (プライマリ) が別の Vault クラスタ (セカンダリ) のアンシール キーを管理できるようになります。この方法は、Cloud KMS に依存したくない場合に便利です。

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

**プライマリ ボールトでトランジットを設定します:**

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

### 4.1 回復キーとは何ですか?

自動解除を使用する場合、シャミールの秘密共有はマスター キーの保護に使用されなくなります (KMS が処理します)。ただし、Vault は重要な管理タスクのために、これも Shamir の秘密共有に基づいて **回復キー** を生成します。

|タスク |シャミール・アンシール |自動開封 |
| --- | --- | --- |
|金庫の封印を解く |キーの封印を解除する | KMS（自動） |
| Generate Root Token | Unseal Keys | Recovery Keys |
| Rekey | Unseal Keys | Recovery Keys |
| Seal Migration | Unseal Keys | Recovery Keys |

### 4.2 回復キーの使用

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

### 5.1 キーの再生成が必要になるのはどのような場合ですか?

- キーホルダーが組織を離れる
- シェア数またはしきい値を変更する必要がある
- 1 つ以上の株式が公開されている疑いがある
- プライバシーポリシーに従って定期的にローテーションします

### 5.2 キー再生成手順

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

### 5.3 検証を伴うキーの再生成

検証では、キーホルダーの所有者は、申請する前に正しい新しいキーを受け取ったことを確認する必要があります。

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

### 5.4 キー再生成のキャンセル

```bash
# Hủy quy trình rekey đang diễn ra
vault operator rekey -cancel
```

## 6. Key Rotation (vault operator rotate)

### 6.1 キーローテーションとは何ですか?

キーのローテーションにより、新しい **暗号化キー** (DEK) が作成されます。新しいデータは新しいキーで暗号化されますが、Vault は古いキーのバージョンをすべて保持しているため、古いデータは引き続き読み取ることができます。

```bash
# Rotate encryption key
vault operator rotate

# Output:
# Success! Rotated key
#
#     Key Term        3
#     Install Time    2025-01-15T10:30:00Z
```

> 🔑 **キー再設定と回転を区別してください:**
>
> | | Re-key | Rotate |
> | --- | --- | --- |
> |変更 |マスターキー (封印解除キー) |暗号化キー (DEK) |
> |影響 |キーホルダー |暗号化されたデータ |
> |いつ |キーホルダー変更 |スケジュールされたローテーション |
> |ダウンタイム |いいえ |いいえ |

### 6.2 キーのステータスを確認する

```bash
vault operator key-status

# Output:
# Key Term        3
# Install Time    2025-01-15T10:30:00Z
# Encryptions     156892
```

### 6.3 自動回転

Vault には、キー ローテーション用の組み込みスケジューラがありません。 cron ジョブまたは自動化ツールを使用できます。

```bash
# Cron job rotate key hàng tháng
# /etc/cron.d/vault-key-rotation
0 2 1 * * vault-admin VAULT_ADDR=https://vault.example.com:8200 VAULT_TOKEN=$(cat /etc/vault.d/.rotation-token) /usr/bin/vault operator rotate >> /var/log/vault/key-rotation.log 2>&1
```

## 7. Seal Migration

### 7.1 シールの移行とは何ですか?

シールの移行により、シール方法を切り替えることができます。

- **Shamir → 自動開封:** 手動から自動開封に切り替えます
- **自動開封 → Shamir:** 手動開封に戻ります
- **自動シール解除 → 自動シール解除:** 別の KMS プロバイダーに切り替える

### 7.2 Shamir から AWS KMS 自動シール解除への移行

**ステップ 1:** 新しい構成を準備します:

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

**ステップ 2:** Vault を停止し、フラグ `-migrate` を使用して起動します。

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

**ステップ 3:** 移行が完了したら、Vault を停止し、通常どおり起動します。

```bash
# Dừng Vault
# Ctrl+C hoặc kill process

# Khởi động bình thường (không cần -migrate nữa)
systemctl start vault

# Vault sẽ tự động unseal qua AWS KMS
vault status
# Sealed: false ← Auto-unsealed!
```

### 7.3 自動解凍から Shamir への移行

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

- **さまざまな人/チームにキーを配布します** - 誰もしきい値全体を保持しません
- **キーを異なる物理的な場所に保管** (異なる建物、異なるデータセンター)
- **各キー共有に PGP 暗号化を使用**
- **人事異動がある場合は定期的にキーを再作成**
- **開封プロセスを練習**して、チームの準備が整っていることを確認します

### 8.2 Auto-unseal

- **KMS アクセスを Vault サービス アカウントのみに制限**
- **KMS で監査ログを有効にする** と、すべての暗号化/復号化操作を追跡できます。
- **クロスリージョン KMS を使用** または KMS キーのバックアップ戦略を使用する
- **回復キーは慎重に保護してください** - ルート トークンの生成に使用される可能性があります
- **信頼モデルを考慮する:** 自動開封により、キー所有者から KMS プロバイダーに信頼が転送されます。

### 8.3 Key Rotation

- **暗号化キーを定期的にローテーションします** (毎月または四半期ごと)
- **キーホルダーに関連する人事異動がある場合のキーの再作成**
- **すべてのローテーション/キー再生成操作を**記録および監査**

## 9. 実習ラボ

### ラボ 1: Shamir を使用して Vault を初期化して封印を解除する

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

### ラボ 2: シャミールからトランジット自動アンシールへのシールの移行

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

＃＃ まとめ

|コンセプト |説明 |
| --- | --- |
| **封印/封印解除** |マスター キー保護メカニズム — 密封されている場合、Vault は機能しません |
| **シャミールの秘密の共有** |マスターキーを N 個のシェアに分割し、再作成するには T 個のシェアが必要 |
| **自動開封** | Cloud KMS のマスターキーを保護するための認証 - 自動解除 |
| **回復キー** |自動シール解除を使用する場合は、シール解除キーを置き換えます — 管理タスク用 |
| **キーを再生成** |マスターキーと封印解除/回復キーを再生成 |
| **キーのローテーション** |新しい暗号化キー (DEK) の作成 — 新しいデータは新しいキーを使用します。
| **シールの移行** |シール方法の切り替え (Shamir ↔ Auto-unseal) |

次の記事では、**トークン、リース、更新** (Vault のアクセス ライフサイクル管理および認証システム) について学びます。
