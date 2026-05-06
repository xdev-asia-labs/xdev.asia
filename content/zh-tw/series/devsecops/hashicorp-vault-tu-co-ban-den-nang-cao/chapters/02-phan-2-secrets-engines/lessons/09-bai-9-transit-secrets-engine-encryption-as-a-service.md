---
id: 019d8b30-b209-7001-c002-e0c5f8200109
title: 第 9 課：Transit Secrets Engine - 加密即服務
slug: bai-9-transit-secrets-engine-encryption-as-a-service
description: 傳輸概念、加密金鑰、加密/解密、金鑰輪換、重新包裝、金鑰類型、HMAC、簽章/驗證、資料金鑰產生、收斂加密、批次作業、BYOK。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 9
section_title: 第 2 部分：秘密引擎 - 管理秘密
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault 從基礎到高級
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="最大寬度：100%;高度：自動；邊框半徑：12px；邊距底部：1.5rem;">
  <定義>
    <線性漸變 id="bg-4462" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </線性漸層>
  </defs>

  <!-- 背景 -->
  <矩形寬度=“1200”高度=“340”rx=“12”填滿=“url（#bg-4462）”/>

  <!-- 裝飾品 -->
  <g>
    <circle cx="840" cy="50" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1080" cy="230" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="820" cy="150" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1060" cy="70" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="800" cy="250" r="8" fill="#38bdf8" opacity="0.05"/>
    <圓cx =“750”cy =“80”r =“1.5”填入=“#38bdf8”不透明度=“0.15”/>
    <圓cx =“750”cy =“108”r =“1.5”填入=“#38bdf8”不透明度=“0.15”/>
    <圓cx =“750”cy =“136”r =“1.5”填入=“#38bdf8”不透明度=“0.15”/>
    <圓cx =“750”cy =“164”r =“1.5”填入=“#38bdf8”不透明度=“0.15”/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <圓cx =“806”cy =“108”r =“1.5”填入=“#38bdf8”不透明度=“0.15”/>
    <圓cx =“806”cy =“136”r =“1.5”填入=“#38bdf8”不透明度=“0.15”/>
    <圓cx =“806”cy =“164”r =“1.5”填入=“#38bdf8”不透明度=“0.15”/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <圓cx =“834”cy =“108”r =“1.5”填入=“#38bdf8”不透明度=“0.15”/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <圓cx =“890”cy =“80”r =“1.5”填入=“#38bdf8”不透明度=“0.15”/>
    <圓cx =“890”cy =“108”r =“1.5”填入=“#38bdf8”不透明度=“0.15”/>
    <圓cx =“890”cy =“136”r =“1.5”填入=“#38bdf8”不透明度=“0.15”/>
    <圓cx =“890”cy =“164”r =“1.5”填入=“#38bdf8”不透明度=“0.15”/>
    <line x1 =“600”y1 =“170”x2 =“1100”y2 =“250”筆觸=“#38bdf8”筆觸寬度=“0.5”不透明度=“0.1”/>
    <line x1 =“650”y1 =“200”x2 =“1050”y2 =“270”筆觸=“#38bdf8”筆畫寬度=“0.5”不透明度=“0.08”/>
    <多邊形點=「991.650635094611,157.5 991.650635094611,182.5 970,195 948.349364905389,182.5 948.349364539,369,182.5 948.349369,1939,199,19969,1939,58939,1939,1939,199. 970,145”填滿=“無”描邊=“#38bdf8”描邊寬度=“1”不透明度=“0.12”/>
  </g>

  <!-- 重音欄 -->
  <矩形x =“60”y =“50”寬度=“4”高度=“60”rx =“2”填滿=“＃38bdf8”/><!-- 類別徽章 -->
  <矩形x =“80”y =“50”寬度=“121”高度=“28”rx =“14”填滿=“＃38bdf8”不透明度=“0.15”/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🔒 DevSecOps — 第 9 堂課</text>

  <!-- 標題 -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">第 9 課：Transit Secrets Engine - 加密</tspan>
      <tspan x="60" dy="42">作為服務</tspan>
  </文字>

  <!-- 系列字幕 -->
<text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault 從基礎到進階</text>

  <!-- 部分 -->
<text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：秘密引擎 - 管理機密</text>

  <!-- xDev 浮水印 -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## 介紹

