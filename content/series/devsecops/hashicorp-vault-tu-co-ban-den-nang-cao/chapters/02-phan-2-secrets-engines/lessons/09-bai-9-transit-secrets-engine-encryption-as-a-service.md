---
id: 019d8b30-b209-7001-c002-e0c5f8200109
title: 'Bài 9: Transit Secrets Engine - Encryption as a Service'
slug: bai-9-transit-secrets-engine-encryption-as-a-service
description: >-
  Transit concept, encryption keys, Encrypt/Decrypt, Key rotation, rewrapping, Key types, HMAC, Sign/Verify, Data key generation, Convergent encryption, Batch operations, BYOK.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 9
section_title: "Phần 2: Secrets Engines - Quản lý Bí mật"
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault từ Cơ bản đến Nâng cao
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
---

## Giới thiệu

Transit Secrets Engine cung cấp **Encryption as a Service (EaaS)** — cho phép applications mã hóa và giải mã dữ liệu mà **không cần quản lý encryption keys**. Dữ liệu được mã hóa "in transit" qua Vault và trả về cho application, Vault không lưu trữ dữ liệu.

### Tại sao sử dụng Transit?

- **Tách biệt key management và data storage**: Applications không bao giờ thấy encryption key
- **Key rotation**: Rotate keys mà không cần re-encrypt toàn bộ dữ liệu
- **Centralized cryptography**: Đảm bảo sử dụng đúng algorithms và key sizes
- **Audit trail**: Mọi thao tác crypto đều được logged
- **Compliance**: Đáp ứng yêu cầu PCI-DSS, HIPAA về key management

### Mô hình hoạt động

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

> **Quan trọng:** Vault Transit KHÔNG lưu trữ dữ liệu. Nó chỉ thực hiện các phép toán cryptographic và trả kết quả.

## 1. Enable Transit Secrets Engine

```bash
# Enable transit engine
vault secrets enable transit

# Xác nhận
vault secrets list | grep transit
# transit/    transit    transit_abc123    n/a
```

## 2. Encryption Keys — Tạo và Quản lý

### 2.1. Tạo encryption key

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

### 2.2. Các loại key types

| Key Type | Thuật toán | Sử dụng |
|---|---|---|
| `aes128-gcm96` | AES-128-GCM | Encrypt/Decrypt |
| `aes256-gcm96` | AES-256-GCM (mặc định) | Encrypt/Decrypt |
| `chacha20-poly1305` | ChaCha20-Poly1305 | Encrypt/Decrypt |
| `ed25519` | Ed25519 | Sign/Verify |
| `ecdsa-p256` | ECDSA P-256 | Sign/Verify |
| `ecdsa-p384` | ECDSA P-384 | Sign/Verify |
| `ecdsa-p521` | ECDSA P-521 | Sign/Verify |
| `rsa-2048` | RSA 2048-bit | Encrypt/Decrypt, Sign/Verify |
| `rsa-3072` | RSA 3072-bit | Encrypt/Decrypt, Sign/Verify |
| `rsa-4096` | RSA 4096-bit | Encrypt/Decrypt, Sign/Verify |
| `hmac` | HMAC | HMAC generation |

### 2.3. Cấu hình key

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

## 3. Encrypt và Decrypt

### 3.1. Encrypt (Mã hóa)

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

Cấu trúc ciphertext: `vault:v{version}:{base64-encoded-ciphertext}`

- `vault:` — prefix cố định
- `v1` — version của key được sử dụng
- Phần còn lại — dữ liệu mã hóa

### 3.2. Decrypt (Giải mã)

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

### 3.3. One-liner encrypt/decrypt

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

## 4. Key Rotation

Key rotation cho phép tạo version mới của key mà **không ảnh hưởng** đến dữ liệu đã mã hóa bằng version cũ.

### 4.1. Rotate key

```bash
# Rotate key — tạo version mới
vault write -f transit/keys/my-app-key/rotate

# Kiểm tra — latest_version tăng lên
vault read transit/keys/my-app-key

# Output:
# latest_version    2
# keys              map[1:1705312200 2:1705398600]
```

### 4.2. Encrypt sau rotation

```bash
# Encrypt với key mới nhất (v2)
vault write -field=ciphertext transit/encrypt/my-app-key \
  plaintext="$(echo -n 'new data' | base64)"
# vault:v2:xyz...  ← Lưu ý prefix v2

# Decrypt dữ liệu cũ (v1) vẫn hoạt động
vault write -field=plaintext transit/decrypt/my-app-key \
  ciphertext="vault:v1:old-ciphertext..." | base64 -d
```

## 5. Rewrapping — Nâng cấp Ciphertext

Rewrap cho phép "nâng cấp" ciphertext từ key version cũ sang version mới **mà không cần decrypt**.

```bash
# Rewrap ciphertext từ v1 sang latest version (v2)
vault write -field=ciphertext transit/rewrap/my-app-key \
  ciphertext="vault:v1:old-ciphertext..."
# vault:v2:new-ciphertext...  ← Giờ đã dùng v2
```