Transit Secrets Engine 提供**加密即服務 (EaaS)** — 允許應用程式在不管理加密金鑰的情況下加密和解密資料**。資料透過 Vault 進行「傳輸中」加密並返回應用程序，Vault 不儲存資料。

### 為什麼要使用公車？

- **單獨的金鑰管理和資料儲存**：應用程式永遠不會看到加密金鑰
- **密鑰輪換**：輪換密鑰而不重新加密所有數據
- **集中式加密**：確保使用正確的演算法和金鑰大小
- **審計追蹤**：記錄所有加密操作
- **合規性**：滿足 PCI-DSS 和 HIPAA 金鑰管理要求

### 營運模式

```
┌──────────────┐                    ┌───────────┐
│  Application │                    │   Vault   │
│              │                    │  Transit  │
│  plaintext ──┼── encrypt ────────▶│           │
│              │◀── ciphertext ─────┼──         │
│              │                    │           │
│  ciphertext ─┼── decrypt ────────▶│           │
│              │◀── plaintext ──────┼──         │
│              │                    │           │
│  Lưu cipher  │                    │ Quản lý   │
│  vào DB      │                    │ keys      │
└──────────────┘                    └───────────┘
```

> **重要提示：** Vault Transit 不儲存資料。它只是執行加密操作並傳回結果。

## 1. 啟用 Transit Secrets Engine

```bash
# Enable transit engine
vault secrets enable transit

# Xác nhận
vault secrets list | grep transit
# transit/    transit    transit_abc123    n/a
```

## 2. 加密金鑰 — 建立與管理

### 2.1。產生加密金鑰

```bash
# Tạo key mặc định (AES-256-GCM)
vault write -f transit/keys/my-app-key

# Tạo key với type cụ thể
vault write transit/keys/payment-key \
  type="aes256-gcm96" \
  exportable=false \
  allow_plaintext_backup=false

# Đọc thông tin key
vault read transit/keys/my-app-key

# Output:
# Key                       Value
# ---                       -----
# allow_plaintext_backup    false
# auto_rotate_period        0s
# deletion_allowed          false
# derived                   false
# exportable                false
# imported_key              false
# keys                      map[1:1705312200]
# latest_version            1
# min_available_version     0
# min_decryption_version    1
# min_encryption_version    0
# name                      my-app-key
# supports_decryption       true
# supports_derivation       true
# supports_encryption       true
# supports_signing          false
# type                      aes256-gcm96
```

### 2.2。按鍵類型

|鑰匙類型 |演算法|使用 |
|---|---|---|
| `aes128-gcm96` | AES-128-GCM |加密/解密 |
| `aes256-gcm96` | AES-256-GCM（預設）|加密/解密 |
| `chacha20-poly1305` | ChaCha20-Poly1305 | ChaCha20-Poly1305 |加密/解密 |
| `ed25519` |埃德25519 |簽名/驗證 |
| `ecdsa-p256` | ECDSA P-256 |簽名/驗證 |
| `ecdsa-p384` | ECDSA P-384 |簽名/驗證 |
| `ecdsa-p521` | ECDSA P-521 |簽名/驗證 |
| `rsa-2048` | RSA 2048 位元 |加密/解密、簽章/驗證 |
| `rsa-3072` | RSA 3072 位元 |加密/解密、簽章/驗證 |
| `rsa-4096` | RSA 4096 位元 |加密/解密、簽章/驗證 |
| `hmac` |哈馬克| HMAC 生成 |

### 2.3。按鍵配置

```bash
# Cho phép xóa key (mặc định: false)
vault write transit/keys/my-app-key/config \
  deletion_allowed=true

# Thiết lập auto-rotation (mỗi 30 ngày)
vault write transit/keys/my-app-key/config \
  auto_rotate_period="720h"

# Giới hạn minimum encryption version
vault write transit/keys/my-app-key/config \
  min_encryption_version=2

# Giới hạn minimum decryption version
vault write transit/keys/my-app-key/config \
  min_decryption_version=1
```

## 3. 加密與解密

### 3.1。加密（加密）

```bash
# Dữ liệu PHẢI được encode Base64 trước khi gửi
# Encode plaintext sang base64
echo -n "Thông tin bí mật của tôi" | base64
# VGjDtG5nIHRpbiBiw60gbcOtdCBj4bunYSB0w7Rp

# Encrypt
vault write -format=json transit/encrypt/my-app-key \
  plaintext="$(echo -n 'Thông tin bí mật của tôi' | base64)"

# Output:
# {
#   "data": {
#     "ciphertext": "vault:v1:8SDd3WHDELevel1TVSKMQQ+gO1WwP2SfEwACJ3PKpLYJ9oNAiT1...",
#     "key_version": 1
#   }
# }
```

密文結構：`vault:v{version}:{base64-encoded-ciphertext}`

- `vault:` — 固定前綴
- `v1` — 使用的金鑰版本
- 其餘的 — 加密數據

### 3.2。解密（解密）

```bash
# Decrypt
vault write -format=json transit/decrypt/my-app-key \
  ciphertext="vault:v1:8SDd3WHDELevel1TVSKMQQ+gO1WwP2SfEwACJ3PKpLYJ9oNAiT1..."

# Output:
# {
#   "data": {
#     "plaintext": "VGjDtG5nIHRpbiBiw60gbcOtdCBj4bunYSB0w7Rp"
#   }
# }

# Decode base64 để lấy plaintext gốc
echo "VGjDtG5nIHRpbiBiw60gbcOtdCBj4bunYSB0w7Rp" | base64 -d
# Thông tin bí mật của tôi
```

### 3.3。單行加密/解密

```bash
# Encrypt one-liner
CIPHERTEXT=$(vault write -field=ciphertext transit/encrypt/my-app-key \
  plaintext="$(echo -n 'secret data' | base64)")

echo "Ciphertext: $CIPHERTEXT"

# Decrypt one-liner
PLAINTEXT=$(vault write -field=plaintext transit/decrypt/my-app-key \
  ciphertext="$CIPHERTEXT" | base64 -d)

echo "Plaintext: $PLAINTEXT"
```

## 4. 密鑰輪換

密鑰輪換允許創建新版本的密鑰，而不影響使用舊版本加密的資料。

### 4.1。旋轉鑰匙```bash
# Rotate key — tạo version mới
vault write -f transit/keys/my-app-key/rotate

# Kiểm tra — latest_version tăng lên
vault read transit/keys/my-app-key

# Output:
# latest_version    2
# keys              map[1:1705312200 2:1705398600]
```

### 4.2。加密 sau 旋轉

```bash
# Encrypt với key mới nhất (v2)
vault write -field=ciphertext transit/encrypt/my-app-key \
  plaintext="$(echo -n 'new data' | base64)"
# vault:v2:xyz...  ← Lưu ý prefix v2

# Decrypt dữ liệu cũ (v1) vẫn hoạt động
vault write -field=plaintext transit/decrypt/my-app-key \
  ciphertext="vault:v1:old-ciphertext..." | base64 -d
```

## 5. 重新包裝－升級密文

重新包裝允許將密文從舊金鑰版本「升級」到新版本**無需解密**。

```bash
# Rewrap ciphertext từ v1 sang latest version (v2)
vault write -field=ciphertext transit/rewrap/my-app-key \
  ciphertext="vault:v1:old-ciphertext..."
# vault:v2:new-ciphertext...  ← Giờ đã dùng v2
```

### 5.1。批次重寫腳本

```bash
#!/bin/bash
# rewrap-secrets.sh — Rewrap tất cả ciphertext trong database

set -euo pipefail

KEY_NAME="my-app-key"
DB_HOST="db.internal"
DB_NAME="myapp"