### 5.1. Script rewrap hàng loạt

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

### 5.2. Enforce minimum encryption version

Sau khi rewrap xong, bắt buộc sử dụng key version mới:

```bash
# Bắt buộc encrypt với version >= 2
vault write transit/keys/my-app-key/config \
  min_encryption_version=2

# Chặn decrypt dữ liệu version < 2 (sau khi rewrap xong hết)
vault write transit/keys/my-app-key/config \
  min_decryption_version=2
```

## 6. Data Key Generation (Envelope Encryption)

Khi cần mã hóa dữ liệu lớn, sử dụng **envelope encryption** — Vault tạo data key, application dùng key đó để encrypt locally.

### 6.1. Generate data key

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

### 6.2. Envelope encryption workflow

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

### 6.3. Python envelope encryption example

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

## 7. HMAC — Hash-based Message Authentication Code

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

## 8. Sign và Verify — Chữ ký số

### 8.1. Tạo signing key

```bash
# Tạo ECDSA signing key
vault write transit/keys/signing-key type=ecdsa-p256

# Tạo Ed25519 signing key
vault write transit/keys/ed25519-key type=ed25519

# Tạo RSA signing key
vault write transit/keys/rsa-signing type=rsa-4096
```

### 8.2. Sign data

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

### 8.3. Verify signature

```bash
vault write transit/verify/signing-key \
  input="$(echo -n 'document content to sign' | base64)" \
  signature="vault:v1:MEYCIQDx..."

# Output:
# Key      Value
# ---      -----
# valid    true
```

### 8.4. Prehashed signing

```bash
# Khi data đã được hash sẵn
DATA_HASH=$(echo -n 'large document' | sha256sum | cut -d' ' -f1)

vault write transit/sign/signing-key \
  input="$(echo -n "$DATA_HASH" | xxd -r -p | base64)" \
  prehashed=true \
  hash_algorithm="sha2-256"
```

## 9. Convergent Encryption

Convergent encryption đảm bảo **cùng plaintext luôn tạo ra cùng ciphertext** — hữu ích cho searching trên encrypted data.

### 9.1. Tạo convergent key

```bash
# Tạo key với convergent encryption
vault write transit/keys/search-key \
  type="aes256-gcm96" \
  derived=true \
  convergent_encryption=true
```

### 9.2. Encrypt với context

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

### 9.3. Use case: Search trên encrypted emails

```sql
-- Lưu encrypted email vào database
INSERT INTO users (name, encrypted_email) VALUES
  ('User A', 'vault:v1:abc123...');

-- Search bằng cách encrypt search term với cùng context
-- App encrypt 'user@example.com' → 'vault:v1:abc123...'
SELECT * FROM users WHERE encrypted_email = 'vault:v1:abc123...';
```

## 10. Batch Operations

### 10.1. Batch encrypt

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

### 10.2. Batch decrypt

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

## 11. BYOK — Bring Your Own Key

Import encryption key từ bên ngoài vào Vault Transit.

### 11.1. Lấy wrapping key

```bash
# Lấy Vault's wrapping key (RSA public key)
vault read -format=json transit/wrapping_key | jq -r '.data.public_key' > /tmp/wrapping-key.pem
```

### 11.2. Wrap và import key

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

## 12. Policies cho Transit

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

## 13. Best Practices

### 13.1. Key Management

- ✅ Key riêng cho từng application/use case
- ✅ Enable auto-rotation (30-90 ngày)
- ✅ Set `exportable=false` (mặc định)
- ✅ Sử dụng `min_encryption_version` sau key rotation
- ✅ Rewrap ciphertext định kỳ

### 13.2. Performance

- ✅ Sử dụng batch operations cho bulk encrypt/decrypt
- ✅ Envelope encryption cho dữ liệu > 1MB
- ✅ Cache data keys phía client khi cần (short-lived)
- ✅ ChaCha20-Poly1305 cho software-only env (không AES-NI)

### 13.3. Security

- ✅ Không log plaintext, chỉ log ciphertext
- ✅ Separate encrypt/decrypt permissions
- ✅ Audit log cho mọi crypto operations
- ✅ XÓA plaintext keys khỏi memory ngay sau khi dùng

## Tổng kết

Trong bài học này, bạn đã nắm vững Transit Secrets Engine:

1. **Encrypt/Decrypt** — mã hóa dữ liệu qua Vault API
2. **Key rotation** — rotate keys an toàn, không cần re-encrypt
3. **Rewrapping** — nâng cấp ciphertext sang key version mới
4. **Data key generation** — envelope encryption cho dữ liệu lớn
5. **HMAC** — message authentication
6. **Sign/Verify** — chữ ký số
7. **Convergent encryption** — tìm kiếm trên dữ liệu mã hóa
8. **Batch operations** — xử lý hàng loạt hiệu quả
9. **BYOK** — import key từ bên ngoài

Bài tiếp theo sẽ khám phá **AWS, Azure, GCP Cloud Secrets Engines** — tạo dynamic credentials cho multi-cloud environments.