# Lấy tất cả records có ciphertext cũ
RECORDS=$(psql -h "$DB_HOST" -d "$DB_NAME" -t -A -c "
  SELECT id, encrypted_data
  FROM sensitive_data
  WHERE encrypted_data LIKE 'vault:v1:%'
")

COUNT=0
while IFS='|' read -r id ciphertext; do
  [ -z "$id" ] && continue
  
  # Rewrap
  NEW_CIPHERTEXT=$(vault write -field=ciphertext \
    "transit/rewrap/${KEY_NAME}" \
    ciphertext="$ciphertext")
  
  # Update database
  psql -h "$DB_HOST" -d "$DB_NAME" -c "
    UPDATE sensitive_data
    SET encrypted_data = '$NEW_CIPHERTEXT'
    WHERE id = $id
  "
  
  COUNT=$((COUNT + 1))
done <<< "$RECORDS"

echo "Rewrapped $COUNT records"
```

### 5.2。強制執行最低加密版本

重新包裝完成後，您必須使用新的版本金鑰：

```bash
# Bắt buộc encrypt với version >= 2
vault write transit/keys/my-app-key/config \
  min_encryption_version=2

# Chặn decrypt dữ liệu version < 2 (sau khi rewrap xong hết)
vault write transit/keys/my-app-key/config \
  min_decryption_version=2
```

## 6. 資料金鑰產生（信封加密）

當您需要加密大數據時，請使用**信封加密** - Vault 建立資料金鑰，應用程式使用該金鑰進行本機加密。

### 6.1。產生資料金鑰

```bash
# Generate data key — trả về cả plaintext và encrypted version
vault write -format=json transit/datakey/plaintext/my-app-key

# Output:
# {
#   "data": {
#     "ciphertext": "vault:v1:abc...",     ← encrypted data key (lưu cùng dữ liệu)
#     "key_version": 2,
#     "plaintext": "dGhpcyBpcyBhIDMyLWJ..." ← data key (dùng xong phải xóa khỏi memory)
#   }
# }

# Generate wrapped-only data key (không trả plaintext)
vault write -format=json transit/datakey/wrapped/my-app-key
```

### 6.2。信封加密工作流程

```
1. App gọi Vault → transit/datakey/plaintext/my-app-key
2. Vault trả về: plaintext_key + encrypted_key
3. App dùng plaintext_key để encrypt dữ liệu locally (AES-GCM)
4. App lưu: encrypted_data + encrypted_key vào storage
5. App XÓA plaintext_key khỏi memory

Khi decrypt:
1. App đọc encrypted_key từ storage
2. App gọi Vault → transit/decrypt/my-app-key với encrypted_key
3. Vault trả về plaintext_key
4. App dùng plaintext_key để decrypt dữ liệu locally
5. App XÓA plaintext_key khỏi memory
```

### 6.3。 Python信封加密範例

```python
import hvac
import os
import base64
from cryptography.hazmat.primitives.ciphers.aead import AESGCM

client = hvac.Client(
    url=os.environ['VAULT_ADDR'],
    token=os.environ['VAULT_TOKEN']
)

def envelope_encrypt(data: bytes, key_name: str) -> dict:
    """Encrypt dữ liệu lớn sử dụng envelope encryption."""
    # 1. Lấy data key từ Vault
    response = client.secrets.transit.generate_data_key(
        name=key_name,
        key_type='plaintext'
    )
    
    plaintext_key = base64.b64decode(response['data']['plaintext'])
    encrypted_key = response['data']['ciphertext']
    
    # 2. Encrypt locally bằng data key
    aesgcm = AESGCM(plaintext_key[:32])  # AES-256
    nonce = os.urandom(12)
    ciphertext = aesgcm.encrypt(nonce, data, None)
    
    # 3. XÓA plaintext key khỏi memory
    del plaintext_key
    
    return {
        'encrypted_key': encrypted_key,
        'nonce': base64.b64encode(nonce).decode(),
        'ciphertext': base64.b64encode(ciphertext).decode()
    }

def envelope_decrypt(envelope: dict, key_name: str) -> bytes:
    """Decrypt dữ liệu sử dụng envelope encryption."""
    # 1. Decrypt data key qua Vault
    response = client.secrets.transit.decrypt_data(
        name=key_name,
        ciphertext=envelope['encrypted_key']
    )
    
    plaintext_key = base64.b64decode(response['data']['plaintext'])
    
    # 2. Decrypt locally
    aesgcm = AESGCM(plaintext_key[:32])
    nonce = base64.b64decode(envelope['nonce'])
    ciphertext = base64.b64decode(envelope['ciphertext'])
    
    plaintext = aesgcm.decrypt(nonce, ciphertext, None)
    
    # 3. XÓA plaintext key
    del plaintext_key
    
    return plaintext

# Sử dụng
large_data = b"This is a large file content..." * 10000
envelope = envelope_encrypt(large_data, 'my-app-key')
recovered = envelope_decrypt(envelope, 'my-app-key')
assert recovered == large_data
```

## 7. HMAC — 基於雜湊的訊息驗證碼

```bash
# Tạo HMAC key
vault write -f transit/keys/hmac-key type=hmac

# Generate HMAC
vault write -format=json transit/hmac/hmac-key \
  input="$(echo -n 'data to authenticate' | base64)"

# Output:
# {
#   "data": {
#     "hmac": "vault:v1:UG5pdmVyc2FsIEhNQUM..."
#   }
# }

# Verify HMAC
vault write transit/verify/hmac-key \
  input="$(echo -n 'data to authenticate' | base64)" \
  hmac="vault:v1:UG5pdmVyc2FsIEhNQUM..."

# Output:
# Key      Value
# ---      -----
# valid    true

# Sử dụng HMAC algorithm cụ thể
vault write transit/hmac/hmac-key \
  input="$(echo -n 'data' | base64)" \
  algorithm="sha2-512"
```

## 8. 簽名與驗證－數位簽名

### 8.1。產生簽署金鑰

```bash
# Tạo ECDSA signing key
vault write transit/keys/signing-key type=ecdsa-p256

# Tạo Ed25519 signing key
vault write transit/keys/ed25519-key type=ed25519

# Tạo RSA signing key
vault write transit/keys/rsa-signing type=rsa-4096
```

### 8.2。簽署數據

```bash
# Sign với ECDSA
vault write -format=json transit/sign/signing-key \
  input="$(echo -n 'document content to sign' | base64)"

# Output:
# {
#   "data": {
#     "key_version": 1,
#     "signature": "vault:v1:MEYCIQDx..."
#   }
# }

# Sign với hash algorithm cụ thể
vault write -format=json transit/sign/signing-key \
  input="$(echo -n 'document content' | base64)" \
  hash_algorithm="sha2-512" \
  signature_algorithm="pkcs1v15"
```

### 8.3。驗證簽名

```bash
vault write transit/verify/signing-key \
  input="$(echo -n 'document content to sign' | base64)" \
  signature="vault:v1:MEYCIQDx..."

# Output:
# Key      Value
# ---      -----
# valid    true
```

### 8.4。預哈希簽名

```bash
# Khi data đã được hash sẵn
DATA_HASH=$(echo -n 'large document' | sha256sum | cut -d' ' -f1)

vault write transit/sign/signing-key \
  input="$(echo -n "$DATA_HASH" | xxd -r -p | base64)" \
  prehashed=true \
  hash_algorithm="sha2-256"
```

## 9. 聚合加密

收斂加密可確保**相同的明文始終產生相同的密文** - 對於搜尋加密資料非常有用。

### 9.1。建立收斂密鑰

```bash
# Tạo key với convergent encryption
vault write transit/keys/search-key \
  type="aes256-gcm96" \
  derived=true \
  convergent_encryption=true
```

### 9.2。使用上下文進行加密

```bash
# Context phải giống nhau để tạo cùng ciphertext
CONTEXT=$(echo -n "user-email" | base64)

# Encrypt
vault write -field=ciphertext transit/encrypt/search-key \
  plaintext="$(echo -n 'user@example.com' | base64)" \
  context="$CONTEXT"
# vault:v1:abc123...

# Encrypt lại cùng data + context → cùng ciphertext
vault write -field=ciphertext transit/encrypt/search-key \
  plaintext="$(echo -n 'user@example.com' | base64)" \
  context="$CONTEXT"
# vault:v1:abc123...  ← GIỐNG NHAU!

# Khác context → khác ciphertext
vault write -field=ciphertext transit/encrypt/search-key \
  plaintext="$(echo -n 'user@example.com' | base64)" \
  context="$(echo -n 'other-context' | base64)"
# vault:v1:xyz789...  ← KHÁC
```

### 9.3。使用案例：搜尋加密電子郵件

```sql
-- Lưu encrypted email vào database
INSERT INTO users (name, encrypted_email) VALUES
  ('User A', 'vault:v1:abc123...');

-- Search bằng cách encrypt search term với cùng context
-- App encrypt 'user@example.com' → 'vault:v1:abc123...'
SELECT * FROM users WHERE encrypted_email = 'vault:v1:abc123...';
```

## 10. 批次操作

### 10.1。大量加密

```bash
# Batch encrypt nhiều items cùng lúc
vault write transit/encrypt/my-app-key \
  batch_input='[
    {"plaintext": "'$(echo -n 'secret1' | base64)'"},
    {"plaintext": "'$(echo -n 'secret2' | base64)'"},
    {"plaintext": "'$(echo -n 'secret3' | base64)'"}
  ]'

# API call
curl --header "X-Vault-Token: $VAULT_TOKEN" \
  --request POST \
  --data '{
    "batch_input": [
      {"plaintext": "c2VjcmV0MQ=="},
      {"plaintext": "c2VjcmV0Mg=="},
      {"plaintext": "c2VjcmV0Mw=="}
    ]
  }' \
  "$VAULT_ADDR/v1/transit/encrypt/my-app-key"
```

### 10.2。批量解密

```bash
curl --header "X-Vault-Token: $VAULT_TOKEN" \
  --request POST \
  --data '{
    "batch_input": [
      {"ciphertext": "vault:v1:abc..."},
      {"ciphertext": "vault:v1:def..."},
      {"ciphertext": "vault:v1:ghi..."}
    ]
  }' \
  "$VAULT_ADDR/v1/transit/decrypt/my-app-key"
```

## 11.BYOK — 帶上您自己的金鑰

將加密金鑰從外部匯入 Vault Transit。

### 11.1。取得包裝金鑰

```bash
# Lấy Vault's wrapping key (RSA public key)
vault read -format=json transit/wrapping_key | jq -r '.data.public_key' > /tmp/wrapping-key.pem
```

### 11.2。包裝並導入金鑰

```bash
# Generate key bên ngoài
openssl rand -hex 32 > /tmp/my-key.hex

# Wrap key bằng Vault's wrapping key
# (Sử dụng PKCS#1 OAEP with SHA-256)
echo -n "$(cat /tmp/my-key.hex)" | xxd -r -p | \
  openssl pkeyutl -encrypt -pubin -inkey /tmp/wrapping-key.pem \
  -pkeyopt rsa_padding_mode:oaep -pkeyopt rsa_oaep_md:sha256 | \
  base64 -w0 > /tmp/wrapped-key.b64

# Import vào Vault
vault write transit/keys/imported-key/import \
  ciphertext="$(cat /tmp/wrapped-key.b64)" \
  type="aes256-gcm96"

# Cleanup
rm -f /tmp/my-key.hex /tmp/wrapped-key.b64 /tmp/wrapping-key.pem
```

## 12. 交通政策

```hcl
# Policy cho application: chỉ encrypt/decrypt
path "transit/encrypt/my-app-key" {
  capabilities = ["update"]
}

path "transit/decrypt/my-app-key" {
  capabilities = ["update"]
}

# Policy cho data key generation
path "transit/datakey/plaintext/my-app-key" {
  capabilities = ["update"]
}

# Policy cho signing service
path "transit/sign/signing-key" {
  capabilities = ["update"]
}

path "transit/verify/signing-key" {
  capabilities = ["update"]
}

# Policy cho HMAC
path "transit/hmac/hmac-key" {
  capabilities = ["update"]
}

# Policy cho key admin (rotation, config)
path "transit/keys/*" {
  capabilities = ["create", "read", "update", "list"]
}

# KHÔNG cho phép export keys
path "transit/export/*" {
  capabilities = ["deny"]
}
```

## 13. 最佳實踐

### 13.1。密鑰管理

- ✅ 每個應用程式/用例都有單獨的金鑰
- ✅ 啟用自動輪調（30-90 天）
- ✅ 設定 `exportable=false` （預設）
- ✅ 密鑰輪替後使用 `min_encryption_version`
- ✅ 定期重新包裝密文

### 13.2。效能

- ✅ 使用批次操作進行批次加密/解密
- ✅ 對大於 1MB 的資料進行信封加密
- ✅ 在需要時在客戶端快取資料鍵（短暫）
- ✅ ChaCha20-Poly1305 用於純軟體環境（無 AES-NI）

### 13.3。安全性

- ✅ 不記錄明文，只記錄密文
- ✅ 單獨的加密/解密權限
- ✅ 所有加密操作的審核日誌
- ✅ 使用後立即從記憶體中刪除明文金鑰

## 總結

在本課程中，您已經掌握了 Transit Secrets Engine：

1. **加密/解密** — 透過 Vault API 加密數據
2. **金鑰輪換** — 安全輪替金鑰，無需重新加密
3. **重新包裝** — 將密文升級到新的金鑰版本
4. **資料金鑰產生**－大數據的信封加密
5. **HMAC**——訊息認證
6. **簽名/驗證** — 數位簽名
7. **收斂加密**——加密資料搜索
8. **批次操作**－高效率的批次
9. **BYOK** — 從外部導入金鑰

下一篇文章將探討 **AWS、Azure、GCP Cloud Secrets Engine** - 為多雲環境建立動態憑證。
